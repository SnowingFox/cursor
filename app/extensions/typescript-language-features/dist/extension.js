"use strict";
var om = Object.create;
var an = Object.defineProperty;
var sm = Object.getOwnPropertyDescriptor;
var am = Object.getOwnPropertyNames;
var cm = Object.getPrototypeOf, lm = Object.prototype.hasOwnProperty;
var y = (i9, t) => () => (i9 && (t = i9(i9 = 0)), t);
var k = (i9, t) => () => (t || i9((t = { exports: {} }).exports, t), t.exports), U = (i9, t) => {
  for (var e in t) an(i9, e, { get: t[e], enumerable: true });
}, Bc = (i9, t, e, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let n of am(t)) !lm.call(i9, n) && n !== e && an(i9, n, { get: () => t[n], enumerable: !(r = sm(t, n)) || r.enumerable });
  return i9;
};
var m = (i9, t, e) => (e = i9 != null ? om(cm(i9)) : {}, Bc(t || !i9 || !i9.__esModule ? an(e, "default", { value: i9, enumerable: true }) : e, i9)), dm = (i9) => Bc(an({}, "__esModule", { value: true }), i9);
function bs(i9) {
  let t = [];
  for (let e of i9) try {
    e.dispose();
  } catch (r) {
    t.push(r);
  }
  if (t.length === 1) throw t[0];
  if (t.length > 1) throw new AggregateError(t, "Encountered errors while disposing of store");
}
var T, sr, Y = y(() => {
  "use strict";
  T = class {
    constructor() {
      this._isDisposed = false;
      this._disposables = [];
    }
    dispose() {
      this._isDisposed || (this._isDisposed = true, bs(this._disposables));
    }
    _register(t) {
      return this._isDisposed ? t.dispose() : this._disposables.push(t), t;
    }
    get isDisposed() {
      return this._isDisposed;
    }
  }, sr = class extends T {
    add(t) {
      return this._register(t), t;
    }
  };
});
function h(i9, t, e) {
  let r = He.workspace.getConfiguration(De, e.scope), n = r.inspect(i9);
  return Cs(n) ? r.get(i9, t) : He.workspace.getConfiguration(e.fallbackSection, e.scope).get(e.fallbackSubSectionNameOverride ?? i9, t);
}
function Cs(i9) {
  return i9 ? typeof i9.globalValue < "u" || typeof i9.workspaceValue < "u" || typeof i9.workspaceFolderValue < "u" || typeof i9.globalLanguageValue < "u" || typeof i9.workspaceLanguageValue < "u" || typeof i9.workspaceFolderLanguageValue < "u" || (i9.languageIds?.length ?? 0) > 0 : false;
}
function ln(i9, t) {
  let e = He.workspace.getConfiguration(De, t.scope);
  if (Cs(e.inspect(i9))) return true;
  let r = He.workspace.getConfiguration(t.fallbackSection, t.scope);
  return Cs(r.inspect(i9));
}
var He, De, ar, et, ne = y(() => {
  "use strict";
  He = m(require("vscode"));
  Y();
  De = "js/ts";
  ar = class extends T {
    constructor(e, r, n) {
      super();
      this.subSectionName = e;
      this.defaultValue = r;
      this.options = n;
      this._onDidChange = this._register(new He.EventEmitter());
      this._value = this.read(), this._register(He.workspace.onDidChangeConfiguration((o) => {
        if (o.affectsConfiguration(`${De}.${e}`, n.scope ?? void 0) || o.affectsConfiguration(`${n.fallbackSection}.${n.fallbackSubSectionNameOverride ?? e}`, n.scope ?? void 0)) {
          let s = this.read();
          s !== this._value && (this._value = s, this._onDidChange.fire(s));
        }
      }));
    }
    get onDidChange() {
      return this._onDidChange.event;
    }
    read() {
      return h(this.subSectionName, this.defaultValue, this.options);
    }
    getValue() {
      return this._value;
    }
  }, et = class extends T {
    constructor(e, r, n) {
      super();
      this.subSectionName = e;
      this.defaultValue = r;
      this.options = n;
      this._cache = /* @__PURE__ */ new Map();
      this._onDidChange = this._register(new He.EventEmitter());
      this.onDidChange = this._onDidChange.event;
      let o = n?.fallbackSubSectionNameOverride ?? e;
      this._register(He.workspace.onDidChangeConfiguration((s) => {
        (s.affectsConfiguration(`${De}.${e}`) || s.affectsConfiguration(`javascript.${o}`) || s.affectsConfiguration(`typescript.${o}`)) && (this._cache.clear(), this._onDidChange.fire());
      })), this._register(He.workspace.onDidChangeWorkspaceFolders(() => {
        this._cache.clear(), this._onDidChange.fire();
      }));
    }
    getValue(e) {
      let r = this.keyFor(e), n = this._cache.get(r);
      if (n !== void 0) return n;
      let o = this.fallbackSectionFor(e.languageId), s = h(this.subSectionName, this.defaultValue, { scope: { uri: e.uri, languageId: e.languageId }, fallbackSection: o, fallbackSubSectionNameOverride: this.options?.fallbackSubSectionNameOverride });
      return this._cache.set(r, s), s;
    }
    fallbackSectionFor(e) {
      switch (e) {
        case "javascript":
        case "javascriptreact":
          return "javascript";
        default:
          return "typescript";
      }
    }
    keyFor(e) {
      let r = He.workspace.getWorkspaceFolder(e.uri);
      return r ? r.uri.toString() : "";
    }
  };
});
var mi = k((vC, Gc) => {
  var fm = "2.0.0", gm = Number.MAX_SAFE_INTEGER || 9007199254740991, mm = 16, hm = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
  Gc.exports = { MAX_LENGTH: 256, MAX_SAFE_COMPONENT_LENGTH: mm, MAX_SAFE_INTEGER: gm, RELEASE_TYPES: hm, SEMVER_SPEC_VERSION: fm, FLAG_INCLUDE_PRERELEASE: 1, FLAG_LOOSE: 2 };
});
var hi = k((yC, Jc) => {
  var vm = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...i9) => console.error("SEMVER", ...i9) : () => {
  };
  Jc.exports = vm;
});
var Fr = k((Rt, Xc) => {
  var { MAX_SAFE_COMPONENT_LENGTH: xs } = mi(), ym = hi();
  Rt = Xc.exports = {};
  var Sm = Rt.re = [], bm = Rt.safeRe = [], x = Rt.src = [], w = Rt.t = {}, Cm = 0, M = (i9, t, e) => {
    let r = t.split("\\s*").join("\\s{0,1}").split("\\s+").join("\\s"), n = Cm++;
    ym(i9, n, t), w[i9] = n, x[n] = t, Sm[n] = new RegExp(t, e ? "g" : void 0), bm[n] = new RegExp(r, e ? "g" : void 0);
  };
  M("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  M("NUMERICIDENTIFIERLOOSE", "[0-9]+");
  M("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
  M("MAINVERSION", `(${x[w.NUMERICIDENTIFIER]})\\.(${x[w.NUMERICIDENTIFIER]})\\.(${x[w.NUMERICIDENTIFIER]})`);
  M("MAINVERSIONLOOSE", `(${x[w.NUMERICIDENTIFIERLOOSE]})\\.(${x[w.NUMERICIDENTIFIERLOOSE]})\\.(${x[w.NUMERICIDENTIFIERLOOSE]})`);
  M("PRERELEASEIDENTIFIER", `(?:${x[w.NUMERICIDENTIFIER]}|${x[w.NONNUMERICIDENTIFIER]})`);
  M("PRERELEASEIDENTIFIERLOOSE", `(?:${x[w.NUMERICIDENTIFIERLOOSE]}|${x[w.NONNUMERICIDENTIFIER]})`);
  M("PRERELEASE", `(?:-(${x[w.PRERELEASEIDENTIFIER]}(?:\\.${x[w.PRERELEASEIDENTIFIER]})*))`);
  M("PRERELEASELOOSE", `(?:-?(${x[w.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${x[w.PRERELEASEIDENTIFIERLOOSE]})*))`);
  M("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
  M("BUILD", `(?:\\+(${x[w.BUILDIDENTIFIER]}(?:\\.${x[w.BUILDIDENTIFIER]})*))`);
  M("FULLPLAIN", `v?${x[w.MAINVERSION]}${x[w.PRERELEASE]}?${x[w.BUILD]}?`);
  M("FULL", `^${x[w.FULLPLAIN]}$`);
  M("LOOSEPLAIN", `[v=\\s]*${x[w.MAINVERSIONLOOSE]}${x[w.PRERELEASELOOSE]}?${x[w.BUILD]}?`);
  M("LOOSE", `^${x[w.LOOSEPLAIN]}$`);
  M("GTLT", "((?:<|>)?=?)");
  M("XRANGEIDENTIFIERLOOSE", `${x[w.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  M("XRANGEIDENTIFIER", `${x[w.NUMERICIDENTIFIER]}|x|X|\\*`);
  M("XRANGEPLAIN", `[v=\\s]*(${x[w.XRANGEIDENTIFIER]})(?:\\.(${x[w.XRANGEIDENTIFIER]})(?:\\.(${x[w.XRANGEIDENTIFIER]})(?:${x[w.PRERELEASE]})?${x[w.BUILD]}?)?)?`);
  M("XRANGEPLAINLOOSE", `[v=\\s]*(${x[w.XRANGEIDENTIFIERLOOSE]})(?:\\.(${x[w.XRANGEIDENTIFIERLOOSE]})(?:\\.(${x[w.XRANGEIDENTIFIERLOOSE]})(?:${x[w.PRERELEASELOOSE]})?${x[w.BUILD]}?)?)?`);
  M("XRANGE", `^${x[w.GTLT]}\\s*${x[w.XRANGEPLAIN]}$`);
  M("XRANGELOOSE", `^${x[w.GTLT]}\\s*${x[w.XRANGEPLAINLOOSE]}$`);
  M("COERCE", `(^|[^\\d])(\\d{1,${xs}})(?:\\.(\\d{1,${xs}}))?(?:\\.(\\d{1,${xs}}))?(?:$|[^\\d])`);
  M("COERCERTL", x[w.COERCE], true);
  M("LONETILDE", "(?:~>?)");
  M("TILDETRIM", `(\\s*)${x[w.LONETILDE]}\\s+`, true);
  Rt.tildeTrimReplace = "$1~";
  M("TILDE", `^${x[w.LONETILDE]}${x[w.XRANGEPLAIN]}$`);
  M("TILDELOOSE", `^${x[w.LONETILDE]}${x[w.XRANGEPLAINLOOSE]}$`);
  M("LONECARET", "(?:\\^)");
  M("CARETTRIM", `(\\s*)${x[w.LONECARET]}\\s+`, true);
  Rt.caretTrimReplace = "$1^";
  M("CARET", `^${x[w.LONECARET]}${x[w.XRANGEPLAIN]}$`);
  M("CARETLOOSE", `^${x[w.LONECARET]}${x[w.XRANGEPLAINLOOSE]}$`);
  M("COMPARATORLOOSE", `^${x[w.GTLT]}\\s*(${x[w.LOOSEPLAIN]})$|^$`);
  M("COMPARATOR", `^${x[w.GTLT]}\\s*(${x[w.FULLPLAIN]})$|^$`);
  M("COMPARATORTRIM", `(\\s*)${x[w.GTLT]}\\s*(${x[w.LOOSEPLAIN]}|${x[w.XRANGEPLAIN]})`, true);
  Rt.comparatorTrimReplace = "$1$2$3";
  M("HYPHENRANGE", `^\\s*(${x[w.XRANGEPLAIN]})\\s+-\\s+(${x[w.XRANGEPLAIN]})\\s*$`);
  M("HYPHENRANGELOOSE", `^\\s*(${x[w.XRANGEPLAINLOOSE]})\\s+-\\s+(${x[w.XRANGEPLAINLOOSE]})\\s*$`);
  M("STAR", "(<|>)?=?\\s*\\*");
  M("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  M("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});
var un = k((SC, Qc) => {
  var Tm = Object.freeze({ loose: true }), Pm = Object.freeze({}), xm = (i9) => i9 ? typeof i9 != "object" ? Tm : i9 : Pm;
  Qc.exports = xm;
});
var ws = k((bC, el) => {
  var Yc = /^[0-9]+$/, Zc = (i9, t) => {
    let e = Yc.test(i9), r = Yc.test(t);
    return e && r && (i9 = +i9, t = +t), i9 === t ? 0 : e && !r ? -1 : r && !e ? 1 : i9 < t ? -1 : 1;
  }, wm = (i9, t) => Zc(t, i9);
  el.exports = { compareIdentifiers: Zc, rcompareIdentifiers: wm };
});
var Re = k((CC, nl) => {
  var fn = hi(), { MAX_LENGTH: tl, MAX_SAFE_INTEGER: gn } = mi(), { safeRe: rl, t: il } = Fr(), Rm = un(), { compareIdentifiers: Lr } = ws(), Rs = class i9 {
    constructor(t, e) {
      if (e = Rm(e), t instanceof i9) {
        if (t.loose === !!e.loose && t.includePrerelease === !!e.includePrerelease) return t;
        t = t.version;
      } else if (typeof t != "string") throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
      if (t.length > tl) throw new TypeError(`version is longer than ${tl} characters`);
      fn("SemVer", t, e), this.options = e, this.loose = !!e.loose, this.includePrerelease = !!e.includePrerelease;
      let r = t.trim().match(e.loose ? rl[il.LOOSE] : rl[il.FULL]);
      if (!r) throw new TypeError(`Invalid Version: ${t}`);
      if (this.raw = t, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > gn || this.major < 0) throw new TypeError("Invalid major version");
      if (this.minor > gn || this.minor < 0) throw new TypeError("Invalid minor version");
      if (this.patch > gn || this.patch < 0) throw new TypeError("Invalid patch version");
      r[4] ? this.prerelease = r[4].split(".").map((n) => {
        if (/^[0-9]+$/.test(n)) {
          let o = +n;
          if (o >= 0 && o < gn) return o;
        }
        return n;
      }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(t) {
      if (fn("SemVer.compare", this.version, this.options, t), !(t instanceof i9)) {
        if (typeof t == "string" && t === this.version) return 0;
        t = new i9(t, this.options);
      }
      return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
    }
    compareMain(t) {
      return t instanceof i9 || (t = new i9(t, this.options)), Lr(this.major, t.major) || Lr(this.minor, t.minor) || Lr(this.patch, t.patch);
    }
    comparePre(t) {
      if (t instanceof i9 || (t = new i9(t, this.options)), this.prerelease.length && !t.prerelease.length) return -1;
      if (!this.prerelease.length && t.prerelease.length) return 1;
      if (!this.prerelease.length && !t.prerelease.length) return 0;
      let e = 0;
      do {
        let r = this.prerelease[e], n = t.prerelease[e];
        if (fn("prerelease compare", e, r, n), r === void 0 && n === void 0) return 0;
        if (n === void 0) return 1;
        if (r === void 0) return -1;
        if (r === n) continue;
        return Lr(r, n);
      } while (++e);
    }
    compareBuild(t) {
      t instanceof i9 || (t = new i9(t, this.options));
      let e = 0;
      do {
        let r = this.build[e], n = t.build[e];
        if (fn("prerelease compare", e, r, n), r === void 0 && n === void 0) return 0;
        if (n === void 0) return 1;
        if (r === void 0) return -1;
        if (r === n) continue;
        return Lr(r, n);
      } while (++e);
    }
    inc(t, e, r) {
      switch (t) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", e, r);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", e, r);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", e, r), this.inc("pre", e, r);
          break;
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", e, r), this.inc("pre", e, r);
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        case "pre": {
          let n = Number(r) ? 1 : 0;
          if (!e && r === false) throw new Error("invalid increment argument: identifier is empty");
          if (this.prerelease.length === 0) this.prerelease = [n];
          else {
            let o = this.prerelease.length;
            for (; --o >= 0; ) typeof this.prerelease[o] == "number" && (this.prerelease[o]++, o = -2);
            if (o === -1) {
              if (e === this.prerelease.join(".") && r === false) throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(n);
            }
          }
          if (e) {
            let o = [e, n];
            r === false && (o = [e]), Lr(this.prerelease[0], e) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = o) : this.prerelease = o;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${t}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  };
  nl.exports = Rs;
});
var lr = k((TC, sl) => {
  var ol = Re(), km = (i9, t, e = false) => {
    if (i9 instanceof ol) return i9;
    try {
      return new ol(i9, t);
    } catch (r) {
      if (!e) return null;
      throw r;
    }
  };
  sl.exports = km;
});
var cl = k((PC, al) => {
  var Im = lr(), Em = (i9, t) => {
    let e = Im(i9, t);
    return e ? e.version : null;
  };
  al.exports = Em;
});
var dl = k((xC, ll) => {
  var Dm = lr(), Am = (i9, t) => {
    let e = Dm(i9.trim().replace(/^[=v]+/, ""), t);
    return e ? e.version : null;
  };
  ll.exports = Am;
});
var fl = k((wC, ul) => {
  var pl = Re(), _m = (i9, t, e, r, n) => {
    typeof e == "string" && (n = r, r = e, e = void 0);
    try {
      return new pl(i9 instanceof pl ? i9.version : i9, e).inc(t, r, n).version;
    } catch {
      return null;
    }
  };
  ul.exports = _m;
});
var hl = k((RC, ml) => {
  var gl = lr(), Fm = (i9, t) => {
    let e = gl(i9, null, true), r = gl(t, null, true), n = e.compare(r);
    if (n === 0) return null;
    let o = n > 0, s = o ? e : r, a = o ? r : e, c = !!s.prerelease.length;
    if (!!a.prerelease.length && !c) return !a.patch && !a.minor ? "major" : s.patch ? "patch" : s.minor ? "minor" : "major";
    let d = c ? "pre" : "";
    return e.major !== r.major ? d + "major" : e.minor !== r.minor ? d + "minor" : e.patch !== r.patch ? d + "patch" : "prerelease";
  };
  ml.exports = Fm;
});
var yl = k((kC, vl) => {
  var Lm = Re(), Mm = (i9, t) => new Lm(i9, t).major;
  vl.exports = Mm;
});
var bl = k((IC, Sl) => {
  var Om = Re(), Nm = (i9, t) => new Om(i9, t).minor;
  Sl.exports = Nm;
});
var Tl = k((EC, Cl) => {
  var qm = Re(), Vm = (i9, t) => new qm(i9, t).patch;
  Cl.exports = Vm;
});
var xl = k((DC, Pl) => {
  var jm = lr(), Um = (i9, t) => {
    let e = jm(i9, t);
    return e && e.prerelease.length ? e.prerelease : null;
  };
  Pl.exports = Um;
});
var ze = k((AC, Rl) => {
  var wl = Re(), Wm = (i9, t, e) => new wl(i9, e).compare(new wl(t, e));
  Rl.exports = Wm;
});
var Il = k((_C, kl) => {
  var Km = ze(), $m = (i9, t, e) => Km(t, i9, e);
  kl.exports = $m;
});
var Dl = k((FC, El) => {
  var Bm = ze(), Hm = (i9, t) => Bm(i9, t, true);
  El.exports = Hm;
});
var mn = k((LC, _l) => {
  var Al = Re(), zm = (i9, t, e) => {
    let r = new Al(i9, e), n = new Al(t, e);
    return r.compare(n) || r.compareBuild(n);
  };
  _l.exports = zm;
});
var Ll = k((MC, Fl) => {
  var Gm = mn(), Jm = (i9, t) => i9.sort((e, r) => Gm(e, r, t));
  Fl.exports = Jm;
});
var Ol = k((OC, Ml) => {
  var Xm = mn(), Qm = (i9, t) => i9.sort((e, r) => Xm(r, e, t));
  Ml.exports = Qm;
});
var vi = k((NC, Nl) => {
  var Ym = ze(), Zm = (i9, t, e) => Ym(i9, t, e) > 0;
  Nl.exports = Zm;
});
var hn = k((qC, ql) => {
  var eh = ze(), th = (i9, t, e) => eh(i9, t, e) < 0;
  ql.exports = th;
});
var ks = k((VC, Vl) => {
  var rh = ze(), ih = (i9, t, e) => rh(i9, t, e) === 0;
  Vl.exports = ih;
});
var Is = k((jC, jl) => {
  var nh = ze(), oh = (i9, t, e) => nh(i9, t, e) !== 0;
  jl.exports = oh;
});
var vn = k((UC, Ul) => {
  var sh = ze(), ah = (i9, t, e) => sh(i9, t, e) >= 0;
  Ul.exports = ah;
});
var yn = k((WC, Wl) => {
  var ch = ze(), lh = (i9, t, e) => ch(i9, t, e) <= 0;
  Wl.exports = lh;
});
var Es = k((KC, Kl) => {
  var dh = ks(), ph = Is(), uh = vi(), fh = vn(), gh = hn(), mh = yn(), hh = (i9, t, e, r) => {
    switch (t) {
      case "===":
        return typeof i9 == "object" && (i9 = i9.version), typeof e == "object" && (e = e.version), i9 === e;
      case "!==":
        return typeof i9 == "object" && (i9 = i9.version), typeof e == "object" && (e = e.version), i9 !== e;
      case "":
      case "=":
      case "==":
        return dh(i9, e, r);
      case "!=":
        return ph(i9, e, r);
      case ">":
        return uh(i9, e, r);
      case ">=":
        return fh(i9, e, r);
      case "<":
        return gh(i9, e, r);
      case "<=":
        return mh(i9, e, r);
      default:
        throw new TypeError(`Invalid operator: ${t}`);
    }
  };
  Kl.exports = hh;
});
var Bl = k(($C, $l) => {
  var vh = Re(), yh = lr(), { safeRe: Sn, t: bn } = Fr(), Sh = (i9, t) => {
    if (i9 instanceof vh) return i9;
    if (typeof i9 == "number" && (i9 = String(i9)), typeof i9 != "string") return null;
    t = t || {};
    let e = null;
    if (!t.rtl) e = i9.match(Sn[bn.COERCE]);
    else {
      let r;
      for (; (r = Sn[bn.COERCERTL].exec(i9)) && (!e || e.index + e[0].length !== i9.length); ) (!e || r.index + r[0].length !== e.index + e[0].length) && (e = r), Sn[bn.COERCERTL].lastIndex = r.index + r[1].length + r[2].length;
      Sn[bn.COERCERTL].lastIndex = -1;
    }
    return e === null ? null : yh(`${e[2]}.${e[3] || "0"}.${e[4] || "0"}`, t);
  };
  $l.exports = Sh;
});
var zl = k((BC, Hl) => {
  "use strict";
  Hl.exports = function(i9) {
    i9.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next) yield t.value;
    };
  };
});
var Jl = k((HC, Gl) => {
  "use strict";
  Gl.exports = $;
  $.Node = dr;
  $.create = $;
  function $(i9) {
    var t = this;
    if (t instanceof $ || (t = new $()), t.tail = null, t.head = null, t.length = 0, i9 && typeof i9.forEach == "function") i9.forEach(function(n) {
      t.push(n);
    });
    else if (arguments.length > 0) for (var e = 0, r = arguments.length; e < r; e++) t.push(arguments[e]);
    return t;
  }
  $.prototype.removeNode = function(i9) {
    if (i9.list !== this) throw new Error("removing node which does not belong to this list");
    var t = i9.next, e = i9.prev;
    return t && (t.prev = e), e && (e.next = t), i9 === this.head && (this.head = t), i9 === this.tail && (this.tail = e), i9.list.length--, i9.next = null, i9.prev = null, i9.list = null, t;
  };
  $.prototype.unshiftNode = function(i9) {
    if (i9 !== this.head) {
      i9.list && i9.list.removeNode(i9);
      var t = this.head;
      i9.list = this, i9.next = t, t && (t.prev = i9), this.head = i9, this.tail || (this.tail = i9), this.length++;
    }
  };
  $.prototype.pushNode = function(i9) {
    if (i9 !== this.tail) {
      i9.list && i9.list.removeNode(i9);
      var t = this.tail;
      i9.list = this, i9.prev = t, t && (t.next = i9), this.tail = i9, this.head || (this.head = i9), this.length++;
    }
  };
  $.prototype.push = function() {
    for (var i9 = 0, t = arguments.length; i9 < t; i9++) Ch(this, arguments[i9]);
    return this.length;
  };
  $.prototype.unshift = function() {
    for (var i9 = 0, t = arguments.length; i9 < t; i9++) Th(this, arguments[i9]);
    return this.length;
  };
  $.prototype.pop = function() {
    if (this.tail) {
      var i9 = this.tail.value;
      return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, i9;
    }
  };
  $.prototype.shift = function() {
    if (this.head) {
      var i9 = this.head.value;
      return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, i9;
    }
  };
  $.prototype.forEach = function(i9, t) {
    t = t || this;
    for (var e = this.head, r = 0; e !== null; r++) i9.call(t, e.value, r, this), e = e.next;
  };
  $.prototype.forEachReverse = function(i9, t) {
    t = t || this;
    for (var e = this.tail, r = this.length - 1; e !== null; r--) i9.call(t, e.value, r, this), e = e.prev;
  };
  $.prototype.get = function(i9) {
    for (var t = 0, e = this.head; e !== null && t < i9; t++) e = e.next;
    if (t === i9 && e !== null) return e.value;
  };
  $.prototype.getReverse = function(i9) {
    for (var t = 0, e = this.tail; e !== null && t < i9; t++) e = e.prev;
    if (t === i9 && e !== null) return e.value;
  };
  $.prototype.map = function(i9, t) {
    t = t || this;
    for (var e = new $(), r = this.head; r !== null; ) e.push(i9.call(t, r.value, this)), r = r.next;
    return e;
  };
  $.prototype.mapReverse = function(i9, t) {
    t = t || this;
    for (var e = new $(), r = this.tail; r !== null; ) e.push(i9.call(t, r.value, this)), r = r.prev;
    return e;
  };
  $.prototype.reduce = function(i9, t) {
    var e, r = this.head;
    if (arguments.length > 1) e = t;
    else if (this.head) r = this.head.next, e = this.head.value;
    else throw new TypeError("Reduce of empty list with no initial value");
    for (var n = 0; r !== null; n++) e = i9(e, r.value, n), r = r.next;
    return e;
  };
  $.prototype.reduceReverse = function(i9, t) {
    var e, r = this.tail;
    if (arguments.length > 1) e = t;
    else if (this.tail) r = this.tail.prev, e = this.tail.value;
    else throw new TypeError("Reduce of empty list with no initial value");
    for (var n = this.length - 1; r !== null; n--) e = i9(e, r.value, n), r = r.prev;
    return e;
  };
  $.prototype.toArray = function() {
    for (var i9 = new Array(this.length), t = 0, e = this.head; e !== null; t++) i9[t] = e.value, e = e.next;
    return i9;
  };
  $.prototype.toArrayReverse = function() {
    for (var i9 = new Array(this.length), t = 0, e = this.tail; e !== null; t++) i9[t] = e.value, e = e.prev;
    return i9;
  };
  $.prototype.slice = function(i9, t) {
    t = t || this.length, t < 0 && (t += this.length), i9 = i9 || 0, i9 < 0 && (i9 += this.length);
    var e = new $();
    if (t < i9 || t < 0) return e;
    i9 < 0 && (i9 = 0), t > this.length && (t = this.length);
    for (var r = 0, n = this.head; n !== null && r < i9; r++) n = n.next;
    for (; n !== null && r < t; r++, n = n.next) e.push(n.value);
    return e;
  };
  $.prototype.sliceReverse = function(i9, t) {
    t = t || this.length, t < 0 && (t += this.length), i9 = i9 || 0, i9 < 0 && (i9 += this.length);
    var e = new $();
    if (t < i9 || t < 0) return e;
    i9 < 0 && (i9 = 0), t > this.length && (t = this.length);
    for (var r = this.length, n = this.tail; n !== null && r > t; r--) n = n.prev;
    for (; n !== null && r > i9; r--, n = n.prev) e.push(n.value);
    return e;
  };
  $.prototype.splice = function(i9, t, ...e) {
    i9 > this.length && (i9 = this.length - 1), i9 < 0 && (i9 = this.length + i9);
    for (var r = 0, n = this.head; n !== null && r < i9; r++) n = n.next;
    for (var o = [], r = 0; n && r < t; r++) o.push(n.value), n = this.removeNode(n);
    n === null && (n = this.tail), n !== this.head && n !== this.tail && (n = n.prev);
    for (var r = 0; r < e.length; r++) n = bh(this, n, e[r]);
    return o;
  };
  $.prototype.reverse = function() {
    for (var i9 = this.head, t = this.tail, e = i9; e !== null; e = e.prev) {
      var r = e.prev;
      e.prev = e.next, e.next = r;
    }
    return this.head = t, this.tail = i9, this;
  };
  function bh(i9, t, e) {
    var r = t === i9.head ? new dr(e, null, t, i9) : new dr(e, t, t.next, i9);
    return r.next === null && (i9.tail = r), r.prev === null && (i9.head = r), i9.length++, r;
  }
  function Ch(i9, t) {
    i9.tail = new dr(t, i9.tail, null, i9), i9.head || (i9.head = i9.tail), i9.length++;
  }
  function Th(i9, t) {
    i9.head = new dr(t, null, i9.head, i9), i9.tail || (i9.tail = i9.head), i9.length++;
  }
  function dr(i9, t, e, r) {
    if (!(this instanceof dr)) return new dr(i9, t, e, r);
    this.list = r, this.value = i9, t ? (t.next = this, this.prev = t) : this.prev = null, e ? (e.prev = this, this.next = e) : this.next = null;
  }
  try {
    zl()($);
  } catch {
  }
});
var ed = k((zC, Zl) => {
  "use strict";
  var Ph = Jl(), pr = /* @__PURE__ */ Symbol("max"), It = /* @__PURE__ */ Symbol("length"), Mr = /* @__PURE__ */ Symbol("lengthCalculator"), Si = /* @__PURE__ */ Symbol("allowStale"), ur = /* @__PURE__ */ Symbol("maxAge"), kt = /* @__PURE__ */ Symbol("dispose"), Xl = /* @__PURE__ */ Symbol("noDisposeOnSet"), Ce = /* @__PURE__ */ Symbol("lruList"), tt = /* @__PURE__ */ Symbol("cache"), Yl = /* @__PURE__ */ Symbol("updateAgeOnGet"), Ds = () => 1, _s = class {
    constructor(t) {
      if (typeof t == "number" && (t = { max: t }), t || (t = {}), t.max && (typeof t.max != "number" || t.max < 0)) throw new TypeError("max must be a non-negative number");
      let e = this[pr] = t.max || 1 / 0, r = t.length || Ds;
      if (this[Mr] = typeof r != "function" ? Ds : r, this[Si] = t.stale || false, t.maxAge && typeof t.maxAge != "number") throw new TypeError("maxAge must be a number");
      this[ur] = t.maxAge || 0, this[kt] = t.dispose, this[Xl] = t.noDisposeOnSet || false, this[Yl] = t.updateAgeOnGet || false, this.reset();
    }
    set max(t) {
      if (typeof t != "number" || t < 0) throw new TypeError("max must be a non-negative number");
      this[pr] = t || 1 / 0, yi(this);
    }
    get max() {
      return this[pr];
    }
    set allowStale(t) {
      this[Si] = !!t;
    }
    get allowStale() {
      return this[Si];
    }
    set maxAge(t) {
      if (typeof t != "number") throw new TypeError("maxAge must be a non-negative number");
      this[ur] = t, yi(this);
    }
    get maxAge() {
      return this[ur];
    }
    set lengthCalculator(t) {
      typeof t != "function" && (t = Ds), t !== this[Mr] && (this[Mr] = t, this[It] = 0, this[Ce].forEach((e) => {
        e.length = this[Mr](e.value, e.key), this[It] += e.length;
      })), yi(this);
    }
    get lengthCalculator() {
      return this[Mr];
    }
    get length() {
      return this[It];
    }
    get itemCount() {
      return this[Ce].length;
    }
    rforEach(t, e) {
      e = e || this;
      for (let r = this[Ce].tail; r !== null; ) {
        let n = r.prev;
        Ql(this, t, r, e), r = n;
      }
    }
    forEach(t, e) {
      e = e || this;
      for (let r = this[Ce].head; r !== null; ) {
        let n = r.next;
        Ql(this, t, r, e), r = n;
      }
    }
    keys() {
      return this[Ce].toArray().map((t) => t.key);
    }
    values() {
      return this[Ce].toArray().map((t) => t.value);
    }
    reset() {
      this[kt] && this[Ce] && this[Ce].length && this[Ce].forEach((t) => this[kt](t.key, t.value)), this[tt] = /* @__PURE__ */ new Map(), this[Ce] = new Ph(), this[It] = 0;
    }
    dump() {
      return this[Ce].map((t) => Cn(this, t) ? false : { k: t.key, v: t.value, e: t.now + (t.maxAge || 0) }).toArray().filter((t) => t);
    }
    dumpLru() {
      return this[Ce];
    }
    set(t, e, r) {
      if (r = r || this[ur], r && typeof r != "number") throw new TypeError("maxAge must be a number");
      let n = r ? Date.now() : 0, o = this[Mr](e, t);
      if (this[tt].has(t)) {
        if (o > this[pr]) return Or(this, this[tt].get(t)), false;
        let c = this[tt].get(t).value;
        return this[kt] && (this[Xl] || this[kt](t, c.value)), c.now = n, c.maxAge = r, c.value = e, this[It] += o - c.length, c.length = o, this.get(t), yi(this), true;
      }
      let s = new Fs(t, e, o, n, r);
      return s.length > this[pr] ? (this[kt] && this[kt](t, e), false) : (this[It] += s.length, this[Ce].unshift(s), this[tt].set(t, this[Ce].head), yi(this), true);
    }
    has(t) {
      if (!this[tt].has(t)) return false;
      let e = this[tt].get(t).value;
      return !Cn(this, e);
    }
    get(t) {
      return As(this, t, true);
    }
    peek(t) {
      return As(this, t, false);
    }
    pop() {
      let t = this[Ce].tail;
      return t ? (Or(this, t), t.value) : null;
    }
    del(t) {
      Or(this, this[tt].get(t));
    }
    load(t) {
      this.reset();
      let e = Date.now();
      for (let r = t.length - 1; r >= 0; r--) {
        let n = t[r], o = n.e || 0;
        if (o === 0) this.set(n.k, n.v);
        else {
          let s = o - e;
          s > 0 && this.set(n.k, n.v, s);
        }
      }
    }
    prune() {
      this[tt].forEach((t, e) => As(this, e, false));
    }
  }, As = (i9, t, e) => {
    let r = i9[tt].get(t);
    if (r) {
      let n = r.value;
      if (Cn(i9, n)) {
        if (Or(i9, r), !i9[Si]) return;
      } else e && (i9[Yl] && (r.value.now = Date.now()), i9[Ce].unshiftNode(r));
      return n.value;
    }
  }, Cn = (i9, t) => {
    if (!t || !t.maxAge && !i9[ur]) return false;
    let e = Date.now() - t.now;
    return t.maxAge ? e > t.maxAge : i9[ur] && e > i9[ur];
  }, yi = (i9) => {
    if (i9[It] > i9[pr]) for (let t = i9[Ce].tail; i9[It] > i9[pr] && t !== null; ) {
      let e = t.prev;
      Or(i9, t), t = e;
    }
  }, Or = (i9, t) => {
    if (t) {
      let e = t.value;
      i9[kt] && i9[kt](e.key, e.value), i9[It] -= e.length, i9[tt].delete(e.key), i9[Ce].removeNode(t);
    }
  }, Fs = class {
    constructor(t, e, r, n, o) {
      this.key = t, this.value = e, this.length = r, this.now = n, this.maxAge = o || 0;
    }
  }, Ql = (i9, t, e, r) => {
    let n = e.value;
    Cn(i9, n) && (Or(i9, e), i9[Si] || (n = void 0)), n && t.call(r, n.value, n.key, i9);
  };
  Zl.exports = _s;
});
var Ge = k((GC, nd) => {
  var Ls = class i9 {
    constructor(t, e) {
      if (e = wh(e), t instanceof i9) return t.loose === !!e.loose && t.includePrerelease === !!e.includePrerelease ? t : new i9(t.raw, e);
      if (t instanceof Ms) return this.raw = t.value, this.set = [[t]], this.format(), this;
      if (this.options = e, this.loose = !!e.loose, this.includePrerelease = !!e.includePrerelease, this.raw = t.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map((r) => this.parseRange(r)).filter((r) => r.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        let r = this.set[0];
        if (this.set = this.set.filter((n) => !rd(n[0])), this.set.length === 0) this.set = [r];
        else if (this.set.length > 1) {
          for (let n of this.set) if (n.length === 1 && _h(n[0])) {
            this.set = [n];
            break;
          }
        }
      }
      this.format();
    }
    format() {
      return this.range = this.set.map((t) => t.join(" ").trim()).join("||").trim(), this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(t) {
      let r = ((this.options.includePrerelease && Dh) | (this.options.loose && Ah)) + ":" + t, n = td.get(r);
      if (n) return n;
      let o = this.options.loose, s = o ? Le[Ae.HYPHENRANGELOOSE] : Le[Ae.HYPHENRANGE];
      t = t.replace(s, Wh(this.options.includePrerelease)), ce("hyphen replace", t), t = t.replace(Le[Ae.COMPARATORTRIM], kh), ce("comparator trim", t), t = t.replace(Le[Ae.TILDETRIM], Ih), t = t.replace(Le[Ae.CARETTRIM], Eh);
      let a = t.split(" ").map((p) => Fh(p, this.options)).join(" ").split(/\s+/).map((p) => Uh(p, this.options));
      o && (a = a.filter((p) => (ce("loose invalid filter", p, this.options), !!p.match(Le[Ae.COMPARATORLOOSE])))), ce("range list", a);
      let c = /* @__PURE__ */ new Map(), l = a.map((p) => new Ms(p, this.options));
      for (let p of l) {
        if (rd(p)) return [p];
        c.set(p.value, p);
      }
      c.size > 1 && c.has("") && c.delete("");
      let d = [...c.values()];
      return td.set(r, d), d;
    }
    intersects(t, e) {
      if (!(t instanceof i9)) throw new TypeError("a Range is required");
      return this.set.some((r) => id(r, e) && t.set.some((n) => id(n, e) && r.every((o) => n.every((s) => o.intersects(s, e)))));
    }
    test(t) {
      if (!t) return false;
      if (typeof t == "string") try {
        t = new Rh(t, this.options);
      } catch {
        return false;
      }
      for (let e = 0; e < this.set.length; e++) if (Kh(this.set[e], t, this.options)) return true;
      return false;
    }
  };
  nd.exports = Ls;
  var xh = ed(), td = new xh({ max: 1e3 }), wh = un(), Ms = bi(), ce = hi(), Rh = Re(), { safeRe: Le, t: Ae, comparatorTrimReplace: kh, tildeTrimReplace: Ih, caretTrimReplace: Eh } = Fr(), { FLAG_INCLUDE_PRERELEASE: Dh, FLAG_LOOSE: Ah } = mi(), rd = (i9) => i9.value === "<0.0.0-0", _h = (i9) => i9.value === "", id = (i9, t) => {
    let e = true, r = i9.slice(), n = r.pop();
    for (; e && r.length; ) e = r.every((o) => n.intersects(o, t)), n = r.pop();
    return e;
  }, Fh = (i9, t) => (ce("comp", i9, t), i9 = Oh(i9, t), ce("caret", i9), i9 = Lh(i9, t), ce("tildes", i9), i9 = qh(i9, t), ce("xrange", i9), i9 = jh(i9, t), ce("stars", i9), i9), _e = (i9) => !i9 || i9.toLowerCase() === "x" || i9 === "*", Lh = (i9, t) => i9.trim().split(/\s+/).map((e) => Mh(e, t)).join(" "), Mh = (i9, t) => {
    let e = t.loose ? Le[Ae.TILDELOOSE] : Le[Ae.TILDE];
    return i9.replace(e, (r, n, o, s, a) => {
      ce("tilde", i9, r, n, o, s, a);
      let c;
      return _e(n) ? c = "" : _e(o) ? c = `>=${n}.0.0 <${+n + 1}.0.0-0` : _e(s) ? c = `>=${n}.${o}.0 <${n}.${+o + 1}.0-0` : a ? (ce("replaceTilde pr", a), c = `>=${n}.${o}.${s}-${a} <${n}.${+o + 1}.0-0`) : c = `>=${n}.${o}.${s} <${n}.${+o + 1}.0-0`, ce("tilde return", c), c;
    });
  }, Oh = (i9, t) => i9.trim().split(/\s+/).map((e) => Nh(e, t)).join(" "), Nh = (i9, t) => {
    ce("caret", i9, t);
    let e = t.loose ? Le[Ae.CARETLOOSE] : Le[Ae.CARET], r = t.includePrerelease ? "-0" : "";
    return i9.replace(e, (n, o, s, a, c) => {
      ce("caret", i9, n, o, s, a, c);
      let l;
      return _e(o) ? l = "" : _e(s) ? l = `>=${o}.0.0${r} <${+o + 1}.0.0-0` : _e(a) ? o === "0" ? l = `>=${o}.${s}.0${r} <${o}.${+s + 1}.0-0` : l = `>=${o}.${s}.0${r} <${+o + 1}.0.0-0` : c ? (ce("replaceCaret pr", c), o === "0" ? s === "0" ? l = `>=${o}.${s}.${a}-${c} <${o}.${s}.${+a + 1}-0` : l = `>=${o}.${s}.${a}-${c} <${o}.${+s + 1}.0-0` : l = `>=${o}.${s}.${a}-${c} <${+o + 1}.0.0-0`) : (ce("no pr"), o === "0" ? s === "0" ? l = `>=${o}.${s}.${a}${r} <${o}.${s}.${+a + 1}-0` : l = `>=${o}.${s}.${a}${r} <${o}.${+s + 1}.0-0` : l = `>=${o}.${s}.${a} <${+o + 1}.0.0-0`), ce("caret return", l), l;
    });
  }, qh = (i9, t) => (ce("replaceXRanges", i9, t), i9.split(/\s+/).map((e) => Vh(e, t)).join(" ")), Vh = (i9, t) => {
    i9 = i9.trim();
    let e = t.loose ? Le[Ae.XRANGELOOSE] : Le[Ae.XRANGE];
    return i9.replace(e, (r, n, o, s, a, c) => {
      ce("xRange", i9, r, n, o, s, a, c);
      let l = _e(o), d = l || _e(s), p = d || _e(a), u = p;
      return n === "=" && u && (n = ""), c = t.includePrerelease ? "-0" : "", l ? n === ">" || n === "<" ? r = "<0.0.0-0" : r = "*" : n && u ? (d && (s = 0), a = 0, n === ">" ? (n = ">=", d ? (o = +o + 1, s = 0, a = 0) : (s = +s + 1, a = 0)) : n === "<=" && (n = "<", d ? o = +o + 1 : s = +s + 1), n === "<" && (c = "-0"), r = `${n + o}.${s}.${a}${c}`) : d ? r = `>=${o}.0.0${c} <${+o + 1}.0.0-0` : p && (r = `>=${o}.${s}.0${c} <${o}.${+s + 1}.0-0`), ce("xRange return", r), r;
    });
  }, jh = (i9, t) => (ce("replaceStars", i9, t), i9.trim().replace(Le[Ae.STAR], "")), Uh = (i9, t) => (ce("replaceGTE0", i9, t), i9.trim().replace(Le[t.includePrerelease ? Ae.GTE0PRE : Ae.GTE0], "")), Wh = (i9) => (t, e, r, n, o, s, a, c, l, d, p, u, f) => (_e(r) ? e = "" : _e(n) ? e = `>=${r}.0.0${i9 ? "-0" : ""}` : _e(o) ? e = `>=${r}.${n}.0${i9 ? "-0" : ""}` : s ? e = `>=${e}` : e = `>=${e}${i9 ? "-0" : ""}`, _e(l) ? c = "" : _e(d) ? c = `<${+l + 1}.0.0-0` : _e(p) ? c = `<${l}.${+d + 1}.0-0` : u ? c = `<=${l}.${d}.${p}-${u}` : i9 ? c = `<${l}.${d}.${+p + 1}-0` : c = `<=${c}`, `${e} ${c}`.trim()), Kh = (i9, t, e) => {
    for (let r = 0; r < i9.length; r++) if (!i9[r].test(t)) return false;
    if (t.prerelease.length && !e.includePrerelease) {
      for (let r = 0; r < i9.length; r++) if (ce(i9[r].semver), i9[r].semver !== Ms.ANY && i9[r].semver.prerelease.length > 0) {
        let n = i9[r].semver;
        if (n.major === t.major && n.minor === t.minor && n.patch === t.patch) return true;
      }
      return false;
    }
    return true;
  };
});
var bi = k((JC, dd) => {
  var Ci = /* @__PURE__ */ Symbol("SemVer ANY"), qs = class i9 {
    static get ANY() {
      return Ci;
    }
    constructor(t, e) {
      if (e = od(e), t instanceof i9) {
        if (t.loose === !!e.loose) return t;
        t = t.value;
      }
      t = t.trim().split(/\s+/).join(" "), Ns("comparator", t, e), this.options = e, this.loose = !!e.loose, this.parse(t), this.semver === Ci ? this.value = "" : this.value = this.operator + this.semver.version, Ns("comp", this);
    }
    parse(t) {
      let e = this.options.loose ? sd[ad.COMPARATORLOOSE] : sd[ad.COMPARATOR], r = t.match(e);
      if (!r) throw new TypeError(`Invalid comparator: ${t}`);
      this.operator = r[1] !== void 0 ? r[1] : "", this.operator === "=" && (this.operator = ""), r[2] ? this.semver = new cd(r[2], this.options.loose) : this.semver = Ci;
    }
    toString() {
      return this.value;
    }
    test(t) {
      if (Ns("Comparator.test", t, this.options.loose), this.semver === Ci || t === Ci) return true;
      if (typeof t == "string") try {
        t = new cd(t, this.options);
      } catch {
        return false;
      }
      return Os(t, this.operator, this.semver, this.options);
    }
    intersects(t, e) {
      if (!(t instanceof i9)) throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? true : new ld(t.value, e).test(this.value) : t.operator === "" ? t.value === "" ? true : new ld(this.value, e).test(t.semver) : (e = od(e), e.includePrerelease && (this.value === "<0.0.0-0" || t.value === "<0.0.0-0") || !e.includePrerelease && (this.value.startsWith("<0.0.0") || t.value.startsWith("<0.0.0")) ? false : !!(this.operator.startsWith(">") && t.operator.startsWith(">") || this.operator.startsWith("<") && t.operator.startsWith("<") || this.semver.version === t.semver.version && this.operator.includes("=") && t.operator.includes("=") || Os(this.semver, "<", t.semver, e) && this.operator.startsWith(">") && t.operator.startsWith("<") || Os(this.semver, ">", t.semver, e) && this.operator.startsWith("<") && t.operator.startsWith(">")));
    }
  };
  dd.exports = qs;
  var od = un(), { safeRe: sd, t: ad } = Fr(), Os = Es(), Ns = hi(), cd = Re(), ld = Ge();
});
var Ti = k((XC, pd) => {
  var $h = Ge(), Bh = (i9, t, e) => {
    try {
      t = new $h(t, e);
    } catch {
      return false;
    }
    return t.test(i9);
  };
  pd.exports = Bh;
});
var fd = k((QC, ud) => {
  var Hh = Ge(), zh = (i9, t) => new Hh(i9, t).set.map((e) => e.map((r) => r.value).join(" ").trim().split(" "));
  ud.exports = zh;
});
var md = k((YC, gd) => {
  var Gh = Re(), Jh = Ge(), Xh = (i9, t, e) => {
    let r = null, n = null, o = null;
    try {
      o = new Jh(t, e);
    } catch {
      return null;
    }
    return i9.forEach((s) => {
      o.test(s) && (!r || n.compare(s) === -1) && (r = s, n = new Gh(r, e));
    }), r;
  };
  gd.exports = Xh;
});
var vd = k((ZC, hd) => {
  var Qh = Re(), Yh = Ge(), Zh = (i9, t, e) => {
    let r = null, n = null, o = null;
    try {
      o = new Yh(t, e);
    } catch {
      return null;
    }
    return i9.forEach((s) => {
      o.test(s) && (!r || n.compare(s) === 1) && (r = s, n = new Qh(r, e));
    }), r;
  };
  hd.exports = Zh;
});
var bd = k((eT, Sd) => {
  var Vs = Re(), ev = Ge(), yd = vi(), tv = (i9, t) => {
    i9 = new ev(i9, t);
    let e = new Vs("0.0.0");
    if (i9.test(e) || (e = new Vs("0.0.0-0"), i9.test(e))) return e;
    e = null;
    for (let r = 0; r < i9.set.length; ++r) {
      let n = i9.set[r], o = null;
      n.forEach((s) => {
        let a = new Vs(s.semver.version);
        switch (s.operator) {
          case ">":
            a.prerelease.length === 0 ? a.patch++ : a.prerelease.push(0), a.raw = a.format();
          case "":
          case ">=":
            (!o || yd(a, o)) && (o = a);
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error(`Unexpected operation: ${s.operator}`);
        }
      }), o && (!e || yd(e, o)) && (e = o);
    }
    return e && i9.test(e) ? e : null;
  };
  Sd.exports = tv;
});
var Td = k((tT, Cd) => {
  var rv = Ge(), iv = (i9, t) => {
    try {
      return new rv(i9, t).range || "*";
    } catch {
      return null;
    }
  };
  Cd.exports = iv;
});
var Tn = k((rT, Rd) => {
  var nv = Re(), wd = bi(), { ANY: ov } = wd, sv = Ge(), av = Ti(), Pd = vi(), xd = hn(), cv = yn(), lv = vn(), dv = (i9, t, e, r) => {
    i9 = new nv(i9, r), t = new sv(t, r);
    let n, o, s, a, c;
    switch (e) {
      case ">":
        n = Pd, o = cv, s = xd, a = ">", c = ">=";
        break;
      case "<":
        n = xd, o = lv, s = Pd, a = "<", c = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (av(i9, t, r)) return false;
    for (let l = 0; l < t.set.length; ++l) {
      let d = t.set[l], p = null, u = null;
      if (d.forEach((f) => {
        f.semver === ov && (f = new wd(">=0.0.0")), p = p || f, u = u || f, n(f.semver, p.semver, r) ? p = f : s(f.semver, u.semver, r) && (u = f);
      }), p.operator === a || p.operator === c || (!u.operator || u.operator === a) && o(i9, u.semver)) return false;
      if (u.operator === c && s(i9, u.semver)) return false;
    }
    return true;
  };
  Rd.exports = dv;
});
var Id = k((iT, kd) => {
  var pv = Tn(), uv = (i9, t, e) => pv(i9, t, ">", e);
  kd.exports = uv;
});
var Dd = k((nT, Ed) => {
  var fv = Tn(), gv = (i9, t, e) => fv(i9, t, "<", e);
  Ed.exports = gv;
});
var Fd = k((oT, _d) => {
  var Ad = Ge(), mv = (i9, t, e) => (i9 = new Ad(i9, e), t = new Ad(t, e), i9.intersects(t, e));
  _d.exports = mv;
});
var Md = k((sT, Ld) => {
  var hv = Ti(), vv = ze();
  Ld.exports = (i9, t, e) => {
    let r = [], n = null, o = null, s = i9.sort((d, p) => vv(d, p, e));
    for (let d of s) hv(d, t, e) ? (o = d, n || (n = d)) : (o && r.push([n, o]), o = null, n = null);
    n && r.push([n, null]);
    let a = [];
    for (let [d, p] of r) d === p ? a.push(d) : !p && d === s[0] ? a.push("*") : p ? d === s[0] ? a.push(`<=${p}`) : a.push(`${d} - ${p}`) : a.push(`>=${d}`);
    let c = a.join(" || "), l = typeof t.raw == "string" ? t.raw : String(t);
    return c.length < l.length ? c : t;
  };
});
var Ud = k((aT, jd) => {
  var Od = Ge(), Us = bi(), { ANY: js } = Us, Pi = Ti(), Ws = ze(), yv = (i9, t, e = {}) => {
    if (i9 === t) return true;
    i9 = new Od(i9, e), t = new Od(t, e);
    let r = false;
    e: for (let n of i9.set) {
      for (let o of t.set) {
        let s = bv(n, o, e);
        if (r = r || s !== null, s) continue e;
      }
      if (r) return false;
    }
    return true;
  }, Sv = [new Us(">=0.0.0-0")], Nd = [new Us(">=0.0.0")], bv = (i9, t, e) => {
    if (i9 === t) return true;
    if (i9.length === 1 && i9[0].semver === js) {
      if (t.length === 1 && t[0].semver === js) return true;
      e.includePrerelease ? i9 = Sv : i9 = Nd;
    }
    if (t.length === 1 && t[0].semver === js) {
      if (e.includePrerelease) return true;
      t = Nd;
    }
    let r = /* @__PURE__ */ new Set(), n, o;
    for (let f of i9) f.operator === ">" || f.operator === ">=" ? n = qd(n, f, e) : f.operator === "<" || f.operator === "<=" ? o = Vd(o, f, e) : r.add(f.semver);
    if (r.size > 1) return null;
    let s;
    if (n && o) {
      if (s = Ws(n.semver, o.semver, e), s > 0) return null;
      if (s === 0 && (n.operator !== ">=" || o.operator !== "<=")) return null;
    }
    for (let f of r) {
      if (n && !Pi(f, String(n), e) || o && !Pi(f, String(o), e)) return null;
      for (let S of t) if (!Pi(f, String(S), e)) return false;
      return true;
    }
    let a, c, l, d, p = o && !e.includePrerelease && o.semver.prerelease.length ? o.semver : false, u = n && !e.includePrerelease && n.semver.prerelease.length ? n.semver : false;
    p && p.prerelease.length === 1 && o.operator === "<" && p.prerelease[0] === 0 && (p = false);
    for (let f of t) {
      if (d = d || f.operator === ">" || f.operator === ">=", l = l || f.operator === "<" || f.operator === "<=", n) {
        if (u && f.semver.prerelease && f.semver.prerelease.length && f.semver.major === u.major && f.semver.minor === u.minor && f.semver.patch === u.patch && (u = false), f.operator === ">" || f.operator === ">=") {
          if (a = qd(n, f, e), a === f && a !== n) return false;
        } else if (n.operator === ">=" && !Pi(n.semver, String(f), e)) return false;
      }
      if (o) {
        if (p && f.semver.prerelease && f.semver.prerelease.length && f.semver.major === p.major && f.semver.minor === p.minor && f.semver.patch === p.patch && (p = false), f.operator === "<" || f.operator === "<=") {
          if (c = Vd(o, f, e), c === f && c !== o) return false;
        } else if (o.operator === "<=" && !Pi(o.semver, String(f), e)) return false;
      }
      if (!f.operator && (o || n) && s !== 0) return false;
    }
    return !(n && l && !o && s !== 0 || o && d && !n && s !== 0 || u || p);
  }, qd = (i9, t, e) => {
    if (!i9) return t;
    let r = Ws(i9.semver, t.semver, e);
    return r > 0 ? i9 : r < 0 || t.operator === ">" && i9.operator === ">=" ? t : i9;
  }, Vd = (i9, t, e) => {
    if (!i9) return t;
    let r = Ws(i9.semver, t.semver, e);
    return r < 0 ? i9 : r > 0 || t.operator === "<" && i9.operator === "<=" ? t : i9;
  };
  jd.exports = yv;
});
var Bd = k((cT, $d) => {
  var Ks = Fr(), Wd = mi(), Cv = Re(), Kd = ws(), Tv = lr(), Pv = cl(), xv = dl(), wv = fl(), Rv = hl(), kv = yl(), Iv = bl(), Ev = Tl(), Dv = xl(), Av = ze(), _v = Il(), Fv = Dl(), Lv = mn(), Mv = Ll(), Ov = Ol(), Nv = vi(), qv = hn(), Vv = ks(), jv = Is(), Uv = vn(), Wv = yn(), Kv = Es(), $v = Bl(), Bv = bi(), Hv = Ge(), zv = Ti(), Gv = fd(), Jv = md(), Xv = vd(), Qv = bd(), Yv = Td(), Zv = Tn(), ey = Id(), ty = Dd(), ry = Fd(), iy = Md(), ny = Ud();
  $d.exports = { parse: Tv, valid: Pv, clean: xv, inc: wv, diff: Rv, major: kv, minor: Iv, patch: Ev, prerelease: Dv, compare: Av, rcompare: _v, compareLoose: Fv, compareBuild: Lv, sort: Mv, rsort: Ov, gt: Nv, lt: qv, eq: Vv, neq: jv, gte: Uv, lte: Wv, cmp: Kv, coerce: $v, Comparator: Bv, Range: Hv, satisfies: zv, toComparators: Gv, maxSatisfying: Jv, minSatisfying: Xv, minVersion: Qv, validRange: Yv, outside: Zv, gtr: ey, ltr: ty, intersects: ry, simplifyRange: iy, subset: ny, SemVer: Cv, re: Ks.re, src: Ks.src, tokens: Ks.t, SEMVER_SPEC_VERSION: Wd.SEMVER_SPEC_VERSION, RELEASE_TYPES: Wd.RELEASE_TYPES, compareIdentifiers: Kd.compareIdentifiers, rcompareIdentifiers: Kd.rcompareIdentifiers };
});
var Nr, Hd, P, pe = y(() => {
  "use strict";
  Nr = m(Bd()), Hd = m(require("vscode")), P = class i9 {
    constructor(t, e, r) {
      this.displayName = t;
      this.version = e;
      this.fullVersionString = r;
    }
    static fromSimpleString(t) {
      return new i9(t, t, t);
    }
    static {
      this.defaultVersion = i9.fromSimpleString("1.0.0");
    }
    static {
      this.v380 = i9.fromSimpleString("3.8.0");
    }
    static {
      this.v390 = i9.fromSimpleString("3.9.0");
    }
    static {
      this.v400 = i9.fromSimpleString("4.0.0");
    }
    static {
      this.v401 = i9.fromSimpleString("4.0.1");
    }
    static {
      this.v420 = i9.fromSimpleString("4.2.0");
    }
    static {
      this.v430 = i9.fromSimpleString("4.3.0");
    }
    static {
      this.v440 = i9.fromSimpleString("4.4.0");
    }
    static {
      this.v460 = i9.fromSimpleString("4.6.0");
    }
    static {
      this.v470 = i9.fromSimpleString("4.7.0");
    }
    static {
      this.v490 = i9.fromSimpleString("4.9.0");
    }
    static {
      this.v500 = i9.fromSimpleString("5.0.0");
    }
    static {
      this.v510 = i9.fromSimpleString("5.1.0");
    }
    static {
      this.v520 = i9.fromSimpleString("5.2.0");
    }
    static {
      this.v544 = i9.fromSimpleString("5.4.4");
    }
    static {
      this.v540 = i9.fromSimpleString("5.4.0");
    }
    static {
      this.v560 = i9.fromSimpleString("5.6.0");
    }
    static {
      this.v570 = i9.fromSimpleString("5.7.0");
    }
    static {
      this.v590 = i9.fromSimpleString("5.9.0");
    }
    static fromVersionString(t) {
      let e = Nr.valid(t);
      if (!e) return new i9(Hd.l10n.t("invalid version"), "1.0.0", "1.0.0");
      let r = t.indexOf("-");
      return r >= 0 && (e = e.substr(0, r)), new i9(t, e, t);
    }
    eq(t) {
      return Nr.eq(this.version, t.version);
    }
    gte(t) {
      return Nr.gte(this.version, t.version);
    }
    lt(t) {
      return !this.gte(t);
    }
    isYarnPnp() {
      return this.fullVersionString.includes("-sdk");
    }
  };
});
var zd, oy, le, Et = y(() => {
  "use strict";
  zd = m(require("vscode")), oy = zd.Disposable.from(), le = { isCancellationRequested: false, onCancellationRequested: () => oy };
});
function fr(i9) {
  return i9.startsWith("/dev/null/");
}
function $s(i9, t, e) {
  let r = { module: i9.gte(P.v540) ? "Preserve" : "ESNext", moduleResolution: i9.gte(P.v540) ? "Bundler" : "Node", target: "ES2022", jsx: "react-jsx" };
  return i9.gte(P.v500) && (r.allowImportingTsExtensions = true), e.implicitProjectConfiguration.checkJs !== void 0 && (r.checkJs = e.implicitProjectConfiguration.checkJs), e.implicitProjectConfiguration.checkJs && t === 0 && (r.allowJs = true), r.experimentalDecorators = e.implicitProjectConfiguration.experimentalDecorators, r.strictNullChecks = e.implicitProjectConfiguration.strictNullChecks, r.strictFunctionTypes = e.implicitProjectConfiguration.strictFunctionTypes, r.strict = e.implicitProjectConfiguration.strict, e.implicitProjectConfiguration.module && (r.module = e.implicitProjectConfiguration.module), e.implicitProjectConfiguration.target && (r.target = e.implicitProjectConfiguration.target), t === 0 && (r.sourceMap = true), r;
}
function sy(i9, t, e) {
  let r = $s(i9, t, e);
  t === 0 && delete r.allowImportingTsExtensions;
  let n = Object.keys(r).map((o) => `"${o}": ${JSON.stringify(r[o])}`);
  return new Z.SnippetString(`{
	"compilerOptions": {
		${n.join(`,
		`)}$0
	},
	"exclude": [
		"node_modules",
		"**/node_modules/*"
	]
}`);
}
async function xi(i9, t, e, r) {
  let n = Z.Uri.joinPath(e, t === 0 ? "tsconfig.json" : "jsconfig.json"), o = Z.window.activeTextEditor?.viewColumn;
  try {
    let s = await Z.workspace.openTextDocument(n);
    return Z.window.showTextDocument(s, o);
  } catch {
    let s = await Z.workspace.openTextDocument(n.with({ scheme: "untitled" })), a = await Z.window.showTextDocument(s, o);
    return a.document.getText().length === 0 && await a.insertSnippet(sy(i9, t, r)), a;
  }
}
async function Bs(i9, t, e, r) {
  if (!fr(r)) {
    let s = await Z.workspace.openTextDocument(t.toResource(r));
    Z.window.showTextDocument(s, Z.window.activeTextEditor?.viewColumn);
    return;
  }
  let n = { title: i9 === 0 ? Z.l10n.t("Configure tsconfig.json") : Z.l10n.t("Configure jsconfig.json") };
  switch (await Z.window.showInformationMessage(i9 === 0 ? Z.l10n.t("File is not part of a TypeScript project. View the [tsconfig.json documentation]({0}) to learn more.", "https://go.microsoft.com/fwlink/?linkid=841896") : Z.l10n.t("File is not part of a JavaScript project. View the [jsconfig.json documentation]({0}) to learn more.", "https://go.microsoft.com/fwlink/?linkid=759670"), n)) {
    case n:
      xi(t.apiVersion, i9, e, t.configuration);
      return;
  }
}
async function wi(i9, t, e) {
  let r = t.getWorkspaceRootForResource(e);
  if (!r) {
    Z.window.showInformationMessage(Z.l10n.t("Please open a folder in VS Code to use a TypeScript or JavaScript project"));
    return;
  }
  let n = t.toTsFilePath(e);
  if (!n || !t.toTsFilePath(e)) {
    Z.window.showWarningMessage(Z.l10n.t("Could not determine TypeScript or JavaScript project. Unsupported file type"));
    return;
  }
  let o;
  try {
    o = await t.execute("projectInfo", { file: n, needFileNameList: false }, le);
  } catch {
  }
  if (o?.type !== "response" || !o.body) {
    Z.window.showWarningMessage(Z.l10n.t("Could not determine TypeScript or JavaScript project"));
    return;
  }
  return Bs(i9, t, r, o.body.configFileName);
}
var Z, qr = y(() => {
  "use strict";
  Z = m(require("vscode"));
  pe();
  Et();
});
function pt(i9) {
  return zs.languages.match([gr, Dt, Kt, $t], i9) > 0;
}
function mr(i9) {
  return zs.languages.match([gr, Dt], i9) > 0;
}
var zs, gr, Dt, Kt, $t, wn, Je = y(() => {
  "use strict";
  zs = m(require("vscode")), gr = "typescript", Dt = "typescriptreact", Kt = "javascript", $t = "javascriptreact", wn = [Kt, $t, gr, Dt];
});
var hr, Vr, Js = y(() => {
  "use strict";
  hr = m(require("vscode"));
  Je();
  Vr = class i9 {
    constructor() {
      this.id = i9.id;
    }
    static {
      this.id = "_typescript.learnMoreAboutRefactorings";
    }
    execute() {
      let t = hr.window.activeTextEditor && mr(hr.window.activeTextEditor.document) ? "https://go.microsoft.com/fwlink/?linkid=2114477" : "https://go.microsoft.com/fwlink/?linkid=2116761";
      hr.env.openExternal(hr.Uri.parse(t));
    }
  };
});
var Ht, Bt, Xs = y(() => {
  "use strict";
  Ht = m(require("vscode")), Bt = class i9 {
    constructor() {
      this.id = i9.id;
    }
    static {
      this.id = "_typescript.openJsDocLink";
    }
    async execute(t) {
      let { line: e, character: r } = t.position, n = new Ht.Position(e, r);
      await Ht.commands.executeCommand("vscode.open", Ht.Uri.from(t.file), { selection: new Ht.Range(n, n) });
    }
  };
});
function At(i9, t, e = (r, n) => r === n) {
  return i9 === t ? true : i9.length !== t.length ? false : i9.every((r, n) => e(r, t[n]));
}
function me(i9) {
  return i9.filter((t) => !!t);
}
var Ri, Xe = y(() => {
  "use strict";
  Ri = Object.freeze([]);
});
function rt(i9, t) {
  if (i9 === t) return true;
  if (i9 == null || t === null || t === void 0 || typeof i9 != typeof t || typeof i9 != "object" || Array.isArray(i9) !== Array.isArray(t)) return false;
  if (Array.isArray(i9)) return At(i9, t, rt);
  {
    let e = [];
    for (let n in i9) e.push(n);
    e.sort();
    let r = [];
    for (let n in t) r.push(n);
    return r.sort(), At(e, r) ? e.every((n) => rt(i9[n], t[n])) : false;
  }
}
var ki = y(() => {
  "use strict";
  Xe();
});
function ip(i9) {
  return /^tsconfig\.(.+\.)?json$/i.test((0, ta.basename)(i9));
}
function Ur(i9) {
  return /^[jt]sconfig\.(.+\.)?json$/i.test((0, ta.basename)(i9));
}
function Wr(i9) {
  return /\.(tsx?|mts|cts)$/i.test(i9.fsPath);
}
function np(i9) {
  return /\.(jsx?|mjs|cjs)$/i.test(i9.fsPath);
}
var ta, ra, Jt = y(() => {
  "use strict";
  ta = require("path");
  Je();
  ra = [{ id: "typescript", diagnosticOwner: "typescript", diagnosticSource: "ts", diagnosticLanguage: 1, languageIds: [gr, Dt], configFilePattern: /^tsconfig(\..*)?\.json$/i, standardFileExtensions: ["ts", "tsx", "cts", "mts"] }, { id: "javascript", diagnosticOwner: "typescript", diagnosticSource: "ts", diagnosticLanguage: 0, languageIds: [Kt, $t], configFilePattern: /^jsconfig(\..*)?\.json$/i, standardFileExtensions: ["js", "jsx", "cjs", "mjs", "es6", "pac"] }];
});
function ke() {
  return !(typeof process == "object" && process.versions.node) && Nn.env.uiKind === Nn.UIKind.Web;
}
function Xt() {
  return ke() && !!globalThis.crossOriginIsolated;
}
function op() {
  return ke() && typeof ReadableByteStreamController < "u";
}
var Nn, Kr = y(() => {
  "use strict";
  Nn = m(require("vscode"));
});
function qn() {
  let i9 = [py, na, oa, $r];
  return ke() ? [...(sp.workspace.workspaceFolders ?? []).map((t) => t.uri.scheme), ...i9] : [it, ...i9];
}
function Ii(i9, ...t) {
  let e = i9.scheme.toLowerCase();
  return t.some((r) => e === r);
}
var sp, it, py, ia, uy, fy, gy, my, na, oa, ap, $r, yr, nt = y(() => {
  "use strict";
  sp = m(require("vscode"));
  Kr();
  it = "file", py = "untitled", ia = "git", uy = "github", fy = "azurerepos", gy = "chat-editing-text-model", my = "vsls", na = "walkThroughSnippet", oa = "vscode-notebook-cell", ap = "office-script", $r = "vscode-chat-code-block";
  yr = /* @__PURE__ */ new Set([ia, my, uy, fy, gy]);
});
async function Sr(i9) {
  try {
    return !!((await Vn.workspace.fs.stat(i9)).type & Vn.FileType.File);
  } catch {
    return false;
  }
}
function jn(i9) {
  return /^[a-zA-Z]:[\/\\]/.test(i9);
}
var Vn, Un = y(() => {
  "use strict";
  Vn = m(require("vscode"));
});
var Me, Wn = y(() => {
  "use strict";
  nt();
  Un();
  Me = class i9 {
    constructor(t = i9.defaultPathNormalizer, e) {
      this._normalizePath = t;
      this.config = e;
      this._map = /* @__PURE__ */ new Map();
    }
    static {
      this.defaultPathNormalizer = (t) => t.scheme === it ? t.fsPath : t.toString(true);
    }
    get size() {
      return this._map.size;
    }
    has(t) {
      let e = this.toKey(t);
      return !!e && this._map.has(e);
    }
    get(t) {
      let e = this.toKey(t);
      if (!e) return;
      let r = this._map.get(e);
      return r ? r.value : void 0;
    }
    set(t, e) {
      let r = this.toKey(t);
      if (!r) return;
      let n = this._map.get(r);
      n ? n.value = e : this._map.set(r, { resource: t, value: e });
    }
    delete(t) {
      let e = this.toKey(t);
      e && this._map.delete(e);
    }
    clear() {
      this._map.clear();
    }
    values() {
      return Array.from(this._map.values(), (t) => t.value);
    }
    entries() {
      return this._map.values();
    }
    toKey(t) {
      let e = this._normalizePath(t);
      return e && (this.isCaseInsensitivePath(e) ? e.toLowerCase() : e);
    }
    isCaseInsensitivePath(t) {
      return jn(t) ? true : t[0] === "/" && this.config.onCaseInsensitiveFileSystem;
    }
  };
});
function hy(i9, t) {
  return rt(i9, t);
}
function cp(i9, t) {
  return i9 === t ? void 0 : i9;
}
function sa(i9, t) {
  return { includeInlayParameterNameHints: vy(i9, t), includeInlayParameterNameHintsWhenArgumentMatchesName: !h(ft.parameterNamesSuppressWhenArgumentMatchesName, true, { scope: i9, fallbackSection: t }), includeInlayFunctionParameterTypeHints: h(ft.parameterTypesEnabled, false, { scope: i9, fallbackSection: t }), includeInlayVariableTypeHints: h(ft.variableTypesEnabled, false, { scope: i9, fallbackSection: t }), includeInlayVariableTypeHintsWhenTypeMatchesName: !h(ft.variableTypesSuppressWhenTypeMatchesName, true, { scope: i9, fallbackSection: t }), includeInlayPropertyDeclarationTypeHints: h(ft.propertyDeclarationTypesEnabled, false, { scope: i9, fallbackSection: t }), includeInlayFunctionLikeReturnTypeHints: h(ft.functionLikeReturnTypesEnabled, false, { scope: i9, fallbackSection: t }), includeInlayEnumMemberValueHints: h(ft.enumMemberValuesEnabled, false, { scope: i9, fallbackSection: t }) };
}
function vy(i9, t) {
  switch (h(ft.parameterNamesEnabled, "none", { scope: i9, fallbackSection: t })) {
    case "none":
      return "none";
    case "literals":
      return "literals";
    case "all":
      return "all";
    default:
      return;
  }
}
function yy(i9, t) {
  switch (h("preferences.quoteStyle", "auto", { scope: i9, fallbackSection: t })) {
    case "single":
      return "single";
    case "double":
      return "double";
    default:
      return "auto";
  }
}
function Sy(i9, t) {
  switch (h("preferences.importModuleSpecifier", "shortest", { scope: i9, fallbackSection: t })) {
    case "project-relative":
      return "project-relative";
    case "relative":
      return "relative";
    case "non-relative":
      return "non-relative";
    default:
      return;
  }
}
function by(i9, t) {
  switch (h("preferences.importModuleSpecifierEnding", "auto", { scope: i9, fallbackSection: t })) {
    case "minimal":
      return "minimal";
    case "index":
      return "index";
    case "js":
      return "js";
    default:
      return "auto";
  }
}
function Cy(i9, t) {
  switch (h("preferences.jsxAttributeCompletionStyle", "auto", { scope: i9, fallbackSection: t })) {
    case "braces":
      return "braces";
    case "none":
      return "none";
    default:
      return "auto";
  }
}
function Ty(i9, t) {
  let e = h("preferences.organizeImports.unicodeCollation", "ordinal", { scope: i9, fallbackSection: t }), r = h("preferences.organizeImports.caseSensitivity", "auto", { scope: i9, fallbackSection: t });
  return { organizeImportsTypeOrder: cp(h("preferences.organizeImports.typeOrder", "auto", { scope: i9, fallbackSection: t }), "auto"), organizeImportsIgnoreCase: r === "caseInsensitive" ? true : r === "caseSensitive" ? false : "auto", organizeImportsCollation: e, ...e === "unicode" ? { organizeImportsCaseFirst: r === "caseInsensitive" ? void 0 : cp(h("preferences.organizeImports.caseFirst", false, { scope: i9, fallbackSection: t }), "default"), organizeImportsAccentCollation: h("preferences.organizeImports.accentCollation", void 0, { scope: i9, fallbackSection: t }), organizeImportsLocale: h("preferences.organizeImports.locale", void 0, { scope: i9, fallbackSection: t }), organizeImportsNumericCollation: h("preferences.organizeImports.numericCollation", void 0, { scope: i9, fallbackSection: t }) } : {} };
}
var Br, Ft, Ei, ft, aa = y(() => {
  "use strict";
  Br = m(require("path")), Ft = m(require("vscode"));
  nt();
  Je();
  pe();
  ne();
  Y();
  ki();
  Wn();
  Ei = class extends T {
    constructor(e, r) {
      super();
      this.client = e;
      this.formatOptions = new Me(void 0, { onCaseInsensitiveFileSystem: r }), Ft.workspace.onDidCloseTextDocument((n) => {
        this.formatOptions.delete(n.uri);
      }, void 0, this._disposables);
    }
    async ensureConfigurationForDocument(e, r) {
      let n = this.getFormattingOptions(e) ?? { tabSize: void 0, insertSpaces: void 0 };
      return this.ensureConfigurationOptions(e, n, r);
    }
    getFormattingOptions(e) {
      let r = Ft.window.visibleTextEditors.find((n) => n.document.uri.toString() === e.uri.toString());
      if (r) return { tabSize: typeof r.options.tabSize == "number" ? r.options.tabSize : void 0, insertSpaces: typeof r.options.insertSpaces == "boolean" ? r.options.insertSpaces : void 0 };
    }
    async ensureConfigurationOptions(e, r, n) {
      let o = this.client.toOpenTsFilePath(e);
      if (!o) return;
      let s = this.getFileOptions(e, r), a = this.formatOptions.get(e.uri);
      if (a) {
        let l = await a;
        if (n.isCancellationRequested || l && hy(l, s)) return;
      }
      let c = (async () => {
        try {
          return (await this.client.execute("configure", { file: o, ...s }, n)).type === "response" ? s : void 0;
        } catch {
          return;
        }
      })();
      this.formatOptions.set(e.uri, c), await c;
    }
    async setGlobalConfigurationFromDocument(e, r) {
      let n = this.getFormattingOptions(e);
      if (!n) return;
      let o = { file: void 0, ...this.getFileOptions(e, n) };
      await this.client.execute("configure", o, r);
    }
    reset() {
      this.formatOptions.clear();
    }
    getFileOptions(e, r) {
      return { formatOptions: this.getFormatOptions(e, r), preferences: this.getPreferences(e) };
    }
    getFormatOptions(e, r) {
      let n = mr(e) ? "typescript" : "javascript";
      return { tabSize: r.tabSize, indentSize: r.tabSize, convertTabsToSpaces: r.insertSpaces, newLineCharacter: `
`, insertSpaceAfterCommaDelimiter: h("format.insertSpaceAfterCommaDelimiter", true, { scope: e, fallbackSection: n }), insertSpaceAfterConstructor: h("format.insertSpaceAfterConstructor", false, { scope: e, fallbackSection: n }), insertSpaceAfterSemicolonInForStatements: h("format.insertSpaceAfterSemicolonInForStatements", true, { scope: e, fallbackSection: n }), insertSpaceBeforeAndAfterBinaryOperators: h("format.insertSpaceBeforeAndAfterBinaryOperators", true, { scope: e, fallbackSection: n }), insertSpaceAfterKeywordsInControlFlowStatements: h("format.insertSpaceAfterKeywordsInControlFlowStatements", true, { scope: e, fallbackSection: n }), insertSpaceAfterFunctionKeywordForAnonymousFunctions: h("format.insertSpaceAfterFunctionKeywordForAnonymousFunctions", true, { scope: e, fallbackSection: n }), insertSpaceBeforeFunctionParenthesis: h("format.insertSpaceBeforeFunctionParenthesis", false, { scope: e, fallbackSection: n }), insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: h("format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis", false, { scope: e, fallbackSection: n }), insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: h("format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets", false, { scope: e, fallbackSection: n }), insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: h("format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces", true, { scope: e, fallbackSection: n }), insertSpaceAfterOpeningAndBeforeClosingEmptyBraces: h("format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces", true, { scope: e, fallbackSection: n }), insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: h("format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces", false, { scope: e, fallbackSection: n }), insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: h("format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces", false, { scope: e, fallbackSection: n }), insertSpaceAfterTypeAssertion: h("format.insertSpaceAfterTypeAssertion", false, { scope: e, fallbackSection: n }), placeOpenBraceOnNewLineForFunctions: h("format.placeOpenBraceOnNewLineForFunctions", false, { scope: e, fallbackSection: n }), placeOpenBraceOnNewLineForControlBlocks: h("format.placeOpenBraceOnNewLineForControlBlocks", false, { scope: e, fallbackSection: n }), semicolons: h("format.semicolons", "ignore", { scope: e, fallbackSection: n }), indentSwitchCase: h("format.indentSwitchCase", true, { scope: e, fallbackSection: n }) };
    }
    getPreferences(e) {
      let r = mr(e) ? "typescript" : "javascript";
      return { ...Ft.workspace.getConfiguration(r, e).get("unstable"), quotePreference: yy(e, r), importModuleSpecifierPreference: Sy(e, r), importModuleSpecifierEnding: by(e, r), jsxAttributeCompletionStyle: Cy(e, r), allowTextChangesInNewFiles: e.uri.scheme === it, providePrefixAndSuffixTextForRename: h("preferences.useAliasesForRenames", true, { scope: e, fallbackSection: r }), allowRenameOfImportPath: true, includeAutomaticOptionalChainCompletions: h("suggest.includeAutomaticOptionalChainCompletions", true, { scope: e, fallbackSection: r }), provideRefactorNotApplicableReason: true, generateReturnInDocTemplate: h("suggest.jsdoc.generateReturns", true, { scope: e, fallbackSection: r }), includeCompletionsForImportStatements: h("suggest.includeCompletionsForImportStatements", true, { scope: e, fallbackSection: r }), includeCompletionsWithSnippetText: true, includeCompletionsWithClassMemberSnippets: h("suggest.classMemberSnippets.enabled", true, { scope: e, fallbackSection: r }), includeCompletionsWithObjectLiteralMethodSnippets: h("suggest.objectLiteralMethodSnippets.enabled", true, { scope: e, fallbackSection: r }), autoImportFileExcludePatterns: this.getAutoImportFileExcludePatternsPreference(e, r, Ft.workspace.getWorkspaceFolder(e.uri)?.uri), autoImportSpecifierExcludeRegexes: h("preferences.autoImportSpecifierExcludeRegexes", void 0, { scope: e, fallbackSection: r }), preferTypeOnlyAutoImports: h("preferences.preferTypeOnlyAutoImports", false, { scope: e, fallbackSection: r }), useLabelDetailsInCompletionEntries: true, allowIncompleteCompletions: true, displayPartsForJSDoc: true, disableLineTextInReferences: true, interactiveInlayHints: true, includeCompletionsForModuleExports: h("suggest.autoImports", true, { scope: e, fallbackSection: r }), ...sa(e, r), ...Ty(e, r), maximumHoverLength: this.getMaximumHoverLength(e) };
    }
    getAutoImportFileExcludePatternsPreference(e, r, n) {
      let o = h("preferences.autoImportFileExcludePatterns", void 0, { scope: e, fallbackSection: r });
      return n && o?.map((s) => {
        let a = /^\.\.?($|[\/\\])/.test(s), c = this.client.apiVersion.gte(P.v540) ? "" : Br.parse(this.client.toTsFilePath(n)).root;
        return Br.isAbsolute(s) ? s : s.startsWith("*") ? c + s : a ? this.client.toTsFilePath(Ft.Uri.joinPath(n, s)) : c + "**" + Br.sep + s;
      });
    }
    getMaximumHoverLength(e) {
      let n = Ft.workspace.getConfiguration("js/ts", e).get("hover.maximumLength", 500);
      return !Number.isSafeInteger(n) || n <= 0 ? 500 : n;
    }
  };
  ft = Object.freeze({ parameterNamesEnabled: "inlayHints.parameterNames.enabled", parameterNamesSuppressWhenArgumentMatchesName: "inlayHints.parameterNames.suppressWhenArgumentMatchesName", parameterTypesEnabled: "inlayHints.parameterTypes.enabled", variableTypesEnabled: "inlayHints.variableTypes.enabled", variableTypesSuppressWhenTypeMatchesName: "inlayHints.variableTypes.suppressWhenTypeMatchesName", propertyDeclarationTypesEnabled: "inlayHints.propertyDeclarationTypes.enabled", functionLikeReturnTypesEnabled: "inlayHints.functionLikeReturnTypes.enabled", enumMemberValuesEnabled: "inlayHints.enumMemberValues.enabled" });
});
var Hr, Kn = y(() => {
  "use strict";
  Hr = Object.freeze({ file: "file", untitled: "untitled", mailto: "mailto", vscode: "vscode", "vscode-insiders": "vscode-insiders", notebookCell: "vscode-notebook-cell" });
});
var gt, Qt, X = y(() => {
  "use strict";
  ((r) => {
    class i9 {
      constructor(o) {
        this.reason = o;
        this.type = "cancelled";
      }
    }
    r.Cancelled = i9, r.NoContent = { type: "noContent" }, r.NoServer = { type: "noServer" };
  })(gt ||= {});
  Qt = class {
    constructor(...t) {
      this.capabilities = new Set(t);
    }
    has(t) {
      return this.capabilities.has(t);
    }
  };
});
function Lt(i9) {
  return new Set(i9.split(/,|\s+/g));
}
var Di = y(() => {
  "use strict";
});
var g, Cr, je, Mt, Oe = y(() => {
  "use strict";
  g = class {
    static {
      this.alias = "alias";
    }
    static {
      this.callSignature = "call";
    }
    static {
      this.class = "class";
    }
    static {
      this.const = "const";
    }
    static {
      this.constructorImplementation = "constructor";
    }
    static {
      this.constructSignature = "construct";
    }
    static {
      this.directory = "directory";
    }
    static {
      this.enum = "enum";
    }
    static {
      this.enumMember = "enum member";
    }
    static {
      this.externalModuleName = "external module name";
    }
    static {
      this.function = "function";
    }
    static {
      this.indexSignature = "index";
    }
    static {
      this.interface = "interface";
    }
    static {
      this.keyword = "keyword";
    }
    static {
      this.let = "let";
    }
    static {
      this.localFunction = "local function";
    }
    static {
      this.localVariable = "local var";
    }
    static {
      this.method = "method";
    }
    static {
      this.memberGetAccessor = "getter";
    }
    static {
      this.memberSetAccessor = "setter";
    }
    static {
      this.memberVariable = "property";
    }
    static {
      this.module = "module";
    }
    static {
      this.primitiveType = "primitive type";
    }
    static {
      this.script = "script";
    }
    static {
      this.type = "type";
    }
    static {
      this.variable = "var";
    }
    static {
      this.warning = "warning";
    }
    static {
      this.string = "string";
    }
    static {
      this.parameter = "parameter";
    }
    static {
      this.typeParameter = "type parameter";
    }
  }, Cr = class {
    static {
      this.error = "error";
    }
    static {
      this.warning = "warning";
    }
    static {
      this.suggestion = "suggestion";
    }
  }, je = class i9 {
    static {
      this.optional = "optional";
    }
    static {
      this.deprecated = "deprecated";
    }
    static {
      this.color = "color";
    }
    static {
      this.dtsFile = ".d.ts";
    }
    static {
      this.tsFile = ".ts";
    }
    static {
      this.tsxFile = ".tsx";
    }
    static {
      this.jsFile = ".js";
    }
    static {
      this.jsxFile = ".jsx";
    }
    static {
      this.jsonFile = ".json";
    }
    static {
      this.fileExtensionKindModifiers = [i9.dtsFile, i9.tsFile, i9.tsxFile, i9.jsFile, i9.jsxFile, i9.jsonFile];
    }
  }, Mt = class {
    static {
      this.functionName = "functionName";
    }
    static {
      this.methodName = "methodName";
    }
    static {
      this.parameterName = "parameterName";
    }
    static {
      this.propertyName = "propertyName";
    }
    static {
      this.punctuation = "punctuation";
    }
    static {
      this.text = "text";
    }
  };
});
var q, R, I, be, Yt, Te, pa, ua, fa, W = y(() => {
  "use strict";
  q = m(require("vscode"));
  Oe();
  ((a) => (a.fromTextSpan = (c) => (0, a.fromLocations)(c.start, c.end), a.toTextSpan = (c) => ({ start: I.toLocation(c.start), end: I.toLocation(c.end) }), a.fromLocations = (c, l) => new q.Range(Math.max(0, c.line - 1), Math.max(c.offset - 1, 0), Math.max(0, l.line - 1), Math.max(0, l.offset - 1)), a.toFileRange = (c) => ({ startLine: c.start.line + 1, startOffset: c.start.character + 1, endLine: c.end.line + 1, endOffset: c.end.character + 1 }), a.toFileRangeRequestArgs = (c, l) => ({ file: c, ...(0, a.toFileRange)(l) }), a.toFileRangesRequestArgs = (c, l) => ({ file: c, ranges: l.map(a.toFileRange) }), a.toFormattingRequestArgs = (c, l) => ({ file: c, line: l.start.line + 1, offset: l.start.character + 1, endLine: l.end.line + 1, endOffset: l.end.character + 1 })))(R ||= {});
  ((r) => (r.fromLocation = (n) => new q.Position(n.line - 1, n.offset - 1), r.toLocation = (n) => ({ line: n.line + 1, offset: n.character + 1 }), r.toFileLocationRequestArgs = (n, o) => ({ file: n, line: o.line + 1, offset: o.character + 1 })))(I ||= {});
  ((t) => t.fromTextSpan = (e, r) => new q.Location(e, R.fromTextSpan(r)))(be ||= {});
  ((t) => t.fromCodeEdit = (e) => new q.TextEdit(R.fromTextSpan(e), e.newText))(Yt ||= {});
  ((e) => {
    function i9(r, n) {
      return t(new q.WorkspaceEdit(), r, n);
    }
    e.fromFileCodeEdits = i9;
    function t(r, n, o) {
      for (let s of o) {
        let a = n.toResource(s.fileName);
        for (let c of s.textChanges) r.replace(a, R.fromTextSpan(c), c.newText);
      }
      return r;
    }
    e.withFileCodeEdits = t;
  })(Te ||= {});
  ((t) => {
    function i9(e) {
      switch (e) {
        case g.module:
          return q.SymbolKind.Module;
        case g.class:
          return q.SymbolKind.Class;
        case g.enum:
          return q.SymbolKind.Enum;
        case g.enumMember:
          return q.SymbolKind.EnumMember;
        case g.interface:
          return q.SymbolKind.Interface;
        case g.indexSignature:
          return q.SymbolKind.Method;
        case g.callSignature:
          return q.SymbolKind.Method;
        case g.method:
          return q.SymbolKind.Method;
        case g.memberVariable:
          return q.SymbolKind.Property;
        case g.memberGetAccessor:
          return q.SymbolKind.Property;
        case g.memberSetAccessor:
          return q.SymbolKind.Property;
        case g.variable:
          return q.SymbolKind.Variable;
        case g.let:
          return q.SymbolKind.Variable;
        case g.const:
          return q.SymbolKind.Variable;
        case g.localVariable:
          return q.SymbolKind.Variable;
        case g.alias:
          return q.SymbolKind.Variable;
        case g.function:
          return q.SymbolKind.Function;
        case g.localFunction:
          return q.SymbolKind.Function;
        case g.constructSignature:
          return q.SymbolKind.Constructor;
        case g.constructorImplementation:
          return q.SymbolKind.Constructor;
        case g.typeParameter:
          return q.SymbolKind.TypeParameter;
        case g.string:
          return q.SymbolKind.String;
        default:
          return q.SymbolKind.Variable;
      }
    }
    t.fromProtocolScriptElementKind = i9;
  })(pa ||= {});
  ((t) => {
    function i9(e) {
      switch (e) {
        case q.CompletionTriggerKind.Invoke:
          return 1;
        case q.CompletionTriggerKind.TriggerCharacter:
          return 2;
        case q.CompletionTriggerKind.TriggerForIncompleteCompletions:
          return 3;
      }
    }
    t.toProtocolCompletionTriggerKind = i9;
  })(ua ||= {});
  ((t) => {
    function i9(e) {
      switch (e) {
        case "All":
          return "All";
        case "SortAndCombine":
          return "SortAndCombine";
        case "RemoveUnused":
          return "RemoveUnused";
      }
    }
    t.toProtocolOrganizeImportsMode = i9;
  })(fa ||= {});
});
function A(i9, t, e) {
  return new ga(i9, t, e);
}
function ht(i9, t) {
  return new Ot(() => i9.apiVersion.gte(t), i9.onTsServerStarted);
}
function Hn(i9, t) {
  return new Ot(() => ln(i9, { fallbackSection: t }), Zt.workspace.onDidChangeConfiguration);
}
function zr(i9, t) {
  return new Ot(() => !!h(i9, void 0, t), Zt.workspace.onDidChangeConfiguration);
}
function O(i9, ...t) {
  return new Ot(() => t.some((e) => i9.capabilities.has(e)), i9.onDidChangeCapabilities);
}
function lp(i9) {
  return new Ot(() => i9.some((t) => Zt.extensions.getExtension(t)), Zt.extensions.onDidChange);
}
var Zt, Ot, ga, oe = y(() => {
  "use strict";
  Zt = m(require("vscode"));
  ne();
  Y();
  Ot = class extends T {
    constructor(e, r) {
      super();
      this.getValue = e;
      this._onDidChange = this._register(new Zt.EventEmitter());
      this.onDidChange = this._onDidChange.event;
      this._value = this.getValue(), r(() => {
        let n = this.getValue();
        n !== this._value && (this._value = n, this._onDidChange.fire());
      });
    }
    get value() {
      return this._value;
    }
  }, ga = class {
    constructor(t, e, r) {
      this.conditions = t;
      this.doRegister = e;
      this.elseDoRegister = r;
      for (let n of t) n.onDidChange(() => this.update());
      this.update();
    }
    dispose() {
      this.state?.registration?.dispose(), this.state = void 0;
    }
    update() {
      this.conditions.every((e) => e.value) ? this.state?.enabled || (this.state?.registration?.dispose(), this.state = { enabled: true, registration: this.doRegister() }) : (this.state?.enabled || !this.state) && (this.state?.registration?.dispose(), this.state = { enabled: false, registration: this.elseDoRegister?.() });
    }
  };
});
var dp = {};
U(dp, { register: () => Ey });
function Ry(i9) {
  return i9.kind === g.script || i9.kind === g.module && i9.selectionSpan.start.line === 1 && i9.selectionSpan.start.offset === 1;
}
function Gn(i9) {
  let t = Ry(i9), e = t ? Jn.basename(i9.file) : i9.name, r = t ? Ne.workspace.asRelativePath(Jn.dirname(i9.file)) : i9.containerName ?? "", n = new Ne.CallHierarchyItem(pa.fromProtocolScriptElementKind(i9.kind), e, r, Ne.Uri.file(i9.file), R.fromTextSpan(i9.span), R.fromTextSpan(i9.selectionSpan));
  return (i9.kindModifiers ? Lt(i9.kindModifiers) : void 0)?.has(je.deprecated) && (n.tags = [Ne.SymbolTag.Deprecated]), n;
}
function ky(i9) {
  return new Ne.CallHierarchyIncomingCall(Gn(i9.from), i9.fromSpans.map(R.fromTextSpan));
}
function Iy(i9) {
  return new Ne.CallHierarchyOutgoingCall(Gn(i9.to), i9.fromSpans.map(R.fromTextSpan));
}
function Ey(i9, t) {
  return A([ht(t, zn.minVersion), O(t, 2)], () => Ne.languages.registerCallHierarchyProvider(i9.semantic, new zn(t)));
}
var Jn, Ne, zn, pp = y(() => {
  "use strict";
  Jn = m(require("path")), Ne = m(require("vscode"));
  pe();
  Di();
  Oe();
  W();
  X();
  oe();
  zn = class {
    constructor(t) {
      this.client = t;
    }
    static {
      this.minVersion = P.v380;
    }
    async prepareCallHierarchy(t, e, r) {
      let n = this.client.toOpenTsFilePath(t);
      if (!n) return;
      let o = I.toFileLocationRequestArgs(n, e), s = await this.client.execute("prepareCallHierarchy", o, r);
      if (!(s.type !== "response" || !s.body)) return Array.isArray(s.body) ? s.body.map(Gn) : Gn(s.body);
    }
    async provideCallHierarchyIncomingCalls(t, e) {
      let r = this.client.toTsFilePath(t.uri);
      if (!r) return;
      let n = I.toFileLocationRequestArgs(r, t.selectionRange.start), o = await this.client.execute("provideCallHierarchyIncomingCalls", n, e);
      if (!(o.type !== "response" || !o.body)) return o.body.map(ky);
    }
    async provideCallHierarchyOutgoingCalls(t, e) {
      let r = this.client.toTsFilePath(t.uri);
      if (!r) return;
      let n = I.toFileLocationRequestArgs(r, t.selectionRange.start), o = await this.client.execute("provideCallHierarchyOutgoingCalls", n, e);
      if (!(o.type !== "response" || !o.body)) return o.body.map(Iy);
    }
  };
});
function up(i9) {
  return i9.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
var fp = y(() => {
  "use strict";
});
function Qe(i9, t) {
  if (t.nameSpan) return R.fromTextSpan(t.nameSpan);
  let e = t.spans?.[0];
  if (!e) return;
  let r = R.fromTextSpan(e), n = i9.getText(r), s = new RegExp(`^(.*?(\\b|\\W))${up(t.text || "")}(\\b|\\W)`, "gm").exec(n), a = s ? s.index + s[1].length : 0, c = i9.offsetAt(new yt.Position(r.start.line, r.start.character)) + a;
  return new yt.Range(i9.positionAt(c), i9.positionAt(c + t.text.length));
}
var yt, ma, vt, ha = y(() => {
  "use strict";
  yt = m(require("vscode"));
  W();
  fp();
  Y();
  ma = class extends yt.CodeLens {
    constructor(e, r, n) {
      super(n);
      this.document = e;
      this.file = r;
    }
  }, vt = class extends T {
    constructor(e, r) {
      super();
      this.client = e;
      this.cachedResponse = r;
      this.changeEmitter = this._register(new yt.EventEmitter());
      this.onDidChangeCodeLenses = this.changeEmitter.event;
    }
    static {
      this.cancelledCommand = { title: "", command: "" };
    }
    static {
      this.errorCommand = { title: yt.l10n.t("Could not determine references"), command: "" };
    }
    async provideCodeLenses(e, r) {
      let n = this.client.toOpenTsFilePath(e);
      if (!n) return [];
      let o = await this.cachedResponse.execute(e, () => this.client.execute("navtree", { file: n }, r));
      if (o.type !== "response") return [];
      let s = [];
      return o.body?.childItems?.forEach((a) => this.walkNavTree(e, a, void 0, s)), s.map((a) => new ma(e.uri, n, a));
    }
    walkNavTree(e, r, n, o) {
      let s = this.extractSymbol(e, r, n);
      s && o.push(s), r.childItems?.forEach((a) => this.walkNavTree(e, a, r, o));
    }
  };
});
var gp = k((Ai) => {
  "use strict";
  Object.defineProperty(Ai, "__esModule", { value: true });
  Ai.Cancellation = void 0;
  var Dy;
  (function(i9) {
    function t(r) {
      if (r.$cancellationData !== void 0) throw new Error("Message already has a property $cancellationData");
      let n = new SharedArrayBuffer(4), o = new Int32Array(n, 0, 1);
      return o[0] = 0, r.$cancellationData = n, () => {
        Atomics.store(o, 0, 1);
      };
    }
    i9.addData = t;
    function e(r) {
      let n = r;
      if (!(n instanceof SharedArrayBuffer)) return () => false;
      let o = new Int32Array(n.$cancellationData, 0, 1);
      return () => Atomics.load(o, 0) === 1;
    }
    i9.retrieveCheck = e;
  })(Dy = Ai.Cancellation || (Ai.Cancellation = {}));
});
var Xn, mp = y(() => {
  "use strict";
  X();
  Xn = class {
    constructor() {
      this._callbacks = /* @__PURE__ */ new Map();
      this._asyncCallbacks = /* @__PURE__ */ new Map();
    }
    destroy(t) {
      let e = new gt.Cancelled(t);
      for (let r of this._callbacks.values()) r.onSuccess(e);
      this._callbacks.clear();
      for (let r of this._asyncCallbacks.values()) r.onSuccess(e);
      this._asyncCallbacks.clear();
    }
    add(t, e, r) {
      r ? this._asyncCallbacks.set(t, e) : this._callbacks.set(t, e);
    }
    fetch(t) {
      let e = this._callbacks.get(t) || this._asyncCallbacks.get(t);
      return this.delete(t), e;
    }
    peek(t) {
      return this._callbacks.get(t) ?? this._asyncCallbacks.get(t);
    }
    delete(t) {
      this._callbacks.delete(t) || this._asyncCallbacks.delete(t);
    }
  };
});
var Qn, hp = y(() => {
  "use strict";
  Qn = class {
    constructor() {
      this.queue = [];
      this.sequenceNumber = 0;
    }
    get length() {
      return this.queue.length;
    }
    enqueue(t) {
      if (t.queueingType === 1) {
        let e = this.queue.length - 1;
        for (; e >= 0 && this.queue[e].queueingType === 2; ) --e;
        this.queue.splice(e + 1, 0, t);
      } else this.queue.push(t);
    }
    dequeue() {
      return this.queue.shift();
    }
    getQueuedCommands(t = false) {
      let e = [], r = t ? this.queue.length - 1 : this.queue.length;
      if (r <= 0) return e;
      for (let n = 0; n < r; n++) {
        let o = this.queue[n];
        if (e.push(o.request.command), e.length >= 5) break;
      }
      return e;
    }
    tryDeletePendingRequest(t) {
      for (let e = 0; e < this.queue.length; e++) if (this.queue[e].request.seq === t) return this.queue.splice(e, 1), true;
      return false;
    }
    createRequest(t, e) {
      return { seq: this.sequenceNumber++, type: "request", command: t, arguments: e };
    }
  };
});
var Nt, va = y(() => {
  "use strict";
  Nt = class i9 extends Error {
    constructor(e, r, n, o, s, a) {
      super([`<${e}> TypeScript Server Error (${r.displayName})`, o, s].filter(Boolean).join(`
`));
      this.serverId = e;
      this.version = r;
      this.response = n;
      this.serverMessage = o;
      this.serverStack = s;
      this.sanitizedStack = a;
    }
    static create(e, r, n) {
      let o = i9.parseErrorText(n);
      return new i9(e, r, n, o?.message, o?.stack, o?.sanitizedStack);
    }
    get serverErrorText() {
      return this.response.message;
    }
    get serverCommand() {
      return this.response.command;
    }
    get telemetry() {
      return { command: this.serverCommand, serverid: this.serverId, sanitizedstack: this.sanitizedStack || "", badclient: /\bBADCLIENT\b/.test(this.stack || "") };
    }
    static parseErrorText(e) {
      let r = e.message;
      if (r) {
        let n = "Error processing request. ";
        if (r.startsWith(n)) {
          let o = r.substr(n.length), s = o.indexOf(`
`);
          if (s >= 0) {
            let a = o.substring(s + 1);
            return { message: o.substring(0, s), stack: a, sanitizedStack: i9.sanitizeStack(a) };
          }
        }
      }
    }
    static sanitizeStack(e) {
      if (!e) return "";
      let r = /(\btsserver)?(\.(?:ts|tsx|js|jsx)(?::\d+(?::\d+)?)?)\)?$/igm, n = "";
      for (; ; ) {
        let o = r.exec(e);
        if (!o) break;
        n += `${o[1] || "suppressed"}${o[2]}
`;
      }
      return n;
    }
  };
});
var vp, Ye, Yn, Zn, eo, to, Tr, _i = y(() => {
  "use strict";
  vp = m(gp()), Ye = m(require("vscode"));
  mp();
  hp();
  va();
  X();
  Y();
  Kr();
  Oe();
  Yn = class i9 extends T {
    constructor(e, r, n, o, s, a, c, l) {
      super();
      this._serverId = e;
      this._serverSource = r;
      this._process = n;
      this._tsServerLog = o;
      this._requestCanceller = s;
      this._version = a;
      this._telemetryReporter = c;
      this._tracer = l;
      this._requestQueue = new Qn();
      this._callbacks = new Xn();
      this._pendingResponses = /* @__PURE__ */ new Set();
      this._onEvent = this._register(new Ye.EventEmitter());
      this.onEvent = this._onEvent.event;
      this._onExit = this._register(new Ye.EventEmitter());
      this.onExit = this._onExit.event;
      this._onError = this._register(new Ye.EventEmitter());
      this.onError = this._onError.event;
      this._process.onData((d) => {
        this.dispatchMessage(d);
      }), this._process.onExit((d, p) => {
        this._onExit.fire({ code: d, signal: p }), this._callbacks.destroy("server exited");
      }), this._process.onError((d) => {
        this._onError.fire(d), this._callbacks.destroy("server errored");
      });
    }
    get tsServerLog() {
      return this._tsServerLog;
    }
    get pids() {
      let e = this._process.getPid();
      return e === void 0 ? [] : [e];
    }
    write(e) {
      this._process.write(e);
    }
    dispose() {
      super.dispose(), this._callbacks.destroy("server disposed"), this._pendingResponses.clear();
    }
    kill() {
      this._process.kill();
    }
    dispatchMessage(e) {
      try {
        switch (e.type) {
          case "response":
            this._serverSource ? this.dispatchResponse({ ...e, _serverType: this._serverSource }) : this.dispatchResponse(e);
            break;
          case "event": {
            let r = e;
            if (r.event === "requestCompleted") {
              let n = r.body.request_seq, o = this._callbacks.fetch(n);
              o && (this._tracer.traceRequestCompleted(this._serverId, "requestCompleted", n, o), o.onSuccess(void 0)), r.body.performanceData && this._onEvent.fire(r);
            } else this._tracer.traceEvent(this._serverId, r), this._onEvent.fire(r);
            break;
          }
          default:
            throw new Error(`Unknown message type ${e.type} received`);
        }
      } finally {
        this.sendNextRequests();
      }
    }
    tryCancelRequest(e, r) {
      let n = e.seq, o = this._callbacks.peek(n);
      o?.traceId !== void 0 && this._telemetryReporter.logTraceEvent("TSServer.tryCancelRequest", o.traceId, JSON.stringify({ command: r, cancelled: true }));
      try {
        return this._requestQueue.tryDeletePendingRequest(n) ? (this.logTrace(`Canceled request with sequence number ${n}`), true) : this._requestCanceller.tryCancelOngoingRequest(n) ? true : (this.logTrace(`Tried to cancel request with sequence number ${n}. But request got already delivered.`), false);
      } finally {
        this.fetchCallback(n)?.onSuccess(new gt.Cancelled(`Cancelled request ${n} - ${r}`));
      }
    }
    dispatchResponse(e) {
      let r = this.fetchCallback(e.request_seq);
      r && (r.traceId !== void 0 && this._telemetryReporter.logTraceEvent("TSServerRequest.dispatchResponse", r.traceId, JSON.stringify({ command: e.command, success: e.success, performanceData: e.performanceData })), this._tracer.traceResponse(this._serverId, e, r), e.success ? r.onSuccess(e) : e.message === "No content available." ? r.onSuccess(gt.NoContent) : r.onError(Nt.create(this._serverId, this._version, e)));
    }
    executeImpl(e, r, n) {
      let o = this._requestQueue.createRequest(e, r), s = { request: o, expectsResponse: n.expectsResult, isAsync: n.isAsync, queueingType: i9.getQueueingType(e, n.lowPriority) }, a;
      n.expectsResult && (a = new Promise((l, d) => {
        let p = typeof o.arguments?.$traceId == "string" ? { onSuccess: l, onError: d, queuingStartTime: Date.now(), isAsync: n.isAsync, command: o.command, traceId: o.arguments.$traceId } : { onSuccess: l, onError: d, queuingStartTime: Date.now(), isAsync: n.isAsync, command: o.command };
        if (this._callbacks.add(o.seq, p, n.isAsync), n.token) {
          let u = Xt() ? vp.Cancellation.addData(o) : void 0;
          n.token.onCancellationRequested(() => {
            u?.(), this.tryCancelRequest(o, e);
          });
        }
      }).catch((l) => {
        throw l instanceof Nt && (n.token?.isCancellationRequested || this._telemetryReporter.logTelemetry("languageServiceErrorResponse", l.telemetry)), l;
      })), this._requestQueue.enqueue(s);
      let c = r?.$traceId;
      if (r && typeof c == "string") {
        let l = this._requestQueue.length - 1, d = this._pendingResponses.size, p = { command: o.command, queueLength: l, pendingResponses: d };
        l > 0 && (p.queuedCommands = this._requestQueue.getQueuedCommands(true)), d > 0 && (p.pendingCommands = this.getPendingCommands()), this._telemetryReporter.logTraceEvent("TSServer.enqueueRequest", c, JSON.stringify(p));
      }
      return this.sendNextRequests(), [a];
    }
    getPendingCommands() {
      let e = [];
      for (let r of this._pendingResponses) {
        let n = this._callbacks.peek(r);
        if (typeof n?.command == "string" && (e.push(n.command), e.length >= 5)) break;
      }
      return e;
    }
    sendNextRequests() {
      for (; this._pendingResponses.size === 0 && this._requestQueue.length > 0; ) {
        let e = this._requestQueue.dequeue();
        e && this.sendRequest(e);
      }
    }
    sendRequest(e) {
      let r = e.request;
      this._tracer.traceRequest(this._serverId, r, e.expectsResponse, this._requestQueue.length), e.expectsResponse && !e.isAsync && this._pendingResponses.add(e.request.seq);
      try {
        this.write(r), typeof r.arguments?.$traceId == "string" && this._telemetryReporter.logTraceEvent("TSServer.sendRequest", r.arguments.$traceId, JSON.stringify({ command: r.command }));
      } catch (n) {
        this.fetchCallback(r.seq)?.onError(n);
      }
    }
    fetchCallback(e) {
      let r = this._callbacks.fetch(e);
      if (r) return this._pendingResponses.delete(e), r;
    }
    logTrace(e) {
      this._tracer.trace(this._serverId, e);
    }
    static {
      this.fenceCommands = /* @__PURE__ */ new Set(["change", "close", "open", "updateOpen"]);
    }
    static getQueueingType(e, r) {
      return i9.fenceCommands.has(e) ? 3 : r ? 2 : 1;
    }
  }, Zn = class i9 {
    constructor(t, e) {
      this.servers = t;
      this.delegate = e;
    }
    static {
      this.sharedCommands = /* @__PURE__ */ new Set(["change", "close", "open", "updateOpen", "configure"]);
    }
    execute(t, e, r) {
      if (i9.sharedCommands.has(t) && typeof r.executionTarget > "u") {
        let n = this.servers.map(() => Tr.Unresolved), o;
        if (r.token) {
          let a = new Ye.CancellationTokenSource();
          r.token.onCancellationRequested(() => {
            n.some((c) => c === Tr.Resolved) || a.cancel();
          }), o = a.token;
        }
        let s = [];
        for (let a = 0; a < this.servers.length; ++a) {
          let l = this.servers[a].server.executeImpl(t, e, { ...r, token: o })[0];
          s.push(l), l && l.then((d) => {
            n[a] = Tr.Resolved;
            let p = n.find((u) => u.type === Tr.Type.Errored);
            return p && this.delegate.onFatalError(t, p.err), d;
          }, (d) => {
            throw n[a] = new Tr.Errored(d), n.some((p) => p === Tr.Resolved) && this.delegate.onFatalError(t, d), d;
          });
        }
        return s;
      }
      for (let { canRun: n, server: o } of this.servers) if (!n || n(t, r)) return o.executeImpl(t, e, r);
      throw new Error(`Could not find server for command: '${t}'`);
    }
  }, eo = class i9 extends T {
    constructor(e, r) {
      super();
      this._onEvent = this._register(new Ye.EventEmitter());
      this.onEvent = this._onEvent.event;
      this._onExit = this._register(new Ye.EventEmitter());
      this.onExit = this._onExit.event;
      this._onError = this._register(new Ye.EventEmitter());
      this.onError = this._onError.event;
      this.getErrServer = e.getErr, this.mainServer = e.primary, this.router = new Zn([{ server: this.getErrServer, canRun: (n) => ["geterr", "geterrForProject"].includes(n) }, { server: this.mainServer, canRun: void 0 }], r), this._register(this.getErrServer.onEvent((n) => {
        i9.diagnosticEvents.has(n.event) && this._onEvent.fire(n);
      })), this._register(this.mainServer.onEvent((n) => {
        i9.diagnosticEvents.has(n.event) || this._onEvent.fire(n);
      })), this._register(this.getErrServer.onError((n) => this._onError.fire(n))), this._register(this.mainServer.onError((n) => this._onError.fire(n))), this._register(this.mainServer.onExit((n) => {
        this._onExit.fire(n), this.getErrServer.kill();
      }));
    }
    static {
      this.diagnosticEvents = /* @__PURE__ */ new Set(["configFileDiag", "syntaxDiag", "semanticDiag", "suggestionDiag"]);
    }
    get tsServerLog() {
      return this.mainServer.tsServerLog;
    }
    get pids() {
      return [...this.getErrServer.pids, ...this.mainServer.pids];
    }
    kill() {
      this.getErrServer.kill(), this.mainServer.kill();
    }
    executeImpl(e, r, n) {
      return this.router.execute(e, r, n);
    }
  }, to = class i9 extends T {
    constructor(e, r, n) {
      super();
      this._projectLoading = true;
      this._onEvent = this._register(new Ye.EventEmitter());
      this.onEvent = this._onEvent.event;
      this._onExit = this._register(new Ye.EventEmitter());
      this.onExit = this._onExit.event;
      this._onError = this._register(new Ye.EventEmitter());
      this.onError = this._onError.event;
      this.syntaxServer = e.syntax, this.semanticServer = e.semantic, this.router = new Zn([{ server: this.syntaxServer, canRun: (o, s) => {
        switch (s.executionTarget) {
          case 0:
            return false;
          case 1:
            return true;
        }
        return i9.syntaxAlwaysCommands.has(o) ? true : i9.semanticCommands.has(o) ? false : !!(n && this.projectLoading && i9.syntaxAllowedCommands.has(o));
      } }, { server: this.semanticServer, canRun: void 0 }], r), this._register(this.syntaxServer.onEvent((o) => this._onEvent.fire(o))), this._register(this.semanticServer.onEvent((o) => {
        switch (o.event) {
          case "projectLoadingStart":
            this._projectLoading = true;
            break;
          case "projectLoadingFinish":
          case "semanticDiag":
          case "syntaxDiag":
          case "suggestionDiag":
          case "configFileDiag":
            this._projectLoading = false;
            break;
        }
        return this._onEvent.fire(o);
      })), this._register(this.semanticServer.onExit((o) => {
        this._onExit.fire(o), this.syntaxServer.kill();
      })), this._register(this.semanticServer.onError((o) => this._onError.fire(o)));
    }
    static {
      this.syntaxAlwaysCommands = /* @__PURE__ */ new Set(["navtree", "getOutliningSpans", "jsxClosingTag", "selectionRange", "format", "formatonkey", "docCommentTemplate", "linkedEditingRange"]);
    }
    static {
      this.semanticCommands = /* @__PURE__ */ new Set(["geterr", "geterrForProject", "projectInfo", "configurePlugin"]);
    }
    static {
      this.syntaxAllowedCommands = /* @__PURE__ */ new Set(["completions", "completionEntryDetails", "completionInfo", "definition", "definitionAndBoundSpan", "documentHighlights", "implementation", "navto", "quickinfo", "references", "rename", "signatureHelp"]);
    }
    get projectLoading() {
      return this._projectLoading;
    }
    get tsServerLog() {
      return this.semanticServer.tsServerLog;
    }
    get pids() {
      return [...this.syntaxServer.pids, ...this.semanticServer.pids];
    }
    kill() {
      this.syntaxServer.kill(), this.semanticServer.kill();
    }
    executeImpl(e, r, n) {
      return this.router.execute(e, r, n);
    }
  };
  ((n) => {
    let i9;
    ((c) => (c[c.Unresolved = 0] = "Unresolved", c[c.Resolved = 1] = "Resolved", c[c.Errored = 2] = "Errored"))(i9 = n.Type ||= {}), n.Unresolved = { type: 0 }, n.Resolved = { type: 1 };
    class r {
      constructor(s) {
        this.err = s;
        this.type = 2;
      }
    }
    n.Errored = r;
  })(Tr ||= {});
});
var yp = {};
U(yp, { default: () => Fi, register: () => Fy });
function Fy(i9, t, e, r) {
  return A([Hn(ro.enabled, t.id), O(e, 2)], () => ot.languages.registerCodeLensProvider(i9.semantic, new Fi(e, r)));
}
var ot, ro, Fi, Sp = y(() => {
  "use strict";
  ot = m(require("vscode"));
  Oe();
  W();
  X();
  ne();
  oe();
  ha();
  _i();
  ro = Object.freeze({ enabled: "implementationsCodeLens.enabled", showOnInterfaceMethods: "implementationsCodeLens.showOnInterfaceMethods", showOnAllClassMethods: "implementationsCodeLens.showOnAllClassMethods" }), Fi = class extends vt {
    constructor(e, r) {
      super(e, r);
      this._cachedResponse = r;
      this._enabled = this._register(new et(ro.enabled, false)), this._register(this._enabled.onDidChange(() => this.changeEmitter.fire())), this._showOnInterfaceMethods = this._register(new et(ro.showOnInterfaceMethods, false)), this._register(this._showOnInterfaceMethods.onDidChange(() => this.changeEmitter.fire())), this._showOnAllClassMethods = this._register(new et(ro.showOnAllClassMethods, false)), this._register(this._showOnAllClassMethods.onDidChange(() => this.changeEmitter.fire()));
    }
    async provideCodeLenses(e, r) {
      return this._enabled.getValue(e) ? super.provideCodeLenses(e, r) : [];
    }
    async resolveCodeLens(e, r) {
      let n = I.toFileLocationRequestArgs(e.file, e.range.start), o = await this.client.execute("implementation", n, r, { lowPriority: true, executionTarget: 0, cancelOnResourceChange: e.document });
      if (o.type !== "response" || !o.body) return e.command = o.type === "cancelled" ? vt.cancelledCommand : vt.errorCommand, e;
      let s = o.body.map((a) => new ot.Location(this.client.toResource(a.file), a.start.line === a.end.line ? R.fromTextSpan(a) : new ot.Range(I.fromLocation(a.start), new ot.Position(a.start.line, 0)))).filter((a) => !(a.uri.toString() === e.document.toString() && a.range.start.line === e.range.start.line && a.range.start.character === e.range.start.character));
      return e.command = this.getCommand(s, e), e;
    }
    getCommand(e, r) {
      return { title: this.getTitle(e), command: e.length ? "editor.action.showReferences" : "", arguments: [r.document, r.range.start, e] };
    }
    getTitle(e) {
      return e.length === 1 ? ot.l10n.t("1 implementation") : ot.l10n.t("{0} implementations", e.length);
    }
    extractSymbol(e, r, n) {
      if (r.kind === g.interface) return Qe(e, r);
      if ((r.kind === g.class || r.kind === g.method || r.kind === g.memberVariable || r.kind === g.memberGetAccessor || r.kind === g.memberSetAccessor) && /\babstract\b/.test(r.kindModifiers ?? "")) return Qe(e, r);
      if (r.kind === g.method && n?.kind === g.interface && this._showOnInterfaceMethods.getValue(e)) return Qe(e, r);
      if (r.kind === g.method && n?.kind === g.class && this._showOnAllClassMethods.getValue(e)) return /\bprivate\b/.test(r.kindModifiers ?? "") ? void 0 : Qe(e, r);
    }
  };
});
var bp = {};
U(bp, { TypeScriptReferencesCodeLensProvider: () => io, register: () => Ly });
function Ly(i9, t, e, r) {
  return A([Hn(ya.enabled, t.id), O(e, 2)], () => Li.languages.registerCodeLensProvider(i9.semantic, new io(e, r)));
}
var Li, ya, io, Cp = y(() => {
  "use strict";
  Li = m(require("vscode"));
  Oe();
  _i();
  W();
  X();
  ne();
  oe();
  ha();
  ya = Object.freeze({ enabled: "referencesCodeLens.enabled", showOnAllFunctions: "referencesCodeLens.showOnAllFunctions" }), io = class extends vt {
    constructor(e, r) {
      super(e, r);
      this._cachedResponse = r;
      this._enabled = this._register(new et(ya.enabled, false)), this._register(this._enabled.onDidChange(() => this.changeEmitter.fire())), this._showOnAllFunctions = this._register(new et(ya.showOnAllFunctions, false)), this._register(this._showOnAllFunctions.onDidChange(() => this.changeEmitter.fire()));
    }
    async provideCodeLenses(e, r) {
      return this._enabled.getValue(e) ? super.provideCodeLenses(e, r) : [];
    }
    async resolveCodeLens(e, r) {
      let n = I.toFileLocationRequestArgs(e.file, e.range.start), o = await this.client.execute("references", n, r, { lowPriority: true, executionTarget: 0, cancelOnResourceChange: e.document });
      if (o.type !== "response" || !o.body) return e.command = o.type === "cancelled" ? vt.cancelledCommand : vt.errorCommand, e;
      let s = o.body.refs.filter((a) => !a.isDefinition).map((a) => be.fromTextSpan(this.client.toResource(a.file), a));
      return e.command = { title: this.getCodeLensLabel(s), command: s.length ? "editor.action.showReferences" : "", arguments: [e.document, e.range.start, s] }, e;
    }
    getCodeLensLabel(e) {
      return e.length === 1 ? Li.l10n.t("1 reference") : Li.l10n.t("{0} references", e.length);
    }
    extractSymbol(e, r, n) {
      if (n?.kind === g.enum) return Qe(e, r);
      switch (r.kind) {
        case g.function:
          if (this._showOnAllFunctions.getValue(e) && r.nameSpan) return Qe(e, r);
        case g.const:
        case g.let:
        case g.variable:
          if (/\bexport\b/.test(r.kindModifiers)) return Qe(e, r);
          break;
        case g.class:
          if (r.text === "<class>") break;
          return Qe(e, r);
        case g.interface:
        case g.type:
        case g.enum:
          return Qe(e, r);
        case g.method:
        case g.memberGetAccessor:
        case g.memberSetAccessor:
        case g.constructorImplementation:
        case g.memberVariable:
          if (n && I.fromLocation(n.spans[0].start).isEqual(I.fromLocation(r.spans[0].start))) return;
          switch (n?.kind) {
            case g.class:
            case g.interface:
            case g.type:
              return Qe(e, r);
          }
          break;
      }
    }
  };
});
function Sa(i9, t) {
  return t.changes?.length ? Te.fromFileCodeEdits(i9, t.changes) : void 0;
}
async function ba(i9, t, e) {
  let r = Sa(i9, t);
  return r && !await Tp.workspace.applyEdit(r) ? false : no(i9, t.commands, e);
}
async function no(i9, t, e) {
  if (t?.length) for (let r of t) await i9.execute("applyCodeActionCommand", { command: r }, e);
  return true;
}
var Tp, Ca = y(() => {
  "use strict";
  Tp = m(require("vscode"));
  W();
});
function xp(i9, t) {
  if (i9.insertText && typeof i9.insertText != "string") return { snippet: i9.insertText, parameterCount: 0 };
  let e = Oy(t), r = new Pp.SnippetString();
  return r.appendText(`${i9.insertText || i9.label}(`), My(r, e.parts, ", "), e.hasOptionalParameters && r.appendTabstop(), r.appendText(")"), r.appendTabstop(0), { snippet: r, parameterCount: e.parts.length + (e.hasOptionalParameters ? 1 : 0) };
}
function My(i9, t, e) {
  for (let r = 0; r < t.length; ++r) {
    let n = t[r];
    i9.appendPlaceholder(n.text), r !== t.length - 1 && i9.appendText(e);
  }
}
function Oy(i9) {
  let t = [], e = [], r = false, n = false, o = 0, s = 0;
  e: for (let a = 0; a < i9.length; ++a) {
    let c = i9[a];
    switch (c.kind) {
      case Mt.methodName:
      case Mt.functionName:
      case Mt.text:
      case Mt.propertyName:
        o === 0 && s === 0 && (r = true);
        break;
      case Mt.parameterName:
        if (o === 1 && s === 0 && r) {
          let d = i9[a + 1]?.text === "?", p = c.text === "this";
          d ? e.push(c) : (t.push(...e), e = []), !d && !p && t.push(c), n = n || d;
        }
        break;
      case Mt.punctuation:
        if (c.text === "(") ++o;
        else if (c.text === ")") {
          if (--o, o <= 0 && r) break e;
        } else if (c.text === "..." && o === 1) {
          n = true;
          break e;
        } else c.text === "{" ? ++s : c.text === "}" && --s;
        break;
    }
  }
  return { hasOptionalParameters: n, parts: t };
}
var Pp, wp = y(() => {
  "use strict";
  Pp = m(require("vscode"));
  Oe();
});
function Ny(i9, t) {
  if (!i9.text) return;
  function e(n) {
    return /^\s*[~`]{3}/m.test(n) ? n : "```tsx\n" + n + "\n```";
  }
  let r = oo(i9.text, t);
  switch (i9.name) {
    case "example": {
      r = jy(i9.text);
      let n = r.match(/<caption>(.*?)<\/caption>\s*(\r\n|\n)/);
      return n?.index === 0 ? n[1] + `
` + e(r.substr(n[0].length)) : e(r);
    }
    case "author": {
      let n = r.match(/(.+)\s<([-.\w]+@[-.\w]+)>/);
      return n === null ? r : `${n[1]} ${n[2]}`;
    }
    case "default":
      return e(r);
    default:
      return r;
  }
}
function qy(i9, t) {
  switch (i9.name) {
    case "augments":
    case "extends":
    case "param":
    case "template": {
      let n = Vy(i9, t);
      if (n?.length === 3) {
        let o = n[1], s = n[2], a = `*@${i9.name}* \`${o}\``;
        return s ? a + (s.match(/\r\n|\n/g) ? `  
` + s : ` — ${s}`) : a;
      }
      break;
    }
    case "return":
    case "returns": {
      if (!i9.text?.length) return;
      break;
    }
  }
  let e = `*@${i9.name}*`, r = Ny(i9, t);
  return r ? e + (r.match(/\r\n|\n/g) ? `  
` + r : ` — ${r}`) : e;
}
function Vy(i9, t) {
  if (i9.name === "template") {
    let e = i9.text;
    if (e && typeof e != "string") {
      let r = e.filter((o) => o.kind === "typeParameterName").map((o) => o.text).join(", "), n = e.filter((o) => o.kind === "text").map((o) => oo(o.text.replace(/^\s*-?\s*/, ""), t)).join(" ");
      return r ? ["", r, n] : void 0;
    }
  }
  return oo(i9.text, t).split(/^(\S+)\s*-?\s*/);
}
function jy(i9) {
  return typeof i9 == "string" ? i9 : i9.map((t) => t.text).join("");
}
function qt(i9, t) {
  return oo(i9, t);
}
function oo(i9, t) {
  if (!i9) return "";
  if (typeof i9 == "string") return i9;
  let e = [], r;
  for (let n of i9) switch (n.kind) {
    case "link":
      if (r) {
        if (r.target) {
          let s = { file: { ...t.toResource(r.target.file).toJSON(), $mid: void 0 }, position: I.fromLocation(r.target.start) }, a = `command:${Bt.id}?${encodeURIComponent(JSON.stringify([s]))}`, c = r.text ? r.text : Ta(r.name ?? "");
          e.push(`[${r.linkcode ? "`" + c + "`" : c}](${a} "${so.l10n.t("Open symbol link")}")`);
        } else {
          let o = r.text ?? r.name;
          if (o) if (/^https?:/.test(o)) {
            let s = o.split(" ");
            if (s.length === 1 && !r.linkcode) e.push(`<${s[0]}>`);
            else {
              let a = s.length > 1 ? s.slice(1).join(" ") : s[0];
              e.push(`[${r.linkcode ? "`" + Ta(a) + "`" : a}](${s[0]})`);
            }
          } else e.push(Ta(o));
        }
        r = void 0;
      } else r = { linkcode: n.text === "{@linkcode " };
      break;
    case "linkName":
      r && (r.name = n.text, r.target = n.target);
      break;
    case "linkText":
      r && (r.text = n.text);
      break;
    default:
      e.push(n.text);
      break;
  }
  return e.join("");
}
function Ta(i9) {
  return i9.replace(/`/g, "\\$&");
}
function Uy(i9, t) {
  return i9.map((e) => qy(e, t)).join(`  

`);
}
function Mi(i9, t, e, r) {
  let n = new so.MarkdownString();
  return Pa(n, i9, t, e), n.baseUri = r, n.isTrusted = { enabledCommands: [Bt.id] }, n;
}
function Pa(i9, t, e, r) {
  if (t && i9.appendMarkdown(qt(t, r)), e) {
    let n = Uy(e, r);
    n && i9.appendMarkdown(`

` + n);
  }
  return i9.isTrusted = { enabledCommands: [Bt.id] }, i9;
}
var so, ao = y(() => {
  "use strict";
  so = m(require("vscode"));
  Xs();
  W();
});
var Ip = {};
U(Ip, { register: () => $y });
function Wy(i9) {
  if (!i9.kindModifiers || i9.kind !== g.script) return;
  let t = Lt(i9.kindModifiers);
  for (let e of je.fileExtensionKindModifiers) if (t.has(e)) return i9.name.toLowerCase().endsWith(e) ? i9.name : i9.name + e;
}
function Ky(i9, t) {
  return !t.nameSuggestions && i9.kind === g.warning || !t.pathSuggestions && (i9.kind === g.directory || i9.kind === g.script || i9.kind === g.externalModuleName) || !t.autoImportSuggestions && i9.hasAction;
}
function $y(i9, t, e, r, n, o, s, a) {
  return A([O(e, 1, 2)], () => E.languages.registerCompletionItemProvider(i9.syntax, new fo(e, t, r, n, o, s, a), ...fo.triggerCharacters));
}
var E, co, lo, po, uo, kp, fo, Ep = y(() => {
  "use strict";
  E = m(require("vscode"));
  pe();
  Di();
  Oe();
  W();
  X();
  Et();
  ne();
  Ca();
  oe();
  wp();
  ao();
  co = class i9 extends E.CompletionItem {
    constructor(e, r, n, o, s, a, c) {
      let l = n.name || (n.insertText ?? "");
      super(l, i9.convertKind(n.kind));
      this.position = e;
      this.document = r;
      this.tsEntry = n;
      this.completionContext = o;
      this.metadata = s;
      if (n.source && n.hasAction && a.apiVersion.lt(P.v490) ? this.sortText = "￿" + n.sortText : this.sortText = n.sortText, n.source && n.hasAction) {
        let u = E.workspace.asRelativePath(n.source);
        u !== n.source && (this.label = { label: l, description: u });
      }
      let { sourceDisplay: d, isSnippet: p } = n;
      if (d && (this.label = { label: l, description: qt(d, a) }), n.labelDetails && (this.label = { label: l, ...n.labelDetails }), this.preselect = n.isRecommended, this.position = e, this.useCodeSnippet = o.completeFunctionCalls && (this.kind === E.CompletionItemKind.Function || this.kind === E.CompletionItemKind.Method), this.range = this.getRangeFromReplacementSpan(n, o), this.commitCharacters = i9.getCommitCharacters(o, n, c), this.insertText = p && n.insertText ? new E.SnippetString(n.insertText) : n.insertText, this.filterText = n.filterText || this.getFilterText(o.line, n.insertText), o.isMemberCompletion && o.dotAccessorContext && !(this.insertText instanceof E.SnippetString) && (this.filterText = o.dotAccessorContext.text + (this.insertText || this.textLabel), !this.range)) {
        let u = this.completionContext.wordRange;
        u ? this.range = { inserting: o.dotAccessorContext.range, replacing: o.dotAccessorContext.range.union(u) } : this.range = o.dotAccessorContext.range, this.insertText = this.filterText;
      }
      if (n.kindModifiers) {
        let u = Lt(n.kindModifiers);
        u.has(je.optional) && (this.insertText ??= this.textLabel, this.filterText ??= this.textLabel, typeof this.label == "string" ? this.label += "?" : this.label.label += "?"), u.has(je.deprecated) && (this.tags = [E.CompletionItemTag.Deprecated]), u.has(je.color) && (this.kind = E.CompletionItemKind.Color), this.detail = Wy(n);
      }
      this.resolveRange();
    }
    get textLabel() {
      return typeof this.label == "string" ? this.label : this.label.label;
    }
    async resolveCompletionItem(e, r) {
      if (r.onCancellationRequested(() => {
        this._resolvedPromise && --this._resolvedPromise.waiting <= 0 && setTimeout(() => {
          this._resolvedPromise && this._resolvedPromise.waiting <= 0 && this._resolvedPromise.requestToken.cancel();
        }, 300);
      }), this._resolvedPromise) return ++this._resolvedPromise.waiting, this._resolvedPromise.promise;
      let n = new E.CancellationTokenSource(), o = (async () => {
        let s = e.toOpenTsFilePath(this.document);
        if (!s) return;
        let a = { ...I.toFileLocationRequestArgs(s, this.position), entryNames: [this.tsEntry.source || this.tsEntry.data ? { name: this.tsEntry.name, source: this.tsEntry.source, data: this.tsEntry.data } : this.tsEntry.name] }, c = await e.interruptGetErr(() => e.execute("completionEntryDetails", a, n.token));
        if (c.type !== "response" || !c.body?.length) return;
        let l = c.body[0], d = this.getDetails(e, l);
        d && (this.detail = d), this.documentation = this.getDocumentation(e, l, this.document.uri);
        let p = this.getCodeActions(l, s), u = [{ command: lo.ID, title: "", arguments: [this] }];
        p.command && u.push(p.command);
        let f = p.additionalTextEdits;
        if (this.useCodeSnippet && await this.isValidFunctionCompletionContext(e, s, this.position, this.document, r)) {
          let { snippet: F, parameterCount: _ } = xp({ ...this, label: this.textLabel }, l.displayParts);
          this.insertText = F, _ > 0 && E.workspace.getConfiguration("editor.parameterHints").get("enabled") && u.push({ title: "triggerParameterHints", command: "editor.action.triggerParameterHints" });
        }
        return { commands: u, edits: f };
      })();
      return this._resolvedPromise = { promise: o, requestToken: n, waiting: 1 }, this._resolvedPromise.promise;
    }
    getDetails(e, r) {
      let n = [];
      if (r.kind !== g.script) {
        for (let o of r.codeActions ?? []) n.push(o.description);
        return n.push(qt(r.displayParts, e)), n.join(`

`);
      }
    }
    getDocumentation(e, r, n) {
      let o = new E.MarkdownString();
      return Pa(o, r.documentation, r.tags, e), o.baseUri = n, o.value.length ? o : void 0;
    }
    async isValidFunctionCompletionContext(e, r, n, o, s) {
      try {
        let d = I.toFileLocationRequestArgs(r, n), p = await e.execute("quickinfo", d, s);
        if (p.type === "response" && p.body) switch (p.body.kind) {
          case "var":
          case "let":
          case "const":
          case "alias":
            return false;
        }
      } catch {
      }
      let a = o.lineAt(n.line);
      return !(a.text.slice(n.character).match(/^[a-z_$0-9]*\s*\(/gi) || a.text.slice(0, n.character).match(/<\s*[\w]*$/gi));
    }
    getCodeActions(e, r) {
      if (!e.codeActions?.length) return {};
      let n = [], o = false;
      for (let a of e.codeActions) if (a.commands && (o = true), a.changes) for (let c of a.changes) c.fileName === r ? n.push(...c.textChanges.map(Yt.fromCodeEdit)) : o = true;
      let s;
      return o && (s = { title: "", command: uo.ID, arguments: [r, e.codeActions.map((a) => ({ commands: a.commands, description: a.description, changes: a.changes.filter((c) => c.fileName !== r) }))] }), { command: s, additionalTextEdits: n.length ? n : void 0 };
    }
    getRangeFromReplacementSpan(e, r) {
      if (!e.replacementSpan) return r.optionalReplacementRange ? { inserting: new E.Range(r.optionalReplacementRange.start, this.position), replacing: r.optionalReplacementRange } : void 0;
      let n = R.fromTextSpan(e.replacementSpan);
      return n.isSingleLine || (n = new E.Range(n.start.line, n.start.character, n.start.line, r.line.length)), { inserting: n, replacing: n };
    }
    getFilterText(e, r) {
      if (this.tsEntry.name.startsWith("#")) {
        let n = this.completionContext.wordRange, o = n ? e.charAt(n.start.character) : void 0;
        return r ? r.startsWith("this.#") ? o === "#" ? r : r.replace(/^this\.#/, "") : r : o === "#" ? void 0 : this.tsEntry.name.replace(/^#/, "");
      }
      if (!r?.startsWith("this.")) return r?.startsWith("[") ? r.replace(/^\[['"](.+)[['"]\]$/, ".$1") : r;
    }
    resolveRange() {
      if (this.range) return;
      let e = this.completionContext.wordRange;
      e && (this.range = { inserting: new E.Range(e.start, this.position), replacing: e });
    }
    static convertKind(e) {
      switch (e) {
        case g.primitiveType:
        case g.keyword:
          return E.CompletionItemKind.Keyword;
        case g.const:
        case g.let:
        case g.variable:
        case g.localVariable:
        case g.alias:
        case g.parameter:
          return E.CompletionItemKind.Variable;
        case g.memberVariable:
        case g.memberGetAccessor:
        case g.memberSetAccessor:
          return E.CompletionItemKind.Field;
        case g.function:
        case g.localFunction:
          return E.CompletionItemKind.Function;
        case g.method:
        case g.constructSignature:
        case g.callSignature:
        case g.indexSignature:
          return E.CompletionItemKind.Method;
        case g.enum:
          return E.CompletionItemKind.Enum;
        case g.enumMember:
          return E.CompletionItemKind.EnumMember;
        case g.module:
        case g.externalModuleName:
          return E.CompletionItemKind.Module;
        case g.class:
        case g.type:
          return E.CompletionItemKind.Class;
        case g.interface:
          return E.CompletionItemKind.Interface;
        case g.warning:
          return E.CompletionItemKind.Text;
        case g.script:
          return E.CompletionItemKind.File;
        case g.directory:
          return E.CompletionItemKind.Folder;
        case g.string:
          return E.CompletionItemKind.Constant;
        default:
          return E.CompletionItemKind.Property;
      }
    }
    static getCommitCharacters(e, r, n) {
      let o = r.commitCharacters ?? (n ? Array.from(n) : void 0);
      if (o) return e.enableCallCompletions && !e.isNewIdentifierLocation && r.kind !== g.warning && r.kind !== g.string && o.push("("), o;
      if (!(r.kind === g.warning || r.kind === g.string) && !e.isNewIdentifierLocation) return o = [".", ",", ";"], e.enableCallCompletions && o.push("("), o;
    }
  };
  lo = class i9 {
    constructor(t, e) {
      this.onCompletionAccepted = t;
      this.telemetryReporter = e;
      this.id = i9.ID;
    }
    static {
      this.ID = "_typescript.onCompletionAccepted";
    }
    execute(t) {
      this.onCompletionAccepted(t), t instanceof co && this.telemetryReporter.logTelemetry("completions.accept", { isPackageJsonImport: t.tsEntry.isPackageJsonImport ? "true" : void 0, isImportStatementCompletion: t.tsEntry.isImportStatementCompletion ? "true" : void 0 });
    }
  }, po = class i9 {
    constructor(t) {
      this.client = t;
      this.id = i9.ID;
    }
    static {
      this.ID = "_typescript.applyCompletionCommand";
    }
    async execute(t) {
      let e = await t.resolveCompletionItem(this.client, le);
      if (!e) return;
      let { edits: r, commands: n } = e;
      if (r) {
        let o = new E.WorkspaceEdit();
        for (let s of r) o.replace(t.document.uri, s.range, s.newText);
        await E.workspace.applyEdit(o);
      }
      for (let o of n) await E.commands.executeCommand(o.command, ...o.arguments ?? []);
    }
  }, uo = class i9 {
    constructor(t) {
      this.client = t;
      this.id = i9.ID;
    }
    static {
      this.ID = "_typescript.applyCompletionCodeAction";
    }
    async execute(t, e) {
      if (e.length === 0) return true;
      if (e.length === 1) return ba(this.client, e[0], le);
      let r = await E.window.showQuickPick(e.map((n) => ({ label: n.description, description: "", action: n })), { placeHolder: E.l10n.t("Select code action to apply") });
      return r ? ba(this.client, r.action, le) : false;
    }
  };
  ((s) => {
    s.completeFunctionCalls = "suggest.completeFunctionCalls", s.nameSuggestions = "suggest.names", s.pathSuggestions = "suggest.paths", s.autoImportSuggestions = "suggest.autoImports", s.importStatementSuggestions = "suggest.importStatements";
    function o(a, c) {
      return { completeFunctionCalls: h(s.completeFunctionCalls, false, { scope: c, fallbackSection: a }), pathSuggestions: h(s.pathSuggestions, true, { scope: c, fallbackSection: a }), autoImportSuggestions: h(s.autoImportSuggestions, true, { scope: c, fallbackSection: a }), nameSuggestions: h(s.nameSuggestions, true, { scope: c, fallbackSection: a }), importStatementSuggestions: h(s.importStatementSuggestions, true, { scope: c, fallbackSection: a }) };
    }
    s.getConfigurationForResource = o;
  })(kp ||= {});
  fo = class {
    constructor(t, e, r, n, o, s, a) {
      this.client = t;
      this.language = e;
      this.typingsStatus = r;
      this.fileConfigurationManager = n;
      this.telemetryReporter = s;
      o.register(new uo(this.client)), o.register(new lo(a, this.telemetryReporter)), o.register(new po(this.client));
    }
    static {
      this.triggerCharacters = [".", '"', "'", "`", "/", "@", "<", "#", " "];
    }
    async provideCompletionItems(t, e, r, n) {
      if (!h("suggest.enabled", true, { scope: t, fallbackSection: this.language.id })) return;
      if (this.typingsStatus.isAcquiringTypings) return Promise.reject({ label: E.l10n.t({ message: "Acquiring typings...", comment: ["Typings refers to the *.d.ts typings files that power our IntelliSense. It should not be localized"] }), detail: E.l10n.t({ message: "Acquiring typings definitions for IntelliSense.", comment: ["Typings refers to the *.d.ts typings files that power our IntelliSense. It should not be localized"] }) });
      let o = this.client.toOpenTsFilePath(t);
      if (!o) return;
      let s = t.lineAt(e.line), a = kp.getConfigurationForResource(this.language.id, t);
      if (!this.shouldTrigger(n, s, e, a)) return;
      let c = t.getWordRangeAtPosition(e);
      if (c && !c.isEmpty) {
        let Fe = c.start.translate(0, 1);
        t.getText(new E.Range(c.start, Fe)) === "@" && (c = c.with(Fe));
      }
      await this.client.interruptGetErr(() => this.fileConfigurationManager.ensureConfigurationForDocument(t, r));
      let l = { ...I.toFileLocationRequestArgs(o, e), includeExternalModuleExports: a.autoImportSuggestions, includeInsertTextCompletions: true, triggerCharacter: this.getTsTriggerCharacter(n), triggerKind: ua.toProtocolCompletionTriggerKind(n.triggerKind) }, d, p, u, f, S = Date.now();
      try {
        p = await this.client.interruptGetErr(() => this.client.execute("completionInfo", l, r));
      } finally {
        u = Date.now() - S;
      }
      if (p.type !== "response" || !p.body) {
        this.logCompletionsTelemetry(u, p);
        return;
      }
      let F = p.body.isNewIdentifierLocation, _ = p.body.isMemberCompletion;
      if (_) {
        let Fe = s.text.slice(0, e.character).match(/\??\.\s*$/) || void 0;
        if (Fe) {
          let wt = new E.Range(e.translate({ characterDelta: -Fe[0].length }), e), vs = t.getText(wt);
          d = { range: wt, text: vs };
        }
      }
      let j = !!p.body.isIncomplete || !!p.metadata?.isIncomplete, H = p.body.entries, C = p.metadata, N = Object.freeze(p.body.defaultCommitCharacters);
      p.body.optionalReplacementSpan && (f = R.fromTextSpan(p.body.optionalReplacementSpan));
      let fe = { isNewIdentifierLocation: F, isMemberCompletion: _, dotAccessorContext: d, enableCallCompletions: !a.completeFunctionCalls, wordRange: c, line: s.text, completeFunctionCalls: a.completeFunctionCalls, optionalReplacementRange: f }, L = false, D = false, Wt = [];
      for (let Fe of H) if (!Ky(Fe, a)) {
        let wt = new co(e, t, Fe, fe, C, this.client, N);
        wt.command = { command: po.ID, title: "", arguments: [wt] }, Wt.push(wt), L = L || !!Fe.isPackageJsonImport, D = D || !!Fe.isImportStatementCompletion;
      }
      return u !== void 0 && this.logCompletionsTelemetry(u, p, L, D), new E.CompletionList(Wt, j);
    }
    logCompletionsTelemetry(t, e, r, n) {
      this.telemetryReporter.logTelemetry("completions.execute", { duration: String(t), type: e?.type ?? "unknown", flags: e?.type === "response" && typeof e.body?.flags == "number" ? String(e.body.flags) : void 0, count: String(e?.type === "response" && e.body ? e.body.entries.length : 0), updateGraphDurationMs: e?.type === "response" && typeof e.performanceData?.updateGraphDurationMs == "number" ? String(e.performanceData.updateGraphDurationMs) : void 0, createAutoImportProviderProgramDurationMs: e?.type === "response" && typeof e.performanceData?.createAutoImportProviderProgramDurationMs == "number" ? String(e.performanceData.createAutoImportProviderProgramDurationMs) : void 0, includesPackageJsonImport: r ? "true" : void 0, includesImportStatementCompletion: n ? "true" : void 0 });
    }
    getTsTriggerCharacter(t) {
      switch (t.triggerCharacter) {
        case "@":
          return "@";
        case "#":
          return "#";
        case " ":
          return this.client.apiVersion.gte(P.v430) ? " " : void 0;
        case ".":
        case '"':
        case "'":
        case "`":
        case "/":
        case "<":
          return t.triggerCharacter;
        default:
          return;
      }
    }
    async resolveCompletionItem(t, e) {
      return await t.resolveCompletionItem(this.client, e), t;
    }
    shouldTrigger(t, e, r, n) {
      return t.triggerCharacter === " " ? !n.importStatementSuggestions || this.client.apiVersion.lt(P.v430) ? false : e.text.slice(0, r.character) === "import" : true;
    }
  };
});
function er(i9, ...t) {
  if (global.setImmediate) {
    let e = global.setImmediate(i9, ...t);
    return { dispose: () => global.clearImmediate(e) };
  } else {
    let e = setTimeout(i9, 0, ...t);
    return { dispose: () => clearTimeout(e) };
  }
}
function xa(i9, t, e) {
  let r, n = setTimeout(() => {
    r?.(void 0), e?.();
  }, t);
  return Promise.race([i9.finally(() => clearTimeout(n)), new Promise((o) => r = o)]);
}
var Gr, Jr = y(() => {
  "use strict";
  Gr = class {
    constructor(t) {
      this.defaultDelay = t, this.timeout = null, this.completionPromise = null, this.onSuccess = null, this.task = null;
    }
    trigger(t, e = this.defaultDelay) {
      return this.task = t, e >= 0 && this.cancelTimeout(), this.completionPromise || (this.completionPromise = new Promise((r) => {
        this.onSuccess = r;
      }).then(() => {
        this.completionPromise = null, this.onSuccess = null;
        let r = this.task?.();
        return this.task = null, r;
      })), (e >= 0 || this.timeout === null) && (this.timeout = setTimeout(() => {
        this.timeout = null, this.onSuccess?.(void 0);
      }, e >= 0 ? e : this.defaultDelay)), this.completionPromise;
    }
    cancelTimeout() {
      this.timeout !== null && (clearTimeout(this.timeout), this.timeout = null);
    }
  };
});
var Ap = {};
U(Ap, { register: () => By });
function By(i9, t, e, r) {
  return A([O(e, 2), ht(e, P.v570), zr(Dp, { fallbackSection: t.id })], () => he.languages.registerDocumentPasteEditProvider(i9.semantic, new Pr(t.id, e, r), { providedPasteEditKinds: [Pr.kind], copyMimeTypes: [Pr.metadataMimeType], pasteMimeTypes: [Pr.metadataMimeType] }));
}
var he, Xr, go, Oi, Dp, Pr, _p = y(() => {
  "use strict";
  he = m(require("vscode"));
  pe();
  W();
  X();
  Jr();
  ne();
  oe();
  Xr = class i9 {
    constructor(t, e, r) {
      this.resource = t;
      this.ranges = e;
      this.copyOperation = r;
    }
    static parse(t) {
      try {
        let e = JSON.parse(t), r = he.Uri.parse(e.resource), n = e.ranges.map((s) => new he.Range(s.start, s.end)), o = e.copyOperation ? Promise.resolve(e.copyOperation) : void 0;
        return new i9(r, n, o);
      } catch {
        return;
      }
    }
  }, go = class i9 extends he.DocumentPasteEdit {
    static tryCreateFromResponse(t, e) {
      if (e.type !== "response" || !e.body?.edits.length) return;
      let r = new i9(), n = new he.WorkspaceEdit();
      for (let o of e.body.edits) n.set(t.toResource(o.fileName), o.textChanges.map(Yt.fromCodeEdit));
      return r.additionalEdit = n, r;
    }
    constructor() {
      super("", he.l10n.t("Paste with imports"), Pr.kind), this.yieldTo = [he.DocumentDropOrPasteEditKind.Text.append("plain")];
    }
  }, Oi = class extends go {
    constructor(e, r) {
      super();
      this.operation = r;
      this.insertText = e;
    }
  }, Dp = "updateImportsOnPaste.enabled", Pr = class i9 {
    constructor(t, e, r) {
      this._modeId = t;
      this._client = e;
      this.fileConfigurationManager = r;
    }
    static {
      this.kind = he.DocumentDropOrPasteEditKind.TextUpdateImports.append("jsts");
    }
    static {
      this.metadataMimeType = "application/vnd.code.jsts.metadata";
    }
    async prepareDocumentPaste(t, e, r, n) {
      if (!this.isEnabled(t)) return;
      let o = this._client.toOpenTsFilePath(t);
      if (!o) return;
      let s = this._client.interruptGetErr(() => this._client.execute("preparePasteEdits", { file: o, copiedTextSpan: e.map(R.toTextSpan) }, n)), c = await xa(s, 200);
      if (!n.isCancellationRequested) if (c) {
        if (c.type !== "response" || !c.body) return;
        r.set(i9.metadataMimeType, new he.DataTransferItem(new Xr(t.uri, e, void 0)));
      } else r.set(i9.metadataMimeType, new he.DataTransferItem(new Xr(t.uri, e, s)));
    }
    async provideDocumentPasteEdits(t, e, r, n, o) {
      if (!this.isEnabled(t)) return;
      let s = this._client.toOpenTsFilePath(t);
      if (!s) return;
      let a = await r.get("text/plain")?.asString();
      if (!a || o.isCancellationRequested) return;
      let c = await this.extractMetadata(r, o);
      if (o.isCancellationRequested) return;
      let l;
      if (c) {
        let p = c.ranges.map(R.toTextSpan), u = this._client.toTsFilePath(c.resource);
        u && (l = { file: u, spans: p });
      }
      if (l?.file === s) return;
      let d = new he.CancellationTokenSource();
      o.onCancellationRequested(() => d.cancel()), c?.copyOperation?.then((p) => {
        (p.type !== "response" || !p.body) && d.cancel();
      }, (p) => {
      });
      try {
        let p = this._client.interruptGetErr(() => (this.fileConfigurationManager.ensureConfigurationForDocument(t, o), this._client.execute("getPasteEdits", { file: s, pastedText: [a], pasteLocations: e.map(R.toTextSpan), copiedFrom: l }, d.token))), f = await xa(p, 200);
        if (f) {
          let S = go.tryCreateFromResponse(this._client, f);
          return S ? [S] : void 0;
        } else return [new Oi(a, p)];
      } finally {
        d.dispose();
      }
    }
    async resolveDocumentPasteEdit(t, e) {
      if (!(t instanceof Oi)) return;
      let r = await t.operation;
      return Oi.tryCreateFromResponse(this._client, r) ?? t;
    }
    async extractMetadata(t, e) {
      let r = await t.get(i9.metadataMimeType)?.value;
      if (!e.isCancellationRequested) {
        if (r instanceof Xr) return r;
        if (typeof r == "string") return Xr.parse(r);
      }
    }
    isEnabled(t) {
      return h(Dp, true, { scope: t, fallbackSection: this._modeId });
    }
  };
});
var Vt, mo = y(() => {
  "use strict";
  W();
  Vt = class {
    constructor(t) {
      this.client = t;
    }
    async getSymbolLocations(t, e, r, n) {
      let o = this.client.toOpenTsFilePath(e);
      if (!o) return;
      let s = I.toFileLocationRequestArgs(o, r), a = await this.client.execute(t, s, n);
      if (!(a.type !== "response" || !a.body)) return a.body.map((c) => be.fromTextSpan(this.client.toResource(c.file), c));
    }
  };
});
var Lp = {};
U(Lp, { default: () => Ni, register: () => Hy });
function Hy(i9, t) {
  return A([O(t, 1, 2)], () => Fp.languages.registerDefinitionProvider(i9.syntax, new Ni(t)));
}
var Fp, Ni, Mp = y(() => {
  "use strict";
  Fp = m(require("vscode"));
  pe();
  W();
  X();
  mo();
  ne();
  oe();
  Ni = class extends Vt {
    async provideDefinition(t, e, r) {
      let n = this.client.toOpenTsFilePath(t);
      if (!n) return;
      let o = I.toFileLocationRequestArgs(n, e), s = await this.client.execute("definitionAndBoundSpan", o, r);
      if (s.type !== "response" || !s.body) return;
      let a = s.body.textSpan ? R.fromTextSpan(s.body.textSpan) : void 0, c = s.body.definitions;
      if (h("preferGoToSourceDefinition", false, { scope: t, fallbackSection: t.languageId }) && this.client.apiVersion.gte(P.v470)) {
        let l = await this.client.execute("findSourceDefinition", o, r);
        l.type === "response" && l.body?.length && (c = l.body);
      }
      return c.map((l) => {
        let d = be.fromTextSpan(this.client.toResource(l.file), l);
        return l.contextStart && l.contextEnd ? { originSelectionRange: a, targetRange: R.fromLocations(l.contextStart, l.contextEnd), targetUri: d.uri, targetSelectionRange: d.range } : { originSelectionRange: a, targetRange: d.range, targetUri: d.uri };
      });
    }
  };
});
var Np = {};
U(Np, { register: () => Gy });
function Gy(i9, t) {
  return Ue.languages.registerCompletionItemProvider(i9.syntax, new wa(t), "@");
}
var Ue, Op, zy, wa, qp = y(() => {
  "use strict";
  Ue = m(require("vscode"));
  pe();
  Op = [{ value: "@ts-check", description: Ue.l10n.t("Enables semantic checking in a JavaScript file. Must be at the top of a file.") }, { value: "@ts-nocheck", description: Ue.l10n.t("Disables semantic checking in a JavaScript file. Must be at the top of a file.") }, { value: "@ts-ignore", description: Ue.l10n.t("Suppresses @ts-check errors on the next line of a file.") }], zy = [...Op, { value: "@ts-expect-error", description: Ue.l10n.t("Suppresses @ts-check errors on the next line of a file, expecting at least one to exist.") }], wa = class {
    constructor(t) {
      this.client = t;
    }
    provideCompletionItems(t, e, r) {
      if (!this.client.toOpenTsFilePath(t)) return [];
      let a = t.lineAt(e.line).text.slice(0, e.character).match(/^\s*\/\/+\s?(@[a-zA-Z\-]*)?$/);
      return a ? (this.client.apiVersion.gte(P.v390) ? zy : Op).map((l) => {
        let d = new Ue.CompletionItem(l.value, Ue.CompletionItemKind.Snippet);
        return d.detail = l.description, d.range = new Ue.Range(e.line, Math.max(0, e.character - (a[1] ? a[1].length : 0)), e.line, e.character), d;
      }) : [];
    }
  };
});
var jp = {};
U(jp, { register: () => Jy });
function Vp(i9) {
  return i9.highlightSpans.map((t) => new qe.DocumentHighlight(R.fromTextSpan(t), t.kind === "writtenReference" ? qe.DocumentHighlightKind.Write : qe.DocumentHighlightKind.Read));
}
function Jy(i9, t) {
  let e = new Ra(t);
  return qe.Disposable.from(qe.languages.registerDocumentHighlightProvider(i9.syntax, e), qe.languages.registerMultiDocumentHighlightProvider(i9.syntax, e));
}
var qe, Ra, Up = y(() => {
  "use strict";
  qe = m(require("vscode"));
  W();
  Ra = class {
    constructor(t) {
      this.client = t;
    }
    async provideMultiDocumentHighlights(t, e, r, n) {
      let o = [t, ...r].map((d) => this.client.toOpenTsFilePath(d)).filter((d) => !!d), s = this.client.toOpenTsFilePath(t);
      if (!s || o.length === 0) return [];
      let a = { ...I.toFileLocationRequestArgs(s, e), filesToSearch: o }, c = await this.client.execute("documentHighlights", a, n);
      return c.type !== "response" || !c.body ? [] : c.body.map((d) => new qe.MultiDocumentHighlight(qe.Uri.file(d.file), [...Vp(d)]));
    }
    async provideDocumentHighlights(t, e, r) {
      let n = this.client.toOpenTsFilePath(t);
      if (!n) return [];
      let o = { ...I.toFileLocationRequestArgs(n, e), filesToSearch: [n] }, s = await this.client.execute("documentHighlights", o, r);
      return s.type !== "response" || !s.body ? [] : s.body.flatMap(Vp);
    }
  };
});
var Wp = {};
U(Wp, { register: () => Qy });
function Qy(i9, t, e) {
  return de.languages.registerDocumentSymbolProvider(i9.syntax, new ka(t, e), { label: "TypeScript" });
}
var de, Xy, ka, Kp = y(() => {
  "use strict";
  de = m(require("vscode"));
  Di();
  Oe();
  W();
  Xy = (i9) => {
    switch (i9) {
      case g.module:
        return de.SymbolKind.Module;
      case g.class:
        return de.SymbolKind.Class;
      case g.enum:
        return de.SymbolKind.Enum;
      case g.interface:
        return de.SymbolKind.Interface;
      case g.method:
        return de.SymbolKind.Method;
      case g.memberVariable:
        return de.SymbolKind.Property;
      case g.memberGetAccessor:
        return de.SymbolKind.Property;
      case g.memberSetAccessor:
        return de.SymbolKind.Property;
      case g.variable:
        return de.SymbolKind.Variable;
      case g.const:
        return de.SymbolKind.Variable;
      case g.localVariable:
        return de.SymbolKind.Variable;
      case g.function:
        return de.SymbolKind.Function;
      case g.localFunction:
        return de.SymbolKind.Function;
      case g.constructSignature:
        return de.SymbolKind.Constructor;
      case g.constructorImplementation:
        return de.SymbolKind.Constructor;
    }
    return de.SymbolKind.Variable;
  }, ka = class i9 {
    constructor(t, e) {
      this.client = t;
      this.cachedResponse = e;
    }
    async provideDocumentSymbols(t, e) {
      let r = this.client.toOpenTsFilePath(t);
      if (!r) return;
      let n = { file: r }, o = await this.cachedResponse.execute(t, () => this.client.execute("navtree", n, e));
      if (o.type !== "response" || !o.body?.childItems) return;
      let s = [];
      for (let a of o.body.childItems) i9.convertNavTree(t.uri, s, a);
      return s;
    }
    static convertNavTree(t, e, r) {
      let n = i9.shouldInclueEntry(r);
      if (!n && !r.childItems?.length) return false;
      let o = new Set(r.childItems || []);
      for (let s of r.spans) {
        let a = R.fromTextSpan(s), c = i9.convertSymbol(r, a);
        for (let l of o) if (l.spans.some((d) => !!a.intersection(R.fromTextSpan(d)))) {
          let d = i9.convertNavTree(t, c.children, l);
          n = n || d, o.delete(l);
        }
        n && e.push(c);
      }
      return n;
    }
    static convertSymbol(t, e) {
      let r = t.nameSpan ? R.fromTextSpan(t.nameSpan) : e, n = t.text;
      switch (t.kind) {
        case g.memberGetAccessor:
          n = `(get) ${n}`;
          break;
        case g.memberSetAccessor:
          n = `(set) ${n}`;
          break;
      }
      let o = new de.DocumentSymbol(n, "", Xy(t.kind), e, e.contains(r) ? r : e);
      return Lt(t.kindModifiers).has(je.deprecated) && (o.tags = [de.SymbolTag.Deprecated]), o;
    }
    static shouldInclueEntry(t) {
      return t.kind === g.alias ? false : !!(t.text && t.text !== "<function>" && t.text !== "<class>");
    }
  };
});
var $p = {};
U($p, { register: () => Yy });
function Yy(i9, t) {
  function e(r) {
    ee.commands.executeCommand("setContext", qi.context, r ?? i9.apiVersion.gte(qi.minVersion));
  }
  return e(), t.register(new qi(i9)), ee.Disposable.from(i9.onTsServerStarted(() => e()), new ee.Disposable(() => e(false)));
}
var ee, qi, Bp = y(() => {
  "use strict";
  ee = m(require("vscode"));
  Je();
  pe();
  W();
  qi = class i9 {
    constructor(t) {
      this.client = t;
      this.id = "typescript.findAllFileReferences";
    }
    static {
      this.context = "tsSupportsFileReferences";
    }
    static {
      this.minVersion = P.v420;
    }
    async execute(t) {
      if (this.client.apiVersion.lt(i9.minVersion)) {
        ee.window.showErrorMessage(ee.l10n.t("Find file references failed. Requires TypeScript 4.2+."));
        return;
      }
      if (t ??= ee.window.activeTextEditor?.document.uri, !t) {
        ee.window.showErrorMessage(ee.l10n.t("Find file references failed. No resource provided."));
        return;
      }
      let e = await ee.workspace.openTextDocument(t);
      if (!pt(e)) {
        ee.window.showErrorMessage(ee.l10n.t("Find file references failed. Unsupported file type."));
        return;
      }
      let r = this.client.toOpenTsFilePath(e);
      if (!r) {
        ee.window.showErrorMessage(ee.l10n.t("Find file references failed. Unknown file type."));
        return;
      }
      await ee.window.withProgress({ location: ee.ProgressLocation.Window, title: ee.l10n.t("Finding file references") }, async (n, o) => {
        let s = await this.client.execute("fileReferences", { file: r }, o);
        if (s.type !== "response" || !s.body) return;
        let a = s.body.refs.map((d) => be.fromTextSpan(this.client.toResource(d.file), d)), c = ee.workspace.getConfiguration("references"), l = c.inspect("preferredLocation");
        await c.update("preferredLocation", "view");
        try {
          await ee.commands.executeCommand("editor.action.showReferences", t, new ee.Position(0, 0), a);
        } finally {
          await c.update("preferredLocation", l?.workspaceFolderValue ?? l?.workspaceValue);
        }
      });
    }
  };
});
var ho, Hp, zp, vo, Gp, Jp, Xp, Qp, Yp, Zp, Ia = y(() => {
  "use strict";
  ho = /* @__PURE__ */ new Set([6196, 6133]), Hp = /* @__PURE__ */ new Set([6138]), zp = /* @__PURE__ */ new Set([6192]), vo = /* @__PURE__ */ new Set([7027]), Gp = /* @__PURE__ */ new Set([7028]), Jp = /* @__PURE__ */ new Set([7029]), Xp = /* @__PURE__ */ new Set([7030]), Qp = /* @__PURE__ */ new Set([2420]), Yp = /* @__PURE__ */ new Set([2552, 2304]), Zp = /* @__PURE__ */ new Set([1308]);
});
var tu, ru, iu, nu, yo, ou, So, su, au, bo, cu, lu, du, Co, To, Ea = y(() => {
  "use strict";
  tu = "addMissingAwait", ru = "addMissingNewOperator", iu = "fixOverrideModifier", nu = "annotateWithTypeFromJSDoc", yo = "fixAwaitInSyncFunction", ou = "fixClassDoesntImplementInheritedAbstractMember", So = "fixClassIncorrectlyImplementsInterface", su = "constructorForDerivedNeedSuperCall", au = "extendsInterfaceBecomesImplements", bo = "import", cu = "forgottenThisPropertyAccess", lu = "removeUnnecessaryAwait", du = "spelling", Co = "fixUnreachableCode", To = "unusedIdentifier";
});
var uu = {};
U(uu, { register: () => eS });
async function Zy(i9, t, e, r, n, o) {
  for (let s of n) for (let { codes: a, fixName: c } of i9) {
    if (o.isCancellationRequested) return;
    if (!a.has(s.code)) continue;
    let l = { ...R.toFileRangeRequestArgs(r, s.range), errorCodes: [+s.code] }, d = await e.execute("getCodeFixes", l, o);
    if (d.type !== "response") continue;
    let p = d.body?.find((u) => u.fixName === c);
    if (p) {
      Te.withFileCodeEdits(t, e, p.changes);
      break;
    }
  }
}
async function La(i9, t, e, r, n, o) {
  for (let s of n) for (let { codes: a, fixName: c } of i9) {
    if (o.isCancellationRequested) return;
    if (!a.has(s.code)) continue;
    let l = { ...R.toFileRangeRequestArgs(r, s.range), errorCodes: [+s.code] }, d = await e.execute("getCodeFixes", l, o);
    if (d.type !== "response" || !d.body?.length) continue;
    let p = d.body?.find((S) => S.fixName === c);
    if (!p) continue;
    if (!p.fixId) {
      Te.withFileCodeEdits(t, e, p.changes);
      return;
    }
    let u = { scope: { type: "file", args: { file: r } }, fixId: p.fixId }, f = await e.execute("getCombinedCodeFix", u, o);
    if (f.type !== "response" || !f.body) return;
    Te.withFileCodeEdits(t, e, f.body.changes);
    return;
  }
}
function eS(i9, t, e, r) {
  return A([O(t, 2)], () => {
    let n = new Fa(t, e, r);
    return Pe.languages.registerCodeActionsProvider(i9.semantic, n, n.metadata);
  });
}
var Pe, Vi, Da, Aa, _a, Fa, fu = y(() => {
  "use strict";
  Pe = m(require("vscode"));
  Ia();
  Ea();
  W();
  X();
  oe();
  Vi = class extends Pe.CodeAction {
  }, Da = class i9 extends Vi {
    static {
      this.kind = Pe.CodeActionKind.SourceFixAll.append("ts");
    }
    constructor() {
      super(Pe.l10n.t("Fix all fixable JS/TS issues"), i9.kind);
    }
    async build(t, e, r, n) {
      this.edit = new Pe.WorkspaceEdit(), await Zy([{ codes: Qp, fixName: So }, { codes: Zp, fixName: yo }], this.edit, t, e, r, n), await La([{ codes: vo, fixName: Co }], this.edit, t, e, r, n);
    }
  }, Aa = class i9 extends Vi {
    static {
      this.kind = Pe.CodeActionKind.Source.append("removeUnused").append("ts");
    }
    constructor() {
      super(Pe.l10n.t("Remove all unused code"), i9.kind);
    }
    async build(t, e, r, n) {
      this.edit = new Pe.WorkspaceEdit(), await La([{ codes: ho, fixName: To }], this.edit, t, e, r, n);
    }
  }, _a = class i9 extends Vi {
    static {
      this.kind = Pe.CodeActionKind.Source.append("addMissingImports").append("ts");
    }
    constructor() {
      super(Pe.l10n.t("Add all missing imports"), i9.kind);
    }
    async build(t, e, r, n) {
      this.edit = new Pe.WorkspaceEdit(), await La([{ codes: Yp, fixName: bo }], this.edit, t, e, r, n);
    }
  }, Fa = class i9 {
    constructor(t, e, r) {
      this.client = t;
      this.fileConfigurationManager = e;
      this.diagnosticsManager = r;
    }
    static {
      this.kindProviders = [Da, Aa, _a];
    }
    get metadata() {
      return { providedCodeActionKinds: i9.kindProviders.map((t) => t.kind) };
    }
    async provideCodeActions(t, e, r, n) {
      if (!r.only || !Pe.CodeActionKind.Source.intersects(r.only)) return;
      let o = this.client.toOpenTsFilePath(t);
      if (!o) return;
      let s = this.getFixAllActions(r.only), a = this.diagnosticsManager.getDiagnostics(t.uri);
      if (!a.length) return s;
      if (await this.fileConfigurationManager.ensureConfigurationForDocument(t, n), !n.isCancellationRequested) return await Promise.all(s.map((c) => c.build(this.client, o, a, n))), s;
    }
    getFixAllActions(t) {
      return i9.kindProviders.filter((e) => t.intersects(e.kind)).map((e) => new e());
    }
  };
});
var gu = {};
U(gu, { register: () => tS });
function tS(i9, t) {
  return St.languages.registerFoldingRangeProvider(i9.syntax, new Ma(t));
}
var St, Ma, mu = y(() => {
  "use strict";
  St = m(require("vscode"));
  W();
  Xe();
  Ma = class i9 {
    constructor(t) {
      this.client = t;
    }
    async provideFoldingRanges(t, e, r) {
      let n = this.client.toOpenTsFilePath(t);
      if (!n) return;
      let o = { file: n }, s = await this.client.execute("getOutliningSpans", o, r);
      if (!(s.type !== "response" || !s.body)) return me(s.body.map((a) => this.convertOutliningSpan(a, t)));
    }
    convertOutliningSpan(t, e) {
      let r = R.fromTextSpan(t.textSpan), n = i9.getFoldingRangeKind(t);
      if (t.kind === "comment") {
        let a = e.lineAt(r.start.line).text;
        if (/\/\/\s*#endregion/gi.test(a)) return;
      }
      let o = r.start.line, s = this.adjustFoldingEnd(r, e);
      return new St.FoldingRange(o, s, n);
    }
    static {
      this.foldEndPairCharacters = ["}", "]", ")", "`", ">"];
    }
    adjustFoldingEnd(t, e) {
      if (t.end.character > 0) {
        let r = e.getText(new St.Range(t.end.translate(0, -1), t.end));
        if (i9.foldEndPairCharacters.includes(r)) return Math.max(t.end.line - 1, t.start.line);
      }
      return t.end.line;
    }
    static getFoldingRangeKind(t) {
      switch (t.kind) {
        case "comment":
          return St.FoldingRangeKind.Comment;
        case "region":
          return St.FoldingRangeKind.Region;
        case "imports":
          return St.FoldingRangeKind.Imports;
        case "code":
        default:
          return;
      }
    }
  };
});
var hu = {};
U(hu, { register: () => rS });
function rS(i9, t, e, r) {
  return A([zr("format.enabled", { fallbackSection: t.id, fallbackSubSectionNameOverride: "format.enable" })], () => {
    let n = new Oa(e, r);
    return ji.Disposable.from(ji.languages.registerOnTypeFormattingEditProvider(i9.syntax, n, ";", "}", `
`), ji.languages.registerDocumentRangeFormattingEditProvider(i9.syntax, n));
  });
}
var ji, Oa, vu = y(() => {
  "use strict";
  ji = m(require("vscode"));
  W();
  oe();
  Oa = class {
    constructor(t, e) {
      this.client = t;
      this.fileConfigurationManager = e;
    }
    async provideDocumentRangeFormattingEdits(t, e, r, n) {
      let o = this.client.toOpenTsFilePath(t);
      if (!o) return;
      await this.fileConfigurationManager.ensureConfigurationOptions(t, r, n);
      let s = R.toFormattingRequestArgs(o, e), a = await this.client.execute("format", s, n);
      if (!(a.type !== "response" || !a.body)) return a.body.map(Yt.fromCodeEdit);
    }
    async provideOnTypeFormattingEdits(t, e, r, n, o) {
      let s = this.client.toOpenTsFilePath(t);
      if (!s) return;
      await this.fileConfigurationManager.ensureConfigurationOptions(t, n, o);
      let a = { ...I.toFileLocationRequestArgs(s, e), key: r }, c = await this.client.execute("formatonkey", a, o);
      if (c.type !== "response" || !c.body) return [];
      let l = [];
      for (let d of c.body) {
        let p = Yt.fromCodeEdit(d), u = p.range;
        if (u.start.character === 0 && u.start.line === u.end.line && p.newText === "") {
          let f = t.lineAt(u.start.line).text;
          (f.trim().length > 0 || f.length > u.end.character) && l.push(p);
        } else l.push(p);
      }
      return l;
    }
  };
});
var yu = {};
U(yu, { register: () => nS });
function nS(i9, t, e) {
  return A([O(t, 1, 2)], () => bt.languages.registerHoverProvider(i9.syntax, new Na(t, e)));
}
var bt, Na, Su = y(() => {
  "use strict";
  bt = m(require("vscode"));
  X();
  oe();
  ao();
  W();
  pe();
  Na = class {
    constructor(t, e) {
      this.client = t;
      this.fileConfigurationManager = e;
    }
    async provideHover(t, e, r, n) {
      let o = this.client.toOpenTsFilePath(t);
      if (!o) return;
      let s;
      this.client.apiVersion.gte(P.v590) && (s = Math.max(0, this.getPreviousLevel(n?.previousHover) + (n?.verbosityDelta ?? 0)));
      let a = { ...I.toFileLocationRequestArgs(o, e), verbosityLevel: s }, c = await this.client.interruptGetErr(async () => (await this.fileConfigurationManager.ensureConfigurationForDocument(t, r), this.client.execute("quickinfo", a, r)));
      if (c.type !== "response" || !c.body) return;
      let l = this.getContents(t.uri, c.body, c._serverType), d = R.fromTextSpan(c.body), p = s !== void 0 ? new bt.VerboseHover(l, d, c.body.canIncreaseVerbosityLevel, s !== 0) : new bt.Hover(l, d);
      return s !== void 0 && (this.lastHoverAndLevel = [p, s]), p;
    }
    getContents(t, e, r) {
      let n = [];
      if (e.displayString) {
        let s = [];
        r === "syntax" && this.client.hasCapabilityForResource(t, 2) && s.push(bt.l10n.t({ message: "(loading...)", comment: ["Prefix displayed for hover entries while the server is still loading"] })), s.push(e.displayString), n.push(new bt.MarkdownString().appendCodeblock(s.join(" "), "typescript"));
      }
      let o = Mi(e.documentation, e.tags, this.client, t);
      return n.push(o), n;
    }
    getPreviousLevel(t) {
      return t && this.lastHoverAndLevel?.[0] === t ? this.lastHoverAndLevel[1] : 0;
    }
  };
});
var Cu = {};
U(Cu, { register: () => oS });
function oS(i9, t) {
  return A([O(t, 2)], () => bu.languages.registerImplementationProvider(i9.semantic, new qa(t)));
}
var bu, qa, Tu = y(() => {
  "use strict";
  bu = m(require("vscode"));
  X();
  mo();
  oe();
  qa = class extends Vt {
    provideImplementation(t, e, r) {
      return this.getSymbolLocations("implementation", t, e, r);
    }
  };
});
var Pu = {};
U(Pu, { register: () => lS });
function aS(i9) {
  switch (i9) {
    case "Parameter":
      return Ve.InlayHintKind.Parameter;
    case "Type":
      return Ve.InlayHintKind.Type;
    case "Enum":
      return;
    default:
      return;
  }
}
function cS(i9, t) {
  let e = sa(t, i9.id);
  return e.includeInlayParameterNameHints === "literals" || e.includeInlayParameterNameHints === "all" || e.includeInlayEnumMemberValueHints || e.includeInlayFunctionLikeReturnTypeHints || e.includeInlayFunctionParameterTypeHints || e.includeInlayPropertyDeclarationTypeHints || e.includeInlayVariableTypeHints;
}
function lS(i9, t, e, r, n) {
  return A([ht(e, Po.minVersion), O(e, 2)], () => {
    let o = new Po(t, e, r, n);
    return Ve.languages.registerInlayHintsProvider(i9.semantic, o);
  });
}
var Ve, sS, Po, xu = y(() => {
  "use strict";
  Ve = m(require("vscode"));
  pe();
  W();
  X();
  ne();
  Y();
  aa();
  oe();
  sS = Object.values(ft), Po = class extends T {
    constructor(e, r, n, o) {
      super();
      this.language = e;
      this.client = r;
      this.fileConfigurationManager = n;
      this.telemetryReporter = o;
      this._onDidChangeInlayHints = this._register(new Ve.EventEmitter());
      this.onDidChangeInlayHints = this._onDidChangeInlayHints.event;
      this.hasReportedTelemetry = false;
      this._register(Ve.workspace.onDidChangeConfiguration((s) => {
        sS.some((a) => s.affectsConfiguration(De + "." + a) || s.affectsConfiguration(e.id + "." + a)) && this._onDidChangeInlayHints.fire();
      })), this._register(Ve.workspace.onDidChangeTextDocument((s) => {
        e.languageIds.includes(s.document.languageId) && this._onDidChangeInlayHints.fire();
      }));
    }
    static {
      this.minVersion = P.v440;
    }
    async provideInlayHints(e, r, n) {
      let o = this.client.toOpenTsFilePath(e);
      if (!o || !cS(this.language, e)) return;
      let s = e.offsetAt(r.start), a = e.offsetAt(r.end) - s;
      if (await this.fileConfigurationManager.ensureConfigurationForDocument(e, n), n.isCancellationRequested) return;
      this.hasReportedTelemetry || (this.hasReportedTelemetry = true, this.telemetryReporter.logTelemetry("inlayHints.provide", {}));
      let c = await this.client.execute("provideInlayHints", { file: o, start: s, length: a }, n);
      if (!(c.type !== "response" || !c.success || !c.body)) return c.body.map((l) => {
        let d = new Ve.InlayHint(I.fromLocation(l.position), this.convertInlayHintText(l), aS(l.kind));
        return d.paddingLeft = l.whitespaceBefore, d.paddingRight = l.whitespaceAfter, d;
      });
    }
    convertInlayHintText(e) {
      return e.displayParts ? e.displayParts.map((r) => {
        let n = new Ve.InlayHintLabelPart(r.text);
        return r.span && (n.location = be.fromTextSpan(this.client.toResource(r.span.file), r.span)), n;
      }) : e.text;
    }
  };
});
var Ru = {};
U(Ru, { register: () => pS, templateToSnippet: () => wu });
function wu(i9) {
  let t = 1;
  return i9 = i9.replace(/\$/g, "\\$"), i9 = i9.replace(/^[ \t]*(?=(\/|[ ]\*))/gm, ""), i9 = i9.replace(/^(\/\*\*\s*\*[ ]*)$/m, (e) => e + "$0"), i9 = i9.replace(/\* @param([ ]\{\S+\})?\s+(\S+)[ \t]*$/gm, (e, r, n) => {
    let o = "* @param ";
    return r === " {any}" || r === " {*}" ? o += `{\${${t++}:*}} ` : r && (o += r + " "), o += n + ` \${${t++}}`, o;
  }), i9 = i9.replace(/\* @returns[ \t]*$/gm, `* @returns \${${t++}}`), new We.SnippetString(i9);
}
function pS(i9, t, e, r) {
  return We.languages.registerCompletionItemProvider(i9.syntax, new ja(e, t, r), "*");
}
var We, dS, Va, ja, ku = y(() => {
  "use strict";
  We = m(require("vscode"));
  W();
  ne();
  dS = new We.SnippetString(`/**
 * $0
 */`), Va = class extends We.CompletionItem {
    constructor(e, r) {
      super("/** */", We.CompletionItemKind.Text);
      this.document = e;
      this.position = r;
      this.detail = We.l10n.t("JSDoc comment"), this.sortText = "\0";
      let n = e.lineAt(r.line).text, o = n.slice(0, r.character).match(/\/\**\s*$/), s = n.slice(r.character).match(/^\s*\**\//), a = r.translate(0, o ? -o[0].length : 0), c = new We.Range(a, r.translate(0, s ? s[0].length : 0));
      this.range = { inserting: c, replacing: c };
    }
  }, ja = class {
    constructor(t, e, r) {
      this.client = t;
      this.language = e;
      this.fileConfigurationManager = r;
    }
    async provideCompletionItems(t, e, r) {
      if (!h("suggest.jsdoc.enabled", true, { scope: t, fallbackSection: this.language.id, fallbackSubSectionNameOverride: "suggest.completeJSDocs" })) return;
      let n = this.client.toOpenTsFilePath(t);
      if (!n || !this.isPotentiallyValidDocCompletionPosition(t, e)) return;
      let o = await this.client.interruptGetErr(async () => {
        await this.fileConfigurationManager.ensureConfigurationForDocument(t, r);
        let a = I.toFileLocationRequestArgs(n, e);
        return this.client.execute("docCommentTemplate", a, r);
      });
      if (o.type !== "response" || !o.body) return;
      let s = new Va(t, e);
      return o.body.newText === "/** */" ? s.insertText = dS : s.insertText = wu(o.body.newText), [s];
    }
    isPotentiallyValidDocCompletionPosition(t, e) {
      let r = t.lineAt(e.line).text, n = r.slice(0, e.character);
      if (!/^\s*$|\/\*\*\s*$|^\s*\/\*\*+\s*$/.test(n)) return false;
      let o = r.slice(e.character);
      return /^\s*(\*+\/)?\s*$/.test(o);
    }
  };
});
var Iu = {};
U(Iu, { register: () => uS });
function uS(i9, t) {
  return A([ht(t, xo.minVersion), O(t, 0)], () => wo.languages.registerLinkedEditingRangeProvider(i9.syntax, new xo(t)));
}
var wo, xo, Eu = y(() => {
  "use strict";
  wo = m(require("vscode"));
  pe();
  W();
  X();
  oe();
  xo = class {
    constructor(t) {
      this.client = t;
    }
    static {
      this.minVersion = P.v510;
    }
    async provideLinkedEditingRanges(t, e, r) {
      let n = this.client.toOpenTsFilePath(t);
      if (!n) return;
      let o = I.toFileLocationRequestArgs(n, e), s = await this.client.execute("linkedEditingRange", o, r);
      if (s.type !== "response" || !s.body) return;
      let a = s.body.wordPattern ? new RegExp(s.body.wordPattern) : void 0;
      return new wo.LinkedEditingRanges(s.body.ranges.map((c) => R.fromTextSpan(c)), a);
    }
  };
});
var Du = {};
U(Du, { register: () => hS });
function hS(i9, t, e, r, n) {
  let o = [];
  for (let s of [fS, gS, mS]) o.push(A([ht(t, s.minVersion ?? P.defaultVersion), O(t, 2)], () => {
    let a = new Wa(t, s, e, r, n);
    return xe.Disposable.from(xe.languages.registerCodeActionsProvider(i9.semantic, a, { providedCodeActionKinds: [s.kind] }));
  }), ...s.commandIds.map((a) => e.register({ id: a, execute() {
    return xe.commands.executeCommand("editor.action.sourceAction", { kind: s.kind.value, apply: "first" });
  } })));
  return xe.Disposable.from(...o);
}
var xe, fS, gS, mS, Ro, Ua, Wa, Au = y(() => {
  "use strict";
  xe = m(require("vscode"));
  pe();
  Oe();
  W();
  X();
  Et();
  oe();
  fS = { commandIds: [], title: xe.l10n.t("Organize Imports"), kind: xe.CodeActionKind.SourceOrganizeImports, mode: "All" }, gS = { commandIds: ["typescript.sortImports", "javascript.sortImports"], minVersion: P.v430, title: xe.l10n.t("Sort Imports"), kind: xe.CodeActionKind.Source.append("sortImports"), mode: "SortAndCombine" }, mS = { commandIds: ["typescript.removeUnusedImports", "javascript.removeUnusedImports"], minVersion: P.v490, title: xe.l10n.t("Remove Unused Imports"), kind: xe.CodeActionKind.Source.append("removeUnusedImports"), mode: "RemoveUnused" }, Ro = class i9 {
    constructor(t) {
      this.telemetryReporter = t;
      this.id = i9.ID;
    }
    static {
      this.ID = "_typescript.didOrganizeImports";
    }
    async execute() {
      this.telemetryReporter.logTelemetry("organizeImports.execute", {});
    }
  }, Ua = class extends xe.CodeAction {
    constructor(e, r, n) {
      super(e, r);
      this.document = n;
    }
  }, Wa = class {
    constructor(t, e, r, n, o) {
      this.client = t;
      this.commandMetadata = e;
      this.fileConfigManager = n;
      r.register(new Ro(o));
    }
    provideCodeActions(t, e, r, n) {
      return r.only?.contains(this.commandMetadata.kind) ? this.client.toOpenTsFilePath(t) ? [new Ua(this.commandMetadata.title, this.commandMetadata.kind, t)] : [] : [];
    }
    async resolveCodeAction(t, e) {
      let r = await this.client.interruptGetErr(async () => {
        if (await this.fileConfigManager.ensureConfigurationForDocument(t.document, e), e.isCancellationRequested) return;
        let n = this.client.toOpenTsFilePath(t.document);
        if (!n) return;
        let o = { scope: { type: "file", args: { file: n } }, skipDestructiveCodeActions: this.commandMetadata.mode === "SortAndCombine", mode: fa.toProtocolOrganizeImportsMode(this.commandMetadata.mode) };
        return this.client.execute("organizeImports", o, le);
      });
      if (!(r?.type !== "response" || !r.body || e.isCancellationRequested)) return r.body.length && (t.edit = Te.fromFileCodeEdits(this.client, r.body)), t.command = { command: Ro.ID, title: "", arguments: [] }, t;
    }
  };
});
var we, tr = y(() => {
  "use strict";
  we = class i9 {
    constructor(t) {
      this.executor = t;
      this._didRun = false;
    }
    get hasValue() {
      return this._didRun;
    }
    get value() {
      if (!this._didRun) try {
        this._value = this.executor();
      } catch (t) {
        this._error = t;
      } finally {
        this._didRun = true;
      }
      if (this._error) throw this._error;
      return this._value;
    }
    get rawValue() {
      return this._value;
    }
    map(t) {
      return new i9(() => t(this.value));
    }
  };
});
var Fu = {};
U(Fu, { register: () => yS });
function vS(i9, t) {
  if (i9 instanceof Qr) return false;
  let e = _u.get(i9.tsAction.fixName);
  return e ? t.every((r) => {
    if (r === i9 || r instanceof Qr) return true;
    let n = _u.get(r.tsAction.fixName);
    return !n || n.priority < e.priority ? true : !(n.priority > e.priority || e.thereCanOnlyBeOne && i9.tsAction.fixName === r.tsAction.fixName);
  }) : false;
}
function yS(i9, t, e, r, n, o) {
  return A([O(t, 2)], () => Ct.languages.registerCodeActionsProvider(i9.semantic, new Do(t, e, r, n, o), Do.metadata));
}
var Ct, ko, Io, $a, Eo, Qr, Ba, Ha, Do, Ka, _u, Lu = y(() => {
  "use strict";
  Ct = m(require("vscode"));
  Ea();
  W();
  X();
  Et();
  tr();
  ki();
  Ca();
  oe();
  ko = class i9 {
    constructor(t, e, r) {
      this.client = t;
      this.diagnosticManager = e;
      this.telemetryReporter = r;
      this.id = i9.ID;
    }
    static {
      this.ID = "_typescript.applyCodeActionCommand";
    }
    async execute({ document: t, action: e, diagnostic: r, followupAction: n }) {
      this.telemetryReporter.logTelemetry("quickFix.execute", { fixName: e.fixName }), this.diagnosticManager.deleteDiagnostic(t.uri, r);
      let o = await no(this.client, e.commands, le);
      return await n?.execute(), o;
    }
  }, Io = class i9 {
    constructor(t, e) {
      this.client = t;
      this.telemetryReporter = e;
      this.id = i9.ID;
    }
    static {
      this.ID = "_typescript.applyFixAllCodeAction";
    }
    async execute(t) {
      this.telemetryReporter.logTelemetry("quickFixAll.execute", { fixName: t.action.tsAction.fixName }), t.action.combinedResponse && await no(this.client, t.action.combinedResponse.body.commands, le);
    }
  }, $a = class i9 {
    constructor(t) {
      this._values = t;
    }
    static from(t) {
      let e = /* @__PURE__ */ new Map();
      for (let r of t) e.set(i9.key(r), r);
      return new i9(e);
    }
    static key(t) {
      let { start: e, end: r } = t.range;
      return `${t.code}-${e.line},${e.character}-${r.line},${r.character}`;
    }
    get values() {
      return this._values.values();
    }
    get size() {
      return this._values.size;
    }
  }, Eo = class extends Ct.CodeAction {
    constructor(e, r, n) {
      super(r, n);
      this.tsAction = e;
    }
  }, Qr = class extends Eo {
    constructor(e, r, n, o) {
      super(e, n, o);
      this.file = r;
    }
  }, Ba = class {
    constructor() {
      this._actions = /* @__PURE__ */ new Set();
      this._fixAllActions = /* @__PURE__ */ new Map();
      this._aiActions = /* @__PURE__ */ new Set();
    }
    *values() {
      yield* this._actions, yield* this._aiActions;
    }
    addAction(t) {
      if (t.isAI) {
        this._aiActions.add(t);
        return;
      }
      for (let e of this._actions) t.tsAction.fixName === e.tsAction.fixName && rt(t.edit, e.edit) && this._actions.delete(e);
      if (this._actions.add(t), t.tsAction.fixId) {
        let e = this._fixAllActions.get(t.tsAction.fixId);
        e && (this._actions.delete(e), this._actions.add(e));
      }
    }
    addFixAllAction(t, e) {
      let r = this._fixAllActions.get(t);
      r && this._actions.delete(r), this.addAction(e), this._fixAllActions.set(t, e);
    }
    hasFixAllAction(t) {
      return this._fixAllActions.has(t);
    }
  }, Ha = class {
    constructor(t) {
      this.client = t;
      this.fixableDiagnosticCodes = new we(() => this.client.execute("getSupportedCodeFixes", null, le).then((t2) => t2.type === "response" ? t2.body || [] : []).then((t2) => new Set(t2)));
    }
    async getFixableDiagnosticsForContext(t) {
      let e = await this.fixableDiagnosticCodes.value;
      return $a.from(t.filter((r) => typeof r.code < "u" && e.has(r.code + "")));
    }
  }, Do = class i9 {
    constructor(t, e, r, n, o) {
      this.client = t;
      this.formattingConfigurationManager = e;
      this.diagnosticsManager = n;
      r.register(new ko(t, n, o)), r.register(new Io(t, o)), this.supportedCodeActionProvider = new Ha(t);
    }
    static {
      this._maxCodeActionsPerFile = 1e3;
    }
    static {
      this.metadata = { providedCodeActionKinds: [Ct.CodeActionKind.QuickFix] };
    }
    async provideCodeActions(t, e, r, n) {
      let o = this.client.toOpenTsFilePath(t);
      if (!o) return;
      let s = r.diagnostics;
      if (this.client.bufferSyncSupport.hasPendingDiagnostics(t.uri)) {
        if (await new Promise((p) => {
          setTimeout(p, 500);
        }), n.isCancellationRequested) return;
        let d = [];
        for (let p of this.diagnosticsManager.getDiagnostics(t.uri)) if (e.intersection(p.range) && d.push(p) > i9._maxCodeActionsPerFile) break;
        s = d;
      }
      let a = await this.supportedCodeActionProvider.getFixableDiagnosticsForContext(s);
      if (!a.size || n.isCancellationRequested || (await this.formattingConfigurationManager.ensureConfigurationForDocument(t, n), n.isCancellationRequested)) return;
      let c = new Ba();
      for (let d of a.values) if (await this.getFixesForDiagnostic(t, o, d, c, n), n.isCancellationRequested) return;
      let l = Array.from(c.values());
      for (let d of l) d.isPreferred = vS(d, l);
      return l;
    }
    async resolveCodeAction(t, e) {
      if (!(t instanceof Qr) || !t.tsAction.fixId) return t;
      let r = { scope: { type: "file", args: { file: t.file } }, fixId: t.tsAction.fixId }, n = await this.client.execute("getCombinedCodeFix", r, e);
      return n.type === "response" && (t.combinedResponse = n, t.edit = Te.fromFileCodeEdits(this.client, n.body.changes)), t;
    }
    async getFixesForDiagnostic(t, e, r, n, o) {
      let s = { ...R.toFileRangeRequestArgs(e, r.range), errorCodes: [+r.code] }, a = await this.client.execute("getCodeFixes", s, o);
      if (a.type !== "response" || !a.body) return n;
      for (let c of a.body) {
        for (let l of this.getFixesForTsCodeAction(t, r, c)) n.addAction(l);
        this.addFixAllForTsCodeAction(n, t.uri, e, r, c);
      }
      return n;
    }
    getFixesForTsCodeAction(t, e, r) {
      let n = [], o = new Eo(r, r.description, Ct.CodeActionKind.QuickFix);
      return o.edit = Sa(this.client, r), o.diagnostics = [e], o.ranges = [e.range], o.command = { command: ko.ID, arguments: [{ action: r, diagnostic: e, document: t }], title: "" }, n.push(o), n;
    }
    addFixAllForTsCodeAction(t, e, r, n, o) {
      if (!o.fixId || t.hasFixAllAction(o.fixId) || !this.diagnosticsManager.getDiagnostics(e).some((a) => a === n ? false : a.code === n.code || Ka.has(a.code) && Ka.get(a.code) === Ka.get(n.code))) return t;
      let s = new Qr(o, r, o.fixAllDescription || Ct.l10n.t("{0} (Fix all in file)", o.description), Ct.CodeActionKind.QuickFix);
      return s.diagnostics = [n], s.ranges = [n.range], s.command = { command: Io.ID, arguments: [{ action: s }], title: "" }, t.addFixAllAction(o.fixId, s), t;
    }
  }, Ka = /* @__PURE__ */ new Map([[2339, 2339], [2345, 2339]]), _u = /* @__PURE__ */ new Map([[nu, { priority: 2 }], [su, { priority: 2 }], [au, { priority: 2 }], [yo, { priority: 2 }], [lu, { priority: 2 }], [So, { priority: 3 }], [ou, { priority: 3 }], [Co, { priority: 2 }], [To, { priority: 2 }], [cu, { priority: 2 }], [du, { priority: 0 }], [tu, { priority: 2 }], [iu, { priority: 2 }], [ru, { priority: 2 }], [bo, { priority: 1, thereCanOnlyBeOne: true }]]);
});
function Yr(i9) {
  var t = Mu[i9];
  if (t !== void 0) return t.exports;
  var e = Mu[i9] = { exports: {} };
  return SS[i9](e, e.exports, Yr), e.exports;
}
var SS, Mu, Ou, Nu, Ui, Ao, Tt, za = y(() => {
  SS = { 975(i9) {
    function t(n) {
      if (typeof n != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(n));
    }
    function e(n, o) {
      for (var s, a = "", c = 0, l = -1, d = 0, p = 0; p <= n.length; ++p) {
        if (p < n.length) s = n.charCodeAt(p);
        else {
          if (s === 47) break;
          s = 47;
        }
        if (s === 47) {
          if (!(l === p - 1 || d === 1)) if (l !== p - 1 && d === 2) {
            if (a.length < 2 || c !== 2 || a.charCodeAt(a.length - 1) !== 46 || a.charCodeAt(a.length - 2) !== 46) {
              if (a.length > 2) {
                var u = a.lastIndexOf("/");
                if (u !== a.length - 1) {
                  u === -1 ? (a = "", c = 0) : c = (a = a.slice(0, u)).length - 1 - a.lastIndexOf("/"), l = p, d = 0;
                  continue;
                }
              } else if (a.length === 2 || a.length === 1) {
                a = "", c = 0, l = p, d = 0;
                continue;
              }
            }
            o && (a.length > 0 ? a += "/.." : a = "..", c = 2);
          } else a.length > 0 ? a += "/" + n.slice(l + 1, p) : a = n.slice(l + 1, p), c = p - l - 1;
          l = p, d = 0;
        } else s === 46 && d !== -1 ? ++d : d = -1;
      }
      return a;
    }
    var r = { resolve: function() {
      for (var n, o = "", s = false, a = arguments.length - 1; a >= -1 && !s; a--) {
        var c;
        a >= 0 ? c = arguments[a] : (n === void 0 && (n = process.cwd()), c = n), t(c), c.length !== 0 && (o = c + "/" + o, s = c.charCodeAt(0) === 47);
      }
      return o = e(o, !s), s ? o.length > 0 ? "/" + o : "/" : o.length > 0 ? o : ".";
    }, normalize: function(n) {
      if (t(n), n.length === 0) return ".";
      var o = n.charCodeAt(0) === 47, s = n.charCodeAt(n.length - 1) === 47;
      return (n = e(n, !o)).length !== 0 || o || (n = "."), n.length > 0 && s && (n += "/"), o ? "/" + n : n;
    }, isAbsolute: function(n) {
      return t(n), n.length > 0 && n.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0) return ".";
      for (var n, o = 0; o < arguments.length; ++o) {
        var s = arguments[o];
        t(s), s.length > 0 && (n === void 0 ? n = s : n += "/" + s);
      }
      return n === void 0 ? "." : r.normalize(n);
    }, relative: function(n, o) {
      if (t(n), t(o), n === o || (n = r.resolve(n)) === (o = r.resolve(o))) return "";
      for (var s = 1; s < n.length && n.charCodeAt(s) === 47; ++s) ;
      for (var a = n.length, c = a - s, l = 1; l < o.length && o.charCodeAt(l) === 47; ++l) ;
      for (var d = o.length - l, p = c < d ? c : d, u = -1, f = 0; f <= p; ++f) {
        if (f === p) {
          if (d > p) {
            if (o.charCodeAt(l + f) === 47) return o.slice(l + f + 1);
            if (f === 0) return o.slice(l + f);
          } else c > p && (n.charCodeAt(s + f) === 47 ? u = f : f === 0 && (u = 0));
          break;
        }
        var S = n.charCodeAt(s + f);
        if (S !== o.charCodeAt(l + f)) break;
        S === 47 && (u = f);
      }
      var F = "";
      for (f = s + u + 1; f <= a; ++f) f !== a && n.charCodeAt(f) !== 47 || (F.length === 0 ? F += ".." : F += "/..");
      return F.length > 0 ? F + o.slice(l + u) : (l += u, o.charCodeAt(l) === 47 && ++l, o.slice(l));
    }, _makeLong: function(n) {
      return n;
    }, dirname: function(n) {
      if (t(n), n.length === 0) return ".";
      for (var o = n.charCodeAt(0), s = o === 47, a = -1, c = true, l = n.length - 1; l >= 1; --l) if ((o = n.charCodeAt(l)) === 47) {
        if (!c) {
          a = l;
          break;
        }
      } else c = false;
      return a === -1 ? s ? "/" : "." : s && a === 1 ? "//" : n.slice(0, a);
    }, basename: function(n, o) {
      if (o !== void 0 && typeof o != "string") throw new TypeError('"ext" argument must be a string');
      t(n);
      var s, a = 0, c = -1, l = true;
      if (o !== void 0 && o.length > 0 && o.length <= n.length) {
        if (o.length === n.length && o === n) return "";
        var d = o.length - 1, p = -1;
        for (s = n.length - 1; s >= 0; --s) {
          var u = n.charCodeAt(s);
          if (u === 47) {
            if (!l) {
              a = s + 1;
              break;
            }
          } else p === -1 && (l = false, p = s + 1), d >= 0 && (u === o.charCodeAt(d) ? --d === -1 && (c = s) : (d = -1, c = p));
        }
        return a === c ? c = p : c === -1 && (c = n.length), n.slice(a, c);
      }
      for (s = n.length - 1; s >= 0; --s) if (n.charCodeAt(s) === 47) {
        if (!l) {
          a = s + 1;
          break;
        }
      } else c === -1 && (l = false, c = s + 1);
      return c === -1 ? "" : n.slice(a, c);
    }, extname: function(n) {
      t(n);
      for (var o = -1, s = 0, a = -1, c = true, l = 0, d = n.length - 1; d >= 0; --d) {
        var p = n.charCodeAt(d);
        if (p !== 47) a === -1 && (c = false, a = d + 1), p === 46 ? o === -1 ? o = d : l !== 1 && (l = 1) : o !== -1 && (l = -1);
        else if (!c) {
          s = d + 1;
          break;
        }
      }
      return o === -1 || a === -1 || l === 0 || l === 1 && o === a - 1 && o === s + 1 ? "" : n.slice(o, a);
    }, format: function(n) {
      if (n === null || typeof n != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof n);
      return (function(o, s) {
        var a = s.dir || s.root, c = s.base || (s.name || "") + (s.ext || "");
        return a ? a === s.root ? a + c : a + "/" + c : c;
      })(0, n);
    }, parse: function(n) {
      t(n);
      var o = { root: "", dir: "", base: "", ext: "", name: "" };
      if (n.length === 0) return o;
      var s, a = n.charCodeAt(0), c = a === 47;
      c ? (o.root = "/", s = 1) : s = 0;
      for (var l = -1, d = 0, p = -1, u = true, f = n.length - 1, S = 0; f >= s; --f) if ((a = n.charCodeAt(f)) !== 47) p === -1 && (u = false, p = f + 1), a === 46 ? l === -1 ? l = f : S !== 1 && (S = 1) : l !== -1 && (S = -1);
      else if (!u) {
        d = f + 1;
        break;
      }
      return l === -1 || p === -1 || S === 0 || S === 1 && l === p - 1 && l === d + 1 ? p !== -1 && (o.base = o.name = d === 0 && c ? n.slice(1, p) : n.slice(d, p)) : (d === 0 && c ? (o.name = n.slice(1, l), o.base = n.slice(1, p)) : (o.name = n.slice(d, l), o.base = n.slice(d, p)), o.ext = n.slice(l, p)), d > 0 ? o.dir = n.slice(0, d - 1) : c && (o.dir = "/"), o;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    r.posix = r, i9.exports = r;
  } }, Mu = {};
  Yr.d = (i9, t) => {
    for (var e in t) Yr.o(t, e) && !Yr.o(i9, e) && Object.defineProperty(i9, e, { enumerable: true, get: t[e] });
  }, Yr.o = (i9, t) => Object.prototype.hasOwnProperty.call(i9, t), typeof process == "object" ? Ou = process.platform === "win32" : typeof navigator == "object" && (Ou = navigator.userAgent.indexOf("Windows") >= 0);
  Nu = Yr(975), Ui = Nu.posix || Nu, Ao = "/";
  (function(i9) {
    i9.joinPath = function(t, ...e) {
      return t.with({ path: Ui.join(t.path, ...e) });
    }, i9.resolvePath = function(t, ...e) {
      let r = t.path, n = false;
      r[0] !== Ao && (r = Ao + r, n = true);
      let o = Ui.resolve(r, ...e);
      return n && o[0] === Ao && !t.authority && (o = o.substring(1)), t.with({ path: o });
    }, i9.dirname = function(t) {
      if (t.path.length === 0 || t.path === Ao) return t;
      let e = Ui.dirname(t.path);
      return e.length === 1 && e.charCodeAt(0) === 46 && (e = ""), t.with({ path: e });
    }, i9.basename = function(t) {
      return Ui.basename(t.path);
    }, i9.extname = function(t) {
      return Ui.extname(t.path);
    };
  })(Tt || (Tt = {}));
});
var qu, Wi, Vu = y(() => {
  "use strict";
  qu = m(require("vscode")), Wi = class i9 {
    constructor() {
      this.id = i9.ID;
    }
    static {
      this.ID = "_typescript.compositeCommand";
    }
    async execute(...t) {
      for (let e of t) await qu.commands.executeCommand(e.command, ...e.arguments ?? []);
    }
  };
});
var Bu = {};
U(Bu, { register: () => wS });
function ju(i9, t) {
  let e = new b.WorkspaceEdit();
  for (let r of t) {
    let n = i9.toResource(r.fileName);
    n.scheme === it && e.createFile(n, { ignoreIfExists: true });
  }
  return Te.withFileCodeEdits(e, i9, t), e;
}
function wS(i9, t, e, r, n, o) {
  return A([O(t, 2)], () => b.languages.registerCodeActionsProvider(i9.semantic, new Oo(t, e, r, n, o), Oo.metadata));
}
var jt, b, Fo, Lo, Mo, _o, Zr, Uu, Wu, Xa, Ku, bS, CS, TS, PS, xS, $u, Ki, Ga, Ja, Oo, Hu = y(() => {
  "use strict";
  jt = m(require("path")), b = m(require("vscode"));
  za();
  Js();
  nt();
  Kn();
  pe();
  Oe();
  W();
  X();
  Xe();
  Et();
  Vu();
  oe();
  Fo = class i9 {
    constructor(t) {
      this.telemetryReporter = t;
      this.id = i9.ID;
    }
    static {
      this.ID = "_typescript.didApplyRefactoring";
    }
    async execute(t) {
      this.telemetryReporter.logTelemetry("refactor.execute", { action: t.action, trigger: t.trigger });
    }
  }, Lo = class i9 {
    constructor(t) {
      this.client = t;
      this.id = i9.ID;
    }
    static {
      this.ID = "_typescript.selectRefactoring";
    }
    async execute(t) {
      if (!this.client.toOpenTsFilePath(t.document)) return;
      let r = await b.window.showQuickPick(t.refactor.actions.map((o) => ({ action: o, label: o.name, description: o.description })));
      if (!r) return;
      let n = new Ki(this.client, t.document, t.refactor, r.action, t.rangeOrSelection, t.trigger);
      if (await n.resolve(le), n.edit && !await b.workspace.applyEdit(n.edit, { isRefactoring: true })) {
        b.window.showErrorMessage(b.l10n.t("Could not apply refactoring"));
        return;
      }
      n.command && await b.commands.executeCommand(n.command.command, ...n.command.arguments ?? []);
    }
  }, Mo = class i9 {
    constructor(t, e) {
      this.client = t;
      this.didApplyCommand = e;
      this.id = i9.ID;
    }
    static {
      this.ID = "_typescript.moveToFileRefactoring";
    }
    async execute(t) {
      let e = this.client.toOpenTsFilePath(t.document);
      if (!e) return;
      let r = await this.getTargetFile(t.document, e, t.range);
      if (!r || r.toString() === e.toString()) return;
      let n = { ...R.toFileRangeRequestArgs(e, t.range), action: "Move to file", refactor: "Move to file", interactiveRefactorArguments: { targetFile: r } }, o = await this.client.execute("getEditsForRefactor", n, le);
      if (o.type !== "response" || !o.body) return;
      let s = ju(this.client, o.body.edits);
      if (!await b.workspace.applyEdit(s, { isRefactoring: true })) {
        b.window.showErrorMessage(b.l10n.t("Could not apply refactoring"));
        return;
      }
      await this.didApplyCommand.execute({ action: t.action.name, trigger: t.trigger });
    }
    async getTargetFile(t, e, r) {
      let n = R.toFileRangeRequestArgs(e, r), o = await this.client.execute("getMoveToRefactoringFileSuggestions", n, le);
      if (o.type !== "response" || !o.body) return;
      let s = o.body, a = { label: b.l10n.t("Select existing file...") }, c = { label: b.l10n.t("Enter new file path...") }, l = b.workspace.getWorkspaceFolder(t.uri), d = b.window.createQuickPick();
      d.ignoreFocusOut = true;
      let p = true, u = () => {
        let S = ["./", "../"].find((_) => d.value.startsWith(_));
        if (p === false && !S) return;
        p = !!S;
        let F = s.files.map((_) => {
          let j = this.client.toResource(_), H = Tt.dirname(j), C = Tt.basename(j), N;
          if (l) {
            if (j.scheme === Hr.file ? N = jt.relative(l.uri.fsPath, H.fsPath) : N = jt.posix.relative(l.uri.path, H.path), S) {
              let L = ((D) => D.startsWith("../") ? D : `./${D}`)(jt.relative(jt.dirname(t.uri.fsPath), j.fsPath));
              if (!L.startsWith(S)) return;
              N = L;
            }
          } else N = H.fsPath;
          return { file: _, label: Tt.basename(j), description: S ? N : jt.join(N, C) };
        });
        d.items = [a, c, { label: b.l10n.t("destination files"), kind: b.QuickPickItemKind.Separator }, ...me(F)];
      };
      d.title = b.l10n.t("Move to File"), d.placeholder = b.l10n.t("Enter file path"), d.matchOnDescription = true, d.onDidChangeValue(u), u();
      let f = await new Promise((S) => {
        d.onDidAccept(() => {
          S(d.selectedItems[0]), d.dispose();
        }), d.onDidHide(() => {
          S(void 0), d.dispose();
        }), d.show();
      });
      if (f) if (f === a) {
        let S = await b.window.showOpenDialog({ title: b.l10n.t("Select move destination"), openLabel: b.l10n.t("Move to File"), defaultUri: Tt.dirname(t.uri) });
        return S?.length ? this.client.toTsFilePath(S[0]) : void 0;
      } else if (f === c) {
        let S = await b.window.showSaveDialog({ title: b.l10n.t("Select move destination"), saveLabel: b.l10n.t("Move to File"), defaultUri: this.client.toResource(o.body.newFileName) });
        return S ? this.client.toTsFilePath(S) : void 0;
      } else return f.file;
    }
  }, _o = Object.freeze({ kind: b.CodeActionKind.RefactorExtract.append("function"), matches: (i9) => i9.name.startsWith("function_") }), Zr = Object.freeze({ kind: b.CodeActionKind.RefactorExtract.append("constant"), matches: (i9) => i9.name.startsWith("constant_") }), Uu = Object.freeze({ kind: b.CodeActionKind.RefactorExtract.append("type"), matches: (i9) => i9.name.startsWith("Extract to type alias") }), Wu = Object.freeze({ kind: b.CodeActionKind.RefactorExtract.append("interface"), matches: (i9) => i9.name.startsWith("Extract to interface") }), Xa = Object.freeze({ kind: b.CodeActionKind.RefactorMove.append("file"), matches: (i9) => i9.name.startsWith("Move to file") }), Ku = Object.freeze({ kind: b.CodeActionKind.RefactorMove.append("newFile"), matches: (i9) => i9.name.startsWith("Move to a new file") }), bS = Object.freeze({ kind: b.CodeActionKind.RefactorRewrite.append("import"), matches: (i9) => i9.name.startsWith("Convert namespace import") || i9.name.startsWith("Convert named imports") }), CS = Object.freeze({ kind: b.CodeActionKind.RefactorRewrite.append("export"), matches: (i9) => i9.name.startsWith("Convert default export") || i9.name.startsWith("Convert named export") }), TS = Object.freeze({ kind: b.CodeActionKind.RefactorRewrite.append("arrow").append("braces"), matches: (i9) => i9.name.startsWith("Convert default export") || i9.name.startsWith("Convert named export") }), PS = Object.freeze({ kind: b.CodeActionKind.RefactorRewrite.append("parameters").append("toDestructured"), matches: (i9) => i9.name.startsWith("Convert parameters to destructured object") }), xS = Object.freeze({ kind: b.CodeActionKind.RefactorRewrite.append("property").append("generateAccessors"), matches: (i9) => i9.name.startsWith("Generate 'get' and 'set' accessors") }), $u = [_o, Zr, Uu, Wu, Xa, Ku, bS, CS, TS, PS, xS], Ki = class i9 extends b.CodeAction {
    constructor(e, r, n, o, s, a) {
      let c = o.description;
      super(c, i9.getKind(o));
      this.client = e;
      this.document = r;
      this.refactor = n;
      this.action = o;
      this.range = s;
      o.notApplicableReason && (this.disabled = { reason: o.notApplicableReason }), this.command = { title: c, command: Fo.ID, arguments: [{ action: o.name, trigger: a }] };
    }
    async resolve(e) {
      let r = this.client.toOpenTsFilePath(this.document);
      if (!r) return;
      let n = { ...R.toFileRangeRequestArgs(r, this.range), refactor: this.refactor.name, action: this.action.name }, o = await this.client.execute("getEditsForRefactor", n, e);
      if (!(o.type !== "response" || !o.body)) {
        if (this.edit = ju(this.client, o.body.edits), !this.edit.size) {
          b.window.showErrorMessage(b.l10n.t("Could not apply refactoring"));
          return;
        }
        o.body.renameLocation && this.document.uri.scheme !== na && (this.command = { command: Wi.ID, title: "", arguments: me([this.command, { command: "editor.action.rename", arguments: [[this.document.uri, I.fromLocation(o.body.renameLocation)]] }]) });
      }
    }
    static getKind(e) {
      if (e.kind) return b.CodeActionKind.Empty.append(e.kind);
      let r = $u.find((n) => n.matches(e));
      return r ? r.kind : b.CodeActionKind.Refactor;
    }
  }, Ga = class extends b.CodeAction {
    constructor(t, e, r, n) {
      super(e.description, Xa.kind), e.notApplicableReason && (this.disabled = { reason: e.notApplicableReason }), this.command = { title: e.description, command: Mo.ID, arguments: [{ action: e, document: t, range: r, trigger: n }] };
    }
  }, Ja = class extends b.CodeAction {
    constructor(t, e, r, n) {
      super(t.description, b.CodeActionKind.Refactor), this.command = { title: t.description, command: Lo.ID, arguments: [{ document: e, refactor: t, rangeOrSelection: r, trigger: n }] };
    }
  }, Oo = class i9 {
    constructor(t, e, r, n, o) {
      this.client = t;
      this.cachedNavTree = e;
      this.formattingOptionsManager = r;
      let s = new Fo(o);
      n.register(s), n.register(new Wi()), n.register(new Lo(this.client)), n.register(new Mo(this.client, s));
    }
    static {
      this._declarationKinds = /* @__PURE__ */ new Set([g.module, g.class, g.interface, g.function, g.enum, g.type, g.const, g.variable, g.let]);
    }
    static isOnSignatureName(t, e) {
      if (this._declarationKinds.has(t.kind)) {
        if (t.nameSpan) {
          let r = R.fromTextSpan(t.nameSpan);
          if (e.intersection(r)) return true;
        }
        if (!t.nameSpan && /\bexport\b/.test(t.kindModifiers) && t.spans.length) {
          let r = R.fromTextSpan(t.spans[0]);
          if (e.intersection(new b.Range(r.start.line, 0, r.start.line, Number.MAX_SAFE_INTEGER))) return true;
        }
      }
      return t.childItems?.some((r) => this.isOnSignatureName(r, e)) ?? false;
    }
    static {
      this.metadata = { providedCodeActionKinds: [b.CodeActionKind.Refactor, ...$u.map((t) => t.kind)], documentation: [{ kind: b.CodeActionKind.Refactor, command: { command: Vr.id, title: b.l10n.t("Learn more about JS/TS refactorings") } }] };
    }
    async provideCodeActions(t, e, r, n) {
      if (!this.shouldTrigger(r, e) || !this.client.toOpenTsFilePath(t)) return;
      let o = await this.interruptGetErrIfNeeded(r, () => {
        let c = this.client.toOpenTsFilePath(t);
        if (!c) return;
        this.formattingOptionsManager.ensureConfigurationForDocument(t, n);
        let l = { ...R.toFileRangeRequestArgs(c, e), triggerReason: this.toTsTriggerReason(r), kind: r.only?.value, includeInteractiveActions: this.client.apiVersion.gte(P.v520) };
        return this.client.execute("getApplicableRefactors", l, n);
      });
      if (o?.type !== "response" || !o.body) return;
      let s = this.convertApplicableRefactors(t, r, o.body, e), a = me(await Promise.all(Array.from(s, async (c) => {
        if (!(this.client.apiVersion.lt(P.v430) && !r.only && c.kind?.value === "refactor.rewrite.function.returnType")) {
          if (this.client.apiVersion.lt(P.v540) && r.triggerKind === b.CodeActionTriggerKind.Automatic && (c.kind?.value === Ku.kind.value || c.kind?.value === Xa.kind.value)) {
            let l = this.client.toOpenTsFilePath(t);
            if (!l) return;
            let d = await this.cachedNavTree.execute(t, () => this.client.execute("navtree", { file: l }, n));
            if (d.type !== "response" || !d.body || !i9.isOnSignatureName(d.body, e)) return;
          }
          return c;
        }
      })));
      return r.only ? this.pruneInvalidActions(this.appendInvalidActions(a), r.only, 5) : a;
    }
    interruptGetErrIfNeeded(t, e) {
      return t.triggerKind === b.CodeActionTriggerKind.Invoke ? this.client.interruptGetErr(e) : e();
    }
    async resolveCodeAction(t, e) {
      return t instanceof Ki && await t.resolve(e), t;
    }
    toTsTriggerReason(t) {
      return t.triggerKind === b.CodeActionTriggerKind.Invoke ? "invoked" : "implicit";
    }
    *convertApplicableRefactors(t, e, r, n) {
      for (let o of r) if (o.inlineable === false) yield new Ja(o, t, n, e.triggerKind);
      else for (let s of o.actions) for (let a of this.refactorActionToCodeActions(t, e, o, s, n, o.actions)) yield a;
    }
    refactorActionToCodeActions(t, e, r, n, o, s) {
      let a = [];
      n.name === "Move to file" ? a.push(new Ga(t, n, o, e.triggerKind)) : a.push(new Ki(this.client, t, r, n, o, e.triggerKind));
      for (let c of a) c.isPreferred = i9.isPreferred(n, s);
      return a;
    }
    shouldTrigger(t, e) {
      return t.only && !b.CodeActionKind.Refactor.contains(t.only) ? false : t.triggerKind === b.CodeActionTriggerKind.Invoke ? true : e instanceof b.Selection;
    }
    static isPreferred(t, e) {
      if (Zr.matches(t)) {
        let r = (o) => {
          let s = o.match(/scope_(\d)/)?.[1];
          return s ? +s : void 0;
        }, n = r(t.name);
        return typeof n != "number" ? false : e.filter((o) => o !== t && Zr.matches(o)).every((o) => {
          let s = r(o.name);
          return typeof s == "number" ? n < s : true;
        });
      }
      return !!(Uu.matches(t) || Wu.matches(t));
    }
    appendInvalidActions(t) {
      if (this.client.apiVersion.gte(P.v400)) return t;
      if (!t.some((e) => e.kind && Zr.kind.contains(e.kind))) {
        let e = new b.CodeAction(b.l10n.t("Extract to constant"), Zr.kind);
        e.disabled = { reason: b.l10n.t("The current selection cannot be extracted") }, e.isPreferred = true, t.push(e);
      }
      if (!t.some((e) => e.kind && _o.kind.contains(e.kind))) {
        let e = new b.CodeAction(b.l10n.t("Extract to function"), _o.kind);
        e.disabled = { reason: b.l10n.t("The current selection cannot be extracted") }, t.push(e);
      }
      return t;
    }
    pruneInvalidActions(t, e, r) {
      if (this.client.apiVersion.lt(P.v400)) return t;
      let n = [], o = [], s = [];
      for (let l of t) {
        if (!l.disabled) {
          n.push(l);
          continue;
        }
        if (l.kind && (Zr.kind.contains(l.kind) || _o.kind.contains(l.kind))) {
          o.push(l);
          continue;
        }
        s.push(l);
      }
      let a = [];
      a.push(...o), a.push(...s);
      let c = a.filter((l) => !e || l.kind && e.contains(l.kind)).slice(0, r);
      return n.push(...c), n;
    }
  };
});
var Gu = {};
U(Gu, { register: () => RS });
function RS(i9, t) {
  return A([O(t, 1, 2)], () => zu.languages.registerReferenceProvider(i9.syntax, new Qa(t)));
}
var zu, Qa, Ju = y(() => {
  "use strict";
  zu = m(require("vscode"));
  W();
  X();
  oe();
  Qa = class {
    constructor(t) {
      this.client = t;
    }
    async provideReferences(t, e, r, n) {
      let o = this.client.toOpenTsFilePath(t);
      if (!o) return [];
      let s = I.toFileLocationRequestArgs(o, e), a = await this.client.execute("references", s, n);
      if (a.type !== "response" || !a.body) return [];
      let c = [];
      for (let l of a.body.refs) {
        if (!r.includeDeclaration && l.isDefinition) continue;
        let d = this.client.toResource(l.file), p = be.fromTextSpan(d, l);
        c.push(p);
      }
      return c;
    }
  };
});
var Xu = {};
U(Xu, { register: () => kS });
function kS(i9, t, e, r) {
  return A([O(e, 2)], () => at.languages.registerRenameProvider(i9.semantic, new Ya(t, e, r)));
}
var st, at, Ya, Qu = y(() => {
  "use strict";
  st = m(require("path")), at = m(require("vscode"));
  Je();
  pe();
  W();
  X();
  ne();
  oe();
  Ya = class {
    constructor(t, e, r) {
      this.language = t;
      this.client = e;
      this.fileConfigurationManager = r;
    }
    async prepareRename(t, e, r) {
      let n = await this.execRename(t, e, r);
      if (n) switch (n.type) {
        case "rename": {
          let o = n.body.info;
          return o.canRename ? R.fromTextSpan(o.triggerSpan) : Promise.reject(o.localizedErrorMessage);
        }
        case "jsxLinkedEditing":
          return n.spans.map(R.fromTextSpan).find((o) => o.contains(e));
      }
    }
    async provideRenameEdits(t, e, r, n) {
      let o = this.client.toOpenTsFilePath(t);
      if (!o) return;
      let s = await this.execRename(t, e, n);
      if (!(!s || n.isCancellationRequested)) switch (s.type) {
        case "rename": {
          let a = s.body.info;
          if (!a.canRename) return Promise.reject(a.localizedErrorMessage);
          if (a.fileToRename) {
            let c = await this.renameFile(a.fileToRename, a.fullDisplayName, r, n);
            return c || Promise.reject(at.l10n.t("An error occurred while renaming file"));
          }
          return this.updateLocs(s.body.locs, r);
        }
        case "jsxLinkedEditing":
          return this.updateLocs([{ file: o, locs: s.spans.map((a) => ({ ...a })) }], r);
      }
    }
    async execRename(t, e, r) {
      let n = this.client.toOpenTsFilePath(t);
      if (!n) return;
      if (this.client.apiVersion.gte(P.v510) && h("preferences.renameMatchingJsxTags", true, { scope: t, fallbackSection: this.language.id }) && this.looksLikePotentialJsxTagContext(t, e)) {
        let s = I.toFileLocationRequestArgs(n, e), a = await this.client.execute("linkedEditingRange", s, r);
        return a.type !== "response" || !a.body ? void 0 : { type: "jsxLinkedEditing", spans: a.body.ranges };
      }
      let o = { ...I.toFileLocationRequestArgs(n, e), findInStrings: false, findInComments: false };
      return this.client.interruptGetErr(async () => {
        this.fileConfigurationManager.ensureConfigurationForDocument(t, r);
        let s = await this.client.execute("rename", o, r);
        if (!(s.type !== "response" || !s.body)) return { type: "rename", body: s.body };
      });
    }
    looksLikePotentialJsxTagContext(t, e) {
      if (![Dt, Kt, $t].includes(t.languageId)) return false;
      let r = t.getText(new at.Range(e.line, 0, e.line, e.character));
      return /\<\/?\s*[\w\d_$.]*$/.test(r);
    }
    updateLocs(t, e) {
      let r = new at.WorkspaceEdit();
      for (let n of t) {
        let o = this.client.toResource(n.file);
        for (let s of n.locs) r.replace(o, R.fromTextSpan(s), (s.prefixText || "") + e + (s.suffixText || ""));
      }
      return r;
    }
    async renameFile(t, e, r, n) {
      st.extname(r) ? st.extname(r) === st.extname(e) && (r = r.slice(0, r.length - st.extname(r).length) + st.extname(t)) : r += st.extname(t);
      let o = st.dirname(t), s = st.join(o, r), a = { file: t, oldFilePath: t, newFilePath: s }, c = await this.client.execute("getEditsForFileRename", a, n);
      if (c.type !== "response" || !c.body) return;
      let l = Te.fromFileCodeEdits(this.client, c.body);
      return l.renameFile(at.Uri.file(t), at.Uri.file(s)), l;
    }
  };
});
var Zu = {};
U(Zu, { register: () => IS });
function IS(i9, t) {
  return A([O(t, 2)], () => {
    let e = new Za(t);
    return rr.languages.registerDocumentRangeSemanticTokensProvider(i9.semantic, e, e.getLegend());
  });
}
function ES(i9) {
  let t = i9.version;
  return new Promise((e) => {
    let r = setInterval((n) => {
      i9.version === t && (clearInterval(r), e()), t = i9.version;
    }, 400);
  });
}
function DS(i9) {
  if (i9 > 255) return (i9 >> 8) - 1;
}
function AS(i9) {
  return i9 & 255;
}
var rr, Yu, Za, Ke, xr, ef = y(() => {
  "use strict";
  rr = m(require("vscode"));
  X();
  oe();
  Yu = 1e5;
  Za = class {
    constructor(t) {
      this.client = t;
    }
    getLegend() {
      return new rr.SemanticTokensLegend(Ke, xr);
    }
    async provideDocumentSemanticTokens(t, e) {
      let r = this.client.toOpenTsFilePath(t);
      return !r || t.getText().length > Yu ? null : this.provideSemanticTokens(t, { file: r, start: 0, length: t.getText().length }, e);
    }
    async provideDocumentRangeSemanticTokens(t, e, r) {
      let n = this.client.toOpenTsFilePath(t);
      if (!n || t.offsetAt(e.end) - t.offsetAt(e.start) > Yu) return null;
      let o = t.offsetAt(e.start), s = t.offsetAt(e.end) - o;
      return this.provideSemanticTokens(t, { file: n, start: o, length: s }, r);
    }
    async provideSemanticTokens(t, e, r) {
      if (!this.client.toOpenTsFilePath(t)) return null;
      let o = t.version, s = await this.client.execute("encodedSemanticClassifications-full", { ...e, format: "2020" }, r, { cancelOnResourceChange: t.uri });
      if (s.type !== "response" || !s.body) return null;
      let a = t.version;
      if (o !== a) throw await ES(t), new rr.CancellationError();
      let c = s.body.spans, l = new rr.SemanticTokensBuilder();
      for (let d = 0; d < c.length; ) {
        let p = c[d++], u = c[d++], f = c[d++], S = DS(f);
        if (S === void 0) continue;
        let F = AS(f), _ = t.positionAt(p), j = t.positionAt(p + u);
        for (let H = _.line; H <= j.line; H++) {
          let C = H === _.line ? _.character : 0, N = H === j.line ? j.character : t.lineAt(H).text.length;
          l.push(H, C, N - C, S, F);
        }
      }
      return l.build();
    }
  };
  Ke = [];
  Ke[0] = "class";
  Ke[1] = "enum";
  Ke[2] = "interface";
  Ke[3] = "namespace";
  Ke[4] = "typeParameter";
  Ke[5] = "type";
  Ke[6] = "parameter";
  Ke[7] = "variable";
  Ke[8] = "enumMember";
  Ke[9] = "property";
  Ke[10] = "function";
  Ke[11] = "method";
  xr = [];
  xr[2] = "async";
  xr[0] = "declaration";
  xr[3] = "readonly";
  xr[1] = "static";
  xr[5] = "local";
  xr[4] = "defaultLibrary";
});
var No, tf = y(() => {
  "use strict";
  No = class {
    constructor() {
      this.requestIds = /* @__PURE__ */ new WeakMap();
      this.previousSignatureHelpState = /* @__PURE__ */ new WeakMap();
    }
    startRequest(t) {
      let e = (this.requestIds.get(t) ?? 0) + 1;
      return this.requestIds.set(t, e), e;
    }
    getActiveSignature(t, e, r, n, o) {
      if (e !== this.requestIds.get(t)) return n;
      let s = this.previousSignatureHelpState.get(t), a = r.activeSignatureHelp, c;
      r.isRetrigger && s && a && this.hasMatchingSignatures(a.signatures, s.signatureLabels) && (c = s.userSelectedSignatureLabel, a.activeSignature !== s.activeSignatureIndex && (c = a.signatures[a.activeSignature]?.label));
      let l = n;
      if (c !== void 0) {
        let d = o.findIndex((p) => p.label === c);
        d >= 0 ? l = d : c = void 0;
      }
      return this.previousSignatureHelpState.set(t, { activeSignatureIndex: l, signatureLabels: o.map((d) => d.label), userSelectedSignatureLabel: c }), l;
    }
    hasMatchingSignatures(t, e) {
      return t.length === e.length && t.every((r, n) => r.label === e[n]);
    }
  };
});
var rf = {};
U(rf, { register: () => FS });
function _S(i9) {
  switch (i9.triggerKind) {
    case Ze.SignatureHelpTriggerKind.TriggerCharacter:
      return i9.triggerCharacter ? i9.isRetrigger ? { kind: "retrigger", triggerCharacter: i9.triggerCharacter } : { kind: "characterTyped", triggerCharacter: i9.triggerCharacter } : { kind: "invoked" };
    case Ze.SignatureHelpTriggerKind.ContentChange:
      return i9.isRetrigger ? { kind: "retrigger" } : { kind: "invoked" };
    case Ze.SignatureHelpTriggerKind.Invoke:
    default:
      return { kind: "invoked" };
  }
}
function FS(i9, t) {
  return A([O(t, 1, 2)], () => Ze.languages.registerSignatureHelpProvider(i9.syntax, new $i(t), { triggerCharacters: $i.triggerCharacters, retriggerCharacters: $i.retriggerCharacters }));
}
var Ze, $i, nf = y(() => {
  "use strict";
  Ze = m(require("vscode"));
  W();
  X();
  tf();
  oe();
  ao();
  $i = class {
    constructor(t) {
      this.client = t;
      this.state = new No();
    }
    static {
      this.triggerCharacters = ["(", ",", "<"];
    }
    static {
      this.retriggerCharacters = [")"];
    }
    async provideSignatureHelp(t, e, r, n) {
      let o = this.client.toOpenTsFilePath(t);
      if (!o) return;
      let s = this.state.startRequest(t), a = { ...I.toFileLocationRequestArgs(o, e), triggerReason: _S(n) }, c = await this.client.interruptGetErr(() => this.client.execute("signatureHelp", a, r));
      if (c.type !== "response" || !c.body) return;
      let l = c.body, d = new Ze.SignatureHelp();
      return d.signatures = l.items.map((p) => this.convertSignature(p, t.uri)), d.activeSignature = this.state.getActiveSignature(t, s, n, l.selectedItemIndex, d.signatures), d.activeParameter = this.getActiveParameter(l, d.activeSignature), d;
    }
    getActiveParameter(t, e) {
      let r = t.items[e];
      return r?.isVariadic ? Math.min(t.argumentIndex, r.parameters.length - 1) : t.argumentIndex;
    }
    convertSignature(t, e) {
      let r = new Ze.SignatureInformation(qt(t.prefixDisplayParts, this.client), Mi(t.documentation, t.tags.filter((s) => s.name !== "param"), this.client, e)), n = r.label.length, o = qt(t.separatorDisplayParts, this.client);
      for (let s = 0; s < t.parameters.length; ++s) {
        let a = t.parameters[s], c = qt(a.displayParts, this.client);
        r.parameters.push(new Ze.ParameterInformation([n, n + c.length], Mi(a.documentation, [], this.client, e))), n += c.length, r.label += c, s !== t.parameters.length - 1 && (r.label += o, n += o.length);
      }
      return r.label += qt(t.suffixDisplayParts, this.client), r;
    }
  };
});
var of = {};
U(of, { register: () => LS });
function LS(i9, t) {
  return qo.languages.registerSelectionRangeProvider(i9.syntax, new ec(t));
}
var qo, ec, sf = y(() => {
  "use strict";
  qo = m(require("vscode"));
  W();
  ec = class i9 {
    constructor(t) {
      this.client = t;
    }
    async provideSelectionRanges(t, e, r) {
      let n = this.client.toOpenTsFilePath(t);
      if (!n) return;
      let o = { file: n, locations: e.map(I.toLocation) }, s = await this.client.execute("selectionRange", o, r);
      if (!(s.type !== "response" || !s.body)) return s.body.map(i9.convertSelectionRange);
    }
    static convertSelectionRange(t) {
      return new qo.SelectionRange(R.fromTextSpan(t.textSpan), t.parent ? i9.convertSelectionRange(t.parent) : void 0);
    }
  };
});
var af = {};
U(af, { register: () => MS });
function MS(i9, t) {
  function e(r) {
    te.commands.executeCommand("setContext", Bi.context, r ?? i9.apiVersion.gte(Bi.minVersion));
  }
  return e(), t.register(new Bi(i9)), te.Disposable.from(i9.onTsServerStarted(() => e()), new te.Disposable(() => e(false)));
}
var te, Bi, cf = y(() => {
  "use strict";
  te = m(require("vscode"));
  Je();
  pe();
  W();
  Bi = class i9 {
    constructor(t) {
      this.client = t;
      this.id = "typescript.goToSourceDefinition";
    }
    static {
      this.context = "tsSupportsSourceDefinition";
    }
    static {
      this.minVersion = P.v470;
    }
    async execute() {
      if (this.client.apiVersion.lt(i9.minVersion)) {
        te.window.showErrorMessage(te.l10n.t("Go to Source Definition failed. Requires TypeScript 4.7+."));
        return;
      }
      let t = te.window.activeTextEditor;
      if (!t) {
        te.window.showErrorMessage(te.l10n.t("Go to Source Definition failed. No resource provided."));
        return;
      }
      let e = t.document.uri, r = await te.workspace.openTextDocument(e);
      if (!pt(r)) {
        te.window.showErrorMessage(te.l10n.t("Go to Source Definition failed. Unsupported file type."));
        return;
      }
      let n = this.client.toOpenTsFilePath(r);
      if (!n) {
        te.window.showErrorMessage(te.l10n.t("Go to Source Definition failed. Unknown file type."));
        return;
      }
      await te.window.withProgress({ location: te.ProgressLocation.Window, title: te.l10n.t("Finding source definitions") }, async (o, s) => {
        let a = t.selection.anchor, c = I.toFileLocationRequestArgs(n, a), l = await this.client.execute("findSourceDefinition", c, s);
        if (l.type === "response" && l.body) {
          let d = l.body.map((p) => be.fromTextSpan(this.client.toResource(p.file), p));
          if (d.length) {
            d.length === 1 ? te.commands.executeCommand("vscode.open", d[0].uri.with({ fragment: `L${d[0].range.start.line + 1},${d[0].range.start.character + 1}` })) : te.commands.executeCommand("editor.action.showReferences", e, a, d);
            return;
          }
        }
        te.window.showErrorMessage(te.l10n.t("No source definitions found."));
      });
    }
  };
});
var lf = {};
U(lf, { register: () => NS });
function OS(i9, t) {
  return new Ot(() => {
    let e = ae.window.activeTextEditor;
    return !e || !ae.languages.match(i9, e.document) ? false : !!h("autoClosingTags.enabled", true, { scope: e.document, fallbackSection: t.id, fallbackSubSectionNameOverride: "autoClosingTags" });
  }, (e) => ae.Disposable.from(ae.window.onDidChangeActiveTextEditor(e), ae.workspace.onDidOpenTextDocument(e), ae.workspace.onDidChangeConfiguration(e)));
}
function NS(i9, t, e) {
  return A([OS(i9.syntax, t)], () => new tc(e));
}
var ae, tc, df = y(() => {
  "use strict";
  ae = m(require("vscode"));
  W();
  Y();
  ne();
  oe();
  tc = class extends T {
    constructor(e) {
      super();
      this.client = e;
      this._disposed = false;
      this._timeout = void 0;
      this._cancel = void 0;
      ae.workspace.onDidChangeTextDocument((r) => this.onDidChangeTextDocument(r), null, this._disposables);
    }
    dispose() {
      super.dispose(), this._disposed = true, this._timeout && (clearTimeout(this._timeout), this._timeout = void 0), this._cancel && (this._cancel.cancel(), this._cancel.dispose(), this._cancel = void 0);
    }
    onDidChangeTextDocument({ document: e, contentChanges: r, reason: n }) {
      if (r.length === 0 || n === ae.TextDocumentChangeReason.Undo || n === ae.TextDocumentChangeReason.Redo) return;
      let o = ae.window.activeTextEditor?.document;
      if (e !== o) return;
      let s = this.client.toOpenTsFilePath(e);
      if (!s) return;
      typeof this._timeout < "u" && clearTimeout(this._timeout), this._cancel && (this._cancel.cancel(), this._cancel.dispose(), this._cancel = void 0);
      let a = r[r.length - 1], c = a.text[a.text.length - 1];
      if (a.rangeLength > 0 || c !== ">" && c !== "/" || (a.range.start.character > 0 ? e.getText(new ae.Range(a.range.start.translate({ characterDelta: -1 }), a.range.start)) : "") === ">") return;
      let d = e.version;
      this._timeout = setTimeout(async () => {
        if (this._timeout = void 0, this._disposed) return;
        let p = a.text.split(/\r\n|\n/g), u = p.length <= 1 ? a.range.start.translate({ characterDelta: a.text.length }) : new ae.Position(a.range.start.line + p.length - 1, p[p.length - 1].length), f = I.toFileLocationRequestArgs(s, u);
        this._cancel = new ae.CancellationTokenSource();
        let S = await this.client.execute("jsxClosingTag", f, this._cancel.token);
        if (S.type !== "response" || !S.body || this._disposed) return;
        let F = ae.window.activeTextEditor;
        if (!F) return;
        let _ = S.body, j = F.document;
        e === j && j.version === d && F.insertSnippet(this.getTagSnippet(_), this.getInsertionPositions(F, u));
      }, 100);
    }
    getTagSnippet(e) {
      let r = new ae.SnippetString();
      return r.appendPlaceholder("", 0), r.appendText(e.newText), r;
    }
    getInsertionPositions(e, r) {
      let n = e.selections.map((o) => o.active);
      return n.some((o) => o.isEqual(r)) ? n : r;
    }
  };
});
var uf = {};
U(uf, { default: () => Hi, register: () => qS });
function qS(i9, t) {
  return A([O(t, 1, 2)], () => pf.languages.registerTypeDefinitionProvider(i9.syntax, new Hi(t)));
}
var pf, Hi, ff = y(() => {
  "use strict";
  pf = m(require("vscode"));
  X();
  mo();
  oe();
  Hi = class extends Vt {
    provideTypeDefinition(t, e, r) {
      return this.getSymbolLocations("typeDefinition", t, e, r);
    }
  };
});
var Uo = k((CR, gf) => {
  "use strict";
  var jS = require("child_process").spawn;
  function US(i9, t, e, r) {
    typeof e == "function" && (r = e, e = void 0);
    let n = false, o = jS(i9, t, e), s = "", a = "";
    o.stdout.on("data", function(c) {
      s += c.toString();
    }), o.stderr.on("data", function(c) {
      a += c.toString();
    }), o.on("error", function(c) {
      n || (n = true, r(new Error(c)));
    }), o.on("close", function(c, l) {
      if (!n) {
        if (n = true, a) return r(new Error(a));
        r(null, s, c);
      }
    });
  }
  gf.exports = US;
});
var ri = k((TR, hf) => {
  "use strict";
  var ti = {}, wr = {}, zi = {}, ic = 0, Pt = null;
  function WS(i9, t) {
    if (!(t <= 0)) return wr[i9] !== void 0 && (ti[i9] = Date.now() + (t || 6e4)), wr[i9];
  }
  function KS(i9, t, e, r) {
    t === void 0 || e <= 0 || (ti[i9] = Date.now() + (e || 6e4), wr[i9] === void 0 && (ic++, mf(e)), wr[i9] = t, r && (zi[i9] = r));
  }
  function mf(i9) {
    if (ic > 0) {
      Pt === null && (Pt = setInterval($S, (i9 || 6e4) / 2), typeof Pt.unref == "function" && Pt.unref());
      return;
    }
    Pt !== null && (clearInterval(Pt), Pt = null);
  }
  function $S() {
    let i9 = Date.now(), t = Object.keys(ti);
    for (let e = 0; e < t.length; e++) {
      let r = t[e];
      ti[r] < i9 && (ic--, zi[r] && zi[r](wr[r]), delete wr[r], delete ti[r], delete zi[r]);
    }
    mf();
  }
  function rc(i9) {
    for (let t in i9) delete i9[t];
  }
  function BS() {
    Pt !== null && (clearInterval(Pt), Pt = null), rc(wr), rc(ti), rc(zi);
  }
  hf.exports = { get: WS, set: KS, clear: BS };
});
var Cf = k((PR, bf) => {
  "use strict";
  var Sf = require("os"), HS = Uo(), vf = ri(), Wo = Sf.platform();
  function yf(i9, t) {
    let e = 0, r = i9.split(/-|:|\./), n = r.length - 1;
    return n >= 0 && t && Wo === "darwin" && (e += parseInt(r[n--], 10) * 10), n >= 0 && (e += parseInt(r[n--], 10) * 1e3), n >= 0 && (e += parseInt(r[n--], 10) * 6e4), n >= 0 && (e += parseInt(r[n--], 10) * 36e5), n >= 0 && (e += parseInt(r[n--], 10) * 864e5), e;
  }
  function zS(i9, t, e) {
    let r = i9.join(","), n = ["-o", "etime,pid,ppid,pcpu,rss,time", "-p", r];
    (Wo === "aix" || Wo === "os400") && (n = ["-o", "etime,pid,ppid,pcpu,rssize,time", "-p", r]), HS("ps", n, function(o, s, a) {
      if (o) return Wo === "os390" && /no matching processes found/.test(o) && (o = new Error("No matching pid found"), o.code = "ENOENT"), e(o);
      if (a === 1) {
        let d = new Error("No matching pid found");
        return d.code = "ENOENT", e(d);
      }
      if (a !== 0) return e(new Error("pidusage ps command exited with code " + a));
      let c = Date.now();
      s = s.split(Sf.EOL);
      let l = {};
      for (let d = 1; d < s.length; d++) {
        let p = s[d].trim().split(/\s+/);
        if (!p || p.length !== 6) continue;
        let u = parseInt(p[1], 10), f = vf.get(u, t.maxage);
        f === void 0 && (f = {});
        let S = parseInt(p[2], 10), F = parseInt(p[4], 10) * 1024, _ = yf(p[0]), j = yf(p[5], true), H = j - (f.ctime || 0), C = Math.abs(f.elapsed !== void 0 ? _ - f.elapsed : _), N = C > 0 ? H / C * 100 : 0;
        l[u] = { cpu: N, memory: F, ppid: S, pid: u, ctime: j, elapsed: _, timestamp: c }, vf.set(u, l[u], t.maxage);
      }
      e(null, l);
    });
  }
  bf.exports = zS;
});
var nc = k((xR, Tf) => {
  function GS(i9, t, e) {
    typeof t == "function" && (e = t, t = {});
    let r;
    Array.isArray(i9) || (r = Object.keys(i9));
    let n = r ? r.length : i9.length, o = n, s = r ? {} : [];
    function a(c, l, d) {
      s[c] = d, (--o === 0 || l && !t.graceful) && (t.graceful && l && n > 1 && (l = null), e && e(l, s), e = null);
    }
    r ? r.forEach(function(c) {
      i9[c](function(l, d) {
        a(c, l, d);
      });
    }) : i9.forEach(function(c, l) {
      c(function(d, p) {
        a(l, d, p);
      });
    });
  }
  Tf.exports = GS;
});
var kf = k((wR, Rf) => {
  var JS = require("os"), XS = require("fs"), QS = require("child_process").exec, wf = nc();
  function YS(i9, t) {
    if (i9 !== null) {
      Pf(function(e, r) {
        if (e) return t(e);
        i9.uptime = r, t(null, i9);
      });
      return;
    }
    wf([ZS, Pf], function(e, r) {
      if (e) return t(e);
      i9 = { clockTick: r[0].clockTick, pageSize: r[0].pageSize, uptime: r[1] }, t(null, i9);
    });
  }
  Rf.exports = YS;
  function Pf(i9) {
    XS.readFile("/proc/uptime", "utf8", function(t, e) {
      return t || e === void 0 ? (process.env.PIDUSAGE_SILENT || console.warn("[pidusage] We couldn't find uptime from /proc/uptime, using os.uptime() value"), i9(null, JS.uptime() || /* @__PURE__ */ new Date() / 1e3)) : i9(null, parseFloat(e.split(" ")[0]));
    });
  }
  function ZS(i9) {
    wf([function(e) {
      xf("CLK_TCK", { default: 100 }, e);
    }, function(e) {
      xf("PAGESIZE", { default: 4096 }, e);
    }], function(t, e) {
      if (t) return i9(t);
      i9(null, { clockTick: e[0], pageSize: e[1] });
    });
  }
  function xf(i9, t, e) {
    typeof t == "function" && (e = t, t = { default: "" }), QS("getconf " + i9, function(r, n, o) {
      return r !== null ? (process.env.PIDUSAGE_SILENT || console.error('Error while calling "getconf ' + i9 + '"', r), e(null, t.default)) : (n = parseInt(n), isNaN(n) ? e(null, t.default) : e(null, n));
    });
  }
});
var Df = k((oc, Ef) => {
  var Ko = require("buffer"), xt = Ko.Buffer;
  function If(i9, t) {
    for (var e in i9) t[e] = i9[e];
  }
  xt.from && xt.alloc && xt.allocUnsafe && xt.allocUnsafeSlow ? Ef.exports = Ko : (If(Ko, oc), oc.Buffer = Rr);
  function Rr(i9, t, e) {
    return xt(i9, t, e);
  }
  Rr.prototype = Object.create(xt.prototype);
  If(xt, Rr);
  Rr.from = function(i9, t, e) {
    if (typeof i9 == "number") throw new TypeError("Argument must not be a number");
    return xt(i9, t, e);
  };
  Rr.alloc = function(i9, t, e) {
    if (typeof i9 != "number") throw new TypeError("Argument must be a number");
    var r = xt(i9);
    return t !== void 0 ? typeof e == "string" ? r.fill(t, e) : r.fill(t) : r.fill(0), r;
  };
  Rr.allocUnsafe = function(i9) {
    if (typeof i9 != "number") throw new TypeError("Argument must be a number");
    return xt(i9);
  };
  Rr.allocUnsafeSlow = function(i9) {
    if (typeof i9 != "number") throw new TypeError("Argument must be a number");
    return Ko.SlowBuffer(i9);
  };
});
var Of = k((RR, Mf) => {
  var ac = require("fs"), eb = require("path"), tb = kf(), rb = nc(), Af = ri(), Ut = null, _f = Df().Buffer, sc = 1024;
  function ib() {
  }
  function nb(i9, t, e) {
    if (t.fd) return e(null, t.fd);
    ac.open(i9, "r", e);
  }
  function ob(i9) {
    i9.fd && ac.close(i9.fd, ib);
  }
  function Ff(i9, t, e) {
    let r = false;
    typeof t == "function" && (e = t, t = _f.alloc(sc), r = true), ac.read(i9, t, 0, sc, 0, function(n, o, s) {
      if (n) {
        e(n);
        return;
      }
      let a = _f.concat([t, s], r ? o : t.length + o);
      if (o === sc) {
        Ff(i9, a, e);
        return;
      }
      e(null, t);
    });
  }
  function Lf(i9, t, e) {
    let r = Af.get(i9, t.maxage), n = false;
    r === void 0 && (n = true, r = {}), nb(eb.join("/proc", "" + i9, "stat"), r, function(o, s) {
      if (o) return o.code === "ENOENT" && (o.message = "No matching pid found"), e(o, null);
      if (o) return e(o);
      Ff(s, function(a, c) {
        if (a) return e(a);
        let l = c.toString("utf8"), d = Date.now(), p = l.lastIndexOf(")");
        l = l.substr(p + 2).split(" ");
        let u = { ppid: parseInt(l[1]), utime: parseFloat(l[11]) * 1e3 / Ut.clockTick, stime: parseFloat(l[12]) * 1e3 / Ut.clockTick, cutime: parseFloat(l[13]) * 1e3 / Ut.clockTick, cstime: parseFloat(l[14]) * 1e3 / Ut.clockTick, start: parseFloat(l[19]) * 1e3 / Ut.clockTick, rss: parseFloat(l[21]), uptime: Ut.uptime * 1e3, fd: s }, f = u.rss * Ut.pageSize, S = t.childrens ? u.cutime + u.cstime : 0, F = u.stime - (r.stime || 0) + u.utime - (r.utime || 0) + S, _ = Math.abs(r.uptime !== void 0 ? u.uptime - r.uptime : u.start - u.uptime), j = _ > 0 ? F / _ * 100 : 0;
        return Af.set(i9, u, t.maxage, ob), n ? Lf(i9, t, e) : e(null, { cpu: j, memory: f, ctime: u.utime + u.stime, elapsed: u.uptime - u.start, timestamp: d, pid: i9, ppid: u.ppid });
      });
    });
  }
  function sb(i9, t, e) {
    tb(Ut, function(r, n) {
      if (r) return e(r);
      Ut = n;
      let o = {};
      i9.forEach(function(s, a) {
        o[s] = function(c) {
          Lf(s, t, c);
        };
      }), rb(o, { graceful: true }, e);
    });
  }
  Mf.exports = sb;
});
var Uf = k((kR, jf) => {
  "use strict";
  var Nf = require("os"), ab = Uo(), qf = ri();
  function cb(i9) {
    let t = i9.substring(0, 4), e = i9.substring(4, 6), r = i9.substring(6, 8), n = i9.substring(8, 10), o = i9.substring(10, 12), s = i9.substring(12, 14), a = i9.substring(15, 21), c = i9.substring(21, 22), l = parseInt(i9.substring(22, 25), 10), d = Math.floor(l / 60), p = l % 60;
    return /* @__PURE__ */ new Date(t + "-" + e + "-" + r + "T" + n + ":" + o + ":" + s + "." + a + c + (d > 9 ? d : "0" + d) + (p > 9 ? p : "0" + p));
  }
  function Vf(i9, t, e) {
    let r = "ProcessId=" + i9[0];
    for (let o = 1; o < i9.length; o++) r += " or ProcessId=" + i9[o];
    let n = ["PROCESS", "where", '"' + r + '"', "get", "CreationDate,KernelModeTime,ParentProcessId,ProcessId,UserModeTime,WorkingSetSize"];
    ab("wmic", n, { windowsHide: true, windowsVerbatimArguments: true }, function(o, s, a) {
      if (o) {
        if (o.message.indexOf("No Instance(s) Available.") !== -1) {
          let u = new Error("No matching pid found");
          return u.code = "ENOENT", e(u);
        }
        return e(o);
      }
      if (a !== 0) return e(new Error("pidusage wmic command exited with code " + a));
      let c = Date.now(), l = Math.floor(Nf.uptime() || c / 1e3);
      s = s.split(Nf.EOL);
      let d = false, p = {};
      for (let u = 1; u < s.length; u++) {
        let f = s[u].trim().split(/\s+/);
        if (!f || f.length !== 6) continue;
        let S = cb(f[0]), F = parseInt(f[2], 10), _ = parseInt(f[3], 10), j = Math.round(parseInt(f[1], 10) / 1e4), H = Math.round(parseInt(f[4], 10) / 1e4), C = parseInt(f[5], 10), N = qf.get(_, t.maxage);
        N === void 0 && (d = true, N = { ctime: j + H, uptime: l });
        let fe = (j + H - N.ctime) / 1e3, L = l - N.uptime, D = L > 0 ? fe / L * 100 : 0;
        qf.set(_, { ctime: H + j, uptime: l }, t.maxage), p[_] = { cpu: D, memory: C, ppid: F, pid: _, ctime: H + j, elapsed: c - S.getTime(), timestamp: c };
      }
      if (d) return Vf(i9, t, function(u, f) {
        if (u) return e(u);
        e(null, Object.assign(p, f));
      });
      e(null, p);
    });
  }
  jf.exports = Vf;
});
var Hf = k((IR, Bf) => {
  "use strict";
  var Wf = require("os"), lb = Uo(), Kf = ri();
  function db(i9) {
    let t = i9.substring(0, 4), e = i9.substring(4, 6), r = i9.substring(6, 8), n = i9.substring(8, 10), o = i9.substring(10, 12), s = i9.substring(12, 14), a = i9.substring(15, 21), c = i9.substring(21, 22), l = parseInt(i9.substring(22, 25), 10), d = Math.floor(l / 60), p = l % 60;
    return /* @__PURE__ */ new Date(t + "-" + e + "-" + r + "T" + n + ":" + o + ":" + s + "." + a + c + (d > 9 ? d : "0" + d) + (p > 9 ? p : "0" + p));
  }
  function $f(i9, t, e) {
    let r = "ProcessId=" + i9[0];
    for (let s = 1; s < i9.length; s++) r += " or ProcessId=" + i9[s];
    let o = ["win32_process", "-Filter", "'" + r + "'", "| select CreationDate,KernelModeTime,ParentProcessId,ProcessId,UserModeTime,WorkingSetSize", "| format-table"];
    lb("gwmi", o, { windowsHide: true, windowsVerbatimArguments: true, shell: "powershell.exe" }, function(s, a, c) {
      if (s) {
        if (s.message.indexOf("No Instance(s) Available.") !== -1) {
          let S = new Error("No matching pid found");
          return S.code = "ENOENT", e(S);
        }
        return e(s);
      }
      if (c !== 0) return e(new Error("pidusage gwmi command exited with code " + c));
      let l = Date.now(), d = Math.floor(Wf.uptime() || l / 1e3);
      a = a.split(Wf.EOL).slice(1);
      let p = a.findIndex((S) => !!S);
      if (a = a.slice(p + 2), !a.length) {
        let S = new Error("No matching pid found");
        return S.code = "ENOENT", e(S);
      }
      let u = false, f = {};
      for (let S = 0; S < a.length; S++) {
        let F = a[S].trim().split(/\s+/);
        if (!F || F.length === 1) continue;
        let _ = db(F[0]), j = parseInt(F[2], 10), H = parseInt(F[3], 10), C = Math.round(parseInt(F[1], 10) / 1e4), N = Math.round(parseInt(F[4], 10) / 1e4), fe = parseInt(F[5], 10), L = Kf.get(H, t.maxage);
        L === void 0 && (u = true, L = { ctime: C + N, uptime: d });
        let D = (C + N - L.ctime) / 1e3, Wt = d - L.uptime, Fe = Wt > 0 ? D / Wt * 100 : 0;
        Kf.set(H, { ctime: N + C, uptime: d }, t.maxage), f[H] = { cpu: Fe, memory: fe, ppid: j, pid: H, ctime: N + C, elapsed: l - _.getTime(), timestamp: l };
      }
      if (u) return $f(i9, t, function(S, F) {
        if (S) return e(S);
        e(null, Object.assign(f, F));
      });
      e(null, f);
    });
  }
  Bf.exports = $f;
});
var Xf = k((ER, Jf) => {
  "use strict";
  var pb = require("fs"), zf = require("os"), ub = require("child_process").spawn, cc = { ps: () => Cf(), procfile: () => Of(), wmic: () => Uf(), gwmi: () => Hf() }, fb = { aix: "ps", os400: "ps", android: "procfile", alpine: "procfile", darwin: "ps", freebsd: "ps", os390: "ps", linux: "procfile", netbsd: "procfile", openbsd: "ps", sunos: "ps", win: "wmic" }, ii = zf.platform();
  pb.existsSync("/etc/alpine-release") && (ii = "alpine");
  ii.match(/^win/) && (ii = "win");
  var Gf;
  try {
    Gf = cc[fb[ii]]();
  } catch {
  }
  function gb(i9, t, e) {
    let r = Gf;
    if (ii !== "win" && t.usePs === true && (r = cc.ps()), ii === "win") {
      let o;
      try {
        o = ub("wmic", function(s) {
          if (s) throw new Error(s);
        });
      } catch {
        r = cc.gwmi();
      } finally {
        o && o.kill();
      }
    }
    if (r === void 0) return e(new Error(zf.platform() + " is not supported yet, please open an issue (https://github.com/soyuka/pidusage)"));
    let n = false;
    if (Array.isArray(i9) || (n = true, i9 = [i9]), i9.length === 0) return e(new TypeError("You must provide at least one pid"));
    for (let o = 0; o < i9.length; o++) if (i9[o] = parseInt(i9[o], 10), isNaN(i9[o]) || i9[o] < 0) return e(new TypeError("One of the pids provided is invalid"));
    r(i9, t, function(o, s) {
      if (o) return e(o);
      n ? e(null, s[i9[0]]) : e(null, s);
    });
  }
  Jf.exports = gb;
});
var Yf = k((DR, lc) => {
  "use strict";
  var Qf = Xf();
  function mb(i9, t, e) {
    if (typeof t == "function" && (e = t, t = {}), t === void 0 && (t = {}), t = Object.assign({ usePs: /^true$/i.test(process.env.PIDUSAGE_USE_PS), maxage: process.env.PIDUSAGE_MAXAGE }, t), typeof e == "function") {
      Qf(i9, t, e);
      return;
    }
    return new Promise(function(r, n) {
      Qf(i9, t, function(o, s) {
        if (o) return n(o);
        r(s);
      });
    });
  }
  lc.exports = mb;
  lc.exports.clear = ri().clear;
});
var dg = {};
U(dg, { register: () => kb });
async function Rb(i9) {
  try {
    return (await K.workspace.fs.stat(i9)).type === K.FileType.Directory;
  } catch {
    return false;
  }
}
function kb(i9, t, e) {
  return A([O(i9, 2)], () => new xc(i9, t, e));
}
var Pc, K, si, xc, pg = y(() => {
  "use strict";
  Pc = m(require("path")), K = m(require("vscode"));
  nt();
  Jt();
  W();
  X();
  Jr();
  Et();
  ne();
  Y();
  oe();
  si = "updateImportsOnFileMove.enabled";
  xc = class extends T {
    constructor(e, r, n) {
      super();
      this.client = e;
      this.fileConfigurationManager = r;
      this._handles = n;
      this._delayer = new Gr(50);
      this._pendingRenames = /* @__PURE__ */ new Set();
      this._register(K.workspace.onDidRenameFiles(async (o) => {
        for (let { newUri: s, oldUri: a } of o.files) {
          let c = this.client.toTsFilePath(s);
          if (!c) continue;
          let l = this.client.toTsFilePath(a);
          if (!l) continue;
          let d = Wr(s) ? "typescript" : "javascript";
          if (h(si, "prompt", { scope: null, fallbackSection: d }) === "never") continue;
          let u = await this.getJsTsFileBeingMoved(s);
          !u || !this.client.toTsFilePath(u) || (this._pendingRenames.add({ oldUri: a, newUri: s, newFilePath: c, oldFilePath: l, jsTsFileThatIsBeingMoved: u }), this._delayer.trigger(() => {
            K.window.withProgress({ location: K.ProgressLocation.Window, title: K.l10n.t("Checking for update of JS/TS imports") }, () => this.flushRenames());
          }));
        }
      }));
    }
    async flushRenames() {
      let e = Array.from(this._pendingRenames);
      this._pendingRenames.clear();
      for (let r of this.groupRenames(e)) {
        let n = new K.WorkspaceEdit(), o = [];
        for (let { oldUri: s, newUri: a, newFilePath: c, oldFilePath: l, jsTsFileThatIsBeingMoved: d } of r) {
          let p = await K.workspace.openTextDocument(d);
          this.client.bufferSyncSupport.closeResource(s), this.client.bufferSyncSupport.openTextDocument(p), await this.withEditsForFileRename(n, p, l, c) && o.push(a);
        }
        n.size && await this.confirmActionWithUser(o) && await K.workspace.applyEdit(n, { isRefactoring: true });
      }
    }
    async confirmActionWithUser(e) {
      if (!e.length) return false;
      let r = Wr(e[0]) ? "typescript" : "javascript";
      switch (h(si, "prompt", { scope: null, fallbackSection: r })) {
        case "always":
          return true;
        case "never":
          return false;
        case "prompt":
        default:
          return this.promptUser(e);
      }
    }
    async promptUser(e) {
      if (!e.length) return false;
      let r = { title: K.l10n.t("No"), isCloseAffordance: true }, n = { title: K.l10n.t("Yes") }, o = { title: K.l10n.t("Always") }, s = { title: K.l10n.t("Never") };
      switch (await K.window.showInformationMessage(e.length === 1 ? K.l10n.t("Update imports for '{0}'?", Pc.basename(e[0].fsPath)) : this.getConfirmMessage(K.l10n.t("Update imports for the following {0} files?", e.length), e), { modal: true }, r, n, o, s)) {
        case n:
          return true;
        case r:
          return false;
        case o: {
          let c = K.workspace.getConfiguration(De);
          return c.update(si, "always", this.getConfigTargetScope(c, si)), true;
        }
        case s: {
          let c = K.workspace.getConfiguration(De);
          return c.update(si, "never", this.getConfigTargetScope(c, si)), false;
        }
        default:
          return false;
      }
    }
    async getJsTsFileBeingMoved(e) {
      if (e.scheme === it) return await Rb(e) ? (await K.workspace.findFiles(new K.RelativePattern(e, "**/*.{ts,tsx,js,jsx}"), "**/node_modules/**", 1))[0] : await this._handles(e) ? e : void 0;
    }
    async withEditsForFileRename(e, r, n, o) {
      let s = await this.client.interruptGetErr(() => {
        this.fileConfigurationManager.setGlobalConfigurationFromDocument(r, le);
        let a = { oldFilePath: n, newFilePath: o };
        return this.client.execute("getEditsForFileRename", a, le);
      });
      return s.type !== "response" || !s.body.length ? false : (Te.withFileCodeEdits(e, this.client, s.body), true);
    }
    groupRenames(e) {
      let r = /* @__PURE__ */ new Map();
      for (let n of e) {
        let o = `${this.client.getWorkspaceRootForResource(n.jsTsFileThatIsBeingMoved)?.fsPath}@@@${Wr(n.jsTsFileThatIsBeingMoved)}`;
        r.has(o) || r.set(o, /* @__PURE__ */ new Set()), r.get(o).add(n);
      }
      return r.values();
    }
    getConfirmMessage(e, r) {
      let o = [e];
      return o.push(""), o.push(...r.slice(0, 10).map((s) => Pc.basename(s.fsPath))), r.length > 10 && (r.length - 10 === 1 ? o.push(K.l10n.t("...1 additional file not shown")) : o.push(K.l10n.t("...{0} additional files not shown", r.length - 10))), o.push(""), o.join(`
`);
    }
    getConfigTargetScope(e, r) {
      let n = e.inspect(r);
      return n?.workspaceFolderValue ? K.ConfigurationTarget.WorkspaceFolder : n?.workspaceValue ? K.ConfigurationTarget.Workspace : K.ConfigurationTarget.Global;
    }
  };
});
var ug = {};
U(ug, { register: () => Eb });
function Ib(i9) {
  switch (i9.kind) {
    case g.method:
      return ie.SymbolKind.Method;
    case g.enum:
      return ie.SymbolKind.Enum;
    case g.enumMember:
      return ie.SymbolKind.EnumMember;
    case g.function:
      return ie.SymbolKind.Function;
    case g.class:
      return ie.SymbolKind.Class;
    case g.interface:
      return ie.SymbolKind.Interface;
    case g.type:
      return ie.SymbolKind.Class;
    case g.memberVariable:
      return ie.SymbolKind.Field;
    case g.memberGetAccessor:
      return ie.SymbolKind.Field;
    case g.memberSetAccessor:
      return ie.SymbolKind.Field;
    case g.variable:
      return ie.SymbolKind.Variable;
    default:
      return ie.SymbolKind.Variable;
  }
}
function Eb(i9, t) {
  return ie.languages.registerWorkspaceSymbolProvider(new wc(i9, t));
}
var ie, wc, fg = y(() => {
  "use strict";
  ie = m(require("vscode"));
  nt();
  Jt();
  pe();
  Di();
  Oe();
  W();
  Xe();
  ne();
  wc = class i9 {
    constructor(t, e) {
      this.client = t;
      this.modeIds = e;
    }
    async provideWorkspaceSymbols(t, e) {
      let r;
      if (this.searchAllOpenProjects) r = void 0;
      else {
        let s = this.getDocument();
        if (r = s ? await this.toOpenedFiledPath(s) : void 0, !r && this.client.apiVersion.lt(P.v390)) return [];
      }
      let n = { file: r, searchValue: t, maxResultCount: 256 }, o = await this.client.execute("navto", n, e);
      return o.type !== "response" || !o.body ? [] : me(o.body.map((s) => this.toSymbolInformation(s)));
    }
    get searchAllOpenProjects() {
      return this.client.apiVersion.gte(P.v390) && h("workspaceSymbols.scope", "allOpenProjects", { scope: null, fallbackSection: "typescript" }) === "allOpenProjects";
    }
    async toOpenedFiledPath(t) {
      if (t.uri.scheme === ia) try {
        let e = ie.Uri.file(JSON.parse(t.uri.query)?.path);
        if (Wr(e) || np(e)) {
          let r = await ie.workspace.openTextDocument(e);
          return this.client.toOpenTsFilePath(r);
        }
      } catch {
      }
      return this.client.toOpenTsFilePath(t);
    }
    toSymbolInformation(t) {
      if (t.kind === "alias" && !t.containerName) return;
      let e = this.client.toResource(t.file);
      if (Ii(e, $r)) return;
      let r = i9.getLabel(t), n = new ie.SymbolInformation(r, Ib(t), t.containerName || "", be.fromTextSpan(e, t));
      return (t.kindModifiers ? Lt(t.kindModifiers) : void 0)?.has(je.deprecated) && (n.tags = [ie.SymbolTag.Deprecated]), n;
    }
    static getLabel(t) {
      let e = t.name;
      return t.kind === "method" || t.kind === "function" ? e + "()" : e;
    }
    getDocument() {
      let t = ie.window.activeTextEditor?.document;
      if (t && this.modeIds.includes(t.languageId)) return t;
      let e = ie.workspace.textDocuments;
      for (let r of e) if (this.modeIds.includes(r.languageId)) return r;
    }
  };
});
function fs(i9, t = false) {
  let e = i9.length, r = 0, n = "", o = 0, s = 16, a = 0, c = 0, l = 0, d = 0, p = 0;
  function u(C, N) {
    let fe = 0, L = 0;
    for (; fe < C || !N; ) {
      let D = i9.charCodeAt(r);
      if (D >= 48 && D <= 57) L = L * 16 + D - 48;
      else if (D >= 65 && D <= 70) L = L * 16 + D - 65 + 10;
      else if (D >= 97 && D <= 102) L = L * 16 + D - 97 + 10;
      else break;
      r++, fe++;
    }
    return fe < C && (L = -1), L;
  }
  function f(C) {
    r = C, n = "", o = 0, s = 16, p = 0;
  }
  function S() {
    let C = r;
    if (i9.charCodeAt(r) === 48) r++;
    else for (r++; r < i9.length && pi(i9.charCodeAt(r)); ) r++;
    if (r < i9.length && i9.charCodeAt(r) === 46) if (r++, r < i9.length && pi(i9.charCodeAt(r))) for (r++; r < i9.length && pi(i9.charCodeAt(r)); ) r++;
    else return p = 3, i9.substring(C, r);
    let N = r;
    if (r < i9.length && (i9.charCodeAt(r) === 69 || i9.charCodeAt(r) === 101)) if (r++, (r < i9.length && i9.charCodeAt(r) === 43 || i9.charCodeAt(r) === 45) && r++, r < i9.length && pi(i9.charCodeAt(r))) {
      for (r++; r < i9.length && pi(i9.charCodeAt(r)); ) r++;
      N = r;
    } else p = 3;
    return i9.substring(C, N);
  }
  function F() {
    let C = "", N = r;
    for (; ; ) {
      if (r >= e) {
        C += i9.substring(N, r), p = 2;
        break;
      }
      let fe = i9.charCodeAt(r);
      if (fe === 34) {
        C += i9.substring(N, r), r++;
        break;
      }
      if (fe === 92) {
        if (C += i9.substring(N, r), r++, r >= e) {
          p = 2;
          break;
        }
        switch (i9.charCodeAt(r++)) {
          case 34:
            C += '"';
            break;
          case 92:
            C += "\\";
            break;
          case 47:
            C += "/";
            break;
          case 98:
            C += "\b";
            break;
          case 102:
            C += "\f";
            break;
          case 110:
            C += `
`;
            break;
          case 114:
            C += "\r";
            break;
          case 116:
            C += "	";
            break;
          case 117:
            let D = u(4, true);
            D >= 0 ? C += String.fromCharCode(D) : p = 4;
            break;
          default:
            p = 5;
        }
        N = r;
        continue;
      }
      if (fe >= 0 && fe <= 31) if (rn(fe)) {
        C += i9.substring(N, r), p = 2;
        break;
      } else p = 6;
      r++;
    }
    return C;
  }
  function _() {
    if (n = "", p = 0, o = r, c = a, d = l, r >= e) return o = e, s = 17;
    let C = i9.charCodeAt(r);
    if (Mc(C)) {
      do
        r++, n += String.fromCharCode(C), C = i9.charCodeAt(r);
      while (Mc(C));
      return s = 15;
    }
    if (rn(C)) return r++, n += String.fromCharCode(C), C === 13 && i9.charCodeAt(r) === 10 && (r++, n += `
`), a++, l = r, s = 14;
    switch (C) {
      case 123:
        return r++, s = 1;
      case 125:
        return r++, s = 2;
      case 91:
        return r++, s = 3;
      case 93:
        return r++, s = 4;
      case 58:
        return r++, s = 6;
      case 44:
        return r++, s = 5;
      case 34:
        return r++, n = F(), s = 10;
      case 47:
        let N = r - 1;
        if (i9.charCodeAt(r + 1) === 47) {
          for (r += 2; r < e && !rn(i9.charCodeAt(r)); ) r++;
          return n = i9.substring(N, r), s = 12;
        }
        if (i9.charCodeAt(r + 1) === 42) {
          r += 2;
          let fe = e - 1, L = false;
          for (; r < fe; ) {
            let D = i9.charCodeAt(r);
            if (D === 42 && i9.charCodeAt(r + 1) === 47) {
              r += 2, L = true;
              break;
            }
            r++, rn(D) && (D === 13 && i9.charCodeAt(r) === 10 && r++, a++, l = r);
          }
          return L || (r++, p = 1), n = i9.substring(N, r), s = 13;
        }
        return n += String.fromCharCode(C), r++, s = 16;
      case 45:
        if (n += String.fromCharCode(C), r++, r === e || !pi(i9.charCodeAt(r))) return s = 16;
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return n += S(), s = 11;
      default:
        for (; r < e && j(C); ) r++, C = i9.charCodeAt(r);
        if (o !== r) {
          switch (n = i9.substring(o, r), n) {
            case "true":
              return s = 8;
            case "false":
              return s = 9;
            case "null":
              return s = 7;
          }
          return s = 16;
        }
        return n += String.fromCharCode(C), r++, s = 16;
    }
  }
  function j(C) {
    if (Mc(C) || rn(C)) return false;
    switch (C) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return false;
    }
    return true;
  }
  function H() {
    let C;
    do
      C = _();
    while (C >= 12 && C <= 15);
    return C;
  }
  return { setPosition: f, getPosition: () => r, scan: t ? H : _, getToken: () => s, getTokenValue: () => n, getTokenOffset: () => o, getTokenLength: () => r - o, getTokenStartLine: () => c, getTokenStartCharacter: () => o - d, getTokenError: () => p };
}
function Mc(i9) {
  return i9 === 32 || i9 === 9;
}
function rn(i9) {
  return i9 === 10 || i9 === 13;
}
function pi(i9) {
  return i9 >= 48 && i9 <= 57;
}
var Ng, gs = y(() => {
  "use strict";
  (function(i9) {
    i9[i9.lineFeed = 10] = "lineFeed", i9[i9.carriageReturn = 13] = "carriageReturn", i9[i9.space = 32] = "space", i9[i9._0 = 48] = "_0", i9[i9._1 = 49] = "_1", i9[i9._2 = 50] = "_2", i9[i9._3 = 51] = "_3", i9[i9._4 = 52] = "_4", i9[i9._5 = 53] = "_5", i9[i9._6 = 54] = "_6", i9[i9._7 = 55] = "_7", i9[i9._8 = 56] = "_8", i9[i9._9 = 57] = "_9", i9[i9.a = 97] = "a", i9[i9.b = 98] = "b", i9[i9.c = 99] = "c", i9[i9.d = 100] = "d", i9[i9.e = 101] = "e", i9[i9.f = 102] = "f", i9[i9.g = 103] = "g", i9[i9.h = 104] = "h", i9[i9.i = 105] = "i", i9[i9.j = 106] = "j", i9[i9.k = 107] = "k", i9[i9.l = 108] = "l", i9[i9.m = 109] = "m", i9[i9.n = 110] = "n", i9[i9.o = 111] = "o", i9[i9.p = 112] = "p", i9[i9.q = 113] = "q", i9[i9.r = 114] = "r", i9[i9.s = 115] = "s", i9[i9.t = 116] = "t", i9[i9.u = 117] = "u", i9[i9.v = 118] = "v", i9[i9.w = 119] = "w", i9[i9.x = 120] = "x", i9[i9.y = 121] = "y", i9[i9.z = 122] = "z", i9[i9.A = 65] = "A", i9[i9.B = 66] = "B", i9[i9.C = 67] = "C", i9[i9.D = 68] = "D", i9[i9.E = 69] = "E", i9[i9.F = 70] = "F", i9[i9.G = 71] = "G", i9[i9.H = 72] = "H", i9[i9.I = 73] = "I", i9[i9.J = 74] = "J", i9[i9.K = 75] = "K", i9[i9.L = 76] = "L", i9[i9.M = 77] = "M", i9[i9.N = 78] = "N", i9[i9.O = 79] = "O", i9[i9.P = 80] = "P", i9[i9.Q = 81] = "Q", i9[i9.R = 82] = "R", i9[i9.S = 83] = "S", i9[i9.T = 84] = "T", i9[i9.U = 85] = "U", i9[i9.V = 86] = "V", i9[i9.W = 87] = "W", i9[i9.X = 88] = "X", i9[i9.Y = 89] = "Y", i9[i9.Z = 90] = "Z", i9[i9.asterisk = 42] = "asterisk", i9[i9.backslash = 92] = "backslash", i9[i9.closeBrace = 125] = "closeBrace", i9[i9.closeBracket = 93] = "closeBracket", i9[i9.colon = 58] = "colon", i9[i9.comma = 44] = "comma", i9[i9.dot = 46] = "dot", i9[i9.doubleQuote = 34] = "doubleQuote", i9[i9.minus = 45] = "minus", i9[i9.openBrace = 123] = "openBrace", i9[i9.openBracket = 91] = "openBracket", i9[i9.plus = 43] = "plus", i9[i9.slash = 47] = "slash", i9[i9.formFeed = 12] = "formFeed", i9[i9.tab = 9] = "tab";
  })(Ng || (Ng = {}));
});
var zb, ui, Gb, qg = y(() => {
  zb = new Array(20).fill(0).map((i9, t) => " ".repeat(t)), ui = 200, Gb = { " ": { "\n": new Array(ui).fill(0).map((i9, t) => `
` + " ".repeat(t)), "\r": new Array(ui).fill(0).map((i9, t) => "\r" + " ".repeat(t)), "\r\n": new Array(ui).fill(0).map((i9, t) => `\r
` + " ".repeat(t)) }, "	": { "\n": new Array(ui).fill(0).map((i9, t) => `
` + "	".repeat(t)), "\r": new Array(ui).fill(0).map((i9, t) => "\r" + "	".repeat(t)), "\r\n": new Array(ui).fill(0).map((i9, t) => `\r
` + "	".repeat(t)) } };
});
var Oc = y(() => {
  "use strict";
  gs();
  qg();
});
function Vg(i9, t = [], e = nn.DEFAULT) {
  let r = null, n = [], o = [];
  function s(c) {
    Array.isArray(n) ? n.push(c) : r !== null && (n[r] = c);
  }
  return Vc(i9, { onObjectBegin: () => {
    let c = {};
    s(c), o.push(n), n = c, r = null;
  }, onObjectProperty: (c) => {
    r = c;
  }, onObjectEnd: () => {
    n = o.pop();
  }, onArrayBegin: () => {
    let c = [];
    s(c), o.push(n), n = c, r = null;
  }, onArrayEnd: () => {
    n = o.pop();
  }, onLiteralValue: s, onError: (c, l, d) => {
    t.push({ error: c, offset: l, length: d });
  } }, e), n[0];
}
function Nc(i9, t = [], e = nn.DEFAULT) {
  let r = { type: "array", offset: -1, length: -1, children: [], parent: void 0 };
  function n(c) {
    r.type === "property" && (r.length = c - r.offset, r = r.parent);
  }
  function o(c) {
    return r.children.push(c), c;
  }
  Vc(i9, { onObjectBegin: (c) => {
    r = o({ type: "object", offset: c, length: -1, parent: r, children: [] });
  }, onObjectProperty: (c, l, d) => {
    r = o({ type: "property", offset: l, length: -1, parent: r, children: [] }), r.children.push({ type: "string", value: c, offset: l, length: d, parent: r });
  }, onObjectEnd: (c, l) => {
    n(c + l), r.length = c + l - r.offset, r = r.parent, n(c + l);
  }, onArrayBegin: (c, l) => {
    r = o({ type: "array", offset: c, length: -1, parent: r, children: [] });
  }, onArrayEnd: (c, l) => {
    r.length = c + l - r.offset, r = r.parent, n(c + l);
  }, onLiteralValue: (c, l, d) => {
    o({ type: Xb(c), offset: l, length: d, parent: r, value: c }), n(l + d);
  }, onSeparator: (c, l, d) => {
    r.type === "property" && (c === ":" ? r.colonOffset = l : c === "," && n(l));
  }, onError: (c, l, d) => {
    t.push({ error: c, offset: l, length: d });
  } }, e);
  let a = r.children[0];
  return a && delete a.parent, a;
}
function qc(i9, t) {
  if (!i9) return;
  let e = i9;
  for (let r of t) if (typeof r == "string") {
    if (e.type !== "object" || !Array.isArray(e.children)) return;
    let n = false;
    for (let o of e.children) if (Array.isArray(o.children) && o.children[0].value === r && o.children.length === 2) {
      e = o.children[1], n = true;
      break;
    }
    if (!n) return;
  } else {
    let n = r;
    if (e.type !== "array" || n < 0 || !Array.isArray(e.children) || n >= e.children.length) return;
    e = e.children[n];
  }
  return e;
}
function Vc(i9, t, e = nn.DEFAULT) {
  let r = fs(i9, false), n = [], o = 0;
  function s(z) {
    return z ? () => o === 0 && z(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter()) : () => true;
  }
  function a(z) {
    return z ? (Se) => o === 0 && z(Se, r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter()) : () => true;
  }
  function c(z) {
    return z ? (Se) => o === 0 && z(Se, r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter(), () => n.slice()) : () => true;
  }
  function l(z) {
    return z ? () => {
      o > 0 ? o++ : z(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter(), () => n.slice()) === false && (o = 1);
    } : () => true;
  }
  function d(z) {
    return z ? () => {
      o > 0 && o--, o === 0 && z(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter());
    } : () => true;
  }
  let p = l(t.onObjectBegin), u = c(t.onObjectProperty), f = d(t.onObjectEnd), S = l(t.onArrayBegin), F = d(t.onArrayEnd), _ = c(t.onLiteralValue), j = a(t.onSeparator), H = s(t.onComment), C = a(t.onError), N = e && e.disallowComments, fe = e && e.allowTrailingComma;
  function L() {
    for (; ; ) {
      let z = r.scan();
      switch (r.getTokenError()) {
        case 4:
          D(14);
          break;
        case 5:
          D(15);
          break;
        case 3:
          D(13);
          break;
        case 1:
          N || D(11);
          break;
        case 2:
          D(12);
          break;
        case 6:
          D(16);
          break;
      }
      switch (z) {
        case 12:
        case 13:
          N ? D(10) : H();
          break;
        case 16:
          D(1);
          break;
        case 15:
        case 14:
          break;
        default:
          return z;
      }
    }
  }
  function D(z, Se = [], $c = []) {
    if (C(z), Se.length + $c.length > 0) {
      let sn = r.getToken();
      for (; sn !== 17; ) {
        if (Se.indexOf(sn) !== -1) {
          L();
          break;
        } else if ($c.indexOf(sn) !== -1) break;
        sn = L();
      }
    }
  }
  function Wt(z) {
    let Se = r.getTokenValue();
    return z ? _(Se) : (u(Se), n.push(Se)), L(), true;
  }
  function Fe() {
    switch (r.getToken()) {
      case 11:
        let z = r.getTokenValue(), Se = Number(z);
        isNaN(Se) && (D(2), Se = 0), _(Se);
        break;
      case 7:
        _(null);
        break;
      case 8:
        _(true);
        break;
      case 9:
        _(false);
        break;
      default:
        return false;
    }
    return L(), true;
  }
  function wt() {
    return r.getToken() !== 10 ? (D(3, [], [2, 5]), false) : (Wt(false), r.getToken() === 6 ? (j(":"), L(), ys() || D(4, [], [2, 5])) : D(5, [], [2, 5]), n.pop(), true);
  }
  function vs() {
    p(), L();
    let z = false;
    for (; r.getToken() !== 2 && r.getToken() !== 17; ) {
      if (r.getToken() === 5) {
        if (z || D(4, [], []), j(","), L(), r.getToken() === 2 && fe) break;
      } else z && D(6, [], []);
      wt() || D(4, [], [2, 5]), z = true;
    }
    return f(), r.getToken() !== 2 ? D(7, [2], []) : L(), true;
  }
  function nm() {
    S(), L();
    let z = true, Se = false;
    for (; r.getToken() !== 4 && r.getToken() !== 17; ) {
      if (r.getToken() === 5) {
        if (Se || D(4, [], []), j(","), L(), r.getToken() === 4 && fe) break;
      } else Se && D(6, [], []);
      z ? (n.push(0), z = false) : n[n.length - 1]++, ys() || D(4, [], [4, 5]), Se = true;
    }
    return F(), z || n.pop(), r.getToken() !== 4 ? D(8, [4], []) : L(), true;
  }
  function ys() {
    switch (r.getToken()) {
      case 3:
        return nm();
      case 1:
        return vs();
      case 10:
        return Wt(true);
      default:
        return Fe();
    }
  }
  return L(), r.getToken() === 17 ? e.allowEmptyContent ? true : (D(4, [], []), false) : ys() ? (r.getToken() !== 17 && D(9, [], []), true) : (D(4, [], []), false);
}
function Xb(i9) {
  switch (typeof i9) {
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "string":
      return "string";
    case "object": {
      if (i9) {
        if (Array.isArray(i9)) return "array";
      } else return "null";
      return "object";
    }
    default:
      return "null";
  }
}
var nn, jc = y(() => {
  "use strict";
  gs();
  (function(i9) {
    i9.DEFAULT = { allowTrailingComma: false };
  })(nn || (nn = {}));
});
var jg = y(() => {
  "use strict";
  Oc();
  jc();
});
var Ug, Wg, $g, Bg, on, Kg, Uc = y(() => {
  "use strict";
  Oc();
  jg();
  gs();
  jc();
  (function(i9) {
    i9[i9.None = 0] = "None", i9[i9.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", i9[i9.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", i9[i9.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", i9[i9.InvalidUnicode = 4] = "InvalidUnicode", i9[i9.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", i9[i9.InvalidCharacter = 6] = "InvalidCharacter";
  })(Ug || (Ug = {}));
  (function(i9) {
    i9[i9.OpenBraceToken = 1] = "OpenBraceToken", i9[i9.CloseBraceToken = 2] = "CloseBraceToken", i9[i9.OpenBracketToken = 3] = "OpenBracketToken", i9[i9.CloseBracketToken = 4] = "CloseBracketToken", i9[i9.CommaToken = 5] = "CommaToken", i9[i9.ColonToken = 6] = "ColonToken", i9[i9.NullKeyword = 7] = "NullKeyword", i9[i9.TrueKeyword = 8] = "TrueKeyword", i9[i9.FalseKeyword = 9] = "FalseKeyword", i9[i9.StringLiteral = 10] = "StringLiteral", i9[i9.NumericLiteral = 11] = "NumericLiteral", i9[i9.LineCommentTrivia = 12] = "LineCommentTrivia", i9[i9.BlockCommentTrivia = 13] = "BlockCommentTrivia", i9[i9.LineBreakTrivia = 14] = "LineBreakTrivia", i9[i9.Trivia = 15] = "Trivia", i9[i9.Unknown = 16] = "Unknown", i9[i9.EOF = 17] = "EOF";
  })(Wg || (Wg = {}));
  $g = Vg, Bg = Nc, on = qc;
  (function(i9) {
    i9[i9.InvalidSymbol = 1] = "InvalidSymbol", i9[i9.InvalidNumberFormat = 2] = "InvalidNumberFormat", i9[i9.PropertyNameExpected = 3] = "PropertyNameExpected", i9[i9.ValueExpected = 4] = "ValueExpected", i9[i9.ColonExpected = 5] = "ColonExpected", i9[i9.CommaExpected = 6] = "CommaExpected", i9[i9.CloseBraceExpected = 7] = "CloseBraceExpected", i9[i9.CloseBracketExpected = 8] = "CloseBracketExpected", i9[i9.EndOfFileExpected = 9] = "EndOfFileExpected", i9[i9.InvalidCommentToken = 10] = "InvalidCommentToken", i9[i9.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", i9[i9.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", i9[i9.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", i9[i9.InvalidUnicode = 14] = "InvalidUnicode", i9[i9.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", i9[i9.InvalidCharacter = 16] = "InvalidCharacter";
  })(Kg || (Kg = {}));
});
var Jg = {};
U(Jg, { register: () => rC });
function zg(i9, t) {
  return i9?.type === "array" && i9.children ? i9.children.map(t) : [];
}
async function eC(i9, t) {
  let e = i9, r = t[0], n = r.startsWith("@") ? 2 : 1, o = r.split(Dr.posix.sep).slice(0, n).join(Dr.posix.sep);
  for (; ; ) {
    let s = G.Uri.joinPath(e, "node_modules", o), a;
    try {
      a = await G.workspace.fs.stat(s);
    } catch {
    }
    if (a && a.type & G.FileType.Directory) {
      for (let l of t.map((d) => d.split(Dr.posix.sep).slice(n).join(Dr.posix.sep)).filter(Boolean).map((d) => G.Uri.joinPath(s, d))) if (await Sr(l)) return l;
    }
    let c = e;
    if (e = G.Uri.joinPath(e, ".."), c.path === e.path) return;
  }
}
async function tC(i9, t, e) {
  async function r(o) {
    return o.path.endsWith(".json") || await Sr(o) ? o : o.with({ path: `${o.path}${e === 1 ? "/tsconfig.json" : ".json"}` });
  }
  return ["./", "../"].some((o) => t.startsWith(o)) ? r(G.Uri.joinPath(i9, t)) : t.startsWith("/") || jn(t) ? r(G.Uri.file(t)) : eC(i9, [t, ...t.endsWith(".json") ? [] : [`${t}.json`, `${t}/tsconfig.json`]]);
}
function rC() {
  let i9 = ["**/[jt]sconfig.json", "**/[jt]sconfig.*.json"], e = ["json", "jsonc"].map((r) => i9.map((n) => ({ language: r, pattern: n }))).flat();
  return G.Disposable.from(G.commands.registerCommand(Gg, async ({ resourceUri: r, extendsValue: n, linkType: o }) => {
    let s = await tC(Tt.dirname(G.Uri.from(r)), n, o);
    if (s === void 0) {
      G.window.showErrorMessage(G.l10n.t("Failed to resolve {0} as module", n));
      return;
    }
    await G.commands.executeCommand("vscode.open", s);
  }), G.languages.registerDocumentLinkProvider(e, new Wc()));
}
var Dr, G, Gg, Wc, Xg = y(() => {
  "use strict";
  Uc();
  Dr = require("path"), G = m(require("vscode"));
  za();
  Xe();
  Un();
  Gg = "_typescript.openExtendsLink", Wc = class {
    provideDocumentLinks(t, e) {
      let r = Bg(t.getText());
      return r ? me([this.getExtendsLink(t, r), ...this.getFilesLinks(t, r), ...this.getReferencesLinks(t, r)]) : [];
    }
    getExtendsLink(t, e) {
      let r = on(e, ["extends"]);
      return r && this.tryCreateTsConfigLink(t, r, 0);
    }
    getReferencesLinks(t, e) {
      return zg(on(e, ["references"]), (r) => {
        let n = on(r, ["path"]);
        return n && this.tryCreateTsConfigLink(t, n, 1);
      });
    }
    tryCreateTsConfigLink(t, e, r) {
      if (!this.isPathValue(e)) return;
      let n = { resourceUri: { ...t.uri.toJSON(), $mid: void 0 }, extendsValue: e.value, linkType: r }, o = new G.DocumentLink(this.getRange(t, e), G.Uri.parse(`command:${Gg}?${JSON.stringify(n)}`));
      return o.tooltip = G.l10n.t("Follow link"), o;
    }
    getFilesLinks(t, e) {
      return zg(on(e, ["files"]), (r) => this.pathNodeToLink(t, r));
    }
    pathNodeToLink(t, e) {
      return this.isPathValue(e) ? new G.DocumentLink(this.getRange(t, e), this.getFileTarget(t, e)) : void 0;
    }
    isPathValue(t) {
      return t?.type === "string" && t.value && !t.value.includes("*");
    }
    getFileTarget(t, e) {
      return (0, Dr.isAbsolute)(e.value) ? G.Uri.file(e.value) : G.Uri.joinPath(Tt.dirname(t.uri), e.value);
    }
    getRange(t, e) {
      let r = e.offset, n = t.positionAt(r + 1), o = t.positionAt(r + (e.length - 1));
      return new G.Range(n, o);
    }
  };
});
var Ar, Qg, UE, WE, Yg = y(() => {
  "use strict";
  Ar = m(require("vscode")), Qg = (i9) => new Promise((t) => setTimeout(() => t(), i9)), UE = Object.freeze({ autoClosingBrackets: "editor.autoClosingBrackets", completeFunctionCalls: "js/ts.suggest.completeFunctionCalls", insertMode: "editor.suggest.insertMode", snippetSuggestions: "editor.snippetSuggestions", suggestSelection: "editor.suggestSelection", quoteStyle: "js/ts.preferences.quoteStyle" }), WE = Object.freeze(["insert", "replace"]);
});
var ms, hs, Zg = y(() => {
  "use strict";
  ms = m(require("vscode")), hs = class {
    async getConfigsForWorkspace(t) {
      if (!ms.workspace.workspaceFolders) return [];
      let e = /* @__PURE__ */ new Map();
      for (let r of await this.findConfigFiles(t)) {
        let n = ms.workspace.getWorkspaceFolder(r);
        n && e.set(r.fsPath, { uri: r, fsPath: r.fsPath, posixPath: r.path, workspaceFolder: n });
      }
      return e.values();
    }
    async findConfigFiles(t) {
      return await ms.workspace.findFiles("**/tsconfig*.json", "**/{node_modules,.*}/**", void 0, t);
    }
  };
});
var em = {};
U(em, { register: () => iC });
function iC(i9) {
  return V.tasks.registerTaskProvider("typescript", new Kc(i9));
}
var Be, V, Kc, tm = y(() => {
  "use strict";
  Uc();
  Be = m(require("path")), V = m(require("vscode"));
  Yg();
  X();
  Xe();
  ne();
  Y();
  Un();
  Jt();
  qr();
  Zg();
  Kc = class i9 extends T {
    constructor(e) {
      super();
      this.client = e;
      this.projectInfoRequestTimeout = 2e3;
      this.findConfigFilesTimeout = 5e3;
      this.autoDetect = "on";
      this.tsconfigProvider = new hs(), this._register(V.workspace.onDidChangeConfiguration(this.onConfigurationChanged, this)), this.onConfigurationChanged();
    }
    async provideTasks(e) {
      let r = V.workspace.workspaceFolders;
      if (this.autoDetect === "off" || !r?.length) return [];
      let n = /* @__PURE__ */ new Set(), o = [];
      for (let s of await this.getAllTsConfigs(e)) n.has(s.fsPath) || (n.add(s.fsPath), o.push(...await this.getTasksForProject(s)));
      return o;
    }
    async resolveTask(e) {
      let r = e.definition;
      if (/\\tsconfig.*\.json/.test(r.tsconfig)) {
        V.window.showWarningMessage(V.l10n.t('TypeScript Task in tasks.json contains "\\\\". TypeScript tasks tsconfig must use "/"'));
        return;
      }
      let n = r.tsconfig;
      if (!n || e.scope === void 0 || e.scope === V.TaskScope.Global || e.scope === V.TaskScope.Workspace) return;
      let o = e.scope.uri.with({ path: e.scope.uri.path + "/" + n }), s = { uri: o, fsPath: o.fsPath, posixPath: o.path, workspaceFolder: e.scope };
      return this.getTasksForProjectAndDefinition(s, r);
    }
    async getAllTsConfigs(e) {
      let r = (await Promise.all([this.getTsConfigForActiveFile(e), this.getTsConfigsInWorkspace(e)])).flat();
      return Promise.all(r.map(async (n) => await Sr(n.uri) ? n : void 0)).then(me);
    }
    async getTsConfigForActiveFile(e) {
      let r = V.window.activeTextEditor;
      if (r && ip(r.document.fileName)) {
        let a = r.document.uri;
        return [{ uri: a, fsPath: a.fsPath, posixPath: a.path, workspaceFolder: V.workspace.getWorkspaceFolder(a) }];
      }
      let n = this.getActiveTypeScriptFile();
      if (!n) return [];
      let o = await Promise.race([this.client.value.execute("projectInfo", { file: n, needFileNameList: false }, e), new Promise((a) => setTimeout(() => a(gt.NoContent), this.projectInfoRequestTimeout))]);
      if (o.type !== "response" || !o.body) return [];
      let { configFileName: s } = o.body;
      if (s && !fr(s)) {
        let a = Be.normalize(s), c = V.Uri.file(a), l = V.workspace.getWorkspaceFolder(c);
        return [{ uri: c, fsPath: a, posixPath: c.path, workspaceFolder: l }];
      }
      return [];
    }
    async getTsConfigsInWorkspace(e) {
      let r = new V.CancellationTokenSource();
      return e.onCancellationRequested(() => r.cancel()), Promise.race([this.tsconfigProvider.getConfigsForWorkspace(r.token).then((n) => Array.from(n)), Qg(this.findConfigFilesTimeout).then(() => (r.cancel(), []))]);
    }
    static async getCommand(e) {
      if (e.workspaceFolder) {
        let r = await i9.getLocalTscAtPath(Be.dirname(e.fsPath));
        if (r) return r;
        let n = await i9.getLocalTscAtPath(e.workspaceFolder.uri.fsPath);
        if (n) return n;
      }
      return "tsc";
    }
    static async getLocalTscAtPath(e) {
      let r = process.platform, n = Be.join(e, "node_modules", ".bin");
      if (r === "win32" && await Sr(V.Uri.file(Be.join(n, "tsc.cmd")))) return Be.join(n, "tsc.cmd");
      if ((r === "linux" || r === "darwin") && await Sr(V.Uri.file(Be.join(n, "tsc")))) return Be.join(n, "tsc");
    }
    getActiveTypeScriptFile() {
      let e = V.window.activeTextEditor;
      if (e) {
        let r = e.document;
        if (r && (r.languageId === "typescript" || r.languageId === "typescriptreact")) return this.client.value.toTsFilePath(r.uri);
      }
    }
    getBuildTask(e, r, n, o, s) {
      let a = new V.Task(s, e || V.TaskScope.Workspace, V.l10n.t("build - {0}", r), "tsc", new V.ShellExecution(n, o), "$tsc");
      return a.group = V.TaskGroup.Build, a.isBackground = false, a;
    }
    getWatchTask(e, r, n, o, s) {
      let a = new V.Task(s, e || V.TaskScope.Workspace, V.l10n.t("watch - {0}", r), "tsc", new V.ShellExecution(n, [...o, "--watch"]), "$tsc-watch");
      return a.group = V.TaskGroup.Build, a.isBackground = true, a;
    }
    async getTasksForProject(e) {
      let r = await i9.getCommand(e), n = await this.getBuildShellArgs(e), o = this.getLabelForTasks(e), s = [];
      return (this.autoDetect === "build" || this.autoDetect === "on") && s.push(this.getBuildTask(e.workspaceFolder, o, r, n, { type: "typescript", tsconfig: o })), (this.autoDetect === "watch" || this.autoDetect === "on") && s.push(this.getWatchTask(e.workspaceFolder, o, r, n, { type: "typescript", tsconfig: o, option: "watch" })), s;
    }
    async getTasksForProjectAndDefinition(e, r) {
      let n = await i9.getCommand(e), o = await this.getBuildShellArgs(e), s = this.getLabelForTasks(e), a;
      return r.option === void 0 ? a = this.getBuildTask(e.workspaceFolder, s, n, o, r) : r.option === "watch" && (a = this.getWatchTask(e.workspaceFolder, s, n, o, r)), a;
    }
    async getBuildShellArgs(e) {
      let r = ["-p", e.fsPath];
      try {
        let n = await V.workspace.fs.readFile(e.uri), o = Buffer.from(n).toString("utf-8");
        if ($g(o)?.references) return ["-b", e.fsPath];
      } catch {
      }
      return r;
    }
    getLabelForTasks(e) {
      if (e.workspaceFolder) {
        let r = V.Uri.file(Be.normalize(e.workspaceFolder.uri.fsPath));
        return Be.posix.relative(r.path, e.posixPath);
      }
      return e.posixPath;
    }
    onConfigurationChanged() {
      let e = h("tsc.autoDetect", void 0, { fallbackSection: "typescript" });
      this.autoDetect = typeof e > "u" ? "on" : e;
    }
  };
});
var sC = {};
U(sC, { activate: () => nC, deactivate: () => oC });
module.exports = dm(sC);
var pm = { dispose: () => {
} }, um = (i9, t, e) => pm, fi = class {
  constructor(t, e) {
    this.telemetryLevel = "off";
    this.onDidChangeTelemetryLevel = um;
  }
  sendTelemetryEvent(t, e, r) {
  }
  sendRawTelemetryEvent(t, e, r) {
  }
  sendDangerousTelemetryEvent(t, e, r) {
  }
  sendTelemetryErrorEvent(t, e, r) {
  }
  sendDangerousTelemetryErrorEvent(t, e, r) {
  }
  dispose() {
    return Promise.resolve();
  }
};
var rm = m(require("fs")), im = m(require("vscode"));
var Ss = class {
  constructor(t, e) {
    this.onCompletionAccepted = t;
    this._pluginManager = e;
  }
  configurePlugin(t, e) {
    this._pluginManager.setConfiguration(t, e);
  }
};
function Hc(i9, t) {
  return { getAPI(e) {
    if (e === 0) return new Ss(i9, t);
  } };
}
var cn = m(require("vscode")), gi = class {
  constructor() {
    this.commands = /* @__PURE__ */ new Map();
  }
  dispose() {
    for (let t of this.commands.values()) t.registration.dispose();
    this.commands.clear();
  }
  register(t) {
    let e = this.commands.get(t.id);
    return e ? e.refCount += 1 : (e = { refCount: 1, registration: cn.commands.registerCommand(t.id, t.execute, t) }, this.commands.set(t.id, e)), new cn.Disposable(() => {
      e.refCount -= 1, e.refCount <= 0 && (e.registration.dispose(), this.commands.delete(t.id));
    });
  }
};
var ge = m(require("vscode"));
ne();
var Ts = "typescriptteam.native-preview", Ps = ["typescriptteam.vscode-typescript", Ts];
function cr() {
  for (let i9 of Ps) {
    let t = ge.extensions.getExtension(i9);
    if (t) return t;
  }
}
var dn = class {
  constructor() {
    this.id = "typescript.experimental.enableTsgo";
  }
  async execute() {
    await zc(true);
  }
}, _r = class {
  constructor() {
    this.id = "typescript.experimental.disableTsgo";
  }
  async execute() {
    await zc(false);
  }
};
async function zc(i9) {
  if (cr() || await ge.window.showErrorMessage(ge.l10n.t("The TypeScript Go extension is not installed."), { title: ge.l10n.t("Open on GitHub"), isCloseAffordance: true }) && await ge.env.openExternal(ge.Uri.parse("https://github.com/microsoft/typescript-go")), h("experimental.useTsgo", false, { fallbackSection: "typescript" }) === i9) return;
  let r = ge.ConfigurationTarget.Global, n = ge.workspace.getConfiguration(De), o = n.inspect("experimental.useTsgo"), s = ge.workspace.getConfiguration("typescript").inspect("experimental.useTsgo");
  if (o?.workspaceValue !== void 0 || s?.workspaceValue !== void 0) r = ge.ConfigurationTarget.Workspace;
  else if (o?.workspaceFolderValue !== void 0 || s?.workspaceFolderValue !== void 0) r = ge.ConfigurationTarget.WorkspaceFolder;
  else {
    let c = ge.workspace.getConfiguration("typescript-go").inspect("executablePath");
    c?.workspaceValue !== void 0 ? r = ge.ConfigurationTarget.Workspace : c?.workspaceFolderValue !== void 0 && (r = ge.ConfigurationTarget.WorkspaceFolder);
  }
  await n.update("experimental.useTsgo", i9, r);
}
var pn = class {
  constructor(t) {
    this.pluginManager = t;
    this.id = "_typescript.configurePlugin";
  }
  execute(t, e) {
    this.pluginManager.setConfiguration(t, e);
  }
};
qr();
var Pn = class {
  constructor(t, e) {
    this.activeJsTsEditorTracker = t;
    this.lazyClientHost = e;
    this.id = "typescript.goToProjectConfig";
  }
  execute() {
    let t = this.activeJsTsEditorTracker.activeJsTsEditor;
    t && wi(0, this.lazyClientHost.value.serviceClient, t.document.uri);
  }
}, xn = class {
  constructor(t, e) {
    this.activeJsTsEditorTracker = t;
    this.lazyClientHost = e;
    this.id = "javascript.goToProjectConfig";
  }
  execute() {
    let t = this.activeJsTsEditorTracker.activeJsTsEditor;
    t && wi(1, this.lazyClientHost.value.serviceClient, t.document.uri);
  }
};
Js();
Xs();
var Rn = class {
  constructor(t) {
    this.lazyClientHost = t;
    this.id = "typescript.openTsServerLog";
  }
  execute() {
    this.lazyClientHost.value.serviceClient.openTsServerLogFile();
  }
};
var kn = class {
  constructor(t) {
    this.lazyClientHost = t;
    this.id = "typescript.reloadProjects";
  }
  execute() {
    this.lazyClientHost.value.reloadProjects();
  }
}, In = class {
  constructor(t) {
    this.lazyClientHost = t;
    this.id = "javascript.reloadProjects";
  }
  execute() {
    this.lazyClientHost.value.reloadProjects();
  }
};
var En = class {
  constructor(t) {
    this.lazyClientHost = t;
    this.id = "typescript.restartTsServer";
  }
  execute() {
    this.lazyClientHost.value.serviceClient.restartTsServer(true);
  }
};
var Dn = class {
  constructor(t) {
    this.lazyClientHost = t;
    this.id = "typescript.reselectNodeVersion";
  }
  async execute() {
    await this.lazyClientHost.value.serviceClient.promptForNodeVersion();
  }
};
var jr = class i {
  constructor(t) {
    this.lazyClientHost = t;
    this.id = i.id;
  }
  static {
    this.id = "typescript.selectTypeScriptVersion";
  }
  execute() {
    this.lazyClientHost.value.serviceClient.showVersionPicker();
  }
};
var Gd = m(require("vscode"));
Et();
function ay(i9) {
  return i9 && typeof i9.isCancellationRequested == "boolean" && typeof i9.onCancellationRequested == "function";
}
var An = class {
  constructor(t) {
    this.lazyClientHost = t;
    this.id = "typescript.tsserverRequest";
  }
  async execute(t, e, r, n) {
    if (ay(n) || (n = le), e && typeof e == "object" && !Array.isArray(e)) {
      let s = e, a = s.file instanceof Gd.Uri, c = typeof s.$traceId == "string";
      if (a || c) {
        let l = { file: void 0, ...e };
        if (a) {
          let d = this.lazyClientHost.value.serviceClient;
          l.file = d.toOpenTsFilePath(s.file);
        }
        c && this.lazyClientHost.value.serviceClient.telemetryReporter.logTraceEvent("TSServerRequestCommand.execute", s.$traceId, JSON.stringify({ command: t })), e = l;
      }
    }
    if (["emit-output", "semanticDiagnosticsSync", "syntacticDiagnosticsSync", "suggestionDiagnosticsSync", "quickinfo", "quickinfo-full", "completionInfo"].includes(t) || t.startsWith("_")) return this.lazyClientHost.value.serviceClient.execute(t, e, n, r);
  }
};
function Jd(i9, t, e, r) {
  i9.register(new kn(t)), i9.register(new In(t)), i9.register(new jr(t)), i9.register(new Rn(t)), i9.register(new En(t)), i9.register(new Dn(t)), i9.register(new Pn(r, t)), i9.register(new xn(r, t)), i9.register(new pn(e)), i9.register(new Vr()), i9.register(new An(t)), i9.register(new Bt()), i9.register(new dn()), i9.register(new _r());
}
var tp = m(require("os")), vr = m(require("path")), Gt = m(require("vscode")), rp = m(require("child_process")), Ln = m(require("fs"));
var Xd = m(require("vscode"));
ne();
ki();
var Qd = m(require("os")), ut = ((o) => (o[o.Off = 0] = "Off", o[o.Normal = 1] = "Normal", o[o.Terse = 2] = "Terse", o[o.Verbose = 3] = "Verbose", o[o.RequestTime = 4] = "RequestTime", o))(ut || {});
((e) => {
  function i9(r) {
    switch (r?.toLowerCase()) {
      case "normal":
        return 1;
      case "terse":
        return 2;
      case "verbose":
        return 3;
      case "requestTime":
        return 4;
      case "off":
      default:
        return 0;
    }
  }
  e.fromString = i9;
  function t(r) {
    switch (r) {
      case 1:
        return "normal";
      case 2:
        return "terse";
      case 3:
        return "verbose";
      case 4:
        return "requestTime";
      case 0:
      default:
        return "off";
    }
  }
  e.toString = t;
})(ut ||= {});
var Zs = class i2 {
  constructor(t) {
    this.target = i2.readTarget(t), this.module = i2.readModule(t), this.checkJs = i2.readCheckJs(t), this.experimentalDecorators = i2.readExperimentalDecorators(t), this.strictNullChecks = i2.readImplicitStrictNullChecks(t), this.strictFunctionTypes = i2.readImplicitStrictFunctionTypes(t), this.strict = i2.readImplicitStrict(t);
  }
  isEqualTo(t) {
    return rt(this, t);
  }
  static readTarget(t) {
    return t.get("js/ts.implicitProjectConfig.target");
  }
  static readModule(t) {
    return t.get("js/ts.implicitProjectConfig.module");
  }
  static readCheckJs(t) {
    let e = t.inspect("js/ts.implicitProjectConfig.checkJs");
    if (this.hasValue(e)) return t.get("js/ts.implicitProjectConfig.checkJs");
  }
  static readExperimentalDecorators(t) {
    return t.get("js/ts.implicitProjectConfig.experimentalDecorators", false);
  }
  static readImplicitStrictNullChecks(t) {
    return t.get("js/ts.implicitProjectConfig.strictNullChecks", true);
  }
  static readImplicitStrictFunctionTypes(t) {
    return t.get("js/ts.implicitProjectConfig.strictFunctionTypes", true);
  }
  static readImplicitStrict(t) {
    return t.get("js/ts.implicitProjectConfig.strict", true);
  }
  static hasValue(t) {
    return t === void 0 ? false : t.globalValue !== void 0 || t.workspaceValue !== void 0 || t.workspaceFolderValue !== void 0 || t.globalLanguageValue !== void 0 || t.workspaceLanguageValue !== void 0 || t.workspaceFolderLanguageValue !== void 0;
  }
};
function Yd(i9, t) {
  return rt(i9, t);
}
var Ys = "vscode", ea = 3072;
function ly() {
  let i9 = Qd.totalmem(), t = 1024 * 1024 * 1024, e = i9 / t, n = Math.floor(Math.min(e * 0.5, 32) * 1024);
  return n < ea && (n = ea), n;
}
var _n = class {
  loadFromWorkspace() {
    let t = Xd.workspace.getConfiguration();
    return { locale: this.readLocale(), globalTsdk: this.readGlobalTsdk(t), localTsdk: this.readLocalTsdk(t), npmLocation: this.readNpmLocation(), tsServerLogLevel: this.readTsServerLogLevel(), tsServerPluginPaths: this.readTsServerPluginPaths(), implicitProjectConfiguration: new Zs(t), disableAutomaticTypeAcquisition: this.readDisableAutomaticTypeAcquisition(t), useSyntaxServer: this.readUseSyntaxServer(t), webProjectWideIntellisenseEnabled: this.readWebProjectWideIntellisenseEnable(), webProjectWideIntellisenseSuppressSemanticErrors: this.readWebProjectWideIntellisenseSuppressSemanticErrors(), webTypeAcquisitionEnabled: this.readWebTypeAcquisition(), enableDiagnosticsTelemetry: this.readEnableDiagnosticsTelemetry(), enableProjectDiagnostics: this.readEnableProjectDiagnostics(), maxTsServerMemory: this.readMaxTsServerMemory(), useBundledNode: this.readUseBundledNode(), diagnosticDir: this.readDiagnosticDir(), heapSnapshot: this.readHeapSnapshot(), heapProfile: this.readHeapProfileConfiguration(), enablePromptUseWorkspaceTsdk: this.readEnablePromptUseWorkspaceTsdk(), useVsCodeWatcher: this.readUseVsCodeWatcher(t), watchOptions: this.readWatchOptions(), includePackageJsonAutoImports: this.readIncludePackageJsonAutoImports(), enableTsServerTracing: this.readEnableTsServerTracing(), localNodePath: this.readLocalNodePath(t), globalNodePath: this.readGlobalNodePath(t), workspaceSymbolsExcludeLibrarySymbols: this.readWorkspaceSymbolsExcludeLibrarySymbols() };
  }
  readTsServerLogLevel() {
    let t = h("tsserver.log", "off", { fallbackSection: "typescript" });
    return ut.fromString(t);
  }
  readTsServerPluginPaths() {
    return h("tsserver.pluginPaths", [], { fallbackSection: "typescript" });
  }
  readNpmLocation() {
    return h("tsserver.npm.path", null, { fallbackSection: "typescript", fallbackSubSectionNameOverride: "npm" });
  }
  readDisableAutomaticTypeAcquisition(t) {
    let e = h("tsserver.automaticTypeAcquisition.enabled", void 0, { fallbackSection: "typescript" });
    return e !== void 0 ? !e : t.get("typescript.disableAutomaticTypeAcquisition", false);
  }
  readLocale() {
    let t = h("locale", "auto", { fallbackSection: "typescript" });
    return !t || t === "auto" ? null : t;
  }
  readUseSyntaxServer(t) {
    switch (h("tsserver.useSyntaxServer", void 0, { fallbackSection: "typescript" })) {
      case "never":
        return 0;
      case "always":
        return 1;
      case "auto":
        return 2;
    }
    let r = t.get("typescript.tsserver.useSeparateSyntaxServer", true);
    return r === "forAllRequests" ? 1 : r === true ? 2 : 0;
  }
  readEnableDiagnosticsTelemetry() {
    return h("enableDiagnosticsTelemetry", false, { fallbackSection: "typescript" });
  }
  readEnableProjectDiagnostics() {
    return h("tsserver.experimental.enableProjectDiagnostics", false, { fallbackSection: "typescript" });
  }
  readUseVsCodeWatcher(t) {
    let e = t.get("files.watcherExclude") ?? {};
    if (e["**/node_modules/*/**"] === true || e["**/node_modules/**"] === true || e["**/node_modules"] === true || e["**"] === true) return false;
    let r = t.inspect("typescript.tsserver.experimental.useVsCodeWatcher");
    return typeof r?.globalValue == "boolean" ? r.globalValue : typeof r?.workspaceValue == "boolean" ? r.workspaceValue : typeof r?.workspaceFolderValue == "boolean" ? r.workspaceFolderValue : h("tsserver.watchOptions", Ys, { fallbackSection: "typescript" }) === Ys;
  }
  readWatchOptions() {
    let t = h("tsserver.watchOptions", void 0, { fallbackSection: "typescript" });
    if (!(!t || t === Ys)) return { ...t ?? {} };
  }
  readIncludePackageJsonAutoImports() {
    return h("preferences.includePackageJsonAutoImports", void 0, { fallbackSection: "typescript" });
  }
  readMaxTsServerMemory() {
    let r = h("tsserver.maxMemory", -1, { fallbackSection: "typescript", fallbackSubSectionNameOverride: "tsserver.maxTsServerMemory" });
    return r <= 0 && (r = ly()), r < 128 && (r = 128), Number.isSafeInteger(r) ? Math.max(r, 128) : ea;
  }
  readUseBundledNode() {
    return h("tsserver.experimental.useBundledNode", true, { fallbackSection: "typescript" });
  }
  readDiagnosticDir() {
    let t = h("tsserver.diagnosticDir", void 0, { fallbackSection: "typescript" });
    return typeof t == "string" && t.length > 0 ? t : void 0;
  }
  readHeapSnapshot() {
    let e = h("tsserver.heapSnapshot", 0, { fallbackSection: "typescript" });
    return Number.isSafeInteger(e) ? Math.max(e, 0) : 0;
  }
  readHeapProfileConfiguration() {
    let e = h("tsserver.heapProfile", { enabled: false, dir: void 0, interval: void 0 }, { fallbackSection: "typescript" }), r = typeof e.enabled == "boolean" ? e.enabled : false, n = typeof e.dir == "string" && e.dir.length > 0 ? e.dir : void 0, o = typeof e.interval == "number" && Number.isSafeInteger(e.interval) && e.interval > 0 ? e.interval : void 0;
    return { enabled: r, dir: n, interval: o };
  }
  readEnablePromptUseWorkspaceTsdk() {
    return h("tsdk.promptToUseWorkspaceVersion", false, { fallbackSection: "typescript", fallbackSubSectionNameOverride: "enablePromptUseWorkspaceTsdk" });
  }
  readEnableTsServerTracing() {
    return h("tsserver.tracing.enabled", false, { fallbackSection: "typescript", fallbackSubSectionNameOverride: "tsserver.enableTracing" });
  }
  readWorkspaceSymbolsExcludeLibrarySymbols() {
    return h("workspaceSymbols.excludeLibrarySymbols", true, { scope: null, fallbackSection: "typescript" });
  }
  readWebProjectWideIntellisenseEnable() {
    return h("tsserver.web.projectWideIntellisense.enabled", true, { fallbackSection: "typescript" });
  }
  readWebProjectWideIntellisenseSuppressSemanticErrors() {
    return this.readWebTypeAcquisition() && h("tsserver.web.projectWideIntellisense.suppressSemanticErrors", false, { fallbackSection: "typescript" });
  }
  readWebTypeAcquisition() {
    return h("tsserver.web.typeAcquisition.enabled", true, { fallbackSection: "typescript" });
  }
};
var Zd = m(require("path")), ep = m(require("vscode")), zt = class {
  static asAbsoluteWorkspacePath(t) {
    for (let e of ep.workspace.workspaceFolders || []) {
      let r = [`./${e.name}/`, `${e.name}/`, `.\\${e.name}\\`, `${e.name}\\`];
      for (let n of r) if (t.startsWith(n)) return Zd.join(e.uri.fsPath, t.replace(n, ""));
    }
  }
};
var Fn = class extends _n {
  fixPathPrefixes(t) {
    let e = ["~" + vr.sep];
    for (let r of e) if (t.startsWith(r)) return vr.join(tp.homedir(), t.slice(r.length));
    return t;
  }
  readGlobalTsdk(t) {
    let e = t.inspect("js/ts.tsdk.path");
    if (e && typeof e.globalValue == "string") return this.fixPathPrefixes(e.globalValue);
    let r = t.inspect("typescript.tsdk");
    return r && typeof r.globalValue == "string" ? this.fixPathPrefixes(r.globalValue) : null;
  }
  readLocalTsdk(t) {
    let e = t.inspect("js/ts.tsdk.path");
    if (e && typeof e.workspaceValue == "string") return this.fixPathPrefixes(e.workspaceValue);
    let r = t.inspect("typescript.tsdk");
    return r && typeof r.workspaceValue == "string" ? this.fixPathPrefixes(r.workspaceValue) : null;
  }
  readLocalNodePath(t) {
    return this.validatePath(this.readLocalNodePathWorker(t));
  }
  readLocalNodePathWorker(t) {
    let e = t.inspect("js/ts.tsserver.node.path"), r = e?.workspaceValue && typeof e.workspaceValue == "string" ? e : t.inspect("typescript.tsserver.nodePath");
    if (r?.workspaceValue && typeof r.workspaceValue == "string") {
      if (r.workspaceValue === "node") return this.findNodePath();
      let n = this.fixPathPrefixes(r.workspaceValue);
      return vr.isAbsolute(n) ? n : zt.asAbsoluteWorkspacePath(n) || null;
    }
    return null;
  }
  readGlobalNodePath(t) {
    return this.validatePath(this.readGlobalNodePathWorker(t));
  }
  readGlobalNodePathWorker(t) {
    let e = t.inspect("js/ts.tsserver.node.path"), r = e?.globalValue && typeof e.globalValue == "string" ? e : t.inspect("typescript.tsserver.nodePath");
    if (r?.globalValue && typeof r.globalValue == "string") {
      if (r.globalValue === "node") return this.findNodePath();
      let n = this.fixPathPrefixes(r.globalValue);
      if (vr.isAbsolute(n)) return n;
    }
    return null;
  }
  findNodePath() {
    try {
      return rp.execFileSync("node", ["-e", "console.log(process.execPath)"], { windowsHide: true, timeout: 2e3, cwd: Gt.workspace.workspaceFolders?.[0].uri.fsPath, encoding: "utf-8" }).trim();
    } catch {
      return Gt.window.showWarningMessage(Gt.l10n.t("Could not detect a Node installation to run TS Server.")), null;
    }
  }
  validatePath(t) {
    return t && (!Ln.existsSync(t) || Ln.lstatSync(t).isDirectory()) ? (Gt.window.showWarningMessage(Gt.l10n.t("The path {0} doesn't point to a valid Node installation to run TS Server. Falling back to bundled Node.", t)), null) : t;
  }
};
var Mn = class {
  constructor(t) {
    this._sharedProperties = {};
    this._reporter = t;
  }
  setSharedProperty(t, e) {
    this._sharedProperties[t] = e;
  }
  postEvent(t, e) {
    let r = { ...this._sharedProperties, ...Object.fromEntries(e) };
    this._reporter.sendTelemetryEvent(t, r);
  }
  postEventObj(t, e) {
    this._reporter.sendTelemetryEvent(t, { ...this._sharedProperties, ...e });
  }
  dispose() {
    this._reporter.dispose();
  }
};
var On = class {
  constructor(t, e, r, n) {
    this._experimentationServicePromise = dy(t, e, r, n);
  }
  async getTreatmentVariable(t, e) {
    let r = await this._experimentationServicePromise;
    try {
      return await r.getTreatmentVariableAsync("vscode", t, true) ?? e;
    } catch {
      return e;
    }
  }
};
async function dy(i9, t, e, r) {
  return { initialFetch: Promise.resolve(), getTreatmentVariableAsync: async () => {
  } };
}
var tn = m(require("vscode"));
var ve = m(require("vscode"));
Jt();
ne();
aa();
var Vo = require("path");
nt();
Kn();
var br = m(require("vscode"));
Xe();
Y();
ki();
Wn();
function Py(i9, t) {
  return i9 === t ? true : i9.code === t.code && i9.message === t.message && i9.severity === t.severity && i9.source === t.source && i9.range.isEqual(t.range) && At(i9.relatedInformation || Ri, t.relatedInformation || Ri, (e, r) => e.message === r.message && e.location.range.isEqual(r.location.range) && e.location.uri.fsPath === r.location.uri.fsPath) && At(i9.tags || Ri, t.tags || Ri);
}
var ca = class {
  constructor(t, e) {
    this.file = t;
    this.language = e;
    this._diagnostics = /* @__PURE__ */ new Map();
  }
  updateDiagnostics(t, e, r, n) {
    return t !== this.language && (this._diagnostics.clear(), this.language = t), this._diagnostics.get(e)?.length === 0 && r.length === 0 ? false : e === 3 ? this.updateRegionDiagnostics(r, n) : (this._diagnostics.set(e, r), true);
  }
  getAllDiagnostics(t) {
    return t.getValidate(this.language) ? [...this.get(0), ...this.get(1), ...this.getSuggestionDiagnostics(t)] : [];
  }
  delete(t) {
    for (let [e, r] of this._diagnostics) this._diagnostics.set(e, r.filter((n) => !Py(n, t)));
  }
  updateRegionDiagnostics(t, e) {
    if (!this._diagnostics.get(1)) return this._diagnostics.set(1, t), true;
    let n = this._diagnostics.get(1).filter((o) => !e.some((s) => o.range.intersection(s)));
    return n.push(...t), this._diagnostics.set(1, n), true;
  }
  getSuggestionDiagnostics(t) {
    let e = t.getEnableSuggestions(this.language);
    return this.get(2).filter((r) => e ? true : r.tags && (r.tags.includes(br.DiagnosticTag.Unnecessary) || r.tags.includes(br.DiagnosticTag.Deprecated)));
  }
  get(t) {
    return this._diagnostics.get(t) || [];
  }
};
function xy(i9, t) {
  return i9.validate === t.validate && i9.enableSuggestions === t.enableSuggestions;
}
var la = class i3 {
  constructor() {
    this._languageSettings = /* @__PURE__ */ new Map();
  }
  static {
    this.defaultSettings = { validate: true, enableSuggestions: true };
  }
  getValidate(t) {
    return this.get(t).validate;
  }
  setValidate(t, e) {
    return this.update(t, (r) => ({ validate: e, enableSuggestions: r.enableSuggestions }));
  }
  getEnableSuggestions(t) {
    return this.get(t).enableSuggestions;
  }
  setEnableSuggestions(t, e) {
    return this.update(t, (r) => ({ validate: r.validate, enableSuggestions: e }));
  }
  get(t) {
    return this._languageSettings.get(t) || i3.defaultSettings;
  }
  update(t, e) {
    let r = this.get(t), n = e(r);
    return this._languageSettings.set(t, n), !xy(r, n);
  }
}, da = class extends T {
  constructor(e, r) {
    super();
    this._telemetryReporter = e;
    this._diagnosticsCollection = r;
    this._diagnosticCodesMap = /* @__PURE__ */ new Map();
    this._diagnosticSnapshotsMap = new Me((e2) => e2.toString(), { onCaseInsensitiveFileSystem: false });
    this._register(br.workspace.onDidChangeTextDocument((n) => {
      (n.document.languageId === "typescript" || n.document.languageId === "typescriptreact") && this._updateAllDiagnosticCodesAfterTimeout();
    })), this._updateAllDiagnosticCodesAfterTimeout(), this._registerTelemetryEventEmitter();
  }
  logDiagnosticsPerformanceTelemetry(e) {
    for (let r of e) this._telemetryReporter.logTelemetry("diagnostics.performance", { syntaxDiagDuration: r.syntaxDiag, semanticDiagDuration: r.semanticDiag, suggestionDiagDuration: r.suggestionDiag, regionSemanticDiagDuration: r.regionSemanticDiag, fileLineCount: r.fileLineCount });
  }
  _updateAllDiagnosticCodesAfterTimeout() {
    clearTimeout(this._timeout), this._timeout = setTimeout(() => this._updateDiagnosticCodes(), 5e3);
  }
  _increaseDiagnosticCodeCount(e) {
    e !== void 0 && this._diagnosticCodesMap.set(Number(e), (this._diagnosticCodesMap.get(Number(e)) || 0) + 1);
  }
  _updateDiagnosticCodes() {
    this._diagnosticsCollection.forEach((e, r) => {
      let n = this._diagnosticSnapshotsMap.get(e);
      this._diagnosticSnapshotsMap.set(e, r), r.filter((s) => !n?.some((a) => rt(s, a))).forEach((s) => {
        let a = s.code;
        this._increaseDiagnosticCodeCount(typeof a == "string" || typeof a == "number" ? a : a?.value);
      });
    });
  }
  _registerTelemetryEventEmitter() {
    this._telemetryEmitter = setInterval(() => {
      if (this._diagnosticCodesMap.size > 0) {
        let e = "";
        this._diagnosticCodesMap.forEach((r, n) => {
          e += `${n}:${r},`;
        }), this._diagnosticCodesMap.clear(), this._telemetryReporter.logTelemetry("typescript.diagnostics", { diagnosticCodes: e });
      }
    }, 300 * 1e3);
  }
  dispose() {
    super.dispose(), clearTimeout(this._timeout), clearInterval(this._telemetryEmitter);
  }
}, $n = class extends T {
  constructor(e, r, n, o) {
    super();
    this._settings = new la();
    this._updateDelay = 50;
    this._diagnostics = new Me(void 0, { onCaseInsensitiveFileSystem: o }), this._pendingUpdates = new Me(void 0, { onCaseInsensitiveFileSystem: o }), this._currentDiagnostics = this._register(br.languages.createDiagnosticCollection(e)), (Math.random() * 1e3 <= 1 || r.enableDiagnosticsTelemetry) && (this._diagnosticsTelemetryManager = this._register(new da(n, this._currentDiagnostics)));
  }
  dispose() {
    super.dispose();
    for (let e of this._pendingUpdates.values()) clearTimeout(e);
    this._pendingUpdates.clear();
  }
  reInitialize() {
    this._currentDiagnostics.clear(), this._diagnostics.clear();
  }
  setValidate(e, r) {
    this._settings.setValidate(e, r) && this.rebuildAll();
  }
  setEnableSuggestions(e, r) {
    this._settings.setEnableSuggestions(e, r) && this.rebuildAll();
  }
  updateDiagnostics(e, r, n, o, s) {
    let a = false, c = this._diagnostics.get(e);
    if (c) a = c.updateDiagnostics(r, n, o, s);
    else if (o.length) {
      let l = new ca(e, r);
      l.updateDiagnostics(r, n, o, s), this._diagnostics.set(e, l), a = true;
    }
    a && this.scheduleDiagnosticsUpdate(e);
  }
  configFileDiagnosticsReceived(e, r) {
    this._currentDiagnostics.set(e, r);
  }
  deleteAllDiagnosticsInFile(e) {
    this._currentDiagnostics.delete(e), this._diagnostics.delete(e);
  }
  deleteDiagnostic(e, r) {
    let n = this._diagnostics.get(e);
    n && (n.delete(r), this.rebuildFile(n));
  }
  getDiagnostics(e) {
    return this._currentDiagnostics.get(e) || [];
  }
  logDiagnosticsPerformanceTelemetry(e) {
    this._diagnosticsTelemetryManager?.logDiagnosticsPerformanceTelemetry(e);
  }
  scheduleDiagnosticsUpdate(e) {
    this._pendingUpdates.has(e) || this._pendingUpdates.set(e, setTimeout(() => this.updateCurrentDiagnostics(e), this._updateDelay));
  }
  updateCurrentDiagnostics(e) {
    this._pendingUpdates.has(e) && (clearTimeout(this._pendingUpdates.get(e)), this._pendingUpdates.delete(e));
    let r = this._diagnostics.get(e);
    this._currentDiagnostics.set(e, r ? r.getAllDiagnostics(this._settings) : []);
  }
  rebuildAll() {
    this._currentDiagnostics.clear();
    for (let e of this._diagnostics.values()) this.rebuildFile(e);
  }
  rebuildFile(e) {
    this._currentDiagnostics.set(e.file, e.getAllDiagnostics(this._settings));
  }
};
var Bn = class {
  constructor() {
    this.version = -1;
    this.document = "";
  }
  execute(t, e) {
    return this.response && this.matches(t) ? this.response = this.response.then((r) => r.type === "cancelled" ? e() : r) : this.reset(t, e);
  }
  matches(t) {
    return this.version === t.version && this.document === t.uri.toString();
  }
  async reset(t, e) {
    return this.version = t.version, this.document = t.uri.toString(), this.response = e();
  }
};
X();
Y();
ne();
Kr();
var ei = class extends T {
  constructor(e, r, n, o, s, a, c) {
    super();
    this.client = e;
    this.description = r;
    this.commandManager = n;
    this.telemetryReporter = o;
    this.typingsStatus = s;
    this.fileConfigurationManager = a;
    this.onCompletionAccepted = c;
    let l = { languageId: this.description.languageIds[0] }, d = this._register(new ar("validate.enabled", true, { scope: l, fallbackSection: this.id, fallbackSubSectionNameOverride: "validate.enable" }));
    this.updateValidate(d.getValue()), this._register(d.onDidChange((u) => this.updateValidate(u)));
    let p = this._register(new ar("suggestionActions.enabled", true, { scope: l, fallbackSection: this.id }));
    this.updateSuggestionDiagnostics(p.getValue()), this._register(p.onDidChange((u) => this.updateSuggestionDiagnostics(u))), e.onReady(() => this.registerProviders());
  }
  get documentSelector() {
    let e = [], r = [];
    for (let n of this.description.languageIds) {
      r.push({ language: n });
      for (let o of qn()) e.push({ language: n, scheme: o });
    }
    return { semantic: e, syntax: r };
  }
  async registerProviders() {
    let e = this.documentSelector, r = new Bn();
    await Promise.all([Promise.resolve().then(() => (pp(), dp)).then((n) => this._register(n.register(e, this.client))), Promise.resolve().then(() => (Sp(), yp)).then((n) => this._register(n.register(e, this.description, this.client, r))), Promise.resolve().then(() => (Cp(), bp)).then((n) => this._register(n.register(e, this.description, this.client, r))), Promise.resolve().then(() => (Ep(), Ip)).then((n) => this._register(n.register(e, this.description, this.client, this.typingsStatus, this.fileConfigurationManager, this.commandManager, this.telemetryReporter, this.onCompletionAccepted))), Promise.resolve().then(() => (_p(), Ap)).then((n) => this._register(n.register(e, this.description, this.client, this.fileConfigurationManager))), Promise.resolve().then(() => (Mp(), Lp)).then((n) => this._register(n.register(e, this.client))), Promise.resolve().then(() => (qp(), Np)).then((n) => this._register(n.register(e, this.client))), Promise.resolve().then(() => (Up(), jp)).then((n) => this._register(n.register(e, this.client))), Promise.resolve().then(() => (Kp(), Wp)).then((n) => this._register(n.register(e, this.client, r))), Promise.resolve().then(() => (Bp(), $p)).then((n) => this._register(n.register(this.client, this.commandManager))), Promise.resolve().then(() => (fu(), uu)).then((n) => this._register(n.register(e, this.client, this.fileConfigurationManager, this.client.diagnosticsManager))), Promise.resolve().then(() => (mu(), gu)).then((n) => this._register(n.register(e, this.client))), Promise.resolve().then(() => (vu(), hu)).then((n) => this._register(n.register(e, this.description, this.client, this.fileConfigurationManager))), Promise.resolve().then(() => (Su(), yu)).then((n) => this._register(n.register(e, this.client, this.fileConfigurationManager))), Promise.resolve().then(() => (Tu(), Cu)).then((n) => this._register(n.register(e, this.client))), Promise.resolve().then(() => (xu(), Pu)).then((n) => this._register(n.register(e, this.description, this.client, this.fileConfigurationManager, this.telemetryReporter))), Promise.resolve().then(() => (ku(), Ru)).then((n) => this._register(n.register(e, this.description, this.client, this.fileConfigurationManager))), Promise.resolve().then(() => (Eu(), Iu)).then((n) => this._register(n.register(e, this.client))), Promise.resolve().then(() => (Au(), Du)).then((n) => this._register(n.register(e, this.client, this.commandManager, this.fileConfigurationManager, this.telemetryReporter))), Promise.resolve().then(() => (Lu(), Fu)).then((n) => this._register(n.register(e, this.client, this.fileConfigurationManager, this.commandManager, this.client.diagnosticsManager, this.telemetryReporter))), Promise.resolve().then(() => (Hu(), Bu)).then((n) => this._register(n.register(e, this.client, r, this.fileConfigurationManager, this.commandManager, this.telemetryReporter))), Promise.resolve().then(() => (Ju(), Gu)).then((n) => this._register(n.register(e, this.client))), Promise.resolve().then(() => (Qu(), Xu)).then((n) => this._register(n.register(e, this.description, this.client, this.fileConfigurationManager))), Promise.resolve().then(() => (ef(), Zu)).then((n) => this._register(n.register(e, this.client))), Promise.resolve().then(() => (nf(), rf)).then((n) => this._register(n.register(e, this.client))), Promise.resolve().then(() => (sf(), of)).then((n) => this._register(n.register(e, this.client))), Promise.resolve().then(() => (cf(), af)).then((n) => this._register(n.register(this.client, this.commandManager))), Promise.resolve().then(() => (df(), lf)).then((n) => this._register(n.register(e, this.description, this.client))), Promise.resolve().then(() => (ff(), uf)).then((n) => this._register(n.register(e, this.client)))]);
  }
  handlesUri(e) {
    let r = (0, Vo.extname)(e.path).slice(1).toLowerCase();
    return this.description.standardFileExtensions.includes(r) || this.handlesConfigFile(e);
  }
  handlesDocument(e) {
    return this.description.languageIds.includes(e.languageId) || this.handlesConfigFile(e.uri);
  }
  handlesConfigFile(e) {
    let r = (0, Vo.basename)(e.fsPath);
    return !!r && !!this.description.configFilePattern && this.description.configFilePattern.test(r);
  }
  get id() {
    return this.description.id;
  }
  get diagnosticSource() {
    return this.description.diagnosticSource;
  }
  updateValidate(e) {
    this.client.diagnosticsManager.setValidate(this._diagnosticLanguage, e);
  }
  updateSuggestionDiagnostics(e) {
    this.client.diagnosticsManager.setEnableSuggestions(this._diagnosticLanguage, e);
  }
  reInitialize() {
    this.client.diagnosticsManager.reInitialize();
  }
  triggerAllDiagnostics() {
    this.client.bufferSyncSupport.requestAllDiagnostics();
  }
  diagnosticsReceived(e, r, n, o) {
    e !== 0 && !this.client.hasCapabilityForResource(r, 2) || e === 1 && ke() && (!Xt() || !op() || this.client.configuration.webProjectWideIntellisenseSuppressSemanticErrors || !this.client.configuration.webProjectWideIntellisenseEnabled) || e === 1 && r.scheme === Hr.notebookCell || this.client.diagnosticsManager.updateDiagnostics(r, this._diagnosticLanguage, e, n, o);
  }
  configFileDiagnosticsReceived(e, r) {
    this.client.diagnosticsManager.configFileDiagnosticsReceived(e, r);
  }
  get _diagnosticLanguage() {
    return this.description.diagnosticLanguage;
  }
};
var ir = m(require("vscode"));
ne();
Y();
var jo = class i4 extends T {
  constructor(e) {
    super();
    this.context = e;
    this._logLevel = this._register(new ar("tsserver.log", "off", { fallbackSection: "typescript" })), this._register(this._logLevel.onDidChange(() => {
      this.context.globalState.update(i4.logLevelChangedStorageKey, /* @__PURE__ */ new Date());
    })), this.shouldNotifyExtendedLogging() && this.notifyExtendedLogging();
  }
  static {
    this.logLevelChangedStorageKey = "typescript.tsserver.logLevelChanged";
  }
  static {
    this.doNotPromptLogLevelStorageKey = "typescript.tsserver.doNotPromptLogLevel";
  }
  get logLevel() {
    return ut.fromString(this._logLevel.getValue());
  }
  get lastLogLevelChange() {
    let e = this.context.globalState.get(i4.logLevelChangedStorageKey);
    if (e) {
      let r = new Date(e);
      if (r instanceof Date && !isNaN(r.valueOf())) return r;
    }
  }
  get doNotPrompt() {
    return this.context.globalState.get(i4.doNotPromptLogLevelStorageKey) || false;
  }
  shouldNotifyExtendedLogging() {
    let e = this.lastLogLevelChange ? new Date(this.lastLogLevelChange).valueOf() : 0, r = new Date(e + 864e5 * 7);
    return !this.doNotPrompt && this.logLevel !== 0 && r.valueOf() < Date.now();
  }
  notifyExtendedLogging() {
    let e;
    ((o) => (o[o.DisableLogging = 0] = "DisableLogging", o[o.DoNotShowAgain = 1] = "DoNotShowAgain"))(e ||= {}), ir.window.showInformationMessage(ir.l10n.t("TS Server logging is currently enabled which may impact performance."), { title: ir.l10n.t("Disable logging"), choice: 0 }, { title: ir.l10n.t("Don't show again"), choice: 1 }).then((r) => {
      if (r) {
        if (r.choice === 0) return ir.workspace.getConfiguration().update(`${De}.tsserver.log`, "off", true);
        if (r.choice === 1) return this.context.globalState.update(i4.doNotPromptLogLevelStorageKey, true);
      }
    });
  }
};
Ia();
Oe();
W();
var og = m(require("path")), sg = m(Yf()), v = m(require("vscode"));
nt();
Kn();
var $o = class {
  constructor(t, e) {
    this.reporter = t;
    this.clientVersionDelegate = e;
  }
  logTelemetry(t, e = {}) {
    let r = this.reporter;
    r && (e.version = this.clientVersionDelegate(), r.postEventObj(t, e));
  }
  logTraceEvent(t, e, r) {
    let n = { point: t, traceId: e };
    r && (n.data = r), this.logTelemetry("typeScriptExtension.trace", n);
  }
};
var Gi = m(require("vscode"));
Y();
var Ji = class extends T {
  constructor(e, r = false) {
    super();
    this.logger = e;
    this.forceLogging = r;
  }
  traceRequest(e, r, n, o) {
    (this.logger.logLevel === Gi.LogLevel.Trace || this.forceLogging) && this.trace(e, `Sending request: ${r.command} (${r.seq}). Response expected: ${n ? "yes" : "no"}. Current queue length: ${o}`, r.arguments);
  }
  traceResponse(e, r, n) {
    (this.logger.logLevel === Gi.LogLevel.Trace || this.forceLogging) && this.trace(e, `Response received: ${r.command} (${r.request_seq}). Request took ${Date.now() - n.queuingStartTime} ms. Success: ${r.success} ${r.success ? "" : ". Message: " + r.message}`, r.body);
  }
  traceRequestCompleted(e, r, n, o) {
    (this.logger.logLevel === Gi.LogLevel.Trace || this.forceLogging) && this.trace(e, `Async response received: ${r} (${n}). Request took ${Date.now() - o.queuingStartTime} ms.`);
  }
  traceEvent(e, r) {
    this.logger.logLevel === Gi.LogLevel.Trace && this.trace(e, `Event received: ${r.event} (${r.seq}).`, r.body);
  }
  trace(e, r, n) {
    this.logger[this.forceLogging ? "info" : "trace"](`<${e}> ${r}`, ...n ? [JSON.stringify(n, null, 4)] : []);
  }
};
qr();
pe();
var Q = m(require("vscode"));
nt();
Je();
W();
X();
Xe();
ne();
Jr();
Et();
Y();
Wn();
pe();
function Zf(i9) {
  switch (i9) {
    case gr:
      return "TS";
    case Dt:
      return "TSX";
    case Kt:
      return "JS";
    case $t:
      return "JSX";
  }
}
var dc = class {
  constructor(t, e) {
    this.args = t;
    this.scriptKind = e;
    this.type = 0;
  }
}, pc = class {
  constructor(t, e) {
    this.args = t;
    this.scriptKind = e;
    this.type = 1;
  }
}, uc = class {
  constructor(t) {
    this.args = t;
    this.type = 2;
  }
}, fc = class {
  constructor(t, e, r) {
    this.client = t;
    this._pending = new Me(e, { onCaseInsensitiveFileSystem: r });
  }
  open(t, e) {
    this.updatePending(t, new pc(e, e.scriptKindName));
  }
  close(t, e, r) {
    return this.updatePending(t, new dc(e, r));
  }
  change(t, e, r) {
    r.length && this.updatePending(t, new uc({ fileName: e, textChanges: r.map((n) => ({ newText: n.text, start: I.toLocation(n.range.start), end: I.toLocation(n.range.end) })).reverse() }));
  }
  reset() {
    this._pending.clear();
  }
  beforeCommand(t) {
    t !== "updateOpen" && this.flush();
  }
  flush() {
    if (this._pending.size > 0) {
      let t = [], e = [], r = [];
      for (let n of this._pending.values()) switch (n.type) {
        case 2:
          r.push(n.args);
          break;
        case 1:
          e.push(n.args);
          break;
        case 0:
          t.push(n.args);
          break;
      }
      this.client.execute("updateOpen", { changedFiles: r, closedFiles: t, openFiles: e }, le, { nonRecoverable: true }), this._pending.clear();
    }
  }
  updatePending(t, e) {
    switch (e.type) {
      case 0: {
        let r = this._pending.get(t);
        switch (r?.type) {
          case 1:
            if (r.scriptKind === e.scriptKind) return this._pending.delete(t), false;
        }
        break;
      }
    }
    return this._pending.has(t) && this.flush(), this._pending.set(t, e), true;
  }
}, gc = class {
  constructor(t, e, r, n) {
    this.document = t;
    this.filepath = e;
    this.client = r;
    this.synchronizer = n;
    this.state = 0;
  }
  open() {
    let t = { file: this.filepath, fileContent: this.document.getText(), projectRootPath: this.getProjectRootPath(this.document.uri) }, e = Zf(this.document.languageId);
    e && (t.scriptKindName = e);
    let r = this.client.pluginManager.plugins.filter((n) => n.languages.indexOf(this.document.languageId) >= 0);
    r.length && (t.plugins = r.map((n) => n.name)), this.synchronizer.open(this.resource, t), this.state = 1;
  }
  getProjectRootPath(t) {
    let e = this.client.getWorkspaceRootForResource(t);
    if (!e && Q.workspace.workspaceFolders) {
      for (let r of Array.from(Q.workspace.workspaceFolders).sort((n, o) => n.uri.path.length - o.uri.path.length)) if (r.uri.scheme === t.scheme && r.uri.authority === t.authority) {
        e = r.uri;
        break;
      }
    }
    if (e) {
      let r = this.client.toTsFilePath(e);
      return r?.startsWith(ni) ? void 0 : r;
    }
    return Ii(t, ap, $r) ? "/" : void 0;
  }
  get resource() {
    return this.document.uri;
  }
  get lineCount() {
    return this.document.lineCount;
  }
  get languageId() {
    return this.document.languageId;
  }
  close() {
    return this.state !== 1 ? (this.state = 2, false) : (this.state = 2, this.synchronizer.close(this.resource, this.filepath, Zf(this.document.languageId)));
  }
  onContentChanged(t) {
    this.state !== 1 && console.error(`Unexpected buffer state: ${this.state}`), this.synchronizer.change(this.resource, this.filepath, t);
  }
}, mc = class extends Me {
  getForPath(t) {
    return this.get(Q.Uri.file(t));
  }
  get allBuffers() {
    return this.values();
  }
}, hc = class extends Me {
  getOrderedFileSet() {
    let t = Array.from(this.entries()).sort((r, n) => r.value - n.value).map((r) => r.resource), e = new Me(this._normalizePath, this.config);
    for (let r of t) e.set(r, void 0);
    return e;
  }
}, vc = class i5 {
  constructor(t, e, r) {
    this.client = t;
    this.files = e;
    this._done = false;
    this._token = new Q.CancellationTokenSource();
    if (!this.isErrorReportingEnabled()) {
      this._done = true, er(r);
      return;
    }
    let n = this.client.apiVersion.gte(P.v440), o = Array.from(e.entries()).filter((a) => n || t.hasCapabilityForResource(a.resource, 2)), s = me(o.map((a) => t.toTsFilePath(a.resource)));
    if (!s.length) this._done = true, er(r);
    else {
      let a;
      if (this.areProjectDiagnosticsEnabled()) a = t.executeAsync("geterrForProject", { delay: 0, file: s[0] }, this._token.token);
      else {
        let c;
        this.areRegionDiagnosticsEnabled() ? c = me(o.map((l) => {
          let d = t.toTsFilePath(l.resource), p = l.value;
          return d && p ? R.toFileRangesRequestArgs(d, p) : d;
        })) : c = s, a = t.executeAsync("geterr", { delay: 0, files: c }, this._token.token);
      }
      a.finally(() => {
        this._done || (this._done = true, r());
      });
    }
  }
  static executeGetErrRequest(t, e, r) {
    return new i5(t, e, r);
  }
  isErrorReportingEnabled() {
    return this.client.apiVersion.gte(P.v440) ? true : this.client.capabilities.has(2);
  }
  areProjectDiagnosticsEnabled() {
    return this.client.configuration.enableProjectDiagnostics && this.client.capabilities.has(2);
  }
  areRegionDiagnosticsEnabled() {
    return this.client.apiVersion.gte(P.v560);
  }
  cancel() {
    this._done || this._token.cancel(), this._token.dispose();
  }
}, yc = class extends T {
  constructor(e, r) {
    super();
    this._onDidChange = this._register(new Q.EventEmitter());
    this.onDidChange = this._onDidChange.event;
    this._tabResources = new Me(e, r);
    for (let n of Q.window.tabGroups.all) for (let o of n.tabs) this.add(o);
    this._register(Q.window.tabGroups.onDidChangeTabs((n) => {
      let o = n.closed.flatMap((a) => this.delete(a)), s = n.opened.flatMap((a) => this.add(a));
      (o.length || s.length) && this._onDidChange.fire({ closed: o, opened: s });
    }));
  }
  has(e) {
    if (e.scheme === oa) {
      let n = Q.workspace.notebookDocuments.find((o) => o.getCells().some((s) => s.document.uri.toString() === e.toString()));
      return !!n && this.has(n.uri);
    }
    let r = this._tabResources.get(e);
    return !!r && r.tabs.size > 0;
  }
  add(e) {
    let r = [];
    for (let n of this.getResourcesForTab(e)) {
      let o = this._tabResources.get(n);
      o ? o.tabs.add(e) : (this._tabResources.set(n, { tabs: /* @__PURE__ */ new Set([e]) }), r.push(n));
    }
    return r;
  }
  delete(e) {
    let r = [];
    for (let n of this.getResourcesForTab(e)) {
      let o = this._tabResources.get(n);
      o && (o.tabs.delete(e), o.tabs.size === 0 && (this._tabResources.delete(n), r.push(n)));
    }
    return r;
  }
  getResourcesForTab(e) {
    return e.input instanceof Q.TabInputText ? [e.input.uri] : e.input instanceof Q.TabInputTextDiff ? [e.input.original, e.input.modified] : e.input instanceof Q.TabInputNotebook ? [e.input.uri] : [];
  }
}, Xi = class extends T {
  constructor(e, r, n) {
    super();
    this.listening = false;
    this._onDelete = this._register(new Q.EventEmitter());
    this.onDelete = this._onDelete.event;
    this._onWillChange = this._register(new Q.EventEmitter());
    this.onWillChange = this._onWillChange.event;
    this.client = e, this.modeIds = new Set(r), this._validate = this._register(new et("validate.enabled", true, { fallbackSubSectionNameOverride: "validate.enable" })), this.diagnosticDelayer = new Gr(300);
    let o = (s) => this.client.toTsFilePath(s);
    this.syncedBuffers = new mc(o, { onCaseInsensitiveFileSystem: n }), this.pendingDiagnostics = new hc(o, { onCaseInsensitiveFileSystem: n }), this.synchronizer = new fc(e, o, n), this._tabResources = this._register(new yc(o, { onCaseInsensitiveFileSystem: n })), this._register(this._tabResources.onDidChange((s) => {
      if (!this.client.configuration.enableProjectDiagnostics) {
        for (let a of s.closed) this.syncedBuffers.get(a) && (this.pendingDiagnostics.delete(a), this.pendingGetErr?.files.delete(a));
        for (let a of s.opened) {
          let c = this.syncedBuffers.get(a);
          c && this.requestDiagnostic(c);
        }
      }
    })), this._register(this._validate.onDidChange(() => this.requestAllDiagnostics()));
  }
  listen() {
    this.listening || (this.listening = true, Q.workspace.onDidOpenTextDocument(this.openTextDocument, this, this._disposables), Q.workspace.onDidCloseTextDocument(this.onDidCloseTextDocument, this, this._disposables), Q.workspace.onDidChangeTextDocument(this.onDidChangeTextDocument, this, this._disposables), Q.window.onDidChangeVisibleTextEditors((e) => {
      for (let { document: r } of e) {
        let n = this.syncedBuffers.get(r.uri);
        n && this.requestDiagnostic(n);
      }
    }, this, this._disposables), Q.workspace.textDocuments.forEach(this.openTextDocument, this));
  }
  handles(e) {
    return this.syncedBuffers.has(e);
  }
  ensureHasBuffer(e) {
    if (this.syncedBuffers.has(e)) return true;
    let r = Q.workspace.textDocuments.find((n) => n.uri.toString() === e.toString());
    return r ? this.openTextDocument(r) : false;
  }
  toVsCodeResource(e) {
    let r = this.client.toTsFilePath(e);
    for (let n of this.syncedBuffers.allBuffers) if (n.filepath === r) return n.resource;
    return e;
  }
  toResource(e) {
    let r = this.syncedBuffers.getForPath(e);
    return r ? r.resource : Q.Uri.file(e);
  }
  reset() {
    this.pendingGetErr?.cancel(), this.pendingDiagnostics.clear(), this.synchronizer.reset();
  }
  reinitialize() {
    this.reset();
    for (let e of this.syncedBuffers.allBuffers) e.open();
  }
  openTextDocument(e) {
    if (!this.modeIds.has(e.languageId)) return false;
    let r = e.uri, n = this.client.toTsFilePath(r);
    if (!n) return false;
    if (this.syncedBuffers.has(r)) return true;
    let o = new gc(e, n, this.client, this.synchronizer);
    return this.syncedBuffers.set(r, o), o.open(), this.requestDiagnostic(o), true;
  }
  closeResource(e) {
    let r = this.syncedBuffers.get(e);
    if (!r) return;
    this.pendingDiagnostics.delete(e), this.pendingGetErr?.files.delete(e), this.syncedBuffers.delete(e);
    let n = r.close();
    this._onDelete.fire(e), n && this.requestAllDiagnostics();
  }
  interruptGetErr(e) {
    if (!this.pendingGetErr || this.client.configuration.enableProjectDiagnostics) return e();
    this.pendingGetErr.cancel(), this.pendingGetErr = void 0;
    let r = e();
    return this.triggerDiagnostics(), r;
  }
  beforeCommand(e) {
    this.synchronizer.beforeCommand(e);
  }
  lineCount(e) {
    return this.syncedBuffers.get(e)?.lineCount;
  }
  onDidCloseTextDocument(e) {
    this.closeResource(e.uri);
  }
  onDidChangeTextDocument(e) {
    let r = this.syncedBuffers.get(e.document.uri);
    if (!r) return;
    this._onWillChange.fire(r.resource), r.onContentChanged(e.contentChanges), !this.requestDiagnostic(r) && this.pendingGetErr && (this.pendingGetErr.cancel(), this.pendingGetErr = void 0, this.triggerDiagnostics());
  }
  requestAllDiagnostics() {
    for (let e of this.syncedBuffers.allBuffers) this.shouldValidate(e) && this.pendingDiagnostics.set(e.resource, Date.now());
    this.triggerDiagnostics();
  }
  getErr(e) {
    let r = e.filter((n) => this.handles(n));
    if (r.length) {
      for (let n of r) this.pendingDiagnostics.set(n, Date.now());
      this.triggerDiagnostics();
    }
  }
  triggerDiagnostics(e = 200) {
    this.diagnosticDelayer.trigger(() => {
      this.sendPendingDiagnostics();
    }, e);
  }
  requestDiagnostic(e) {
    if (!this.shouldValidate(e)) return false;
    this.pendingDiagnostics.set(e.resource, Date.now());
    let r = Math.min(Math.max(Math.ceil(e.lineCount / 20), 300), 800);
    return this.triggerDiagnostics(r), true;
  }
  hasPendingDiagnostics(e) {
    return this.pendingDiagnostics.has(e);
  }
  sendPendingDiagnostics() {
    let e = this.pendingDiagnostics.getOrderedFileSet();
    if (this.pendingGetErr) {
      this.pendingGetErr.cancel();
      for (let { resource: r } of this.pendingGetErr.files.entries()) this.syncedBuffers.get(r) && e.set(r, void 0);
      this.pendingGetErr = void 0;
    }
    for (let r of this.syncedBuffers.values()) {
      let o = Q.window.visibleTextEditors.filter((s) => s.document.uri.toString() === r.resource.toString()).flatMap((s) => s.visibleRanges);
      e.set(r.resource, o.length ? o : void 0);
    }
    for (let { resource: r } of e.entries()) {
      let n = this.syncedBuffers.get(r);
      n && !this.shouldValidate(n) && e.delete(r);
    }
    if (e.size) {
      let r = this.pendingGetErr = vc.executeGetErrRequest(this.client, e, () => {
        this.pendingGetErr === r && (this.pendingGetErr = void 0);
      });
    }
    this.pendingDiagnostics.clear();
  }
  shouldValidate(e) {
    return Ii(e.resource, $r) || !this.client.configuration.enableProjectDiagnostics && !this._tabResources.has(e.resource) ? false : this._validate.getValue(e.document);
  }
};
var $e = m(require("vscode"));
Jr();
Y();
var eg = "typescript.useWorkspaceNode", tg = "typescript.lastKnownWorkspaceNode", Bo = class extends T {
  constructor(e, r) {
    super();
    this.configuration = e;
    this.workspaceState = r;
    this._onDidPickNewVersion = this._register(new $e.EventEmitter());
    this.onDidPickNewVersion = this._onDidPickNewVersion.event;
    if (this._currentVersion = this.configuration.globalNodePath || void 0, $e.workspace.isTrusted) {
      let n = this.configuration.localNodePath;
      if (n) {
        let o = this.canUseWorkspaceNode(n);
        o === void 0 ? er(() => {
          this.promptAndSetWorkspaceNode();
        }) : o && (this._currentVersion = n);
      }
    } else this._disposables.push($e.workspace.onDidGrantWorkspaceTrust(() => {
      let n = this.configuration.localNodePath;
      if (n) {
        let o = this.canUseWorkspaceNode(n);
        o === void 0 ? er(() => {
          this.promptAndSetWorkspaceNode();
        }) : o && this.updateActiveVersion(n);
      }
    }));
  }
  get currentVersion() {
    return this._currentVersion;
  }
  async resetWorkspaceNodeChoice() {
    await this.promptAndSetWorkspaceNode({ force: true });
  }
  async updateConfiguration(e) {
    let r = this.configuration;
    this.configuration = e, (r.globalNodePath !== e.globalNodePath || r.localNodePath !== e.localNodePath) && await this.computeNewVersion();
  }
  async computeNewVersion() {
    let e = this.configuration.globalNodePath || void 0, r = this.configuration.localNodePath;
    if ($e.workspace.isTrusted && r) {
      let n = this.canUseWorkspaceNode(r);
      n === void 0 ? e = await this.promptUseWorkspaceNode() || e : n && (e = r);
    }
    this.updateActiveVersion(e);
  }
  async promptUseWorkspaceNode({ force: e } = {}) {
    let r = this.configuration.localNodePath;
    if (r === null) throw new Error("Could not prompt to use workspace Node installation because no workspace Node installation is specified");
    let n = $e.l10n.t("Yes"), o = $e.l10n.t("No"), s = $e.l10n.t("Not now"), a = await $e.window.showInformationMessage($e.l10n.t("This workspace wants to use the Node installation at '{0}' to run TS Server. Would you like to use it?", r), { modal: e }, n, o, s), c;
    switch (a) {
      case n:
        await this.setUseWorkspaceNodeState(true, r), c = r;
        break;
      case o:
        await this.setUseWorkspaceNodeState(false, r);
        break;
      case s:
        await this.setUseWorkspaceNodeState(void 0, r);
        break;
    }
    return c;
  }
  async promptAndSetWorkspaceNode({ force: e } = {}) {
    let r = await this.promptUseWorkspaceNode({ force: e });
    r !== void 0 && this.updateActiveVersion(r);
  }
  updateActiveVersion(e) {
    let r = this.currentVersion;
    this._currentVersion = e, r !== e && this._onDidPickNewVersion.fire();
  }
  canUseWorkspaceNode(e) {
    if (this.workspaceState.get(tg) === e) return this.workspaceState.get(eg);
  }
  async setUseWorkspaceNodeState(e, r) {
    await this.workspaceState.update(tg, r), await this.workspaceState.update(eg, e);
  }
};
var zo = m(require("path")), rg = m(require("vscode"));
var Ho = class {
  constructor(t) {
    this.configuration = t;
  }
  updateConfiguration(t) {
    this.configuration = t;
  }
  getPluginPaths() {
    let t = [];
    for (let e of this.configuration.tsServerPluginPaths) t.push(...this.resolvePluginPath(e));
    return t;
  }
  resolvePluginPath(t) {
    if (zo.isAbsolute(t)) return [t];
    let e = zt.asAbsoluteWorkspacePath(t);
    return e !== void 0 ? [e] : (rg.workspace.workspaceFolders || []).map((r) => zo.join(r.uri.fsPath, t));
  }
};
Oe();
va();
var nr = m(require("vscode"));
X();
Kr();
pe();
_i();
tr();
var Go = class i6 {
  constructor(t, e, r, n, o, s, a, c, l) {
    this._versionProvider = t;
    this._versionManager = e;
    this._nodeVersionManager = r;
    this._logDirectoryProvider = n;
    this._pluginPathsProvider = o;
    this._logger = s;
    this._telemetryReporter = a;
    this._tracer = c;
    this._factory = l;
  }
  static {
    this.tsServerLogOutputChannel = new we(() => nr.window.createOutputChannel(nr.l10n.t("TypeScript Server Log")));
  }
  spawn(t, e, r, n, o, s) {
    let a, c = this.getCompositeServerType(t, e, r), l = this.shouldUseSeparateDiagnosticsServer(r);
    switch (c) {
      case 1:
      case 2: {
        let d = !l && c === 2;
        a = new to({ syntax: this.spawnTsServer("syntax", t, r, n, o), semantic: this.spawnTsServer("semantic", t, r, n, o) }, s, d);
        break;
      }
      case 0: {
        a = this.spawnTsServer("main", t, r, n, o);
        break;
      }
      case 3: {
        a = this.spawnTsServer("syntax", t, r, n, o);
        break;
      }
    }
    return l ? new eo({ getErr: this.spawnTsServer("diagnostics", t, r, n, o), primary: a }, s) : a;
  }
  getCompositeServerType(t, e, r) {
    if (!e.has(2)) return 3;
    switch (r.useSyntaxServer) {
      case 1:
        return 3;
      case 0:
        return 0;
      case 2:
        return t.apiVersion?.gte(P.v400) ? 2 : 1;
    }
  }
  shouldUseSeparateDiagnosticsServer(t) {
    return t.enableProjectDiagnostics;
  }
  spawnTsServer(t, e, r, n, o) {
    let s = e.apiVersion || P.defaultVersion, a = o.create(t, this._tracer), { args: c, tsServerLog: l, tsServerTraceDirectory: d } = this.getTsServerArgs(t, r, e, s, n, a.cancellationPipeName);
    i6.isLoggingEnabled(r) && (l?.type === "file" ? this._logger.info(`<${t}> Log file: ${l.uri.fsPath}`) : l?.type === "output" ? this._logger.info(`<${t}> Logging to output`) : this._logger.error(`<${t}> Could not create TS Server log`)), r.enableTsServerTracing && (d ? this._logger.info(`<${t}> Trace directory: ${d.fsPath}`) : this._logger.error(`<${t}> Could not create trace directory`)), this._logger.info(`<${t}> Forking...`);
    let p = this._factory.fork(e, c, t, r, this._versionManager, this._nodeVersionManager, l);
    return this._logger.info(`<${t}> Starting...`), new Yn(t, this.kindToServerType(t), p, l, a, e, this._telemetryReporter, this._tracer);
  }
  kindToServerType(t) {
    switch (t) {
      case "syntax":
        return "syntax";
      case "main":
      case "semantic":
      case "diagnostics":
      default:
        return "semantic";
    }
  }
  getTsServerArgs(t, e, r, n, o, s) {
    let a = [], c, l;
    if (t === "syntax" && (n.gte(P.v401) ? a.push("--serverMode", "partialSemantic") : a.push("--syntaxOnly")), a.push("--useInferredProjectPerProjectRoot"), (e.disableAutomaticTypeAcquisition || t === "syntax" || t === "diagnostics") && a.push("--disableAutomaticTypingAcquisition"), (t === "semantic" || t === "main") && a.push("--enableTelemetry"), s && a.push("--cancellationPipeName", s + "*"), i6.isLoggingEnabled(e)) if (ke()) a.push("--logVerbosity", ut.toString(e.tsServerLogLevel)), c = { type: "output", output: i6.tsServerLogOutputChannel.value };
    else {
      let f = this._logDirectoryProvider.getNewLogDirectory();
      if (f) {
        let S = nr.Uri.joinPath(f, "tsserver.log");
        c = { type: "file", uri: S }, a.push("--logVerbosity", ut.toString(e.tsServerLogLevel)), a.push("--logFile", S.fsPath);
      }
    }
    e.enableTsServerTracing && !ke() && (l = this._logDirectoryProvider.getNewLogDirectory(), l && a.push("--traceDirectory", `"${l.fsPath}"`));
    let d = ke() ? [] : this._pluginPathsProvider.getPluginPaths();
    if (o.plugins.length) {
      a.push("--globalPlugins", o.plugins.map((S) => S.name).join(","));
      let f = r.path === this._versionProvider.defaultVersion.path;
      for (let S of o.plugins) (f || S.enableForWorkspaceTypeScriptVersions) && d.push(ke() ? S.uri.toString() : S.uri.fsPath);
    }
    d.length !== 0 && a.push("--pluginProbeLocations", d.join(",")), e.npmLocation && !ke() && a.push("--npmLocation", `"${e.npmLocation}"`), a.push("--locale", i6.getTsLocale(e)), a.push("--noGetErrOnBackgroundUpdate");
    let p = e.useVsCodeWatcher, u = n.isYarnPnp();
    return n.gte(P.v544) && p && !u ? a.push("--canUseWatchEvents") : p ? u && this._logger.info(`<${t}> Falling back to legacy node.js based file watching because of Yarn PnP.`) : this._logger.info(`<${t}> Falling back to legacy node.js based file watching because of user settings.`), a.push("--validateDefaultNpmLocation"), Xt() && a.push("--enableProjectWideIntelliSenseOnWeb"), { args: a, tsServerLog: c, tsServerTraceDirectory: l };
  }
  static isLoggingEnabled(t) {
    return t.tsServerLogLevel !== 0;
  }
  static getTsLocale(t) {
    return t.locale ? t.locale : nr.env.language;
  }
};
var J = m(require("vscode"));
ne();
Jr();
Y();
var Jo = "typescript.useWorkspaceTsdk", ig = "typescript.suppressPromptWorkspaceTsdk", Xo = class extends T {
  constructor(e, r, n) {
    super();
    this.configuration = e;
    this.versionProvider = r;
    this.workspaceState = n;
    this._onDidPickNewVersion = this._register(new J.EventEmitter());
    this.onDidPickNewVersion = this._onDidPickNewVersion.event;
    if (this._currentVersion = this.versionProvider.defaultVersion, this.useWorkspaceTsdkSetting) if (J.workspace.isTrusted) {
      let o = this.versionProvider.localVersion;
      o && (this._currentVersion = o);
    } else this._disposables.push(J.workspace.onDidGrantWorkspaceTrust(() => {
      this.versionProvider.localVersion && this.updateActiveVersion(this.versionProvider.localVersion);
    }));
    this.isInPromptWorkspaceTsdkState(e) && er(() => {
      this.promptUseWorkspaceTsdk();
    });
  }
  updateConfiguration(e) {
    let r = this.configuration;
    this.configuration = e, !this.isInPromptWorkspaceTsdkState(r) && this.isInPromptWorkspaceTsdkState(e) && this.promptUseWorkspaceTsdk();
  }
  get currentVersion() {
    return this._currentVersion;
  }
  reset() {
    this._currentVersion = this.versionProvider.bundledVersion;
  }
  async promptUserForVersion() {
    let e = this.getNativePreviewPickItem(), r = [this.getBundledPickItem(), ...this.getLocalPickItems()];
    return e && r.push(e), r.push({ kind: J.QuickPickItemKind.Separator, label: "", run: () => {
    } }, yb), (await J.window.showQuickPick(r, { placeHolder: J.l10n.t("Select the TypeScript version used for JavaScript and TypeScript language features") }))?.run();
  }
  getBundledPickItem() {
    let e = this.versionProvider.defaultVersion;
    return { label: (!this.useWorkspaceTsdkSetting || !J.workspace.isTrusted ? "• " : "") + J.l10n.t("Use VS Code's Version"), description: e.displayName, detail: e.pathLabel, run: async () => {
      await this.workspaceState.update(Jo, false), this.updateActiveVersion(e);
    } };
  }
  getLocalPickItems() {
    return this.versionProvider.localVersions.map((e) => ({ label: (this.useWorkspaceTsdkSetting && J.workspace.isTrusted && this.currentVersion.eq(e) ? "• " : "") + J.l10n.t("Use Workspace Version"), description: e.displayName, detail: e.pathLabel, run: async () => {
      await J.workspace.requestWorkspaceTrust() && (await this.workspaceState.update(Jo, true), await J.workspace.getConfiguration(De).update("tsdk.path", e.pathLabel, false), this.updateActiveVersion(e));
    } }));
  }
  getNativePreviewPickItem() {
    let e = cr();
    return e ? { label: (h("experimental.useTsgo", false, { fallbackSection: "typescript" }) ? "• " : "") + J.l10n.t("Use TypeScript Native Preview (Experimental)"), description: e.packageJSON.version, run: async () => {
      await J.commands.executeCommand("typescript.native-preview.enable");
    } } : void 0;
  }
  async promptUseWorkspaceTsdk() {
    let e = this.versionProvider.localVersion;
    if (e === void 0) throw new Error("Could not prompt to use workspace TypeScript version because no workspace version is specified");
    let r = J.l10n.t("Allow"), n = J.l10n.t("Dismiss"), o = J.l10n.t("Never in this Workspace"), s = await J.window.showInformationMessage(J.l10n.t("This workspace contains a TypeScript version. Would you like to use the workspace TypeScript version for TypeScript and JavaScript language features?"), r, n, o);
    s === r ? (await this.workspaceState.update(Jo, true), this.updateActiveVersion(e)) : s === o && await this.workspaceState.update(ig, true);
  }
  updateActiveVersion(e) {
    let r = this.currentVersion;
    this._currentVersion = e, r.eq(e) || this._onDidPickNewVersion.fire();
  }
  get useWorkspaceTsdkSetting() {
    return this.workspaceState.get(Jo, false);
  }
  get suppressPromptWorkspaceTsdkSetting() {
    return this.workspaceState.get(ig, false);
  }
  isInPromptWorkspaceTsdkState(e) {
    return e.localTsdk !== null && e.enablePromptUseWorkspaceTsdk === true && this.suppressPromptWorkspaceTsdkSetting === false && this.useWorkspaceTsdkSetting === false;
  }
}, yb = { label: J.l10n.t("Learn more about managing TypeScript versions"), description: "", run: () => {
  J.env.openExternal(J.Uri.parse("https://go.microsoft.com/fwlink/?linkid=839919"));
} };
X();
Y();
function ng(i9, t, e, r) {
  return (n) => {
    t() === i9 && e() && r(n);
  };
}
function Qo(i9, t = 0) {
  switch (typeof i9) {
    case "object":
      return i9 === null ? kr(349, t) : Array.isArray(i9) ? bb(i9, t) : Cb(i9, t);
    case "string":
      return Sc(i9, t);
    case "boolean":
      return Sb(i9, t);
    case "number":
      return kr(i9, t);
    case "undefined":
      return 937 * 31;
    default:
      return Sc(String(i9), 617);
  }
}
function kr(i9, t) {
  return (t << 5) - t + i9 | 0;
}
function Sb(i9, t) {
  return kr(i9 ? 433 : 863, t);
}
function Sc(i9, t) {
  t = kr(149417, t);
  for (let e = 0, r = i9.length; e < r; e++) t = kr(i9.charCodeAt(e), t);
  return t;
}
function bb(i9, t) {
  return t = kr(104579, t), i9.reduce((e, r) => Qo(r, e), t);
}
function Cb(i9, t) {
  return t = kr(181387, t), Object.keys(i9).sort().reduce((e, r) => (e = Sc(r, e), Qo(Reflect.get(i9, r), e)), t);
}
Kr();
var or;
((n) => {
  let i9;
  ((c) => (c[c.None = 0] = "None", c[c.Running = 1] = "Running", c[c.Errored = 2] = "Errored"))(i9 = n.Type ||= {}), n.None = { type: 0 };
  class e {
    constructor(s, a, c, l) {
      this.server = s;
      this.apiVersion = a;
      this.tsserverVersion = c;
      this.languageServiceEnabled = l;
      this.type = 1;
      this.toCancelOnResourceChange = /* @__PURE__ */ new Set();
    }
    updateTsserverVersion(s) {
      this.tsserverVersion = s;
    }
    updateLanguageServiceEnabled(s) {
      this.languageServiceEnabled = s;
    }
  }
  n.Running = e;
  class r {
    constructor(s, a) {
      this.error = s;
      this.tsServerLog = a;
      this.type = 2;
    }
  }
  n.Errored = r;
})(or ||= {});
var bc = "ts-nul-authority", ni = "^", Tb = "github.copilot-chat", Qi = class extends T {
  constructor(e, r, n, o) {
    super();
    this.context = e;
    this.serverState = or.None;
    this._isPromptingAfterCrash = false;
    this.isRestarting = false;
    this.hasServerFatallyCrashedTooManyTimes = false;
    this.watches = /* @__PURE__ */ new Map();
    this.watchEvents = /* @__PURE__ */ new Map();
    this._memoryMonitorEnabled = false;
    this._onDidChangeCapabilities = this._register(new v.EventEmitter());
    this.onDidChangeCapabilities = this._onDidChangeCapabilities.event;
    this._onTsServerStarted = this._register(new v.EventEmitter());
    this.onTsServerStarted = this._onTsServerStarted.event;
    this._onDiagnosticsReceived = this._register(new v.EventEmitter());
    this.onDiagnosticsReceived = this._onDiagnosticsReceived.event;
    this._onConfigDiagnosticsReceived = this._register(new v.EventEmitter());
    this.onConfigDiagnosticsReceived = this._onConfigDiagnosticsReceived.event;
    this._onResendModelsRequested = this._register(new v.EventEmitter());
    this.onResendModelsRequested = this._onResendModelsRequested.event;
    this._onProjectLanguageServiceStateChanged = this._register(new v.EventEmitter());
    this.onProjectLanguageServiceStateChanged = this._onProjectLanguageServiceStateChanged.event;
    this._onDidBeginInstallTypings = this._register(new v.EventEmitter());
    this.onDidBeginInstallTypings = this._onDidBeginInstallTypings.event;
    this._onDidEndInstallTypings = this._register(new v.EventEmitter());
    this.onDidEndInstallTypings = this._onDidEndInstallTypings.event;
    this._onTypesInstallerInitializationFailed = this._register(new v.EventEmitter());
    this.onTypesInstallerInitializationFailed = this._onTypesInstallerInitializationFailed.event;
    this._onSurveyReady = this._register(new v.EventEmitter());
    this.onSurveyReady = this._onSurveyReady.event;
    this.token = 0;
    this.loadingIndicator = this._register(new Cc(this)), this.logger = n.logger, this.tracer = new Ji(this.logger), this.pluginManager = n.pluginManager, this.logDirectoryProvider = n.logDirectoryProvider, this.cancellerFactory = n.cancellerFactory, this.versionProvider = n.versionProvider, this.processFactory = n.processFactory, this.lastStart = Date.now();
    let s, a, c = new Promise((l, d) => {
      s = l, a = d;
    });
    this._onReady = { promise: c, resolve: s, reject: a }, this.numberRestarts = 0, this._configuration = n.serviceConfigurationProvider.loadFromWorkspace(), this.versionProvider.updateConfiguration(this._configuration), this.pluginPathsProvider = new Ho(this._configuration), this._versionManager = this._register(new Xo(this._configuration, this.versionProvider, e.workspaceState)), this._register(this._versionManager.onDidPickNewVersion(() => {
      this.restartTsServer();
    })), this._nodeVersionManager = this._register(new Bo(this._configuration, e.workspaceState)), this._register(this._nodeVersionManager.onDidPickNewVersion(() => {
      this.restartTsServer();
    })), this.bufferSyncSupport = new Xi(this, o, r), this.onReady(() => {
      this.bufferSyncSupport.listen();
    }), this.bufferSyncSupport.onDelete((l) => {
      this.cancelInflightRequestsForResource(l), this.diagnosticsManager.deleteAllDiagnosticsInFile(l);
    }, null, this._disposables), this.bufferSyncSupport.onWillChange((l) => {
      this.cancelInflightRequestsForResource(l);
    }), v.workspace.onDidChangeConfiguration(() => {
      let l = this._configuration;
      this._configuration = n.serviceConfigurationProvider.loadFromWorkspace(), this.versionProvider.updateConfiguration(this._configuration), this._versionManager.updateConfiguration(this._configuration), this.pluginPathsProvider.updateConfiguration(this._configuration), this._nodeVersionManager.updateConfiguration(this._configuration), this.serverState.type === 1 && (this._configuration.implicitProjectConfiguration.isEqualTo(l.implicitProjectConfiguration) || this.setCompilerOptionsForInferredProjects(this._configuration), Yd(this._configuration, l) || this.restartTsServer());
    }, this, this._disposables), this.telemetryReporter = new $o(n.experimentTelemetryReporter, () => this.serverState.type === 1 && this.serverState.tsserverVersion ? this.serverState.tsserverVersion : this.apiVersion.fullVersionString), this.diagnosticsManager = this._register(new $n("typescript", this._configuration, this.telemetryReporter, r)), this.typescriptServerSpawner = new Go(this.versionProvider, this._versionManager, this._nodeVersionManager, this.logDirectoryProvider, this.pluginPathsProvider, this.logger, this.telemetryReporter, this.tracer, this.processFactory), this._register(this.pluginManager.onDidUpdateConfig((l) => {
      this.configurePlugin(l.pluginId, l.config);
    })), this._register(this.pluginManager.onDidChangePlugins(() => {
      this.restartTsServer();
    }));
  }
  get capabilities() {
    return this._configuration.useSyntaxServer === 1 ? new Qt(0, 1) : ke() ? this.isProjectWideIntellisenseOnWebEnabled() ? new Qt(0, 1, 2) : new Qt(0, 1) : this.apiVersion.gte(P.v400) ? new Qt(0, 1, 2) : new Qt(0, 2);
  }
  isProjectWideIntellisenseOnWebEnabled() {
    return Xt() && this._configuration.webProjectWideIntellisenseEnabled;
  }
  cancelInflightRequestsForResource(e) {
    if (this.serverState.type === 1) for (let r of this.serverState.toCancelOnResourceChange) r.resource.toString() === e.toString() && r.cancel();
  }
  get configuration() {
    return this._configuration;
  }
  dispose() {
    super.dispose(), this.bufferSyncSupport.dispose(), this.serverState.type === 1 && this.serverState.server.kill(), this.loadingIndicator.reset(), this.resetWatchers(), this._stopMemoryMonitor();
  }
  restartTsServer(e = false) {
    this.serverState.type === 1 && (this.logger.info("Killing TS Server"), this.isRestarting = true, this.serverState.server.kill()), e && (this.hasServerFatallyCrashedTooManyTimes = false, this.numberRestarts = 0, this.lastStart = Date.now()), this.serverState = this.startService(true);
  }
  get apiVersion() {
    return this.serverState.type === 1 ? this.serverState.apiVersion : P.defaultVersion;
  }
  onReady(e) {
    return this._onReady.promise.then(e);
  }
  ensureServiceStarted() {
    this.serverState.type !== 1 && this.startService();
  }
  startService(e = false) {
    if (this.logger.info("Starting TS Server"), this.isDisposed) return this.logger.info("Not starting server: disposed"), or.None;
    if (this.hasServerFatallyCrashedTooManyTimes) return this.logger.info("Not starting server: too many crashes"), or.None;
    let r = this._versionManager.currentVersion;
    r.isValid || (v.window.showWarningMessage(v.l10n.t("The path {0} doesn't point to a valid tsserver install. Falling back to bundled TypeScript version.", r.path)), this._versionManager.reset(), r = this._versionManager.currentVersion), this.logger.info(`Using tsserver from: ${r.path}`);
    let n = this._nodeVersionManager.currentVersion;
    n && this.logger.info(`Using Node installation from ${n} to run TS Server`), this.resetWatchers();
    let o = r.apiVersion || P.defaultVersion, s = ++this.token, a = this.typescriptServerSpawner.spawn(r, this.capabilities, this.configuration, this.pluginManager, this.cancellerFactory, { onFatalError: (l, d) => this.fatalError(l, d) });
    this.serverState = new or.Running(a, o, void 0, true), this.lastStart = Date.now();
    let c = { hasGlobalPlugins: this.pluginManager.plugins.length > 0, globalPluginNameHashes: JSON.stringify(this.pluginManager.plugins.map((l) => Qo(l.name))) };
    return this.telemetryReporter.logTelemetry("tsserver.spawned", { ...c, localTypeScriptVersion: this.versionProvider.localVersion ? this.versionProvider.localVersion.displayName : "", typeScriptVersionSource: r.source }), a.onError((l) => {
      if (this.token === s) {
        if (!(l instanceof Error)) {
          this.logger.error("TSServer got unknown error type:", l);
          return;
        }
        l && v.window.showErrorMessage(v.l10n.t("TypeScript language server exited with error. Error message is: {0}", l.message || l.name)), this.serverState = new or.Errored(l, a.tsServerLog), this.logger.error("TSServer errored with error.", l), a.tsServerLog?.type === "file" && this.logger.error(`TSServer log file: ${a.tsServerLog.uri.fsPath}`), this.telemetryReporter.logTelemetry("tsserver.error", { ...c }), this.serviceExited(false, o);
      }
    }), a.onExit((l) => {
      let { code: d, signal: p } = l;
      this.logger.error(`TSServer exited. Code: ${d}. Signal: ${p}`), this.telemetryReporter.logTelemetry("tsserver.exitWithCode", { ...c, code: d ?? void 0, signal: p ?? void 0 }), this.token === s && (a.tsServerLog?.type === "file" && this.logger.info(`TSServer log file: ${a.tsServerLog.uri.fsPath}`), this.serviceExited(!this.isRestarting, o), this.isRestarting = false);
    }), a.onEvent(ng(s, () => this.token, () => !this.isDisposed && this.serverState.type === 1 && this.serverState.server === a, (l) => this.dispatchEvent(l))), this._startMemoryMonitor(a), this.serviceStarted(e), this._onReady.resolve(), this._onTsServerStarted.fire({ version: r, usedApiVersion: o }), this._onDidChangeCapabilities.fire(), this.serverState;
  }
  resetWatchers() {
    clearTimeout(this.watchChangeTimeout), bs(Array.from(this.watches.values()));
  }
  async showVersionPicker() {
    this._versionManager.promptUserForVersion();
  }
  async promptForNodeVersion() {
    await this._nodeVersionManager.resetWorkspaceNodeChoice();
  }
  async openTsServerLogFile() {
    if (this._configuration.tsServerLogLevel === 0) return v.window.showErrorMessage(v.l10n.t("TS Server logging is off. Please set 'js/ts.tsserver.log' and restart the TS server to enable logging"), { title: v.l10n.t("Enable logging and restart TS server") }).then((e) => {
      if (e) return v.workspace.getConfiguration().update("js/ts.tsserver.log", "verbose", true).then(() => {
        this.restartTsServer();
      });
    }), false;
    if (this.serverState.type !== 1 || !this.serverState.server.tsServerLog) return v.window.showWarningMessage(v.l10n.t("TS Server has not started logging.")), false;
    switch (this.serverState.server.tsServerLog.type) {
      case "output":
        return this.serverState.server.tsServerLog.output.show(), true;
      case "file": {
        try {
          let e = await v.workspace.openTextDocument(this.serverState.server.tsServerLog.uri);
          return await v.window.showTextDocument(e), true;
        } catch {
        }
        try {
          return await v.commands.executeCommand("revealFileInOS", this.serverState.server.tsServerLog.uri), true;
        } catch {
          return v.window.showWarningMessage(v.l10n.t("Could not open TS Server log file")), false;
        }
      }
    }
  }
  serviceStarted(e) {
    this.bufferSyncSupport.reset();
    let r = this.apiVersion.gte(P.v380) ? this.configuration.watchOptions : void 0, n = { hostInfo: "vscode", preferences: { providePrefixAndSuffixTextForRename: true, allowRenameOfImportPath: true, includePackageJsonAutoImports: this._configuration.includePackageJsonAutoImports, excludeLibrarySymbolsInNavTo: this._configuration.workspaceSymbolsExcludeLibrarySymbols }, watchOptions: r };
    this.executeWithoutWaitingForResponse("configure", n), this.setCompilerOptionsForInferredProjects(this._configuration), e && (this._onResendModelsRequested.fire(), this.bufferSyncSupport.reinitialize(), this.bufferSyncSupport.requestAllDiagnostics());
    for (let [o, s] of this.pluginManager.configurations()) this.configurePlugin(o, s);
  }
  setCompilerOptionsForInferredProjects(e) {
    let r = { options: this.getCompilerOptionsForInferredProjects(e) };
    this.executeWithoutWaitingForResponse("compilerOptionsForInferredProjects", r);
  }
  getCompilerOptionsForInferredProjects(e) {
    return { ...$s(this.apiVersion, 0, e), allowJs: true, allowSyntheticDefaultImports: true, allowNonTsExtensions: true, resolveJsonModule: true };
  }
  serviceExited(e, r) {
    if (this.resetWatchers(), this.loadingIndicator.reset(), this.serverState = or.None, !this.isDisposed && e) {
      let n = Date.now() - this.lastStart;
      this.numberRestarts++;
      let o = true, s = this.pluginManager.plugins, a = s.filter((p) => p.extension.id.toLowerCase() !== Tb), c = [...new Set(a.map((p) => p.extension.id))].join(", "), l = { title: v.l10n.t("Report Issue") }, d;
      this.numberRestarts == 2 && (this.tracer.forceLogging = true), this.numberRestarts > 5 ? (this.numberRestarts = 0, n < 10 * 1e3 ? (this.lastStart = Date.now(), o = false, this.hasServerFatallyCrashedTooManyTimes = true, a.length ? d = v.window.showErrorMessage(v.l10n.t(`The JS/TS language service immediately crashed 5 times. The service will not be restarted.
This may be caused by a plugin contributed by one of these extensions: {0}.
Please try disabling these extensions before filing an issue against VS Code.`, c)) : s.length || (d = v.window.showErrorMessage(v.l10n.t("The JS/TS language service immediately crashed 5 times. The service will not be restarted."), l)), this.telemetryReporter.logTelemetry("serviceExited")) : n < 60 * 1e3 * 5 && (this.lastStart = Date.now(), this._isPromptingAfterCrash || (a.length ? d = v.window.showWarningMessage(v.l10n.t(`The JS/TS language service crashed 5 times in the last 5 Minutes.
This may be caused by a plugin contributed by one of these extensions: {0}
Please try disabling these extensions before filing an issue against VS Code.`, c)) : s.length || (d = v.window.showWarningMessage(v.l10n.t("The JS/TS language service crashed 5 times in the last 5 Minutes."), l))))) : ["vscode-insiders", "code-oss"].includes(v.env.uriScheme) && (this.numberRestarts = 0, this._isPromptingAfterCrash || (a.length ? d = v.window.showWarningMessage(v.l10n.t(`The JS/TS language service crashed.
This may be caused by a plugin contributed by one of these extensions: {0}.
Please try disabling these extensions before filing an issue against VS Code.`, c)) : s.length || (d = v.window.showWarningMessage(v.l10n.t("The JS/TS language service crashed."), l)))), d && (this._isPromptingAfterCrash = true), d?.then(async (p) => {
        if (this._isPromptingAfterCrash = false, p === l) {
          let u = this.versionProvider.bundledVersion.apiVersion;
          if (r.isYarnPnp()) {
            let f = { title: v.l10n.t("Report issue against Yarn PnP") };
            await v.window.showWarningMessage(v.l10n.t("Please report an issue against Yarn PnP"), { modal: true, detail: v.l10n.t("The workspace is using a version of the TypeScript Server that has been patched by Yarn PnP. This patching is a common source of bugs.") }, f) === f && v.env.openExternal(v.Uri.parse("https://github.com/yarnpkg/berry/issues"));
          } else u && r.lt(u) ? v.window.showWarningMessage(v.l10n.t("Please update your TypeScript version"), { modal: true, detail: v.l10n.t(`The workspace is using an old version of TypeScript ({0}).

Before reporting an issue, please update the workspace to use TypeScript {1} or newer to make sure the bug has not already been fixed.`, r.displayName, u.displayName) }) : v.env.openExternal(v.Uri.parse("https://github.com/microsoft/vscode/wiki/TypeScript-Issues"));
        }
      }), o && this.startService(true);
    }
  }
  toTsFilePath(e) {
    if (!yr.has(e.scheme)) return e.scheme === it && !ke() ? e.fsPath : (this.isProjectWideIntellisenseOnWebEnabled() ? "" : ni) + "/" + e.scheme + "/" + (e.authority || bc) + (e.path.startsWith("/") ? e.path : "/" + e.path) + (e.fragment ? "#" + e.fragment : "");
  }
  toOpenTsFilePath(e, r = {}) {
    let n = e instanceof v.Uri ? e : e.uri;
    if (!this.bufferSyncSupport.ensureHasBuffer(n)) {
      !r.suppressAlertOnFailure && !yr.has(n.scheme) && console.error(`Unexpected resource ${n}`);
      return;
    }
    return this.toTsFilePath(n);
  }
  hasCapabilityForResource(e, r) {
    if (!this.capabilities.has(r)) return false;
    switch (r) {
      case 2:
        return qn().includes(e.scheme);
      case 0:
      case 1:
        return true;
    }
  }
  toResource(e) {
    if (ke()) {
      if (e.startsWith("/lib.") && e.endsWith(".d.ts")) return v.Uri.joinPath(this.context.extensionUri, "dist", "browser", "typescript", e.slice(1));
      let r = e.match(/^\/([^\/]+)\/([^\/]*)\/(.+)$/);
      if (r) {
        let n = v.Uri.parse(r[1] + "://" + (r[2] === bc ? "" : r[2]) + "/" + r[3]);
        return this.bufferSyncSupport.toVsCodeResource(n);
      }
    }
    if (e.startsWith(ni)) {
      let r = e.match(/^\^\/([^\/]+)\/([^\/]*)\/(.+)$/);
      if (r) {
        let n = v.Uri.parse(r[1] + "://" + (r[2] === bc ? "" : r[2]) + "/" + r[3]);
        return this.bufferSyncSupport.toVsCodeResource(n);
      }
    }
    return this.bufferSyncSupport.toResource(e);
  }
  getWorkspaceRootForResource(e) {
    let r = v.workspace.workspaceFolders ? Array.from(v.workspace.workspaceFolders) : void 0;
    if (r?.length) {
      if (e.scheme === Hr.notebookCell) {
        for (let n of v.workspace.notebookDocuments) for (let o of n.getCells()) if (o.document.uri.toString() === e.toString()) {
          e = n.uri;
          break;
        }
      }
      for (let n of r.sort((o, s) => o.uri.path.length - s.uri.path.length)) if (n.uri.scheme === e.scheme && n.uri.authority === e.authority && e.path.startsWith(n.uri.path + "/")) return n.uri;
      return v.workspace.getWorkspaceFolder(e)?.uri;
    }
  }
  execute(e, r, n, o) {
    let s;
    if (o?.cancelOnResourceChange) {
      let a = this.serverState;
      if (a.type === 1) {
        let c = new v.CancellationTokenSource();
        n.onCancellationRequested(() => c.cancel());
        let l = { resource: o.cancelOnResourceChange, cancel: () => c.cancel() };
        a.toCancelOnResourceChange.add(l), s = this.executeImpl(e, r, { isAsync: false, token: c.token, expectsResult: true, ...o }), s[0].finally(() => {
          a.toCancelOnResourceChange.delete(l), c.dispose();
        });
      }
    }
    if (s || (s = this.executeImpl(e, r, { isAsync: false, token: n, expectsResult: true, ...o })), o?.nonRecoverable && s[0].catch((a) => this.fatalError(e, a)), e === "updateOpen") {
      let a = Promise.all(s).then(() => {
        this.loadingIndicator.reset();
      }), c = r;
      c.openFiles?.length === 1 && this.loadingIndicator.startedLoadingFile(c.openFiles[0].file, a);
    }
    return s[0];
  }
  executeWithoutWaitingForResponse(e, r) {
    this.executeImpl(e, r, { isAsync: false, token: void 0, expectsResult: false });
  }
  executeAsync(e, r, n) {
    return this.executeImpl(e, r, { isAsync: true, token: n, expectsResult: true })[0];
  }
  executeImpl(e, r, n) {
    let o = this.serverState;
    return o.type === 1 ? (this.bufferSyncSupport.beforeCommand(e), o.server.executeImpl(e, r, n)) : [Promise.resolve(gt.NoServer)];
  }
  interruptGetErr(e) {
    return this.bufferSyncSupport.interruptGetErr(e);
  }
  fatalError(e, r) {
    if (this.telemetryReporter.logTelemetry("fatalError", { ...r instanceof Nt ? r.telemetry : { command: e } }), console.error(`A non-recoverable error occurred while executing tsserver command: ${e}`), r instanceof Nt && r.serverErrorText && console.error(r.serverErrorText), this.serverState.type === 1) {
      this.logger.info("Killing TS Server");
      let n = this.serverState.server.tsServerLog;
      this.serverState.server.kill(), r instanceof Nt && (this.serverState = new or.Errored(r, n));
    }
  }
  dispatchEvent(e) {
    switch (e.event) {
      case "syntaxDiag":
      case "semanticDiag":
      case "suggestionDiag":
      case "regionSemanticDiag": {
        this.loadingIndicator.reset();
        let r = e;
        r.body?.diagnostics && this._onDiagnosticsReceived.fire({ kind: Pb(e), resource: this.toResource(r.body.file), diagnostics: r.body.diagnostics, spans: r.body.spans });
        return;
      }
      case "configFileDiag":
        this._onConfigDiagnosticsReceived.fire(e);
        return;
      case "telemetry": {
        let r = e.body;
        this.dispatchTelemetryEvent(r);
        return;
      }
      case "projectLanguageServiceState": {
        let r = e.body;
        this.serverState.type === 1 && this.serverState.updateLanguageServiceEnabled(r.languageServiceEnabled), this._onProjectLanguageServiceStateChanged.fire(r);
        return;
      }
      case "projectsUpdatedInBackground": {
        this.loadingIndicator.reset();
        let n = e.body.openFiles.map((o) => this.toResource(o));
        this.bufferSyncSupport.getErr(n);
        return;
      }
      case "beginInstallTypes":
        this._onDidBeginInstallTypings.fire(e.body);
        return;
      case "endInstallTypes":
        this._onDidEndInstallTypings.fire(e.body);
        return;
      case "typesInstallerInitializationFailed":
        this._onTypesInstallerInitializationFailed.fire(e.body);
        return;
      case "surveyReady":
        this._onSurveyReady.fire(e.body);
        return;
      case "projectLoadingStart":
        this.loadingIndicator.startedLoadingProject(e.body.projectName);
        return;
      case "projectLoadingFinish":
        this.loadingIndicator.finishedLoadingProject(e.body.projectName);
        return;
      case "createDirectoryWatcher": {
        let r = e.body.path;
        if (r.startsWith(ni)) return;
        this.createFileSystemWatcher(e.body.id, new v.RelativePattern(v.Uri.file(r), e.body.recursive ? "**" : "*"), e.body.ignoreUpdate);
        return;
      }
      case "createFileWatcher": {
        let r = e.body.path;
        if (r.startsWith(ni)) return;
        this.createFileSystemWatcher(e.body.id, new v.RelativePattern(v.Uri.file(r), "*"));
        return;
      }
      case "closeFileWatcher":
        this.closeFileSystemWatcher(e.body.id);
        return;
      case "requestCompleted": {
        let r = e.body.performanceData?.diagnosticsDuration;
        r && this.diagnosticsManager.logDiagnosticsPerformanceTelemetry(r.map((n) => {
          let o = this.toResource(n.file);
          return { ...n, fileLineCount: this.bufferSyncSupport.lineCount(o) };
        }));
        return;
      }
    }
  }
  scheduleExecuteWatchChangeRequest() {
    this.watchChangeTimeout || (this.watchChangeTimeout = setTimeout(() => {
      this.watchChangeTimeout = void 0;
      let e = Array.from(this.watchEvents, ([r, n]) => ({ id: r, updated: n.updated && Array.from(n.updated), created: n.created && Array.from(n.created), deleted: n.deleted && Array.from(n.deleted) }));
      this.watchEvents.clear(), this.executeWithoutWaitingForResponse("watchChange", e);
    }, 100));
  }
  addWatchEvent(e, r, n) {
    let o = this.watchEvents.get(e), s = (c) => {
      o?.[c]?.delete(n) && o[c].size === 0 && (o[c] = void 0);
    }, a = () => {
      o || this.watchEvents.set(e, o = {}), (o[r] ??= /* @__PURE__ */ new Set()).add(n);
    };
    switch (r) {
      case "created":
        s("deleted"), s("updated"), a();
        break;
      case "deleted":
        s("created"), s("updated"), a();
        break;
      case "updated":
        if (o?.created?.has(n)) return;
        s("deleted"), a();
        break;
    }
    this.scheduleExecuteWatchChangeRequest();
  }
  createFileSystemWatcher(e, r, n) {
    let o = new sr(), s = o.add(v.workspace.createFileSystemWatcher(r, void 0, n));
    o.add(s.onDidChange((a) => this.addWatchEvent(e, "updated", a.fsPath))), o.add(s.onDidCreate((a) => this.addWatchEvent(e, "created", a.fsPath))), o.add(s.onDidDelete((a) => this.addWatchEvent(e, "deleted", a.fsPath))), o.add({ dispose: () => {
      this.watchEvents.delete(e), this.watches.delete(e);
    } }), this.watches.has(e) && this.closeFileSystemWatcher(e), this.watches.set(e, o);
  }
  closeFileSystemWatcher(e) {
    this.watches.get(e)?.dispose();
  }
  dispatchTelemetryEvent(e) {
    let r = /* @__PURE__ */ Object.create(null);
    switch (e.telemetryEventName) {
      case "typingsInstalled": {
        let n = e.payload;
        r.installedPackages = n.installedPackages, typeof n.installSuccess == "boolean" && (r.installSuccess = n.installSuccess.toString()), typeof n.typingsInstallerVersion == "string" && (r.typingsInstallerVersion = n.typingsInstallerVersion);
        break;
      }
      default: {
        let n = e.payload;
        n && Object.keys(n).forEach((o) => {
          try {
            n.hasOwnProperty(o) && (r[o] = typeof n[o] == "string" ? n[o] : JSON.stringify(n[o]));
          } catch {
          }
        });
        break;
      }
    }
    e.telemetryEventName === "projectInfo" && this.serverState.type === 1 && this.serverState.updateTsserverVersion(r.version), this.telemetryReporter.logTelemetry(e.telemetryEventName, r);
  }
  configurePlugin(e, r) {
    this.executeWithoutWaitingForResponse("configurePlugin", { pluginName: e, configuration: r });
  }
  _startMemoryMonitor(e) {
    let r = e.pids;
    if (r.length === 0) return;
    let n = this.configuration.maxTsServerMemory, o = n * 0.85;
    if (process.platform === "win32") return;
    let s = async () => {
      let c = await (0, sg.default)(r), d = Object.values(c).map((u) => u.memory / 1024 / 1024).find((u) => u > o), p = v.l10n.t("TypeScript language service is approaching its memory limit");
      return d ? (v.window.showWarningMessage(p, "Fix").then(async (u) => {
        u === "Fix" && await v.window.showWarningMessage(p, { modal: true, detail: v.l10n.t(`A TypeScript language service process is using {0} MB of memory (>{1}% of the configured limit of {2} MB). You may experience slowness and instability.

You can configure the memory limit in application settings.`, d.toFixed(0), 100 * o / n, n) }, "Configure") === "Configure" && await v.commands.executeCommand("workbench.action.openSettings", "typescript.tsserver.nodePath");
      }), true) : false;
    }, a = async (c) => {
      this._memoryMonitorEnabled && (this._memoryCheckTimer = setTimeout(async () => {
        let l = false;
        try {
          l = await s();
        } catch {
        }
        l ? this._memoryMonitorEnabled = false : a(c);
      }, c));
    };
    this._memoryMonitorEnabled = true, this._memoryCheckTimer !== void 0 && (clearTimeout(this._memoryCheckTimer), this._memoryCheckTimer = void 0), a(800), e.onExit(() => {
      this._stopMemoryMonitor();
    });
  }
  _stopMemoryMonitor() {
    this._memoryCheckTimer !== void 0 && (clearTimeout(this._memoryCheckTimer), this._memoryCheckTimer = void 0, this._memoryMonitorEnabled = false);
  }
};
function Pb(i9) {
  switch (i9.event) {
    case "syntaxDiag":
      return 0;
    case "semanticDiag":
      return 1;
    case "suggestionDiag":
      return 2;
    case "regionSemanticDiag":
      return 3;
  }
  throw new Error("Unknown dignostics kind");
}
var Cc = class extends T {
  constructor(e) {
    super();
    this.client = e;
  }
  reset() {
    this._task && (this._task.resolve(), this._task = void 0);
  }
  startedLoadingProject(e) {
    this.reset();
    let r = this.getProjectDisplayName(e);
    v.window.withProgress({ location: v.ProgressLocation.Window, title: v.l10n.t("Initializing '{0}'", r) }, () => new Promise((n) => {
      this._task = { project: e, resolve: n };
    }));
  }
  getProjectDisplayName(e) {
    let r = this.client.toResource(e), n = v.workspace.asRelativePath(r), o = 60;
    return n.length > o ? "..." + n.slice(-o) : n;
  }
  startedLoadingFile(e, r) {
    this._task || v.window.withProgress({ location: v.ProgressLocation.Window, title: v.l10n.t("Analyzing '{0}' and its dependencies", og.basename(e)) }, () => r);
  }
  finishedLoadingProject(e) {
    this._task?.project === e && (this._task.resolve(), this._task = void 0);
  }
};
var re = m(require("vscode"));
Je();
qr();
X();
Y();
var Ir;
((o) => {
  let i9;
  ((d) => (d[d.None = 0] = "None", d[d.Pending = 1] = "Pending", d[d.Resolved = 2] = "Resolved", d[d.SyntaxOnly = 3] = "SyntaxOnly"))(i9 = o.Type ||= {}), o.None = Object.freeze({ type: 0 }), o.SyntaxOnly = Object.freeze({ type: 3 });
  class r {
    constructor(a, c) {
      this.resource = a;
      this.projectType = c;
      this.type = 1;
      this.cancellation = new re.CancellationTokenSource();
    }
  }
  o.Pending = r;
  class n {
    constructor(a, c, l) {
      this.resource = a;
      this.projectType = c;
      this.configFile = l;
      this.type = 2;
    }
  }
  o.Resolved = n;
})(Ir ||= {});
var Yo = class extends T {
  constructor(e, r, n) {
    super();
    this._client = e;
    this._activeTextEditorManager = n;
    this.openOpenConfigCommandId = "_typescript.openConfig";
    this.createOrOpenConfigCommandId = "_typescript.createOrOpenConfig";
    this._ready = false;
    this._state = Ir.None;
    r.register({ id: this.openOpenConfigCommandId, execute: async (...[o, s]) => {
      this._state.type === 2 ? await Bs(s, this._client, o, this._state.configFile) : this._state.type === 1 && await wi(s, this._client, this._state.resource);
    } }), r.register({ id: this.createOrOpenConfigCommandId, execute: async (...[o, s]) => {
      await xi(this._client.apiVersion, s, o, this._client.configuration);
    } }), n.onDidChangeActiveJsTsEditor(this.updateStatus, this, this._disposables), this._client.onReady(() => {
      this._ready = true, this.updateStatus();
    });
  }
  dispose() {
    super.dispose(), this._statusItem?.dispose();
  }
  async updateStatus() {
    let e = this._activeTextEditorManager.activeJsTsEditor?.document;
    if (!e || !pt(e)) {
      this.updateState(Ir.None);
      return;
    }
    if (!this._client.hasCapabilityForResource(e.uri, 2)) {
      this.updateState(Ir.SyntaxOnly);
      return;
    }
    let r = this._client.toOpenTsFilePath(e, { suppressAlertOnFailure: true });
    if (!r) {
      this.updateState(Ir.None);
      return;
    }
    if (!this._ready) return;
    let n = mr(e) ? 0 : 1, o = new Ir.Pending(e.uri, n);
    this.updateState(o);
    let s = await this._client.execute("projectInfo", { file: r, needFileNameList: false }, o.cancellation.token);
    s.type === "response" && s.body && this._state === o && this.updateState(new Ir.Resolved(e.uri, n, s.body.configFileName));
  }
  updateState(e) {
    if (this._state !== e) switch (this._state.type === 1 && (this._state.cancellation.cancel(), this._state.cancellation.dispose()), this._state = e, this._state.type) {
      case 0: {
        this._statusItem?.dispose(), this._statusItem = void 0;
        break;
      }
      case 1: {
        let r = this.ensureStatusItem();
        r.severity = re.LanguageStatusSeverity.Information, r.text = re.l10n.t("Loading IntelliSense status"), r.detail = void 0, r.command = void 0, r.busy = true;
        break;
      }
      case 2: {
        let r = this._state.projectType === 0 ? re.l10n.t("No tsconfig") : re.l10n.t("No jsconfig"), n = this._client.getWorkspaceRootForResource(this._state.resource);
        if (!n) {
          this._statusItem && (this._statusItem.text = r, this._statusItem.detail = re.workspace.workspaceFolders ? re.l10n.t("File is not part opened folders") : re.l10n.t("No opened folders"), this._statusItem.busy = false);
          return;
        }
        let o = this.ensureStatusItem();
        o.busy = false, o.detail = void 0, o.severity = re.LanguageStatusSeverity.Information, fr(this._state.configFile) ? (o.text = r, o.detail = void 0, o.command = { command: this.createOrOpenConfigCommandId, title: this._state.projectType === 0 ? re.l10n.t("Configure TSConfig") : re.l10n.t("Configure JSConfig"), arguments: [n, this._state.projectType] }) : (o.text = re.workspace.asRelativePath(this._state.configFile), o.detail = void 0, o.command = { command: this.openOpenConfigCommandId, title: re.l10n.t("Open Config File"), arguments: [n, this._state.projectType] });
        break;
      }
      case 3: {
        let r = this.ensureStatusItem();
        r.severity = re.LanguageStatusSeverity.Warning, r.text = re.l10n.t("Partial mode"), r.detail = re.l10n.t("Project wide IntelliSense not available"), r.busy = false, r.command = { title: re.l10n.t("Learn More"), command: "vscode.open", arguments: [re.Uri.parse("https://aka.ms/vscode/jsts/partial-mode")] };
        break;
      }
    }
  }
  ensureStatusItem() {
    return this._statusItem || (this._statusItem = re.languages.createLanguageStatusItem("typescript.projectStatus", wn), this._statusItem.name = re.l10n.t("JS/TS IntelliSense Status")), this._statusItem;
  }
};
var ue = m(require("vscode"));
qr();
var Tc = class {
  constructor(t) {
    this.telemetryReporter = t;
    this._item = ue.window.createStatusBarItem("status.typescript.exclude", ue.StatusBarAlignment.Right, 98), this._item.name = ue.l10n.t("TypeScript: Configure Excludes"), this._item.command = "js.projectStatus.command";
  }
  getCurrentHint() {
    return this._currentHint;
  }
  hide() {
    this._item.hide();
  }
  show(t) {
    this._currentHint = { message: t ? ue.l10n.t("To enable project-wide JavaScript/TypeScript language features, exclude folders with many files, like: {0}", t) : ue.l10n.t("To enable project-wide JavaScript/TypeScript language features, exclude large folders with source files that you do not work on.") }, this._item.tooltip = this._currentHint.message, this._item.text = ue.l10n.t("Configure Excludes"), this._item.tooltip = ue.l10n.t("To enable project-wide JavaScript/TypeScript language features, exclude large folders with source files that you do not work on."), this._item.color = "#A5DF3B", this._item.show(), this.telemetryReporter.logTelemetry("js.hintProjectExcludes");
  }
};
function xb(i9, t) {
  return t.onProjectLanguageServiceStateChanged((e) => {
    if (e.languageServiceEnabled) i9.hide();
    else {
      i9.show();
      let r = e.projectName;
      r && (i9.configFileName = r, ue.window.showWarningMessage(i9.getCurrentHint().message, { title: ue.l10n.t("Configure Excludes"), index: 0 }).then((n) => {
        n?.index === 0 && ag(t, r);
      }));
    }
  });
}
function ag(i9, t) {
  if (!fr(t)) ue.workspace.openTextDocument(t).then(ue.window.showTextDocument);
  else {
    let e = i9.getWorkspaceRootForResource(ue.Uri.file(t));
    e && xi(i9.apiVersion, /tsconfig\.?.*\.json/.test(t) ? 0 : 1, e, i9.configuration);
  }
}
function cg(i9) {
  let t = [], e = new Tc(i9.telemetryReporter);
  return t.push(ue.commands.registerCommand("js.projectStatus.command", () => {
    e.configFileName && ag(i9, e.configFileName);
    let { message: r } = e.getCurrentHint();
    return ue.window.showInformationMessage(r);
  })), t.push(xb(e, i9)), ue.Disposable.from(...t);
}
var ct = m(require("vscode"));
ne();
Y();
var lg = 30 * 1e3, Yi = class extends T {
  constructor(e) {
    super();
    this._acquiringTypings = /* @__PURE__ */ new Map();
    this._client = e, this._register(this._client.onDidBeginInstallTypings((r) => this.onBeginInstallTypings(r.eventId))), this._register(this._client.onDidEndInstallTypings((r) => this.onEndInstallTypings(r.eventId)));
  }
  dispose() {
    super.dispose();
    for (let e of this._acquiringTypings.values()) clearTimeout(e);
  }
  get isAcquiringTypings() {
    return Object.keys(this._acquiringTypings).length > 0;
  }
  onBeginInstallTypings(e) {
    this._acquiringTypings.has(e) || this._acquiringTypings.set(e, setTimeout(() => {
      this.onEndInstallTypings(e);
    }, lg));
  }
  onEndInstallTypings(e) {
    let r = this._acquiringTypings.get(e);
    r && clearTimeout(r), this._acquiringTypings.delete(e);
  }
}, Zo = class extends T {
  constructor(e) {
    super();
    this._promises = /* @__PURE__ */ new Map();
    this._register(e.onDidBeginInstallTypings((r) => this._onBegin(r.eventId))), this._register(e.onDidEndInstallTypings((r) => this._onEndOrTimeout(r.eventId))), this._register(e.onTypesInstallerInitializationFailed((r) => this.onTypesInstallerInitializationFailed()));
  }
  dispose() {
    super.dispose(), this._promises.forEach((e) => e());
  }
  _onBegin(e) {
    let r = setTimeout(() => this._onEndOrTimeout(e), lg), n = new Promise((o) => {
      this._promises.set(e, () => {
        clearTimeout(r), o();
      });
    });
    ct.window.withProgress({ location: ct.ProgressLocation.Window, title: ct.l10n.t("Fetching data for better TypeScript IntelliSense") }, () => n);
  }
  _onEndOrTimeout(e) {
    let r = this._promises.get(e);
    r && (this._promises.delete(e), r());
  }
  async onTypesInstallerInitializationFailed() {
    if (h("tsserver.checkNpmIsInstalled", true, { fallbackSection: "typescript", fallbackSubSectionNameOverride: "check.npmIsInstalled" })) {
      let e = { title: ct.l10n.t("Don't Show Again") };
      await ct.window.showWarningMessage(ct.l10n.t("Could not install typings files for JavaScript language features. Please ensure that NPM is installed, or configure 'js/ts.tsserver.npm.path' in your user settings. Alternatively, check the [documentation]({0}) to learn more.", "https://go.microsoft.com/fwlink/?linkid=847635"), e) === e && ct.workspace.getConfiguration("js/ts").update("tsserver.checkNpmIsInstalled", false, true);
    }
  }
};
var oi = m(require("vscode"));
Je();
Y();
var es = class extends T {
  constructor(e) {
    super();
    this._client = e;
    this._statusItem = this._register(oi.languages.createLanguageStatusItem("typescript.version", wn)), this._statusItem.name = oi.l10n.t("TypeScript Version"), this._statusItem.detail = oi.l10n.t("TypeScript version"), this._register(this._client.onTsServerStarted(({ version: r }) => this.onDidChangeTypeScriptVersion(r)));
  }
  onDidChangeTypeScriptVersion(e) {
    this._statusItem.text = e.displayName, this._statusItem.command = { command: jr.id, title: oi.l10n.t("Select Version"), tooltip: e.path };
  }
};
Xe();
Y();
var Db = /* @__PURE__ */ new Set([...ho, ...Hp, ...zp, ...vo, ...Gp, ...Jp, ...Xp]), Zi = class extends T {
  constructor(e, r, n, o, s) {
    super();
    this.languages = [];
    this.languagePerId = /* @__PURE__ */ new Map();
    this.reportStyleCheckAsWarnings = true;
    this.commandManager = o.commandManager;
    let a = this.getAllModeIds(e, o.pluginManager);
    this.client = this._register(new Qi(r, n, o, a)), this.client.onDiagnosticsReceived(({ kind: c, resource: l, diagnostics: d, spans: p }) => {
      this.diagnosticsReceived(c, l, d, p);
    }, null, this._disposables), this.client.onConfigDiagnosticsReceived((c) => this.configFileDiagnosticsReceived(c), null, this._disposables), this.client.onResendModelsRequested(() => this.populateService(), null, this._disposables), this._register(new es(this.client)), this._register(new Yo(this.client, o.commandManager, o.activeJsTsEditorTracker)), this._register(new Zo(this.client)), this.typingsStatus = this._register(new Yi(this.client)), this._register(cg(this.client)), this.fileConfigurationManager = this._register(new Ei(this.client, n));
    for (let c of e) {
      let l = new ei(this.client, c, this.commandManager, this.client.telemetryReporter, this.typingsStatus, this.fileConfigurationManager, s);
      this.languages.push(l), this._register(l), this.languagePerId.set(c.id, l);
    }
    Promise.resolve().then(() => (pg(), dg)).then((c) => this._register(c.register(this.client, this.fileConfigurationManager, (l) => this.handles(l)))), Promise.resolve().then(() => (fg(), ug)).then((c) => this._register(c.register(this.client, a))), this.client.ensureServiceStarted(), this.client.onReady(() => {
      let c = /* @__PURE__ */ new Set();
      for (let l of o.pluginManager.plugins) if (l.configNamespace && l.languages.length) this.registerExtensionLanguageProvider({ id: l.configNamespace, languageIds: Array.from(l.languages), diagnosticSource: "ts-plugin", diagnosticLanguage: 1, diagnosticOwner: "typescript", isExternal: true, standardFileExtensions: [] }, s);
      else for (let d of l.languages) c.add(d);
      c.size && this.registerExtensionLanguageProvider({ id: "typescript-plugins", languageIds: Array.from(c.values()), diagnosticSource: "ts-plugin", diagnosticLanguage: 1, diagnosticOwner: "typescript", isExternal: true, standardFileExtensions: [] }, s);
    }), this.client.onTsServerStarted(() => {
      this.triggerAllDiagnostics();
    }), ve.workspace.onDidChangeConfiguration(this.configurationChanged, this, this._disposables), this.configurationChanged(), this._register(new jo(r));
  }
  registerExtensionLanguageProvider(e, r) {
    let n = new ei(this.client, e, this.commandManager, this.client.telemetryReporter, this.typingsStatus, this.fileConfigurationManager, r);
    this.languages.push(n), this._register(n), this.languagePerId.set(e.id, n);
  }
  getAllModeIds(e, r) {
    return [...e.map((n) => n.languageIds), ...r.plugins.map((n) => n.languages)].flat();
  }
  get serviceClient() {
    return this.client;
  }
  reloadProjects() {
    this.client.executeWithoutWaitingForResponse("reloadProjects", null), this.triggerAllDiagnostics();
  }
  async handles(e) {
    return await this.findLanguage(e) ? true : this.client.bufferSyncSupport.handles(e);
  }
  configurationChanged() {
    this.reportStyleCheckAsWarnings = h("reportStyleChecksAsWarnings", true, { scope: null, fallbackSection: "typescript" });
  }
  async findLanguage(e) {
    try {
      for (let n of this.languages) if (n.handlesUri(e)) return n;
      let r = await ve.workspace.openTextDocument(e);
      return this.languages.find((n) => n.handlesDocument(r));
    } catch {
      return;
    }
  }
  triggerAllDiagnostics() {
    for (let e of this.languagePerId.values()) e.triggerAllDiagnostics();
  }
  populateService() {
    this.fileConfigurationManager.reset();
    for (let e of this.languagePerId.values()) e.reInitialize();
  }
  async diagnosticsReceived(e, r, n, o) {
    let s = await this.findLanguage(r);
    s && s.diagnosticsReceived(e, r, this.createMarkerDatas(n, s.diagnosticSource), o?.map((a) => R.fromTextSpan(a)));
  }
  configFileDiagnosticsReceived(e) {
    let r = e.body;
    !r?.diagnostics || !r.configFile || this.findLanguage(this.client.toResource(r.configFile)).then((n) => {
      n?.configFileDiagnosticsReceived(this.client.toResource(r.configFile), r.diagnostics.map((o) => {
        let s = o.start && o.end ? R.fromTextSpan(o) : new ve.Range(0, 0, 0, 1), a = new ve.Diagnostic(s, o.text, this.getDiagnosticSeverity(o));
        return a.source = n.diagnosticSource, a;
      }));
    });
  }
  createMarkerDatas(e, r) {
    return e.map((n) => this.tsDiagnosticToVsDiagnostic(n, r));
  }
  tsDiagnosticToVsDiagnostic(e, r) {
    let { start: n, end: o, text: s } = e, a = new ve.Range(I.fromLocation(n), I.fromLocation(o)), c = new ve.Diagnostic(a, s, this.getDiagnosticSeverity(e));
    c.source = e.source || r, e.code && (c.code = e.code);
    let l = e.relatedInformation;
    l && (c.relatedInformation = me(l.map((u) => {
      let f = u.span;
      if (f) return new ve.DiagnosticRelatedInformation(be.fromTextSpan(this.client.toResource(f.file), f), u.message);
    })));
    let d = [];
    e.reportsUnnecessary && d.push(ve.DiagnosticTag.Unnecessary), e.reportsDeprecated && d.push(ve.DiagnosticTag.Deprecated), c.tags = d.length ? d : void 0;
    let p = c;
    return p.reportUnnecessary = e.reportsUnnecessary, p.reportDeprecated = e.reportsDeprecated, p;
  }
  getDiagnosticSeverity(e) {
    if (this.reportStyleCheckAsWarnings && this.isStyleCheckDiagnostic(e.code) && e.category === Cr.error) return ve.DiagnosticSeverity.Warning;
    switch (e.category) {
      case Cr.error:
        return ve.DiagnosticSeverity.Error;
      case Cr.warning:
        return ve.DiagnosticSeverity.Warning;
      case Cr.suggestion:
        return ve.DiagnosticSeverity.Hint;
      default:
        return ve.DiagnosticSeverity.Error;
    }
  }
  isStyleCheckDiagnostic(e) {
    return typeof e == "number" && Db.has(e);
  }
};
var gg = m(require("vscode"));
nt();
Jt();
Je();
Y();
var en = class i7 extends T {
  constructor(e) {
    super();
    this.isInManagedFileContext = false;
    e.onDidChangeActiveJsTsEditor(this.onDidChangeActiveTextEditor, this, this._disposables), this.onDidChangeActiveTextEditor(e.activeJsTsEditor);
  }
  static {
    this.contextName = "typescript.isManagedFile";
  }
  dispose() {
    this.updateContext(false), super.dispose();
  }
  onDidChangeActiveTextEditor(e) {
    e ? this.updateContext(this.isManagedFile(e)) : this.updateContext(false);
  }
  updateContext(e) {
    e !== this.isInManagedFileContext && (gg.commands.executeCommand("setContext", i7.contextName, e), this.isInManagedFileContext = e);
  }
  isManagedFile(e) {
    return this.isManagedScriptFile(e) || this.isManagedConfigFile(e);
  }
  isManagedScriptFile(e) {
    return pt(e.document) && !yr.has(e.document.uri.scheme);
  }
  isManagedConfigFile(e) {
    return Ur(e.document.fileName);
  }
};
nt();
Jt();
tr();
function mg(i9, t, e, r) {
  return new we(() => new Zi(ra, i9, t, e, r));
}
function hg(i9, t, e, r = () => Promise.resolve()) {
  let n = [], o = [...ra.map((l) => l.languageIds), ...t.plugins.map((l) => l.languages)].flat(), s = false, a = (l) => !s && Ab(o, l) ? (s = true, r().then(() => {
    i9.value, n.push(new en(e));
  }), true) : false;
  if (!tn.workspace.textDocuments.some(a)) {
    let l = tn.workspace.onDidOpenTextDocument((d) => {
      a(d) && l.dispose();
    }, void 0, n);
  }
  return new tn.Disposable(() => {
    n.forEach((l) => l.dispose());
  });
}
function Ab(i9, t) {
  return (i9.indexOf(t.languageId) >= 0 || Ur(t.fileName)) && !yr.has(t.uri.scheme);
}
var vg = m(require("vscode"));
tr();
var ts = class {
  constructor() {
    this.output = new we(() => vg.window.createOutputChannel("TypeScript", { log: true }));
  }
  get logLevel() {
    return this.output.value.logLevel;
  }
  info(t, ...e) {
    this.output.value.info(t, ...e);
  }
  trace(t, ...e) {
    this.output.value.trace(t, ...e);
  }
  error(t, e) {
    e && e.message === "No content available." || this.output.value.error(t, ...e ? [e] : []);
  }
};
var Cg = m(require("fs"));
var yg = m(require("fs")), Sg = m(require("os")), rs = m(require("path"));
tr();
function bg(i9) {
  let t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], e = "";
  for (let r = 0; r < i9; r++) {
    let n = Math.floor(t.length * Math.random());
    e += t[n];
  }
  return e;
}
var _b = new we(() => {
  let i9 = `vscode-typescript${process.platform !== "win32" && process.getuid ? process.getuid() : ""}`;
  return rs.join(Sg.tmpdir(), i9);
}), Rc = new we(() => {
  let i9 = rs.join(_b.value, bg(20));
  return yg.mkdirSync(i9, { recursive: true }), i9;
});
function is(i9) {
  return rs.join(Rc.value, `${i9}-${bg(20)}.tmp`);
}
var kc = class {
  constructor(t, e) {
    this._serverId = t;
    this._tracer = e;
    this.cancellationPipeName = is("tscancellation");
  }
  tryCancelOngoingRequest(t) {
    if (!this.cancellationPipeName) return false;
    this._tracer.trace(this._serverId, `TypeScript Server: trying to cancel ongoing request with sequence number ${t}`);
    try {
      Cg.writeFileSync(this.cancellationPipeName + t, "");
    } catch {
    }
    return true;
  }
}, Tg = new class {
  create(i9, t) {
    return new kc(i9, t);
  }
}();
var ai = m(require("fs")), Pg = m(require("path")), xg = m(require("vscode"));
tr();
var ns = class {
  constructor(t) {
    this.context = t;
    this.logDirectory = new we(() => {
      try {
        let t2 = this.context.logPath;
        return ai.existsSync(t2) || ai.mkdirSync(t2), this.context.logPath;
      } catch {
        return;
      }
    });
  }
  getNewLogDirectory() {
    let t = this.logDirectory.value;
    if (t) try {
      return xg.Uri.file(ai.mkdtempSync(Pg.join(t, "tsserver-log-")));
    } catch {
      return;
    }
  }
};
var ci = m(require("vscode"));
Xe();
Y();
var wg;
((t) => {
  function i9(e, r) {
    return e.uri.toString() === r.uri.toString() && e.name === r.name && e.enableForWorkspaceTypeScriptVersions === r.enableForWorkspaceTypeScriptVersions && At(e.languages, r.languages);
  }
  t.equals = i9;
})(wg ||= {});
var os = class extends T {
  constructor() {
    super();
    this._pluginConfigurations = /* @__PURE__ */ new Map();
    this._onDidUpdatePlugins = this._register(new ci.EventEmitter());
    this.onDidChangePlugins = this._onDidUpdatePlugins.event;
    this._onDidUpdateConfig = this._register(new ci.EventEmitter());
    this.onDidUpdateConfig = this._onDidUpdateConfig.event;
    ci.extensions.onDidChange(() => {
      if (!this._plugins) return;
      let e = this.readPlugins();
      At(Array.from(this._plugins.values()).flat(), Array.from(e.values()).flat(), wg.equals) || (this._plugins = e, this._onDidUpdatePlugins.fire(this));
    }, void 0, this._disposables);
  }
  get plugins() {
    return this._plugins ??= this.readPlugins(), Array.from(this._plugins.values()).flat();
  }
  setConfiguration(e, r) {
    this._pluginConfigurations.set(e, r), this._onDidUpdateConfig.fire({ pluginId: e, config: r });
  }
  configurations() {
    return this._pluginConfigurations.entries();
  }
  readPlugins() {
    let e = /* @__PURE__ */ new Map();
    for (let r of ci.extensions.all) {
      let n = r.packageJSON;
      if (n.contributes && Array.isArray(n.contributes.typescriptServerPlugins)) {
        let o = [];
        for (let s of n.contributes.typescriptServerPlugins) o.push({ extension: r, name: s.name, enableForWorkspaceTypeScriptVersions: !!s.enableForWorkspaceTypeScriptVersions, uri: r.extensionUri, languages: Array.isArray(s.languages) ? s.languages : [], configNamespace: s.configNamespace });
        o.length && e.set(r.id, o);
      }
    }
    return e;
  }
};
var ls = m(require("child_process")), kg = m(require("fs")), Ig = m(require("path")), lt = m(require("vscode"));
Y();
pe();
_i();
var Ic = 8192, Lb = "Content-Length: ", Rg = Buffer.byteLength(Lb, "utf8"), Mb = Buffer.from(" ", "utf8")[0], ss = Buffer.from("\r", "utf8")[0], as = Buffer.from(`
`, "utf8")[0], Eg = 5e3, Dg = { seq: 0, type: "request", command: "exit" }, Ec = class {
  constructor() {
    this.index = 0;
    this.buffer = Buffer.allocUnsafe(Ic);
  }
  append(t) {
    let e = null;
    if (Buffer.isBuffer(t) ? e = t : e = Buffer.from(t, "utf8"), this.buffer.length - this.index >= e.length) e.copy(this.buffer, this.index, 0, e.length);
    else {
      let r = (Math.ceil((this.index + e.length) / Ic) + 1) * Ic;
      this.index === 0 ? (this.buffer = Buffer.allocUnsafe(r), e.copy(this.buffer, 0, 0, e.length)) : this.buffer = Buffer.concat([this.buffer.slice(0, this.index), e], r);
    }
    this.index += e.length;
  }
  tryReadContentLength() {
    let t = -1, e = 0;
    for (; e < this.index && (this.buffer[e] === Mb || this.buffer[e] === ss || this.buffer[e] === as); ) e++;
    if (this.index < e + Rg) return t;
    e += Rg;
    let r = e;
    for (; e < this.index && this.buffer[e] !== ss; ) e++;
    if (e + 3 >= this.index || this.buffer[e + 1] !== as || this.buffer[e + 2] !== ss || this.buffer[e + 3] !== as) return t;
    let n = this.buffer.toString("utf8", r, e);
    return t = parseInt(n), this.buffer = this.buffer.slice(e + 4), this.index = this.index - (e + 4), t;
  }
  tryReadContent(t) {
    if (this.index < t) return null;
    let e = this.buffer.toString("utf8", 0, t), r = t;
    for (; r < this.index && (this.buffer[r] === ss || this.buffer[r] === as); ) r++;
    return this.buffer.copy(this.buffer, 0, r), this.index = this.index - r, e;
  }
}, Dc = class extends T {
  constructor(e) {
    super();
    this.buffer = new Ec();
    this.nextMessageLength = -1;
    this._onError = this._register(new lt.EventEmitter());
    this.onError = this._onError.event;
    this._onData = this._register(new lt.EventEmitter());
    this.onData = this._onData.event;
    e.on("data", (r) => this.onLengthData(r));
  }
  onLengthData(e) {
    if (!this.isDisposed) try {
      for (this.buffer.append(e); ; ) {
        if (this.nextMessageLength === -1 && (this.nextMessageLength = this.buffer.tryReadContentLength(), this.nextMessageLength === -1)) return;
        let r = this.buffer.tryReadContent(this.nextMessageLength);
        if (r === null) return;
        this.nextMessageLength = -1;
        let n = JSON.parse(r);
        this._onData.fire(n);
      }
    } catch (r) {
      this._onError.fire(r);
    }
  }
};
function Ob(i9, t, e) {
  let r = Object.assign({}, i9);
  return e || (r.ELECTRON_RUN_AS_NODE = "1"), r.NODE_PATH = Ig.join(t, "..", "..", ".."), r.PATH = r.PATH || process.env.PATH, r;
}
function Nb(i9, t) {
  let e = [], r = qb(i9);
  if (r) {
    let n = Ag() ? "--inspect-brk" : "--inspect";
    e.push(`${n}=${r}`);
  }
  return t.maxTsServerMemory && e.push(`--max-old-space-size=${t.maxTsServerMemory}`), t.diagnosticDir && e.push(`--diagnostic-dir=${t.diagnosticDir}`), t.heapSnapshot > 0 && e.push(`--heapsnapshot-near-heap-limit=${t.heapSnapshot}`), t.heapProfile.enabled && (e.push("--heap-prof"), t.heapProfile.dir && e.push(`--heap-prof-dir=${t.heapProfile.dir}`), t.heapProfile.interval && e.push(`--heap-prof-interval=${t.heapProfile.interval}`)), e;
}
function qb(i9) {
  if (i9 === "syntax") return;
  let t = Ag() || Vb();
  if (t) {
    let e = parseInt(t);
    if (!isNaN(e)) return e;
  }
}
function Vb() {
  return process.env[lt.env.remoteName ? "TSS_REMOTE_DEBUG" : "TSS_DEBUG"];
}
function Ag() {
  return process.env[lt.env.remoteName ? "TSS_REMOTE_DEBUG_BRK" : "TSS_DEBUG_BRK"];
}
var Ac = class extends T {
  constructor(e, r) {
    super();
    this._process = e;
    this._useGracefulShutdown = r;
    this._isShuttingDown = false;
    this._process.once("exit", () => this.clearKillTimeout());
  }
  write(e) {
    this._process.send(e);
  }
  onData(e) {
    this._process.on("message", e);
  }
  onExit(e) {
    this._process.on("exit", e);
  }
  onError(e) {
    this._process.on("error", e);
  }
  getPid() {
    return this._process.pid;
  }
  kill() {
    if (!this._useGracefulShutdown) {
      this._process.kill();
      return;
    }
    if (!this._isShuttingDown) {
      this._isShuttingDown = true;
      try {
        this._process.send(Dg);
      } catch {
        this._process.kill();
        return;
      }
      this._killTimeout = setTimeout(() => this._process.kill(), Eg), this._killTimeout.unref?.();
    }
  }
  clearKillTimeout() {
    this._killTimeout && (clearTimeout(this._killTimeout), this._killTimeout = void 0);
  }
}, _c = class extends T {
  constructor(e, r) {
    super();
    this._process = e;
    this._useGracefulShutdown = r;
    this._isShuttingDown = false;
    this._reader = this._register(new Dc(this._process.stdout)), this._process.once("exit", () => this.clearKillTimeout());
  }
  write(e) {
    this._process.stdin.write(JSON.stringify(e) + `\r
`, "utf8");
  }
  onData(e) {
    this._reader.onData(e);
  }
  onExit(e) {
    this._process.on("exit", e);
  }
  onError(e) {
    this._process.on("error", e), this._reader.onError(e);
  }
  getPid() {
    return this._process.pid;
  }
  kill() {
    if (!this._useGracefulShutdown) {
      this._process.kill(), this._reader.dispose();
      return;
    }
    if (!this._isShuttingDown) {
      this._isShuttingDown = true;
      try {
        this._process.stdin?.write(JSON.stringify(Dg) + `\r
`, "utf8"), this._process.stdin?.end();
      } catch {
        this._process.kill(), this._reader.dispose();
        return;
      }
      this._killTimeout = setTimeout(() => {
        this._process.kill(), this._reader.dispose();
      }, Eg), this._killTimeout.unref?.();
    }
  }
  clearKillTimeout() {
    this._killTimeout && (clearTimeout(this._killTimeout), this._killTimeout = void 0), this._reader.dispose();
  }
}, cs = class {
  fork(t, e, r, n, o, s, a) {
    let c = t.tsServerPath;
    kg.existsSync(c) || (lt.window.showWarningMessage(lt.l10n.t("The path {0} doesn't point to a valid tsserver install. Falling back to bundled TypeScript version.", c)), o.reset(), c = o.currentVersion.tsServerPath);
    let d = s.currentVersion, p = false;
    if (!d && n.useBundledNode) {
      let H = lt.env.bundledNodePath?.();
      H && (d = H, p = true);
    }
    let u = Ob(process.env, c, !!d);
    u.CURSOR_SPAWNED_BY_EXTENSION_ID = "vscode.typescript-language-features", u.CURSOR_SPAWN_CHAIN = "vscode.typescript-language-features";
    let f = [...e], S = Nb(r, n), F = n.heapProfile.enabled, _ = !d && t.apiVersion?.gte(P.v460);
    _ && f.push("--useNodeIpc"), (_ || p) && (u.VSCODE_PROCESS_TITLE = `tsserver[${t.displayName}]: ${r}`, S.push("-e", 'process.title = process.env["VSCODE_PROCESS_TITLE"]; require(process.argv[1])'));
    let j = d ? ls.spawn(d, [...S, c, ...f], { windowsHide: true, cwd: void 0, env: u }) : ls.fork(c, f, { silent: true, cwd: void 0, env: u, execArgv: S, stdio: _ ? ["pipe", "pipe", "pipe", "ipc"] : void 0 });
    return _ ? new Ac(j, F) : new _c(j, F);
  }
};
var li = m(require("fs")), Ie = m(require("path")), dt = m(require("vscode"));
pe();
var _g = m(require("vscode"));
var Er = class {
  constructor(t, e, r, n) {
    this.source = t;
    this.path = e;
    this.apiVersion = r;
    this._pathLabel = n;
  }
  get tsServerPath() {
    return this.path;
  }
  get pathLabel() {
    return this._pathLabel ?? this.path;
  }
  get isValid() {
    return this.apiVersion !== void 0;
  }
  eq(t) {
    return this.path !== t.path ? false : this.apiVersion === t.apiVersion ? true : !this.apiVersion || !t.apiVersion ? false : this.apiVersion.eq(t.apiVersion);
  }
  get displayName() {
    let t = this.apiVersion;
    return t ? t.displayName : _g.l10n.t("Could not load the TypeScript version at this path");
  }
};
var ds = class i8 {
  constructor(t) {
    this.configuration = t;
  }
  updateConfiguration(t) {
    this.configuration = t;
  }
  get defaultVersion() {
    return this.globalVersion || this.bundledVersion;
  }
  get globalVersion() {
    if (this.configuration?.globalTsdk) {
      let t = this.loadVersionsFromSetting("user-setting", this.configuration.globalTsdk);
      if (t?.length) return t[0];
    }
    return this.contributedTsNextVersion;
  }
  get localVersion() {
    let t = this.localTsdkVersions;
    if (t?.length) return t[0];
    let e = this.localNodeModulesVersions;
    if (e?.length === 1) return e[0];
  }
  get localVersions() {
    let t = this.localTsdkVersions.concat(this.localNodeModulesVersions), e = /* @__PURE__ */ new Set();
    return t.filter((r) => e.has(r.path) ? false : (e.add(r.path), true));
  }
  get bundledVersion() {
    let t = this.getContributedVersion("bundled", "vscode.typescript-language-features", ["..", "node_modules"]);
    if (t) return t;
    throw dt.window.showErrorMessage(dt.l10n.t("VS Code's tsserver was deleted by another application such as a misbehaving virus detection tool. Please reinstall VS Code.")), new Error("Could not find bundled tsserver.js");
  }
  get contributedTsNextVersion() {
    return this.getContributedVersion("ts-nightly-extension", "ms-vscode.vscode-typescript-next", ["node_modules"]);
  }
  getContributedVersion(t, e, r) {
    try {
      let n = dt.extensions.getExtension(e);
      if (n) {
        let o = Ie.join(n.extensionPath, ...r, "typescript", "lib", "tsserver.js"), s = new Er(t, o, i8.getApiVersion(o), "");
        if (s.isValid) return s;
      }
    } catch {
    }
  }
  get localTsdkVersions() {
    let t = this.configuration?.localTsdk;
    return t ? this.loadVersionsFromSetting("workspace-setting", t) : [];
  }
  loadVersionsFromSetting(t, e) {
    if (Ie.isAbsolute(e)) {
      let n = Ie.join(e, "tsserver.js");
      return [new Er(t, n, i8.getApiVersion(n), e)];
    }
    let r = zt.asAbsoluteWorkspacePath(e);
    if (r !== void 0) {
      let n = Ie.join(r, "tsserver.js");
      return [new Er(t, n, i8.getApiVersion(n), e)];
    }
    return this.loadTypeScriptVersionsFromPath(t, e);
  }
  get localNodeModulesVersions() {
    return this.loadTypeScriptVersionsFromPath("node-modules", Ie.join("node_modules", "typescript", "lib")).filter((t) => t.isValid);
  }
  loadTypeScriptVersionsFromPath(t, e) {
    if (!dt.workspace.workspaceFolders) return [];
    let r = [];
    for (let n of dt.workspace.workspaceFolders) {
      let o = e;
      dt.workspace.workspaceFolders.length > 1 && (o = Ie.join(n.name, e));
      let s = Ie.join(n.uri.fsPath, e, "tsserver.js");
      r.push(new Er(t, s, i8.getApiVersion(s), o));
    }
    return r;
  }
  static getApiVersion(t) {
    let e = i8.getTypeScriptVersion(t);
    if (e) return e;
    let r = dt.workspace.getConfiguration().get("typescript.tsdk_version", void 0);
    if (r) return P.fromVersionString(r);
  }
  static getTypeScriptVersion(t) {
    if (!li.existsSync(t)) return;
    let e = t.split(Ie.sep);
    if (e.length <= 2) return;
    let n = e.slice(0, -2).join(Ie.sep), o = Ie.join(n, "package.json");
    if (li.existsSync(o) || Ie.basename(n) === "built" && (o = Ie.join(n, "..", "package.json")), !li.existsSync(o)) return;
    let s = li.readFileSync(o).toString(), a;
    try {
      a = JSON.parse(s);
    } catch {
      return;
    }
    if (a?.version) return a.version ? P.fromVersionString(a.version) : void 0;
  }
};
var ye = m(require("vscode"));
Jt();
Je();
Y();
Xe();
var ps = class extends T {
  constructor() {
    super();
    this._onDidChangeActiveJsTsEditor = this._register(new ye.EventEmitter());
    this.onDidChangeActiveJsTsEditor = this._onDidChangeActiveJsTsEditor.event;
    this._register(ye.window.onDidChangeActiveTextEditor((e) => this.update())), this._register(ye.window.onDidChangeVisibleTextEditors((e) => this.update())), this._register(ye.window.tabGroups.onDidChangeTabGroups((e) => this.update())), this.update();
  }
  get activeJsTsEditor() {
    return this._activeJsTsEditor;
  }
  update() {
    let n = this.getEditorCandidatesForActiveTab().filter((o) => this.isManagedFile(o))[0];
    this._activeJsTsEditor !== n && (this._activeJsTsEditor = n, this._onDidChangeActiveJsTsEditor.fire(this._activeJsTsEditor));
  }
  getEditorCandidatesForActiveTab() {
    let e = this.getActiveTabInfo();
    if (!e) return this.getVisibleEditorCandidates();
    let { tab: r, viewColumn: n } = e;
    if (r.input instanceof ye.TabInputText) {
      let o = r.input.uri, s = ye.window.visibleTextEditors.find((a) => a.document.uri.toString() === o.toString() && a.viewColumn === n);
      return s ? [s] : [];
    }
    if (r.input instanceof ye.TabInputTextDiff) {
      let o = r.input.original, s = r.input.modified;
      return me([ye.window.activeTextEditor, ...ye.window.visibleTextEditors]).filter((a) => (a.document.uri.toString() === o.toString() || a.document.uri.toString() === s.toString()) && a.viewColumn === void 0);
    }
    if (r.input instanceof ye.TabInputNotebook) {
      let o = ye.window.activeTextEditor;
      return o ? o.viewColumn !== void 0 ? [] : ye.window.visibleNotebookEditors.find((a) => a.notebook.uri.toString() === r.input.uri.toString() && a.viewColumn === n)?.notebook.getCells().some((a) => a.document.uri.toString() === o.document.uri.toString()) ? [o] : [] : [];
    }
    return [];
  }
  getActiveTabInfo() {
    try {
      let e = ye.window.tabGroups.all.find((r) => r.isActive);
      return e?.activeTab ? { tab: e.activeTab, viewColumn: e.viewColumn } : void 0;
    } catch {
      return;
    }
  }
  getVisibleEditorCandidates() {
    return me([ye.window.activeTextEditor, ...ye.window.visibleTextEditors]);
  }
  isManagedFile(e) {
    return this.isManagedScriptFile(e) || this.isManagedConfigFile(e);
  }
  isManagedScriptFile(e) {
    return pt(e.document);
  }
  isManagedConfigFile(e) {
    return Ur(e.document.fileName);
  }
};
var Ee = m(require("vscode"));
var Fc = "typescript.suggestNativePreview.dismissed";
async function Fg(i9, t) {
  if (i9.globalState.get(Fc) || !Ee.window.state.active || !Ee.extensions.getExtension("ms-vscode.vscode-typescript-next")) return;
  if (cr()) {
    await i9.globalState.update(Fc, true);
    return;
  }
  if (!await t.getTreatmentVariable("suggestNativePreview", false)) return;
  let r = { title: Ee.l10n.t("Install") }, n = { title: Ee.l10n.t("Learn More") }, o = { title: Ee.l10n.t("Don't Show Again") }, s = await Ee.window.showInformationMessage(Ee.l10n.t("Try TypeScript 7 Native Preview for significantly faster type checking and language features."), {}, r, n, o);
  await i9.globalState.update(Fc, true), s === r ? await Ee.commands.executeCommand("workbench.extensions.installExtension", Ts) : s === n && await Ee.env.openExternal(Ee.Uri.parse("https://aka.ms/vscode-try-ts-7-learn-more"));
}
var us = m(require("fs"));
var Lg = /* @__PURE__ */ (() => {
  let i9;
  return () => {
    if (typeof i9 > "u") if (process.platform === "win32") i9 = true;
    else if (process.platform !== "darwin") i9 = false;
    else {
      let t = is("typescript-case-check");
      us.writeFileSync(t, ""), i9 = us.existsSync(t.toUpperCase());
    }
    return i9;
  };
})();
tr();
function Mg(i9) {
  let t = i9.extension.packageJSON;
  return t && typeof t == "object" ? { name: t.name ?? "", version: t.version ?? "", aiKey: t.aiKey ?? "" } : null;
}
oe();
Y();
var di = m(require("vscode"));
Y();
ne();
var jb = "typescript.tsgo.usage";
function Ub() {
  let t = di.cursor?.metricsIncrement;
  return typeof t == "function" ? t : void 0;
}
function Wb(i9) {
  return i9.settingEnabled && i9.extensionInstalled ? "enabled" : i9.settingEnabled && !i9.extensionInstalled ? "extension_not_installed" : i9.settingModified && !i9.settingEnabled ? "disabled_by_user" : i9.settingModified ? "other" : "setting_not_present";
}
function Kb() {
  let i9 = !!cr(), t = !!h("experimental.useTsgo", false, { fallbackSection: "typescript" }), e = ln("experimental.useTsgo", { fallbackSection: "typescript" });
  return { reason: Wb({ extensionInstalled: i9, settingEnabled: t, settingModified: e }), extensionInstalled: i9, settingEnabled: t, settingModified: e };
}
function $b(i9) {
  return i9.settingModified ? i9.settingEnabled ? "enabled" : "disabled" : "not_present";
}
function Bb(i9, t = Ub()) {
  typeof t == "function" && t({ stat: jb, tags: { reason: i9.reason, extension_installed: i9.extensionInstalled ? "true" : "false", setting: $b(i9) } });
}
var Lc = class extends T {
  constructor() {
    super(), this.report(), this._register(di.workspace.onDidChangeConfiguration((t) => {
      (t.affectsConfiguration("js/ts.experimental.useTsgo") || t.affectsConfiguration("typescript.experimental.useTsgo")) && this.report();
    })), this._register(di.extensions.onDidChange(() => {
      this.report();
    }));
  }
  report() {
    let t = Kb();
    t.reason !== this._lastReason && (Bb(t), this._lastReason = t.reason);
  }
};
function Og() {
  return new Lc();
}
function nC(i9) {
  i9.subscriptions.push(Og());
  let t = new os();
  i9.subscriptions.push(t);
  let e = new im.EventEmitter();
  i9.subscriptions.push(e);
  let r = new ns(i9), n = new ds(), o, s = Mg(i9);
  if (s) {
    let { name: a, version: c } = s, l = new fi("");
    o = new Mn(l), i9.subscriptions.push(o);
    let d = new On(o, a, c, i9.globalState);
    Fg(i9, d);
  }
  return Promise.resolve().then(() => (Xg(), Jg)).then((a) => {
    i9.subscriptions.push(a.register());
  }), i9.subscriptions.push(A([zr("experimental.useTsgo", { fallbackSection: "typescript" }), lp(Ps)], () => {
    let a = new sr();
    return a.add(new gi()).register(new _r()), a;
  }, () => {
    let a = new sr(), c = a.add(new gi()), l = a.add(new ps()), d = mg(i9, Lg(), { pluginManager: t, commandManager: c, logDirectoryProvider: r, cancellerFactory: Tg, versionProvider: n, processFactory: new cs(), activeJsTsEditorTracker: l, serviceConfigurationProvider: new Fn(), experimentTelemetryReporter: o, logger: new ts() }, (p) => {
      e.fire(p);
    }).map((p) => a.add(p));
    return Jd(c, d, t, l), Promise.resolve().then(() => (tm(), em)).then((p) => {
      a.add(p.register(new we(() => d.value.serviceClient)));
    }), a.add(hg(d, t, l)), a;
  })), Hc(e.event, t);
}
function oC() {
  rm.rmSync(Rc.value, { recursive: true, force: true });
}
/*! Bundled license information:

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
