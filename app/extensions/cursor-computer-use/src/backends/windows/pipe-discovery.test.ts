import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { conformanceCases } from "./conformance-vectors.test-support";
import {
	WINDOWS_SIDECAR_EXECUTABLE_NAME,
	WINDOWS_SIDECAR_INSTALL_METADATA_NAME,
	WINDOWS_SIDECAR_INSTALL_RELATIVE_DIR,
	hasCommittedWindowsSidecarInstall,
	isSidShaped,
	parseWhoamiUserSid,
	resolveWindowsSidecarExecutable,
	windowsSidecarPipeName,
} from "./pipe-discovery";

const USER_SID = "S-1-5-21-1234567890-1234567890-1234567890-1001";
/**
 * A real Entra ID (Azure AD) SID, measured on the first Windows hardware run.
 * Authority 12, not the `S-1-5-21` the crate README quotes. AAD-joined
 * machines are the common corporate case, so this shape has to work.
 */
const AAD_USER_SID = "S-1-12-1-2633038542-1162385617-241424020-1679904907";

describe("parseWhoamiUserSid", () => {
	it.each([
		[`"desktop-abc\\jdoe","${USER_SID}"`, USER_SID],
		// whoami writes CRLF, and the account name can carry odd characters.
		[`"desktop-abc\\jdoe","${USER_SID}"\r\n`, USER_SID],
		[`"desktop-abc\\o'brien, j","${USER_SID}"\r\n`, USER_SID],
		// What whoami actually prints on an AAD-joined machine.
		[`"azuread\\jdoe","${AAD_USER_SID}"\r\n`, AAD_USER_SID],
	])("reads the SID out of a whoami CSV row (%j)", (stdout, expected) => {
		expect(parseWhoamiUserSid(stdout)).toBe(expected);
	});

	it.each(["", "\r\n", "ERROR: Access is denied.", '"desktop\\jdoe"'])(
		"rejects output with no usable SID (%j)",
		stdout => {
			expect(() => parseWhoamiUserSid(stdout)).toThrow(
				"could not determine the current user SID"
			);
		}
	);
});

/**
 * The four forms the sidecar's `is_sid_shaped` doc comment enumerates. Mirrored
 * here so a divergence between the two implementations fails on this side too.
 */
const ACCEPTED_SID_FORMS: [string, string][] = [
	["a decimal domain SID", USER_SID],
	["an Entra ID (Azure AD) authority-12 SID", AAD_USER_SID],
	["a short well-known SID", "S-1-5-18"],
	// The exact form an earlier, stricter version of isSidShaped rejected.
	["a hexadecimal identifier authority", "S-1-0x020000000000-1-2-3"],
	// The rule accepts a lowercase leading S; so must this side.
	["a lowercase leading s", "s-1-5-21-1-2-3-1001"],
];

const REJECTED_SID_FORMS: string[] = [
	"",
	"S-",
	"not-a-sid",
	// Second character must be a dash.
	"S1-5-21-1001",
	// A bare dot is refused, which forecloses every traversal segment rather
	// than blacklisting `..` and leaving `.` or `...` reachable.
	"S-1-5-21-1001.evil",
	String.raw`S-1-5-21-1001\..\evil`,
	"S-1-5-21-1001/../evil",
	"S-1-5-21-1001; rm -rf /",
	`S-1-${"9".repeat(300)}`,
];

describe("isSidShaped", () => {
	it.each(ACCEPTED_SID_FORMS)("accepts %s", (_description, sid) => {
		expect(isSidShaped(sid)).toBe(true);
	});

	it.each(REJECTED_SID_FORMS)("rejects %j", candidate => {
		expect(isSidShaped(candidate)).toBe(false);
	});

	// The cross-language guard. `is_sid_shaped` in launch_binding.rs is the
	// canonical definition and this is a hand-written mirror of it, which has
	// drifted once already; these vectors are what makes a future divergence
	// fail rather than ship. Both sides must read them — see
	// packages/computer-use/conformance/README.md.
	it("matches the shared conformance vectors", () => {
		const cases = conformanceCases("sid-shape");
		expect(cases.length).toBeGreaterThan(0);
		for (const { input, expect: want, note } of cases) {
			expect(isSidShaped(input), `${note} — input ${JSON.stringify(input)}`)
				.toBe(want);
		}
	});
});

