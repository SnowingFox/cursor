// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/stubs.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: stubs.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.976Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { AgentMessage, AgentOperationOptions, CursorRequestOptions, GetAgentMessagesOptions, GetAgentOptions, GetRunOptions, GetUsageOptions, ListAgentsOptions, ListResult, ListRunsOptions, SDKAgent, SDKAgentInfo, SDKModel, SDKRepository, SDKUser, SendOptions } from "./agent.js";
import type { SDKArtifact } from "./artifacts.js";
import { type SdkAuthStatus, type SdkAuthStatusOptions, type SdkLoginOptions, type SdkLoginResult, type SdkLogoutOptions } from "./auth/login.js";
import { ConfigurationError } from "./errors.js";
import type { SDKMessage } from "./messages.js";
import type { AgentOptions, SDKUserMessage } from "./options.js";
import type { Run, RunOperation, RunResult, RunStatus, SteerAckOutcome } from "./run.js";
import { type CursorConfigureOptions } from "./sdk-config.js";
import type { ConversationTurn } from "./types/conversation-types.js";
import type { AgentUsage } from "./usage-types.js";
export declare function createUnimplementedError(apiName: string): ConfigurationError;
export declare class UnimplementedRun implements Run {
    readonly id = "unimplemented-run";
    readonly agentId = "unimplemented-agent";
    readonly result: undefined;
    readonly model: undefined;
    readonly durationMs: undefined;
    readonly usage: undefined;
    readonly git: undefined;
    supports(_operation: RunOperation): boolean;
    unsupportedReason(operation: RunOperation): string | undefined;
    stream(): AsyncGenerator<SDKMessage, void>;
    conversation(): Promise<ConversationTurn[]>;
    wait(): Promise<RunResult>;
    steer(_text: string): Promise<SteerAckOutcome>;
    cancel(): Promise<void>;
    get status(): RunStatus;
    onDidChangeStatus(_listener: (status: RunStatus) => void): () => void;
}
export declare class UnimplementedAgent implements SDKAgent {
    readonly agentId = "unimplemented-agent";
    readonly model: undefined;
    send(_message: string | SDKUserMessage, _options?: SendOptions): Promise<Run>;
    close(): void;
    reload(): Promise<void>;
    [Symbol.asyncDispose](): Promise<void>;
    listArtifacts(): Promise<SDKArtifact[]>;
    downloadArtifact(_path: string): Promise<Buffer>;
    getUsage(_options?: GetUsageOptions): Promise<AgentUsage>;
    summarize(): Promise<Run>;
}
export declare class Agent {
    private constructor();
    /**
     * Create an agent instance.
     */
    static create(options: AgentOptions): Promise<SDKAgent>;
    /**
     * Resume an existing agent by ID.
     */
    static resume(agentId: string, options?: Partial<AgentOptions>): Promise<SDKAgent>;
    /**
     * Convenience API to create an agent, run one prompt, and close.
     */
    static prompt(message: string, options?: AgentOptions): Promise<RunResult>;
    static list(options?: ListAgentsOptions): Promise<ListResult<SDKAgentInfo>>;
    static listRuns(agentId: string, options?: ListRunsOptions): Promise<ListResult<Run>>;
    static getRun(runId: string, options?: GetRunOptions): Promise<Run>;
    static cancelRun(runId: string, options?: GetRunOptions): Promise<void>;
    /**
     * Fetch a single agent's metadata by ID. Cloud-only — local agent lookup
     * is a post-launch followup.
     */
    static get(agentId: string, options?: GetAgentOptions): Promise<SDKAgentInfo>;
    /**
     * Archive an agent. Cloud-only.
     */
    static archive(agentId: string, options?: AgentOperationOptions): Promise<void>;
    /**
     * Unarchive a previously archived agent. Cloud-only.
     */
    static unarchive(agentId: string, options?: AgentOperationOptions): Promise<void>;
    /**
     * Delete an agent. Cloud-only and irreversible.
     */
    static delete(agentId: string, options?: AgentOperationOptions): Promise<void>;
    /**
     * Fetch billed token usage and dollar cost for an agent. Cloud agents return
     * a per-run breakdown. Local agents return a per-turn breakdown whose
     * entries are keyed by usage UUID.
     */
    static getUsage(agentId: string, options?: GetUsageOptions & CursorRequestOptions): Promise<AgentUsage>;
    static readonly messages: {
        list(agentId: string, options?: GetAgentMessagesOptions): Promise<AgentMessage[]>;
    };
}
/**
 * Account and platform-level operations. Namespaced separately from `Agent`
 * because these concerns (the calling user, available models, connected
 * repositories) aren't scoped to a specific agent.
 */
export declare class Cursor {
    private constructor();
    /**
     * Set module-level defaults for SDK local operations. Per-call options on
     * `Agent.create`, `Agent.list`, and related APIs override these values.
     */
    static configure(options: CursorConfigureOptions): void;
    /**
     * Get metadata about the authenticated user / API key.
     */
    static me(options?: CursorRequestOptions): Promise<SDKUser>;
    /**
     * List models available to the authenticated user.
     */
    static readonly models: {
        list(options?: CursorRequestOptions): Promise<SDKModel[]>;
    };
    /**
     * List GitHub repositories the authenticated user has connected to Cursor.
     */
    static readonly repositories: {
        list(options?: CursorRequestOptions): Promise<SDKRepository[]>;
    };
    /**
     * Interactive end-user authentication. `login()` opens the user's browser
     * to complete a Cursor sign-in and mints a named, expiring user API key,
     * persisted to `~/.cursor/sdk/auth.json` by default.
     */
    static readonly auth: {
        login(options?: SdkLoginOptions): Promise<SdkLoginResult>;
        logout(options?: SdkLogoutOptions): Promise<void>;
        status(options?: SdkAuthStatusOptions): Promise<SdkAuthStatus>;
    };
}
