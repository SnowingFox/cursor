// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/agent.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: agent.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.955Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { AgentModeOption, LocalSendOptions, McpServerConfig, ModelListItem, ModelSelection, SDKUserMessage } from "./options.js";
import type { Run } from "./run.js";
import type { LocalAgentStore } from "./store/local-agent-store.js";
import type { ConversationStep } from "./types/conversation-types.js";
import type { InteractionUpdate } from "./types/delta-types.js";
import type { AgentUsage } from "./usage-types.js";
import type { SDKArtifact } from "./artifacts.js";
export interface SDKAgent {
    readonly agentId: string;
    /**
     * The agent's current model selection. Updated after each successful
     * `send({ model })`; `undefined` until something sets it.
     */
    readonly model: ModelSelection | undefined;
    send(message: string | SDKUserMessage, options?: SendOptions): Promise<Run>;
    close(): void;
    reload(): Promise<void>;
    [Symbol.asyncDispose](): Promise<void>;
    listArtifacts(): Promise<SDKArtifact[]>;
    downloadArtifact(path: string): Promise<Buffer>;
    /**
     * Fetch billed token usage and dollar cost for this agent. Cloud agents
     * return a per-run breakdown. Local agents return a per-turn breakdown whose
     * entries are keyed by usage UUID.
     */
    getUsage(options?: GetUsageOptions): Promise<AgentUsage>;
    /**
     * Summarize the conversation now to free context, as the CLI's `/summarize`
     * does. Starts a run like `send()`: stream it for `summary` messages, and
     * `wait()` for the summary text in `result`. Like `send()`, throws while
     * another run is active. Local agents only: throws `ConfigurationError` on
     * cloud agents and before the agent has a saved conversation.
     */
    summarize(): Promise<Run>;
}
export interface GetUsageOptions {
    /**
     * Restrict the result to one cloud run or local turn. For cloud agents, pass
     * a `run-<uuid>` run ID. For local agents, pass a usage UUID from a previous
     * `getUsage().runs[].runId`; client-side `run-<uuid>` labels throw a
     * `ConfigurationError`.
     */
    runId?: string;
}
export interface SendOptions {
    model?: ModelSelection;
    mcpServers?: Record<string, McpServerConfig>;
    /** Conversation mode for this send. */
    mode?: AgentModeOption;
    onStep?: (args: {
        step: ConversationStep;
    }) => void | Promise<void>;
    onDelta?: (args: {
        update: InteractionUpdate;
    }) => void | Promise<void>;
    /**
     * Per-send options that only apply to local agents. Nested to make the
     * local-only scope explicit at the type level — cloud callers cannot
     * pass these fields.
     */
    local?: LocalSendOptions;
    /**
     * Per-send options that only apply to cloud agents.
     */
    cloud?: CloudSendOptions;
    idempotencyKey?: string;
}
export interface CloudSendOptions {
    /**
     * Run-scoped env vars injected into the cloud agent while this send's run
     * executes. Overrides agent-scoped `cloud.envVars` by name for this run only.
     */
    envVars?: Record<string, string>;
}
export type ListAgentsOptions = {
    limit?: number;
    cursor?: string;
} & ({
    runtime?: undefined;
} | {
    runtime: "local";
    cwd?: string;
    store?: LocalAgentStore;
} | {
    runtime: "cloud";
    prUrl?: string;
    includeArchived?: boolean;
    apiKey?: string;
    /** Team to scope the cloud list to. See {@link AgentOptions.teamId}. */
    teamId?: number;
});
export interface ListResult<T> {
    items: T[];
    nextCursor?: string;
}
export type SDKAgentInfo = {
    agentId: string;
    name: string;
    summary: string;
    lastModified: number;
    status?: "running" | "finished" | "error";
    createdAt?: number;
    /**
     * True when the agent has been archived via `Agent.archive(...)`. Distinct
     * from `status` (which reflects the most recent run's execution state).
     * Backwards-compatible optional field; undefined on older shapes.
     */
    archived?: boolean;
} & ({
    runtime?: undefined;
} | {
    runtime: "local";
    cwd?: string;
} | {
    runtime: "cloud";
    env?: {
        type: "cloud" | "pool" | "machine";
        name?: string;
    };
    repos?: string[];
    /**
     * Caller-owned string tags set at creation via
     * `Agent.create({ cloud: { metadata } })`. Read back here on
     * `Agent.get` / `Agent.list` so callers can confirm the tags persisted.
     */
    metadata?: Record<string, string>;
});
export type ListRunsOptions = {
    limit?: number;
    cursor?: string;
} & ({
    runtime?: "local";
    cwd?: string;
    store?: LocalAgentStore;
} | {
    runtime: "cloud";
    apiKey?: string;
    /** Team to scope the cloud list to. See {@link AgentOptions.teamId}. */
    teamId?: number;
});
export interface GetAgentMessagesOptions {
    limit?: number;
    offset?: number;
    runtime?: "local";
    cwd?: string;
    store?: LocalAgentStore;
}
export type GetRunOptions = {
    runtime?: "local";
    cwd?: string;
    store?: LocalAgentStore;
} | {
    runtime: "cloud";
    agentId: string;
    apiKey?: string;
    /** Team to scope the cloud run call to. See {@link AgentOptions.teamId}. */
    teamId?: number;
};
export interface AgentMessage {
    type: "user" | "assistant";
    uuid: string;
    agent_id: string;
    message: unknown;
}
/**
 * Options for `Agent.get` / `Agent.archive` / `Agent.unarchive` /
 * `Agent.delete`.
 *
 * Runtime is auto-detected from the agent ID: IDs that start with `"bc-"`
 * route to the Cursor cloud API, everything else routes to the local store.
 *
 * - `cwd` is used when routing to the local store (defaults to `process.cwd()`).
 * - `store` overrides the module default from `Cursor.configure({ local: { store } })`.
 * - `apiKey` is used when routing to the cloud API (falls back to
 *   `process.env.CURSOR_API_KEY`, then the stored `Cursor.auth.login()` key).
 */
