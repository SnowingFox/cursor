// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: test/filesystem-errors.test.ts
// basis: webpack-key
// confidence: B
// method: generated
// run: w1-sdk-core 2026-11-05T18:00:00+08:00
// @ts-nocheck -- exercises recovered (untyped) bodies; public types live in src/api-types/**
import { describe, expect, it } from "vitest";
import {
  DeleteNotSupportedError,
  EditError,
  FileNotFoundError,
  InvalidGrepPatternError,
  NoMountError,
  PathError,
  ReadOnlyMountError,
  WriteFailedError,
  isFileNotFoundError,
  isInvalidGrepPatternError,
  remapPathError,
} from "../src/agent/filesystem/errors.js";

describe("filesystem errors (recovered from 1.3.1)", () => {
  it("normalizes paths and error names", () => {
    const err = new PathError("a//b/", "custom");
    expect(err.path).toBe("/a/b");
    expect(err.name).toBe("PathError");
    expect(new FileNotFoundError("x").message).toBe("not found: /x");
    expect(new ReadOnlyMountError("x").message).toBe("read-only mount: /x");
    expect(new NoMountError("x").message).toBe("no mount for path: /x");
    expect(new WriteFailedError("x").message).toBe("write failed: /x");
    expect(new DeleteNotSupportedError("x").message).toBe("delete is not supported: /x");
    expect(new EditError("x", "edit failed: /x").name).toBe("EditError");
  });

  it("withPath rewrites the embedded path", () => {
    const moved = new FileNotFoundError("/old").withPath("/new");
    expect(moved).toBeInstanceOf(FileNotFoundError);
    expect(moved.path).toBe("/new");
    expect(moved.message).toBe("not found: /new");
  });

  it("remapPathError rewrites error prefixes", () => {
    const remapped = remapPathError(new Error("not found: /a/b"), "/mnt/root");
    expect(remapped).toBeInstanceOf(Error);
    expect(remapped.message).toBe("not found: /mnt/root/a/b");
  });

  it("guards match the published predicates", () => {
    expect(isFileNotFoundError(new FileNotFoundError("x"))).toBe(true);
    expect(isFileNotFoundError(new Error("not found: /x"))).toBe(true);
    expect(isFileNotFoundError(new Error("other"))).toBe(false);
    const grep = new InvalidGrepPatternError("(", "/x");
    expect(grep.pattern).toBe("(");
    expect(isInvalidGrepPatternError(grep)).toBe(true);
  });
});