import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
	MAC_DEV_HELPER_IDENTITY,
	MAC_HELPER_APP_NAME,
	MAC_HELPER_IDENTITY,
	resolveMacHelperApp,
} from "./helper-discovery";

const tempDirs: string[] = [];

function makeTempDir(): string {
	const dir = fs.mkdtempSync(path.join(os.tmpdir(), "helper-discovery-"));
	tempDirs.push(dir);
	return dir;
}

function writeHelperBundle(appPath: string, version?: string): void {
	fs.mkdirSync(path.join(appPath, "Contents"), { recursive: true });
	const versionEntry =
		version === undefined
			? ""
			: `  <key>CFBundleShortVersionString</key>\n  <string>${version}</string>\n`;
	fs.writeFileSync(
		path.join(appPath, "Contents", "Info.plist"),
		`<?xml version="1.0" encoding="UTF-8"?>\n<plist version="1.0">\n<dict>\n  <key>CFBundleIdentifier</key>\n  <string>co.anysphere.cursor-computer-use</string>\n${versionEntry}</dict>\n</plist>\n`
	);
}

afterEach(() => {
	for (const dir of tempDirs.splice(0)) {
		fs.rmSync(dir, { recursive: true, force: true });
	}
});

describe("resolveMacHelperApp", () => {
	function writeDevInstall(root: string): string {
		const devInstall = path.join(
			root,
			".cursor",
			"computer-use-sidecar-dev",
			"Cursor Computer Use Dev.app"
		);
		writeHelperBundle(devInstall, "1.0.0");
		return devInstall;
	}

	it.each([
		[true, MAC_HELPER_IDENTITY],
		[false, MAC_DEV_HELPER_IDENTITY],
	])(
		"prefers the CUA_SERVICE_APP override over the dev install (built product: %s)",
		(builtProduct, identity) => {
			const root = makeTempDir();
			writeDevInstall(root);
			const override = path.join(root, "Override.app");
			const resolved = resolveMacHelperApp({
				env: { CUA_SERVICE_APP: override },
				homeDir: root,
				builtProduct,
			});
			expect(resolved).toEqual({ appPath: override, source: "env-override", identity });
		}
	);

	it("falls back to the Dev helper in Cursor Dev", () => {
		const root = makeTempDir();
		const devInstall = writeDevInstall(root);
		const resolved = resolveMacHelperApp({
			env: {},
			homeDir: root,
			builtProduct: false,
		});
		expect(resolved).toEqual({
			appPath: devInstall,
			source: "dev-install",
			identity: MAC_DEV_HELPER_IDENTITY,
		});
	});

	it("never looks for a local helper in a built product", () => {
		const root = makeTempDir();
		writeDevInstall(root);
		writeHelperBundle(
			path.join(root, ".cursor", "cursor-computer-use", MAC_HELPER_APP_NAME),
			"1.0.0"
		);
		for (const options of [{}, { builtProduct: true }]) {
			expect(
				resolveMacHelperApp({
					env: {},
					homeDir: root,
					...options,
				})
			).toBeUndefined();
		}
	});

	it("returns undefined when no helper exists anywhere", () => {
		const root = makeTempDir();
		const resolved = resolveMacHelperApp({
			env: {},
			homeDir: root,
		});
		expect(resolved).toBeUndefined();
	});
});
