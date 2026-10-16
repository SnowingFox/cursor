import type { JSX } from "react";
export interface DayEvent {
    /** Start hour, e.g. 9.5 for 9:30. */
    start: number;
    /** End hour. */
    end: number;
    title: string;
    /** Needs something from the reader; drawn in the accent. */
    flag?: boolean;
    /** Open time worth protecting, drawn as an outline. */
    free?: boolean;
}
export interface DayViewProps {
    /** First hour shown, e.g. 9. */
    start: number;
    /** Last hour shown, e.g. 14. */
    end: number;
    events: readonly DayEvent[];
    /** One inked line across the day, e.g. a deadline, with its label. */
    mark?: {
        at: number;
        label: string;
    };
}
/**
 * A calendar day: a soft card, hour labels centered on their lines, events as
 * tinted blocks with a 2 px rule. Events that need the reader take the
 * accent; free time is an outline; one inked line marks the deadline.
 */
export declare function DayView({ start, end, events, mark }: DayViewProps): JSX.Element;
//# sourceMappingURL=calendar.d.ts.map