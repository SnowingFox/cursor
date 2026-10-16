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
