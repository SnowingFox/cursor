import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
	ALLOW_UNSIGNED_SIDECAR_ENV,
	derivePolicyFromClientVerdict,
	describeSignerVerdict,
	developerUnsignedSidecarAllowed,
	enforceSidecarImageSigner,
} from "./server-identity";
import { WindowsSidecarUnavailableError } from "./sidecar-failure";
import { createContext, loggerKey, type LogEntry } from "@anysphere/context";
import {
	authenticodeInvocation,
	commonNameFromSubject,
	interpretAuthenticodeReport,
	isPinnedSigner,
	normalizeSignerSubject,
	parseDistinguishedName,
} from "./signer";

/**
 * What `X509Certificate2.Subject` actually renders for the pinned signer:
 * `CertNameToStr` quotes every value that contains a comma. This is the
 * string the old regex read `"Anysphere, Inc."` — quotes included — out of,
 * which is why the pin never matched on a real machine.
 */
const QUOTED_SUBJECT =
	'CN="Anysphere, Inc.", O="Anysphere, Inc.", L=San Francisco, S=California, C=US';

/** The script as PowerShell will actually see it. */
function decodeScript(args: readonly string[]): string {
	const encoded = args[args.indexOf("-EncodedCommand") + 1];
	return Buffer.from(encoded!, "base64").toString("utf16le");
}

describe("authenticode invocation", () => {
	const image = String.raw`C:\Cursor\resources\app\cursor-cua-sidecar.exe`;

	/**
	 * The bug this pins: the script used to read `$args[0]` while the path was
	 * passed as `-EncodedCommand <b64> -args <path>`. Measured on Windows
	 * PowerShell 5.1, `powershell.exe` rejects that command line outright —
	 * "Cannot process command because a command is already specified with
	 * -Command or -EncodedCommand." — and exits `0xFFFD0000` without running
	 * the encoded script at all, so every call returned `unverifiable`. That is
	 * silent: policy falls back to `audit`, so signer pinning would never
	 * enforce even after the sidecar is signed.
	 *
	 * The "ignored, so `$args` is empty" reading is what the docs imply and is
	 * what an `-EncodedCommand` *without* `-args` does; it describes an
	 * invocation this client never sent. Both routes yield a non-zero exit and
	 * non-JSON stdout, so the conclusion is the same either way — but rejection
	 * is the stronger statement, since it forecloses a partial verdict.
	 */
	it("does not pass -args, which -EncodedCommand rejects", () => {
		const { args } = authenticodeInvocation(image);
		expect(args).not.toContain("-args");
		expect(args).not.toContain(image);
		expect(decodeScript(args)).not.toContain("$args");
	});

	it("passes the target in the environment, where the script reads it", () => {
		const { args, env } = authenticodeInvocation(image);
		expect(env.CURSOR_CUA_SIGNER_TARGET).toBe(image);
		expect(decodeScript(args)).toContain("$env:CURSOR_CUA_SIGNER_TARGET");
	});

	// The reason the path was an argument rather than interpolated in the
	// first place; the environment keeps that property.
	it.each([
		String.raw`C:\a"; Remove-Item C:\b; "\x.exe`,
		'C:\\a$(Get-Process)\\x.exe',
		"C:\\a\nWrite-Output pwned\\x.exe",
	])("never interpolates the path into the script: %s", hostile => {
		const { args, env } = authenticodeInvocation(hostile);
		const script = decodeScript(args);
		expect(script).not.toContain("Remove-Item");
		expect(script).not.toContain("Get-Process");
		expect(script).not.toContain("pwned");
		expect(env.CURSOR_CUA_SIGNER_TARGET).toBe(hostile);
	});

	// An empty variable would otherwise reach -LiteralPath and produce the
	// same silent `unverifiable` the -args bug did.
	it("fails loudly rather than silently when the target is missing", () => {
		expect(decodeScript(authenticodeInvocation(image).args)).toContain(
			'throw "no signer target"'
		);
	});

	/**
	 * `scripts/verify-authenticode-invocation.ps1` is the Windows-runner proof
	 * for this path, and it is self-contained so it needs no checkout or Node.
	 * That copy is only worth running if it is the same script the client
	 * sends, so pin the two together: a vector file only one side reads is
	 * the failure mode here too.
	 */
	it("matches the script in the Windows verification script", () => {
		const ps1 = readFileSync(
			join(__dirname, "..", "..", "..", "scripts", "verify-authenticode-invocation.ps1"),
			"utf8"
		);
		const block =
			/# --- BEGIN SHIPPED SCRIPT ---\r?\n\$shippedScript = @'\r?\n([\s\S]*?)\r?\n'@\r?\n# --- END SHIPPED SCRIPT ---/.exec(
				ps1
			);
		expect(block, "shipped-script markers not found").not.toBeNull();
		expect(block![1]!.replace(/\r\n/g, "\n")).toBe(
			decodeScript(authenticodeInvocation(image).args)
		);
	});

	// The pin's input has to be the bare RDN value. `Subject` is
	// CertNameToStr output and quotes a CN containing a comma; GetNameInfo is
	// the same CERT_NAME_SIMPLE_DISPLAY_TYPE read the sidecar's `sys/peer.rs`
	// uses for the client, so both directions of the pin see identical bytes.
	it("reads the common name through GetNameInfo, not by parsing Subject", () => {
		const script = decodeScript(authenticodeInvocation(image).args);
		expect(script).toContain(
			"GetNameInfo([System.Security.Cryptography.X509Certificates.X509NameType]::SimpleName, $false)"
		);
		expect(script).toContain("commonName = $commonName");
		// Subject stays for diagnostics and as the parser fallback.
		expect(script).toContain("subject = $subject");
	});

	it("keeps the execution-policy bypass and the encoded form", () => {
		const { args } = authenticodeInvocation(image);
		expect(args).toEqual([
			"-NoProfile",
			"-NonInteractive",
			"-ExecutionPolicy",
			"Bypass",
			"-EncodedCommand",
			expect.any(String),
		]);
	});
});

