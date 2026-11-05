// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/session-context.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/session-context.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.972Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { Context } from "@anysphere/context";
import { type CursorRulesService, type LocalResourceProviderOptions } from "@anysphere/local-exec";
import type { CursorRule } from "@anysphere/proto/agent/v1/cursor_rules_pb.js";
import type { FileSystemSessionSettings } from "./session.js";
import type { FileSystem } from "./types.js";
/**
 * The project rules of a FileSystem session: every `.mdc` under
 * `<workspace>/.cursor/rules`, then `<workspace>/AGENTS.md`, parsed the way
 * the host rules loader parses the same files.
 *
 * A file that cannot be read or parsed is skipped, as on the host. Results are
 * memoized until `reload`.
 */
export declare class FileSystemCursorRulesService implements CursorRulesService {
    private readonly fs;
    private rules;
    private readonly listeners;
    private readonly workspace;
    constructor(fs: FileSystem, workspace?: string);
    getAllCursorRules(_ctx: Context): Promise<CursorRule[]>;
    reload(_ctx: Context): void;
    onDidChangeRules(callback: () => void): () => void;
    dispose(): void;
}
/**
 * `includeProjectRules` is true when the agent's `settingSources` include
 * `"project"`, the same switch that loads them from the host workspace.
 * `subagentsService` holds the only custom subagents the session sees; host
 * `.cursor/agents` directories are not read. Unset means none.
 */
export type FileSystemSessionContextOptions = FileSystemSessionSettings & {
    /** The session tree, including the per-run `/tmp` mount. */
    readonly fs: FileSystem;
    /** The workspace inside the tree that project rules load from. Default `/`. */
    readonly workspace?: string;
};
export type FileSystemSessionContext = Required<Pick<LocalResourceProviderOptions, "cursorRulesService" | "getAgentSkills" | "subagentsService" | "gitExecutor" | "ignoreService" | "requestContextIsWorkingDirHomeDir" | "reportProcessWorkingDirectory">>;
/**
 * Resource-provider options that keep the host project out of a FileSystem
 * session's request context: project rules come from `fs`, no skills are
 * discovered, and host git, ignore files, project subagents, and the host
 * process directory are not consulted.
 *
 * User and team settings that are not files in the host project are
 * unaffected.
 */
export declare function fileSystemSessionContext(options: FileSystemSessionContextOptions): FileSystemSessionContext;
