// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 53993 range:1711989..1735321
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
53993: (e, t, r) => {
    "use strict";
    const n = r(94443), o = r(68139), { MAX_LENGTH: s, POSIX_REGEX_SOURCE: i, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: l, REPLACEMENTS: c } = n, u = (e2, t2) => {
      if ("function" == typeof t2.expandRange) return t2.expandRange(...e2, t2);
      e2.sort();
      const r2 = `[${e2.join("-")}]`;
      try {
        new RegExp(r2);
      } catch (t3) {
        return e2.map((e3) => o.escapeRegex(e3)).join("..");
      }
      return r2;
    }, d = (e2, t2) => `Missing ${e2}: "${t2}" - use "\\\\${t2}" to match literal characters`, p = (e2) => {
      const t2 = [];
      let r2 = 0, n2 = 0, o2 = 0, s2 = "", i2 = false;
      for (const a2 of e2) if (true !== i2) if ("\\" !== a2) if ('"' !== a2) {
        if (0 === o2) {
          if ("[" === a2) r2++;
          else if ("]" === a2 && r2 > 0) r2--;
          else if (0 === r2) {
            if ("(" === a2) n2++;
            else if (")" === a2 && n2 > 0) n2--;
            else if ("|" === a2 && 0 === n2) {
              t2.push(s2), s2 = "";
              continue;
            }
          }
        }
        s2 += a2;
      } else o2 = 1 === o2 ? 0 : 1, s2 += a2;
      else s2 += a2, i2 = true;
      else s2 += a2, i2 = false;
      return t2.push(s2), t2;
    }, h = (e2) => {
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
    }, m = (e2, t2 = true) => {
      if ("+" !== e2[0] && "*" !== e2[0] || "(" !== e2[1]) return;
      let r2 = 0, n2 = 0, o2 = 0, s2 = false;
      for (let i2 = 1; i2 < e2.length; i2++) {
        const a2 = e2[i2];
        if (true !== s2) if ("\\" !== a2) if ('"' !== a2) {
          if (1 !== o2) if ("[" !== a2) {
            if ("]" === a2 && r2 > 0) r2--;
            else if (!(r2 > 0)) if ("(" !== a2) {
              if (")" === a2 && (n2--, 0 === n2)) {
                if (true === t2 && i2 !== e2.length - 1) return;
                return { type: e2[0], body: e2.slice(2, i2), end: i2 };
              }
            } else n2++;
          } else r2++;
        } else o2 = 1 === o2 ? 0 : 1;
        else s2 = true;
        else s2 = false;
      }
    }, f = (e2) => {
      let t2 = 0;
      const r2 = [];
      for (; t2 < e2.length; ) {
        const n2 = m(e2.slice(t2), false);
        if (!n2 || "*" !== n2.type) return;
        const o2 = p(n2.body).map((e3) => e3.trim());
        if (1 !== o2.length) return;
        const s2 = h(o2[0]);
        if (!s2 || 1 !== s2.length) return;
        r2.push(s2), t2 += n2.end + 1;
      }
      if (!(r2.length < 1)) return r2;
    }, g = (e2) => {
      let t2 = 0, r2 = e2.trim(), n2 = m(r2);
      for (; n2; ) t2++, r2 = n2.body.trim(), n2 = m(r2);
      return t2;
    }, y = (e2, t2) => {
      if (false === t2.maxExtglobRecursion) return { risky: false };
      const r2 = "number" == typeof t2.maxExtglobRecursion ? t2.maxExtglobRecursion : n.DEFAULT_MAX_EXTGLOB_RECURSION, s2 = p(e2).map((e3) => e3.trim());
      if (s2.length > 1 && (s2.some((e3) => "" === e3) || s2.some((e3) => /^[*?]+$/.test(e3)) || ((e3) => {
        const t3 = e3.map(h).filter(Boolean);
        for (let e4 = 0; e4 < t3.length; e4++) for (let r3 = e4 + 1; r3 < t3.length; r3++) {
          const n2 = t3[e4], o2 = t3[r3], s3 = n2[0];
          if (s3 && n2 === s3.repeat(n2.length) && o2 === s3.repeat(o2.length) && (n2 === o2 || n2.startsWith(o2) || o2.startsWith(n2))) return true;
        }
        return false;
      })(s2))) return { risky: true };
      const i2 = [];
      let a2 = false, l2 = true;
      for (const e3 of s2) {
        const t3 = f(e3);
        if (t3) {
          a2 = true, i2.push(...t3);
          continue;
        }
        const n2 = h(e3);
        if (n2 && 1 === n2.length) i2.push(n2);
        else if (l2 = false, g(e3) > r2) return { risky: true };
      }
      return a2 ? l2 ? { risky: true, safeOutput: (c2 = [...new Set(i2)], `${1 === c2.length ? o.escapeRegex(c2[0]) : `[${c2.map((e3) => o.escapeRegex(e3)).join("")}]`}*`) } : { risky: true } : { risky: false };
      var c2;
    }, v = (e2, t2) => {
      if ("string" != typeof e2) throw new TypeError("Expected a string");
      e2 = c[e2] || e2;
      const r2 = { ...t2 }, p2 = "number" == typeof r2.maxLength ? Math.min(s, r2.maxLength) : s;
      let h2 = e2.length;
      if (h2 > p2) throw new SyntaxError(`Input length: ${h2}, exceeds maximum allowed length: ${p2}`);
      const m2 = { type: "bos", value: "", output: r2.prepend || "" }, f2 = [m2], g2 = r2.capture ? "" : "?:", w = n.globChars(r2.windows), b = n.extglobChars(w), { DOT_LITERAL: _, PLUS_LITERAL: S, SLASH_LITERAL: x, ONE_CHAR: k, DOTS_SLASH: E, NO_DOT: T, NO_DOT_SLASH: C, NO_DOTS_SLASH: I, QMARK: A, QMARK_NO_DOT: P, STAR: M, START_ANCHOR: R } = w, O = (e3) => `(${g2}(?:(?!${R}${e3.dot ? E : _}).)*?)`, D = r2.dot ? "" : T, N = r2.dot ? A : P;
      let F = true === r2.bash ? O(r2) : M;
      r2.capture && (F = `(${F})`), "boolean" == typeof r2.noext && (r2.noextglob = r2.noext);
      const L = { input: e2, index: -1, start: 0, dot: true === r2.dot, consumed: "", output: "", prefix: "", backtrack: false, negated: false, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: false, tokens: f2 };
      e2 = o.removePrefix(e2, L), h2 = e2.length;
      const U = [], B = [], $ = [];
      let q, j = m2;
      const J = () => L.index === h2 - 1, z = L.peek = (t3 = 1) => e2[L.index + t3], H = L.advance = () => e2[++L.index] || "", W = () => e2.slice(L.index + 1), G = (e3 = "", t3 = 0) => {
        L.consumed += e3, L.index += t3;
      }, Y = (e3) => {
        L.output += null != e3.output ? e3.output : e3.value, G(e3.value);
      }, V = () => {
        let e3 = 1;
        for (; "!" === z() && ("(" !== z(2) || "?" === z(3)); ) H(), L.start++, e3++;
        return e3 % 2 != 0 && (L.negated = true, L.start++, true);
      }, K = (e3) => {
        L[e3]++, $.push(e3);
      }, Z = (e3) => {
        L[e3]--, $.pop();
      }, X = (e3) => {
        if ("globstar" === j.type) {
          const t3 = L.braces > 0 && ("comma" === e3.type || "brace" === e3.type), r3 = true === e3.extglob || U.length && ("pipe" === e3.type || "paren" === e3.type);
          "slash" === e3.type || "paren" === e3.type || t3 || r3 || (L.output = L.output.slice(0, -j.output.length), j.type = "star", j.value = "*", j.output = F, L.output += j.output);
        }
        if (U.length && "paren" !== e3.type && (U[U.length - 1].inner += e3.value), (e3.value || e3.output) && Y(e3), j && "text" === j.type && "text" === e3.type) return j.output = (j.output || j.value) + e3.value, void (j.value += e3.value);
        e3.prev = j, f2.push(e3), j = e3;
      }, Q = (e3, t3) => {
        const n2 = { ...b[t3], conditions: 1, inner: "" };
        n2.prev = j, n2.parens = L.parens, n2.output = L.output, n2.startIndex = L.index, n2.tokensIndex = f2.length;
        const o2 = (r2.capture ? "(" : "") + n2.open;
        K("parens"), X({ type: e3, value: t3, output: L.output ? "" : k }), X({ type: "paren", extglob: true, value: H(), output: o2 }), U.push(n2);
      }, ee = (n2) => {
        const s2 = e2.slice(n2.startIndex, L.index + 1), i2 = e2.slice(n2.startIndex + 2, L.index), a2 = y(i2, r2);
        if (("plus" === n2.type || "star" === n2.type) && a2.risky) {
          const e3 = a2.safeOutput ? (n2.output ? "" : k) + (r2.capture ? `(${a2.safeOutput})` : a2.safeOutput) : void 0, t3 = f2[n2.tokensIndex];
          t3.type = "text", t3.value = s2, t3.output = e3 || o.escapeRegex(s2);
          for (let e4 = n2.tokensIndex + 1; e4 < f2.length; e4++) f2[e4].value = "", f2[e4].output = "", delete f2[e4].suffix;
          return L.output = n2.output + t3.output, L.backtrack = true, X({ type: "paren", extglob: true, value: q, output: "" }), void Z("parens");
        }
        let l2, c2 = n2.close + (r2.capture ? ")" : "");
        if ("negate" === n2.type) {
          let e3 = F;
          if (n2.inner && n2.inner.length > 1 && n2.inner.includes("/") && (e3 = O(r2)), (e3 !== F || J() || /^\)+$/.test(W())) && (c2 = n2.close = `)$))${e3}`), n2.inner.includes("*") && (l2 = W()) && /^\.[^\\/.]+$/.test(l2)) {
            const r3 = v(l2, { ...t2, fastpaths: false }).output;
            c2 = n2.close = `)${r3})${e3})`;
          }
          "bos" === n2.prev.type && (L.negatedExtglob = true);
        }
        X({ type: "paren", extglob: true, value: q, output: c2 }), Z("parens");
      };
      if (false !== r2.fastpaths && !/(^[*!]|[/()[\]{}"])/.test(e2)) {
        let n2 = false, s2 = e2.replace(l, (e3, t3, r3, o2, s3, i2) => "\\" === o2 ? (n2 = true, e3) : "?" === o2 ? t3 ? t3 + o2 + (s3 ? A.repeat(s3.length) : "") : 0 === i2 ? N + (s3 ? A.repeat(s3.length) : "") : A.repeat(r3.length) : "." === o2 ? _.repeat(r3.length) : "*" === o2 ? t3 ? t3 + o2 + (s3 ? F : "") : F : t3 ? e3 : `\\${e3}`);
        return true === n2 && (s2 = true === r2.unescape ? s2.replace(/\\/g, "") : s2.replace(/\\+/g, (e3) => e3.length % 2 == 0 ? "\\\\" : e3 ? "\\" : "")), s2 === e2 && true === r2.contains ? (L.output = e2, L) : (L.output = o.wrapOutput(s2, L, t2), L);
      }
      for (; !J(); ) {
        if (q = H(), "\0" === q) continue;
        if ("\\" === q) {
          const e3 = z();
          if ("/" === e3 && true !== r2.bash) continue;
          if ("." === e3 || ";" === e3) continue;
          if (!e3) {
            q += "\\", X({ type: "text", value: q });
            continue;
          }
          const t4 = /^\\+/.exec(W());
          let n3 = 0;
          if (t4 && t4[0].length > 2 && (n3 = t4[0].length, L.index += n3, n3 % 2 != 0 && (q += "\\")), true === r2.unescape ? q = H() : q += H(), 0 === L.brackets) {
            X({ type: "text", value: q });
            continue;
          }
        }
        if (L.brackets > 0 && ("]" !== q || "[" === j.value || "[^" === j.value)) {
          if (false !== r2.posix && ":" === q) {
            const e3 = j.value.slice(1);
            if (e3.includes("[") && (j.posix = true, e3.includes(":"))) {
              const e4 = j.value.lastIndexOf("["), t4 = j.value.slice(0, e4), r3 = j.value.slice(e4 + 2), n3 = i[r3];
              if (n3) {
                j.value = t4 + n3, L.backtrack = true, H(), m2.output || 1 !== f2.indexOf(j) || (m2.output = k);
                continue;
              }
            }
          }
          ("[" === q && ":" !== z() || "-" === q && "]" === z()) && (q = `\\${q}`), "]" !== q || "[" !== j.value && "[^" !== j.value || (q = `\\${q}`), true === r2.posix && "!" === q && "[" === j.value && (q = "^"), j.value += q, Y({ value: q });
          continue;
        }
        if (1 === L.quotes && '"' !== q) {
          q = o.escapeRegex(q), j.value += q, Y({ value: q });
          continue;
        }
        if ('"' === q) {
          L.quotes = 1 === L.quotes ? 0 : 1, true === r2.keepQuotes && X({ type: "text", value: q });
          continue;
        }
        if ("(" === q) {
          K("parens"), X({ type: "paren", value: q });
          continue;
        }
        if (")" === q) {
          if (0 === L.parens && true === r2.strictBrackets) throw new SyntaxError(d("opening", "("));
          const e3 = U[U.length - 1];
          if (e3 && L.parens === e3.parens + 1) {
            ee(U.pop());
            continue;
          }
          X({ type: "paren", value: q, output: L.parens ? ")" : "\\)" }), Z("parens");
          continue;
        }
        if ("[" === q) {
          if (true !== r2.nobracket && W().includes("]")) K("brackets");
          else {
            if (true !== r2.nobracket && true === r2.strictBrackets) throw new SyntaxError(d("closing", "]"));
            q = `\\${q}`;
          }
          X({ type: "bracket", value: q });
          continue;
        }
        if ("]" === q) {
          if (true === r2.nobracket || j && "bracket" === j.type && 1 === j.value.length) {
            X({ type: "text", value: q, output: `\\${q}` });
            continue;
          }
          if (0 === L.brackets) {
            if (true === r2.strictBrackets) throw new SyntaxError(d("opening", "["));
            X({ type: "text", value: q, output: `\\${q}` });
            continue;
          }
          Z("brackets");
          const e3 = j.value.slice(1);
          if (true === j.posix || "^" !== e3[0] || e3.includes("/") || (q = `/${q}`), j.value += q, Y({ value: q }), false === r2.literalBrackets || o.hasRegexChars(e3)) continue;
          const t4 = o.escapeRegex(j.value);
          if (L.output = L.output.slice(0, -j.value.length), true === r2.literalBrackets) {
            L.output += t4, j.value = t4;
            continue;
          }
          j.value = `(${g2}${t4}|${j.value})`, L.output += j.value;
          continue;
        }
        if ("{" === q && true !== r2.nobrace) {
          K("braces");
          const e3 = { type: "brace", value: q, output: "(", outputIndex: L.output.length, tokensIndex: L.tokens.length };
          B.push(e3), X(e3);
          continue;
        }
        if ("}" === q) {
          const e3 = B[B.length - 1];
          if (true === r2.nobrace || !e3) {
            X({ type: "text", value: q, output: q });
            continue;
          }
          let t4 = ")";
          if (true === e3.dots) {
            const e4 = f2.slice(), n3 = [];
            for (let t5 = e4.length - 1; t5 >= 0 && (f2.pop(), "brace" !== e4[t5].type); t5--) "dots" !== e4[t5].type && n3.unshift(e4[t5].value);
            t4 = u(n3, r2), L.backtrack = true;
          }
          if (true !== e3.comma && true !== e3.dots) {
            const r3 = L.output.slice(0, e3.outputIndex), n3 = L.tokens.slice(e3.tokensIndex);
            e3.value = e3.output = "\\{", q = t4 = "\\}", L.output = r3;
            for (const e4 of n3) L.output += e4.output || e4.value;
          }
          X({ type: "brace", value: q, output: t4 }), Z("braces"), B.pop();
          continue;
        }
        if ("|" === q) {
          U.length > 0 && U[U.length - 1].conditions++, X({ type: "text", value: q });
          continue;
        }
        if ("," === q) {
          let e3 = q;
          const t4 = B[B.length - 1];
          t4 && "braces" === $[$.length - 1] && (t4.comma = true, e3 = "|"), X({ type: "comma", value: q, output: e3 });
          continue;
        }
        if ("/" === q) {
          if ("dot" === j.type && L.index === L.start + 1) {
            L.start = L.index + 1, L.consumed = "", L.output = "", f2.pop(), j = m2;
            continue;
          }
          X({ type: "slash", value: q, output: x });
          continue;
        }
        if ("." === q) {
          if (L.braces > 0 && "dot" === j.type) {
            "." === j.value && (j.output = _);
            const e3 = B[B.length - 1];
            j.type = "dots", j.output += q, j.value += q, e3.dots = true;
            continue;
          }
          if (L.braces + L.parens === 0 && "bos" !== j.type && "slash" !== j.type) {
            X({ type: "text", value: q, output: _ });
            continue;
          }
          X({ type: "dot", value: q, output: _ });
          continue;
        }
        if ("?" === q) {
          if (!(j && "(" === j.value) && true !== r2.noextglob && "(" === z() && "?" !== z(2)) {
            Q("qmark", q);
            continue;
          }
          if (j && "paren" === j.type) {
            const e3 = z();
            let t4 = q;
            ("(" === j.value && !/[!=<:]/.test(e3) || "<" === e3 && !/<([!=]|\w+>)/.test(W())) && (t4 = `\\${q}`), X({ type: "text", value: q, output: t4 });
            continue;
          }
          if (true !== r2.dot && ("slash" === j.type || "bos" === j.type)) {
            X({ type: "qmark", value: q, output: P });
            continue;
          }
          X({ type: "qmark", value: q, output: A });
          continue;
        }
        if ("!" === q) {
          if (true !== r2.noextglob && "(" === z() && ("?" !== z(2) || !/[!=<:]/.test(z(3)))) {
            Q("negate", q);
            continue;
          }
          if (true !== r2.nonegate && 0 === L.index) {
            V();
            continue;
          }
        }
        if ("+" === q) {
          if (true !== r2.noextglob && "(" === z() && "?" !== z(2)) {
            Q("plus", q);
            continue;
          }
          if (j && "(" === j.value || false === r2.regex) {
            X({ type: "plus", value: q, output: S });
            continue;
          }
          if (j && ("bracket" === j.type || "paren" === j.type || "brace" === j.type) || L.parens > 0) {
            X({ type: "plus", value: q });
            continue;
          }
          X({ type: "plus", value: S });
          continue;
        }
        if ("@" === q) {
          if (true !== r2.noextglob && "(" === z() && "?" !== z(2)) {
            X({ type: "at", extglob: true, value: q, output: "" });
            continue;
          }
          X({ type: "text", value: q });
          continue;
        }
        if ("*" !== q) {
          "$" !== q && "^" !== q || (q = `\\${q}`);
          const e3 = a.exec(W());
          e3 && (q += e3[0], L.index += e3[0].length), X({ type: "text", value: q });
          continue;
        }
        if (j && ("globstar" === j.type || true === j.star)) {
          j.type = "star", j.star = true, j.value += q, j.output = F, L.backtrack = true, L.globstar = true, G(q);
          continue;
        }
        let t3 = W();
        if (true !== r2.noextglob && /^\([^?]/.test(t3)) {
          Q("star", q);
          continue;
        }
        if ("star" === j.type) {
          if (true === r2.noglobstar) {
            G(q);
            continue;
          }
          const n3 = j.prev, o2 = n3.prev, s2 = "slash" === n3.type || "bos" === n3.type, i2 = o2 && ("star" === o2.type || "globstar" === o2.type);
          if (true === r2.bash && (!s2 || t3[0] && "/" !== t3[0])) {
            X({ type: "star", value: q, output: "" });
            continue;
          }
          const a2 = L.braces > 0 && ("comma" === n3.type || "brace" === n3.type), l2 = U.length && ("pipe" === n3.type || "paren" === n3.type);
          if (!s2 && "paren" !== n3.type && !a2 && !l2) {
            X({ type: "star", value: q, output: "" });
            continue;
          }
          for (; "/**" === t3.slice(0, 3); ) {
            const r3 = e2[L.index + 4];
            if (r3 && "/" !== r3) break;
            t3 = t3.slice(3), G("/**", 3);
          }
          if ("bos" === n3.type && J()) {
            j.type = "globstar", j.value += q, j.output = O(r2), L.output = j.output, L.globstar = true, G(q);
            continue;
          }
          if ("slash" === n3.type && "bos" !== n3.prev.type && !i2 && J()) {
            L.output = L.output.slice(0, -(n3.output + j.output).length), n3.output = `(?:${n3.output}`, j.type = "globstar", j.output = O(r2) + (r2.strictSlashes ? ")" : "|$)"), j.value += q, L.globstar = true, L.output += n3.output + j.output, G(q);
            continue;
          }
          if ("slash" === n3.type && "bos" !== n3.prev.type && "/" === t3[0]) {
            const e3 = void 0 !== t3[1] ? "|$" : "";
            L.output = L.output.slice(0, -(n3.output + j.output).length), n3.output = `(?:${n3.output}`, j.type = "globstar", j.output = `${O(r2)}${x}|${x}${e3})`, j.value += q, L.output += n3.output + j.output, L.globstar = true, G(q + H()), X({ type: "slash", value: "/", output: "" });
            continue;
          }
          if ("bos" === n3.type && "/" === t3[0]) {
            j.type = "globstar", j.value += q, j.output = `(?:^|${x}|${O(r2)}${x})`, L.output = j.output, L.globstar = true, G(q + H()), X({ type: "slash", value: "/", output: "" });
            continue;
          }
          L.output = L.output.slice(0, -j.output.length), j.type = "globstar", j.output = O(r2), j.value += q, L.output += j.output, L.globstar = true, G(q);
          continue;
        }
        const n2 = { type: "star", value: q, output: F };
        true !== r2.bash ? !j || "bracket" !== j.type && "paren" !== j.type || true !== r2.regex ? (L.index !== L.start && "slash" !== j.type && "dot" !== j.type || ("dot" === j.type ? (L.output += C, j.output += C) : true === r2.dot ? (L.output += I, j.output += I) : (L.output += D, j.output += D), "*" !== z() && (L.output += k, j.output += k)), X(n2)) : (n2.output = q, X(n2)) : (n2.output = ".*?", "bos" !== j.type && "slash" !== j.type || (n2.output = D + n2.output), X(n2));
      }
      for (; L.brackets > 0; ) {
        if (true === r2.strictBrackets) throw new SyntaxError(d("closing", "]"));
        L.output = o.escapeLast(L.output, "["), Z("brackets");
      }
      for (; L.parens > 0; ) {
        if (true === r2.strictBrackets) throw new SyntaxError(d("closing", ")"));
        L.output = o.escapeLast(L.output, "("), Z("parens");
      }
      for (; L.braces > 0; ) {
        if (true === r2.strictBrackets) throw new SyntaxError(d("closing", "}"));
        L.output = o.escapeLast(L.output, "{"), Z("braces");
      }
      if (true === r2.strictSlashes || "star" !== j.type && "bracket" !== j.type || X({ type: "maybe_slash", value: "", output: `${x}?` }), true === L.backtrack) {
        L.output = "";
        for (const e3 of L.tokens) L.output += null != e3.output ? e3.output : e3.value, e3.suffix && (L.output += e3.suffix);
      }
      return L;
    };
    v.fastpaths = (e2, t2) => {
      const r2 = { ...t2 }, i2 = "number" == typeof r2.maxLength ? Math.min(s, r2.maxLength) : s, a2 = e2.length;
      if (a2 > i2) throw new SyntaxError(`Input length: ${a2}, exceeds maximum allowed length: ${i2}`);
      e2 = c[e2] || e2;
      const { DOT_LITERAL: l2, SLASH_LITERAL: u2, ONE_CHAR: d2, DOTS_SLASH: p2, NO_DOT: h2, NO_DOTS: m2, NO_DOTS_SLASH: f2, STAR: g2, START_ANCHOR: y2 } = n.globChars(r2.windows), v2 = r2.dot ? m2 : h2, w = r2.dot ? f2 : h2, b = r2.capture ? "" : "?:";
      let _ = true === r2.bash ? ".*?" : g2;
      r2.capture && (_ = `(${_})`);
      const S = (e3) => true === e3.noglobstar ? _ : `(${b}(?:(?!${y2}${e3.dot ? p2 : l2}).)*?)`, x = (e3) => {
        switch (e3) {
          case "*":
            return `${v2}${d2}${_}`;
          case ".*":
            return `${l2}${d2}${_}`;
          case "*.*":
            return `${v2}${_}${l2}${d2}${_}`;
          case "*/*":
            return `${v2}${_}${u2}${d2}${w}${_}`;
          case "**":
            return v2 + S(r2);
          case "**/*":
            return `(?:${v2}${S(r2)}${u2})?${w}${d2}${_}`;
          case "**/*.*":
            return `(?:${v2}${S(r2)}${u2})?${w}${_}${l2}${d2}${_}`;
          case "**/.*":
            return `(?:${v2}${S(r2)}${u2})?${l2}${d2}${_}`;
          default: {
            const t3 = /^(.*?)\.(\w+)$/.exec(e3);
            if (!t3) return;
            const r3 = x(t3[1]);
            if (!r3) return;
            return r3 + l2 + t3[2];
          }
        }
      }, k = o.removePrefix(e2, { negated: false, prefix: "" });
      let E = x(k);
      return E && true !== r2.strictSlashes && (E += `${u2}?`), E;
    }, e.exports = v;
  }