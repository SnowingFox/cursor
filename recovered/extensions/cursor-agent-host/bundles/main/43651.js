// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 43651 range:7772705..7773379
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
43651: (e) => {
    "use strict";
    e.exports = class {
      constructor(e2) {
        this.handler = e2;
      }
      onConnect(...e2) {
        return this.handler.onConnect(...e2);
      }
      onError(...e2) {
        return this.handler.onError(...e2);
      }
      onUpgrade(...e2) {
        return this.handler.onUpgrade(...e2);
      }
      onHeaders(...e2) {
        return this.handler.onHeaders(...e2);
      }
      onData(...e2) {
        return this.handler.onData(...e2);
      }
      onComplete(...e2) {
        return this.handler.onComplete(...e2);
      }
      onBodySent(...e2) {
        return this.handler.onBodySent(...e2);
      }
    };
  }