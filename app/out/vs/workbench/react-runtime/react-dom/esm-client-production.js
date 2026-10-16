!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6f52507c-7684-5f91-b30b-91c2991f0d4e");
  } catch (e2) {
  }
})();
import { require_react_dom as Qo } from "../chunk-SGXVKHUB.js";
import { __commonJS as Cf, require_react as Xo } from "../chunk-ORS33AAG.js";
var jo = Cf({ "scheduler.production.js"(K) {
  "use strict";
  function w(b, H) {
    var D = b.length;
    b.push(H);
    l: for (; 0 < D; ) {
      var k = D - 1 >>> 1, ul = b[k];
      if (0 < S(ul, H)) b[k] = H, b[D] = ul, D = k;
      else break l;
    }
  }
  function Ol(b) {
    return b.length === 0 ? null : b[0];
  }
  function pt(b) {
    if (b.length === 0) return null;
    var H = b[0], D = b.pop();
    if (D !== H) {
      b[0] = D;
      l: for (var k = 0, ul = b.length, Gl = ul >>> 1; k < Gl; ) {
        var Wt = 2 * (k + 1) - 1, ka = b[Wt], Ct = Wt + 1, Ft = b[Ct];
        if (0 > S(ka, D)) Ct < ul && 0 > S(Ft, ka) ? (b[k] = Ft, b[Ct] = D, k = Ct) : (b[k] = ka, b[Wt] = D, k = Wt);
        else if (Ct < ul && 0 > S(Ft, D)) b[k] = Ft, b[Ct] = D, k = Ct;
        else break l;
      }
    }
    return H;
  }
  function S(b, H) {
    var D = b.sortIndex - H.sortIndex;
    return D !== 0 ? D : b.id - H.id;
  }
  K.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function" ? (Wa = performance, K.unstable_now = function() {
    return Wa.now();
  }) : (_t = Date, Fa = _t.now(), K.unstable_now = function() {
    return _t.now() - Fa;
  });
  var Wa, _t, Fa, $l = [], et = [], Bf = 1, Al = null, Q = 3, nt = false, wt = false, $t = false, Iu = false, tl = typeof setTimeout == "function" ? setTimeout : null, Dt = typeof clearTimeout == "function" ? clearTimeout : null, ku = typeof setImmediate < "u" ? setImmediate : null;
  function Pu(b) {
    for (var H = Ol(et); H !== null; ) {
      if (H.callback === null) pt(et);
      else if (H.startTime <= b) pt(et), H.sortIndex = H.expirationTime, w($l, H);
      else break;
      H = Ol(et);
    }
  }
  function Ia(b) {
    if ($t = false, Pu(b), !wt) if (Ol($l) !== null) wt = true, Mt || (Mt = true, Yl());
    else {
      var H = Ol(et);
      H !== null && ua(Ia, H.startTime - b);
    }
  }
  var Mt = false, Ut = -1, Z = 5, We = -1;
  function Du() {
    return Iu ? true : !(K.unstable_now() - We < Z);
  }
  function Ht() {
    if (Iu = false, Mt) {
      var b = K.unstable_now();
      We = b;
      var H = true;
      try {
        l: {
          wt = false, $t && ($t = false, Dt(Ut), Ut = -1), nt = true;
          var D = Q;
          try {
            t: {
              for (Pu(b), Al = Ol($l); Al !== null && !(Al.expirationTime > b && Du()); ) {
                var k = Al.callback;
                if (typeof k == "function") {
                  Al.callback = null, Q = Al.priorityLevel;
                  var ul = k(Al.expirationTime <= b);
                  if (b = K.unstable_now(), typeof ul == "function") {
                    Al.callback = ul, Pu(b), H = true;
                    break t;
                  }
                  Al === Ol($l) && pt($l), Pu(b);
                } else pt($l);
                Al = Ol($l);
              }
              if (Al !== null) H = true;
              else {
                var Gl = Ol(et);
                Gl !== null && ua(Ia, Gl.startTime - b), H = false;
              }
            }
            break l;
          } finally {
            Al = null, Q = D, nt = false;
          }
          H = void 0;
        }
      } finally {
        H ? Yl() : Mt = false;
      }
    }
  }
  var Yl;
  typeof ku == "function" ? Yl = function() {
    ku(Ht);
  } : typeof MessageChannel < "u" ? (la = new MessageChannel(), ta = la.port2, la.port1.onmessage = Ht, Yl = function() {
    ta.postMessage(null);
  }) : Yl = function() {
    tl(Ht, 0);
  };
  var la, ta;
  function ua(b, H) {
    Ut = tl(function() {
      b(K.unstable_now());
    }, H);
  }
  K.unstable_IdlePriority = 5, K.unstable_ImmediatePriority = 1, K.unstable_LowPriority = 4, K.unstable_NormalPriority = 3, K.unstable_Profiling = null, K.unstable_UserBlockingPriority = 2, K.unstable_cancelCallback = function(b) {
    b.callback = null;
  }, K.unstable_forceFrameRate = function(b) {
    0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < b ? Math.floor(1e3 / b) : 5;
  }, K.unstable_getCurrentPriorityLevel = function() {
    return Q;
  }, K.unstable_next = function(b) {
    switch (Q) {
      case 1:
      case 2:
      case 3:
        var H = 3;
        break;
      default:
        H = Q;
    }
    var D = Q;
    Q = H;
    try {
      return b();
    } finally {
      Q = D;
    }
  }, K.unstable_requestPaint = function() {
    Iu = true;
  }, K.unstable_runWithPriority = function(b, H) {
    switch (b) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        b = 3;
    }
    var D = Q;
    Q = b;
    try {
      return H();
    } finally {
      Q = D;
    }
  }, K.unstable_scheduleCallback = function(b, H, D) {
    var k = K.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? k + D : k) : D = k, b) {
      case 1:
        var ul = -1;
        break;
      case 2:
        ul = 250;
        break;
      case 5:
        ul = 1073741823;
        break;
      case 4:
        ul = 1e4;
        break;
      default:
        ul = 5e3;
    }
    return ul = D + ul, b = { id: Bf++, callback: H, priorityLevel: b, startTime: D, expirationTime: ul, sortIndex: -1 }, D > k ? (b.sortIndex = D, w(et, b), Ol($l) === null && b === Ol(et) && ($t ? (Dt(Ut), Ut = -1) : $t = true, ua(Ia, D - k))) : (b.sortIndex = ul, w($l, b), wt || nt || (wt = true, Mt || (Mt = true, Yl()))), b;
  }, K.unstable_shouldYield = Du, K.unstable_wrapCallback = function(b) {
    var H = Q;
    return function() {
      var D = Q;
      Q = H;
      try {
        return b.apply(this, arguments);
      } finally {
        Q = D;
      }
    };
  };
} }), Zo = Cf({ "index.js"(K, w) {
  "use strict";
  w.exports = jo();
} }), Vo = Cf({ "react-dom-client.production.js"(K) {
  "use strict";
  var w = Zo(), Ol = Xo(), pt = Qo();
  function S(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++) t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Wa(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function _t(l) {
    for (var t = l, u = t; u && !u.alternate; ) t = u, (t.flags & 4098) !== 0 && (l = t.return), u = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? l : null;
  }
  function Fa(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function $l(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function et(l) {
    if (_t(l) !== l) throw Error(S(188));
  }
  function Bf(l) {
    var t = l.alternate;
    if (!t) {
      if (t = _t(l), t === null) throw Error(S(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return et(e), l;
          if (n === a) return et(e), t;
          n = n.sibling;
        }
        throw Error(S(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = false, c = e.child; c; ) {
          if (c === u) {
            f = true, u = e, a = n;
            break;
          }
          if (c === a) {
            f = true, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = true, u = n, a = e;
              break;
            }
            if (c === a) {
              f = true, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(S(189));
        }
      }
      if (u.alternate !== a) throw Error(S(190));
    }
    if (u.tag !== 3) throw Error(S(188));
    return u.stateNode.current === u ? l : t;
  }
  function Al(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = Al(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  function Q(l, t, u, a, e, n) {
    for (; l !== null; ) {
      if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && u(l, a, e, n) || (l.tag !== 22 || l.memoizedState === null) && (t || l.tag !== 5 && l.tag !== 27) && Q(l.child, t, u, a, e, n)) return true;
      l = l.sibling;
    }
    return false;
  }
  function nt(l) {
    for (l = l.return; l !== null; ) {
      if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
      l = l.return;
    }
    return null;
  }
  function wt(l) {
    var t = false;
    for (l = l.return; l !== null && (l.tag === 4 && (t = true), !(l.tag === 3 || l.tag === 5 || l.tag === 27)); ) l = l.return;
    return t;
  }
  function $t(l) {
    var t = [null, null], u = nt(l);
    return u === null || Iu(t, l, u.child, { foundSelf: false }), t;
  }
  function Iu(l, t, u, a) {
    for (; u !== null; ) {
      if (u === t) a.foundSelf = true;
      else if (u.tag === 5 || u.tag === 27 || u.tag === 6) {
        if (a.foundSelf) return l[1] = u, true;
        l[0] = u;
      } else if ((u.tag !== 22 || u.memoizedState === null) && Iu(l, t, u.child, a)) return true;
      u = u.sibling;
    }
    return false;
  }
  function tl(l) {
    switch (l.tag) {
      case 5:
      case 27:
      case 6:
        return l.stateNode;
      case 3:
        return l.stateNode.containerInfo;
      default:
        throw Error(S(559));
    }
  }
  var Dt = null, ku = null;
  function Pu(l, t, u) {
    return l === u ? true : l === t ? (Dt = l, true) : false;
  }
  function Ia(l, t, u) {
    return l === u ? (ku = l, false) : l === t ? (ku !== null && (Dt = l), true) : false;
  }
  function Mt(l) {
    if (l === null) return null;
    do
      l = l === null ? null : l.return;
    while (l && l.tag !== 5 && l.tag !== 27 && l.tag !== 3);
    return l || null;
  }
  function Ut(l, t, u) {
    for (var a = 0, e = l; e; e = u(e)) a++;
    e = 0;
    for (var n = t; n; n = u(n)) e++;
    for (; 0 < a - e; ) l = u(l), a--;
    for (; 0 < e - a; ) t = u(t), e--;
    for (; a--; ) {
      if (l === t || t !== null && l === t.alternate) return l;
      l = u(l), t = u(t);
    }
    return null;
  }
  var Z = Object.assign, We = /* @__PURE__ */ Symbol.for("react.element"), Du = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ht = /* @__PURE__ */ Symbol.for("react.portal"), Yl = /* @__PURE__ */ Symbol.for("react.fragment"), la = /* @__PURE__ */ Symbol.for("react.strict_mode"), ta = /* @__PURE__ */ Symbol.for("react.profiler"), ua = /* @__PURE__ */ Symbol.for("react.consumer"), b = /* @__PURE__ */ Symbol.for("react.context"), H = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), k = /* @__PURE__ */ Symbol.for("react.suspense_list"), ul = /* @__PURE__ */ Symbol.for("react.memo"), Gl = /* @__PURE__ */ Symbol.for("react.lazy");
  /* @__PURE__ */ Symbol.for("react.scope");
  var Wt = /* @__PURE__ */ Symbol.for("react.activity"), ka = /* @__PURE__ */ Symbol.for("react.legacy_hidden");
  /* @__PURE__ */ Symbol.for("react.tracing_marker");
  var Ct = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ft = /* @__PURE__ */ Symbol.for("react.view_transition"), Zy = /* @__PURE__ */ Symbol.for("react.recoverable"), dv = Symbol.iterator;
  function Pa(l) {
    return l === null || typeof l != "object" ? null : (l = dv && l[dv] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Vy = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Rf(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === Vy ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Yl:
        return "Fragment";
      case ta:
        return "Profiler";
      case la:
        return "StrictMode";
      case D:
        return "Suspense";
      case k:
        return "SuspenseList";
      case Wt:
        return "Activity";
      case Ft:
        return "ViewTransition";
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case Ht:
        return "Portal";
      case b:
        return l.displayName || "Context";
      case ua:
        return (l._context.displayName || "Context") + ".Consumer";
      case H:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case ul:
        return t = l.displayName || null, t !== null ? t : Rf(l.type) || "Memo";
      case Gl:
        t = l._payload, l = l._init;
        try {
          return Rf(l(t));
        } catch {
        }
    }
    return null;
  }
  var le = Array.isArray, _ = Ol.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Mu = { pending: false, data: null, method: null, action: null }, qf = [], aa = -1;
  function ht(l) {
    return { current: l };
  }
  function gl(l) {
    0 > aa || (l.current = qf[aa], qf[aa] = null, aa--);
  }
  function W(l, t) {
    aa++, qf[aa] = l.current, l.current = t;
  }
  var dt = ht(null), te = ht(null), It = ht(null), Fe = ht(null);
  function Ie(l, t) {
    switch (W(It, t), W(te, l), W(dt, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? $1(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = $1(t), l = W1(t, l);
        else switch (l) {
          case "svg":
            l = 1;
            break;
          case "math":
            l = 2;
            break;
          default:
            l = 0;
        }
    }
    gl(dt), W(dt, l);
  }
  function ea() {
    gl(dt), gl(te), gl(It);
  }
  function Yf(l) {
    var t = l.memoizedState;
    t !== null && (pa._currentValue = t.memoizedState, W(Fe, l)), t = dt.current;
    var u = W1(t, l.type);
    t !== u && (W(te, l), W(dt, u));
  }
  function ke(l) {
    te.current === l && (gl(dt), gl(te)), Fe.current === l && (gl(Fe), pa._currentValue = Mu);
  }
  var Gf, ov;
  function kt(l) {
    if (Gf === void 0) try {
      throw Error();
    } catch (u) {
      var t = u.stack.trim().match(/\n( *(at )?)/);
      Gf = t && t[1] || "", ov = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Gf + l + ov;
  }
  var Qf = false;
  function Xf(l, t) {
    if (!l || Qf) return "";
    Qf = true;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var T = function() {
              throw Error();
            };
            if (Object.defineProperty(T.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(T, []);
              } catch (s) {
                var m = s;
              }
              Reflect.construct(l, [], T);
            } else {
              try {
                T.call();
              } catch (s) {
                m = s;
              }
              T = false;
              try {
                var o = Object.getOwnPropertyDescriptor(l.prototype, "props");
                Object.defineProperty(l.prototype, "props", { configurable: true, set: function() {
                  throw Error();
                } }), T = true, new l();
              } finally {
                T && (o !== void 0 ? Object.defineProperty(l.prototype, "props", o) : delete l.prototype.props);
              }
            }
          } else {
            try {
              throw Error();
            } catch (s) {
              m = s;
            }
            (T = l()) && typeof T.catch == "function" && T.catch(function() {
            });
          }
        } catch (s) {
          if (s && m && typeof s.stack == "string") return [s.stack, m.stack];
        }
        return [null, null];
      } };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      e && e.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), h = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; e < h.length && !h[e].includes("DetermineComponentFrameRoot"); ) e++;
        if (a === i.length || e === h.length) for (a = i.length - 1, e = h.length - 1; 1 <= a && 0 <= e && i[a] !== h[e]; ) e--;
        for (; 1 <= a && 0 <= e; a--, e--) if (i[a] !== h[e]) {
          if (a !== 1 || e !== 1) do
            if (a--, e--, 0 > e || i[a] !== h[e]) {
              var g = `
` + i[a].replace(" at new ", " at ");
              return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
            }
          while (1 <= a && 0 <= e);
          break;
        }
      }
    } finally {
      Qf = false, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? kt(u) : "";
  }
  function Ky(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return kt(l.type);
      case 16:
        return kt("Lazy");
      case 13:
        return l.child !== t && t !== null ? kt("Suspense Fallback") : kt("Suspense");
      case 19:
        return kt("SuspenseList");
      case 0:
      case 15:
        return Xf(l.type, false);
      case 11:
        return Xf(l.type.render, false);
      case 1:
        return Xf(l.type, true);
      case 31:
        return kt("Activity");
      case 30:
        return kt("ViewTransition");
      default:
        return "";
    }
  }
  function gv(l) {
    try {
      var t = "", u = null;
      do
        t += Ky(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var jf = Object.prototype.hasOwnProperty, Zf = w.unstable_scheduleCallback, Vf = w.unstable_cancelCallback, xy = w.unstable_shouldYield, Ly = w.unstable_requestPaint, Ql = w.unstable_now, Jy = w.unstable_getCurrentPriorityLevel, Sv = w.unstable_ImmediatePriority, zv = w.unstable_UserBlockingPriority, Pe = w.unstable_NormalPriority, py = w.unstable_LowPriority, Tv = w.unstable_IdlePriority, wy = w.log, $y = w.unstable_setDisableYieldValue, ue = null, Xl = null;
  function Pt(l) {
    if (typeof wy == "function" && $y(l), Xl && typeof Xl.setStrictMode == "function") try {
      Xl.setStrictMode(ue, l);
    } catch {
    }
  }
  var jl = Math.clz32 ? Math.clz32 : Iy, Wy = Math.log, Fy = Math.LN2;
  function Iy(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Wy(l) / Fy | 0) | 0;
  }
  var ln = 256, tn = 262144, un = 4194304;
  function Uu(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & -l;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function an(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = Uu(a) : (f &= c, f !== 0 ? e = Uu(f) : u || (u = c & ~l, u !== 0 && (e = Uu(u))))) : (c = a & ~n, c !== 0 ? e = Uu(c) : f !== 0 ? e = Uu(f) : u || (u = a & ~l, u !== 0 && (e = Uu(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function ae(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function sv(l, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0) for (l = l.entanglements, u &= t; 0 < u; ) {
      var a = 31 - jl(u), e = 1 << a;
      t |= l[a], u &= ~e;
    }
    return t;
  }
  function ky(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bv() {
    var l = un;
    return un <<= 1, (un & 62914560) === 0 && (un = 4194304), l;
  }
  function Kf(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function ee(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Py(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, h = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var g = 31 - jl(u), T = 1 << g;
      c[g] = 0, i[g] = -1;
      var m = h[g];
      if (m !== null) for (h[g] = null, g = 0; g < m.length; g++) {
        var o = m[g];
        o !== null && (o.lane &= -536870913);
      }
      u &= ~T;
    }
    a !== 0 && Ev(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function Ev(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - jl(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function Ov(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - jl(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Nv(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : xf(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function xf(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Lf(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Av() {
    var l = X.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Ry(l.type));
  }
  function _v(l, t) {
    var u = X.p;
    try {
      return X.p = l, t();
    } finally {
      X.p = u;
    }
  }
  var rt = Math.random().toString(36).slice(2), Sl = "__reactFiber$" + rt, Hl = "__reactProps$" + rt, na = "__reactContainer$" + rt, Dv = "__reactEvents$" + rt, lh = "__reactListeners$" + rt, th = "__reactHandles$" + rt, Mv = "__reactResources$" + rt, ne = "__reactMarker$" + rt, en = "__reactLoad$" + rt;
  function nn(l) {
    delete l[Sl], delete l[Hl], delete l[lh], delete l[th];
  }
  function Hu(l) {
    var t;
    if (t = l[Sl]) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[na] || u[Sl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null) for (l = dy(l); l !== null; ) {
          if (u = l[Sl]) return u;
          l = dy(l);
        }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function fa(l) {
    if (l = l[Sl] || l[na]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function fe(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(S(33));
  }
  function ca(l) {
    var t = l[Mv];
    return t || (t = l[Mv] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function yl(l) {
    l[ne] = true;
  }
  function Uv(l) {
    l[en] = void 0;
  }
  var Hv = /* @__PURE__ */ new Set(), Cv = {};
  function Cu(l, t) {
    ia(l, t), ia(l + "Capture", t);
  }
  function ia(l, t) {
    for (Cv[l] = t, l = 0; l < t.length; l++) Hv.add(t[l]);
  }
  var uh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), rv = {}, Bv = {};
  function ah(l) {
    return jf.call(Bv, l) ? true : jf.call(rv, l) ? false : uh.test(l) ? Bv[l] = true : (rv[l] = true, false);
  }
  var G = false;
  function Rv() {
    var l = G;
    return G = false, l;
  }
  function fn(l, t, u) {
    if (ah(t)) if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
          l.removeAttribute(t);
          return;
        case "boolean":
          var a = t.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            l.removeAttribute(t);
            return;
          }
      }
      l.setAttribute(t, u);
    }
  }
  function cn(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, u);
    }
  }
  function Bt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, a);
    }
  }
  function Zl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function qv(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function eh(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(l, t, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(f) {
        u = "" + f, n.call(this, f);
      } }), Object.defineProperty(l, t, { enumerable: a.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(f) {
        u = "" + f;
      }, stopTracking: function() {
        l._valueTracker = null, delete l[t];
      } };
    }
  }
  function Jf(l) {
    if (!l._valueTracker) {
      var t = qv(l) ? "checked" : "value";
      l._valueTracker = eh(l, t, "" + l[t]);
    }
  }
  function Yv(l) {
    if (!l) return false;
    var t = l._valueTracker;
    if (!t) return true;
    var u = t.getValue(), a = "";
    return l && (a = qv(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), true) : false;
  }
  var nh = /[\n"\\]/g;
  function Wl(l) {
    return l.replace(nh, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function pf(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + Zl(t)) : l.value !== "" + Zl(t) && (l.value = "" + Zl(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? f === "number" && l.value == t ? wf(l, Zl(l.value)) : wf(l, Zl(t)) : u != null ? wf(l, Zl(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + Zl(c) : l.removeAttribute("name");
  }
  function Gv(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        Jf(l);
        return;
      }
      u = u != null ? "" + Zl(u) : "", t = t != null ? "" + Zl(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), Jf(l);
  }
  function wf(l, t) {
    l.defaultValue !== "" + t && (l.defaultValue = "" + t);
  }
  function va(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++) t["$" + u[e]] = true;
      for (u = 0; u < l.length; u++) e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = true);
    } else {
      for (u = "" + Zl(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = true, a && (l[e].defaultSelected = true);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Qv(l, t, u) {
    if (t != null && (t = "" + Zl(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + Zl(u) : "";
  }
  function Xv(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(S(92));
        if (le(a)) {
          if (1 < a.length) throw Error(S(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = Zl(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), Jf(l);
  }
  function ma(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var fh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function jv(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || fh.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Zv(l, t, u) {
    if (t != null && typeof t != "object") throw Error(S(62));
    if (l = l.style, u != null) {
      for (var a in u) !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "", G = true);
      for (var e in t) a = t[e], t.hasOwnProperty(e) && u[e] !== a && (jv(l, e, a), G = true);
    } else for (var n in t) t.hasOwnProperty(n) && jv(l, n, t[n]);
  }
  function $f(l) {
    if (l.indexOf("-") === -1) return false;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var ch = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["maskType", "mask-type"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), ih = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function vn(l) {
    return ih.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function ot() {
  }
  var Wf = null;
  function Ff(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var ya = null, ha = null;
  function Vv(l) {
    var t = fa(l);
    if (t && (l = t.stateNode)) {
      var u = l[Hl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (pf(l, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll('input[name="' + Wl("" + t) + '"][type="radio"]'), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Hl] || null;
                if (!e) throw Error(S(90));
                pf(a, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name);
              }
            }
            for (t = 0; t < u.length; t++) a = u[t], a.form === l.form && Yv(a);
          }
          break l;
        case "textarea":
          Qv(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && va(l, !!u.multiple, t, false);
      }
    }
  }
  var If = false;
  function Kv(l, t, u) {
    if (If) return l(t, u);
    If = true;
    try {
      var a = l(t);
      return a;
    } finally {
      if (If = false, (ya !== null || ha !== null) && (yf(), ya && (t = ya, l = ha, ha = ya = null, Vv(t), l))) for (t = 0; t < l.length; t++) Vv(l[t]);
    }
  }
  function ce(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Hl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = false;
    }
    if (l) return null;
    if (u && typeof u != "function") throw Error(S(231, t, typeof u));
    return u;
  }
  var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), kf = false;
  if (Rt) try {
    da = {}, Object.defineProperty(da, "passive", { get: function() {
      kf = true;
    } }), window.addEventListener("test", da, da), window.removeEventListener("test", da, da);
  } catch {
    kf = false;
  }
  var da, lu = null, Pf = null, mn = null;
  function xv() {
    if (mn) return mn;
    var l, t = Pf, u = t.length, a, e = "value" in lu ? lu.value : lu.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return mn = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function yn(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function hn() {
    return true;
  }
  function Lv() {
    return false;
  }
  function _l(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l) l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? hn : Lv, this.isPropagationStopped = Lv, this;
    }
    return Z(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = false), this.isDefaultPrevented = hn);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = true), this.isPropagationStopped = hn);
    }, persist: function() {
    }, isPersistent: hn }), t;
  }
  var tu = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(l) {
    return l.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, dn = _l(tu), ie = Z({}, tu, { view: 0, detail: 0 }), vh = _l(ie), lc, tc, ve, on = Z({}, ie, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ac, button: 0, buttons: 0, relatedTarget: function(l) {
    return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
  }, movementX: function(l) {
    return "movementX" in l ? l.movementX : (l !== ve && (ve && l.type === "mousemove" ? (lc = l.screenX - ve.screenX, tc = l.screenY - ve.screenY) : tc = lc = 0, ve = l), lc);
  }, movementY: function(l) {
    return "movementY" in l ? l.movementY : tc;
  } }), Jv = _l(on), mh = Z({}, on, { dataTransfer: 0 }), yh = _l(mh), hh = Z({}, ie, { relatedTarget: 0 }), uc = _l(hh), dh = Z({}, tu, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oh = _l(dh), gh = Z({}, tu, { clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  } }), Sh = _l(gh), zh = Z({}, tu, { data: 0 }), pv = _l(zh), Th = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, sh = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, bh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Eh(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = bh[l]) ? !!t[l] : false;
  }
  function ac() {
    return Eh;
  }
  var Oh = Z({}, ie, { key: function(l) {
    if (l.key) {
      var t = Th[l.key] || l.key;
      if (t !== "Unidentified") return t;
    }
    return l.type === "keypress" ? (l = yn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? sh[l.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ac, charCode: function(l) {
    return l.type === "keypress" ? yn(l) : 0;
  }, keyCode: function(l) {
    return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  }, which: function(l) {
    return l.type === "keypress" ? yn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  } }), Nh = _l(Oh), Ah = Z({}, on, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wv = _l(Ah), _h = Z({}, tu, { submitter: 0 }), Dh = _l(_h), Mh = Z({}, ie, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ac }), Uh = _l(Mh), Hh = Z({}, tu, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ch = _l(Hh), rh = Z({}, on, { deltaX: function(l) {
    return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
  }, deltaY: function(l) {
    return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Bh = _l(rh), Rh = Z({}, tu, { newState: 0, oldState: 0, source: 0 }), qh = _l(Rh), Yh = [9, 13, 27, 32], ec = Rt && "CompositionEvent" in window, me = null;
  Rt && "documentMode" in document && (me = document.documentMode);
  var Gh = Rt && "TextEvent" in window && !me, $v = Rt && (!ec || me && 8 < me && 11 >= me), Wv = " ", Fv = false;
  function Iv(l, t) {
    switch (l) {
      case "keyup":
        return Yh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function kv(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var oa = false;
  function Qh(l, t) {
    switch (l) {
      case "compositionend":
        return kv(t);
      case "keypress":
        return t.which !== 32 ? null : (Fv = true, Wv);
      case "textInput":
        return l = t.data, l === Wv && Fv ? null : l;
      default:
        return null;
    }
  }
  function Xh(l, t) {
    if (oa) return l === "compositionend" || !ec && Iv(l, t) ? (l = xv(), mn = Pf = lu = null, oa = false, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return $v && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var jh = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Pv(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!jh[l.type] : t === "textarea";
  }
  function l0(l, t, u, a) {
    ya ? ha ? ha.push(a) : ha = [a] : ya = a, t = sf(t, "onChange"), 0 < t.length && (u = new dn("onChange", "change", null, u, a), l.push({ event: u, listeners: t }));
  }
  var ye = null, he = null;
  function Zh(l) {
    K1(l, 0);
  }
  function gn(l) {
    var t = fe(l);
    if (Yv(t)) return l;
  }
  function t0(l, t) {
    if (l === "change") return t;
  }
  var u0 = false;
  Rt && (Rt ? (Sn = "oninput" in document, Sn || (fc = document.createElement("div"), fc.setAttribute("oninput", "return;"), Sn = typeof fc.oninput == "function"), nc = Sn) : nc = false, u0 = nc && (!document.documentMode || 9 < document.documentMode));
  var nc, Sn, fc;
  function a0() {
    ye && (ye.detachEvent("onpropertychange", e0), he = ye = null);
  }
  function e0(l) {
    if (l.propertyName === "value" && gn(he)) {
      var t = [];
      l0(t, he, l, Ff(l)), Kv(Zh, t);
    }
  }
  function Vh(l, t, u) {
    l === "focusin" ? (a0(), ye = t, he = u, ye.attachEvent("onpropertychange", e0)) : l === "focusout" && a0();
  }
  function Kh(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return gn(he);
  }
  function xh(l, t) {
    if (l === "click") return gn(t);
  }
  function Lh(l, t) {
    if (l === "input" || l === "change") return gn(t);
  }
  function Jh(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Vl = typeof Object.is == "function" ? Object.is : Jh;
  function de(l, t) {
    if (Vl(l, t)) return true;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return false;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return false;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!jf.call(t, e) || !Vl(l[e], t[e])) return false;
    }
    return true;
  }
  function cc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  function n0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function f0(l, t) {
    var u = n0(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t) return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = n0(u);
    }
  }
  function c0(l, t) {
    return l && t ? l === t ? true : l && l.nodeType === 3 ? false : t && t.nodeType === 3 ? c0(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : false : false;
  }
  function i0(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = cc(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = false;
      }
      if (u) l = t.contentWindow;
      else break;
      t = cc(l.document);
    }
    return t;
  }
  function ic(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var ph = Rt && "documentMode" in document && 11 >= document.documentMode, ga = null, vc = null, oe = null, mc = false;
  function v0(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    mc || ga == null || ga !== cc(a) || (a = ga, "selectionStart" in a && ic(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), oe && de(oe, a) || (oe = a, a = sf(vc, "onSelect"), 0 < a.length && (t = new dn("onSelect", "select", null, t, u), l.push({ event: t, listeners: a }), t.target = ga)));
  }
  function ru(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Sa = { animationend: ru("Animation", "AnimationEnd"), animationiteration: ru("Animation", "AnimationIteration"), animationstart: ru("Animation", "AnimationStart"), transitionrun: ru("Transition", "TransitionRun"), transitionstart: ru("Transition", "TransitionStart"), transitioncancel: ru("Transition", "TransitionCancel"), transitionend: ru("Transition", "TransitionEnd") }, yc = {}, m0 = {};
  Rt && (m0 = document.createElement("div").style, "AnimationEvent" in window || (delete Sa.animationend.animation, delete Sa.animationiteration.animation, delete Sa.animationstart.animation), "TransitionEvent" in window || delete Sa.transitionend.transition);
  function Bu(l) {
    if (yc[l]) return yc[l];
    if (!Sa[l]) return l;
    var t = Sa[l], u;
    for (u in t) if (t.hasOwnProperty(u) && u in m0) return yc[l] = t[u];
    return l;
  }
  var y0 = Bu("animationend"), h0 = Bu("animationiteration"), d0 = Bu("animationstart"), wh = Bu("transitionrun"), $h = Bu("transitionstart"), Wh = Bu("transitioncancel"), o0 = Bu("transitionend"), g0 = /* @__PURE__ */ new Map(), hc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  hc.push("scrollEnd");
  function ft(l, t) {
    g0.set(l, t), Cu(t, [l]);
  }
  var Fh = 0;
  function qt(l, t) {
    if (l.name != null && l.name !== "auto") return l.name;
    if (t.autoName !== null) return t.autoName;
    l = mt.identifierPrefix;
    var u = Fh++;
    return l = "_" + l + "t_" + u.toString(32) + "_", t.autoName = l;
  }
  function S0(l) {
    if (l == null || typeof l == "string") return l;
    var t = null, u = Ga;
    if (u !== null) for (var a = 0; a < u.length; a++) {
      var e = l[u[a]];
      if (e != null) {
        if (e === "none") return "none";
        t = t == null ? e : t + (" " + e);
      }
    }
    return t ?? l.default;
  }
  function Yt(l, t) {
    return l = S0(l), t = S0(t), t == null ? l === "auto" ? null : l : t === "auto" ? null : t;
  }
  var zn = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l), error: l });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Fl = [], za = 0, dc = 0;
  function Tn() {
    for (var l = za, t = dc = za = 0; t < l; ) {
      var u = Fl[t];
      Fl[t++] = null;
      var a = Fl[t];
      Fl[t++] = null;
      var e = Fl[t];
      Fl[t++] = null;
      var n = Fl[t];
      if (Fl[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && z0(u, e, n);
    }
  }
  function sn(l, t, u, a) {
    Fl[za++] = l, Fl[za++] = t, Fl[za++] = u, Fl[za++] = a, dc |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function oc(l, t, u, a) {
    return sn(l, t, u, a), bn(l);
  }
  function Ru(l, t) {
    return sn(l, null, null, t), bn(l);
  }
  function z0(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = false, n = l.return; n !== null; ) n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = true)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - jl(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function bn(l) {
    if (50 < Ge) throw Ge = 0, mf = null, Error(S(185));
    for (var t = l.return; t !== null; ) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ta = {};
  function Ih(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Cl(l, t, u, a) {
    return new Ih(l, t, u, a);
  }
  function gc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Gt(l, t) {
    var u = l.alternate;
    return u === null ? (u = Cl(l.tag, t, l.key, l.mode), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 1206910976, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function T0(l, t) {
    l.flags &= 1206910978;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), l;
  }
  function En(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof a == "function") gc(a) && (f = 1);
    else if (typeof a == "string") f = Ao(l, u, dt.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (a) {
      case Wt:
        return l = Cl(31, u, t, e), l.elementType = Wt, l.lanes = n, l;
      case Yl:
        return qu(u.children, e, n, t);
      case la:
        f = 8, e |= 24;
        break;
      case ta:
        return l = Cl(12, u, t, e | 2), l.elementType = ta, l.lanes = n, l;
      case D:
        return l = Cl(13, u, t, e), l.elementType = D, l.lanes = n, l;
      case k:
        return l = Cl(19, u, t, e), l.elementType = k, l.lanes = n, l;
      case ka:
      case Ft:
        return l = e | 32, l = Cl(30, u, t, l), l.elementType = Ft, l.lanes = n, l.stateNode = { autoName: null, paired: null, clones: null, ref: null }, l;
      default:
        if (typeof a == "object" && a !== null) switch (a.$$typeof) {
          case b:
            f = 10;
            break l;
          case ua:
            f = 9;
            break l;
          case H:
            f = 11;
            break l;
          case ul:
            f = 14;
            break l;
          case Gl:
            f = 16, a = null;
            break l;
        }
        f = 29, u = Error(S(130, l === null ? "null" : typeof l, "")), a = null;
    }
    return t = Cl(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function qu(l, t, u, a) {
    return l = Cl(7, l, a, t), l.lanes = u, l;
  }
  function Sc(l, t, u) {
    return l = Cl(6, l, null, t), l.lanes = u, l;
  }
  function s0(l) {
    var t = Cl(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function zc(l, t, u) {
    return t = Cl(4, l.children !== null ? l.children : [], l.key, t), t.lanes = u, t.stateNode = { containerInfo: l.containerInfo, pendingChildren: null, implementation: l.implementation }, t;
  }
  var b0 = /* @__PURE__ */ new WeakMap();
  function Il(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = b0.get(l);
      return u !== void 0 ? u : (t = { value: l, source: t, stack: gv(t) }, b0.set(l, t), t);
    }
    return { value: l, source: t, stack: gv(t) };
  }
  var sa = [], ba = 0, On = null, ge = 0, kl = [], Pl = 0, uu = null, gt = 1, St = "";
  function Qt(l, t) {
    sa[ba++] = ge, sa[ba++] = On, On = l, ge = t;
  }
  function E0(l, t, u) {
    kl[Pl++] = gt, kl[Pl++] = St, kl[Pl++] = uu, uu = l;
    var a = gt;
    l = St;
    var e = 32 - jl(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - jl(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, gt = 1 << 32 - jl(t) + e | u << e | a, St = n + l;
    } else gt = 1 << n | u << e | a, St = l;
  }
  function Nn(l) {
    l.return !== null && (Qt(l, 1), E0(l, 1, 0));
  }
  function Tc(l) {
    for (; l === On; ) On = sa[--ba], sa[ba] = null, ge = sa[--ba], sa[ba] = null;
    for (; l === uu; ) uu = kl[--Pl], kl[Pl] = null, St = kl[--Pl], kl[Pl] = null, gt = kl[--Pl], kl[Pl] = null;
  }
  function O0(l, t) {
    kl[Pl++] = gt, kl[Pl++] = St, kl[Pl++] = uu, gt = t.id, St = t.overflow, uu = l;
  }
  var hl = null, F = null, C = false, au = null, lt = false, sc = Error(S(519));
  function eu(l) {
    var t = Error(S(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw Se(Il(t, l)), sc;
  }
  function N0(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Sl] = l, t[Hl] = a, u) {
      case "dialog":
        B("cancel", t), B("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        B("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Xe.length; u++) B(Xe[u], t);
        break;
      case "source":
        B("error", t);
        break;
      case "img":
      case "image":
      case "link":
        B("error", t), B("load", t);
        break;
      case "details":
        B("toggle", t);
        break;
      case "input":
        B("invalid", t), Gv(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
        break;
      case "select":
        B("invalid", t);
        break;
      case "textarea":
        B("invalid", t), Xv(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === true || p1(t.textContent, u) ? (a.popover != null && (B("beforetoggle", t), B("toggle", t)), a.onScroll != null && B("scroll", t), a.onScrollEnd != null && B("scrollend", t), a.onClick != null && (t.onclick = ot), t = true) : t = false, t || eu(l, true);
  }
  function An(l) {
    for (hl = l.return; hl; ) switch (hl.tag) {
      case 5:
      case 31:
      case 13:
        lt = false;
        return;
      case 27:
      case 3:
        lt = true;
        return;
      default:
        hl = hl.return;
    }
  }
  function Ea(l) {
    if (l !== hl) return false;
    if (!C) return An(l), C = true, false;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || wi(l.type, l.memoizedProps)), u = !u), u && F && eu(l), An(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
      F = hy(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
      F = hy(l);
    } else t === 27 ? (t = F, bu(l.type) ? (l = uv, uv = null, F = l) : F = t) : F = hl ? ut(l.stateNode.nextSibling) : null;
    return true;
  }
  function Yu() {
    F = hl = null, C = false;
  }
  function bc() {
    var l = au;
    return l !== null && (Rl === null ? Rl = l : Rl.push.apply(Rl, l), au = null), l;
  }
  function Se(l) {
    au === null ? au = [l] : au.push(l);
  }
  var Ec = ht(null), Gu = null, Xt = null;
  function nu(l, t, u) {
    W(Ec, t._currentValue), t._currentValue = u;
  }
  function jt(l) {
    l._currentValue = Ec.current, gl(Ec);
  }
  function _n(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Oc(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++) if (c.context === t[i]) {
            n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), _n(n.return, u, l), a || (f = null);
            break l;
          }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(S(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), _n(f, u, l), f = null;
      } else e.tag === 13 && e.memoizedState !== null && e.memoizedState.dehydrated === null ? (e.lanes |= u, f = e.alternate, f !== null && (f.lanes |= u), _n(e.return, u, l), f = e.child, f = f !== null ? f.sibling : null) : f = e.child;
      if (f !== null) f.return = e;
      else for (f = e; f !== null; ) {
        if (f === l) {
          f = null;
          break;
        }
        if (e = f.sibling, e !== null) {
          e.return = f.return, f = e;
          break;
        }
        f = f.return;
      }
      e = f;
    }
  }
  function Qu(l, t, u, a) {
    l = null;
    for (var e = t, n = false; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = true;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(S(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          Vl(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === Fe.current) {
        if (f = e.alternate, f === null) throw Error(S(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(pa) : l = [pa]);
      }
      e = e.return;
    }
    return l !== null && Oc(t, l, u, a), t.flags |= 262144, l !== null;
  }
  function Dn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Vl(l.context._currentValue, l.memoizedValue)) return true;
      l = l.next;
    }
    return false;
  }
  function Xu(l) {
    Gu = l, Xt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function zl(l) {
    return A0(Gu, l);
  }
  function Mn(l, t) {
    return Gu === null && Xu(l), A0(l, t);
  }
  function A0(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Xt === null) {
      if (l === null) throw Error(S(308));
      Xt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Xt = Xt.next = t;
    return u;
  }
  var kh = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = { aborted: false, addEventListener: function(u, a) {
      l.push(a);
    } };
    this.abort = function() {
      t.aborted = true, l.forEach(function(u) {
        return u();
      });
    };
  }, Ph = w.unstable_scheduleCallback, ld = w.unstable_NormalPriority, fl = { $$typeof: b, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Nc() {
    return { controller: new kh(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function ze(l) {
    l.refCount--, l.refCount === 0 && Ph(ld, function() {
      l.controller.abort();
    });
  }
  function _0(l, t) {
    if ((l.pendingLanes & 4194048) !== 0) {
      var u = l.transitionTypes;
      for (u === null && (u = l.transitionTypes = []), l = 0; l < t.length; l++) {
        var a = t[l];
        u.indexOf(a) === -1 && u.push(a);
      }
    }
  }
  var Te = null;
  function td(l) {
    var t = l.transitionTypes;
    return l.transitionTypes = null, t;
  }
  var se = null, Ac = 0, ju = 0, Oa = null;
  function ud(l, t) {
    if (se === null) {
      var u = se = [];
      Ac = 0, ju = Zi(), Oa = { status: "pending", value: void 0, then: function(a) {
        u.push(a);
      } };
    }
    return Ac++, t.then(D0, D0), t;
  }
  function D0() {
    if (--Ac === 0 && (Te = null, se !== null)) {
      Oa !== null && (Oa.status = "fulfilled");
      var l = se;
      se = null, ju = 0, Oa = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function ad(l, t) {
    var u = [], a = { status: "pending", value: null, reason: null, then: function(e) {
      u.push(e);
    } };
    return l.then(function() {
      a.status = "fulfilled", a.value = t;
      for (var e = 0; e < u.length; e++) (0, u[e])(t);
    }, function(e) {
      for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++) (0, u[e])(void 0);
    }), a;
  }
  var M0 = _.S;
  _.S = function(l, t) {
    if (s1 = Ql(), typeof t == "object" && t !== null && typeof t.then == "function" && ud(l, t), Te !== null) for (var u = Za; u !== null; ) _0(u, Te), u = u.next;
    if (u = l.types, u !== null) {
      for (var a = Za; a !== null; ) _0(a, u), a = a.next;
      if (ju !== 0) {
        a = Te, a === null && (a = Te = []);
        for (var e = 0; e < u.length; e++) {
          var n = u[e];
          a.indexOf(n) === -1 && a.push(n);
        }
      }
    }
    M0 !== null && M0(l, t);
  };
  var Zu = ht(null);
  function _c() {
    var l = Zu.current;
    return l !== null ? l : $.pooledCache;
  }
  function Un(l, t) {
    t === null ? W(Zu, Zu.current) : W(Zu, t.pool);
  }
  function U0() {
    var l = _c();
    return l === null ? null : { parent: fl._currentValue, pool: l };
  }
  var Na = Error(S(460)), Dc = Error(S(474)), Hn = Error(S(542)), Cn = { then: function() {
  } };
  function H0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function C0(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(ot, ot), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, B0(l), l === void 0 && !("reason" in t) ? Error(S(600)) : l;
      default:
        if (typeof t.status == "string") t.then(ot, ot);
        else {
          if (l = $, l !== null && 100 < l.shellSuspendCounter) throw Error(S(482));
          l = t, l.status = "pending", l.then(function(a) {
            if (t.status === "pending") {
              var e = t;
              e.status = "fulfilled", e.value = a;
            }
          }, function(a) {
            if (t.status === "pending") {
              var e = t;
              e.status = "rejected", e.reason = a;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, B0(l), l;
        }
        throw Ku = t, Na;
    }
  }
  function Vu(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Ku = u, Na) : u;
    }
  }
  var Ku = null;
  function r0() {
    if (Ku === null) throw Error(S(459));
    var l = Ku;
    return Ku = null, l;
  }
  function B0(l) {
    if (l === Na || l === Hn) throw Error(S(483));
  }
  var Aa = null, be = 0;
  function rn(l) {
    var t = be;
    return be += 1, Aa === null && (Aa = []), C0(Aa, l, t);
  }
  function fu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function Bn(l, t) {
    throw t.$$typeof === We ? Error(S(525)) : (l = Object.prototype.toString.call(t), Error(S(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function R0(l) {
    function t(y, v) {
      if (l) {
        var d = y.deletions;
        d === null ? (y.deletions = [v], y.flags |= 16) : d.push(v);
      }
    }
    function u(y, v) {
      if (!l) return null;
      for (; v !== null; ) t(y, v), v = v.sibling;
      return null;
    }
    function a(y) {
      for (var v = /* @__PURE__ */ new Map(); y !== null; ) y.key === null ? v.set(y.index, y) : v.set(y.key, y), y = y.sibling;
      return v;
    }
    function e(y, v) {
      return y = Gt(y, v), y.index = 0, y.sibling = null, y;
    }
    function n(y, v, d) {
      return y.index = d, l ? (d = y.alternate, d !== null ? (d = d.index, d < v ? (y.flags |= 2, v) : d) : (y.flags |= 134217730, v)) : (y.flags |= 1048576, v);
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 134217730), y;
    }
    function c(y, v, d, z) {
      return v === null || v.tag !== 6 ? (v = Sc(d, y.mode, z), v.return = y, v) : (v = e(v, d), v.return = y, v);
    }
    function i(y, v, d, z) {
      var E = d.type;
      return E === Yl ? (y = g(y, v, d.props.children, z, d.key), fu(y, d), y) : v !== null && (v.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Gl && Vu(E) === v.type) ? (v = e(v, d.props), fu(v, d), v.return = y, v) : (v = En(d.type, d.key, d.props, null, y.mode, z), fu(v, d), v.return = y, v);
    }
    function h(y, v, d, z) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== d.containerInfo || v.stateNode.implementation !== d.implementation ? (v = zc(d, y.mode, z), v.return = y, v) : (v = e(v, d.children || []), v.return = y, v);
    }
    function g(y, v, d, z, E) {
      return v === null || v.tag !== 7 ? (v = qu(d, y.mode, z, E), v.return = y, v) : (v = e(v, d), v.return = y, v);
    }
    function T(y, v, d) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return v = Sc("" + v, y.mode, d), v.return = y, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Du:
            return d = En(v.type, v.key, v.props, null, y.mode, d), fu(d, v), d.return = y, d;
          case Ht:
            return v = zc(v, y.mode, d), v.return = y, v;
          case Gl:
            return v = Vu(v), T(y, v, d);
        }
        if (le(v) || Pa(v)) return v = qu(v, y.mode, d, null), v.return = y, v;
        if (typeof v.then == "function") return T(y, rn(v), d);
        if (v.$$typeof === b) return T(y, Mn(y, v), d);
        Bn(y, v);
      }
      return null;
    }
    function m(y, v, d, z) {
      var E = v !== null ? v.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint") return E !== null ? null : c(y, v, "" + d, z);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Du:
            return d.key === E ? i(y, v, d, z) : null;
          case Ht:
            return d.key === E ? h(y, v, d, z) : null;
          case Gl:
            return d = Vu(d), m(y, v, d, z);
        }
        if (le(d) || Pa(d)) return E !== null ? null : g(y, v, d, z, null);
        if (typeof d.then == "function") return m(y, v, rn(d), z);
        if (d.$$typeof === b) return m(y, v, Mn(y, d), z);
        Bn(y, d);
      }
      return null;
    }
    function o(y, v, d, z, E) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint") return y = y.get(d) || null, c(v, y, "" + z, E);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Du:
            return y = y.get(z.key === null ? d : z.key) || null, i(v, y, z, E);
          case Ht:
            return y = y.get(z.key === null ? d : z.key) || null, h(v, y, z, E);
          case Gl:
            return z = Vu(z), o(y, v, d, z, E);
        }
        if (le(z) || Pa(z)) return y = y.get(d) || null, g(v, y, z, E, null);
        if (typeof z.then == "function") return o(y, v, d, rn(z), E);
        if (z.$$typeof === b) return o(y, v, d, Mn(v, z), E);
        Bn(v, z);
      }
      return null;
    }
    function s(y, v, d, z) {
      for (var E = null, q = null, N = v, A = v = 0, vl = null; N !== null && A < d.length; A++) {
        N.index > A ? (vl = N, N = null) : vl = N.sibling;
        var Y = m(y, N, d[A], z);
        if (Y === null) {
          N === null && (N = vl);
          break;
        }
        l && N && Y.alternate === null && t(y, N), v = n(Y, v, A), q === null ? E = Y : q.sibling = Y, q = Y, N = vl;
      }
      if (A === d.length) return u(y, N), C && Qt(y, A), E;
      if (N === null) {
        for (; A < d.length; A++) N = T(y, d[A], z), N !== null && (v = n(N, v, A), q === null ? E = N : q.sibling = N, q = N);
        return C && Qt(y, A), E;
      }
      for (N = a(N); A < d.length; A++) vl = o(N, y, A, d[A], z), vl !== null && (l && (Y = vl.alternate, Y !== null && N.delete(Y.key === null ? A : Y.key)), v = n(vl, v, A), q === null ? E = vl : q.sibling = vl, q = vl);
      return l && N.forEach(function(_u) {
        return t(y, _u);
      }), C && Qt(y, A), E;
    }
    function O(y, v, d, z) {
      if (d == null) throw Error(S(151));
      for (var E = null, q = null, N = v, A = v = 0, vl = null, Y = d.next(); N !== null && !Y.done; A++, Y = d.next()) {
        N.index > A ? (vl = N, N = null) : vl = N.sibling;
        var _u = m(y, N, Y.value, z);
        if (_u === null) {
          N === null && (N = vl);
          break;
        }
        l && N && _u.alternate === null && t(y, N), v = n(_u, v, A), q === null ? E = _u : q.sibling = _u, q = _u, N = vl;
      }
      if (Y.done) return u(y, N), C && Qt(y, A), E;
      if (N === null) {
        for (; !Y.done; A++, Y = d.next()) Y = T(y, Y.value, z), Y !== null && (v = n(Y, v, A), q === null ? E = Y : q.sibling = Y, q = Y);
        return C && Qt(y, A), E;
      }
      for (N = a(N); !Y.done; A++, Y = d.next()) Y = o(N, y, A, Y.value, z), Y !== null && (l && (vl = Y.alternate, vl !== null && N.delete(vl.key === null ? A : vl.key)), v = n(Y, v, A), q === null ? E = Y : q.sibling = Y, q = Y);
      return l && N.forEach(function(Go) {
        return t(y, Go);
      }), C && Qt(y, A), E;
    }
    function U(y, v, d, z) {
      if (typeof d == "object" && d !== null && d.type === Yl && d.key === null && d.props.ref === void 0 && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Du:
            l: {
              for (var E = d.key; v !== null; ) {
                if (v.key === E) {
                  if (E = d.type, E === Yl) {
                    if (v.tag === 7) {
                      u(y, v.sibling), z = e(v, d.props.children), fu(z, d), z.return = y, y = z;
                      break l;
                    }
                  } else if (v.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Gl && Vu(E) === v.type) {
                    u(y, v.sibling), z = e(v, d.props), fu(z, d), z.return = y, y = z;
                    break l;
                  }
                  u(y, v);
                  break;
                } else t(y, v);
                v = v.sibling;
              }
              d.type === Yl ? (z = qu(d.props.children, y.mode, z, d.key), fu(z, d), z.return = y, y = z) : (z = En(d.type, d.key, d.props, null, y.mode, z), fu(z, d), z.return = y, y = z);
            }
            return f(y);
          case Ht:
            l: {
              for (E = d.key; v !== null; ) {
                if (v.key === E) if (v.tag === 4 && v.stateNode.containerInfo === d.containerInfo && v.stateNode.implementation === d.implementation) {
                  u(y, v.sibling), z = e(v, d.children || []), z.return = y, y = z;
                  break l;
                } else {
                  u(y, v);
                  break;
                }
                else t(y, v);
                v = v.sibling;
              }
              z = zc(d, y.mode, z), z.return = y, y = z;
            }
            return f(y);
          case Gl:
            return d = Vu(d), U(y, v, d, z);
        }
        if (le(d)) return s(y, v, d, z);
        if (Pa(d)) {
          if (E = Pa(d), typeof E != "function") throw Error(S(150));
          return d = E.call(d), O(y, v, d, z);
        }
        if (typeof d.then == "function") return U(y, v, rn(d), z);
        if (d.$$typeof === b) return U(y, v, Mn(y, d), z);
        Bn(y, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint" ? (d = "" + d, v !== null && v.tag === 6 ? (u(y, v.sibling), z = e(v, d), z.return = y, y = z) : (u(y, v), z = Sc(d, y.mode, z), z.return = y, y = z), f(y)) : u(y, v);
    }
    return function(y, v, d, z) {
      try {
        be = 0;
        var E = U(y, v, d, z);
        return Aa = null, E;
      } catch (N) {
        if (N === Na || N === Hn) throw N;
        var q = Cl(29, N, null, y.mode);
        return q.lanes = z, q.return = y, q;
      } finally {
      }
    };
  }
  var xu = R0(true), q0 = R0(false), cu = false;
  function Mc(l) {
    l.updateQueue = { baseState: l.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Uc(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = { baseState: l.baseState, firstBaseUpdate: l.firstBaseUpdate, lastBaseUpdate: l.lastBaseUpdate, shared: l.shared, callbacks: null });
  }
  function iu(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function vu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (j & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = bn(l), z0(l, null, u), t;
    }
    return sn(l, a, t, u), bn(l);
  }
  function Ee(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Ov(l, u);
    }
  }
  function Hc(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = { lane: u.lane, tag: u.tag, payload: u.payload, callback: null, next: null };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = { baseState: a.baseState, firstBaseUpdate: e, lastBaseUpdate: n, shared: a.shared, callbacks: a.callbacks }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Cc = false;
  function Oe() {
    if (Cc) {
      var l = Oa;
      if (l !== null) throw l;
    }
  }
  function Ne(l, t, u, a) {
    Cc = false;
    var e = l.updateQueue;
    cu = false;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, h = i.next;
      i.next = null, f === null ? n = h : f.next = h, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = h : c.next = h, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = e.baseState;
      f = 0, g = h = i = null, c = n;
      do {
        var m = c.lane & -536870913, o = m !== c.lane;
        if (o ? (R & m) === m : (a & m) === m) {
          m !== 0 && m === ju && (Cc = true), g !== null && (g = g.next = { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null });
          l: {
            var s = l, O = c;
            m = t;
            var U = u;
            switch (O.tag) {
              case 1:
                if (s = O.payload, typeof s == "function") {
                  T = s.call(U, T, m);
                  break l;
                }
                T = s;
                break l;
              case 3:
                s.flags = s.flags & -65537 | 128;
              case 0:
                if (s = O.payload, m = typeof s == "function" ? s.call(U, T, m) : s, m == null) break l;
                T = Z({}, T, m);
                break l;
              case 2:
                cu = true;
            }
          }
          m = c.callback, m !== null && (l.flags |= 64, o && (l.flags |= 8192), o = e.callbacks, o === null ? e.callbacks = [m] : o.push(m));
        } else o = { lane: m, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, g === null ? (h = g = o, i = T) : g = g.next = o, f |= m;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null) break;
          o = c, c = o.next, o.next = null, e.lastBaseUpdate = o, e.shared.pending = null;
        }
      } while (true);
      g === null && (i = T), e.baseState = i, e.firstBaseUpdate = h, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), Su |= f, l.lanes = f, l.memoizedState = T;
    }
  }
  function Y0(l, t) {
    if (typeof l != "function") throw Error(S(191, l));
    l.call(t);
  }
  function G0(l, t) {
    var u = l.callbacks;
    if (u !== null) for (l.callbacks = null, l = 0; l < u.length; l++) Y0(u[l], t);
  }
  var mu = ht(null), Rn = ht(0);
  function Q0(l, t) {
    l = Lt, W(Rn, l), W(mu, t), Lt = l | t.baseLanes;
  }
  function rc() {
    W(Rn, Lt), W(mu, mu.current);
  }
  function Bc() {
    Lt = Rn.current, gl(mu), gl(Rn);
  }
  var Tl = ht(null), Nl = null;
  function yu(l) {
    var t = l.alternate;
    W(sl, sl.current & 1), W(Tl, l), Nl === null && (t === null || mu.current !== null || t.memoizedState !== null) && (Nl = l);
  }
  function Rc(l) {
    W(sl, sl.current), W(Tl, l), Nl === null && (Nl = l);
  }
  function X0(l) {
    l.tag === 22 ? (W(sl, sl.current), W(Tl, l), Nl === null && (Nl = l)) : hu();
  }
  function hu() {
    W(sl, sl.current), W(Tl, Tl.current);
  }
  function Kl(l) {
    gl(Tl), Nl === l && (Nl = null), gl(sl);
  }
  var sl = ht(0);
  function Ae(l, t) {
    W(Tl, Tl.current), W(sl, t);
  }
  function qc(l) {
    gl(sl), gl(Tl), Nl === l && (Nl = null);
  }
  function qn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || lv(u) || tv(u))) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Zt = 0, M = null, p = null, cl = null, Yn = false, _a = false, Lu = false, Gn = 0, _e = 0, Da = null, ed = 0;
  function al() {
    throw Error(S(321));
  }
  function Yc(l, t) {
    if (t === null) return false;
    for (var u = 0; u < t.length && u < l.length; u++) if (!Vl(l[u], t[u])) return false;
    return true;
  }
  function Gc(l, t, u, a, e, n) {
    return Zt = n, M = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _.H = l === null || l.memoizedState === null ? Em : Om, Lu = false, n = u(a, e), Lu = false, _a && (n = Z0(t, u, a, e)), j0(l), n;
  }
  function j0(l) {
    _.H = xn;
    var t = p !== null && p.next !== null;
    if (Zt = 0, cl = p = M = null, Yn = false, _e = 0, Da = null, t) throw Error(S(300));
    l === null || il || (l = l.dependencies, l !== null && Dn(l) && (il = true));
  }
  function Z0(l, t, u, a) {
    M = l;
    var e = 0;
    do {
      if (_a && (Da = null), _e = 0, _a = false, 25 <= e) throw Error(S(301));
      if (e += 1, cl = p = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      _.H = hd, n = t(u, a);
    } while (_a);
    return n;
  }
  function nd() {
    var l = _.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? De(t) : t, l = l.useState()[0], (p !== null ? p.memoizedState : null) !== l && (M.flags |= 1024), t;
  }
  function Qc() {
    var l = Gn !== 0;
    return Gn = 0, l;
  }
  function Xc(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function jc(l) {
    if (Yn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Yn = false;
    }
    Zt = 0, cl = p = M = null, _a = false, _e = Gn = 0, Da = null;
  }
  function Dl() {
    var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return cl === null ? M.memoizedState = cl = l : cl = cl.next = l, cl;
  }
  function nl() {
    if (p === null) {
      var l = M.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = p.next;
    var t = cl === null ? M.memoizedState : cl.next;
    if (t !== null) cl = t, p = l;
    else {
      if (l === null) throw M.alternate === null ? Error(S(467)) : Error(S(310));
      p = l, l = { memoizedState: p.memoizedState, baseState: p.baseState, baseQueue: p.baseQueue, queue: p.queue, next: null }, cl === null ? M.memoizedState = cl = l : cl = cl.next = l;
    }
    return cl;
  }
  function Qn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function De(l) {
    var t = _e;
    return _e += 1, Da === null && (Da = []), l = C0(Da, l, t), t = M, (cl === null ? t.memoizedState : cl.next) === null && (t = t.alternate, _.H = t === null || t.memoizedState === null ? Em : Om), l;
  }
  function Xn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return De(l);
      if (l.$$typeof === Zy) return;
      if (l.$$typeof === b) return zl(l);
    }
    throw Error(S(438, String(l)));
  }
  function Zc(l) {
    var t = null, u = M.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = M.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(e) {
        return e.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Qn(), M.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0) for (u = t.data[t.index] = Array(l), a = 0; a < l; a++) u[a] = Ct;
    return t.index++, u;
  }
  function Vt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function jn(l) {
    var t = nl();
    return Vc(t, p, l);
  }
  function Vc(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(S(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, h = t, g = false;
      do {
        var T = h.lane & -536870913;
        if (T !== h.lane ? (R & T) === T : (Zt & T) === T) {
          var m = h.revertLane;
          if (m === 0) i !== null && (i = i.next = { lane: 0, revertLane: 0, gesture: null, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), T === ju && (g = true);
          else if ((Zt & m) === m) {
            h = h.next, m === ju && (g = true);
            continue;
          } else T = { lane: 0, revertLane: h.revertLane, gesture: null, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }, i === null ? (c = i = T, f = n) : i = i.next = T, M.lanes |= m, Su |= m;
          T = h.action, Lu && u(n, T), n = h.hasEagerState ? h.eagerState : u(n, T);
        } else m = { lane: T, revertLane: h.revertLane, gesture: h.gesture, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }, i === null ? (c = i = m, f = n) : i = i.next = m, M.lanes |= T, Su |= T;
        h = h.next;
      } while (h !== null && h !== t);
      if (i === null ? f = n : i.next = c, !Vl(n, l.memoizedState) && (il = true, g && (u = Oa, u !== null))) throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Kc(l) {
    var t = nl(), u = t.queue;
    if (u === null) throw Error(S(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Vl(n, t.memoizedState) || (il = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function V0(l, t, u) {
    var a = M, e = nl(), n = C;
    if (n) {
      if (u === void 0) throw Error(S(407));
      u = u();
    } else u = t();
    var f = !Vl((p || e).memoizedState, u);
    if (f && (e.memoizedState = u, il = true), e = e.queue, Jc(L0.bind(null, a, e, l), [l]), l = e.getSnapshot !== t || f || cl !== null && (cl.memoizedState.tag & 1) !== 0, Ma(l ? 9 : 8, { destroy: void 0 }, x0.bind(null, a, e, u, t), null), l) {
      if (a.flags |= 2048, $ === null) throw Error(S(349));
      n || (Zt & 127) !== 0 || K0(a, t, u);
    }
    return u;
  }
  function K0(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = M.updateQueue, t === null ? (t = Qn(), M.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function x0(l, t, u, a) {
    t.value = u, t.getSnapshot = a, J0(t) && p0(l);
  }
  function L0(l, t, u) {
    return u(function() {
      J0(t) && p0(l);
    });
  }
  function J0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !Vl(l, u);
    } catch {
      return true;
    }
  }
  function p0(l) {
    var t = Ru(l, 2);
    t !== null && ql(t, l, 2);
  }
  function xc(l) {
    var t = Dl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Lu) {
        Pt(true);
        try {
          u();
        } finally {
          Pt(false);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Vt, lastRenderedState: l }, t;
  }
  function w0(l, t, u, a) {
    return l.baseState = u, Vc(l, p, typeof a == "function" ? a : Vt);
  }
  function fd(l, t, u, a, e) {
    if (Kn(l)) throw Error(S(485));
    if (l = t.action, l !== null) {
      var n = { payload: e, action: l, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(f) {
        n.listeners.push(f);
      } };
      _.T !== null ? u(true) : n.isTransition = false, a(n), u = t.pending, u === null ? (n.next = t.pending = n, $0(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function $0(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = _.T, f = {};
      f.types = n !== null ? n.types : null, _.T = f;
      try {
        var c = u(e, a), i = _.S;
        i !== null && i(f, c), W0(l, t, c);
      } catch (h) {
        Lc(l, t, h);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), _.T = n;
      }
    } else try {
      n = u(e, a), W0(l, t, n);
    } catch (h) {
      Lc(l, t, h);
    }
  }
  function W0(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(function(a) {
      F0(l, t, a);
    }, function(a) {
      return Lc(l, t, a);
    }) : F0(l, t, u);
  }
  function F0(l, t, u) {
    t.status = "fulfilled", t.value = u, I0(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, $0(l, u)));
  }
  function Lc(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, I0(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function I0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function k0(l, t) {
    return t;
  }
  function P0(l, t) {
    if (C) {
      var u = $.formState;
      if (u !== null) {
        l: {
          var a = M;
          if (C) {
            if (F) {
              t: {
                for (var e = F, n = lt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = ut(e.nextSibling), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                F = ut(e.nextSibling), a = e.data === "F!";
                break l;
              }
            }
            eu(a);
          }
          a = false;
        }
        a && (t = u[0]);
      }
    }
    return u = Dl(), u.memoizedState = u.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: k0, lastRenderedState: t }, u.queue = a, u = Tm.bind(null, M, a), a.dispatch = u, a = xc(false), n = Fc.bind(null, M, false, a.queue), a = Dl(), e = { state: t, dispatch: null, action: l, pending: null }, a.queue = e, u = fd.bind(null, M, e, n, u), e.dispatch = u, a.memoizedState = l, [t, u, false];
  }
  function lm(l) {
    var t = nl();
    return tm(t, p, l);
  }
  function tm(l, t, u) {
    if (t = Vc(l, t, k0)[0], l = jn(Vt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = De(t);
    } catch (f) {
      throw f === Na ? Hn : f;
    }
    else a = t;
    t = nl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (M.flags |= 2048, Ma(9, { destroy: void 0 }, cd.bind(null, e, u), null)), [a, n, l];
  }
  function cd(l, t) {
    l.action = t;
  }
  function um(l) {
    var t = nl(), u = p;
    if (u !== null) return tm(t, u, l);
    nl(), t = t.memoizedState, u = nl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, false];
  }
  function Ma(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = M.updateQueue, t === null && (t = Qn(), M.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function am() {
    return nl().memoizedState;
  }
  function Zn(l, t, u, a) {
    var e = Dl();
    M.flags |= l, e.memoizedState = Ma(1 | t, { destroy: void 0 }, u, a === void 0 ? null : a);
  }
  function Vn(l, t, u, a) {
    var e = nl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    p !== null && a !== null && Yc(a, p.memoizedState.deps) ? e.memoizedState = Ma(t, n, u, a) : (M.flags |= l, e.memoizedState = Ma(1 | t, n, u, a));
  }
  function em(l, t) {
    Zn(8390656, 8, l, t);
  }
  function Jc(l, t) {
    Vn(2048, 8, l, t);
  }
  function id(l) {
    M.flags |= 4;
    var t = M.updateQueue;
    if (t === null) t = Qn(), M.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function nm(l) {
    var t = nl().memoizedState;
    return id({ ref: t, nextImpl: l }), function() {
      if ((j & 2) !== 0) throw Error(S(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function fm(l, t) {
    return Vn(4, 2, l, t);
  }
  function cm(l, t) {
    return Vn(4, 4, l, t);
  }
  function im(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null) return l = l(), t.current = l, function() {
      t.current = null;
    };
  }
  function vm(l, t, u) {
    u = u != null ? u.concat([l]) : null, Vn(4, 4, im.bind(null, t, l), u);
  }
  function pc() {
  }
  function mm(l, t) {
    var u = nl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Yc(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function ym(l, t) {
    var u = nl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Yc(t, a[1])) return a[0];
    if (a = l(), Lu) {
      Pt(true);
      try {
        l();
      } finally {
        Pt(false);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function wc(l, t, u) {
    return u === void 0 || (Zt & 1073741824) !== 0 && (R & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = E1(), M.lanes |= l, Su |= l, u);
  }
  function hm(l, t, u, a) {
    return Vl(u, t) ? u : mu.current !== null ? (l = wc(l, u, a), Vl(l, t) || (il = true), l) : (Zt & 106) === 0 || (Zt & 1073741824) !== 0 && (R & 261930) === 0 ? (il = true, l.memoizedState = u) : (l = E1(), M.lanes |= l, Su |= l, t);
  }
  function dm(l, t, u, a, e) {
    var n = X.p;
    X.p = n !== 0 && 8 > n ? n : 8;
    var f = _.T, c = {};
    c.types = f !== null ? f.types : null, _.T = c, Fc(l, false, t, u);
    try {
      var i = e(), h = _.S;
      if (h !== null && h(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = ad(i, a);
        Me(l, t, g, pl(l));
      } else Me(l, t, a, pl(l));
    } catch (T) {
      Me(l, t, { then: function() {
      }, status: "rejected", reason: T }, pl());
    } finally {
      X.p = n, f !== null && c.types !== null && (f.types = c.types), _.T = f;
    }
  }
  function vd() {
  }
  function $c(l, t, u, a) {
    if (l.tag !== 5) throw Error(S(476));
    var e = om(l).queue;
    dm(l, e, t, Mu, u === null ? vd : function() {
      return gm(l), u(a);
    });
  }
  function om(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: Mu, baseState: Mu, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Vt, lastRenderedState: Mu }, next: null };
    var u = {};
    return t.next = { memoizedState: u, baseState: u, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Vt, lastRenderedState: u }, next: null }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function gm(l) {
    var t = om(l);
    t.next === null && (t = l.alternate.memoizedState), Me(l, t.next.queue, {}, pl());
  }
  function Wc() {
    return zl(pa);
  }
  function Sm() {
    return nl().memoizedState;
  }
  function zm() {
    return nl().memoizedState;
  }
  function md(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = pl();
          l = iu(u);
          var a = vu(t, l, u);
          a !== null && (ql(a, t, u), Ee(a, t, u)), t = { cache: Nc() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function yd(l, t, u) {
    var a = pl();
    u = { lane: a, revertLane: 0, gesture: null, action: u, hasEagerState: false, eagerState: null, next: null }, Kn(l) ? sm(t, u) : (u = oc(l, t, u, a), u !== null && (ql(u, l, a), bm(u, t, a)));
  }
  function Tm(l, t, u) {
    var a = pl();
    Me(l, t, u, a);
  }
  function Me(l, t, u, a) {
    var e = { lane: a, revertLane: 0, gesture: null, action: u, hasEagerState: false, eagerState: null, next: null };
    if (Kn(l)) sm(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var f = t.lastRenderedState, c = n(f, u);
        if (e.hasEagerState = true, e.eagerState = c, Vl(c, f)) return sn(l, t, e, 0), $ === null && Tn(), false;
      } catch {
      } finally {
      }
      if (u = oc(l, t, e, a), u !== null) return ql(u, l, a), bm(u, t, a), true;
    }
    return false;
  }
  function Fc(l, t, u, a) {
    if (a = { lane: 2, revertLane: Zi(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, Kn(l)) {
      if (t) throw Error(S(479));
    } else t = oc(l, u, a, 2), t !== null && ql(t, l, 2);
  }
  function Kn(l) {
    var t = l.alternate;
    return l === M || t !== null && t === M;
  }
  function sm(l, t) {
    _a = Yn = true;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function bm(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Ov(l, u);
    }
  }
  var xn = { readContext: zl, use: Xn, useCallback: al, useContext: al, useEffect: al, useImperativeHandle: al, useLayoutEffect: al, useInsertionEffect: al, useMemo: al, useReducer: al, useRef: al, useState: al, useDebugValue: al, useDeferredValue: al, useTransition: al, useSyncExternalStore: al, useId: al, useHostTransitionStatus: al, useFormState: al, useActionState: al, useOptimistic: al, useMemoCache: al, useCacheRefresh: al, useEffectEvent: al }, Em = { readContext: zl, use: Xn, useCallback: function(l, t) {
    return Dl().memoizedState = [l, t === void 0 ? null : t], l;
  }, useContext: zl, useEffect: em, useImperativeHandle: function(l, t, u) {
    u = u != null ? u.concat([l]) : null, Zn(4194308, 4, im.bind(null, t, l), u);
  }, useLayoutEffect: function(l, t) {
    return Zn(4194308, 4, l, t);
  }, useInsertionEffect: function(l, t) {
    Zn(4, 2, l, t);
  }, useMemo: function(l, t) {
    var u = Dl();
    t = t === void 0 ? null : t;
    var a = l();
    if (Lu) {
      Pt(true);
      try {
        l();
      } finally {
        Pt(false);
      }
    }
    return u.memoizedState = [a, t], a;
  }, useReducer: function(l, t, u) {
    var a = Dl();
    if (u !== void 0) {
      var e = u(t);
      if (Lu) {
        Pt(true);
        try {
          u(t);
        } finally {
          Pt(false);
        }
      }
    } else e = t;
    return a.memoizedState = a.baseState = e, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: e }, a.queue = l, l = l.dispatch = yd.bind(null, M, l), [a.memoizedState, l];
  }, useRef: function(l) {
    var t = Dl();
    return l = { current: l }, t.memoizedState = l;
  }, useState: function(l) {
    l = xc(l);
    var t = l.queue, u = Tm.bind(null, M, t);
    return t.dispatch = u, [l.memoizedState, u];
  }, useDebugValue: pc, useDeferredValue: function(l, t) {
    var u = Dl();
    return wc(u, l, t);
  }, useTransition: function() {
    var l = xc(false);
    return l = dm.bind(null, M, l.queue, true, false), Dl().memoizedState = l, [false, l];
  }, useSyncExternalStore: function(l, t, u) {
    var a = M, e = Dl();
    if (C) {
      if (u === void 0) throw Error(S(407));
      u = u();
    } else {
      if (u = t(), $ === null) throw Error(S(349));
      (R & 127) !== 0 || K0(a, t, u);
    }
    e.memoizedState = u;
    var n = { value: u, getSnapshot: t };
    return e.queue = n, em(L0.bind(null, a, n, l), [l]), a.flags |= 2048, Ma(9, { destroy: void 0 }, x0.bind(null, a, n, u, t), null), u;
  }, useId: function() {
    var l = Dl(), t = $.identifierPrefix;
    if (C) {
      var u = St, a = gt;
      u = (a & ~(1 << 32 - jl(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = Gn++, 0 < u && (t += "H" + u.toString(32)), t += "_";
    } else u = ed++, t = "_" + t + "r_" + u.toString(32) + "_";
    return l.memoizedState = t;
  }, useHostTransitionStatus: Wc, useFormState: P0, useActionState: P0, useOptimistic: function(l) {
    var t = Dl();
    t.memoizedState = t.baseState = l;
    var u = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = u, t = Fc.bind(null, M, true, u), u.dispatch = t, [l, t];
  }, useMemoCache: Zc, useCacheRefresh: function() {
    return Dl().memoizedState = md.bind(null, M);
  }, useEffectEvent: function(l) {
    var t = Dl(), u = { impl: l };
    return t.memoizedState = u, function() {
      if ((j & 2) !== 0) throw Error(S(440));
      return u.impl.apply(void 0, arguments);
    };
  } }, Om = { readContext: zl, use: Xn, useCallback: mm, useContext: zl, useEffect: Jc, useImperativeHandle: vm, useInsertionEffect: fm, useLayoutEffect: cm, useMemo: ym, useReducer: jn, useRef: am, useState: function() {
    return jn(Vt);
  }, useDebugValue: pc, useDeferredValue: function(l, t) {
    var u = nl();
    return hm(u, p.memoizedState, l, t);
  }, useTransition: function() {
    var l = jn(Vt)[0], t = nl().memoizedState;
    return [typeof l == "boolean" ? l : De(l), t];
  }, useSyncExternalStore: V0, useId: Sm, useHostTransitionStatus: Wc, useFormState: lm, useActionState: lm, useOptimistic: function(l, t) {
    var u = nl();
    return w0(u, p, l, t);
  }, useMemoCache: Zc, useCacheRefresh: zm, useEffectEvent: nm }, hd = { readContext: zl, use: Xn, useCallback: mm, useContext: zl, useEffect: Jc, useImperativeHandle: vm, useInsertionEffect: fm, useLayoutEffect: cm, useMemo: ym, useReducer: Kc, useRef: am, useState: function() {
    return Kc(Vt);
  }, useDebugValue: pc, useDeferredValue: function(l, t) {
    var u = nl();
    return p === null ? wc(u, l, t) : hm(u, p.memoizedState, l, t);
  }, useTransition: function() {
    var l = Kc(Vt)[0], t = nl().memoizedState;
    return [typeof l == "boolean" ? l : De(l), t];
  }, useSyncExternalStore: V0, useId: Sm, useHostTransitionStatus: Wc, useFormState: um, useActionState: um, useOptimistic: function(l, t) {
    var u = nl();
    return p !== null ? w0(u, p, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
  }, useMemoCache: Zc, useCacheRefresh: zm, useEffectEvent: nm };
  function Ic(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : Z({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var kc = { enqueueSetState: function(l, t, u) {
    l = l._reactInternals;
    var a = pl(), e = iu(a);
    e.payload = t, u != null && (e.callback = u), t = vu(l, e, a), t !== null && (ql(t, l, a), Ee(t, l, a));
  }, enqueueReplaceState: function(l, t, u) {
    l = l._reactInternals;
    var a = pl(), e = iu(a);
    e.tag = 1, e.payload = t, u != null && (e.callback = u), t = vu(l, e, a), t !== null && (ql(t, l, a), Ee(t, l, a));
  }, enqueueForceUpdate: function(l, t) {
    l = l._reactInternals;
    var u = pl(), a = iu(u);
    a.tag = 2, t != null && (a.callback = t), t = vu(l, a, u), t !== null && (ql(t, l, u), Ee(t, l, u));
  } };
  function Nm(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !de(u, a) || !de(e, n) : true;
  }
  function Am(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && kc.enqueueReplaceState(t, t.state, null);
  }
  function Ju(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t) a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = Z({}, u));
      for (var e in l) u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function _m(l) {
    zn(l);
  }
  function Dm(l) {
    console.error(l);
  }
  function Mm(l) {
    zn(l);
  }
  function Ln(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Um(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, { componentStack: u.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function Pc(l, t, u) {
    return u = iu(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Ln(l, t);
    }, u;
  }
  function Hm(l) {
    return l = iu(l), l.tag = 3, l;
  }
  function Cm(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        Um(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      Um(t, u, a), typeof e != "function" && (zu === null ? zu = /* @__PURE__ */ new Set([this]) : zu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, { componentStack: c !== null ? c : "" });
    });
  }
  function dd(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && Qu(t, u, e, true), u = Tl.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
          case 19:
            return Nl === null ? hf() : u.alternate === null && el === 0 && (el = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Cn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Qi(l, a, e)), false;
          case 22:
            return u.flags |= 65536, a === Cn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Qi(l, a, e)), false;
        }
        throw Error(S(435, u.tag));
      }
      return Qi(l, a, e), hf(), false;
    }
    if (C) return t = Tl.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== sc && (l = Error(S(422), { cause: a }), Se(Il(l, u)))) : (a !== sc && (t = Error(S(423), { cause: a }), Se(Il(t, u))), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = Il(a, u), e = Pc(l.stateNode, a, e), Hc(l, e), el !== 4 && (el = 2)), false;
    var n = Error(S(520), { cause: a });
    if (n = Il(n, u), Ye === null ? Ye = [n] : Ye.push(n), el !== 4 && (el = 2), t === null) return true;
    a = Il(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = Pc(u.stateNode, a, l), Hc(u, l), false;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (zu === null || !zu.has(n)))) return u.flags |= 65536, e &= -e, u.lanes |= e, e = Hm(e), Cm(e, l, u, a), Hc(u, e), false;
          break;
        case 22:
          if (u.memoizedState !== null) return u.flags |= 65536, false;
      }
      u = u.return;
    } while (u !== null);
    return false;
  }
  var li = Error(S(461)), il = false;
  function ml(l, t, u, a) {
    t.child = l === null ? q0(t, null, u, a) : xu(t, l.child, u, a);
  }
  function rm(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a) c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Xu(t), a = Gc(l, t, u, f, n, e), c = Qc(), l !== null && !il ? (Xc(l, t, e), Kt(l, t, e)) : (C && c && Nn(t), t.flags |= 1, ml(l, t, a, e), t.child);
  }
  function Bm(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !gc(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, Rm(l, t, n, a, e)) : (l = En(u.type, null, a, t, t.mode, e), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !ii(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : de, u(f, a) && l.ref === t.ref) return Kt(l, t, e);
    }
    return t.flags |= 1, l = Gt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Rm(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (de(n, a) && l.ref === t.ref) if (il = false, t.pendingProps = a = n, ii(l, e)) (l.flags & 131072) !== 0 && (il = true);
      else return t.lanes = l.lanes, Kt(l, t, e);
    }
    return ti(l, t, u, a, e);
  }
  function qm(l, t, u, a) {
    var e = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | u : u, l !== null) {
          for (a = t.child = l.child, e = 0; a !== null; ) e = e | a.lanes | a.childLanes, a = a.sibling;
          a = e & ~n;
        } else a = 0, t.child = null;
        return Ym(l, t, n, u, a);
      }
      if ((u & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Un(t, n !== null ? n.cachePool : null), n !== null ? Q0(t, n) : rc(), X0(t);
      else return a = t.lanes = 536870912, Ym(l, t, n !== null ? n.baseLanes | u : u, u, a);
    } else n !== null ? (Un(t, n.cachePool), Q0(t, n), hu(), t.memoizedState = null) : (l !== null && Un(t, null), rc(), hu());
    return ml(l, t, e, u), t.child;
  }
  function Ue(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
  }
  function Ym(l, t, u, a, e) {
    var n = _c();
    return n = n === null ? null : { parent: fl._currentValue, pool: n }, t.memoizedState = { baseLanes: u, cachePool: n }, l !== null && Un(t, null), rc(), X0(t), l !== null && Qu(l, t, a, true), t.childLanes = e, null;
  }
  function Jn(l, t) {
    return t = pn({ mode: t.mode, children: t.children }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Gm(l, t, u) {
    return xu(t, l.child, null, u), l = Jn(t, t.pendingProps), l.flags |= 2, Kl(t), t.memoizedState = null, l;
  }
  function od(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (C) {
        if (a.mode === "hidden") return l = Jn(t, a), t.lanes = 536870912, l.memoizedState = { baseLanes: 0, cachePool: null }, Ue(null, l);
        if (Rc(t), (l = F) ? (l = yy(l, lt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: uu !== null ? { id: gt, overflow: St } : null, retryLane: 536870912, hydrationErrors: null }, u = s0(l), u.return = t, t.child = u, hl = t, F = null)) : l = null, l === null) throw eu(t);
        return t.lanes = 536870912, null;
      }
      return Jn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Rc(t), e) if (t.flags & 256) t.flags &= -257, t = Gm(l, t, u);
      else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
      else throw Error(S(558));
      else if (il || Qu(l, t, u, false), e = (u & l.childLanes) !== 0, il || e) {
        if (mu.current === null) {
          if (a = $, a !== null && (f = Nv(a, u), f !== 0 && f !== n.retryLane)) throw n.retryLane = f, Ru(l, f), ql(a, l, f), li;
          hf();
        }
        t = Gm(l, t, u);
      } else l = n.treeContext, F = ut(f.nextSibling), hl = t, C = true, au = null, lt = false, l !== null && O0(t, l), t = Jn(t, a), t.flags |= 134221824;
      return t;
    }
    return l = Gt(l.child, { mode: a.mode, children: a.children }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Ua(l, t) {
    var u = t.ref;
    if (u === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object") throw Error(S(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function ti(l, t, u, a, e) {
    return Xu(t), u = Gc(l, t, u, a, void 0, e), a = Qc(), l !== null && !il ? (Xc(l, t, e), Kt(l, t, e)) : (C && a && Nn(t), t.flags |= 1, ml(l, t, u, e), t.child);
  }
  function Qm(l, t, u, a, e, n) {
    return Xu(t), t.updateQueue = null, u = Z0(t, a, u, e), j0(l), a = Qc(), l !== null && !il ? (Xc(l, t, n), Kt(l, t, n)) : (C && a && Nn(t), t.flags |= 1, ml(l, t, u, n), t.child);
  }
  function Xm(l, t, u, a, e) {
    if (Xu(t), t.stateNode === null) {
      var n = Ta, f = u.contextType;
      typeof f == "object" && f !== null && (n = zl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = kc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Mc(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? zl(f) : Ta, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (Ic(t, u, f, a), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && kc.enqueueReplaceState(n, n.state, null), Ne(t, a, n, e), Oe(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = true;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Ju(u, c);
      n.props = i;
      var h = n.context, g = u.contextType;
      f = Ta, typeof g == "object" && g !== null && (f = zl(g));
      var T = u.getDerivedStateFromProps;
      g = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || h !== f) && Am(t, n, a, f), cu = false;
      var m = t.memoizedState;
      n.state = m, Ne(t, a, n, e), Oe(), h = t.memoizedState, c || m !== h || cu ? (typeof T == "function" && (Ic(t, u, T, a), h = t.memoizedState), (i = cu || Nm(t, u, i, a, m, h, f)) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = h), n.props = a, n.state = h, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = false);
    } else {
      n = t.stateNode, Uc(l, t), f = t.memoizedProps, g = Ju(u, f), n.props = g, T = t.pendingProps, m = n.context, h = u.contextType, i = Ta, typeof h == "object" && h !== null && (i = zl(h)), c = u.getDerivedStateFromProps, (h = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || m !== i) && Am(t, n, a, i), cu = false, m = t.memoizedState, n.state = m, Ne(t, a, n, e), Oe();
      var o = t.memoizedState;
      f !== T || m !== o || cu || l !== null && l.dependencies !== null && Dn(l.dependencies) ? (typeof c == "function" && (Ic(t, u, c, a), o = t.memoizedState), (g = cu || Nm(t, u, g, a, m, o, i) || l !== null && l.dependencies !== null && Dn(l.dependencies)) ? (h || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, o, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, o, i)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && m === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && m === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = o), n.props = a, n.state = o, n.context = i, a = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && m === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && m === l.memoizedState || (t.flags |= 1024), a = false);
    }
    return n = a, Ua(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = xu(t, l.child, null, e), t.child = xu(t, null, u, e)) : ml(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = Kt(l, t, e), l;
  }
  function jm(l, t, u, a) {
    return Yu(), t.flags |= 256, ml(l, t, u, a), t.child;
  }
  var ui = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function ai(l) {
    return { baseLanes: l, cachePool: U0() };
  }
  function ei(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= Jl), l;
  }
  function Zm(l, t, u) {
    var a = t.pendingProps, e = false, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? false : (sl.current & 2) !== 0), f && (e = true, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (C) {
        if (e ? yu(t) : hu(), (l = F) ? (l = yy(l, lt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: uu !== null ? { id: gt, overflow: St } : null, retryLane: 536870912, hydrationErrors: null }, u = s0(l), u.return = t, t.child = u, hl = t, F = null)) : l = null, l === null) throw eu(t);
        return tv(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return n = a.children, a = a.fallback, e ? (hu(), e = t.mode, n = pn({ mode: "hidden", children: n }, e), a = qu(a, e, u, null), n.return = t, a.return = t, n.sibling = a, t.child = n, a = t.child, a.memoizedState = ai(u), a.childLanes = ei(l, f, u), t.memoizedState = ui, Ue(null, a)) : (yu(t), ni(t, n));
    }
    var c = l.memoizedState;
    if (c !== null) {
      var i = c.dehydrated;
      if (i !== null) return gd(l, t, n, f, a, i, c, u);
    }
    return e ? (hu(), e = a.fallback, n = t.mode, c = l.child, i = c.sibling, a = Gt(c, { mode: "hidden", children: a.children }), a.subtreeFlags = c.subtreeFlags & 1206910976, i !== null ? e = Gt(i, e) : (e = qu(e, n, u, null), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, Ue(null, a), a = t.child, e = l.child.memoizedState, e === null ? e = ai(u) : (n = e.cachePool, n !== null ? (c = fl._currentValue, n = n.parent !== c ? { parent: c, pool: c } : n) : n = U0(), e = { baseLanes: e.baseLanes | u, cachePool: n }), a.memoizedState = e, a.childLanes = ei(l, f, u), t.memoizedState = ui, Ue(l.child, a)) : (yu(t), u = l.child, l = u.sibling, u = Gt(u, { mode: "visible", children: a.children }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function ni(l, t) {
    return t = pn({ mode: "visible", children: t }, l.mode), t.return = l, l.child = t;
  }
  function pn(l, t) {
    return l = Cl(22, l, null, t), l.lanes = 0, l;
  }
  function wn(l, t, u) {
    return xu(t, l.child, null, u), l = ni(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
  }
  function gd(l, t, u, a, e, n, f, c) {
    if (u) return t.flags & 256 ? (yu(t), t.flags &= -257, wn(l, t, c)) : t.memoizedState !== null ? (hu(), t.child = l.child, t.flags |= 128, null) : (hu(), n = e.fallback, f = t.mode, e = pn({ mode: "visible", children: e.children }, f), n = qu(n, f, c, null), n.flags |= 2, e.return = t, n.return = t, e.sibling = n, t.child = e, xu(t, l.child, null, c), e = t.child, e.memoizedState = ai(c), e.childLanes = ei(l, a, c), t.memoizedState = ui, Ue(null, e));
    if (yu(t), tv(n)) {
      if (a = n.nextSibling && n.nextSibling.dataset, a) var i = a.dgst;
      return a = i, a !== "" && (e = Error(S(419)), e.stack = "", e.digest = a, Se({ value: e, source: null, stack: null })), wn(l, t, c);
    }
    if (il || Qu(l, t, c, false), a = (c & l.childLanes) !== 0, il || a) {
      if (mu.current !== null) return wn(l, t, c);
      if (a = $, a !== null && (e = Nv(a, c), e !== 0 && e !== f.retryLane)) throw f.retryLane = e, Ru(l, e), ql(a, l, e), li;
      return lv(n) || hf(), wn(l, t, c);
    }
    return lv(n) ? (t.flags |= 192, t.child = l.child, null) : (l = f.treeContext, F = ut(n.nextSibling), hl = t, C = true, au = null, lt = false, l !== null && O0(t, l), t = ni(t, e.children), t.flags |= 134221824, t);
  }
  function Vm(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), _n(l.return, t, u);
  }
  function Km(l) {
    for (var t = null; l !== null; ) {
      var u = l.alternate;
      u !== null && qn(u) === null && (t = l), l = l.sibling;
    }
    return t;
  }
  function $n(l, t, u, a, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: u, tailMode: e, treeForkCount: n } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = u, f.tailMode = e, f.treeForkCount = n);
  }
  function fi(l) {
    var t = l.child;
    for (l.child = null; t !== null; ) {
      var u = t.sibling;
      t.sibling = l.child, l.child = t, t = u;
    }
  }
  function ci(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    a = a.children;
    var f = sl.current;
    if (t.flags & 128) return Ae(t, f), null;
    var c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, Ae(t, f), e === "backwards" && l !== null ? (fi(l), ml(l, t, a, u), fi(l)) : ml(l, t, a, u), a = C ? ge : 0, !c && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
      if (l.tag === 13) l.memoizedState !== null && Vm(l, u, t);
      else if (l.tag === 19) Vm(l, u, t);
      else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break l;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) break l;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    switch (e) {
      case "backwards":
        u = Km(t.child), u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null, fi(t)), $n(t, true, e, null, n, a);
        break;
      case "unstable_legacy-backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && qn(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        $n(t, true, u, null, n, a);
        break;
      case "together":
        $n(t, false, null, null, void 0, a);
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        u = Km(t.child), u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), $n(t, false, e, u, n, a);
    }
    return t.child;
  }
  function xm(l, t, u) {
    var a = t.pendingProps;
    return nu(t, t.type, a.value), ml(l, t, a.children, u), t.child;
  }
  function Kt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), Su |= t.lanes, (u & t.childLanes) === 0) if (l !== null) {
      if (Qu(l, t, u, false), (u & t.childLanes) === 0) return null;
    } else return null;
    if (l !== null && t.child !== l.child) throw Error(S(153));
    if (t.child !== null) {
      for (l = t.child, u = Gt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; ) l = l.sibling, u = u.sibling = Gt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function ii(l, t) {
    return (l.lanes & t) !== 0 ? true : (l = l.dependencies, !!(l !== null && Dn(l)));
  }
  function Sd(l, t, u) {
    switch (t.tag) {
      case 3:
        Ie(t, t.stateNode.containerInfo), nu(t, fl, l.memoizedState.cache), Yu();
        break;
      case 27:
      case 5:
        Yf(t);
        break;
      case 4:
        Ie(t, t.stateNode.containerInfo);
        break;
      case 10:
        nu(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Rc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null) return yu(t), t.flags |= 128, null;
          a = Qu(l, t, u, false);
          var e = t.child.childLanes;
          return a || (u & e) !== 0 ? Zm(l, t, u) : (yu(t), l = Kt(l, t, u), l !== null ? l.sibling : null);
        }
        yu(t);
        break;
      case 19:
        if (t.flags & 128) return ci(l, t, u);
        if (e = (l.flags & 128) !== 0, a = (u & t.childLanes) !== 0, a || (Qu(l, t, u, false), a = (u & t.childLanes) !== 0), e) {
          if (a) return ci(l, t, u);
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), Ae(t, sl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, qm(l, t, u, t.pendingProps);
      case 24:
        nu(t, fl, l.memoizedState.cache);
    }
    return Kt(l, t, u);
  }
  function Lm(l, t, u) {
    if (l !== null) if (l.memoizedProps !== t.pendingProps) il = true;
    else {
      if (!ii(l, u) && (t.flags & 128) === 0) return il = false, Sd(l, t, u);
      il = (l.flags & 131072) !== 0;
    }
    else il = false, C && (t.flags & 1048576) !== 0 && E0(t, ge, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Vu(t.elementType), t.type = l, typeof l == "function") gc(l) ? (a = Ju(l, a), t.tag = 1, t = Xm(null, t, l, a, u)) : (t.tag = 0, t = ti(null, t, l, a, u));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === H) {
                t.tag = 11, t = rm(null, t, l, a, u);
                break l;
              } else if (e === ul) {
                t.tag = 14, t = Bm(null, t, l, a, u);
                break l;
              } else if (e === b) {
                t.tag = 10, t.type = l, t = xm(null, t, u);
                break l;
              }
            }
            throw t = Rf(l) || l, Error(S(306, t, ""));
          }
        }
        return t;
      case 0:
        return ti(l, t, t.type, t.pendingProps, u);
      case 1:
        return a = t.type, e = Ju(a, t.pendingProps), Xm(l, t, a, e, u);
      case 3:
        l: {
          if (Ie(t, t.stateNode.containerInfo), l === null) throw Error(S(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Uc(l, t), Ne(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, nu(t, fl, a), a !== n.cache && Oc(t, [fl], u, true), Oe(), a = f.element, n.isDehydrated) if (n = { element: a, isDehydrated: false, cache: f.cache }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
            t = jm(l, t, a, u);
            break l;
          } else if (a !== e) {
            e = Il(Error(S(424)), t), Se(e), t = jm(l, t, a, u);
            break l;
          } else {
            switch (l = t.stateNode.containerInfo, l.nodeType) {
              case 9:
                l = l.body;
                break;
              default:
                l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
            }
            for (F = ut(l.firstChild), hl = t, C = true, au = null, lt = true, u = q0(t, null, a, u), t.child = u; u; ) u.flags = u.flags & -3 | 134221824, u = u.sibling;
          }
          else {
            if (Yu(), a === e) {
              t = Kt(l, t, u);
              break l;
            }
            ml(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ua(l, t), l === null ? (u = Ty(t.type, null, t.pendingProps, null)) ? t.memoizedState = u : C || (t.stateNode = F1(t.type, t.pendingProps, It.current, t)) : t.memoizedState = Ty(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return Yf(t), l === null && C && (a = t.stateNode = oy(t.type, t.pendingProps, It.current), hl = t, lt = true, e = F, bu(t.type) ? (uv = e, F = ut(a.firstChild)) : F = e), ml(l, t, t.pendingProps.children, u), Ua(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && C && ((e = a = F) && (a = io(a, t.type, t.pendingProps, lt), a !== null ? (t.stateNode = a, hl = t, F = ut(a.firstChild), lt = false, e = true) : e = false), e || eu(t)), Yf(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, wi(e, n) ? a = null : f !== null && wi(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Gc(l, t, nd, null, null, u), pa._currentValue = e), Ua(l, t), ml(l, t, a, u), t.child;
      case 6:
        return l === null && C && ((l = u = F) && (u = vo(u, t.pendingProps, lt), u !== null ? (t.stateNode = u, hl = t, F = null, l = true) : l = false), l || eu(t)), null;
      case 13:
        return Zm(l, t, u);
      case 4:
        return Ie(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = xu(t, null, a, u) : ml(l, t, a, u), t.child;
      case 11:
        return rm(l, t, t.type, t.pendingProps, u);
      case 7:
        return a = t.pendingProps, Ua(l, t), ml(l, t, a, u), t.child;
      case 8:
        return ml(l, t, t.pendingProps.children, u), t.child;
      case 12:
        return ml(l, t, t.pendingProps.children, u), t.child;
      case 10:
        return xm(l, t, u);
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Xu(t), e = zl(e), a = a(e), t.flags |= 1, ml(l, t, a, u), t.child;
      case 14:
        return Bm(l, t, t.type, t.pendingProps, u);
      case 15:
        return Rm(l, t, t.type, t.pendingProps, u);
      case 19:
        return ci(l, t, u);
      case 31:
        return od(l, t, u);
      case 22:
        return qm(l, t, u, t.pendingProps);
      case 24:
        return Xu(t), a = zl(fl), l === null ? (e = _c(), e === null && (e = $, n = Nc(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, Mc(t), nu(t, fl, e)) : ((l.lanes & u) !== 0 && (Uc(l, t), Ne(t, null, null, u), Oe()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), nu(t, fl, a)) : (a = n.cache, nu(t, fl, a), a !== e.cache && Oc(t, [fl], u, true))), ml(l, t, t.pendingProps.children, u), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = { autoName: null, paired: null, clones: null, ref: null }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= l === null ? 18882560 : 18874368 : C && Nn(t), l !== null && l.memoizedProps.name !== a.name ? t.flags |= 4194816 : Ua(l, t), ml(l, t, a.children, u), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(S(156, t.tag));
  }
  function xt(l) {
    l.flags |= 4;
  }
  function vi(l, t, u, a, e) {
    var n;
    if ((n = (l.mode & 32) !== 0) && (n = u === null ? Oy(t, a) : Oy(t, a) && (a.src !== u.src || a.srcSet !== u.srcSet)), n) {
      if (l.flags |= 16777216, (e & 335544128) === e) if (l.stateNode.complete) l.flags |= 8192;
      else if (_1()) l.flags |= 8192;
      else throw Ku = Cn, Dc;
    } else l.flags &= -16777217;
  }
  function Jm(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !Ny(t)) if (_1()) l.flags |= 8192;
    else throw Ku = Cn, Dc;
  }
  function Wn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? bv() : 536870912, l.lanes |= t, Ra |= t);
  }
  function He(l, t) {
    if (!C) switch (l.tailMode) {
      case "visible":
        break;
      case "collapsed":
        for (var u = l.tail, a = null; u !== null; ) u.alternate !== null && (a = u), u = u.sibling;
        a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
        break;
      default:
        for (t = l.tail, u = null; t !== null; ) t.alternate !== null && (u = t), t = t.sibling;
        u === null ? l.tail = null : u.sibling = null;
    }
  }
  function I(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t) for (var e = l.child; e !== null; ) u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 1206910976, a |= e.flags & 1206910976, e.return = l, e = e.sibling;
    else for (e = l.child; e !== null; ) u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function zd(l, t, u) {
    var a = t.pendingProps;
    switch (Tc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return I(t), null;
      case 1:
        return I(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), jt(fl), ea(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Ea(t) ? xt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, bc())), I(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (xt(t), n !== null ? (I(t), Jm(t, n)) : (I(t), vi(t, e, null, a, u))) : n ? n !== l.memoizedState ? (xt(t), I(t), Jm(t, n)) : (I(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && xt(t), I(t), vi(t, e, l, a, u)), null;
      case 27:
        if (ke(t), u = It.current, e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && xt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(S(166));
            return I(t), t.subtreeFlags &= -33554433, null;
          }
          l = dt.current, Ea(t) ? N0(t, l) : (l = oy(e, a, u), t.stateNode = l, xt(t));
        }
        return I(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (ke(t), e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && xt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(S(166));
            return I(t), t.subtreeFlags &= -33554433, null;
          }
          if (n = dt.current, Ea(t)) N0(t, n);
          else {
            var f = Ze(It.current);
            switch (n) {
              case 1:
                n = f.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                n = f.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    n = f.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof a.is == "string" ? f.createElement("select", { is: a.is }) : f.createElement("select"), a.multiple ? n.multiple = true : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? f.createElement(e, { is: a.is }) : f.createElement(e);
                }
            }
            n[Sl] = t, n[Hl] = a;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t) break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (El(n, e, a), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = true;
                break l;
              default:
                a = false;
            }
            a && xt(t);
          }
        }
        return I(t), t.subtreeFlags &= -33554433, vi(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, u), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && xt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(S(166));
          if (l = It.current, Ea(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = hl, e !== null) switch (e.tag) {
              case 27:
              case 5:
                a = e.memoizedProps;
            }
            l[Sl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === true || p1(l.nodeValue, u)), l || eu(t, true);
          } else l = Ze(l).createTextNode(a), l[Sl] = t, t.stateNode = l;
        }
        return I(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = Ea(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(S(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(557));
              l[Sl] = t;
            } else Yu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            I(t), l = false;
          } else u = bc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = true;
          if (!l) return t.flags & 256 ? (Kl(t), t) : (Kl(t), null);
          if ((t.flags & 128) !== 0) throw Error(S(558));
        }
        return I(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = Ea(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(S(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
              e[Sl] = t;
            } else Yu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            I(t), e = false;
          } else e = bc(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = true;
          if (!e) return t.flags & 256 ? (Kl(t), t) : (Kl(t), null);
        }
        return Kl(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), Wn(t, t.updateQueue), I(t), null);
      case 4:
        return ea(), l === null && Ki(t.stateNode.containerInfo), t.flags |= 67108864, I(t), null;
      case 10:
        return jt(t.type), I(t), null;
      case 19:
        if (qc(t), a = t.memoizedState, a === null) return I(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null) if (e) He(a, false);
        else {
          if (el !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
            if (n = qn(l), n !== null) {
              for (t.flags |= 128, He(a, false), l = n.updateQueue, t.updateQueue = l, Wn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; ) T0(u, l), u = u.sibling;
              return Ae(t, sl.current & 1 | 2), C && Qt(t, a.treeForkCount), t.child;
            }
            l = l.sibling;
          }
          a.tail !== null && Ql() > cf && (t.flags |= 128, e = true, He(a, false), t.lanes = 4194304);
        }
        else {
          if (!e) if (l = qn(n), l !== null) {
            if (t.flags |= 128, e = true, l = l.updateQueue, t.updateQueue = l, Wn(t, l), He(a, true), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !n.alternate && !C) return I(t), null;
          } else 2 * Ql() - a.renderingStartTime > cf && u !== 536870912 && (t.flags |= 128, e = true, He(a, false), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        if (a.tail !== null) {
          l = a.tail;
          l: {
            for (u = l; u !== null; ) {
              if (u.alternate !== null) {
                u = false;
                break l;
              }
              u = u.sibling;
            }
            u = true;
          }
          return a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Ql(), l.sibling = null, n = sl.current, n = e ? n & 1 | 2 : n & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !u || C ? Ae(t, n) : (u = n, W(Tl, t), W(sl, u), Nl === null && (Nl = t)), C && Qt(t, a.treeForkCount), l;
        }
        return I(t), null;
      case 22:
      case 23:
        return Kl(t), Bc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (I(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : I(t), u = t.updateQueue, u !== null && Wn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && gl(Zu), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), jt(fl), I(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, I(t), null;
    }
    throw Error(S(156, t.tag));
  }
  function Td(l, t) {
    switch (Tc(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return jt(fl), ea(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ke(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Kl(t), t.alternate === null) throw Error(S(340));
          Yu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (Kl(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(S(340));
          Yu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return qc(t), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null), t.flags |= 4, t) : null;
      case 4:
        return ea(), null;
      case 10:
        return jt(t.type), null;
      case 22:
      case 23:
        return Kl(t), Bc(), l !== null && gl(Zu), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return jt(fl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function pm(l, t) {
    switch (Tc(t), t.tag) {
      case 3:
        jt(fl), ea();
        break;
      case 26:
      case 27:
      case 5:
        ke(t);
        break;
      case 4:
        ea();
        break;
      case 31:
        t.memoizedState !== null && Kl(t);
        break;
      case 13:
        Kl(t);
        break;
      case 19:
        qc(t);
        break;
      case 10:
        jt(t.type);
        break;
      case 22:
      case 23:
        Kl(t), Bc(), l !== null && gl(Zu);
        break;
      case 24:
        jt(fl);
    }
  }
  function Ce(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      L(t, t.return, c);
    }
  }
  function du(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, h = c;
              try {
                h();
              } catch (g) {
                L(e, i, g);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (g) {
      L(t, t.return, g);
    }
  }
  function wm(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        G0(t, u);
      } catch (a) {
        L(l, l.return, a);
      }
    }
  }
  function $m(l, t, u) {
    u.props = Ju(l.type, l.memoizedProps), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      L(l, t, a);
    }
  }
  function zt(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            var e = l.stateNode, n = qt(l.memoizedProps, e);
            (e.ref === null || e.ref.name !== n) && (e.ref = ey(n)), a = e.ref;
            break;
          case 7:
            if (l.stateNode === null) {
              var f = new wl(l);
              Q(l.child, false, fo, f, void 0, void 0), l.stateNode = f;
            }
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (c) {
      L(l, t, c);
    }
  }
  function bl(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null) if (typeof a == "function") try {
      a();
    } catch (e) {
      L(l, t, e);
    } finally {
      l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
    }
    else if (typeof u == "function") try {
      u(null);
    } catch (e) {
      L(l, t, e);
    }
    else u.current = null;
  }
  function Fn(l, t) {
    if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && l.alternate === null && t !== null) for (var u = 0; u < t.length; u++) my(l.stateNode, t[u]);
  }
  function Wm(l) {
    for (var t = l.return; t !== null && (yi(t) && my(l.stateNode, t.stateNode), !mi(t)); ) t = t.return;
  }
  function re(l) {
    for (var t = l.return; t !== null && (yi(t) && co(l.stateNode, t.stateNode), !mi(t)); ) t = t.return;
  }
  function mi(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 27;
  }
  function yi(l) {
    return l && l.tag === 7 && l.stateNode !== null;
  }
  function hi(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      L(l, l.return, e);
    }
  }
  function di(l, t, u) {
    try {
      var a = l.stateNode;
      Kd(a, l.type, u, t), a[Hl] = t;
    } catch (e) {
      L(l, l.return, e);
    }
  }
  function Fm(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && bu(l.type) || l.tag === 4;
  }
  function oi(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Fm(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && bu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function gi(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6) e = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(e, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(e), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = ot)), Fn(l, a), G = true;
    else if (e !== 4 && (e === 27 && (Fn(l, a), a = null, bu(l.type) && (u = l.stateNode, t = null)), l = l.child, l !== null)) for (gi(l, t, u, a), l = l.sibling; l !== null; ) gi(l, t, u, a), l = l.sibling;
  }
  function In(l, t, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6) e = l.stateNode, t ? u.insertBefore(e, t) : u.appendChild(e), Fn(l, a), G = true;
    else if (e !== 4 && (e === 27 && (Fn(l, a), a = null, bu(l.type) && (u = l.stateNode)), l = l.child, l !== null)) for (In(l, t, u, a), l = l.sibling; l !== null; ) In(l, t, u, a), l = l.sibling;
  }
  function Im(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      El(t, a, u), t[Sl] = l, t[Hl] = u;
    } catch (n) {
      L(l, l.return, n);
    }
  }
  var kn = false, xl = null;
  function km(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (kn = true);
  }
  var Tt = null;
  function Pm() {
    var l = Tt;
    return Tt = null, l;
  }
  var rl = 0;
  function Ha(l, t, u, a, e) {
    return rl = 0, l1(l.child, t, u, a, e);
  }
  function l1(l, t, u, a, e) {
    for (var n = false; l !== null; ) {
      if (l.tag === 5) {
        var f = l.stateNode;
        if (a !== null) {
          var c = Fi(f);
          a.push(c), c.view && (n = true);
        } else n || Fi(f).view && (n = true);
        kn = true, ty(f, rl === 0 ? t : t + "_" + rl, u), rl++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && e || l1(l.child, t, u, a, e) && (n = true));
      l = l.sibling;
    }
    return n;
  }
  function st(l, t) {
    for (; l !== null; ) l.tag === 5 ? uy(l.stateNode, l.memoizedProps) : (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && t || st(l.child, t)), l = l.sibling;
  }
  function Pn(l) {
    if ((l.subtreeFlags & 18874368) !== 0) for (l = l.child; l !== null; ) {
      if ((l.tag !== 22 || l.memoizedState === null) && (Pn(l), l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)) {
        var t = l.memoizedProps;
        if (t.name == null || t.name === "auto") throw Error(S(544));
        var u = t.name;
        t = Yt(t.default, t.share), t !== "none" && (Ha(l, u, t, null, false) || st(l.child, false));
      }
      l = l.sibling;
    }
  }
  function Si(l, t) {
    if (l.tag === 30) {
      var u = l.stateNode, a = l.memoizedProps, e = qt(a, u), n = Yt(a.default, u.paired ? a.share : a.enter);
      n !== "none" ? Ha(l, e, n, null, false) ? (Pn(l), u.paired || t || Qa(l, a.onEnter)) : st(l.child, false) : Pn(l);
    } else if ((l.subtreeFlags & 33554432) !== 0) for (l = l.child; l !== null; ) Si(l, t), l = l.sibling;
    else Pn(l);
  }
  function zi(l) {
    if (xl !== null && xl.size !== 0) {
      var t = xl;
      if ((l.subtreeFlags & 18874368) !== 0) for (l = l.child; l !== null; ) {
        if (l.tag !== 22 || l.memoizedState === null) {
          if (l.tag === 30 && (l.flags & 18874368) !== 0) {
            var u = l.memoizedProps, a = u.name;
            if (a != null && a !== "auto") {
              var e = t.get(a);
              if (e !== void 0) {
                var n = Yt(u.default, u.share);
                if (n !== "none" && (Ha(l, a, n, null, false) ? (n = l.stateNode, e.paired = n, n.paired = e, Qa(l, u.onShare)) : st(l.child, false)), t.delete(a), t.size === 0) break;
              }
            }
          }
          zi(l);
        }
        l = l.sibling;
      }
    }
  }
  function Ti(l) {
    if (l.tag === 30) {
      var t = l.memoizedProps, u = qt(t, l.stateNode), a = xl !== null ? xl.get(u) : void 0, e = Yt(t.default, a !== void 0 ? t.share : t.exit);
      e !== "none" && (Ha(l, u, e, null, false) ? a !== void 0 ? (e = l.stateNode, a.paired = e, e.paired = a, xl.delete(u), Qa(l, t.onShare)) : Qa(l, t.onExit) : st(l.child, false)), xl !== null && zi(l);
    } else if ((l.subtreeFlags & 33554432) !== 0) for (l = l.child; l !== null; ) Ti(l), l = l.sibling;
    else xl !== null && zi(l);
  }
  function t1(l) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var t = l.memoizedProps, u = qt(t, l.stateNode);
        t = Yt(t.default, t.update), l.flags &= -5, t !== "none" && Ha(l, u, t, l.memoizedState = [], false);
      } else (l.subtreeFlags & 33554432) !== 0 && t1(l);
      l = l.sibling;
    }
  }
  function si(l) {
    if ((l.subtreeFlags & 18874368) !== 0) for (l = l.child; l !== null; ) {
      if (l.tag !== 22 || l.memoizedState === null) {
        if (l.tag === 30 && (l.flags & 18874368) !== 0) {
          var t = l.stateNode;
          t.paired !== null && (t.paired = null, st(l.child, false));
        }
        si(l);
      }
      l = l.sibling;
    }
  }
  function lf(l) {
    if (l.tag === 30) l.stateNode.paired = null, st(l.child, false), si(l);
    else if ((l.subtreeFlags & 33554432) !== 0) for (l = l.child; l !== null; ) lf(l), l = l.sibling;
    else si(l);
  }
  function u1(l) {
    for (l = l.child; l !== null; ) l.tag === 30 ? st(l.child, false) : (l.subtreeFlags & 33554432) !== 0 && u1(l), l = l.sibling;
  }
  function bi(l, t, u, a, e, n, f) {
    for (var c = false; t !== null; ) {
      if (t.tag === 5) {
        var i = t.stateNode;
        if (n !== null && rl < n.length) {
          var h = n[rl], g = Fi(i);
          (h.view || g.view) && (c = true);
          var T;
          if (T = (l.flags & 4) === 0) if (g.clip) T = true;
          else {
            T = h.rect;
            var m = g.rect;
            T = T.y !== m.y || T.x !== m.x || T.height !== m.height || T.width !== m.width;
          }
          T && (l.flags |= 4), g.abs ? g = !h.abs : (h = h.rect, g = g.rect, g = h.height !== g.height || h.width !== g.width), g && (l.flags |= 32);
        } else l.flags |= 32;
        (l.flags & 4) !== 0 && ty(i, rl === 0 ? u : u + "_" + rl, e), c && (l.flags & 4) !== 0 || (Tt === null && (Tt = []), Tt.push(i, rl === 0 ? a : a + "_" + rl, t.memoizedProps)), rl++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && f ? l.flags |= t.flags & 32 : bi(l, t.child, u, a, e, n, f) && (c = true));
      t = t.sibling;
    }
    return c;
  }
  function a1(l, t) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var u = l.memoizedProps, a = l.stateNode, e = qt(u, a), n = Yt(u.default, u.update);
        if (t) {
          a = a.clones;
          var f = a === null ? null : a.map($d);
        } else f = l.memoizedState, l.memoizedState = null;
        a = l;
        var c = l.child;
        rl = 0, e = bi(a, c, e, e, n, f, false), (l.flags & 4) !== 0 && e && (t || Qa(l, u.onUpdate));
      } else (l.subtreeFlags & 33554432) !== 0 && a1(l, t);
      l = l.sibling;
    }
  }
  var dl = false, V = false, bt = false, Ei = false, e1 = typeof WeakSet == "function" ? WeakSet : Set, ol = null, Et = false, Be = false, tf = false, Oi = false;
  function sd(l, t, u) {
    if (l = l.containerInfo, Ji = wa, l = i0(l), ic(l)) {
      if ("selectionStart" in l) var a = { start: l.selectionStart, end: l.selectionEnd };
      else l: {
        a = (a = l.ownerDocument) && a.defaultView || window;
        var e = a.getSelection && a.getSelection();
        if (e && e.rangeCount !== 0) {
          a = e.anchorNode;
          var n = e.anchorOffset, f = e.focusNode;
          e = e.focusOffset;
          try {
            a.nodeType, f.nodeType;
          } catch {
            a = null;
            break l;
          }
          var c = 0, i = -1, h = -1, g = 0, T = 0, m = l, o = null;
          t: for (; ; ) {
            for (var s; m !== a || n !== 0 && m.nodeType !== 3 || (i = c + n), m !== f || e !== 0 && m.nodeType !== 3 || (h = c + e), m.nodeType === 3 && (c += m.nodeValue.length), (s = m.firstChild) !== null; ) o = m, m = s;
            for (; ; ) {
              if (m === l) break t;
              if (o === a && ++g === n && (i = c), o === f && ++T === e && (h = c), (s = m.nextSibling) !== null) break;
              m = o, o = m.parentNode;
            }
            m = s;
          }
          a = i === -1 || h === -1 ? null : { start: i, end: h };
        } else a = null;
      }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (pi = { focusedElem: l, selectionRange: a }, wa = false, u = (u & 335544064) === u, ol = t, t = u ? 9270 : 1024; ol !== null; ) {
      if (l = ol, u && (a = l.deletions, a !== null)) for (n = 0; n < a.length; n++) u && Ti(a[n]);
      if (l.alternate === null && (l.flags & 2) !== 0) u && km(l), uf(u);
      else {
        if (l.tag === 22) {
          if (a = l.alternate, l.memoizedState !== null) {
            a !== null && a.memoizedState === null && u && Ti(a), uf(u);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            u && km(l), uf(u);
            continue;
          }
        }
        a = l.child, (l.subtreeFlags & t) !== 0 && a !== null ? (a.return = l, ol = a) : (u && t1(l), uf(u));
      }
    }
    xl = null;
  }
  function uf(l) {
    for (; ol !== null; ) {
      var t = ol, u = l, a = t.alternate, e = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && a !== null) {
            u = void 0, e = a.memoizedProps, a = a.memoizedState;
            var n = t.stateNode;
            try {
              var f = Ju(t.type, e);
              u = n.getSnapshotBeforeUpdate(f, a), n.__reactInternalSnapshotBeforeUpdate = u;
            } catch (c) {
              L(t, t.return, c);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (a = t.stateNode.containerInfo, u = a.nodeType, u === 9) Pi(a);
            else if (u === 1) switch (a.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Pi(a);
                break;
              default:
                a.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          u && a !== null && (u = qt(a.memoizedProps, a.stateNode), e = t.memoizedProps, e = Yt(e.default, e.update), e !== "none" && Ha(a, u, e, a.memoizedState = [], true));
          break;
        default:
          if ((e & 1024) !== 0) throw Error(S(163));
      }
      if (a = t.sibling, a !== null) {
        a.return = t.return, ol = a;
        break;
      }
      ol = t.return;
    }
  }
  function n1(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Ot(l, u), a & 4 && Ce(5, u);
        break;
      case 1:
        if (Ot(l, u), a & 4) if (l = u.stateNode, t === null) try {
          l.componentDidMount();
        } catch (f) {
          L(u, u.return, f);
        }
        else {
          var e = Ju(u.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (f) {
            L(u, u.return, f);
          }
        }
        a & 64 && wm(u), a & 512 && zt(u, u.return);
        break;
      case 3:
        if (Ot(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null) switch (u.child.tag) {
            case 27:
            case 5:
              t = u.child.stateNode;
              break;
            case 1:
              t = u.child.stateNode;
          }
          try {
            G0(l, t);
          } catch (f) {
            L(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Im(u);
      case 26:
      case 5:
        Ot(l, u), t === null && a & 4 && hi(u), a & 512 && zt(u, u.return);
        break;
      case 12:
        Ot(l, u);
        break;
      case 31:
        Ot(l, u), a & 4 && v1(l, u);
        break;
      case 13:
        Ot(l, u), a & 4 && m1(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = rd.bind(null, u), mo(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || dl, !a) {
          var n = t !== null && t.memoizedState !== null || V;
          t = dl, e = V, dl = a, (V = n) && !e ? (a = 2, (u.subtreeFlags & 8772) !== 0 && (a |= 1), vt(l, u, a)) : Ot(l, u), dl = t, V = e;
        }
        break;
      case 30:
        Ot(l, u), a & 512 && zt(u, u.return);
        break;
      case 7:
        a & 512 && zt(u, u.return);
      default:
        Ot(l, u);
    }
  }
  function Ni(l, t) {
    for (l = l.child; l !== null; ) f1(l, t), l = l.sibling;
  }
  function f1(l, t) {
    switch (l.tag) {
      case 5:
      case 26:
        try {
          var u = l.stateNode;
          if (t) {
            var a = u.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var e = l.stateNode, n = l.memoizedProps.style, f = n != null && n.hasOwnProperty("display") ? n.display : null;
            e.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (i) {
          L(l, l.return, i);
        }
        Ai(l, t);
        break;
      case 6:
        try {
          l.stateNode.nodeValue = t ? "" : l.memoizedProps, G = true;
        } catch (i) {
          L(l, l.return, i);
        }
        break;
      case 18:
        try {
          var c = l.stateNode;
          t ? ly(c, true) : ly(l.stateNode, false);
        } catch (i) {
          L(l, l.return, i);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && Ni(l, t);
        break;
      default:
        Ni(l, t);
    }
  }
  function Ai(l, t) {
    if (l.subtreeFlags & 67108864) for (l = l.child; l !== null; ) {
      l: {
        var u = l, a = t;
        switch (u.tag) {
          case 4:
            f1(u, a);
            break l;
          case 22:
            u.memoizedState === null && Ai(u, a);
            break l;
          default:
            Ai(u, a);
        }
      }
      l = l.sibling;
    }
  }
  function c1(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, c1(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && nn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var P = null, Bl = false;
  function ct(l, t, u) {
    for (u = u.child; u !== null; ) i1(l, t, u), u = u.sibling;
  }
  function i1(l, t, u) {
    if (Xl && typeof Xl.onCommitFiberUnmount == "function") try {
      Xl.onCommitFiberUnmount(ue, u);
    } catch {
    }
    switch (u.tag) {
      case 26:
        V || bl(u, t), ct(l, t, u), u.memoizedState ? u.memoizedState.count-- : u.stateNode && !V && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        V || bl(u, t), re(u);
        var a = P, e = Bl;
        bu(u.type) && (P = u.stateNode, Bl = false), ct(l, t, u), gy(u.stateNode, u.type, u.memoizedProps), P = a, Bl = e;
        break;
      case 5:
        V || bl(u, t), re(u);
      case 6:
        if (u.tag === 6 && re(u), a = P, e = Bl, P = null, ct(l, t, u), P = a, Bl = e, P !== null) if (Bl) try {
          (P.nodeType === 9 ? P.body : P.nodeName === "HTML" ? P.ownerDocument.body : P).removeChild(u.stateNode), G = true;
        } catch (n) {
          L(u, t, n);
        }
        else try {
          P.removeChild(u.stateNode), G = true;
        } catch (n) {
          L(u, t, n);
        }
        break;
      case 18:
        P !== null && (Bl ? (l = P, P1(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, u.stateNode), $a(l)) : P1(P, u.stateNode));
        break;
      case 4:
        a = P, e = Bl, P = u.stateNode.containerInfo, Bl = true, ct(l, t, u), P = a, Bl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        du(2, u, t), V || du(4, u, t), ct(l, t, u);
        break;
      case 1:
        V || (bl(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && $m(u, t, a)), ct(l, t, u);
        break;
      case 21:
        ct(l, t, u);
        break;
      case 22:
        V = (a = V) || u.memoizedState !== null, ct(l, t, u), V = a;
        break;
      case 30:
        bl(u, t), ct(l, t, u);
        break;
      case 7:
        V || bl(u, t), ct(l, t, u);
        break;
      default:
        ct(l, t, u);
    }
  }
  function v1(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        $a(l);
      } catch (u) {
        L(t, t.return, u);
      }
    }
  }
  function m1(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      $a(l);
    } catch (u) {
      L(t, t.return, u);
    }
  }
  function bd(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new e1()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new e1()), t;
      default:
        throw Error(S(435, l.tag));
    }
  }
  function af(l, t) {
    var u = bd(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = Bd.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function Ml(l, t, u) {
    var a = t.deletions;
    if (a !== null) for (var e = 0; e < a.length; e++) {
      var n = a[e], f = l, c = t, i = c;
      l: for (; i !== null; ) {
        switch (i.tag) {
          case 27:
            if (bu(i.type)) {
              P = i.stateNode, Bl = false;
              break l;
            }
            break;
          case 5:
            P = i.stateNode, Bl = false;
            break l;
          case 3:
          case 4:
            P = i.stateNode.containerInfo, Bl = true;
            break l;
        }
        i = i.return;
      }
      if (P === null) throw Error(S(160));
      i1(f, c, n), P = null, Bl = false, f = n.alternate, f !== null && (f.return = null), n.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) y1(t, l, u), t = t.sibling;
  }
  var it = null;
  function y1(l, t, u) {
    var a = l.alternate, e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (e & 4 && (a = l.updateQueue, a = a !== null ? a.events : null, a !== null)) for (var n = 0; n < a.length; n++) {
          var f = a[n];
          f.ref.impl = f.nextImpl;
        }
        Ml(t, l, u), Ul(l), e & 4 && (du(3, l, l.return), Ce(3, l), du(5, l, l.return));
        break;
      case 1:
        Ml(t, l, u), Ul(l), e & 512 && (V || a === null || bl(a, a.return)), e & 64 && dl && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? t : u.concat(t))));
        break;
      case 26:
        if (n = it, Ml(t, l, u), Ul(l), e & 512 && (V || a === null || bl(a, a.return)), e & 4) if (e = a !== null ? a.memoizedState : null, u = l.memoizedState, a === null) if (u === null) if (l.stateNode === null) if (dl) l.stateNode = F1(l.type, l.memoizedProps, t.containerInfo, l);
        else {
          l: {
            t = l.type, u = l.memoizedProps, e = n.ownerDocument || n;
            t: switch (t) {
              case "title":
                a = e.getElementsByTagName("title")[0], (!a || a[ne] || a[Sl] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = e.createElement(t), e.head.insertBefore(a, e.querySelector("head > title"))), El(a, t, u), a[Sl] = l, yl(a), t = a;
                break l;
              case "link":
                if (n = Ey("link", "href", e).get(t + (u.href || ""))) {
                  for (f = 0; f < n.length; f++) if (a = n[f], a.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && a.getAttribute("rel") === (u.rel == null ? null : u.rel) && a.getAttribute("title") === (u.title == null ? null : u.title) && a.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                    n.splice(f, 1);
                    break t;
                  }
                }
                a = e.createElement(t), El(a, t, u), e.head.appendChild(a);
                break;
              case "meta":
                if (n = Ey("meta", "content", e).get(t + (u.content || ""))) {
                  for (f = 0; f < n.length; f++) if (a = n[f], a.getAttribute("content") === (u.content == null ? null : "" + u.content) && a.getAttribute("name") === (u.name == null ? null : u.name) && a.getAttribute("property") === (u.property == null ? null : u.property) && a.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && a.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                    n.splice(f, 1);
                    break t;
                  }
                }
                a = e.createElement(t), El(a, t, u), e.head.appendChild(a);
                break;
              default:
                throw Error(S(468, t));
            }
            a[Sl] = l, yl(a), t = a;
          }
          l.stateNode = t;
        }
        else dl || fv(n, l.type, l.stateNode);
        else l.stateNode = by(n, u, l.memoizedProps);
        else e !== u ? (e === null ? (t = a.stateNode, t === null || V || t.parentNode.removeChild(t)) : e.count--, u === null ? dl || fv(n, l.type, l.stateNode) : by(n, u, l.memoizedProps)) : u === null && l.stateNode !== null && di(l, l.memoizedProps, a.memoizedProps);
        break;
      case 27:
        Ml(t, l, u), Ul(l), e & 512 && (V || a === null || bl(a, a.return)), a !== null && e & 4 && di(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (n = bt, bt = false, Ml(t, l, u), bt = n, Ul(l), e & 512 && (V || a === null || bl(a, a.return)), l.flags & 32) {
          t = l.stateNode;
          try {
            ma(t, ""), G = true;
          } catch (g) {
            L(l, l.return, g);
          }
        }
        e & 4 && l.stateNode != null && (t = l.memoizedProps, di(l, t, a !== null ? a.memoizedProps : t)), e & 1024 && (Ei = true);
        break;
      case 6:
        if (Ml(t, l, u), Ul(l), e & 4) {
          if (l.stateNode === null) throw Error(S(162));
          t = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = t, G = true;
          } catch (g) {
            L(l, l.return, g);
          }
        }
        break;
      case 3:
        if (G = false, Ef = null, n = it, it = Ve(t.containerInfo), Ml(t, l, u), it = n, Ul(l), e & 4 && a !== null && a.memoizedState.isDehydrated) try {
          $a(t.containerInfo);
        } catch (g) {
          L(l, l.return, g);
        }
        Ei && (Ei = false, h1(l)), G = false;
        break;
      case 4:
        e = bt, bt = dl, a = Rv(), n = it, it = Ve(l.stateNode.containerInfo), Ml(t, l, u), Ul(l), it = n, G && Be && (tf = true), G = a, bt = e;
        break;
      case 12:
        Ml(t, l, u), Ul(l);
        break;
      case 31:
        Ml(t, l, u), Ul(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, af(l, t)));
        break;
      case 13:
        Ml(t, l, u), Ul(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ff = Ql()), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, af(l, t)));
        break;
      case 22:
        n = l.memoizedState !== null, f = a !== null && a.memoizedState !== null;
        var c = dl, i = V, h = bt;
        dl = c || n, bt = h || n, V = i || f, Ml(t, l, u), V = i, bt = h, dl = c, Ul(l), e & 8192 && (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, !n || a === null || f || dl || V || (t = f || V, u = dl, a = V, dl = n || dl, V = t, ou(l, 2), dl = u, V = a), !n && bt || Ni(l, n)), e & 4 && (t = l.updateQueue, t !== null && (u = t.retryQueue, u !== null && (t.retryQueue = null, af(l, u))));
        break;
      case 19:
        Ml(t, l, u), Ul(l), e & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, af(l, t)));
        break;
      case 30:
        e & 512 && (V || a === null || bl(a, a.return)), e = Rv(), n = Be, f = (u & 335544064) === u, c = l.memoizedProps, Be = f && Yt(c.default, c.update) !== "none", Ml(t, l, u), Ul(l), f && a !== null && G && (l.flags |= 4), Be = n, G = e;
        break;
      case 21:
        break;
      case 7:
        e & 512 && (V || a === null || bl(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = l);
      default:
        Ml(t, l, u), Ul(l);
    }
  }
  function Ul(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (Fm(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var e = l.return; e !== null; ) {
          if (yi(e)) {
            var n = e.stateNode;
            a === null ? a = [n] : a.push(n);
          }
          if (mi(e)) break;
          e = e.return;
        }
        var f = a;
        if (u == null) throw Error(S(160));
        switch (u.tag) {
          case 27:
            var c = u.stateNode, i = oi(l);
            In(l, i, c, f);
            break;
          case 5:
            var h = u.stateNode;
            u.flags & 32 && (ma(h, ""), u.flags &= -33);
            var g = oi(l);
            In(l, g, h, f);
            break;
          case 3:
          case 4:
            var T = u.stateNode.containerInfo, m = oi(l);
            gi(l, m, T, f);
            break;
          default:
            throw Error(S(161));
        }
      } catch (o) {
        L(l, l.return, o);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function h1(l) {
    if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
      var t = l;
      h1(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, wa = true, t.reset(), wa = false), l = l.sibling;
    }
  }
  function Ca(l, t) {
    if (t.subtreeFlags & 9270) for (t = t.child; t !== null; ) d1(t, l), t = t.sibling;
    else a1(t, false);
  }
  function d1(l, t) {
    var u = l.alternate;
    if (u === null) Si(l, false);
    else switch (l.tag) {
      case 3:
        if (Oi = Et = false, Pm(), Ca(t, l), !Et && !tf) {
          if (l = Tt, l !== null) for (var a = 0; a < l.length; a += 3) {
            u = l[a];
            var e = l[a + 1];
            uy(u, l[a + 2]), u = u.ownerDocument.documentElement, u !== null && u.animate({ opacity: [0, 0], pointerEvents: ["none", "none"] }, { duration: 0, fill: "forwards", pseudoElement: "::view-transition-group(" + e + ")" });
          }
          l = t.containerInfo, l = l.nodeType === 9 ? l.documentElement : l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "" && (l.style.viewTransitionName = "none", l.animate({ opacity: [0, 0], pointerEvents: ["none", "none"] }, { duration: 0, fill: "forwards", pseudoElement: "::view-transition-group(root)" }), l.animate({ width: [0, 0], height: [0, 0] }, { duration: 0, fill: "forwards", pseudoElement: "::view-transition" })), Oi = true;
        }
        Tt = null;
        break;
      case 5:
        Ca(t, l);
        break;
      case 4:
        a = Et, Et = false, Ca(t, l), Et && (tf = true), Et = a;
        break;
      case 22:
        l.memoizedState === null && (u.memoizedState !== null ? Si(l, false) : Ca(t, l));
        break;
      case 30:
        a = Et, e = Pm(), Et = false, Ca(t, l), Et && (l.flags |= 4);
        var n = l.memoizedProps, f = l.stateNode;
        t = qt(n, f), f = qt(u.memoizedProps, f);
        var c = Yt(n.default, n.update);
        c === "none" ? t = false : (n = u.memoizedState, u.memoizedState = null, u = l.child, rl = 0, t = bi(l, u, t, f, c, n, true), rl !== (n === null ? 0 : n.length) && (l.flags |= 32)), (l.flags & 4) !== 0 && t ? (Qa(l, l.memoizedProps.onUpdate), Tt = e) : e !== null && (e.push.apply(e, Tt), Tt = e), Et = (l.flags & 32) !== 0 ? true : a;
        break;
      default:
        Ca(t, l);
    }
  }
  function Ot(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) n1(l, t.alternate, t), t = t.sibling;
  }
  function ou(l, t) {
    for (l = l.child; l !== null; ) {
      var u = l, a = t;
      switch (u.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          du(4, u, u.return), ou(u, a);
          break;
        case 1:
          bl(u, u.return);
          var e = u.stateNode;
          typeof e.componentWillUnmount == "function" && $m(u, u.return, e), ou(u, a);
          break;
        case 27:
          (a & 2) !== 0 && gy(u.stateNode, u.type, u.memoizedProps);
        case 5:
          bl(u, u.return), u.tag !== 5 && u.tag !== 27 || re(u), ou(u, a);
          break;
        case 6:
          re(u);
          break;
        case 26:
          bl(u, u.return), e = u.stateNode, u.memoizedState !== null || e === null || V || e.parentNode.removeChild(e), ou(u, a);
          break;
        case 22:
          u.memoizedState === null && ou(u, a);
          break;
        case 30:
          bl(u, u.return), ou(u, a);
          break;
        case 7:
          bl(u, u.return);
        default:
          ou(u, a);
      }
      l = l.sibling;
    }
  }
  function vt(l, t, u) {
    for (u = (t.subtreeFlags & 8772) !== 0 ? u : u & -2, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags, c = (u & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          vt(e, n, u), Ce(4, n);
          break;
        case 1:
          if (vt(e, n, u), a = n, e = a.stateNode, typeof e.componentDidMount == "function") try {
            e.componentDidMount();
          } catch (g) {
            L(a, a.return, g);
          }
          if (a = n, e = a.updateQueue, e !== null) {
            var i = a.stateNode;
            try {
              var h = e.shared.hiddenCallbacks;
              if (h !== null) for (e.shared.hiddenCallbacks = null, e = 0; e < h.length; e++) Y0(h[e], i);
            } catch (g) {
              L(a, a.return, g);
            }
          }
          c && f & 64 && wm(n), zt(n, n.return);
          break;
        case 27:
          (u & 2) !== 0 && Im(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || Wm(n), vt(e, n, u), c && a === null && f & 4 && hi(n), zt(n, n.return);
          break;
        case 6:
          Wm(n);
          break;
        case 26:
          i = n.stateNode, n.memoizedState !== null || i === null || dl || fv(Ve(i.ownerDocument), n.type, i), vt(e, n, u), c && a === null && f & 4 && hi(n), zt(n, n.return);
          break;
        case 12:
          vt(e, n, u);
          break;
        case 31:
          vt(e, n, u), c && f & 4 && v1(e, n);
          break;
        case 13:
          vt(e, n, u), c && f & 4 && m1(e, n);
          break;
        case 22:
          n.memoizedState === null && vt(e, n, u), zt(n, n.return);
          break;
        case 30:
          vt(e, n, u), zt(n, n.return);
          break;
        case 7:
          zt(n, n.return);
        default:
          vt(e, n, u);
      }
      t = t.sibling;
    }
  }
  function _i(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && ze(u));
  }
  function Di(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && ze(l));
  }
  function tt(l, t, u, a) {
    var e = (u & 335544064) === u;
    if (t.subtreeFlags & (e ? 10262 : 10256)) for (t = t.child; t !== null; ) o1(l, t, u, a), t = t.sibling;
    else e && u1(t);
  }
  function o1(l, t, u, a) {
    var e = (u & 335544064) === u;
    e && t.alternate === null && t.return !== null && t.return.alternate !== null && lf(t);
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        tt(l, t, u, a), n & 2048 && Ce(9, t);
        break;
      case 1:
        tt(l, t, u, a);
        break;
      case 3:
        tt(l, t, u, a), e && Oi && (l = l.containerInfo, l = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, l.style.viewTransitionName === "root" && (l.style.viewTransitionName = ""), l = l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "none" && (l.style.viewTransitionName = "")), n & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (t.refCount++, n != null && ze(n)));
        break;
      case 12:
        if (n & 2048) {
          tt(l, t, u, a), n = t.stateNode;
          try {
            var f = t.memoizedProps, c = f.id, i = f.onPostCommit;
            typeof i == "function" && i(c, t.alternate === null ? "mount" : "update", n.passiveEffectDuration, -0);
          } catch (h) {
            L(t, t.return, h);
          }
        } else tt(l, t, u, a);
        break;
      case 31:
        tt(l, t, u, a);
        break;
      case 13:
        tt(l, t, u, a);
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, c = t.alternate, t.memoizedState !== null ? (e && c !== null && c.memoizedState === null && lf(c), f._visibility & 2 ? tt(l, t, u, a) : Re(l, t)) : (e && c !== null && c.memoizedState !== null && lf(t), f._visibility & 2 ? tt(l, t, u, a) : (f._visibility |= 2, ra(l, t, u, a, (t.subtreeFlags & 10256) !== 0 || false))), n & 2048 && _i(c, t);
        break;
      case 24:
        tt(l, t, u, a), n & 2048 && Di(t.alternate, t);
        break;
      case 30:
        e && (n = t.alternate, n !== null && (st(n.child, true), st(t.child, true))), tt(l, t, u, a);
        break;
      default:
        tt(l, t, u, a);
    }
  }
  function ra(l, t, u, a, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, h = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ra(n, f, c, i, e), Ce(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? ra(n, f, c, i, e) : Re(n, f) : (g._visibility |= 2, ra(n, f, c, i, e)), e && h & 2048 && _i(f.alternate, f);
          break;
        case 24:
          ra(n, f, c, i, e), e && h & 2048 && Di(f.alternate, f);
          break;
        default:
          ra(n, f, c, i, e);
      }
      t = t.sibling;
    }
  }
  function Re(l, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var u = l, a = t, e = a.flags;
      switch (a.tag) {
        case 22:
          Re(u, a), e & 2048 && _i(a.alternate, a);
          break;
        case 24:
          Re(u, a), e & 2048 && Di(a.alternate, a);
          break;
        default:
          Re(u, a);
      }
      t = t.sibling;
    }
  }
  var pu = 8192;
  function wu(l, t, u) {
    if (l.subtreeFlags & pu) for (l = l.child; l !== null; ) g1(l, t, u), l = l.sibling;
  }
  function g1(l, t, u) {
    switch (l.tag) {
      case 26:
        wu(l, t, u), l.flags & pu && (l.memoizedState !== null ? _o(u, it, l.memoizedState, l.memoizedProps) : (l = l.stateNode, (t & 335544128) === t && _y(u, l)));
        break;
      case 5:
        wu(l, t, u), l.flags & pu && (l = l.stateNode, (t & 335544128) === t && _y(u, l));
        break;
      case 3:
      case 4:
        var a = it;
        it = Ve(l.stateNode.containerInfo), wu(l, t, u), it = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = pu, pu = 16777216, wu(l, t, u), pu = a) : wu(l, t, u));
        break;
      case 30:
        if ((l.flags & pu) !== 0 && (a = l.memoizedProps.name, a != null && a !== "auto")) {
          var e = l.stateNode;
          e.paired = null, xl === null && (xl = /* @__PURE__ */ new Map()), xl.set(a, e);
        }
        wu(l, t, u);
        break;
      default:
        wu(l, t, u);
    }
  }
  function S1(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function qe(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var u = 0; u < t.length; u++) {
        var a = t[u];
        ol = a, T1(a, l);
      }
      S1(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) z1(l), l = l.sibling;
  }
  function z1(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        qe(l), l.flags & 2048 && du(9, l, l.return);
        break;
      case 3:
        qe(l);
        break;
      case 12:
        qe(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, ef(l)) : qe(l);
        break;
      default:
        qe(l);
    }
  }
  function ef(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var u = 0; u < t.length; u++) {
        var a = t[u];
        ol = a, T1(a, l);
      }
      S1(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          du(8, t, t.return), ef(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, ef(t));
          break;
        default:
          ef(t);
      }
      l = l.sibling;
    }
  }
  function T1(l, t) {
    for (; ol !== null; ) {
      var u = ol;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          du(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          ze(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, ol = a;
      else l: for (u = l; ol !== null; ) {
        a = ol;
        var e = a.sibling, n = a.return;
        if (c1(a), a === u) {
          ol = null;
          break l;
        }
        if (e !== null) {
          e.return = n, ol = e;
          break l;
        }
        ol = n;
      }
    }
  }
  var Ed = { getCacheForType: function(l) {
    var t = zl(fl), u = t.data.get(l);
    return u === void 0 && (u = l(), t.data.set(l, u)), u;
  }, cacheSignal: function() {
    return zl(fl).controller.signal;
  } }, Od = typeof WeakMap == "function" ? WeakMap : Map, j = 0, $ = null, r = null, R = 0, x = 0, Ll = null, gu = false, Ba = false, Mi = false, Lt = 0, el = 0, Su = 0, $u = 0, nf = 0, Jl = 0, Ra = 0, Ye = null, Rl = null, Ui = false, ff = 0, s1 = 0, cf = 1 / 0, vf = null, zu = null, ll = 0, mt = null, Wu = null, Nt = 0, Hi = 0, Ci = null, b1 = null, qa = null, Ya = null, Ga = null, Ge = 0, mf = null;
  function pl() {
    return (j & 2) !== 0 && R !== 0 ? R & -R : _.T !== null ? Zi() : Av();
  }
  function E1() {
    if (Jl === 0) if ((R & 536870912) === 0 || C) {
      var l = tn;
      tn <<= 1, (tn & 3932160) === 0 && (tn = 262144), Jl = l;
    } else Jl = 536870912;
    return l = Tl.current, l !== null && (l.flags |= 32), Jl;
  }
  function Qa(l, t) {
    if (t != null) {
      var u = l.stateNode, a = u.ref;
      a === null && (a = u.ref = ey(qt(l.memoizedProps, u))), Ya === null && (Ya = []), Ya.push(t.bind(null, a));
    }
  }
  function ql(l, t, u) {
    (l === $ && (x === 2 || x === 9) || l.cancelPendingCommit !== null) && (Xa(l, 0), Tu(l, R, Jl, false)), ee(l, u), ((j & 2) === 0 || l !== $) && (l === $ && ((j & 2) === 0 && ($u |= u), el === 4 && Tu(l, R, Jl, false)), At(l));
  }
  function O1(l, t, u) {
    if ((j & 6) !== 0) throw Error(S(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || ae(l, t), e = a ? _d(l, t) : Bi(l, t, true), n = a;
    do {
      if (e === 0) {
        Ba && !a && Tu(l, t, 0, false);
        break;
      } else {
        if (u = l.current.alternate, n && !Nd(u)) {
          e = Bi(l, t, false), n = false;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n) var f = 0;
          else f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = Ye;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (Xa(c, f).flags |= 256), f = Bi(c, f, false), f !== 2 && f !== 6) {
                if (Mi && !i) {
                  c.errorRecoveryDisabledLanes |= n, $u |= n, e = 4;
                  break l;
                }
                n = Rl, Rl = e, n !== null && (Rl === null ? Rl = n : Rl.push.apply(Rl, n));
              }
              e = f;
            }
            if (n = false, e !== 2) continue;
          }
        }
        if (e === 1) {
          Xa(l, 0), Tu(l, t, 0, true);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(S(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t) break;
            case 6:
              Tu(a, t, Jl, !gu);
              break l;
            case 2:
              Rl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(S(329));
          }
          if ((t & 62914560) === t && (e = ff + 300 - Ql(), 10 < e)) {
            if (Tu(a, t, Jl, !gu), an(a, 0, true) !== 0) break l;
            Nt = t, a.timeoutHandle = Wi(N1.bind(null, a, u, Rl, vf, Ui, t, Jl, $u, Ra, gu, n, "Throttled", -0, 0), e);
            break l;
          }
          N1(a, u, Rl, vf, Ui, t, Jl, $u, Ra, gu, n, null, -0, 0);
        }
      }
      break;
    } while (true);
    At(l);
  }
  function N1(l, t, u, a, e, n, f, c, i, h, g, T, m, o) {
    l.timeoutHandle = -1;
    var s = t.subtreeFlags, O = (n & 335544064) === n;
    if (T = null, (O || s & 8192 || (s & 16785408) === 16785408) && (T = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: ot }, xl = null, g1(t, n, T), O && (s = T, O = l.containerInfo, O = (O.nodeType === 9 ? O : O.ownerDocument).__reactViewTransition, O != null && (s.count++, s.waitingForViewTransition = true, s = Le.bind(s), O.finished.then(s, s))), s = (n & 62914560) === n ? ff - Ql() : (n & 4194048) === n ? s1 - Ql() : 0, s = Do(T, s), s !== null)) {
      Nt = n, l.cancelPendingCommit = s(r1.bind(null, l, t, n, u, a, e, f, c, i, h, g, T, null, m, o)), Tu(l, n, f, !h);
      return;
    }
    r1(l, t, n, u, a, e, f, c, i, h, g, T);
  }
  function Nd(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null))) for (var a = 0; a < u.length; a++) {
        var e = u[a], n = e.getSnapshot;
        e = e.value;
        try {
          if (!Vl(n(), e)) return false;
        } catch {
          return false;
        }
      }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null) u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function Tu(l, t, u, a) {
    t = sv(l, t), t &= ~nf, t &= ~$u, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - jl(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && Ev(l, u, t);
  }
  function yf() {
    return (j & 6) === 0 ? (Qe(0, false), false) : true;
  }
  function ri() {
    if (r !== null) {
      if (x === 0) var l = r.return;
      else l = r, Xt = Gu = null, jc(l), Aa = null, be = 0, l = r;
      for (; l !== null; ) pm(l.alternate, l), l = l.return;
      r = null;
    }
  }
  function Xa(l, t) {
    var u = l.timeoutHandle;
    return u !== -1 && (l.timeoutHandle = -1, Jd(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Nt = 0, ri(), $ = l, r = u = Gt(l.current, null), R = t, x = 0, Ll = null, gu = false, Ba = ae(l, t), Mi = false, Ra = Jl = nf = $u = Su = el = 0, Rl = Ye = null, Ui = false, Lt = sv(l, t), Tn(), u;
  }
  function A1(l, t) {
    M = null, _.H = xn, t === Na || t === Hn ? (t = r0(), x = 3) : t === Dc ? (t = r0(), x = 4) : x = t === li ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ll = t, r === null && (el = 1, Ln(l, Il(t, l.current)));
  }
  function _1() {
    var l = Tl.current;
    return l === null ? true : (R & 4194048) === R ? Nl === null : (R & 62914560) === R || (R & 536870912) !== 0 ? l === Nl : false;
  }
  function D1() {
    var l = _.H;
    return _.H = xn, l === null ? xn : l;
  }
  function M1() {
    var l = _.A;
    return _.A = Ed, l;
  }
  function hf() {
    el = 4, gu || (R & 4194048) !== R && Tl.current !== null || (Ba = true), (Su & 134217727) === 0 && ($u & 134217727) === 0 || $ === null || Tu($, R, Jl, false);
  }
  function Bi(l, t, u) {
    var a = j;
    j |= 2;
    var e = D1(), n = M1();
    ($ !== l || R !== t) && (vf = null, Xa(l, t)), t = false;
    var f = el;
    l: do
      try {
        if (x !== 0 && r !== null) {
          var c = r, i = Ll;
          switch (x) {
            case 8:
              ri(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Tl.current === null && (t = true);
              var h = x;
              if (x = 0, Ll = null, ja(l, c, i, h), u && Ba) {
                f = 0;
                break l;
              }
              break;
            default:
              h = x, x = 0, Ll = null, ja(l, c, i, h);
          }
        }
        Ad(), f = el;
        break;
      } catch (g) {
        A1(l, g);
      }
    while (true);
    return t && l.shellSuspendCounter++, Xt = Gu = null, j = a, _.H = e, _.A = n, r === null && ($ = null, R = 0, Tn()), f;
  }
  function Ad() {
    for (; r !== null; ) U1(r);
  }
  function _d(l, t) {
    var u = j;
    j |= 2;
    var a = D1(), e = M1();
    $ !== l || R !== t ? (vf = null, cf = Ql() + 500, Xa(l, t)) : Ba = ae(l, t);
    l: do
      try {
        if (x !== 0 && r !== null) {
          t = r;
          var n = Ll;
          t: switch (x) {
            case 1:
              x = 0, Ll = null, ja(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (H0(n)) {
                x = 0, Ll = null, H1(t);
                break;
              }
              t = function() {
                x !== 2 && x !== 9 || $ !== l || (x = 7), At(l);
              }, n.then(t, t);
              break l;
            case 3:
              x = 7;
              break l;
            case 4:
              x = 5;
              break l;
            case 7:
              H0(n) ? (x = 0, Ll = null, H1(t)) : (x = 0, Ll = null, ja(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (r.tag) {
                case 26:
                  f = r.memoizedState;
                case 5:
                case 27:
                  var c = r;
                  if (f ? Ny(f) : c.stateNode.complete) {
                    x = 0, Ll = null;
                    var i = c.sibling;
                    if (i !== null) r = i;
                    else {
                      var h = c.return;
                      h !== null ? (r = h, df(h)) : r = null;
                    }
                    break t;
                  }
              }
              x = 0, Ll = null, ja(l, t, n, 5);
              break;
            case 6:
              x = 0, Ll = null, ja(l, t, n, 6);
              break;
            case 8:
              ri(), el = 6;
              break l;
            default:
              throw Error(S(462));
          }
        }
        Dd();
        break;
      } catch (g) {
        A1(l, g);
      }
    while (true);
    return Xt = Gu = null, _.H = a, _.A = e, j = u, r !== null ? 0 : ($ = null, R = 0, Tn(), el);
  }
  function Dd() {
    for (; r !== null && !xy(); ) U1(r);
  }
  function U1(l) {
    var t = Lm(l.alternate, l, Lt);
    l.memoizedProps = l.pendingProps, t === null ? df(l) : r = t;
  }
  function H1(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Qm(u, t, t.pendingProps, t.type, void 0, R);
        break;
      case 11:
        t = Qm(u, t, t.pendingProps, t.type.render, t.ref, R);
        break;
      case 5:
        jc(t);
        var a = t;
        a === hl && (C ? (An(a), a.tag === 5 && a.stateNode != null && (F = a.stateNode)) : (An(a), C = true));
      default:
        pm(u, t), t = r = T0(t, Lt), t = Lm(u, t, Lt);
    }
    l.memoizedProps = l.pendingProps, t === null ? df(l) : r = t;
  }
  function ja(l, t, u, a) {
    Xt = Gu = null, jc(t), Aa = null, be = 0;
    var e = t.return;
    try {
      if (dd(l, e, t, u, R)) {
        el = 1, Ln(l, Il(u, l.current)), r = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw r = e, n;
      el = 1, Ln(l, Il(u, l.current)), r = null;
      return;
    }
    t.flags & 32768 ? (C || a === 1 ? l = true : Ba || (R & 536870912) !== 0 ? l = false : (gu = l = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Tl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), C1(t, l)) : df(t);
  }
  function df(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        C1(t, gu);
        return;
      }
      l = t.return;
      var u = zd(t.alternate, t, Lt);
      if (u !== null) {
        r = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        r = t;
        return;
      }
      r = t = l;
    } while (t !== null);
    el === 0 && (el = 5);
  }
  function C1(l, t) {
    do {
      var u = Td(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, r = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        r = l;
        return;
      }
      r = l = u;
    } while (l !== null);
    el = 6, r = null;
  }
  function r1(l, t, u, a, e, n, f, c, i, h, g, T) {
    l.cancelPendingCommit = null;
    do
      of();
    while (ll !== 0);
    if ((j & 6) !== 0) throw Error(S(327));
    if (t !== null) {
      if (t === l.current) throw Error(S(177));
      l === $ && (r = $ = null, R = 0), Wu = t, mt = l, Nt = u, Ci = e, b1 = a, Md(l, t, u, f, c, i, T);
    }
  }
  function Md(l, t, u, a, e, n, f) {
    var c = t.lanes | t.childLanes;
    if (Hi = c, c |= dc, Py(l, u, c, a, e, n), Ya = null, (u & 335544064) === u ? (Ga = td(l), a = 10262) : (Ga = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Rd(Pe, function() {
      return Gi(), null;
    })) : (l.callbackNode = null, l.callbackPriority = 0), kn = false, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = _.T, _.T = null, e = X.p, X.p = 2, n = j, j |= 4;
      try {
        sd(l, t, u);
      } finally {
        j = n, X.p = e, _.T = a;
      }
    }
    ll = 1, kn ? qa = Id(f, l.containerInfo, Ga, Ri, qi, Hd, Yi, Gi, Ud, null, null) : (Ri(), qi(), Yi());
  }
  function Ud(l) {
    if (ll !== 0) {
      var t = mt.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function Hd() {
    ll === 3 && (ll = 0, d1(Wu, mt), ll = 4);
  }
  function Ri() {
    if (ll === 1) {
      ll = 0;
      var l = mt, t = Wu, u = Nt, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = _.T, _.T = null;
        var e = X.p;
        X.p = 2;
        var n = j;
        j |= 4;
        try {
          Be = tf = false, y1(t, l, u), u = pi;
          var f = i0(l.containerInfo), c = u.focusedElem, i = u.selectionRange;
          if (f !== c && c && c.ownerDocument && c0(c.ownerDocument.documentElement, c)) {
            if (i !== null && ic(c)) {
              var h = i.start, g = i.end;
              if (g === void 0 && (g = h), "selectionStart" in c) c.selectionStart = h, c.selectionEnd = Math.min(g, c.value.length);
              else {
                var T = c.ownerDocument || document, m = T && T.defaultView || window;
                if (m.getSelection) {
                  var o = m.getSelection(), s = c.textContent.length, O = Math.min(i.start, s), U = i.end === void 0 ? O : Math.min(i.end, s);
                  !o.extend && O > U && (f = U, U = O, O = f);
                  var y = f0(c, O), v = f0(c, U);
                  if (y && v && (o.rangeCount !== 1 || o.anchorNode !== y.node || o.anchorOffset !== y.offset || o.focusNode !== v.node || o.focusOffset !== v.offset)) {
                    var d = T.createRange();
                    d.setStart(y.node, y.offset), o.removeAllRanges(), O > U ? (o.addRange(d), o.extend(v.node, v.offset)) : (d.setEnd(v.node, v.offset), o.addRange(d));
                  }
                }
              }
            }
            for (T = [], o = c; o = o.parentNode; ) o.nodeType === 1 && T.push({ element: o, left: o.scrollLeft, top: o.scrollTop });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
              var z = T[c];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          wa = !!Ji, pi = Ji = null;
        } finally {
          j = n, X.p = e, _.T = a;
        }
      }
      l.current = t, ll = 2;
    }
  }
  function qi() {
    if (ll === 2) {
      ll = 0;
      var l = mt, t = Wu, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = _.T, _.T = null;
        var a = X.p;
        X.p = 2;
        var e = j;
        j |= 4;
        try {
          n1(l, t.alternate, t);
        } finally {
          j = e, X.p = a, _.T = u;
        }
      }
      ll = 3;
    }
  }
  function Yi() {
    if (ll === 4 || ll === 3) {
      ll = 0;
      var l = qa;
      qa = null, Ly();
      var t = mt, u = Wu, a = Nt, e = b1, n = (a & 335544064) === a ? 10262 : 10256;
      if ((u.subtreeFlags & n) !== 0 || (u.flags & n) !== 0 ? ll = 5 : (ll = 0, Wu = mt = null, B1(t, t.pendingLanes)), n = t.pendingLanes, n === 0 && (zu = null), Lf(a), u = u.stateNode, Xl && typeof Xl.onCommitFiberRoot == "function") try {
        Xl.onCommitFiberRoot(ue, u, void 0, (u.current.flags & 128) === 128);
      } catch {
      }
      if (e !== null) {
        u = _.T, n = X.p, X.p = 2, _.T = null;
        try {
          for (var f = t.onRecoverableError, c = 0; c < e.length; c++) {
            var i = e[c];
            f(i.value, { componentStack: i.stack });
          }
        } finally {
          _.T = u, X.p = n;
        }
      }
      if (e = Ya, f = Ga, Ga = null, e !== null && (Ya = null, f === null && (f = []), l !== null)) for (i = 0; i < e.length; i++) u = (0, e[i])(f), u !== void 0 && l.finished.finally(u);
      (Nt & 3) !== 0 && of(), At(t), n = t.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? t === mf ? Ge++ : (Ge = 0, mf = t) : (Ge = 0, mf = null), Qe(0, false);
    }
  }
  function B1(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, ze(t)));
  }
  function of() {
    return qa !== null && (qa.skipTransition(), qa = null), Ri(), qi(), Yi(), Gi();
  }
  function Gi() {
    if (ll !== 5) return false;
    var l = mt, t = Hi;
    Hi = 0;
    var u = Lf(Nt), a = _.T, e = X.p;
    try {
      X.p = 32 > u ? 32 : u, _.T = null, u = Ci, Ci = null;
      var n = mt, f = Nt;
      if (ll = 0, Wu = mt = null, Nt = 0, (j & 6) !== 0) throw Error(S(331));
      var c = j;
      if (j |= 4, z1(n.current), o1(n, n.current, f, u), j = c, Qe(0, false), Xl && typeof Xl.onPostCommitFiberRoot == "function") try {
        Xl.onPostCommitFiberRoot(ue, n);
      } catch {
      }
      return true;
    } finally {
      X.p = e, _.T = a, B1(l, t);
    }
  }
  function R1(l, t, u) {
    t = Il(u, t), t = Pc(l.stateNode, t, 2), l = vu(l, t, 2), l !== null && (ee(l, 2), At(l));
  }
  function L(l, t, u) {
    if (l.tag === 3) R1(l, l, u);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        R1(t, l, u);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (zu === null || !zu.has(a))) {
          l = Il(u, l), u = Hm(2), a = vu(t, u, 2), a !== null && (Cm(u, a, t, l), ee(a, 2), At(a));
          break;
        }
      }
      t = t.return;
    }
  }
  function Qi(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Od();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (Mi = true, e.add(u), l = Cd.bind(null, l, t, u), t.then(l, l));
  }
  function Cd(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, $ === l && (R & u) === u && ((el === 4 || el === 3 && (R & 62914560) === R && 300 > Ql() - ff) && (j & 2) === 0 ? Xa(l, 0) : nf |= u, Ra === R && (Ra = 0)), At(l);
  }
  function q1(l, t) {
    t === 0 && (t = bv()), l = Ru(l, t), l !== null && (ee(l, t), At(l));
  }
  function rd(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), q1(l, u);
  }
  function Bd(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(S(314));
    }
    a !== null && a.delete(t), q1(l, u);
  }
  function Rd(l, t) {
    return Zf(l, t);
  }
  var Za = null, Va = null, Xi = false, gf = false, ji = false, su = 0;
  function At(l) {
    l !== Va && l.next === null && (Va === null ? Za = Va = l : Va = Va.next = l), gf = true, Xi || (Xi = true, Yd());
  }
  function Qe(l, t) {
    if (!ji && gf) {
      ji = true;
      do
        for (var u = false, a = Za; a !== null; ) {
          if (!t) if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - jl(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = true, X1(a, n));
          } else n = R, n = an(a, a === $ ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (n & 3) === 0 || ae(a, n) || (u = true, X1(a, n));
          a = a.next;
        }
      while (u);
      ji = false;
    }
  }
  function qd() {
    Y1();
  }
  function Y1() {
    gf = Xi = false;
    var l = 0;
    su !== 0 && Ld() && (l = su);
    for (var t = Ql(), u = null, a = Za; a !== null; ) {
      var e = a.next, n = G1(a, t);
      n === 0 ? (a.next = null, u === null ? Za = e : u.next = e, e === null && (Va = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (gf = true)), a = e;
    }
    ll !== 0 && ll !== 5 || Qe(l, false), su !== 0 && (su = 0);
  }
  function G1(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - jl(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = ky(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = $, u = R, u = an(l, l === t ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, u === 0 || l === t && (x === 2 || x === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && Vf(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || ae(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Vf(a), Lf(u)) {
        case 2:
        case 8:
          u = zv;
          break;
        case 32:
          u = Pe;
          break;
        case 268435456:
          u = Tv;
          break;
        default:
          u = Pe;
      }
      return a = Q1.bind(null, l), u = Zf(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Vf(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Q1(l, t) {
    if (ll !== 0 && ll !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (of() && l.callbackNode !== u) return null;
    var a = R;
    return a = an(l, l === $ ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (O1(l, a, t), G1(l, Ql()), l.callbackNode != null && l.callbackNode === u ? Q1.bind(null, l) : null);
  }
  function X1(l, t) {
    if (of()) return null;
    O1(l, t, true);
  }
  function Yd() {
    pd(function() {
      (j & 6) !== 0 ? Zf(Sv, qd) : Y1();
    });
  }
  function Zi() {
    if (su === 0) {
      var l = ju;
      l === 0 && (l = ln, ln <<= 1, (ln & 261888) === 0 && (ln = 256)), su = l;
    }
    return su;
  }
  function j1(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : vn(l);
  }
  function Gd(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = j1((e[Hl] || null).action), f = a.submitter;
      f && (t = (t = f[Hl] || null) ? j1(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new dn("action", "action", null, a, e);
      l.push({ event: c, listeners: [{ instance: null, listener: function() {
        if (a.defaultPrevented) {
          if (su !== 0) {
            var i = new FormData(e, f);
            $c(u, { pending: true, data: i, method: e.method, action: n }, null, i);
          }
        } else typeof n == "function" && (c.preventDefault(), i = new FormData(e, f), $c(u, { pending: true, data: i, method: e.method, action: n }, n, i));
      }, currentTarget: e }] });
    }
  }
  for (zf = 0; zf < hc.length; zf++) Sf = hc[zf], Z1 = Sf.toLowerCase(), V1 = Sf[0].toUpperCase() + Sf.slice(1), ft(Z1, "on" + V1);
  var Sf, Z1, V1, zf;
  ft(y0, "onAnimationEnd"), ft(h0, "onAnimationIteration"), ft(d0, "onAnimationStart"), ft("dblclick", "onDoubleClick"), ft("focusin", "onFocus"), ft("focusout", "onBlur"), ft(wh, "onTransitionRun"), ft($h, "onTransitionStart"), ft(Wh, "onTransitionCancel"), ft(o0, "onTransitionEnd"), ia("onMouseEnter", ["mouseout", "mouseover"]), ia("onMouseLeave", ["mouseout", "mouseover"]), ia("onPointerEnter", ["pointerout", "pointerover"]), ia("onPointerLeave", ["pointerout", "pointerover"]), Cu("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Cu("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Cu("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Cu("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Cu("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Cu("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Qd = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xe));
  function K1(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t) for (var f = a.length - 1; 0 <= f; f--) {
          var c = a[f], i = c.instance, h = c.currentTarget;
          if (c = c.listener, i !== n && e.isPropagationStopped()) break l;
          n = c, e.currentTarget = h;
          try {
            n(e);
          } catch (g) {
            zn(g);
          }
          e.currentTarget = null, n = i;
        }
        else for (f = 0; f < a.length; f++) {
          if (c = a[f], i = c.instance, h = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped()) break l;
          n = c, e.currentTarget = h;
          try {
            n(e);
          } catch (g) {
            zn(g);
          }
          e.currentTarget = null, n = i;
        }
      }
    }
  }
  function B(l, t) {
    var u = t[Dv];
    u === void 0 && (u = t[Dv] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (x1(t, l, 2, false), u.add(a));
  }
  function Vi(l, t, u) {
    var a = 0;
    t && (a |= 4), x1(u, l, a, t);
  }
  var Tf = "_reactListening" + Math.random().toString(36).slice(2);
  function Ki(l) {
    if (!l[Tf]) {
      l[Tf] = true, Hv.forEach(function(u) {
        u !== "selectionchange" && (Qd.has(u) || Vi(u, false, l), Vi(u, true, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Tf] || (t[Tf] = true, Vi("selectionchange", false, t));
    }
  }
  function x1(l, t, u, a) {
    switch (Ry(t)) {
      case 2:
        var e = Co;
        break;
      case 8:
        e = ro;
        break;
      default:
        e = iv;
    }
    u = e.bind(null, t, u, l), e = void 0, !kf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = true), a ? e !== void 0 ? l.addEventListener(t, u, { capture: true, passive: e }) : l.addEventListener(t, u, true) : e !== void 0 ? l.addEventListener(t, u, { passive: e }) : l.addEventListener(t, u, false);
  }
  function xi(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l: for (; ; ) {
      if (a === null) return;
      var f = a.tag;
      if (f === 3 || f === 4) {
        var c = a.stateNode.containerInfo;
        if (c === e) break;
        if (f === 4) for (f = a.return; f !== null; ) {
          var i = f.tag;
          if ((i === 3 || i === 4) && f.stateNode.containerInfo === e) return;
          f = f.return;
        }
        for (; c !== null; ) {
          if (f = Hu(c), f === null) return;
          if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
            a = n = f;
            continue l;
          }
          c = c.parentNode;
        }
      }
      a = a.return;
    }
    Kv(function() {
      var h = n, g = Ff(u), T = [];
      l: {
        var m = g0.get(l);
        if (m !== void 0) {
          var o = dn, s = l;
          switch (l) {
            case "keypress":
              if (yn(u) === 0) break l;
            case "keydown":
            case "keyup":
              o = Nh;
              break;
            case "focusin":
              s = "focus", o = uc;
              break;
            case "focusout":
              s = "blur", o = uc;
              break;
            case "beforeblur":
            case "afterblur":
              o = uc;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              o = Jv;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              o = yh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              o = Uh;
              break;
            case y0:
            case h0:
            case d0:
              o = oh;
              break;
            case o0:
              o = Ch;
              break;
            case "scroll":
            case "scrollend":
              o = vh;
              break;
            case "wheel":
              o = Bh;
              break;
            case "copy":
            case "cut":
            case "paste":
              o = Sh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              o = wv;
              break;
            case "submit":
              o = Dh;
              break;
            case "toggle":
            case "beforetoggle":
              o = qh;
          }
          var O = (t & 4) !== 0, U = !O && (l === "scroll" || l === "scrollend"), y = O ? m !== null ? m + "Capture" : null : m;
          O = [];
          for (var v = h, d; v !== null; ) {
            var z = v;
            if (d = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || d === null || y === null || (z = ce(v, y), z != null && O.push(je(v, z, d))), U) break;
            v = v.return;
          }
          0 < O.length && (m = new o(m, s, null, u, g), T.push({ event: m, listeners: O }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (o = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", o && u !== Wf && (s = u.relatedTarget || u.fromElement) && (Hu(s) || s[na])) break l;
          (m || o) && (s = g.window === g ? g : (o = g.ownerDocument) ? o.defaultView || o.parentWindow : window, m ? (o = u.relatedTarget || u.toElement, m = h, o = o ? Hu(o) : null, o !== null && (U = _t(o), O = o.tag, o !== U || O !== 5 && O !== 27 && O !== 6) && (o = null)) : (m = null, o = h), m !== o && (O = Jv, z = "onMouseLeave", y = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (O = wv, z = "onPointerLeave", y = "onPointerEnter", v = "pointer"), U = m == null ? s : fe(m), d = o == null ? s : fe(o), s = new O(z, v + "leave", m, u, g), s.target = U, s.relatedTarget = d, z = null, Hu(g) === h && (O = new O(y, v + "enter", o, u, g), O.target = d, O.relatedTarget = U, z = O), U = z, O = m && o ? Ut(m, o, Xd) : null, m !== null && L1(T, s, m, O, false), o !== null && U !== null && L1(T, U, o, O, true)));
        }
        l: {
          if (m = h ? fe(h) : window, o = m.nodeName && m.nodeName.toLowerCase(), o === "select" || o === "input" && m.type === "file") var E = t0;
          else if (Pv(m)) if (u0) E = Lh;
          else {
            E = Kh;
            var q = Vh;
          }
          else o = m.nodeName, !o || o.toLowerCase() !== "input" || m.type !== "checkbox" && m.type !== "radio" ? h && $f(h.elementType) && (E = t0) : E = xh;
          if (E && (E = E(l, h))) {
            l0(T, E, u, g);
            break l;
          }
          q && q(l, m, h);
        }
        switch (q = h ? fe(h) : window, l) {
          case "focusin":
            (Pv(q) || q.contentEditable === "true") && (ga = q, vc = h, oe = null);
            break;
          case "focusout":
            oe = vc = ga = null;
            break;
          case "mousedown":
            mc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            mc = false, v0(T, u, g);
            break;
          case "selectionchange":
            if (ph) break;
          case "keydown":
          case "keyup":
            v0(T, u, g);
        }
        var N;
        if (ec) l: {
          switch (l) {
            case "compositionstart":
              var A = "onCompositionStart";
              break l;
            case "compositionend":
              A = "onCompositionEnd";
              break l;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break l;
          }
          A = void 0;
        }
        else oa ? Iv(l, u) && (A = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (A = "onCompositionStart");
        A && ($v && u.locale !== "ko" && (oa || A !== "onCompositionStart" ? A === "onCompositionEnd" && oa && (N = xv()) : (lu = g, Pf = "value" in lu ? lu.value : lu.textContent, oa = true)), q = sf(h, A), 0 < q.length && (A = new pv(A, l, null, u, g), T.push({ event: A, listeners: q }), N ? A.data = N : (N = kv(u), N !== null && (A.data = N)))), (N = Gh ? Qh(l, u) : Xh(l, u)) && (A = sf(h, "onBeforeInput"), 0 < A.length && (q = new pv("onBeforeInput", "beforeinput", null, u, g), T.push({ event: q, listeners: A }), q.data = N)), Gd(T, l, h, u, g);
      }
      K1(T, t);
    });
  }
  function je(l, t, u) {
    return { instance: l, listener: t, currentTarget: u };
  }
  function sf(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = ce(l, u), e != null && a.unshift(je(l, e, n)), e = ce(l, t), e != null && a.push(je(l, e, n))), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function Xd(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function L1(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, h = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || h === null || (i = h, e ? (h = ce(u, n), h != null && f.unshift(je(u, h, i))) : e || (h = ce(u, n), h != null && f.push(je(u, h, i)))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var jd = /\r\n?/g, Zd = /\u0000|\uFFFD/g;
  function J1(l) {
    return (typeof l == "string" ? l : "" + l).replace(jd, `
`).replace(Zd, "");
  }
  function p1(l, t) {
    return t = J1(t), J1(l) === t;
  }
  function J(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        if (typeof a == "string") t === "body" || t === "textarea" && a === "" || ma(l, a);
        else if (typeof a == "number" || typeof a == "bigint") t !== "body" && ma(l, "" + a);
        else return;
        break;
      case "className":
        cn(l, "class", a);
        break;
      case "tabIndex":
        cn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        cn(l, u, a);
        break;
      case "style":
        Zv(l, a, n);
        return;
      case "data":
        if (t !== "object") {
          cn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = vn(a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(u, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof n == "function" && (u === "formAction" ? (t !== "input" && J(l, t, "name", e.name, e, null), J(l, t, "formEncType", e.formEncType, e, null), J(l, t, "formMethod", e.formMethod, e, null), J(l, t, "formTarget", e.formTarget, e, null)) : (J(l, t, "encType", e.encType, e, null), J(l, t, "method", e.method, e, null), J(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = vn(a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = ot);
        return;
      case "onScroll":
        a != null && B("scroll", l);
        return;
      case "onScrollEnd":
        a != null && B("scrollend", l);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(S(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(S(60));
            n?.__html !== u && (l.innerHTML = u);
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = vn(a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", u);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === true ? l.setAttribute(u, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        B("beforetoggle", l), B("toggle", l), fn(l, "popover", a);
        break;
      case "xlinkActuate":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        fn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") u = ch.get(u) || u, fn(l, u, a);
        else return;
    }
    G = true;
  }
  function Li(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Zv(l, a, n);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(S(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(S(60));
            n?.__html !== u && (l.innerHTML = u);
          }
        }
        break;
      case "children":
        if (typeof a == "string") ma(l, a);
        else if (typeof a == "number" || typeof a == "bigint") ma(l, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && B("scroll", l);
        return;
      case "onScrollEnd":
        a != null && B("scrollend", l);
        return;
      case "onClick":
        a != null && (l.onclick = ot);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Cv.hasOwnProperty(u)) l: {
          if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), n = u.slice(2, e ? u.length - 7 : void 0), t = l[Hl] || null, t = t != null ? t[u] : null, typeof t == "function" && l.removeEventListener(n, t, e), typeof a == "function")) {
            typeof t != "function" && t !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, a, e);
            break l;
          }
          G = true, u in l ? l[u] = a : a === true ? l.setAttribute(u, "") : fn(l, u, a);
        }
        return;
    }
    G = true;
  }
  function El(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        B("error", l), B("load", l);
        var a = false, e = false, n;
        for (n in u) if (u.hasOwnProperty(n)) {
          var f = u[n];
          if (f != null) switch (n) {
            case "src":
              a = true;
              break;
            case "srcSet":
              e = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(S(137, t));
            default:
              J(l, t, n, f, u, null);
          }
        }
        e && J(l, t, "srcSet", u.srcSet, u, null), a && J(l, t, "src", u.src, u, null);
        return;
      case "input":
        B("invalid", l);
        var c = n = f = e = null, i = null, h = null;
        for (a in u) if (u.hasOwnProperty(a)) {
          var g = u[a];
          if (g != null) switch (a) {
            case "name":
              e = g;
              break;
            case "type":
              f = g;
              break;
            case "checked":
              i = g;
              break;
            case "defaultChecked":
              h = g;
              break;
            case "value":
              n = g;
              break;
            case "defaultValue":
              c = g;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (g != null) throw Error(S(137, t));
              break;
            default:
              J(l, t, a, g, u, null);
          }
        }
        Gv(l, n, c, i, h, f, e, false);
        return;
      case "select":
        B("invalid", l), a = f = n = null;
        for (e in u) if (u.hasOwnProperty(e) && (c = u[e], c != null)) switch (e) {
          case "value":
            n = c;
            break;
          case "defaultValue":
            f = c;
            break;
          case "multiple":
            a = c;
          default:
            J(l, t, e, c, u, null);
        }
        t = n, u = f, l.multiple = !!a, t != null ? va(l, !!a, t, false) : u != null && va(l, !!a, u, true);
        return;
      case "textarea":
        B("invalid", l), n = e = a = null;
        for (f in u) if (u.hasOwnProperty(f) && (c = u[f], c != null)) switch (f) {
          case "value":
            a = c;
            break;
          case "defaultValue":
            e = c;
            break;
          case "children":
            n = c;
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(S(91));
            break;
          default:
            J(l, t, f, c, u, null);
        }
        Xv(l, a, e, n);
        return;
      case "option":
        for (i in u) if (u.hasOwnProperty(i) && (a = u[i], a != null)) switch (i) {
          case "selected":
            l.selected = a && typeof a != "function" && typeof a != "symbol";
            break;
          default:
            J(l, t, i, a, u, null);
        }
        return;
      case "dialog":
        B("beforetoggle", l), B("toggle", l), B("cancel", l), B("close", l);
        break;
      case "iframe":
      case "object":
        B("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Xe.length; a++) B(Xe[a], l);
        break;
      case "image":
        B("error", l), B("load", l);
        break;
      case "details":
        B("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        B("error", l), B("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in u) if (u.hasOwnProperty(h) && (a = u[h], a != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(S(137, t));
          default:
            J(l, t, h, a, u, null);
        }
        return;
      default:
        if ($f(t)) {
          for (g in u) u.hasOwnProperty(g) && (a = u[g], a !== void 0 && Li(l, t, g, a, u, void 0));
          return;
        }
    }
    for (c in u) u.hasOwnProperty(c) && (a = u[c], a != null && J(l, t, c, a, u, null));
  }
  var Vd = {};
  function Kd(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, h = null, g = null;
        for (o in u) {
          var T = u[o];
          if (u.hasOwnProperty(o) && T != null) switch (o) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              i = T;
            default:
              a.hasOwnProperty(o) || J(l, t, o, null, a, T);
          }
        }
        for (var m in a) {
          var o = a[m];
          if (T = u[m], a.hasOwnProperty(m) && (o != null || T != null)) switch (m) {
            case "type":
              o !== T && (G = true), n = o;
              break;
            case "name":
              o !== T && (G = true), e = o;
              break;
            case "checked":
              o !== T && (G = true), h = o;
              break;
            case "defaultChecked":
              o !== T && (G = true), g = o;
              break;
            case "value":
              o !== T && (G = true), f = o;
              break;
            case "defaultValue":
              o !== T && (G = true), c = o;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (o != null) throw Error(S(137, t));
              break;
            default:
              o !== T && J(l, t, m, o, a, T);
          }
        }
        pf(l, f, c, i, h, g, n, e);
        return;
      case "select":
        o = f = c = m = null;
        for (n in u) if (i = u[n], u.hasOwnProperty(n) && i != null) switch (n) {
          case "value":
            break;
          case "multiple":
            o = i;
          default:
            a.hasOwnProperty(n) || J(l, t, n, null, a, i);
        }
        for (e in a) if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null)) switch (e) {
          case "value":
            n !== i && (G = true), m = n;
            break;
          case "defaultValue":
            n !== i && (G = true), c = n;
            break;
          case "multiple":
            n !== i && (G = true), f = n;
          default:
            n !== i && J(l, t, e, n, a, i);
        }
        t = c, u = f, a = o, m != null ? va(l, !!u, m, false) : !!a != !!u && (t != null ? va(l, !!u, t, true) : va(l, !!u, u ? [] : "", false));
        return;
      case "textarea":
        o = m = null;
        for (c in u) if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            J(l, t, c, null, a, e);
        }
        for (f in a) if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null)) switch (f) {
          case "value":
            e !== n && (G = true), m = e;
            break;
          case "defaultValue":
            e !== n && (G = true), o = e;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (e != null) throw Error(S(91));
            break;
          default:
            e !== n && J(l, t, f, e, a, n);
        }
        Qv(l, m, o);
        return;
      case "option":
        for (var s in u) if (m = u[s], u.hasOwnProperty(s) && m != null && !a.hasOwnProperty(s)) switch (s) {
          case "selected":
            l.selected = false;
            break;
          default:
            J(l, t, s, null, a, m);
        }
        for (i in a) if (m = a[i], o = u[i], a.hasOwnProperty(i) && m !== o && (m != null || o != null)) switch (i) {
          case "selected":
            m !== o && (G = true), l.selected = m && typeof m != "function" && typeof m != "symbol";
            break;
          default:
            J(l, t, i, m, a, o);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var O in u) m = u[O], u.hasOwnProperty(O) && m != null && !a.hasOwnProperty(O) && J(l, t, O, null, a, m);
        for (h in a) if (m = a[h], o = u[h], a.hasOwnProperty(h) && m !== o && (m != null || o != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (m != null) throw Error(S(137, t));
            break;
          default:
            J(l, t, h, m, a, o);
        }
        return;
      default:
        if ($f(t)) {
          for (var U in u) m = u[U], u.hasOwnProperty(U) && m !== void 0 && !a.hasOwnProperty(U) && Li(l, t, U, void 0, a, m);
          for (g in a) m = a[g], o = u[g], !a.hasOwnProperty(g) || m === o || m === void 0 && o === void 0 || Li(l, t, g, m, a, o);
          return;
        }
    }
    for (var y in u) m = u[y], u.hasOwnProperty(y) && m != null && !a.hasOwnProperty(y) && J(l, t, y, null, a, m);
    for (T in a) m = a[T], o = u[T], !a.hasOwnProperty(T) || m === o || m == null && o == null || J(l, t, T, m, a, o);
  }
  function w1(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function xd() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && w1(f)) {
          for (f = 0, c = e.responseEnd, a += 1; a < u.length; a++) {
            var i = u[a], h = i.startTime;
            if (h > c) break;
            var g = i.transferSize, T = i.initiatorType;
            g && w1(T) && (i = i.responseEnd, f += g * (i < c ? 1 : (c - h) / (i - h)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Ji = null, pi = null;
  function Ze(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function $1(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function W1(l, t) {
    if (l === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function F1(l, t, u, a) {
    return u = Ze(u).createElement(l), u[Sl] = a, u[Hl] = t, El(u, l, t), yl(u), u;
  }
  function wi(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var $i = null;
  function Ld() {
    var l = window.event;
    return l && l.type === "popstate" ? l === $i ? false : ($i = l, true) : ($i = null, false);
  }
  var Wi = typeof setTimeout == "function" ? setTimeout : void 0, Jd = typeof clearTimeout == "function" ? clearTimeout : void 0, I1 = typeof Promise == "function" ? Promise : void 0, k1 = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Wi, pd = typeof queueMicrotask == "function" ? queueMicrotask : typeof I1 < "u" ? function(l) {
    return I1.resolve(null).then(l).catch(wd);
  } : Wi;
  function wd(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function bu(l) {
    return l === "head";
  }
  function P1(l, t) {
    var u = t, a = 0;
    do {
      var e = u.nextSibling;
      if (l.removeChild(u), e && e.nodeType === 8) if (u = e.data, u === "/$" || u === "/&") {
        if (a === 0) {
          l.removeChild(e), $a(t);
          return;
        }
        a--;
      } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&") a++;
      else if (u === "html") av(l.ownerDocument.documentElement);
      else if (u === "head") {
        u = l.ownerDocument.head, av(u);
        for (var n = u.firstChild; n; ) {
          var f = n.nextSibling, c = n.nodeName;
          n[ne] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
        }
      } else u === "body" && av(l.ownerDocument.body);
      u = e;
    } while (u);
    $a(t);
  }
  function ly(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), a && a.nodeType === 8) if (u = a.data, u === "/$") {
        if (l === 0) break;
        l--;
      } else u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = a;
    } while (u);
  }
  function ty(l, t, u) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, l.style.viewTransitionName = t, u != null && (l.style.viewTransitionClass = u), u = getComputedStyle(l), u.display === "inline") {
      if (t = l.getClientRects(), t.length === 1) var a = 1;
      else for (var e = a = 0; e < t.length; e++) {
        var n = t[e];
        0 < n.width && 0 < n.height && a++;
      }
      a === 1 && (l = l.style, l.display = t.length === 1 ? "inline-block" : "block", l.marginTop = "-" + u.paddingTop, l.marginBottom = "-" + u.paddingBottom);
    }
  }
  function uy(l, t) {
    l = l.style, t = t.style;
    var u = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    l.viewTransitionName = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), u = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, l.viewTransitionClass = u == null || typeof u == "boolean" ? "" : ("" + u).trim(), l.display === "inline-block" && (t == null ? l.display = l.margin = "" : (u = t.display, l.display = u == null || typeof u == "boolean" ? "" : u, u = t.margin, u != null ? l.margin = u : (u = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], l.marginTop = u == null || typeof u == "boolean" ? "" : u, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], l.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function ay(l, t, u) {
    return u = u.ownerDocument.defaultView, { rect: l, abs: t.position === "absolute" || t.position === "fixed", clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px", view: 0 <= l.bottom && 0 <= l.right && l.top <= u.innerHeight && l.left <= u.innerWidth };
  }
  function Fi(l) {
    var t = l.getBoundingClientRect(), u = getComputedStyle(l);
    return ay(t, u, l);
  }
  function $d(l) {
    var t = l.getBoundingClientRect();
    t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
    var u = getComputedStyle(l);
    return ay(t, u, l);
  }
  function Wd(l) {
    return l.documentElement.clientHeight;
  }
  function Fd(l) {
    this.addEventListener("load", l), this.addEventListener("error", l);
  }
  function Id(l, t, u, a, e, n, f, c, i) {
    var h = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var g = h.startViewTransition({ update: function() {
        var m = h.defaultView, o = m.navigation && m.navigation.transition, s = h.fonts.status;
        a();
        var O = [];
        if (s === "loaded" && (Wd(h), h.fonts.status === "loading" && O.push(h.fonts.ready)), s = O.length, l !== null) for (var U = l.suspenseyImages, y = 0, v = 0; v < U.length; v++) {
          var d = U[v];
          if (!d.complete) {
            var z = d.getBoundingClientRect();
            if (0 < z.bottom && 0 < z.right && z.top < m.innerHeight && z.left < m.innerWidth) {
              if (y += Ay(d), y > Of) {
                O.length = s;
                break;
              }
              d = new Promise(Fd.bind(d)), O.push(d);
            }
          }
        }
        if (0 < O.length) return m = Promise.race([Promise.all(O), new Promise(function(E) {
          return setTimeout(E, 500);
        })]).then(e, e), (o ? Promise.allSettled([o.finished, m]) : m).then(n, n);
        if (e(), o) return o.finished.then(n, n);
        n();
      }, types: u });
      h.__reactViewTransition = g;
      var T = [];
      return g.ready.then(function() {
        for (var m = h.documentElement.getAnimations({ subtree: true }), o = 0; o < m.length; o++) {
          var s = m[o], O = s.effect, U = O.pseudoElement;
          if (U != null && U.startsWith("::view-transition")) {
            T.push(s), s = O.getKeyframes();
            for (var y = U = void 0, v = true, d = 0; d < s.length; d++) {
              var z = s[d], E = z.width;
              if (U === void 0) U = E;
              else if (U !== E) {
                v = false;
                break;
              }
              if (E = z.height, y === void 0) y = E;
              else if (y !== E) {
                v = false;
                break;
              }
              delete z.width, delete z.height, z.transform === "none" && delete z.transform;
            }
            v && U !== void 0 && y !== void 0 && (O.setKeyframes(s), v = getComputedStyle(O.target, O.pseudoElement), v.width !== U || v.height !== y) && (v = s[0], v.width = U, v.height = y, v = s[s.length - 1], v.width = U, v.height = y, O.setKeyframes(s));
          }
        }
        f();
      }, function(m) {
        h.__reactViewTransition === g && (h.__reactViewTransition = null);
        try {
          if (typeof m == "object" && m !== null) switch (m.name) {
            case "InvalidStateError":
              (m.message === "View transition was skipped because document visibility state is hidden." || m.message === "Skipping view transition because document visibility state has become hidden." || m.message === "Skipping view transition because viewport size changed." || m.message === "Transition was aborted because of invalid state") && (m = null);
          }
          m !== null && i(m);
        } finally {
          a(), e(), f();
        }
      }), g.finished.finally(function() {
        for (var m = 0; m < T.length; m++) T[m].cancel();
        h.__reactViewTransition === g && (h.__reactViewTransition = null), c();
      }), g;
    } catch {
      return a(), e(), f(), null;
    }
  }
  function Fu(l, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + l + "(" + t + ")";
  }
  Fu.prototype.animate = function(l, t) {
    return t = typeof t == "number" ? { duration: t } : Z({}, t), t.pseudoElement = this._selector, this._scope.animate(l, t);
  }, Fu.prototype.getAnimations = function() {
    for (var l = this._scope, t = this._selector, u = l.getAnimations({ subtree: true }), a = [], e = 0; e < u.length; e++) {
      var n = u[e].effect;
      n !== null && n.target === l && n.pseudoElement === t && a.push(u[e]);
    }
    return a;
  }, Fu.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function ey(l) {
    return { name: l, group: new Fu("group", l), imagePair: new Fu("image-pair", l), old: new Fu("old", l), new: new Fu("new", l) };
  }
  function wl(l) {
    this._fragmentFiber = l, this._observers = this._eventListeners = null;
  }
  wl.prototype.addEventListener = function(l, t, u) {
    var a = null, e = null;
    if (!(u != null && typeof u != "boolean" && (a = u.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var n = this._eventListeners;
      if (fy(n, l, t, u) === -1) {
        var f = this, c = t;
        u != null && typeof u != "boolean" && u.once === true && (c = function(i) {
          f.removeEventListener(l, t, u), typeof t == "function" ? t.call(this, i) : t.handleEvent(i);
        }), a !== null && (e = f.removeEventListener.bind(f, l, t, u), a.addEventListener("abort", e, { once: true }), e = a.removeEventListener.bind(a, "abort", e)), a = Ka(u), n.push({ type: l, listener: t, optionsOrUseCapture: u, attachedListener: c, cleanup: e }), Q(this._fragmentFiber.child, false, kd, l, c, a);
      }
      this._eventListeners = n;
    }
  };
  function kd(l, t, u, a) {
    return tl(l).addEventListener(t, u, a), false;
  }
  wl.prototype.removeEventListener = function(l, t, u) {
    var a = this._eventListeners;
    if (a !== null && (t = fy(a, l, t, u), t !== -1)) {
      var e = a[t];
      u = e.attachedListener;
      var n = e.cleanup;
      e = Ka(e.optionsOrUseCapture), Q(this._fragmentFiber.child, false, Pd, l, u, e), a.splice(t, 1), n !== null && n();
    }
  };
  function Pd(l, t, u, a) {
    return tl(l).removeEventListener(t, u, a), false;
  }
  function Ka(l) {
    return l != null && typeof l != "boolean" && (l.once === true || l.signal instanceof AbortSignal) ? { capture: l.capture, passive: l.passive } : l;
  }
  function ny(l) {
    return l == null ? "c=0" : typeof l == "boolean" ? "c=" + (l ? "1" : "0") : "c=" + (l.capture ? "1" : "0");
  }
  function fy(l, t, u, a) {
    if (l.length === 0) return -1;
    a = ny(a);
    for (var e = 0; e < l.length; e++) {
      var n = l[e];
      if (n.type === t && n.listener === u && ny(n.optionsOrUseCapture) === a) return e;
    }
    return -1;
  }
  wl.prototype.dispatchEvent = function(l) {
    var t = nt(this._fragmentFiber);
    if (t === null) return true;
    t = tl(t);
    var u = this._eventListeners;
    if (u !== null && 0 < u.length || !l.bubbles) {
      var a = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (u) for (var e = 0; e < u.length; e++) {
        var n = u[e];
        a.addEventListener(n.type, n.attachedListener, Ka(n.optionsOrUseCapture));
      }
      if (t.appendChild(a), l = a.dispatchEvent(l), u) for (e = 0; e < u.length; e++) n = u[e], a.removeEventListener(n.type, n.attachedListener, Ka(n.optionsOrUseCapture));
      return t.removeChild(a), l;
    }
    return t.dispatchEvent(l);
  }, wl.prototype.focus = function(l) {
    Q(this._fragmentFiber.child, true, cy, l, void 0, void 0);
  };
  function cy(l, t) {
    return l.tag === 6 ? false : (l = tl(l), yo(l, t));
  }
  wl.prototype.focusLast = function(l) {
    var t = [];
    Q(this._fragmentFiber.child, true, Ii, t, void 0, void 0);
    for (var u = t.length - 1; 0 <= u && !cy(t[u], l); u--) ;
  };
  function Ii(l, t) {
    return t.push(l), false;
  }
  wl.prototype.blur = function() {
    var l = nt(this._fragmentFiber);
    l !== null && (l = tl(l), l = Ze(l).activeElement, l !== null && Q(this._fragmentFiber.child, false, lo, l, void 0, void 0));
  };
  function lo(l, t) {
    return l.tag === 6 ? false : (l = tl(l), l === t || l.contains(t) ? (t.blur(), true) : false);
  }
  wl.prototype.observeUsing = function(l) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(l), Q(this._fragmentFiber.child, false, to, l, void 0, void 0);
  };
  function to(l, t) {
    return l.tag === 6 || (l = tl(l), t.observe(l)), false;
  }
  wl.prototype.unobserveUsing = function(l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      t.delete(l), Q(this._fragmentFiber.child, false, uo, l, void 0, void 0);
      for (var u = t = 0; u < yt.length; u++) {
        var a = yt[u];
        a.fragmentInstance === this && a.observer === l ? l.unobserve(a.instance) : yt[t++] = a;
      }
      yt.length = t;
    }
  };
  function uo(l, t) {
    return l.tag === 6 || (l = tl(l), t.unobserve(l)), false;
  }
  var yt = [], ki = false;
  function ao(l, t, u) {
    yt.push({ fragmentInstance: l, observer: t, instance: u }), ki || (ki = true, ho(function() {
      ki = false;
      var a = yt;
      yt = [];
      for (var e = 0; e < a.length; e++) {
        var n = a[e];
        n.observer.unobserve(n.instance);
      }
    }));
  }
  wl.prototype.getClientRects = function() {
    var l = [];
    return Q(this._fragmentFiber.child, false, eo, l, void 0, void 0), l;
  };
  function eo(l, t) {
    if (l.tag === 6) {
      l = l.stateNode;
      var u = l.ownerDocument.createRange();
      u.selectNodeContents(l), t.push.apply(t, u.getClientRects());
    } else l = tl(l), t.push.apply(t, l.getClientRects());
    return false;
  }
  wl.prototype.getRootNode = function(l) {
    var t = nt(this._fragmentFiber);
    return t === null ? this : tl(t).getRootNode(l);
  }, wl.prototype.compareDocumentPosition = function(l) {
    var t = nt(this._fragmentFiber);
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var u = [];
    Q(this._fragmentFiber.child, false, Ii, u, void 0, void 0);
    var a = tl(t);
    if (u.length === 0) {
      if (u = a, wt(this._fragmentFiber)) {
        l: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break l;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
            t = t.return;
          }
          t = null;
        }
        t != null && (u = t);
      }
      t = this._fragmentFiber;
      var e = a = u.compareDocumentPosition(l);
      return u === l ? e = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (u = $t(t)[1], u === null ? e = Node.DOCUMENT_POSITION_PRECEDING : (l = tl(u).compareDocumentPosition(l), e = l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), e |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = tl(u[0]), e = tl(u[u.length - 1]);
    var n = wt(this._fragmentFiber) ? t.parentElement : a;
    if (n == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = t.compareDocumentPosition(l), c = e.compareDocumentPosition(l), i = f & Node.DOCUMENT_POSITION_CONTAINED_BY || c & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return c = a && n && f & Node.DOCUMENT_POSITION_FOLLOWING && c & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === l || n && e === l || i || c ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === l || !n && e === l ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || no(t, this._fragmentFiber, u[0], u[u.length - 1], l) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function no(l, t, u, a, e) {
    var n = Hu(e);
    if (l & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (u = !!n) l: {
        for (; n !== null; ) {
          if (n.tag === 7 && (n === t || n.alternate === t)) {
            u = true;
            break l;
          }
          n = n.return;
        }
        u = false;
      }
      return u;
    }
    if (l & Node.DOCUMENT_POSITION_CONTAINS) {
      if (n === null) return n = e.ownerDocument, e === n || e === n.documentElement || e === n.body;
      l: {
        for (n = t, t = nt(t); n !== null; ) {
          if (!(n.tag !== 5 && n.tag !== 3 && n.tag !== 27 || n !== t && n.alternate !== t)) {
            n = true;
            break l;
          }
          n = n.return;
        }
        n = false;
      }
      return n;
    }
    return l & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!n) && !(t = n === u) && (t = Ut(u, n, Mt), t === null ? t = false : (Q(t, true, Pu, n, u), n = Dt, Dt = null, t = n !== null)), t) : l & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!n) && !(t = n === a) && (t = Ut(a, n, Mt), t === null ? t = false : (Q(t, true, Ia, n, a), n = Dt, ku = Dt = null, t = n !== null)), t) : false;
  }
  function iy(l, t) {
    var u = l.ownerDocument.createRange();
    u.selectNodeContents(l), l = u.getBoundingClientRect(), window.scrollTo(window.scrollX + l.left, t ? window.scrollY + l.top : window.scrollY + l.bottom - window.innerHeight);
  }
  wl.prototype.scrollIntoView = function(l) {
    if (typeof l == "object") throw Error(S(566));
    var t = [];
    Q(this._fragmentFiber.child, false, Ii, t, void 0, void 0);
    var u = l !== false;
    if (t.length === 0) {
      var a = $t(this._fragmentFiber);
      if (a = u ? a[1] || a[0] || nt(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        l = tl(a), iy(l, u);
        return;
      }
      if (a = tl(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          u = "host" in a ? a.host : null, u !== null && u.scrollIntoView(l);
          return;
        }
        a.scrollIntoView(l);
      }
    }
    for (a = u ? t.length - 1 : 0; a !== (u ? -1 : t.length); ) {
      var e = t[a];
      e.tag === 6 ? (e = tl(e), iy(e, u)) : tl(e).scrollIntoView(l), a += u ? -1 : 1;
    }
  };
  function fo(l, t) {
    return l = tl(l), vy(l, t), false;
  }
  function vy(l, t) {
    l.reactFragments == null && (l.reactFragments = /* @__PURE__ */ new Set()), l.reactFragments.add(t);
  }
  function my(l, t) {
    var u = t._eventListeners;
    if (u !== null) for (var a = 0; a < u.length; a++) {
      var e = u[a];
      l.addEventListener(e.type, e.attachedListener, Ka(e.optionsOrUseCapture));
    }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      for (var f = 0, c = 0; c < yt.length; c++) {
        var i = yt[c];
        (i.fragmentInstance !== t || i.observer !== n || i.instance !== l) && (yt[f++] = i);
      }
      yt.length = f, n.observe(l);
    }), vy(l, t));
  }
  function co(l, t) {
    var u = t._eventListeners;
    if (u !== null) for (var a = 0; a < u.length; a++) {
      var e = u[a];
      l.removeEventListener(e.type, e.attachedListener, Ka(e.optionsOrUseCapture));
    }
    l.nodeType !== 3 && (u = t._observers, u !== null && u.forEach(function(n) {
      typeof n.rootMargin == "string" ? ao(t, n, l) : n.unobserve(l);
    }), l.reactFragments != null && l.reactFragments.delete(t));
  }
  function Pi(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Pi(u), nn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function io(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[ne]) switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
            if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title)) break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
            return l;
          default:
            return l;
        }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (l = ut(l.nextSibling), l === null) break;
    }
    return null;
  }
  function vo(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ut(l.nextSibling), l === null)) return null;
    return l;
  }
  function yy(l, t) {
    for (; l.nodeType !== 8; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = ut(l.nextSibling), l === null)) return null;
    return l;
  }
  function lv(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function tv(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function mo(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading") t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function ut(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var uv = null;
  function hy(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0) return ut(l.nextSibling);
          t--;
        } else u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function dy(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else u !== "/$" && u !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function yo(l, t) {
    function u() {
      a = true;
    }
    if (l.ownerDocument.activeElement === l) return true;
    var a = false;
    try {
      l.ownerDocument.addEventListener("focus", u, true), (l.focus || HTMLElement.prototype.focus).call(l, t);
    } finally {
      l.ownerDocument.removeEventListener("focus", u, true);
    }
    return a;
  }
  function ho(l) {
    k1(function() {
      k1(function(t) {
        return l(t);
      });
    });
  }
  function oy(l, t, u) {
    switch (t = Ze(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(S(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(S(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(S(454));
        return l;
      default:
        throw Error(S(451));
    }
  }
  function gy(l, t, u) {
    for (var a in u) {
      var e = u[a];
      u.hasOwnProperty(a) && e != null && J(l, t, a, null, Vd, e);
    }
    u.dangerouslySetInnerHTML != null && (l.textContent = ""), l.onclick === ot && (l.onclick = null), nn(l);
  }
  function av(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    nn(l);
  }
  var at = /* @__PURE__ */ new Map(), Sy = /* @__PURE__ */ new Set();
  function Ve(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Jt = X.d;
  X.d = { f: oo, r: go, D: So, C: zo, L: To, m: so, X: Eo, S: bo, M: Oo };
  function oo() {
    var l = Jt.f(), t = yf();
    return l || t;
  }
  function go(l) {
    var t = fa(l);
    t !== null && t.tag === 5 && t.type === "form" ? gm(t) : Jt.r(l);
  }
  var xa = typeof document > "u" ? null : document;
  function zy(l, t, u) {
    var a = xa;
    if (a && typeof t == "string" && t) {
      var e = Wl(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), Sy.has(e) || (Sy.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), El(t, "link", l), yl(t), a.head.appendChild(t)));
    }
  }
  function So(l) {
    Jt.D(l), zy("dns-prefetch", l, null);
  }
  function zo(l, t) {
    Jt.C(l, t), zy("preconnect", l, t);
  }
  function To(l, t, u) {
    Jt.L(l, t, u);
    var a = xa;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + Wl(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + Wl(u.imageSrcSet) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + Wl(u.imageSizes) + '"]')) : e += '[href="' + Wl(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = La(l);
          break;
        case "script":
          n = Ja(l);
      }
      if (!(at.has(n) || (l = Z({ rel: "preload", href: t === "image" && u && u.imageSrcSet ? void 0 : l, as: t }, u), at.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(Ke(n)) || t === "script" && a.querySelector(xe(n))))) {
        var f = a.createElement("link");
        El(f, "link", l), t === "style" && (f[en] = true, f.onload = f.onerror = function() {
          Uv(f);
        }), yl(f), a.head.appendChild(f);
      }
    }
  }
  function so(l, t) {
    Jt.m(l, t);
    var u = xa;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + Wl(a) + '"][href="' + Wl(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ja(l);
      }
      if (!at.has(n) && (l = Z({ rel: "modulepreload", href: l }, t), at.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(xe(n))) return;
        }
        a = u.createElement("link"), El(a, "link", l), yl(a), u.head.appendChild(a);
      }
    }
  }
  function bo(l, t, u) {
    Jt.S(l, t, u);
    var a = xa;
    if (a && l) {
      var e = ca(a).hoistableStyles, n = La(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(Ke(n))) c.loading = 5;
        else {
          l = Z({ rel: "stylesheet", href: l, "data-precedence": t }, u), (u = at.get(n)) && ev(l, u);
          var i = f = a.createElement("link");
          yl(i), El(i, "link", l), i._p = new Promise(function(h, g) {
            i.onload = h, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, bf(f, t, a);
        }
        f = { type: "stylesheet", instance: f, count: 1, state: c }, e.set(n, f);
      }
    }
  }
  function Eo(l, t) {
    Jt.X(l, t);
    var u = xa;
    if (u && l) {
      var a = ca(u).hoistableScripts, e = Ja(l), n = a.get(e);
      n || (n = u.querySelector(xe(e)), n || (l = Z({ src: l, async: true }, t), (t = at.get(e)) && nv(l, t), n = u.createElement("script"), yl(n), El(n, "link", l), u.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(e, n));
    }
  }
  function Oo(l, t) {
    Jt.M(l, t);
    var u = xa;
    if (u && l) {
      var a = ca(u).hoistableScripts, e = Ja(l), n = a.get(e);
      n || (n = u.querySelector(xe(e)), n || (l = Z({ src: l, async: true, type: "module" }, t), (t = at.get(e)) && nv(l, t), n = u.createElement("script"), yl(n), El(n, "link", l), u.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, a.set(e, n));
    }
  }
  function Ty(l, t, u, a) {
    var e = (e = It.current) ? Ve(e) : null;
    if (!e) throw Error(S(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (u = La(u.href), t = ca(e).hoistableStyles, a = t.get(u), a || (a = { type: "style", instance: null, count: 0, state: null }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = La(u.href);
          var n = ca(e).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, n.set(l, f), (n = e.querySelector(Ke(l))) ? n._p || (f.instance = n, f.state.loading = 5) : (n = at.get(l), n || (n = { rel: "preload", as: "style", href: u.href, crossOrigin: u.crossOrigin, integrity: u.integrity, media: u.media, hrefLang: u.hrefLang, referrerPolicy: u.referrerPolicy }, at.set(l, n)), No(e, l, n, f.state))), t && a === null) throw Error(S(528, ""));
          return f;
        }
        if (t && a !== null) throw Error(S(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (u = Ja(u), t = ca(e).hoistableScripts, a = t.get(u), a || (a = { type: "script", instance: null, count: 0, state: null }, t.set(u, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(S(444, l));
    }
  }
  function La(l) {
    return 'href="' + Wl(l) + '"';
  }
  function Ke(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function sy(l) {
    return Z({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function No(l, t, u, a) {
    if (t = l.querySelector('link[rel="preload"][as="style"][' + t + "]")) {
      if (t[en] !== true) {
        a.loading = 1;
        return;
      }
    } else t = l.createElement("link"), t[en] = true, t.onload = t.onerror = Uv.bind(null, t), El(t, "link", u), yl(t), l.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function Ja(l) {
    return '[src="' + Wl(l) + '"]';
  }
  function xe(l) {
    return "script[async]" + l;
  }
  function by(l, t, u) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = l.querySelector('style[data-href~="' + Wl(u.href) + '"]');
        if (a) return t.instance = a, yl(a), a;
        var e = Z({}, u, { "data-href": u.href, "data-precedence": u.precedence, href: null, precedence: null });
        return a = (l.ownerDocument || l).createElement("style"), yl(a), El(a, "style", e), bf(a, u.precedence, l), t.instance = a;
      case "stylesheet":
        e = La(u.href);
        var n = l.querySelector(Ke(e));
        if (n) return t.state.loading |= 4, t.instance = n, yl(n), n;
        a = sy(u), (e = at.get(e)) && ev(a, e), n = (l.ownerDocument || l).createElement("link"), yl(n);
        var f = n;
        return f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), El(n, "link", a), t.state.loading |= 4, bf(n, u.precedence, l), t.instance = n;
      case "script":
        return n = Ja(u.src), (e = l.querySelector(xe(n))) ? (t.instance = e, yl(e), e) : (a = u, (e = at.get(n)) && (a = Z({}, u), nv(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), yl(e), El(e, "link", a), l.head.appendChild(e), t.instance = e);
      case "void":
        return null;
      default:
        throw Error(S(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, bf(a, u.precedence, l));
    return t.instance;
  }
  function bf(l, t, u) {
    for (var a = u.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function ev(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function nv(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Ef = null;
  function Ey(l, t, u) {
    if (Ef === null) {
      var a = /* @__PURE__ */ new Map(), e = Ef = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else e = Ef, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[ne] || n[Sl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function fv(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(u, t === "title" ? l.querySelector("head > title") : null);
  }
  function Ao(l, t, u) {
    if (u === 1 || t.itemProp != null) return false;
    switch (l) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return true;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return true;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
    }
    return false;
  }
  function Oy(l, t) {
    return l === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Ny(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Ay(l) {
    return (l.width || 100) * (l.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function _y(l, t) {
    typeof t.decode == "function" && (l.imgCount++, t.complete || (l.imgBytes += Ay(t), l.suspenseyImages.push(t)), l = Mo.bind(l), t.decode().then(l, l));
  }
  function _o(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = La(a.href), n = t.querySelector(Ke(e));
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Le.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, yl(n);
          return;
        }
        n = t.ownerDocument || t, a = sy(a), (e = at.get(e)) && ev(a, e), n = n.createElement("link"), yl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), El(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Le.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Of = 0;
  function Do(l, t) {
    return l.stylesheets && l.count === 0 && Af(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Af(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Of === 0 && (Of = 62500 * xd());
      var e = setTimeout(function() {
        if (l.waitingForImages = false, l.count === 0 && (l.stylesheets && Af(l, l.stylesheets), l.unsuspend)) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, (l.imgBytes > Of ? 50 : 800) + t);
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(e);
      };
    } : null;
  }
  function Dy(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) Af(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        l.unsuspend = null, t();
      }
    }
  }
  function Le() {
    this.count--, Dy(this);
  }
  function Mo() {
    this.imgCount--, Dy(this);
  }
  var Nf = null;
  function Af(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Nf = /* @__PURE__ */ new Map(), t.forEach(Uo, l), Nf = null, Le.call(l));
  }
  function Uo(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Nf.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Nf.set(l, u);
        for (var e = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = Le.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var pa = { $$typeof: b, Provider: null, Consumer: null, _currentValue: Mu, _currentValue2: Mu, _threadCount: 0 };
  function Ho(l, t, u, a, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Kf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kf(0), this.hiddenUpdates = Kf(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function My(l, t, u, a, e, n, f, c, i, h, g, T) {
    return l = new Ho(l, t, u, f, i, h, g, T, c), t = 1, n === true && (t |= 24), n = Cl(3, null, null, t), l.current = n, n.stateNode = l, t = Nc(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = { element: a, isDehydrated: u, cache: t }, Mc(n), l;
  }
  function Uy(l) {
    return l ? (l = Ta, l) : Ta;
  }
  function Hy(l, t, u, a, e, n) {
    e = Uy(e), a.context === null ? a.context = e : a.pendingContext = e, a = iu(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = vu(l, a, t), u !== null && (ql(u, l, t), Ee(u, l, t));
  }
  function Cy(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function cv(l, t) {
    Cy(l, t), (l = l.alternate) && Cy(l, t);
  }
  function ry(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ru(l, 67108864);
      t !== null && ql(t, l, 67108864), cv(l, 67108864);
    }
  }
  function By(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = pl();
      t = xf(t);
      var u = Ru(l, t);
      u !== null && ql(u, l, t), cv(l, t);
    }
  }
  var wa = true;
  function Co(l, t, u, a) {
    var e = _.T;
    _.T = null;
    var n = X.p;
    try {
      X.p = 2, iv(l, t, u, a);
    } finally {
      X.p = n, _.T = e;
    }
  }
  function ro(l, t, u, a) {
    var e = _.T;
    _.T = null;
    var n = X.p;
    try {
      X.p = 8, iv(l, t, u, a);
    } finally {
      X.p = n, _.T = e;
    }
  }
  function iv(l, t, u, a) {
    if (wa) {
      var e = vv(a);
      if (e === null) xi(l, t, a, _f, u), qy(l, a);
      else if (Ro(e, l, t, u, a)) a.stopPropagation();
      else if (qy(l, a), t & 4 && -1 < Bo.indexOf(l)) {
        for (; e !== null; ) {
          var n = fa(e);
          if (n !== null) switch (n.tag) {
            case 3:
              if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                var f = Uu(n.pendingLanes);
                if (f !== 0) {
                  var c = n;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                    var i = 1 << 31 - jl(f);
                    c.entanglements[1] |= i, f &= ~i;
                  }
                  At(n), (j & 6) === 0 && (cf = Ql() + 500, Qe(0, false));
                }
              }
              break;
            case 31:
            case 13:
              c = Ru(n, 2), c !== null && ql(c, n, 2), yf(), cv(n, 2);
          }
          if (n = vv(a), n === null && xi(l, t, a, _f, u), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else xi(l, t, a, null, u);
    }
  }
  function vv(l) {
    return l = Ff(l), mv(l);
  }
  var _f = null;
  function mv(l) {
    if (_f = null, l = Hu(l), l !== null) {
      var t = _t(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = Fa(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = $l(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return _f = l, null;
  }
  function Ry(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Jy()) {
          case Sv:
            return 2;
          case zv:
            return 8;
          case Pe:
          case py:
            return 32;
          case Tv:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var yv = false, Eu = null, Ou = null, Nu = null, Je = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), Au = [], Bo = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function qy(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Eu = null;
        break;
      case "dragenter":
      case "dragleave":
        Ou = null;
        break;
      case "mouseover":
      case "mouseout":
        Nu = null;
        break;
      case "pointerover":
      case "pointerout":
        Je.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pe.delete(t.pointerId);
    }
  }
  function we(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = { blockedOn: t, domEventName: u, eventSystemFlags: a, nativeEvent: n, targetContainers: [e] }, t !== null && (t = fa(t), t !== null && ry(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Ro(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return Eu = we(Eu, l, t, u, a, e), true;
      case "dragenter":
        return Ou = we(Ou, l, t, u, a, e), true;
      case "mouseover":
        return Nu = we(Nu, l, t, u, a, e), true;
      case "pointerover":
        var n = e.pointerId;
        return Je.set(n, we(Je.get(n) || null, l, t, u, a, e)), true;
      case "gotpointercapture":
        return n = e.pointerId, pe.set(n, we(pe.get(n) || null, l, t, u, a, e)), true;
    }
    return false;
  }
  function Yy(l) {
    var t = Hu(l.target);
    if (t !== null) {
      var u = _t(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = Fa(u), t !== null) {
            l.blockedOn = t, _v(l.priority, function() {
              By(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = $l(u), t !== null) {
            l.blockedOn = t, _v(l.priority, function() {
              By(u);
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Df(l) {
    if (l.blockedOn !== null) return false;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = vv(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(u.type, u);
        Wf = a, u.target.dispatchEvent(a), Wf = null;
      } else return t = fa(u), t !== null && ry(t), l.blockedOn = u, false;
      t.shift();
    }
    return true;
  }
  function Gy(l, t, u) {
    Df(l) && u.delete(t);
  }
  function qo() {
    yv = false, Eu !== null && Df(Eu) && (Eu = null), Ou !== null && Df(Ou) && (Ou = null), Nu !== null && Df(Nu) && (Nu = null), Je.forEach(Gy), pe.forEach(Gy);
  }
  function Mf(l, t) {
    l.blockedOn === t && (l.blockedOn = null, yv || (yv = true, w.unstable_scheduleCallback(w.unstable_NormalPriority, qo)));
  }
  var Uf = null;
  function Qy(l) {
    Uf !== l && (Uf = l, w.unstable_scheduleCallback(w.unstable_NormalPriority, function() {
      Uf === l && (Uf = null);
      for (var t = 0; t < l.length; t += 3) {
        var u = l[t], a = l[t + 1], e = l[t + 2];
        if (typeof a != "function") {
          if (mv(a || u) === null) continue;
          break;
        }
        var n = fa(u);
        n !== null && (l.splice(t, 3), t -= 3, $c(n, { pending: true, data: e, method: u.method, action: a }, a, e));
      }
    }));
  }
  function $a(l) {
    function t(i) {
      return Mf(i, l);
    }
    Eu !== null && Mf(Eu, l), Ou !== null && Mf(Ou, l), Nu !== null && Mf(Nu, l), Je.forEach(t), pe.forEach(t);
    for (var u = 0; u < Au.length; u++) {
      var a = Au[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Au.length && (u = Au[0], u.blockedOn === null); ) Yy(u), u.blockedOn === null && Au.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null) for (a = 0; a < u.length; a += 3) {
      var e = u[a], n = u[a + 1], f = e[Hl] || null;
      if (typeof n == "function") f || Qy(u);
      else if (f) {
        var c = null;
        if (n && n.hasAttribute("formAction")) {
          if (e = n, f = n[Hl] || null) c = f.formAction;
          else if (mv(e) !== null) continue;
        } else c = f.action;
        typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), Qy(u);
      }
    }
  }
  function Xy() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({ handler: function() {
        return new Promise(function(f) {
          return e = f;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function t() {
      e !== null && (e(), e = null), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, { state: n.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var a = false, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        a = true, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function hv(l) {
    this._internalRoot = l;
  }
  Hf.prototype.render = hv.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    var u = t.current, a = pl();
    Hy(u, a, l, t, null, null);
  }, Hf.prototype.unmount = hv.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Hy(l.current, 2, null, l, null, null), yf(), t[na] = null;
    }
  };
  function Hf(l) {
    this._internalRoot = l;
  }
  Hf.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Av();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < Au.length && t !== 0 && t < Au[u].priority; u++) ;
      Au.splice(u, 0, l), u === 0 && Yy(l);
    }
  };
  var jy = Ol.version;
  if (jy !== "19.3.0") throw Error(S(527, jy, "19.3.0"));
  X.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0) throw typeof l.render == "function" ? Error(S(188)) : (l = Object.keys(l).join(","), Error(S(268, l)));
    return l = Bf(t), l = l !== null ? Al(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Yo = { bundleType: 0, version: "19.3.0", rendererPackageName: "react-dom", currentDispatcherRef: _, reconcilerVersion: "19.3.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && ($e = __REACT_DEVTOOLS_GLOBAL_HOOK__, !$e.isDisabled && $e.supportsFiber)) try {
    ue = $e.inject(Yo), Xl = $e;
  } catch {
  }
  var $e;
  K.createRoot = function(l, t) {
    if (!Wa(l)) throw Error(S(299));
    var u = false, a = "", e = _m, n = Dm, f = Mm;
    return t != null && (t.unstable_strictMode === true && (u = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = My(l, 1, false, null, null, u, a, null, e, n, f, Xy), l[na] = t.current, Ki(l), new hv(t);
  }, K.hydrateRoot = function(l, t, u) {
    if (!Wa(l)) throw Error(S(299));
    var a = false, e = "", n = _m, f = Dm, c = Mm, i = null;
    return u != null && (u.unstable_strictMode === true && (a = true), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.formState !== void 0 && (i = u.formState)), t = My(l, 1, true, t, u ?? null, a, e, i, n, f, c, Xy), t.context = Uy(null), u = t.current, a = pl(), a = xf(a), e = iu(a), e.callback = null, vu(u, e, a), u = a, t.current.lanes = u, ee(t, u), At(t), l[na] = t.current, Ki(l), new Hf(t);
  }, K.version = "19.3.0";
} }), Ko = Cf({ "client.js"(K, w) {
  function Ol() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ol);
    } catch (pt) {
      console.error(pt);
    }
  }
  Ol(), w.exports = Vo();
} });
const rf = Ko();
export const createRoot = rf.createRoot, hydrateRoot = rf.hydrateRoot, version = rf.version;
export default rf;
