// @recovered-by cursor-re
// purpose: minimal behavioral tests for recovered @anysphere/utils pure modules
// basis: webpack-key, confidence: B
// run: w1-sdk-runtime
import { describe, expect, it } from "vitest";
import { C as freshUuid } from "../src/fresh-uuid";
import { j as Disposable } from "../src/disposable";
import { Rv as projectDir, r_ as sanitize, sh as encode } from "../src/workspace-paths";

describe("recovered @anysphere/utils", () => {
  it("fresh-uuid returns RFC4122 v4 shaped ids", () => {
    const ids = new Set<string>();
    for (let i = 0; i < 200; i++) {
      const id = freshUuid();
      expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
      ids.add(id);
    }
    expect(ids.size).toBe(200);
  });

  it("sanitize keeps alphanumerics and collapses separators", () => {
    expect(sanitize("Hello World!@#")).toBe("Hello-World");
    expect(sanitize("--a__b--")).toBe("a-b");
  });

  it("projectDir nests .cursor/projects/<sanitized>", () => {
    expect(projectDir("/tmp/proj", "My Project")).toBe("/tmp/proj/.cursor/projects/My-Project");
  });

  it("encode percent-escapes then flattens to underscore", () => {
    expect(encode("a%b")).toBe("a_25b");
  });

  it("Disposable is constructible", () => {
    expect(new Disposable()).toBeInstanceOf(Disposable);
  });
});
