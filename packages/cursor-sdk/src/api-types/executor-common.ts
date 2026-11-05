// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/executor-common.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: executor-common.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.977Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { AgentClient } from "@anysphere/agent-client";
import { PrivacyMode } from "@anysphere/proto/aiserver/v1/privacy_mode_pb.js";
import { Http2Config } from "@anysphere/proto/aiserver/v1/server_config_pb.js";
import { type Transport } from "@connectrpc/connect";
export declare const backendUrl: string;
export declare let ghostModeHeaderValue: string;
export declare const ghostModeHeaderCache: Map<string, string>;
export declare const getGhostModeHeaderFromPrivacyMode: (privacyMode: PrivacyMode | undefined) => string;
export declare function __setServerHttp2ConfigForTests(apiKey: string, http2Config: Http2Config): void;
export declare function __clearServerHttp2ConfigForTests(): void;
export declare function ensureServerHttp2ConfigForApiKey(apiKey?: string): Promise<void>;
export declare function exchangeApiKeyForAccessToken(apiKeyToExchange: string, baseUrl: string, signal?: AbortSignal): Promise<string | undefined>;
export declare function setGhostModeHeaderForApiKey(apiKey: string, headerValue: string): void;
export declare const getCachedGhostModeHeader: (apiKey?: string) => string;
/**
 * Whether repo identity (PR URL, branch) may be attached to analytics for the
 * user behind `apiKey`. Mirrors the CLI/IDE gate (`repoIdentityAllowedInAnalytics`
 * / `privacyModeAllowsGitTelemetryInAnalytics`): allowed for `NO_TRAINING` and
 * the `USAGE_*` modes; suppressed for `UNSPECIFIED`, `NO_STORAGE`, and any
 * unresolved / unknown privacy mode.
 *
 * Resolves the effective key the same way analytics `track()` does (falling back
 * to `CURSOR_API_KEY`) so env-authenticated agents are gated consistently. The
 * privacy mode is re-fetched (bounded, keeping the last confirmed value on a
 * transient failure) when the cache is older than `PRIVACY_MODE_MAX_AGE_MS`, so
 * a consent withdrawal suppresses repo identity on a long-lived process without
 * a restart. Returns `false` on any unknown / unresolved mode (safe default).
 */
export declare function repoIdentityAllowedInAnalytics(apiKey: string | undefined): Promise<boolean>;
export declare function getSdkClientVersionHeader(): string;
export declare function ensureGhostModeHeaderForApiKey(apiKey?: string): Promise<void>;
export declare function buildTransport(apiKey: string, teamId?: number): Transport;
export declare function createRetryingAgentClient(initialClient: AgentClient, refreshClient: () => AgentClient): AgentClient;
export declare function detectImageMimeType(bytes: Uint8Array): string | undefined;
