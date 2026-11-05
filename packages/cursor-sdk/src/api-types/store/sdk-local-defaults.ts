// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/store/sdk-local-defaults.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: store/sdk-local-defaults.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.998Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { LocalAgentStore } from "./local-agent-store.js";
export interface SdkLocalDefaultsSource {
    readonly local?: {
        readonly store?: LocalAgentStore;
    };
    readonly store?: LocalAgentStore;
}
/**
 * Module-level default `LocalAgentStore` for static `Agent.*` local routes.
 * Per-call `store` / `local.store` overrides this value.
 */
export declare function resolveLocalAgentStore(options?: SdkLocalDefaultsSource): LocalAgentStore | undefined;
export declare function setDefaultLocalAgentStore(store: LocalAgentStore | undefined): void;
export declare function __clearDefaultLocalAgentStoreForTests(): void;
