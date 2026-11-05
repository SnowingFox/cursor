// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/vendor/cursor-sdk-shared/message-schemas.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: vendor/cursor-sdk-shared/message-schemas.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.993Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import * as z from "zod/v3";
export declare const ImageSchema: z.ZodObject<{
    type: z.ZodLiteral<"base64">;
    data: z.ZodString;
}, "strict">;
export declare const UserMessageSchema: z.ZodObject<{
    type: z.ZodLiteral<"user_message">;
    session_id: z.ZodString;
    text: z.ZodString;
    images: z.ZodOptional<z.ZodArray<typeof ImageSchema>>;
}, "strict">;
export declare const AssistantMessageSchema: z.ZodObject<{
    type: z.ZodLiteral<"assistant_message">;
    session_id: z.ZodString;
    text: z.ZodString;
}, "strict">;
export declare const MessageSchema: z.ZodUnion<[typeof UserMessageSchema, typeof AssistantMessageSchema]>;
export type Image = z.infer<typeof ImageSchema>;
export type UserMessage = z.infer<typeof UserMessageSchema>;
export type AssistantMessage = z.infer<typeof AssistantMessageSchema>;
export type Message = z.infer<typeof MessageSchema>;
export declare function isUserMessage(value: unknown): value is UserMessage;
export declare function isAssistantMessage(value: unknown): value is AssistantMessage;
export declare function isMessage(value: unknown): value is Message;
