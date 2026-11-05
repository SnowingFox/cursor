// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/types/conversation-types.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: types/conversation-types.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.945Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import * as z from "zod/v3";
import { ToolCallSchema } from "./tool-call-types.js";
export declare const AssistantMessageSchema: z.ZodObject<{
    text: z.ZodString;
}, "strip">;
export declare const ThinkingMessageSchema: z.ZodObject<{
    text: z.ZodString;
    thinkingDurationMs: z.ZodOptional<z.ZodNumber>;
}, "strip">;
export declare const UserMessageSchema: z.ZodObject<{
    text: z.ZodString;
}, "strip">;
export declare const ShellCommandSchema: z.ZodObject<{
    command: z.ZodString;
    workingDirectory: z.ZodOptional<z.ZodString>;
}, "strip">;
export declare const ShellOutputSchema: z.ZodObject<{
    stdout: z.ZodString;
    stderr: z.ZodString;
    exitCode: z.ZodNumber;
}, "strip">;
export declare const ConversationStepSchema: z.ZodDiscriminatedUnion<"type", [
    z.ZodObject<{
        type: z.ZodLiteral<"assistantMessage">;
        message: typeof AssistantMessageSchema;
    }, "strip">,
    z.ZodObject<{
        type: z.ZodLiteral<"toolCall">;
        message: typeof ToolCallSchema;
    }, "strip">,
    z.ZodObject<{
        type: z.ZodLiteral<"thinkingMessage">;
        message: typeof ThinkingMessageSchema;
    }, "strip">
]>;
export declare const AgentConversationTurnSchema: z.ZodObject<{
    userMessage: z.ZodOptional<typeof UserMessageSchema>;
    steps: z.ZodArray<typeof ConversationStepSchema>;
}, "strip">;
export declare const ShellConversationTurnSchema: z.ZodObject<{
    shellCommand: z.ZodOptional<typeof ShellCommandSchema>;
    shellOutput: z.ZodOptional<typeof ShellOutputSchema>;
}, "strip">;
export declare const ConversationTurnSchema: z.ZodDiscriminatedUnion<"type", [
    z.ZodObject<{
        type: z.ZodLiteral<"agentConversationTurn">;
        turn: typeof AgentConversationTurnSchema;
    }, "strip">,
    z.ZodObject<{
        type: z.ZodLiteral<"shellConversationTurn">;
        turn: typeof ShellConversationTurnSchema;
    }, "strip">
]>;
export type AssistantMessage = z.infer<typeof AssistantMessageSchema>;
export type ThinkingMessage = z.infer<typeof ThinkingMessageSchema>;
export type UserMessage = z.infer<typeof UserMessageSchema>;
export type ShellCommand = z.infer<typeof ShellCommandSchema>;
export type ShellOutput = z.infer<typeof ShellOutputSchema>;
export type ConversationStep = z.infer<typeof ConversationStepSchema>;
export type AgentConversationTurn = z.infer<typeof AgentConversationTurnSchema>;
export type ShellConversationTurn = z.infer<typeof ShellConversationTurnSchema>;
export type ConversationTurn = z.infer<typeof ConversationTurnSchema>;
