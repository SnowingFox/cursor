// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/scratch.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/scratch.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.969Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { WriteExecutor } from "@anysphere/agent-exec";
import type { FileSystem } from "./types.js";
/**
 * Where tool output that spills to a file lands in a session tree: WebFetch,
 * WebSearch, and MCP text over the spill threshold, and GenerateImage assets.
 */
export declare const SCRATCH_MOUNT = "/tmp";
/**
 * The tree one run sees: `fs` with a new, empty in-memory {@link SCRATCH_MOUNT}
 * over it. A `/tmp` inside `fs` is shadowed, and scratch writes never reach `fs`.
 * Call it once per run so each run starts with an empty `/tmp`.
 */
export declare function bindScratchMount(fs: FileSystem): FileSystem;
/**
 * The tree path a spill or project-folder write lands on, or undefined when
 * `writePath` is neither. Relative paths are never routed.
 *
 * Tools build these paths from the reported project folder (`/tmp`) with the
 * host's path module. Paths under the host project directory map the same
 * way. Both land in {@link SCRATCH_MOUNT} as POSIX paths, and a spill file
 * `<project>/agent-tools/<uuid>.txt` maps to `/tmp/<uuid>.txt`.
 */
export declare function scratchWritePath(args: {
    writePath: string;
    hostProjectDir?: string;
}): string | undefined;
/**
 * Wraps the session write executor so spills and project-folder writes land
 * on {@link SCRATCH_MOUNT}, and reports the tree path back. Tools take the
 * path they show the model from the write result, so the model sees
 * `/tmp/<uuid>.txt`. Other writes pass through unchanged.
 */
export declare function createScratchWriteExecutor(args: {
    write: WriteExecutor;
    hostProjectDir?: string;
}): WriteExecutor;
