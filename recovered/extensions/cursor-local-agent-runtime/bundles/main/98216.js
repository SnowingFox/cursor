// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 98216 range:7919445..7919849
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98216: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.observeNotification = void 0, t.observeNotification = function(e2, t2) {
      const { kind: r, value: n, error: o } = e2;
      if ("string" != typeof r) throw new TypeError('Invalid notification, missing "kind"');
      "N" === r ? t2.next?.(n) : "E" === r ? t2.error?.(o) : t2.complete?.();
    };
  }