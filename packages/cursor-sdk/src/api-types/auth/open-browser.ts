// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/auth/open-browser.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: auth/open-browser.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.952Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/**
 * Whether opening a browser is likely to reach the user: false in SSH
 * sessions, when `NO_OPEN_BROWSER` is set, or for non-web URLs. Callers fall
 * back to surfacing the URL (via `onLoginUrl`) when this is false.
 */
export declare function isLikelyToOpenBrowser(url: string): boolean;
/**
 * Open `url` in the system browser. Rejects when spawning the opener fails;
 * resolves once the opener process starts (not when the page loads).
 */
export declare function openBrowser(url: string): Promise<void>;
