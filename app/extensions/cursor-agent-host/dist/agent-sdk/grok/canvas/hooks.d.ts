import { type GrokDataViz, type GrokPalette, type GrokTextStyle } from "./tokens.js";
export type { GrokDataViz, GrokPalette, GrokTextStyle } from "./tokens.js";
/**
 * Grok page tokens for custom styling. Always the Grok look, whatever app
 * shows the canvas: `kind` follows the viewer's light/dark mode, and the page
 * paper (`bg.base`) follows the surface the host paints around the canvas, so
 * the page sits flush in its sheet or stage. Ink, accents, and type never
 * change.
 */
export interface GrokTheme extends GrokPalette {
    /** Viewer polarity. High-contrast modes fold into `light` / `dark`. */
    readonly kind: "light" | "dark";
    readonly font: {
        /** Sans stack: XVF when the host embeds it, else the system face. */
        readonly family: string;
        readonly mono: string;
        /** Page title, 26/30. */
        readonly heading1: GrokTextStyle;
        /** 22/28; not used by pages. */
        readonly heading2: GrokTextStyle;
        /** Section heading, 17/24. */
        readonly heading3: GrokTextStyle;
        /** Body, 14/20. */
        readonly body1: GrokTextStyle;
        /** Data in tables and charts, 13/18. */
        readonly body2: GrokTextStyle;
        /** Captions, table headers, meta, 12/16. */
        readonly label: GrokTextStyle;
        /** 11/16. */
        readonly caption: GrokTextStyle;
        /** Monospace 13/20. */
        readonly code: GrokTextStyle;
    };
    /** 400 / 500 / 600. Nothing else is installed on the system faces. */
    readonly weight: {
        readonly regular: 400;
        readonly medium: 500;
        readonly semibold: 600;
    };
    /** Corner radii in px: 4 / 8 / 12. */
    readonly radius: {
        readonly sm: 4;
        readonly md: 8;
        readonly lg: 12;
    };
    /**
     * Grok Bot brand colors for data marks (bars, lines, points, areas, slices,
     * swatches), for the viewer's polarity. Series `i` takes `categorical[i]`;
     * a single series is `categorical[0]` with its de-emphasized marks in
     * `singleSeriesRest`; comparisons and "Other" are `other`. Never color text
     * with these: labels, values, and ticks stay on `text`.
     */
    readonly dataviz: GrokDataViz;
    /**
     * Ink shades, darkest first: `text.primary`, `text.tertiary`, a fainter
     * tertiary, and the `fill.secondary` tint.
     *
     * @deprecated Color data marks from `dataviz` instead. Kept so existing
     * canvases still render; the built-in charts no longer use it.
     */
    readonly chart: readonly [string, string, string, string];
}
/**
 * Returns the Grok theme for the viewer's current light/dark mode. Call it in
 * each component that needs colors; prefer the built-in components first.
 *
 * @example
 * ```tsx
 * function Note() {
 *   const theme = useGrokTheme();
 *   return <div style={{ color: theme.text.secondary }}>Heads up</div>;
 * }
 * ```
 */
export declare function useGrokTheme(): GrokTheme;
//# sourceMappingURL=hooks.d.ts.map