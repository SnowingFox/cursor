// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 90393 range:13024191..13025001
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90393: (e, t, r) => {
    "use strict";
    r.d(t, { Y$: () => i, _3: () => a, cM: () => o, z7: () => n });
    const n = 65536, s = Math.max(1, Math.floor(n / 8));
    function o(e2) {
      return { announced: e2 ?? /* @__PURE__ */ new Set(), leasedIds: /* @__PURE__ */ new Set(), chain: Promise.resolve() };
    }
    async function i(e2, t2) {
      const r2 = e2.chain.then(() => t2()), n2 = r2.then(() => {
      }, () => {
      });
      return e2.chain = n2, r2;
    }
    function a(e2, t2) {
      let r2 = 0;
      for (const s2 of t2) 0 === s2.length || e2.has(s2) || (e2.size >= n && c(e2), e2.add(s2), r2 += 1);
      return r2;
    }
    function c(e2) {
      const t2 = [];
      for (const r2 of e2) if (t2.push(r2), t2.length >= s) break;
      for (const r2 of t2) e2.delete(r2);
    }
  }