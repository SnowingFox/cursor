// @recovered-by cursor-re
// artifact: app/extensions/cursor-socket/extension.webpack.config.js sha256:3dda5cc8750c0fa260e9a4ca36ca8d269501a87ce42d9dbba3dffaebad95ef9b
// module: shipped:extension.webpack.config.js range:0..171
// basis: shipped-source confidence: A
// method: shipped-config
// run: ext-agent 2026-11-05T10:20:51.157Z
"use strict";
const withDefaults = require("../cursor.webpack.config");
module.exports = withDefaults({
  context: __dirname,
  entry: {
    main: "./src/main.ts"
  }
});
