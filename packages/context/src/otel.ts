// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../context/dist/otel.js" range:380245..393624
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "@opentelemetry/api";
import * as __dep1 from "./core";
var n = "object" == typeof globalThis ? globalThis : global,
  s = "1.9.0",
  i = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/,
  o = function (t) {
    var r = new Set([t]),
      e = new Set(),
      n = t.match(i);
    if (!n) return function () {
      return !1;
    };
    var s = +n[1],
      o = +n[2],
      a = +n[3];
    if (null != n[4]) return function (r) {
      return r === t;
    };
    function u(t) {
      return e.add(t), !1;
    }
    function c(t) {
      return r.add(t), !0;
    }
    return function (t) {
      if (r.has(t)) return !0;
      if (e.has(t)) return !1;
      var n = t.match(i);
      if (!n) return u(t);
      var l = +n[1],
        m = +n[2],
        d = +n[3];
      return null != n[4] || s !== l ? u(t) : 0 === s ? o === m && a <= d ? c(t) : u(t) : o <= m ? c(t) : u(t);
    };
  }(s),
  a = s.split(".")[0],
  u = Symbol.for("opentelemetry.js.api." + a),
  c = n;
function l(t, r, e, n) {
  var i;
  void 0 === n && (n = !1);
  var o = c[u] = null !== (i = c[u]) && void 0 !== i ? i : {
    version: s
  };
  if (!n && o[t]) {
    var a = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + t);
    return e.error(a.stack || a.message), !1;
  }
  return o.version !== s ? (a = new Error("@opentelemetry/api: Registration of version v" + o.version + " for " + t + " does not match previously registered API v" + s), e.error(a.stack || a.message), !1) : (o[t] = r, e.debug("@opentelemetry/api: Registered a global for " + t + " v" + s + "."), !0);
}
function m(t) {
  var r,
    e,
    n = null === (r = c[u]) || void 0 === r ? void 0 : r.version;
  if (n && o(n)) return null === (e = c[u]) || void 0 === e ? void 0 : e[t];
}
function d(t, r) {
  r.debug("@opentelemetry/api: Unregistering a global for " + t + " v" + s + ".");
  var e = c[u];
  e && delete e[t];
}
var p,
  f = new function t(r) {
    var e = this;
    e._currentContext = r ? new Map(r) : new Map(), e.getValue = function (t) {
      return e._currentContext.get(t);
    }, e.setValue = function (r, n) {
      var s = new t(e._currentContext);
      return s._currentContext.set(r, n), s;
    }, e.deleteValue = function (r) {
      var n = new t(e._currentContext);
      return n._currentContext.delete(r), n;
    };
  }(),
  h = function () {
    function t() {}
    return t.prototype.active = function () {
      return f;
    }, t.prototype.with = function (t, r, e) {
      for (var n = [], s = 3; s < arguments.length; s++) n[s - 3] = arguments[s];
      return r.call.apply(r, function (t, r, e) {
        if (e || 2 === arguments.length) for (var n, s = 0, i = r.length; s < i; s++) !n && s in r || (n || (n = Array.prototype.slice.call(r, 0, s)), n[s] = r[s]);
        return t.concat(n || Array.prototype.slice.call(r));
      }([e], function (t, r) {
        var e = "function" == typeof Symbol && t[Symbol.iterator];
        if (!e) return t;
        var n,
          s,
          i = e.call(t),
          o = [];
        try {
          for (; (void 0 === r || r-- > 0) && !(n = i.next()).done;) o.push(n.value);
        } catch (t) {
          s = {
            error: t
          };
        } finally {
          try {
            n && !n.done && (e = i.return) && e.call(i);
          } finally {
            if (s) throw s.error;
          }
        }
        return o;
      }(n), !1));
    }, t.prototype.bind = function (t, r) {
      return r;
    }, t.prototype.enable = function () {
      return this;
    }, t.prototype.disable = function () {
      return this;
    }, t;
  }(),
  g = function () {
    function t(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return t.prototype.debug = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return _("debug", this._namespace, t);
    }, t.prototype.error = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return _("error", this._namespace, t);
    }, t.prototype.info = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return _("info", this._namespace, t);
    }, t.prototype.warn = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return _("warn", this._namespace, t);
    }, t.prototype.verbose = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return _("verbose", this._namespace, t);
    }, t;
  }();
