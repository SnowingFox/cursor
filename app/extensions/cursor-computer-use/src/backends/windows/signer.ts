/**
 * Authenticode signer pinning, mirroring `peer_policy::is_pinned_signer` in
 * `packages/computer-use/windows/src/peer_policy.rs`.
 *
 * The sidecar pins the *client's* image; this is the same test applied in the
 * other direction, to the sidecar binary the client is about to run. Both sides
 * must normalize identically or one will admit what the other rejects.
 *
 * Enforcement is derived, not configured, exactly as on the sidecar side: a
 * client whose own image is pinned-signed enforces, and an unsigned one (a dev
 * build, or CI) logs the verdict and continues. There is no setting — a knob
 * here would be the first thing anyone turned off.
 */

import { execFile } from 'node:child_process';
import * as path from 'node:path';
import { promisify } from 'node:util';
import { CURSOR_PRODUCT_PROFILE } from './product-profile';

const execFileAsync = promisify(execFile);

/**
 * The subjects the product pins, from the crate's checked-in profile — the
 * same list `peer_policy.rs` pins for the client, so neither side can move
 * without the other.
 */
export const PINNED_SIGNER_SUBJECTS: readonly string[] =
	CURSOR_PRODUCT_PROFILE.pinnedSignerSubjects;

const SIGNER_CHECK_TIMEOUT_MS = 10_000;

export type SignerVerdict =
	| { kind: 'trusted'; subject: string }
	| { kind: 'untrusted-signer'; subject: string }
	| { kind: 'unsigned'; detail: string }
	| { kind: 'unverifiable'; detail: string };

/**
 * Collapse internal whitespace and case, because the same subject renders with
 * different spacing depending on how the certificate was issued. Everything
 * else must match exactly — not a prefix test, and not "chains to a trusted
 * root".
 */
export function normalizeSignerSubject(subject: string): string {
	return subject.trim().split(/\s+/).join(' ').toLowerCase();
}

export function isPinnedSigner(subject: string): boolean {
	const normalized = normalizeSignerSubject(subject);
	if (normalized.length === 0) {
		return false;
	}
	return PINNED_SIGNER_SUBJECTS.some(
		pinned => normalizeSignerSubject(pinned) === normalized
	);
}

/** One `type=value` attribute of a distinguished name, unquoted and unescaped. */
export interface DistinguishedNameAttribute {
	type: string;
	value: string;
}

/**
 * Where the next RDN or attribute begins, as `<separator> <type>=` — the
 * attribute-type grammar of RFC 4514 plus the `OID.1.2.3` and `S`/`E`
 * shorthands Windows renders.
 */
const ATTRIBUTE_BOUNDARY_RE = /^[,;+]\s*[A-Za-z][A-Za-z0-9.-]*\s*=/;
const HEX_PAIR_RE = /^[0-9A-Fa-f]{2}$/;

/**
 * Parse an X.500 distinguished name string into its attributes.
 *
 * `X509Certificate2.Subject` is `CertNameToStr` in `CERT_X500_NAME_STR` form,
 * which is *not* the `type=value, type=value` line the old regex assumed: a
 * value containing a comma, plus, quote, semicolon, or angle bracket is
 * wrapped in double quotes, with embedded quotes doubled. The pinned signer
 * has a comma, so it renders as `CN="Anysphere, Inc."`, and the regex kept the
 * quotes — the pin compared `"Anysphere, Inc."` (with quotes) against
 * `Anysphere, Inc.` and never matched. That silently derived `audit` on every
 * shipped build.
 *
 * This reads the value the way the renderer wrote it: a quoted value ends at
 * the closing quote (`""` is a literal quote, `\x` is `x`); an unquoted value
 * honours RFC 4514 backslash escapes (`\,`, `\+`, `\XX` hex bytes) and ends at
 * a `,`, `;` or `+` that is followed by another `type=`. That last condition is
 * a deliberate leniency: a renderer that does not quote (Windows always does)
 * still yields the whole `Anysphere, Inc.` rather than a truncated
 * `Anysphere`, and a real `CertNameToStr` line is never ambiguous because
 * every RDN after a value is `type=`.
 */
