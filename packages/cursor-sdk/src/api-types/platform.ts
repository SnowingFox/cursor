// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/platform.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: platform.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.954Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
type PlatformRunExecutor = (...args: never) => Promise<unknown>;
import type { AgentMessage, AgentOperationOptions, CursorRequestOptions, GetAgentMessagesOptions, GetAgentOptions, GetRunOptions, GetUsageOptions, ListAgentsOptions, ListRunsOptions, ListResult as PublicListResult, SDKAgent, SDKAgentInfo, SDKModel, SDKRepository, SDKUser } from "./agent.js";
import { type SDKMessage } from "./messages.js";
import type { AgentOptions, CursorAgentPlatformOptions, McpServerConfig, ModelSelection, SandboxOptions, SettingSource } from "./options.js";
import { type Run } from "./run.js";
import type { AgentCheckpointStore, AgentRunStore, RunEventNotifier, RunEventStore, RuntimeCustomSubagentDefinition } from "./run-store-public-types.js";
import { type AgentUsage } from "./usage-types.js";
interface AgentExecutorHandle {
    run: PlatformRunExecutor;
    reload?(): Promise<void>;
    dispose?(): Promise<void>;
}
interface AgentExecutorLease {
    readonly handle: AgentExecutorHandle;
    readonly cacheMiss: boolean;
    release(): Promise<void>;
}
interface AgentExecutorCacheOptions {
    readonly workingDirectory: string;
    /**
     * Explicit workspace folders from `local.dirs`. When omitted or a single
     * path, the local runtime keeps its single-root projectRoot derivation.
     * When multiple dirs are present they are forwarded so project settings
     * and request-context env cover every folder.
     */
    readonly dirs?: readonly string[];
    readonly apiKey?: string;
    /** Positive safe integer sent as `x-cursor-team-id`. Other values are omitted. */
    readonly teamId?: number;
    readonly settingSources?: readonly SettingSource[];
    readonly sandboxOptions?: SandboxOptions;
    readonly autoReview?: boolean;
    readonly devForceNextSmartModeClassifierBlockToken?: string;
    readonly mcpServers?: Record<string, McpServerConfig>;
    readonly customSubagents?: readonly RuntimeCustomSubagentDefinition[];
    readonly enableAgentRetries?: boolean;
    readonly hostMcpBridgeUrls?: readonly string[];
}
export declare function acquireLocalExecutor(options: AgentExecutorCacheOptions): Promise<AgentExecutorLease>;
export declare function __clearLocalExecutorCacheForTests(): void;
export declare class CursorAgentPlatform {
    readonly store: AgentRunStore;
    readonly checkpointStore: AgentCheckpointStore;
    readonly eventStore: RunEventStore | undefined;
    readonly eventNotifier: RunEventNotifier | undefined;
    private readonly workspaceRef;
    private readonly localModelListCache;
    constructor(store: AgentRunStore, checkpointStore: AgentCheckpointStore, eventStore: RunEventStore | undefined, eventNotifier: RunEventNotifier | undefined, workspaceRef: string);
    acquireLocalExecutor(options: AgentExecutorCacheOptions): Promise<AgentExecutorLease>;
    /**
     * Build the local executor for `options` ahead of the first `send()`.
     *
     * Resolving a workspace — Cursor rules, skills, MCP, the ignore mappings —
     * is the slowest part of a local agent's first turn, and on a large repo it
     * dominates it. A host that knows which workspace its agents will run in can
     * pay that during startup instead of inside the first request.
     *
     * The executor is keyed on the options that shape it (working directory, api
     * key, setting sources, sandbox, MCP servers, subagents), so pass the same
     * options the eventual agent will get. Anything else warms a different
     * executor and the first turn still pays.
     *
     * Returns a release function. Hold it for as long as agents may run against
     * the workspace: the executor is reference counted and releasing the last
     * reference tears it down. Prewarming is a pure optimization — failures are
     * the caller's to ignore, and a later `send()` will rebuild.
     */
    prewarmLocalWorkspace(options: AgentOptions): Promise<() => Promise<void>>;
    resolveLocalModelSelection(selection: ModelSelection, apiKey: string | undefined, teamId?: number): Promise<ModelSelection>;
    private listModelsForLocalValidation;
    createAgent(options: AgentOptions): Promise<SDKAgent>;
    resumeAgent(agentId: string, options: Partial<AgentOptions>): Promise<SDKAgent>;
    listAgents(options?: ListAgentsOptions): Promise<PublicListResult<SDKAgentInfo>>;
    getAgent(agentId: string): Promise<SDKAgentInfo>;
    archiveAgent(agentId: string): Promise<void>;
    unarchiveAgent(agentId: string): Promise<void>;
    deleteAgent(agentId: string): Promise<void>;
    listRuns(agentId: string, options?: ListRunsOptions): Promise<PublicListResult<Run>>;
    getRun(runId: string): Promise<Run>;
    cancelRun(runId: string): Promise<void>;
    getAgentMessages(agentId: string, options?: GetAgentMessagesOptions): Promise<AgentMessage[]>;
    appendRunMessage(message: SDKMessage): Promise<void>;
    private toDetachedStoreRun;
    private createRunEventTailer;
    private findRunById;
}
export declare function createAgentPlatform(options?: CursorAgentPlatformOptions): Promise<CursorAgentPlatform>;
export declare function createDefaultAgent(optionsIn: AgentOptions): Promise<SDKAgent>;
export declare function resumeDefaultAgent(agentId: string, optionsIn?: Partial<AgentOptions>): Promise<SDKAgent>;
export declare function listDefaultAgents(options?: ListAgentsOptions): Promise<PublicListResult<SDKAgentInfo>>;
export declare function listDefaultRuns(agentId: string, options?: ListRunsOptions): Promise<PublicListResult<Run>>;
export declare function getDefaultRun(runId: string, options?: GetRunOptions): Promise<Run>;
export declare function cancelDefaultRun(runId: string, options?: GetRunOptions): Promise<void>;
export declare function getDefaultAgentMessages(agentId: string, options?: GetAgentMessagesOptions): Promise<AgentMessage[]>;
export declare function getDefaultAgent(agentId: string, options?: GetAgentOptions): Promise<SDKAgentInfo>;
export declare function archiveDefaultAgent(agentId: string, options?: AgentOperationOptions): Promise<void>;
export declare function unarchiveDefaultAgent(agentId: string, options?: AgentOperationOptions): Promise<void>;
export declare function deleteDefaultAgent(agentId: string, options?: AgentOperationOptions): Promise<void>;
export declare function getDefaultAgentUsage(agentId: string, options?: GetUsageOptions & CursorRequestOptions): Promise<AgentUsage>;
export declare function getDefaultMe(options?: CursorRequestOptions): Promise<SDKUser>;
export declare function listDefaultModels(options?: CursorRequestOptions): Promise<SDKModel[]>;
export declare function listDefaultRepositories(options?: CursorRequestOptions): Promise<SDKRepository[]>;
export {};
