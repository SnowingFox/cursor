// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 53993 range:4553272..4576604
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
53993: (e, t, r) => {
    "use strict";
    const n = r(94443), s = r(68139), { MAX_LENGTH: o, POSIX_REGEX_SOURCE: i, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: c, REPLACEMENTS: l } = n, u = (e2, t2) => {
      if ("function" == typeof t2.expandRange) return t2.expandRange(...e2, t2);
      e2.sort();
      const r2 = `[${e2.join("-")}]`;
      try {
        new RegExp(r2);
      } catch (t3) {
        return e2.map((e3) => s.escapeRegex(e3)).join("..");
      }
      return r2;
    }, d = (e2, t2) => `Missing ${e2}: "${t2}" - use "\\\\${t2}" to match literal characters`, p = (e2) => {
      const t2 = [];
      let r2 = 0, n2 = 0, s2 = 0, o2 = "", i2 = false;
      for (const a2 of e2) if (true !== i2) if ("\\" !== a2) if ('"' !== a2) {
        if (0 === s2) {
          if ("[" === a2) r2++;
          else if ("]" === a2 && r2 > 0) r2--;
          else if (0 === r2) {
            if ("(" === a2) n2++;
            else if (")" === a2 && n2 > 0) n2--;
            else if ("|" === a2 && 0 === n2) {
              t2.push(o2), o2 = "";
              continue;
            }
          }
        }
        o2 += a2;
      } else s2 = 1 === s2 ? 0 : 1, o2 += a2;
      else o2 += a2, i2 = true;
      else o2 += a2, i2 = false;
      return t2.push(o2), t2;
    }, m = (e2) => {
      let t2 = e2.trim(), r2 = true;
      for (; true === r2; ) r2 = false, /^@\([^\\()[\]{}|]+\)$/.test(t2) && (t2 = t2.slice(2, -1), r2 = true);
      if (((e3) => {
        let t3 = false;
        for (const r3 of e3) if (true !== t3) if ("\\" !== r3) {
          if (/[?*+@!()[\]{}]/.test(r3)) return false;
        } else t3 = true;
        else t3 = false;
        return true;
      })(t2)) return t2.replace(/\\(.)/g, "$1");
    }, h = (e2, t2 = true) => {
      if ("+" !== e2[0] && "*" !== e2[0] || "(" !== e2[1]) return;
      let r2 = 0, n2 = 0, s2 = 0, o2 = false;
      for (let i2 = 1; i2 < e2.length; i2++) {
        const a2 = e2[i2];
        if (true !== o2) if ("\\" !== a2) if ('"' !== a2) {
          if (1 !== s2) if ("[" !== a2) {
            if ("]" === a2 && r2 > 0) r2--;
            else if (!(r2 > 0)) if ("(" !== a2) {
              if (")" === a2 && (n2--, 0 === n2)) {
                if (true === t2 && i2 !== e2.length - 1) return;
                return { type: e2[0], body: e2.slice(2, i2), end: i2 };
              }
            } else n2++;
          } else r2++;
        } else s2 = 1 === s2 ? 0 : 1;
        else o2 = true;
        else o2 = false;
      }
    }, f = (e2) => {
      let t2 = 0;
      const r2 = [];
      for (; t2 < e2.length; ) {
        const n2 = h(e2.slice(t2), false);
        if (!n2 || "*" !== n2.type) return;
        const s2 = p(n2.body).map((e3) => e3.trim());
        if (1 !== s2.length) return;
        const o2 = m(s2[0]);
        if (!o2 || 1 !== o2.length) return;
        r2.push(o2), t2 += n2.end + 1;
      }
      if (!(r2.length < 1)) return r2;
    }, g = (e2) => {
      let t2 = 0, r2 = e2.trim(), n2 = h(r2);
      for (; n2; ) t2++, r2 = n2.body.trim(), n2 = h(r2);
      return t2;
    }, y = (e2, t2) => {
      if (false === t2.maxExtglobRecursion) return { risky: false };
      const r2 = "number" == typeof t2.maxExtglobRecursion ? t2.maxExtglobRecursion : n.DEFAULT_MAX_EXTGLOB_RECURSION, o2 = p(e2).map((e3) => e3.trim());
      if (o2.length > 1 && (o2.some((e3) => "" === e3) || o2.some((e3) => /^[*?]+$/.test(e3)) || ((e3) => {
        const t3 = e3.map(m).filter(Boolean);
        for (let e4 = 0; e4 < t3.length; e4++) for (let r3 = e4 + 1; r3 < t3.length; r3++) {
          const n2 = t3[e4], s2 = t3[r3], o3 = n2[0];
          if (o3 && n2 === o3.repeat(n2.length) && s2 === o3.repeat(s2.length) && (n2 === s2 || n2.startsWith(s2) || s2.startsWith(n2))) return true;
        }
        return false;
      })(o2))) return { risky: true };
      const i2 = [];
      let a2 = false, c2 = true;
      for (const e3 of o2) {
        const t3 = f(e3);
        if (t3) {
          a2 = true, i2.push(...t3);
          continue;
        }
        const n2 = m(e3);
        if (n2 && 1 === n2.length) i2.push(n2);
        else if (c2 = false, g(e3) > r2) return { risky: true };
      }
      return a2 ? c2 ? { risky: true, safeOutput: (l2 = [...new Set(i2)], `${1 === l2.length ? s.escapeRegex(l2[0]) : `[${l2.map((e3) => s.escapeRegex(e3)).join("")}]`}*`) } : { risky: true } : { risky: false };
      var l2;
    }, w = (e2, t2) => {
      if ("string" != typeof e2) throw new TypeError("Expected a string");
      e2 = l[e2] || e2;
      const r2 = { ...t2 }, p2 = "number" == typeof r2.maxLength ? Math.min(o, r2.maxLength) : o;
      let m2 = e2.length;
      if (m2 > p2) throw new SyntaxError(`Input length: ${m2}, exceeds maximum allowed length: ${p2}`);
      const h2 = { type: "bos", value: "", output: r2.prepend || "" }, f2 = [h2], g2 = r2.capture ? "" : "?:", v = n.globChars(r2.windows), _ = n.extglobChars(v), { DOT_LITERAL: b, PLUS_LITERAL: S, SLASH_LITERAL: k, ONE_CHAR: x, DOTS_SLASH: E, NO_DOT: I, NO_DOT_SLASH: T, NO_DOTS_SLASH: C, QMARK: P, QMARK_NO_DOT: A, STAR: R, START_ANCHOR: M } = v, J = (e3) => `(${g2}(?:(?!${M}${e3.dot ? E : b}).)*?)`, O = r2.dot ? "" : I, B = r2.dot ? P : A;
      let D = true === r2.bash ? J(r2) : R;
      r2.capture && (D = `(${D})`), "boolean" == typeof r2.noext && (r2.noextglob = r2.noext);
      const q = { input: e2, index: -1, start: 0, dot: true === r2.dot, consumed: "", output: "", prefix: "", backtrack: false, negated: false, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: false, tokens: f2 };
      e2 = s.removePrefix(e2, q), m2 = e2.length;
      const N = [], F = [], U = [];
      let L, $ = h2;
      const j = () => q.index === m2 - 1, G = q.peek = (t3 = 1) => e2[q.index + t3], z = q.advance = () => e2[++q.index] || "", W = () => e2.slice(q.index + 1), H = (e3 = "", t3 = 0) => {
        q.consumed += e3, q.index += t3;
      }, K = (e3) => {
        q.output += null != e3.output ? e3.output : e3.value, H(e3.value);
      }, V = () => {
        let e3 = 1;
        for (; "!" === G() && ("(" !== G(2) || "?" === G(3)); ) z(), q.start++, e3++;
        return e3 % 2 != 0 && (q.negated = true, q.start++, true);
      }, Y = (e3) => {
        q[e3]++, U.push(e3);
      }, Q = (e3) => {
        q[e3]--, U.pop();
      }, X = (e3) => {
        if ("globstar" === $.type) {
          const t3 = q.braces > 0 && ("comma" === e3.type || "brace" === e3.type), r3 = true === e3.extglob || N.length && ("pipe" === e3.type || "paren" === e3.type);
          "slash" === e3.type || "paren" === e3.type || t3 || r3 || (q.output = q.output.slice(0, -$.output.length), $.type = "star", $.value = "*", $.output = D, q.output += $.output);
        }
        if (N.length && "paren" !== e3.type && (N[N.length - 1].inner += e3.value), (e3.value || e3.output) && K(e3), $ && "text" === $.type && "text" === e3.type) return $.output = ($.output || $.value) + e3.value, void ($.value += e3.value);
        e3.prev = $, f2.push(e3), $ = e3;
      }, Z = (e3, t3) => {
        const n2 = { ..._[t3], conditions: 1, inner: "" };
        n2.prev = $, n2.parens = q.parens, n2.output = q.output, n2.startIndex = q.index, n2.tokensIndex = f2.length;
        const s2 = (r2.capture ? "(" : "") + n2.open;
        Y("parens"), X({ type: e3, value: t3, output: q.output ? "" : x }), X({ type: "paren", extglob: true, value: z(), output: s2 }), N.push(n2);
      }, ee = (n2) => {
        const o2 = e2.slice(n2.startIndex, q.index + 1), i2 = e2.slice(n2.startIndex + 2, q.index), a2 = y(i2, r2);
        if (("plus" === n2.type || "star" === n2.type) && a2.risky) {
          const e3 = a2.safeOutput ? (n2.output ? "" : x) + (r2.capture ? `(${a2.safeOutput})` : a2.safeOutput) : void 0, t3 = f2[n2.tokensIndex];
          t3.type = "text", t3.value = o2, t3.output = e3 || s.escapeRegex(o2);
          for (let e4 = n2.tokensIndex + 1; e4 < f2.length; e4++) f2[e4].value = "", f2[e4].output = "", delete f2[e4].suffix;
          return q.output = n2.output + t3.output, q.backtrack = true, X({ type: "paren", extglob: true, value: L, output: "" }), void Q("parens");
        }
        let c2, l2 = n2.close + (r2.capture ? ")" : "");
        if ("negate" === n2.type) {
          let e3 = D;
          if (n2.inner && n2.inner.length > 1 && n2.inner.includes("/") && (e3 = J(r2)), (e3 !== D || j() || /^\)+$/.test(W())) && (l2 = n2.close = `)$))${e3}`), n2.inner.includes("*") && (c2 = W()) && /^\.[^\\/.]+$/.test(c2)) {
            const r3 = w(c2, { ...t2, fastpaths: false }).output;
            l2 = n2.close = `)${r3})${e3})`;
          }
          "bos" === n2.prev.type && (q.negatedExtglob = true);
        }
        X({ type: "paren", extglob: true, value: L, output: l2 }), Q("parens");
      };
      if (false !== r2.fastpaths && !/(^[*!]|[/()[\]{}"])/.test(e2)) {
        let n2 = false, o2 = e2.replace(c, (e3, t3, r3, s2, o3, i2) => "\\" === s2 ? (n2 = true, e3) : "?" === s2 ? t3 ? t3 + s2 + (o3 ? P.repeat(o3.length) : "") : 0 === i2 ? B + (o3 ? P.repeat(o3.length) : "") : P.repeat(r3.length) : "." === s2 ? b.repeat(r3.length) : "*" === s2 ? t3 ? t3 + s2 + (o3 ? D : "") : D : t3 ? e3 : `\\${e3}`);
        return true === n2 && (o2 = true === r2.unescape ? o2.replace(/\\/g, "") : o2.replace(/\\+/g, (e3) => e3.length % 2 == 0 ? "\\\\" : e3 ? "\\" : "")), o2 === e2 && true === r2.contains ? (q.output = e2, q) : (q.output = s.wrapOutput(o2, q, t2), q);
      }
      for (; !j(); ) {
        if (L = z(), "\0" === L) continue;
        if ("\\" === L) {
          const e3 = G();
          if ("/" === e3 && true !== r2.bash) continue;
          if ("." === e3 || ";" === e3) continue;
          if (!e3) {
            L += "\\", X({ type: "text", value: L });
            continue;
          }
          const t4 = /^\\+/.exec(W());
          let n3 = 0;
          if (t4 && t4[0].length > 2 && (n3 = t4[0].length, q.index += n3, n3 % 2 != 0 && (L += "\\")), true === r2.unescape ? L = z() : L += z(), 0 === q.brackets) {
            X({ type: "text", value: L });
            continue;
          }
        }
        if (q.brackets > 0 && ("]" !== L || "[" === $.value || "[^" === $.value)) {
          if (false !== r2.posix && ":" === L) {
            const e3 = $.value.slice(1);
            if (e3.includes("[") && ($.posix = true, e3.includes(":"))) {
              const e4 = $.value.lastIndexOf("["), t4 = $.value.slice(0, e4), r3 = $.value.slice(e4 + 2), n3 = i[r3];
              if (n3) {
                $.value = t4 + n3, q.backtrack = true, z(), h2.output || 1 !== f2.indexOf($) || (h2.output = x);
                continue;
              }
            }
          }
          ("[" === L && ":" !== G() || "-" === L && "]" === G()) && (L = `\\${L}`), "]" !== L || "[" !== $.value && "[^" !== $.value || (L = `\\${L}`), true === r2.posix && "!" === L && "[" === $.value && (L = "^"), $.value += L, K({ value: L });
          continue;
        }
        if (1 === q.quotes && '"' !== L) {
          L = s.escapeRegex(L), $.value += L, K({ value: L });
          continue;
        }
        if ('"' === L) {
          q.quotes = 1 === q.quotes ? 0 : 1, true === r2.keepQuotes && X({ type: "text", value: L });
          continue;
        }
        if ("(" === L) {
          Y("parens"), X({ type: "paren", value: L });
          continue;
        }
        if (")" === L) {
          if (0 === q.parens && true === r2.strictBrackets) throw new SyntaxError(d("opening", "("));
          const e3 = N[N.length - 1];
          if (e3 && q.parens === e3.parens + 1) {
            ee(N.pop());
            continue;
          }
          X({ type: "paren", value: L, output: q.parens ? ")" : "\\)" }), Q("parens");
          continue;
        }
        if ("[" === L) {
          if (true !== r2.nobracket && W().includes("]")) Y("brackets");
          else {
            if (true !== r2.nobracket && true === r2.strictBrackets) throw new SyntaxError(d("closing", "]"));
            L = `\\${L}`;
          }
          X({ type: "bracket", value: L });
          continue;
        }
        if ("]" === L) {
          if (true === r2.nobracket || $ && "bracket" === $.type && 1 === $.value.length) {
            X({ type: "text", value: L, output: `\\${L}` });
            continue;
          }
          if (0 === q.brackets) {
            if (true === r2.strictBrackets) throw new SyntaxError(d("opening", "["));
            X({ type: "text", value: L, output: `\\${L}` });
            continue;
          }
          Q("brackets");
          const e3 = $.value.slice(1);
          if (true === $.posix || "^" !== e3[0] || e3.includes("/") || (L = `/${L}`), $.value += L, K({ value: L }), false === r2.literalBrackets || s.hasRegexChars(e3)) continue;
          const t4 = s.escapeRegex($.value);
          if (q.output = q.output.slice(0, -$.value.length), true === r2.literalBrackets) {
            q.output += t4, $.value = t4;
            continue;
          }
          $.value = `(${g2}${t4}|${$.value})`, q.output += $.value;
          continue;
        }
        if ("{" === L && true !== r2.nobrace) {
          Y("braces");
          const e3 = { type: "brace", value: L, output: "(", outputIndex: q.output.length, tokensIndex: q.tokens.length };
          F.push(e3), X(e3);
          continue;
        }
        if ("}" === L) {
          const e3 = F[F.length - 1];
          if (true === r2.nobrace || !e3) {
            X({ type: "text", value: L, output: L });
            continue;
          }
          let t4 = ")";
          if (true === e3.dots) {
            const e4 = f2.slice(), n3 = [];
            for (let t5 = e4.length - 1; t5 >= 0 && (f2.pop(), "brace" !== e4[t5].type); t5--) "dots" !== e4[t5].type && n3.unshift(e4[t5].value);
            t4 = u(n3, r2), q.backtrack = true;
          }
          if (true !== e3.comma && true !== e3.dots) {
            const r3 = q.output.slice(0, e3.outputIndex), n3 = q.tokens.slice(e3.tokensIndex);
            e3.value = e3.output = "\\{", L = t4 = "\\}", q.output = r3;
            for (const e4 of n3) q.output += e4.output || e4.value;
          }
          X({ type: "brace", value: L, output: t4 }), Q("braces"), F.pop();
          continue;
        }
        if ("|" === L) {
          N.length > 0 && N[N.length - 1].conditions++, X({ type: "text", value: L });
          continue;
        }
        if ("," === L) {
          let e3 = L;
          const t4 = F[F.length - 1];
          t4 && "braces" === U[U.length - 1] && (t4.comma = true, e3 = "|"), X({ type: "comma", value: L, output: e3 });
          continue;
        }
        if ("/" === L) {
          if ("dot" === $.type && q.index === q.start + 1) {
            q.start = q.index + 1, q.consumed = "", q.output = "", f2.pop(), $ = h2;
            continue;
          }
          X({ type: "slash", value: L, output: k });
          continue;
        }
        if ("." === L) {
          if (q.braces > 0 && "dot" === $.type) {
            "." === $.value && ($.output = b);
            const e3 = F[F.length - 1];
            $.type = "dots", $.output += L, $.value += L, e3.dots = true;
            continue;
          }
          if (q.braces + q.parens === 0 && "bos" !== $.type && "slash" !== $.type) {
            X({ type: "text", value: L, output: b });
            continue;
          }
          X({ type: "dot", value: L, output: b });
          continue;
        }
        if ("?" === L) {
          if (!($ && "(" === $.value) && true !== r2.noextglob && "(" === G() && "?" !== G(2)) {
            Z("qmark", L);
            continue;
          }
          if ($ && "paren" === $.type) {
            const e3 = G();
            let t4 = L;
            ("(" === $.value && !/[!=<:]/.test(e3) || "<" === e3 && !/<([!=]|\w+>)/.test(W())) && (t4 = `\\${L}`), X({ type: "text", value: L, output: t4 });
            continue;
          }
          if (true !== r2.dot && ("slash" === $.type || "bos" === $.type)) {
            X({ type: "qmark", value: L, output: A });
            continue;
          }
          X({ type: "qmark", value: L, output: P });
          continue;
        }
        if ("!" === L) {
          if (true !== r2.noextglob && "(" === G() && ("?" !== G(2) || !/[!=<:]/.test(G(3)))) {
            Z("negate", L);
            continue;
          }
          if (true !== r2.nonegate && 0 === q.index) {
            V();
            continue;
          }
        }
        if ("+" === L) {
          if (true !== r2.noextglob && "(" === G() && "?" !== G(2)) {
            Z("plus", L);
            continue;
          }
          if ($ && "(" === $.value || false === r2.regex) {
            X({ type: "plus", value: L, output: S });
            continue;
          }
          if ($ && ("bracket" === $.type || "paren" === $.type || "brace" === $.type) || q.parens > 0) {
            X({ type: "plus", value: L });
            continue;
          }
          X({ type: "plus", value: S });
          continue;
        }
        if ("@" === L) {
          if (true !== r2.noextglob && "(" === G() && "?" !== G(2)) {
            X({ type: "at", extglob: true, value: L, output: "" });
            continue;
          }
          X({ type: "text", value: L });
          continue;
        }
        if ("*" !== L) {
          "$" !== L && "^" !== L || (L = `\\${L}`);
          const e3 = a.exec(W());
          e3 && (L += e3[0], q.index += e3[0].length), X({ type: "text", value: L });
          continue;
        }
        if ($ && ("globstar" === $.type || true === $.star)) {
          $.type = "star", $.star = true, $.value += L, $.output = D, q.backtrack = true, q.globstar = true, H(L);
          continue;
        }
        let t3 = W();
        if (true !== r2.noextglob && /^\([^?]/.test(t3)) {
          Z("star", L);
          continue;
        }
        if ("star" === $.type) {
          if (true === r2.noglobstar) {
            H(L);
            continue;
          }
          const n3 = $.prev, s2 = n3.prev, o2 = "slash" === n3.type || "bos" === n3.type, i2 = s2 && ("star" === s2.type || "globstar" === s2.type);
          if (true === r2.bash && (!o2 || t3[0] && "/" !== t3[0])) {
            X({ type: "star", value: L, output: "" });
            continue;
          }
          const a2 = q.braces > 0 && ("comma" === n3.type || "brace" === n3.type), c2 = N.length && ("pipe" === n3.type || "paren" === n3.type);
          if (!o2 && "paren" !== n3.type && !a2 && !c2) {
            X({ type: "star", value: L, output: "" });
            continue;
          }
          for (; "/**" === t3.slice(0, 3); ) {
            const r3 = e2[q.index + 4];
            if (r3 && "/" !== r3) break;
            t3 = t3.slice(3), H("/**", 3);
          }
          if ("bos" === n3.type && j()) {
            $.type = "globstar", $.value += L, $.output = J(r2), q.output = $.output, q.globstar = true, H(L);
            continue;
          }
          if ("slash" === n3.type && "bos" !== n3.prev.type && !i2 && j()) {
            q.output = q.output.slice(0, -(n3.output + $.output).length), n3.output = `(?:${n3.output}`, $.type = "globstar", $.output = J(r2) + (r2.strictSlashes ? ")" : "|$)"), $.value += L, q.globstar = true, q.output += n3.output + $.output, H(L);
            continue;
          }
          if ("slash" === n3.type && "bos" !== n3.prev.type && "/" === t3[0]) {
            const e3 = void 0 !== t3[1] ? "|$" : "";
            q.output = q.output.slice(0, -(n3.output + $.output).length), n3.output = `(?:${n3.output}`, $.type = "globstar", $.output = `${J(r2)}${k}|${k}${e3})`, $.value += L, q.output += n3.output + $.output, q.globstar = true, H(L + z()), X({ type: "slash", value: "/", output: "" });
            continue;
          }
          if ("bos" === n3.type && "/" === t3[0]) {
            $.type = "globstar", $.value += L, $.output = `(?:^|${k}|${J(r2)}${k})`, q.output = $.output, q.globstar = true, H(L + z()), X({ type: "slash", value: "/", output: "" });
            continue;
          }
          q.output = q.output.slice(0, -$.output.length), $.type = "globstar", $.output = J(r2), $.value += L, q.output += $.output, q.globstar = true, H(L);
          continue;
        }
        const n2 = { type: "star", value: L, output: D };
        true !== r2.bash ? !$ || "bracket" !== $.type && "paren" !== $.type || true !== r2.regex ? (q.index !== q.start && "slash" !== $.type && "dot" !== $.type || ("dot" === $.type ? (q.output += T, $.output += T) : true === r2.dot ? (q.output += C, $.output += C) : (q.output += O, $.output += O), "*" !== G() && (q.output += x, $.output += x)), X(n2)) : (n2.output = L, X(n2)) : (n2.output = ".*?", "bos" !== $.type && "slash" !== $.type || (n2.output = O + n2.output), X(n2));
      }
      for (; q.brackets > 0; ) {
        if (true === r2.strictBrackets) throw new SyntaxError(d("closing", "]"));
        q.output = s.escapeLast(q.output, "["), Q("brackets");
      }
      for (; q.parens > 0; ) {
        if (true === r2.strictBrackets) throw new SyntaxError(d("closing", ")"));
        q.output = s.escapeLast(q.output, "("), Q("parens");
      }
      for (; q.braces > 0; ) {
        if (true === r2.strictBrackets) throw new SyntaxError(d("closing", "}"));
        q.output = s.escapeLast(q.output, "{"), Q("braces");
      }
      if (true === r2.strictSlashes || "star" !== $.type && "bracket" !== $.type || X({ type: "maybe_slash", value: "", output: `${k}?` }), true === q.backtrack) {
        q.output = "";
        for (const e3 of q.tokens) q.output += null != e3.output ? e3.output : e3.value, e3.suffix && (q.output += e3.suffix);
      }
      return q;
    };
    w.fastpaths = (e2, t2) => {
      const r2 = { ...t2 }, i2 = "number" == typeof r2.maxLength ? Math.min(o, r2.maxLength) : o, a2 = e2.length;
      if (a2 > i2) throw new SyntaxError(`Input length: ${a2}, exceeds maximum allowed length: ${i2}`);
      e2 = l[e2] || e2;
      const { DOT_LITERAL: c2, SLASH_LITERAL: u2, ONE_CHAR: d2, DOTS_SLASH: p2, NO_DOT: m2, NO_DOTS: h2, NO_DOTS_SLASH: f2, STAR: g2, START_ANCHOR: y2 } = n.globChars(r2.windows), w2 = r2.dot ? h2 : m2, v = r2.dot ? f2 : m2, _ = r2.capture ? "" : "?:";
      let b = true === r2.bash ? ".*?" : g2;
      r2.capture && (b = `(${b})`);
      const S = (e3) => true === e3.noglobstar ? b : `(${_}(?:(?!${y2}${e3.dot ? p2 : c2}).)*?)`, k = (e3) => {
        switch (e3) {
          case "*":
            return `${w2}${d2}${b}`;
          case ".*":
            return `${c2}${d2}${b}`;
          case "*.*":
            return `${w2}${b}${c2}${d2}${b}`;
          case "*/*":
            return `${w2}${b}${u2}${d2}${v}${b}`;
          case "**":
            return w2 + S(r2);
          case "**/*":
            return `(?:${w2}${S(r2)}${u2})?${v}${d2}${b}`;
          case "**/*.*":
            return `(?:${w2}${S(r2)}${u2})?${v}${b}${c2}${d2}${b}`;
          case "**/.*":
            return `(?:${w2}${S(r2)}${u2})?${c2}${d2}${b}`;
          default: {
            const t3 = /^(.*?)\.(\w+)$/.exec(e3);
            if (!t3) return;
            const r3 = k(t3[1]);
            if (!r3) return;
            return r3 + c2 + t3[2];
          }
        }
      }, x = s.removePrefix(e2, { negated: false, prefix: "" });
      let E = k(x);
      return E && true !== r2.strictSlashes && (E += `${u2}?`), E;
    }, e.exports = w;
  }