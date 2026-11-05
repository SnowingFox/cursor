// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/store/jsonl-local-agent-store.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: store/jsonl-local-agent-store.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:31.001Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import { type LocalAgentStore, type LocalAgentStoreAgents, type LocalAgentStoreCheckpoints, type LocalAgentStoreRunEvents, type LocalAgentStoreRuns } from "./local-agent-store.js";
/** JSONL filenames under the directory passed to {@link JsonlLocalAgentStore}. */
export declare const JSONL_LOCAL_AGENT_STORE_FILES: {
    readonly agents: "agents.ndjson";
    readonly runs: "runs.ndjson";
    readonly runEvents: "run_events.ndjson";
    readonly checkpoints: "checkpoints.ndjson";
};
/**
 * File-backed {@link LocalAgentStore} using newline-delimited JSON (JSONL / NDJSON).
 *
 * Under `rootDir` the store reads and writes four files:
 * {@link JSONL_LOCAL_AGENT_STORE_FILES}. Writes are serialized process-wide so
 * concurrent SDK callbacks do not interleave partial lines. Listing rewrites whole
 * files on delete/update (simple, portable; not optimized for huge catalogs).
 *
 * Pass the same instance (or the same `Cursor.configure` default) on
 * `Agent.create`, `Agent.resume`, and local list/get APIs.
 *
 * @example
 * ```typescript
 * const store = new JsonlLocalAgentStore("/path/to/store");
 * Cursor.configure({ local: { store } });
 * ```
 */
export declare class JsonlLocalAgentStore implements LocalAgentStore {
    private readonly rootDir;
    readonly agents: LocalAgentStoreAgents;
    readonly checkpoints: LocalAgentStoreCheckpoints;
    readonly runs: LocalAgentStoreRuns;
    readonly runEvents: LocalAgentStoreRunEvents;
    constructor(rootDir: string);
}
