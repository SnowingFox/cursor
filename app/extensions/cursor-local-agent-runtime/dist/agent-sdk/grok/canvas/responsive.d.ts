/**
 * A block narrower than this lays out for a phone: two figures per row, no
 * side-by-side panels. It is the block's own width, not the viewport's, so a
 * block inside a `Grid` cell adapts too.
 */
export declare const GROK_NARROW_BLOCK_PX = 480;
/**
 * Whether the element the returned `ref` is attached to is narrower than
 * {@link GROK_NARROW_BLOCK_PX}. `false` until it mounts and where
 * `ResizeObserver` is missing (server rendering), which keeps the wide layout.
 */
export declare function useNarrowBlock<T extends HTMLElement>(): {
    readonly ref: (element: T | null) => void;
    readonly narrow: boolean;
};
/**
 * Whether the viewer's primary pointer is a finger. Controls then get phone
 * hit targets while keeping their desktop look.
 */
export declare function useCoarsePointer(): boolean;
//# sourceMappingURL=responsive.d.ts.map