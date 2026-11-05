// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/auth/credential-store.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: auth/credential-store.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.951Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/**
 * Credentials persisted by `Cursor.auth.login()`.
 *
 * Deliberately holds the minted user API key rather than the login session
 * tokens: the API key is the narrower credential (it can expire, is visible
 * and revocable in the dashboard's API-keys list, and is the only credential
 * the SDK's surfaces accept), while the session token would grant the whole
 * account. The session tokens are dropped as soon as the key is minted.
 */
export interface StoredSdkCredentials {
    version: 1;
    /** API base URL the key was minted against. Keys are backend-paired. */
    backendUrl: string;
    apiKey: string;
    /** Epoch ms; absent when the key never expires. */
    apiKeyExpiresAtMs?: number;
    /** Email of the logged-in user, for `Cursor.auth.status()` display. */
    email?: string;
    createdAtMs: number;
}
/**
 * Pluggable persistence for SDK login credentials. The default is
 * {@link FileCredentialStore}; embedders (e.g. multi-tenant hosts holding one
 * credential per end user) can implement their own.
 */
export interface SdkCredentialStore {
    load(): Promise<StoredSdkCredentials | undefined>;
    save(credentials: StoredSdkCredentials): Promise<void>;
    clear(): Promise<void>;
}
/** Default on-disk location: `~/.cursor/sdk/auth.json`. */
export declare function getDefaultSdkAuthPath(): string;
/** Validate an untrusted parsed JSON value; undefined when foreign-shaped. */
export declare function parseStoredSdkCredentials(value: unknown): StoredSdkCredentials | undefined;
/**
 * JSON file store with owner-only permissions (0600 file / 0700 directory),
 * re-asserted on every save so a pre-existing looser file or directory is
 * tightened rather than trusted. A corrupt or foreign-shaped file loads as
 * "logged out" rather than throwing, so a bad write never wedges the SDK.
 */
export declare class FileCredentialStore implements SdkCredentialStore {
    private readonly filePath;
    constructor(filePath?: string);
    get path(): string;
    load(): Promise<StoredSdkCredentials | undefined>;
    save(credentials: StoredSdkCredentials): Promise<void>;
    clear(): Promise<void>;
}
/** In-memory store for tests and hosts that must never touch disk. */
export declare class InMemoryCredentialStore implements SdkCredentialStore {
    private credentials;
    load(): Promise<StoredSdkCredentials | undefined>;
    save(credentials: StoredSdkCredentials): Promise<void>;
    clear(): Promise<void>;
}
