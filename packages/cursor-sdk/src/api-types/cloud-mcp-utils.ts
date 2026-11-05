// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/cloud-mcp-utils.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: cloud-mcp-utils.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.946Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { V1CreateAgentRequest } from "./cloud-api-client.js";
import type { AgentOptions } from "./options.js";
export declare function buildV1McpServers(mcpServers: AgentOptions["mcpServers"]): V1CreateAgentRequest["mcpServers"];
