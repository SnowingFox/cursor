// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/analytics-agent-name.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: analytics-agent-name.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.983Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/**
 * Caller-supplied agent name for analytics. Empty or whitespace-only names
 * are omitted so we only record a name the caller actually set.
 */
export declare function sdkAgentNameForAnalytics(name: string | undefined | null): string | undefined;
