// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6613 range:481489..487895
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6613: (e2) => {
    function t2(e3) {
      return Array.isArray(e3) ? e3 : [e3];
    }
    const r2 = /^\s+$/, n2 = /(?:[^\\]|^)\\$/, o2 = /^\\!/, s2 = /^\\#/, i2 = /\r?\n/g, a2 = /^\.{0,2}\/|^\.{1,2}$/, c = /\/$/, u = "/";
    let l = "node-ignore";
    "undefined" != typeof Symbol && (l = /* @__PURE__ */ Symbol.for("node-ignore"));
    const d = l, p = (e3, t3, r3) => (Object.defineProperty(e3, t3, { value: r3 }), r3), f = /([0-z])-([0-z])/g, h = () => false, m = [[/^\uFEFF/, () => ""], [/((?:\\\\)*?)(\\?\s+)$/, (e3, t3, r3) => t3 + (0 === r3.indexOf("\\") ? " " : "")], [/(\\+?)\s/g, (e3, t3) => {
      const { length: r3 } = t3;
      return t3.slice(0, r3 - r3 % 2) + " ";
    }], [/[\\$.|*+(){^]/g, (e3) => `\\${e3}`], [/(?!\\)\?/g, () => "[^/]"], [/^\//, () => "^"], [/\//g, () => "\\/"], [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"], [/^(?=[^^])/, function() {
      return /\/(?!$)/.test(this) ? "^" : "(?:^|\\/)";
    }], [/\\\/\\\*\\\*(?=\\\/|$)/g, (e3, t3, r3) => t3 + 6 < r3.length ? "(?:\\/[^\\/]+)*" : "\\/.+"], [/(^|[^\\]+)(\\\*)+(?=.+)/g, (e3, t3, r3) => t3 + r3.replace(/\\\*/g, "[^\\/]*")], [/\\\\\\(?=[$.|*+(){^])/g, () => "\\"], [/\\\\/g, () => "\\"], [/(\\)?\[([^\]/]*?)(\\*)($|\])/g, (e3, t3, r3, n3, o3) => "\\" === t3 ? `\\[${r3}${((e4) => {
      const { length: t4 } = e4;
      return e4.slice(0, t4 - t4 % 2);
    })(n3)}${o3}` : "]" === o3 && n3.length % 2 == 0 ? `[${((e4) => e4.replace(f, (e5, t4, r4) => t4.charCodeAt(0) <= r4.charCodeAt(0) ? e5 : ""))(r3)}${n3}]` : "[]"], [/(?:[^*])$/, (e3) => /\/$/.test(e3) ? `${e3}$` : `${e3}(?=$|\\/$)`]], g = /(^|\\\/)?\\\*$/, y = "regex", _ = "checkRegex", v = { [y]: (e3, t3) => `${t3 ? `${t3}[^/]+` : "[^/]*"}(?=$|\\/$)`, [_]: (e3, t3) => `${t3 ? `${t3}[^/]*` : "[^/]*"}(?=$|\\/$)` }, w = (e3) => "string" == typeof e3;
    class b {
      constructor(e3, t3, r3, n3, o3, s3) {
        this.pattern = e3, this.mark = t3, this.negative = o3, p(this, "body", r3), p(this, "ignoreCase", n3), p(this, "regexPrefix", s3);
      }
      get regex() {
        const e3 = "_" + y;
        return this[e3] ? this[e3] : this._make(y, e3);
      }
      get checkRegex() {
        const e3 = "_" + _;
        return this[e3] ? this[e3] : this._make(_, e3);
      }
      _make(e3, t3) {
        const r3 = this.regexPrefix.replace(g, v[e3]), n3 = this.ignoreCase ? new RegExp(r3, "i") : new RegExp(r3);
        return p(this, t3, n3);
      }
    }
    const S = ({ pattern: e3, mark: t3 }, r3) => {
      let n3 = false, i3 = e3;
      0 === i3.indexOf("!") && (n3 = true, i3 = i3.substr(1)), i3 = i3.replace(o2, "!").replace(s2, "#");
      const a3 = ((e4) => m.reduce((t4, [r4, n4]) => t4.replace(r4, n4.bind(e4)), e4))(i3);
      return new b(e3, t3, i3, r3, n3, a3);
    };
    class k {
      constructor(e3) {
        this._ignoreCase = e3, this._rules = [];
      }
      _add(e3) {
        if (e3 && e3[d]) return this._rules = this._rules.concat(e3._rules._rules), void (this._added = true);
        if (w(e3) && (e3 = { pattern: e3 }), ((e4) => e4 && w(e4) && !r2.test(e4) && !n2.test(e4) && 0 !== e4.indexOf("#"))(e3.pattern)) {
          const t3 = S(e3, this._ignoreCase);
          this._added = true, this._rules.push(t3);
        }
      }
      add(e3) {
        return this._added = false, t2(w(e3) ? ((e4) => e4.split(i2).filter(Boolean))(e3) : e3).forEach(this._add, this), this._added;
      }
      test(e3, t3, r3) {
        let n3, o3 = false, s3 = false;
        this._rules.forEach((i4) => {
          const { negative: a3 } = i4;
          if (s3 === a3 && o3 !== s3 || a3 && !o3 && !s3 && !t3) return;
          i4[r3].test(e3) && (o3 = !a3, s3 = a3, n3 = a3 ? void 0 : i4);
        });
        const i3 = { ignored: o3, unignored: s3 };
        return n3 && (i3.rule = n3), i3;
      }
    }
    const E = (e3, t3) => {
      throw new t3(e3);
    }, x = (e3, t3, r3) => {
      if (!w(e3)) return r3(`path must be a string, but got \`${t3}\``, TypeError);
      if (!e3) return r3("path must not be empty", TypeError);
      if (x.isNotRelative(e3)) {
        return r3(`path should be a ${"`path.relative()`d"} string, but got "${t3}"`, RangeError);
      }
      return true;
    }, T = (e3) => a2.test(e3);
    x.isNotRelative = T, x.convert = (e3) => e3;
    class O {
      constructor({ ignorecase: e3 = true, ignoreCase: t3 = e3, allowRelativePaths: r3 = false } = {}) {
        p(this, d, true), this._rules = new k(t3), this._strictPathCheck = !r3, this._initCache();
      }
      _initCache() {
        this._ignoreCache = /* @__PURE__ */ Object.create(null), this._testCache = /* @__PURE__ */ Object.create(null);
      }
      add(e3) {
        return this._rules.add(e3) && this._initCache(), this;
      }
      addPattern(e3) {
        return this.add(e3);
      }
      _test(e3, t3, r3, n3) {
        const o3 = e3 && x.convert(e3);
        return x(o3, e3, this._strictPathCheck ? E : h), this._t(o3, t3, r3, n3);
      }
      checkIgnore(e3) {
        if (!c.test(e3)) return this.test(e3);
        const t3 = e3.split(u).filter(Boolean);
        if (t3.pop(), t3.length) {
          const e4 = this._t(t3.join(u) + u, this._testCache, true, t3);
          if (e4.ignored) return e4;
        }
        return this._rules.test(e3, false, _);
      }
      _t(e3, t3, r3, n3) {
        if (e3 in t3) return t3[e3];
        if (n3 || (n3 = e3.split(u).filter(Boolean)), n3.pop(), !n3.length) return t3[e3] = this._rules.test(e3, r3, y);
        const o3 = this._t(n3.join(u) + u, t3, r3, n3);
        return t3[e3] = o3.ignored ? o3 : this._rules.test(e3, r3, y);
      }
      ignores(e3) {
        return this._test(e3, this._ignoreCache, false).ignored;
      }
      createFilter() {
        return (e3) => !this.ignores(e3);
      }
      filter(e3) {
        return t2(e3).filter(this.createFilter());
      }
      test(e3) {
        return this._test(e3, this._testCache, true);
      }
    }
    const P = (e3) => new O(e3), I = () => {
      x.convert = (e4) => /^\\\\\?\\/.test(e4) || /["<>|\u0000-\u001F]+/u.test(e4) ? e4 : e4.replace(/\\/g, "/");
      const e3 = /^[a-z]:\//i;
      x.isNotRelative = (t3) => e3.test(t3) || T(t3);
    };
    "undefined" != typeof process && "win32" === process.platform && I(), e2.exports = P, P.default = P, e2.exports.isPathValid = (e3) => x(e3 && x.convert(e3), e3, h), p(e2.exports, /* @__PURE__ */ Symbol.for("setupWindows"), I);
  }