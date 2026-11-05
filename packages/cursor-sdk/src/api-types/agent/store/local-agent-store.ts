// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/agent/store/local-agent-store.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: agent/store/local-agent-store.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.962Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { ModelSelection } from "../options.js";
import type { AgentCheckpointStore, AgentRunStore, RunEventStore } from "../run-store-public-types.js";
import type { TokenUsage } from "../usage-types.js";
export type LocalAgentStatus = "idle" | "running" | "error" | "archived";
export type LocalAgentRunStatus = "queued" | "running" | "finished" | "error" | "cancelled" | "expired";
/** Pointer to the latest conversation checkpoint for an agent. */
export interface LocalAgentCheckpointRef {
    readonly schemaVersion: 1;
    readonly rootBlobId: string;
}
export interface LocalAgentRunDocument {
    readonly runId: string;
    readonly requestId?: string | null;
    readonly agentId: string;
    readonly turnNumber: number;
    readonly status: LocalAgentRunStatus;
    readonly model?: ModelSelection | null;
    readonly result?: string | null;
    readonly error?: string | null;
    readonly usageRef?: string | null;
    /** Structured usage snapshot (JSON-serializable). Absent on legacy rows. */
    readonly usage?: TokenUsage | null;
    readonly createdAt: number;
    readonly updatedAt: number;
    readonly startedAt?: number | null;
    readonly endedAt?: number | null;
    /** Snapshot at run creation (mirrors `runs.start_checkpoint_ref` in SQLite). */
    readonly startCheckpointRef?: LocalAgentCheckpointRef | null;
    /** Latest checkpoint for this run (mirrors `runs.latest_checkpoint_ref`). */
    readonly latestCheckpointRef?: LocalAgentCheckpointRef | null;
}
/**
 * Agent metadata persisted by a custom local store. Run rows live on
 * {@link LocalAgentStore.runs} separately, or a bundled in-memory layout that
 * co-locates runs per agent while still exposing both substores.
 */
export interface LocalAgentDocument {
    readonly agentId: string;
    readonly cwd: string;
    readonly status: LocalAgentStatus;
    readonly activeRunId?: string | null;
    readonly name?: string | null;
    readonly createdAt: number;
    readonly updatedAt: number;
    readonly latestCheckpoint?: LocalAgentCheckpointRef | null;
    /**
     * SDK-owned metadata. Stores should persist and return it unchanged.
     */
    readonly sdkMetadata?: Record<string, unknown>;
}
/**
 * Agent delete filter. When `agentIds` is omitted or empty, every agent row
 * matches (use with care on `delete`).
 */
export interface LocalAgentAgentFilter {
    readonly agentIds?: readonly string[];
    readonly cwd?: string;
}
/**
 * Agent list filter. When `cwd` is omitted, agents from every workspace in the
 * store are listed.
 */
export interface LocalAgentListFilter {
    /** Opaque cursor from a previous page's `nextCursor` (id-based, not an offset). */
    readonly cursor?: string;
    readonly limit?: number;
    /** When set, only agents whose persisted `cwd` matches are listed. */
    readonly cwd?: string;
}
/**
 * Paged list result for {@link LocalAgentStore.agents},
 * {@link LocalAgentStore.runs}, and {@link LocalAgentStore.checkpoints}.
 * Resume with `filter.cursor` from the previous page's `nextCursor` (opaque,
 * id-based — not a row offset).
 */
export interface LocalAgentStoreListResult<T> {
    readonly items: readonly T[];
    readonly nextCursor?: string;
}
/**
 * Run list/delete filter. When both `agentIds` and `runIds` are omitted or empty,
 * every run matches (list returns all runs; delete removes all runs — use with care).
 */
export interface LocalAgentRunFilter {
    readonly agentIds?: readonly string[];
    readonly runIds?: readonly string[];
    /** Opaque cursor from a previous page's `nextCursor` (id-based, not an offset). */
    readonly cursor?: string;
    readonly limit?: number;
}
/** @deprecated Use {@link LocalAgentRunFilter}. */
export type RunFilter = LocalAgentRunFilter;
/**
 * Checkpoint blob list/delete filter. When `agentIds` and `blobIds` are both
 * omitted or empty, every blob matches (use with care on `delete`).
 */
