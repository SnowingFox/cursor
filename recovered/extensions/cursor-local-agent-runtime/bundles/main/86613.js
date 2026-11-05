// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 86613 range:7595411..7601799
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86613: (e) => {
    function t(e2) {
      return Array.isArray(e2) ? e2 : [e2];
    }
    const r = /^\s+$/, n = /(?:[^\\]|^)\\$/, o = /^\\!/, s = /^\\#/, i = /\r?\n/g, a = /^\.{0,2}\/|^\.{1,2}$/, l = /\/$/, c = "/";
    let u = "node-ignore";
    "undefined" != typeof Symbol && (u = /* @__PURE__ */ Symbol.for("node-ignore"));
    const d = u, p = (e2, t2, r2) => (Object.defineProperty(e2, t2, { value: r2 }), r2), h = /([0-z])-([0-z])/g, m = () => false, f = [[/^\uFEFF/, () => ""], [/((?:\\\\)*?)(\\?\s+)$/, (e2, t2, r2) => t2 + (0 === r2.indexOf("\\") ? " " : "")], [/(\\+?)\s/g, (e2, t2) => {
      const { length: r2 } = t2;
      return t2.slice(0, r2 - r2 % 2) + " ";
    }], [/[\\$.|*+(){^]/g, (e2) => `\\${e2}`], [/(?!\\)\?/g, () => "[^/]"], [/^\//, () => "^"], [/\//g, () => "\\/"], [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"], [/^(?=[^^])/, function() {
      return /\/(?!$)/.test(this) ? "^" : "(?:^|\\/)";
    }], [/\\\/\\\*\\\*(?=\\\/|$)/g, (e2, t2, r2) => t2 + 6 < r2.length ? "(?:\\/[^\\/]+)*" : "\\/.+"], [/(^|[^\\]+)(\\\*)+(?=.+)/g, (e2, t2, r2) => t2 + r2.replace(/\\\*/g, "[^\\/]*")], [/\\\\\\(?=[$.|*+(){^])/g, () => "\\"], [/\\\\/g, () => "\\"], [/(\\)?\[([^\]/]*?)(\\*)($|\])/g, (e2, t2, r2, n2, o2) => "\\" === t2 ? `\\[${r2}${((e3) => {
      const { length: t3 } = e3;
      return e3.slice(0, t3 - t3 % 2);
    })(n2)}${o2}` : "]" === o2 && n2.length % 2 == 0 ? `[${((e3) => e3.replace(h, (e4, t3, r3) => t3.charCodeAt(0) <= r3.charCodeAt(0) ? e4 : ""))(r2)}${n2}]` : "[]"], [/(?:[^*])$/, (e2) => /\/$/.test(e2) ? `${e2}$` : `${e2}(?=$|\\/$)`]], g = /(^|\\\/)?\\\*$/, y = "regex", v = "checkRegex", w = { [y]: (e2, t2) => `${t2 ? `${t2}[^/]+` : "[^/]*"}(?=$|\\/$)`, [v]: (e2, t2) => `${t2 ? `${t2}[^/]*` : "[^/]*"}(?=$|\\/$)` }, b = (e2) => "string" == typeof e2;
    class _ {
      constructor(e2, t2, r2, n2, o2, s2) {
        this.pattern = e2, this.mark = t2, this.negative = o2, p(this, "body", r2), p(this, "ignoreCase", n2), p(this, "regexPrefix", s2);
      }
      get regex() {
        const e2 = "_" + y;
        return this[e2] ? this[e2] : this._make(y, e2);
      }
      get checkRegex() {
        const e2 = "_" + v;
        return this[e2] ? this[e2] : this._make(v, e2);
      }
      _make(e2, t2) {
        const r2 = this.regexPrefix.replace(g, w[e2]), n2 = this.ignoreCase ? new RegExp(r2, "i") : new RegExp(r2);
        return p(this, t2, n2);
      }
    }
    const S = ({ pattern: e2, mark: t2 }, r2) => {
      let n2 = false, i2 = e2;
      0 === i2.indexOf("!") && (n2 = true, i2 = i2.substr(1)), i2 = i2.replace(o, "!").replace(s, "#");
      const a2 = ((e3) => f.reduce((t3, [r3, n3]) => t3.replace(r3, n3.bind(e3)), e3))(i2);
      return new _(e2, t2, i2, r2, n2, a2);
    };
    class x {
      constructor(e2) {
        this._ignoreCase = e2, this._rules = [];
      }
      _add(e2) {
        if (e2 && e2[d]) return this._rules = this._rules.concat(e2._rules._rules), void (this._added = true);
        if (b(e2) && (e2 = { pattern: e2 }), ((e3) => e3 && b(e3) && !r.test(e3) && !n.test(e3) && 0 !== e3.indexOf("#"))(e2.pattern)) {
          const t2 = S(e2, this._ignoreCase);
          this._added = true, this._rules.push(t2);
        }
      }
      add(e2) {
        return this._added = false, t(b(e2) ? ((e3) => e3.split(i).filter(Boolean))(e2) : e2).forEach(this._add, this), this._added;
      }
      test(e2, t2, r2) {
        let n2, o2 = false, s2 = false;
        this._rules.forEach((i3) => {
          const { negative: a2 } = i3;
          if (s2 === a2 && o2 !== s2 || a2 && !o2 && !s2 && !t2) return;
          i3[r2].test(e2) && (o2 = !a2, s2 = a2, n2 = a2 ? void 0 : i3);
        });
        const i2 = { ignored: o2, unignored: s2 };
        return n2 && (i2.rule = n2), i2;
      }
    }
    const k = (e2, t2) => {
      throw new t2(e2);
    }, E = (e2, t2, r2) => {
      if (!b(e2)) return r2(`path must be a string, but got \`${t2}\``, TypeError);
      if (!e2) return r2("path must not be empty", TypeError);
      if (E.isNotRelative(e2)) {
        return r2(`path should be a ${"`path.relative()`d"} string, but got "${t2}"`, RangeError);
      }
      return true;
    }, T = (e2) => a.test(e2);
    E.isNotRelative = T, E.convert = (e2) => e2;
    class C {
      constructor({ ignorecase: e2 = true, ignoreCase: t2 = e2, allowRelativePaths: r2 = false } = {}) {
        p(this, d, true), this._rules = new x(t2), this._strictPathCheck = !r2, this._initCache();
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
        const o2 = e2 && E.convert(e2);
        return E(o2, e2, this._strictPathCheck ? k : m), this._t(o2, t2, r2, n2);
      }
      checkIgnore(e2) {
        if (!l.test(e2)) return this.test(e2);
        const t2 = e2.split(c).filter(Boolean);
        if (t2.pop(), t2.length) {
          const e3 = this._t(t2.join(c) + c, this._testCache, true, t2);
          if (e3.ignored) return e3;
        }
        return this._rules.test(e2, false, v);
      }
      _t(e2, t2, r2, n2) {
        if (e2 in t2) return t2[e2];
        if (n2 || (n2 = e2.split(c).filter(Boolean)), n2.pop(), !n2.length) return t2[e2] = this._rules.test(e2, r2, y);
        const o2 = this._t(n2.join(c) + c, t2, r2, n2);
        return t2[e2] = o2.ignored ? o2 : this._rules.test(e2, r2, y);
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
    const I = (e2) => new C(e2), A = () => {
      E.convert = (e3) => /^\\\\\?\\/.test(e3) || /["<>|\u0000-\u001F]+/u.test(e3) ? e3 : e3.replace(/\\/g, "/");
      const e2 = /^[a-z]:\//i;
      E.isNotRelative = (t2) => e2.test(t2) || T(t2);
    };
    "undefined" != typeof process && "win32" === process.platform && A(), e.exports = I, I.default = I, e.exports.isPathValid = (e2) => E(e2 && E.convert(e2), e2, m), p(e.exports, /* @__PURE__ */ Symbol.for("setupWindows"), A);
  }