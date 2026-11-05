// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3651 range:985586..986261
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3651: (t2) => {
    "use strict";
    t2.exports = class {
      constructor(t3) {
        this.handler = t3;
      }
      onConnect(...t3) {
        return this.handler.onConnect(...t3);
      }
      onError(...t3) {
        return this.handler.onError(...t3);
      }
      onUpgrade(...t3) {
        return this.handler.onUpgrade(...t3);
      }
      onHeaders(...t3) {
        return this.handler.onHeaders(...t3);
      }
      onData(...t3) {
        return this.handler.onData(...t3);
      }
      onComplete(...t3) {
        return this.handler.onComplete(...t3);
      }
      onBodySent(...t3) {
        return this.handler.onBodySent(...t3);
      }
    };
  }