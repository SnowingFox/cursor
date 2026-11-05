// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1780 range:607313..607756
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1780: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.NetworkChangeMonitor = void 0;
    e2.NetworkChangeMonitor = class {
      constructor(t3, e3, r2) {
        this._networkId = 0;
      }
      get networkId() {
        return this._networkId;
      }
      async triggerCallbackIfDisconnected(t3, e3) {
        return { isDisconnected: false };
      }
      dispose() {
      }
    };
  }