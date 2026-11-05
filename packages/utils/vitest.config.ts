// @recovered-by cursor-re
// purpose: package-local vitest config for recovered @anysphere/utils tests (root config only covers src/)
// run: w1-sdk-runtime
import { defineConfig } from "vitest/config";

export default defineConfig({
  root: import.meta.dirname,
  test: { include: ["test/**/*.test.ts"], environment: "node" },
});
