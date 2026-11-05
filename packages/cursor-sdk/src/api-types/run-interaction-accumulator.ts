// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/run-interaction-accumulator.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: run-interaction-accumulator.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.974Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { SDKMessage } from "./messages.js";
import type { ConversationStep, ConversationTurn } from "./types/conversation-types.js";
import type { InteractionUpdate } from "./types/delta-types.js";
import { type TokenUsage } from "./usage-types.js";
export interface RunInteractionAccumulatorOptions {
    onStep?: (args: {
        step: ConversationStep;
    }) => void | Promise<void>;
    onDelta?: (args: {
        update: InteractionUpdate;
    }) => void | Promise<void>;
}
export declare class RunInteractionAccumulator {
    private readonly options;
    private readonly turns;
    private currentTurn;
    private lastFiredStepIndex;
    private readonly turnUsages;
    constructor(options?: RunInteractionAccumulatorOptions);
    conversation(): ConversationTurn[];
    /** Cumulative usage across turns that reported it; `undefined` when none did. */
    usage(): TokenUsage | undefined;
    finalAssistantText(): string | undefined;
    apply(update: InteractionUpdate): Promise<void>;
    flushPendingStep(): Promise<void>;
    private ensureCurrentTurn;
    private mergeIntoConversation;
    private onUserMessage;
    private onTextDelta;
    private onThinkingDelta;
    private onThinkingCompleted;
    private onTool;
    private didPreviousStepComplete;
}
export declare function accumulateSdkMessageStream(stream: AsyncIterable<SDKMessage>): Promise<ConversationTurn[]>;
export declare function sdkMessageToInteractionUpdate(message: SDKMessage): InteractionUpdate | undefined;
