import type { CSSProperties } from "react";
import type { GrokTheme } from "./hooks.js";
import type { GrokTypeName } from "./tokens.js";
/** Inline style for one type-scale entry at a weight, in a color. */
export declare function typeStyle(theme: GrokTheme, name: GrokTypeName, weight: keyof GrokTheme["weight"], color: string): CSSProperties;
/** `truncate`: one line, cut with an ellipsis. */
export declare const truncate: CSSProperties;
export declare const tabularNums: CSSProperties;
/** The 0.5 px ink rule between rows. */
export declare function hairline(theme: GrokTheme): string;
/** Brand color for series `i`; past the categorical hues, the tail is gray "Other". */
export declare function seriesColor(theme: GrokTheme, i: number): string;
//# sourceMappingURL=style.d.ts.map