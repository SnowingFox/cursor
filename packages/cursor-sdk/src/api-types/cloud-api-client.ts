// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/cloud-api-client.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: cloud-api-client.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.953Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import { ConfigurationError } from "./errors.js";
import type { RunResultMetadata } from "./executor-types.js";
import type { McpServerConfig, ModelListItem, ModelSelection } from "./options.js";
import type { AgentUsage } from "./usage-types.js";
export type V1Image = {
    url: string;
    dimension?: {
        width: number;
        height: number;
    };
} | {
    data: string;
    mimeType: string;
    dimension?: {
        width: number;
        height: number;
    };
};
export interface V1Prompt {
    text: string;
    images?: V1Image[];
}
export interface V1Env {
    type: "cloud" | "pool" | "machine";
    name?: string;
}
export interface V1Repository {
    url: string;
    startingRef?: string;
    prUrl?: string;
}
type V1StdioMcpServerConfig = Omit<Extract<McpServerConfig, {
    command: string;
}>, "cwd">;
type V1RemoteMcpServerConfig = Extract<McpServerConfig, {
    url: string;
}>;
export type V1McpServer = (V1StdioMcpServerConfig | V1RemoteMcpServerConfig) & {
    name: string;
};
export interface V1CustomSubagent {
    name: string;
    description: string;
    prompt: string;
    model?: ModelSelection | string;
}
export interface V1CreateAgentRequest {
    agentId?: string;
    prompt: V1Prompt;
    model?: ModelSelection;
    name?: string;
    mcpServers?: V1McpServer[];
    customSubagents?: V1CustomSubagent[];
    env?: V1Env;
    envVars?: Record<string, string>;
    runEnvVars?: Record<string, string>;
    metadata?: Record<string, string>;
    agentServeAgent?: string;
    repos?: V1Repository[];
    workOnCurrentBranch?: boolean;
    autoCreatePR?: boolean;
    openAsCursorGithubApp?: boolean;
    skipReviewerRequest?: boolean;
    mode?: "agent" | "plan";
}
export interface V1CreateRunRequest {
    prompt: V1Prompt;
    mcpServers?: V1McpServer[];
    model?: ModelSelection;
    envVars?: Record<string, string>;
    mode?: "agent" | "plan";
}
export interface V1Agent {
    id: string;
    name?: string;
    status: "ACTIVE" | "IDLE" | "ARCHIVED";
    env?: V1Env;
    repos?: Array<{
        url: string;
        startingRef?: string;
        prUrl?: string;
    }>;
    workOnCurrentBranch?: boolean;
    autoCreatePR?: boolean;
    openAsCursorGithubApp?: boolean;
    skipReviewerRequest?: boolean;
    customSubagents?: V1CustomSubagent[];
    metadata?: Record<string, string>;
    url: string;
    createdAt: string;
    updatedAt: string;
    latestRunId?: string;
}
export interface V1Run {
    id: string;
    agentId: string;
    requestId?: string;
    status: "CREATING" | "RUNNING" | "FINISHED" | "ERROR" | "CANCELLED" | "EXPIRED";
    createdAt: string;
    updatedAt: string;
    durationMs?: number;
    result?: string;
    error?: unknown;
    git?: {
        branches: Array<{
            repoUrl: string;
            branch?: string;
            prUrl?: string;
        }>;
    };
}
export interface V1Artifact {
    path: string;
    sizeBytes: number;
    updatedAt: string;
}
export interface V1UsageTokenUsage {
    inputTokens: number;
    outputTokens: number;
    cacheWriteTokens: number;
    cacheReadTokens: number;
    totalTokens: number;
}
export interface V1UsageCost {
    rawCostCents: number;
    chargedCents: number;
}
export interface V1RunUsage {
    id: string;
    usageUuid?: string;
    usage: V1UsageTokenUsage;
    cost?: V1UsageCost;
}
export interface V1AgentUsageResponse {
    totalUsage: V1UsageTokenUsage;
    /** Optional so responses from backends that predate cost still parse. */
    cost?: V1UsageCost;
    runs: V1RunUsage[];
}
export declare function mapV1AgentUsageToSdk(response: V1AgentUsageResponse): AgentUsage;
export interface V1MeResponse {
    apiKeyName: string;
    /**
     * Numeric Cursor user id of the API key's owner. Absent for team /
     * service-account API keys, which aren't owned by a specific user.
     */
    userId?: number;
    userEmail?: string;
    userFirstName?: string;
    userLastName?: string;
    createdAt: string;
}
export interface V1GitHubRepository {
    url: string;
}
export interface V1ListResult<T> {
    items: T[];
    nextCursor?: string;
}
export interface V1RunPathParams {
    agentId: string;
    runId: string;
}
export declare function mapV1RunResultMetadataToSdk(run: unknown): RunResultMetadata;
export declare class CloudApiClient {
    private readonly baseUrl;
    private readonly apiKey;
    private readonly teamId;
    private readonly isLocalhost;
    private readonly useLocalNonVm;
    constructor(apiKey: string, baseUrl?: string, teamId?: number);
    private headers;
    private request;
    private throwApiError;
    createAgent(req: V1CreateAgentRequest, options?: {
        idempotencyKey?: string;
    }): Promise<{
        agent: V1Agent & {
            latestRunId: string;
        };
        run: V1Run;
    }>;
    /**
     * Adopt the agent behind an `agent_id_conflict`: GET the agent and its
     * latest run so the caller can continue as if its create had succeeded.
     * Only recovers when this principal can read the agent and the ids match
     * the request — otherwise the original conflict is preserved.
     *
     * Only safe for a caller that knows its own earlier create for this id
     * reached the server; adopting an agent minted by someone else would run
     * this caller's work on an unrelated conversation. {@link CloudAgent} owns
     * that decision, which is why `createAgent` does not call this itself.
     */
    recoverCreatedAgent(requestedAgentId: string, createError: ConfigurationError): Promise<{
        agent: V1Agent & {
            latestRunId: string;
        };
        run: V1Run;
    }>;
    getAgent(agentId: string): Promise<V1Agent>;
    listAgents(params?: {
        limit?: number;
        cursor?: string;
        prUrl?: string;
        includeArchived?: boolean;
    }): Promise<V1ListResult<V1Agent>>;
    archiveAgent(agentId: string): Promise<{
        id: string;
    }>;
    unarchiveAgent(agentId: string): Promise<{
        id: string;
    }>;
    deleteAgent(agentId: string): Promise<{
        id: string;
    }>;
    createRun(agentId: string, req: V1CreateRunRequest, options?: {
        idempotencyKey?: string;
    }): Promise<{
        run: V1Run;
    }>;
    listRuns(agentId: string, params?: {
        limit?: number;
        cursor?: string;
    }): Promise<V1ListResult<V1Run>>;
    getRun({ agentId, runId }: V1RunPathParams): Promise<V1Run>;
    cancelRun({ agentId, runId }: V1RunPathParams): Promise<{
        id: string;
    }>;
    streamRun({ agentId, runId, lastEventId, signal, }: V1RunPathParams & {
        lastEventId?: string;
        signal?: AbortSignal;
    }): Promise<Response>;
    listArtifacts(agentId: string): Promise<{
        items: V1Artifact[];
    }>;
    getArtifactDownloadUrl({ agentId, path, }: {
        agentId: string;
        path: string;
    }): Promise<{
        url: string;
        expiresAt: string;
    }>;
    getAgentUsage(agentId: string, params?: {
        runId?: string;
    }): Promise<V1AgentUsageResponse>;
    getMe(): Promise<V1MeResponse>;
    listModels(): Promise<{
        items: ModelListItem[];
    }>;
    listRepositories(): Promise<{
        items: V1GitHubRepository[];
    }>;
}
export {};
