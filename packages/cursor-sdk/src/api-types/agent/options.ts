// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/agent/options.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: agent/options.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.957Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { FileSystem } from "./filesystem/types.js";
import type { AgentCheckpointStore, AgentRunStore, RunEventNotifier, RunEventStore } from "./run-store-public-types.js";
import type { LocalAgentStore } from "./store/local-agent-store.js";
/** Conversation mode for agent runs. */
export type AgentModeOption = "agent" | "plan";
export interface SDKImageDimension {
    width: number;
    height: number;
}
export type SDKImage = {
    url: string;
    dimension?: SDKImageDimension;
} | {
    data: string;
    mimeType: string;
    dimension?: SDKImageDimension;
};
export interface SDKUserMessage {
    text: string;
    images?: SDKImage[];
}
export type McpServerConfig = {
    type?: "stdio";
    command: string;
    args?: string[];
    env?: Record<string, string>;
    cwd?: string;
} | {
    type?: "http" | "sse";
    url: string;
    headers?: Record<string, string>;
    auth?: {
        CLIENT_ID: string;
        CLIENT_SECRET?: string;
        scopes?: string[];
    };
};
export type SettingSource = "project" | "user" | "team" | "mdm" | "plugins" | "all";
export type SDKJsonPrimitive = string | number | boolean | null;
export type SDKJsonValue = SDKJsonPrimitive | {
    [key: string]: SDKJsonValue;
} | SDKJsonValue[];
export type SDKCustomToolContent = {
    type: "text";
    text: string;
} | {
    type: "image";
    data: string;
    mimeType?: string;
};
export type SDKCustomToolResult = string | SDKJsonValue | {
    content: SDKCustomToolContent[];
    isError?: boolean;
    structuredContent?: Record<string, SDKJsonValue>;
};
export interface SDKCustomToolContext {
    toolCallId?: string;
    /**
     * Local session that invoked the tool. `Task` children receive their own
     * id so a host can bind per-child state. Unset when the runtime has no
     * session id.
     */
    sessionId?: string;
}
/**
 * MCP spec tool annotations (`Tool.annotations`, 2025-03-26 revision).
 *
 * Deliberately a closed type rather than a free-form object: these are the
 * exact fields the pipeline carries (descriptor serialization drops
 * everything else), and the hints are behavioral — a misspelled or
 * wrong-typed hint would silently classify the tool as unannotated, which
 * consumers treat as the most conservative case. The type catches that at
 * the call site.
 */
export interface SDKToolAnnotations {
    /** Human-readable display name for the tool. */
    title?: string;
    /** The tool does not modify its environment. */
    readOnlyHint?: boolean;
    /** The tool may perform destructive updates (meaningful when not read-only). */
    destructiveHint?: boolean;
    /** Repeated calls with the same arguments have no additional effect. */
    idempotentHint?: boolean;
    /** The tool may interact with an open world of external entities. */
    openWorldHint?: boolean;
}
export interface SDKCustomTool {
    description?: string;
    inputSchema?: Record<string, SDKJsonValue>;
    /**
     * JSON Schema for the tool's structured output (`Tool.outputSchema` from
     * the MCP spec). Advertised verbatim when declared and omitted otherwise —
     * never defaulted. Purely descriptive: results are not validated against
     * it.
     */
    outputSchema?: Record<string, SDKJsonValue>;
    /**
     * MCP spec tool annotations. Advertised verbatim when declared and omitted
     * otherwise — never defaulted. Purely descriptive hints: nothing in the
     * harness enforces them, and consumers must treat them as untrusted and
     * fail closed when absent.
     */
    annotations?: SDKToolAnnotations;
    execute: (args: Record<string, SDKJsonValue>, context: SDKCustomToolContext) => SDKCustomToolResult | Promise<SDKCustomToolResult>;
}
export interface SandboxOptions {
    enabled: boolean;
}
export interface ModelParameterValue {
    id: string;
    value: string;
}
export interface ModelSelection {
    id: string;
    params?: ModelParameterValue[];
    /**
     * When true, the local run is sent with max mode. The SDK sets this when
     * every catalog variant consistent with `params` requires max mode.
     */
    maxMode?: boolean;
}
export interface ModelParameterDefinition {
    id: string;
    displayName?: string;
    values: Array<{
        value: string;
        displayName?: string;
    }>;
}
export interface ModelVariant {
    params: ModelParameterValue[];
    displayName: string;
    description?: string;
    isDefault?: boolean;
    /** True when this variant cannot run outside max mode. */
    isMaxMode?: boolean;
}
export interface ModelListItem {
    id: string;
    displayName: string;
    description?: string;
    aliases?: string[];
    parameters?: ModelParameterDefinition[];
    variants?: ModelVariant[];
}
export interface AgentDefinition {
    description: string;
    prompt: string;
    model?: ModelSelection | "inherit";
    mcpServers?: Array<string | Record<string, McpServerConfig>>;
}
/**
 * Options that only apply to local agents. Exported as a standalone type so
 * users can reference it directly (e.g. `Partial<LocalAgentOptions>`) instead
 * of having to unwrap the optional `local` field on `AgentOptions` with
 * `Partial<NonNullable<AgentOptions["local"]>>`.
 */
