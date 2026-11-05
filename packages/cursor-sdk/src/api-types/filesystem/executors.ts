// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/executors.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/executors.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.962Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/**
 * Native tool executors over a {@link FileSystem}.
 *
 * Paths are the tree's posix namespace (`/…`); a relative path resolves
 * against `/`. Nothing here touches the host disk. A typed
 * {@link PathError} becomes the matching result case with the error's
 * message, so the model sees the FileSystem contract strings.
 */
import type { DeleteExecutor, GrepExecutor, LsExecutor, ReadExecutor, WriteExecutor } from "@anysphere/agent-exec";
import { type FileSystem } from "./types.js";
/**
 * Where a session's relative tool paths resolve, and what LS, Grep, and Glob
 * search when the call names no path. An absolute posix path in the tree.
 */
export interface FileSystemExecutorOptions {
    /** Defaults to `/`. */
    readonly workspace?: string;
}
/**
 * The tree path a tool call means. Relative paths resolve against
 * `workspace`, the way the host executors resolve them against the host
 * workspace; an empty path is the workspace itself.
 */
export declare function resolveToolPath(args: {
    workspace: string;
    path: string | undefined;
}): string;
/**
 * How many levels below the listed directory LS shows. Deeper
 * subdirectories render as `name/...`, so a remote tree is read a few
 * levels at a time instead of walked in full.
 */
export declare const LS_MAX_DEPTH = 3;
/** The executors a session runs its file tools on when it has a {@link FileSystem}. */
export interface FileSystemExecutors {
    readonly read: ReadExecutor;
    readonly write: WriteExecutor;
    readonly grep: GrepExecutor;
    readonly ls: LsExecutor;
    readonly delete: DeleteExecutor;
}
export declare function createFileSystemExecutors(fs: FileSystem, options?: FileSystemExecutorOptions): FileSystemExecutors;
export declare function createFileSystemReadExecutor(fs: FileSystem, options?: FileSystemExecutorOptions): ReadExecutor;
/** The image formats native Read turns into an image part. Magic bytes first, then extension. */
export declare function detectImageMimeType(args: {
    bytes: Uint8Array;
    path: string;
}): string | undefined;
export declare function createFileSystemWriteExecutor(fs: FileSystem, options?: FileSystemExecutorOptions): WriteExecutor;
export declare function createFileSystemDeleteExecutor(fs: FileSystem, options?: FileSystemExecutorOptions): DeleteExecutor;
export declare function createFileSystemLsExecutor(fs: FileSystem, options?: FileSystemExecutorOptions): LsExecutor;
/**
 * Grep over `fs.grep`. Native Glob calls this executor with an empty
 * pattern in `files_with_matches` mode; that shape lists `fs.glob`
 * instead of reading every file.
 */
export declare function createFileSystemGrepExecutor(fs: FileSystem, options?: FileSystemExecutorOptions): GrepExecutor;
