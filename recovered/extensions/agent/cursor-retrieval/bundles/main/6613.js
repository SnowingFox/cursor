// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 6613 range:810221..816627
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6613: (e2) => {
    function a2(e3) {
      return Array.isArray(e3) ? e3 : [e3];
    }
    const n2 = /^\s+$/, t2 = /(?:[^\\]|^)\\$/, s2 = /^\\!/, o2 = /^\\#/, r2 = /\r?\n/g, i2 = /^\.{0,2}\/|^\.{1,2}$/, l = /\/$/, d = "/";
    let m = "node-ignore";
    "undefined" != typeof Symbol && (m = /* @__PURE__ */ Symbol.for("node-ignore"));
    const c = m, p = (e3, a3, n3) => (Object.defineProperty(e3, a3, { value: n3 }), n3), A = /([0-z])-([0-z])/g, u = () => false, g = [[/^\uFEFF/, () => ""], [/((?:\\\\)*?)(\\?\s+)$/, (e3, a3, n3) => a3 + (0 === n3.indexOf("\\") ? " " : "")], [/(\\+?)\s/g, (e3, a3) => {
      const { length: n3 } = a3;
      return a3.slice(0, n3 - n3 % 2) + " ";
    }], [/[\\$.|*+(){^]/g, (e3) => `\\${e3}`], [/(?!\\)\?/g, () => "[^/]"], [/^\//, () => "^"], [/\//g, () => "\\/"], [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"], [/^(?=[^^])/, function() {
      return /\/(?!$)/.test(this) ? "^" : "(?:^|\\/)";
    }], [/\\\/\\\*\\\*(?=\\\/|$)/g, (e3, a3, n3) => a3 + 6 < n3.length ? "(?:\\/[^\\/]+)*" : "\\/.+"], [/(^|[^\\]+)(\\\*)+(?=.+)/g, (e3, a3, n3) => a3 + n3.replace(/\\\*/g, "[^\\/]*")], [/\\\\\\(?=[$.|*+(){^])/g, () => "\\"], [/\\\\/g, () => "\\"], [/(\\)?\[([^\]/]*?)(\\*)($|\])/g, (e3, a3, n3, t3, s3) => "\\" === a3 ? `\\[${n3}${((e4) => {
      const { length: a4 } = e4;
      return e4.slice(0, a4 - a4 % 2);
    })(t3)}${s3}` : "]" === s3 && t3.length % 2 == 0 ? `[${((e4) => e4.replace(A, (e5, a4, n4) => a4.charCodeAt(0) <= n4.charCodeAt(0) ? e5 : ""))(n3)}${t3}]` : "[]"], [/(?:[^*])$/, (e3) => /\/$/.test(e3) ? `${e3}$` : `${e3}(?=$|\\/$)`]], T = /(^|\\\/)?\\\*$/, h = "regex", k = "checkRegex", _ = { [h]: (e3, a3) => `${a3 ? `${a3}[^/]+` : "[^/]*"}(?=$|\\/$)`, [k]: (e3, a3) => `${a3 ? `${a3}[^/]*` : "[^/]*"}(?=$|\\/$)` }, E = (e3) => "string" == typeof e3;
    class f {
      constructor(e3, a3, n3, t3, s3, o3) {
        this.pattern = e3, this.mark = a3, this.negative = s3, p(this, "body", n3), p(this, "ignoreCase", t3), p(this, "regexPrefix", o3);
      }
      get regex() {
        const e3 = "_" + h;
        return this[e3] ? this[e3] : this._make(h, e3);
      }
      get checkRegex() {
        const e3 = "_" + k;
        return this[e3] ? this[e3] : this._make(k, e3);
      }
      _make(e3, a3) {
        const n3 = this.regexPrefix.replace(T, _[e3]), t3 = this.ignoreCase ? new RegExp(n3, "i") : new RegExp(n3);
        return p(this, a3, t3);
      }
    }
    const C = ({ pattern: e3, mark: a3 }, n3) => {
      let t3 = false, r3 = e3;
      0 === r3.indexOf("!") && (t3 = true, r3 = r3.substr(1)), r3 = r3.replace(s2, "!").replace(o2, "#");
      const i3 = ((e4) => g.reduce((a4, [n4, t4]) => a4.replace(n4, t4.bind(e4)), e4))(r3);
      return new f(e3, a3, r3, n3, t3, i3);
    };
    class I {
      constructor(e3) {
        this._ignoreCase = e3, this._rules = [];
      }
      _add(e3) {
        if (e3 && e3[c]) return this._rules = this._rules.concat(e3._rules._rules), void (this._added = true);
        if (E(e3) && (e3 = { pattern: e3 }), ((e4) => e4 && E(e4) && !n2.test(e4) && !t2.test(e4) && 0 !== e4.indexOf("#"))(e3.pattern)) {
          const a3 = C(e3, this._ignoreCase);
          this._added = true, this._rules.push(a3);
        }
      }
      add(e3) {
        return this._added = false, a2(E(e3) ? ((e4) => e4.split(r2).filter(Boolean))(e3) : e3).forEach(this._add, this), this._added;
      }
      test(e3, a3, n3) {
        let t3, s3 = false, o3 = false;
        this._rules.forEach((r4) => {
          const { negative: i3 } = r4;
          if (o3 === i3 && s3 !== o3 || i3 && !s3 && !o3 && !a3) return;
          r4[n3].test(e3) && (s3 = !i3, o3 = i3, t3 = i3 ? void 0 : r4);
        });
        const r3 = { ignored: s3, unignored: o3 };
        return t3 && (r3.rule = t3), r3;
      }
    }
    const v = (e3, a3) => {
      throw new a3(e3);
    }, y = (e3, a3, n3) => {
      if (!E(e3)) return n3(`path must be a string, but got \`${a3}\``, TypeError);
      if (!e3) return n3("path must not be empty", TypeError);
      if (y.isNotRelative(e3)) {
        return n3(`path should be a ${"`path.relative()`d"} string, but got "${a3}"`, RangeError);
      }
      return true;
    }, S = (e3) => i2.test(e3);
    y.isNotRelative = S, y.convert = (e3) => e3;
    class R {
      constructor({ ignorecase: e3 = true, ignoreCase: a3 = e3, allowRelativePaths: n3 = false } = {}) {
        p(this, c, true), this._rules = new I(a3), this._strictPathCheck = !n3, this._initCache();
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
      _test(e3, a3, n3, t3) {
        const s3 = e3 && y.convert(e3);
        return y(s3, e3, this._strictPathCheck ? v : u), this._t(s3, a3, n3, t3);
      }
      checkIgnore(e3) {
        if (!l.test(e3)) return this.test(e3);
        const a3 = e3.split(d).filter(Boolean);
        if (a3.pop(), a3.length) {
          const e4 = this._t(a3.join(d) + d, this._testCache, true, a3);
          if (e4.ignored) return e4;
        }
        return this._rules.test(e3, false, k);
      }
      _t(e3, a3, n3, t3) {
        if (e3 in a3) return a3[e3];
        if (t3 || (t3 = e3.split(d).filter(Boolean)), t3.pop(), !t3.length) return a3[e3] = this._rules.test(e3, n3, h);
        const s3 = this._t(t3.join(d) + d, a3, n3, t3);
        return a3[e3] = s3.ignored ? s3 : this._rules.test(e3, n3, h);
      }
      ignores(e3) {
        return this._test(e3, this._ignoreCache, false).ignored;
      }
      createFilter() {
        return (e3) => !this.ignores(e3);
      }
      filter(e3) {
        return a2(e3).filter(this.createFilter());
      }
      test(e3) {
        return this._test(e3, this._testCache, true);
      }
    }
    const N = (e3) => new R(e3), B = () => {
      y.convert = (e4) => /^\\\\\?\\/.test(e4) || /["<>|\u0000-\u001F]+/u.test(e4) ? e4 : e4.replace(/\\/g, "/");
      const e3 = /^[a-z]:\//i;
      y.isNotRelative = (a3) => e3.test(a3) || S(a3);
    };
    "undefined" != typeof process && "win32" === process.platform && B(), e2.exports = N, N.default = N, e2.exports.isPathValid = (e3) => y(e3 && y.convert(e3), e3, u), p(e2.exports, /* @__PURE__ */ Symbol.for("setupWindows"), B);
  }