function _(t, r, e) {
  var n = m("diag");
  if (n) return e.unshift(r), n[t].apply(n, function (t, r, e) {
    if (e || 2 === arguments.length) for (var n, s = 0, i = r.length; s < i; s++) !n && s in r || (n || (n = Array.prototype.slice.call(r, 0, s)), n[s] = r[s]);
    return t.concat(n || Array.prototype.slice.call(r));
  }([], function (t, r) {
    var e = "function" == typeof Symbol && t[Symbol.iterator];
    if (!e) return t;
    var n,
      s,
      i = e.call(t),
      o = [];
    try {
      for (; (void 0 === r || r-- > 0) && !(n = i.next()).done;) o.push(n.value);
    } catch (t) {
      s = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (e = i.return) && e.call(i);
      } finally {
        if (s) throw s.error;
      }
    }
    return o;
  }(e), !1));
}
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.ERROR = 30] = "ERROR", t[t.WARN = 50] = "WARN", t[t.INFO = 60] = "INFO", t[t.DEBUG = 70] = "DEBUG", t[t.VERBOSE = 80] = "VERBOSE", t[t.ALL = 9999] = "ALL";
}(p || (p = {}));
var w,
  y = function () {
    function t() {
      function t(t) {
        return function () {
          for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
          var n = m("diag");
          if (n) return n[t].apply(n, function (t, r, e) {
            if (e || 2 === arguments.length) for (var n, s = 0, i = r.length; s < i; s++) !n && s in r || (n || (n = Array.prototype.slice.call(r, 0, s)), n[s] = r[s]);
            return t.concat(n || Array.prototype.slice.call(r));
          }([], function (t, r) {
            var e = "function" == typeof Symbol && t[Symbol.iterator];
            if (!e) return t;
            var n,
              s,
              i = e.call(t),
              o = [];
            try {
              for (; (void 0 === r || r-- > 0) && !(n = i.next()).done;) o.push(n.value);
            } catch (t) {
              s = {
                error: t
              };
            } finally {
              try {
                n && !n.done && (e = i.return) && e.call(i);
              } finally {
                if (s) throw s.error;
              }
            }
            return o;
          }(r), !1));
        };
      }
      var r = this;
      r.setLogger = function (t, e) {
        var n, s, i;
        if (void 0 === e && (e = {
          logLevel: p.INFO
        }), t === r) {
          var o = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return r.error(null !== (n = o.stack) && void 0 !== n ? n : o.message), !1;
        }
        "number" == typeof e && (e = {
          logLevel: e
        });
        var a = m("diag"),
          u = function (t, r) {
            function e(e, n) {
              var s = r[e];
              return "function" == typeof s && t >= n ? s.bind(r) : function () {};
            }
            return t < p.NONE ? t = p.NONE : t > p.ALL && (t = p.ALL), r = r || {}, {
              error: e("error", p.ERROR),
              warn: e("warn", p.WARN),
              info: e("info", p.INFO),
              debug: e("debug", p.DEBUG),
              verbose: e("verbose", p.VERBOSE)
            };
          }(null !== (s = e.logLevel) && void 0 !== s ? s : p.INFO, t);
        if (a && !e.suppressOverrideMessage) {
          var c = null !== (i = new Error().stack) && void 0 !== i ? i : "<failed to generate stacktrace>";
          a.warn("Current logger will be overwritten from " + c), u.warn("Current logger will overwrite one already registered from " + c);
        }
        return l("diag", u, r, !0);
      }, r.disable = function () {
        d("diag", r);
      }, r.createComponentLogger = function (t) {
        return new g(t);
      }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
    }
    return t.instance = function () {
      return this._instance || (this._instance = new t()), this._instance;
    }, t;
  }(),
  J = "context",
  S = new h(),
  q = function () {
    function t() {}
    return t.getInstance = function () {
      return this._instance || (this._instance = new t()), this._instance;
    }, t.prototype.setGlobalContextManager = function (t) {
      return l(J, t, y.instance());
    }, t.prototype.active = function () {
      return this._getContextManager().active();
    }, t.prototype.with = function (t, r, e) {
      for (var n, s = [], i = 3; i < arguments.length; i++) s[i - 3] = arguments[i];
      return (n = this._getContextManager()).with.apply(n, function (t, r, e) {
        if (e || 2 === arguments.length) for (var n, s = 0, i = r.length; s < i; s++) !n && s in r || (n || (n = Array.prototype.slice.call(r, 0, s)), n[s] = r[s]);
        return t.concat(n || Array.prototype.slice.call(r));
      }([t, r, e], function (t, r) {
        var e = "function" == typeof Symbol && t[Symbol.iterator];
        if (!e) return t;
        var n,
          s,
          i = e.call(t),
          o = [];
        try {
          for (; (void 0 === r || r-- > 0) && !(n = i.next()).done;) o.push(n.value);
        } catch (t) {
          s = {
            error: t
          };
        } finally {
          try {
            n && !n.done && (e = i.return) && e.call(i);
          } finally {
            if (s) throw s.error;
          }
        }
        return o;
      }(s), !1));
    }, t.prototype.bind = function (t, r) {
      return this._getContextManager().bind(t, r);
    }, t.prototype._getContextManager = function () {
      return m(J) || S;
    }, t.prototype.disable = function () {
      this._getContextManager().disable(), d(J, y.instance());
    }, t;
  }();
