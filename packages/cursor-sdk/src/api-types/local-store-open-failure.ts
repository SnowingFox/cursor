// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/local-store-open-failure.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: local-store-open-failure.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.979Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
export interface RecoveredLocalStoreRun {
    result: string;
    warning: string;
}
/**
 * When a local-store open failure rejects a turn that already produced its
 * result text, the run finishes with that text. Other failures, and an open
 * failure before any text exists, stay errors.
 */
export declare function recoveredResultForLocalStoreOpenFailure(error: unknown, resultText: string | undefined): RecoveredLocalStoreRun | undefined;
