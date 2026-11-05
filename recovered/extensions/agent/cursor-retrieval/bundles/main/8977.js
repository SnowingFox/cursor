// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 8977 range:1028311..1029732
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8977: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(6928), s2 = "win32" === process.platform, { REGEX_BACKSLASH: o2, REGEX_REMOVE_BACKSLASH: r2, REGEX_SPECIAL_CHARS: i2, REGEX_SPECIAL_CHARS_GLOBAL: l } = n2(557);
    a2.isObject = (e3) => null !== e3 && "object" == typeof e3 && !Array.isArray(e3), a2.hasRegexChars = (e3) => i2.test(e3), a2.isRegexChar = (e3) => 1 === e3.length && a2.hasRegexChars(e3), a2.escapeRegex = (e3) => e3.replace(l, "\\$1"), a2.toPosixSlashes = (e3) => e3.replace(o2, "/"), a2.removeBackslashes = (e3) => e3.replace(r2, (e4) => "\\" === e4 ? "" : e4), a2.supportsLookbehinds = () => {
      const e3 = process.version.slice(1).split(".").map(Number);
      return 3 === e3.length && e3[0] >= 9 || 8 === e3[0] && e3[1] >= 10;
    }, a2.isWindows = (e3) => e3 && "boolean" == typeof e3.windows ? e3.windows : true === s2 || "\\" === t2.sep, a2.escapeLast = (e3, n3, t3) => {
      const s3 = e3.lastIndexOf(n3, t3);
      return -1 === s3 ? e3 : "\\" === e3[s3 - 1] ? a2.escapeLast(e3, n3, s3 - 1) : `${e3.slice(0, s3)}\\${e3.slice(s3)}`;
    }, a2.removePrefix = (e3, a3 = {}) => {
      let n3 = e3;
      return n3.startsWith("./") && (n3 = n3.slice(2), a3.prefix = "./"), n3;
    }, a2.wrapOutput = (e3, a3 = {}, n3 = {}) => {
      let t3 = `${n3.contains ? "" : "^"}(?:${e3})${n3.contains ? "" : "$"}`;
      return true === a3.negated && (t3 = `(?:^(?!${t3}).*$)`), t3;
    };
  }