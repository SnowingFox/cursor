// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2301 range:202073..202596
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2301: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.TestTools = t2.Immediate = void 0;
    let r2, n2 = 1;
    const o2 = {};
    function s2(e3) {
      return e3 in o2 && (delete o2[e3], true);
    }
    t2.Immediate = { setImmediate(e3) {
      const t3 = n2++;
      return o2[t3] = true, r2 || (r2 = Promise.resolve()), r2.then(() => s2(t3) && e3()), t3;
    }, clearImmediate(e3) {
      s2(e3);
    } }, t2.TestTools = { pending: () => Object.keys(o2).length };
  }