// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/team-id.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: team-id.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.947Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/**
 * Header the backend reads to scope a request to one of the caller's teams.
 * The CLI and IDE send the same header; when it is absent, auth keeps the
 * account's ambient team.
 */
export declare const SDK_TEAM_ID_HEADER_NAME = "x-cursor-team-id";
/**
 * A team id the backend will honor: a positive safe integer. Any other value
 * is dropped so the header stays off and the request keeps the ambient team.
 */
export declare function parseSdkTeamId(raw: unknown): number | undefined;
