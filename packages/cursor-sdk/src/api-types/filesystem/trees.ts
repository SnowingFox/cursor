// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/trees.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/trees.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.968Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { FSEditQuery, FSEditResult, FileSystem } from "./types.js";
/**
 * A FileSystem with no files. Use it as an overlay leaf or an empty
 * mount, so a miss stays `FileNotFoundError` instead of `NoMountError`.
 * Writes and deletes throw `ReadOnlyMountError`.
 */
export declare function emptyFs(): FileSystem;
/**
 * In-memory FileSystem. Keys are absolute posix paths (`/a.txt`) and
 * are normalized on ingest. Stores text and bytes; bytes are copied on
 * the way in and out, so callers cannot mutate the stored file. Listed
 * sizes are UTF-8 byte lengths.
 */
export declare function tempFs(files?: Record<string, string | Uint8Array>): FileSystem;
/** Forwards reads. `write` and `delete` throw `ReadOnlyMountError`. */
export declare function readOnlyFs(inner: FileSystem): FileSystem;
/**
 * Exact str-replace as `read`, then a literal replace, then `write`.
 * More than one match fails unless `replaceAll` is set. Failures throw
 * `EditError` with the message native StrReplace shows the model.
 */
export declare function strReplaceOnFileSystem(root: Pick<FileSystem, "read" | "write">, query: FSEditQuery): Promise<FSEditResult>;
