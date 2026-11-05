// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: test/messages.test.ts
// basis: webpack-key
// confidence: B
// method: generated
// run: w1-sdk-core 2026-11-05T18:00:00+08:00
// @ts-nocheck -- exercises recovered (untyped) bodies; public types live in src/api-types/**
import { describe, expect, it } from "vitest";
import {
  LOCAL_RUN_STREAM_EVENT_TYPE,
  LOCAL_RUN_STREAM_SCHEMA_VERSION,
  createSdkMessageRunStreamEvent,
  decodeLocalRunStreamEvent,
  decodeSdkMessageRunStreamEvent,
  isTerminalLocalRunStreamEvent,
  localRunStreamEventToSdkMessage,
} from "../src/agent/messages.js";
import { ConfigurationError } from "../src/agent/errors.js";

const assistant = {
  type: "assistant" as const,
  agent_id: "agent-1",
  run_id: "run-1",
  message: { role: "assistant" as const, content: [{ type: "text" as const, text: "hi" }] },
};

describe("messages (recovered from 1.3.1)", () => {
  it("exposes the published stream constants", () => {
    expect(LOCAL_RUN_STREAM_SCHEMA_VERSION).toBe(1);
    expect(LOCAL_RUN_STREAM_EVENT_TYPE).toBe("run_stream_event");
  });

  it("round-trips SDK messages through the stream envelope", () => {
    const event = createSdkMessageRunStreamEvent(assistant);
    expect(event).toMatchObject({ schemaVersion: 1, type: "sdk_message", agentId: "agent-1", runId: "run-1" });
    const decoded = decodeLocalRunStreamEvent(JSON.parse(JSON.stringify(event)));
    expect(decoded.type).toBe("sdk_message");
    expect(localRunStreamEventToSdkMessage(decoded)).toEqual(assistant);
    expect(decodeSdkMessageRunStreamEvent(JSON.parse(JSON.stringify(event)))).toEqual(assistant);
    expect(isTerminalLocalRunStreamEvent(decoded)).toBe(false);
  });

  it("treats result and done events as terminal", () => {
    const result = decodeLocalRunStreamEvent({ schemaVersion: 1, type: "result", agentId: "a", runId: "r", status: "finished" });
    expect(isTerminalLocalRunStreamEvent(result)).toBe(true);
    const done = decodeLocalRunStreamEvent({ schemaVersion: 1, type: "done", agentId: "a", runId: "r" });
    expect(isTerminalLocalRunStreamEvent(done)).toBe(true);
  });

  it("rejects malformed payloads with ConfigurationError", () => {
    expect(() => decodeLocalRunStreamEvent({ schemaVersion: 2, type: "done", agentId: "a", runId: "r" })).toThrow(ConfigurationError);
    expect(() => decodeLocalRunStreamEvent("nope")).toThrow(ConfigurationError);
    expect(() => decodeSdkMessageRunStreamEvent({ schemaVersion: 1, type: "done", agentId: "a", runId: "r" })).toThrow(ConfigurationError);
  });
});