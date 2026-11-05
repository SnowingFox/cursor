// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: test/smoke.test.ts
// basis: dts-map
// confidence: B
// method: generated
// run: w1-sdk-core 2026-11-05T18:00:00+08:00
// @ts-nocheck -- exercises recovered (untyped) bodies; public types live in src/api-types/**
import { describe, expect, it } from "vitest";
import * as sdk from "../src/index.js";

describe("@cursor/sdk smoke (no network)", () => {
  it("imports the package entry and exposes recovered constants", () => {
    expect(sdk.LOCAL_RUN_STREAM_SCHEMA_VERSION).toBe(1);
    expect(sdk.FILE_SYSTEM_SCAN_LIMIT).toBeGreaterThan(0);
    expect(typeof sdk.configureCursorSdk).toBe("function");
    expect(typeof sdk.getDefaultSdkStateRoot).toBe("function");
  });

  it("never touches the network while decoding local run stream events", () => {
    const original = globalThis.fetch;
    globalThis.fetch = (() => {
      throw new Error("network disabled in smoke test");
    }) as typeof fetch;
    try {
      const event = sdk.createSdkMessageRunStreamEvent({
        type: "status",
        agent_id: "a",
        run_id: "r",
        status: "RUNNING",
      });
      const decoded = sdk.decodeLocalRunStreamEvent(event);
      expect(sdk.localRunStreamEventToSdkMessage(decoded)).toMatchObject({ type: "status", status: "RUNNING" });
      expect(sdk.isTerminalLocalRunStreamEvent(decoded)).toBe(false);
    } finally {
      globalThis.fetch = original;
    }
  });

  it("serializes errors without leaking undefined fields", () => {
    const err = new sdk.CursorSdkError("smoke", { code: "smoke_test" });
    expect(err.toJSON()).toEqual({ name: "CursorSdkError", message: "smoke", code: "smoke_test", isRetryable: false });
  });
});