/**
 * Design tokens for `cursor/canvas` (standalone; no UI framework dependency).
 *
 * Color values are pinned copies of the `packages/ui` cursor-core themes
 * (`src/tokens/themes/cursor-core/{dark,light}.ts`) resolved through
 * `CURSOR_SEMANTIC_RULES` (`src/tokens/semantic-schema.ts`). Alpha-hex entries
 * are `base` at the rule's `mixTransparent` percent so they composite
 * correctly over any surface. When the ui tokens change, re-derive these —
 * they do not update automatically.
 *
 * Mapping (dark base #F0F0F0, light base #141414):
 * - foreground*        → text-primary/secondary/tertiary/quaternary (100/74/60/36%)
 * - editor/chrome/sidebar/elevated → the core surface hexes (elevated = editor)
 * - fill*              → bg-primary/secondary/tertiary/quaternary (20/14/8/6%)
 * - stroke*            → stroke-primary/secondary/tertiary (20/12/8%)
 * - strokeFocused      → core `focus` at full opacity (NOT `--cursor-stroke-focused`,
 *   which is 15% and layered with other cues in the app; in a canvas this is
 *   the sole focus affordance)
 * - accent/button*     → bg-accent / action-label / bg-accent-hover (mixTwo base 10%)
 * - link               → text-link (= core blue)
 * - diff*Line          → the core diff line backgrounds; diffStrip* keep the
 *   canvas-specific alphas on the core green/red hues
 */
export declare const canvasPaletteDark: CanvasPalette;
export declare const canvasPaletteLight: CanvasPalette;
export declare const canvasPaletteGrokDark: CanvasPalette;
export declare const canvasPaletteGrokLight: CanvasPalette;
/**
 * Parse a CSS hex color (`#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa`) into 0–255
 * RGB components. Returns `undefined` for anything we can't confidently parse
 * (named colors, `rgb()`, etc.) so callers can fall back to the base palette.
 *
 * Hand-rolled rather than reusing a shared color util because this package is
 * deliberately dependency-light (it is bundled into every canvas), and the host
 * only ever sends hex (VS Code's `Color.Format.CSS.formatHex`).
 */
export declare function parseHexColor(value: string): {
    r: number;
    g: number;
    b: number;
} | undefined;
/** Visual brand for canvas token resolve. Unknown values become `"cursor"`. */
export type CanvasHostThemeBrand = "cursor" | "grok";
export interface CanvasHostThemeOverrides {
    readonly brand?: CanvasHostThemeBrand;
    readonly primary?: string;
    readonly editorBackground?: string;
    readonly editorForeground?: string;
}
/** Unknown / omitted brand keeps the Cursor tables. */
export declare function parseCanvasHostThemeBrand(value: unknown): CanvasHostThemeBrand;
/**
 * Overlay workbench editor surface colors onto the base palette so the canvas
 * body and primitives using `bg.editor` match the active VS Code theme
 * instead of the fixed Cursor light/dark editor hex.
 */
export declare function applyWorkbenchSurfaces(palette: CanvasPalette, surfaces: Pick<CanvasHostThemeOverrides, "editorBackground" | "editorForeground">): CanvasPalette;
/**
 * Overlay a host-provided primary/accent color (e.g. the active VS Code
 * theme's accent) onto a base palette. Only the accent-adjacent entries
 * change — accent, button background/hover, focus stroke, and links — plus a
 * luminance-picked readable on-accent foreground. Every other entry (surfaces,
 * text, fills, diff) keeps its base light/dark value, so any theme is
 * supported without enumerating its full token set.
 *
 * Returns the base palette unchanged when `primary` isn't a hex color we can
 * parse, keeping behaviour identical to hosts that only report a theme `kind`.
 */
export declare function applyPrimaryColor(palette: CanvasPalette, primary: string): CanvasPalette;
export interface CanvasPalette {
    readonly foreground: string;
    readonly foregroundSecondary: string;
    readonly foregroundTertiary: string;
    readonly foregroundQuaternary: string;
    readonly editor: string;
    readonly chrome: string;
    readonly sidebar: string;
    readonly elevated: string;
    readonly fillPrimary: string;
    readonly fillSecondary: string;
    readonly fillTertiary: string;
    readonly fillQuaternary: string;
    readonly strokePrimary: string;
    readonly strokeSecondary: string;
    readonly strokeTertiary: string;
    readonly strokeFocused: string;
    readonly accent: string;
    readonly buttonBackground: string;
    readonly buttonForeground: string;
    readonly buttonHoverBackground: string;
    readonly link: string;
    readonly diffInsertedLine: string;
    readonly diffRemovedLine: string;
    readonly diffStripAdded: string;
    readonly diffStripRemoved: string;
}
/**
 * Chart color palette — distilled from portal-website analytics charts.
 * 88% opacity (E0) softens vibrancy without dulling; palette maximizes
 * hue + luminosity spread for distinguishable multi-series charts.
 */