export interface LocalAgentCheckpointFilter {
    readonly agentIds?: readonly string[];
    readonly blobIds?: readonly string[];
    readonly cursor?: string;
    readonly limit?: number;
}
/**
 * Run event delete filter. When `runIds` is omitted or empty, every run event
 * row matches (use with care on `delete`).
 */
export interface LocalAgentRunEventFilter {
    readonly runIds?: readonly string[];
}
/** Opaque resume token for a run event stream (exclusive `afterOffset` on list). */
export type LocalAgentRunEventOffset = string;
export interface LocalAgentRunEventDocument {
    readonly runId: string;
    readonly seq: number;
    readonly offset: LocalAgentRunEventOffset;
    readonly eventType: string;
    readonly payload: unknown;
    readonly payloadRef: string | null;
    readonly idempotencyKey: string | null;
    readonly createdAt: number;
}
/**
 * Paged tail of a single run's event stream. Unlike catalog lists, pagination uses
 * {@link LocalAgentRunEventOffset} (`afterOffset` / `nextOffset`) because events are
 * append-only and ordered by sequence, not by sortable row ids.
 */
export interface LocalAgentRunEventListResult {
    readonly items: readonly LocalAgentRunEventDocument[];
    readonly nextOffset?: LocalAgentRunEventOffset;
}
/**
 * Per-agent checkpoint bytes (content-addressed). Same role as
 * `stateRoot/agents/<hash>/store.db` in the default layout.
 */
export interface LocalAgentStoreCheckpoints {
    get(input: {
        readonly agentId: string;
        readonly blobId: string;
    }): Promise<Uint8Array | null>;
    /**
     * Persists bytes for a content-addressed blob. Returns `void` (no row document);
     * callers already know `agentId` and `blobId`.
     */
    create(input: {
        readonly agentId: string;
        readonly blobId: string;
        readonly data: Uint8Array;
    }): Promise<void>;
    /** Overwrites blob bytes. Returns `void`; use {@link get} to read back. */
    update(input: {
        readonly agentId: string;
        readonly blobId: string;
        readonly data: Uint8Array;
    }): Promise<void>;
    delete(input: {
        readonly filter: LocalAgentCheckpointFilter;
    }): Promise<void>;
    list(input?: {
        readonly filter?: LocalAgentCheckpointFilter;
    }): Promise<LocalAgentStoreListResult<string>>;
}
/** Agent rows for a custom {@link LocalAgentStore}. */
export interface LocalAgentStoreAgents {
    get(input: {
        readonly agentId: string;
    }): Promise<LocalAgentDocument | null>;
    create(input: {
        readonly agent: LocalAgentDocument;
    }): Promise<LocalAgentDocument>;
    update(input: {
        readonly agent: LocalAgentDocument;
    }): Promise<LocalAgentDocument>;
    delete(input: {
        readonly filter: LocalAgentAgentFilter;
    }): Promise<void>;
    list(input?: {
        readonly filter?: LocalAgentListFilter;
    }): Promise<LocalAgentStoreListResult<LocalAgentDocument>>;
}
/** Run rows for a custom {@link LocalAgentStore}. */
export interface LocalAgentStoreRuns {
    get(input: {
        readonly agentId: string;
        readonly runId: string;
    }): Promise<LocalAgentRunDocument | null>;
    create(input: {
        readonly run: LocalAgentRunDocument;
    }): Promise<LocalAgentRunDocument>;
    update(input: {
        readonly run: LocalAgentRunDocument;
    }): Promise<LocalAgentRunDocument>;
    /** Deletes runs matching {@link LocalAgentRunFilter}; an empty filter deletes all runs. */
    delete(input: {
        readonly filter: LocalAgentRunFilter;
    }): Promise<void>;
    list(input?: {
        readonly filter?: LocalAgentRunFilter;
    }): Promise<LocalAgentStoreListResult<LocalAgentRunDocument>>;
}
/**
 * Durable run stream log (`run_events` in default SQLite). Append-only: use
 * {@link append}, {@link list} with exclusive `afterOffset`, and {@link delete}
 * for agent/run cleanup.
 */
