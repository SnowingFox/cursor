// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 48826 range:8116205..8118120
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48826: (e, t, r) => {
    "use strict";
    r.d(t, { ZQ: () => u, zy: () => l });
    var n = r(17392), s = r(89396);
    const o = "x-local-loop-lent-context", i = "x-local-loop-stall-advisory-ms", a = "x-local-loop-stall-fail-ms", c = /* @__PURE__ */ new Set([o, i, a]);
    function l(e2, t2) {
      const { action: r2 } = e2, l2 = (0, n.Wt)(t2.stallDetectorConfig?.advisoryTimeoutMs), u2 = (0, n.Wt)(t2.stallDetectorConfig?.failTimeoutMs), d2 = { ...Object.fromEntries(Object.entries(e2.headers).filter(([e3]) => !c.has(e3.toLowerCase()))), ...void 0 === l2 ? {} : { [i]: String(l2) }, ...void 0 === u2 ? {} : { [a]: String(u2) } };
      if (!(0, n.Xs)(t2)) return { action: r2, headers: d2 };
      const p = r2.clone(), m = (0, n.tK)(p);
      return void 0 === m ? { action: r2, headers: d2 } : (p.requestContextParts = void 0, m.requestContext = new s.bb({ customSubagents: t2.customSubagents ?? [], customSubagentsInfoComplete: true, ...void 0 === t2.projectFolder ? {} : { env: new s.GE({ projectFolder: t2.projectFolder }) } }), { action: p, headers: { ...d2, [o]: "1" } });
    }
    function u(e2, t2) {
      const r2 = t2.has(o) && void 0 !== e2.action ? (0, n.tK)(e2.action) : void 0, s2 = r2?.requestContext;
      void 0 !== r2 && (r2.requestContext = void 0);
      const c2 = void 0 === s2 || false === s2.customSubagentsInfoComplete || 0 === s2.customSubagents.length ? void 0 : s2.customSubagents, l2 = s2?.env?.projectFolder || void 0, u2 = d(t2, i), p = d(t2, a), m = { ...void 0 === u2 ? {} : { advisoryTimeoutMs: u2 }, ...void 0 === p ? {} : { failTimeoutMs: p } };
      return { ...void 0 === c2 ? {} : { customSubagents: c2 }, ...void 0 === l2 ? {} : { projectFolder: l2 }, ...0 === Object.keys(m).length ? {} : { stallDetectorConfig: m } };
    }
    function d(e2, t2) {
      const r2 = e2.get(t2);
      return null !== r2 && /^\d{1,10}$/.test(r2) ? Number(r2) : void 0;
    }
  }