// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 13553 range:472020..472493
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13553: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.intervalProvider = void 0, t.intervalProvider = { setInterval(e2, r, ...n) {
      const { delegate: o } = t.intervalProvider;
      return o?.setInterval ? o.setInterval(e2, r, ...n) : setInterval(e2, r, ...n);
    }, clearInterval(e2) {
      const { delegate: r } = t.intervalProvider;
      return (r?.clearInterval || clearInterval)(e2);
    }, delegate: void 0 };
  }