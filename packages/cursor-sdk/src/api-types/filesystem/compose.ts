// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/compose.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/compose.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.968Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { FileSystem } from "./types.js";
/**
 * Longest-prefix compose with path-segment matching: `/agent` is not a
 * prefix of `/agent-tools`.
 *
 * The record keys are mount points, and each child is a FileSystem
 * rooted at `/`. `unionFs` strips the prefix on the way in and adds it
 * back to yielded paths and error paths on the way out, so in
 * `unionFs({ "/repo": repoFs })` the child never sees `/repo`.
 *
 * A path with no mount throws `NoMountError` from `read`, `write`, and
 * `delete`, yields nothing from `list`, `glob`, and `grep`, and is
 * `{ kind: "missing" }` for `stat`. `/`, each mount point, and each
 * parent of a mount point are directories.
 *
 * `list` and `glob` of a directory include the files of every mount
 * nested under it. `grep` of
 * `/` fans out to every mount; `grep` of any other path stays on the
 * mount that covers it. A path belongs to the longest mount that covers
 * it, so `list`, `glob`, and `grep` leave out a shorter mount's files
 * under a nested mount point, the same way `read` and `write` go to the
 * nested mount.
 */
export declare function unionFs(mounts: Record<string, FileSystem>): FileSystem;
/**
 * Same-root overlay: earlier layers win. Read-only: `write` and
 * `delete` throw `ReadOnlyMountError`.
 *
 * A layer that fails costs only its own files. A verb throws only when
 * no layer could answer it. Throws when `layers` is empty.
 */
export declare function overlayFs(layers: readonly FileSystem[]): FileSystem;
/**
 * Writable view over `parent` that never changes `parent`. Reads see a
 * private in-memory scratch layer first, then `parent`. Writes and
 * deletes land on the scratch layer; deleting a parent file hides it
 * from this view only.
 */
export declare function childOverlayFs(parent: FileSystem): FileSystem;
