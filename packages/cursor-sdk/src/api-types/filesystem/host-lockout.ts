// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/filesystem/host-lockout.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: filesystem/host-lockout.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.967Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import { type ExecResource } from "@anysphere/agent-exec";
export declare const SHELL_UNAVAILABLE_MESSAGE: string;
export declare const READ_LINTS_UNAVAILABLE_MESSAGE: string;
export declare const GIT_UNAVAILABLE_MESSAGE: string;
interface ExecutorRegistry {
    register<T>(resource: ExecResource<T>, value: T): void;
}
/**
 * Replaces every host executor a session on a FileSystem must never run
 * with one that refuses. The local resource provider registers the shell
 * stream, background shell, stdin, mini-SWE bash, diagnostics, and git diff
 * executors on the host even when its default shell is suppressed, and the
 * Shell tool runs through the stream and background executors, so a
 * session's tool restriction alone does not keep them unreachable.
 */
export declare function lockOutHostExecutors(registry: ExecutorRegistry): void;
export {};
