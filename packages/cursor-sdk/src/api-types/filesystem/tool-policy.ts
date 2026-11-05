// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/tool-policy.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/tool-policy.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.973Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/** True when the tool may be registered for a session on a FileSystem. */
export declare function isFileSystemTool(protoToolName: string): boolean;
/**
 * The tool restriction a run on a FileSystem sends. Omitted `allowedTools`
 * becomes every tool the tree can back; an explicit list must name only
 * such tools. `disallowedTools` passes through. Names are proto tool names.
 */
export declare function resolveFileSystemToolRestriction(args: {
    allowedTools: readonly string[] | undefined;
    disallowedTools: readonly string[] | undefined;
}): {
    allowedTools: string[];
    disallowedTools: readonly string[] | undefined;
};