export interface LocalAgentOptions {
    /**
     * Primary working directory for this local agent (default shell cwd and
     * local agent-store scoping).
     */
    cwd?: string;
    /**
     * Additional / multi-root workspace folders. Merged with {@link cwd} (cwd
     * first, duplicates dropped) so project rules, skills, and request-context
     * workspace metadata load from every unique path. {@link cwd} remains the
     * primary working directory for the default shell and agent-store scoping.
     */
    dirs?: string[];
    /**
     * Enable Cursor's Auto-review for local tool calls. When this is true,
     * local runs select the classifier-backed Auto mode whenever the connected
     * backend has the Auto-review classifier feature enabled.
     */
    autoReview?: boolean;
    /**
     * Custom {@link LocalAgentStore} for this call. When omitted, uses
     * `Cursor.configure({ local: { store } })` if set; otherwise the default
     * SQLite backend when `sqlite3` is installed (`@cursor/sdk/sqlite`), or
     * {@link JsonlLocalAgentStore} when running without native SQLite.
     * Agent rows hold a slim checkpoint ref (`latestCheckpoint.rootBlobId`);
     * blob bytes live on `store.checkpoints`.
     */
    store?: LocalAgentStore;
    /**
     * Ambient Cursor settings layers to load from the local filesystem.
     * Local agents only. On cloud, `project` / `team` / `plugins` are
     * always on and `user` / `mdm` / `local` have no VM equivalent, so
     * this field is gated to the local shape.
     */
    settingSources?: SettingSource[];
    sandboxOptions?: SandboxOptions;
    /**
     * In-process callback tools for this agent, exposed as the
     * `custom-user-tools` MCP server (`GetMcpTools` / `CallMcpTool`). Applied on
     * every `send` unless overridden by {@link LocalSendOptions.customTools}.
     * Local agents only; not supported on cloud agents.
     *
     * Because these tools execute host-provided callbacks in the host process,
     * they never require interactive approval — they run even on sandboxed or
     * `autoReview` runs where MCP server tool calls would otherwise fail closed.
     */
    customTools?: Record<string, SDKCustomTool>;
    /**
     * Enable transport and stall auto-retry for local agent runs. Defaults to
     * true for headless embedders; set false to surface transport errors on the
     * first failure (legacy SDK behavior).
     */
    enableAgentRetries?: boolean;
    /**
     * Loopback URLs of MCP bridges the host process serves to this agent, such
     * as a host that relays its team's MCP servers. When the team's settings
     * come back with its Cloud Agent Allowlist applied, the backend checks every
     * server a bridge relays against that list, so the local run's admin MCP
     * server, network and tool policy does not hold back these exact URLs; any
     * query string is ignored. Otherwise they are checked like any other
     * server. An entry that is not an `http:` URL on `127.0.0.1`, `localhost`
     * or `[::1]` is ignored with a warning.
     *
     * @internal For Agent SDK hosts; may change without notice.
     */
    hostMcpBridgeUrls?: string[];
    /**
     * Opt-in inherit for `Task` child sessions. Unset keeps today's child
     * behavior: host workspace path, host executors, and no tool-allowlist
     * headers. When set, children (including nested `Task` grandchildren) reuse
     * these executor overrides and the reported workspace path, and receive the
     * same allowed-tools / exclude-tools headers as the parent run.
     */
    subagentInherit?: LocalSubagentInherit;
    /**
     * Executor overrides for the agent's own session, or a factory that returns
     * them. A factory runs once per run. Unset keeps the host executors. `Task`
     * children do not inherit these; they take only what
     * {@link LocalAgentOptions.subagentInherit} sets. Applied on every `send`
     * unless overridden by {@link LocalSendOptions.resourceProviderOptions}.
     * Local agents only; not supported on cloud agents.
     */
    resourceProviderOptions?: LocalSubagentResourceProviderOptions;
    /**
     * Workspace path the agent's own model is told to use (for example `/`).
     * Unset keeps the host cwd. Transcript files stay on the host directory.
     * `Task` children do not inherit it. Applied on every `send` unless
     * overridden by {@link LocalSendOptions.reportedWorkspacePath}. Local agents
     * only; not supported on cloud agents.
     *
     * With {@link fs}, this is the workspace inside the tree (default `/`), and
     * `Task` children share it. Relative tool paths resolve against it, LS,
     * Grep, and Glob search it when a call names no path, and project rules
     * load from its `AGENTS.md` and `.cursor/rules/` when `settingSources`
     * includes `"project"`. It must be an absolute posix path outside `/tmp`.
     * A per-send `fs` does not reset it: the send's tree uses this value unless
     * the send also sets {@link LocalSendOptions.reportedWorkspacePath}.
     */
    reportedWorkspacePath?: string;
    /**
     * The tree the agent's native file tools run on instead of the host disk,
     * or a factory called once per run that returns it. Read, Write,
     * StrReplace, the other edit tools, LS, Grep, Glob, Delete, and Task run on
     * it. Tools that would touch the host are not registered: Shell and its
     * stdin writes, ReadLints, SemanticSearch, applyAgentDiff, recordScreen,
     * and computerUse. Naming one of them in `tools` is a `ConfigurationError`.
     * No hooks run, whatever `settingSources` loads, no skills are
     * discovered, and host git status never reaches the model. Applied on every `send` unless overridden by
     * {@link LocalSendOptions.fs}.
     *
     * The workspace inside the tree is `/`, or the folder
     * {@link reportedWorkspacePath} names (for example `/repo`). Project rules
     * load from that folder's `AGENTS.md` and `.cursor/rules/` only when
     * `settingSources` includes `"project"`.
     *
     * Each run mounts a new, empty in-memory `/tmp` over the tree, shadowing
     * any `/tmp` in it. WebFetch, WebSearch, and MCP output that spills to a
     * file, and GenerateImage assets, land there, and it is dropped when the
     * run ends. `Task` children, and their own children, share the run's tree,
     * workspace, and `/tmp`, the same way children without `fs` share the host
     * folder: the parent sees a child's writes and deletes as soon as they
     * happen. To keep a run's writes off the tree you pass in, return
     * `childOverlayFs(tree)` from a factory.
     *
     * Local agents only. Combining it with `cloud`, {@link subagentInherit}, or
     * {@link resourceProviderOptions} is a `ConfigurationError`. An agent
     * created with `fs` needs `fs` again on resume.
     */
    fs?: FileSystem | FileSystemFactory;
}
/** Passed to a {@link FileSystemFactory} once per run. */
export interface FileSystemContext {
    /** The agent's id. The same on every run of the agent. */
    readonly agentId: string;
    /**
     * The agent's own session, the same on every run. `Task` children don't
     * call the factory; they share the tree it returned for the run.
     */
    readonly sessionId: string;
}
/**
 * Returns the tree for one run. The result is used as a live handle: the SDK
 * never snapshots it, so a tree that resolves its mounts on every call keeps
 * working.
 */
