!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f0598189-2c17-538c-a19a-47bca2b8fec2");
  } catch (e2) {
  }
})();
var F = Object.getOwnPropertyNames, d = (u, a) => function() {
  return a || (0, u[F(u)[0]])((a = { exports: {} }).exports, a), a.exports;
}, x = d({ "react.production.js"(u) {
  "use strict";
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), A = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.fragment"), L = /* @__PURE__ */ Symbol.for("react.strict_mode"), U = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.consumer"), q = /* @__PURE__ */ Symbol.for("react.context"), D = /* @__PURE__ */ Symbol.for("react.forward_ref"), z = /* @__PURE__ */ Symbol.for("react.suspense"), G = /* @__PURE__ */ Symbol.for("react.memo"), S = /* @__PURE__ */ Symbol.for("react.lazy"), K = /* @__PURE__ */ Symbol.for("react.activity"), W = /* @__PURE__ */ Symbol.for("react.view_transition"), w = Symbol.iterator;
  function b(t) {
    return t === null || typeof t != "object" ? null : (t = w && t[w] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var g = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, P = {};
  function l(t, e, n) {
    this.props = t, this.context = e, this.refs = P, this.updater = n || g;
  }
  l.prototype.isReactComponent = {}, l.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState");
  }, l.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function j() {
  }
  j.prototype = l.prototype;
  function p(t, e, n) {
    this.props = t, this.context = e, this.refs = P, this.updater = n || g;
  }
  var y = p.prototype = new j();
  y.constructor = p, O(y, l.prototype), y.isPureReactComponent = true;
  var H = Array.isArray;
  function T() {
  }
  var i = { H: null, A: null, T: null, S: null }, N = Object.prototype.hasOwnProperty;
  function R(t, e, n) {
    var r = n.ref;
    return { $$typeof: a, type: t, key: e, ref: r !== void 0 ? r : null, props: n };
  }
  function B(t, e) {
    return R(t.type, e, t.props);
  }
  function m(t) {
    return typeof t == "object" && t !== null && t.$$typeof === a;
  }
  function J(t) {
    var e = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(n) {
      return e[n];
    });
  }
  var h = /\/+/g;
  function C(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? J("" + t.key) : e.toString(36);
  }
  function Q(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(T, T) : (t.status = "pending", t.then(function(e) {
          t.status === "pending" && (t.status = "fulfilled", t.value = e);
        }, function(e) {
          t.status === "pending" && (t.status = "rejected", t.reason = e);
        })), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function v(t, e, n, r, o) {
    var s = typeof t;
    (s === "undefined" || s === "boolean") && (t = null);
    var f = false;
    if (t === null) f = true;
    else switch (s) {
      case "bigint":
      case "string":
      case "number":
        f = true;
        break;
      case "object":
        switch (t.$$typeof) {
          case a:
          case A:
            f = true;
            break;
          case S:
            return f = t._init, v(f(t._payload), e, n, r, o);
        }
    }
    if (f) return o = o(t), f = r === "" ? "." + C(t, 0) : r, H(o) ? (n = "", f != null && (n = f.replace(h, "$&/") + "/"), v(o, e, n, "", function(V) {
      return V;
    })) : o != null && (m(o) && (o = B(o, n + (o.key == null || t && t.key === o.key ? "" : ("" + o.key).replace(h, "$&/") + "/") + f)), e.push(o)), 1;
    f = 0;
    var _ = r === "" ? "." : r + ":";
    if (H(t)) for (var c = 0; c < t.length; c++) r = t[c], s = _ + C(r, c), f += v(r, e, n, s, o);
    else if (c = b(t), typeof c == "function") for (t = c.call(t), c = 0; !(r = t.next()).done; ) r = r.value, s = _ + C(r, c++), f += v(r, e, n, s, o);
    else if (s === "object") {
      if (typeof t.then == "function") return v(Q(t), e, n, r, o);
      throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    }
    return f;
  }
  function E(t, e, n) {
    if (t == null) return t;
    var r = [], o = 0;
    return v(t, r, "", "", function(s) {
      return e.call(n, s, o++);
    }), r;
  }
  function X(t) {
    if (t._status === -1) {
      var e = t._result, n = e();
      n.then(function(r) {
        (t._status === 0 || t._status === -1) && (t._status = 1, t._result = r, n.status === void 0 && (n.status = "fulfilled", n.value = r));
      }, function(r) {
        (t._status === 0 || t._status === -1) && (t._status = 2, t._result = r, n.status === void 0 && (n.status = "rejected", n.reason = r));
      }), t._status === -1 && (t._status = 0, t._result = n);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var $ = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function I(t) {
    var e = i.T, n = {};
    n.types = e !== null ? e.types : null, i.T = n;
    try {
      var r = t(), o = i.S;
      o !== null && o(n, r), typeof r == "object" && r !== null && typeof r.then == "function" && r.then(T, $);
    } catch (s) {
      $(s);
    } finally {
      e !== null && n.types !== null && (e.types = n.types), i.T = e;
    }
  }
  function Y(t) {
    var e = i.T;
    if (e !== null) {
      var n = e.types;
      n === null ? e.types = [t] : n.indexOf(t) === -1 && n.push(t);
    } else I(Y.bind(null, t));
  }
  var Z = { map: E, forEach: function(t, e, n) {
    E(t, function() {
      e.apply(this, arguments);
    }, n);
  }, count: function(t) {
    var e = 0;
    return E(t, function() {
      e++;
    }), e;
  }, toArray: function(t) {
    return E(t, function(e) {
      return e;
    }) || [];
  }, only: function(t) {
    if (!m(t)) throw Error("React.Children.only expected to receive a single React element child.");
    return t;
  } };
  u.Activity = K, u.Children = Z, u.Component = l, u.Fragment = M, u.Profiler = U, u.PureComponent = p, u.StrictMode = L, u.Suspense = z, u.ViewTransition = W, u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, u.__COMPILER_RUNTIME = { __proto__: null, c: function(t) {
    return i.H.useMemoCache(t);
  } }, u.addTransitionType = Y, u.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, u.cacheSignal = function() {
    return null;
  }, u.cloneElement = function(t, e, n) {
    if (t == null) throw Error("The argument must be a React element, but you passed " + t + ".");
    var r = O({}, t.props), o = t.key;
    if (e != null) for (s in e.key !== void 0 && (o = "" + e.key), e) !N.call(e, s) || s === "key" || s === "__self" || s === "__source" || s === "ref" && e.ref === void 0 || (r[s] = e[s]);
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
      for (var f = Array(s), _ = 0; _ < s; _++) f[_] = arguments[_ + 2];
      r.children = f;
    }
    return R(t.type, o, r);
  }, u.createContext = function(t) {
    return t = { $$typeof: q, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null }, t.Provider = t, t.Consumer = { $$typeof: k, _context: t }, t;
  }, u.createElement = function(t, e, n) {
    var r, o = {}, s = null;
    if (e != null) for (r in e.key !== void 0 && (s = "" + e.key), e) N.call(e, r) && r !== "key" && r !== "__self" && r !== "__source" && (o[r] = e[r]);
    var f = arguments.length - 2;
    if (f === 1) o.children = n;
    else if (1 < f) {
      for (var _ = Array(f), c = 0; c < f; c++) _[c] = arguments[c + 2];
      o.children = _;
    }
    if (t && t.defaultProps) for (r in f = t.defaultProps, f) o[r] === void 0 && (o[r] = f[r]);
    return R(t, s, o);
  }, u.createRef = function() {
    return { current: null };
  }, u.forwardRef = function(t) {
    return { $$typeof: D, render: t };
  }, u.isValidElement = m, u.lazy = function(t) {
    return { $$typeof: S, _payload: { _status: -1, _result: t }, _init: X };
  }, u.memo = function(t, e) {
    return { $$typeof: G, type: t, compare: e === void 0 ? null : e };
  }, u.startTransition = I, u.unstable_useCacheRefresh = function() {
    return i.H.useCacheRefresh();
  }, u.use = function(t) {
    return i.H.use(t);
  }, u.useActionState = function(t, e, n) {
    return i.H.useActionState(t, e, n);
  }, u.useCallback = function(t, e) {
    return i.H.useCallback(t, e);
  }, u.useContext = function(t) {
    return i.H.useContext(t);
  }, u.useDebugValue = function() {
  }, u.useDeferredValue = function(t, e) {
    return i.H.useDeferredValue(t, e);
  }, u.useEffect = function(t, e) {
    return i.H.useEffect(t, e);
  }, u.useEffectEvent = function(t) {
    return i.H.useEffectEvent(t);
  }, u.useId = function() {
    return i.H.useId();
  }, u.useImperativeHandle = function(t, e, n) {
    return i.H.useImperativeHandle(t, e, n);
  }, u.useInsertionEffect = function(t, e) {
    return i.H.useInsertionEffect(t, e);
  }, u.useLayoutEffect = function(t, e) {
    return i.H.useLayoutEffect(t, e);
  }, u.useMemo = function(t, e) {
    return i.H.useMemo(t, e);
  }, u.useOptimistic = function(t, e) {
    return i.H.useOptimistic(t, e);
  }, u.useReducer = function(t, e, n) {
    return i.H.useReducer(t, e, n);
  }, u.useRef = function(t) {
    return i.H.useRef(t);
  }, u.useState = function(t) {
    return i.H.useState(t);
  }, u.useSyncExternalStore = function(t, e, n) {
    return i.H.useSyncExternalStore(t, e, n);
  }, u.useTransition = function() {
    return i.H.useTransition();
  }, u.version = "19.3.0";
} }), tt = d({ "index.js"(u, a) {
  a.exports = x();
} });
export { d as __commonJS, tt as require_react };
