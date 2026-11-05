// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 47381 range:1399311..1400828
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47381: (e, t, r) => {
    "use strict";
    r.d(t, { $W: () => a, GT: () => s, cr: () => i, tm: () => n, xI: () => o });
    const n = Object.freeze({ status: "aborted" });
    function o(e2, t2, r2) {
      function n2(r3, n3) {
        var o3;
        Object.defineProperty(r3, "_zod", { value: r3._zod ?? {}, enumerable: false }), (o3 = r3._zod).traits ?? (o3.traits = /* @__PURE__ */ new Set()), r3._zod.traits.add(e2), t2(r3, n3);
        for (const e3 in i2.prototype) e3 in r3 || Object.defineProperty(r3, e3, { value: i2.prototype[e3].bind(r3) });
        r3._zod.constr = i2, r3._zod.def = n3;
      }
      const o2 = r2?.Parent ?? Object;
      class s2 extends o2 {
      }
      function i2(e3) {
        var t3;
        const o3 = r2?.Parent ? new s2() : this;
        n2(o3, e3), (t3 = o3._zod).deferred ?? (t3.deferred = []);
        for (const e4 of o3._zod.deferred) e4();
        return o3;
      }
      return Object.defineProperty(s2, "name", { value: e2 }), Object.defineProperty(i2, "init", { value: n2 }), Object.defineProperty(i2, Symbol.hasInstance, { value: (t3) => !!(r2?.Parent && t3 instanceof r2.Parent) || t3?._zod?.traits?.has(e2) }), Object.defineProperty(i2, "name", { value: e2 }), i2;
    }
    /* @__PURE__ */ Symbol("zod_brand");
    class s extends Error {
      constructor() {
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
      }
    }
    const i = {};
    function a(e2) {
      return e2 && Object.assign(i, e2), i;
    }
  }