export type FileSystemFactory = (ctx: FileSystemContext) => FileSystem | Promise<FileSystem>;
/**
 * Context passed to a `resourceProviderOptions` factory: one call per run for
 * the agent's own session, and one per child session (including nested
 * `Task`s) under {@link LocalSubagentInherit}.
 */
export interface LocalSubagentResourceProviderContext {
    readonly sessionId?: string;
    readonly metadata?: Readonly<Record<string, unknown>>;
}
/**
 * One tool executor: the object a Cursor local resource provider registers
 * for a tool (`ReadExecutor`, `ShellExecutor`, …). Those interfaces are not
 * published with the SDK, so the slot is typed by its shape alone; pass an
 * object implementing the matching interface.
 */
export interface LocalToolExecutor {
    execute(...args: never[]): unknown;
}
/**
 * Resource-provider fields a session may replace. Only the fields you set
 * replace the host defaults.
 */
export interface LocalSubagentResourceProviderFields {
    overrideReadExecutor?: LocalToolExecutor;
    overrideWriteExecutor?: LocalToolExecutor;
    /** Glob file search runs through this executor too. */
    overrideGrepExecutor?: LocalToolExecutor;
    overrideLsExecutor?: LocalToolExecutor;
    /**
     * Runs the Delete tool in place of the host delete. The host permission
     * check and delete approval do not run for this executor.
     */
    overrideDeleteExecutor?: LocalToolExecutor;
    overrideShellExecutor?: LocalToolExecutor;
    /**
     * Do not register the host shell executor. `overrideShellExecutor` wins
     * when both are set; with neither, the session has no shell.
     */
    suppressDefaultShellExecutor?: boolean;
}
/**
 * Resource-provider fields for a session, or a factory that returns them.
 * A factory runs once per session it applies to.
 */