describe("signer pinning", () => {
	// Both sides must normalize identically or one admits what the other
	// rejects; these mirror the cases in peer_policy.rs.
	it.each([
		"Anysphere, Inc.",
		"anysphere, inc.",
		"ANYSPHERE, INC.",
		"  Anysphere,   Inc.  ",
		"Anysphere,\tInc.",
	])("accepts %j as the pinned signer", subject => {
		expect(isPinnedSigner(subject)).toBe(true);
	});

	it.each([
		"",
		"   ",
		"Anysphere",
		"Anysphere, Inc",
		"Anysphere, Inc. Ltd",
		"Not Anysphere, Inc.",
		"Anysphere, Inc.. ",
		"AnysphereInc.",
	])("rejects the near miss %j", subject => {
		expect(isPinnedSigner(subject)).toBe(false);
	});

	it("collapses whitespace and case but nothing else", () => {
		expect(normalizeSignerSubject("  A   B\tC ")).toBe("a b c");
	});
});

describe("commonNameFromSubject", () => {
	/**
	 * The bug. The regex kept CertNameToStr's quotes, so this returned
	 * `"Anysphere, Inc."` and the pin compared it against `Anysphere, Inc.`.
	 */
	it("strips the quotes CertNameToStr puts around a CN with a comma", () => {
		expect(commonNameFromSubject(QUOTED_SUBJECT)).toBe("Anysphere, Inc.");
	});

	it.each([
		// CertNameToStr doubles an embedded quote inside a quoted value.
		[
			'CN="Acme ""Widgets"", Inc.", O="Acme ""Widgets"", Inc.", C=US',
			'Acme "Widgets", Inc.',
		],
		// RFC 4514 backslash escapes, quoted and unquoted.
		['CN="Acme \\"Widgets\\" Co", O=Acme', 'Acme "Widgets" Co'],
		["CN=Anysphere\\, Inc., O=Anysphere\\, Inc., C=US", "Anysphere, Inc."],
		// `\XX` hex pairs decode as UTF-8 bytes (`\2c` is a comma).
		["CN=Anysphere\\2c Inc., O=Anysphere", "Anysphere, Inc."],
		["CN=Caf\\c3\\a9 Anysphere, O=Anysphere", "Café Anysphere"],
		// A quoted value may carry the characters that end an unquoted one.
		['CN="A+B; C=D, E=F", O=Anysphere', "A+B; C=D, E=F"],
		// Empty quoted value.
		['CN="", O=Anysphere', undefined],
	])("unescapes %j", (subject, expected) => {
		expect(commonNameFromSubject(subject)).toBe(expected);
	});

	it.each([
		// `+` joins the attributes of one multi-valued RDN; CN first or not.
		['CN="Anysphere, Inc."+OU=Release Engineering, O="Anysphere, Inc."', "Anysphere, Inc."],
		['OU=Release Engineering+CN="Anysphere, Inc.", C=US', "Anysphere, Inc."],
		["OU=Release+CN=Anysphere, O=Anysphere", "Anysphere"],
		// `;` is an RDN separator too, and the type is case-insensitive.
		['cn="Anysphere, Inc."; o="Anysphere, Inc."', "Anysphere, Inc."],
		// Only the first CN counts.
		["CN=First, OU=x, CN=Second", "First"],
	])("finds the CN in %j", (subject, expected) => {
		expect(commonNameFromSubject(subject)).toBe(expected);
	});

	/**
	 * Windows never renders a comma-bearing value unquoted, but a renderer
	 * that did should still yield the whole value rather than `Anysphere`.
	 * The separator only counts when another `type=` follows it.
	 */
	it("tolerates an unquoted CN that itself contains a comma", () => {
		expect(
			commonNameFromSubject(
				"CN=Anysphere, Inc., O=Anysphere, Inc., L=San Francisco, S=California, C=US"
			)
		).toBe("Anysphere, Inc.");
		// An OID-form attribute type is a boundary as well.
		expect(
			commonNameFromSubject("CN=Anysphere, OID.1.2.840.113549.1.9.1=x@y")
		).toBe("Anysphere");
	});

	it("reads a CN at the end of the subject", () => {
		expect(commonNameFromSubject("O=Anysphere, CN=Anysphere, Inc.")).toBe(
			"Anysphere, Inc."
		);
		expect(commonNameFromSubject('O=Anysphere, CN="Anysphere, Inc."')).toBe(
			"Anysphere, Inc."
		);
	});

	it("returns undefined when there is no CN", () => {
		expect(commonNameFromSubject("O=Anysphere, C=US")).toBeUndefined();
		expect(commonNameFromSubject("")).toBeUndefined();
		expect(commonNameFromSubject("garbage without an equals sign")).toBeUndefined();
	});

	it("survives an unterminated quote and a trailing backslash", () => {
		expect(commonNameFromSubject('CN="Anysphere, Inc.')).toBe("Anysphere, Inc.");
		expect(commonNameFromSubject("CN=Anysphere\\")).toBe("Anysphere");
	});

	it("exposes every attribute in order", () => {
		expect(parseDistinguishedName(QUOTED_SUBJECT)).toEqual([
			{ type: "CN", value: "Anysphere, Inc." },
			{ type: "O", value: "Anysphere, Inc." },
			{ type: "L", value: "San Francisco" },
			{ type: "S", value: "California" },
			{ type: "C", value: "US" },
		]);
	});
});

