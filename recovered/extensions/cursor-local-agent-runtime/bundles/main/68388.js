// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 68388 range:2086843..2089895
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
68388: (e, t, r) => {
    "use strict";
    r.d(t, { BJ: () => h, DN: () => u, PS: () => g, ZU: () => d, fl: () => y, kM: () => f, o1: () => c, oL: () => m, yn: () => l });
    var n = r(51455), o = r(48161), s = r(76760), i = r(73136);
    const a = "/";
    function l(e2, t2) {
      return void 0 !== e2 && ("win32" === process.platform ? (0, s.normalize)(e2).toLowerCase() === (0, s.normalize)(t2).toLowerCase() : e2 === t2);
    }
    function c(e2, t2) {
      const r2 = (function(e3) {
        return e3.replace(/^~(?=$|\/|\\)/, (0, o.homedir)());
      })((function(e3) {
        if (!e3.startsWith("file://")) return e3;
        try {
          return (0, i.fileURLToPath)(e3);
        } catch {
          return e3;
        }
      })(e2));
      return t2 && !(0, s.isAbsolute)(r2) ? (0, s.resolve)(t2, r2) : (0, s.resolve)(r2);
    }
    async function u(e2, t2) {
      const r2 = c(e2, t2);
      let o2 = r2;
      for (; ; ) try {
        const e3 = await (0, n.realpath)(o2);
        return (0, s.resolve)(e3, (0, s.relative)(o2, r2));
      } catch (e3) {
        if ("ENOENT" !== e3.code) return null;
        const t3 = (0, s.dirname)(o2);
        if (t3 === o2) return r2;
        o2 = t3;
      }
    }
    function d({ basePath: e2, targetPath: t2 }) {
      const r2 = (0, s.resolve)(e2), n2 = (0, s.resolve)(e2, t2);
      return r2 === (0, s.parse)(r2).root ? (0, s.parse)(n2).root === r2 && (n2 === r2 || n2.length > r2.length) : n2 === r2 || n2.startsWith(r2 + s.sep);
    }
    function p(e2, t2) {
      for (const r2 of t2) if (d({ basePath: r2, targetPath: e2 })) return true;
      return false;
    }
    function h(e2, t2) {
      const r2 = "win32" === process.platform || "darwin" === process.platform, n2 = r2 ? e2.toLowerCase() : e2, o2 = r2 ? t2.toLowerCase() : t2;
      if (n2 === o2) return true;
      const i2 = o2.endsWith(s.sep) ? o2 : o2 + s.sep;
      return n2.startsWith(i2);
    }
    function m(e2) {
      return e2.replace(/\\/g, a);
    }
    function f(e2) {
      return m(e2).includes(".cursor/worktrees");
    }
    const g = "You cannot search other worktrees for this repository, stay within your workspace paths.";
    function y(e2) {
      const { targetPath: t2, workspacePaths: r2, mainWorktreePath: n2 } = e2;
      if (void 0 === t2) return false;
      if (0 === r2.length) return false;
      if (!r2.every((e3) => f(e3))) return false;
      if (p(t2, r2)) return false;
      const o2 = (0, s.isAbsolute)(t2) ? [(0, s.resolve)(t2)] : r2.map((e3) => (0, s.resolve)(e3, t2)), i2 = r2.map((e3) => (function(e4) {
        const t3 = m(e4), r3 = "/.cursor/worktrees/", n3 = t3.indexOf(r3);
        if (-1 === n3) return;
        const o3 = t3.slice(n3 + 19).split("/");
        if (o3.length < 2) return;
        const s2 = o3[0] ?? "";
        return 0 !== s2.length ? t3.slice(0, n3 + 19 + s2.length) : void 0;
      })(e3)).filter((e3) => void 0 !== e3);
      return !!(i2.length > 0 && o2.some((e3) => p(e3, i2))) || !(void 0 === n2 || !o2.some((e3) => p(e3, [n2])));
    }
  }