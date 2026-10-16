import { type JSX } from "react";
/**
 * Charts for the common shapes: neutral text, brand-colored data marks. Marks
 * take `useGrokTheme().dataviz`; every label, value, and tick stays on the
 * neutral `text` tokens. A single series is `categorical[0]`, the mark that
 * matters at full strength and the rest in `singleSeriesRest`; parts of a
 * whole take the categorical hues in order, named by a legend of colored
 * swatches beside neutral text. No chart has a title or an axis title: the
 * `Section` heading names it. For shapes these don't cover, draw SVG with the
 * same `dataviz` tokens.
 */
export interface Bar {
    label: string;
    value: number;
    /** The value as it should read, e.g. "58" or "$1.2M". */
    display: string;
    /** Quiet note after the value, e.g. a share. */
    meta?: string;
}
export interface BarsProps {
    /** Five or more comparable values, largest first. Fewer belong in `Rows`. */
    bars: readonly Bar[];
    /**
     * Index of the one bar at full strength; the rest take the series' light
     * tint. Defaults to the largest; `"none"` gives every bar full strength.
     */
    emphasis?: number | "none";
}
/** Horizontal bars, one 6 px track per row, labels truncated at 112 px. */
export declare function Bars({ bars, emphasis }: BarsProps): JSX.Element;
export interface StackedBar {
    label: string;
    /** One value per entry in `series`. */
    values: readonly number[];
}
export interface StackedBarsProps {
    /** Names of the parts, in the order of each bar's `values`. Past eight, the rest share gray. */
    series: readonly string[];
    bars: readonly StackedBar[];
}
/**
 * Horizontal bars split into the same parts, with a legend. The longest bar
 * sets the scale; each total sits just past its bar's end.
 */
export declare function StackedBars({ series, bars }: StackedBarsProps): JSX.Element;
export interface ColumnPoint {
    label: string;
    value: number;
    /** The value as it should read above the column. */
    display: string;
}
export interface ColumnsProps {
    /** Five or more points of a short series, e.g. days of a week. */
    points: readonly ColumnPoint[];
    /**
     * Index of the one column at full strength; the rest take the series' light
     * tint. Defaults to the largest; `"none"` gives every column full strength.
     */
    emphasis?: number | "none";
}
/** Vertical bars in a 132 px grid, each at most 28 px wide. */
export declare function Columns({ points, emphasis }: ColumnsProps): JSX.Element;
export interface LinePoint {
    label: string;
    value: number;
}
export interface LineChartProps {
    points: readonly LinePoint[];
    /** Top of the y axis. Ticks at 0, half, and the ceiling. */
    ceiling: number;
    /** Unit after each tick, e.g. "ms". */
    unit?: string;
    /** A dashed gray comparison line, one value per point. */
    secondary?: {
        label: string;
        values: readonly number[];
    };
    /** Names for the two lines, printed under the chart beside their swatches. */
    labels?: readonly [string, string?];
}
/**
 * One line in the series color over a soft area of the same hue, with an
 * optional dashed gray comparison line.
 */
export declare function LineChart({ points, ceiling, unit, secondary, labels, }: LineChartProps): JSX.Element;
export interface PiePart {
    label: string;
    value: number;
}
export interface PieProps {
    /** Parts, largest first. Past eight, the rest share gray; fold small parts into one "Other". */
    parts: readonly PiePart[];
}
/** A donut of parts in the categorical hues, with each part's count and share beside it. */
export declare function Pie({ parts }: PieProps): JSX.Element;
//# sourceMappingURL=charts.d.ts.map