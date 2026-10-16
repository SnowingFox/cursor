import type { CanvasHostThemeBrand } from "./canvas-tokens.js";
export type { CanvasHostThemeBrand, CanvasPalette, CanvasTokens, ChartPalette, } from "./canvas-tokens.js";
export { canvasPaletteDark, canvasPaletteGrokDark, canvasPaletteGrokLight, canvasPaletteLight, canvasTokens, canvasTokensLight, chartThemeForBrand, parseCanvasHostThemeBrand, } from "./canvas-tokens.js";
/** Typography presets used by the built-in `cursor/canvas` components. */
export declare const canvasTypography: {
    readonly fontFamily: "inherit";
    readonly h1: {
        readonly fontSize: "24px";
        readonly lineHeight: "30px";
        readonly fontWeight: 590;
    };
    readonly h2: {
        readonly fontSize: "18px";
        readonly lineHeight: "24px";
        readonly fontWeight: 590;
    };
    readonly h3: {
        readonly fontSize: "16px";
        readonly lineHeight: "22px";
        readonly fontWeight: 590;
    };
    readonly body: {
        readonly fontSize: "14px";
        readonly lineHeight: "20px";
        readonly fontWeight: 400;
    };
    readonly small: {
        readonly fontSize: "12px";
        readonly lineHeight: "16px";
        readonly fontWeight: 400;
    };
};
/**
 * Cursor canvases inherit the host frame's face (Geist in IDE / Inter on
 * portal). Do not force Geist into the SDK — hosts already load it.
 */
export declare const canvasFontFamilyCursor: "inherit";
/**
 * Sand's current `--sand-font-sans` stack. Hosts apply this same stack on
 * the frame document so `inherit` matches the token. System faces only.
 */
export declare const canvasFontFamilyGrok: string;
/** Spacing scale (px). */
export declare const canvasSpacing: {
    readonly "0.5": 2;
    readonly "1": 4;
    readonly "1.5": 6;
    readonly "2": 8;
    readonly "2.5": 10;
    readonly "3": 12;
    readonly "3.5": 14;
    readonly "4": 16;
    readonly "4.5": 18;
    readonly "5": 20;
    readonly "6": 24;
    readonly "7": 28;
    readonly "8": 32;
    readonly "9": 36;
    readonly "10": 40;
};
export type CanvasSpacing = typeof canvasSpacing;
/** Border radius (px). */
export declare const canvasRadius: {
    readonly none: 0;
    readonly xs: 2;
    readonly sm: 4;
    readonly md: 6;
    readonly lg: 8;
    readonly xl: 12;
    readonly full: 9999;
};
export type CanvasRadius = {
    readonly [K in keyof typeof canvasRadius]: number;
};
export type CanvasTypography = {
    readonly fontFamily: string;
    readonly h1: {
        readonly fontSize: string;
        readonly lineHeight: string;
        readonly fontWeight: number;
    };
    readonly h2: {
        readonly fontSize: string;
        readonly lineHeight: string;
        readonly fontWeight: number;
    };
    readonly h3: {
        readonly fontSize: string;
        readonly lineHeight: string;
        readonly fontWeight: number;
    };
    readonly body: {
        readonly fontSize: string;
        readonly lineHeight: string;
        readonly fontWeight: number;
    };
    readonly small: {
        readonly fontSize: string;
        readonly lineHeight: string;
        readonly fontWeight: number;
    };
};
/** Sand-grounded radii: 8 / 10 / 14 on the md / lg / xl steps. */
export declare const canvasRadiusGrok: CanvasRadius;
export declare const canvasTypographyGrok: CanvasTypography;
export declare function canvasRadiusForBrand(brand: CanvasHostThemeBrand): CanvasRadius;
export declare function canvasTypographyForBrand(brand: CanvasHostThemeBrand): CanvasTypography;
//# sourceMappingURL=theme.d.ts.map