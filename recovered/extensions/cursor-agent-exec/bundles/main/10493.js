// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 10493 range:708726..710726
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
10493: (e, t, r) => {
    const { isexe: n, sync: s } = r(99864), { join: o, delimiter: i, sep: a, posix: c } = r(16928), l = "win32" === process.platform, u = new RegExp(`[${c.sep}${a === c.sep ? "" : a}]`.replace(/(\\)/g, "\\$1")), d = new RegExp(`^\\.${u.source}`), p = (e2) => Object.assign(new Error(`not found: ${e2}`), { code: "ENOENT" }), m = (e2, { path: t2 = process.env.PATH, pathExt: r2 = process.env.PATHEXT, delimiter: n2 = i }) => {
      const s2 = e2.match(u) ? [""] : [...l ? [process.cwd()] : [], ...(t2 || "").split(n2)];
      if (l) {
        const t3 = r2 || [".EXE", ".CMD", ".BAT", ".COM"].join(n2), o2 = t3.split(n2).flatMap((e3) => [e3, e3.toLowerCase()]);
        return e2.includes(".") && "" !== o2[0] && o2.unshift(""), { pathEnv: s2, pathExt: o2, pathExtExe: t3 };
      }
      return { pathEnv: s2, pathExt: [""] };
    }, h = (e2, t2) => {
      const r2 = /^".*"$/.test(e2) ? e2.slice(1, -1) : e2;
      return (!r2 && d.test(t2) ? t2.slice(0, 2) : "") + o(r2, t2);
    }, f = async (e2, t2 = {}) => {
      const { pathEnv: r2, pathExt: s2, pathExtExe: o2 } = m(e2, t2), i2 = [];
      for (const a2 of r2) {
        const r3 = h(a2, e2);
        for (const e3 of s2) {
          const s3 = r3 + e3;
          if (await n(s3, { pathExt: o2, ignoreErrors: true })) {
            if (!t2.all) return s3;
            i2.push(s3);
          }
        }
      }
      if (t2.all && i2.length) return i2;
      if (t2.nothrow) return null;
      throw p(e2);
    };
    e.exports = f, f.sync = (e2, t2 = {}) => {
      const { pathEnv: r2, pathExt: n2, pathExtExe: o2 } = m(e2, t2), i2 = [];
      for (const a2 of r2) {
        const r3 = h(a2, e2);
        for (const e3 of n2) {
          const n3 = r3 + e3;
          if (s(n3, { pathExt: o2, ignoreErrors: true })) {
            if (!t2.all) return n3;
            i2.push(n3);
          }
        }
      }
      if (t2.all && i2.length) return i2;
      if (t2.nothrow) return null;
      throw p(e2);
    };
  }