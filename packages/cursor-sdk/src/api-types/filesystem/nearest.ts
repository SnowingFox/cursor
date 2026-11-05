// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/nearest.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/nearest.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.964Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { FileSystem } from "./types.js";
/**
 * One-line hint for a missed path, naming up to five siblings with the
 * closest names: `not found: /a/x. nearest: y, z. do not retry.`. Lists
 * one level of the parent only. `undefined` when the parent is empty or
 * missing, so the caller reports a plain miss.
 */
export declare function nearestNeighborMissHint(fs: Pick<FileSystem, "list">, path: string): Promise<string | undefined>;
