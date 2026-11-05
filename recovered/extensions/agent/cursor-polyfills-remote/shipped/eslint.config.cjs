// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/eslint.config.cjs sha256:842f9f80283f33d83bbfbe0f1d67f14ef957b678c4a3bd1f9ec5bc4711a08a6f
// module: shipped:eslint.config.cjs range:0..399
// basis: shipped-source confidence: A
// method: shipped-config
// run: ext-agent 2026-11-05T10:20:51.157Z
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