export type LocalSubagentResourceProviderOptions = LocalSubagentResourceProviderFields | ((context: LocalSubagentResourceProviderContext) => LocalSubagentResourceProviderFields | Promise<LocalSubagentResourceProviderFields>);
/**
 * Caller-supplied inherit for local `Task` children. Each field is optional;
 * presence of this object is what forwards the parent tool-allowlist headers.
 */
export interface LocalSubagentInherit {
    /** Executor overrides for the child session, or a factory that returns them. */
    resourceProviderOptions?: LocalSubagentResourceProviderOptions;
    /**
     * Workspace path the child model is told to use (for example `/`). Unset
     * keeps the host cwd. Transcript files stay on the host directory.
     */
    reportedWorkspacePath?: string;
}
/**
 * Per-send local overrides. Use with `Agent.send(..., { local })`. Agent-level
 * defaults live on {@link LocalAgentOptions} (`Agent.create({ local })`).
 */
export interface LocalSendOptions {
    /**
     * Expire the currently active persisted run, if any, before starting this
     * message as a new follow-up run. Recovery path for local agents left wedged
     * after a crashed CLI process.
     */
    force?: boolean;
    /**
     * Custom tools for this send only. When set, replaces
     * {@link LocalAgentOptions.customTools} for that run.
     */
    customTools?: Record<string, SDKCustomTool>;
    /**
     * Replaces {@link LocalAgentOptions.subagentInherit} for this send only.
     */
    subagentInherit?: LocalSubagentInherit;
    /**
     * Replaces {@link LocalAgentOptions.resourceProviderOptions} for this send
     * only.
     */
    resourceProviderOptions?: LocalSubagentResourceProviderOptions;
    /**
     * Replaces {@link LocalAgentOptions.reportedWorkspacePath} for this send
     * only, including the workspace inside a `fs` tree.
     */
    reportedWorkspacePath?: string;
    /**
     * Replaces {@link LocalAgentOptions.fs} for this send only. The workspace
     * inside it is still the agent's `reportedWorkspacePath` unless this send
     * sets its own.
     */
    fs?: FileSystem | FileSystemFactory;
}
/**
 * Options that only apply to cloud agents. Exported as a standalone type so
 * users can reference it directly (e.g. `Partial<CloudAgentOptions>`) instead
 * of having to unwrap the optional `cloud` field on `AgentOptions` with
 * `Partial<NonNullable<AgentOptions["cloud"]>>`.
 */
