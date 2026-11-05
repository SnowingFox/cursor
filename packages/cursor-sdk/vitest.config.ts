// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/package.json sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: package test config
// basis: dts-map
// confidence: A
// method: generated
// run: w1-sdk-core 2026-11-05T18:00:00+08:00

// Offline verification resolves the published package's declared dependencies
// from the checked-in app/node_modules tree (npm install would normally provide
// them). This config only affects tests/dev; build.ts keeps them external.
import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

const appModules = resolve(import.meta.dirname, "../../app/node_modules");

export default defineConfig({
  root: resolve(import.meta.dirname, "../.."),
  resolve: {
    alias: {
      "zod/v4-mini": resolve(appModules, "zod/v4-mini/index.js"),
      "zod/v4": resolve(appModules, "zod/v4/index.js"),
      "zod/v3": resolve(appModules, "zod/v3/index.js"),
      zod: resolve(appModules, "zod/index.js"),
      "@connectrpc/connect": resolve(appModules, "@connectrpc/connect/dist/esm/index.js"),
      "@bufbuild/protobuf": resolve(appModules, "@bufbuild/protobuf/dist/esm/index.js"),
    },
  },
  test: {
    include: ["packages/cursor-sdk/test/**/*.test.ts"],
    environment: "node",
    testTimeout: 30000,
    hookTimeout: 30000,
  },
});
