// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/utils/logger.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: utils/logger.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.957Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/**
 * Internal logging utility for the cursor-sdk agent package.
 * Logs are only output in local development builds when DEBUG=1 is set.
 */
export declare const logger: {
    log: (...args: any[]) => void;
    error: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    info: (...args: any[]) => void;
    debug: (...args: any[]) => void;
};
