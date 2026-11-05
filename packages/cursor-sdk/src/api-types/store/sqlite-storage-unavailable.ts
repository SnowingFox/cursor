// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/store/sqlite-storage-unavailable.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: store/sqlite-storage-unavailable.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.999Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import { ConfigurationError } from "../errors.js";
export declare const SQLITE_STORAGE_UNAVAILABLE_MESSAGE: string;
export declare function isSqliteModuleLoadError(err: unknown): boolean;
export declare function createSqliteStorageUnavailableError(cause?: unknown): ConfigurationError;
export declare function rethrowIfSqliteModuleLoadError(err: unknown): never;