describe("interpretAuthenticodeReport", () => {
	it("trusts a valid signature from the pinned subject", () => {
		expect(
			interpretAuthenticodeReport({
				status: "Valid",
				subject: "CN=Anysphere, Inc., O=Anysphere, Inc., C=US",
				message: "Signature verified.",
			})
		).toEqual({ kind: "trusted", subject: "Anysphere, Inc." });
	});

	// The regression: this is the report a real signed sidecar produces, and
	// before the fix it came back `untrusted-signer` with the quotes intact.
	it("trusts the quoted Subject rendering a signed sidecar really produces", () => {
		expect(
			interpretAuthenticodeReport({
				status: "Valid",
				subject: QUOTED_SUBJECT,
				message: "Signature verified.",
			})
		).toEqual({ kind: "trusted", subject: "Anysphere, Inc." });
	});

	it("prefers the GetNameInfo common name over parsing Subject", () => {
		expect(
			interpretAuthenticodeReport({
				status: "Valid",
				subject: QUOTED_SUBJECT,
				commonName: "Anysphere, Inc.",
				message: "Signature verified.",
			})
		).toEqual({ kind: "trusted", subject: "Anysphere, Inc." });
		// A common name that disagrees with Subject wins: it is the RDN value
		// itself, and Subject is a rendering of it.
		expect(
			interpretAuthenticodeReport({
				status: "Valid",
				subject: QUOTED_SUBJECT,
				commonName: "Contoso Ltd.",
			})
		).toEqual({ kind: "untrusted-signer", subject: "Contoso Ltd." });
	});

	it("falls back to Subject when the common name is empty or not a string", () => {
		for (const commonName of ["", "   ", 42, null, undefined]) {
			expect(
				interpretAuthenticodeReport({
					status: "Valid",
					subject: QUOTED_SUBJECT,
					commonName,
				})
			).toEqual({ kind: "trusted", subject: "Anysphere, Inc." });
		}
	});

	it("names a valid signature from somebody else", () => {
		expect(
			interpretAuthenticodeReport({
				status: "Valid",
				subject: "CN=Contoso Ltd., O=Contoso Ltd., C=US",
				message: "Signature verified.",
			})
		).toEqual({ kind: "untrusted-signer", subject: "Contoso Ltd." });
	});

	it.each(["NotSigned", "HashMismatch", "UnknownError", "NotTrusted"])(
		"treats %s as unsigned rather than trusted",
		status => {
			expect(
				interpretAuthenticodeReport({ status, subject: "", message: status })
			).toMatchObject({ kind: "unsigned" });
		}
	);

	it("refuses a valid signature with no subject", () => {
		expect(
			interpretAuthenticodeReport({ status: "Valid", subject: "" })
		).toMatchObject({ kind: "unverifiable" });
	});
});

