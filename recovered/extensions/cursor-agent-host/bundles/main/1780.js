// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 1780 range:88036..88473
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1780: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.NetworkChangeMonitor = void 0;
    t.NetworkChangeMonitor = class {
      constructor(e2, t2, r) {
        this._networkId = 0;
      }
      get networkId() {
        return this._networkId;
      }
      async triggerCallbackIfDisconnected(e2, t2) {
        return { isDisconnected: false };
      }
      dispose() {
      }
    };
  }