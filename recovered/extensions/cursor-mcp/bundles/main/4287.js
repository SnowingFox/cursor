// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4287 range:304967..306815
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4287: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { EJ: () => u, Od: () => l, Rb: () => c, Tj: () => i2, bp: () => f, qg: () => a2, wG: () => p, xL: () => d });
    var n2 = r2(7381), o2 = r2(6749), s2 = r2(7246);
    const i2 = (e3) => (t3, r3, o3, i3) => {
      const a3 = o3 ? Object.assign(o3, { async: false }) : { async: false }, c2 = t3._zod.run({ value: r3, issues: [] }, a3);
      if (c2 instanceof Promise) throw new n2.GT();
      if (c2.issues.length) {
        const t4 = new (i3?.Err ?? e3)(c2.issues.map((e4) => s2.iR(e4, a3, n2.$W())));
        throw s2.gx(t4, i3?.callee), t4;
      }
      return c2.value;
    }, a2 = i2(o2.Kd), c = (e3) => async (t3, r3, o3, i3) => {
      const a3 = o3 ? Object.assign(o3, { async: true }) : { async: true };
      let c2 = t3._zod.run({ value: r3, issues: [] }, a3);
      if (c2 instanceof Promise && (c2 = await c2), c2.issues.length) {
        const t4 = new (i3?.Err ?? e3)(c2.issues.map((e4) => s2.iR(e4, a3, n2.$W())));
        throw s2.gx(t4, i3?.callee), t4;
      }
      return c2.value;
    }, u = c(o2.Kd), l = (e3) => (t3, r3, i3) => {
      const a3 = i3 ? { ...i3, async: false } : { async: false }, c2 = t3._zod.run({ value: r3, issues: [] }, a3);
      if (c2 instanceof Promise) throw new n2.GT();
      return c2.issues.length ? { success: false, error: new (e3 ?? o2.a$)(c2.issues.map((e4) => s2.iR(e4, a3, n2.$W()))) } : { success: true, data: c2.value };
    }, d = l(o2.Kd), p = (e3) => async (t3, r3, o3) => {
      const i3 = o3 ? Object.assign(o3, { async: true }) : { async: true };
      let a3 = t3._zod.run({ value: r3, issues: [] }, i3);
      return a3 instanceof Promise && (a3 = await a3), a3.issues.length ? { success: false, error: new e3(a3.issues.map((e4) => s2.iR(e4, i3, n2.$W()))) } : { success: true, data: a3.value };
    }, f = p(o2.Kd);
  }