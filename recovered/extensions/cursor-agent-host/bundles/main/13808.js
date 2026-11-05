// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 13808 range:3964859..3968279
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13808: (e, t, r) => {
    "use strict";
    const n = r(57589), s = r(53993), o = r(68139), i = r(94443), a = (e2, t2, r2 = false) => {
      if (Array.isArray(e2)) {
        const n3 = e2.map((e3) => a(e3, t2, r2)), s3 = (e3) => {
          for (const t3 of n3) {
            const r3 = t3(e3);
            if (r3) return r3;
          }
          return false;
        };
        return s3;
      }
      const n2 = (s2 = e2) && "object" == typeof s2 && !Array.isArray(s2) && e2.tokens && e2.input;
      var s2;
      if ("" === e2 || "string" != typeof e2 && !n2) throw new TypeError("Expected pattern to be a non-empty string");
      const o2 = t2 || {}, i2 = o2.windows, c = n2 ? a.compileRe(e2, t2) : a.makeRe(e2, t2, false, true), l = c.state;
      delete c.state;
      let u = () => false;
      if (o2.ignore) {
        const e3 = { ...t2, ignore: null, onMatch: null, onResult: null };
        u = a(o2.ignore, e3, r2);
      }
      const d = (r3, n3 = false) => {
        const { isMatch: s3, match: d2, output: p } = a.test(r3, c, t2, { glob: e2, posix: i2 }), m = { glob: e2, state: l, regex: c, posix: i2, input: r3, output: p, match: d2, isMatch: s3 };
        return "function" == typeof o2.onResult && o2.onResult(m), false === s3 ? (m.isMatch = false, !!n3 && m) : u(r3) ? ("function" == typeof o2.onIgnore && o2.onIgnore(m), m.isMatch = false, !!n3 && m) : ("function" == typeof o2.onMatch && o2.onMatch(m), !n3 || m);
      };
      return r2 && (d.state = l), d;
    };
    a.test = (e2, t2, r2, { glob: n2, posix: s2 } = {}) => {
      if ("string" != typeof e2) throw new TypeError("Expected input to be a string");
      if ("" === e2) return { isMatch: false, output: "" };
      const i2 = r2 || {}, c = i2.format || (s2 ? o.toPosixSlashes : null);
      let l = e2 === n2, u = l && c ? c(e2) : e2;
      return false === l && (u = c ? c(e2) : e2, l = u === n2), false !== l && true !== i2.capture || (l = true === i2.matchBase || true === i2.basename ? a.matchBase(e2, t2, r2, s2) : t2.exec(u)), { isMatch: Boolean(l), match: l, output: u };
    }, a.matchBase = (e2, t2, r2, n2 = r2 && r2.windows) => (t2 instanceof RegExp ? t2 : a.makeRe(t2, r2)).test(o.basename(e2, { windows: n2 })), a.isMatch = (e2, t2, r2) => a(t2, r2)(e2), a.parse = (e2, t2) => Array.isArray(e2) ? e2.map((e3) => a.parse(e3, t2)) : s(e2, { ...t2, fastpaths: false }), a.scan = (e2, t2) => n(e2, t2), a.compileRe = (e2, t2, r2 = false, n2 = false) => {
      if (true === r2) return e2.output;
      const s2 = t2 || {}, o2 = s2.contains ? "" : "^", i2 = s2.contains ? "" : "$";
      let c = `${o2}(?:${e2.output})${i2}`;
      e2 && true === e2.negated && (c = `^(?!${c}).*$`);
      const l = a.toRegex(c, t2);
      return true === n2 && (l.state = e2), l;
    }, a.makeRe = (e2, t2 = {}, r2 = false, n2 = false) => {
      if (!e2 || "string" != typeof e2) throw new TypeError("Expected a non-empty string");
      let o2 = { negated: false, fastpaths: true };
      return false === t2.fastpaths || "." !== e2[0] && "*" !== e2[0] || (o2.output = s.fastpaths(e2, t2)), o2.output || (o2 = s(e2, t2)), a.compileRe(o2, t2, r2, n2);
    }, a.toRegex = (e2, t2) => {
      try {
        const r2 = t2 || {};
        return new RegExp(e2, r2.flags || (r2.nocase ? "i" : ""));
      } catch (e3) {
        if (t2 && true === t2.debug) throw e3;
        return /$^/;
      }
    }, a.constants = i, e.exports = a;
  }