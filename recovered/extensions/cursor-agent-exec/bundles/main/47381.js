// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 47381 range:3390682..3392199
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47381: (e, t, r) => {
    "use strict";
    r.d(t, { $W: () => a, GT: () => o, cr: () => i, tm: () => n, xI: () => s });
    const n = Object.freeze({ status: "aborted" });
    function s(e2, t2, r2) {
      function n2(r3, n3) {
        var s3;
        Object.defineProperty(r3, "_zod", { value: r3._zod ?? {}, enumerable: false }), (s3 = r3._zod).traits ?? (s3.traits = /* @__PURE__ */ new Set()), r3._zod.traits.add(e2), t2(r3, n3);
        for (const e3 in i2.prototype) e3 in r3 || Object.defineProperty(r3, e3, { value: i2.prototype[e3].bind(r3) });
        r3._zod.constr = i2, r3._zod.def = n3;
      }
      const s2 = r2?.Parent ?? Object;
      class o2 extends s2 {
      }
      function i2(e3) {
        var t3;
        const s3 = r2?.Parent ? new o2() : this;
        n2(s3, e3), (t3 = s3._zod).deferred ?? (t3.deferred = []);
        for (const e4 of s3._zod.deferred) e4();
        return s3;
      }
      return Object.defineProperty(o2, "name", { value: e2 }), Object.defineProperty(i2, "init", { value: n2 }), Object.defineProperty(i2, Symbol.hasInstance, { value: (t3) => !!(r2?.Parent && t3 instanceof r2.Parent) || t3?._zod?.traits?.has(e2) }), Object.defineProperty(i2, "name", { value: e2 }), i2;
    }
    /* @__PURE__ */ Symbol("zod_brand");
    class o extends Error {
      constructor() {
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
      }
    }
    const i = {};
    function a(e2) {
      return e2 && Object.assign(i, e2), i;
    }
  }