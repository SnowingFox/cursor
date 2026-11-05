// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/local-executor.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: local-executor.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.943Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import { type RuntimeCustomSubagentDefinition } from "./run-store-public-types.js";
import type { RunExecutor } from "./executor-types.js";
import type { McpServerConfig, SandboxOptions, SettingSource } from "./options.js";
export interface LocalExecutorHandle {
    run: RunExecutor;
    reload(): Promise<void>;
    dispose(): Promise<void>;
}
export interface CreateLocalExecutorOptions {
    readonly workingDirectory?: string;
    /**
     * Additional workspace roots for multi-root local agents. When set (length
     * > 1), forwarded to the local workspace runtime so project settings and
     * request-context env cover every root. The primary root remains
     * {@link workingDirectory}.
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
export declare function createLocalExecutor(optionsOrWorkingDirectory?: CreateLocalExecutorOptions | string, apiKey?: string): Promise<LocalExecutorHandle>;
