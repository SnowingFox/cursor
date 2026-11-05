// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6749 range:574831..576573
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6749: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { JM: () => c, Kd: () => a2, Wk: () => u, a$: () => i2 });
    var n2 = r2(7381), o2 = r2(7246);
    const s2 = (e3, t3) => {
      e3.name = "$ZodError", Object.defineProperty(e3, "_zod", { value: e3._zod, enumerable: false }), Object.defineProperty(e3, "issues", { value: t3, enumerable: false }), Object.defineProperty(e3, "message", { get: () => JSON.stringify(t3, o2.k8, 2), enumerable: true }), Object.defineProperty(e3, "toString", { value: () => e3.message, enumerable: false });
    }, i2 = (0, n2.xI)("$ZodError", s2), a2 = (0, n2.xI)("$ZodError", s2, { Parent: Error });
    function c(e3, t3 = (e4) => e4.message) {
      const r3 = {}, n3 = [];
      for (const o3 of e3.issues) o3.path.length > 0 ? (r3[o3.path[0]] = r3[o3.path[0]] || [], r3[o3.path[0]].push(t3(o3))) : n3.push(t3(o3));
      return { formErrors: n3, fieldErrors: r3 };
    }
    function u(e3, t3) {
      const r3 = t3 || function(e4) {
        return e4.message;
      }, n3 = { _errors: [] }, o3 = (e4) => {
        for (const t4 of e4.issues) if ("invalid_union" === t4.code && t4.errors.length) t4.errors.map((e5) => o3({ issues: e5 }));
        else if ("invalid_key" === t4.code) o3({ issues: t4.issues });
        else if ("invalid_element" === t4.code) o3({ issues: t4.issues });
        else if (0 === t4.path.length) n3._errors.push(r3(t4));
        else {
          let e5 = n3, o4 = 0;
          for (; o4 < t4.path.length; ) {
            const n4 = t4.path[o4];
            o4 === t4.path.length - 1 ? (e5[n4] = e5[n4] || { _errors: [] }, e5[n4]._errors.push(r3(t4))) : e5[n4] = e5[n4] || { _errors: [] }, e5 = e5[n4], o4++;
          }
        }
      };
      return o3(e3), n3;
    }
  }