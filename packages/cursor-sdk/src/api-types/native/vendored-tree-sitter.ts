// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/native/vendored-tree-sitter.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: native/vendored-tree-sitter.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.948Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
export declare function configureVendoredTreeSitterWorkspaceDir(workspaceDir: string): void;
type VendoredTreeSitterLoadResult = {
    available: true;
    module: unknown;
} | {
    available: false;
    reason: string;
};
/**
 * A load failure with a present vendor directory propagates: that is a
 * packaging regression in an artifact that claims to ship the natives.
 */
export declare function loadVendoredTreeSitterModule(options: {
    packageName: "tree-sitter" | "tree-sitter-bash";
    nativeRequire: (id: string) => unknown;
}): VendoredTreeSitterLoadResult;
export declare function createUnavailableParserClass(reason: string): unknown;
export {};
