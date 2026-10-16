/**
 * Discovery for the Windows computer-use sidecar
 * (`cursor-cua-sidecar.exe`, packages/computer-use/windows).
 *
 * Unlike macOS, the Windows sidecar publishes no rendezvous file: it serves a
 * per-user named pipe whose name is derived entirely from the interactive
 * user's SID (`pipe_name()` in `windows/src/sys/pipe.rs`). The client derives
 * the same name and dials it, so "discovery" here is two independent lookups:
 * the pipe name, and the executable to launch when nothing answers.
 *
 * Executable resolution order: `CUA_SERVICE_EXE` → the verified download
 * cache (`./sidecar-download`) → the hand-staged dev-install slot. The
 * download cache is the product path.
 */

import { execFile } from 'node:child_process';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { promisify } from 'node:util';
import {
	CURSOR_PRODUCT_PROFILE,
	WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS,
	formatWindowsSidecarPipeName,
} from './product-profile';

const execFileAsync = promisify(execFile);

/** From the crate's checked-in product profile, which the release pipeline reads too. */
export const WINDOWS_SIDECAR_EXECUTABLE_NAME: string =
	CURSOR_PRODUCT_PROFILE.executableName;

/**
 * Where the client installs the sidecar it downloads from the release CDN:
 * `%USERPROFILE%\.cursor\computer-use-sidecar\`, the same root the macOS
 * download cache uses (`backends/mac/sidecar-download.ts`). This is the one
 * location the product profile does not name, because only this client ever
 * writes it: the profile's `installRelativePath` is the per-user slot the CLI
 * installer and a developer fill (the dev-install source below), and nothing
 * here ever writes into that one.
 */
export const WINDOWS_SIDECAR_INSTALL_RELATIVE_DIR: string = path.join(
	'.cursor',
	'computer-use-sidecar'
);

/**
 * The install's commit record. A downloaded executable counts as installed
 * only once this file exists beside it: the installer writes it last, after
 * the executable has been verified and swapped into place, so a crash at any
 * earlier point leaves the slot looking empty rather than half-installed.
 */
export const WINDOWS_SIDECAR_INSTALL_METADATA_NAME = 'installed.json';

/**
 * The profile's `installRelativePath`: the per-user slot the CLI installer
 * (`packages/computer-use/windows-installer`) and a developer fill, and the
 * same path the macOS product uses for its packaged development build.
 */
const WINDOWS_SIDECAR_DEV_INSTALL_RELATIVE_PATH = path.join(
	...WINDOWS_SIDECAR_INSTALL_PATH_SEGMENTS,
	WINDOWS_SIDECAR_EXECUTABLE_NAME
);

const CUA_SERVICE_EXE_ENV = 'CUA_SERVICE_EXE';

const USER_SID_MIN_LENGTH = 3;
const USER_SID_MAX_LENGTH = 256;
/** Clauses 2–4 of the rule below; the length bound is clause 1. */
const USER_SID_PATTERN = /^[Ss]-[0-9A-Za-z-]*$/;

/**
 * Whether a string is shaped like a SID.
 *
 * A deliberate mirror of `is_sid_shaped` in
 * `packages/computer-use/windows/src/launch_binding.rs`, whose doc comment is
 * canonical and is reproduced in that crate's README. **Change one side and
 * you must change the other.** The rule, exactly: length 3..=256; first
 * character `S` or `s`; second a dash; every character ASCII alphanumeric or a
 * dash. It constrains nothing about the identifier authority, which is what
 * admits all four real forms — decimal domain, Entra ID authority 12, short
 * well-known, and hexadecimal authority.
 *
 * Being stricter than this is the dangerous direction: a client that rejects a
 * SID the sidecar accepts does not fail safe, it refuses to start and reads as
 * broken software. An earlier version here was exactly one authority form
 * stricter and would have done that on any machine using a hex authority.
 *
 * The sidecar's guidance is that a client preferably should not validate at
 * all. This one does because it parses the string out of `whoami.exe` output
 * before interpolating it into a pipe name and a filename, which is a
 * different job from the sidecar validating its own input. The character class
 * is what makes that safe: no separator, dot, colon, quote or space survives
 * it, so no traversal segment can be expressed in the first place.
 */
export function isSidShaped(value: string): boolean {
	return (
		value.length >= USER_SID_MIN_LENGTH &&
		value.length <= USER_SID_MAX_LENGTH &&
		USER_SID_PATTERN.test(value)
	);
}

/**
 * Where a sidecar came from, in resolution order: the `CUA_SERVICE_EXE`
 * override, the verified download cache, then the hand-staged dev-install
 * slot.
 */
export type WindowsSidecarSource =
	| 'env-override'
	| 'download-cache'
	| 'dev-install';

export interface ResolvedWindowsSidecar {
	executablePath: string;
	source: WindowsSidecarSource;
}

