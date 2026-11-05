// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8216 range:754624..755040
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8216: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.observeNotification = void 0, t2.observeNotification = function(e3, t3) {
      const { kind: r2, value: n2, error: o2 } = e3;
      if ("string" != typeof r2) throw new TypeError('Invalid notification, missing "kind"');
      "N" === r2 ? t3.next?.(n2) : "E" === r2 ? t3.error?.(o2) : t3.complete?.();
    };
  }