describe("derived enforcement", () => {
	it("enforces only when the client itself is pinned-signed", () => {
		expect(
			derivePolicyFromClientVerdict({
				kind: "trusted",
				subject: "Anysphere, Inc.",
			})
		).toBe("enforce");
		for (const verdict of [
			{ kind: "unsigned", detail: "NotSigned" },
			{ kind: "untrusted-signer", subject: "Contoso Ltd." },
			{ kind: "unverifiable", detail: "boom" },
		] as const) {
			expect(derivePolicyFromClientVerdict(verdict)).toBe("audit");
		}
	});

	it("blocks an unpinned sidecar under enforce and admits it under audit", () => {
		const ctx = createContext();
		const unpinned = {
			imagePath: String.raw`C:\Cursor\cursor-cua-sidecar.exe`,
			verdict: { kind: "untrusted-signer", subject: "Contoso Ltd." },
		} as const;

		expect(() =>
			enforceSidecarImageSigner(ctx, { ...unpinned, policy: "enforce" })
		).toThrow('is signed by Contoso Ltd., not "Anysphere, Inc."');
		expect(() =>
			enforceSidecarImageSigner(ctx, { ...unpinned, policy: "audit" })
		).not.toThrow();
		// A pinned sidecar is admitted regardless of the policy.
		expect(() =>
			enforceSidecarImageSigner(ctx, {
				imagePath: unpinned.imagePath,
				verdict: { kind: "trusted", subject: "Anysphere, Inc." },
				policy: "enforce",
			})
		).not.toThrow();
	});

	it("describes each verdict for the log", () => {
		expect(
			describeSignerVerdict({ kind: "unsigned", detail: "NotSigned" })
		).toContain("NotSigned");
	});
});

/**
 * The escape hatch exists so the local testing recipe (an unsigned, locally
 * built sidecar in the dev-install slot, driven by a signed Cursor) survives
 * enforcement. Everything about it is deliberately narrow: exact value, two
 * sources, a warning on every launch, and a refusal that names it.
 */
