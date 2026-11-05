// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/ls-tree.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/ls-tree.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.970Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import { LsDirectoryTreeNode } from "@anysphere/proto/agent/v1/ls_exec_pb.js";
import type { DirEntry } from "./types.js";
/** Filename characters LS ingests before it truncates, the same budget as the host LS. */
export declare const LS_INGEST_CHARACTER_BUDGET = 2500;
/**
 * The native LS tree for `dir` from a listing below it. A `kind:
 * "directory"` entry becomes a directory whose children were not
 * listed, which LS renders as `name/...`. Past the ingest budget, files
 * count toward their directory's extension totals instead of being named.
 */
export declare function buildLsTree(args: {
    dir: string;
    entries: readonly DirEntry[];
    truncated: boolean;
}): LsDirectoryTreeNode;
