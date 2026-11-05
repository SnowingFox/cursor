// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 3579 range:649491..672743
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3579: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(557), s2 = n2(8977), { MAX_LENGTH: o2, POSIX_REGEX_SOURCE: r2, REGEX_NON_SPECIAL_CHARS: i2, REGEX_SPECIAL_CHARS_BACKREF: l, REPLACEMENTS: d } = t2, m = (e3, a3) => {
      if ("function" == typeof a3.expandRange) return a3.expandRange(...e3, a3);
      e3.sort();
      const n3 = `[${e3.join("-")}]`;
      try {
        new RegExp(n3);
      } catch (a4) {
        return e3.map((e4) => s2.escapeRegex(e4)).join("..");
      }
      return n3;
    }, c = (e3, a3) => `Missing ${e3}: "${a3}" - use "\\\\${a3}" to match literal characters`, p = (e3) => {
      const a3 = [];
      let n3 = 0, t3 = 0, s3 = 0, o3 = "", r3 = false;
      for (const i3 of e3) if (true !== r3) if ("\\" !== i3) if ('"' !== i3) {
        if (0 === s3) {
          if ("[" === i3) n3++;
          else if ("]" === i3 && n3 > 0) n3--;
          else if (0 === n3) {
            if ("(" === i3) t3++;
            else if (")" === i3 && t3 > 0) t3--;
            else if ("|" === i3 && 0 === t3) {
              a3.push(o3), o3 = "";
              continue;
            }
          }
        }
        o3 += i3;
      } else s3 = 1 === s3 ? 0 : 1, o3 += i3;
      else o3 += i3, r3 = true;
      else o3 += i3, r3 = false;
      return a3.push(o3), a3;
    }, A = (e3) => {
      let a3 = e3.trim(), n3 = true;
      for (; true === n3; ) n3 = false, /^@\([^\\()[\]{}|]+\)$/.test(a3) && (a3 = a3.slice(2, -1), n3 = true);
      if (((e4) => {
        let a4 = false;
        for (const n4 of e4) if (true !== a4) if ("\\" !== n4) {
          if (/[?*+@!()[\]{}]/.test(n4)) return false;
        } else a4 = true;
        else a4 = false;
        return true;
      })(a3)) return a3.replace(/\\(.)/g, "$1");
    }, u = (e3, a3 = true) => {
      if ("+" !== e3[0] && "*" !== e3[0] || "(" !== e3[1]) return;
      let n3 = 0, t3 = 0, s3 = 0, o3 = false;
      for (let r3 = 1; r3 < e3.length; r3++) {
        const i3 = e3[r3];
        if (true !== o3) if ("\\" !== i3) if ('"' !== i3) {
          if (1 !== s3) if ("[" !== i3) {
            if ("]" === i3 && n3 > 0) n3--;
            else if (!(n3 > 0)) if ("(" !== i3) {
              if (")" === i3 && (t3--, 0 === t3)) {
                if (true === a3 && r3 !== e3.length - 1) return;
                return { type: e3[0], body: e3.slice(2, r3), end: r3 };
              }
            } else t3++;
          } else n3++;
        } else s3 = 1 === s3 ? 0 : 1;
        else o3 = true;
        else o3 = false;
      }
    }, g = (e3) => {
      let a3 = 0;
      const n3 = [];
      for (; a3 < e3.length; ) {
        const t3 = u(e3.slice(a3), false);
        if (!t3 || "*" !== t3.type) return;
        const s3 = p(t3.body).map((e4) => e4.trim());
        if (1 !== s3.length) return;
        const o3 = A(s3[0]);
        if (!o3 || 1 !== o3.length) return;
        n3.push(o3), a3 += t3.end + 1;
      }
      if (n3.length < 1) return;
      return `${1 === n3.length ? s2.escapeRegex(n3[0]) : `[${n3.map((e4) => s2.escapeRegex(e4)).join("")}]`}*`;
    }, T = (e3) => {
      let a3 = 0, n3 = e3.trim(), t3 = u(n3);
      for (; t3; ) a3++, n3 = t3.body.trim(), t3 = u(n3);
      return a3;
    }, h = (e3, a3) => {
      if (false === a3.maxExtglobRecursion) return { risky: false };
      const n3 = "number" == typeof a3.maxExtglobRecursion ? a3.maxExtglobRecursion : t2.DEFAULT_MAX_EXTGLOB_RECURSION, s3 = p(e3).map((e4) => e4.trim());
      if (s3.length > 1 && (s3.some((e4) => "" === e4) || s3.some((e4) => /^[*?]+$/.test(e4)) || ((e4) => {
        const a4 = e4.map(A).filter(Boolean);
        for (let e5 = 0; e5 < a4.length; e5++) for (let n4 = e5 + 1; n4 < a4.length; n4++) {
          const t3 = a4[e5], s4 = a4[n4], o3 = t3[0];
          if (o3 && t3 === o3.repeat(t3.length) && s4 === o3.repeat(s4.length) && (t3 === s4 || t3.startsWith(s4) || s4.startsWith(t3))) return true;
        }
        return false;
      })(s3))) return { risky: true };
      for (const e4 of s3) {
        const a4 = g(e4);
        if (a4) return { risky: true, safeOutput: a4 };
        if (T(e4) > n3) return { risky: true };
      }
      return { risky: false };
    }, k = (e3, a3) => {
      if ("string" != typeof e3) throw new TypeError("Expected a string");
      e3 = d[e3] || e3;
      const n3 = { ...a3 }, p2 = "number" == typeof n3.maxLength ? Math.min(o2, n3.maxLength) : o2;
      let A2 = e3.length;
      if (A2 > p2) throw new SyntaxError(`Input length: ${A2}, exceeds maximum allowed length: ${p2}`);
      const u2 = { type: "bos", value: "", output: n3.prepend || "" }, g2 = [u2], T2 = n3.capture ? "" : "?:", _ = s2.isWindows(a3), E = t2.globChars(_), f = t2.extglobChars(E), { DOT_LITERAL: C, PLUS_LITERAL: I, SLASH_LITERAL: v, ONE_CHAR: y, DOTS_SLASH: S, NO_DOT: R, NO_DOT_SLASH: N, NO_DOTS_SLASH: B, QMARK: w, QMARK_NO_DOT: b, STAR: Q, START_ANCHOR: D } = E, M = (e4) => `(${T2}(?:(?!${D}${e4.dot ? S : C}).)*?)`, O = n3.dot ? "" : R, U = n3.dot ? w : b;
      let F = true === n3.bash ? M(n3) : Q;
      n3.capture && (F = `(${F})`), "boolean" == typeof n3.noext && (n3.noextglob = n3.noext);
      const P = { input: e3, index: -1, start: 0, dot: true === n3.dot, consumed: "", output: "", prefix: "", backtrack: false, negated: false, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: false, tokens: g2 };
      e3 = s2.removePrefix(e3, P), A2 = e3.length;
      const L = [], G = [], x = [];
      let V, Y = u2;
      const q = () => P.index === A2 - 1, H = P.peek = (a4 = 1) => e3[P.index + a4], J = P.advance = () => e3[++P.index] || "", W = () => e3.slice(P.index + 1), K = (e4 = "", a4 = 0) => {
        P.consumed += e4, P.index += a4;
      }, j = (e4) => {
        P.output += null != e4.output ? e4.output : e4.value, K(e4.value);
      }, $ = () => {
        let e4 = 1;
        for (; "!" === H() && ("(" !== H(2) || "?" === H(3)); ) J(), P.start++, e4++;
        return e4 % 2 != 0 && (P.negated = true, P.start++, true);
      }, X = (e4) => {
        P[e4]++, x.push(e4);
      }, z = (e4) => {
        P[e4]--, x.pop();
      }, Z = (e4) => {
        if ("globstar" === Y.type) {
          const a4 = P.braces > 0 && ("comma" === e4.type || "brace" === e4.type), n4 = true === e4.extglob || L.length && ("pipe" === e4.type || "paren" === e4.type);
          "slash" === e4.type || "paren" === e4.type || a4 || n4 || (P.output = P.output.slice(0, -Y.output.length), Y.type = "star", Y.value = "*", Y.output = F, P.output += Y.output);
        }
        if (L.length && "paren" !== e4.type && (L[L.length - 1].inner += e4.value), (e4.value || e4.output) && j(e4), Y && "text" === Y.type && "text" === e4.type) return Y.value += e4.value, void (Y.output = (Y.output || "") + e4.value);
        e4.prev = Y, g2.push(e4), Y = e4;
      }, ee = (e4, a4) => {
        const t3 = { ...f[a4], conditions: 1, inner: "" };
        t3.prev = Y, t3.parens = P.parens, t3.output = P.output, t3.startIndex = P.index, t3.tokensIndex = g2.length;
        const s3 = (n3.capture ? "(" : "") + t3.open;
        X("parens"), Z({ type: e4, value: a4, output: P.output ? "" : y }), Z({ type: "paren", extglob: true, value: J(), output: s3 }), L.push(t3);
      }, ae = (t3) => {
        const o3 = e3.slice(t3.startIndex, P.index + 1), r3 = e3.slice(t3.startIndex + 2, P.index), i3 = h(r3, n3);
        if (("plus" === t3.type || "star" === t3.type) && i3.risky) {
          const e4 = i3.safeOutput ? (t3.output ? "" : y) + (n3.capture ? `(${i3.safeOutput})` : i3.safeOutput) : void 0, a4 = g2[t3.tokensIndex];
          a4.type = "text", a4.value = o3, a4.output = e4 || s2.escapeRegex(o3);
          for (let e5 = t3.tokensIndex + 1; e5 < g2.length; e5++) g2[e5].value = "", g2[e5].output = "", delete g2[e5].suffix;
          return P.output = t3.output + a4.output, P.backtrack = true, Z({ type: "paren", extglob: true, value: V, output: "" }), void z("parens");
        }
        let l2, d2 = t3.close + (n3.capture ? ")" : "");
        if ("negate" === t3.type) {
          let e4 = F;
          if (t3.inner && t3.inner.length > 1 && t3.inner.includes("/") && (e4 = M(n3)), (e4 !== F || q() || /^\)+$/.test(W())) && (d2 = t3.close = `)$))${e4}`), t3.inner.includes("*") && (l2 = W()) && /^\.[^\\/.]+$/.test(l2)) {
            const n4 = k(l2, { ...a3, fastpaths: false }).output;
            d2 = t3.close = `)${n4})${e4})`;
          }
          "bos" === t3.prev.type && (P.negatedExtglob = true);
        }
        Z({ type: "paren", extglob: true, value: V, output: d2 }), z("parens");
      };
      if (false !== n3.fastpaths && !/(^[*!]|[/()[\]{}"])/.test(e3)) {
        let t3 = false, o3 = e3.replace(l, (e4, a4, n4, s3, o4, r3) => "\\" === s3 ? (t3 = true, e4) : "?" === s3 ? a4 ? a4 + s3 + (o4 ? w.repeat(o4.length) : "") : 0 === r3 ? U + (o4 ? w.repeat(o4.length) : "") : w.repeat(n4.length) : "." === s3 ? C.repeat(n4.length) : "*" === s3 ? a4 ? a4 + s3 + (o4 ? F : "") : F : a4 ? e4 : `\\${e4}`);
        return true === t3 && (o3 = true === n3.unescape ? o3.replace(/\\/g, "") : o3.replace(/\\+/g, (e4) => e4.length % 2 == 0 ? "\\\\" : e4 ? "\\" : "")), o3 === e3 && true === n3.contains ? (P.output = e3, P) : (P.output = s2.wrapOutput(o3, P, a3), P);
      }
      for (; !q(); ) {
        if (V = J(), "\0" === V) continue;
        if ("\\" === V) {
          const e4 = H();
          if ("/" === e4 && true !== n3.bash) continue;
          if ("." === e4 || ";" === e4) continue;
          if (!e4) {
            V += "\\", Z({ type: "text", value: V });
            continue;
          }
          const a5 = /^\\+/.exec(W());
          let t4 = 0;
          if (a5 && a5[0].length > 2 && (t4 = a5[0].length, P.index += t4, t4 % 2 != 0 && (V += "\\")), true === n3.unescape ? V = J() : V += J(), 0 === P.brackets) {
            Z({ type: "text", value: V });
            continue;
          }
        }
        if (P.brackets > 0 && ("]" !== V || "[" === Y.value || "[^" === Y.value)) {
          if (false !== n3.posix && ":" === V) {
            const e4 = Y.value.slice(1);
            if (e4.includes("[") && (Y.posix = true, e4.includes(":"))) {
              const e5 = Y.value.lastIndexOf("["), a5 = Y.value.slice(0, e5), n4 = Y.value.slice(e5 + 2), t4 = r2[n4];
              if (t4) {
                Y.value = a5 + t4, P.backtrack = true, J(), u2.output || 1 !== g2.indexOf(Y) || (u2.output = y);
                continue;
              }
            }
          }
          ("[" === V && ":" !== H() || "-" === V && "]" === H()) && (V = `\\${V}`), "]" !== V || "[" !== Y.value && "[^" !== Y.value || (V = `\\${V}`), true === n3.posix && "!" === V && "[" === Y.value && (V = "^"), Y.value += V, j({ value: V });
          continue;
        }
        if (1 === P.quotes && '"' !== V) {
          V = s2.escapeRegex(V), Y.value += V, j({ value: V });
          continue;
        }
        if ('"' === V) {
          P.quotes = 1 === P.quotes ? 0 : 1, true === n3.keepQuotes && Z({ type: "text", value: V });
          continue;
        }
        if ("(" === V) {
          X("parens"), Z({ type: "paren", value: V });
          continue;
        }
        if (")" === V) {
          if (0 === P.parens && true === n3.strictBrackets) throw new SyntaxError(c("opening", "("));
          const e4 = L[L.length - 1];
          if (e4 && P.parens === e4.parens + 1) {
            ae(L.pop());
            continue;
          }
          Z({ type: "paren", value: V, output: P.parens ? ")" : "\\)" }), z("parens");
          continue;
        }
        if ("[" === V) {
          if (true !== n3.nobracket && W().includes("]")) X("brackets");
          else {
            if (true !== n3.nobracket && true === n3.strictBrackets) throw new SyntaxError(c("closing", "]"));
            V = `\\${V}`;
          }
          Z({ type: "bracket", value: V });
          continue;
        }
        if ("]" === V) {
          if (true === n3.nobracket || Y && "bracket" === Y.type && 1 === Y.value.length) {
            Z({ type: "text", value: V, output: `\\${V}` });
            continue;
          }
          if (0 === P.brackets) {
            if (true === n3.strictBrackets) throw new SyntaxError(c("opening", "["));
            Z({ type: "text", value: V, output: `\\${V}` });
            continue;
          }
          z("brackets");
          const e4 = Y.value.slice(1);
          if (true === Y.posix || "^" !== e4[0] || e4.includes("/") || (V = `/${V}`), Y.value += V, j({ value: V }), false === n3.literalBrackets || s2.hasRegexChars(e4)) continue;
          const a5 = s2.escapeRegex(Y.value);
          if (P.output = P.output.slice(0, -Y.value.length), true === n3.literalBrackets) {
            P.output += a5, Y.value = a5;
            continue;
          }
          Y.value = `(${T2}${a5}|${Y.value})`, P.output += Y.value;
          continue;
        }
        if ("{" === V && true !== n3.nobrace) {
          X("braces");
          const e4 = { type: "brace", value: V, output: "(", outputIndex: P.output.length, tokensIndex: P.tokens.length };
          G.push(e4), Z(e4);
          continue;
        }
        if ("}" === V) {
          const e4 = G[G.length - 1];
          if (true === n3.nobrace || !e4) {
            Z({ type: "text", value: V, output: V });
            continue;
          }
          let a5 = ")";
          if (true === e4.dots) {
            const e5 = g2.slice(), t4 = [];
            for (let a6 = e5.length - 1; a6 >= 0 && (g2.pop(), "brace" !== e5[a6].type); a6--) "dots" !== e5[a6].type && t4.unshift(e5[a6].value);
            a5 = m(t4, n3), P.backtrack = true;
          }
          if (true !== e4.comma && true !== e4.dots) {
            const n4 = P.output.slice(0, e4.outputIndex), t4 = P.tokens.slice(e4.tokensIndex);
            e4.value = e4.output = "\\{", V = a5 = "\\}", P.output = n4;
            for (const e5 of t4) P.output += e5.output || e5.value;
          }
          Z({ type: "brace", value: V, output: a5 }), z("braces"), G.pop();
          continue;
        }
        if ("|" === V) {
          L.length > 0 && L[L.length - 1].conditions++, Z({ type: "text", value: V });
          continue;
        }
        if ("," === V) {
          let e4 = V;
          const a5 = G[G.length - 1];
          a5 && "braces" === x[x.length - 1] && (a5.comma = true, e4 = "|"), Z({ type: "comma", value: V, output: e4 });
          continue;
        }
        if ("/" === V) {
          if ("dot" === Y.type && P.index === P.start + 1) {
            P.start = P.index + 1, P.consumed = "", P.output = "", g2.pop(), Y = u2;
            continue;
          }
          Z({ type: "slash", value: V, output: v });
          continue;
        }
        if ("." === V) {
          if (P.braces > 0 && "dot" === Y.type) {
            "." === Y.value && (Y.output = C);
            const e4 = G[G.length - 1];
            Y.type = "dots", Y.output += V, Y.value += V, e4.dots = true;
            continue;
          }
          if (P.braces + P.parens === 0 && "bos" !== Y.type && "slash" !== Y.type) {
            Z({ type: "text", value: V, output: C });
            continue;
          }
          Z({ type: "dot", value: V, output: C });
          continue;
        }
        if ("?" === V) {
          if (!(Y && "(" === Y.value) && true !== n3.noextglob && "(" === H() && "?" !== H(2)) {
            ee("qmark", V);
            continue;
          }
          if (Y && "paren" === Y.type) {
            const e4 = H();
            let a5 = V;
            if ("<" === e4 && !s2.supportsLookbehinds()) throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            ("(" === Y.value && !/[!=<:]/.test(e4) || "<" === e4 && !/<([!=]|\w+>)/.test(W())) && (a5 = `\\${V}`), Z({ type: "text", value: V, output: a5 });
            continue;
          }
          if (true !== n3.dot && ("slash" === Y.type || "bos" === Y.type)) {
            Z({ type: "qmark", value: V, output: b });
            continue;
          }
          Z({ type: "qmark", value: V, output: w });
          continue;
        }
        if ("!" === V) {
          if (true !== n3.noextglob && "(" === H() && ("?" !== H(2) || !/[!=<:]/.test(H(3)))) {
            ee("negate", V);
            continue;
          }
          if (true !== n3.nonegate && 0 === P.index) {
            $();
            continue;
          }
        }
        if ("+" === V) {
          if (true !== n3.noextglob && "(" === H() && "?" !== H(2)) {
            ee("plus", V);
            continue;
          }
          if (Y && "(" === Y.value || false === n3.regex) {
            Z({ type: "plus", value: V, output: I });
            continue;
          }
          if (Y && ("bracket" === Y.type || "paren" === Y.type || "brace" === Y.type) || P.parens > 0) {
            Z({ type: "plus", value: V });
            continue;
          }
          Z({ type: "plus", value: I });
          continue;
        }
        if ("@" === V) {
          if (true !== n3.noextglob && "(" === H() && "?" !== H(2)) {
            Z({ type: "at", extglob: true, value: V, output: "" });
            continue;
          }
          Z({ type: "text", value: V });
          continue;
        }
        if ("*" !== V) {
          "$" !== V && "^" !== V || (V = `\\${V}`);
          const e4 = i2.exec(W());
          e4 && (V += e4[0], P.index += e4[0].length), Z({ type: "text", value: V });
          continue;
        }
        if (Y && ("globstar" === Y.type || true === Y.star)) {
          Y.type = "star", Y.star = true, Y.value += V, Y.output = F, P.backtrack = true, P.globstar = true, K(V);
          continue;
        }
        let a4 = W();
        if (true !== n3.noextglob && /^\([^?]/.test(a4)) {
          ee("star", V);
          continue;
        }
        if ("star" === Y.type) {
          if (true === n3.noglobstar) {
            K(V);
            continue;
          }
          const t4 = Y.prev, s3 = t4.prev, o3 = "slash" === t4.type || "bos" === t4.type, r3 = s3 && ("star" === s3.type || "globstar" === s3.type);
          if (true === n3.bash && (!o3 || a4[0] && "/" !== a4[0])) {
            Z({ type: "star", value: V, output: "" });
            continue;
          }
          const i3 = P.braces > 0 && ("comma" === t4.type || "brace" === t4.type), l2 = L.length && ("pipe" === t4.type || "paren" === t4.type);
          if (!o3 && "paren" !== t4.type && !i3 && !l2) {
            Z({ type: "star", value: V, output: "" });
            continue;
          }
          for (; "/**" === a4.slice(0, 3); ) {
            const n4 = e3[P.index + 4];
            if (n4 && "/" !== n4) break;
            a4 = a4.slice(3), K("/**", 3);
          }
          if ("bos" === t4.type && q()) {
            Y.type = "globstar", Y.value += V, Y.output = M(n3), P.output = Y.output, P.globstar = true, K(V);
            continue;
          }
          if ("slash" === t4.type && "bos" !== t4.prev.type && !r3 && q()) {
            P.output = P.output.slice(0, -(t4.output + Y.output).length), t4.output = `(?:${t4.output}`, Y.type = "globstar", Y.output = M(n3) + (n3.strictSlashes ? ")" : "|$)"), Y.value += V, P.globstar = true, P.output += t4.output + Y.output, K(V);
            continue;
          }
          if ("slash" === t4.type && "bos" !== t4.prev.type && "/" === a4[0]) {
            const e4 = void 0 !== a4[1] ? "|$" : "";
            P.output = P.output.slice(0, -(t4.output + Y.output).length), t4.output = `(?:${t4.output}`, Y.type = "globstar", Y.output = `${M(n3)}${v}|${v}${e4})`, Y.value += V, P.output += t4.output + Y.output, P.globstar = true, K(V + J()), Z({ type: "slash", value: "/", output: "" });
            continue;
          }
          if ("bos" === t4.type && "/" === a4[0]) {
            Y.type = "globstar", Y.value += V, Y.output = `(?:^|${v}|${M(n3)}${v})`, P.output = Y.output, P.globstar = true, K(V + J()), Z({ type: "slash", value: "/", output: "" });
            continue;
          }
          P.output = P.output.slice(0, -Y.output.length), Y.type = "globstar", Y.output = M(n3), Y.value += V, P.output += Y.output, P.globstar = true, K(V);
          continue;
        }
        const t3 = { type: "star", value: V, output: F };
        true !== n3.bash ? !Y || "bracket" !== Y.type && "paren" !== Y.type || true !== n3.regex ? (P.index !== P.start && "slash" !== Y.type && "dot" !== Y.type || ("dot" === Y.type ? (P.output += N, Y.output += N) : true === n3.dot ? (P.output += B, Y.output += B) : (P.output += O, Y.output += O), "*" !== H() && (P.output += y, Y.output += y)), Z(t3)) : (t3.output = V, Z(t3)) : (t3.output = ".*?", "bos" !== Y.type && "slash" !== Y.type || (t3.output = O + t3.output), Z(t3));
      }
      for (; P.brackets > 0; ) {
        if (true === n3.strictBrackets) throw new SyntaxError(c("closing", "]"));
        P.output = s2.escapeLast(P.output, "["), z("brackets");
      }
      for (; P.parens > 0; ) {
        if (true === n3.strictBrackets) throw new SyntaxError(c("closing", ")"));
        P.output = s2.escapeLast(P.output, "("), z("parens");
      }
      for (; P.braces > 0; ) {
        if (true === n3.strictBrackets) throw new SyntaxError(c("closing", "}"));
        P.output = s2.escapeLast(P.output, "{"), z("braces");
      }
      if (true === n3.strictSlashes || "star" !== Y.type && "bracket" !== Y.type || Z({ type: "maybe_slash", value: "", output: `${v}?` }), true === P.backtrack) {
        P.output = "";
        for (const e4 of P.tokens) P.output += null != e4.output ? e4.output : e4.value, e4.suffix && (P.output += e4.suffix);
      }
      return P;
    };
    k.fastpaths = (e3, a3) => {
      const n3 = { ...a3 }, r3 = "number" == typeof n3.maxLength ? Math.min(o2, n3.maxLength) : o2, i3 = e3.length;
      if (i3 > r3) throw new SyntaxError(`Input length: ${i3}, exceeds maximum allowed length: ${r3}`);
      e3 = d[e3] || e3;
      const l2 = s2.isWindows(a3), { DOT_LITERAL: m2, SLASH_LITERAL: c2, ONE_CHAR: p2, DOTS_SLASH: A2, NO_DOT: u2, NO_DOTS: g2, NO_DOTS_SLASH: T2, STAR: h2, START_ANCHOR: k2 } = t2.globChars(l2), _ = n3.dot ? g2 : u2, E = n3.dot ? T2 : u2, f = n3.capture ? "" : "?:";
      let C = true === n3.bash ? ".*?" : h2;
      n3.capture && (C = `(${C})`);
      const I = (e4) => true === e4.noglobstar ? C : `(${f}(?:(?!${k2}${e4.dot ? A2 : m2}).)*?)`, v = (e4) => {
        switch (e4) {
          case "*":
            return `${_}${p2}${C}`;
          case ".*":
            return `${m2}${p2}${C}`;
          case "*.*":
            return `${_}${C}${m2}${p2}${C}`;
          case "*/*":
            return `${_}${C}${c2}${p2}${E}${C}`;
          case "**":
            return _ + I(n3);
          case "**/*":
            return `(?:${_}${I(n3)}${c2})?${E}${p2}${C}`;
          case "**/*.*":
            return `(?:${_}${I(n3)}${c2})?${E}${C}${m2}${p2}${C}`;
          case "**/.*":
            return `(?:${_}${I(n3)}${c2})?${m2}${p2}${C}`;
          default: {
            const a4 = /^(.*?)\.(\w+)$/.exec(e4);
            if (!a4) return;
            const n4 = v(a4[1]);
            if (!n4) return;
            return n4 + m2 + a4[2];
          }
        }
      }, y = s2.removePrefix(e3, { negated: false, prefix: "" });
      let S = v(y);
      return S && true !== n3.strictSlashes && (S += `${c2}?`), S;
    }, e2.exports = k;
  }