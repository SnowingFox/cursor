// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 6749 range:443463..445187
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6749: (e, t, r) => {
    "use strict";
    r.d(t, { JM: () => c, Kd: () => a, Wk: () => l, a$: () => i });
    var n = r(47381), s = r(7246);
    const o = (e2, t2) => {
      e2.name = "$ZodError", Object.defineProperty(e2, "_zod", { value: e2._zod, enumerable: false }), Object.defineProperty(e2, "issues", { value: t2, enumerable: false }), Object.defineProperty(e2, "message", { get: () => JSON.stringify(t2, s.k8, 2), enumerable: true }), Object.defineProperty(e2, "toString", { value: () => e2.message, enumerable: false });
    }, i = (0, n.xI)("$ZodError", o), a = (0, n.xI)("$ZodError", o, { Parent: Error });
    function c(e2, t2 = (e3) => e3.message) {
      const r2 = {}, n2 = [];
      for (const s2 of e2.issues) s2.path.length > 0 ? (r2[s2.path[0]] = r2[s2.path[0]] || [], r2[s2.path[0]].push(t2(s2))) : n2.push(t2(s2));
      return { formErrors: n2, fieldErrors: r2 };
    }
    function l(e2, t2) {
      const r2 = t2 || function(e3) {
        return e3.message;
      }, n2 = { _errors: [] }, s2 = (e3) => {
        for (const t3 of e3.issues) if ("invalid_union" === t3.code && t3.errors.length) t3.errors.map((e4) => s2({ issues: e4 }));
        else if ("invalid_key" === t3.code) s2({ issues: t3.issues });
        else if ("invalid_element" === t3.code) s2({ issues: t3.issues });
        else if (0 === t3.path.length) n2._errors.push(r2(t3));
        else {
          let e4 = n2, s3 = 0;
          for (; s3 < t3.path.length; ) {
            const n3 = t3.path[s3];
            s3 === t3.path.length - 1 ? (e4[n3] = e4[n3] || { _errors: [] }, e4[n3]._errors.push(r2(t3))) : e4[n3] = e4[n3] || { _errors: [] }, e4 = e4[n3], s3++;
          }
        }
      };
      return s2(e2), n2;
    }
  }