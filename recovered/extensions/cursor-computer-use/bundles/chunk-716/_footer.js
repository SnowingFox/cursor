// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/716.js sha256:96d288223926354946d5f96ab226d901d776ba8204642a2bc887977837880e89
// module: (footer) range:14034..22268
// basis: webpack-container confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
}, o.fromRatio = function(t2, r2) {
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
