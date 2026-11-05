// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 46135 range:3317565..3358123
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
46135: (e, t, r) => {
    "use strict";
    r.d(t, { xF: () => se });
    const n = (e2, t2, r2) => {
      const n2 = e2 instanceof RegExp ? s(e2, r2) : e2, i2 = t2 instanceof RegExp ? s(t2, r2) : t2, a2 = null !== n2 && null != i2 && o(n2, i2, r2);
      return a2 && { start: a2[0], end: a2[1], pre: r2.slice(0, a2[0]), body: r2.slice(a2[0] + n2.length, a2[1]), post: r2.slice(a2[1] + i2.length) };
    }, s = (e2, t2) => {
      const r2 = t2.match(e2);
      return r2 ? r2[0] : null;
    }, o = (e2, t2, r2) => {
      let n2, s2, o2, i2, a2, c2 = r2.indexOf(e2), l2 = r2.indexOf(t2, c2 + 1), u2 = c2;
      if (c2 >= 0 && l2 > 0) {
        if (e2 === t2) return [c2, l2];
        for (n2 = [], o2 = r2.length; u2 >= 0 && !a2; ) {
          if (u2 === c2) n2.push(u2), c2 = r2.indexOf(e2, u2 + 1);
          else if (1 === n2.length) {
            const e3 = n2.pop();
            void 0 !== e3 && (a2 = [e3, l2]);
          } else s2 = n2.pop(), void 0 !== s2 && s2 < o2 && (o2 = s2, i2 = l2), l2 = r2.indexOf(t2, u2 + 1);
          u2 = c2 < l2 && c2 >= 0 ? c2 : l2;
        }
        n2.length && void 0 !== i2 && (a2 = [o2, i2]);
      }
      return a2;
    }, i = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", c = "\0CLOSE" + Math.random() + "\0", l = "\0COMMA" + Math.random() + "\0", u = "\0PERIOD" + Math.random() + "\0", d = new RegExp(i, "g"), p = new RegExp(a, "g"), m = new RegExp(c, "g"), h = new RegExp(l, "g"), f = new RegExp(u, "g"), g = /\\\\/g, y = /\\{/g, w = /\\}/g, v = /\\,/g, _ = /\\\./g, b = 1e5, S = 4e6;
    function k(e2) {
      return isNaN(e2) ? e2.charCodeAt(0) : parseInt(e2, 10);
    }
    function x(e2) {
      return e2.replace(d, "\\").replace(p, "{").replace(m, "}").replace(h, ",").replace(f, ".");
    }
    function E(e2) {
      if (!e2) return [""];
      const t2 = [], r2 = n("{", "}", e2);
      if (!r2) return e2.split(",");
      const { pre: s2, body: o2, post: i2 } = r2, a2 = s2.split(",");
      a2[a2.length - 1] += "{" + o2 + "}";
      const c2 = E(i2);
      return i2.length && (a2[a2.length - 1] += c2.shift(), a2.push.apply(a2, c2)), t2.push.apply(t2, a2), t2;
    }
    function I(e2, t2 = {}) {
      if (!e2) return [];
      const { max: r2 = b, maxLength: n2 = S } = t2;
      return "{}" === e2.slice(0, 2) && (e2 = "\\{\\}" + e2.slice(2)), J((function(e3) {
        return e3.replace(g, i).replace(y, a).replace(w, c).replace(v, l).replace(_, u);
      })(e2), r2, n2, true).map(x);
    }
    function T(e2) {
      return "{" + e2 + "}";
    }
    function C(e2) {
      return /^-?0\d/.test(e2);
    }
    function P(e2, t2) {
      return e2 <= t2;
    }
    function A(e2, t2) {
      return e2 >= t2;
    }
    function R(e2, t2, r2, n2, s2, o2) {
      const i2 = [];
      let a2 = 0;
      for (let c2 = 0; c2 < e2.length; c2++) for (let l2 = 0; l2 < r2.length; l2++) {
        if (i2.length >= n2) return i2;
        const u2 = e2[c2] + t2 + r2[l2];
        if (!o2 || u2) {
          if (a2 + u2.length > s2) return i2;
          i2.push(u2), a2 += u2.length;
        }
      }
      return i2;
    }
    function M(e2, t2, r2, n2) {
      const s2 = e2.split(/\.\./), o2 = [];
      if (void 0 === s2[0] || void 0 === s2[1]) return o2;
      const i2 = k(s2[0]), a2 = k(s2[1]), c2 = Math.max(s2[0].length, s2[1].length);
      let l2 = 3 === s2.length && void 0 !== s2[2] ? Math.max(Math.abs(k(s2[2])), 1) : 1, u2 = P;
      a2 < i2 && (l2 *= -1, u2 = A);
      const d2 = s2.some(C);
      let p2 = 0;
      for (let e3 = i2; u2(e3, a2) && o2.length < r2; e3 += l2) {
        let r3;
        if (t2) r3 = String.fromCharCode(e3), "\\" === r3 && (r3 = "");
        else if (r3 = String(e3), d2) {
          const t3 = c2 - r3.length;
          if (t3 > 0) {
            const n3 = new Array(t3 + 1).join("0");
            r3 = e3 < 0 ? "-" + n3 + r3.slice(1) : n3 + r3;
          }
        }
        if (p2 + r3.length > n2) break;
        o2.push(r3), p2 += r3.length;
      }
      return o2;
    }
    function J(e2, t2, r2, s2) {
      let o2 = [""], i2 = false, a2 = true;
      for (; ; ) {
        const l2 = n("{", "}", e2);
        if (!l2) return R(o2, e2, [""], t2, r2, i2);
        const u2 = l2.pre;
        if (/\$$/.test(u2)) {
          if (o2 = R(o2, u2 + "{" + l2.body + "}", [""], t2, r2, i2 && !l2.post.length), a2 = false, !l2.post.length) break;
          e2 = l2.post;
          continue;
        }
        const d2 = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(l2.body), p2 = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(l2.body), m2 = d2 || p2, h2 = l2.body.indexOf(",") >= 0;
        if (!m2 && !h2) {
          if (l2.post.match(/,(?!,).*\}/)) {
            e2 = l2.pre + "{" + l2.body + c + l2.post, s2 = true;
            continue;
          }
          return R(o2, u2 + "{" + l2.body + "}" + l2.post, [""], t2, r2, i2);
        }
        let f2;
        if (a2 && (i2 = s2 && !m2, a2 = false), m2) f2 = M(l2.body, p2, t2, r2);
        else {
          let n2 = E(l2.body);
          if (1 === n2.length && void 0 !== n2[0] && (n2 = J(n2[0], t2, r2, false).map(T), 1 === n2.length)) {
            if (o2 = R(o2, u2 + n2[0], [""], t2, r2, i2 && !l2.post.length), !l2.post.length) break;
            e2 = l2.post;
            continue;
          }
          let s3 = i2 && !l2.post.length && !u2;
          for (let e3 = 0; s3 && e3 < o2.length; e3++) o2[e3] && (s3 = false);
          f2 = [];
          let a3 = 0;
          e: for (let e3 = 0; e3 < n2.length; e3++) {
            const o3 = J(n2[e3], t2, r2, false);
            for (let e4 = 0; e4 < o3.length; e4++) {
              const n3 = o3[e4];
              if (!s3 || n3) {
                if (f2.length >= t2 || a3 + n3.length > r2) break e;
                f2.push(n3), a3 += n3.length;
              }
            }
          }
        }
        if (o2 = R(o2, u2, f2, t2, r2, i2 && !l2.post.length), !l2.post.length) break;
        e2 = l2.post;
      }
      return o2;
    }
    const O = (e2) => {
      if ("string" != typeof e2) throw new TypeError("invalid pattern");
      if (e2.length > 65536) throw new TypeError("pattern is too long");
    }, B = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true], "[:alpha:]": ["\\p{L}\\p{Nl}", true], "[:ascii:]": ["\\x00-\\x7f", false], "[:blank:]": ["\\p{Zs}\\t", true], "[:cntrl:]": ["\\p{Cc}", true], "[:digit:]": ["\\p{Nd}", true], "[:graph:]": ["\\p{Z}\\p{C}", true, true], "[:lower:]": ["\\p{Ll}", true], "[:print:]": ["\\p{C}", true], "[:punct:]": ["\\p{P}", true], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true], "[:upper:]": ["\\p{Lu}", true], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true], "[:xdigit:]": ["A-Fa-f0-9", false] }, D = (e2) => e2.replace(/[[\]\\-]/g, "\\$&"), q = (e2) => e2.join(""), N = (e2, t2) => {
      const r2 = t2;
      if ("[" !== e2.charAt(r2)) throw new Error("not in a brace expression");
      const n2 = [], s2 = [];
      let o2 = r2 + 1, i2 = false, a2 = false, c2 = false, l2 = false, u2 = r2, d2 = "";
      e: for (; o2 < e2.length; ) {
        const t3 = e2.charAt(o2);
        if ("!" !== t3 && "^" !== t3 || o2 !== r2 + 1) {
          if ("]" === t3 && i2 && !c2) {
            u2 = o2 + 1;
            break;
          }
          if (i2 = true, "\\" !== t3 || c2) {
            if ("[" === t3 && !c2) {
              for (const [t4, [i3, c3, l3]] of Object.entries(B)) if (e2.startsWith(t4, o2)) {
                if (d2) return ["$.", false, e2.length - r2, true];
                o2 += t4.length, l3 ? s2.push(i3) : n2.push(i3), a2 = a2 || c3;
                continue e;
              }
            }
            c2 = false, d2 ? (t3 > d2 ? n2.push(D(d2) + "-" + D(t3)) : t3 === d2 && n2.push(D(t3)), d2 = "", o2++) : e2.startsWith("-]", o2 + 1) ? (n2.push(D(t3 + "-")), o2 += 2) : e2.startsWith("-", o2 + 1) ? (d2 = t3, o2 += 2) : (n2.push(D(t3)), o2++);
          } else c2 = true, o2++;
        } else l2 = true, o2++;
      }
      if (u2 < o2) return ["", false, 0, false];
      if (!n2.length && !s2.length) return ["$.", false, e2.length - r2, true];
      if (0 === s2.length && 1 === n2.length && /^\\?.$/.test(n2[0]) && !l2) {
        const e3 = 2 === n2[0].length ? n2[0].slice(-1) : n2[0];
        return [(p2 = e3, p2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")), false, u2 - r2, false];
      }
      var p2;
      const m2 = "[" + (l2 ? "^" : "") + q(n2) + "]", h2 = "[" + (l2 ? "" : "^") + q(s2) + "]";
      return [n2.length && s2.length ? "(" + m2 + "|" + h2 + ")" : n2.length ? m2 : h2, a2, u2 - r2, true];
    }, F = (e2, { windowsPathsNoEscape: t2 = false, magicalBraces: r2 = true } = {}) => r2 ? t2 ? e2.replace(/\[([^/\\])\]/g, "$1") : e2.replace(/((?!\\).|^)\[([^/\\])\]/g, "$1$2").replace(/\\([^/])/g, "$1") : t2 ? e2.replace(/\[([^/\\{}])\]/g, "$1") : e2.replace(/((?!\\).|^)\[([^/\\{}])\]/g, "$1$2").replace(/\\([^/{}])/g, "$1");
    var U;
    const L = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), $ = (e2) => L.has(e2), j = (e2) => $(e2.type), G = /* @__PURE__ */ new Map([["!", ["@"]], ["?", ["?", "@"]], ["@", ["@"]], ["*", ["*", "+", "?", "@"]], ["+", ["+", "@"]]]), z = /* @__PURE__ */ new Map([["!", ["?"]], ["@", ["?"]], ["+", ["?", "*"]]]), W = /* @__PURE__ */ new Map([["!", ["?", "@"]], ["?", ["?", "@"]], ["@", ["?", "@"]], ["*", ["*", "+", "?", "@"]], ["+", ["+", "@", "?", "*"]]]), H = /* @__PURE__ */ new Map([["!", /* @__PURE__ */ new Map([["!", "@"]])], ["?", /* @__PURE__ */ new Map([["*", "*"], ["+", "*"]])], ["@", /* @__PURE__ */ new Map([["!", "!"], ["?", "?"], ["@", "@"], ["*", "*"], ["+", "+"]])], ["+", /* @__PURE__ */ new Map([["?", "*"], ["*", "*"]])]]), K = "(?!\\.)", V = /* @__PURE__ */ new Set(["[", "."]), Y = /* @__PURE__ */ new Set(["..", "."]), Q = new Set("().*{}+?[]^$\\!"), X = (e2) => e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Z = "[^/]", ee = Z + "*?", te = Z + "+?";
    let re = 0;
    class ne {
      type;
      #a;
      #c;
      #l = false;
      #u = [];
      #d;
      #p;
      #m;
      #h = false;
      #f;
      #g;
      #y = false;
      id = ++re;
      get depth() {
        return (this.#d?.depth ?? -1) + 1;
      }
      [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
        return { "@@type": "AST", id: this.id, type: this.type, root: this.#a.id, parent: this.#d?.id, depth: this.depth, partsLength: this.#u.length, parts: this.#u };
      }
      constructor(e2, t2, r2 = {}) {
        this.type = e2, e2 && (this.#c = true), this.#d = t2, this.#a = this.#d ? this.#d.#a : this, this.#f = this.#a === this ? r2 : this.#a.#f, this.#m = this.#a === this ? [] : this.#a.#m, "!" !== e2 || this.#a.#h || this.#m.push(this), this.#p = this.#d ? this.#d.#u.length : 0;
      }
      get hasMagic() {
        if (void 0 !== this.#c) return this.#c;
        for (const e2 of this.#u) if ("string" != typeof e2 && (e2.type || e2.hasMagic)) return this.#c = true;
        return this.#c;
      }
      toString() {
        return void 0 !== this.#g ? this.#g : this.type ? this.#g = this.type + "(" + this.#u.map((e2) => String(e2)).join("|") + ")" : this.#g = this.#u.map((e2) => String(e2)).join("");
      }
      #w() {
        if (this !== this.#a) throw new Error("should only call on root");
        if (this.#h) return this;
        let e2;
        for (this.toString(), this.#h = true; e2 = this.#m.pop(); ) {
          if ("!" !== e2.type) continue;
          let t2 = e2, r2 = t2.#d;
          for (; r2; ) {
            for (let n2 = t2.#p + 1; !r2.type && n2 < r2.#u.length; n2++) for (const t3 of e2.#u) {
              if ("string" == typeof t3) throw new Error("string part in extglob AST??");
              t3.copyIn(r2.#u[n2]);
            }
            t2 = r2, r2 = t2.#d;
          }
        }
        return this;
      }
      push(...e2) {
        for (const t2 of e2) if ("" !== t2) {
          if ("string" != typeof t2 && !(t2 instanceof U && t2.#d === this)) throw new Error("invalid part: " + t2);
          this.#u.push(t2);
        }
      }
      toJSON() {
        const e2 = null === this.type ? this.#u.slice().map((e3) => "string" == typeof e3 ? e3 : e3.toJSON()) : [this.type, ...this.#u.map((e3) => e3.toJSON())];
        return this.isStart() && !this.type && e2.unshift([]), this.isEnd() && (this === this.#a || this.#a.#h && "!" === this.#d?.type) && e2.push({}), e2;
      }
      isStart() {
        if (this.#a === this) return true;
        if (!this.#d?.isStart()) return false;
        if (0 === this.#p) return true;
        const e2 = this.#d;
        for (let t2 = 0; t2 < this.#p; t2++) {
          const r2 = e2.#u[t2];
          if (!(r2 instanceof U && "!" === r2.type)) return false;
        }
        return true;
      }
      isEnd() {
        if (this.#a === this) return true;
        if ("!" === this.#d?.type) return true;
        if (!this.#d?.isEnd()) return false;
        if (!this.type) return this.#d?.isEnd();
        const e2 = this.#d ? this.#d.#u.length : 0;
        return this.#p === e2 - 1;
      }
      copyIn(e2) {
        "string" == typeof e2 ? this.push(e2) : this.push(e2.clone(this));
      }
      clone(e2) {
        const t2 = new U(this.type, e2);
        for (const e3 of this.#u) t2.copyIn(e3);
        return t2;
      }
      static #v(e2, t2, r2, n2, s2) {
        const o2 = n2.maxExtglobRecursion ?? 2;
        let i2 = false, a2 = false, c2 = -1, l2 = false;
        if (null === t2.type) {
          let u3 = r2, d3 = "";
          for (; u3 < e2.length; ) {
            const r3 = e2.charAt(u3++);
            if (i2 || "\\" === r3) {
              i2 = !i2, d3 += r3;
              continue;
            }
            if (a2) {
              u3 === c2 + 1 ? "^" !== r3 && "!" !== r3 || (l2 = true) : "]" !== r3 || u3 === c2 + 2 && l2 || (a2 = false), d3 += r3;
              continue;
            }
            if ("[" === r3) {
              a2 = true, c2 = u3, l2 = false, d3 += r3;
              continue;
            }
            if (!n2.noext && $(r3) && "(" === e2.charAt(u3) && s2 <= o2) {
              t2.push(d3), d3 = "";
              const o3 = new U(r3, t2);
              u3 = U.#v(e2, o3, u3, n2, s2 + 1), t2.push(o3);
              continue;
            }
            d3 += r3;
          }
          return t2.push(d3), u3;
        }
        let u2 = r2 + 1, d2 = new U(null, t2);
        const p2 = [];
        let m2 = "";
        for (; u2 < e2.length; ) {
          const r3 = e2.charAt(u2++);
          if (i2 || "\\" === r3) {
            i2 = !i2, m2 += r3;
            continue;
          }
          if (a2) {
            u2 === c2 + 1 ? "^" !== r3 && "!" !== r3 || (l2 = true) : "]" !== r3 || u2 === c2 + 2 && l2 || (a2 = false), m2 += r3;
            continue;
          }
          if ("[" === r3) {
            a2 = true, c2 = u2, l2 = false, m2 += r3;
            continue;
          }
          if (!n2.noext && $(r3) && "(" === e2.charAt(u2) && (s2 <= o2 || t2 && t2.#_(r3))) {
            const o3 = t2 && t2.#_(r3) ? 0 : 1;
            d2.push(m2), m2 = "";
            const i3 = new U(r3, d2);
            d2.push(i3), u2 = U.#v(e2, i3, u2, n2, s2 + o3);
            continue;
          }
          if ("|" !== r3) {
            if (")" === r3) return "" === m2 && 0 === t2.#u.length && (t2.#y = true), d2.push(m2), m2 = "", t2.push(...p2, d2), u2;
            m2 += r3;
          } else d2.push(m2), m2 = "", p2.push(d2), d2 = new U(null, t2);
        }
        return t2.type = null, t2.#c = void 0, t2.#u = [e2.substring(r2 - 1)], u2;
      }
      #b(e2) {
        return this.#S(e2, z);
      }
      #S(e2, t2 = G) {
        if (!e2 || "object" != typeof e2 || null !== e2.type || 1 !== e2.#u.length || null === this.type) return false;
        const r2 = e2.#u[0];
        return !(!r2 || "object" != typeof r2 || null === r2.type) && this.#_(r2.type, t2);
      }
      #_(e2, t2 = W) {
        return !!t2.get(this.type)?.includes(e2);
      }
      #k(e2, t2) {
        const r2 = e2.#u[0], n2 = new U(null, r2, this.options);
        n2.#u.push(""), r2.push(n2), this.#x(e2, t2);
      }
      #x(e2, t2) {
        const r2 = e2.#u[0];
        this.#u.splice(t2, 1, ...r2.#u);
        for (const e3 of r2.#u) "object" == typeof e3 && (e3.#d = this);
        this.#g = void 0;
      }
      #E(e2) {
        const t2 = H.get(this.type);
        return !!t2?.has(e2);
      }
      #I(e2) {
        if (!e2 || "object" != typeof e2 || null !== e2.type || 1 !== e2.#u.length || null === this.type || 1 !== this.#u.length) return false;
        const t2 = e2.#u[0];
        return !(!t2 || "object" != typeof t2 || null === t2.type) && this.#E(t2.type);
      }
      #T(e2) {
        const t2 = H.get(this.type), r2 = e2.#u[0], n2 = t2?.get(r2.type);
        if (!n2) return false;
        this.#u = r2.#u;
        for (const e3 of this.#u) "object" == typeof e3 && (e3.#d = this);
        this.type = n2, this.#g = void 0, this.#y = false;
      }
      static fromGlob(e2, t2 = {}) {
        const r2 = new U(null, void 0, t2);
        return U.#v(e2, r2, 0, t2, 0), r2;
      }
      toMMPattern() {
        if (this !== this.#a) return this.#a.toMMPattern();
        const e2 = this.toString(), [t2, r2, n2, s2] = this.toRegExpSource();
        if (!(n2 || this.#c || this.#f.nocase && !this.#f.nocaseMagicOnly && e2.toUpperCase() !== e2.toLowerCase())) return r2;
        const o2 = (this.#f.nocase ? "i" : "") + (s2 ? "u" : "");
        return Object.assign(new RegExp(`^${t2}$`, o2), { _src: t2, _glob: e2 });
      }
      get options() {
        return this.#f;
      }
      toRegExpSource(e2) {
        const t2 = e2 ?? !!this.#f.dot;
        if (this.#a === this && (this.#C(), this.#w()), !j(this)) {
          const r3 = this.isStart() && this.isEnd() && !this.#u.some((e3) => "string" != typeof e3), n3 = this.#u.map((t3) => {
            const [n4, s4, o4, i3] = "string" == typeof t3 ? U.#P(t3, this.#c, r3) : t3.toRegExpSource(e2);
            return this.#c = this.#c || o4, this.#l = this.#l || i3, n4;
          }).join("");
          let s3 = "";
          if (this.isStart() && "string" == typeof this.#u[0]) {
            if (!(1 === this.#u.length && Y.has(this.#u[0]))) {
              const r4 = V, o4 = t2 && r4.has(n3.charAt(0)) || n3.startsWith("\\.") && r4.has(n3.charAt(2)) || n3.startsWith("\\.\\.") && r4.has(n3.charAt(4)), i3 = !t2 && !e2 && r4.has(n3.charAt(0));
              s3 = o4 ? "(?!(?:^|/)\\.\\.?(?:$|/))" : i3 ? K : "";
            }
          }
          let o3 = "";
          this.isEnd() && this.#a.#h && "!" === this.#d?.type && (o3 = "(?:$|\\/)");
          return [s3 + n3 + o3, F(n3), this.#c = !!this.#c, this.#l];
        }
        const r2 = "*" === this.type || "+" === this.type, n2 = "!" === this.type ? "(?:(?!(?:" : "(?:";
        let s2 = this.#A(t2);
        if (this.isStart() && this.isEnd() && !s2 && "!" !== this.type) {
          const e3 = this.toString(), t3 = this;
          return t3.#u = [e3], t3.type = null, t3.#c = void 0, [e3, F(this.toString()), false, false];
        }
        let o2 = !r2 || e2 || t2 ? "" : this.#A(true);
        o2 === s2 && (o2 = ""), o2 && (s2 = `(?:${s2})(?:${o2})*?`);
        let i2 = "";
        if ("!" === this.type && this.#y) i2 = (this.isStart() && !t2 ? K : "") + te;
        else {
          i2 = n2 + s2 + ("!" === this.type ? "))" + (!this.isStart() || t2 || e2 ? "" : K) + ee + ")" : "@" === this.type ? ")" : "?" === this.type ? ")?" : "+" === this.type && o2 ? ")" : "*" === this.type && o2 ? ")?" : `)${this.type}`);
        }
        return [i2, F(s2), this.#c = !!this.#c, this.#l];
      }
      #C() {
        if (j(this)) {
          let e2 = 0, t2 = false;
          do {
            t2 = true;
            for (let e3 = 0; e3 < this.#u.length; e3++) {
              const r2 = this.#u[e3];
              "object" == typeof r2 && (r2.#C(), this.#S(r2) ? (t2 = false, this.#x(r2, e3)) : this.#b(r2) ? (t2 = false, this.#k(r2, e3)) : this.#I(r2) && (t2 = false, this.#T(r2)));
            }
          } while (!t2 && ++e2 < 10);
        } else for (const e2 of this.#u) "object" == typeof e2 && e2.#C();
        this.#g = void 0;
      }
      #A(e2) {
        return this.#u.map((t2) => {
          if ("string" == typeof t2) throw new Error("string type in extglob ast??");
          const [r2, n2, s2, o2] = t2.toRegExpSource(e2);
          return this.#l = this.#l || o2, r2;
        }).filter((e3) => !(this.isStart() && this.isEnd() && !e3)).join("|");
      }
      static #P(e2, t2, r2 = false) {
        let n2 = false, s2 = "", o2 = false, i2 = false;
        for (let a2 = 0; a2 < e2.length; a2++) {
          const c2 = e2.charAt(a2);
          if (n2) n2 = false, s2 += (Q.has(c2) ? "\\" : "") + c2;
          else if ("*" !== c2) if (i2 = false, "\\" !== c2) {
            if ("[" === c2) {
              const [r3, n3, i3, c3] = N(e2, a2);
              if (i3) {
                s2 += r3, o2 = o2 || n3, a2 += i3 - 1, t2 = t2 || c3;
                continue;
              }
            }
            "?" !== c2 ? s2 += X(c2) : (s2 += Z, t2 = true);
          } else a2 === e2.length - 1 ? s2 += "\\\\" : n2 = true;
          else {
            if (i2) continue;
            i2 = true, s2 += r2 && /^[*]+$/.test(e2) ? te : ee, t2 = true;
          }
        }
        return [s2, F(e2), !!t2, o2];
      }
    }
    U = ne;
    const se = (e2, t2, r2 = {}) => (O(t2), !(!r2.nocomment && "#" === t2.charAt(0)) && new Re(t2, r2).match(e2)), oe = /^\*+([^+@!?*[(]*)$/, ie = (e2) => (t2) => !t2.startsWith(".") && t2.endsWith(e2), ae = (e2) => (t2) => t2.endsWith(e2), ce = (e2) => (e2 = e2.toLowerCase(), (t2) => !t2.startsWith(".") && t2.toLowerCase().endsWith(e2)), le = (e2) => (e2 = e2.toLowerCase(), (t2) => t2.toLowerCase().endsWith(e2)), ue = /^\*+\.\*+$/, de = (e2) => !e2.startsWith(".") && e2.includes("."), pe = (e2) => "." !== e2 && ".." !== e2 && e2.includes("."), me = /^\.\*+$/, he = (e2) => "." !== e2 && ".." !== e2 && e2.startsWith("."), fe = /^\*+$/, ge = (e2) => 0 !== e2.length && !e2.startsWith("."), ye = (e2) => 0 !== e2.length && "." !== e2 && ".." !== e2, we = /^\?+([^+@!?*[(]*)?$/, ve = ([e2, t2 = ""]) => {
      const r2 = ke([e2]);
      return t2 ? (t2 = t2.toLowerCase(), (e3) => r2(e3) && e3.toLowerCase().endsWith(t2)) : r2;
    }, _e = ([e2, t2 = ""]) => {
      const r2 = xe([e2]);
      return t2 ? (t2 = t2.toLowerCase(), (e3) => r2(e3) && e3.toLowerCase().endsWith(t2)) : r2;
    }, be = ([e2, t2 = ""]) => {
      const r2 = xe([e2]);
      return t2 ? (e3) => r2(e3) && e3.endsWith(t2) : r2;
    }, Se = ([e2, t2 = ""]) => {
      const r2 = ke([e2]);
      return t2 ? (e3) => r2(e3) && e3.endsWith(t2) : r2;
    }, ke = ([e2]) => {
      const t2 = e2.length;
      return (e3) => e3.length === t2 && !e3.startsWith(".");
    }, xe = ([e2]) => {
      const t2 = e2.length;
      return (e3) => e3.length === t2 && "." !== e3 && ".." !== e3;
    }, Ee = "object" == typeof process && process ? "object" == typeof process.env && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", Ie = "win32" === Ee ? { sep: "\\" }.sep : { sep: "/" }.sep;
    se.sep = Ie;
    const Te = /* @__PURE__ */ Symbol("globstar **");
    se.GLOBSTAR = Te;
    se.filter = (e2, t2 = {}) => (r2) => se(r2, e2, t2);
    const Ce = (e2, t2 = {}) => Object.assign({}, e2, t2);
    se.defaults = (e2) => {
      if (!e2 || "object" != typeof e2 || !Object.keys(e2).length) return se;
      const t2 = se;
      return Object.assign((r2, n2, s2 = {}) => t2(r2, n2, Ce(e2, s2)), { Minimatch: class extends t2.Minimatch {
        constructor(t3, r2 = {}) {
          super(t3, Ce(e2, r2));
        }
        static defaults(r2) {
          return t2.defaults(Ce(e2, r2)).Minimatch;
        }
      }, AST: class extends t2.AST {
        constructor(t3, r2, n2 = {}) {
          super(t3, r2, Ce(e2, n2));
        }
        static fromGlob(r2, n2 = {}) {
          return t2.AST.fromGlob(r2, Ce(e2, n2));
        }
      }, unescape: (r2, n2 = {}) => t2.unescape(r2, Ce(e2, n2)), escape: (r2, n2 = {}) => t2.escape(r2, Ce(e2, n2)), filter: (r2, n2 = {}) => t2.filter(r2, Ce(e2, n2)), defaults: (r2) => t2.defaults(Ce(e2, r2)), makeRe: (r2, n2 = {}) => t2.makeRe(r2, Ce(e2, n2)), braceExpand: (r2, n2 = {}) => t2.braceExpand(r2, Ce(e2, n2)), match: (r2, n2, s2 = {}) => t2.match(r2, n2, Ce(e2, s2)), sep: t2.sep, GLOBSTAR: Te });
    };
    const Pe = (e2, t2 = {}) => (O(e2), t2.nobrace || !/\{(?:(?!\{).)*\}/.test(e2) ? [e2] : I(e2, { max: t2.braceExpandMax }));
    se.braceExpand = Pe;
    se.makeRe = (e2, t2 = {}) => new Re(e2, t2).makeRe();
    se.match = (e2, t2, r2 = {}) => {
      const n2 = new Re(t2, r2);
      return e2 = e2.filter((e3) => n2.match(e3)), n2.options.nonull && !e2.length && e2.push(t2), e2;
    };
    const Ae = /[?*]|[+@!]\(.*?\)|\[|\]/;
    class Re {
      options;
      set;
      pattern;
      windowsPathsNoEscape;
      nonegate;
      negate;
      comment;
      empty;
      preserveMultipleSlashes;
      partial;
      globSet;
      globParts;
      nocase;
      isWindows;
      platform;
      windowsNoMagicRoot;
      maxGlobstarRecursion;
      regexp;
      constructor(e2, t2 = {}) {
        O(e2), t2 = t2 || {}, this.options = t2, this.maxGlobstarRecursion = t2.maxGlobstarRecursion ?? 200, this.pattern = e2, this.platform = t2.platform || Ee, this.isWindows = "win32" === this.platform;
        this.windowsPathsNoEscape = !!t2.windowsPathsNoEscape || false === t2.allowWindowsEscape, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!t2.preserveMultipleSlashes, this.regexp = null, this.negate = false, this.nonegate = !!t2.nonegate, this.comment = false, this.empty = false, this.partial = !!t2.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = void 0 !== t2.windowsNoMagicRoot ? t2.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
      }
      hasMagic() {
        if (this.options.magicalBraces && this.set.length > 1) return true;
        for (const e2 of this.set) for (const t2 of e2) if ("string" != typeof t2) return true;
        return false;
      }
      debug(...e2) {
      }
      make() {
        const e2 = this.pattern, t2 = this.options;
        if (!t2.nocomment && "#" === e2.charAt(0)) return void (this.comment = true);
        if (!e2) return void (this.empty = true);
        this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], t2.debug && (this.debug = (...e3) => console.error(...e3)), this.debug(this.pattern, this.globSet);
        const r2 = this.globSet.map((e3) => this.slashSplit(e3));
        this.globParts = this.preprocess(r2), this.debug(this.pattern, this.globParts);
        let n2 = this.globParts.map((e3, t3, r3) => {
          if (this.isWindows && this.windowsNoMagicRoot) {
            const t4 = !("" !== e3[0] || "" !== e3[1] || "?" !== e3[2] && Ae.test(e3[2]) || Ae.test(e3[3])), r4 = /^[a-z]:/i.test(e3[0]);
            if (t4) return [...e3.slice(0, 4), ...e3.slice(4).map((e4) => this.parse(e4))];
            if (r4) return [e3[0], ...e3.slice(1).map((e4) => this.parse(e4))];
          }
          return e3.map((e4) => this.parse(e4));
        });
        if (this.debug(this.pattern, n2), this.set = n2.filter((e3) => -1 === e3.indexOf(false)), this.isWindows) for (let e3 = 0; e3 < this.set.length; e3++) {
          const t3 = this.set[e3];
          "" === t3[0] && "" === t3[1] && "?" === this.globParts[e3][2] && "string" == typeof t3[3] && /^[a-z]:$/i.test(t3[3]) && (t3[2] = "?");
        }
        this.debug(this.pattern, this.set);
      }
      preprocess(e2) {
        if (this.options.noglobstar) for (const t3 of e2) for (let e3 = 0; e3 < t3.length; e3++) "**" === t3[e3] && (t3[e3] = "*");
        const { optimizationLevel: t2 = 1 } = this.options;
        return t2 >= 2 ? (e2 = this.firstPhasePreProcess(e2), e2 = this.secondPhasePreProcess(e2)) : e2 = t2 >= 1 ? this.levelOneOptimize(e2) : this.adjascentGlobstarOptimize(e2), e2;
      }
      adjascentGlobstarOptimize(e2) {
        return e2.map((e3) => {
          let t2 = -1;
          for (; -1 !== (t2 = e3.indexOf("**", t2 + 1)); ) {
            let r2 = t2;
            for (; "**" === e3[r2 + 1]; ) r2++;
            r2 !== t2 && e3.splice(t2, r2 - t2);
          }
          return e3;
        });
      }
      levelOneOptimize(e2) {
        return e2.map((e3) => 0 === (e3 = e3.reduce((e4, t2) => {
          const r2 = e4[e4.length - 1];
          return "**" === t2 && "**" === r2 ? e4 : ".." === t2 && r2 && ".." !== r2 && "." !== r2 && "**" !== r2 ? (e4.pop(), e4) : (e4.push(t2), e4);
        }, [])).length ? [""] : e3);
      }
      levelTwoFileOptimize(e2) {
        Array.isArray(e2) || (e2 = this.slashSplit(e2));
        let t2 = false;
        do {
          if (t2 = false, !this.preserveMultipleSlashes) {
            for (let r3 = 1; r3 < e2.length - 1; r3++) {
              const n2 = e2[r3];
              1 === r3 && "" === n2 && "" === e2[0] || ("." !== n2 && "" !== n2 || (t2 = true, e2.splice(r3, 1), r3--));
            }
            "." !== e2[0] || 2 !== e2.length || "." !== e2[1] && "" !== e2[1] || (t2 = true, e2.pop());
          }
          let r2 = 0;
          for (; -1 !== (r2 = e2.indexOf("..", r2 + 1)); ) {
            const n2 = e2[r2 - 1];
            !n2 || "." === n2 || ".." === n2 || "**" === n2 || this.isWindows && /^[a-z]:$/i.test(n2) || (t2 = true, e2.splice(r2 - 1, 2), r2 -= 2);
          }
        } while (t2);
        return 0 === e2.length ? [""] : e2;
      }
      firstPhasePreProcess(e2) {
        let t2 = false;
        do {
          t2 = false;
          for (let r2 of e2) {
            let n2 = -1;
            for (; -1 !== (n2 = r2.indexOf("**", n2 + 1)); ) {
              let s3 = n2;
              for (; "**" === r2[s3 + 1]; ) s3++;
              s3 > n2 && r2.splice(n2 + 1, s3 - n2);
              let o2 = r2[n2 + 1];
              const i2 = r2[n2 + 2], a2 = r2[n2 + 3];
              if (".." !== o2) continue;
              if (!i2 || "." === i2 || ".." === i2 || !a2 || "." === a2 || ".." === a2) continue;
              t2 = true, r2.splice(n2, 1);
              const c2 = r2.slice(0);
              c2[n2] = "**", e2.push(c2), n2--;
            }
            if (!this.preserveMultipleSlashes) {
              for (let e3 = 1; e3 < r2.length - 1; e3++) {
                const n3 = r2[e3];
                1 === e3 && "" === n3 && "" === r2[0] || ("." !== n3 && "" !== n3 || (t2 = true, r2.splice(e3, 1), e3--));
              }
              "." !== r2[0] || 2 !== r2.length || "." !== r2[1] && "" !== r2[1] || (t2 = true, r2.pop());
            }
            let s2 = 0;
            for (; -1 !== (s2 = r2.indexOf("..", s2 + 1)); ) {
              const e3 = r2[s2 - 1];
              if (e3 && "." !== e3 && ".." !== e3 && "**" !== e3) {
                t2 = true;
                const e4 = 1 === s2 && "**" === r2[s2 + 1] ? ["."] : [];
                r2.splice(s2 - 1, 2, ...e4), 0 === r2.length && r2.push(""), s2 -= 2;
              }
            }
          }
        } while (t2);
        return e2;
      }
      secondPhasePreProcess(e2) {
        for (let t2 = 0; t2 < e2.length - 1; t2++) for (let r2 = t2 + 1; r2 < e2.length; r2++) {
          const n2 = this.partsMatch(e2[t2], e2[r2], !this.preserveMultipleSlashes);
          if (n2) {
            e2[t2] = [], e2[r2] = n2;
            break;
          }
        }
        return e2.filter((e3) => e3.length);
      }
      partsMatch(e2, t2, r2 = false) {
        let n2 = 0, s2 = 0, o2 = [], i2 = "";
        for (; n2 < e2.length && s2 < t2.length; ) if (e2[n2] === t2[s2]) o2.push("b" === i2 ? t2[s2] : e2[n2]), n2++, s2++;
        else if (r2 && "**" === e2[n2] && t2[s2] === e2[n2 + 1]) o2.push(e2[n2]), n2++;
        else if (r2 && "**" === t2[s2] && e2[n2] === t2[s2 + 1]) o2.push(t2[s2]), s2++;
        else if ("*" !== e2[n2] || !t2[s2] || !this.options.dot && t2[s2].startsWith(".") || "**" === t2[s2]) {
          if ("*" !== t2[s2] || !e2[n2] || !this.options.dot && e2[n2].startsWith(".") || "**" === e2[n2]) return false;
          if ("a" === i2) return false;
          i2 = "b", o2.push(t2[s2]), n2++, s2++;
        } else {
          if ("b" === i2) return false;
          i2 = "a", o2.push(e2[n2]), n2++, s2++;
        }
        return e2.length === t2.length && o2;
      }
      parseNegate() {
        if (this.nonegate) return;
        const e2 = this.pattern;
        let t2 = false, r2 = 0;
        for (let n2 = 0; n2 < e2.length && "!" === e2.charAt(n2); n2++) t2 = !t2, r2++;
        r2 && (this.pattern = e2.slice(r2)), this.negate = t2;
      }
      matchOne(e2, t2, r2 = false) {
        let n2 = 0, s2 = 0;
        if (this.isWindows) {
          const r3 = "string" == typeof e2[0] && /^[a-z]:$/i.test(e2[0]), o3 = !r3 && "" === e2[0] && "" === e2[1] && "?" === e2[2] && /^[a-z]:$/i.test(e2[3]), i2 = "string" == typeof t2[0] && /^[a-z]:$/i.test(t2[0]), a2 = o3 ? 3 : r3 ? 0 : void 0, c2 = !i2 && "" === t2[0] && "" === t2[1] && "?" === t2[2] && "string" == typeof t2[3] && /^[a-z]:$/i.test(t2[3]) ? 3 : i2 ? 0 : void 0;
          if ("number" == typeof a2 && "number" == typeof c2) {
            const [r4, o4] = [e2[a2], t2[c2]];
            r4.toLowerCase() === o4.toLowerCase() && (t2[c2] = r4, s2 = c2, n2 = a2);
          }
        }
        const { optimizationLevel: o2 = 1 } = this.options;
        return o2 >= 2 && (e2 = this.levelTwoFileOptimize(e2)), t2.includes(Te) ? this.#R(e2, t2, r2, n2, s2) : this.#M(e2, t2, r2, n2, s2);
      }
      #R(e2, t2, r2, n2, s2) {
        const o2 = t2.indexOf(Te, s2), i2 = t2.lastIndexOf(Te), [a2, c2, l2] = r2 ? [t2.slice(s2, o2), t2.slice(o2 + 1), []] : [t2.slice(s2, o2), t2.slice(o2 + 1, i2), t2.slice(i2 + 1)];
        if (a2.length) {
          const t3 = e2.slice(n2, n2 + a2.length);
          if (!this.#M(t3, a2, r2, 0, 0)) return false;
          n2 += a2.length, s2 += a2.length;
        }
        let u2 = 0;
        if (l2.length) {
          if (l2.length + n2 > e2.length) return false;
          let t3 = e2.length - l2.length;
          if (this.#M(e2, l2, r2, t3, 0)) u2 = l2.length;
          else {
            if ("" !== e2[e2.length - 1] || n2 + l2.length === e2.length) return false;
            if (t3--, !this.#M(e2, l2, r2, t3, 0)) return false;
            u2 = l2.length + 1;
          }
        }
        if (!c2.length) {
          let t3 = !!u2;
          for (let r3 = n2; r3 < e2.length - u2; r3++) {
            const n3 = String(e2[r3]);
            if (t3 = true, "." === n3 || ".." === n3 || !this.options.dot && n3.startsWith(".")) return false;
          }
          return r2 || t3;
        }
        const d2 = [[[], 0]];
        let p2 = d2[0], m2 = 0;
        const h2 = [0];
        for (const e3 of c2) e3 === Te ? (h2.push(m2), p2 = [[], 0], d2.push(p2)) : (p2[0].push(e3), m2++);
        let f2 = d2.length - 1;
        const g2 = e2.length - u2;
        for (const e3 of d2) e3[1] = g2 - (h2[f2--] + e3[0].length);
        return !!this.#J(e2, d2, n2, 0, r2, 0, !!u2);
      }
      #J(e2, t2, r2, n2, s2, o2, i2) {
        const a2 = t2[n2];
        if (!a2) {
          for (let t3 = r2; t3 < e2.length; t3++) {
            i2 = true;
            const r3 = e2[t3];
            if ("." === r3 || ".." === r3 || !this.options.dot && r3.startsWith(".")) return false;
          }
          return i2;
        }
        const [c2, l2] = a2;
        for (; r2 <= l2; ) {
          if (this.#M(e2.slice(0, r2 + c2.length), c2, s2, r2, 0) && o2 < this.maxGlobstarRecursion) {
            const a4 = this.#J(e2, t2, r2 + c2.length, n2 + 1, s2, o2 + 1, i2);
            if (false !== a4) return a4;
          }
          const a3 = e2[r2];
          if ("." === a3 || ".." === a3 || !this.options.dot && a3.startsWith(".")) return false;
          r2++;
        }
        return s2 || null;
      }
      #M(e2, t2, r2, n2, s2) {
        let o2, i2, a2, c2;
        for (o2 = n2, i2 = s2, c2 = e2.length, a2 = t2.length; o2 < c2 && i2 < a2; o2++, i2++) {
          this.debug("matchOne loop");
          let r3, n3 = t2[i2], s3 = e2[o2];
          if (this.debug(t2, n3, s3), false === n3 || n3 === Te) return false;
          if ("string" == typeof n3 ? (r3 = s3 === n3, this.debug("string match", n3, s3, r3)) : (r3 = n3.test(s3), this.debug("pattern match", n3, s3, r3)), !r3) return false;
        }
        if (o2 === c2 && i2 === a2) return true;
        if (o2 === c2) return r2;
        if (i2 === a2) return o2 === c2 - 1 && "" === e2[o2];
        throw new Error("wtf?");
      }
      braceExpand() {
        return Pe(this.pattern, this.options);
      }
      parse(e2) {
        O(e2);
        const t2 = this.options;
        if ("**" === e2) return Te;
        if ("" === e2) return "";
        let r2, n2 = null;
        (r2 = e2.match(fe)) ? n2 = t2.dot ? ye : ge : (r2 = e2.match(oe)) ? n2 = (t2.nocase ? t2.dot ? le : ce : t2.dot ? ae : ie)(r2[1]) : (r2 = e2.match(we)) ? n2 = (t2.nocase ? t2.dot ? _e : ve : t2.dot ? be : Se)(r2) : (r2 = e2.match(ue)) ? n2 = t2.dot ? pe : de : (r2 = e2.match(me)) && (n2 = he);
        const s2 = ne.fromGlob(e2, this.options).toMMPattern();
        return n2 && "object" == typeof s2 && Reflect.defineProperty(s2, "test", { value: n2 }), s2;
      }
      makeRe() {
        if (this.regexp || false === this.regexp) return this.regexp;
        const e2 = this.set;
        if (!e2.length) return this.regexp = false, this.regexp;
        const t2 = this.options, r2 = t2.noglobstar ? "[^/]*?" : t2.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", n2 = new Set(t2.nocase ? ["i"] : []);
        let s2 = e2.map((e3) => {
          const t3 = e3.map((e4) => {
            if (e4 instanceof RegExp) for (const t4 of e4.flags.split("")) n2.add(t4);
            return "string" == typeof e4 ? e4.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : e4 === Te ? Te : e4._src;
          });
          t3.forEach((e4, n3) => {
            const s4 = t3[n3 + 1], o3 = t3[n3 - 1];
            e4 === Te && o3 !== Te && (void 0 === o3 ? void 0 !== s4 && s4 !== Te ? t3[n3 + 1] = "(?:\\/|" + r2 + "\\/)?" + s4 : t3[n3] = r2 : void 0 === s4 ? t3[n3 - 1] = o3 + "(?:\\/|\\/" + r2 + ")?" : s4 !== Te && (t3[n3 - 1] = o3 + "(?:\\/|\\/" + r2 + "\\/)" + s4, t3[n3 + 1] = Te));
          });
          const s3 = t3.filter((e4) => e4 !== Te);
          if (this.partial && s3.length >= 1) {
            const e4 = [];
            for (let t4 = 1; t4 <= s3.length; t4++) e4.push(s3.slice(0, t4).join("/"));
            return "(?:" + e4.join("|") + ")";
          }
          return s3.join("/");
        }).join("|");
        const [o2, i2] = e2.length > 1 ? ["(?:", ")"] : ["", ""];
        s2 = "^" + o2 + s2 + i2 + "$", this.partial && (s2 = "^(?:\\/|" + o2 + s2.slice(1, -1) + i2 + ")$"), this.negate && (s2 = "^(?!" + s2 + ").+$");
        try {
          this.regexp = new RegExp(s2, [...n2].join(""));
        } catch {
          this.regexp = false;
        }
        return this.regexp;
      }
      slashSplit(e2) {
        return this.preserveMultipleSlashes ? e2.split("/") : this.isWindows && /^\/\/[^/]+/.test(e2) ? ["", ...e2.split(/\/+/)] : e2.split(/\/+/);
      }
      match(e2, t2 = this.partial) {
        if (this.debug("match", e2, this.pattern), this.comment) return false;
        if (this.empty) return "" === e2;
        if ("/" === e2 && t2) return true;
        const r2 = this.options;
        this.isWindows && (e2 = e2.split("\\").join("/"));
        const n2 = this.slashSplit(e2);
        this.debug(this.pattern, "split", n2);
        const s2 = this.set;
        this.debug(this.pattern, "set", s2);
        let o2 = n2[n2.length - 1];
        if (!o2) for (let e3 = n2.length - 2; !o2 && e3 >= 0; e3--) o2 = n2[e3];
        for (const e3 of s2) {
          let s3 = n2;
          r2.matchBase && 1 === e3.length && (s3 = [o2]);
          if (this.matchOne(s3, e3, t2)) return !!r2.flipNegate || !this.negate;
        }
        return !r2.flipNegate && this.negate;
      }
      static defaults(e2) {
        return se.defaults(e2).Minimatch;
      }
    }
    se.AST = ne, se.Minimatch = Re, se.escape = (e2, { windowsPathsNoEscape: t2 = false, magicalBraces: r2 = false } = {}) => r2 ? t2 ? e2.replace(/[?*()[\]{}]/g, "[$&]") : e2.replace(/[?*()[\]\\{}]/g, "\\$&") : t2 ? e2.replace(/[?*()[\]]/g, "[$&]") : e2.replace(/[?*()[\]\\]/g, "\\$&"), se.unescape = F;
  }