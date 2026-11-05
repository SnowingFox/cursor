// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 22301 range:641115..641618
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22301: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.TestTools = t.Immediate = void 0;
    let r, n = 1;
    const o = {};
    function s(e2) {
      return e2 in o && (delete o[e2], true);
    }
    t.Immediate = { setImmediate(e2) {
      const t2 = n++;
      return o[t2] = true, r || (r = Promise.resolve()), r.then(() => s(t2) && e2()), t2;
    }, clearImmediate(e2) {
      s(e2);
    } }, t.TestTools = { pending: () => Object.keys(o).length };
  }