// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 1783 range:181529..182204
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
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