export interface GetAgentOptions {
    cwd?: string;
    apiKey?: string;
    /**
     * Team to scope a cloud lookup to. See {@link AgentOptions.teamId}.
     * Ignored for local agents.
     */
    teamId?: number;
    store?: LocalAgentStore;
}
export interface AgentOperationOptions {
    cwd?: string;
    apiKey?: string;
    /**
     * Team to scope a cloud archive, unarchive, or delete to. See
     * {@link AgentOptions.teamId}. Ignored for local agents.
     */
    teamId?: number;
    store?: LocalAgentStore;
}
/**
 * Options for cloud-only account/catalog operations (Cursor.me, Cursor.models.list,
 * Cursor.repositories.list). If `apiKey` is omitted, falls back to
 * `process.env.CURSOR_API_KEY`, then the stored `Cursor.auth.login()` key.
 */
export interface CursorRequestOptions {
    apiKey?: string;
    /**
     * Team to scope this account or catalog call to. See
     * {@link AgentOptions.teamId}.
     */
    teamId?: number;
}
export interface SDKUser {
    /** Display name of the API key used to authenticate the request. */
    apiKeyName: string;
    /**
     * Numeric Cursor user id of the API key's owner. `undefined` for team /
     * service-account API keys, which aren't tied to a specific user.
     */
    userId?: number;
    /** Email of the user that owns the API key, when available. */
    userEmail?: string;
    /** First name of the user that owns the API key, when available. */
    userFirstName?: string;
    /** Last name of the user that owns the API key, when available. */
    userLastName?: string;
    /** ISO 8601 timestamp of when the API key was created. */
    createdAt: string;
}
export interface SDKRepository {
    url: string;
}
/**
 * An entry returned by `Cursor.models.list()`. The `model` field is a
 * canonical `{ id, params }` that can be passed straight to `createAgent`.
 */
export type SDKModel = ModelListItem;