export function parseDistinguishedName(
	subject: string
): DistinguishedNameAttribute[] {
	const attributes: DistinguishedNameAttribute[] = [];
	const length = subject.length;
	let index = 0;
	while (index < length) {
		while (index < length && subject[index] === ' ') {
			index += 1;
		}
		const equals = subject.indexOf('=', index);
		if (equals < 0) {
			break;
		}
		const type = subject.slice(index, equals).trim();
		index = equals + 1;
		while (index < length && subject[index] === ' ') {
			index += 1;
		}
		let value: string;
		if (subject[index] === '"') {
			({ value, index } = readQuotedValue(subject, index + 1));
			// Anything between the closing quote and the next separator is not
			// part of any grammar; skip to the separator.
			while (index < length && !ATTRIBUTE_BOUNDARY_RE.test(subject.slice(index))) {
				index += 1;
			}
		} else {
			({ value, index } = readUnquotedValue(subject, index));
		}
		if (type.length > 0) {
			attributes.push({ type, value });
		}
		// Consume the separator itself; the loop resumes at the next type.
		if (index < length) {
			index += 1;
		}
	}
	return attributes;
}

function readQuotedValue(
	subject: string,
	start: number
): { value: string; index: number } {
	let value = '';
	let index = start;
	while (index < subject.length) {
		const character = subject[index];
		if (character === '"') {
			if (subject[index + 1] === '"') {
				value += '"';
				index += 2;
				continue;
			}
			return { value, index: index + 1 };
		}
		if (character === '\\' && index + 1 < subject.length) {
			value += subject[index + 1];
			index += 2;
			continue;
		}
		value += character;
		index += 1;
	}
	// Unterminated quote: take what there is rather than drop the attribute.
	return { value, index };
}

function readUnquotedValue(
	subject: string,
	start: number
): { value: string; index: number } {
	let value = '';
	let index = start;
	while (index < subject.length) {
		const character = subject[index];
		if (character === '\\') {
			const { text, next } = readEscape(subject, index);
			value += text;
			index = next;
			continue;
		}
		if (
			(character === ',' || character === ';' || character === '+') &&
			ATTRIBUTE_BOUNDARY_RE.test(subject.slice(index))
		) {
			break;
		}
		value += character;
		index += 1;
	}
	return { value: value.trim(), index };
}

/**
 * One RFC 4514 escape at `start` (which is a backslash): either a run of
 * `\XX` hex pairs decoded as UTF-8, or a single escaped character.
 */
function readEscape(
	subject: string,
	start: number
): { text: string; next: number } {
	const bytes: number[] = [];
	let index = start;
	while (
		subject[index] === '\\' &&
		HEX_PAIR_RE.test(subject.slice(index + 1, index + 3))
	) {
		bytes.push(Number.parseInt(subject.slice(index + 1, index + 3), 16));
		index += 3;
	}
	if (bytes.length > 0) {
		return { text: Buffer.from(bytes).toString('utf8'), next: index };
	}
	if (index + 1 < subject.length) {
		return { text: subject[index + 1], next: index + 2 };
	}
	// A trailing lone backslash escapes nothing.
	return { text: '', next: index + 1 };
}

/**
 * The common name of an X.500 subject, or undefined when it has none. Takes
 * the first `CN` attribute, including one inside a multi-valued RDN
 * (`CN=…+OU=…`). Prefer the `commonName` the PowerShell script reads through
 * `GetNameInfo`; this is the fallback for a report that predates that field.
 */
export function commonNameFromSubject(subject: string): string | undefined {
	const attribute = parseDistinguishedName(subject).find(
		candidate => candidate.type.toUpperCase() === 'CN'
	);
	const value = attribute?.value.trim();
	return value === undefined || value.length === 0 ? undefined : value;
}

interface AuthenticodeReport {
	status?: unknown;
	subject?: unknown;
	/**
	 * The signer's CN as a raw RDN value, from
	 * `X509Certificate2.GetNameInfo(SimpleName)` — the same
	 * `CERT_NAME_SIMPLE_DISPLAY_TYPE` read the sidecar's `sys/peer.rs` uses
	 * for the client, so neither side ever sees the renderer's quoting.
	 */
	commonName?: unknown;
	message?: unknown;
}

/**
 * Environment variable carrying the image path into the PowerShell script.
 *
 * `-EncodedCommand` takes no script arguments. `-args` is documented only for
 * the `{ ScriptBlock }` form of `-Command`, and measured on Windows PowerShell
 * 5.1 it is not merely ignored: `powershell.exe` refuses the command line with
 * "Cannot process command because a command is already specified with -Command
 * or -EncodedCommand.", so the encoded script never runs at all. Passing the
 * path through the environment keeps the property that motivated `-args` in
 * the first place: the path is never interpolated into the script text, so a
 * path containing quotes, `$(...)`, or a newline cannot become code.
 */
const SIGNER_TARGET_ENV_VAR = 'CURSOR_CUA_SIGNER_TARGET';

