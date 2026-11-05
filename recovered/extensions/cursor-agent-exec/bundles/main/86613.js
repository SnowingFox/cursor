// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 86613 range:11087813..11094201
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86613: (e) => {
    function t(e2) {
      return Array.isArray(e2) ? e2 : [e2];
    }
    const r = /^\s+$/, n = /(?:[^\\]|^)\\$/, s = /^\\!/, o = /^\\#/, i = /\r?\n/g, a = /^\.{0,2}\/|^\.{1,2}$/, c = /\/$/, l = "/";
    let u = "node-ignore";
    "undefined" != typeof Symbol && (u = /* @__PURE__ */ Symbol.for("node-ignore"));
    const d = u, p = (e2, t2, r2) => (Object.defineProperty(e2, t2, { value: r2 }), r2), m = /([0-z])-([0-z])/g, h = () => false, f = [[/^\uFEFF/, () => ""], [/((?:\\\\)*?)(\\?\s+)$/, (e2, t2, r2) => t2 + (0 === r2.indexOf("\\") ? " " : "")], [/(\\+?)\s/g, (e2, t2) => {
      const { length: r2 } = t2;
      return t2.slice(0, r2 - r2 % 2) + " ";
    }], [/[\\$.|*+(){^]/g, (e2) => `\\${e2}`], [/(?!\\)\?/g, () => "[^/]"], [/^\//, () => "^"], [/\//g, () => "\\/"], [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"], [/^(?=[^^])/, function() {
      return /\/(?!$)/.test(this) ? "^" : "(?:^|\\/)";
    }], [/\\\/\\\*\\\*(?=\\\/|$)/g, (e2, t2, r2) => t2 + 6 < r2.length ? "(?:\\/[^\\/]+)*" : "\\/.+"], [/(^|[^\\]+)(\\\*)+(?=.+)/g, (e2, t2, r2) => t2 + r2.replace(/\\\*/g, "[^\\/]*")], [/\\\\\\(?=[$.|*+(){^])/g, () => "\\"], [/\\\\/g, () => "\\"], [/(\\)?\[([^\]/]*?)(\\*)($|\])/g, (e2, t2, r2, n2, s2) => "\\" === t2 ? `\\[${r2}${((e3) => {
      const { length: t3 } = e3;
      return e3.slice(0, t3 - t3 % 2);
    })(n2)}${s2}` : "]" === s2 && n2.length % 2 == 0 ? `[${((e3) => e3.replace(m, (e4, t3, r3) => t3.charCodeAt(0) <= r3.charCodeAt(0) ? e4 : ""))(r2)}${n2}]` : "[]"], [/(?:[^*])$/, (e2) => /\/$/.test(e2) ? `${e2}$` : `${e2}(?=$|\\/$)`]], g = /(^|\\\/)?\\\*$/, y = "regex", w = "checkRegex", v = { [y]: (e2, t2) => `${t2 ? `${t2}[^/]+` : "[^/]*"}(?=$|\\/$)`, [w]: (e2, t2) => `${t2 ? `${t2}[^/]*` : "[^/]*"}(?=$|\\/$)` }, _ = (e2) => "string" == typeof e2;
    class b {
      constructor(e2, t2, r2, n2, s2, o2) {
        this.pattern = e2, this.mark = t2, this.negative = s2, p(this, "body", r2), p(this, "ignoreCase", n2), p(this, "regexPrefix", o2);
      }
      get regex() {
        const e2 = "_" + y;
        return this[e2] ? this[e2] : this._make(y, e2);
      }
      get checkRegex() {
        const e2 = "_" + w;
        return this[e2] ? this[e2] : this._make(w, e2);
      }
      _make(e2, t2) {
        const r2 = this.regexPrefix.replace(g, v[e2]), n2 = this.ignoreCase ? new RegExp(r2, "i") : new RegExp(r2);
        return p(this, t2, n2);
      }
    }
    const S = ({ pattern: e2, mark: t2 }, r2) => {
      let n2 = false, i2 = e2;
      0 === i2.indexOf("!") && (n2 = true, i2 = i2.substr(1)), i2 = i2.replace(s, "!").replace(o, "#");
      const a2 = ((e3) => f.reduce((t3, [r3, n3]) => t3.replace(r3, n3.bind(e3)), e3))(i2);
      return new b(e2, t2, i2, r2, n2, a2);
    };
    class k {
      constructor(e2) {
        this._ignoreCase = e2, this._rules = [];
      }
      _add(e2) {
        if (e2 && e2[d]) return this._rules = this._rules.concat(e2._rules._rules), void (this._added = true);
        if (_(e2) && (e2 = { pattern: e2 }), ((e3) => e3 && _(e3) && !r.test(e3) && !n.test(e3) && 0 !== e3.indexOf("#"))(e2.pattern)) {
          const t2 = S(e2, this._ignoreCase);
          this._added = true, this._rules.push(t2);
        }
      }
      add(e2) {
        return this._added = false, t(_(e2) ? ((e3) => e3.split(i).filter(Boolean))(e2) : e2).forEach(this._add, this), this._added;
      }
      test(e2, t2, r2) {
        let n2, s2 = false, o2 = false;
        this._rules.forEach((i3) => {
          const { negative: a2 } = i3;
          if (o2 === a2 && s2 !== o2 || a2 && !s2 && !o2 && !t2) return;
          i3[r2].test(e2) && (s2 = !a2, o2 = a2, n2 = a2 ? void 0 : i3);
        });
        const i2 = { ignored: s2, unignored: o2 };
        return n2 && (i2.rule = n2), i2;
      }
    }
    const x = (e2, t2) => {
      throw new t2(e2);
    }, E = (e2, t2, r2) => {
      if (!_(e2)) return r2(`path must be a string, but got \`${t2}\``, TypeError);
      if (!e2) return r2("path must not be empty", TypeError);
      if (E.isNotRelative(e2)) {
        return r2(`path should be a ${"`path.relative()`d"} string, but got "${t2}"`, RangeError);
      }
      return true;
    }, I = (e2) => a.test(e2);
    E.isNotRelative = I, E.convert = (e2) => e2;
    class T {
      constructor({ ignorecase: e2 = true, ignoreCase: t2 = e2, allowRelativePaths: r2 = false } = {}) {
        p(this, d, true), this._rules = new k(t2), this._strictPathCheck = !r2, this._initCache();
      }
      _initCache() {
        this._ignoreCache = /* @__PURE__ */ Object.create(null), this._testCache = /* @__PURE__ */ Object.create(null);
      }
      add(e2) {
        return this._rules.add(e2) && this._initCache(), this;
      }
      addPattern(e2) {
        return this.add(e2);
      }
      _test(e2, t2, r2, n2) {
        const s2 = e2 && E.convert(e2);
        return E(s2, e2, this._strictPathCheck ? x : h), this._t(s2, t2, r2, n2);
      }
      checkIgnore(e2) {
        if (!c.test(e2)) return this.test(e2);
        const t2 = e2.split(l).filter(Boolean);
        if (t2.pop(), t2.length) {
          const e3 = this._t(t2.join(l) + l, this._testCache, true, t2);
          if (e3.ignored) return e3;
        }
        return this._rules.test(e2, false, w);
      }
      _t(e2, t2, r2, n2) {
        if (e2 in t2) return t2[e2];
        if (n2 || (n2 = e2.split(l).filter(Boolean)), n2.pop(), !n2.length) return t2[e2] = this._rules.test(e2, r2, y);
        const s2 = this._t(n2.join(l) + l, t2, r2, n2);
        return t2[e2] = s2.ignored ? s2 : this._rules.test(e2, r2, y);
      }
      ignores(e2) {
        return this._test(e2, this._ignoreCache, false).ignored;
      }
      createFilter() {
        return (e2) => !this.ignores(e2);
      }
      filter(e2) {
        return t(e2).filter(this.createFilter());
      }
      test(e2) {
        return this._test(e2, this._testCache, true);
      }
    }
    const C = (e2) => new T(e2), P = () => {
      E.convert = (e3) => /^\\\\\?\\/.test(e3) || /["<>|\u0000-\u001F]+/u.test(e3) ? e3 : e3.replace(/\\/g, "/");
      const e2 = /^[a-z]:\//i;
      E.isNotRelative = (t2) => e2.test(t2) || I(t2);
    };
    "undefined" != typeof process && "win32" === process.platform && P(), e.exports = C, C.default = C, e.exports.isPathValid = (e2) => E(e2 && E.convert(e2), e2, h), p(e.exports, /* @__PURE__ */ Symbol.for("setupWindows"), P);
  }