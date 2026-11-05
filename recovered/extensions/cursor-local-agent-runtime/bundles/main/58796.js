// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 58796 range:1827290..1829581
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
58796: (e, t, r) => {
    const n = "win32" === process.platform || "cygwin" === process.env.OSTYPE || "msys" === process.env.OSTYPE, o = r(16928), s = n ? ";" : ":", i = r(6181), a = (e2) => Object.assign(new Error(`not found: ${e2}`), { code: "ENOENT" }), l = (e2, t2) => {
      const r2 = t2.colon || s, o2 = e2.match(/\//) || n && e2.match(/\\/) ? [""] : [...n ? [process.cwd()] : [], ...(t2.path || process.env.PATH || "").split(r2)], i2 = n ? t2.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "", a2 = n ? i2.split(r2) : [""];
      return n && -1 !== e2.indexOf(".") && "" !== a2[0] && a2.unshift(""), { pathEnv: o2, pathExt: a2, pathExtExe: i2 };
    }, c = (e2, t2, r2) => {
      "function" == typeof t2 && (r2 = t2, t2 = {}), t2 || (t2 = {});
      const { pathEnv: n2, pathExt: s2, pathExtExe: c2 } = l(e2, t2), u = [], d = (r3) => new Promise((s3, i2) => {
        if (r3 === n2.length) return t2.all && u.length ? s3(u) : i2(a(e2));
        const l2 = n2[r3], c3 = /^".*"$/.test(l2) ? l2.slice(1, -1) : l2, d2 = o.join(c3, e2), h = !c3 && /^\.[\\\/]/.test(e2) ? e2.slice(0, 2) + d2 : d2;
        s3(p(h, r3, 0));
      }), p = (e3, r3, n3) => new Promise((o2, a2) => {
        if (n3 === s2.length) return o2(d(r3 + 1));
        const l2 = s2[n3];
        i(e3 + l2, { pathExt: c2 }, (s3, i2) => {
          if (!s3 && i2) {
            if (!t2.all) return o2(e3 + l2);
            u.push(e3 + l2);
          }
          return o2(p(e3, r3, n3 + 1));
        });
      });
      return r2 ? d(0).then((e3) => r2(null, e3), r2) : d(0);
    };
    e.exports = c, c.sync = (e2, t2) => {
      t2 = t2 || {};
      const { pathEnv: r2, pathExt: n2, pathExtExe: s2 } = l(e2, t2), c2 = [];
      for (let a2 = 0; a2 < r2.length; a2++) {
        const l2 = r2[a2], u = /^".*"$/.test(l2) ? l2.slice(1, -1) : l2, d = o.join(u, e2), p = !u && /^\.[\\\/]/.test(e2) ? e2.slice(0, 2) + d : d;
        for (let e3 = 0; e3 < n2.length; e3++) {
          const r3 = p + n2[e3];
          try {
            if (i.sync(r3, { pathExt: s2 })) {
              if (!t2.all) return r3;
              c2.push(r3);
            }
          } catch (e4) {
          }
        }
      }
      if (t2.all && c2.length) return c2;
      if (t2.nothrow) return null;
      throw a(e2);
    };
  }