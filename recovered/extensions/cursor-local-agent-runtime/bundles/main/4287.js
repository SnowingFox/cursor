// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 4287 range:43195..45011
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4287: (e, t, r) => {
    "use strict";
    r.d(t, { EJ: () => c, Od: () => u, Rb: () => l, Tj: () => i, bp: () => h, qg: () => a, wG: () => p, xL: () => d });
    var n = r(47381), o = r(6749), s = r(7246);
    const i = (e2) => (t2, r2, o2, i2) => {
      const a2 = o2 ? Object.assign(o2, { async: false }) : { async: false }, l2 = t2._zod.run({ value: r2, issues: [] }, a2);
      if (l2 instanceof Promise) throw new n.GT();
      if (l2.issues.length) {
        const t3 = new (i2?.Err ?? e2)(l2.issues.map((e3) => s.iR(e3, a2, n.$W())));
        throw s.gx(t3, i2?.callee), t3;
      }
      return l2.value;
    }, a = i(o.Kd), l = (e2) => async (t2, r2, o2, i2) => {
      const a2 = o2 ? Object.assign(o2, { async: true }) : { async: true };
      let l2 = t2._zod.run({ value: r2, issues: [] }, a2);
      if (l2 instanceof Promise && (l2 = await l2), l2.issues.length) {
        const t3 = new (i2?.Err ?? e2)(l2.issues.map((e3) => s.iR(e3, a2, n.$W())));
        throw s.gx(t3, i2?.callee), t3;
      }
      return l2.value;
    }, c = l(o.Kd), u = (e2) => (t2, r2, i2) => {
      const a2 = i2 ? { ...i2, async: false } : { async: false }, l2 = t2._zod.run({ value: r2, issues: [] }, a2);
      if (l2 instanceof Promise) throw new n.GT();
      return l2.issues.length ? { success: false, error: new (e2 ?? o.a$)(l2.issues.map((e3) => s.iR(e3, a2, n.$W()))) } : { success: true, data: l2.value };
    }, d = u(o.Kd), p = (e2) => async (t2, r2, o2) => {
      const i2 = o2 ? Object.assign(o2, { async: true }) : { async: true };
      let a2 = t2._zod.run({ value: r2, issues: [] }, i2);
      return a2 instanceof Promise && (a2 = await a2), a2.issues.length ? { success: false, error: new e2(a2.issues.map((e3) => s.iR(e3, i2, n.$W()))) } : { success: true, data: a2.value };
    }, h = p(o.Kd);
  }