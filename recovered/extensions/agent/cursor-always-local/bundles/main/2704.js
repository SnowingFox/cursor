// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2704 range:776969..777576
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2704: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.replaceBaseUrlWithApi2 = function(t3) {
      return t3 = (t3 = (t3 = (t3 = t3.replace("api3.cursor.sh", "api2.cursor.sh")).replace("api4.cursor.sh", "api2.cursor.sh")).replace(/^https:\/\/.*\.gcpp\.cursor\.sh/, "https://api2.cursor.sh")).replace(/^https:\/\/.*\.api5\.cursor\.sh/, "https://api2.cursor.sh");
    }, e2.isBaseUrlHttp2 = function(t3) {
      return t3.includes("api3.cursor.sh") || t3.includes("api4.cursor.sh") || t3.includes("gcpp.cursor.sh") || t3.includes("api5.cursor.sh");
    };
  }