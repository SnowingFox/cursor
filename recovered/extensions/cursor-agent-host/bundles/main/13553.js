// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 13553 range:3960699..3961172
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