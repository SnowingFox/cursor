function T(i5, t) {
  let n = Math.pow(10, t);
  return Math.round(i5 * n) / n;
}
var E = class {
  constructor(t, n, s, e = 1) {
    this._rgbaBrand = void 0;
    this.r = Math.min(255, Math.max(0, t)) | 0, this.g = Math.min(255, Math.max(0, n)) | 0, this.b = Math.min(255, Math.max(0, s)) | 0, this.a = T(Math.max(Math.min(1, e), 0), 3);
  }
  static equals(t, n) {
    return t.r === n.r && t.g === n.g && t.b === n.b && t.a === n.a;
  }
}, v = class i {
  constructor(t, n, s, e) {
    this._hslaBrand = void 0;
    this.h = Math.max(Math.min(360, t), 0) | 0, this.s = T(Math.max(Math.min(1, n), 0), 3), this.l = T(Math.max(Math.min(1, s), 0), 3), this.a = T(Math.max(Math.min(1, e), 0), 3);
  }
  static equals(t, n) {
    return t.h === n.h && t.s === n.s && t.l === n.l && t.a === n.a;
  }
  static fromRGBA(t) {
    let n = t.r / 255, s = t.g / 255, e = t.b / 255, r = t.a, l = Math.max(n, s, e), o = Math.min(n, s, e), a = 0, u = 0, m = (o + l) / 2, p = l - o;
    if (p > 0) {
      switch (u = Math.min(m <= 0.5 ? p / (2 * m) : p / (2 - 2 * m), 1), l) {
        case n:
          a = (s - e) / p + (s < e ? 6 : 0);
          break;
        case s:
          a = (e - n) / p + 2;
          break;
        case e:
          a = (n - s) / p + 4;
          break;
      }
      a *= 60, a = Math.round(a);
    }
    return new i(a, u, m, r);
  }
  static _hue2rgb(t, n, s) {
    return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? t + (n - t) * 6 * s : s < 1 / 2 ? n : s < 2 / 3 ? t + (n - t) * (2 / 3 - s) * 6 : t;
  }
  static toRGBA(t) {
    let n = t.h / 360, { s, l: e, a: r } = t, l, o, a;
    if (s === 0) l = o = a = e;
    else {
      let u = e < 0.5 ? e * (1 + s) : e + s - e * s, m = 2 * e - u;
      l = i._hue2rgb(m, u, n + 1 / 3), o = i._hue2rgb(m, u, n), a = i._hue2rgb(m, u, n - 1 / 3);
    }
    return new E(Math.round(l * 255), Math.round(o * 255), Math.round(a * 255), r);
  }
}, D = class i2 {
  constructor(t, n, s, e) {
    this._hsvaBrand = void 0;
    this.h = Math.max(Math.min(360, t), 0) | 0, this.s = T(Math.max(Math.min(1, n), 0), 3), this.v = T(Math.max(Math.min(1, s), 0), 3), this.a = T(Math.max(Math.min(1, e), 0), 3);
  }
  static equals(t, n) {
    return t.h === n.h && t.s === n.s && t.v === n.v && t.a === n.a;
  }
  static fromRGBA(t) {
    let n = t.r / 255, s = t.g / 255, e = t.b / 255, r = Math.max(n, s, e), l = Math.min(n, s, e), o = r - l, a = r === 0 ? 0 : o / r, u;
    return o === 0 ? u = 0 : r === n ? u = ((s - e) / o % 6 + 6) % 6 : r === s ? u = (e - n) / o + 2 : u = (n - s) / o + 4, new i2(Math.round(u * 60), a, r, t.a);
  }
  static toRGBA(t) {
    let { h: n, s, v: e, a: r } = t, l = e * s, o = l * (1 - Math.abs(n / 60 % 2 - 1)), a = e - l, [u, m, p] = [0, 0, 0];
    return n < 60 ? (u = l, m = o) : n < 120 ? (u = o, m = l) : n < 180 ? (m = l, p = o) : n < 240 ? (m = o, p = l) : n < 300 ? (u = o, p = l) : n <= 360 && (u = l, p = o), u = Math.round((u + a) * 255), m = Math.round((m + a) * 255), p = Math.round((p + a) * 255), new E(u, m, p, r);
  }
}, R = class i3 {
  static fromHex(t) {
    return i3.Format.CSS.parseHex(t) || i3.red;
  }
  get hsla() {
    return this._hsla ? this._hsla : v.fromRGBA(this.rgba);
  }
  get hsva() {
    return this._hsva ? this._hsva : D.fromRGBA(this.rgba);
  }
  constructor(t) {
    if (t) if (t instanceof E) this.rgba = t;
    else if (t instanceof v) this._hsla = t, this.rgba = v.toRGBA(t);
    else if (t instanceof D) this._hsva = t, this.rgba = D.toRGBA(t);
    else throw new Error("Invalid color ctor argument");
    else throw new Error("Color needs a value");
  }
  equals(t) {
    return !!t && E.equals(this.rgba, t.rgba) && v.equals(this.hsla, t.hsla) && D.equals(this.hsva, t.hsva);
  }
  getRelativeLuminance() {
    let t = i3._relativeLuminanceForComponent(this.rgba.r), n = i3._relativeLuminanceForComponent(this.rgba.g), s = i3._relativeLuminanceForComponent(this.rgba.b), e = 0.2126 * t + 0.7152 * n + 0.0722 * s;
    return T(e, 4);
  }
  static _relativeLuminanceForComponent(t) {
    let n = t / 255;
    return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
  }
  getContrastRatio(t) {
    let n = this.getRelativeLuminance(), s = t.getRelativeLuminance();
    return n > s ? (n + 0.05) / (s + 0.05) : (s + 0.05) / (n + 0.05);
  }
  isDarker() {
    return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 < 128;
  }
  isLighter() {
    return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >= 128;
  }
  isLighterThan(t) {
    let n = this.getRelativeLuminance(), s = t.getRelativeLuminance();
    return n > s;
  }
  isDarkerThan(t) {
    let n = this.getRelativeLuminance(), s = t.getRelativeLuminance();
    return n < s;
  }
  lighten(t) {
    return new i3(new v(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a));
  }
  darken(t) {
    return new i3(new v(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a));
  }
  transparent(t) {
    let { r: n, g: s, b: e, a: r } = this.rgba;
    return new i3(new E(n, s, e, r * t));
  }
  isTransparent() {
    return this.rgba.a === 0;
  }
  isOpaque() {
    return this.rgba.a === 1;
  }
  opposite() {
    return new i3(new E(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
  }
  blend(t) {
    let n = t.rgba, s = this.rgba.a, e = n.a, r = s + e * (1 - s);
    if (r < 1e-6) return i3.transparent;
    let l = this.rgba.r * s / r + n.r * e * (1 - s) / r, o = this.rgba.g * s / r + n.g * e * (1 - s) / r, a = this.rgba.b * s / r + n.b * e * (1 - s) / r;
    return new i3(new E(l, o, a, r));
  }
  makeOpaque(t) {
    if (this.isOpaque() || t.rgba.a !== 1) return this;
    let { r: n, g: s, b: e, a: r } = this.rgba;
    return new i3(new E(t.rgba.r - r * (t.rgba.r - n), t.rgba.g - r * (t.rgba.g - s), t.rgba.b - r * (t.rgba.b - e), 1));
  }
  flatten(...t) {
    let n = t.reduceRight((s, e) => i3._flatten(e, s));
    return i3._flatten(this, n);
  }
  static _flatten(t, n) {
    let s = 1 - t.rgba.a;
    return new i3(new E(s * n.rgba.r + t.rgba.a * t.rgba.r, s * n.rgba.g + t.rgba.a * t.rgba.g, s * n.rgba.b + t.rgba.a * t.rgba.b));
  }
  toString() {
    return this._toString ??= i3.Format.CSS.format(this), this._toString;
  }
  static getLighterColor(t, n, s) {
    if (t.isLighterThan(n)) return t;
    s = s || 0.5;
    let e = t.getRelativeLuminance(), r = n.getRelativeLuminance();
    return s = s * (r - e) / r, t.lighten(s);
  }
  static getDarkerColor(t, n, s) {
    if (t.isDarkerThan(n)) return t;
    s = s || 0.5;
    let e = t.getRelativeLuminance(), r = n.getRelativeLuminance();
    return s = s * (e - r) / e, t.darken(s);
  }
  static {
    this.white = new i3(new E(255, 255, 255, 1));
  }
  static {
    this.black = new i3(new E(0, 0, 0, 1));
  }
  static {
    this.red = new i3(new E(255, 0, 0, 1));
  }
  static {
    this.blue = new i3(new E(0, 0, 255, 1));
  }
  static {
    this.green = new i3(new E(0, 255, 0, 1));
  }
  static {
    this.cyan = new i3(new E(0, 255, 255, 1));
  }
  static {
    this.lightgrey = new i3(new E(211, 211, 211, 1));
  }
  static {
    this.transparent = new i3(new E(0, 0, 0, 0));
  }
};
((t) => {
  let i5;
  ((s) => {
    let n;
    ((A) => {
      function e(_) {
        return _.rgba.a === 1 ? `rgb(${_.rgba.r}, ${_.rgba.g}, ${_.rgba.b})` : t.Format.CSS.formatRGBA(_);
      }
      A.formatRGB = e;
      function r(_) {
        return `rgba(${_.rgba.r}, ${_.rgba.g}, ${_.rgba.b}, ${+_.rgba.a.toFixed(2)})`;
      }
      A.formatRGBA = r;
      function l(_) {
        return _.hsla.a === 1 ? `hsl(${_.hsla.h}, ${(_.hsla.s * 100).toFixed(2)}%, ${(_.hsla.l * 100).toFixed(2)}%)` : t.Format.CSS.formatHSLA(_);
      }
      A.formatHSL = l;
      function o(_) {
        return `hsla(${_.hsla.h}, ${(_.hsla.s * 100).toFixed(2)}%, ${(_.hsla.l * 100).toFixed(2)}%, ${_.hsla.a.toFixed(2)})`;
      }
      A.formatHSLA = o;
      function a(_) {
        let L = _.toString(16);
        return L.length !== 2 ? "0" + L : L;
      }
      function u(_) {
        return `#${a(_.rgba.r)}${a(_.rgba.g)}${a(_.rgba.b)}`;
      }
      A.formatHex = u;
      function m(_, L = false) {
        return L && _.rgba.a === 1 ? t.Format.CSS.formatHex(_) : `#${a(_.rgba.r)}${a(_.rgba.g)}${a(_.rgba.b)}${a(Math.round(_.rgba.a * 255))}`;
      }
      A.formatHexA = m;
      function p(_) {
        return _.isOpaque() ? t.Format.CSS.formatHex(_) : t.Format.CSS.formatRGBA(_);
      }
      A.format = p;
      function d(_) {
        let L = _.length;
        if (L === 0 || _.charCodeAt(0) !== 35) return null;
        if (L === 7) {
          let g = 16 * f(_.charCodeAt(1)) + f(_.charCodeAt(2)), b = 16 * f(_.charCodeAt(3)) + f(_.charCodeAt(4)), c = 16 * f(_.charCodeAt(5)) + f(_.charCodeAt(6));
          return new t(new E(g, b, c, 1));
        }
        if (L === 9) {
          let g = 16 * f(_.charCodeAt(1)) + f(_.charCodeAt(2)), b = 16 * f(_.charCodeAt(3)) + f(_.charCodeAt(4)), c = 16 * f(_.charCodeAt(5)) + f(_.charCodeAt(6)), x = 16 * f(_.charCodeAt(7)) + f(_.charCodeAt(8));
          return new t(new E(g, b, c, x / 255));
        }
        if (L === 4) {
          let g = f(_.charCodeAt(1)), b = f(_.charCodeAt(2)), c = f(_.charCodeAt(3));
          return new t(new E(16 * g + g, 16 * b + b, 16 * c + c));
        }
        if (L === 5) {
          let g = f(_.charCodeAt(1)), b = f(_.charCodeAt(2)), c = f(_.charCodeAt(3)), x = f(_.charCodeAt(4));
          return new t(new E(16 * g + g, 16 * b + b, 16 * c + c, (16 * x + x) / 255));
        }
        return null;
      }
      A.parseHex = d;
      function f(_) {
        switch (_) {
          case 48:
            return 0;
          case 49:
            return 1;
          case 50:
            return 2;
          case 51:
            return 3;
          case 52:
            return 4;
          case 53:
            return 5;
          case 54:
            return 6;
          case 55:
            return 7;
          case 56:
            return 8;
          case 57:
            return 9;
          case 97:
            return 10;
          case 65:
            return 10;
          case 98:
            return 11;
          case 66:
            return 11;
          case 99:
            return 12;
          case 67:
            return 12;
          case 100:
            return 13;
          case 68:
            return 13;
          case 101:
            return 14;
          case 69:
            return 14;
          case 102:
            return 15;
          case 70:
            return 15;
        }
        return 0;
      }
    })(n = s.CSS ||= {});
  })(i5 = t.Format ||= {});
})(R ||= {});
var H = [], q = { "terminal.ansiBlack": { index: 0 }, "terminal.ansiRed": { index: 1 }, "terminal.ansiGreen": { index: 2 }, "terminal.ansiYellow": { index: 3 }, "terminal.ansiBlue": { index: 4 }, "terminal.ansiMagenta": { index: 5 }, "terminal.ansiCyan": { index: 6 }, "terminal.ansiWhite": { index: 7 }, "terminal.ansiBrightBlack": { index: 8 }, "terminal.ansiBrightRed": { index: 9 }, "terminal.ansiBrightGreen": { index: 10 }, "terminal.ansiBrightYellow": { index: 11 }, "terminal.ansiBrightBlue": { index: 12 }, "terminal.ansiBrightMagenta": { index: 13 }, "terminal.ansiBrightCyan": { index: 14 }, "terminal.ansiBrightWhite": { index: 15 } };
for (let i5 in q) {
  let t = q[i5], n = i5.substring(13);
  H[t.index] = { colorName: n, colorValue: "var(--vscode-" + i5.replace(".", "-") + ")" };
}
var k = typeof window < "u" ? window.trustedTypes?.createPolicy("notebookRenderer", { createHTML: (i5) => i5, createScript: (i5) => i5 }) : void 0;
var j = "\\u0000-\\u0020\\u007f-\\u009f", et = new RegExp("(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|data:|www\\.)[^\\s" + j + '"]{2,}[^\\s' + j + `"')}\\],:;.!?]`, "ug"), it = /(?<=^|\s)(?:[a-zA-Z]:(?:(?:\\|\/)[\w\.-]*)+)/, st = /(?<=^|\s)(?:(?:\~|\.)(?:(?:\\|\/)[\w\.-]*)+)/, rt = new RegExp(`(${it.source}|${st.source})`), lt = /(?<=^|\s)((?:\~|\.)?(?:\/[\w\.-]*)+)/, ot = /(?:\:([\d]+))?(?:\:([\d]+))?/, ct = typeof navigator < "u" ? navigator.userAgent && navigator.userAgent.indexOf("Windows") >= 0 : false, at = new RegExp(`${ct ? rt.source : lt.source}${ot.source}`, "g"), ut = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1[^>]*?>.*?<\/a>/gi, _t = 2e3, B = class i4 {
  shouldGenerateHtml(t) {
    return t && (!!i4.injectedHtmlCreator || !!k);
  }
  createHtml(t) {
    return i4.injectedHtmlCreator ? i4.injectedHtmlCreator(t) : k?.createHTML(t).toString();
  }
  linkify(t, n, s) {
    if (s) {
      let r = t.split(`
`);
      for (let a = 0; a < r.length - 1; a++) r[a] = r[a] + `
`;
      r[r.length - 1] || r.pop();
      let l = r.map((a) => this.linkify(a, n, false));
      if (l.length === 1) return l[0];
      let o = document.createElement("span");
      return l.forEach((a) => o.appendChild(a)), o;
    }
    let e = document.createElement("span");
    for (let r of this.detectLinks(t, !!n.trustHtml, n.linkifyFilePaths)) try {
      let l = null;
      switch (r.kind) {
        case "text":
          e.appendChild(document.createTextNode(r.value));
          break;
        case "web":
        case "path":
          e.appendChild(this.createWebLink(r.value));
          break;
        case "html":
          l = document.createElement("span"), l.innerHTML = this.createHtml(r.value), e.appendChild(l);
          break;
      }
    } catch {
      e.appendChild(document.createTextNode(r.value));
    }
    return e;
  }
  createWebLink(t) {
    let n = this.createLink(t);
    return n.href = t, n;
  }
  createLink(t) {
    let n = document.createElement("a");
    return n.textContent = t, n;
  }
  detectLinks(t, n, s) {
    if (t.length > _t) return [{ kind: "text", value: t, captures: [] }];
    let e = [], r = [], l = [];
    this.shouldGenerateHtml(n) && (e.push(ut), r.push("html")), e.push(et), r.push("web"), s && (e.push(at), r.push("path"));
    let o = (a, u) => {
      if (u >= e.length) {
        l.push({ value: a, kind: "text", captures: [] });
        return;
      }
      let m = e[u], p = 0, d;
      for (m.lastIndex = 0; (d = m.exec(a)) !== null; ) {
        let A = a.substring(p, d.index);
        A && o(A, u + 1);
        let _ = d[0];
        l.push({ value: _, kind: r[u], captures: d.slice(1) }), p = d.index + _.length;
      }
      let f = a.substring(p);
      f && o(f, u + 1);
    };
    return o(t, 0), l;
  }
}, mt = new B();
function X(i5, t, n) {
  return mt.linkify(i5, t, n);
}
function w(i5, t) {
  let n = document.createElement("span"), s = i5.length, e = [], r, l, o, a = false, u = 0, m = "";
  for (; u < s; ) {
    let g = false;
    if (i5.charCodeAt(u) === 27 && i5.charAt(u + 1) === "[") {
      let b = u;
      u += 2;
      let c = "";
      for (; u < s; ) {
        let x = i5.charAt(u);
        if (c += x, u++, x.match(/^[ABCDHIJKfhmpsu]$/)) {
          g = true;
          break;
        }
      }
      if (g) {
        if (J(n, m, t, e, r, l, o), m = "", c.match(/^(?:[34][0-8]|9[0-7]|10[0-7]|[0-9]|2[1-5,7-9]|[34]9|5[8,9]|1[0-9])(?:;[349][0-7]|10[0-7]|[013]|[245]|[34]9)?(?:;[012]?[0-9]?[0-9])*;?m$/)) {
          let x = c.slice(0, -1).split(";").filter((U) => U !== "").map((U) => parseInt(U, 10));
          if (x[0] === 38 || x[0] === 48 || x[0] === 58) {
            let U = x[0] === 38 ? "foreground" : x[0] === 48 ? "background" : "underline";
            x[1] === 5 ? _(x, U) : x[1] === 2 && A(x, U);
          } else f(x);
        }
      } else u = b;
    }
    g === false && (m += i5.charAt(u), u++);
  }
  return m && J(n, m, t, e, r, l, o), n;
  function p(g, b) {
    g === "foreground" ? r = b : g === "background" ? l = b : g === "underline" && (o = b), e = e.filter((c) => c !== `code-${g}-colored`), b !== void 0 && e.push(`code-${g}-colored`);
  }
  function d() {
    let g = r;
    p("foreground", l), p("background", g);
  }
  function f(g) {
    for (let b of g) switch (b) {
      case 0: {
        e = [], r = void 0, l = void 0;
        break;
      }
      case 1: {
        e = e.filter((c) => c !== "code-bold"), e.push("code-bold");
        break;
      }
      case 2: {
        e = e.filter((c) => c !== "code-dim"), e.push("code-dim");
        break;
      }
      case 3: {
        e = e.filter((c) => c !== "code-italic"), e.push("code-italic");
        break;
      }
      case 4: {
        e = e.filter((c) => c !== "code-underline" && c !== "code-double-underline"), e.push("code-underline");
        break;
      }
      case 5: {
        e = e.filter((c) => c !== "code-blink"), e.push("code-blink");
        break;
      }
      case 6: {
        e = e.filter((c) => c !== "code-rapid-blink"), e.push("code-rapid-blink");
        break;
      }
      case 7: {
        a || (a = true, d());
        break;
      }
      case 8: {
        e = e.filter((c) => c !== "code-hidden"), e.push("code-hidden");
        break;
      }
      case 9: {
        e = e.filter((c) => c !== "code-strike-through"), e.push("code-strike-through");
        break;
      }
      case 10: {
        e = e.filter((c) => !c.startsWith("code-font"));
        break;
      }
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20: {
        e = e.filter((c) => !c.startsWith("code-font")), e.push(`code-font-${b - 10}`);
        break;
      }
      case 21: {
        e = e.filter((c) => c !== "code-underline" && c !== "code-double-underline"), e.push("code-double-underline");
        break;
      }
      case 22: {
        e = e.filter((c) => c !== "code-bold" && c !== "code-dim");
        break;
      }
      case 23: {
        e = e.filter((c) => c !== "code-italic" && c !== "code-font-10");
        break;
      }
      case 24: {
        e = e.filter((c) => c !== "code-underline" && c !== "code-double-underline");
        break;
      }
      case 25: {
        e = e.filter((c) => c !== "code-blink" && c !== "code-rapid-blink");
        break;
      }
      case 27: {
        a && (a = false, d());
        break;
      }
      case 28: {
        e = e.filter((c) => c !== "code-hidden");
        break;
      }
      case 29: {
        e = e.filter((c) => c !== "code-strike-through");
        break;
      }
      case 53: {
        e = e.filter((c) => c !== "code-overline"), e.push("code-overline");
        break;
      }
      case 55: {
        e = e.filter((c) => c !== "code-overline");
        break;
      }
      case 39: {
        p("foreground", void 0);
        break;
      }
      case 49: {
        p("background", void 0);
        break;
      }
      case 59: {
        p("underline", void 0);
        break;
      }
      case 73: {
        e = e.filter((c) => c !== "code-superscript" && c !== "code-subscript"), e.push("code-superscript");
        break;
      }
      case 74: {
        e = e.filter((c) => c !== "code-superscript" && c !== "code-subscript"), e.push("code-subscript");
        break;
      }
      case 75: {
        e = e.filter((c) => c !== "code-superscript" && c !== "code-subscript");
        break;
      }
      default: {
        L(b);
        break;
      }
    }
  }
  function A(g, b) {
    if (g.length >= 5 && g[2] >= 0 && g[2] <= 255 && g[3] >= 0 && g[3] <= 255 && g[4] >= 0 && g[4] <= 255) {
      let c = new E(g[2], g[3], g[4]);
      p(b, c);
    }
  }
  function _(g, b) {
    let c = g[2], x = gt(c);
    if (x) p(b, x);
    else if (c >= 0 && c <= 15) {
      if (b === "underline") {
        p(b, H[c].colorValue);
        return;
      }
      c += 30, c >= 38 && (c += 52), b === "background" && (c += 10), L(c);
    }
  }
  function L(g) {
    let b, c;
    g >= 30 && g <= 37 ? (c = g - 30, b = "foreground") : g >= 90 && g <= 97 ? (c = g - 90 + 8, b = "foreground") : g >= 40 && g <= 47 ? (c = g - 40, b = "background") : g >= 100 && g <= 107 && (c = g - 100 + 8, b = "background"), c !== void 0 && b && p(b, H[c]?.colorValue);
  }
}
function J(i5, t, n, s, e, r, l) {
  if (!i5 || !t) return;
  let o = document.createElement("span");
  o.childElementCount === 0 && (o = X(t, n, true)), o.className = s.join(" "), e && (o.style.color = typeof e == "string" ? e : R.Format.CSS.formatRGB(new R(e))), r && (o.style.backgroundColor = typeof r == "string" ? r : R.Format.CSS.formatRGB(new R(r))), l && (o.style.textDecorationColor = typeof l == "string" ? l : R.Format.CSS.formatRGB(new R(l))), i5.appendChild(o);
}
function gt(i5) {
  if (i5 % 1 === 0) if (i5 >= 16 && i5 <= 231) {
    i5 -= 16;
    let t = i5 % 6;
    i5 = (i5 - t) / 6;
    let n = i5 % 6;
    i5 = (i5 - n) / 6;
    let s = i5, e = 255 / 5;
    return t = Math.round(t * e), n = Math.round(n * e), s = Math.round(s * e), new E(s, n, t);
  } else if (i5 >= 232 && i5 <= 255) {
    i5 -= 232;
    let t = Math.round(i5 / 23 * 255);
    return new E(t, t, t);
  } else return;
}
var y = "scrollable", F = 5e3, pt = 8e3;
function bt(i5) {
  let t = document.createElement("div");
  t.classList.add("truncation-message");
  let n = document.createElement("span");
  n.textContent = "Output is truncated. View as a ", t.appendChild(n);
  let s = document.createElement("a");
  s.textContent = "scrollable element", s.href = `command:cellOutput.enableScrolling?${i5}`, s.ariaLabel = "enable scrollable output", t.appendChild(s);
  let e = document.createElement("span");
  e.textContent = " or open in a ", t.appendChild(e);
  let r = document.createElement("a");
  r.textContent = "text editor", r.href = `command:workbench.action.openLargeOutput?${i5}`, r.ariaLabel = "open output in text editor", t.appendChild(r);
  let l = document.createElement("span");
  l.textContent = ". Adjust cell output ", t.appendChild(l);
  let o = document.createElement("a");
  o.textContent = "settings", o.href = "command:workbench.action.openSettings?%5B%22%40tag%3AnotebookOutputLayout%22%5D", o.ariaLabel = "notebook output settings", t.appendChild(o);
  let a = document.createElement("span");
  return a.textContent = "...", t.appendChild(a), t;
}
function ft(i5) {
  let t = document.createElement("div"), n = document.createElement("a");
  return n.textContent = "...", n.href = `command:workbench.action.openLargeOutput?${i5}`, n.ariaLabel = "Open full output in text editor", n.title = "Open full output in text editor", n.style.setProperty("text-decoration", "none"), t.appendChild(n), t;
}
function Et(i5, t, n, s) {
  let e = document.createElement("div");
  e.setAttribute("data-vscode-context", JSON.stringify({ webviewSection: "text", outputId: i5, preventDefaultContextMenuItems: true }));
  let r = t.length;
  if (r <= n) {
    let o = w(t.join(`
`), s);
    return e.appendChild(o), e;
  }
  e.appendChild(w(t.slice(0, n - 5).join(`
`), s));
  let l = document.createElement("div");
  return l.innerText = "...", e.appendChild(l), e.appendChild(w(t.slice(r - 5).join(`
`), s)), e.appendChild(bt(i5)), e;
}
function xt(i5, t, n) {
  let s = document.createElement("div");
  return s.setAttribute("data-vscode-context", JSON.stringify({ webviewSection: "text", outputId: i5, preventDefaultContextMenuItems: true })), t.length > F && s.appendChild(ft(i5)), s.appendChild(w(t.slice(-1 * F).join(`
`), n)), s;
}
var O = {};
function Lt(i5, t, n, s) {
  O[t] || (O[t] = 0);
  let e = n.split(/\r\n|\r|\n/g), r = e.length + O[t];
  return r > pt ? false : (i5.appendChild(w(e.join(`
`), s)), O[t] = r, true);
}
function S(i5, t, n) {
  let { linesLimit: s, error: e, scrollable: r, trustHtml: l, linkifyFilePaths: o } = n, a = { linkifyFilePaths: o, trustHtml: l }, u = t.split(/\r\n|\r|\n/g);
  O[i5] = O[i5] = Math.min(u.length, F);
  let m;
  return r ? m = xt(i5, u, a) : m = Et(i5, u, s, a), m.setAttribute("output-item-id", i5), e && m.classList.add("error"), m;
}
function G(i5, t, n) {
  let s = i5.appendedText?.(), e = { linkifyFilePaths: n.linkifyFilePaths, trustHtml: n.trustHtml };
  if (s && n.scrollable && Lt(t, i5.id, s, e)) return;
  let r = S(i5.id, i5.text(), n);
  for (t.replaceWith(r); r.nextSibling; ) r.nextSibling.remove();
}
function Y(i5) {
  let t;
  return t = i5.replace(/\u001b\[4\dm/g, ""), t = t.replace(/\u001b\[38;.*?\d+m/g, "\x1B[39m"), t = t.replace(/(;32m[ ->]*?)(\d+)(.*)\n/g, (n, s, e, r) => (r = r.replace(/\u001b\[3\d+m/g, "\x1B[39m"), `${s}${e}${r}
`)), At(t) ? Rt(t) : { formattedStack: t };
}
var dt = /\u001b\[.+?m/g, P = /File\s+(?:\u001b\[.+?m)?(.+):(\d+)/, z = /^((?:\u001b\[.+?m)?[ \->]+?)(\d+)(?:\u001b\[0m)?( .*)/, I = /(?<prefix>Cell\s+(?:\u001b\[.+?m)?In\s*\[(?<executionCount>\d+)\],\s*)(?<lineLabel>line (?<lineNumber>\d+)).*/, M = /(?<prefix>Input\s+?(?:\u001b\[.+?m)(?<cellLabel>In\s*\[(?<executionCount>\d+)\]))(?<postfix>.*)/;
function At(i5) {
  return I.test(i5) || M.test(i5) || P.test(i5);
}
function N(i5) {
  return i5.replace(dt, "").trim();
}
function Rt(i5) {
  let t = i5.split(`
`), n, s = "";
  for (let r in t) {
    let l = t[r];
    if (P.test(l)) {
      let o = t[r].match(P);
      n = { kind: "file", path: N(o[1]) };
      continue;
    } else if (I.test(l)) {
      n = { kind: "cell", path: N(l.replace(I, "vscode-notebook-cell:?execution_count=$<executionCount>")) };
      let o = l.replace(I, `<a href='${n.path}&line=$<lineNumber>'>line $<lineNumber></a>`);
      t[r] = l.replace(I, `$<prefix>${o}`), s = s || o;
      continue;
    } else if (M.test(l)) {
      n = { kind: "cell", path: N(l.replace(M, "vscode-notebook-cell:?execution_count=$<executionCount>")) };
      let o = l.replace(M, `<a href='${n.path}'>$<cellLabel></a>`);
      t[r] = l.replace(M, `Input ${o}$<postfix>`);
      continue;
    } else if (!n || l.trim() === "") {
      n = void 0;
      continue;
    } else if (z.test(l)) {
      t[r] = l.replace(z, (o, a, u, m) => n?.kind === "file" ? `${a}<a href='${n?.path}:${u}'>${u}</a>${m}` : `${a}<a href='${n?.path}&line=${u}'>${u}</a>${m}`);
      continue;
    }
  }
  let e = s;
  return { formattedStack: t.join(`
`), errorLocation: e };
}
function $(i5) {
  for (; i5.firstChild; ) i5.firstChild.remove();
}
function vt(i5, t) {
  let n = new Blob([i5.data()], { type: i5.mime }), s = URL.createObjectURL(n), e = { dispose: () => {
    URL.revokeObjectURL(s);
  } };
  if (t.firstChild) {
    let a = t.firstChild;
    if (a.firstChild && a.firstChild.nodeName === "IMG" && a.firstChild instanceof HTMLImageElement) return a.firstChild.src = s, e;
  }
  let r = document.createElement("img");
  r.src = s;
  let l = nt(i5);
  l && (r.alt = l), r.setAttribute("data-vscode-context", JSON.stringify({ webviewSection: "image", outputId: i5.id, preventDefaultContextMenuItems: true }));
  let o = document.createElement("div");
  return o.classList.add("display"), o.appendChild(r), t.appendChild(o), e;
}
var Tt = ["type", "src", "nonce", "noModule", "async"], tt = (i5) => {
  let t = Array.from(i5.getElementsByTagName("script"));
  for (let n = 0; n < t.length; n++) {
    let s = t[n], e = document.createElement("script"), r = k?.createScript(s.innerText) ?? s.innerText;
    e.text = r;
    for (let l of Tt) {
      let o = s[l] || s.getAttribute && s.getAttribute(l);
      o && e.setAttribute(l, o);
    }
    i5.appendChild(e).parentNode.removeChild(e);
  }
};
function nt(i5) {
  let t = i5.metadata;
  if (typeof t == "object" && t && "vscode_altText" in t && typeof t.vscode_altText == "string") return t.vscode_altText;
}
function kt(i5, t) {
  if (i5.mime.indexOf("svg") > -1) {
    let n = t.querySelector("svg"), s = nt(i5);
    if (n && s) {
      let e = document.createElement("title");
      e.innerText = s, n.prepend(e);
    }
    n && (n.classList.add("output-image"), n.setAttribute("data-vscode-context", JSON.stringify({ webviewSection: "image", outputId: i5.id, preventDefaultContextMenuItems: true })));
  }
}
async function Ut(i5, t, n, s) {
  $(t);
  let e = document.createElement("div"), r = i5.text(), l = k?.createHTML(r) ?? r;
  e.innerHTML = l, kt(i5, e);
  for (let o of s) if (e = await o.postRender(i5, e, n) ?? e, n.aborted) return;
  t.appendChild(e), tt(e);
}
async function Dt(i5, t, n, s) {
  let e = i5.text();
  for (let a of s) if (e = await a.preEvaluate(i5, t, e, n) ?? e, n.aborted) return;
  let r = document.createElement("script");
  r.type = "module", r.textContent = e;
  let l = document.createElement("div"), o = k?.createHTML(r.outerHTML) ?? r.outerHTML;
  l.innerHTML = o, t.appendChild(l), tt(l);
}
function W() {
  let i5 = [];
  return { push: (...n) => {
    i5.push(...n);
  }, dispose: () => {
    i5.forEach((n) => n.dispose());
  } };
}
function wt(i5, t, n, s) {
  let e = W();
  $(t);
  let r;
  try {
    r = JSON.parse(i5.text());
  } catch (o) {
    return console.log(o), e;
  }
  let l = r.name && r.message ? `${r.name}: ${r.message}` : r.name || r.message;
  if (r.stack) {
    let o = n.settings.minimalError && !!l?.length;
    t.classList.add("traceback");
    let { formattedStack: a, errorLocation: u } = Y(r.stack), m = !o && V(i5, n.settings), d = { linesLimit: o ? 1e3 : n.settings.lineLimit, scrollable: m, trustHtml: s, linkifyFilePaths: false }, f = S(i5.id, a, d), A = document.createElement("div");
    A.appendChild(f), t.classList.toggle("word-wrap", n.settings.outputWordWrap), e.push(n.onDidChangeSettings((_) => {
      t.classList.toggle("word-wrap", _.outputWordWrap);
    })), o ? Ot(u, l, A, t) : (A.classList.toggle("scrollable", m), t.appendChild(A), K(A, e));
  } else {
    let o = document.createElement("div");
    l && (o.innerText = l, t.appendChild(o));
  }
  return t.classList.add("error"), e;
}
function Ot(i5, t, n, s) {
  let e = document.createElement("div"), r = document.createElement("div");
  r.classList.add("error-output-header"), i5 && i5.indexOf("<a") === 0 && (r.innerHTML = i5);
  let l = document.createElement("span");
  l.innerText = t, r.appendChild(l), e.appendChild(r);
  function o(m) {
    let p = document.createElement("li");
    return p.appendChild(m), p.onmouseover = function() {
      p.classList.add("hover");
    }, p.onmouseout = function() {
      p.classList.remove("hover");
    }, p;
  }
  let a = document.createElement("ul");
  a.classList.add("error-output-actions"), e.appendChild(a);
  let u = document.createElement("a");
  u.innerText = "Show Details", u.href = "#!", a.appendChild(o(u)), u.onclick = (m) => {
    m.preventDefault();
    let p = n.style.display === "none";
    n.style.display = p ? "" : "none", u.innerText = p ? "Hide Details" : "Show Details";
  }, e.appendChild(n), n.style.display = "none", s.appendChild(e);
}
function St(i5) {
  let t = i5.parentElement, n, s = t?.previousSibling;
  for (; s; ) {
    let e = s.firstChild;
    if (!e || !e.classList.contains("output-stream")) break;
    n = e.firstChild, s = s?.previousSibling;
  }
  return n;
}
function Z(i5) {
  let t = i5.target;
  t.scrollTop === 0 ? t.classList.remove("more-above") : t.classList.add("more-above");
}
function Q(i5) {
  i5.ctrlKey || i5.shiftKey || (i5.code === "ArrowDown" || i5.code === "ArrowUp" || i5.code === "End" || i5.code === "Home" || i5.code === "PageUp" || i5.code === "PageDown") && i5.stopPropagation();
}
function K(i5, t, n) {
  if (i5.classList.contains(y)) {
    let s = i5.scrollHeight > i5.clientHeight;
    i5.classList.toggle("scrollbar-visible", s), i5.scrollTop = n !== void 0 ? n : i5.scrollHeight, s && (i5.addEventListener("scroll", Z), t.push({ dispose: () => i5.removeEventListener("scroll", Z) }), i5.addEventListener("keydown", Q), t.push({ dispose: () => i5.removeEventListener("keydown", Q) }));
  }
}
function It(i5) {
  let t = i5.querySelector("." + y);
  if (t && t.scrollHeight - t.scrollTop - t.clientHeight > 2) return t.scrollTop;
}
function V(i5, t) {
  let n = i5.metadata;
  return typeof n == "object" && n && "scrollable" in n && typeof n.scrollable == "boolean" ? n.scrollable : t.outputScrolling;
}
function h(i5, t, n, s) {
  let e = W(), r = V(i5, s.settings), l = { linesLimit: s.settings.lineLimit, scrollable: r, trustHtml: false, error: n, linkifyFilePaths: s.settings.linkifyFilePaths };
  t.classList.add("output-stream");
  let o = r ? It(t) : void 0, a = St(t);
  if (a) {
    let u = a.querySelector(`[output-item-id="${i5.id}"]`);
    if (u) G(i5, u, l);
    else {
      let m = S(i5.id, i5.text(), l);
      a.appendChild(m);
    }
    a.classList.toggle("scrollbar-visible", a.scrollHeight > a.clientHeight), a.scrollTop = o !== void 0 ? o : a.scrollHeight;
  } else {
    let u = t.querySelector(`[output-item-id="${i5.id}"]`), m = u?.parentElement;
    if (u && m) G(i5, u, l);
    else {
      let p = S(i5.id, i5.text(), l);
      for (m = document.createElement("div"), m.appendChild(p); t.firstChild; ) t.firstChild.remove();
      t.appendChild(m);
    }
    m.classList.toggle("scrollable", r), t.classList.toggle("word-wrap", s.settings.outputWordWrap), e.push(s.onDidChangeSettings((p) => {
      t.classList.toggle("word-wrap", p.outputWordWrap);
    })), K(m, e, o);
  }
  return e;
}
function C(i5, t, n) {
  let s = W();
  $(t);
  let e = i5.text(), r = V(i5, n.settings), l = { linesLimit: n.settings.lineLimit, scrollable: r, trustHtml: false, linkifyFilePaths: n.settings.linkifyFilePaths }, o = S(i5.id, e, l);
  return o.classList.add("output-plaintext"), o.classList.toggle("word-wrap", n.settings.outputWordWrap), s.push(n.onDidChangeSettings((a) => {
    o.classList.toggle("word-wrap", a.outputWordWrap);
  })), o.classList.toggle("scrollable", r), t.appendChild(o), K(o, s), s;
}
var zt = (i5) => {
  let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), e = i5, r = document.createElement("style");
  return r.textContent = `
	#container div.output.remove-padding {
		padding-left: 0;
		padding-right: 0;
	}
	.output-plaintext,
	.output-stream,
	.traceback {
		display: inline-block;
		width: 100%;
		line-height: var(--notebook-cell-output-line-height);
		font-family: var(--notebook-cell-output-font-family);
		font-size: var(--notebook-cell-output-font-size);
		user-select: text;
		-webkit-user-select: text;
		-ms-user-select: text;
		cursor: auto;
		word-wrap: break-word;
		/* text/stream output container should scroll but preserve newline character */
		white-space: pre;
	}
	/* When wordwrap turned on, force it to pre-wrap */
	#container div.output_container .word-wrap {
		white-space: pre-wrap;
	}
	#container div.output>div {
		padding-left: var(--notebook-output-node-left-padding);
		padding-right: var(--notebook-output-node-padding);
		box-sizing: border-box;
		border-width: 1px;
		border-style: solid;
		border-color: transparent;
	}
	#container div.output>div:focus {
		outline: 0;
		border-color: var(--theme-input-focus-border-color);
	}
	#container div.output .scrollable {
		overflow-y: auto;
		max-height: var(--notebook-cell-output-max-height);
	}
	#container div.output .scrollable.scrollbar-visible {
		border-color: var(--vscode-editorWidget-border);
	}
	#container div.output .scrollable.scrollbar-visible:focus {
		border-color: var(--theme-input-focus-border-color);
	}
	#container div.truncation-message {
		font-style: italic;
		font-family: var(--theme-font-family);
		padding-top: 4px;
	}
	#container div.output .scrollable div {
		cursor: text;
	}
	#container div.output .scrollable div a {
		cursor: pointer;
	}
	#container div.output .scrollable.more-above {
		box-shadow: var(--vscode-scrollbar-shadow) 0 6px 6px -6px inset
	}
	.output-plaintext .code-bold,
	.output-stream .code-bold,
	.traceback .code-bold {
		font-weight: bold;
	}
	.output-plaintext .code-italic,
	.output-stream .code-italic,
	.traceback .code-italic {
		font-style: italic;
	}
	.output-plaintext .code-strike-through,
	.output-stream .code-strike-through,
	.traceback .code-strike-through {
		text-decoration: line-through;
	}
	.output-plaintext .code-underline,
	.output-stream .code-underline,
	.traceback .code-underline {
		text-decoration: underline;
	}
	#container ul.error-output-actions {
		margin: 0px;
		padding: 6px 0px 0px 6px;
		padding-inline-start: 0px;
	}
	#container .error-output-actions li {
		padding: 0px 4px 0px 4px;
		border-radius: 5px;
		height: 20px;
		display: inline-flex;
		cursor: pointer;
		border: solid 1px var(--vscode-notebook-cellToolbarSeparator);
	}
	#container .error-output-actions li.hover {
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	#container .error-output-actions li:focus-within {
		border-color: var(--theme-input-focus-border-color);
	}
	#container .error-output-actions a:focus {
		outline: 0;
	}
	#container .error-output-actions li a {
		color: var(--vscode-foreground);
		text-decoration: none;
	}
	#container .error-output-header a {
		padding-right: 12px;
	}
	`, document.body.appendChild(r), { renderOutputItem: async (l, o, a) => {
    switch (o.classList.add("remove-padding"), l.mime) {
      case "text/html":
      case "image/svg+xml": {
        if (!i5.workspace.isTrusted) return;
        await Ut(l, o, a, n);
        break;
      }
      case "application/javascript": {
        if (!i5.workspace.isTrusted) return;
        Dt(l, o, a, s);
        break;
      }
      case "image/gif":
      case "image/png":
      case "image/jpeg":
      case "image/git":
        {
          t.get(l.id)?.dispose();
          let u = vt(l, o);
          t.set(l.id, u);
        }
        break;
      case "application/vnd.code.notebook.error":
        {
          t.get(l.id)?.dispose();
          let u = wt(l, o, e, i5.workspace.isTrusted);
          t.set(l.id, u);
        }
        break;
      case "application/vnd.code.notebook.stdout":
      case "application/x.notebook.stdout":
      case "application/x.notebook.stream":
        {
          t.get(l.id)?.dispose();
          let u = h(l, o, false, e);
          t.set(l.id, u);
        }
        break;
      case "application/vnd.code.notebook.stderr":
      case "application/x.notebook.stderr":
        {
          t.get(l.id)?.dispose();
          let u = h(l, o, true, e);
          t.set(l.id, u);
        }
        break;
      case "text/plain":
        {
          t.get(l.id)?.dispose();
          let u = C(l, o, e);
          t.set(l.id, u);
        }
        break;
      default:
        if (l.mime.indexOf("text/") > -1) {
          t.get(l.id)?.dispose();
          let u = C(l, o, e);
          t.set(l.id, u);
        }
        break;
    }
    o.querySelector("div") && (o.querySelector("div").tabIndex = 0);
  }, disposeOutputItem: (l) => {
    l ? t.get(l)?.dispose() : t.forEach((o) => o.dispose());
  }, experimental_registerHtmlRenderingHook: (l) => (n.add(l), { dispose: () => {
    n.delete(l);
  } }), experimental_registerJavaScriptRenderingHook: (l) => (s.add(l), { dispose: () => {
    s.delete(l);
  } }) };
};
export { zt as activate };
