"use strict";
const path = require("path");
const withDefaults = require("../cursor.webpack.config");
module.exports = withDefaults({
  context: __dirname,
  entry: {
    extension: "./src/extension.ts"
  }
});
module.exports.module.rules.push({
  test: /@jsquash[\\/]webp[\\/]codec[\\/]enc[\\/]webp_enc(_simd)?\.wasm$/,
  type: "asset/resource"
});
module.exports.output.assetModuleFilename = "[base]";
module.exports.resolve = module.exports.resolve || {};
module.exports.resolve.alias = {
  ...module.exports.resolve.alias,
  "@anysphere/computer-use/protocol$": path.resolve(
    __dirname,
    "../../../packages/computer-use/protocol/sidecar-protocol.ts"
  ),
  // The sidecar crate's checked-in Cursor product profile, bundled from the
  // same file the crate, the release pipeline, and the CLI installer read.
  "@anysphere/computer-use/windows/profiles/cursor-product-profile.json$": path.resolve(
    __dirname,
    "../../../packages/computer-use/windows/profiles/cursor-product-profile.json"
  ),
  // The protocol source imports `zod/v3`; resolve it from this extension's
  // node_modules because the walk-up from packages/computer-use finds no
  // install in the vscode CI checkout.
  "zod/v3$": path.join(withDefaults.resolveWorkspaceModule(__dirname, "zod"), "v3/index.js")
};
