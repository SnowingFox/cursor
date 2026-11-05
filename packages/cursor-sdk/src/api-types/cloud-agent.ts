// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/cloud-agent.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: cloud-agent.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.987Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { AgentOperationOptions, CursorRequestOptions, GetAgentOptions, GetRunOptions, ListAgentsOptions, ListResult, ListRunsOptions, SDKAgent, SDKAgentInfo, SDKModel, SDKRepository, SDKUser } from "./agent.js";
import type { AgentOptions, ModelSelection } from "./options.js";
import type { Run } from "./run.js";
export declare function createCloudAgent(options: AgentOptions): SDKAgent;
/**
 * Pre-flight check that `model` is in the catalog returned by
 * `Cursor.models.list()`. Surfaces bogus-model failures at create time
 * instead of mid-stream during the first `send()`.
 *
 * If the catalog call fails with a `NetworkError`, `AuthenticationError`,
 * or `RateLimitError` the check is best-effort-skipped — the user has
 * bigger problems than a bad model id, and backend `validateModelSelection`
 * becomes the source of truth in that case. Other error classes (programmer
 * errors, ApiError 5xx, unexpected throws) propagate so they aren't
 * silently lost.
 *
 * NOTE: today `createDefaultAgent` is the only caller; `createCloudAgent`
 * does not invoke this helper itself, so direct cloud-agent callers bypass
 * the pre-flight. P3.4 of the structural review tracks moving the call into
 * `createCloudAgent` itself, but that turns it into an async constructor and
 * touches every `createCloudAgent` call site. Deferred to its own PR.
 */
export declare function validateCloudModelAvailability({ apiKey, model, teamId, }: {
    apiKey: string | undefined;
    model: ModelSelection | string;
    teamId?: number;
}): Promise<void>;
export declare function resumeCloudAgent(agentId: string, options: Partial<AgentOptions>): SDKAgent;
export declare function listCloudAgents(options: Extract<ListAgentsOptions, {
    runtime: "cloud";
}>): Promise<ListResult<SDKAgentInfo>>;
export declare function listCloudRuns(agentId: string, options: Extract<ListRunsOptions, {
    runtime: "cloud";
}>): Promise<ListResult<Run>>;
export declare function getCloudRun(runId: string, options: Extract<GetRunOptions, {
    runtime: "cloud";
}>): Promise<Run>;
export declare function cancelCloudRun(runId: string, options: Extract<GetRunOptions, {
    runtime: "cloud";
}>): Promise<void>;
export declare function getCloudAgent(agentId: string, options: GetAgentOptions): Promise<SDKAgentInfo>;
export declare function archiveCloudAgent(agentId: string, options: AgentOperationOptions): Promise<void>;
export declare function unarchiveCloudAgent(agentId: string, options: AgentOperationOptions): Promise<void>;
export declare function deleteCloudAgent(agentId: string, options: AgentOperationOptions): Promise<void>;
export declare function getCloudMe(options: CursorRequestOptions): Promise<SDKUser>;
export declare function listCloudModels(options: CursorRequestOptions): Promise<SDKModel[]>;
export declare function listCloudRepositories(options: CursorRequestOptions): Promise<SDKRepository[]>;
