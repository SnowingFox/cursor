"use strict";
const withDefaults = require("../cursor.webpack.config");
module.exports = withDefaults({
  context: __dirname,
  entry: {
    main: "./src/main.ts"
  }
});