export interface ResolveWindowsSidecarOptions {
	env?: Record<string, string | undefined>;
	homeDir?: string;
	/**
	 * Leave the download cache out of the order. The installer sets this when
	 * no manifest is configured: a cached download with nothing in Statsig
	 * pointing at it has been pulled, and must not keep launching.
	 */
	skipDownloadCache?: boolean;
}

/** The download-cache root for `homeDir`. */
export function windowsSidecarInstallRoot(homeDir: string = os.homedir()): string {
	return path.join(homeDir, WINDOWS_SIDECAR_INSTALL_RELATIVE_DIR);
}

/** The live executable inside the download cache. */
export function windowsSidecarInstalledExecutablePath(
	homeDir: string = os.homedir()
): string {
	return path.join(
		windowsSidecarInstallRoot(homeDir),
		WINDOWS_SIDECAR_EXECUTABLE_NAME
	);
}

/**
 * Whether the download cache holds a committed install: the executable and a
 * well-formed `installed.json` beside it. This is the cheap, synchronous half
 * of "is it installed"; the installer re-verifies the bytes and the signature
 * before anything is launched.
 */
export function hasCommittedWindowsSidecarInstall(
	homeDir: string = os.homedir()
): boolean {
	const installRoot = windowsSidecarInstallRoot(homeDir);
	if (!fs.existsSync(path.join(installRoot, WINDOWS_SIDECAR_EXECUTABLE_NAME))) {
		return false;
	}
	try {
		const parsed: unknown = JSON.parse(
			fs.readFileSync(
				path.join(installRoot, WINDOWS_SIDECAR_INSTALL_METADATA_NAME),
				'utf8'
			)
		);
		return (
			typeof parsed === 'object' &&
			parsed !== null &&
			'schemaVersion' in parsed &&
			parsed.schemaVersion === 1 &&
			'manifestUrl' in parsed &&
			typeof parsed.manifestUrl === 'string' &&
			parsed.manifestUrl.length > 0
		);
	} catch {
		return false;
	}
}

/**
 * Resolve which sidecar executable the client should launch. Returns
 * undefined when none is available (the caller surfaces this as computer use
 * being unavailable).
 */
export function resolveWindowsSidecarExecutable(
	options?: ResolveWindowsSidecarOptions
): ResolvedWindowsSidecar | undefined {
	const env = options?.env ?? process.env;
	const override = env[CUA_SERVICE_EXE_ENV];
	if (override !== undefined && override !== '') {
		return { executablePath: path.resolve(override), source: 'env-override' };
	}
	const homeDir = options?.homeDir ?? os.homedir();
	if (
		options?.skipDownloadCache !== true &&
		hasCommittedWindowsSidecarInstall(homeDir)
	) {
		return {
			executablePath: windowsSidecarInstalledExecutablePath(homeDir),
			source: 'download-cache',
		};
	}
	const devInstall = path.join(
		homeDir,
		WINDOWS_SIDECAR_DEV_INSTALL_RELATIVE_PATH
	);
	if (fs.existsSync(devInstall)) {
		return { executablePath: devInstall, source: 'dev-install' };
	}
	return undefined;
}

/** Build the pipe name the sidecar serves for a given user SID. */
export function windowsSidecarPipeName(userSid: string): string {
	if (!isSidShaped(userSid)) {
		throw new Error(`refusing to build a pipe name from "${userSid}"`);
	}
	return formatWindowsSidecarPipeName(userSid);
}

/**
 * Pull the SID out of `whoami /user /fo csv /nh`, whose single row is
 * `"DOMAIN\user","S-1-…"` — on an AAD-joined machine, literally
 * `"AzureAD\jdoe","S-1-12-1-2633038542-…"`. The SID is the last field and can
 * never contain a comma, so the last segment is unambiguous even when the
 * account name is unusual. Throws rather than returning a partial match: an
 * unrecognized SID must not reach a pipe name.
 */
export function parseWhoamiUserSid(stdout: string): string {
	const sid = stdout.trim().split(',').pop()?.replace(/^"|"$/g, '') ?? '';
	if (!isSidShaped(sid)) {
		throw new Error('could not determine the current user SID');
	}
	return sid;
}

/**
 * `whoami.exe` can block on a slow or unreachable domain controller, and the
 * result is memoized, so a hang here would hang every later caller too. Every
 * other shell-out on the launch path is bounded; this one was not.
 */
const SID_LOOKUP_TIMEOUT_MS = 10_000;

/**
 * Read the current user's SID. Node exposes no SID API, so this shells out to
 * the in-box `whoami.exe` by absolute path (never through PATH, which a
 * same-user process could shadow).
 */
export async function resolveWindowsUserSid(): Promise<string> {
	const systemRoot = process.env['SystemRoot'] ?? String.raw`C:\Windows`;
	const whoami = path.join(systemRoot, 'System32', 'whoami.exe');
	const { stdout } = await execFileAsync(
		whoami,
		['/user', '/fo', 'csv', '/nh'],
		{ encoding: 'utf8', windowsHide: true, timeout: SID_LOOKUP_TIMEOUT_MS }
	);
	return parseWhoamiUserSid(stdout);
}
