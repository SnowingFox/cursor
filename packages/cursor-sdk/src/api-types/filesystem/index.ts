// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/index.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/index.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.971Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
export { childOverlayFs, overlayFs, unionFs } from "./compose.js";
export { DeleteNotSupportedError, EditError, FileNotFoundError, InvalidGrepPatternError, isFileNotFoundError, isInvalidGrepPatternError, NoMountError, PathError, ReadOnlyMountError, remapPathError, WriteFailedError, } from "./errors.js";
export type { FileSystemTool, FileSystemToolOptions, FileSystemTools } from "./tools.js";
export { createFileSystemTools } from "./tools.js";
export { emptyFs, readOnlyFs, strReplaceOnFileSystem, tempFs } from "./trees.js";
export type { DirEntry, FileInfo, FileSystem, FSEditQuery, FSEditResult, FSGrepQuery, FSGrepResult, GlobOptions, ListOptions, } from "./types.js";
export { FILE_SYSTEM_SCAN_LIMIT } from "./types.js";
