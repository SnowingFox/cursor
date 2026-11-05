// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/sdk-statsig.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: sdk-statsig.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.988Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
type FeatureGateCheckOptions = {
    disableExposureLog?: boolean;
};
export interface SdkStatsigClient {
    checkFeatureGate(gateName: string, options?: FeatureGateCheckOptions): boolean;
    getDynamicConfigValue<T>(params: {
        configName: string;
        paramName: string;
        defaultValue: T;
    }): T;
}
export declare function bootstrapSdkStatsig(apiKey: string): Promise<SdkStatsigClient>;
/**
 * Reads `grok_bot_mcp_app_payment_token_filter` without logging an exposure.
 * Off until the bootstrap resolves, since a log write can't wait for it. An
 * MCP server's loader runs the blocking middleware first, whose team settings
 * read awaits this same bootstrap, so the gate has resolved by that server's
 * first log write.
 */
export declare function linkSharedPaymentTokenLogRedactionGate(statsig: Promise<SdkStatsigClient> | undefined): () => boolean;
export {};
