// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 13553 range:878867..879340
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13553: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.intervalProvider = void 0, t.intervalProvider = { setInterval(e2, r, ...n) {
      const { delegate: s } = t.intervalProvider;
      return s?.setInterval ? s.setInterval(e2, r, ...n) : setInterval(e2, r, ...n);
    }, clearInterval(e2) {
      const { delegate: r } = t.intervalProvider;
      return (r?.clearInterval || clearInterval)(e2);
    }, delegate: void 0 };
  }