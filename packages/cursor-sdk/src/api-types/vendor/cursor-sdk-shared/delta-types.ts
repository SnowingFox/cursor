// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/vendor/cursor-sdk-shared/delta-types.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: vendor/cursor-sdk-shared/delta-types.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.994Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import * as z from "zod/v3";
import { UserMessageSchema } from "./message-schemas.js";
import { ToolCallSchema } from "./tool-call-types.js";
export declare const TextDeltaUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"text-delta">;
    text: z.ZodString;
}, "strip">;
export declare const ToolCallStartedUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"tool-call-started">;
    callId: z.ZodString;
    toolCall: typeof ToolCallSchema;
    modelCallId: z.ZodString;
}, "strip">;
export declare const ToolCallCompletedUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"tool-call-completed">;
    callId: z.ZodString;
    toolCall: typeof ToolCallSchema;
    modelCallId: z.ZodString;
}, "strip">;
export declare const ThinkingDeltaUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"thinking-delta">;
    text: z.ZodString;
}, "strip">;
export declare const ThinkingCompletedUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"thinking-completed">;
    thinkingDurationMs: z.ZodNumber;
}, "strip">;
export declare const UserMessageAppendedUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"user-message-appended">;
    userMessage: typeof UserMessageSchema;
}, "strip">;
export declare const PartialToolCallUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"partial-tool-call">;
    callId: z.ZodString;
    toolCall: typeof ToolCallSchema;
    modelCallId: z.ZodString;
}, "strip">;
export declare const TokenDeltaUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"token-delta">;
    tokens: z.ZodNumber;
}, "strip">;
export declare const SummaryUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"summary">;
    summary: z.ZodString;
}, "strip">;
export declare const SummaryStartedUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"summary-started">;
}, "strip">;
export declare const SummaryCompletedUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"summary-completed">;
    failed: z.ZodOptional<z.ZodBoolean>;
    fallback: z.ZodOptional<z.ZodBoolean>;
}, "strip">;
export declare const ShellOutputDeltaUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"shell-output-delta">;
    event: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, "strip">;
export declare const TurnEndedUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"turn-ended">;
    usage: z.ZodOptional<z.ZodObject<{
        inputTokens: z.ZodNumber;
        outputTokens: z.ZodNumber;
        cacheReadTokens: z.ZodNumber;
        cacheWriteTokens: z.ZodNumber;
        reasoningTokens: z.ZodOptional<z.ZodNumber>;
    }, "strip">>;
}, "strip">;
export declare const StepStartedUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"step-started">;
    stepId: z.ZodNumber;
}, "strip">;
export declare const ToolRequestsListedUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"tool-requests-listed">;
    callCount: z.ZodNumber;
}, "strip">;
export declare const StepCompletedUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"step-completed">;
    stepId: z.ZodNumber;
    stepDurationMs: z.ZodNumber;
}, "strip">;
/**
 * Nested interaction updates streamed from a task/subagent tool call.
 * One level only — deeper `tool-call-delta` nesting is dropped at convert time.
 * Shell/edit tool-call deltas are not exposed on the public SDK surface yet.
 */
export declare const NestedTaskUpdateSchema: z.ZodDiscriminatedUnion<"type", [
    typeof TextDeltaUpdateSchema,
    typeof ToolCallStartedUpdateSchema,
    typeof ToolCallCompletedUpdateSchema,
    typeof ThinkingDeltaUpdateSchema,
    typeof ThinkingCompletedUpdateSchema,
    typeof PartialToolCallUpdateSchema,
    typeof StepStartedUpdateSchema,
    typeof StepCompletedUpdateSchema,
    typeof ToolRequestsListedUpdateSchema
]>;
export declare const ToolCallDeltaUpdateSchema: z.ZodObject<{
    type: z.ZodLiteral<"tool-call-delta">;
    callId: z.ZodString;
    modelCallId: z.ZodString;
    taskUpdate: typeof NestedTaskUpdateSchema;
}, "strip">;
export declare const InteractionUpdateSchema: z.ZodDiscriminatedUnion<"type", [
    typeof TextDeltaUpdateSchema,
    typeof ToolCallStartedUpdateSchema,
    typeof ToolCallCompletedUpdateSchema,
    typeof ThinkingDeltaUpdateSchema,
    typeof ThinkingCompletedUpdateSchema,
    typeof UserMessageAppendedUpdateSchema,
    typeof PartialToolCallUpdateSchema,
    typeof TokenDeltaUpdateSchema,
    typeof SummaryUpdateSchema,
    typeof SummaryStartedUpdateSchema,
    typeof SummaryCompletedUpdateSchema,
    typeof ShellOutputDeltaUpdateSchema,
    typeof TurnEndedUpdateSchema,
    typeof StepStartedUpdateSchema,
    typeof StepCompletedUpdateSchema,
    typeof ToolRequestsListedUpdateSchema,
    typeof ToolCallDeltaUpdateSchema
]>;
export type TextDeltaUpdate = z.infer<typeof TextDeltaUpdateSchema>;
export type ToolCallStartedUpdate = z.infer<typeof ToolCallStartedUpdateSchema>;
export type ToolCallCompletedUpdate = z.infer<typeof ToolCallCompletedUpdateSchema>;
export type ThinkingDeltaUpdate = z.infer<typeof ThinkingDeltaUpdateSchema>;
export type ThinkingCompletedUpdate = z.infer<typeof ThinkingCompletedUpdateSchema>;
export type UserMessageAppendedUpdate = z.infer<typeof UserMessageAppendedUpdateSchema>;
export type PartialToolCallUpdate = z.infer<typeof PartialToolCallUpdateSchema>;
export type TokenDeltaUpdate = z.infer<typeof TokenDeltaUpdateSchema>;
export type SummaryUpdate = z.infer<typeof SummaryUpdateSchema>;
export type SummaryStartedUpdate = z.infer<typeof SummaryStartedUpdateSchema>;
export type SummaryCompletedUpdate = z.infer<typeof SummaryCompletedUpdateSchema>;
export type ShellOutputDeltaUpdate = z.infer<typeof ShellOutputDeltaUpdateSchema>;
export type TurnEndedUpdate = z.infer<typeof TurnEndedUpdateSchema>;
export type StepStartedUpdate = z.infer<typeof StepStartedUpdateSchema>;
export type StepCompletedUpdate = z.infer<typeof StepCompletedUpdateSchema>;
export type ToolRequestsListedUpdate = z.infer<typeof ToolRequestsListedUpdateSchema>;
export type NestedTaskUpdate = z.infer<typeof NestedTaskUpdateSchema>;
export type ToolCallDeltaUpdate = z.infer<typeof ToolCallDeltaUpdateSchema>;
export type InteractionUpdate = z.infer<typeof InteractionUpdateSchema>;
export interface InteractionListener {
    sendUpdate(update: InteractionUpdate): Promise<void>;
}
