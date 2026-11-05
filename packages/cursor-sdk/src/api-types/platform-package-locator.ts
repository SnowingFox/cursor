// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/platform-package-locator.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: platform-package-locator.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.944Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
export declare function isExecutableFile(candidate: string): boolean;
/**
 * Walks up from the host entry script (argv[1]) and the executable
 * (execPath) looking for `node_modules/<platform subpackage>/<relativePath>`.
 * Returns the first candidate accepted by `accept`, or undefined.
 *
 * Workspace exclusion applies only to the execPath walk: argv[1] is the host
 * app entry, and when the workspace is that same tree its install-layout
 * helpers must still win. A standalone binary dropped into an untrusted
 * checkout must not pick up workspace-controlled helpers — including nested
 * --workspace layouts and plants in a parent of cwd inside the same git
 * checkout, hence the git-root expansion below.
 */
export declare function resolvePlatformPackagePath(options: {
    relativePath: string;
    excludedWorkspaceDirs: readonly string[];
    accept: (candidatePath: string) => boolean;
}): string | undefined;
export declare function resolvePlatformPackageBinary(options: {
    binaryName: string;
    excludedWorkspaceDir: string;
}): string | undefined;
