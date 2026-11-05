// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/analytics-prompt-hash.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: analytics-prompt-hash.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.991Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/**
 * SHA-256 hex of the exact prompt string that drives `prompt_length`.
 * Empty or missing prompts are omitted so we never emit the well-known
 * empty-string digest.
 */
export declare function sdkPromptHashForAnalytics(prompt: string | undefined | null): string | undefined;
