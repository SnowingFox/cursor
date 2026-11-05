// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 22301 range:1052208..1052711
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22301: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.TestTools = t.Immediate = void 0;
    let r, n = 1;
    const s = {};
    function o(e2) {
      return e2 in s && (delete s[e2], true);
    }
    t.Immediate = { setImmediate(e2) {
      const t2 = n++;
      return s[t2] = true, r || (r = Promise.resolve()), r.then(() => o(t2) && e2()), t2;
    }, clearImmediate(e2) {
      o(e2);
    } }, t.TestTools = { pending: () => Object.keys(s).length };
  }