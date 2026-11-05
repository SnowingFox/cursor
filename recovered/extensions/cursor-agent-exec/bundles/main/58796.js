// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 58796 range:4681716..4684007
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
58796: (e, t, r) => {
    const n = "win32" === process.platform || "cygwin" === process.env.OSTYPE || "msys" === process.env.OSTYPE, s = r(16928), o = n ? ";" : ":", i = r(6181), a = (e2) => Object.assign(new Error(`not found: ${e2}`), { code: "ENOENT" }), c = (e2, t2) => {
      const r2 = t2.colon || o, s2 = e2.match(/\//) || n && e2.match(/\\/) ? [""] : [...n ? [process.cwd()] : [], ...(t2.path || process.env.PATH || "").split(r2)], i2 = n ? t2.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "", a2 = n ? i2.split(r2) : [""];
      return n && -1 !== e2.indexOf(".") && "" !== a2[0] && a2.unshift(""), { pathEnv: s2, pathExt: a2, pathExtExe: i2 };
    }, l = (e2, t2, r2) => {
      "function" == typeof t2 && (r2 = t2, t2 = {}), t2 || (t2 = {});
      const { pathEnv: n2, pathExt: o2, pathExtExe: l2 } = c(e2, t2), u = [], d = (r3) => new Promise((o3, i2) => {
        if (r3 === n2.length) return t2.all && u.length ? o3(u) : i2(a(e2));
        const c2 = n2[r3], l3 = /^".*"$/.test(c2) ? c2.slice(1, -1) : c2, d2 = s.join(l3, e2), m = !l3 && /^\.[\\\/]/.test(e2) ? e2.slice(0, 2) + d2 : d2;
        o3(p(m, r3, 0));
      }), p = (e3, r3, n3) => new Promise((s2, a2) => {
        if (n3 === o2.length) return s2(d(r3 + 1));
        const c2 = o2[n3];
        i(e3 + c2, { pathExt: l2 }, (o3, i2) => {
          if (!o3 && i2) {
            if (!t2.all) return s2(e3 + c2);
            u.push(e3 + c2);
          }
          return s2(p(e3, r3, n3 + 1));
        });
      });
      return r2 ? d(0).then((e3) => r2(null, e3), r2) : d(0);
    };
    e.exports = l, l.sync = (e2, t2) => {
      t2 = t2 || {};
      const { pathEnv: r2, pathExt: n2, pathExtExe: o2 } = c(e2, t2), l2 = [];
      for (let a2 = 0; a2 < r2.length; a2++) {
        const c2 = r2[a2], u = /^".*"$/.test(c2) ? c2.slice(1, -1) : c2, d = s.join(u, e2), p = !u && /^\.[\\\/]/.test(e2) ? e2.slice(0, 2) + d : d;
        for (let e3 = 0; e3 < n2.length; e3++) {
          const r3 = p + n2[e3];
          try {
            if (i.sync(r3, { pathExt: o2 })) {
              if (!t2.all) return r3;
              l2.push(r3);
            }
          } catch (e4) {
          }
        }
      }
      if (t2.all && l2.length) return l2;
      if (t2.nothrow) return null;
      throw a(e2);
    };
  }