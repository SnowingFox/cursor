// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/agent/filesystem/types.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: agent/filesystem/types.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.958Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/**
 * One entry in a `list` / `glob` stream.
 *
 * `path` is an absolute posix path (`/src/a.ts`). No trailing slash
 * except `/`. `size` is optional byte length of the file contents.
 *
 * Entries are files unless `kind` is `"directory"`. A directory entry
 * appears only where {@link ListOptions.maxDepth} cut a subtree off;
 * it stands for every file below that path.
 */
export interface DirEntry {
    path: string;
    size?: number;
    kind?: "file" | "directory";
}
/**
 * Existence probe. `directory` means this path is a prefix of at
 * least one file (virtual trees infer directories) or a real
 * directory on disk. `missing` is a value, not an error.
 */
export type FileInfo = {
    kind: "file";
} | {
    kind: "directory";
} | {
    kind: "missing";
};
/**
 * One content hit from `grep`. `path` is absolute posix.
 * `lineNumber` is 1-indexed. `line` is the full matching line,
 * without the trailing newline.
 */
export interface FSGrepResult {
    path: string;
    lineNumber: number;
    line: string;
}
/**
 * Optional filters for {@link FileSystem.list}. Every field is
 * pushdown: a tree that ignores one stays correct, because callers
 * apply the same filter to what the tree yields.
 */
export interface ListOptions {
    /**
     * Ignore globs. A slash-free pattern matches at any depth, and a
     * directory match drops that tree.
     */
    excludes?: readonly string[];
    /**
     * Result cap, lexicographic. Omitted means no cap. `0` yields
     * nothing. With `maxDepth`, the cap counts entries after the depth
     * collapse.
     */
    limit?: number;
    /**
     * How many path segments below `prefix` to list. `1` yields the
     * immediate children of `prefix`. A file deeper than this is replaced
     * by one `{ kind: "directory" }` entry for its ancestor at that depth.
     * Omitted means no limit. A value below `1` yields nothing.
     */
    maxDepth?: number;
}
/**
 * Optional filters for {@link FileSystem.glob}.
 *
 * `limit` is the same lexicographic cap as {@link ListOptions.limit}.
 */
export interface GlobOptions {
    limit?: number;
}
/**
 * Default scan cap for native LS and Glob. Small enough that a
 * recursive listing of a remote tree does not materialize a huge
 * response.
 */
export declare const FILE_SYSTEM_SCAN_LIMIT = 1000;
/**
 * Content-search query.
 *
 * `pattern` is a JavaScript regular expression source. Invalid
 * source must throw `InvalidGrepPatternError` with message
 * `invalid grep pattern: ${pattern}`. `path` omitted / `""` /
 * `"/"` searches the whole tree; a file path searches that file
 * only. A slash-free `glob` (`*.ts`) matches the basename at any
 * depth under `path`.
 *
 * `excludes` are optional ignore globs (same language as
 * {@link ListOptions.excludes}).
 *
 * `maxResults` is optional pushdown: stop after this many hits so a
 * remote or large tree does not materialize a full scan. Omitted
 * means no cap.
 */
export interface FSGrepQuery {
    pattern: string;
    path?: string;
    glob?: string;
    excludes?: readonly string[];
    caseInsensitive?: boolean;
    maxResults?: number;
}
/**
 * Exact, non-overlapping str-replace. `oldText` / `newText` are
 * literal strings, not regex: `$`, `$&`, and `$1` in `newText` are
 * written as-is.
 */
export interface FSEditQuery {
    path: string;
    oldText: string;
    newText: string;
    replaceAll?: boolean;
}
/**
 * StrReplace success. `occurrencesModified` is the number of
 * non-overlapping replacements (1 unless `replaceAll`).
 */
export interface FSEditResult {
    occurrencesModified: number;
}
/**
 * The tree a local agent's native tools run on.
 *
 * Every method is required. Methods never fall back to the host disk.
 *
 * Paths are a single posix namespace rooted at `/`. Query paths and
 * yielded paths are absolute (`/src/a.ts`). No trailing slash except
 * `/`. `""`, `"/"`, and an omitted `prefix` / `dir` / `path` mean the
 * root. Prefix tests are path-segment: `/agent` matches
 * `/agent/skills`, not `/agent-tools`.
 *
 * Async iterators are already sorted, so composers merge them without
 * re-sorting:
 *
 * - `list` / `glob`: lexicographic by `path`. Paths are unique.
 * - `grep`: by `path`, then `lineNumber` ascending. Keep every hit.
 *
 * Errors:
 *
 * - `list` / `stat` / `glob` never throw for a missing path. Missing
 *   is an empty iterator or `{ kind: "missing" }`.
 * - `read` / `write` / `delete` throw a `PathError` subclass whose
 *   `message` is the string the model sees and whose `path` is the
 *   absolute posix path a composer remaps.
 * - `grep` throws `InvalidGrepPatternError` for an invalid regex. A
 *   missing path yields nothing.
 */
export interface FileSystem {
    /**
     * Recursive file scan under `prefix`. Directories are inferred from
     * path prefixes and appear as entries only where `options.maxDepth`
     * cuts a subtree off. A file is not under itself, so listing a file
     * path is empty. Empty is not "missing" (`stat` answers that).
     * Yields lexicographic unique {@link DirEntry} rows.
     */
    list(prefix?: string, options?: ListOptions): AsyncIterable<DirEntry>;
    /**
     * Existence probe: exact file, a prefix that has files, or missing.
     * Unknown paths are `{ kind: "missing" }`.
     */
    stat(path: string): Promise<FileInfo>;
    /**
     * Same scan as `list`, filtered by `pattern` relative to `dir`.
     * Matching is relative to `dir`, not basename-anywhere (`*.ts`
     * under `/src` is `/src/a.ts`, not `/src/nested/c.ts`). A bad glob
     * matches nothing.
     */
    glob(pattern: string, dir?: string, options?: GlobOptions): AsyncIterable<DirEntry>;
    /**
     * Read the whole file. Text returns a string; binary content may
     * return a `Uint8Array`. Native Read turns `jpeg` / `png` / `gif` /
     * `webp` bytes into an image part.
     *
     * Throws `FileNotFoundError` (`not found: ${path}`) for a missing
     * file or a directory.
     */
    read(path: string): Promise<string | Uint8Array>;
    /**
     * Content matches, ordered by path, then line number. Honors
     * `maxResults` when set.
     */
    grep(query: FSGrepQuery): AsyncIterable<FSGrepResult>;
    /**
     * Create or overwrite a file. Parents are created as needed. A tree
     * that cannot store bytes throws `WriteFailedError` for a
     * `Uint8Array` rather than converting it. A read-only tree throws
     * `ReadOnlyMountError`.
     */
    write(path: string, contents: string | Uint8Array): Promise<void>;
    /**
     * Remove one file. Directories are not deleted. Throws
     * `FileNotFoundError` for a missing file or a directory.
     */
    delete(path: string): Promise<void>;
}