describe("developer escape hatch", () => {
	const unsigned = { kind: "unsigned", detail: "NotSigned" } as const;
	const devImage = String.raw`C:\Users\jdoe\.cursor\cursor-computer-use\cursor-cua-sidecar.exe`;
	const enabled = { [ALLOW_UNSIGNED_SIDECAR_ENV]: "1" };

	function recordingContext() {
		const entries: LogEntry[] = [];
		const ctx = createContext().with(loggerKey, {
			log: (_ctx, entry) => {
				entries.push(entry);
			},
		});
		return { ctx, entries };
	}

	it("is the variable CURSOR_CUA_ALLOW_UNSIGNED_SIDECAR", () => {
		expect(ALLOW_UNSIGNED_SIDECAR_ENV).toBe("CURSOR_CUA_ALLOW_UNSIGNED_SIDECAR");
	});

	it.each(["dev-install", "env-override"] as const)(
		"applies to the %s source only when the variable is exactly 1",
		source => {
			expect(developerUnsignedSidecarAllowed(source, enabled)).toBe(true);
			for (const value of ["true", "yes", "on", "0", "", " 1", "1 ", "11"]) {
				expect(
					developerUnsignedSidecarAllowed(source, {
						[ALLOW_UNSIGNED_SIDECAR_ENV]: value,
					}),
					`value ${JSON.stringify(value)}`
				).toBe(false);
			}
			expect(developerUnsignedSidecarAllowed(source, {})).toBe(false);
		}
	);

	it("never applies to a release the client downloaded itself", () => {
		expect(developerUnsignedSidecarAllowed("download-cache", enabled)).toBe(false);
		const { ctx, entries } = recordingContext();
		expect(() =>
			enforceSidecarImageSigner(ctx, {
				imagePath: String.raw`C:\Users\jdoe\.cursor\computer-use-sidecar\cursor-cua-sidecar.exe`,
				verdict: unsigned,
				policy: "enforce",
				source: "download-cache",
				env: enabled,
			})
		).toThrow("refusing to launch");
		expect(entries).toEqual([]);
	});

	it("refuses with the unsigned_sidecar code so the remedy reaches the user", () => {
		const { ctx } = recordingContext();
		let refusal: unknown;
		try {
			enforceSidecarImageSigner(ctx, {
				imagePath: devImage,
				verdict: unsigned,
				policy: "enforce",
				source: "dev-install",
				env: {},
			});
		} catch (error) {
			refusal = error;
		}
		expect(refusal).toBeInstanceOf(WindowsSidecarUnavailableError);
		expect((refusal as WindowsSidecarUnavailableError).failure).toMatchObject({
			code: "unsigned_sidecar",
			retryable: false,
		});
		expect((refusal as Error).message).toContain("[unsigned_sidecar]");
		expect((refusal as Error).message).toContain(`${ALLOW_UNSIGNED_SIDECAR_ENV}=1`);
	});

	it("launches an unpinned dev-install sidecar under enforce and says so", () => {
		const { ctx, entries } = recordingContext();

		expect(() =>
			enforceSidecarImageSigner(ctx, {
				imagePath: devImage,
				verdict: unsigned,
				policy: "enforce",
				source: "dev-install",
				env: enabled,
			})
		).not.toThrow();

		const warning = entries.find(entry => entry.level === "warn");
		expect(warning?.message).toContain("DEVELOPER OVERRIDE");
		expect(warning?.message).toContain(`${ALLOW_UNSIGNED_SIDECAR_ENV}=1`);
		expect(warning?.metadata).toMatchObject({
			imagePath: devImage,
			source: "dev-install",
		});
	});

	it("names the escape hatch when refusing a dev-install sidecar", () => {
		const { ctx } = recordingContext();
		expect(() =>
			enforceSidecarImageSigner(ctx, {
				imagePath: devImage,
				verdict: unsigned,
				policy: "enforce",
				source: "dev-install",
				env: {},
			})
		).toThrow(`${ALLOW_UNSIGNED_SIDECAR_ENV}=1`);
	});

	it("refuses an unpinned downloaded sidecar with the variable set, and offers no remedy", () => {
		const { ctx, entries } = recordingContext();
		let refusal: unknown;
		try {
			enforceSidecarImageSigner(ctx, {
				imagePath: String.raw`C:\Users\jdoe\.cursor\computer-use-sidecar\cursor-cua-sidecar.exe`,
				verdict: unsigned,
				policy: "enforce",
				source: "download-cache",
				env: enabled,
			});
		} catch (error) {
			refusal = error;
		}
		expect(refusal).toBeInstanceOf(Error);
		expect((refusal as Error).message).toContain("refusing to launch");
		expect((refusal as Error).message).not.toContain(ALLOW_UNSIGNED_SIDECAR_ENV);
		expect(entries).toEqual([]);
	});

	it("changes nothing under audit or for a pinned image", () => {
		const { ctx, entries } = recordingContext();
		enforceSidecarImageSigner(ctx, {
			imagePath: devImage,
			verdict: { kind: "trusted", subject: "Anysphere, Inc." },
			policy: "enforce",
			source: "dev-install",
			env: enabled,
		});
		expect(entries).toEqual([]);
		enforceSidecarImageSigner(ctx, {
			imagePath: devImage,
			verdict: unsigned,
			policy: "audit",
			source: "dev-install",
			env: {},
		});
		expect(entries.map(entry => entry.message)).toEqual([
			expect.stringContaining("AUDIT-ONLY"),
		]);
	});
});