export interface CloudAgentOptions {
    env?: {
        type: "cloud";
        name?: string;
    } | {
        type: "pool";
        name?: string;
    } | {
        type: "machine";
        name?: string;
    };
    repos?: Array<{
        url: string;
        startingRef?: string;
        prUrl?: string;
    }>;
    workOnCurrentBranch?: boolean;
    autoCreatePR?: boolean;
    /**
     * When true, open PRs as the Cursor GitHub App instead of the API-key owner.
     * Defaults to true for service-account keys and false for user keys.
     */
    openAsCursorGithubApp?: boolean;
    skipReviewerRequest?: boolean;
    /**
     * Per-session env vars injected into the cloud agent's shell, e.g. for
     * caller-minted credentials. Encrypted at rest; deleted with the agent.
     */
    envVars?: Record<string, string>;
    /**
     * Caller-owned string tags persisted on the cloud agent for its lifetime.
     * Join to usage or billing exports client-side via `agent.id` / `cloud_agent_id`.
     *
     * Tags are persisted atomically with the cloud agent. Read them back through
     * `Cursor.agents.get(agentId)` / `Cursor.agents.list()` on
     * `SDKAgentInfo.metadata`.
     */
    metadata?: Record<string, string>;
    /**
     * defineAgent directory slug. Personal-key cloud creates persist this so
     * the pod discovers Agent Serve skills at
     * `/cursor/stores/user/agent-serve/<agentServeAgent>/skills`. Not a
     * caller-owned metadata tag: Get/List strip it.
     */
    agentServeAgent?: string;
}
export interface CursorAgentPlatformOptions {
    /**
     * Custom {@link LocalAgentStore}. Prefer `local.store` on `Agent.create` /
     * `Agent.resume` unless constructing a platform directly. When omitted, the
     * platform uses built-in SQLite under `stateRoot` — implement
     * {@link LocalAgentStore} only to replace that default path.
     */
    localStore?: LocalAgentStore;
    stateRoot?: string;
    workspaceRef?: string;
    /**
     * When set, custom-store reads filter to agents whose `cwd` matches. Populated
     * from an explicit caller `cwd`; omitted when the caller did not pass one.
     */
    scopedWorkspaceRef?: string;
    /**
     * Internal storage hooks retained for existing advanced callers.
     */
    store?: AgentRunStore;
    checkpointStore?: AgentCheckpointStore;
    eventStore?: RunEventStore;
    eventNotifier?: RunEventNotifier;
}
/**
 * Public tool names accepted by {@link AgentOptions.tools}.
 *
 * The listed literals are a curated set of the common local-agent built-in
 * tools, surfaced for editor autocomplete. They are not the full vocabulary:
 * the complete set is derived from the agent proto at runtime, so the
 * `(string & {})` member keeps the type open — any other public tool name,
 * capability group, or raw proto tool name (e.g. `"web_search_tool_call"`) is
 * still accepted. Unknown names are rejected at `Agent.create` /
 * `Agent.resume`, not by the type.
 */
