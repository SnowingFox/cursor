// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/messages.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: messages.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.953Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { ModelSelection } from "./options.js";
import type { RunResultStatus } from "./run.js";
import type { SummaryCompletedUpdate, SummaryStartedUpdate } from "./types/delta-types.js";
import { type TokenUsage } from "./usage-types.js";
export declare const LOCAL_RUN_STREAM_SCHEMA_VERSION = 1;
export declare const LOCAL_RUN_STREAM_EVENT_TYPE = "run_stream_event";
export interface TextBlock {
    type: "text";
    text: string;
}
export interface ToolUseBlock {
    type: "tool_use";
    id: string;
    name: string;
    input: unknown;
}
export interface SDKSystemMessage {
    type: "system";
    subtype?: "init";
    agent_id: string;
    run_id: string;
    model?: ModelSelection;
    tools?: string[];
}
export interface SDKAssistantMessage {
    type: "assistant";
    agent_id: string;
    run_id: string;
    message: {
        role: "assistant";
        content: Array<TextBlock | ToolUseBlock>;
    };
}
export interface SDKUserMessageEvent {
    type: "user";
    agent_id: string;
    run_id: string;
    message: {
        role: "user";
        content: TextBlock[];
    };
}
export interface SDKToolUseMessage {
    type: "tool_call";
    agent_id: string;
    run_id: string;
    call_id: string;
    name: string;
    status: "running" | "completed" | "error";
    args?: unknown;
    result?: unknown;
    truncated?: {
        args?: boolean;
        result?: boolean;
    };
}
export interface SDKThinkingMessage {
    type: "thinking";
    agent_id: string;
    run_id: string;
    text: string;
    thinking_duration_ms?: number;
}
export interface SDKStatusMessage {
    type: "status";
    agent_id: string;
    run_id: string;
    status: "CREATING" | "RUNNING" | "FINISHED" | "ERROR" | "CANCELLED" | "EXPIRED";
    message?: string;
}
export interface SDKRequestMessage {
    type: "request";
    agent_id: string;
    run_id: string;
    request_id: string;
}
export interface SDKTaskMessage {
    type: "task";
    agent_id: string;
    run_id: string;
    status?: string;
    text?: string;
}
/** Conversation summarization (context compaction), from `agent.summarize()` or automatic compaction. */
export interface SDKSummaryMessage {
    type: "summary";
    agent_id: string;
    run_id: string;
    /** Status of the summarization, not the run. `"error"` leaves the conversation unchanged. */
    status: "running" | "completed" | "error";
    /** The model couldn't write the summary, so a trimmed copy of the transcript was saved instead. */
    fallback?: boolean;
}
export declare function summaryUpdateToSdkMessage(update: SummaryStartedUpdate | SummaryCompletedUpdate, agentId: string, runId: string): SDKSummaryMessage;
/** Per-turn token usage, emitted once at turn end when the runtime reported usage. */
export interface SDKUsageMessage {
    type: "usage";
    agent_id: string;
    run_id: string;
    usage: TokenUsage;
}
export type SDKMessage = SDKSystemMessage | SDKUserMessageEvent | SDKAssistantMessage | SDKToolUseMessage | SDKThinkingMessage | SDKStatusMessage | SDKRequestMessage | SDKTaskMessage | SDKSummaryMessage | SDKUsageMessage;
export interface LocalRunStreamSdkMessageEvent {
    schemaVersion: typeof LOCAL_RUN_STREAM_SCHEMA_VERSION;
    type: "sdk_message";
    agentId: string;
    runId: string;
    message: SDKMessage;
}
export interface LocalRunStreamResultEvent {
    schemaVersion: typeof LOCAL_RUN_STREAM_SCHEMA_VERSION;
    type: "result";
    agentId: string;
    runId: string;
    status: RunResultStatus;
    errorCode?: string;
}
export interface LocalRunStreamDoneEvent {
    schemaVersion: typeof LOCAL_RUN_STREAM_SCHEMA_VERSION;
    type: "done";
    agentId: string;
    runId: string;
}
export type LocalRunStreamEvent = LocalRunStreamSdkMessageEvent | LocalRunStreamResultEvent | LocalRunStreamDoneEvent;
export declare function createSdkMessageRunStreamEvent(message: SDKMessage): LocalRunStreamSdkMessageEvent;
export declare function decodeLocalRunStreamEvent(payload: unknown): LocalRunStreamEvent;
export declare function localRunStreamEventToSdkMessage(event: LocalRunStreamEvent): SDKMessage | undefined;
export declare function decodeSdkMessageRunStreamEvent(payload: unknown): SDKMessage;
export declare function isTerminalLocalRunStreamEvent(event: LocalRunStreamEvent): boolean;
