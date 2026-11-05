// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/agent/run-store-public-types.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: agent/run-store-public-types.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.959Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { RunEventNotifier } from "./run-event-notifier-api.js";
import type { TokenUsage } from "./usage-types.js";
export type { RunEventNotifier } from "./run-event-notifier-api.js";
/** Custom subagent definition passed to the local agent runtime. */
export interface RuntimeCustomSubagentDefinition {
    readonly name: string;
    readonly description: string;
    readonly prompt: string;
    readonly model: string;
}
/**
 * Public run-store shapes for published SDK declarations.
 *
 * Mirrors ../run-store-public-types.js types without
 * referencing unpublished workspace packages in .d.ts output.
 */
export type RunLifecycleStatus = "QUEUED" | "CREATING" | "RUNNING" | "FINISHED" | "ERROR" | "CANCELLED" | "EXPIRED";
export type AgentLifecycleStatus = "IDLE" | "RUNNING" | "ARCHIVED" | "ERROR";
export interface CheckpointRef {
    blobId: string;
    storeKind: string;
}
export interface StoredModelParameterValue {
    id: string;
    value: string;
}
export interface StoredModelSelection {
    id: string;
    params?: StoredModelParameterValue[];
}
export interface AgentRecord {
    agentId: string;
    workspaceRef: string;
    status: AgentLifecycleStatus;
    activeRunId: string | null;
    latestCheckpointRef: CheckpointRef | null;
    name: string | null;
    createdAt: Date;
    updatedAt: Date;
    metadata: Record<string, unknown>;
}
export interface RunRecord {
    runId: string;
    requestId?: string | null;
    agentId: string;
    turnNumber: number;
    status: RunLifecycleStatus;
    model: StoredModelSelection | null;
    startCheckpointRef: CheckpointRef | null;
    latestCheckpointRef: CheckpointRef | null;
    errorCode: string | null;
    result: string | null;
    usageRef: string | null;
    /** Structured usage snapshot; absent on legacy records. */
    usage?: TokenUsage | null;
    createdAt: Date;
    updatedAt: Date;
    startedAt: Date | null;
    finishedAt: Date | null;
    cancelledAt: Date | null;
    expiredAt: Date | null;
}
export interface CreateAgentInput {
    agentId?: string;
    requestId?: string | null;
    workspaceRef: string;
    name?: string | null;
    model?: StoredModelSelection | null;
    metadata?: Record<string, unknown>;
}
export interface CreateFollowUpRunInput {
    requestId?: string | null;
    model?: StoredModelSelection | null;
    metadata?: Record<string, unknown>;
}
export interface ListOptions {
    cursor?: string;
    limit?: number;
}
export interface ListResult<T> {
    items: T[];
    nextCursor?: string;
}
export interface RunTerminalPatch {
    status: Extract<RunLifecycleStatus, "FINISHED" | "ERROR" | "CANCELLED" | "EXPIRED">;
    errorCode?: string | null;
    result?: string | null;
    usageRef?: string | null;
    /** Cumulative usage snapshot to persist for detached/replayed runs. */
    usage?: TokenUsage | null;
}
export interface AppendRunEventInput {
    runId: string;
    eventType: string;
    payload?: unknown;
    payloadRef?: string | null;
    idempotencyKey?: string | null;
}
export interface RunEventRecord {
    runId: string;
    seq: number;
    offset: string;
    eventType: string;
    payload: unknown;
    payloadRef: string | null;
    idempotencyKey: string | null;
    createdAt: Date;
}
export interface ListRunEventsInput {
    runId: string;
    afterOffset?: string | null;
    limit?: number;
}
export interface ListRunEventsResult {
    events: RunEventRecord[];
    nextOffset?: string;
}
export interface RunEventStore {
    appendRunEvent(input: AppendRunEventInput): Promise<RunEventRecord>;
    listRunEvents(input: ListRunEventsInput): Promise<ListRunEventsResult>;
    deleteRunEvents?(input: {
        runId: string;
    }): Promise<void>;
}
export interface AttachRunEventsInput {
    runId: string;
    afterOffset?: string | null;
    signal?: AbortSignal;
}
export interface RunEventStreamStore extends RunEventStore {
    attachRunEvents(input: AttachRunEventsInput): AsyncIterable<RunEventRecord>;
}
export interface WatchableRunEventStore extends RunEventStore {
    watchRunEvents(input: {
        runId: string;
        signal?: AbortSignal;
    }): AsyncIterable<{
        runId: string;
        offset: string;
    }>;
}
export interface AgentRunStore {
    createAgent(input: CreateAgentInput): Promise<{
        agent: AgentRecord;
        run: RunRecord;
    }>;
    createFollowUpRun(agentId: string, input: CreateFollowUpRunInput): Promise<RunRecord>;
    listAgents(opts?: ListOptions): Promise<ListResult<AgentRecord>>;
    getAgent(agentId: string): Promise<AgentRecord | null>;
    listRuns(agentId: string, opts?: ListOptions): Promise<ListResult<RunRecord>>;
    getRun(agentId: string, runId: string): Promise<RunRecord | null>;
    markRunStarting(agentId: string, runId: string, input?: {
        requestId?: string | null;
    }): Promise<void>;
    patchCheckpoint(agentId: string, runId: string, checkpointRef: CheckpointRef): Promise<void>;
    markRunTerminal(agentId: string, runId: string, terminal: RunTerminalPatch): Promise<void>;
    cancelRun(agentId: string, runId: string): Promise<void>;
    archiveAgent(agentId: string): Promise<void>;
    unarchiveAgent(agentId: string): Promise<void>;
    deleteAgent(agentId: string): Promise<void>;
}
/** Opaque checkpoint payload in the published SDK surface. */
export type SdkConversationStateStructure = unknown;
/** Opaque conversation payload in the published SDK surface. */
export type SdkConversationState = unknown;
/** Opaque blob store handle in the published SDK surface. */
export type SdkBlobStore = unknown;
export interface AgentCheckpointStore {
    loadLatest(agentId: string): Promise<SdkConversationStateStructure>;
    saveCheckpoint(agentId: string, checkpoint: SdkConversationStateStructure): Promise<CheckpointRef>;
    getBlobStore(agentId: string): Promise<SdkBlobStore>;
    getFullConversation(agentId: string): Promise<SdkConversationState>;
    deleteAgent?(agentId: string): Promise<void>;
}
export interface CursorAgentPlatformOptions {
    store?: AgentRunStore;
    checkpointStore?: AgentCheckpointStore;
    eventStore?: RunEventStore;
    eventNotifier?: RunEventNotifier;
    stateRoot?: string;
    workspaceRef?: string;
}
