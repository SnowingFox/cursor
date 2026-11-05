// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/sdk-config.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: sdk-config.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.991Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { LocalAgentStore } from "./store/local-agent-store.js";
export interface CursorConfigureOptions {
    /**
     * Defaults for local-agent persistence. Fields on individual `Agent.*`
     * calls override these values.
     */
    local?: {
        /**
         * Default {@link LocalAgentStore} when a call omits `store` / `local.store`.
         * Pass `null` to clear a previous default. When unset, local routes use
         * on-disk SQLite when the optional `sqlite3` module is available; otherwise
         * configure {@link JsonlLocalAgentStore} or another {@link LocalAgentStore}.
         */
        store?: LocalAgentStore | null;
        /**
         * Force local agent backend streams to use HTTP/1.1 with SSE instead of
         * HTTP/2. Pass `null` to clear a previous default.
         */
        useHttp1ForAgent?: boolean | null;
        /**
         * How long a scan of the workspace for rules, skills, `AGENTS.md` and
         * ignore files stays reusable, in milliseconds. Defaults to 20s, which
         * suits an editor whose files change under it; every expiry costs a full
         * re-walk of the tree, which on a large repo is seconds.
         *
         * Raise it in a long-lived host serving a checkout that only changes on
         * deploy. The trade is freshness: a rule or `.cursorignore` added after
         * the process started can go unseen for this long. Pass `null` to clear a
         * previous override; `CURSOR_RIPWALK_CACHE_TTL_MS` sets the same dial from
         * the environment.
         */
        workspaceScanCacheTtlMs?: number | null;
    };
}
export declare function configureCursorSdk(options: CursorConfigureOptions): void;
export declare function getDefaultUseHttp1ForAgent(): boolean | undefined;
export declare function getDefaultWorkspaceScanCacheTtlMs(): number | undefined;
export declare function __clearDefaultNetworkConfigForTests(): void;
