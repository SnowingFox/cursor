// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/subagent-conversion.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: subagent-conversion.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.978Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { V1CustomSubagent } from "./cloud-api-client.js";
import type { AgentDefinition, ModelSelection } from "./options.js";
import type { RuntimeCustomSubagentDefinition } from "./run-store-public-types.js";
export interface SDKCustomSubagentDefinition {
    name: string;
    description: string;
    prompt: string;
    model: ModelSelection | "inherit";
}
/**
 * Convert SDK `AgentOptions.agents` to a plain, serializable custom subagent
 * shape. Inline `McpServerConfig` entries on a subagent are rejected; SDK
 * custom subagents inherit the parent agent's MCP config.
 */
export declare function convertAgentDefinitionsToCustomSubagents(agents: Record<string, AgentDefinition> | undefined): SDKCustomSubagentDefinition[] | undefined;
/**
 * Convert SDK `AgentOptions.agents` to the `V1CustomSubagent[]` shape the
 * cloud API expects.
 */
export declare function convertAgentDefinitionsToV1CustomSubagents(agents: Record<string, AgentDefinition> | undefined): V1CustomSubagent[] | undefined;
export declare function convertAgentDefinitionsToRuntimeCustomSubagents(agents: Record<string, AgentDefinition> | undefined): RuntimeCustomSubagentDefinition[] | undefined;