export declare const chartPalette: {
    readonly green: "#1F8A65E8";
    readonly darkGreen: "#0D855AE0";
    readonly lightGreen: "#52B896E0";
    readonly mintGreen: "#7DCAB0E0";
    readonly blue: "#2E79B5E0";
    readonly lightBlue: "#70B0D8E0";
    readonly indigo: "#5A6CC0F0";
    readonly lightIndigo: "#9AAADCE0";
    readonly purple: "#7B64B8F0";
    readonly lightPurple: "#AA98D8E0";
    readonly warmPink: "#C85898E0";
    readonly lightPink: "#E8A0C4E0";
    readonly brightOrange: "#F0A040E0";
    readonly deepOrange: "#C06028E0";
    readonly goldenYellow: "#E8C030E0";
    readonly darkAmber: "#C04848E0";
    readonly warmPeach: "#F0A088E0";
    readonly vibrantTeal: "#2A9A8AE0";
    readonly muted: "#8888A8E0";
    readonly neutralLine: "#888899D0";
};
/**
 * Shared category palette for canvas primitives that show categorical tints
 * (`Swatch`, `UsageBar` segments, etc.). Hexes mirror the cursor core hues
 * from `packages/ui/src/tokens/themes/cursor-core/{dark,light}.ts` (via the
 * `text-{hue}-primary` semantic tokens); `gray` reuses the palette's
 * `foregroundTertiary` (= `text-tertiary`, `mixTransparent base 60%`).
 * `orange` is mixed 70/30 with red to keep
 * Conversation distinct from Skills' yellow in light mode while staying warm.
 *
 * The insertion order here is the canonical category order — primitives
 * that auto-assign colors (e.g. `UsageBar` segments without an explicit
 * `color`) cycle through these keys in order.
 */
export type Color = "gray" | "purple" | "green" | "yellow" | "cyan" | "pink" | "blue" | "orange" | "red";
export type CategoryPalette = Readonly<Record<Color, string>>;
export declare const categoryPaletteDark: CategoryPalette;
export declare const categoryPaletteLight: CategoryPalette;
export declare const categoryPaletteGrokDark: CategoryPalette;
export declare const categoryPaletteGrokLight: CategoryPalette;
/** Legacy `colorPalette` name kept for back-compat; per-theme tables are `categoryPalette{Dark,Light}`. React consumers should read `useHostTheme().category` so the color flips with the host theme. */
export declare const colorPalette: CategoryPalette;
/**
 * Auto-color rotation for `UsageBar` segments without an explicit `color`.
 * Decoupled from `colorPalette`'s declaration order so the palette can grow
 * or be reordered without changing how unspecified segments cycle.
 *
 * Matches the original `packages/ui` `ContextUsageTray` order so the same
 * segment index lands on the same hue as the source.
 */
export declare const usageColorSequence: readonly Color[];
/**
 * Ordered array for automatic series coloring — alternates dark/light across
 * distinct hue families for maximum perceptual separation.
 */
export declare const chartColorSequence: readonly string[];
/**
 * Sand data-categorical hues. Same key set as {@link chartPalette} so
 * tone maps (`success` / `danger` / …) stay typed; the lead series colors
 * are Sand blue / orange / purple.
 */
export declare const chartPaletteGrok: {
    readonly green: "#00C972E8";
    readonly darkGreen: "#009957E0";
    readonly lightGreen: "#38D591E0";
    readonly mintGreen: "#78E2B4E0";
    readonly blue: "#1084FEE0";
    readonly lightBlue: "#459FFEE0";
    readonly indigo: "#0C64C1F0";
    readonly lightIndigo: "#80BEFEE0";
    readonly purple: "#9159FEF0";
    readonly lightPurple: "#A97EFEE0";
    readonly warmPink: "#FF309BE0";
    readonly lightPink: "#FF5EB1E0";
    readonly brightOrange: "#FF6700E0";
    readonly deepOrange: "#C24E00E0";
    readonly goldenYellow: "#FF9800E0";
    readonly darkAmber: "#FF263CE0";
    readonly warmPeach: "#FF8838E0";
    readonly vibrantTeal: "#00BCA6E0";
    readonly muted: "#777777E0";
    readonly neutralLine: "#777777D0";
};
export declare const chartColorSequenceGrok: readonly string[];
export type ChartPalette = {
    readonly [K in keyof typeof chartPalette]: string;
};
/**
 * Semantic colors for components (spacing and radius live in `theme.ts`).
 * There is no `colors` bag — `theme.colors.bg.primary` is not a path.
 * Use `theme.bg.editor`, `theme.fill.primary`, `theme.text.primary`,
 * `theme.stroke.secondary`, `theme.accent.primary`.
 */
export interface CanvasTokens {
    bg: {
        editor: string;
        chrome: string;
        elevated: string;
    };
    text: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        link: string;
        onAccent: string;
    };
    stroke: {
        primary: string;
        secondary: string;
        tertiary: string;
        focused: string;
    };
    fill: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
    };
    accent: {
        primary: string;
        control: string;
        controlHover: string;
    };
    diff: {
        insertedLine: string;
        removedLine: string;
        stripAdded: string;
        stripRemoved: string;
    };
    category: CategoryPalette;
}
export declare const canvasTokens: CanvasTokens;
export declare const canvasTokensLight: CanvasTokens;
/**
 * Resolve the full token set for a host theme `kind`, optionally overlaying
 * the active editor's primary/accent color via {@link applyPrimaryColor}.
 *
 * Light kinds (`light`, `hc-light`) use the light palette/categories; every
 * other kind uses the dark ones. Centralizing the palette + category choice
 * here keeps `useHostTheme` a thin reader of host state.
 *
 * Grok skips the host `primary` overlay: Grok owns ink accents
 * (`#FAFAFA` / `#070707`). Hosts like Sand and VS Code always send
 * `primary` (workbench `button.background`) and would otherwise wipe
 * those inks. Workbench surfaces (`editorBackground` /
 * `editorForeground`) still apply.
 */
export declare function buildHostTokens(kind: string, overrides?: CanvasHostThemeOverrides): {
    tokens: CanvasTokens;
    palette: CanvasPalette;
    brand: CanvasHostThemeBrand;
};
export declare function chartThemeForBrand(brand: CanvasHostThemeBrand): {
    palette: ChartPalette;
    sequence: readonly string[];
};
//# sourceMappingURL=canvas-tokens.d.ts.map