// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8796 range:811477..813790
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8796: (e2, t2, r2) => {
    const n2 = "win32" === process.platform || "cygwin" === process.env.OSTYPE || "msys" === process.env.OSTYPE, o2 = r2(6928), s2 = n2 ? ";" : ":", i2 = r2(6181), a2 = (e3) => Object.assign(new Error(`not found: ${e3}`), { code: "ENOENT" }), c = (e3, t3) => {
      const r3 = t3.colon || s2, o3 = e3.match(/\//) || n2 && e3.match(/\\/) ? [""] : [...n2 ? [process.cwd()] : [], ...(t3.path || process.env.PATH || "").split(r3)], i3 = n2 ? t3.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "", a3 = n2 ? i3.split(r3) : [""];
      return n2 && -1 !== e3.indexOf(".") && "" !== a3[0] && a3.unshift(""), { pathEnv: o3, pathExt: a3, pathExtExe: i3 };
    }, u = (e3, t3, r3) => {
      "function" == typeof t3 && (r3 = t3, t3 = {}), t3 || (t3 = {});
      const { pathEnv: n3, pathExt: s3, pathExtExe: u2 } = c(e3, t3), l = [], d = (r4) => new Promise((s4, i3) => {
        if (r4 === n3.length) return t3.all && l.length ? s4(l) : i3(a2(e3));
        const c2 = n3[r4], u3 = /^".*"$/.test(c2) ? c2.slice(1, -1) : c2, d2 = o2.join(u3, e3), f = !u3 && /^\.[\\\/]/.test(e3) ? e3.slice(0, 2) + d2 : d2;
        s4(p(f, r4, 0));
      }), p = (e4, r4, n4) => new Promise((o3, a3) => {
        if (n4 === s3.length) return o3(d(r4 + 1));
        const c2 = s3[n4];
        i2(e4 + c2, { pathExt: u2 }, (s4, i3) => {
          if (!s4 && i3) {
            if (!t3.all) return o3(e4 + c2);
            l.push(e4 + c2);
          }
          return o3(p(e4, r4, n4 + 1));
        });
      });
      return r3 ? d(0).then((e4) => r3(null, e4), r3) : d(0);
    };
    e2.exports = u, u.sync = (e3, t3) => {
      t3 = t3 || {};
      const { pathEnv: r3, pathExt: n3, pathExtExe: s3 } = c(e3, t3), u2 = [];
      for (let a3 = 0; a3 < r3.length; a3++) {
        const c2 = r3[a3], l = /^".*"$/.test(c2) ? c2.slice(1, -1) : c2, d = o2.join(l, e3), p = !l && /^\.[\\\/]/.test(e3) ? e3.slice(0, 2) + d : d;
        for (let e4 = 0; e4 < n3.length; e4++) {
          const r4 = p + n3[e4];
          try {
            if (i2.sync(r4, { pathExt: s3 })) {
              if (!t3.all) return r4;
              u2.push(r4);
            }
          } catch (e5) {
          }
        }
      }
      if (t3.all && u2.length) return u2;
      if (t3.nothrow) return null;
      throw a2(e3);
    };
  }