// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 68388 range:10625153..10628220
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
68388: (e, t, r) => {
    "use strict";
    r.d(t, { BJ: () => h, DN: () => d, PS: () => y, ZU: () => p, fl: () => w, jl: () => c, kM: () => g, o1: () => u, oL: () => f, yn: () => l });
    var n = r(51455), s = r(48161), o = r(76760), i = r(73136);
    const a = "/";
    function c(e2) {
      return e2.replace(/^~(?=$|\/|\\)/, (0, s.homedir)());
    }
    function l(e2, t2) {
      return void 0 !== e2 && ("win32" === process.platform ? (0, o.normalize)(e2).toLowerCase() === (0, o.normalize)(t2).toLowerCase() : e2 === t2);
    }
    function u(e2, t2) {
      const r2 = c((function(e3) {
        if (!e3.startsWith("file://")) return e3;
        try {
          return (0, i.fileURLToPath)(e3);
        } catch {
          return e3;
        }
      })(e2));
      return t2 && !(0, o.isAbsolute)(r2) ? (0, o.resolve)(t2, r2) : (0, o.resolve)(r2);
    }
    async function d(e2, t2) {
      const r2 = u(e2, t2);
      let s2 = r2;
      for (; ; ) try {
        const e3 = await (0, n.realpath)(s2);
        return (0, o.resolve)(e3, (0, o.relative)(s2, r2));
      } catch (e3) {
        if ("ENOENT" !== e3.code) return null;
        const t3 = (0, o.dirname)(s2);
        if (t3 === s2) return r2;
        s2 = t3;
      }
    }
    function p({ basePath: e2, targetPath: t2 }) {
      const r2 = (0, o.resolve)(e2), n2 = (0, o.resolve)(e2, t2);
      return r2 === (0, o.parse)(r2).root ? (0, o.parse)(n2).root === r2 && (n2 === r2 || n2.length > r2.length) : n2 === r2 || n2.startsWith(r2 + o.sep);
    }
    function m(e2, t2) {
      for (const r2 of t2) if (p({ basePath: r2, targetPath: e2 })) return true;
      return false;
    }
    function h(e2, t2) {
      const r2 = "win32" === process.platform || "darwin" === process.platform, n2 = r2 ? e2.toLowerCase() : e2, s2 = r2 ? t2.toLowerCase() : t2;
      if (n2 === s2) return true;
      const i2 = s2.endsWith(o.sep) ? s2 : s2 + o.sep;
      return n2.startsWith(i2);
    }
    function f(e2) {
      return e2.replace(/\\/g, a);
    }
    function g(e2) {
      return f(e2).includes(".cursor/worktrees");
    }
    const y = "You cannot search other worktrees for this repository, stay within your workspace paths.";
    function w(e2) {
      const { targetPath: t2, workspacePaths: r2, mainWorktreePath: n2 } = e2;
      if (void 0 === t2) return false;
      if (0 === r2.length) return false;
      if (!r2.every((e3) => g(e3))) return false;
      if (m(t2, r2)) return false;
      const s2 = (0, o.isAbsolute)(t2) ? [(0, o.resolve)(t2)] : r2.map((e3) => (0, o.resolve)(e3, t2)), i2 = r2.map((e3) => (function(e4) {
        const t3 = f(e4), r3 = "/.cursor/worktrees/", n3 = t3.indexOf(r3);
        if (-1 === n3) return;
        const s3 = t3.slice(n3 + 19).split("/");
        if (s3.length < 2) return;
        const o2 = s3[0] ?? "";
        return 0 !== o2.length ? t3.slice(0, n3 + 19 + o2.length) : void 0;
      })(e3)).filter((e3) => void 0 !== e3);
      return !!(i2.length > 0 && s2.some((e3) => m(e3, i2))) || !(void 0 === n2 || !s2.some((e3) => m(e3, [n2])));
    }
  }