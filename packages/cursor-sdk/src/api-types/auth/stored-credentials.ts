// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/auth/stored-credentials.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: auth/stored-credentials.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.950Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/**
 * Drop the TTL cache so the next resolution re-reads the auth file. Called
 * after `Cursor.auth.login()` / `logout()` mutate it, so a same-process
 * login is usable immediately.
 */
export declare function clearStoredLoginCache(): void;
/**
 * The stored login's API key, when it is usable for the current backend:
 * unexpired, and minted against the same API base URL this process resolves
 * (keys are backend-paired — a key minted against production 401s on a local
 * stack and vice versa).
 */
export declare function getStoredLoginApiKey(): string | undefined;
/**
 * Standard SDK credential precedence: explicit `apiKey` option, then
 * `CURSOR_API_KEY`, then the stored `Cursor.auth.login()` key. Preserves an
 * explicit empty string (the caller's no-auth signal) untouched.
 */
export declare function resolveDefaultApiKey(explicit?: string): string | undefined;
