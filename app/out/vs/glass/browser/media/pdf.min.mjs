const t = !("object" != typeof process || process + "" != "[object process]" || process.versions.nw || process.versions.electron && process.type && "browser" !== process.type), e = [1e-3, 0, 0, 1e-3, 0, 0], i = 1.35, s = 1, n = 2, r = 4, a = 16, o = 32, l = 64, h = 128, d = 256, c = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 }, u = "pdfjs_internal_editor_", p = { DISABLE: -1, NONE: 0, FREETEXT: 3, HIGHLIGHT: 9, STAMP: 13, INK: 15, POPUP: 16, SIGNATURE: 101, COMMENT: 102 }, g = { RESIZE: 1, CREATE: 2, FREETEXT_SIZE: 11, FREETEXT_COLOR: 12, FREETEXT_OPACITY: 13, INK_COLOR: 21, INK_THICKNESS: 22, INK_OPACITY: 23, HIGHLIGHT_COLOR: 31, HIGHLIGHT_THICKNESS: 32, HIGHLIGHT_FREE: 33, HIGHLIGHT_SHOW_ALL: 34, DRAW_STEP: 41 }, m = { PRINT: 4, MODIFY_CONTENTS: 8, COPY: 16, MODIFY_ANNOTATIONS: 32, FILL_INTERACTIVE_FORMS: 256, COPY_FOR_ACCESSIBILITY: 512, ASSEMBLE: 1024, PRINT_HIGH_QUALITY: 2048 }, f = 0, b = 1, w = 2, y = 3, A = 3, v = 4, x = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 }, E = { TEXT: 1, LINK: 2, FREETEXT: 3, LINE: 4, SQUARE: 5, CIRCLE: 6, POLYGON: 7, POLYLINE: 8, HIGHLIGHT: 9, UNDERLINE: 10, SQUIGGLY: 11, STRIKEOUT: 12, STAMP: 13, CARET: 14, INK: 15, POPUP: 16, FILEATTACHMENT: 17, SOUND: 18, MOVIE: 19, WIDGET: 20, SCREEN: 21, PRINTERMARK: 22, TRAPNET: 23, WATERMARK: 24, THREED: 25, REDACT: 26 }, C = 1, _ = 2, S = 3, T = 4, D = 5, M = { ERRORS: 0, WARNINGS: 1, INFOS: 5 }, k = { dependency: 1, setLineWidth: 2, setLineCap: 3, setLineJoin: 4, setMiterLimit: 5, setDash: 6, setRenderingIntent: 7, setFlatness: 8, setGState: 9, save: 10, restore: 11, transform: 12, moveTo: 13, lineTo: 14, curveTo: 15, curveTo2: 16, curveTo3: 17, closePath: 18, rectangle: 19, stroke: 20, closeStroke: 21, fill: 22, eoFill: 23, fillStroke: 24, eoFillStroke: 25, closeFillStroke: 26, closeEOFillStroke: 27, endPath: 28, clip: 29, eoClip: 30, beginText: 31, endText: 32, setCharSpacing: 33, setWordSpacing: 34, setHScale: 35, setLeading: 36, setFont: 37, setTextRenderingMode: 38, setTextRise: 39, moveText: 40, setLeadingMoveText: 41, setTextMatrix: 42, nextLine: 43, showText: 44, showSpacedText: 45, nextLineShowText: 46, nextLineSetSpacingShowText: 47, setCharWidth: 48, setCharWidthAndBounds: 49, setStrokeColorSpace: 50, setFillColorSpace: 51, setStrokeColor: 52, setStrokeColorN: 53, setFillColor: 54, setFillColorN: 55, setStrokeGray: 56, setFillGray: 57, setStrokeRGBColor: 58, setFillRGBColor: 59, setStrokeCMYKColor: 60, setFillCMYKColor: 61, shadingFill: 62, beginInlineImage: 63, beginImageData: 64, endInlineImage: 65, paintXObject: 66, markPoint: 67, markPointProps: 68, beginMarkedContent: 69, beginMarkedContentProps: 70, endMarkedContent: 71, beginCompat: 72, endCompat: 73, paintFormXObjectBegin: 74, paintFormXObjectEnd: 75, beginGroup: 76, endGroup: 77, beginAnnotation: 80, endAnnotation: 81, paintImageMaskXObject: 83, paintImageMaskXObjectGroup: 84, paintImageXObject: 85, paintInlineImageXObject: 86, paintInlineImageXObjectGroup: 87, paintImageXObjectRepeat: 88, paintImageMaskXObjectRepeat: 89, paintSolidColorImageMask: 90, constructPath: 91, setStrokeTransparent: 92, setFillTransparent: 93, rawFillPath: 94 }, P = 0, I = 1, F = 2, R = 3, L = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
let B = M.WARNINGS;
function setVerbosityLevel(t2) {
  Number.isInteger(t2) && (B = t2);
}
function getVerbosityLevel() {
  return B;
}
function info(t2) {
  B >= M.INFOS && console.info(`Info: ${t2}`);
}
function warn(t2) {
  B >= M.WARNINGS && console.warn(`Warning: ${t2}`);
}
function unreachable(t2) {
  throw new Error(t2);
}
function assert(t2, e2) {
  t2 || unreachable(e2);
}
function createValidAbsoluteUrl(t2, e2 = null, i2 = null) {
  if (!t2) return null;
  if (i2 && "string" == typeof t2) {
    if (i2.addDefaultProtocol && t2.startsWith("www.")) {
      const e3 = t2.match(/\./g);
      e3?.length >= 2 && (t2 = `http://${t2}`);
    }
    if (i2.tryConvertEncoding) try {
      t2 = (function stringToUTF8String(t3) {
        return decodeURIComponent(escape(t3));
      })(t2);
    } catch {
    }
  }
  const s2 = e2 ? URL.parse(t2, e2) : URL.parse(t2);
  return (function _isValidProtocol(t3) {
    switch (t3?.protocol) {
      case "http:":
      case "https:":
      case "ftp:":
      case "mailto:":
      case "tel:":
        return true;
      default:
        return false;
    }
  })(s2) ? s2 : null;
}
function updateUrlHash(t2, e2, i2 = false) {
  const s2 = URL.parse(t2);
  if (s2) {
    s2.hash = e2;
    return s2.href;
  }
  return i2 && createValidAbsoluteUrl(t2, "http://example.com") ? t2.split("#", 1)[0] + (e2 ? `#${e2}` : "") : "";
}
function shadow(t2, e2, i2, s2 = false) {
  Object.defineProperty(t2, e2, { value: i2, enumerable: !s2, configurable: true, writable: false });
  return i2;
}
const O = (function BaseExceptionClosure() {
  function BaseException(t2, e2) {
    this.message = t2;
    this.name = e2;
  }
  BaseException.prototype = new Error();
  BaseException.constructor = BaseException;
  return BaseException;
})();
class PasswordException extends O {
  constructor(t2, e2) {
    super(t2, "PasswordException");
    this.code = e2;
  }
}
class UnknownErrorException extends O {
  constructor(t2, e2) {
    super(t2, "UnknownErrorException");
    this.details = e2;
  }
}
class InvalidPDFException extends O {
  constructor(t2) {
    super(t2, "InvalidPDFException");
  }
}
class ResponseException extends O {
  constructor(t2, e2, i2) {
    super(t2, "ResponseException");
    this.status = e2;
    this.missing = i2;
  }
}
class FormatError extends O {
  constructor(t2) {
    super(t2, "FormatError");
  }
}
class AbortException extends O {
  constructor(t2) {
    super(t2, "AbortException");
  }
}
function bytesToString(t2) {
  "object" == typeof t2 && void 0 !== t2?.length || unreachable("Invalid argument for bytesToString");
  const e2 = t2.length, i2 = 8192;
  if (e2 < i2) return String.fromCharCode.apply(null, t2);
  const s2 = [];
  for (let n2 = 0; n2 < e2; n2 += i2) {
    const r2 = Math.min(n2 + i2, e2), a2 = t2.subarray(n2, r2);
    s2.push(String.fromCharCode.apply(null, a2));
  }
  return s2.join("");
}
function stringToBytes(t2) {
  "string" != typeof t2 && unreachable("Invalid argument for stringToBytes");
  const e2 = t2.length, i2 = new Uint8Array(e2);
  for (let s2 = 0; s2 < e2; ++s2) i2[s2] = 255 & t2.charCodeAt(s2);
  return i2;
}
class util_FeatureTest {
  static get isLittleEndian() {
    return shadow(this, "isLittleEndian", (function isLittleEndian() {
      const t2 = new Uint8Array(4);
      t2[0] = 1;
      return 1 === new Uint32Array(t2.buffer, 0, 1)[0];
    })());
  }
  static get isEvalSupported() {
    return shadow(this, "isEvalSupported", (function isEvalSupported() {
      try {
        new Function("");
        return true;
      } catch {
        return false;
      }
    })());
  }
  static get isOffscreenCanvasSupported() {
    return shadow(this, "isOffscreenCanvasSupported", "undefined" != typeof OffscreenCanvas);
  }
  static get isImageDecoderSupported() {
    return shadow(this, "isImageDecoderSupported", "undefined" != typeof ImageDecoder);
  }
  static get platform() {
    const { platform: t2, userAgent: e2 } = navigator;
    return shadow(this, "platform", { isAndroid: e2.includes("Android"), isLinux: t2.includes("Linux"), isMac: t2.includes("Mac"), isWindows: t2.includes("Win"), isFirefox: e2.includes("Firefox") });
  }
  static get isCSSRoundSupported() {
    return shadow(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
  }
}
const N = Array.from(Array(256).keys(), (t2) => t2.toString(16).padStart(2, "0"));
class Util {
  static makeHexColor(t2, e2, i2) {
    return `#${N[t2]}${N[e2]}${N[i2]}`;
  }
  static domMatrixToTransform(t2) {
    return [t2.a, t2.b, t2.c, t2.d, t2.e, t2.f];
  }
  static scaleMinMax(t2, e2) {
    let i2;
    if (t2[0]) {
      if (t2[0] < 0) {
        i2 = e2[0];
        e2[0] = e2[2];
        e2[2] = i2;
      }
      e2[0] *= t2[0];
      e2[2] *= t2[0];
      if (t2[3] < 0) {
        i2 = e2[1];
        e2[1] = e2[3];
        e2[3] = i2;
      }
      e2[1] *= t2[3];
      e2[3] *= t2[3];
    } else {
      i2 = e2[0];
      e2[0] = e2[1];
      e2[1] = i2;
      i2 = e2[2];
      e2[2] = e2[3];
      e2[3] = i2;
      if (t2[1] < 0) {
        i2 = e2[1];
        e2[1] = e2[3];
        e2[3] = i2;
      }
      e2[1] *= t2[1];
      e2[3] *= t2[1];
      if (t2[2] < 0) {
        i2 = e2[0];
        e2[0] = e2[2];
        e2[2] = i2;
      }
      e2[0] *= t2[2];
      e2[2] *= t2[2];
    }
    e2[0] += t2[4];
    e2[1] += t2[5];
    e2[2] += t2[4];
    e2[3] += t2[5];
  }
  static transform(t2, e2) {
    return [t2[0] * e2[0] + t2[2] * e2[1], t2[1] * e2[0] + t2[3] * e2[1], t2[0] * e2[2] + t2[2] * e2[3], t2[1] * e2[2] + t2[3] * e2[3], t2[0] * e2[4] + t2[2] * e2[5] + t2[4], t2[1] * e2[4] + t2[3] * e2[5] + t2[5]];
  }
  static multiplyByDOMMatrix(t2, e2) {
    return [t2[0] * e2.a + t2[2] * e2.b, t2[1] * e2.a + t2[3] * e2.b, t2[0] * e2.c + t2[2] * e2.d, t2[1] * e2.c + t2[3] * e2.d, t2[0] * e2.e + t2[2] * e2.f + t2[4], t2[1] * e2.e + t2[3] * e2.f + t2[5]];
  }
  static applyTransform(t2, e2, i2 = 0) {
    const s2 = t2[i2], n2 = t2[i2 + 1];
    t2[i2] = s2 * e2[0] + n2 * e2[2] + e2[4];
    t2[i2 + 1] = s2 * e2[1] + n2 * e2[3] + e2[5];
  }
  static applyTransformToBezier(t2, e2, i2 = 0) {
    const s2 = e2[0], n2 = e2[1], r2 = e2[2], a2 = e2[3], o2 = e2[4], l2 = e2[5];
    for (let e3 = 0; e3 < 6; e3 += 2) {
      const h2 = t2[i2 + e3], d2 = t2[i2 + e3 + 1];
      t2[i2 + e3] = h2 * s2 + d2 * r2 + o2;
      t2[i2 + e3 + 1] = h2 * n2 + d2 * a2 + l2;
    }
  }
  static applyInverseTransform(t2, e2) {
    const i2 = t2[0], s2 = t2[1], n2 = e2[0] * e2[3] - e2[1] * e2[2];
    t2[0] = (i2 * e2[3] - s2 * e2[2] + e2[2] * e2[5] - e2[4] * e2[3]) / n2;
    t2[1] = (-i2 * e2[1] + s2 * e2[0] + e2[4] * e2[1] - e2[5] * e2[0]) / n2;
  }
  static axialAlignedBoundingBox(t2, e2, i2) {
    const s2 = e2[0], n2 = e2[1], r2 = e2[2], a2 = e2[3], o2 = e2[4], l2 = e2[5], h2 = t2[0], d2 = t2[1], c2 = t2[2], u2 = t2[3];
    let p2 = s2 * h2 + o2, g2 = p2, m2 = s2 * c2 + o2, f2 = m2, b2 = a2 * d2 + l2, w2 = b2, y2 = a2 * u2 + l2, A2 = y2;
    if (0 !== n2 || 0 !== r2) {
      const t3 = n2 * h2, e3 = n2 * c2, i3 = r2 * d2, s3 = r2 * u2;
      p2 += i3;
      f2 += i3;
      m2 += s3;
      g2 += s3;
      b2 += t3;
      A2 += t3;
      y2 += e3;
      w2 += e3;
    }
    i2[0] = Math.min(i2[0], p2, m2, g2, f2);
    i2[1] = Math.min(i2[1], b2, y2, w2, A2);
    i2[2] = Math.max(i2[2], p2, m2, g2, f2);
    i2[3] = Math.max(i2[3], b2, y2, w2, A2);
  }
  static inverseTransform(t2) {
    const e2 = t2[0] * t2[3] - t2[1] * t2[2];
    return [t2[3] / e2, -t2[1] / e2, -t2[2] / e2, t2[0] / e2, (t2[2] * t2[5] - t2[4] * t2[3]) / e2, (t2[4] * t2[1] - t2[5] * t2[0]) / e2];
  }
  static singularValueDecompose2dScale(t2, e2) {
    const i2 = t2[0], s2 = t2[1], n2 = t2[2], r2 = t2[3], a2 = i2 ** 2 + s2 ** 2, o2 = i2 * n2 + s2 * r2, l2 = n2 ** 2 + r2 ** 2, h2 = (a2 + l2) / 2, d2 = Math.sqrt(h2 ** 2 - (a2 * l2 - o2 ** 2));
    e2[0] = Math.sqrt(h2 + d2 || 1);
    e2[1] = Math.sqrt(h2 - d2 || 1);
  }
  static normalizeRect(t2) {
    const e2 = t2.slice(0);
    if (t2[0] > t2[2]) {
      e2[0] = t2[2];
      e2[2] = t2[0];
    }
    if (t2[1] > t2[3]) {
      e2[1] = t2[3];
      e2[3] = t2[1];
    }
    return e2;
  }
  static intersect(t2, e2) {
    const i2 = Math.max(Math.min(t2[0], t2[2]), Math.min(e2[0], e2[2])), s2 = Math.min(Math.max(t2[0], t2[2]), Math.max(e2[0], e2[2]));
    if (i2 > s2) return null;
    const n2 = Math.max(Math.min(t2[1], t2[3]), Math.min(e2[1], e2[3])), r2 = Math.min(Math.max(t2[1], t2[3]), Math.max(e2[1], e2[3]));
    return n2 > r2 ? null : [i2, n2, s2, r2];
  }
  static pointBoundingBox(t2, e2, i2) {
    i2[0] = Math.min(i2[0], t2);
    i2[1] = Math.min(i2[1], e2);
    i2[2] = Math.max(i2[2], t2);
    i2[3] = Math.max(i2[3], e2);
  }
  static rectBoundingBox(t2, e2, i2, s2, n2) {
    n2[0] = Math.min(n2[0], t2, i2);
    n2[1] = Math.min(n2[1], e2, s2);
    n2[2] = Math.max(n2[2], t2, i2);
    n2[3] = Math.max(n2[3], e2, s2);
  }
  static #t(t2, e2, i2, s2, n2, r2, a2, o2, l2, h2) {
    if (l2 <= 0 || l2 >= 1) return;
    const d2 = 1 - l2, c2 = l2 * l2, u2 = c2 * l2, p2 = d2 * (d2 * (d2 * t2 + 3 * l2 * e2) + 3 * c2 * i2) + u2 * s2, g2 = d2 * (d2 * (d2 * n2 + 3 * l2 * r2) + 3 * c2 * a2) + u2 * o2;
    h2[0] = Math.min(h2[0], p2);
    h2[1] = Math.min(h2[1], g2);
    h2[2] = Math.max(h2[2], p2);
    h2[3] = Math.max(h2[3], g2);
  }
  static #e(t2, e2, i2, s2, n2, r2, a2, o2, l2, h2, d2, c2) {
    if (Math.abs(l2) < 1e-12) {
      Math.abs(h2) >= 1e-12 && this.#t(t2, e2, i2, s2, n2, r2, a2, o2, -d2 / h2, c2);
      return;
    }
    const u2 = h2 ** 2 - 4 * d2 * l2;
    if (u2 < 0) return;
    const p2 = Math.sqrt(u2), g2 = 2 * l2;
    this.#t(t2, e2, i2, s2, n2, r2, a2, o2, (-h2 + p2) / g2, c2);
    this.#t(t2, e2, i2, s2, n2, r2, a2, o2, (-h2 - p2) / g2, c2);
  }
  static bezierBoundingBox(t2, e2, i2, s2, n2, r2, a2, o2, l2) {
    l2[0] = Math.min(l2[0], t2, a2);
    l2[1] = Math.min(l2[1], e2, o2);
    l2[2] = Math.max(l2[2], t2, a2);
    l2[3] = Math.max(l2[3], e2, o2);
    this.#e(t2, i2, n2, a2, e2, s2, r2, o2, 3 * (3 * (i2 - n2) - t2 + a2), 6 * (t2 - 2 * i2 + n2), 3 * (i2 - t2), l2);
    this.#e(t2, i2, n2, a2, e2, s2, r2, o2, 3 * (3 * (s2 - r2) - e2 + o2), 6 * (e2 - 2 * s2 + r2), 3 * (s2 - e2), l2);
  }
}
let U = null, H = null;
function normalizeUnicode(t2) {
  if (!U) {
    U = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
    H = /* @__PURE__ */ new Map([["ﬅ", "ſt"]]);
  }
  return t2.replaceAll(U, (t3, e2, i2) => e2 ? e2.normalize("NFKC") : H.get(i2));
}
function getUuid() {
  if ("function" == typeof crypto.randomUUID) return crypto.randomUUID();
  const t2 = new Uint8Array(32);
  crypto.getRandomValues(t2);
  return bytesToString(t2);
}
const z = "pdfjs_internal_id_";
function MathClamp(t2, e2, i2) {
  return Math.min(Math.max(t2, e2), i2);
}
function toBase64Util(t2) {
  return Uint8Array.prototype.toBase64 ? t2.toBase64() : btoa(bytesToString(t2));
}
"function" != typeof Promise.try && (Promise.try = function(t2, ...e2) {
  return new Promise((i2) => {
    i2(t2(...e2));
  });
});
"function" != typeof Math.sumPrecise && (Math.sumPrecise = function(t2) {
  return t2.reduce((t3, e2) => t3 + e2, 0);
});
class XfaText {
  static textContent(t2) {
    const e2 = [], i2 = { items: e2, styles: /* @__PURE__ */ Object.create(null) };
    !(function walk(t3) {
      if (!t3) return;
      let i3 = null;
      const s2 = t3.name;
      if ("#text" === s2) i3 = t3.value;
      else {
        if (!XfaText.shouldBuildText(s2)) return;
        t3?.attributes?.textContent ? i3 = t3.attributes.textContent : t3.value && (i3 = t3.value);
      }
      null !== i3 && e2.push({ str: i3 });
      if (t3.children) for (const e3 of t3.children) walk(e3);
    })(t2);
    return i2;
  }
  static shouldBuildText(t2) {
    return !("textarea" === t2 || "input" === t2 || "option" === t2 || "select" === t2);
  }
}
class XfaLayer {
  static setupStorage(t2, e2, i2, s2, n2) {
    const r2 = s2.getValue(e2, { value: null });
    switch (i2.name) {
      case "textarea":
        null !== r2.value && (t2.textContent = r2.value);
        if ("print" === n2) break;
        t2.addEventListener("input", (t3) => {
          s2.setValue(e2, { value: t3.target.value });
        });
        break;
      case "input":
        if ("radio" === i2.attributes.type || "checkbox" === i2.attributes.type) {
          r2.value === i2.attributes.xfaOn ? t2.setAttribute("checked", true) : r2.value === i2.attributes.xfaOff && t2.removeAttribute("checked");
          if ("print" === n2) break;
          t2.addEventListener("change", (t3) => {
            s2.setValue(e2, { value: t3.target.checked ? t3.target.getAttribute("xfaOn") : t3.target.getAttribute("xfaOff") });
          });
        } else {
          null !== r2.value && t2.setAttribute("value", r2.value);
          if ("print" === n2) break;
          t2.addEventListener("input", (t3) => {
            s2.setValue(e2, { value: t3.target.value });
          });
        }
        break;
      case "select":
        if (null !== r2.value) {
          t2.setAttribute("value", r2.value);
          for (const t3 of i2.children) t3.attributes.value === r2.value ? t3.attributes.selected = true : t3.attributes.hasOwnProperty("selected") && delete t3.attributes.selected;
        }
        t2.addEventListener("input", (t3) => {
          const i3 = t3.target.options, n3 = -1 === i3.selectedIndex ? "" : i3[i3.selectedIndex].value;
          s2.setValue(e2, { value: n3 });
        });
    }
  }
  static setAttributes({ html: t2, element: e2, storage: i2 = null, intent: s2, linkService: n2 }) {
    const { attributes: r2 } = e2, a2 = t2 instanceof HTMLAnchorElement;
    "radio" === r2.type && (r2.name = `${r2.name}-${s2}`);
    for (const [e3, i3] of Object.entries(r2)) if (null != i3) switch (e3) {
      case "class":
        i3.length && t2.setAttribute(e3, i3.join(" "));
        break;
      case "dataId":
        break;
      case "id":
        t2.setAttribute("data-element-id", i3);
        break;
      case "style":
        Object.assign(t2.style, i3);
        break;
      case "textContent":
        t2.textContent = i3;
        break;
      default:
        (!a2 || "href" !== e3 && "newWindow" !== e3) && t2.setAttribute(e3, i3);
    }
    a2 && n2.addLinkAttributes(t2, r2.href, r2.newWindow);
    i2 && r2.dataId && this.setupStorage(t2, r2.dataId, e2, i2);
  }
  static render(t2) {
    const e2 = t2.annotationStorage, i2 = t2.linkService, s2 = t2.xfaHtml, n2 = t2.intent || "display", r2 = document.createElement(s2.name);
    s2.attributes && this.setAttributes({ html: r2, element: s2, intent: n2, linkService: i2 });
    const a2 = "richText" !== n2, o2 = t2.div;
    o2.append(r2);
    if (t2.viewport) {
      const e3 = `matrix(${t2.viewport.transform.join(",")})`;
      o2.style.transform = e3;
    }
    a2 && o2.setAttribute("class", "xfaLayer xfaFont");
    const l2 = [];
    if (0 === s2.children.length) {
      if (s2.value) {
        const t3 = document.createTextNode(s2.value);
        r2.append(t3);
        a2 && XfaText.shouldBuildText(s2.name) && l2.push(t3);
      }
      return { textDivs: l2 };
    }
    const h2 = [[s2, -1, r2]];
    for (; h2.length > 0; ) {
      const [t3, s3, r3] = h2.at(-1);
      if (s3 + 1 === t3.children.length) {
        h2.pop();
        continue;
      }
      const o3 = t3.children[++h2.at(-1)[1]];
      if (null === o3) continue;
      const { name: d2 } = o3;
      if ("#text" === d2) {
        const t4 = document.createTextNode(o3.value);
        l2.push(t4);
        r3.append(t4);
        continue;
      }
      const c2 = o3?.attributes?.xmlns ? document.createElementNS(o3.attributes.xmlns, d2) : document.createElement(d2);
      r3.append(c2);
      o3.attributes && this.setAttributes({ html: c2, element: o3, storage: e2, intent: n2, linkService: i2 });
      if (o3.children?.length > 0) h2.push([o3, -1, c2]);
      else if (o3.value) {
        const t4 = document.createTextNode(o3.value);
        a2 && XfaText.shouldBuildText(d2) && l2.push(t4);
        c2.append(t4);
      }
    }
    for (const t3 of o2.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) t3.setAttribute("readOnly", true);
    return { textDivs: l2 };
  }
  static update(t2) {
    const e2 = `matrix(${t2.viewport.transform.join(",")})`;
    t2.div.style.transform = e2;
    t2.div.hidden = false;
  }
}
const G = "http://www.w3.org/2000/svg";
class PixelsPerInch {
  static CSS = 96;
  static PDF = 72;
  static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
}
async function fetchData(t2, e2 = "text") {
  if (isValidFetchUrl(t2, document.baseURI)) {
    const i2 = await fetch(t2);
    if (!i2.ok) throw new Error(i2.statusText);
    switch (e2) {
      case "arraybuffer":
        return i2.arrayBuffer();
      case "blob":
        return i2.blob();
      case "json":
        return i2.json();
    }
    return i2.text();
  }
  return new Promise((i2, s2) => {
    const n2 = new XMLHttpRequest();
    n2.open("GET", t2, true);
    n2.responseType = e2;
    n2.onreadystatechange = () => {
      if (n2.readyState === XMLHttpRequest.DONE) if (200 !== n2.status && 0 !== n2.status) s2(new Error(n2.statusText));
      else {
        switch (e2) {
          case "arraybuffer":
          case "blob":
          case "json":
            i2(n2.response);
            return;
        }
        i2(n2.responseText);
      }
    };
    n2.send(null);
  });
}
class PageViewport {
  constructor({ viewBox: t2, userUnit: e2, scale: i2, rotation: s2, offsetX: n2 = 0, offsetY: r2 = 0, dontFlip: a2 = false }) {
    this.viewBox = t2;
    this.userUnit = e2;
    this.scale = i2;
    this.rotation = s2;
    this.offsetX = n2;
    this.offsetY = r2;
    i2 *= e2;
    const o2 = (t2[2] + t2[0]) / 2, l2 = (t2[3] + t2[1]) / 2;
    let h2, d2, c2, u2, p2, g2, m2, f2;
    (s2 %= 360) < 0 && (s2 += 360);
    switch (s2) {
      case 180:
        h2 = -1;
        d2 = 0;
        c2 = 0;
        u2 = 1;
        break;
      case 90:
        h2 = 0;
        d2 = 1;
        c2 = 1;
        u2 = 0;
        break;
      case 270:
        h2 = 0;
        d2 = -1;
        c2 = -1;
        u2 = 0;
        break;
      case 0:
        h2 = 1;
        d2 = 0;
        c2 = 0;
        u2 = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    if (a2) {
      c2 = -c2;
      u2 = -u2;
    }
    if (0 === h2) {
      p2 = Math.abs(l2 - t2[1]) * i2 + n2;
      g2 = Math.abs(o2 - t2[0]) * i2 + r2;
      m2 = (t2[3] - t2[1]) * i2;
      f2 = (t2[2] - t2[0]) * i2;
    } else {
      p2 = Math.abs(o2 - t2[0]) * i2 + n2;
      g2 = Math.abs(l2 - t2[1]) * i2 + r2;
      m2 = (t2[2] - t2[0]) * i2;
      f2 = (t2[3] - t2[1]) * i2;
    }
    this.transform = [h2 * i2, d2 * i2, c2 * i2, u2 * i2, p2 - h2 * i2 * o2 - c2 * i2 * l2, g2 - d2 * i2 * o2 - u2 * i2 * l2];
    this.width = m2;
    this.height = f2;
  }
  get rawDims() {
    const t2 = this.viewBox;
    return shadow(this, "rawDims", { pageWidth: t2[2] - t2[0], pageHeight: t2[3] - t2[1], pageX: t2[0], pageY: t2[1] });
  }
  clone({ scale: t2 = this.scale, rotation: e2 = this.rotation, offsetX: i2 = this.offsetX, offsetY: s2 = this.offsetY, dontFlip: n2 = false } = {}) {
    return new PageViewport({ viewBox: this.viewBox.slice(), userUnit: this.userUnit, scale: t2, rotation: e2, offsetX: i2, offsetY: s2, dontFlip: n2 });
  }
  convertToViewportPoint(t2, e2) {
    const i2 = [t2, e2];
    Util.applyTransform(i2, this.transform);
    return i2;
  }
  convertToViewportRectangle(t2) {
    const e2 = [t2[0], t2[1]];
    Util.applyTransform(e2, this.transform);
    const i2 = [t2[2], t2[3]];
    Util.applyTransform(i2, this.transform);
    return [e2[0], e2[1], i2[0], i2[1]];
  }
  convertToPdfPoint(t2, e2) {
    const i2 = [t2, e2];
    Util.applyInverseTransform(i2, this.transform);
    return i2;
  }
}
class RenderingCancelledException extends O {
  constructor(t2, e2 = 0) {
    super(t2, "RenderingCancelledException");
    this.extraDelay = e2;
  }
}
function isDataScheme(t2) {
  const e2 = t2.length;
  let i2 = 0;
  for (; i2 < e2 && "" === t2[i2].trim(); ) i2++;
  return "data:" === t2.substring(i2, i2 + 5).toLowerCase();
}
function isPdfFile(t2) {
  return "string" == typeof t2 && /\.pdf$/i.test(t2);
}
function getFilenameFromUrl(t2) {
  [t2] = t2.split(/[#?]/, 1);
  return t2.substring(t2.lastIndexOf("/") + 1);
}
function getPdfFilenameFromUrl(t2, e2 = "document.pdf") {
  if ("string" != typeof t2) return e2;
  if (isDataScheme(t2)) {
    warn('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
    return e2;
  }
  const i2 = ((t3) => {
    try {
      return new URL(t3);
    } catch {
      try {
        return new URL(decodeURIComponent(t3));
      } catch {
        try {
          return new URL(t3, "https://foo.bar");
        } catch {
          try {
            return new URL(decodeURIComponent(t3), "https://foo.bar");
          } catch {
            return null;
          }
        }
      }
    }
  })(t2);
  if (!i2) return e2;
  const decode = (t3) => {
    try {
      let e3 = decodeURIComponent(t3);
      if (e3.includes("/")) {
        e3 = e3.split("/").at(-1);
        return e3.test(/^\.pdf$/i) ? e3 : t3;
      }
      return e3;
    } catch {
      return t3;
    }
  }, s2 = /\.pdf$/i, n2 = i2.pathname.split("/").at(-1);
  if (s2.test(n2)) return decode(n2);
  if (i2.searchParams.size > 0) {
    const t3 = Array.from(i2.searchParams.values()).reverse();
    for (const e4 of t3) if (s2.test(e4)) return decode(e4);
    const e3 = Array.from(i2.searchParams.keys()).reverse();
    for (const t4 of e3) if (s2.test(t4)) return decode(t4);
  }
  if (i2.hash) {
    const t3 = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(i2.hash);
    if (t3) return decode(t3[0]);
  }
  return e2;
}
class StatTimer {
  started = /* @__PURE__ */ Object.create(null);
  times = [];
  time(t2) {
    t2 in this.started && warn(`Timer is already running for ${t2}`);
    this.started[t2] = Date.now();
  }
  timeEnd(t2) {
    t2 in this.started || warn(`Timer has not been started for ${t2}`);
    this.times.push({ name: t2, start: this.started[t2], end: Date.now() });
    delete this.started[t2];
  }
  toString() {
    const t2 = [];
    let e2 = 0;
    for (const { name: t3 } of this.times) e2 = Math.max(t3.length, e2);
    for (const { name: i2, start: s2, end: n2 } of this.times) t2.push(`${i2.padEnd(e2)} ${n2 - s2}ms
`);
    return t2.join("");
  }
}
function isValidFetchUrl(t2, e2) {
  const i2 = e2 ? URL.parse(t2, e2) : URL.parse(t2);
  return "http:" === i2?.protocol || "https:" === i2?.protocol;
}
function noContextMenu(t2) {
  t2.preventDefault();
}
function stopEvent(t2) {
  t2.preventDefault();
  t2.stopPropagation();
}
class PDFDateString {
  static #i;
  static toDateObject(t2) {
    if (t2 instanceof Date) return t2;
    if (!t2 || "string" != typeof t2) return null;
    this.#i ||= new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?");
    const e2 = this.#i.exec(t2);
    if (!e2) return null;
    const i2 = parseInt(e2[1], 10);
    let s2 = parseInt(e2[2], 10);
    s2 = s2 >= 1 && s2 <= 12 ? s2 - 1 : 0;
    let n2 = parseInt(e2[3], 10);
    n2 = n2 >= 1 && n2 <= 31 ? n2 : 1;
    let r2 = parseInt(e2[4], 10);
    r2 = r2 >= 0 && r2 <= 23 ? r2 : 0;
    let a2 = parseInt(e2[5], 10);
    a2 = a2 >= 0 && a2 <= 59 ? a2 : 0;
    let o2 = parseInt(e2[6], 10);
    o2 = o2 >= 0 && o2 <= 59 ? o2 : 0;
    const l2 = e2[7] || "Z";
    let h2 = parseInt(e2[8], 10);
    h2 = h2 >= 0 && h2 <= 23 ? h2 : 0;
    let d2 = parseInt(e2[9], 10) || 0;
    d2 = d2 >= 0 && d2 <= 59 ? d2 : 0;
    if ("-" === l2) {
      r2 += h2;
      a2 += d2;
    } else if ("+" === l2) {
      r2 -= h2;
      a2 -= d2;
    }
    return new Date(Date.UTC(i2, s2, n2, r2, a2, o2));
  }
}
function getXfaPageViewport(t2, { scale: e2 = 1, rotation: i2 = 0 }) {
  const { width: s2, height: n2 } = t2.attributes.style, r2 = [0, 0, parseInt(s2), parseInt(n2)];
  return new PageViewport({ viewBox: r2, userUnit: 1, scale: e2, rotation: i2 });
}
function getRGB(t2) {
  if (t2.startsWith("#")) {
    const e2 = parseInt(t2.slice(1), 16);
    return [(16711680 & e2) >> 16, (65280 & e2) >> 8, 255 & e2];
  }
  if (t2.startsWith("rgb(")) return t2.slice(4, -1).split(",").map((t3) => parseInt(t3));
  if (t2.startsWith("rgba(")) return t2.slice(5, -1).split(",").map((t3) => parseInt(t3)).slice(0, 3);
  warn(`Not a valid color format: "${t2}"`);
  return [0, 0, 0];
}
function getCurrentTransform(t2) {
  const { a: e2, b: i2, c: s2, d: n2, e: r2, f: a2 } = t2.getTransform();
  return [e2, i2, s2, n2, r2, a2];
}
function getCurrentTransformInverse(t2) {
  const { a: e2, b: i2, c: s2, d: n2, e: r2, f: a2 } = t2.getTransform().invertSelf();
  return [e2, i2, s2, n2, r2, a2];
}
function setLayerDimensions(t2, e2, i2 = false, s2 = true) {
  if (e2 instanceof PageViewport) {
    const { pageWidth: s3, pageHeight: n2 } = e2.rawDims, { style: r2 } = t2, a2 = util_FeatureTest.isCSSRoundSupported, o2 = `var(--total-scale-factor) * ${s3}px`, l2 = `var(--total-scale-factor) * ${n2}px`, h2 = a2 ? `round(down, ${o2}, var(--scale-round-x))` : `calc(${o2})`, d2 = a2 ? `round(down, ${l2}, var(--scale-round-y))` : `calc(${l2})`;
    if (i2 && e2.rotation % 180 != 0) {
      r2.width = d2;
      r2.height = h2;
    } else {
      r2.width = h2;
      r2.height = d2;
    }
  }
  s2 && t2.setAttribute("data-main-rotation", e2.rotation);
}
class OutputScale {
  constructor() {
    const { pixelRatio: t2 } = OutputScale;
    this.sx = t2;
    this.sy = t2;
  }
  get scaled() {
    return 1 !== this.sx || 1 !== this.sy;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
  limitCanvas(t2, e2, i2, s2, n2 = -1) {
    let r2 = 1 / 0, a2 = 1 / 0, o2 = 1 / 0;
    (i2 = OutputScale.capPixels(i2, n2)) > 0 && (r2 = Math.sqrt(i2 / (t2 * e2)));
    if (-1 !== s2) {
      a2 = s2 / t2;
      o2 = s2 / e2;
    }
    const l2 = Math.min(r2, a2, o2);
    if (this.sx > l2 || this.sy > l2) {
      this.sx = l2;
      this.sy = l2;
      return true;
    }
    return false;
  }
  static get pixelRatio() {
    return globalThis.devicePixelRatio || 1;
  }
  static capPixels(t2, e2) {
    if (e2 >= 0) {
      const i2 = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e2 / 100));
      return t2 > 0 ? Math.min(t2, i2) : i2;
    }
    return t2;
  }
}
const W = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
class ColorScheme {
  static get isDarkMode() {
    return shadow(this, "isDarkMode", !!window?.matchMedia?.("(prefers-color-scheme: dark)").matches);
  }
}
class CSSConstants {
  static get commentForegroundColor() {
    const t2 = document.createElement("span");
    t2.classList.add("comment", "sidebar");
    const { style: e2 } = t2;
    e2.width = e2.height = "0";
    e2.display = "none";
    e2.color = "var(--comment-fg-color)";
    document.body.append(t2);
    const { color: i2 } = window.getComputedStyle(t2);
    t2.remove();
    return shadow(this, "commentForegroundColor", getRGB(i2));
  }
}
function applyOpacity(t2, e2, i2, s2) {
  const n2 = 255 * (1 - (s2 = Math.min(Math.max(s2 ?? 1, 0), 1)));
  return [t2 = Math.round(t2 * s2 + n2), e2 = Math.round(e2 * s2 + n2), i2 = Math.round(i2 * s2 + n2)];
}
function RGBToHSL(t2, e2) {
  const i2 = t2[0] / 255, s2 = t2[1] / 255, n2 = t2[2] / 255, r2 = Math.max(i2, s2, n2), a2 = Math.min(i2, s2, n2), o2 = (r2 + a2) / 2;
  if (r2 === a2) e2[0] = e2[1] = 0;
  else {
    const t3 = r2 - a2;
    e2[1] = o2 < 0.5 ? t3 / (r2 + a2) : t3 / (2 - r2 - a2);
    switch (r2) {
      case i2:
        e2[0] = 60 * ((s2 - n2) / t3 + (s2 < n2 ? 6 : 0));
        break;
      case s2:
        e2[0] = 60 * ((n2 - i2) / t3 + 2);
        break;
      case n2:
        e2[0] = 60 * ((i2 - s2) / t3 + 4);
    }
  }
  e2[2] = o2;
}
function HSLToRGB(t2, e2) {
  const i2 = t2[0], s2 = t2[1], n2 = t2[2], r2 = (1 - Math.abs(2 * n2 - 1)) * s2, a2 = r2 * (1 - Math.abs(i2 / 60 % 2 - 1)), o2 = n2 - r2 / 2;
  switch (Math.floor(i2 / 60)) {
    case 0:
      e2[0] = r2 + o2;
      e2[1] = a2 + o2;
      e2[2] = o2;
      break;
    case 1:
      e2[0] = a2 + o2;
      e2[1] = r2 + o2;
      e2[2] = o2;
      break;
    case 2:
      e2[0] = o2;
      e2[1] = r2 + o2;
      e2[2] = a2 + o2;
      break;
    case 3:
      e2[0] = o2;
      e2[1] = a2 + o2;
      e2[2] = r2 + o2;
      break;
    case 4:
      e2[0] = a2 + o2;
      e2[1] = o2;
      e2[2] = r2 + o2;
      break;
    case 5:
    case 6:
      e2[0] = r2 + o2;
      e2[1] = o2;
      e2[2] = a2 + o2;
  }
}
function computeLuminance(t2) {
  return t2 <= 0.03928 ? t2 / 12.92 : ((t2 + 0.055) / 1.055) ** 2.4;
}
function contrastRatio(t2, e2, i2) {
  HSLToRGB(t2, i2);
  i2.map(computeLuminance);
  const s2 = 0.2126 * i2[0] + 0.7152 * i2[1] + 0.0722 * i2[2];
  HSLToRGB(e2, i2);
  i2.map(computeLuminance);
  const n2 = 0.2126 * i2[0] + 0.7152 * i2[1] + 0.0722 * i2[2];
  return s2 > n2 ? (s2 + 0.05) / (n2 + 0.05) : (n2 + 0.05) / (s2 + 0.05);
}
const V = /* @__PURE__ */ new Map();
function findContrastColor(t2, e2) {
  const i2 = t2[0] + 256 * t2[1] + 65536 * t2[2] + 16777216 * e2[0] + 4294967296 * e2[1] + 1099511627776 * e2[2];
  let s2 = V.get(i2);
  if (s2) return s2;
  const n2 = new Float32Array(9), r2 = n2.subarray(0, 3), a2 = n2.subarray(3, 6);
  RGBToHSL(t2, a2);
  const o2 = n2.subarray(6, 9);
  RGBToHSL(e2, o2);
  const l2 = o2[2] < 0.5, h2 = l2 ? 12 : 4.5;
  a2[2] = l2 ? Math.sqrt(a2[2]) : 1 - Math.sqrt(1 - a2[2]);
  if (contrastRatio(a2, o2, r2) < h2) {
    let t3, e3;
    if (l2) {
      t3 = a2[2];
      e3 = 1;
    } else {
      t3 = 0;
      e3 = a2[2];
    }
    const i3 = 5e-3;
    for (; e3 - t3 > i3; ) {
      const i4 = a2[2] = (t3 + e3) / 2;
      l2 === contrastRatio(a2, o2, r2) < h2 ? t3 = i4 : e3 = i4;
    }
    a2[2] = l2 ? e3 : t3;
  }
  HSLToRGB(a2, r2);
  s2 = Util.makeHexColor(Math.round(255 * r2[0]), Math.round(255 * r2[1]), Math.round(255 * r2[2]));
  V.set(i2, s2);
  return s2;
}
function renderRichText({ html: t2, dir: e2, className: i2 }, s2) {
  const n2 = document.createDocumentFragment();
  if ("string" == typeof t2) {
    const i3 = document.createElement("p");
    i3.dir = e2 || "auto";
    const s3 = t2.split(/(?:\r\n?|\n)/);
    for (let t3 = 0, e3 = s3.length; t3 < e3; ++t3) {
      const n3 = s3[t3];
      i3.append(document.createTextNode(n3));
      t3 < e3 - 1 && i3.append(document.createElement("br"));
    }
    n2.append(i3);
  } else XfaLayer.render({ xfaHtml: t2, div: n2, intent: "richText" });
  n2.firstChild.classList.add("richText", i2);
  s2.append(n2);
}
class EditorToolbar {
  #s = null;
  #n = null;
  #r;
  #a = null;
  #o = null;
  #l = null;
  #h = null;
  #d = null;
  static #c = null;
  constructor(t2) {
    this.#r = t2;
    EditorToolbar.#c ||= Object.freeze({ freetext: "pdfjs-editor-remove-freetext-button", highlight: "pdfjs-editor-remove-highlight-button", ink: "pdfjs-editor-remove-ink-button", stamp: "pdfjs-editor-remove-stamp-button", signature: "pdfjs-editor-remove-signature-button" });
  }
  render() {
    const t2 = this.#s = document.createElement("div");
    t2.classList.add("editToolbar", "hidden");
    t2.setAttribute("role", "toolbar");
    const e2 = this.#r._uiManager._signal;
    if (e2 instanceof AbortSignal && !e2.aborted) {
      t2.addEventListener("contextmenu", noContextMenu, { signal: e2 });
      t2.addEventListener("pointerdown", EditorToolbar.#u, { signal: e2 });
    }
    const i2 = this.#a = document.createElement("div");
    i2.className = "buttons";
    t2.append(i2);
    const s2 = this.#r.toolbarPosition;
    if (s2) {
      const { style: e3 } = t2, i3 = "ltr" === this.#r._uiManager.direction ? 1 - s2[0] : s2[0];
      e3.insetInlineEnd = 100 * i3 + "%";
      e3.top = `calc(${100 * s2[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t2;
  }
  get div() {
    return this.#s;
  }
  static #u(t2) {
    t2.stopPropagation();
  }
  #p(t2) {
    this.#r._focusEventsAllowed = false;
    stopEvent(t2);
  }
  #g(t2) {
    this.#r._focusEventsAllowed = true;
    stopEvent(t2);
  }
  #m(t2) {
    const e2 = this.#r._uiManager._signal;
    if (!(e2 instanceof AbortSignal) || e2.aborted) return false;
    t2.addEventListener("focusin", this.#p.bind(this), { capture: true, signal: e2 });
    t2.addEventListener("focusout", this.#g.bind(this), { capture: true, signal: e2 });
    t2.addEventListener("contextmenu", noContextMenu, { signal: e2 });
    return true;
  }
  hide() {
    this.#s.classList.add("hidden");
    this.#n?.hideDropdown();
  }
  show() {
    this.#s.classList.remove("hidden");
    this.#o?.shown();
    this.#l?.shown();
  }
  addDeleteButton() {
    const { editorType: t2, _uiManager: e2 } = this.#r, i2 = document.createElement("button");
    i2.classList.add("basic", "deleteButton");
    i2.tabIndex = 0;
    i2.setAttribute("data-l10n-id", EditorToolbar.#c[t2]);
    this.#m(i2) && i2.addEventListener("click", (t3) => {
      e2.delete();
    }, { signal: e2._signal });
    this.#a.append(i2);
  }
  get #f() {
    const t2 = document.createElement("div");
    t2.className = "divider";
    return t2;
  }
  async addAltText(t2) {
    const e2 = await t2.render();
    this.#m(e2);
    this.#a.append(e2, this.#f);
    this.#o = t2;
  }
  addComment(t2, e2 = null) {
    if (this.#l) return;
    const i2 = t2.renderForToolbar();
    if (!i2) return;
    this.#m(i2);
    const s2 = this.#h = this.#f;
    if (e2) {
      this.#a.insertBefore(i2, e2);
      this.#a.insertBefore(s2, e2);
    } else this.#a.append(i2, s2);
    this.#l = t2;
    t2.toolbar = this;
  }
  addColorPicker(t2) {
    if (this.#n) return;
    this.#n = t2;
    const e2 = t2.renderButton();
    this.#m(e2);
    this.#a.append(e2, this.#f);
  }
  async addEditSignatureButton(t2) {
    const e2 = this.#d = await t2.renderEditButton(this.#r);
    this.#m(e2);
    this.#a.append(e2, this.#f);
  }
  removeButton(t2) {
    if ("comment" === t2) {
      this.#l?.removeToolbarCommentButton();
      this.#l = null;
      this.#h?.remove();
      this.#h = null;
    }
  }
  async addButton(t2, e2) {
    switch (t2) {
      case "colorPicker":
        this.addColorPicker(e2);
        break;
      case "altText":
        await this.addAltText(e2);
        break;
      case "editSignature":
        await this.addEditSignatureButton(e2);
        break;
      case "delete":
        this.addDeleteButton();
        break;
      case "comment":
        this.addComment(e2);
    }
  }
  async addButtonBefore(t2, e2, i2) {
    const s2 = this.#a.querySelector(i2);
    s2 && "comment" === t2 && this.addComment(e2, s2);
  }
  updateEditSignatureButton(t2) {
    this.#d && (this.#d.title = t2);
  }
  remove() {
    this.#s.remove();
    this.#n?.destroy();
    this.#n = null;
  }
}
class FloatingToolbar {
  #a = null;
  #s = null;
  #b;
  constructor(t2) {
    this.#b = t2;
  }
  #w() {
    const t2 = this.#s = document.createElement("div");
    t2.className = "editToolbar";
    t2.setAttribute("role", "toolbar");
    const e2 = this.#b._signal;
    e2 instanceof AbortSignal && !e2.aborted && t2.addEventListener("contextmenu", noContextMenu, { signal: e2 });
    const i2 = this.#a = document.createElement("div");
    i2.className = "buttons";
    t2.append(i2);
    this.#b.hasCommentManager() && this.#y("commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
      this.#b.commentSelection("floating_button");
    });
    this.#y("highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
      this.#b.highlightSelection("floating_button");
    });
    return t2;
  }
  #A(t2, e2) {
    let i2 = 0, s2 = 0;
    for (const n2 of t2) {
      const t3 = n2.y + n2.height;
      if (t3 < i2) continue;
      const r2 = n2.x + (e2 ? n2.width : 0);
      if (t3 > i2) {
        s2 = r2;
        i2 = t3;
      } else e2 ? r2 > s2 && (s2 = r2) : r2 < s2 && (s2 = r2);
    }
    return [e2 ? 1 - s2 : s2, i2];
  }
  show(t2, e2, i2) {
    const [s2, n2] = this.#A(e2, i2), { style: r2 } = this.#s ||= this.#w();
    t2.append(this.#s);
    r2.insetInlineEnd = 100 * s2 + "%";
    r2.top = `calc(${100 * n2}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    this.#s.remove();
  }
  #y(t2, e2, i2, s2) {
    const n2 = document.createElement("button");
    n2.classList.add("basic", t2);
    n2.tabIndex = 0;
    n2.setAttribute("data-l10n-id", e2);
    const r2 = document.createElement("span");
    n2.append(r2);
    r2.className = "visuallyHidden";
    r2.setAttribute("data-l10n-id", i2);
    const a2 = this.#b._signal;
    if (a2 instanceof AbortSignal && !a2.aborted) {
      n2.addEventListener("contextmenu", noContextMenu, { signal: a2 });
      n2.addEventListener("click", s2, { signal: a2 });
    }
    this.#a.append(n2);
  }
}
function bindEvents(t2, e2, i2) {
  for (const s2 of i2) e2.addEventListener(s2, t2[s2].bind(t2));
}
class IdManager {
  #v = 0;
  get id() {
    return `${u}${this.#v++}`;
  }
}
class ImageManager {
  #x = getUuid();
  #v = 0;
  #E = null;
  static get _isSVGFittingCanvas() {
    const t2 = new OffscreenCanvas(1, 3).getContext("2d", { willReadFrequently: true }), e2 = new Image();
    e2.src = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>';
    return shadow(this, "_isSVGFittingCanvas", e2.decode().then(() => {
      t2.drawImage(e2, 0, 0, 1, 1, 0, 0, 1, 3);
      return 0 === new Uint32Array(t2.getImageData(0, 0, 1, 1).data.buffer)[0];
    }));
  }
  async #C(t2, e2) {
    this.#E ||= /* @__PURE__ */ new Map();
    let i2 = this.#E.get(t2);
    if (null === i2) return null;
    if (i2?.bitmap) {
      i2.refCounter += 1;
      return i2;
    }
    try {
      i2 ||= { bitmap: null, id: `image_${this.#x}_${this.#v++}`, refCounter: 0, isSvg: false };
      let t3;
      if ("string" == typeof e2) {
        i2.url = e2;
        t3 = await fetchData(e2, "blob");
      } else e2 instanceof File ? t3 = i2.file = e2 : e2 instanceof Blob && (t3 = e2);
      if ("image/svg+xml" === t3.type) {
        const e3 = ImageManager._isSVGFittingCanvas, s2 = new FileReader(), n2 = new Image(), r2 = new Promise((t4, r3) => {
          n2.onload = () => {
            i2.bitmap = n2;
            i2.isSvg = true;
            t4();
          };
          s2.onload = async () => {
            const t5 = i2.svgUrl = s2.result;
            n2.src = await e3 ? `${t5}#svgView(preserveAspectRatio(none))` : t5;
          };
          n2.onerror = s2.onerror = r3;
        });
        s2.readAsDataURL(t3);
        await r2;
      } else i2.bitmap = await createImageBitmap(t3);
      i2.refCounter = 1;
    } catch (t3) {
      warn(t3);
      i2 = null;
    }
    this.#E.set(t2, i2);
    i2 && this.#E.set(i2.id, i2);
    return i2;
  }
  async getFromFile(t2) {
    const { lastModified: e2, name: i2, size: s2, type: n2 } = t2;
    return this.#C(`${e2}_${i2}_${s2}_${n2}`, t2);
  }
  async getFromUrl(t2) {
    return this.#C(t2, t2);
  }
  async getFromBlob(t2, e2) {
    const i2 = await e2;
    return this.#C(t2, i2);
  }
  async getFromId(t2) {
    this.#E ||= /* @__PURE__ */ new Map();
    const e2 = this.#E.get(t2);
    if (!e2) return null;
    if (e2.bitmap) {
      e2.refCounter += 1;
      return e2;
    }
    if (e2.file) return this.getFromFile(e2.file);
    if (e2.blobPromise) {
      const { blobPromise: t3 } = e2;
      delete e2.blobPromise;
      return this.getFromBlob(e2.id, t3);
    }
    return this.getFromUrl(e2.url);
  }
  getFromCanvas(t2, e2) {
    this.#E ||= /* @__PURE__ */ new Map();
    let i2 = this.#E.get(t2);
    if (i2?.bitmap) {
      i2.refCounter += 1;
      return i2;
    }
    const s2 = new OffscreenCanvas(e2.width, e2.height);
    s2.getContext("2d").drawImage(e2, 0, 0);
    i2 = { bitmap: s2.transferToImageBitmap(), id: `image_${this.#x}_${this.#v++}`, refCounter: 1, isSvg: false };
    this.#E.set(t2, i2);
    this.#E.set(i2.id, i2);
    return i2;
  }
  getSvgUrl(t2) {
    const e2 = this.#E.get(t2);
    return e2?.isSvg ? e2.svgUrl : null;
  }
  deleteId(t2) {
    this.#E ||= /* @__PURE__ */ new Map();
    const e2 = this.#E.get(t2);
    if (!e2) return;
    e2.refCounter -= 1;
    if (0 !== e2.refCounter) return;
    const { bitmap: i2 } = e2;
    if (!e2.url && !e2.file) {
      const t3 = new OffscreenCanvas(i2.width, i2.height);
      t3.getContext("bitmaprenderer").transferFromImageBitmap(i2);
      e2.blobPromise = t3.convertToBlob();
    }
    i2.close?.();
    e2.bitmap = null;
  }
  isValidId(t2) {
    return t2.startsWith(`image_${this.#x}_`);
  }
}
class CommandManager {
  #_ = [];
  #S = false;
  #T;
  #D = -1;
  constructor(t2 = 128) {
    this.#T = t2;
  }
  add({ cmd: t2, undo: e2, post: i2, mustExec: s2, type: n2 = NaN, overwriteIfSameType: r2 = false, keepUndo: a2 = false }) {
    s2 && t2();
    if (this.#S) return;
    const o2 = { cmd: t2, undo: e2, post: i2, type: n2 };
    if (-1 === this.#D) {
      this.#_.length > 0 && (this.#_.length = 0);
      this.#D = 0;
      this.#_.push(o2);
      return;
    }
    if (r2 && this.#_[this.#D].type === n2) {
      a2 && (o2.undo = this.#_[this.#D].undo);
      this.#_[this.#D] = o2;
      return;
    }
    const l2 = this.#D + 1;
    if (l2 === this.#T) this.#_.splice(0, 1);
    else {
      this.#D = l2;
      l2 < this.#_.length && this.#_.splice(l2);
    }
    this.#_.push(o2);
  }
  undo() {
    if (-1 === this.#D) return;
    this.#S = true;
    const { undo: t2, post: e2 } = this.#_[this.#D];
    t2();
    e2?.();
    this.#S = false;
    this.#D -= 1;
  }
  redo() {
    if (this.#D < this.#_.length - 1) {
      this.#D += 1;
      this.#S = true;
      const { cmd: t2, post: e2 } = this.#_[this.#D];
      t2();
      e2?.();
      this.#S = false;
    }
  }
  hasSomethingToUndo() {
    return -1 !== this.#D;
  }
  hasSomethingToRedo() {
    return this.#D < this.#_.length - 1;
  }
  cleanType(t2) {
    if (-1 !== this.#D) {
      for (let e2 = this.#D; e2 >= 0; e2--) if (this.#_[e2].type !== t2) {
        this.#_.splice(e2 + 1, this.#D - e2);
        this.#D = e2;
        return;
      }
      this.#_.length = 0;
      this.#D = -1;
    }
  }
  destroy() {
    this.#_ = null;
  }
}
class KeyboardManager {
  constructor(t2) {
    this.buffer = [];
    this.callbacks = /* @__PURE__ */ new Map();
    this.allKeys = /* @__PURE__ */ new Set();
    const { isMac: e2 } = util_FeatureTest.platform;
    for (const [i2, s2, n2 = {}] of t2) for (const t3 of i2) {
      const i3 = t3.startsWith("mac+");
      if (e2 && i3) {
        this.callbacks.set(t3.slice(4), { callback: s2, options: n2 });
        this.allKeys.add(t3.split("+").at(-1));
      } else if (!e2 && !i3) {
        this.callbacks.set(t3, { callback: s2, options: n2 });
        this.allKeys.add(t3.split("+").at(-1));
      }
    }
  }
  #M(t2) {
    t2.altKey && this.buffer.push("alt");
    t2.ctrlKey && this.buffer.push("ctrl");
    t2.metaKey && this.buffer.push("meta");
    t2.shiftKey && this.buffer.push("shift");
    this.buffer.push(t2.key);
    const e2 = this.buffer.join("+");
    this.buffer.length = 0;
    return e2;
  }
  exec(t2, e2) {
    if (!this.allKeys.has(e2.key)) return;
    const i2 = this.callbacks.get(this.#M(e2));
    if (!i2) return;
    const { callback: s2, options: { bubbles: n2 = false, args: r2 = [], checker: a2 = null } } = i2;
    if (!a2 || a2(t2, e2)) {
      s2.bind(t2, ...r2, e2)();
      n2 || stopEvent(e2);
    }
  }
}
class ColorManager {
  static _colorsMapping = /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
  get _colors() {
    const t2 = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    !(function getColorValues(t3) {
      const e2 = document.createElement("span");
      e2.style.visibility = "hidden";
      e2.style.colorScheme = "only light";
      document.body.append(e2);
      for (const i2 of t3.keys()) {
        e2.style.color = i2;
        const s2 = window.getComputedStyle(e2).color;
        t3.set(i2, getRGB(s2));
      }
      e2.remove();
    })(t2);
    return shadow(this, "_colors", t2);
  }
  convert(t2) {
    const e2 = getRGB(t2);
    if (!window.matchMedia("(forced-colors: active)").matches) return e2;
    for (const [t3, i2] of this._colors) if (i2.every((t4, i3) => t4 === e2[i3])) return ColorManager._colorsMapping.get(t3);
    return e2;
  }
  getHexCode(t2) {
    const e2 = this._colors.get(t2);
    return e2 ? Util.makeHexColor(...e2) : t2;
  }
}
class AnnotationEditorUIManager {
  #k = new AbortController();
  #P = null;
  #I = null;
  #F = /* @__PURE__ */ new Map();
  #R = /* @__PURE__ */ new Map();
  #L = null;
  #B = null;
  #O = null;
  #N = new CommandManager();
  #U = null;
  #H = null;
  #z = null;
  #G = 0;
  #W = /* @__PURE__ */ new Set();
  #V = null;
  #$ = null;
  #j = /* @__PURE__ */ new Set();
  _editorUndoBar = null;
  #q = false;
  #X = false;
  #K = false;
  #Y = null;
  #Q = null;
  #J = null;
  #Z = null;
  #tt = false;
  #et = null;
  #it = new IdManager();
  #st = false;
  #nt = false;
  #rt = false;
  #at = null;
  #ot = null;
  #lt = null;
  #ht = null;
  #dt = null;
  #ct = p.NONE;
  #ut = /* @__PURE__ */ new Set();
  #pt = null;
  #gt = null;
  #mt = null;
  #ft = null;
  #bt = null;
  #wt = { isEditing: false, isEmpty: true, hasSomethingToUndo: false, hasSomethingToRedo: false, hasSelectedEditor: false, hasSelectedText: false };
  #yt = [0, 0];
  #At = null;
  #vt = null;
  #xt = null;
  #Et = null;
  #Ct = null;
  static TRANSLATE_SMALL = 1;
  static TRANSLATE_BIG = 10;
  static get _keyboardManager() {
    const t2 = AnnotationEditorUIManager.prototype, arrowChecker = (t3) => t3.#vt.contains(document.activeElement) && "BUTTON" !== document.activeElement.tagName && t3.hasSomethingToControl(), textInputChecker = (t3, { target: e3 }) => {
      if (e3 instanceof HTMLInputElement) {
        const { type: t4 } = e3;
        return "text" !== t4 && "number" !== t4;
      }
      return true;
    }, e2 = this.TRANSLATE_SMALL, i2 = this.TRANSLATE_BIG;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+a", "mac+meta+a"], t2.selectAll, { checker: textInputChecker }], [["ctrl+z", "mac+meta+z"], t2.undo, { checker: textInputChecker }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t2.redo, { checker: textInputChecker }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t2.delete, { checker: textInputChecker }], [["Enter", "mac+Enter"], t2.addNewEditorFromKeyboard, { checker: (t3, { target: e3 }) => !(e3 instanceof HTMLButtonElement) && t3.#vt.contains(e3) && !t3.isEnterHandled }], [[" ", "mac+ "], t2.addNewEditorFromKeyboard, { checker: (t3, { target: e3 }) => !(e3 instanceof HTMLButtonElement) && t3.#vt.contains(document.activeElement) }], [["Escape", "mac+Escape"], t2.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t2.translateSelectedEditors, { args: [-e2, 0], checker: arrowChecker }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t2.translateSelectedEditors, { args: [-i2, 0], checker: arrowChecker }], [["ArrowRight", "mac+ArrowRight"], t2.translateSelectedEditors, { args: [e2, 0], checker: arrowChecker }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t2.translateSelectedEditors, { args: [i2, 0], checker: arrowChecker }], [["ArrowUp", "mac+ArrowUp"], t2.translateSelectedEditors, { args: [0, -e2], checker: arrowChecker }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t2.translateSelectedEditors, { args: [0, -i2], checker: arrowChecker }], [["ArrowDown", "mac+ArrowDown"], t2.translateSelectedEditors, { args: [0, e2], checker: arrowChecker }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t2.translateSelectedEditors, { args: [0, i2], checker: arrowChecker }]]));
  }
  constructor(t2, e2, i2, s2, n2, r2, a2, o2, l2, h2, d2, c2, u2, p2, g2, m2) {
    const f2 = this._signal = this.#k.signal;
    this.#vt = t2;
    this.#xt = e2;
    this.#Et = i2;
    this.#L = s2;
    this.#U = n2;
    this.#gt = r2;
    this.#bt = o2;
    this._eventBus = a2;
    a2._on("editingaction", this.onEditingAction.bind(this), { signal: f2 });
    a2._on("pagechanging", this.onPageChanging.bind(this), { signal: f2 });
    a2._on("scalechanging", this.onScaleChanging.bind(this), { signal: f2 });
    a2._on("rotationchanging", this.onRotationChanging.bind(this), { signal: f2 });
    a2._on("setpreference", this.onSetPreference.bind(this), { signal: f2 });
    a2._on("switchannotationeditorparams", (t3) => this.updateParams(t3.type, t3.value), { signal: f2 });
    window.addEventListener("pointerdown", () => {
      this.#nt = true;
    }, { capture: true, signal: f2 });
    window.addEventListener("pointerup", () => {
      this.#nt = false;
    }, { capture: true, signal: f2 });
    this.#_t();
    this.#St();
    this.#Tt();
    this.#B = o2.annotationStorage;
    this.#Y = o2.filterFactory;
    this.#mt = l2;
    this.#Z = h2 || null;
    this.#q = d2;
    this.#X = c2;
    this.#K = u2;
    this.#dt = p2 || null;
    this.viewParameters = { realScale: PixelsPerInch.PDF_TO_CSS_UNITS, rotation: 0 };
    this.isShiftKeyDown = false;
    this._editorUndoBar = g2 || null;
    this._supportsPinchToZoom = false !== m2;
    n2?.setSidebarUiManager(this);
  }
  destroy() {
    this.#Ct?.resolve();
    this.#Ct = null;
    this.#k?.abort();
    this.#k = null;
    this._signal = null;
    for (const t2 of this.#R.values()) t2.destroy();
    this.#R.clear();
    this.#F.clear();
    this.#j.clear();
    this.#ht?.clear();
    this.#P = null;
    this.#ut.clear();
    this.#N.destroy();
    this.#L?.destroy();
    this.#U?.destroy();
    this.#gt?.destroy();
    this.#et?.hide();
    this.#et = null;
    this.#lt?.destroy();
    this.#lt = null;
    this.#I = null;
    if (this.#Q) {
      clearTimeout(this.#Q);
      this.#Q = null;
    }
    if (this.#At) {
      clearTimeout(this.#At);
      this.#At = null;
    }
    this._editorUndoBar?.destroy();
    this.#bt = null;
  }
  combinedSignal(t2) {
    return AbortSignal.any([this._signal, t2.signal]);
  }
  get mlManager() {
    return this.#dt;
  }
  get useNewAltTextFlow() {
    return this.#X;
  }
  get useNewAltTextWhenAddingImage() {
    return this.#K;
  }
  get hcmFilter() {
    return shadow(this, "hcmFilter", this.#mt ? this.#Y.addHCMFilter(this.#mt.foreground, this.#mt.background) : "none");
  }
  get direction() {
    return shadow(this, "direction", getComputedStyle(this.#vt).direction);
  }
  get _highlightColors() {
    return shadow(this, "_highlightColors", this.#Z ? new Map(this.#Z.split(",").map((t2) => {
      (t2 = t2.split("=").map((t3) => t3.trim()))[1] = t2[1].toUpperCase();
      return t2;
    })) : null);
  }
  get highlightColors() {
    const { _highlightColors: t2 } = this;
    if (!t2) return shadow(this, "highlightColors", null);
    const e2 = /* @__PURE__ */ new Map(), i2 = !!this.#mt;
    for (const [s2, n2] of t2) {
      const t3 = s2.endsWith("_HCM");
      i2 && t3 ? e2.set(s2.replace("_HCM", ""), n2) : i2 || t3 || e2.set(s2, n2);
    }
    return shadow(this, "highlightColors", e2);
  }
  get highlightColorNames() {
    return shadow(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t2) => t2.reverse())) : null);
  }
  getNonHCMColor(t2) {
    if (!this._highlightColors) return t2;
    const e2 = this.highlightColorNames.get(t2);
    return this._highlightColors.get(e2) || t2;
  }
  getNonHCMColorName(t2) {
    return this.highlightColorNames.get(t2) || t2;
  }
  setCurrentDrawingSession(t2) {
    if (t2) {
      this.unselectAll();
      this.disableUserSelect(true);
    } else this.disableUserSelect(false);
    this.#z = t2;
  }
  setMainHighlightColorPicker(t2) {
    this.#lt = t2;
  }
  editAltText(t2, e2 = false) {
    this.#L?.editAltText(this, t2, e2);
  }
  hasCommentManager() {
    return !!this.#U;
  }
  editComment(t2, e2, i2, s2) {
    this.#U?.showDialog(this, t2, e2, i2, s2);
  }
  selectComment(t2, e2) {
    const i2 = this.#R.get(t2), s2 = i2?.getEditorByUID(e2);
    s2?.toggleComment(true, true);
  }
  updateComment(t2) {
    this.#U?.updateComment(t2.getData());
  }
  updatePopupColor(t2) {
    this.#U?.updatePopupColor(t2);
  }
  removeComment(t2) {
    this.#U?.removeComments([t2.uid]);
  }
  toggleComment(t2, e2, i2 = void 0) {
    this.#U?.toggleCommentPopup(t2, e2, i2);
  }
  makeCommentColor(t2, e2) {
    return t2 && this.#U?.makeCommentColor(t2, e2) || null;
  }
  getCommentDialogElement() {
    return this.#U?.dialogElement || null;
  }
  async waitForEditorsRendered(t2) {
    if (this.#R.has(t2 - 1)) return;
    const { resolve: e2, promise: i2 } = Promise.withResolvers(), onEditorsRendered = (i3) => {
      if (i3.pageNumber === t2) {
        this._eventBus._off("editorsrendered", onEditorsRendered);
        e2();
      }
    };
    this._eventBus.on("editorsrendered", onEditorsRendered);
    await i2;
  }
  getSignature(t2) {
    this.#gt?.getSignature({ uiManager: this, editor: t2 });
  }
  get signatureManager() {
    return this.#gt;
  }
  switchToMode(t2, e2) {
    this._eventBus.on("annotationeditormodechanged", e2, { once: true, signal: this._signal });
    this._eventBus.dispatch("showannotationeditorui", { source: this, mode: t2 });
  }
  setPreference(t2, e2) {
    this._eventBus.dispatch("setpreference", { source: this, name: t2, value: e2 });
  }
  onSetPreference({ name: t2, value: e2 }) {
    if ("enableNewAltTextWhenAddingImage" === t2) this.#K = e2;
  }
  onPageChanging({ pageNumber: t2 }) {
    this.#G = t2 - 1;
  }
  focusMainContainer() {
    this.#vt.focus();
  }
  findParent(t2, e2) {
    for (const i2 of this.#R.values()) {
      const { x: s2, y: n2, width: r2, height: a2 } = i2.div.getBoundingClientRect();
      if (t2 >= s2 && t2 <= s2 + r2 && e2 >= n2 && e2 <= n2 + a2) return i2;
    }
    return null;
  }
  disableUserSelect(t2 = false) {
    this.#xt.classList.toggle("noUserSelect", t2);
  }
  addShouldRescale(t2) {
    this.#j.add(t2);
  }
  removeShouldRescale(t2) {
    this.#j.delete(t2);
  }
  onScaleChanging({ scale: t2 }) {
    this.commitOrRemove();
    this.viewParameters.realScale = t2 * PixelsPerInch.PDF_TO_CSS_UNITS;
    for (const t3 of this.#j) t3.onScaleChanging();
    this.#z?.onScaleChanging();
  }
  onRotationChanging({ pagesRotation: t2 }) {
    this.commitOrRemove();
    this.viewParameters.rotation = t2;
  }
  #Dt({ anchorNode: t2 }) {
    return t2.nodeType === Node.TEXT_NODE ? t2.parentElement : t2;
  }
  #Mt(t2) {
    const { currentLayer: e2 } = this;
    if (e2.hasTextLayer(t2)) return e2;
    for (const e3 of this.#R.values()) if (e3.hasTextLayer(t2)) return e3;
    return null;
  }
  highlightSelection(t2 = "", e2 = false) {
    const i2 = document.getSelection();
    if (!i2 || i2.isCollapsed) return;
    const { anchorNode: s2, anchorOffset: n2, focusNode: r2, focusOffset: a2 } = i2, o2 = i2.toString(), l2 = this.#Dt(i2).closest(".textLayer"), h2 = this.getSelectionBoxes(l2);
    if (!h2) return;
    i2.empty();
    const d2 = this.#Mt(l2), c2 = this.#ct === p.NONE, callback = () => {
      const i3 = d2?.createAndAddNewEditor({ x: 0, y: 0 }, false, { methodOfCreation: t2, boxes: h2, anchorNode: s2, anchorOffset: n2, focusNode: r2, focusOffset: a2, text: o2 });
      c2 && this.showAllEditors("highlight", true, true);
      e2 && i3?.editComment();
    };
    c2 ? this.switchToMode(p.HIGHLIGHT, callback) : callback();
  }
  commentSelection(t2 = "") {
    this.highlightSelection(t2, true);
  }
  #kt() {
    const t2 = document.getSelection();
    if (!t2 || t2.isCollapsed) return;
    const e2 = this.#Dt(t2).closest(".textLayer"), i2 = this.getSelectionBoxes(e2);
    if (i2) {
      this.#et ||= new FloatingToolbar(this);
      this.#et.show(e2, i2, "ltr" === this.direction);
    }
  }
  getAndRemoveDataFromAnnotationStorage(t2) {
    if (!this.#B) return null;
    const e2 = `${u}${t2}`, i2 = this.#B.getRawValue(e2);
    i2 && this.#B.remove(e2);
    return i2;
  }
  addToAnnotationStorage(t2) {
    t2.isEmpty() || !this.#B || this.#B.has(t2.id) || this.#B.setValue(t2.id, t2);
  }
  a11yAlert(t2, e2 = null) {
    const i2 = this.#Et;
    if (i2) {
      i2.setAttribute("data-l10n-id", t2);
      e2 ? i2.setAttribute("data-l10n-args", JSON.stringify(e2)) : i2.removeAttribute("data-l10n-args");
    }
  }
  #Pt() {
    const t2 = document.getSelection();
    if (!t2 || t2.isCollapsed) {
      if (this.#pt) {
        this.#et?.hide();
        this.#pt = null;
        this.#It({ hasSelectedText: false });
      }
      return;
    }
    const { anchorNode: e2 } = t2;
    if (e2 === this.#pt) return;
    const i2 = this.#Dt(t2).closest(".textLayer");
    if (i2) {
      this.#et?.hide();
      this.#pt = e2;
      this.#It({ hasSelectedText: true });
      if (this.#ct === p.HIGHLIGHT || this.#ct === p.NONE) {
        this.#ct === p.HIGHLIGHT && this.showAllEditors("highlight", true, true);
        this.#tt = this.isShiftKeyDown;
        if (!this.isShiftKeyDown) {
          const t3 = this.#ct === p.HIGHLIGHT ? this.#Mt(i2) : null;
          t3?.toggleDrawing();
          if (this.#nt) {
            const e3 = new AbortController(), i3 = this.combinedSignal(e3), pointerup = (i4) => {
              if ("pointerup" !== i4.type || 0 === i4.button) {
                e3.abort();
                t3?.toggleDrawing(true);
                "pointerup" === i4.type && this.#Ft("main_toolbar");
              }
            };
            window.addEventListener("pointerup", pointerup, { signal: i3 });
            window.addEventListener("blur", pointerup, { signal: i3 });
          } else {
            t3?.toggleDrawing(true);
            this.#Ft("main_toolbar");
          }
        }
      }
    } else if (this.#pt) {
      this.#et?.hide();
      this.#pt = null;
      this.#It({ hasSelectedText: false });
    }
  }
  #Ft(t2 = "") {
    this.#ct === p.HIGHLIGHT ? this.highlightSelection(t2) : this.#q && this.#kt();
  }
  #_t() {
    document.addEventListener("selectionchange", this.#Pt.bind(this), { signal: this._signal });
  }
  #Rt() {
    if (this.#J) return;
    this.#J = new AbortController();
    const t2 = this.combinedSignal(this.#J);
    window.addEventListener("focus", this.focus.bind(this), { signal: t2 });
    window.addEventListener("blur", this.blur.bind(this), { signal: t2 });
  }
  #Lt() {
    this.#J?.abort();
    this.#J = null;
  }
  blur() {
    this.isShiftKeyDown = false;
    if (this.#tt) {
      this.#tt = false;
      this.#Ft("main_toolbar");
    }
    if (!this.hasSelection) return;
    const { activeElement: t2 } = document;
    for (const e2 of this.#ut) if (e2.div.contains(t2)) {
      this.#ot = [e2, t2];
      e2._focusEventsAllowed = false;
      break;
    }
  }
  focus() {
    if (!this.#ot) return;
    const [t2, e2] = this.#ot;
    this.#ot = null;
    e2.addEventListener("focusin", () => {
      t2._focusEventsAllowed = true;
    }, { once: true, signal: this._signal });
    e2.focus();
  }
  #Tt() {
    if (this.#at) return;
    this.#at = new AbortController();
    const t2 = this.combinedSignal(this.#at);
    window.addEventListener("keydown", this.keydown.bind(this), { signal: t2 });
    window.addEventListener("keyup", this.keyup.bind(this), { signal: t2 });
  }
  #Bt() {
    this.#at?.abort();
    this.#at = null;
  }
  #Ot() {
    if (this.#H) return;
    this.#H = new AbortController();
    const t2 = this.combinedSignal(this.#H);
    document.addEventListener("copy", this.copy.bind(this), { signal: t2 });
    document.addEventListener("cut", this.cut.bind(this), { signal: t2 });
    document.addEventListener("paste", this.paste.bind(this), { signal: t2 });
  }
  #Nt() {
    this.#H?.abort();
    this.#H = null;
  }
  #St() {
    const t2 = this._signal;
    document.addEventListener("dragover", this.dragOver.bind(this), { signal: t2 });
    document.addEventListener("drop", this.drop.bind(this), { signal: t2 });
  }
  addEditListeners() {
    this.#Tt();
    this.#Ot();
  }
  removeEditListeners() {
    this.#Bt();
    this.#Nt();
  }
  dragOver(t2) {
    for (const { type: e2 } of t2.dataTransfer.items) for (const i2 of this.#$) if (i2.isHandlingMimeForPasting(e2)) {
      t2.dataTransfer.dropEffect = "copy";
      t2.preventDefault();
      return;
    }
  }
  drop(t2) {
    for (const e2 of t2.dataTransfer.items) for (const i2 of this.#$) if (i2.isHandlingMimeForPasting(e2.type)) {
      i2.paste(e2, this.currentLayer);
      t2.preventDefault();
      return;
    }
  }
  copy(t2) {
    t2.preventDefault();
    this.#P?.commitOrRemove();
    if (!this.hasSelection) return;
    const e2 = [];
    for (const t3 of this.#ut) {
      const i2 = t3.serialize(true);
      i2 && e2.push(i2);
    }
    0 !== e2.length && t2.clipboardData.setData("application/pdfjs", JSON.stringify(e2));
  }
  cut(t2) {
    this.copy(t2);
    this.delete();
  }
  async paste(t2) {
    t2.preventDefault();
    const { clipboardData: e2 } = t2;
    for (const t3 of e2.items) for (const e3 of this.#$) if (e3.isHandlingMimeForPasting(t3.type)) {
      e3.paste(t3, this.currentLayer);
      return;
    }
    let i2 = e2.getData("application/pdfjs");
    if (!i2) return;
    try {
      i2 = JSON.parse(i2);
    } catch (t3) {
      warn(`paste: "${t3.message}".`);
      return;
    }
    if (!Array.isArray(i2)) return;
    this.unselectAll();
    const s2 = this.currentLayer;
    try {
      const t3 = [];
      for (const e3 of i2) {
        const i3 = await s2.deserialize(e3);
        if (!i3) return;
        t3.push(i3);
      }
      const cmd = () => {
        for (const e3 of t3) this.#Ut(e3);
        this.#Ht(t3);
      }, undo = () => {
        for (const e3 of t3) e3.remove();
      };
      this.addCommands({ cmd, undo, mustExec: true });
    } catch (t3) {
      warn(`paste: "${t3.message}".`);
    }
  }
  keydown(t2) {
    this.isShiftKeyDown || "Shift" !== t2.key || (this.isShiftKeyDown = true);
    this.#ct === p.NONE || this.isEditorHandlingKeyboard || AnnotationEditorUIManager._keyboardManager.exec(this, t2);
  }
  keyup(t2) {
    if (this.isShiftKeyDown && "Shift" === t2.key) {
      this.isShiftKeyDown = false;
      if (this.#tt) {
        this.#tt = false;
        this.#Ft("main_toolbar");
      }
    }
  }
  onEditingAction({ name: t2 }) {
    switch (t2) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t2]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
      case "commentSelection":
        this.commentSelection("context_menu");
    }
  }
  #It(t2) {
    if (Object.entries(t2).some(([t3, e2]) => this.#wt[t3] !== e2)) {
      this._eventBus.dispatch("annotationeditorstateschanged", { source: this, details: Object.assign(this.#wt, t2) });
      this.#ct === p.HIGHLIGHT && false === t2.hasSelectedEditor && this.#zt([[g.HIGHLIGHT_FREE, true]]);
    }
  }
  #zt(t2) {
    this._eventBus.dispatch("annotationeditorparamschanged", { source: this, details: t2 });
  }
  setEditingState(t2) {
    if (t2) {
      this.#Rt();
      this.#Ot();
      this.#It({ isEditing: this.#ct !== p.NONE, isEmpty: this.#Gt(), hasSomethingToUndo: this.#N.hasSomethingToUndo(), hasSomethingToRedo: this.#N.hasSomethingToRedo(), hasSelectedEditor: false });
    } else {
      this.#Lt();
      this.#Nt();
      this.#It({ isEditing: false });
      this.disableUserSelect(false);
    }
  }
  registerEditorTypes(t2) {
    if (!this.#$) {
      this.#$ = t2;
      for (const t3 of this.#$) this.#zt(t3.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return this.#it.id;
  }
  get currentLayer() {
    return this.#R.get(this.#G);
  }
  getLayer(t2) {
    return this.#R.get(t2);
  }
  get currentPageIndex() {
    return this.#G;
  }
  addLayer(t2) {
    this.#R.set(t2.pageIndex, t2);
    this.#st ? t2.enable() : t2.disable();
  }
  removeLayer(t2) {
    this.#R.delete(t2.pageIndex);
  }
  async updateMode(t2, e2 = null, i2 = false, s2 = false, n2 = false) {
    if (this.#ct !== t2) {
      if (this.#Ct) {
        await this.#Ct.promise;
        if (!this.#Ct) return;
      }
      this.#Ct = Promise.withResolvers();
      this.#z?.commitOrRemove();
      this.#ct === p.POPUP && this.#U?.hideSidebar();
      this.#U?.destroyPopup();
      this.#ct = t2;
      if (t2 !== p.NONE) {
        for (const t3 of this.#F.values()) t3.addStandaloneCommentButton();
        t2 === p.SIGNATURE && await this.#gt?.loadSignatures();
        this.setEditingState(true);
        await this.#Wt();
        this.unselectAll();
        for (const e3 of this.#R.values()) e3.updateMode(t2);
        if (t2 === p.POPUP) {
          this.#I ||= await this.#bt.getAnnotationsByType(new Set(this.#$.map((t4) => t4._editorType)));
          const t3 = /* @__PURE__ */ new Set(), e3 = [];
          for (const i3 of this.#F.values()) {
            const { annotationElementId: s3, hasComment: n3, deleted: r2 } = i3;
            s3 && t3.add(s3);
            n3 && !r2 && e3.push(i3.getData());
          }
          for (const i3 of this.#I) {
            const { id: s3, popupRef: n3, contentsObj: r2 } = i3;
            n3 && r2?.str && !t3.has(s3) && !this.#W.has(s3) && e3.push(i3);
          }
          this.#U?.showSidebar(e3);
        }
        if (e2) {
          for (const t3 of this.#F.values()) if (t3.uid === e2) {
            this.setSelected(t3);
            n2 ? t3.editComment() : s2 ? t3.enterInEditMode() : t3.focus();
          } else t3.unselect();
          this.#Ct.resolve();
        } else {
          i2 && this.addNewEditorFromKeyboard();
          this.#Ct.resolve();
        }
      } else {
        this.setEditingState(false);
        this.#Vt();
        for (const t3 of this.#F.values()) t3.hideStandaloneCommentButton();
        this._editorUndoBar?.hide();
        this.toggleComment(null);
        this.#Ct.resolve();
      }
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t2) {
    t2.mode !== this.#ct && this._eventBus.dispatch("switchannotationeditormode", { source: this, ...t2 });
  }
  updateParams(t2, e2) {
    if (this.#$) {
      switch (t2) {
        case g.CREATE:
          this.currentLayer.addNewEditor(e2);
          return;
        case g.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: { type: "highlight", action: "toggle_visibility" } } });
          (this.#ft ||= /* @__PURE__ */ new Map()).set(t2, e2);
          this.showAllEditors("highlight", e2);
      }
      if (this.hasSelection) for (const i2 of this.#ut) i2.updateParams(t2, e2);
      else for (const i2 of this.#$) i2.updateDefaultParams(t2, e2);
    }
  }
  showAllEditors(t2, e2, i2 = false) {
    for (const i3 of this.#F.values()) i3.editorType === t2 && i3.show(e2);
    (this.#ft?.get(g.HIGHLIGHT_SHOW_ALL) ?? true) !== e2 && this.#zt([[g.HIGHLIGHT_SHOW_ALL, e2]]);
  }
  enableWaiting(t2 = false) {
    if (this.#rt !== t2) {
      this.#rt = t2;
      for (const e2 of this.#R.values()) {
        t2 ? e2.disableClick() : e2.enableClick();
        e2.div.classList.toggle("waiting", t2);
      }
    }
  }
  async #Wt() {
    if (!this.#st) {
      this.#st = true;
      const t2 = [];
      for (const e2 of this.#R.values()) t2.push(e2.enable());
      await Promise.all(t2);
      for (const t3 of this.#F.values()) t3.enable();
    }
  }
  #Vt() {
    this.unselectAll();
    if (this.#st) {
      this.#st = false;
      for (const t2 of this.#R.values()) t2.disable();
      for (const t2 of this.#F.values()) t2.disable();
    }
  }
  *getEditors(t2) {
    for (const e2 of this.#F.values()) e2.pageIndex === t2 && (yield e2);
  }
  getEditor(t2) {
    return this.#F.get(t2);
  }
  addEditor(t2) {
    this.#F.set(t2.id, t2);
  }
  removeEditor(t2) {
    if (t2.div.contains(document.activeElement)) {
      this.#Q && clearTimeout(this.#Q);
      this.#Q = setTimeout(() => {
        this.focusMainContainer();
        this.#Q = null;
      }, 0);
    }
    this.#F.delete(t2.id);
    t2.annotationElementId && this.#ht?.delete(t2.annotationElementId);
    this.unselect(t2);
    t2.annotationElementId && this.#W.has(t2.annotationElementId) || this.#B?.remove(t2.id);
  }
  addDeletedAnnotationElement(t2) {
    this.#W.add(t2.annotationElementId);
    this.addChangedExistingAnnotation(t2);
    t2.deleted = true;
  }
  isDeletedAnnotationElement(t2) {
    return this.#W.has(t2);
  }
  removeDeletedAnnotationElement(t2) {
    this.#W.delete(t2.annotationElementId);
    this.removeChangedExistingAnnotation(t2);
    t2.deleted = false;
  }
  #Ut(t2) {
    const e2 = this.#R.get(t2.pageIndex);
    if (e2) e2.addOrRebuild(t2);
    else {
      this.addEditor(t2);
      this.addToAnnotationStorage(t2);
    }
  }
  setActiveEditor(t2) {
    if (this.#P !== t2) {
      this.#P = t2;
      t2 && this.#zt(t2.propertiesToUpdate);
    }
  }
  get #$t() {
    let t2 = null;
    for (t2 of this.#ut) ;
    return t2;
  }
  updateUI(t2) {
    this.#$t === t2 && this.#zt(t2.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t2) {
    this.#zt(t2.defaultPropertiesToUpdate);
  }
  toggleSelected(t2) {
    if (this.#ut.has(t2)) {
      this.#ut.delete(t2);
      t2.unselect();
      this.#It({ hasSelectedEditor: this.hasSelection });
    } else {
      this.#ut.add(t2);
      t2.select();
      this.#zt(t2.propertiesToUpdate);
      this.#It({ hasSelectedEditor: true });
    }
  }
  setSelected(t2) {
    this.updateToolbar({ mode: t2.mode, editId: t2.id });
    this.#z?.commitOrRemove();
    for (const e2 of this.#ut) e2 !== t2 && e2.unselect();
    this.#ut.clear();
    this.#ut.add(t2);
    t2.select();
    this.#zt(t2.propertiesToUpdate);
    this.#It({ hasSelectedEditor: true });
  }
  isSelected(t2) {
    return this.#ut.has(t2);
  }
  get firstSelectedEditor() {
    return this.#ut.values().next().value;
  }
  unselect(t2) {
    t2.unselect();
    this.#ut.delete(t2);
    this.#It({ hasSelectedEditor: this.hasSelection });
  }
  get hasSelection() {
    return 0 !== this.#ut.size;
  }
  get isEnterHandled() {
    return 1 === this.#ut.size && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    this.#N.undo();
    this.#It({ hasSomethingToUndo: this.#N.hasSomethingToUndo(), hasSomethingToRedo: true, isEmpty: this.#Gt() });
    this._editorUndoBar?.hide();
  }
  redo() {
    this.#N.redo();
    this.#It({ hasSomethingToUndo: true, hasSomethingToRedo: this.#N.hasSomethingToRedo(), isEmpty: this.#Gt() });
  }
  addCommands(t2) {
    this.#N.add(t2);
    this.#It({ hasSomethingToUndo: true, hasSomethingToRedo: false, isEmpty: this.#Gt() });
  }
  cleanUndoStack(t2) {
    this.#N.cleanType(t2);
  }
  #Gt() {
    if (0 === this.#F.size) return true;
    if (1 === this.#F.size) for (const t2 of this.#F.values()) return t2.isEmpty();
    return false;
  }
  delete() {
    this.commitOrRemove();
    const t2 = this.currentLayer?.endDrawingSession(true);
    if (!this.hasSelection && !t2) return;
    const e2 = t2 ? [t2] : [...this.#ut], undo = () => {
      for (const t3 of e2) this.#Ut(t3);
    };
    this.addCommands({ cmd: () => {
      this._editorUndoBar?.show(undo, 1 === e2.length ? e2[0].editorType : e2.length);
      for (const t3 of e2) t3.remove();
    }, undo, mustExec: true });
  }
  commitOrRemove() {
    this.#P?.commitOrRemove();
  }
  hasSomethingToControl() {
    return this.#P || this.hasSelection;
  }
  #Ht(t2) {
    for (const t3 of this.#ut) t3.unselect();
    this.#ut.clear();
    for (const e2 of t2) if (!e2.isEmpty()) {
      this.#ut.add(e2);
      e2.select();
    }
    this.#It({ hasSelectedEditor: this.hasSelection });
  }
  selectAll() {
    for (const t2 of this.#ut) t2.commit();
    this.#Ht(this.#F.values());
  }
  unselectAll() {
    if (this.#P) {
      this.#P.commitOrRemove();
      if (this.#ct !== p.NONE) return;
    }
    if (!this.#z?.commitOrRemove() && this.hasSelection) {
      for (const t2 of this.#ut) t2.unselect();
      this.#ut.clear();
      this.#It({ hasSelectedEditor: false });
    }
  }
  translateSelectedEditors(t2, e2, i2 = false) {
    i2 || this.commitOrRemove();
    if (!this.hasSelection) return;
    this.#yt[0] += t2;
    this.#yt[1] += e2;
    const [s2, n2] = this.#yt, r2 = [...this.#ut];
    this.#At && clearTimeout(this.#At);
    this.#At = setTimeout(() => {
      this.#At = null;
      this.#yt[0] = this.#yt[1] = 0;
      this.addCommands({ cmd: () => {
        for (const t3 of r2) if (this.#F.has(t3.id)) {
          t3.translateInPage(s2, n2);
          t3.translationDone();
        }
      }, undo: () => {
        for (const t3 of r2) if (this.#F.has(t3.id)) {
          t3.translateInPage(-s2, -n2);
          t3.translationDone();
        }
      }, mustExec: false });
    }, 1e3);
    for (const i3 of r2) {
      i3.translateInPage(t2, e2);
      i3.translationDone();
    }
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(true);
      this.#V = /* @__PURE__ */ new Map();
      for (const t2 of this.#ut) this.#V.set(t2, { savedX: t2.x, savedY: t2.y, savedPageIndex: t2.pageIndex, newX: 0, newY: 0, newPageIndex: -1 });
    }
  }
  endDragSession() {
    if (!this.#V) return false;
    this.disableUserSelect(false);
    const t2 = this.#V;
    this.#V = null;
    let e2 = false;
    for (const [{ x: i2, y: s2, pageIndex: n2 }, r2] of t2) {
      r2.newX = i2;
      r2.newY = s2;
      r2.newPageIndex = n2;
      e2 ||= i2 !== r2.savedX || s2 !== r2.savedY || n2 !== r2.savedPageIndex;
    }
    if (!e2) return false;
    const move = (t3, e3, i2, s2) => {
      if (this.#F.has(t3.id)) {
        const n2 = this.#R.get(s2);
        if (n2) t3._setParentAndPosition(n2, e3, i2);
        else {
          t3.pageIndex = s2;
          t3.x = e3;
          t3.y = i2;
        }
      }
    };
    this.addCommands({ cmd: () => {
      for (const [e3, { newX: i2, newY: s2, newPageIndex: n2 }] of t2) move(e3, i2, s2, n2);
    }, undo: () => {
      for (const [e3, { savedX: i2, savedY: s2, savedPageIndex: n2 }] of t2) move(e3, i2, s2, n2);
    }, mustExec: true });
    return true;
  }
  dragSelectedEditors(t2, e2) {
    if (this.#V) for (const i2 of this.#V.keys()) i2.drag(t2, e2);
  }
  rebuild(t2) {
    if (null === t2.parent) {
      const e2 = this.getLayer(t2.pageIndex);
      if (e2) {
        e2.changeParent(t2);
        e2.addOrRebuild(t2);
      } else {
        this.addEditor(t2);
        this.addToAnnotationStorage(t2);
        t2.rebuild();
      }
    } else t2.parent.addOrRebuild(t2);
  }
  get isEditorHandlingKeyboard() {
    return this.getActive()?.shouldGetKeyboardEvents() || 1 === this.#ut.size && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t2) {
    return this.#P === t2;
  }
  getActive() {
    return this.#P;
  }
  getMode() {
    return this.#ct;
  }
  isEditingMode() {
    return this.#ct !== p.NONE;
  }
  get imageManager() {
    return shadow(this, "imageManager", new ImageManager());
  }
  getSelectionBoxes(t2) {
    if (!t2) return null;
    const e2 = document.getSelection();
    for (let i3 = 0, s3 = e2.rangeCount; i3 < s3; i3++) if (!t2.contains(e2.getRangeAt(i3).commonAncestorContainer)) return null;
    const { x: i2, y: s2, width: n2, height: r2 } = t2.getBoundingClientRect();
    let a2;
    switch (t2.getAttribute("data-main-rotation")) {
      case "90":
        a2 = (t3, e3, a3, o3) => ({ x: (e3 - s2) / r2, y: 1 - (t3 + a3 - i2) / n2, width: o3 / r2, height: a3 / n2 });
        break;
      case "180":
        a2 = (t3, e3, a3, o3) => ({ x: 1 - (t3 + a3 - i2) / n2, y: 1 - (e3 + o3 - s2) / r2, width: a3 / n2, height: o3 / r2 });
        break;
      case "270":
        a2 = (t3, e3, a3, o3) => ({ x: 1 - (e3 + o3 - s2) / r2, y: (t3 - i2) / n2, width: o3 / r2, height: a3 / n2 });
        break;
      default:
        a2 = (t3, e3, a3, o3) => ({ x: (t3 - i2) / n2, y: (e3 - s2) / r2, width: a3 / n2, height: o3 / r2 });
    }
    const o2 = [];
    for (let t3 = 0, i3 = e2.rangeCount; t3 < i3; t3++) {
      const i4 = e2.getRangeAt(t3);
      if (!i4.collapsed) for (const { x: t4, y: e3, width: s3, height: n3 } of i4.getClientRects()) 0 !== s3 && 0 !== n3 && o2.push(a2(t4, e3, s3, n3));
    }
    return 0 === o2.length ? null : o2;
  }
  addChangedExistingAnnotation({ annotationElementId: t2, id: e2 }) {
    (this.#O ||= /* @__PURE__ */ new Map()).set(t2, e2);
  }
  removeChangedExistingAnnotation({ annotationElementId: t2 }) {
    this.#O?.delete(t2);
  }
  renderAnnotationElement(t2) {
    const e2 = this.#O?.get(t2.data.id);
    if (!e2) return;
    const i2 = this.#B.getRawValue(e2);
    i2 && (this.#ct !== p.NONE || i2.hasBeenModified) && i2.renderAnnotationElement(t2);
  }
  setMissingCanvas(t2, e2, i2) {
    const s2 = this.#ht?.get(t2);
    if (s2) {
      s2.setCanvas(e2, i2);
      this.#ht.delete(t2);
    }
  }
  addMissingCanvas(t2, e2) {
    (this.#ht ||= /* @__PURE__ */ new Map()).set(t2, e2);
  }
}
class AltText {
  #o = null;
  #jt = false;
  #qt = null;
  #Xt = null;
  #Kt = null;
  #Yt = null;
  #Qt = false;
  #Jt = null;
  #r = null;
  #Zt = null;
  #te = null;
  #ee = false;
  static #ie = null;
  static _l10n = null;
  constructor(t2) {
    this.#r = t2;
    this.#ee = t2._uiManager.useNewAltTextFlow;
    AltText.#ie ||= Object.freeze({ added: "pdfjs-editor-new-alt-text-added-button", "added-label": "pdfjs-editor-new-alt-text-added-button-label", missing: "pdfjs-editor-new-alt-text-missing-button", "missing-label": "pdfjs-editor-new-alt-text-missing-button-label", review: "pdfjs-editor-new-alt-text-to-review-button", "review-label": "pdfjs-editor-new-alt-text-to-review-button-label" });
  }
  static initialize(t2) {
    AltText._l10n ??= t2;
  }
  async render() {
    const t2 = this.#qt = document.createElement("button");
    t2.className = "altText";
    t2.tabIndex = "0";
    const e2 = this.#Xt = document.createElement("span");
    t2.append(e2);
    if (this.#ee) {
      t2.classList.add("new");
      t2.setAttribute("data-l10n-id", AltText.#ie.missing);
      e2.setAttribute("data-l10n-id", AltText.#ie["missing-label"]);
    } else {
      t2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button");
      e2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label");
    }
    const i2 = this.#r._uiManager._signal;
    t2.addEventListener("contextmenu", noContextMenu, { signal: i2 });
    t2.addEventListener("pointerdown", (t3) => t3.stopPropagation(), { signal: i2 });
    const onClick = (t3) => {
      t3.preventDefault();
      this.#r._uiManager.editAltText(this.#r);
      this.#ee && this.#r._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_clicked", data: { label: this.#se } });
    };
    t2.addEventListener("click", onClick, { capture: true, signal: i2 });
    t2.addEventListener("keydown", (e3) => {
      if (e3.target === t2 && "Enter" === e3.key) {
        this.#Qt = true;
        onClick(e3);
      }
    }, { signal: i2 });
    await this.#ne();
    return t2;
  }
  get #se() {
    return (this.#o ? "added" : null === this.#o && this.guessedText && "review") || "missing";
  }
  finish() {
    if (this.#qt) {
      this.#qt.focus({ focusVisible: this.#Qt });
      this.#Qt = false;
    }
  }
  isEmpty() {
    return this.#ee ? null === this.#o : !this.#o && !this.#jt;
  }
  hasData() {
    return this.#ee ? null !== this.#o || !!this.#Zt : this.isEmpty();
  }
  get guessedText() {
    return this.#Zt;
  }
  async setGuessedText(t2) {
    if (null === this.#o) {
      this.#Zt = t2;
      this.#te = await AltText._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", { generatedAltText: t2 });
      this.#ne();
    }
  }
  toggleAltTextBadge(t2 = false) {
    if (this.#ee && !this.#o) {
      if (!this.#Jt) {
        const t3 = this.#Jt = document.createElement("div");
        t3.className = "noAltTextBadge";
        this.#r.div.append(t3);
      }
      this.#Jt.classList.toggle("hidden", !t2);
    } else {
      this.#Jt?.remove();
      this.#Jt = null;
    }
  }
  serialize(t2) {
    let e2 = this.#o;
    t2 || this.#Zt !== e2 || (e2 = this.#te);
    return { altText: e2, decorative: this.#jt, guessedText: this.#Zt, textWithDisclaimer: this.#te };
  }
  get data() {
    return { altText: this.#o, decorative: this.#jt };
  }
  set data({ altText: t2, decorative: e2, guessedText: i2, textWithDisclaimer: s2, cancel: n2 = false }) {
    if (i2) {
      this.#Zt = i2;
      this.#te = s2;
    }
    if (this.#o !== t2 || this.#jt !== e2) {
      if (!n2) {
        this.#o = t2;
        this.#jt = e2;
      }
      this.#ne();
    }
  }
  toggle(t2 = false) {
    if (this.#qt) {
      if (!t2 && this.#Yt) {
        clearTimeout(this.#Yt);
        this.#Yt = null;
      }
      this.#qt.disabled = !t2;
    }
  }
  shown() {
    this.#r._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_displayed", data: { label: this.#se } });
  }
  destroy() {
    this.#qt?.remove();
    this.#qt = null;
    this.#Xt = null;
    this.#Kt = null;
    this.#Jt?.remove();
    this.#Jt = null;
  }
  async #ne() {
    const t2 = this.#qt;
    if (!t2) return;
    if (this.#ee) {
      t2.classList.toggle("done", !!this.#o);
      t2.setAttribute("data-l10n-id", AltText.#ie[this.#se]);
      this.#Xt?.setAttribute("data-l10n-id", AltText.#ie[`${this.#se}-label`]);
      if (!this.#o) {
        this.#Kt?.remove();
        return;
      }
    } else {
      if (!this.#o && !this.#jt) {
        t2.classList.remove("done");
        this.#Kt?.remove();
        return;
      }
      t2.classList.add("done");
      t2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
    }
    let e2 = this.#Kt;
    if (!e2) {
      this.#Kt = e2 = document.createElement("span");
      e2.className = "tooltip";
      e2.setAttribute("role", "tooltip");
      e2.id = `alt-text-tooltip-${this.#r.id}`;
      const i3 = 100, s2 = this.#r._uiManager._signal;
      s2.addEventListener("abort", () => {
        clearTimeout(this.#Yt);
        this.#Yt = null;
      }, { once: true });
      t2.addEventListener("mouseenter", () => {
        this.#Yt = setTimeout(() => {
          this.#Yt = null;
          this.#Kt.classList.add("show");
          this.#r._reportTelemetry({ action: "alt_text_tooltip" });
        }, i3);
      }, { signal: s2 });
      t2.addEventListener("mouseleave", () => {
        if (this.#Yt) {
          clearTimeout(this.#Yt);
          this.#Yt = null;
        }
        this.#Kt?.classList.remove("show");
      }, { signal: s2 });
    }
    if (this.#jt) e2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip");
    else {
      e2.removeAttribute("data-l10n-id");
      e2.textContent = this.#o;
    }
    e2.parentNode || t2.append(e2);
    const i2 = this.#r.getElementForAltText();
    i2?.setAttribute("aria-describedby", e2.id);
  }
}
class Comment {
  #re = null;
  #ae = null;
  #oe = false;
  #r = null;
  #le = null;
  #he = null;
  #de = null;
  #ce = null;
  #ue = false;
  #pe = null;
  constructor(t2) {
    this.#r = t2;
  }
  renderForToolbar() {
    const t2 = this.#ae = document.createElement("button");
    t2.className = "comment";
    return this.#w(t2, false);
  }
  renderForStandalone() {
    const t2 = this.#re = document.createElement("button");
    t2.className = "annotationCommentButton";
    const e2 = this.#r.commentButtonPosition;
    if (e2) {
      const { style: i2 } = t2;
      i2.insetInlineEnd = `calc(${100 * ("ltr" === this.#r._uiManager.direction ? 1 - e2[0] : e2[0])}% - var(--comment-button-dim))`;
      i2.top = `calc(${100 * e2[1]}% - var(--comment-button-dim))`;
      const s2 = this.#r.commentButtonColor;
      s2 && (i2.backgroundColor = s2);
    }
    return this.#w(t2, true);
  }
  focusButton() {
    setTimeout(() => {
      (this.#re ?? this.#ae)?.focus();
    }, 0);
  }
  onUpdatedColor() {
    if (!this.#re) return;
    const t2 = this.#r.commentButtonColor;
    t2 && (this.#re.style.backgroundColor = t2);
    this.#r._uiManager.updatePopupColor(this.#r);
  }
  get commentButtonWidth() {
    return (this.#re?.getBoundingClientRect().width ?? 0) / this.#r.parent.boundingClientRect.width;
  }
  get commentPopupPositionInLayer() {
    if (this.#pe) return this.#pe;
    if (!this.#re) return null;
    const { x: t2, y: e2, height: i2 } = this.#re.getBoundingClientRect(), { x: s2, y: n2, width: r2, height: a2 } = this.#r.parent.boundingClientRect;
    return [(t2 - s2) / r2, (e2 + i2 - n2) / a2];
  }
  set commentPopupPositionInLayer(t2) {
    this.#pe = t2;
  }
  hasDefaultPopupPosition() {
    return null === this.#pe;
  }
  removeStandaloneCommentButton() {
    this.#re?.remove();
    this.#re = null;
  }
  removeToolbarCommentButton() {
    this.#ae?.remove();
    this.#ae = null;
  }
  setCommentButtonStates({ selected: t2, hasPopup: e2 }) {
    if (this.#re) {
      this.#re.classList.toggle("selected", t2);
      this.#re.ariaExpanded = e2;
    }
  }
  #w(t2, e2) {
    if (!this.#r._uiManager.hasCommentManager()) return null;
    t2.tabIndex = "0";
    t2.ariaHasPopup = "dialog";
    if (e2) {
      t2.ariaControls = "commentPopup";
      t2.setAttribute("data-l10n-id", "pdfjs-show-comment-button");
    } else {
      t2.ariaControlsElements = [this.#r._uiManager.getCommentDialogElement()];
      t2.setAttribute("data-l10n-id", "pdfjs-editor-edit-comment-button");
    }
    const i2 = this.#r._uiManager._signal;
    if (!(i2 instanceof AbortSignal) || i2.aborted) return t2;
    t2.addEventListener("contextmenu", noContextMenu, { signal: i2 });
    if (e2) {
      t2.addEventListener("focusin", (t3) => {
        this.#r._focusEventsAllowed = false;
        stopEvent(t3);
      }, { capture: true, signal: i2 });
      t2.addEventListener("focusout", (t3) => {
        this.#r._focusEventsAllowed = true;
        stopEvent(t3);
      }, { capture: true, signal: i2 });
    }
    t2.addEventListener("pointerdown", (t3) => t3.stopPropagation(), { signal: i2 });
    const onClick = (e3) => {
      e3.preventDefault();
      t2 === this.#ae ? this.edit() : this.#r.toggleComment(true);
    };
    t2.addEventListener("click", onClick, { capture: true, signal: i2 });
    t2.addEventListener("keydown", (e3) => {
      if (e3.target === t2 && "Enter" === e3.key) {
        this.#oe = true;
        onClick(e3);
      }
    }, { signal: i2 });
    t2.addEventListener("pointerenter", () => {
      this.#r.toggleComment(false, true);
    }, { signal: i2 });
    t2.addEventListener("pointerleave", () => {
      this.#r.toggleComment(false, false);
    }, { signal: i2 });
    return t2;
  }
  edit(t2) {
    const e2 = this.commentPopupPositionInLayer;
    let i2, s2;
    if (e2) [i2, s2] = e2;
    else {
      [i2, s2] = this.#r.commentButtonPosition;
      const { width: t3, height: e3, x: n3, y: r3 } = this.#r;
      i2 = n3 + i2 * t3;
      s2 = r3 + s2 * e3;
    }
    const n2 = this.#r.parent.boundingClientRect, { x: r2, y: a2, width: o2, height: l2 } = n2;
    this.#r._uiManager.editComment(this.#r, r2 + i2 * o2, a2 + s2 * l2, { ...t2, parentDimensions: n2 });
  }
  finish() {
    if (this.#ae) {
      this.#ae.focus({ focusVisible: this.#oe });
      this.#oe = false;
    }
  }
  isDeleted() {
    return this.#ue || "" === this.#de;
  }
  isEmpty() {
    return null === this.#de;
  }
  hasBeenEdited() {
    return this.isDeleted() || this.#de !== this.#le;
  }
  serialize() {
    return this.data;
  }
  get data() {
    return { text: this.#de, richText: this.#he, date: this.#ce, deleted: this.isDeleted() };
  }
  set data(t2) {
    t2 !== this.#de && (this.#he = null);
    if (null !== t2) {
      this.#de = t2;
      this.#ce = /* @__PURE__ */ new Date();
      this.#ue = false;
    } else {
      this.#de = "";
      this.#ue = true;
    }
  }
  setInitialText(t2, e2 = null) {
    this.#le = t2;
    this.data = t2;
    this.#ce = null;
    this.#he = e2;
  }
  shown() {
  }
  destroy() {
    this.#ae?.remove();
    this.#ae = null;
    this.#re?.remove();
    this.#re = null;
    this.#de = "";
    this.#he = null;
    this.#ce = null;
    this.#r = null;
    this.#oe = false;
    this.#ue = false;
  }
}
class TouchManager {
  #vt;
  #ge = false;
  #me = null;
  #fe;
  #be;
  #we;
  #ye;
  #Ae = null;
  #ve;
  #xe = null;
  #Ee;
  #Ce = null;
  constructor({ container: t2, isPinchingDisabled: e2 = null, isPinchingStopped: i2 = null, onPinchStart: s2 = null, onPinching: n2 = null, onPinchEnd: r2 = null, signal: a2 }) {
    this.#vt = t2;
    this.#me = i2;
    this.#fe = e2;
    this.#be = s2;
    this.#we = n2;
    this.#ye = r2;
    this.#Ee = new AbortController();
    this.#ve = AbortSignal.any([a2, this.#Ee.signal]);
    t2.addEventListener("touchstart", this.#_e.bind(this), { passive: false, signal: this.#ve });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / OutputScale.pixelRatio;
  }
  #_e(t2) {
    if (this.#fe?.()) return;
    if (1 === t2.touches.length) {
      if (this.#Ae) return;
      const t3 = this.#Ae = new AbortController(), e3 = AbortSignal.any([this.#ve, t3.signal]), i3 = this.#vt, s2 = { capture: true, signal: e3, passive: false }, cancelPointerDown = (t4) => {
        if ("touch" === t4.pointerType) {
          this.#Ae?.abort();
          this.#Ae = null;
        }
      };
      i3.addEventListener("pointerdown", (t4) => {
        if ("touch" === t4.pointerType) {
          stopEvent(t4);
          cancelPointerDown(t4);
        }
      }, s2);
      i3.addEventListener("pointerup", cancelPointerDown, s2);
      i3.addEventListener("pointercancel", cancelPointerDown, s2);
      return;
    }
    if (!this.#Ce) {
      this.#Ce = new AbortController();
      const t3 = AbortSignal.any([this.#ve, this.#Ce.signal]), e3 = this.#vt, i3 = { signal: t3, capture: false, passive: false };
      e3.addEventListener("touchmove", this.#Se.bind(this), i3);
      const s2 = this.#Te.bind(this);
      e3.addEventListener("touchend", s2, i3);
      e3.addEventListener("touchcancel", s2, i3);
      i3.capture = true;
      e3.addEventListener("pointerdown", stopEvent, i3);
      e3.addEventListener("pointermove", stopEvent, i3);
      e3.addEventListener("pointercancel", stopEvent, i3);
      e3.addEventListener("pointerup", stopEvent, i3);
      this.#be?.();
    }
    stopEvent(t2);
    if (2 !== t2.touches.length || this.#me?.()) {
      this.#xe = null;
      return;
    }
    let [e2, i2] = t2.touches;
    e2.identifier > i2.identifier && ([e2, i2] = [i2, e2]);
    this.#xe = { touch0X: e2.screenX, touch0Y: e2.screenY, touch1X: i2.screenX, touch1Y: i2.screenY };
  }
  #Se(t2) {
    if (!this.#xe || 2 !== t2.touches.length) return;
    stopEvent(t2);
    let [e2, i2] = t2.touches;
    e2.identifier > i2.identifier && ([e2, i2] = [i2, e2]);
    const { screenX: s2, screenY: n2 } = e2, { screenX: r2, screenY: a2 } = i2, o2 = this.#xe, { touch0X: l2, touch0Y: h2, touch1X: d2, touch1Y: c2 } = o2, u2 = d2 - l2, p2 = c2 - h2, g2 = r2 - s2, m2 = a2 - n2, f2 = Math.hypot(g2, m2) || 1, b2 = Math.hypot(u2, p2) || 1;
    if (!this.#ge && Math.abs(b2 - f2) <= TouchManager.MIN_TOUCH_DISTANCE_TO_PINCH) return;
    o2.touch0X = s2;
    o2.touch0Y = n2;
    o2.touch1X = r2;
    o2.touch1Y = a2;
    if (!this.#ge) {
      this.#ge = true;
      return;
    }
    const w2 = [(s2 + r2) / 2, (n2 + a2) / 2];
    this.#we?.(w2, b2, f2);
  }
  #Te(t2) {
    if (!(t2.touches.length >= 2)) {
      if (this.#Ce) {
        this.#Ce.abort();
        this.#Ce = null;
        this.#ye?.();
      }
      if (this.#xe) {
        stopEvent(t2);
        this.#xe = null;
        this.#ge = false;
      }
    }
  }
  destroy() {
    this.#Ee?.abort();
    this.#Ee = null;
    this.#Ae?.abort();
    this.#Ae = null;
  }
}
class AnnotationEditor {
  #De = null;
  #Me = null;
  #o = null;
  #l = null;
  #re = null;
  #ke = false;
  #Pe = null;
  #Ie = "";
  #Fe = null;
  #Re = null;
  #Le = null;
  #Be = null;
  #Oe = null;
  #Ne = "";
  #Ue = false;
  #He = null;
  #ze = false;
  #Ge = false;
  #We = false;
  #Ve = null;
  #$e = 0;
  #je = 0;
  #qe = null;
  #Xe = null;
  isSelected = false;
  _isCopy = false;
  _editToolbar = null;
  _initialOptions = /* @__PURE__ */ Object.create(null);
  _initialData = null;
  _isVisible = true;
  _uiManager = null;
  _focusEventsAllowed = true;
  static _l10n = null;
  static _l10nResizer = null;
  #Ke = false;
  #Ye = AnnotationEditor._zIndex++;
  static _borderLineWidth = -1;
  static _colorManager = new ColorManager();
  static _zIndex = 1;
  static _telemetryTimeout = 1e3;
  static get _resizerKeyboardManager() {
    const t2 = AnnotationEditor.prototype._resizeWithKeyboard, e2 = AnnotationEditorUIManager.TRANSLATE_SMALL, i2 = AnnotationEditorUIManager.TRANSLATE_BIG;
    return shadow(this, "_resizerKeyboardManager", new KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], t2, { args: [-e2, 0] }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t2, { args: [-i2, 0] }], [["ArrowRight", "mac+ArrowRight"], t2, { args: [e2, 0] }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t2, { args: [i2, 0] }], [["ArrowUp", "mac+ArrowUp"], t2, { args: [0, -e2] }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t2, { args: [0, -i2] }], [["ArrowDown", "mac+ArrowDown"], t2, { args: [0, e2] }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t2, { args: [0, i2] }], [["Escape", "mac+Escape"], AnnotationEditor.prototype._stopResizingWithKeyboard]]));
  }
  constructor(t2) {
    this.parent = t2.parent;
    this.id = t2.id;
    this.width = this.height = null;
    this.pageIndex = t2.parent.pageIndex;
    this.name = t2.name;
    this.div = null;
    this._uiManager = t2.uiManager;
    this.annotationElementId = null;
    this._willKeepAspectRatio = false;
    this._initialOptions.isCentered = t2.isCentered;
    this._structTreeParentId = null;
    this.annotationElementId = t2.annotationElementId || null;
    this.creationDate = t2.creationDate || /* @__PURE__ */ new Date();
    this.modificationDate = t2.modificationDate || null;
    const { rotation: e2, rawDims: { pageWidth: i2, pageHeight: s2, pageX: n2, pageY: r2 } } = this.parent.viewport;
    this.rotation = e2;
    this.pageRotation = (360 + e2 - this._uiManager.viewParameters.rotation) % 360;
    this.pageDimensions = [i2, s2];
    this.pageTranslation = [n2, r2];
    const [a2, o2] = this.parentDimensions;
    this.x = t2.x / a2;
    this.y = t2.y / o2;
    this.isAttachedToDOM = false;
    this.deleted = false;
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  get mode() {
    return Object.getPrototypeOf(this).constructor._editorType;
  }
  static get isDrawer() {
    return false;
  }
  static get _defaultLineColor() {
    return shadow(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t2) {
    const e2 = new FakeEditor({ id: t2.parent.getNextId(), parent: t2.parent, uiManager: t2._uiManager });
    e2.annotationElementId = t2.annotationElementId;
    e2.deleted = true;
    e2._uiManager.addToAnnotationStorage(e2);
  }
  static initialize(t2, e2) {
    AnnotationEditor._l10n ??= t2;
    AnnotationEditor._l10nResizer ||= Object.freeze({ topLeft: "pdfjs-editor-resizer-top-left", topMiddle: "pdfjs-editor-resizer-top-middle", topRight: "pdfjs-editor-resizer-top-right", middleRight: "pdfjs-editor-resizer-middle-right", bottomRight: "pdfjs-editor-resizer-bottom-right", bottomMiddle: "pdfjs-editor-resizer-bottom-middle", bottomLeft: "pdfjs-editor-resizer-bottom-left", middleLeft: "pdfjs-editor-resizer-middle-left" });
    if (-1 !== AnnotationEditor._borderLineWidth) return;
    const i2 = getComputedStyle(document.documentElement);
    AnnotationEditor._borderLineWidth = parseFloat(i2.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t2, e2) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t2) {
    return false;
  }
  static paste(t2, e2) {
    unreachable("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return this.#Ke;
  }
  set _isDraggable(t2) {
    this.#Ke = t2;
    this.div?.classList.toggle("draggable", t2);
  }
  get uid() {
    return this.annotationElementId || this.id;
  }
  get isEnterHandled() {
    return true;
  }
  center() {
    const [t2, e2] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e2 / (2 * t2);
        this.y += this.width * t2 / (2 * e2);
        break;
      case 180:
        this.x += this.width / 2;
        this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e2 / (2 * t2);
        this.y -= this.width * t2 / (2 * e2);
        break;
      default:
        this.x -= this.width / 2;
        this.y -= this.height / 2;
    }
    this.fixAndSetPosition();
  }
  addCommands(t2) {
    this._uiManager.addCommands(t2);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = this.#Ye;
  }
  setParent(t2) {
    if (null !== t2) {
      this.pageIndex = t2.pageIndex;
      this.pageDimensions = t2.pageDimensions;
    } else {
      this.#Qe();
      this.#Be?.remove();
      this.#Be = null;
    }
    this.parent = t2;
  }
  focusin(t2) {
    this._focusEventsAllowed && (this.#Ue ? this.#Ue = false : this.parent.setSelected(this));
  }
  focusout(t2) {
    if (!this._focusEventsAllowed) return;
    if (!this.isAttachedToDOM) return;
    const e2 = t2.relatedTarget;
    if (!e2?.closest(`#${this.id}`)) {
      t2.preventDefault();
      this.parent?.isMultipleSelection || this.commitOrRemove();
    }
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.isInEditMode() && this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t2, e2, i2, s2) {
    const [n2, r2] = this.parentDimensions;
    [i2, s2] = this.screenToPageTranslation(i2, s2);
    this.x = (t2 + i2) / n2;
    this.y = (e2 + s2) / r2;
    this.fixAndSetPosition();
  }
  _moveAfterPaste(t2, e2) {
    const [i2, s2] = this.parentDimensions;
    this.setAt(t2 * i2, e2 * s2, this.width * i2, this.height * s2);
    this._onTranslated();
  }
  #Je([t2, e2], i2, s2) {
    [i2, s2] = this.screenToPageTranslation(i2, s2);
    this.x += i2 / t2;
    this.y += s2 / e2;
    this._onTranslating(this.x, this.y);
    this.fixAndSetPosition();
  }
  translate(t2, e2) {
    this.#Je(this.parentDimensions, t2, e2);
  }
  translateInPage(t2, e2) {
    this.#He ||= [this.x, this.y, this.width, this.height];
    this.#Je(this.pageDimensions, t2, e2);
    this.div.scrollIntoView({ block: "nearest" });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(t2, e2) {
    this.#He ||= [this.x, this.y, this.width, this.height];
    const { div: i2, parentDimensions: [s2, n2] } = this;
    this.x += t2 / s2;
    this.y += e2 / n2;
    if (this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const { x: t3, y: e3 } = this.div.getBoundingClientRect();
      if (this.parent.findNewParent(this, t3, e3)) {
        this.x -= Math.floor(this.x);
        this.y -= Math.floor(this.y);
      }
    }
    let { x: r2, y: a2 } = this;
    const [o2, l2] = this.getBaseTranslation();
    r2 += o2;
    a2 += l2;
    const { style: h2 } = i2;
    h2.left = `${(100 * r2).toFixed(2)}%`;
    h2.top = `${(100 * a2).toFixed(2)}%`;
    this._onTranslating(r2, a2);
    i2.scrollIntoView({ block: "nearest" });
  }
  _onTranslating(t2, e2) {
  }
  _onTranslated(t2, e2) {
  }
  get _hasBeenMoved() {
    return !!this.#He && (this.#He[0] !== this.x || this.#He[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!this.#He && (this.#He[2] !== this.width || this.#He[3] !== this.height);
  }
  getBaseTranslation() {
    const [t2, e2] = this.parentDimensions, { _borderLineWidth: i2 } = AnnotationEditor, s2 = i2 / t2, n2 = i2 / e2;
    switch (this.rotation) {
      case 90:
        return [-s2, n2];
      case 180:
        return [s2, n2];
      case 270:
        return [s2, -n2];
      default:
        return [-s2, -n2];
    }
  }
  get _mustFixPosition() {
    return true;
  }
  fixAndSetPosition(t2 = this.rotation) {
    const { div: { style: e2 }, pageDimensions: [i2, s2] } = this;
    let { x: n2, y: r2, width: a2, height: o2 } = this;
    a2 *= i2;
    o2 *= s2;
    n2 *= i2;
    r2 *= s2;
    if (this._mustFixPosition) switch (t2) {
      case 0:
        n2 = MathClamp(n2, 0, i2 - a2);
        r2 = MathClamp(r2, 0, s2 - o2);
        break;
      case 90:
        n2 = MathClamp(n2, 0, i2 - o2);
        r2 = MathClamp(r2, a2, s2);
        break;
      case 180:
        n2 = MathClamp(n2, a2, i2);
        r2 = MathClamp(r2, o2, s2);
        break;
      case 270:
        n2 = MathClamp(n2, o2, i2);
        r2 = MathClamp(r2, 0, s2 - a2);
    }
    this.x = n2 /= i2;
    this.y = r2 /= s2;
    const [l2, h2] = this.getBaseTranslation();
    n2 += l2;
    r2 += h2;
    e2.left = `${(100 * n2).toFixed(2)}%`;
    e2.top = `${(100 * r2).toFixed(2)}%`;
    this.moveInDOM();
  }
  static #Ze(t2, e2, i2) {
    switch (i2) {
      case 90:
        return [e2, -t2];
      case 180:
        return [-t2, -e2];
      case 270:
        return [-e2, t2];
      default:
        return [t2, e2];
    }
  }
  screenToPageTranslation(t2, e2) {
    return AnnotationEditor.#Ze(t2, e2, this.parentRotation);
  }
  pageTranslationToScreen(t2, e2) {
    return AnnotationEditor.#Ze(t2, e2, 360 - this.parentRotation);
  }
  #ti(t2) {
    switch (t2) {
      case 90: {
        const [t3, e2] = this.pageDimensions;
        return [0, -t3 / e2, e2 / t3, 0];
      }
      case 180:
        return [-1, 0, 0, -1];
      case 270: {
        const [t3, e2] = this.pageDimensions;
        return [0, t3 / e2, -e2 / t3, 0];
      }
      default:
        return [1, 0, 0, 1];
    }
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const { parentScale: t2, pageDimensions: [e2, i2] } = this;
    return [e2 * t2, i2 * t2];
  }
  setDims() {
    const { div: { style: t2 }, width: e2, height: i2 } = this;
    t2.width = `${(100 * e2).toFixed(2)}%`;
    t2.height = `${(100 * i2).toFixed(2)}%`;
  }
  getInitialTranslation() {
    return [0, 0];
  }
  #ei() {
    if (this.#Fe) return;
    this.#Fe = document.createElement("div");
    this.#Fe.classList.add("resizers");
    const t2 = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e2 = this._uiManager._signal;
    for (const i2 of t2) {
      const t3 = document.createElement("div");
      this.#Fe.append(t3);
      t3.classList.add("resizer", i2);
      t3.setAttribute("data-resizer-name", i2);
      t3.addEventListener("pointerdown", this.#ii.bind(this, i2), { signal: e2 });
      t3.addEventListener("contextmenu", noContextMenu, { signal: e2 });
      t3.tabIndex = -1;
    }
    this.div.prepend(this.#Fe);
  }
  #ii(t2, e2) {
    e2.preventDefault();
    const { isMac: i2 } = util_FeatureTest.platform;
    if (0 !== e2.button || e2.ctrlKey && i2) return;
    this.#o?.toggle(false);
    const s2 = this._isDraggable;
    this._isDraggable = false;
    this.#Re = [e2.screenX, e2.screenY];
    const n2 = new AbortController(), r2 = this._uiManager.combinedSignal(n2);
    this.parent.togglePointerEvents(false);
    window.addEventListener("pointermove", this.#si.bind(this, t2), { passive: true, capture: true, signal: r2 });
    window.addEventListener("touchmove", stopEvent, { passive: false, signal: r2 });
    window.addEventListener("contextmenu", noContextMenu, { signal: r2 });
    this.#Le = { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height };
    const a2 = this.parent.div.style.cursor, o2 = this.div.style.cursor;
    this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e2.target).cursor;
    const pointerUpCallback = () => {
      n2.abort();
      this.parent.togglePointerEvents(true);
      this.#o?.toggle(true);
      this._isDraggable = s2;
      this.parent.div.style.cursor = a2;
      this.div.style.cursor = o2;
      this.#ni();
    };
    window.addEventListener("pointerup", pointerUpCallback, { signal: r2 });
    window.addEventListener("blur", pointerUpCallback, { signal: r2 });
  }
  #ri(t2, e2, i2, s2) {
    this.width = i2;
    this.height = s2;
    this.x = t2;
    this.y = e2;
    this.setDims();
    this.fixAndSetPosition();
    this._onResized();
  }
  _onResized() {
  }
  #ni() {
    if (!this.#Le) return;
    const { savedX: t2, savedY: e2, savedWidth: i2, savedHeight: s2 } = this.#Le;
    this.#Le = null;
    const n2 = this.x, r2 = this.y, a2 = this.width, o2 = this.height;
    n2 === t2 && r2 === e2 && a2 === i2 && o2 === s2 || this.addCommands({ cmd: this.#ri.bind(this, n2, r2, a2, o2), undo: this.#ri.bind(this, t2, e2, i2, s2), mustExec: true });
  }
  static _round(t2) {
    return Math.round(1e4 * t2) / 1e4;
  }
  #si(t2, e2) {
    const [i2, s2] = this.parentDimensions, n2 = this.x, r2 = this.y, a2 = this.width, o2 = this.height, l2 = AnnotationEditor.MIN_SIZE / i2, h2 = AnnotationEditor.MIN_SIZE / s2, d2 = this.#ti(this.rotation), transf = (t3, e3) => [d2[0] * t3 + d2[2] * e3, d2[1] * t3 + d2[3] * e3], c2 = this.#ti(360 - this.rotation);
    let u2, p2, g2 = false, m2 = false;
    switch (t2) {
      case "topLeft":
        g2 = true;
        u2 = (t3, e3) => [0, 0];
        p2 = (t3, e3) => [t3, e3];
        break;
      case "topMiddle":
        u2 = (t3, e3) => [t3 / 2, 0];
        p2 = (t3, e3) => [t3 / 2, e3];
        break;
      case "topRight":
        g2 = true;
        u2 = (t3, e3) => [t3, 0];
        p2 = (t3, e3) => [0, e3];
        break;
      case "middleRight":
        m2 = true;
        u2 = (t3, e3) => [t3, e3 / 2];
        p2 = (t3, e3) => [0, e3 / 2];
        break;
      case "bottomRight":
        g2 = true;
        u2 = (t3, e3) => [t3, e3];
        p2 = (t3, e3) => [0, 0];
        break;
      case "bottomMiddle":
        u2 = (t3, e3) => [t3 / 2, e3];
        p2 = (t3, e3) => [t3 / 2, 0];
        break;
      case "bottomLeft":
        g2 = true;
        u2 = (t3, e3) => [0, e3];
        p2 = (t3, e3) => [t3, 0];
        break;
      case "middleLeft":
        m2 = true;
        u2 = (t3, e3) => [0, e3 / 2];
        p2 = (t3, e3) => [t3, e3 / 2];
    }
    const f2 = u2(a2, o2), b2 = p2(a2, o2);
    let w2 = transf(...b2);
    const y2 = AnnotationEditor._round(n2 + w2[0]), A2 = AnnotationEditor._round(r2 + w2[1]);
    let v2, x2, E2 = 1, C2 = 1;
    if (e2.fromKeyboard) ({ deltaX: v2, deltaY: x2 } = e2);
    else {
      const { screenX: t3, screenY: i3 } = e2, [s3, n3] = this.#Re;
      [v2, x2] = this.screenToPageTranslation(t3 - s3, i3 - n3);
      this.#Re[0] = t3;
      this.#Re[1] = i3;
    }
    [v2, x2] = (_2 = v2 / i2, S2 = x2 / s2, [c2[0] * _2 + c2[2] * S2, c2[1] * _2 + c2[3] * S2]);
    var _2, S2;
    if (g2) {
      const t3 = Math.hypot(a2, o2);
      E2 = C2 = Math.max(Math.min(Math.hypot(b2[0] - f2[0] - v2, b2[1] - f2[1] - x2) / t3, 1 / a2, 1 / o2), l2 / a2, h2 / o2);
    } else m2 ? E2 = MathClamp(Math.abs(b2[0] - f2[0] - v2), l2, 1) / a2 : C2 = MathClamp(Math.abs(b2[1] - f2[1] - x2), h2, 1) / o2;
    const T2 = AnnotationEditor._round(a2 * E2), D2 = AnnotationEditor._round(o2 * C2);
    w2 = transf(...p2(T2, D2));
    const M2 = y2 - w2[0], k2 = A2 - w2[1];
    this.#He ||= [this.x, this.y, this.width, this.height];
    this.width = T2;
    this.height = D2;
    this.x = M2;
    this.y = k2;
    this.setDims();
    this.fixAndSetPosition();
    this._onResizing();
  }
  _onResizing() {
  }
  altTextFinish() {
    this.#o?.finish();
  }
  get toolbarButtons() {
    return null;
  }
  async addEditToolbar() {
    if (this._editToolbar || this.#Ge) return this._editToolbar;
    this._editToolbar = new EditorToolbar(this);
    this.div.append(this._editToolbar.render());
    const { toolbarButtons: t2 } = this;
    if (t2) for (const [e2, i2] of t2) await this._editToolbar.addButton(e2, i2);
    this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton());
    this._editToolbar.addButton("delete");
    return this._editToolbar;
  }
  addCommentButtonInToolbar() {
    this._editToolbar?.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
  }
  removeCommentButtonFromToolbar() {
    this._editToolbar?.removeButton("comment");
  }
  removeEditToolbar() {
    this._editToolbar?.remove();
    this._editToolbar = null;
    this.#o?.destroy();
  }
  addContainer(t2) {
    const e2 = this._editToolbar?.div;
    e2 ? e2.before(t2) : this.div.append(t2);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  createAltText() {
    if (!this.#o) {
      AltText.initialize(AnnotationEditor._l10n);
      this.#o = new AltText(this);
      if (this.#De) {
        this.#o.data = this.#De;
        this.#De = null;
      }
    }
    return this.#o;
  }
  get altTextData() {
    return this.#o?.data;
  }
  set altTextData(t2) {
    this.#o && (this.#o.data = t2);
  }
  get guessedAltText() {
    return this.#o?.guessedText;
  }
  async setGuessedAltText(t2) {
    await this.#o?.setGuessedText(t2);
  }
  serializeAltText(t2) {
    return this.#o?.serialize(t2);
  }
  hasAltText() {
    return !!this.#o && !this.#o.isEmpty();
  }
  hasAltTextData() {
    return this.#o?.hasData() ?? false;
  }
  focusCommentButton() {
    this.#l?.focusButton();
  }
  addCommentButton() {
    return this.#l ||= new Comment(this);
  }
  addStandaloneCommentButton() {
    if (this.#re) this._uiManager.isEditingMode() && this.#re.classList.remove("hidden");
    else if (this.hasComment) {
      this.#re = this.#l.renderForStandalone();
      this.div.append(this.#re);
    }
  }
  removeStandaloneCommentButton() {
    this.#l.removeStandaloneCommentButton();
    this.#re = null;
  }
  hideStandaloneCommentButton() {
    this.#re?.classList.add("hidden");
  }
  get comment() {
    const { data: { richText: t2, text: e2, date: i2, deleted: s2 } } = this.#l;
    return { text: e2, richText: t2, date: i2, deleted: s2, color: this.getNonHCMColor(), opacity: this.opacity ?? 1 };
  }
  set comment(t2) {
    this.#l ||= new Comment(this);
    this.#l.data = t2;
    if (this.hasComment) {
      this.removeCommentButtonFromToolbar();
      this.addStandaloneCommentButton();
      this._uiManager.updateComment(this);
    } else {
      this.addCommentButtonInToolbar();
      this.removeStandaloneCommentButton();
      this._uiManager.removeComment(this);
    }
  }
  setCommentData({ comment: t2, popupRef: e2, richText: i2 }) {
    if (!e2) return;
    this.#l ||= new Comment(this);
    this.#l.setInitialText(t2, i2);
    if (!this.annotationElementId) return;
    const s2 = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    s2 && this.updateFromAnnotationLayer(s2);
  }
  get hasEditedComment() {
    return this.#l?.hasBeenEdited();
  }
  get hasDeletedComment() {
    return this.#l?.isDeleted();
  }
  get hasComment() {
    return !!this.#l && !this.#l.isEmpty() && !this.#l.isDeleted();
  }
  async editComment(t2) {
    this.#l ||= new Comment(this);
    this.#l.edit(t2);
  }
  toggleComment(t2, e2 = void 0) {
    this.hasComment && this._uiManager.toggleComment(this, t2, e2);
  }
  setSelectedCommentButton(t2) {
    this.#l.setSelectedButton(t2);
  }
  addComment(t2) {
    if (this.hasEditedComment) {
      const e2 = 180, i2 = 100, [, , , s2] = t2.rect, [n2] = this.pageDimensions, [r2] = this.pageTranslation, a2 = r2 + n2 + 1, o2 = s2 - i2, l2 = a2 + e2;
      t2.popup = { contents: this.comment.text, deleted: this.comment.deleted, rect: [a2, o2, l2, s2] };
    }
  }
  updateFromAnnotationLayer({ popup: { contents: t2, deleted: e2 } }) {
    this.#l.data = e2 ? null : t2;
  }
  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }
  render() {
    const t2 = this.div = document.createElement("div");
    t2.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
    t2.className = this.name;
    t2.setAttribute("id", this.id);
    t2.tabIndex = this.#ke ? -1 : 0;
    t2.setAttribute("role", "application");
    this.defaultL10nId && t2.setAttribute("data-l10n-id", this.defaultL10nId);
    this._isVisible || t2.classList.add("hidden");
    this.setInForeground();
    this.#ai();
    const [e2, i2] = this.parentDimensions;
    if (this.parentRotation % 180 != 0) {
      t2.style.maxWidth = `${(100 * i2 / e2).toFixed(2)}%`;
      t2.style.maxHeight = `${(100 * e2 / i2).toFixed(2)}%`;
    }
    const [s2, n2] = this.getInitialTranslation();
    this.translate(s2, n2);
    bindEvents(this, t2, ["keydown", "pointerdown", "dblclick"]);
    this.isResizable && this._uiManager._supportsPinchToZoom && (this.#Xe ||= new TouchManager({ container: t2, isPinchingDisabled: () => !this.isSelected, onPinchStart: this.#oi.bind(this), onPinching: this.#li.bind(this), onPinchEnd: this.#hi.bind(this), signal: this._uiManager._signal }));
    this.addStandaloneCommentButton();
    this._uiManager._editorUndoBar?.hide();
    return t2;
  }
  #oi() {
    this.#Le = { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height };
    this.#o?.toggle(false);
    this.parent.togglePointerEvents(false);
  }
  #li(t2, e2, i2) {
    let s2 = i2 / e2 * 0.7 + 1 - 0.7;
    if (1 === s2) return;
    const n2 = this.#ti(this.rotation), transf = (t3, e3) => [n2[0] * t3 + n2[2] * e3, n2[1] * t3 + n2[3] * e3], [r2, a2] = this.parentDimensions, o2 = this.x, l2 = this.y, h2 = this.width, d2 = this.height, c2 = AnnotationEditor.MIN_SIZE / r2, u2 = AnnotationEditor.MIN_SIZE / a2;
    s2 = Math.max(Math.min(s2, 1 / h2, 1 / d2), c2 / h2, u2 / d2);
    const p2 = AnnotationEditor._round(h2 * s2), g2 = AnnotationEditor._round(d2 * s2);
    if (p2 === h2 && g2 === d2) return;
    this.#He ||= [o2, l2, h2, d2];
    const m2 = transf(h2 / 2, d2 / 2), f2 = AnnotationEditor._round(o2 + m2[0]), b2 = AnnotationEditor._round(l2 + m2[1]), w2 = transf(p2 / 2, g2 / 2);
    this.x = f2 - w2[0];
    this.y = b2 - w2[1];
    this.width = p2;
    this.height = g2;
    this.setDims();
    this.fixAndSetPosition();
    this._onResizing();
  }
  #hi() {
    this.#o?.toggle(true);
    this.parent.togglePointerEvents(true);
    this.#ni();
  }
  pointerdown(t2) {
    const { isMac: e2 } = util_FeatureTest.platform;
    if (0 !== t2.button || t2.ctrlKey && e2) t2.preventDefault();
    else {
      this.#Ue = true;
      this._isDraggable ? this.#di(t2) : this.#ci(t2);
    }
  }
  #ci(t2) {
    const { isMac: e2 } = util_FeatureTest.platform;
    t2.ctrlKey && !e2 || t2.shiftKey || t2.metaKey && e2 ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
  }
  #di(t2) {
    const { isSelected: e2 } = this;
    this._uiManager.setUpDragSession();
    let i2 = false;
    const s2 = new AbortController(), n2 = this._uiManager.combinedSignal(s2), r2 = { capture: true, passive: false, signal: n2 }, cancelDrag = (t3) => {
      s2.abort();
      this.#Pe = null;
      this.#Ue = false;
      this._uiManager.endDragSession() || this.#ci(t3);
      i2 && this._onStopDragging();
    };
    if (e2) {
      this.#$e = t2.clientX;
      this.#je = t2.clientY;
      this.#Pe = t2.pointerId;
      this.#Ie = t2.pointerType;
      window.addEventListener("pointermove", (t3) => {
        if (!i2) {
          i2 = true;
          this._uiManager.toggleComment(this, true, false);
          this._onStartDragging();
        }
        const { clientX: e3, clientY: s3, pointerId: n3 } = t3;
        if (n3 !== this.#Pe) {
          stopEvent(t3);
          return;
        }
        const [r3, a2] = this.screenToPageTranslation(e3 - this.#$e, s3 - this.#je);
        this.#$e = e3;
        this.#je = s3;
        this._uiManager.dragSelectedEditors(r3, a2);
      }, r2);
      window.addEventListener("touchmove", stopEvent, r2);
      window.addEventListener("pointerdown", (t3) => {
        t3.pointerType === this.#Ie && (this.#Xe || t3.isPrimary) && cancelDrag(t3);
        stopEvent(t3);
      }, r2);
    }
    const pointerUpCallback = (t3) => {
      this.#Pe && this.#Pe !== t3.pointerId ? stopEvent(t3) : cancelDrag(t3);
    };
    window.addEventListener("pointerup", pointerUpCallback, { signal: n2 });
    window.addEventListener("blur", pointerUpCallback, { signal: n2 });
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    this.#Ve && clearTimeout(this.#Ve);
    this.#Ve = setTimeout(() => {
      this.#Ve = null;
      this.parent?.moveEditorInDOM(this);
    }, 0);
  }
  _setParentAndPosition(t2, e2, i2) {
    t2.changeParent(this);
    this.x = e2;
    this.y = i2;
    this.fixAndSetPosition();
    this._onTranslated();
  }
  getRect(t2, e2, i2 = this.rotation) {
    const s2 = this.parentScale, [n2, r2] = this.pageDimensions, [a2, o2] = this.pageTranslation, l2 = t2 / s2, h2 = e2 / s2, d2 = this.x * n2, c2 = this.y * r2, u2 = this.width * n2, p2 = this.height * r2;
    switch (i2) {
      case 0:
        return [d2 + l2 + a2, r2 - c2 - h2 - p2 + o2, d2 + l2 + u2 + a2, r2 - c2 - h2 + o2];
      case 90:
        return [d2 + h2 + a2, r2 - c2 + l2 + o2, d2 + h2 + p2 + a2, r2 - c2 + l2 + u2 + o2];
      case 180:
        return [d2 - l2 - u2 + a2, r2 - c2 + h2 + o2, d2 - l2 + a2, r2 - c2 + h2 + p2 + o2];
      case 270:
        return [d2 - h2 - p2 + a2, r2 - c2 - l2 - u2 + o2, d2 - h2 + a2, r2 - c2 - l2 + o2];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t2, e2) {
    const [i2, s2, n2, r2] = t2, a2 = n2 - i2, o2 = r2 - s2;
    switch (this.rotation) {
      case 0:
        return [i2, e2 - r2, a2, o2];
      case 90:
        return [i2, e2 - s2, o2, a2];
      case 180:
        return [n2, e2 - s2, a2, o2];
      case 270:
        return [n2, e2 - r2, o2, a2];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getPDFRect() {
    return this.getRect(0, 0);
  }
  getNonHCMColor() {
    return this.color && AnnotationEditor._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
  }
  onUpdatedColor() {
    this.#l?.onUpdatedColor();
  }
  getData() {
    const { comment: { text: t2, color: e2, date: i2, opacity: s2, deleted: n2, richText: r2 }, uid: a2, pageIndex: o2, creationDate: l2, modificationDate: h2 } = this;
    return { id: a2, pageIndex: o2, rect: this.getPDFRect(), richText: r2, contentsObj: { str: t2 }, creationDate: l2, modificationDate: i2 || h2, popupRef: !n2, color: e2, opacity: s2 };
  }
  onceAdded(t2) {
  }
  isEmpty() {
    return false;
  }
  enableEditMode() {
    if (this.isInEditMode()) return false;
    this.parent.setEditingState(false);
    this.#Ge = true;
    return true;
  }
  disableEditMode() {
    if (!this.isInEditMode()) return false;
    this.parent.setEditingState(true);
    this.#Ge = false;
    return true;
  }
  isInEditMode() {
    return this.#Ge;
  }
  shouldGetKeyboardEvents() {
    return this.#We;
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const { top: t2, left: e2, bottom: i2, right: s2 } = this.getClientDimensions(), { innerHeight: n2, innerWidth: r2 } = window;
    return e2 < r2 && s2 > 0 && t2 < n2 && i2 > 0;
  }
  #ai() {
    if (this.#Oe || !this.div) return;
    this.#Oe = new AbortController();
    const t2 = this._uiManager.combinedSignal(this.#Oe);
    this.div.addEventListener("focusin", this.focusin.bind(this), { signal: t2 });
    this.div.addEventListener("focusout", this.focusout.bind(this), { signal: t2 });
  }
  rebuild() {
    this.#ai();
  }
  rotate(t2) {
  }
  resize() {
  }
  serializeDeleted() {
    return { id: this.annotationElementId, deleted: true, pageIndex: this.pageIndex, popupRef: this._initialData?.popupRef || "" };
  }
  serialize(t2 = false, e2 = null) {
    return { annotationType: this.mode, pageIndex: this.pageIndex, rect: this.getPDFRect(), rotation: this.rotation, structTreeParentId: this._structTreeParentId, popupRef: this._initialData?.popupRef || "" };
  }
  static async deserialize(t2, e2, i2) {
    const s2 = new this.prototype.constructor({ parent: e2, id: e2.getNextId(), uiManager: i2, annotationElementId: t2.annotationElementId, creationDate: t2.creationDate, modificationDate: t2.modificationDate });
    s2.rotation = t2.rotation;
    s2.#De = t2.accessibilityData;
    s2._isCopy = t2.isCopy || false;
    const [n2, r2] = s2.pageDimensions, [a2, o2, l2, h2] = s2.getRectInCurrentCoords(t2.rect, r2);
    s2.x = a2 / n2;
    s2.y = o2 / r2;
    s2.width = l2 / n2;
    s2.height = h2 / r2;
    return s2;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || null !== this.serialize());
  }
  remove() {
    this.#Oe?.abort();
    this.#Oe = null;
    this.isEmpty() || this.commit();
    this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this);
    if (this.#Ve) {
      clearTimeout(this.#Ve);
      this.#Ve = null;
    }
    this.#Qe();
    this.removeEditToolbar();
    if (this.#qe) {
      for (const t2 of this.#qe.values()) clearTimeout(t2);
      this.#qe = null;
    }
    this.parent = null;
    this.#Xe?.destroy();
    this.#Xe = null;
  }
  get isResizable() {
    return false;
  }
  makeResizable() {
    if (this.isResizable) {
      this.#ei();
      this.#Fe.classList.remove("hidden");
    }
  }
  get toolbarPosition() {
    return null;
  }
  get commentButtonPosition() {
    return "ltr" === this._uiManager.direction ? [1, 0] : [0, 0];
  }
  get commentButtonPositionInPage() {
    const { commentButtonPosition: [t2, e2] } = this, [i2, s2, n2, r2] = this.getPDFRect();
    return [AnnotationEditor._round(i2 + (n2 - i2) * t2), AnnotationEditor._round(s2 + (r2 - s2) * (1 - e2))];
  }
  get commentButtonColor() {
    return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
  }
  get commentPopupPosition() {
    return this.#l.commentPopupPositionInLayer;
  }
  set commentPopupPosition(t2) {
    this.#l.commentPopupPositionInLayer = t2;
  }
  hasDefaultPopupPosition() {
    return this.#l.hasDefaultPopupPosition();
  }
  get commentButtonWidth() {
    return this.#l.commentButtonWidth;
  }
  get elementBeforePopup() {
    return this.div;
  }
  setCommentButtonStates(t2) {
    this.#l.setCommentButtonStates(t2);
  }
  keydown(t2) {
    if (!this.isResizable || t2.target !== this.div || "Enter" !== t2.key) return;
    this._uiManager.setSelected(this);
    this.#Le = { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height };
    const e2 = this.#Fe.children;
    if (!this.#Me) {
      this.#Me = Array.from(e2);
      const t3 = this.#ui.bind(this), i3 = this.#pi.bind(this), s3 = this._uiManager._signal;
      for (const e3 of this.#Me) {
        const n3 = e3.getAttribute("data-resizer-name");
        e3.setAttribute("role", "spinbutton");
        e3.addEventListener("keydown", t3, { signal: s3 });
        e3.addEventListener("blur", i3, { signal: s3 });
        e3.addEventListener("focus", this.#gi.bind(this, n3), { signal: s3 });
        e3.setAttribute("data-l10n-id", AnnotationEditor._l10nResizer[n3]);
      }
    }
    const i2 = this.#Me[0];
    let s2 = 0;
    for (const t3 of e2) {
      if (t3 === i2) break;
      s2++;
    }
    const n2 = (360 - this.rotation + this.parentRotation) % 360 / 90 * (this.#Me.length / 4);
    if (n2 !== s2) {
      if (n2 < s2) for (let t4 = 0; t4 < s2 - n2; t4++) this.#Fe.append(this.#Fe.firstChild);
      else if (n2 > s2) for (let t4 = 0; t4 < n2 - s2; t4++) this.#Fe.firstChild.before(this.#Fe.lastChild);
      let t3 = 0;
      for (const i3 of e2) {
        const e3 = this.#Me[t3++].getAttribute("data-resizer-name");
        i3.setAttribute("data-l10n-id", AnnotationEditor._l10nResizer[e3]);
      }
    }
    this.#mi(0);
    this.#We = true;
    this.#Fe.firstChild.focus({ focusVisible: true });
    t2.preventDefault();
    t2.stopImmediatePropagation();
  }
  #ui(t2) {
    AnnotationEditor._resizerKeyboardManager.exec(this, t2);
  }
  #pi(t2) {
    this.#We && t2.relatedTarget?.parentNode !== this.#Fe && this.#Qe();
  }
  #gi(t2) {
    this.#Ne = this.#We ? t2 : "";
  }
  #mi(t2) {
    if (this.#Me) for (const e2 of this.#Me) e2.tabIndex = t2;
  }
  _resizeWithKeyboard(t2, e2) {
    this.#We && this.#si(this.#Ne, { deltaX: t2, deltaY: e2, fromKeyboard: true });
  }
  #Qe() {
    this.#We = false;
    this.#mi(-1);
    this.#ni();
  }
  _stopResizingWithKeyboard() {
    this.#Qe();
    this.div.focus();
  }
  select() {
    if (this.isSelected && this._editToolbar) this._editToolbar.show();
    else {
      this.isSelected = true;
      this.makeResizable();
      this.div?.classList.add("selectedEditor");
      if (this._editToolbar) {
        this._editToolbar?.show();
        this.#o?.toggleAltTextBadge(false);
      } else this.addEditToolbar().then(() => {
        this.div?.classList.contains("selectedEditor") && this._editToolbar?.show();
      });
    }
  }
  focus() {
    this.div && !this.div.contains(document.activeElement) && setTimeout(() => this.div?.focus({ preventScroll: true }), 0);
  }
  unselect() {
    if (this.isSelected) {
      this.isSelected = false;
      this.#Fe?.classList.add("hidden");
      this.div?.classList.remove("selectedEditor");
      this.div?.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({ preventScroll: true });
      this._editToolbar?.hide();
      this.#o?.toggleAltTextBadge(true);
      this.hasComment && this._uiManager.toggleComment(this, false, false);
    }
  }
  updateParams(t2, e2) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  get canChangeContent() {
    return false;
  }
  enterInEditMode() {
    if (this.canChangeContent) {
      this.enableEditMode();
      this.div.focus();
    }
  }
  dblclick(t2) {
    if ("BUTTON" !== t2.target.nodeName) {
      this.enterInEditMode();
      this.parent.updateToolbar({ mode: this.constructor._editorType, editId: this.id });
    }
  }
  getElementForAltText() {
    return this.div;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return this.#ze;
  }
  set isEditing(t2) {
    this.#ze = t2;
    if (this.parent) if (t2) {
      this.parent.setSelected(this);
      this.parent.setActiveEditor(this);
    } else this.parent.setActiveEditor(null);
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return true;
  }
  get telemetryInitialData() {
    return { action: "added" };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t2, e2 = false) {
    if (e2) {
      this.#qe ||= /* @__PURE__ */ new Map();
      const { action: e3 } = t2;
      let i2 = this.#qe.get(e3);
      i2 && clearTimeout(i2);
      i2 = setTimeout(() => {
        this._reportTelemetry(t2);
        this.#qe.delete(e3);
        0 === this.#qe.size && (this.#qe = null);
      }, AnnotationEditor._telemetryTimeout);
      this.#qe.set(e3, i2);
      return;
    }
    t2.type ||= this.editorType;
    this._uiManager._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: t2 } });
  }
  show(t2 = this._isVisible) {
    this.div.classList.toggle("hidden", !t2);
    this._isVisible = t2;
  }
  enable() {
    this.div && (this.div.tabIndex = 0);
    this.#ke = false;
  }
  disable() {
    this.div && (this.div.tabIndex = -1);
    this.#ke = true;
  }
  updateFakeAnnotationElement(t2) {
    if (this.#Be || this.deleted) if (this.deleted) {
      this.#Be.remove();
      this.#Be = null;
    } else (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && this.#Be.updateEdited({ rect: this.getPDFRect(), popup: this.comment });
    else this.#Be = t2.addFakeAnnotation(this);
  }
  renderAnnotationElement(t2) {
    if (this.deleted) {
      t2.hide();
      return null;
    }
    let e2 = t2.container.querySelector(".annotationContent");
    if (e2) {
      if ("CANVAS" === e2.nodeName) {
        const t3 = e2;
        e2 = document.createElement("div");
        e2.classList.add("annotationContent", this.editorType);
        t3.before(e2);
      }
    } else {
      e2 = document.createElement("div");
      e2.classList.add("annotationContent", this.editorType);
      t2.container.prepend(e2);
    }
    return e2;
  }
  resetAnnotationElement(t2) {
    const { firstChild: e2 } = t2.container;
    "DIV" === e2?.nodeName && e2.classList.contains("annotationContent") && e2.remove();
  }
}
class FakeEditor extends AnnotationEditor {
  constructor(t2) {
    super(t2);
    this.annotationElementId = t2.annotationElementId;
    this.deleted = true;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const $ = 3285377520, j = 4294901760, q = 65535;
class MurmurHash3_64 {
  constructor(t2) {
    this.h1 = t2 ? 4294967295 & t2 : $;
    this.h2 = t2 ? 4294967295 & t2 : $;
  }
  update(t2) {
    let e2, i2;
    if ("string" == typeof t2) {
      e2 = new Uint8Array(2 * t2.length);
      i2 = 0;
      for (let s3 = 0, n3 = t2.length; s3 < n3; s3++) {
        const n4 = t2.charCodeAt(s3);
        if (n4 <= 255) e2[i2++] = n4;
        else {
          e2[i2++] = n4 >>> 8;
          e2[i2++] = 255 & n4;
        }
      }
    } else {
      if (!ArrayBuffer.isView(t2)) throw new Error("Invalid data format, must be a string or TypedArray.");
      e2 = t2.slice();
      i2 = e2.byteLength;
    }
    const s2 = i2 >> 2, n2 = i2 - 4 * s2, r2 = new Uint32Array(e2.buffer, 0, s2);
    let a2 = 0, o2 = 0, l2 = this.h1, h2 = this.h2;
    const d2 = 3432918353, c2 = 461845907, u2 = 11601, p2 = 13715;
    for (let t3 = 0; t3 < s2; t3++) if (1 & t3) {
      a2 = r2[t3];
      a2 = a2 * d2 & j | a2 * u2 & q;
      a2 = a2 << 15 | a2 >>> 17;
      a2 = a2 * c2 & j | a2 * p2 & q;
      l2 ^= a2;
      l2 = l2 << 13 | l2 >>> 19;
      l2 = 5 * l2 + 3864292196;
    } else {
      o2 = r2[t3];
      o2 = o2 * d2 & j | o2 * u2 & q;
      o2 = o2 << 15 | o2 >>> 17;
      o2 = o2 * c2 & j | o2 * p2 & q;
      h2 ^= o2;
      h2 = h2 << 13 | h2 >>> 19;
      h2 = 5 * h2 + 3864292196;
    }
    a2 = 0;
    switch (n2) {
      case 3:
        a2 ^= e2[4 * s2 + 2] << 16;
      case 2:
        a2 ^= e2[4 * s2 + 1] << 8;
      case 1:
        a2 ^= e2[4 * s2];
        a2 = a2 * d2 & j | a2 * u2 & q;
        a2 = a2 << 15 | a2 >>> 17;
        a2 = a2 * c2 & j | a2 * p2 & q;
        1 & s2 ? l2 ^= a2 : h2 ^= a2;
    }
    this.h1 = l2;
    this.h2 = h2;
  }
  hexdigest() {
    let t2 = this.h1, e2 = this.h2;
    t2 ^= e2 >>> 1;
    t2 = 3981806797 * t2 & j | 36045 * t2 & q;
    e2 = 4283543511 * e2 & j | (2950163797 * (e2 << 16 | t2 >>> 16) & j) >>> 16;
    t2 ^= e2 >>> 1;
    t2 = 444984403 * t2 & j | 60499 * t2 & q;
    e2 = 3301882366 * e2 & j | (3120437893 * (e2 << 16 | t2 >>> 16) & j) >>> 16;
    t2 ^= e2 >>> 1;
    return (t2 >>> 0).toString(16).padStart(8, "0") + (e2 >>> 0).toString(16).padStart(8, "0");
  }
}
const X = Object.freeze({ map: null, hash: "", transfer: void 0 });
class AnnotationStorage {
  #fi = false;
  #bi = null;
  #wi = null;
  #yi = /* @__PURE__ */ new Map();
  constructor() {
    this.onSetModified = null;
    this.onResetModified = null;
    this.onAnnotationEditor = null;
  }
  getValue(t2, e2) {
    const i2 = this.#yi.get(t2);
    return void 0 === i2 ? e2 : Object.assign(e2, i2);
  }
  getRawValue(t2) {
    return this.#yi.get(t2);
  }
  remove(t2) {
    const e2 = this.#yi.get(t2);
    if (void 0 !== e2) {
      e2 instanceof AnnotationEditor && this.#wi.delete(e2.annotationElementId);
      this.#yi.delete(t2);
      0 === this.#yi.size && this.resetModified();
      if ("function" == typeof this.onAnnotationEditor) {
        for (const t3 of this.#yi.values()) if (t3 instanceof AnnotationEditor) return;
        this.onAnnotationEditor(null);
      }
    }
  }
  setValue(t2, e2) {
    const i2 = this.#yi.get(t2);
    let s2 = false;
    if (void 0 !== i2) {
      for (const [t3, n2] of Object.entries(e2)) if (i2[t3] !== n2) {
        s2 = true;
        i2[t3] = n2;
      }
    } else {
      s2 = true;
      this.#yi.set(t2, e2);
    }
    s2 && this.#Ai();
    if (e2 instanceof AnnotationEditor) {
      (this.#wi ||= /* @__PURE__ */ new Map()).set(e2.annotationElementId, e2);
      "function" == typeof this.onAnnotationEditor && this.onAnnotationEditor(e2.constructor._type);
    }
  }
  has(t2) {
    return this.#yi.has(t2);
  }
  get size() {
    return this.#yi.size;
  }
  #Ai() {
    if (!this.#fi) {
      this.#fi = true;
      "function" == typeof this.onSetModified && this.onSetModified();
    }
  }
  resetModified() {
    if (this.#fi) {
      this.#fi = false;
      "function" == typeof this.onResetModified && this.onResetModified();
    }
  }
  get print() {
    return new PrintAnnotationStorage(this);
  }
  get serializable() {
    if (0 === this.#yi.size) return X;
    const t2 = /* @__PURE__ */ new Map(), e2 = new MurmurHash3_64(), i2 = [], s2 = /* @__PURE__ */ Object.create(null);
    let n2 = false;
    for (const [i3, r2] of this.#yi) {
      const a2 = r2 instanceof AnnotationEditor ? r2.serialize(false, s2) : r2;
      if (a2) {
        t2.set(i3, a2);
        e2.update(`${i3}:${JSON.stringify(a2)}`);
        n2 ||= !!a2.bitmap;
      }
    }
    if (n2) for (const e3 of t2.values()) e3.bitmap && i2.push(e3.bitmap);
    return t2.size > 0 ? { map: t2, hash: e2.hexdigest(), transfer: i2 } : X;
  }
  get editorStats() {
    let t2 = null;
    const e2 = /* @__PURE__ */ new Map();
    let i2 = 0, s2 = 0;
    for (const n2 of this.#yi.values()) {
      if (!(n2 instanceof AnnotationEditor)) {
        n2.popup && (n2.popup.deleted ? s2 += 1 : i2 += 1);
        continue;
      }
      n2.isCommentDeleted ? s2 += 1 : n2.hasEditedComment && (i2 += 1);
      const r2 = n2.telemetryFinalData;
      if (!r2) continue;
      const { type: a2 } = r2;
      e2.has(a2) || e2.set(a2, Object.getPrototypeOf(n2).constructor);
      t2 ||= /* @__PURE__ */ Object.create(null);
      const o2 = t2[a2] ||= /* @__PURE__ */ new Map();
      for (const [t3, e3] of Object.entries(r2)) {
        if ("type" === t3) continue;
        let i3 = o2.get(t3);
        if (!i3) {
          i3 = /* @__PURE__ */ new Map();
          o2.set(t3, i3);
        }
        const s3 = i3.get(e3) ?? 0;
        i3.set(e3, s3 + 1);
      }
    }
    if (s2 > 0 || i2 > 0) {
      t2 ||= /* @__PURE__ */ Object.create(null);
      t2.comments = { deleted: s2, edited: i2 };
    }
    if (!t2) return null;
    for (const [i3, s3] of e2) t2[i3] = s3.computeTelemetryFinalData(t2[i3]);
    return t2;
  }
  resetModifiedIds() {
    this.#bi = null;
  }
  updateEditor(t2, e2) {
    const i2 = this.#wi?.get(t2);
    if (i2) {
      i2.updateFromAnnotationLayer(e2);
      return true;
    }
    return false;
  }
  getEditor(t2) {
    return this.#wi?.get(t2) || null;
  }
  get modifiedIds() {
    if (this.#bi) return this.#bi;
    const t2 = [];
    if (this.#wi) for (const e2 of this.#wi.values()) e2.serialize() && t2.push(e2.annotationElementId);
    return this.#bi = { ids: new Set(t2), hash: t2.join(",") };
  }
  [Symbol.iterator]() {
    return this.#yi.entries();
  }
}
class PrintAnnotationStorage extends AnnotationStorage {
  #vi;
  constructor(t2) {
    super();
    const { map: e2, hash: i2, transfer: s2 } = t2.serializable, n2 = structuredClone(e2, s2 ? { transfer: s2 } : null);
    this.#vi = { map: n2, hash: i2, transfer: s2 };
  }
  get print() {
    unreachable("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return this.#vi;
  }
  get modifiedIds() {
    return shadow(this, "modifiedIds", { ids: /* @__PURE__ */ new Set(), hash: "" });
  }
}
class FontLoader {
  #xi = /* @__PURE__ */ new Set();
  constructor({ ownerDocument: t2 = globalThis.document, styleElement: e2 = null }) {
    this._document = t2;
    this.nativeFontFaces = /* @__PURE__ */ new Set();
    this.styleElement = null;
    this.loadingRequests = [];
    this.loadTestFontId = 0;
  }
  addNativeFontFace(t2) {
    this.nativeFontFaces.add(t2);
    this._document.fonts.add(t2);
  }
  removeNativeFontFace(t2) {
    this.nativeFontFaces.delete(t2);
    this._document.fonts.delete(t2);
  }
  insertRule(t2) {
    if (!this.styleElement) {
      this.styleElement = this._document.createElement("style");
      this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
    }
    const e2 = this.styleElement.sheet;
    e2.insertRule(t2, e2.cssRules.length);
  }
  clear() {
    for (const t2 of this.nativeFontFaces) this._document.fonts.delete(t2);
    this.nativeFontFaces.clear();
    this.#xi.clear();
    if (this.styleElement) {
      this.styleElement.remove();
      this.styleElement = null;
    }
  }
  async loadSystemFont({ systemFontInfo: t2, disableFontFace: e2, _inspectFont: i2 }) {
    if (t2 && !this.#xi.has(t2.loadedName)) {
      assert(!e2, "loadSystemFont shouldn't be called when `disableFontFace` is set.");
      if (this.isFontLoadingAPISupported) {
        const { loadedName: e3, src: s2, style: n2 } = t2, r2 = new FontFace(e3, s2, n2);
        this.addNativeFontFace(r2);
        try {
          await r2.load();
          this.#xi.add(e3);
          i2?.(t2);
        } catch {
          warn(`Cannot load system font: ${t2.baseFontName}, installing it could help to improve PDF rendering.`);
          this.removeNativeFontFace(r2);
        }
        return;
      }
      unreachable("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t2) {
    if (t2.attached || t2.missingFile && !t2.systemFontInfo) return;
    t2.attached = true;
    if (t2.systemFontInfo) {
      await this.loadSystemFont(t2);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const e3 = t2.createNativeFontFace();
      if (e3) {
        this.addNativeFontFace(e3);
        try {
          await e3.loaded;
        } catch (i2) {
          warn(`Failed to load font '${e3.family}': '${i2}'.`);
          t2.disableFontFace = true;
          throw i2;
        }
      }
      return;
    }
    const e2 = t2.createFontFaceRule();
    if (e2) {
      this.insertRule(e2);
      if (this.isSyncFontLoadingSupported) return;
      await new Promise((e3) => {
        const i2 = this._queueLoadingCallback(e3);
        this._prepareFontLoadEvent(t2, i2);
      });
    }
  }
  get isFontLoadingAPISupported() {
    return shadow(this, "isFontLoadingAPISupported", !!this._document?.fonts);
  }
  get isSyncFontLoadingSupported() {
    return shadow(this, "isSyncFontLoadingSupported", t || util_FeatureTest.platform.isFirefox);
  }
  _queueLoadingCallback(t2) {
    const { loadingRequests: e2 } = this, i2 = { done: false, complete: function completeRequest() {
      assert(!i2.done, "completeRequest() cannot be called twice.");
      i2.done = true;
      for (; e2.length > 0 && e2[0].done; ) {
        const t3 = e2.shift();
        setTimeout(t3.callback, 0);
      }
    }, callback: t2 };
    e2.push(i2);
    return i2;
  }
  get _loadTestFont() {
    return shadow(this, "_loadTestFont", atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="));
  }
  _prepareFontLoadEvent(t2, e2) {
    function int32(t3, e3) {
      return t3.charCodeAt(e3) << 24 | t3.charCodeAt(e3 + 1) << 16 | t3.charCodeAt(e3 + 2) << 8 | 255 & t3.charCodeAt(e3 + 3);
    }
    function spliceString(t3, e3, i3, s3) {
      return t3.substring(0, e3) + s3 + t3.substring(e3 + i3);
    }
    let i2, s2;
    const n2 = this._document.createElement("canvas");
    n2.width = 1;
    n2.height = 1;
    const r2 = n2.getContext("2d");
    let a2 = 0;
    const o2 = `lt${Date.now()}${this.loadTestFontId++}`;
    let l2 = this._loadTestFont;
    l2 = spliceString(l2, 976, o2.length, o2);
    const h2 = 1482184792;
    let d2 = int32(l2, 16);
    for (i2 = 0, s2 = o2.length - 3; i2 < s2; i2 += 4) d2 = d2 - h2 + int32(o2, i2) | 0;
    i2 < o2.length && (d2 = d2 - h2 + int32(o2 + "XXX", i2) | 0);
    l2 = spliceString(l2, 16, 4, (function string32(t3) {
      return String.fromCharCode(t3 >> 24 & 255, t3 >> 16 & 255, t3 >> 8 & 255, 255 & t3);
    })(d2));
    const c2 = `@font-face {font-family:"${o2}";src:${`url(data:font/opentype;base64,${btoa(l2)});`}}`;
    this.insertRule(c2);
    const u2 = this._document.createElement("div");
    u2.style.visibility = "hidden";
    u2.style.width = u2.style.height = "10px";
    u2.style.position = "absolute";
    u2.style.top = u2.style.left = "0px";
    for (const e3 of [t2.loadedName, o2]) {
      const t3 = this._document.createElement("span");
      t3.textContent = "Hi";
      t3.style.fontFamily = e3;
      u2.append(t3);
    }
    this._document.body.append(u2);
    !(function isFontReady(t3, e3) {
      if (++a2 > 30) {
        warn("Load test font never loaded.");
        e3();
        return;
      }
      r2.font = "30px " + t3;
      r2.fillText(".", 0, 20);
      r2.getImageData(0, 0, 1, 1).data[3] > 0 ? e3() : setTimeout(isFontReady.bind(null, t3, e3));
    })(o2, () => {
      u2.remove();
      e2.complete();
    });
  }
}
class FontFaceObject {
  #Ei;
  constructor(t2, e2 = null, i2, s2) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    this.#Ei = t2;
    this._inspectFont = e2;
    i2 && Object.assign(this, i2);
    s2 && (this.charProcOperatorList = s2);
  }
  createNativeFontFace() {
    if (!this.data || this.disableFontFace) return null;
    let t2;
    if (this.cssFontInfo) {
      const e2 = { weight: this.cssFontInfo.fontWeight };
      this.cssFontInfo.italicAngle && (e2.style = `oblique ${this.cssFontInfo.italicAngle}deg`);
      t2 = new FontFace(this.cssFontInfo.fontFamily, this.data, e2);
    } else t2 = new FontFace(this.loadedName, this.data, {});
    this._inspectFont?.(this);
    return t2;
  }
  createFontFaceRule() {
    if (!this.data || this.disableFontFace) return null;
    const t2 = `url(data:${this.mimetype};base64,${toBase64Util(this.data)});`;
    let e2;
    if (this.cssFontInfo) {
      let i2 = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (i2 += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`);
      e2 = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i2}src:${t2}}`;
    } else e2 = `@font-face {font-family:"${this.loadedName}";src:${t2}}`;
    this._inspectFont?.(this, t2);
    return e2;
  }
  getPathGenerator(t2, e2) {
    if (void 0 !== this.compiledGlyphs[e2]) return this.compiledGlyphs[e2];
    const i2 = this.loadedName + "_path_" + e2;
    let s2;
    try {
      s2 = t2.get(i2);
    } catch (t3) {
      warn(`getPathGenerator - ignoring character: "${t3}".`);
    }
    const n2 = new Path2D(s2 || "");
    this.fontExtraProperties || t2.delete(i2);
    return this.compiledGlyphs[e2] = n2;
  }
  get black() {
    return this.#Ei.black;
  }
  get bold() {
    return this.#Ei.bold;
  }
  get disableFontFace() {
    return this.#Ei.disableFontFace ?? false;
  }
  get fontExtraProperties() {
    return this.#Ei.fontExtraProperties ?? false;
  }
  get isInvalidPDFjsFont() {
    return this.#Ei.isInvalidPDFjsFont;
  }
  get isType3Font() {
    return this.#Ei.isType3Font;
  }
  get italic() {
    return this.#Ei.italic;
  }
  get missingFile() {
    return this.#Ei.missingFile;
  }
  get remeasure() {
    return this.#Ei.remeasure;
  }
  get vertical() {
    return this.#Ei.vertical;
  }
  get ascent() {
    return this.#Ei.ascent;
  }
  get defaultWidth() {
    return this.#Ei.defaultWidth;
  }
  get descent() {
    return this.#Ei.descent;
  }
  get bbox() {
    return this.#Ei.bbox;
  }
  get fontMatrix() {
    return this.#Ei.fontMatrix;
  }
  get fallbackName() {
    return this.#Ei.fallbackName;
  }
  get loadedName() {
    return this.#Ei.loadedName;
  }
  get mimetype() {
    return this.#Ei.mimetype;
  }
  get name() {
    return this.#Ei.name;
  }
  get data() {
    return this.#Ei.data;
  }
  clearData() {
    this.#Ei.clearData();
  }
  get cssFontInfo() {
    return this.#Ei.cssFontInfo;
  }
  get systemFontInfo() {
    return this.#Ei.systemFontInfo;
  }
  get defaultVMetrics() {
    return this.#Ei.defaultVMetrics;
  }
}
function getFactoryUrlProp(t2) {
  if ("string" != typeof t2) return null;
  if (t2.endsWith("/")) return t2;
  throw new Error(`Invalid factory url: "${t2}" must include trailing slash.`);
}
const isRefProxy = (t2) => "object" == typeof t2 && Number.isInteger(t2?.num) && t2.num >= 0 && Number.isInteger(t2?.gen) && t2.gen >= 0, K = function _isValidExplicitDest(t2, e2, i2) {
  if (!Array.isArray(i2) || i2.length < 2) return false;
  const [s2, n2, ...r2] = i2;
  if (!t2(s2) && !Number.isInteger(s2)) return false;
  if (!e2(n2)) return false;
  const a2 = r2.length;
  let o2 = true;
  switch (n2.name) {
    case "XYZ":
      if (a2 < 2 || a2 > 3) return false;
      break;
    case "Fit":
    case "FitB":
      return 0 === a2;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (a2 > 1) return false;
      break;
    case "FitR":
      if (4 !== a2) return false;
      o2 = false;
      break;
    default:
      return false;
  }
  for (const t3 of r2) if (!("number" == typeof t3 || o2 && null === t3)) return false;
  return true;
}.bind(null, isRefProxy, (t2) => "object" == typeof t2 && "string" == typeof t2?.name);
class LoopbackPort {
  #Ci = /* @__PURE__ */ new Map();
  #_i = Promise.resolve();
  postMessage(t2, e2) {
    const i2 = { data: structuredClone(t2, e2 ? { transfer: e2 } : null) };
    this.#_i.then(() => {
      for (const [t3] of this.#Ci) t3.call(this, i2);
    });
  }
  addEventListener(t2, e2, i2 = null) {
    let s2 = null;
    if (i2?.signal instanceof AbortSignal) {
      const { signal: n2 } = i2;
      if (n2.aborted) {
        warn("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const onAbort = () => this.removeEventListener(t2, e2);
      s2 = () => n2.removeEventListener("abort", onAbort);
      n2.addEventListener("abort", onAbort);
    }
    this.#Ci.set(e2, s2);
  }
  removeEventListener(t2, e2) {
    const i2 = this.#Ci.get(e2);
    i2?.();
    this.#Ci.delete(e2);
  }
  terminate() {
    for (const [, t2] of this.#Ci) t2?.();
    this.#Ci.clear();
  }
}
const Y = 1, Q = 2, J = 1, Z = 2, tt = 3, et = 4, it = 5, st = 6, nt = 7, rt = 8;
function onFn() {
}
function wrapReason(t2) {
  if (t2 instanceof AbortException || t2 instanceof InvalidPDFException || t2 instanceof PasswordException || t2 instanceof ResponseException || t2 instanceof UnknownErrorException) return t2;
  t2 instanceof Error || "object" == typeof t2 && null !== t2 || unreachable('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
  switch (t2.name) {
    case "AbortException":
      return new AbortException(t2.message);
    case "InvalidPDFException":
      return new InvalidPDFException(t2.message);
    case "PasswordException":
      return new PasswordException(t2.message, t2.code);
    case "ResponseException":
      return new ResponseException(t2.message, t2.status, t2.missing);
    case "UnknownErrorException":
      return new UnknownErrorException(t2.message, t2.details);
  }
  return new UnknownErrorException(t2.message, t2.toString());
}
class MessageHandler {
  #Si = new AbortController();
  constructor(t2, e2, i2) {
    this.sourceName = t2;
    this.targetName = e2;
    this.comObj = i2;
    this.callbackId = 1;
    this.streamId = 1;
    this.streamSinks = /* @__PURE__ */ Object.create(null);
    this.streamControllers = /* @__PURE__ */ Object.create(null);
    this.callbackCapabilities = /* @__PURE__ */ Object.create(null);
    this.actionHandler = /* @__PURE__ */ Object.create(null);
    i2.addEventListener("message", this.#Ti.bind(this), { signal: this.#Si.signal });
  }
  #Ti({ data: t2 }) {
    if (t2.targetName !== this.sourceName) return;
    if (t2.stream) {
      this.#Di(t2);
      return;
    }
    if (t2.callback) {
      const e3 = t2.callbackId, i2 = this.callbackCapabilities[e3];
      if (!i2) throw new Error(`Cannot resolve callback ${e3}`);
      delete this.callbackCapabilities[e3];
      if (t2.callback === Y) i2.resolve(t2.data);
      else {
        if (t2.callback !== Q) throw new Error("Unexpected callback case");
        i2.reject(wrapReason(t2.reason));
      }
      return;
    }
    const e2 = this.actionHandler[t2.action];
    if (!e2) throw new Error(`Unknown action from worker: ${t2.action}`);
    if (t2.callbackId) {
      const i2 = this.sourceName, s2 = t2.sourceName, n2 = this.comObj;
      Promise.try(e2, t2.data).then(function(e3) {
        n2.postMessage({ sourceName: i2, targetName: s2, callback: Y, callbackId: t2.callbackId, data: e3 });
      }, function(e3) {
        n2.postMessage({ sourceName: i2, targetName: s2, callback: Q, callbackId: t2.callbackId, reason: wrapReason(e3) });
      });
      return;
    }
    t2.streamId ? this.#Mi(t2) : e2(t2.data);
  }
  on(t2, e2) {
    const i2 = this.actionHandler;
    if (i2[t2]) throw new Error(`There is already an actionName called "${t2}"`);
    i2[t2] = e2;
  }
  send(t2, e2, i2) {
    this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t2, data: e2 }, i2);
  }
  sendWithPromise(t2, e2, i2) {
    const s2 = this.callbackId++, n2 = Promise.withResolvers();
    this.callbackCapabilities[s2] = n2;
    try {
      this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: t2, callbackId: s2, data: e2 }, i2);
    } catch (t3) {
      n2.reject(t3);
    }
    return n2.promise;
  }
  sendWithStream(t2, e2, i2, s2) {
    const n2 = this.streamId++, r2 = this.sourceName, a2 = this.targetName, o2 = this.comObj;
    return new ReadableStream({ start: (i3) => {
      const l2 = Promise.withResolvers();
      this.streamControllers[n2] = { controller: i3, startCall: l2, pullCall: null, cancelCall: null, isClosed: false };
      o2.postMessage({ sourceName: r2, targetName: a2, action: t2, streamId: n2, data: e2, desiredSize: i3.desiredSize }, s2);
      return l2.promise;
    }, pull: (t3) => {
      const e3 = Promise.withResolvers();
      this.streamControllers[n2].pullCall = e3;
      o2.postMessage({ sourceName: r2, targetName: a2, stream: st, streamId: n2, desiredSize: t3.desiredSize });
      return e3.promise;
    }, cancel: (t3) => {
      assert(t3 instanceof Error, "cancel must have a valid reason");
      const e3 = Promise.withResolvers();
      this.streamControllers[n2].cancelCall = e3;
      this.streamControllers[n2].isClosed = true;
      o2.postMessage({ sourceName: r2, targetName: a2, stream: J, streamId: n2, reason: wrapReason(t3) });
      return e3.promise;
    } }, i2);
  }
  #Mi(t2) {
    const e2 = t2.streamId, i2 = this.sourceName, s2 = t2.sourceName, n2 = this.comObj, r2 = this, a2 = this.actionHandler[t2.action], o2 = { enqueue(t3, r3 = 1, a3) {
      if (this.isCancelled) return;
      const o3 = this.desiredSize;
      this.desiredSize -= r3;
      if (o3 > 0 && this.desiredSize <= 0) {
        this.sinkCapability = Promise.withResolvers();
        this.ready = this.sinkCapability.promise;
      }
      n2.postMessage({ sourceName: i2, targetName: s2, stream: et, streamId: e2, chunk: t3 }, a3);
    }, close() {
      if (!this.isCancelled) {
        this.isCancelled = true;
        n2.postMessage({ sourceName: i2, targetName: s2, stream: tt, streamId: e2 });
        delete r2.streamSinks[e2];
      }
    }, error(t3) {
      assert(t3 instanceof Error, "error must have a valid reason");
      if (!this.isCancelled) {
        this.isCancelled = true;
        n2.postMessage({ sourceName: i2, targetName: s2, stream: it, streamId: e2, reason: wrapReason(t3) });
      }
    }, sinkCapability: Promise.withResolvers(), onPull: null, onCancel: null, isCancelled: false, desiredSize: t2.desiredSize, ready: null };
    o2.sinkCapability.resolve();
    o2.ready = o2.sinkCapability.promise;
    this.streamSinks[e2] = o2;
    Promise.try(a2, t2.data, o2).then(function() {
      n2.postMessage({ sourceName: i2, targetName: s2, stream: rt, streamId: e2, success: true });
    }, function(t3) {
      n2.postMessage({ sourceName: i2, targetName: s2, stream: rt, streamId: e2, reason: wrapReason(t3) });
    });
  }
  #Di(t2) {
    const e2 = t2.streamId, i2 = this.sourceName, s2 = t2.sourceName, n2 = this.comObj, r2 = this.streamControllers[e2], a2 = this.streamSinks[e2];
    switch (t2.stream) {
      case rt:
        t2.success ? r2.startCall.resolve() : r2.startCall.reject(wrapReason(t2.reason));
        break;
      case nt:
        t2.success ? r2.pullCall.resolve() : r2.pullCall.reject(wrapReason(t2.reason));
        break;
      case st:
        if (!a2) {
          n2.postMessage({ sourceName: i2, targetName: s2, stream: nt, streamId: e2, success: true });
          break;
        }
        a2.desiredSize <= 0 && t2.desiredSize > 0 && a2.sinkCapability.resolve();
        a2.desiredSize = t2.desiredSize;
        Promise.try(a2.onPull || onFn).then(function() {
          n2.postMessage({ sourceName: i2, targetName: s2, stream: nt, streamId: e2, success: true });
        }, function(t3) {
          n2.postMessage({ sourceName: i2, targetName: s2, stream: nt, streamId: e2, reason: wrapReason(t3) });
        });
        break;
      case et:
        assert(r2, "enqueue should have stream controller");
        if (r2.isClosed) break;
        r2.controller.enqueue(t2.chunk);
        break;
      case tt:
        assert(r2, "close should have stream controller");
        if (r2.isClosed) break;
        r2.isClosed = true;
        r2.controller.close();
        this.#ki(r2, e2);
        break;
      case it:
        assert(r2, "error should have stream controller");
        r2.controller.error(wrapReason(t2.reason));
        this.#ki(r2, e2);
        break;
      case Z:
        t2.success ? r2.cancelCall.resolve() : r2.cancelCall.reject(wrapReason(t2.reason));
        this.#ki(r2, e2);
        break;
      case J:
        if (!a2) break;
        const o2 = wrapReason(t2.reason);
        Promise.try(a2.onCancel || onFn, o2).then(function() {
          n2.postMessage({ sourceName: i2, targetName: s2, stream: Z, streamId: e2, success: true });
        }, function(t3) {
          n2.postMessage({ sourceName: i2, targetName: s2, stream: Z, streamId: e2, reason: wrapReason(t3) });
        });
        a2.sinkCapability.reject(o2);
        a2.isCancelled = true;
        delete this.streamSinks[e2];
        break;
      default:
        throw new Error("Unexpected stream case");
    }
  }
  async #ki(t2, e2) {
    await Promise.allSettled([t2.startCall?.promise, t2.pullCall?.promise, t2.cancelCall?.promise]);
    delete this.streamControllers[e2];
  }
  destroy() {
    this.#Si?.abort();
    this.#Si = null;
  }
}
class BaseCanvasFactory {
  #Pi = false;
  constructor({ enableHWA: t2 = false }) {
    this.#Pi = t2;
  }
  create(t2, e2) {
    if (t2 <= 0 || e2 <= 0) throw new Error("Invalid canvas size");
    const i2 = this._createCanvas(t2, e2);
    return { canvas: i2, context: i2.getContext("2d", { willReadFrequently: !this.#Pi }) };
  }
  reset(t2, e2, i2) {
    if (!t2.canvas) throw new Error("Canvas is not specified");
    if (e2 <= 0 || i2 <= 0) throw new Error("Invalid canvas size");
    t2.canvas.width = e2;
    t2.canvas.height = i2;
  }
  destroy(t2) {
    if (!t2.canvas) throw new Error("Canvas is not specified");
    t2.canvas.width = 0;
    t2.canvas.height = 0;
    t2.canvas = null;
    t2.context = null;
  }
  _createCanvas(t2, e2) {
    unreachable("Abstract method `_createCanvas` called.");
  }
}
class DOMCanvasFactory extends BaseCanvasFactory {
  constructor({ ownerDocument: t2 = globalThis.document, enableHWA: e2 = false }) {
    super({ enableHWA: e2 });
    this._document = t2;
  }
  _createCanvas(t2, e2) {
    const i2 = this._document.createElement("canvas");
    i2.width = t2;
    i2.height = e2;
    return i2;
  }
}
class BaseCMapReaderFactory {
  constructor({ baseUrl: t2 = null, isCompressed: e2 = true }) {
    this.baseUrl = t2;
    this.isCompressed = e2;
  }
  async fetch({ name: t2 }) {
    if (!this.baseUrl) throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    if (!t2) throw new Error("CMap name must be specified.");
    const e2 = this.baseUrl + t2 + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(e2).then((t3) => ({ cMapData: t3, isCompressed: this.isCompressed })).catch((t3) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e2}`);
    });
  }
  async _fetch(t2) {
    unreachable("Abstract method `_fetch` called.");
  }
}
class DOMCMapReaderFactory extends BaseCMapReaderFactory {
  async _fetch(t2) {
    const e2 = await fetchData(t2, this.isCompressed ? "arraybuffer" : "text");
    return e2 instanceof ArrayBuffer ? new Uint8Array(e2) : stringToBytes(e2);
  }
}
class BaseFilterFactory {
  addFilter(t2) {
    return "none";
  }
  addHCMFilter(t2, e2) {
    return "none";
  }
  addAlphaFilter(t2) {
    return "none";
  }
  addLuminosityFilter(t2) {
    return "none";
  }
  addHighlightHCMFilter(t2, e2, i2, s2, n2) {
    return "none";
  }
  destroy(t2 = false) {
  }
}
class DOMFilterFactory extends BaseFilterFactory {
  #Ii;
  #Fi;
  #Ri;
  #Li;
  #Bi;
  #Oi;
  #v = 0;
  constructor({ docId: t2, ownerDocument: e2 = globalThis.document }) {
    super();
    this.#Li = t2;
    this.#Bi = e2;
  }
  get #E() {
    return this.#Fi ||= /* @__PURE__ */ new Map();
  }
  get #Ni() {
    return this.#Oi ||= /* @__PURE__ */ new Map();
  }
  get #Ui() {
    if (!this.#Ri) {
      const t2 = this.#Bi.createElement("div"), { style: e2 } = t2;
      e2.visibility = "hidden";
      e2.contain = "strict";
      e2.width = e2.height = 0;
      e2.position = "absolute";
      e2.top = e2.left = 0;
      e2.zIndex = -1;
      const i2 = this.#Bi.createElementNS(G, "svg");
      i2.setAttribute("width", 0);
      i2.setAttribute("height", 0);
      this.#Ri = this.#Bi.createElementNS(G, "defs");
      t2.append(i2);
      i2.append(this.#Ri);
      this.#Bi.body.append(t2);
    }
    return this.#Ri;
  }
  #Hi(t2) {
    if (1 === t2.length) {
      const e3 = t2[0], i3 = new Array(256);
      for (let t3 = 0; t3 < 256; t3++) i3[t3] = e3[t3] / 255;
      const s3 = i3.join(",");
      return [s3, s3, s3];
    }
    const [e2, i2, s2] = t2, n2 = new Array(256), r2 = new Array(256), a2 = new Array(256);
    for (let t3 = 0; t3 < 256; t3++) {
      n2[t3] = e2[t3] / 255;
      r2[t3] = i2[t3] / 255;
      a2[t3] = s2[t3] / 255;
    }
    return [n2.join(","), r2.join(","), a2.join(",")];
  }
  #zi(t2) {
    if (void 0 === this.#Ii) {
      this.#Ii = "";
      const t3 = this.#Bi.URL;
      t3 !== this.#Bi.baseURI && (isDataScheme(t3) ? warn('#createUrl: ignore "data:"-URL for performance reasons.') : this.#Ii = updateUrlHash(t3, ""));
    }
    return `url(${this.#Ii}#${t2})`;
  }
  addFilter(t2) {
    if (!t2) return "none";
    let e2 = this.#E.get(t2);
    if (e2) return e2;
    const [i2, s2, n2] = this.#Hi(t2), r2 = 1 === t2.length ? i2 : `${i2}${s2}${n2}`;
    e2 = this.#E.get(r2);
    if (e2) {
      this.#E.set(t2, e2);
      return e2;
    }
    const a2 = `g_${this.#Li}_transfer_map_${this.#v++}`, o2 = this.#zi(a2);
    this.#E.set(t2, o2);
    this.#E.set(r2, o2);
    const l2 = this.#Gi(a2);
    this.#Wi(i2, s2, n2, l2);
    return o2;
  }
  addHCMFilter(t2, e2) {
    const i2 = `${t2}-${e2}`, s2 = "base";
    let n2 = this.#Ni.get(s2);
    if (n2?.key === i2) return n2.url;
    if (n2) {
      n2.filter?.remove();
      n2.key = i2;
      n2.url = "none";
      n2.filter = null;
    } else {
      n2 = { key: i2, url: "none", filter: null };
      this.#Ni.set(s2, n2);
    }
    if (!t2 || !e2) return n2.url;
    const r2 = this.#Vi(t2);
    t2 = Util.makeHexColor(...r2);
    const a2 = this.#Vi(e2);
    e2 = Util.makeHexColor(...a2);
    this.#Ui.style.color = "";
    if ("#000000" === t2 && "#ffffff" === e2 || t2 === e2) return n2.url;
    const o2 = new Array(256);
    for (let t3 = 0; t3 <= 255; t3++) {
      const e3 = t3 / 255;
      o2[t3] = e3 <= 0.03928 ? e3 / 12.92 : ((e3 + 0.055) / 1.055) ** 2.4;
    }
    const l2 = o2.join(","), h2 = `g_${this.#Li}_hcm_filter`, d2 = n2.filter = this.#Gi(h2);
    this.#Wi(l2, l2, l2, d2);
    this.#$i(d2);
    const getSteps = (t3, e3) => {
      const i3 = r2[t3] / 255, s3 = a2[t3] / 255, n3 = new Array(e3 + 1);
      for (let t4 = 0; t4 <= e3; t4++) n3[t4] = i3 + t4 / e3 * (s3 - i3);
      return n3.join(",");
    };
    this.#Wi(getSteps(0, 5), getSteps(1, 5), getSteps(2, 5), d2);
    n2.url = this.#zi(h2);
    return n2.url;
  }
  addAlphaFilter(t2) {
    let e2 = this.#E.get(t2);
    if (e2) return e2;
    const [i2] = this.#Hi([t2]), s2 = `alpha_${i2}`;
    e2 = this.#E.get(s2);
    if (e2) {
      this.#E.set(t2, e2);
      return e2;
    }
    const n2 = `g_${this.#Li}_alpha_map_${this.#v++}`, r2 = this.#zi(n2);
    this.#E.set(t2, r2);
    this.#E.set(s2, r2);
    const a2 = this.#Gi(n2);
    this.#ji(i2, a2);
    return r2;
  }
  addLuminosityFilter(t2) {
    let e2, i2, s2 = this.#E.get(t2 || "luminosity");
    if (s2) return s2;
    if (t2) {
      [e2] = this.#Hi([t2]);
      i2 = `luminosity_${e2}`;
    } else i2 = "luminosity";
    s2 = this.#E.get(i2);
    if (s2) {
      this.#E.set(t2, s2);
      return s2;
    }
    const n2 = `g_${this.#Li}_luminosity_map_${this.#v++}`, r2 = this.#zi(n2);
    this.#E.set(t2, r2);
    this.#E.set(i2, r2);
    const a2 = this.#Gi(n2);
    this.#qi(a2);
    t2 && this.#ji(e2, a2);
    return r2;
  }
  addHighlightHCMFilter(t2, e2, i2, s2, n2) {
    const r2 = `${e2}-${i2}-${s2}-${n2}`;
    let a2 = this.#Ni.get(t2);
    if (a2?.key === r2) return a2.url;
    if (a2) {
      a2.filter?.remove();
      a2.key = r2;
      a2.url = "none";
      a2.filter = null;
    } else {
      a2 = { key: r2, url: "none", filter: null };
      this.#Ni.set(t2, a2);
    }
    if (!e2 || !i2) return a2.url;
    const [o2, l2] = [e2, i2].map(this.#Vi.bind(this));
    let h2 = Math.round(0.2126 * o2[0] + 0.7152 * o2[1] + 0.0722 * o2[2]), d2 = Math.round(0.2126 * l2[0] + 0.7152 * l2[1] + 0.0722 * l2[2]), [c2, u2] = [s2, n2].map(this.#Vi.bind(this));
    d2 < h2 && ([h2, d2, c2, u2] = [d2, h2, u2, c2]);
    this.#Ui.style.color = "";
    const getSteps = (t3, e3, i3) => {
      const s3 = new Array(256), n3 = (d2 - h2) / i3, r3 = t3 / 255, a3 = (e3 - t3) / (255 * i3);
      let o3 = 0;
      for (let t4 = 0; t4 <= i3; t4++) {
        const e4 = Math.round(h2 + t4 * n3), i4 = r3 + t4 * a3;
        for (let t5 = o3; t5 <= e4; t5++) s3[t5] = i4;
        o3 = e4 + 1;
      }
      for (let t4 = o3; t4 < 256; t4++) s3[t4] = s3[o3 - 1];
      return s3.join(",");
    }, p2 = `g_${this.#Li}_hcm_${t2}_filter`, g2 = a2.filter = this.#Gi(p2);
    this.#$i(g2);
    this.#Wi(getSteps(c2[0], u2[0], 5), getSteps(c2[1], u2[1], 5), getSteps(c2[2], u2[2], 5), g2);
    a2.url = this.#zi(p2);
    return a2.url;
  }
  destroy(t2 = false) {
    if (!t2 || !this.#Oi?.size) {
      this.#Ri?.parentNode.parentNode.remove();
      this.#Ri = null;
      this.#Fi?.clear();
      this.#Fi = null;
      this.#Oi?.clear();
      this.#Oi = null;
      this.#v = 0;
    }
  }
  #qi(t2) {
    const e2 = this.#Bi.createElementNS(G, "feColorMatrix");
    e2.setAttribute("type", "matrix");
    e2.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0");
    t2.append(e2);
  }
  #$i(t2) {
    const e2 = this.#Bi.createElementNS(G, "feColorMatrix");
    e2.setAttribute("type", "matrix");
    e2.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0");
    t2.append(e2);
  }
  #Gi(t2) {
    const e2 = this.#Bi.createElementNS(G, "filter");
    e2.setAttribute("color-interpolation-filters", "sRGB");
    e2.setAttribute("id", t2);
    this.#Ui.append(e2);
    return e2;
  }
  #Xi(t2, e2, i2) {
    const s2 = this.#Bi.createElementNS(G, e2);
    s2.setAttribute("type", "discrete");
    s2.setAttribute("tableValues", i2);
    t2.append(s2);
  }
  #Wi(t2, e2, i2, s2) {
    const n2 = this.#Bi.createElementNS(G, "feComponentTransfer");
    s2.append(n2);
    this.#Xi(n2, "feFuncR", t2);
    this.#Xi(n2, "feFuncG", e2);
    this.#Xi(n2, "feFuncB", i2);
  }
  #ji(t2, e2) {
    const i2 = this.#Bi.createElementNS(G, "feComponentTransfer");
    e2.append(i2);
    this.#Xi(i2, "feFuncA", t2);
  }
  #Vi(t2) {
    this.#Ui.style.color = t2;
    return getRGB(getComputedStyle(this.#Ui).getPropertyValue("color"));
  }
}
class BaseStandardFontDataFactory {
  constructor({ baseUrl: t2 = null }) {
    this.baseUrl = t2;
  }
  async fetch({ filename: t2 }) {
    if (!this.baseUrl) throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    if (!t2) throw new Error("Font filename must be specified.");
    const e2 = `${this.baseUrl}${t2}`;
    return this._fetch(e2).catch((t3) => {
      throw new Error(`Unable to load font data at: ${e2}`);
    });
  }
  async _fetch(t2) {
    unreachable("Abstract method `_fetch` called.");
  }
}
class DOMStandardFontDataFactory extends BaseStandardFontDataFactory {
  async _fetch(t2) {
    const e2 = await fetchData(t2, "arraybuffer");
    return new Uint8Array(e2);
  }
}
class BaseWasmFactory {
  constructor({ baseUrl: t2 = null }) {
    this.baseUrl = t2;
  }
  async fetch({ filename: t2 }) {
    if (!this.baseUrl) throw new Error("Ensure that the `wasmUrl` API parameter is provided.");
    if (!t2) throw new Error("Wasm filename must be specified.");
    const e2 = `${this.baseUrl}${t2}`;
    return this._fetch(e2).catch((t3) => {
      throw new Error(`Unable to load wasm data at: ${e2}`);
    });
  }
  async _fetch(t2) {
    unreachable("Abstract method `_fetch` called.");
  }
}
class DOMWasmFactory extends BaseWasmFactory {
  async _fetch(t2) {
    const e2 = await fetchData(t2, "arraybuffer");
    return new Uint8Array(e2);
  }
}
t && warn("Please use the `legacy` build in Node.js environments.");
async function node_utils_fetchData(t2) {
  const e2 = process.getBuiltinModule("fs"), i2 = await e2.promises.readFile(t2);
  return new Uint8Array(i2);
}
class NodeFilterFactory extends BaseFilterFactory {
}
class NodeCanvasFactory extends BaseCanvasFactory {
  _createCanvas(t2, e2) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t2, e2);
  }
}
class NodeCMapReaderFactory extends BaseCMapReaderFactory {
  async _fetch(t2) {
    return node_utils_fetchData(t2);
  }
}
class NodeStandardFontDataFactory extends BaseStandardFontDataFactory {
  async _fetch(t2) {
    return node_utils_fetchData(t2);
  }
}
class NodeWasmFactory extends BaseWasmFactory {
  async _fetch(t2) {
    return node_utils_fetchData(t2);
  }
}
const at = "__forcedDependency", { floor: ot, ceil: lt } = Math;
function expandBBox(t2, e2, i2, s2, n2, r2) {
  t2[4 * e2 + 0] = Math.min(t2[4 * e2 + 0], i2);
  t2[4 * e2 + 1] = Math.min(t2[4 * e2 + 1], s2);
  t2[4 * e2 + 2] = Math.max(t2[4 * e2 + 2], n2);
  t2[4 * e2 + 3] = Math.max(t2[4 * e2 + 3], r2);
}
const ht = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
class BBoxReader {
  #Ki;
  #Yi;
  constructor(t2, e2) {
    this.#Ki = t2;
    this.#Yi = e2;
  }
  get length() {
    return this.#Ki.length;
  }
  isEmpty(t2) {
    return this.#Ki[t2] === ht;
  }
  minX(t2) {
    return this.#Yi[4 * t2 + 0] / 256;
  }
  minY(t2) {
    return this.#Yi[4 * t2 + 1] / 256;
  }
  maxX(t2) {
    return (this.#Yi[4 * t2 + 2] + 1) / 256;
  }
  maxY(t2) {
    return (this.#Yi[4 * t2 + 3] + 1) / 256;
  }
}
const ensureDebugMetadata = (t2, e2) => {
  if (!t2) return;
  let i2 = t2.get(e2);
  if (!i2) {
    i2 = { dependencies: /* @__PURE__ */ new Set(), isRenderingOperation: false };
    t2.set(e2, i2);
  }
  return i2;
};
class CanvasDependencyTracker {
  #Qi = { __proto__: null };
  #Ji = { __proto__: null, transform: [], moveText: [], sameLineText: [], [at]: [] };
  #Zi = /* @__PURE__ */ new Map();
  #ts = [];
  #es = [];
  #is = [[1, 0, 0, 1, 0, 0]];
  #ss = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
  #ns = new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
  #rs = -1;
  #as = /* @__PURE__ */ new Set();
  #os = /* @__PURE__ */ new Map();
  #ls = /* @__PURE__ */ new Map();
  #hs;
  #ds;
  #cs;
  #Ki;
  #us;
  constructor(t2, e2, i2 = false) {
    this.#hs = t2.width;
    this.#ds = t2.height;
    this.#ps(e2);
    i2 && (this.#us = /* @__PURE__ */ new Map());
  }
  growOperationsCount(t2) {
    t2 >= this.#Ki.length && this.#ps(t2, this.#Ki);
  }
  #ps(t2, e2) {
    const i2 = new ArrayBuffer(4 * t2);
    this.#cs = new Uint8ClampedArray(i2);
    this.#Ki = new Uint32Array(i2);
    if (e2 && e2.length > 0) {
      this.#Ki.set(e2);
      this.#Ki.fill(ht, e2.length);
    } else this.#Ki.fill(ht);
  }
  save(t2) {
    this.#Qi = { __proto__: this.#Qi };
    this.#Ji = { __proto__: this.#Ji, transform: { __proto__: this.#Ji.transform }, moveText: { __proto__: this.#Ji.moveText }, sameLineText: { __proto__: this.#Ji.sameLineText }, [at]: { __proto__: this.#Ji[at] } };
    this.#ss = { __proto__: this.#ss };
    this.#ts.push(t2);
    return this;
  }
  restore(t2) {
    const e2 = Object.getPrototypeOf(this.#Qi);
    if (null === e2) return this;
    this.#Qi = e2;
    this.#Ji = Object.getPrototypeOf(this.#Ji);
    this.#ss = Object.getPrototypeOf(this.#ss);
    const i2 = this.#ts.pop();
    if (void 0 !== i2) {
      ensureDebugMetadata(this.#us, t2)?.dependencies.add(i2);
      this.#Ki[t2] = this.#Ki[i2];
    }
    return this;
  }
  recordOpenMarker(t2) {
    this.#ts.push(t2);
    return this;
  }
  getOpenMarker() {
    return 0 === this.#ts.length ? null : this.#ts.at(-1);
  }
  recordCloseMarker(t2) {
    const e2 = this.#ts.pop();
    if (void 0 !== e2) {
      ensureDebugMetadata(this.#us, t2)?.dependencies.add(e2);
      this.#Ki[t2] = this.#Ki[e2];
    }
    return this;
  }
  beginMarkedContent(t2) {
    this.#es.push(t2);
    return this;
  }
  endMarkedContent(t2) {
    const e2 = this.#es.pop();
    if (void 0 !== e2) {
      ensureDebugMetadata(this.#us, t2)?.dependencies.add(e2);
      this.#Ki[t2] = this.#Ki[e2];
    }
    return this;
  }
  pushBaseTransform(t2) {
    this.#is.push(Util.multiplyByDOMMatrix(this.#is.at(-1), t2.getTransform()));
    return this;
  }
  popBaseTransform() {
    this.#is.length > 1 && this.#is.pop();
    return this;
  }
  recordSimpleData(t2, e2) {
    this.#Qi[t2] = e2;
    return this;
  }
  recordIncrementalData(t2, e2) {
    this.#Ji[t2].push(e2);
    return this;
  }
  resetIncrementalData(t2, e2) {
    this.#Ji[t2].length = 0;
    return this;
  }
  recordNamedData(t2, e2) {
    this.#Zi.set(t2, e2);
    return this;
  }
  recordSimpleDataFromNamed(t2, e2, i2) {
    this.#Qi[t2] = this.#Zi.get(e2) ?? i2;
  }
  recordFutureForcedDependency(t2, e2) {
    this.recordIncrementalData(at, e2);
    return this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t2) {
    for (const e2 of t2) e2 in this.#Qi && this.recordFutureForcedDependency(e2, this.#Qi[e2]);
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const t2 of this.#as) this.recordFutureForcedDependency(at, t2);
    return this;
  }
  resetBBox(t2) {
    if (this.#rs !== t2) {
      this.#rs = t2;
      this.#ns[0] = 1 / 0;
      this.#ns[1] = 1 / 0;
      this.#ns[2] = -1 / 0;
      this.#ns[3] = -1 / 0;
    }
    return this;
  }
  recordClipBox(t2, e2, i2, s2, n2, r2) {
    const a2 = Util.multiplyByDOMMatrix(this.#is.at(-1), e2.getTransform()), o2 = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    Util.axialAlignedBoundingBox([i2, n2, s2, r2], a2, o2);
    const l2 = Util.intersect(this.#ss, o2);
    if (l2) {
      this.#ss[0] = l2[0];
      this.#ss[1] = l2[1];
      this.#ss[2] = l2[2];
      this.#ss[3] = l2[3];
    } else {
      this.#ss[0] = this.#ss[1] = 1 / 0;
      this.#ss[2] = this.#ss[3] = -1 / 0;
    }
    return this;
  }
  recordBBox(t2, e2, i2, s2, n2, r2) {
    const a2 = this.#ss;
    if (a2[0] === 1 / 0) return this;
    const o2 = Util.multiplyByDOMMatrix(this.#is.at(-1), e2.getTransform());
    if (a2[0] === -1 / 0) {
      Util.axialAlignedBoundingBox([i2, n2, s2, r2], o2, this.#ns);
      return this;
    }
    const l2 = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    Util.axialAlignedBoundingBox([i2, n2, s2, r2], o2, l2);
    this.#ns[0] = Math.min(this.#ns[0], Math.max(l2[0], a2[0]));
    this.#ns[1] = Math.min(this.#ns[1], Math.max(l2[1], a2[1]));
    this.#ns[2] = Math.max(this.#ns[2], Math.min(l2[2], a2[2]));
    this.#ns[3] = Math.max(this.#ns[3], Math.min(l2[3], a2[3]));
    return this;
  }
  recordCharacterBBox(t2, e2, i2, s2 = 1, n2 = 0, r2 = 0, a2) {
    const o2 = i2.bbox;
    let l2, h2;
    if (o2) {
      l2 = o2[2] !== o2[0] && o2[3] !== o2[1] && this.#ls.get(i2);
      if (false !== l2) {
        h2 = [0, 0, 0, 0];
        Util.axialAlignedBoundingBox(o2, i2.fontMatrix, h2);
        1 === s2 && 0 === n2 && 0 === r2 || Util.scaleMinMax([s2, 0, 0, -s2, n2, r2], h2);
        if (l2) return this.recordBBox(t2, e2, h2[0], h2[2], h2[1], h2[3]);
      }
    }
    if (!a2) return this.recordFullPageBBox(t2);
    const d2 = a2();
    if (o2 && h2 && void 0 === l2) {
      l2 = h2[0] <= n2 - d2.actualBoundingBoxLeft && h2[2] >= n2 + d2.actualBoundingBoxRight && h2[1] <= r2 - d2.actualBoundingBoxAscent && h2[3] >= r2 + d2.actualBoundingBoxDescent;
      this.#ls.set(i2, l2);
      if (l2) return this.recordBBox(t2, e2, h2[0], h2[2], h2[1], h2[3]);
    }
    return this.recordBBox(t2, e2, n2 - d2.actualBoundingBoxLeft, n2 + d2.actualBoundingBoxRight, r2 - d2.actualBoundingBoxAscent, r2 + d2.actualBoundingBoxDescent);
  }
  recordFullPageBBox(t2) {
    this.#ns[0] = Math.max(0, this.#ss[0]);
    this.#ns[1] = Math.max(0, this.#ss[1]);
    this.#ns[2] = Math.min(this.#hs, this.#ss[2]);
    this.#ns[3] = Math.min(this.#ds, this.#ss[3]);
    return this;
  }
  getSimpleIndex(t2) {
    return this.#Qi[t2];
  }
  recordDependencies(t2, e2) {
    const i2 = this.#as, s2 = this.#Qi, n2 = this.#Ji;
    for (const t3 of e2) t3 in this.#Qi ? i2.add(s2[t3]) : t3 in n2 && n2[t3].forEach(i2.add, i2);
    return this;
  }
  recordNamedDependency(t2, e2) {
    this.#Zi.has(e2) && this.#as.add(this.#Zi.get(e2));
    return this;
  }
  recordOperation(t2, e2 = false) {
    this.recordDependencies(t2, [at]);
    if (this.#us) {
      const e3 = ensureDebugMetadata(this.#us, t2), { dependencies: i2 } = e3;
      this.#as.forEach(i2.add, i2);
      this.#ts.forEach(i2.add, i2);
      this.#es.forEach(i2.add, i2);
      i2.delete(t2);
      e3.isRenderingOperation = true;
    }
    if (this.#rs === t2) {
      const i2 = ot(256 * this.#ns[0] / this.#hs), s2 = ot(256 * this.#ns[1] / this.#ds), n2 = lt(256 * this.#ns[2] / this.#hs), r2 = lt(256 * this.#ns[3] / this.#ds);
      expandBBox(this.#cs, t2, i2, s2, n2, r2);
      for (const e3 of this.#as) e3 !== t2 && expandBBox(this.#cs, e3, i2, s2, n2, r2);
      for (const e3 of this.#ts) e3 !== t2 && expandBBox(this.#cs, e3, i2, s2, n2, r2);
      for (const e3 of this.#es) e3 !== t2 && expandBBox(this.#cs, e3, i2, s2, n2, r2);
      if (!e2) {
        this.#as.clear();
        this.#rs = -1;
      }
    }
    return this;
  }
  recordShowTextOperation(t2, e2 = false) {
    const i2 = Array.from(this.#as);
    this.recordOperation(t2, e2);
    this.recordIncrementalData("sameLineText", t2);
    for (const t3 of i2) this.recordIncrementalData("sameLineText", t3);
    return this;
  }
  bboxToClipBoxDropOperation(t2, e2 = false) {
    if (this.#rs === t2) {
      this.#rs = -1;
      this.#ss[0] = Math.max(this.#ss[0], this.#ns[0]);
      this.#ss[1] = Math.max(this.#ss[1], this.#ns[1]);
      this.#ss[2] = Math.min(this.#ss[2], this.#ns[2]);
      this.#ss[3] = Math.min(this.#ss[3], this.#ns[3]);
      e2 || this.#as.clear();
    }
    return this;
  }
  _takePendingDependencies() {
    const t2 = this.#as;
    this.#as = /* @__PURE__ */ new Set();
    return t2;
  }
  _extractOperation(t2) {
    const e2 = this.#os.get(t2);
    this.#os.delete(t2);
    return e2;
  }
  _pushPendingDependencies(t2) {
    for (const e2 of t2) this.#as.add(e2);
  }
  take() {
    this.#ls.clear();
    return new BBoxReader(this.#Ki, this.#cs);
  }
  takeDebugMetadata() {
    return this.#us;
  }
}
class CanvasNestedDependencyTracker {
  #gs;
  #ms;
  #fs;
  #bs = 0;
  #ws = 0;
  constructor(t2, e2, i2) {
    if (t2 instanceof CanvasNestedDependencyTracker && t2.#fs === !!i2) return t2;
    this.#gs = t2;
    this.#ms = e2;
    this.#fs = !!i2;
  }
  growOperationsCount() {
    throw new Error("Unreachable");
  }
  save(t2) {
    this.#ws++;
    this.#gs.save(this.#ms);
    return this;
  }
  restore(t2) {
    if (this.#ws > 0) {
      this.#gs.restore(this.#ms);
      this.#ws--;
    }
    return this;
  }
  recordOpenMarker(t2) {
    this.#bs++;
    return this;
  }
  getOpenMarker() {
    return this.#bs > 0 ? this.#ms : this.#gs.getOpenMarker();
  }
  recordCloseMarker(t2) {
    this.#bs--;
    return this;
  }
  beginMarkedContent(t2) {
    return this;
  }
  endMarkedContent(t2) {
    return this;
  }
  pushBaseTransform(t2) {
    this.#gs.pushBaseTransform(t2);
    return this;
  }
  popBaseTransform() {
    this.#gs.popBaseTransform();
    return this;
  }
  recordSimpleData(t2, e2) {
    this.#gs.recordSimpleData(t2, this.#ms);
    return this;
  }
  recordIncrementalData(t2, e2) {
    this.#gs.recordIncrementalData(t2, this.#ms);
    return this;
  }
  resetIncrementalData(t2, e2) {
    this.#gs.resetIncrementalData(t2, this.#ms);
    return this;
  }
  recordNamedData(t2, e2) {
    return this;
  }
  recordSimpleDataFromNamed(t2, e2, i2) {
    this.#gs.recordSimpleDataFromNamed(t2, e2, this.#ms);
    return this;
  }
  recordFutureForcedDependency(t2, e2) {
    this.#gs.recordFutureForcedDependency(t2, this.#ms);
    return this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t2) {
    this.#gs.inheritSimpleDataAsFutureForcedDependencies(t2);
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    this.#gs.inheritPendingDependenciesAsFutureForcedDependencies();
    return this;
  }
  resetBBox(t2) {
    this.#fs || this.#gs.resetBBox(this.#ms);
    return this;
  }
  recordClipBox(t2, e2, i2, s2, n2, r2) {
    this.#fs || this.#gs.recordClipBox(this.#ms, e2, i2, s2, n2, r2);
    return this;
  }
  recordBBox(t2, e2, i2, s2, n2, r2) {
    this.#fs || this.#gs.recordBBox(this.#ms, e2, i2, s2, n2, r2);
    return this;
  }
  recordCharacterBBox(t2, e2, i2, s2, n2, r2, a2) {
    this.#fs || this.#gs.recordCharacterBBox(this.#ms, e2, i2, s2, n2, r2, a2);
    return this;
  }
  recordFullPageBBox(t2) {
    this.#fs || this.#gs.recordFullPageBBox(this.#ms);
    return this;
  }
  getSimpleIndex(t2) {
    return this.#gs.getSimpleIndex(t2);
  }
  recordDependencies(t2, e2) {
    this.#gs.recordDependencies(this.#ms, e2);
    return this;
  }
  recordNamedDependency(t2, e2) {
    this.#gs.recordNamedDependency(this.#ms, e2);
    return this;
  }
  recordOperation(t2) {
    this.#gs.recordOperation(this.#ms, true);
    return this;
  }
  recordShowTextOperation(t2) {
    this.#gs.recordShowTextOperation(this.#ms, true);
    return this;
  }
  bboxToClipBoxDropOperation(t2) {
    this.#fs || this.#gs.bboxToClipBoxDropOperation(this.#ms, true);
    return this;
  }
  take() {
    throw new Error("Unreachable");
  }
  takeDebugMetadata() {
    throw new Error("Unreachable");
  }
}
const dt = ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"], ct = ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"], ut = ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"], pt = ["filter", "fillColor", "fillAlpha"], gt = ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"], mt = ["transform"], ft = ["transform", "fillColor"], bt = "Fill", wt = "Stroke", yt = "Shading";
function applyBoundingBox(t2, e2) {
  if (!e2) return;
  const i2 = e2[2] - e2[0], s2 = e2[3] - e2[1], n2 = new Path2D();
  n2.rect(e2[0], e2[1], i2, s2);
  t2.clip(n2);
}
class BaseShadingPattern {
  isModifyingCurrentTransform() {
    return false;
  }
  getPattern() {
    unreachable("Abstract method `getPattern` called.");
  }
}
class RadialAxialShadingPattern extends BaseShadingPattern {
  constructor(t2) {
    super();
    this._type = t2[1];
    this._bbox = t2[2];
    this._colorStops = t2[3];
    this._p0 = t2[4];
    this._p1 = t2[5];
    this._r0 = t2[6];
    this._r1 = t2[7];
    this.matrix = null;
  }
  _createGradient(t2) {
    let e2;
    "axial" === this._type ? e2 = t2.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : "radial" === this._type && (e2 = t2.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const t3 of this._colorStops) e2.addColorStop(t3[0], t3[1]);
    return e2;
  }
  getPattern(t2, e2, i2, s2) {
    let n2;
    if (s2 === wt || s2 === bt) {
      const r2 = e2.current.getClippedPathBoundingBox(s2, getCurrentTransform(t2)) || [0, 0, 0, 0], a2 = Math.ceil(r2[2] - r2[0]) || 1, o2 = Math.ceil(r2[3] - r2[1]) || 1, l2 = e2.cachedCanvases.getCanvas("pattern", a2, o2), h2 = l2.context;
      h2.clearRect(0, 0, h2.canvas.width, h2.canvas.height);
      h2.beginPath();
      h2.rect(0, 0, h2.canvas.width, h2.canvas.height);
      h2.translate(-r2[0], -r2[1]);
      i2 = Util.transform(i2, [1, 0, 0, 1, r2[0], r2[1]]);
      h2.transform(...e2.baseTransform);
      this.matrix && h2.transform(...this.matrix);
      applyBoundingBox(h2, this._bbox);
      h2.fillStyle = this._createGradient(h2);
      h2.fill();
      n2 = t2.createPattern(l2.canvas, "no-repeat");
      const d2 = new DOMMatrix(i2);
      n2.setTransform(d2);
    } else {
      applyBoundingBox(t2, this._bbox);
      n2 = this._createGradient(t2);
    }
    return n2;
  }
}
function drawTriangle(t2, e2, i2, s2, n2, r2, a2, o2) {
  const l2 = e2.coords, h2 = e2.colors, d2 = t2.data, c2 = 4 * t2.width;
  let u2;
  if (l2[i2 + 1] > l2[s2 + 1]) {
    u2 = i2;
    i2 = s2;
    s2 = u2;
    u2 = r2;
    r2 = a2;
    a2 = u2;
  }
  if (l2[s2 + 1] > l2[n2 + 1]) {
    u2 = s2;
    s2 = n2;
    n2 = u2;
    u2 = a2;
    a2 = o2;
    o2 = u2;
  }
  if (l2[i2 + 1] > l2[s2 + 1]) {
    u2 = i2;
    i2 = s2;
    s2 = u2;
    u2 = r2;
    r2 = a2;
    a2 = u2;
  }
  const p2 = (l2[i2] + e2.offsetX) * e2.scaleX, g2 = (l2[i2 + 1] + e2.offsetY) * e2.scaleY, m2 = (l2[s2] + e2.offsetX) * e2.scaleX, f2 = (l2[s2 + 1] + e2.offsetY) * e2.scaleY, b2 = (l2[n2] + e2.offsetX) * e2.scaleX, w2 = (l2[n2 + 1] + e2.offsetY) * e2.scaleY;
  if (g2 >= w2) return;
  const y2 = h2[r2], A2 = h2[r2 + 1], v2 = h2[r2 + 2], x2 = h2[a2], E2 = h2[a2 + 1], C2 = h2[a2 + 2], _2 = h2[o2], S2 = h2[o2 + 1], T2 = h2[o2 + 2], D2 = Math.round(g2), M2 = Math.round(w2);
  let k2, P2, I2, F2, R2, L2, B2, O2;
  for (let t3 = D2; t3 <= M2; t3++) {
    if (t3 < f2) {
      const e4 = t3 < g2 ? 0 : (g2 - t3) / (g2 - f2);
      k2 = p2 - (p2 - m2) * e4;
      P2 = y2 - (y2 - x2) * e4;
      I2 = A2 - (A2 - E2) * e4;
      F2 = v2 - (v2 - C2) * e4;
    } else {
      let e4;
      e4 = t3 > w2 ? 1 : f2 === w2 ? 0 : (f2 - t3) / (f2 - w2);
      k2 = m2 - (m2 - b2) * e4;
      P2 = x2 - (x2 - _2) * e4;
      I2 = E2 - (E2 - S2) * e4;
      F2 = C2 - (C2 - T2) * e4;
    }
    let e3;
    e3 = t3 < g2 ? 0 : t3 > w2 ? 1 : (g2 - t3) / (g2 - w2);
    R2 = p2 - (p2 - b2) * e3;
    L2 = y2 - (y2 - _2) * e3;
    B2 = A2 - (A2 - S2) * e3;
    O2 = v2 - (v2 - T2) * e3;
    const i3 = Math.round(Math.min(k2, R2)), s3 = Math.round(Math.max(k2, R2));
    let n3 = c2 * t3 + 4 * i3;
    for (let t4 = i3; t4 <= s3; t4++) {
      e3 = (k2 - t4) / (k2 - R2);
      e3 < 0 ? e3 = 0 : e3 > 1 && (e3 = 1);
      d2[n3++] = P2 - (P2 - L2) * e3 | 0;
      d2[n3++] = I2 - (I2 - B2) * e3 | 0;
      d2[n3++] = F2 - (F2 - O2) * e3 | 0;
      d2[n3++] = 255;
    }
  }
}
function drawFigure(t2, e2, i2) {
  const s2 = e2.coords, n2 = e2.colors;
  let r2, a2;
  switch (e2.type) {
    case "lattice":
      const o2 = e2.verticesPerRow, l2 = Math.floor(s2.length / o2) - 1, h2 = o2 - 1;
      for (r2 = 0; r2 < l2; r2++) {
        let e3 = r2 * o2;
        for (let r3 = 0; r3 < h2; r3++, e3++) {
          drawTriangle(t2, i2, s2[e3], s2[e3 + 1], s2[e3 + o2], n2[e3], n2[e3 + 1], n2[e3 + o2]);
          drawTriangle(t2, i2, s2[e3 + o2 + 1], s2[e3 + 1], s2[e3 + o2], n2[e3 + o2 + 1], n2[e3 + 1], n2[e3 + o2]);
        }
      }
      break;
    case "triangles":
      for (r2 = 0, a2 = s2.length; r2 < a2; r2 += 3) drawTriangle(t2, i2, s2[r2], s2[r2 + 1], s2[r2 + 2], n2[r2], n2[r2 + 1], n2[r2 + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class MeshShadingPattern extends BaseShadingPattern {
  constructor(t2) {
    super();
    this._coords = t2[2];
    this._colors = t2[3];
    this._figures = t2[4];
    this._bounds = t2[5];
    this._bbox = t2[6];
    this._background = t2[7];
    this.matrix = null;
  }
  _createMeshCanvas(t2, e2, i2) {
    const s2 = Math.floor(this._bounds[0]), n2 = Math.floor(this._bounds[1]), r2 = Math.ceil(this._bounds[2]) - s2, a2 = Math.ceil(this._bounds[3]) - n2, o2 = Math.min(Math.ceil(Math.abs(r2 * t2[0] * 1.1)), 3e3), l2 = Math.min(Math.ceil(Math.abs(a2 * t2[1] * 1.1)), 3e3), h2 = r2 / o2, d2 = a2 / l2, c2 = { coords: this._coords, colors: this._colors, offsetX: -s2, offsetY: -n2, scaleX: 1 / h2, scaleY: 1 / d2 }, u2 = o2 + 4, p2 = l2 + 4, g2 = i2.getCanvas("mesh", u2, p2), m2 = g2.context, f2 = m2.createImageData(o2, l2);
    if (e2) {
      const t3 = f2.data;
      for (let i3 = 0, s3 = t3.length; i3 < s3; i3 += 4) {
        t3[i3] = e2[0];
        t3[i3 + 1] = e2[1];
        t3[i3 + 2] = e2[2];
        t3[i3 + 3] = 255;
      }
    }
    for (const t3 of this._figures) drawFigure(f2, t3, c2);
    m2.putImageData(f2, 2, 2);
    return { canvas: g2.canvas, offsetX: s2 - 2 * h2, offsetY: n2 - 2 * d2, scaleX: h2, scaleY: d2 };
  }
  isModifyingCurrentTransform() {
    return true;
  }
  getPattern(t2, e2, i2, s2) {
    applyBoundingBox(t2, this._bbox);
    const n2 = new Float32Array(2);
    if (s2 === yt) Util.singularValueDecompose2dScale(getCurrentTransform(t2), n2);
    else if (this.matrix) {
      Util.singularValueDecompose2dScale(this.matrix, n2);
      const [t3, i3] = n2;
      Util.singularValueDecompose2dScale(e2.baseTransform, n2);
      n2[0] *= t3;
      n2[1] *= i3;
    } else Util.singularValueDecompose2dScale(e2.baseTransform, n2);
    const r2 = this._createMeshCanvas(n2, s2 === yt ? null : this._background, e2.cachedCanvases);
    if (s2 !== yt) {
      t2.setTransform(...e2.baseTransform);
      this.matrix && t2.transform(...this.matrix);
    }
    t2.translate(r2.offsetX, r2.offsetY);
    t2.scale(r2.scaleX, r2.scaleY);
    return t2.createPattern(r2.canvas, "no-repeat");
  }
}
class DummyShadingPattern extends BaseShadingPattern {
  getPattern() {
    return "hotpink";
  }
}
const At = 1, vt = 2;
class TilingPattern {
  static MAX_PATTERN_SIZE = 3e3;
  constructor(t2, e2, i2, s2) {
    this.color = t2[1];
    this.operatorList = t2[2];
    this.matrix = t2[3];
    this.bbox = t2[4];
    this.xstep = t2[5];
    this.ystep = t2[6];
    this.paintType = t2[7];
    this.tilingType = t2[8];
    this.ctx = e2;
    this.canvasGraphicsFactory = i2;
    this.baseTransform = s2;
  }
  createPatternCanvas(t2, e2) {
    const { bbox: i2, operatorList: s2, paintType: n2, tilingType: r2, color: a2, canvasGraphicsFactory: o2 } = this;
    let { xstep: l2, ystep: h2 } = this;
    l2 = Math.abs(l2);
    h2 = Math.abs(h2);
    info("TilingType: " + r2);
    const d2 = i2[0], c2 = i2[1], u2 = i2[2], p2 = i2[3], g2 = u2 - d2, m2 = p2 - c2, f2 = new Float32Array(2);
    Util.singularValueDecompose2dScale(this.matrix, f2);
    const [b2, w2] = f2;
    Util.singularValueDecompose2dScale(this.baseTransform, f2);
    const y2 = b2 * f2[0], A2 = w2 * f2[1];
    let v2 = g2, x2 = m2, E2 = false, C2 = false;
    const _2 = Math.ceil(l2 * y2), S2 = Math.ceil(h2 * A2);
    _2 >= Math.ceil(g2 * y2) ? v2 = l2 : E2 = true;
    S2 >= Math.ceil(m2 * A2) ? x2 = h2 : C2 = true;
    const T2 = this.getSizeAndScale(v2, this.ctx.canvas.width, y2), D2 = this.getSizeAndScale(x2, this.ctx.canvas.height, A2), M2 = t2.cachedCanvases.getCanvas("pattern", T2.size, D2.size), k2 = M2.context, P2 = o2.createCanvasGraphics(k2, e2);
    P2.groupLevel = t2.groupLevel;
    this.setFillAndStrokeStyleToContext(P2, n2, a2);
    k2.translate(-T2.scale * d2, -D2.scale * c2);
    P2.transform(0, T2.scale, 0, 0, D2.scale, 0, 0);
    k2.save();
    P2.dependencyTracker?.save();
    this.clipBbox(P2, d2, c2, u2, p2);
    P2.baseTransform = getCurrentTransform(P2.ctx);
    P2.executeOperatorList(s2);
    P2.endDrawing();
    P2.dependencyTracker?.restore();
    k2.restore();
    if (E2 || C2) {
      const e3 = M2.canvas;
      E2 && (v2 = l2);
      C2 && (x2 = h2);
      const i3 = this.getSizeAndScale(v2, this.ctx.canvas.width, y2), s3 = this.getSizeAndScale(x2, this.ctx.canvas.height, A2), n3 = i3.size, r3 = s3.size, a3 = t2.cachedCanvases.getCanvas("pattern-workaround", n3, r3), o3 = a3.context, u3 = E2 ? Math.floor(g2 / l2) : 0, p3 = C2 ? Math.floor(m2 / h2) : 0;
      for (let t3 = 0; t3 <= u3; t3++) for (let i4 = 0; i4 <= p3; i4++) o3.drawImage(e3, n3 * t3, r3 * i4, n3, r3, 0, 0, n3, r3);
      return { canvas: a3.canvas, scaleX: i3.scale, scaleY: s3.scale, offsetX: d2, offsetY: c2 };
    }
    return { canvas: M2.canvas, scaleX: T2.scale, scaleY: D2.scale, offsetX: d2, offsetY: c2 };
  }
  getSizeAndScale(t2, e2, i2) {
    const s2 = Math.max(TilingPattern.MAX_PATTERN_SIZE, e2);
    let n2 = Math.ceil(t2 * i2);
    n2 >= s2 ? n2 = s2 : i2 = n2 / t2;
    return { scale: i2, size: n2 };
  }
  clipBbox(t2, e2, i2, s2, n2) {
    const r2 = s2 - e2, a2 = n2 - i2;
    t2.ctx.rect(e2, i2, r2, a2);
    Util.axialAlignedBoundingBox([e2, i2, s2, n2], getCurrentTransform(t2.ctx), t2.current.minMax);
    t2.clip();
    t2.endPath();
  }
  setFillAndStrokeStyleToContext(t2, e2, i2) {
    const s2 = t2.ctx, n2 = t2.current;
    switch (e2) {
      case At:
        const { fillStyle: t3, strokeStyle: r2 } = this.ctx;
        s2.fillStyle = n2.fillColor = t3;
        s2.strokeStyle = n2.strokeColor = r2;
        break;
      case vt:
        s2.fillStyle = s2.strokeStyle = i2;
        n2.fillColor = n2.strokeColor = i2;
        break;
      default:
        throw new FormatError(`Unsupported paint type: ${e2}`);
    }
  }
  isModifyingCurrentTransform() {
    return false;
  }
  getPattern(t2, e2, i2, s2, n2) {
    let r2 = i2;
    if (s2 !== yt) {
      r2 = Util.transform(r2, e2.baseTransform);
      this.matrix && (r2 = Util.transform(r2, this.matrix));
    }
    const a2 = this.createPatternCanvas(e2, n2);
    let o2 = new DOMMatrix(r2);
    o2 = o2.translate(a2.offsetX, a2.offsetY);
    o2 = o2.scale(1 / a2.scaleX, 1 / a2.scaleY);
    const l2 = t2.createPattern(a2.canvas, "repeat");
    l2.setTransform(o2);
    return l2;
  }
}
function convertBlackAndWhiteToRGBA({ src: t2, srcPos: e2 = 0, dest: i2, width: s2, height: n2, nonBlackColor: r2 = 4294967295, inverseDecode: a2 = false }) {
  const o2 = util_FeatureTest.isLittleEndian ? 4278190080 : 255, [l2, h2] = a2 ? [r2, o2] : [o2, r2], d2 = s2 >> 3, c2 = 7 & s2, u2 = t2.length;
  i2 = new Uint32Array(i2.buffer);
  let p2 = 0;
  for (let s3 = 0; s3 < n2; s3++) {
    for (const s5 = e2 + d2; e2 < s5; e2++) {
      const s6 = e2 < u2 ? t2[e2] : 255;
      i2[p2++] = 128 & s6 ? h2 : l2;
      i2[p2++] = 64 & s6 ? h2 : l2;
      i2[p2++] = 32 & s6 ? h2 : l2;
      i2[p2++] = 16 & s6 ? h2 : l2;
      i2[p2++] = 8 & s6 ? h2 : l2;
      i2[p2++] = 4 & s6 ? h2 : l2;
      i2[p2++] = 2 & s6 ? h2 : l2;
      i2[p2++] = 1 & s6 ? h2 : l2;
    }
    if (0 === c2) continue;
    const s4 = e2 < u2 ? t2[e2++] : 255;
    for (let t3 = 0; t3 < c2; t3++) i2[p2++] = s4 & 1 << 7 - t3 ? h2 : l2;
  }
  return { srcPos: e2, destPos: p2 };
}
const xt = 16, Et = new DOMMatrix(), Ct = new Float32Array(2), _t = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
class CachedCanvases {
  constructor(t2) {
    this.canvasFactory = t2;
    this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t2, e2, i2) {
    let s2;
    if (void 0 !== this.cache[t2]) {
      s2 = this.cache[t2];
      this.canvasFactory.reset(s2, e2, i2);
    } else {
      s2 = this.canvasFactory.create(e2, i2);
      this.cache[t2] = s2;
    }
    return s2;
  }
  delete(t2) {
    delete this.cache[t2];
  }
  clear() {
    for (const t2 in this.cache) {
      const e2 = this.cache[t2];
      this.canvasFactory.destroy(e2);
      delete this.cache[t2];
    }
  }
}
function drawImageAtIntegerCoords(t2, e2, i2, s2, n2, r2, a2, o2, l2, h2) {
  const [d2, c2, u2, p2, g2, m2] = getCurrentTransform(t2);
  if (0 === c2 && 0 === u2) {
    const f2 = a2 * d2 + g2, b2 = Math.round(f2), w2 = o2 * p2 + m2, y2 = Math.round(w2), A2 = (a2 + l2) * d2 + g2, v2 = Math.abs(Math.round(A2) - b2) || 1, x2 = (o2 + h2) * p2 + m2, E2 = Math.abs(Math.round(x2) - y2) || 1;
    t2.setTransform(Math.sign(d2), 0, 0, Math.sign(p2), b2, y2);
    t2.drawImage(e2, i2, s2, n2, r2, 0, 0, v2, E2);
    t2.setTransform(d2, c2, u2, p2, g2, m2);
    return [v2, E2];
  }
  if (0 === d2 && 0 === p2) {
    const f2 = o2 * u2 + g2, b2 = Math.round(f2), w2 = a2 * c2 + m2, y2 = Math.round(w2), A2 = (o2 + h2) * u2 + g2, v2 = Math.abs(Math.round(A2) - b2) || 1, x2 = (a2 + l2) * c2 + m2, E2 = Math.abs(Math.round(x2) - y2) || 1;
    t2.setTransform(0, Math.sign(c2), Math.sign(u2), 0, b2, y2);
    t2.drawImage(e2, i2, s2, n2, r2, 0, 0, E2, v2);
    t2.setTransform(d2, c2, u2, p2, g2, m2);
    return [E2, v2];
  }
  t2.drawImage(e2, i2, s2, n2, r2, a2, o2, l2, h2);
  return [Math.hypot(d2, c2) * l2, Math.hypot(u2, p2) * h2];
}
class CanvasExtraState {
  alphaIsShape = false;
  fontSize = 0;
  fontSizeScale = 1;
  textMatrix = null;
  textMatrixScale = 1;
  fontMatrix = e;
  leading = 0;
  x = 0;
  y = 0;
  lineX = 0;
  lineY = 0;
  charSpacing = 0;
  wordSpacing = 0;
  textHScale = 1;
  textRenderingMode = f;
  textRise = 0;
  fillColor = "#000000";
  strokeColor = "#000000";
  patternFill = false;
  patternStroke = false;
  fillAlpha = 1;
  strokeAlpha = 1;
  lineWidth = 1;
  activeSMask = null;
  transferMaps = "none";
  constructor(t2, e2, i2) {
    i2?.(this);
    this.clipBox = new Float32Array([0, 0, t2, e2]);
    this.minMax = _t.slice();
  }
  clone() {
    const t2 = Object.create(this);
    t2.clipBox = this.clipBox.slice();
    t2.minMax = this.minMax.slice();
    return t2;
  }
  getPathBoundingBox(t2 = bt, e2 = null) {
    const i2 = this.minMax.slice();
    if (t2 === wt) {
      e2 || unreachable("Stroke bounding box must include transform.");
      Util.singularValueDecompose2dScale(e2, Ct);
      const t3 = Ct[0] * this.lineWidth / 2, s2 = Ct[1] * this.lineWidth / 2;
      i2[0] -= t3;
      i2[1] -= s2;
      i2[2] += t3;
      i2[3] += s2;
    }
    return i2;
  }
  updateClipFromPath() {
    const t2 = Util.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t2 || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minMax[0] === 1 / 0;
  }
  startNewPathAndClipBox(t2) {
    this.clipBox.set(t2, 0);
    this.minMax.set(_t, 0);
  }
  getClippedPathBoundingBox(t2 = bt, e2 = null) {
    return Util.intersect(this.clipBox, this.getPathBoundingBox(t2, e2));
  }
}
function putBinaryImageData(t2, e2) {
  if (e2 instanceof ImageData) {
    t2.putImageData(e2, 0, 0);
    return;
  }
  const i2 = e2.height, s2 = e2.width, n2 = i2 % xt, r2 = (i2 - n2) / xt, a2 = 0 === n2 ? r2 : r2 + 1, o2 = t2.createImageData(s2, xt);
  let l2, h2 = 0;
  const d2 = e2.data, c2 = o2.data;
  let u2, p2, g2, m2;
  if (e2.kind === x.GRAYSCALE_1BPP) {
    const e3 = d2.byteLength, i3 = new Uint32Array(c2.buffer, 0, c2.byteLength >> 2), m3 = i3.length, f2 = s2 + 7 >> 3, b2 = 4294967295, w2 = util_FeatureTest.isLittleEndian ? 4278190080 : 255;
    for (u2 = 0; u2 < a2; u2++) {
      g2 = u2 < r2 ? xt : n2;
      l2 = 0;
      for (p2 = 0; p2 < g2; p2++) {
        const t3 = e3 - h2;
        let n3 = 0;
        const r3 = t3 > f2 ? s2 : 8 * t3 - 7, a3 = -8 & r3;
        let o3 = 0, c3 = 0;
        for (; n3 < a3; n3 += 8) {
          c3 = d2[h2++];
          i3[l2++] = 128 & c3 ? b2 : w2;
          i3[l2++] = 64 & c3 ? b2 : w2;
          i3[l2++] = 32 & c3 ? b2 : w2;
          i3[l2++] = 16 & c3 ? b2 : w2;
          i3[l2++] = 8 & c3 ? b2 : w2;
          i3[l2++] = 4 & c3 ? b2 : w2;
          i3[l2++] = 2 & c3 ? b2 : w2;
          i3[l2++] = 1 & c3 ? b2 : w2;
        }
        for (; n3 < r3; n3++) {
          if (0 === o3) {
            c3 = d2[h2++];
            o3 = 128;
          }
          i3[l2++] = c3 & o3 ? b2 : w2;
          o3 >>= 1;
        }
      }
      for (; l2 < m3; ) i3[l2++] = 0;
      t2.putImageData(o2, 0, u2 * xt);
    }
  } else if (e2.kind === x.RGBA_32BPP) {
    p2 = 0;
    m2 = s2 * xt * 4;
    for (u2 = 0; u2 < r2; u2++) {
      c2.set(d2.subarray(h2, h2 + m2));
      h2 += m2;
      t2.putImageData(o2, 0, p2);
      p2 += xt;
    }
    if (u2 < a2) {
      m2 = s2 * n2 * 4;
      c2.set(d2.subarray(h2, h2 + m2));
      t2.putImageData(o2, 0, p2);
    }
  } else {
    if (e2.kind !== x.RGB_24BPP) throw new Error(`bad image kind: ${e2.kind}`);
    g2 = xt;
    m2 = s2 * g2;
    for (u2 = 0; u2 < a2; u2++) {
      if (u2 >= r2) {
        g2 = n2;
        m2 = s2 * g2;
      }
      l2 = 0;
      for (p2 = m2; p2--; ) {
        c2[l2++] = d2[h2++];
        c2[l2++] = d2[h2++];
        c2[l2++] = d2[h2++];
        c2[l2++] = 255;
      }
      t2.putImageData(o2, 0, u2 * xt);
    }
  }
}
function putBinaryImageMask(t2, e2) {
  if (e2.bitmap) {
    t2.drawImage(e2.bitmap, 0, 0);
    return;
  }
  const i2 = e2.height, s2 = e2.width, n2 = i2 % xt, r2 = (i2 - n2) / xt, a2 = 0 === n2 ? r2 : r2 + 1, o2 = t2.createImageData(s2, xt);
  let l2 = 0;
  const h2 = e2.data, d2 = o2.data;
  for (let e3 = 0; e3 < a2; e3++) {
    const i3 = e3 < r2 ? xt : n2;
    ({ srcPos: l2 } = convertBlackAndWhiteToRGBA({ src: h2, srcPos: l2, dest: d2, width: s2, height: i3, nonBlackColor: 0 }));
    t2.putImageData(o2, 0, e3 * xt);
  }
}
function copyCtxState(t2, e2) {
  const i2 = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s2 of i2) void 0 !== t2[s2] && (e2[s2] = t2[s2]);
  if (void 0 !== t2.setLineDash) {
    e2.setLineDash(t2.getLineDash());
    e2.lineDashOffset = t2.lineDashOffset;
  }
}
function resetCtxToDefault(t2) {
  t2.strokeStyle = t2.fillStyle = "#000000";
  t2.fillRule = "nonzero";
  t2.globalAlpha = 1;
  t2.lineWidth = 1;
  t2.lineCap = "butt";
  t2.lineJoin = "miter";
  t2.miterLimit = 10;
  t2.globalCompositeOperation = "source-over";
  t2.font = "10px sans-serif";
  if (void 0 !== t2.setLineDash) {
    t2.setLineDash([]);
    t2.lineDashOffset = 0;
  }
  const { filter: e2 } = t2;
  "none" !== e2 && "" !== e2 && (t2.filter = "none");
}
function getImageSmoothingEnabled(t2, e2) {
  if (e2) return true;
  Util.singularValueDecompose2dScale(t2, Ct);
  const i2 = Math.fround(OutputScale.pixelRatio * PixelsPerInch.PDF_TO_CSS_UNITS);
  return Ct[0] <= i2 && Ct[1] <= i2;
}
const St = ["butt", "round", "square"], Tt = ["miter", "round", "bevel"], Dt = {}, Mt = {};
class CanvasGraphics {
  constructor(t2, e2, i2, s2, n2, { optionalContentConfig: r2, markedContentStack: a2 = null }, o2, l2, h2) {
    this.ctx = t2;
    this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
    this.stateStack = [];
    this.pendingClip = null;
    this.pendingEOFill = false;
    this.res = null;
    this.xobjs = null;
    this.commonObjs = e2;
    this.objs = i2;
    this.canvasFactory = s2;
    this.filterFactory = n2;
    this.groupStack = [];
    this.baseTransform = null;
    this.baseTransformStack = [];
    this.groupLevel = 0;
    this.smaskStack = [];
    this.smaskCounter = 0;
    this.tempSMask = null;
    this.suspendedCtx = null;
    this.contentVisible = true;
    this.markedContentStack = a2 || [];
    this.optionalContentConfig = r2;
    this.cachedCanvases = new CachedCanvases(this.canvasFactory);
    this.cachedPatterns = /* @__PURE__ */ new Map();
    this.annotationCanvasMap = o2;
    this.viewportScale = 1;
    this.outputScaleX = 1;
    this.outputScaleY = 1;
    this.pageColors = l2;
    this._cachedScaleForStroking = [-1, 0];
    this._cachedGetSinglePixelWidth = null;
    this._cachedBitmapsMap = /* @__PURE__ */ new Map();
    this.dependencyTracker = h2 ?? null;
  }
  getObject(t2, e2, i2 = null) {
    if ("string" == typeof e2) {
      this.dependencyTracker?.recordNamedDependency(t2, e2);
      return e2.startsWith("g_") ? this.commonObjs.get(e2) : this.objs.get(e2);
    }
    return i2;
  }
  beginDrawing({ transform: t2, viewport: e2, transparency: i2 = false, background: s2 = null }) {
    const n2 = this.ctx.canvas.width, r2 = this.ctx.canvas.height, a2 = this.ctx.fillStyle;
    this.ctx.fillStyle = s2 || "#ffffff";
    this.ctx.fillRect(0, 0, n2, r2);
    this.ctx.fillStyle = a2;
    if (i2) {
      const t3 = this.cachedCanvases.getCanvas("transparent", n2, r2);
      this.compositeCtx = this.ctx;
      this.transparentCanvas = t3.canvas;
      this.ctx = t3.context;
      this.ctx.save();
      this.ctx.transform(...getCurrentTransform(this.compositeCtx));
    }
    this.ctx.save();
    resetCtxToDefault(this.ctx);
    if (t2) {
      this.ctx.transform(...t2);
      this.outputScaleX = t2[0];
      this.outputScaleY = t2[0];
    }
    this.ctx.transform(...e2.transform);
    this.viewportScale = e2.scale;
    this.baseTransform = getCurrentTransform(this.ctx);
  }
  executeOperatorList(t2, e2, i2, s2, n2) {
    const r2 = t2.argsArray, a2 = t2.fnArray;
    let o2 = e2 || 0;
    const l2 = r2.length;
    if (l2 === o2) return o2;
    const h2 = l2 - o2 > 10 && "function" == typeof i2, d2 = h2 ? Date.now() + 15 : 0;
    let c2 = 0;
    const u2 = this.commonObjs, p2 = this.objs;
    let g2, m2;
    for (; ; ) {
      if (void 0 !== s2 && o2 === s2.nextBreakPoint) {
        s2.breakIt(o2, i2);
        return o2;
      }
      if (!n2 || n2(o2)) {
        g2 = a2[o2];
        m2 = r2[o2] ?? null;
        if (g2 !== k.dependency) null === m2 ? this[g2](o2) : this[g2](o2, ...m2);
        else for (const t3 of m2) {
          this.dependencyTracker?.recordNamedData(t3, o2);
          const e3 = t3.startsWith("g_") ? u2 : p2;
          if (!e3.has(t3)) {
            e3.get(t3, i2);
            return o2;
          }
        }
      }
      o2++;
      if (o2 === l2) return o2;
      if (h2 && ++c2 > 10) {
        if (Date.now() > d2) {
          i2();
          return o2;
        }
        c2 = 0;
      }
    }
  }
  #ys() {
    for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
    this.current.activeSMask = null;
    this.ctx.restore();
    if (this.transparentCanvas) {
      this.ctx = this.compositeCtx;
      this.ctx.save();
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.drawImage(this.transparentCanvas, 0, 0);
      this.ctx.restore();
      this.transparentCanvas = null;
    }
  }
  endDrawing() {
    this.#ys();
    this.cachedCanvases.clear();
    this.cachedPatterns.clear();
    for (const t2 of this._cachedBitmapsMap.values()) {
      for (const e2 of t2.values()) "undefined" != typeof HTMLCanvasElement && e2 instanceof HTMLCanvasElement && (e2.width = e2.height = 0);
      t2.clear();
    }
    this._cachedBitmapsMap.clear();
    this.#As();
  }
  #As() {
    if (this.pageColors) {
      const t2 = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
      if ("none" !== t2) {
        const e2 = this.ctx.filter;
        this.ctx.filter = t2;
        this.ctx.drawImage(this.ctx.canvas, 0, 0);
        this.ctx.filter = e2;
      }
    }
  }
  _scaleImage(t2, e2) {
    const i2 = t2.width ?? t2.displayWidth, s2 = t2.height ?? t2.displayHeight;
    let n2, r2, a2 = Math.max(Math.hypot(e2[0], e2[1]), 1), o2 = Math.max(Math.hypot(e2[2], e2[3]), 1), l2 = i2, h2 = s2, d2 = "prescale1";
    for (; a2 > 2 && l2 > 1 || o2 > 2 && h2 > 1; ) {
      let e3 = l2, i3 = h2;
      if (a2 > 2 && l2 > 1) {
        e3 = l2 >= 16384 ? Math.floor(l2 / 2) - 1 || 1 : Math.ceil(l2 / 2);
        a2 /= l2 / e3;
      }
      if (o2 > 2 && h2 > 1) {
        i3 = h2 >= 16384 ? Math.floor(h2 / 2) - 1 || 1 : Math.ceil(h2) / 2;
        o2 /= h2 / i3;
      }
      n2 = this.cachedCanvases.getCanvas(d2, e3, i3);
      r2 = n2.context;
      r2.clearRect(0, 0, e3, i3);
      r2.drawImage(t2, 0, 0, l2, h2, 0, 0, e3, i3);
      t2 = n2.canvas;
      l2 = e3;
      h2 = i3;
      d2 = "prescale1" === d2 ? "prescale2" : "prescale1";
    }
    return { img: t2, paintWidth: l2, paintHeight: h2 };
  }
  _createMaskCanvas(t2, e2) {
    const i2 = this.ctx, { width: s2, height: n2 } = e2, r2 = this.current.fillColor, a2 = this.current.patternFill, o2 = getCurrentTransform(i2);
    let l2, h2, d2, c2;
    if ((e2.bitmap || e2.data) && e2.count > 1) {
      const i3 = e2.bitmap || e2.data.buffer;
      h2 = JSON.stringify(a2 ? o2 : [o2.slice(0, 4), r2]);
      l2 = this._cachedBitmapsMap.get(i3);
      if (!l2) {
        l2 = /* @__PURE__ */ new Map();
        this._cachedBitmapsMap.set(i3, l2);
      }
      const s3 = l2.get(h2);
      if (s3 && !a2) {
        const e3 = Math.round(Math.min(o2[0], o2[2]) + o2[4]), i4 = Math.round(Math.min(o2[1], o2[3]) + o2[5]);
        this.dependencyTracker?.recordDependencies(t2, ft);
        return { canvas: s3, offsetX: e3, offsetY: i4 };
      }
      d2 = s3;
    }
    if (!d2) {
      c2 = this.cachedCanvases.getCanvas("maskCanvas", s2, n2);
      putBinaryImageMask(c2.context, e2);
    }
    let u2 = Util.transform(o2, [1 / s2, 0, 0, -1 / n2, 0, 0]);
    u2 = Util.transform(u2, [1, 0, 0, 1, 0, -n2]);
    const p2 = _t.slice();
    Util.axialAlignedBoundingBox([0, 0, s2, n2], u2, p2);
    const [g2, m2, f2, b2] = p2, w2 = Math.round(f2 - g2) || 1, y2 = Math.round(b2 - m2) || 1, A2 = this.cachedCanvases.getCanvas("fillCanvas", w2, y2), v2 = A2.context, x2 = g2, E2 = m2;
    v2.translate(-x2, -E2);
    v2.transform(...u2);
    if (!d2) {
      d2 = this._scaleImage(c2.canvas, getCurrentTransformInverse(v2));
      d2 = d2.img;
      l2 && a2 && l2.set(h2, d2);
    }
    v2.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(v2), e2.interpolate);
    drawImageAtIntegerCoords(v2, d2, 0, 0, d2.width, d2.height, 0, 0, s2, n2);
    v2.globalCompositeOperation = "source-in";
    const C2 = Util.transform(getCurrentTransformInverse(v2), [1, 0, 0, 1, -x2, -E2]);
    v2.fillStyle = a2 ? r2.getPattern(i2, this, C2, bt, t2) : r2;
    v2.fillRect(0, 0, s2, n2);
    if (l2 && !a2) {
      this.cachedCanvases.delete("fillCanvas");
      l2.set(h2, A2.canvas);
    }
    this.dependencyTracker?.recordDependencies(t2, ft);
    return { canvas: A2.canvas, offsetX: Math.round(x2), offsetY: Math.round(E2) };
  }
  setLineWidth(t2, e2) {
    this.dependencyTracker?.recordSimpleData("lineWidth", t2);
    e2 !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1);
    this.current.lineWidth = e2;
    this.ctx.lineWidth = e2;
  }
  setLineCap(t2, e2) {
    this.dependencyTracker?.recordSimpleData("lineCap", t2);
    this.ctx.lineCap = St[e2];
  }
  setLineJoin(t2, e2) {
    this.dependencyTracker?.recordSimpleData("lineJoin", t2);
    this.ctx.lineJoin = Tt[e2];
  }
  setMiterLimit(t2, e2) {
    this.dependencyTracker?.recordSimpleData("miterLimit", t2);
    this.ctx.miterLimit = e2;
  }
  setDash(t2, e2, i2) {
    this.dependencyTracker?.recordSimpleData("dash", t2);
    const s2 = this.ctx;
    if (void 0 !== s2.setLineDash) {
      s2.setLineDash(e2);
      s2.lineDashOffset = i2;
    }
  }
  setRenderingIntent(t2, e2) {
  }
  setFlatness(t2, e2) {
  }
  setGState(t2, e2) {
    for (const [i2, s2] of e2) switch (i2) {
      case "LW":
        this.setLineWidth(t2, s2);
        break;
      case "LC":
        this.setLineCap(t2, s2);
        break;
      case "LJ":
        this.setLineJoin(t2, s2);
        break;
      case "ML":
        this.setMiterLimit(t2, s2);
        break;
      case "D":
        this.setDash(t2, s2[0], s2[1]);
        break;
      case "RI":
        this.setRenderingIntent(t2, s2);
        break;
      case "FL":
        this.setFlatness(t2, s2);
        break;
      case "Font":
        this.setFont(t2, s2[0], s2[1]);
        break;
      case "CA":
        this.dependencyTracker?.recordSimpleData("strokeAlpha", t2);
        this.current.strokeAlpha = s2;
        break;
      case "ca":
        this.dependencyTracker?.recordSimpleData("fillAlpha", t2);
        this.ctx.globalAlpha = this.current.fillAlpha = s2;
        break;
      case "BM":
        this.dependencyTracker?.recordSimpleData("globalCompositeOperation", t2);
        this.ctx.globalCompositeOperation = s2;
        break;
      case "SMask":
        this.dependencyTracker?.recordSimpleData("SMask", t2);
        this.current.activeSMask = s2 ? this.tempSMask : null;
        this.tempSMask = null;
        this.checkSMaskState();
        break;
      case "TR":
        this.dependencyTracker?.recordSimpleData("filter", t2);
        this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s2);
    }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t2 = this.inSMaskMode;
    this.current.activeSMask && !t2 ? this.beginSMaskMode() : !this.current.activeSMask && t2 && this.endSMaskMode();
  }
  beginSMaskMode(t2) {
    if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
    const e2 = this.ctx.canvas.width, i2 = this.ctx.canvas.height, s2 = "smaskGroupAt" + this.groupLevel, n2 = this.cachedCanvases.getCanvas(s2, e2, i2);
    this.suspendedCtx = this.ctx;
    const r2 = this.ctx = n2.context;
    r2.setTransform(this.suspendedCtx.getTransform());
    copyCtxState(this.suspendedCtx, r2);
    !(function mirrorContextOperations(t3, e3) {
      if (t3._removeMirroring) throw new Error("Context is already forwarding operations.");
      t3.__originalSave = t3.save;
      t3.__originalRestore = t3.restore;
      t3.__originalRotate = t3.rotate;
      t3.__originalScale = t3.scale;
      t3.__originalTranslate = t3.translate;
      t3.__originalTransform = t3.transform;
      t3.__originalSetTransform = t3.setTransform;
      t3.__originalResetTransform = t3.resetTransform;
      t3.__originalClip = t3.clip;
      t3.__originalMoveTo = t3.moveTo;
      t3.__originalLineTo = t3.lineTo;
      t3.__originalBezierCurveTo = t3.bezierCurveTo;
      t3.__originalRect = t3.rect;
      t3.__originalClosePath = t3.closePath;
      t3.__originalBeginPath = t3.beginPath;
      t3._removeMirroring = () => {
        t3.save = t3.__originalSave;
        t3.restore = t3.__originalRestore;
        t3.rotate = t3.__originalRotate;
        t3.scale = t3.__originalScale;
        t3.translate = t3.__originalTranslate;
        t3.transform = t3.__originalTransform;
        t3.setTransform = t3.__originalSetTransform;
        t3.resetTransform = t3.__originalResetTransform;
        t3.clip = t3.__originalClip;
        t3.moveTo = t3.__originalMoveTo;
        t3.lineTo = t3.__originalLineTo;
        t3.bezierCurveTo = t3.__originalBezierCurveTo;
        t3.rect = t3.__originalRect;
        t3.closePath = t3.__originalClosePath;
        t3.beginPath = t3.__originalBeginPath;
        delete t3._removeMirroring;
      };
      t3.save = function() {
        e3.save();
        this.__originalSave();
      };
      t3.restore = function() {
        e3.restore();
        this.__originalRestore();
      };
      t3.translate = function(t4, i3) {
        e3.translate(t4, i3);
        this.__originalTranslate(t4, i3);
      };
      t3.scale = function(t4, i3) {
        e3.scale(t4, i3);
        this.__originalScale(t4, i3);
      };
      t3.transform = function(t4, i3, s3, n3, r3, a2) {
        e3.transform(t4, i3, s3, n3, r3, a2);
        this.__originalTransform(t4, i3, s3, n3, r3, a2);
      };
      t3.setTransform = function(t4, i3, s3, n3, r3, a2) {
        e3.setTransform(t4, i3, s3, n3, r3, a2);
        this.__originalSetTransform(t4, i3, s3, n3, r3, a2);
      };
      t3.resetTransform = function() {
        e3.resetTransform();
        this.__originalResetTransform();
      };
      t3.rotate = function(t4) {
        e3.rotate(t4);
        this.__originalRotate(t4);
      };
      t3.clip = function(t4) {
        e3.clip(t4);
        this.__originalClip(t4);
      };
      t3.moveTo = function(t4, i3) {
        e3.moveTo(t4, i3);
        this.__originalMoveTo(t4, i3);
      };
      t3.lineTo = function(t4, i3) {
        e3.lineTo(t4, i3);
        this.__originalLineTo(t4, i3);
      };
      t3.bezierCurveTo = function(t4, i3, s3, n3, r3, a2) {
        e3.bezierCurveTo(t4, i3, s3, n3, r3, a2);
        this.__originalBezierCurveTo(t4, i3, s3, n3, r3, a2);
      };
      t3.rect = function(t4, i3, s3, n3) {
        e3.rect(t4, i3, s3, n3);
        this.__originalRect(t4, i3, s3, n3);
      };
      t3.closePath = function() {
        e3.closePath();
        this.__originalClosePath();
      };
      t3.beginPath = function() {
        e3.beginPath();
        this.__originalBeginPath();
      };
    })(r2, this.suspendedCtx);
    this.setGState(t2, [["BM", "source-over"]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring();
    copyCtxState(this.ctx, this.suspendedCtx);
    this.ctx = this.suspendedCtx;
    this.suspendedCtx = null;
  }
  compose(t2) {
    if (!this.current.activeSMask) return;
    if (t2) {
      t2[0] = Math.floor(t2[0]);
      t2[1] = Math.floor(t2[1]);
      t2[2] = Math.ceil(t2[2]);
      t2[3] = Math.ceil(t2[3]);
    } else t2 = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e2 = this.current.activeSMask, i2 = this.suspendedCtx;
    this.composeSMask(i2, e2, this.ctx, t2);
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.restore();
  }
  composeSMask(t2, e2, i2, s2) {
    const n2 = s2[0], r2 = s2[1], a2 = s2[2] - n2, o2 = s2[3] - r2;
    if (0 !== a2 && 0 !== o2) {
      this.genericComposeSMask(e2.context, i2, a2, o2, e2.subtype, e2.backdrop, e2.transferMap, n2, r2, e2.offsetX, e2.offsetY);
      t2.save();
      t2.globalAlpha = 1;
      t2.globalCompositeOperation = "source-over";
      t2.setTransform(1, 0, 0, 1, 0, 0);
      t2.drawImage(i2.canvas, 0, 0);
      t2.restore();
    }
  }
  genericComposeSMask(t2, e2, i2, s2, n2, r2, a2, o2, l2, h2, d2) {
    let c2 = t2.canvas, u2 = o2 - h2, p2 = l2 - d2;
    if (r2) if (u2 < 0 || p2 < 0 || u2 + i2 > c2.width || p2 + s2 > c2.height) {
      const t3 = this.cachedCanvases.getCanvas("maskExtension", i2, s2), e3 = t3.context;
      e3.drawImage(c2, -u2, -p2);
      e3.globalCompositeOperation = "destination-atop";
      e3.fillStyle = r2;
      e3.fillRect(0, 0, i2, s2);
      e3.globalCompositeOperation = "source-over";
      c2 = t3.canvas;
      u2 = p2 = 0;
    } else {
      t2.save();
      t2.globalAlpha = 1;
      t2.setTransform(1, 0, 0, 1, 0, 0);
      const e3 = new Path2D();
      e3.rect(u2, p2, i2, s2);
      t2.clip(e3);
      t2.globalCompositeOperation = "destination-atop";
      t2.fillStyle = r2;
      t2.fillRect(u2, p2, i2, s2);
      t2.restore();
    }
    e2.save();
    e2.globalAlpha = 1;
    e2.setTransform(1, 0, 0, 1, 0, 0);
    "Alpha" === n2 && a2 ? e2.filter = this.filterFactory.addAlphaFilter(a2) : "Luminosity" === n2 && (e2.filter = this.filterFactory.addLuminosityFilter(a2));
    const g2 = new Path2D();
    g2.rect(o2, l2, i2, s2);
    e2.clip(g2);
    e2.globalCompositeOperation = "destination-in";
    e2.drawImage(c2, u2, p2, i2, s2, o2, l2, i2, s2);
    e2.restore();
  }
  save(t2) {
    this.inSMaskMode && copyCtxState(this.ctx, this.suspendedCtx);
    this.ctx.save();
    const e2 = this.current;
    this.stateStack.push(e2);
    this.current = e2.clone();
    this.dependencyTracker?.save(t2);
  }
  restore(t2) {
    this.dependencyTracker?.restore(t2);
    if (0 !== this.stateStack.length) {
      this.current = this.stateStack.pop();
      this.ctx.restore();
      this.inSMaskMode && copyCtxState(this.suspendedCtx, this.ctx);
      this.checkSMaskState();
      this.pendingClip = null;
      this._cachedScaleForStroking[0] = -1;
      this._cachedGetSinglePixelWidth = null;
    } else this.inSMaskMode && this.endSMaskMode();
  }
  transform(t2, e2, i2, s2, n2, r2, a2) {
    this.dependencyTracker?.recordIncrementalData("transform", t2);
    this.ctx.transform(e2, i2, s2, n2, r2, a2);
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t2, e2, i2, s2) {
    let [n2] = i2;
    if (s2) {
      if (null !== this.dependencyTracker) {
        const i3 = e2 === k.stroke ? this.current.lineWidth / 2 : 0;
        this.dependencyTracker.resetBBox(t2).recordBBox(t2, this.ctx, s2[0] - i3, s2[2] + i3, s2[1] - i3, s2[3] + i3).recordDependencies(t2, ["transform"]);
      }
      if (!(n2 instanceof Path2D)) {
        const t3 = i2[0] = new Path2D();
        for (let e3 = 0, i3 = n2.length; e3 < i3; ) switch (n2[e3++]) {
          case P:
            t3.moveTo(n2[e3++], n2[e3++]);
            break;
          case I:
            t3.lineTo(n2[e3++], n2[e3++]);
            break;
          case F:
            t3.bezierCurveTo(n2[e3++], n2[e3++], n2[e3++], n2[e3++], n2[e3++], n2[e3++]);
            break;
          case R:
            t3.closePath();
            break;
          default:
            warn(`Unrecognized drawing path operator: ${n2[e3 - 1]}`);
        }
        n2 = t3;
      }
      Util.axialAlignedBoundingBox(s2, getCurrentTransform(this.ctx), this.current.minMax);
      this[e2](t2, n2);
      this._pathStartIdx = t2;
    } else {
      n2 ||= i2[0] = new Path2D();
      this[e2](t2, n2);
    }
  }
  closePath(t2) {
    this.ctx.closePath();
  }
  stroke(t2, e2, i2 = true) {
    const s2 = this.ctx, n2 = this.current.strokeColor;
    s2.globalAlpha = this.current.strokeAlpha;
    if (this.contentVisible) if ("object" == typeof n2 && n2?.getPattern) {
      const i3 = n2.isModifyingCurrentTransform() ? s2.getTransform() : null;
      s2.save();
      s2.strokeStyle = n2.getPattern(s2, this, getCurrentTransformInverse(s2), wt, t2);
      if (i3) {
        const t3 = new Path2D();
        t3.addPath(e2, s2.getTransform().invertSelf().multiplySelf(i3));
        e2 = t3;
      }
      this.rescaleAndStroke(e2, false);
      s2.restore();
    } else this.rescaleAndStroke(e2, true);
    this.dependencyTracker?.recordDependencies(t2, dt);
    i2 && this.consumePath(t2, e2, this.current.getClippedPathBoundingBox(wt, getCurrentTransform(this.ctx)));
    s2.globalAlpha = this.current.fillAlpha;
  }
  closeStroke(t2, e2) {
    this.stroke(t2, e2);
  }
  fill(t2, e2, i2 = true) {
    const s2 = this.ctx, n2 = this.current.fillColor;
    let r2 = false;
    if (this.current.patternFill) {
      const i3 = n2.isModifyingCurrentTransform() ? s2.getTransform() : null;
      this.dependencyTracker?.save(t2);
      s2.save();
      s2.fillStyle = n2.getPattern(s2, this, getCurrentTransformInverse(s2), bt, t2);
      if (i3) {
        const t3 = new Path2D();
        t3.addPath(e2, s2.getTransform().invertSelf().multiplySelf(i3));
        e2 = t3;
      }
      r2 = true;
    }
    const a2 = this.current.getClippedPathBoundingBox();
    if (this.contentVisible && null !== a2) if (this.pendingEOFill) {
      s2.fill(e2, "evenodd");
      this.pendingEOFill = false;
    } else s2.fill(e2);
    this.dependencyTracker?.recordDependencies(t2, ct);
    if (r2) {
      s2.restore();
      this.dependencyTracker?.restore(t2);
    }
    i2 && this.consumePath(t2, e2, a2);
  }
  eoFill(t2, e2) {
    this.pendingEOFill = true;
    this.fill(t2, e2);
  }
  fillStroke(t2, e2) {
    this.fill(t2, e2, false);
    this.stroke(t2, e2, false);
    this.consumePath(t2, e2);
  }
  eoFillStroke(t2, e2) {
    this.pendingEOFill = true;
    this.fillStroke(t2, e2);
  }
  closeFillStroke(t2, e2) {
    this.fillStroke(t2, e2);
  }
  closeEOFillStroke(t2, e2) {
    this.pendingEOFill = true;
    this.fillStroke(t2, e2);
  }
  endPath(t2, e2) {
    this.consumePath(t2, e2);
  }
  rawFillPath(t2, e2) {
    this.ctx.fill(e2);
    this.dependencyTracker?.recordDependencies(t2, pt).recordOperation(t2);
  }
  clip(t2) {
    this.dependencyTracker?.recordFutureForcedDependency("clipMode", t2);
    this.pendingClip = Dt;
  }
  eoClip(t2) {
    this.dependencyTracker?.recordFutureForcedDependency("clipMode", t2);
    this.pendingClip = Mt;
  }
  beginText(t2) {
    this.current.textMatrix = null;
    this.current.textMatrixScale = 1;
    this.current.x = this.current.lineX = 0;
    this.current.y = this.current.lineY = 0;
    this.dependencyTracker?.recordOpenMarker(t2).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t2);
  }
  endText(t2) {
    const e2 = this.pendingTextPaths, i2 = this.ctx;
    if (this.dependencyTracker) {
      const { dependencyTracker: i3 } = this;
      void 0 !== e2 && i3.recordFutureForcedDependency("textClip", i3.getOpenMarker()).recordFutureForcedDependency("textClip", t2);
      i3.recordCloseMarker(t2);
    }
    if (void 0 !== e2) {
      const t3 = new Path2D(), s2 = i2.getTransform().invertSelf();
      for (const { transform: i3, x: n2, y: r2, fontSize: a2, path: o2 } of e2) o2 && t3.addPath(o2, new DOMMatrix(i3).preMultiplySelf(s2).translate(n2, r2).scale(a2, -a2));
      i2.clip(t3);
    }
    delete this.pendingTextPaths;
  }
  setCharSpacing(t2, e2) {
    this.dependencyTracker?.recordSimpleData("charSpacing", t2);
    this.current.charSpacing = e2;
  }
  setWordSpacing(t2, e2) {
    this.dependencyTracker?.recordSimpleData("wordSpacing", t2);
    this.current.wordSpacing = e2;
  }
  setHScale(t2, e2) {
    this.dependencyTracker?.recordSimpleData("hScale", t2);
    this.current.textHScale = e2 / 100;
  }
  setLeading(t2, e2) {
    this.dependencyTracker?.recordSimpleData("leading", t2);
    this.current.leading = -e2;
  }
  setFont(t2, i2, s2) {
    this.dependencyTracker?.recordSimpleData("font", t2).recordSimpleDataFromNamed("fontObj", i2, t2);
    const n2 = this.commonObjs.get(i2), r2 = this.current;
    if (!n2) throw new Error(`Can't find font for ${i2}`);
    r2.fontMatrix = n2.fontMatrix || e;
    0 !== r2.fontMatrix[0] && 0 !== r2.fontMatrix[3] || warn("Invalid font matrix for font " + i2);
    if (s2 < 0) {
      s2 = -s2;
      r2.fontDirection = -1;
    } else r2.fontDirection = 1;
    this.current.font = n2;
    this.current.fontSize = s2;
    if (n2.isType3Font) return;
    const a2 = n2.loadedName || "sans-serif", o2 = n2.systemFontInfo?.css || `"${a2}", ${n2.fallbackName}`;
    let l2 = "normal";
    n2.black ? l2 = "900" : n2.bold && (l2 = "bold");
    const h2 = n2.italic ? "italic" : "normal";
    let d2 = s2;
    s2 < 16 ? d2 = 16 : s2 > 100 && (d2 = 100);
    this.current.fontSizeScale = s2 / d2;
    this.ctx.font = `${h2} ${l2} ${d2}px ${o2}`;
  }
  setTextRenderingMode(t2, e2) {
    this.dependencyTracker?.recordSimpleData("textRenderingMode", t2);
    this.current.textRenderingMode = e2;
  }
  setTextRise(t2, e2) {
    this.dependencyTracker?.recordSimpleData("textRise", t2);
    this.current.textRise = e2;
  }
  moveText(t2, e2, i2) {
    this.dependencyTracker?.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t2);
    this.current.x = this.current.lineX += e2;
    this.current.y = this.current.lineY += i2;
  }
  setLeadingMoveText(t2, e2, i2) {
    this.setLeading(t2, -i2);
    this.moveText(t2, e2, i2);
  }
  setTextMatrix(t2, e2) {
    this.dependencyTracker?.recordSimpleData("textMatrix", t2);
    const { current: i2 } = this;
    i2.textMatrix = e2;
    i2.textMatrixScale = Math.hypot(e2[0], e2[1]);
    i2.x = i2.lineX = 0;
    i2.y = i2.lineY = 0;
  }
  nextLine(t2) {
    this.moveText(t2, 0, this.current.leading);
    this.dependencyTracker?.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t2);
  }
  #vs(t2, e2, i2) {
    const s2 = new Path2D();
    s2.addPath(t2, new DOMMatrix(i2).invertSelf().multiplySelf(e2));
    return s2;
  }
  paintChar(t2, e2, i2, s2, n2, r2) {
    const a2 = this.ctx, o2 = this.current, l2 = o2.font, h2 = o2.textRenderingMode, d2 = o2.fontSize / o2.fontSizeScale, c2 = h2 & A, u2 = !!(h2 & v), p2 = o2.patternFill && !l2.missingFile, g2 = o2.patternStroke && !l2.missingFile;
    let m2;
    (l2.disableFontFace || u2 || p2 || g2) && !l2.missingFile && (m2 = l2.getPathGenerator(this.commonObjs, e2));
    if (m2 && (l2.disableFontFace || p2 || g2)) {
      a2.save();
      a2.translate(i2, s2);
      a2.scale(d2, -d2);
      this.dependencyTracker?.recordCharacterBBox(t2, a2, l2);
      let e3;
      if (c2 === f || c2 === w) if (n2) {
        e3 = a2.getTransform();
        a2.setTransform(...n2);
        const t3 = this.#vs(m2, e3, n2);
        a2.fill(t3);
      } else a2.fill(m2);
      if (c2 === b || c2 === w) if (r2) {
        e3 ||= a2.getTransform();
        a2.setTransform(...r2);
        const { a: t3, b: i3, c: s3, d: n3 } = e3, o3 = Util.inverseTransform(r2), l3 = Util.transform([t3, i3, s3, n3, 0, 0], o3);
        Util.singularValueDecompose2dScale(l3, Ct);
        a2.lineWidth *= Math.max(Ct[0], Ct[1]) / d2;
        a2.stroke(this.#vs(m2, e3, r2));
      } else {
        a2.lineWidth /= d2;
        a2.stroke(m2);
      }
      a2.restore();
    } else {
      if (c2 === f || c2 === w) {
        a2.fillText(e2, i2, s2);
        this.dependencyTracker?.recordCharacterBBox(t2, a2, l2, d2, i2, s2, () => a2.measureText(e2));
      }
      if (c2 === b || c2 === w) {
        this.dependencyTracker && this.dependencyTracker?.recordCharacterBBox(t2, a2, l2, d2, i2, s2, () => a2.measureText(e2)).recordDependencies(t2, dt);
        a2.strokeText(e2, i2, s2);
      }
    }
    if (u2) {
      (this.pendingTextPaths ||= []).push({ transform: getCurrentTransform(a2), x: i2, y: s2, fontSize: d2, path: m2 });
      this.dependencyTracker?.recordCharacterBBox(t2, a2, l2, d2, i2, s2);
    }
  }
  get isFontSubpixelAAEnabled() {
    const { context: t2 } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t2.scale(1.5, 1);
    t2.fillText("I", 0, 10);
    const e2 = t2.getImageData(0, 0, 10, 10).data;
    let i2 = false;
    for (let t3 = 3; t3 < e2.length; t3 += 4) if (e2[t3] > 0 && e2[t3] < 255) {
      i2 = true;
      break;
    }
    return shadow(this, "isFontSubpixelAAEnabled", i2);
  }
  showText(t2, e2) {
    if (this.dependencyTracker) {
      this.dependencyTracker.recordDependencies(t2, gt).resetBBox(t2);
      this.current.textRenderingMode & v && this.dependencyTracker.recordFutureForcedDependency("textClip", t2).inheritPendingDependenciesAsFutureForcedDependencies();
    }
    const i2 = this.current, s2 = i2.font;
    if (s2.isType3Font) {
      this.showType3Text(t2, e2);
      this.dependencyTracker?.recordShowTextOperation(t2);
      return;
    }
    const n2 = i2.fontSize;
    if (0 === n2) {
      this.dependencyTracker?.recordOperation(t2);
      return;
    }
    const r2 = this.ctx, a2 = i2.fontSizeScale, o2 = i2.charSpacing, l2 = i2.wordSpacing, h2 = i2.fontDirection, d2 = i2.textHScale * h2, c2 = e2.length, u2 = s2.vertical, p2 = u2 ? 1 : -1, g2 = s2.defaultVMetrics, m2 = n2 * i2.fontMatrix[0], y2 = i2.textRenderingMode === f && !s2.disableFontFace && !i2.patternFill;
    r2.save();
    i2.textMatrix && r2.transform(...i2.textMatrix);
    r2.translate(i2.x, i2.y + i2.textRise);
    h2 > 0 ? r2.scale(d2, -1) : r2.scale(d2, 1);
    let x2, E2;
    if (i2.patternFill) {
      r2.save();
      const e3 = i2.fillColor.getPattern(r2, this, getCurrentTransformInverse(r2), bt, t2);
      x2 = getCurrentTransform(r2);
      r2.restore();
      r2.fillStyle = e3;
    }
    if (i2.patternStroke) {
      r2.save();
      const e3 = i2.strokeColor.getPattern(r2, this, getCurrentTransformInverse(r2), wt, t2);
      E2 = getCurrentTransform(r2);
      r2.restore();
      r2.strokeStyle = e3;
    }
    let C2 = i2.lineWidth;
    const _2 = i2.textMatrixScale;
    if (0 === _2 || 0 === C2) {
      const t3 = i2.textRenderingMode & A;
      t3 !== b && t3 !== w || (C2 = this.getSinglePixelWidth());
    } else C2 /= _2;
    if (1 !== a2) {
      r2.scale(a2, a2);
      C2 /= a2;
    }
    r2.lineWidth = C2;
    if (s2.isInvalidPDFjsFont) {
      const s3 = [];
      let n3 = 0;
      for (const t3 of e2) {
        s3.push(t3.unicode);
        n3 += t3.width;
      }
      const a3 = s3.join("");
      r2.fillText(a3, 0, 0);
      if (null !== this.dependencyTracker) {
        const e3 = r2.measureText(a3);
        this.dependencyTracker.recordBBox(t2, this.ctx, -e3.actualBoundingBoxLeft, e3.actualBoundingBoxRight, -e3.actualBoundingBoxAscent, e3.actualBoundingBoxDescent).recordShowTextOperation(t2);
      }
      i2.x += n3 * m2 * d2;
      r2.restore();
      this.compose();
      return;
    }
    let S2, T2 = 0;
    for (S2 = 0; S2 < c2; ++S2) {
      const i3 = e2[S2];
      if ("number" == typeof i3) {
        T2 += p2 * i3 * n2 / 1e3;
        continue;
      }
      let d3 = false;
      const c3 = (i3.isSpace ? l2 : 0) + o2, f2 = i3.fontChar, b2 = i3.accent;
      let w2, A2, v2, C3 = i3.width;
      if (u2) {
        const t3 = i3.vmetric || g2, e3 = -(i3.vmetric ? t3[1] : 0.5 * C3) * m2, s3 = t3[2] * m2;
        C3 = t3 ? -t3[0] : C3;
        w2 = e3 / a2;
        A2 = (T2 + s3) / a2;
      } else {
        w2 = T2 / a2;
        A2 = 0;
      }
      if (s2.remeasure && C3 > 0) {
        v2 = r2.measureText(f2);
        const t3 = 1e3 * v2.width / n2 * a2;
        if (C3 < t3 && this.isFontSubpixelAAEnabled) {
          const e3 = C3 / t3;
          d3 = true;
          r2.save();
          r2.scale(e3, 1);
          w2 /= e3;
        } else C3 !== t3 && (w2 += (C3 - t3) / 2e3 * n2 / a2);
      }
      if (this.contentVisible && (i3.isInFont || s2.missingFile)) if (y2 && !b2) {
        r2.fillText(f2, w2, A2);
        this.dependencyTracker?.recordCharacterBBox(t2, r2, v2 ? { bbox: null } : s2, n2 / a2, w2, A2, () => v2 ?? r2.measureText(f2));
      } else {
        this.paintChar(t2, f2, w2, A2, x2, E2);
        if (b2) {
          const e3 = w2 + n2 * b2.offset.x / a2, i4 = A2 - n2 * b2.offset.y / a2;
          this.paintChar(t2, b2.fontChar, e3, i4, x2, E2);
        }
      }
      T2 += u2 ? C3 * m2 - c3 * h2 : C3 * m2 + c3 * h2;
      d3 && r2.restore();
    }
    u2 ? i2.y -= T2 : i2.x += T2 * d2;
    r2.restore();
    this.compose();
    this.dependencyTracker?.recordShowTextOperation(t2);
  }
  showType3Text(t2, i2) {
    const s2 = this.ctx, n2 = this.current, r2 = n2.font, a2 = n2.fontSize, o2 = n2.fontDirection, l2 = r2.vertical ? 1 : -1, h2 = n2.charSpacing, d2 = n2.wordSpacing, c2 = n2.textHScale * o2, u2 = n2.fontMatrix || e, p2 = i2.length;
    let g2, m2, f2, b2;
    if (n2.textRenderingMode === y || 0 === a2) return;
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
    s2.save();
    n2.textMatrix && s2.transform(...n2.textMatrix);
    s2.translate(n2.x, n2.y + n2.textRise);
    s2.scale(c2, o2);
    const w2 = this.dependencyTracker;
    this.dependencyTracker = w2 ? new CanvasNestedDependencyTracker(w2, t2) : null;
    for (g2 = 0; g2 < p2; ++g2) {
      m2 = i2[g2];
      if ("number" == typeof m2) {
        b2 = l2 * m2 * a2 / 1e3;
        this.ctx.translate(b2, 0);
        n2.x += b2 * c2;
        continue;
      }
      const t3 = (m2.isSpace ? d2 : 0) + h2, e2 = r2.charProcOperatorList[m2.operatorListId];
      if (e2) {
        if (this.contentVisible) {
          this.save();
          s2.scale(a2, a2);
          s2.transform(...u2);
          this.executeOperatorList(e2);
          this.restore();
        }
      } else warn(`Type3 character "${m2.operatorListId}" is not available.`);
      const o3 = [m2.width, 0];
      Util.applyTransform(o3, u2);
      f2 = o3[0] * a2 + t3;
      s2.translate(f2, 0);
      n2.x += f2 * c2;
    }
    s2.restore();
    w2 && (this.dependencyTracker = w2);
  }
  setCharWidth(t2, e2, i2) {
  }
  setCharWidthAndBounds(t2, e2, i2, s2, n2, r2, a2) {
    const o2 = new Path2D();
    o2.rect(s2, n2, r2 - s2, a2 - n2);
    this.ctx.clip(o2);
    this.dependencyTracker?.recordBBox(t2, this.ctx, s2, r2, n2, a2).recordClipBox(t2, this.ctx, s2, r2, n2, a2);
    this.endPath(t2);
  }
  getColorN_Pattern(t2, e2) {
    let i2;
    if ("TilingPattern" === e2[0]) {
      const t3 = this.baseTransform || getCurrentTransform(this.ctx), s2 = { createCanvasGraphics: (t4, e3) => new CanvasGraphics(t4, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: this.optionalContentConfig, markedContentStack: this.markedContentStack }, void 0, void 0, this.dependencyTracker ? new CanvasNestedDependencyTracker(this.dependencyTracker, e3, true) : null) };
      i2 = new TilingPattern(e2, this.ctx, s2, t3);
    } else i2 = this._getPattern(t2, e2[1], e2[2]);
    return i2;
  }
  setStrokeColorN(t2, ...e2) {
    this.dependencyTracker?.recordSimpleData("strokeColor", t2);
    this.current.strokeColor = this.getColorN_Pattern(t2, e2);
    this.current.patternStroke = true;
  }
  setFillColorN(t2, ...e2) {
    this.dependencyTracker?.recordSimpleData("fillColor", t2);
    this.current.fillColor = this.getColorN_Pattern(t2, e2);
    this.current.patternFill = true;
  }
  setStrokeRGBColor(t2, e2) {
    this.dependencyTracker?.recordSimpleData("strokeColor", t2);
    this.ctx.strokeStyle = this.current.strokeColor = e2;
    this.current.patternStroke = false;
  }
  setStrokeTransparent(t2) {
    this.dependencyTracker?.recordSimpleData("strokeColor", t2);
    this.ctx.strokeStyle = this.current.strokeColor = "transparent";
    this.current.patternStroke = false;
  }
  setFillRGBColor(t2, e2) {
    this.dependencyTracker?.recordSimpleData("fillColor", t2);
    this.ctx.fillStyle = this.current.fillColor = e2;
    this.current.patternFill = false;
  }
  setFillTransparent(t2) {
    this.dependencyTracker?.recordSimpleData("fillColor", t2);
    this.ctx.fillStyle = this.current.fillColor = "transparent";
    this.current.patternFill = false;
  }
  _getPattern(t2, e2, i2 = null) {
    let s2;
    if (this.cachedPatterns.has(e2)) s2 = this.cachedPatterns.get(e2);
    else {
      s2 = (function getShadingPattern(t3) {
        switch (t3[0]) {
          case "RadialAxial":
            return new RadialAxialShadingPattern(t3);
          case "Mesh":
            return new MeshShadingPattern(t3);
          case "Dummy":
            return new DummyShadingPattern();
        }
        throw new Error(`Unknown IR type: ${t3[0]}`);
      })(this.getObject(t2, e2));
      this.cachedPatterns.set(e2, s2);
    }
    i2 && (s2.matrix = i2);
    return s2;
  }
  shadingFill(t2, e2) {
    if (!this.contentVisible) return;
    const i2 = this.ctx;
    this.save(t2);
    const s2 = this._getPattern(t2, e2);
    i2.fillStyle = s2.getPattern(i2, this, getCurrentTransformInverse(i2), yt, t2);
    const n2 = getCurrentTransformInverse(i2);
    if (n2) {
      const { width: t3, height: e3 } = i2.canvas, s3 = _t.slice();
      Util.axialAlignedBoundingBox([0, 0, t3, e3], n2, s3);
      const [r2, a2, o2, l2] = s3;
      this.ctx.fillRect(r2, a2, o2 - r2, l2 - a2);
    } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.dependencyTracker?.resetBBox(t2).recordFullPageBBox(t2).recordDependencies(t2, mt).recordDependencies(t2, ct).recordOperation(t2);
    this.compose(this.current.getClippedPathBoundingBox());
    this.restore(t2);
  }
  beginInlineImage() {
    unreachable("Should not call beginInlineImage");
  }
  beginImageData() {
    unreachable("Should not call beginImageData");
  }
  paintFormXObjectBegin(t2, e2, i2) {
    if (this.contentVisible) {
      this.save(t2);
      this.baseTransformStack.push(this.baseTransform);
      e2 && this.transform(t2, ...e2);
      this.baseTransform = getCurrentTransform(this.ctx);
      if (i2) {
        Util.axialAlignedBoundingBox(i2, this.baseTransform, this.current.minMax);
        const [e3, s2, n2, r2] = i2, a2 = new Path2D();
        a2.rect(e3, s2, n2 - e3, r2 - s2);
        this.ctx.clip(a2);
        this.dependencyTracker?.recordClipBox(t2, this.ctx, e3, n2, s2, r2);
        this.endPath(t2);
      }
    }
  }
  paintFormXObjectEnd(t2) {
    if (this.contentVisible) {
      this.restore(t2);
      this.baseTransform = this.baseTransformStack.pop();
    }
  }
  beginGroup(t2, e2) {
    if (!this.contentVisible) return;
    this.save(t2);
    if (this.inSMaskMode) {
      this.endSMaskMode();
      this.current.activeSMask = null;
    }
    const i2 = this.ctx;
    e2.isolated || info("TODO: Support non-isolated groups.");
    e2.knockout && warn("Knockout groups not supported.");
    const s2 = getCurrentTransform(i2);
    e2.matrix && i2.transform(...e2.matrix);
    if (!e2.bbox) throw new Error("Bounding box is required.");
    let n2 = _t.slice();
    Util.axialAlignedBoundingBox(e2.bbox, getCurrentTransform(i2), n2);
    const r2 = [0, 0, i2.canvas.width, i2.canvas.height];
    n2 = Util.intersect(n2, r2) || [0, 0, 0, 0];
    const a2 = Math.floor(n2[0]), o2 = Math.floor(n2[1]), l2 = Math.max(Math.ceil(n2[2]) - a2, 1), h2 = Math.max(Math.ceil(n2[3]) - o2, 1);
    this.current.startNewPathAndClipBox([0, 0, l2, h2]);
    let d2 = "groupAt" + this.groupLevel;
    e2.smask && (d2 += "_smask_" + this.smaskCounter++ % 2);
    const c2 = this.cachedCanvases.getCanvas(d2, l2, h2), u2 = c2.context;
    u2.translate(-a2, -o2);
    u2.transform(...s2);
    let p2 = new Path2D();
    const [g2, m2, f2, b2] = e2.bbox;
    p2.rect(g2, m2, f2 - g2, b2 - m2);
    if (e2.matrix) {
      const t3 = new Path2D();
      t3.addPath(p2, new DOMMatrix(e2.matrix));
      p2 = t3;
    }
    u2.clip(p2);
    e2.smask && this.smaskStack.push({ canvas: c2.canvas, context: u2, offsetX: a2, offsetY: o2, subtype: e2.smask.subtype, backdrop: e2.smask.backdrop, transferMap: e2.smask.transferMap || null, startTransformInverse: null });
    if (!e2.smask || this.dependencyTracker) {
      i2.setTransform(1, 0, 0, 1, 0, 0);
      i2.translate(a2, o2);
      i2.save();
    }
    copyCtxState(i2, u2);
    this.ctx = u2;
    this.dependencyTracker?.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(i2);
    this.setGState(t2, [["BM", "source-over"], ["ca", 1], ["CA", 1]]);
    this.groupStack.push(i2);
    this.groupLevel++;
  }
  endGroup(t2, e2) {
    if (!this.contentVisible) return;
    this.groupLevel--;
    const i2 = this.ctx, s2 = this.groupStack.pop();
    this.ctx = s2;
    this.ctx.imageSmoothingEnabled = false;
    this.dependencyTracker?.popBaseTransform();
    if (e2.smask) {
      this.tempSMask = this.smaskStack.pop();
      this.restore(t2);
      this.dependencyTracker && this.ctx.restore();
    } else {
      this.ctx.restore();
      const e3 = getCurrentTransform(this.ctx);
      this.restore(t2);
      this.ctx.save();
      this.ctx.setTransform(...e3);
      const s3 = _t.slice();
      Util.axialAlignedBoundingBox([0, 0, i2.canvas.width, i2.canvas.height], e3, s3);
      this.ctx.drawImage(i2.canvas, 0, 0);
      this.ctx.restore();
      this.compose(s3);
    }
  }
  beginAnnotation(t2, e2, i2, s2, n2, r2) {
    this.#ys();
    resetCtxToDefault(this.ctx);
    this.ctx.save();
    this.save(t2);
    this.baseTransform && this.ctx.setTransform(...this.baseTransform);
    if (i2) {
      const n3 = i2[2] - i2[0], a2 = i2[3] - i2[1];
      if (r2 && this.annotationCanvasMap) {
        (s2 = s2.slice())[4] -= i2[0];
        s2[5] -= i2[1];
        (i2 = i2.slice())[0] = i2[1] = 0;
        i2[2] = n3;
        i2[3] = a2;
        Util.singularValueDecompose2dScale(getCurrentTransform(this.ctx), Ct);
        const { viewportScale: t3 } = this, r3 = Math.ceil(n3 * this.outputScaleX * t3), o2 = Math.ceil(a2 * this.outputScaleY * t3);
        this.annotationCanvas = this.canvasFactory.create(r3, o2);
        const { canvas: l2, context: h2 } = this.annotationCanvas;
        this.annotationCanvasMap.set(e2, l2);
        this.annotationCanvas.savedCtx = this.ctx;
        this.ctx = h2;
        this.ctx.save();
        this.ctx.setTransform(Ct[0], 0, 0, -Ct[1], 0, a2 * Ct[1]);
        resetCtxToDefault(this.ctx);
      } else {
        resetCtxToDefault(this.ctx);
        this.endPath(t2);
        const e3 = new Path2D();
        e3.rect(i2[0], i2[1], n3, a2);
        this.ctx.clip(e3);
      }
    }
    this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
    this.transform(t2, ...s2);
    this.transform(t2, ...n2);
  }
  endAnnotation(t2) {
    if (this.annotationCanvas) {
      this.ctx.restore();
      this.#As();
      this.ctx = this.annotationCanvas.savedCtx;
      delete this.annotationCanvas.savedCtx;
      delete this.annotationCanvas;
    }
  }
  paintImageMaskXObject(t2, e2) {
    if (!this.contentVisible) return;
    const i2 = e2.count;
    (e2 = this.getObject(t2, e2.data, e2)).count = i2;
    const s2 = this.ctx, n2 = this._createMaskCanvas(t2, e2), r2 = n2.canvas;
    s2.save();
    s2.setTransform(1, 0, 0, 1, 0, 0);
    s2.drawImage(r2, n2.offsetX, n2.offsetY);
    this.dependencyTracker?.resetBBox(t2).recordBBox(t2, this.ctx, n2.offsetX, n2.offsetX + r2.width, n2.offsetY, n2.offsetY + r2.height).recordOperation(t2);
    s2.restore();
    this.compose();
  }
  paintImageMaskXObjectRepeat(t2, e2, i2, s2 = 0, n2 = 0, r2, a2) {
    if (!this.contentVisible) return;
    e2 = this.getObject(t2, e2.data, e2);
    const o2 = this.ctx;
    o2.save();
    const l2 = getCurrentTransform(o2);
    o2.transform(i2, s2, n2, r2, 0, 0);
    const h2 = this._createMaskCanvas(t2, e2);
    o2.setTransform(1, 0, 0, 1, h2.offsetX - l2[4], h2.offsetY - l2[5]);
    this.dependencyTracker?.resetBBox(t2);
    for (let e3 = 0, d2 = a2.length; e3 < d2; e3 += 2) {
      const d3 = Util.transform(l2, [i2, s2, n2, r2, a2[e3], a2[e3 + 1]]);
      o2.drawImage(h2.canvas, d3[4], d3[5]);
      this.dependencyTracker?.recordBBox(t2, this.ctx, d3[4], d3[4] + h2.canvas.width, d3[5], d3[5] + h2.canvas.height);
    }
    o2.restore();
    this.compose();
    this.dependencyTracker?.recordOperation(t2);
  }
  paintImageMaskXObjectGroup(t2, e2) {
    if (!this.contentVisible) return;
    const i2 = this.ctx, s2 = this.current.fillColor, n2 = this.current.patternFill;
    this.dependencyTracker?.resetBBox(t2).recordDependencies(t2, ft);
    for (const r2 of e2) {
      const { data: e3, width: a2, height: o2, transform: l2 } = r2, h2 = this.cachedCanvases.getCanvas("maskCanvas", a2, o2), d2 = h2.context;
      d2.save();
      putBinaryImageMask(d2, this.getObject(t2, e3, r2));
      d2.globalCompositeOperation = "source-in";
      d2.fillStyle = n2 ? s2.getPattern(d2, this, getCurrentTransformInverse(i2), bt, t2) : s2;
      d2.fillRect(0, 0, a2, o2);
      d2.restore();
      i2.save();
      i2.transform(...l2);
      i2.scale(1, -1);
      drawImageAtIntegerCoords(i2, h2.canvas, 0, 0, a2, o2, 0, -1, 1, 1);
      this.dependencyTracker?.recordBBox(t2, i2, 0, a2, 0, o2);
      i2.restore();
    }
    this.compose();
    this.dependencyTracker?.recordOperation(t2);
  }
  paintImageXObject(t2, e2) {
    if (!this.contentVisible) return;
    const i2 = this.getObject(t2, e2);
    i2 ? this.paintInlineImageXObject(t2, i2) : warn("Dependent image isn't ready yet");
  }
  paintImageXObjectRepeat(t2, e2, i2, s2, n2) {
    if (!this.contentVisible) return;
    const r2 = this.getObject(t2, e2);
    if (!r2) {
      warn("Dependent image isn't ready yet");
      return;
    }
    const a2 = r2.width, o2 = r2.height, l2 = [];
    for (let t3 = 0, e3 = n2.length; t3 < e3; t3 += 2) l2.push({ transform: [i2, 0, 0, s2, n2[t3], n2[t3 + 1]], x: 0, y: 0, w: a2, h: o2 });
    this.paintInlineImageXObjectGroup(t2, r2, l2);
  }
  applyTransferMapsToCanvas(t2) {
    if ("none" !== this.current.transferMaps) {
      t2.filter = this.current.transferMaps;
      t2.drawImage(t2.canvas, 0, 0);
      t2.filter = "none";
    }
    return t2.canvas;
  }
  applyTransferMapsToBitmap(t2) {
    if ("none" === this.current.transferMaps) return t2.bitmap;
    const { bitmap: e2, width: i2, height: s2 } = t2, n2 = this.cachedCanvases.getCanvas("inlineImage", i2, s2), r2 = n2.context;
    r2.filter = this.current.transferMaps;
    r2.drawImage(e2, 0, 0);
    r2.filter = "none";
    return n2.canvas;
  }
  paintInlineImageXObject(t2, e2) {
    if (!this.contentVisible) return;
    const i2 = e2.width, s2 = e2.height, n2 = this.ctx;
    this.save(t2);
    const { filter: r2 } = n2;
    "none" !== r2 && "" !== r2 && (n2.filter = "none");
    n2.scale(1 / i2, -1 / s2);
    let a2;
    if (e2.bitmap) a2 = this.applyTransferMapsToBitmap(e2);
    else if ("function" == typeof HTMLElement && e2 instanceof HTMLElement || !e2.data) a2 = e2;
    else {
      const t3 = this.cachedCanvases.getCanvas("inlineImage", i2, s2).context;
      putBinaryImageData(t3, e2);
      a2 = this.applyTransferMapsToCanvas(t3);
    }
    const o2 = this._scaleImage(a2, getCurrentTransformInverse(n2));
    n2.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(n2), e2.interpolate);
    this.dependencyTracker?.resetBBox(t2).recordBBox(t2, n2, 0, i2, -s2, 0).recordDependencies(t2, ut).recordOperation(t2);
    drawImageAtIntegerCoords(n2, o2.img, 0, 0, o2.paintWidth, o2.paintHeight, 0, -s2, i2, s2);
    this.compose();
    this.restore(t2);
  }
  paintInlineImageXObjectGroup(t2, e2, i2) {
    if (!this.contentVisible) return;
    const s2 = this.ctx;
    let n2;
    if (e2.bitmap) n2 = e2.bitmap;
    else {
      const t3 = e2.width, i3 = e2.height, s3 = this.cachedCanvases.getCanvas("inlineImage", t3, i3).context;
      putBinaryImageData(s3, e2);
      n2 = this.applyTransferMapsToCanvas(s3);
    }
    this.dependencyTracker?.resetBBox(t2);
    for (const e3 of i2) {
      s2.save();
      s2.transform(...e3.transform);
      s2.scale(1, -1);
      drawImageAtIntegerCoords(s2, n2, e3.x, e3.y, e3.w, e3.h, 0, -1, 1, 1);
      this.dependencyTracker?.recordBBox(t2, s2, 0, 1, -1, 0);
      s2.restore();
    }
    this.dependencyTracker?.recordOperation(t2);
    this.compose();
  }
  paintSolidColorImageMask(t2) {
    if (this.contentVisible) {
      this.dependencyTracker?.resetBBox(t2).recordBBox(t2, this.ctx, 0, 1, 0, 1).recordDependencies(t2, ct).recordOperation(t2);
      this.ctx.fillRect(0, 0, 1, 1);
      this.compose();
    }
  }
  markPoint(t2, e2) {
  }
  markPointProps(t2, e2, i2) {
  }
  beginMarkedContent(t2, e2) {
    this.dependencyTracker?.beginMarkedContent(t2);
    this.markedContentStack.push({ visible: true });
  }
  beginMarkedContentProps(t2, e2, i2) {
    this.dependencyTracker?.beginMarkedContent(t2);
    "OC" === e2 ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(i2) }) : this.markedContentStack.push({ visible: true });
    this.contentVisible = this.isContentVisible();
  }
  endMarkedContent(t2) {
    this.dependencyTracker?.endMarkedContent(t2);
    this.markedContentStack.pop();
    this.contentVisible = this.isContentVisible();
  }
  beginCompat(t2) {
  }
  endCompat(t2) {
  }
  consumePath(t2, e2, i2) {
    const s2 = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath();
    this.pendingClip || this.compose(i2);
    const n2 = this.ctx;
    if (this.pendingClip) {
      s2 || (this.pendingClip === Mt ? n2.clip(e2, "evenodd") : n2.clip(e2));
      this.pendingClip = null;
      this.dependencyTracker?.bboxToClipBoxDropOperation(t2).recordFutureForcedDependency("clipPath", t2);
    } else this.dependencyTracker?.recordOperation(t2);
    this.current.startNewPathAndClipBox(this.current.clipBox);
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t2 = getCurrentTransform(this.ctx);
      if (0 === t2[1] && 0 === t2[2]) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t2[0]), Math.abs(t2[3]));
      else {
        const e2 = Math.abs(t2[0] * t2[3] - t2[2] * t2[1]), i2 = Math.hypot(t2[0], t2[2]), s2 = Math.hypot(t2[1], t2[3]);
        this._cachedGetSinglePixelWidth = Math.max(i2, s2) / e2;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (-1 === this._cachedScaleForStroking[0]) {
      const { lineWidth: t2 } = this.current, { a: e2, b: i2, c: s2, d: n2 } = this.ctx.getTransform();
      let r2, a2;
      if (0 === i2 && 0 === s2) {
        const i3 = Math.abs(e2), s3 = Math.abs(n2);
        if (i3 === s3) if (0 === t2) r2 = a2 = 1 / i3;
        else {
          const e3 = i3 * t2;
          r2 = a2 = e3 < 1 ? 1 / e3 : 1;
        }
        else if (0 === t2) {
          r2 = 1 / i3;
          a2 = 1 / s3;
        } else {
          const e3 = i3 * t2, n3 = s3 * t2;
          r2 = e3 < 1 ? 1 / e3 : 1;
          a2 = n3 < 1 ? 1 / n3 : 1;
        }
      } else {
        const o2 = Math.abs(e2 * n2 - i2 * s2), l2 = Math.hypot(e2, i2), h2 = Math.hypot(s2, n2);
        if (0 === t2) {
          r2 = h2 / o2;
          a2 = l2 / o2;
        } else {
          const e3 = t2 * o2;
          r2 = h2 > e3 ? h2 / e3 : 1;
          a2 = l2 > e3 ? l2 / e3 : 1;
        }
      }
      this._cachedScaleForStroking[0] = r2;
      this._cachedScaleForStroking[1] = a2;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t2, e2) {
    const { ctx: i2, current: { lineWidth: s2 } } = this, [n2, r2] = this.getScaleForStroking();
    if (n2 === r2) {
      i2.lineWidth = (s2 || 1) * n2;
      i2.stroke(t2);
      return;
    }
    const a2 = i2.getLineDash();
    e2 && i2.save();
    i2.scale(n2, r2);
    Et.a = 1 / n2;
    Et.d = 1 / r2;
    const o2 = new Path2D();
    o2.addPath(t2, Et);
    if (a2.length > 0) {
      const t3 = Math.max(n2, r2);
      i2.setLineDash(a2.map((e3) => e3 / t3));
      i2.lineDashOffset /= t3;
    }
    i2.lineWidth = s2 || 1;
    i2.stroke(o2);
    e2 && i2.restore();
  }
  isContentVisible() {
    for (let t2 = this.markedContentStack.length - 1; t2 >= 0; t2--) if (!this.markedContentStack[t2].visible) return false;
    return true;
  }
}
for (const t2 in k) void 0 !== CanvasGraphics.prototype[t2] && (CanvasGraphics.prototype[k[t2]] = CanvasGraphics.prototype[t2]);
class CssFontInfo {
  #xs;
  #Es;
  #Cs;
  static strings = ["fontFamily", "fontWeight", "italicAngle"];
  static write(t2) {
    const e2 = new TextEncoder(), i2 = {};
    let s2 = 0;
    for (const n3 of CssFontInfo.strings) {
      const r3 = e2.encode(t2[n3]);
      i2[n3] = r3;
      s2 += 4 + r3.length;
    }
    const n2 = new ArrayBuffer(s2), r2 = new Uint8Array(n2), a2 = new DataView(n2);
    let o2 = 0;
    for (const t3 of CssFontInfo.strings) {
      const e3 = i2[t3], s3 = e3.length;
      a2.setUint32(o2, s3);
      r2.set(e3, o2 + 4);
      o2 += 4 + s3;
    }
    assert(o2 === n2.byteLength, "CssFontInfo.write: Buffer overflow");
    return n2;
  }
  constructor(t2) {
    this.#xs = t2;
    this.#Es = new DataView(this.#xs);
    this.#Cs = new TextDecoder();
  }
  #_s(t2) {
    assert(t2 < CssFontInfo.strings.length, "Invalid string index");
    let e2 = 0;
    for (let i3 = 0; i3 < t2; i3++) e2 += this.#Es.getUint32(e2) + 4;
    const i2 = this.#Es.getUint32(e2);
    return this.#Cs.decode(new Uint8Array(this.#xs, e2 + 4, i2));
  }
  get fontFamily() {
    return this.#_s(0);
  }
  get fontWeight() {
    return this.#_s(1);
  }
  get italicAngle() {
    return this.#_s(2);
  }
}
class SystemFontInfo {
  #xs;
  #Es;
  #Cs;
  static strings = ["css", "loadedName", "baseFontName", "src"];
  static write(t2) {
    const e2 = new TextEncoder(), i2 = {};
    let s2 = 0;
    for (const n3 of SystemFontInfo.strings) {
      const r3 = e2.encode(t2[n3]);
      i2[n3] = r3;
      s2 += 4 + r3.length;
    }
    s2 += 4;
    let n2, r2, a2 = 1 + s2;
    if (t2.style) {
      n2 = e2.encode(t2.style.style);
      r2 = e2.encode(t2.style.weight);
      a2 += 4 + n2.length + 4 + r2.length;
    }
    const o2 = new ArrayBuffer(a2), l2 = new Uint8Array(o2), h2 = new DataView(o2);
    let d2 = 0;
    h2.setUint8(d2++, t2.guessFallback ? 1 : 0);
    h2.setUint32(d2, 0);
    d2 += 4;
    s2 = 0;
    for (const t3 of SystemFontInfo.strings) {
      const e3 = i2[t3], n3 = e3.length;
      s2 += 4 + n3;
      h2.setUint32(d2, n3);
      l2.set(e3, d2 + 4);
      d2 += 4 + n3;
    }
    h2.setUint32(d2 - s2 - 4, s2);
    if (t2.style) {
      h2.setUint32(d2, n2.length);
      l2.set(n2, d2 + 4);
      d2 += 4 + n2.length;
      h2.setUint32(d2, r2.length);
      l2.set(r2, d2 + 4);
      d2 += 4 + r2.length;
    }
    assert(d2 <= o2.byteLength, "SubstitionInfo.write: Buffer overflow");
    return o2.transferToFixedLength(d2);
  }
  constructor(t2) {
    this.#xs = t2;
    this.#Es = new DataView(this.#xs);
    this.#Cs = new TextDecoder();
  }
  get guessFallback() {
    return 0 !== this.#Es.getUint8(0);
  }
  #_s(t2) {
    assert(t2 < SystemFontInfo.strings.length, "Invalid string index");
    let e2 = 5;
    for (let i3 = 0; i3 < t2; i3++) e2 += this.#Es.getUint32(e2) + 4;
    const i2 = this.#Es.getUint32(e2);
    return this.#Cs.decode(new Uint8Array(this.#xs, e2 + 4, i2));
  }
  get css() {
    return this.#_s(0);
  }
  get loadedName() {
    return this.#_s(1);
  }
  get baseFontName() {
    return this.#_s(2);
  }
  get src() {
    return this.#_s(3);
  }
  get style() {
    let t2 = 1;
    t2 += 4 + this.#Es.getUint32(t2);
    const e2 = this.#Es.getUint32(t2), i2 = this.#Cs.decode(new Uint8Array(this.#xs, t2 + 4, e2));
    t2 += 4 + e2;
    const s2 = this.#Es.getUint32(t2);
    return { style: i2, weight: this.#Cs.decode(new Uint8Array(this.#xs, t2 + 4, s2)) };
  }
}
class FontInfo {
  static bools = ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"];
  static numbers = ["ascent", "defaultWidth", "descent"];
  static strings = ["fallbackName", "loadedName", "mimetype", "name"];
  static #Ss = Math.ceil(2 * this.bools.length / 8);
  static #Ts = this.#Ss + 8 * this.numbers.length;
  static #Ds = this.#Ts + 1 + 8;
  static #Ms = this.#Ds + 1 + 48;
  static #ks = this.#Ms + 1 + 6;
  #xs;
  #Cs;
  #Es;
  constructor({ data: t2, extra: e2 }) {
    this.#xs = t2;
    this.#Cs = new TextDecoder();
    this.#Es = new DataView(this.#xs);
    e2 && Object.assign(this, e2);
  }
  #Ps(t2) {
    assert(t2 < FontInfo.bools.length, "Invalid boolean index");
    const e2 = Math.floor(t2 / 4), i2 = 2 * t2 % 8, s2 = this.#Es.getUint8(e2) >> i2 & 3;
    return 0 === s2 ? void 0 : 2 === s2;
  }
  get black() {
    return this.#Ps(0);
  }
  get bold() {
    return this.#Ps(1);
  }
  get disableFontFace() {
    return this.#Ps(2);
  }
  get fontExtraProperties() {
    return this.#Ps(3);
  }
  get isInvalidPDFjsFont() {
    return this.#Ps(4);
  }
  get isType3Font() {
    return this.#Ps(5);
  }
  get italic() {
    return this.#Ps(6);
  }
  get missingFile() {
    return this.#Ps(7);
  }
  get remeasure() {
    return this.#Ps(8);
  }
  get vertical() {
    return this.#Ps(9);
  }
  #Is(t2) {
    assert(t2 < FontInfo.numbers.length, "Invalid number index");
    return this.#Es.getFloat64(FontInfo.#Ss + 8 * t2);
  }
  get ascent() {
    return this.#Is(0);
  }
  get defaultWidth() {
    return this.#Is(1);
  }
  get descent() {
    return this.#Is(2);
  }
  get bbox() {
    let t2 = FontInfo.#Ts;
    if (0 === this.#Es.getUint8(t2)) return;
    t2 += 1;
    const e2 = [];
    for (let i2 = 0; i2 < 4; i2++) {
      e2.push(this.#Es.getInt16(t2, true));
      t2 += 2;
    }
    return e2;
  }
  get fontMatrix() {
    let t2 = FontInfo.#Ds;
    if (0 === this.#Es.getUint8(t2)) return;
    t2 += 1;
    const e2 = [];
    for (let i2 = 0; i2 < 6; i2++) {
      e2.push(this.#Es.getFloat64(t2, true));
      t2 += 8;
    }
    return e2;
  }
  get defaultVMetrics() {
    let t2 = FontInfo.#Ms;
    if (0 === this.#Es.getUint8(t2)) return;
    t2 += 1;
    const e2 = [];
    for (let i2 = 0; i2 < 3; i2++) {
      e2.push(this.#Es.getInt16(t2, true));
      t2 += 2;
    }
    return e2;
  }
  #_s(t2) {
    assert(t2 < FontInfo.strings.length, "Invalid string index");
    let e2 = FontInfo.#ks + 4;
    for (let i3 = 0; i3 < t2; i3++) e2 += this.#Es.getUint32(e2) + 4;
    const i2 = this.#Es.getUint32(e2), s2 = new Uint8Array(i2);
    s2.set(new Uint8Array(this.#xs, e2 + 4, i2));
    return this.#Cs.decode(s2);
  }
  get fallbackName() {
    return this.#_s(0);
  }
  get loadedName() {
    return this.#_s(1);
  }
  get mimetype() {
    return this.#_s(2);
  }
  get name() {
    return this.#_s(3);
  }
  get data() {
    let t2 = FontInfo.#ks;
    t2 += 4 + this.#Es.getUint32(t2);
    t2 += 4 + this.#Es.getUint32(t2);
    t2 += 4 + this.#Es.getUint32(t2);
    const e2 = this.#Es.getUint32(t2);
    if (0 !== e2) return new Uint8Array(this.#xs, t2 + 4, e2);
  }
  clearData() {
    let t2 = FontInfo.#ks;
    t2 += 4 + this.#Es.getUint32(t2);
    t2 += 4 + this.#Es.getUint32(t2);
    t2 += 4 + this.#Es.getUint32(t2);
    const e2 = this.#Es.getUint32(t2);
    new Uint8Array(this.#xs, t2 + 4, e2).fill(0);
    this.#Es.setUint32(t2, 0);
  }
  get cssFontInfo() {
    let t2 = FontInfo.#ks;
    t2 += 4 + this.#Es.getUint32(t2);
    t2 += 4 + this.#Es.getUint32(t2);
    const e2 = this.#Es.getUint32(t2);
    if (0 === e2) return null;
    const i2 = new Uint8Array(e2);
    i2.set(new Uint8Array(this.#xs, t2 + 4, e2));
    return new CssFontInfo(i2.buffer);
  }
  get systemFontInfo() {
    let t2 = FontInfo.#ks;
    t2 += 4 + this.#Es.getUint32(t2);
    const e2 = this.#Es.getUint32(t2);
    if (0 === e2) return null;
    const i2 = new Uint8Array(e2);
    i2.set(new Uint8Array(this.#xs, t2 + 4, e2));
    return new SystemFontInfo(i2.buffer);
  }
  static write(t2) {
    const e2 = t2.systemFontInfo ? SystemFontInfo.write(t2.systemFontInfo) : null, i2 = t2.cssFontInfo ? CssFontInfo.write(t2.cssFontInfo) : null, s2 = new TextEncoder(), n2 = {};
    let r2 = 0;
    for (const e3 of FontInfo.strings) {
      n2[e3] = s2.encode(t2[e3]);
      r2 += 4 + n2[e3].length;
    }
    const a2 = FontInfo.#ks + 4 + r2 + 4 + (e2 ? e2.byteLength : 0) + 4 + (i2 ? i2.byteLength : 0) + 4 + (t2.data ? t2.data.length : 0), o2 = new ArrayBuffer(a2), l2 = new Uint8Array(o2), h2 = new DataView(o2);
    let d2 = 0;
    const c2 = FontInfo.bools.length;
    let u2 = 0, p2 = 0;
    for (let e3 = 0; e3 < c2; e3++) {
      const i3 = t2[FontInfo.bools[e3]];
      u2 |= (void 0 === i3 ? 0 : i3 ? 2 : 1) << p2;
      p2 += 2;
      if (8 === p2 || e3 === c2 - 1) {
        h2.setUint8(d2++, u2);
        u2 = 0;
        p2 = 0;
      }
    }
    assert(d2 === FontInfo.#Ss, "FontInfo.write: Boolean properties offset mismatch");
    for (const e3 of FontInfo.numbers) {
      h2.setFloat64(d2, t2[e3]);
      d2 += 8;
    }
    assert(d2 === FontInfo.#Ts, "FontInfo.write: Number properties offset mismatch");
    if (t2.bbox) {
      h2.setUint8(d2++, 4);
      for (const e3 of t2.bbox) {
        h2.setInt16(d2, e3, true);
        d2 += 2;
      }
    } else {
      h2.setUint8(d2++, 0);
      d2 += 8;
    }
    assert(d2 === FontInfo.#Ds, "FontInfo.write: BBox properties offset mismatch");
    if (t2.fontMatrix) {
      h2.setUint8(d2++, 6);
      for (const e3 of t2.fontMatrix) {
        h2.setFloat64(d2, e3, true);
        d2 += 8;
      }
    } else {
      h2.setUint8(d2++, 0);
      d2 += 48;
    }
    assert(d2 === FontInfo.#Ms, "FontInfo.write: FontMatrix properties offset mismatch");
    if (t2.defaultVMetrics) {
      h2.setUint8(d2++, 1);
      for (const e3 of t2.defaultVMetrics) {
        h2.setInt16(d2, e3, true);
        d2 += 2;
      }
    } else {
      h2.setUint8(d2++, 0);
      d2 += 6;
    }
    assert(d2 === FontInfo.#ks, "FontInfo.write: DefaultVMetrics properties offset mismatch");
    h2.setUint32(FontInfo.#ks, 0);
    d2 += 4;
    for (const t3 of FontInfo.strings) {
      const e3 = n2[t3], i3 = e3.length;
      h2.setUint32(d2, i3);
      l2.set(e3, d2 + 4);
      d2 += 4 + i3;
    }
    h2.setUint32(FontInfo.#ks, d2 - FontInfo.#ks - 4);
    if (e2) {
      const t3 = e2.byteLength;
      h2.setUint32(d2, t3);
      assert(d2 + 4 + t3 <= o2.byteLength, "FontInfo.write: Buffer overflow at systemFontInfo");
      l2.set(new Uint8Array(e2), d2 + 4);
      d2 += 4 + t3;
    } else {
      h2.setUint32(d2, 0);
      d2 += 4;
    }
    if (i2) {
      const t3 = i2.byteLength;
      h2.setUint32(d2, t3);
      assert(d2 + 4 + t3 <= o2.byteLength, "FontInfo.write: Buffer overflow at cssFontInfo");
      l2.set(new Uint8Array(i2), d2 + 4);
      d2 += 4 + t3;
    } else {
      h2.setUint32(d2, 0);
      d2 += 4;
    }
    if (void 0 === t2.data) {
      h2.setUint32(d2, 0);
      d2 += 4;
    } else {
      h2.setUint32(d2, t2.data.length);
      l2.set(t2.data, d2 + 4);
      d2 += 4 + t2.data.length;
    }
    assert(d2 <= o2.byteLength, "FontInfo.write: Buffer overflow");
    return o2.transferToFixedLength(d2);
  }
}
class GlobalWorkerOptions {
  static #Fs = null;
  static #Rs = "";
  static get workerPort() {
    return this.#Fs;
  }
  static set workerPort(t2) {
    if (!("undefined" != typeof Worker && t2 instanceof Worker) && null !== t2) throw new Error("Invalid `workerPort` type.");
    this.#Fs = t2;
  }
  static get workerSrc() {
    return this.#Rs;
  }
  static set workerSrc(t2) {
    if ("string" != typeof t2) throw new Error("Invalid `workerSrc` type.");
    this.#Rs = t2;
  }
}
class Metadata {
  #Ls;
  #Bs;
  constructor({ parsedData: t2, rawData: e2 }) {
    this.#Ls = t2;
    this.#Bs = e2;
  }
  getRaw() {
    return this.#Bs;
  }
  get(t2) {
    return this.#Ls.get(t2) ?? null;
  }
  [Symbol.iterator]() {
    return this.#Ls.entries();
  }
}
const kt = /* @__PURE__ */ Symbol("INTERNAL");
class OptionalContentGroup {
  #Os = false;
  #Ns = false;
  #Us = false;
  #Hs = true;
  constructor(t2, { name: e2, intent: i2, usage: s2, rbGroups: a2 }) {
    this.#Os = !!(t2 & n);
    this.#Ns = !!(t2 & r);
    this.name = e2;
    this.intent = i2;
    this.usage = s2;
    this.rbGroups = a2;
  }
  get visible() {
    if (this.#Us) return this.#Hs;
    if (!this.#Hs) return false;
    const { print: t2, view: e2 } = this.usage;
    return this.#Os ? "OFF" !== e2?.viewState : !this.#Ns || "OFF" !== t2?.printState;
  }
  _setVisible(t2, e2, i2 = false) {
    t2 !== kt && unreachable("Internal method `_setVisible` called.");
    this.#Us = i2;
    this.#Hs = e2;
  }
}
class OptionalContentConfig {
  #zs = null;
  #Gs = /* @__PURE__ */ new Map();
  #Ws = null;
  #Vs = null;
  constructor(t2, e2 = n) {
    this.renderingIntent = e2;
    this.name = null;
    this.creator = null;
    if (null !== t2) {
      this.name = t2.name;
      this.creator = t2.creator;
      this.#Vs = t2.order;
      for (const i2 of t2.groups) this.#Gs.set(i2.id, new OptionalContentGroup(e2, i2));
      if ("OFF" === t2.baseState) for (const t3 of this.#Gs.values()) t3._setVisible(kt, false);
      for (const e3 of t2.on) this.#Gs.get(e3)._setVisible(kt, true);
      for (const e3 of t2.off) this.#Gs.get(e3)._setVisible(kt, false);
      this.#Ws = this.getHash();
    }
  }
  #$s(t2) {
    const e2 = t2.length;
    if (e2 < 2) return true;
    const i2 = t2[0];
    for (let s2 = 1; s2 < e2; s2++) {
      const e3 = t2[s2];
      let n2;
      if (Array.isArray(e3)) n2 = this.#$s(e3);
      else {
        if (!this.#Gs.has(e3)) {
          warn(`Optional content group not found: ${e3}`);
          return true;
        }
        n2 = this.#Gs.get(e3).visible;
      }
      switch (i2) {
        case "And":
          if (!n2) return false;
          break;
        case "Or":
          if (n2) return true;
          break;
        case "Not":
          return !n2;
        default:
          return true;
      }
    }
    return "And" === i2;
  }
  isVisible(t2) {
    if (0 === this.#Gs.size) return true;
    if (!t2) {
      info("Optional content group not defined.");
      return true;
    }
    if ("OCG" === t2.type) {
      if (!this.#Gs.has(t2.id)) {
        warn(`Optional content group not found: ${t2.id}`);
        return true;
      }
      return this.#Gs.get(t2.id).visible;
    }
    if ("OCMD" === t2.type) {
      if (t2.expression) return this.#$s(t2.expression);
      if (!t2.policy || "AnyOn" === t2.policy) {
        for (const e2 of t2.ids) {
          if (!this.#Gs.has(e2)) {
            warn(`Optional content group not found: ${e2}`);
            return true;
          }
          if (this.#Gs.get(e2).visible) return true;
        }
        return false;
      }
      if ("AllOn" === t2.policy) {
        for (const e2 of t2.ids) {
          if (!this.#Gs.has(e2)) {
            warn(`Optional content group not found: ${e2}`);
            return true;
          }
          if (!this.#Gs.get(e2).visible) return false;
        }
        return true;
      }
      if ("AnyOff" === t2.policy) {
        for (const e2 of t2.ids) {
          if (!this.#Gs.has(e2)) {
            warn(`Optional content group not found: ${e2}`);
            return true;
          }
          if (!this.#Gs.get(e2).visible) return true;
        }
        return false;
      }
      if ("AllOff" === t2.policy) {
        for (const e2 of t2.ids) {
          if (!this.#Gs.has(e2)) {
            warn(`Optional content group not found: ${e2}`);
            return true;
          }
          if (this.#Gs.get(e2).visible) return false;
        }
        return true;
      }
      warn(`Unknown optional content policy ${t2.policy}.`);
      return true;
    }
    warn(`Unknown group type ${t2.type}.`);
    return true;
  }
  setVisibility(t2, e2 = true, i2 = true) {
    const s2 = this.#Gs.get(t2);
    if (s2) {
      if (i2 && e2 && s2.rbGroups.length) for (const e3 of s2.rbGroups) for (const i3 of e3) i3 !== t2 && this.#Gs.get(i3)?._setVisible(kt, false, true);
      s2._setVisible(kt, !!e2, true);
      this.#zs = null;
    } else warn(`Optional content group not found: ${t2}`);
  }
  setOCGState({ state: t2, preserveRB: e2 }) {
    let i2;
    for (const s2 of t2) {
      switch (s2) {
        case "ON":
        case "OFF":
        case "Toggle":
          i2 = s2;
          continue;
      }
      const t3 = this.#Gs.get(s2);
      if (t3) switch (i2) {
        case "ON":
          this.setVisibility(s2, true, e2);
          break;
        case "OFF":
          this.setVisibility(s2, false, e2);
          break;
        case "Toggle":
          this.setVisibility(s2, !t3.visible, e2);
      }
    }
    this.#zs = null;
  }
  get hasInitialVisibility() {
    return null === this.#Ws || this.getHash() === this.#Ws;
  }
  getOrder() {
    return this.#Gs.size ? this.#Vs ? this.#Vs.slice() : [...this.#Gs.keys()] : null;
  }
  getGroup(t2) {
    return this.#Gs.get(t2) || null;
  }
  getHash() {
    if (null !== this.#zs) return this.#zs;
    const t2 = new MurmurHash3_64();
    for (const [e2, i2] of this.#Gs) t2.update(`${e2}:${i2.visible}`);
    return this.#zs = t2.hexdigest();
  }
  [Symbol.iterator]() {
    return this.#Gs.entries();
  }
}
class PDFDataTransportStream {
  constructor(t2, { disableRange: e2 = false, disableStream: i2 = false }) {
    assert(t2, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const { length: s2, initialData: n2, progressiveDone: r2, contentDispositionFilename: a2 } = t2;
    this._queuedChunks = [];
    this._progressiveDone = r2;
    this._contentDispositionFilename = a2;
    if (n2?.length > 0) {
      const t3 = n2 instanceof Uint8Array && n2.byteLength === n2.buffer.byteLength ? n2.buffer : new Uint8Array(n2).buffer;
      this._queuedChunks.push(t3);
    }
    this._pdfDataRangeTransport = t2;
    this._isStreamingSupported = !i2;
    this._isRangeSupported = !e2;
    this._contentLength = s2;
    this._fullRequestReader = null;
    this._rangeReaders = [];
    t2.addRangeListener((t3, e3) => {
      this._onReceiveData({ begin: t3, chunk: e3 });
    });
    t2.addProgressListener((t3, e3) => {
      this._onProgress({ loaded: t3, total: e3 });
    });
    t2.addProgressiveReadListener((t3) => {
      this._onReceiveData({ chunk: t3 });
    });
    t2.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    });
    t2.transportReady();
  }
  _onReceiveData({ begin: t2, chunk: e2 }) {
    const i2 = e2 instanceof Uint8Array && e2.byteLength === e2.buffer.byteLength ? e2.buffer : new Uint8Array(e2).buffer;
    if (void 0 === t2) this._fullRequestReader ? this._fullRequestReader._enqueue(i2) : this._queuedChunks.push(i2);
    else {
      assert(this._rangeReaders.some(function(e3) {
        if (e3._begin !== t2) return false;
        e3._enqueue(i2);
        return true;
      }), "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  _onProgress(t2) {
    void 0 === t2.total ? this._rangeReaders[0]?.onProgress?.({ loaded: t2.loaded }) : this._fullRequestReader?.onProgress?.({ loaded: t2.loaded, total: t2.total });
  }
  _onProgressiveDone() {
    this._fullRequestReader?.progressiveDone();
    this._progressiveDone = true;
  }
  _removeRangeReader(t2) {
    const e2 = this._rangeReaders.indexOf(t2);
    e2 >= 0 && this._rangeReaders.splice(e2, 1);
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t2 = this._queuedChunks;
    this._queuedChunks = null;
    return new PDFDataTransportStreamReader(this, t2, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t2, e2) {
    if (e2 <= this._progressiveDataLength) return null;
    const i2 = new PDFDataTransportStreamRangeReader(this, t2, e2);
    this._pdfDataRangeTransport.requestDataRange(t2, e2);
    this._rangeReaders.push(i2);
    return i2;
  }
  cancelAllRequests(t2) {
    this._fullRequestReader?.cancel(t2);
    for (const e2 of this._rangeReaders.slice(0)) e2.cancel(t2);
    this._pdfDataRangeTransport.abort();
  }
}
class PDFDataTransportStreamReader {
  constructor(t2, e2, i2 = false, s2 = null) {
    this._stream = t2;
    this._done = i2 || false;
    this._filename = isPdfFile(s2) ? s2 : null;
    this._queuedChunks = e2 || [];
    this._loaded = 0;
    for (const t3 of this._queuedChunks) this._loaded += t3.byteLength;
    this._requests = [];
    this._headersReady = Promise.resolve();
    t2._fullRequestReader = this;
    this.onProgress = null;
  }
  _enqueue(t2) {
    if (!this._done) {
      if (this._requests.length > 0) {
        this._requests.shift().resolve({ value: t2, done: false });
      } else this._queuedChunks.push(t2);
      this._loaded += t2.byteLength;
    }
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0) {
      return { value: this._queuedChunks.shift(), done: false };
    }
    if (this._done) return { value: void 0, done: true };
    const t2 = Promise.withResolvers();
    this._requests.push(t2);
    return t2.promise;
  }
  cancel(t2) {
    this._done = true;
    for (const t3 of this._requests) t3.resolve({ value: void 0, done: true });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = true);
  }
}
class PDFDataTransportStreamRangeReader {
  constructor(t2, e2, i2) {
    this._stream = t2;
    this._begin = e2;
    this._end = i2;
    this._queuedChunk = null;
    this._requests = [];
    this._done = false;
    this.onProgress = null;
  }
  _enqueue(t2) {
    if (!this._done) {
      if (0 === this._requests.length) this._queuedChunk = t2;
      else {
        this._requests.shift().resolve({ value: t2, done: false });
        for (const t3 of this._requests) t3.resolve({ value: void 0, done: true });
        this._requests.length = 0;
      }
      this._done = true;
      this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return false;
  }
  async read() {
    if (this._queuedChunk) {
      const t3 = this._queuedChunk;
      this._queuedChunk = null;
      return { value: t3, done: false };
    }
    if (this._done) return { value: void 0, done: true };
    const t2 = Promise.withResolvers();
    this._requests.push(t2);
    return t2.promise;
  }
  cancel(t2) {
    this._done = true;
    for (const t3 of this._requests) t3.resolve({ value: void 0, done: true });
    this._requests.length = 0;
    this._stream._removeRangeReader(this);
  }
}
function createHeaders(t2, e2) {
  const i2 = new Headers();
  if (!t2 || !e2 || "object" != typeof e2) return i2;
  for (const t3 in e2) {
    const s2 = e2[t3];
    void 0 !== s2 && i2.append(t3, s2);
  }
  return i2;
}
function getResponseOrigin(t2) {
  return URL.parse(t2)?.origin ?? null;
}
function validateRangeRequestCapabilities({ responseHeaders: t2, isHttp: e2, rangeChunkSize: i2, disableRange: s2 }) {
  const n2 = { allowRangeRequests: false, suggestedLength: void 0 }, r2 = parseInt(t2.get("Content-Length"), 10);
  if (!Number.isInteger(r2)) return n2;
  n2.suggestedLength = r2;
  if (r2 <= 2 * i2) return n2;
  if (s2 || !e2) return n2;
  if ("bytes" !== t2.get("Accept-Ranges")) return n2;
  if ("identity" !== (t2.get("Content-Encoding") || "identity")) return n2;
  n2.allowRangeRequests = true;
  return n2;
}
function extractFilenameFromHeader(t2) {
  const e2 = t2.get("Content-Disposition");
  if (e2) {
    let t3 = (function getFilenameFromContentDispositionHeader(t4) {
      let e3 = true, i2 = toParamRegExp("filename\\*", "i").exec(t4);
      if (i2) {
        i2 = i2[1];
        let t5 = rfc2616unquote(i2);
        t5 = unescape(t5);
        t5 = rfc5987decode(t5);
        t5 = rfc2047decode(t5);
        return fixupEncoding(t5);
      }
      i2 = (function rfc2231getparam(t5) {
        const e4 = [];
        let i3;
        const s2 = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
        for (; null !== (i3 = s2.exec(t5)); ) {
          let [, t6, s3, n3] = i3;
          t6 = parseInt(t6, 10);
          if (t6 in e4) {
            if (0 === t6) break;
          } else e4[t6] = [s3, n3];
        }
        const n2 = [];
        for (let t6 = 0; t6 < e4.length && t6 in e4; ++t6) {
          let [i4, s3] = e4[t6];
          s3 = rfc2616unquote(s3);
          if (i4) {
            s3 = unescape(s3);
            0 === t6 && (s3 = rfc5987decode(s3));
          }
          n2.push(s3);
        }
        return n2.join("");
      })(t4);
      if (i2) return fixupEncoding(rfc2047decode(i2));
      i2 = toParamRegExp("filename", "i").exec(t4);
      if (i2) {
        i2 = i2[1];
        let t5 = rfc2616unquote(i2);
        t5 = rfc2047decode(t5);
        return fixupEncoding(t5);
      }
      function toParamRegExp(t5, e4) {
        return new RegExp("(?:^|;)\\s*" + t5 + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', e4);
      }
      function textdecode(t5, i3) {
        if (t5) {
          if (!/^[\x00-\xFF]+$/.test(i3)) return i3;
          try {
            const s2 = new TextDecoder(t5, { fatal: true }), n2 = stringToBytes(i3);
            i3 = s2.decode(n2);
            e3 = false;
          } catch {
          }
        }
        return i3;
      }
      function fixupEncoding(t5) {
        if (e3 && /[\x80-\xff]/.test(t5)) {
          t5 = textdecode("utf-8", t5);
          e3 && (t5 = textdecode("iso-8859-1", t5));
        }
        return t5;
      }
      function rfc2616unquote(t5) {
        if (t5.startsWith('"')) {
          const e4 = t5.slice(1).split('\\"');
          for (let t6 = 0; t6 < e4.length; ++t6) {
            const i3 = e4[t6].indexOf('"');
            if (-1 !== i3) {
              e4[t6] = e4[t6].slice(0, i3);
              e4.length = t6 + 1;
            }
            e4[t6] = e4[t6].replaceAll(/\\(.)/g, "$1");
          }
          t5 = e4.join('"');
        }
        return t5;
      }
      function rfc5987decode(t5) {
        const e4 = t5.indexOf("'");
        return -1 === e4 ? t5 : textdecode(t5.slice(0, e4), t5.slice(e4 + 1).replace(/^[^']*'/, ""));
      }
      function rfc2047decode(t5) {
        return !t5.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t5) ? t5 : t5.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(t6, e4, i3, s2) {
          if ("q" === i3 || "Q" === i3) return textdecode(e4, s2 = (s2 = s2.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function(t7, e5) {
            return String.fromCharCode(parseInt(e5, 16));
          }));
          try {
            s2 = atob(s2);
          } catch {
          }
          return textdecode(e4, s2);
        });
      }
      return "";
    })(e2);
    if (t3.includes("%")) try {
      t3 = decodeURIComponent(t3);
    } catch {
    }
    if (isPdfFile(t3)) return t3;
  }
  return null;
}
function createResponseError(t2, e2) {
  return new ResponseException(`Unexpected server response (${t2}) while retrieving PDF "${e2}".`, t2, 404 === t2 || 0 === t2 && e2.startsWith("file:"));
}
function validateResponseStatus(t2) {
  return 200 === t2 || 206 === t2;
}
function createFetchOptions(t2, e2, i2) {
  return { method: "GET", headers: t2, signal: i2.signal, mode: "cors", credentials: e2 ? "include" : "same-origin", redirect: "follow" };
}
function getArrayBuffer(t2) {
  if (t2 instanceof Uint8Array) return t2.buffer;
  if (t2 instanceof ArrayBuffer) return t2;
  warn(`getArrayBuffer - unexpected data format: ${t2}`);
  return new Uint8Array(t2).buffer;
}
class PDFFetchStream {
  _responseOrigin = null;
  constructor(t2) {
    this.source = t2;
    this.isHttp = /^https?:/i.test(t2.url);
    this.headers = createHeaders(this.isHttp, t2.httpHeaders);
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
    this._fullRequestReader = new PDFFetchStreamReader(this);
    return this._fullRequestReader;
  }
  getRangeReader(t2, e2) {
    if (e2 <= this._progressiveDataLength) return null;
    const i2 = new PDFFetchStreamRangeReader(this, t2, e2);
    this._rangeRequestReaders.push(i2);
    return i2;
  }
  cancelAllRequests(t2) {
    this._fullRequestReader?.cancel(t2);
    for (const e2 of this._rangeRequestReaders.slice(0)) e2.cancel(t2);
  }
}
class PDFFetchStreamReader {
  constructor(t2) {
    this._stream = t2;
    this._reader = null;
    this._loaded = 0;
    this._filename = null;
    const e2 = t2.source;
    this._withCredentials = e2.withCredentials || false;
    this._contentLength = e2.length;
    this._headersCapability = Promise.withResolvers();
    this._disableRange = e2.disableRange || false;
    this._rangeChunkSize = e2.rangeChunkSize;
    this._rangeChunkSize || this._disableRange || (this._disableRange = true);
    this._abortController = new AbortController();
    this._isStreamingSupported = !e2.disableStream;
    this._isRangeSupported = !e2.disableRange;
    const i2 = new Headers(t2.headers), s2 = e2.url;
    fetch(s2, createFetchOptions(i2, this._withCredentials, this._abortController)).then((e3) => {
      t2._responseOrigin = getResponseOrigin(e3.url);
      if (!validateResponseStatus(e3.status)) throw createResponseError(e3.status, s2);
      this._reader = e3.body.getReader();
      this._headersCapability.resolve();
      const i3 = e3.headers, { allowRangeRequests: n2, suggestedLength: r2 } = validateRangeRequestCapabilities({ responseHeaders: i3, isHttp: t2.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
      this._isRangeSupported = n2;
      this._contentLength = r2 || this._contentLength;
      this._filename = extractFilenameFromHeader(i3);
      !this._isStreamingSupported && this._isRangeSupported && this.cancel(new AbortException("Streaming is disabled."));
    }).catch(this._headersCapability.reject);
    this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._headersCapability.promise;
    const { value: t2, done: e2 } = await this._reader.read();
    if (e2) return { value: t2, done: e2 };
    this._loaded += t2.byteLength;
    this.onProgress?.({ loaded: this._loaded, total: this._contentLength });
    return { value: getArrayBuffer(t2), done: false };
  }
  cancel(t2) {
    this._reader?.cancel(t2);
    this._abortController.abort();
  }
}
class PDFFetchStreamRangeReader {
  constructor(t2, e2, i2) {
    this._stream = t2;
    this._reader = null;
    this._loaded = 0;
    const s2 = t2.source;
    this._withCredentials = s2.withCredentials || false;
    this._readCapability = Promise.withResolvers();
    this._isStreamingSupported = !s2.disableStream;
    this._abortController = new AbortController();
    const n2 = new Headers(t2.headers);
    n2.append("Range", `bytes=${e2}-${i2 - 1}`);
    const r2 = s2.url;
    fetch(r2, createFetchOptions(n2, this._withCredentials, this._abortController)).then((e3) => {
      const i3 = getResponseOrigin(e3.url);
      if (i3 !== t2._responseOrigin) throw new Error(`Expected range response-origin "${i3}" to match "${t2._responseOrigin}".`);
      if (!validateResponseStatus(e3.status)) throw createResponseError(e3.status, r2);
      this._readCapability.resolve();
      this._reader = e3.body.getReader();
    }).catch(this._readCapability.reject);
    this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    const { value: t2, done: e2 } = await this._reader.read();
    if (e2) return { value: t2, done: e2 };
    this._loaded += t2.byteLength;
    this.onProgress?.({ loaded: this._loaded });
    return { value: getArrayBuffer(t2), done: false };
  }
  cancel(t2) {
    this._reader?.cancel(t2);
    this._abortController.abort();
  }
}
class NetworkManager {
  _responseOrigin = null;
  constructor({ url: t2, httpHeaders: e2, withCredentials: i2 }) {
    this.url = t2;
    this.isHttp = /^https?:/i.test(t2);
    this.headers = createHeaders(this.isHttp, e2);
    this.withCredentials = i2 || false;
    this.currXhrId = 0;
    this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  request(t2) {
    const e2 = new XMLHttpRequest(), i2 = this.currXhrId++, s2 = this.pendingRequests[i2] = { xhr: e2 };
    e2.open("GET", this.url);
    e2.withCredentials = this.withCredentials;
    for (const [t3, i3] of this.headers) e2.setRequestHeader(t3, i3);
    if (this.isHttp && "begin" in t2 && "end" in t2) {
      e2.setRequestHeader("Range", `bytes=${t2.begin}-${t2.end - 1}`);
      s2.expectedStatus = 206;
    } else s2.expectedStatus = 200;
    e2.responseType = "arraybuffer";
    assert(t2.onError, "Expected `onError` callback to be provided.");
    e2.onerror = () => {
      t2.onError(e2.status);
    };
    e2.onreadystatechange = this.onStateChange.bind(this, i2);
    e2.onprogress = this.onProgress.bind(this, i2);
    s2.onHeadersReceived = t2.onHeadersReceived;
    s2.onDone = t2.onDone;
    s2.onError = t2.onError;
    s2.onProgress = t2.onProgress;
    e2.send(null);
    return i2;
  }
  onProgress(t2, e2) {
    const i2 = this.pendingRequests[t2];
    i2 && i2.onProgress?.(e2);
  }
  onStateChange(t2, e2) {
    const i2 = this.pendingRequests[t2];
    if (!i2) return;
    const s2 = i2.xhr;
    if (s2.readyState >= 2 && i2.onHeadersReceived) {
      i2.onHeadersReceived();
      delete i2.onHeadersReceived;
    }
    if (4 !== s2.readyState) return;
    if (!(t2 in this.pendingRequests)) return;
    delete this.pendingRequests[t2];
    if (0 === s2.status && this.isHttp) {
      i2.onError(s2.status);
      return;
    }
    const n2 = s2.status || 200;
    if (!(200 === n2 && 206 === i2.expectedStatus) && n2 !== i2.expectedStatus) {
      i2.onError(s2.status);
      return;
    }
    const r2 = (function network_getArrayBuffer(t3) {
      const e3 = t3.response;
      return "string" != typeof e3 ? e3 : stringToBytes(e3).buffer;
    })(s2);
    if (206 === n2) {
      const t3 = s2.getResponseHeader("Content-Range"), e3 = /bytes (\d+)-(\d+)\/(\d+)/.exec(t3);
      if (e3) i2.onDone({ begin: parseInt(e3[1], 10), chunk: r2 });
      else {
        warn('Missing or invalid "Content-Range" header.');
        i2.onError(0);
      }
    } else r2 ? i2.onDone({ begin: 0, chunk: r2 }) : i2.onError(s2.status);
  }
  getRequestXhr(t2) {
    return this.pendingRequests[t2].xhr;
  }
  isPendingRequest(t2) {
    return t2 in this.pendingRequests;
  }
  abortRequest(t2) {
    const e2 = this.pendingRequests[t2].xhr;
    delete this.pendingRequests[t2];
    e2.abort();
  }
}
class PDFNetworkStream {
  constructor(t2) {
    this._source = t2;
    this._manager = new NetworkManager(t2);
    this._rangeChunkSize = t2.rangeChunkSize;
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t2) {
    const e2 = this._rangeRequestReaders.indexOf(t2);
    e2 >= 0 && this._rangeRequestReaders.splice(e2, 1);
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
    this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
    return this._fullRequestReader;
  }
  getRangeReader(t2, e2) {
    const i2 = new PDFNetworkStreamRangeRequestReader(this._manager, t2, e2);
    i2.onClosed = this._onRangeRequestReaderClosed.bind(this);
    this._rangeRequestReaders.push(i2);
    return i2;
  }
  cancelAllRequests(t2) {
    this._fullRequestReader?.cancel(t2);
    for (const e2 of this._rangeRequestReaders.slice(0)) e2.cancel(t2);
  }
}
class PDFNetworkStreamFullRequestReader {
  constructor(t2, e2) {
    this._manager = t2;
    this._url = e2.url;
    this._fullRequestId = t2.request({ onHeadersReceived: this._onHeadersReceived.bind(this), onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) });
    this._headersCapability = Promise.withResolvers();
    this._disableRange = e2.disableRange || false;
    this._contentLength = e2.length;
    this._rangeChunkSize = e2.rangeChunkSize;
    this._rangeChunkSize || this._disableRange || (this._disableRange = true);
    this._isStreamingSupported = false;
    this._isRangeSupported = false;
    this._cachedChunks = [];
    this._requests = [];
    this._done = false;
    this._storedError = void 0;
    this._filename = null;
    this.onProgress = null;
  }
  _onHeadersReceived() {
    const t2 = this._fullRequestId, e2 = this._manager.getRequestXhr(t2);
    this._manager._responseOrigin = getResponseOrigin(e2.responseURL);
    const i2 = e2.getAllResponseHeaders(), s2 = new Headers(i2 ? i2.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((t3) => {
      const [e3, ...i3] = t3.split(": ");
      return [e3, i3.join(": ")];
    }) : []), { allowRangeRequests: n2, suggestedLength: r2 } = validateRangeRequestCapabilities({ responseHeaders: s2, isHttp: this._manager.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
    n2 && (this._isRangeSupported = true);
    this._contentLength = r2 || this._contentLength;
    this._filename = extractFilenameFromHeader(s2);
    this._isRangeSupported && this._manager.abortRequest(t2);
    this._headersCapability.resolve();
  }
  _onDone(t2) {
    if (t2) if (this._requests.length > 0) {
      this._requests.shift().resolve({ value: t2.chunk, done: false });
    } else this._cachedChunks.push(t2.chunk);
    this._done = true;
    if (!(this._cachedChunks.length > 0)) {
      for (const t3 of this._requests) t3.resolve({ value: void 0, done: true });
      this._requests.length = 0;
    }
  }
  _onError(t2) {
    this._storedError = createResponseError(t2, this._url);
    this._headersCapability.reject(this._storedError);
    for (const t3 of this._requests) t3.reject(this._storedError);
    this._requests.length = 0;
    this._cachedChunks.length = 0;
  }
  _onProgress(t2) {
    this.onProgress?.({ loaded: t2.loaded, total: t2.lengthComputable ? t2.total : this._contentLength });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    await this._headersCapability.promise;
    if (this._storedError) throw this._storedError;
    if (this._cachedChunks.length > 0) {
      return { value: this._cachedChunks.shift(), done: false };
    }
    if (this._done) return { value: void 0, done: true };
    const t2 = Promise.withResolvers();
    this._requests.push(t2);
    return t2.promise;
  }
  cancel(t2) {
    this._done = true;
    this._headersCapability.reject(t2);
    for (const t3 of this._requests) t3.resolve({ value: void 0, done: true });
    this._requests.length = 0;
    this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId);
    this._fullRequestReader = null;
  }
}
class PDFNetworkStreamRangeRequestReader {
  constructor(t2, e2, i2) {
    this._manager = t2;
    this._url = t2.url;
    this._requestId = t2.request({ begin: e2, end: i2, onHeadersReceived: this._onHeadersReceived.bind(this), onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) });
    this._requests = [];
    this._queuedChunk = null;
    this._done = false;
    this._storedError = void 0;
    this.onProgress = null;
    this.onClosed = null;
  }
  _onHeadersReceived() {
    const t2 = getResponseOrigin(this._manager.getRequestXhr(this._requestId)?.responseURL);
    if (t2 !== this._manager._responseOrigin) {
      this._storedError = new Error(`Expected range response-origin "${t2}" to match "${this._manager._responseOrigin}".`);
      this._onError(0);
    }
  }
  _close() {
    this.onClosed?.(this);
  }
  _onDone(t2) {
    const e2 = t2.chunk;
    if (this._requests.length > 0) {
      this._requests.shift().resolve({ value: e2, done: false });
    } else this._queuedChunk = e2;
    this._done = true;
    for (const t3 of this._requests) t3.resolve({ value: void 0, done: true });
    this._requests.length = 0;
    this._close();
  }
  _onError(t2) {
    this._storedError ??= createResponseError(t2, this._url);
    for (const t3 of this._requests) t3.reject(this._storedError);
    this._requests.length = 0;
    this._queuedChunk = null;
  }
  _onProgress(t2) {
    this.isStreamingSupported || this.onProgress?.({ loaded: t2.loaded });
  }
  get isStreamingSupported() {
    return false;
  }
  async read() {
    if (this._storedError) throw this._storedError;
    if (null !== this._queuedChunk) {
      const t3 = this._queuedChunk;
      this._queuedChunk = null;
      return { value: t3, done: false };
    }
    if (this._done) return { value: void 0, done: true };
    const t2 = Promise.withResolvers();
    this._requests.push(t2);
    return t2.promise;
  }
  cancel(t2) {
    this._done = true;
    for (const t3 of this._requests) t3.resolve({ value: void 0, done: true });
    this._requests.length = 0;
    this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId);
    this._close();
  }
}
const Pt = /^[a-z][a-z0-9\-+.]+:/i;
class PDFNodeStream {
  constructor(t2) {
    this.source = t2;
    this.url = (function parseUrlOrPath(t3) {
      if (Pt.test(t3)) return new URL(t3);
      const e2 = process.getBuiltinModule("url");
      return new URL(e2.pathToFileURL(t3));
    })(t2.url);
    assert("file:" === this.url.protocol, "PDFNodeStream only supports file:// URLs.");
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
    this._fullRequestReader = new PDFNodeStreamFsFullReader(this);
    return this._fullRequestReader;
  }
  getRangeReader(t2, e2) {
    if (e2 <= this._progressiveDataLength) return null;
    const i2 = new PDFNodeStreamFsRangeReader(this, t2, e2);
    this._rangeRequestReaders.push(i2);
    return i2;
  }
  cancelAllRequests(t2) {
    this._fullRequestReader?.cancel(t2);
    for (const e2 of this._rangeRequestReaders.slice(0)) e2.cancel(t2);
  }
}
class PDFNodeStreamFsFullReader {
  constructor(t2) {
    this._url = t2.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    const e2 = t2.source;
    this._contentLength = e2.length;
    this._loaded = 0;
    this._filename = null;
    this._disableRange = e2.disableRange || false;
    this._rangeChunkSize = e2.rangeChunkSize;
    this._rangeChunkSize || this._disableRange || (this._disableRange = true);
    this._isStreamingSupported = !e2.disableStream;
    this._isRangeSupported = !e2.disableRange;
    this._readableStream = null;
    this._readCapability = Promise.withResolvers();
    this._headersCapability = Promise.withResolvers();
    const i2 = process.getBuiltinModule("fs");
    i2.promises.lstat(this._url).then((t3) => {
      this._contentLength = t3.size;
      this._setReadableStream(i2.createReadStream(this._url));
      this._headersCapability.resolve();
    }, (t3) => {
      "ENOENT" === t3.code && (t3 = createResponseError(0, this._url.href));
      this._storedError = t3;
      this._headersCapability.reject(t3);
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    if (this._done) return { value: void 0, done: true };
    if (this._storedError) throw this._storedError;
    const t2 = this._readableStream.read();
    if (null === t2) {
      this._readCapability = Promise.withResolvers();
      return this.read();
    }
    this._loaded += t2.length;
    this.onProgress?.({ loaded: this._loaded, total: this._contentLength });
    return { value: new Uint8Array(t2).buffer, done: false };
  }
  cancel(t2) {
    this._readableStream ? this._readableStream.destroy(t2) : this._error(t2);
  }
  _error(t2) {
    this._storedError = t2;
    this._readCapability.resolve();
  }
  _setReadableStream(t2) {
    this._readableStream = t2;
    t2.on("readable", () => {
      this._readCapability.resolve();
    });
    t2.on("end", () => {
      t2.destroy();
      this._done = true;
      this._readCapability.resolve();
    });
    t2.on("error", (t3) => {
      this._error(t3);
    });
    !this._isStreamingSupported && this._isRangeSupported && this._error(new AbortException("streaming is disabled"));
    this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class PDFNodeStreamFsRangeReader {
  constructor(t2, e2, i2) {
    this._url = t2.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    this._loaded = 0;
    this._readableStream = null;
    this._readCapability = Promise.withResolvers();
    const s2 = t2.source;
    this._isStreamingSupported = !s2.disableStream;
    const n2 = process.getBuiltinModule("fs");
    this._setReadableStream(n2.createReadStream(this._url, { start: e2, end: i2 - 1 }));
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    if (this._done) return { value: void 0, done: true };
    if (this._storedError) throw this._storedError;
    const t2 = this._readableStream.read();
    if (null === t2) {
      this._readCapability = Promise.withResolvers();
      return this.read();
    }
    this._loaded += t2.length;
    this.onProgress?.({ loaded: this._loaded });
    return { value: new Uint8Array(t2).buffer, done: false };
  }
  cancel(t2) {
    this._readableStream ? this._readableStream.destroy(t2) : this._error(t2);
  }
  _error(t2) {
    this._storedError = t2;
    this._readCapability.resolve();
  }
  _setReadableStream(t2) {
    this._readableStream = t2;
    t2.on("readable", () => {
      this._readCapability.resolve();
    });
    t2.on("end", () => {
      t2.destroy();
      this._done = true;
      this._readCapability.resolve();
    });
    t2.on("error", (t3) => {
      this._error(t3);
    });
    this._storedError && this._readableStream.destroy(this._storedError);
  }
}
const It = /* @__PURE__ */ Symbol("INITIAL_DATA");
class PDFObjects {
  #js = /* @__PURE__ */ Object.create(null);
  #qs(t2) {
    return this.#js[t2] ||= { ...Promise.withResolvers(), data: It };
  }
  get(t2, e2 = null) {
    if (e2) {
      const i3 = this.#qs(t2);
      i3.promise.then(() => e2(i3.data));
      return null;
    }
    const i2 = this.#js[t2];
    if (!i2 || i2.data === It) throw new Error(`Requesting object that isn't resolved yet ${t2}.`);
    return i2.data;
  }
  has(t2) {
    const e2 = this.#js[t2];
    return !!e2 && e2.data !== It;
  }
  delete(t2) {
    const e2 = this.#js[t2];
    if (!e2 || e2.data === It) return false;
    delete this.#js[t2];
    return true;
  }
  resolve(t2, e2 = null) {
    const i2 = this.#qs(t2);
    i2.data = e2;
    i2.resolve();
  }
  clear() {
    for (const t2 in this.#js) {
      const { data: e2 } = this.#js[t2];
      e2?.bitmap?.close();
    }
    this.#js = /* @__PURE__ */ Object.create(null);
  }
  *[Symbol.iterator]() {
    for (const t2 in this.#js) {
      const { data: e2 } = this.#js[t2];
      e2 !== It && (yield [t2, e2]);
    }
  }
}
class TextLayer {
  #Xs = Promise.withResolvers();
  #vt = null;
  #Ks = false;
  #Ys = !!globalThis.FontInspector?.enabled;
  #Qs = null;
  #Js = null;
  #Zs = 0;
  #tn = 0;
  #en = null;
  #in = null;
  #sn = 0;
  #nn = 0;
  #rn = /* @__PURE__ */ Object.create(null);
  #an = [];
  #on = null;
  #ln = [];
  #hn = /* @__PURE__ */ new WeakMap();
  #dn = null;
  static #cn = /* @__PURE__ */ new Map();
  static #un = /* @__PURE__ */ new Map();
  static #pn = /* @__PURE__ */ new WeakMap();
  static #gn = null;
  static #mn = /* @__PURE__ */ new Set();
  constructor({ textContentSource: t2, container: e2, viewport: i2 }) {
    if (t2 instanceof ReadableStream) this.#on = t2;
    else {
      if ("object" != typeof t2) throw new Error('No "textContentSource" parameter specified.');
      this.#on = new ReadableStream({ start(e3) {
        e3.enqueue(t2);
        e3.close();
      } });
    }
    this.#vt = this.#in = e2;
    this.#nn = i2.scale * OutputScale.pixelRatio;
    this.#sn = i2.rotation;
    this.#Js = { div: null, properties: null, ctx: null };
    const { pageWidth: s2, pageHeight: n2, pageX: r2, pageY: a2 } = i2.rawDims;
    this.#dn = [1, 0, 0, -1, -r2, a2 + n2];
    this.#tn = s2;
    this.#Zs = n2;
    TextLayer.#fn();
    setLayerDimensions(e2, i2);
    this.#Xs.promise.finally(() => {
      TextLayer.#mn.delete(this);
      this.#Js = null;
      this.#rn = null;
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const { isWindows: t2, isFirefox: e2 } = util_FeatureTest.platform;
    return shadow(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", (t2 && e2 ? "Calibri, " : "") + "sans-serif"], ["monospace", (t2 && e2 ? "Lucida Console, " : "") + "monospace"]]));
  }
  render() {
    const pump = () => {
      this.#en.read().then(({ value: t2, done: e2 }) => {
        if (e2) this.#Xs.resolve();
        else {
          this.#Qs ??= t2.lang;
          Object.assign(this.#rn, t2.styles);
          this.#bn(t2.items);
          pump();
        }
      }, this.#Xs.reject);
    };
    this.#en = this.#on.getReader();
    TextLayer.#mn.add(this);
    pump();
    return this.#Xs.promise;
  }
  update({ viewport: t2, onBefore: e2 = null }) {
    const i2 = t2.scale * OutputScale.pixelRatio, s2 = t2.rotation;
    if (s2 !== this.#sn) {
      e2?.();
      this.#sn = s2;
      setLayerDimensions(this.#in, { rotation: s2 });
    }
    if (i2 !== this.#nn) {
      e2?.();
      this.#nn = i2;
      const t3 = { div: null, properties: null, ctx: TextLayer.#wn(this.#Qs) };
      for (const e3 of this.#ln) {
        t3.properties = this.#hn.get(e3);
        t3.div = e3;
        this.#yn(t3);
      }
    }
  }
  cancel() {
    const t2 = new AbortException("TextLayer task cancelled.");
    this.#en?.cancel(t2).catch(() => {
    });
    this.#en = null;
    this.#Xs.reject(t2);
  }
  get textDivs() {
    return this.#ln;
  }
  get textContentItemsStr() {
    return this.#an;
  }
  #bn(t2) {
    if (this.#Ks) return;
    this.#Js.ctx ??= TextLayer.#wn(this.#Qs);
    const e2 = this.#ln, i2 = this.#an;
    for (const s2 of t2) {
      if (e2.length > 1e5) {
        warn("Ignoring additional textDivs for performance reasons.");
        this.#Ks = true;
        return;
      }
      if (void 0 !== s2.str) {
        i2.push(s2.str);
        this.#An(s2);
      } else if ("beginMarkedContentProps" === s2.type || "beginMarkedContent" === s2.type) {
        const t3 = this.#vt;
        this.#vt = document.createElement("span");
        this.#vt.classList.add("markedContent");
        s2.id && this.#vt.setAttribute("id", `${s2.id}`);
        t3.append(this.#vt);
      } else "endMarkedContent" === s2.type && (this.#vt = this.#vt.parentNode);
    }
  }
  #An(t2) {
    const e2 = document.createElement("span"), i2 = { angle: 0, canvasWidth: 0, hasText: "" !== t2.str, hasEOL: t2.hasEOL, fontSize: 0 };
    this.#ln.push(e2);
    const s2 = Util.transform(this.#dn, t2.transform);
    let n2 = Math.atan2(s2[1], s2[0]);
    const r2 = this.#rn[t2.fontName];
    r2.vertical && (n2 += Math.PI / 2);
    let a2 = this.#Ys && r2.fontSubstitution || r2.fontFamily;
    a2 = TextLayer.fontFamilyMap.get(a2) || a2;
    const o2 = Math.hypot(s2[2], s2[3]), l2 = o2 * TextLayer.#vn(a2, r2, this.#Qs);
    let h2, d2;
    if (0 === n2) {
      h2 = s2[4];
      d2 = s2[5] - l2;
    } else {
      h2 = s2[4] + l2 * Math.sin(n2);
      d2 = s2[5] - l2 * Math.cos(n2);
    }
    const c2 = "calc(var(--total-scale-factor) *", u2 = e2.style;
    if (this.#vt === this.#in) {
      u2.left = `${(100 * h2 / this.#tn).toFixed(2)}%`;
      u2.top = `${(100 * d2 / this.#Zs).toFixed(2)}%`;
    } else {
      u2.left = `${c2}${h2.toFixed(2)}px)`;
      u2.top = `${c2}${d2.toFixed(2)}px)`;
    }
    u2.fontSize = `${c2}${(TextLayer.#gn * o2).toFixed(2)}px)`;
    u2.fontFamily = a2;
    i2.fontSize = o2;
    e2.setAttribute("role", "presentation");
    e2.textContent = t2.str;
    e2.dir = t2.dir;
    this.#Ys && (e2.dataset.fontName = r2.fontSubstitutionLoadedName || t2.fontName);
    0 !== n2 && (i2.angle = n2 * (180 / Math.PI));
    let p2 = false;
    if (t2.str.length > 1) p2 = true;
    else if (" " !== t2.str && t2.transform[0] !== t2.transform[3]) {
      const e3 = Math.abs(t2.transform[0]), i3 = Math.abs(t2.transform[3]);
      e3 !== i3 && Math.max(e3, i3) / Math.min(e3, i3) > 1.5 && (p2 = true);
    }
    p2 && (i2.canvasWidth = r2.vertical ? t2.height : t2.width);
    this.#hn.set(e2, i2);
    this.#Js.div = e2;
    this.#Js.properties = i2;
    this.#yn(this.#Js);
    i2.hasText && this.#vt.append(e2);
    if (i2.hasEOL) {
      const t3 = document.createElement("br");
      t3.setAttribute("role", "presentation");
      this.#vt.append(t3);
    }
  }
  #yn(t2) {
    const { div: e2, properties: i2, ctx: s2 } = t2, { style: n2 } = e2;
    let r2 = "";
    TextLayer.#gn > 1 && (r2 = `scale(${1 / TextLayer.#gn})`);
    if (0 !== i2.canvasWidth && i2.hasText) {
      const { fontFamily: t3 } = n2, { canvasWidth: a2, fontSize: o2 } = i2;
      TextLayer.#xn(s2, o2 * this.#nn, t3);
      const { width: l2 } = s2.measureText(e2.textContent);
      l2 > 0 && (r2 = `scaleX(${a2 * this.#nn / l2}) ${r2}`);
    }
    0 !== i2.angle && (r2 = `rotate(${i2.angle}deg) ${r2}`);
    r2.length > 0 && (n2.transform = r2);
  }
  static cleanup() {
    if (!(this.#mn.size > 0)) {
      this.#cn.clear();
      for (const { canvas: t2 } of this.#un.values()) t2.remove();
      this.#un.clear();
    }
  }
  static #wn(t2 = null) {
    let e2 = this.#un.get(t2 ||= "");
    if (!e2) {
      const i2 = document.createElement("canvas");
      i2.className = "hiddenCanvasElement";
      i2.lang = t2;
      document.body.append(i2);
      e2 = i2.getContext("2d", { alpha: false, willReadFrequently: true });
      this.#un.set(t2, e2);
      this.#pn.set(e2, { size: 0, family: "" });
    }
    return e2;
  }
  static #xn(t2, e2, i2) {
    const s2 = this.#pn.get(t2);
    if (e2 !== s2.size || i2 !== s2.family) {
      t2.font = `${e2}px ${i2}`;
      s2.size = e2;
      s2.family = i2;
    }
  }
  static #fn() {
    if (null !== this.#gn) return;
    const t2 = document.createElement("div");
    t2.style.opacity = 0;
    t2.style.lineHeight = 1;
    t2.style.fontSize = "1px";
    t2.style.position = "absolute";
    t2.textContent = "X";
    document.body.append(t2);
    this.#gn = t2.getBoundingClientRect().height;
    t2.remove();
  }
  static #vn(t2, e2, i2) {
    const s2 = this.#cn.get(t2);
    if (s2) return s2;
    const n2 = this.#wn(i2);
    n2.canvas.width = n2.canvas.height = 30;
    this.#xn(n2, 30, t2);
    const r2 = n2.measureText(""), a2 = r2.fontBoundingBoxAscent, o2 = Math.abs(r2.fontBoundingBoxDescent);
    n2.canvas.width = n2.canvas.height = 0;
    let l2 = 0.8;
    if (a2) l2 = a2 / (a2 + o2);
    else {
      util_FeatureTest.platform.isFirefox && warn("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering.");
      e2.ascent ? l2 = e2.ascent : e2.descent && (l2 = 1 + e2.descent);
    }
    this.#cn.set(t2, l2);
    return l2;
  }
}
function getDocument(e2 = {}) {
  "string" == typeof e2 || e2 instanceof URL ? e2 = { url: e2 } : (e2 instanceof ArrayBuffer || ArrayBuffer.isView(e2)) && (e2 = { data: e2 });
  const i2 = new PDFDocumentLoadingTask(), { docId: s2 } = i2, n2 = e2.url ? (function getUrlProp(e3) {
    if (e3 instanceof URL) return e3.href;
    if ("string" == typeof e3) {
      if (t) return e3;
      const i3 = URL.parse(e3, window.location);
      if (i3) return i3.href;
    }
    throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
  })(e2.url) : null, r2 = e2.data ? (function getDataProp(e3) {
    if (t && "undefined" != typeof Buffer && e3 instanceof Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
    if (e3 instanceof Uint8Array && e3.byteLength === e3.buffer.byteLength) return e3;
    if ("string" == typeof e3) return stringToBytes(e3);
    if (e3 instanceof ArrayBuffer || ArrayBuffer.isView(e3) || "object" == typeof e3 && !isNaN(e3?.length)) return new Uint8Array(e3);
    throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
  })(e2.data) : null, a2 = e2.httpHeaders || null, o2 = true === e2.withCredentials, l2 = e2.password ?? null, h2 = e2.range instanceof PDFDataRangeTransport ? e2.range : null, d2 = Number.isInteger(e2.rangeChunkSize) && e2.rangeChunkSize > 0 ? e2.rangeChunkSize : 65536;
  let c2 = e2.worker instanceof PDFWorker ? e2.worker : null;
  const u2 = e2.verbosity, p2 = "string" != typeof e2.docBaseUrl || isDataScheme(e2.docBaseUrl) ? null : e2.docBaseUrl, g2 = getFactoryUrlProp(e2.cMapUrl), m2 = false !== e2.cMapPacked, f2 = e2.CMapReaderFactory || (t ? NodeCMapReaderFactory : DOMCMapReaderFactory), b2 = getFactoryUrlProp(e2.iccUrl), w2 = getFactoryUrlProp(e2.standardFontDataUrl), y2 = e2.StandardFontDataFactory || (t ? NodeStandardFontDataFactory : DOMStandardFontDataFactory), A2 = getFactoryUrlProp(e2.wasmUrl), v2 = e2.WasmFactory || (t ? NodeWasmFactory : DOMWasmFactory), x2 = true !== e2.stopAtErrors, E2 = Number.isInteger(e2.maxImageSize) && e2.maxImageSize > -1 ? e2.maxImageSize : -1, C2 = false !== e2.isEvalSupported, _2 = "boolean" == typeof e2.isOffscreenCanvasSupported ? e2.isOffscreenCanvasSupported : !t, S2 = "boolean" == typeof e2.isImageDecoderSupported ? e2.isImageDecoderSupported : !t && (util_FeatureTest.platform.isFirefox || !globalThis.chrome), T2 = Number.isInteger(e2.canvasMaxAreaInBytes) ? e2.canvasMaxAreaInBytes : -1, D2 = "boolean" == typeof e2.disableFontFace ? e2.disableFontFace : t, M2 = true === e2.fontExtraProperties, k2 = true === e2.enableXfa, P2 = e2.ownerDocument || globalThis.document, I2 = true === e2.disableRange, F2 = true === e2.disableStream, R2 = true === e2.disableAutoFetch, L2 = true === e2.pdfBug, B2 = e2.CanvasFactory || (t ? NodeCanvasFactory : DOMCanvasFactory), O2 = e2.FilterFactory || (t ? NodeFilterFactory : DOMFilterFactory), N2 = true === e2.enableHWA, U2 = false !== e2.useWasm, H2 = h2 ? h2.length : e2.length ?? NaN, z2 = "boolean" == typeof e2.useSystemFonts ? e2.useSystemFonts : !t && !D2, G2 = "boolean" == typeof e2.useWorkerFetch ? e2.useWorkerFetch : !!(f2 === DOMCMapReaderFactory && y2 === DOMStandardFontDataFactory && v2 === DOMWasmFactory && g2 && w2 && A2 && isValidFetchUrl(g2, document.baseURI) && isValidFetchUrl(w2, document.baseURI) && isValidFetchUrl(A2, document.baseURI));
  setVerbosityLevel(u2);
  const W2 = { canvasFactory: new B2({ ownerDocument: P2, enableHWA: N2 }), filterFactory: new O2({ docId: s2, ownerDocument: P2 }), cMapReaderFactory: G2 ? null : new f2({ baseUrl: g2, isCompressed: m2 }), standardFontDataFactory: G2 ? null : new y2({ baseUrl: w2 }), wasmFactory: G2 ? null : new v2({ baseUrl: A2 }) };
  if (!c2) {
    c2 = PDFWorker.create({ verbosity: u2, port: GlobalWorkerOptions.workerPort });
    i2._worker = c2;
  }
  const V2 = { docId: s2, apiVersion: "5.4.296", data: r2, password: l2, disableAutoFetch: R2, rangeChunkSize: d2, length: H2, docBaseUrl: p2, enableXfa: k2, evaluatorOptions: { maxImageSize: E2, disableFontFace: D2, ignoreErrors: x2, isEvalSupported: C2, isOffscreenCanvasSupported: _2, isImageDecoderSupported: S2, canvasMaxAreaInBytes: T2, fontExtraProperties: M2, useSystemFonts: z2, useWasm: U2, useWorkerFetch: G2, cMapUrl: g2, iccUrl: b2, standardFontDataUrl: w2, wasmUrl: A2 } }, $2 = { ownerDocument: P2, pdfBug: L2, styleElement: null, loadingParams: { disableAutoFetch: R2, enableXfa: k2 } };
  c2.promise.then(function() {
    if (i2.destroyed) throw new Error("Loading aborted");
    if (c2.destroyed) throw new Error("Worker was destroyed");
    const e3 = c2.messageHandler.sendWithPromise("GetDocRequest", V2, r2 ? [r2.buffer] : null);
    let l3;
    if (h2) l3 = new PDFDataTransportStream(h2, { disableRange: I2, disableStream: F2 });
    else if (!r2) {
      if (!n2) throw new Error("getDocument - no `url` parameter provided.");
      const e4 = isValidFetchUrl(n2) ? PDFFetchStream : t ? PDFNodeStream : PDFNetworkStream;
      l3 = new e4({ url: n2, length: H2, httpHeaders: a2, withCredentials: o2, rangeChunkSize: d2, disableRange: I2, disableStream: F2 });
    }
    return e3.then((t2) => {
      if (i2.destroyed) throw new Error("Loading aborted");
      if (c2.destroyed) throw new Error("Worker was destroyed");
      const e4 = new MessageHandler(s2, t2, c2.port), n3 = new WorkerTransport(e4, i2, l3, $2, W2, N2);
      i2._transport = n3;
      e4.send("Ready", null);
    });
  }).catch(i2._capability.reject);
  return i2;
}
class PDFDocumentLoadingTask {
  static #Li = 0;
  _capability = Promise.withResolvers();
  _transport = null;
  _worker = null;
  docId = "d" + PDFDocumentLoadingTask.#Li++;
  destroyed = false;
  onPassword = null;
  onProgress = null;
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    this.destroyed = true;
    try {
      this._worker?.port && (this._worker._pendingDestroy = true);
      await this._transport?.destroy();
    } catch (t2) {
      this._worker?.port && delete this._worker._pendingDestroy;
      throw t2;
    }
    this._transport = null;
    this._worker?.destroy();
    this._worker = null;
  }
  async getData() {
    return this._transport.getData();
  }
}
class PDFDataRangeTransport {
  #Xs = Promise.withResolvers();
  #En = [];
  #Cn = [];
  #_n = [];
  #Sn = [];
  constructor(t2, e2, i2 = false, s2 = null) {
    this.length = t2;
    this.initialData = e2;
    this.progressiveDone = i2;
    this.contentDispositionFilename = s2;
  }
  addRangeListener(t2) {
    this.#Sn.push(t2);
  }
  addProgressListener(t2) {
    this.#_n.push(t2);
  }
  addProgressiveReadListener(t2) {
    this.#Cn.push(t2);
  }
  addProgressiveDoneListener(t2) {
    this.#En.push(t2);
  }
  onDataRange(t2, e2) {
    for (const i2 of this.#Sn) i2(t2, e2);
  }
  onDataProgress(t2, e2) {
    this.#Xs.promise.then(() => {
      for (const i2 of this.#_n) i2(t2, e2);
    });
  }
  onDataProgressiveRead(t2) {
    this.#Xs.promise.then(() => {
      for (const e2 of this.#Cn) e2(t2);
    });
  }
  onDataProgressiveDone() {
    this.#Xs.promise.then(() => {
      for (const t2 of this.#En) t2();
    });
  }
  transportReady() {
    this.#Xs.resolve();
  }
  requestDataRange(t2, e2) {
    unreachable("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
class PDFDocumentProxy {
  constructor(t2, e2) {
    this._pdfInfo = t2;
    this._transport = e2;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t2) {
    return this._transport.getPage(t2);
  }
  getPageIndex(t2) {
    return this._transport.getPageIndex(t2);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t2) {
    return this._transport.getDestination(t2);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getAnnotationsByType(t2, e2) {
    return this._transport.getAnnotationsByType(t2, e2);
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({ intent: t2 = "display" } = {}) {
    const { renderingIntent: e2 } = this._transport.getRenderingIntent(t2);
    return this._transport.getOptionalContentConfig(e2);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t2 = false) {
    return this._transport.startCleanup(t2 || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t2) {
    return this._transport.cachedPageNumber(t2);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
class PDFPageProxy {
  #Tn = false;
  constructor(t2, e2, i2, s2 = false) {
    this._pageIndex = t2;
    this._pageInfo = e2;
    this._transport = i2;
    this._stats = s2 ? new StatTimer() : null;
    this._pdfBug = s2;
    this.commonObjs = i2.commonObjs;
    this.objs = new PDFObjects();
    this._intentStates = /* @__PURE__ */ new Map();
    this.destroyed = false;
    this.recordedBBoxes = null;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({ scale: t2, rotation: e2 = this.rotate, offsetX: i2 = 0, offsetY: s2 = 0, dontFlip: n2 = false } = {}) {
    return new PageViewport({ viewBox: this.view, userUnit: this.userUnit, scale: t2, rotation: e2, offsetX: i2, offsetY: s2, dontFlip: n2 });
  }
  getAnnotations({ intent: t2 = "display" } = {}) {
    const { renderingIntent: e2 } = this._transport.getRenderingIntent(t2);
    return this._transport.getAnnotations(this._pageIndex, e2);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    return this._transport._htmlForXfa?.children[this._pageIndex] || null;
  }
  render({ canvasContext: t2, canvas: e2 = t2.canvas, viewport: i2, intent: s2 = "display", annotationMode: n2 = c.ENABLE, transform: a2 = null, background: o2 = null, optionalContentConfigPromise: l2 = null, annotationCanvasMap: h2 = null, pageColors: d2 = null, printAnnotationStorage: u2 = null, isEditing: p2 = false, recordOperations: g2 = false, operationsFilter: m2 = null }) {
    this._stats?.time("Overall");
    const f2 = this._transport.getRenderingIntent(s2, n2, u2, p2), { renderingIntent: b2, cacheKey: w2 } = f2;
    this.#Tn = false;
    l2 ||= this._transport.getOptionalContentConfig(b2);
    let y2 = this._intentStates.get(w2);
    if (!y2) {
      y2 = /* @__PURE__ */ Object.create(null);
      this._intentStates.set(w2, y2);
    }
    if (y2.streamReaderCancelTimeout) {
      clearTimeout(y2.streamReaderCancelTimeout);
      y2.streamReaderCancelTimeout = null;
    }
    const A2 = !!(b2 & r);
    if (!y2.displayReadyCapability) {
      y2.displayReadyCapability = Promise.withResolvers();
      y2.operatorList = { fnArray: [], argsArray: [], lastChunk: false, separateAnnots: null };
      this._stats?.time("Page Request");
      this._pumpOperatorList(f2);
    }
    const v2 = Boolean(this._pdfBug && globalThis.StepperManager?.enabled), x2 = !this.recordedBBoxes && (g2 || v2), complete = (t3) => {
      y2.renderTasks.delete(E2);
      if (x2) {
        const t4 = E2.gfx?.dependencyTracker.take();
        if (t4) {
          E2.stepper && E2.stepper.setOperatorBBoxes(t4, E2.gfx.dependencyTracker.takeDebugMetadata());
          g2 && (this.recordedBBoxes = t4);
        }
      }
      A2 && (this.#Tn = true);
      this.#Dn();
      if (t3) {
        E2.capability.reject(t3);
        this._abortOperatorList({ intentState: y2, reason: t3 instanceof Error ? t3 : new Error(t3) });
      } else E2.capability.resolve();
      if (this._stats) {
        this._stats.timeEnd("Rendering");
        this._stats.timeEnd("Overall");
        globalThis.Stats?.enabled && globalThis.Stats.add(this.pageNumber, this._stats);
      }
    }, E2 = new InternalRenderTask({ callback: complete, params: { canvas: e2, canvasContext: t2, dependencyTracker: x2 ? new CanvasDependencyTracker(e2, y2.operatorList.length, v2) : null, viewport: i2, transform: a2, background: o2 }, objs: this.objs, commonObjs: this.commonObjs, annotationCanvasMap: h2, operatorList: y2.operatorList, pageIndex: this._pageIndex, canvasFactory: this._transport.canvasFactory, filterFactory: this._transport.filterFactory, useRequestAnimationFrame: !A2, pdfBug: this._pdfBug, pageColors: d2, enableHWA: this._transport.enableHWA, operationsFilter: m2 });
    (y2.renderTasks ||= /* @__PURE__ */ new Set()).add(E2);
    const C2 = E2.task;
    Promise.all([y2.displayReadyCapability.promise, l2]).then(([t3, e3]) => {
      if (this.destroyed) complete();
      else {
        this._stats?.time("Rendering");
        if (!(e3.renderingIntent & b2)) throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
        E2.initializeGraphics({ transparency: t3, optionalContentConfig: e3 });
        E2.operatorListChanged();
      }
    }).catch(complete);
    return C2;
  }
  getOperatorList({ intent: t2 = "display", annotationMode: e2 = c.ENABLE, printAnnotationStorage: i2 = null, isEditing: s2 = false } = {}) {
    const n2 = this._transport.getRenderingIntent(t2, e2, i2, s2, true);
    let r2, a2 = this._intentStates.get(n2.cacheKey);
    if (!a2) {
      a2 = /* @__PURE__ */ Object.create(null);
      this._intentStates.set(n2.cacheKey, a2);
    }
    if (!a2.opListReadCapability) {
      r2 = /* @__PURE__ */ Object.create(null);
      r2.operatorListChanged = function operatorListChanged() {
        if (a2.operatorList.lastChunk) {
          a2.opListReadCapability.resolve(a2.operatorList);
          a2.renderTasks.delete(r2);
        }
      };
      a2.opListReadCapability = Promise.withResolvers();
      (a2.renderTasks ||= /* @__PURE__ */ new Set()).add(r2);
      a2.operatorList = { fnArray: [], argsArray: [], lastChunk: false, separateAnnots: null };
      this._stats?.time("Page Request");
      this._pumpOperatorList(n2);
    }
    return a2.opListReadCapability.promise;
  }
  streamTextContent({ includeMarkedContent: t2 = false, disableNormalization: e2 = false } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", { pageIndex: this._pageIndex, includeMarkedContent: true === t2, disableNormalization: true === e2 }, { highWaterMark: 100, size: (t3) => t3.items.length });
  }
  getTextContent(t2 = {}) {
    if (this._transport._htmlForXfa) return this.getXfa().then((t3) => XfaText.textContent(t3));
    const e2 = this.streamTextContent(t2);
    return new Promise(function(t3, i2) {
      const s2 = e2.getReader(), n2 = { items: [], styles: /* @__PURE__ */ Object.create(null), lang: null };
      !(function pump() {
        s2.read().then(function({ value: e3, done: i3 }) {
          if (i3) t3(n2);
          else {
            n2.lang ??= e3.lang;
            Object.assign(n2.styles, e3.styles);
            n2.items.push(...e3.items);
            pump();
          }
        }, i2);
      })();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = true;
    const t2 = [];
    for (const e2 of this._intentStates.values()) {
      this._abortOperatorList({ intentState: e2, reason: new Error("Page was destroyed."), force: true });
      if (!e2.opListReadCapability) for (const i2 of e2.renderTasks) {
        t2.push(i2.completed);
        i2.cancel();
      }
    }
    this.objs.clear();
    this.#Tn = false;
    return Promise.all(t2);
  }
  cleanup(t2 = false) {
    this.#Tn = true;
    const e2 = this.#Dn();
    t2 && e2 && (this._stats &&= new StatTimer());
    return e2;
  }
  #Dn() {
    if (!this.#Tn || this.destroyed) return false;
    for (const { renderTasks: t2, operatorList: e2 } of this._intentStates.values()) if (t2.size > 0 || !e2.lastChunk) return false;
    this._intentStates.clear();
    this.objs.clear();
    this.#Tn = false;
    return true;
  }
  _startRenderPage(t2, e2) {
    const i2 = this._intentStates.get(e2);
    if (i2) {
      this._stats?.timeEnd("Page Request");
      i2.displayReadyCapability?.resolve(t2);
    }
  }
  _renderPageChunk(t2, e2) {
    for (let i2 = 0, s2 = t2.length; i2 < s2; i2++) {
      e2.operatorList.fnArray.push(t2.fnArray[i2]);
      e2.operatorList.argsArray.push(t2.argsArray[i2]);
    }
    e2.operatorList.lastChunk = t2.lastChunk;
    e2.operatorList.separateAnnots = t2.separateAnnots;
    for (const t3 of e2.renderTasks) t3.operatorListChanged();
    t2.lastChunk && this.#Dn();
  }
  _pumpOperatorList({ renderingIntent: t2, cacheKey: e2, annotationStorageSerializable: i2, modifiedIds: s2 }) {
    const { map: n2, transfer: r2 } = i2, a2 = this._transport.messageHandler.sendWithStream("GetOperatorList", { pageIndex: this._pageIndex, intent: t2, cacheKey: e2, annotationStorage: n2, modifiedIds: s2 }, r2).getReader(), o2 = this._intentStates.get(e2);
    o2.streamReader = a2;
    const pump = () => {
      a2.read().then(({ value: t3, done: e3 }) => {
        if (e3) o2.streamReader = null;
        else if (!this._transport.destroyed) {
          this._renderPageChunk(t3, o2);
          pump();
        }
      }, (t3) => {
        o2.streamReader = null;
        if (!this._transport.destroyed) {
          if (o2.operatorList) {
            o2.operatorList.lastChunk = true;
            for (const t4 of o2.renderTasks) t4.operatorListChanged();
            this.#Dn();
          }
          if (o2.displayReadyCapability) o2.displayReadyCapability.reject(t3);
          else {
            if (!o2.opListReadCapability) throw t3;
            o2.opListReadCapability.reject(t3);
          }
        }
      });
    };
    pump();
  }
  _abortOperatorList({ intentState: t2, reason: e2, force: i2 = false }) {
    if (t2.streamReader) {
      if (t2.streamReaderCancelTimeout) {
        clearTimeout(t2.streamReaderCancelTimeout);
        t2.streamReaderCancelTimeout = null;
      }
      if (!i2) {
        if (t2.renderTasks.size > 0) return;
        if (e2 instanceof RenderingCancelledException) {
          let i3 = 100;
          e2.extraDelay > 0 && e2.extraDelay < 1e3 && (i3 += e2.extraDelay);
          t2.streamReaderCancelTimeout = setTimeout(() => {
            t2.streamReaderCancelTimeout = null;
            this._abortOperatorList({ intentState: t2, reason: e2, force: true });
          }, i3);
          return;
        }
      }
      t2.streamReader.cancel(new AbortException(e2.message)).catch(() => {
      });
      t2.streamReader = null;
      if (!this._transport.destroyed) {
        for (const [e3, i3] of this._intentStates) if (i3 === t2) {
          this._intentStates.delete(e3);
          break;
        }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
class PDFWorker {
  #Xs = Promise.withResolvers();
  #Mn = null;
  #Fs = null;
  #kn = null;
  static #Pn = 0;
  static #In = false;
  static #Fn = /* @__PURE__ */ new WeakMap();
  static {
    if (t) {
      this.#In = true;
      GlobalWorkerOptions.workerSrc ||= "./pdf.worker.mjs";
    }
    this._isSameOrigin = (t2, e2) => {
      const i2 = URL.parse(t2);
      if (!i2?.origin || "null" === i2.origin) return false;
      const s2 = new URL(e2, i2);
      return i2.origin === s2.origin;
    };
    this._createCDNWrapper = (t2) => {
      const e2 = `await import("${t2}");`;
      return URL.createObjectURL(new Blob([e2], { type: "text/javascript" }));
    };
    this.fromPort = (t2) => {
      !(function deprecated(t3) {
        console.log("Deprecated API usage: " + t3);
      })("`PDFWorker.fromPort` - please use `PDFWorker.create` instead.");
      if (!t2?.port) throw new Error("PDFWorker.fromPort - invalid method signature.");
      return this.create(t2);
    };
  }
  constructor({ name: t2 = null, port: e2 = null, verbosity: i2 = getVerbosityLevel() } = {}) {
    this.name = t2;
    this.destroyed = false;
    this.verbosity = i2;
    if (e2) {
      if (PDFWorker.#Fn.has(e2)) throw new Error("Cannot use more than one PDFWorker per port.");
      PDFWorker.#Fn.set(e2, this);
      this.#Rn(e2);
    } else this.#Ln();
  }
  get promise() {
    return this.#Xs.promise;
  }
  #Bn() {
    this.#Xs.resolve();
    this.#Mn.send("configure", { verbosity: this.verbosity });
  }
  get port() {
    return this.#Fs;
  }
  get messageHandler() {
    return this.#Mn;
  }
  #Rn(t2) {
    this.#Fs = t2;
    this.#Mn = new MessageHandler("main", "worker", t2);
    this.#Mn.on("ready", () => {
    });
    this.#Bn();
  }
  #Ln() {
    if (PDFWorker.#In || PDFWorker.#On) {
      this.#Nn();
      return;
    }
    let { workerSrc: t2 } = PDFWorker;
    try {
      PDFWorker._isSameOrigin(window.location, t2) || (t2 = PDFWorker._createCDNWrapper(new URL(t2, window.location).href));
      const e2 = new Worker(t2, { type: "module" }), i2 = new MessageHandler("main", "worker", e2), terminateEarly = () => {
        s2.abort();
        i2.destroy();
        e2.terminate();
        this.destroyed ? this.#Xs.reject(new Error("Worker was destroyed")) : this.#Nn();
      }, s2 = new AbortController();
      e2.addEventListener("error", () => {
        this.#kn || terminateEarly();
      }, { signal: s2.signal });
      i2.on("test", (t3) => {
        s2.abort();
        if (!this.destroyed && t3) {
          this.#Mn = i2;
          this.#Fs = e2;
          this.#kn = e2;
          this.#Bn();
        } else terminateEarly();
      });
      i2.on("ready", (t3) => {
        s2.abort();
        if (this.destroyed) terminateEarly();
        else try {
          sendTest();
        } catch {
          this.#Nn();
        }
      });
      const sendTest = () => {
        const t3 = new Uint8Array();
        i2.send("test", t3, [t3.buffer]);
      };
      sendTest();
      return;
    } catch {
      info("The worker has been disabled.");
    }
    this.#Nn();
  }
  #Nn() {
    if (!PDFWorker.#In) {
      warn("Setting up fake worker.");
      PDFWorker.#In = true;
    }
    PDFWorker._setupFakeWorkerGlobal.then((t2) => {
      if (this.destroyed) {
        this.#Xs.reject(new Error("Worker was destroyed"));
        return;
      }
      const e2 = new LoopbackPort();
      this.#Fs = e2;
      const i2 = "fake" + PDFWorker.#Pn++, s2 = new MessageHandler(i2 + "_worker", i2, e2);
      t2.setup(s2, e2);
      this.#Mn = new MessageHandler(i2, i2 + "_worker", e2);
      this.#Bn();
    }).catch((t2) => {
      this.#Xs.reject(new Error(`Setting up fake worker failed: "${t2.message}".`));
    });
  }
  destroy() {
    this.destroyed = true;
    this.#kn?.terminate();
    this.#kn = null;
    PDFWorker.#Fn.delete(this.#Fs);
    this.#Fs = null;
    this.#Mn?.destroy();
    this.#Mn = null;
  }
  static create(t2) {
    const e2 = this.#Fn.get(t2?.port);
    if (e2) {
      if (e2._pendingDestroy) throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e2;
    }
    return new PDFWorker(t2);
  }
  static get workerSrc() {
    if (GlobalWorkerOptions.workerSrc) return GlobalWorkerOptions.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get #On() {
    try {
      return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
    } catch {
      return null;
    }
  }
  static get _setupFakeWorkerGlobal() {
    return shadow(this, "_setupFakeWorkerGlobal", (async () => {
      if (this.#On) return this.#On;
      return (await import(
        /*webpackIgnore: true*/
        /*@vite-ignore*/
        this.workerSrc
      )).WorkerMessageHandler;
    })());
  }
}
class WorkerTransport {
  #Un = /* @__PURE__ */ new Map();
  #Hn = /* @__PURE__ */ new Map();
  #zn = /* @__PURE__ */ new Map();
  #Gn = /* @__PURE__ */ new Map();
  #Wn = null;
  constructor(t2, e2, i2, s2, n2, r2) {
    this.messageHandler = t2;
    this.loadingTask = e2;
    this.commonObjs = new PDFObjects();
    this.fontLoader = new FontLoader({ ownerDocument: s2.ownerDocument, styleElement: s2.styleElement });
    this.loadingParams = s2.loadingParams;
    this._params = s2;
    this.canvasFactory = n2.canvasFactory;
    this.filterFactory = n2.filterFactory;
    this.cMapReaderFactory = n2.cMapReaderFactory;
    this.standardFontDataFactory = n2.standardFontDataFactory;
    this.wasmFactory = n2.wasmFactory;
    this.destroyed = false;
    this.destroyCapability = null;
    this._networkStream = i2;
    this._fullReader = null;
    this._lastProgress = null;
    this.downloadInfoCapability = Promise.withResolvers();
    this.enableHWA = r2;
    this.setupMessageHandler();
  }
  #Vn(t2, e2 = null) {
    const i2 = this.#Un.get(t2);
    if (i2) return i2;
    const s2 = this.messageHandler.sendWithPromise(t2, e2);
    this.#Un.set(t2, s2);
    return s2;
  }
  get annotationStorage() {
    return shadow(this, "annotationStorage", new AnnotationStorage());
  }
  getRenderingIntent(t2, e2 = c.ENABLE, i2 = null, u2 = false, p2 = false) {
    let g2 = n, m2 = X;
    switch (t2) {
      case "any":
        g2 = s;
        break;
      case "display":
        break;
      case "print":
        g2 = r;
        break;
      default:
        warn(`getRenderingIntent - invalid intent: ${t2}`);
    }
    const f2 = g2 & r && i2 instanceof PrintAnnotationStorage ? i2 : this.annotationStorage;
    switch (e2) {
      case c.DISABLE:
        g2 += l;
        break;
      case c.ENABLE:
        break;
      case c.ENABLE_FORMS:
        g2 += a;
        break;
      case c.ENABLE_STORAGE:
        g2 += o;
        m2 = f2.serializable;
        break;
      default:
        warn(`getRenderingIntent - invalid annotationMode: ${e2}`);
    }
    u2 && (g2 += h);
    p2 && (g2 += d);
    const { ids: b2, hash: w2 } = f2.modifiedIds;
    return { renderingIntent: g2, cacheKey: [g2, m2.hash, w2].join("_"), annotationStorageSerializable: m2, modifiedIds: b2 };
  }
  destroy() {
    if (this.destroyCapability) return this.destroyCapability.promise;
    this.destroyed = true;
    this.destroyCapability = Promise.withResolvers();
    this.#Wn?.reject(new Error("Worker was destroyed during onPassword callback"));
    const t2 = [];
    for (const e3 of this.#Hn.values()) t2.push(e3._destroy());
    this.#Hn.clear();
    this.#zn.clear();
    this.#Gn.clear();
    this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e2 = this.messageHandler.sendWithPromise("Terminate", null);
    t2.push(e2);
    Promise.all(t2).then(() => {
      this.commonObjs.clear();
      this.fontLoader.clear();
      this.#Un.clear();
      this.filterFactory.destroy();
      TextLayer.cleanup();
      this._networkStream?.cancelAllRequests(new AbortException("Worker was terminated."));
      this.messageHandler?.destroy();
      this.messageHandler = null;
      this.destroyCapability.resolve();
    }, this.destroyCapability.reject);
    return this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const { messageHandler: t2, loadingTask: e2 } = this;
    t2.on("GetReader", (t3, e3) => {
      assert(this._networkStream, "GetReader - no `IPDFStream` instance available.");
      this._fullReader = this._networkStream.getFullReader();
      this._fullReader.onProgress = (t4) => {
        this._lastProgress = { loaded: t4.loaded, total: t4.total };
      };
      e3.onPull = () => {
        this._fullReader.read().then(function({ value: t4, done: i2 }) {
          if (i2) e3.close();
          else {
            assert(t4 instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer.");
            e3.enqueue(new Uint8Array(t4), 1, [t4]);
          }
        }).catch((t4) => {
          e3.error(t4);
        });
      };
      e3.onCancel = (t4) => {
        this._fullReader.cancel(t4);
        e3.ready.catch((t5) => {
          if (!this.destroyed) throw t5;
        });
      };
    });
    t2.on("ReaderHeadersReady", async (t3) => {
      await this._fullReader.headersReady;
      const { isStreamingSupported: i2, isRangeSupported: s2, contentLength: n2 } = this._fullReader;
      if (!i2 || !s2) {
        this._lastProgress && e2.onProgress?.(this._lastProgress);
        this._fullReader.onProgress = (t4) => {
          e2.onProgress?.({ loaded: t4.loaded, total: t4.total });
        };
      }
      return { isStreamingSupported: i2, isRangeSupported: s2, contentLength: n2 };
    });
    t2.on("GetRangeReader", (t3, e3) => {
      assert(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const i2 = this._networkStream.getRangeReader(t3.begin, t3.end);
      if (i2) {
        e3.onPull = () => {
          i2.read().then(function({ value: t4, done: i3 }) {
            if (i3) e3.close();
            else {
              assert(t4 instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer.");
              e3.enqueue(new Uint8Array(t4), 1, [t4]);
            }
          }).catch((t4) => {
            e3.error(t4);
          });
        };
        e3.onCancel = (t4) => {
          i2.cancel(t4);
          e3.ready.catch((t5) => {
            if (!this.destroyed) throw t5;
          });
        };
      } else e3.close();
    });
    t2.on("GetDoc", ({ pdfInfo: t3 }) => {
      this._numPages = t3.numPages;
      this._htmlForXfa = t3.htmlForXfa;
      delete t3.htmlForXfa;
      e2._capability.resolve(new PDFDocumentProxy(t3, this));
    });
    t2.on("DocException", (t3) => {
      e2._capability.reject(wrapReason(t3));
    });
    t2.on("PasswordRequest", (t3) => {
      this.#Wn = Promise.withResolvers();
      try {
        if (!e2.onPassword) throw wrapReason(t3);
        const updatePassword = (t4) => {
          t4 instanceof Error ? this.#Wn.reject(t4) : this.#Wn.resolve({ password: t4 });
        };
        e2.onPassword(updatePassword, t3.code);
      } catch (t4) {
        this.#Wn.reject(t4);
      }
      return this.#Wn.promise;
    });
    t2.on("DataLoaded", (t3) => {
      e2.onProgress?.({ loaded: t3.length, total: t3.length });
      this.downloadInfoCapability.resolve(t3);
    });
    t2.on("StartRenderPage", (t3) => {
      if (this.destroyed) return;
      this.#Hn.get(t3.pageIndex)._startRenderPage(t3.transparency, t3.cacheKey);
    });
    t2.on("commonobj", ([e3, i2, s2]) => {
      if (this.destroyed) return null;
      if (this.commonObjs.has(e3)) return null;
      switch (i2) {
        case "Font":
          if ("error" in s2) {
            const t3 = s2.error;
            warn(`Error during font loading: ${t3}`);
            this.commonObjs.resolve(e3, t3);
            break;
          }
          const n2 = new FontInfo(s2), r2 = this._params.pdfBug && globalThis.FontInspector?.enabled ? (t3, e4) => globalThis.FontInspector.fontAdded(t3, e4) : null, a2 = new FontFaceObject(n2, r2, s2.extra, s2.charProcOperatorList);
          this.fontLoader.bind(a2).catch(() => t2.sendWithPromise("FontFallback", { id: e3 })).finally(() => {
            !a2.fontExtraProperties && a2.data && a2.clearData();
            this.commonObjs.resolve(e3, a2);
          });
          break;
        case "CopyLocalImage":
          const { imageRef: o2 } = s2;
          assert(o2, "The imageRef must be defined.");
          for (const t3 of this.#Hn.values()) for (const [, i3] of t3.objs) if (i3?.ref === o2) {
            if (!i3.dataLen) return null;
            this.commonObjs.resolve(e3, structuredClone(i3));
            return i3.dataLen;
          }
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(e3, s2);
          break;
        default:
          throw new Error(`Got unknown common object type ${i2}`);
      }
      return null;
    });
    t2.on("obj", ([t3, e3, i2, s2]) => {
      if (this.destroyed) return;
      const n2 = this.#Hn.get(e3);
      if (!n2.objs.has(t3)) if (0 !== n2._intentStates.size) switch (i2) {
        case "Image":
        case "Pattern":
          n2.objs.resolve(t3, s2);
          break;
        default:
          throw new Error(`Got unknown object type ${i2}`);
      }
      else s2?.bitmap?.close();
    });
    t2.on("DocProgress", (t3) => {
      this.destroyed || e2.onProgress?.({ loaded: t3.loaded, total: t3.total });
    });
    t2.on("FetchBinaryData", async (t3) => {
      if (this.destroyed) throw new Error("Worker was destroyed.");
      const e3 = this[t3.type];
      if (!e3) throw new Error(`${t3.type} not initialized, see the \`useWorkerFetch\` parameter.`);
      return e3.fetch(t3);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    this.annotationStorage.size <= 0 && warn("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const { map: t2, transfer: e2 } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", { isPureXfa: !!this._htmlForXfa, numPages: this._numPages, annotationStorage: t2, filename: this._fullReader?.filename ?? null }, e2).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t2) {
    if (!Number.isInteger(t2) || t2 <= 0 || t2 > this._numPages) return Promise.reject(new Error("Invalid page request."));
    const e2 = t2 - 1, i2 = this.#zn.get(e2);
    if (i2) return i2;
    const s2 = this.messageHandler.sendWithPromise("GetPage", { pageIndex: e2 }).then((i3) => {
      if (this.destroyed) throw new Error("Transport destroyed");
      i3.refStr && this.#Gn.set(i3.refStr, t2);
      const s3 = new PDFPageProxy(e2, i3, this, this._params.pdfBug);
      this.#Hn.set(e2, s3);
      return s3;
    });
    this.#zn.set(e2, s2);
    return s2;
  }
  getPageIndex(t2) {
    return isRefProxy(t2) ? this.messageHandler.sendWithPromise("GetPageIndex", { num: t2.num, gen: t2.gen }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t2, e2) {
    return this.messageHandler.sendWithPromise("GetAnnotations", { pageIndex: t2, intent: e2 });
  }
  getFieldObjects() {
    return this.#Vn("GetFieldObjects");
  }
  hasJSActions() {
    return this.#Vn("HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t2) {
    return "string" != typeof t2 ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", { id: t2 });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getAnnotationsByType(t2, e2) {
    return this.messageHandler.sendWithPromise("GetAnnotationsByType", { types: t2, pageIndexesToSkip: e2 });
  }
  getDocJSActions() {
    return this.#Vn("GetDocJSActions");
  }
  getPageJSActions(t2) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", { pageIndex: t2 });
  }
  getStructTree(t2) {
    return this.messageHandler.sendWithPromise("GetStructTree", { pageIndex: t2 });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t2) {
    return this.#Vn("GetOptionalContentConfig").then((e2) => new OptionalContentConfig(e2, t2));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t2 = "GetMetadata", e2 = this.#Un.get(t2);
    if (e2) return e2;
    const i2 = this.messageHandler.sendWithPromise(t2, null).then((t3) => ({ info: t3[0], metadata: t3[1] ? new Metadata(t3[1]) : null, contentDispositionFilename: this._fullReader?.filename ?? null, contentLength: this._fullReader?.contentLength ?? null }));
    this.#Un.set(t2, i2);
    return i2;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t2 = false) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const t3 of this.#Hn.values()) {
        if (!t3.cleanup()) throw new Error(`startCleanup: Page ${t3.pageNumber} is currently rendering.`);
      }
      this.commonObjs.clear();
      t2 || this.fontLoader.clear();
      this.#Un.clear();
      this.filterFactory.destroy(true);
      TextLayer.cleanup();
    }
  }
  cachedPageNumber(t2) {
    if (!isRefProxy(t2)) return null;
    const e2 = 0 === t2.gen ? `${t2.num}R` : `${t2.num}R${t2.gen}`;
    return this.#Gn.get(e2) ?? null;
  }
}
class RenderTask {
  #$n = null;
  onContinue = null;
  onError = null;
  constructor(t2) {
    this.#$n = t2;
  }
  get promise() {
    return this.#$n.capability.promise;
  }
  cancel(t2 = 0) {
    this.#$n.cancel(null, t2);
  }
  get separateAnnots() {
    const { separateAnnots: t2 } = this.#$n.operatorList;
    if (!t2) return false;
    const { annotationCanvasMap: e2 } = this.#$n;
    return t2.form || t2.canvas && e2?.size > 0;
  }
}
class InternalRenderTask {
  #jn = null;
  static #qn = /* @__PURE__ */ new WeakSet();
  constructor({ callback: t2, params: e2, objs: i2, commonObjs: s2, annotationCanvasMap: n2, operatorList: r2, pageIndex: a2, canvasFactory: o2, filterFactory: l2, useRequestAnimationFrame: h2 = false, pdfBug: d2 = false, pageColors: c2 = null, enableHWA: u2 = false, operationsFilter: p2 = null }) {
    this.callback = t2;
    this.params = e2;
    this.objs = i2;
    this.commonObjs = s2;
    this.annotationCanvasMap = n2;
    this.operatorListIdx = null;
    this.operatorList = r2;
    this._pageIndex = a2;
    this.canvasFactory = o2;
    this.filterFactory = l2;
    this._pdfBug = d2;
    this.pageColors = c2;
    this.running = false;
    this.graphicsReadyCallback = null;
    this.graphicsReady = false;
    this._useRequestAnimationFrame = true === h2 && "undefined" != typeof window;
    this.cancelled = false;
    this.capability = Promise.withResolvers();
    this.task = new RenderTask(this);
    this._cancelBound = this.cancel.bind(this);
    this._continueBound = this._continue.bind(this);
    this._scheduleNextBound = this._scheduleNext.bind(this);
    this._nextBound = this._next.bind(this);
    this._canvas = e2.canvas;
    this._canvasContext = e2.canvas ? null : e2.canvasContext;
    this._enableHWA = u2;
    this._dependencyTracker = e2.dependencyTracker;
    this._operationsFilter = p2;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({ transparency: t2 = false, optionalContentConfig: e2 }) {
    if (this.cancelled) return;
    if (this._canvas) {
      if (InternalRenderTask.#qn.has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      InternalRenderTask.#qn.add(this._canvas);
    }
    if (this._pdfBug && globalThis.StepperManager?.enabled) {
      this.stepper = globalThis.StepperManager.create(this._pageIndex);
      this.stepper.init(this.operatorList);
      this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
    }
    const { viewport: i2, transform: s2, background: n2, dependencyTracker: r2 } = this.params, a2 = this._canvasContext || this._canvas.getContext("2d", { alpha: false, willReadFrequently: !this._enableHWA });
    this.gfx = new CanvasGraphics(a2, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: e2 }, this.annotationCanvasMap, this.pageColors, r2);
    this.gfx.beginDrawing({ transform: s2, viewport: i2, transparency: t2, background: n2 });
    this.operatorListIdx = 0;
    this.graphicsReady = true;
    this.graphicsReadyCallback?.();
  }
  cancel(t2 = null, e2 = 0) {
    this.running = false;
    this.cancelled = true;
    this.gfx?.endDrawing();
    if (this.#jn) {
      window.cancelAnimationFrame(this.#jn);
      this.#jn = null;
    }
    InternalRenderTask.#qn.delete(this._canvas);
    t2 ||= new RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, e2);
    this.callback(t2);
    this.task.onError?.(t2);
  }
  operatorListChanged() {
    if (this.graphicsReady) {
      this.gfx.dependencyTracker?.growOperationsCount(this.operatorList.fnArray.length);
      this.stepper?.updateOperatorList(this.operatorList);
      this.running || this._continue();
    } else this.graphicsReadyCallback ||= this._continueBound;
  }
  _continue() {
    this.running = true;
    this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? this.#jn = window.requestAnimationFrame(() => {
      this.#jn = null;
      this._nextBound().catch(this._cancelBound);
    }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    if (!this.cancelled) {
      this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter);
      if (this.operatorListIdx === this.operatorList.argsArray.length) {
        this.running = false;
        if (this.operatorList.lastChunk) {
          this.gfx.endDrawing();
          InternalRenderTask.#qn.delete(this._canvas);
          this.callback();
        }
      }
    }
  }
}
const Ft = "5.4.296", Rt = "f56dc8601";
class ColorPicker {
  #Xn = null;
  #Kn = null;
  #Yn;
  #Qn = null;
  #Jn = false;
  #Zn = false;
  #r = null;
  #tr;
  #er = null;
  #b = null;
  static #ir = null;
  static get _keyboardManager() {
    return shadow(this, "_keyboardManager", new KeyboardManager([[["Escape", "mac+Escape"], ColorPicker.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], ColorPicker.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], ColorPicker.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], ColorPicker.prototype._moveToPrevious], [["Home", "mac+Home"], ColorPicker.prototype._moveToBeginning], [["End", "mac+End"], ColorPicker.prototype._moveToEnd]]));
  }
  constructor({ editor: t2 = null, uiManager: e2 = null }) {
    if (t2) {
      this.#Zn = false;
      this.#r = t2;
    } else this.#Zn = true;
    this.#b = t2?._uiManager || e2;
    this.#tr = this.#b._eventBus;
    this.#Yn = t2?.color?.toUpperCase() || this.#b?.highlightColors.values().next().value || "#FFFF98";
    ColorPicker.#ir ||= Object.freeze({ blue: "pdfjs-editor-colorpicker-blue", green: "pdfjs-editor-colorpicker-green", pink: "pdfjs-editor-colorpicker-pink", red: "pdfjs-editor-colorpicker-red", yellow: "pdfjs-editor-colorpicker-yellow" });
  }
  renderButton() {
    const t2 = this.#Xn = document.createElement("button");
    t2.className = "colorPicker";
    t2.tabIndex = "0";
    t2.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button");
    t2.ariaHasPopup = "true";
    this.#r && (t2.ariaControls = `${this.#r.id}_colorpicker_dropdown`);
    const e2 = this.#b._signal;
    t2.addEventListener("click", this.#sr.bind(this), { signal: e2 });
    t2.addEventListener("keydown", this.#nr.bind(this), { signal: e2 });
    const i2 = this.#Kn = document.createElement("span");
    i2.className = "swatch";
    i2.ariaHidden = "true";
    i2.style.backgroundColor = this.#Yn;
    t2.append(i2);
    return t2;
  }
  renderMainDropdown() {
    const t2 = this.#Qn = this.#rr();
    t2.ariaOrientation = "horizontal";
    t2.ariaLabelledBy = "highlightColorPickerLabel";
    return t2;
  }
  #rr() {
    const t2 = document.createElement("div"), e2 = this.#b._signal;
    t2.addEventListener("contextmenu", noContextMenu, { signal: e2 });
    t2.className = "dropdown";
    t2.role = "listbox";
    t2.ariaMultiSelectable = "false";
    t2.ariaOrientation = "vertical";
    t2.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
    this.#r && (t2.id = `${this.#r.id}_colorpicker_dropdown`);
    for (const [i2, s2] of this.#b.highlightColors) {
      const n2 = document.createElement("button");
      n2.tabIndex = "0";
      n2.role = "option";
      n2.setAttribute("data-color", s2);
      n2.title = i2;
      n2.setAttribute("data-l10n-id", ColorPicker.#ir[i2]);
      const r2 = document.createElement("span");
      n2.append(r2);
      r2.className = "swatch";
      r2.style.backgroundColor = s2;
      n2.ariaSelected = s2 === this.#Yn;
      n2.addEventListener("click", this.#ar.bind(this, s2), { signal: e2 });
      t2.append(n2);
    }
    t2.addEventListener("keydown", this.#nr.bind(this), { signal: e2 });
    return t2;
  }
  #ar(t2, e2) {
    e2.stopPropagation();
    this.#tr.dispatch("switchannotationeditorparams", { source: this, type: g.HIGHLIGHT_COLOR, value: t2 });
    this.updateColor(t2);
  }
  _colorSelectFromKeyboard(t2) {
    if (t2.target === this.#Xn) {
      this.#sr(t2);
      return;
    }
    const e2 = t2.target.getAttribute("data-color");
    e2 && this.#ar(e2, t2);
  }
  _moveToNext(t2) {
    this.#or ? t2.target !== this.#Xn ? t2.target.nextSibling?.focus() : this.#Qn.firstChild?.focus() : this.#sr(t2);
  }
  _moveToPrevious(t2) {
    if (t2.target !== this.#Qn?.firstChild && t2.target !== this.#Xn) {
      this.#or || this.#sr(t2);
      t2.target.previousSibling?.focus();
    } else this.#or && this._hideDropdownFromKeyboard();
  }
  _moveToBeginning(t2) {
    this.#or ? this.#Qn.firstChild?.focus() : this.#sr(t2);
  }
  _moveToEnd(t2) {
    this.#or ? this.#Qn.lastChild?.focus() : this.#sr(t2);
  }
  #nr(t2) {
    ColorPicker._keyboardManager.exec(this, t2);
  }
  #sr(t2) {
    if (this.#or) {
      this.hideDropdown();
      return;
    }
    this.#Jn = 0 === t2.detail;
    if (!this.#er) {
      this.#er = new AbortController();
      window.addEventListener("pointerdown", this.#u.bind(this), { signal: this.#b.combinedSignal(this.#er) });
    }
    this.#Xn.ariaExpanded = "true";
    if (this.#Qn) {
      this.#Qn.classList.remove("hidden");
      return;
    }
    const e2 = this.#Qn = this.#rr();
    this.#Xn.append(e2);
  }
  #u(t2) {
    this.#Qn?.contains(t2.target) || this.hideDropdown();
  }
  hideDropdown() {
    this.#Qn?.classList.add("hidden");
    this.#Xn.ariaExpanded = "false";
    this.#er?.abort();
    this.#er = null;
  }
  get #or() {
    return this.#Qn && !this.#Qn.classList.contains("hidden");
  }
  _hideDropdownFromKeyboard() {
    if (!this.#Zn) if (this.#or) {
      this.hideDropdown();
      this.#Xn.focus({ preventScroll: true, focusVisible: this.#Jn });
    } else this.#r?.unselect();
  }
  updateColor(t2) {
    this.#Kn && (this.#Kn.style.backgroundColor = t2);
    if (!this.#Qn) return;
    const e2 = this.#b.highlightColors.values();
    for (const i2 of this.#Qn.children) i2.ariaSelected = e2.next().value === t2.toUpperCase();
  }
  destroy() {
    this.#Xn?.remove();
    this.#Xn = null;
    this.#Kn = null;
    this.#Qn?.remove();
    this.#Qn = null;
  }
}
class BasicColorPicker {
  #lr = null;
  #r = null;
  #b = null;
  static #ir = null;
  constructor(t2) {
    this.#r = t2;
    this.#b = t2._uiManager;
    BasicColorPicker.#ir ||= Object.freeze({ freetext: "pdfjs-editor-color-picker-free-text-input", ink: "pdfjs-editor-color-picker-ink-input" });
  }
  renderButton() {
    if (this.#lr) return this.#lr;
    const { editorType: t2, colorType: e2, colorValue: i2 } = this.#r, s2 = this.#lr = document.createElement("input");
    s2.type = "color";
    s2.value = i2 || "#000000";
    s2.className = "basicColorPicker";
    s2.tabIndex = 0;
    s2.setAttribute("data-l10n-id", BasicColorPicker.#ir[t2]);
    s2.addEventListener("input", () => {
      this.#b.updateParams(e2, s2.value);
    }, { signal: this.#b._signal });
    return s2;
  }
  update(t2) {
    this.#lr && (this.#lr.value = t2);
  }
  destroy() {
    this.#lr?.remove();
    this.#lr = null;
  }
  hideDropdown() {
  }
}
function makeColorComp(t2) {
  return Math.floor(255 * Math.max(0, Math.min(1, t2))).toString(16).padStart(2, "0");
}
function scaleAndClamp(t2) {
  return Math.max(0, Math.min(255, 255 * t2));
}
class ColorConverters {
  static CMYK_G([t2, e2, i2, s2]) {
    return ["G", 1 - Math.min(1, 0.3 * t2 + 0.59 * i2 + 0.11 * e2 + s2)];
  }
  static G_CMYK([t2]) {
    return ["CMYK", 0, 0, 0, 1 - t2];
  }
  static G_RGB([t2]) {
    return ["RGB", t2, t2, t2];
  }
  static G_rgb([t2]) {
    return [t2 = scaleAndClamp(t2), t2, t2];
  }
  static G_HTML([t2]) {
    const e2 = makeColorComp(t2);
    return `#${e2}${e2}${e2}`;
  }
  static RGB_G([t2, e2, i2]) {
    return ["G", 0.3 * t2 + 0.59 * e2 + 0.11 * i2];
  }
  static RGB_rgb(t2) {
    return t2.map(scaleAndClamp);
  }
  static RGB_HTML(t2) {
    return `#${t2.map(makeColorComp).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t2, e2, i2, s2]) {
    return ["RGB", 1 - Math.min(1, t2 + s2), 1 - Math.min(1, i2 + s2), 1 - Math.min(1, e2 + s2)];
  }
  static CMYK_rgb([t2, e2, i2, s2]) {
    return [scaleAndClamp(1 - Math.min(1, t2 + s2)), scaleAndClamp(1 - Math.min(1, i2 + s2)), scaleAndClamp(1 - Math.min(1, e2 + s2))];
  }
  static CMYK_HTML(t2) {
    const e2 = this.CMYK_RGB(t2).slice(1);
    return this.RGB_HTML(e2);
  }
  static RGB_CMYK([t2, e2, i2]) {
    const s2 = 1 - t2, n2 = 1 - e2, r2 = 1 - i2;
    return ["CMYK", s2, n2, r2, Math.min(s2, n2, r2)];
  }
}
class BaseSVGFactory {
  create(t2, e2, i2 = false) {
    if (t2 <= 0 || e2 <= 0) throw new Error("Invalid SVG dimensions");
    const s2 = this._createSVG("svg:svg");
    s2.setAttribute("version", "1.1");
    if (!i2) {
      s2.setAttribute("width", `${t2}px`);
      s2.setAttribute("height", `${e2}px`);
    }
    s2.setAttribute("preserveAspectRatio", "none");
    s2.setAttribute("viewBox", `0 0 ${t2} ${e2}`);
    return s2;
  }
  createElement(t2) {
    if ("string" != typeof t2) throw new Error("Invalid SVG element type");
    return this._createSVG(t2);
  }
  _createSVG(t2) {
    unreachable("Abstract method `_createSVG` called.");
  }
}
class DOMSVGFactory extends BaseSVGFactory {
  _createSVG(t2) {
    return document.createElementNS(G, t2);
  }
}
const Lt = /* @__PURE__ */ new WeakSet(), Bt = 60 * (/* @__PURE__ */ new Date()).getTimezoneOffset() * 1e3;
class AnnotationElementFactory {
  static create(t2) {
    switch (t2.data.annotationType) {
      case E.LINK:
        return new LinkAnnotationElement(t2);
      case E.TEXT:
        return new TextAnnotationElement(t2);
      case E.WIDGET:
        switch (t2.data.fieldType) {
          case "Tx":
            return new TextWidgetAnnotationElement(t2);
          case "Btn":
            return t2.data.radioButton ? new RadioButtonWidgetAnnotationElement(t2) : t2.data.checkBox ? new CheckboxWidgetAnnotationElement(t2) : new PushButtonWidgetAnnotationElement(t2);
          case "Ch":
            return new ChoiceWidgetAnnotationElement(t2);
          case "Sig":
            return new SignatureWidgetAnnotationElement(t2);
        }
        return new WidgetAnnotationElement(t2);
      case E.POPUP:
        return new PopupAnnotationElement(t2);
      case E.FREETEXT:
        return new FreeTextAnnotationElement(t2);
      case E.LINE:
        return new LineAnnotationElement(t2);
      case E.SQUARE:
        return new SquareAnnotationElement(t2);
      case E.CIRCLE:
        return new CircleAnnotationElement(t2);
      case E.POLYLINE:
        return new PolylineAnnotationElement(t2);
      case E.CARET:
        return new CaretAnnotationElement(t2);
      case E.INK:
        return new InkAnnotationElement(t2);
      case E.POLYGON:
        return new PolygonAnnotationElement(t2);
      case E.HIGHLIGHT:
        return new HighlightAnnotationElement(t2);
      case E.UNDERLINE:
        return new UnderlineAnnotationElement(t2);
      case E.SQUIGGLY:
        return new SquigglyAnnotationElement(t2);
      case E.STRIKEOUT:
        return new StrikeOutAnnotationElement(t2);
      case E.STAMP:
        return new StampAnnotationElement(t2);
      case E.FILEATTACHMENT:
        return new FileAttachmentAnnotationElement(t2);
      default:
        return new AnnotationElement(t2);
    }
  }
}
class AnnotationElement {
  #hr = null;
  #dr = false;
  #cr = null;
  constructor(t2, { isRenderable: e2 = false, ignoreBorder: i2 = false, createQuadrilaterals: s2 = false } = {}) {
    this.isRenderable = e2;
    this.data = t2.data;
    this.layer = t2.layer;
    this.linkService = t2.linkService;
    this.downloadManager = t2.downloadManager;
    this.imageResourcesPath = t2.imageResourcesPath;
    this.renderForms = t2.renderForms;
    this.svgFactory = t2.svgFactory;
    this.annotationStorage = t2.annotationStorage;
    this.enableComment = t2.enableComment;
    this.enableScripting = t2.enableScripting;
    this.hasJSActions = t2.hasJSActions;
    this._fieldObjects = t2.fieldObjects;
    this.parent = t2.parent;
    e2 && (this.container = this._createContainer(i2));
    s2 && this._createQuadrilaterals();
  }
  static _hasPopupData({ contentsObj: t2, richText: e2 }) {
    return !(!t2?.str && !e2?.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return AnnotationElement._hasPopupData(this.data) || this.enableComment && !!this.commentText;
  }
  get commentData() {
    const { data: t2 } = this, e2 = this.annotationStorage?.getEditor(t2.id);
    return e2 ? e2.getData() : t2;
  }
  get hasCommentButton() {
    return this.enableComment && this.hasPopupElement;
  }
  get commentButtonPosition() {
    const t2 = this.annotationStorage?.getEditor(this.data.id);
    if (t2) return t2.commentButtonPositionInPage;
    const { quadPoints: e2, inkLists: i2, rect: s2 } = this.data;
    let n2 = -1 / 0, r2 = -1 / 0;
    if (e2?.length >= 8) {
      for (let t3 = 0; t3 < e2.length; t3 += 8) if (e2[t3 + 1] > r2) {
        r2 = e2[t3 + 1];
        n2 = e2[t3 + 2];
      } else e2[t3 + 1] === r2 && (n2 = Math.max(n2, e2[t3 + 2]));
      return [n2, r2];
    }
    if (i2?.length >= 1) {
      for (const t3 of i2) for (let e3 = 0, i3 = t3.length; e3 < i3; e3 += 2) if (t3[e3 + 1] > r2) {
        r2 = t3[e3 + 1];
        n2 = t3[e3];
      } else t3[e3 + 1] === r2 && (n2 = Math.max(n2, t3[e3]));
      if (n2 !== 1 / 0) return [n2, r2];
    }
    return s2 ? [s2[2], s2[3]] : null;
  }
  _normalizePoint(t2) {
    const { page: { view: e2 }, viewport: { rawDims: { pageWidth: i2, pageHeight: s2, pageX: n2, pageY: r2 } } } = this.parent;
    t2[1] = e2[3] - t2[1] + e2[1];
    t2[0] = 100 * (t2[0] - n2) / i2;
    t2[1] = 100 * (t2[1] - r2) / s2;
    return t2;
  }
  get commentText() {
    const { data: t2 } = this;
    return this.annotationStorage.getRawValue(`${u}${t2.id}`)?.popup?.contents || t2.contentsObj?.str || "";
  }
  set commentText(t2) {
    const { data: e2 } = this, i2 = { deleted: !t2, contents: t2 || "" };
    this.annotationStorage.updateEditor(e2.id, { popup: i2 }) || this.annotationStorage.setValue(`${u}${e2.id}`, { id: e2.id, annotationType: e2.annotationType, pageIndex: this.parent.page._pageIndex, popup: i2, popupRef: e2.popupRef, modificationDate: /* @__PURE__ */ new Date() });
    t2 || this.removePopup();
  }
  removePopup() {
    (this.#cr?.popup || this.popup)?.remove();
    this.#cr = this.popup = null;
  }
  updateEdited(t2) {
    if (!this.container) return;
    t2.rect && (this.#hr ||= { rect: this.data.rect.slice(0) });
    const { rect: e2, popup: i2 } = t2;
    e2 && this.#ur(e2);
    let s2 = this.#cr?.popup || this.popup;
    if (!s2 && i2?.text) {
      this._createPopup(i2);
      s2 = this.#cr.popup;
    }
    if (s2) {
      s2.updateEdited(t2);
      if (i2?.deleted) {
        s2.remove();
        this.#cr = null;
        this.popup = null;
      }
    }
  }
  resetEdited() {
    if (this.#hr) {
      this.#ur(this.#hr.rect);
      this.#cr?.popup.resetEdited();
      this.#hr = null;
    }
  }
  #ur(t2) {
    const { container: { style: e2 }, data: { rect: i2, rotation: s2 }, parent: { viewport: { rawDims: { pageWidth: n2, pageHeight: r2, pageX: a2, pageY: o2 } } } } = this;
    i2?.splice(0, 4, ...t2);
    e2.left = 100 * (t2[0] - a2) / n2 + "%";
    e2.top = 100 * (r2 - t2[3] + o2) / r2 + "%";
    if (0 === s2) {
      e2.width = 100 * (t2[2] - t2[0]) / n2 + "%";
      e2.height = 100 * (t2[3] - t2[1]) / r2 + "%";
    } else this.setRotation(s2);
  }
  _createContainer(t2) {
    const { data: e2, parent: { page: i2, viewport: s2 } } = this, n2 = document.createElement("section");
    n2.setAttribute("data-annotation-id", e2.id);
    this instanceof WidgetAnnotationElement || this instanceof LinkAnnotationElement || (n2.tabIndex = 0);
    const { style: r2 } = n2;
    r2.zIndex = this.parent.zIndex;
    this.parent.zIndex += 2;
    e2.alternativeText && (n2.title = e2.alternativeText);
    e2.noRotate && n2.classList.add("norotate");
    if (!e2.rect || this instanceof PopupAnnotationElement) {
      const { rotation: t3 } = e2;
      e2.hasOwnCanvas || 0 === t3 || this.setRotation(t3, n2);
      return n2;
    }
    const { width: a2, height: o2 } = this;
    if (!t2 && e2.borderStyle.width > 0) {
      r2.borderWidth = `${e2.borderStyle.width}px`;
      const t3 = e2.borderStyle.horizontalCornerRadius, i3 = e2.borderStyle.verticalCornerRadius;
      if (t3 > 0 || i3 > 0) {
        const e3 = `calc(${t3}px * var(--total-scale-factor)) / calc(${i3}px * var(--total-scale-factor))`;
        r2.borderRadius = e3;
      } else if (this instanceof RadioButtonWidgetAnnotationElement) {
        const t4 = `calc(${a2}px * var(--total-scale-factor)) / calc(${o2}px * var(--total-scale-factor))`;
        r2.borderRadius = t4;
      }
      switch (e2.borderStyle.style) {
        case C:
          r2.borderStyle = "solid";
          break;
        case _:
          r2.borderStyle = "dashed";
          break;
        case S:
          warn("Unimplemented border style: beveled");
          break;
        case T:
          warn("Unimplemented border style: inset");
          break;
        case D:
          r2.borderBottomStyle = "solid";
      }
      const s3 = e2.borderColor || null;
      if (s3) {
        this.#dr = true;
        r2.borderColor = Util.makeHexColor(0 | s3[0], 0 | s3[1], 0 | s3[2]);
      } else r2.borderWidth = 0;
    }
    const l2 = Util.normalizeRect([e2.rect[0], i2.view[3] - e2.rect[1] + i2.view[1], e2.rect[2], i2.view[3] - e2.rect[3] + i2.view[1]]), { pageWidth: h2, pageHeight: d2, pageX: c2, pageY: u2 } = s2.rawDims;
    r2.left = 100 * (l2[0] - c2) / h2 + "%";
    r2.top = 100 * (l2[1] - u2) / d2 + "%";
    const { rotation: p2 } = e2;
    if (e2.hasOwnCanvas || 0 === p2) {
      r2.width = 100 * a2 / h2 + "%";
      r2.height = 100 * o2 / d2 + "%";
    } else this.setRotation(p2, n2);
    return n2;
  }
  setRotation(t2, e2 = this.container) {
    if (!this.data.rect) return;
    const { pageWidth: i2, pageHeight: s2 } = this.parent.viewport.rawDims;
    let { width: n2, height: r2 } = this;
    t2 % 180 != 0 && ([n2, r2] = [r2, n2]);
    e2.style.width = 100 * n2 / i2 + "%";
    e2.style.height = 100 * r2 / s2 + "%";
    e2.setAttribute("data-main-rotation", (360 - t2) % 360);
  }
  get _commonActions() {
    const setColor = (t2, e2, i2) => {
      const s2 = i2.detail[t2], n2 = s2[0], r2 = s2.slice(1);
      i2.target.style[e2] = ColorConverters[`${n2}_HTML`](r2);
      this.annotationStorage.setValue(this.data.id, { [e2]: ColorConverters[`${n2}_rgb`](r2) });
    };
    return shadow(this, "_commonActions", { display: (t2) => {
      const { display: e2 } = t2.detail, i2 = e2 % 2 == 1;
      this.container.style.visibility = i2 ? "hidden" : "visible";
      this.annotationStorage.setValue(this.data.id, { noView: i2, noPrint: 1 === e2 || 2 === e2 });
    }, print: (t2) => {
      this.annotationStorage.setValue(this.data.id, { noPrint: !t2.detail.print });
    }, hidden: (t2) => {
      const { hidden: e2 } = t2.detail;
      this.container.style.visibility = e2 ? "hidden" : "visible";
      this.annotationStorage.setValue(this.data.id, { noPrint: e2, noView: e2 });
    }, focus: (t2) => {
      setTimeout(() => t2.target.focus({ preventScroll: false }), 0);
    }, userName: (t2) => {
      t2.target.title = t2.detail.userName;
    }, readonly: (t2) => {
      t2.target.disabled = t2.detail.readonly;
    }, required: (t2) => {
      this._setRequired(t2.target, t2.detail.required);
    }, bgColor: (t2) => {
      setColor("bgColor", "backgroundColor", t2);
    }, fillColor: (t2) => {
      setColor("fillColor", "backgroundColor", t2);
    }, fgColor: (t2) => {
      setColor("fgColor", "color", t2);
    }, textColor: (t2) => {
      setColor("textColor", "color", t2);
    }, borderColor: (t2) => {
      setColor("borderColor", "borderColor", t2);
    }, strokeColor: (t2) => {
      setColor("strokeColor", "borderColor", t2);
    }, rotation: (t2) => {
      const e2 = t2.detail.rotation;
      this.setRotation(e2);
      this.annotationStorage.setValue(this.data.id, { rotation: e2 });
    } });
  }
  _dispatchEventFromSandbox(t2, e2) {
    const i2 = this._commonActions;
    for (const s2 of Object.keys(e2.detail)) {
      const n2 = t2[s2] || i2[s2];
      n2?.(e2);
    }
  }
  _setDefaultPropertiesFromJS(t2) {
    if (!this.enableScripting) return;
    const e2 = this.annotationStorage.getRawValue(this.data.id);
    if (!e2) return;
    const i2 = this._commonActions;
    for (const [s2, n2] of Object.entries(e2)) {
      const r2 = i2[s2];
      if (r2) {
        r2({ detail: { [s2]: n2 }, target: t2 });
        delete e2[s2];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container) return;
    const { quadPoints: t2 } = this.data;
    if (!t2) return;
    const [e2, i2, s2, n2] = this.data.rect.map((t3) => Math.fround(t3));
    if (8 === t2.length) {
      const [r3, a3, o3, l3] = t2.subarray(2, 6);
      if (s2 === r3 && n2 === a3 && e2 === o3 && i2 === l3) return;
    }
    const { style: r2 } = this.container;
    let a2;
    if (this.#dr) {
      const { borderColor: t3, borderWidth: e3 } = r2;
      r2.borderWidth = 0;
      a2 = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${t3}" stroke-width="${e3}">`];
      this.container.classList.add("hasBorder");
    }
    const o2 = s2 - e2, l2 = n2 - i2, { svgFactory: h2 } = this, d2 = h2.createElement("svg");
    d2.classList.add("quadrilateralsContainer");
    d2.setAttribute("width", 0);
    d2.setAttribute("height", 0);
    d2.role = "none";
    const c2 = h2.createElement("defs");
    d2.append(c2);
    const u2 = h2.createElement("clipPath"), p2 = `clippath_${this.data.id}`;
    u2.setAttribute("id", p2);
    u2.setAttribute("clipPathUnits", "objectBoundingBox");
    c2.append(u2);
    for (let i3 = 2, s3 = t2.length; i3 < s3; i3 += 8) {
      const s4 = t2[i3], r3 = t2[i3 + 1], d3 = t2[i3 + 2], c3 = t2[i3 + 3], p3 = h2.createElement("rect"), g2 = (d3 - e2) / o2, m2 = (n2 - r3) / l2, f2 = (s4 - d3) / o2, b2 = (r3 - c3) / l2;
      p3.setAttribute("x", g2);
      p3.setAttribute("y", m2);
      p3.setAttribute("width", f2);
      p3.setAttribute("height", b2);
      u2.append(p3);
      a2?.push(`<rect vector-effect="non-scaling-stroke" x="${g2}" y="${m2}" width="${f2}" height="${b2}"/>`);
    }
    if (this.#dr) {
      a2.push("</g></svg>')");
      r2.backgroundImage = a2.join("");
    }
    this.container.append(d2);
    this.container.style.clipPath = `url(#${p2})`;
  }
  _createPopup(t2 = null) {
    const { data: e2 } = this;
    let i2, s2;
    if (t2) {
      i2 = { str: t2.text };
      s2 = t2.date;
    } else {
      i2 = e2.contentsObj;
      s2 = e2.modificationDate;
    }
    const n2 = this.#cr = new PopupAnnotationElement({ data: { color: e2.color, titleObj: e2.titleObj, modificationDate: s2, contentsObj: i2, richText: e2.richText, parentRect: e2.rect, borderStyle: 0, id: `popup_${e2.id}`, rotation: e2.rotation, noRotate: true }, linkService: this.linkService, parent: this.parent, elements: [this] });
    this.parent._commentManager || this.parent.div.append(n2.render());
  }
  get hasPopupElement() {
    return !!(this.#cr || this.popup || this.data.popupRef);
  }
  get extraPopupElement() {
    return this.#cr;
  }
  render() {
    unreachable("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t2, e2 = null) {
    const i2 = [];
    if (this._fieldObjects) {
      const s2 = this._fieldObjects[t2];
      if (s2) for (const { page: t3, id: n2, exportValues: r2 } of s2) {
        if (-1 === t3) continue;
        if (n2 === e2) continue;
        const s3 = "string" == typeof r2 ? r2 : null, a2 = document.querySelector(`[data-element-id="${n2}"]`);
        !a2 || Lt.has(a2) ? i2.push({ id: n2, exportValue: s3, domElement: a2 }) : warn(`_getElementsByName - element not allowed: ${n2}`);
      }
      return i2;
    }
    for (const s2 of document.getElementsByName(t2)) {
      const { exportValue: t3 } = s2, n2 = s2.getAttribute("data-element-id");
      n2 !== e2 && (Lt.has(s2) && i2.push({ id: n2, exportValue: t3, domElement: s2 }));
    }
    return i2;
  }
  show() {
    this.container && (this.container.hidden = false);
    this.popup?.maybeShow();
  }
  hide() {
    this.container && (this.container.hidden = true);
    this.popup?.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t2 = this.getElementsToTriggerPopup();
    if (Array.isArray(t2)) for (const e2 of t2) e2.classList.add("highlightArea");
    else t2.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable) return;
    const { annotationEditorType: t2, data: { id: e2 } } = this;
    this.container.addEventListener("dblclick", () => {
      this.linkService.eventBus?.dispatch("switchannotationeditormode", { source: this, mode: t2, editId: e2, mustEnterInEditMode: true });
    });
  }
  get width() {
    return this.data.rect[2] - this.data.rect[0];
  }
  get height() {
    return this.data.rect[3] - this.data.rect[1];
  }
}
class EditorAnnotationElement extends AnnotationElement {
  constructor(t2) {
    super(t2, { isRenderable: true, ignoreBorder: true });
    this.editor = t2.editor;
  }
  render() {
    this.container.className = "editorAnnotation";
    return this.container;
  }
  createOrUpdatePopup() {
    const { editor: t2 } = this;
    if (t2.hasComment) {
      this._createPopup(t2.comment);
      this.extraPopupElement.popup.renderCommentButton();
    }
  }
  get hasCommentButton() {
    return this.enableComment && this.editor.hasComment;
  }
  get commentButtonPosition() {
    return this.editor.commentButtonPositionInPage;
  }
  get commentText() {
    return this.editor.comment.text;
  }
  set commentText(t2) {
    this.editor.comment = t2;
    t2 || this.removePopup();
  }
  get commentData() {
    return this.editor.getData();
  }
  remove() {
    this.container.remove();
    this.container = null;
    this.removePopup();
  }
}
class LinkAnnotationElement extends AnnotationElement {
  constructor(t2, e2 = null) {
    super(t2, { isRenderable: true, ignoreBorder: !!e2?.ignoreBorder, createQuadrilaterals: true });
    this.isTooltipOnly = t2.data.isTooltipOnly;
  }
  render() {
    const { data: t2, linkService: e2 } = this, i2 = document.createElement("a");
    i2.setAttribute("data-element-id", t2.id);
    let s2 = false;
    if (t2.url) {
      e2.addLinkAttributes(i2, t2.url, t2.newWindow);
      s2 = true;
    } else if (t2.action) {
      this._bindNamedAction(i2, t2.action, t2.overlaidText);
      s2 = true;
    } else if (t2.attachment) {
      this.#pr(i2, t2.attachment, t2.overlaidText, t2.attachmentDest);
      s2 = true;
    } else if (t2.setOCGState) {
      this.#gr(i2, t2.setOCGState, t2.overlaidText);
      s2 = true;
    } else if (t2.dest) {
      this._bindLink(i2, t2.dest, t2.overlaidText);
      s2 = true;
    } else {
      if (t2.actions && (t2.actions.Action || t2.actions["Mouse Up"] || t2.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
        this._bindJSAction(i2, t2);
        s2 = true;
      }
      if (t2.resetForm) {
        this._bindResetFormAction(i2, t2.resetForm);
        s2 = true;
      } else if (this.isTooltipOnly && !s2) {
        this._bindLink(i2, "");
        s2 = true;
      }
    }
    this.container.classList.add("linkAnnotation");
    s2 && this.container.append(i2);
    return this.container;
  }
  #mr() {
    this.container.setAttribute("data-internal-link", "");
  }
  _bindLink(t2, e2, i2 = "") {
    t2.href = this.linkService.getDestinationHash(e2);
    t2.onclick = () => {
      e2 && this.linkService.goToDestination(e2);
      return false;
    };
    (e2 || "" === e2) && this.#mr();
    i2 && (t2.title = i2);
  }
  _bindNamedAction(t2, e2, i2 = "") {
    t2.href = this.linkService.getAnchorUrl("");
    t2.onclick = () => {
      this.linkService.executeNamedAction(e2);
      return false;
    };
    i2 && (t2.title = i2);
    this.#mr();
  }
  #pr(t2, e2, i2 = "", s2 = null) {
    t2.href = this.linkService.getAnchorUrl("");
    e2.description ? t2.title = e2.description : i2 && (t2.title = i2);
    t2.onclick = () => {
      this.downloadManager?.openOrDownloadData(e2.content, e2.filename, s2);
      return false;
    };
    this.#mr();
  }
  #gr(t2, e2, i2 = "") {
    t2.href = this.linkService.getAnchorUrl("");
    t2.onclick = () => {
      this.linkService.executeSetOCGState(e2);
      return false;
    };
    i2 && (t2.title = i2);
    this.#mr();
  }
  _bindJSAction(t2, e2) {
    t2.href = this.linkService.getAnchorUrl("");
    const i2 = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const s2 of Object.keys(e2.actions)) {
      const n2 = i2.get(s2);
      n2 && (t2[n2] = () => {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2.id, name: s2 } });
        return false;
      });
    }
    e2.overlaidText && (t2.title = e2.overlaidText);
    t2.onclick || (t2.onclick = () => false);
    this.#mr();
  }
  _bindResetFormAction(t2, e2) {
    const i2 = t2.onclick;
    i2 || (t2.href = this.linkService.getAnchorUrl(""));
    this.#mr();
    if (this._fieldObjects) t2.onclick = () => {
      i2?.();
      const { fields: t3, refs: s2, include: n2 } = e2, r2 = [];
      if (0 !== t3.length || 0 !== s2.length) {
        const e3 = new Set(s2);
        for (const i3 of t3) {
          const t4 = this._fieldObjects[i3] || [];
          for (const { id: i4 } of t4) e3.add(i4);
        }
        for (const t4 of Object.values(this._fieldObjects)) for (const i3 of t4) e3.has(i3.id) === n2 && r2.push(i3);
      } else for (const t4 of Object.values(this._fieldObjects)) r2.push(...t4);
      const a2 = this.annotationStorage, o2 = [];
      for (const t4 of r2) {
        const { id: e3 } = t4;
        o2.push(e3);
        switch (t4.type) {
          case "text": {
            const i4 = t4.defaultValue || "";
            a2.setValue(e3, { value: i4 });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const i4 = t4.defaultValue === t4.exportValues;
            a2.setValue(e3, { value: i4 });
            break;
          }
          case "combobox":
          case "listbox": {
            const i4 = t4.defaultValue || "";
            a2.setValue(e3, { value: i4 });
            break;
          }
          default:
            continue;
        }
        const i3 = document.querySelector(`[data-element-id="${e3}"]`);
        i3 && (Lt.has(i3) ? i3.dispatchEvent(new Event("resetform")) : warn(`_bindResetFormAction - element not allowed: ${e3}`));
      }
      this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: "app", ids: o2, name: "ResetForm" } });
      return false;
    };
    else {
      warn('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.');
      i2 || (t2.onclick = () => false);
    }
  }
}
class TextAnnotationElement extends AnnotationElement {
  constructor(t2) {
    super(t2, { isRenderable: true });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t2 = document.createElement("img");
    t2.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
    t2.setAttribute("data-l10n-id", "pdfjs-text-annotation-type");
    t2.setAttribute("data-l10n-args", JSON.stringify({ type: this.data.name }));
    !this.data.popupRef && this.hasPopupData && this._createPopup();
    this.container.append(t2);
    return this.container;
  }
}
class WidgetAnnotationElement extends AnnotationElement {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t2) {
    if (this.data.hasOwnCanvas) {
      "CANVAS" === t2.previousSibling?.nodeName && (t2.previousSibling.hidden = true);
      t2.hidden = false;
    }
  }
  _getKeyModifier(t2) {
    return util_FeatureTest.platform.isMac ? t2.metaKey : t2.ctrlKey;
  }
  _setEventListener(t2, e2, i2, s2, n2) {
    i2.includes("mouse") ? t2.addEventListener(i2, (t3) => {
      this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: s2, value: n2(t3), shift: t3.shiftKey, modifier: this._getKeyModifier(t3) } });
    }) : t2.addEventListener(i2, (t3) => {
      if ("blur" === i2) {
        if (!e2.focused || !t3.relatedTarget) return;
        e2.focused = false;
      } else if ("focus" === i2) {
        if (e2.focused) return;
        e2.focused = true;
      }
      n2 && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: s2, value: n2(t3) } });
    });
  }
  _setEventListeners(t2, e2, i2, s2) {
    for (const [n2, r2] of i2) if ("Action" === r2 || this.data.actions?.[r2]) {
      "Focus" !== r2 && "Blur" !== r2 || (e2 ||= { focused: false });
      this._setEventListener(t2, e2, n2, r2, s2);
      "Focus" !== r2 || this.data.actions?.Blur ? "Blur" !== r2 || this.data.actions?.Focus || this._setEventListener(t2, e2, "focus", "Focus", null) : this._setEventListener(t2, e2, "blur", "Blur", null);
    }
  }
  _setBackgroundColor(t2) {
    const e2 = this.data.backgroundColor || null;
    t2.style.backgroundColor = null === e2 ? "transparent" : Util.makeHexColor(e2[0], e2[1], e2[2]);
  }
  _setTextStyle(t2) {
    const e2 = ["left", "center", "right"], { fontColor: s2 } = this.data.defaultAppearanceData, n2 = this.data.defaultAppearanceData.fontSize || 9, r2 = t2.style;
    let a2;
    const roundToOneDecimal = (t3) => Math.round(10 * t3) / 10;
    if (this.data.multiLine) {
      const t3 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2), e3 = t3 / (Math.round(t3 / (i * n2)) || 1);
      a2 = Math.min(n2, roundToOneDecimal(e3 / i));
    } else {
      const t3 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
      a2 = Math.min(n2, roundToOneDecimal(t3 / i));
    }
    r2.fontSize = `calc(${a2}px * var(--total-scale-factor))`;
    r2.color = Util.makeHexColor(s2[0], s2[1], s2[2]);
    null !== this.data.textAlignment && (r2.textAlign = e2[this.data.textAlignment]);
  }
  _setRequired(t2, e2) {
    e2 ? t2.setAttribute("required", true) : t2.removeAttribute("required");
    t2.setAttribute("aria-required", e2);
  }
}
class TextWidgetAnnotationElement extends WidgetAnnotationElement {
  constructor(t2) {
    super(t2, { isRenderable: t2.renderForms || t2.data.hasOwnCanvas || !t2.data.hasAppearance && !!t2.data.fieldValue });
  }
  setPropertyOnSiblings(t2, e2, i2, s2) {
    const n2 = this.annotationStorage;
    for (const r2 of this._getElementsByName(t2.name, t2.id)) {
      r2.domElement && (r2.domElement[e2] = i2);
      n2.setValue(r2.id, { [s2]: i2 });
    }
  }
  render() {
    const t2 = this.annotationStorage, e2 = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let i2 = null;
    if (this.renderForms) {
      const s2 = t2.getValue(e2, { value: this.data.fieldValue });
      let n2 = s2.value || "";
      const r2 = t2.getValue(e2, { charLimit: this.data.maxLen }).charLimit;
      r2 && n2.length > r2 && (n2 = n2.slice(0, r2));
      let a2 = s2.formattedValue || this.data.textContent?.join("\n") || null;
      a2 && this.data.comb && (a2 = a2.replaceAll(/\s+/g, ""));
      const o2 = { userValue: n2, formattedValue: a2, lastCommittedValue: null, commitKey: 1, focused: false };
      if (this.data.multiLine) {
        i2 = document.createElement("textarea");
        i2.textContent = a2 ?? n2;
        this.data.doNotScroll && (i2.style.overflowY = "hidden");
      } else {
        i2 = document.createElement("input");
        i2.type = this.data.password ? "password" : "text";
        i2.setAttribute("value", a2 ?? n2);
        this.data.doNotScroll && (i2.style.overflowX = "hidden");
      }
      this.data.hasOwnCanvas && (i2.hidden = true);
      Lt.add(i2);
      i2.setAttribute("data-element-id", e2);
      i2.disabled = this.data.readOnly;
      i2.name = this.data.fieldName;
      i2.tabIndex = 0;
      const { datetimeFormat: l2, datetimeType: h2, timeStep: d2 } = this.data, c2 = !!h2 && this.enableScripting;
      l2 && (i2.title = l2);
      this._setRequired(i2, this.data.required);
      r2 && (i2.maxLength = r2);
      i2.addEventListener("input", (s3) => {
        t2.setValue(e2, { value: s3.target.value });
        this.setPropertyOnSiblings(i2, "value", s3.target.value, "value");
        o2.formattedValue = null;
      });
      i2.addEventListener("resetform", (t3) => {
        const e3 = this.data.defaultFieldValue ?? "";
        i2.value = o2.userValue = e3;
        o2.formattedValue = null;
      });
      let blurListener = (t3) => {
        const { formattedValue: e3 } = o2;
        null != e3 && (t3.target.value = e3);
        t3.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        i2.addEventListener("focus", (t3) => {
          if (o2.focused) return;
          const { target: e3 } = t3;
          if (c2) {
            e3.type = h2;
            d2 && (e3.step = d2);
          }
          if (o2.userValue) {
            const t4 = o2.userValue;
            if (c2) if ("time" === h2) {
              const i3 = new Date(t4), s4 = [i3.getHours(), i3.getMinutes(), i3.getSeconds()];
              e3.value = s4.map((t5) => t5.toString().padStart(2, "0")).join(":");
            } else e3.value = new Date(t4 - Bt).toISOString().split("date" === h2 ? "T" : ".", 1)[0];
            else e3.value = t4;
          }
          o2.lastCommittedValue = e3.value;
          o2.commitKey = 1;
          this.data.actions?.Focus || (o2.focused = true);
        });
        i2.addEventListener("updatefromsandbox", (i3) => {
          this.showElementAndHideCanvas(i3.target);
          const s4 = { value(i4) {
            o2.userValue = i4.detail.value ?? "";
            c2 || t2.setValue(e2, { value: o2.userValue.toString() });
            i4.target.value = o2.userValue;
          }, formattedValue(i4) {
            const { formattedValue: s5 } = i4.detail;
            o2.formattedValue = s5;
            null != s5 && i4.target !== document.activeElement && (i4.target.value = s5);
            const n3 = { formattedValue: s5 };
            c2 && (n3.value = s5);
            t2.setValue(e2, n3);
          }, selRange(t3) {
            t3.target.setSelectionRange(...t3.detail.selRange);
          }, charLimit: (i4) => {
            const { charLimit: s5 } = i4.detail, { target: n3 } = i4;
            if (0 === s5) {
              n3.removeAttribute("maxLength");
              return;
            }
            n3.setAttribute("maxLength", s5);
            let r3 = o2.userValue;
            if (r3 && !(r3.length <= s5)) {
              r3 = r3.slice(0, s5);
              n3.value = o2.userValue = r3;
              t2.setValue(e2, { value: r3 });
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: r3, willCommit: true, commitKey: 1, selStart: n3.selectionStart, selEnd: n3.selectionEnd } });
            }
          } };
          this._dispatchEventFromSandbox(s4, i3);
        });
        i2.addEventListener("keydown", (t3) => {
          o2.commitKey = 1;
          let i3 = -1;
          "Escape" === t3.key ? i3 = 0 : "Enter" !== t3.key || this.data.multiLine ? "Tab" === t3.key && (o2.commitKey = 3) : i3 = 2;
          if (-1 === i3) return;
          const { value: s4 } = t3.target;
          if (o2.lastCommittedValue !== s4) {
            o2.lastCommittedValue = s4;
            o2.userValue = s4;
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: s4, willCommit: true, commitKey: i3, selStart: t3.target.selectionStart, selEnd: t3.target.selectionEnd } });
          }
        });
        const s3 = blurListener;
        blurListener = null;
        i2.addEventListener("blur", (t3) => {
          if (!o2.focused || !t3.relatedTarget) return;
          this.data.actions?.Blur || (o2.focused = false);
          const { target: i3 } = t3;
          let { value: n3 } = i3;
          if (c2) {
            if (n3 && "time" === h2) {
              const t4 = n3.split(":").map((t5) => parseInt(t5, 10));
              n3 = new Date(2e3, 0, 1, t4[0], t4[1], t4[2] || 0).valueOf();
              i3.step = "";
            } else {
              n3.includes("T") || (n3 = `${n3}T00:00`);
              n3 = new Date(n3).valueOf();
            }
            i3.type = "text";
          }
          o2.userValue = n3;
          o2.lastCommittedValue !== n3 && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: n3, willCommit: true, commitKey: o2.commitKey, selStart: t3.target.selectionStart, selEnd: t3.target.selectionEnd } });
          s3(t3);
        });
        this.data.actions?.Keystroke && i2.addEventListener("beforeinput", (t3) => {
          o2.lastCommittedValue = null;
          const { data: i3, target: s4 } = t3, { value: n3, selectionStart: r3, selectionEnd: a3 } = s4;
          let l3 = r3, h3 = a3;
          switch (t3.inputType) {
            case "deleteWordBackward": {
              const t4 = n3.substring(0, r3).match(/\w*[^\w]*$/);
              t4 && (l3 -= t4[0].length);
              break;
            }
            case "deleteWordForward": {
              const t4 = n3.substring(r3).match(/^[^\w]*\w*/);
              t4 && (h3 += t4[0].length);
              break;
            }
            case "deleteContentBackward":
              r3 === a3 && (l3 -= 1);
              break;
            case "deleteContentForward":
              r3 === a3 && (h3 += 1);
          }
          t3.preventDefault();
          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: n3, change: i3 || "", willCommit: false, selStart: l3, selEnd: h3 } });
        });
        this._setEventListeners(i2, o2, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t3) => t3.target.value);
      }
      blurListener && i2.addEventListener("blur", blurListener);
      if (this.data.comb) {
        const t3 = (this.data.rect[2] - this.data.rect[0]) / r2;
        i2.classList.add("comb");
        i2.style.letterSpacing = `calc(${t3}px * var(--total-scale-factor) - 1ch)`;
      }
    } else {
      i2 = document.createElement("div");
      i2.textContent = this.data.fieldValue;
      i2.style.verticalAlign = "middle";
      i2.style.display = "table-cell";
      this.data.hasOwnCanvas && (i2.hidden = true);
    }
    this._setTextStyle(i2);
    this._setBackgroundColor(i2);
    this._setDefaultPropertiesFromJS(i2);
    this.container.append(i2);
    return this.container;
  }
}
class SignatureWidgetAnnotationElement extends WidgetAnnotationElement {
  constructor(t2) {
    super(t2, { isRenderable: !!t2.data.hasOwnCanvas });
  }
}
class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
  constructor(t2) {
    super(t2, { isRenderable: t2.renderForms });
  }
  render() {
    const t2 = this.annotationStorage, e2 = this.data, i2 = e2.id;
    let s2 = t2.getValue(i2, { value: e2.exportValue === e2.fieldValue }).value;
    if ("string" == typeof s2) {
      s2 = "Off" !== s2;
      t2.setValue(i2, { value: s2 });
    }
    this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const n2 = document.createElement("input");
    Lt.add(n2);
    n2.setAttribute("data-element-id", i2);
    n2.disabled = e2.readOnly;
    this._setRequired(n2, this.data.required);
    n2.type = "checkbox";
    n2.name = e2.fieldName;
    s2 && n2.setAttribute("checked", true);
    n2.setAttribute("exportValue", e2.exportValue);
    n2.tabIndex = 0;
    n2.addEventListener("change", (s3) => {
      const { name: n3, checked: r2 } = s3.target;
      for (const s4 of this._getElementsByName(n3, i2)) {
        const i3 = r2 && s4.exportValue === e2.exportValue;
        s4.domElement && (s4.domElement.checked = i3);
        t2.setValue(s4.id, { value: i3 });
      }
      t2.setValue(i2, { value: r2 });
    });
    n2.addEventListener("resetform", (t3) => {
      const i3 = e2.defaultFieldValue || "Off";
      t3.target.checked = i3 === e2.exportValue;
    });
    if (this.enableScripting && this.hasJSActions) {
      n2.addEventListener("updatefromsandbox", (e3) => {
        const s3 = { value(e4) {
          e4.target.checked = "Off" !== e4.detail.value;
          t2.setValue(i2, { value: e4.target.checked });
        } };
        this._dispatchEventFromSandbox(s3, e3);
      });
      this._setEventListeners(n2, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t3) => t3.target.checked);
    }
    this._setBackgroundColor(n2);
    this._setDefaultPropertiesFromJS(n2);
    this.container.append(n2);
    return this.container;
  }
}
class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
  constructor(t2) {
    super(t2, { isRenderable: t2.renderForms });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t2 = this.annotationStorage, e2 = this.data, i2 = e2.id;
    let s2 = t2.getValue(i2, { value: e2.fieldValue === e2.buttonValue }).value;
    if ("string" == typeof s2) {
      s2 = s2 !== e2.buttonValue;
      t2.setValue(i2, { value: s2 });
    }
    if (s2) for (const s3 of this._getElementsByName(e2.fieldName, i2)) t2.setValue(s3.id, { value: false });
    const n2 = document.createElement("input");
    Lt.add(n2);
    n2.setAttribute("data-element-id", i2);
    n2.disabled = e2.readOnly;
    this._setRequired(n2, this.data.required);
    n2.type = "radio";
    n2.name = e2.fieldName;
    s2 && n2.setAttribute("checked", true);
    n2.tabIndex = 0;
    n2.addEventListener("change", (e3) => {
      const { name: s3, checked: n3 } = e3.target;
      for (const e4 of this._getElementsByName(s3, i2)) t2.setValue(e4.id, { value: false });
      t2.setValue(i2, { value: n3 });
    });
    n2.addEventListener("resetform", (t3) => {
      const i3 = e2.defaultFieldValue;
      t3.target.checked = null != i3 && i3 === e2.buttonValue;
    });
    if (this.enableScripting && this.hasJSActions) {
      const s3 = e2.buttonValue;
      n2.addEventListener("updatefromsandbox", (e3) => {
        const n3 = { value: (e4) => {
          const n4 = s3 === e4.detail.value;
          for (const s4 of this._getElementsByName(e4.target.name)) {
            const e5 = n4 && s4.id === i2;
            s4.domElement && (s4.domElement.checked = e5);
            t2.setValue(s4.id, { value: e5 });
          }
        } };
        this._dispatchEventFromSandbox(n3, e3);
      });
      this._setEventListeners(n2, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t3) => t3.target.checked);
    }
    this._setBackgroundColor(n2);
    this._setDefaultPropertiesFromJS(n2);
    this.container.append(n2);
    return this.container;
  }
}
class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
  constructor(t2) {
    super(t2, { ignoreBorder: t2.data.hasAppearance });
  }
  render() {
    const t2 = super.render();
    t2.classList.add("buttonWidgetAnnotation", "pushButton");
    const e2 = t2.lastChild;
    if (this.enableScripting && this.hasJSActions && e2) {
      this._setDefaultPropertiesFromJS(e2);
      e2.addEventListener("updatefromsandbox", (t3) => {
        this._dispatchEventFromSandbox({}, t3);
      });
    }
    return t2;
  }
}
class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
  constructor(t2) {
    super(t2, { isRenderable: t2.renderForms });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t2 = this.annotationStorage, e2 = this.data.id, i2 = t2.getValue(e2, { value: this.data.fieldValue }), s2 = document.createElement("select");
    Lt.add(s2);
    s2.setAttribute("data-element-id", e2);
    s2.disabled = this.data.readOnly;
    this._setRequired(s2, this.data.required);
    s2.name = this.data.fieldName;
    s2.tabIndex = 0;
    let n2 = this.data.combo && this.data.options.length > 0;
    if (!this.data.combo) {
      s2.size = this.data.options.length;
      this.data.multiSelect && (s2.multiple = true);
    }
    s2.addEventListener("resetform", (t3) => {
      const e3 = this.data.defaultFieldValue;
      for (const t4 of s2.options) t4.selected = t4.value === e3;
    });
    for (const t3 of this.data.options) {
      const e3 = document.createElement("option");
      e3.textContent = t3.displayValue;
      e3.value = t3.exportValue;
      if (i2.value.includes(t3.exportValue)) {
        e3.setAttribute("selected", true);
        n2 = false;
      }
      s2.append(e3);
    }
    let r2 = null;
    if (n2) {
      const t3 = document.createElement("option");
      t3.value = " ";
      t3.setAttribute("hidden", true);
      t3.setAttribute("selected", true);
      s2.prepend(t3);
      r2 = () => {
        t3.remove();
        s2.removeEventListener("input", r2);
        r2 = null;
      };
      s2.addEventListener("input", r2);
    }
    const getValue = (t3) => {
      const e3 = t3 ? "value" : "textContent", { options: i3, multiple: n3 } = s2;
      return n3 ? Array.prototype.filter.call(i3, (t4) => t4.selected).map((t4) => t4[e3]) : -1 === i3.selectedIndex ? null : i3[i3.selectedIndex][e3];
    };
    let a2 = getValue(false);
    const getItems = (t3) => {
      const e3 = t3.target.options;
      return Array.prototype.map.call(e3, (t4) => ({ displayValue: t4.textContent, exportValue: t4.value }));
    };
    if (this.enableScripting && this.hasJSActions) {
      s2.addEventListener("updatefromsandbox", (i3) => {
        const n3 = { value(i4) {
          r2?.();
          const n4 = i4.detail.value, o2 = new Set(Array.isArray(n4) ? n4 : [n4]);
          for (const t3 of s2.options) t3.selected = o2.has(t3.value);
          t2.setValue(e2, { value: getValue(true) });
          a2 = getValue(false);
        }, multipleSelection(t3) {
          s2.multiple = true;
        }, remove(i4) {
          const n4 = s2.options, r3 = i4.detail.remove;
          n4[r3].selected = false;
          s2.remove(r3);
          if (n4.length > 0) {
            -1 === Array.prototype.findIndex.call(n4, (t3) => t3.selected) && (n4[0].selected = true);
          }
          t2.setValue(e2, { value: getValue(true), items: getItems(i4) });
          a2 = getValue(false);
        }, clear(i4) {
          for (; 0 !== s2.length; ) s2.remove(0);
          t2.setValue(e2, { value: null, items: [] });
          a2 = getValue(false);
        }, insert(i4) {
          const { index: n4, displayValue: r3, exportValue: o2 } = i4.detail.insert, l2 = s2.children[n4], h2 = document.createElement("option");
          h2.textContent = r3;
          h2.value = o2;
          l2 ? l2.before(h2) : s2.append(h2);
          t2.setValue(e2, { value: getValue(true), items: getItems(i4) });
          a2 = getValue(false);
        }, items(i4) {
          const { items: n4 } = i4.detail;
          for (; 0 !== s2.length; ) s2.remove(0);
          for (const t3 of n4) {
            const { displayValue: e3, exportValue: i5 } = t3, n5 = document.createElement("option");
            n5.textContent = e3;
            n5.value = i5;
            s2.append(n5);
          }
          s2.options.length > 0 && (s2.options[0].selected = true);
          t2.setValue(e2, { value: getValue(true), items: getItems(i4) });
          a2 = getValue(false);
        }, indices(i4) {
          const s3 = new Set(i4.detail.indices);
          for (const t3 of i4.target.options) t3.selected = s3.has(t3.index);
          t2.setValue(e2, { value: getValue(true) });
          a2 = getValue(false);
        }, editable(t3) {
          t3.target.disabled = !t3.detail.editable;
        } };
        this._dispatchEventFromSandbox(n3, i3);
      });
      s2.addEventListener("input", (i3) => {
        const s3 = getValue(true), n3 = getValue(false);
        t2.setValue(e2, { value: s3 });
        i3.preventDefault();
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: a2, change: n3, changeEx: s3, willCommit: false, commitKey: 1, keyDown: false } });
      });
      this._setEventListeners(s2, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (t3) => t3.target.value);
    } else s2.addEventListener("input", function(i3) {
      t2.setValue(e2, { value: getValue(true) });
    });
    this.data.combo && this._setTextStyle(s2);
    this._setBackgroundColor(s2);
    this._setDefaultPropertiesFromJS(s2);
    this.container.append(s2);
    return this.container;
  }
}
class PopupAnnotationElement extends AnnotationElement {
  constructor(t2) {
    const { data: e2, elements: i2, parent: s2 } = t2, n2 = !!s2._commentManager;
    super(t2, { isRenderable: !n2 && AnnotationElement._hasPopupData(e2) });
    this.elements = i2;
    if (n2 && AnnotationElement._hasPopupData(e2)) {
      const t3 = this.popup = this.#fr();
      for (const e3 of i2) e3.popup = t3;
    } else this.popup = null;
  }
  #fr() {
    return new PopupElement({ container: this.container, color: this.data.color, titleObj: this.data.titleObj, modificationDate: this.data.modificationDate || this.data.creationDate, contentsObj: this.data.contentsObj, richText: this.data.richText, rect: this.data.rect, parentRect: this.data.parentRect || null, parent: this.parent, elements: this.elements, open: this.data.open, commentManager: this.parent._commentManager });
  }
  render() {
    const { container: t2 } = this;
    t2.classList.add("popupAnnotation");
    t2.role = "comment";
    const e2 = this.popup = this.#fr(), i2 = [];
    for (const t3 of this.elements) {
      t3.popup = e2;
      t3.container.ariaHasPopup = "dialog";
      i2.push(t3.data.id);
      t3.addHighlightArea();
    }
    this.container.setAttribute("aria-controls", i2.map((t3) => `${z}${t3}`).join(","));
    return this.container;
  }
}
class PopupElement {
  #U = null;
  #br = this.#nr.bind(this);
  #wr = this.#yr.bind(this);
  #Ar = this.#vr.bind(this);
  #xr = this.#Er.bind(this);
  #Cr = null;
  #vt = null;
  #_r = null;
  #Sr = null;
  #Tr = null;
  #Dr = null;
  #Mr = null;
  #kr = false;
  #Pr = null;
  #Ir = null;
  #D = null;
  #Fr = null;
  #Rr = null;
  #pe = null;
  #Lr = null;
  #he = null;
  #Br = null;
  #hr = null;
  #Or = false;
  #Nr = null;
  #Ur = null;
  constructor({ container: t2, color: e2, elements: i2, titleObj: s2, modificationDate: n2, contentsObj: r2, richText: a2, parent: o2, rect: l2, parentRect: h2, open: d2, commentManager: c2 = null }) {
    this.#vt = t2;
    this.#Br = s2;
    this.#_r = r2;
    this.#he = a2;
    this.#Dr = o2;
    this.#Cr = e2;
    this.#Lr = l2;
    this.#Mr = h2;
    this.#Tr = i2;
    this.#U = c2;
    this.#Nr = i2[0];
    this.#Sr = PDFDateString.toDateObject(n2);
    this.trigger = i2.flatMap((t3) => t3.getElementsToTriggerPopup());
    if (c2) this.renderCommentButton();
    else {
      this.#Hr();
      this.#vt.hidden = true;
      d2 && this.#Er();
    }
  }
  #Hr() {
    if (this.#Ir) return;
    this.#Ir = new AbortController();
    const { signal: t2 } = this.#Ir;
    for (const e2 of this.trigger) {
      e2.addEventListener("click", this.#xr, { signal: t2 });
      e2.addEventListener("pointerenter", this.#Ar, { signal: t2 });
      e2.addEventListener("pointerleave", this.#wr, { signal: t2 });
      e2.classList.add("popupTriggerArea");
    }
    for (const e2 of this.#Tr) e2.container?.addEventListener("keydown", this.#br, { signal: t2 });
  }
  #zr() {
    const t2 = this.#Tr.find((t3) => t3.hasCommentButton);
    t2 && (this.#Rr = t2._normalizePoint(t2.commentButtonPosition));
  }
  renderCommentButton() {
    if (this.#Fr) return;
    this.#Rr || this.#zr();
    if (!this.#Rr) return;
    const { signal: t2 } = this.#Ir = new AbortController(), e2 = !!this.#Nr.extraPopupElement, togglePopup = () => {
      this.#U.toggleCommentPopup(this, true, void 0, !e2);
    }, showPopup = () => {
      this.#U.toggleCommentPopup(this, false, true, !e2);
    }, hidePopup = () => {
      this.#U.toggleCommentPopup(this, false, false);
    };
    if (e2) {
      this.#Fr = this.#Nr.container;
      for (const e3 of this.trigger) {
        e3.ariaHasPopup = "dialog";
        e3.ariaControls = "commentPopup";
        e3.addEventListener("keydown", this.#br, { signal: t2 });
        e3.addEventListener("click", togglePopup, { signal: t2 });
        e3.addEventListener("pointerenter", showPopup, { signal: t2 });
        e3.addEventListener("pointerleave", hidePopup, { signal: t2 });
        e3.classList.add("popupTriggerArea");
      }
    } else {
      const e3 = this.#Fr = document.createElement("button");
      e3.className = "annotationCommentButton";
      const i2 = this.#Nr.container;
      e3.style.zIndex = i2.style.zIndex + 1;
      e3.tabIndex = 0;
      e3.ariaHasPopup = "dialog";
      e3.ariaControls = "commentPopup";
      e3.setAttribute("data-l10n-id", "pdfjs-show-comment-button");
      this.#Gr();
      this.#Wr();
      e3.addEventListener("keydown", this.#br, { signal: t2 });
      e3.addEventListener("click", togglePopup, { signal: t2 });
      e3.addEventListener("pointerenter", showPopup, { signal: t2 });
      e3.addEventListener("pointerleave", hidePopup, { signal: t2 });
      i2.after(e3);
    }
  }
  #Wr() {
    if (this.#Nr.extraPopupElement && !this.#Nr.editor) return;
    this.renderCommentButton();
    const [t2, e2] = this.#Rr, { style: i2 } = this.#Fr;
    i2.left = `calc(${t2}%)`;
    i2.top = `calc(${e2}% - var(--comment-button-dim))`;
  }
  #Gr() {
    if (!this.#Nr.extraPopupElement) {
      this.renderCommentButton();
      this.#Fr.style.backgroundColor = this.commentButtonColor || "";
    }
  }
  get commentButtonColor() {
    const { color: t2, opacity: e2 } = this.#Nr.commentData;
    return t2 ? this.#Dr._commentManager.makeCommentColor(t2, e2) : null;
  }
  focusCommentButton() {
    setTimeout(() => {
      this.#Fr?.focus();
    }, 0);
  }
  getData() {
    const { richText: t2, color: e2, opacity: i2, creationDate: s2, modificationDate: n2 } = this.#Nr.commentData;
    return { contentsObj: { str: this.comment }, richText: t2, color: e2, opacity: i2, creationDate: s2, modificationDate: n2 };
  }
  get elementBeforePopup() {
    return this.#Fr;
  }
  get comment() {
    this.#Ur ||= this.#Nr.commentText;
    return this.#Ur;
  }
  set comment(t2) {
    t2 !== this.comment && (this.#Nr.commentText = this.#Ur = t2);
  }
  get parentBoundingClientRect() {
    return this.#Nr.layer.getBoundingClientRect();
  }
  setCommentButtonStates({ selected: t2, hasPopup: e2 }) {
    if (this.#Fr) {
      this.#Fr.classList.toggle("selected", t2);
      this.#Fr.ariaExpanded = e2;
    }
  }
  setSelectedCommentButton(t2) {
    this.#Fr.classList.toggle("selected", t2);
  }
  get commentPopupPosition() {
    if (this.#pe) return this.#pe;
    const { x: t2, y: e2, height: i2 } = this.#Fr.getBoundingClientRect(), { x: s2, y: n2, width: r2, height: a2 } = this.#Nr.layer.getBoundingClientRect();
    return [(t2 - s2) / r2, (e2 + i2 - n2) / a2];
  }
  set commentPopupPosition(t2) {
    this.#pe = t2;
  }
  hasDefaultPopupPosition() {
    return null === this.#pe;
  }
  get commentButtonPosition() {
    return this.#Rr;
  }
  get commentButtonWidth() {
    return this.#Fr.getBoundingClientRect().width / this.parentBoundingClientRect.width;
  }
  editComment(t2) {
    const [e2, i2] = this.#pe || this.commentButtonPosition.map((t3) => t3 / 100), s2 = this.parentBoundingClientRect, { x: n2, y: r2, width: a2, height: o2 } = s2;
    this.#U.showDialog(null, this, n2 + e2 * a2, r2 + i2 * o2, { ...t2, parentDimensions: s2 });
  }
  render() {
    if (this.#Pr) return;
    const t2 = this.#Pr = document.createElement("div");
    t2.className = "popup";
    if (this.#Cr) {
      const e3 = t2.style.outlineColor = Util.makeHexColor(...this.#Cr);
      t2.style.backgroundColor = `color-mix(in srgb, ${e3} 30%, white)`;
    }
    const e2 = document.createElement("span");
    e2.className = "header";
    if (this.#Br?.str) {
      const t3 = document.createElement("span");
      t3.className = "title";
      e2.append(t3);
      ({ dir: t3.dir, str: t3.textContent } = this.#Br);
    }
    t2.append(e2);
    if (this.#Sr) {
      const t3 = document.createElement("time");
      t3.className = "popupDate";
      t3.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string");
      t3.setAttribute("data-l10n-args", JSON.stringify({ dateObj: this.#Sr.valueOf() }));
      t3.dateTime = this.#Sr.toISOString();
      e2.append(t3);
    }
    renderRichText({ html: this.#Vr || this.#_r.str, dir: this.#_r?.dir, className: "popupContent" }, t2);
    this.#vt.append(t2);
  }
  get #Vr() {
    const t2 = this.#he, e2 = this.#_r;
    return !t2?.str || e2?.str && e2.str !== t2.str ? null : this.#he.html || null;
  }
  get #$r() {
    return this.#Vr?.attributes?.style?.fontSize || 0;
  }
  get #jr() {
    return this.#Vr?.attributes?.style?.color || null;
  }
  #qr(t2) {
    const e2 = [], i2 = { str: t2, html: { name: "div", attributes: { dir: "auto" }, children: [{ name: "p", children: e2 }] } }, s2 = { style: { color: this.#jr, fontSize: this.#$r ? `calc(${this.#$r}px * var(--total-scale-factor))` : "" } };
    for (const i3 of t2.split("\n")) e2.push({ name: "span", value: i3, attributes: s2 });
    return i2;
  }
  #nr(t2) {
    t2.altKey || t2.shiftKey || t2.ctrlKey || t2.metaKey || ("Enter" === t2.key || "Escape" === t2.key && this.#kr) && this.#Er();
  }
  updateEdited({ rect: t2, popup: e2, deleted: i2 }) {
    if (this.#U) {
      if (i2) {
        this.remove();
        this.#Ur = null;
      } else if (e2) if (e2.deleted) this.remove();
      else {
        this.#Gr();
        this.#Ur = e2.text;
      }
      if (t2) {
        this.#Rr = null;
        this.#zr();
        this.#Wr();
      }
    } else if (i2 || e2?.deleted) this.remove();
    else {
      this.#Hr();
      this.#hr ||= { contentsObj: this.#_r, richText: this.#he };
      t2 && (this.#D = null);
      if (e2 && e2.text) {
        this.#he = this.#qr(e2.text);
        this.#Sr = PDFDateString.toDateObject(e2.date);
        this.#_r = null;
      }
      this.#Pr?.remove();
      this.#Pr = null;
    }
  }
  resetEdited() {
    if (this.#hr) {
      ({ contentsObj: this.#_r, richText: this.#he } = this.#hr);
      this.#hr = null;
      this.#Pr?.remove();
      this.#Pr = null;
      this.#D = null;
    }
  }
  remove() {
    this.#Ir?.abort();
    this.#Ir = null;
    this.#Pr?.remove();
    this.#Pr = null;
    this.#Or = false;
    this.#kr = false;
    this.#Fr?.remove();
    this.#Fr = null;
    if (this.trigger) for (const t2 of this.trigger) t2.classList.remove("popupTriggerArea");
  }
  #Xr() {
    if (null !== this.#D) return;
    const { page: { view: t2 }, viewport: { rawDims: { pageWidth: e2, pageHeight: i2, pageX: s2, pageY: n2 } } } = this.#Dr;
    let r2 = !!this.#Mr, a2 = r2 ? this.#Mr : this.#Lr;
    for (const t3 of this.#Tr) if (!a2 || null !== Util.intersect(t3.data.rect, a2)) {
      a2 = t3.data.rect;
      r2 = true;
      break;
    }
    const o2 = Util.normalizeRect([a2[0], t2[3] - a2[1] + t2[1], a2[2], t2[3] - a2[3] + t2[1]]), l2 = r2 ? a2[2] - a2[0] + 5 : 0, h2 = o2[0] + l2, d2 = o2[1];
    this.#D = [100 * (h2 - s2) / e2, 100 * (d2 - n2) / i2];
    const { style: c2 } = this.#vt;
    c2.left = `${this.#D[0]}%`;
    c2.top = `${this.#D[1]}%`;
  }
  #Er() {
    if (this.#U) this.#U.toggleCommentPopup(this, false);
    else {
      this.#kr = !this.#kr;
      if (this.#kr) {
        this.#vr();
        this.#vt.addEventListener("click", this.#xr);
        this.#vt.addEventListener("keydown", this.#br);
      } else {
        this.#yr();
        this.#vt.removeEventListener("click", this.#xr);
        this.#vt.removeEventListener("keydown", this.#br);
      }
    }
  }
  #vr() {
    this.#Pr || this.render();
    if (this.isVisible) this.#kr && this.#vt.classList.add("focused");
    else {
      this.#Xr();
      this.#vt.hidden = false;
      this.#vt.style.zIndex = parseInt(this.#vt.style.zIndex) + 1e3;
    }
  }
  #yr() {
    this.#vt.classList.remove("focused");
    if (!this.#kr && this.isVisible) {
      this.#vt.hidden = true;
      this.#vt.style.zIndex = parseInt(this.#vt.style.zIndex) - 1e3;
    }
  }
  forceHide() {
    this.#Or = this.isVisible;
    this.#Or && (this.#vt.hidden = true);
  }
  maybeShow() {
    if (!this.#U) {
      this.#Hr();
      if (this.#Or) {
        this.#Pr || this.#vr();
        this.#Or = false;
        this.#vt.hidden = false;
      }
    }
  }
  get isVisible() {
    return !this.#U && false === this.#vt.hidden;
  }
}
class FreeTextAnnotationElement extends AnnotationElement {
  constructor(t2) {
    super(t2, { isRenderable: true, ignoreBorder: true });
    this.textContent = t2.data.textContent;
    this.textPosition = t2.data.textPosition;
    this.annotationEditorType = p.FREETEXT;
  }
  render() {
    this.container.classList.add("freeTextAnnotation");
    if (this.textContent) {
      const t2 = document.createElement("div");
      t2.classList.add("annotationTextContent");
      t2.setAttribute("role", "comment");
      for (const e2 of this.textContent) {
        const i2 = document.createElement("span");
        i2.textContent = e2;
        t2.append(i2);
      }
      this.container.append(t2);
    }
    !this.data.popupRef && this.hasPopupData && this._createPopup();
    this._editOnDoubleClick();
    return this.container;
  }
}
class LineAnnotationElement extends AnnotationElement {
  #Kr = null;
  constructor(t2) {
    super(t2, { isRenderable: true, ignoreBorder: true });
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const { data: t2, width: e2, height: i2 } = this, s2 = this.svgFactory.create(e2, i2, true), n2 = this.#Kr = this.svgFactory.createElement("svg:line");
    n2.setAttribute("x1", t2.rect[2] - t2.lineCoordinates[0]);
    n2.setAttribute("y1", t2.rect[3] - t2.lineCoordinates[1]);
    n2.setAttribute("x2", t2.rect[2] - t2.lineCoordinates[2]);
    n2.setAttribute("y2", t2.rect[3] - t2.lineCoordinates[3]);
    n2.setAttribute("stroke-width", t2.borderStyle.width || 1);
    n2.setAttribute("stroke", "transparent");
    n2.setAttribute("fill", "transparent");
    s2.append(n2);
    this.container.append(s2);
    !t2.popupRef && this.hasPopupData && this._createPopup();
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#Kr;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class SquareAnnotationElement extends AnnotationElement {
  #Yr = null;
  constructor(t2) {
    super(t2, { isRenderable: true, ignoreBorder: true });
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const { data: t2, width: e2, height: i2 } = this, s2 = this.svgFactory.create(e2, i2, true), n2 = t2.borderStyle.width, r2 = this.#Yr = this.svgFactory.createElement("svg:rect");
    r2.setAttribute("x", n2 / 2);
    r2.setAttribute("y", n2 / 2);
    r2.setAttribute("width", e2 - n2);
    r2.setAttribute("height", i2 - n2);
    r2.setAttribute("stroke-width", n2 || 1);
    r2.setAttribute("stroke", "transparent");
    r2.setAttribute("fill", "transparent");
    s2.append(r2);
    this.container.append(s2);
    !t2.popupRef && this.hasPopupData && this._createPopup();
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#Yr;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class CircleAnnotationElement extends AnnotationElement {
  #Qr = null;
  constructor(t2) {
    super(t2, { isRenderable: true, ignoreBorder: true });
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const { data: t2, width: e2, height: i2 } = this, s2 = this.svgFactory.create(e2, i2, true), n2 = t2.borderStyle.width, r2 = this.#Qr = this.svgFactory.createElement("svg:ellipse");
    r2.setAttribute("cx", e2 / 2);
    r2.setAttribute("cy", i2 / 2);
    r2.setAttribute("rx", e2 / 2 - n2 / 2);
    r2.setAttribute("ry", i2 / 2 - n2 / 2);
    r2.setAttribute("stroke-width", n2 || 1);
    r2.setAttribute("stroke", "transparent");
    r2.setAttribute("fill", "transparent");
    s2.append(r2);
    this.container.append(s2);
    !t2.popupRef && this.hasPopupData && this._createPopup();
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#Qr;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class PolylineAnnotationElement extends AnnotationElement {
  #Jr = null;
  constructor(t2) {
    super(t2, { isRenderable: true, ignoreBorder: true });
    this.containerClassName = "polylineAnnotation";
    this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const { data: { rect: t2, vertices: e2, borderStyle: i2, popupRef: s2 }, width: n2, height: r2 } = this;
    if (!e2) return this.container;
    const a2 = this.svgFactory.create(n2, r2, true);
    let o2 = [];
    for (let i3 = 0, s3 = e2.length; i3 < s3; i3 += 2) {
      const s4 = e2[i3] - t2[0], n3 = t2[3] - e2[i3 + 1];
      o2.push(`${s4},${n3}`);
    }
    o2 = o2.join(" ");
    const l2 = this.#Jr = this.svgFactory.createElement(this.svgElementName);
    l2.setAttribute("points", o2);
    l2.setAttribute("stroke-width", i2.width || 1);
    l2.setAttribute("stroke", "transparent");
    l2.setAttribute("fill", "transparent");
    a2.append(l2);
    this.container.append(a2);
    !s2 && this.hasPopupData && this._createPopup();
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#Jr;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class PolygonAnnotationElement extends PolylineAnnotationElement {
  constructor(t2) {
    super(t2);
    this.containerClassName = "polygonAnnotation";
    this.svgElementName = "svg:polygon";
  }
}
class CaretAnnotationElement extends AnnotationElement {
  constructor(t2) {
    super(t2, { isRenderable: true, ignoreBorder: true });
  }
  render() {
    this.container.classList.add("caretAnnotation");
    !this.data.popupRef && this.hasPopupData && this._createPopup();
    return this.container;
  }
}
class InkAnnotationElement extends AnnotationElement {
  #Zr = null;
  #ta = [];
  constructor(t2) {
    super(t2, { isRenderable: true, ignoreBorder: true });
    this.containerClassName = "inkAnnotation";
    this.svgElementName = "svg:polyline";
    this.annotationEditorType = "InkHighlight" === this.data.it ? p.HIGHLIGHT : p.INK;
  }
  #ea(t2, e2) {
    switch (t2) {
      case 90:
        return { transform: `rotate(90) translate(${-e2[0]},${e2[1]}) scale(1,-1)`, width: e2[3] - e2[1], height: e2[2] - e2[0] };
      case 180:
        return { transform: `rotate(180) translate(${-e2[2]},${e2[1]}) scale(1,-1)`, width: e2[2] - e2[0], height: e2[3] - e2[1] };
      case 270:
        return { transform: `rotate(270) translate(${-e2[2]},${e2[3]}) scale(1,-1)`, width: e2[3] - e2[1], height: e2[2] - e2[0] };
      default:
        return { transform: `translate(${-e2[0]},${e2[3]}) scale(1,-1)`, width: e2[2] - e2[0], height: e2[3] - e2[1] };
    }
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const { data: { rect: t2, rotation: e2, inkLists: i2, borderStyle: s2, popupRef: n2 } } = this, { transform: r2, width: a2, height: o2 } = this.#ea(e2, t2), l2 = this.svgFactory.create(a2, o2, true), h2 = this.#Zr = this.svgFactory.createElement("svg:g");
    l2.append(h2);
    h2.setAttribute("stroke-width", s2.width || 1);
    h2.setAttribute("stroke-linecap", "round");
    h2.setAttribute("stroke-linejoin", "round");
    h2.setAttribute("stroke-miterlimit", 10);
    h2.setAttribute("stroke", "transparent");
    h2.setAttribute("fill", "transparent");
    h2.setAttribute("transform", r2);
    for (let t3 = 0, e3 = i2.length; t3 < e3; t3++) {
      const e4 = this.svgFactory.createElement(this.svgElementName);
      this.#ta.push(e4);
      e4.setAttribute("points", i2[t3].join(","));
      h2.append(e4);
    }
    !n2 && this.hasPopupData && this._createPopup();
    this.container.append(l2);
    this._editOnDoubleClick();
    return this.container;
  }
  updateEdited(t2) {
    super.updateEdited(t2);
    const { thickness: e2, points: i2, rect: s2 } = t2, n2 = this.#Zr;
    e2 >= 0 && n2.setAttribute("stroke-width", e2 || 1);
    if (i2) for (let t3 = 0, e3 = this.#ta.length; t3 < e3; t3++) this.#ta[t3].setAttribute("points", i2[t3].join(","));
    if (s2) {
      const { transform: t3, width: e3, height: i3 } = this.#ea(this.data.rotation, s2);
      n2.parentElement.setAttribute("viewBox", `0 0 ${e3} ${i3}`);
      n2.setAttribute("transform", t3);
    }
  }
  getElementsToTriggerPopup() {
    return this.#ta;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class HighlightAnnotationElement extends AnnotationElement {
  constructor(t2) {
    super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
    this.annotationEditorType = p.HIGHLIGHT;
  }
  render() {
    const { data: { overlaidText: t2, popupRef: e2 } } = this;
    !e2 && this.hasPopupData && this._createPopup();
    this.container.classList.add("highlightAnnotation");
    this._editOnDoubleClick();
    if (t2) {
      const e3 = document.createElement("mark");
      e3.classList.add("overlaidText");
      e3.textContent = t2;
      this.container.append(e3);
    }
    return this.container;
  }
}
class UnderlineAnnotationElement extends AnnotationElement {
  constructor(t2) {
    super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
  }
  render() {
    const { data: { overlaidText: t2, popupRef: e2 } } = this;
    !e2 && this.hasPopupData && this._createPopup();
    this.container.classList.add("underlineAnnotation");
    if (t2) {
      const e3 = document.createElement("u");
      e3.classList.add("overlaidText");
      e3.textContent = t2;
      this.container.append(e3);
    }
    return this.container;
  }
}
class SquigglyAnnotationElement extends AnnotationElement {
  constructor(t2) {
    super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
  }
  render() {
    const { data: { overlaidText: t2, popupRef: e2 } } = this;
    !e2 && this.hasPopupData && this._createPopup();
    this.container.classList.add("squigglyAnnotation");
    if (t2) {
      const e3 = document.createElement("u");
      e3.classList.add("overlaidText");
      e3.textContent = t2;
      this.container.append(e3);
    }
    return this.container;
  }
}
class StrikeOutAnnotationElement extends AnnotationElement {
  constructor(t2) {
    super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
  }
  render() {
    const { data: { overlaidText: t2, popupRef: e2 } } = this;
    !e2 && this.hasPopupData && this._createPopup();
    this.container.classList.add("strikeoutAnnotation");
    if (t2) {
      const e3 = document.createElement("s");
      e3.classList.add("overlaidText");
      e3.textContent = t2;
      this.container.append(e3);
    }
    return this.container;
  }
}
class StampAnnotationElement extends AnnotationElement {
  constructor(t2) {
    super(t2, { isRenderable: true, ignoreBorder: true });
    this.annotationEditorType = p.STAMP;
  }
  render() {
    this.container.classList.add("stampAnnotation");
    this.container.setAttribute("role", "img");
    !this.data.popupRef && this.hasPopupData && this._createPopup();
    this._editOnDoubleClick();
    return this.container;
  }
}
class FileAttachmentAnnotationElement extends AnnotationElement {
  #ia = null;
  constructor(t2) {
    super(t2, { isRenderable: true });
    const { file: e2 } = this.data;
    this.filename = e2.filename;
    this.content = e2.content;
    this.linkService.eventBus?.dispatch("fileattachmentannotation", { source: this, ...e2 });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const { container: t2, data: e2 } = this;
    let i2;
    if (e2.hasAppearance || 0 === e2.fillAlpha) i2 = document.createElement("div");
    else {
      i2 = document.createElement("img");
      i2.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(e2.name) ? "paperclip" : "pushpin"}.svg`;
      e2.fillAlpha && e2.fillAlpha < 1 && (i2.style = `filter: opacity(${Math.round(100 * e2.fillAlpha)}%);`);
    }
    i2.addEventListener("dblclick", this.#sa.bind(this));
    this.#ia = i2;
    const { isMac: s2 } = util_FeatureTest.platform;
    t2.addEventListener("keydown", (t3) => {
      "Enter" === t3.key && (s2 ? t3.metaKey : t3.ctrlKey) && this.#sa();
    });
    !e2.popupRef && this.hasPopupData ? this._createPopup() : i2.classList.add("popupTriggerArea");
    t2.append(i2);
    return t2;
  }
  getElementsToTriggerPopup() {
    return this.#ia;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
  #sa() {
    this.downloadManager?.openOrDownloadData(this.content, this.filename);
  }
}
class AnnotationLayer {
  #na = null;
  #ra = null;
  #B = null;
  #aa = /* @__PURE__ */ new Map();
  #oa = null;
  #la = null;
  constructor({ div: t2, accessibilityManager: e2, annotationCanvasMap: i2, annotationEditorUIManager: s2, page: n2, viewport: r2, structTreeLayer: a2, commentManager: o2, linkService: l2, annotationStorage: h2 }) {
    this.div = t2;
    this.#na = e2;
    this.#ra = i2;
    this.#oa = a2 || null;
    this.#la = l2 || null;
    this.#B = h2 || new AnnotationStorage();
    this.page = n2;
    this.viewport = r2;
    this.zIndex = 0;
    this._annotationEditorUIManager = s2;
    this._commentManager = o2 || null;
  }
  hasEditableAnnotations() {
    return this.#aa.size > 0;
  }
  async #ha(t2, e2, i2) {
    const s2 = t2.firstChild || t2, n2 = s2.id = `${z}${e2}`, r2 = await this.#oa?.getAriaAttributes(n2);
    if (r2) for (const [t3, e3] of r2) s2.setAttribute(t3, e3);
    if (i2) i2.at(-1).container.after(t2);
    else {
      this.div.append(t2);
      this.#na?.moveElementInDOM(this.div, t2, s2, false);
    }
  }
  async render(t2) {
    const { annotations: e2 } = t2, i2 = this.div;
    setLayerDimensions(i2, this.viewport);
    const s2 = /* @__PURE__ */ new Map(), n2 = { data: null, layer: i2, linkService: this.#la, downloadManager: t2.downloadManager, imageResourcesPath: t2.imageResourcesPath || "", renderForms: false !== t2.renderForms, svgFactory: new DOMSVGFactory(), annotationStorage: this.#B, enableComment: true === t2.enableComment, enableScripting: true === t2.enableScripting, hasJSActions: t2.hasJSActions, fieldObjects: t2.fieldObjects, parent: this, elements: null };
    for (const t3 of e2) {
      if (t3.noHTML) continue;
      const e3 = t3.annotationType === E.POPUP;
      if (e3) {
        const e4 = s2.get(t3.id);
        if (!e4) continue;
        n2.elements = e4;
      } else if (t3.rect[2] === t3.rect[0] || t3.rect[3] === t3.rect[1]) continue;
      n2.data = t3;
      const i3 = AnnotationElementFactory.create(n2);
      if (!i3.isRenderable) continue;
      if (!e3 && t3.popupRef) {
        const e4 = s2.get(t3.popupRef);
        e4 ? e4.push(i3) : s2.set(t3.popupRef, [i3]);
      }
      const r2 = i3.render();
      t3.hidden && (r2.style.visibility = "hidden");
      await this.#ha(r2, t3.id, n2.elements);
      i3.extraPopupElement?.popup?.renderCommentButton();
      if (i3._isEditable) {
        this.#aa.set(i3.data.id, i3);
        this._annotationEditorUIManager?.renderAnnotationElement(i3);
      }
    }
    this.#da();
  }
  async addLinkAnnotations(t2) {
    const e2 = { data: null, layer: this.div, linkService: this.#la, svgFactory: new DOMSVGFactory(), parent: this };
    for (const i2 of t2) {
      i2.borderStyle ||= AnnotationLayer._defaultBorderStyle;
      e2.data = i2;
      const t3 = AnnotationElementFactory.create(e2);
      if (!t3.isRenderable) continue;
      const s2 = t3.render();
      await this.#ha(s2, i2.id, null);
    }
  }
  update({ viewport: t2 }) {
    const e2 = this.div;
    this.viewport = t2;
    setLayerDimensions(e2, { rotation: t2.rotation });
    this.#da();
    e2.hidden = false;
  }
  #da() {
    if (!this.#ra) return;
    const t2 = this.div;
    for (const [e2, i2] of this.#ra) {
      const s2 = t2.querySelector(`[data-annotation-id="${e2}"]`);
      if (!s2) continue;
      i2.className = "annotationContent";
      const { firstChild: n2 } = s2;
      n2 ? "CANVAS" === n2.nodeName ? n2.replaceWith(i2) : n2.classList.contains("annotationContent") ? n2.after(i2) : n2.before(i2) : s2.append(i2);
      const r2 = this.#aa.get(e2);
      if (r2) if (r2._hasNoCanvas) {
        this._annotationEditorUIManager?.setMissingCanvas(e2, s2.id, i2);
        r2._hasNoCanvas = false;
      } else r2.canvas = i2;
    }
    this.#ra.clear();
  }
  getEditableAnnotations() {
    return Array.from(this.#aa.values());
  }
  getEditableAnnotation(t2) {
    return this.#aa.get(t2);
  }
  addFakeAnnotation(t2) {
    const { div: e2 } = this, { id: i2, rotation: s2 } = t2, n2 = new EditorAnnotationElement({ data: { id: i2, rect: t2.getPDFRect(), rotation: s2 }, editor: t2, layer: e2, parent: this, enableComment: !!this._commentManager, linkService: this.#la, annotationStorage: this.#B }), r2 = n2.render();
    e2.append(r2);
    this.#na?.moveElementInDOM(e2, r2, r2, false);
    n2.createOrUpdatePopup();
    return n2;
  }
  static get _defaultBorderStyle() {
    return shadow(this, "_defaultBorderStyle", Object.freeze({ width: 1, rawWidth: 1, style: C, dashArray: [3], horizontalCornerRadius: 0, verticalCornerRadius: 0 }));
  }
}
const Ot = /\r\n?|\n/g;
class FreeTextEditor extends AnnotationEditor {
  #ca = "";
  #ua = `${this.id}-editor`;
  #pa = null;
  #$r;
  _colorPicker = null;
  static _freeTextDefaultContent = "";
  static _internalPadding = 0;
  static _defaultColor = null;
  static _defaultFontSize = 10;
  static get _keyboardManager() {
    const t2 = FreeTextEditor.prototype, arrowChecker = (t3) => t3.isEmpty(), e2 = AnnotationEditorUIManager.TRANSLATE_SMALL, i2 = AnnotationEditorUIManager.TRANSLATE_BIG;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], t2.commitOrRemove, { bubbles: true }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], t2.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], t2._translateEmpty, { args: [-e2, 0], checker: arrowChecker }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t2._translateEmpty, { args: [-i2, 0], checker: arrowChecker }], [["ArrowRight", "mac+ArrowRight"], t2._translateEmpty, { args: [e2, 0], checker: arrowChecker }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t2._translateEmpty, { args: [i2, 0], checker: arrowChecker }], [["ArrowUp", "mac+ArrowUp"], t2._translateEmpty, { args: [0, -e2], checker: arrowChecker }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t2._translateEmpty, { args: [0, -i2], checker: arrowChecker }], [["ArrowDown", "mac+ArrowDown"], t2._translateEmpty, { args: [0, e2], checker: arrowChecker }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t2._translateEmpty, { args: [0, i2], checker: arrowChecker }]]));
  }
  static _type = "freetext";
  static _editorType = p.FREETEXT;
  constructor(t2) {
    super({ ...t2, name: "freeTextEditor" });
    this.color = t2.color || FreeTextEditor._defaultColor || AnnotationEditor._defaultLineColor;
    this.#$r = t2.fontSize || FreeTextEditor._defaultFontSize;
    this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert");
  }
  static initialize(t2, e2) {
    AnnotationEditor.initialize(t2, e2);
    const i2 = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i2.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(t2, e2) {
    switch (t2) {
      case g.FREETEXT_SIZE:
        FreeTextEditor._defaultFontSize = e2;
        break;
      case g.FREETEXT_COLOR:
        FreeTextEditor._defaultColor = e2;
    }
  }
  updateParams(t2, e2) {
    switch (t2) {
      case g.FREETEXT_SIZE:
        this.#ga(e2);
        break;
      case g.FREETEXT_COLOR:
        this.#Gr(e2);
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[g.FREETEXT_SIZE, FreeTextEditor._defaultFontSize], [g.FREETEXT_COLOR, FreeTextEditor._defaultColor || AnnotationEditor._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[g.FREETEXT_SIZE, this.#$r], [g.FREETEXT_COLOR, this.color]];
  }
  get toolbarButtons() {
    this._colorPicker ||= new BasicColorPicker(this);
    return [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return g.FREETEXT_COLOR;
  }
  #ga(t2) {
    const setFontsize = (t3) => {
      this.editorDiv.style.fontSize = `calc(${t3}px * var(--total-scale-factor))`;
      this.translate(0, -(t3 - this.#$r) * this.parentScale);
      this.#$r = t3;
      this.#ma();
    }, e2 = this.#$r;
    this.addCommands({ cmd: setFontsize.bind(this, t2), undo: setFontsize.bind(this, e2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: g.FREETEXT_SIZE, overwriteIfSameType: true, keepUndo: true });
  }
  onUpdatedColor() {
    this.editorDiv.style.color = this.color;
    this._colorPicker?.update(this.color);
    super.onUpdatedColor();
  }
  #Gr(t2) {
    const setColor = (t3) => {
      this.color = t3;
      this.onUpdatedColor();
    }, e2 = this.color;
    this.addCommands({ cmd: setColor.bind(this, t2), undo: setColor.bind(this, e2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: g.FREETEXT_COLOR, overwriteIfSameType: true, keepUndo: true });
  }
  _translateEmpty(t2, e2) {
    this._uiManager.translateSelectedEditors(t2, e2, true);
  }
  getInitialTranslation() {
    const t2 = this.parentScale;
    return [-FreeTextEditor._internalPadding * t2, -(FreeTextEditor._internalPadding + this.#$r) * t2];
  }
  rebuild() {
    if (this.parent) {
      super.rebuild();
      null !== this.div && (this.isAttachedToDOM || this.parent.add(this));
    }
  }
  enableEditMode() {
    if (!super.enableEditMode()) return false;
    this.overlayDiv.classList.remove("enabled");
    this.editorDiv.contentEditable = true;
    this._isDraggable = false;
    this.div.removeAttribute("aria-activedescendant");
    this.#pa = new AbortController();
    const t2 = this._uiManager.combinedSignal(this.#pa);
    this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), { signal: t2 });
    this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), { signal: t2 });
    this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), { signal: t2 });
    this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), { signal: t2 });
    this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), { signal: t2 });
    return true;
  }
  disableEditMode() {
    if (!super.disableEditMode()) return false;
    this.overlayDiv.classList.add("enabled");
    this.editorDiv.contentEditable = false;
    this.div.setAttribute("aria-activedescendant", this.#ua);
    this._isDraggable = true;
    this.#pa?.abort();
    this.#pa = null;
    this.div.focus({ preventScroll: true });
    this.isEditing = false;
    this.parent.div.classList.add("freetextEditing");
    return true;
  }
  focusin(t2) {
    if (this._focusEventsAllowed) {
      super.focusin(t2);
      t2.target !== this.editorDiv && this.editorDiv.focus();
    }
  }
  onceAdded(t2) {
    if (!this.width) {
      this.enableEditMode();
      t2 && this.editorDiv.focus();
      this._initialOptions?.isCentered && this.center();
      this._initialOptions = null;
    }
  }
  isEmpty() {
    return !this.editorDiv || "" === this.editorDiv.innerText.trim();
  }
  remove() {
    this.isEditing = false;
    if (this.parent) {
      this.parent.setEditingState(true);
      this.parent.div.classList.add("freetextEditing");
    }
    super.remove();
  }
  #fa() {
    const t2 = [];
    this.editorDiv.normalize();
    let e2 = null;
    for (const i2 of this.editorDiv.childNodes) if (e2?.nodeType !== Node.TEXT_NODE || "BR" !== i2.nodeName) {
      t2.push(FreeTextEditor.#ba(i2));
      e2 = i2;
    }
    return t2.join("\n");
  }
  #ma() {
    const [t2, e2] = this.parentDimensions;
    let i2;
    if (this.isAttachedToDOM) i2 = this.div.getBoundingClientRect();
    else {
      const { currentLayer: t3, div: e3 } = this, s2 = e3.style.display, n2 = e3.classList.contains("hidden");
      e3.classList.remove("hidden");
      e3.style.display = "hidden";
      t3.div.append(this.div);
      i2 = e3.getBoundingClientRect();
      e3.remove();
      e3.style.display = s2;
      e3.classList.toggle("hidden", n2);
    }
    if (this.rotation % 180 == this.parentRotation % 180) {
      this.width = i2.width / t2;
      this.height = i2.height / e2;
    } else {
      this.width = i2.height / t2;
      this.height = i2.width / e2;
    }
    this.fixAndSetPosition();
  }
  commit() {
    if (!this.isInEditMode()) return;
    super.commit();
    this.disableEditMode();
    const t2 = this.#ca, e2 = this.#ca = this.#fa().trimEnd();
    if (t2 === e2) return;
    const setText = (t3) => {
      this.#ca = t3;
      if (t3) {
        this.#wa();
        this._uiManager.rebuild(this);
        this.#ma();
      } else this.remove();
    };
    this.addCommands({ cmd: () => {
      setText(e2);
    }, undo: () => {
      setText(t2);
    }, mustExec: false });
    this.#ma();
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode();
    this.editorDiv.focus();
  }
  keydown(t2) {
    if (t2.target === this.div && "Enter" === t2.key) {
      this.enterInEditMode();
      t2.preventDefault();
    }
  }
  editorDivKeydown(t2) {
    FreeTextEditor._keyboardManager.exec(this, t2);
  }
  editorDivFocus(t2) {
    this.isEditing = true;
  }
  editorDivBlur(t2) {
    this.isEditing = false;
  }
  editorDivInput(t2) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment");
    this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox");
    this.editorDiv.setAttribute("aria-multiline", true);
  }
  get canChangeContent() {
    return true;
  }
  render() {
    if (this.div) return this.div;
    let t2, e2;
    if (this._isCopy || this.annotationElementId) {
      t2 = this.x;
      e2 = this.y;
    }
    super.render();
    this.editorDiv = document.createElement("div");
    this.editorDiv.className = "internal";
    this.editorDiv.setAttribute("id", this.#ua);
    this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2");
    this.editorDiv.setAttribute("data-l10n-attrs", "default-content");
    this.enableEditing();
    this.editorDiv.contentEditable = true;
    const { style: i2 } = this.editorDiv;
    i2.fontSize = `calc(${this.#$r}px * var(--total-scale-factor))`;
    i2.color = this.color;
    this.div.append(this.editorDiv);
    this.overlayDiv = document.createElement("div");
    this.overlayDiv.classList.add("overlay", "enabled");
    this.div.append(this.overlayDiv);
    if (this._isCopy || this.annotationElementId) {
      const [i3, s2] = this.parentDimensions;
      if (this.annotationElementId) {
        const { position: n2 } = this._initialData;
        let [r2, a2] = this.getInitialTranslation();
        [r2, a2] = this.pageTranslationToScreen(r2, a2);
        const [o2, l2] = this.pageDimensions, [h2, d2] = this.pageTranslation;
        let c2, u2;
        switch (this.rotation) {
          case 0:
            c2 = t2 + (n2[0] - h2) / o2;
            u2 = e2 + this.height - (n2[1] - d2) / l2;
            break;
          case 90:
            c2 = t2 + (n2[0] - h2) / o2;
            u2 = e2 - (n2[1] - d2) / l2;
            [r2, a2] = [a2, -r2];
            break;
          case 180:
            c2 = t2 - this.width + (n2[0] - h2) / o2;
            u2 = e2 - (n2[1] - d2) / l2;
            [r2, a2] = [-r2, -a2];
            break;
          case 270:
            c2 = t2 + (n2[0] - h2 - this.height * l2) / o2;
            u2 = e2 + (n2[1] - d2 - this.width * o2) / l2;
            [r2, a2] = [-a2, r2];
        }
        this.setAt(c2 * i3, u2 * s2, r2, a2);
      } else this._moveAfterPaste(t2, e2);
      this.#wa();
      this._isDraggable = true;
      this.editorDiv.contentEditable = false;
    } else {
      this._isDraggable = false;
      this.editorDiv.contentEditable = true;
    }
    return this.div;
  }
  static #ba(t2) {
    return (t2.nodeType === Node.TEXT_NODE ? t2.nodeValue : t2.innerText).replaceAll(Ot, "");
  }
  editorDivPaste(t2) {
    const e2 = t2.clipboardData || window.clipboardData, { types: i2 } = e2;
    if (1 === i2.length && "text/plain" === i2[0]) return;
    t2.preventDefault();
    const s2 = FreeTextEditor.#ya(e2.getData("text") || "").replaceAll(Ot, "\n");
    if (!s2) return;
    const n2 = window.getSelection();
    if (!n2.rangeCount) return;
    this.editorDiv.normalize();
    n2.deleteFromDocument();
    const r2 = n2.getRangeAt(0);
    if (!s2.includes("\n")) {
      r2.insertNode(document.createTextNode(s2));
      this.editorDiv.normalize();
      n2.collapseToStart();
      return;
    }
    const { startContainer: a2, startOffset: o2 } = r2, l2 = [], h2 = [];
    if (a2.nodeType === Node.TEXT_NODE) {
      const t3 = a2.parentElement;
      h2.push(a2.nodeValue.slice(o2).replaceAll(Ot, ""));
      if (t3 !== this.editorDiv) {
        let e3 = l2;
        for (const i3 of this.editorDiv.childNodes) i3 !== t3 ? e3.push(FreeTextEditor.#ba(i3)) : e3 = h2;
      }
      l2.push(a2.nodeValue.slice(0, o2).replaceAll(Ot, ""));
    } else if (a2 === this.editorDiv) {
      let t3 = l2, e3 = 0;
      for (const i3 of this.editorDiv.childNodes) {
        e3++ === o2 && (t3 = h2);
        t3.push(FreeTextEditor.#ba(i3));
      }
    }
    this.#ca = `${l2.join("\n")}${s2}${h2.join("\n")}`;
    this.#wa();
    const d2 = new Range();
    let c2 = Math.sumPrecise(l2.map((t3) => t3.length));
    for (const { firstChild: t3 } of this.editorDiv.childNodes) if (t3.nodeType === Node.TEXT_NODE) {
      const e3 = t3.nodeValue.length;
      if (c2 <= e3) {
        d2.setStart(t3, c2);
        d2.setEnd(t3, c2);
        break;
      }
      c2 -= e3;
    }
    n2.removeAllRanges();
    n2.addRange(d2);
  }
  #wa() {
    this.editorDiv.replaceChildren();
    if (this.#ca) for (const t2 of this.#ca.split("\n")) {
      const e2 = document.createElement("div");
      e2.append(t2 ? document.createTextNode(t2) : document.createElement("br"));
      this.editorDiv.append(e2);
    }
  }
  #Aa() {
    return this.#ca.replaceAll(" ", " ");
  }
  static #ya(t2) {
    return t2.replaceAll(" ", " ");
  }
  get contentDiv() {
    return this.editorDiv;
  }
  getPDFRect() {
    const t2 = FreeTextEditor._internalPadding * this.parentScale;
    return this.getRect(t2, t2);
  }
  static async deserialize(t2, e2, i2) {
    let s2 = null;
    if (t2 instanceof FreeTextAnnotationElement) {
      const { data: { defaultAppearanceData: { fontSize: e3, fontColor: i3 }, rect: n3, rotation: r2, id: a2, popupRef: o2, richText: l2, contentsObj: h2, creationDate: d2, modificationDate: c2 }, textContent: u2, textPosition: g2, parent: { page: { pageNumber: m2 } } } = t2;
      if (!u2 || 0 === u2.length) return null;
      s2 = t2 = { annotationType: p.FREETEXT, color: Array.from(i3), fontSize: e3, value: u2.join("\n"), position: g2, pageIndex: m2 - 1, rect: n3.slice(0), rotation: r2, annotationElementId: a2, id: a2, deleted: false, popupRef: o2, comment: h2?.str || null, richText: l2, creationDate: d2, modificationDate: c2 };
    }
    const n2 = await super.deserialize(t2, e2, i2);
    n2.#$r = t2.fontSize;
    n2.color = Util.makeHexColor(...t2.color);
    n2.#ca = FreeTextEditor.#ya(t2.value);
    n2._initialData = s2;
    t2.comment && n2.setCommentData(t2);
    return n2;
  }
  serialize(t2 = false) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const e2 = AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), i2 = Object.assign(super.serialize(t2), { color: e2, fontSize: this.#$r, value: this.#Aa() });
    this.addComment(i2);
    if (t2) {
      i2.isCopy = true;
      return i2;
    }
    if (this.annotationElementId && !this.#va(i2)) return null;
    i2.id = this.annotationElementId;
    return i2;
  }
  #va(t2) {
    const { value: e2, fontSize: i2, color: s2, pageIndex: n2 } = this._initialData;
    return this.hasEditedComment || this._hasBeenMoved || t2.value !== e2 || t2.fontSize !== i2 || t2.color.some((t3, e3) => t3 !== s2[e3]) || t2.pageIndex !== n2;
  }
  renderAnnotationElement(t2) {
    const e2 = super.renderAnnotationElement(t2);
    if (!e2) return null;
    const { style: i2 } = e2;
    i2.fontSize = `calc(${this.#$r}px * var(--total-scale-factor))`;
    i2.color = this.color;
    e2.replaceChildren();
    for (const t3 of this.#ca.split("\n")) {
      const i3 = document.createElement("div");
      i3.append(t3 ? document.createTextNode(t3) : document.createElement("br"));
      e2.append(i3);
    }
    t2.updateEdited({ rect: this.getPDFRect(), popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : { text: this.#ca } });
    return e2;
  }
  resetAnnotationElement(t2) {
    super.resetAnnotationElement(t2);
    t2.resetEdited();
  }
}
class Outline {
  static PRECISION = 1e-4;
  toSVGPath() {
    unreachable("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    unreachable("Abstract getter `box` must be implemented.");
  }
  serialize(t2, e2) {
    unreachable("Abstract method `serialize` must be implemented.");
  }
  static _rescale(t2, e2, i2, s2, n2, r2) {
    r2 ||= new Float32Array(t2.length);
    for (let a2 = 0, o2 = t2.length; a2 < o2; a2 += 2) {
      r2[a2] = e2 + t2[a2] * s2;
      r2[a2 + 1] = i2 + t2[a2 + 1] * n2;
    }
    return r2;
  }
  static _rescaleAndSwap(t2, e2, i2, s2, n2, r2) {
    r2 ||= new Float32Array(t2.length);
    for (let a2 = 0, o2 = t2.length; a2 < o2; a2 += 2) {
      r2[a2] = e2 + t2[a2 + 1] * s2;
      r2[a2 + 1] = i2 + t2[a2] * n2;
    }
    return r2;
  }
  static _translate(t2, e2, i2, s2) {
    s2 ||= new Float32Array(t2.length);
    for (let n2 = 0, r2 = t2.length; n2 < r2; n2 += 2) {
      s2[n2] = e2 + t2[n2];
      s2[n2 + 1] = i2 + t2[n2 + 1];
    }
    return s2;
  }
  static svgRound(t2) {
    return Math.round(1e4 * t2);
  }
  static _normalizePoint(t2, e2, i2, s2, n2) {
    switch (n2) {
      case 90:
        return [1 - e2 / i2, t2 / s2];
      case 180:
        return [1 - t2 / i2, 1 - e2 / s2];
      case 270:
        return [e2 / i2, 1 - t2 / s2];
      default:
        return [t2 / i2, e2 / s2];
    }
  }
  static _normalizePagePoint(t2, e2, i2) {
    switch (i2) {
      case 90:
        return [1 - e2, t2];
      case 180:
        return [1 - t2, 1 - e2];
      case 270:
        return [e2, 1 - t2];
      default:
        return [t2, e2];
    }
  }
  static createBezierPoints(t2, e2, i2, s2, n2, r2) {
    return [(t2 + 5 * i2) / 6, (e2 + 5 * s2) / 6, (5 * i2 + n2) / 6, (5 * s2 + r2) / 6, (i2 + n2) / 2, (s2 + r2) / 2];
  }
}
class FreeDrawOutliner {
  #xa;
  #Ea = [];
  #Ca;
  #_a;
  #Sa = [];
  #Ta = new Float32Array(18);
  #Da;
  #Ma;
  #ka;
  #Pa;
  #Ia;
  #Fa;
  #Ra = [];
  static #La = 8;
  static #Ba = 2;
  static #Oa = FreeDrawOutliner.#La + FreeDrawOutliner.#Ba;
  constructor({ x: t2, y: e2 }, i2, s2, n2, r2, a2 = 0) {
    this.#xa = i2;
    this.#Fa = n2 * s2;
    this.#_a = r2;
    this.#Ta.set([NaN, NaN, NaN, NaN, t2, e2], 6);
    this.#Ca = a2;
    this.#Pa = FreeDrawOutliner.#La * s2;
    this.#ka = FreeDrawOutliner.#Oa * s2;
    this.#Ia = s2;
    this.#Ra.push(t2, e2);
  }
  isEmpty() {
    return isNaN(this.#Ta[8]);
  }
  #Na() {
    const t2 = this.#Ta.subarray(4, 6), e2 = this.#Ta.subarray(16, 18), [i2, s2, n2, r2] = this.#xa;
    return [(this.#Da + (t2[0] - e2[0]) / 2 - i2) / n2, (this.#Ma + (t2[1] - e2[1]) / 2 - s2) / r2, (this.#Da + (e2[0] - t2[0]) / 2 - i2) / n2, (this.#Ma + (e2[1] - t2[1]) / 2 - s2) / r2];
  }
  add({ x: t2, y: e2 }) {
    this.#Da = t2;
    this.#Ma = e2;
    const [i2, s2, n2, r2] = this.#xa;
    let [a2, o2, l2, h2] = this.#Ta.subarray(8, 12);
    const d2 = t2 - l2, c2 = e2 - h2, u2 = Math.hypot(d2, c2);
    if (u2 < this.#ka) return false;
    const p2 = u2 - this.#Pa, g2 = p2 / u2, m2 = g2 * d2, f2 = g2 * c2;
    let b2 = a2, w2 = o2;
    a2 = l2;
    o2 = h2;
    l2 += m2;
    h2 += f2;
    this.#Ra?.push(t2, e2);
    const y2 = m2 / p2, A2 = -f2 / p2 * this.#Fa, v2 = y2 * this.#Fa;
    this.#Ta.set(this.#Ta.subarray(2, 8), 0);
    this.#Ta.set([l2 + A2, h2 + v2], 4);
    this.#Ta.set(this.#Ta.subarray(14, 18), 12);
    this.#Ta.set([l2 - A2, h2 - v2], 16);
    if (isNaN(this.#Ta[6])) {
      if (0 === this.#Sa.length) {
        this.#Ta.set([a2 + A2, o2 + v2], 2);
        this.#Sa.push(NaN, NaN, NaN, NaN, (a2 + A2 - i2) / n2, (o2 + v2 - s2) / r2);
        this.#Ta.set([a2 - A2, o2 - v2], 14);
        this.#Ea.push(NaN, NaN, NaN, NaN, (a2 - A2 - i2) / n2, (o2 - v2 - s2) / r2);
      }
      this.#Ta.set([b2, w2, a2, o2, l2, h2], 6);
      return !this.isEmpty();
    }
    this.#Ta.set([b2, w2, a2, o2, l2, h2], 6);
    if (Math.abs(Math.atan2(w2 - o2, b2 - a2) - Math.atan2(f2, m2)) < Math.PI / 2) {
      [a2, o2, l2, h2] = this.#Ta.subarray(2, 6);
      this.#Sa.push(NaN, NaN, NaN, NaN, ((a2 + l2) / 2 - i2) / n2, ((o2 + h2) / 2 - s2) / r2);
      [a2, o2, b2, w2] = this.#Ta.subarray(14, 18);
      this.#Ea.push(NaN, NaN, NaN, NaN, ((b2 + a2) / 2 - i2) / n2, ((w2 + o2) / 2 - s2) / r2);
      return true;
    }
    [b2, w2, a2, o2, l2, h2] = this.#Ta.subarray(0, 6);
    this.#Sa.push(((b2 + 5 * a2) / 6 - i2) / n2, ((w2 + 5 * o2) / 6 - s2) / r2, ((5 * a2 + l2) / 6 - i2) / n2, ((5 * o2 + h2) / 6 - s2) / r2, ((a2 + l2) / 2 - i2) / n2, ((o2 + h2) / 2 - s2) / r2);
    [l2, h2, a2, o2, b2, w2] = this.#Ta.subarray(12, 18);
    this.#Ea.push(((b2 + 5 * a2) / 6 - i2) / n2, ((w2 + 5 * o2) / 6 - s2) / r2, ((5 * a2 + l2) / 6 - i2) / n2, ((5 * o2 + h2) / 6 - s2) / r2, ((a2 + l2) / 2 - i2) / n2, ((o2 + h2) / 2 - s2) / r2);
    return true;
  }
  toSVGPath() {
    if (this.isEmpty()) return "";
    const t2 = this.#Sa, e2 = this.#Ea;
    if (isNaN(this.#Ta[6]) && !this.isEmpty()) return this.#Ua();
    const i2 = [];
    i2.push(`M${t2[4]} ${t2[5]}`);
    for (let e3 = 6; e3 < t2.length; e3 += 6) isNaN(t2[e3]) ? i2.push(`L${t2[e3 + 4]} ${t2[e3 + 5]}`) : i2.push(`C${t2[e3]} ${t2[e3 + 1]} ${t2[e3 + 2]} ${t2[e3 + 3]} ${t2[e3 + 4]} ${t2[e3 + 5]}`);
    this.#Ha(i2);
    for (let t3 = e2.length - 6; t3 >= 6; t3 -= 6) isNaN(e2[t3]) ? i2.push(`L${e2[t3 + 4]} ${e2[t3 + 5]}`) : i2.push(`C${e2[t3]} ${e2[t3 + 1]} ${e2[t3 + 2]} ${e2[t3 + 3]} ${e2[t3 + 4]} ${e2[t3 + 5]}`);
    this.#za(i2);
    return i2.join(" ");
  }
  #Ua() {
    const [t2, e2, i2, s2] = this.#xa, [n2, r2, a2, o2] = this.#Na();
    return `M${(this.#Ta[2] - t2) / i2} ${(this.#Ta[3] - e2) / s2} L${(this.#Ta[4] - t2) / i2} ${(this.#Ta[5] - e2) / s2} L${n2} ${r2} L${a2} ${o2} L${(this.#Ta[16] - t2) / i2} ${(this.#Ta[17] - e2) / s2} L${(this.#Ta[14] - t2) / i2} ${(this.#Ta[15] - e2) / s2} Z`;
  }
  #za(t2) {
    const e2 = this.#Ea;
    t2.push(`L${e2[4]} ${e2[5]} Z`);
  }
  #Ha(t2) {
    const [e2, i2, s2, n2] = this.#xa, r2 = this.#Ta.subarray(4, 6), a2 = this.#Ta.subarray(16, 18), [o2, l2, h2, d2] = this.#Na();
    t2.push(`L${(r2[0] - e2) / s2} ${(r2[1] - i2) / n2} L${o2} ${l2} L${h2} ${d2} L${(a2[0] - e2) / s2} ${(a2[1] - i2) / n2}`);
  }
  newFreeDrawOutline(t2, e2, i2, s2, n2, r2) {
    return new FreeDrawOutline(t2, e2, i2, s2, n2, r2);
  }
  getOutlines() {
    const t2 = this.#Sa, e2 = this.#Ea, i2 = this.#Ta, [s2, n2, r2, a2] = this.#xa, o2 = new Float32Array((this.#Ra?.length ?? 0) + 2);
    for (let t3 = 0, e3 = o2.length - 2; t3 < e3; t3 += 2) {
      o2[t3] = (this.#Ra[t3] - s2) / r2;
      o2[t3 + 1] = (this.#Ra[t3 + 1] - n2) / a2;
    }
    o2[o2.length - 2] = (this.#Da - s2) / r2;
    o2[o2.length - 1] = (this.#Ma - n2) / a2;
    if (isNaN(i2[6]) && !this.isEmpty()) return this.#Ga(o2);
    const l2 = new Float32Array(this.#Sa.length + 24 + this.#Ea.length);
    let h2 = t2.length;
    for (let e3 = 0; e3 < h2; e3 += 2) if (isNaN(t2[e3])) l2[e3] = l2[e3 + 1] = NaN;
    else {
      l2[e3] = t2[e3];
      l2[e3 + 1] = t2[e3 + 1];
    }
    h2 = this.#Wa(l2, h2);
    for (let t3 = e2.length - 6; t3 >= 6; t3 -= 6) for (let i3 = 0; i3 < 6; i3 += 2) if (isNaN(e2[t3 + i3])) {
      l2[h2] = l2[h2 + 1] = NaN;
      h2 += 2;
    } else {
      l2[h2] = e2[t3 + i3];
      l2[h2 + 1] = e2[t3 + i3 + 1];
      h2 += 2;
    }
    this.#Va(l2, h2);
    return this.newFreeDrawOutline(l2, o2, this.#xa, this.#Ia, this.#Ca, this.#_a);
  }
  #Ga(t2) {
    const e2 = this.#Ta, [i2, s2, n2, r2] = this.#xa, [a2, o2, l2, h2] = this.#Na(), d2 = new Float32Array(36);
    d2.set([NaN, NaN, NaN, NaN, (e2[2] - i2) / n2, (e2[3] - s2) / r2, NaN, NaN, NaN, NaN, (e2[4] - i2) / n2, (e2[5] - s2) / r2, NaN, NaN, NaN, NaN, a2, o2, NaN, NaN, NaN, NaN, l2, h2, NaN, NaN, NaN, NaN, (e2[16] - i2) / n2, (e2[17] - s2) / r2, NaN, NaN, NaN, NaN, (e2[14] - i2) / n2, (e2[15] - s2) / r2], 0);
    return this.newFreeDrawOutline(d2, t2, this.#xa, this.#Ia, this.#Ca, this.#_a);
  }
  #Va(t2, e2) {
    const i2 = this.#Ea;
    t2.set([NaN, NaN, NaN, NaN, i2[4], i2[5]], e2);
    return e2 + 6;
  }
  #Wa(t2, e2) {
    const i2 = this.#Ta.subarray(4, 6), s2 = this.#Ta.subarray(16, 18), [n2, r2, a2, o2] = this.#xa, [l2, h2, d2, c2] = this.#Na();
    t2.set([NaN, NaN, NaN, NaN, (i2[0] - n2) / a2, (i2[1] - r2) / o2, NaN, NaN, NaN, NaN, l2, h2, NaN, NaN, NaN, NaN, d2, c2, NaN, NaN, NaN, NaN, (s2[0] - n2) / a2, (s2[1] - r2) / o2], e2);
    return e2 + 24;
  }
}
class FreeDrawOutline extends Outline {
  #xa;
  #$a = new Float32Array(4);
  #Ca;
  #_a;
  #Ra;
  #Ia;
  #ja;
  constructor(t2, e2, i2, s2, n2, r2) {
    super();
    this.#ja = t2;
    this.#Ra = e2;
    this.#xa = i2;
    this.#Ia = s2;
    this.#Ca = n2;
    this.#_a = r2;
    this.firstPoint = [NaN, NaN];
    this.lastPoint = [NaN, NaN];
    this.#qa(r2);
    const [a2, o2, l2, h2] = this.#$a;
    for (let e3 = 0, i3 = t2.length; e3 < i3; e3 += 2) {
      t2[e3] = (t2[e3] - a2) / l2;
      t2[e3 + 1] = (t2[e3 + 1] - o2) / h2;
    }
    for (let t3 = 0, i3 = e2.length; t3 < i3; t3 += 2) {
      e2[t3] = (e2[t3] - a2) / l2;
      e2[t3 + 1] = (e2[t3 + 1] - o2) / h2;
    }
  }
  toSVGPath() {
    const t2 = [`M${this.#ja[4]} ${this.#ja[5]}`];
    for (let e2 = 6, i2 = this.#ja.length; e2 < i2; e2 += 6) isNaN(this.#ja[e2]) ? t2.push(`L${this.#ja[e2 + 4]} ${this.#ja[e2 + 5]}`) : t2.push(`C${this.#ja[e2]} ${this.#ja[e2 + 1]} ${this.#ja[e2 + 2]} ${this.#ja[e2 + 3]} ${this.#ja[e2 + 4]} ${this.#ja[e2 + 5]}`);
    t2.push("Z");
    return t2.join(" ");
  }
  serialize([t2, e2, i2, s2], n2) {
    const r2 = i2 - t2, a2 = s2 - e2;
    let o2, l2;
    switch (n2) {
      case 0:
        o2 = Outline._rescale(this.#ja, t2, s2, r2, -a2);
        l2 = Outline._rescale(this.#Ra, t2, s2, r2, -a2);
        break;
      case 90:
        o2 = Outline._rescaleAndSwap(this.#ja, t2, e2, r2, a2);
        l2 = Outline._rescaleAndSwap(this.#Ra, t2, e2, r2, a2);
        break;
      case 180:
        o2 = Outline._rescale(this.#ja, i2, e2, -r2, a2);
        l2 = Outline._rescale(this.#Ra, i2, e2, -r2, a2);
        break;
      case 270:
        o2 = Outline._rescaleAndSwap(this.#ja, i2, s2, -r2, -a2);
        l2 = Outline._rescaleAndSwap(this.#Ra, i2, s2, -r2, -a2);
    }
    return { outline: Array.from(o2), points: [Array.from(l2)] };
  }
  #qa(t2) {
    const e2 = this.#ja;
    let i2 = e2[4], s2 = e2[5];
    const n2 = [i2, s2, i2, s2];
    let r2 = i2, a2 = s2, o2 = i2, l2 = s2;
    const h2 = t2 ? Math.max : Math.min, d2 = new Float32Array(4);
    for (let t3 = 6, c3 = e2.length; t3 < c3; t3 += 6) {
      const c4 = e2[t3 + 4], u2 = e2[t3 + 5];
      if (isNaN(e2[t3])) {
        Util.pointBoundingBox(c4, u2, n2);
        if (a2 > u2) {
          r2 = c4;
          a2 = u2;
        } else a2 === u2 && (r2 = h2(r2, c4));
        if (l2 < u2) {
          o2 = c4;
          l2 = u2;
        } else l2 === u2 && (o2 = h2(o2, c4));
      } else {
        d2[0] = d2[1] = 1 / 0;
        d2[2] = d2[3] = -1 / 0;
        Util.bezierBoundingBox(i2, s2, ...e2.slice(t3, t3 + 6), d2);
        Util.rectBoundingBox(d2[0], d2[1], d2[2], d2[3], n2);
        if (a2 > d2[1]) {
          r2 = d2[0];
          a2 = d2[1];
        } else a2 === d2[1] && (r2 = h2(r2, d2[0]));
        if (l2 < d2[3]) {
          o2 = d2[2];
          l2 = d2[3];
        } else l2 === d2[3] && (o2 = h2(o2, d2[2]));
      }
      i2 = c4;
      s2 = u2;
    }
    const c2 = this.#$a;
    c2[0] = n2[0] - this.#Ca;
    c2[1] = n2[1] - this.#Ca;
    c2[2] = n2[2] - n2[0] + 2 * this.#Ca;
    c2[3] = n2[3] - n2[1] + 2 * this.#Ca;
    this.firstPoint = [r2, a2];
    this.lastPoint = [o2, l2];
  }
  get box() {
    return this.#$a;
  }
  newOutliner(t2, e2, i2, s2, n2, r2 = 0) {
    return new FreeDrawOutliner(t2, e2, i2, s2, n2, r2);
  }
  getNewOutline(t2, e2) {
    const [i2, s2, n2, r2] = this.#$a, [a2, o2, l2, h2] = this.#xa, d2 = n2 * l2, c2 = r2 * h2, u2 = i2 * l2 + a2, p2 = s2 * h2 + o2, g2 = this.newOutliner({ x: this.#Ra[0] * d2 + u2, y: this.#Ra[1] * c2 + p2 }, this.#xa, this.#Ia, t2, this.#_a, e2 ?? this.#Ca);
    for (let t3 = 2; t3 < this.#Ra.length; t3 += 2) g2.add({ x: this.#Ra[t3] * d2 + u2, y: this.#Ra[t3 + 1] * c2 + p2 });
    return g2.getOutlines();
  }
}
class HighlightOutliner {
  #xa;
  #Xa;
  #Ka;
  #Ya = [];
  #Qa = [];
  constructor(t2, e2 = 0, i2 = 0, s2 = true) {
    const n2 = [1 / 0, 1 / 0, -1 / 0, -1 / 0], r2 = 10 ** -4;
    for (const { x: i3, y: s3, width: a3, height: o3 } of t2) {
      const t3 = Math.floor((i3 - e2) / r2) * r2, l3 = Math.ceil((i3 + a3 + e2) / r2) * r2, h3 = Math.floor((s3 - e2) / r2) * r2, d3 = Math.ceil((s3 + o3 + e2) / r2) * r2, c3 = [t3, h3, d3, true], u3 = [l3, h3, d3, false];
      this.#Ya.push(c3, u3);
      Util.rectBoundingBox(t3, h3, l3, d3, n2);
    }
    const a2 = n2[2] - n2[0] + 2 * i2, o2 = n2[3] - n2[1] + 2 * i2, l2 = n2[0] - i2, h2 = n2[1] - i2;
    let d2 = s2 ? -1 / 0 : 1 / 0, c2 = 1 / 0;
    const u2 = this.#Ya.at(s2 ? -1 : -2), p2 = [u2[0], u2[2]];
    for (const t3 of this.#Ya) {
      const [e3, i3, n3, r3] = t3;
      if (!r3 && s2) if (i3 < c2) {
        c2 = i3;
        d2 = e3;
      } else i3 === c2 && (d2 = Math.max(d2, e3));
      else if (r3 && !s2) if (i3 < c2) {
        c2 = i3;
        d2 = e3;
      } else i3 === c2 && (d2 = Math.min(d2, e3));
      t3[0] = (e3 - l2) / a2;
      t3[1] = (i3 - h2) / o2;
      t3[2] = (n3 - h2) / o2;
    }
    this.#xa = new Float32Array([l2, h2, a2, o2]);
    this.#Xa = [d2, c2];
    this.#Ka = p2;
  }
  getOutlines() {
    this.#Ya.sort((t3, e2) => t3[0] - e2[0] || t3[1] - e2[1] || t3[2] - e2[2]);
    const t2 = [];
    for (const e2 of this.#Ya) if (e2[3]) {
      t2.push(...this.#Ja(e2));
      this.#Za(e2);
    } else {
      this.#to(e2);
      t2.push(...this.#Ja(e2));
    }
    return this.#eo(t2);
  }
  #eo(t2) {
    const e2 = [], i2 = /* @__PURE__ */ new Set();
    for (const i3 of t2) {
      const [t3, s3, n3] = i3;
      e2.push([t3, s3, i3], [t3, n3, i3]);
    }
    e2.sort((t3, e3) => t3[1] - e3[1] || t3[0] - e3[0]);
    for (let t3 = 0, s3 = e2.length; t3 < s3; t3 += 2) {
      const s4 = e2[t3][2], n3 = e2[t3 + 1][2];
      s4.push(n3);
      n3.push(s4);
      i2.add(s4);
      i2.add(n3);
    }
    const s2 = [];
    let n2;
    for (; i2.size > 0; ) {
      const t3 = i2.values().next().value;
      let [e3, r2, a2, o2, l2] = t3;
      i2.delete(t3);
      let h2 = e3, d2 = r2;
      n2 = [e3, a2];
      s2.push(n2);
      for (; ; ) {
        let t4;
        if (i2.has(o2)) t4 = o2;
        else {
          if (!i2.has(l2)) break;
          t4 = l2;
        }
        i2.delete(t4);
        [e3, r2, a2, o2, l2] = t4;
        if (h2 !== e3) {
          n2.push(h2, d2, e3, d2 === r2 ? r2 : a2);
          h2 = e3;
        }
        d2 = d2 === r2 ? a2 : r2;
      }
      n2.push(h2, d2);
    }
    return new HighlightOutline(s2, this.#xa, this.#Xa, this.#Ka);
  }
  #io(t2) {
    const e2 = this.#Qa;
    let i2 = 0, s2 = e2.length - 1;
    for (; i2 <= s2; ) {
      const n2 = i2 + s2 >> 1, r2 = e2[n2][0];
      if (r2 === t2) return n2;
      r2 < t2 ? i2 = n2 + 1 : s2 = n2 - 1;
    }
    return s2 + 1;
  }
  #Za([, t2, e2]) {
    const i2 = this.#io(t2);
    this.#Qa.splice(i2, 0, [t2, e2]);
  }
  #to([, t2, e2]) {
    const i2 = this.#io(t2);
    for (let s2 = i2; s2 < this.#Qa.length; s2++) {
      const [i3, n2] = this.#Qa[s2];
      if (i3 !== t2) break;
      if (i3 === t2 && n2 === e2) {
        this.#Qa.splice(s2, 1);
        return;
      }
    }
    for (let s2 = i2 - 1; s2 >= 0; s2--) {
      const [i3, n2] = this.#Qa[s2];
      if (i3 !== t2) break;
      if (i3 === t2 && n2 === e2) {
        this.#Qa.splice(s2, 1);
        return;
      }
    }
  }
  #Ja(t2) {
    const [e2, i2, s2] = t2, n2 = [[e2, i2, s2]], r2 = this.#io(s2);
    for (let t3 = 0; t3 < r2; t3++) {
      const [i3, s3] = this.#Qa[t3];
      for (let t4 = 0, r3 = n2.length; t4 < r3; t4++) {
        const [, a2, o2] = n2[t4];
        if (!(s3 <= a2 || o2 <= i3)) if (a2 >= i3) if (o2 > s3) n2[t4][1] = s3;
        else {
          if (1 === r3) return [];
          n2.splice(t4, 1);
          t4--;
          r3--;
        }
        else {
          n2[t4][2] = i3;
          o2 > s3 && n2.push([e2, s3, o2]);
        }
      }
    }
    return n2;
  }
}
class HighlightOutline extends Outline {
  #xa;
  #so;
  constructor(t2, e2, i2, s2) {
    super();
    this.#so = t2;
    this.#xa = e2;
    this.firstPoint = i2;
    this.lastPoint = s2;
  }
  toSVGPath() {
    const t2 = [];
    for (const e2 of this.#so) {
      let [i2, s2] = e2;
      t2.push(`M${i2} ${s2}`);
      for (let n2 = 2; n2 < e2.length; n2 += 2) {
        const r2 = e2[n2], a2 = e2[n2 + 1];
        if (r2 === i2) {
          t2.push(`V${a2}`);
          s2 = a2;
        } else if (a2 === s2) {
          t2.push(`H${r2}`);
          i2 = r2;
        }
      }
      t2.push("Z");
    }
    return t2.join(" ");
  }
  serialize([t2, e2, i2, s2], n2) {
    const r2 = [], a2 = i2 - t2, o2 = s2 - e2;
    for (const e3 of this.#so) {
      const i3 = new Array(e3.length);
      for (let n3 = 0; n3 < e3.length; n3 += 2) {
        i3[n3] = t2 + e3[n3] * a2;
        i3[n3 + 1] = s2 - e3[n3 + 1] * o2;
      }
      r2.push(i3);
    }
    return r2;
  }
  get box() {
    return this.#xa;
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
class FreeHighlightOutliner extends FreeDrawOutliner {
  newFreeDrawOutline(t2, e2, i2, s2, n2, r2) {
    return new FreeHighlightOutline(t2, e2, i2, s2, n2, r2);
  }
}
class FreeHighlightOutline extends FreeDrawOutline {
  newOutliner(t2, e2, i2, s2, n2, r2 = 0) {
    return new FreeHighlightOutliner(t2, e2, i2, s2, n2, r2);
  }
}
class HighlightEditor extends AnnotationEditor {
  #no = null;
  #ro = 0;
  #ao;
  #oo = null;
  #n = null;
  #lo = null;
  #ho = null;
  #do = 0;
  #co = null;
  #uo = null;
  #v = null;
  #po = false;
  #Xa = null;
  #Ka = null;
  #go = null;
  #de = "";
  #Fa;
  #mo = "";
  static _defaultColor = null;
  static _defaultOpacity = 1;
  static _defaultThickness = 12;
  static _type = "highlight";
  static _editorType = p.HIGHLIGHT;
  static _freeHighlightId = -1;
  static _freeHighlight = null;
  static _freeHighlightClipId = "";
  static get _keyboardManager() {
    const t2 = HighlightEditor.prototype;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], t2._moveCaret, { args: [0] }], [["ArrowRight", "mac+ArrowRight"], t2._moveCaret, { args: [1] }], [["ArrowUp", "mac+ArrowUp"], t2._moveCaret, { args: [2] }], [["ArrowDown", "mac+ArrowDown"], t2._moveCaret, { args: [3] }]]));
  }
  constructor(t2) {
    super({ ...t2, name: "highlightEditor" });
    this.color = t2.color || HighlightEditor._defaultColor;
    this.#Fa = t2.thickness || HighlightEditor._defaultThickness;
    this.opacity = t2.opacity || HighlightEditor._defaultOpacity;
    this.#ao = t2.boxes || null;
    this.#mo = t2.methodOfCreation || "";
    this.#de = t2.text || "";
    this._isDraggable = false;
    this.defaultL10nId = "pdfjs-editor-highlight-editor";
    if (t2.highlightId > -1) {
      this.#po = true;
      this.#fo(t2);
      this.#bo();
    } else if (this.#ao) {
      this.#no = t2.anchorNode;
      this.#ro = t2.anchorOffset;
      this.#ho = t2.focusNode;
      this.#do = t2.focusOffset;
      this.#wo();
      this.#bo();
      this.rotate(this.rotation);
    }
    this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
  }
  get telemetryInitialData() {
    return { action: "added", type: this.#po ? "free_highlight" : "highlight", color: this._uiManager.getNonHCMColorName(this.color), thickness: this.#Fa, methodOfCreation: this.#mo };
  }
  get telemetryFinalData() {
    return { type: "highlight", color: this._uiManager.getNonHCMColorName(this.color) };
  }
  static computeTelemetryFinalData(t2) {
    return { numberOfColors: t2.get("color").size };
  }
  #wo() {
    const t2 = new HighlightOutliner(this.#ao, 1e-3);
    this.#uo = t2.getOutlines();
    [this.x, this.y, this.width, this.height] = this.#uo.box;
    const e2 = new HighlightOutliner(this.#ao, 25e-4, 1e-3, "ltr" === this._uiManager.direction);
    this.#lo = e2.getOutlines();
    const { firstPoint: i2 } = this.#uo;
    this.#Xa = [(i2[0] - this.x) / this.width, (i2[1] - this.y) / this.height];
    const { lastPoint: s2 } = this.#lo;
    this.#Ka = [(s2[0] - this.x) / this.width, (s2[1] - this.y) / this.height];
  }
  #fo({ highlightOutlines: t2, highlightId: e2, clipPathId: i2 }) {
    this.#uo = t2;
    this.#lo = t2.getNewOutline(this.#Fa / 2 + 1.5, 25e-4);
    if (e2 >= 0) {
      this.#v = e2;
      this.#oo = i2;
      this.parent.drawLayer.finalizeDraw(e2, { bbox: t2.box, path: { d: t2.toSVGPath() } });
      this.#go = this.parent.drawLayer.drawOutline({ rootClass: { highlightOutline: true, free: true }, bbox: this.#lo.box, path: { d: this.#lo.toSVGPath() } }, true);
    } else if (this.parent) {
      const e3 = this.parent.viewport.rotation;
      this.parent.drawLayer.updateProperties(this.#v, { bbox: HighlightEditor.#yo(this.#uo.box, (e3 - this.rotation + 360) % 360), path: { d: t2.toSVGPath() } });
      this.parent.drawLayer.updateProperties(this.#go, { bbox: HighlightEditor.#yo(this.#lo.box, e3), path: { d: this.#lo.toSVGPath() } });
    }
    const [s2, n2, r2, a2] = t2.box;
    switch (this.rotation) {
      case 0:
        this.x = s2;
        this.y = n2;
        this.width = r2;
        this.height = a2;
        break;
      case 90: {
        const [t3, e3] = this.parentDimensions;
        this.x = n2;
        this.y = 1 - s2;
        this.width = r2 * e3 / t3;
        this.height = a2 * t3 / e3;
        break;
      }
      case 180:
        this.x = 1 - s2;
        this.y = 1 - n2;
        this.width = r2;
        this.height = a2;
        break;
      case 270: {
        const [t3, e3] = this.parentDimensions;
        this.x = 1 - n2;
        this.y = s2;
        this.width = r2 * e3 / t3;
        this.height = a2 * t3 / e3;
        break;
      }
    }
    const { firstPoint: o2 } = t2;
    this.#Xa = [(o2[0] - s2) / r2, (o2[1] - n2) / a2];
    const { lastPoint: l2 } = this.#lo;
    this.#Ka = [(l2[0] - s2) / r2, (l2[1] - n2) / a2];
  }
  static initialize(t2, e2) {
    AnnotationEditor.initialize(t2, e2);
    HighlightEditor._defaultColor ||= e2.highlightColors?.values().next().value || "#fff066";
  }
  static updateDefaultParams(t2, e2) {
    switch (t2) {
      case g.HIGHLIGHT_COLOR:
        HighlightEditor._defaultColor = e2;
        break;
      case g.HIGHLIGHT_THICKNESS:
        HighlightEditor._defaultThickness = e2;
    }
  }
  translateInPage(t2, e2) {
  }
  get toolbarPosition() {
    return this.#Ka;
  }
  get commentButtonPosition() {
    return this.#Xa;
  }
  updateParams(t2, e2) {
    switch (t2) {
      case g.HIGHLIGHT_COLOR:
        this.#Gr(e2);
        break;
      case g.HIGHLIGHT_THICKNESS:
        this.#Ao(e2);
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[g.HIGHLIGHT_COLOR, HighlightEditor._defaultColor], [g.HIGHLIGHT_THICKNESS, HighlightEditor._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[g.HIGHLIGHT_COLOR, this.color || HighlightEditor._defaultColor], [g.HIGHLIGHT_THICKNESS, this.#Fa || HighlightEditor._defaultThickness], [g.HIGHLIGHT_FREE, this.#po]];
  }
  onUpdatedColor() {
    this.parent?.drawLayer.updateProperties(this.#v, { root: { fill: this.color, "fill-opacity": this.opacity } });
    this.#n?.updateColor(this.color);
    super.onUpdatedColor();
  }
  #Gr(t2) {
    const setColorAndOpacity = (t3, e3) => {
      this.color = t3;
      this.opacity = e3;
      this.onUpdatedColor();
    }, e2 = this.color, i2 = this.opacity;
    this.addCommands({ cmd: setColorAndOpacity.bind(this, t2, HighlightEditor._defaultOpacity), undo: setColorAndOpacity.bind(this, e2, i2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: g.HIGHLIGHT_COLOR, overwriteIfSameType: true, keepUndo: true });
    this._reportTelemetry({ action: "color_changed", color: this._uiManager.getNonHCMColorName(t2) }, true);
  }
  #Ao(t2) {
    const e2 = this.#Fa, setThickness = (t3) => {
      this.#Fa = t3;
      this.#vo(t3);
    };
    this.addCommands({ cmd: setThickness.bind(this, t2), undo: setThickness.bind(this, e2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: g.INK_THICKNESS, overwriteIfSameType: true, keepUndo: true });
    this._reportTelemetry({ action: "thickness_changed", thickness: t2 }, true);
  }
  get toolbarButtons() {
    if (this._uiManager.highlightColors) {
      return [["colorPicker", this.#n = new ColorPicker({ editor: this })]];
    }
    return super.toolbarButtons;
  }
  disableEditing() {
    super.disableEditing();
    this.div.classList.toggle("disabled", true);
  }
  enableEditing() {
    super.enableEditing();
    this.div.classList.toggle("disabled", false);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(this.#xo());
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(t2, e2) {
    return super.getRect(t2, e2, this.#xo());
  }
  onceAdded(t2) {
    this.annotationElementId || this.parent.addUndoableEditor(this);
    t2 && this.div.focus();
  }
  remove() {
    this.#Eo();
    this._reportTelemetry({ action: "deleted" });
    super.remove();
  }
  rebuild() {
    if (this.parent) {
      super.rebuild();
      if (null !== this.div) {
        this.#bo();
        this.isAttachedToDOM || this.parent.add(this);
      }
    }
  }
  setParent(t2) {
    let e2 = false;
    if (this.parent && !t2) this.#Eo();
    else if (t2) {
      this.#bo(t2);
      e2 = !this.parent && this.div?.classList.contains("selectedEditor");
    }
    super.setParent(t2);
    this.show(this._isVisible);
    e2 && this.select();
  }
  #vo(t2) {
    if (this.#po) {
      this.#fo({ highlightOutlines: this.#uo.getNewOutline(t2 / 2) });
      this.fixAndSetPosition();
      this.setDims(this.width, this.height);
    }
  }
  #Eo() {
    if (null !== this.#v && this.parent) {
      this.parent.drawLayer.remove(this.#v);
      this.#v = null;
      this.parent.drawLayer.remove(this.#go);
      this.#go = null;
    }
  }
  #bo(t2 = this.parent) {
    if (null === this.#v) {
      ({ id: this.#v, clipPathId: this.#oo } = t2.drawLayer.draw({ bbox: this.#uo.box, root: { viewBox: "0 0 1 1", fill: this.color, "fill-opacity": this.opacity }, rootClass: { highlight: true, free: this.#po }, path: { d: this.#uo.toSVGPath() } }, false, true));
      this.#go = t2.drawLayer.drawOutline({ rootClass: { highlightOutline: true, free: this.#po }, bbox: this.#lo.box, path: { d: this.#lo.toSVGPath() } }, this.#po);
      this.#co && (this.#co.style.clipPath = this.#oo);
    }
  }
  static #yo([t2, e2, i2, s2], n2) {
    switch (n2) {
      case 90:
        return [1 - e2 - s2, t2, s2, i2];
      case 180:
        return [1 - t2 - i2, 1 - e2 - s2, i2, s2];
      case 270:
        return [e2, 1 - t2 - i2, s2, i2];
    }
    return [t2, e2, i2, s2];
  }
  rotate(t2) {
    const { drawLayer: e2 } = this.parent;
    let i2;
    if (this.#po) {
      t2 = (t2 - this.rotation + 360) % 360;
      i2 = HighlightEditor.#yo(this.#uo.box, t2);
    } else i2 = HighlightEditor.#yo([this.x, this.y, this.width, this.height], t2);
    e2.updateProperties(this.#v, { bbox: i2, root: { "data-main-rotation": t2 } });
    e2.updateProperties(this.#go, { bbox: HighlightEditor.#yo(this.#lo.box, t2), root: { "data-main-rotation": t2 } });
  }
  render() {
    if (this.div) return this.div;
    const t2 = super.render();
    if (this.#de) {
      t2.setAttribute("aria-label", this.#de);
      t2.setAttribute("role", "mark");
    }
    this.#po ? t2.classList.add("free") : this.div.addEventListener("keydown", this.#Co.bind(this), { signal: this._uiManager._signal });
    const e2 = this.#co = document.createElement("div");
    t2.append(e2);
    e2.setAttribute("aria-hidden", "true");
    e2.className = "internal";
    e2.style.clipPath = this.#oo;
    this.setDims(this.width, this.height);
    bindEvents(this, this.#co, ["pointerover", "pointerleave"]);
    this.enableEditing();
    return t2;
  }
  pointerover() {
    this.isSelected || this.parent?.drawLayer.updateProperties(this.#go, { rootClass: { hovered: true } });
  }
  pointerleave() {
    this.isSelected || this.parent?.drawLayer.updateProperties(this.#go, { rootClass: { hovered: false } });
  }
  #Co(t2) {
    HighlightEditor._keyboardManager.exec(this, t2);
  }
  _moveCaret(t2) {
    this.parent.unselect(this);
    switch (t2) {
      case 0:
      case 2:
        this.#_o(true);
        break;
      case 1:
      case 3:
        this.#_o(false);
    }
  }
  #_o(t2) {
    if (!this.#no) return;
    const e2 = window.getSelection();
    t2 ? e2.setPosition(this.#no, this.#ro) : e2.setPosition(this.#ho, this.#do);
  }
  select() {
    super.select();
    this.#go && this.parent?.drawLayer.updateProperties(this.#go, { rootClass: { hovered: false, selected: true } });
  }
  unselect() {
    super.unselect();
    if (this.#go) {
      this.parent?.drawLayer.updateProperties(this.#go, { rootClass: { selected: false } });
      this.#po || this.#_o(false);
    }
  }
  get _mustFixPosition() {
    return !this.#po;
  }
  show(t2 = this._isVisible) {
    super.show(t2);
    if (this.parent) {
      this.parent.drawLayer.updateProperties(this.#v, { rootClass: { hidden: !t2 } });
      this.parent.drawLayer.updateProperties(this.#go, { rootClass: { hidden: !t2 } });
    }
  }
  #xo() {
    return this.#po ? this.rotation : 0;
  }
  #So() {
    if (this.#po) return null;
    const [t2, e2] = this.pageDimensions, [i2, s2] = this.pageTranslation, n2 = this.#ao, r2 = new Float32Array(8 * n2.length);
    let a2 = 0;
    for (const { x: o2, y: l2, width: h2, height: d2 } of n2) {
      const n3 = o2 * t2 + i2, c2 = (1 - l2) * e2 + s2;
      r2[a2] = r2[a2 + 4] = n3;
      r2[a2 + 1] = r2[a2 + 3] = c2;
      r2[a2 + 2] = r2[a2 + 6] = n3 + h2 * t2;
      r2[a2 + 5] = r2[a2 + 7] = c2 - d2 * e2;
      a2 += 8;
    }
    return r2;
  }
  #To(t2) {
    return this.#uo.serialize(t2, this.#xo());
  }
  static startHighlighting(t2, e2, { target: i2, x: s2, y: n2 }) {
    const { x: r2, y: a2, width: o2, height: l2 } = i2.getBoundingClientRect(), h2 = new AbortController(), d2 = t2.combinedSignal(h2), pointerUpCallback = (e3) => {
      h2.abort();
      this.#Do(t2, e3);
    };
    window.addEventListener("blur", pointerUpCallback, { signal: d2 });
    window.addEventListener("pointerup", pointerUpCallback, { signal: d2 });
    window.addEventListener("pointerdown", stopEvent, { capture: true, passive: false, signal: d2 });
    window.addEventListener("contextmenu", noContextMenu, { signal: d2 });
    i2.addEventListener("pointermove", this.#Mo.bind(this, t2), { signal: d2 });
    this._freeHighlight = new FreeHighlightOutliner({ x: s2, y: n2 }, [r2, a2, o2, l2], t2.scale, this._defaultThickness / 2, e2, 1e-3);
    ({ id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = t2.drawLayer.draw({ bbox: [0, 0, 1, 1], root: { viewBox: "0 0 1 1", fill: this._defaultColor, "fill-opacity": this._defaultOpacity }, rootClass: { highlight: true, free: true }, path: { d: this._freeHighlight.toSVGPath() } }, true, true));
  }
  static #Mo(t2, e2) {
    this._freeHighlight.add(e2) && t2.drawLayer.updateProperties(this._freeHighlightId, { path: { d: this._freeHighlight.toSVGPath() } });
  }
  static #Do(t2, e2) {
    this._freeHighlight.isEmpty() ? t2.drawLayer.remove(this._freeHighlightId) : t2.createAndAddNewEditor(e2, false, { highlightId: this._freeHighlightId, highlightOutlines: this._freeHighlight.getOutlines(), clipPathId: this._freeHighlightClipId, methodOfCreation: "main_toolbar" });
    this._freeHighlightId = -1;
    this._freeHighlight = null;
    this._freeHighlightClipId = "";
  }
  static async deserialize(t2, e2, i2) {
    let s2 = null;
    if (t2 instanceof HighlightAnnotationElement) {
      const { data: { quadPoints: e3, rect: i3, rotation: n3, id: r3, color: a3, opacity: o3, popupRef: l3, richText: h3, contentsObj: d3, creationDate: c3, modificationDate: u3 }, parent: { page: { pageNumber: g2 } } } = t2;
      s2 = t2 = { annotationType: p.HIGHLIGHT, color: Array.from(a3), opacity: o3, quadPoints: e3, boxes: null, pageIndex: g2 - 1, rect: i3.slice(0), rotation: n3, annotationElementId: r3, id: r3, deleted: false, popupRef: l3, richText: h3, comment: d3?.str || null, creationDate: c3, modificationDate: u3 };
    } else if (t2 instanceof InkAnnotationElement) {
      const { data: { inkLists: e3, rect: i3, rotation: n3, id: r3, color: a3, borderStyle: { rawWidth: o3 }, popupRef: l3, richText: h3, contentsObj: d3, creationDate: c3, modificationDate: u3 }, parent: { page: { pageNumber: g2 } } } = t2;
      s2 = t2 = { annotationType: p.HIGHLIGHT, color: Array.from(a3), thickness: o3, inkLists: e3, boxes: null, pageIndex: g2 - 1, rect: i3.slice(0), rotation: n3, annotationElementId: r3, id: r3, deleted: false, popupRef: l3, richText: h3, comment: d3?.str || null, creationDate: c3, modificationDate: u3 };
    }
    const { color: n2, quadPoints: r2, inkLists: a2, opacity: o2 } = t2, l2 = await super.deserialize(t2, e2, i2);
    l2.color = Util.makeHexColor(...n2);
    l2.opacity = o2 || 1;
    a2 && (l2.#Fa = t2.thickness);
    l2._initialData = s2;
    t2.comment && l2.setCommentData(t2);
    const [h2, d2] = l2.pageDimensions, [c2, u2] = l2.pageTranslation;
    if (r2) {
      const t3 = l2.#ao = [];
      for (let e3 = 0; e3 < r2.length; e3 += 8) t3.push({ x: (r2[e3] - c2) / h2, y: 1 - (r2[e3 + 1] - u2) / d2, width: (r2[e3 + 2] - r2[e3]) / h2, height: (r2[e3 + 1] - r2[e3 + 5]) / d2 });
      l2.#wo();
      l2.#bo();
      l2.rotate(l2.rotation);
    } else if (a2) {
      l2.#po = true;
      const t3 = a2[0], i3 = { x: t3[0] - c2, y: d2 - (t3[1] - u2) }, s3 = new FreeHighlightOutliner(i3, [0, 0, h2, d2], 1, l2.#Fa / 2, true, 1e-3);
      for (let e3 = 0, n4 = t3.length; e3 < n4; e3 += 2) {
        i3.x = t3[e3] - c2;
        i3.y = d2 - (t3[e3 + 1] - u2);
        s3.add(i3);
      }
      const { id: n3, clipPathId: r3 } = e2.drawLayer.draw({ bbox: [0, 0, 1, 1], root: { viewBox: "0 0 1 1", fill: l2.color, "fill-opacity": l2._defaultOpacity }, rootClass: { highlight: true, free: true }, path: { d: s3.toSVGPath() } }, true, true);
      l2.#fo({ highlightOutlines: s3.getOutlines(), highlightId: n3, clipPathId: r3 });
      l2.#bo();
      l2.rotate(l2.parentRotation);
    }
    return l2;
  }
  serialize(t2 = false) {
    if (this.isEmpty() || t2) return null;
    if (this.deleted) return this.serializeDeleted();
    const e2 = AnnotationEditor._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), i2 = super.serialize(t2);
    Object.assign(i2, { color: e2, opacity: this.opacity, thickness: this.#Fa, quadPoints: this.#So(), outlines: this.#To(i2.rect) });
    this.addComment(i2);
    if (this.annotationElementId && !this.#va(i2)) return null;
    i2.id = this.annotationElementId;
    return i2;
  }
  #va(t2) {
    const { color: e2 } = this._initialData;
    return this.hasEditedComment || t2.color.some((t3, i2) => t3 !== e2[i2]);
  }
  renderAnnotationElement(t2) {
    if (this.deleted) {
      t2.hide();
      return null;
    }
    t2.updateEdited({ rect: this.getPDFRect(), popup: this.comment });
    return null;
  }
  static canCreateNewEmptyEditor() {
    return false;
  }
}
class DrawingOptions {
  #ko = /* @__PURE__ */ Object.create(null);
  updateProperty(t2, e2) {
    this[t2] = e2;
    this.updateSVGProperty(t2, e2);
  }
  updateProperties(t2) {
    if (t2) for (const [e2, i2] of Object.entries(t2)) e2.startsWith("_") || this.updateProperty(e2, i2);
  }
  updateSVGProperty(t2, e2) {
    this.#ko[t2] = e2;
  }
  toSVGProperties() {
    const t2 = this.#ko;
    this.#ko = /* @__PURE__ */ Object.create(null);
    return { root: t2 };
  }
  reset() {
    this.#ko = /* @__PURE__ */ Object.create(null);
  }
  updateAll(t2 = this) {
    this.updateProperties(t2);
  }
  clone() {
    unreachable("Not implemented");
  }
}
class DrawingEditor extends AnnotationEditor {
  #Po = null;
  #Io;
  _colorPicker = null;
  _drawId = null;
  static _currentDrawId = -1;
  static _currentParent = null;
  static #Fo = null;
  static #Ro = null;
  static #Lo = null;
  static #Bo = NaN;
  static #Oo = null;
  static #No = null;
  static #Uo = NaN;
  static _INNER_MARGIN = 3;
  constructor(t2) {
    super(t2);
    this.#Io = t2.mustBeCommitted || false;
    this._addOutlines(t2);
  }
  onUpdatedColor() {
    this._colorPicker?.update(this.color);
    super.onUpdatedColor();
  }
  _addOutlines(t2) {
    if (t2.drawOutlines) {
      this.#Ho(t2);
      this.#bo();
    }
  }
  #Ho({ drawOutlines: t2, drawId: e2, drawingOptions: i2 }) {
    this.#Po = t2;
    this._drawingOptions ||= i2;
    this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`);
    if (e2 >= 0) {
      this._drawId = e2;
      this.parent.drawLayer.finalizeDraw(e2, t2.defaultProperties);
    } else this._drawId = this.#zo(t2, this.parent);
    this.#Go(t2.box);
  }
  #zo(t2, e2) {
    const { id: i2 } = e2.drawLayer.draw(DrawingEditor._mergeSVGProperties(this._drawingOptions.toSVGProperties(), t2.defaultSVGProperties), false, false);
    return i2;
  }
  static _mergeSVGProperties(t2, e2) {
    const i2 = new Set(Object.keys(t2));
    for (const [s2, n2] of Object.entries(e2)) i2.has(s2) ? Object.assign(t2[s2], n2) : t2[s2] = n2;
    return t2;
  }
  static getDefaultDrawingOptions(t2) {
    unreachable("Not implemented");
  }
  static get typesMap() {
    unreachable("Not implemented");
  }
  static get isDrawer() {
    return true;
  }
  static get supportMultipleDrawings() {
    return false;
  }
  static updateDefaultParams(t2, e2) {
    const i2 = this.typesMap.get(t2);
    i2 && this._defaultDrawingOptions.updateProperty(i2, e2);
    if (this._currentParent) {
      DrawingEditor.#Fo.updateProperty(i2, e2);
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
    }
  }
  updateParams(t2, e2) {
    const i2 = this.constructor.typesMap.get(t2);
    i2 && this._updateProperty(t2, i2, e2);
  }
  static get defaultPropertiesToUpdate() {
    const t2 = [], e2 = this._defaultDrawingOptions;
    for (const [i2, s2] of this.typesMap) t2.push([i2, e2[s2]]);
    return t2;
  }
  get propertiesToUpdate() {
    const t2 = [], { _drawingOptions: e2 } = this;
    for (const [i2, s2] of this.constructor.typesMap) t2.push([i2, e2[s2]]);
    return t2;
  }
  _updateProperty(t2, e2, i2) {
    const s2 = this._drawingOptions, n2 = s2[e2], setter = (i3) => {
      s2.updateProperty(e2, i3);
      const n3 = this.#Po.updateProperty(e2, i3);
      n3 && this.#Go(n3);
      this.parent?.drawLayer.updateProperties(this._drawId, s2.toSVGProperties());
      t2 === this.colorType && this.onUpdatedColor();
    };
    this.addCommands({ cmd: setter.bind(this, i2), undo: setter.bind(this, n2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: t2, overwriteIfSameType: true, keepUndo: true });
  }
  _onResizing() {
    this.parent?.drawLayer.updateProperties(this._drawId, DrawingEditor._mergeSVGProperties(this.#Po.getPathResizingSVGProperties(this.#Wo()), { bbox: this.#Vo() }));
  }
  _onResized() {
    this.parent?.drawLayer.updateProperties(this._drawId, DrawingEditor._mergeSVGProperties(this.#Po.getPathResizedSVGProperties(this.#Wo()), { bbox: this.#Vo() }));
  }
  _onTranslating(t2, e2) {
    this.parent?.drawLayer.updateProperties(this._drawId, { bbox: this.#Vo() });
  }
  _onTranslated() {
    this.parent?.drawLayer.updateProperties(this._drawId, DrawingEditor._mergeSVGProperties(this.#Po.getPathTranslatedSVGProperties(this.#Wo(), this.parentDimensions), { bbox: this.#Vo() }));
  }
  _onStartDragging() {
    this.parent?.drawLayer.updateProperties(this._drawId, { rootClass: { moving: true } });
  }
  _onStopDragging() {
    this.parent?.drawLayer.updateProperties(this._drawId, { rootClass: { moving: false } });
  }
  commit() {
    super.commit();
    this.disableEditMode();
    this.disableEditing();
  }
  disableEditing() {
    super.disableEditing();
    this.div.classList.toggle("disabled", true);
  }
  enableEditing() {
    super.enableEditing();
    this.div.classList.toggle("disabled", false);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return true;
  }
  onceAdded(t2) {
    this.annotationElementId || this.parent.addUndoableEditor(this);
    this._isDraggable = true;
    if (this.#Io) {
      this.#Io = false;
      this.commit();
      this.parent.setSelected(this);
      t2 && this.isOnScreen && this.div.focus();
    }
  }
  remove() {
    this.#Eo();
    super.remove();
  }
  rebuild() {
    if (this.parent) {
      super.rebuild();
      if (null !== this.div) {
        this.#bo();
        this.#Go(this.#Po.box);
        this.isAttachedToDOM || this.parent.add(this);
      }
    }
  }
  setParent(t2) {
    let e2 = false;
    if (this.parent && !t2) {
      this._uiManager.removeShouldRescale(this);
      this.#Eo();
    } else if (t2) {
      this._uiManager.addShouldRescale(this);
      this.#bo(t2);
      e2 = !this.parent && this.div?.classList.contains("selectedEditor");
    }
    super.setParent(t2);
    e2 && this.select();
  }
  #Eo() {
    if (null !== this._drawId && this.parent) {
      this.parent.drawLayer.remove(this._drawId);
      this._drawId = null;
      this._drawingOptions.reset();
    }
  }
  #bo(t2 = this.parent) {
    if (null === this._drawId || this.parent !== t2) if (null === this._drawId) {
      this._drawingOptions.updateAll();
      this._drawId = this.#zo(this.#Po, t2);
    } else this.parent.drawLayer.updateParent(this._drawId, t2.drawLayer);
  }
  #$o([t2, e2, i2, s2]) {
    const { parentDimensions: [n2, r2], rotation: a2 } = this;
    switch (a2) {
      case 90:
        return [e2, 1 - t2, i2 * (r2 / n2), s2 * (n2 / r2)];
      case 180:
        return [1 - t2, 1 - e2, i2, s2];
      case 270:
        return [1 - e2, t2, i2 * (r2 / n2), s2 * (n2 / r2)];
      default:
        return [t2, e2, i2, s2];
    }
  }
  #Wo() {
    const { x: t2, y: e2, width: i2, height: s2, parentDimensions: [n2, r2], rotation: a2 } = this;
    switch (a2) {
      case 90:
        return [1 - e2, t2, i2 * (n2 / r2), s2 * (r2 / n2)];
      case 180:
        return [1 - t2, 1 - e2, i2, s2];
      case 270:
        return [e2, 1 - t2, i2 * (n2 / r2), s2 * (r2 / n2)];
      default:
        return [t2, e2, i2, s2];
    }
  }
  #Go(t2) {
    [this.x, this.y, this.width, this.height] = this.#$o(t2);
    if (this.div) {
      this.fixAndSetPosition();
      this.setDims();
    }
    this._onResized();
  }
  #Vo() {
    const { x: t2, y: e2, width: i2, height: s2, rotation: n2, parentRotation: r2, parentDimensions: [a2, o2] } = this;
    switch ((4 * n2 + r2) / 90) {
      case 1:
        return [1 - e2 - s2, t2, s2, i2];
      case 2:
        return [1 - t2 - i2, 1 - e2 - s2, i2, s2];
      case 3:
        return [e2, 1 - t2 - i2, s2, i2];
      case 4:
        return [t2, e2 - i2 * (a2 / o2), s2 * (o2 / a2), i2 * (a2 / o2)];
      case 5:
        return [1 - e2, t2, i2 * (a2 / o2), s2 * (o2 / a2)];
      case 6:
        return [1 - t2 - s2 * (o2 / a2), 1 - e2, s2 * (o2 / a2), i2 * (a2 / o2)];
      case 7:
        return [e2 - i2 * (a2 / o2), 1 - t2 - s2 * (o2 / a2), i2 * (a2 / o2), s2 * (o2 / a2)];
      case 8:
        return [t2 - i2, e2 - s2, i2, s2];
      case 9:
        return [1 - e2, t2 - i2, s2, i2];
      case 10:
        return [1 - t2, 1 - e2, i2, s2];
      case 11:
        return [e2 - s2, 1 - t2, s2, i2];
      case 12:
        return [t2 - s2 * (o2 / a2), e2, s2 * (o2 / a2), i2 * (a2 / o2)];
      case 13:
        return [1 - e2 - i2 * (a2 / o2), t2 - s2 * (o2 / a2), i2 * (a2 / o2), s2 * (o2 / a2)];
      case 14:
        return [1 - t2, 1 - e2 - i2 * (a2 / o2), s2 * (o2 / a2), i2 * (a2 / o2)];
      case 15:
        return [e2, 1 - t2, i2 * (a2 / o2), s2 * (o2 / a2)];
      default:
        return [t2, e2, i2, s2];
    }
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, DrawingEditor._mergeSVGProperties({ bbox: this.#Vo() }, this.#Po.updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && this.#Go(this.#Po.updateParentDimensions(this.parentDimensions, this.parent.scale));
  }
  static onScaleChangingWhenDrawing() {
  }
  render() {
    if (this.div) return this.div;
    let t2, e2;
    if (this._isCopy) {
      t2 = this.x;
      e2 = this.y;
    }
    const i2 = super.render();
    i2.classList.add("draw");
    const s2 = document.createElement("div");
    i2.append(s2);
    s2.setAttribute("aria-hidden", "true");
    s2.className = "internal";
    this.setDims();
    this._uiManager.addShouldRescale(this);
    this.disableEditing();
    this._isCopy && this._moveAfterPaste(t2, e2);
    return i2;
  }
  static createDrawerInstance(t2, e2, i2, s2, n2) {
    unreachable("Not implemented");
  }
  static startDrawing(t2, e2, i2, s2) {
    const { target: n2, offsetX: r2, offsetY: a2, pointerId: o2, pointerType: l2 } = s2;
    if (DrawingEditor.#Oo && DrawingEditor.#Oo !== l2) return;
    const { viewport: { rotation: h2 } } = t2, { width: d2, height: c2 } = n2.getBoundingClientRect(), u2 = DrawingEditor.#Ro = new AbortController(), p2 = t2.combinedSignal(u2);
    DrawingEditor.#Bo ||= o2;
    DrawingEditor.#Oo ??= l2;
    window.addEventListener("pointerup", (t3) => {
      DrawingEditor.#Bo === t3.pointerId ? this._endDraw(t3) : DrawingEditor.#No?.delete(t3.pointerId);
    }, { signal: p2 });
    window.addEventListener("pointercancel", (t3) => {
      DrawingEditor.#Bo === t3.pointerId ? this._currentParent.endDrawingSession() : DrawingEditor.#No?.delete(t3.pointerId);
    }, { signal: p2 });
    window.addEventListener("pointerdown", (t3) => {
      if (DrawingEditor.#Oo === t3.pointerType) {
        (DrawingEditor.#No ||= /* @__PURE__ */ new Set()).add(t3.pointerId);
        if (DrawingEditor.#Fo.isCancellable()) {
          DrawingEditor.#Fo.removeLastElement();
          DrawingEditor.#Fo.isEmpty() ? this._currentParent.endDrawingSession(true) : this._endDraw(null);
        }
      }
    }, { capture: true, passive: false, signal: p2 });
    window.addEventListener("contextmenu", noContextMenu, { signal: p2 });
    n2.addEventListener("pointermove", this._drawMove.bind(this), { signal: p2 });
    n2.addEventListener("touchmove", (t3) => {
      t3.timeStamp === DrawingEditor.#Uo && stopEvent(t3);
    }, { signal: p2 });
    t2.toggleDrawing();
    e2._editorUndoBar?.hide();
    if (DrawingEditor.#Fo) t2.drawLayer.updateProperties(this._currentDrawId, DrawingEditor.#Fo.startNew(r2, a2, d2, c2, h2));
    else {
      e2.updateUIForDefaultProperties(this);
      DrawingEditor.#Fo = this.createDrawerInstance(r2, a2, d2, c2, h2);
      DrawingEditor.#Lo = this.getDefaultDrawingOptions();
      this._currentParent = t2;
      ({ id: this._currentDrawId } = t2.drawLayer.draw(this._mergeSVGProperties(DrawingEditor.#Lo.toSVGProperties(), DrawingEditor.#Fo.defaultSVGProperties), true, false));
    }
  }
  static _drawMove(t2) {
    DrawingEditor.#Uo = -1;
    if (!DrawingEditor.#Fo) return;
    const { offsetX: e2, offsetY: i2, pointerId: s2 } = t2;
    if (DrawingEditor.#Bo === s2) if (DrawingEditor.#No?.size >= 1) this._endDraw(t2);
    else {
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, DrawingEditor.#Fo.add(e2, i2));
      DrawingEditor.#Uo = t2.timeStamp;
      stopEvent(t2);
    }
  }
  static _cleanup(t2) {
    if (t2) {
      this._currentDrawId = -1;
      this._currentParent = null;
      DrawingEditor.#Fo = null;
      DrawingEditor.#Lo = null;
      DrawingEditor.#Oo = null;
      DrawingEditor.#Uo = NaN;
    }
    if (DrawingEditor.#Ro) {
      DrawingEditor.#Ro.abort();
      DrawingEditor.#Ro = null;
      DrawingEditor.#Bo = NaN;
      DrawingEditor.#No = null;
    }
  }
  static _endDraw(t2) {
    const e2 = this._currentParent;
    if (e2) {
      e2.toggleDrawing(true);
      this._cleanup(false);
      t2?.target === e2.div && e2.drawLayer.updateProperties(this._currentDrawId, DrawingEditor.#Fo.end(t2.offsetX, t2.offsetY));
      if (this.supportMultipleDrawings) {
        const t3 = DrawingEditor.#Fo, i2 = this._currentDrawId, s2 = t3.getLastElement();
        e2.addCommands({ cmd: () => {
          e2.drawLayer.updateProperties(i2, t3.setLastElement(s2));
        }, undo: () => {
          e2.drawLayer.updateProperties(i2, t3.removeLastElement());
        }, mustExec: false, type: g.DRAW_STEP });
        return;
      }
      this.endDrawing(false);
    }
  }
  static endDrawing(t2) {
    const e2 = this._currentParent;
    if (!e2) return null;
    e2.toggleDrawing(true);
    e2.cleanUndoStack(g.DRAW_STEP);
    if (!DrawingEditor.#Fo.isEmpty()) {
      const { pageDimensions: [i2, s2], scale: n2 } = e2, r2 = e2.createAndAddNewEditor({ offsetX: 0, offsetY: 0 }, false, { drawId: this._currentDrawId, drawOutlines: DrawingEditor.#Fo.getOutlines(i2 * n2, s2 * n2, n2, this._INNER_MARGIN), drawingOptions: DrawingEditor.#Lo, mustBeCommitted: !t2 });
      this._cleanup(true);
      return r2;
    }
    e2.drawLayer.remove(this._currentDrawId);
    this._cleanup(true);
    return null;
  }
  createDrawingOptions(t2) {
  }
  static deserializeDraw(t2, e2, i2, s2, n2, r2) {
    unreachable("Not implemented");
  }
  static async deserialize(t2, e2, i2) {
    const { rawDims: { pageWidth: s2, pageHeight: n2, pageX: r2, pageY: a2 } } = e2.viewport, o2 = this.deserializeDraw(r2, a2, s2, n2, this._INNER_MARGIN, t2), l2 = await super.deserialize(t2, e2, i2);
    l2.createDrawingOptions(t2);
    l2.#Ho({ drawOutlines: o2 });
    l2.#bo();
    l2.onScaleChanging();
    l2.rotate();
    return l2;
  }
  serializeDraw(t2) {
    const [e2, i2] = this.pageTranslation, [s2, n2] = this.pageDimensions;
    return this.#Po.serialize([e2, i2, s2, n2], t2);
  }
  renderAnnotationElement(t2) {
    t2.updateEdited({ rect: this.getPDFRect() });
    return null;
  }
  static canCreateNewEmptyEditor() {
    return false;
  }
}
class InkDrawOutliner {
  #Ta = new Float64Array(6);
  #Kr;
  #jo;
  #sn;
  #Fa;
  #Ra;
  #qo = "";
  #Xo = 0;
  #so = new InkDrawOutline();
  #Ko;
  #Yo;
  constructor(t2, e2, i2, s2, n2, r2) {
    this.#Ko = i2;
    this.#Yo = s2;
    this.#sn = n2;
    this.#Fa = r2;
    [t2, e2] = this.#Qo(t2, e2);
    const a2 = this.#Kr = [NaN, NaN, NaN, NaN, t2, e2];
    this.#Ra = [t2, e2];
    this.#jo = [{ line: a2, points: this.#Ra }];
    this.#Ta.set(a2, 0);
  }
  updateProperty(t2, e2) {
    "stroke-width" === t2 && (this.#Fa = e2);
  }
  #Qo(t2, e2) {
    return Outline._normalizePoint(t2, e2, this.#Ko, this.#Yo, this.#sn);
  }
  isEmpty() {
    return !this.#jo || 0 === this.#jo.length;
  }
  isCancellable() {
    return this.#Ra.length <= 10;
  }
  add(t2, e2) {
    [t2, e2] = this.#Qo(t2, e2);
    const [i2, s2, n2, r2] = this.#Ta.subarray(2, 6), a2 = t2 - n2, o2 = e2 - r2;
    if (Math.hypot(this.#Ko * a2, this.#Yo * o2) <= 2) return null;
    this.#Ra.push(t2, e2);
    if (isNaN(i2)) {
      this.#Ta.set([n2, r2, t2, e2], 2);
      this.#Kr.push(NaN, NaN, NaN, NaN, t2, e2);
      return { path: { d: this.toSVGPath() } };
    }
    isNaN(this.#Ta[0]) && this.#Kr.splice(6, 6);
    this.#Ta.set([i2, s2, n2, r2, t2, e2], 0);
    this.#Kr.push(...Outline.createBezierPoints(i2, s2, n2, r2, t2, e2));
    return { path: { d: this.toSVGPath() } };
  }
  end(t2, e2) {
    const i2 = this.add(t2, e2);
    return i2 || (2 === this.#Ra.length ? { path: { d: this.toSVGPath() } } : null);
  }
  startNew(t2, e2, i2, s2, n2) {
    this.#Ko = i2;
    this.#Yo = s2;
    this.#sn = n2;
    [t2, e2] = this.#Qo(t2, e2);
    const r2 = this.#Kr = [NaN, NaN, NaN, NaN, t2, e2];
    this.#Ra = [t2, e2];
    const a2 = this.#jo.at(-1);
    if (a2) {
      a2.line = new Float32Array(a2.line);
      a2.points = new Float32Array(a2.points);
    }
    this.#jo.push({ line: r2, points: this.#Ra });
    this.#Ta.set(r2, 0);
    this.#Xo = 0;
    this.toSVGPath();
    return null;
  }
  getLastElement() {
    return this.#jo.at(-1);
  }
  setLastElement(t2) {
    if (!this.#jo) return this.#so.setLastElement(t2);
    this.#jo.push(t2);
    this.#Kr = t2.line;
    this.#Ra = t2.points;
    this.#Xo = 0;
    return { path: { d: this.toSVGPath() } };
  }
  removeLastElement() {
    if (!this.#jo) return this.#so.removeLastElement();
    this.#jo.pop();
    this.#qo = "";
    for (let t2 = 0, e2 = this.#jo.length; t2 < e2; t2++) {
      const { line: e3, points: i2 } = this.#jo[t2];
      this.#Kr = e3;
      this.#Ra = i2;
      this.#Xo = 0;
      this.toSVGPath();
    }
    return { path: { d: this.#qo } };
  }
  toSVGPath() {
    const t2 = Outline.svgRound(this.#Kr[4]), e2 = Outline.svgRound(this.#Kr[5]);
    if (2 === this.#Ra.length) {
      this.#qo = `${this.#qo} M ${t2} ${e2} Z`;
      return this.#qo;
    }
    if (this.#Ra.length <= 6) {
      const i3 = this.#qo.lastIndexOf("M");
      this.#qo = `${this.#qo.slice(0, i3)} M ${t2} ${e2}`;
      this.#Xo = 6;
    }
    if (4 === this.#Ra.length) {
      const t3 = Outline.svgRound(this.#Kr[10]), e3 = Outline.svgRound(this.#Kr[11]);
      this.#qo = `${this.#qo} L ${t3} ${e3}`;
      this.#Xo = 12;
      return this.#qo;
    }
    const i2 = [];
    if (0 === this.#Xo) {
      i2.push(`M ${t2} ${e2}`);
      this.#Xo = 6;
    }
    for (let t3 = this.#Xo, e3 = this.#Kr.length; t3 < e3; t3 += 6) {
      const [e4, s2, n2, r2, a2, o2] = this.#Kr.slice(t3, t3 + 6).map(Outline.svgRound);
      i2.push(`C${e4} ${s2} ${n2} ${r2} ${a2} ${o2}`);
    }
    this.#qo += i2.join(" ");
    this.#Xo = this.#Kr.length;
    return this.#qo;
  }
  getOutlines(t2, e2, i2, s2) {
    const n2 = this.#jo.at(-1);
    n2.line = new Float32Array(n2.line);
    n2.points = new Float32Array(n2.points);
    this.#so.build(this.#jo, t2, e2, i2, this.#sn, this.#Fa, s2);
    this.#Ta = null;
    this.#Kr = null;
    this.#jo = null;
    this.#qo = null;
    return this.#so;
  }
  get defaultSVGProperties() {
    return { root: { viewBox: "0 0 10000 10000" }, rootClass: { draw: true }, bbox: [0, 0, 1, 1] };
  }
}
class InkDrawOutline extends Outline {
  #$a;
  #Jo = 0;
  #Ca;
  #jo;
  #Ko;
  #Yo;
  #Zo;
  #sn;
  #Fa;
  build(t2, e2, i2, s2, n2, r2, a2) {
    this.#Ko = e2;
    this.#Yo = i2;
    this.#Zo = s2;
    this.#sn = n2;
    this.#Fa = r2;
    this.#Ca = a2 ?? 0;
    this.#jo = t2;
    this.#tl();
  }
  get thickness() {
    return this.#Fa;
  }
  setLastElement(t2) {
    this.#jo.push(t2);
    return { path: { d: this.toSVGPath() } };
  }
  removeLastElement() {
    this.#jo.pop();
    return { path: { d: this.toSVGPath() } };
  }
  toSVGPath() {
    const t2 = [];
    for (const { line: e2 } of this.#jo) {
      t2.push(`M${Outline.svgRound(e2[4])} ${Outline.svgRound(e2[5])}`);
      if (6 !== e2.length) if (12 === e2.length && isNaN(e2[6])) t2.push(`L${Outline.svgRound(e2[10])} ${Outline.svgRound(e2[11])}`);
      else for (let i2 = 6, s2 = e2.length; i2 < s2; i2 += 6) {
        const [s3, n2, r2, a2, o2, l2] = e2.subarray(i2, i2 + 6).map(Outline.svgRound);
        t2.push(`C${s3} ${n2} ${r2} ${a2} ${o2} ${l2}`);
      }
      else t2.push("Z");
    }
    return t2.join("");
  }
  serialize([t2, e2, i2, s2], n2) {
    const r2 = [], a2 = [], [o2, l2, h2, d2] = this.#el();
    let c2, u2, p2, g2, m2, f2, b2, w2, y2;
    switch (this.#sn) {
      case 0:
        y2 = Outline._rescale;
        c2 = t2;
        u2 = e2 + s2;
        p2 = i2;
        g2 = -s2;
        m2 = t2 + o2 * i2;
        f2 = e2 + (1 - l2 - d2) * s2;
        b2 = t2 + (o2 + h2) * i2;
        w2 = e2 + (1 - l2) * s2;
        break;
      case 90:
        y2 = Outline._rescaleAndSwap;
        c2 = t2;
        u2 = e2;
        p2 = i2;
        g2 = s2;
        m2 = t2 + l2 * i2;
        f2 = e2 + o2 * s2;
        b2 = t2 + (l2 + d2) * i2;
        w2 = e2 + (o2 + h2) * s2;
        break;
      case 180:
        y2 = Outline._rescale;
        c2 = t2 + i2;
        u2 = e2;
        p2 = -i2;
        g2 = s2;
        m2 = t2 + (1 - o2 - h2) * i2;
        f2 = e2 + l2 * s2;
        b2 = t2 + (1 - o2) * i2;
        w2 = e2 + (l2 + d2) * s2;
        break;
      case 270:
        y2 = Outline._rescaleAndSwap;
        c2 = t2 + i2;
        u2 = e2 + s2;
        p2 = -i2;
        g2 = -s2;
        m2 = t2 + (1 - l2 - d2) * i2;
        f2 = e2 + (1 - o2 - h2) * s2;
        b2 = t2 + (1 - l2) * i2;
        w2 = e2 + (1 - o2) * s2;
    }
    for (const { line: t3, points: e3 } of this.#jo) {
      r2.push(y2(t3, c2, u2, p2, g2, n2 ? new Array(t3.length) : null));
      a2.push(y2(e3, c2, u2, p2, g2, n2 ? new Array(e3.length) : null));
    }
    return { lines: r2, points: a2, rect: [m2, f2, b2, w2] };
  }
  static deserialize(t2, e2, i2, s2, n2, { paths: { lines: r2, points: a2 }, rotation: o2, thickness: l2 }) {
    const h2 = [];
    let d2, c2, u2, p2, g2;
    switch (o2) {
      case 0:
        g2 = Outline._rescale;
        d2 = -t2 / i2;
        c2 = e2 / s2 + 1;
        u2 = 1 / i2;
        p2 = -1 / s2;
        break;
      case 90:
        g2 = Outline._rescaleAndSwap;
        d2 = -e2 / s2;
        c2 = -t2 / i2;
        u2 = 1 / s2;
        p2 = 1 / i2;
        break;
      case 180:
        g2 = Outline._rescale;
        d2 = t2 / i2 + 1;
        c2 = -e2 / s2;
        u2 = -1 / i2;
        p2 = 1 / s2;
        break;
      case 270:
        g2 = Outline._rescaleAndSwap;
        d2 = e2 / s2 + 1;
        c2 = t2 / i2 + 1;
        u2 = -1 / s2;
        p2 = -1 / i2;
    }
    if (!r2) {
      r2 = [];
      for (const t3 of a2) {
        const e3 = t3.length;
        if (2 === e3) {
          r2.push(new Float32Array([NaN, NaN, NaN, NaN, t3[0], t3[1]]));
          continue;
        }
        if (4 === e3) {
          r2.push(new Float32Array([NaN, NaN, NaN, NaN, t3[0], t3[1], NaN, NaN, NaN, NaN, t3[2], t3[3]]));
          continue;
        }
        const i3 = new Float32Array(3 * (e3 - 2));
        r2.push(i3);
        let [s3, n3, a3, o3] = t3.subarray(0, 4);
        i3.set([NaN, NaN, NaN, NaN, s3, n3], 0);
        for (let r3 = 4; r3 < e3; r3 += 2) {
          const e4 = t3[r3], l3 = t3[r3 + 1];
          i3.set(Outline.createBezierPoints(s3, n3, a3, o3, e4, l3), 3 * (r3 - 2));
          [s3, n3, a3, o3] = [a3, o3, e4, l3];
        }
      }
    }
    for (let t3 = 0, e3 = r2.length; t3 < e3; t3++) h2.push({ line: g2(r2[t3].map((t4) => t4 ?? NaN), d2, c2, u2, p2), points: g2(a2[t3].map((t4) => t4 ?? NaN), d2, c2, u2, p2) });
    const m2 = new this.prototype.constructor();
    m2.build(h2, i2, s2, 1, o2, l2, n2);
    return m2;
  }
  #il(t2 = this.#Fa) {
    const e2 = this.#Ca + t2 / 2 * this.#Zo;
    return this.#sn % 180 == 0 ? [e2 / this.#Ko, e2 / this.#Yo] : [e2 / this.#Yo, e2 / this.#Ko];
  }
  #el() {
    const [t2, e2, i2, s2] = this.#$a, [n2, r2] = this.#il(0);
    return [t2 + n2, e2 + r2, i2 - 2 * n2, s2 - 2 * r2];
  }
  #tl() {
    const t2 = this.#$a = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
    for (const { line: e3 } of this.#jo) {
      if (e3.length <= 12) {
        for (let i4 = 4, s3 = e3.length; i4 < s3; i4 += 6) Util.pointBoundingBox(e3[i4], e3[i4 + 1], t2);
        continue;
      }
      let i3 = e3[4], s2 = e3[5];
      for (let n2 = 6, r2 = e3.length; n2 < r2; n2 += 6) {
        const [r3, a2, o2, l2, h2, d2] = e3.subarray(n2, n2 + 6);
        Util.bezierBoundingBox(i3, s2, r3, a2, o2, l2, h2, d2, t2);
        i3 = h2;
        s2 = d2;
      }
    }
    const [e2, i2] = this.#il();
    t2[0] = MathClamp(t2[0] - e2, 0, 1);
    t2[1] = MathClamp(t2[1] - i2, 0, 1);
    t2[2] = MathClamp(t2[2] + e2, 0, 1);
    t2[3] = MathClamp(t2[3] + i2, 0, 1);
    t2[2] -= t2[0];
    t2[3] -= t2[1];
  }
  get box() {
    return this.#$a;
  }
  updateProperty(t2, e2) {
    return "stroke-width" === t2 ? this.#Ao(e2) : null;
  }
  #Ao(t2) {
    const [e2, i2] = this.#il();
    this.#Fa = t2;
    const [s2, n2] = this.#il(), [r2, a2] = [s2 - e2, n2 - i2], o2 = this.#$a;
    o2[0] -= r2;
    o2[1] -= a2;
    o2[2] += 2 * r2;
    o2[3] += 2 * a2;
    return o2;
  }
  updateParentDimensions([t2, e2], i2) {
    const [s2, n2] = this.#il();
    this.#Ko = t2;
    this.#Yo = e2;
    this.#Zo = i2;
    const [r2, a2] = this.#il(), o2 = r2 - s2, l2 = a2 - n2, h2 = this.#$a;
    h2[0] -= o2;
    h2[1] -= l2;
    h2[2] += 2 * o2;
    h2[3] += 2 * l2;
    return h2;
  }
  updateRotation(t2) {
    this.#Jo = t2;
    return { path: { transform: this.rotationTransform } };
  }
  get viewBox() {
    return this.#$a.map(Outline.svgRound).join(" ");
  }
  get defaultProperties() {
    const [t2, e2] = this.#$a;
    return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${Outline.svgRound(t2)} ${Outline.svgRound(e2)}` } };
  }
  get rotationTransform() {
    const [, , t2, e2] = this.#$a;
    let i2 = 0, s2 = 0, n2 = 0, r2 = 0, a2 = 0, o2 = 0;
    switch (this.#Jo) {
      case 90:
        s2 = e2 / t2;
        n2 = -t2 / e2;
        a2 = t2;
        break;
      case 180:
        i2 = -1;
        r2 = -1;
        a2 = t2;
        o2 = e2;
        break;
      case 270:
        s2 = -e2 / t2;
        n2 = t2 / e2;
        o2 = e2;
        break;
      default:
        return "";
    }
    return `matrix(${i2} ${s2} ${n2} ${r2} ${Outline.svgRound(a2)} ${Outline.svgRound(o2)})`;
  }
  getPathResizingSVGProperties([t2, e2, i2, s2]) {
    const [n2, r2] = this.#il(), [a2, o2, l2, h2] = this.#$a;
    if (Math.abs(l2 - n2) <= Outline.PRECISION || Math.abs(h2 - r2) <= Outline.PRECISION) {
      const n3 = t2 + i2 / 2 - (a2 + l2 / 2), r3 = e2 + s2 / 2 - (o2 + h2 / 2);
      return { path: { "transform-origin": `${Outline.svgRound(t2)} ${Outline.svgRound(e2)}`, transform: `${this.rotationTransform} translate(${n3} ${r3})` } };
    }
    const d2 = (i2 - 2 * n2) / (l2 - 2 * n2), c2 = (s2 - 2 * r2) / (h2 - 2 * r2), u2 = l2 / i2, p2 = h2 / s2;
    return { path: { "transform-origin": `${Outline.svgRound(a2)} ${Outline.svgRound(o2)}`, transform: `${this.rotationTransform} scale(${u2} ${p2}) translate(${Outline.svgRound(n2)} ${Outline.svgRound(r2)}) scale(${d2} ${c2}) translate(${Outline.svgRound(-n2)} ${Outline.svgRound(-r2)})` } };
  }
  getPathResizedSVGProperties([t2, e2, i2, s2]) {
    const [n2, r2] = this.#il(), a2 = this.#$a, [o2, l2, h2, d2] = a2;
    a2[0] = t2;
    a2[1] = e2;
    a2[2] = i2;
    a2[3] = s2;
    if (Math.abs(h2 - n2) <= Outline.PRECISION || Math.abs(d2 - r2) <= Outline.PRECISION) {
      const n3 = t2 + i2 / 2 - (o2 + h2 / 2), r3 = e2 + s2 / 2 - (l2 + d2 / 2);
      for (const { line: t3, points: e3 } of this.#jo) {
        Outline._translate(t3, n3, r3, t3);
        Outline._translate(e3, n3, r3, e3);
      }
      return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${Outline.svgRound(t2)} ${Outline.svgRound(e2)}`, transform: this.rotationTransform || null, d: this.toSVGPath() } };
    }
    const c2 = (i2 - 2 * n2) / (h2 - 2 * n2), u2 = (s2 - 2 * r2) / (d2 - 2 * r2), p2 = -c2 * (o2 + n2) + t2 + n2, g2 = -u2 * (l2 + r2) + e2 + r2;
    if (1 !== c2 || 1 !== u2 || 0 !== p2 || 0 !== g2) for (const { line: t3, points: e3 } of this.#jo) {
      Outline._rescale(t3, p2, g2, c2, u2, t3);
      Outline._rescale(e3, p2, g2, c2, u2, e3);
    }
    return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${Outline.svgRound(t2)} ${Outline.svgRound(e2)}`, transform: this.rotationTransform || null, d: this.toSVGPath() } };
  }
  getPathTranslatedSVGProperties([t2, e2], i2) {
    const [s2, n2] = i2, r2 = this.#$a, a2 = t2 - r2[0], o2 = e2 - r2[1];
    if (this.#Ko === s2 && this.#Yo === n2) for (const { line: t3, points: e3 } of this.#jo) {
      Outline._translate(t3, a2, o2, t3);
      Outline._translate(e3, a2, o2, e3);
    }
    else {
      const t3 = this.#Ko / s2, e3 = this.#Yo / n2;
      this.#Ko = s2;
      this.#Yo = n2;
      for (const { line: i3, points: s3 } of this.#jo) {
        Outline._rescale(i3, a2, o2, t3, e3, i3);
        Outline._rescale(s3, a2, o2, t3, e3, s3);
      }
      r2[2] *= t3;
      r2[3] *= e3;
    }
    r2[0] = t2;
    r2[1] = e2;
    return { root: { viewBox: this.viewBox }, path: { d: this.toSVGPath(), "transform-origin": `${Outline.svgRound(t2)} ${Outline.svgRound(e2)}` } };
  }
  get defaultSVGProperties() {
    const t2 = this.#$a;
    return { root: { viewBox: this.viewBox }, rootClass: { draw: true }, path: { d: this.toSVGPath(), "transform-origin": `${Outline.svgRound(t2[0])} ${Outline.svgRound(t2[1])}`, transform: this.rotationTransform || null }, bbox: t2 };
  }
}
class InkDrawingOptions extends DrawingOptions {
  constructor(t2) {
    super();
    this._viewParameters = t2;
    super.updateProperties({ fill: "none", stroke: AnnotationEditor._defaultLineColor, "stroke-opacity": 1, "stroke-width": 1, "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": 10 });
  }
  updateSVGProperty(t2, e2) {
    if ("stroke-width" === t2) {
      e2 ??= this["stroke-width"];
      e2 *= this._viewParameters.realScale;
    }
    super.updateSVGProperty(t2, e2);
  }
  clone() {
    const t2 = new InkDrawingOptions(this._viewParameters);
    t2.updateAll(this);
    return t2;
  }
}
class InkEditor extends DrawingEditor {
  static _type = "ink";
  static _editorType = p.INK;
  static _defaultDrawingOptions = null;
  constructor(t2) {
    super({ ...t2, name: "inkEditor" });
    this._willKeepAspectRatio = true;
    this.defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(t2, e2) {
    AnnotationEditor.initialize(t2, e2);
    this._defaultDrawingOptions = new InkDrawingOptions(e2.viewParameters);
  }
  static getDefaultDrawingOptions(t2) {
    const e2 = this._defaultDrawingOptions.clone();
    e2.updateProperties(t2);
    return e2;
  }
  static get supportMultipleDrawings() {
    return true;
  }
  static get typesMap() {
    return shadow(this, "typesMap", /* @__PURE__ */ new Map([[g.INK_THICKNESS, "stroke-width"], [g.INK_COLOR, "stroke"], [g.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(t2, e2, i2, s2, n2) {
    return new InkDrawOutliner(t2, e2, i2, s2, n2, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(t2, e2, i2, s2, n2, r2) {
    return InkDrawOutline.deserialize(t2, e2, i2, s2, n2, r2);
  }
  static async deserialize(t2, e2, i2) {
    let s2 = null;
    if (t2 instanceof InkAnnotationElement) {
      const { data: { inkLists: e3, rect: i3, rotation: n3, id: r2, color: a2, opacity: o2, borderStyle: { rawWidth: l2 }, popupRef: h2, richText: d2, contentsObj: c2, creationDate: u2, modificationDate: g2 }, parent: { page: { pageNumber: m2 } } } = t2;
      s2 = t2 = { annotationType: p.INK, color: Array.from(a2), thickness: l2, opacity: o2, paths: { points: e3 }, boxes: null, pageIndex: m2 - 1, rect: i3.slice(0), rotation: n3, annotationElementId: r2, id: r2, deleted: false, popupRef: h2, richText: d2, comment: c2?.str || null, creationDate: u2, modificationDate: g2 };
    }
    const n2 = await super.deserialize(t2, e2, i2);
    n2._initialData = s2;
    t2.comment && n2.setCommentData(t2);
    return n2;
  }
  get toolbarButtons() {
    this._colorPicker ||= new BasicColorPicker(this);
    return [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return g.INK_COLOR;
  }
  get color() {
    return this._drawingOptions.stroke;
  }
  get opacity() {
    return this._drawingOptions["stroke-opacity"];
  }
  onScaleChanging() {
    if (!this.parent) return;
    super.onScaleChanging();
    const { _drawId: t2, _drawingOptions: e2, parent: i2 } = this;
    e2.updateSVGProperty("stroke-width");
    i2.drawLayer.updateProperties(t2, e2.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const t2 = this._currentParent;
    if (t2) {
      super.onScaleChangingWhenDrawing();
      this._defaultDrawingOptions.updateSVGProperty("stroke-width");
      t2.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
    }
  }
  createDrawingOptions({ color: t2, thickness: e2, opacity: i2 }) {
    this._drawingOptions = InkEditor.getDefaultDrawingOptions({ stroke: Util.makeHexColor(...t2), "stroke-width": e2, "stroke-opacity": i2 });
  }
  serialize(t2 = false) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const { lines: e2, points: i2 } = this.serializeDraw(t2), { _drawingOptions: { stroke: s2, "stroke-opacity": n2, "stroke-width": r2 } } = this, a2 = Object.assign(super.serialize(t2), { color: AnnotationEditor._colorManager.convert(s2), opacity: n2, thickness: r2, paths: { lines: e2, points: i2 } });
    this.addComment(a2);
    if (t2) {
      a2.isCopy = true;
      return a2;
    }
    if (this.annotationElementId && !this.#va(a2)) return null;
    a2.id = this.annotationElementId;
    return a2;
  }
  #va(t2) {
    const { color: e2, thickness: i2, opacity: s2, pageIndex: n2 } = this._initialData;
    return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || t2.color.some((t3, i3) => t3 !== e2[i3]) || t2.thickness !== i2 || t2.opacity !== s2 || t2.pageIndex !== n2;
  }
  renderAnnotationElement(t2) {
    if (this.deleted) {
      t2.hide();
      return null;
    }
    const { points: e2, rect: i2 } = this.serializeDraw(false);
    t2.updateEdited({ rect: i2, thickness: this._drawingOptions["stroke-width"], points: e2, popup: this.comment });
    return null;
  }
}
class ContourDrawOutline extends InkDrawOutline {
  toSVGPath() {
    let t2 = super.toSVGPath();
    t2.endsWith("Z") || (t2 += "Z");
    return t2;
  }
}
class SignatureExtractor {
  static #sl = { maxDim: 512, sigmaSFactor: 0.02, sigmaR: 25, kernelSize: 16 };
  static #nl(t2, e2, i2, s2) {
    s2 -= e2;
    return 0 === (i2 -= t2) ? s2 > 0 ? 0 : 4 : 1 === i2 ? s2 + 6 : 2 - s2;
  }
  static #rl = new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]);
  static #al(t2, e2, i2, s2, n2, r2, a2) {
    const o2 = this.#nl(i2, s2, n2, r2);
    for (let n3 = 0; n3 < 8; n3++) {
      const r3 = (-n3 + o2 - a2 + 16) % 8;
      if (0 !== t2[(i2 + this.#rl[2 * r3]) * e2 + (s2 + this.#rl[2 * r3 + 1])]) return r3;
    }
    return -1;
  }
  static #ol(t2, e2, i2, s2, n2, r2, a2) {
    const o2 = this.#nl(i2, s2, n2, r2);
    for (let n3 = 0; n3 < 8; n3++) {
      const r3 = (n3 + o2 + a2 + 16) % 8;
      if (0 !== t2[(i2 + this.#rl[2 * r3]) * e2 + (s2 + this.#rl[2 * r3 + 1])]) return r3;
    }
    return -1;
  }
  static #ll(t2, e2, i2, s2) {
    const n2 = t2.length, r2 = new Int32Array(n2);
    for (let e3 = 0; e3 < n2; e3++) r2[e3] = t2[e3] <= s2 ? 1 : 0;
    for (let t3 = 1; t3 < i2 - 1; t3++) r2[t3 * e2] = r2[t3 * e2 + e2 - 1] = 0;
    for (let t3 = 0; t3 < e2; t3++) r2[t3] = r2[e2 * i2 - 1 - t3] = 0;
    let a2, o2 = 1;
    const l2 = [];
    for (let t3 = 1; t3 < i2 - 1; t3++) {
      a2 = 1;
      for (let i3 = 1; i3 < e2 - 1; i3++) {
        const s3 = t3 * e2 + i3, n3 = r2[s3];
        if (0 === n3) continue;
        let h2 = t3, d2 = i3;
        if (1 === n3 && 0 === r2[s3 - 1]) {
          o2 += 1;
          d2 -= 1;
        } else {
          if (!(n3 >= 1 && 0 === r2[s3 + 1])) {
            1 !== n3 && (a2 = Math.abs(n3));
            continue;
          }
          o2 += 1;
          d2 += 1;
          n3 > 1 && (a2 = n3);
        }
        const c2 = [i3, t3], u2 = d2 === i3 + 1, p2 = { isHole: u2, points: c2, id: o2, parent: 0 };
        l2.push(p2);
        let g2;
        for (const t4 of l2) if (t4.id === a2) {
          g2 = t4;
          break;
        }
        g2 ? g2.isHole ? p2.parent = u2 ? g2.parent : a2 : p2.parent = u2 ? a2 : g2.parent : p2.parent = u2 ? a2 : 0;
        const m2 = this.#al(r2, e2, t3, i3, h2, d2, 0);
        if (-1 === m2) {
          r2[s3] = -o2;
          1 !== r2[s3] && (a2 = Math.abs(r2[s3]));
          continue;
        }
        let f2 = this.#rl[2 * m2], b2 = this.#rl[2 * m2 + 1];
        const w2 = t3 + f2, y2 = i3 + b2;
        h2 = w2;
        d2 = y2;
        let A2 = t3, v2 = i3;
        for (; ; ) {
          const n4 = this.#ol(r2, e2, A2, v2, h2, d2, 1);
          f2 = this.#rl[2 * n4];
          b2 = this.#rl[2 * n4 + 1];
          const l3 = A2 + f2, u3 = v2 + b2;
          c2.push(u3, l3);
          const p3 = A2 * e2 + v2;
          0 === r2[p3 + 1] ? r2[p3] = -o2 : 1 === r2[p3] && (r2[p3] = o2);
          if (l3 === t3 && u3 === i3 && A2 === w2 && v2 === y2) {
            1 !== r2[s3] && (a2 = Math.abs(r2[s3]));
            break;
          }
          h2 = A2;
          d2 = v2;
          A2 = l3;
          v2 = u3;
        }
      }
    }
    return l2;
  }
  static #hl(t2, e2, i2, s2) {
    if (i2 - e2 <= 4) {
      for (let n3 = e2; n3 < i2 - 2; n3 += 2) s2.push(t2[n3], t2[n3 + 1]);
      return;
    }
    const n2 = t2[e2], r2 = t2[e2 + 1], a2 = t2[i2 - 4] - n2, o2 = t2[i2 - 3] - r2, l2 = Math.hypot(a2, o2), h2 = a2 / l2, d2 = o2 / l2, c2 = h2 * r2 - d2 * n2, u2 = o2 / a2, p2 = 1 / l2, g2 = Math.atan(u2), m2 = Math.cos(g2), f2 = Math.sin(g2), b2 = p2 * (Math.abs(m2) + Math.abs(f2)), w2 = p2 * (1 - b2 + b2 ** 2), y2 = Math.max(Math.atan(Math.abs(f2 + m2) * w2), Math.atan(Math.abs(f2 - m2) * w2));
    let A2 = 0, v2 = e2;
    for (let s3 = e2 + 2; s3 < i2 - 2; s3 += 2) {
      const e3 = Math.abs(c2 - h2 * t2[s3 + 1] + d2 * t2[s3]);
      if (e3 > A2) {
        v2 = s3;
        A2 = e3;
      }
    }
    if (A2 > (l2 * y2) ** 2) {
      this.#hl(t2, e2, v2 + 2, s2);
      this.#hl(t2, v2, i2, s2);
    } else s2.push(n2, r2);
  }
  static #dl(t2) {
    const e2 = [], i2 = t2.length;
    this.#hl(t2, 0, i2, e2);
    e2.push(t2[i2 - 2], t2[i2 - 1]);
    return e2.length <= 4 ? null : e2;
  }
  static #cl(t2, e2, i2, s2, n2, r2) {
    const a2 = new Float32Array(r2 ** 2), o2 = -2 * s2 ** 2, l2 = r2 >> 1;
    for (let t3 = 0; t3 < r2; t3++) {
      const e3 = (t3 - l2) ** 2;
      for (let i3 = 0; i3 < r2; i3++) a2[t3 * r2 + i3] = Math.exp((e3 + (i3 - l2) ** 2) / o2);
    }
    const h2 = new Float32Array(256), d2 = -2 * n2 ** 2;
    for (let t3 = 0; t3 < 256; t3++) h2[t3] = Math.exp(t3 ** 2 / d2);
    const c2 = t2.length, u2 = new Uint8Array(c2), p2 = new Uint32Array(256);
    for (let s3 = 0; s3 < i2; s3++) for (let n3 = 0; n3 < e2; n3++) {
      const o3 = s3 * e2 + n3, d3 = t2[o3];
      let c3 = 0, g2 = 0;
      for (let o4 = 0; o4 < r2; o4++) {
        const u3 = s3 + o4 - l2;
        if (!(u3 < 0 || u3 >= i2)) for (let i3 = 0; i3 < r2; i3++) {
          const s4 = n3 + i3 - l2;
          if (s4 < 0 || s4 >= e2) continue;
          const p3 = t2[u3 * e2 + s4], m2 = a2[o4 * r2 + i3] * h2[Math.abs(p3 - d3)];
          c3 += p3 * m2;
          g2 += m2;
        }
      }
      p2[u2[o3] = Math.round(c3 / g2)]++;
    }
    return [u2, p2];
  }
  static #ul(t2) {
    const e2 = new Uint32Array(256);
    for (const i2 of t2) e2[i2]++;
    return e2;
  }
  static #pl(t2) {
    const e2 = t2.length, i2 = new Uint8ClampedArray(e2 >> 2);
    let s2 = -1 / 0, n2 = 1 / 0;
    for (let e3 = 0, r3 = i2.length; e3 < r3; e3++) {
      const r4 = i2[e3] = t2[e3 << 2];
      s2 = Math.max(s2, r4);
      n2 = Math.min(n2, r4);
    }
    const r2 = 255 / (s2 - n2);
    for (let t3 = 0, e3 = i2.length; t3 < e3; t3++) i2[t3] = (i2[t3] - n2) * r2;
    return i2;
  }
  static #gl(t2) {
    let e2, i2 = -1 / 0, s2 = -1 / 0;
    const n2 = t2.findIndex((t3) => 0 !== t3);
    let r2 = n2, a2 = n2;
    for (e2 = n2; e2 < 256; e2++) {
      const n3 = t2[e2];
      if (n3 > i2) {
        if (e2 - r2 > s2) {
          s2 = e2 - r2;
          a2 = e2 - 1;
        }
        i2 = n3;
        r2 = e2;
      }
    }
    for (e2 = a2 - 1; e2 >= 0 && !(t2[e2] > t2[e2 + 1]); e2--) ;
    return e2;
  }
  static #ml(t2) {
    const e2 = t2, { width: i2, height: s2 } = t2, { maxDim: n2 } = this.#sl;
    let r2 = i2, a2 = s2;
    if (i2 > n2 || s2 > n2) {
      let o3 = i2, l3 = s2, h2 = Math.log2(Math.max(i2, s2) / n2);
      const d2 = Math.floor(h2);
      h2 = h2 === d2 ? d2 - 1 : d2;
      for (let i3 = 0; i3 < h2; i3++) {
        r2 = Math.ceil(o3 / 2);
        a2 = Math.ceil(l3 / 2);
        const i4 = new OffscreenCanvas(r2, a2);
        i4.getContext("2d").drawImage(t2, 0, 0, o3, l3, 0, 0, r2, a2);
        o3 = r2;
        l3 = a2;
        t2 !== e2 && t2.close();
        t2 = i4.transferToImageBitmap();
      }
      const c2 = Math.min(n2 / r2, n2 / a2);
      r2 = Math.round(r2 * c2);
      a2 = Math.round(a2 * c2);
    }
    const o2 = new OffscreenCanvas(r2, a2).getContext("2d", { willReadFrequently: true });
    o2.fillStyle = "white";
    o2.fillRect(0, 0, r2, a2);
    o2.filter = "grayscale(1)";
    o2.drawImage(t2, 0, 0, t2.width, t2.height, 0, 0, r2, a2);
    const l2 = o2.getImageData(0, 0, r2, a2).data;
    return [this.#pl(l2), r2, a2];
  }
  static extractContoursFromText(t2, { fontFamily: e2, fontStyle: i2, fontWeight: s2 }, n2, r2, a2, o2) {
    let l2 = new OffscreenCanvas(1, 1), h2 = l2.getContext("2d", { alpha: false });
    const d2 = h2.font = `${i2} ${s2} 200px ${e2}`, { actualBoundingBoxLeft: c2, actualBoundingBoxRight: u2, actualBoundingBoxAscent: p2, actualBoundingBoxDescent: g2, fontBoundingBoxAscent: m2, fontBoundingBoxDescent: f2, width: b2 } = h2.measureText(t2), w2 = 1.5, y2 = Math.ceil(Math.max(Math.abs(c2) + Math.abs(u2) || 0, b2) * w2), A2 = Math.ceil(Math.max(Math.abs(p2) + Math.abs(g2) || 200, Math.abs(m2) + Math.abs(f2) || 200) * w2);
    l2 = new OffscreenCanvas(y2, A2);
    h2 = l2.getContext("2d", { alpha: true, willReadFrequently: true });
    h2.font = d2;
    h2.filter = "grayscale(1)";
    h2.fillStyle = "white";
    h2.fillRect(0, 0, y2, A2);
    h2.fillStyle = "black";
    h2.fillText(t2, 0.5 * y2 / 2, 1.5 * A2 / 2);
    const v2 = this.#pl(h2.getImageData(0, 0, y2, A2).data), x2 = this.#ul(v2), E2 = this.#gl(x2), C2 = this.#ll(v2, y2, A2, E2);
    return this.processDrawnLines({ lines: { curves: C2, width: y2, height: A2 }, pageWidth: n2, pageHeight: r2, rotation: a2, innerMargin: o2, mustSmooth: true, areContours: true });
  }
  static process(t2, e2, i2, s2, n2) {
    const [r2, a2, o2] = this.#ml(t2), [l2, h2] = this.#cl(r2, a2, o2, Math.hypot(a2, o2) * this.#sl.sigmaSFactor, this.#sl.sigmaR, this.#sl.kernelSize), d2 = this.#gl(h2), c2 = this.#ll(l2, a2, o2, d2);
    return this.processDrawnLines({ lines: { curves: c2, width: a2, height: o2 }, pageWidth: e2, pageHeight: i2, rotation: s2, innerMargin: n2, mustSmooth: true, areContours: true });
  }
  static processDrawnLines({ lines: t2, pageWidth: e2, pageHeight: i2, rotation: s2, innerMargin: n2, mustSmooth: r2, areContours: a2 }) {
    s2 % 180 != 0 && ([e2, i2] = [i2, e2]);
    const { curves: o2, width: l2, height: h2 } = t2, d2 = t2.thickness ?? 0, c2 = [], u2 = Math.min(e2 / l2, i2 / h2), p2 = u2 / e2, g2 = u2 / i2, m2 = [];
    for (const { points: t3 } of o2) {
      const e3 = r2 ? this.#dl(t3) : t3;
      if (!e3) continue;
      m2.push(e3);
      const i3 = e3.length, s3 = new Float32Array(i3), n3 = new Float32Array(3 * (2 === i3 ? 2 : i3 - 2));
      c2.push({ line: n3, points: s3 });
      if (2 === i3) {
        s3[0] = e3[0] * p2;
        s3[1] = e3[1] * g2;
        n3.set([NaN, NaN, NaN, NaN, s3[0], s3[1]], 0);
        continue;
      }
      let [a3, o3, l3, h3] = e3;
      a3 *= p2;
      o3 *= g2;
      l3 *= p2;
      h3 *= g2;
      s3.set([a3, o3, l3, h3], 0);
      n3.set([NaN, NaN, NaN, NaN, a3, o3], 0);
      for (let t4 = 4; t4 < i3; t4 += 2) {
        const i4 = s3[t4] = e3[t4] * p2, r3 = s3[t4 + 1] = e3[t4 + 1] * g2;
        n3.set(Outline.createBezierPoints(a3, o3, l3, h3, i4, r3), 3 * (t4 - 2));
        [a3, o3, l3, h3] = [l3, h3, i4, r3];
      }
    }
    if (0 === c2.length) return null;
    const f2 = a2 ? new ContourDrawOutline() : new InkDrawOutline();
    f2.build(c2, e2, i2, 1, s2, a2 ? 0 : d2, n2);
    return { outline: f2, newCurves: m2, areContours: a2, thickness: d2, width: l2, height: h2 };
  }
  static async compressSignature({ outlines: t2, areContours: e2, thickness: i2, width: s2, height: n2 }) {
    let r2, a2 = 1 / 0, o2 = -1 / 0, l2 = 0;
    for (const e3 of t2) {
      l2 += e3.length;
      for (let t3 = 2, i3 = e3.length; t3 < i3; t3++) {
        const i4 = e3[t3] - e3[t3 - 2];
        a2 = Math.min(a2, i4);
        o2 = Math.max(o2, i4);
      }
    }
    r2 = a2 >= -128 && o2 <= 127 ? Int8Array : a2 >= -32768 && o2 <= 32767 ? Int16Array : Int32Array;
    const h2 = t2.length, d2 = 8 + 3 * h2, c2 = new Uint32Array(d2);
    let u2 = 0;
    c2[u2++] = d2 * Uint32Array.BYTES_PER_ELEMENT + (l2 - 2 * h2) * r2.BYTES_PER_ELEMENT;
    c2[u2++] = 0;
    c2[u2++] = s2;
    c2[u2++] = n2;
    c2[u2++] = e2 ? 0 : 1;
    c2[u2++] = Math.max(0, Math.floor(i2 ?? 0));
    c2[u2++] = h2;
    c2[u2++] = r2.BYTES_PER_ELEMENT;
    for (const e3 of t2) {
      c2[u2++] = e3.length - 2;
      c2[u2++] = e3[0];
      c2[u2++] = e3[1];
    }
    const p2 = new CompressionStream("deflate-raw"), g2 = p2.writable.getWriter();
    await g2.ready;
    g2.write(c2);
    const m2 = r2.prototype.constructor;
    for (const e3 of t2) {
      const t3 = new m2(e3.length - 2);
      for (let i3 = 2, s3 = e3.length; i3 < s3; i3++) t3[i3 - 2] = e3[i3] - e3[i3 - 2];
      g2.write(t3);
    }
    g2.close();
    const f2 = await new Response(p2.readable).arrayBuffer();
    return toBase64Util(new Uint8Array(f2));
  }
  static async decompressSignature(t2) {
    try {
      const e2 = (function fromBase64Util(t3) {
        return Uint8Array.fromBase64 ? Uint8Array.fromBase64(t3) : stringToBytes(atob(t3));
      })(t2), { readable: i2, writable: s2 } = new DecompressionStream("deflate-raw"), n2 = s2.getWriter();
      await n2.ready;
      n2.write(e2).then(async () => {
        await n2.ready;
        await n2.close();
      }).catch(() => {
      });
      let r2 = null, a2 = 0;
      for await (const t3 of i2) {
        r2 ||= new Uint8Array(new Uint32Array(t3.buffer, 0, 4)[0]);
        r2.set(t3, a2);
        a2 += t3.length;
      }
      const o2 = new Uint32Array(r2.buffer, 0, r2.length >> 2), l2 = o2[1];
      if (0 !== l2) throw new Error(`Invalid version: ${l2}`);
      const h2 = o2[2], d2 = o2[3], c2 = 0 === o2[4], u2 = o2[5], p2 = o2[6], g2 = o2[7], m2 = [], f2 = (8 + 3 * p2) * Uint32Array.BYTES_PER_ELEMENT;
      let b2;
      switch (g2) {
        case Int8Array.BYTES_PER_ELEMENT:
          b2 = new Int8Array(r2.buffer, f2);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          b2 = new Int16Array(r2.buffer, f2);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          b2 = new Int32Array(r2.buffer, f2);
      }
      a2 = 0;
      for (let t3 = 0; t3 < p2; t3++) {
        const e3 = o2[3 * t3 + 8], i3 = new Float32Array(e3 + 2);
        m2.push(i3);
        for (let e4 = 0; e4 < 2; e4++) i3[e4] = o2[3 * t3 + 8 + e4 + 1];
        for (let t4 = 0; t4 < e3; t4++) i3[t4 + 2] = i3[t4] + b2[a2++];
      }
      return { areContours: c2, thickness: u2, outlines: m2, width: h2, height: d2 };
    } catch (t3) {
      warn(`decompressSignature: ${t3}`);
      return null;
    }
  }
}
class SignatureOptions extends DrawingOptions {
  constructor() {
    super();
    super.updateProperties({ fill: AnnotationEditor._defaultLineColor, "stroke-width": 0 });
  }
  clone() {
    const t2 = new SignatureOptions();
    t2.updateAll(this);
    return t2;
  }
}
class DrawnSignatureOptions extends InkDrawingOptions {
  constructor(t2) {
    super(t2);
    super.updateProperties({ stroke: AnnotationEditor._defaultLineColor, "stroke-width": 1 });
  }
  clone() {
    const t2 = new DrawnSignatureOptions(this._viewParameters);
    t2.updateAll(this);
    return t2;
  }
}
class SignatureEditor extends DrawingEditor {
  #fl = false;
  #bl = null;
  #wl = null;
  #yl = null;
  static _type = "signature";
  static _editorType = p.SIGNATURE;
  static _defaultDrawingOptions = null;
  constructor(t2) {
    super({ ...t2, mustBeCommitted: true, name: "signatureEditor" });
    this._willKeepAspectRatio = true;
    this.#wl = t2.signatureData || null;
    this.#bl = null;
    this.defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(t2, e2) {
    AnnotationEditor.initialize(t2, e2);
    this._defaultDrawingOptions = new SignatureOptions();
    this._defaultDrawnSignatureOptions = new DrawnSignatureOptions(e2.viewParameters);
  }
  static getDefaultDrawingOptions(t2) {
    const e2 = this._defaultDrawingOptions.clone();
    e2.updateProperties(t2);
    return e2;
  }
  static get supportMultipleDrawings() {
    return false;
  }
  static get typesMap() {
    return shadow(this, "typesMap", /* @__PURE__ */ new Map());
  }
  static get isDrawer() {
    return false;
  }
  get telemetryFinalData() {
    return { type: "signature", hasDescription: !!this.#bl };
  }
  static computeTelemetryFinalData(t2) {
    const e2 = t2.get("hasDescription");
    return { hasAltText: e2.get(true) ?? 0, hasNoAltText: e2.get(false) ?? 0 };
  }
  get isResizable() {
    return true;
  }
  onScaleChanging() {
    null !== this._drawId && super.onScaleChanging();
  }
  render() {
    if (this.div) return this.div;
    let t2, e2;
    const { _isCopy: i2 } = this;
    if (i2) {
      this._isCopy = false;
      t2 = this.x;
      e2 = this.y;
    }
    super.render();
    if (null === this._drawId) if (this.#wl) {
      const { lines: t3, mustSmooth: e3, areContours: i3, description: s2, uuid: n2, heightInPage: r2 } = this.#wl, { rawDims: { pageWidth: a2, pageHeight: o2 }, rotation: l2 } = this.parent.viewport, h2 = SignatureExtractor.processDrawnLines({ lines: t3, pageWidth: a2, pageHeight: o2, rotation: l2, innerMargin: SignatureEditor._INNER_MARGIN, mustSmooth: e3, areContours: i3 });
      this.addSignature(h2, r2, s2, n2);
    } else {
      this.div.setAttribute("data-l10n-args", JSON.stringify({ description: "" }));
      this.div.hidden = true;
      this._uiManager.getSignature(this);
    }
    else this.div.setAttribute("data-l10n-args", JSON.stringify({ description: this.#bl || "" }));
    if (i2) {
      this._isCopy = true;
      this._moveAfterPaste(t2, e2);
    }
    return this.div;
  }
  setUuid(t2) {
    this.#yl = t2;
    this.addEditToolbar();
  }
  getUuid() {
    return this.#yl;
  }
  get description() {
    return this.#bl;
  }
  set description(t2) {
    this.#bl = t2;
    if (this.div) {
      this.div.setAttribute("data-l10n-args", JSON.stringify({ description: t2 }));
      super.addEditToolbar().then((e2) => {
        e2?.updateEditSignatureButton(t2);
      });
    }
  }
  getSignaturePreview() {
    const { newCurves: t2, areContours: e2, thickness: i2, width: s2, height: n2 } = this.#wl, r2 = Math.max(s2, n2);
    return { areContours: e2, outline: SignatureExtractor.processDrawnLines({ lines: { curves: t2.map((t3) => ({ points: t3 })), thickness: i2, width: s2, height: n2 }, pageWidth: r2, pageHeight: r2, rotation: 0, innerMargin: 0, mustSmooth: false, areContours: e2 }).outline };
  }
  get toolbarButtons() {
    return this._uiManager.signatureManager ? [["editSignature", this._uiManager.signatureManager]] : super.toolbarButtons;
  }
  addSignature(t2, e2, i2, s2) {
    const { x: n2, y: r2 } = this, { outline: a2 } = this.#wl = t2;
    this.#fl = a2 instanceof ContourDrawOutline;
    this.description = i2;
    let o2;
    if (this.#fl) o2 = SignatureEditor.getDefaultDrawingOptions();
    else {
      o2 = SignatureEditor._defaultDrawnSignatureOptions.clone();
      o2.updateProperties({ "stroke-width": a2.thickness });
    }
    this._addOutlines({ drawOutlines: a2, drawingOptions: o2 });
    const [, l2] = this.pageDimensions;
    let h2 = e2 / l2;
    h2 = h2 >= 1 ? 0.5 : h2;
    this.width *= h2 / this.height;
    if (this.width >= 1) {
      h2 *= 0.9 / this.width;
      this.width = 0.9;
    }
    this.height = h2;
    this.setDims();
    this.x = n2;
    this.y = r2;
    this.center();
    this._onResized();
    this.onScaleChanging();
    this.rotate();
    this._uiManager.addToAnnotationStorage(this);
    this.setUuid(s2);
    this._reportTelemetry({ action: "pdfjs.signature.inserted", data: { hasBeenSaved: !!s2, hasDescription: !!i2 } });
    this.div.hidden = false;
  }
  getFromImage(t2) {
    const { rawDims: { pageWidth: e2, pageHeight: i2 }, rotation: s2 } = this.parent.viewport;
    return SignatureExtractor.process(t2, e2, i2, s2, SignatureEditor._INNER_MARGIN);
  }
  getFromText(t2, e2) {
    const { rawDims: { pageWidth: i2, pageHeight: s2 }, rotation: n2 } = this.parent.viewport;
    return SignatureExtractor.extractContoursFromText(t2, e2, i2, s2, n2, SignatureEditor._INNER_MARGIN);
  }
  getDrawnSignature(t2) {
    const { rawDims: { pageWidth: e2, pageHeight: i2 }, rotation: s2 } = this.parent.viewport;
    return SignatureExtractor.processDrawnLines({ lines: t2, pageWidth: e2, pageHeight: i2, rotation: s2, innerMargin: SignatureEditor._INNER_MARGIN, mustSmooth: false, areContours: false });
  }
  createDrawingOptions({ areContours: t2, thickness: e2 }) {
    if (t2) this._drawingOptions = SignatureEditor.getDefaultDrawingOptions();
    else {
      this._drawingOptions = SignatureEditor._defaultDrawnSignatureOptions.clone();
      this._drawingOptions.updateProperties({ "stroke-width": e2 });
    }
  }
  serialize(t2 = false) {
    if (this.isEmpty()) return null;
    const { lines: e2, points: i2 } = this.serializeDraw(t2), { _drawingOptions: { "stroke-width": s2 } } = this, n2 = Object.assign(super.serialize(t2), { isSignature: true, areContours: this.#fl, color: [0, 0, 0], thickness: this.#fl ? 0 : s2 });
    this.addComment(n2);
    if (t2) {
      n2.paths = { lines: e2, points: i2 };
      n2.uuid = this.#yl;
      n2.isCopy = true;
    } else n2.lines = e2;
    this.#bl && (n2.accessibilityData = { type: "Figure", alt: this.#bl });
    return n2;
  }
  static deserializeDraw(t2, e2, i2, s2, n2, r2) {
    return r2.areContours ? ContourDrawOutline.deserialize(t2, e2, i2, s2, n2, r2) : InkDrawOutline.deserialize(t2, e2, i2, s2, n2, r2);
  }
  static async deserialize(t2, e2, i2) {
    const s2 = await super.deserialize(t2, e2, i2);
    s2.#fl = t2.areContours;
    s2.description = t2.accessibilityData?.alt || "";
    s2.#yl = t2.uuid;
    return s2;
  }
}
class StampEditor extends AnnotationEditor {
  #Al = null;
  #vl = null;
  #xl = null;
  #El = null;
  #Cl = null;
  #_l = "";
  #Sl = null;
  #Tl = false;
  #Dl = null;
  #Ml = false;
  #kl = false;
  static _type = "stamp";
  static _editorType = p.STAMP;
  constructor(t2) {
    super({ ...t2, name: "stampEditor" });
    this.#El = t2.bitmapUrl;
    this.#Cl = t2.bitmapFile;
    this.defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(t2, e2) {
    AnnotationEditor.initialize(t2, e2);
  }
  static isHandlingMimeForPasting(t2) {
    return W.includes(t2);
  }
  static paste(t2, e2) {
    e2.pasteEditor({ mode: p.STAMP }, { bitmapFile: t2.getAsFile() });
  }
  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = false);
    super.altTextFinish();
  }
  get telemetryFinalData() {
    return { type: "stamp", hasAltText: !!this.altTextData?.altText };
  }
  static computeTelemetryFinalData(t2) {
    const e2 = t2.get("hasAltText");
    return { hasAltText: e2.get(true) ?? 0, hasNoAltText: e2.get(false) ?? 0 };
  }
  #Pl(t2, e2 = false) {
    if (t2) {
      this.#Al = t2.bitmap;
      if (!e2) {
        this.#vl = t2.id;
        this.#Ml = t2.isSvg;
      }
      t2.file && (this.#_l = t2.file.name);
      this.#Il();
    } else this.remove();
  }
  #Fl() {
    this.#xl = null;
    this._uiManager.enableWaiting(false);
    if (this.#Sl) if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#Al) this.addEditToolbar().then(() => {
      this._editToolbar.hide();
      this._uiManager.editAltText(this, true);
    });
    else {
      if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#Al) {
        this._reportTelemetry({ action: "pdfjs.image.image_added", data: { alt_text_modal: false, alt_text_type: "empty" } });
        try {
          this.mlGuessAltText();
        } catch {
        }
      }
      this.div.focus();
    }
  }
  async mlGuessAltText(t2 = null, e2 = true) {
    if (this.hasAltTextData()) return null;
    const { mlManager: i2 } = this._uiManager;
    if (!i2) throw new Error("No ML.");
    if (!await i2.isEnabledFor("altText")) throw new Error("ML isn't enabled for alt text.");
    const { data: s2, width: n2, height: r2 } = t2 || this.copyCanvas(null, null, true).imageData, a2 = await i2.guess({ name: "altText", request: { data: s2, width: n2, height: r2, channels: s2.length / (n2 * r2) } });
    if (!a2) throw new Error("No response from the AI service.");
    if (a2.error) throw new Error("Error from the AI service.");
    if (a2.cancel) return null;
    if (!a2.output) throw new Error("No valid response from the AI service.");
    const o2 = a2.output;
    await this.setGuessedAltText(o2);
    e2 && !this.hasAltTextData() && (this.altTextData = { alt: o2, decorative: false });
    return o2;
  }
  #Rl() {
    if (this.#vl) {
      this._uiManager.enableWaiting(true);
      this._uiManager.imageManager.getFromId(this.#vl).then((t3) => this.#Pl(t3, true)).finally(() => this.#Fl());
      return;
    }
    if (this.#El) {
      const t3 = this.#El;
      this.#El = null;
      this._uiManager.enableWaiting(true);
      this.#xl = this._uiManager.imageManager.getFromUrl(t3).then((t4) => this.#Pl(t4)).finally(() => this.#Fl());
      return;
    }
    if (this.#Cl) {
      const t3 = this.#Cl;
      this.#Cl = null;
      this._uiManager.enableWaiting(true);
      this.#xl = this._uiManager.imageManager.getFromFile(t3).then((t4) => this.#Pl(t4)).finally(() => this.#Fl());
      return;
    }
    const t2 = document.createElement("input");
    t2.type = "file";
    t2.accept = W.join(",");
    const e2 = this._uiManager._signal;
    this.#xl = new Promise((i2) => {
      t2.addEventListener("change", async () => {
        if (t2.files && 0 !== t2.files.length) {
          this._uiManager.enableWaiting(true);
          const e3 = await this._uiManager.imageManager.getFromFile(t2.files[0]);
          this._reportTelemetry({ action: "pdfjs.image.image_selected", data: { alt_text_modal: this._uiManager.useNewAltTextFlow } });
          this.#Pl(e3);
        } else this.remove();
        i2();
      }, { signal: e2 });
      t2.addEventListener("cancel", () => {
        this.remove();
        i2();
      }, { signal: e2 });
    }).finally(() => this.#Fl());
    t2.click();
  }
  remove() {
    if (this.#vl) {
      this.#Al = null;
      this._uiManager.imageManager.deleteId(this.#vl);
      this.#Sl?.remove();
      this.#Sl = null;
      if (this.#Dl) {
        clearTimeout(this.#Dl);
        this.#Dl = null;
      }
    }
    super.remove();
  }
  rebuild() {
    if (this.parent) {
      super.rebuild();
      if (null !== this.div) {
        this.#vl && null === this.#Sl && this.#Rl();
        this.isAttachedToDOM || this.parent.add(this);
      }
    } else this.#vl && this.#Rl();
  }
  onceAdded(t2) {
    this._isDraggable = true;
    t2 && this.div.focus();
  }
  isEmpty() {
    return !(this.#xl || this.#Al || this.#El || this.#Cl || this.#vl || this.#Tl);
  }
  get toolbarButtons() {
    return [["altText", this.createAltText()]];
  }
  get isResizable() {
    return true;
  }
  render() {
    if (this.div) return this.div;
    let t2, e2;
    if (this._isCopy) {
      t2 = this.x;
      e2 = this.y;
    }
    super.render();
    this.div.hidden = true;
    this.createAltText();
    this.#Tl || (this.#Al ? this.#Il() : this.#Rl());
    this._isCopy && this._moveAfterPaste(t2, e2);
    this._uiManager.addShouldRescale(this);
    return this.div;
  }
  setCanvas(t2, e2) {
    const { id: i2, bitmap: s2 } = this._uiManager.imageManager.getFromCanvas(t2, e2);
    e2.remove();
    if (i2 && this._uiManager.imageManager.isValidId(i2)) {
      this.#vl = i2;
      s2 && (this.#Al = s2);
      this.#Tl = false;
      this.#Il();
    }
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent) return;
    null !== this.#Dl && clearTimeout(this.#Dl);
    this.#Dl = setTimeout(() => {
      this.#Dl = null;
      this.#Ll();
    }, 200);
  }
  #Il() {
    const { div: t2 } = this;
    let { width: e2, height: i2 } = this.#Al;
    const [s2, n2] = this.pageDimensions, r2 = 0.75;
    if (this.width) {
      e2 = this.width * s2;
      i2 = this.height * n2;
    } else if (e2 > r2 * s2 || i2 > r2 * n2) {
      const t3 = Math.min(r2 * s2 / e2, r2 * n2 / i2);
      e2 *= t3;
      i2 *= t3;
    }
    this._uiManager.enableWaiting(false);
    const a2 = this.#Sl = document.createElement("canvas");
    a2.setAttribute("role", "img");
    this.addContainer(a2);
    this.width = e2 / s2;
    this.height = i2 / n2;
    this.setDims();
    this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition();
    this._initialOptions = null;
    this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && !this.annotationElementId || (t2.hidden = false);
    this.#Ll();
    if (!this.#kl) {
      this.parent.addUndoableEditor(this);
      this.#kl = true;
    }
    this._reportTelemetry({ action: "inserted_image" });
    this.#_l && this.div.setAttribute("aria-description", this.#_l);
    this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
  }
  copyCanvas(t2, e2, i2 = false) {
    t2 || (t2 = 224);
    const { width: s2, height: n2 } = this.#Al, r2 = new OutputScale();
    let a2 = this.#Al, o2 = s2, l2 = n2, h2 = null;
    if (e2) {
      if (s2 > e2 || n2 > e2) {
        const t4 = Math.min(e2 / s2, e2 / n2);
        o2 = Math.floor(s2 * t4);
        l2 = Math.floor(n2 * t4);
      }
      h2 = document.createElement("canvas");
      const t3 = h2.width = Math.ceil(o2 * r2.sx), i3 = h2.height = Math.ceil(l2 * r2.sy);
      this.#Ml || (a2 = this.#Bl(t3, i3));
      const d3 = h2.getContext("2d");
      d3.filter = this._uiManager.hcmFilter;
      let c2 = "white", u2 = "#cfcfd8";
      if ("none" !== this._uiManager.hcmFilter) u2 = "black";
      else if (ColorScheme.isDarkMode) {
        c2 = "#8f8f9d";
        u2 = "#42414d";
      }
      const p2 = 15, g2 = p2 * r2.sx, m2 = p2 * r2.sy, f2 = new OffscreenCanvas(2 * g2, 2 * m2), b2 = f2.getContext("2d");
      b2.fillStyle = c2;
      b2.fillRect(0, 0, 2 * g2, 2 * m2);
      b2.fillStyle = u2;
      b2.fillRect(0, 0, g2, m2);
      b2.fillRect(g2, m2, g2, m2);
      d3.fillStyle = d3.createPattern(f2, "repeat");
      d3.fillRect(0, 0, t3, i3);
      d3.drawImage(a2, 0, 0, a2.width, a2.height, 0, 0, t3, i3);
    }
    let d2 = null;
    if (i2) {
      let e3, i3;
      if (r2.symmetric && a2.width < t2 && a2.height < t2) {
        e3 = a2.width;
        i3 = a2.height;
      } else {
        a2 = this.#Al;
        if (s2 > t2 || n2 > t2) {
          const r3 = Math.min(t2 / s2, t2 / n2);
          e3 = Math.floor(s2 * r3);
          i3 = Math.floor(n2 * r3);
          this.#Ml || (a2 = this.#Bl(e3, i3));
        }
      }
      const o3 = new OffscreenCanvas(e3, i3).getContext("2d", { willReadFrequently: true });
      o3.drawImage(a2, 0, 0, a2.width, a2.height, 0, 0, e3, i3);
      d2 = { width: e3, height: i3, data: o3.getImageData(0, 0, e3, i3).data };
    }
    return { canvas: h2, width: o2, height: l2, imageData: d2 };
  }
  #Bl(t2, e2) {
    const { width: i2, height: s2 } = this.#Al;
    let n2 = i2, r2 = s2, a2 = this.#Al;
    for (; n2 > 2 * t2 || r2 > 2 * e2; ) {
      const i3 = n2, s3 = r2;
      n2 > 2 * t2 && (n2 = n2 >= 16384 ? Math.floor(n2 / 2) - 1 : Math.ceil(n2 / 2));
      r2 > 2 * e2 && (r2 = r2 >= 16384 ? Math.floor(r2 / 2) - 1 : Math.ceil(r2 / 2));
      const o2 = new OffscreenCanvas(n2, r2);
      o2.getContext("2d").drawImage(a2, 0, 0, i3, s3, 0, 0, n2, r2);
      a2 = o2.transferToImageBitmap();
    }
    return a2;
  }
  #Ll() {
    const [t2, e2] = this.parentDimensions, { width: i2, height: s2 } = this, n2 = new OutputScale(), r2 = Math.ceil(i2 * t2 * n2.sx), a2 = Math.ceil(s2 * e2 * n2.sy), o2 = this.#Sl;
    if (!o2 || o2.width === r2 && o2.height === a2) return;
    o2.width = r2;
    o2.height = a2;
    const l2 = this.#Ml ? this.#Al : this.#Bl(r2, a2), h2 = o2.getContext("2d");
    h2.filter = this._uiManager.hcmFilter;
    h2.drawImage(l2, 0, 0, l2.width, l2.height, 0, 0, r2, a2);
  }
  #Ol(t2) {
    if (t2) {
      if (this.#Ml) {
        const t4 = this._uiManager.imageManager.getSvgUrl(this.#vl);
        if (t4) return t4;
      }
      const t3 = document.createElement("canvas");
      ({ width: t3.width, height: t3.height } = this.#Al);
      t3.getContext("2d").drawImage(this.#Al, 0, 0);
      return t3.toDataURL();
    }
    if (this.#Ml) {
      const [t3, e2] = this.pageDimensions, i2 = Math.round(this.width * t3 * PixelsPerInch.PDF_TO_CSS_UNITS), s2 = Math.round(this.height * e2 * PixelsPerInch.PDF_TO_CSS_UNITS), n2 = new OffscreenCanvas(i2, s2);
      n2.getContext("2d").drawImage(this.#Al, 0, 0, this.#Al.width, this.#Al.height, 0, 0, i2, s2);
      return n2.transferToImageBitmap();
    }
    return structuredClone(this.#Al);
  }
  static async deserialize(t2, e2, i2) {
    let s2 = null, n2 = false;
    if (t2 instanceof StampAnnotationElement) {
      const { data: { rect: r3, rotation: a3, id: o3, structParent: l3, popupRef: h3, richText: d3, contentsObj: c3, creationDate: u3, modificationDate: g3 }, container: m2, parent: { page: { pageNumber: f2 } }, canvas: b2 } = t2;
      let w2, y2;
      if (b2) {
        delete t2.canvas;
        ({ id: w2, bitmap: y2 } = i2.imageManager.getFromCanvas(m2.id, b2));
        b2.remove();
      } else {
        n2 = true;
        t2._hasNoCanvas = true;
      }
      const A2 = (await e2._structTree.getAriaAttributes(`${z}${o3}`))?.get("aria-label") || "";
      s2 = t2 = { annotationType: p.STAMP, bitmapId: w2, bitmap: y2, pageIndex: f2 - 1, rect: r3.slice(0), rotation: a3, annotationElementId: o3, id: o3, deleted: false, accessibilityData: { decorative: false, altText: A2 }, isSvg: false, structParent: l3, popupRef: h3, richText: d3, comment: c3?.str || null, creationDate: u3, modificationDate: g3 };
    }
    const r2 = await super.deserialize(t2, e2, i2), { rect: a2, bitmap: o2, bitmapUrl: l2, bitmapId: h2, isSvg: d2, accessibilityData: c2 } = t2;
    if (n2) {
      i2.addMissingCanvas(t2.id, r2);
      r2.#Tl = true;
    } else if (h2 && i2.imageManager.isValidId(h2)) {
      r2.#vl = h2;
      o2 && (r2.#Al = o2);
    } else r2.#El = l2;
    r2.#Ml = d2;
    const [u2, g2] = r2.pageDimensions;
    r2.width = (a2[2] - a2[0]) / u2;
    r2.height = (a2[3] - a2[1]) / g2;
    c2 && (r2.altTextData = c2);
    r2._initialData = s2;
    t2.comment && r2.setCommentData(t2);
    r2.#kl = !!s2;
    return r2;
  }
  serialize(t2 = false, e2 = null) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const i2 = Object.assign(super.serialize(t2), { bitmapId: this.#vl, isSvg: this.#Ml });
    this.addComment(i2);
    if (t2) {
      i2.bitmapUrl = this.#Ol(true);
      i2.accessibilityData = this.serializeAltText(true);
      i2.isCopy = true;
      return i2;
    }
    const { decorative: s2, altText: n2 } = this.serializeAltText(false);
    !s2 && n2 && (i2.accessibilityData = { type: "Figure", alt: n2 });
    if (this.annotationElementId) {
      const t3 = this.#va(i2);
      if (t3.isSame) return null;
      t3.isSameAltText ? delete i2.accessibilityData : i2.accessibilityData.structParent = this._initialData.structParent ?? -1;
      i2.id = this.annotationElementId;
      delete i2.bitmapId;
      return i2;
    }
    if (null === e2) return i2;
    e2.stamps ||= /* @__PURE__ */ new Map();
    const r2 = this.#Ml ? (i2.rect[2] - i2.rect[0]) * (i2.rect[3] - i2.rect[1]) : null;
    if (e2.stamps.has(this.#vl)) {
      if (this.#Ml) {
        const t3 = e2.stamps.get(this.#vl);
        if (r2 > t3.area) {
          t3.area = r2;
          t3.serialized.bitmap.close();
          t3.serialized.bitmap = this.#Ol(false);
        }
      }
    } else {
      e2.stamps.set(this.#vl, { area: r2, serialized: i2 });
      i2.bitmap = this.#Ol(false);
    }
    return i2;
  }
  #va(t2) {
    const { pageIndex: e2, accessibilityData: { altText: i2 } } = this._initialData, s2 = t2.pageIndex === e2, n2 = (t2.accessibilityData?.alt || "") === i2;
    return { isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && s2 && n2, isSameAltText: n2 };
  }
  renderAnnotationElement(t2) {
    if (this.deleted) {
      t2.hide();
      return null;
    }
    t2.updateEdited({ rect: this.getPDFRect(), popup: this.comment });
    return null;
  }
}
class AnnotationEditorLayer {
  #na;
  #Nl = false;
  #Ul = null;
  #Hl = null;
  #zl = null;
  #Gl = /* @__PURE__ */ new Map();
  #Wl = false;
  #Vl = false;
  #$l = false;
  #jl = null;
  #ql = null;
  #Xl = null;
  #Kl = null;
  #Yl = null;
  #Ql = -1;
  #b;
  static _initialized = false;
  static #$ = new Map([FreeTextEditor, InkEditor, StampEditor, HighlightEditor, SignatureEditor].map((t2) => [t2._editorType, t2]));
  constructor({ uiManager: t2, pageIndex: e2, div: i2, structTreeLayer: s2, accessibilityManager: n2, annotationLayer: r2, drawLayer: a2, textLayer: o2, viewport: l2, l10n: h2 }) {
    const d2 = [...AnnotationEditorLayer.#$.values()];
    if (!AnnotationEditorLayer._initialized) {
      AnnotationEditorLayer._initialized = true;
      for (const e3 of d2) e3.initialize(h2, t2);
    }
    t2.registerEditorTypes(d2);
    this.#b = t2;
    this.pageIndex = e2;
    this.div = i2;
    this.#na = n2;
    this.#Ul = r2;
    this.viewport = l2;
    this.#Xl = o2;
    this.drawLayer = a2;
    this._structTree = s2;
    this.#b.addLayer(this);
  }
  get isEmpty() {
    return 0 === this.#Gl.size;
  }
  get isInvisible() {
    return this.isEmpty && this.#b.getMode() === p.NONE;
  }
  updateToolbar(t2) {
    this.#b.updateToolbar(t2);
  }
  updateMode(t2 = this.#b.getMode()) {
    this.#Jl();
    switch (t2) {
      case p.NONE:
        this.div.classList.toggle("nonEditing", true);
        this.disableTextSelection();
        this.togglePointerEvents(false);
        this.toggleAnnotationLayerPointerEvents(true);
        this.disableClick();
        return;
      case p.INK:
        this.disableTextSelection();
        this.togglePointerEvents(true);
        this.enableClick();
        break;
      case p.HIGHLIGHT:
        this.enableTextSelection();
        this.togglePointerEvents(false);
        this.disableClick();
        break;
      default:
        this.disableTextSelection();
        this.togglePointerEvents(true);
        this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(false);
    const { classList: e2 } = this.div;
    e2.toggle("nonEditing", false);
    if (t2 === p.POPUP) e2.toggle("commentEditing", true);
    else {
      e2.toggle("commentEditing", false);
      for (const i2 of AnnotationEditorLayer.#$.values()) e2.toggle(`${i2._type}Editing`, t2 === i2._editorType);
    }
    this.div.hidden = false;
  }
  hasTextLayer(t2) {
    return t2 === this.#Xl?.div;
  }
  setEditingState(t2) {
    this.#b.setEditingState(t2);
  }
  addCommands(t2) {
    this.#b.addCommands(t2);
  }
  cleanUndoStack(t2) {
    this.#b.cleanUndoStack(t2);
  }
  toggleDrawing(t2 = false) {
    this.div.classList.toggle("drawing", !t2);
  }
  togglePointerEvents(t2 = false) {
    this.div.classList.toggle("disabled", !t2);
  }
  toggleAnnotationLayerPointerEvents(t2 = false) {
    this.#Ul?.div.classList.toggle("disabled", !t2);
  }
  get #Zl() {
    return 0 !== this.#Gl.size ? this.#Gl.values() : this.#b.getEditors(this.pageIndex);
  }
  async enable() {
    this.#$l = true;
    this.div.tabIndex = 0;
    this.togglePointerEvents(true);
    this.div.classList.toggle("nonEditing", false);
    this.#Yl?.abort();
    this.#Yl = null;
    const t2 = /* @__PURE__ */ new Set();
    for (const e3 of this.#Zl) {
      e3.enableEditing();
      e3.show(true);
      if (e3.annotationElementId) {
        this.#b.removeChangedExistingAnnotation(e3);
        t2.add(e3.annotationElementId);
      }
    }
    const e2 = this.#Ul;
    if (e2) for (const i2 of e2.getEditableAnnotations()) {
      i2.hide();
      if (this.#b.isDeletedAnnotationElement(i2.data.id)) continue;
      if (t2.has(i2.data.id)) continue;
      const e3 = await this.deserialize(i2);
      if (e3) {
        this.addOrRebuild(e3);
        e3.enableEditing();
      }
    }
    this.#$l = false;
    this.#b._eventBus.dispatch("editorsrendered", { source: this, pageNumber: this.pageIndex + 1 });
  }
  disable() {
    this.#Vl = true;
    this.div.tabIndex = -1;
    this.togglePointerEvents(false);
    this.div.classList.toggle("nonEditing", true);
    if (this.#Xl && !this.#Yl) {
      this.#Yl = new AbortController();
      const t3 = this.#b.combinedSignal(this.#Yl);
      this.#Xl.div.addEventListener("pointerdown", (t4) => {
        const { clientX: e3, clientY: i2, timeStamp: s2 } = t4;
        if (s2 - this.#Ql > 500) {
          this.#Ql = s2;
          return;
        }
        this.#Ql = -1;
        const { classList: n2 } = this.div;
        n2.toggle("getElements", true);
        const r2 = document.elementsFromPoint(e3, i2);
        n2.toggle("getElements", false);
        if (!this.div.contains(r2[0])) return;
        let a2;
        const o2 = new RegExp(`^${u}[0-9]+$`);
        for (const t5 of r2) if (o2.test(t5.id)) {
          a2 = t5.id;
          break;
        }
        if (!a2) return;
        const l2 = this.#Gl.get(a2);
        if (null === l2?.annotationElementId) {
          t4.stopPropagation();
          t4.preventDefault();
          l2.dblclick(t4);
        }
      }, { signal: t3, capture: true });
    }
    const t2 = this.#Ul;
    if (t2) {
      const e3 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map();
      for (const s3 of this.#Zl) {
        s3.disableEditing();
        if (s3.annotationElementId) if (null === s3.serialize()) {
          i2.set(s3.annotationElementId, s3);
          this.getEditableAnnotation(s3.annotationElementId)?.show();
          s3.remove();
        } else e3.set(s3.annotationElementId, s3);
        else s3.updateFakeAnnotationElement(t2);
      }
      const s2 = t2.getEditableAnnotations();
      for (const t3 of s2) {
        const { id: s3 } = t3.data;
        if (this.#b.isDeletedAnnotationElement(s3)) {
          t3.updateEdited({ deleted: true });
          continue;
        }
        let n2 = i2.get(s3);
        if (n2) {
          n2.resetAnnotationElement(t3);
          n2.show(false);
          t3.show();
        } else {
          n2 = e3.get(s3);
          if (n2) {
            this.#b.addChangedExistingAnnotation(n2);
            n2.renderAnnotationElement(t3) && n2.show(false);
          }
          t3.show();
        }
      }
    }
    this.#Jl();
    this.isEmpty && (this.div.hidden = true);
    const { classList: e2 } = this.div;
    for (const t3 of AnnotationEditorLayer.#$.values()) e2.remove(`${t3._type}Editing`);
    this.disableTextSelection();
    this.toggleAnnotationLayerPointerEvents(true);
    this.#Vl = false;
  }
  getEditableAnnotation(t2) {
    return this.#Ul?.getEditableAnnotation(t2) || null;
  }
  setActiveEditor(t2) {
    this.#b.getActive() !== t2 && this.#b.setActiveEditor(t2);
  }
  enableTextSelection() {
    this.div.tabIndex = -1;
    if (this.#Xl?.div && !this.#Kl) {
      this.#Kl = new AbortController();
      const t2 = this.#b.combinedSignal(this.#Kl);
      this.#Xl.div.addEventListener("pointerdown", this.#th.bind(this), { signal: t2 });
      this.#Xl.div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    this.div.tabIndex = 0;
    if (this.#Xl?.div && this.#Kl) {
      this.#Kl.abort();
      this.#Kl = null;
      this.#Xl.div.classList.remove("highlighting");
    }
  }
  #th(t2) {
    this.#b.unselectAll();
    const { target: e2 } = t2;
    if (e2 === this.#Xl.div || ("img" === e2.getAttribute("role") || e2.classList.contains("endOfContent")) && this.#Xl.div.contains(e2)) {
      const { isMac: e3 } = util_FeatureTest.platform;
      if (0 !== t2.button || t2.ctrlKey && e3) return;
      this.#b.showAllEditors("highlight", true, true);
      this.#Xl.div.classList.add("free");
      this.toggleDrawing();
      HighlightEditor.startHighlighting(this, "ltr" === this.#b.direction, { target: this.#Xl.div, x: t2.x, y: t2.y });
      this.#Xl.div.addEventListener("pointerup", () => {
        this.#Xl.div.classList.remove("free");
        this.toggleDrawing(true);
      }, { once: true, signal: this.#b._signal });
      t2.preventDefault();
    }
  }
  enableClick() {
    if (this.#Hl) return;
    this.#Hl = new AbortController();
    const t2 = this.#b.combinedSignal(this.#Hl);
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), { signal: t2 });
    const e2 = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", e2, { signal: t2 });
    this.div.addEventListener("pointercancel", e2, { signal: t2 });
  }
  disableClick() {
    this.#Hl?.abort();
    this.#Hl = null;
  }
  attach(t2) {
    this.#Gl.set(t2.id, t2);
    const { annotationElementId: e2 } = t2;
    e2 && this.#b.isDeletedAnnotationElement(e2) && this.#b.removeDeletedAnnotationElement(t2);
  }
  detach(t2) {
    this.#Gl.delete(t2.id);
    this.#na?.removePointerInTextLayer(t2.contentDiv);
    !this.#Vl && t2.annotationElementId && this.#b.addDeletedAnnotationElement(t2);
  }
  remove(t2) {
    this.detach(t2);
    this.#b.removeEditor(t2);
    t2.div.remove();
    t2.isAttachedToDOM = false;
  }
  changeParent(t2) {
    if (t2.parent !== this) {
      if (t2.parent && t2.annotationElementId) {
        this.#b.addDeletedAnnotationElement(t2.annotationElementId);
        AnnotationEditor.deleteAnnotationElement(t2);
        t2.annotationElementId = null;
      }
      this.attach(t2);
      t2.parent?.detach(t2);
      t2.setParent(this);
      if (t2.div && t2.isAttachedToDOM) {
        t2.div.remove();
        this.div.append(t2.div);
      }
    }
  }
  add(t2) {
    if (t2.parent !== this || !t2.isAttachedToDOM) {
      this.changeParent(t2);
      this.#b.addEditor(t2);
      this.attach(t2);
      if (!t2.isAttachedToDOM) {
        const e2 = t2.render();
        this.div.append(e2);
        t2.isAttachedToDOM = true;
      }
      t2.fixAndSetPosition();
      t2.onceAdded(!this.#$l);
      this.#b.addToAnnotationStorage(t2);
      t2._reportTelemetry(t2.telemetryInitialData);
    }
  }
  moveEditorInDOM(t2) {
    if (!t2.isAttachedToDOM) return;
    const { activeElement: e2 } = document;
    if (t2.div.contains(e2) && !this.#zl) {
      t2._focusEventsAllowed = false;
      this.#zl = setTimeout(() => {
        this.#zl = null;
        if (t2.div.contains(document.activeElement)) t2._focusEventsAllowed = true;
        else {
          t2.div.addEventListener("focusin", () => {
            t2._focusEventsAllowed = true;
          }, { once: true, signal: this.#b._signal });
          e2.focus();
        }
      }, 0);
    }
    t2._structTreeParentId = this.#na?.moveElementInDOM(this.div, t2.div, t2.contentDiv, true);
  }
  addOrRebuild(t2) {
    if (t2.needsToBeRebuilt()) {
      t2.parent ||= this;
      t2.rebuild();
      t2.show();
    } else this.add(t2);
  }
  addUndoableEditor(t2) {
    this.addCommands({ cmd: () => t2._uiManager.rebuild(t2), undo: () => {
      t2.remove();
    }, mustExec: false });
  }
  getEditorByUID(t2) {
    for (const e2 of this.#Gl.values()) if (e2.uid === t2) return e2;
    return null;
  }
  getNextId() {
    return this.#b.getId();
  }
  get #eh() {
    return AnnotationEditorLayer.#$.get(this.#b.getMode());
  }
  combinedSignal(t2) {
    return this.#b.combinedSignal(t2);
  }
  #ih(t2) {
    const e2 = this.#eh;
    return e2 ? new e2.prototype.constructor(t2) : null;
  }
  canCreateNewEmptyEditor() {
    return this.#eh?.canCreateNewEmptyEditor();
  }
  async pasteEditor(t2, e2) {
    this.updateToolbar(t2);
    await this.#b.updateMode(t2.mode);
    const { offsetX: i2, offsetY: s2 } = this.#sh(), n2 = this.getNextId(), r2 = this.#ih({ parent: this, id: n2, x: i2, y: s2, uiManager: this.#b, isCentered: true, ...e2 });
    r2 && this.add(r2);
  }
  async deserialize(t2) {
    return await AnnotationEditorLayer.#$.get(t2.annotationType ?? t2.annotationEditorType)?.deserialize(t2, this, this.#b) || null;
  }
  createAndAddNewEditor(t2, e2, i2 = {}) {
    const s2 = this.getNextId(), n2 = this.#ih({ parent: this, id: s2, x: t2.offsetX, y: t2.offsetY, uiManager: this.#b, isCentered: e2, ...i2 });
    n2 && this.add(n2);
    return n2;
  }
  get boundingClientRect() {
    return this.div.getBoundingClientRect();
  }
  #sh() {
    const { x: t2, y: e2, width: i2, height: s2 } = this.boundingClientRect, n2 = Math.max(0, t2), r2 = Math.max(0, e2), a2 = (n2 + Math.min(window.innerWidth, t2 + i2)) / 2 - t2, o2 = (r2 + Math.min(window.innerHeight, e2 + s2)) / 2 - e2, [l2, h2] = this.viewport.rotation % 180 == 0 ? [a2, o2] : [o2, a2];
    return { offsetX: l2, offsetY: h2 };
  }
  addNewEditor(t2 = {}) {
    this.createAndAddNewEditor(this.#sh(), true, t2);
  }
  setSelected(t2) {
    this.#b.setSelected(t2);
  }
  toggleSelected(t2) {
    this.#b.toggleSelected(t2);
  }
  unselect(t2) {
    this.#b.unselect(t2);
  }
  pointerup(t2) {
    const { isMac: e2 } = util_FeatureTest.platform;
    if (0 !== t2.button || t2.ctrlKey && e2) return;
    if (t2.target !== this.div) return;
    if (!this.#Wl) return;
    this.#Wl = false;
    if (this.#eh?.isDrawer && this.#eh.supportMultipleDrawings) return;
    if (!this.#Nl) {
      this.#Nl = true;
      return;
    }
    const i2 = this.#b.getMode();
    i2 !== p.STAMP && i2 !== p.SIGNATURE ? this.createAndAddNewEditor(t2, false) : this.#b.unselectAll();
  }
  pointerdown(t2) {
    this.#b.getMode() === p.HIGHLIGHT && this.enableTextSelection();
    if (this.#Wl) {
      this.#Wl = false;
      return;
    }
    const { isMac: e2 } = util_FeatureTest.platform;
    if (0 !== t2.button || t2.ctrlKey && e2) return;
    if (t2.target !== this.div) return;
    this.#Wl = true;
    if (this.#eh?.isDrawer) {
      this.startDrawingSession(t2);
      return;
    }
    const i2 = this.#b.getActive();
    this.#Nl = !i2 || i2.isEmpty();
  }
  startDrawingSession(t2) {
    this.div.focus({ preventScroll: true });
    if (this.#jl) {
      this.#eh.startDrawing(this, this.#b, false, t2);
      return;
    }
    this.#b.setCurrentDrawingSession(this);
    this.#jl = new AbortController();
    const e2 = this.#b.combinedSignal(this.#jl);
    this.div.addEventListener("blur", ({ relatedTarget: t3 }) => {
      if (t3 && !this.div.contains(t3)) {
        this.#ql = null;
        this.commitOrRemove();
      }
    }, { signal: e2 });
    this.#eh.startDrawing(this, this.#b, false, t2);
  }
  pause(t2) {
    if (t2) {
      const { activeElement: t3 } = document;
      this.div.contains(t3) && (this.#ql = t3);
      return;
    }
    this.#ql && setTimeout(() => {
      this.#ql?.focus();
      this.#ql = null;
    }, 0);
  }
  endDrawingSession(t2 = false) {
    if (!this.#jl) return null;
    this.#b.setCurrentDrawingSession(null);
    this.#jl.abort();
    this.#jl = null;
    this.#ql = null;
    return this.#eh.endDrawing(t2);
  }
  findNewParent(t2, e2, i2) {
    const s2 = this.#b.findParent(e2, i2);
    if (null === s2 || s2 === this) return false;
    s2.changeParent(t2);
    return true;
  }
  commitOrRemove() {
    if (this.#jl) {
      this.endDrawingSession();
      return true;
    }
    return false;
  }
  onScaleChanging() {
    this.#jl && this.#eh.onScaleChangingWhenDrawing(this);
  }
  destroy() {
    this.commitOrRemove();
    if (this.#b.getActive()?.parent === this) {
      this.#b.commitOrRemove();
      this.#b.setActiveEditor(null);
    }
    if (this.#zl) {
      clearTimeout(this.#zl);
      this.#zl = null;
    }
    for (const t2 of this.#Gl.values()) {
      this.#na?.removePointerInTextLayer(t2.contentDiv);
      t2.setParent(null);
      t2.isAttachedToDOM = false;
      t2.div.remove();
    }
    this.div = null;
    this.#Gl.clear();
    this.#b.removeLayer(this);
  }
  #Jl() {
    for (const t2 of this.#Gl.values()) t2.isEmpty() && t2.remove();
  }
  render({ viewport: t2 }) {
    this.viewport = t2;
    setLayerDimensions(this.div, t2);
    for (const t3 of this.#b.getEditors(this.pageIndex)) {
      this.add(t3);
      t3.rebuild();
    }
    this.updateMode();
  }
  update({ viewport: t2 }) {
    this.#b.commitOrRemove();
    this.#Jl();
    const e2 = this.viewport.rotation, i2 = t2.rotation;
    this.viewport = t2;
    setLayerDimensions(this.div, { rotation: i2 });
    if (e2 !== i2) for (const t3 of this.#Gl.values()) t3.rotate(i2);
  }
  get pageDimensions() {
    const { pageWidth: t2, pageHeight: e2 } = this.viewport.rawDims;
    return [t2, e2];
  }
  get scale() {
    return this.#b.viewParameters.realScale;
  }
}
class DrawLayer {
  #Dr = null;
  #nh = /* @__PURE__ */ new Map();
  #rh = /* @__PURE__ */ new Map();
  static #v = 0;
  constructor({ pageIndex: t2 }) {
    this.pageIndex = t2;
  }
  setParent(t2) {
    if (this.#Dr) {
      if (this.#Dr !== t2) {
        if (this.#nh.size > 0) for (const e2 of this.#nh.values()) {
          e2.remove();
          t2.append(e2);
        }
        this.#Dr = t2;
      }
    } else this.#Dr = t2;
  }
  static get _svgFactory() {
    return shadow(this, "_svgFactory", new DOMSVGFactory());
  }
  static #ah(t2, [e2, i2, s2, n2]) {
    const { style: r2 } = t2;
    r2.top = 100 * i2 + "%";
    r2.left = 100 * e2 + "%";
    r2.width = 100 * s2 + "%";
    r2.height = 100 * n2 + "%";
  }
  #oh() {
    const t2 = DrawLayer._svgFactory.create(1, 1, true);
    this.#Dr.append(t2);
    t2.setAttribute("aria-hidden", true);
    return t2;
  }
  #lh(t2, e2) {
    const i2 = DrawLayer._svgFactory.createElement("clipPath");
    t2.append(i2);
    const s2 = `clip_${e2}`;
    i2.setAttribute("id", s2);
    i2.setAttribute("clipPathUnits", "objectBoundingBox");
    const n2 = DrawLayer._svgFactory.createElement("use");
    i2.append(n2);
    n2.setAttribute("href", `#${e2}`);
    n2.classList.add("clip");
    return s2;
  }
  #hh(t2, e2) {
    for (const [i2, s2] of Object.entries(e2)) null === s2 ? t2.removeAttribute(i2) : t2.setAttribute(i2, s2);
  }
  draw(t2, e2 = false, i2 = false) {
    const s2 = DrawLayer.#v++, n2 = this.#oh(), r2 = DrawLayer._svgFactory.createElement("defs");
    n2.append(r2);
    const a2 = DrawLayer._svgFactory.createElement("path");
    r2.append(a2);
    const o2 = `path_p${this.pageIndex}_${s2}`;
    a2.setAttribute("id", o2);
    a2.setAttribute("vector-effect", "non-scaling-stroke");
    e2 && this.#rh.set(s2, a2);
    const l2 = i2 ? this.#lh(r2, o2) : null, h2 = DrawLayer._svgFactory.createElement("use");
    n2.append(h2);
    h2.setAttribute("href", `#${o2}`);
    this.updateProperties(n2, t2);
    this.#nh.set(s2, n2);
    return { id: s2, clipPathId: `url(#${l2})` };
  }
  drawOutline(t2, e2) {
    const i2 = DrawLayer.#v++, s2 = this.#oh(), n2 = DrawLayer._svgFactory.createElement("defs");
    s2.append(n2);
    const r2 = DrawLayer._svgFactory.createElement("path");
    n2.append(r2);
    const a2 = `path_p${this.pageIndex}_${i2}`;
    r2.setAttribute("id", a2);
    r2.setAttribute("vector-effect", "non-scaling-stroke");
    let o2;
    if (e2) {
      const t3 = DrawLayer._svgFactory.createElement("mask");
      n2.append(t3);
      o2 = `mask_p${this.pageIndex}_${i2}`;
      t3.setAttribute("id", o2);
      t3.setAttribute("maskUnits", "objectBoundingBox");
      const e3 = DrawLayer._svgFactory.createElement("rect");
      t3.append(e3);
      e3.setAttribute("width", "1");
      e3.setAttribute("height", "1");
      e3.setAttribute("fill", "white");
      const s3 = DrawLayer._svgFactory.createElement("use");
      t3.append(s3);
      s3.setAttribute("href", `#${a2}`);
      s3.setAttribute("stroke", "none");
      s3.setAttribute("fill", "black");
      s3.setAttribute("fill-rule", "nonzero");
      s3.classList.add("mask");
    }
    const l2 = DrawLayer._svgFactory.createElement("use");
    s2.append(l2);
    l2.setAttribute("href", `#${a2}`);
    o2 && l2.setAttribute("mask", `url(#${o2})`);
    const h2 = l2.cloneNode();
    s2.append(h2);
    l2.classList.add("mainOutline");
    h2.classList.add("secondaryOutline");
    this.updateProperties(s2, t2);
    this.#nh.set(i2, s2);
    return i2;
  }
  finalizeDraw(t2, e2) {
    this.#rh.delete(t2);
    this.updateProperties(t2, e2);
  }
  updateProperties(t2, e2) {
    if (!e2) return;
    const { root: i2, bbox: s2, rootClass: n2, path: r2 } = e2, a2 = "number" == typeof t2 ? this.#nh.get(t2) : t2;
    if (a2) {
      i2 && this.#hh(a2, i2);
      s2 && DrawLayer.#ah(a2, s2);
      if (n2) {
        const { classList: t3 } = a2;
        for (const [e3, i3] of Object.entries(n2)) t3.toggle(e3, i3);
      }
      if (r2) {
        const t3 = a2.firstChild.firstChild;
        this.#hh(t3, r2);
      }
    }
  }
  updateParent(t2, e2) {
    if (e2 === this) return;
    const i2 = this.#nh.get(t2);
    if (i2) {
      e2.#Dr.append(i2);
      this.#nh.delete(t2);
      e2.#nh.set(t2, i2);
    }
  }
  remove(t2) {
    this.#rh.delete(t2);
    if (null !== this.#Dr) {
      this.#nh.get(t2).remove();
      this.#nh.delete(t2);
    }
  }
  destroy() {
    this.#Dr = null;
    for (const t2 of this.#nh.values()) t2.remove();
    this.#nh.clear();
    this.#rh.clear();
  }
}
globalThis._pdfjsTestingUtils = { HighlightOutliner };
globalThis.pdfjsLib = { AbortException, AnnotationEditorLayer, AnnotationEditorParamsType: g, AnnotationEditorType: p, AnnotationEditorUIManager, AnnotationLayer, AnnotationMode: c, AnnotationType: E, applyOpacity, build: Rt, ColorPicker, createValidAbsoluteUrl, CSSConstants, DOMSVGFactory, DrawLayer, FeatureTest: util_FeatureTest, fetchData, findContrastColor, getDocument, getFilenameFromUrl, getPdfFilenameFromUrl, getRGB, getUuid, getXfaPageViewport, GlobalWorkerOptions, ImageKind: x, InvalidPDFException, isDataScheme, isPdfFile, isValidExplicitDest: K, MathClamp, noContextMenu, normalizeUnicode, OPS: k, OutputScale, PasswordResponses: L, PDFDataRangeTransport, PDFDateString, PDFWorker, PermissionFlag: m, PixelsPerInch, RenderingCancelledException, renderRichText, ResponseException, setLayerDimensions, shadow, SignatureExtractor, stopEvent, SupportedImageMimeTypes: W, TextLayer, TouchManager, updateUrlHash, Util, VerbosityLevel: M, version: Ft, XfaLayer };
export { AbortException, AnnotationEditorLayer, g as AnnotationEditorParamsType, p as AnnotationEditorType, AnnotationEditorUIManager, AnnotationLayer, c as AnnotationMode, E as AnnotationType, CSSConstants, ColorPicker, DOMSVGFactory, DrawLayer, util_FeatureTest as FeatureTest, GlobalWorkerOptions, x as ImageKind, InvalidPDFException, MathClamp, k as OPS, OutputScale, PDFDataRangeTransport, PDFDateString, PDFWorker, L as PasswordResponses, m as PermissionFlag, PixelsPerInch, RenderingCancelledException, ResponseException, SignatureExtractor, W as SupportedImageMimeTypes, TextLayer, TouchManager, Util, M as VerbosityLevel, XfaLayer, applyOpacity, Rt as build, createValidAbsoluteUrl, fetchData, findContrastColor, getDocument, getFilenameFromUrl, getPdfFilenameFromUrl, getRGB, getUuid, getXfaPageViewport, isDataScheme, isPdfFile, K as isValidExplicitDest, noContextMenu, normalizeUnicode, renderRichText, setLayerDimensions, shadow, stopEvent, updateUrlHash, Ft as version };
!(function() {
  try {
    var e2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n2 = new e2.Error().stack;
    n2 && (e2._sentryDebugIds = e2._sentryDebugIds || {}, e2._sentryDebugIds[n2] = "968fcd2a-5a51-571f-b799-fc8addbc0420");
  } catch (e3) {
  }
})();
