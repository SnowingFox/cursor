import {
	closeSync,
	linkSync,
	openSync,
	readFileSync,
	statSync,
	writeFileSync,
} from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { SIDECAR_LAUNCH_TOKEN_HEX_LENGTH } from "@anysphere/computer-use/protocol";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
	isTokenShaped,
	launchTokenPath,
	localAppDataDirectory,
	mintLaunchToken,
	removeLaunchToken,
	writeLaunchToken,
} from "./launch-token";
import { windowsSidecarPipeName } from "./pipe-discovery";

const USER_SID = "S-1-5-21-1234567890-1234567890-1234567890-1001";
/** A real Entra ID SID from the first hardware run; authority 12, not 5. */
const AAD_USER_SID = "S-1-12-1-2633038542-1162385617-241424020-1679904907";

describe("mintLaunchToken", () => {
	it("mints 64 lowercase hex characters that do not repeat", () => {
		const tokens = new Set<string>();
		for (let index = 0; index < 32; index += 1) {
			const token = mintLaunchToken();
			expect(token).toMatch(
				new RegExp(`^[0-9a-f]{${SIDECAR_LAUNCH_TOKEN_HEX_LENGTH}}$`)
			);
			expect(isTokenShaped(token)).toBe(true);
			tokens.add(token);
		}
		expect(tokens.size).toBe(32);
	});
});

describe("launchTokenPath", () => {
	it.each([
		["a classic machine account", USER_SID],
		// The token filename embeds the SID just like the pipe name does, so
		// an authority test here would strand every AAD-joined machine.
		["an Entra ID (Azure AD) account", AAD_USER_SID],
	])("derives the path both sides compute independently for %s", (
		_description,
		sid
	) => {
		expect(launchTokenPath(sid, String.raw`C:\Users\jdoe\AppData\Local`)).toBe(
			join(
				String.raw`C:\Users\jdoe\AppData\Local`,
				"Cursor",
				"ComputerUse",
				`cua-launch-${sid}.token`
			)
		);
	});

	it("accepts exactly the SIDs the pipe name accepts", () => {
		// One shared predicate, so the credential and the endpoint can never
		// disagree about whether this machine's SID is usable.
		for (const sid of [
			USER_SID,
			AAD_USER_SID,
			"S-1-5-18",
			"S-1-0x020000000000-1-2-3",
			"s-1-5-21-1-2-3-1001",
		]) {
			expect(launchTokenPath(sid, "/tmp")).toContain(sid);
			expect(windowsSidecarPipeName(sid)).toContain(sid);
		}
	});

	it.each([
		"",
		"not-a-sid",
		// A bare dot, not just `..`: refusing the character forecloses every
		// traversal segment instead of one spelling of it.
		"S-1-5-21-1001.evil",
		"S-1-5-21/../../evil",
		String.raw`S-1\..\evil`,
	])("refuses to build a path from %j", candidate => {
		expect(() => launchTokenPath(candidate, "/tmp")).toThrow(
			"refusing to build a token path"
		);
	});
});

describe("localAppDataDirectory", () => {
	it("prefers the environment and falls back to the profile default", () => {
		expect(
			localAppDataDirectory({ LOCALAPPDATA: String.raw`D:\Local` }, "/home/x")
		).toBe(String.raw`D:\Local`);
		expect(localAppDataDirectory({}, String.raw`C:\Users\jdoe`)).toBe(
			join(String.raw`C:\Users\jdoe`, "AppData", "Local")
		);
	});
});

describe("writeLaunchToken", () => {
	let directory: string;

	beforeEach(async () => {
		directory = await mkdtemp(join(tmpdir(), "cua-token-"));
	});

	afterEach(async () => {
		await rm(directory, { recursive: true, force: true });
	});

	it("creates the directory and writes exactly the token", () => {
		const tokenPath = join(directory, "nested", "deeper", "cua.token");
		const token = mintLaunchToken();

		writeLaunchToken(tokenPath, token);

		// No newline, no BOM, no second line: the sidecar tolerates a trailing
		// newline but nothing beyond it, so write the strictest thing.
		expect(readFileSync(tokenPath, "utf8")).toBe(token);
	});

	it("replaces an existing file rather than overwriting it in place", () => {
		// The load-bearing detail: CREATE_ALWAYS keeps an existing file's DACL,
		// so a token written over an attacker-planted path would stay readable
		// by them. A hard link pinned to the planted file is the portable proof
		// that the path was unlinked rather than truncated — had the write gone
		// through the original inode, the witness would show the new token.
		const tokenPath = join(directory, "cua.token");
		const witnessPath = join(directory, "planted-inode");
		writeFileSync(tokenPath, "planted");
		linkSync(tokenPath, witnessPath);

		const token = mintLaunchToken();
		writeLaunchToken(tokenPath, token);

		expect(readFileSync(tokenPath, "utf8")).toBe(token);
		expect(readFileSync(witnessPath, "utf8")).toBe("planted");
		expect(statSync(tokenPath).ino).not.toBe(statSync(witnessPath).ino);
	});

	it("refuses to write a malformed token", () => {
		const tokenPath = join(directory, "cua.token");
		for (const candidate of ["", "abc", "Z".repeat(64), "A1".repeat(32)]) {
			expect(() => writeLaunchToken(tokenPath, candidate)).toThrow(
				"refusing to write a malformed launch token"
			);
		}
	});

	it("removes the token, and tolerates it already being gone", () => {
		const tokenPath = join(directory, "cua.token");
		writeLaunchToken(tokenPath, mintLaunchToken());

		removeLaunchToken(tokenPath);
		removeLaunchToken(tokenPath);

		expect(() => closeSync(openSync(tokenPath, "r"))).toThrow();
	});
});