!function (t) {
  t[t.NONE = 0] = "NONE", t[t.SAMPLED = 1] = "SAMPLED";
}(w || (w = {}));
var B = "0000000000000000",
  b = "00000000000000000000000000000000",
  P = {
    traceId: b,
    spanId: B,
    traceFlags: w.NONE
  },
  I = function () {
    function t(t) {
      void 0 === t && (t = P), this._spanContext = t;
    }
    return t.prototype.spanContext = function () {
      return this._spanContext;
    }, t.prototype.setAttribute = function (t, r) {
      return this;
    }, t.prototype.setAttributes = function (t) {
      return this;
    }, t.prototype.addEvent = function (t, r) {
      return this;
    }, t.prototype.addLink = function (t) {
      return this;
    }, t.prototype.addLinks = function (t) {
      return this;
    }, t.prototype.setStatus = function (t) {
      return this;
    }, t.prototype.updateName = function (t) {
      return this;
    }, t.prototype.end = function (t) {}, t.prototype.isRecording = function () {
      return !1;
    }, t.prototype.recordException = function (t, r) {}, t;
  }(),
  x = Symbol.for("OpenTelemetry Context Key SPAN");
function v(t) {
  return t.getValue(x) || void 0;
}
function R() {
  return v(q.getInstance().active());
}
function E(t, r) {
  return t.setValue(x, r);
}
function k(t) {
  return t.deleteValue(x);
}
function T(t, r) {
  return E(t, new I(r));
}
function C(t) {
  var r;
  return null === (r = v(t)) || void 0 === r ? void 0 : r.spanContext();
}
var U = /^([0-9a-f]{32})$/i,
  A = /^[0-9a-f]{16}$/i;
