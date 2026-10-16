/**
 * Steps 1 and 2 of the Windows client handshake contract: mint the per-launch
 * token and put it where the sidecar will look for it.
 *
 * The token is the load-bearing half of the sidecar's admission control. It
 * bounds a captured secret to a single sidecar process and it is what the
 * sidecar compares, in constant time, against the first line of every
 * connection. See `packages/computer-use/windows/README.md` ("Client handshake
 * contract") and `windows/src/launch_binding.rs`.
 */

import { randomBytes } from 'node:crypto';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import {
	SIDECAR_LAUNCH_TOKEN_BYTES,
	SIDECAR_LAUNCH_TOKEN_HEX_LENGTH,
} from '@anysphere/computer-use/protocol';
import { isSidShaped } from './pipe-discovery';
import { CURSOR_PRODUCT_PROFILE } from './product-profile';

/**
 * Directory segments under `%LocalAppData%`, from the crate's checked-in
 * product profile — the same `launchTokenDirectory` its `launch_binding.rs`
 * reads through the bootstrapped `ProductProfile`.
 */
const TOKEN_DIR_SEGMENTS: readonly string[] =
	CURSOR_PRODUCT_PROFILE.launchTokenDirectory;

/** 64 lowercase hex characters from a CSPRNG. Never reused across launches. */
export function mintLaunchToken(): string {
	return randomBytes(SIDECAR_LAUNCH_TOKEN_BYTES).toString('hex');
}

/**
 * The local-app-data root the token file lives under.
 *
 * The sidecar resolves its own copy with `SHGetKnownFolderPath` rather than
 * the environment, precisely so the process that spawned it cannot redirect
 * which file it trusts. Node has no binding for that call, so the client reads
 * `%LOCALAPPDATA%` and falls back to the profile default. A disagreement
 * between the two is not exploitable — the sidecar simply will not find a
 * token and refuses to listen — but it is worth knowing that a Cursor started
 * with a doctored `%LOCALAPPDATA%` fails closed here rather than silently.
 */
export function localAppDataDirectory(
	env: Record<string, string | undefined> = process.env,
	homeDir: string = os.homedir()
): string {
	const fromEnv = env['LOCALAPPDATA'];
	if (fromEnv !== undefined && fromEnv !== '') {
		return fromEnv;
	}
	return path.join(homeDir, 'AppData', 'Local');
}

/**
 * `%LOCALAPPDATA%\Cursor\ComputerUse\cua-launch-<user-SID>.token`.
 *
 * Shares `isSidShaped` with the pipe name on purpose: both embed the same SID,
 * so two validators could only ever disagree — and a token path that accepted
 * a SID the pipe name rejected would write a live credential for a sidecar
 * this client could never dial.
 */
export function launchTokenPath(userSid: string, localAppData: string): string {
	if (!isSidShaped(userSid)) {
		throw new Error(`refusing to build a token path from "${userSid}"`);
	}
	return path.join(
		localAppData,
		...TOKEN_DIR_SEGMENTS,
		`cua-launch-${userSid}.token`
	);
}

/**
 * Write the token the way the contract requires.
 *
 * The delete is load-bearing, not tidiness. `CreateFileW(CREATE_ALWAYS)` keeps
 * an existing file's DACL — `SECURITY_ATTRIBUTES` only applies on creation —
 * so overwriting a path an attacker pre-created with a permissive ACL would
 * leave a freshly minted secret in a world-readable file. Removing it first
 * means the new file inherits the directory's ACL instead, which on the
 * ordinary `%LocalAppData%` tree is owner + `SYSTEM` + `Administrators`: what
 * the sidecar requires.
 *
 * Node cannot set a Windows DACL, so this relies on that inheritance. If the
 * directory itself was planted with a permissive ACL, the sidecar's own DACL
 * check refuses the token and it exits rather than listening — a loud failure,
 * not a silent downgrade.
 */
export function writeLaunchToken(tokenPath: string, token: string): void {
	if (!isTokenShaped(token)) {
		throw new Error('refusing to write a malformed launch token');
	}
	mkdirSync(path.dirname(tokenPath), { recursive: true });
	rmSync(tokenPath, { force: true });
	writeFileSync(tokenPath, token, { encoding: 'utf8', flag: 'wx', mode: 0o600 });
}

/**
 * Best-effort removal. The token is a live credential for as long as it is on
 * disk, so it goes away when the sidecar it binds does.
 *
 * One case leaves it behind: a sidecar that exits on its own (idle timer,
 * crash, or the user killing it) is not observed, so its token survives until
 * the next launch retires the dead binding. That residue is inert rather than
 * a leak — the sidecar binds one token per launch, so the file names a process
 * that no longer exists and no future sidecar will accept it.
 */
export function removeLaunchToken(tokenPath: string): void {
	try {
		rmSync(tokenPath, { force: true });
	} catch {
		// A token we cannot delete is stale, not dangerous: the next launch
		// rotates it, and the sidecar it belonged to is gone.
	}
}

export function isTokenShaped(token: string): boolean {
	return (
		token.length === SIDECAR_LAUNCH_TOKEN_HEX_LENGTH &&
		/^[0-9a-f]+$/.test(token)
	);
}
