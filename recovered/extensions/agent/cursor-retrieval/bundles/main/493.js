// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 493 range:17511..19524
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
493: (e2, a2, n2) => {
    const { isexe: t2, sync: s2 } = n2(9864), { join: o2, delimiter: r2, sep: i2, posix: l } = n2(6928), d = "win32" === process.platform, m = new RegExp(`[${l.sep}${i2 === l.sep ? "" : i2}]`.replace(/(\\)/g, "\\$1")), c = new RegExp(`^\\.${m.source}`), p = (e3) => Object.assign(new Error(`not found: ${e3}`), { code: "ENOENT" }), A = (e3, { path: a3 = process.env.PATH, pathExt: n3 = process.env.PATHEXT, delimiter: t3 = r2 }) => {
      const s3 = e3.match(m) ? [""] : [...d ? [process.cwd()] : [], ...(a3 || "").split(t3)];
      if (d) {
        const a4 = n3 || [".EXE", ".CMD", ".BAT", ".COM"].join(t3), o3 = a4.split(t3).flatMap((e4) => [e4, e4.toLowerCase()]);
        return e3.includes(".") && "" !== o3[0] && o3.unshift(""), { pathEnv: s3, pathExt: o3, pathExtExe: a4 };
      }
      return { pathEnv: s3, pathExt: [""] };
    }, u = (e3, a3) => {
      const n3 = /^".*"$/.test(e3) ? e3.slice(1, -1) : e3;
      return (!n3 && c.test(a3) ? a3.slice(0, 2) : "") + o2(n3, a3);
    }, g = async (e3, a3 = {}) => {
      const { pathEnv: n3, pathExt: s3, pathExtExe: o3 } = A(e3, a3), r3 = [];
      for (const i3 of n3) {
        const n4 = u(i3, e3);
        for (const e4 of s3) {
          const s4 = n4 + e4;
          if (await t2(s4, { pathExt: o3, ignoreErrors: true })) {
            if (!a3.all) return s4;
            r3.push(s4);
          }
        }
      }
      if (a3.all && r3.length) return r3;
      if (a3.nothrow) return null;
      throw p(e3);
    };
    e2.exports = g, g.sync = (e3, a3 = {}) => {
      const { pathEnv: n3, pathExt: t3, pathExtExe: o3 } = A(e3, a3), r3 = [];
      for (const i3 of n3) {
        const n4 = u(i3, e3);
        for (const e4 of t3) {
          const t4 = n4 + e4;
          if (s2(t4, { pathExt: o3, ignoreErrors: true })) {
            if (!a3.all) return t4;
            r3.push(t4);
          }
        }
      }
      if (a3.all && r3.length) return r3;
      if (a3.nothrow) return null;
      throw p(e3);
    };
  }