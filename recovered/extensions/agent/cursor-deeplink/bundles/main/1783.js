// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1783 range:187884..188559
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