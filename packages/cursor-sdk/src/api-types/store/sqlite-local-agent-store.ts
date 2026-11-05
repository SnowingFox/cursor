// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/store/sqlite-local-agent-store.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: store/sqlite-local-agent-store.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.996Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import { type LocalAgentStore, type LocalAgentStoreAgents, type LocalAgentStoreCheckpoints, type LocalAgentStoreRunEvents, type LocalAgentStoreRuns } from "./local-agent-store.js";
export interface SqliteLocalAgentStoreOptions {
    /** Workspace path used for default state root and agent `cwd` scoping. */
    readonly workspaceRef: string;
    /**
     * Root directory for `index.db`, per-agent checkpoint dirs, etc.
     * Defaults to {@link getDefaultSdkStateRoot} for `workspaceRef`.
     */
    readonly stateRoot?: string;
}
/**
 * On-disk {@link LocalAgentStore} backed by the SDK's default SQLite layout
 * (`index.db`, per-agent checkpoint blob stores, `run_events` table).
 *
 * This is the persistence surface used when no custom `local.store` is passed.
 * Open once per workspace/state root and reuse across `Agent.create` / `resume`.
 */
export declare class SqliteLocalAgentStore implements LocalAgentStore {
    readonly stateRoot: string;
    readonly workspaceRef: string;
    readonly agents: LocalAgentStoreAgents;
    readonly checkpoints: LocalAgentStoreCheckpoints;
    readonly runs: LocalAgentStoreRuns;
    readonly runEvents: LocalAgentStoreRunEvents;
    private readonly deps;
    static open(options: SqliteLocalAgentStoreOptions): Promise<SqliteLocalAgentStore>;
    private constructor();
    dispose(): Promise<void>;
}
