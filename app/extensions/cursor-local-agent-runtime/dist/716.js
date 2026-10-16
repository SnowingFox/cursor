"use strict";
exports.id = 716, exports.ids = [716], exports.modules = { 12716: (t, r, e) => {
  function n(t2) {
    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
      return typeof t3;
    } : function(t3) {
      return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
    }, n(t2);
  }
  e.d(r, { by: () => $, QH: () => P, SQ: () => j, QQ: () => O });
  var a = /^\s+/, i = /\s+$/;
  function o(t2, r2) {
    if (r2 = r2 || {}, (t2 = t2 || "") instanceof o) return t2;
    if (!(this instanceof o)) return new o(t2, r2);
    var e2 = (function(t3) {
      var r3 = { r: 0, g: 0, b: 0 }, e3 = 1, o2 = null, h2 = null, s2 = null, f2 = false, u2 = false;
      "string" == typeof t3 && (t3 = (function(t4) {
        t4 = t4.replace(a, "").replace(i, "").toLowerCase();
        var r4, e4 = false;
        if (A[t4]) t4 = A[t4], e4 = true;
        else if ("transparent" == t4) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        if (r4 = z.rgb.exec(t4)) return { r: r4[1], g: r4[2], b: r4[3] };
        if (r4 = z.rgba.exec(t4)) return { r: r4[1], g: r4[2], b: r4[3], a: r4[4] };
        if (r4 = z.hsl.exec(t4)) return { h: r4[1], s: r4[2], l: r4[3] };
        if (r4 = z.hsla.exec(t4)) return { h: r4[1], s: r4[2], l: r4[3], a: r4[4] };
        if (r4 = z.hsv.exec(t4)) return { h: r4[1], s: r4[2], v: r4[3] };
        if (r4 = z.hsva.exec(t4)) return { h: r4[1], s: r4[2], v: r4[3], a: r4[4] };
        if (r4 = z.hex8.exec(t4)) return { r: R(r4[1]), g: R(r4[2]), b: R(r4[3]), a: q(r4[4]), format: e4 ? "name" : "hex8" };
        if (r4 = z.hex6.exec(t4)) return { r: R(r4[1]), g: R(r4[2]), b: R(r4[3]), format: e4 ? "name" : "hex" };
        if (r4 = z.hex4.exec(t4)) return { r: R(r4[1] + "" + r4[1]), g: R(r4[2] + "" + r4[2]), b: R(r4[3] + "" + r4[3]), a: q(r4[4] + "" + r4[4]), format: e4 ? "name" : "hex8" };
        if (r4 = z.hex3.exec(t4)) return { r: R(r4[1] + "" + r4[1]), g: R(r4[2] + "" + r4[2]), b: R(r4[3] + "" + r4[3]), format: e4 ? "name" : "hex" };
        return false;
      })(t3));
      "object" == n(t3) && (T(t3.r) && T(t3.g) && T(t3.b) ? (l2 = t3.r, c2 = t3.g, d2 = t3.b, r3 = { r: 255 * S(l2, 255), g: 255 * S(c2, 255), b: 255 * S(d2, 255) }, f2 = true, u2 = "%" === String(t3.r).substr(-1) ? "prgb" : "rgb") : T(t3.h) && T(t3.s) && T(t3.v) ? (o2 = C(t3.s), h2 = C(t3.v), r3 = (function(t4, r4, e4) {
        t4 = 6 * S(t4, 360), r4 = S(r4, 100), e4 = S(e4, 100);
        var n2 = Math.floor(t4), a2 = t4 - n2, i2 = e4 * (1 - r4), o3 = e4 * (1 - a2 * r4), h3 = e4 * (1 - (1 - a2) * r4), s3 = n2 % 6, f3 = [e4, o3, i2, i2, h3, e4][s3], u3 = [h3, e4, e4, o3, i2, i2][s3], l3 = [i2, i2, h3, e4, e4, o3][s3];
        return { r: 255 * f3, g: 255 * u3, b: 255 * l3 };
      })(t3.h, o2, h2), f2 = true, u2 = "hsv") : T(t3.h) && T(t3.s) && T(t3.l) && (o2 = C(t3.s), s2 = C(t3.l), r3 = (function(t4, r4, e4) {
        var n2, a2, i2;
        function o3(t5, r5, e5) {
          return e5 < 0 && (e5 += 1), e5 > 1 && (e5 -= 1), e5 < 1 / 6 ? t5 + 6 * (r5 - t5) * e5 : e5 < 0.5 ? r5 : e5 < 2 / 3 ? t5 + (r5 - t5) * (2 / 3 - e5) * 6 : t5;
        }
        if (t4 = S(t4, 360), r4 = S(r4, 100), e4 = S(e4, 100), 0 === r4) n2 = a2 = i2 = e4;
        else {
          var h3 = e4 < 0.5 ? e4 * (1 + r4) : e4 + r4 - e4 * r4, s3 = 2 * e4 - h3;
          n2 = o3(s3, h3, t4 + 1 / 3), a2 = o3(s3, h3, t4), i2 = o3(s3, h3, t4 - 1 / 3);
        }
        return { r: 255 * n2, g: 255 * a2, b: 255 * i2 };
      })(t3.h, o2, s2), f2 = true, u2 = "hsl"), t3.hasOwnProperty("a") && (e3 = t3.a));
      var l2, c2, d2;
      return e3 = k(e3), { ok: f2, format: t3.format || u2, r: Math.min(255, Math.max(r3.r, 0)), g: Math.min(255, Math.max(r3.g, 0)), b: Math.min(255, Math.max(r3.b, 0)), a: e3 };
    })(t2);
    this._originalInput = t2, this._r = e2.r, this._g = e2.g, this._b = e2.b, this._a = e2.a, this._roundA = Math.round(100 * this._a) / 100, this._format = r2.format || e2.format, this._gradientType = r2.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = e2.ok;
  }
  function h(t2, r2, e2) {
    t2 = S(t2, 255), r2 = S(r2, 255), e2 = S(e2, 255);
    var n2, a2, i2 = Math.max(t2, r2, e2), o2 = Math.min(t2, r2, e2), h2 = (i2 + o2) / 2;
    if (i2 == o2) n2 = a2 = 0;
    else {
      var s2 = i2 - o2;
      switch (a2 = h2 > 0.5 ? s2 / (2 - i2 - o2) : s2 / (i2 + o2), i2) {
        case t2:
          n2 = (r2 - e2) / s2 + (r2 < e2 ? 6 : 0);
          break;
        case r2:
          n2 = (e2 - t2) / s2 + 2;
          break;
        case e2:
          n2 = (t2 - r2) / s2 + 4;
      }
      n2 /= 6;
    }
    return { h: n2, s: a2, l: h2 };
  }
  function s(t2, r2, e2) {
    t2 = S(t2, 255), r2 = S(r2, 255), e2 = S(e2, 255);
    var n2, a2, i2 = Math.max(t2, r2, e2), o2 = Math.min(t2, r2, e2), h2 = i2, s2 = i2 - o2;
    if (a2 = 0 === i2 ? 0 : s2 / i2, i2 == o2) n2 = 0;
    else {
      switch (i2) {
        case t2:
          n2 = (r2 - e2) / s2 + (r2 < e2 ? 6 : 0);
          break;
        case r2:
          n2 = (e2 - t2) / s2 + 2;
          break;
        case e2:
          n2 = (t2 - r2) / s2 + 4;
      }
      n2 /= 6;
    }
    return { h: n2, s: a2, v: h2 };
  }
  function f(t2, r2, e2, n2) {
    var a2 = [F(Math.round(t2).toString(16)), F(Math.round(r2).toString(16)), F(Math.round(e2).toString(16))];
    return n2 && a2[0].charAt(0) == a2[0].charAt(1) && a2[1].charAt(0) == a2[1].charAt(1) && a2[2].charAt(0) == a2[2].charAt(1) ? a2[0].charAt(0) + a2[1].charAt(0) + a2[2].charAt(0) : a2.join("");
  }
  function u(t2, r2, e2, n2) {
    return [F(E(n2)), F(Math.round(t2).toString(16)), F(Math.round(r2).toString(16)), F(Math.round(e2).toString(16))].join("");
  }
  function l(t2, r2) {
    r2 = 0 === r2 ? 0 : r2 || 10;
    var e2 = o(t2).toHsl();
    return e2.s -= r2 / 100, e2.s = H(e2.s), o(e2);
  }
  function c(t2, r2) {
    r2 = 0 === r2 ? 0 : r2 || 10;
    var e2 = o(t2).toHsl();
    return e2.s += r2 / 100, e2.s = H(e2.s), o(e2);
  }
  function d(t2) {
    return o(t2).desaturate(100);
  }
  function g(t2, r2) {
    r2 = 0 === r2 ? 0 : r2 || 10;
    var e2 = o(t2).toHsl();
    return e2.l += r2 / 100, e2.l = H(e2.l), o(e2);
  }
  function b(t2, r2) {
    r2 = 0 === r2 ? 0 : r2 || 10;
    var e2 = o(t2).toRgb();
    return e2.r = Math.max(0, Math.min(255, e2.r - Math.round(-r2 / 100 * 255))), e2.g = Math.max(0, Math.min(255, e2.g - Math.round(-r2 / 100 * 255))), e2.b = Math.max(0, Math.min(255, e2.b - Math.round(-r2 / 100 * 255))), o(e2);
  }
  function m(t2, r2) {
    r2 = 0 === r2 ? 0 : r2 || 10;
    var e2 = o(t2).toHsl();
    return e2.l -= r2 / 100, e2.l = H(e2.l), o(e2);
  }
  function p(t2, r2) {
    var e2 = o(t2).toHsl(), n2 = (e2.h + r2) % 360;
    return e2.h = n2 < 0 ? 360 + n2 : n2, o(e2);
  }
  function _(t2) {
    var r2 = o(t2).toHsl();
    return r2.h = (r2.h + 180) % 360, o(r2);
  }
  function v(t2, r2) {
    if (isNaN(r2) || r2 <= 0) throw new Error("Argument to polyad must be a positive number");
    for (var e2 = o(t2).toHsl(), n2 = [o(t2)], a2 = 360 / r2, i2 = 1; i2 < r2; i2++) n2.push(o({ h: (e2.h + i2 * a2) % 360, s: e2.s, l: e2.l }));
    return n2;
  }
  function M(t2) {
    var r2 = o(t2).toHsl(), e2 = r2.h;
    return [o(t2), o({ h: (e2 + 72) % 360, s: r2.s, l: r2.l }), o({ h: (e2 + 216) % 360, s: r2.s, l: r2.l })];
  }
  function y(t2, r2, e2) {
    r2 = r2 || 6, e2 = e2 || 30;
    var n2 = o(t2).toHsl(), a2 = 360 / e2, i2 = [o(t2)];
    for (n2.h = (n2.h - (a2 * r2 >> 1) + 720) % 360; --r2; ) n2.h = (n2.h + a2) % 360, i2.push(o(n2));
    return i2;
  }
  function x(t2, r2) {
    r2 = r2 || 6;
    for (var e2 = o(t2).toHsv(), n2 = e2.h, a2 = e2.s, i2 = e2.v, h2 = [], s2 = 1 / r2; r2--; ) h2.push(o({ h: n2, s: a2, v: i2 })), i2 = (i2 + s2) % 1;
    return h2;
  }
  o.prototype = { isDark: function() {
    return this.getBrightness() < 128;
  }, isLight: function() {
    return !this.isDark();
  }, isValid: function() {
    return this._ok;
  }, getOriginalInput: function() {
    return this._originalInput;
  }, getFormat: function() {
    return this._format;
  }, getAlpha: function() {
    return this._a;
  }, getBrightness: function() {
    var t2 = this.toRgb();
    return (299 * t2.r + 587 * t2.g + 114 * t2.b) / 1e3;
  }, getLuminance: function() {
    var t2, r2, e2, n2 = this.toRgb();
    return t2 = n2.r / 255, r2 = n2.g / 255, e2 = n2.b / 255, 0.2126 * (t2 <= 0.03928 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4)) + 0.7152 * (r2 <= 0.03928 ? r2 / 12.92 : Math.pow((r2 + 0.055) / 1.055, 2.4)) + 0.0722 * (e2 <= 0.03928 ? e2 / 12.92 : Math.pow((e2 + 0.055) / 1.055, 2.4));
  }, setAlpha: function(t2) {
    return this._a = k(t2), this._roundA = Math.round(100 * this._a) / 100, this;
  }, toHsv: function() {
    var t2 = s(this._r, this._g, this._b);
    return { h: 360 * t2.h, s: t2.s, v: t2.v, a: this._a };
  }, toHsvString: function() {
    var t2 = s(this._r, this._g, this._b), r2 = Math.round(360 * t2.h), e2 = Math.round(100 * t2.s), n2 = Math.round(100 * t2.v);
    return 1 == this._a ? "hsv(" + r2 + ", " + e2 + "%, " + n2 + "%)" : "hsva(" + r2 + ", " + e2 + "%, " + n2 + "%, " + this._roundA + ")";
  }, toHsl: function() {
    var t2 = h(this._r, this._g, this._b);
    return { h: 360 * t2.h, s: t2.s, l: t2.l, a: this._a };
  }, toHslString: function() {
    var t2 = h(this._r, this._g, this._b), r2 = Math.round(360 * t2.h), e2 = Math.round(100 * t2.s), n2 = Math.round(100 * t2.l);
    return 1 == this._a ? "hsl(" + r2 + ", " + e2 + "%, " + n2 + "%)" : "hsla(" + r2 + ", " + e2 + "%, " + n2 + "%, " + this._roundA + ")";
  }, toHex: function(t2) {
    return f(this._r, this._g, this._b, t2);
  }, toHexString: function(t2) {
    return "#" + this.toHex(t2);
  }, toHex8: function(t2) {
    return (function(t3, r2, e2, n2, a2) {
      var i2 = [F(Math.round(t3).toString(16)), F(Math.round(r2).toString(16)), F(Math.round(e2).toString(16)), F(E(n2))];
      if (a2 && i2[0].charAt(0) == i2[0].charAt(1) && i2[1].charAt(0) == i2[1].charAt(1) && i2[2].charAt(0) == i2[2].charAt(1) && i2[3].charAt(0) == i2[3].charAt(1)) return i2[0].charAt(0) + i2[1].charAt(0) + i2[2].charAt(0) + i2[3].charAt(0);
      return i2.join("");
    })(this._r, this._g, this._b, this._a, t2);
  }, toHex8String: function(t2) {
    return "#" + this.toHex8(t2);
  }, toRgb: function() {
    return { r: Math.round(this._r), g: Math.round(this._g), b: Math.round(this._b), a: this._a };
  }, toRgbString: function() {
    return 1 == this._a ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  }, toPercentageRgb: function() {
    return { r: Math.round(100 * S(this._r, 255)) + "%", g: Math.round(100 * S(this._g, 255)) + "%", b: Math.round(100 * S(this._b, 255)) + "%", a: this._a };
  }, toPercentageRgbString: function() {
    return 1 == this._a ? "rgb(" + Math.round(100 * S(this._r, 255)) + "%, " + Math.round(100 * S(this._g, 255)) + "%, " + Math.round(100 * S(this._b, 255)) + "%)" : "rgba(" + Math.round(100 * S(this._r, 255)) + "%, " + Math.round(100 * S(this._g, 255)) + "%, " + Math.round(100 * S(this._b, 255)) + "%, " + this._roundA + ")";
  }, toName: function() {
    return 0 === this._a ? "transparent" : !(this._a < 1) && (w[f(this._r, this._g, this._b, true)] || false);
  }, toFilter: function(t2) {
    var r2 = "#" + u(this._r, this._g, this._b, this._a), e2 = r2, n2 = this._gradientType ? "GradientType = 1, " : "";
    if (t2) {
      var a2 = o(t2);
      e2 = "#" + u(a2._r, a2._g, a2._b, a2._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + n2 + "startColorstr=" + r2 + ",endColorstr=" + e2 + ")";
  }, toString: function(t2) {
    var r2 = !!t2;
    t2 = t2 || this._format;
    var e2 = false, n2 = this._a < 1 && this._a >= 0;
    return r2 || !n2 || "hex" !== t2 && "hex6" !== t2 && "hex3" !== t2 && "hex4" !== t2 && "hex8" !== t2 && "name" !== t2 ? ("rgb" === t2 && (e2 = this.toRgbString()), "prgb" === t2 && (e2 = this.toPercentageRgbString()), "hex" !== t2 && "hex6" !== t2 || (e2 = this.toHexString()), "hex3" === t2 && (e2 = this.toHexString(true)), "hex4" === t2 && (e2 = this.toHex8String(true)), "hex8" === t2 && (e2 = this.toHex8String()), "name" === t2 && (e2 = this.toName()), "hsl" === t2 && (e2 = this.toHslString()), "hsv" === t2 && (e2 = this.toHsvString()), e2 || this.toHexString()) : "name" === t2 && 0 === this._a ? this.toName() : this.toRgbString();
  }, clone: function() {
    return o(this.toString());
  }, _applyModification: function(t2, r2) {
    var e2 = t2.apply(null, [this].concat([].slice.call(r2)));
    return this._r = e2._r, this._g = e2._g, this._b = e2._b, this.setAlpha(e2._a), this;
  }, lighten: function() {
    return this._applyModification(g, arguments);
  }, brighten: function() {
    return this._applyModification(b, arguments);
  }, darken: function() {
    return this._applyModification(m, arguments);
  }, desaturate: function() {
    return this._applyModification(l, arguments);
  }, saturate: function() {
    return this._applyModification(c, arguments);
  }, greyscale: function() {
    return this._applyModification(d, arguments);
  }, spin: function() {
    return this._applyModification(p, arguments);
  }, _applyCombination: function(t2, r2) {
    return t2.apply(null, [this].concat([].slice.call(r2)));
  }, analogous: function() {
    return this._applyCombination(y, arguments);
  }, complement: function() {
    return this._applyCombination(_, arguments);
  }, monochromatic: function() {
    return this._applyCombination(x, arguments);
  }, splitcomplement: function() {
    return this._applyCombination(M, arguments);
  }, triad: function() {
    return this._applyCombination(v, [3]);
  }, tetrad: function() {
    return this._applyCombination(v, [4]);
  } }, o.fromRatio = function(t2, r2) {
    if ("object" == n(t2)) {
      var e2 = {};
      for (var a2 in t2) t2.hasOwnProperty(a2) && (e2[a2] = "a" === a2 ? t2[a2] : C(t2[a2]));
      t2 = e2;
    }
    return o(t2, r2);
  }, o.equals = function(t2, r2) {
    return !(!t2 || !r2) && o(t2).toRgbString() == o(r2).toRgbString();
  }, o.random = function() {
    return o.fromRatio({ r: Math.random(), g: Math.random(), b: Math.random() });
  }, o.mix = function(t2, r2, e2) {
    e2 = 0 === e2 ? 0 : e2 || 50;
    var n2 = o(t2).toRgb(), a2 = o(r2).toRgb(), i2 = e2 / 100;
    return o({ r: (a2.r - n2.r) * i2 + n2.r, g: (a2.g - n2.g) * i2 + n2.g, b: (a2.b - n2.b) * i2 + n2.b, a: (a2.a - n2.a) * i2 + n2.a });
  }, o.readability = function(t2, r2) {
    var e2 = o(t2), n2 = o(r2);
    return (Math.max(e2.getLuminance(), n2.getLuminance()) + 0.05) / (Math.min(e2.getLuminance(), n2.getLuminance()) + 0.05);
  }, o.isReadable = function(t2, r2, e2) {
    var n2, a2, i2 = o.readability(t2, r2);
    switch (a2 = false, (n2 = (function(t3) {
      var r3, e3;
      r3 = ((t3 = t3 || { level: "AA", size: "small" }).level || "AA").toUpperCase(), e3 = (t3.size || "small").toLowerCase(), "AA" !== r3 && "AAA" !== r3 && (r3 = "AA");
      "small" !== e3 && "large" !== e3 && (e3 = "small");
      return { level: r3, size: e3 };
    })(e2)).level + n2.size) {
      case "AAsmall":
      case "AAAlarge":
        a2 = i2 >= 4.5;
        break;
      case "AAlarge":
        a2 = i2 >= 3;
        break;
      case "AAAsmall":
        a2 = i2 >= 7;
    }
    return a2;
  }, o.mostReadable = function(t2, r2, e2) {
    var n2, a2, i2, h2, s2 = null, f2 = 0;
    a2 = (e2 = e2 || {}).includeFallbackColors, i2 = e2.level, h2 = e2.size;
    for (var u2 = 0; u2 < r2.length; u2++) (n2 = o.readability(t2, r2[u2])) > f2 && (f2 = n2, s2 = o(r2[u2]));
    return o.isReadable(t2, s2, { level: i2, size: h2 }) || !a2 ? s2 : (e2.includeFallbackColors = false, o.mostReadable(t2, ["#fff", "#000"], e2));
  };
  var A = o.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" }, w = o.hexNames = (function(t2) {
    var r2 = {};
    for (var e2 in t2) t2.hasOwnProperty(e2) && (r2[t2[e2]] = e2);
    return r2;
  })(A);
  function k(t2) {
    return t2 = parseFloat(t2), (isNaN(t2) || t2 < 0 || t2 > 1) && (t2 = 1), t2;
  }
  function S(t2, r2) {
    (function(t3) {
      return "string" == typeof t3 && -1 != t3.indexOf(".") && 1 === parseFloat(t3);
    })(t2) && (t2 = "100%");
    var e2 = (function(t3) {
      return "string" == typeof t3 && -1 != t3.indexOf("%");
    })(t2);
    return t2 = Math.min(r2, Math.max(0, parseFloat(t2))), e2 && (t2 = parseInt(t2 * r2, 10) / 100), Math.abs(t2 - r2) < 1e-6 ? 1 : t2 % r2 / parseFloat(r2);
  }
  function H(t2) {
    return Math.min(1, Math.max(0, t2));
  }
  function R(t2) {
    return parseInt(t2, 16);
  }
  function F(t2) {
    return 1 == t2.length ? "0" + t2 : "" + t2;
  }
  function C(t2) {
    return t2 <= 1 && (t2 = 100 * t2 + "%"), t2;
  }
  function E(t2) {
    return Math.round(255 * parseFloat(t2)).toString(16);
  }
  function q(t2) {
    return R(t2) / 255;
  }
  var N, I, L, z = (I = "[\\s|\\(]+(" + (N = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + N + ")[,|\\s]+(" + N + ")\\s*\\)?", L = "[\\s|\\(]+(" + N + ")[,|\\s]+(" + N + ")[,|\\s]+(" + N + ")[,|\\s]+(" + N + ")\\s*\\)?", { CSS_UNIT: new RegExp(N), rgb: new RegExp("rgb" + I), rgba: new RegExp("rgba" + L), hsl: new RegExp("hsl" + I), hsla: new RegExp("hsla" + L), hsv: new RegExp("hsv" + I), hsva: new RegExp("hsva" + L), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ });
  function T(t2) {
    return !!z.CSS_UNIT.exec(t2);
  }
  function j(t2, r2, e2, n2, a2, i2) {
    let o2, h2, s2, f2, u2;
    if ("function" == typeof r2) u2 = r2, o2 = 0, h2 = 0, s2 = t2.bitmap.width, f2 = t2.bitmap.height;
    else {
      if (o2 = r2, "number" != typeof e2) throw new Error("y must be a number");
      if (h2 = e2, "number" != typeof n2) throw new Error("w must be a number");
      if (s2 = n2, "number" != typeof a2) throw new Error("h must be a number");
      if (f2 = a2, "function" != typeof i2) throw new Error("cb must be a function");
      u2 = i2;
    }
    o2 = Math.round(o2), h2 = Math.round(h2), s2 = Math.round(s2), f2 = Math.round(f2);
    const l2 = u2.bind(t2);
    for (let r3 = h2; r3 < h2 + f2; r3++) for (let e3 = o2; e3 < o2 + s2; e3++) {
      l2(e3, r3, t2.bitmap.width * r3 + e3 << 2);
    }
    return t2;
  }
  function* O(t2, r2, e2, n2, a2) {
    r2 = Math.round(r2), e2 = Math.round(e2), n2 = Math.round(n2), a2 = Math.round(a2);
    for (let i2 = e2; i2 < e2 + a2; i2++) for (let e3 = r2; e3 < r2 + n2; e3++) {
      const r3 = t2.bitmap.width * i2 + e3 << 2;
      yield { x: e3, y: i2, idx: r3, image: t2 };
    }
  }
  function P(t2) {
    return t2 = Math.max(t2, 0), t2 = Math.min(t2, 255);
  }
  function $(t2) {
    return "number" == typeof t2 ? t2 : parseInt(o(t2).toHex8(), 16);
  }
} };
