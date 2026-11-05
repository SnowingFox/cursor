// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 99864 range:11763477..11765919
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
99864: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, { isexe: () => f, posix: () => n, sync: () => g, win32: () => s });
    var n = {};
    r.r(n), r.d(n, { isexe: () => a, sync: () => c });
    var s = {};
    r.r(s), r.d(s, { isexe: () => d, sync: () => p });
    var o = r(79896), i = r(91943);
    const a = async (e2, t2 = {}) => {
      const { ignoreErrors: r2 = false } = t2;
      try {
        return l(await (0, i.stat)(e2), t2);
      } catch (e3) {
        const t3 = e3;
        if (r2 || "EACCES" === t3.code) return false;
        throw t3;
      }
    }, c = (e2, t2 = {}) => {
      const { ignoreErrors: r2 = false } = t2;
      try {
        return l((0, o.statSync)(e2), t2);
      } catch (e3) {
        const t3 = e3;
        if (r2 || "EACCES" === t3.code) return false;
        throw t3;
      }
    }, l = (e2, t2) => e2.isFile() && u(e2, t2), u = (e2, t2) => {
      const r2 = t2.uid ?? process.getuid?.(), n2 = t2.groups ?? process.getgroups?.() ?? [], s2 = t2.gid ?? process.getgid?.() ?? n2[0];
      if (void 0 === r2 || void 0 === s2) throw new Error("cannot get uid or gid");
      const o2 = /* @__PURE__ */ new Set([s2, ...n2]), i2 = e2.mode, a2 = e2.uid, c2 = e2.gid, l2 = parseInt("100", 8), u2 = parseInt("010", 8), d2 = l2 | u2;
      return !!(i2 & parseInt("001", 8) || i2 & u2 && o2.has(c2) || i2 & l2 && a2 === r2 || i2 & d2 && 0 === r2);
    }, d = async (e2, t2 = {}) => {
      const { ignoreErrors: r2 = false } = t2;
      try {
        return m(await (0, i.stat)(e2), e2, t2);
      } catch (e3) {
        const t3 = e3;
        if (r2 || "EACCES" === t3.code) return false;
        throw t3;
      }
    }, p = (e2, t2 = {}) => {
      const { ignoreErrors: r2 = false } = t2;
      try {
        return m((0, o.statSync)(e2), e2, t2);
      } catch (e3) {
        const t3 = e3;
        if (r2 || "EACCES" === t3.code) return false;
        throw t3;
      }
    }, m = (e2, t2, r2) => e2.isFile() && ((e3, t3) => {
      const { pathExt: r3 = process.env.PATHEXT || "" } = t3, n2 = r3.split(";");
      if (-1 !== n2.indexOf("")) return true;
      for (let t4 = 0; t4 < n2.length; t4++) {
        const r4 = n2[t4].toLowerCase(), s2 = e3.substring(e3.length - r4.length).toLowerCase();
        if (r4 && s2 === r4) return true;
      }
      return false;
    })(t2, r2), h = "win32" === (process.env._ISEXE_TEST_PLATFORM_ || process.platform) ? s : n, f = h.isexe, g = h.sync;
  }