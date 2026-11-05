// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/merge.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/merge.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.971Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/**
 * K-way merge of already-sorted streams. Each source must be ordered
 * under the same `compare`; the merge does not re-sort a source.
 *
 * A binary heap of heads keeps the next yield O(log k) in the number of
 * sources. `unique` skips later copies of a key so an earlier source can
 * shadow a later one (the union rule).
 */
export interface MergeSortedOptions<T> {
    compare: (left: T, right: T) => number;
    unique?: boolean;
}
/**
 * Merge already-sorted iterables / async iterables under `compare`.
 * Equal keys (`compare === 0`) keep source order: earlier `sources`
 * index wins. With `unique`, those later copies are skipped.
 */
export declare function mergeSorted<T>(sources: Array<Iterable<T> | AsyncIterable<T>>, options: MergeSortedOptions<T>): AsyncGenerator<T>;
/**
 * Binary min-heap. `compare(a, b) < 0` means `a` is before `b`.
 * Exported for the invariant tests; composers use {@link mergeSorted}.
 */
export declare class MinHeap<T> {
    private readonly compare;
    private readonly items;
    constructor(compare: (left: T, right: T) => number);
    get size(): number;
    peek(): T | undefined;
    push(item: T): void;
    pop(): T | undefined;
    private bubbleUp;
    private bubbleDown;
}
