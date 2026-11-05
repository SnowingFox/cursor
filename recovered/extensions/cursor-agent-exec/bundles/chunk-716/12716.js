// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/716.js sha256:d21ba777dcf0ba76077fabb9caa57904c41e7129ffe585d1c793b348694629d4
// module: 12716 range:73..14034
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
12716: (t, r, e) => {
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
  }