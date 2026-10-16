/**
 * Public API for authoring `.canvas.tsx` files via `grok/canvas`.
 *
 * A canvas built with this kit is a Grok Bot page: a title, a short summary,
 * and sections of paragraphs, callouts, lists, tables, and charts. The blocks
 * are the default vocabulary, not the ceiling: `Grid` sets blocks side by
 * side, `Segmented` switches views, and any richer visual (multi-series
 * lines, scatter, heatmap, timeline, flow) is inline SVG or divs colored from
 * `useGrokTheme()` (`dataviz` for data marks, neutral `text` for every label,
 * type scale). It always looks like Grok
 * and follows the viewer's light/dark mode. Wrap the canvas in one `Page`,
 * and never hardcode colors or fonts.
 */
/**
 * React authoring utilities re-exported so canvases need one public import:
 * the hooks and the event, node, and style types a page's handlers and
 * helpers are typed with. A name missing here fails the canvas type check,
 * so the list covers what authors reach for, not only what the blocks use.
 */
export type { ChangeEvent, CSSProperties, FocusEvent, FormEvent, KeyboardEvent, MouseEvent, PointerEvent, ReactNode, RefObject, SyntheticEvent, } from "react";
export { Fragment, useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
/** Calendar. */
export type { DayEvent, DayViewProps } from "./calendar.js";
export { DayView } from "./calendar.js";
/** Charts. */
export type { Bar, BarsProps, ColumnPoint, ColumnsProps, LineChartProps, LinePoint, PiePart, PieProps, StackedBar, StackedBarsProps, } from "./charts.js";
export { Bars, Columns, LineChart, Pie, StackedBars } from "./charts.js";
/** Page shell, text, lists, table, links. */
export type { CalloutProps, ChecklistItem, ChecklistProps, Link, LinkCardsProps, ListProps, PageProps, Row, RowsProps, SectionProps, TableProps, TextProps, Tone, } from "./components.js";
export { BulletList, Callout, Checklist, LinkCards, NumberedList, Page, Rows, Section, Table, Text, } from "./components.js";
/** Layout, view switching, and headline figures. */
export type { GridProps, Metric, MetricsProps, SegmentedOption, SegmentedProps } from "./layout.js";
export { Grid, Metrics, Segmented } from "./layout.js";
/** Tokens. */
export type { GrokDataViz, GrokPalette, GrokTextStyle, GrokTheme } from "./hooks.js";
export { useGrokTheme } from "./hooks.js";
//# sourceMappingURL=index.d.ts.map