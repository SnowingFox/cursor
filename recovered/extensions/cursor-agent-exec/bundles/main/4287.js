// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 4287 range:409674..411490
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4287: (e, t, r) => {
    "use strict";
    r.d(t, { EJ: () => l, Od: () => u, Rb: () => c, Tj: () => i, bp: () => m, qg: () => a, wG: () => p, xL: () => d });
    var n = r(47381), s = r(6749), o = r(7246);
    const i = (e2) => (t2, r2, s2, i2) => {
      const a2 = s2 ? Object.assign(s2, { async: false }) : { async: false }, c2 = t2._zod.run({ value: r2, issues: [] }, a2);
      if (c2 instanceof Promise) throw new n.GT();
      if (c2.issues.length) {
        const t3 = new (i2?.Err ?? e2)(c2.issues.map((e3) => o.iR(e3, a2, n.$W())));
        throw o.gx(t3, i2?.callee), t3;
      }
      return c2.value;
    }, a = i(s.Kd), c = (e2) => async (t2, r2, s2, i2) => {
      const a2 = s2 ? Object.assign(s2, { async: true }) : { async: true };
      let c2 = t2._zod.run({ value: r2, issues: [] }, a2);
      if (c2 instanceof Promise && (c2 = await c2), c2.issues.length) {
        const t3 = new (i2?.Err ?? e2)(c2.issues.map((e3) => o.iR(e3, a2, n.$W())));
        throw o.gx(t3, i2?.callee), t3;
      }
      return c2.value;
    }, l = c(s.Kd), u = (e2) => (t2, r2, i2) => {
      const a2 = i2 ? { ...i2, async: false } : { async: false }, c2 = t2._zod.run({ value: r2, issues: [] }, a2);
      if (c2 instanceof Promise) throw new n.GT();
      return c2.issues.length ? { success: false, error: new (e2 ?? s.a$)(c2.issues.map((e3) => o.iR(e3, a2, n.$W()))) } : { success: true, data: c2.value };
    }, d = u(s.Kd), p = (e2) => async (t2, r2, s2) => {
      const i2 = s2 ? Object.assign(s2, { async: true }) : { async: true };
      let a2 = t2._zod.run({ value: r2, issues: [] }, i2);
      return a2 instanceof Promise && (a2 = await a2), a2.issues.length ? { success: false, error: new e2(a2.issues.map((e3) => o.iR(e3, i2, n.$W()))) } : { success: true, data: a2.value };
    }, m = p(s.Kd);
  }