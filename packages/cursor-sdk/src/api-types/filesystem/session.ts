// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/session.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/session.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.963Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { CreateSessionRuntimeOptions } from "../run-store-public-types.js";
import type { SubagentsService } from "@anysphere/local-exec";
import type { FileSystemContext, FileSystemFactory } from "../options.js";
import type { FileSystem } from "./types.js";
/** The workspace of a session on a FileSystem when the caller sets no `reportedWorkspacePath`. */
export declare const FILE_SYSTEM_WORKSPACE_PATH = "/";
/** The caller's tree for one run: the factory's result, or the static handle. */
export declare function resolveFileSystem(source: FileSystem | FileSystemFactory, ctx: FileSystemContext): Promise<FileSystem>;
/**
 * The tree a run's own session and every `Task` child under it share:
 * `userFs` with a new, empty in-memory `/tmp` for spilled tool output.
 * Lives for one run.
 */
export declare function createSessionFileSystem(userFs: FileSystem): FileSystem;
/** Workspace settings that decide what a FileSystem session reads instead of the host project. */
export interface FileSystemSessionSettings {
    /** Read project rules (`<workspace>/AGENTS.md`, `<workspace>/.cursor/rules/**`) from the tree. */
    readonly includeProjectRules?: boolean;
    readonly subagentsService?: SubagentsService;
}
/** Inputs every FileSystem session of one run shares, root and children alike. */
export interface FileSystemSessionOptions {
    /** The host directory native tools aim spill files at; those writes are routed into the tree. */
    readonly hostProjectDir?: string;
    readonly settings?: FileSystemSessionSettings;
    /**
     * The workspace inside the tree (`local.reportedWorkspacePath`), already
     * validated. The model is told it is the workspace, relative tool paths
     * resolve against it, and project rules load from it. Defaults to `/`.
     */
    readonly workspace?: string;
}
/**
 * Session runtime options that put a session's native file tools on `tree`
 * and leave it no host shell and no hooks. Every field here replaces a host default, so a
 * session built from these options never falls back to the host disk for
 * the tools they cover. Project rules come from `tree`, the session's MCP
 * lease leaves out the host project's `.cursor/mcp.json`, and
 * {@link fileSystemSessionContext} lists the other host inputs it replaces.
 *
 * Tools that spill output build their paths from the reported project
 * folder, `/tmp`, so spills and generated images land on the tree's `/tmp`.
 */
export declare function fileSystemSessionRuntimeOptions(tree: FileSystem, options: FileSystemSessionOptions): Required<Pick<CreateSessionRuntimeOptions, "localResourceProviderOptions" | "reportedWorkspacePath" | "reportedProjectFolder" | "excludeHooks" | "excludeProjectMcp">>;
