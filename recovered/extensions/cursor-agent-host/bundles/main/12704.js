// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 12704 range:3951290..3951893
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
12704: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.replaceBaseUrlWithApi2 = function(e2) {
      return e2 = (e2 = (e2 = (e2 = e2.replace("api3.cursor.sh", "api2.cursor.sh")).replace("api4.cursor.sh", "api2.cursor.sh")).replace(/^https:\/\/.*\.gcpp\.cursor\.sh/, "https://api2.cursor.sh")).replace(/^https:\/\/.*\.api5\.cursor\.sh/, "https://api2.cursor.sh");
    }, t.isBaseUrlHttp2 = function(e2) {
      return e2.includes("api3.cursor.sh") || e2.includes("api4.cursor.sh") || e2.includes("gcpp.cursor.sh") || e2.includes("api5.cursor.sh");
    };
  }