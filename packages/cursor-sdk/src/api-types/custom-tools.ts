// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/custom-tools.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: custom-tools.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.983Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import { type McpExecutor, type NamedMcpToolDefinition } from "@anysphere/agent-exec";
import type { SDKCustomTool } from "./options.js";
/**
 * Convert SDK-provided custom tools into MCP tool definitions for a synthetic
 * "custom-user-tools" server. The model discovers and invokes them through the
 * same MCP meta-tool path as other servers (GetMcpTools / CallMcpTool). The
 * map key is the tool name. The `name` field is the MCP wire identifier sent on
 * AgentRunRequest; the model calls tools via GetMcpTools/CallMcpTool using
 * server `custom-user-tools` and the bare `toolName`.
 */
export declare function createCustomUserToolDefinitions(customTools: Record<string, SDKCustomTool> | undefined): NamedMcpToolDefinition[];
export declare function hasCustomTools(customTools: Record<string, SDKCustomTool> | undefined): customTools is Record<string, SDKCustomTool>;
/**
 * True when an MCP invocation targets the synthetic SDK custom-tools server.
 * Uses providerIdentifier only; wire names like `custom-user-tools-*` on other
 * servers must still route through the lease-backed executor.
 */
export declare function isSdkCustomUserToolsMcpCall(args: {
    providerIdentifier: string;
    name: string;
}): boolean;
/**
 * Build the client-side MCP executor that handles calls to the synthetic
 * "custom-user-tools" server by invoking the user's in-process callbacks. The
 * agent loop (on the backend) calls `mcpExecutorResource.execute`, which
 * round-trips to this implementation registered on the local runtime.
 */
export declare function createSdkCustomToolMcpExecutor(customTools: Record<string, SDKCustomTool>, sessionId?: string): McpExecutor;
