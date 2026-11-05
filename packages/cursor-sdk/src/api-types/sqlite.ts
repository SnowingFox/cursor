// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/sqlite.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: sqlite.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.986Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/**
 * SQLite-backed local agent storage for {@link @cursor/sdk}.
 *
 * Import from `@cursor/sdk/sqlite` so the main package entry does not load the
 * sqlite driver at import time.
 */
export { SqliteLocalAgentStore, type SqliteLocalAgentStoreOptions, } from "./agent/store/sqlite-local-agent-store.js";
