// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/errors.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/errors.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.965Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/**
 * Typed FileSystem throws. Every method error is a {@link PathError}
 * so composers (`unionFs`) can rewrite `path` without scraping
 * `error.message`.
 *
 * Messages stay the FileSystem contract strings. `path` is the
 * absolute posix path the error is about (child-root on a mount,
 * namespace path after `unionFs` remaps it).
 */
/**
 * Base of every FileSystem method throw. Construction errors (such as
 * an empty `overlayFs`) are not PathErrors.
 */
export declare class PathError extends Error {
    /**
     * The `name` of instances of exactly this class. The published bundle
     * minifies class names, so `new.target.name` would read `"a"`; a subclass
     * that declares no `errorName` of its own keeps its class name.
     */
    protected static readonly errorName: string;
    readonly path: string;
    constructor(path: string, message: string);
    /**
     * Same error at a rewritten path. `unionFs` prepends the mount
     * prefix this way. Subclass identity and extra fields stay.
     */
    withPath(path: string): this;
    protected recreate(path: string, message: string): this;
}
/** `read` or `delete` of a path with no file: `not found: <path>`. */
export declare class FileNotFoundError extends PathError {
    protected static readonly errorName: string;
    constructor(path: string, message?: string);
    protected recreate(path: string, message: string): this;
}
/** `write` or `delete` on a tree or mount that doesn't take writes: `read-only mount: <path>`. */
export declare class ReadOnlyMountError extends PathError {
    protected static readonly errorName: string;
    constructor(path: string, message?: string);
    protected recreate(path: string, message: string): this;
}
/** A `unionFs` path that no mount covers: `no mount for path: <path>`. */
export declare class NoMountError extends PathError {
    protected static readonly errorName: string;
    constructor(path: string, message?: string);
    protected recreate(path: string, message: string): this;
}
/**
 * A `write` the tree refused, for example bytes sent to a tree that only
 * stores text: `write failed: <path>`.
 */
export declare class WriteFailedError extends PathError {
    protected static readonly errorName: string;
    constructor(path: string, message?: string);
    protected recreate(path: string, message: string): this;
}
/** `delete` on a tree that can't remove files: `delete is not supported: <path>`. */
export declare class DeleteNotSupportedError extends PathError {
    protected static readonly errorName: string;
    constructor(path: string, message?: string);
    protected recreate(path: string, message: string): this;
}
/**
 * Exact-edit contract failures (`oldText is empty`, uniqueness).
 * `message` is the contract string; it does not embed `path`.
 */
export declare class EditError extends PathError {
    protected static readonly errorName: string;
    protected recreate(path: string, message: string): this;
}
/**
 * A `grep` pattern that isn't valid JavaScript `RegExp` source:
 * `invalid grep pattern: <pattern>`.
 */
export declare class InvalidGrepPatternError extends PathError {
    protected static readonly errorName: string;
    readonly pattern: string;
    constructor(pattern: string, path?: string, message?: string);
    protected recreate(path: string, message: string): this;
}
/** True for a {@link FileNotFoundError}, or any `Error` whose message starts with `not found:`. */
export declare function isFileNotFoundError(error: unknown): boolean;
/**
 * True for an {@link InvalidGrepPatternError}, or any `Error` whose message
 * starts with `invalid grep pattern:`.
 */
export declare function isInvalidGrepPatternError(error: unknown): boolean;
/**
 * Remap a child throw onto a mount prefix. Typed {@link PathError}
 * keeps its class and rewrites `path`. Untyped `Error` still gets
 * a best-effort message rewrite so older custom trees keep working.
 */
export declare function remapPathError(error: unknown, prefix: string): Error;
