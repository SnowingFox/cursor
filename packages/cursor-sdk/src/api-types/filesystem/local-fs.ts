// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/local-fs.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/local-fs.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.969Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { LocalAgentOptions, LocalSendOptions } from "../options.js";
/** Agent metadata key marking an agent created with `local.fs`, so resume can require it again. */
export declare const FILE_SYSTEM_METADATA_KEY = "localFileSystem";
/** `local.fs` is in-process; a cloud agent cannot run on it. */
export declare function assertNoFileSystemOnCloud(...locals: Array<Pick<LocalAgentOptions, "fs"> | LocalSendOptions | undefined>): void;
/**
 * `local.fs` owns the session's executors and its children, so a second
 * source for either is ambiguous and could put a tool back on the host disk.
 * `reportedWorkspacePath` is allowed: under `fs` it names the workspace
 * inside the tree, and is checked here.
 */
export declare function assertFileSystemCompatible(local: Pick<LocalAgentOptions, "fs" | "subagentInherit" | "resourceProviderOptions" | "reportedWorkspacePath">): void;
/**
 * `reportedWorkspacePath` as a workspace inside a `local.fs` tree: an
 * absolute posix path, normalized, and outside `/tmp`, which the SDK owns
 * for scratch output.
 */
export declare function fileSystemWorkspace(reportedWorkspacePath: string): string;
