// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/run.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: run.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.990Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import { ConfigurationError } from "./errors.js";
import type { SDKMessage } from "./messages.js";
import type { ModelSelection } from "./options.js";
import type { ConversationTurn } from "./types/conversation-types.js";
import type { TokenUsage } from "./usage-types.js";
export type RunStatus = "running" | "finished" | "error" | "cancelled";
export type RunResultStatus = Exclude<RunStatus, "running">;
export type RunOperation = "stream" | "wait" | "cancel" | "conversation";
/**
 * What the caller must do with a steered message: drop it because the turn has
 * it ("complete_delivered"), or send it as an ordinary follow-up
 * ("revert_to_followup"). Ownership only transfers on the former.
 *
 * These are agent-core's SteerAckOutcome values minus "confirm_steering",
 * which says the server admitted the injection but the turn has not appended
 * it yet. That is an instruction to retag a row in a host's steer outbox and
 * keep waiting — meaningful to the IDE and the CLI, but not to a one-shot
 * promise, which has nowhere to put "ask me again later". {@link
 * Run.steer} stays pending through it and settles on whichever
 * terminal outcome follows, so it can never be observed here.
 */
export type SteerAckOutcome = "complete_delivered" | "revert_to_followup";
export declare class UnsupportedRunOperationError extends ConfigurationError {
    constructor(operation: RunOperation, reason?: string);
}
export interface RunGitBranchInfo {
    repoUrl: string;
    branch?: string;
    prUrl?: string;
}
export interface RunGitInfo {
    branches: RunGitBranchInfo[];
}
export interface RunError {
    message: string;
    code?: string;
}
export interface RunResult {
    id: string;
    requestId?: string;
    status: RunResultStatus;
    result?: string;
    /** Terminal failure details when available. */
    error?: RunError;
    model?: ModelSelection;
    durationMs?: number;
    git?: RunGitInfo;
    /** Cumulative token usage across turns that reported it; absent when none did. */
    usage?: TokenUsage;
}
export interface Run {
    readonly id: string;
    readonly requestId?: string;
    readonly agentId: string;
    supports(operation: RunOperation): boolean;
    unsupportedReason(operation: RunOperation): string | undefined;
    stream(): AsyncGenerator<SDKMessage, void>;
    conversation(): Promise<ConversationTurn[]>;
    wait(): Promise<RunResult>;
    cancel(): Promise<void>;
    steer?(text: string): Promise<SteerAckOutcome>;
    readonly status: RunStatus;
    onDidChangeStatus(listener: (status: RunStatus) => void): () => void;
    readonly result?: string;
    /** Terminal failure details when available. */
    readonly error?: RunError;
    readonly model?: ModelSelection;
    readonly durationMs?: number;
    /** Cumulative usage once known on this handle; absent until turns report it (or when unavailable). */
    readonly usage?: TokenUsage;
    readonly git?: RunGitInfo;
    readonly createdAt?: number;
}
