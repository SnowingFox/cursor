// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/errors.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: errors.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.949Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import { ConnectError } from "@connectrpc/connect";
import type { RunError } from "./run.js";
export interface CursorSdkErrorOptions {
    code?: string;
    status?: number;
    isRetryable?: boolean;
    cause?: unknown;
    endpoint?: string;
    requestId?: string;
    operation?: string;
}
export type CursorAgentErrorOptions = CursorSdkErrorOptions;
interface CursorSdkErrorConstructorOptions extends CursorSdkErrorOptions {
    errorName?: string;
}
export interface SdkErrorContext {
    operation?: string;
    endpoint?: string;
    status?: number;
    code?: string;
    requestId?: string;
    isRetryable?: boolean;
}
/**
 * Base error class for all Cursor SDK errors.
 *
 * This can wrap internal ConnectError objects from gRPC calls, or represent
 * SDK-level errors (like API key exchange failures) that occur before any RPC.
 */
export declare class CursorSdkError extends Error {
    /**
     * Whether this error is retryable (based on backend's retry flag or error type).
     */
    readonly isRetryable: boolean;
    /**
     * Stable SDK/backend error code, if one is available.
     */
    readonly code?: string;
    readonly status?: number;
    /**
     * The original ConnectError (for debugging purposes, if this wraps a ConnectError).
     */
    readonly cause?: unknown;
    readonly endpoint?: string;
    readonly requestId?: string;
    readonly operation?: string;
    constructor(message: string, options?: CursorSdkErrorConstructorOptions);
    toJSON(): Record<string, unknown>;
}
/**
 * Backward-compatible Agent SDK error root.
 *
 * New code should usually check `err instanceof CursorSdkError`, but existing
 * `CursorAgentError` checks continue to work for all current SDK errors.
 */
export declare class CursorAgentError extends CursorSdkError {
    constructor(message: string, options?: CursorSdkErrorConstructorOptions);
}
/**
 * Authentication-related errors (401).
 *
 * Examples: Invalid API key, not logged in, insufficient permissions.
 */
export declare class AuthenticationError extends CursorAgentError {
    constructor(message: string, options?: CursorSdkErrorOptions);
}
/**
 * Rate limiting errors (429).
 *
 * Examples: Too many requests, usage limits exceeded.
 */
export declare class RateLimitError extends CursorAgentError {
    constructor(message: string, options?: CursorSdkErrorOptions);
}
/**
 * Configuration errors (400, 404).
 *
 * Examples: Bad API key, invalid model name, invalid request parameters.
 */
export declare class ConfigurationError extends CursorAgentError {
    constructor(message: string, options?: CursorSdkErrorOptions);
}
/**
 * Agent busy error (409).
 *
 * Thrown when attempting to create a new run while the agent already has an
 * active run in progress. This is a conflict/state error rather than a
 * configuration problem, but is non-retryable without user intervention.
 */
export declare class AgentBusyError extends CursorAgentError {
    constructor(message: string, options?: CursorSdkErrorOptions);
}
/**
 * The caller has not connected the SCM integration for the target
 * repository's provider. Distinct from `[repository_access]`, which means
 * the integration is connected but doesn't cover that repo.
 */
export declare class IntegrationNotConnectedError extends ConfigurationError {
    readonly helpUrl: string;
    readonly provider: string;
    constructor(message: string, options: CursorSdkErrorOptions & {
        helpUrl: string;
        provider: string;
    });
    toJSON(): Record<string, unknown>;
}
/**
 * Network/server errors (503, 504, etc.).
 *
 * Examples: Service unavailable, timeout, internal server errors.
 */
export declare class NetworkError extends CursorAgentError {
    constructor(message: string, options?: CursorSdkErrorOptions);
}
/**
 * Unknown or unclassified errors. The generic fallback bucket used when an
 * error can't be mapped to a more specific class. Despite the name, this is
 * *not* a missing-agent signal — use {@link AgentNotFoundError} for that.
 */
export declare class UnknownAgentError extends CursorAgentError {
    constructor(message: string, options?: CursorSdkErrorOptions);
}
/**
 * The requested agent does not exist (or isn't visible under the resolved
 * workspace `cwd`). Carries the stable `agent_not_found` code so transports map
 * it to a not-found status.
 */
export declare class AgentNotFoundError extends CursorAgentError {
    constructor(message: string, options?: CursorSdkErrorOptions);
}
export declare function wrapSdkError(err: unknown, context?: SdkErrorContext): CursorSdkError;
export declare function toRunError(err: unknown): RunError;
/**
 * The local run store has one error string. A code is written as
 * `[code] message` so a later read can split it. Text with no code is
 * stored unchanged.
 */
export declare function formatStoredRunError(error: RunError): string;
/** Split a stored error string back into message and, when present, code. */
export declare function runErrorFromStored(stored: string): RunError;
/**
 * Convert a generic Error to an SDK error if it represents a ConnectError.
 *
 * Handles cases where errors may be wrapped or serialized.
 */
export declare function convertError(err: unknown): CursorAgentError | Error;
/**
 * Convert a ConnectError to a user-friendly SDK error.
 *
 * Extracts the ErrorDetails proto, reads the user-facing message,
 * and wraps it in an appropriate SDK error class.
 */
export declare function convertConnectError(error: ConnectError): CursorAgentError;
export {};
