// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7381 range:686962..688495
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7381: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { $W: () => a2, GT: () => s2, cr: () => i2, tm: () => n2, xI: () => o2 });
    const n2 = Object.freeze({ status: "aborted" });
    function o2(e3, t3, r3) {
      function n3(r4, n4) {
        var o4;
        Object.defineProperty(r4, "_zod", { value: r4._zod ?? {}, enumerable: false }), (o4 = r4._zod).traits ?? (o4.traits = /* @__PURE__ */ new Set()), r4._zod.traits.add(e3), t3(r4, n4);
        for (const e4 in i3.prototype) e4 in r4 || Object.defineProperty(r4, e4, { value: i3.prototype[e4].bind(r4) });
        r4._zod.constr = i3, r4._zod.def = n4;
      }
      const o3 = r3?.Parent ?? Object;
      class s3 extends o3 {
      }
      function i3(e4) {
        var t4;
        const o4 = r3?.Parent ? new s3() : this;
        n3(o4, e4), (t4 = o4._zod).deferred ?? (t4.deferred = []);
        for (const e5 of o4._zod.deferred) e5();
        return o4;
      }
      return Object.defineProperty(s3, "name", { value: e3 }), Object.defineProperty(i3, "init", { value: n3 }), Object.defineProperty(i3, Symbol.hasInstance, { value: (t4) => !!(r3?.Parent && t4 instanceof r3.Parent) || t4?._zod?.traits?.has(e3) }), Object.defineProperty(i3, "name", { value: e3 }), i3;
    }
    /* @__PURE__ */ Symbol("zod_brand");
    class s2 extends Error {
      constructor() {
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
      }
    }
    const i2 = {};
    function a2(e3) {
      return e3 && Object.assign(i2, e3), i2;
    }
  }