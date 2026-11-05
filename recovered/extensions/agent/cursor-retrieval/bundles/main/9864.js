// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 9864 range:1065978..1068448
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9864: (e2, a2, n2) => {
    "use strict";
    n2.r(a2), n2.d(a2, { isexe: () => g, posix: () => t2, sync: () => T, win32: () => s2 });
    var t2 = {};
    n2.r(t2), n2.d(t2, { isexe: () => i2, sync: () => l });
    var s2 = {};
    n2.r(s2), n2.d(s2, { isexe: () => c, sync: () => p });
    var o2 = n2(9896), r2 = n2(1943);
    const i2 = async (e3, a3 = {}) => {
      const { ignoreErrors: n3 = false } = a3;
      try {
        return d(await (0, r2.stat)(e3), a3);
      } catch (e4) {
        const a4 = e4;
        if (n3 || "EACCES" === a4.code) return false;
        throw a4;
      }
    }, l = (e3, a3 = {}) => {
      const { ignoreErrors: n3 = false } = a3;
      try {
        return d((0, o2.statSync)(e3), a3);
      } catch (e4) {
        const a4 = e4;
        if (n3 || "EACCES" === a4.code) return false;
        throw a4;
      }
    }, d = (e3, a3) => e3.isFile() && m(e3, a3), m = (e3, a3) => {
      const n3 = a3.uid ?? process.getuid?.(), t3 = a3.groups ?? process.getgroups?.() ?? [], s3 = a3.gid ?? process.getgid?.() ?? t3[0];
      if (void 0 === n3 || void 0 === s3) throw new Error("cannot get uid or gid");
      const o3 = /* @__PURE__ */ new Set([s3, ...t3]), r3 = e3.mode, i3 = e3.uid, l2 = e3.gid, d2 = parseInt("100", 8), m2 = parseInt("010", 8), c2 = d2 | m2;
      return !!(r3 & parseInt("001", 8) || r3 & m2 && o3.has(l2) || r3 & d2 && i3 === n3 || r3 & c2 && 0 === n3);
    }, c = async (e3, a3 = {}) => {
      const { ignoreErrors: n3 = false } = a3;
      try {
        return A(await (0, r2.stat)(e3), e3, a3);
      } catch (e4) {
        const a4 = e4;
        if (n3 || "EACCES" === a4.code) return false;
        throw a4;
      }
    }, p = (e3, a3 = {}) => {
      const { ignoreErrors: n3 = false } = a3;
      try {
        return A((0, o2.statSync)(e3), e3, a3);
      } catch (e4) {
        const a4 = e4;
        if (n3 || "EACCES" === a4.code) return false;
        throw a4;
      }
    }, A = (e3, a3, n3) => e3.isFile() && ((e4, a4) => {
      const { pathExt: n4 = process.env.PATHEXT || "" } = a4, t3 = n4.split(";");
      if (-1 !== t3.indexOf("")) return true;
      for (let a5 = 0; a5 < t3.length; a5++) {
        const n5 = t3[a5].toLowerCase(), s3 = e4.substring(e4.length - n5.length).toLowerCase();
        if (n5 && s3 === n5) return true;
      }
      return false;
    })(a3, n3), u = "win32" === (process.env._ISEXE_TEST_PLATFORM_ || process.platform) ? s2 : t2, g = u.isexe, T = u.sync;
  }