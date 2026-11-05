// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/auth/login-flow.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: auth/login-flow.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.950Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/**
 * Browser-login handshake primitives for the SDK.
 *
 * This is the same PKCE-style flow the Cursor CLI uses (see
 * `@anysphere/cursor-config`'s `LoginManager`): generate a random `verifier`,
 * derive a `challenge` = base64url(sha256(verifier)), and send the user's
 * browser to the portal's `/loginDeepControl` page with the challenge and a
 * one-time `uuid`. The browser session completes the login and posts the
 * challenge back to the backend; meanwhile the SDK polls `/auth/poll` with the
 * `verifier` until the backend releases the session tokens. Only the process
 * that generated the verifier can redeem the login.
 *
 * Reimplemented here (rather than importing `@anysphere/cursor-config`)
 * because the public SDK bundle must stay free of that package's heavy
 * dependency tree; the flow itself is ~100 lines against stable endpoints.
 */
/** Session tokens released by the backend once the browser login completes. */
export interface SdkLoginTokens {
    accessToken: string;
    refreshToken: string;
}
export interface LoginHandshake {
    /** One-time login id, shared between the browser page and the poll. */
    uuid: string;
    /** Secret proving this process initiated the login. Never leaves the host except via `/auth/poll`. */
    verifier: string;
    /** Browser URL that completes the login. */
    loginUrl: string;
}
export declare function stripTrailingSlashes(url: string): string;
/** Portal (website) base URL hosting the browser login page. */
export declare function resolveWebsiteUrl(url?: string): string;
/** API base URL serving `/auth/poll` and the Connect RPCs. */
export declare function resolveApiBaseUrl(url?: string): string;
/**
 * Generate the login handshake. `redirectTarget=sdk` attributes the login to
 * the SDK on the portal's confirmation and success pages.
 */
export declare function createLoginHandshake(websiteUrl: string): LoginHandshake;
export interface PollLoginOptions {
    apiUrl: string;
    uuid: string;
    verifier: string;
    signal?: AbortSignal;
    /** Notified once if the backend forces the GET fallback. */
    onWarning?: (message: string) => void;
    /** Test seams; production callers use the defaults. */
    maxAttempts?: number;
    baseDelayMs?: number;
    maxDelayMs?: number;
}
/**
 * Poll `/auth/poll` until the browser completes the login.
 *
 * **POST, with the verifier in the JSON body.** The verifier is redeemable:
 * anyone holding it (plus the uuid) can complete the login and mint a durable
 * user API key, so it must not reach a URL — not the backend's access log, not
 * a proxy's request log, not shell history. `POST /auth/poll` exists for
 * exactly this reason.
 *
 * A backend predating that route answers POST with a route-not-found 404;
 * those get one sticky fallback to `GET /auth/poll?uuid=…&verifier=…` so the
 * login still completes (with a warning, since that is the exposure POST
 * removes) instead of mistaking an unserved verb for a pending login and
 * hanging until the timeout.
 *
 * The backend returns 404 while the login is pending. Returns `null` on
 * abort, timeout (~20 minutes with default settings), or after 3 consecutive
 * non-404 errors.
 */
export declare function pollForLoginTokens(options: PollLoginOptions): Promise<SdkLoginTokens | null>;