export type ToolName = "shell" | "read" | "edit" | "grep" | "glob" | "ls" | "task" | "mcp" | "webSearch" | "delete" | "readLints" | "webFetch" | "semSearch" | "updateTodos" | "readTodos" | "askQuestion" | "await" | "generateImage" | "applyAgentDiff" | (string & {});
export interface AgentOptions {
    /**
     * Model selection (`{ id, params? }`). Required for local agents; optional
     * for cloud (the server resolves the caller's configured default when
     * omitted). Use `Cursor.models.list()` to discover valid selections.
     */
    model?: ModelSelection;
    apiKey?: string;
    /**
     * Team to attribute this agent's requests to. Sent as `x-cursor-team-id`
     * on local Connect calls (the run and the dashboard client that loads team
     * settings) and on cloud HTTP calls. Pass the same positive integer the
     * CLI stores as `authInfo.activeTeamId` when the login belongs to more
     * than one team.
     *
     * Omitted, zero, negative, fractional, and non-safe-integer values leave
     * the header off, and the backend keeps the account's ambient team.
     * Single-team logins can omit it.
     *
     * Not persisted and not read from the CLI config. Pass it again on
     * `Agent.resume` and on later account calls so those requests stay on the
     * same team.
     */
    teamId?: number;
    /**
     * Restricts the built-in tools available to the model:
     *
     * - `undefined` (default) — the standard toolset for the selected model.
     * - `[]` — no built-in tools; the model can only respond with text.
     * - Non-empty — only the listed tools are offered to the model.
     *
     * Tool names use the SDK's public tool vocabulary — the same names carried
     * by `tool_call` stream events (`"shell"`, `"read"`, `"edit"`, `"grep"`,
     * `"glob"`, `"ls"`, `"task"`, `"mcp"`, ...). The vocabulary is derived from
     * the agent proto, so tools added to the platform are addressable without
     * an SDK update; raw proto tool names such as `"web_search_tool_call"` are
     * also accepted. Unknown names throw a `ConfigurationError` at
     * `Agent.create` / `Agent.resume` listing the valid names.
     *
     * Notes:
     * - `"shell"` and `"mcp"` are capability groups: `"shell"` also grants
     *   shell stdin writes, and `"mcp"` grants the whole MCP tool family
     *   (including {@link LocalAgentOptions.customTools}); omitting `"mcp"`
     *   disables MCP entirely.
     * - `"task"` gates subagents. Subagents launched through it keep their own
     *   curated toolsets; the restriction applies to the main agent loop.
     * - Not persisted on the agent: pass `tools` again on `Agent.resume` to
     *   keep the restriction for follow-up runs.
     *
     * Local agents only for now; combining `tools` with `cloud` throws a
     * `ConfigurationError`.
     *
     * See {@link ToolName} for the accepted names.
     */
    tools?: ToolName[];
    /**
     * Removes the listed built-in tools from the model's toolset. The
     * complement of {@link AgentOptions.tools}: instead of naming what stays,
     * name what goes, and everything else in the default toolset remains
     * available — including tools added to the platform after this SDK was
     * released.
     *
     * Accepts the same vocabulary as `tools` (public names, capability groups,
     * raw proto names); unknown names throw a `ConfigurationError` at
     * `Agent.create` / `Agent.resume`. Capability groups expand the same way:
     * `"shell"` also removes shell stdin writes, and `"mcp"` removes the whole
     * MCP tool family (including {@link LocalAgentOptions.customTools}).
     *
     * Notes:
     * - Combines with `tools` as deny-wins: a tool must be listed in `tools`
     *   (when set) and not listed in `disallowedTools` to be offered.
     * - Like `tools`, the exclusion applies to the main agent loop: subagents
     *   launched through `"task"` keep their own curated toolsets. Disallow
     *   `"task"` to prevent subagents entirely.
     * - Not persisted on the agent: pass `disallowedTools` again on
     *   `Agent.resume` to keep the exclusion for follow-up runs.
     *
     * Local agents only for now; combining `disallowedTools` with `cloud`
     * throws a `ConfigurationError`.
     */
    disallowedTools?: ToolName[];
    /**
     * Replaces the system prompt for the main agent loop. When set, the model
     * receives this text as its entire system prompt instead of Cursor's
     * built-in harness prompt: the coding-assistant identity, tool-use protocol
     * and communication guidance are all gone, and the caller is responsible
     * for restating whatever the agent still needs. Tool JSON schemas and
     * ambient context (rules, skills, `<user_info>`) are unaffected. Subagents
     * launched through `"task"` keep their own prompts.
     *
     * Server-side access is enabled per account. Without it, the first
     * `send` fails with `InvalidArgument`: "Custom system prompt is not
     * enabled for this account. Contact Cursor support to request access."
     *
     * Notes:
     * - Must be non-empty; whitespace-only text throws a `ConfigurationError`
     *   at `Agent.create` / `Agent.resume`.
     * - Not persisted on the agent: pass `systemPrompt` again on
     *   `Agent.resume` to keep it for follow-up runs.
     *
     * Local agents only for now; combining `systemPrompt` with `cloud` throws a
     * `ConfigurationError`.
     */
    systemPrompt?: string;
    /**
     * Optional human-readable name for the agent, surfaced as the `title` in
     * `Agent.list()` / `Agent.get()`. Cloud agents auto-generate a name from
     * the first prompt when this is omitted; local agents fall back to a
     * generic default.
     */
    name?: string;
    local?: LocalAgentOptions;
    cloud?: CloudAgentOptions;
    mcpServers?: Record<string, McpServerConfig>;
    agents?: Record<string, AgentDefinition>;
    agentId?: string;
    idempotencyKey?: string;
    /** Initial conversation mode for this agent. */
    mode?: AgentModeOption;
}
