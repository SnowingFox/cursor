// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/analytics.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: analytics.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.948Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import { type TokenProvider } from "@anysphere/analytics-client";
import type { SdkAnalyticsBaseProps, SdkAnalyticsEventSchema, SdkExecutorStartupProps, SdkOperationFailedProps, SdkRequestPrOpenedProps, SdkRunCompletedProps, SdkRunCreatedProps, SdkRunSendLatencyProps, SdkRuntime } from "@anysphere/analytics-types/sdk";
import { type CursorSdkError } from "./errors.js";
/**
 * Drains buffered SDK analytics events for every apiKey that has emitted
 * anything in this process. Called from `agent[Symbol.asyncDispose]()`.
 *
 * `timeoutMs` bounds the wait; if the RPC hangs, flush aborts via the
 * internal AbortController and returns. Never throws.
 */
export declare function flushSdkAnalytics(timeoutMs?: number): Promise<void>;
export declare function __resetAnalyticsForTests(): void;
export declare function trackSdkRunCreated(apiKey: string | undefined, props: SdkRunCreatedProps): void;
export declare function trackSdkRunCompleted(apiKey: string | undefined, props: SdkRunCompletedProps): void;
export declare function trackSdkOperationFailed({ apiKey, operation, runtime, error, }: {
    apiKey: string | undefined;
    operation: SdkOperationFailedProps["operation"];
    runtime: SdkRuntime;
    error: CursorSdkError;
}): void;
export declare function trackSdkRunSendLatency(apiKey: string | undefined, props: SdkRunSendLatencyProps): void;
export declare function trackSdkExecutorStartup(apiKey: string | undefined, props: SdkExecutorStartupProps): void;
export declare function trackSdkRequestPrOpened(apiKey: string | undefined, props: SdkRequestPrOpenedProps): void;
export type { SdkAnalyticsBaseProps, SdkAnalyticsEventSchema, SdkExecutorStartupProps, SdkRequestPrOpenedProps, SdkRunCompletedProps, SdkRunCreatedProps, SdkRunSendLatencyProps, SdkRuntime, TokenProvider, };
