// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 870 range:48902..52348
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
870: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(6928), s2 = n2(519), o2 = n2(3579), r2 = n2(8977), i2 = n2(557), l = (e3, a3, n3 = false) => {
      if (Array.isArray(e3)) {
        const t4 = e3.map((e4) => l(e4, a3, n3)), s4 = (e4) => {
          for (const a4 of t4) {
            const n4 = a4(e4);
            if (n4) return n4;
          }
          return false;
        };
        return s4;
      }
      const t3 = (s3 = e3) && "object" == typeof s3 && !Array.isArray(s3) && e3.tokens && e3.input;
      var s3;
      if ("" === e3 || "string" != typeof e3 && !t3) throw new TypeError("Expected pattern to be a non-empty string");
      const o3 = a3 || {}, i3 = r2.isWindows(a3), d = t3 ? l.compileRe(e3, a3) : l.makeRe(e3, a3, false, true), m = d.state;
      delete d.state;
      let c = () => false;
      if (o3.ignore) {
        const e4 = { ...a3, ignore: null, onMatch: null, onResult: null };
        c = l(o3.ignore, e4, n3);
      }
      const p = (n4, t4 = false) => {
        const { isMatch: s4, match: r3, output: p2 } = l.test(n4, d, a3, { glob: e3, posix: i3 }), A = { glob: e3, state: m, regex: d, posix: i3, input: n4, output: p2, match: r3, isMatch: s4 };
        return "function" == typeof o3.onResult && o3.onResult(A), false === s4 ? (A.isMatch = false, !!t4 && A) : c(n4) ? ("function" == typeof o3.onIgnore && o3.onIgnore(A), A.isMatch = false, !!t4 && A) : ("function" == typeof o3.onMatch && o3.onMatch(A), !t4 || A);
      };
      return n3 && (p.state = m), p;
    };
    l.test = (e3, a3, n3, { glob: t3, posix: s3 } = {}) => {
      if ("string" != typeof e3) throw new TypeError("Expected input to be a string");
      if ("" === e3) return { isMatch: false, output: "" };
      const o3 = n3 || {}, i3 = o3.format || (s3 ? r2.toPosixSlashes : null);
      let d = e3 === t3, m = d && i3 ? i3(e3) : e3;
      return false === d && (m = i3 ? i3(e3) : e3, d = m === t3), false !== d && true !== o3.capture || (d = true === o3.matchBase || true === o3.basename ? l.matchBase(e3, a3, n3, s3) : a3.exec(m)), { isMatch: Boolean(d), match: d, output: m };
    }, l.matchBase = (e3, a3, n3, s3 = r2.isWindows(n3)) => (a3 instanceof RegExp ? a3 : l.makeRe(a3, n3)).test(t2.basename(e3)), l.isMatch = (e3, a3, n3) => l(a3, n3)(e3), l.parse = (e3, a3) => Array.isArray(e3) ? e3.map((e4) => l.parse(e4, a3)) : o2(e3, { ...a3, fastpaths: false }), l.scan = (e3, a3) => s2(e3, a3), l.compileRe = (e3, a3, n3 = false, t3 = false) => {
      if (true === n3) return e3.output;
      const s3 = a3 || {}, o3 = s3.contains ? "" : "^", r3 = s3.contains ? "" : "$";
      let i3 = `${o3}(?:${e3.output})${r3}`;
      e3 && true === e3.negated && (i3 = `^(?!${i3}).*$`);
      const d = l.toRegex(i3, a3);
      return true === t3 && (d.state = e3), d;
    }, l.makeRe = (e3, a3 = {}, n3 = false, t3 = false) => {
      if (!e3 || "string" != typeof e3) throw new TypeError("Expected a non-empty string");
      let s3 = { negated: false, fastpaths: true };
      return false === a3.fastpaths || "." !== e3[0] && "*" !== e3[0] || (s3.output = o2.fastpaths(e3, a3)), s3.output || (s3 = o2(e3, a3)), l.compileRe(s3, a3, n3, t3);
    }, l.toRegex = (e3, a3) => {
      try {
        const n3 = a3 || {};
        return new RegExp(e3, n3.flags || (n3.nocase ? "i" : ""));
      } catch (e4) {
        if (a3 && true === a3.debug) throw e4;
        return /$^/;
      }
    }, l.constants = i2, e2.exports = l;
  }