export interface LocalAgentStoreRunEvents {
    append(input: {
        readonly runId: string;
        readonly eventType: string;
        readonly payload?: unknown;
        readonly payloadRef?: string | null;
        readonly idempotencyKey?: string | null;
    }): Promise<LocalAgentRunEventDocument>;
    /**
     * Lists events for one `runId`. Pass `afterOffset` from a prior page's
     * `nextOffset` (exclusive resume), not `filter.cursor`.
     */
    list(input: {
        readonly runId: string;
        readonly afterOffset?: LocalAgentRunEventOffset | null;
        readonly limit?: number;
    }): Promise<LocalAgentRunEventListResult>;
    delete(input: {
        readonly filter: LocalAgentRunEventFilter;
    }): Promise<void>;
}
/**
 * Custom persistence for local SDK agents. Implement this interface (or
 * {@link composeLocalAgentStore}) when you need to own where agent metadata,
 * checkpoint blobs, runs, and run events are stored.
 *
 * When `local.store` / `localStore` is omitted, the SDK opens
 * {@link SqliteLocalAgentStore} (on-disk SQLite under the workspace state root).
 * Implement {@link LocalAgentStore} yourself only when replacing that layout.
 *
 * Table alignment (default SQLite names in parentheses):
 * {@link agents} (`agents`), {@link checkpoints} (`checkpoints` / per-agent blob
 * dirs), {@link runs} (`runs`), {@link runEvents} (`run_events`).
 *
 * Pagination: catalog substores use `filter.cursor` / `nextCursor`; run events
 * use `afterOffset` / `nextOffset` on a single run stream (see
 * {@link LocalAgentStoreRunEvents.list}).
 *
 * Built-in backends (exported from `@cursor/sdk`): default
 * {@link SqliteLocalAgentStore}; portable {@link JsonlLocalAgentStore}.
 */
export interface LocalAgentStore {
    readonly agents: LocalAgentStoreAgents;
    readonly checkpoints: LocalAgentStoreCheckpoints;
    readonly runs: LocalAgentStoreRuns;
    readonly runEvents: LocalAgentStoreRunEvents;
}
interface LocalAgentStoreAdapters {
    readonly store: AgentRunStore;
    readonly checkpointStore: AgentCheckpointStore;
    readonly eventStore: RunEventStore;
}
export declare function createLocalAgentStoreAdapters(options: {
    localStore: LocalAgentStore;
    workspaceRef: string;
    /**
     * When set (caller passed `cwd`), agent reads are limited to rows with that
     * `cwd`. When omitted, reads see every agent in the store.
     */
    scopedWorkspaceRef?: string;
}): LocalAgentStoreAdapters;
/**
 * In-memory store with separate agent and run maps (relational layout).
 */
export declare function createInMemoryLocalAgentStore(): LocalAgentStore;
/** In-memory bundled layout (tests / SDK-internal; not exported from `@cursor/sdk`). */
export declare function createBundledLocalAgentStore(): LocalAgentStore;
/** Combine separately implemented substores into one {@link LocalAgentStore}. */
export declare function composeLocalAgentStore(parts: {
    readonly agents: LocalAgentStoreAgents;
    readonly checkpoints: LocalAgentStoreCheckpoints;
    readonly runs: LocalAgentStoreRuns;
    readonly runEvents: LocalAgentStoreRunEvents;
}): LocalAgentStore;
export declare function matchesAgentFilter(agent: LocalAgentDocument, filter?: LocalAgentAgentFilter): boolean;
export declare function matchesCheckpointFilter(key: {
    agentId: string;
    blobId: string;
}, filter?: LocalAgentCheckpointFilter): boolean;
/** Paginate checkpoint blob ids sorted lexicographically. */
export declare function paginateCheckpointBlobIds(blobIds: readonly string[], options?: Pick<LocalAgentCheckpointFilter, "cursor" | "limit">): LocalAgentStoreListResult<string>;
export declare function matchesRunFilter(run: LocalAgentRunDocument, filter?: LocalAgentRunFilter): boolean;
/** Paginate agents sorted by `updatedAt` desc, then `agentId` desc. */
export declare function paginateAgentDocuments(items: readonly LocalAgentDocument[], filter?: Pick<LocalAgentListFilter, "cursor" | "limit" | "cwd">): LocalAgentStoreListResult<LocalAgentDocument>;
/** Paginate runs sorted by `turnNumber` asc, then `runId` asc. */
export declare function paginateRunDocuments(items: readonly LocalAgentRunDocument[], options?: Pick<LocalAgentRunFilter, "cursor" | "limit">): LocalAgentStoreListResult<LocalAgentRunDocument>;
export {};
