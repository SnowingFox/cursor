// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 98216 range:11686098..11686502
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