// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 95831 range:14559389..14590818
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
95831: (e, t, r) => {
    "use strict";
    r.d(t, { dM: () => v, zF: () => E, QO: () => b, hq: () => S, rX: () => z, $B: () => J, yz: () => K });
    let n = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i;
    class s extends Date {
      #ze = false;
      #We = false;
      #Ve = null;
      constructor(e2) {
        let t2 = true, r2 = true, s2 = "Z";
        if ("string" == typeof e2) {
          let o2 = e2.match(n);
          o2 ? (o2[1] || (t2 = false, e2 = `0000-01-01T${e2}`), r2 = !!o2[2], r2 && " " === e2[10] && (e2 = e2.replace(" ", "T")), o2[2] && +o2[2] > 23 ? e2 = "" : (s2 = o2[3] || null, e2 = e2.toUpperCase(), !s2 && r2 && (e2 += "Z"))) : e2 = "";
        }
        super(e2), isNaN(this.getTime()) || (this.#ze = t2, this.#We = r2, this.#Ve = s2);
      }
      isDateTime() {
        return this.#ze && this.#We;
      }
      isLocal() {
        return !this.#ze || !this.#We || !this.#Ve;
      }
      isDate() {
        return this.#ze && !this.#We;
      }
      isTime() {
        return this.#We && !this.#ze;
      }
      isValid() {
        return this.#ze || this.#We;
      }
      toISOString() {
        let e2 = super.toISOString();
        if (this.isDate()) return e2.slice(0, 10);
        if (this.isTime()) return e2.slice(11, 23);
        if (null === this.#Ve) return e2.slice(0, -1);
        if ("Z" === this.#Ve) return e2;
        let t2 = 60 * +this.#Ve.slice(1, 3) + +this.#Ve.slice(4, 6);
        return t2 = "-" === this.#Ve[0] ? t2 : -t2, new Date(this.getTime() - 6e4 * t2).toISOString().slice(0, -1) + this.#Ve;
      }
      static wrapAsOffsetDateTime(e2, t2 = "Z") {
        let r2 = new s(e2);
        return r2.#Ve = t2, r2;
      }
      static wrapAsLocalDateTime(e2) {
        let t2 = new s(e2);
        return t2.#Ve = null, t2;
      }
      static wrapAsLocalDate(e2) {
        let t2 = new s(e2);
        return t2.#We = false, t2.#Ve = null, t2;
      }
      static wrapAsLocalTime(e2) {
        let t2 = new s(e2);
        return t2.#ze = false, t2.#Ve = null, t2;
      }
    }
    class o extends Error {
      line;
      column;
      codeblock;
      constructor(e2, t2) {
        const [r2, n2] = (function(e3, t3) {
          let r3 = e3.slice(0, t3).split(/\r\n|\n|\r/g);
          return [r3.length, r3.pop().length + 1];
        })(t2.toml, t2.ptr), s2 = (function(e3, t3, r3) {
          let n3 = e3.split(/\r\n|\n|\r/g), s3 = "", o2 = 1 + (0 | Math.log10(t3 + 1));
          for (let e4 = t3 - 1; e4 <= t3 + 1; e4++) {
            let i2 = n3[e4 - 1];
            i2 && (s3 += e4.toString().padEnd(o2, " "), s3 += ":  ", s3 += i2, s3 += "\n", e4 === t3 && (s3 += " ".repeat(o2 + r3 + 2), s3 += "^\n"));
          }
          return s3;
        })(t2.toml, r2, n2);
        super(`Invalid TOML document: ${e2}

${s2}`, t2), this.line = r2, this.column = n2, this.codeblock = s2;
      }
    }
    let i = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/, a = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/, c = /^[+-]?0[0-9_]/;
    function l(e2, t2) {
      let r2 = e2[t2++], n2 = r2, s2 = "'" === r2, i2 = r2 === e2[t2] && r2 === e2[t2 + 1];
      i2 && ("\n" === e2[t2 += 2] ? t2++ : "\r" === e2[t2] && "\n" === e2[t2 + 1] && (t2 += 2));
      let a2 = "", c2 = t2, l2 = 0;
      for (let u2 = t2; u2 < e2.length; u2++) if (r2 = e2[u2], i2 && ("\n" === r2 || "\r" === r2 && "\n" === e2[u2 + 1])) l2 = l2 && 3;
      else {
        if (r2 < " " && "	" !== r2 || "" === r2) throw new o("control characters are not allowed in strings", { toml: e2, ptr: u2 });
        if (!(l2 && 3 !== l2 || r2 !== n2 || i2 && (e2[u2 + 1] !== n2 || e2[u2 + 2] !== n2))) return i2 && (e2[u2 + 3] === n2 && u2++, e2[u2 + 3] === n2 && u2++), [l2 ? a2 : a2 + e2.slice(c2, u2), u2 + (i2 ? 3 : 1)];
        if (l2) {
          if (1 === l2) if ("x" === r2 || "u" === r2 || "U" === r2) {
            let t3 = 0, n3 = "x" === r2 ? 2 : "u" === r2 ? 4 : 8;
            for (let r3 = 0; r3 < n3; r3++, u2++) {
              let r4 = e2.charCodeAt(u2 + 1), n4 = r4 >= 48 && r4 <= 57 ? r4 - 48 : r4 >= 65 && r4 <= 70 ? r4 - 65 + 10 : r4 >= 97 && r4 <= 102 ? r4 - 97 + 10 : -1;
              if (n4 < 0) throw new o("invalid non-hex character in unicode escape", { toml: e2, ptr: u2 + 1 });
              t3 = t3 << 4 | n4;
            }
            if (t3 < 0 || t3 > 1114111 || t3 >= 55296 && t3 <= 57343) throw new o("invalid unicode escape", { toml: e2, ptr: u2 });
            a2 += String.fromCodePoint(t3), c2 = u2 + 1, l2 = 0;
          } else if (" " === r2 || "	" === r2) l2 = 2;
          else {
            if ("b" === r2) a2 += "\b";
            else if ("t" === r2) a2 += "	";
            else if ("n" === r2) a2 += "\n";
            else if ("f" === r2) a2 += "\f";
            else if ("r" === r2) a2 += "\r";
            else if ("e" === r2) a2 += "\x1B";
            else if ('"' === r2) a2 += '"';
            else {
              if ("\\" !== r2) throw new o("unrecognized escape sequence", { toml: e2, ptr: u2 });
              a2 += "\\";
            }
            c2 = u2 + 1, l2 = 0;
          }
          else if (" " !== r2 && "	" !== r2) {
            if (2 === l2) throw new o("invalid escape: only line-ending whitespace may be escaped", { toml: e2, ptr: c2 });
            l2 = s2 || "\\" !== r2 ? 0 : 1, c2 = u2;
          }
        } else s2 || "\\" !== r2 || (a2 += e2.slice(c2, c2 = u2), l2 = 1);
      }
      throw new o("unfinished string", { toml: e2, ptr: t2 });
    }
    function u(e2, t2, r2, n2) {
      if ("true" === e2) return true;
      if ("false" === e2) return false;
      if ("-inf" === e2) return -1 / 0;
      if ("inf" === e2 || "+inf" === e2) return 1 / 0;
      if ("nan" === e2 || "+nan" === e2 || "-nan" === e2) return NaN;
      if ("-0" === e2) return n2 ? 0n : 0;
      let l2 = i.test(e2);
      if (l2 || a.test(e2)) {
        if (c.test(e2)) throw new o("leading zeroes are not allowed", { toml: t2, ptr: r2 });
        let s2 = +(e2 = e2.replace(/_/g, ""));
        if (isNaN(s2)) throw new o("invalid number", { toml: t2, ptr: r2 });
        if (l2) {
          if ((l2 = !Number.isSafeInteger(s2)) && !n2) throw new o("integer value cannot be represented losslessly", { toml: t2, ptr: r2 });
          (l2 || true === n2) && (s2 = BigInt(e2));
        }
        return s2;
      }
      const u2 = new s(e2);
      if (!u2.isValid()) throw new o("invalid value", { toml: t2, ptr: r2 });
      return u2;
    }
    function d(e2, t2 = 0, r2 = e2.length) {
      let n2 = e2.indexOf("\n", t2);
      return "\r" === e2[n2 - 1] && n2--, n2 <= r2 ? n2 : -1;
    }
    function p(e2, t2) {
      for (let r2 = t2; r2 < e2.length; r2++) {
        let n2 = e2[r2];
        if ("\n" === n2) return r2;
        if ("\r" === n2 && "\n" === e2[r2 + 1]) return r2 + 1;
        if (n2 < " " && "	" !== n2 || "" === n2) throw new o("control characters are not allowed in comments", { toml: e2, ptr: t2 });
      }
      return e2.length;
    }
    function m(e2, t2, r2, n2) {
      let s2;
      for (; ; ) {
        for (; " " === (s2 = e2[t2]) || "	" === s2 || !r2 && ("\n" === s2 || "\r" === s2 && "\n" === e2[t2 + 1]); ) t2++;
        if (n2 || "#" !== s2) break;
        t2 = p(e2, t2);
      }
      return t2;
    }
    function h(e2, t2, r2, n2, s2) {
      if (0 === n2) throw new o("document contains excessively nested structures. aborting.", { toml: e2, ptr: t2 });
      let i2 = e2[t2];
      if ("[" === i2 || "{" === i2) {
        let [a3, c3] = "[" === i2 ? (function(e3, t3, r3, n3) {
          let s3, i3 = [];
          t3++;
          for (; "]" !== (s3 = e3[t3++]) && s3; ) {
            if ("," === s3) throw new o("expected value, found comma", { toml: e3, ptr: t3 - 1 });
            if ("#" === s3) t3 = p(e3, t3);
            else if (" " !== s3 && "	" !== s3 && "\n" !== s3 && "\r" !== s3) {
              let s4 = h(e3, t3 - 1, "]", r3 - 1, n3);
              i3.push(s4[0]), t3 = s4[1];
            }
          }
          if (!s3) throw new o("unfinished array encountered", { toml: e3, ptr: t3 });
          return [i3, t3];
        })(e2, t2, n2, s2) : (function(e3, t3, r3, n3) {
          let s3, i3 = {}, a4 = /* @__PURE__ */ new Set();
          t3++;
          for (; "}" !== (s3 = e3[t3++]) && s3; ) {
            if ("," === s3) throw new o("expected value, found comma", { toml: e3, ptr: t3 - 1 });
            if ("#" === s3) t3 = p(e3, t3);
            else if (" " !== s3 && "	" !== s3 && "\n" !== s3 && "\r" !== s3) {
              let s4, c4 = i3, l2 = false, [u2, d2] = g(e3, t3 - 1);
              for (let r4 = 0; r4 < u2.length; r4++) {
                if (r4 && (c4 = l2 ? c4[s4] : c4[s4] = {}), s4 = u2[r4], (l2 = Object.hasOwn(c4, s4)) && ("object" != typeof c4[s4] || a4.has(c4[s4]))) throw new o("trying to redefine an already defined value", { toml: e3, ptr: t3 });
                l2 || "__proto__" !== s4 || Object.defineProperty(c4, s4, { enumerable: true, configurable: true, writable: true });
              }
              if (l2) throw new o("trying to redefine an already defined value", { toml: e3, ptr: t3 });
              let [p2, m2] = h(e3, d2, "}", r3 - 1, n3);
              a4.add(p2), c4[s4] = p2, t3 = m2;
            }
          }
          if (!s3) throw new o("unfinished table encountered", { toml: e3, ptr: t3 });
          return [i3, t3];
        })(e2, t2, n2, s2);
        if (r2) {
          if (c3 = m(e2, c3), "," === e2[c3]) c3++;
          else if (e2[c3] !== r2) throw new o("expected comma or end of structure", { toml: e2, ptr: c3 });
        }
        return [a3, c3];
      }
      if ('"' === i2 || "'" === i2) {
        let [n3, s3] = l(e2, t2);
        if (r2) {
          if (s3 = m(e2, s3), e2[s3] && "," !== e2[s3] && e2[s3] !== r2 && "\n" !== e2[s3] && "\r" !== e2[s3]) throw new o("unexpected character encountered", { toml: e2, ptr: s3 });
          "," === e2[s3] && s3++;
        }
        return [n3, s3];
      }
      let a2 = (function(e3, t3, r3, n3, s3 = false) {
        if (!n3) return (t3 = d(e3, t3)) < 0 ? e3.length : t3;
        for (let o2 = t3; o2 < e3.length; o2++) {
          let t4 = e3[o2];
          if ("#" === t4) {
            if (o2 = d(e3, o2), o2 < 0) break;
          } else {
            if (t4 === r3) return o2 + 1;
            if (t4 === n3 || s3 && ("\n" === t4 || "\r" === t4 && "\n" === e3[o2 + 1])) return o2;
          }
        }
        throw new o("cannot find end of structure", { toml: e3, ptr: t3 });
      })(e2, t2, ",", r2), c2 = (function(e3, t3, r3) {
        let n3 = e3.slice(t3, r3), s3 = n3.indexOf("#");
        return s3 > -1 && (p(e3, s3), n3 = n3.slice(0, s3)), [n3.trimEnd(), s3];
      })(e2, t2, a2 - ("," === e2[a2 - 1] ? 1 : 0));
      if (!c2[0]) throw new o("incomplete key-value declaration: no value specified", { toml: e2, ptr: t2 });
      return r2 && c2[1] > -1 && (a2 = m(e2, t2 + c2[1]), "," === e2[a2] && a2++), [u(c2[0], e2, t2, s2), a2];
    }
    let f = /^[a-zA-Z0-9-_]+[ \t]*$/;
    function g(e2, t2, r2 = "=") {
      let n2 = t2 - 1, s2 = [], i2 = e2.indexOf(r2, t2);
      if (i2 < 0) throw new o("incomplete key-value: cannot find end of key", { toml: e2, ptr: t2 });
      do {
        let a2 = e2[t2 = ++n2];
        if (" " !== a2 && "	" !== a2) if ('"' === a2 || "'" === a2) {
          if (a2 === e2[t2 + 1] && a2 === e2[t2 + 2]) throw new o("multiline strings are not allowed in keys", { toml: e2, ptr: t2 });
          let [c2, u2] = l(e2, t2);
          n2 = e2.indexOf(".", u2);
          let p2 = e2.slice(u2, n2 < 0 || n2 > i2 ? i2 : n2), m2 = d(p2);
          if (m2 > -1) throw new o("newlines are not allowed in keys", { toml: e2, ptr: t2 + n2 + m2 });
          if (p2.trimStart()) throw new o("found extra tokens after the string part", { toml: e2, ptr: u2 });
          if (i2 < u2 && (i2 = e2.indexOf(r2, u2), i2 < 0)) throw new o("incomplete key-value: cannot find end of key", { toml: e2, ptr: t2 });
          s2.push(c2);
        } else {
          n2 = e2.indexOf(".", t2);
          let r3 = e2.slice(t2, n2 < 0 || n2 > i2 ? i2 : n2);
          if (!f.test(r3)) throw new o("only letter, numbers, dashes and underscores are allowed in keys", { toml: e2, ptr: t2 });
          s2.push(r3.trimEnd());
        }
      } while (n2 + 1 && n2 < i2);
      return [s2, m(e2, i2 + 1, true, true)];
    }
    function y(e2, t2, r2, n2) {
      let s2, o2, i2 = t2, a2 = r2, c2 = false;
      for (let t3 = 0; t3 < e2.length; t3++) {
        if (t3) {
          if (i2 = c2 ? i2[s2] : i2[s2] = {}, a2 = (o2 = a2[s2]).c, 0 === n2 && (1 === o2.t || 2 === o2.t)) return null;
          if (2 === o2.t) {
            let e3 = i2.length - 1;
            i2 = i2[e3], a2 = a2[e3].c;
          }
        }
        if (s2 = e2[t3], (c2 = Object.hasOwn(i2, s2)) && 0 === a2[s2]?.t && a2[s2]?.d) return null;
        c2 || ("__proto__" === s2 && (Object.defineProperty(i2, s2, { enumerable: true, configurable: true, writable: true }), Object.defineProperty(a2, s2, { enumerable: true, configurable: true, writable: true })), a2[s2] = { t: t3 < e2.length - 1 && 2 === n2 ? 3 : n2, d: false, i: 0, c: {} });
      }
      if (o2 = a2[s2], o2.t !== n2 && (1 !== n2 || 3 !== o2.t)) return null;
      if (2 === n2 && (o2.d || (o2.d = true, i2[s2] = []), i2[s2].push(i2 = {}), o2.c[o2.i++] = o2 = { t: 1, d: false, i: 0, c: {} }), o2.d) return null;
      if (o2.d = true, 1 === n2) i2 = c2 ? i2[s2] : i2[s2] = {};
      else if (0 === n2 && c2) return null;
      return [s2, i2, o2.c];
    }
    function w(e2, { maxDepth: t2 = 1e3, integersAsBigInt: r2 } = {}) {
      let n2 = {}, s2 = {}, i2 = n2, a2 = s2;
      for (let c2 = m(e2, 0); c2 < e2.length; ) {
        if ("[" === e2[c2]) {
          let t3 = "[" === e2[++c2], r3 = g(e2, c2 += +t3, "]");
          if (t3) {
            if ("]" !== e2[r3[1] - 1]) throw new o("expected end of table declaration", { toml: e2, ptr: r3[1] - 1 });
            r3[1]++;
          }
          let l2 = y(r3[0], n2, s2, t3 ? 2 : 1);
          if (!l2) throw new o("trying to redefine an already defined table or value", { toml: e2, ptr: c2 });
          a2 = l2[2], i2 = l2[1], c2 = r3[1];
        } else {
          let n3 = g(e2, c2), s3 = y(n3[0], i2, a2, 0);
          if (!s3) throw new o("trying to redefine an already defined table or value", { toml: e2, ptr: c2 });
          let l2 = h(e2, n3[1], void 0, t2, r2);
          s3[1][s3[0]] = l2[0], c2 = l2[1];
        }
        if (c2 = m(e2, c2, true), e2[c2] && "\n" !== e2[c2] && "\r" !== e2[c2]) throw new o("each key-value declaration must be followed by an end-of-line", { toml: e2, ptr: c2 });
        c2 = m(e2, c2);
      }
      return n2;
    }
    class v extends Error {
      constructor() {
        super(...arguments), this.name = "PrivateInferenceConfigError";
      }
    }
    const _ = ["CURSOR_PRIVATE_INFERENCE_BASE_URL", "CURSOR_PRIVATE_INFERENCE_MODEL", "CURSOR_PRIVATE_INFERENCE_API_KEY", "CURSOR_PRIVATE_INFERENCE_API_KEY_HELPER", "CURSOR_PRIVATE_INFERENCE_TOKEN_LIMIT", "CURSOR_PRIVATE_INFERENCE_API_SHAPE"], A = "responses";
    function S(e2) {
      const t2 = e2?.trim();
      return t2 || void 0;
    }
    function b(e2) {
      return _.some((t2) => void 0 !== S(e2[t2]));
    }
    function E(e2) {
      throw new v(`Private inference config: ${e2}`);
    }
    function I(e2) {
      return null === e2 || "object" != typeof e2 || Array.isArray(e2);
    }
    function C(e2, t2) {
      if (null !== e2 && "object" == typeof e2) {
        for (const [r2, n2] of Object.entries(e2)) if (r2 === t2) return n2;
      }
    }
    function k(e2, t2) {
      return (null === e2 || "object" != typeof e2 || Array.isArray(e2)) && E(t2), Object.entries(e2);
    }
    function x(e2, t2) {
      if (void 0 !== e2) return "string" == typeof e2 && "" !== e2.trim() || E(`${t2} must be a non-empty string`), e2.trim();
    }
    function T(e2, t2) {
      if (void 0 !== e2) return ("number" != typeof e2 || !Number.isSafeInteger(e2) || e2 <= 0) && E(`${t2} must be a positive integer`), e2;
    }
    function R(e2, t2) {
      if (void 0 !== e2) return "boolean" != typeof e2 && E(`${t2} must be a boolean`), e2;
    }
    function B(e2, t2) {
      if (void 0 === e2) return;
      const r2 = {};
      for (const [n2, s2] of k(e2, `${t2} must be a table of string values`)) "string" != typeof s2 && E(`${t2} must be a table of string values`), r2[n2] = s2;
      return r2;
    }
    function P(e2, t2) {
      if (void 0 === e2) return;
      const r2 = Array.isArray(e2) ? e2 : [e2];
      return 0 === r2.length && E(`${t2} must name at least one environment variable`), r2.map((e3) => ("string" == typeof e3 && "" !== e3.trim() || E(`${t2} must be an environment variable name or a list of names`), e3.trim()));
    }
    function J(e2) {
      const t2 = /* @__PURE__ */ new Set(), r2 = [];
      for (const n2 of e2.models) t2.has(n2.endpoint.baseUrl) || (t2.add(n2.endpoint.baseUrl), r2.push(n2.endpoint.baseUrl));
      return r2;
    }
    const M = [{ key: "api_key", reason: "secrets don't belong in the file; use env_key (an environment variable name) or [auth] auth_provider_command (an executable that prints the key)" }, { key: "query_params", reason: "not supported on the private path yet" }, { key: "env_http_headers", reason: "not supported on the private path yet" }];
    function q(e2, t2) {
      for (const { key: r2, reason: n2 } of M) void 0 !== C(e2, r2) && E(`${t2}.${r2} is not supported — ${n2}`);
      return { baseUrl: x(C(e2, "base_url"), `${t2}.base_url`), apiBaseUrl: x(C(e2, "api_base_url"), `${t2}.api_base_url`), apiBackend: x(C(e2, "api_backend"), `${t2}.api_backend`), envKeys: P(C(e2, "env_key"), `${t2}.env_key`), headers: B(C(e2, "extra_headers"), `${t2}.extra_headers`), authProvider: x(C(e2, "auth_provider"), `${t2}.auth_provider`), inlineAuthHelper: t2.startsWith("model_providers.") ? N(C(e2, "auth"), `${t2}.auth`) : void 0 };
    }
    const D = 1, O = 600;
    function N(e2, t2) {
      if (void 0 === e2) return;
      I(e2) && E(`${t2} must be a table`);
      const r2 = x(C(e2, "command"), `${t2}.command`);
      void 0 === r2 && E(`${t2}.command is required`);
      const n2 = (function(e3, t3) {
        if (void 0 === e3) return;
        Array.isArray(e3) && e3.every((e4) => "string" == typeof e4) || E(`${t3} must be an array of strings`);
        return e3;
      })(C(e2, "args"), `${t2}.args`), s2 = T(C(e2, "token_ttl_secs"), `${t2}.token_ttl_secs`), o2 = T(C(e2, "timeout_secs"), `${t2}.timeout_secs`);
      return { command: r2, ...void 0 === n2 ? {} : { args: n2 }, ...void 0 === s2 ? {} : { tokenTtlSecs: s2 }, ...void 0 === o2 ? {} : { timeoutSecs: Math.min(O, Math.max(D, o2)) } };
    }
    function F(e2, t2, r2) {
      const n2 = R(C(e2, "supports_reasoning_effort"), `${t2}.supports_reasoning_effort`), s2 = (function(e3, t3) {
        if (void 0 === e3) return;
        const r3 = `${t3} must be a non-empty list of [[${t3}]] rungs (id, optional value, label, default)`;
        Array.isArray(e3) || E(r3);
        const n3 = /* @__PURE__ */ new Set();
        let s3;
        const o3 = e3.map((e4, r4) => {
          const o4 = `${t3}[${r4}]`;
          I(e4) && E(`${o4} must be a table`);
          const i4 = x(C(e4, "id"), `${o4}.id`);
          void 0 === i4 && E(`${o4}.id is required`), n3.has(i4) && E(`${t3} lists rung "${i4}" more than once`), n3.add(i4), R(C(e4, "default"), `${o4}.default`) && (void 0 !== s3 && E(`${t3} flags more than one rung default = true`), s3 = i4);
          const a3 = x(C(e4, "label"), `${o4}.label`);
          return { id: i4, value: x(C(e4, "value"), `${o4}.value`) ?? i4, ...void 0 === a3 ? {} : { label: a3 } };
        }), i3 = o3[0];
        return void 0 === i3 && E(r3), { tiers: o3, firstId: i3.id, flaggedDefault: s3 };
      })(C(e2, "reasoning_efforts"), `${t2}.reasoning_efforts`), o2 = x(C(e2, "reasoning_effort"), `${t2}.reasoning_effort`);
      if (false === n2) return void 0 === s2 && void 0 === o2 || E(`${t2}.supports_reasoning_effort = false contradicts its reasoning_efforts / reasoning_effort — drop one`), { kind: "off" };
      const i2 = s2?.flaggedDefault;
      void 0 !== i2 && void 0 !== o2 && i2 !== o2 && E(`${t2}.reasoning_effort = "${o2}" disagrees with the rung flagged default = true ("${i2}")`);
      const a2 = i2 ?? o2 ?? r2;
      if (void 0 !== s2) {
        const e3 = s2.tiers.map((e4) => e4.id);
        return void 0 === a2 || e3.includes(a2) || E(`${t2}.reasoning_effort "${a2}" is not one of its reasoning_efforts (${e3.join(", ")})`), { kind: "declared", tiers: s2.tiers, defaultTierId: a2 ?? s2.firstId };
      }
      return void 0 !== n2 || void 0 !== o2 ? { kind: "advertised", ...void 0 === a2 ? {} : { defaultTierId: a2 } } : void 0;
    }
    function U(e2, t2, r2, n2) {
      const s2 = `model.${e2}`, o2 = q(t2, s2), i2 = x(C(t2, "model_provider"), `${s2}.model_provider`);
      let a2;
      void 0 !== i2 && (a2 = r2.providers.get(i2), void 0 === a2 && E(`${s2}.model_provider names "${i2}" but [model_providers.${i2}] is not defined`));
      const c2 = (function(e3, t3) {
        return e3.apiBaseUrl ?? t3?.apiBaseUrl ?? e3.baseUrl ?? t3?.baseUrl;
      })(o2, a2);
      void 0 === c2 && E(`${s2}.base_url is required (on the model or its model_provider; api_base_url is also accepted)`);
      const l2 = o2.apiBackend ?? a2?.apiBackend;
      void 0 === l2 && E(`${s2}.api_backend is required — Grok Build defaults to chat_completions, which private inference does not speak; set api_backend = "${A}" on the model or its model_provider`), l2 !== A && E(`${s2}.api_backend = "${l2}" is not supported — private inference speaks the OpenAI Responses API only; set api_backend = "${A}"`);
      const u2 = (function(...e3) {
        const t3 = /* @__PURE__ */ new Map();
        for (const r3 of e3) for (const [e4, n3] of Object.entries(r3 ?? {})) t3.set(e4.toLowerCase(), [e4, n3]);
        return 0 === t3.size ? void 0 : Object.fromEntries(t3.values());
      })(r2.headers, a2?.headers, o2.headers), d2 = o2.envKeys ?? a2?.envKeys;
      let p2 = {};
      for (const e3 of d2 ?? []) {
        const t3 = Object.hasOwn(n2, e3) ? S(n2[e3]) : void 0;
        if (void 0 !== t3) {
          p2 = { apiKey: t3 };
          break;
        }
      }
      if (void 0 === p2.apiKey) {
        const e3 = (function(e4, t3, r3, n3, s3) {
          if (void 0 !== e4.authProvider) return L(e4.authProvider, n3, s3);
          if (void 0 !== t3?.authProvider) return L(t3.authProvider, n3, `model_providers.${r3 ?? "unknown"}`);
          if (void 0 !== t3?.inlineAuthHelper) return t3.inlineAuthHelper;
          return n3.authProviderHelper;
        })(o2, a2, i2, r2, s2);
        void 0 !== e3 ? p2 = { apiKeyHelper: e3 } : void 0 !== d2 && E(`${s2}.env_key names ${d2.join(", ")} but none is set, and no auth_provider or [auth] auth_provider_command is configured`);
      }
      return { baseUrl: c2, ...p2, ...void 0 === u2 ? {} : { headers: u2 } };
    }
    function L(e2, t2, r2) {
      const n2 = t2.authProviders.get(e2);
      return void 0 === n2 && E(`${r2}.auth_provider names "${e2}" but [auth_provider.${e2}] is not defined`), n2;
    }
    function $(e2) {
      const t2 = /* @__PURE__ */ new Map();
      if (void 0 === e2) return t2;
      for (const [r2, n2] of k(e2, "model_providers must be a table of [model_providers.<name>] tables")) I(n2) && E(`model_providers.${r2} must be a table`), t2.set(r2, q(n2, `model_providers.${r2}`));
      return t2;
    }
    function Q(e2) {
      const t2 = /* @__PURE__ */ new Map();
      if (void 0 === e2) return t2;
      for (const [r2, n2] of k(e2, "auth_provider must be a table of [auth_provider.<name>] tables")) {
        I(n2) && E(`auth_provider.${r2} must be a table`);
        const e3 = N(n2, `auth_provider.${r2}`);
        void 0 === e3 && E(`auth_provider.${r2}.command is required`), t2.set(r2, e3);
      }
      return t2;
    }
    function j(e2) {
      if (void 0 === e2) return;
      I(e2) && E("auth must be a table");
      const t2 = x(C(e2, "auth_provider_command"), "auth.auth_provider_command"), r2 = T(C(e2, "auth_token_ttl"), "auth.auth_token_ttl");
      if (void 0 !== t2) return { command: t2, ...void 0 === r2 ? {} : { tokenTtlSecs: r2 } };
      void 0 !== r2 && E("auth.auth_token_ttl is set but auth.auth_provider_command is not");
    }
    const G = 'private inference reads a Grok Build config.toml: one [model.<key>] table per model and [models] default = "<key>"';
    function H(e2, t2, r2) {
      let n2;
      try {
        n2 = w(e2);
      } catch (e3) {
        E(`${t2} is not valid TOML: ${(e3 instanceof Error ? e3.message : String(e3)).split("\n", 1)[0]}`);
      }
      I(n2) && E(`${t2} must contain a TOML document`);
      const s2 = C(n2, "models");
      void 0 !== s2 && I(s2) && E(`models must be a [models] table, not a list — ${G}`);
      const o2 = k(C(n2, "model"), `no [model.<key>] tables — ${G}`).map(([e3, t3]) => (I(t3) && E(`model.${e3} must be a table`), { key: e3, table: t3 })), i2 = o2.map(({ key: e3 }) => e3), a2 = x(C(s2, "default"), "models.default");
      void 0 === a2 || i2.includes(a2) || E(`models.default = "${a2}" is not one of the [model.<key>] tables (${i2.join(", ")})`);
      const c2 = a2 ?? (1 === i2.length ? i2[0] : void 0);
      void 0 === c2 && E(`models.default is required when more than one model is defined — name one of: ${i2.join(", ")}`);
      const l2 = x(C(s2, "default_reasoning_effort"), "models.default_reasoning_effort"), u2 = { providers: $(C(n2, "model_providers")), authProviders: Q(C(n2, "auth_provider")), authProviderHelper: j(C(n2, "auth")), headers: B(C(s2, "extra_headers"), "models.extra_headers") }, d2 = o2.map(({ key: e3, table: t3 }) => (function(e4, t4, r3, n3) {
        const s3 = `model.${e4}`, o3 = R(C(t4, "vision"), `${s3}.vision`), i3 = R(C(t4, "supports_backend_search"), `${s3}.supports_backend_search`), a3 = F(t4, s3, r3), c3 = { ...void 0 === o3 ? {} : { vision: o3 }, ...void 0 === i3 ? {} : { supportsBackendSearch: i3 } };
        return { id: e4, providerModelId: x(C(t4, "model"), `${s3}.model`) ?? e4, contextWindowTokens: T(C(t4, "context_window"), `${s3}.context_window`), longContextThresholdTokens: T(C(t4, "long_context_threshold_tokens"), `${s3}.long_context_threshold_tokens`), capabilities: 0 === Object.keys(c3).length ? void 0 : c3, reasoning: a3, maxOutputTokens: T(C(t4, "max_completion_tokens"), `${s3}.max_completion_tokens`), cursorModelId: x(C(t4, "cursor_model"), `${s3}.cursor_model`), supportsAssistantPrefill: R(C(t4, "supports_assistant_prefill"), `${s3}.supports_assistant_prefill`), cacheTtlMs: T(C(t4, "cache_ttl_ms"), `${s3}.cache_ttl_ms`), displayName: x(C(t4, "name"), `${s3}.name`), supportsPersistedReasoning: R(C(t4, "supports_persisted_reasoning"), `${s3}.supports_persisted_reasoning`), endpoint: n3 };
      })(e3, t3, e3 === c2 ? l2 : void 0, U(e3, t3, u2, r2)));
      return { models: d2, defaultModelId: c2 };
    }
    function z(e2) {
      const t2 = void 0 !== e2.configFilePath, r2 = _.filter((t3) => void 0 !== S(e2.env[t3]));
      if (!t2 && 0 === r2.length) return;
      if (t2 && r2.length > 0 && E(`both a config file (${e2.configFilePath}) and shorthand env vars (${r2.join(", ")}) are set — ambiguous config; use one source`), !t2) return (function(e3) {
        const t3 = S(e3.CURSOR_PRIVATE_INFERENCE_BASE_URL);
        void 0 === t3 && E("CURSOR_PRIVATE_INFERENCE_BASE_URL is not set");
        const r3 = S(e3.CURSOR_PRIVATE_INFERENCE_MODEL);
        void 0 === r3 && E("CURSOR_PRIVATE_INFERENCE_MODEL is not set");
        const n3 = S(e3.CURSOR_PRIVATE_INFERENCE_API_KEY_HELPER), s2 = { baseUrl: t3, apiKey: S(e3.CURSOR_PRIVATE_INFERENCE_API_KEY), apiKeyHelper: void 0 === n3 ? void 0 : { command: n3 } };
        void 0 !== s2.apiKey && void 0 !== s2.apiKeyHelper && E("both CURSOR_PRIVATE_INFERENCE_API_KEY and CURSOR_PRIVATE_INFERENCE_API_KEY_HELPER are set — ambiguous credential config; set exactly one");
        const o2 = S(e3.CURSOR_PRIVATE_INFERENCE_TOKEN_LIMIT), i2 = void 0 === o2 ? void 0 : Number(o2);
        return void 0 !== i2 && (!Number.isSafeInteger(i2) || i2 <= 0) && E("CURSOR_PRIVATE_INFERENCE_TOKEN_LIMIT must be a positive integer"), void 0 !== S(e3.CURSOR_PRIVATE_INFERENCE_API_SHAPE) && E("CURSOR_PRIVATE_INFERENCE_API_SHAPE is no longer supported — private inference speaks the OpenAI Responses API only"), { models: [{ id: r3, providerModelId: r3, contextWindowTokens: i2, endpoint: s2 }], defaultModelId: r3 };
      })(e2.env);
      void 0 === e2.configFileContent && E(`could not read ${e2.configFilePath}`);
      const n2 = e2.configFilePath;
      if (n2.toLowerCase().endsWith(".toml")) return H(e2.configFileContent, n2, e2.env);
      n2.toLowerCase().endsWith(".json") && E(`${n2}: JSON private-inference config is not supported — the config is a Grok Build config.toml; point CURSOR_PRIVATE_INFERENCE_CONFIG at a .toml file`), E(`${n2}: CURSOR_PRIVATE_INFERENCE_CONFIG must point at a .toml file`);
    }
    function W(e2, t2) {
      const r2 = e2.reasoning;
      switch (r2?.kind) {
        case "off":
          return;
        case "declared":
          return { tiers: r2.tiers, default: r2.defaultTierId };
        case "advertised":
        case void 0: {
          const n2 = t2?.reasoningEffortValues ?? [], s2 = n2[0];
          if (void 0 === s2) return void (void 0 !== r2 && E(`model "${e2.id}": reasoning is declared without [[model.${e2.id}.reasoning_efforts]] rungs and the gateway's /models advertises no tiers`));
          const o2 = r2?.defaultTierId ?? s2;
          return n2.includes(o2) || E(`model "${e2.id}": reasoning_effort "${o2}" is not one of the tiers the gateway advertises (${n2.join(", ")})`), { tiers: n2.map((e3) => ({ id: e3, value: e3 })), default: o2 };
        }
      }
    }
    function V(e2, t2) {
      if (false !== e2.capabilities?.supportsBackendSearch) return true === t2?.extendedCapabilities ? "web_search" : "web_search_preview";
    }
    function K(e2, t2) {
      "chat_completions" === t2?.advertisedDialect && E(`model "${e2.id}": the gateway advertises chat_completions for this model — private inference is Responses-only; the gateway must serve the Responses API`);
      const r2 = e2.contextWindowTokens ?? t2?.contextLength;
      void 0 === r2 && E(`model "${e2.id}": context_window is not configured and the gateway's /models advertises no context_length — set context_window (CURSOR_PRIVATE_INFERENCE_TOKEN_LIMIT for the shorthand)`);
      const n2 = e2.longContextThresholdTokens ?? t2?.longContextThresholdTokens;
      return void 0 !== e2.longContextThresholdTokens && e2.longContextThresholdTokens > r2 && E(`model "${e2.id}": long_context_threshold_tokens (${e2.longContextThresholdTokens}) exceeds context_window (${r2})`), { id: e2.id, providerModelId: e2.providerModelId, contextWindowTokens: r2, longContextThresholdTokens: n2, vision: e2.capabilities?.vision ?? t2?.supportsVision ?? false, webSearchTool: V(e2, t2), effort: W(e2, t2), maxOutputTokens: e2.maxOutputTokens ?? t2?.maxOutputTokens, cursorModelId: e2.cursorModelId, supportsAssistantPrefill: e2.supportsAssistantPrefill, cacheTtlMs: e2.cacheTtlMs, displayName: e2.displayName ?? e2.id, supportsPersistedReasoning: e2.supportsPersistedReasoning ?? true, endpoint: e2.endpoint };
    }
  }