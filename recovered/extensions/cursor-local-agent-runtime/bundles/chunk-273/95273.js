// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/273.js sha256:918321c092763b0f5509b45d1560ac236164a596e0ab5a603460d95abe18903b
// module: 95273 range:81474..96854
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
95273: (e, t, i) => {
  "use strict";
  i.r(t), i.d(t, { BlendMode: () => d, HorizontalAlign: () => c, VerticalAlign: () => u, composite: () => P, createJimp: () => M, getExifOrientation: () => F });
  var a = {};
  i.r(a), i.d(a, { add: () => w, darken: () => y, difference: () => T, dstOver: () => x, exclusion: () => k, hardLight: () => E, lighten: () => I, multiply: () => b, names: () => B, overlay: () => S, screen: () => v, srcOver: () => g });
  var n, r = i(81958);
  !(function(e2) {
    e2[e2.EXTEND = 1] = "EXTEND", e2[e2.WRAP = 2] = "WRAP", e2[e2.CROP = 3] = "CROP";
  })(n || (n = {}));
  r.Ik({ bitmap: r.Ik({ data: r.KC([r.Nl(Buffer), r.Nl(Uint8Array)]), width: r.ai(), height: r.ai() }) });
  var o = i(12716), s = i(87626);
  function f(e2, t2) {
    return e2.then(function(e3) {
      return [null, e3];
    }).catch(function(e3) {
      return t2 && Object.assign(e3, t2), [e3, void 0];
    });
  }
  var p = i(79896);
  const m = p.promises.readFile, l = p.promises.writeFile;
  var c, u, d, h = i(51060);
  function g(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a;
    return { r: (e2.r * e2.a + t2.r * t2.a * (1 - e2.a)) / a2, g: (e2.g * e2.a + t2.g * t2.a * (1 - e2.a)) / a2, b: (e2.b * e2.a + t2.b * t2.a * (1 - e2.a)) / a2, a: a2 };
  }
  function x(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a;
    return { r: (t2.r * t2.a + e2.r * e2.a * (1 - t2.a)) / a2, g: (t2.g * t2.a + e2.g * e2.a * (1 - t2.a)) / a2, b: (t2.b * t2.a + e2.b * e2.a * (1 - t2.a)) / a2, a: a2 };
  }
  function b(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (n2 * s2 + n2 * (1 - t2.a) + s2 * (1 - e2.a)) / a2, g: (r2 * f2 + r2 * (1 - t2.a) + f2 * (1 - e2.a)) / a2, b: (o2 * p2 + o2 * (1 - t2.a) + p2 * (1 - e2.a)) / a2, a: a2 };
  }
  function w(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a;
    return { r: (n2 + t2.r * t2.a) / a2, g: (r2 + t2.g * t2.a) / a2, b: (o2 + t2.b * t2.a) / a2, a: a2 };
  }
  function v(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (n2 * t2.a + s2 * e2.a - n2 * s2 + n2 * (1 - t2.a) + s2 * (1 - e2.a)) / a2, g: (r2 * t2.a + f2 * e2.a - r2 * f2 + r2 * (1 - t2.a) + f2 * (1 - e2.a)) / a2, b: (o2 * t2.a + p2 * e2.a - o2 * p2 + o2 * (1 - t2.a) + p2 * (1 - e2.a)) / a2, a: a2 };
  }
  function S(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (2 * s2 <= t2.a ? 2 * n2 * s2 + n2 * (1 - t2.a) + s2 * (1 - e2.a) : n2 * (1 + t2.a) + s2 * (1 + e2.a) - 2 * s2 * n2 - t2.a * e2.a) / a2, g: (2 * f2 <= t2.a ? 2 * r2 * f2 + r2 * (1 - t2.a) + f2 * (1 - e2.a) : r2 * (1 + t2.a) + f2 * (1 + e2.a) - 2 * f2 * r2 - t2.a * e2.a) / a2, b: (2 * p2 <= t2.a ? 2 * o2 * p2 + o2 * (1 - t2.a) + p2 * (1 - e2.a) : o2 * (1 + t2.a) + p2 * (1 + e2.a) - 2 * p2 * o2 - t2.a * e2.a) / a2, a: a2 };
  }
  function y(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (Math.min(n2 * t2.a, s2 * e2.a) + n2 * (1 - t2.a) + s2 * (1 - e2.a)) / a2, g: (Math.min(r2 * t2.a, f2 * e2.a) + r2 * (1 - t2.a) + f2 * (1 - e2.a)) / a2, b: (Math.min(o2 * t2.a, p2 * e2.a) + o2 * (1 - t2.a) + p2 * (1 - e2.a)) / a2, a: a2 };
  }
  function I(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (Math.max(n2 * t2.a, s2 * e2.a) + n2 * (1 - t2.a) + s2 * (1 - e2.a)) / a2, g: (Math.max(r2 * t2.a, f2 * e2.a) + r2 * (1 - t2.a) + f2 * (1 - e2.a)) / a2, b: (Math.max(o2 * t2.a, p2 * e2.a) + o2 * (1 - t2.a) + p2 * (1 - e2.a)) / a2, a: a2 };
  }
  function E(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (2 * n2 <= e2.a ? 2 * n2 * s2 + n2 * (1 - t2.a) + s2 * (1 - e2.a) : n2 * (1 + t2.a) + s2 * (1 + e2.a) - 2 * s2 * n2 - t2.a * e2.a) / a2, g: (2 * r2 <= e2.a ? 2 * r2 * f2 + r2 * (1 - t2.a) + f2 * (1 - e2.a) : r2 * (1 + t2.a) + f2 * (1 + e2.a) - 2 * f2 * r2 - t2.a * e2.a) / a2, b: (2 * o2 <= e2.a ? 2 * o2 * p2 + o2 * (1 - t2.a) + p2 * (1 - e2.a) : o2 * (1 + t2.a) + p2 * (1 + e2.a) - 2 * p2 * o2 - t2.a * e2.a) / a2, a: a2 };
  }
  function T(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (n2 + s2 - 2 * Math.min(n2 * t2.a, s2 * e2.a)) / a2, g: (r2 + f2 - 2 * Math.min(r2 * t2.a, f2 * e2.a)) / a2, b: (o2 + p2 - 2 * Math.min(o2 * t2.a, p2 * e2.a)) / a2, a: a2 };
  }
  function k(e2, t2, i2 = 1) {
    e2.a *= i2;
    const a2 = t2.a + e2.a - t2.a * e2.a, n2 = e2.r * e2.a, r2 = e2.g * e2.a, o2 = e2.b * e2.a, s2 = t2.r * t2.a, f2 = t2.g * t2.a, p2 = t2.b * t2.a;
    return { r: (n2 * t2.a + s2 * e2.a - 2 * n2 * s2 + n2 * (1 - t2.a) + s2 * (1 - e2.a)) / a2, g: (r2 * t2.a + f2 * e2.a - 2 * r2 * f2 + r2 * (1 - t2.a) + f2 * (1 - e2.a)) / a2, b: (o2 * t2.a + p2 * e2.a - 2 * o2 * p2 + o2 * (1 - t2.a) + p2 * (1 - e2.a)) / a2, a: a2 };
  }
  !(function(e2) {
    e2[e2.LEFT = 1] = "LEFT", e2[e2.CENTER = 2] = "CENTER", e2[e2.RIGHT = 4] = "RIGHT";
  })(c || (c = {})), (function(e2) {
    e2[e2.TOP = 8] = "TOP", e2[e2.MIDDLE = 16] = "MIDDLE", e2[e2.BOTTOM = 32] = "BOTTOM";
  })(u || (u = {})), (function(e2) {
    e2.SRC_OVER = "srcOver", e2.DST_OVER = "dstOver", e2.MULTIPLY = "multiply", e2.ADD = "add", e2.SCREEN = "screen", e2.OVERLAY = "overlay", e2.DARKEN = "darken", e2.LIGHTEN = "lighten", e2.HARD_LIGHT = "hardLight", e2.DIFFERENCE = "difference", e2.EXCLUSION = "exclusion";
  })(d || (d = {}));
  const B = [g, x, b, w, v, S, y, I, E, T, k];
  function P(e2, t2, i2 = 0, r2 = 0, s2 = {}) {
    if (!(t2 instanceof e2.constructor)) throw new Error("The source must be a Jimp image");
    if ("number" != typeof i2 || "number" != typeof r2) throw new Error("x and y must be numbers");
    const { mode: f2 = d.SRC_OVER } = s2;
    let { opacitySource: p2 = 1, opacityDest: m2 = 1 } = s2;
    ("number" != typeof p2 || p2 < 0 || p2 > 1) && (p2 = 1), ("number" != typeof m2 || m2 < 0 || m2 > 1) && (m2 = 1);
    const l2 = a[f2];
    return i2 = Math.round(i2), r2 = Math.round(r2), 1 !== m2 && e2.scan((t3, i3, a2) => {
      const n2 = e2.bitmap.data[a2 + 3] * m2;
      e2.bitmap.data[a2 + 3] = n2;
    }), t2.scan((a2, s3, f3) => {
      const m3 = e2.getPixelIndex(i2 + a2, r2 + s3, n.CROP);
      if (-1 === m3) return;
      const c2 = l2({ r: t2.bitmap.data[f3 + 0] / 255, g: t2.bitmap.data[f3 + 1] / 255, b: t2.bitmap.data[f3 + 2] / 255, a: t2.bitmap.data[f3 + 3] / 255 }, { r: e2.bitmap.data[m3 + 0] / 255, g: e2.bitmap.data[m3 + 1] / 255, b: e2.bitmap.data[m3 + 2] / 255, a: e2.bitmap.data[m3 + 3] / 255 }, p2);
      e2.bitmap.data[m3 + 0] = (0, o.QH)(255 * c2.r), e2.bitmap.data[m3 + 1] = (0, o.QH)(255 * c2.g), e2.bitmap.data[m3 + 2] = (0, o.QH)(255 * c2.b), e2.bitmap.data[m3 + 3] = (0, o.QH)(255 * c2.a);
    }), e2;
  }
  var D = i(15983);
  function F(e2) {
    const t2 = e2._exif;
    return t2 && t2.tags && t2.tags.Orientation || 1;
  }
  function O(e2) {
    if (F(e2) < 2) return;
    const t2 = (function(e3) {
      const t3 = e3.bitmap.width, i3 = e3.bitmap.height;
      switch (F(e3)) {
        case 1:
        default:
          return null;
        case 2:
          return function(e4, i4) {
            return [t3 - e4 - 1, i4];
          };
        case 3:
          return function(e4, a3) {
            return [t3 - e4 - 1, i3 - a3 - 1];
          };
        case 4:
          return function(e4, t4) {
            return [e4, i3 - t4 - 1];
          };
        case 5:
          return function(e4, t4) {
            return [t4, e4];
          };
        case 6:
          return function(e4, t4) {
            return [t4, i3 - e4 - 1];
          };
        case 7:
          return function(e4, a3) {
            return [t3 - a3 - 1, i3 - e4 - 1];
          };
        case 8:
          return function(e4, i4) {
            return [t3 - i4 - 1, e4];
          };
      }
    })(e2), i2 = F(e2) > 4, a2 = i2 ? e2.bitmap.height : e2.bitmap.width, n2 = i2 ? e2.bitmap.width : e2.bitmap.height;
    t2 && (function(e3, t3, i3, a3) {
      const n3 = e3.bitmap.data, r2 = e3.bitmap.width, o2 = Buffer.alloc(n3.length);
      for (let e4 = 0; e4 < t3; e4++) for (let s2 = 0; s2 < i3; s2++) {
        const [i4, f2] = a3(e4, s2), p2 = t3 * s2 + e4 << 2, m2 = r2 * f2 + i4 << 2, l2 = n3.readUInt32BE(m2);
        o2.writeUInt32BE(l2, p2);
      }
      e3.bitmap.data = o2, e3.bitmap.width = t3, e3.bitmap.height = i3, e3._exif.tags.Orientation = 1;
    })(e2, a2, n2, t2);
  }
  const L = { data: Buffer.alloc(0), width: 0, height: 0 };
  function C(e2) {
    const t2 = Buffer.alloc(e2.byteLength), i2 = new Uint8Array(e2);
    for (let e3 = 0; e3 < t2.length; ++e3) t2[e3] = i2[e3];
    return t2;
  }
  function M({ plugins: e2, formats: t2 } = {}) {
    const i2 = e2 || [], a2 = (t2 || []).map((e3) => e3()), r2 = class {
      bitmap = L;
      background = 0;
      formats = [];
      mime;
      constructor(e3 = L) {
        if (this.formats = a2, "data" in e3) this.bitmap = e3;
        else if (this.bitmap = { data: Buffer.alloc(e3.width * e3.height * 4), width: e3.width, height: e3.height }, e3.color) {
          this.background = "string" == typeof e3.color ? (0, o.by)(e3.color) : e3.color;
          for (let e4 = 0; e4 < this.bitmap.data.length; e4 += 4) this.bitmap.data.writeUInt32BE(this.background, e4);
        }
        for (const e4 of i2) for (const t3 in e4) this[t3] = (...i3) => {
          const a3 = e4[t3]?.(this, ...i3);
          return "object" == typeof a3 && "bitmap" in a3 ? (this.bitmap = a3.bitmap, this) : a3;
        };
      }
      static async read(e3, t3) {
        if (Buffer.isBuffer(e3) || e3 instanceof ArrayBuffer) return this.fromBuffer(e3);
        if ((0, p.existsSync)(e3)) return this.fromBuffer(await m(e3));
        const [i3, a3] = await f(fetch(e3));
        if (i3) throw new Error(`Could not load Buffer from URL: ${e3}`);
        if (!a3.ok) throw new Error(`HTTP Status ${a3.status} for url ${e3}`);
        const [n2, r3] = await f(a3.arrayBuffer());
        if (n2) throw new Error(`Could not load Buffer from ${e3}`);
        const o2 = C(r3);
        return this.fromBuffer(o2, t3);
      }
      static fromBitmap(e3) {
        let t3;
        if (e3.data instanceof Buffer && (t3 = Buffer.from(e3.data)), (e3.data instanceof Uint8Array || e3.data instanceof Uint8ClampedArray) && (t3 = Buffer.from(e3.data.buffer)), Array.isArray(e3.data) && (t3 = Buffer.concat(e3.data.map((e4) => Buffer.from(e4.toString(16).padStart(8, "0"), "hex")))), !t3) throw new Error("data must be a Buffer");
        if ("number" != typeof e3.height || "number" != typeof e3.width) throw new Error("bitmap must have width and height");
        return new r2({ height: e3.height, width: e3.width, data: t3 });
      }
      static async fromBuffer(e3, t3) {
        const i3 = e3 instanceof ArrayBuffer ? C(e3) : e3, n2 = await s.fromBuffer(i3);
        if (!n2 || !n2.mime) throw new Error("Could not find MIME for Buffer");
        const o2 = a2.find((e4) => e4.mime === n2.mime);
        if (!o2 || !o2.decode) throw new Error(`Mime type ${n2.mime} does not support decoding`);
        const f2 = new r2(await o2.decode(i3, t3?.[o2.mime]));
        return f2.mime = n2.mime, (async function(e4, t4) {
          try {
            e4._exif = D.create(t4).parse(), O(e4);
          } catch {
          }
        })(f2, i3), f2;
      }
      inspect() {
        return "<Jimp " + (this.bitmap === L ? "pending..." : this.bitmap.width + "x" + this.bitmap.height) + ">";
      }
      toString() {
        return "[object Jimp]";
      }
      get width() {
        return this.bitmap.width;
      }
      get height() {
        return this.bitmap.height;
      }
      async getBuffer(e3, t3) {
        const i3 = this.formats.find((t4) => t4.mime === e3);
        if (!i3 || !i3.encode) throw new Error(`Unsupported MIME type: ${e3}`);
        let a3;
        return i3.hasAlpha ? a3 = this : (a3 = new r2({ width: this.bitmap.width, height: this.bitmap.height, color: this.background }), P(a3, this)), i3.encode(a3.bitmap, t3);
      }
      async getBase64(e3, t3) {
        return "data:" + e3 + ";base64," + (await this.getBuffer(e3, t3)).toString("base64");
      }
      async write(e3, t3) {
        const i3 = h.getType(e3);
        await l(e3, await this.getBuffer(i3, t3));
      }
      clone() {
        return new r2({ ...this.bitmap, data: Buffer.from(this.bitmap.data) });
      }
      getPixelIndex(e3, t3, i3) {
        let a3, r3;
        if (i3 || (i3 = n.EXTEND), "number" != typeof e3 || "number" != typeof t3) throw new Error("x and y must be numbers");
        a3 = e3 = Math.round(e3), r3 = t3 = Math.round(t3), i3 === n.EXTEND && (e3 < 0 && (a3 = 0), e3 >= this.bitmap.width && (a3 = this.bitmap.width - 1), t3 < 0 && (r3 = 0), t3 >= this.bitmap.height && (r3 = this.bitmap.height - 1)), i3 === n.WRAP && (e3 < 0 && (a3 = this.bitmap.width + e3), e3 >= this.bitmap.width && (a3 = e3 % this.bitmap.width), t3 < 0 && (r3 = this.bitmap.height + t3), t3 >= this.bitmap.height && (r3 = t3 % this.bitmap.height));
        let o2 = this.bitmap.width * r3 + a3 << 2;
        return (a3 < 0 || a3 >= this.bitmap.width) && (o2 = -1), (r3 < 0 || r3 >= this.bitmap.height) && (o2 = -1), o2;
      }
      getPixelColor(e3, t3) {
        if ("number" != typeof e3 || "number" != typeof t3) throw new Error("x and y must be numbers");
        const i3 = this.getPixelIndex(e3, t3);
        return this.bitmap.data.readUInt32BE(i3);
      }
      setPixelColor(e3, t3, i3) {
        if ("number" != typeof e3 || "number" != typeof t3 || "number" != typeof i3) throw new Error("hex, x and y must be numbers");
        const a3 = this.getPixelIndex(t3, i3);
        return this.bitmap.data.writeUInt32BE(e3, a3), this;
      }
      hasAlpha() {
        const { width: e3, height: t3, data: i3 } = this.bitmap, a3 = e3 * t3 << 2;
        for (let e4 = 3; e4 < a3; e4 += 4) if (255 !== i3[e4]) return true;
        return false;
      }
      composite(e3, t3 = 0, i3 = 0, a3 = {}) {
        return P(this, e3, t3, i3, a3);
      }
      scan(e3, t3, i3, a3, n2) {
        return (0, o.SQ)(this, e3, t3, i3, a3, n2);
      }
      scanIterator(e3 = 0, t3 = 0, i3 = this.bitmap.width, a3 = this.bitmap.height) {
        if ("number" != typeof e3 || "number" != typeof t3) throw new Error("x and y must be numbers");
        if ("number" != typeof i3 || "number" != typeof a3) throw new Error("w and h must be numbers");
        return (0, o.QQ)(this, e3, t3, i3, a3);
      }
    };
    return r2;
  }
}