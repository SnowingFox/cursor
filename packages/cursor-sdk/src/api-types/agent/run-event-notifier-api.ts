// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/agent/run-event-notifier-api.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: agent/run-event-notifier-api.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.959Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
/**
 * Public types and implementations for run event notifiers.
 *
 * These types are inlined to avoid leaking internal runtime package types
 * in the published SDK declaration files.
 */
/**
 * Opaque resume token for a run event stream.
 *
 * Stores own the format of this token. The default local SQLite and in-memory
 * stores use numeric sequence strings, but SDK callers and custom backends
 * must only persist and pass the token back as an exclusive `afterOffset`.
 */
export type RunEventOffset = string;
/**
 * Hint that a run's event log may have new events.
 */
export interface RunEventHint {
    /**
     * Run whose durable event log may have advanced.
     */
    runId: string;
    /**
     * Latest appended offset known to the publisher. Hints are wakeups only:
     * subscribers must always re-read the durable RunEventStore and must not
     * assume every offset hint arrives exactly once.
     */
    offset: RunEventOffset;
}
/**
 * Input for subscribing to run event hints.
 */
export interface WatchRunEventsInput {
    runId: string;
    signal?: AbortSignal;
}
/**
 * Subscription to run event hints.
 */
export interface RunEventSubscription extends AsyncIterable<RunEventHint> {
    readonly ready?: Promise<void>;
}
/**
 * Notifier for publishing and subscribing to run event hints.
 */
export interface RunEventNotifier {
    /**
     * Publishes a best-effort wakeup after a durable run event append. Notifiers
     * may drop, duplicate, coalesce, or delay hints; correctness must come from
     * replaying the RunEventStore.
     */
    publishRunEventAppended(input: RunEventHint): Promise<void>;
    /**
     * Subscribes to best-effort wakeups for one run. Consumers must tolerate
     * missed hints and use each hint only as a prompt to list durable events.
     * When `ready` is present on the returned subscription, it resolves after
     * the subscription is armed server-side.
     */
    subscribeRunEvents(input: WatchRunEventsInput): RunEventSubscription;
}
/**
 * Options for creating a local run event notifier client.
 */
export interface LocalRunEventNotifierOptions {
    socketPath: string;
    connectTimeoutMs?: number;
    requestTimeoutMs?: number;
}
/**
 * Options for starting a local run event notifier server.
 */
export interface LocalRunEventNotifierServerOptions {
    socketPath: string;
}
/**
 * Local run event notifier client that connects to a notifier server via Unix socket.
 *
 * This wrapper class ensures the public API doesn't leak internal implementation types.
 */
export declare class LocalRunEventNotifier implements RunEventNotifier {
    private readonly impl;
    constructor(options: LocalRunEventNotifierOptions);
    publishRunEventAppended(input: RunEventHint): Promise<void>;
    subscribeRunEvents(input: WatchRunEventsInput): RunEventSubscription;
}
/**
 * Local run event notifier server that listens on a Unix socket.
 *
 * This wrapper class ensures the public API doesn't leak internal implementation types.
 */
export declare class LocalRunEventNotifierServer {
    private readonly impl;
    private constructor();
    static listen(options: LocalRunEventNotifierServerOptions): Promise<LocalRunEventNotifierServer>;
    close(): Promise<void>;
}
/**
 * In-memory run event notifier for testing and development.
 *
 * This wrapper class ensures the public API doesn't leak internal implementation types.
 */
export declare class InMemoryRunEventNotifier implements RunEventNotifier {
    private readonly impl;
    constructor();
    publishRunEventAppended(input: RunEventHint): Promise<void>;
    subscribeRunEvents(input: WatchRunEventsInput): RunEventSubscription;
}
/**
 * Creates a local run event notifier client.
 */
export declare function createLocalRunEventNotifier(options: LocalRunEventNotifierOptions): RunEventNotifier;
/**
 * Starts a local run event notifier server.
 */
export declare function startLocalRunEventNotifierServer(options: LocalRunEventNotifierServerOptions): Promise<LocalRunEventNotifierServer>;
/**
 * Creates an in-memory run event notifier for testing and development.
 */
export declare function createInMemoryRunEventNotifier(): RunEventNotifier;
