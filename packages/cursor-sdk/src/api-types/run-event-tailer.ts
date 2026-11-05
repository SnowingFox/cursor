// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/run-event-tailer.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: run-event-tailer.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.982Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
import type { RunEventNotifier, RunEventOffset, RunEventStore, RunEventStreamStore, RunLifecycleStatus } from "./run-store-public-types.js";
import { type SDKMessage } from "./messages.js";
export interface RunEventTailerStreamOptions {
    afterOffset?: RunEventOffset;
    limit?: number;
    mode?: "replay" | "tail" | "replay-and-tail";
    signal?: AbortSignal;
    pollIntervalMs?: number;
}
interface RunEventTailerOptions {
    eventStore: RunEventStore;
    eventStreamStore?: RunEventStreamStore;
    eventNotifier?: RunEventNotifier;
    loadRunStatus: (runId: string) => Promise<RunLifecycleStatus | undefined>;
    defaultPollIntervalMs?: number;
}
export declare class RunEventTailer {
    private readonly eventStore;
    private readonly eventStreamStore;
    private readonly eventNotifier;
    private readonly loadRunStatus;
    private readonly defaultPollIntervalMs;
    constructor(options: RunEventTailerOptions);
    streamRunEvents(runId: string, options?: RunEventTailerStreamOptions): AsyncGenerator<SDKMessage, void>;
    private streamAttachedRunEvents;
    private streamPolledRunEvents;
    private drainExistingEvents;
    private listAvailableEvents;
    private decodeRunEventRecord;
    private isTerminalAndDrained;
}
export {};
