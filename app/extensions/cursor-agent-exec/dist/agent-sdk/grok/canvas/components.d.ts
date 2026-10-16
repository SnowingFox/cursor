import { type JSX, type ReactNode } from "react";
/**
 * The one output style every Grok Bot page uses. A page is a title, a short
 * summary, and sections of text, callouts, lists, tables, charts, and custom
 * visuals. Neutral text, brand-colored data marks: text sits on the type
 * scale in neutral ink, color in text marks only status, and chart marks take
 * the Grok Bot data-viz palette (`useGrokTheme().dataviz`). No pills, tints,
 * cards, logos, or decorative buttons inside the page.
 */
/** Color for a status word. No other text in a page is colored. */
export type Tone = "success" | "warning" | "danger";
export interface PageProps {
    /** Page title, once. */
    title: string;
    /** One or two sentences under the title: the point of the page. */
    summary?: string;
    /** Where the page read from, shown as "From Calendar, Gmail". */
    sources?: readonly string[];
    /** `Section`s, 28 px apart. */
    children?: ReactNode;
}
/**
 * Root of a Grok canvas: title, summary, then sections in a 600 px reading
 * column. Wrap the whole canvas in one `Page`.
 *
 * @example
 * ```tsx
 * <Page title="Fourth shop: where to open" summary="Mill Hill, opening in spring." sources={["Point of sale", "City data"]}>
 *   <Section heading="Pickup orders by neighborhood">…</Section>
 * </Page>
 * ```
 */
export declare function Page({ title, summary, sources, children }: PageProps): JSX.Element;
export interface SectionProps {
    /** Section heading. Also names any chart inside; charts have no title of their own. */
    heading?: string;
    /** One quiet line under the heading, e.g. the unit or the period. */
    caption?: string;
    /** Its blocks: paragraphs, a callout, a list, a table, a chart, a `Grid`, or a custom visual. */
    children?: ReactNode;
}
/**
 * One section of a page: a heading, an optional caption, and its blocks,
 * 10 px apart.
 */
export declare function Section({ heading, caption, children }: SectionProps): JSX.Element;
export interface TextProps {
    /** One paragraph of plain sentences. */
    children?: ReactNode;
}
/** A paragraph of body text. Use one `Text` per paragraph. */
export declare function Text({ children }: TextProps): JSX.Element;
export interface CalloutProps {
    /** Bold first line: the takeaway in a few words. */
    lead?: string;
    /** A line or two of body text. */
    children?: ReactNode;
}
/**
 * The page's one takeaway: a bold lead and a line or two in a quiet neutral
 * box. Use at most one or two per page.
 */
export declare function Callout({ lead, children }: CalloutProps): JSX.Element;
export interface ListProps {
    /** One plain sentence per item. */
    items: readonly string[];
}
/** Bulleted list with a quiet marker column. */
export declare function BulletList({ items }: ListProps): JSX.Element;
/** Numbered list for steps or ranked items. */
export declare function NumberedList({ items }: ListProps): JSX.Element;
export interface ChecklistItem {
    text: string;
    done?: boolean;
    /** Right-aligned note, e.g. a due time. */
    meta?: string;
}
export interface ChecklistProps {
    items: readonly ChecklistItem[];
}
/** Tasks with a checkbox each. Ticking is local to the page view. */
export declare function Checklist({ items }: ChecklistProps): JSX.Element;
export interface Row {
    /** Short fixed-width lead, e.g. a time or a rank. */
    lead?: string;
    title: string;
    detail?: string;
    /** Right-aligned note, e.g. an owner, a due time, a count, a value. */
    meta?: string;
    /** A status word after the title; `tone` colors it. */
    status?: {
        label: string;
        tone?: Tone;
    };
}
export interface RowsProps {
    rows: readonly Row[];
}
/**
 * The detailed list: hairline rows with a lead, a title, a status word, a
 * detail line, and a right-aligned meta. Two or three numbers belong here
 * (value as `meta`), not in a chart.
 */
export declare function Rows({ rows }: RowsProps): JSX.Element;
export interface TableProps {
    /** Header row. The first column is the label column; leave it `""` when it needs no header. */
    columns: readonly string[];
    /** One array per row: label first, then values. Numbers are right-aligned. */
    rows: readonly (readonly string[])[];
    /** Index of the column to set in medium weight, e.g. the recommended option. */
    emphasis?: number;
}
/**
 * Hairline table with no outer border: label column in secondary ink, values
 * right-aligned in tabular figures, caption-sized header.
 */
export declare function Table({ columns, rows, emphasis }: TableProps): JSX.Element;
export interface Link {
    title: string;
    /** Where it lives, e.g. "Slack · #design-review" or "Figma". */
    site?: string;
    date?: string;
    href: string;
}
export interface LinkCardsProps {
    links: readonly Link[];
    /** Number the cards so findings can cite them. */
    numbered?: boolean;
}
/**
 * Compact references to documents and pages: the only bordered block, because
 * it leaves the page.
 */
export declare function LinkCards({ links, numbered }: LinkCardsProps): JSX.Element;
//# sourceMappingURL=components.d.ts.map