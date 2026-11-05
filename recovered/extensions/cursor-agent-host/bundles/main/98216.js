// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 98216 range:15073106..15073510
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98216: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.observeNotification = void 0, t.observeNotification = function(e2, t2) {
      const { kind: r, value: n, error: s } = e2;
      if ("string" != typeof r) throw new TypeError('Invalid notification, missing "kind"');
      "N" === r ? t2.next?.(n) : "E" === r ? t2.error?.(s) : t2.complete?.();
    };
  }