function $(t) {
  return e = t.traceId, U.test(e) && e !== b && (r = t.spanId, A.test(r) && r !== B);
  var r, e;
}
function O(t) {
  return new I(t);
}
var j = q.getInstance(),
  M = function () {
    function t() {}
    return t.prototype.startSpan = function (t, r, e) {
      if (void 0 === e && (e = j.active()), Boolean(null == r ? void 0 : r.root)) return new I();
      var n,
        s = e && C(e);
      return "object" == typeof (n = s) && "string" == typeof n.spanId && "string" == typeof n.traceId && "number" == typeof n.traceFlags && $(s) ? new I(s) : new I();
    }, t.prototype.startActiveSpan = function (t, r, e, n) {
      var s, i, o;
      if (!(arguments.length < 2)) {
        2 === arguments.length ? o = r : 3 === arguments.length ? (s = r, o = e) : (s = r, i = e, o = n);
        var a = null != i ? i : j.active(),
          u = this.startSpan(t, s, a),
          c = E(a, u);
        return j.with(c, o, void 0, u);
      }
    }, t;
  }(),
  D = new M(),
  N = function () {
    function t(t, r, e, n) {
      this._provider = t, this.name = r, this.version = e, this.options = n;
    }
    return t.prototype.startSpan = function (t, r, e) {
      return this._getTracer().startSpan(t, r, e);
    }, t.prototype.startActiveSpan = function (t, r, e, n) {
      var s = this._getTracer();
      return Reflect.apply(s.startActiveSpan, s, arguments);
    }, t.prototype._getTracer = function () {
      if (this._delegate) return this._delegate;
      var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
      return t ? (this._delegate = t, this._delegate) : D;
    }, t;
  }(),
  G = new (function () {
    function t() {}
    return t.prototype.getTracer = function (t, r, e) {
      return new M();
    }, t;
  }())(),
  L = function () {
    function t() {}
    return t.prototype.getTracer = function (t, r, e) {
      var n;
      return null !== (n = this.getDelegateTracer(t, r, e)) && void 0 !== n ? n : new N(this, t, r, e);
    }, t.prototype.getDelegate = function () {
      var t;
      return null !== (t = this._delegate) && void 0 !== t ? t : G;
    }, t.prototype.setDelegate = function (t) {
      this._delegate = t;
    }, t.prototype.getDelegateTracer = function (t, r, e) {
      var n;
      return null === (n = this._delegate) || void 0 === n ? void 0 : n.getTracer(t, r, e);
    }, t;
  }(),
  F = "trace",
  K = function () {
    function t() {
      this._proxyTracerProvider = new L(), this.wrapSpanContext = O, this.isSpanContextValid = $, this.deleteSpan = k, this.getSpan = v, this.getActiveSpan = R, this.getSpanContext = C, this.setSpan = E, this.setSpanContext = T;
    }
    return t.getInstance = function () {
      return this._instance || (this._instance = new t()), this._instance;
    }, t.prototype.setGlobalTracerProvider = function (t) {
      var r = l(F, this._proxyTracerProvider, y.instance());
      return r && this._proxyTracerProvider.setDelegate(t), r;
    }, t.prototype.getTracerProvider = function () {
      return m(F) || this._proxyTracerProvider;
    }, t.prototype.getTracer = function (t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }, t.prototype.disable = function () {
      d(F, y.instance()), this._proxyTracerProvider = new L();
    }, t;
  }().getInstance(),
  z = q.getInstance(),
  W = __dep0,
  H = __dep1;
const V = (0, H.cF)(Symbol("otel.span"), void 0),
  Q = (0, H.cF)(Symbol("otel.root_span"), void 0),
  X = (0, H.cF)(Symbol("otel.root_start_ms"), void 0),
  Y = (0, H.cF)(Symbol("otel.suppress_child_spans"), !1),
  Z = (0, H.cF)(Symbol("otel.inheritable_span_attributes"), {});
