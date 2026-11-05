// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: test/errors.test.ts
// basis: webpack-key
// confidence: B
// method: generated
// run: w1-sdk-core 2026-11-05T18:00:00+08:00
// @ts-nocheck -- exercises recovered (untyped) bodies; public types live in src/api-types/**
import { describe, expect, it } from "vitest";
import {
  AgentBusyError,
  AgentNotFoundError,
  AuthenticationError,
  ConfigurationError,
  CursorAgentError,
  CursorSdkError,
  IntegrationNotConnectedError,
  NetworkError,
  RateLimitError,
  UnknownAgentError,
  convertError,
  wrapSdkError,
} from "../src/agent/errors.js";

describe("errors (recovered from 1.3.1)", () => {
  it("serializes only defined fields", () => {
    const err = new CursorSdkError("boom", { code: "internal", status: 500, isRetryable: true, endpoint: "/v1/x" });
    expect(err.name).toBe("CursorSdkError");
    expect(err.isRetryable).toBe(true);
    expect(err.toJSON()).toEqual({ name: "CursorSdkError", message: "boom", code: "internal", status: 500, isRetryable: true, endpoint: "/v1/x" });
  });

  it("subclasses keep the published error names", () => {
    expect(new CursorAgentError("x").name).toBe("CursorAgentError");
    expect(new AuthenticationError("x").name).toBe("AuthenticationError");
    expect(new RateLimitError("x").name).toBe("RateLimitError");
    expect(new ConfigurationError("x").name).toBe("ConfigurationError");
    expect(new AgentBusyError("x").name).toBe("AgentBusyError");
    expect(new NetworkError("x").name).toBe("NetworkError");
    expect(new UnknownAgentError("x").name).toBe("UnknownAgentError");
    expect(new AgentNotFoundError("x").code).toBe("agent_not_found");
    const integration = new IntegrationNotConnectedError("x", { helpUrl: "https://h", provider: "github" });
    expect(integration.toJSON()).toMatchObject({ helpUrl: "https://h", provider: "github" });
  });

  it("wrapSdkError returns CursorSdkError instances", () => {
    const wrapped = wrapSdkError(new Error("plain"), { operation: "test" });
    expect(wrapped).toBeInstanceOf(CursorSdkError);
    expect(wrapped.message).toContain("plain");
    const already = new CursorSdkError("already");
    expect(wrapSdkError(already)).toBe(already);
  });

  it("convertError passes plain errors through", () => {
    const plain = new Error("plain");
    expect(convertError(plain)).toBe(plain);
  });
});