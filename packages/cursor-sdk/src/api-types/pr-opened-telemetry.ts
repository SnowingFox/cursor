// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/pr-opened-telemetry.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: pr-opened-telemetry.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.946Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { SdkRuntime } from "@anysphere/analytics-types/sdk";
export interface MaybeEmitSdkPrOpenedArgs {
    apiKey: string | undefined;
    agentId: string;
    runId: string;
    requestId?: string;
    runtime: SdkRuntime;
    /** Workspace roots to probe (multi-root workspaces may have more than one). */
    cwds: string[];
}
/**
 * Best-effort: detect the open PR(s) for the current branch across GitHub and
 * Origin in each workspace root and emit `sdk.request.pr_opened` linking each to
 * the SDK session. Deduped per (agent, PR).
 */
export declare function maybeEmitSdkPrOpened(args: MaybeEmitSdkPrOpenedArgs): Promise<void>;
