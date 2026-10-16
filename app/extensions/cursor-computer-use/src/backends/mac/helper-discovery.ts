/**
 * Discovery for the macOS computer-use sidecar app ("Cursor Computer
 * Use.app", packages/computer-use/mac). Built Cursor downloads the helper
 * from the release CDN (`./sidecar-download`); dev flows package it standalone.
 *
 * Resolution order:
 * 1. `CUA_SERVICE_APP` env override. The Swift sidecar honors the same
 *    variable, so dev flows that point at a custom build keep working.
 * 2. Cursor Dev only: the Dev helper at `~/.cursor/computer-use-sidecar-dev/
 *    Cursor Computer Use Dev.app`
 *    (`mise //packages/computer-use/mac:package-cursor-dev`). Built products
 *    never look for it.
 */

import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

export const MAC_HELPER_APP_NAME = "Cursor Computer Use.app";

/** Mirrors one Swift product profile (`CUProductConfiguration`). */
export interface MacHelperIdentity {
	executableName: string;
	/** `appSupportDirectoryName`: holds `service.json`, the socket and the lock. */
	appSupportFolder: string;
}

export const MAC_HELPER_IDENTITY: MacHelperIdentity = {
	executableName: "CUCursorService",
	appSupportFolder: "cursor-computer-use",
};

/** Cursor Computer Use Dev: the only helper whose socket admits unsigned Cursor Dev. */
export const MAC_DEV_HELPER_IDENTITY: MacHelperIdentity = {
	executableName: "CUCursorDevService",
	appSupportFolder: "cursor-computer-use-dev",
};

/** Matches the Cursor Dev sidecar profile's installRelativePath. */
const MAC_HELPER_DEV_INSTALL_RELATIVE_PATH = path.join(
	".cursor",
	"computer-use-sidecar-dev",
	"Cursor Computer Use Dev.app"
);

const CUA_SERVICE_APP_ENV = "CUA_SERVICE_APP";

export type MacHelperAppSource =
	| "env-override"
	| "dev-install"
	| "download-cache";

export interface ResolvedMacHelperApp {
	appPath: string;
	source: MacHelperAppSource;
	identity: MacHelperIdentity;
}

export interface ResolveMacHelperAppOptions {
	env?: Record<string, string | undefined>;
	homeDir?: string;
	/**
	 * False in Cursor Dev, which expects the Dev helper (including behind
	 * `CUA_SERVICE_APP`). Defaults to true: a built product never looks for it.
	 */
	builtProduct?: boolean;
}

/**
 * Resolve which helper app the client should launch. Returns undefined when
 * no helper is available (the caller surfaces this as computer use being
 * unavailable).
 */
export function resolveMacHelperApp(
	options?: ResolveMacHelperAppOptions
): ResolvedMacHelperApp | undefined {
	const env = options?.env ?? process.env;
	const builtProduct = options?.builtProduct ?? true;
	const override = env[CUA_SERVICE_APP_ENV];
	if (override !== undefined && override !== "") {
		return {
			appPath: path.resolve(override),
			source: "env-override",
			identity: builtProduct ? MAC_HELPER_IDENTITY : MAC_DEV_HELPER_IDENTITY,
		};
	}
	if (builtProduct) {
		return undefined;
	}
	const devInstall = path.join(
		options?.homeDir ?? os.homedir(),
		MAC_HELPER_DEV_INSTALL_RELATIVE_PATH
	);
	if (fs.existsSync(path.join(devInstall, "Contents", "Info.plist"))) {
		return { appPath: devInstall, source: "dev-install", identity: MAC_DEV_HELPER_IDENTITY };
	}
	return undefined;
}
