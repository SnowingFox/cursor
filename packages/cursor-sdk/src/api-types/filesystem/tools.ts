// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/tools.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/tools.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.966Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { DeleteToolCall, EditToolCall, GlobToolCall, GrepToolCall, LsToolCall, ReadToolCall } from "../types/tool-call-types.js";
import type { SDKToolAnnotations } from "../options.js";
import type { FileSystem } from "./types.js";
/** Options for {@link createFileSystemTools}. */
export interface FileSystemToolOptions {
    /**
     * The workspace inside the tree, as `local.reportedWorkspacePath` sets it
     * for an agent. Relative paths resolve against it, and LS, Grep, and Glob
     * search it when the input names no path. Defaults to `/`.
     */
    readonly workspace?: string;
}
/**
 * One native file tool, run outside a turn on the executors a local
 * agent's turn uses.
 */
export interface FileSystemTool<Name extends string, Call> {
    /** The native name the model calls the tool by. */
    readonly name: Name;
    /**
     * MCP tool annotations, the same shape as a custom tool's. Every file
     * tool sets `readOnlyHint` and `openWorldHint: false`: it touches only
     * the tree it was created on.
     */
    readonly annotations: SDKToolAnnotations;
    /**
     * `input` takes the tool's own argument names (`path`, `offset`,
     * `old_string`, `glob_pattern`, `-i`, …) or the camelCase names from its
     * `tool_call` event args. Returns the tool call a run's `tool_call`
     * event carries for the same input. Tool failures (a missing file, a
     * read-only mount, an invalid pattern) are an `error` result, as in a
     * run. Malformed input throws {@link ConfigurationError}.
     */
    execute(input: Readonly<Record<string, unknown>>): Promise<Call>;
}
/** The native file tools on one tree. Write and StrReplace report as an edit, as they do in a run. */
export interface FileSystemTools {
    readonly Read: FileSystemTool<"Read", ReadToolCall>;
    readonly Write: FileSystemTool<"Write", EditToolCall>;
    readonly StrReplace: FileSystemTool<"StrReplace", EditToolCall>;
    readonly LS: FileSystemTool<"LS", LsToolCall>;
    readonly Grep: FileSystemTool<"Grep", GrepToolCall>;
    readonly Glob: FileSystemTool<"Glob", GlobToolCall>;
    readonly Delete: FileSystemTool<"Delete", DeleteToolCall>;
}
/**
 * The native file tools on `fs`, for running one outside a turn (a direct
 * tool-call endpoint, a test, a CLI).
 *
 * @example
 * const tools = createFileSystemTools(fs, { workspace: "/repo" });
 * const call = await tools.Read.execute({ path: "src/a.ts", limit: 20 }); // reads /repo/src/a.ts
 * if (call.result?.status === "success") console.log(call.result.value.content);
 */
export declare function createFileSystemTools(fs: FileSystem, options?: FileSystemToolOptions): FileSystemTools;
