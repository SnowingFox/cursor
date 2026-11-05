// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 68139 range:2081212..2082758
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
68139: (e, t, r) => {
    "use strict";
    const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: i } = r(94443);
    t.isObject = (e2) => null !== e2 && "object" == typeof e2 && !Array.isArray(e2), t.hasRegexChars = (e2) => s.test(e2), t.isRegexChar = (e2) => 1 === e2.length && t.hasRegexChars(e2), t.escapeRegex = (e2) => e2.replace(i, "\\$1"), t.toPosixSlashes = (e2) => e2.replace(n, "/"), t.isWindows = () => {
      if ("undefined" != typeof navigator && navigator.platform) {
        const e2 = navigator.platform.toLowerCase();
        return "win32" === e2 || "windows" === e2;
      }
      return !("undefined" == typeof process || !process.platform) && "win32" === process.platform;
    }, t.removeBackslashes = (e2) => e2.replace(o, (e3) => "\\" === e3 ? "" : e3), t.escapeLast = (e2, r2, n2) => {
      const o2 = e2.lastIndexOf(r2, n2);
      return -1 === o2 ? e2 : "\\" === e2[o2 - 1] ? t.escapeLast(e2, r2, o2 - 1) : `${e2.slice(0, o2)}\\${e2.slice(o2)}`;
    }, t.removePrefix = (e2, t2 = {}) => {
      let r2 = e2;
      return r2.startsWith("./") && (r2 = r2.slice(2), t2.prefix = "./"), r2;
    }, t.wrapOutput = (e2, t2 = {}, r2 = {}) => {
      let n2 = `${r2.contains ? "" : "^"}(?:${e2})${r2.contains ? "" : "$"}`;
      return true === t2.negated && (n2 = `(?:^(?!${n2}).*$)`), n2;
    }, t.basename = (e2, { windows: t2 } = {}) => {
      const r2 = e2.split(t2 ? /[\\/]/ : "/"), n2 = r2[r2.length - 1];
      return "" === n2 ? r2[r2.length - 2] : n2;
    };
  }