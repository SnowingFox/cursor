// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/store/sdk-state-root.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: store/sdk-state-root.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.997Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/**
 * Default on-disk state root for local SDK agents for a workspace:
 * `{project}/sdk-agent-store/{sha256(workspaceRef)}`.
 * Layout: `{root}/index.db`, `{root}/agents/agent-{sha256}/store.db`, etc.
 * A store at the pre-SHA-256 (MD5-derived) path is renamed into place on first use.
 */
export declare function getDefaultSdkStateRoot(workspaceRef: string): string;
