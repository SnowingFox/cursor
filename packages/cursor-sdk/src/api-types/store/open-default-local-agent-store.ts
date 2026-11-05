// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/store/open-default-local-agent-store.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: store/open-default-local-agent-store.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.997Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { LocalAgentStore } from "./local-agent-store.js";
import type { SqliteLocalAgentStoreOptions } from "./sqlite-local-agent-store.js";
export declare function openDefaultLocalAgentStore(options: SqliteLocalAgentStoreOptions): Promise<LocalAgentStore>;
