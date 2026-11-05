// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/cloud-executor.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: cloud-executor.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.984Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import { type CloudApiClient } from "./cloud-api-client.js";
import type { CloudExecutorConfig, RunExecutor } from "./executor-types.js";
import type { InteractionUpdate } from "./types/delta-types.js";
type ToolCallStatus = "running" | "completed" | "error";
export declare function mapV1RunStreamEventToSdkUpdate(raw: unknown): (InteractionUpdate & {
    status?: ToolCallStatus;
}) | null | undefined;
export interface CloudExecutorCallbacks {
    onAgentCreated?: (agentId: string) => void;
    onRunCreated?: (runId: string) => void;
}
export declare function createCloudExecutor(client: CloudApiClient, config: CloudExecutorConfig, callbacks?: CloudExecutorCallbacks): Promise<RunExecutor>;
export {};
