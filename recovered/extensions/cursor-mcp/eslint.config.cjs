// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/eslint.config.cjs sha256:842f9f80283f33d83bbfbe0f1d67f14ef957b678c4a3bd1f9ec5bc4711a08a6f
// module: (adopted engineering file)
// basis: shipped-config confidence: A
// method: adopted-source
// run: ext-p0 2026-11-05T10:09:31.841Z

"use strict";
const { defineConfig } = require("eslint/config");
const tseslint = require("typescript-eslint");
module.exports = defineConfig({
  files: ["**/*.ts"],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      warnOnUnsupportedTypeScriptVersion: false
    }
  },
  extends: [tseslint.configs.recommended]
});