describe("windowsSidecarPipeName", () => {
	it.each(ACCEPTED_SID_FORMS)(
		"builds the per-user name for %s",
		(_description, sid) => {
			// Must match pipe_name() in packages/computer-use/windows/src/sys/pipe.rs.
			expect(windowsSidecarPipeName(sid)).toBe(
				String.raw`\\.\pipe\cursor-cua-` + sid
			);
		}
	);

	it.each(REJECTED_SID_FORMS)("refuses to build a name from %j", candidate => {
		expect(() => windowsSidecarPipeName(candidate)).toThrow(
			"refusing to build a pipe name",
		);
	});
});

describe("resolveWindowsSidecarExecutable", () => {
	let directory: string;

	beforeEach(async () => {
		directory = await mkdtemp(join(tmpdir(), "cua-windows-discovery-"));
	});

	afterEach(async () => {
		await rm(directory, { recursive: true, force: true });
	});

	/** Lay down an executable and return the path callers should see. */
	async function place(...segments: string[]): Promise<string> {
		const target = join(directory, ...segments);
		await mkdir(join(target, ".."), { recursive: true });
		await writeFile(target, "");
		return target;
	}

	it("resolves nothing when no sidecar is installed", () => {
		expect(
			resolveWindowsSidecarExecutable({
				env: {},
				homeDir: join(directory, "home"),
			})
		).toBeUndefined();
	});

	it("prefers the env override over an installed sidecar", async () => {
		const override = await place("custom", WINDOWS_SIDECAR_EXECUTABLE_NAME);
		await place("home", ".cursor", "cursor-computer-use", WINDOWS_SIDECAR_EXECUTABLE_NAME);

		expect(
			resolveWindowsSidecarExecutable({
				env: { CUA_SERVICE_EXE: override },
				homeDir: join(directory, "home"),
			})
		).toEqual({ executablePath: override, source: "env-override" });
	});

	it("falls back to the dev install", async () => {
		const devInstall = await place(
			"home",
			".cursor",
			"cursor-computer-use",
			WINDOWS_SIDECAR_EXECUTABLE_NAME
		);

		expect(
			resolveWindowsSidecarExecutable({
				env: {},
				homeDir: join(directory, "home"),
			})
		).toEqual({ executablePath: devInstall, source: "dev-install" });
	});

	// The download cache is the product path. It sits before the dev-install
	// slot (a hand-staged file must not shadow a verified release).
	describe("download cache", () => {
		const options = () => ({
			env: {},
			homeDir: join(directory, "home"),
		});

		async function placeCache(metadata?: string): Promise<string> {
			const executable = await place(
				"home",
				WINDOWS_SIDECAR_INSTALL_RELATIVE_DIR,
				WINDOWS_SIDECAR_EXECUTABLE_NAME
			);
			if (metadata !== undefined) {
				await writeFile(
					join(directory, "home", WINDOWS_SIDECAR_INSTALL_RELATIVE_DIR, WINDOWS_SIDECAR_INSTALL_METADATA_NAME),
					metadata
				);
			}
			return executable;
		}

		const committed = JSON.stringify({
			schemaVersion: 1,
			manifestUrl: "https://downloads.cursor.com/computer-use-sidecar/releases/explicit/3.21.0/" + "a".repeat(40) + "-win32-x64.json",
			sha256: "b".repeat(64),
		});

		it("resolves a committed install ahead of the dev install", async () => {
			const cached = await placeCache(committed);
			await place("home", ".cursor", "cursor-computer-use", WINDOWS_SIDECAR_EXECUTABLE_NAME);

			expect(hasCommittedWindowsSidecarInstall(join(directory, "home"))).toBe(true);
			expect(resolveWindowsSidecarExecutable(options())).toEqual({
				executablePath: cached,
				source: "download-cache",
			});
		});

		// A crash before the commit record is written leaves an executable
		// with no record. That is an empty slot, not an install.
		it.each([
			["no installed.json", undefined],
			["malformed installed.json", "{not json"],
			["a foreign schema", JSON.stringify({ schemaVersion: 2, manifestUrl: "x" })],
			["no manifest URL", JSON.stringify({ schemaVersion: 1, manifestUrl: "" })],
		])("treats an executable with %s as not installed", async (_name, metadata) => {
			await placeCache(metadata);
			const devInstall = await place("home", ".cursor", "cursor-computer-use", WINDOWS_SIDECAR_EXECUTABLE_NAME);

			expect(hasCommittedWindowsSidecarInstall(join(directory, "home"))).toBe(false);
			expect(resolveWindowsSidecarExecutable(options())).toEqual({
				executablePath: devInstall,
				source: "dev-install",
			});
		});

		it("is left out of the order on request", async () => {
			await placeCache(committed);

			expect(
				resolveWindowsSidecarExecutable({ ...options(), skipDownloadCache: true })
			).toBeUndefined();
		});
	});
});
