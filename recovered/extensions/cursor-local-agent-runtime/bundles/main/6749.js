// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 6749 range:60044..61768
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6749: (e, t, r) => {
    "use strict";
    r.d(t, { JM: () => l, Kd: () => a, Wk: () => c, a$: () => i });
    var n = r(47381), o = r(7246);
    const s = (e2, t2) => {
      e2.name = "$ZodError", Object.defineProperty(e2, "_zod", { value: e2._zod, enumerable: false }), Object.defineProperty(e2, "issues", { value: t2, enumerable: false }), Object.defineProperty(e2, "message", { get: () => JSON.stringify(t2, o.k8, 2), enumerable: true }), Object.defineProperty(e2, "toString", { value: () => e2.message, enumerable: false });
    }, i = (0, n.xI)("$ZodError", s), a = (0, n.xI)("$ZodError", s, { Parent: Error });
    function l(e2, t2 = (e3) => e3.message) {
      const r2 = {}, n2 = [];
      for (const o2 of e2.issues) o2.path.length > 0 ? (r2[o2.path[0]] = r2[o2.path[0]] || [], r2[o2.path[0]].push(t2(o2))) : n2.push(t2(o2));
      return { formErrors: n2, fieldErrors: r2 };
    }
    function c(e2, t2) {
      const r2 = t2 || function(e3) {
        return e3.message;
      }, n2 = { _errors: [] }, o2 = (e3) => {
        for (const t3 of e3.issues) if ("invalid_union" === t3.code && t3.errors.length) t3.errors.map((e4) => o2({ issues: e4 }));
        else if ("invalid_key" === t3.code) o2({ issues: t3.issues });
        else if ("invalid_element" === t3.code) o2({ issues: t3.issues });
        else if (0 === t3.path.length) n2._errors.push(r2(t3));
        else {
          let e4 = n2, o3 = 0;
          for (; o3 < t3.path.length; ) {
            const n3 = t3.path[o3];
            o3 === t3.path.length - 1 ? (e4[n3] = e4[n3] || { _errors: [] }, e4[n3]._errors.push(r2(t3))) : e4[n3] = e4[n3] || { _errors: [] }, e4 = e4[n3], o3++;
          }
        }
      };
      return o2(e2), n2;
    }
  }