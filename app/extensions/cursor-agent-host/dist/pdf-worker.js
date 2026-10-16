/*! For license information please see pdf-worker.js.LICENSE.txt */
(() => {
  "use strict";
  var t = { d: (e2, i2) => {
    for (var s2 in i2) t.o(i2, s2) && !t.o(e2, s2) && Object.defineProperty(e2, s2, { enumerable: true, get: i2[s2] });
  }, o: (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r: (t2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  } }, e = {};
  t.r(e), t.d(e, { default: () => Ln });
  var i = {};
  t.r(i), t.d(i, { AbortException: () => B, AnnotationEditorLayer: () => on, AnnotationEditorParamsType: () => u, AnnotationEditorType: () => d, AnnotationEditorUIManager: () => Bt, AnnotationLayer: () => Os, AnnotationMode: () => h, AnnotationType: () => m, CSSConstants: () => vt, ColorPicker: () => ts, DOMSVGFactory: () => as, DrawLayer: () => ln, FeatureTest: () => N, GlobalWorkerOptions: () => pi, ImageKind: () => g, InvalidPDFException: () => I, MathClamp: () => W, OPS: () => b, OutputScale: () => mt, PDFDataRangeTransport: () => Gi, PDFDateString: () => ht, PDFWorker: () => Xi, PasswordResponses: () => v, PermissionFlag: () => p, PixelsPerInch: () => Q, RenderingCancelledException: () => tt, ResponseException: () => R, SignatureExtractor: () => en, SupportedImageMimeTypes: () => ft, TextLayer: () => ji, TouchManager: () => Nt, Util: () => z, VerbosityLevel: () => f, XfaLayer: () => Y, applyOpacity: () => yt, build: () => Zi, createValidAbsoluteUrl: () => C, fetchData: () => J, findContrastColor: () => Et, getDocument: () => $i, getFilenameFromUrl: () => st, getPdfFilenameFromUrl: () => nt, getRGB: () => dt, getUuid: () => V, getXfaPageViewport: () => ct, isDataScheme: () => et, isPdfFile: () => it, isValidExplicitDest: () => Jt, noContextMenu: () => ot, normalizeUnicode: () => $, renderRichText: () => Ct, setLayerDimensions: () => gt, shadow: () => M, stopEvent: () => lt, updateUrlHash: () => T, version: () => Ji });
  var s = { 34: (t2, e2, i2) => {
    var s2 = i2(4901);
    t2.exports = function(t3) {
      return "object" == typeof t3 ? null !== t3 : s2(t3);
    };
  }, 81: (t2, e2, i2) => {
    var s2 = i2(9565), n2 = i2(9306), r2 = i2(8551), a2 = i2(6823), o2 = i2(851), l2 = TypeError;
    t2.exports = function(t3, e3) {
      var i3 = arguments.length < 2 ? o2(t3) : e3;
      if (n2(i3)) return r2(s2(i3, t3));
      throw new l2(a2(t3) + " is not iterable");
    };
  }, 116: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9565), r2 = i2(2652), a2 = i2(9306), o2 = i2(8551), l2 = i2(1767), h2 = i2(9539), c2 = i2(4549)("find", TypeError);
    s2({ target: "Iterator", proto: true, real: true, forced: c2 }, { find: function(t3) {
      o2(this);
      try {
        a2(t3);
      } catch (t4) {
        h2(this, "throw", t4);
      }
      if (c2) return n2(c2, this, t3);
      var e3 = l2(this), i3 = 0;
      return r2(e3, function(e4, s3) {
        if (t3(e4, i3++)) return s3(e4);
      }, { IS_RECORD: true, INTERRUPTED: true }).result;
    } });
  }, 283: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = i2(9039), r2 = i2(4901), a2 = i2(9297), o2 = i2(3724), l2 = i2(350).CONFIGURABLE, h2 = i2(3706), c2 = i2(1181), d2 = c2.enforce, u2 = c2.get, p2 = String, g2 = Object.defineProperty, m2 = s2("".slice), f2 = s2("".replace), b2 = s2([].join), v2 = o2 && !n2(function() {
      return 8 !== g2(function() {
      }, "length", { value: 8 }).length;
    }), y2 = String(String).split("String"), w2 = t2.exports = function(t3, e3, i3) {
      "Symbol(" === m2(p2(e3), 0, 7) && (e3 = "[" + f2(p2(e3), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), i3 && i3.getter && (e3 = "get " + e3), i3 && i3.setter && (e3 = "set " + e3), (!a2(t3, "name") || l2 && t3.name !== e3) && (o2 ? g2(t3, "name", { value: e3, configurable: true }) : t3.name = e3), v2 && i3 && a2(i3, "arity") && t3.length !== i3.arity && g2(t3, "length", { value: i3.arity });
      try {
        i3 && a2(i3, "constructor") && i3.constructor ? o2 && g2(t3, "prototype", { writable: false }) : t3.prototype && (t3.prototype = void 0);
      } catch (t4) {
      }
      var s3 = d2(t3);
      return a2(s3, "source") || (s3.source = b2(y2, "string" == typeof e3 ? e3 : "")), t3;
    };
    Function.prototype.toString = w2(function() {
      return r2(this) && u2(this).source || h2(this);
    }, "toString");
  }, 350: (t2, e2, i2) => {
    var s2 = i2(3724), n2 = i2(9297), r2 = Function.prototype, a2 = s2 && Object.getOwnPropertyDescriptor, o2 = n2(r2, "name"), l2 = o2 && "something" === function() {
    }.name, h2 = o2 && (!s2 || s2 && a2(r2, "name").configurable);
    t2.exports = { EXISTS: o2, PROPER: l2, CONFIGURABLE: h2 };
  }, 397: (t2, e2, i2) => {
    var s2 = i2(7751);
    t2.exports = s2("document", "documentElement");
  }, 421: (t2) => {
    t2.exports = {};
  }, 456: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(9504), a2 = i2(4154), o2 = i2(5169), l2 = r2(1.1.toString), h2 = n2.Uint8Array, c2 = !h2 || !h2.prototype.toHex || !(function() {
      try {
        return "ffffffffffffffff" === new h2([255, 255, 255, 255, 255, 255, 255, 255]).toHex();
      } catch (t3) {
        return false;
      }
    })();
    h2 && s2({ target: "Uint8Array", proto: true, forced: c2 }, { toHex: function() {
      a2(this), o2(this.buffer);
      for (var t3 = "", e3 = 0, i3 = this.length; e3 < i3; e3++) {
        var s3 = l2(this[e3], 16);
        t3 += 1 === s3.length ? "0" + s3 : s3;
      }
      return t3;
    } });
  }, 507: (t2, e2, i2) => {
    var s2 = i2(9565);
    t2.exports = function(t3, e3, i3) {
      for (var n2, r2, a2 = i3 ? t3 : t3.iterator, o2 = t3.next; !(n2 = s2(o2, a2)).done; ) if (void 0 !== (r2 = e3(n2.value))) return r2;
    };
  }, 531: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9565), r2 = i2(9306), a2 = i2(8551), o2 = i2(1767), l2 = i2(8646), h2 = i2(9462), c2 = i2(9539), d2 = i2(6395), u2 = i2(684), p2 = i2(4549), g2 = !d2 && !u2("flatMap", function() {
    }), m2 = !d2 && !g2 && p2("flatMap", TypeError), f2 = d2 || g2 || m2, b2 = h2(function() {
      for (var t3, e3, i3 = this.iterator, s3 = this.mapper; ; ) {
        if (e3 = this.inner) try {
          if (!(t3 = a2(n2(e3.next, e3.iterator))).done) return t3.value;
          this.inner = null;
        } catch (t4) {
          c2(i3, "throw", t4);
        }
        if (t3 = a2(n2(this.next, i3)), this.done = !!t3.done) return;
        try {
          this.inner = l2(s3(t3.value, this.counter++), false);
        } catch (t4) {
          c2(i3, "throw", t4);
        }
      }
    });
    s2({ target: "Iterator", proto: true, real: true, forced: f2 }, { flatMap: function(t3) {
      a2(this);
      try {
        r2(t3);
      } catch (t4) {
        c2(this, "throw", t4);
      }
      return m2 ? n2(m2, this, t3) : new b2(o2(this), { mapper: t3, inner: null });
    } });
  }, 616: (t2, e2, i2) => {
    var s2 = i2(9039);
    t2.exports = !s2(function() {
      var t3 = function() {
      }.bind();
      return "function" != typeof t3 || t3.hasOwnProperty("prototype");
    });
  }, 655: (t2, e2, i2) => {
    var s2 = i2(6955), n2 = String;
    t2.exports = function(t3) {
      if ("Symbol" === s2(t3)) throw new TypeError("Cannot convert a Symbol value to a string");
      return n2(t3);
    };
  }, 679: (t2, e2, i2) => {
    var s2 = i2(1625), n2 = TypeError;
    t2.exports = function(t3, e3) {
      if (s2(e3, t3)) return t3;
      throw new n2("Incorrect invocation");
    };
  }, 684: (t2) => {
    t2.exports = function(t3, e2) {
      var i2 = "function" == typeof Iterator && Iterator.prototype[t3];
      if (i2) try {
        i2.call({ next: null }, e2).next();
      } catch (t4) {
        return true;
      }
    };
  }, 741: (t2) => {
    var e2 = Math.ceil, i2 = Math.floor;
    t2.exports = Math.trunc || function(t3) {
      var s2 = +t3;
      return (s2 > 0 ? i2 : e2)(s2);
    };
  }, 757: (t2, e2, i2) => {
    var s2 = i2(7751), n2 = i2(4901), r2 = i2(1625), a2 = i2(7040), o2 = Object;
    t2.exports = a2 ? function(t3) {
      return "symbol" == typeof t3;
    } : function(t3) {
      var e3 = s2("Symbol");
      return n2(e3) && r2(e3.prototype, o2(t3));
    };
  }, 851: (t2, e2, i2) => {
    var s2 = i2(6955), n2 = i2(5966), r2 = i2(4117), a2 = i2(6269), o2 = i2(8227)("iterator");
    t2.exports = function(t3) {
      if (!r2(t3)) return n2(t3, o2) || n2(t3, "@@iterator") || a2[s2(t3)];
    };
  }, 944: (t2) => {
    var e2 = TypeError;
    t2.exports = function(t3) {
      var i2 = t3 && t3.alphabet;
      if (void 0 === i2 || "base64" === i2 || "base64url" === i2) return i2 || "base64";
      throw new e2("Incorrect `alphabet` option");
    };
  }, 1072: (t2, e2, i2) => {
    var s2 = i2(1828), n2 = i2(8727);
    t2.exports = Object.keys || function(t3) {
      return s2(t3, n2);
    };
  }, 1103: (t2) => {
    t2.exports = function(t3) {
      try {
        return { error: false, value: t3() };
      } catch (t4) {
        return { error: true, value: t4 };
      }
    };
  }, 1108: (t2, e2, i2) => {
    var s2 = i2(6955);
    t2.exports = function(t3) {
      var e3 = s2(t3);
      return "BigInt64Array" === e3 || "BigUint64Array" === e3;
    };
  }, 1148: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9565), r2 = i2(2652), a2 = i2(9306), o2 = i2(8551), l2 = i2(1767), h2 = i2(9539), c2 = i2(4549)("every", TypeError);
    s2({ target: "Iterator", proto: true, real: true, forced: c2 }, { every: function(t3) {
      o2(this);
      try {
        a2(t3);
      } catch (t4) {
        h2(this, "throw", t4);
      }
      if (c2) return n2(c2, this, t3);
      var e3 = l2(this), i3 = 0;
      return !r2(e3, function(e4, s3) {
        if (!t3(e4, i3++)) return s3();
      }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
    } });
  }, 1181: (t2, e2, i2) => {
    var s2, n2, r2, a2 = i2(8622), o2 = i2(4576), l2 = i2(34), h2 = i2(6699), c2 = i2(9297), d2 = i2(7629), u2 = i2(6119), p2 = i2(421), g2 = "Object already initialized", m2 = o2.TypeError, f2 = o2.WeakMap;
    if (a2 || d2.state) {
      var b2 = d2.state || (d2.state = new f2());
      b2.get = b2.get, b2.has = b2.has, b2.set = b2.set, s2 = function(t3, e3) {
        if (b2.has(t3)) throw new m2(g2);
        return e3.facade = t3, b2.set(t3, e3), e3;
      }, n2 = function(t3) {
        return b2.get(t3) || {};
      }, r2 = function(t3) {
        return b2.has(t3);
      };
    } else {
      var v2 = u2("state");
      p2[v2] = true, s2 = function(t3, e3) {
        if (c2(t3, v2)) throw new m2(g2);
        return e3.facade = t3, h2(t3, v2, e3), e3;
      }, n2 = function(t3) {
        return c2(t3, v2) ? t3[v2] : {};
      }, r2 = function(t3) {
        return c2(t3, v2);
      };
    }
    t2.exports = { set: s2, get: n2, has: r2, enforce: function(t3) {
      return r2(t3) ? n2(t3) : s2(t3, {});
    }, getterFor: function(t3) {
      return function(e3) {
        var i3;
        if (!l2(e3) || (i3 = n2(e3)).type !== t3) throw new m2("Incompatible receiver, " + t3 + " required");
        return i3;
      };
    } };
  }, 1291: (t2, e2, i2) => {
    var s2 = i2(741);
    t2.exports = function(t3) {
      var e3 = +t3;
      return e3 != e3 || 0 === e3 ? 0 : s2(e3);
    };
  }, 1385: (t2, e2, i2) => {
    var s2 = i2(9539);
    t2.exports = function(t3, e3, i3) {
      for (var n2 = t3.length - 1; n2 >= 0; n2--) if (void 0 !== t3[n2]) try {
        i3 = s2(t3[n2].iterator, e3, i3);
      } catch (t4) {
        e3 = "throw", i3 = t4;
      }
      if ("throw" === e3) throw i3;
      return i3;
    };
  }, 1548: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(9039), r2 = i2(9519), a2 = i2(4215), o2 = s2.structuredClone;
    t2.exports = !!o2 && !n2(function() {
      if ("DENO" === a2 && r2 > 92 || "NODE" === a2 && r2 > 94 || "BROWSER" === a2 && r2 > 97) return false;
      var t3 = new ArrayBuffer(8), e3 = o2(t3, { transfer: [t3] });
      return 0 !== t3.byteLength || 8 !== e3.byteLength;
    });
  }, 1549: (t2, e2, i2) => {
    i2(6632);
  }, 1625: (t2, e2, i2) => {
    var s2 = i2(9504);
    t2.exports = s2({}.isPrototypeOf);
  }, 1689: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(8745), a2 = i2(7680), o2 = i2(6043), l2 = i2(9306), h2 = i2(1103), c2 = n2.Promise, d2 = false;
    s2({ target: "Promise", stat: true, forced: !c2 || !c2.try || h2(function() {
      c2.try(function(t3) {
        d2 = 8 === t3;
      }, 8);
    }).error || !d2 }, { try: function(t3) {
      var e3 = arguments.length > 1 ? a2(arguments, 1) : [], i3 = o2.f(this), s3 = h2(function() {
        return r2(l2(t3), void 0, e3);
      });
      return (s3.error ? i3.reject : i3.resolve)(s3.value), i3.promise;
    } });
  }, 1698: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4204), r2 = i2(9835);
    s2({ target: "Set", proto: true, real: true, forced: !i2(4916)("union") || !r2("union") }, { union: n2 });
  }, 1701: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9565), r2 = i2(9306), a2 = i2(8551), o2 = i2(1767), l2 = i2(9462), h2 = i2(6319), c2 = i2(9539), d2 = i2(684), u2 = i2(4549), p2 = i2(6395), g2 = !p2 && !d2("map", function() {
    }), m2 = !p2 && !g2 && u2("map", TypeError), f2 = p2 || g2 || m2, b2 = l2(function() {
      var t3 = this.iterator, e3 = a2(n2(this.next, t3));
      if (!(this.done = !!e3.done)) return h2(t3, this.mapper, [e3.value, this.counter++], true);
    });
    s2({ target: "Iterator", proto: true, real: true, forced: f2 }, { map: function(t3) {
      a2(this);
      try {
        r2(t3);
      } catch (t4) {
        c2(this, "throw", t4);
      }
      return m2 ? n2(m2, this, t3) : new b2(o2(this), { mapper: t3 });
    } });
  }, 1767: (t2) => {
    t2.exports = function(t3) {
      return { iterator: t3, next: t3.next, done: false };
    };
  }, 1828: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = i2(9297), r2 = i2(5397), a2 = i2(9617).indexOf, o2 = i2(421), l2 = s2([].push);
    t2.exports = function(t3, e3) {
      var i3, s3 = r2(t3), h2 = 0, c2 = [];
      for (i3 in s3) !n2(o2, i3) && n2(s3, i3) && l2(c2, i3);
      for (; e3.length > h2; ) n2(s3, i3 = e3[h2++]) && (~a2(c2, i3) || l2(c2, i3));
      return c2;
    };
  }, 2106: (t2, e2, i2) => {
    var s2 = i2(283), n2 = i2(4913);
    t2.exports = function(t3, e3, i3) {
      return i3.get && s2(i3.get, e3, { getter: true }), i3.set && s2(i3.set, e3, { setter: true }), n2.f(t3, e3, i3);
    };
  }, 2140: (t2, e2, i2) => {
    var s2 = {};
    s2[i2(8227)("toStringTag")] = "z", t2.exports = "[object z]" === String(s2);
  }, 2195: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = s2({}.toString), r2 = s2("".slice);
    t2.exports = function(t3) {
      return r2(n2(t3), 8, -1);
    };
  }, 2211: (t2, e2, i2) => {
    var s2 = i2(9039);
    t2.exports = !s2(function() {
      function t3() {
      }
      return t3.prototype.constructor = null, Object.getPrototypeOf(new t3()) !== t3.prototype;
    });
  }, 2303: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(9504), r2 = s2.Uint8Array, a2 = s2.SyntaxError, o2 = s2.parseInt, l2 = Math.min, h2 = /[^\da-f]/i, c2 = n2(h2.exec), d2 = n2("".slice);
    t2.exports = function(t3, e3) {
      var i3 = t3.length;
      if (i3 % 2 != 0) throw new a2("String should be an even number of characters");
      for (var s3 = e3 ? l2(e3.length, i3 / 2) : i3 / 2, n3 = e3 || new r2(s3), u2 = 0, p2 = 0; p2 < s3; ) {
        var g2 = d2(t3, u2, u2 += 2);
        if (c2(h2, g2)) throw new a2("String should only contain hex characters");
        n3[p2++] = o2(g2, 16);
      }
      return { bytes: n3, read: u2 };
    };
  }, 2360: (t2, e2, i2) => {
    var s2, n2 = i2(8551), r2 = i2(6801), a2 = i2(8727), o2 = i2(421), l2 = i2(397), h2 = i2(4055), c2 = i2(6119), d2 = "prototype", u2 = "script", p2 = c2("IE_PROTO"), g2 = function() {
    }, m2 = function(t3) {
      return "<" + u2 + ">" + t3 + "</" + u2 + ">";
    }, f2 = function(t3) {
      t3.write(m2("")), t3.close();
      var e3 = t3.parentWindow.Object;
      return t3 = null, e3;
    }, b2 = function() {
      try {
        s2 = new ActiveXObject("htmlfile");
      } catch (t4) {
      }
      var t3, e3, i3;
      b2 = "undefined" != typeof document ? document.domain && s2 ? f2(s2) : (e3 = h2("iframe"), i3 = "java" + u2 + ":", e3.style.display = "none", l2.appendChild(e3), e3.src = String(i3), (t3 = e3.contentWindow.document).open(), t3.write(m2("document.F=Object")), t3.close(), t3.F) : f2(s2);
      for (var n3 = a2.length; n3--; ) delete b2[d2][a2[n3]];
      return b2();
    };
    o2[p2] = true, t2.exports = Object.create || function(t3, e3) {
      var i3;
      return null !== t3 ? (g2[d2] = n2(t3), i3 = new g2(), g2[d2] = null, i3[p2] = t3) : i3 = b2(), void 0 === e3 ? i3 : r2.f(i3, e3);
    };
  }, 2475: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(8527);
    s2({ target: "Set", proto: true, real: true, forced: !i2(4916)("isSupersetOf", function(t3) {
      return !t3;
    }) }, { isSupersetOf: n2 });
  }, 2489: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9565), r2 = i2(9306), a2 = i2(8551), o2 = i2(1767), l2 = i2(9462), h2 = i2(6319), c2 = i2(6395), d2 = i2(9539), u2 = i2(684), p2 = i2(4549), g2 = !c2 && !u2("filter", function() {
    }), m2 = !c2 && !g2 && p2("filter", TypeError), f2 = c2 || g2 || m2, b2 = l2(function() {
      for (var t3, e3, i3 = this.iterator, s3 = this.predicate, r3 = this.next; ; ) {
        if (t3 = a2(n2(r3, i3)), this.done = !!t3.done) return;
        if (e3 = t3.value, h2(i3, s3, [e3, this.counter++], true)) return e3;
      }
    });
    s2({ target: "Iterator", proto: true, real: true, forced: f2 }, { filter: function(t3) {
      a2(this);
      try {
        r2(t3);
      } catch (t4) {
        d2(this, "throw", t4);
      }
      return m2 ? n2(m2, this, t3) : new b2(o2(this), { predicate: t3 });
    } });
  }, 2529: (t2) => {
    t2.exports = function(t3, e2) {
      return { value: t3, done: e2 };
    };
  }, 2603: (t2, e2, i2) => {
    var s2 = i2(655);
    t2.exports = function(t3, e3) {
      return void 0 === t3 ? arguments.length < 2 ? "" : e3 : s2(t3);
    };
  }, 2652: (t2, e2, i2) => {
    var s2 = i2(6080), n2 = i2(9565), r2 = i2(8551), a2 = i2(6823), o2 = i2(4209), l2 = i2(6198), h2 = i2(1625), c2 = i2(81), d2 = i2(851), u2 = i2(9539), p2 = TypeError, g2 = function(t3, e3) {
      this.stopped = t3, this.result = e3;
    }, m2 = g2.prototype;
    t2.exports = function(t3, e3, i3) {
      var f2, b2, v2, y2, w2, x2, A2, _2 = i3 && i3.that, S2 = !(!i3 || !i3.AS_ENTRIES), E2 = !(!i3 || !i3.IS_RECORD), C2 = !(!i3 || !i3.IS_ITERATOR), T2 = !(!i3 || !i3.INTERRUPTED), M2 = s2(e3, _2), k2 = function(t4) {
        return f2 && u2(f2, "normal"), new g2(true, t4);
      }, D2 = function(t4) {
        return S2 ? (r2(t4), T2 ? M2(t4[0], t4[1], k2) : M2(t4[0], t4[1])) : T2 ? M2(t4, k2) : M2(t4);
      };
      if (E2) f2 = t3.iterator;
      else if (C2) f2 = t3;
      else {
        if (!(b2 = d2(t3))) throw new p2(a2(t3) + " is not iterable");
        if (o2(b2)) {
          for (v2 = 0, y2 = l2(t3); y2 > v2; v2++) if ((w2 = D2(t3[v2])) && h2(m2, w2)) return w2;
          return new g2(false);
        }
        f2 = c2(t3, b2);
      }
      for (x2 = E2 ? t3.next : f2.next; !(A2 = n2(x2, f2)).done; ) {
        try {
          w2 = D2(A2.value);
        } catch (t4) {
          u2(f2, "throw", t4);
        }
        if ("object" == typeof w2 && w2 && h2(m2, w2)) return w2;
      }
      return new g2(false);
    };
  }, 2777: (t2, e2, i2) => {
    var s2 = i2(9565), n2 = i2(34), r2 = i2(757), a2 = i2(5966), o2 = i2(4270), l2 = i2(8227), h2 = TypeError, c2 = l2("toPrimitive");
    t2.exports = function(t3, e3) {
      if (!n2(t3) || r2(t3)) return t3;
      var i3, l3 = a2(t3, c2);
      if (l3) {
        if (void 0 === e3 && (e3 = "default"), i3 = s2(l3, t3, e3), !n2(i3) || r2(i3)) return i3;
        throw new h2("Can't convert object to primitive value");
      }
      return void 0 === e3 && (e3 = "number"), o2(t3, e3);
    };
  }, 2787: (t2, e2, i2) => {
    var s2 = i2(9297), n2 = i2(4901), r2 = i2(8981), a2 = i2(6119), o2 = i2(2211), l2 = a2("IE_PROTO"), h2 = Object, c2 = h2.prototype;
    t2.exports = o2 ? h2.getPrototypeOf : function(t3) {
      var e3 = r2(t3);
      if (s2(e3, l2)) return e3[l2];
      var i3 = e3.constructor;
      return n2(i3) && e3 instanceof i3 ? i3.prototype : e3 instanceof h2 ? c2 : null;
    };
  }, 2796: (t2, e2, i2) => {
    var s2 = i2(9039), n2 = i2(4901), r2 = /#|\.prototype\./, a2 = function(t3, e3) {
      var i3 = l2[o2(t3)];
      return i3 === c2 || i3 !== h2 && (n2(e3) ? s2(e3) : !!e3);
    }, o2 = a2.normalize = function(t3) {
      return String(t3).replace(r2, ".").toLowerCase();
    }, l2 = a2.data = {}, h2 = a2.NATIVE = "N", c2 = a2.POLYFILL = "P";
    t2.exports = a2;
  }, 2804: (t2) => {
    var e2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i2 = e2 + "+/", s2 = e2 + "-_", n2 = function(t3) {
      for (var e3 = {}, i3 = 0; i3 < 64; i3++) e3[t3.charAt(i3)] = i3;
      return e3;
    };
    t2.exports = { i2c: i2, c2i: n2(i2), i2cUrl: s2, c2iUrl: n2(s2) };
  }, 2812: (t2) => {
    var e2 = TypeError;
    t2.exports = function(t3, i2) {
      if (t3 < i2) throw new e2("Not enough arguments");
      return t3;
    };
  }, 2839: (t2, e2, i2) => {
    var s2 = i2(4576).navigator, n2 = s2 && s2.userAgent;
    t2.exports = n2 ? String(n2) : "";
  }, 2967: (t2, e2, i2) => {
    var s2 = i2(6706), n2 = i2(34), r2 = i2(7750), a2 = i2(3506);
    t2.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
      var t3, e3 = false, i3 = {};
      try {
        (t3 = s2(Object.prototype, "__proto__", "set"))(i3, []), e3 = i3 instanceof Array;
      } catch (t4) {
      }
      return function(i4, s3) {
        return r2(i4), a2(s3), n2(i4) ? (e3 ? t3(i4, s3) : i4.__proto__ = s3, i4) : i4;
      };
    })() : void 0);
  }, 3068: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9504), r2 = i2(2652), a2 = RangeError, o2 = TypeError, l2 = 1 / 0, h2 = Math.abs, c2 = Math.pow, d2 = n2([].push), u2 = c2(2, 1023), p2 = c2(2, 53) - 1, g2 = Number.MAX_VALUE, m2 = c2(2, 971), f2 = {}, b2 = {}, v2 = {}, y2 = {}, w2 = {}, x2 = function(t3, e3) {
      var i3 = t3 + e3;
      return { hi: i3, lo: e3 - (i3 - t3) };
    };
    s2({ target: "Math", stat: true }, { sumPrecise: function(t3) {
      var e3 = [], i3 = 0, s3 = y2;
      switch (r2(t3, function(t4) {
        if (++i3 >= p2) throw new a2("Maximum allowed index exceeded");
        if ("number" != typeof t4) throw new o2("Value is not a number");
        s3 !== f2 && (t4 != t4 ? s3 = f2 : t4 === l2 ? s3 = s3 === b2 ? f2 : v2 : t4 === -1 / 0 ? s3 = s3 === v2 ? f2 : b2 : 0 === t4 && 1 / t4 !== l2 || s3 !== y2 && s3 !== w2 || (s3 = w2, d2(e3, t4)));
      }), s3) {
        case f2:
          return NaN;
        case b2:
          return -1 / 0;
        case v2:
          return l2;
        case y2:
          return -0;
      }
      for (var n3, c3, A2, _2, S2, E2, C2 = [], T2 = 0, M2 = 0; M2 < e3.length; M2++) {
        n3 = e3[M2];
        for (var k2 = 0, D2 = 0; D2 < C2.length; D2++) {
          if (c3 = C2[D2], h2(n3) < h2(c3) && (E2 = n3, n3 = c3, c3 = E2), _2 = (A2 = x2(n3, c3)).hi, S2 = A2.lo, h2(_2) === l2) {
            var P2 = _2 === l2 ? 1 : -1;
            T2 += P2, h2(n3 = n3 - P2 * u2 - P2 * u2) < h2(c3) && (E2 = n3, n3 = c3, c3 = E2), _2 = (A2 = x2(n3, c3)).hi, S2 = A2.lo;
          }
          0 !== S2 && (C2[k2++] = S2), n3 = _2;
        }
        C2.length = k2, 0 !== n3 && d2(C2, n3);
      }
      var I2 = C2.length - 1;
      if (_2 = 0, S2 = 0, 0 !== T2) {
        var R2 = I2 >= 0 ? C2[I2] : 0;
        if (I2--, h2(T2) > 1 || T2 > 0 && R2 > 0 || T2 < 0 && R2 < 0) return T2 > 0 ? l2 : -1 / 0;
        if (_2 = (A2 = x2(T2 * u2, R2 / 2)).hi, S2 = A2.lo, S2 *= 2, h2(2 * _2) === l2) return _2 > 0 ? _2 === u2 && S2 === -m2 / 2 && I2 >= 0 && C2[I2] < 0 ? g2 : l2 : _2 === -u2 && S2 === m2 / 2 && I2 >= 0 && C2[I2] > 0 ? -g2 : -1 / 0;
        0 !== S2 && (C2[++I2] = S2, S2 = 0), _2 *= 2;
      }
      for (; I2 >= 0 && (_2 = (A2 = x2(_2, C2[I2--])).hi, 0 === (S2 = A2.lo)); ) ;
      return I2 >= 0 && (S2 < 0 && C2[I2] < 0 || S2 > 0 && C2[I2] > 0) && (c3 = 2 * S2) === (n3 = _2 + c3) - _2 && (_2 = n3), _2;
    } });
  }, 3167: (t2, e2, i2) => {
    var s2 = i2(4901), n2 = i2(34), r2 = i2(2967);
    t2.exports = function(t3, e3, i3) {
      var a2, o2;
      return r2 && s2(a2 = e3.constructor) && a2 !== i3 && n2(o2 = a2.prototype) && o2 !== i3.prototype && r2(t3, o2), t3;
    };
  }, 3238: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(7811), r2 = i2(7394), a2 = s2.DataView;
    t2.exports = function(t3) {
      if (!n2 || 0 !== r2(t3)) return false;
      try {
        return new a2(t3), false;
      } catch (t4) {
        return true;
      }
    };
  }, 3392: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = 0, r2 = Math.random(), a2 = s2(1.1.toString);
    t2.exports = function(t3) {
      return "Symbol(" + (void 0 === t3 ? "" : t3) + ")_" + a2(++n2 + r2, 36);
    };
  }, 3440: (t2, e2, i2) => {
    var s2 = i2(7080), n2 = i2(4402), r2 = i2(9286), a2 = i2(5170), o2 = i2(3789), l2 = i2(8469), h2 = i2(507), c2 = n2.has, d2 = n2.remove;
    t2.exports = function(t3) {
      var e3 = s2(this), i3 = o2(t3), n3 = r2(e3);
      return a2(e3) <= i3.size ? l2(e3, function(t4) {
        i3.includes(t4) && d2(n3, t4);
      }) : h2(i3.getIterator(), function(t4) {
        c2(n3, t4) && d2(n3, t4);
      }), n3;
    };
  }, 3463: (t2) => {
    var e2 = TypeError;
    t2.exports = function(t3) {
      if ("string" == typeof t3) return t3;
      throw new e2("Argument is not a string");
    };
  }, 3506: (t2, e2, i2) => {
    var s2 = i2(3925), n2 = String, r2 = TypeError;
    t2.exports = function(t3) {
      if (s2(t3)) return t3;
      throw new r2("Can't set " + n2(t3) + " as a prototype");
    };
  }, 3579: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9565), r2 = i2(2652), a2 = i2(9306), o2 = i2(8551), l2 = i2(1767), h2 = i2(9539), c2 = i2(4549)("some", TypeError);
    s2({ target: "Iterator", proto: true, real: true, forced: c2 }, { some: function(t3) {
      o2(this);
      try {
        a2(t3);
      } catch (t4) {
        h2(this, "throw", t4);
      }
      if (c2) return n2(c2, this, t3);
      var e3 = l2(this), i3 = 0;
      return r2(e3, function(e4, s3) {
        if (t3(e4, i3++)) return s3();
      }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
    } });
  }, 3650: (t2, e2, i2) => {
    var s2 = i2(7080), n2 = i2(4402), r2 = i2(9286), a2 = i2(3789), o2 = i2(507), l2 = n2.add, h2 = n2.has, c2 = n2.remove;
    t2.exports = function(t3) {
      var e3 = s2(this), i3 = a2(t3).getIterator(), n3 = r2(e3);
      return o2(i3, function(t4) {
        h2(e3, t4) ? c2(n3, t4) : l2(n3, t4);
      }), n3;
    };
  }, 3706: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = i2(4901), r2 = i2(7629), a2 = s2(Function.toString);
    n2(r2.inspectSource) || (r2.inspectSource = function(t3) {
      return a2(t3);
    }), t2.exports = r2.inspectSource;
  }, 3717: (t2, e2) => {
    e2.f = Object.getOwnPropertySymbols;
  }, 3724: (t2, e2, i2) => {
    var s2 = i2(9039);
    t2.exports = !s2(function() {
      return 7 !== Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1];
    });
  }, 3789: (t2, e2, i2) => {
    var s2 = i2(9306), n2 = i2(8551), r2 = i2(9565), a2 = i2(1291), o2 = i2(1767), l2 = "Invalid size", h2 = RangeError, c2 = TypeError, d2 = Math.max, u2 = function(t3, e3) {
      this.set = t3, this.size = d2(e3, 0), this.has = s2(t3.has), this.keys = s2(t3.keys);
    };
    u2.prototype = { getIterator: function() {
      return o2(n2(r2(this.keys, this.set)));
    }, includes: function(t3) {
      return r2(this.has, this.set, t3);
    } }, t2.exports = function(t3) {
      n2(t3);
      var e3 = +t3.size;
      if (e3 != e3) throw new c2(l2);
      var i3 = a2(e3);
      if (i3 < 0) throw new h2(l2);
      return new u2(t3, i3);
    };
  }, 3838: (t2, e2, i2) => {
    var s2 = i2(7080), n2 = i2(5170), r2 = i2(8469), a2 = i2(3789);
    t2.exports = function(t3) {
      var e3 = s2(this), i3 = a2(t3);
      return !(n2(e3) > i3.size) && false !== r2(e3, function(t4) {
        if (!i3.includes(t4)) return false;
      }, true);
    };
  }, 3853: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4449);
    s2({ target: "Set", proto: true, real: true, forced: !i2(4916)("isDisjointFrom", function(t3) {
      return !t3;
    }) }, { isDisjointFrom: n2 });
  }, 3925: (t2, e2, i2) => {
    var s2 = i2(34);
    t2.exports = function(t3) {
      return s2(t3) || null === t3;
    };
  }, 3972: (t2, e2, i2) => {
    var s2 = i2(34), n2 = String, r2 = TypeError;
    t2.exports = function(t3) {
      if (void 0 === t3 || s2(t3)) return t3;
      throw new r2(n2(t3) + " is not an object or undefined");
    };
  }, 4055: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(34), r2 = s2.document, a2 = n2(r2) && n2(r2.createElement);
    t2.exports = function(t3) {
      return a2 ? r2.createElement(t3) : {};
    };
  }, 4114: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(8981), r2 = i2(6198), a2 = i2(4527), o2 = i2(6837);
    s2({ target: "Array", proto: true, arity: 1, forced: i2(9039)(function() {
      return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
    }) || !(function() {
      try {
        Object.defineProperty([], "length", { writable: false }).push();
      } catch (t3) {
        return t3 instanceof TypeError;
      }
    })() }, { push: function(t3) {
      var e3 = n2(this), i3 = r2(e3), s3 = arguments.length;
      o2(i3 + s3);
      for (var l2 = 0; l2 < s3; l2++) e3[i3] = arguments[l2], i3++;
      return a2(e3, i3), i3;
    } });
  }, 4117: (t2) => {
    t2.exports = function(t3) {
      return null == t3;
    };
  }, 4149: (t2) => {
    var e2 = RangeError;
    t2.exports = function(t3) {
      if (t3 == t3) return t3;
      throw new e2("NaN is not allowed");
    };
  }, 4154: (t2, e2, i2) => {
    var s2 = i2(6955), n2 = TypeError;
    t2.exports = function(t3) {
      if ("Uint8Array" === s2(t3)) return t3;
      throw new n2("Argument is not an Uint8Array");
    };
  }, 4204: (t2, e2, i2) => {
    var s2 = i2(7080), n2 = i2(4402).add, r2 = i2(9286), a2 = i2(3789), o2 = i2(507);
    t2.exports = function(t3) {
      var e3 = s2(this), i3 = a2(t3).getIterator(), l2 = r2(e3);
      return o2(i3, function(t4) {
        n2(l2, t4);
      }), l2;
    };
  }, 4209: (t2, e2, i2) => {
    var s2 = i2(8227), n2 = i2(6269), r2 = s2("iterator"), a2 = Array.prototype;
    t2.exports = function(t3) {
      return void 0 !== t3 && (n2.Array === t3 || a2[r2] === t3);
    };
  }, 4215: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(2839), r2 = i2(2195), a2 = function(t3) {
      return n2.slice(0, t3.length) === t3;
    };
    t2.exports = a2("Bun/") ? "BUN" : a2("Cloudflare-Workers") ? "CLOUDFLARE" : a2("Deno/") ? "DENO" : a2("Node.js/") ? "NODE" : s2.Bun && "string" == typeof Bun.version ? "BUN" : s2.Deno && "object" == typeof Deno.version ? "DENO" : "process" === r2(s2.process) ? "NODE" : s2.window && s2.document ? "BROWSER" : "REST";
  }, 4226: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(3463), a2 = i2(4154), o2 = i2(5169), l2 = i2(2303);
    n2.Uint8Array && s2({ target: "Uint8Array", proto: true }, { setFromHex: function(t3) {
      a2(this), r2(t3), o2(this.buffer);
      var e3 = l2(t3, this).read;
      return { read: e3, written: e3 / 2 };
    } });
  }, 4235: (t2, e2, i2) => {
    i2(3068);
  }, 4270: (t2, e2, i2) => {
    var s2 = i2(9565), n2 = i2(4901), r2 = i2(34), a2 = TypeError;
    t2.exports = function(t3, e3) {
      var i3, o2;
      if ("string" === e3 && n2(i3 = t3.toString) && !r2(o2 = s2(i3, t3))) return o2;
      if (n2(i3 = t3.valueOf) && !r2(o2 = s2(i3, t3))) return o2;
      if ("string" !== e3 && n2(i3 = t3.toString) && !r2(o2 = s2(i3, t3))) return o2;
      throw new a2("Can't convert object to primitive value");
    };
  }, 4376: (t2, e2, i2) => {
    var s2 = i2(2195);
    t2.exports = Array.isArray || function(t3) {
      return "Array" === s2(t3);
    };
  }, 4402: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = Set.prototype;
    t2.exports = { Set, add: s2(n2.add), has: s2(n2.has), remove: s2(n2.delete), proto: n2 };
  }, 4449: (t2, e2, i2) => {
    var s2 = i2(7080), n2 = i2(4402).has, r2 = i2(5170), a2 = i2(3789), o2 = i2(8469), l2 = i2(507), h2 = i2(9539);
    t2.exports = function(t3) {
      var e3 = s2(this), i3 = a2(t3);
      if (r2(e3) <= i3.size) return false !== o2(e3, function(t4) {
        if (i3.includes(t4)) return false;
      }, true);
      var c2 = i3.getIterator();
      return false !== l2(c2, function(t4) {
        if (n2(e3, t4)) return h2(c2, "normal", false);
      });
    };
  }, 4483: (t2, e2, i2) => {
    var s2, n2, r2, a2, o2 = i2(4576), l2 = i2(9429), h2 = i2(1548), c2 = o2.structuredClone, d2 = o2.ArrayBuffer, u2 = o2.MessageChannel, p2 = false;
    if (h2) p2 = function(t3) {
      c2(t3, { transfer: [t3] });
    };
    else if (d2) try {
      u2 || (s2 = l2("worker_threads")) && (u2 = s2.MessageChannel), u2 && (n2 = new u2(), r2 = new d2(2), a2 = function(t3) {
        n2.port1.postMessage(null, [t3]);
      }, 2 === r2.byteLength && (a2(r2), 0 === r2.byteLength && (p2 = a2)));
    } catch (t3) {
    }
    t2.exports = p2;
  }, 4495: (t2, e2, i2) => {
    var s2 = i2(9519), n2 = i2(9039), r2 = i2(4576).String;
    t2.exports = !!Object.getOwnPropertySymbols && !n2(function() {
      var t3 = /* @__PURE__ */ Symbol("symbol detection");
      return !r2(t3) || !(Object(t3) instanceof Symbol) || !Symbol.sham && s2 && s2 < 41;
    });
  }, 4527: (t2, e2, i2) => {
    var s2 = i2(3724), n2 = i2(4376), r2 = TypeError, a2 = Object.getOwnPropertyDescriptor, o2 = s2 && !(function() {
      if (void 0 !== this) return true;
      try {
        Object.defineProperty([], "length", { writable: false }).length = 1;
      } catch (t3) {
        return t3 instanceof TypeError;
      }
    })();
    t2.exports = o2 ? function(t3, e3) {
      if (n2(t3) && !a2(t3, "length").writable) throw new r2("Cannot set read only .length");
      return t3.length = e3;
    } : function(t3, e3) {
      return t3.length = e3;
    };
  }, 4549: (t2, e2, i2) => {
    var s2 = i2(4576);
    t2.exports = function(t3, e3) {
      var i3 = s2.Iterator, n2 = i3 && i3.prototype, r2 = n2 && n2[t3], a2 = false;
      if (r2) try {
        r2.call({ next: function() {
          return { done: true };
        }, return: function() {
          a2 = true;
        } }, -1);
      } catch (t4) {
        t4 instanceof e3 || (a2 = false);
      }
      if (!a2) return r2;
    };
  }, 4576: function(t2) {
    var e2 = function(t3) {
      return t3 && t3.Math === Math && t3;
    };
    t2.exports = e2("object" == typeof globalThis && globalThis) || e2("object" == typeof window && window) || e2("object" == typeof self && self) || e2("object" == typeof global && global) || e2("object" == typeof this && this) || /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
  }, 4603: (t2, e2, i2) => {
    var s2 = i2(6840), n2 = i2(9504), r2 = i2(655), a2 = i2(2812), o2 = URLSearchParams, l2 = o2.prototype, h2 = n2(l2.append), c2 = n2(l2.delete), d2 = n2(l2.forEach), u2 = n2([].push), p2 = new o2("a=1&a=2&b=3");
    p2.delete("a", 1), p2.delete("b", void 0), p2 + "" != "a=2" && s2(l2, "delete", function(t3) {
      var e3 = arguments.length, i3 = e3 < 2 ? void 0 : arguments[1];
      if (e3 && void 0 === i3) return c2(this, t3);
      var s3 = [];
      d2(this, function(t4, e4) {
        u2(s3, { key: e4, value: t4 });
      }), a2(e3, 1);
      for (var n3, o3 = r2(t3), l3 = r2(i3), p3 = 0, g2 = 0, m2 = false, f2 = s3.length; p3 < f2; ) n3 = s3[p3++], m2 || n3.key === o3 ? (m2 = true, c2(this, n3.key)) : g2++;
      for (; g2 < f2; ) (n3 = s3[g2++]).key === o3 && n3.value === l3 || h2(this, n3.key, n3.value);
    }, { enumerable: true, unsafe: true });
  }, 4628: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(6043);
    s2({ target: "Promise", stat: true }, { withResolvers: function() {
      var t3 = n2.f(this);
      return { promise: t3.promise, resolve: t3.resolve, reject: t3.reject };
    } });
  }, 4644: (t2, e2, i2) => {
    var s2, n2, r2, a2 = i2(7811), o2 = i2(3724), l2 = i2(4576), h2 = i2(4901), c2 = i2(34), d2 = i2(9297), u2 = i2(6955), p2 = i2(6823), g2 = i2(6699), m2 = i2(6840), f2 = i2(2106), b2 = i2(1625), v2 = i2(2787), y2 = i2(2967), w2 = i2(8227), x2 = i2(3392), A2 = i2(1181), _2 = A2.enforce, S2 = A2.get, E2 = l2.Int8Array, C2 = E2 && E2.prototype, T2 = l2.Uint8ClampedArray, M2 = T2 && T2.prototype, k2 = E2 && v2(E2), D2 = C2 && v2(C2), P2 = Object.prototype, I2 = l2.TypeError, R2 = w2("toStringTag"), L2 = x2("TYPED_ARRAY_TAG"), B2 = "TypedArrayConstructor", F2 = a2 && !!y2 && "Opera" !== u2(l2.opera), O2 = false, N2 = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, U2 = { BigInt64Array: 8, BigUint64Array: 8 }, z2 = function(t3) {
      var e3 = v2(t3);
      if (c2(e3)) {
        var i3 = S2(e3);
        return i3 && d2(i3, B2) ? i3[B2] : z2(e3);
      }
    }, H2 = function(t3) {
      if (!c2(t3)) return false;
      var e3 = u2(t3);
      return d2(N2, e3) || d2(U2, e3);
    };
    for (s2 in N2) (r2 = (n2 = l2[s2]) && n2.prototype) ? _2(r2)[B2] = n2 : F2 = false;
    for (s2 in U2) (r2 = (n2 = l2[s2]) && n2.prototype) && (_2(r2)[B2] = n2);
    if ((!F2 || !h2(k2) || k2 === Function.prototype) && (k2 = function() {
      throw new I2("Incorrect invocation");
    }, F2)) for (s2 in N2) l2[s2] && y2(l2[s2], k2);
    if ((!F2 || !D2 || D2 === P2) && (D2 = k2.prototype, F2)) for (s2 in N2) l2[s2] && y2(l2[s2].prototype, D2);
    if (F2 && v2(M2) !== D2 && y2(M2, D2), o2 && !d2(D2, R2)) for (s2 in O2 = true, f2(D2, R2, { configurable: true, get: function() {
      return c2(this) ? this[L2] : void 0;
    } }), N2) l2[s2] && g2(l2[s2], L2, s2);
    t2.exports = { NATIVE_ARRAY_BUFFER_VIEWS: F2, TYPED_ARRAY_TAG: O2 && L2, aTypedArray: function(t3) {
      if (H2(t3)) return t3;
      throw new I2("Target is not a typed array");
    }, aTypedArrayConstructor: function(t3) {
      if (h2(t3) && (!y2 || b2(k2, t3))) return t3;
      throw new I2(p2(t3) + " is not a typed array constructor");
    }, exportTypedArrayMethod: function(t3, e3, i3, s3) {
      if (o2) {
        if (i3) for (var n3 in N2) {
          var r3 = l2[n3];
          if (r3 && d2(r3.prototype, t3)) try {
            delete r3.prototype[t3];
          } catch (i4) {
            try {
              r3.prototype[t3] = e3;
            } catch (t4) {
            }
          }
        }
        D2[t3] && !i3 || m2(D2, t3, i3 ? e3 : F2 && C2[t3] || e3, s3);
      }
    }, exportTypedArrayStaticMethod: function(t3, e3, i3) {
      var s3, n3;
      if (o2) {
        if (y2) {
          if (i3) {
            for (s3 in N2) if ((n3 = l2[s3]) && d2(n3, t3)) try {
              delete n3[t3];
            } catch (t4) {
            }
          }
          if (k2[t3] && !i3) return;
          try {
            return m2(k2, t3, i3 ? e3 : F2 && k2[t3] || e3);
          } catch (t4) {
          }
        }
        for (s3 in N2) !(n3 = l2[s3]) || n3[t3] && !i3 || m2(n3, t3, e3);
      }
    }, getTypedArrayConstructor: z2, isView: function(t3) {
      if (!c2(t3)) return false;
      var e3 = u2(t3);
      return "DataView" === e3 || d2(N2, e3) || d2(U2, e3);
    }, isTypedArray: H2, TypedArray: k2, TypedArrayPrototype: D2 };
  }, 4659: (t2, e2, i2) => {
    var s2 = i2(3724), n2 = i2(4913), r2 = i2(6980);
    t2.exports = function(t3, e3, i3) {
      s2 ? n2.f(t3, e3, r2(0, i3)) : t3[e3] = i3;
    };
  }, 4901: (t2) => {
    var e2 = "object" == typeof document && document.all;
    t2.exports = void 0 === e2 && void 0 !== e2 ? function(t3) {
      return "function" == typeof t3 || t3 === e2;
    } : function(t3) {
      return "function" == typeof t3;
    };
  }, 4913: (t2, e2, i2) => {
    var s2 = i2(3724), n2 = i2(5917), r2 = i2(8686), a2 = i2(8551), o2 = i2(6969), l2 = TypeError, h2 = Object.defineProperty, c2 = Object.getOwnPropertyDescriptor, d2 = "enumerable", u2 = "configurable", p2 = "writable";
    e2.f = s2 ? r2 ? function(t3, e3, i3) {
      if (a2(t3), e3 = o2(e3), a2(i3), "function" == typeof t3 && "prototype" === e3 && "value" in i3 && p2 in i3 && !i3[p2]) {
        var s3 = c2(t3, e3);
        s3 && s3[p2] && (t3[e3] = i3.value, i3 = { configurable: u2 in i3 ? i3[u2] : s3[u2], enumerable: d2 in i3 ? i3[d2] : s3[d2], writable: false });
      }
      return h2(t3, e3, i3);
    } : h2 : function(t3, e3, i3) {
      if (a2(t3), e3 = o2(e3), a2(i3), n2) try {
        return h2(t3, e3, i3);
      } catch (t4) {
      }
      if ("get" in i3 || "set" in i3) throw new l2("Accessors not supported");
      return "value" in i3 && (t3[e3] = i3.value), t3;
    };
  }, 4916: (t2, e2, i2) => {
    var s2 = i2(7751), n2 = function(t3) {
      return { size: t3, has: function() {
        return false;
      }, keys: function() {
        return { next: function() {
          return { done: true };
        } };
      } };
    }, r2 = function(t3) {
      return { size: t3, has: function() {
        return true;
      }, keys: function() {
        throw new Error("e");
      } };
    };
    t2.exports = function(t3, e3) {
      var i3 = s2("Set");
      try {
        new i3()[t3](n2(0));
        try {
          return new i3()[t3](n2(-1)), false;
        } catch (s3) {
          if (!e3) return true;
          try {
            return new i3()[t3](r2(-1 / 0)), false;
          } catch (s4) {
            var a2 = new i3();
            return a2.add(1), a2.add(2), e3(a2[t3](r2(1 / 0)));
          }
        }
      } catch (t4) {
        return false;
      }
    };
  }, 4972: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9565), r2 = i2(8551), a2 = i2(1767), o2 = i2(4149), l2 = i2(9590), h2 = i2(9462), c2 = i2(9539), d2 = i2(4549), u2 = i2(6395), p2 = !u2 && d2("take", RangeError), g2 = h2(function() {
      var t3 = this.iterator;
      if (!this.remaining--) return this.done = true, c2(t3, "normal", void 0);
      var e3 = r2(n2(this.next, t3));
      return (this.done = !!e3.done) ? void 0 : e3.value;
    });
    s2({ target: "Iterator", proto: true, real: true, forced: u2 || p2 }, { take: function(t3) {
      var e3;
      r2(this);
      try {
        e3 = l2(o2(+t3));
      } catch (t4) {
        c2(this, "throw", t4);
      }
      return p2 ? n2(p2, this, e3) : new g2(a2(this), { remaining: e3 });
    } });
  }, 4979: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(7751), a2 = i2(6980), o2 = i2(4913).f, l2 = i2(9297), h2 = i2(679), c2 = i2(3167), d2 = i2(2603), u2 = i2(5002), p2 = i2(8574), g2 = i2(3724), m2 = i2(6395), f2 = "DOMException", b2 = r2("Error"), v2 = r2(f2), y2 = function() {
      h2(this, w2);
      var t3 = arguments.length, e3 = d2(t3 < 1 ? void 0 : arguments[0]), i3 = d2(t3 < 2 ? void 0 : arguments[1], "Error"), s3 = new v2(e3, i3), n3 = new b2(e3);
      return n3.name = f2, o2(s3, "stack", a2(1, p2(n3.stack, 1))), c2(s3, this, y2), s3;
    }, w2 = y2.prototype = v2.prototype, x2 = "stack" in new b2(f2), A2 = "stack" in new v2(1, 2), _2 = v2 && g2 && Object.getOwnPropertyDescriptor(n2, f2), S2 = !(!_2 || _2.writable && _2.configurable), E2 = x2 && !S2 && !A2;
    s2({ global: true, constructor: true, forced: m2 || E2 }, { DOMException: E2 ? y2 : v2 });
    var C2 = r2(f2), T2 = C2.prototype;
    if (T2.constructor !== C2) {
      for (var M2 in m2 || o2(T2, "constructor", a2(1, C2)), u2) if (l2(u2, M2)) {
        var k2 = u2[M2], D2 = k2.s;
        l2(C2, D2) || o2(C2, D2, a2(6, k2.c));
      }
    }
  }, 5002: (t2) => {
    t2.exports = { IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 }, DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 }, HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 }, WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 }, InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 }, NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 }, NoModificationAllowedError: { s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1 }, NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 }, NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 }, InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 }, InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 }, SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 }, InvalidModificationError: { s: "INVALID_MODIFICATION_ERR", c: 13, m: 1 }, NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 }, InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 }, ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 }, TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 }, SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 }, NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 }, AbortError: { s: "ABORT_ERR", c: 20, m: 1 }, URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 }, QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 }, TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 }, InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 }, DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 } };
  }, 5024: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(3650), r2 = i2(9835);
    s2({ target: "Set", proto: true, real: true, forced: !i2(4916)("symmetricDifference") || !r2("symmetricDifference") }, { symmetricDifference: n2 });
  }, 5031: (t2, e2, i2) => {
    var s2 = i2(7751), n2 = i2(9504), r2 = i2(8480), a2 = i2(3717), o2 = i2(8551), l2 = n2([].concat);
    t2.exports = s2("Reflect", "ownKeys") || function(t3) {
      var e3 = r2.f(o2(t3)), i3 = a2.f;
      return i3 ? l2(e3, i3(t3)) : e3;
    };
  }, 5169: (t2, e2, i2) => {
    var s2 = i2(3238), n2 = TypeError;
    t2.exports = function(t3) {
      if (s2(t3)) throw new n2("ArrayBuffer is detached");
      return t3;
    };
  }, 5170: (t2, e2, i2) => {
    var s2 = i2(6706), n2 = i2(4402);
    t2.exports = s2(n2.proto, "size", "get") || function(t3) {
      return t3.size;
    };
  }, 5213: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(5370), a2 = i2(9143), o2 = n2.Uint8Array, l2 = !o2 || !o2.fromBase64 || !(function() {
      try {
        return void o2.fromBase64("a");
      } catch (t3) {
      }
      try {
        o2.fromBase64("", null);
      } catch (t3) {
        return true;
      }
    })();
    o2 && s2({ target: "Uint8Array", stat: true, forced: l2 }, { fromBase64: function(t3) {
      var e3 = a2(t3, arguments.length > 1 ? arguments[1] : void 0, null, 9007199254740991);
      return r2(o2, e3.bytes);
    } });
  }, 5370: (t2, e2, i2) => {
    var s2 = i2(6198);
    t2.exports = function(t3, e3, i3) {
      for (var n2 = 0, r2 = arguments.length > 2 ? i3 : s2(e3), a2 = new t3(r2); r2 > n2; ) a2[n2] = e3[n2++];
      return a2;
    };
  }, 5397: (t2, e2, i2) => {
    var s2 = i2(7055), n2 = i2(7750);
    t2.exports = function(t3) {
      return s2(n2(t3));
    };
  }, 5610: (t2, e2, i2) => {
    var s2 = i2(1291), n2 = Math.max, r2 = Math.min;
    t2.exports = function(t3, e3) {
      var i3 = s2(t3);
      return i3 < 0 ? n2(i3 + e3, 0) : r2(i3, e3);
    };
  }, 5623: (t2, e2, i2) => {
    i2(456);
  }, 5636: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(9504), r2 = i2(6706), a2 = i2(7696), o2 = i2(5169), l2 = i2(7394), h2 = i2(4483), c2 = i2(1548), d2 = s2.structuredClone, u2 = s2.ArrayBuffer, p2 = s2.DataView, g2 = Math.min, m2 = u2.prototype, f2 = p2.prototype, b2 = n2(m2.slice), v2 = r2(m2, "resizable", "get"), y2 = r2(m2, "maxByteLength", "get"), w2 = n2(f2.getInt8), x2 = n2(f2.setInt8);
    t2.exports = (c2 || h2) && function(t3, e3, i3) {
      var s3, n3 = l2(t3), r3 = void 0 === e3 ? n3 : a2(e3), m3 = !v2 || !v2(t3);
      if (o2(t3), c2 && (t3 = d2(t3, { transfer: [t3] }), n3 === r3 && (i3 || m3))) return t3;
      if (n3 >= r3 && (!i3 || m3)) s3 = b2(t3, 0, r3);
      else {
        var f3 = i3 && !m3 && y2 ? { maxByteLength: y2(t3) } : void 0;
        s3 = new u2(r3, f3);
        for (var A2 = new p2(t3), _2 = new p2(s3), S2 = g2(r3, n3), E2 = 0; E2 < S2; E2++) x2(_2, E2, w2(A2, E2));
      }
      return c2 || h2(t3), s3;
    };
  }, 5745: (t2, e2, i2) => {
    var s2 = i2(7629);
    t2.exports = function(t3, e3) {
      return s2[t3] || (s2[t3] = e3 || {});
    };
  }, 5781: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(7751), r2 = i2(2812), a2 = i2(655), o2 = i2(7416), l2 = n2("URL");
    s2({ target: "URL", stat: true, forced: !o2 }, { parse: function(t3) {
      var e3 = r2(arguments.length, 1), i3 = a2(t3), s3 = e3 < 2 || void 0 === arguments[1] ? void 0 : a2(arguments[1]);
      try {
        return new l2(i3, s3);
      } catch (t4) {
        return null;
      }
    } });
  }, 5854: (t2, e2, i2) => {
    var s2 = i2(2777), n2 = TypeError;
    t2.exports = function(t3) {
      var e3 = s2(t3, "number");
      if ("number" == typeof e3) throw new n2("Can't convert number to bigint");
      return BigInt(e3);
    };
  }, 5876: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(3838);
    s2({ target: "Set", proto: true, real: true, forced: !i2(4916)("isSubsetOf", function(t3) {
      return t3;
    }) }, { isSubsetOf: n2 });
  }, 5917: (t2, e2, i2) => {
    var s2 = i2(3724), n2 = i2(9039), r2 = i2(4055);
    t2.exports = !s2 && !n2(function() {
      return 7 !== Object.defineProperty(r2("div"), "a", { get: function() {
        return 7;
      } }).a;
    });
  }, 5966: (t2, e2, i2) => {
    var s2 = i2(9306), n2 = i2(4117);
    t2.exports = function(t3, e3) {
      var i3 = t3[e3];
      return n2(i3) ? void 0 : s2(i3);
    };
  }, 6043: (t2, e2, i2) => {
    var s2 = i2(9306), n2 = TypeError, r2 = function(t3) {
      var e3, i3;
      this.promise = new t3(function(t4, s3) {
        if (void 0 !== e3 || void 0 !== i3) throw new n2("Bad Promise constructor");
        e3 = t4, i3 = s3;
      }), this.resolve = s2(e3), this.reject = s2(i3);
    };
    t2.exports.f = function(t3) {
      return new r2(t3);
    };
  }, 6080: (t2, e2, i2) => {
    var s2 = i2(7476), n2 = i2(9306), r2 = i2(616), a2 = s2(s2.bind);
    t2.exports = function(t3, e3) {
      return n2(t3), void 0 === e3 ? t3 : r2 ? a2(t3, e3) : function() {
        return t3.apply(e3, arguments);
      };
    };
  }, 6119: (t2, e2, i2) => {
    var s2 = i2(5745), n2 = i2(3392), r2 = s2("keys");
    t2.exports = function(t3) {
      return r2[t3] || (r2[t3] = n2(t3));
    };
  }, 6193: (t2, e2, i2) => {
    var s2 = i2(4215);
    t2.exports = "NODE" === s2;
  }, 6198: (t2, e2, i2) => {
    var s2 = i2(8014);
    t2.exports = function(t3) {
      return s2(t3.length);
    };
  }, 6269: (t2) => {
    t2.exports = {};
  }, 6279: (t2, e2, i2) => {
    var s2 = i2(6840);
    t2.exports = function(t3, e3, i3) {
      for (var n2 in e3) s2(t3, n2, e3[n2], i3);
      return t3;
    };
  }, 6319: (t2, e2, i2) => {
    var s2 = i2(8551), n2 = i2(9539);
    t2.exports = function(t3, e3, i3, r2) {
      try {
        return r2 ? e3(s2(i3)[0], i3[1]) : e3(i3);
      } catch (e4) {
        n2(t3, "throw", e4);
      }
    };
  }, 6395: (t2) => {
    t2.exports = false;
  }, 6518: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(7347).f, r2 = i2(6699), a2 = i2(6840), o2 = i2(9433), l2 = i2(7740), h2 = i2(2796);
    t2.exports = function(t3, e3) {
      var i3, c2, d2, u2, p2, g2 = t3.target, m2 = t3.global, f2 = t3.stat;
      if (i3 = m2 ? s2 : f2 ? s2[g2] || o2(g2, {}) : s2[g2] && s2[g2].prototype) for (c2 in e3) {
        if (u2 = e3[c2], d2 = t3.dontCallGetSet ? (p2 = n2(i3, c2)) && p2.value : i3[c2], !h2(m2 ? c2 : g2 + (f2 ? "." : "#") + c2, t3.forced) && void 0 !== d2) {
          if (typeof u2 == typeof d2) continue;
          l2(u2, d2);
        }
        (t3.sham || d2 && d2.sham) && r2(u2, "sham", true), a2(i3, c2, u2, t3);
      }
    };
  }, 6573: (t2, e2, i2) => {
    var s2 = i2(3724), n2 = i2(2106), r2 = i2(3238), a2 = ArrayBuffer.prototype;
    s2 && !("detached" in a2) && n2(a2, "detached", { configurable: true, get: function() {
      return r2(this);
    } });
  }, 6632: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(9143), a2 = i2(4154), o2 = n2.Uint8Array, l2 = !o2 || !o2.prototype.setFromBase64 || !(function() {
      var t3 = new o2([255, 255, 255, 255, 255]);
      try {
        return void t3.setFromBase64("", null);
      } catch (t4) {
      }
      try {
        return void t3.setFromBase64("a");
      } catch (t4) {
      }
      try {
        t3.setFromBase64("MjYyZg===");
      } catch (e3) {
        return 50 === t3[0] && 54 === t3[1] && 50 === t3[2] && 255 === t3[3] && 255 === t3[4];
      }
    })();
    o2 && s2({ target: "Uint8Array", proto: true, forced: l2 }, { setFromBase64: function(t3) {
      a2(this);
      var e3 = r2(t3, arguments.length > 1 ? arguments[1] : void 0, this, this.length);
      return { read: e3.read, written: e3.written };
    } });
  }, 6699: (t2, e2, i2) => {
    var s2 = i2(3724), n2 = i2(4913), r2 = i2(6980);
    t2.exports = s2 ? function(t3, e3, i3) {
      return n2.f(t3, e3, r2(1, i3));
    } : function(t3, e3, i3) {
      return t3[e3] = i3, t3;
    };
  }, 6706: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = i2(9306);
    t2.exports = function(t3, e3, i3) {
      try {
        return s2(n2(Object.getOwnPropertyDescriptor(t3, e3)[i3]));
      } catch (t4) {
      }
    };
  }, 6801: (t2, e2, i2) => {
    var s2 = i2(3724), n2 = i2(8686), r2 = i2(4913), a2 = i2(8551), o2 = i2(5397), l2 = i2(1072);
    e2.f = s2 && !n2 ? Object.defineProperties : function(t3, e3) {
      a2(t3);
      for (var i3, s3 = o2(e3), n3 = l2(e3), h2 = n3.length, c2 = 0; h2 > c2; ) r2.f(t3, i3 = n3[c2++], s3[i3]);
      return t3;
    };
  }, 6823: (t2) => {
    var e2 = String;
    t2.exports = function(t3) {
      try {
        return e2(t3);
      } catch (t4) {
        return "Object";
      }
    };
  }, 6837: (t2) => {
    var e2 = TypeError;
    t2.exports = function(t3) {
      if (t3 > 9007199254740991) throw e2("Maximum allowed index exceeded");
      return t3;
    };
  }, 6840: (t2, e2, i2) => {
    var s2 = i2(4901), n2 = i2(4913), r2 = i2(283), a2 = i2(9433);
    t2.exports = function(t3, e3, i3, o2) {
      o2 || (o2 = {});
      var l2 = o2.enumerable, h2 = void 0 !== o2.name ? o2.name : e3;
      if (s2(i3) && r2(i3, h2, o2), o2.global) l2 ? t3[e3] = i3 : a2(e3, i3);
      else {
        try {
          o2.unsafe ? t3[e3] && (l2 = true) : delete t3[e3];
        } catch (t4) {
        }
        l2 ? t3[e3] = i3 : n2.f(t3, e3, { value: i3, enumerable: false, configurable: !o2.nonConfigurable, writable: !o2.nonWritable });
      }
      return t3;
    };
  }, 6955: (t2, e2, i2) => {
    var s2 = i2(2140), n2 = i2(4901), r2 = i2(2195), a2 = i2(8227)("toStringTag"), o2 = Object, l2 = "Arguments" === r2(/* @__PURE__ */ (function() {
      return arguments;
    })());
    t2.exports = s2 ? r2 : function(t3) {
      var e3, i3, s3;
      return void 0 === t3 ? "Undefined" : null === t3 ? "Null" : "string" == typeof (i3 = (function(t4, e4) {
        try {
          return t4[e4];
        } catch (t5) {
        }
      })(e3 = o2(t3), a2)) ? i3 : l2 ? r2(e3) : "Object" === (s3 = r2(e3)) && n2(e3.callee) ? "Arguments" : s3;
    };
  }, 6969: (t2, e2, i2) => {
    var s2 = i2(2777), n2 = i2(757);
    t2.exports = function(t3) {
      var e3 = s2(t3, "string");
      return n2(e3) ? e3 : e3 + "";
    };
  }, 6980: (t2) => {
    t2.exports = function(t3, e2) {
      return { enumerable: !(1 & t3), configurable: !(2 & t3), writable: !(4 & t3), value: e2 };
    };
  }, 7040: (t2, e2, i2) => {
    var s2 = i2(4495);
    t2.exports = s2 && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  }, 7055: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = i2(9039), r2 = i2(2195), a2 = Object, o2 = s2("".split);
    t2.exports = n2(function() {
      return !a2("z").propertyIsEnumerable(0);
    }) ? function(t3) {
      return "String" === r2(t3) ? o2(t3, "") : a2(t3);
    } : a2;
  }, 7080: (t2, e2, i2) => {
    var s2 = i2(4402).has;
    t2.exports = function(t3) {
      return s2(t3), t3;
    };
  }, 7347: (t2, e2, i2) => {
    var s2 = i2(3724), n2 = i2(9565), r2 = i2(8773), a2 = i2(6980), o2 = i2(5397), l2 = i2(6969), h2 = i2(9297), c2 = i2(5917), d2 = Object.getOwnPropertyDescriptor;
    e2.f = s2 ? d2 : function(t3, e3) {
      if (t3 = o2(t3), e3 = l2(e3), c2) try {
        return d2(t3, e3);
      } catch (t4) {
      }
      if (h2(t3, e3)) return a2(!n2(r2.f, t3, e3), t3[e3]);
    };
  }, 7394: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(6706), r2 = i2(2195), a2 = s2.ArrayBuffer, o2 = s2.TypeError;
    t2.exports = a2 && n2(a2.prototype, "byteLength", "get") || function(t3) {
      if ("ArrayBuffer" !== r2(t3)) throw new o2("ArrayBuffer expected");
      return t3.byteLength;
    };
  }, 7416: (t2, e2, i2) => {
    var s2 = i2(9039), n2 = i2(8227), r2 = i2(3724), a2 = i2(6395), o2 = n2("iterator");
    t2.exports = !s2(function() {
      var t3 = new URL("b?a=1&b=2&c=3", "https://a"), e3 = t3.searchParams, i3 = new URLSearchParams("a=1&a=2&b=3"), s3 = "";
      return t3.pathname = "c%20d", e3.forEach(function(t4, i4) {
        e3.delete("b"), s3 += i4 + t4;
      }), i3.delete("a", 2), i3.delete("b", void 0), a2 && (!t3.toJSON || !i3.has("a", 1) || i3.has("a", 2) || !i3.has("a", void 0) || i3.has("b")) || !e3.size && (a2 || !r2) || !e3.sort || "https://a/c%20d?a=1&c=3" !== t3.href || "3" !== e3.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e3[o2] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== s3 || "x" !== new URL("https://x", void 0).host;
    });
  }, 7476: (t2, e2, i2) => {
    var s2 = i2(2195), n2 = i2(9504);
    t2.exports = function(t3) {
      if ("Function" === s2(t3)) return n2(t3);
    };
  }, 7566: (t2, e2, i2) => {
    var s2 = i2(6840), n2 = i2(9504), r2 = i2(655), a2 = i2(2812), o2 = URLSearchParams, l2 = o2.prototype, h2 = n2(l2.getAll), c2 = n2(l2.has), d2 = new o2("a=1");
    !d2.has("a", 2) && d2.has("a", void 0) || s2(l2, "has", function(t3) {
      var e3 = arguments.length, i3 = e3 < 2 ? void 0 : arguments[1];
      if (e3 && void 0 === i3) return c2(this, t3);
      var s3 = h2(this, t3);
      a2(e3, 1);
      for (var n3 = r2(i3), o3 = 0; o3 < s3.length; ) if (s3[o3++] === n3) return true;
      return false;
    }, { enumerable: true, unsafe: true });
  }, 7588: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9565), r2 = i2(2652), a2 = i2(9306), o2 = i2(8551), l2 = i2(1767), h2 = i2(9539), c2 = i2(4549)("forEach", TypeError);
    s2({ target: "Iterator", proto: true, real: true, forced: c2 }, { forEach: function(t3) {
      o2(this);
      try {
        a2(t3);
      } catch (t4) {
        h2(this, "throw", t4);
      }
      if (c2) return n2(c2, this, t3);
      var e3 = l2(this), i3 = 0;
      r2(e3, function(e4) {
        t3(e4, i3++);
      }, { IS_RECORD: true });
    } });
  }, 7629: (t2, e2, i2) => {
    var s2 = i2(6395), n2 = i2(4576), r2 = i2(9433), a2 = "__core-js_shared__", o2 = t2.exports = n2[a2] || r2(a2, {});
    (o2.versions || (o2.versions = [])).push({ version: "3.45.1", mode: s2 ? "pure" : "global", copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.45.1/LICENSE", source: "https://github.com/zloirock/core-js" });
  }, 7642: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(3440), r2 = i2(9039);
    s2({ target: "Set", proto: true, real: true, forced: !i2(4916)("difference", function(t3) {
      return 0 === t3.size;
    }) || r2(function() {
      var t3 = { size: 1, has: function() {
        return true;
      }, keys: function() {
        var t4 = 0;
        return { next: function() {
          var i3 = t4++ > 1;
          return e3.has(1) && e3.clear(), { done: i3, value: 2 };
        } };
      } }, e3 = /* @__PURE__ */ new Set([1, 2, 3, 4]);
      return 3 !== e3.difference(t3).size;
    }) }, { difference: n2 });
  }, 7657: (t2, e2, i2) => {
    var s2, n2, r2, a2 = i2(9039), o2 = i2(4901), l2 = i2(34), h2 = i2(2360), c2 = i2(2787), d2 = i2(6840), u2 = i2(8227), p2 = i2(6395), g2 = u2("iterator"), m2 = false;
    [].keys && ("next" in (r2 = [].keys()) ? (n2 = c2(c2(r2))) !== Object.prototype && (s2 = n2) : m2 = true), !l2(s2) || a2(function() {
      var t3 = {};
      return s2[g2].call(t3) !== t3;
    }) ? s2 = {} : p2 && (s2 = h2(s2)), o2(s2[g2]) || d2(s2, g2, function() {
      return this;
    }), t2.exports = { IteratorPrototype: s2, BUGGY_SAFARI_ITERATORS: m2 };
  }, 7680: (t2, e2, i2) => {
    var s2 = i2(9504);
    t2.exports = s2([].slice);
  }, 7696: (t2, e2, i2) => {
    var s2 = i2(1291), n2 = i2(8014), r2 = RangeError;
    t2.exports = function(t3) {
      if (void 0 === t3) return 0;
      var e3 = s2(t3), i3 = n2(e3);
      if (e3 !== i3) throw new r2("Wrong length or index");
      return i3;
    };
  }, 7740: (t2, e2, i2) => {
    var s2 = i2(9297), n2 = i2(5031), r2 = i2(7347), a2 = i2(4913);
    t2.exports = function(t3, e3, i3) {
      for (var o2 = n2(e3), l2 = a2.f, h2 = r2.f, c2 = 0; c2 < o2.length; c2++) {
        var d2 = o2[c2];
        s2(t3, d2) || i3 && s2(i3, d2) || l2(t3, d2, h2(e3, d2));
      }
    };
  }, 7750: (t2, e2, i2) => {
    var s2 = i2(4117), n2 = TypeError;
    t2.exports = function(t3) {
      if (s2(t3)) throw new n2("Can't call method on " + t3);
      return t3;
    };
  }, 7751: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(4901);
    t2.exports = function(t3, e3) {
      return arguments.length < 2 ? (i3 = s2[t3], n2(i3) ? i3 : void 0) : s2[t3] && s2[t3][e3];
      var i3;
    };
  }, 7811: (t2) => {
    t2.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
  }, 7936: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(5636);
    n2 && s2({ target: "ArrayBuffer", proto: true }, { transferToFixedLength: function() {
      return n2(this, arguments.length ? arguments[0] : void 0, false);
    } });
  }, 8004: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9039), r2 = i2(8750);
    s2({ target: "Set", proto: true, real: true, forced: !i2(4916)("intersection", function(t3) {
      return 2 === t3.size && t3.has(1) && t3.has(2);
    }) || n2(function() {
      return "3,2" !== String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2]))));
    }) }, { intersection: r2 });
  }, 8014: (t2, e2, i2) => {
    var s2 = i2(1291), n2 = Math.min;
    t2.exports = function(t3) {
      var e3 = s2(t3);
      return e3 > 0 ? n2(e3, 9007199254740991) : 0;
    };
  }, 8100: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(5636);
    n2 && s2({ target: "ArrayBuffer", proto: true }, { transfer: function() {
      return n2(this, arguments.length ? arguments[0] : void 0, true);
    } });
  }, 8111: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(679), a2 = i2(8551), o2 = i2(4901), l2 = i2(2787), h2 = i2(2106), c2 = i2(4659), d2 = i2(9039), u2 = i2(9297), p2 = i2(8227), g2 = i2(7657).IteratorPrototype, m2 = i2(3724), f2 = i2(6395), b2 = "constructor", v2 = "Iterator", y2 = p2("toStringTag"), w2 = TypeError, x2 = n2[v2], A2 = f2 || !o2(x2) || x2.prototype !== g2 || !d2(function() {
      x2({});
    }), _2 = function() {
      if (r2(this, g2), l2(this) === g2) throw new w2("Abstract class Iterator not directly constructable");
    }, S2 = function(t3, e3) {
      m2 ? h2(g2, t3, { configurable: true, get: function() {
        return e3;
      }, set: function(e4) {
        if (a2(this), this === g2) throw new w2("You can't redefine this property");
        u2(this, t3) ? this[t3] = e4 : c2(this, t3, e4);
      } }) : g2[t3] = e3;
    };
    u2(g2, y2) || S2(y2, v2), !A2 && u2(g2, b2) && g2[b2] !== Object || S2(b2, _2), _2.prototype = g2, s2({ global: true, constructor: true, forced: A2 }, { Iterator: _2 });
  }, 8227: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(5745), r2 = i2(9297), a2 = i2(3392), o2 = i2(4495), l2 = i2(7040), h2 = s2.Symbol, c2 = n2("wks"), d2 = l2 ? h2.for || h2 : h2 && h2.withoutSetter || a2;
    t2.exports = function(t3) {
      return r2(c2, t3) || (c2[t3] = o2 && r2(h2, t3) ? h2[t3] : d2("Symbol." + t3)), c2[t3];
    };
  }, 8235: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = i2(9297), r2 = SyntaxError, a2 = parseInt, o2 = String.fromCharCode, l2 = s2("".charAt), h2 = s2("".slice), c2 = s2(/./.exec), d2 = { '\\"': '"', "\\\\": "\\", "\\/": "/", "\\b": "\b", "\\f": "\f", "\\n": "\n", "\\r": "\r", "\\t": "	" }, u2 = /^[\da-f]{4}$/i, p2 = /^[\u0000-\u001F]$/;
    t2.exports = function(t3, e3) {
      for (var i3 = true, s3 = ""; e3 < t3.length; ) {
        var g2 = l2(t3, e3);
        if ("\\" === g2) {
          var m2 = h2(t3, e3, e3 + 2);
          if (n2(d2, m2)) s3 += d2[m2], e3 += 2;
          else {
            if ("\\u" !== m2) throw new r2('Unknown escape sequence: "' + m2 + '"');
            var f2 = h2(t3, e3 += 2, e3 + 4);
            if (!c2(u2, f2)) throw new r2("Bad Unicode escape at: " + e3);
            s3 += o2(a2(f2, 16)), e3 += 4;
          }
        } else {
          if ('"' === g2) {
            i3 = false, e3++;
            break;
          }
          if (c2(p2, g2)) throw new r2("Bad control character in string literal at: " + e3);
          s3 += g2, e3++;
        }
      }
      if (i3) throw new r2("Unterminated string at: " + e3);
      return { value: s3, end: e3 };
    };
  }, 8237: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(2652), r2 = i2(9306), a2 = i2(8551), o2 = i2(1767), l2 = i2(9539), h2 = i2(4549), c2 = i2(8745), d2 = i2(9039), u2 = TypeError, p2 = d2(function() {
      [].keys().reduce(function() {
      }, void 0);
    }), g2 = !p2 && h2("reduce", u2);
    s2({ target: "Iterator", proto: true, real: true, forced: p2 || g2 }, { reduce: function(t3) {
      a2(this);
      try {
        r2(t3);
      } catch (t4) {
        l2(this, "throw", t4);
      }
      var e3 = arguments.length < 2, i3 = e3 ? void 0 : arguments[1];
      if (g2) return c2(g2, this, e3 ? [t3] : [t3, i3]);
      var s3 = o2(this), h3 = 0;
      if (n2(s3, function(s4) {
        e3 ? (e3 = false, i3 = s4) : i3 = t3(i3, s4, h3), h3++;
      }, { IS_RECORD: true }), e3) throw new u2("Reduce of empty iterator with no initial value");
      return i3;
    } });
  }, 8335: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(3724), r2 = i2(4576), a2 = i2(7751), o2 = i2(9504), l2 = i2(9565), h2 = i2(4901), c2 = i2(34), d2 = i2(4376), u2 = i2(9297), p2 = i2(655), g2 = i2(6198), m2 = i2(4659), f2 = i2(9039), b2 = i2(8235), v2 = i2(4495), y2 = r2.JSON, w2 = r2.Number, x2 = r2.SyntaxError, A2 = y2 && y2.parse, _2 = a2("Object", "keys"), S2 = Object.getOwnPropertyDescriptor, E2 = o2("".charAt), C2 = o2("".slice), T2 = o2(/./.exec), M2 = o2([].push), k2 = /^\d$/, D2 = /^[1-9]$/, P2 = /^[\d-]$/, I2 = /^[\t\n\r ]$/, R2 = function(t3, e3, i3, s3) {
      var n3, r3, a3, o3, h3, p3 = t3[e3], m3 = s3 && p3 === s3.value, f3 = m3 && "string" == typeof s3.source ? { source: s3.source } : {};
      if (c2(p3)) {
        var b3 = d2(p3), v3 = m3 ? s3.nodes : b3 ? [] : {};
        if (b3) for (n3 = v3.length, a3 = g2(p3), o3 = 0; o3 < a3; o3++) L2(p3, o3, R2(p3, "" + o3, i3, o3 < n3 ? v3[o3] : void 0));
        else for (r3 = _2(p3), a3 = g2(r3), o3 = 0; o3 < a3; o3++) h3 = r3[o3], L2(p3, h3, R2(p3, h3, i3, u2(v3, h3) ? v3[h3] : void 0));
      }
      return l2(i3, t3, e3, p3, f3);
    }, L2 = function(t3, e3, i3) {
      if (n2) {
        var s3 = S2(t3, e3);
        if (s3 && !s3.configurable) return;
      }
      void 0 === i3 ? delete t3[e3] : m2(t3, e3, i3);
    }, B2 = function(t3, e3, i3, s3) {
      this.value = t3, this.end = e3, this.source = i3, this.nodes = s3;
    }, F2 = function(t3, e3) {
      this.source = t3, this.index = e3;
    };
    F2.prototype = { fork: function(t3) {
      return new F2(this.source, t3);
    }, parse: function() {
      var t3 = this.source, e3 = this.skip(I2, this.index), i3 = this.fork(e3), s3 = E2(t3, e3);
      if (T2(P2, s3)) return i3.number();
      switch (s3) {
        case "{":
          return i3.object();
        case "[":
          return i3.array();
        case '"':
          return i3.string();
        case "t":
          return i3.keyword(true);
        case "f":
          return i3.keyword(false);
        case "n":
          return i3.keyword(null);
      }
      throw new x2('Unexpected character: "' + s3 + '" at: ' + e3);
    }, node: function(t3, e3, i3, s3, n3) {
      return new B2(e3, s3, t3 ? null : C2(this.source, i3, s3), n3);
    }, object: function() {
      for (var t3 = this.source, e3 = this.index + 1, i3 = false, s3 = {}, n3 = {}; e3 < t3.length; ) {
        if (e3 = this.until(['"', "}"], e3), "}" === E2(t3, e3) && !i3) {
          e3++;
          break;
        }
        var r3 = this.fork(e3).string(), a3 = r3.value;
        e3 = r3.end, e3 = this.until([":"], e3) + 1, e3 = this.skip(I2, e3), r3 = this.fork(e3).parse(), m2(n3, a3, r3), m2(s3, a3, r3.value), e3 = this.until([",", "}"], r3.end);
        var o3 = E2(t3, e3);
        if ("," === o3) i3 = true, e3++;
        else if ("}" === o3) {
          e3++;
          break;
        }
      }
      return this.node(1, s3, this.index, e3, n3);
    }, array: function() {
      for (var t3 = this.source, e3 = this.index + 1, i3 = false, s3 = [], n3 = []; e3 < t3.length; ) {
        if (e3 = this.skip(I2, e3), "]" === E2(t3, e3) && !i3) {
          e3++;
          break;
        }
        var r3 = this.fork(e3).parse();
        if (M2(n3, r3), M2(s3, r3.value), e3 = this.until([",", "]"], r3.end), "," === E2(t3, e3)) i3 = true, e3++;
        else if ("]" === E2(t3, e3)) {
          e3++;
          break;
        }
      }
      return this.node(1, s3, this.index, e3, n3);
    }, string: function() {
      var t3 = this.index, e3 = b2(this.source, this.index + 1);
      return this.node(0, e3.value, t3, e3.end);
    }, number: function() {
      var t3 = this.source, e3 = this.index, i3 = e3;
      if ("-" === E2(t3, i3) && i3++, "0" === E2(t3, i3)) i3++;
      else {
        if (!T2(D2, E2(t3, i3))) throw new x2("Failed to parse number at: " + i3);
        i3 = this.skip(k2, i3 + 1);
      }
      if (!("." === E2(t3, i3) && (i3 = this.skip(k2, i3 + 1)), "e" !== E2(t3, i3) && "E" !== E2(t3, i3) || (i3++, "+" !== E2(t3, i3) && "-" !== E2(t3, i3) || i3++, i3 !== (i3 = this.skip(k2, i3))))) throw new x2("Failed to parse number's exponent value at: " + i3);
      return this.node(0, w2(C2(t3, e3, i3)), e3, i3);
    }, keyword: function(t3) {
      var e3 = "" + t3, i3 = this.index, s3 = i3 + e3.length;
      if (C2(this.source, i3, s3) !== e3) throw new x2("Failed to parse value at: " + i3);
      return this.node(0, t3, i3, s3);
    }, skip: function(t3, e3) {
      for (var i3 = this.source; e3 < i3.length && T2(t3, E2(i3, e3)); e3++) ;
      return e3;
    }, until: function(t3, e3) {
      e3 = this.skip(I2, e3);
      for (var i3 = E2(this.source, e3), s3 = 0; s3 < t3.length; s3++) if (t3[s3] === i3) return e3;
      throw new x2('Unexpected character: "' + i3 + '" at: ' + e3);
    } };
    var O2 = f2(function() {
      var t3, e3 = "9007199254740993";
      return A2(e3, function(e4, i3, s3) {
        t3 = s3.source;
      }), t3 !== e3;
    }), N2 = v2 && !f2(function() {
      return 1 / A2("-0 	") != -1 / 0;
    });
    s2({ target: "JSON", stat: true, forced: O2 }, { parse: function(t3, e3) {
      return N2 && !h2(e3) ? A2(t3) : (function(t4, e4) {
        t4 = p2(t4);
        var i3 = new F2(t4, 0, ""), s3 = i3.parse(), n3 = s3.value, r3 = i3.skip(I2, s3.end);
        if (r3 < t4.length) throw new x2('Unexpected extra character: "' + E2(t4, r3) + '" after the parsed data at: ' + r3);
        return h2(e4) ? R2({ "": n3 }, "", e4, s3) : n3;
      })(t3, e3);
    } });
  }, 8469: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = i2(507), r2 = i2(4402), a2 = r2.Set, o2 = r2.proto, l2 = s2(o2.forEach), h2 = s2(o2.keys), c2 = h2(new a2()).next;
    t2.exports = function(t3, e3, i3) {
      return i3 ? n2({ iterator: h2(t3), next: c2 }, e3) : l2(t3, e3);
    };
  }, 8480: (t2, e2, i2) => {
    var s2 = i2(1828), n2 = i2(8727).concat("length", "prototype");
    e2.f = Object.getOwnPropertyNames || function(t3) {
      return s2(t3, n2);
    };
  }, 8527: (t2, e2, i2) => {
    var s2 = i2(7080), n2 = i2(4402).has, r2 = i2(5170), a2 = i2(3789), o2 = i2(507), l2 = i2(9539);
    t2.exports = function(t3) {
      var e3 = s2(this), i3 = a2(t3);
      if (r2(e3) < i3.size) return false;
      var h2 = i3.getIterator();
      return false !== o2(h2, function(t4) {
        if (!n2(e3, t4)) return l2(h2, "normal", false);
      });
    };
  }, 8551: (t2, e2, i2) => {
    var s2 = i2(34), n2 = String, r2 = TypeError;
    t2.exports = function(t3) {
      if (s2(t3)) return t3;
      throw new r2(n2(t3) + " is not an object");
    };
  }, 8574: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = Error, r2 = s2("".replace), a2 = String(new n2("zxcasd").stack), o2 = /\n\s*at [^:]*:[^\n]*/, l2 = o2.test(a2);
    t2.exports = function(t3, e3) {
      if (l2 && "string" == typeof t3 && !n2.prepareStackTrace) for (; e3--; ) t3 = r2(t3, o2, "");
      return t3;
    };
  }, 8622: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(4901), r2 = s2.WeakMap;
    t2.exports = n2(r2) && /native code/.test(String(r2));
  }, 8646: (t2, e2, i2) => {
    var s2 = i2(9565), n2 = i2(8551), r2 = i2(1767), a2 = i2(851);
    t2.exports = function(t3, e3) {
      e3 && "string" == typeof t3 || n2(t3);
      var i3 = a2(t3);
      return r2(n2(void 0 !== i3 ? s2(i3, t3) : t3));
    };
  }, 8686: (t2, e2, i2) => {
    var s2 = i2(3724), n2 = i2(9039);
    t2.exports = s2 && n2(function() {
      return 42 !== Object.defineProperty(function() {
      }, "prototype", { value: 42, writable: false }).prototype;
    });
  }, 8721: (t2, e2, i2) => {
    var s2 = i2(3724), n2 = i2(9504), r2 = i2(2106), a2 = URLSearchParams.prototype, o2 = n2(a2.forEach);
    s2 && !("size" in a2) && r2(a2, "size", { get: function() {
      var t3 = 0;
      return o2(this, function() {
        t3++;
      }), t3;
    }, configurable: true, enumerable: true });
  }, 8727: (t2) => {
    t2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }, 8745: (t2, e2, i2) => {
    var s2 = i2(616), n2 = Function.prototype, r2 = n2.apply, a2 = n2.call;
    t2.exports = "object" == typeof Reflect && Reflect.apply || (s2 ? a2.bind(r2) : function() {
      return a2.apply(r2, arguments);
    });
  }, 8750: (t2, e2, i2) => {
    var s2 = i2(7080), n2 = i2(4402), r2 = i2(5170), a2 = i2(3789), o2 = i2(8469), l2 = i2(507), h2 = n2.Set, c2 = n2.add, d2 = n2.has;
    t2.exports = function(t3) {
      var e3 = s2(this), i3 = a2(t3), n3 = new h2();
      return r2(e3) > i3.size ? l2(i3.getIterator(), function(t4) {
        d2(e3, t4) && c2(n3, t4);
      }) : o2(e3, function(t4) {
        i3.includes(t4) && c2(n3, t4);
      }), n3;
    };
  }, 8773: (t2, e2) => {
    var i2 = {}.propertyIsEnumerable, s2 = Object.getOwnPropertyDescriptor, n2 = s2 && !i2.call({ 1: 2 }, 1);
    e2.f = n2 ? function(t3) {
      var e3 = s2(this, t3);
      return !!e3 && e3.enumerable;
    } : i2;
  }, 8981: (t2, e2, i2) => {
    var s2 = i2(7750), n2 = Object;
    t2.exports = function(t3) {
      return n2(s2(t3));
    };
  }, 9039: (t2) => {
    t2.exports = function(t3) {
      try {
        return !!t3();
      } catch (t4) {
        return true;
      }
    };
  }, 9143: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(9504), r2 = i2(3972), a2 = i2(3463), o2 = i2(9297), l2 = i2(2804), h2 = i2(944), c2 = i2(5169), d2 = l2.c2i, u2 = l2.c2iUrl, p2 = s2.SyntaxError, g2 = s2.TypeError, m2 = n2("".charAt), f2 = function(t3, e3) {
      for (var i3 = t3.length; e3 < i3; e3++) {
        var s3 = m2(t3, e3);
        if (" " !== s3 && "	" !== s3 && "\n" !== s3 && "\f" !== s3 && "\r" !== s3) break;
      }
      return e3;
    }, b2 = function(t3, e3, i3) {
      var s3 = t3.length;
      s3 < 4 && (t3 += 2 === s3 ? "AA" : "A");
      var n3 = (e3[m2(t3, 0)] << 18) + (e3[m2(t3, 1)] << 12) + (e3[m2(t3, 2)] << 6) + e3[m2(t3, 3)], r3 = [n3 >> 16 & 255, n3 >> 8 & 255, 255 & n3];
      if (2 === s3) {
        if (i3 && 0 !== r3[1]) throw new p2("Extra bits");
        return [r3[0]];
      }
      if (3 === s3) {
        if (i3 && 0 !== r3[2]) throw new p2("Extra bits");
        return [r3[0], r3[1]];
      }
      return r3;
    }, v2 = function(t3, e3, i3) {
      for (var s3 = e3.length, n3 = 0; n3 < s3; n3++) t3[i3 + n3] = e3[n3];
      return i3 + s3;
    };
    t2.exports = function(t3, e3, i3, s3) {
      a2(t3), r2(e3);
      var n3 = "base64" === h2(e3) ? d2 : u2, l3 = e3 ? e3.lastChunkHandling : void 0;
      if (void 0 === l3 && (l3 = "loose"), "loose" !== l3 && "strict" !== l3 && "stop-before-partial" !== l3) throw new g2("Incorrect `lastChunkHandling` option");
      i3 && c2(i3.buffer);
      var y2 = t3.length, w2 = i3 || [], x2 = 0, A2 = 0, _2 = "", S2 = 0;
      if (s3) for (; ; ) {
        if ((S2 = f2(t3, S2)) === y2) {
          if (_2.length > 0) {
            if ("stop-before-partial" === l3) break;
            if ("loose" !== l3) throw new p2("Missing padding");
            if (1 === _2.length) throw new p2("Malformed padding: exactly one additional character");
            x2 = v2(w2, b2(_2, n3, false), x2);
          }
          A2 = y2;
          break;
        }
        var E2 = m2(t3, S2);
        if (++S2, "=" === E2) {
          if (_2.length < 2) throw new p2("Padding is too early");
          if (S2 = f2(t3, S2), 2 === _2.length) {
            if (S2 === y2) {
              if ("stop-before-partial" === l3) break;
              throw new p2("Malformed padding: only one =");
            }
            "=" === m2(t3, S2) && (++S2, S2 = f2(t3, S2));
          }
          if (S2 < y2) throw new p2("Unexpected character after padding");
          x2 = v2(w2, b2(_2, n3, "strict" === l3), x2), A2 = y2;
          break;
        }
        if (!o2(n3, E2)) throw new p2("Unexpected character");
        var C2 = s3 - x2;
        if (1 === C2 && 2 === _2.length || 2 === C2 && 3 === _2.length) break;
        if (4 === (_2 += E2).length && (x2 = v2(w2, b2(_2, n3, false), x2), _2 = "", A2 = S2, x2 === s3)) break;
      }
      return { bytes: w2, read: A2, written: x2 };
    };
  }, 9286: (t2, e2, i2) => {
    var s2 = i2(4402), n2 = i2(8469), r2 = s2.Set, a2 = s2.add;
    t2.exports = function(t3) {
      var e3 = new r2();
      return n2(t3, function(t4) {
        a2(e3, t4);
      }), e3;
    };
  }, 9297: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = i2(8981), r2 = s2({}.hasOwnProperty);
    t2.exports = Object.hasOwn || function(t3, e3) {
      return r2(n2(t3), e3);
    };
  }, 9306: (t2, e2, i2) => {
    var s2 = i2(4901), n2 = i2(6823), r2 = TypeError;
    t2.exports = function(t3) {
      if (s2(t3)) return t3;
      throw new r2(n2(t3) + " is not a function");
    };
  }, 9314: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9565), r2 = i2(8551), a2 = i2(1767), o2 = i2(4149), l2 = i2(9590), h2 = i2(9539), c2 = i2(9462), d2 = i2(684), u2 = i2(4549), p2 = i2(6395), g2 = !p2 && !d2("drop", 0), m2 = !p2 && !g2 && u2("drop", RangeError), f2 = p2 || g2 || m2, b2 = c2(function() {
      for (var t3, e3 = this.iterator, i3 = this.next; this.remaining; ) if (this.remaining--, t3 = r2(n2(i3, e3)), this.done = !!t3.done) return;
      if (t3 = r2(n2(i3, e3)), !(this.done = !!t3.done)) return t3.value;
    });
    s2({ target: "Iterator", proto: true, real: true, forced: f2 }, { drop: function(t3) {
      var e3;
      r2(this);
      try {
        e3 = l2(o2(+t3));
      } catch (t4) {
        h2(this, "throw", t4);
      }
      return m2 ? n2(m2, this, e3) : new b2(a2(this), { remaining: e3 });
    } });
  }, 9429: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(6193);
    t2.exports = function(t3) {
      if (n2) {
        try {
          return s2.process.getBuiltinModule(t3);
        } catch (t4) {
        }
        try {
          return Function('return require("' + t3 + '")')();
        } catch (t4) {
        }
      }
    };
  }, 9432: (t2, e2, i2) => {
    i2(5213);
  }, 9433: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = Object.defineProperty;
    t2.exports = function(t3, e3) {
      try {
        n2(s2, t3, { value: e3, configurable: true, writable: true });
      } catch (i3) {
        s2[t3] = e3;
      }
      return e3;
    };
  }, 9462: (t2, e2, i2) => {
    var s2 = i2(9565), n2 = i2(2360), r2 = i2(6699), a2 = i2(6279), o2 = i2(8227), l2 = i2(1181), h2 = i2(5966), c2 = i2(7657).IteratorPrototype, d2 = i2(2529), u2 = i2(9539), p2 = i2(1385), g2 = o2("toStringTag"), m2 = "IteratorHelper", f2 = "WrapForValidIterator", b2 = "normal", v2 = "throw", y2 = l2.set, w2 = function(t3) {
      var e3 = l2.getterFor(t3 ? f2 : m2);
      return a2(n2(c2), { next: function() {
        var i3 = e3(this);
        if (t3) return i3.nextHandler();
        if (i3.done) return d2(void 0, true);
        try {
          var s3 = i3.nextHandler();
          return i3.returnHandlerResult ? s3 : d2(s3, i3.done);
        } catch (t4) {
          throw i3.done = true, t4;
        }
      }, return: function() {
        var i3 = e3(this), n3 = i3.iterator;
        if (i3.done = true, t3) {
          var r3 = h2(n3, "return");
          return r3 ? s2(r3, n3) : d2(void 0, true);
        }
        if (i3.inner) try {
          u2(i3.inner.iterator, b2);
        } catch (t4) {
          return u2(n3, v2, t4);
        }
        if (i3.openIters) try {
          p2(i3.openIters, b2);
        } catch (t4) {
          return u2(n3, v2, t4);
        }
        return n3 && u2(n3, b2), d2(void 0, true);
      } });
    }, x2 = w2(true), A2 = w2(false);
    r2(A2, g2, "Iterator Helper"), t2.exports = function(t3, e3, i3) {
      var s3 = function(s4, n3) {
        n3 ? (n3.iterator = s4.iterator, n3.next = s4.next) : n3 = s4, n3.type = e3 ? f2 : m2, n3.returnHandlerResult = !!i3, n3.nextHandler = t3, n3.counter = 0, n3.done = false, y2(this, n3);
      };
      return s3.prototype = e3 ? x2 : A2, s3;
    };
  }, 9486: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(9504), a2 = i2(3972), o2 = i2(4154), l2 = i2(5169), h2 = i2(2804), c2 = i2(944), d2 = h2.i2c, u2 = h2.i2cUrl, p2 = r2("".charAt), g2 = n2.Uint8Array, m2 = !g2 || !g2.prototype.toBase64 || !(function() {
      try {
        new g2().toBase64(null);
      } catch (t3) {
        return true;
      }
    })();
    g2 && s2({ target: "Uint8Array", proto: true, forced: m2 }, { toBase64: function() {
      var t3 = o2(this), e3 = arguments.length ? a2(arguments[0]) : void 0, i3 = "base64" === c2(e3) ? d2 : u2, s3 = !!e3 && !!e3.omitPadding;
      l2(this.buffer);
      for (var n3, r3 = "", h3 = 0, g3 = t3.length, m3 = function(t4) {
        return p2(i3, n3 >> 6 * t4 & 63);
      }; h3 + 2 < g3; h3 += 3) n3 = (t3[h3] << 16) + (t3[h3 + 1] << 8) + t3[h3 + 2], r3 += m3(3) + m3(2) + m3(1) + m3(0);
      return h3 + 2 === g3 ? (n3 = (t3[h3] << 16) + (t3[h3 + 1] << 8), r3 += m3(3) + m3(2) + m3(1) + (s3 ? "" : "=")) : h3 + 1 === g3 && (n3 = t3[h3] << 16, r3 += m3(3) + m3(2) + (s3 ? "" : "==")), r3;
    } });
  }, 9504: (t2, e2, i2) => {
    var s2 = i2(616), n2 = Function.prototype, r2 = n2.call, a2 = s2 && n2.bind.bind(r2, r2);
    t2.exports = s2 ? a2 : function(t3) {
      return function() {
        return r2.apply(t3, arguments);
      };
    };
  }, 9519: (t2, e2, i2) => {
    var s2, n2, r2 = i2(4576), a2 = i2(2839), o2 = r2.process, l2 = r2.Deno, h2 = o2 && o2.versions || l2 && l2.version, c2 = h2 && h2.v8;
    c2 && (n2 = (s2 = c2.split("."))[0] > 0 && s2[0] < 4 ? 1 : +(s2[0] + s2[1])), !n2 && a2 && (!(s2 = a2.match(/Edge\/(\d+)/)) || s2[1] >= 74) && (s2 = a2.match(/Chrome\/(\d+)/)) && (n2 = +s2[1]), t2.exports = n2;
  }, 9539: (t2, e2, i2) => {
    var s2 = i2(9565), n2 = i2(8551), r2 = i2(5966);
    t2.exports = function(t3, e3, i3) {
      var a2, o2;
      n2(t3);
      try {
        if (!(a2 = r2(t3, "return"))) {
          if ("throw" === e3) throw i3;
          return i3;
        }
        a2 = s2(a2, t3);
      } catch (t4) {
        o2 = true, a2 = t4;
      }
      if ("throw" === e3) throw i3;
      if (o2) throw a2;
      return n2(a2), i3;
    };
  }, 9565: (t2, e2, i2) => {
    var s2 = i2(616), n2 = Function.prototype.call;
    t2.exports = s2 ? n2.bind(n2) : function() {
      return n2.apply(n2, arguments);
    };
  }, 9577: (t2, e2, i2) => {
    var s2 = i2(9928), n2 = i2(4644), r2 = i2(1108), a2 = i2(1291), o2 = i2(5854), l2 = n2.aTypedArray, h2 = n2.getTypedArrayConstructor, c2 = n2.exportTypedArrayMethod, d2 = (function() {
      try {
        new Int8Array(1).with(2, { valueOf: function() {
          throw 8;
        } });
      } catch (t3) {
        return 8 === t3;
      }
    })(), u2 = d2 && (function() {
      try {
        new Int8Array(1).with(-0.5, 1);
      } catch (t3) {
        return true;
      }
    })();
    c2("with", { with: function(t3, e3) {
      var i3 = l2(this), n3 = a2(t3), c3 = r2(i3) ? o2(e3) : +e3;
      return s2(i3, h2(i3), n3, c3);
    } }.with, !d2 || u2);
  }, 9590: (t2, e2, i2) => {
    var s2 = i2(1291), n2 = RangeError;
    t2.exports = function(t3) {
      var e3 = s2(t3);
      if (e3 < 0) throw new n2("The argument can't be less than 0");
      return e3;
    };
  }, 9617: (t2, e2, i2) => {
    var s2 = i2(5397), n2 = i2(5610), r2 = i2(6198), a2 = function(t3) {
      return function(e3, i3, a3) {
        var o2 = s2(e3), l2 = r2(o2);
        if (0 === l2) return !t3 && -1;
        var h2, c2 = n2(a3, l2);
        if (t3 && i3 != i3) {
          for (; l2 > c2; ) if ((h2 = o2[c2++]) != h2) return true;
        } else for (; l2 > c2; c2++) if ((t3 || c2 in o2) && o2[c2] === i3) return t3 || c2 || 0;
        return !t3 && -1;
      };
    };
    t2.exports = { includes: a2(true), indexOf: a2(false) };
  }, 9631: (t2, e2, i2) => {
    i2(9486);
  }, 9797: (t2, e2, i2) => {
    i2(4226);
  }, 9835: (t2) => {
    t2.exports = function(t3) {
      try {
        var e2 = /* @__PURE__ */ new Set(), i2 = { size: 0, has: function() {
          return true;
        }, keys: function() {
          return Object.defineProperty({}, "next", { get: function() {
            return e2.clear(), e2.add(4), function() {
              return { done: true };
            };
          } });
        } }, s2 = e2[t3](i2);
        return 1 === s2.size && 4 === s2.values().next().value;
      } catch (t4) {
        return false;
      }
    };
  }, 9928: (t2, e2, i2) => {
    var s2 = i2(6198), n2 = i2(1291), r2 = RangeError;
    t2.exports = function(t3, e3, i3, a2) {
      var o2 = s2(t3), l2 = n2(i3), h2 = l2 < 0 ? o2 + l2 : l2;
      if (h2 >= o2 || h2 < 0) throw new r2("Incorrect index");
      for (var c2 = new e3(o2), d2 = 0; d2 < o2; d2++) c2[d2] = d2 === h2 ? a2 : t3[d2];
      return c2;
    };
  } }, n = {};
  function r(t2) {
    var e2 = n[t2];
    if (void 0 !== e2) return e2.exports;
    var i2 = n[t2] = { exports: {} };
    return s[t2].call(i2.exports, i2, i2.exports, r), i2.exports;
  }
  r.d = (t2, e2) => {
    for (var i2 in e2) r.o(e2, i2) && !r.o(t2, i2) && Object.defineProperty(t2, i2, { enumerable: true, get: e2[i2] });
  }, r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), e = {}, r(4114), r(6573), r(8100), r(7936), r(8111), r(8237), r(1689), r(9577), r(4235), r(9432), r(1549), r(9797), r(9631), r(5623), r(4979), r(5781);
  const a = !("object" != typeof process || process + "" != "[object process]" || process.versions.nw || process.versions.electron && process.type && "browser" !== process.type), o = [1e-3, 0, 0, 1e-3, 0, 0], l = 1.35, h = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 }, c = "pdfjs_internal_editor_", d = { DISABLE: -1, NONE: 0, FREETEXT: 3, HIGHLIGHT: 9, STAMP: 13, INK: 15, POPUP: 16, SIGNATURE: 101, COMMENT: 102 }, u = { RESIZE: 1, CREATE: 2, FREETEXT_SIZE: 11, FREETEXT_COLOR: 12, FREETEXT_OPACITY: 13, INK_COLOR: 21, INK_THICKNESS: 22, INK_OPACITY: 23, HIGHLIGHT_COLOR: 31, HIGHLIGHT_THICKNESS: 32, HIGHLIGHT_FREE: 33, HIGHLIGHT_SHOW_ALL: 34, DRAW_STEP: 41 }, p = { PRINT: 4, MODIFY_CONTENTS: 8, COPY: 16, MODIFY_ANNOTATIONS: 32, FILL_INTERACTIVE_FORMS: 256, COPY_FOR_ACCESSIBILITY: 512, ASSEMBLE: 1024, PRINT_HIGH_QUALITY: 2048 }, g = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 }, m = { TEXT: 1, LINK: 2, FREETEXT: 3, LINE: 4, SQUARE: 5, CIRCLE: 6, POLYGON: 7, POLYLINE: 8, HIGHLIGHT: 9, UNDERLINE: 10, SQUIGGLY: 11, STRIKEOUT: 12, STAMP: 13, CARET: 14, INK: 15, POPUP: 16, FILEATTACHMENT: 17, SOUND: 18, MOVIE: 19, WIDGET: 20, SCREEN: 21, PRINTERMARK: 22, TRAPNET: 23, WATERMARK: 24, THREED: 25, REDACT: 26 }, f = { ERRORS: 0, WARNINGS: 1, INFOS: 5 }, b = { dependency: 1, setLineWidth: 2, setLineCap: 3, setLineJoin: 4, setMiterLimit: 5, setDash: 6, setRenderingIntent: 7, setFlatness: 8, setGState: 9, save: 10, restore: 11, transform: 12, moveTo: 13, lineTo: 14, curveTo: 15, curveTo2: 16, curveTo3: 17, closePath: 18, rectangle: 19, stroke: 20, closeStroke: 21, fill: 22, eoFill: 23, fillStroke: 24, eoFillStroke: 25, closeFillStroke: 26, closeEOFillStroke: 27, endPath: 28, clip: 29, eoClip: 30, beginText: 31, endText: 32, setCharSpacing: 33, setWordSpacing: 34, setHScale: 35, setLeading: 36, setFont: 37, setTextRenderingMode: 38, setTextRise: 39, moveText: 40, setLeadingMoveText: 41, setTextMatrix: 42, nextLine: 43, showText: 44, showSpacedText: 45, nextLineShowText: 46, nextLineSetSpacingShowText: 47, setCharWidth: 48, setCharWidthAndBounds: 49, setStrokeColorSpace: 50, setFillColorSpace: 51, setStrokeColor: 52, setStrokeColorN: 53, setFillColor: 54, setFillColorN: 55, setStrokeGray: 56, setFillGray: 57, setStrokeRGBColor: 58, setFillRGBColor: 59, setStrokeCMYKColor: 60, setFillCMYKColor: 61, shadingFill: 62, beginInlineImage: 63, beginImageData: 64, endInlineImage: 65, paintXObject: 66, markPoint: 67, markPointProps: 68, beginMarkedContent: 69, beginMarkedContentProps: 70, endMarkedContent: 71, beginCompat: 72, endCompat: 73, paintFormXObjectBegin: 74, paintFormXObjectEnd: 75, beginGroup: 76, endGroup: 77, beginAnnotation: 80, endAnnotation: 81, paintImageMaskXObject: 83, paintImageMaskXObjectGroup: 84, paintImageXObject: 85, paintInlineImageXObject: 86, paintInlineImageXObjectGroup: 87, paintImageXObjectRepeat: 88, paintImageMaskXObjectRepeat: 89, paintSolidColorImageMask: 90, constructPath: 91, setStrokeTransparent: 92, setFillTransparent: 93, rawFillPath: 94 }, v = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
  let y = f.WARNINGS;
  function w(t2) {
    Number.isInteger(t2) && (y = t2);
  }
  function x() {
    return y;
  }
  function A(t2) {
    y >= f.INFOS && console.info(`Info: ${t2}`);
  }
  function _(t2) {
    y >= f.WARNINGS && console.warn(`Warning: ${t2}`);
  }
  function S(t2) {
    throw new Error(t2);
  }
  function E(t2, e2) {
    t2 || S(e2);
  }
  function C(t2, e2 = null, i2 = null) {
    if (!t2) return null;
    if (i2 && "string" == typeof t2) {
      if (i2.addDefaultProtocol && t2.startsWith("www.")) {
        const e3 = t2.match(/\./g);
        e3?.length >= 2 && (t2 = `http://${t2}`);
      }
      if (i2.tryConvertEncoding) try {
        t2 = decodeURIComponent(escape(t2));
      } catch {
      }
    }
    const s2 = e2 ? URL.parse(t2, e2) : URL.parse(t2);
    return (function(t3) {
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
  function T(t2, e2, i2 = false) {
    const s2 = URL.parse(t2);
    return s2 ? (s2.hash = e2, s2.href) : i2 && C(t2, "http://example.com") ? t2.split("#", 1)[0] + (e2 ? `#${e2}` : "") : "";
  }
  function M(t2, e2, i2, s2 = false) {
    return Object.defineProperty(t2, e2, { value: i2, enumerable: !s2, configurable: true, writable: false }), i2;
  }
  const k = (function() {
    function t2(t3, e2) {
      this.message = t3, this.name = e2;
    }
    return t2.prototype = new Error(), t2.constructor = t2, t2;
  })();
  class D extends k {
    constructor(t2, e2) {
      super(t2, "PasswordException"), this.code = e2;
    }
  }
  class P extends k {
    constructor(t2, e2) {
      super(t2, "UnknownErrorException"), this.details = e2;
    }
  }
  class I extends k {
    constructor(t2) {
      super(t2, "InvalidPDFException");
    }
  }
  class R extends k {
    constructor(t2, e2, i2) {
      super(t2, "ResponseException"), this.status = e2, this.missing = i2;
    }
  }
  class L extends k {
    constructor(t2) {
      super(t2, "FormatError");
    }
  }
  class B extends k {
    constructor(t2) {
      super(t2, "AbortException");
    }
  }
  function F(t2) {
    "object" == typeof t2 && void 0 !== t2?.length || S("Invalid argument for bytesToString");
    const e2 = t2.length, i2 = 8192;
    if (e2 < i2) return String.fromCharCode.apply(null, t2);
    const s2 = [];
    for (let n2 = 0; n2 < e2; n2 += i2) {
      const r2 = Math.min(n2 + i2, e2), a2 = t2.subarray(n2, r2);
      s2.push(String.fromCharCode.apply(null, a2));
    }
    return s2.join("");
  }
  function O(t2) {
    "string" != typeof t2 && S("Invalid argument for stringToBytes");
    const e2 = t2.length, i2 = new Uint8Array(e2);
    for (let s2 = 0; s2 < e2; ++s2) i2[s2] = 255 & t2.charCodeAt(s2);
    return i2;
  }
  class N {
    static get isLittleEndian() {
      return M(this, "isLittleEndian", (function() {
        const t2 = new Uint8Array(4);
        return t2[0] = 1, 1 === new Uint32Array(t2.buffer, 0, 1)[0];
      })());
    }
    static get isEvalSupported() {
      return M(this, "isEvalSupported", (function() {
        try {
          return new Function(""), true;
        } catch {
          return false;
        }
      })());
    }
    static get isOffscreenCanvasSupported() {
      return M(this, "isOffscreenCanvasSupported", "undefined" != typeof OffscreenCanvas);
    }
    static get isImageDecoderSupported() {
      return M(this, "isImageDecoderSupported", "undefined" != typeof ImageDecoder);
    }
    static get platform() {
      const { platform: t2, userAgent: e2 } = navigator;
      return M(this, "platform", { isAndroid: e2.includes("Android"), isLinux: t2.includes("Linux"), isMac: t2.includes("Mac"), isWindows: t2.includes("Win"), isFirefox: e2.includes("Firefox") });
    }
    static get isCSSRoundSupported() {
      return M(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
    }
  }
  const U = Array.from(Array(256).keys(), (t2) => t2.toString(16).padStart(2, "0"));
  class z {
    static makeHexColor(t2, e2, i2) {
      return `#${U[t2]}${U[e2]}${U[i2]}`;
    }
    static domMatrixToTransform(t2) {
      return [t2.a, t2.b, t2.c, t2.d, t2.e, t2.f];
    }
    static scaleMinMax(t2, e2) {
      let i2;
      t2[0] ? (t2[0] < 0 && (i2 = e2[0], e2[0] = e2[2], e2[2] = i2), e2[0] *= t2[0], e2[2] *= t2[0], t2[3] < 0 && (i2 = e2[1], e2[1] = e2[3], e2[3] = i2), e2[1] *= t2[3], e2[3] *= t2[3]) : (i2 = e2[0], e2[0] = e2[1], e2[1] = i2, i2 = e2[2], e2[2] = e2[3], e2[3] = i2, t2[1] < 0 && (i2 = e2[1], e2[1] = e2[3], e2[3] = i2), e2[1] *= t2[1], e2[3] *= t2[1], t2[2] < 0 && (i2 = e2[0], e2[0] = e2[2], e2[2] = i2), e2[0] *= t2[2], e2[2] *= t2[2]), e2[0] += t2[4], e2[1] += t2[5], e2[2] += t2[4], e2[3] += t2[5];
    }
    static transform(t2, e2) {
      return [t2[0] * e2[0] + t2[2] * e2[1], t2[1] * e2[0] + t2[3] * e2[1], t2[0] * e2[2] + t2[2] * e2[3], t2[1] * e2[2] + t2[3] * e2[3], t2[0] * e2[4] + t2[2] * e2[5] + t2[4], t2[1] * e2[4] + t2[3] * e2[5] + t2[5]];
    }
    static multiplyByDOMMatrix(t2, e2) {
      return [t2[0] * e2.a + t2[2] * e2.b, t2[1] * e2.a + t2[3] * e2.b, t2[0] * e2.c + t2[2] * e2.d, t2[1] * e2.c + t2[3] * e2.d, t2[0] * e2.e + t2[2] * e2.f + t2[4], t2[1] * e2.e + t2[3] * e2.f + t2[5]];
    }
    static applyTransform(t2, e2, i2 = 0) {
      const s2 = t2[i2], n2 = t2[i2 + 1];
      t2[i2] = s2 * e2[0] + n2 * e2[2] + e2[4], t2[i2 + 1] = s2 * e2[1] + n2 * e2[3] + e2[5];
    }
    static applyTransformToBezier(t2, e2, i2 = 0) {
      const s2 = e2[0], n2 = e2[1], r2 = e2[2], a2 = e2[3], o2 = e2[4], l2 = e2[5];
      for (let e3 = 0; e3 < 6; e3 += 2) {
        const h2 = t2[i2 + e3], c2 = t2[i2 + e3 + 1];
        t2[i2 + e3] = h2 * s2 + c2 * r2 + o2, t2[i2 + e3 + 1] = h2 * n2 + c2 * a2 + l2;
      }
    }
    static applyInverseTransform(t2, e2) {
      const i2 = t2[0], s2 = t2[1], n2 = e2[0] * e2[3] - e2[1] * e2[2];
      t2[0] = (i2 * e2[3] - s2 * e2[2] + e2[2] * e2[5] - e2[4] * e2[3]) / n2, t2[1] = (-i2 * e2[1] + s2 * e2[0] + e2[4] * e2[1] - e2[5] * e2[0]) / n2;
    }
    static axialAlignedBoundingBox(t2, e2, i2) {
      const s2 = e2[0], n2 = e2[1], r2 = e2[2], a2 = e2[3], o2 = e2[4], l2 = e2[5], h2 = t2[0], c2 = t2[1], d2 = t2[2], u2 = t2[3];
      let p2 = s2 * h2 + o2, g2 = p2, m2 = s2 * d2 + o2, f2 = m2, b2 = a2 * c2 + l2, v2 = b2, y2 = a2 * u2 + l2, w2 = y2;
      if (0 !== n2 || 0 !== r2) {
        const t3 = n2 * h2, e3 = n2 * d2, i3 = r2 * c2, s3 = r2 * u2;
        p2 += i3, f2 += i3, m2 += s3, g2 += s3, b2 += t3, w2 += t3, y2 += e3, v2 += e3;
      }
      i2[0] = Math.min(i2[0], p2, m2, g2, f2), i2[1] = Math.min(i2[1], b2, y2, v2, w2), i2[2] = Math.max(i2[2], p2, m2, g2, f2), i2[3] = Math.max(i2[3], b2, y2, v2, w2);
    }
    static inverseTransform(t2) {
      const e2 = t2[0] * t2[3] - t2[1] * t2[2];
      return [t2[3] / e2, -t2[1] / e2, -t2[2] / e2, t2[0] / e2, (t2[2] * t2[5] - t2[4] * t2[3]) / e2, (t2[4] * t2[1] - t2[5] * t2[0]) / e2];
    }
    static singularValueDecompose2dScale(t2, e2) {
      const i2 = t2[0], s2 = t2[1], n2 = t2[2], r2 = t2[3], a2 = i2 ** 2 + s2 ** 2, o2 = i2 * n2 + s2 * r2, l2 = n2 ** 2 + r2 ** 2, h2 = (a2 + l2) / 2, c2 = Math.sqrt(h2 ** 2 - (a2 * l2 - o2 ** 2));
      e2[0] = Math.sqrt(h2 + c2 || 1), e2[1] = Math.sqrt(h2 - c2 || 1);
    }
    static normalizeRect(t2) {
      const e2 = t2.slice(0);
      return t2[0] > t2[2] && (e2[0] = t2[2], e2[2] = t2[0]), t2[1] > t2[3] && (e2[1] = t2[3], e2[3] = t2[1]), e2;
    }
    static intersect(t2, e2) {
      const i2 = Math.max(Math.min(t2[0], t2[2]), Math.min(e2[0], e2[2])), s2 = Math.min(Math.max(t2[0], t2[2]), Math.max(e2[0], e2[2]));
      if (i2 > s2) return null;
      const n2 = Math.max(Math.min(t2[1], t2[3]), Math.min(e2[1], e2[3])), r2 = Math.min(Math.max(t2[1], t2[3]), Math.max(e2[1], e2[3]));
      return n2 > r2 ? null : [i2, n2, s2, r2];
    }
    static pointBoundingBox(t2, e2, i2) {
      i2[0] = Math.min(i2[0], t2), i2[1] = Math.min(i2[1], e2), i2[2] = Math.max(i2[2], t2), i2[3] = Math.max(i2[3], e2);
    }
    static rectBoundingBox(t2, e2, i2, s2, n2) {
      n2[0] = Math.min(n2[0], t2, i2), n2[1] = Math.min(n2[1], e2, s2), n2[2] = Math.max(n2[2], t2, i2), n2[3] = Math.max(n2[3], e2, s2);
    }
    static #t(t2, e2, i2, s2, n2, r2, a2, o2, l2, h2) {
      if (l2 <= 0 || l2 >= 1) return;
      const c2 = 1 - l2, d2 = l2 * l2, u2 = d2 * l2, p2 = c2 * (c2 * (c2 * t2 + 3 * l2 * e2) + 3 * d2 * i2) + u2 * s2, g2 = c2 * (c2 * (c2 * n2 + 3 * l2 * r2) + 3 * d2 * a2) + u2 * o2;
      h2[0] = Math.min(h2[0], p2), h2[1] = Math.min(h2[1], g2), h2[2] = Math.max(h2[2], p2), h2[3] = Math.max(h2[3], g2);
    }
    static #e(t2, e2, i2, s2, n2, r2, a2, o2, l2, h2, c2, d2) {
      if (Math.abs(l2) < 1e-12) return void (Math.abs(h2) >= 1e-12 && this.#t(t2, e2, i2, s2, n2, r2, a2, o2, -c2 / h2, d2));
      const u2 = h2 ** 2 - 4 * c2 * l2;
      if (u2 < 0) return;
      const p2 = Math.sqrt(u2), g2 = 2 * l2;
      this.#t(t2, e2, i2, s2, n2, r2, a2, o2, (-h2 + p2) / g2, d2), this.#t(t2, e2, i2, s2, n2, r2, a2, o2, (-h2 - p2) / g2, d2);
    }
    static bezierBoundingBox(t2, e2, i2, s2, n2, r2, a2, o2, l2) {
      l2[0] = Math.min(l2[0], t2, a2), l2[1] = Math.min(l2[1], e2, o2), l2[2] = Math.max(l2[2], t2, a2), l2[3] = Math.max(l2[3], e2, o2), this.#e(t2, i2, n2, a2, e2, s2, r2, o2, 3 * (3 * (i2 - n2) - t2 + a2), 6 * (t2 - 2 * i2 + n2), 3 * (i2 - t2), l2), this.#e(t2, i2, n2, a2, e2, s2, r2, o2, 3 * (3 * (s2 - r2) - e2 + o2), 6 * (e2 - 2 * s2 + r2), 3 * (s2 - e2), l2);
    }
  }
  let H = null, j = null;
  function $(t2) {
    return H || (H = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, j = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), t2.replaceAll(H, (t3, e2, i2) => e2 ? e2.normalize("NFKC") : j.get(i2));
  }
  function V() {
    if ("function" == typeof crypto.randomUUID) return crypto.randomUUID();
    const t2 = new Uint8Array(32);
    return crypto.getRandomValues(t2), F(t2);
  }
  const G = "pdfjs_internal_id_";
  function W(t2, e2, i2) {
    return Math.min(Math.max(t2, e2), i2);
  }
  function q(t2) {
    return Uint8Array.prototype.toBase64 ? t2.toBase64() : btoa(F(t2));
  }
  "function" != typeof Math.sumPrecise && (Math.sumPrecise = function(t2) {
    return t2.reduce((t3, e2) => t3 + e2, 0);
  }), "function" != typeof AbortSignal.any && (AbortSignal.any = function(t2) {
    const e2 = new AbortController(), { signal: i2 } = e2;
    for (const s2 of t2) if (s2.aborted) return e2.abort(s2.reason), i2;
    for (const s2 of t2) s2.addEventListener("abort", () => {
      e2.abort(s2.reason);
    }, { signal: i2 });
    return i2;
  }), r(1701), r(4603), r(7566), r(8721);
  class X {
    static textContent(t2) {
      const e2 = [], i2 = { items: e2, styles: /* @__PURE__ */ Object.create(null) };
      return (function t3(i3) {
        if (!i3) return;
        let s2 = null;
        const n2 = i3.name;
        if ("#text" === n2) s2 = i3.value;
        else {
          if (!X.shouldBuildText(n2)) return;
          i3?.attributes?.textContent ? s2 = i3.attributes.textContent : i3.value && (s2 = i3.value);
        }
        if (null !== s2 && e2.push({ str: s2 }), i3.children) for (const e3 of i3.children) t3(e3);
      })(t2), i2;
    }
    static shouldBuildText(t2) {
      return !("textarea" === t2 || "input" === t2 || "option" === t2 || "select" === t2);
    }
  }
  class Y {
    static setupStorage(t2, e2, i2, s2, n2) {
      const r2 = s2.getValue(e2, { value: null });
      switch (i2.name) {
        case "textarea":
          if (null !== r2.value && (t2.textContent = r2.value), "print" === n2) break;
          t2.addEventListener("input", (t3) => {
            s2.setValue(e2, { value: t3.target.value });
          });
          break;
        case "input":
          if ("radio" === i2.attributes.type || "checkbox" === i2.attributes.type) {
            if (r2.value === i2.attributes.xfaOn ? t2.setAttribute("checked", true) : r2.value === i2.attributes.xfaOff && t2.removeAttribute("checked"), "print" === n2) break;
            t2.addEventListener("change", (t3) => {
              s2.setValue(e2, { value: t3.target.checked ? t3.target.getAttribute("xfaOn") : t3.target.getAttribute("xfaOff") });
            });
          } else {
            if (null !== r2.value && t2.setAttribute("value", r2.value), "print" === n2) break;
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
      a2 && n2.addLinkAttributes(t2, r2.href, r2.newWindow), i2 && r2.dataId && this.setupStorage(t2, r2.dataId, e2, i2);
    }
    static render(t2) {
      const e2 = t2.annotationStorage, i2 = t2.linkService, s2 = t2.xfaHtml, n2 = t2.intent || "display", r2 = document.createElement(s2.name);
      s2.attributes && this.setAttributes({ html: r2, element: s2, intent: n2, linkService: i2 });
      const a2 = "richText" !== n2, o2 = t2.div;
      if (o2.append(r2), t2.viewport) {
        const e3 = `matrix(${t2.viewport.transform.join(",")})`;
        o2.style.transform = e3;
      }
      a2 && o2.setAttribute("class", "xfaLayer xfaFont");
      const l2 = [];
      if (0 === s2.children.length) {
        if (s2.value) {
          const t3 = document.createTextNode(s2.value);
          r2.append(t3), a2 && X.shouldBuildText(s2.name) && l2.push(t3);
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
        const { name: c2 } = o3;
        if ("#text" === c2) {
          const t4 = document.createTextNode(o3.value);
          l2.push(t4), r3.append(t4);
          continue;
        }
        const d2 = o3?.attributes?.xmlns ? document.createElementNS(o3.attributes.xmlns, c2) : document.createElement(c2);
        if (r3.append(d2), o3.attributes && this.setAttributes({ html: d2, element: o3, storage: e2, intent: n2, linkService: i2 }), o3.children?.length > 0) h2.push([o3, -1, d2]);
        else if (o3.value) {
          const t4 = document.createTextNode(o3.value);
          a2 && X.shouldBuildText(c2) && l2.push(t4), d2.append(t4);
        }
      }
      for (const t3 of o2.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) t3.setAttribute("readOnly", true);
      return { textDivs: l2 };
    }
    static update(t2) {
      const e2 = `matrix(${t2.viewport.transform.join(",")})`;
      t2.div.style.transform = e2, t2.div.hidden = false;
    }
  }
  const K = "http://www.w3.org/2000/svg";
  class Q {
    static CSS = 96;
    static PDF = 72;
    static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
  }
  async function J(t2, e2 = "text") {
    if (at(t2, document.baseURI)) {
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
      n2.open("GET", t2, true), n2.responseType = e2, n2.onreadystatechange = () => {
        if (n2.readyState === XMLHttpRequest.DONE) if (200 !== n2.status && 0 !== n2.status) s2(new Error(n2.statusText));
        else {
          switch (e2) {
            case "arraybuffer":
            case "blob":
            case "json":
              return void i2(n2.response);
          }
          i2(n2.responseText);
        }
      }, n2.send(null);
    });
  }
  class Z {
    constructor({ viewBox: t2, userUnit: e2, scale: i2, rotation: s2, offsetX: n2 = 0, offsetY: r2 = 0, dontFlip: a2 = false }) {
      this.viewBox = t2, this.userUnit = e2, this.scale = i2, this.rotation = s2, this.offsetX = n2, this.offsetY = r2, i2 *= e2;
      const o2 = (t2[2] + t2[0]) / 2, l2 = (t2[3] + t2[1]) / 2;
      let h2, c2, d2, u2, p2, g2, m2, f2;
      switch ((s2 %= 360) < 0 && (s2 += 360), s2) {
        case 180:
          h2 = -1, c2 = 0, d2 = 0, u2 = 1;
          break;
        case 90:
          h2 = 0, c2 = 1, d2 = 1, u2 = 0;
          break;
        case 270:
          h2 = 0, c2 = -1, d2 = -1, u2 = 0;
          break;
        case 0:
          h2 = 1, c2 = 0, d2 = 0, u2 = -1;
          break;
        default:
          throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
      }
      a2 && (d2 = -d2, u2 = -u2), 0 === h2 ? (p2 = Math.abs(l2 - t2[1]) * i2 + n2, g2 = Math.abs(o2 - t2[0]) * i2 + r2, m2 = (t2[3] - t2[1]) * i2, f2 = (t2[2] - t2[0]) * i2) : (p2 = Math.abs(o2 - t2[0]) * i2 + n2, g2 = Math.abs(l2 - t2[1]) * i2 + r2, m2 = (t2[2] - t2[0]) * i2, f2 = (t2[3] - t2[1]) * i2), this.transform = [h2 * i2, c2 * i2, d2 * i2, u2 * i2, p2 - h2 * i2 * o2 - d2 * i2 * l2, g2 - c2 * i2 * o2 - u2 * i2 * l2], this.width = m2, this.height = f2;
    }
    get rawDims() {
      const t2 = this.viewBox;
      return M(this, "rawDims", { pageWidth: t2[2] - t2[0], pageHeight: t2[3] - t2[1], pageX: t2[0], pageY: t2[1] });
    }
    clone({ scale: t2 = this.scale, rotation: e2 = this.rotation, offsetX: i2 = this.offsetX, offsetY: s2 = this.offsetY, dontFlip: n2 = false } = {}) {
      return new Z({ viewBox: this.viewBox.slice(), userUnit: this.userUnit, scale: t2, rotation: e2, offsetX: i2, offsetY: s2, dontFlip: n2 });
    }
    convertToViewportPoint(t2, e2) {
      const i2 = [t2, e2];
      return z.applyTransform(i2, this.transform), i2;
    }
    convertToViewportRectangle(t2) {
      const e2 = [t2[0], t2[1]];
      z.applyTransform(e2, this.transform);
      const i2 = [t2[2], t2[3]];
      return z.applyTransform(i2, this.transform), [e2[0], e2[1], i2[0], i2[1]];
    }
    convertToPdfPoint(t2, e2) {
      const i2 = [t2, e2];
      return z.applyInverseTransform(i2, this.transform), i2;
    }
  }
  class tt extends k {
    constructor(t2, e2 = 0) {
      super(t2, "RenderingCancelledException"), this.extraDelay = e2;
    }
  }
  function et(t2) {
    const e2 = t2.length;
    let i2 = 0;
    for (; i2 < e2 && "" === t2[i2].trim(); ) i2++;
    return "data:" === t2.substring(i2, i2 + 5).toLowerCase();
  }
  function it(t2) {
    return "string" == typeof t2 && /\.pdf$/i.test(t2);
  }
  function st(t2) {
    return [t2] = t2.split(/[#?]/, 1), t2.substring(t2.lastIndexOf("/") + 1);
  }
  function nt(t2, e2 = "document.pdf") {
    if ("string" != typeof t2) return e2;
    if (et(t2)) return _('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), e2;
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
    const s2 = (t3) => {
      try {
        let e3 = decodeURIComponent(t3);
        return e3.includes("/") ? (e3 = e3.split("/").at(-1), e3.test(/^\.pdf$/i) ? e3 : t3) : e3;
      } catch {
        return t3;
      }
    }, n2 = /\.pdf$/i, r2 = i2.pathname.split("/").at(-1);
    if (n2.test(r2)) return s2(r2);
    if (i2.searchParams.size > 0) {
      const t3 = Array.from(i2.searchParams.values()).reverse();
      for (const e4 of t3) if (n2.test(e4)) return s2(e4);
      const e3 = Array.from(i2.searchParams.keys()).reverse();
      for (const t4 of e3) if (n2.test(t4)) return s2(t4);
    }
    if (i2.hash) {
      const t3 = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(i2.hash);
      if (t3) return s2(t3[0]);
    }
    return e2;
  }
  class rt {
    started = /* @__PURE__ */ Object.create(null);
    times = [];
    time(t2) {
      t2 in this.started && _(`Timer is already running for ${t2}`), this.started[t2] = Date.now();
    }
    timeEnd(t2) {
      t2 in this.started || _(`Timer has not been started for ${t2}`), this.times.push({ name: t2, start: this.started[t2], end: Date.now() }), delete this.started[t2];
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
  function at(t2, e2) {
    const i2 = e2 ? URL.parse(t2, e2) : URL.parse(t2);
    return "http:" === i2?.protocol || "https:" === i2?.protocol;
  }
  function ot(t2) {
    t2.preventDefault();
  }
  function lt(t2) {
    t2.preventDefault(), t2.stopPropagation();
  }
  class ht {
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
      let c2 = parseInt(e2[9], 10) || 0;
      return c2 = c2 >= 0 && c2 <= 59 ? c2 : 0, "-" === l2 ? (r2 += h2, a2 += c2) : "+" === l2 && (r2 -= h2, a2 -= c2), new Date(Date.UTC(i2, s2, n2, r2, a2, o2));
    }
  }
  function ct(t2, { scale: e2 = 1, rotation: i2 = 0 }) {
    const { width: s2, height: n2 } = t2.attributes.style, r2 = [0, 0, parseInt(s2), parseInt(n2)];
    return new Z({ viewBox: r2, userUnit: 1, scale: e2, rotation: i2 });
  }
  function dt(t2) {
    if (t2.startsWith("#")) {
      const e2 = parseInt(t2.slice(1), 16);
      return [(16711680 & e2) >> 16, (65280 & e2) >> 8, 255 & e2];
    }
    return t2.startsWith("rgb(") ? t2.slice(4, -1).split(",").map((t3) => parseInt(t3)) : t2.startsWith("rgba(") ? t2.slice(5, -1).split(",").map((t3) => parseInt(t3)).slice(0, 3) : (_(`Not a valid color format: "${t2}"`), [0, 0, 0]);
  }
  function ut(t2) {
    const { a: e2, b: i2, c: s2, d: n2, e: r2, f: a2 } = t2.getTransform();
    return [e2, i2, s2, n2, r2, a2];
  }
  function pt(t2) {
    const { a: e2, b: i2, c: s2, d: n2, e: r2, f: a2 } = t2.getTransform().invertSelf();
    return [e2, i2, s2, n2, r2, a2];
  }
  function gt(t2, e2, i2 = false, s2 = true) {
    if (e2 instanceof Z) {
      const { pageWidth: s3, pageHeight: n2 } = e2.rawDims, { style: r2 } = t2, a2 = N.isCSSRoundSupported, o2 = `var(--total-scale-factor) * ${s3}px`, l2 = `var(--total-scale-factor) * ${n2}px`, h2 = a2 ? `round(down, ${o2}, var(--scale-round-x))` : `calc(${o2})`, c2 = a2 ? `round(down, ${l2}, var(--scale-round-y))` : `calc(${l2})`;
      i2 && e2.rotation % 180 != 0 ? (r2.width = c2, r2.height = h2) : (r2.width = h2, r2.height = c2);
    }
    s2 && t2.setAttribute("data-main-rotation", e2.rotation);
  }
  class mt {
    constructor() {
      const { pixelRatio: t2 } = mt;
      this.sx = t2, this.sy = t2;
    }
    get scaled() {
      return 1 !== this.sx || 1 !== this.sy;
    }
    get symmetric() {
      return this.sx === this.sy;
    }
    limitCanvas(t2, e2, i2, s2, n2 = -1) {
      let r2 = 1 / 0, a2 = 1 / 0, o2 = 1 / 0;
      (i2 = mt.capPixels(i2, n2)) > 0 && (r2 = Math.sqrt(i2 / (t2 * e2))), -1 !== s2 && (a2 = s2 / t2, o2 = s2 / e2);
      const l2 = Math.min(r2, a2, o2);
      return (this.sx > l2 || this.sy > l2) && (this.sx = l2, this.sy = l2, true);
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
  const ft = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
  class bt {
    static get isDarkMode() {
      return M(this, "isDarkMode", !!window?.matchMedia?.("(prefers-color-scheme: dark)").matches);
    }
  }
  class vt {
    static get commentForegroundColor() {
      const t2 = document.createElement("span");
      t2.classList.add("comment", "sidebar");
      const { style: e2 } = t2;
      e2.width = e2.height = "0", e2.display = "none", e2.color = "var(--comment-fg-color)", document.body.append(t2);
      const { color: i2 } = window.getComputedStyle(t2);
      return t2.remove(), M(this, "commentForegroundColor", dt(i2));
    }
  }
  function yt(t2, e2, i2, s2) {
    const n2 = 255 * (1 - (s2 = Math.min(Math.max(s2 ?? 1, 0), 1)));
    return [t2 = Math.round(t2 * s2 + n2), e2 = Math.round(e2 * s2 + n2), i2 = Math.round(i2 * s2 + n2)];
  }
  function wt(t2, e2) {
    const i2 = t2[0] / 255, s2 = t2[1] / 255, n2 = t2[2] / 255, r2 = Math.max(i2, s2, n2), a2 = Math.min(i2, s2, n2), o2 = (r2 + a2) / 2;
    if (r2 === a2) e2[0] = e2[1] = 0;
    else {
      const t3 = r2 - a2;
      switch (e2[1] = o2 < 0.5 ? t3 / (r2 + a2) : t3 / (2 - r2 - a2), r2) {
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
  function xt(t2, e2) {
    const i2 = t2[0], s2 = t2[1], n2 = t2[2], r2 = (1 - Math.abs(2 * n2 - 1)) * s2, a2 = r2 * (1 - Math.abs(i2 / 60 % 2 - 1)), o2 = n2 - r2 / 2;
    switch (Math.floor(i2 / 60)) {
      case 0:
        e2[0] = r2 + o2, e2[1] = a2 + o2, e2[2] = o2;
        break;
      case 1:
        e2[0] = a2 + o2, e2[1] = r2 + o2, e2[2] = o2;
        break;
      case 2:
        e2[0] = o2, e2[1] = r2 + o2, e2[2] = a2 + o2;
        break;
      case 3:
        e2[0] = o2, e2[1] = a2 + o2, e2[2] = r2 + o2;
        break;
      case 4:
        e2[0] = a2 + o2, e2[1] = o2, e2[2] = r2 + o2;
        break;
      case 5:
      case 6:
        e2[0] = r2 + o2, e2[1] = o2, e2[2] = a2 + o2;
    }
  }
  function At(t2) {
    return t2 <= 0.03928 ? t2 / 12.92 : ((t2 + 0.055) / 1.055) ** 2.4;
  }
  function _t(t2, e2, i2) {
    xt(t2, i2), i2.map(At);
    const s2 = 0.2126 * i2[0] + 0.7152 * i2[1] + 0.0722 * i2[2];
    xt(e2, i2), i2.map(At);
    const n2 = 0.2126 * i2[0] + 0.7152 * i2[1] + 0.0722 * i2[2];
    return s2 > n2 ? (s2 + 0.05) / (n2 + 0.05) : (n2 + 0.05) / (s2 + 0.05);
  }
  const St = /* @__PURE__ */ new Map();
  function Et(t2, e2) {
    const i2 = t2[0] + 256 * t2[1] + 65536 * t2[2] + 16777216 * e2[0] + 4294967296 * e2[1] + 1099511627776 * e2[2];
    let s2 = St.get(i2);
    if (s2) return s2;
    const n2 = new Float32Array(9), r2 = n2.subarray(0, 3), a2 = n2.subarray(3, 6);
    wt(t2, a2);
    const o2 = n2.subarray(6, 9);
    wt(e2, o2);
    const l2 = o2[2] < 0.5, h2 = l2 ? 12 : 4.5;
    if (a2[2] = l2 ? Math.sqrt(a2[2]) : 1 - Math.sqrt(1 - a2[2]), _t(a2, o2, r2) < h2) {
      let t3, e3;
      l2 ? (t3 = a2[2], e3 = 1) : (t3 = 0, e3 = a2[2]);
      const i3 = 5e-3;
      for (; e3 - t3 > i3; ) {
        const i4 = a2[2] = (t3 + e3) / 2;
        l2 === _t(a2, o2, r2) < h2 ? t3 = i4 : e3 = i4;
      }
      a2[2] = l2 ? e3 : t3;
    }
    return xt(a2, r2), s2 = z.makeHexColor(Math.round(255 * r2[0]), Math.round(255 * r2[1]), Math.round(255 * r2[2])), St.set(i2, s2), s2;
  }
  function Ct({ html: t2, dir: e2, className: i2 }, s2) {
    const n2 = document.createDocumentFragment();
    if ("string" == typeof t2) {
      const i3 = document.createElement("p");
      i3.dir = e2 || "auto";
      const s3 = t2.split(/(?:\r\n?|\n)/);
      for (let t3 = 0, e3 = s3.length; t3 < e3; ++t3) {
        const n3 = s3[t3];
        i3.append(document.createTextNode(n3)), t3 < e3 - 1 && i3.append(document.createElement("br"));
      }
      n2.append(i3);
    } else Y.render({ xfaHtml: t2, div: n2, intent: "richText" });
    n2.firstChild.classList.add("richText", i2), s2.append(n2);
  }
  r(4972), r(4628), r(7642), r(8004), r(3853), r(5876), r(2475), r(5024), r(1698), r(9314), r(1148), r(3579), r(8335);
  class Tt {
    #s = null;
    #n = null;
    #r;
    #a = null;
    #o = null;
    #l = null;
    #h = null;
    #c = null;
    static #d = null;
    constructor(t2) {
      this.#r = t2, Tt.#d ||= Object.freeze({ freetext: "pdfjs-editor-remove-freetext-button", highlight: "pdfjs-editor-remove-highlight-button", ink: "pdfjs-editor-remove-ink-button", stamp: "pdfjs-editor-remove-stamp-button", signature: "pdfjs-editor-remove-signature-button" });
    }
    render() {
      const t2 = this.#s = document.createElement("div");
      t2.classList.add("editToolbar", "hidden"), t2.setAttribute("role", "toolbar");
      const e2 = this.#r._uiManager._signal;
      e2 instanceof AbortSignal && !e2.aborted && (t2.addEventListener("contextmenu", ot, { signal: e2 }), t2.addEventListener("pointerdown", Tt.#u, { signal: e2 }));
      const i2 = this.#a = document.createElement("div");
      i2.className = "buttons", t2.append(i2);
      const s2 = this.#r.toolbarPosition;
      if (s2) {
        const { style: e3 } = t2, i3 = "ltr" === this.#r._uiManager.direction ? 1 - s2[0] : s2[0];
        e3.insetInlineEnd = 100 * i3 + "%", e3.top = `calc(${100 * s2[1]}% + var(--editor-toolbar-vert-offset))`;
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
      this.#r._focusEventsAllowed = false, lt(t2);
    }
    #g(t2) {
      this.#r._focusEventsAllowed = true, lt(t2);
    }
    #m(t2) {
      const e2 = this.#r._uiManager._signal;
      return e2 instanceof AbortSignal && !e2.aborted && (t2.addEventListener("focusin", this.#p.bind(this), { capture: true, signal: e2 }), t2.addEventListener("focusout", this.#g.bind(this), { capture: true, signal: e2 }), t2.addEventListener("contextmenu", ot, { signal: e2 }), true);
    }
    hide() {
      this.#s.classList.add("hidden"), this.#n?.hideDropdown();
    }
    show() {
      this.#s.classList.remove("hidden"), this.#o?.shown(), this.#l?.shown();
    }
    addDeleteButton() {
      const { editorType: t2, _uiManager: e2 } = this.#r, i2 = document.createElement("button");
      i2.classList.add("basic", "deleteButton"), i2.tabIndex = 0, i2.setAttribute("data-l10n-id", Tt.#d[t2]), this.#m(i2) && i2.addEventListener("click", (t3) => {
        e2.delete();
      }, { signal: e2._signal }), this.#a.append(i2);
    }
    get #f() {
      const t2 = document.createElement("div");
      return t2.className = "divider", t2;
    }
    async addAltText(t2) {
      const e2 = await t2.render();
      this.#m(e2), this.#a.append(e2, this.#f), this.#o = t2;
    }
    addComment(t2, e2 = null) {
      if (this.#l) return;
      const i2 = t2.renderForToolbar();
      if (!i2) return;
      this.#m(i2);
      const s2 = this.#h = this.#f;
      e2 ? (this.#a.insertBefore(i2, e2), this.#a.insertBefore(s2, e2)) : this.#a.append(i2, s2), this.#l = t2, t2.toolbar = this;
    }
    addColorPicker(t2) {
      if (this.#n) return;
      this.#n = t2;
      const e2 = t2.renderButton();
      this.#m(e2), this.#a.append(e2, this.#f);
    }
    async addEditSignatureButton(t2) {
      const e2 = this.#c = await t2.renderEditButton(this.#r);
      this.#m(e2), this.#a.append(e2, this.#f);
    }
    removeButton(t2) {
      "comment" === t2 && (this.#l?.removeToolbarCommentButton(), this.#l = null, this.#h?.remove(), this.#h = null);
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
      this.#c && (this.#c.title = t2);
    }
    remove() {
      this.#s.remove(), this.#n?.destroy(), this.#n = null;
    }
  }
  class Mt {
    #a = null;
    #s = null;
    #b;
    constructor(t2) {
      this.#b = t2;
    }
    #v() {
      const t2 = this.#s = document.createElement("div");
      t2.className = "editToolbar", t2.setAttribute("role", "toolbar");
      const e2 = this.#b._signal;
      e2 instanceof AbortSignal && !e2.aborted && t2.addEventListener("contextmenu", ot, { signal: e2 });
      const i2 = this.#a = document.createElement("div");
      return i2.className = "buttons", t2.append(i2), this.#b.hasCommentManager() && this.#y("commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
        this.#b.commentSelection("floating_button");
      }), this.#y("highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
        this.#b.highlightSelection("floating_button");
      }), t2;
    }
    #w(t2, e2) {
      let i2 = 0, s2 = 0;
      for (const n2 of t2) {
        const t3 = n2.y + n2.height;
        if (t3 < i2) continue;
        const r2 = n2.x + (e2 ? n2.width : 0);
        t3 > i2 ? (s2 = r2, i2 = t3) : e2 ? r2 > s2 && (s2 = r2) : r2 < s2 && (s2 = r2);
      }
      return [e2 ? 1 - s2 : s2, i2];
    }
    show(t2, e2, i2) {
      const [s2, n2] = this.#w(e2, i2), { style: r2 } = this.#s ||= this.#v();
      t2.append(this.#s), r2.insetInlineEnd = 100 * s2 + "%", r2.top = `calc(${100 * n2}% + var(--editor-toolbar-vert-offset))`;
    }
    hide() {
      this.#s.remove();
    }
    #y(t2, e2, i2, s2) {
      const n2 = document.createElement("button");
      n2.classList.add("basic", t2), n2.tabIndex = 0, n2.setAttribute("data-l10n-id", e2);
      const r2 = document.createElement("span");
      n2.append(r2), r2.className = "visuallyHidden", r2.setAttribute("data-l10n-id", i2);
      const a2 = this.#b._signal;
      a2 instanceof AbortSignal && !a2.aborted && (n2.addEventListener("contextmenu", ot, { signal: a2 }), n2.addEventListener("click", s2, { signal: a2 })), this.#a.append(n2);
    }
  }
  function kt(t2, e2, i2) {
    for (const s2 of i2) e2.addEventListener(s2, t2[s2].bind(t2));
  }
  class Dt {
    #x = 0;
    get id() {
      return `${c}${this.#x++}`;
    }
  }
  class Pt {
    #A = V();
    #x = 0;
    #_ = null;
    static get _isSVGFittingCanvas() {
      const t2 = new OffscreenCanvas(1, 3).getContext("2d", { willReadFrequently: true }), e2 = new Image();
      return e2.src = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', M(this, "_isSVGFittingCanvas", e2.decode().then(() => (t2.drawImage(e2, 0, 0, 1, 1, 0, 0, 1, 3), 0 === new Uint32Array(t2.getImageData(0, 0, 1, 1).data.buffer)[0])));
    }
    async #S(t2, e2) {
      this.#_ ||= /* @__PURE__ */ new Map();
      let i2 = this.#_.get(t2);
      if (null === i2) return null;
      if (i2?.bitmap) return i2.refCounter += 1, i2;
      try {
        let t3;
        if (i2 ||= { bitmap: null, id: `image_${this.#A}_${this.#x++}`, refCounter: 0, isSvg: false }, "string" == typeof e2 ? (i2.url = e2, t3 = await J(e2, "blob")) : e2 instanceof File ? t3 = i2.file = e2 : e2 instanceof Blob && (t3 = e2), "image/svg+xml" === t3.type) {
          const e3 = Pt._isSVGFittingCanvas, s2 = new FileReader(), n2 = new Image(), r2 = new Promise((t4, r3) => {
            n2.onload = () => {
              i2.bitmap = n2, i2.isSvg = true, t4();
            }, s2.onload = async () => {
              const t5 = i2.svgUrl = s2.result;
              n2.src = await e3 ? `${t5}#svgView(preserveAspectRatio(none))` : t5;
            }, n2.onerror = s2.onerror = r3;
          });
          s2.readAsDataURL(t3), await r2;
        } else i2.bitmap = await createImageBitmap(t3);
        i2.refCounter = 1;
      } catch (t3) {
        _(t3), i2 = null;
      }
      return this.#_.set(t2, i2), i2 && this.#_.set(i2.id, i2), i2;
    }
    async getFromFile(t2) {
      const { lastModified: e2, name: i2, size: s2, type: n2 } = t2;
      return this.#S(`${e2}_${i2}_${s2}_${n2}`, t2);
    }
    async getFromUrl(t2) {
      return this.#S(t2, t2);
    }
    async getFromBlob(t2, e2) {
      const i2 = await e2;
      return this.#S(t2, i2);
    }
    async getFromId(t2) {
      this.#_ ||= /* @__PURE__ */ new Map();
      const e2 = this.#_.get(t2);
      if (!e2) return null;
      if (e2.bitmap) return e2.refCounter += 1, e2;
      if (e2.file) return this.getFromFile(e2.file);
      if (e2.blobPromise) {
        const { blobPromise: t3 } = e2;
        return delete e2.blobPromise, this.getFromBlob(e2.id, t3);
      }
      return this.getFromUrl(e2.url);
    }
    getFromCanvas(t2, e2) {
      this.#_ ||= /* @__PURE__ */ new Map();
      let i2 = this.#_.get(t2);
      if (i2?.bitmap) return i2.refCounter += 1, i2;
      const s2 = new OffscreenCanvas(e2.width, e2.height);
      return s2.getContext("2d").drawImage(e2, 0, 0), i2 = { bitmap: s2.transferToImageBitmap(), id: `image_${this.#A}_${this.#x++}`, refCounter: 1, isSvg: false }, this.#_.set(t2, i2), this.#_.set(i2.id, i2), i2;
    }
    getSvgUrl(t2) {
      const e2 = this.#_.get(t2);
      return e2?.isSvg ? e2.svgUrl : null;
    }
    deleteId(t2) {
      this.#_ ||= /* @__PURE__ */ new Map();
      const e2 = this.#_.get(t2);
      if (!e2) return;
      if (e2.refCounter -= 1, 0 !== e2.refCounter) return;
      const { bitmap: i2 } = e2;
      if (!e2.url && !e2.file) {
        const t3 = new OffscreenCanvas(i2.width, i2.height);
        t3.getContext("bitmaprenderer").transferFromImageBitmap(i2), e2.blobPromise = t3.convertToBlob();
      }
      i2.close?.(), e2.bitmap = null;
    }
    isValidId(t2) {
      return t2.startsWith(`image_${this.#A}_`);
    }
  }
  class It {
    #E = [];
    #C = false;
    #T;
    #M = -1;
    constructor(t2 = 128) {
      this.#T = t2;
    }
    add({ cmd: t2, undo: e2, post: i2, mustExec: s2, type: n2 = NaN, overwriteIfSameType: r2 = false, keepUndo: a2 = false }) {
      if (s2 && t2(), this.#C) return;
      const o2 = { cmd: t2, undo: e2, post: i2, type: n2 };
      if (-1 === this.#M) return this.#E.length > 0 && (this.#E.length = 0), this.#M = 0, void this.#E.push(o2);
      if (r2 && this.#E[this.#M].type === n2) return a2 && (o2.undo = this.#E[this.#M].undo), void (this.#E[this.#M] = o2);
      const l2 = this.#M + 1;
      l2 === this.#T ? this.#E.splice(0, 1) : (this.#M = l2, l2 < this.#E.length && this.#E.splice(l2)), this.#E.push(o2);
    }
    undo() {
      if (-1 === this.#M) return;
      this.#C = true;
      const { undo: t2, post: e2 } = this.#E[this.#M];
      t2(), e2?.(), this.#C = false, this.#M -= 1;
    }
    redo() {
      if (this.#M < this.#E.length - 1) {
        this.#M += 1, this.#C = true;
        const { cmd: t2, post: e2 } = this.#E[this.#M];
        t2(), e2?.(), this.#C = false;
      }
    }
    hasSomethingToUndo() {
      return -1 !== this.#M;
    }
    hasSomethingToRedo() {
      return this.#M < this.#E.length - 1;
    }
    cleanType(t2) {
      if (-1 !== this.#M) {
        for (let e2 = this.#M; e2 >= 0; e2--) if (this.#E[e2].type !== t2) return this.#E.splice(e2 + 1, this.#M - e2), void (this.#M = e2);
        this.#E.length = 0, this.#M = -1;
      }
    }
    destroy() {
      this.#E = null;
    }
  }
  class Rt {
    constructor(t2) {
      this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
      const { isMac: e2 } = N.platform;
      for (const [i2, s2, n2 = {}] of t2) for (const t3 of i2) {
        const i3 = t3.startsWith("mac+");
        e2 && i3 ? (this.callbacks.set(t3.slice(4), { callback: s2, options: n2 }), this.allKeys.add(t3.split("+").at(-1))) : e2 || i3 || (this.callbacks.set(t3, { callback: s2, options: n2 }), this.allKeys.add(t3.split("+").at(-1)));
      }
    }
    #k(t2) {
      t2.altKey && this.buffer.push("alt"), t2.ctrlKey && this.buffer.push("ctrl"), t2.metaKey && this.buffer.push("meta"), t2.shiftKey && this.buffer.push("shift"), this.buffer.push(t2.key);
      const e2 = this.buffer.join("+");
      return this.buffer.length = 0, e2;
    }
    exec(t2, e2) {
      if (!this.allKeys.has(e2.key)) return;
      const i2 = this.callbacks.get(this.#k(e2));
      if (!i2) return;
      const { callback: s2, options: { bubbles: n2 = false, args: r2 = [], checker: a2 = null } } = i2;
      a2 && !a2(t2, e2) || (s2.bind(t2, ...r2, e2)(), n2 || lt(e2));
    }
  }
  class Lt {
    static _colorsMapping = /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
    get _colors() {
      const t2 = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
      return (function(t3) {
        const e2 = document.createElement("span");
        e2.style.visibility = "hidden", e2.style.colorScheme = "only light", document.body.append(e2);
        for (const i2 of t3.keys()) {
          e2.style.color = i2;
          const s2 = window.getComputedStyle(e2).color;
          t3.set(i2, dt(s2));
        }
        e2.remove();
      })(t2), M(this, "_colors", t2);
    }
    convert(t2) {
      const e2 = dt(t2);
      if (!window.matchMedia("(forced-colors: active)").matches) return e2;
      for (const [t3, i2] of this._colors) if (i2.every((t4, i3) => t4 === e2[i3])) return Lt._colorsMapping.get(t3);
      return e2;
    }
    getHexCode(t2) {
      const e2 = this._colors.get(t2);
      return e2 ? z.makeHexColor(...e2) : t2;
    }
  }
  class Bt {
    #D = new AbortController();
    #P = null;
    #I = null;
    #R = /* @__PURE__ */ new Map();
    #L = /* @__PURE__ */ new Map();
    #B = null;
    #F = null;
    #O = null;
    #N = new It();
    #U = null;
    #z = null;
    #H = null;
    #j = 0;
    #$ = /* @__PURE__ */ new Set();
    #V = null;
    #G = null;
    #W = /* @__PURE__ */ new Set();
    _editorUndoBar = null;
    #q = false;
    #X = false;
    #Y = false;
    #K = null;
    #Q = null;
    #J = null;
    #Z = null;
    #tt = false;
    #et = null;
    #it = new Dt();
    #st = false;
    #nt = false;
    #rt = false;
    #at = null;
    #ot = null;
    #lt = null;
    #ht = null;
    #ct = null;
    #dt = d.NONE;
    #ut = /* @__PURE__ */ new Set();
    #pt = null;
    #gt = null;
    #mt = null;
    #ft = null;
    #bt = null;
    #vt = { isEditing: false, isEmpty: true, hasSomethingToUndo: false, hasSomethingToRedo: false, hasSelectedEditor: false, hasSelectedText: false };
    #yt = [0, 0];
    #wt = null;
    #xt = null;
    #At = null;
    #_t = null;
    #St = null;
    static TRANSLATE_SMALL = 1;
    static TRANSLATE_BIG = 10;
    static get _keyboardManager() {
      const t2 = Bt.prototype, e2 = (t3) => t3.#xt.contains(document.activeElement) && "BUTTON" !== document.activeElement.tagName && t3.hasSomethingToControl(), i2 = (t3, { target: e3 }) => {
        if (e3 instanceof HTMLInputElement) {
          const { type: t4 } = e3;
          return "text" !== t4 && "number" !== t4;
        }
        return true;
      }, s2 = this.TRANSLATE_SMALL, n2 = this.TRANSLATE_BIG;
      return M(this, "_keyboardManager", new Rt([[["ctrl+a", "mac+meta+a"], t2.selectAll, { checker: i2 }], [["ctrl+z", "mac+meta+z"], t2.undo, { checker: i2 }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t2.redo, { checker: i2 }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t2.delete, { checker: i2 }], [["Enter", "mac+Enter"], t2.addNewEditorFromKeyboard, { checker: (t3, { target: e3 }) => !(e3 instanceof HTMLButtonElement) && t3.#xt.contains(e3) && !t3.isEnterHandled }], [[" ", "mac+ "], t2.addNewEditorFromKeyboard, { checker: (t3, { target: e3 }) => !(e3 instanceof HTMLButtonElement) && t3.#xt.contains(document.activeElement) }], [["Escape", "mac+Escape"], t2.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t2.translateSelectedEditors, { args: [-s2, 0], checker: e2 }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t2.translateSelectedEditors, { args: [-n2, 0], checker: e2 }], [["ArrowRight", "mac+ArrowRight"], t2.translateSelectedEditors, { args: [s2, 0], checker: e2 }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t2.translateSelectedEditors, { args: [n2, 0], checker: e2 }], [["ArrowUp", "mac+ArrowUp"], t2.translateSelectedEditors, { args: [0, -s2], checker: e2 }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t2.translateSelectedEditors, { args: [0, -n2], checker: e2 }], [["ArrowDown", "mac+ArrowDown"], t2.translateSelectedEditors, { args: [0, s2], checker: e2 }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t2.translateSelectedEditors, { args: [0, n2], checker: e2 }]]));
    }
    constructor(t2, e2, i2, s2, n2, r2, a2, o2, l2, h2, c2, d2, u2, p2, g2, m2) {
      const f2 = this._signal = this.#D.signal;
      this.#xt = t2, this.#At = e2, this.#_t = i2, this.#B = s2, this.#U = n2, this.#gt = r2, this.#bt = o2, this._eventBus = a2, a2._on("editingaction", this.onEditingAction.bind(this), { signal: f2 }), a2._on("pagechanging", this.onPageChanging.bind(this), { signal: f2 }), a2._on("scalechanging", this.onScaleChanging.bind(this), { signal: f2 }), a2._on("rotationchanging", this.onRotationChanging.bind(this), { signal: f2 }), a2._on("setpreference", this.onSetPreference.bind(this), { signal: f2 }), a2._on("switchannotationeditorparams", (t3) => this.updateParams(t3.type, t3.value), { signal: f2 }), window.addEventListener("pointerdown", () => {
        this.#nt = true;
      }, { capture: true, signal: f2 }), window.addEventListener("pointerup", () => {
        this.#nt = false;
      }, { capture: true, signal: f2 }), this.#Et(), this.#Ct(), this.#Tt(), this.#F = o2.annotationStorage, this.#K = o2.filterFactory, this.#mt = l2, this.#Z = h2 || null, this.#q = c2, this.#X = d2, this.#Y = u2, this.#ct = p2 || null, this.viewParameters = { realScale: Q.PDF_TO_CSS_UNITS, rotation: 0 }, this.isShiftKeyDown = false, this._editorUndoBar = g2 || null, this._supportsPinchToZoom = false !== m2, n2?.setSidebarUiManager(this);
    }
    destroy() {
      this.#St?.resolve(), this.#St = null, this.#D?.abort(), this.#D = null, this._signal = null;
      for (const t2 of this.#L.values()) t2.destroy();
      this.#L.clear(), this.#R.clear(), this.#W.clear(), this.#ht?.clear(), this.#P = null, this.#ut.clear(), this.#N.destroy(), this.#B?.destroy(), this.#U?.destroy(), this.#gt?.destroy(), this.#et?.hide(), this.#et = null, this.#lt?.destroy(), this.#lt = null, this.#I = null, this.#Q && (clearTimeout(this.#Q), this.#Q = null), this.#wt && (clearTimeout(this.#wt), this.#wt = null), this._editorUndoBar?.destroy(), this.#bt = null;
    }
    combinedSignal(t2) {
      return AbortSignal.any([this._signal, t2.signal]);
    }
    get mlManager() {
      return this.#ct;
    }
    get useNewAltTextFlow() {
      return this.#X;
    }
    get useNewAltTextWhenAddingImage() {
      return this.#Y;
    }
    get hcmFilter() {
      return M(this, "hcmFilter", this.#mt ? this.#K.addHCMFilter(this.#mt.foreground, this.#mt.background) : "none");
    }
    get direction() {
      return M(this, "direction", getComputedStyle(this.#xt).direction);
    }
    get _highlightColors() {
      return M(this, "_highlightColors", this.#Z ? new Map(this.#Z.split(",").map((t2) => ((t2 = t2.split("=").map((t3) => t3.trim()))[1] = t2[1].toUpperCase(), t2))) : null);
    }
    get highlightColors() {
      const { _highlightColors: t2 } = this;
      if (!t2) return M(this, "highlightColors", null);
      const e2 = /* @__PURE__ */ new Map(), i2 = !!this.#mt;
      for (const [s2, n2] of t2) {
        const t3 = s2.endsWith("_HCM");
        i2 && t3 ? e2.set(s2.replace("_HCM", ""), n2) : i2 || t3 || e2.set(s2, n2);
      }
      return M(this, "highlightColors", e2);
    }
    get highlightColorNames() {
      return M(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t2) => t2.reverse())) : null);
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
      t2 ? (this.unselectAll(), this.disableUserSelect(true)) : this.disableUserSelect(false), this.#H = t2;
    }
    setMainHighlightColorPicker(t2) {
      this.#lt = t2;
    }
    editAltText(t2, e2 = false) {
      this.#B?.editAltText(this, t2, e2);
    }
    hasCommentManager() {
      return !!this.#U;
    }
    editComment(t2, e2, i2, s2) {
      this.#U?.showDialog(this, t2, e2, i2, s2);
    }
    selectComment(t2, e2) {
      const i2 = this.#L.get(t2), s2 = i2?.getEditorByUID(e2);
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
      if (this.#L.has(t2 - 1)) return;
      const { resolve: e2, promise: i2 } = Promise.withResolvers(), s2 = (i3) => {
        i3.pageNumber === t2 && (this._eventBus._off("editorsrendered", s2), e2());
      };
      this._eventBus.on("editorsrendered", s2), await i2;
    }
    getSignature(t2) {
      this.#gt?.getSignature({ uiManager: this, editor: t2 });
    }
    get signatureManager() {
      return this.#gt;
    }
    switchToMode(t2, e2) {
      this._eventBus.on("annotationeditormodechanged", e2, { once: true, signal: this._signal }), this._eventBus.dispatch("showannotationeditorui", { source: this, mode: t2 });
    }
    setPreference(t2, e2) {
      this._eventBus.dispatch("setpreference", { source: this, name: t2, value: e2 });
    }
    onSetPreference({ name: t2, value: e2 }) {
      "enableNewAltTextWhenAddingImage" === t2 && (this.#Y = e2);
    }
    onPageChanging({ pageNumber: t2 }) {
      this.#j = t2 - 1;
    }
    focusMainContainer() {
      this.#xt.focus();
    }
    findParent(t2, e2) {
      for (const i2 of this.#L.values()) {
        const { x: s2, y: n2, width: r2, height: a2 } = i2.div.getBoundingClientRect();
        if (t2 >= s2 && t2 <= s2 + r2 && e2 >= n2 && e2 <= n2 + a2) return i2;
      }
      return null;
    }
    disableUserSelect(t2 = false) {
      this.#At.classList.toggle("noUserSelect", t2);
    }
    addShouldRescale(t2) {
      this.#W.add(t2);
    }
    removeShouldRescale(t2) {
      this.#W.delete(t2);
    }
    onScaleChanging({ scale: t2 }) {
      this.commitOrRemove(), this.viewParameters.realScale = t2 * Q.PDF_TO_CSS_UNITS;
      for (const t3 of this.#W) t3.onScaleChanging();
      this.#H?.onScaleChanging();
    }
    onRotationChanging({ pagesRotation: t2 }) {
      this.commitOrRemove(), this.viewParameters.rotation = t2;
    }
    #Mt({ anchorNode: t2 }) {
      return t2.nodeType === Node.TEXT_NODE ? t2.parentElement : t2;
    }
    #kt(t2) {
      const { currentLayer: e2 } = this;
      if (e2.hasTextLayer(t2)) return e2;
      for (const e3 of this.#L.values()) if (e3.hasTextLayer(t2)) return e3;
      return null;
    }
    highlightSelection(t2 = "", e2 = false) {
      const i2 = document.getSelection();
      if (!i2 || i2.isCollapsed) return;
      const { anchorNode: s2, anchorOffset: n2, focusNode: r2, focusOffset: a2 } = i2, o2 = i2.toString(), l2 = this.#Mt(i2).closest(".textLayer"), h2 = this.getSelectionBoxes(l2);
      if (!h2) return;
      i2.empty();
      const c2 = this.#kt(l2), u2 = this.#dt === d.NONE, p2 = () => {
        const i3 = c2?.createAndAddNewEditor({ x: 0, y: 0 }, false, { methodOfCreation: t2, boxes: h2, anchorNode: s2, anchorOffset: n2, focusNode: r2, focusOffset: a2, text: o2 });
        u2 && this.showAllEditors("highlight", true, true), e2 && i3?.editComment();
      };
      u2 ? this.switchToMode(d.HIGHLIGHT, p2) : p2();
    }
    commentSelection(t2 = "") {
      this.highlightSelection(t2, true);
    }
    #Dt() {
      const t2 = document.getSelection();
      if (!t2 || t2.isCollapsed) return;
      const e2 = this.#Mt(t2).closest(".textLayer"), i2 = this.getSelectionBoxes(e2);
      i2 && (this.#et ||= new Mt(this), this.#et.show(e2, i2, "ltr" === this.direction));
    }
    getAndRemoveDataFromAnnotationStorage(t2) {
      if (!this.#F) return null;
      const e2 = `${c}${t2}`, i2 = this.#F.getRawValue(e2);
      return i2 && this.#F.remove(e2), i2;
    }
    addToAnnotationStorage(t2) {
      t2.isEmpty() || !this.#F || this.#F.has(t2.id) || this.#F.setValue(t2.id, t2);
    }
    a11yAlert(t2, e2 = null) {
      const i2 = this.#_t;
      i2 && (i2.setAttribute("data-l10n-id", t2), e2 ? i2.setAttribute("data-l10n-args", JSON.stringify(e2)) : i2.removeAttribute("data-l10n-args"));
    }
    #Pt() {
      const t2 = document.getSelection();
      if (!t2 || t2.isCollapsed) return void (this.#pt && (this.#et?.hide(), this.#pt = null, this.#It({ hasSelectedText: false })));
      const { anchorNode: e2 } = t2;
      if (e2 === this.#pt) return;
      const i2 = this.#Mt(t2).closest(".textLayer");
      if (i2) {
        if (this.#et?.hide(), this.#pt = e2, this.#It({ hasSelectedText: true }), (this.#dt === d.HIGHLIGHT || this.#dt === d.NONE) && (this.#dt === d.HIGHLIGHT && this.showAllEditors("highlight", true, true), this.#tt = this.isShiftKeyDown, !this.isShiftKeyDown)) {
          const t3 = this.#dt === d.HIGHLIGHT ? this.#kt(i2) : null;
          if (t3?.toggleDrawing(), this.#nt) {
            const e3 = new AbortController(), i3 = this.combinedSignal(e3), s2 = (i4) => {
              "pointerup" === i4.type && 0 !== i4.button || (e3.abort(), t3?.toggleDrawing(true), "pointerup" === i4.type && this.#Rt("main_toolbar"));
            };
            window.addEventListener("pointerup", s2, { signal: i3 }), window.addEventListener("blur", s2, { signal: i3 });
          } else t3?.toggleDrawing(true), this.#Rt("main_toolbar");
        }
      } else this.#pt && (this.#et?.hide(), this.#pt = null, this.#It({ hasSelectedText: false }));
    }
    #Rt(t2 = "") {
      this.#dt === d.HIGHLIGHT ? this.highlightSelection(t2) : this.#q && this.#Dt();
    }
    #Et() {
      document.addEventListener("selectionchange", this.#Pt.bind(this), { signal: this._signal });
    }
    #Lt() {
      if (this.#J) return;
      this.#J = new AbortController();
      const t2 = this.combinedSignal(this.#J);
      window.addEventListener("focus", this.focus.bind(this), { signal: t2 }), window.addEventListener("blur", this.blur.bind(this), { signal: t2 });
    }
    #Bt() {
      this.#J?.abort(), this.#J = null;
    }
    blur() {
      if (this.isShiftKeyDown = false, this.#tt && (this.#tt = false, this.#Rt("main_toolbar")), !this.hasSelection) return;
      const { activeElement: t2 } = document;
      for (const e2 of this.#ut) if (e2.div.contains(t2)) {
        this.#ot = [e2, t2], e2._focusEventsAllowed = false;
        break;
      }
    }
    focus() {
      if (!this.#ot) return;
      const [t2, e2] = this.#ot;
      this.#ot = null, e2.addEventListener("focusin", () => {
        t2._focusEventsAllowed = true;
      }, { once: true, signal: this._signal }), e2.focus();
    }
    #Tt() {
      if (this.#at) return;
      this.#at = new AbortController();
      const t2 = this.combinedSignal(this.#at);
      window.addEventListener("keydown", this.keydown.bind(this), { signal: t2 }), window.addEventListener("keyup", this.keyup.bind(this), { signal: t2 });
    }
    #Ft() {
      this.#at?.abort(), this.#at = null;
    }
    #Ot() {
      if (this.#z) return;
      this.#z = new AbortController();
      const t2 = this.combinedSignal(this.#z);
      document.addEventListener("copy", this.copy.bind(this), { signal: t2 }), document.addEventListener("cut", this.cut.bind(this), { signal: t2 }), document.addEventListener("paste", this.paste.bind(this), { signal: t2 });
    }
    #Nt() {
      this.#z?.abort(), this.#z = null;
    }
    #Ct() {
      const t2 = this._signal;
      document.addEventListener("dragover", this.dragOver.bind(this), { signal: t2 }), document.addEventListener("drop", this.drop.bind(this), { signal: t2 });
    }
    addEditListeners() {
      this.#Tt(), this.#Ot();
    }
    removeEditListeners() {
      this.#Ft(), this.#Nt();
    }
    dragOver(t2) {
      for (const { type: e2 } of t2.dataTransfer.items) for (const i2 of this.#G) if (i2.isHandlingMimeForPasting(e2)) return t2.dataTransfer.dropEffect = "copy", void t2.preventDefault();
    }
    drop(t2) {
      for (const e2 of t2.dataTransfer.items) for (const i2 of this.#G) if (i2.isHandlingMimeForPasting(e2.type)) return i2.paste(e2, this.currentLayer), void t2.preventDefault();
    }
    copy(t2) {
      if (t2.preventDefault(), this.#P?.commitOrRemove(), !this.hasSelection) return;
      const e2 = [];
      for (const t3 of this.#ut) {
        const i2 = t3.serialize(true);
        i2 && e2.push(i2);
      }
      0 !== e2.length && t2.clipboardData.setData("application/pdfjs", JSON.stringify(e2));
    }
    cut(t2) {
      this.copy(t2), this.delete();
    }
    async paste(t2) {
      t2.preventDefault();
      const { clipboardData: e2 } = t2;
      for (const t3 of e2.items) for (const e3 of this.#G) if (e3.isHandlingMimeForPasting(t3.type)) return void e3.paste(t3, this.currentLayer);
      let i2 = e2.getData("application/pdfjs");
      if (!i2) return;
      try {
        i2 = JSON.parse(i2);
      } catch (t3) {
        return void _(`paste: "${t3.message}".`);
      }
      if (!Array.isArray(i2)) return;
      this.unselectAll();
      const s2 = this.currentLayer;
      try {
        const t3 = [];
        for (const e4 of i2) {
          const i3 = await s2.deserialize(e4);
          if (!i3) return;
          t3.push(i3);
        }
        const e3 = () => {
          for (const e4 of t3) this.#Ut(e4);
          this.#zt(t3);
        }, n2 = () => {
          for (const e4 of t3) e4.remove();
        };
        this.addCommands({ cmd: e3, undo: n2, mustExec: true });
      } catch (t3) {
        _(`paste: "${t3.message}".`);
      }
    }
    keydown(t2) {
      this.isShiftKeyDown || "Shift" !== t2.key || (this.isShiftKeyDown = true), this.#dt === d.NONE || this.isEditorHandlingKeyboard || Bt._keyboardManager.exec(this, t2);
    }
    keyup(t2) {
      this.isShiftKeyDown && "Shift" === t2.key && (this.isShiftKeyDown = false, this.#tt && (this.#tt = false, this.#Rt("main_toolbar")));
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
      Object.entries(t2).some(([t3, e2]) => this.#vt[t3] !== e2) && (this._eventBus.dispatch("annotationeditorstateschanged", { source: this, details: Object.assign(this.#vt, t2) }), this.#dt === d.HIGHLIGHT && false === t2.hasSelectedEditor && this.#Ht([[u.HIGHLIGHT_FREE, true]]));
    }
    #Ht(t2) {
      this._eventBus.dispatch("annotationeditorparamschanged", { source: this, details: t2 });
    }
    setEditingState(t2) {
      t2 ? (this.#Lt(), this.#Ot(), this.#It({ isEditing: this.#dt !== d.NONE, isEmpty: this.#jt(), hasSomethingToUndo: this.#N.hasSomethingToUndo(), hasSomethingToRedo: this.#N.hasSomethingToRedo(), hasSelectedEditor: false })) : (this.#Bt(), this.#Nt(), this.#It({ isEditing: false }), this.disableUserSelect(false));
    }
    registerEditorTypes(t2) {
      if (!this.#G) {
        this.#G = t2;
        for (const t3 of this.#G) this.#Ht(t3.defaultPropertiesToUpdate);
      }
    }
    getId() {
      return this.#it.id;
    }
    get currentLayer() {
      return this.#L.get(this.#j);
    }
    getLayer(t2) {
      return this.#L.get(t2);
    }
    get currentPageIndex() {
      return this.#j;
    }
    addLayer(t2) {
      this.#L.set(t2.pageIndex, t2), this.#st ? t2.enable() : t2.disable();
    }
    removeLayer(t2) {
      this.#L.delete(t2.pageIndex);
    }
    async updateMode(t2, e2 = null, i2 = false, s2 = false, n2 = false) {
      if (this.#dt !== t2 && (!this.#St || (await this.#St.promise, this.#St))) {
        if (this.#St = Promise.withResolvers(), this.#H?.commitOrRemove(), this.#dt === d.POPUP && this.#U?.hideSidebar(), this.#U?.destroyPopup(), this.#dt = t2, t2 === d.NONE) {
          this.setEditingState(false), this.#$t();
          for (const t3 of this.#R.values()) t3.hideStandaloneCommentButton();
          return this._editorUndoBar?.hide(), this.toggleComment(null), void this.#St.resolve();
        }
        for (const t3 of this.#R.values()) t3.addStandaloneCommentButton();
        t2 === d.SIGNATURE && await this.#gt?.loadSignatures(), this.setEditingState(true), await this.#Vt(), this.unselectAll();
        for (const e3 of this.#L.values()) e3.updateMode(t2);
        if (t2 === d.POPUP) {
          this.#I ||= await this.#bt.getAnnotationsByType(new Set(this.#G.map((t4) => t4._editorType)));
          const t3 = /* @__PURE__ */ new Set(), e3 = [];
          for (const i3 of this.#R.values()) {
            const { annotationElementId: s3, hasComment: n3, deleted: r2 } = i3;
            s3 && t3.add(s3), n3 && !r2 && e3.push(i3.getData());
          }
          for (const i3 of this.#I) {
            const { id: s3, popupRef: n3, contentsObj: r2 } = i3;
            n3 && r2?.str && !t3.has(s3) && !this.#$.has(s3) && e3.push(i3);
          }
          this.#U?.showSidebar(e3);
        }
        if (!e2) return i2 && this.addNewEditorFromKeyboard(), void this.#St.resolve();
        for (const t3 of this.#R.values()) t3.uid === e2 ? (this.setSelected(t3), n2 ? t3.editComment() : s2 ? t3.enterInEditMode() : t3.focus()) : t3.unselect();
        this.#St.resolve();
      }
    }
    addNewEditorFromKeyboard() {
      this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
    }
    updateToolbar(t2) {
      t2.mode !== this.#dt && this._eventBus.dispatch("switchannotationeditormode", { source: this, ...t2 });
    }
    updateParams(t2, e2) {
      if (this.#G) {
        switch (t2) {
          case u.CREATE:
            return void this.currentLayer.addNewEditor(e2);
          case u.HIGHLIGHT_SHOW_ALL:
            this._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: { type: "highlight", action: "toggle_visibility" } } }), (this.#ft ||= /* @__PURE__ */ new Map()).set(t2, e2), this.showAllEditors("highlight", e2);
        }
        if (this.hasSelection) for (const i2 of this.#ut) i2.updateParams(t2, e2);
        else for (const i2 of this.#G) i2.updateDefaultParams(t2, e2);
      }
    }
    showAllEditors(t2, e2, i2 = false) {
      for (const i3 of this.#R.values()) i3.editorType === t2 && i3.show(e2);
      (this.#ft?.get(u.HIGHLIGHT_SHOW_ALL) ?? true) !== e2 && this.#Ht([[u.HIGHLIGHT_SHOW_ALL, e2]]);
    }
    enableWaiting(t2 = false) {
      if (this.#rt !== t2) {
        this.#rt = t2;
        for (const e2 of this.#L.values()) t2 ? e2.disableClick() : e2.enableClick(), e2.div.classList.toggle("waiting", t2);
      }
    }
    async #Vt() {
      if (!this.#st) {
        this.#st = true;
        const t2 = [];
        for (const e2 of this.#L.values()) t2.push(e2.enable());
        await Promise.all(t2);
        for (const t3 of this.#R.values()) t3.enable();
      }
    }
    #$t() {
      if (this.unselectAll(), this.#st) {
        this.#st = false;
        for (const t2 of this.#L.values()) t2.disable();
        for (const t2 of this.#R.values()) t2.disable();
      }
    }
    *getEditors(t2) {
      for (const e2 of this.#R.values()) e2.pageIndex === t2 && (yield e2);
    }
    getEditor(t2) {
      return this.#R.get(t2);
    }
    addEditor(t2) {
      this.#R.set(t2.id, t2);
    }
    removeEditor(t2) {
      t2.div.contains(document.activeElement) && (this.#Q && clearTimeout(this.#Q), this.#Q = setTimeout(() => {
        this.focusMainContainer(), this.#Q = null;
      }, 0)), this.#R.delete(t2.id), t2.annotationElementId && this.#ht?.delete(t2.annotationElementId), this.unselect(t2), t2.annotationElementId && this.#$.has(t2.annotationElementId) || this.#F?.remove(t2.id);
    }
    addDeletedAnnotationElement(t2) {
      this.#$.add(t2.annotationElementId), this.addChangedExistingAnnotation(t2), t2.deleted = true;
    }
    isDeletedAnnotationElement(t2) {
      return this.#$.has(t2);
    }
    removeDeletedAnnotationElement(t2) {
      this.#$.delete(t2.annotationElementId), this.removeChangedExistingAnnotation(t2), t2.deleted = false;
    }
    #Ut(t2) {
      const e2 = this.#L.get(t2.pageIndex);
      e2 ? e2.addOrRebuild(t2) : (this.addEditor(t2), this.addToAnnotationStorage(t2));
    }
    setActiveEditor(t2) {
      this.#P !== t2 && (this.#P = t2, t2 && this.#Ht(t2.propertiesToUpdate));
    }
    get #Gt() {
      let t2 = null;
      for (t2 of this.#ut) ;
      return t2;
    }
    updateUI(t2) {
      this.#Gt === t2 && this.#Ht(t2.propertiesToUpdate);
    }
    updateUIForDefaultProperties(t2) {
      this.#Ht(t2.defaultPropertiesToUpdate);
    }
    toggleSelected(t2) {
      if (this.#ut.has(t2)) return this.#ut.delete(t2), t2.unselect(), void this.#It({ hasSelectedEditor: this.hasSelection });
      this.#ut.add(t2), t2.select(), this.#Ht(t2.propertiesToUpdate), this.#It({ hasSelectedEditor: true });
    }
    setSelected(t2) {
      this.updateToolbar({ mode: t2.mode, editId: t2.id }), this.#H?.commitOrRemove();
      for (const e2 of this.#ut) e2 !== t2 && e2.unselect();
      this.#ut.clear(), this.#ut.add(t2), t2.select(), this.#Ht(t2.propertiesToUpdate), this.#It({ hasSelectedEditor: true });
    }
    isSelected(t2) {
      return this.#ut.has(t2);
    }
    get firstSelectedEditor() {
      return this.#ut.values().next().value;
    }
    unselect(t2) {
      t2.unselect(), this.#ut.delete(t2), this.#It({ hasSelectedEditor: this.hasSelection });
    }
    get hasSelection() {
      return 0 !== this.#ut.size;
    }
    get isEnterHandled() {
      return 1 === this.#ut.size && this.firstSelectedEditor.isEnterHandled;
    }
    undo() {
      this.#N.undo(), this.#It({ hasSomethingToUndo: this.#N.hasSomethingToUndo(), hasSomethingToRedo: true, isEmpty: this.#jt() }), this._editorUndoBar?.hide();
    }
    redo() {
      this.#N.redo(), this.#It({ hasSomethingToUndo: true, hasSomethingToRedo: this.#N.hasSomethingToRedo(), isEmpty: this.#jt() });
    }
    addCommands(t2) {
      this.#N.add(t2), this.#It({ hasSomethingToUndo: true, hasSomethingToRedo: false, isEmpty: this.#jt() });
    }
    cleanUndoStack(t2) {
      this.#N.cleanType(t2);
    }
    #jt() {
      if (0 === this.#R.size) return true;
      if (1 === this.#R.size) for (const t2 of this.#R.values()) return t2.isEmpty();
      return false;
    }
    delete() {
      this.commitOrRemove();
      const t2 = this.currentLayer?.endDrawingSession(true);
      if (!this.hasSelection && !t2) return;
      const e2 = t2 ? [t2] : [...this.#ut], i2 = () => {
        for (const t3 of e2) this.#Ut(t3);
      };
      this.addCommands({ cmd: () => {
        this._editorUndoBar?.show(i2, 1 === e2.length ? e2[0].editorType : e2.length);
        for (const t3 of e2) t3.remove();
      }, undo: i2, mustExec: true });
    }
    commitOrRemove() {
      this.#P?.commitOrRemove();
    }
    hasSomethingToControl() {
      return this.#P || this.hasSelection;
    }
    #zt(t2) {
      for (const t3 of this.#ut) t3.unselect();
      this.#ut.clear();
      for (const e2 of t2) e2.isEmpty() || (this.#ut.add(e2), e2.select());
      this.#It({ hasSelectedEditor: this.hasSelection });
    }
    selectAll() {
      for (const t2 of this.#ut) t2.commit();
      this.#zt(this.#R.values());
    }
    unselectAll() {
      if ((!this.#P || (this.#P.commitOrRemove(), this.#dt === d.NONE)) && !this.#H?.commitOrRemove() && this.hasSelection) {
        for (const t2 of this.#ut) t2.unselect();
        this.#ut.clear(), this.#It({ hasSelectedEditor: false });
      }
    }
    translateSelectedEditors(t2, e2, i2 = false) {
      if (i2 || this.commitOrRemove(), !this.hasSelection) return;
      this.#yt[0] += t2, this.#yt[1] += e2;
      const [s2, n2] = this.#yt, r2 = [...this.#ut];
      this.#wt && clearTimeout(this.#wt), this.#wt = setTimeout(() => {
        this.#wt = null, this.#yt[0] = this.#yt[1] = 0, this.addCommands({ cmd: () => {
          for (const t3 of r2) this.#R.has(t3.id) && (t3.translateInPage(s2, n2), t3.translationDone());
        }, undo: () => {
          for (const t3 of r2) this.#R.has(t3.id) && (t3.translateInPage(-s2, -n2), t3.translationDone());
        }, mustExec: false });
      }, 1e3);
      for (const i3 of r2) i3.translateInPage(t2, e2), i3.translationDone();
    }
    setUpDragSession() {
      if (this.hasSelection) {
        this.disableUserSelect(true), this.#V = /* @__PURE__ */ new Map();
        for (const t2 of this.#ut) this.#V.set(t2, { savedX: t2.x, savedY: t2.y, savedPageIndex: t2.pageIndex, newX: 0, newY: 0, newPageIndex: -1 });
      }
    }
    endDragSession() {
      if (!this.#V) return false;
      this.disableUserSelect(false);
      const t2 = this.#V;
      this.#V = null;
      let e2 = false;
      for (const [{ x: i3, y: s2, pageIndex: n2 }, r2] of t2) r2.newX = i3, r2.newY = s2, r2.newPageIndex = n2, e2 ||= i3 !== r2.savedX || s2 !== r2.savedY || n2 !== r2.savedPageIndex;
      if (!e2) return false;
      const i2 = (t3, e3, i3, s2) => {
        if (this.#R.has(t3.id)) {
          const n2 = this.#L.get(s2);
          n2 ? t3._setParentAndPosition(n2, e3, i3) : (t3.pageIndex = s2, t3.x = e3, t3.y = i3);
        }
      };
      return this.addCommands({ cmd: () => {
        for (const [e3, { newX: s2, newY: n2, newPageIndex: r2 }] of t2) i2(e3, s2, n2, r2);
      }, undo: () => {
        for (const [e3, { savedX: s2, savedY: n2, savedPageIndex: r2 }] of t2) i2(e3, s2, n2, r2);
      }, mustExec: true }), true;
    }
    dragSelectedEditors(t2, e2) {
      if (this.#V) for (const i2 of this.#V.keys()) i2.drag(t2, e2);
    }
    rebuild(t2) {
      if (null === t2.parent) {
        const e2 = this.getLayer(t2.pageIndex);
        e2 ? (e2.changeParent(t2), e2.addOrRebuild(t2)) : (this.addEditor(t2), this.addToAnnotationStorage(t2), t2.rebuild());
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
      return this.#dt;
    }
    isEditingMode() {
      return this.#dt !== d.NONE;
    }
    get imageManager() {
      return M(this, "imageManager", new Pt());
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
      const i2 = this.#F.getRawValue(e2);
      i2 && (this.#dt !== d.NONE || i2.hasBeenModified) && i2.renderAnnotationElement(t2);
    }
    setMissingCanvas(t2, e2, i2) {
      const s2 = this.#ht?.get(t2);
      s2 && (s2.setCanvas(e2, i2), this.#ht.delete(t2));
    }
    addMissingCanvas(t2, e2) {
      (this.#ht ||= /* @__PURE__ */ new Map()).set(t2, e2);
    }
  }
  class Ft {
    #o = null;
    #Wt = false;
    #qt = null;
    #Xt = null;
    #Yt = null;
    #Kt = null;
    #Qt = false;
    #Jt = null;
    #r = null;
    #Zt = null;
    #te = null;
    #ee = false;
    static #ie = null;
    static _l10n = null;
    constructor(t2) {
      this.#r = t2, this.#ee = t2._uiManager.useNewAltTextFlow, Ft.#ie ||= Object.freeze({ added: "pdfjs-editor-new-alt-text-added-button", "added-label": "pdfjs-editor-new-alt-text-added-button-label", missing: "pdfjs-editor-new-alt-text-missing-button", "missing-label": "pdfjs-editor-new-alt-text-missing-button-label", review: "pdfjs-editor-new-alt-text-to-review-button", "review-label": "pdfjs-editor-new-alt-text-to-review-button-label" });
    }
    static initialize(t2) {
      Ft._l10n ??= t2;
    }
    async render() {
      const t2 = this.#qt = document.createElement("button");
      t2.className = "altText", t2.tabIndex = "0";
      const e2 = this.#Xt = document.createElement("span");
      t2.append(e2), this.#ee ? (t2.classList.add("new"), t2.setAttribute("data-l10n-id", Ft.#ie.missing), e2.setAttribute("data-l10n-id", Ft.#ie["missing-label"])) : (t2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
      const i2 = this.#r._uiManager._signal;
      t2.addEventListener("contextmenu", ot, { signal: i2 }), t2.addEventListener("pointerdown", (t3) => t3.stopPropagation(), { signal: i2 });
      const s2 = (t3) => {
        t3.preventDefault(), this.#r._uiManager.editAltText(this.#r), this.#ee && this.#r._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_clicked", data: { label: this.#se } });
      };
      return t2.addEventListener("click", s2, { capture: true, signal: i2 }), t2.addEventListener("keydown", (e3) => {
        e3.target === t2 && "Enter" === e3.key && (this.#Qt = true, s2(e3));
      }, { signal: i2 }), await this.#ne(), t2;
    }
    get #se() {
      return (this.#o ? "added" : null === this.#o && this.guessedText && "review") || "missing";
    }
    finish() {
      this.#qt && (this.#qt.focus({ focusVisible: this.#Qt }), this.#Qt = false);
    }
    isEmpty() {
      return this.#ee ? null === this.#o : !this.#o && !this.#Wt;
    }
    hasData() {
      return this.#ee ? null !== this.#o || !!this.#Zt : this.isEmpty();
    }
    get guessedText() {
      return this.#Zt;
    }
    async setGuessedText(t2) {
      null === this.#o && (this.#Zt = t2, this.#te = await Ft._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", { generatedAltText: t2 }), this.#ne());
    }
    toggleAltTextBadge(t2 = false) {
      if (!this.#ee || this.#o) return this.#Jt?.remove(), void (this.#Jt = null);
      if (!this.#Jt) {
        const t3 = this.#Jt = document.createElement("div");
        t3.className = "noAltTextBadge", this.#r.div.append(t3);
      }
      this.#Jt.classList.toggle("hidden", !t2);
    }
    serialize(t2) {
      let e2 = this.#o;
      return t2 || this.#Zt !== e2 || (e2 = this.#te), { altText: e2, decorative: this.#Wt, guessedText: this.#Zt, textWithDisclaimer: this.#te };
    }
    get data() {
      return { altText: this.#o, decorative: this.#Wt };
    }
    set data({ altText: t2, decorative: e2, guessedText: i2, textWithDisclaimer: s2, cancel: n2 = false }) {
      i2 && (this.#Zt = i2, this.#te = s2), this.#o === t2 && this.#Wt === e2 || (n2 || (this.#o = t2, this.#Wt = e2), this.#ne());
    }
    toggle(t2 = false) {
      this.#qt && (!t2 && this.#Kt && (clearTimeout(this.#Kt), this.#Kt = null), this.#qt.disabled = !t2);
    }
    shown() {
      this.#r._reportTelemetry({ action: "pdfjs.image.alt_text.image_status_label_displayed", data: { label: this.#se } });
    }
    destroy() {
      this.#qt?.remove(), this.#qt = null, this.#Xt = null, this.#Yt = null, this.#Jt?.remove(), this.#Jt = null;
    }
    async #ne() {
      const t2 = this.#qt;
      if (!t2) return;
      if (this.#ee) {
        if (t2.classList.toggle("done", !!this.#o), t2.setAttribute("data-l10n-id", Ft.#ie[this.#se]), this.#Xt?.setAttribute("data-l10n-id", Ft.#ie[`${this.#se}-label`]), !this.#o) return void this.#Yt?.remove();
      } else {
        if (!this.#o && !this.#Wt) return t2.classList.remove("done"), void this.#Yt?.remove();
        t2.classList.add("done"), t2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
      }
      let e2 = this.#Yt;
      if (!e2) {
        this.#Yt = e2 = document.createElement("span"), e2.className = "tooltip", e2.setAttribute("role", "tooltip"), e2.id = `alt-text-tooltip-${this.#r.id}`;
        const i3 = 100, s2 = this.#r._uiManager._signal;
        s2.addEventListener("abort", () => {
          clearTimeout(this.#Kt), this.#Kt = null;
        }, { once: true }), t2.addEventListener("mouseenter", () => {
          this.#Kt = setTimeout(() => {
            this.#Kt = null, this.#Yt.classList.add("show"), this.#r._reportTelemetry({ action: "alt_text_tooltip" });
          }, i3);
        }, { signal: s2 }), t2.addEventListener("mouseleave", () => {
          this.#Kt && (clearTimeout(this.#Kt), this.#Kt = null), this.#Yt?.classList.remove("show");
        }, { signal: s2 });
      }
      this.#Wt ? e2.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e2.removeAttribute("data-l10n-id"), e2.textContent = this.#o), e2.parentNode || t2.append(e2);
      const i2 = this.#r.getElementForAltText();
      i2?.setAttribute("aria-describedby", e2.id);
    }
  }
  class Ot {
    #re = null;
    #ae = null;
    #oe = false;
    #r = null;
    #le = null;
    #he = null;
    #ce = null;
    #de = null;
    #ue = false;
    #pe = null;
    constructor(t2) {
      this.#r = t2;
    }
    renderForToolbar() {
      const t2 = this.#ae = document.createElement("button");
      return t2.className = "comment", this.#v(t2, false);
    }
    renderForStandalone() {
      const t2 = this.#re = document.createElement("button");
      t2.className = "annotationCommentButton";
      const e2 = this.#r.commentButtonPosition;
      if (e2) {
        const { style: i2 } = t2;
        i2.insetInlineEnd = `calc(${100 * ("ltr" === this.#r._uiManager.direction ? 1 - e2[0] : e2[0])}% - var(--comment-button-dim))`, i2.top = `calc(${100 * e2[1]}% - var(--comment-button-dim))`;
        const s2 = this.#r.commentButtonColor;
        s2 && (i2.backgroundColor = s2);
      }
      return this.#v(t2, true);
    }
    focusButton() {
      setTimeout(() => {
        (this.#re ?? this.#ae)?.focus();
      }, 0);
    }
    onUpdatedColor() {
      if (!this.#re) return;
      const t2 = this.#r.commentButtonColor;
      t2 && (this.#re.style.backgroundColor = t2), this.#r._uiManager.updatePopupColor(this.#r);
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
      this.#re?.remove(), this.#re = null;
    }
    removeToolbarCommentButton() {
      this.#ae?.remove(), this.#ae = null;
    }
    setCommentButtonStates({ selected: t2, hasPopup: e2 }) {
      this.#re && (this.#re.classList.toggle("selected", t2), this.#re.ariaExpanded = e2);
    }
    #v(t2, e2) {
      if (!this.#r._uiManager.hasCommentManager()) return null;
      t2.tabIndex = "0", t2.ariaHasPopup = "dialog", e2 ? (t2.ariaControls = "commentPopup", t2.setAttribute("data-l10n-id", "pdfjs-show-comment-button")) : (t2.ariaControlsElements = [this.#r._uiManager.getCommentDialogElement()], t2.setAttribute("data-l10n-id", "pdfjs-editor-edit-comment-button"));
      const i2 = this.#r._uiManager._signal;
      if (!(i2 instanceof AbortSignal) || i2.aborted) return t2;
      t2.addEventListener("contextmenu", ot, { signal: i2 }), e2 && (t2.addEventListener("focusin", (t3) => {
        this.#r._focusEventsAllowed = false, lt(t3);
      }, { capture: true, signal: i2 }), t2.addEventListener("focusout", (t3) => {
        this.#r._focusEventsAllowed = true, lt(t3);
      }, { capture: true, signal: i2 })), t2.addEventListener("pointerdown", (t3) => t3.stopPropagation(), { signal: i2 });
      const s2 = (e3) => {
        e3.preventDefault(), t2 === this.#ae ? this.edit() : this.#r.toggleComment(true);
      };
      return t2.addEventListener("click", s2, { capture: true, signal: i2 }), t2.addEventListener("keydown", (e3) => {
        e3.target === t2 && "Enter" === e3.key && (this.#oe = true, s2(e3));
      }, { signal: i2 }), t2.addEventListener("pointerenter", () => {
        this.#r.toggleComment(false, true);
      }, { signal: i2 }), t2.addEventListener("pointerleave", () => {
        this.#r.toggleComment(false, false);
      }, { signal: i2 }), t2;
    }
    edit(t2) {
      const e2 = this.commentPopupPositionInLayer;
      let i2, s2;
      if (e2) [i2, s2] = e2;
      else {
        [i2, s2] = this.#r.commentButtonPosition;
        const { width: t3, height: e3, x: n3, y: r3 } = this.#r;
        i2 = n3 + i2 * t3, s2 = r3 + s2 * e3;
      }
      const n2 = this.#r.parent.boundingClientRect, { x: r2, y: a2, width: o2, height: l2 } = n2;
      this.#r._uiManager.editComment(this.#r, r2 + i2 * o2, a2 + s2 * l2, { ...t2, parentDimensions: n2 });
    }
    finish() {
      this.#ae && (this.#ae.focus({ focusVisible: this.#oe }), this.#oe = false);
    }
    isDeleted() {
      return this.#ue || "" === this.#ce;
    }
    isEmpty() {
      return null === this.#ce;
    }
    hasBeenEdited() {
      return this.isDeleted() || this.#ce !== this.#le;
    }
    serialize() {
      return this.data;
    }
    get data() {
      return { text: this.#ce, richText: this.#he, date: this.#de, deleted: this.isDeleted() };
    }
    set data(t2) {
      if (t2 !== this.#ce && (this.#he = null), null === t2) return this.#ce = "", void (this.#ue = true);
      this.#ce = t2, this.#de = /* @__PURE__ */ new Date(), this.#ue = false;
    }
    setInitialText(t2, e2 = null) {
      this.#le = t2, this.data = t2, this.#de = null, this.#he = e2;
    }
    shown() {
    }
    destroy() {
      this.#ae?.remove(), this.#ae = null, this.#re?.remove(), this.#re = null, this.#ce = "", this.#he = null, this.#de = null, this.#r = null, this.#oe = false, this.#ue = false;
    }
  }
  class Nt {
    #xt;
    #ge = false;
    #me = null;
    #fe;
    #be;
    #ve;
    #ye;
    #we = null;
    #xe;
    #Ae = null;
    #_e;
    #Se = null;
    constructor({ container: t2, isPinchingDisabled: e2 = null, isPinchingStopped: i2 = null, onPinchStart: s2 = null, onPinching: n2 = null, onPinchEnd: r2 = null, signal: a2 }) {
      this.#xt = t2, this.#me = i2, this.#fe = e2, this.#be = s2, this.#ve = n2, this.#ye = r2, this.#_e = new AbortController(), this.#xe = AbortSignal.any([a2, this.#_e.signal]), t2.addEventListener("touchstart", this.#Ee.bind(this), { passive: false, signal: this.#xe });
    }
    get MIN_TOUCH_DISTANCE_TO_PINCH() {
      return 35 / mt.pixelRatio;
    }
    #Ee(t2) {
      if (this.#fe?.()) return;
      if (1 === t2.touches.length) {
        if (this.#we) return;
        const t3 = this.#we = new AbortController(), e3 = AbortSignal.any([this.#xe, t3.signal]), i3 = this.#xt, s2 = { capture: true, signal: e3, passive: false }, n2 = (t4) => {
          "touch" === t4.pointerType && (this.#we?.abort(), this.#we = null);
        };
        return i3.addEventListener("pointerdown", (t4) => {
          "touch" === t4.pointerType && (lt(t4), n2(t4));
        }, s2), i3.addEventListener("pointerup", n2, s2), void i3.addEventListener("pointercancel", n2, s2);
      }
      if (!this.#Se) {
        this.#Se = new AbortController();
        const t3 = AbortSignal.any([this.#xe, this.#Se.signal]), e3 = this.#xt, i3 = { signal: t3, capture: false, passive: false };
        e3.addEventListener("touchmove", this.#Ce.bind(this), i3);
        const s2 = this.#Te.bind(this);
        e3.addEventListener("touchend", s2, i3), e3.addEventListener("touchcancel", s2, i3), i3.capture = true, e3.addEventListener("pointerdown", lt, i3), e3.addEventListener("pointermove", lt, i3), e3.addEventListener("pointercancel", lt, i3), e3.addEventListener("pointerup", lt, i3), this.#be?.();
      }
      if (lt(t2), 2 !== t2.touches.length || this.#me?.()) return void (this.#Ae = null);
      let [e2, i2] = t2.touches;
      e2.identifier > i2.identifier && ([e2, i2] = [i2, e2]), this.#Ae = { touch0X: e2.screenX, touch0Y: e2.screenY, touch1X: i2.screenX, touch1Y: i2.screenY };
    }
    #Ce(t2) {
      if (!this.#Ae || 2 !== t2.touches.length) return;
      lt(t2);
      let [e2, i2] = t2.touches;
      e2.identifier > i2.identifier && ([e2, i2] = [i2, e2]);
      const { screenX: s2, screenY: n2 } = e2, { screenX: r2, screenY: a2 } = i2, o2 = this.#Ae, { touch0X: l2, touch0Y: h2, touch1X: c2, touch1Y: d2 } = o2, u2 = c2 - l2, p2 = d2 - h2, g2 = r2 - s2, m2 = a2 - n2, f2 = Math.hypot(g2, m2) || 1, b2 = Math.hypot(u2, p2) || 1;
      if (!this.#ge && Math.abs(b2 - f2) <= Nt.MIN_TOUCH_DISTANCE_TO_PINCH) return;
      if (o2.touch0X = s2, o2.touch0Y = n2, o2.touch1X = r2, o2.touch1Y = a2, !this.#ge) return void (this.#ge = true);
      const v2 = [(s2 + r2) / 2, (n2 + a2) / 2];
      this.#ve?.(v2, b2, f2);
    }
    #Te(t2) {
      t2.touches.length >= 2 || (this.#Se && (this.#Se.abort(), this.#Se = null, this.#ye?.()), this.#Ae && (lt(t2), this.#Ae = null, this.#ge = false));
    }
    destroy() {
      this.#_e?.abort(), this.#_e = null, this.#we?.abort(), this.#we = null;
    }
  }
  class Ut {
    #Me = null;
    #ke = null;
    #o = null;
    #l = null;
    #re = null;
    #De = false;
    #Pe = null;
    #Ie = "";
    #Re = null;
    #Le = null;
    #Be = null;
    #Fe = null;
    #Oe = null;
    #Ne = "";
    #Ue = false;
    #ze = null;
    #He = false;
    #je = false;
    #$e = false;
    #Ve = null;
    #Ge = 0;
    #We = 0;
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
    #Ye = false;
    #Ke = Ut._zIndex++;
    static _borderLineWidth = -1;
    static _colorManager = new Lt();
    static _zIndex = 1;
    static _telemetryTimeout = 1e3;
    static get _resizerKeyboardManager() {
      const t2 = Ut.prototype._resizeWithKeyboard, e2 = Bt.TRANSLATE_SMALL, i2 = Bt.TRANSLATE_BIG;
      return M(this, "_resizerKeyboardManager", new Rt([[["ArrowLeft", "mac+ArrowLeft"], t2, { args: [-e2, 0] }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t2, { args: [-i2, 0] }], [["ArrowRight", "mac+ArrowRight"], t2, { args: [e2, 0] }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t2, { args: [i2, 0] }], [["ArrowUp", "mac+ArrowUp"], t2, { args: [0, -e2] }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t2, { args: [0, -i2] }], [["ArrowDown", "mac+ArrowDown"], t2, { args: [0, e2] }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t2, { args: [0, i2] }], [["Escape", "mac+Escape"], Ut.prototype._stopResizingWithKeyboard]]));
    }
    constructor(t2) {
      this.parent = t2.parent, this.id = t2.id, this.width = this.height = null, this.pageIndex = t2.parent.pageIndex, this.name = t2.name, this.div = null, this._uiManager = t2.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = false, this._initialOptions.isCentered = t2.isCentered, this._structTreeParentId = null, this.annotationElementId = t2.annotationElementId || null, this.creationDate = t2.creationDate || /* @__PURE__ */ new Date(), this.modificationDate = t2.modificationDate || null;
      const { rotation: e2, rawDims: { pageWidth: i2, pageHeight: s2, pageX: n2, pageY: r2 } } = this.parent.viewport;
      this.rotation = e2, this.pageRotation = (360 + e2 - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [i2, s2], this.pageTranslation = [n2, r2];
      const [a2, o2] = this.parentDimensions;
      this.x = t2.x / a2, this.y = t2.y / o2, this.isAttachedToDOM = false, this.deleted = false;
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
      return M(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
    }
    static deleteAnnotationElement(t2) {
      const e2 = new zt({ id: t2.parent.getNextId(), parent: t2.parent, uiManager: t2._uiManager });
      e2.annotationElementId = t2.annotationElementId, e2.deleted = true, e2._uiManager.addToAnnotationStorage(e2);
    }
    static initialize(t2, e2) {
      if (Ut._l10n ??= t2, Ut._l10nResizer ||= Object.freeze({ topLeft: "pdfjs-editor-resizer-top-left", topMiddle: "pdfjs-editor-resizer-top-middle", topRight: "pdfjs-editor-resizer-top-right", middleRight: "pdfjs-editor-resizer-middle-right", bottomRight: "pdfjs-editor-resizer-bottom-right", bottomMiddle: "pdfjs-editor-resizer-bottom-middle", bottomLeft: "pdfjs-editor-resizer-bottom-left", middleLeft: "pdfjs-editor-resizer-middle-left" }), -1 !== Ut._borderLineWidth) return;
      const i2 = getComputedStyle(document.documentElement);
      Ut._borderLineWidth = parseFloat(i2.getPropertyValue("--outline-width")) || 0;
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
      S("Not implemented");
    }
    get propertiesToUpdate() {
      return [];
    }
    get _isDraggable() {
      return this.#Ye;
    }
    set _isDraggable(t2) {
      this.#Ye = t2, this.div?.classList.toggle("draggable", t2);
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
          this.x -= this.height * e2 / (2 * t2), this.y += this.width * t2 / (2 * e2);
          break;
        case 180:
          this.x += this.width / 2, this.y += this.height / 2;
          break;
        case 270:
          this.x += this.height * e2 / (2 * t2), this.y -= this.width * t2 / (2 * e2);
          break;
        default:
          this.x -= this.width / 2, this.y -= this.height / 2;
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
      this.div.style.zIndex = this.#Ke;
    }
    setParent(t2) {
      null !== t2 ? (this.pageIndex = t2.pageIndex, this.pageDimensions = t2.pageDimensions) : (this.#Qe(), this.#Fe?.remove(), this.#Fe = null), this.parent = t2;
    }
    focusin(t2) {
      this._focusEventsAllowed && (this.#Ue ? this.#Ue = false : this.parent.setSelected(this));
    }
    focusout(t2) {
      if (!this._focusEventsAllowed) return;
      if (!this.isAttachedToDOM) return;
      const e2 = t2.relatedTarget;
      e2?.closest(`#${this.id}`) || (t2.preventDefault(), this.parent?.isMultipleSelection || this.commitOrRemove());
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
      [i2, s2] = this.screenToPageTranslation(i2, s2), this.x = (t2 + i2) / n2, this.y = (e2 + s2) / r2, this.fixAndSetPosition();
    }
    _moveAfterPaste(t2, e2) {
      const [i2, s2] = this.parentDimensions;
      this.setAt(t2 * i2, e2 * s2, this.width * i2, this.height * s2), this._onTranslated();
    }
    #Je([t2, e2], i2, s2) {
      [i2, s2] = this.screenToPageTranslation(i2, s2), this.x += i2 / t2, this.y += s2 / e2, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
    }
    translate(t2, e2) {
      this.#Je(this.parentDimensions, t2, e2);
    }
    translateInPage(t2, e2) {
      this.#ze ||= [this.x, this.y, this.width, this.height], this.#Je(this.pageDimensions, t2, e2), this.div.scrollIntoView({ block: "nearest" });
    }
    translationDone() {
      this._onTranslated(this.x, this.y);
    }
    drag(t2, e2) {
      this.#ze ||= [this.x, this.y, this.width, this.height];
      const { div: i2, parentDimensions: [s2, n2] } = this;
      if (this.x += t2 / s2, this.y += e2 / n2, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
        const { x: t3, y: e3 } = this.div.getBoundingClientRect();
        this.parent.findNewParent(this, t3, e3) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
      }
      let { x: r2, y: a2 } = this;
      const [o2, l2] = this.getBaseTranslation();
      r2 += o2, a2 += l2;
      const { style: h2 } = i2;
      h2.left = `${(100 * r2).toFixed(2)}%`, h2.top = `${(100 * a2).toFixed(2)}%`, this._onTranslating(r2, a2), i2.scrollIntoView({ block: "nearest" });
    }
    _onTranslating(t2, e2) {
    }
    _onTranslated(t2, e2) {
    }
    get _hasBeenMoved() {
      return !!this.#ze && (this.#ze[0] !== this.x || this.#ze[1] !== this.y);
    }
    get _hasBeenResized() {
      return !!this.#ze && (this.#ze[2] !== this.width || this.#ze[3] !== this.height);
    }
    getBaseTranslation() {
      const [t2, e2] = this.parentDimensions, { _borderLineWidth: i2 } = Ut, s2 = i2 / t2, n2 = i2 / e2;
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
      if (a2 *= i2, o2 *= s2, n2 *= i2, r2 *= s2, this._mustFixPosition) switch (t2) {
        case 0:
          n2 = W(n2, 0, i2 - a2), r2 = W(r2, 0, s2 - o2);
          break;
        case 90:
          n2 = W(n2, 0, i2 - o2), r2 = W(r2, a2, s2);
          break;
        case 180:
          n2 = W(n2, a2, i2), r2 = W(r2, o2, s2);
          break;
        case 270:
          n2 = W(n2, o2, i2), r2 = W(r2, 0, s2 - a2);
      }
      this.x = n2 /= i2, this.y = r2 /= s2;
      const [l2, h2] = this.getBaseTranslation();
      n2 += l2, r2 += h2, e2.left = `${(100 * n2).toFixed(2)}%`, e2.top = `${(100 * r2).toFixed(2)}%`, this.moveInDOM();
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
      return Ut.#Ze(t2, e2, this.parentRotation);
    }
    pageTranslationToScreen(t2, e2) {
      return Ut.#Ze(t2, e2, 360 - this.parentRotation);
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
      t2.width = `${(100 * e2).toFixed(2)}%`, t2.height = `${(100 * i2).toFixed(2)}%`;
    }
    getInitialTranslation() {
      return [0, 0];
    }
    #ei() {
      if (this.#Re) return;
      this.#Re = document.createElement("div"), this.#Re.classList.add("resizers");
      const t2 = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e2 = this._uiManager._signal;
      for (const i2 of t2) {
        const t3 = document.createElement("div");
        this.#Re.append(t3), t3.classList.add("resizer", i2), t3.setAttribute("data-resizer-name", i2), t3.addEventListener("pointerdown", this.#ii.bind(this, i2), { signal: e2 }), t3.addEventListener("contextmenu", ot, { signal: e2 }), t3.tabIndex = -1;
      }
      this.div.prepend(this.#Re);
    }
    #ii(t2, e2) {
      e2.preventDefault();
      const { isMac: i2 } = N.platform;
      if (0 !== e2.button || e2.ctrlKey && i2) return;
      this.#o?.toggle(false);
      const s2 = this._isDraggable;
      this._isDraggable = false, this.#Le = [e2.screenX, e2.screenY];
      const n2 = new AbortController(), r2 = this._uiManager.combinedSignal(n2);
      this.parent.togglePointerEvents(false), window.addEventListener("pointermove", this.#si.bind(this, t2), { passive: true, capture: true, signal: r2 }), window.addEventListener("touchmove", lt, { passive: false, signal: r2 }), window.addEventListener("contextmenu", ot, { signal: r2 }), this.#Be = { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height };
      const a2 = this.parent.div.style.cursor, o2 = this.div.style.cursor;
      this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e2.target).cursor;
      const l2 = () => {
        n2.abort(), this.parent.togglePointerEvents(true), this.#o?.toggle(true), this._isDraggable = s2, this.parent.div.style.cursor = a2, this.div.style.cursor = o2, this.#ni();
      };
      window.addEventListener("pointerup", l2, { signal: r2 }), window.addEventListener("blur", l2, { signal: r2 });
    }
    #ri(t2, e2, i2, s2) {
      this.width = i2, this.height = s2, this.x = t2, this.y = e2, this.setDims(), this.fixAndSetPosition(), this._onResized();
    }
    _onResized() {
    }
    #ni() {
      if (!this.#Be) return;
      const { savedX: t2, savedY: e2, savedWidth: i2, savedHeight: s2 } = this.#Be;
      this.#Be = null;
      const n2 = this.x, r2 = this.y, a2 = this.width, o2 = this.height;
      n2 === t2 && r2 === e2 && a2 === i2 && o2 === s2 || this.addCommands({ cmd: this.#ri.bind(this, n2, r2, a2, o2), undo: this.#ri.bind(this, t2, e2, i2, s2), mustExec: true });
    }
    static _round(t2) {
      return Math.round(1e4 * t2) / 1e4;
    }
    #si(t2, e2) {
      const [i2, s2] = this.parentDimensions, n2 = this.x, r2 = this.y, a2 = this.width, o2 = this.height, l2 = Ut.MIN_SIZE / i2, h2 = Ut.MIN_SIZE / s2, c2 = this.#ti(this.rotation), d2 = (t3, e3) => [c2[0] * t3 + c2[2] * e3, c2[1] * t3 + c2[3] * e3], u2 = this.#ti(360 - this.rotation);
      let p2, g2, m2 = false, f2 = false;
      switch (t2) {
        case "topLeft":
          m2 = true, p2 = (t3, e3) => [0, 0], g2 = (t3, e3) => [t3, e3];
          break;
        case "topMiddle":
          p2 = (t3, e3) => [t3 / 2, 0], g2 = (t3, e3) => [t3 / 2, e3];
          break;
        case "topRight":
          m2 = true, p2 = (t3, e3) => [t3, 0], g2 = (t3, e3) => [0, e3];
          break;
        case "middleRight":
          f2 = true, p2 = (t3, e3) => [t3, e3 / 2], g2 = (t3, e3) => [0, e3 / 2];
          break;
        case "bottomRight":
          m2 = true, p2 = (t3, e3) => [t3, e3], g2 = (t3, e3) => [0, 0];
          break;
        case "bottomMiddle":
          p2 = (t3, e3) => [t3 / 2, e3], g2 = (t3, e3) => [t3 / 2, 0];
          break;
        case "bottomLeft":
          m2 = true, p2 = (t3, e3) => [0, e3], g2 = (t3, e3) => [t3, 0];
          break;
        case "middleLeft":
          f2 = true, p2 = (t3, e3) => [0, e3 / 2], g2 = (t3, e3) => [t3, e3 / 2];
      }
      const b2 = p2(a2, o2), v2 = g2(a2, o2);
      let y2 = d2(...v2);
      const w2 = Ut._round(n2 + y2[0]), x2 = Ut._round(r2 + y2[1]);
      let A2, _2, S2 = 1, E2 = 1;
      if (e2.fromKeyboard) ({ deltaX: A2, deltaY: _2 } = e2);
      else {
        const { screenX: t3, screenY: i3 } = e2, [s3, n3] = this.#Le;
        [A2, _2] = this.screenToPageTranslation(t3 - s3, i3 - n3), this.#Le[0] = t3, this.#Le[1] = i3;
      }
      var C2, T2;
      if ([A2, _2] = (C2 = A2 / i2, T2 = _2 / s2, [u2[0] * C2 + u2[2] * T2, u2[1] * C2 + u2[3] * T2]), m2) {
        const t3 = Math.hypot(a2, o2);
        S2 = E2 = Math.max(Math.min(Math.hypot(v2[0] - b2[0] - A2, v2[1] - b2[1] - _2) / t3, 1 / a2, 1 / o2), l2 / a2, h2 / o2);
      } else f2 ? S2 = W(Math.abs(v2[0] - b2[0] - A2), l2, 1) / a2 : E2 = W(Math.abs(v2[1] - b2[1] - _2), h2, 1) / o2;
      const M2 = Ut._round(a2 * S2), k2 = Ut._round(o2 * E2);
      y2 = d2(...g2(M2, k2));
      const D2 = w2 - y2[0], P2 = x2 - y2[1];
      this.#ze ||= [this.x, this.y, this.width, this.height], this.width = M2, this.height = k2, this.x = D2, this.y = P2, this.setDims(), this.fixAndSetPosition(), this._onResizing();
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
      if (this._editToolbar || this.#je) return this._editToolbar;
      this._editToolbar = new Tt(this), this.div.append(this._editToolbar.render());
      const { toolbarButtons: t2 } = this;
      if (t2) for (const [e2, i2] of t2) await this._editToolbar.addButton(e2, i2);
      return this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton()), this._editToolbar.addButton("delete"), this._editToolbar;
    }
    addCommentButtonInToolbar() {
      this._editToolbar?.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
    }
    removeCommentButtonFromToolbar() {
      this._editToolbar?.removeButton("comment");
    }
    removeEditToolbar() {
      this._editToolbar?.remove(), this._editToolbar = null, this.#o?.destroy();
    }
    addContainer(t2) {
      const e2 = this._editToolbar?.div;
      e2 ? e2.before(t2) : this.div.append(t2);
    }
    getClientDimensions() {
      return this.div.getBoundingClientRect();
    }
    createAltText() {
      return this.#o || (Ft.initialize(Ut._l10n), this.#o = new Ft(this), this.#Me && (this.#o.data = this.#Me, this.#Me = null)), this.#o;
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
      return this.#l ||= new Ot(this);
    }
    addStandaloneCommentButton() {
      this.#re ? this._uiManager.isEditingMode() && this.#re.classList.remove("hidden") : this.hasComment && (this.#re = this.#l.renderForStandalone(), this.div.append(this.#re));
    }
    removeStandaloneCommentButton() {
      this.#l.removeStandaloneCommentButton(), this.#re = null;
    }
    hideStandaloneCommentButton() {
      this.#re?.classList.add("hidden");
    }
    get comment() {
      const { data: { richText: t2, text: e2, date: i2, deleted: s2 } } = this.#l;
      return { text: e2, richText: t2, date: i2, deleted: s2, color: this.getNonHCMColor(), opacity: this.opacity ?? 1 };
    }
    set comment(t2) {
      this.#l ||= new Ot(this), this.#l.data = t2, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
    }
    setCommentData({ comment: t2, popupRef: e2, richText: i2 }) {
      if (!e2) return;
      if (this.#l ||= new Ot(this), this.#l.setInitialText(t2, i2), !this.annotationElementId) return;
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
      this.#l ||= new Ot(this), this.#l.edit(t2);
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
      t2.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), t2.className = this.name, t2.setAttribute("id", this.id), t2.tabIndex = this.#De ? -1 : 0, t2.setAttribute("role", "application"), this.defaultL10nId && t2.setAttribute("data-l10n-id", this.defaultL10nId), this._isVisible || t2.classList.add("hidden"), this.setInForeground(), this.#ai();
      const [e2, i2] = this.parentDimensions;
      this.parentRotation % 180 != 0 && (t2.style.maxWidth = `${(100 * i2 / e2).toFixed(2)}%`, t2.style.maxHeight = `${(100 * e2 / i2).toFixed(2)}%`);
      const [s2, n2] = this.getInitialTranslation();
      return this.translate(s2, n2), kt(this, t2, ["keydown", "pointerdown", "dblclick"]), this.isResizable && this._uiManager._supportsPinchToZoom && (this.#Xe ||= new Nt({ container: t2, isPinchingDisabled: () => !this.isSelected, onPinchStart: this.#oi.bind(this), onPinching: this.#li.bind(this), onPinchEnd: this.#hi.bind(this), signal: this._uiManager._signal })), this.addStandaloneCommentButton(), this._uiManager._editorUndoBar?.hide(), t2;
    }
    #oi() {
      this.#Be = { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height }, this.#o?.toggle(false), this.parent.togglePointerEvents(false);
    }
    #li(t2, e2, i2) {
      let s2 = i2 / e2 * 0.7 + 1 - 0.7;
      if (1 === s2) return;
      const n2 = this.#ti(this.rotation), r2 = (t3, e3) => [n2[0] * t3 + n2[2] * e3, n2[1] * t3 + n2[3] * e3], [a2, o2] = this.parentDimensions, l2 = this.x, h2 = this.y, c2 = this.width, d2 = this.height, u2 = Ut.MIN_SIZE / a2, p2 = Ut.MIN_SIZE / o2;
      s2 = Math.max(Math.min(s2, 1 / c2, 1 / d2), u2 / c2, p2 / d2);
      const g2 = Ut._round(c2 * s2), m2 = Ut._round(d2 * s2);
      if (g2 === c2 && m2 === d2) return;
      this.#ze ||= [l2, h2, c2, d2];
      const f2 = r2(c2 / 2, d2 / 2), b2 = Ut._round(l2 + f2[0]), v2 = Ut._round(h2 + f2[1]), y2 = r2(g2 / 2, m2 / 2);
      this.x = b2 - y2[0], this.y = v2 - y2[1], this.width = g2, this.height = m2, this.setDims(), this.fixAndSetPosition(), this._onResizing();
    }
    #hi() {
      this.#o?.toggle(true), this.parent.togglePointerEvents(true), this.#ni();
    }
    pointerdown(t2) {
      const { isMac: e2 } = N.platform;
      0 !== t2.button || t2.ctrlKey && e2 ? t2.preventDefault() : (this.#Ue = true, this._isDraggable ? this.#ci(t2) : this.#di(t2));
    }
    #di(t2) {
      const { isMac: e2 } = N.platform;
      t2.ctrlKey && !e2 || t2.shiftKey || t2.metaKey && e2 ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
    }
    #ci(t2) {
      const { isSelected: e2 } = this;
      this._uiManager.setUpDragSession();
      let i2 = false;
      const s2 = new AbortController(), n2 = this._uiManager.combinedSignal(s2), r2 = { capture: true, passive: false, signal: n2 }, a2 = (t3) => {
        s2.abort(), this.#Pe = null, this.#Ue = false, this._uiManager.endDragSession() || this.#di(t3), i2 && this._onStopDragging();
      };
      e2 && (this.#Ge = t2.clientX, this.#We = t2.clientY, this.#Pe = t2.pointerId, this.#Ie = t2.pointerType, window.addEventListener("pointermove", (t3) => {
        i2 || (i2 = true, this._uiManager.toggleComment(this, true, false), this._onStartDragging());
        const { clientX: e3, clientY: s3, pointerId: n3 } = t3;
        if (n3 !== this.#Pe) return void lt(t3);
        const [r3, a3] = this.screenToPageTranslation(e3 - this.#Ge, s3 - this.#We);
        this.#Ge = e3, this.#We = s3, this._uiManager.dragSelectedEditors(r3, a3);
      }, r2), window.addEventListener("touchmove", lt, r2), window.addEventListener("pointerdown", (t3) => {
        t3.pointerType === this.#Ie && (this.#Xe || t3.isPrimary) && a2(t3), lt(t3);
      }, r2));
      const o2 = (t3) => {
        this.#Pe && this.#Pe !== t3.pointerId ? lt(t3) : a2(t3);
      };
      window.addEventListener("pointerup", o2, { signal: n2 }), window.addEventListener("blur", o2, { signal: n2 });
    }
    _onStartDragging() {
    }
    _onStopDragging() {
    }
    moveInDOM() {
      this.#Ve && clearTimeout(this.#Ve), this.#Ve = setTimeout(() => {
        this.#Ve = null, this.parent?.moveEditorInDOM(this);
      }, 0);
    }
    _setParentAndPosition(t2, e2, i2) {
      t2.changeParent(this), this.x = e2, this.y = i2, this.fixAndSetPosition(), this._onTranslated();
    }
    getRect(t2, e2, i2 = this.rotation) {
      const s2 = this.parentScale, [n2, r2] = this.pageDimensions, [a2, o2] = this.pageTranslation, l2 = t2 / s2, h2 = e2 / s2, c2 = this.x * n2, d2 = this.y * r2, u2 = this.width * n2, p2 = this.height * r2;
      switch (i2) {
        case 0:
          return [c2 + l2 + a2, r2 - d2 - h2 - p2 + o2, c2 + l2 + u2 + a2, r2 - d2 - h2 + o2];
        case 90:
          return [c2 + h2 + a2, r2 - d2 + l2 + o2, c2 + h2 + p2 + a2, r2 - d2 + l2 + u2 + o2];
        case 180:
          return [c2 - l2 - u2 + a2, r2 - d2 + h2 + o2, c2 - l2 + a2, r2 - d2 + h2 + p2 + o2];
        case 270:
          return [c2 - h2 - p2 + a2, r2 - d2 - l2 - u2 + o2, c2 - h2 + a2, r2 - d2 - l2 + o2];
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
      return this.color && Ut._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
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
      return !this.isInEditMode() && (this.parent.setEditingState(false), this.#je = true, true);
    }
    disableEditMode() {
      return !!this.isInEditMode() && (this.parent.setEditingState(true), this.#je = false, true);
    }
    isInEditMode() {
      return this.#je;
    }
    shouldGetKeyboardEvents() {
      return this.#$e;
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
      this.div.addEventListener("focusin", this.focusin.bind(this), { signal: t2 }), this.div.addEventListener("focusout", this.focusout.bind(this), { signal: t2 });
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
      s2.rotation = t2.rotation, s2.#Me = t2.accessibilityData, s2._isCopy = t2.isCopy || false;
      const [n2, r2] = s2.pageDimensions, [a2, o2, l2, h2] = s2.getRectInCurrentCoords(t2.rect, r2);
      return s2.x = a2 / n2, s2.y = o2 / r2, s2.width = l2 / n2, s2.height = h2 / r2, s2;
    }
    get hasBeenModified() {
      return !!this.annotationElementId && (this.deleted || null !== this.serialize());
    }
    remove() {
      if (this.#Oe?.abort(), this.#Oe = null, this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), this.#Ve && (clearTimeout(this.#Ve), this.#Ve = null), this.#Qe(), this.removeEditToolbar(), this.#qe) {
        for (const t2 of this.#qe.values()) clearTimeout(t2);
        this.#qe = null;
      }
      this.parent = null, this.#Xe?.destroy(), this.#Xe = null;
    }
    get isResizable() {
      return false;
    }
    makeResizable() {
      this.isResizable && (this.#ei(), this.#Re.classList.remove("hidden"));
    }
    get toolbarPosition() {
      return null;
    }
    get commentButtonPosition() {
      return "ltr" === this._uiManager.direction ? [1, 0] : [0, 0];
    }
    get commentButtonPositionInPage() {
      const { commentButtonPosition: [t2, e2] } = this, [i2, s2, n2, r2] = this.getPDFRect();
      return [Ut._round(i2 + (n2 - i2) * t2), Ut._round(s2 + (r2 - s2) * (1 - e2))];
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
      this._uiManager.setSelected(this), this.#Be = { savedX: this.x, savedY: this.y, savedWidth: this.width, savedHeight: this.height };
      const e2 = this.#Re.children;
      if (!this.#ke) {
        this.#ke = Array.from(e2);
        const t3 = this.#ui.bind(this), i3 = this.#pi.bind(this), s3 = this._uiManager._signal;
        for (const e3 of this.#ke) {
          const n3 = e3.getAttribute("data-resizer-name");
          e3.setAttribute("role", "spinbutton"), e3.addEventListener("keydown", t3, { signal: s3 }), e3.addEventListener("blur", i3, { signal: s3 }), e3.addEventListener("focus", this.#gi.bind(this, n3), { signal: s3 }), e3.setAttribute("data-l10n-id", Ut._l10nResizer[n3]);
        }
      }
      const i2 = this.#ke[0];
      let s2 = 0;
      for (const t3 of e2) {
        if (t3 === i2) break;
        s2++;
      }
      const n2 = (360 - this.rotation + this.parentRotation) % 360 / 90 * (this.#ke.length / 4);
      if (n2 !== s2) {
        if (n2 < s2) for (let t4 = 0; t4 < s2 - n2; t4++) this.#Re.append(this.#Re.firstChild);
        else if (n2 > s2) for (let t4 = 0; t4 < n2 - s2; t4++) this.#Re.firstChild.before(this.#Re.lastChild);
        let t3 = 0;
        for (const i3 of e2) {
          const e3 = this.#ke[t3++].getAttribute("data-resizer-name");
          i3.setAttribute("data-l10n-id", Ut._l10nResizer[e3]);
        }
      }
      this.#mi(0), this.#$e = true, this.#Re.firstChild.focus({ focusVisible: true }), t2.preventDefault(), t2.stopImmediatePropagation();
    }
    #ui(t2) {
      Ut._resizerKeyboardManager.exec(this, t2);
    }
    #pi(t2) {
      this.#$e && t2.relatedTarget?.parentNode !== this.#Re && this.#Qe();
    }
    #gi(t2) {
      this.#Ne = this.#$e ? t2 : "";
    }
    #mi(t2) {
      if (this.#ke) for (const e2 of this.#ke) e2.tabIndex = t2;
    }
    _resizeWithKeyboard(t2, e2) {
      this.#$e && this.#si(this.#Ne, { deltaX: t2, deltaY: e2, fromKeyboard: true });
    }
    #Qe() {
      this.#$e = false, this.#mi(-1), this.#ni();
    }
    _stopResizingWithKeyboard() {
      this.#Qe(), this.div.focus();
    }
    select() {
      this.isSelected && this._editToolbar ? this._editToolbar.show() : (this.isSelected = true, this.makeResizable(), this.div?.classList.add("selectedEditor"), this._editToolbar ? (this._editToolbar?.show(), this.#o?.toggleAltTextBadge(false)) : this.addEditToolbar().then(() => {
        this.div?.classList.contains("selectedEditor") && this._editToolbar?.show();
      }));
    }
    focus() {
      this.div && !this.div.contains(document.activeElement) && setTimeout(() => this.div?.focus({ preventScroll: true }), 0);
    }
    unselect() {
      this.isSelected && (this.isSelected = false, this.#Re?.classList.add("hidden"), this.div?.classList.remove("selectedEditor"), this.div?.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({ preventScroll: true }), this._editToolbar?.hide(), this.#o?.toggleAltTextBadge(true), this.hasComment && this._uiManager.toggleComment(this, false, false));
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
      this.canChangeContent && (this.enableEditMode(), this.div.focus());
    }
    dblclick(t2) {
      "BUTTON" !== t2.target.nodeName && (this.enterInEditMode(), this.parent.updateToolbar({ mode: this.constructor._editorType, editId: this.id }));
    }
    getElementForAltText() {
      return this.div;
    }
    get contentDiv() {
      return this.div;
    }
    get isEditing() {
      return this.#He;
    }
    set isEditing(t2) {
      this.#He = t2, this.parent && (t2 ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
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
        return i2 && clearTimeout(i2), i2 = setTimeout(() => {
          this._reportTelemetry(t2), this.#qe.delete(e3), 0 === this.#qe.size && (this.#qe = null);
        }, Ut._telemetryTimeout), void this.#qe.set(e3, i2);
      }
      t2.type ||= this.editorType, this._uiManager._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", data: t2 } });
    }
    show(t2 = this._isVisible) {
      this.div.classList.toggle("hidden", !t2), this._isVisible = t2;
    }
    enable() {
      this.div && (this.div.tabIndex = 0), this.#De = false;
    }
    disable() {
      this.div && (this.div.tabIndex = -1), this.#De = true;
    }
    updateFakeAnnotationElement(t2) {
      if (this.#Fe || this.deleted) return this.deleted ? (this.#Fe.remove(), void (this.#Fe = null)) : void ((this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && this.#Fe.updateEdited({ rect: this.getPDFRect(), popup: this.comment }));
      this.#Fe = t2.addFakeAnnotation(this);
    }
    renderAnnotationElement(t2) {
      if (this.deleted) return t2.hide(), null;
      let e2 = t2.container.querySelector(".annotationContent");
      if (e2) {
        if ("CANVAS" === e2.nodeName) {
          const t3 = e2;
          e2 = document.createElement("div"), e2.classList.add("annotationContent", this.editorType), t3.before(e2);
        }
      } else e2 = document.createElement("div"), e2.classList.add("annotationContent", this.editorType), t2.container.prepend(e2);
      return e2;
    }
    resetAnnotationElement(t2) {
      const { firstChild: e2 } = t2.container;
      "DIV" === e2?.nodeName && e2.classList.contains("annotationContent") && e2.remove();
    }
  }
  class zt extends Ut {
    constructor(t2) {
      super(t2), this.annotationElementId = t2.annotationElementId, this.deleted = true;
    }
    serialize() {
      return this.serializeDeleted();
    }
  }
  const Ht = 3285377520, jt = 4294901760, $t = 65535;
  class Vt {
    constructor(t2) {
      this.h1 = t2 ? 4294967295 & t2 : Ht, this.h2 = t2 ? 4294967295 & t2 : Ht;
    }
    update(t2) {
      let e2, i2;
      if ("string" == typeof t2) {
        e2 = new Uint8Array(2 * t2.length), i2 = 0;
        for (let s3 = 0, n3 = t2.length; s3 < n3; s3++) {
          const n4 = t2.charCodeAt(s3);
          n4 <= 255 ? e2[i2++] = n4 : (e2[i2++] = n4 >>> 8, e2[i2++] = 255 & n4);
        }
      } else {
        if (!ArrayBuffer.isView(t2)) throw new Error("Invalid data format, must be a string or TypedArray.");
        e2 = t2.slice(), i2 = e2.byteLength;
      }
      const s2 = i2 >> 2, n2 = i2 - 4 * s2, r2 = new Uint32Array(e2.buffer, 0, s2);
      let a2 = 0, o2 = 0, l2 = this.h1, h2 = this.h2;
      const c2 = 3432918353, d2 = 461845907, u2 = 11601, p2 = 13715;
      for (let t3 = 0; t3 < s2; t3++) 1 & t3 ? (a2 = r2[t3], a2 = a2 * c2 & jt | a2 * u2 & $t, a2 = a2 << 15 | a2 >>> 17, a2 = a2 * d2 & jt | a2 * p2 & $t, l2 ^= a2, l2 = l2 << 13 | l2 >>> 19, l2 = 5 * l2 + 3864292196) : (o2 = r2[t3], o2 = o2 * c2 & jt | o2 * u2 & $t, o2 = o2 << 15 | o2 >>> 17, o2 = o2 * d2 & jt | o2 * p2 & $t, h2 ^= o2, h2 = h2 << 13 | h2 >>> 19, h2 = 5 * h2 + 3864292196);
      switch (a2 = 0, n2) {
        case 3:
          a2 ^= e2[4 * s2 + 2] << 16;
        case 2:
          a2 ^= e2[4 * s2 + 1] << 8;
        case 1:
          a2 ^= e2[4 * s2], a2 = a2 * c2 & jt | a2 * u2 & $t, a2 = a2 << 15 | a2 >>> 17, a2 = a2 * d2 & jt | a2 * p2 & $t, 1 & s2 ? l2 ^= a2 : h2 ^= a2;
      }
      this.h1 = l2, this.h2 = h2;
    }
    hexdigest() {
      let t2 = this.h1, e2 = this.h2;
      return t2 ^= e2 >>> 1, t2 = 3981806797 * t2 & jt | 36045 * t2 & $t, e2 = 4283543511 * e2 & jt | (2950163797 * (e2 << 16 | t2 >>> 16) & jt) >>> 16, t2 ^= e2 >>> 1, t2 = 444984403 * t2 & jt | 60499 * t2 & $t, e2 = 3301882366 * e2 & jt | (3120437893 * (e2 << 16 | t2 >>> 16) & jt) >>> 16, t2 ^= e2 >>> 1, (t2 >>> 0).toString(16).padStart(8, "0") + (e2 >>> 0).toString(16).padStart(8, "0");
    }
  }
  const Gt = Object.freeze({ map: null, hash: "", transfer: void 0 });
  class Wt {
    #fi = false;
    #bi = null;
    #vi = null;
    #yi = /* @__PURE__ */ new Map();
    constructor() {
      this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
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
      if (void 0 !== e2 && (e2 instanceof Ut && this.#vi.delete(e2.annotationElementId), this.#yi.delete(t2), 0 === this.#yi.size && this.resetModified(), "function" == typeof this.onAnnotationEditor)) {
        for (const t3 of this.#yi.values()) if (t3 instanceof Ut) return;
        this.onAnnotationEditor(null);
      }
    }
    setValue(t2, e2) {
      const i2 = this.#yi.get(t2);
      let s2 = false;
      if (void 0 !== i2) for (const [t3, n2] of Object.entries(e2)) i2[t3] !== n2 && (s2 = true, i2[t3] = n2);
      else s2 = true, this.#yi.set(t2, e2);
      s2 && this.#wi(), e2 instanceof Ut && ((this.#vi ||= /* @__PURE__ */ new Map()).set(e2.annotationElementId, e2), "function" == typeof this.onAnnotationEditor && this.onAnnotationEditor(e2.constructor._type));
    }
    has(t2) {
      return this.#yi.has(t2);
    }
    get size() {
      return this.#yi.size;
    }
    #wi() {
      this.#fi || (this.#fi = true, "function" == typeof this.onSetModified && this.onSetModified());
    }
    resetModified() {
      this.#fi && (this.#fi = false, "function" == typeof this.onResetModified && this.onResetModified());
    }
    get print() {
      return new qt(this);
    }
    get serializable() {
      if (0 === this.#yi.size) return Gt;
      const t2 = /* @__PURE__ */ new Map(), e2 = new Vt(), i2 = [], s2 = /* @__PURE__ */ Object.create(null);
      let n2 = false;
      for (const [i3, r2] of this.#yi) {
        const a2 = r2 instanceof Ut ? r2.serialize(false, s2) : r2;
        a2 && (t2.set(i3, a2), e2.update(`${i3}:${JSON.stringify(a2)}`), n2 ||= !!a2.bitmap);
      }
      if (n2) for (const e3 of t2.values()) e3.bitmap && i2.push(e3.bitmap);
      return t2.size > 0 ? { map: t2, hash: e2.hexdigest(), transfer: i2 } : Gt;
    }
    get editorStats() {
      let t2 = null;
      const e2 = /* @__PURE__ */ new Map();
      let i2 = 0, s2 = 0;
      for (const n2 of this.#yi.values()) {
        if (!(n2 instanceof Ut)) {
          n2.popup && (n2.popup.deleted ? s2 += 1 : i2 += 1);
          continue;
        }
        n2.isCommentDeleted ? s2 += 1 : n2.hasEditedComment && (i2 += 1);
        const r2 = n2.telemetryFinalData;
        if (!r2) continue;
        const { type: a2 } = r2;
        e2.has(a2) || e2.set(a2, Object.getPrototypeOf(n2).constructor), t2 ||= /* @__PURE__ */ Object.create(null);
        const o2 = t2[a2] ||= /* @__PURE__ */ new Map();
        for (const [t3, e3] of Object.entries(r2)) {
          if ("type" === t3) continue;
          let i3 = o2.get(t3);
          i3 || (i3 = /* @__PURE__ */ new Map(), o2.set(t3, i3));
          const s3 = i3.get(e3) ?? 0;
          i3.set(e3, s3 + 1);
        }
      }
      if ((s2 > 0 || i2 > 0) && (t2 ||= /* @__PURE__ */ Object.create(null), t2.comments = { deleted: s2, edited: i2 }), !t2) return null;
      for (const [i3, s3] of e2) t2[i3] = s3.computeTelemetryFinalData(t2[i3]);
      return t2;
    }
    resetModifiedIds() {
      this.#bi = null;
    }
    updateEditor(t2, e2) {
      const i2 = this.#vi?.get(t2);
      return !!i2 && (i2.updateFromAnnotationLayer(e2), true);
    }
    getEditor(t2) {
      return this.#vi?.get(t2) || null;
    }
    get modifiedIds() {
      if (this.#bi) return this.#bi;
      const t2 = [];
      if (this.#vi) for (const e2 of this.#vi.values()) e2.serialize() && t2.push(e2.annotationElementId);
      return this.#bi = { ids: new Set(t2), hash: t2.join(",") };
    }
    [Symbol.iterator]() {
      return this.#yi.entries();
    }
  }
  class qt extends Wt {
    #xi;
    constructor(t2) {
      super();
      const { map: e2, hash: i2, transfer: s2 } = t2.serializable, n2 = structuredClone(e2, s2 ? { transfer: s2 } : null);
      this.#xi = { map: n2, hash: i2, transfer: s2 };
    }
    get print() {
      S("Should not call PrintAnnotationStorage.print");
    }
    get serializable() {
      return this.#xi;
    }
    get modifiedIds() {
      return M(this, "modifiedIds", { ids: /* @__PURE__ */ new Set(), hash: "" });
    }
  }
  class Xt {
    #Ai = /* @__PURE__ */ new Set();
    constructor({ ownerDocument: t2 = globalThis.document, styleElement: e2 = null }) {
      this._document = t2, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
    }
    addNativeFontFace(t2) {
      this.nativeFontFaces.add(t2), this._document.fonts.add(t2);
    }
    removeNativeFontFace(t2) {
      this.nativeFontFaces.delete(t2), this._document.fonts.delete(t2);
    }
    insertRule(t2) {
      this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
      const e2 = this.styleElement.sheet;
      e2.insertRule(t2, e2.cssRules.length);
    }
    clear() {
      for (const t2 of this.nativeFontFaces) this._document.fonts.delete(t2);
      this.nativeFontFaces.clear(), this.#Ai.clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
    }
    async loadSystemFont({ systemFontInfo: t2, disableFontFace: e2, _inspectFont: i2 }) {
      if (t2 && !this.#Ai.has(t2.loadedName)) {
        if (E(!e2, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
          const { loadedName: e3, src: s2, style: n2 } = t2, r2 = new FontFace(e3, s2, n2);
          this.addNativeFontFace(r2);
          try {
            await r2.load(), this.#Ai.add(e3), i2?.(t2);
          } catch {
            _(`Cannot load system font: ${t2.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(r2);
          }
          return;
        }
        S("Not implemented: loadSystemFont without the Font Loading API.");
      }
    }
    async bind(t2) {
      if (t2.attached || t2.missingFile && !t2.systemFontInfo) return;
      if (t2.attached = true, t2.systemFontInfo) return void await this.loadSystemFont(t2);
      if (this.isFontLoadingAPISupported) {
        const e3 = t2.createNativeFontFace();
        if (e3) {
          this.addNativeFontFace(e3);
          try {
            await e3.loaded;
          } catch (i2) {
            throw _(`Failed to load font '${e3.family}': '${i2}'.`), t2.disableFontFace = true, i2;
          }
        }
        return;
      }
      const e2 = t2.createFontFaceRule();
      if (e2) {
        if (this.insertRule(e2), this.isSyncFontLoadingSupported) return;
        await new Promise((e3) => {
          const i2 = this._queueLoadingCallback(e3);
          this._prepareFontLoadEvent(t2, i2);
        });
      }
    }
    get isFontLoadingAPISupported() {
      return M(this, "isFontLoadingAPISupported", !!this._document?.fonts);
    }
    get isSyncFontLoadingSupported() {
      return M(this, "isSyncFontLoadingSupported", a || N.platform.isFirefox);
    }
    _queueLoadingCallback(t2) {
      const { loadingRequests: e2 } = this, i2 = { done: false, complete: function() {
        for (E(!i2.done, "completeRequest() cannot be called twice."), i2.done = true; e2.length > 0 && e2[0].done; ) {
          const t3 = e2.shift();
          setTimeout(t3.callback, 0);
        }
      }, callback: t2 };
      return e2.push(i2), i2;
    }
    get _loadTestFont() {
      return M(this, "_loadTestFont", atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="));
    }
    _prepareFontLoadEvent(t2, e2) {
      function i2(t3, e3) {
        return t3.charCodeAt(e3) << 24 | t3.charCodeAt(e3 + 1) << 16 | t3.charCodeAt(e3 + 2) << 8 | 255 & t3.charCodeAt(e3 + 3);
      }
      function s2(t3, e3, i3, s3) {
        return t3.substring(0, e3) + s3 + t3.substring(e3 + i3);
      }
      let n2, r2;
      const a2 = this._document.createElement("canvas");
      a2.width = 1, a2.height = 1;
      const o2 = a2.getContext("2d");
      let l2 = 0;
      const h2 = `lt${Date.now()}${this.loadTestFontId++}`;
      let c2 = this._loadTestFont;
      c2 = s2(c2, 976, h2.length, h2);
      const d2 = 1482184792;
      let u2 = i2(c2, 16);
      for (n2 = 0, r2 = h2.length - 3; n2 < r2; n2 += 4) u2 = u2 - d2 + i2(h2, n2) | 0;
      var p2;
      n2 < h2.length && (u2 = u2 - d2 + i2(h2 + "XXX", n2) | 0), c2 = s2(c2, 16, 4, (p2 = u2, String.fromCharCode(p2 >> 24 & 255, p2 >> 16 & 255, p2 >> 8 & 255, 255 & p2)));
      const g2 = `@font-face {font-family:"${h2}";src:url(data:font/opentype;base64,${btoa(c2)});}`;
      this.insertRule(g2);
      const m2 = this._document.createElement("div");
      m2.style.visibility = "hidden", m2.style.width = m2.style.height = "10px", m2.style.position = "absolute", m2.style.top = m2.style.left = "0px";
      for (const e3 of [t2.loadedName, h2]) {
        const t3 = this._document.createElement("span");
        t3.textContent = "Hi", t3.style.fontFamily = e3, m2.append(t3);
      }
      this._document.body.append(m2), (function t3(e3, i3) {
        if (++l2 > 30) return _("Load test font never loaded."), void i3();
        o2.font = "30px " + e3, o2.fillText(".", 0, 20), o2.getImageData(0, 0, 1, 1).data[3] > 0 ? i3() : setTimeout(t3.bind(null, e3, i3));
      })(h2, () => {
        m2.remove(), e2.complete();
      });
    }
  }
  class Yt {
    #_i;
    constructor(t2, e2 = null, i2, s2) {
      this.compiledGlyphs = /* @__PURE__ */ Object.create(null), this.#_i = t2, this._inspectFont = e2, i2 && Object.assign(this, i2), s2 && (this.charProcOperatorList = s2);
    }
    createNativeFontFace() {
      if (!this.data || this.disableFontFace) return null;
      let t2;
      if (this.cssFontInfo) {
        const e2 = { weight: this.cssFontInfo.fontWeight };
        this.cssFontInfo.italicAngle && (e2.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t2 = new FontFace(this.cssFontInfo.fontFamily, this.data, e2);
      } else t2 = new FontFace(this.loadedName, this.data, {});
      return this._inspectFont?.(this), t2;
    }
    createFontFaceRule() {
      if (!this.data || this.disableFontFace) return null;
      const t2 = `url(data:${this.mimetype};base64,${q(this.data)});`;
      let e2;
      if (this.cssFontInfo) {
        let i2 = `font-weight: ${this.cssFontInfo.fontWeight};`;
        this.cssFontInfo.italicAngle && (i2 += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e2 = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i2}src:${t2}}`;
      } else e2 = `@font-face {font-family:"${this.loadedName}";src:${t2}}`;
      return this._inspectFont?.(this, t2), e2;
    }
    getPathGenerator(t2, e2) {
      if (void 0 !== this.compiledGlyphs[e2]) return this.compiledGlyphs[e2];
      const i2 = this.loadedName + "_path_" + e2;
      let s2;
      try {
        s2 = t2.get(i2);
      } catch (t3) {
        _(`getPathGenerator - ignoring character: "${t3}".`);
      }
      const n2 = new Path2D(s2 || "");
      return this.fontExtraProperties || t2.delete(i2), this.compiledGlyphs[e2] = n2;
    }
    get black() {
      return this.#_i.black;
    }
    get bold() {
      return this.#_i.bold;
    }
    get disableFontFace() {
      return this.#_i.disableFontFace ?? false;
    }
    get fontExtraProperties() {
      return this.#_i.fontExtraProperties ?? false;
    }
    get isInvalidPDFjsFont() {
      return this.#_i.isInvalidPDFjsFont;
    }
    get isType3Font() {
      return this.#_i.isType3Font;
    }
    get italic() {
      return this.#_i.italic;
    }
    get missingFile() {
      return this.#_i.missingFile;
    }
    get remeasure() {
      return this.#_i.remeasure;
    }
    get vertical() {
      return this.#_i.vertical;
    }
    get ascent() {
      return this.#_i.ascent;
    }
    get defaultWidth() {
      return this.#_i.defaultWidth;
    }
    get descent() {
      return this.#_i.descent;
    }
    get bbox() {
      return this.#_i.bbox;
    }
    get fontMatrix() {
      return this.#_i.fontMatrix;
    }
    get fallbackName() {
      return this.#_i.fallbackName;
    }
    get loadedName() {
      return this.#_i.loadedName;
    }
    get mimetype() {
      return this.#_i.mimetype;
    }
    get name() {
      return this.#_i.name;
    }
    get data() {
      return this.#_i.data;
    }
    clearData() {
      this.#_i.clearData();
    }
    get cssFontInfo() {
      return this.#_i.cssFontInfo;
    }
    get systemFontInfo() {
      return this.#_i.systemFontInfo;
    }
    get defaultVMetrics() {
      return this.#_i.defaultVMetrics;
    }
  }
  function Kt(t2) {
    if ("string" != typeof t2) return null;
    if (t2.endsWith("/")) return t2;
    throw new Error(`Invalid factory url: "${t2}" must include trailing slash.`);
  }
  const Qt = (t2) => "object" == typeof t2 && Number.isInteger(t2?.num) && t2.num >= 0 && Number.isInteger(t2?.gen) && t2.gen >= 0, Jt = function(t2, e2, i2) {
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
  }.bind(null, Qt, (t2) => "object" == typeof t2 && "string" == typeof t2?.name);
  class Zt {
    #Si = /* @__PURE__ */ new Map();
    #Ei = Promise.resolve();
    postMessage(t2, e2) {
      const i2 = { data: structuredClone(t2, e2 ? { transfer: e2 } : null) };
      this.#Ei.then(() => {
        for (const [t3] of this.#Si) t3.call(this, i2);
      });
    }
    addEventListener(t2, e2, i2 = null) {
      let s2 = null;
      if (i2?.signal instanceof AbortSignal) {
        const { signal: n2 } = i2;
        if (n2.aborted) return void _("LoopbackPort - cannot use an `aborted` signal.");
        const r2 = () => this.removeEventListener(t2, e2);
        s2 = () => n2.removeEventListener("abort", r2), n2.addEventListener("abort", r2);
      }
      this.#Si.set(e2, s2);
    }
    removeEventListener(t2, e2) {
      const i2 = this.#Si.get(e2);
      i2?.(), this.#Si.delete(e2);
    }
    terminate() {
      for (const [, t2] of this.#Si) t2?.();
      this.#Si.clear();
    }
  }
  function te() {
  }
  function ee(t2) {
    if (t2 instanceof B || t2 instanceof I || t2 instanceof D || t2 instanceof R || t2 instanceof P) return t2;
    switch (t2 instanceof Error || "object" == typeof t2 && null !== t2 || S('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), t2.name) {
      case "AbortException":
        return new B(t2.message);
      case "InvalidPDFException":
        return new I(t2.message);
      case "PasswordException":
        return new D(t2.message, t2.code);
      case "ResponseException":
        return new R(t2.message, t2.status, t2.missing);
      case "UnknownErrorException":
        return new P(t2.message, t2.details);
    }
    return new P(t2.message, t2.toString());
  }
  class ie {
    #Ci = new AbortController();
    constructor(t2, e2, i2) {
      this.sourceName = t2, this.targetName = e2, this.comObj = i2, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), i2.addEventListener("message", this.#Ti.bind(this), { signal: this.#Ci.signal });
    }
    #Ti({ data: t2 }) {
      if (t2.targetName !== this.sourceName) return;
      if (t2.stream) return void this.#Mi(t2);
      if (t2.callback) {
        const e3 = t2.callbackId, i2 = this.callbackCapabilities[e3];
        if (!i2) throw new Error(`Cannot resolve callback ${e3}`);
        if (delete this.callbackCapabilities[e3], 1 === t2.callback) i2.resolve(t2.data);
        else {
          if (2 !== t2.callback) throw new Error("Unexpected callback case");
          i2.reject(ee(t2.reason));
        }
        return;
      }
      const e2 = this.actionHandler[t2.action];
      if (!e2) throw new Error(`Unknown action from worker: ${t2.action}`);
      if (t2.callbackId) {
        const i2 = this.sourceName, s2 = t2.sourceName, n2 = this.comObj;
        return void Promise.try(e2, t2.data).then(function(e3) {
          n2.postMessage({ sourceName: i2, targetName: s2, callback: 1, callbackId: t2.callbackId, data: e3 });
        }, function(e3) {
          n2.postMessage({ sourceName: i2, targetName: s2, callback: 2, callbackId: t2.callbackId, reason: ee(e3) });
        });
      }
      t2.streamId ? this.#ki(t2) : e2(t2.data);
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
        return this.streamControllers[n2] = { controller: i3, startCall: l2, pullCall: null, cancelCall: null, isClosed: false }, o2.postMessage({ sourceName: r2, targetName: a2, action: t2, streamId: n2, data: e2, desiredSize: i3.desiredSize }, s2), l2.promise;
      }, pull: (t3) => {
        const e3 = Promise.withResolvers();
        return this.streamControllers[n2].pullCall = e3, o2.postMessage({ sourceName: r2, targetName: a2, stream: 6, streamId: n2, desiredSize: t3.desiredSize }), e3.promise;
      }, cancel: (t3) => {
        E(t3 instanceof Error, "cancel must have a valid reason");
        const e3 = Promise.withResolvers();
        return this.streamControllers[n2].cancelCall = e3, this.streamControllers[n2].isClosed = true, o2.postMessage({ sourceName: r2, targetName: a2, stream: 1, streamId: n2, reason: ee(t3) }), e3.promise;
      } }, i2);
    }
    #ki(t2) {
      const e2 = t2.streamId, i2 = this.sourceName, s2 = t2.sourceName, n2 = this.comObj, r2 = this, a2 = this.actionHandler[t2.action], o2 = { enqueue(t3, r3 = 1, a3) {
        if (this.isCancelled) return;
        const o3 = this.desiredSize;
        this.desiredSize -= r3, o3 > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), n2.postMessage({ sourceName: i2, targetName: s2, stream: 4, streamId: e2, chunk: t3 }, a3);
      }, close() {
        this.isCancelled || (this.isCancelled = true, n2.postMessage({ sourceName: i2, targetName: s2, stream: 3, streamId: e2 }), delete r2.streamSinks[e2]);
      }, error(t3) {
        E(t3 instanceof Error, "error must have a valid reason"), this.isCancelled || (this.isCancelled = true, n2.postMessage({ sourceName: i2, targetName: s2, stream: 5, streamId: e2, reason: ee(t3) }));
      }, sinkCapability: Promise.withResolvers(), onPull: null, onCancel: null, isCancelled: false, desiredSize: t2.desiredSize, ready: null };
      o2.sinkCapability.resolve(), o2.ready = o2.sinkCapability.promise, this.streamSinks[e2] = o2, Promise.try(a2, t2.data, o2).then(function() {
        n2.postMessage({ sourceName: i2, targetName: s2, stream: 8, streamId: e2, success: true });
      }, function(t3) {
        n2.postMessage({ sourceName: i2, targetName: s2, stream: 8, streamId: e2, reason: ee(t3) });
      });
    }
    #Mi(t2) {
      const e2 = t2.streamId, i2 = this.sourceName, s2 = t2.sourceName, n2 = this.comObj, r2 = this.streamControllers[e2], a2 = this.streamSinks[e2];
      switch (t2.stream) {
        case 8:
          t2.success ? r2.startCall.resolve() : r2.startCall.reject(ee(t2.reason));
          break;
        case 7:
          t2.success ? r2.pullCall.resolve() : r2.pullCall.reject(ee(t2.reason));
          break;
        case 6:
          if (!a2) {
            n2.postMessage({ sourceName: i2, targetName: s2, stream: 7, streamId: e2, success: true });
            break;
          }
          a2.desiredSize <= 0 && t2.desiredSize > 0 && a2.sinkCapability.resolve(), a2.desiredSize = t2.desiredSize, Promise.try(a2.onPull || te).then(function() {
            n2.postMessage({ sourceName: i2, targetName: s2, stream: 7, streamId: e2, success: true });
          }, function(t3) {
            n2.postMessage({ sourceName: i2, targetName: s2, stream: 7, streamId: e2, reason: ee(t3) });
          });
          break;
        case 4:
          if (E(r2, "enqueue should have stream controller"), r2.isClosed) break;
          r2.controller.enqueue(t2.chunk);
          break;
        case 3:
          if (E(r2, "close should have stream controller"), r2.isClosed) break;
          r2.isClosed = true, r2.controller.close(), this.#Di(r2, e2);
          break;
        case 5:
          E(r2, "error should have stream controller"), r2.controller.error(ee(t2.reason)), this.#Di(r2, e2);
          break;
        case 2:
          t2.success ? r2.cancelCall.resolve() : r2.cancelCall.reject(ee(t2.reason)), this.#Di(r2, e2);
          break;
        case 1:
          if (!a2) break;
          const o2 = ee(t2.reason);
          Promise.try(a2.onCancel || te, o2).then(function() {
            n2.postMessage({ sourceName: i2, targetName: s2, stream: 2, streamId: e2, success: true });
          }, function(t3) {
            n2.postMessage({ sourceName: i2, targetName: s2, stream: 2, streamId: e2, reason: ee(t3) });
          }), a2.sinkCapability.reject(o2), a2.isCancelled = true, delete this.streamSinks[e2];
          break;
        default:
          throw new Error("Unexpected stream case");
      }
    }
    async #Di(t2, e2) {
      await Promise.allSettled([t2.startCall?.promise, t2.pullCall?.promise, t2.cancelCall?.promise]), delete this.streamControllers[e2];
    }
    destroy() {
      this.#Ci?.abort(), this.#Ci = null;
    }
  }
  class se {
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
      t2.canvas.width = e2, t2.canvas.height = i2;
    }
    destroy(t2) {
      if (!t2.canvas) throw new Error("Canvas is not specified");
      t2.canvas.width = 0, t2.canvas.height = 0, t2.canvas = null, t2.context = null;
    }
    _createCanvas(t2, e2) {
      S("Abstract method `_createCanvas` called.");
    }
  }
  class ne extends se {
    constructor({ ownerDocument: t2 = globalThis.document, enableHWA: e2 = false }) {
      super({ enableHWA: e2 }), this._document = t2;
    }
    _createCanvas(t2, e2) {
      const i2 = this._document.createElement("canvas");
      return i2.width = t2, i2.height = e2, i2;
    }
  }
  class re {
    constructor({ baseUrl: t2 = null, isCompressed: e2 = true }) {
      this.baseUrl = t2, this.isCompressed = e2;
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
      S("Abstract method `_fetch` called.");
    }
  }
  class ae extends re {
    async _fetch(t2) {
      const e2 = await J(t2, this.isCompressed ? "arraybuffer" : "text");
      return e2 instanceof ArrayBuffer ? new Uint8Array(e2) : O(e2);
    }
  }
  r(2489);
  class oe {
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
  class le extends oe {
    #Ii;
    #Ri;
    #Li;
    #Bi;
    #Fi;
    #Oi;
    #x = 0;
    constructor({ docId: t2, ownerDocument: e2 = globalThis.document }) {
      super(), this.#Bi = t2, this.#Fi = e2;
    }
    get #_() {
      return this.#Ri ||= /* @__PURE__ */ new Map();
    }
    get #Ni() {
      return this.#Oi ||= /* @__PURE__ */ new Map();
    }
    get #Ui() {
      if (!this.#Li) {
        const t2 = this.#Fi.createElement("div"), { style: e2 } = t2;
        e2.visibility = "hidden", e2.contain = "strict", e2.width = e2.height = 0, e2.position = "absolute", e2.top = e2.left = 0, e2.zIndex = -1;
        const i2 = this.#Fi.createElementNS(K, "svg");
        i2.setAttribute("width", 0), i2.setAttribute("height", 0), this.#Li = this.#Fi.createElementNS(K, "defs"), t2.append(i2), i2.append(this.#Li), this.#Fi.body.append(t2);
      }
      return this.#Li;
    }
    #zi(t2) {
      if (1 === t2.length) {
        const e3 = t2[0], i3 = new Array(256);
        for (let t3 = 0; t3 < 256; t3++) i3[t3] = e3[t3] / 255;
        const s3 = i3.join(",");
        return [s3, s3, s3];
      }
      const [e2, i2, s2] = t2, n2 = new Array(256), r2 = new Array(256), a2 = new Array(256);
      for (let t3 = 0; t3 < 256; t3++) n2[t3] = e2[t3] / 255, r2[t3] = i2[t3] / 255, a2[t3] = s2[t3] / 255;
      return [n2.join(","), r2.join(","), a2.join(",")];
    }
    #Hi(t2) {
      if (void 0 === this.#Ii) {
        this.#Ii = "";
        const t3 = this.#Fi.URL;
        t3 !== this.#Fi.baseURI && (et(t3) ? _('#createUrl: ignore "data:"-URL for performance reasons.') : this.#Ii = T(t3, ""));
      }
      return `url(${this.#Ii}#${t2})`;
    }
    addFilter(t2) {
      if (!t2) return "none";
      let e2 = this.#_.get(t2);
      if (e2) return e2;
      const [i2, s2, n2] = this.#zi(t2), r2 = 1 === t2.length ? i2 : `${i2}${s2}${n2}`;
      if (e2 = this.#_.get(r2), e2) return this.#_.set(t2, e2), e2;
      const a2 = `g_${this.#Bi}_transfer_map_${this.#x++}`, o2 = this.#Hi(a2);
      this.#_.set(t2, o2), this.#_.set(r2, o2);
      const l2 = this.#ji(a2);
      return this.#$i(i2, s2, n2, l2), o2;
    }
    addHCMFilter(t2, e2) {
      const i2 = `${t2}-${e2}`, s2 = "base";
      let n2 = this.#Ni.get(s2);
      if (n2?.key === i2) return n2.url;
      if (n2 ? (n2.filter?.remove(), n2.key = i2, n2.url = "none", n2.filter = null) : (n2 = { key: i2, url: "none", filter: null }, this.#Ni.set(s2, n2)), !t2 || !e2) return n2.url;
      const r2 = this.#Vi(t2);
      t2 = z.makeHexColor(...r2);
      const a2 = this.#Vi(e2);
      if (e2 = z.makeHexColor(...a2), this.#Ui.style.color = "", "#000000" === t2 && "#ffffff" === e2 || t2 === e2) return n2.url;
      const o2 = new Array(256);
      for (let t3 = 0; t3 <= 255; t3++) {
        const e3 = t3 / 255;
        o2[t3] = e3 <= 0.03928 ? e3 / 12.92 : ((e3 + 0.055) / 1.055) ** 2.4;
      }
      const l2 = o2.join(","), h2 = `g_${this.#Bi}_hcm_filter`, c2 = n2.filter = this.#ji(h2);
      this.#$i(l2, l2, l2, c2), this.#Gi(c2);
      const d2 = (t3, e3) => {
        const i3 = r2[t3] / 255, s3 = a2[t3] / 255, n3 = new Array(e3 + 1);
        for (let t4 = 0; t4 <= e3; t4++) n3[t4] = i3 + t4 / e3 * (s3 - i3);
        return n3.join(",");
      };
      return this.#$i(d2(0, 5), d2(1, 5), d2(2, 5), c2), n2.url = this.#Hi(h2), n2.url;
    }
    addAlphaFilter(t2) {
      let e2 = this.#_.get(t2);
      if (e2) return e2;
      const [i2] = this.#zi([t2]), s2 = `alpha_${i2}`;
      if (e2 = this.#_.get(s2), e2) return this.#_.set(t2, e2), e2;
      const n2 = `g_${this.#Bi}_alpha_map_${this.#x++}`, r2 = this.#Hi(n2);
      this.#_.set(t2, r2), this.#_.set(s2, r2);
      const a2 = this.#ji(n2);
      return this.#Wi(i2, a2), r2;
    }
    addLuminosityFilter(t2) {
      let e2, i2, s2 = this.#_.get(t2 || "luminosity");
      if (s2) return s2;
      if (t2 ? ([e2] = this.#zi([t2]), i2 = `luminosity_${e2}`) : i2 = "luminosity", s2 = this.#_.get(i2), s2) return this.#_.set(t2, s2), s2;
      const n2 = `g_${this.#Bi}_luminosity_map_${this.#x++}`, r2 = this.#Hi(n2);
      this.#_.set(t2, r2), this.#_.set(i2, r2);
      const a2 = this.#ji(n2);
      return this.#qi(a2), t2 && this.#Wi(e2, a2), r2;
    }
    addHighlightHCMFilter(t2, e2, i2, s2, n2) {
      const r2 = `${e2}-${i2}-${s2}-${n2}`;
      let a2 = this.#Ni.get(t2);
      if (a2?.key === r2) return a2.url;
      if (a2 ? (a2.filter?.remove(), a2.key = r2, a2.url = "none", a2.filter = null) : (a2 = { key: r2, url: "none", filter: null }, this.#Ni.set(t2, a2)), !e2 || !i2) return a2.url;
      const [o2, l2] = [e2, i2].map(this.#Vi.bind(this));
      let h2 = Math.round(0.2126 * o2[0] + 0.7152 * o2[1] + 0.0722 * o2[2]), c2 = Math.round(0.2126 * l2[0] + 0.7152 * l2[1] + 0.0722 * l2[2]), [d2, u2] = [s2, n2].map(this.#Vi.bind(this));
      c2 < h2 && ([h2, c2, d2, u2] = [c2, h2, u2, d2]), this.#Ui.style.color = "";
      const p2 = (t3, e3, i3) => {
        const s3 = new Array(256), n3 = (c2 - h2) / i3, r3 = t3 / 255, a3 = (e3 - t3) / (255 * i3);
        let o3 = 0;
        for (let t4 = 0; t4 <= i3; t4++) {
          const e4 = Math.round(h2 + t4 * n3), i4 = r3 + t4 * a3;
          for (let t5 = o3; t5 <= e4; t5++) s3[t5] = i4;
          o3 = e4 + 1;
        }
        for (let t4 = o3; t4 < 256; t4++) s3[t4] = s3[o3 - 1];
        return s3.join(",");
      }, g2 = `g_${this.#Bi}_hcm_${t2}_filter`, m2 = a2.filter = this.#ji(g2);
      return this.#Gi(m2), this.#$i(p2(d2[0], u2[0], 5), p2(d2[1], u2[1], 5), p2(d2[2], u2[2], 5), m2), a2.url = this.#Hi(g2), a2.url;
    }
    destroy(t2 = false) {
      t2 && this.#Oi?.size || (this.#Li?.parentNode.parentNode.remove(), this.#Li = null, this.#Ri?.clear(), this.#Ri = null, this.#Oi?.clear(), this.#Oi = null, this.#x = 0);
    }
    #qi(t2) {
      const e2 = this.#Fi.createElementNS(K, "feColorMatrix");
      e2.setAttribute("type", "matrix"), e2.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), t2.append(e2);
    }
    #Gi(t2) {
      const e2 = this.#Fi.createElementNS(K, "feColorMatrix");
      e2.setAttribute("type", "matrix"), e2.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), t2.append(e2);
    }
    #ji(t2) {
      const e2 = this.#Fi.createElementNS(K, "filter");
      return e2.setAttribute("color-interpolation-filters", "sRGB"), e2.setAttribute("id", t2), this.#Ui.append(e2), e2;
    }
    #Xi(t2, e2, i2) {
      const s2 = this.#Fi.createElementNS(K, e2);
      s2.setAttribute("type", "discrete"), s2.setAttribute("tableValues", i2), t2.append(s2);
    }
    #$i(t2, e2, i2, s2) {
      const n2 = this.#Fi.createElementNS(K, "feComponentTransfer");
      s2.append(n2), this.#Xi(n2, "feFuncR", t2), this.#Xi(n2, "feFuncG", e2), this.#Xi(n2, "feFuncB", i2);
    }
    #Wi(t2, e2) {
      const i2 = this.#Fi.createElementNS(K, "feComponentTransfer");
      e2.append(i2), this.#Xi(i2, "feFuncA", t2);
    }
    #Vi(t2) {
      return this.#Ui.style.color = t2, dt(getComputedStyle(this.#Ui).getPropertyValue("color"));
    }
  }
  class he {
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
      S("Abstract method `_fetch` called.");
    }
  }
  class ce extends he {
    async _fetch(t2) {
      const e2 = await J(t2, "arraybuffer");
      return new Uint8Array(e2);
    }
  }
  class de {
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
      S("Abstract method `_fetch` called.");
    }
  }
  class ue extends de {
    async _fetch(t2) {
      const e2 = await J(t2, "arraybuffer");
      return new Uint8Array(e2);
    }
  }
  if (a) {
    let t2;
    try {
      const e2 = process.getBuiltinModule("module").createRequire(e2("url").pathToFileURL(__filename).href);
      try {
        t2 = e2("@napi-rs/canvas");
      } catch (t3) {
        _(`Cannot load "@napi-rs/canvas" package: "${t3}".`);
      }
    } catch (t3) {
      _(`Cannot access the \`require\` function: "${t3}".`);
    }
    globalThis.DOMMatrix || (t2?.DOMMatrix ? globalThis.DOMMatrix = t2.DOMMatrix : _("Cannot polyfill `DOMMatrix`, rendering may be broken.")), globalThis.ImageData || (t2?.ImageData ? globalThis.ImageData = t2.ImageData : _("Cannot polyfill `ImageData`, rendering may be broken.")), globalThis.Path2D || (t2?.Path2D ? globalThis.Path2D = t2.Path2D : _("Cannot polyfill `Path2D`, rendering may be broken.")), globalThis.navigator?.language || (globalThis.navigator = { language: "en-US", platform: "", userAgent: "" });
  }
  async function pe(t2) {
    const e2 = process.getBuiltinModule("fs"), i2 = await e2.promises.readFile(t2);
    return new Uint8Array(i2);
  }
  class ge extends oe {
  }
  class me extends se {
    _createCanvas(t2, e2) {
      const i2 = process.getBuiltinModule("module").createRequire(i2("url").pathToFileURL(__filename).href);
      return i2("@napi-rs/canvas").createCanvas(t2, e2);
    }
  }
  class fe extends re {
    async _fetch(t2) {
      return pe(t2);
    }
  }
  class be extends he {
    async _fetch(t2) {
      return pe(t2);
    }
  }
  class ve extends de {
    async _fetch(t2) {
      return pe(t2);
    }
  }
  r(7588);
  const ye = "__forcedDependency", { floor: we, ceil: xe } = Math;
  function Ae(t2, e2, i2, s2, n2, r2) {
    t2[4 * e2 + 0] = Math.min(t2[4 * e2 + 0], i2), t2[4 * e2 + 1] = Math.min(t2[4 * e2 + 1], s2), t2[4 * e2 + 2] = Math.max(t2[4 * e2 + 2], n2), t2[4 * e2 + 3] = Math.max(t2[4 * e2 + 3], r2);
  }
  const _e = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
  class Se {
    #Yi;
    #Ki;
    constructor(t2, e2) {
      this.#Yi = t2, this.#Ki = e2;
    }
    get length() {
      return this.#Yi.length;
    }
    isEmpty(t2) {
      return this.#Yi[t2] === _e;
    }
    minX(t2) {
      return this.#Ki[4 * t2 + 0] / 256;
    }
    minY(t2) {
      return this.#Ki[4 * t2 + 1] / 256;
    }
    maxX(t2) {
      return (this.#Ki[4 * t2 + 2] + 1) / 256;
    }
    maxY(t2) {
      return (this.#Ki[4 * t2 + 3] + 1) / 256;
    }
  }
  const Ee = (t2, e2) => {
    if (!t2) return;
    let i2 = t2.get(e2);
    return i2 || (i2 = { dependencies: /* @__PURE__ */ new Set(), isRenderingOperation: false }, t2.set(e2, i2)), i2;
  };
  class Ce {
    #Qi = { __proto__: null };
    #Ji = { __proto__: null, transform: [], moveText: [], sameLineText: [], [ye]: [] };
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
    #cs;
    #ds;
    #Yi;
    #us;
    constructor(t2, e2, i2 = false) {
      this.#hs = t2.width, this.#cs = t2.height, this.#ps(e2), i2 && (this.#us = /* @__PURE__ */ new Map());
    }
    growOperationsCount(t2) {
      t2 >= this.#Yi.length && this.#ps(t2, this.#Yi);
    }
    #ps(t2, e2) {
      const i2 = new ArrayBuffer(4 * t2);
      this.#ds = new Uint8ClampedArray(i2), this.#Yi = new Uint32Array(i2), e2 && e2.length > 0 ? (this.#Yi.set(e2), this.#Yi.fill(_e, e2.length)) : this.#Yi.fill(_e);
    }
    save(t2) {
      return this.#Qi = { __proto__: this.#Qi }, this.#Ji = { __proto__: this.#Ji, transform: { __proto__: this.#Ji.transform }, moveText: { __proto__: this.#Ji.moveText }, sameLineText: { __proto__: this.#Ji.sameLineText }, [ye]: { __proto__: this.#Ji[ye] } }, this.#ss = { __proto__: this.#ss }, this.#ts.push(t2), this;
    }
    restore(t2) {
      const e2 = Object.getPrototypeOf(this.#Qi);
      if (null === e2) return this;
      this.#Qi = e2, this.#Ji = Object.getPrototypeOf(this.#Ji), this.#ss = Object.getPrototypeOf(this.#ss);
      const i2 = this.#ts.pop();
      return void 0 !== i2 && (Ee(this.#us, t2)?.dependencies.add(i2), this.#Yi[t2] = this.#Yi[i2]), this;
    }
    recordOpenMarker(t2) {
      return this.#ts.push(t2), this;
    }
    getOpenMarker() {
      return 0 === this.#ts.length ? null : this.#ts.at(-1);
    }
    recordCloseMarker(t2) {
      const e2 = this.#ts.pop();
      return void 0 !== e2 && (Ee(this.#us, t2)?.dependencies.add(e2), this.#Yi[t2] = this.#Yi[e2]), this;
    }
    beginMarkedContent(t2) {
      return this.#es.push(t2), this;
    }
    endMarkedContent(t2) {
      const e2 = this.#es.pop();
      return void 0 !== e2 && (Ee(this.#us, t2)?.dependencies.add(e2), this.#Yi[t2] = this.#Yi[e2]), this;
    }
    pushBaseTransform(t2) {
      return this.#is.push(z.multiplyByDOMMatrix(this.#is.at(-1), t2.getTransform())), this;
    }
    popBaseTransform() {
      return this.#is.length > 1 && this.#is.pop(), this;
    }
    recordSimpleData(t2, e2) {
      return this.#Qi[t2] = e2, this;
    }
    recordIncrementalData(t2, e2) {
      return this.#Ji[t2].push(e2), this;
    }
    resetIncrementalData(t2, e2) {
      return this.#Ji[t2].length = 0, this;
    }
    recordNamedData(t2, e2) {
      return this.#Zi.set(t2, e2), this;
    }
    recordSimpleDataFromNamed(t2, e2, i2) {
      this.#Qi[t2] = this.#Zi.get(e2) ?? i2;
    }
    recordFutureForcedDependency(t2, e2) {
      return this.recordIncrementalData(ye, e2), this;
    }
    inheritSimpleDataAsFutureForcedDependencies(t2) {
      for (const e2 of t2) e2 in this.#Qi && this.recordFutureForcedDependency(e2, this.#Qi[e2]);
      return this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
      for (const t2 of this.#as) this.recordFutureForcedDependency(ye, t2);
      return this;
    }
    resetBBox(t2) {
      return this.#rs !== t2 && (this.#rs = t2, this.#ns[0] = 1 / 0, this.#ns[1] = 1 / 0, this.#ns[2] = -1 / 0, this.#ns[3] = -1 / 0), this;
    }
    recordClipBox(t2, e2, i2, s2, n2, r2) {
      const a2 = z.multiplyByDOMMatrix(this.#is.at(-1), e2.getTransform()), o2 = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      z.axialAlignedBoundingBox([i2, n2, s2, r2], a2, o2);
      const l2 = z.intersect(this.#ss, o2);
      return l2 ? (this.#ss[0] = l2[0], this.#ss[1] = l2[1], this.#ss[2] = l2[2], this.#ss[3] = l2[3]) : (this.#ss[0] = this.#ss[1] = 1 / 0, this.#ss[2] = this.#ss[3] = -1 / 0), this;
    }
    recordBBox(t2, e2, i2, s2, n2, r2) {
      const a2 = this.#ss;
      if (a2[0] === 1 / 0) return this;
      const o2 = z.multiplyByDOMMatrix(this.#is.at(-1), e2.getTransform());
      if (a2[0] === -1 / 0) return z.axialAlignedBoundingBox([i2, n2, s2, r2], o2, this.#ns), this;
      const l2 = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      return z.axialAlignedBoundingBox([i2, n2, s2, r2], o2, l2), this.#ns[0] = Math.min(this.#ns[0], Math.max(l2[0], a2[0])), this.#ns[1] = Math.min(this.#ns[1], Math.max(l2[1], a2[1])), this.#ns[2] = Math.max(this.#ns[2], Math.min(l2[2], a2[2])), this.#ns[3] = Math.max(this.#ns[3], Math.min(l2[3], a2[3])), this;
    }
    recordCharacterBBox(t2, e2, i2, s2 = 1, n2 = 0, r2 = 0, a2) {
      const o2 = i2.bbox;
      let l2, h2;
      if (o2 && (l2 = o2[2] !== o2[0] && o2[3] !== o2[1] && this.#ls.get(i2), false !== l2 && (h2 = [0, 0, 0, 0], z.axialAlignedBoundingBox(o2, i2.fontMatrix, h2), 1 === s2 && 0 === n2 && 0 === r2 || z.scaleMinMax([s2, 0, 0, -s2, n2, r2], h2), l2))) return this.recordBBox(t2, e2, h2[0], h2[2], h2[1], h2[3]);
      if (!a2) return this.recordFullPageBBox(t2);
      const c2 = a2();
      return o2 && h2 && void 0 === l2 && (l2 = h2[0] <= n2 - c2.actualBoundingBoxLeft && h2[2] >= n2 + c2.actualBoundingBoxRight && h2[1] <= r2 - c2.actualBoundingBoxAscent && h2[3] >= r2 + c2.actualBoundingBoxDescent, this.#ls.set(i2, l2), l2) ? this.recordBBox(t2, e2, h2[0], h2[2], h2[1], h2[3]) : this.recordBBox(t2, e2, n2 - c2.actualBoundingBoxLeft, n2 + c2.actualBoundingBoxRight, r2 - c2.actualBoundingBoxAscent, r2 + c2.actualBoundingBoxDescent);
    }
    recordFullPageBBox(t2) {
      return this.#ns[0] = Math.max(0, this.#ss[0]), this.#ns[1] = Math.max(0, this.#ss[1]), this.#ns[2] = Math.min(this.#hs, this.#ss[2]), this.#ns[3] = Math.min(this.#cs, this.#ss[3]), this;
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
      return this.#Zi.has(e2) && this.#as.add(this.#Zi.get(e2)), this;
    }
    recordOperation(t2, e2 = false) {
      if (this.recordDependencies(t2, [ye]), this.#us) {
        const e3 = Ee(this.#us, t2), { dependencies: i2 } = e3;
        this.#as.forEach(i2.add, i2), this.#ts.forEach(i2.add, i2), this.#es.forEach(i2.add, i2), i2.delete(t2), e3.isRenderingOperation = true;
      }
      if (this.#rs === t2) {
        const i2 = we(256 * this.#ns[0] / this.#hs), s2 = we(256 * this.#ns[1] / this.#cs), n2 = xe(256 * this.#ns[2] / this.#hs), r2 = xe(256 * this.#ns[3] / this.#cs);
        Ae(this.#ds, t2, i2, s2, n2, r2);
        for (const e3 of this.#as) e3 !== t2 && Ae(this.#ds, e3, i2, s2, n2, r2);
        for (const e3 of this.#ts) e3 !== t2 && Ae(this.#ds, e3, i2, s2, n2, r2);
        for (const e3 of this.#es) e3 !== t2 && Ae(this.#ds, e3, i2, s2, n2, r2);
        e2 || (this.#as.clear(), this.#rs = -1);
      }
      return this;
    }
    recordShowTextOperation(t2, e2 = false) {
      const i2 = Array.from(this.#as);
      this.recordOperation(t2, e2), this.recordIncrementalData("sameLineText", t2);
      for (const t3 of i2) this.recordIncrementalData("sameLineText", t3);
      return this;
    }
    bboxToClipBoxDropOperation(t2, e2 = false) {
      return this.#rs === t2 && (this.#rs = -1, this.#ss[0] = Math.max(this.#ss[0], this.#ns[0]), this.#ss[1] = Math.max(this.#ss[1], this.#ns[1]), this.#ss[2] = Math.min(this.#ss[2], this.#ns[2]), this.#ss[3] = Math.min(this.#ss[3], this.#ns[3]), e2 || this.#as.clear()), this;
    }
    _takePendingDependencies() {
      const t2 = this.#as;
      return this.#as = /* @__PURE__ */ new Set(), t2;
    }
    _extractOperation(t2) {
      const e2 = this.#os.get(t2);
      return this.#os.delete(t2), e2;
    }
    _pushPendingDependencies(t2) {
      for (const e2 of t2) this.#as.add(e2);
    }
    take() {
      return this.#ls.clear(), new Se(this.#Yi, this.#ds);
    }
    takeDebugMetadata() {
      return this.#us;
    }
  }
  class Te {
    #gs;
    #ms;
    #fs;
    #bs = 0;
    #vs = 0;
    constructor(t2, e2, i2) {
      if (t2 instanceof Te && t2.#fs === !!i2) return t2;
      this.#gs = t2, this.#ms = e2, this.#fs = !!i2;
    }
    growOperationsCount() {
      throw new Error("Unreachable");
    }
    save(t2) {
      return this.#vs++, this.#gs.save(this.#ms), this;
    }
    restore(t2) {
      return this.#vs > 0 && (this.#gs.restore(this.#ms), this.#vs--), this;
    }
    recordOpenMarker(t2) {
      return this.#bs++, this;
    }
    getOpenMarker() {
      return this.#bs > 0 ? this.#ms : this.#gs.getOpenMarker();
    }
    recordCloseMarker(t2) {
      return this.#bs--, this;
    }
    beginMarkedContent(t2) {
      return this;
    }
    endMarkedContent(t2) {
      return this;
    }
    pushBaseTransform(t2) {
      return this.#gs.pushBaseTransform(t2), this;
    }
    popBaseTransform() {
      return this.#gs.popBaseTransform(), this;
    }
    recordSimpleData(t2, e2) {
      return this.#gs.recordSimpleData(t2, this.#ms), this;
    }
    recordIncrementalData(t2, e2) {
      return this.#gs.recordIncrementalData(t2, this.#ms), this;
    }
    resetIncrementalData(t2, e2) {
      return this.#gs.resetIncrementalData(t2, this.#ms), this;
    }
    recordNamedData(t2, e2) {
      return this;
    }
    recordSimpleDataFromNamed(t2, e2, i2) {
      return this.#gs.recordSimpleDataFromNamed(t2, e2, this.#ms), this;
    }
    recordFutureForcedDependency(t2, e2) {
      return this.#gs.recordFutureForcedDependency(t2, this.#ms), this;
    }
    inheritSimpleDataAsFutureForcedDependencies(t2) {
      return this.#gs.inheritSimpleDataAsFutureForcedDependencies(t2), this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
      return this.#gs.inheritPendingDependenciesAsFutureForcedDependencies(), this;
    }
    resetBBox(t2) {
      return this.#fs || this.#gs.resetBBox(this.#ms), this;
    }
    recordClipBox(t2, e2, i2, s2, n2, r2) {
      return this.#fs || this.#gs.recordClipBox(this.#ms, e2, i2, s2, n2, r2), this;
    }
    recordBBox(t2, e2, i2, s2, n2, r2) {
      return this.#fs || this.#gs.recordBBox(this.#ms, e2, i2, s2, n2, r2), this;
    }
    recordCharacterBBox(t2, e2, i2, s2, n2, r2, a2) {
      return this.#fs || this.#gs.recordCharacterBBox(this.#ms, e2, i2, s2, n2, r2, a2), this;
    }
    recordFullPageBBox(t2) {
      return this.#fs || this.#gs.recordFullPageBBox(this.#ms), this;
    }
    getSimpleIndex(t2) {
      return this.#gs.getSimpleIndex(t2);
    }
    recordDependencies(t2, e2) {
      return this.#gs.recordDependencies(this.#ms, e2), this;
    }
    recordNamedDependency(t2, e2) {
      return this.#gs.recordNamedDependency(this.#ms, e2), this;
    }
    recordOperation(t2) {
      return this.#gs.recordOperation(this.#ms, true), this;
    }
    recordShowTextOperation(t2) {
      return this.#gs.recordShowTextOperation(this.#ms, true), this;
    }
    bboxToClipBoxDropOperation(t2) {
      return this.#fs || this.#gs.bboxToClipBoxDropOperation(this.#ms, true), this;
    }
    take() {
      throw new Error("Unreachable");
    }
    takeDebugMetadata() {
      throw new Error("Unreachable");
    }
  }
  const Me = ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"], ke = ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"], De = ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"], Pe = ["filter", "fillColor", "fillAlpha"], Ie = ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"], Re = ["transform"], Le = ["transform", "fillColor"], Be = "Fill", Fe = "Stroke", Oe = "Shading";
  function Ne(t2, e2) {
    if (!e2) return;
    const i2 = e2[2] - e2[0], s2 = e2[3] - e2[1], n2 = new Path2D();
    n2.rect(e2[0], e2[1], i2, s2), t2.clip(n2);
  }
  class Ue {
    isModifyingCurrentTransform() {
      return false;
    }
    getPattern() {
      S("Abstract method `getPattern` called.");
    }
  }
  class ze extends Ue {
    constructor(t2) {
      super(), this._type = t2[1], this._bbox = t2[2], this._colorStops = t2[3], this._p0 = t2[4], this._p1 = t2[5], this._r0 = t2[6], this._r1 = t2[7], this.matrix = null;
    }
    _createGradient(t2) {
      let e2;
      "axial" === this._type ? e2 = t2.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : "radial" === this._type && (e2 = t2.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
      for (const t3 of this._colorStops) e2.addColorStop(t3[0], t3[1]);
      return e2;
    }
    getPattern(t2, e2, i2, s2) {
      let n2;
      if (s2 === Fe || s2 === Be) {
        const r2 = e2.current.getClippedPathBoundingBox(s2, ut(t2)) || [0, 0, 0, 0], a2 = Math.ceil(r2[2] - r2[0]) || 1, o2 = Math.ceil(r2[3] - r2[1]) || 1, l2 = e2.cachedCanvases.getCanvas("pattern", a2, o2), h2 = l2.context;
        h2.clearRect(0, 0, h2.canvas.width, h2.canvas.height), h2.beginPath(), h2.rect(0, 0, h2.canvas.width, h2.canvas.height), h2.translate(-r2[0], -r2[1]), i2 = z.transform(i2, [1, 0, 0, 1, r2[0], r2[1]]), h2.transform(...e2.baseTransform), this.matrix && h2.transform(...this.matrix), Ne(h2, this._bbox), h2.fillStyle = this._createGradient(h2), h2.fill(), n2 = t2.createPattern(l2.canvas, "no-repeat");
        const c2 = new DOMMatrix(i2);
        n2.setTransform(c2);
      } else Ne(t2, this._bbox), n2 = this._createGradient(t2);
      return n2;
    }
  }
  function He(t2, e2, i2, s2, n2, r2, a2, o2) {
    const l2 = e2.coords, h2 = e2.colors, c2 = t2.data, d2 = 4 * t2.width;
    let u2;
    l2[i2 + 1] > l2[s2 + 1] && (u2 = i2, i2 = s2, s2 = u2, u2 = r2, r2 = a2, a2 = u2), l2[s2 + 1] > l2[n2 + 1] && (u2 = s2, s2 = n2, n2 = u2, u2 = a2, a2 = o2, o2 = u2), l2[i2 + 1] > l2[s2 + 1] && (u2 = i2, i2 = s2, s2 = u2, u2 = r2, r2 = a2, a2 = u2);
    const p2 = (l2[i2] + e2.offsetX) * e2.scaleX, g2 = (l2[i2 + 1] + e2.offsetY) * e2.scaleY, m2 = (l2[s2] + e2.offsetX) * e2.scaleX, f2 = (l2[s2 + 1] + e2.offsetY) * e2.scaleY, b2 = (l2[n2] + e2.offsetX) * e2.scaleX, v2 = (l2[n2 + 1] + e2.offsetY) * e2.scaleY;
    if (g2 >= v2) return;
    const y2 = h2[r2], w2 = h2[r2 + 1], x2 = h2[r2 + 2], A2 = h2[a2], _2 = h2[a2 + 1], S2 = h2[a2 + 2], E2 = h2[o2], C2 = h2[o2 + 1], T2 = h2[o2 + 2], M2 = Math.round(g2), k2 = Math.round(v2);
    let D2, P2, I2, R2, L2, B2, F2, O2;
    for (let t3 = M2; t3 <= k2; t3++) {
      if (t3 < f2) {
        const e4 = t3 < g2 ? 0 : (g2 - t3) / (g2 - f2);
        D2 = p2 - (p2 - m2) * e4, P2 = y2 - (y2 - A2) * e4, I2 = w2 - (w2 - _2) * e4, R2 = x2 - (x2 - S2) * e4;
      } else {
        let e4;
        e4 = t3 > v2 ? 1 : f2 === v2 ? 0 : (f2 - t3) / (f2 - v2), D2 = m2 - (m2 - b2) * e4, P2 = A2 - (A2 - E2) * e4, I2 = _2 - (_2 - C2) * e4, R2 = S2 - (S2 - T2) * e4;
      }
      let e3;
      e3 = t3 < g2 ? 0 : t3 > v2 ? 1 : (g2 - t3) / (g2 - v2), L2 = p2 - (p2 - b2) * e3, B2 = y2 - (y2 - E2) * e3, F2 = w2 - (w2 - C2) * e3, O2 = x2 - (x2 - T2) * e3;
      const i3 = Math.round(Math.min(D2, L2)), s3 = Math.round(Math.max(D2, L2));
      let n3 = d2 * t3 + 4 * i3;
      for (let t4 = i3; t4 <= s3; t4++) e3 = (D2 - t4) / (D2 - L2), e3 < 0 ? e3 = 0 : e3 > 1 && (e3 = 1), c2[n3++] = P2 - (P2 - B2) * e3 | 0, c2[n3++] = I2 - (I2 - F2) * e3 | 0, c2[n3++] = R2 - (R2 - O2) * e3 | 0, c2[n3++] = 255;
    }
  }
  function je(t2, e2, i2) {
    const s2 = e2.coords, n2 = e2.colors;
    let r2, a2;
    switch (e2.type) {
      case "lattice":
        const o2 = e2.verticesPerRow, l2 = Math.floor(s2.length / o2) - 1, h2 = o2 - 1;
        for (r2 = 0; r2 < l2; r2++) {
          let e3 = r2 * o2;
          for (let r3 = 0; r3 < h2; r3++, e3++) He(t2, i2, s2[e3], s2[e3 + 1], s2[e3 + o2], n2[e3], n2[e3 + 1], n2[e3 + o2]), He(t2, i2, s2[e3 + o2 + 1], s2[e3 + 1], s2[e3 + o2], n2[e3 + o2 + 1], n2[e3 + 1], n2[e3 + o2]);
        }
        break;
      case "triangles":
        for (r2 = 0, a2 = s2.length; r2 < a2; r2 += 3) He(t2, i2, s2[r2], s2[r2 + 1], s2[r2 + 2], n2[r2], n2[r2 + 1], n2[r2 + 2]);
        break;
      default:
        throw new Error("illegal figure");
    }
  }
  class $e extends Ue {
    constructor(t2) {
      super(), this._coords = t2[2], this._colors = t2[3], this._figures = t2[4], this._bounds = t2[5], this._bbox = t2[6], this._background = t2[7], this.matrix = null;
    }
    _createMeshCanvas(t2, e2, i2) {
      const s2 = Math.floor(this._bounds[0]), n2 = Math.floor(this._bounds[1]), r2 = Math.ceil(this._bounds[2]) - s2, a2 = Math.ceil(this._bounds[3]) - n2, o2 = Math.min(Math.ceil(Math.abs(r2 * t2[0] * 1.1)), 3e3), l2 = Math.min(Math.ceil(Math.abs(a2 * t2[1] * 1.1)), 3e3), h2 = r2 / o2, c2 = a2 / l2, d2 = { coords: this._coords, colors: this._colors, offsetX: -s2, offsetY: -n2, scaleX: 1 / h2, scaleY: 1 / c2 }, u2 = o2 + 4, p2 = l2 + 4, g2 = i2.getCanvas("mesh", u2, p2), m2 = g2.context, f2 = m2.createImageData(o2, l2);
      if (e2) {
        const t3 = f2.data;
        for (let i3 = 0, s3 = t3.length; i3 < s3; i3 += 4) t3[i3] = e2[0], t3[i3 + 1] = e2[1], t3[i3 + 2] = e2[2], t3[i3 + 3] = 255;
      }
      for (const t3 of this._figures) je(f2, t3, d2);
      return m2.putImageData(f2, 2, 2), { canvas: g2.canvas, offsetX: s2 - 2 * h2, offsetY: n2 - 2 * c2, scaleX: h2, scaleY: c2 };
    }
    isModifyingCurrentTransform() {
      return true;
    }
    getPattern(t2, e2, i2, s2) {
      Ne(t2, this._bbox);
      const n2 = new Float32Array(2);
      if (s2 === Oe) z.singularValueDecompose2dScale(ut(t2), n2);
      else if (this.matrix) {
        z.singularValueDecompose2dScale(this.matrix, n2);
        const [t3, i3] = n2;
        z.singularValueDecompose2dScale(e2.baseTransform, n2), n2[0] *= t3, n2[1] *= i3;
      } else z.singularValueDecompose2dScale(e2.baseTransform, n2);
      const r2 = this._createMeshCanvas(n2, s2 === Oe ? null : this._background, e2.cachedCanvases);
      return s2 !== Oe && (t2.setTransform(...e2.baseTransform), this.matrix && t2.transform(...this.matrix)), t2.translate(r2.offsetX, r2.offsetY), t2.scale(r2.scaleX, r2.scaleY), t2.createPattern(r2.canvas, "no-repeat");
    }
  }
  class Ve extends Ue {
    getPattern() {
      return "hotpink";
    }
  }
  class Ge {
    static MAX_PATTERN_SIZE = 3e3;
    constructor(t2, e2, i2, s2) {
      this.color = t2[1], this.operatorList = t2[2], this.matrix = t2[3], this.bbox = t2[4], this.xstep = t2[5], this.ystep = t2[6], this.paintType = t2[7], this.tilingType = t2[8], this.ctx = e2, this.canvasGraphicsFactory = i2, this.baseTransform = s2;
    }
    createPatternCanvas(t2, e2) {
      const { bbox: i2, operatorList: s2, paintType: n2, tilingType: r2, color: a2, canvasGraphicsFactory: o2 } = this;
      let { xstep: l2, ystep: h2 } = this;
      l2 = Math.abs(l2), h2 = Math.abs(h2), A("TilingType: " + r2);
      const c2 = i2[0], d2 = i2[1], u2 = i2[2], p2 = i2[3], g2 = u2 - c2, m2 = p2 - d2, f2 = new Float32Array(2);
      z.singularValueDecompose2dScale(this.matrix, f2);
      const [b2, v2] = f2;
      z.singularValueDecompose2dScale(this.baseTransform, f2);
      const y2 = b2 * f2[0], w2 = v2 * f2[1];
      let x2 = g2, _2 = m2, S2 = false, E2 = false;
      const C2 = Math.ceil(l2 * y2), T2 = Math.ceil(h2 * w2);
      C2 >= Math.ceil(g2 * y2) ? x2 = l2 : S2 = true, T2 >= Math.ceil(m2 * w2) ? _2 = h2 : E2 = true;
      const M2 = this.getSizeAndScale(x2, this.ctx.canvas.width, y2), k2 = this.getSizeAndScale(_2, this.ctx.canvas.height, w2), D2 = t2.cachedCanvases.getCanvas("pattern", M2.size, k2.size), P2 = D2.context, I2 = o2.createCanvasGraphics(P2, e2);
      if (I2.groupLevel = t2.groupLevel, this.setFillAndStrokeStyleToContext(I2, n2, a2), P2.translate(-M2.scale * c2, -k2.scale * d2), I2.transform(0, M2.scale, 0, 0, k2.scale, 0, 0), P2.save(), I2.dependencyTracker?.save(), this.clipBbox(I2, c2, d2, u2, p2), I2.baseTransform = ut(I2.ctx), I2.executeOperatorList(s2), I2.endDrawing(), I2.dependencyTracker?.restore(), P2.restore(), S2 || E2) {
        const e3 = D2.canvas;
        S2 && (x2 = l2), E2 && (_2 = h2);
        const i3 = this.getSizeAndScale(x2, this.ctx.canvas.width, y2), s3 = this.getSizeAndScale(_2, this.ctx.canvas.height, w2), n3 = i3.size, r3 = s3.size, a3 = t2.cachedCanvases.getCanvas("pattern-workaround", n3, r3), o3 = a3.context, u3 = S2 ? Math.floor(g2 / l2) : 0, p3 = E2 ? Math.floor(m2 / h2) : 0;
        for (let t3 = 0; t3 <= u3; t3++) for (let i4 = 0; i4 <= p3; i4++) o3.drawImage(e3, n3 * t3, r3 * i4, n3, r3, 0, 0, n3, r3);
        return { canvas: a3.canvas, scaleX: i3.scale, scaleY: s3.scale, offsetX: c2, offsetY: d2 };
      }
      return { canvas: D2.canvas, scaleX: M2.scale, scaleY: k2.scale, offsetX: c2, offsetY: d2 };
    }
    getSizeAndScale(t2, e2, i2) {
      const s2 = Math.max(Ge.MAX_PATTERN_SIZE, e2);
      let n2 = Math.ceil(t2 * i2);
      return n2 >= s2 ? n2 = s2 : i2 = n2 / t2, { scale: i2, size: n2 };
    }
    clipBbox(t2, e2, i2, s2, n2) {
      const r2 = s2 - e2, a2 = n2 - i2;
      t2.ctx.rect(e2, i2, r2, a2), z.axialAlignedBoundingBox([e2, i2, s2, n2], ut(t2.ctx), t2.current.minMax), t2.clip(), t2.endPath();
    }
    setFillAndStrokeStyleToContext(t2, e2, i2) {
      const s2 = t2.ctx, n2 = t2.current;
      switch (e2) {
        case 1:
          const { fillStyle: t3, strokeStyle: r2 } = this.ctx;
          s2.fillStyle = n2.fillColor = t3, s2.strokeStyle = n2.strokeColor = r2;
          break;
        case 2:
          s2.fillStyle = s2.strokeStyle = i2, n2.fillColor = n2.strokeColor = i2;
          break;
        default:
          throw new L(`Unsupported paint type: ${e2}`);
      }
    }
    isModifyingCurrentTransform() {
      return false;
    }
    getPattern(t2, e2, i2, s2, n2) {
      let r2 = i2;
      s2 !== Oe && (r2 = z.transform(r2, e2.baseTransform), this.matrix && (r2 = z.transform(r2, this.matrix)));
      const a2 = this.createPatternCanvas(e2, n2);
      let o2 = new DOMMatrix(r2);
      o2 = o2.translate(a2.offsetX, a2.offsetY), o2 = o2.scale(1 / a2.scaleX, 1 / a2.scaleY);
      const l2 = t2.createPattern(a2.canvas, "repeat");
      return l2.setTransform(o2), l2;
    }
  }
  function We({ src: t2, srcPos: e2 = 0, dest: i2, width: s2, height: n2, nonBlackColor: r2 = 4294967295, inverseDecode: a2 = false }) {
    const o2 = N.isLittleEndian ? 4278190080 : 255, [l2, h2] = a2 ? [r2, o2] : [o2, r2], c2 = s2 >> 3, d2 = 7 & s2, u2 = t2.length;
    i2 = new Uint32Array(i2.buffer);
    let p2 = 0;
    for (let s3 = 0; s3 < n2; s3++) {
      for (const s5 = e2 + c2; e2 < s5; e2++) {
        const s6 = e2 < u2 ? t2[e2] : 255;
        i2[p2++] = 128 & s6 ? h2 : l2, i2[p2++] = 64 & s6 ? h2 : l2, i2[p2++] = 32 & s6 ? h2 : l2, i2[p2++] = 16 & s6 ? h2 : l2, i2[p2++] = 8 & s6 ? h2 : l2, i2[p2++] = 4 & s6 ? h2 : l2, i2[p2++] = 2 & s6 ? h2 : l2, i2[p2++] = 1 & s6 ? h2 : l2;
      }
      if (0 === d2) continue;
      const s4 = e2 < u2 ? t2[e2++] : 255;
      for (let t3 = 0; t3 < d2; t3++) i2[p2++] = s4 & 1 << 7 - t3 ? h2 : l2;
    }
    return { srcPos: e2, destPos: p2 };
  }
  const qe = 16, Xe = new DOMMatrix(), Ye = new Float32Array(2), Ke = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
  class Qe {
    constructor(t2) {
      this.canvasFactory = t2, this.cache = /* @__PURE__ */ Object.create(null);
    }
    getCanvas(t2, e2, i2) {
      let s2;
      return void 0 !== this.cache[t2] ? (s2 = this.cache[t2], this.canvasFactory.reset(s2, e2, i2)) : (s2 = this.canvasFactory.create(e2, i2), this.cache[t2] = s2), s2;
    }
    delete(t2) {
      delete this.cache[t2];
    }
    clear() {
      for (const t2 in this.cache) {
        const e2 = this.cache[t2];
        this.canvasFactory.destroy(e2), delete this.cache[t2];
      }
    }
  }
  function Je(t2, e2, i2, s2, n2, r2, a2, o2, l2, h2) {
    const [c2, d2, u2, p2, g2, m2] = ut(t2);
    if (0 === d2 && 0 === u2) {
      const f2 = a2 * c2 + g2, b2 = Math.round(f2), v2 = o2 * p2 + m2, y2 = Math.round(v2), w2 = (a2 + l2) * c2 + g2, x2 = Math.abs(Math.round(w2) - b2) || 1, A2 = (o2 + h2) * p2 + m2, _2 = Math.abs(Math.round(A2) - y2) || 1;
      return t2.setTransform(Math.sign(c2), 0, 0, Math.sign(p2), b2, y2), t2.drawImage(e2, i2, s2, n2, r2, 0, 0, x2, _2), t2.setTransform(c2, d2, u2, p2, g2, m2), [x2, _2];
    }
    if (0 === c2 && 0 === p2) {
      const f2 = o2 * u2 + g2, b2 = Math.round(f2), v2 = a2 * d2 + m2, y2 = Math.round(v2), w2 = (o2 + h2) * u2 + g2, x2 = Math.abs(Math.round(w2) - b2) || 1, A2 = (a2 + l2) * d2 + m2, _2 = Math.abs(Math.round(A2) - y2) || 1;
      return t2.setTransform(0, Math.sign(d2), Math.sign(u2), 0, b2, y2), t2.drawImage(e2, i2, s2, n2, r2, 0, 0, _2, x2), t2.setTransform(c2, d2, u2, p2, g2, m2), [_2, x2];
    }
    return t2.drawImage(e2, i2, s2, n2, r2, a2, o2, l2, h2), [Math.hypot(c2, d2) * l2, Math.hypot(u2, p2) * h2];
  }
  class Ze {
    alphaIsShape = false;
    fontSize = 0;
    fontSizeScale = 1;
    textMatrix = null;
    textMatrixScale = 1;
    fontMatrix = o;
    leading = 0;
    x = 0;
    y = 0;
    lineX = 0;
    lineY = 0;
    charSpacing = 0;
    wordSpacing = 0;
    textHScale = 1;
    textRenderingMode = 0;
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
      i2?.(this), this.clipBox = new Float32Array([0, 0, t2, e2]), this.minMax = Ke.slice();
    }
    clone() {
      const t2 = Object.create(this);
      return t2.clipBox = this.clipBox.slice(), t2.minMax = this.minMax.slice(), t2;
    }
    getPathBoundingBox(t2 = Be, e2 = null) {
      const i2 = this.minMax.slice();
      if (t2 === Fe) {
        e2 || S("Stroke bounding box must include transform."), z.singularValueDecompose2dScale(e2, Ye);
        const t3 = Ye[0] * this.lineWidth / 2, s2 = Ye[1] * this.lineWidth / 2;
        i2[0] -= t3, i2[1] -= s2, i2[2] += t3, i2[3] += s2;
      }
      return i2;
    }
    updateClipFromPath() {
      const t2 = z.intersect(this.clipBox, this.getPathBoundingBox());
      this.startNewPathAndClipBox(t2 || [0, 0, 0, 0]);
    }
    isEmptyClip() {
      return this.minMax[0] === 1 / 0;
    }
    startNewPathAndClipBox(t2) {
      this.clipBox.set(t2, 0), this.minMax.set(Ke, 0);
    }
    getClippedPathBoundingBox(t2 = Be, e2 = null) {
      return z.intersect(this.clipBox, this.getPathBoundingBox(t2, e2));
    }
  }
  function ti(t2, e2) {
    if (e2 instanceof ImageData) return void t2.putImageData(e2, 0, 0);
    const i2 = e2.height, s2 = e2.width, n2 = i2 % qe, r2 = (i2 - n2) / qe, a2 = 0 === n2 ? r2 : r2 + 1, o2 = t2.createImageData(s2, qe);
    let l2, h2 = 0;
    const c2 = e2.data, d2 = o2.data;
    let u2, p2, m2, f2;
    if (e2.kind === g.GRAYSCALE_1BPP) {
      const e3 = c2.byteLength, i3 = new Uint32Array(d2.buffer, 0, d2.byteLength >> 2), g2 = i3.length, f3 = s2 + 7 >> 3, b2 = 4294967295, v2 = N.isLittleEndian ? 4278190080 : 255;
      for (u2 = 0; u2 < a2; u2++) {
        for (m2 = u2 < r2 ? qe : n2, l2 = 0, p2 = 0; p2 < m2; p2++) {
          const t3 = e3 - h2;
          let n3 = 0;
          const r3 = t3 > f3 ? s2 : 8 * t3 - 7, a3 = -8 & r3;
          let o3 = 0, d3 = 0;
          for (; n3 < a3; n3 += 8) d3 = c2[h2++], i3[l2++] = 128 & d3 ? b2 : v2, i3[l2++] = 64 & d3 ? b2 : v2, i3[l2++] = 32 & d3 ? b2 : v2, i3[l2++] = 16 & d3 ? b2 : v2, i3[l2++] = 8 & d3 ? b2 : v2, i3[l2++] = 4 & d3 ? b2 : v2, i3[l2++] = 2 & d3 ? b2 : v2, i3[l2++] = 1 & d3 ? b2 : v2;
          for (; n3 < r3; n3++) 0 === o3 && (d3 = c2[h2++], o3 = 128), i3[l2++] = d3 & o3 ? b2 : v2, o3 >>= 1;
        }
        for (; l2 < g2; ) i3[l2++] = 0;
        t2.putImageData(o2, 0, u2 * qe);
      }
    } else if (e2.kind === g.RGBA_32BPP) {
      for (p2 = 0, f2 = s2 * qe * 4, u2 = 0; u2 < r2; u2++) d2.set(c2.subarray(h2, h2 + f2)), h2 += f2, t2.putImageData(o2, 0, p2), p2 += qe;
      u2 < a2 && (f2 = s2 * n2 * 4, d2.set(c2.subarray(h2, h2 + f2)), t2.putImageData(o2, 0, p2));
    } else {
      if (e2.kind !== g.RGB_24BPP) throw new Error(`bad image kind: ${e2.kind}`);
      for (m2 = qe, f2 = s2 * m2, u2 = 0; u2 < a2; u2++) {
        for (u2 >= r2 && (m2 = n2, f2 = s2 * m2), l2 = 0, p2 = f2; p2--; ) d2[l2++] = c2[h2++], d2[l2++] = c2[h2++], d2[l2++] = c2[h2++], d2[l2++] = 255;
        t2.putImageData(o2, 0, u2 * qe);
      }
    }
  }
  function ei(t2, e2) {
    if (e2.bitmap) return void t2.drawImage(e2.bitmap, 0, 0);
    const i2 = e2.height, s2 = e2.width, n2 = i2 % qe, r2 = (i2 - n2) / qe, a2 = 0 === n2 ? r2 : r2 + 1, o2 = t2.createImageData(s2, qe);
    let l2 = 0;
    const h2 = e2.data, c2 = o2.data;
    for (let e3 = 0; e3 < a2; e3++) {
      const i3 = e3 < r2 ? qe : n2;
      ({ srcPos: l2 } = We({ src: h2, srcPos: l2, dest: c2, width: s2, height: i3, nonBlackColor: 0 })), t2.putImageData(o2, 0, e3 * qe);
    }
  }
  function ii(t2, e2) {
    const i2 = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
    for (const s2 of i2) void 0 !== t2[s2] && (e2[s2] = t2[s2]);
    void 0 !== t2.setLineDash && (e2.setLineDash(t2.getLineDash()), e2.lineDashOffset = t2.lineDashOffset);
  }
  function si(t2) {
    t2.strokeStyle = t2.fillStyle = "#000000", t2.fillRule = "nonzero", t2.globalAlpha = 1, t2.lineWidth = 1, t2.lineCap = "butt", t2.lineJoin = "miter", t2.miterLimit = 10, t2.globalCompositeOperation = "source-over", t2.font = "10px sans-serif", void 0 !== t2.setLineDash && (t2.setLineDash([]), t2.lineDashOffset = 0);
    const { filter: e2 } = t2;
    "none" !== e2 && "" !== e2 && (t2.filter = "none");
  }
  function ni(t2, e2) {
    if (e2) return true;
    z.singularValueDecompose2dScale(t2, Ye);
    const i2 = Math.fround(mt.pixelRatio * Q.PDF_TO_CSS_UNITS);
    return Ye[0] <= i2 && Ye[1] <= i2;
  }
  const ri = ["butt", "round", "square"], ai = ["miter", "round", "bevel"], oi = {}, li = {};
  class hi {
    constructor(t2, e2, i2, s2, n2, { optionalContentConfig: r2, markedContentStack: a2 = null }, o2, l2, h2) {
      this.ctx = t2, this.current = new Ze(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = false, this.res = null, this.xobjs = null, this.commonObjs = e2, this.objs = i2, this.canvasFactory = s2, this.filterFactory = n2, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = true, this.markedContentStack = a2 || [], this.optionalContentConfig = r2, this.cachedCanvases = new Qe(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = o2, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = l2, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = h2 ?? null;
    }
    getObject(t2, e2, i2 = null) {
      return "string" == typeof e2 ? (this.dependencyTracker?.recordNamedDependency(t2, e2), e2.startsWith("g_") ? this.commonObjs.get(e2) : this.objs.get(e2)) : i2;
    }
    beginDrawing({ transform: t2, viewport: e2, transparency: i2 = false, background: s2 = null }) {
      const n2 = this.ctx.canvas.width, r2 = this.ctx.canvas.height, a2 = this.ctx.fillStyle;
      if (this.ctx.fillStyle = s2 || "#ffffff", this.ctx.fillRect(0, 0, n2, r2), this.ctx.fillStyle = a2, i2) {
        const t3 = this.cachedCanvases.getCanvas("transparent", n2, r2);
        this.compositeCtx = this.ctx, this.transparentCanvas = t3.canvas, this.ctx = t3.context, this.ctx.save(), this.ctx.transform(...ut(this.compositeCtx));
      }
      this.ctx.save(), si(this.ctx), t2 && (this.ctx.transform(...t2), this.outputScaleX = t2[0], this.outputScaleY = t2[0]), this.ctx.transform(...e2.transform), this.viewportScale = e2.scale, this.baseTransform = ut(this.ctx);
    }
    executeOperatorList(t2, e2, i2, s2, n2) {
      const r2 = t2.argsArray, a2 = t2.fnArray;
      let o2 = e2 || 0;
      const l2 = r2.length;
      if (l2 === o2) return o2;
      const h2 = l2 - o2 > 10 && "function" == typeof i2, c2 = h2 ? Date.now() + 15 : 0;
      let d2 = 0;
      const u2 = this.commonObjs, p2 = this.objs;
      let g2, m2;
      for (; ; ) {
        if (void 0 !== s2 && o2 === s2.nextBreakPoint) return s2.breakIt(o2, i2), o2;
        if (!n2 || n2(o2)) if (g2 = a2[o2], m2 = r2[o2] ?? null, g2 !== b.dependency) null === m2 ? this[g2](o2) : this[g2](o2, ...m2);
        else for (const t3 of m2) {
          this.dependencyTracker?.recordNamedData(t3, o2);
          const e3 = t3.startsWith("g_") ? u2 : p2;
          if (!e3.has(t3)) return e3.get(t3, i2), o2;
        }
        if (o2++, o2 === l2) return o2;
        if (h2 && ++d2 > 10) {
          if (Date.now() > c2) return i2(), o2;
          d2 = 0;
        }
      }
    }
    #ys() {
      for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
      this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
    }
    endDrawing() {
      this.#ys(), this.cachedCanvases.clear(), this.cachedPatterns.clear();
      for (const t2 of this._cachedBitmapsMap.values()) {
        for (const e2 of t2.values()) "undefined" != typeof HTMLCanvasElement && e2 instanceof HTMLCanvasElement && (e2.width = e2.height = 0);
        t2.clear();
      }
      this._cachedBitmapsMap.clear(), this.#ws();
    }
    #ws() {
      if (this.pageColors) {
        const t2 = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
        if ("none" !== t2) {
          const e2 = this.ctx.filter;
          this.ctx.filter = t2, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e2;
        }
      }
    }
    _scaleImage(t2, e2) {
      const i2 = t2.width ?? t2.displayWidth, s2 = t2.height ?? t2.displayHeight;
      let n2, r2, a2 = Math.max(Math.hypot(e2[0], e2[1]), 1), o2 = Math.max(Math.hypot(e2[2], e2[3]), 1), l2 = i2, h2 = s2, c2 = "prescale1";
      for (; a2 > 2 && l2 > 1 || o2 > 2 && h2 > 1; ) {
        let e3 = l2, i3 = h2;
        a2 > 2 && l2 > 1 && (e3 = l2 >= 16384 ? Math.floor(l2 / 2) - 1 || 1 : Math.ceil(l2 / 2), a2 /= l2 / e3), o2 > 2 && h2 > 1 && (i3 = h2 >= 16384 ? Math.floor(h2 / 2) - 1 || 1 : Math.ceil(h2) / 2, o2 /= h2 / i3), n2 = this.cachedCanvases.getCanvas(c2, e3, i3), r2 = n2.context, r2.clearRect(0, 0, e3, i3), r2.drawImage(t2, 0, 0, l2, h2, 0, 0, e3, i3), t2 = n2.canvas, l2 = e3, h2 = i3, c2 = "prescale1" === c2 ? "prescale2" : "prescale1";
      }
      return { img: t2, paintWidth: l2, paintHeight: h2 };
    }
    _createMaskCanvas(t2, e2) {
      const i2 = this.ctx, { width: s2, height: n2 } = e2, r2 = this.current.fillColor, a2 = this.current.patternFill, o2 = ut(i2);
      let l2, h2, c2, d2;
      if ((e2.bitmap || e2.data) && e2.count > 1) {
        const i3 = e2.bitmap || e2.data.buffer;
        h2 = JSON.stringify(a2 ? o2 : [o2.slice(0, 4), r2]), l2 = this._cachedBitmapsMap.get(i3), l2 || (l2 = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(i3, l2));
        const s3 = l2.get(h2);
        if (s3 && !a2) {
          const e3 = Math.round(Math.min(o2[0], o2[2]) + o2[4]), i4 = Math.round(Math.min(o2[1], o2[3]) + o2[5]);
          return this.dependencyTracker?.recordDependencies(t2, Le), { canvas: s3, offsetX: e3, offsetY: i4 };
        }
        c2 = s3;
      }
      c2 || (d2 = this.cachedCanvases.getCanvas("maskCanvas", s2, n2), ei(d2.context, e2));
      let u2 = z.transform(o2, [1 / s2, 0, 0, -1 / n2, 0, 0]);
      u2 = z.transform(u2, [1, 0, 0, 1, 0, -n2]);
      const p2 = Ke.slice();
      z.axialAlignedBoundingBox([0, 0, s2, n2], u2, p2);
      const [g2, m2, f2, b2] = p2, v2 = Math.round(f2 - g2) || 1, y2 = Math.round(b2 - m2) || 1, w2 = this.cachedCanvases.getCanvas("fillCanvas", v2, y2), x2 = w2.context, A2 = g2, _2 = m2;
      x2.translate(-A2, -_2), x2.transform(...u2), c2 || (c2 = this._scaleImage(d2.canvas, pt(x2)), c2 = c2.img, l2 && a2 && l2.set(h2, c2)), x2.imageSmoothingEnabled = ni(ut(x2), e2.interpolate), Je(x2, c2, 0, 0, c2.width, c2.height, 0, 0, s2, n2), x2.globalCompositeOperation = "source-in";
      const S2 = z.transform(pt(x2), [1, 0, 0, 1, -A2, -_2]);
      return x2.fillStyle = a2 ? r2.getPattern(i2, this, S2, Be, t2) : r2, x2.fillRect(0, 0, s2, n2), l2 && !a2 && (this.cachedCanvases.delete("fillCanvas"), l2.set(h2, w2.canvas)), this.dependencyTracker?.recordDependencies(t2, Le), { canvas: w2.canvas, offsetX: Math.round(A2), offsetY: Math.round(_2) };
    }
    setLineWidth(t2, e2) {
      this.dependencyTracker?.recordSimpleData("lineWidth", t2), e2 !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e2, this.ctx.lineWidth = e2;
    }
    setLineCap(t2, e2) {
      this.dependencyTracker?.recordSimpleData("lineCap", t2), this.ctx.lineCap = ri[e2];
    }
    setLineJoin(t2, e2) {
      this.dependencyTracker?.recordSimpleData("lineJoin", t2), this.ctx.lineJoin = ai[e2];
    }
    setMiterLimit(t2, e2) {
      this.dependencyTracker?.recordSimpleData("miterLimit", t2), this.ctx.miterLimit = e2;
    }
    setDash(t2, e2, i2) {
      this.dependencyTracker?.recordSimpleData("dash", t2);
      const s2 = this.ctx;
      void 0 !== s2.setLineDash && (s2.setLineDash(e2), s2.lineDashOffset = i2);
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
          this.dependencyTracker?.recordSimpleData("strokeAlpha", t2), this.current.strokeAlpha = s2;
          break;
        case "ca":
          this.dependencyTracker?.recordSimpleData("fillAlpha", t2), this.ctx.globalAlpha = this.current.fillAlpha = s2;
          break;
        case "BM":
          this.dependencyTracker?.recordSimpleData("globalCompositeOperation", t2), this.ctx.globalCompositeOperation = s2;
          break;
        case "SMask":
          this.dependencyTracker?.recordSimpleData("SMask", t2), this.current.activeSMask = s2 ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.dependencyTracker?.recordSimpleData("filter", t2), this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s2);
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
      r2.setTransform(this.suspendedCtx.getTransform()), ii(this.suspendedCtx, r2), (function(t3, e3) {
        if (t3._removeMirroring) throw new Error("Context is already forwarding operations.");
        t3.__originalSave = t3.save, t3.__originalRestore = t3.restore, t3.__originalRotate = t3.rotate, t3.__originalScale = t3.scale, t3.__originalTranslate = t3.translate, t3.__originalTransform = t3.transform, t3.__originalSetTransform = t3.setTransform, t3.__originalResetTransform = t3.resetTransform, t3.__originalClip = t3.clip, t3.__originalMoveTo = t3.moveTo, t3.__originalLineTo = t3.lineTo, t3.__originalBezierCurveTo = t3.bezierCurveTo, t3.__originalRect = t3.rect, t3.__originalClosePath = t3.closePath, t3.__originalBeginPath = t3.beginPath, t3._removeMirroring = () => {
          t3.save = t3.__originalSave, t3.restore = t3.__originalRestore, t3.rotate = t3.__originalRotate, t3.scale = t3.__originalScale, t3.translate = t3.__originalTranslate, t3.transform = t3.__originalTransform, t3.setTransform = t3.__originalSetTransform, t3.resetTransform = t3.__originalResetTransform, t3.clip = t3.__originalClip, t3.moveTo = t3.__originalMoveTo, t3.lineTo = t3.__originalLineTo, t3.bezierCurveTo = t3.__originalBezierCurveTo, t3.rect = t3.__originalRect, t3.closePath = t3.__originalClosePath, t3.beginPath = t3.__originalBeginPath, delete t3._removeMirroring;
        }, t3.save = function() {
          e3.save(), this.__originalSave();
        }, t3.restore = function() {
          e3.restore(), this.__originalRestore();
        }, t3.translate = function(t4, i3) {
          e3.translate(t4, i3), this.__originalTranslate(t4, i3);
        }, t3.scale = function(t4, i3) {
          e3.scale(t4, i3), this.__originalScale(t4, i3);
        }, t3.transform = function(t4, i3, s3, n3, r3, a2) {
          e3.transform(t4, i3, s3, n3, r3, a2), this.__originalTransform(t4, i3, s3, n3, r3, a2);
        }, t3.setTransform = function(t4, i3, s3, n3, r3, a2) {
          e3.setTransform(t4, i3, s3, n3, r3, a2), this.__originalSetTransform(t4, i3, s3, n3, r3, a2);
        }, t3.resetTransform = function() {
          e3.resetTransform(), this.__originalResetTransform();
        }, t3.rotate = function(t4) {
          e3.rotate(t4), this.__originalRotate(t4);
        }, t3.clip = function(t4) {
          e3.clip(t4), this.__originalClip(t4);
        }, t3.moveTo = function(t4, i3) {
          e3.moveTo(t4, i3), this.__originalMoveTo(t4, i3);
        }, t3.lineTo = function(t4, i3) {
          e3.lineTo(t4, i3), this.__originalLineTo(t4, i3);
        }, t3.bezierCurveTo = function(t4, i3, s3, n3, r3, a2) {
          e3.bezierCurveTo(t4, i3, s3, n3, r3, a2), this.__originalBezierCurveTo(t4, i3, s3, n3, r3, a2);
        }, t3.rect = function(t4, i3, s3, n3) {
          e3.rect(t4, i3, s3, n3), this.__originalRect(t4, i3, s3, n3);
        }, t3.closePath = function() {
          e3.closePath(), this.__originalClosePath();
        }, t3.beginPath = function() {
          e3.beginPath(), this.__originalBeginPath();
        };
      })(r2, this.suspendedCtx), this.setGState(t2, [["BM", "source-over"]]);
    }
    endSMaskMode() {
      if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
      this.ctx._removeMirroring(), ii(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
    }
    compose(t2) {
      if (!this.current.activeSMask) return;
      t2 ? (t2[0] = Math.floor(t2[0]), t2[1] = Math.floor(t2[1]), t2[2] = Math.ceil(t2[2]), t2[3] = Math.ceil(t2[3])) : t2 = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
      const e2 = this.current.activeSMask, i2 = this.suspendedCtx;
      this.composeSMask(i2, e2, this.ctx, t2), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
    }
    composeSMask(t2, e2, i2, s2) {
      const n2 = s2[0], r2 = s2[1], a2 = s2[2] - n2, o2 = s2[3] - r2;
      0 !== a2 && 0 !== o2 && (this.genericComposeSMask(e2.context, i2, a2, o2, e2.subtype, e2.backdrop, e2.transferMap, n2, r2, e2.offsetX, e2.offsetY), t2.save(), t2.globalAlpha = 1, t2.globalCompositeOperation = "source-over", t2.setTransform(1, 0, 0, 1, 0, 0), t2.drawImage(i2.canvas, 0, 0), t2.restore());
    }
    genericComposeSMask(t2, e2, i2, s2, n2, r2, a2, o2, l2, h2, c2) {
      let d2 = t2.canvas, u2 = o2 - h2, p2 = l2 - c2;
      if (r2) if (u2 < 0 || p2 < 0 || u2 + i2 > d2.width || p2 + s2 > d2.height) {
        const t3 = this.cachedCanvases.getCanvas("maskExtension", i2, s2), e3 = t3.context;
        e3.drawImage(d2, -u2, -p2), e3.globalCompositeOperation = "destination-atop", e3.fillStyle = r2, e3.fillRect(0, 0, i2, s2), e3.globalCompositeOperation = "source-over", d2 = t3.canvas, u2 = p2 = 0;
      } else {
        t2.save(), t2.globalAlpha = 1, t2.setTransform(1, 0, 0, 1, 0, 0);
        const e3 = new Path2D();
        e3.rect(u2, p2, i2, s2), t2.clip(e3), t2.globalCompositeOperation = "destination-atop", t2.fillStyle = r2, t2.fillRect(u2, p2, i2, s2), t2.restore();
      }
      e2.save(), e2.globalAlpha = 1, e2.setTransform(1, 0, 0, 1, 0, 0), "Alpha" === n2 && a2 ? e2.filter = this.filterFactory.addAlphaFilter(a2) : "Luminosity" === n2 && (e2.filter = this.filterFactory.addLuminosityFilter(a2));
      const g2 = new Path2D();
      g2.rect(o2, l2, i2, s2), e2.clip(g2), e2.globalCompositeOperation = "destination-in", e2.drawImage(d2, u2, p2, i2, s2, o2, l2, i2, s2), e2.restore();
    }
    save(t2) {
      this.inSMaskMode && ii(this.ctx, this.suspendedCtx), this.ctx.save();
      const e2 = this.current;
      this.stateStack.push(e2), this.current = e2.clone(), this.dependencyTracker?.save(t2);
    }
    restore(t2) {
      this.dependencyTracker?.restore(t2), 0 !== this.stateStack.length ? (this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && ii(this.suspendedCtx, this.ctx), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null) : this.inSMaskMode && this.endSMaskMode();
    }
    transform(t2, e2, i2, s2, n2, r2, a2) {
      this.dependencyTracker?.recordIncrementalData("transform", t2), this.ctx.transform(e2, i2, s2, n2, r2, a2), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
    }
    constructPath(t2, e2, i2, s2) {
      let [n2] = i2;
      if (!s2) return n2 ||= i2[0] = new Path2D(), void this[e2](t2, n2);
      if (null !== this.dependencyTracker) {
        const i3 = e2 === b.stroke ? this.current.lineWidth / 2 : 0;
        this.dependencyTracker.resetBBox(t2).recordBBox(t2, this.ctx, s2[0] - i3, s2[2] + i3, s2[1] - i3, s2[3] + i3).recordDependencies(t2, ["transform"]);
      }
      if (!(n2 instanceof Path2D)) {
        const t3 = i2[0] = new Path2D();
        for (let e3 = 0, i3 = n2.length; e3 < i3; ) switch (n2[e3++]) {
          case 0:
            t3.moveTo(n2[e3++], n2[e3++]);
            break;
          case 1:
            t3.lineTo(n2[e3++], n2[e3++]);
            break;
          case 2:
            t3.bezierCurveTo(n2[e3++], n2[e3++], n2[e3++], n2[e3++], n2[e3++], n2[e3++]);
            break;
          case 3:
            t3.closePath();
            break;
          default:
            _(`Unrecognized drawing path operator: ${n2[e3 - 1]}`);
        }
        n2 = t3;
      }
      z.axialAlignedBoundingBox(s2, ut(this.ctx), this.current.minMax), this[e2](t2, n2), this._pathStartIdx = t2;
    }
    closePath(t2) {
      this.ctx.closePath();
    }
    stroke(t2, e2, i2 = true) {
      const s2 = this.ctx, n2 = this.current.strokeColor;
      if (s2.globalAlpha = this.current.strokeAlpha, this.contentVisible) if ("object" == typeof n2 && n2?.getPattern) {
        const i3 = n2.isModifyingCurrentTransform() ? s2.getTransform() : null;
        if (s2.save(), s2.strokeStyle = n2.getPattern(s2, this, pt(s2), Fe, t2), i3) {
          const t3 = new Path2D();
          t3.addPath(e2, s2.getTransform().invertSelf().multiplySelf(i3)), e2 = t3;
        }
        this.rescaleAndStroke(e2, false), s2.restore();
      } else this.rescaleAndStroke(e2, true);
      this.dependencyTracker?.recordDependencies(t2, Me), i2 && this.consumePath(t2, e2, this.current.getClippedPathBoundingBox(Fe, ut(this.ctx))), s2.globalAlpha = this.current.fillAlpha;
    }
    closeStroke(t2, e2) {
      this.stroke(t2, e2);
    }
    fill(t2, e2, i2 = true) {
      const s2 = this.ctx, n2 = this.current.fillColor;
      let r2 = false;
      if (this.current.patternFill) {
        const i3 = n2.isModifyingCurrentTransform() ? s2.getTransform() : null;
        if (this.dependencyTracker?.save(t2), s2.save(), s2.fillStyle = n2.getPattern(s2, this, pt(s2), Be, t2), i3) {
          const t3 = new Path2D();
          t3.addPath(e2, s2.getTransform().invertSelf().multiplySelf(i3)), e2 = t3;
        }
        r2 = true;
      }
      const a2 = this.current.getClippedPathBoundingBox();
      this.contentVisible && null !== a2 && (this.pendingEOFill ? (s2.fill(e2, "evenodd"), this.pendingEOFill = false) : s2.fill(e2)), this.dependencyTracker?.recordDependencies(t2, ke), r2 && (s2.restore(), this.dependencyTracker?.restore(t2)), i2 && this.consumePath(t2, e2, a2);
    }
    eoFill(t2, e2) {
      this.pendingEOFill = true, this.fill(t2, e2);
    }
    fillStroke(t2, e2) {
      this.fill(t2, e2, false), this.stroke(t2, e2, false), this.consumePath(t2, e2);
    }
    eoFillStroke(t2, e2) {
      this.pendingEOFill = true, this.fillStroke(t2, e2);
    }
    closeFillStroke(t2, e2) {
      this.fillStroke(t2, e2);
    }
    closeEOFillStroke(t2, e2) {
      this.pendingEOFill = true, this.fillStroke(t2, e2);
    }
    endPath(t2, e2) {
      this.consumePath(t2, e2);
    }
    rawFillPath(t2, e2) {
      this.ctx.fill(e2), this.dependencyTracker?.recordDependencies(t2, Pe).recordOperation(t2);
    }
    clip(t2) {
      this.dependencyTracker?.recordFutureForcedDependency("clipMode", t2), this.pendingClip = oi;
    }
    eoClip(t2) {
      this.dependencyTracker?.recordFutureForcedDependency("clipMode", t2), this.pendingClip = li;
    }
    beginText(t2) {
      this.current.textMatrix = null, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, this.dependencyTracker?.recordOpenMarker(t2).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t2);
    }
    endText(t2) {
      const e2 = this.pendingTextPaths, i2 = this.ctx;
      if (this.dependencyTracker) {
        const { dependencyTracker: i3 } = this;
        void 0 !== e2 && i3.recordFutureForcedDependency("textClip", i3.getOpenMarker()).recordFutureForcedDependency("textClip", t2), i3.recordCloseMarker(t2);
      }
      if (void 0 !== e2) {
        const t3 = new Path2D(), s2 = i2.getTransform().invertSelf();
        for (const { transform: i3, x: n2, y: r2, fontSize: a2, path: o2 } of e2) o2 && t3.addPath(o2, new DOMMatrix(i3).preMultiplySelf(s2).translate(n2, r2).scale(a2, -a2));
        i2.clip(t3);
      }
      delete this.pendingTextPaths;
    }
    setCharSpacing(t2, e2) {
      this.dependencyTracker?.recordSimpleData("charSpacing", t2), this.current.charSpacing = e2;
    }
    setWordSpacing(t2, e2) {
      this.dependencyTracker?.recordSimpleData("wordSpacing", t2), this.current.wordSpacing = e2;
    }
    setHScale(t2, e2) {
      this.dependencyTracker?.recordSimpleData("hScale", t2), this.current.textHScale = e2 / 100;
    }
    setLeading(t2, e2) {
      this.dependencyTracker?.recordSimpleData("leading", t2), this.current.leading = -e2;
    }
    setFont(t2, e2, i2) {
      this.dependencyTracker?.recordSimpleData("font", t2).recordSimpleDataFromNamed("fontObj", e2, t2);
      const s2 = this.commonObjs.get(e2), n2 = this.current;
      if (!s2) throw new Error(`Can't find font for ${e2}`);
      if (n2.fontMatrix = s2.fontMatrix || o, 0 !== n2.fontMatrix[0] && 0 !== n2.fontMatrix[3] || _("Invalid font matrix for font " + e2), i2 < 0 ? (i2 = -i2, n2.fontDirection = -1) : n2.fontDirection = 1, this.current.font = s2, this.current.fontSize = i2, s2.isType3Font) return;
      const r2 = s2.loadedName || "sans-serif", a2 = s2.systemFontInfo?.css || `"${r2}", ${s2.fallbackName}`;
      let l2 = "normal";
      s2.black ? l2 = "900" : s2.bold && (l2 = "bold");
      const h2 = s2.italic ? "italic" : "normal";
      let c2 = i2;
      i2 < 16 ? c2 = 16 : i2 > 100 && (c2 = 100), this.current.fontSizeScale = i2 / c2, this.ctx.font = `${h2} ${l2} ${c2}px ${a2}`;
    }
    setTextRenderingMode(t2, e2) {
      this.dependencyTracker?.recordSimpleData("textRenderingMode", t2), this.current.textRenderingMode = e2;
    }
    setTextRise(t2, e2) {
      this.dependencyTracker?.recordSimpleData("textRise", t2), this.current.textRise = e2;
    }
    moveText(t2, e2, i2) {
      this.dependencyTracker?.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t2), this.current.x = this.current.lineX += e2, this.current.y = this.current.lineY += i2;
    }
    setLeadingMoveText(t2, e2, i2) {
      this.setLeading(t2, -i2), this.moveText(t2, e2, i2);
    }
    setTextMatrix(t2, e2) {
      this.dependencyTracker?.recordSimpleData("textMatrix", t2);
      const { current: i2 } = this;
      i2.textMatrix = e2, i2.textMatrixScale = Math.hypot(e2[0], e2[1]), i2.x = i2.lineX = 0, i2.y = i2.lineY = 0;
    }
    nextLine(t2) {
      this.moveText(t2, 0, this.current.leading), this.dependencyTracker?.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t2);
    }
    #xs(t2, e2, i2) {
      const s2 = new Path2D();
      return s2.addPath(t2, new DOMMatrix(i2).invertSelf().multiplySelf(e2)), s2;
    }
    paintChar(t2, e2, i2, s2, n2, r2) {
      const a2 = this.ctx, o2 = this.current, l2 = o2.font, h2 = o2.textRenderingMode, c2 = o2.fontSize / o2.fontSizeScale, d2 = 3 & h2, u2 = !!(4 & h2), p2 = o2.patternFill && !l2.missingFile, g2 = o2.patternStroke && !l2.missingFile;
      let m2;
      if ((l2.disableFontFace || u2 || p2 || g2) && !l2.missingFile && (m2 = l2.getPathGenerator(this.commonObjs, e2)), m2 && (l2.disableFontFace || p2 || g2)) {
        let e3;
        if (a2.save(), a2.translate(i2, s2), a2.scale(c2, -c2), this.dependencyTracker?.recordCharacterBBox(t2, a2, l2), 0 === d2 || 2 === d2) if (n2) {
          e3 = a2.getTransform(), a2.setTransform(...n2);
          const t3 = this.#xs(m2, e3, n2);
          a2.fill(t3);
        } else a2.fill(m2);
        if (1 === d2 || 2 === d2) if (r2) {
          e3 ||= a2.getTransform(), a2.setTransform(...r2);
          const { a: t3, b: i3, c: s3, d: n3 } = e3, o3 = z.inverseTransform(r2), l3 = z.transform([t3, i3, s3, n3, 0, 0], o3);
          z.singularValueDecompose2dScale(l3, Ye), a2.lineWidth *= Math.max(Ye[0], Ye[1]) / c2, a2.stroke(this.#xs(m2, e3, r2));
        } else a2.lineWidth /= c2, a2.stroke(m2);
        a2.restore();
      } else 0 !== d2 && 2 !== d2 || (a2.fillText(e2, i2, s2), this.dependencyTracker?.recordCharacterBBox(t2, a2, l2, c2, i2, s2, () => a2.measureText(e2))), 1 !== d2 && 2 !== d2 || (this.dependencyTracker && this.dependencyTracker?.recordCharacterBBox(t2, a2, l2, c2, i2, s2, () => a2.measureText(e2)).recordDependencies(t2, Me), a2.strokeText(e2, i2, s2));
      u2 && ((this.pendingTextPaths ||= []).push({ transform: ut(a2), x: i2, y: s2, fontSize: c2, path: m2 }), this.dependencyTracker?.recordCharacterBBox(t2, a2, l2, c2, i2, s2));
    }
    get isFontSubpixelAAEnabled() {
      const { context: t2 } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
      t2.scale(1.5, 1), t2.fillText("I", 0, 10);
      const e2 = t2.getImageData(0, 0, 10, 10).data;
      let i2 = false;
      for (let t3 = 3; t3 < e2.length; t3 += 4) if (e2[t3] > 0 && e2[t3] < 255) {
        i2 = true;
        break;
      }
      return M(this, "isFontSubpixelAAEnabled", i2);
    }
    showText(t2, e2) {
      this.dependencyTracker && (this.dependencyTracker.recordDependencies(t2, Ie).resetBBox(t2), 4 & this.current.textRenderingMode && this.dependencyTracker.recordFutureForcedDependency("textClip", t2).inheritPendingDependenciesAsFutureForcedDependencies());
      const i2 = this.current, s2 = i2.font;
      if (s2.isType3Font) return this.showType3Text(t2, e2), void this.dependencyTracker?.recordShowTextOperation(t2);
      const n2 = i2.fontSize;
      if (0 === n2) return void this.dependencyTracker?.recordOperation(t2);
      const r2 = this.ctx, a2 = i2.fontSizeScale, o2 = i2.charSpacing, l2 = i2.wordSpacing, h2 = i2.fontDirection, c2 = i2.textHScale * h2, d2 = e2.length, u2 = s2.vertical, p2 = u2 ? 1 : -1, g2 = s2.defaultVMetrics, m2 = n2 * i2.fontMatrix[0], f2 = 0 === i2.textRenderingMode && !s2.disableFontFace && !i2.patternFill;
      let b2, v2;
      if (r2.save(), i2.textMatrix && r2.transform(...i2.textMatrix), r2.translate(i2.x, i2.y + i2.textRise), h2 > 0 ? r2.scale(c2, -1) : r2.scale(c2, 1), i2.patternFill) {
        r2.save();
        const e3 = i2.fillColor.getPattern(r2, this, pt(r2), Be, t2);
        b2 = ut(r2), r2.restore(), r2.fillStyle = e3;
      }
      if (i2.patternStroke) {
        r2.save();
        const e3 = i2.strokeColor.getPattern(r2, this, pt(r2), Fe, t2);
        v2 = ut(r2), r2.restore(), r2.strokeStyle = e3;
      }
      let y2 = i2.lineWidth;
      const w2 = i2.textMatrixScale;
      if (0 === w2 || 0 === y2) {
        const t3 = 3 & i2.textRenderingMode;
        1 !== t3 && 2 !== t3 || (y2 = this.getSinglePixelWidth());
      } else y2 /= w2;
      if (1 !== a2 && (r2.scale(a2, a2), y2 /= a2), r2.lineWidth = y2, s2.isInvalidPDFjsFont) {
        const s3 = [];
        let n3 = 0;
        for (const t3 of e2) s3.push(t3.unicode), n3 += t3.width;
        const a3 = s3.join("");
        if (r2.fillText(a3, 0, 0), null !== this.dependencyTracker) {
          const e3 = r2.measureText(a3);
          this.dependencyTracker.recordBBox(t2, this.ctx, -e3.actualBoundingBoxLeft, e3.actualBoundingBoxRight, -e3.actualBoundingBoxAscent, e3.actualBoundingBoxDescent).recordShowTextOperation(t2);
        }
        return i2.x += n3 * m2 * c2, r2.restore(), void this.compose();
      }
      let x2, A2 = 0;
      for (x2 = 0; x2 < d2; ++x2) {
        const i3 = e2[x2];
        if ("number" == typeof i3) {
          A2 += p2 * i3 * n2 / 1e3;
          continue;
        }
        let c3 = false;
        const d3 = (i3.isSpace ? l2 : 0) + o2, y3 = i3.fontChar, w3 = i3.accent;
        let _2, S2, E2, C2 = i3.width;
        if (u2) {
          const t3 = i3.vmetric || g2, e3 = -(i3.vmetric ? t3[1] : 0.5 * C2) * m2, s3 = t3[2] * m2;
          C2 = t3 ? -t3[0] : C2, _2 = e3 / a2, S2 = (A2 + s3) / a2;
        } else _2 = A2 / a2, S2 = 0;
        if (s2.remeasure && C2 > 0) {
          E2 = r2.measureText(y3);
          const t3 = 1e3 * E2.width / n2 * a2;
          if (C2 < t3 && this.isFontSubpixelAAEnabled) {
            const e3 = C2 / t3;
            c3 = true, r2.save(), r2.scale(e3, 1), _2 /= e3;
          } else C2 !== t3 && (_2 += (C2 - t3) / 2e3 * n2 / a2);
        }
        if (this.contentVisible && (i3.isInFont || s2.missingFile)) {
          if (f2 && !w3) r2.fillText(y3, _2, S2), this.dependencyTracker?.recordCharacterBBox(t2, r2, E2 ? { bbox: null } : s2, n2 / a2, _2, S2, () => E2 ?? r2.measureText(y3));
          else if (this.paintChar(t2, y3, _2, S2, b2, v2), w3) {
            const e3 = _2 + n2 * w3.offset.x / a2, i4 = S2 - n2 * w3.offset.y / a2;
            this.paintChar(t2, w3.fontChar, e3, i4, b2, v2);
          }
        }
        A2 += u2 ? C2 * m2 - d3 * h2 : C2 * m2 + d3 * h2, c3 && r2.restore();
      }
      u2 ? i2.y -= A2 : i2.x += A2 * c2, r2.restore(), this.compose(), this.dependencyTracker?.recordShowTextOperation(t2);
    }
    showType3Text(t2, e2) {
      const i2 = this.ctx, s2 = this.current, n2 = s2.font, r2 = s2.fontSize, a2 = s2.fontDirection, l2 = n2.vertical ? 1 : -1, h2 = s2.charSpacing, c2 = s2.wordSpacing, d2 = s2.textHScale * a2, u2 = s2.fontMatrix || o, p2 = e2.length;
      let g2, m2, f2, b2;
      if (3 === s2.textRenderingMode || 0 === r2) return;
      this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, i2.save(), s2.textMatrix && i2.transform(...s2.textMatrix), i2.translate(s2.x, s2.y + s2.textRise), i2.scale(d2, a2);
      const v2 = this.dependencyTracker;
      for (this.dependencyTracker = v2 ? new Te(v2, t2) : null, g2 = 0; g2 < p2; ++g2) {
        if (m2 = e2[g2], "number" == typeof m2) {
          b2 = l2 * m2 * r2 / 1e3, this.ctx.translate(b2, 0), s2.x += b2 * d2;
          continue;
        }
        const t3 = (m2.isSpace ? c2 : 0) + h2, a3 = n2.charProcOperatorList[m2.operatorListId];
        a3 ? this.contentVisible && (this.save(), i2.scale(r2, r2), i2.transform(...u2), this.executeOperatorList(a3), this.restore()) : _(`Type3 character "${m2.operatorListId}" is not available.`);
        const o2 = [m2.width, 0];
        z.applyTransform(o2, u2), f2 = o2[0] * r2 + t3, i2.translate(f2, 0), s2.x += f2 * d2;
      }
      i2.restore(), v2 && (this.dependencyTracker = v2);
    }
    setCharWidth(t2, e2, i2) {
    }
    setCharWidthAndBounds(t2, e2, i2, s2, n2, r2, a2) {
      const o2 = new Path2D();
      o2.rect(s2, n2, r2 - s2, a2 - n2), this.ctx.clip(o2), this.dependencyTracker?.recordBBox(t2, this.ctx, s2, r2, n2, a2).recordClipBox(t2, this.ctx, s2, r2, n2, a2), this.endPath(t2);
    }
    getColorN_Pattern(t2, e2) {
      let i2;
      if ("TilingPattern" === e2[0]) {
        const t3 = this.baseTransform || ut(this.ctx), s2 = { createCanvasGraphics: (t4, e3) => new hi(t4, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: this.optionalContentConfig, markedContentStack: this.markedContentStack }, void 0, void 0, this.dependencyTracker ? new Te(this.dependencyTracker, e3, true) : null) };
        i2 = new Ge(e2, this.ctx, s2, t3);
      } else i2 = this._getPattern(t2, e2[1], e2[2]);
      return i2;
    }
    setStrokeColorN(t2, ...e2) {
      this.dependencyTracker?.recordSimpleData("strokeColor", t2), this.current.strokeColor = this.getColorN_Pattern(t2, e2), this.current.patternStroke = true;
    }
    setFillColorN(t2, ...e2) {
      this.dependencyTracker?.recordSimpleData("fillColor", t2), this.current.fillColor = this.getColorN_Pattern(t2, e2), this.current.patternFill = true;
    }
    setStrokeRGBColor(t2, e2) {
      this.dependencyTracker?.recordSimpleData("strokeColor", t2), this.ctx.strokeStyle = this.current.strokeColor = e2, this.current.patternStroke = false;
    }
    setStrokeTransparent(t2) {
      this.dependencyTracker?.recordSimpleData("strokeColor", t2), this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = false;
    }
    setFillRGBColor(t2, e2) {
      this.dependencyTracker?.recordSimpleData("fillColor", t2), this.ctx.fillStyle = this.current.fillColor = e2, this.current.patternFill = false;
    }
    setFillTransparent(t2) {
      this.dependencyTracker?.recordSimpleData("fillColor", t2), this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = false;
    }
    _getPattern(t2, e2, i2 = null) {
      let s2;
      return this.cachedPatterns.has(e2) ? s2 = this.cachedPatterns.get(e2) : (s2 = (function(t3) {
        switch (t3[0]) {
          case "RadialAxial":
            return new ze(t3);
          case "Mesh":
            return new $e(t3);
          case "Dummy":
            return new Ve();
        }
        throw new Error(`Unknown IR type: ${t3[0]}`);
      })(this.getObject(t2, e2)), this.cachedPatterns.set(e2, s2)), i2 && (s2.matrix = i2), s2;
    }
    shadingFill(t2, e2) {
      if (!this.contentVisible) return;
      const i2 = this.ctx;
      this.save(t2);
      const s2 = this._getPattern(t2, e2);
      i2.fillStyle = s2.getPattern(i2, this, pt(i2), Oe, t2);
      const n2 = pt(i2);
      if (n2) {
        const { width: t3, height: e3 } = i2.canvas, s3 = Ke.slice();
        z.axialAlignedBoundingBox([0, 0, t3, e3], n2, s3);
        const [r2, a2, o2, l2] = s3;
        this.ctx.fillRect(r2, a2, o2 - r2, l2 - a2);
      } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      this.dependencyTracker?.resetBBox(t2).recordFullPageBBox(t2).recordDependencies(t2, Re).recordDependencies(t2, ke).recordOperation(t2), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t2);
    }
    beginInlineImage() {
      S("Should not call beginInlineImage");
    }
    beginImageData() {
      S("Should not call beginImageData");
    }
    paintFormXObjectBegin(t2, e2, i2) {
      if (this.contentVisible && (this.save(t2), this.baseTransformStack.push(this.baseTransform), e2 && this.transform(t2, ...e2), this.baseTransform = ut(this.ctx), i2)) {
        z.axialAlignedBoundingBox(i2, this.baseTransform, this.current.minMax);
        const [e3, s2, n2, r2] = i2, a2 = new Path2D();
        a2.rect(e3, s2, n2 - e3, r2 - s2), this.ctx.clip(a2), this.dependencyTracker?.recordClipBox(t2, this.ctx, e3, n2, s2, r2), this.endPath(t2);
      }
    }
    paintFormXObjectEnd(t2) {
      this.contentVisible && (this.restore(t2), this.baseTransform = this.baseTransformStack.pop());
    }
    beginGroup(t2, e2) {
      if (!this.contentVisible) return;
      this.save(t2), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
      const i2 = this.ctx;
      e2.isolated || A("TODO: Support non-isolated groups."), e2.knockout && _("Knockout groups not supported.");
      const s2 = ut(i2);
      if (e2.matrix && i2.transform(...e2.matrix), !e2.bbox) throw new Error("Bounding box is required.");
      let n2 = Ke.slice();
      z.axialAlignedBoundingBox(e2.bbox, ut(i2), n2);
      const r2 = [0, 0, i2.canvas.width, i2.canvas.height];
      n2 = z.intersect(n2, r2) || [0, 0, 0, 0];
      const a2 = Math.floor(n2[0]), o2 = Math.floor(n2[1]), l2 = Math.max(Math.ceil(n2[2]) - a2, 1), h2 = Math.max(Math.ceil(n2[3]) - o2, 1);
      this.current.startNewPathAndClipBox([0, 0, l2, h2]);
      let c2 = "groupAt" + this.groupLevel;
      e2.smask && (c2 += "_smask_" + this.smaskCounter++ % 2);
      const d2 = this.cachedCanvases.getCanvas(c2, l2, h2), u2 = d2.context;
      u2.translate(-a2, -o2), u2.transform(...s2);
      let p2 = new Path2D();
      const [g2, m2, f2, b2] = e2.bbox;
      if (p2.rect(g2, m2, f2 - g2, b2 - m2), e2.matrix) {
        const t3 = new Path2D();
        t3.addPath(p2, new DOMMatrix(e2.matrix)), p2 = t3;
      }
      u2.clip(p2), e2.smask && this.smaskStack.push({ canvas: d2.canvas, context: u2, offsetX: a2, offsetY: o2, subtype: e2.smask.subtype, backdrop: e2.smask.backdrop, transferMap: e2.smask.transferMap || null, startTransformInverse: null }), e2.smask && !this.dependencyTracker || (i2.setTransform(1, 0, 0, 1, 0, 0), i2.translate(a2, o2), i2.save()), ii(i2, u2), this.ctx = u2, this.dependencyTracker?.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(i2), this.setGState(t2, [["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(i2), this.groupLevel++;
    }
    endGroup(t2, e2) {
      if (!this.contentVisible) return;
      this.groupLevel--;
      const i2 = this.ctx, s2 = this.groupStack.pop();
      if (this.ctx = s2, this.ctx.imageSmoothingEnabled = false, this.dependencyTracker?.popBaseTransform(), e2.smask) this.tempSMask = this.smaskStack.pop(), this.restore(t2), this.dependencyTracker && this.ctx.restore();
      else {
        this.ctx.restore();
        const e3 = ut(this.ctx);
        this.restore(t2), this.ctx.save(), this.ctx.setTransform(...e3);
        const s3 = Ke.slice();
        z.axialAlignedBoundingBox([0, 0, i2.canvas.width, i2.canvas.height], e3, s3), this.ctx.drawImage(i2.canvas, 0, 0), this.ctx.restore(), this.compose(s3);
      }
    }
    beginAnnotation(t2, e2, i2, s2, n2, r2) {
      if (this.#ys(), si(this.ctx), this.ctx.save(), this.save(t2), this.baseTransform && this.ctx.setTransform(...this.baseTransform), i2) {
        const n3 = i2[2] - i2[0], a2 = i2[3] - i2[1];
        if (r2 && this.annotationCanvasMap) {
          (s2 = s2.slice())[4] -= i2[0], s2[5] -= i2[1], (i2 = i2.slice())[0] = i2[1] = 0, i2[2] = n3, i2[3] = a2, z.singularValueDecompose2dScale(ut(this.ctx), Ye);
          const { viewportScale: t3 } = this, r3 = Math.ceil(n3 * this.outputScaleX * t3), o2 = Math.ceil(a2 * this.outputScaleY * t3);
          this.annotationCanvas = this.canvasFactory.create(r3, o2);
          const { canvas: l2, context: h2 } = this.annotationCanvas;
          this.annotationCanvasMap.set(e2, l2), this.annotationCanvas.savedCtx = this.ctx, this.ctx = h2, this.ctx.save(), this.ctx.setTransform(Ye[0], 0, 0, -Ye[1], 0, a2 * Ye[1]), si(this.ctx);
        } else {
          si(this.ctx), this.endPath(t2);
          const e3 = new Path2D();
          e3.rect(i2[0], i2[1], n3, a2), this.ctx.clip(e3);
        }
      }
      this.current = new Ze(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(t2, ...s2), this.transform(t2, ...n2);
    }
    endAnnotation(t2) {
      this.annotationCanvas && (this.ctx.restore(), this.#ws(), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
    }
    paintImageMaskXObject(t2, e2) {
      if (!this.contentVisible) return;
      const i2 = e2.count;
      (e2 = this.getObject(t2, e2.data, e2)).count = i2;
      const s2 = this.ctx, n2 = this._createMaskCanvas(t2, e2), r2 = n2.canvas;
      s2.save(), s2.setTransform(1, 0, 0, 1, 0, 0), s2.drawImage(r2, n2.offsetX, n2.offsetY), this.dependencyTracker?.resetBBox(t2).recordBBox(t2, this.ctx, n2.offsetX, n2.offsetX + r2.width, n2.offsetY, n2.offsetY + r2.height).recordOperation(t2), s2.restore(), this.compose();
    }
    paintImageMaskXObjectRepeat(t2, e2, i2, s2 = 0, n2 = 0, r2, a2) {
      if (!this.contentVisible) return;
      e2 = this.getObject(t2, e2.data, e2);
      const o2 = this.ctx;
      o2.save();
      const l2 = ut(o2);
      o2.transform(i2, s2, n2, r2, 0, 0);
      const h2 = this._createMaskCanvas(t2, e2);
      o2.setTransform(1, 0, 0, 1, h2.offsetX - l2[4], h2.offsetY - l2[5]), this.dependencyTracker?.resetBBox(t2);
      for (let e3 = 0, c2 = a2.length; e3 < c2; e3 += 2) {
        const c3 = z.transform(l2, [i2, s2, n2, r2, a2[e3], a2[e3 + 1]]);
        o2.drawImage(h2.canvas, c3[4], c3[5]), this.dependencyTracker?.recordBBox(t2, this.ctx, c3[4], c3[4] + h2.canvas.width, c3[5], c3[5] + h2.canvas.height);
      }
      o2.restore(), this.compose(), this.dependencyTracker?.recordOperation(t2);
    }
    paintImageMaskXObjectGroup(t2, e2) {
      if (!this.contentVisible) return;
      const i2 = this.ctx, s2 = this.current.fillColor, n2 = this.current.patternFill;
      this.dependencyTracker?.resetBBox(t2).recordDependencies(t2, Le);
      for (const r2 of e2) {
        const { data: e3, width: a2, height: o2, transform: l2 } = r2, h2 = this.cachedCanvases.getCanvas("maskCanvas", a2, o2), c2 = h2.context;
        c2.save(), ei(c2, this.getObject(t2, e3, r2)), c2.globalCompositeOperation = "source-in", c2.fillStyle = n2 ? s2.getPattern(c2, this, pt(i2), Be, t2) : s2, c2.fillRect(0, 0, a2, o2), c2.restore(), i2.save(), i2.transform(...l2), i2.scale(1, -1), Je(i2, h2.canvas, 0, 0, a2, o2, 0, -1, 1, 1), this.dependencyTracker?.recordBBox(t2, i2, 0, a2, 0, o2), i2.restore();
      }
      this.compose(), this.dependencyTracker?.recordOperation(t2);
    }
    paintImageXObject(t2, e2) {
      if (!this.contentVisible) return;
      const i2 = this.getObject(t2, e2);
      i2 ? this.paintInlineImageXObject(t2, i2) : _("Dependent image isn't ready yet");
    }
    paintImageXObjectRepeat(t2, e2, i2, s2, n2) {
      if (!this.contentVisible) return;
      const r2 = this.getObject(t2, e2);
      if (!r2) return void _("Dependent image isn't ready yet");
      const a2 = r2.width, o2 = r2.height, l2 = [];
      for (let t3 = 0, e3 = n2.length; t3 < e3; t3 += 2) l2.push({ transform: [i2, 0, 0, s2, n2[t3], n2[t3 + 1]], x: 0, y: 0, w: a2, h: o2 });
      this.paintInlineImageXObjectGroup(t2, r2, l2);
    }
    applyTransferMapsToCanvas(t2) {
      return "none" !== this.current.transferMaps && (t2.filter = this.current.transferMaps, t2.drawImage(t2.canvas, 0, 0), t2.filter = "none"), t2.canvas;
    }
    applyTransferMapsToBitmap(t2) {
      if ("none" === this.current.transferMaps) return t2.bitmap;
      const { bitmap: e2, width: i2, height: s2 } = t2, n2 = this.cachedCanvases.getCanvas("inlineImage", i2, s2), r2 = n2.context;
      return r2.filter = this.current.transferMaps, r2.drawImage(e2, 0, 0), r2.filter = "none", n2.canvas;
    }
    paintInlineImageXObject(t2, e2) {
      if (!this.contentVisible) return;
      const i2 = e2.width, s2 = e2.height, n2 = this.ctx;
      this.save(t2);
      const { filter: r2 } = n2;
      let a2;
      if ("none" !== r2 && "" !== r2 && (n2.filter = "none"), n2.scale(1 / i2, -1 / s2), e2.bitmap) a2 = this.applyTransferMapsToBitmap(e2);
      else if ("function" == typeof HTMLElement && e2 instanceof HTMLElement || !e2.data) a2 = e2;
      else {
        const t3 = this.cachedCanvases.getCanvas("inlineImage", i2, s2).context;
        ti(t3, e2), a2 = this.applyTransferMapsToCanvas(t3);
      }
      const o2 = this._scaleImage(a2, pt(n2));
      n2.imageSmoothingEnabled = ni(ut(n2), e2.interpolate), this.dependencyTracker?.resetBBox(t2).recordBBox(t2, n2, 0, i2, -s2, 0).recordDependencies(t2, De).recordOperation(t2), Je(n2, o2.img, 0, 0, o2.paintWidth, o2.paintHeight, 0, -s2, i2, s2), this.compose(), this.restore(t2);
    }
    paintInlineImageXObjectGroup(t2, e2, i2) {
      if (!this.contentVisible) return;
      const s2 = this.ctx;
      let n2;
      if (e2.bitmap) n2 = e2.bitmap;
      else {
        const t3 = e2.width, i3 = e2.height, s3 = this.cachedCanvases.getCanvas("inlineImage", t3, i3).context;
        ti(s3, e2), n2 = this.applyTransferMapsToCanvas(s3);
      }
      this.dependencyTracker?.resetBBox(t2);
      for (const e3 of i2) s2.save(), s2.transform(...e3.transform), s2.scale(1, -1), Je(s2, n2, e3.x, e3.y, e3.w, e3.h, 0, -1, 1, 1), this.dependencyTracker?.recordBBox(t2, s2, 0, 1, -1, 0), s2.restore();
      this.dependencyTracker?.recordOperation(t2), this.compose();
    }
    paintSolidColorImageMask(t2) {
      this.contentVisible && (this.dependencyTracker?.resetBBox(t2).recordBBox(t2, this.ctx, 0, 1, 0, 1).recordDependencies(t2, ke).recordOperation(t2), this.ctx.fillRect(0, 0, 1, 1), this.compose());
    }
    markPoint(t2, e2) {
    }
    markPointProps(t2, e2, i2) {
    }
    beginMarkedContent(t2, e2) {
      this.dependencyTracker?.beginMarkedContent(t2), this.markedContentStack.push({ visible: true });
    }
    beginMarkedContentProps(t2, e2, i2) {
      this.dependencyTracker?.beginMarkedContent(t2), "OC" === e2 ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(i2) }) : this.markedContentStack.push({ visible: true }), this.contentVisible = this.isContentVisible();
    }
    endMarkedContent(t2) {
      this.dependencyTracker?.endMarkedContent(t2), this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
    }
    beginCompat(t2) {
    }
    endCompat(t2) {
    }
    consumePath(t2, e2, i2) {
      const s2 = this.current.isEmptyClip();
      this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(i2);
      const n2 = this.ctx;
      this.pendingClip ? (s2 || (this.pendingClip === li ? n2.clip(e2, "evenodd") : n2.clip(e2)), this.pendingClip = null, this.dependencyTracker?.bboxToClipBoxDropOperation(t2).recordFutureForcedDependency("clipPath", t2)) : this.dependencyTracker?.recordOperation(t2), this.current.startNewPathAndClipBox(this.current.clipBox);
    }
    getSinglePixelWidth() {
      if (!this._cachedGetSinglePixelWidth) {
        const t2 = ut(this.ctx);
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
          else if (0 === t2) r2 = 1 / i3, a2 = 1 / s3;
          else {
            const e3 = i3 * t2, n3 = s3 * t2;
            r2 = e3 < 1 ? 1 / e3 : 1, a2 = n3 < 1 ? 1 / n3 : 1;
          }
        } else {
          const o2 = Math.abs(e2 * n2 - i2 * s2), l2 = Math.hypot(e2, i2), h2 = Math.hypot(s2, n2);
          if (0 === t2) r2 = h2 / o2, a2 = l2 / o2;
          else {
            const e3 = t2 * o2;
            r2 = h2 > e3 ? h2 / e3 : 1, a2 = l2 > e3 ? l2 / e3 : 1;
          }
        }
        this._cachedScaleForStroking[0] = r2, this._cachedScaleForStroking[1] = a2;
      }
      return this._cachedScaleForStroking;
    }
    rescaleAndStroke(t2, e2) {
      const { ctx: i2, current: { lineWidth: s2 } } = this, [n2, r2] = this.getScaleForStroking();
      if (n2 === r2) return i2.lineWidth = (s2 || 1) * n2, void i2.stroke(t2);
      const a2 = i2.getLineDash();
      e2 && i2.save(), i2.scale(n2, r2), Xe.a = 1 / n2, Xe.d = 1 / r2;
      const o2 = new Path2D();
      if (o2.addPath(t2, Xe), a2.length > 0) {
        const t3 = Math.max(n2, r2);
        i2.setLineDash(a2.map((e3) => e3 / t3)), i2.lineDashOffset /= t3;
      }
      i2.lineWidth = s2 || 1, i2.stroke(o2), e2 && i2.restore();
    }
    isContentVisible() {
      for (let t2 = this.markedContentStack.length - 1; t2 >= 0; t2--) if (!this.markedContentStack[t2].visible) return false;
      return true;
    }
  }
  for (const t2 in b) void 0 !== hi.prototype[t2] && (hi.prototype[b[t2]] = hi.prototype[t2]);
  class ci {
    #As;
    #_s;
    #Ss;
    static strings = ["fontFamily", "fontWeight", "italicAngle"];
    static write(t2) {
      const e2 = new TextEncoder(), i2 = {};
      let s2 = 0;
      for (const n3 of ci.strings) {
        const r3 = e2.encode(t2[n3]);
        i2[n3] = r3, s2 += 4 + r3.length;
      }
      const n2 = new ArrayBuffer(s2), r2 = new Uint8Array(n2), a2 = new DataView(n2);
      let o2 = 0;
      for (const t3 of ci.strings) {
        const e3 = i2[t3], s3 = e3.length;
        a2.setUint32(o2, s3), r2.set(e3, o2 + 4), o2 += 4 + s3;
      }
      return E(o2 === n2.byteLength, "CssFontInfo.write: Buffer overflow"), n2;
    }
    constructor(t2) {
      this.#As = t2, this.#_s = new DataView(this.#As), this.#Ss = new TextDecoder();
    }
    #Es(t2) {
      E(t2 < ci.strings.length, "Invalid string index");
      let e2 = 0;
      for (let i3 = 0; i3 < t2; i3++) e2 += this.#_s.getUint32(e2) + 4;
      const i2 = this.#_s.getUint32(e2);
      return this.#Ss.decode(new Uint8Array(this.#As, e2 + 4, i2));
    }
    get fontFamily() {
      return this.#Es(0);
    }
    get fontWeight() {
      return this.#Es(1);
    }
    get italicAngle() {
      return this.#Es(2);
    }
  }
  class di {
    #As;
    #_s;
    #Ss;
    static strings = ["css", "loadedName", "baseFontName", "src"];
    static write(t2) {
      const e2 = new TextEncoder(), i2 = {};
      let s2 = 0;
      for (const n3 of di.strings) {
        const r3 = e2.encode(t2[n3]);
        i2[n3] = r3, s2 += 4 + r3.length;
      }
      s2 += 4;
      let n2, r2, a2 = 1 + s2;
      t2.style && (n2 = e2.encode(t2.style.style), r2 = e2.encode(t2.style.weight), a2 += 4 + n2.length + 4 + r2.length);
      const o2 = new ArrayBuffer(a2), l2 = new Uint8Array(o2), h2 = new DataView(o2);
      let c2 = 0;
      h2.setUint8(c2++, t2.guessFallback ? 1 : 0), h2.setUint32(c2, 0), c2 += 4, s2 = 0;
      for (const t3 of di.strings) {
        const e3 = i2[t3], n3 = e3.length;
        s2 += 4 + n3, h2.setUint32(c2, n3), l2.set(e3, c2 + 4), c2 += 4 + n3;
      }
      return h2.setUint32(c2 - s2 - 4, s2), t2.style && (h2.setUint32(c2, n2.length), l2.set(n2, c2 + 4), c2 += 4 + n2.length, h2.setUint32(c2, r2.length), l2.set(r2, c2 + 4), c2 += 4 + r2.length), E(c2 <= o2.byteLength, "SubstitionInfo.write: Buffer overflow"), o2.transferToFixedLength(c2);
    }
    constructor(t2) {
      this.#As = t2, this.#_s = new DataView(this.#As), this.#Ss = new TextDecoder();
    }
    get guessFallback() {
      return 0 !== this.#_s.getUint8(0);
    }
    #Es(t2) {
      E(t2 < di.strings.length, "Invalid string index");
      let e2 = 5;
      for (let i3 = 0; i3 < t2; i3++) e2 += this.#_s.getUint32(e2) + 4;
      const i2 = this.#_s.getUint32(e2);
      return this.#Ss.decode(new Uint8Array(this.#As, e2 + 4, i2));
    }
    get css() {
      return this.#Es(0);
    }
    get loadedName() {
      return this.#Es(1);
    }
    get baseFontName() {
      return this.#Es(2);
    }
    get src() {
      return this.#Es(3);
    }
    get style() {
      let t2 = 1;
      t2 += 4 + this.#_s.getUint32(t2);
      const e2 = this.#_s.getUint32(t2), i2 = this.#Ss.decode(new Uint8Array(this.#As, t2 + 4, e2));
      t2 += 4 + e2;
      const s2 = this.#_s.getUint32(t2);
      return { style: i2, weight: this.#Ss.decode(new Uint8Array(this.#As, t2 + 4, s2)) };
    }
  }
  class ui {
    static bools = ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"];
    static numbers = ["ascent", "defaultWidth", "descent"];
    static strings = ["fallbackName", "loadedName", "mimetype", "name"];
    static #Cs = Math.ceil(2 * this.bools.length / 8);
    static #Ts = this.#Cs + 8 * this.numbers.length;
    static #Ms = this.#Ts + 1 + 8;
    static #ks = this.#Ms + 1 + 48;
    static #Ds = this.#ks + 1 + 6;
    #As;
    #Ss;
    #_s;
    constructor({ data: t2, extra: e2 }) {
      this.#As = t2, this.#Ss = new TextDecoder(), this.#_s = new DataView(this.#As), e2 && Object.assign(this, e2);
    }
    #Ps(t2) {
      E(t2 < ui.bools.length, "Invalid boolean index");
      const e2 = Math.floor(t2 / 4), i2 = 2 * t2 % 8, s2 = this.#_s.getUint8(e2) >> i2 & 3;
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
      return E(t2 < ui.numbers.length, "Invalid number index"), this.#_s.getFloat64(ui.#Cs + 8 * t2);
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
      let t2 = ui.#Ts;
      if (0 === this.#_s.getUint8(t2)) return;
      t2 += 1;
      const e2 = [];
      for (let i2 = 0; i2 < 4; i2++) e2.push(this.#_s.getInt16(t2, true)), t2 += 2;
      return e2;
    }
    get fontMatrix() {
      let t2 = ui.#Ms;
      if (0 === this.#_s.getUint8(t2)) return;
      t2 += 1;
      const e2 = [];
      for (let i2 = 0; i2 < 6; i2++) e2.push(this.#_s.getFloat64(t2, true)), t2 += 8;
      return e2;
    }
    get defaultVMetrics() {
      let t2 = ui.#ks;
      if (0 === this.#_s.getUint8(t2)) return;
      t2 += 1;
      const e2 = [];
      for (let i2 = 0; i2 < 3; i2++) e2.push(this.#_s.getInt16(t2, true)), t2 += 2;
      return e2;
    }
    #Es(t2) {
      E(t2 < ui.strings.length, "Invalid string index");
      let e2 = ui.#Ds + 4;
      for (let i3 = 0; i3 < t2; i3++) e2 += this.#_s.getUint32(e2) + 4;
      const i2 = this.#_s.getUint32(e2), s2 = new Uint8Array(i2);
      return s2.set(new Uint8Array(this.#As, e2 + 4, i2)), this.#Ss.decode(s2);
    }
    get fallbackName() {
      return this.#Es(0);
    }
    get loadedName() {
      return this.#Es(1);
    }
    get mimetype() {
      return this.#Es(2);
    }
    get name() {
      return this.#Es(3);
    }
    get data() {
      let t2 = ui.#Ds;
      t2 += 4 + this.#_s.getUint32(t2), t2 += 4 + this.#_s.getUint32(t2), t2 += 4 + this.#_s.getUint32(t2);
      const e2 = this.#_s.getUint32(t2);
      if (0 !== e2) return new Uint8Array(this.#As, t2 + 4, e2);
    }
    clearData() {
      let t2 = ui.#Ds;
      t2 += 4 + this.#_s.getUint32(t2), t2 += 4 + this.#_s.getUint32(t2), t2 += 4 + this.#_s.getUint32(t2);
      const e2 = this.#_s.getUint32(t2);
      new Uint8Array(this.#As, t2 + 4, e2).fill(0), this.#_s.setUint32(t2, 0);
    }
    get cssFontInfo() {
      let t2 = ui.#Ds;
      t2 += 4 + this.#_s.getUint32(t2), t2 += 4 + this.#_s.getUint32(t2);
      const e2 = this.#_s.getUint32(t2);
      if (0 === e2) return null;
      const i2 = new Uint8Array(e2);
      return i2.set(new Uint8Array(this.#As, t2 + 4, e2)), new ci(i2.buffer);
    }
    get systemFontInfo() {
      let t2 = ui.#Ds;
      t2 += 4 + this.#_s.getUint32(t2);
      const e2 = this.#_s.getUint32(t2);
      if (0 === e2) return null;
      const i2 = new Uint8Array(e2);
      return i2.set(new Uint8Array(this.#As, t2 + 4, e2)), new di(i2.buffer);
    }
    static write(t2) {
      const e2 = t2.systemFontInfo ? di.write(t2.systemFontInfo) : null, i2 = t2.cssFontInfo ? ci.write(t2.cssFontInfo) : null, s2 = new TextEncoder(), n2 = {};
      let r2 = 0;
      for (const e3 of ui.strings) n2[e3] = s2.encode(t2[e3]), r2 += 4 + n2[e3].length;
      const a2 = ui.#Ds + 4 + r2 + 4 + (e2 ? e2.byteLength : 0) + 4 + (i2 ? i2.byteLength : 0) + 4 + (t2.data ? t2.data.length : 0), o2 = new ArrayBuffer(a2), l2 = new Uint8Array(o2), h2 = new DataView(o2);
      let c2 = 0;
      const d2 = ui.bools.length;
      let u2 = 0, p2 = 0;
      for (let e3 = 0; e3 < d2; e3++) {
        const i3 = t2[ui.bools[e3]];
        u2 |= (void 0 === i3 ? 0 : i3 ? 2 : 1) << p2, p2 += 2, 8 !== p2 && e3 !== d2 - 1 || (h2.setUint8(c2++, u2), u2 = 0, p2 = 0);
      }
      E(c2 === ui.#Cs, "FontInfo.write: Boolean properties offset mismatch");
      for (const e3 of ui.numbers) h2.setFloat64(c2, t2[e3]), c2 += 8;
      if (E(c2 === ui.#Ts, "FontInfo.write: Number properties offset mismatch"), t2.bbox) {
        h2.setUint8(c2++, 4);
        for (const e3 of t2.bbox) h2.setInt16(c2, e3, true), c2 += 2;
      } else h2.setUint8(c2++, 0), c2 += 8;
      if (E(c2 === ui.#Ms, "FontInfo.write: BBox properties offset mismatch"), t2.fontMatrix) {
        h2.setUint8(c2++, 6);
        for (const e3 of t2.fontMatrix) h2.setFloat64(c2, e3, true), c2 += 8;
      } else h2.setUint8(c2++, 0), c2 += 48;
      if (E(c2 === ui.#ks, "FontInfo.write: FontMatrix properties offset mismatch"), t2.defaultVMetrics) {
        h2.setUint8(c2++, 1);
        for (const e3 of t2.defaultVMetrics) h2.setInt16(c2, e3, true), c2 += 2;
      } else h2.setUint8(c2++, 0), c2 += 6;
      E(c2 === ui.#Ds, "FontInfo.write: DefaultVMetrics properties offset mismatch"), h2.setUint32(ui.#Ds, 0), c2 += 4;
      for (const t3 of ui.strings) {
        const e3 = n2[t3], i3 = e3.length;
        h2.setUint32(c2, i3), l2.set(e3, c2 + 4), c2 += 4 + i3;
      }
      if (h2.setUint32(ui.#Ds, c2 - ui.#Ds - 4), e2) {
        const t3 = e2.byteLength;
        h2.setUint32(c2, t3), E(c2 + 4 + t3 <= o2.byteLength, "FontInfo.write: Buffer overflow at systemFontInfo"), l2.set(new Uint8Array(e2), c2 + 4), c2 += 4 + t3;
      } else h2.setUint32(c2, 0), c2 += 4;
      if (i2) {
        const t3 = i2.byteLength;
        h2.setUint32(c2, t3), E(c2 + 4 + t3 <= o2.byteLength, "FontInfo.write: Buffer overflow at cssFontInfo"), l2.set(new Uint8Array(i2), c2 + 4), c2 += 4 + t3;
      } else h2.setUint32(c2, 0), c2 += 4;
      return void 0 === t2.data ? (h2.setUint32(c2, 0), c2 += 4) : (h2.setUint32(c2, t2.data.length), l2.set(t2.data, c2 + 4), c2 += 4 + t2.data.length), E(c2 <= o2.byteLength, "FontInfo.write: Buffer overflow"), o2.transferToFixedLength(c2);
    }
  }
  class pi {
    static #Rs = null;
    static #Ls = "";
    static get workerPort() {
      return this.#Rs;
    }
    static set workerPort(t2) {
      if (!("undefined" != typeof Worker && t2 instanceof Worker) && null !== t2) throw new Error("Invalid `workerPort` type.");
      this.#Rs = t2;
    }
    static get workerSrc() {
      return this.#Ls;
    }
    static set workerSrc(t2) {
      if ("string" != typeof t2) throw new Error("Invalid `workerSrc` type.");
      this.#Ls = t2;
    }
  }
  class gi {
    #Bs;
    #Fs;
    constructor({ parsedData: t2, rawData: e2 }) {
      this.#Bs = t2, this.#Fs = e2;
    }
    getRaw() {
      return this.#Fs;
    }
    get(t2) {
      return this.#Bs.get(t2) ?? null;
    }
    [Symbol.iterator]() {
      return this.#Bs.entries();
    }
  }
  const mi = /* @__PURE__ */ Symbol("INTERNAL");
  class fi {
    #Os = false;
    #Ns = false;
    #Us = false;
    #zs = true;
    constructor(t2, { name: e2, intent: i2, usage: s2, rbGroups: n2 }) {
      this.#Os = !!(2 & t2), this.#Ns = !!(4 & t2), this.name = e2, this.intent = i2, this.usage = s2, this.rbGroups = n2;
    }
    get visible() {
      if (this.#Us) return this.#zs;
      if (!this.#zs) return false;
      const { print: t2, view: e2 } = this.usage;
      return this.#Os ? "OFF" !== e2?.viewState : !this.#Ns || "OFF" !== t2?.printState;
    }
    _setVisible(t2, e2, i2 = false) {
      t2 !== mi && S("Internal method `_setVisible` called."), this.#Us = i2, this.#zs = e2;
    }
  }
  class bi {
    #Hs = null;
    #js = /* @__PURE__ */ new Map();
    #$s = null;
    #Vs = null;
    constructor(t2, e2 = 2) {
      if (this.renderingIntent = e2, this.name = null, this.creator = null, null !== t2) {
        this.name = t2.name, this.creator = t2.creator, this.#Vs = t2.order;
        for (const i2 of t2.groups) this.#js.set(i2.id, new fi(e2, i2));
        if ("OFF" === t2.baseState) for (const t3 of this.#js.values()) t3._setVisible(mi, false);
        for (const e3 of t2.on) this.#js.get(e3)._setVisible(mi, true);
        for (const e3 of t2.off) this.#js.get(e3)._setVisible(mi, false);
        this.#$s = this.getHash();
      }
    }
    #Gs(t2) {
      const e2 = t2.length;
      if (e2 < 2) return true;
      const i2 = t2[0];
      for (let s2 = 1; s2 < e2; s2++) {
        const e3 = t2[s2];
        let n2;
        if (Array.isArray(e3)) n2 = this.#Gs(e3);
        else {
          if (!this.#js.has(e3)) return _(`Optional content group not found: ${e3}`), true;
          n2 = this.#js.get(e3).visible;
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
      if (0 === this.#js.size) return true;
      if (!t2) return A("Optional content group not defined."), true;
      if ("OCG" === t2.type) return this.#js.has(t2.id) ? this.#js.get(t2.id).visible : (_(`Optional content group not found: ${t2.id}`), true);
      if ("OCMD" === t2.type) {
        if (t2.expression) return this.#Gs(t2.expression);
        if (!t2.policy || "AnyOn" === t2.policy) {
          for (const e2 of t2.ids) {
            if (!this.#js.has(e2)) return _(`Optional content group not found: ${e2}`), true;
            if (this.#js.get(e2).visible) return true;
          }
          return false;
        }
        if ("AllOn" === t2.policy) {
          for (const e2 of t2.ids) {
            if (!this.#js.has(e2)) return _(`Optional content group not found: ${e2}`), true;
            if (!this.#js.get(e2).visible) return false;
          }
          return true;
        }
        if ("AnyOff" === t2.policy) {
          for (const e2 of t2.ids) {
            if (!this.#js.has(e2)) return _(`Optional content group not found: ${e2}`), true;
            if (!this.#js.get(e2).visible) return true;
          }
          return false;
        }
        if ("AllOff" === t2.policy) {
          for (const e2 of t2.ids) {
            if (!this.#js.has(e2)) return _(`Optional content group not found: ${e2}`), true;
            if (this.#js.get(e2).visible) return false;
          }
          return true;
        }
        return _(`Unknown optional content policy ${t2.policy}.`), true;
      }
      return _(`Unknown group type ${t2.type}.`), true;
    }
    setVisibility(t2, e2 = true, i2 = true) {
      const s2 = this.#js.get(t2);
      if (s2) {
        if (i2 && e2 && s2.rbGroups.length) for (const e3 of s2.rbGroups) for (const i3 of e3) i3 !== t2 && this.#js.get(i3)?._setVisible(mi, false, true);
        s2._setVisible(mi, !!e2, true), this.#Hs = null;
      } else _(`Optional content group not found: ${t2}`);
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
        const t3 = this.#js.get(s2);
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
      this.#Hs = null;
    }
    get hasInitialVisibility() {
      return null === this.#$s || this.getHash() === this.#$s;
    }
    getOrder() {
      return this.#js.size ? this.#Vs ? this.#Vs.slice() : [...this.#js.keys()] : null;
    }
    getGroup(t2) {
      return this.#js.get(t2) || null;
    }
    getHash() {
      if (null !== this.#Hs) return this.#Hs;
      const t2 = new Vt();
      for (const [e2, i2] of this.#js) t2.update(`${e2}:${i2.visible}`);
      return this.#Hs = t2.hexdigest();
    }
    [Symbol.iterator]() {
      return this.#js.entries();
    }
  }
  class vi {
    constructor(t2, { disableRange: e2 = false, disableStream: i2 = false }) {
      E(t2, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
      const { length: s2, initialData: n2, progressiveDone: r2, contentDispositionFilename: a2 } = t2;
      if (this._queuedChunks = [], this._progressiveDone = r2, this._contentDispositionFilename = a2, n2?.length > 0) {
        const t3 = n2 instanceof Uint8Array && n2.byteLength === n2.buffer.byteLength ? n2.buffer : new Uint8Array(n2).buffer;
        this._queuedChunks.push(t3);
      }
      this._pdfDataRangeTransport = t2, this._isStreamingSupported = !i2, this._isRangeSupported = !e2, this._contentLength = s2, this._fullRequestReader = null, this._rangeReaders = [], t2.addRangeListener((t3, e3) => {
        this._onReceiveData({ begin: t3, chunk: e3 });
      }), t2.addProgressListener((t3, e3) => {
        this._onProgress({ loaded: t3, total: e3 });
      }), t2.addProgressiveReadListener((t3) => {
        this._onReceiveData({ chunk: t3 });
      }), t2.addProgressiveDoneListener(() => {
        this._onProgressiveDone();
      }), t2.transportReady();
    }
    _onReceiveData({ begin: t2, chunk: e2 }) {
      const i2 = e2 instanceof Uint8Array && e2.byteLength === e2.buffer.byteLength ? e2.buffer : new Uint8Array(e2).buffer;
      void 0 === t2 ? this._fullRequestReader ? this._fullRequestReader._enqueue(i2) : this._queuedChunks.push(i2) : E(this._rangeReaders.some(function(e3) {
        return e3._begin === t2 && (e3._enqueue(i2), true);
      }), "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
    get _progressiveDataLength() {
      return this._fullRequestReader?._loaded ?? 0;
    }
    _onProgress(t2) {
      void 0 === t2.total ? this._rangeReaders[0]?.onProgress?.({ loaded: t2.loaded }) : this._fullRequestReader?.onProgress?.({ loaded: t2.loaded, total: t2.total });
    }
    _onProgressiveDone() {
      this._fullRequestReader?.progressiveDone(), this._progressiveDone = true;
    }
    _removeRangeReader(t2) {
      const e2 = this._rangeReaders.indexOf(t2);
      e2 >= 0 && this._rangeReaders.splice(e2, 1);
    }
    getFullReader() {
      E(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
      const t2 = this._queuedChunks;
      return this._queuedChunks = null, new yi(this, t2, this._progressiveDone, this._contentDispositionFilename);
    }
    getRangeReader(t2, e2) {
      if (e2 <= this._progressiveDataLength) return null;
      const i2 = new wi(this, t2, e2);
      return this._pdfDataRangeTransport.requestDataRange(t2, e2), this._rangeReaders.push(i2), i2;
    }
    cancelAllRequests(t2) {
      this._fullRequestReader?.cancel(t2);
      for (const e2 of this._rangeReaders.slice(0)) e2.cancel(t2);
      this._pdfDataRangeTransport.abort();
    }
  }
  class yi {
    constructor(t2, e2, i2 = false, s2 = null) {
      this._stream = t2, this._done = i2 || false, this._filename = it(s2) ? s2 : null, this._queuedChunks = e2 || [], this._loaded = 0;
      for (const t3 of this._queuedChunks) this._loaded += t3.byteLength;
      this._requests = [], this._headersReady = Promise.resolve(), t2._fullRequestReader = this, this.onProgress = null;
    }
    _enqueue(t2) {
      this._done || (this._requests.length > 0 ? this._requests.shift().resolve({ value: t2, done: false }) : this._queuedChunks.push(t2), this._loaded += t2.byteLength);
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
      if (this._queuedChunks.length > 0) return { value: this._queuedChunks.shift(), done: false };
      if (this._done) return { value: void 0, done: true };
      const t2 = Promise.withResolvers();
      return this._requests.push(t2), t2.promise;
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
  class wi {
    constructor(t2, e2, i2) {
      this._stream = t2, this._begin = e2, this._end = i2, this._queuedChunk = null, this._requests = [], this._done = false, this.onProgress = null;
    }
    _enqueue(t2) {
      if (!this._done) {
        if (0 === this._requests.length) this._queuedChunk = t2;
        else {
          this._requests.shift().resolve({ value: t2, done: false });
          for (const t3 of this._requests) t3.resolve({ value: void 0, done: true });
          this._requests.length = 0;
        }
        this._done = true, this._stream._removeRangeReader(this);
      }
    }
    get isStreamingSupported() {
      return false;
    }
    async read() {
      if (this._queuedChunk) {
        const t3 = this._queuedChunk;
        return this._queuedChunk = null, { value: t3, done: false };
      }
      if (this._done) return { value: void 0, done: true };
      const t2 = Promise.withResolvers();
      return this._requests.push(t2), t2.promise;
    }
    cancel(t2) {
      this._done = true;
      for (const t3 of this._requests) t3.resolve({ value: void 0, done: true });
      this._requests.length = 0, this._stream._removeRangeReader(this);
    }
  }
  function xi(t2, e2) {
    const i2 = new Headers();
    if (!t2 || !e2 || "object" != typeof e2) return i2;
    for (const t3 in e2) {
      const s2 = e2[t3];
      void 0 !== s2 && i2.append(t3, s2);
    }
    return i2;
  }
  function Ai(t2) {
    return URL.parse(t2)?.origin ?? null;
  }
  function _i({ responseHeaders: t2, isHttp: e2, rangeChunkSize: i2, disableRange: s2 }) {
    const n2 = { allowRangeRequests: false, suggestedLength: void 0 }, r2 = parseInt(t2.get("Content-Length"), 10);
    return Number.isInteger(r2) ? (n2.suggestedLength = r2, r2 <= 2 * i2 || s2 || !e2 || "bytes" !== t2.get("Accept-Ranges") || "identity" !== (t2.get("Content-Encoding") || "identity") || (n2.allowRangeRequests = true), n2) : n2;
  }
  function Si(t2) {
    const e2 = t2.get("Content-Disposition");
    if (e2) {
      let t3 = (function(t4) {
        let e3 = true, i2 = s2("filename\\*", "i").exec(t4);
        if (i2) {
          i2 = i2[1];
          let t5 = a2(i2);
          return t5 = unescape(t5), t5 = o2(t5), t5 = l2(t5), r2(t5);
        }
        if (i2 = (function(t5) {
          const e4 = [];
          let i3;
          const n3 = s2("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
          for (; null !== (i3 = n3.exec(t5)); ) {
            let [, t6, s3, n4] = i3;
            if (t6 = parseInt(t6, 10), t6 in e4) {
              if (0 === t6) break;
            } else e4[t6] = [s3, n4];
          }
          const r3 = [];
          for (let t6 = 0; t6 < e4.length && t6 in e4; ++t6) {
            let [i4, s3] = e4[t6];
            s3 = a2(s3), i4 && (s3 = unescape(s3), 0 === t6 && (s3 = o2(s3))), r3.push(s3);
          }
          return r3.join("");
        })(t4), i2) return r2(l2(i2));
        if (i2 = s2("filename", "i").exec(t4), i2) {
          i2 = i2[1];
          let t5 = a2(i2);
          return t5 = l2(t5), r2(t5);
        }
        function s2(t5, e4) {
          return new RegExp("(?:^|;)\\s*" + t5 + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', e4);
        }
        function n2(t5, i3) {
          if (t5) {
            if (!/^[\x00-\xFF]+$/.test(i3)) return i3;
            try {
              const s3 = new TextDecoder(t5, { fatal: true }), n3 = O(i3);
              i3 = s3.decode(n3), e3 = false;
            } catch {
            }
          }
          return i3;
        }
        function r2(t5) {
          return e3 && /[\x80-\xff]/.test(t5) && (t5 = n2("utf-8", t5), e3 && (t5 = n2("iso-8859-1", t5))), t5;
        }
        function a2(t5) {
          if (t5.startsWith('"')) {
            const e4 = t5.slice(1).split('\\"');
            for (let t6 = 0; t6 < e4.length; ++t6) {
              const i3 = e4[t6].indexOf('"');
              -1 !== i3 && (e4[t6] = e4[t6].slice(0, i3), e4.length = t6 + 1), e4[t6] = e4[t6].replaceAll(/\\(.)/g, "$1");
            }
            t5 = e4.join('"');
          }
          return t5;
        }
        function o2(t5) {
          const e4 = t5.indexOf("'");
          return -1 === e4 ? t5 : n2(t5.slice(0, e4), t5.slice(e4 + 1).replace(/^[^']*'/, ""));
        }
        function l2(t5) {
          return !t5.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t5) ? t5 : t5.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(t6, e4, i3, s3) {
            if ("q" === i3 || "Q" === i3) return n2(e4, s3 = (s3 = s3.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function(t7, e5) {
              return String.fromCharCode(parseInt(e5, 16));
            }));
            try {
              s3 = atob(s3);
            } catch {
            }
            return n2(e4, s3);
          });
        }
        return "";
      })(e2);
      if (t3.includes("%")) try {
        t3 = decodeURIComponent(t3);
      } catch {
      }
      if (it(t3)) return t3;
    }
    return null;
  }
  function Ei(t2, e2) {
    return new R(`Unexpected server response (${t2}) while retrieving PDF "${e2}".`, t2, 404 === t2 || 0 === t2 && e2.startsWith("file:"));
  }
  function Ci(t2) {
    return 200 === t2 || 206 === t2;
  }
  function Ti(t2, e2, i2) {
    return { method: "GET", headers: t2, signal: i2.signal, mode: "cors", credentials: e2 ? "include" : "same-origin", redirect: "follow" };
  }
  function Mi(t2) {
    return t2 instanceof Uint8Array ? t2.buffer : t2 instanceof ArrayBuffer ? t2 : (_(`getArrayBuffer - unexpected data format: ${t2}`), new Uint8Array(t2).buffer);
  }
  class ki {
    _responseOrigin = null;
    constructor(t2) {
      this.source = t2, this.isHttp = /^https?:/i.test(t2.url), this.headers = xi(this.isHttp, t2.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
    }
    get _progressiveDataLength() {
      return this._fullRequestReader?._loaded ?? 0;
    }
    getFullReader() {
      return E(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new Di(this), this._fullRequestReader;
    }
    getRangeReader(t2, e2) {
      if (e2 <= this._progressiveDataLength) return null;
      const i2 = new Pi(this, t2, e2);
      return this._rangeRequestReaders.push(i2), i2;
    }
    cancelAllRequests(t2) {
      this._fullRequestReader?.cancel(t2);
      for (const e2 of this._rangeRequestReaders.slice(0)) e2.cancel(t2);
    }
  }
  class Di {
    constructor(t2) {
      this._stream = t2, this._reader = null, this._loaded = 0, this._filename = null;
      const e2 = t2.source;
      this._withCredentials = e2.withCredentials || false, this._contentLength = e2.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e2.disableRange || false, this._rangeChunkSize = e2.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = true), this._abortController = new AbortController(), this._isStreamingSupported = !e2.disableStream, this._isRangeSupported = !e2.disableRange;
      const i2 = new Headers(t2.headers), s2 = e2.url;
      fetch(s2, Ti(i2, this._withCredentials, this._abortController)).then((e3) => {
        if (t2._responseOrigin = Ai(e3.url), !Ci(e3.status)) throw Ei(e3.status, s2);
        this._reader = e3.body.getReader(), this._headersCapability.resolve();
        const i3 = e3.headers, { allowRangeRequests: n2, suggestedLength: r2 } = _i({ responseHeaders: i3, isHttp: t2.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
        this._isRangeSupported = n2, this._contentLength = r2 || this._contentLength, this._filename = Si(i3), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new B("Streaming is disabled."));
      }).catch(this._headersCapability.reject), this.onProgress = null;
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
      return e2 ? { value: t2, done: e2 } : (this._loaded += t2.byteLength, this.onProgress?.({ loaded: this._loaded, total: this._contentLength }), { value: Mi(t2), done: false });
    }
    cancel(t2) {
      this._reader?.cancel(t2), this._abortController.abort();
    }
  }
  class Pi {
    constructor(t2, e2, i2) {
      this._stream = t2, this._reader = null, this._loaded = 0;
      const s2 = t2.source;
      this._withCredentials = s2.withCredentials || false, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !s2.disableStream, this._abortController = new AbortController();
      const n2 = new Headers(t2.headers);
      n2.append("Range", `bytes=${e2}-${i2 - 1}`);
      const r2 = s2.url;
      fetch(r2, Ti(n2, this._withCredentials, this._abortController)).then((e3) => {
        const i3 = Ai(e3.url);
        if (i3 !== t2._responseOrigin) throw new Error(`Expected range response-origin "${i3}" to match "${t2._responseOrigin}".`);
        if (!Ci(e3.status)) throw Ei(e3.status, r2);
        this._readCapability.resolve(), this._reader = e3.body.getReader();
      }).catch(this._readCapability.reject), this.onProgress = null;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      await this._readCapability.promise;
      const { value: t2, done: e2 } = await this._reader.read();
      return e2 ? { value: t2, done: e2 } : (this._loaded += t2.byteLength, this.onProgress?.({ loaded: this._loaded }), { value: Mi(t2), done: false });
    }
    cancel(t2) {
      this._reader?.cancel(t2), this._abortController.abort();
    }
  }
  class Ii {
    _responseOrigin = null;
    constructor({ url: t2, httpHeaders: e2, withCredentials: i2 }) {
      this.url = t2, this.isHttp = /^https?:/i.test(t2), this.headers = xi(this.isHttp, e2), this.withCredentials = i2 || false, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
    }
    request(t2) {
      const e2 = new XMLHttpRequest(), i2 = this.currXhrId++, s2 = this.pendingRequests[i2] = { xhr: e2 };
      e2.open("GET", this.url), e2.withCredentials = this.withCredentials;
      for (const [t3, i3] of this.headers) e2.setRequestHeader(t3, i3);
      return this.isHttp && "begin" in t2 && "end" in t2 ? (e2.setRequestHeader("Range", `bytes=${t2.begin}-${t2.end - 1}`), s2.expectedStatus = 206) : s2.expectedStatus = 200, e2.responseType = "arraybuffer", E(t2.onError, "Expected `onError` callback to be provided."), e2.onerror = () => {
        t2.onError(e2.status);
      }, e2.onreadystatechange = this.onStateChange.bind(this, i2), e2.onprogress = this.onProgress.bind(this, i2), s2.onHeadersReceived = t2.onHeadersReceived, s2.onDone = t2.onDone, s2.onError = t2.onError, s2.onProgress = t2.onProgress, e2.send(null), i2;
    }
    onProgress(t2, e2) {
      const i2 = this.pendingRequests[t2];
      i2 && i2.onProgress?.(e2);
    }
    onStateChange(t2, e2) {
      const i2 = this.pendingRequests[t2];
      if (!i2) return;
      const s2 = i2.xhr;
      if (s2.readyState >= 2 && i2.onHeadersReceived && (i2.onHeadersReceived(), delete i2.onHeadersReceived), 4 !== s2.readyState) return;
      if (!(t2 in this.pendingRequests)) return;
      if (delete this.pendingRequests[t2], 0 === s2.status && this.isHttp) return void i2.onError(s2.status);
      const n2 = s2.status || 200;
      if ((200 !== n2 || 206 !== i2.expectedStatus) && n2 !== i2.expectedStatus) return void i2.onError(s2.status);
      const r2 = (function(t3) {
        const e3 = t3.response;
        return "string" != typeof e3 ? e3 : O(e3).buffer;
      })(s2);
      if (206 === n2) {
        const t3 = s2.getResponseHeader("Content-Range"), e3 = /bytes (\d+)-(\d+)\/(\d+)/.exec(t3);
        e3 ? i2.onDone({ begin: parseInt(e3[1], 10), chunk: r2 }) : (_('Missing or invalid "Content-Range" header.'), i2.onError(0));
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
      delete this.pendingRequests[t2], e2.abort();
    }
  }
  class Ri {
    constructor(t2) {
      this._source = t2, this._manager = new Ii(t2), this._rangeChunkSize = t2.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
    }
    _onRangeRequestReaderClosed(t2) {
      const e2 = this._rangeRequestReaders.indexOf(t2);
      e2 >= 0 && this._rangeRequestReaders.splice(e2, 1);
    }
    getFullReader() {
      return E(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new Li(this._manager, this._source), this._fullRequestReader;
    }
    getRangeReader(t2, e2) {
      const i2 = new Bi(this._manager, t2, e2);
      return i2.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(i2), i2;
    }
    cancelAllRequests(t2) {
      this._fullRequestReader?.cancel(t2);
      for (const e2 of this._rangeRequestReaders.slice(0)) e2.cancel(t2);
    }
  }
  class Li {
    constructor(t2, e2) {
      this._manager = t2, this._url = e2.url, this._fullRequestId = t2.request({ onHeadersReceived: this._onHeadersReceived.bind(this), onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) }), this._headersCapability = Promise.withResolvers(), this._disableRange = e2.disableRange || false, this._contentLength = e2.length, this._rangeChunkSize = e2.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = true), this._isStreamingSupported = false, this._isRangeSupported = false, this._cachedChunks = [], this._requests = [], this._done = false, this._storedError = void 0, this._filename = null, this.onProgress = null;
    }
    _onHeadersReceived() {
      const t2 = this._fullRequestId, e2 = this._manager.getRequestXhr(t2);
      this._manager._responseOrigin = Ai(e2.responseURL);
      const i2 = e2.getAllResponseHeaders(), s2 = new Headers(i2 ? i2.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((t3) => {
        const [e3, ...i3] = t3.split(": ");
        return [e3, i3.join(": ")];
      }) : []), { allowRangeRequests: n2, suggestedLength: r2 } = _i({ responseHeaders: s2, isHttp: this._manager.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
      n2 && (this._isRangeSupported = true), this._contentLength = r2 || this._contentLength, this._filename = Si(s2), this._isRangeSupported && this._manager.abortRequest(t2), this._headersCapability.resolve();
    }
    _onDone(t2) {
      if (t2 && (this._requests.length > 0 ? this._requests.shift().resolve({ value: t2.chunk, done: false }) : this._cachedChunks.push(t2.chunk)), this._done = true, !(this._cachedChunks.length > 0)) {
        for (const t3 of this._requests) t3.resolve({ value: void 0, done: true });
        this._requests.length = 0;
      }
    }
    _onError(t2) {
      this._storedError = Ei(t2, this._url), this._headersCapability.reject(this._storedError);
      for (const t3 of this._requests) t3.reject(this._storedError);
      this._requests.length = 0, this._cachedChunks.length = 0;
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
      if (await this._headersCapability.promise, this._storedError) throw this._storedError;
      if (this._cachedChunks.length > 0) return { value: this._cachedChunks.shift(), done: false };
      if (this._done) return { value: void 0, done: true };
      const t2 = Promise.withResolvers();
      return this._requests.push(t2), t2.promise;
    }
    cancel(t2) {
      this._done = true, this._headersCapability.reject(t2);
      for (const t3 of this._requests) t3.resolve({ value: void 0, done: true });
      this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
    }
  }
  class Bi {
    constructor(t2, e2, i2) {
      this._manager = t2, this._url = t2.url, this._requestId = t2.request({ begin: e2, end: i2, onHeadersReceived: this._onHeadersReceived.bind(this), onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) }), this._requests = [], this._queuedChunk = null, this._done = false, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
    }
    _onHeadersReceived() {
      const t2 = Ai(this._manager.getRequestXhr(this._requestId)?.responseURL);
      t2 !== this._manager._responseOrigin && (this._storedError = new Error(`Expected range response-origin "${t2}" to match "${this._manager._responseOrigin}".`), this._onError(0));
    }
    _close() {
      this.onClosed?.(this);
    }
    _onDone(t2) {
      const e2 = t2.chunk;
      this._requests.length > 0 ? this._requests.shift().resolve({ value: e2, done: false }) : this._queuedChunk = e2, this._done = true;
      for (const t3 of this._requests) t3.resolve({ value: void 0, done: true });
      this._requests.length = 0, this._close();
    }
    _onError(t2) {
      this._storedError ??= Ei(t2, this._url);
      for (const t3 of this._requests) t3.reject(this._storedError);
      this._requests.length = 0, this._queuedChunk = null;
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
        return this._queuedChunk = null, { value: t3, done: false };
      }
      if (this._done) return { value: void 0, done: true };
      const t2 = Promise.withResolvers();
      return this._requests.push(t2), t2.promise;
    }
    cancel(t2) {
      this._done = true;
      for (const t3 of this._requests) t3.resolve({ value: void 0, done: true });
      this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
    }
  }
  const Fi = /^[a-z][a-z0-9\-+.]+:/i;
  class Oi {
    constructor(t2) {
      this.source = t2, this.url = (function(t3) {
        if (Fi.test(t3)) return new URL(t3);
        const e2 = process.getBuiltinModule("url");
        return new URL(e2.pathToFileURL(t3));
      })(t2.url), E("file:" === this.url.protocol, "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
    }
    get _progressiveDataLength() {
      return this._fullRequestReader?._loaded ?? 0;
    }
    getFullReader() {
      return E(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new Ni(this), this._fullRequestReader;
    }
    getRangeReader(t2, e2) {
      if (e2 <= this._progressiveDataLength) return null;
      const i2 = new Ui(this, t2, e2);
      return this._rangeRequestReaders.push(i2), i2;
    }
    cancelAllRequests(t2) {
      this._fullRequestReader?.cancel(t2);
      for (const e2 of this._rangeRequestReaders.slice(0)) e2.cancel(t2);
    }
  }
  class Ni {
    constructor(t2) {
      this._url = t2.url, this._done = false, this._storedError = null, this.onProgress = null;
      const e2 = t2.source;
      this._contentLength = e2.length, this._loaded = 0, this._filename = null, this._disableRange = e2.disableRange || false, this._rangeChunkSize = e2.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = true), this._isStreamingSupported = !e2.disableStream, this._isRangeSupported = !e2.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
      const i2 = process.getBuiltinModule("fs");
      i2.promises.lstat(this._url).then((t3) => {
        this._contentLength = t3.size, this._setReadableStream(i2.createReadStream(this._url)), this._headersCapability.resolve();
      }, (t3) => {
        "ENOENT" === t3.code && (t3 = Ei(0, this._url.href)), this._storedError = t3, this._headersCapability.reject(t3);
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
      if (await this._readCapability.promise, this._done) return { value: void 0, done: true };
      if (this._storedError) throw this._storedError;
      const t2 = this._readableStream.read();
      return null === t2 ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t2.length, this.onProgress?.({ loaded: this._loaded, total: this._contentLength }), { value: new Uint8Array(t2).buffer, done: false });
    }
    cancel(t2) {
      this._readableStream ? this._readableStream.destroy(t2) : this._error(t2);
    }
    _error(t2) {
      this._storedError = t2, this._readCapability.resolve();
    }
    _setReadableStream(t2) {
      this._readableStream = t2, t2.on("readable", () => {
        this._readCapability.resolve();
      }), t2.on("end", () => {
        t2.destroy(), this._done = true, this._readCapability.resolve();
      }), t2.on("error", (t3) => {
        this._error(t3);
      }), !this._isStreamingSupported && this._isRangeSupported && this._error(new B("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
    }
  }
  class Ui {
    constructor(t2, e2, i2) {
      this._url = t2.url, this._done = false, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
      const s2 = t2.source;
      this._isStreamingSupported = !s2.disableStream;
      const n2 = process.getBuiltinModule("fs");
      this._setReadableStream(n2.createReadStream(this._url, { start: e2, end: i2 - 1 }));
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      if (await this._readCapability.promise, this._done) return { value: void 0, done: true };
      if (this._storedError) throw this._storedError;
      const t2 = this._readableStream.read();
      return null === t2 ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t2.length, this.onProgress?.({ loaded: this._loaded }), { value: new Uint8Array(t2).buffer, done: false });
    }
    cancel(t2) {
      this._readableStream ? this._readableStream.destroy(t2) : this._error(t2);
    }
    _error(t2) {
      this._storedError = t2, this._readCapability.resolve();
    }
    _setReadableStream(t2) {
      this._readableStream = t2, t2.on("readable", () => {
        this._readCapability.resolve();
      }), t2.on("end", () => {
        t2.destroy(), this._done = true, this._readCapability.resolve();
      }), t2.on("error", (t3) => {
        this._error(t3);
      }), this._storedError && this._readableStream.destroy(this._storedError);
    }
  }
  const zi = /* @__PURE__ */ Symbol("INITIAL_DATA");
  class Hi {
    #Ws = /* @__PURE__ */ Object.create(null);
    #qs(t2) {
      return this.#Ws[t2] ||= { ...Promise.withResolvers(), data: zi };
    }
    get(t2, e2 = null) {
      if (e2) {
        const i3 = this.#qs(t2);
        return i3.promise.then(() => e2(i3.data)), null;
      }
      const i2 = this.#Ws[t2];
      if (!i2 || i2.data === zi) throw new Error(`Requesting object that isn't resolved yet ${t2}.`);
      return i2.data;
    }
    has(t2) {
      const e2 = this.#Ws[t2];
      return !!e2 && e2.data !== zi;
    }
    delete(t2) {
      const e2 = this.#Ws[t2];
      return !(!e2 || e2.data === zi || (delete this.#Ws[t2], 0));
    }
    resolve(t2, e2 = null) {
      const i2 = this.#qs(t2);
      i2.data = e2, i2.resolve();
    }
    clear() {
      for (const t2 in this.#Ws) {
        const { data: e2 } = this.#Ws[t2];
        e2?.bitmap?.close();
      }
      this.#Ws = /* @__PURE__ */ Object.create(null);
    }
    *[Symbol.iterator]() {
      for (const t2 in this.#Ws) {
        const { data: e2 } = this.#Ws[t2];
        e2 !== zi && (yield [t2, e2]);
      }
    }
  }
  class ji {
    #Xs = Promise.withResolvers();
    #xt = null;
    #Ys = false;
    #Ks = !!globalThis.FontInspector?.enabled;
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
    #cn = null;
    static #dn = /* @__PURE__ */ new Map();
    static #un = /* @__PURE__ */ new Map();
    static #pn = /* @__PURE__ */ new WeakMap();
    static #gn = null;
    static #mn = /* @__PURE__ */ new Set();
    constructor({ textContentSource: t2, container: e2, viewport: i2 }) {
      if (t2 instanceof ReadableStream) this.#on = t2;
      else {
        if ("object" != typeof t2) throw new Error('No "textContentSource" parameter specified.');
        this.#on = new ReadableStream({ start(e3) {
          e3.enqueue(t2), e3.close();
        } });
      }
      this.#xt = this.#in = e2, this.#nn = i2.scale * mt.pixelRatio, this.#sn = i2.rotation, this.#Js = { div: null, properties: null, ctx: null };
      const { pageWidth: s2, pageHeight: n2, pageX: r2, pageY: a2 } = i2.rawDims;
      this.#cn = [1, 0, 0, -1, -r2, a2 + n2], this.#tn = s2, this.#Zs = n2, ji.#fn(), gt(e2, i2), this.#Xs.promise.finally(() => {
        ji.#mn.delete(this), this.#Js = null, this.#rn = null;
      }).catch(() => {
      });
    }
    static get fontFamilyMap() {
      const { isWindows: t2, isFirefox: e2 } = N.platform;
      return M(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", (t2 && e2 ? "Calibri, " : "") + "sans-serif"], ["monospace", (t2 && e2 ? "Lucida Console, " : "") + "monospace"]]));
    }
    render() {
      const t2 = () => {
        this.#en.read().then(({ value: e2, done: i2 }) => {
          i2 ? this.#Xs.resolve() : (this.#Qs ??= e2.lang, Object.assign(this.#rn, e2.styles), this.#bn(e2.items), t2());
        }, this.#Xs.reject);
      };
      return this.#en = this.#on.getReader(), ji.#mn.add(this), t2(), this.#Xs.promise;
    }
    update({ viewport: t2, onBefore: e2 = null }) {
      const i2 = t2.scale * mt.pixelRatio, s2 = t2.rotation;
      if (s2 !== this.#sn && (e2?.(), this.#sn = s2, gt(this.#in, { rotation: s2 })), i2 !== this.#nn) {
        e2?.(), this.#nn = i2;
        const t3 = { div: null, properties: null, ctx: ji.#vn(this.#Qs) };
        for (const e3 of this.#ln) t3.properties = this.#hn.get(e3), t3.div = e3, this.#yn(t3);
      }
    }
    cancel() {
      const t2 = new B("TextLayer task cancelled.");
      this.#en?.cancel(t2).catch(() => {
      }), this.#en = null, this.#Xs.reject(t2);
    }
    get textDivs() {
      return this.#ln;
    }
    get textContentItemsStr() {
      return this.#an;
    }
    #bn(t2) {
      if (this.#Ys) return;
      this.#Js.ctx ??= ji.#vn(this.#Qs);
      const e2 = this.#ln, i2 = this.#an;
      for (const s2 of t2) {
        if (e2.length > 1e5) return _("Ignoring additional textDivs for performance reasons."), void (this.#Ys = true);
        if (void 0 !== s2.str) i2.push(s2.str), this.#wn(s2);
        else if ("beginMarkedContentProps" === s2.type || "beginMarkedContent" === s2.type) {
          const t3 = this.#xt;
          this.#xt = document.createElement("span"), this.#xt.classList.add("markedContent"), s2.id && this.#xt.setAttribute("id", `${s2.id}`), t3.append(this.#xt);
        } else "endMarkedContent" === s2.type && (this.#xt = this.#xt.parentNode);
      }
    }
    #wn(t2) {
      const e2 = document.createElement("span"), i2 = { angle: 0, canvasWidth: 0, hasText: "" !== t2.str, hasEOL: t2.hasEOL, fontSize: 0 };
      this.#ln.push(e2);
      const s2 = z.transform(this.#cn, t2.transform);
      let n2 = Math.atan2(s2[1], s2[0]);
      const r2 = this.#rn[t2.fontName];
      r2.vertical && (n2 += Math.PI / 2);
      let a2 = this.#Ks && r2.fontSubstitution || r2.fontFamily;
      a2 = ji.fontFamilyMap.get(a2) || a2;
      const o2 = Math.hypot(s2[2], s2[3]), l2 = o2 * ji.#xn(a2, r2, this.#Qs);
      let h2, c2;
      0 === n2 ? (h2 = s2[4], c2 = s2[5] - l2) : (h2 = s2[4] + l2 * Math.sin(n2), c2 = s2[5] - l2 * Math.cos(n2));
      const d2 = "calc(var(--total-scale-factor) *", u2 = e2.style;
      this.#xt === this.#in ? (u2.left = `${(100 * h2 / this.#tn).toFixed(2)}%`, u2.top = `${(100 * c2 / this.#Zs).toFixed(2)}%`) : (u2.left = `${d2}${h2.toFixed(2)}px)`, u2.top = `${d2}${c2.toFixed(2)}px)`), u2.fontSize = `${d2}${(ji.#gn * o2).toFixed(2)}px)`, u2.fontFamily = a2, i2.fontSize = o2, e2.setAttribute("role", "presentation"), e2.textContent = t2.str, e2.dir = t2.dir, this.#Ks && (e2.dataset.fontName = r2.fontSubstitutionLoadedName || t2.fontName), 0 !== n2 && (i2.angle = n2 * (180 / Math.PI));
      let p2 = false;
      if (t2.str.length > 1) p2 = true;
      else if (" " !== t2.str && t2.transform[0] !== t2.transform[3]) {
        const e3 = Math.abs(t2.transform[0]), i3 = Math.abs(t2.transform[3]);
        e3 !== i3 && Math.max(e3, i3) / Math.min(e3, i3) > 1.5 && (p2 = true);
      }
      if (p2 && (i2.canvasWidth = r2.vertical ? t2.height : t2.width), this.#hn.set(e2, i2), this.#Js.div = e2, this.#Js.properties = i2, this.#yn(this.#Js), i2.hasText && this.#xt.append(e2), i2.hasEOL) {
        const t3 = document.createElement("br");
        t3.setAttribute("role", "presentation"), this.#xt.append(t3);
      }
    }
    #yn(t2) {
      const { div: e2, properties: i2, ctx: s2 } = t2, { style: n2 } = e2;
      let r2 = "";
      if (ji.#gn > 1 && (r2 = `scale(${1 / ji.#gn})`), 0 !== i2.canvasWidth && i2.hasText) {
        const { fontFamily: t3 } = n2, { canvasWidth: a2, fontSize: o2 } = i2;
        ji.#An(s2, o2 * this.#nn, t3);
        const { width: l2 } = s2.measureText(e2.textContent);
        l2 > 0 && (r2 = `scaleX(${a2 * this.#nn / l2}) ${r2}`);
      }
      0 !== i2.angle && (r2 = `rotate(${i2.angle}deg) ${r2}`), r2.length > 0 && (n2.transform = r2);
    }
    static cleanup() {
      if (!(this.#mn.size > 0)) {
        this.#dn.clear();
        for (const { canvas: t2 } of this.#un.values()) t2.remove();
        this.#un.clear();
      }
    }
    static #vn(t2 = null) {
      let e2 = this.#un.get(t2 ||= "");
      if (!e2) {
        const i2 = document.createElement("canvas");
        i2.className = "hiddenCanvasElement", i2.lang = t2, document.body.append(i2), e2 = i2.getContext("2d", { alpha: false, willReadFrequently: true }), this.#un.set(t2, e2), this.#pn.set(e2, { size: 0, family: "" });
      }
      return e2;
    }
    static #An(t2, e2, i2) {
      const s2 = this.#pn.get(t2);
      e2 === s2.size && i2 === s2.family || (t2.font = `${e2}px ${i2}`, s2.size = e2, s2.family = i2);
    }
    static #fn() {
      if (null !== this.#gn) return;
      const t2 = document.createElement("div");
      t2.style.opacity = 0, t2.style.lineHeight = 1, t2.style.fontSize = "1px", t2.style.position = "absolute", t2.textContent = "X", document.body.append(t2), this.#gn = t2.getBoundingClientRect().height, t2.remove();
    }
    static #xn(t2, e2, i2) {
      const s2 = this.#dn.get(t2);
      if (s2) return s2;
      const n2 = this.#vn(i2);
      n2.canvas.width = n2.canvas.height = 30, this.#An(n2, 30, t2);
      const r2 = n2.measureText(""), a2 = r2.fontBoundingBoxAscent, o2 = Math.abs(r2.fontBoundingBoxDescent);
      n2.canvas.width = n2.canvas.height = 0;
      let l2 = 0.8;
      return a2 ? l2 = a2 / (a2 + o2) : (N.platform.isFirefox && _("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), e2.ascent ? l2 = e2.ascent : e2.descent && (l2 = 1 + e2.descent)), this.#dn.set(t2, l2), l2;
    }
  }
  function $i(t2 = {}) {
    "string" == typeof t2 || t2 instanceof URL ? t2 = { url: t2 } : (t2 instanceof ArrayBuffer || ArrayBuffer.isView(t2)) && (t2 = { data: t2 });
    const e2 = new Vi(), { docId: i2 } = e2, s2 = t2.url ? (function(t3) {
      if (t3 instanceof URL) return t3.href;
      if ("string" == typeof t3) {
        if (a) return t3;
        const e3 = URL.parse(t3, window.location);
        if (e3) return e3.href;
      }
      throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
    })(t2.url) : null, n2 = t2.data ? (function(t3) {
      if (a && "undefined" != typeof Buffer && t3 instanceof Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
      if (t3 instanceof Uint8Array && t3.byteLength === t3.buffer.byteLength) return t3;
      if ("string" == typeof t3) return O(t3);
      if (t3 instanceof ArrayBuffer || ArrayBuffer.isView(t3) || "object" == typeof t3 && !isNaN(t3?.length)) return new Uint8Array(t3);
      throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
    })(t2.data) : null, r2 = t2.httpHeaders || null, o2 = true === t2.withCredentials, l2 = t2.password ?? null, h2 = t2.range instanceof Gi ? t2.range : null, c2 = Number.isInteger(t2.rangeChunkSize) && t2.rangeChunkSize > 0 ? t2.rangeChunkSize : 65536;
    let d2 = t2.worker instanceof Xi ? t2.worker : null;
    const u2 = t2.verbosity, p2 = "string" != typeof t2.docBaseUrl || et(t2.docBaseUrl) ? null : t2.docBaseUrl, g2 = Kt(t2.cMapUrl), m2 = false !== t2.cMapPacked, f2 = t2.CMapReaderFactory || (a ? fe : ae), b2 = Kt(t2.iccUrl), v2 = Kt(t2.standardFontDataUrl), y2 = t2.StandardFontDataFactory || (a ? be : ce), x2 = Kt(t2.wasmUrl), A2 = t2.WasmFactory || (a ? ve : ue), _2 = true !== t2.stopAtErrors, S2 = Number.isInteger(t2.maxImageSize) && t2.maxImageSize > -1 ? t2.maxImageSize : -1, E2 = false !== t2.isEvalSupported, C2 = "boolean" == typeof t2.isOffscreenCanvasSupported ? t2.isOffscreenCanvasSupported : !a, T2 = "boolean" == typeof t2.isImageDecoderSupported ? t2.isImageDecoderSupported : !a && (N.platform.isFirefox || !globalThis.chrome), M2 = Number.isInteger(t2.canvasMaxAreaInBytes) ? t2.canvasMaxAreaInBytes : -1, k2 = "boolean" == typeof t2.disableFontFace ? t2.disableFontFace : a, D2 = true === t2.fontExtraProperties, P2 = true === t2.enableXfa, I2 = t2.ownerDocument || globalThis.document, R2 = true === t2.disableRange, L2 = true === t2.disableStream, B2 = true === t2.disableAutoFetch, F2 = true === t2.pdfBug, U2 = t2.CanvasFactory || (a ? me : ne), z2 = t2.FilterFactory || (a ? ge : le), H2 = true === t2.enableHWA, j2 = false !== t2.useWasm, $2 = h2 ? h2.length : t2.length ?? NaN, V2 = "boolean" == typeof t2.useSystemFonts ? t2.useSystemFonts : !a && !k2, G2 = "boolean" == typeof t2.useWorkerFetch ? t2.useWorkerFetch : !!(f2 === ae && y2 === ce && A2 === ue && g2 && v2 && x2 && at(g2, document.baseURI) && at(v2, document.baseURI) && at(x2, document.baseURI));
    w(u2);
    const W2 = { canvasFactory: new U2({ ownerDocument: I2, enableHWA: H2 }), filterFactory: new z2({ docId: i2, ownerDocument: I2 }), cMapReaderFactory: G2 ? null : new f2({ baseUrl: g2, isCompressed: m2 }), standardFontDataFactory: G2 ? null : new y2({ baseUrl: v2 }), wasmFactory: G2 ? null : new A2({ baseUrl: x2 }) };
    d2 || (d2 = Xi.create({ verbosity: u2, port: pi.workerPort }), e2._worker = d2);
    const q2 = { docId: i2, apiVersion: "5.4.296", data: n2, password: l2, disableAutoFetch: B2, rangeChunkSize: c2, length: $2, docBaseUrl: p2, enableXfa: P2, evaluatorOptions: { maxImageSize: S2, disableFontFace: k2, ignoreErrors: _2, isEvalSupported: E2, isOffscreenCanvasSupported: C2, isImageDecoderSupported: T2, canvasMaxAreaInBytes: M2, fontExtraProperties: D2, useSystemFonts: V2, useWasm: j2, useWorkerFetch: G2, cMapUrl: g2, iccUrl: b2, standardFontDataUrl: v2, wasmUrl: x2 } }, X2 = { ownerDocument: I2, pdfBug: F2, styleElement: null, loadingParams: { disableAutoFetch: B2, enableXfa: P2 } };
    return d2.promise.then(function() {
      if (e2.destroyed) throw new Error("Loading aborted");
      if (d2.destroyed) throw new Error("Worker was destroyed");
      const t3 = d2.messageHandler.sendWithPromise("GetDocRequest", q2, n2 ? [n2.buffer] : null);
      let l3;
      if (h2) l3 = new vi(h2, { disableRange: R2, disableStream: L2 });
      else if (!n2) {
        if (!s2) throw new Error("getDocument - no `url` parameter provided.");
        const t4 = at(s2) ? ki : a ? Oi : Ri;
        l3 = new t4({ url: s2, length: $2, httpHeaders: r2, withCredentials: o2, rangeChunkSize: c2, disableRange: R2, disableStream: L2 });
      }
      return t3.then((t4) => {
        if (e2.destroyed) throw new Error("Loading aborted");
        if (d2.destroyed) throw new Error("Worker was destroyed");
        const s3 = new ie(i2, t4, d2.port), n3 = new Yi(s3, e2, l3, X2, W2, H2);
        e2._transport = n3, s3.send("Ready", null);
      });
    }).catch(e2._capability.reject), e2;
  }
  class Vi {
    static #Bi = 0;
    _capability = Promise.withResolvers();
    _transport = null;
    _worker = null;
    docId = "d" + Vi.#Bi++;
    destroyed = false;
    onPassword = null;
    onProgress = null;
    get promise() {
      return this._capability.promise;
    }
    async destroy() {
      this.destroyed = true;
      try {
        this._worker?.port && (this._worker._pendingDestroy = true), await this._transport?.destroy();
      } catch (t2) {
        throw this._worker?.port && delete this._worker._pendingDestroy, t2;
      }
      this._transport = null, this._worker?.destroy(), this._worker = null;
    }
    async getData() {
      return this._transport.getData();
    }
  }
  class Gi {
    #Xs = Promise.withResolvers();
    #_n = [];
    #Sn = [];
    #En = [];
    #Cn = [];
    constructor(t2, e2, i2 = false, s2 = null) {
      this.length = t2, this.initialData = e2, this.progressiveDone = i2, this.contentDispositionFilename = s2;
    }
    addRangeListener(t2) {
      this.#Cn.push(t2);
    }
    addProgressListener(t2) {
      this.#En.push(t2);
    }
    addProgressiveReadListener(t2) {
      this.#Sn.push(t2);
    }
    addProgressiveDoneListener(t2) {
      this.#_n.push(t2);
    }
    onDataRange(t2, e2) {
      for (const i2 of this.#Cn) i2(t2, e2);
    }
    onDataProgress(t2, e2) {
      this.#Xs.promise.then(() => {
        for (const i2 of this.#En) i2(t2, e2);
      });
    }
    onDataProgressiveRead(t2) {
      this.#Xs.promise.then(() => {
        for (const e2 of this.#Sn) e2(t2);
      });
    }
    onDataProgressiveDone() {
      this.#Xs.promise.then(() => {
        for (const t2 of this.#_n) t2();
      });
    }
    transportReady() {
      this.#Xs.resolve();
    }
    requestDataRange(t2, e2) {
      S("Abstract method PDFDataRangeTransport.requestDataRange");
    }
    abort() {
    }
  }
  class Wi {
    constructor(t2, e2) {
      this._pdfInfo = t2, this._transport = e2;
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
      return M(this, "isPureXfa", !!this._transport._htmlForXfa);
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
  class qi {
    #Tn = false;
    constructor(t2, e2, i2, s2 = false) {
      this._pageIndex = t2, this._pageInfo = e2, this._transport = i2, this._stats = s2 ? new rt() : null, this._pdfBug = s2, this.commonObjs = i2.commonObjs, this.objs = new Hi(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = false, this.recordedBBoxes = null;
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
      return new Z({ viewBox: this.view, userUnit: this.userUnit, scale: t2, rotation: e2, offsetX: i2, offsetY: s2, dontFlip: n2 });
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
      return M(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    async getXfa() {
      return this._transport._htmlForXfa?.children[this._pageIndex] || null;
    }
    render({ canvasContext: t2, canvas: e2 = t2.canvas, viewport: i2, intent: s2 = "display", annotationMode: n2 = h.ENABLE, transform: r2 = null, background: a2 = null, optionalContentConfigPromise: o2 = null, annotationCanvasMap: l2 = null, pageColors: c2 = null, printAnnotationStorage: d2 = null, isEditing: u2 = false, recordOperations: p2 = false, operationsFilter: g2 = null }) {
      this._stats?.time("Overall");
      const m2 = this._transport.getRenderingIntent(s2, n2, d2, u2), { renderingIntent: f2, cacheKey: b2 } = m2;
      this.#Tn = false, o2 ||= this._transport.getOptionalContentConfig(f2);
      let v2 = this._intentStates.get(b2);
      v2 || (v2 = /* @__PURE__ */ Object.create(null), this._intentStates.set(b2, v2)), v2.streamReaderCancelTimeout && (clearTimeout(v2.streamReaderCancelTimeout), v2.streamReaderCancelTimeout = null);
      const y2 = !!(4 & f2);
      v2.displayReadyCapability || (v2.displayReadyCapability = Promise.withResolvers(), v2.operatorList = { fnArray: [], argsArray: [], lastChunk: false, separateAnnots: null }, this._stats?.time("Page Request"), this._pumpOperatorList(m2));
      const w2 = Boolean(this._pdfBug && globalThis.StepperManager?.enabled), x2 = !this.recordedBBoxes && (p2 || w2), A2 = (t3) => {
        if (v2.renderTasks.delete(_2), x2) {
          const t4 = _2.gfx?.dependencyTracker.take();
          t4 && (_2.stepper && _2.stepper.setOperatorBBoxes(t4, _2.gfx.dependencyTracker.takeDebugMetadata()), p2 && (this.recordedBBoxes = t4));
        }
        y2 && (this.#Tn = true), this.#Mn(), t3 ? (_2.capability.reject(t3), this._abortOperatorList({ intentState: v2, reason: t3 instanceof Error ? t3 : new Error(t3) })) : _2.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), globalThis.Stats?.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
      }, _2 = new Qi({ callback: A2, params: { canvas: e2, canvasContext: t2, dependencyTracker: x2 ? new Ce(e2, v2.operatorList.length, w2) : null, viewport: i2, transform: r2, background: a2 }, objs: this.objs, commonObjs: this.commonObjs, annotationCanvasMap: l2, operatorList: v2.operatorList, pageIndex: this._pageIndex, canvasFactory: this._transport.canvasFactory, filterFactory: this._transport.filterFactory, useRequestAnimationFrame: !y2, pdfBug: this._pdfBug, pageColors: c2, enableHWA: this._transport.enableHWA, operationsFilter: g2 });
      (v2.renderTasks ||= /* @__PURE__ */ new Set()).add(_2);
      const S2 = _2.task;
      return Promise.all([v2.displayReadyCapability.promise, o2]).then(([t3, e3]) => {
        if (this.destroyed) A2();
        else {
          if (this._stats?.time("Rendering"), !(e3.renderingIntent & f2)) throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
          _2.initializeGraphics({ transparency: t3, optionalContentConfig: e3 }), _2.operatorListChanged();
        }
      }).catch(A2), S2;
    }
    getOperatorList({ intent: t2 = "display", annotationMode: e2 = h.ENABLE, printAnnotationStorage: i2 = null, isEditing: s2 = false } = {}) {
      const n2 = this._transport.getRenderingIntent(t2, e2, i2, s2, true);
      let r2, a2 = this._intentStates.get(n2.cacheKey);
      return a2 || (a2 = /* @__PURE__ */ Object.create(null), this._intentStates.set(n2.cacheKey, a2)), a2.opListReadCapability || (r2 = /* @__PURE__ */ Object.create(null), r2.operatorListChanged = function() {
        a2.operatorList.lastChunk && (a2.opListReadCapability.resolve(a2.operatorList), a2.renderTasks.delete(r2));
      }, a2.opListReadCapability = Promise.withResolvers(), (a2.renderTasks ||= /* @__PURE__ */ new Set()).add(r2), a2.operatorList = { fnArray: [], argsArray: [], lastChunk: false, separateAnnots: null }, this._stats?.time("Page Request"), this._pumpOperatorList(n2)), a2.opListReadCapability.promise;
    }
    streamTextContent({ includeMarkedContent: t2 = false, disableNormalization: e2 = false } = {}) {
      return this._transport.messageHandler.sendWithStream("GetTextContent", { pageIndex: this._pageIndex, includeMarkedContent: true === t2, disableNormalization: true === e2 }, { highWaterMark: 100, size: (t3) => t3.items.length });
    }
    getTextContent(t2 = {}) {
      if (this._transport._htmlForXfa) return this.getXfa().then((t3) => X.textContent(t3));
      const e2 = this.streamTextContent(t2);
      return new Promise(function(t3, i2) {
        const s2 = e2.getReader(), n2 = { items: [], styles: /* @__PURE__ */ Object.create(null), lang: null };
        !(function e3() {
          s2.read().then(function({ value: i3, done: s3 }) {
            s3 ? t3(n2) : (n2.lang ??= i3.lang, Object.assign(n2.styles, i3.styles), n2.items.push(...i3.items), e3());
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
      for (const e2 of this._intentStates.values()) if (this._abortOperatorList({ intentState: e2, reason: new Error("Page was destroyed."), force: true }), !e2.opListReadCapability) for (const i2 of e2.renderTasks) t2.push(i2.completed), i2.cancel();
      return this.objs.clear(), this.#Tn = false, Promise.all(t2);
    }
    cleanup(t2 = false) {
      this.#Tn = true;
      const e2 = this.#Mn();
      return t2 && e2 && (this._stats &&= new rt()), e2;
    }
    #Mn() {
      if (!this.#Tn || this.destroyed) return false;
      for (const { renderTasks: t2, operatorList: e2 } of this._intentStates.values()) if (t2.size > 0 || !e2.lastChunk) return false;
      return this._intentStates.clear(), this.objs.clear(), this.#Tn = false, true;
    }
    _startRenderPage(t2, e2) {
      const i2 = this._intentStates.get(e2);
      i2 && (this._stats?.timeEnd("Page Request"), i2.displayReadyCapability?.resolve(t2));
    }
    _renderPageChunk(t2, e2) {
      for (let i2 = 0, s2 = t2.length; i2 < s2; i2++) e2.operatorList.fnArray.push(t2.fnArray[i2]), e2.operatorList.argsArray.push(t2.argsArray[i2]);
      e2.operatorList.lastChunk = t2.lastChunk, e2.operatorList.separateAnnots = t2.separateAnnots;
      for (const t3 of e2.renderTasks) t3.operatorListChanged();
      t2.lastChunk && this.#Mn();
    }
    _pumpOperatorList({ renderingIntent: t2, cacheKey: e2, annotationStorageSerializable: i2, modifiedIds: s2 }) {
      const { map: n2, transfer: r2 } = i2, a2 = this._transport.messageHandler.sendWithStream("GetOperatorList", { pageIndex: this._pageIndex, intent: t2, cacheKey: e2, annotationStorage: n2, modifiedIds: s2 }, r2).getReader(), o2 = this._intentStates.get(e2);
      o2.streamReader = a2;
      const l2 = () => {
        a2.read().then(({ value: t3, done: e3 }) => {
          e3 ? o2.streamReader = null : this._transport.destroyed || (this._renderPageChunk(t3, o2), l2());
        }, (t3) => {
          if (o2.streamReader = null, !this._transport.destroyed) {
            if (o2.operatorList) {
              o2.operatorList.lastChunk = true;
              for (const t4 of o2.renderTasks) t4.operatorListChanged();
              this.#Mn();
            }
            if (o2.displayReadyCapability) o2.displayReadyCapability.reject(t3);
            else {
              if (!o2.opListReadCapability) throw t3;
              o2.opListReadCapability.reject(t3);
            }
          }
        });
      };
      l2();
    }
    _abortOperatorList({ intentState: t2, reason: e2, force: i2 = false }) {
      if (t2.streamReader) {
        if (t2.streamReaderCancelTimeout && (clearTimeout(t2.streamReaderCancelTimeout), t2.streamReaderCancelTimeout = null), !i2) {
          if (t2.renderTasks.size > 0) return;
          if (e2 instanceof tt) {
            let i3 = 100;
            return e2.extraDelay > 0 && e2.extraDelay < 1e3 && (i3 += e2.extraDelay), void (t2.streamReaderCancelTimeout = setTimeout(() => {
              t2.streamReaderCancelTimeout = null, this._abortOperatorList({ intentState: t2, reason: e2, force: true });
            }, i3));
          }
        }
        if (t2.streamReader.cancel(new B(e2.message)).catch(() => {
        }), t2.streamReader = null, !this._transport.destroyed) {
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
  class Xi {
    #Xs = Promise.withResolvers();
    #kn = null;
    #Rs = null;
    #Dn = null;
    static #Pn = 0;
    static #In = false;
    static #Rn = /* @__PURE__ */ new WeakMap();
    static {
      a && (this.#In = true, pi.workerSrc ||= "./pdf.worker.mjs"), this._isSameOrigin = (t2, e2) => {
        const i2 = URL.parse(t2);
        if (!i2?.origin || "null" === i2.origin) return false;
        const s2 = new URL(e2, i2);
        return i2.origin === s2.origin;
      }, this._createCDNWrapper = (t2) => {
        const e2 = `await import("${t2}");`;
        return URL.createObjectURL(new Blob([e2], { type: "text/javascript" }));
      }, this.fromPort = (t2) => {
        if (console.log("Deprecated API usage: `PDFWorker.fromPort` - please use `PDFWorker.create` instead."), !t2?.port) throw new Error("PDFWorker.fromPort - invalid method signature.");
        return this.create(t2);
      };
    }
    constructor({ name: t2 = null, port: e2 = null, verbosity: i2 = x() } = {}) {
      if (this.name = t2, this.destroyed = false, this.verbosity = i2, e2) {
        if (Xi.#Rn.has(e2)) throw new Error("Cannot use more than one PDFWorker per port.");
        Xi.#Rn.set(e2, this), this.#Ln(e2);
      } else this.#Bn();
    }
    get promise() {
      return this.#Xs.promise;
    }
    #Fn() {
      this.#Xs.resolve(), this.#kn.send("configure", { verbosity: this.verbosity });
    }
    get port() {
      return this.#Rs;
    }
    get messageHandler() {
      return this.#kn;
    }
    #Ln(t2) {
      this.#Rs = t2, this.#kn = new ie("main", "worker", t2), this.#kn.on("ready", () => {
      }), this.#Fn();
    }
    #Bn() {
      if (Xi.#In || Xi.#On) return void this.#Nn();
      let { workerSrc: t2 } = Xi;
      try {
        Xi._isSameOrigin(window.location, t2) || (t2 = Xi._createCDNWrapper(new URL(t2, window.location).href));
        const e2 = new Worker(t2, { type: "module" }), i2 = new ie("main", "worker", e2), s2 = () => {
          n2.abort(), i2.destroy(), e2.terminate(), this.destroyed ? this.#Xs.reject(new Error("Worker was destroyed")) : this.#Nn();
        }, n2 = new AbortController();
        e2.addEventListener("error", () => {
          this.#Dn || s2();
        }, { signal: n2.signal }), i2.on("test", (t3) => {
          n2.abort(), !this.destroyed && t3 ? (this.#kn = i2, this.#Rs = e2, this.#Dn = e2, this.#Fn()) : s2();
        }), i2.on("ready", (t3) => {
          if (n2.abort(), this.destroyed) s2();
          else try {
            r2();
          } catch {
            this.#Nn();
          }
        });
        const r2 = () => {
          const t3 = new Uint8Array();
          i2.send("test", t3, [t3.buffer]);
        };
        return void r2();
      } catch {
        A("The worker has been disabled.");
      }
      this.#Nn();
    }
    #Nn() {
      Xi.#In || (_("Setting up fake worker."), Xi.#In = true), Xi._setupFakeWorkerGlobal.then((t2) => {
        if (this.destroyed) return void this.#Xs.reject(new Error("Worker was destroyed"));
        const e2 = new Zt();
        this.#Rs = e2;
        const i2 = "fake" + Xi.#Pn++, s2 = new ie(i2 + "_worker", i2, e2);
        t2.setup(s2, e2), this.#kn = new ie(i2, i2 + "_worker", e2), this.#Fn();
      }).catch((t2) => {
        this.#Xs.reject(new Error(`Setting up fake worker failed: "${t2.message}".`));
      });
    }
    destroy() {
      this.destroyed = true, this.#Dn?.terminate(), this.#Dn = null, Xi.#Rn.delete(this.#Rs), this.#Rs = null, this.#kn?.destroy(), this.#kn = null;
    }
    static create(t2) {
      const e2 = this.#Rn.get(t2?.port);
      if (e2) {
        if (e2._pendingDestroy) throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
        return e2;
      }
      return new Xi(t2);
    }
    static get workerSrc() {
      if (pi.workerSrc) return pi.workerSrc;
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
      return M(this, "_setupFakeWorkerGlobal", (async () => this.#On ? this.#On : (await import(this.workerSrc)).WorkerMessageHandler)());
    }
  }
  class Yi {
    #Un = /* @__PURE__ */ new Map();
    #zn = /* @__PURE__ */ new Map();
    #Hn = /* @__PURE__ */ new Map();
    #jn = /* @__PURE__ */ new Map();
    #$n = null;
    constructor(t2, e2, i2, s2, n2, r2) {
      this.messageHandler = t2, this.loadingTask = e2, this.commonObjs = new Hi(), this.fontLoader = new Xt({ ownerDocument: s2.ownerDocument, styleElement: s2.styleElement }), this.loadingParams = s2.loadingParams, this._params = s2, this.canvasFactory = n2.canvasFactory, this.filterFactory = n2.filterFactory, this.cMapReaderFactory = n2.cMapReaderFactory, this.standardFontDataFactory = n2.standardFontDataFactory, this.wasmFactory = n2.wasmFactory, this.destroyed = false, this.destroyCapability = null, this._networkStream = i2, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.enableHWA = r2, this.setupMessageHandler();
    }
    #Vn(t2, e2 = null) {
      const i2 = this.#Un.get(t2);
      if (i2) return i2;
      const s2 = this.messageHandler.sendWithPromise(t2, e2);
      return this.#Un.set(t2, s2), s2;
    }
    get annotationStorage() {
      return M(this, "annotationStorage", new Wt());
    }
    getRenderingIntent(t2, e2 = h.ENABLE, i2 = null, s2 = false, n2 = false) {
      let r2 = 2, a2 = Gt;
      switch (t2) {
        case "any":
          r2 = 1;
          break;
        case "display":
          break;
        case "print":
          r2 = 4;
          break;
        default:
          _(`getRenderingIntent - invalid intent: ${t2}`);
      }
      const o2 = 4 & r2 && i2 instanceof qt ? i2 : this.annotationStorage;
      switch (e2) {
        case h.DISABLE:
          r2 += 64;
          break;
        case h.ENABLE:
          break;
        case h.ENABLE_FORMS:
          r2 += 16;
          break;
        case h.ENABLE_STORAGE:
          r2 += 32, a2 = o2.serializable;
          break;
        default:
          _(`getRenderingIntent - invalid annotationMode: ${e2}`);
      }
      s2 && (r2 += 128), n2 && (r2 += 256);
      const { ids: l2, hash: c2 } = o2.modifiedIds;
      return { renderingIntent: r2, cacheKey: [r2, a2.hash, c2].join("_"), annotationStorageSerializable: a2, modifiedIds: l2 };
    }
    destroy() {
      if (this.destroyCapability) return this.destroyCapability.promise;
      this.destroyed = true, this.destroyCapability = Promise.withResolvers(), this.#$n?.reject(new Error("Worker was destroyed during onPassword callback"));
      const t2 = [];
      for (const e3 of this.#zn.values()) t2.push(e3._destroy());
      this.#zn.clear(), this.#Hn.clear(), this.#jn.clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
      const e2 = this.messageHandler.sendWithPromise("Terminate", null);
      return t2.push(e2), Promise.all(t2).then(() => {
        this.commonObjs.clear(), this.fontLoader.clear(), this.#Un.clear(), this.filterFactory.destroy(), ji.cleanup(), this._networkStream?.cancelAllRequests(new B("Worker was terminated.")), this.messageHandler?.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
      }, this.destroyCapability.reject), this.destroyCapability.promise;
    }
    setupMessageHandler() {
      const { messageHandler: t2, loadingTask: e2 } = this;
      t2.on("GetReader", (t3, e3) => {
        E(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (t4) => {
          this._lastProgress = { loaded: t4.loaded, total: t4.total };
        }, e3.onPull = () => {
          this._fullReader.read().then(function({ value: t4, done: i2 }) {
            i2 ? e3.close() : (E(t4 instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), e3.enqueue(new Uint8Array(t4), 1, [t4]));
          }).catch((t4) => {
            e3.error(t4);
          });
        }, e3.onCancel = (t4) => {
          this._fullReader.cancel(t4), e3.ready.catch((t5) => {
            if (!this.destroyed) throw t5;
          });
        };
      }), t2.on("ReaderHeadersReady", async (t3) => {
        await this._fullReader.headersReady;
        const { isStreamingSupported: i2, isRangeSupported: s2, contentLength: n2 } = this._fullReader;
        return i2 && s2 || (this._lastProgress && e2.onProgress?.(this._lastProgress), this._fullReader.onProgress = (t4) => {
          e2.onProgress?.({ loaded: t4.loaded, total: t4.total });
        }), { isStreamingSupported: i2, isRangeSupported: s2, contentLength: n2 };
      }), t2.on("GetRangeReader", (t3, e3) => {
        E(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
        const i2 = this._networkStream.getRangeReader(t3.begin, t3.end);
        i2 ? (e3.onPull = () => {
          i2.read().then(function({ value: t4, done: i3 }) {
            i3 ? e3.close() : (E(t4 instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), e3.enqueue(new Uint8Array(t4), 1, [t4]));
          }).catch((t4) => {
            e3.error(t4);
          });
        }, e3.onCancel = (t4) => {
          i2.cancel(t4), e3.ready.catch((t5) => {
            if (!this.destroyed) throw t5;
          });
        }) : e3.close();
      }), t2.on("GetDoc", ({ pdfInfo: t3 }) => {
        this._numPages = t3.numPages, this._htmlForXfa = t3.htmlForXfa, delete t3.htmlForXfa, e2._capability.resolve(new Wi(t3, this));
      }), t2.on("DocException", (t3) => {
        e2._capability.reject(ee(t3));
      }), t2.on("PasswordRequest", (t3) => {
        this.#$n = Promise.withResolvers();
        try {
          if (!e2.onPassword) throw ee(t3);
          const i2 = (t4) => {
            t4 instanceof Error ? this.#$n.reject(t4) : this.#$n.resolve({ password: t4 });
          };
          e2.onPassword(i2, t3.code);
        } catch (t4) {
          this.#$n.reject(t4);
        }
        return this.#$n.promise;
      }), t2.on("DataLoaded", (t3) => {
        e2.onProgress?.({ loaded: t3.length, total: t3.length }), this.downloadInfoCapability.resolve(t3);
      }), t2.on("StartRenderPage", (t3) => {
        this.destroyed || this.#zn.get(t3.pageIndex)._startRenderPage(t3.transparency, t3.cacheKey);
      }), t2.on("commonobj", ([e3, i2, s2]) => {
        if (this.destroyed) return null;
        if (this.commonObjs.has(e3)) return null;
        switch (i2) {
          case "Font":
            if ("error" in s2) {
              const t3 = s2.error;
              _(`Error during font loading: ${t3}`), this.commonObjs.resolve(e3, t3);
              break;
            }
            const n2 = new ui(s2), r2 = this._params.pdfBug && globalThis.FontInspector?.enabled ? (t3, e4) => globalThis.FontInspector.fontAdded(t3, e4) : null, a2 = new Yt(n2, r2, s2.extra, s2.charProcOperatorList);
            this.fontLoader.bind(a2).catch(() => t2.sendWithPromise("FontFallback", { id: e3 })).finally(() => {
              !a2.fontExtraProperties && a2.data && a2.clearData(), this.commonObjs.resolve(e3, a2);
            });
            break;
          case "CopyLocalImage":
            const { imageRef: o2 } = s2;
            E(o2, "The imageRef must be defined.");
            for (const t3 of this.#zn.values()) for (const [, i3] of t3.objs) if (i3?.ref === o2) return i3.dataLen ? (this.commonObjs.resolve(e3, structuredClone(i3)), i3.dataLen) : null;
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
      }), t2.on("obj", ([t3, e3, i2, s2]) => {
        if (this.destroyed) return;
        const n2 = this.#zn.get(e3);
        if (!n2.objs.has(t3)) if (0 !== n2._intentStates.size) switch (i2) {
          case "Image":
          case "Pattern":
            n2.objs.resolve(t3, s2);
            break;
          default:
            throw new Error(`Got unknown object type ${i2}`);
        }
        else s2?.bitmap?.close();
      }), t2.on("DocProgress", (t3) => {
        this.destroyed || e2.onProgress?.({ loaded: t3.loaded, total: t3.total });
      }), t2.on("FetchBinaryData", async (t3) => {
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
      this.annotationStorage.size <= 0 && _("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
      const { map: t2, transfer: e2 } = this.annotationStorage.serializable;
      return this.messageHandler.sendWithPromise("SaveDocument", { isPureXfa: !!this._htmlForXfa, numPages: this._numPages, annotationStorage: t2, filename: this._fullReader?.filename ?? null }, e2).finally(() => {
        this.annotationStorage.resetModified();
      });
    }
    getPage(t2) {
      if (!Number.isInteger(t2) || t2 <= 0 || t2 > this._numPages) return Promise.reject(new Error("Invalid page request."));
      const e2 = t2 - 1, i2 = this.#Hn.get(e2);
      if (i2) return i2;
      const s2 = this.messageHandler.sendWithPromise("GetPage", { pageIndex: e2 }).then((i3) => {
        if (this.destroyed) throw new Error("Transport destroyed");
        i3.refStr && this.#jn.set(i3.refStr, t2);
        const s3 = new qi(e2, i3, this, this._params.pdfBug);
        return this.#zn.set(e2, s3), s3;
      });
      return this.#Hn.set(e2, s2), s2;
    }
    getPageIndex(t2) {
      return Qt(t2) ? this.messageHandler.sendWithPromise("GetPageIndex", { num: t2.num, gen: t2.gen }) : Promise.reject(new Error("Invalid pageIndex request."));
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
      return this.#Vn("GetOptionalContentConfig").then((e2) => new bi(e2, t2));
    }
    getPermissions() {
      return this.messageHandler.sendWithPromise("GetPermissions", null);
    }
    getMetadata() {
      const t2 = "GetMetadata", e2 = this.#Un.get(t2);
      if (e2) return e2;
      const i2 = this.messageHandler.sendWithPromise(t2, null).then((t3) => ({ info: t3[0], metadata: t3[1] ? new gi(t3[1]) : null, contentDispositionFilename: this._fullReader?.filename ?? null, contentLength: this._fullReader?.contentLength ?? null }));
      return this.#Un.set(t2, i2), i2;
    }
    getMarkInfo() {
      return this.messageHandler.sendWithPromise("GetMarkInfo", null);
    }
    async startCleanup(t2 = false) {
      if (!this.destroyed) {
        await this.messageHandler.sendWithPromise("Cleanup", null);
        for (const t3 of this.#zn.values()) if (!t3.cleanup()) throw new Error(`startCleanup: Page ${t3.pageNumber} is currently rendering.`);
        this.commonObjs.clear(), t2 || this.fontLoader.clear(), this.#Un.clear(), this.filterFactory.destroy(true), ji.cleanup();
      }
    }
    cachedPageNumber(t2) {
      if (!Qt(t2)) return null;
      const e2 = 0 === t2.gen ? `${t2.num}R` : `${t2.num}R${t2.gen}`;
      return this.#jn.get(e2) ?? null;
    }
  }
  class Ki {
    #Gn = null;
    onContinue = null;
    onError = null;
    constructor(t2) {
      this.#Gn = t2;
    }
    get promise() {
      return this.#Gn.capability.promise;
    }
    cancel(t2 = 0) {
      this.#Gn.cancel(null, t2);
    }
    get separateAnnots() {
      const { separateAnnots: t2 } = this.#Gn.operatorList;
      if (!t2) return false;
      const { annotationCanvasMap: e2 } = this.#Gn;
      return t2.form || t2.canvas && e2?.size > 0;
    }
  }
  class Qi {
    #Wn = null;
    static #qn = /* @__PURE__ */ new WeakSet();
    constructor({ callback: t2, params: e2, objs: i2, commonObjs: s2, annotationCanvasMap: n2, operatorList: r2, pageIndex: a2, canvasFactory: o2, filterFactory: l2, useRequestAnimationFrame: h2 = false, pdfBug: c2 = false, pageColors: d2 = null, enableHWA: u2 = false, operationsFilter: p2 = null }) {
      this.callback = t2, this.params = e2, this.objs = i2, this.commonObjs = s2, this.annotationCanvasMap = n2, this.operatorListIdx = null, this.operatorList = r2, this._pageIndex = a2, this.canvasFactory = o2, this.filterFactory = l2, this._pdfBug = c2, this.pageColors = d2, this.running = false, this.graphicsReadyCallback = null, this.graphicsReady = false, this._useRequestAnimationFrame = true === h2 && "undefined" != typeof window, this.cancelled = false, this.capability = Promise.withResolvers(), this.task = new Ki(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e2.canvas, this._canvasContext = e2.canvas ? null : e2.canvasContext, this._enableHWA = u2, this._dependencyTracker = e2.dependencyTracker, this._operationsFilter = p2;
    }
    get completed() {
      return this.capability.promise.catch(function() {
      });
    }
    initializeGraphics({ transparency: t2 = false, optionalContentConfig: e2 }) {
      if (this.cancelled) return;
      if (this._canvas) {
        if (Qi.#qn.has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
        Qi.#qn.add(this._canvas);
      }
      this._pdfBug && globalThis.StepperManager?.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
      const { viewport: i2, transform: s2, background: n2, dependencyTracker: r2 } = this.params, a2 = this._canvasContext || this._canvas.getContext("2d", { alpha: false, willReadFrequently: !this._enableHWA });
      this.gfx = new hi(a2, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: e2 }, this.annotationCanvasMap, this.pageColors, r2), this.gfx.beginDrawing({ transform: s2, viewport: i2, transparency: t2, background: n2 }), this.operatorListIdx = 0, this.graphicsReady = true, this.graphicsReadyCallback?.();
    }
    cancel(t2 = null, e2 = 0) {
      this.running = false, this.cancelled = true, this.gfx?.endDrawing(), this.#Wn && (window.cancelAnimationFrame(this.#Wn), this.#Wn = null), Qi.#qn.delete(this._canvas), t2 ||= new tt(`Rendering cancelled, page ${this._pageIndex + 1}`, e2), this.callback(t2), this.task.onError?.(t2);
    }
    operatorListChanged() {
      this.graphicsReady ? (this.gfx.dependencyTracker?.growOperationsCount(this.operatorList.fnArray.length), this.stepper?.updateOperatorList(this.operatorList), this.running || this._continue()) : this.graphicsReadyCallback ||= this._continueBound;
    }
    _continue() {
      this.running = true, this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
    }
    _scheduleNext() {
      this._useRequestAnimationFrame ? this.#Wn = window.requestAnimationFrame(() => {
        this.#Wn = null, this._nextBound().catch(this._cancelBound);
      }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
    async _next() {
      this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = false, this.operatorList.lastChunk && (this.gfx.endDrawing(), Qi.#qn.delete(this._canvas), this.callback())));
    }
  }
  const Ji = "5.4.296", Zi = "f56dc8601";
  class ts {
    #Xn = null;
    #Yn = null;
    #Kn;
    #Qn = null;
    #Jn = false;
    #Zn = false;
    #r = null;
    #tr;
    #er = null;
    #b = null;
    static #ir = null;
    static get _keyboardManager() {
      return M(this, "_keyboardManager", new Rt([[["Escape", "mac+Escape"], ts.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], ts.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], ts.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], ts.prototype._moveToPrevious], [["Home", "mac+Home"], ts.prototype._moveToBeginning], [["End", "mac+End"], ts.prototype._moveToEnd]]));
    }
    constructor({ editor: t2 = null, uiManager: e2 = null }) {
      t2 ? (this.#Zn = false, this.#r = t2) : this.#Zn = true, this.#b = t2?._uiManager || e2, this.#tr = this.#b._eventBus, this.#Kn = t2?.color?.toUpperCase() || this.#b?.highlightColors.values().next().value || "#FFFF98", ts.#ir ||= Object.freeze({ blue: "pdfjs-editor-colorpicker-blue", green: "pdfjs-editor-colorpicker-green", pink: "pdfjs-editor-colorpicker-pink", red: "pdfjs-editor-colorpicker-red", yellow: "pdfjs-editor-colorpicker-yellow" });
    }
    renderButton() {
      const t2 = this.#Xn = document.createElement("button");
      t2.className = "colorPicker", t2.tabIndex = "0", t2.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t2.ariaHasPopup = "true", this.#r && (t2.ariaControls = `${this.#r.id}_colorpicker_dropdown`);
      const e2 = this.#b._signal;
      t2.addEventListener("click", this.#sr.bind(this), { signal: e2 }), t2.addEventListener("keydown", this.#nr.bind(this), { signal: e2 });
      const i2 = this.#Yn = document.createElement("span");
      return i2.className = "swatch", i2.ariaHidden = "true", i2.style.backgroundColor = this.#Kn, t2.append(i2), t2;
    }
    renderMainDropdown() {
      const t2 = this.#Qn = this.#rr();
      return t2.ariaOrientation = "horizontal", t2.ariaLabelledBy = "highlightColorPickerLabel", t2;
    }
    #rr() {
      const t2 = document.createElement("div"), e2 = this.#b._signal;
      t2.addEventListener("contextmenu", ot, { signal: e2 }), t2.className = "dropdown", t2.role = "listbox", t2.ariaMultiSelectable = "false", t2.ariaOrientation = "vertical", t2.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), this.#r && (t2.id = `${this.#r.id}_colorpicker_dropdown`);
      for (const [i2, s2] of this.#b.highlightColors) {
        const n2 = document.createElement("button");
        n2.tabIndex = "0", n2.role = "option", n2.setAttribute("data-color", s2), n2.title = i2, n2.setAttribute("data-l10n-id", ts.#ir[i2]);
        const r2 = document.createElement("span");
        n2.append(r2), r2.className = "swatch", r2.style.backgroundColor = s2, n2.ariaSelected = s2 === this.#Kn, n2.addEventListener("click", this.#ar.bind(this, s2), { signal: e2 }), t2.append(n2);
      }
      return t2.addEventListener("keydown", this.#nr.bind(this), { signal: e2 }), t2;
    }
    #ar(t2, e2) {
      e2.stopPropagation(), this.#tr.dispatch("switchannotationeditorparams", { source: this, type: u.HIGHLIGHT_COLOR, value: t2 }), this.updateColor(t2);
    }
    _colorSelectFromKeyboard(t2) {
      if (t2.target === this.#Xn) return void this.#sr(t2);
      const e2 = t2.target.getAttribute("data-color");
      e2 && this.#ar(e2, t2);
    }
    _moveToNext(t2) {
      this.#or ? t2.target !== this.#Xn ? t2.target.nextSibling?.focus() : this.#Qn.firstChild?.focus() : this.#sr(t2);
    }
    _moveToPrevious(t2) {
      t2.target !== this.#Qn?.firstChild && t2.target !== this.#Xn ? (this.#or || this.#sr(t2), t2.target.previousSibling?.focus()) : this.#or && this._hideDropdownFromKeyboard();
    }
    _moveToBeginning(t2) {
      this.#or ? this.#Qn.firstChild?.focus() : this.#sr(t2);
    }
    _moveToEnd(t2) {
      this.#or ? this.#Qn.lastChild?.focus() : this.#sr(t2);
    }
    #nr(t2) {
      ts._keyboardManager.exec(this, t2);
    }
    #sr(t2) {
      if (this.#or) return void this.hideDropdown();
      if (this.#Jn = 0 === t2.detail, this.#er || (this.#er = new AbortController(), window.addEventListener("pointerdown", this.#u.bind(this), { signal: this.#b.combinedSignal(this.#er) })), this.#Xn.ariaExpanded = "true", this.#Qn) return void this.#Qn.classList.remove("hidden");
      const e2 = this.#Qn = this.#rr();
      this.#Xn.append(e2);
    }
    #u(t2) {
      this.#Qn?.contains(t2.target) || this.hideDropdown();
    }
    hideDropdown() {
      this.#Qn?.classList.add("hidden"), this.#Xn.ariaExpanded = "false", this.#er?.abort(), this.#er = null;
    }
    get #or() {
      return this.#Qn && !this.#Qn.classList.contains("hidden");
    }
    _hideDropdownFromKeyboard() {
      this.#Zn || (this.#or ? (this.hideDropdown(), this.#Xn.focus({ preventScroll: true, focusVisible: this.#Jn })) : this.#r?.unselect());
    }
    updateColor(t2) {
      if (this.#Yn && (this.#Yn.style.backgroundColor = t2), !this.#Qn) return;
      const e2 = this.#b.highlightColors.values();
      for (const i2 of this.#Qn.children) i2.ariaSelected = e2.next().value === t2.toUpperCase();
    }
    destroy() {
      this.#Xn?.remove(), this.#Xn = null, this.#Yn = null, this.#Qn?.remove(), this.#Qn = null;
    }
  }
  class es {
    #lr = null;
    #r = null;
    #b = null;
    static #ir = null;
    constructor(t2) {
      this.#r = t2, this.#b = t2._uiManager, es.#ir ||= Object.freeze({ freetext: "pdfjs-editor-color-picker-free-text-input", ink: "pdfjs-editor-color-picker-ink-input" });
    }
    renderButton() {
      if (this.#lr) return this.#lr;
      const { editorType: t2, colorType: e2, colorValue: i2 } = this.#r, s2 = this.#lr = document.createElement("input");
      return s2.type = "color", s2.value = i2 || "#000000", s2.className = "basicColorPicker", s2.tabIndex = 0, s2.setAttribute("data-l10n-id", es.#ir[t2]), s2.addEventListener("input", () => {
        this.#b.updateParams(e2, s2.value);
      }, { signal: this.#b._signal }), s2;
    }
    update(t2) {
      this.#lr && (this.#lr.value = t2);
    }
    destroy() {
      this.#lr?.remove(), this.#lr = null;
    }
    hideDropdown() {
    }
  }
  function is(t2) {
    return Math.floor(255 * Math.max(0, Math.min(1, t2))).toString(16).padStart(2, "0");
  }
  function ss(t2) {
    return Math.max(0, Math.min(255, 255 * t2));
  }
  r(116), r(531);
  class ns {
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
      return [t2 = ss(t2), t2, t2];
    }
    static G_HTML([t2]) {
      const e2 = is(t2);
      return `#${e2}${e2}${e2}`;
    }
    static RGB_G([t2, e2, i2]) {
      return ["G", 0.3 * t2 + 0.59 * e2 + 0.11 * i2];
    }
    static RGB_rgb(t2) {
      return t2.map(ss);
    }
    static RGB_HTML(t2) {
      return `#${t2.map(is).join("")}`;
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
      return [ss(1 - Math.min(1, t2 + s2)), ss(1 - Math.min(1, i2 + s2)), ss(1 - Math.min(1, e2 + s2))];
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
  class rs {
    create(t2, e2, i2 = false) {
      if (t2 <= 0 || e2 <= 0) throw new Error("Invalid SVG dimensions");
      const s2 = this._createSVG("svg:svg");
      return s2.setAttribute("version", "1.1"), i2 || (s2.setAttribute("width", `${t2}px`), s2.setAttribute("height", `${e2}px`)), s2.setAttribute("preserveAspectRatio", "none"), s2.setAttribute("viewBox", `0 0 ${t2} ${e2}`), s2;
    }
    createElement(t2) {
      if ("string" != typeof t2) throw new Error("Invalid SVG element type");
      return this._createSVG(t2);
    }
    _createSVG(t2) {
      S("Abstract method `_createSVG` called.");
    }
  }
  class as extends rs {
    _createSVG(t2) {
      return document.createElementNS(K, t2);
    }
  }
  const os = /* @__PURE__ */ new WeakSet(), ls = 60 * (/* @__PURE__ */ new Date()).getTimezoneOffset() * 1e3;
  class hs {
    static create(t2) {
      switch (t2.data.annotationType) {
        case m.LINK:
          return new us(t2);
        case m.TEXT:
          return new ps(t2);
        case m.WIDGET:
          switch (t2.data.fieldType) {
            case "Tx":
              return new ms(t2);
            case "Btn":
              return t2.data.radioButton ? new vs(t2) : t2.data.checkBox ? new bs(t2) : new ys(t2);
            case "Ch":
              return new ws(t2);
            case "Sig":
              return new fs(t2);
          }
          return new gs(t2);
        case m.POPUP:
          return new xs(t2);
        case m.FREETEXT:
          return new _s(t2);
        case m.LINE:
          return new Ss(t2);
        case m.SQUARE:
          return new Es(t2);
        case m.CIRCLE:
          return new Cs(t2);
        case m.POLYLINE:
          return new Ts(t2);
        case m.CARET:
          return new ks(t2);
        case m.INK:
          return new Ds(t2);
        case m.POLYGON:
          return new Ms(t2);
        case m.HIGHLIGHT:
          return new Ps(t2);
        case m.UNDERLINE:
          return new Is(t2);
        case m.SQUIGGLY:
          return new Rs(t2);
        case m.STRIKEOUT:
          return new Ls(t2);
        case m.STAMP:
          return new Bs(t2);
        case m.FILEATTACHMENT:
          return new Fs(t2);
        default:
          return new cs(t2);
      }
    }
  }
  class cs {
    #hr = null;
    #cr = false;
    #dr = null;
    constructor(t2, { isRenderable: e2 = false, ignoreBorder: i2 = false, createQuadrilaterals: s2 = false } = {}) {
      this.isRenderable = e2, this.data = t2.data, this.layer = t2.layer, this.linkService = t2.linkService, this.downloadManager = t2.downloadManager, this.imageResourcesPath = t2.imageResourcesPath, this.renderForms = t2.renderForms, this.svgFactory = t2.svgFactory, this.annotationStorage = t2.annotationStorage, this.enableComment = t2.enableComment, this.enableScripting = t2.enableScripting, this.hasJSActions = t2.hasJSActions, this._fieldObjects = t2.fieldObjects, this.parent = t2.parent, e2 && (this.container = this._createContainer(i2)), s2 && this._createQuadrilaterals();
    }
    static _hasPopupData({ contentsObj: t2, richText: e2 }) {
      return !(!t2?.str && !e2?.str);
    }
    get _isEditable() {
      return this.data.isEditable;
    }
    get hasPopupData() {
      return cs._hasPopupData(this.data) || this.enableComment && !!this.commentText;
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
        for (let t3 = 0; t3 < e2.length; t3 += 8) e2[t3 + 1] > r2 ? (r2 = e2[t3 + 1], n2 = e2[t3 + 2]) : e2[t3 + 1] === r2 && (n2 = Math.max(n2, e2[t3 + 2]));
        return [n2, r2];
      }
      if (i2?.length >= 1) {
        for (const t3 of i2) for (let e3 = 0, i3 = t3.length; e3 < i3; e3 += 2) t3[e3 + 1] > r2 ? (r2 = t3[e3 + 1], n2 = t3[e3]) : t3[e3 + 1] === r2 && (n2 = Math.max(n2, t3[e3]));
        if (n2 !== 1 / 0) return [n2, r2];
      }
      return s2 ? [s2[2], s2[3]] : null;
    }
    _normalizePoint(t2) {
      const { page: { view: e2 }, viewport: { rawDims: { pageWidth: i2, pageHeight: s2, pageX: n2, pageY: r2 } } } = this.parent;
      return t2[1] = e2[3] - t2[1] + e2[1], t2[0] = 100 * (t2[0] - n2) / i2, t2[1] = 100 * (t2[1] - r2) / s2, t2;
    }
    get commentText() {
      const { data: t2 } = this;
      return this.annotationStorage.getRawValue(`${c}${t2.id}`)?.popup?.contents || t2.contentsObj?.str || "";
    }
    set commentText(t2) {
      const { data: e2 } = this, i2 = { deleted: !t2, contents: t2 || "" };
      this.annotationStorage.updateEditor(e2.id, { popup: i2 }) || this.annotationStorage.setValue(`${c}${e2.id}`, { id: e2.id, annotationType: e2.annotationType, pageIndex: this.parent.page._pageIndex, popup: i2, popupRef: e2.popupRef, modificationDate: /* @__PURE__ */ new Date() }), t2 || this.removePopup();
    }
    removePopup() {
      (this.#dr?.popup || this.popup)?.remove(), this.#dr = this.popup = null;
    }
    updateEdited(t2) {
      if (!this.container) return;
      t2.rect && (this.#hr ||= { rect: this.data.rect.slice(0) });
      const { rect: e2, popup: i2 } = t2;
      e2 && this.#ur(e2);
      let s2 = this.#dr?.popup || this.popup;
      !s2 && i2?.text && (this._createPopup(i2), s2 = this.#dr.popup), s2 && (s2.updateEdited(t2), i2?.deleted && (s2.remove(), this.#dr = null, this.popup = null));
    }
    resetEdited() {
      this.#hr && (this.#ur(this.#hr.rect), this.#dr?.popup.resetEdited(), this.#hr = null);
    }
    #ur(t2) {
      const { container: { style: e2 }, data: { rect: i2, rotation: s2 }, parent: { viewport: { rawDims: { pageWidth: n2, pageHeight: r2, pageX: a2, pageY: o2 } } } } = this;
      i2?.splice(0, 4, ...t2), e2.left = 100 * (t2[0] - a2) / n2 + "%", e2.top = 100 * (r2 - t2[3] + o2) / r2 + "%", 0 === s2 ? (e2.width = 100 * (t2[2] - t2[0]) / n2 + "%", e2.height = 100 * (t2[3] - t2[1]) / r2 + "%") : this.setRotation(s2);
    }
    _createContainer(t2) {
      const { data: e2, parent: { page: i2, viewport: s2 } } = this, n2 = document.createElement("section");
      n2.setAttribute("data-annotation-id", e2.id), this instanceof gs || this instanceof us || (n2.tabIndex = 0);
      const { style: r2 } = n2;
      if (r2.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e2.alternativeText && (n2.title = e2.alternativeText), e2.noRotate && n2.classList.add("norotate"), !e2.rect || this instanceof xs) {
        const { rotation: t3 } = e2;
        return e2.hasOwnCanvas || 0 === t3 || this.setRotation(t3, n2), n2;
      }
      const { width: a2, height: o2 } = this;
      if (!t2 && e2.borderStyle.width > 0) {
        r2.borderWidth = `${e2.borderStyle.width}px`;
        const t3 = e2.borderStyle.horizontalCornerRadius, i3 = e2.borderStyle.verticalCornerRadius;
        if (t3 > 0 || i3 > 0) {
          const e3 = `calc(${t3}px * var(--total-scale-factor)) / calc(${i3}px * var(--total-scale-factor))`;
          r2.borderRadius = e3;
        } else if (this instanceof vs) {
          const t4 = `calc(${a2}px * var(--total-scale-factor)) / calc(${o2}px * var(--total-scale-factor))`;
          r2.borderRadius = t4;
        }
        switch (e2.borderStyle.style) {
          case 1:
            r2.borderStyle = "solid";
            break;
          case 2:
            r2.borderStyle = "dashed";
            break;
          case 3:
            _("Unimplemented border style: beveled");
            break;
          case 4:
            _("Unimplemented border style: inset");
            break;
          case 5:
            r2.borderBottomStyle = "solid";
        }
        const s3 = e2.borderColor || null;
        s3 ? (this.#cr = true, r2.borderColor = z.makeHexColor(0 | s3[0], 0 | s3[1], 0 | s3[2])) : r2.borderWidth = 0;
      }
      const l2 = z.normalizeRect([e2.rect[0], i2.view[3] - e2.rect[1] + i2.view[1], e2.rect[2], i2.view[3] - e2.rect[3] + i2.view[1]]), { pageWidth: h2, pageHeight: c2, pageX: d2, pageY: u2 } = s2.rawDims;
      r2.left = 100 * (l2[0] - d2) / h2 + "%", r2.top = 100 * (l2[1] - u2) / c2 + "%";
      const { rotation: p2 } = e2;
      return e2.hasOwnCanvas || 0 === p2 ? (r2.width = 100 * a2 / h2 + "%", r2.height = 100 * o2 / c2 + "%") : this.setRotation(p2, n2), n2;
    }
    setRotation(t2, e2 = this.container) {
      if (!this.data.rect) return;
      const { pageWidth: i2, pageHeight: s2 } = this.parent.viewport.rawDims;
      let { width: n2, height: r2 } = this;
      t2 % 180 != 0 && ([n2, r2] = [r2, n2]), e2.style.width = 100 * n2 / i2 + "%", e2.style.height = 100 * r2 / s2 + "%", e2.setAttribute("data-main-rotation", (360 - t2) % 360);
    }
    get _commonActions() {
      const t2 = (t3, e2, i2) => {
        const s2 = i2.detail[t3], n2 = s2[0], r2 = s2.slice(1);
        i2.target.style[e2] = ns[`${n2}_HTML`](r2), this.annotationStorage.setValue(this.data.id, { [e2]: ns[`${n2}_rgb`](r2) });
      };
      return M(this, "_commonActions", { display: (t3) => {
        const { display: e2 } = t3.detail, i2 = e2 % 2 == 1;
        this.container.style.visibility = i2 ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, { noView: i2, noPrint: 1 === e2 || 2 === e2 });
      }, print: (t3) => {
        this.annotationStorage.setValue(this.data.id, { noPrint: !t3.detail.print });
      }, hidden: (t3) => {
        const { hidden: e2 } = t3.detail;
        this.container.style.visibility = e2 ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, { noPrint: e2, noView: e2 });
      }, focus: (t3) => {
        setTimeout(() => t3.target.focus({ preventScroll: false }), 0);
      }, userName: (t3) => {
        t3.target.title = t3.detail.userName;
      }, readonly: (t3) => {
        t3.target.disabled = t3.detail.readonly;
      }, required: (t3) => {
        this._setRequired(t3.target, t3.detail.required);
      }, bgColor: (e2) => {
        t2("bgColor", "backgroundColor", e2);
      }, fillColor: (e2) => {
        t2("fillColor", "backgroundColor", e2);
      }, fgColor: (e2) => {
        t2("fgColor", "color", e2);
      }, textColor: (e2) => {
        t2("textColor", "color", e2);
      }, borderColor: (e2) => {
        t2("borderColor", "borderColor", e2);
      }, strokeColor: (e2) => {
        t2("strokeColor", "borderColor", e2);
      }, rotation: (t3) => {
        const e2 = t3.detail.rotation;
        this.setRotation(e2), this.annotationStorage.setValue(this.data.id, { rotation: e2 });
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
        r2 && (r2({ detail: { [s2]: n2 }, target: t2 }), delete e2[s2]);
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
      if (this.#cr) {
        const { borderColor: t3, borderWidth: e3 } = r2;
        r2.borderWidth = 0, a2 = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${t3}" stroke-width="${e3}">`], this.container.classList.add("hasBorder");
      }
      const o2 = s2 - e2, l2 = n2 - i2, { svgFactory: h2 } = this, c2 = h2.createElement("svg");
      c2.classList.add("quadrilateralsContainer"), c2.setAttribute("width", 0), c2.setAttribute("height", 0), c2.role = "none";
      const d2 = h2.createElement("defs");
      c2.append(d2);
      const u2 = h2.createElement("clipPath"), p2 = `clippath_${this.data.id}`;
      u2.setAttribute("id", p2), u2.setAttribute("clipPathUnits", "objectBoundingBox"), d2.append(u2);
      for (let i3 = 2, s3 = t2.length; i3 < s3; i3 += 8) {
        const s4 = t2[i3], r3 = t2[i3 + 1], c3 = t2[i3 + 2], d3 = t2[i3 + 3], p3 = h2.createElement("rect"), g2 = (c3 - e2) / o2, m2 = (n2 - r3) / l2, f2 = (s4 - c3) / o2, b2 = (r3 - d3) / l2;
        p3.setAttribute("x", g2), p3.setAttribute("y", m2), p3.setAttribute("width", f2), p3.setAttribute("height", b2), u2.append(p3), a2?.push(`<rect vector-effect="non-scaling-stroke" x="${g2}" y="${m2}" width="${f2}" height="${b2}"/>`);
      }
      this.#cr && (a2.push("</g></svg>')"), r2.backgroundImage = a2.join("")), this.container.append(c2), this.container.style.clipPath = `url(#${p2})`;
    }
    _createPopup(t2 = null) {
      const { data: e2 } = this;
      let i2, s2;
      t2 ? (i2 = { str: t2.text }, s2 = t2.date) : (i2 = e2.contentsObj, s2 = e2.modificationDate);
      const n2 = this.#dr = new xs({ data: { color: e2.color, titleObj: e2.titleObj, modificationDate: s2, contentsObj: i2, richText: e2.richText, parentRect: e2.rect, borderStyle: 0, id: `popup_${e2.id}`, rotation: e2.rotation, noRotate: true }, linkService: this.linkService, parent: this.parent, elements: [this] });
      this.parent._commentManager || this.parent.div.append(n2.render());
    }
    get hasPopupElement() {
      return !!(this.#dr || this.popup || this.data.popupRef);
    }
    get extraPopupElement() {
      return this.#dr;
    }
    render() {
      S("Abstract method `AnnotationElement.render` called");
    }
    _getElementsByName(t2, e2 = null) {
      const i2 = [];
      if (this._fieldObjects) {
        const s2 = this._fieldObjects[t2];
        if (s2) for (const { page: t3, id: n2, exportValues: r2 } of s2) {
          if (-1 === t3) continue;
          if (n2 === e2) continue;
          const s3 = "string" == typeof r2 ? r2 : null, a2 = document.querySelector(`[data-element-id="${n2}"]`);
          !a2 || os.has(a2) ? i2.push({ id: n2, exportValue: s3, domElement: a2 }) : _(`_getElementsByName - element not allowed: ${n2}`);
        }
        return i2;
      }
      for (const s2 of document.getElementsByName(t2)) {
        const { exportValue: t3 } = s2, n2 = s2.getAttribute("data-element-id");
        n2 !== e2 && os.has(s2) && i2.push({ id: n2, exportValue: t3, domElement: s2 });
      }
      return i2;
    }
    show() {
      this.container && (this.container.hidden = false), this.popup?.maybeShow();
    }
    hide() {
      this.container && (this.container.hidden = true), this.popup?.forceHide();
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
  class ds extends cs {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true }), this.editor = t2.editor;
    }
    render() {
      return this.container.className = "editorAnnotation", this.container;
    }
    createOrUpdatePopup() {
      const { editor: t2 } = this;
      t2.hasComment && (this._createPopup(t2.comment), this.extraPopupElement.popup.renderCommentButton());
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
      this.editor.comment = t2, t2 || this.removePopup();
    }
    get commentData() {
      return this.editor.getData();
    }
    remove() {
      this.container.remove(), this.container = null, this.removePopup();
    }
  }
  class us extends cs {
    constructor(t2, e2 = null) {
      super(t2, { isRenderable: true, ignoreBorder: !!e2?.ignoreBorder, createQuadrilaterals: true }), this.isTooltipOnly = t2.data.isTooltipOnly;
    }
    render() {
      const { data: t2, linkService: e2 } = this, i2 = document.createElement("a");
      i2.setAttribute("data-element-id", t2.id);
      let s2 = false;
      return t2.url ? (e2.addLinkAttributes(i2, t2.url, t2.newWindow), s2 = true) : t2.action ? (this._bindNamedAction(i2, t2.action, t2.overlaidText), s2 = true) : t2.attachment ? (this.#pr(i2, t2.attachment, t2.overlaidText, t2.attachmentDest), s2 = true) : t2.setOCGState ? (this.#gr(i2, t2.setOCGState, t2.overlaidText), s2 = true) : t2.dest ? (this._bindLink(i2, t2.dest, t2.overlaidText), s2 = true) : (t2.actions && (t2.actions.Action || t2.actions["Mouse Up"] || t2.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i2, t2), s2 = true), t2.resetForm ? (this._bindResetFormAction(i2, t2.resetForm), s2 = true) : this.isTooltipOnly && !s2 && (this._bindLink(i2, ""), s2 = true)), this.container.classList.add("linkAnnotation"), s2 && this.container.append(i2), this.container;
    }
    #mr() {
      this.container.setAttribute("data-internal-link", "");
    }
    _bindLink(t2, e2, i2 = "") {
      t2.href = this.linkService.getDestinationHash(e2), t2.onclick = () => (e2 && this.linkService.goToDestination(e2), false), (e2 || "" === e2) && this.#mr(), i2 && (t2.title = i2);
    }
    _bindNamedAction(t2, e2, i2 = "") {
      t2.href = this.linkService.getAnchorUrl(""), t2.onclick = () => (this.linkService.executeNamedAction(e2), false), i2 && (t2.title = i2), this.#mr();
    }
    #pr(t2, e2, i2 = "", s2 = null) {
      t2.href = this.linkService.getAnchorUrl(""), e2.description ? t2.title = e2.description : i2 && (t2.title = i2), t2.onclick = () => (this.downloadManager?.openOrDownloadData(e2.content, e2.filename, s2), false), this.#mr();
    }
    #gr(t2, e2, i2 = "") {
      t2.href = this.linkService.getAnchorUrl(""), t2.onclick = () => (this.linkService.executeSetOCGState(e2), false), i2 && (t2.title = i2), this.#mr();
    }
    _bindJSAction(t2, e2) {
      t2.href = this.linkService.getAnchorUrl("");
      const i2 = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
      for (const s2 of Object.keys(e2.actions)) {
        const n2 = i2.get(s2);
        n2 && (t2[n2] = () => (this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2.id, name: s2 } }), false));
      }
      e2.overlaidText && (t2.title = e2.overlaidText), t2.onclick || (t2.onclick = () => false), this.#mr();
    }
    _bindResetFormAction(t2, e2) {
      const i2 = t2.onclick;
      if (i2 || (t2.href = this.linkService.getAnchorUrl("")), this.#mr(), !this._fieldObjects) return _('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), void (i2 || (t2.onclick = () => false));
      t2.onclick = () => {
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
          switch (o2.push(e3), t4.type) {
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
          i3 && (os.has(i3) ? i3.dispatchEvent(new Event("resetform")) : _(`_bindResetFormAction - element not allowed: ${e3}`));
        }
        return this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: "app", ids: o2, name: "ResetForm" } }), false;
      };
    }
  }
  class ps extends cs {
    constructor(t2) {
      super(t2, { isRenderable: true });
    }
    render() {
      this.container.classList.add("textAnnotation");
      const t2 = document.createElement("img");
      return t2.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t2.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t2.setAttribute("data-l10n-args", JSON.stringify({ type: this.data.name })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t2), this.container;
    }
  }
  class gs extends cs {
    render() {
      return this.container;
    }
    showElementAndHideCanvas(t2) {
      this.data.hasOwnCanvas && ("CANVAS" === t2.previousSibling?.nodeName && (t2.previousSibling.hidden = true), t2.hidden = false);
    }
    _getKeyModifier(t2) {
      return N.platform.isMac ? t2.metaKey : t2.ctrlKey;
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
      for (const [n2, r2] of i2) ("Action" === r2 || this.data.actions?.[r2]) && ("Focus" !== r2 && "Blur" !== r2 || (e2 ||= { focused: false }), this._setEventListener(t2, e2, n2, r2, s2), "Focus" !== r2 || this.data.actions?.Blur ? "Blur" !== r2 || this.data.actions?.Focus || this._setEventListener(t2, e2, "focus", "Focus", null) : this._setEventListener(t2, e2, "blur", "Blur", null));
    }
    _setBackgroundColor(t2) {
      const e2 = this.data.backgroundColor || null;
      t2.style.backgroundColor = null === e2 ? "transparent" : z.makeHexColor(e2[0], e2[1], e2[2]);
    }
    _setTextStyle(t2) {
      const { fontColor: e2 } = this.data.defaultAppearanceData, i2 = this.data.defaultAppearanceData.fontSize || 9, s2 = t2.style;
      let n2;
      const r2 = (t3) => Math.round(10 * t3) / 10;
      if (this.data.multiLine) {
        const t3 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2), e3 = t3 / (Math.round(t3 / (l * i2)) || 1);
        n2 = Math.min(i2, r2(e3 / l));
      } else {
        const t3 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
        n2 = Math.min(i2, r2(t3 / l));
      }
      s2.fontSize = `calc(${n2}px * var(--total-scale-factor))`, s2.color = z.makeHexColor(e2[0], e2[1], e2[2]), null !== this.data.textAlignment && (s2.textAlign = ["left", "center", "right"][this.data.textAlignment]);
    }
    _setRequired(t2, e2) {
      e2 ? t2.setAttribute("required", true) : t2.removeAttribute("required"), t2.setAttribute("aria-required", e2);
    }
  }
  class ms extends gs {
    constructor(t2) {
      super(t2, { isRenderable: t2.renderForms || t2.data.hasOwnCanvas || !t2.data.hasAppearance && !!t2.data.fieldValue });
    }
    setPropertyOnSiblings(t2, e2, i2, s2) {
      const n2 = this.annotationStorage;
      for (const r2 of this._getElementsByName(t2.name, t2.id)) r2.domElement && (r2.domElement[e2] = i2), n2.setValue(r2.id, { [s2]: i2 });
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
        this.data.multiLine ? (i2 = document.createElement("textarea"), i2.textContent = a2 ?? n2, this.data.doNotScroll && (i2.style.overflowY = "hidden")) : (i2 = document.createElement("input"), i2.type = this.data.password ? "password" : "text", i2.setAttribute("value", a2 ?? n2), this.data.doNotScroll && (i2.style.overflowX = "hidden")), this.data.hasOwnCanvas && (i2.hidden = true), os.add(i2), i2.setAttribute("data-element-id", e2), i2.disabled = this.data.readOnly, i2.name = this.data.fieldName, i2.tabIndex = 0;
        const { datetimeFormat: l2, datetimeType: h2, timeStep: c2 } = this.data, d2 = !!h2 && this.enableScripting;
        l2 && (i2.title = l2), this._setRequired(i2, this.data.required), r2 && (i2.maxLength = r2), i2.addEventListener("input", (s3) => {
          t2.setValue(e2, { value: s3.target.value }), this.setPropertyOnSiblings(i2, "value", s3.target.value, "value"), o2.formattedValue = null;
        }), i2.addEventListener("resetform", (t3) => {
          const e3 = this.data.defaultFieldValue ?? "";
          i2.value = o2.userValue = e3, o2.formattedValue = null;
        });
        let u2 = (t3) => {
          const { formattedValue: e3 } = o2;
          null != e3 && (t3.target.value = e3), t3.target.scrollLeft = 0;
        };
        if (this.enableScripting && this.hasJSActions) {
          i2.addEventListener("focus", (t3) => {
            if (o2.focused) return;
            const { target: e3 } = t3;
            if (d2 && (e3.type = h2, c2 && (e3.step = c2)), o2.userValue) {
              const t4 = o2.userValue;
              if (d2) if ("time" === h2) {
                const i3 = new Date(t4), s4 = [i3.getHours(), i3.getMinutes(), i3.getSeconds()];
                e3.value = s4.map((t5) => t5.toString().padStart(2, "0")).join(":");
              } else e3.value = new Date(t4 - ls).toISOString().split("date" === h2 ? "T" : ".", 1)[0];
              else e3.value = t4;
            }
            o2.lastCommittedValue = e3.value, o2.commitKey = 1, this.data.actions?.Focus || (o2.focused = true);
          }), i2.addEventListener("updatefromsandbox", (i3) => {
            this.showElementAndHideCanvas(i3.target);
            const s4 = { value(i4) {
              o2.userValue = i4.detail.value ?? "", d2 || t2.setValue(e2, { value: o2.userValue.toString() }), i4.target.value = o2.userValue;
            }, formattedValue(i4) {
              const { formattedValue: s5 } = i4.detail;
              o2.formattedValue = s5, null != s5 && i4.target !== document.activeElement && (i4.target.value = s5);
              const n3 = { formattedValue: s5 };
              d2 && (n3.value = s5), t2.setValue(e2, n3);
            }, selRange(t3) {
              t3.target.setSelectionRange(...t3.detail.selRange);
            }, charLimit: (i4) => {
              const { charLimit: s5 } = i4.detail, { target: n3 } = i4;
              if (0 === s5) return void n3.removeAttribute("maxLength");
              n3.setAttribute("maxLength", s5);
              let r3 = o2.userValue;
              !r3 || r3.length <= s5 || (r3 = r3.slice(0, s5), n3.value = o2.userValue = r3, t2.setValue(e2, { value: r3 }), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: r3, willCommit: true, commitKey: 1, selStart: n3.selectionStart, selEnd: n3.selectionEnd } }));
            } };
            this._dispatchEventFromSandbox(s4, i3);
          }), i2.addEventListener("keydown", (t3) => {
            o2.commitKey = 1;
            let i3 = -1;
            if ("Escape" === t3.key ? i3 = 0 : "Enter" !== t3.key || this.data.multiLine ? "Tab" === t3.key && (o2.commitKey = 3) : i3 = 2, -1 === i3) return;
            const { value: s4 } = t3.target;
            o2.lastCommittedValue !== s4 && (o2.lastCommittedValue = s4, o2.userValue = s4, this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: s4, willCommit: true, commitKey: i3, selStart: t3.target.selectionStart, selEnd: t3.target.selectionEnd } }));
          });
          const s3 = u2;
          u2 = null, i2.addEventListener("blur", (t3) => {
            if (!o2.focused || !t3.relatedTarget) return;
            this.data.actions?.Blur || (o2.focused = false);
            const { target: i3 } = t3;
            let { value: n3 } = i3;
            if (d2) {
              if (n3 && "time" === h2) {
                const t4 = n3.split(":").map((t5) => parseInt(t5, 10));
                n3 = new Date(2e3, 0, 1, t4[0], t4[1], t4[2] || 0).valueOf(), i3.step = "";
              } else n3.includes("T") || (n3 = `${n3}T00:00`), n3 = new Date(n3).valueOf();
              i3.type = "text";
            }
            o2.userValue = n3, o2.lastCommittedValue !== n3 && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: n3, willCommit: true, commitKey: o2.commitKey, selStart: t3.target.selectionStart, selEnd: t3.target.selectionEnd } }), s3(t3);
          }), this.data.actions?.Keystroke && i2.addEventListener("beforeinput", (t3) => {
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
            t3.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: n3, change: i3 || "", willCommit: false, selStart: l3, selEnd: h3 } });
          }), this._setEventListeners(i2, o2, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t3) => t3.target.value);
        }
        if (u2 && i2.addEventListener("blur", u2), this.data.comb) {
          const t3 = (this.data.rect[2] - this.data.rect[0]) / r2;
          i2.classList.add("comb"), i2.style.letterSpacing = `calc(${t3}px * var(--total-scale-factor) - 1ch)`;
        }
      } else i2 = document.createElement("div"), i2.textContent = this.data.fieldValue, i2.style.verticalAlign = "middle", i2.style.display = "table-cell", this.data.hasOwnCanvas && (i2.hidden = true);
      return this._setTextStyle(i2), this._setBackgroundColor(i2), this._setDefaultPropertiesFromJS(i2), this.container.append(i2), this.container;
    }
  }
  class fs extends gs {
    constructor(t2) {
      super(t2, { isRenderable: !!t2.data.hasOwnCanvas });
    }
  }
  class bs extends gs {
    constructor(t2) {
      super(t2, { isRenderable: t2.renderForms });
    }
    render() {
      const t2 = this.annotationStorage, e2 = this.data, i2 = e2.id;
      let s2 = t2.getValue(i2, { value: e2.exportValue === e2.fieldValue }).value;
      "string" == typeof s2 && (s2 = "Off" !== s2, t2.setValue(i2, { value: s2 })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
      const n2 = document.createElement("input");
      return os.add(n2), n2.setAttribute("data-element-id", i2), n2.disabled = e2.readOnly, this._setRequired(n2, this.data.required), n2.type = "checkbox", n2.name = e2.fieldName, s2 && n2.setAttribute("checked", true), n2.setAttribute("exportValue", e2.exportValue), n2.tabIndex = 0, n2.addEventListener("change", (s3) => {
        const { name: n3, checked: r2 } = s3.target;
        for (const s4 of this._getElementsByName(n3, i2)) {
          const i3 = r2 && s4.exportValue === e2.exportValue;
          s4.domElement && (s4.domElement.checked = i3), t2.setValue(s4.id, { value: i3 });
        }
        t2.setValue(i2, { value: r2 });
      }), n2.addEventListener("resetform", (t3) => {
        const i3 = e2.defaultFieldValue || "Off";
        t3.target.checked = i3 === e2.exportValue;
      }), this.enableScripting && this.hasJSActions && (n2.addEventListener("updatefromsandbox", (e3) => {
        const s3 = { value(e4) {
          e4.target.checked = "Off" !== e4.detail.value, t2.setValue(i2, { value: e4.target.checked });
        } };
        this._dispatchEventFromSandbox(s3, e3);
      }), this._setEventListeners(n2, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t3) => t3.target.checked)), this._setBackgroundColor(n2), this._setDefaultPropertiesFromJS(n2), this.container.append(n2), this.container;
    }
  }
  class vs extends gs {
    constructor(t2) {
      super(t2, { isRenderable: t2.renderForms });
    }
    render() {
      this.container.classList.add("buttonWidgetAnnotation", "radioButton");
      const t2 = this.annotationStorage, e2 = this.data, i2 = e2.id;
      let s2 = t2.getValue(i2, { value: e2.fieldValue === e2.buttonValue }).value;
      if ("string" == typeof s2 && (s2 = s2 !== e2.buttonValue, t2.setValue(i2, { value: s2 })), s2) for (const s3 of this._getElementsByName(e2.fieldName, i2)) t2.setValue(s3.id, { value: false });
      const n2 = document.createElement("input");
      if (os.add(n2), n2.setAttribute("data-element-id", i2), n2.disabled = e2.readOnly, this._setRequired(n2, this.data.required), n2.type = "radio", n2.name = e2.fieldName, s2 && n2.setAttribute("checked", true), n2.tabIndex = 0, n2.addEventListener("change", (e3) => {
        const { name: s3, checked: n3 } = e3.target;
        for (const e4 of this._getElementsByName(s3, i2)) t2.setValue(e4.id, { value: false });
        t2.setValue(i2, { value: n3 });
      }), n2.addEventListener("resetform", (t3) => {
        const i3 = e2.defaultFieldValue;
        t3.target.checked = null != i3 && i3 === e2.buttonValue;
      }), this.enableScripting && this.hasJSActions) {
        const s3 = e2.buttonValue;
        n2.addEventListener("updatefromsandbox", (e3) => {
          const n3 = { value: (e4) => {
            const n4 = s3 === e4.detail.value;
            for (const s4 of this._getElementsByName(e4.target.name)) {
              const e5 = n4 && s4.id === i2;
              s4.domElement && (s4.domElement.checked = e5), t2.setValue(s4.id, { value: e5 });
            }
          } };
          this._dispatchEventFromSandbox(n3, e3);
        }), this._setEventListeners(n2, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (t3) => t3.target.checked);
      }
      return this._setBackgroundColor(n2), this._setDefaultPropertiesFromJS(n2), this.container.append(n2), this.container;
    }
  }
  class ys extends us {
    constructor(t2) {
      super(t2, { ignoreBorder: t2.data.hasAppearance });
    }
    render() {
      const t2 = super.render();
      t2.classList.add("buttonWidgetAnnotation", "pushButton");
      const e2 = t2.lastChild;
      return this.enableScripting && this.hasJSActions && e2 && (this._setDefaultPropertiesFromJS(e2), e2.addEventListener("updatefromsandbox", (t3) => {
        this._dispatchEventFromSandbox({}, t3);
      })), t2;
    }
  }
  class ws extends gs {
    constructor(t2) {
      super(t2, { isRenderable: t2.renderForms });
    }
    render() {
      this.container.classList.add("choiceWidgetAnnotation");
      const t2 = this.annotationStorage, e2 = this.data.id, i2 = t2.getValue(e2, { value: this.data.fieldValue }), s2 = document.createElement("select");
      os.add(s2), s2.setAttribute("data-element-id", e2), s2.disabled = this.data.readOnly, this._setRequired(s2, this.data.required), s2.name = this.data.fieldName, s2.tabIndex = 0;
      let n2 = this.data.combo && this.data.options.length > 0;
      this.data.combo || (s2.size = this.data.options.length, this.data.multiSelect && (s2.multiple = true)), s2.addEventListener("resetform", (t3) => {
        const e3 = this.data.defaultFieldValue;
        for (const t4 of s2.options) t4.selected = t4.value === e3;
      });
      for (const t3 of this.data.options) {
        const e3 = document.createElement("option");
        e3.textContent = t3.displayValue, e3.value = t3.exportValue, i2.value.includes(t3.exportValue) && (e3.setAttribute("selected", true), n2 = false), s2.append(e3);
      }
      let r2 = null;
      if (n2) {
        const t3 = document.createElement("option");
        t3.value = " ", t3.setAttribute("hidden", true), t3.setAttribute("selected", true), s2.prepend(t3), r2 = () => {
          t3.remove(), s2.removeEventListener("input", r2), r2 = null;
        }, s2.addEventListener("input", r2);
      }
      const a2 = (t3) => {
        const e3 = t3 ? "value" : "textContent", { options: i3, multiple: n3 } = s2;
        return n3 ? Array.prototype.filter.call(i3, (t4) => t4.selected).map((t4) => t4[e3]) : -1 === i3.selectedIndex ? null : i3[i3.selectedIndex][e3];
      };
      let o2 = a2(false);
      const l2 = (t3) => {
        const e3 = t3.target.options;
        return Array.prototype.map.call(e3, (t4) => ({ displayValue: t4.textContent, exportValue: t4.value }));
      };
      return this.enableScripting && this.hasJSActions ? (s2.addEventListener("updatefromsandbox", (i3) => {
        const n3 = { value(i4) {
          r2?.();
          const n4 = i4.detail.value, l3 = new Set(Array.isArray(n4) ? n4 : [n4]);
          for (const t3 of s2.options) t3.selected = l3.has(t3.value);
          t2.setValue(e2, { value: a2(true) }), o2 = a2(false);
        }, multipleSelection(t3) {
          s2.multiple = true;
        }, remove(i4) {
          const n4 = s2.options, r3 = i4.detail.remove;
          n4[r3].selected = false, s2.remove(r3), n4.length > 0 && -1 === Array.prototype.findIndex.call(n4, (t3) => t3.selected) && (n4[0].selected = true), t2.setValue(e2, { value: a2(true), items: l2(i4) }), o2 = a2(false);
        }, clear(i4) {
          for (; 0 !== s2.length; ) s2.remove(0);
          t2.setValue(e2, { value: null, items: [] }), o2 = a2(false);
        }, insert(i4) {
          const { index: n4, displayValue: r3, exportValue: h2 } = i4.detail.insert, c2 = s2.children[n4], d2 = document.createElement("option");
          d2.textContent = r3, d2.value = h2, c2 ? c2.before(d2) : s2.append(d2), t2.setValue(e2, { value: a2(true), items: l2(i4) }), o2 = a2(false);
        }, items(i4) {
          const { items: n4 } = i4.detail;
          for (; 0 !== s2.length; ) s2.remove(0);
          for (const t3 of n4) {
            const { displayValue: e3, exportValue: i5 } = t3, n5 = document.createElement("option");
            n5.textContent = e3, n5.value = i5, s2.append(n5);
          }
          s2.options.length > 0 && (s2.options[0].selected = true), t2.setValue(e2, { value: a2(true), items: l2(i4) }), o2 = a2(false);
        }, indices(i4) {
          const s3 = new Set(i4.detail.indices);
          for (const t3 of i4.target.options) t3.selected = s3.has(t3.index);
          t2.setValue(e2, { value: a2(true) }), o2 = a2(false);
        }, editable(t3) {
          t3.target.disabled = !t3.detail.editable;
        } };
        this._dispatchEventFromSandbox(n3, i3);
      }), s2.addEventListener("input", (i3) => {
        const s3 = a2(true), n3 = a2(false);
        t2.setValue(e2, { value: s3 }), i3.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", { source: this, detail: { id: e2, name: "Keystroke", value: o2, change: n3, changeEx: s3, willCommit: false, commitKey: 1, keyDown: false } });
      }), this._setEventListeners(s2, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (t3) => t3.target.value)) : s2.addEventListener("input", function(i3) {
        t2.setValue(e2, { value: a2(true) });
      }), this.data.combo && this._setTextStyle(s2), this._setBackgroundColor(s2), this._setDefaultPropertiesFromJS(s2), this.container.append(s2), this.container;
    }
  }
  class xs extends cs {
    constructor(t2) {
      const { data: e2, elements: i2, parent: s2 } = t2, n2 = !!s2._commentManager;
      if (super(t2, { isRenderable: !n2 && cs._hasPopupData(e2) }), this.elements = i2, n2 && cs._hasPopupData(e2)) {
        const t3 = this.popup = this.#fr();
        for (const e3 of i2) e3.popup = t3;
      } else this.popup = null;
    }
    #fr() {
      return new As({ container: this.container, color: this.data.color, titleObj: this.data.titleObj, modificationDate: this.data.modificationDate || this.data.creationDate, contentsObj: this.data.contentsObj, richText: this.data.richText, rect: this.data.rect, parentRect: this.data.parentRect || null, parent: this.parent, elements: this.elements, open: this.data.open, commentManager: this.parent._commentManager });
    }
    render() {
      const { container: t2 } = this;
      t2.classList.add("popupAnnotation"), t2.role = "comment";
      const e2 = this.popup = this.#fr(), i2 = [];
      for (const t3 of this.elements) t3.popup = e2, t3.container.ariaHasPopup = "dialog", i2.push(t3.data.id), t3.addHighlightArea();
      return this.container.setAttribute("aria-controls", i2.map((t3) => `${G}${t3}`).join(",")), this.container;
    }
  }
  class As {
    #U = null;
    #br = this.#nr.bind(this);
    #vr = this.#yr.bind(this);
    #wr = this.#xr.bind(this);
    #Ar = this.#_r.bind(this);
    #Sr = null;
    #xt = null;
    #Er = null;
    #Cr = null;
    #Tr = null;
    #Mr = null;
    #kr = null;
    #Dr = false;
    #Pr = null;
    #Ir = null;
    #M = null;
    #Rr = null;
    #Lr = null;
    #pe = null;
    #Br = null;
    #he = null;
    #Fr = null;
    #hr = null;
    #Or = false;
    #Nr = null;
    #Ur = null;
    constructor({ container: t2, color: e2, elements: i2, titleObj: s2, modificationDate: n2, contentsObj: r2, richText: a2, parent: o2, rect: l2, parentRect: h2, open: c2, commentManager: d2 = null }) {
      this.#xt = t2, this.#Fr = s2, this.#Er = r2, this.#he = a2, this.#Mr = o2, this.#Sr = e2, this.#Br = l2, this.#kr = h2, this.#Tr = i2, this.#U = d2, this.#Nr = i2[0], this.#Cr = ht.toDateObject(n2), this.trigger = i2.flatMap((t3) => t3.getElementsToTriggerPopup()), d2 ? this.renderCommentButton() : (this.#zr(), this.#xt.hidden = true, c2 && this.#_r());
    }
    #zr() {
      if (this.#Ir) return;
      this.#Ir = new AbortController();
      const { signal: t2 } = this.#Ir;
      for (const e2 of this.trigger) e2.addEventListener("click", this.#Ar, { signal: t2 }), e2.addEventListener("pointerenter", this.#wr, { signal: t2 }), e2.addEventListener("pointerleave", this.#vr, { signal: t2 }), e2.classList.add("popupTriggerArea");
      for (const e2 of this.#Tr) e2.container?.addEventListener("keydown", this.#br, { signal: t2 });
    }
    #Hr() {
      const t2 = this.#Tr.find((t3) => t3.hasCommentButton);
      t2 && (this.#Lr = t2._normalizePoint(t2.commentButtonPosition));
    }
    renderCommentButton() {
      if (this.#Rr) return;
      if (this.#Lr || this.#Hr(), !this.#Lr) return;
      const { signal: t2 } = this.#Ir = new AbortController(), e2 = !!this.#Nr.extraPopupElement, i2 = () => {
        this.#U.toggleCommentPopup(this, true, void 0, !e2);
      }, s2 = () => {
        this.#U.toggleCommentPopup(this, false, true, !e2);
      }, n2 = () => {
        this.#U.toggleCommentPopup(this, false, false);
      };
      if (e2) {
        this.#Rr = this.#Nr.container;
        for (const e3 of this.trigger) e3.ariaHasPopup = "dialog", e3.ariaControls = "commentPopup", e3.addEventListener("keydown", this.#br, { signal: t2 }), e3.addEventListener("click", i2, { signal: t2 }), e3.addEventListener("pointerenter", s2, { signal: t2 }), e3.addEventListener("pointerleave", n2, { signal: t2 }), e3.classList.add("popupTriggerArea");
      } else {
        const e3 = this.#Rr = document.createElement("button");
        e3.className = "annotationCommentButton";
        const r2 = this.#Nr.container;
        e3.style.zIndex = r2.style.zIndex + 1, e3.tabIndex = 0, e3.ariaHasPopup = "dialog", e3.ariaControls = "commentPopup", e3.setAttribute("data-l10n-id", "pdfjs-show-comment-button"), this.#jr(), this.#$r(), e3.addEventListener("keydown", this.#br, { signal: t2 }), e3.addEventListener("click", i2, { signal: t2 }), e3.addEventListener("pointerenter", s2, { signal: t2 }), e3.addEventListener("pointerleave", n2, { signal: t2 }), r2.after(e3);
      }
    }
    #$r() {
      if (this.#Nr.extraPopupElement && !this.#Nr.editor) return;
      this.renderCommentButton();
      const [t2, e2] = this.#Lr, { style: i2 } = this.#Rr;
      i2.left = `calc(${t2}%)`, i2.top = `calc(${e2}% - var(--comment-button-dim))`;
    }
    #jr() {
      this.#Nr.extraPopupElement || (this.renderCommentButton(), this.#Rr.style.backgroundColor = this.commentButtonColor || "");
    }
    get commentButtonColor() {
      const { color: t2, opacity: e2 } = this.#Nr.commentData;
      return t2 ? this.#Mr._commentManager.makeCommentColor(t2, e2) : null;
    }
    focusCommentButton() {
      setTimeout(() => {
        this.#Rr?.focus();
      }, 0);
    }
    getData() {
      const { richText: t2, color: e2, opacity: i2, creationDate: s2, modificationDate: n2 } = this.#Nr.commentData;
      return { contentsObj: { str: this.comment }, richText: t2, color: e2, opacity: i2, creationDate: s2, modificationDate: n2 };
    }
    get elementBeforePopup() {
      return this.#Rr;
    }
    get comment() {
      return this.#Ur ||= this.#Nr.commentText, this.#Ur;
    }
    set comment(t2) {
      t2 !== this.comment && (this.#Nr.commentText = this.#Ur = t2);
    }
    get parentBoundingClientRect() {
      return this.#Nr.layer.getBoundingClientRect();
    }
    setCommentButtonStates({ selected: t2, hasPopup: e2 }) {
      this.#Rr && (this.#Rr.classList.toggle("selected", t2), this.#Rr.ariaExpanded = e2);
    }
    setSelectedCommentButton(t2) {
      this.#Rr.classList.toggle("selected", t2);
    }
    get commentPopupPosition() {
      if (this.#pe) return this.#pe;
      const { x: t2, y: e2, height: i2 } = this.#Rr.getBoundingClientRect(), { x: s2, y: n2, width: r2, height: a2 } = this.#Nr.layer.getBoundingClientRect();
      return [(t2 - s2) / r2, (e2 + i2 - n2) / a2];
    }
    set commentPopupPosition(t2) {
      this.#pe = t2;
    }
    hasDefaultPopupPosition() {
      return null === this.#pe;
    }
    get commentButtonPosition() {
      return this.#Lr;
    }
    get commentButtonWidth() {
      return this.#Rr.getBoundingClientRect().width / this.parentBoundingClientRect.width;
    }
    editComment(t2) {
      const [e2, i2] = this.#pe || this.commentButtonPosition.map((t3) => t3 / 100), s2 = this.parentBoundingClientRect, { x: n2, y: r2, width: a2, height: o2 } = s2;
      this.#U.showDialog(null, this, n2 + e2 * a2, r2 + i2 * o2, { ...t2, parentDimensions: s2 });
    }
    render() {
      if (this.#Pr) return;
      const t2 = this.#Pr = document.createElement("div");
      if (t2.className = "popup", this.#Sr) {
        const e3 = t2.style.outlineColor = z.makeHexColor(...this.#Sr);
        t2.style.backgroundColor = `color-mix(in srgb, ${e3} 30%, white)`;
      }
      const e2 = document.createElement("span");
      if (e2.className = "header", this.#Fr?.str) {
        const t3 = document.createElement("span");
        t3.className = "title", e2.append(t3), { dir: t3.dir, str: t3.textContent } = this.#Fr;
      }
      if (t2.append(e2), this.#Cr) {
        const t3 = document.createElement("time");
        t3.className = "popupDate", t3.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), t3.setAttribute("data-l10n-args", JSON.stringify({ dateObj: this.#Cr.valueOf() })), t3.dateTime = this.#Cr.toISOString(), e2.append(t3);
      }
      Ct({ html: this.#Vr || this.#Er.str, dir: this.#Er?.dir, className: "popupContent" }, t2), this.#xt.append(t2);
    }
    get #Vr() {
      const t2 = this.#he, e2 = this.#Er;
      return !t2?.str || e2?.str && e2.str !== t2.str ? null : this.#he.html || null;
    }
    get #Gr() {
      return this.#Vr?.attributes?.style?.fontSize || 0;
    }
    get #Wr() {
      return this.#Vr?.attributes?.style?.color || null;
    }
    #qr(t2) {
      const e2 = [], i2 = { str: t2, html: { name: "div", attributes: { dir: "auto" }, children: [{ name: "p", children: e2 }] } }, s2 = { style: { color: this.#Wr, fontSize: this.#Gr ? `calc(${this.#Gr}px * var(--total-scale-factor))` : "" } };
      for (const i3 of t2.split("\n")) e2.push({ name: "span", value: i3, attributes: s2 });
      return i2;
    }
    #nr(t2) {
      t2.altKey || t2.shiftKey || t2.ctrlKey || t2.metaKey || ("Enter" === t2.key || "Escape" === t2.key && this.#Dr) && this.#_r();
    }
    updateEdited({ rect: t2, popup: e2, deleted: i2 }) {
      if (this.#U) return i2 ? (this.remove(), this.#Ur = null) : e2 && (e2.deleted ? this.remove() : (this.#jr(), this.#Ur = e2.text)), void (t2 && (this.#Lr = null, this.#Hr(), this.#$r()));
      i2 || e2?.deleted ? this.remove() : (this.#zr(), this.#hr ||= { contentsObj: this.#Er, richText: this.#he }, t2 && (this.#M = null), e2 && e2.text && (this.#he = this.#qr(e2.text), this.#Cr = ht.toDateObject(e2.date), this.#Er = null), this.#Pr?.remove(), this.#Pr = null);
    }
    resetEdited() {
      this.#hr && ({ contentsObj: this.#Er, richText: this.#he } = this.#hr, this.#hr = null, this.#Pr?.remove(), this.#Pr = null, this.#M = null);
    }
    remove() {
      if (this.#Ir?.abort(), this.#Ir = null, this.#Pr?.remove(), this.#Pr = null, this.#Or = false, this.#Dr = false, this.#Rr?.remove(), this.#Rr = null, this.trigger) for (const t2 of this.trigger) t2.classList.remove("popupTriggerArea");
    }
    #Xr() {
      if (null !== this.#M) return;
      const { page: { view: t2 }, viewport: { rawDims: { pageWidth: e2, pageHeight: i2, pageX: s2, pageY: n2 } } } = this.#Mr;
      let r2 = !!this.#kr, a2 = r2 ? this.#kr : this.#Br;
      for (const t3 of this.#Tr) if (!a2 || null !== z.intersect(t3.data.rect, a2)) {
        a2 = t3.data.rect, r2 = true;
        break;
      }
      const o2 = z.normalizeRect([a2[0], t2[3] - a2[1] + t2[1], a2[2], t2[3] - a2[3] + t2[1]]), l2 = r2 ? a2[2] - a2[0] + 5 : 0, h2 = o2[0] + l2, c2 = o2[1];
      this.#M = [100 * (h2 - s2) / e2, 100 * (c2 - n2) / i2];
      const { style: d2 } = this.#xt;
      d2.left = `${this.#M[0]}%`, d2.top = `${this.#M[1]}%`;
    }
    #_r() {
      this.#U ? this.#U.toggleCommentPopup(this, false) : (this.#Dr = !this.#Dr, this.#Dr ? (this.#xr(), this.#xt.addEventListener("click", this.#Ar), this.#xt.addEventListener("keydown", this.#br)) : (this.#yr(), this.#xt.removeEventListener("click", this.#Ar), this.#xt.removeEventListener("keydown", this.#br)));
    }
    #xr() {
      this.#Pr || this.render(), this.isVisible ? this.#Dr && this.#xt.classList.add("focused") : (this.#Xr(), this.#xt.hidden = false, this.#xt.style.zIndex = parseInt(this.#xt.style.zIndex) + 1e3);
    }
    #yr() {
      this.#xt.classList.remove("focused"), !this.#Dr && this.isVisible && (this.#xt.hidden = true, this.#xt.style.zIndex = parseInt(this.#xt.style.zIndex) - 1e3);
    }
    forceHide() {
      this.#Or = this.isVisible, this.#Or && (this.#xt.hidden = true);
    }
    maybeShow() {
      this.#U || (this.#zr(), this.#Or && (this.#Pr || this.#xr(), this.#Or = false, this.#xt.hidden = false));
    }
    get isVisible() {
      return !this.#U && false === this.#xt.hidden;
    }
  }
  class _s extends cs {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true }), this.textContent = t2.data.textContent, this.textPosition = t2.data.textPosition, this.annotationEditorType = d.FREETEXT;
    }
    render() {
      if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
        const t2 = document.createElement("div");
        t2.classList.add("annotationTextContent"), t2.setAttribute("role", "comment");
        for (const e2 of this.textContent) {
          const i2 = document.createElement("span");
          i2.textContent = e2, t2.append(i2);
        }
        this.container.append(t2);
      }
      return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
    }
  }
  class Ss extends cs {
    #Yr = null;
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
    }
    render() {
      this.container.classList.add("lineAnnotation");
      const { data: t2, width: e2, height: i2 } = this, s2 = this.svgFactory.create(e2, i2, true), n2 = this.#Yr = this.svgFactory.createElement("svg:line");
      return n2.setAttribute("x1", t2.rect[2] - t2.lineCoordinates[0]), n2.setAttribute("y1", t2.rect[3] - t2.lineCoordinates[1]), n2.setAttribute("x2", t2.rect[2] - t2.lineCoordinates[2]), n2.setAttribute("y2", t2.rect[3] - t2.lineCoordinates[3]), n2.setAttribute("stroke-width", t2.borderStyle.width || 1), n2.setAttribute("stroke", "transparent"), n2.setAttribute("fill", "transparent"), s2.append(n2), this.container.append(s2), !t2.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
      return this.#Yr;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  class Es extends cs {
    #Kr = null;
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
    }
    render() {
      this.container.classList.add("squareAnnotation");
      const { data: t2, width: e2, height: i2 } = this, s2 = this.svgFactory.create(e2, i2, true), n2 = t2.borderStyle.width, r2 = this.#Kr = this.svgFactory.createElement("svg:rect");
      return r2.setAttribute("x", n2 / 2), r2.setAttribute("y", n2 / 2), r2.setAttribute("width", e2 - n2), r2.setAttribute("height", i2 - n2), r2.setAttribute("stroke-width", n2 || 1), r2.setAttribute("stroke", "transparent"), r2.setAttribute("fill", "transparent"), s2.append(r2), this.container.append(s2), !t2.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
      return this.#Kr;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  class Cs extends cs {
    #Qr = null;
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
    }
    render() {
      this.container.classList.add("circleAnnotation");
      const { data: t2, width: e2, height: i2 } = this, s2 = this.svgFactory.create(e2, i2, true), n2 = t2.borderStyle.width, r2 = this.#Qr = this.svgFactory.createElement("svg:ellipse");
      return r2.setAttribute("cx", e2 / 2), r2.setAttribute("cy", i2 / 2), r2.setAttribute("rx", e2 / 2 - n2 / 2), r2.setAttribute("ry", i2 / 2 - n2 / 2), r2.setAttribute("stroke-width", n2 || 1), r2.setAttribute("stroke", "transparent"), r2.setAttribute("fill", "transparent"), s2.append(r2), this.container.append(s2), !t2.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
      return this.#Qr;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  class Ts extends cs {
    #Jr = null;
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true }), this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
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
      return l2.setAttribute("points", o2), l2.setAttribute("stroke-width", i2.width || 1), l2.setAttribute("stroke", "transparent"), l2.setAttribute("fill", "transparent"), a2.append(l2), this.container.append(a2), !s2 && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
      return this.#Jr;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  class Ms extends Ts {
    constructor(t2) {
      super(t2), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
    }
  }
  class ks extends cs {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true });
    }
    render() {
      return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
  }
  class Ds extends cs {
    #Zr = null;
    #ta = [];
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true }), this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = "InkHighlight" === this.data.it ? d.HIGHLIGHT : d.INK;
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
      l2.append(h2), h2.setAttribute("stroke-width", s2.width || 1), h2.setAttribute("stroke-linecap", "round"), h2.setAttribute("stroke-linejoin", "round"), h2.setAttribute("stroke-miterlimit", 10), h2.setAttribute("stroke", "transparent"), h2.setAttribute("fill", "transparent"), h2.setAttribute("transform", r2);
      for (let t3 = 0, e3 = i2.length; t3 < e3; t3++) {
        const e4 = this.svgFactory.createElement(this.svgElementName);
        this.#ta.push(e4), e4.setAttribute("points", i2[t3].join(",")), h2.append(e4);
      }
      return !n2 && this.hasPopupData && this._createPopup(), this.container.append(l2), this._editOnDoubleClick(), this.container;
    }
    updateEdited(t2) {
      super.updateEdited(t2);
      const { thickness: e2, points: i2, rect: s2 } = t2, n2 = this.#Zr;
      if (e2 >= 0 && n2.setAttribute("stroke-width", e2 || 1), i2) for (let t3 = 0, e3 = this.#ta.length; t3 < e3; t3++) this.#ta[t3].setAttribute("points", i2[t3].join(","));
      if (s2) {
        const { transform: t3, width: e3, height: i3 } = this.#ea(this.data.rotation, s2);
        n2.parentElement.setAttribute("viewBox", `0 0 ${e3} ${i3}`), n2.setAttribute("transform", t3);
      }
    }
    getElementsToTriggerPopup() {
      return this.#ta;
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  class Ps extends cs {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true }), this.annotationEditorType = d.HIGHLIGHT;
    }
    render() {
      const { data: { overlaidText: t2, popupRef: e2 } } = this;
      if (!e2 && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), t2) {
        const e3 = document.createElement("mark");
        e3.classList.add("overlaidText"), e3.textContent = t2, this.container.append(e3);
      }
      return this.container;
    }
  }
  class Is extends cs {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
    }
    render() {
      const { data: { overlaidText: t2, popupRef: e2 } } = this;
      if (!e2 && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), t2) {
        const e3 = document.createElement("u");
        e3.classList.add("overlaidText"), e3.textContent = t2, this.container.append(e3);
      }
      return this.container;
    }
  }
  class Rs extends cs {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
    }
    render() {
      const { data: { overlaidText: t2, popupRef: e2 } } = this;
      if (!e2 && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), t2) {
        const e3 = document.createElement("u");
        e3.classList.add("overlaidText"), e3.textContent = t2, this.container.append(e3);
      }
      return this.container;
    }
  }
  class Ls extends cs {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true, createQuadrilaterals: true });
    }
    render() {
      const { data: { overlaidText: t2, popupRef: e2 } } = this;
      if (!e2 && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), t2) {
        const e3 = document.createElement("s");
        e3.classList.add("overlaidText"), e3.textContent = t2, this.container.append(e3);
      }
      return this.container;
    }
  }
  class Bs extends cs {
    constructor(t2) {
      super(t2, { isRenderable: true, ignoreBorder: true }), this.annotationEditorType = d.STAMP;
    }
    render() {
      return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
    }
  }
  class Fs extends cs {
    #ia = null;
    constructor(t2) {
      super(t2, { isRenderable: true });
      const { file: e2 } = this.data;
      this.filename = e2.filename, this.content = e2.content, this.linkService.eventBus?.dispatch("fileattachmentannotation", { source: this, ...e2 });
    }
    render() {
      this.container.classList.add("fileAttachmentAnnotation");
      const { container: t2, data: e2 } = this;
      let i2;
      e2.hasAppearance || 0 === e2.fillAlpha ? i2 = document.createElement("div") : (i2 = document.createElement("img"), i2.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(e2.name) ? "paperclip" : "pushpin"}.svg`, e2.fillAlpha && e2.fillAlpha < 1 && (i2.style = `filter: opacity(${Math.round(100 * e2.fillAlpha)}%);`)), i2.addEventListener("dblclick", this.#sa.bind(this)), this.#ia = i2;
      const { isMac: s2 } = N.platform;
      return t2.addEventListener("keydown", (t3) => {
        "Enter" === t3.key && (s2 ? t3.metaKey : t3.ctrlKey) && this.#sa();
      }), !e2.popupRef && this.hasPopupData ? this._createPopup() : i2.classList.add("popupTriggerArea"), t2.append(i2), t2;
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
  class Os {
    #na = null;
    #ra = null;
    #F = null;
    #aa = /* @__PURE__ */ new Map();
    #oa = null;
    #la = null;
    constructor({ div: t2, accessibilityManager: e2, annotationCanvasMap: i2, annotationEditorUIManager: s2, page: n2, viewport: r2, structTreeLayer: a2, commentManager: o2, linkService: l2, annotationStorage: h2 }) {
      this.div = t2, this.#na = e2, this.#ra = i2, this.#oa = a2 || null, this.#la = l2 || null, this.#F = h2 || new Wt(), this.page = n2, this.viewport = r2, this.zIndex = 0, this._annotationEditorUIManager = s2, this._commentManager = o2 || null;
    }
    hasEditableAnnotations() {
      return this.#aa.size > 0;
    }
    async #ha(t2, e2, i2) {
      const s2 = t2.firstChild || t2, n2 = s2.id = `${G}${e2}`, r2 = await this.#oa?.getAriaAttributes(n2);
      if (r2) for (const [t3, e3] of r2) s2.setAttribute(t3, e3);
      i2 ? i2.at(-1).container.after(t2) : (this.div.append(t2), this.#na?.moveElementInDOM(this.div, t2, s2, false));
    }
    async render(t2) {
      const { annotations: e2 } = t2, i2 = this.div;
      gt(i2, this.viewport);
      const s2 = /* @__PURE__ */ new Map(), n2 = { data: null, layer: i2, linkService: this.#la, downloadManager: t2.downloadManager, imageResourcesPath: t2.imageResourcesPath || "", renderForms: false !== t2.renderForms, svgFactory: new as(), annotationStorage: this.#F, enableComment: true === t2.enableComment, enableScripting: true === t2.enableScripting, hasJSActions: t2.hasJSActions, fieldObjects: t2.fieldObjects, parent: this, elements: null };
      for (const t3 of e2) {
        if (t3.noHTML) continue;
        const e3 = t3.annotationType === m.POPUP;
        if (e3) {
          const e4 = s2.get(t3.id);
          if (!e4) continue;
          n2.elements = e4;
        } else if (t3.rect[2] === t3.rect[0] || t3.rect[3] === t3.rect[1]) continue;
        n2.data = t3;
        const i3 = hs.create(n2);
        if (!i3.isRenderable) continue;
        if (!e3 && t3.popupRef) {
          const e4 = s2.get(t3.popupRef);
          e4 ? e4.push(i3) : s2.set(t3.popupRef, [i3]);
        }
        const r2 = i3.render();
        t3.hidden && (r2.style.visibility = "hidden"), await this.#ha(r2, t3.id, n2.elements), i3.extraPopupElement?.popup?.renderCommentButton(), i3._isEditable && (this.#aa.set(i3.data.id, i3), this._annotationEditorUIManager?.renderAnnotationElement(i3));
      }
      this.#ca();
    }
    async addLinkAnnotations(t2) {
      const e2 = { data: null, layer: this.div, linkService: this.#la, svgFactory: new as(), parent: this };
      for (const i2 of t2) {
        i2.borderStyle ||= Os._defaultBorderStyle, e2.data = i2;
        const t3 = hs.create(e2);
        if (!t3.isRenderable) continue;
        const s2 = t3.render();
        await this.#ha(s2, i2.id, null);
      }
    }
    update({ viewport: t2 }) {
      const e2 = this.div;
      this.viewport = t2, gt(e2, { rotation: t2.rotation }), this.#ca(), e2.hidden = false;
    }
    #ca() {
      if (!this.#ra) return;
      const t2 = this.div;
      for (const [e2, i2] of this.#ra) {
        const s2 = t2.querySelector(`[data-annotation-id="${e2}"]`);
        if (!s2) continue;
        i2.className = "annotationContent";
        const { firstChild: n2 } = s2;
        n2 ? "CANVAS" === n2.nodeName ? n2.replaceWith(i2) : n2.classList.contains("annotationContent") ? n2.after(i2) : n2.before(i2) : s2.append(i2);
        const r2 = this.#aa.get(e2);
        r2 && (r2._hasNoCanvas ? (this._annotationEditorUIManager?.setMissingCanvas(e2, s2.id, i2), r2._hasNoCanvas = false) : r2.canvas = i2);
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
      const { div: e2 } = this, { id: i2, rotation: s2 } = t2, n2 = new ds({ data: { id: i2, rect: t2.getPDFRect(), rotation: s2 }, editor: t2, layer: e2, parent: this, enableComment: !!this._commentManager, linkService: this.#la, annotationStorage: this.#F }), r2 = n2.render();
      return e2.append(r2), this.#na?.moveElementInDOM(e2, r2, r2, false), n2.createOrUpdatePopup(), n2;
    }
    static get _defaultBorderStyle() {
      return M(this, "_defaultBorderStyle", Object.freeze({ width: 1, rawWidth: 1, style: 1, dashArray: [3], horizontalCornerRadius: 0, verticalCornerRadius: 0 }));
    }
  }
  const Ns = /\r\n?|\n/g;
  class Us extends Ut {
    #da = "";
    #ua = `${this.id}-editor`;
    #pa = null;
    #Gr;
    _colorPicker = null;
    static _freeTextDefaultContent = "";
    static _internalPadding = 0;
    static _defaultColor = null;
    static _defaultFontSize = 10;
    static get _keyboardManager() {
      const t2 = Us.prototype, e2 = (t3) => t3.isEmpty(), i2 = Bt.TRANSLATE_SMALL, s2 = Bt.TRANSLATE_BIG;
      return M(this, "_keyboardManager", new Rt([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], t2.commitOrRemove, { bubbles: true }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], t2.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], t2._translateEmpty, { args: [-i2, 0], checker: e2 }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t2._translateEmpty, { args: [-s2, 0], checker: e2 }], [["ArrowRight", "mac+ArrowRight"], t2._translateEmpty, { args: [i2, 0], checker: e2 }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t2._translateEmpty, { args: [s2, 0], checker: e2 }], [["ArrowUp", "mac+ArrowUp"], t2._translateEmpty, { args: [0, -i2], checker: e2 }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t2._translateEmpty, { args: [0, -s2], checker: e2 }], [["ArrowDown", "mac+ArrowDown"], t2._translateEmpty, { args: [0, i2], checker: e2 }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t2._translateEmpty, { args: [0, s2], checker: e2 }]]));
    }
    static _type = "freetext";
    static _editorType = d.FREETEXT;
    constructor(t2) {
      super({ ...t2, name: "freeTextEditor" }), this.color = t2.color || Us._defaultColor || Ut._defaultLineColor, this.#Gr = t2.fontSize || Us._defaultFontSize, this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert");
    }
    static initialize(t2, e2) {
      Ut.initialize(t2, e2);
      const i2 = getComputedStyle(document.documentElement);
      this._internalPadding = parseFloat(i2.getPropertyValue("--freetext-padding"));
    }
    static updateDefaultParams(t2, e2) {
      switch (t2) {
        case u.FREETEXT_SIZE:
          Us._defaultFontSize = e2;
          break;
        case u.FREETEXT_COLOR:
          Us._defaultColor = e2;
      }
    }
    updateParams(t2, e2) {
      switch (t2) {
        case u.FREETEXT_SIZE:
          this.#ga(e2);
          break;
        case u.FREETEXT_COLOR:
          this.#jr(e2);
      }
    }
    static get defaultPropertiesToUpdate() {
      return [[u.FREETEXT_SIZE, Us._defaultFontSize], [u.FREETEXT_COLOR, Us._defaultColor || Ut._defaultLineColor]];
    }
    get propertiesToUpdate() {
      return [[u.FREETEXT_SIZE, this.#Gr], [u.FREETEXT_COLOR, this.color]];
    }
    get toolbarButtons() {
      return this._colorPicker ||= new es(this), [["colorPicker", this._colorPicker]];
    }
    get colorType() {
      return u.FREETEXT_COLOR;
    }
    #ga(t2) {
      const e2 = (t3) => {
        this.editorDiv.style.fontSize = `calc(${t3}px * var(--total-scale-factor))`, this.translate(0, -(t3 - this.#Gr) * this.parentScale), this.#Gr = t3, this.#ma();
      }, i2 = this.#Gr;
      this.addCommands({ cmd: e2.bind(this, t2), undo: e2.bind(this, i2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: u.FREETEXT_SIZE, overwriteIfSameType: true, keepUndo: true });
    }
    onUpdatedColor() {
      this.editorDiv.style.color = this.color, this._colorPicker?.update(this.color), super.onUpdatedColor();
    }
    #jr(t2) {
      const e2 = (t3) => {
        this.color = t3, this.onUpdatedColor();
      }, i2 = this.color;
      this.addCommands({ cmd: e2.bind(this, t2), undo: e2.bind(this, i2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: u.FREETEXT_COLOR, overwriteIfSameType: true, keepUndo: true });
    }
    _translateEmpty(t2, e2) {
      this._uiManager.translateSelectedEditors(t2, e2, true);
    }
    getInitialTranslation() {
      const t2 = this.parentScale;
      return [-Us._internalPadding * t2, -(Us._internalPadding + this.#Gr) * t2];
    }
    rebuild() {
      this.parent && (super.rebuild(), null !== this.div && (this.isAttachedToDOM || this.parent.add(this)));
    }
    enableEditMode() {
      if (!super.enableEditMode()) return false;
      this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = true, this._isDraggable = false, this.div.removeAttribute("aria-activedescendant"), this.#pa = new AbortController();
      const t2 = this._uiManager.combinedSignal(this.#pa);
      return this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), { signal: t2 }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), { signal: t2 }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), { signal: t2 }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), { signal: t2 }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), { signal: t2 }), true;
    }
    disableEditMode() {
      return !!super.disableEditMode() && (this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = false, this.div.setAttribute("aria-activedescendant", this.#ua), this._isDraggable = true, this.#pa?.abort(), this.#pa = null, this.div.focus({ preventScroll: true }), this.isEditing = false, this.parent.div.classList.add("freetextEditing"), true);
    }
    focusin(t2) {
      this._focusEventsAllowed && (super.focusin(t2), t2.target !== this.editorDiv && this.editorDiv.focus());
    }
    onceAdded(t2) {
      this.width || (this.enableEditMode(), t2 && this.editorDiv.focus(), this._initialOptions?.isCentered && this.center(), this._initialOptions = null);
    }
    isEmpty() {
      return !this.editorDiv || "" === this.editorDiv.innerText.trim();
    }
    remove() {
      this.isEditing = false, this.parent && (this.parent.setEditingState(true), this.parent.div.classList.add("freetextEditing")), super.remove();
    }
    #fa() {
      const t2 = [];
      this.editorDiv.normalize();
      let e2 = null;
      for (const i2 of this.editorDiv.childNodes) e2?.nodeType === Node.TEXT_NODE && "BR" === i2.nodeName || (t2.push(Us.#ba(i2)), e2 = i2);
      return t2.join("\n");
    }
    #ma() {
      const [t2, e2] = this.parentDimensions;
      let i2;
      if (this.isAttachedToDOM) i2 = this.div.getBoundingClientRect();
      else {
        const { currentLayer: t3, div: e3 } = this, s2 = e3.style.display, n2 = e3.classList.contains("hidden");
        e3.classList.remove("hidden"), e3.style.display = "hidden", t3.div.append(this.div), i2 = e3.getBoundingClientRect(), e3.remove(), e3.style.display = s2, e3.classList.toggle("hidden", n2);
      }
      this.rotation % 180 == this.parentRotation % 180 ? (this.width = i2.width / t2, this.height = i2.height / e2) : (this.width = i2.height / t2, this.height = i2.width / e2), this.fixAndSetPosition();
    }
    commit() {
      if (!this.isInEditMode()) return;
      super.commit(), this.disableEditMode();
      const t2 = this.#da, e2 = this.#da = this.#fa().trimEnd();
      if (t2 === e2) return;
      const i2 = (t3) => {
        this.#da = t3, t3 ? (this.#va(), this._uiManager.rebuild(this), this.#ma()) : this.remove();
      };
      this.addCommands({ cmd: () => {
        i2(e2);
      }, undo: () => {
        i2(t2);
      }, mustExec: false }), this.#ma();
    }
    shouldGetKeyboardEvents() {
      return this.isInEditMode();
    }
    enterInEditMode() {
      this.enableEditMode(), this.editorDiv.focus();
    }
    keydown(t2) {
      t2.target === this.div && "Enter" === t2.key && (this.enterInEditMode(), t2.preventDefault());
    }
    editorDivKeydown(t2) {
      Us._keyboardManager.exec(this, t2);
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
      this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
    }
    enableEditing() {
      this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", true);
    }
    get canChangeContent() {
      return true;
    }
    render() {
      if (this.div) return this.div;
      let t2, e2;
      (this._isCopy || this.annotationElementId) && (t2 = this.x, e2 = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", this.#ua), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = true;
      const { style: i2 } = this.editorDiv;
      if (i2.fontSize = `calc(${this.#Gr}px * var(--total-scale-factor))`, i2.color = this.color, this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
        const [i3, s2] = this.parentDimensions;
        if (this.annotationElementId) {
          const { position: n2 } = this._initialData;
          let [r2, a2] = this.getInitialTranslation();
          [r2, a2] = this.pageTranslationToScreen(r2, a2);
          const [o2, l2] = this.pageDimensions, [h2, c2] = this.pageTranslation;
          let d2, u2;
          switch (this.rotation) {
            case 0:
              d2 = t2 + (n2[0] - h2) / o2, u2 = e2 + this.height - (n2[1] - c2) / l2;
              break;
            case 90:
              d2 = t2 + (n2[0] - h2) / o2, u2 = e2 - (n2[1] - c2) / l2, [r2, a2] = [a2, -r2];
              break;
            case 180:
              d2 = t2 - this.width + (n2[0] - h2) / o2, u2 = e2 - (n2[1] - c2) / l2, [r2, a2] = [-r2, -a2];
              break;
            case 270:
              d2 = t2 + (n2[0] - h2 - this.height * l2) / o2, u2 = e2 + (n2[1] - c2 - this.width * o2) / l2, [r2, a2] = [-a2, r2];
          }
          this.setAt(d2 * i3, u2 * s2, r2, a2);
        } else this._moveAfterPaste(t2, e2);
        this.#va(), this._isDraggable = true, this.editorDiv.contentEditable = false;
      } else this._isDraggable = false, this.editorDiv.contentEditable = true;
      return this.div;
    }
    static #ba(t2) {
      return (t2.nodeType === Node.TEXT_NODE ? t2.nodeValue : t2.innerText).replaceAll(Ns, "");
    }
    editorDivPaste(t2) {
      const e2 = t2.clipboardData || window.clipboardData, { types: i2 } = e2;
      if (1 === i2.length && "text/plain" === i2[0]) return;
      t2.preventDefault();
      const s2 = Us.#ya(e2.getData("text") || "").replaceAll(Ns, "\n");
      if (!s2) return;
      const n2 = window.getSelection();
      if (!n2.rangeCount) return;
      this.editorDiv.normalize(), n2.deleteFromDocument();
      const r2 = n2.getRangeAt(0);
      if (!s2.includes("\n")) return r2.insertNode(document.createTextNode(s2)), this.editorDiv.normalize(), void n2.collapseToStart();
      const { startContainer: a2, startOffset: o2 } = r2, l2 = [], h2 = [];
      if (a2.nodeType === Node.TEXT_NODE) {
        const t3 = a2.parentElement;
        if (h2.push(a2.nodeValue.slice(o2).replaceAll(Ns, "")), t3 !== this.editorDiv) {
          let e3 = l2;
          for (const i3 of this.editorDiv.childNodes) i3 !== t3 ? e3.push(Us.#ba(i3)) : e3 = h2;
        }
        l2.push(a2.nodeValue.slice(0, o2).replaceAll(Ns, ""));
      } else if (a2 === this.editorDiv) {
        let t3 = l2, e3 = 0;
        for (const i3 of this.editorDiv.childNodes) e3++ === o2 && (t3 = h2), t3.push(Us.#ba(i3));
      }
      this.#da = `${l2.join("\n")}${s2}${h2.join("\n")}`, this.#va();
      const c2 = new Range();
      let d2 = Math.sumPrecise(l2.map((t3) => t3.length));
      for (const { firstChild: t3 } of this.editorDiv.childNodes) if (t3.nodeType === Node.TEXT_NODE) {
        const e3 = t3.nodeValue.length;
        if (d2 <= e3) {
          c2.setStart(t3, d2), c2.setEnd(t3, d2);
          break;
        }
        d2 -= e3;
      }
      n2.removeAllRanges(), n2.addRange(c2);
    }
    #va() {
      if (this.editorDiv.replaceChildren(), this.#da) for (const t2 of this.#da.split("\n")) {
        const e2 = document.createElement("div");
        e2.append(t2 ? document.createTextNode(t2) : document.createElement("br")), this.editorDiv.append(e2);
      }
    }
    #wa() {
      return this.#da.replaceAll(" ", " ");
    }
    static #ya(t2) {
      return t2.replaceAll(" ", " ");
    }
    get contentDiv() {
      return this.editorDiv;
    }
    getPDFRect() {
      const t2 = Us._internalPadding * this.parentScale;
      return this.getRect(t2, t2);
    }
    static async deserialize(t2, e2, i2) {
      let s2 = null;
      if (t2 instanceof _s) {
        const { data: { defaultAppearanceData: { fontSize: e3, fontColor: i3 }, rect: n3, rotation: r2, id: a2, popupRef: o2, richText: l2, contentsObj: h2, creationDate: c2, modificationDate: u2 }, textContent: p2, textPosition: g2, parent: { page: { pageNumber: m2 } } } = t2;
        if (!p2 || 0 === p2.length) return null;
        s2 = t2 = { annotationType: d.FREETEXT, color: Array.from(i3), fontSize: e3, value: p2.join("\n"), position: g2, pageIndex: m2 - 1, rect: n3.slice(0), rotation: r2, annotationElementId: a2, id: a2, deleted: false, popupRef: o2, comment: h2?.str || null, richText: l2, creationDate: c2, modificationDate: u2 };
      }
      const n2 = await super.deserialize(t2, e2, i2);
      return n2.#Gr = t2.fontSize, n2.color = z.makeHexColor(...t2.color), n2.#da = Us.#ya(t2.value), n2._initialData = s2, t2.comment && n2.setCommentData(t2), n2;
    }
    serialize(t2 = false) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const e2 = Ut._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), i2 = Object.assign(super.serialize(t2), { color: e2, fontSize: this.#Gr, value: this.#wa() });
      return this.addComment(i2), t2 ? (i2.isCopy = true, i2) : this.annotationElementId && !this.#xa(i2) ? null : (i2.id = this.annotationElementId, i2);
    }
    #xa(t2) {
      const { value: e2, fontSize: i2, color: s2, pageIndex: n2 } = this._initialData;
      return this.hasEditedComment || this._hasBeenMoved || t2.value !== e2 || t2.fontSize !== i2 || t2.color.some((t3, e3) => t3 !== s2[e3]) || t2.pageIndex !== n2;
    }
    renderAnnotationElement(t2) {
      const e2 = super.renderAnnotationElement(t2);
      if (!e2) return null;
      const { style: i2 } = e2;
      i2.fontSize = `calc(${this.#Gr}px * var(--total-scale-factor))`, i2.color = this.color, e2.replaceChildren();
      for (const t3 of this.#da.split("\n")) {
        const i3 = document.createElement("div");
        i3.append(t3 ? document.createTextNode(t3) : document.createElement("br")), e2.append(i3);
      }
      return t2.updateEdited({ rect: this.getPDFRect(), popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : { text: this.#da } }), e2;
    }
    resetAnnotationElement(t2) {
      super.resetAnnotationElement(t2), t2.resetEdited();
    }
  }
  class zs {
    static PRECISION = 1e-4;
    toSVGPath() {
      S("Abstract method `toSVGPath` must be implemented.");
    }
    get box() {
      S("Abstract getter `box` must be implemented.");
    }
    serialize(t2, e2) {
      S("Abstract method `serialize` must be implemented.");
    }
    static _rescale(t2, e2, i2, s2, n2, r2) {
      r2 ||= new Float32Array(t2.length);
      for (let a2 = 0, o2 = t2.length; a2 < o2; a2 += 2) r2[a2] = e2 + t2[a2] * s2, r2[a2 + 1] = i2 + t2[a2 + 1] * n2;
      return r2;
    }
    static _rescaleAndSwap(t2, e2, i2, s2, n2, r2) {
      r2 ||= new Float32Array(t2.length);
      for (let a2 = 0, o2 = t2.length; a2 < o2; a2 += 2) r2[a2] = e2 + t2[a2 + 1] * s2, r2[a2 + 1] = i2 + t2[a2] * n2;
      return r2;
    }
    static _translate(t2, e2, i2, s2) {
      s2 ||= new Float32Array(t2.length);
      for (let n2 = 0, r2 = t2.length; n2 < r2; n2 += 2) s2[n2] = e2 + t2[n2], s2[n2 + 1] = i2 + t2[n2 + 1];
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
  class Hs {
    #Aa;
    #_a = [];
    #Sa;
    #Ea;
    #Ca = [];
    #Ta = new Float32Array(18);
    #Ma;
    #ka;
    #Da;
    #Pa;
    #Ia;
    #Ra;
    #La = [];
    static #Ba = 8;
    static #Fa = 2;
    static #Oa = Hs.#Ba + Hs.#Fa;
    constructor({ x: t2, y: e2 }, i2, s2, n2, r2, a2 = 0) {
      this.#Aa = i2, this.#Ra = n2 * s2, this.#Ea = r2, this.#Ta.set([NaN, NaN, NaN, NaN, t2, e2], 6), this.#Sa = a2, this.#Pa = Hs.#Ba * s2, this.#Da = Hs.#Oa * s2, this.#Ia = s2, this.#La.push(t2, e2);
    }
    isEmpty() {
      return isNaN(this.#Ta[8]);
    }
    #Na() {
      const t2 = this.#Ta.subarray(4, 6), e2 = this.#Ta.subarray(16, 18), [i2, s2, n2, r2] = this.#Aa;
      return [(this.#Ma + (t2[0] - e2[0]) / 2 - i2) / n2, (this.#ka + (t2[1] - e2[1]) / 2 - s2) / r2, (this.#Ma + (e2[0] - t2[0]) / 2 - i2) / n2, (this.#ka + (e2[1] - t2[1]) / 2 - s2) / r2];
    }
    add({ x: t2, y: e2 }) {
      this.#Ma = t2, this.#ka = e2;
      const [i2, s2, n2, r2] = this.#Aa;
      let [a2, o2, l2, h2] = this.#Ta.subarray(8, 12);
      const c2 = t2 - l2, d2 = e2 - h2, u2 = Math.hypot(c2, d2);
      if (u2 < this.#Da) return false;
      const p2 = u2 - this.#Pa, g2 = p2 / u2, m2 = g2 * c2, f2 = g2 * d2;
      let b2 = a2, v2 = o2;
      a2 = l2, o2 = h2, l2 += m2, h2 += f2, this.#La?.push(t2, e2);
      const y2 = m2 / p2, w2 = -f2 / p2 * this.#Ra, x2 = y2 * this.#Ra;
      return this.#Ta.set(this.#Ta.subarray(2, 8), 0), this.#Ta.set([l2 + w2, h2 + x2], 4), this.#Ta.set(this.#Ta.subarray(14, 18), 12), this.#Ta.set([l2 - w2, h2 - x2], 16), isNaN(this.#Ta[6]) ? (0 === this.#Ca.length && (this.#Ta.set([a2 + w2, o2 + x2], 2), this.#Ca.push(NaN, NaN, NaN, NaN, (a2 + w2 - i2) / n2, (o2 + x2 - s2) / r2), this.#Ta.set([a2 - w2, o2 - x2], 14), this.#_a.push(NaN, NaN, NaN, NaN, (a2 - w2 - i2) / n2, (o2 - x2 - s2) / r2)), this.#Ta.set([b2, v2, a2, o2, l2, h2], 6), !this.isEmpty()) : (this.#Ta.set([b2, v2, a2, o2, l2, h2], 6), Math.abs(Math.atan2(v2 - o2, b2 - a2) - Math.atan2(f2, m2)) < Math.PI / 2 ? ([a2, o2, l2, h2] = this.#Ta.subarray(2, 6), this.#Ca.push(NaN, NaN, NaN, NaN, ((a2 + l2) / 2 - i2) / n2, ((o2 + h2) / 2 - s2) / r2), [a2, o2, b2, v2] = this.#Ta.subarray(14, 18), this.#_a.push(NaN, NaN, NaN, NaN, ((b2 + a2) / 2 - i2) / n2, ((v2 + o2) / 2 - s2) / r2), true) : ([b2, v2, a2, o2, l2, h2] = this.#Ta.subarray(0, 6), this.#Ca.push(((b2 + 5 * a2) / 6 - i2) / n2, ((v2 + 5 * o2) / 6 - s2) / r2, ((5 * a2 + l2) / 6 - i2) / n2, ((5 * o2 + h2) / 6 - s2) / r2, ((a2 + l2) / 2 - i2) / n2, ((o2 + h2) / 2 - s2) / r2), [l2, h2, a2, o2, b2, v2] = this.#Ta.subarray(12, 18), this.#_a.push(((b2 + 5 * a2) / 6 - i2) / n2, ((v2 + 5 * o2) / 6 - s2) / r2, ((5 * a2 + l2) / 6 - i2) / n2, ((5 * o2 + h2) / 6 - s2) / r2, ((a2 + l2) / 2 - i2) / n2, ((o2 + h2) / 2 - s2) / r2), true));
    }
    toSVGPath() {
      if (this.isEmpty()) return "";
      const t2 = this.#Ca, e2 = this.#_a;
      if (isNaN(this.#Ta[6]) && !this.isEmpty()) return this.#Ua();
      const i2 = [];
      i2.push(`M${t2[4]} ${t2[5]}`);
      for (let e3 = 6; e3 < t2.length; e3 += 6) isNaN(t2[e3]) ? i2.push(`L${t2[e3 + 4]} ${t2[e3 + 5]}`) : i2.push(`C${t2[e3]} ${t2[e3 + 1]} ${t2[e3 + 2]} ${t2[e3 + 3]} ${t2[e3 + 4]} ${t2[e3 + 5]}`);
      this.#za(i2);
      for (let t3 = e2.length - 6; t3 >= 6; t3 -= 6) isNaN(e2[t3]) ? i2.push(`L${e2[t3 + 4]} ${e2[t3 + 5]}`) : i2.push(`C${e2[t3]} ${e2[t3 + 1]} ${e2[t3 + 2]} ${e2[t3 + 3]} ${e2[t3 + 4]} ${e2[t3 + 5]}`);
      return this.#Ha(i2), i2.join(" ");
    }
    #Ua() {
      const [t2, e2, i2, s2] = this.#Aa, [n2, r2, a2, o2] = this.#Na();
      return `M${(this.#Ta[2] - t2) / i2} ${(this.#Ta[3] - e2) / s2} L${(this.#Ta[4] - t2) / i2} ${(this.#Ta[5] - e2) / s2} L${n2} ${r2} L${a2} ${o2} L${(this.#Ta[16] - t2) / i2} ${(this.#Ta[17] - e2) / s2} L${(this.#Ta[14] - t2) / i2} ${(this.#Ta[15] - e2) / s2} Z`;
    }
    #Ha(t2) {
      const e2 = this.#_a;
      t2.push(`L${e2[4]} ${e2[5]} Z`);
    }
    #za(t2) {
      const [e2, i2, s2, n2] = this.#Aa, r2 = this.#Ta.subarray(4, 6), a2 = this.#Ta.subarray(16, 18), [o2, l2, h2, c2] = this.#Na();
      t2.push(`L${(r2[0] - e2) / s2} ${(r2[1] - i2) / n2} L${o2} ${l2} L${h2} ${c2} L${(a2[0] - e2) / s2} ${(a2[1] - i2) / n2}`);
    }
    newFreeDrawOutline(t2, e2, i2, s2, n2, r2) {
      return new js(t2, e2, i2, s2, n2, r2);
    }
    getOutlines() {
      const t2 = this.#Ca, e2 = this.#_a, i2 = this.#Ta, [s2, n2, r2, a2] = this.#Aa, o2 = new Float32Array((this.#La?.length ?? 0) + 2);
      for (let t3 = 0, e3 = o2.length - 2; t3 < e3; t3 += 2) o2[t3] = (this.#La[t3] - s2) / r2, o2[t3 + 1] = (this.#La[t3 + 1] - n2) / a2;
      if (o2[o2.length - 2] = (this.#Ma - s2) / r2, o2[o2.length - 1] = (this.#ka - n2) / a2, isNaN(i2[6]) && !this.isEmpty()) return this.#ja(o2);
      const l2 = new Float32Array(this.#Ca.length + 24 + this.#_a.length);
      let h2 = t2.length;
      for (let e3 = 0; e3 < h2; e3 += 2) isNaN(t2[e3]) ? l2[e3] = l2[e3 + 1] = NaN : (l2[e3] = t2[e3], l2[e3 + 1] = t2[e3 + 1]);
      h2 = this.#$a(l2, h2);
      for (let t3 = e2.length - 6; t3 >= 6; t3 -= 6) for (let i3 = 0; i3 < 6; i3 += 2) isNaN(e2[t3 + i3]) ? (l2[h2] = l2[h2 + 1] = NaN, h2 += 2) : (l2[h2] = e2[t3 + i3], l2[h2 + 1] = e2[t3 + i3 + 1], h2 += 2);
      return this.#Va(l2, h2), this.newFreeDrawOutline(l2, o2, this.#Aa, this.#Ia, this.#Sa, this.#Ea);
    }
    #ja(t2) {
      const e2 = this.#Ta, [i2, s2, n2, r2] = this.#Aa, [a2, o2, l2, h2] = this.#Na(), c2 = new Float32Array(36);
      return c2.set([NaN, NaN, NaN, NaN, (e2[2] - i2) / n2, (e2[3] - s2) / r2, NaN, NaN, NaN, NaN, (e2[4] - i2) / n2, (e2[5] - s2) / r2, NaN, NaN, NaN, NaN, a2, o2, NaN, NaN, NaN, NaN, l2, h2, NaN, NaN, NaN, NaN, (e2[16] - i2) / n2, (e2[17] - s2) / r2, NaN, NaN, NaN, NaN, (e2[14] - i2) / n2, (e2[15] - s2) / r2], 0), this.newFreeDrawOutline(c2, t2, this.#Aa, this.#Ia, this.#Sa, this.#Ea);
    }
    #Va(t2, e2) {
      const i2 = this.#_a;
      return t2.set([NaN, NaN, NaN, NaN, i2[4], i2[5]], e2), e2 + 6;
    }
    #$a(t2, e2) {
      const i2 = this.#Ta.subarray(4, 6), s2 = this.#Ta.subarray(16, 18), [n2, r2, a2, o2] = this.#Aa, [l2, h2, c2, d2] = this.#Na();
      return t2.set([NaN, NaN, NaN, NaN, (i2[0] - n2) / a2, (i2[1] - r2) / o2, NaN, NaN, NaN, NaN, l2, h2, NaN, NaN, NaN, NaN, c2, d2, NaN, NaN, NaN, NaN, (s2[0] - n2) / a2, (s2[1] - r2) / o2], e2), e2 + 24;
    }
  }
  class js extends zs {
    #Aa;
    #Ga = new Float32Array(4);
    #Sa;
    #Ea;
    #La;
    #Ia;
    #Wa;
    constructor(t2, e2, i2, s2, n2, r2) {
      super(), this.#Wa = t2, this.#La = e2, this.#Aa = i2, this.#Ia = s2, this.#Sa = n2, this.#Ea = r2, this.firstPoint = [NaN, NaN], this.lastPoint = [NaN, NaN], this.#qa(r2);
      const [a2, o2, l2, h2] = this.#Ga;
      for (let e3 = 0, i3 = t2.length; e3 < i3; e3 += 2) t2[e3] = (t2[e3] - a2) / l2, t2[e3 + 1] = (t2[e3 + 1] - o2) / h2;
      for (let t3 = 0, i3 = e2.length; t3 < i3; t3 += 2) e2[t3] = (e2[t3] - a2) / l2, e2[t3 + 1] = (e2[t3 + 1] - o2) / h2;
    }
    toSVGPath() {
      const t2 = [`M${this.#Wa[4]} ${this.#Wa[5]}`];
      for (let e2 = 6, i2 = this.#Wa.length; e2 < i2; e2 += 6) isNaN(this.#Wa[e2]) ? t2.push(`L${this.#Wa[e2 + 4]} ${this.#Wa[e2 + 5]}`) : t2.push(`C${this.#Wa[e2]} ${this.#Wa[e2 + 1]} ${this.#Wa[e2 + 2]} ${this.#Wa[e2 + 3]} ${this.#Wa[e2 + 4]} ${this.#Wa[e2 + 5]}`);
      return t2.push("Z"), t2.join(" ");
    }
    serialize([t2, e2, i2, s2], n2) {
      const r2 = i2 - t2, a2 = s2 - e2;
      let o2, l2;
      switch (n2) {
        case 0:
          o2 = zs._rescale(this.#Wa, t2, s2, r2, -a2), l2 = zs._rescale(this.#La, t2, s2, r2, -a2);
          break;
        case 90:
          o2 = zs._rescaleAndSwap(this.#Wa, t2, e2, r2, a2), l2 = zs._rescaleAndSwap(this.#La, t2, e2, r2, a2);
          break;
        case 180:
          o2 = zs._rescale(this.#Wa, i2, e2, -r2, a2), l2 = zs._rescale(this.#La, i2, e2, -r2, a2);
          break;
        case 270:
          o2 = zs._rescaleAndSwap(this.#Wa, i2, s2, -r2, -a2), l2 = zs._rescaleAndSwap(this.#La, i2, s2, -r2, -a2);
      }
      return { outline: Array.from(o2), points: [Array.from(l2)] };
    }
    #qa(t2) {
      const e2 = this.#Wa;
      let i2 = e2[4], s2 = e2[5];
      const n2 = [i2, s2, i2, s2];
      let r2 = i2, a2 = s2, o2 = i2, l2 = s2;
      const h2 = t2 ? Math.max : Math.min, c2 = new Float32Array(4);
      for (let t3 = 6, d3 = e2.length; t3 < d3; t3 += 6) {
        const d4 = e2[t3 + 4], u2 = e2[t3 + 5];
        isNaN(e2[t3]) ? (z.pointBoundingBox(d4, u2, n2), a2 > u2 ? (r2 = d4, a2 = u2) : a2 === u2 && (r2 = h2(r2, d4)), l2 < u2 ? (o2 = d4, l2 = u2) : l2 === u2 && (o2 = h2(o2, d4))) : (c2[0] = c2[1] = 1 / 0, c2[2] = c2[3] = -1 / 0, z.bezierBoundingBox(i2, s2, ...e2.slice(t3, t3 + 6), c2), z.rectBoundingBox(c2[0], c2[1], c2[2], c2[3], n2), a2 > c2[1] ? (r2 = c2[0], a2 = c2[1]) : a2 === c2[1] && (r2 = h2(r2, c2[0])), l2 < c2[3] ? (o2 = c2[2], l2 = c2[3]) : l2 === c2[3] && (o2 = h2(o2, c2[2]))), i2 = d4, s2 = u2;
      }
      const d2 = this.#Ga;
      d2[0] = n2[0] - this.#Sa, d2[1] = n2[1] - this.#Sa, d2[2] = n2[2] - n2[0] + 2 * this.#Sa, d2[3] = n2[3] - n2[1] + 2 * this.#Sa, this.firstPoint = [r2, a2], this.lastPoint = [o2, l2];
    }
    get box() {
      return this.#Ga;
    }
    newOutliner(t2, e2, i2, s2, n2, r2 = 0) {
      return new Hs(t2, e2, i2, s2, n2, r2);
    }
    getNewOutline(t2, e2) {
      const [i2, s2, n2, r2] = this.#Ga, [a2, o2, l2, h2] = this.#Aa, c2 = n2 * l2, d2 = r2 * h2, u2 = i2 * l2 + a2, p2 = s2 * h2 + o2, g2 = this.newOutliner({ x: this.#La[0] * c2 + u2, y: this.#La[1] * d2 + p2 }, this.#Aa, this.#Ia, t2, this.#Ea, e2 ?? this.#Sa);
      for (let t3 = 2; t3 < this.#La.length; t3 += 2) g2.add({ x: this.#La[t3] * c2 + u2, y: this.#La[t3 + 1] * d2 + p2 });
      return g2.getOutlines();
    }
  }
  class $s {
    #Aa;
    #Xa;
    #Ya;
    #Ka = [];
    #Qa = [];
    constructor(t2, e2 = 0, i2 = 0, s2 = true) {
      const n2 = [1 / 0, 1 / 0, -1 / 0, -1 / 0], r2 = 1e-4;
      for (const { x: i3, y: s3, width: a3, height: o3 } of t2) {
        const t3 = Math.floor((i3 - e2) / r2) * r2, l3 = Math.ceil((i3 + a3 + e2) / r2) * r2, h3 = Math.floor((s3 - e2) / r2) * r2, c3 = Math.ceil((s3 + o3 + e2) / r2) * r2, d3 = [t3, h3, c3, true], u3 = [l3, h3, c3, false];
        this.#Ka.push(d3, u3), z.rectBoundingBox(t3, h3, l3, c3, n2);
      }
      const a2 = n2[2] - n2[0] + 2 * i2, o2 = n2[3] - n2[1] + 2 * i2, l2 = n2[0] - i2, h2 = n2[1] - i2;
      let c2 = s2 ? -1 / 0 : 1 / 0, d2 = 1 / 0;
      const u2 = this.#Ka.at(s2 ? -1 : -2), p2 = [u2[0], u2[2]];
      for (const t3 of this.#Ka) {
        const [e3, i3, n3, r3] = t3;
        !r3 && s2 ? i3 < d2 ? (d2 = i3, c2 = e3) : i3 === d2 && (c2 = Math.max(c2, e3)) : r3 && !s2 && (i3 < d2 ? (d2 = i3, c2 = e3) : i3 === d2 && (c2 = Math.min(c2, e3))), t3[0] = (e3 - l2) / a2, t3[1] = (i3 - h2) / o2, t3[2] = (n3 - h2) / o2;
      }
      this.#Aa = new Float32Array([l2, h2, a2, o2]), this.#Xa = [c2, d2], this.#Ya = p2;
    }
    getOutlines() {
      this.#Ka.sort((t3, e2) => t3[0] - e2[0] || t3[1] - e2[1] || t3[2] - e2[2]);
      const t2 = [];
      for (const e2 of this.#Ka) e2[3] ? (t2.push(...this.#Ja(e2)), this.#Za(e2)) : (this.#to(e2), t2.push(...this.#Ja(e2)));
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
        s4.push(n3), n3.push(s4), i2.add(s4), i2.add(n3);
      }
      const s2 = [];
      let n2;
      for (; i2.size > 0; ) {
        const t3 = i2.values().next().value;
        let [e3, r2, a2, o2, l2] = t3;
        i2.delete(t3);
        let h2 = e3, c2 = r2;
        for (n2 = [e3, a2], s2.push(n2); ; ) {
          let t4;
          if (i2.has(o2)) t4 = o2;
          else {
            if (!i2.has(l2)) break;
            t4 = l2;
          }
          i2.delete(t4), [e3, r2, a2, o2, l2] = t4, h2 !== e3 && (n2.push(h2, c2, e3, c2 === r2 ? r2 : a2), h2 = e3), c2 = c2 === r2 ? a2 : r2;
        }
        n2.push(h2, c2);
      }
      return new Vs(s2, this.#Aa, this.#Xa, this.#Ya);
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
        if (i3 === t2 && n2 === e2) return void this.#Qa.splice(s2, 1);
      }
      for (let s2 = i2 - 1; s2 >= 0; s2--) {
        const [i3, n2] = this.#Qa[s2];
        if (i3 !== t2) break;
        if (i3 === t2 && n2 === e2) return void this.#Qa.splice(s2, 1);
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
            n2.splice(t4, 1), t4--, r3--;
          }
          else n2[t4][2] = i3, o2 > s3 && n2.push([e2, s3, o2]);
        }
      }
      return n2;
    }
  }
  class Vs extends zs {
    #Aa;
    #so;
    constructor(t2, e2, i2, s2) {
      super(), this.#so = t2, this.#Aa = e2, this.firstPoint = i2, this.lastPoint = s2;
    }
    toSVGPath() {
      const t2 = [];
      for (const e2 of this.#so) {
        let [i2, s2] = e2;
        t2.push(`M${i2} ${s2}`);
        for (let n2 = 2; n2 < e2.length; n2 += 2) {
          const r2 = e2[n2], a2 = e2[n2 + 1];
          r2 === i2 ? (t2.push(`V${a2}`), s2 = a2) : a2 === s2 && (t2.push(`H${r2}`), i2 = r2);
        }
        t2.push("Z");
      }
      return t2.join(" ");
    }
    serialize([t2, e2, i2, s2], n2) {
      const r2 = [], a2 = i2 - t2, o2 = s2 - e2;
      for (const e3 of this.#so) {
        const i3 = new Array(e3.length);
        for (let n3 = 0; n3 < e3.length; n3 += 2) i3[n3] = t2 + e3[n3] * a2, i3[n3 + 1] = s2 - e3[n3 + 1] * o2;
        r2.push(i3);
      }
      return r2;
    }
    get box() {
      return this.#Aa;
    }
    get classNamesForOutlining() {
      return ["highlightOutline"];
    }
  }
  class Gs extends Hs {
    newFreeDrawOutline(t2, e2, i2, s2, n2, r2) {
      return new Ws(t2, e2, i2, s2, n2, r2);
    }
  }
  class Ws extends js {
    newOutliner(t2, e2, i2, s2, n2, r2 = 0) {
      return new Gs(t2, e2, i2, s2, n2, r2);
    }
  }
  class qs extends Ut {
    #no = null;
    #ro = 0;
    #ao;
    #oo = null;
    #n = null;
    #lo = null;
    #ho = null;
    #co = 0;
    #do = null;
    #uo = null;
    #x = null;
    #po = false;
    #Xa = null;
    #Ya = null;
    #go = null;
    #ce = "";
    #Ra;
    #mo = "";
    static _defaultColor = null;
    static _defaultOpacity = 1;
    static _defaultThickness = 12;
    static _type = "highlight";
    static _editorType = d.HIGHLIGHT;
    static _freeHighlightId = -1;
    static _freeHighlight = null;
    static _freeHighlightClipId = "";
    static get _keyboardManager() {
      const t2 = qs.prototype;
      return M(this, "_keyboardManager", new Rt([[["ArrowLeft", "mac+ArrowLeft"], t2._moveCaret, { args: [0] }], [["ArrowRight", "mac+ArrowRight"], t2._moveCaret, { args: [1] }], [["ArrowUp", "mac+ArrowUp"], t2._moveCaret, { args: [2] }], [["ArrowDown", "mac+ArrowDown"], t2._moveCaret, { args: [3] }]]));
    }
    constructor(t2) {
      super({ ...t2, name: "highlightEditor" }), this.color = t2.color || qs._defaultColor, this.#Ra = t2.thickness || qs._defaultThickness, this.opacity = t2.opacity || qs._defaultOpacity, this.#ao = t2.boxes || null, this.#mo = t2.methodOfCreation || "", this.#ce = t2.text || "", this._isDraggable = false, this.defaultL10nId = "pdfjs-editor-highlight-editor", t2.highlightId > -1 ? (this.#po = true, this.#fo(t2), this.#bo()) : this.#ao && (this.#no = t2.anchorNode, this.#ro = t2.anchorOffset, this.#ho = t2.focusNode, this.#co = t2.focusOffset, this.#vo(), this.#bo(), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
    }
    get telemetryInitialData() {
      return { action: "added", type: this.#po ? "free_highlight" : "highlight", color: this._uiManager.getNonHCMColorName(this.color), thickness: this.#Ra, methodOfCreation: this.#mo };
    }
    get telemetryFinalData() {
      return { type: "highlight", color: this._uiManager.getNonHCMColorName(this.color) };
    }
    static computeTelemetryFinalData(t2) {
      return { numberOfColors: t2.get("color").size };
    }
    #vo() {
      const t2 = new $s(this.#ao, 1e-3);
      this.#uo = t2.getOutlines(), [this.x, this.y, this.width, this.height] = this.#uo.box;
      const e2 = new $s(this.#ao, 25e-4, 1e-3, "ltr" === this._uiManager.direction);
      this.#lo = e2.getOutlines();
      const { firstPoint: i2 } = this.#uo;
      this.#Xa = [(i2[0] - this.x) / this.width, (i2[1] - this.y) / this.height];
      const { lastPoint: s2 } = this.#lo;
      this.#Ya = [(s2[0] - this.x) / this.width, (s2[1] - this.y) / this.height];
    }
    #fo({ highlightOutlines: t2, highlightId: e2, clipPathId: i2 }) {
      if (this.#uo = t2, this.#lo = t2.getNewOutline(this.#Ra / 2 + 1.5, 25e-4), e2 >= 0) this.#x = e2, this.#oo = i2, this.parent.drawLayer.finalizeDraw(e2, { bbox: t2.box, path: { d: t2.toSVGPath() } }), this.#go = this.parent.drawLayer.drawOutline({ rootClass: { highlightOutline: true, free: true }, bbox: this.#lo.box, path: { d: this.#lo.toSVGPath() } }, true);
      else if (this.parent) {
        const e3 = this.parent.viewport.rotation;
        this.parent.drawLayer.updateProperties(this.#x, { bbox: qs.#yo(this.#uo.box, (e3 - this.rotation + 360) % 360), path: { d: t2.toSVGPath() } }), this.parent.drawLayer.updateProperties(this.#go, { bbox: qs.#yo(this.#lo.box, e3), path: { d: this.#lo.toSVGPath() } });
      }
      const [s2, n2, r2, a2] = t2.box;
      switch (this.rotation) {
        case 0:
          this.x = s2, this.y = n2, this.width = r2, this.height = a2;
          break;
        case 90: {
          const [t3, e3] = this.parentDimensions;
          this.x = n2, this.y = 1 - s2, this.width = r2 * e3 / t3, this.height = a2 * t3 / e3;
          break;
        }
        case 180:
          this.x = 1 - s2, this.y = 1 - n2, this.width = r2, this.height = a2;
          break;
        case 270: {
          const [t3, e3] = this.parentDimensions;
          this.x = 1 - n2, this.y = s2, this.width = r2 * e3 / t3, this.height = a2 * t3 / e3;
          break;
        }
      }
      const { firstPoint: o2 } = t2;
      this.#Xa = [(o2[0] - s2) / r2, (o2[1] - n2) / a2];
      const { lastPoint: l2 } = this.#lo;
      this.#Ya = [(l2[0] - s2) / r2, (l2[1] - n2) / a2];
    }
    static initialize(t2, e2) {
      Ut.initialize(t2, e2), qs._defaultColor ||= e2.highlightColors?.values().next().value || "#fff066";
    }
    static updateDefaultParams(t2, e2) {
      switch (t2) {
        case u.HIGHLIGHT_COLOR:
          qs._defaultColor = e2;
          break;
        case u.HIGHLIGHT_THICKNESS:
          qs._defaultThickness = e2;
      }
    }
    translateInPage(t2, e2) {
    }
    get toolbarPosition() {
      return this.#Ya;
    }
    get commentButtonPosition() {
      return this.#Xa;
    }
    updateParams(t2, e2) {
      switch (t2) {
        case u.HIGHLIGHT_COLOR:
          this.#jr(e2);
          break;
        case u.HIGHLIGHT_THICKNESS:
          this.#wo(e2);
      }
    }
    static get defaultPropertiesToUpdate() {
      return [[u.HIGHLIGHT_COLOR, qs._defaultColor], [u.HIGHLIGHT_THICKNESS, qs._defaultThickness]];
    }
    get propertiesToUpdate() {
      return [[u.HIGHLIGHT_COLOR, this.color || qs._defaultColor], [u.HIGHLIGHT_THICKNESS, this.#Ra || qs._defaultThickness], [u.HIGHLIGHT_FREE, this.#po]];
    }
    onUpdatedColor() {
      this.parent?.drawLayer.updateProperties(this.#x, { root: { fill: this.color, "fill-opacity": this.opacity } }), this.#n?.updateColor(this.color), super.onUpdatedColor();
    }
    #jr(t2) {
      const e2 = (t3, e3) => {
        this.color = t3, this.opacity = e3, this.onUpdatedColor();
      }, i2 = this.color, s2 = this.opacity;
      this.addCommands({ cmd: e2.bind(this, t2, qs._defaultOpacity), undo: e2.bind(this, i2, s2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: u.HIGHLIGHT_COLOR, overwriteIfSameType: true, keepUndo: true }), this._reportTelemetry({ action: "color_changed", color: this._uiManager.getNonHCMColorName(t2) }, true);
    }
    #wo(t2) {
      const e2 = this.#Ra, i2 = (t3) => {
        this.#Ra = t3, this.#xo(t3);
      };
      this.addCommands({ cmd: i2.bind(this, t2), undo: i2.bind(this, e2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: u.INK_THICKNESS, overwriteIfSameType: true, keepUndo: true }), this._reportTelemetry({ action: "thickness_changed", thickness: t2 }, true);
    }
    get toolbarButtons() {
      return this._uiManager.highlightColors ? [["colorPicker", this.#n = new ts({ editor: this })]] : super.toolbarButtons;
    }
    disableEditing() {
      super.disableEditing(), this.div.classList.toggle("disabled", true);
    }
    enableEditing() {
      super.enableEditing(), this.div.classList.toggle("disabled", false);
    }
    fixAndSetPosition() {
      return super.fixAndSetPosition(this.#Ao());
    }
    getBaseTranslation() {
      return [0, 0];
    }
    getRect(t2, e2) {
      return super.getRect(t2, e2, this.#Ao());
    }
    onceAdded(t2) {
      this.annotationElementId || this.parent.addUndoableEditor(this), t2 && this.div.focus();
    }
    remove() {
      this.#_o(), this._reportTelemetry({ action: "deleted" }), super.remove();
    }
    rebuild() {
      this.parent && (super.rebuild(), null !== this.div && (this.#bo(), this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(t2) {
      let e2 = false;
      this.parent && !t2 ? this.#_o() : t2 && (this.#bo(t2), e2 = !this.parent && this.div?.classList.contains("selectedEditor")), super.setParent(t2), this.show(this._isVisible), e2 && this.select();
    }
    #xo(t2) {
      this.#po && (this.#fo({ highlightOutlines: this.#uo.getNewOutline(t2 / 2) }), this.fixAndSetPosition(), this.setDims(this.width, this.height));
    }
    #_o() {
      null !== this.#x && this.parent && (this.parent.drawLayer.remove(this.#x), this.#x = null, this.parent.drawLayer.remove(this.#go), this.#go = null);
    }
    #bo(t2 = this.parent) {
      null === this.#x && ({ id: this.#x, clipPathId: this.#oo } = t2.drawLayer.draw({ bbox: this.#uo.box, root: { viewBox: "0 0 1 1", fill: this.color, "fill-opacity": this.opacity }, rootClass: { highlight: true, free: this.#po }, path: { d: this.#uo.toSVGPath() } }, false, true), this.#go = t2.drawLayer.drawOutline({ rootClass: { highlightOutline: true, free: this.#po }, bbox: this.#lo.box, path: { d: this.#lo.toSVGPath() } }, this.#po), this.#do && (this.#do.style.clipPath = this.#oo));
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
      this.#po ? (t2 = (t2 - this.rotation + 360) % 360, i2 = qs.#yo(this.#uo.box, t2)) : i2 = qs.#yo([this.x, this.y, this.width, this.height], t2), e2.updateProperties(this.#x, { bbox: i2, root: { "data-main-rotation": t2 } }), e2.updateProperties(this.#go, { bbox: qs.#yo(this.#lo.box, t2), root: { "data-main-rotation": t2 } });
    }
    render() {
      if (this.div) return this.div;
      const t2 = super.render();
      this.#ce && (t2.setAttribute("aria-label", this.#ce), t2.setAttribute("role", "mark")), this.#po ? t2.classList.add("free") : this.div.addEventListener("keydown", this.#So.bind(this), { signal: this._uiManager._signal });
      const e2 = this.#do = document.createElement("div");
      return t2.append(e2), e2.setAttribute("aria-hidden", "true"), e2.className = "internal", e2.style.clipPath = this.#oo, this.setDims(this.width, this.height), kt(this, this.#do, ["pointerover", "pointerleave"]), this.enableEditing(), t2;
    }
    pointerover() {
      this.isSelected || this.parent?.drawLayer.updateProperties(this.#go, { rootClass: { hovered: true } });
    }
    pointerleave() {
      this.isSelected || this.parent?.drawLayer.updateProperties(this.#go, { rootClass: { hovered: false } });
    }
    #So(t2) {
      qs._keyboardManager.exec(this, t2);
    }
    _moveCaret(t2) {
      switch (this.parent.unselect(this), t2) {
        case 0:
        case 2:
          this.#Eo(true);
          break;
        case 1:
        case 3:
          this.#Eo(false);
      }
    }
    #Eo(t2) {
      if (!this.#no) return;
      const e2 = window.getSelection();
      t2 ? e2.setPosition(this.#no, this.#ro) : e2.setPosition(this.#ho, this.#co);
    }
    select() {
      super.select(), this.#go && this.parent?.drawLayer.updateProperties(this.#go, { rootClass: { hovered: false, selected: true } });
    }
    unselect() {
      super.unselect(), this.#go && (this.parent?.drawLayer.updateProperties(this.#go, { rootClass: { selected: false } }), this.#po || this.#Eo(false));
    }
    get _mustFixPosition() {
      return !this.#po;
    }
    show(t2 = this._isVisible) {
      super.show(t2), this.parent && (this.parent.drawLayer.updateProperties(this.#x, { rootClass: { hidden: !t2 } }), this.parent.drawLayer.updateProperties(this.#go, { rootClass: { hidden: !t2 } }));
    }
    #Ao() {
      return this.#po ? this.rotation : 0;
    }
    #Co() {
      if (this.#po) return null;
      const [t2, e2] = this.pageDimensions, [i2, s2] = this.pageTranslation, n2 = this.#ao, r2 = new Float32Array(8 * n2.length);
      let a2 = 0;
      for (const { x: o2, y: l2, width: h2, height: c2 } of n2) {
        const n3 = o2 * t2 + i2, d2 = (1 - l2) * e2 + s2;
        r2[a2] = r2[a2 + 4] = n3, r2[a2 + 1] = r2[a2 + 3] = d2, r2[a2 + 2] = r2[a2 + 6] = n3 + h2 * t2, r2[a2 + 5] = r2[a2 + 7] = d2 - c2 * e2, a2 += 8;
      }
      return r2;
    }
    #To(t2) {
      return this.#uo.serialize(t2, this.#Ao());
    }
    static startHighlighting(t2, e2, { target: i2, x: s2, y: n2 }) {
      const { x: r2, y: a2, width: o2, height: l2 } = i2.getBoundingClientRect(), h2 = new AbortController(), c2 = t2.combinedSignal(h2), d2 = (e3) => {
        h2.abort(), this.#Mo(t2, e3);
      };
      window.addEventListener("blur", d2, { signal: c2 }), window.addEventListener("pointerup", d2, { signal: c2 }), window.addEventListener("pointerdown", lt, { capture: true, passive: false, signal: c2 }), window.addEventListener("contextmenu", ot, { signal: c2 }), i2.addEventListener("pointermove", this.#ko.bind(this, t2), { signal: c2 }), this._freeHighlight = new Gs({ x: s2, y: n2 }, [r2, a2, o2, l2], t2.scale, this._defaultThickness / 2, e2, 1e-3), { id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = t2.drawLayer.draw({ bbox: [0, 0, 1, 1], root: { viewBox: "0 0 1 1", fill: this._defaultColor, "fill-opacity": this._defaultOpacity }, rootClass: { highlight: true, free: true }, path: { d: this._freeHighlight.toSVGPath() } }, true, true);
    }
    static #ko(t2, e2) {
      this._freeHighlight.add(e2) && t2.drawLayer.updateProperties(this._freeHighlightId, { path: { d: this._freeHighlight.toSVGPath() } });
    }
    static #Mo(t2, e2) {
      this._freeHighlight.isEmpty() ? t2.drawLayer.remove(this._freeHighlightId) : t2.createAndAddNewEditor(e2, false, { highlightId: this._freeHighlightId, highlightOutlines: this._freeHighlight.getOutlines(), clipPathId: this._freeHighlightClipId, methodOfCreation: "main_toolbar" }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
    }
    static async deserialize(t2, e2, i2) {
      let s2 = null;
      if (t2 instanceof Ps) {
        const { data: { quadPoints: e3, rect: i3, rotation: n3, id: r3, color: a3, opacity: o3, popupRef: l3, richText: h3, contentsObj: c3, creationDate: u3, modificationDate: p3 }, parent: { page: { pageNumber: g2 } } } = t2;
        s2 = t2 = { annotationType: d.HIGHLIGHT, color: Array.from(a3), opacity: o3, quadPoints: e3, boxes: null, pageIndex: g2 - 1, rect: i3.slice(0), rotation: n3, annotationElementId: r3, id: r3, deleted: false, popupRef: l3, richText: h3, comment: c3?.str || null, creationDate: u3, modificationDate: p3 };
      } else if (t2 instanceof Ds) {
        const { data: { inkLists: e3, rect: i3, rotation: n3, id: r3, color: a3, borderStyle: { rawWidth: o3 }, popupRef: l3, richText: h3, contentsObj: c3, creationDate: u3, modificationDate: p3 }, parent: { page: { pageNumber: g2 } } } = t2;
        s2 = t2 = { annotationType: d.HIGHLIGHT, color: Array.from(a3), thickness: o3, inkLists: e3, boxes: null, pageIndex: g2 - 1, rect: i3.slice(0), rotation: n3, annotationElementId: r3, id: r3, deleted: false, popupRef: l3, richText: h3, comment: c3?.str || null, creationDate: u3, modificationDate: p3 };
      }
      const { color: n2, quadPoints: r2, inkLists: a2, opacity: o2 } = t2, l2 = await super.deserialize(t2, e2, i2);
      l2.color = z.makeHexColor(...n2), l2.opacity = o2 || 1, a2 && (l2.#Ra = t2.thickness), l2._initialData = s2, t2.comment && l2.setCommentData(t2);
      const [h2, c2] = l2.pageDimensions, [u2, p2] = l2.pageTranslation;
      if (r2) {
        const t3 = l2.#ao = [];
        for (let e3 = 0; e3 < r2.length; e3 += 8) t3.push({ x: (r2[e3] - u2) / h2, y: 1 - (r2[e3 + 1] - p2) / c2, width: (r2[e3 + 2] - r2[e3]) / h2, height: (r2[e3 + 1] - r2[e3 + 5]) / c2 });
        l2.#vo(), l2.#bo(), l2.rotate(l2.rotation);
      } else if (a2) {
        l2.#po = true;
        const t3 = a2[0], i3 = { x: t3[0] - u2, y: c2 - (t3[1] - p2) }, s3 = new Gs(i3, [0, 0, h2, c2], 1, l2.#Ra / 2, true, 1e-3);
        for (let e3 = 0, n4 = t3.length; e3 < n4; e3 += 2) i3.x = t3[e3] - u2, i3.y = c2 - (t3[e3 + 1] - p2), s3.add(i3);
        const { id: n3, clipPathId: r3 } = e2.drawLayer.draw({ bbox: [0, 0, 1, 1], root: { viewBox: "0 0 1 1", fill: l2.color, "fill-opacity": l2._defaultOpacity }, rootClass: { highlight: true, free: true }, path: { d: s3.toSVGPath() } }, true, true);
        l2.#fo({ highlightOutlines: s3.getOutlines(), highlightId: n3, clipPathId: r3 }), l2.#bo(), l2.rotate(l2.parentRotation);
      }
      return l2;
    }
    serialize(t2 = false) {
      if (this.isEmpty() || t2) return null;
      if (this.deleted) return this.serializeDeleted();
      const e2 = Ut._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), i2 = super.serialize(t2);
      return Object.assign(i2, { color: e2, opacity: this.opacity, thickness: this.#Ra, quadPoints: this.#Co(), outlines: this.#To(i2.rect) }), this.addComment(i2), this.annotationElementId && !this.#xa(i2) ? null : (i2.id = this.annotationElementId, i2);
    }
    #xa(t2) {
      const { color: e2 } = this._initialData;
      return this.hasEditedComment || t2.color.some((t3, i2) => t3 !== e2[i2]);
    }
    renderAnnotationElement(t2) {
      return this.deleted ? (t2.hide(), null) : (t2.updateEdited({ rect: this.getPDFRect(), popup: this.comment }), null);
    }
    static canCreateNewEmptyEditor() {
      return false;
    }
  }
  class Xs {
    #Do = /* @__PURE__ */ Object.create(null);
    updateProperty(t2, e2) {
      this[t2] = e2, this.updateSVGProperty(t2, e2);
    }
    updateProperties(t2) {
      if (t2) for (const [e2, i2] of Object.entries(t2)) e2.startsWith("_") || this.updateProperty(e2, i2);
    }
    updateSVGProperty(t2, e2) {
      this.#Do[t2] = e2;
    }
    toSVGProperties() {
      const t2 = this.#Do;
      return this.#Do = /* @__PURE__ */ Object.create(null), { root: t2 };
    }
    reset() {
      this.#Do = /* @__PURE__ */ Object.create(null);
    }
    updateAll(t2 = this) {
      this.updateProperties(t2);
    }
    clone() {
      S("Not implemented");
    }
  }
  class Ys extends Ut {
    #Po = null;
    #Io;
    _colorPicker = null;
    _drawId = null;
    static _currentDrawId = -1;
    static _currentParent = null;
    static #Ro = null;
    static #Lo = null;
    static #Bo = null;
    static #Fo = NaN;
    static #Oo = null;
    static #No = null;
    static #Uo = NaN;
    static _INNER_MARGIN = 3;
    constructor(t2) {
      super(t2), this.#Io = t2.mustBeCommitted || false, this._addOutlines(t2);
    }
    onUpdatedColor() {
      this._colorPicker?.update(this.color), super.onUpdatedColor();
    }
    _addOutlines(t2) {
      t2.drawOutlines && (this.#zo(t2), this.#bo());
    }
    #zo({ drawOutlines: t2, drawId: e2, drawingOptions: i2 }) {
      this.#Po = t2, this._drawingOptions ||= i2, this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`), e2 >= 0 ? (this._drawId = e2, this.parent.drawLayer.finalizeDraw(e2, t2.defaultProperties)) : this._drawId = this.#Ho(t2, this.parent), this.#jo(t2.box);
    }
    #Ho(t2, e2) {
      const { id: i2 } = e2.drawLayer.draw(Ys._mergeSVGProperties(this._drawingOptions.toSVGProperties(), t2.defaultSVGProperties), false, false);
      return i2;
    }
    static _mergeSVGProperties(t2, e2) {
      const i2 = new Set(Object.keys(t2));
      for (const [s2, n2] of Object.entries(e2)) i2.has(s2) ? Object.assign(t2[s2], n2) : t2[s2] = n2;
      return t2;
    }
    static getDefaultDrawingOptions(t2) {
      S("Not implemented");
    }
    static get typesMap() {
      S("Not implemented");
    }
    static get isDrawer() {
      return true;
    }
    static get supportMultipleDrawings() {
      return false;
    }
    static updateDefaultParams(t2, e2) {
      const i2 = this.typesMap.get(t2);
      i2 && this._defaultDrawingOptions.updateProperty(i2, e2), this._currentParent && (Ys.#Ro.updateProperty(i2, e2), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
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
      const s2 = this._drawingOptions, n2 = s2[e2], r2 = (i3) => {
        s2.updateProperty(e2, i3);
        const n3 = this.#Po.updateProperty(e2, i3);
        n3 && this.#jo(n3), this.parent?.drawLayer.updateProperties(this._drawId, s2.toSVGProperties()), t2 === this.colorType && this.onUpdatedColor();
      };
      this.addCommands({ cmd: r2.bind(this, i2), undo: r2.bind(this, n2), post: this._uiManager.updateUI.bind(this._uiManager, this), mustExec: true, type: t2, overwriteIfSameType: true, keepUndo: true });
    }
    _onResizing() {
      this.parent?.drawLayer.updateProperties(this._drawId, Ys._mergeSVGProperties(this.#Po.getPathResizingSVGProperties(this.#$o()), { bbox: this.#Vo() }));
    }
    _onResized() {
      this.parent?.drawLayer.updateProperties(this._drawId, Ys._mergeSVGProperties(this.#Po.getPathResizedSVGProperties(this.#$o()), { bbox: this.#Vo() }));
    }
    _onTranslating(t2, e2) {
      this.parent?.drawLayer.updateProperties(this._drawId, { bbox: this.#Vo() });
    }
    _onTranslated() {
      this.parent?.drawLayer.updateProperties(this._drawId, Ys._mergeSVGProperties(this.#Po.getPathTranslatedSVGProperties(this.#$o(), this.parentDimensions), { bbox: this.#Vo() }));
    }
    _onStartDragging() {
      this.parent?.drawLayer.updateProperties(this._drawId, { rootClass: { moving: true } });
    }
    _onStopDragging() {
      this.parent?.drawLayer.updateProperties(this._drawId, { rootClass: { moving: false } });
    }
    commit() {
      super.commit(), this.disableEditMode(), this.disableEditing();
    }
    disableEditing() {
      super.disableEditing(), this.div.classList.toggle("disabled", true);
    }
    enableEditing() {
      super.enableEditing(), this.div.classList.toggle("disabled", false);
    }
    getBaseTranslation() {
      return [0, 0];
    }
    get isResizable() {
      return true;
    }
    onceAdded(t2) {
      this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = true, this.#Io && (this.#Io = false, this.commit(), this.parent.setSelected(this), t2 && this.isOnScreen && this.div.focus());
    }
    remove() {
      this.#_o(), super.remove();
    }
    rebuild() {
      this.parent && (super.rebuild(), null !== this.div && (this.#bo(), this.#jo(this.#Po.box), this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(t2) {
      let e2 = false;
      this.parent && !t2 ? (this._uiManager.removeShouldRescale(this), this.#_o()) : t2 && (this._uiManager.addShouldRescale(this), this.#bo(t2), e2 = !this.parent && this.div?.classList.contains("selectedEditor")), super.setParent(t2), e2 && this.select();
    }
    #_o() {
      null !== this._drawId && this.parent && (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
    }
    #bo(t2 = this.parent) {
      null !== this._drawId && this.parent === t2 || (null === this._drawId ? (this._drawingOptions.updateAll(), this._drawId = this.#Ho(this.#Po, t2)) : this.parent.drawLayer.updateParent(this._drawId, t2.drawLayer));
    }
    #Go([t2, e2, i2, s2]) {
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
    #$o() {
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
    #jo(t2) {
      [this.x, this.y, this.width, this.height] = this.#Go(t2), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
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
      this.parent && this.parent.drawLayer.updateProperties(this._drawId, Ys._mergeSVGProperties({ bbox: this.#Vo() }, this.#Po.updateRotation((this.parentRotation - this.rotation + 360) % 360)));
    }
    onScaleChanging() {
      this.parent && this.#jo(this.#Po.updateParentDimensions(this.parentDimensions, this.parent.scale));
    }
    static onScaleChangingWhenDrawing() {
    }
    render() {
      if (this.div) return this.div;
      let t2, e2;
      this._isCopy && (t2 = this.x, e2 = this.y);
      const i2 = super.render();
      i2.classList.add("draw");
      const s2 = document.createElement("div");
      return i2.append(s2), s2.setAttribute("aria-hidden", "true"), s2.className = "internal", this.setDims(), this._uiManager.addShouldRescale(this), this.disableEditing(), this._isCopy && this._moveAfterPaste(t2, e2), i2;
    }
    static createDrawerInstance(t2, e2, i2, s2, n2) {
      S("Not implemented");
    }
    static startDrawing(t2, e2, i2, s2) {
      const { target: n2, offsetX: r2, offsetY: a2, pointerId: o2, pointerType: l2 } = s2;
      if (Ys.#Oo && Ys.#Oo !== l2) return;
      const { viewport: { rotation: h2 } } = t2, { width: c2, height: d2 } = n2.getBoundingClientRect(), u2 = Ys.#Lo = new AbortController(), p2 = t2.combinedSignal(u2);
      Ys.#Fo ||= o2, Ys.#Oo ??= l2, window.addEventListener("pointerup", (t3) => {
        Ys.#Fo === t3.pointerId ? this._endDraw(t3) : Ys.#No?.delete(t3.pointerId);
      }, { signal: p2 }), window.addEventListener("pointercancel", (t3) => {
        Ys.#Fo === t3.pointerId ? this._currentParent.endDrawingSession() : Ys.#No?.delete(t3.pointerId);
      }, { signal: p2 }), window.addEventListener("pointerdown", (t3) => {
        Ys.#Oo === t3.pointerType && ((Ys.#No ||= /* @__PURE__ */ new Set()).add(t3.pointerId), Ys.#Ro.isCancellable() && (Ys.#Ro.removeLastElement(), Ys.#Ro.isEmpty() ? this._currentParent.endDrawingSession(true) : this._endDraw(null)));
      }, { capture: true, passive: false, signal: p2 }), window.addEventListener("contextmenu", ot, { signal: p2 }), n2.addEventListener("pointermove", this._drawMove.bind(this), { signal: p2 }), n2.addEventListener("touchmove", (t3) => {
        t3.timeStamp === Ys.#Uo && lt(t3);
      }, { signal: p2 }), t2.toggleDrawing(), e2._editorUndoBar?.hide(), Ys.#Ro ? t2.drawLayer.updateProperties(this._currentDrawId, Ys.#Ro.startNew(r2, a2, c2, d2, h2)) : (e2.updateUIForDefaultProperties(this), Ys.#Ro = this.createDrawerInstance(r2, a2, c2, d2, h2), Ys.#Bo = this.getDefaultDrawingOptions(), this._currentParent = t2, { id: this._currentDrawId } = t2.drawLayer.draw(this._mergeSVGProperties(Ys.#Bo.toSVGProperties(), Ys.#Ro.defaultSVGProperties), true, false));
    }
    static _drawMove(t2) {
      if (Ys.#Uo = -1, !Ys.#Ro) return;
      const { offsetX: e2, offsetY: i2, pointerId: s2 } = t2;
      Ys.#Fo === s2 && (Ys.#No?.size >= 1 ? this._endDraw(t2) : (this._currentParent.drawLayer.updateProperties(this._currentDrawId, Ys.#Ro.add(e2, i2)), Ys.#Uo = t2.timeStamp, lt(t2)));
    }
    static _cleanup(t2) {
      t2 && (this._currentDrawId = -1, this._currentParent = null, Ys.#Ro = null, Ys.#Bo = null, Ys.#Oo = null, Ys.#Uo = NaN), Ys.#Lo && (Ys.#Lo.abort(), Ys.#Lo = null, Ys.#Fo = NaN, Ys.#No = null);
    }
    static _endDraw(t2) {
      const e2 = this._currentParent;
      if (e2) {
        if (e2.toggleDrawing(true), this._cleanup(false), t2?.target === e2.div && e2.drawLayer.updateProperties(this._currentDrawId, Ys.#Ro.end(t2.offsetX, t2.offsetY)), this.supportMultipleDrawings) {
          const t3 = Ys.#Ro, i2 = this._currentDrawId, s2 = t3.getLastElement();
          return void e2.addCommands({ cmd: () => {
            e2.drawLayer.updateProperties(i2, t3.setLastElement(s2));
          }, undo: () => {
            e2.drawLayer.updateProperties(i2, t3.removeLastElement());
          }, mustExec: false, type: u.DRAW_STEP });
        }
        this.endDrawing(false);
      }
    }
    static endDrawing(t2) {
      const e2 = this._currentParent;
      if (!e2) return null;
      if (e2.toggleDrawing(true), e2.cleanUndoStack(u.DRAW_STEP), !Ys.#Ro.isEmpty()) {
        const { pageDimensions: [i2, s2], scale: n2 } = e2, r2 = e2.createAndAddNewEditor({ offsetX: 0, offsetY: 0 }, false, { drawId: this._currentDrawId, drawOutlines: Ys.#Ro.getOutlines(i2 * n2, s2 * n2, n2, this._INNER_MARGIN), drawingOptions: Ys.#Bo, mustBeCommitted: !t2 });
        return this._cleanup(true), r2;
      }
      return e2.drawLayer.remove(this._currentDrawId), this._cleanup(true), null;
    }
    createDrawingOptions(t2) {
    }
    static deserializeDraw(t2, e2, i2, s2, n2, r2) {
      S("Not implemented");
    }
    static async deserialize(t2, e2, i2) {
      const { rawDims: { pageWidth: s2, pageHeight: n2, pageX: r2, pageY: a2 } } = e2.viewport, o2 = this.deserializeDraw(r2, a2, s2, n2, this._INNER_MARGIN, t2), l2 = await super.deserialize(t2, e2, i2);
      return l2.createDrawingOptions(t2), l2.#zo({ drawOutlines: o2 }), l2.#bo(), l2.onScaleChanging(), l2.rotate(), l2;
    }
    serializeDraw(t2) {
      const [e2, i2] = this.pageTranslation, [s2, n2] = this.pageDimensions;
      return this.#Po.serialize([e2, i2, s2, n2], t2);
    }
    renderAnnotationElement(t2) {
      return t2.updateEdited({ rect: this.getPDFRect() }), null;
    }
    static canCreateNewEmptyEditor() {
      return false;
    }
  }
  class Ks {
    #Ta = new Float64Array(6);
    #Yr;
    #Wo;
    #sn;
    #Ra;
    #La;
    #qo = "";
    #Xo = 0;
    #so = new Qs();
    #Yo;
    #Ko;
    constructor(t2, e2, i2, s2, n2, r2) {
      this.#Yo = i2, this.#Ko = s2, this.#sn = n2, this.#Ra = r2, [t2, e2] = this.#Qo(t2, e2);
      const a2 = this.#Yr = [NaN, NaN, NaN, NaN, t2, e2];
      this.#La = [t2, e2], this.#Wo = [{ line: a2, points: this.#La }], this.#Ta.set(a2, 0);
    }
    updateProperty(t2, e2) {
      "stroke-width" === t2 && (this.#Ra = e2);
    }
    #Qo(t2, e2) {
      return zs._normalizePoint(t2, e2, this.#Yo, this.#Ko, this.#sn);
    }
    isEmpty() {
      return !this.#Wo || 0 === this.#Wo.length;
    }
    isCancellable() {
      return this.#La.length <= 10;
    }
    add(t2, e2) {
      [t2, e2] = this.#Qo(t2, e2);
      const [i2, s2, n2, r2] = this.#Ta.subarray(2, 6), a2 = t2 - n2, o2 = e2 - r2;
      return Math.hypot(this.#Yo * a2, this.#Ko * o2) <= 2 ? null : (this.#La.push(t2, e2), isNaN(i2) ? (this.#Ta.set([n2, r2, t2, e2], 2), this.#Yr.push(NaN, NaN, NaN, NaN, t2, e2), { path: { d: this.toSVGPath() } }) : (isNaN(this.#Ta[0]) && this.#Yr.splice(6, 6), this.#Ta.set([i2, s2, n2, r2, t2, e2], 0), this.#Yr.push(...zs.createBezierPoints(i2, s2, n2, r2, t2, e2)), { path: { d: this.toSVGPath() } }));
    }
    end(t2, e2) {
      return this.add(t2, e2) || (2 === this.#La.length ? { path: { d: this.toSVGPath() } } : null);
    }
    startNew(t2, e2, i2, s2, n2) {
      this.#Yo = i2, this.#Ko = s2, this.#sn = n2, [t2, e2] = this.#Qo(t2, e2);
      const r2 = this.#Yr = [NaN, NaN, NaN, NaN, t2, e2];
      this.#La = [t2, e2];
      const a2 = this.#Wo.at(-1);
      return a2 && (a2.line = new Float32Array(a2.line), a2.points = new Float32Array(a2.points)), this.#Wo.push({ line: r2, points: this.#La }), this.#Ta.set(r2, 0), this.#Xo = 0, this.toSVGPath(), null;
    }
    getLastElement() {
      return this.#Wo.at(-1);
    }
    setLastElement(t2) {
      return this.#Wo ? (this.#Wo.push(t2), this.#Yr = t2.line, this.#La = t2.points, this.#Xo = 0, { path: { d: this.toSVGPath() } }) : this.#so.setLastElement(t2);
    }
    removeLastElement() {
      if (!this.#Wo) return this.#so.removeLastElement();
      this.#Wo.pop(), this.#qo = "";
      for (let t2 = 0, e2 = this.#Wo.length; t2 < e2; t2++) {
        const { line: e3, points: i2 } = this.#Wo[t2];
        this.#Yr = e3, this.#La = i2, this.#Xo = 0, this.toSVGPath();
      }
      return { path: { d: this.#qo } };
    }
    toSVGPath() {
      const t2 = zs.svgRound(this.#Yr[4]), e2 = zs.svgRound(this.#Yr[5]);
      if (2 === this.#La.length) return this.#qo = `${this.#qo} M ${t2} ${e2} Z`, this.#qo;
      if (this.#La.length <= 6) {
        const i3 = this.#qo.lastIndexOf("M");
        this.#qo = `${this.#qo.slice(0, i3)} M ${t2} ${e2}`, this.#Xo = 6;
      }
      if (4 === this.#La.length) {
        const t3 = zs.svgRound(this.#Yr[10]), e3 = zs.svgRound(this.#Yr[11]);
        return this.#qo = `${this.#qo} L ${t3} ${e3}`, this.#Xo = 12, this.#qo;
      }
      const i2 = [];
      0 === this.#Xo && (i2.push(`M ${t2} ${e2}`), this.#Xo = 6);
      for (let t3 = this.#Xo, e3 = this.#Yr.length; t3 < e3; t3 += 6) {
        const [e4, s2, n2, r2, a2, o2] = this.#Yr.slice(t3, t3 + 6).map(zs.svgRound);
        i2.push(`C${e4} ${s2} ${n2} ${r2} ${a2} ${o2}`);
      }
      return this.#qo += i2.join(" "), this.#Xo = this.#Yr.length, this.#qo;
    }
    getOutlines(t2, e2, i2, s2) {
      const n2 = this.#Wo.at(-1);
      return n2.line = new Float32Array(n2.line), n2.points = new Float32Array(n2.points), this.#so.build(this.#Wo, t2, e2, i2, this.#sn, this.#Ra, s2), this.#Ta = null, this.#Yr = null, this.#Wo = null, this.#qo = null, this.#so;
    }
    get defaultSVGProperties() {
      return { root: { viewBox: "0 0 10000 10000" }, rootClass: { draw: true }, bbox: [0, 0, 1, 1] };
    }
  }
  class Qs extends zs {
    #Ga;
    #Jo = 0;
    #Sa;
    #Wo;
    #Yo;
    #Ko;
    #Zo;
    #sn;
    #Ra;
    build(t2, e2, i2, s2, n2, r2, a2) {
      this.#Yo = e2, this.#Ko = i2, this.#Zo = s2, this.#sn = n2, this.#Ra = r2, this.#Sa = a2 ?? 0, this.#Wo = t2, this.#tl();
    }
    get thickness() {
      return this.#Ra;
    }
    setLastElement(t2) {
      return this.#Wo.push(t2), { path: { d: this.toSVGPath() } };
    }
    removeLastElement() {
      return this.#Wo.pop(), { path: { d: this.toSVGPath() } };
    }
    toSVGPath() {
      const t2 = [];
      for (const { line: e2 } of this.#Wo) if (t2.push(`M${zs.svgRound(e2[4])} ${zs.svgRound(e2[5])}`), 6 !== e2.length) if (12 === e2.length && isNaN(e2[6])) t2.push(`L${zs.svgRound(e2[10])} ${zs.svgRound(e2[11])}`);
      else for (let i2 = 6, s2 = e2.length; i2 < s2; i2 += 6) {
        const [s3, n2, r2, a2, o2, l2] = e2.subarray(i2, i2 + 6).map(zs.svgRound);
        t2.push(`C${s3} ${n2} ${r2} ${a2} ${o2} ${l2}`);
      }
      else t2.push("Z");
      return t2.join("");
    }
    serialize([t2, e2, i2, s2], n2) {
      const r2 = [], a2 = [], [o2, l2, h2, c2] = this.#el();
      let d2, u2, p2, g2, m2, f2, b2, v2, y2;
      switch (this.#sn) {
        case 0:
          y2 = zs._rescale, d2 = t2, u2 = e2 + s2, p2 = i2, g2 = -s2, m2 = t2 + o2 * i2, f2 = e2 + (1 - l2 - c2) * s2, b2 = t2 + (o2 + h2) * i2, v2 = e2 + (1 - l2) * s2;
          break;
        case 90:
          y2 = zs._rescaleAndSwap, d2 = t2, u2 = e2, p2 = i2, g2 = s2, m2 = t2 + l2 * i2, f2 = e2 + o2 * s2, b2 = t2 + (l2 + c2) * i2, v2 = e2 + (o2 + h2) * s2;
          break;
        case 180:
          y2 = zs._rescale, d2 = t2 + i2, u2 = e2, p2 = -i2, g2 = s2, m2 = t2 + (1 - o2 - h2) * i2, f2 = e2 + l2 * s2, b2 = t2 + (1 - o2) * i2, v2 = e2 + (l2 + c2) * s2;
          break;
        case 270:
          y2 = zs._rescaleAndSwap, d2 = t2 + i2, u2 = e2 + s2, p2 = -i2, g2 = -s2, m2 = t2 + (1 - l2 - c2) * i2, f2 = e2 + (1 - o2 - h2) * s2, b2 = t2 + (1 - l2) * i2, v2 = e2 + (1 - o2) * s2;
      }
      for (const { line: t3, points: e3 } of this.#Wo) r2.push(y2(t3, d2, u2, p2, g2, n2 ? new Array(t3.length) : null)), a2.push(y2(e3, d2, u2, p2, g2, n2 ? new Array(e3.length) : null));
      return { lines: r2, points: a2, rect: [m2, f2, b2, v2] };
    }
    static deserialize(t2, e2, i2, s2, n2, { paths: { lines: r2, points: a2 }, rotation: o2, thickness: l2 }) {
      const h2 = [];
      let c2, d2, u2, p2, g2;
      switch (o2) {
        case 0:
          g2 = zs._rescale, c2 = -t2 / i2, d2 = e2 / s2 + 1, u2 = 1 / i2, p2 = -1 / s2;
          break;
        case 90:
          g2 = zs._rescaleAndSwap, c2 = -e2 / s2, d2 = -t2 / i2, u2 = 1 / s2, p2 = 1 / i2;
          break;
        case 180:
          g2 = zs._rescale, c2 = t2 / i2 + 1, d2 = -e2 / s2, u2 = -1 / i2, p2 = 1 / s2;
          break;
        case 270:
          g2 = zs._rescaleAndSwap, c2 = e2 / s2 + 1, d2 = t2 / i2 + 1, u2 = -1 / s2, p2 = -1 / i2;
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
            i3.set(zs.createBezierPoints(s3, n3, a3, o3, e4, l3), 3 * (r3 - 2)), [s3, n3, a3, o3] = [a3, o3, e4, l3];
          }
        }
      }
      for (let t3 = 0, e3 = r2.length; t3 < e3; t3++) h2.push({ line: g2(r2[t3].map((t4) => t4 ?? NaN), c2, d2, u2, p2), points: g2(a2[t3].map((t4) => t4 ?? NaN), c2, d2, u2, p2) });
      const m2 = new this.prototype.constructor();
      return m2.build(h2, i2, s2, 1, o2, l2, n2), m2;
    }
    #il(t2 = this.#Ra) {
      const e2 = this.#Sa + t2 / 2 * this.#Zo;
      return this.#sn % 180 == 0 ? [e2 / this.#Yo, e2 / this.#Ko] : [e2 / this.#Ko, e2 / this.#Yo];
    }
    #el() {
      const [t2, e2, i2, s2] = this.#Ga, [n2, r2] = this.#il(0);
      return [t2 + n2, e2 + r2, i2 - 2 * n2, s2 - 2 * r2];
    }
    #tl() {
      const t2 = this.#Ga = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
      for (const { line: e3 } of this.#Wo) {
        if (e3.length <= 12) {
          for (let i4 = 4, s3 = e3.length; i4 < s3; i4 += 6) z.pointBoundingBox(e3[i4], e3[i4 + 1], t2);
          continue;
        }
        let i3 = e3[4], s2 = e3[5];
        for (let n2 = 6, r2 = e3.length; n2 < r2; n2 += 6) {
          const [r3, a2, o2, l2, h2, c2] = e3.subarray(n2, n2 + 6);
          z.bezierBoundingBox(i3, s2, r3, a2, o2, l2, h2, c2, t2), i3 = h2, s2 = c2;
        }
      }
      const [e2, i2] = this.#il();
      t2[0] = W(t2[0] - e2, 0, 1), t2[1] = W(t2[1] - i2, 0, 1), t2[2] = W(t2[2] + e2, 0, 1), t2[3] = W(t2[3] + i2, 0, 1), t2[2] -= t2[0], t2[3] -= t2[1];
    }
    get box() {
      return this.#Ga;
    }
    updateProperty(t2, e2) {
      return "stroke-width" === t2 ? this.#wo(e2) : null;
    }
    #wo(t2) {
      const [e2, i2] = this.#il();
      this.#Ra = t2;
      const [s2, n2] = this.#il(), [r2, a2] = [s2 - e2, n2 - i2], o2 = this.#Ga;
      return o2[0] -= r2, o2[1] -= a2, o2[2] += 2 * r2, o2[3] += 2 * a2, o2;
    }
    updateParentDimensions([t2, e2], i2) {
      const [s2, n2] = this.#il();
      this.#Yo = t2, this.#Ko = e2, this.#Zo = i2;
      const [r2, a2] = this.#il(), o2 = r2 - s2, l2 = a2 - n2, h2 = this.#Ga;
      return h2[0] -= o2, h2[1] -= l2, h2[2] += 2 * o2, h2[3] += 2 * l2, h2;
    }
    updateRotation(t2) {
      return this.#Jo = t2, { path: { transform: this.rotationTransform } };
    }
    get viewBox() {
      return this.#Ga.map(zs.svgRound).join(" ");
    }
    get defaultProperties() {
      const [t2, e2] = this.#Ga;
      return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${zs.svgRound(t2)} ${zs.svgRound(e2)}` } };
    }
    get rotationTransform() {
      const [, , t2, e2] = this.#Ga;
      let i2 = 0, s2 = 0, n2 = 0, r2 = 0, a2 = 0, o2 = 0;
      switch (this.#Jo) {
        case 90:
          s2 = e2 / t2, n2 = -t2 / e2, a2 = t2;
          break;
        case 180:
          i2 = -1, r2 = -1, a2 = t2, o2 = e2;
          break;
        case 270:
          s2 = -e2 / t2, n2 = t2 / e2, o2 = e2;
          break;
        default:
          return "";
      }
      return `matrix(${i2} ${s2} ${n2} ${r2} ${zs.svgRound(a2)} ${zs.svgRound(o2)})`;
    }
    getPathResizingSVGProperties([t2, e2, i2, s2]) {
      const [n2, r2] = this.#il(), [a2, o2, l2, h2] = this.#Ga;
      if (Math.abs(l2 - n2) <= zs.PRECISION || Math.abs(h2 - r2) <= zs.PRECISION) {
        const n3 = t2 + i2 / 2 - (a2 + l2 / 2), r3 = e2 + s2 / 2 - (o2 + h2 / 2);
        return { path: { "transform-origin": `${zs.svgRound(t2)} ${zs.svgRound(e2)}`, transform: `${this.rotationTransform} translate(${n3} ${r3})` } };
      }
      const c2 = (i2 - 2 * n2) / (l2 - 2 * n2), d2 = (s2 - 2 * r2) / (h2 - 2 * r2), u2 = l2 / i2, p2 = h2 / s2;
      return { path: { "transform-origin": `${zs.svgRound(a2)} ${zs.svgRound(o2)}`, transform: `${this.rotationTransform} scale(${u2} ${p2}) translate(${zs.svgRound(n2)} ${zs.svgRound(r2)}) scale(${c2} ${d2}) translate(${zs.svgRound(-n2)} ${zs.svgRound(-r2)})` } };
    }
    getPathResizedSVGProperties([t2, e2, i2, s2]) {
      const [n2, r2] = this.#il(), a2 = this.#Ga, [o2, l2, h2, c2] = a2;
      if (a2[0] = t2, a2[1] = e2, a2[2] = i2, a2[3] = s2, Math.abs(h2 - n2) <= zs.PRECISION || Math.abs(c2 - r2) <= zs.PRECISION) {
        const n3 = t2 + i2 / 2 - (o2 + h2 / 2), r3 = e2 + s2 / 2 - (l2 + c2 / 2);
        for (const { line: t3, points: e3 } of this.#Wo) zs._translate(t3, n3, r3, t3), zs._translate(e3, n3, r3, e3);
        return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${zs.svgRound(t2)} ${zs.svgRound(e2)}`, transform: this.rotationTransform || null, d: this.toSVGPath() } };
      }
      const d2 = (i2 - 2 * n2) / (h2 - 2 * n2), u2 = (s2 - 2 * r2) / (c2 - 2 * r2), p2 = -d2 * (o2 + n2) + t2 + n2, g2 = -u2 * (l2 + r2) + e2 + r2;
      if (1 !== d2 || 1 !== u2 || 0 !== p2 || 0 !== g2) for (const { line: t3, points: e3 } of this.#Wo) zs._rescale(t3, p2, g2, d2, u2, t3), zs._rescale(e3, p2, g2, d2, u2, e3);
      return { root: { viewBox: this.viewBox }, path: { "transform-origin": `${zs.svgRound(t2)} ${zs.svgRound(e2)}`, transform: this.rotationTransform || null, d: this.toSVGPath() } };
    }
    getPathTranslatedSVGProperties([t2, e2], i2) {
      const [s2, n2] = i2, r2 = this.#Ga, a2 = t2 - r2[0], o2 = e2 - r2[1];
      if (this.#Yo === s2 && this.#Ko === n2) for (const { line: t3, points: e3 } of this.#Wo) zs._translate(t3, a2, o2, t3), zs._translate(e3, a2, o2, e3);
      else {
        const t3 = this.#Yo / s2, e3 = this.#Ko / n2;
        this.#Yo = s2, this.#Ko = n2;
        for (const { line: i3, points: s3 } of this.#Wo) zs._rescale(i3, a2, o2, t3, e3, i3), zs._rescale(s3, a2, o2, t3, e3, s3);
        r2[2] *= t3, r2[3] *= e3;
      }
      return r2[0] = t2, r2[1] = e2, { root: { viewBox: this.viewBox }, path: { d: this.toSVGPath(), "transform-origin": `${zs.svgRound(t2)} ${zs.svgRound(e2)}` } };
    }
    get defaultSVGProperties() {
      const t2 = this.#Ga;
      return { root: { viewBox: this.viewBox }, rootClass: { draw: true }, path: { d: this.toSVGPath(), "transform-origin": `${zs.svgRound(t2[0])} ${zs.svgRound(t2[1])}`, transform: this.rotationTransform || null }, bbox: t2 };
    }
  }
  class Js extends Xs {
    constructor(t2) {
      super(), this._viewParameters = t2, super.updateProperties({ fill: "none", stroke: Ut._defaultLineColor, "stroke-opacity": 1, "stroke-width": 1, "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": 10 });
    }
    updateSVGProperty(t2, e2) {
      "stroke-width" === t2 && (e2 ??= this["stroke-width"], e2 *= this._viewParameters.realScale), super.updateSVGProperty(t2, e2);
    }
    clone() {
      const t2 = new Js(this._viewParameters);
      return t2.updateAll(this), t2;
    }
  }
  class Zs extends Ys {
    static _type = "ink";
    static _editorType = d.INK;
    static _defaultDrawingOptions = null;
    constructor(t2) {
      super({ ...t2, name: "inkEditor" }), this._willKeepAspectRatio = true, this.defaultL10nId = "pdfjs-editor-ink-editor";
    }
    static initialize(t2, e2) {
      Ut.initialize(t2, e2), this._defaultDrawingOptions = new Js(e2.viewParameters);
    }
    static getDefaultDrawingOptions(t2) {
      const e2 = this._defaultDrawingOptions.clone();
      return e2.updateProperties(t2), e2;
    }
    static get supportMultipleDrawings() {
      return true;
    }
    static get typesMap() {
      return M(this, "typesMap", /* @__PURE__ */ new Map([[u.INK_THICKNESS, "stroke-width"], [u.INK_COLOR, "stroke"], [u.INK_OPACITY, "stroke-opacity"]]));
    }
    static createDrawerInstance(t2, e2, i2, s2, n2) {
      return new Ks(t2, e2, i2, s2, n2, this._defaultDrawingOptions["stroke-width"]);
    }
    static deserializeDraw(t2, e2, i2, s2, n2, r2) {
      return Qs.deserialize(t2, e2, i2, s2, n2, r2);
    }
    static async deserialize(t2, e2, i2) {
      let s2 = null;
      if (t2 instanceof Ds) {
        const { data: { inkLists: e3, rect: i3, rotation: n3, id: r2, color: a2, opacity: o2, borderStyle: { rawWidth: l2 }, popupRef: h2, richText: c2, contentsObj: u2, creationDate: p2, modificationDate: g2 }, parent: { page: { pageNumber: m2 } } } = t2;
        s2 = t2 = { annotationType: d.INK, color: Array.from(a2), thickness: l2, opacity: o2, paths: { points: e3 }, boxes: null, pageIndex: m2 - 1, rect: i3.slice(0), rotation: n3, annotationElementId: r2, id: r2, deleted: false, popupRef: h2, richText: c2, comment: u2?.str || null, creationDate: p2, modificationDate: g2 };
      }
      const n2 = await super.deserialize(t2, e2, i2);
      return n2._initialData = s2, t2.comment && n2.setCommentData(t2), n2;
    }
    get toolbarButtons() {
      return this._colorPicker ||= new es(this), [["colorPicker", this._colorPicker]];
    }
    get colorType() {
      return u.INK_COLOR;
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
      e2.updateSVGProperty("stroke-width"), i2.drawLayer.updateProperties(t2, e2.toSVGProperties());
    }
    static onScaleChangingWhenDrawing() {
      const t2 = this._currentParent;
      t2 && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), t2.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
    }
    createDrawingOptions({ color: t2, thickness: e2, opacity: i2 }) {
      this._drawingOptions = Zs.getDefaultDrawingOptions({ stroke: z.makeHexColor(...t2), "stroke-width": e2, "stroke-opacity": i2 });
    }
    serialize(t2 = false) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const { lines: e2, points: i2 } = this.serializeDraw(t2), { _drawingOptions: { stroke: s2, "stroke-opacity": n2, "stroke-width": r2 } } = this, a2 = Object.assign(super.serialize(t2), { color: Ut._colorManager.convert(s2), opacity: n2, thickness: r2, paths: { lines: e2, points: i2 } });
      return this.addComment(a2), t2 ? (a2.isCopy = true, a2) : this.annotationElementId && !this.#xa(a2) ? null : (a2.id = this.annotationElementId, a2);
    }
    #xa(t2) {
      const { color: e2, thickness: i2, opacity: s2, pageIndex: n2 } = this._initialData;
      return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || t2.color.some((t3, i3) => t3 !== e2[i3]) || t2.thickness !== i2 || t2.opacity !== s2 || t2.pageIndex !== n2;
    }
    renderAnnotationElement(t2) {
      if (this.deleted) return t2.hide(), null;
      const { points: e2, rect: i2 } = this.serializeDraw(false);
      return t2.updateEdited({ rect: i2, thickness: this._drawingOptions["stroke-width"], points: e2, popup: this.comment }), null;
    }
  }
  class tn extends Qs {
    toSVGPath() {
      let t2 = super.toSVGPath();
      return t2.endsWith("Z") || (t2 += "Z"), t2;
    }
  }
  class en {
    static #sl = { maxDim: 512, sigmaSFactor: 0.02, sigmaR: 25, kernelSize: 16 };
    static #nl(t2, e2, i2, s2) {
      return s2 -= e2, 0 === (i2 -= t2) ? s2 > 0 ? 0 : 4 : 1 === i2 ? s2 + 6 : 2 - s2;
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
          let h2 = t3, c2 = i3;
          if (1 === n3 && 0 === r2[s3 - 1]) o2 += 1, c2 -= 1;
          else {
            if (!(n3 >= 1 && 0 === r2[s3 + 1])) {
              1 !== n3 && (a2 = Math.abs(n3));
              continue;
            }
            o2 += 1, c2 += 1, n3 > 1 && (a2 = n3);
          }
          const d2 = [i3, t3], u2 = c2 === i3 + 1, p2 = { isHole: u2, points: d2, id: o2, parent: 0 };
          let g2;
          l2.push(p2);
          for (const t4 of l2) if (t4.id === a2) {
            g2 = t4;
            break;
          }
          g2 ? g2.isHole ? p2.parent = u2 ? g2.parent : a2 : p2.parent = u2 ? a2 : g2.parent : p2.parent = u2 ? a2 : 0;
          const m2 = this.#al(r2, e2, t3, i3, h2, c2, 0);
          if (-1 === m2) {
            r2[s3] = -o2, 1 !== r2[s3] && (a2 = Math.abs(r2[s3]));
            continue;
          }
          let f2 = this.#rl[2 * m2], b2 = this.#rl[2 * m2 + 1];
          const v2 = t3 + f2, y2 = i3 + b2;
          h2 = v2, c2 = y2;
          let w2 = t3, x2 = i3;
          for (; ; ) {
            const n4 = this.#ol(r2, e2, w2, x2, h2, c2, 1);
            f2 = this.#rl[2 * n4], b2 = this.#rl[2 * n4 + 1];
            const l3 = w2 + f2, u3 = x2 + b2;
            d2.push(u3, l3);
            const p3 = w2 * e2 + x2;
            if (0 === r2[p3 + 1] ? r2[p3] = -o2 : 1 === r2[p3] && (r2[p3] = o2), l3 === t3 && u3 === i3 && w2 === v2 && x2 === y2) {
              1 !== r2[s3] && (a2 = Math.abs(r2[s3]));
              break;
            }
            h2 = w2, c2 = x2, w2 = l3, x2 = u3;
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
      const n2 = t2[e2], r2 = t2[e2 + 1], a2 = t2[i2 - 4] - n2, o2 = t2[i2 - 3] - r2, l2 = Math.hypot(a2, o2), h2 = a2 / l2, c2 = o2 / l2, d2 = h2 * r2 - c2 * n2, u2 = o2 / a2, p2 = 1 / l2, g2 = Math.atan(u2), m2 = Math.cos(g2), f2 = Math.sin(g2), b2 = p2 * (Math.abs(m2) + Math.abs(f2)), v2 = p2 * (1 - b2 + b2 ** 2), y2 = Math.max(Math.atan(Math.abs(f2 + m2) * v2), Math.atan(Math.abs(f2 - m2) * v2));
      let w2 = 0, x2 = e2;
      for (let s3 = e2 + 2; s3 < i2 - 2; s3 += 2) {
        const e3 = Math.abs(d2 - h2 * t2[s3 + 1] + c2 * t2[s3]);
        e3 > w2 && (x2 = s3, w2 = e3);
      }
      w2 > (l2 * y2) ** 2 ? (this.#hl(t2, e2, x2 + 2, s2), this.#hl(t2, x2, i2, s2)) : s2.push(n2, r2);
    }
    static #cl(t2) {
      const e2 = [], i2 = t2.length;
      return this.#hl(t2, 0, i2, e2), e2.push(t2[i2 - 2], t2[i2 - 1]), e2.length <= 4 ? null : e2;
    }
    static #dl(t2, e2, i2, s2, n2, r2) {
      const a2 = new Float32Array(r2 ** 2), o2 = -2 * s2 ** 2, l2 = r2 >> 1;
      for (let t3 = 0; t3 < r2; t3++) {
        const e3 = (t3 - l2) ** 2;
        for (let i3 = 0; i3 < r2; i3++) a2[t3 * r2 + i3] = Math.exp((e3 + (i3 - l2) ** 2) / o2);
      }
      const h2 = new Float32Array(256), c2 = -2 * n2 ** 2;
      for (let t3 = 0; t3 < 256; t3++) h2[t3] = Math.exp(t3 ** 2 / c2);
      const d2 = t2.length, u2 = new Uint8Array(d2), p2 = new Uint32Array(256);
      for (let s3 = 0; s3 < i2; s3++) for (let n3 = 0; n3 < e2; n3++) {
        const o3 = s3 * e2 + n3, c3 = t2[o3];
        let d3 = 0, g2 = 0;
        for (let o4 = 0; o4 < r2; o4++) {
          const u3 = s3 + o4 - l2;
          if (!(u3 < 0 || u3 >= i2)) for (let i3 = 0; i3 < r2; i3++) {
            const s4 = n3 + i3 - l2;
            if (s4 < 0 || s4 >= e2) continue;
            const p3 = t2[u3 * e2 + s4], m2 = a2[o4 * r2 + i3] * h2[Math.abs(p3 - c3)];
            d3 += p3 * m2, g2 += m2;
          }
        }
        p2[u2[o3] = Math.round(d3 / g2)]++;
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
        s2 = Math.max(s2, r4), n2 = Math.min(n2, r4);
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
        n3 > i2 && (e2 - r2 > s2 && (s2 = e2 - r2, a2 = e2 - 1), i2 = n3, r2 = e2);
      }
      for (e2 = a2 - 1; e2 >= 0 && !(t2[e2] > t2[e2 + 1]); e2--) ;
      return e2;
    }
    static #ml(t2) {
      const e2 = t2, { width: i2, height: s2 } = t2, { maxDim: n2 } = this.#sl;
      let r2 = i2, a2 = s2;
      if (i2 > n2 || s2 > n2) {
        let o3 = i2, l3 = s2, h2 = Math.log2(Math.max(i2, s2) / n2);
        const c2 = Math.floor(h2);
        h2 = h2 === c2 ? c2 - 1 : c2;
        for (let i3 = 0; i3 < h2; i3++) {
          r2 = Math.ceil(o3 / 2), a2 = Math.ceil(l3 / 2);
          const i4 = new OffscreenCanvas(r2, a2);
          i4.getContext("2d").drawImage(t2, 0, 0, o3, l3, 0, 0, r2, a2), o3 = r2, l3 = a2, t2 !== e2 && t2.close(), t2 = i4.transferToImageBitmap();
        }
        const d2 = Math.min(n2 / r2, n2 / a2);
        r2 = Math.round(r2 * d2), a2 = Math.round(a2 * d2);
      }
      const o2 = new OffscreenCanvas(r2, a2).getContext("2d", { willReadFrequently: true });
      o2.fillStyle = "white", o2.fillRect(0, 0, r2, a2), o2.filter = "grayscale(1)", o2.drawImage(t2, 0, 0, t2.width, t2.height, 0, 0, r2, a2);
      const l2 = o2.getImageData(0, 0, r2, a2).data;
      return [this.#pl(l2), r2, a2];
    }
    static extractContoursFromText(t2, { fontFamily: e2, fontStyle: i2, fontWeight: s2 }, n2, r2, a2, o2) {
      let l2 = new OffscreenCanvas(1, 1), h2 = l2.getContext("2d", { alpha: false });
      const c2 = h2.font = `${i2} ${s2} 200px ${e2}`, { actualBoundingBoxLeft: d2, actualBoundingBoxRight: u2, actualBoundingBoxAscent: p2, actualBoundingBoxDescent: g2, fontBoundingBoxAscent: m2, fontBoundingBoxDescent: f2, width: b2 } = h2.measureText(t2), v2 = Math.ceil(1.5 * Math.max(Math.abs(d2) + Math.abs(u2) || 0, b2)), y2 = Math.ceil(1.5 * Math.max(Math.abs(p2) + Math.abs(g2) || 200, Math.abs(m2) + Math.abs(f2) || 200));
      l2 = new OffscreenCanvas(v2, y2), h2 = l2.getContext("2d", { alpha: true, willReadFrequently: true }), h2.font = c2, h2.filter = "grayscale(1)", h2.fillStyle = "white", h2.fillRect(0, 0, v2, y2), h2.fillStyle = "black", h2.fillText(t2, 0.5 * v2 / 2, 1.5 * y2 / 2);
      const w2 = this.#pl(h2.getImageData(0, 0, v2, y2).data), x2 = this.#ul(w2), A2 = this.#gl(x2), _2 = this.#ll(w2, v2, y2, A2);
      return this.processDrawnLines({ lines: { curves: _2, width: v2, height: y2 }, pageWidth: n2, pageHeight: r2, rotation: a2, innerMargin: o2, mustSmooth: true, areContours: true });
    }
    static process(t2, e2, i2, s2, n2) {
      const [r2, a2, o2] = this.#ml(t2), [l2, h2] = this.#dl(r2, a2, o2, Math.hypot(a2, o2) * this.#sl.sigmaSFactor, this.#sl.sigmaR, this.#sl.kernelSize), c2 = this.#gl(h2), d2 = this.#ll(l2, a2, o2, c2);
      return this.processDrawnLines({ lines: { curves: d2, width: a2, height: o2 }, pageWidth: e2, pageHeight: i2, rotation: s2, innerMargin: n2, mustSmooth: true, areContours: true });
    }
    static processDrawnLines({ lines: t2, pageWidth: e2, pageHeight: i2, rotation: s2, innerMargin: n2, mustSmooth: r2, areContours: a2 }) {
      s2 % 180 != 0 && ([e2, i2] = [i2, e2]);
      const { curves: o2, width: l2, height: h2 } = t2, c2 = t2.thickness ?? 0, d2 = [], u2 = Math.min(e2 / l2, i2 / h2), p2 = u2 / e2, g2 = u2 / i2, m2 = [];
      for (const { points: t3 } of o2) {
        const e3 = r2 ? this.#cl(t3) : t3;
        if (!e3) continue;
        m2.push(e3);
        const i3 = e3.length, s3 = new Float32Array(i3), n3 = new Float32Array(3 * (2 === i3 ? 2 : i3 - 2));
        if (d2.push({ line: n3, points: s3 }), 2 === i3) {
          s3[0] = e3[0] * p2, s3[1] = e3[1] * g2, n3.set([NaN, NaN, NaN, NaN, s3[0], s3[1]], 0);
          continue;
        }
        let [a3, o3, l3, h3] = e3;
        a3 *= p2, o3 *= g2, l3 *= p2, h3 *= g2, s3.set([a3, o3, l3, h3], 0), n3.set([NaN, NaN, NaN, NaN, a3, o3], 0);
        for (let t4 = 4; t4 < i3; t4 += 2) {
          const i4 = s3[t4] = e3[t4] * p2, r3 = s3[t4 + 1] = e3[t4 + 1] * g2;
          n3.set(zs.createBezierPoints(a3, o3, l3, h3, i4, r3), 3 * (t4 - 2)), [a3, o3, l3, h3] = [l3, h3, i4, r3];
        }
      }
      if (0 === d2.length) return null;
      const f2 = a2 ? new tn() : new Qs();
      return f2.build(d2, e2, i2, 1, s2, a2 ? 0 : c2, n2), { outline: f2, newCurves: m2, areContours: a2, thickness: c2, width: l2, height: h2 };
    }
    static async compressSignature({ outlines: t2, areContours: e2, thickness: i2, width: s2, height: n2 }) {
      let r2, a2 = 1 / 0, o2 = -1 / 0, l2 = 0;
      for (const e3 of t2) {
        l2 += e3.length;
        for (let t3 = 2, i3 = e3.length; t3 < i3; t3++) {
          const i4 = e3[t3] - e3[t3 - 2];
          a2 = Math.min(a2, i4), o2 = Math.max(o2, i4);
        }
      }
      r2 = a2 >= -128 && o2 <= 127 ? Int8Array : a2 >= -32768 && o2 <= 32767 ? Int16Array : Int32Array;
      const h2 = t2.length, c2 = 8 + 3 * h2, d2 = new Uint32Array(c2);
      let u2 = 0;
      d2[u2++] = c2 * Uint32Array.BYTES_PER_ELEMENT + (l2 - 2 * h2) * r2.BYTES_PER_ELEMENT, d2[u2++] = 0, d2[u2++] = s2, d2[u2++] = n2, d2[u2++] = e2 ? 0 : 1, d2[u2++] = Math.max(0, Math.floor(i2 ?? 0)), d2[u2++] = h2, d2[u2++] = r2.BYTES_PER_ELEMENT;
      for (const e3 of t2) d2[u2++] = e3.length - 2, d2[u2++] = e3[0], d2[u2++] = e3[1];
      const p2 = new CompressionStream("deflate-raw"), g2 = p2.writable.getWriter();
      await g2.ready, g2.write(d2);
      const m2 = r2.prototype.constructor;
      for (const e3 of t2) {
        const t3 = new m2(e3.length - 2);
        for (let i3 = 2, s3 = e3.length; i3 < s3; i3++) t3[i3 - 2] = e3[i3] - e3[i3 - 2];
        g2.write(t3);
      }
      g2.close();
      const f2 = await new Response(p2.readable).arrayBuffer();
      return q(new Uint8Array(f2));
    }
    static async decompressSignature(t2) {
      try {
        const i2 = (e2 = t2, Uint8Array.fromBase64 ? Uint8Array.fromBase64(e2) : O(atob(e2))), { readable: s2, writable: n2 } = new DecompressionStream("deflate-raw"), r2 = n2.getWriter();
        await r2.ready, r2.write(i2).then(async () => {
          await r2.ready, await r2.close();
        }).catch(() => {
        });
        let a2 = null, o2 = 0;
        for await (const t3 of s2) a2 ||= new Uint8Array(new Uint32Array(t3.buffer, 0, 4)[0]), a2.set(t3, o2), o2 += t3.length;
        const l2 = new Uint32Array(a2.buffer, 0, a2.length >> 2), h2 = l2[1];
        if (0 !== h2) throw new Error(`Invalid version: ${h2}`);
        const c2 = l2[2], d2 = l2[3], u2 = 0 === l2[4], p2 = l2[5], g2 = l2[6], m2 = l2[7], f2 = [], b2 = (8 + 3 * g2) * Uint32Array.BYTES_PER_ELEMENT;
        let v2;
        switch (m2) {
          case Int8Array.BYTES_PER_ELEMENT:
            v2 = new Int8Array(a2.buffer, b2);
            break;
          case Int16Array.BYTES_PER_ELEMENT:
            v2 = new Int16Array(a2.buffer, b2);
            break;
          case Int32Array.BYTES_PER_ELEMENT:
            v2 = new Int32Array(a2.buffer, b2);
        }
        o2 = 0;
        for (let t3 = 0; t3 < g2; t3++) {
          const e3 = l2[3 * t3 + 8], i3 = new Float32Array(e3 + 2);
          f2.push(i3);
          for (let e4 = 0; e4 < 2; e4++) i3[e4] = l2[3 * t3 + 8 + e4 + 1];
          for (let t4 = 0; t4 < e3; t4++) i3[t4 + 2] = i3[t4] + v2[o2++];
        }
        return { areContours: u2, thickness: p2, outlines: f2, width: c2, height: d2 };
      } catch (t3) {
        return _(`decompressSignature: ${t3}`), null;
      }
      var e2;
    }
  }
  class sn extends Xs {
    constructor() {
      super(), super.updateProperties({ fill: Ut._defaultLineColor, "stroke-width": 0 });
    }
    clone() {
      const t2 = new sn();
      return t2.updateAll(this), t2;
    }
  }
  class nn extends Js {
    constructor(t2) {
      super(t2), super.updateProperties({ stroke: Ut._defaultLineColor, "stroke-width": 1 });
    }
    clone() {
      const t2 = new nn(this._viewParameters);
      return t2.updateAll(this), t2;
    }
  }
  class rn extends Ys {
    #fl = false;
    #bl = null;
    #vl = null;
    #yl = null;
    static _type = "signature";
    static _editorType = d.SIGNATURE;
    static _defaultDrawingOptions = null;
    constructor(t2) {
      super({ ...t2, mustBeCommitted: true, name: "signatureEditor" }), this._willKeepAspectRatio = true, this.#vl = t2.signatureData || null, this.#bl = null, this.defaultL10nId = "pdfjs-editor-signature-editor1";
    }
    static initialize(t2, e2) {
      Ut.initialize(t2, e2), this._defaultDrawingOptions = new sn(), this._defaultDrawnSignatureOptions = new nn(e2.viewParameters);
    }
    static getDefaultDrawingOptions(t2) {
      const e2 = this._defaultDrawingOptions.clone();
      return e2.updateProperties(t2), e2;
    }
    static get supportMultipleDrawings() {
      return false;
    }
    static get typesMap() {
      return M(this, "typesMap", /* @__PURE__ */ new Map());
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
      if (i2 && (this._isCopy = false, t2 = this.x, e2 = this.y), super.render(), null === this._drawId) if (this.#vl) {
        const { lines: t3, mustSmooth: e3, areContours: i3, description: s2, uuid: n2, heightInPage: r2 } = this.#vl, { rawDims: { pageWidth: a2, pageHeight: o2 }, rotation: l2 } = this.parent.viewport, h2 = en.processDrawnLines({ lines: t3, pageWidth: a2, pageHeight: o2, rotation: l2, innerMargin: rn._INNER_MARGIN, mustSmooth: e3, areContours: i3 });
        this.addSignature(h2, r2, s2, n2);
      } else this.div.setAttribute("data-l10n-args", JSON.stringify({ description: "" })), this.div.hidden = true, this._uiManager.getSignature(this);
      else this.div.setAttribute("data-l10n-args", JSON.stringify({ description: this.#bl || "" }));
      return i2 && (this._isCopy = true, this._moveAfterPaste(t2, e2)), this.div;
    }
    setUuid(t2) {
      this.#yl = t2, this.addEditToolbar();
    }
    getUuid() {
      return this.#yl;
    }
    get description() {
      return this.#bl;
    }
    set description(t2) {
      this.#bl = t2, this.div && (this.div.setAttribute("data-l10n-args", JSON.stringify({ description: t2 })), super.addEditToolbar().then((e2) => {
        e2?.updateEditSignatureButton(t2);
      }));
    }
    getSignaturePreview() {
      const { newCurves: t2, areContours: e2, thickness: i2, width: s2, height: n2 } = this.#vl, r2 = Math.max(s2, n2);
      return { areContours: e2, outline: en.processDrawnLines({ lines: { curves: t2.map((t3) => ({ points: t3 })), thickness: i2, width: s2, height: n2 }, pageWidth: r2, pageHeight: r2, rotation: 0, innerMargin: 0, mustSmooth: false, areContours: e2 }).outline };
    }
    get toolbarButtons() {
      return this._uiManager.signatureManager ? [["editSignature", this._uiManager.signatureManager]] : super.toolbarButtons;
    }
    addSignature(t2, e2, i2, s2) {
      const { x: n2, y: r2 } = this, { outline: a2 } = this.#vl = t2;
      let o2;
      this.#fl = a2 instanceof tn, this.description = i2, this.#fl ? o2 = rn.getDefaultDrawingOptions() : (o2 = rn._defaultDrawnSignatureOptions.clone(), o2.updateProperties({ "stroke-width": a2.thickness })), this._addOutlines({ drawOutlines: a2, drawingOptions: o2 });
      const [, l2] = this.pageDimensions;
      let h2 = e2 / l2;
      h2 = h2 >= 1 ? 0.5 : h2, this.width *= h2 / this.height, this.width >= 1 && (h2 *= 0.9 / this.width, this.width = 0.9), this.height = h2, this.setDims(), this.x = n2, this.y = r2, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(s2), this._reportTelemetry({ action: "pdfjs.signature.inserted", data: { hasBeenSaved: !!s2, hasDescription: !!i2 } }), this.div.hidden = false;
    }
    getFromImage(t2) {
      const { rawDims: { pageWidth: e2, pageHeight: i2 }, rotation: s2 } = this.parent.viewport;
      return en.process(t2, e2, i2, s2, rn._INNER_MARGIN);
    }
    getFromText(t2, e2) {
      const { rawDims: { pageWidth: i2, pageHeight: s2 }, rotation: n2 } = this.parent.viewport;
      return en.extractContoursFromText(t2, e2, i2, s2, n2, rn._INNER_MARGIN);
    }
    getDrawnSignature(t2) {
      const { rawDims: { pageWidth: e2, pageHeight: i2 }, rotation: s2 } = this.parent.viewport;
      return en.processDrawnLines({ lines: t2, pageWidth: e2, pageHeight: i2, rotation: s2, innerMargin: rn._INNER_MARGIN, mustSmooth: false, areContours: false });
    }
    createDrawingOptions({ areContours: t2, thickness: e2 }) {
      t2 ? this._drawingOptions = rn.getDefaultDrawingOptions() : (this._drawingOptions = rn._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({ "stroke-width": e2 }));
    }
    serialize(t2 = false) {
      if (this.isEmpty()) return null;
      const { lines: e2, points: i2 } = this.serializeDraw(t2), { _drawingOptions: { "stroke-width": s2 } } = this, n2 = Object.assign(super.serialize(t2), { isSignature: true, areContours: this.#fl, color: [0, 0, 0], thickness: this.#fl ? 0 : s2 });
      return this.addComment(n2), t2 ? (n2.paths = { lines: e2, points: i2 }, n2.uuid = this.#yl, n2.isCopy = true) : n2.lines = e2, this.#bl && (n2.accessibilityData = { type: "Figure", alt: this.#bl }), n2;
    }
    static deserializeDraw(t2, e2, i2, s2, n2, r2) {
      return r2.areContours ? tn.deserialize(t2, e2, i2, s2, n2, r2) : Qs.deserialize(t2, e2, i2, s2, n2, r2);
    }
    static async deserialize(t2, e2, i2) {
      const s2 = await super.deserialize(t2, e2, i2);
      return s2.#fl = t2.areContours, s2.description = t2.accessibilityData?.alt || "", s2.#yl = t2.uuid, s2;
    }
  }
  class an extends Ut {
    #wl = null;
    #xl = null;
    #Al = null;
    #_l = null;
    #Sl = null;
    #El = "";
    #Cl = null;
    #Tl = false;
    #Ml = null;
    #kl = false;
    #Dl = false;
    static _type = "stamp";
    static _editorType = d.STAMP;
    constructor(t2) {
      super({ ...t2, name: "stampEditor" }), this.#_l = t2.bitmapUrl, this.#Sl = t2.bitmapFile, this.defaultL10nId = "pdfjs-editor-stamp-editor";
    }
    static initialize(t2, e2) {
      Ut.initialize(t2, e2);
    }
    static isHandlingMimeForPasting(t2) {
      return ft.includes(t2);
    }
    static paste(t2, e2) {
      e2.pasteEditor({ mode: d.STAMP }, { bitmapFile: t2.getAsFile() });
    }
    altTextFinish() {
      this._uiManager.useNewAltTextFlow && (this.div.hidden = false), super.altTextFinish();
    }
    get telemetryFinalData() {
      return { type: "stamp", hasAltText: !!this.altTextData?.altText };
    }
    static computeTelemetryFinalData(t2) {
      const e2 = t2.get("hasAltText");
      return { hasAltText: e2.get(true) ?? 0, hasNoAltText: e2.get(false) ?? 0 };
    }
    #Pl(t2, e2 = false) {
      t2 ? (this.#wl = t2.bitmap, e2 || (this.#xl = t2.id, this.#kl = t2.isSvg), t2.file && (this.#El = t2.file.name), this.#Il()) : this.remove();
    }
    #Rl() {
      if (this.#Al = null, this._uiManager.enableWaiting(false), this.#Cl) if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#wl) this.addEditToolbar().then(() => {
        this._editToolbar.hide(), this._uiManager.editAltText(this, true);
      });
      else {
        if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#wl) {
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
      return await this.setGuessedAltText(o2), e2 && !this.hasAltTextData() && (this.altTextData = { alt: o2, decorative: false }), o2;
    }
    #Ll() {
      if (this.#xl) return this._uiManager.enableWaiting(true), void this._uiManager.imageManager.getFromId(this.#xl).then((t3) => this.#Pl(t3, true)).finally(() => this.#Rl());
      if (this.#_l) {
        const t3 = this.#_l;
        return this.#_l = null, this._uiManager.enableWaiting(true), void (this.#Al = this._uiManager.imageManager.getFromUrl(t3).then((t4) => this.#Pl(t4)).finally(() => this.#Rl()));
      }
      if (this.#Sl) {
        const t3 = this.#Sl;
        return this.#Sl = null, this._uiManager.enableWaiting(true), void (this.#Al = this._uiManager.imageManager.getFromFile(t3).then((t4) => this.#Pl(t4)).finally(() => this.#Rl()));
      }
      const t2 = document.createElement("input");
      t2.type = "file", t2.accept = ft.join(",");
      const e2 = this._uiManager._signal;
      this.#Al = new Promise((i2) => {
        t2.addEventListener("change", async () => {
          if (t2.files && 0 !== t2.files.length) {
            this._uiManager.enableWaiting(true);
            const e3 = await this._uiManager.imageManager.getFromFile(t2.files[0]);
            this._reportTelemetry({ action: "pdfjs.image.image_selected", data: { alt_text_modal: this._uiManager.useNewAltTextFlow } }), this.#Pl(e3);
          } else this.remove();
          i2();
        }, { signal: e2 }), t2.addEventListener("cancel", () => {
          this.remove(), i2();
        }, { signal: e2 });
      }).finally(() => this.#Rl()), t2.click();
    }
    remove() {
      this.#xl && (this.#wl = null, this._uiManager.imageManager.deleteId(this.#xl), this.#Cl?.remove(), this.#Cl = null, this.#Ml && (clearTimeout(this.#Ml), this.#Ml = null)), super.remove();
    }
    rebuild() {
      this.parent ? (super.rebuild(), null !== this.div && (this.#xl && null === this.#Cl && this.#Ll(), this.isAttachedToDOM || this.parent.add(this))) : this.#xl && this.#Ll();
    }
    onceAdded(t2) {
      this._isDraggable = true, t2 && this.div.focus();
    }
    isEmpty() {
      return !(this.#Al || this.#wl || this.#_l || this.#Sl || this.#xl || this.#Tl);
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
      return this._isCopy && (t2 = this.x, e2 = this.y), super.render(), this.div.hidden = true, this.createAltText(), this.#Tl || (this.#wl ? this.#Il() : this.#Ll()), this._isCopy && this._moveAfterPaste(t2, e2), this._uiManager.addShouldRescale(this), this.div;
    }
    setCanvas(t2, e2) {
      const { id: i2, bitmap: s2 } = this._uiManager.imageManager.getFromCanvas(t2, e2);
      e2.remove(), i2 && this._uiManager.imageManager.isValidId(i2) && (this.#xl = i2, s2 && (this.#wl = s2), this.#Tl = false, this.#Il());
    }
    _onResized() {
      this.onScaleChanging();
    }
    onScaleChanging() {
      this.parent && (null !== this.#Ml && clearTimeout(this.#Ml), this.#Ml = setTimeout(() => {
        this.#Ml = null, this.#Bl();
      }, 200));
    }
    #Il() {
      const { div: t2 } = this;
      let { width: e2, height: i2 } = this.#wl;
      const [s2, n2] = this.pageDimensions, r2 = 0.75;
      if (this.width) e2 = this.width * s2, i2 = this.height * n2;
      else if (e2 > r2 * s2 || i2 > r2 * n2) {
        const t3 = Math.min(r2 * s2 / e2, r2 * n2 / i2);
        e2 *= t3, i2 *= t3;
      }
      this._uiManager.enableWaiting(false);
      const a2 = this.#Cl = document.createElement("canvas");
      a2.setAttribute("role", "img"), this.addContainer(a2), this.width = e2 / s2, this.height = i2 / n2, this.setDims(), this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && !this.annotationElementId || (t2.hidden = false), this.#Bl(), this.#Dl || (this.parent.addUndoableEditor(this), this.#Dl = true), this._reportTelemetry({ action: "inserted_image" }), this.#El && this.div.setAttribute("aria-description", this.#El), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
    }
    copyCanvas(t2, e2, i2 = false) {
      t2 || (t2 = 224);
      const { width: s2, height: n2 } = this.#wl, r2 = new mt();
      let a2 = this.#wl, o2 = s2, l2 = n2, h2 = null;
      if (e2) {
        if (s2 > e2 || n2 > e2) {
          const t4 = Math.min(e2 / s2, e2 / n2);
          o2 = Math.floor(s2 * t4), l2 = Math.floor(n2 * t4);
        }
        h2 = document.createElement("canvas");
        const t3 = h2.width = Math.ceil(o2 * r2.sx), i3 = h2.height = Math.ceil(l2 * r2.sy);
        this.#kl || (a2 = this.#Fl(t3, i3));
        const c3 = h2.getContext("2d");
        c3.filter = this._uiManager.hcmFilter;
        let d2 = "white", u2 = "#cfcfd8";
        "none" !== this._uiManager.hcmFilter ? u2 = "black" : bt.isDarkMode && (d2 = "#8f8f9d", u2 = "#42414d");
        const p2 = 15, g2 = p2 * r2.sx, m2 = p2 * r2.sy, f2 = new OffscreenCanvas(2 * g2, 2 * m2), b2 = f2.getContext("2d");
        b2.fillStyle = d2, b2.fillRect(0, 0, 2 * g2, 2 * m2), b2.fillStyle = u2, b2.fillRect(0, 0, g2, m2), b2.fillRect(g2, m2, g2, m2), c3.fillStyle = c3.createPattern(f2, "repeat"), c3.fillRect(0, 0, t3, i3), c3.drawImage(a2, 0, 0, a2.width, a2.height, 0, 0, t3, i3);
      }
      let c2 = null;
      if (i2) {
        let e3, i3;
        if (r2.symmetric && a2.width < t2 && a2.height < t2) e3 = a2.width, i3 = a2.height;
        else if (a2 = this.#wl, s2 > t2 || n2 > t2) {
          const r3 = Math.min(t2 / s2, t2 / n2);
          e3 = Math.floor(s2 * r3), i3 = Math.floor(n2 * r3), this.#kl || (a2 = this.#Fl(e3, i3));
        }
        const o3 = new OffscreenCanvas(e3, i3).getContext("2d", { willReadFrequently: true });
        o3.drawImage(a2, 0, 0, a2.width, a2.height, 0, 0, e3, i3), c2 = { width: e3, height: i3, data: o3.getImageData(0, 0, e3, i3).data };
      }
      return { canvas: h2, width: o2, height: l2, imageData: c2 };
    }
    #Fl(t2, e2) {
      const { width: i2, height: s2 } = this.#wl;
      let n2 = i2, r2 = s2, a2 = this.#wl;
      for (; n2 > 2 * t2 || r2 > 2 * e2; ) {
        const i3 = n2, s3 = r2;
        n2 > 2 * t2 && (n2 = n2 >= 16384 ? Math.floor(n2 / 2) - 1 : Math.ceil(n2 / 2)), r2 > 2 * e2 && (r2 = r2 >= 16384 ? Math.floor(r2 / 2) - 1 : Math.ceil(r2 / 2));
        const o2 = new OffscreenCanvas(n2, r2);
        o2.getContext("2d").drawImage(a2, 0, 0, i3, s3, 0, 0, n2, r2), a2 = o2.transferToImageBitmap();
      }
      return a2;
    }
    #Bl() {
      const [t2, e2] = this.parentDimensions, { width: i2, height: s2 } = this, n2 = new mt(), r2 = Math.ceil(i2 * t2 * n2.sx), a2 = Math.ceil(s2 * e2 * n2.sy), o2 = this.#Cl;
      if (!o2 || o2.width === r2 && o2.height === a2) return;
      o2.width = r2, o2.height = a2;
      const l2 = this.#kl ? this.#wl : this.#Fl(r2, a2), h2 = o2.getContext("2d");
      h2.filter = this._uiManager.hcmFilter, h2.drawImage(l2, 0, 0, l2.width, l2.height, 0, 0, r2, a2);
    }
    #Ol(t2) {
      if (t2) {
        if (this.#kl) {
          const t4 = this._uiManager.imageManager.getSvgUrl(this.#xl);
          if (t4) return t4;
        }
        const t3 = document.createElement("canvas");
        return { width: t3.width, height: t3.height } = this.#wl, t3.getContext("2d").drawImage(this.#wl, 0, 0), t3.toDataURL();
      }
      if (this.#kl) {
        const [t3, e2] = this.pageDimensions, i2 = Math.round(this.width * t3 * Q.PDF_TO_CSS_UNITS), s2 = Math.round(this.height * e2 * Q.PDF_TO_CSS_UNITS), n2 = new OffscreenCanvas(i2, s2);
        return n2.getContext("2d").drawImage(this.#wl, 0, 0, this.#wl.width, this.#wl.height, 0, 0, i2, s2), n2.transferToImageBitmap();
      }
      return structuredClone(this.#wl);
    }
    static async deserialize(t2, e2, i2) {
      let s2 = null, n2 = false;
      if (t2 instanceof Bs) {
        const { data: { rect: r3, rotation: a3, id: o3, structParent: l3, popupRef: h3, richText: c3, contentsObj: u3, creationDate: p3, modificationDate: g3 }, container: m2, parent: { page: { pageNumber: f2 } }, canvas: b2 } = t2;
        let v2, y2;
        b2 ? (delete t2.canvas, { id: v2, bitmap: y2 } = i2.imageManager.getFromCanvas(m2.id, b2), b2.remove()) : (n2 = true, t2._hasNoCanvas = true);
        const w2 = (await e2._structTree.getAriaAttributes(`${G}${o3}`))?.get("aria-label") || "";
        s2 = t2 = { annotationType: d.STAMP, bitmapId: v2, bitmap: y2, pageIndex: f2 - 1, rect: r3.slice(0), rotation: a3, annotationElementId: o3, id: o3, deleted: false, accessibilityData: { decorative: false, altText: w2 }, isSvg: false, structParent: l3, popupRef: h3, richText: c3, comment: u3?.str || null, creationDate: p3, modificationDate: g3 };
      }
      const r2 = await super.deserialize(t2, e2, i2), { rect: a2, bitmap: o2, bitmapUrl: l2, bitmapId: h2, isSvg: c2, accessibilityData: u2 } = t2;
      n2 ? (i2.addMissingCanvas(t2.id, r2), r2.#Tl = true) : h2 && i2.imageManager.isValidId(h2) ? (r2.#xl = h2, o2 && (r2.#wl = o2)) : r2.#_l = l2, r2.#kl = c2;
      const [p2, g2] = r2.pageDimensions;
      return r2.width = (a2[2] - a2[0]) / p2, r2.height = (a2[3] - a2[1]) / g2, u2 && (r2.altTextData = u2), r2._initialData = s2, t2.comment && r2.setCommentData(t2), r2.#Dl = !!s2, r2;
    }
    serialize(t2 = false, e2 = null) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const i2 = Object.assign(super.serialize(t2), { bitmapId: this.#xl, isSvg: this.#kl });
      if (this.addComment(i2), t2) return i2.bitmapUrl = this.#Ol(true), i2.accessibilityData = this.serializeAltText(true), i2.isCopy = true, i2;
      const { decorative: s2, altText: n2 } = this.serializeAltText(false);
      if (!s2 && n2 && (i2.accessibilityData = { type: "Figure", alt: n2 }), this.annotationElementId) {
        const t3 = this.#xa(i2);
        return t3.isSame ? null : (t3.isSameAltText ? delete i2.accessibilityData : i2.accessibilityData.structParent = this._initialData.structParent ?? -1, i2.id = this.annotationElementId, delete i2.bitmapId, i2);
      }
      if (null === e2) return i2;
      e2.stamps ||= /* @__PURE__ */ new Map();
      const r2 = this.#kl ? (i2.rect[2] - i2.rect[0]) * (i2.rect[3] - i2.rect[1]) : null;
      if (e2.stamps.has(this.#xl)) {
        if (this.#kl) {
          const t3 = e2.stamps.get(this.#xl);
          r2 > t3.area && (t3.area = r2, t3.serialized.bitmap.close(), t3.serialized.bitmap = this.#Ol(false));
        }
      } else e2.stamps.set(this.#xl, { area: r2, serialized: i2 }), i2.bitmap = this.#Ol(false);
      return i2;
    }
    #xa(t2) {
      const { pageIndex: e2, accessibilityData: { altText: i2 } } = this._initialData, s2 = t2.pageIndex === e2, n2 = (t2.accessibilityData?.alt || "") === i2;
      return { isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && s2 && n2, isSameAltText: n2 };
    }
    renderAnnotationElement(t2) {
      return this.deleted ? (t2.hide(), null) : (t2.updateEdited({ rect: this.getPDFRect(), popup: this.comment }), null);
    }
  }
  class on {
    #na;
    #Nl = false;
    #Ul = null;
    #zl = null;
    #Hl = null;
    #jl = /* @__PURE__ */ new Map();
    #$l = false;
    #Vl = false;
    #Gl = false;
    #Wl = null;
    #ql = null;
    #Xl = null;
    #Yl = null;
    #Kl = null;
    #Ql = -1;
    #b;
    static _initialized = false;
    static #G = new Map([Us, Zs, an, qs, rn].map((t2) => [t2._editorType, t2]));
    constructor({ uiManager: t2, pageIndex: e2, div: i2, structTreeLayer: s2, accessibilityManager: n2, annotationLayer: r2, drawLayer: a2, textLayer: o2, viewport: l2, l10n: h2 }) {
      const c2 = [...on.#G.values()];
      if (!on._initialized) {
        on._initialized = true;
        for (const e3 of c2) e3.initialize(h2, t2);
      }
      t2.registerEditorTypes(c2), this.#b = t2, this.pageIndex = e2, this.div = i2, this.#na = n2, this.#Ul = r2, this.viewport = l2, this.#Xl = o2, this.drawLayer = a2, this._structTree = s2, this.#b.addLayer(this);
    }
    get isEmpty() {
      return 0 === this.#jl.size;
    }
    get isInvisible() {
      return this.isEmpty && this.#b.getMode() === d.NONE;
    }
    updateToolbar(t2) {
      this.#b.updateToolbar(t2);
    }
    updateMode(t2 = this.#b.getMode()) {
      switch (this.#Jl(), t2) {
        case d.NONE:
          return this.div.classList.toggle("nonEditing", true), this.disableTextSelection(), this.togglePointerEvents(false), this.toggleAnnotationLayerPointerEvents(true), void this.disableClick();
        case d.INK:
          this.disableTextSelection(), this.togglePointerEvents(true), this.enableClick();
          break;
        case d.HIGHLIGHT:
          this.enableTextSelection(), this.togglePointerEvents(false), this.disableClick();
          break;
        default:
          this.disableTextSelection(), this.togglePointerEvents(true), this.enableClick();
      }
      this.toggleAnnotationLayerPointerEvents(false);
      const { classList: e2 } = this.div;
      if (e2.toggle("nonEditing", false), t2 === d.POPUP) e2.toggle("commentEditing", true);
      else {
        e2.toggle("commentEditing", false);
        for (const i2 of on.#G.values()) e2.toggle(`${i2._type}Editing`, t2 === i2._editorType);
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
      return 0 !== this.#jl.size ? this.#jl.values() : this.#b.getEditors(this.pageIndex);
    }
    async enable() {
      this.#Gl = true, this.div.tabIndex = 0, this.togglePointerEvents(true), this.div.classList.toggle("nonEditing", false), this.#Kl?.abort(), this.#Kl = null;
      const t2 = /* @__PURE__ */ new Set();
      for (const e3 of this.#Zl) e3.enableEditing(), e3.show(true), e3.annotationElementId && (this.#b.removeChangedExistingAnnotation(e3), t2.add(e3.annotationElementId));
      const e2 = this.#Ul;
      if (e2) for (const i2 of e2.getEditableAnnotations()) {
        if (i2.hide(), this.#b.isDeletedAnnotationElement(i2.data.id)) continue;
        if (t2.has(i2.data.id)) continue;
        const e3 = await this.deserialize(i2);
        e3 && (this.addOrRebuild(e3), e3.enableEditing());
      }
      this.#Gl = false, this.#b._eventBus.dispatch("editorsrendered", { source: this, pageNumber: this.pageIndex + 1 });
    }
    disable() {
      if (this.#Vl = true, this.div.tabIndex = -1, this.togglePointerEvents(false), this.div.classList.toggle("nonEditing", true), this.#Xl && !this.#Kl) {
        this.#Kl = new AbortController();
        const t3 = this.#b.combinedSignal(this.#Kl);
        this.#Xl.div.addEventListener("pointerdown", (t4) => {
          const { clientX: e3, clientY: i2, timeStamp: s2 } = t4;
          if (s2 - this.#Ql > 500) return void (this.#Ql = s2);
          this.#Ql = -1;
          const { classList: n2 } = this.div;
          n2.toggle("getElements", true);
          const r2 = document.elementsFromPoint(e3, i2);
          if (n2.toggle("getElements", false), !this.div.contains(r2[0])) return;
          let a2;
          const o2 = new RegExp(`^${c}[0-9]+$`);
          for (const t5 of r2) if (o2.test(t5.id)) {
            a2 = t5.id;
            break;
          }
          if (!a2) return;
          const l2 = this.#jl.get(a2);
          null === l2?.annotationElementId && (t4.stopPropagation(), t4.preventDefault(), l2.dblclick(t4));
        }, { signal: t3, capture: true });
      }
      const t2 = this.#Ul;
      if (t2) {
        const e3 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map();
        for (const s3 of this.#Zl) s3.disableEditing(), s3.annotationElementId ? null === s3.serialize() ? (i2.set(s3.annotationElementId, s3), this.getEditableAnnotation(s3.annotationElementId)?.show(), s3.remove()) : e3.set(s3.annotationElementId, s3) : s3.updateFakeAnnotationElement(t2);
        const s2 = t2.getEditableAnnotations();
        for (const t3 of s2) {
          const { id: s3 } = t3.data;
          if (this.#b.isDeletedAnnotationElement(s3)) {
            t3.updateEdited({ deleted: true });
            continue;
          }
          let n2 = i2.get(s3);
          n2 ? (n2.resetAnnotationElement(t3), n2.show(false), t3.show()) : (n2 = e3.get(s3), n2 && (this.#b.addChangedExistingAnnotation(n2), n2.renderAnnotationElement(t3) && n2.show(false)), t3.show());
        }
      }
      this.#Jl(), this.isEmpty && (this.div.hidden = true);
      const { classList: e2 } = this.div;
      for (const t3 of on.#G.values()) e2.remove(`${t3._type}Editing`);
      this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(true), this.#Vl = false;
    }
    getEditableAnnotation(t2) {
      return this.#Ul?.getEditableAnnotation(t2) || null;
    }
    setActiveEditor(t2) {
      this.#b.getActive() !== t2 && this.#b.setActiveEditor(t2);
    }
    enableTextSelection() {
      if (this.div.tabIndex = -1, this.#Xl?.div && !this.#Yl) {
        this.#Yl = new AbortController();
        const t2 = this.#b.combinedSignal(this.#Yl);
        this.#Xl.div.addEventListener("pointerdown", this.#th.bind(this), { signal: t2 }), this.#Xl.div.classList.add("highlighting");
      }
    }
    disableTextSelection() {
      this.div.tabIndex = 0, this.#Xl?.div && this.#Yl && (this.#Yl.abort(), this.#Yl = null, this.#Xl.div.classList.remove("highlighting"));
    }
    #th(t2) {
      this.#b.unselectAll();
      const { target: e2 } = t2;
      if (e2 === this.#Xl.div || ("img" === e2.getAttribute("role") || e2.classList.contains("endOfContent")) && this.#Xl.div.contains(e2)) {
        const { isMac: e3 } = N.platform;
        if (0 !== t2.button || t2.ctrlKey && e3) return;
        this.#b.showAllEditors("highlight", true, true), this.#Xl.div.classList.add("free"), this.toggleDrawing(), qs.startHighlighting(this, "ltr" === this.#b.direction, { target: this.#Xl.div, x: t2.x, y: t2.y }), this.#Xl.div.addEventListener("pointerup", () => {
          this.#Xl.div.classList.remove("free"), this.toggleDrawing(true);
        }, { once: true, signal: this.#b._signal }), t2.preventDefault();
      }
    }
    enableClick() {
      if (this.#zl) return;
      this.#zl = new AbortController();
      const t2 = this.#b.combinedSignal(this.#zl);
      this.div.addEventListener("pointerdown", this.pointerdown.bind(this), { signal: t2 });
      const e2 = this.pointerup.bind(this);
      this.div.addEventListener("pointerup", e2, { signal: t2 }), this.div.addEventListener("pointercancel", e2, { signal: t2 });
    }
    disableClick() {
      this.#zl?.abort(), this.#zl = null;
    }
    attach(t2) {
      this.#jl.set(t2.id, t2);
      const { annotationElementId: e2 } = t2;
      e2 && this.#b.isDeletedAnnotationElement(e2) && this.#b.removeDeletedAnnotationElement(t2);
    }
    detach(t2) {
      this.#jl.delete(t2.id), this.#na?.removePointerInTextLayer(t2.contentDiv), !this.#Vl && t2.annotationElementId && this.#b.addDeletedAnnotationElement(t2);
    }
    remove(t2) {
      this.detach(t2), this.#b.removeEditor(t2), t2.div.remove(), t2.isAttachedToDOM = false;
    }
    changeParent(t2) {
      t2.parent !== this && (t2.parent && t2.annotationElementId && (this.#b.addDeletedAnnotationElement(t2.annotationElementId), Ut.deleteAnnotationElement(t2), t2.annotationElementId = null), this.attach(t2), t2.parent?.detach(t2), t2.setParent(this), t2.div && t2.isAttachedToDOM && (t2.div.remove(), this.div.append(t2.div)));
    }
    add(t2) {
      if (t2.parent !== this || !t2.isAttachedToDOM) {
        if (this.changeParent(t2), this.#b.addEditor(t2), this.attach(t2), !t2.isAttachedToDOM) {
          const e2 = t2.render();
          this.div.append(e2), t2.isAttachedToDOM = true;
        }
        t2.fixAndSetPosition(), t2.onceAdded(!this.#Gl), this.#b.addToAnnotationStorage(t2), t2._reportTelemetry(t2.telemetryInitialData);
      }
    }
    moveEditorInDOM(t2) {
      if (!t2.isAttachedToDOM) return;
      const { activeElement: e2 } = document;
      t2.div.contains(e2) && !this.#Hl && (t2._focusEventsAllowed = false, this.#Hl = setTimeout(() => {
        this.#Hl = null, t2.div.contains(document.activeElement) ? t2._focusEventsAllowed = true : (t2.div.addEventListener("focusin", () => {
          t2._focusEventsAllowed = true;
        }, { once: true, signal: this.#b._signal }), e2.focus());
      }, 0)), t2._structTreeParentId = this.#na?.moveElementInDOM(this.div, t2.div, t2.contentDiv, true);
    }
    addOrRebuild(t2) {
      t2.needsToBeRebuilt() ? (t2.parent ||= this, t2.rebuild(), t2.show()) : this.add(t2);
    }
    addUndoableEditor(t2) {
      this.addCommands({ cmd: () => t2._uiManager.rebuild(t2), undo: () => {
        t2.remove();
      }, mustExec: false });
    }
    getEditorByUID(t2) {
      for (const e2 of this.#jl.values()) if (e2.uid === t2) return e2;
      return null;
    }
    getNextId() {
      return this.#b.getId();
    }
    get #eh() {
      return on.#G.get(this.#b.getMode());
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
      this.updateToolbar(t2), await this.#b.updateMode(t2.mode);
      const { offsetX: i2, offsetY: s2 } = this.#sh(), n2 = this.getNextId(), r2 = this.#ih({ parent: this, id: n2, x: i2, y: s2, uiManager: this.#b, isCentered: true, ...e2 });
      r2 && this.add(r2);
    }
    async deserialize(t2) {
      return await on.#G.get(t2.annotationType ?? t2.annotationEditorType)?.deserialize(t2, this, this.#b) || null;
    }
    createAndAddNewEditor(t2, e2, i2 = {}) {
      const s2 = this.getNextId(), n2 = this.#ih({ parent: this, id: s2, x: t2.offsetX, y: t2.offsetY, uiManager: this.#b, isCentered: e2, ...i2 });
      return n2 && this.add(n2), n2;
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
      const { isMac: e2 } = N.platform;
      if (0 !== t2.button || t2.ctrlKey && e2) return;
      if (t2.target !== this.div) return;
      if (!this.#$l) return;
      if (this.#$l = false, this.#eh?.isDrawer && this.#eh.supportMultipleDrawings) return;
      if (!this.#Nl) return void (this.#Nl = true);
      const i2 = this.#b.getMode();
      i2 !== d.STAMP && i2 !== d.SIGNATURE ? this.createAndAddNewEditor(t2, false) : this.#b.unselectAll();
    }
    pointerdown(t2) {
      if (this.#b.getMode() === d.HIGHLIGHT && this.enableTextSelection(), this.#$l) return void (this.#$l = false);
      const { isMac: e2 } = N.platform;
      if (0 !== t2.button || t2.ctrlKey && e2) return;
      if (t2.target !== this.div) return;
      if (this.#$l = true, this.#eh?.isDrawer) return void this.startDrawingSession(t2);
      const i2 = this.#b.getActive();
      this.#Nl = !i2 || i2.isEmpty();
    }
    startDrawingSession(t2) {
      if (this.div.focus({ preventScroll: true }), this.#Wl) return void this.#eh.startDrawing(this, this.#b, false, t2);
      this.#b.setCurrentDrawingSession(this), this.#Wl = new AbortController();
      const e2 = this.#b.combinedSignal(this.#Wl);
      this.div.addEventListener("blur", ({ relatedTarget: t3 }) => {
        t3 && !this.div.contains(t3) && (this.#ql = null, this.commitOrRemove());
      }, { signal: e2 }), this.#eh.startDrawing(this, this.#b, false, t2);
    }
    pause(t2) {
      if (t2) {
        const { activeElement: t3 } = document;
        return void (this.div.contains(t3) && (this.#ql = t3));
      }
      this.#ql && setTimeout(() => {
        this.#ql?.focus(), this.#ql = null;
      }, 0);
    }
    endDrawingSession(t2 = false) {
      return this.#Wl ? (this.#b.setCurrentDrawingSession(null), this.#Wl.abort(), this.#Wl = null, this.#ql = null, this.#eh.endDrawing(t2)) : null;
    }
    findNewParent(t2, e2, i2) {
      const s2 = this.#b.findParent(e2, i2);
      return null !== s2 && s2 !== this && (s2.changeParent(t2), true);
    }
    commitOrRemove() {
      return !!this.#Wl && (this.endDrawingSession(), true);
    }
    onScaleChanging() {
      this.#Wl && this.#eh.onScaleChangingWhenDrawing(this);
    }
    destroy() {
      this.commitOrRemove(), this.#b.getActive()?.parent === this && (this.#b.commitOrRemove(), this.#b.setActiveEditor(null)), this.#Hl && (clearTimeout(this.#Hl), this.#Hl = null);
      for (const t2 of this.#jl.values()) this.#na?.removePointerInTextLayer(t2.contentDiv), t2.setParent(null), t2.isAttachedToDOM = false, t2.div.remove();
      this.div = null, this.#jl.clear(), this.#b.removeLayer(this);
    }
    #Jl() {
      for (const t2 of this.#jl.values()) t2.isEmpty() && t2.remove();
    }
    render({ viewport: t2 }) {
      this.viewport = t2, gt(this.div, t2);
      for (const t3 of this.#b.getEditors(this.pageIndex)) this.add(t3), t3.rebuild();
      this.updateMode();
    }
    update({ viewport: t2 }) {
      this.#b.commitOrRemove(), this.#Jl();
      const e2 = this.viewport.rotation, i2 = t2.rotation;
      if (this.viewport = t2, gt(this.div, { rotation: i2 }), e2 !== i2) for (const t3 of this.#jl.values()) t3.rotate(i2);
    }
    get pageDimensions() {
      const { pageWidth: t2, pageHeight: e2 } = this.viewport.rawDims;
      return [t2, e2];
    }
    get scale() {
      return this.#b.viewParameters.realScale;
    }
  }
  class ln {
    #Mr = null;
    #nh = /* @__PURE__ */ new Map();
    #rh = /* @__PURE__ */ new Map();
    static #x = 0;
    constructor({ pageIndex: t2 }) {
      this.pageIndex = t2;
    }
    setParent(t2) {
      if (this.#Mr) {
        if (this.#Mr !== t2) {
          if (this.#nh.size > 0) for (const e2 of this.#nh.values()) e2.remove(), t2.append(e2);
          this.#Mr = t2;
        }
      } else this.#Mr = t2;
    }
    static get _svgFactory() {
      return M(this, "_svgFactory", new as());
    }
    static #ah(t2, [e2, i2, s2, n2]) {
      const { style: r2 } = t2;
      r2.top = 100 * i2 + "%", r2.left = 100 * e2 + "%", r2.width = 100 * s2 + "%", r2.height = 100 * n2 + "%";
    }
    #oh() {
      const t2 = ln._svgFactory.create(1, 1, true);
      return this.#Mr.append(t2), t2.setAttribute("aria-hidden", true), t2;
    }
    #lh(t2, e2) {
      const i2 = ln._svgFactory.createElement("clipPath");
      t2.append(i2);
      const s2 = `clip_${e2}`;
      i2.setAttribute("id", s2), i2.setAttribute("clipPathUnits", "objectBoundingBox");
      const n2 = ln._svgFactory.createElement("use");
      return i2.append(n2), n2.setAttribute("href", `#${e2}`), n2.classList.add("clip"), s2;
    }
    #hh(t2, e2) {
      for (const [i2, s2] of Object.entries(e2)) null === s2 ? t2.removeAttribute(i2) : t2.setAttribute(i2, s2);
    }
    draw(t2, e2 = false, i2 = false) {
      const s2 = ln.#x++, n2 = this.#oh(), r2 = ln._svgFactory.createElement("defs");
      n2.append(r2);
      const a2 = ln._svgFactory.createElement("path");
      r2.append(a2);
      const o2 = `path_p${this.pageIndex}_${s2}`;
      a2.setAttribute("id", o2), a2.setAttribute("vector-effect", "non-scaling-stroke"), e2 && this.#rh.set(s2, a2);
      const l2 = i2 ? this.#lh(r2, o2) : null, h2 = ln._svgFactory.createElement("use");
      return n2.append(h2), h2.setAttribute("href", `#${o2}`), this.updateProperties(n2, t2), this.#nh.set(s2, n2), { id: s2, clipPathId: `url(#${l2})` };
    }
    drawOutline(t2, e2) {
      const i2 = ln.#x++, s2 = this.#oh(), n2 = ln._svgFactory.createElement("defs");
      s2.append(n2);
      const r2 = ln._svgFactory.createElement("path");
      n2.append(r2);
      const a2 = `path_p${this.pageIndex}_${i2}`;
      let o2;
      if (r2.setAttribute("id", a2), r2.setAttribute("vector-effect", "non-scaling-stroke"), e2) {
        const t3 = ln._svgFactory.createElement("mask");
        n2.append(t3), o2 = `mask_p${this.pageIndex}_${i2}`, t3.setAttribute("id", o2), t3.setAttribute("maskUnits", "objectBoundingBox");
        const e3 = ln._svgFactory.createElement("rect");
        t3.append(e3), e3.setAttribute("width", "1"), e3.setAttribute("height", "1"), e3.setAttribute("fill", "white");
        const s3 = ln._svgFactory.createElement("use");
        t3.append(s3), s3.setAttribute("href", `#${a2}`), s3.setAttribute("stroke", "none"), s3.setAttribute("fill", "black"), s3.setAttribute("fill-rule", "nonzero"), s3.classList.add("mask");
      }
      const l2 = ln._svgFactory.createElement("use");
      s2.append(l2), l2.setAttribute("href", `#${a2}`), o2 && l2.setAttribute("mask", `url(#${o2})`);
      const h2 = l2.cloneNode();
      return s2.append(h2), l2.classList.add("mainOutline"), h2.classList.add("secondaryOutline"), this.updateProperties(s2, t2), this.#nh.set(i2, s2), i2;
    }
    finalizeDraw(t2, e2) {
      this.#rh.delete(t2), this.updateProperties(t2, e2);
    }
    updateProperties(t2, e2) {
      if (!e2) return;
      const { root: i2, bbox: s2, rootClass: n2, path: r2 } = e2, a2 = "number" == typeof t2 ? this.#nh.get(t2) : t2;
      if (a2) {
        if (i2 && this.#hh(a2, i2), s2 && ln.#ah(a2, s2), n2) {
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
      i2 && (e2.#Mr.append(i2), this.#nh.delete(t2), e2.#nh.set(t2, i2));
    }
    remove(t2) {
      this.#rh.delete(t2), null !== this.#Mr && (this.#nh.get(t2).remove(), this.#nh.delete(t2));
    }
    destroy() {
      this.#Mr = null;
      for (const t2 of this.#nh.values()) t2.remove();
      this.#nh.clear(), this.#rh.clear();
    }
  }
  globalThis._pdfjsTestingUtils = { HighlightOutliner: $s }, globalThis.pdfjsLib = { AbortException: B, AnnotationEditorLayer: on, AnnotationEditorParamsType: u, AnnotationEditorType: d, AnnotationEditorUIManager: Bt, AnnotationLayer: Os, AnnotationMode: h, AnnotationType: m, applyOpacity: yt, build: Zi, ColorPicker: ts, createValidAbsoluteUrl: C, CSSConstants: vt, DOMSVGFactory: as, DrawLayer: ln, FeatureTest: N, fetchData: J, findContrastColor: Et, getDocument: $i, getFilenameFromUrl: st, getPdfFilenameFromUrl: nt, getRGB: dt, getUuid: V, getXfaPageViewport: ct, GlobalWorkerOptions: pi, ImageKind: g, InvalidPDFException: I, isDataScheme: et, isPdfFile: it, isValidExplicitDest: Jt, MathClamp: W, noContextMenu: ot, normalizeUnicode: $, OPS: b, OutputScale: mt, PasswordResponses: v, PDFDataRangeTransport: Gi, PDFDateString: ht, PDFWorker: Xi, PermissionFlag: p, PixelsPerInch: Q, RenderingCancelledException: tt, renderRichText: Ct, ResponseException: R, setLayerDimensions: gt, shadow: M, SignatureExtractor: en, stopEvent: lt, SupportedImageMimeTypes: ft, TextLayer: ji, TouchManager: Nt, updateUrlHash: T, Util: z, VerbosityLevel: f, version: Ji, XfaLayer: Y };
  class hn extends Error {
    constructor(t2, e2) {
      void 0 !== e2 ? super(t2 ?? "Invalid PDF", { cause: e2 }) : super(t2 ?? "Invalid PDF"), this.name = "InvalidPDFException", Object.setPrototypeOf(this, hn.prototype), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, hn);
    }
  }
  class cn extends Error {
    constructor(t2, e2) {
      void 0 !== e2 ? super(t2 ?? "Password required or incorrect", { cause: e2 }) : super(t2 ?? "Password required or incorrect"), this.name = "PasswordException", Object.setPrototypeOf(this, cn.prototype), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, cn);
    }
  }
  class dn extends Error {
    constructor(t2, e2) {
      void 0 !== e2 ? super(t2 ?? "PDF format error", { cause: e2 }) : super(t2 ?? "PDF format error"), this.name = "FormatError", Object.setPrototypeOf(this, dn.prototype), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, dn);
    }
  }
  class un extends Error {
    constructor(t2, e2, i2) {
      void 0 !== i2 ? super(t2 ?? "Unknown error", { cause: i2 }) : super(t2 ?? "Unknown error"), this.name = "UnknownErrorException", Object.setPrototypeOf(this, un.prototype), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, un), this.details = e2;
    }
  }
  class pn extends Error {
    constructor(t2, e2, i2, s2) {
      void 0 !== s2 ? super(t2 ?? "Response error", { cause: s2 }) : super(t2 ?? "Response error"), this.name = "ResponseException", Object.setPrototypeOf(this, pn.prototype), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, pn), this.status = e2, this.missing = i2;
    }
  }
  class gn extends Error {
    constructor(t2, e2) {
      void 0 !== e2 ? super(t2 ?? "Operation aborted", { cause: e2 }) : super(t2 ?? "Operation aborted"), this.name = "AbortException", Object.setPrototypeOf(this, gn.prototype), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, gn);
    }
  }
  class mn {
    static tolerance = 2;
    static applyTransform(t2, e2) {
      return [t2[0] * e2[0] + t2[1] * e2[2] + e2[4], t2[0] * e2[1] + t2[1] * e2[3] + e2[5]];
    }
  }
  class fn extends mn {
    x;
    y;
    constructor(t2, e2) {
      super(), this.x = t2, this.y = e2;
    }
    equal(t2) {
      return t2.x === this.x && t2.y === this.y;
    }
    transform(t2) {
      const e2 = mn.applyTransform([this.x, this.y], t2);
      return this.x = e2[0], this.y = e2[1], this;
    }
  }
  var bn;
  !(function(t2) {
    t2[t2.None = 0] = "None", t2[t2.Horizontal = 1] = "Horizontal", t2[t2.Vertical = 2] = "Vertical";
  })(bn || (bn = {}));
  class vn extends mn {
    from;
    to;
    direction = bn.None;
    length = 0;
    intersections = [];
    gaps = [];
    constructor(t2, e2) {
      super(), this.from = t2, this.to = e2, this.init();
    }
    init() {
      let t2 = this.from, e2 = this.to;
      if (Math.abs(t2.y - e2.y) < mn.tolerance) {
        if (this.direction = bn.Horizontal, e2.y = t2.y, t2.x > e2.x) {
          const i2 = t2;
          t2 = e2, e2 = i2;
        }
        this.length = e2.x - t2.x;
      } else if (Math.abs(t2.x - e2.x) < mn.tolerance) {
        if (this.direction = bn.Vertical, e2.x = t2.x, t2.y > e2.y) {
          const i2 = t2;
          t2 = e2, e2 = i2;
        }
        this.length = e2.y - t2.y;
      }
      this.from = t2, this.to = e2;
    }
    _valid = void 0;
    get valid() {
      return void 0 === this._valid && (this._valid = this.direction !== bn.None && this.length > mn.tolerance), this._valid;
    }
    get normalized() {
      return this.direction === bn.Horizontal ? new vn(new fn(this.from.x - mn.tolerance, this.from.y), new fn(this.to.x + mn.tolerance, this.from.y)) : this.direction === bn.Vertical ? new vn(new fn(this.from.x, this.from.y - mn.tolerance), new fn(this.from.x, this.to.y + mn.tolerance)) : this;
    }
    addGap(t2) {
      this.gaps.push(t2);
    }
    containsPoint(t2) {
      return this.direction === bn.Vertical ? this.from.x === t2.x && t2.y >= this.from.y && t2.y <= this.to.y : this.direction === bn.Horizontal && this.from.y === t2.y && t2.x >= this.from.x && t2.x <= this.to.x;
    }
    addIntersectionPoint(t2) {
      for (const e2 of this.intersections) if (e2.equal(t2)) return;
      this.intersections.push(t2);
    }
    intersection(t2) {
      let e2;
      if (!this.valid || !t2.valid) return e2;
      const i2 = this.normalized, s2 = t2.normalized;
      if (this.direction === bn.Horizontal && t2.direction === bn.Vertical) {
        const n2 = s2.from.x, r2 = i2.from.y;
        if (n2 > i2.from.x && n2 < i2.to.x && r2 > s2.from.y && r2 < s2.to.y) {
          const i3 = new fn(n2, r2);
          this.addIntersectionPoint(i3), t2.addIntersectionPoint(i3), e2 = i3;
        }
      } else if (this.direction === bn.Vertical && t2.direction === bn.Horizontal) {
        const n2 = i2.from.x, r2 = s2.from.y;
        if (n2 > s2.from.x && n2 < s2.to.x && r2 > i2.from.y && r2 < i2.to.y) {
          const i3 = new fn(n2, r2);
          this.addIntersectionPoint(i3), t2.addIntersectionPoint(i3), e2 = i3;
        }
      }
      return e2;
    }
    transform(t2) {
      const e2 = this.from.transform(t2), i2 = this.to.transform(t2), s2 = Math.min(e2.x, i2.x), n2 = Math.min(e2.y, i2.y), r2 = Math.abs(e2.x - i2.x), a2 = Math.abs(e2.y - i2.y);
      return this.from = new fn(s2, n2), this.to = new fn(s2 + r2, n2 + a2), this.init(), this;
    }
  }
  class yn {
    minXY;
    maxXY;
    rows;
    rowPivots;
    colPivots;
    constructor(t2, e2, i2, s2) {
      this.minXY = t2, this.maxXY = e2, this.rows = [], this.rowPivots = i2, this.colPivots = s2;
    }
    findCell(t2, e2) {
      if (t2 >= this.minXY.x && e2 >= this.minXY.y && t2 <= this.maxXY.x && e2 <= this.maxXY.y) {
        for (const i2 of this.rows) for (const s2 of i2) if (s2.minXY.x <= t2 && s2.minXY.y <= e2 && s2.maxXY.x >= t2 && s2.maxXY.y >= e2) return s2;
      }
    }
    get cellCount() {
      return this.rows.reduce((t2, e2) => t2 + e2.length, 0);
    }
    get rowCount() {
      return this.rows.length;
    }
    check() {
      const t2 = (this.colPivots.length - 1) * (this.rowPivots.length - 1);
      let e2 = 0;
      for (const t3 of this.rows) for (const i2 of t3) e2 += (i2.colspan || 1) * (i2.rowspan || 1);
      return t2 === e2;
    }
    toArray() {
      const t2 = [];
      for (const e2 of this.rows) {
        const i2 = [];
        for (const t3 of e2) {
          let e3 = t3.text.join("");
          e3 = e3.replace(/^[\s]+|[\s]+$/g, ""), e3 = e3.trim(), i2.push(e3);
        }
        t2.push(i2);
      }
      return t2;
    }
  }
  class wn {
    hLines = [];
    vLines = [];
    constructor(t2) {
      t2.direction === bn.Horizontal ? this.hLines.push(t2) : t2.direction === bn.Vertical && this.vLines.push(t2);
    }
    get isValid() {
      return this.hLines.length + this.vLines.length > 4;
    }
    get rowPivots() {
      const t2 = /* @__PURE__ */ new Set();
      for (const e2 of this.hLines) t2.add(e2.from.y);
      return [...t2].sort((t3, e2) => t3 - e2);
    }
    get colPivots() {
      const t2 = /* @__PURE__ */ new Set();
      for (const e2 of this.vLines) t2.add(e2.from.x);
      return [...t2].sort((t3, e2) => t3 - e2);
    }
    add(t2) {
      if (this.intersection(t2)) {
        if (t2.direction === bn.Horizontal) return this.hLines.push(t2), true;
        if (t2.direction === bn.Vertical) return this.vLines.push(t2), true;
      }
      return false;
    }
    intersection(t2) {
      let e2 = false;
      if (!t2.valid) return e2;
      if (t2.direction === bn.Horizontal) for (const i2 of this.vLines) t2.intersection(i2) && (e2 = true);
      else if (t2.direction === bn.Vertical) for (const i2 of this.hLines) t2.intersection(i2) && (e2 = true);
      return e2;
    }
    getSameHorizontal(t2) {
      const e2 = [t2], i2 = [];
      for (; this.hLines.length > 0; ) {
        const s2 = this.hLines.shift();
        s2 && (s2.from.y === t2.from.y ? e2.push(s2) : i2.push(s2));
      }
      return this.hLines = i2, e2;
    }
    getSameVertical(t2) {
      const e2 = [t2], i2 = [];
      for (; this.vLines.length > 0; ) {
        const s2 = this.vLines.shift();
        s2 && (s2.from.x === t2.from.x ? e2.push(s2) : i2.push(s2));
      }
      return this.vLines = i2, e2;
    }
    mergeHorizontalLines(t2) {
      t2.sort((t3, e3) => t3.from.x - e3.from.x);
      const e2 = t2[0].from.x, i2 = t2[t2.length - 1].to.x, s2 = new vn(new fn(e2, t2[0].from.y), new fn(i2, t2[0].from.y));
      for (let e3 = 1; e3 < t2.length; e3++) {
        const i3 = t2[e3 - 1], n2 = t2[e3];
        if (Math.abs(i3.to.x - n2.from.x) > mn.tolerance) {
          const t3 = new vn(new fn(i3.to.x, i3.from.y), new fn(n2.from.x, n2.from.y));
          s2.addGap(t3);
        }
      }
      return s2;
    }
    mergeVerticalLines(t2) {
      t2.sort((t3, e3) => t3.from.y - e3.from.y);
      const e2 = t2[0].from.y, i2 = t2[t2.length - 1].to.y, s2 = new vn(new fn(t2[0].from.x, e2), new fn(t2[0].from.x, i2));
      for (let e3 = 1; e3 < t2.length; e3++) {
        const i3 = t2[e3 - 1], n2 = t2[e3];
        if (Math.abs(i3.to.y - n2.from.y) > mn.tolerance) {
          const t3 = new vn(new fn(i3.to.x, i3.to.y), new fn(i3.to.x, n2.from.y));
          s2.addGap(t3);
        }
      }
      return s2;
    }
    normalize() {
      this.hLines = this.hLines.filter((t3) => t3.intersections.length > 1), this.vLines = this.vLines.filter((t3) => t3.intersections.length > 1), this.hLines.sort((t3, e3) => t3.from.y - e3.from.y), this.vLines.sort((t3, e3) => t3.from.x - e3.from.x);
      const t2 = [];
      for (; this.hLines.length > 0; ) {
        const e3 = this.hLines.shift();
        if (!e3) continue;
        const i2 = this.getSameHorizontal(e3), s2 = this.mergeHorizontalLines(i2);
        t2.push(s2);
      }
      this.hLines = t2;
      const e2 = [];
      for (; this.vLines.length > 0; ) {
        const t3 = this.vLines.shift();
        if (!t3) continue;
        const i2 = this.getSameVertical(t3), s2 = this.mergeVerticalLines(i2);
        e2.push(s2);
      }
      this.vLines = e2;
    }
    verticalExists(t2, e2, i2) {
      if (t2.direction !== bn.Vertical) throw new Error("Line is not vertical");
      if (e2 >= i2) throw new Error("y1 must be less than y2");
      if (t2.from.y <= e2 && t2.to.y >= i2) {
        for (const s2 of t2.gaps) if (s2.from.y <= e2 && s2.to.y >= i2) return false;
        return true;
      }
      return false;
    }
    horizontalExists(t2, e2, i2) {
      if (t2.direction !== bn.Horizontal) throw new Error("Line is not horizontal");
      if (e2 >= i2) throw new Error("x1 must be less than x2");
      if (t2.from.x <= e2 && t2.to.x >= i2) {
        for (const s2 of t2.gaps) if (s2.from.x <= e2 && s2.to.x >= i2) return false;
        return true;
      }
      return false;
    }
    findBottomLineIndex(t2, e2) {
      for (let i2 = t2; i2 < this.hLines.length; i2++) {
        const t3 = this.hLines[i2];
        if (t3.from.x <= e2 && t3.to.x >= e2) return i2;
      }
      return -1;
    }
    findVerticalLineIndexs(t2, e2) {
      const i2 = [];
      for (let s2 = 0; s2 < this.vLines.length; s2++) {
        const n2 = this.vLines[s2];
        n2.from.y <= e2 && n2.to.y >= e2 && t2.intersection(n2) && i2.push(s2);
      }
      return i2;
    }
    getRow(t2, e2, i2) {
      const s2 = [], n2 = this.hLines[t2], r2 = this.findVerticalLineIndexs(n2, i2);
      for (let i3 = 1; i3 < r2.length; i3++) {
        const a2 = this.vLines[r2[i3 - 1]], o2 = this.vLines[r2[i3]], l2 = (a2.from.x + o2.from.x) / 2, h2 = this.findBottomLineIndex(e2, l2), c2 = this.hLines[h2], d2 = { minXY: new fn(a2.from.x, n2.from.y), maxXY: new fn(o2.from.x, c2.from.y), width: o2.from.x - a2.from.x, height: c2.from.y - n2.from.y, text: [] }, u2 = r2[i3] - r2[i3 - 1], p2 = h2 - t2;
        u2 > 1 && (d2.colspan = u2), p2 > 1 && (d2.rowspan = p2), s2.push(d2);
      }
      return s2;
    }
    toData() {
      const t2 = this.rowPivots, e2 = this.colPivots, i2 = new fn(e2[0], t2[0]), s2 = new fn(e2[e2.length - 1], t2[t2.length - 1]), n2 = new yn(i2, s2, t2, e2);
      for (let t3 = 1; t3 < this.hLines.length; t3++) {
        const e3 = this.hLines[t3 - 1], i3 = this.hLines[t3], s3 = (e3.from.y + i3.from.y) / 2, r2 = this.getRow(t3 - 1, t3, s3);
        n2.rows.push(r2);
      }
      return n2;
    }
  }
  class xn {
    hLines = [];
    vLines = [];
    add(t2) {
      t2.valid && (t2.direction === bn.Horizontal ? this.hLines.push(t2) : t2.direction === bn.Vertical && this.vLines.push(t2));
    }
    addRectangle(t2) {
      for (const e2 of t2.getLines()) this.add(e2);
    }
    getTableData() {
      const t2 = [], e2 = this.getTables();
      for (const i2 of e2) {
        const e3 = i2.toData();
        e3 && t2.push(e3);
      }
      return t2;
    }
    getTables() {
      const t2 = [];
      for (; 0 !== this.hLines.length; ) {
        const e3 = this.hLines.shift();
        if (!e3) continue;
        if (this.tryFill(t2, e3)) continue;
        const i2 = new wn(e3);
        this.fillTable(i2), t2.push(i2);
      }
      for (; 0 !== this.vLines.length; ) {
        const e3 = this.vLines.shift();
        if (!e3) continue;
        if (this.tryFill(t2, e3)) continue;
        const i2 = new wn(e3);
        this.fillTable(i2), t2.push(i2);
      }
      const e2 = t2.filter((t3) => t3.isValid);
      for (const t3 of e2) t3.normalize();
      return e2;
    }
    normalize() {
      this.normalizeHorizontal(), this.normalizeVertical();
    }
    normalizeHorizontal() {
      this.hLines.sort((t3, e3) => t3.from.y - e3.from.y);
      const t2 = [];
      let e2 = [];
      for (const i2 of this.hLines) if (0 === e2.length) e2.push(i2);
      else if (Math.abs(e2[0]?.from.y - i2.from.y) < mn.tolerance) e2.push(i2);
      else {
        const s2 = this.margeHorizontalLines(e2);
        t2.push(...s2), e2 = [i2];
      }
      if (e2.length > 0) {
        const i2 = this.margeHorizontalLines(e2);
        t2.push(...i2);
      }
      this.hLines = t2;
    }
    normalizeVertical() {
      this.vLines.sort((t3, e3) => t3.from.x - e3.from.x);
      const t2 = [];
      let e2 = [];
      for (const i2 of this.vLines) if (0 === e2.length) e2.push(i2);
      else if (Math.abs(e2[0]?.from.x - i2.from.x) < mn.tolerance) e2.push(i2);
      else {
        const s2 = this.margeVerticalLines(e2);
        t2.push(...s2), e2 = [i2];
      }
      if (e2.length > 0) {
        const i2 = this.margeVerticalLines(e2);
        t2.push(...i2);
      }
      this.vLines = t2;
    }
    fillTable(t2) {
      const e2 = [], i2 = [];
      for (const i3 of this.vLines) t2.add(i3) || e2.push(i3);
      for (const e3 of this.hLines) t2.add(e3) || i2.push(e3);
      this.hLines = i2, this.vLines = e2;
    }
    tryFill(t2, e2) {
      for (const i2 of t2) if (i2.add(e2)) return this.fillTable(i2), true;
      return false;
    }
    margeHorizontalLines(t2) {
      const e2 = [];
      t2.sort((t3, e3) => t3.from.x - e3.from.x);
      const i2 = t2[0]?.from.y;
      if (void 0 === i2) return e2;
      let s2 = Number.MAX_SAFE_INTEGER, n2 = Number.MIN_SAFE_INTEGER;
      for (const r3 of t2) r3.from.x - n2 < mn.tolerance ? (r3.from.x < s2 && (s2 = r3.from.x), r3.to.x > n2 && (n2 = r3.to.x)) : (n2 > s2 && e2.push(new vn(new fn(s2, i2), new fn(n2, i2))), s2 = r3.from.x, n2 = r3.to.x);
      const r2 = e2[e2.length - 1];
      return r2 ? r2.from.x !== s2 && r2.to.x !== n2 && e2.push(new vn(new fn(s2, i2), new fn(n2, i2))) : e2.push(new vn(new fn(s2, i2), new fn(n2, i2))), e2;
    }
    margeVerticalLines(t2) {
      const e2 = [];
      t2.sort((t3, e3) => t3.from.y - e3.from.y);
      const i2 = t2[0]?.from.x;
      if (void 0 === i2) return e2;
      let s2 = Number.MAX_SAFE_INTEGER, n2 = Number.MIN_SAFE_INTEGER;
      for (const r3 of t2) r3.from.y - n2 < mn.tolerance ? (r3.from.y < s2 && (s2 = r3.from.y), r3.to.y > n2 && (n2 = r3.to.y)) : (n2 > s2 && e2.push(new vn(new fn(i2, s2), new fn(i2, n2))), s2 = r3.from.y, n2 = r3.to.y);
      const r2 = e2[e2.length - 1];
      return r2 ? r2.from.y !== s2 && r2.to.y !== n2 && e2.push(new vn(new fn(i2, s2), new fn(i2, n2))) : e2.push(new vn(new fn(i2, s2), new fn(i2, n2))), e2;
    }
  }
  class An extends mn {
    from;
    width;
    height;
    constructor(t2, e2, i2) {
      super(), this.from = t2, this.width = e2, this.height = i2;
    }
    get to() {
      return new fn(this.from.x + this.width, this.from.y + this.height);
    }
    getLines() {
      const t2 = this.to;
      return [new vn(this.from, new fn(t2.x, this.from.y)), new vn(this.from, new fn(this.from.x, t2.y)), new vn(new fn(t2.x, this.from.y), t2), new vn(new fn(this.from.x, t2.y), t2)].filter((t3) => t3.valid);
    }
    transform(t2) {
      const e2 = mn.applyTransform([this.from.x, this.from.y], t2), i2 = mn.applyTransform([this.from.x + this.width, this.from.y + this.height], t2), s2 = Math.min(e2[0], i2[0]), n2 = Math.min(e2[1], i2[1]), r2 = Math.abs(e2[0] - i2[0]), a2 = Math.abs(e2[1] - i2[1]);
      return this.from = new fn(s2, n2), this.width = r2, this.height = a2, this;
    }
  }
  class _n {
    pages = [];
    total = 0;
    getPageImage(t2, e2) {
      for (const i2 of this.pages) if (i2.pageNumber === t2) {
        for (const t3 of i2.images) if (t3.name === e2) return t3;
      }
      return null;
    }
    constructor(t2) {
      this.total = t2;
    }
  }
  const Sn = ["xmp:createdate", "xmp:modifydate", "xmp:metadatadate", "xap:createdate", "xap:modifydate", "xap:metadatadate"];
  class En {
    total;
    info;
    metadata;
    fingerprints;
    permission;
    outline;
    pages = [];
    getDateNode() {
      const t2 = {}, e2 = this.info?.CreationDate;
      e2 && (t2.CreationDate = ht.toDateObject(e2));
      const i2 = this.info?.ModDate;
      if (i2 && (t2.ModDate = ht.toDateObject(i2)), !this.metadata) return t2;
      for (const e3 of Sn) {
        const i3 = this.metadata?.get(e3), s2 = this.parseISODateString(i3);
        switch (e3) {
          case Sn[0]:
            t2.XmpCreateDate = s2;
            break;
          case Sn[1]:
            t2.XmpModifyDate = s2;
            break;
          case Sn[2]:
            t2.XmpMetadataDate = s2;
            break;
          case Sn[3]:
            t2.XapCreateDate = s2;
            break;
          case Sn[4]:
            t2.XapModifyDate = s2;
            break;
          case Sn[5]:
            t2.XapMetadataDate = s2;
        }
      }
      return t2;
    }
    parseISODateString(t2) {
      if (!t2) return;
      const e2 = Date.parse(t2);
      return Number.isNaN(e2) ? void 0 : new Date(e2);
    }
    constructor(t2) {
      this.total = t2;
    }
  }
  function Cn(t2) {
    return t2.lineThreshold = t2?.lineThreshold ?? 4.6, t2.cellThreshold = t2?.cellThreshold ?? 7, t2.cellSeparator = t2?.cellSeparator ?? "	", t2.lineEnforce = t2?.lineEnforce ?? true, t2.pageJoiner = t2?.pageJoiner ?? "\n-- page_number of total_number --", t2.imageThreshold = t2?.imageThreshold ?? 80, t2.imageDataUrl = t2?.imageDataUrl ?? true, t2.imageBuffer = t2?.imageBuffer ?? true, t2.scale = t2?.scale ?? 1, t2;
  }
  var Tn, Mn, kn;
  !(function(t2) {
    t2[t2[void 0] = 0] = "undefined", t2[t2.hline = 1] = "hline", t2[t2.vline = 2] = "vline", t2[t2.rectangle = 3] = "rectangle";
  })(Tn || (Tn = {})), (kn = Mn || (Mn = {}))[kn.moveTo = 0] = "moveTo", kn[kn.lineTo = 1] = "lineTo", kn[kn.curveTo = 2] = "curveTo", kn[kn.closePath = 3] = "closePath", kn[kn.rectangle = 4] = "rectangle";
  class Dn {
    pages = [];
    total = 0;
    constructor(t2) {
      this.total = t2;
    }
  }
  class Pn {
    pages = [];
    mergedTables = [];
    total = 0;
    constructor(t2) {
      this.total = t2;
    }
  }
  class In {
    pages = [];
    text = "";
    total = 0;
    getPageText(t2) {
      for (const e2 of this.pages) if (e2.num === t2) return e2.text;
      return "";
    }
    constructor(t2) {
      this.total = t2;
    }
  }
  class Rn {
    options;
    doc;
    progress = { loaded: -1, total: 0 };
    constructor(t2) {
      void 0 === t2.verbosity && (t2.verbosity = f.ERRORS), "undefined" != typeof Buffer && t2.data instanceof Buffer && (t2.data = new Uint8Array(t2.data)), this.options = t2;
    }
    async destroy() {
      this.doc && (await this.doc.destroy(), this.doc = void 0);
    }
    static get isNodeJS() {
      return !("object" != typeof process || "[object process]" != `${process}` || process.versions.nw || process.versions.electron && void 0 !== process.type && "browser" !== process.type);
    }
    static setWorker(t2) {
      return void 0 === globalThis.pdfjs && (globalThis.pdfjs = i), null === i?.GlobalWorkerOptions ? "" : void 0 !== t2 ? (pi.workerSrc = t2, pi.workerSrc) : pi.workerSrc;
    }
    async getInfo(t2 = {}) {
      const e2 = await this.load(), i2 = new En(e2.numPages), { info: s2, metadata: n2 } = await e2.getMetadata();
      i2.info = s2, i2.metadata = n2, i2.fingerprints = e2.fingerprints, i2.outline = await e2.getOutline(), i2.permission = await e2.getPermissions();
      const r2 = await e2.getPageLabels();
      if (t2.parsePageInfo) {
        for (let s3 = 1; s3 <= i2.total; s3++) if (this.shouldParse(s3, i2.total, t2)) {
          const t3 = await e2.getPage(s3), n3 = await this.getPageLinks(t3);
          n3.pageLabel = r2?.[t3.pageNumber], i2.pages.push(n3), t3.cleanup();
        }
      }
      return i2;
    }
    async getPageLinks(t2) {
      const e2 = t2.getViewport({ scale: 1 }), i2 = { pageNumber: t2.pageNumber, links: [], width: e2.width, height: e2.height }, s2 = await t2.getAnnotations({ intent: "display" }) || [];
      for (const t3 of s2) {
        if ("Link" !== t3.subtype) continue;
        const e3 = t3.url ?? t3.unsafeUrl;
        if (!e3) continue;
        const s3 = t3.overlaidText || "";
        i2.links.push({ url: e3, text: s3 });
      }
      return i2;
    }
    async getText(t2 = {}) {
      const e2 = await this.load(), i2 = new In(e2.numPages);
      for (let s2 = 1; s2 <= i2.total; s2++) if (this.shouldParse(s2, i2.total, t2)) {
        const n2 = await e2.getPage(s2), r2 = await this.getPageText(n2, t2, i2.total);
        i2.pages.push({ text: r2, num: s2 }), n2.cleanup();
      }
      for (const e3 of i2.pages) if (t2.pageJoiner) {
        let s2 = t2.pageJoiner.replace("page_number", `${e3.num}`);
        s2 = s2.replace("total_number", `${i2.total}`), i2.text += `${e3.text}
${s2}

`;
      } else i2.text += `${e3.text}

`;
      return i2;
    }
    async load() {
      try {
        if (void 0 === this.doc) {
          const t2 = $i(this.options);
          t2.onProgress = (t3) => {
            this.progress = t3;
          }, this.doc = await t2.promise;
        }
        return this.doc;
      } catch (t2) {
        throw (function(t3) {
          if (t3 instanceof Error) switch (t3.name) {
            case "InvalidPDFException":
              return new hn(t3.message, t3);
            case "PasswordException":
              return new cn(t3.message, t3);
            case "FormatError":
              return new dn(t3.message, t3);
            case "UnknownErrorException":
              return new un(t3.message, t3.details, t3);
            case "ResponseException":
              return new pn(t3.message, t3.status, t3.missing, t3);
            case "AbortException":
              return new gn(t3.message, t3);
            default:
              return t3;
          }
          return new Error(String(t3));
        })(t2);
      }
    }
    shouldParse(t2, e2, i2) {
      return i2.partial = i2?.partial ?? [], i2.first = i2?.first ?? 0, i2.last = i2?.last ?? 0, i2.partial.length > 0 ? !!i2.partial.includes(t2) : i2.first > 0 && i2.last > 0 ? t2 >= i2.first && t2 <= i2.last : i2.first > 0 ? t2 <= i2.first : !(i2.last > 0) || t2 > e2 - i2.last;
    }
    async getPageText(t2, e2, i2) {
      const s2 = t2.getViewport({ scale: 1 }), n2 = Cn(e2), r2 = await t2.getTextContent({ includeMarkedContent: !!n2.includeMarkedContent, disableNormalization: !!n2.disableNormalization });
      let a2 = /* @__PURE__ */ new Map();
      n2.parseHyperlinks && (a2 = await this.getHyperlinks(t2, s2));
      const o2 = [];
      let l2, h2, c2 = 0;
      for (const t3 of r2.items) {
        if (!("str" in t3)) continue;
        const e3 = t3.transform ?? t3.transform, [i3, r3] = s2.convertToViewportPoint(e3[4], e3[5]);
        if (n2.parseHyperlinks) {
          const e4 = (a2.get(t3.str) || []).find((t4) => i3 >= t4.rect.left && i3 <= t4.rect.right && r3 >= t4.rect.top && r3 <= t4.rect.bottom);
          e4 && (t3.str = `[${t3.str}](${e4.url})`);
        }
        if (n2.lineEnforce && void 0 !== h2 && Math.abs(h2 - r3) > n2.lineThreshold) {
          const e4 = o2.length ? o2[o2.length - 1] : void 0, i4 = t3.str.startsWith("\n") || "" === t3.str.trim() && t3.hasEOL;
          false !== e4?.endsWith("\n") || i4 || Math.abs(h2 - r3) - 1 > c2 && (o2.push("\n"), c2 = 0);
        }
        n2.cellSeparator && void 0 !== h2 && Math.abs(h2 - r3) < n2.lineThreshold && void 0 !== l2 && Math.abs(l2 - i3) > n2.cellThreshold && (t3.str = `${n2.cellSeparator}${t3.str}`), o2.push(t3.str), l2 = i3 + t3.width, h2 = r3, c2 = Math.max(c2, t3.height), t3.hasEOL && o2.push("\n"), (t3.hasEOL || t3.str.endsWith("\n")) && (c2 = 0);
      }
      return n2.itemJoiner ? o2.join(n2.itemJoiner) : o2.join("");
    }
    async getHyperlinks(t2, e2) {
      const i2 = /* @__PURE__ */ new Map(), s2 = await t2.getAnnotations({ intent: "display" }) || [];
      for (const t3 of s2) {
        if ("Link" !== t3.subtype) continue;
        const s3 = t3.url ?? t3.unsafeUrl;
        if (!s3) continue;
        const n2 = t3.overlaidText;
        if (!n2) continue;
        const r2 = e2.convertToViewportRectangle(t3.rect), a2 = { rect: { left: Math.min(r2[0], r2[2]) - 0.5, top: Math.min(r2[1], r2[3]) - 0.5, right: Math.max(r2[0], r2[2]) + 0.5, bottom: Math.max(r2[1], r2[3]) + 0.5 }, url: s3, text: n2, used: false }, o2 = i2.get(n2);
        o2 ? o2.push(a2) : i2.set(n2, [a2]);
      }
      return i2;
    }
    async getImage(t2 = {}) {
      const e2 = await this.load(), i2 = new _n(e2.numPages);
      Cn(t2);
      for (let s2 = 1; s2 <= i2.total; s2++) if (this.shouldParse(s2, i2.total, t2)) {
        const n2 = await e2.getPage(s2), r2 = await n2.getOperatorList(), a2 = { pageNumber: s2, images: [] };
        i2.pages.push(a2);
        for (let i3 = 0; i3 < r2.fnArray.length; i3++) if (r2.fnArray[i3] === b.paintInlineImageXObject || r2.fnArray[i3] === b.paintImageXObject) {
          const s3 = r2.argsArray[i3][0], o2 = n2.commonObjs.has(s3) ? this.resolveEmbeddedImage(n2.commonObjs, s3) : this.resolveEmbeddedImage(n2.objs, s3), { width: l2, height: h2, kind: c2, data: d2 } = await o2;
          if (t2.imageThreshold && (t2.imageThreshold >= l2 || t2.imageThreshold >= h2)) continue;
          const u2 = e2.canvasFactory.create(l2, h2), p2 = u2.context;
          let m2 = null;
          c2 === g.RGBA_32BPP ? (m2 = p2.createImageData(l2, h2), m2.data.set(d2)) : (m2 = p2.createImageData(l2, h2), this.convertToRGBA({ src: d2, dest: new Uint32Array(m2.data.buffer), width: l2, height: h2, kind: c2 })), p2.putImageData(m2, 0, 0);
          let f2 = new Uint8Array(), b2 = "";
          if ("function" == typeof u2.canvas.toBuffer) {
            let e3;
            t2.imageBuffer && (e3 = u2.canvas.toBuffer("image/png"), f2 = new Uint8Array(e3)), t2.imageDataUrl && (e3 || (e3 = u2.canvas.toBuffer("image/png"), f2 = new Uint8Array(e3)), b2 = `data:image/png;base64,${e3.toString("base64")}`);
          } else {
            if (t2.imageBuffer) {
              const t3 = u2.context.getImageData(0, 0, u2.canvas.width, u2.canvas.height);
              f2 = new Uint8Array(t3.data);
            }
            t2.imageDataUrl && (b2 = u2.canvas.toDataURL("image/png"));
          }
          a2.images.push({ data: f2, dataUrl: b2, name: s3, height: h2, width: l2, kind: c2 });
        }
      }
      return i2;
    }
    convertToRGBA({ src: t2, dest: e2, width: i2, height: s2, kind: n2 }) {
      if (n2 === g.RGB_24BPP) for (let i3 = 0, s3 = 0; i3 < t2.length; i3 += 3, s3++) {
        const n3 = t2[i3], r2 = t2[i3 + 1], a2 = t2[i3 + 2];
        e2[s3] = 255 << 24 | a2 << 16 | r2 << 8 | n3;
      }
      else if (n2 === g.GRAYSCALE_1BPP) {
        let n3 = 0;
        for (let r2 = 0; r2 < t2.length; r2++) {
          const a2 = t2[r2];
          for (let t3 = 7; t3 >= 0 && !(n3 >= i2 * s2); t3--) {
            const i3 = 1 == (a2 >> t3 & 1) ? 255 : 0;
            e2[n3++] = 255 << 24 | i3 << 16 | i3 << 8 | i3;
          }
        }
      } else {
        if (null != n2) throw new Error(`convertToRGBA: Unsupported image kind: ${n2}. Available kinds: GRAYSCALE_1BPP=${g.GRAYSCALE_1BPP}, RGB_24BPP=${g.RGB_24BPP}, RGBA_32BPP=${g.RGBA_32BPP}`);
        {
          const r2 = t2.length / (i2 * s2);
          if (Math.abs(r2 - 3) < 0.1) for (let i3 = 0, s3 = 0; i3 < t2.length; i3 += 3, s3++) {
            const n3 = t2[i3], r3 = t2[i3 + 1], a2 = t2[i3 + 2];
            e2[s3] = 255 << 24 | a2 << 16 | r3 << 8 | n3;
          }
          else if (Math.abs(r2 - 4) < 0.1) for (let i3 = 0, s3 = 0; i3 < t2.length; i3 += 4, s3++) {
            const n3 = t2[i3], r3 = t2[i3 + 1], a2 = t2[i3 + 2], o2 = t2[i3 + 3];
            e2[s3] = o2 << 24 | a2 << 16 | r3 << 8 | n3;
          }
          else {
            if (!(Math.abs(r2 - 1) < 0.1)) throw new Error(`convertToRGBA: Cannot infer image format. kind: ${n2}, bytesPerPixel: ${r2}, width: ${i2}, height: ${s2}, dataLength: ${t2.length}`);
            for (let i3 = 0; i3 < t2.length; i3++) {
              const s3 = t2[i3];
              e2[i3] = 255 << 24 | s3 << 16 | s3 << 8 | s3;
            }
          }
        }
      }
    }
    resolveEmbeddedImage(t2, e2) {
      return new Promise((i2, s2) => {
        t2.get(e2, (t3) => {
          if (t3) {
            let n2;
            if (t3.data instanceof Uint8Array) n2 = t3.data;
            else if (t3.data instanceof Uint8ClampedArray) n2 = new Uint8Array(t3.data);
            else if (t3.data?.buffer) n2 = new Uint8Array(t3.data.buffer);
            else if (t3.bitmap) {
              const e3 = this.doc.canvasFactory.create(t3.bitmap.width, t3.bitmap.height);
              e3.context.drawImage(t3.bitmap, 0, 0);
              const i3 = e3.context.getImageData(0, 0, t3.bitmap.width, t3.bitmap.height);
              n2 = new Uint8Array(i3.data.buffer);
            } else ArrayBuffer.isView(t3.data) && (n2 = new Uint8Array(t3.data.buffer, t3.data.byteOffset, t3.data.byteLength));
            if (!n2) return void s2(new Error(`Image object ${e2}: data field is empty or invalid. Available fields: ${Object.keys(t3).join(", ")}`));
            if (0 === n2.length) return void s2(new Error(`Image object ${e2}: data buffer is empty (length: 0)`));
            i2({ width: t3.width, height: t3.height, kind: t3.kind, data: n2 });
          } else s2(new Error(`Image object ${e2} not found`));
        });
      });
    }
    async getScreenshot(t2 = {}) {
      const e2 = Cn(t2), i2 = await this.load(), s2 = new Dn(i2.numPages);
      if (void 0 === this.doc) throw new Error("PDF document not loaded");
      for (let t3 = 1; t3 <= s2.total; t3++) if (this.shouldParse(t3, s2.total, e2)) {
        const i3 = await this.doc.getPage(t3);
        let n2 = i3.getViewport({ scale: e2.scale });
        if (e2.desiredWidth) {
          n2 = i3.getViewport({ scale: 1 });
          const t4 = e2.desiredWidth / n2.width;
          n2 = i3.getViewport({ scale: t4 });
        }
        const r2 = this.doc.canvasFactory.create(n2.width, n2.height), a2 = { canvasContext: r2.context, viewport: n2, canvas: r2.canvas }, o2 = i3.render(a2);
        await o2.promise;
        let l2 = new Uint8Array(), h2 = "";
        if ("function" == typeof r2.canvas.toBuffer) {
          let t4;
          e2.imageBuffer && (t4 = r2.canvas.toBuffer("image/png"), l2 = new Uint8Array(t4)), e2.imageDataUrl && (t4 || (t4 = r2.canvas.toBuffer("image/png"), l2 = new Uint8Array(t4)), h2 = `data:image/png;base64,${t4.toString("base64")}`);
        } else {
          if (e2.imageBuffer) {
            const t4 = r2.context.getImageData(0, 0, r2.canvas.width, r2.canvas.height);
            l2 = new Uint8Array(t4.data);
          }
          e2.imageDataUrl && (h2 = r2.canvas.toDataURL("image/png"));
        }
        s2.pages.push({ data: l2, dataUrl: h2, pageNumber: t3, width: n2.width, height: n2.height, scale: n2.scale }), i3.cleanup();
      }
      return s2;
    }
    async getTable(t2 = {}) {
      const e2 = await this.load(), i2 = new Pn(e2.numPages);
      if (void 0 === this.doc) throw new Error("PDF document not loaded");
      for (let e3 = 1; e3 <= i2.total; e3++) if (this.shouldParse(e3, i2.total, t2)) {
        const t3 = await this.doc.getPage(e3), s2 = await this.getPageTables(t3);
        s2.normalize();
        const n2 = s2.getTableData();
        await this.fillPageTables(t3, n2);
        const r2 = { num: e3, tables: [] };
        for (const t4 of n2) r2.tables.push(t4.toArray());
        i2.pages.push(r2), t3.cleanup();
      }
      return i2;
    }
    getPathGeometry(t2) {
      const e2 = t2[2] - t2[0], i2 = t2[3] - t2[1];
      return t2[0] === 1 / 0 ? Tn.undefined : e2 > 5 && i2 > 5 ? Tn.rectangle : e2 > 5 && 0 === i2 ? Tn.hline : 0 === e2 && i2 > 5 ? Tn.vline : Tn.undefined;
    }
    async getPageTables(t2) {
      const e2 = new xn(), i2 = t2.getViewport({ scale: 1 });
      let s2 = [1, 0, 0, 1, 0, 0];
      const n2 = [], r2 = await t2.getOperatorList();
      for (let t3 = 0; t3 < r2.fnArray.length; t3++) {
        const a2 = r2.fnArray[t3], o2 = r2.argsArray[t3], l2 = o2?.[0] ?? 0, h2 = o2?.[2] ?? [1 / 0, 1 / 0, -1 / 0, -1 / 0];
        if (a2 === b.constructPath) {
          if (b.fill, l2 !== b.stroke) continue;
          const t4 = this.getPathGeometry(h2);
          if (t4 === Tn.rectangle) {
            const t5 = new An(new fn(h2[0], h2[1]), h2[2] - h2[0], h2[3] - h2[1]);
            t5.transform(s2), t5.transform(i2.transform), e2.addRectangle(t5);
          } else if (t4 === Tn.hline || t4 === Tn.vline) {
            const t5 = new fn(h2[0], h2[1]), n3 = new fn(h2[2], h2[3]), r3 = new vn(t5, n3);
            r3.transform(s2), r3.transform(i2.transform), e2.add(r3);
          }
        } else if (a2 === b.setLineWidth) ;
        else if (a2 === b.save) n2.push(s2);
        else if (a2 === b.restore) {
          const t4 = n2.pop();
          t4 && (s2 = t4);
        } else a2 === b.transform && (s2 = z.transform(s2, o2));
      }
      return e2;
    }
    async fillPageTables(t2, e2) {
      const i2 = t2.getViewport({ scale: 1 }), s2 = await t2.getTextContent({ includeMarkedContent: false, disableNormalization: false });
      for (const t3 of s2.items) {
        if (!("str" in t3)) continue;
        const s3 = z.transform(z.transform(i2.transform, t3.transform), [1, 0, 0, -1, 0, 0]);
        for (const i3 of e2) {
          const e3 = i3.findCell(s3[4], s3[5]);
          if (e3) {
            e3.text.push(t3.str), t3.hasEOL && e3.text.push("\n");
            break;
          }
        }
      }
    }
  }
  async function Ln(t2) {
    const e2 = Buffer.isBuffer(t2.bytes) ? t2.bytes : Buffer.from(t2.bytes), i2 = new Rn({ data: e2 });
    try {
      const t3 = await i2.getText();
      return { text: "string" == typeof t3.text ? t3.text : "" };
    } finally {
      await i2.destroy();
    }
  }
  module.exports = e;
})();
