// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/executor-types.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: executor-types.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.986Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { BlobStore } from "@anysphere/agent-kv";
import type { ConversationStateStructure } from "@anysphere/proto/agent/v1/agent_pb.js";
import type { FileSystem } from "./filesystem/types.js";
import type { AgentModeOption, FileSystemFactory, AgentOptions, LocalSubagentInherit, McpServerConfig, ModelSelection, SDKCustomTool } from "./options.js";
import type { RunError, SteerAckOutcome } from "./run.js";
import type { InteractionListener } from "./types/delta-types.js";
export type RunExecutorInput = {
    text: string;
    images?: Array<{
        type: "base64";
        data: string;
    }>;
    summarize?: undefined;
}
/** Summarizes the conversation instead of sending a message. */
 | {
    summarize: true;
};
export interface RunResultMetadata {
    status: string;
    result?: string;
    error?: RunError;
    durationMs?: number;
    git?: {
        branches: Array<{
            repoUrl: string;
            branch?: string;
            prUrl?: string;
        }>;
    };
}
export interface RunExecutorOptions {
    sessionId?: string;
    model?: ModelSelection;
    apiKey: string;
    requestId?: string;
    initialState?: ConversationStateStructure;
    blobStore?: BlobStore;
    /**
     * Stable per-agent blob encryption key (hex) resolved from local-store
     * persistence. Threaded into the run's `x-blob-encryption-key` header so the
     * server keeps its cross-turn blob cache alive. When omitted, the runtime
     * falls back to a stable in-process key.
     */
    blobEncryptionKey?: string;
    mcpServersOverride?: Record<string, McpServerConfig>;
    mode?: AgentModeOption;
    customTools?: Record<string, SDKCustomTool>;
    /**
     * Agent proto tool names (already resolved from the public
     * `AgentOptions.tools` names) that the run's toolset is restricted to.
     * `undefined` keeps the server's default toolset; an empty array disables
     * all built-in tools. Sent as the allowed-tools request header on every
     * turn of the run.
     */
    allowedTools?: readonly string[];
    /**
     * Agent proto tool names (already resolved from the public
     * `AgentOptions.disallowedTools` names) removed from the run's toolset.
     * `undefined` or empty keeps the server's default toolset. Sent as the
     * exclude-tools request header on every turn of the run.
     */
    disallowedTools?: readonly string[];
    /**
     * Validated `AgentOptions.systemPrompt`. Replaces the server's harness
     * system prompt; sent as `customSystemPrompt` on every turn of the run.
     */
    systemPrompt?: string;
    /**
     * Opt-in inherit for `Task` children of this run. Unset keeps host
     * executors, the host workspace path, and omits tool-allowlist headers on
     * the child. Nested `Task` calls reuse the same value.
     */
    subagentInherit?: LocalSubagentInherit;
    sessionResources?: LocalSubagentInherit;
    /**
     * `local.fs` for this run, as the caller passed it (send value over agent
     * value). The local executor resolves it once per run and runs the root
     * session and every `Task` child on it. Never set together with
     * `sessionResources` or `subagentInherit`.
     */
    fileSystem?: FileSystem | FileSystemFactory;
    /**
     * The workspace inside `fileSystem` (`local.reportedWorkspacePath`, send
     * value over agent value), already validated. Unset means `/`. Applies to
     * the root session and every `Task` child.
     */
    fileSystemWorkspace?: string;
    onCheckpoint?: (checkpoint: ConversationStateStructure) => void | Promise<void>;
}
export interface RunExecutorController {
    abort(): void;
    done: Promise<void>;
    steer?(text: string): Promise<SteerAckOutcome>;
}
export type RunExecutor = (input: RunExecutorInput, opts: RunExecutorOptions, listener: InteractionListener) => Promise<RunExecutorController>;
export interface CloudWorkingLocation {
    type: "github";
    repository: string;
    ref?: string;
}
export interface CloudExecutorConfig {
    env?: {
        type: "cloud" | "pool" | "machine";
        name?: string;
    };
    repos: Array<{
        url: string;
        startingRef?: string;
        prUrl?: string;
    }>;
    workOnCurrentBranch?: boolean;
    autoCreatePR?: boolean;
    openAsCursorGithubApp?: boolean;
    skipReviewerRequest?: boolean;
    model?: ModelSelection;
    mcpServers?: AgentOptions["mcpServers"];
}
