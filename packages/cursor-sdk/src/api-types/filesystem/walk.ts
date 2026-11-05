// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/walk.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/walk.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.964Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { DirEntry, FileInfo, FSGrepResult, ListOptions } from "./types.js";
export declare function normalizeFsPath(input: string): string;
/** Path-segment prefix: `/agent` matches `/agent/skills`, not `/agent-tools`. */
export declare function pathHasSegmentPrefix(args: {
    path: string;
    prefix: string;
}): boolean;
export declare function normalizeListPrefix(prefix?: string): string;
/**
 * `globPattern` matches `filePath` relative to `dir`. With
 * `matchBasename`, a slash-free pattern also matches the basename at
 * any depth, the way native Grep's `glob` filter does.
 */
export declare function pathMatchesGlob(args: {
    filePath: string;
    dir: string;
    globPattern: string;
    matchBasename?: boolean;
}): boolean;
/** True when `path` matches any {@link ListOptions.excludes} glob. */
export declare function isExcludedPath(path: string, excludes?: readonly string[]): boolean;
/** `options.maxDepth` as a whole number, or `undefined` when unset or unbounded. */
export declare function listMaxDepth(options?: ListOptions): number | undefined;
/**
 * Replace every entry deeper than `maxDepth` below `scope` with one
 * directory entry for its ancestor at that depth. The result is
 * unique and sorted. The first entry seen for a path wins.
 */
export declare function collapseToDepth(args: {
    entries: Iterable<DirEntry>;
    scope: string;
    maxDepth: number;
}): DirEntry[];
/** Drain `source`, collapse it to `maxDepth` below `scope`, then apply `limit`. */
export declare function collapseStreamToDepth(source: AsyncIterable<DirEntry>, options: {
    scope: string;
    maxDepth: number;
    limit?: number;
}): AsyncGenerator<DirEntry>;
/**
 * Yield the files under `prefix`, sorted. A file whose path equals
 * `prefix` is not under itself. Honors every {@link ListOptions} field.
 */
export declare function listFilesFromPaths(files: Iterable<DirEntry>, prefix?: string, options?: ListOptions): AsyncGenerator<DirEntry>;
/**
 * Existence probe over a flat file-path index. Exact key → file; any
 * key with this prefix → directory; `""` / `/` → directory; else missing.
 */
export declare function statFromFilePaths(files: Iterable<string>, path: string): FileInfo;
export declare function mergeSortedByPath(sources: Array<Iterable<DirEntry> | AsyncIterable<DirEntry>>, options?: {
    unique?: boolean;
}): AsyncGenerator<DirEntry>;
export declare function limitResults<T>(source: AsyncIterable<T>, maxResults: number | undefined): AsyncGenerator<T>;
export declare function globFromList(source: AsyncIterable<DirEntry>, options: {
    pattern: string;
    dir: string;
    limit?: number;
}): AsyncGenerator<DirEntry>;
export declare function compareGrepResult(left: FSGrepResult, right: FSGrepResult): number;
export declare function compileGrepPattern(args: {
    pattern: string;
    caseInsensitive?: boolean;
    path: string;
}): RegExp;
export declare function grepFileContent(args: {
    path: string;
    content: string;
    regex: RegExp;
}): Generator<FSGrepResult>;
/** Decode a {@link FileSystem.read} result as UTF-8 text. */
export declare function fileSystemText(content: string | Uint8Array): string;
