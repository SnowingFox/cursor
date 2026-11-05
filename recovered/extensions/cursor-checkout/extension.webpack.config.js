// @recovered-by cursor-re
// artifact: app/extensions/cursor-checkout/extension.webpack.config.js sha256:3dda5cc8750c0fa260e9a4ca36ca8d269501a87ce42d9dbba3dffaebad95ef9b
// module: (adopted engineering file)
// basis: shipped-config confidence: A
// method: adopted-source
// run: ext-p0 2026-11-05T10:09:31.841Z

"use strict";
const withDefaults = require("../cursor.webpack.config");
module.exports = withDefaults({
  context: __dirname,
  entry: {
    main: "./src/main.ts"
  }
});