/**
 * The exact PowerShell invocation used to read one image's signature.
 *
 * Split out from the spawn because the argument vector is the part that was
 * wrong and the part that cannot be exercised off Windows: with `-args`,
 * `powershell.exe` rejected the invocation before running anything and exited
 * `0xFFFD0000`, so every verdict came back `unverifiable` — which silently
 * pins policy to `audit` forever, so signer pinning would never have engaged
 * even once the sidecar is signed. Measured by
 * `scripts/verify-authenticode-invocation.ps1`, not inferred.
 */
export function authenticodeInvocation(imagePath: string): {
	args: readonly string[];
	env: NodeJS.ProcessEnv;
} {
	// `commonName` is the pin's input: `GetNameInfo(SimpleName)` returns the CN
	// as a bare RDN value, so `Anysphere, Inc.` arrives without the quotes
	// `CertNameToStr` puts around it in `Subject`. `Subject` stays in the
	// report for diagnostics and as the parser fallback.
	const script = [
		'$ErrorActionPreference = "Stop"',
		`$target = $env:${SIGNER_TARGET_ENV_VAR}`,
		'if ([string]::IsNullOrEmpty($target)) { throw "no signer target" }',
		'$signature = Get-AuthenticodeSignature -LiteralPath $target',
		'$subject = ""',
		'$commonName = ""',
		'if ($signature.SignerCertificate) {',
		'  $subject = $signature.SignerCertificate.Subject',
		'  $commonName = $signature.SignerCertificate.GetNameInfo([System.Security.Cryptography.X509Certificates.X509NameType]::SimpleName, $false)',
		'}',
		'[Console]::Out.Write((ConvertTo-Json -Compress ([ordered]@{',
		'  status = $signature.Status.ToString()',
		'  subject = $subject',
		'  commonName = $commonName',
		'  message = $signature.StatusMessage',
		'})))',
	].join('\n');
	return {
		args: [
			'-NoProfile',
			'-NonInteractive',
			'-ExecutionPolicy',
			'Bypass',
			'-EncodedCommand',
			Buffer.from(script, 'utf16le').toString('base64'),
		],
		env: { ...process.env, [SIGNER_TARGET_ENV_VAR]: imagePath },
	};
}

/**
 * Verify one image's Authenticode signature.
 *
 * `Get-AuthenticodeSignature` is the same WinVerifyTrust machinery the sidecar
 * calls, reached through the in-box PowerShell rather than a native addon. The
 * script is passed with `-EncodedCommand` so a machine execution policy cannot
 * refuse it, and the path arrives in the environment rather than interpolated
 * into the script text.
 */
export async function verifyAuthenticodeSigner(
	imagePath: string
): Promise<SignerVerdict> {
	const { args, env } = authenticodeInvocation(imagePath);
	let stdout: string;
	try {
		({ stdout } = await execFileAsync(powershellPath(), [...args], {
			encoding: 'utf8',
			windowsHide: true,
			timeout: SIGNER_CHECK_TIMEOUT_MS,
			env,
		}));
	} catch (error) {
		return {
			kind: 'unverifiable',
			detail: error instanceof Error ? error.message : String(error),
		};
	}
	let report: AuthenticodeReport;
	try {
		report = JSON.parse(stdout) as AuthenticodeReport;
	} catch {
		return { kind: 'unverifiable', detail: 'signature report was not JSON' };
	}
	return interpretAuthenticodeReport(report);
}

/** Split out from the spawn so the mapping itself is testable off Windows. */
export function interpretAuthenticodeReport(
	report: AuthenticodeReport
): SignerVerdict {
	const status = typeof report.status === 'string' ? report.status : '';
	const rawSubject = typeof report.subject === 'string' ? report.subject : '';
	const reportedCommonName =
		typeof report.commonName === 'string' ? report.commonName.trim() : '';
	const detail =
		typeof report.message === 'string' && report.message.length > 0
			? report.message
			: status || 'no signature status';
	if (status !== 'Valid') {
		// Anything short of Valid is not a signer we can reason about:
		// NotSigned, HashMismatch, UnknownError, and a revoked or untrusted
		// chain all land here.
		return { kind: 'unsigned', detail };
	}
	const subject =
		reportedCommonName.length > 0
			? reportedCommonName
			: commonNameFromSubject(rawSubject) ?? rawSubject;
	if (subject.length === 0) {
		return { kind: 'unverifiable', detail: 'valid signature with no subject' };
	}
	return isPinnedSigner(subject)
		? { kind: 'trusted', subject }
		: { kind: 'untrusted-signer', subject };
}

function powershellPath(): string {
	const systemRoot = process.env['SystemRoot'] ?? String.raw`C:\Windows`;
	return path.join(
		systemRoot,
		'System32',
		'WindowsPowerShell',
		'v1.0',
		'powershell.exe'
	);
}