function tt(t, r) {
  const e = r.get(Z);
  for (const r in e) {
    const n = e[r];
    "string" != typeof n && "number" != typeof n && "boolean" != typeof n || t.setAttribute(r, n);
  }
}
function rt(t) {
  return t.name || "anonymous-context";
}
function et(t, r) {
  return !!r && (t.get(Y) || (rt(t), !1));
}
function nt(t = "context-tracer") {
  return K.getTracer(t);
}
function st(t, r) {
  const e = nt(),
    n = t.get(V);
  if (et(t, n)) return t;
  const s = rt(t);
  let i;
  if (n) {
    const t = K.setSpan(z.active(), n);
    i = e.startSpan(s, r, t);
  } else i = e.startSpan(s, r);
  tt(i, t);
  const o = Date.now();
  let a = t.with(V, i);
  return n || (a = a.with(Q, i).with(X, o)), a;
}
function it(t) {
  return t.get(V);
}
function ot(t) {
  return t.with(Y, !0);
}
function at(t, r, e) {
  const n = t.get(Z),
    s = it(t);
  return s && null !== e && s.setAttribute(r, e), t.with(Z, {
    ...n,
    [r]: e
  });
}
function ut(t) {
  try {
    const r = it(t);
    if (!r) return;
    const e = r.spanContext(),
      n = t.get(Y);
    return {
      traceId: e.traceId,
      spanId: e.spanId,
      traceFlags: n ? 0 : e.traceFlags,
      traceState: e.traceState?.serialize()
    };
  } catch {
    return;
  }
}
const ct = Symbol.for("anysphere.context.activeOtelSpanAls");
function lt(t, r) {
  const e = () => z.with(K.setSpan(z.active(), t), r),
    n = function () {
      const t = globalThis;
      if ("object" != typeof (r = t) || null === r || !(ct in t)) return;
      var r;
      const e = t[ct];
      return function (t) {
        return "object" == typeof t && null !== t && "run" in t && "function" == typeof t.run && "getStore" in t && "function" == typeof t.getStore;
      }(e) ? e : void 0;
    }();
  return void 0 === n ? e() : n.run(t, e);
}
function mt(t, r) {
  try {
    const e = nt(),
      n = it(t);
    if (!n) return;
    const s = K.setSpan(z.active(), n),
      i = e.startSpan(r, void 0, s);
    tt(i, t);
    const o = Date.now(),
      a = t.get(X),
      u = "number" == typeof a ? o - a : 0,
      c = `event.${r}`;
    (t.get(Q) ?? n).setAttribute(c, u), i.setAttribute(c, u), i.end();
  } catch {}
}
function dt(t, r, e) {
  const n = nt(),
    s = {
      traceId: t.traceId,
      spanId: t.spanId,
      traceFlags: t.traceFlags,
      isRemote: !0
    },
    i = K.setSpanContext(z.active(), s),
    o = r || "child.span",
    a = n.startSpan(o, {
      kind: W.v.INTERNAL
    }, i),
    u = e ?? (0, H.q6)();
  return (r ? u.withName(r) : u).with(V, a);
}
function pt(t, r, e) {
  const n = K.wrapSpanContext({
      traceId: t.traceId,
      spanId: t.spanId,
      traceFlags: t.traceFlags,
      isRemote: !0
    }),
    s = e ?? (0, H.q6)();
  return (r ? s.withName(r) : s).with(V, n);
}
class ft {
  constructor(t, r, e = !0) {
    this.ctx = t, this.span = r, this.shouldEnd = e;
  }
  [Symbol.dispose]() {
    this.shouldEnd && this.span.end();
  }
}
function ht(t, r) {
  const e = et(t, it(t)),
    n = st(t, r),
    s = it(n);
  return new ft(n, s, !e);
}
function gt(t, r, e) {
  const n = it(t);
  if (!n || et(t, n)) return;
  const s = it(st(t, r));
  return s.end(e), s;
}
export { ft as r2, pt as F, dt as V5, ht as VI, it as fU, ut as mJ, gt as xd, mt as HF, lt as MG, at as Mf, st as fR, ot as OA };
