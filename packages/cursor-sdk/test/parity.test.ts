// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/*.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: test/parity.test.ts
// basis: webpack-key
// confidence: B
// method: generated
// run: w1-sdk-core 2026-11-05T18:00:00+08:00
// @ts-nocheck -- exercises recovered (untyped) bodies; public types live in src/api-types/**
import { describe, expect, it } from "vitest";
import { writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

interface Surface {
  kind: string;
  proto: string[];
  errorName?: string;
}

function surfaceOf(mod: Record<string, unknown>): Map<string, Surface> {
  const out = new Map<string, Surface>();
  for (const [name, value] of Object.entries(mod)) {
    const kind = typeof value;
    let proto: string[] = [];
    let errorName: string | undefined;
    if (kind === "function") {
      const fn = value as { prototype?: object };
      if (fn.prototype) proto = Object.getOwnPropertyNames(fn.prototype).sort();
      if (fn.prototype instanceof Error) {
        try {
          const instance = new (value as new (...args: unknown[]) => Error)("/parity/probe");
          errorName = instance.name;
        } catch {
          errorName = undefined;
        }
      }
    }
    out.set(name, { kind, proto, errorName });
  }
  return out;
}

describe("@cursor/sdk export parity vs published 1.3.1", () => {
  it("compares runtime surface with the vendored published ESM", async () => {
    const vendor = (await import("../../../.vendor/cursor-sdk-1.3.1/dist/esm/index.js")) as Record<string, unknown>;
    const rebuilt = (await import("../src/index.js")) as Record<string, unknown>;
    const vendorSurface = surfaceOf(vendor);
    const rebuiltSurface = surfaceOf(rebuilt);

    const missing = [...vendorSurface.keys()].filter((name) => !rebuiltSurface.has(name)).sort();
    const present = [...vendorSurface.keys()].filter((name) => rebuiltSurface.has(name));
    const kindMismatch = present.filter((name) => vendorSurface.get(name)!.kind !== rebuiltSurface.get(name)!.kind);
    const protoChecked: string[] = [];
    const protoMismatch: { name: string; missing: string[] }[] = [];
    for (const name of present) {
      const v = vendorSurface.get(name)!;
      const r = rebuiltSurface.get(name)!;
      if (v.kind !== "function" || v.proto.length === 0) continue;
      protoChecked.push(name);
      const missingMethods = v.proto.filter((m) => !r.proto.includes(m));
      if (missingMethods.length > 0) protoMismatch.push({ name, missing: missingMethods });
    }
    const errorNames = present
      .filter((name) => vendorSurface.get(name)!.errorName !== undefined)
      .map((name) => ({ name, vendor: vendorSurface.get(name)!.errorName, rebuilt: rebuiltSurface.get(name)!.errorName }));
    const errorMismatch = errorNames.filter((e) => e.vendor !== e.rebuilt);

    const sqliteVendor = (await import("../../../.vendor/cursor-sdk-1.3.1/dist/esm/sqlite.js")) as Record<string, unknown>;
    const sqliteRebuilt = (await import("../src/sqlite.js")) as Record<string, unknown>;
    const sqliteMissing = Object.keys(sqliteVendor).filter((name) => !(name in sqliteRebuilt));

    const coverage = {
      generatedAt: new Date().toISOString(),
      vendorExports: vendorSurface.size,
      rebuiltExports: rebuiltSurface.size,
      present: present.length,
      coveragePct: Number(((present.length / vendorSurface.size) * 100).toFixed(1)),
      missing,
      kindMismatch,
      protoChecked: protoChecked.length,
      protoMismatch,
      errorNames,
      errorMismatch,
      sqlite: { vendorExports: Object.keys(sqliteVendor).length, rebuiltExports: Object.keys(sqliteRebuilt).length, missing: sqliteMissing },
    };
    const outDir = resolve(process.cwd(), "docs/recovery/runs/sdk-core");
    mkdirSync(outDir, { recursive: true });
    writeFileSync(resolve(outDir, "parity-coverage.json"), JSON.stringify(coverage, null, 2));
    console.log("[parity] " + JSON.stringify({ vendor: coverage.vendorExports, rebuilt: coverage.rebuiltExports, present: coverage.present, coveragePct: coverage.coveragePct, kindMismatch: kindMismatch.length, protoMismatch: protoMismatch.length, errorMismatch: errorMismatch.length, sqliteMissing: sqliteMissing.length }));

    expect(kindMismatch).toEqual([]);
    expect(errorMismatch).toEqual([]);
    expect(protoMismatch).toEqual([]);
    expect(present.length).toBeGreaterThanOrEqual(60);
    expect(coverage.coveragePct).toBeGreaterThan(60);
  });
});