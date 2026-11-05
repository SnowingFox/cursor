// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/local-model-validation.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: local-model-validation.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.943Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { ModelListItem, ModelSelection } from "./options.js";
export interface LocalModelValidationOptions {
    listModels?: () => Promise<ModelListItem[]>;
}
export declare function resolveLocalModelSelection(selection: ModelSelection, options?: LocalModelValidationOptions): Promise<ModelSelection>;
/** A catalog resolution, including the caller id that mapped to the catalog id. */
export interface CatalogResolvedModel {
    selection: ModelSelection;
    ids: readonly string[];
}
export declare function catalogResolvedModelFrom(args: {
    requested: ModelSelection;
    resolved: ModelSelection;
}): CatalogResolvedModel;
/**
 * The catalog-resolved selection for a later send, when the requested id is
 * one that previously resolved and the parameter values match. Max mode from
 * that resolution is preserved, including when the caller repeats an alias.
 */
export declare function reuseResolvedModelSelection(args: {
    requested: ModelSelection;
    resolved: CatalogResolvedModel | undefined;
}): ModelSelection | undefined;
