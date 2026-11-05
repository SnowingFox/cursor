// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1783 range:185720..186395
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1783: (e2) => {
    "use strict";
    e2.exports = class {
      constructor(e3) {
        this.handler = e3;
      }
      onConnect(...e3) {
        return this.handler.onConnect(...e3);
      }
      onError(...e3) {
        return this.handler.onError(...e3);
      }
      onUpgrade(...e3) {
        return this.handler.onUpgrade(...e3);
      }
      onHeaders(...e3) {
        return this.handler.onHeaders(...e3);
      }
      onData(...e3) {
        return this.handler.onData(...e3);
      }
      onComplete(...e3) {
        return this.handler.onComplete(...e3);
      }
      onBodySent(...e3) {
        return this.handler.onBodySent(...e3);
      }
    };
  }