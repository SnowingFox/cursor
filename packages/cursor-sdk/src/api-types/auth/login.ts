// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/auth/login.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: auth/login.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.951Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import { type SdkCredentialStore } from "./credential-store.js";
/** Default lifetime of the API key minted by a login: 90 days. */
export declare const DEFAULT_LOGIN_API_KEY_TTL_MS: number;
export interface SdkLoginOptions {
    /**
     * API base URL serving `/auth/poll` and the Connect RPCs. Defaults to
     * `CURSOR_BACKEND_URL` then production. The minted key only works against
     * this backend.
     */
    backendUrl?: string;
    /**
     * Website base URL hosting the browser login page. Defaults to
     * `CURSOR_WEBSITE_URL` then production.
     */
    websiteUrl?: string;
    /**
     * How to get the login URL in front of the user:
     * - `true` (default): open the system browser when that is likely to work
     *   (skipped in SSH sessions or when `NO_OPEN_BROWSER` is set).
     * - `false`: never open a browser; the host surfaces the URL itself via
     *   {@link onLoginUrl}.
     * - a function: custom opener (e.g. an Electron shell or a QR renderer).
     */
    openBrowser?: boolean | ((url: string) => void | Promise<void>);
    /**
     * Always invoked with the login URL before waiting, so hosts can display it.
     * When this is omitted and no browser was opened, the URL is written to
     * stderr so the login stays completable.
     */
    onLoginUrl?: (url: string) => void;
    /** Aborts the poll; `login` resolves by throwing an AuthenticationError. */
    signal?: AbortSignal;
    /**
     * Where to persist the resulting credentials. Defaults to the on-disk
     * {@link FileCredentialStore} (`~/.cursor/sdk/auth.json`). Pass `null` to
     * skip persistence entirely and only receive the key in the result.
     */
    store?: SdkCredentialStore | null;
    /** Display name of the minted key in the dashboard's API-keys list. */
    apiKeyName?: string;
    /**
     * Lifetime of the minted key in ms, from now.
     * Defaults to {@link DEFAULT_LOGIN_API_KEY_TTL_MS} (90 days).
     */
    apiKeyTtlMs?: number;
}
export interface SdkLoginResult {
    /** The minted user API key. Also persisted unless `store: null`. */
    apiKey: string;
    /** Email of the logged-in account, when the identity lookup succeeded. */
    email?: string;
    /** Epoch ms at which the minted key expires. */
    apiKeyExpiresAtMs: number;
}
export type SdkAuthStatus = {
    status: "logged-out";
} | {
    status: "logged-in";
    backendUrl: string;
    email?: string;
    apiKeyExpiresAtMs?: number;
};
export interface SdkAuthStatusOptions {
    store?: SdkCredentialStore;
}
export interface SdkLogoutOptions {
    store?: SdkCredentialStore;
}
/**
 * Interactive end-user login for the SDK.
 *
 * Flow: generate a one-time challenge, send the user's browser to the portal
 * login page, poll until the browser completes, then use the resulting
 * session token once — to mint a named, expiring user API key — and drop it.
 * The API key is persisted (by default to `~/.cursor/sdk/auth.json`) and
 * returned; it is the credential all SDK operations use.
 */
export declare function sdkLogin(options?: SdkLoginOptions): Promise<SdkLoginResult>;
/**
 * Forget the stored login. Local-only: the minted key stays valid until its
 * expiry unless revoked from the dashboard's API-keys page.
 */
export declare function sdkLogout(options?: SdkLogoutOptions): Promise<void>;
/** Report whether a stored, unexpired login exists. Never returns the key. */
export declare function sdkAuthStatus(options?: SdkAuthStatusOptions): Promise<SdkAuthStatus>;
