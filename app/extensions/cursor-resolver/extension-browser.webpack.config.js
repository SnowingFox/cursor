"use strict";
const path = require("path");
const withBrowserDefaults = require("../cursor.webpack.config").browser;
const config = withBrowserDefaults({
  context: __dirname,
  entry: {
    extension: "./src/main.ts"
  },
  output: {
    filename: "main.js"
  },
  resolve: {
    alias: {
      // Mirror tsconfig.json path mappings for webpack
      "proto": path.resolve(__dirname, "..", "..", "src", "proto")
    },
    extensionAlias: {
      // Override to prefer .ts over .js so proto files use the TS source
      // (which goes through our rewrite loader) instead of pre-compiled .js
      // (which has unresolvable require() calls)
      ".js": [".ts", ".js"]
    }
  }
});
config.module.rules.push({
  test: /\.ts$/,
  enforce: "pre",
  loader: path.resolve(__dirname, "rewrite-bufbuild-loader.js")
});
module.exports = config;
