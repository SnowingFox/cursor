// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 13808 range:477434..480854
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13808: (e, t, r) => {
    "use strict";
    const n = r(57589), o = r(53993), s = r(68139), i = r(94443), a = (e2, t2, r2 = false) => {
      if (Array.isArray(e2)) {
        const n3 = e2.map((e3) => a(e3, t2, r2)), o3 = (e3) => {
          for (const t3 of n3) {
            const r3 = t3(e3);
            if (r3) return r3;
          }
          return false;
        };
        return o3;
      }
      const n2 = (o2 = e2) && "object" == typeof o2 && !Array.isArray(o2) && e2.tokens && e2.input;
      var o2;
      if ("" === e2 || "string" != typeof e2 && !n2) throw new TypeError("Expected pattern to be a non-empty string");
      const s2 = t2 || {}, i2 = s2.windows, l = n2 ? a.compileRe(e2, t2) : a.makeRe(e2, t2, false, true), c = l.state;
      delete l.state;
      let u = () => false;
      if (s2.ignore) {
        const e3 = { ...t2, ignore: null, onMatch: null, onResult: null };
        u = a(s2.ignore, e3, r2);
      }
      const d = (r3, n3 = false) => {
        const { isMatch: o3, match: d2, output: p } = a.test(r3, l, t2, { glob: e2, posix: i2 }), h = { glob: e2, state: c, regex: l, posix: i2, input: r3, output: p, match: d2, isMatch: o3 };
        return "function" == typeof s2.onResult && s2.onResult(h), false === o3 ? (h.isMatch = false, !!n3 && h) : u(r3) ? ("function" == typeof s2.onIgnore && s2.onIgnore(h), h.isMatch = false, !!n3 && h) : ("function" == typeof s2.onMatch && s2.onMatch(h), !n3 || h);
      };
      return r2 && (d.state = c), d;
    };
    a.test = (e2, t2, r2, { glob: n2, posix: o2 } = {}) => {
      if ("string" != typeof e2) throw new TypeError("Expected input to be a string");
      if ("" === e2) return { isMatch: false, output: "" };
      const i2 = r2 || {}, l = i2.format || (o2 ? s.toPosixSlashes : null);
      let c = e2 === n2, u = c && l ? l(e2) : e2;
      return false === c && (u = l ? l(e2) : e2, c = u === n2), false !== c && true !== i2.capture || (c = true === i2.matchBase || true === i2.basename ? a.matchBase(e2, t2, r2, o2) : t2.exec(u)), { isMatch: Boolean(c), match: c, output: u };
    }, a.matchBase = (e2, t2, r2, n2 = r2 && r2.windows) => (t2 instanceof RegExp ? t2 : a.makeRe(t2, r2)).test(s.basename(e2, { windows: n2 })), a.isMatch = (e2, t2, r2) => a(t2, r2)(e2), a.parse = (e2, t2) => Array.isArray(e2) ? e2.map((e3) => a.parse(e3, t2)) : o(e2, { ...t2, fastpaths: false }), a.scan = (e2, t2) => n(e2, t2), a.compileRe = (e2, t2, r2 = false, n2 = false) => {
      if (true === r2) return e2.output;
      const o2 = t2 || {}, s2 = o2.contains ? "" : "^", i2 = o2.contains ? "" : "$";
      let l = `${s2}(?:${e2.output})${i2}`;
      e2 && true === e2.negated && (l = `^(?!${l}).*$`);
      const c = a.toRegex(l, t2);
      return true === n2 && (c.state = e2), c;
    }, a.makeRe = (e2, t2 = {}, r2 = false, n2 = false) => {
      if (!e2 || "string" != typeof e2) throw new TypeError("Expected a non-empty string");
      let s2 = { negated: false, fastpaths: true };
      return false === t2.fastpaths || "." !== e2[0] && "*" !== e2[0] || (s2.output = o.fastpaths(e2, t2)), s2.output || (s2 = o(e2, t2)), a.compileRe(s2, t2, r2, n2);
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