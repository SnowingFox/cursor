!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d32c0996-f391-59cf-80eb-6dedd0b89b05");
  } catch (e2) {
  }
})();
var Ye = Object.getOwnPropertyNames, G = (a, p) => function() {
  return p || (0, a[Ye(a)[0]])((p = { exports: {} }).exports, p), p.exports;
}, Ue = G({ "react.development.js"(a, p) {
  "use strict";
  (function() {
    function Q(e, t) {
      Object.defineProperty(m.prototype, e, { get: function() {
        console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
      } });
    }
    function Re(e) {
      return e === null || typeof e != "object" ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function N(e, t) {
      e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
      var n = e + "." + t;
      fe[n] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, e), fe[n] = true);
    }
    function m(e, t, n) {
      this.props = e, this.context = t, this.refs = z, this.updater = n || de;
    }
    function B() {
    }
    function M(e, t, n) {
      this.props = e, this.context = t, this.refs = z, this.updater = n || de;
    }
    function g() {
    }
    function K(e) {
      return "" + e;
    }
    function b(e) {
      try {
        K(e);
        var t = false;
      } catch {
        t = true;
      }
      if (t) {
        t = console;
        var n = t.error, r = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", r), K(e);
      }
    }
    function R(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.$$typeof === Ne ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case W:
          return "Fragment";
        case oe:
          return "Profiler";
        case re:
          return "StrictMode";
        case se:
          return "Suspense";
        case je:
          return "SuspenseList";
        case ie:
          return "Activity";
        case ce:
          return "ViewTransition";
      }
      if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
        case ne:
          return "Portal";
        case ue:
          return e.displayName || "Context";
        case I:
          return (e._context.displayName || "Context") + ".Consumer";
        case ae:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case q:
          return t = e.displayName || null, t !== null ? t : R(e.type) || "Memo";
        case E:
          t = e._payload, e = e._init;
          try {
            return R(e(t));
          } catch {
          }
      }
      return null;
    }
    function F(e) {
      if (e === W) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === E) return "<...>";
      try {
        var t = R(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function X() {
      var e = i.A;
      return e === null ? null : e.getOwner();
    }
    function V() {
      return Error("react-stack-top-frame");
    }
    function Z(e) {
      if (A.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return false;
      }
      return e.key !== void 0;
    }
    function Oe(e, t) {
      function n() {
        ye || (ye = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
      }
      n.isReactWarning = true, Object.defineProperty(e, "key", { get: n, configurable: true });
    }
    function ke() {
      var e = R(this.type);
      return _e[e] || (_e[e] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, t, n, r, o, l) {
      var u = n.ref;
      return e = { $$typeof: U, type: e, key: t, props: n, _owner: r }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", { enumerable: false, get: ke }) : Object.defineProperty(e, "ref", { enumerable: false, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", { configurable: false, enumerable: false, writable: true, value: 0 }), Object.defineProperty(e, "_debugInfo", { configurable: false, enumerable: false, writable: true, value: null }), Object.defineProperty(e, "_debugStack", { configurable: false, enumerable: false, writable: true, value: o }), Object.defineProperty(e, "_debugTask", { configurable: false, enumerable: false, writable: true, value: l }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function Se(e, t) {
      return t = L(e.type, t, e.props, e._owner, e._debugStack, e._debugTask), e._store && (t._store.validated = e._store.validated), t;
    }
    function J(e) {
      y(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === E && (e._payload.status === "fulfilled" ? y(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function y(e) {
      return typeof e == "object" && e !== null && e.$$typeof === U;
    }
    function Ae(e) {
      var t = { "=": "=0", ":": "=2" };
      return "$" + e.replace(/[=:]/g, function(n) {
        return t[n];
      });
    }
    function $(e, t) {
      return typeof e == "object" && e !== null && e.key != null ? (b(e.key), Ae("" + e.key)) : t.toString(36);
    }
    function Ce(e) {
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.reason;
        default:
          switch (typeof e.status == "string" ? e.then(g, g) : (e.status = "pending", e.then(function(t) {
            e.status === "pending" && (e.status = "fulfilled", e.value = t);
          }, function(t) {
            e.status === "pending" && (e.status = "rejected", e.reason = t);
          })), e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw e.reason;
          }
      }
      throw e;
    }
    function v(e, t, n, r, o) {
      var l = typeof e;
      (l === "undefined" || l === "boolean") && (e = null);
      var u = false;
      if (e === null) u = true;
      else switch (l) {
        case "bigint":
        case "string":
        case "number":
          u = true;
          break;
        case "object":
          switch (e.$$typeof) {
            case U:
            case ne:
              u = true;
              break;
            case E:
              return u = e._init, v(u(e._payload), t, n, r, o);
          }
      }
      if (u) {
        u = e, o = o(u);
        var s = r === "" ? "." + $(u, 0) : r;
        return he(o) ? (n = "", s != null && (n = s.replace(we, "$&/") + "/"), v(o, t, n, "", function(h) {
          return h;
        })) : o != null && (y(o) && (o.key != null && (u && u.key === o.key || b(o.key)), n = Se(o, n + (o.key == null || u && u.key === o.key ? "" : ("" + o.key).replace(we, "$&/") + "/") + s), r !== "" && u != null && y(u) && u.key == null && u._store && !u._store.validated && (n._store.validated = 2), o = n), t.push(o)), 1;
      }
      if (u = 0, s = r === "" ? "." : r + ":", he(e)) for (var c = 0; c < e.length; c++) r = e[c], l = s + $(r, c), u += v(r, t, n, l, o);
      else if (c = Re(e), typeof c == "function") for (c === e.entries && (ge || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ge = true), e = c.call(e), c = 0; !(r = e.next()).done; ) r = r.value, l = s + $(r, c++), u += v(r, t, n, l, o);
      else if (l === "object") {
        if (typeof e.then == "function") return v(Ce(e), t, n, r, o);
        throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
      }
      return u;
    }
    function O(e, t, n) {
      if (e == null) return e;
      var r = [], o = 0;
      return v(e, r, "", "", function(l) {
        return t.call(n, l, o++);
      }), r;
    }
    function Pe(e) {
      if (e._status === -1) {
        var t = null, n = null, r = e._ioInfo;
        r != null && (r.start = r.end = performance.now(), r.value = new Promise(function(u, s) {
          t = u, n = s;
        })), r = e._result;
        var o = r();
        if (o.then(function(u) {
          if (e._status === 0 || e._status === -1) {
            e._status = 1, e._result = u;
            var s = e._ioInfo;
            if (s != null) {
              s.end = performance.now();
              var c = u?.default;
              t(c), s.value.status = "fulfilled", s.value.value = c;
            }
            o.status === void 0 && (o.status = "fulfilled", o.value = u);
          }
        }, function(u) {
          if (e._status === 0 || e._status === -1) {
            e._status = 2, e._result = u;
            var s = e._ioInfo;
            s != null && (s.end = performance.now(), s.value.then(g, g), n(u), s.value.status = "rejected", s.value.reason = u), o.status === void 0 && (o.status = "rejected", o.reason = u);
          }
        }), r = e._ioInfo, r != null) {
          var l = o.displayName;
          typeof l == "string" && (r.name = l);
        }
        e._status === -1 && (e._status = 0, e._result = o);
      }
      if (e._status === 1) return r = e._result, r === void 0 && console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, r), "default" in r || console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, r), r.default;
      throw e._result;
    }
    function f() {
      var e = i.H;
      return e === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
    }
    function x() {
      i.asyncTransitions--;
    }
    function ee(e) {
      var t = i.T, n = {};
      n.types = t !== null ? t.types : null, n._updatedFibers = /* @__PURE__ */ new Set(), i.T = n;
      try {
        var r = e(), o = i.S;
        o !== null && o(n, r), typeof r == "object" && r !== null && typeof r.then == "function" && (i.asyncTransitions++, r.then(x, x), r.then(g, Ee));
      } catch (l) {
        Ee(l);
      } finally {
        t === null && n._updatedFibers && (e = n._updatedFibers.size, n._updatedFibers.clear(), 10 < e && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), t !== null && n.types !== null && (t.types !== null && t.types !== n.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), t.types = n.types), i.T = t;
      }
    }
    function te(e) {
      var t = i.T;
      if (t !== null) {
        var n = t.types;
        n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
      } else i.asyncTransitions === 0 && console.error("addTransitionType can only be called inside a `startTransition()` callback. It must be associated with a specific Transition."), ee(te.bind(null, e));
    }
    function k(e) {
      if (C === null) try {
        var t = ("require" + Math.random()).slice(0, 7);
        C = (p && p[t]).call(p, "timers").setImmediate;
      } catch {
        C = function(r) {
          Te === false && (Te = true, typeof MessageChannel > "u" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
          var o = new MessageChannel();
          o.port1.onmessage = r, o.port2.postMessage(void 0);
        };
      }
      return C(e);
    }
    function w(e) {
      return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
    }
    function S(e, t) {
      t !== P - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), P = t;
    }
    function D(e, t, n) {
      var r = i.actQueue;
      if (r !== null) if (r.length !== 0) try {
        Y(r), k(function() {
          return D(e, t, n);
        });
        return;
      } catch (o) {
        i.thrownErrors.push(o);
      }
      else i.actQueue = null;
      0 < i.thrownErrors.length ? (r = w(i.thrownErrors), i.thrownErrors.length = 0, n(r)) : t(e);
    }
    function Y(e) {
      if (!H) {
        H = true;
        var t = 0;
        try {
          for (; t < e.length; t++) {
            var n = e[t];
            do {
              i.didUsePromise = false;
              var r = n(false);
              if (r !== null) {
                if (i.didUsePromise) {
                  e[t] = n, e.splice(0, t);
                  return;
                }
                n = r;
              } else break;
            } while (true);
          }
          e.length = 0;
        } catch (o) {
          e.splice(0, t + 1), i.thrownErrors.push(o);
        } finally {
          H = false;
        }
      }
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var U = /* @__PURE__ */ Symbol.for("react.transitional.element"), ne = /* @__PURE__ */ Symbol.for("react.portal"), W = /* @__PURE__ */ Symbol.for("react.fragment"), re = /* @__PURE__ */ Symbol.for("react.strict_mode"), oe = /* @__PURE__ */ Symbol.for("react.profiler"), I = /* @__PURE__ */ Symbol.for("react.consumer"), ue = /* @__PURE__ */ Symbol.for("react.context"), ae = /* @__PURE__ */ Symbol.for("react.forward_ref"), se = /* @__PURE__ */ Symbol.for("react.suspense"), je = /* @__PURE__ */ Symbol.for("react.suspense_list"), q = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), ie = /* @__PURE__ */ Symbol.for("react.activity"), ce = /* @__PURE__ */ Symbol.for("react.view_transition"), le = Symbol.iterator, fe = {}, de = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function(e) {
      N(e, "forceUpdate");
    }, enqueueReplaceState: function(e) {
      N(e, "replaceState");
    }, enqueueSetState: function(e) {
      N(e, "setState");
    } }, pe = Object.assign, z = {};
    Object.freeze(z), m.prototype.isReactComponent = {}, m.prototype.setState = function(e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e, t, "setState");
    }, m.prototype.forceUpdate = function(e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    var d = { isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."], replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."] };
    for (T in d) d.hasOwnProperty(T) && Q(T, d[T]);
    B.prototype = m.prototype, d = M.prototype = new B(), d.constructor = M, pe(d, m.prototype), d.isPureReactComponent = true;
    var he = Array.isArray, Ne = /* @__PURE__ */ Symbol.for("react.client.reference"), i = { H: null, A: null, T: null, S: null, actQueue: null, asyncTransitions: 0, isBatchingLegacy: false, didScheduleLegacyUpdate: false, didUsePromise: false, thrownErrors: [], getCurrentStack: null, recentlyCreatedOwnerStacks: 0 }, A = Object.prototype.hasOwnProperty, me = console.createTask ? console.createTask : function() {
      return null;
    };
    d = { react_stack_bottom_frame: function(e) {
      return e();
    } };
    var ye, ve, _e = {}, Me = d.react_stack_bottom_frame.bind(d, V)(), Le = me(F(V)), ge = false, we = /\/+/g, Ee = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, Te = false, C = null, P = 0, j = false, H = false, be = typeof queueMicrotask == "function" ? function(e) {
      queueMicrotask(function() {
        return queueMicrotask(e);
      });
    } : k;
    d = Object.freeze({ __proto__: null, c: function(e) {
      return f().useMemoCache(e);
    } });
    var T = { map: O, forEach: function(e, t, n) {
      O(e, function() {
        t.apply(this, arguments);
      }, n);
    }, count: function(e) {
      var t = 0;
      return O(e, function() {
        t++;
      }), t;
    }, toArray: function(e) {
      return O(e, function(t) {
        return t;
      }) || [];
    }, only: function(e) {
      if (!y(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e;
    } };
    a.Activity = ie, a.Children = T, a.Component = m, a.Fragment = W, a.Profiler = oe, a.PureComponent = M, a.StrictMode = re, a.Suspense = se, a.ViewTransition = ce, a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, a.__COMPILER_RUNTIME = d, a.act = function(e) {
      var t = i.actQueue, n = P;
      P++;
      var r = i.actQueue = t !== null ? t : [], o = false;
      try {
        var l = e();
      } catch (c) {
        i.thrownErrors.push(c);
      }
      if (0 < i.thrownErrors.length) throw S(t, n), e = w(i.thrownErrors), i.thrownErrors.length = 0, e;
      if (l !== null && typeof l == "object" && typeof l.then == "function") {
        var u = l;
        return be(function() {
          o || j || (j = true, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
        }), { then: function(c, h) {
          o = true, u.then(function(_) {
            if (S(t, n), n === 0) {
              try {
                Y(r), k(function() {
                  return D(_, c, h);
                });
              } catch (De) {
                i.thrownErrors.push(De);
              }
              if (0 < i.thrownErrors.length) {
                var $e = w(i.thrownErrors);
                i.thrownErrors.length = 0, h($e);
              }
            } else c(_);
          }, function(_) {
            S(t, n), 0 < i.thrownErrors.length && (_ = w(i.thrownErrors), i.thrownErrors.length = 0), h(_);
          });
        } };
      }
      var s = l;
      if (S(t, n), n === 0 && (Y(r), r.length !== 0 && be(function() {
        o || j || (j = true, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
      }), i.actQueue = null), 0 < i.thrownErrors.length) throw e = w(i.thrownErrors), i.thrownErrors.length = 0, e;
      return { then: function(c, h) {
        o = true, n === 0 ? (i.actQueue = r, k(function() {
          return D(s, c, h);
        })) : c(s);
      } };
    }, a.addTransitionType = te, a.cache = function(e) {
      return function() {
        return e.apply(null, arguments);
      };
    }, a.cacheSignal = function() {
      return null;
    }, a.captureOwnerStack = function() {
      var e = i.getCurrentStack;
      return e === null ? null : e();
    }, a.cloneElement = function(e, t, n) {
      if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
      var r = pe({}, e.props), o = e.key, l = e._owner;
      if (t != null) {
        var u;
        e: {
          if (A.call(t, "ref") && (u = Object.getOwnPropertyDescriptor(t, "ref").get) && u.isReactWarning) {
            u = false;
            break e;
          }
          u = t.ref !== void 0;
        }
        u && (l = X()), Z(t) && (b(t.key), o = "" + t.key);
        for (s in t) !A.call(t, s) || s === "key" || s === "__self" || s === "__source" || s === "ref" && t.ref === void 0 || (r[s] = t[s]);
      }
      var s = arguments.length - 2;
      if (s === 1) r.children = n;
      else if (1 < s) {
        u = Array(s);
        for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
        r.children = u;
      }
      for (r = L(e.type, o, r, l, e._debugStack, e._debugTask), o = 2; o < arguments.length; o++) J(arguments[o]);
      return r;
    }, a.createContext = function(e) {
      return e = { $$typeof: ue, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = e, e.Consumer = { $$typeof: I, _context: e }, e._currentRenderer = null, e._currentRenderer2 = null, e;
    }, a.createElement = function(e, t, n) {
      for (var r = 2; r < arguments.length; r++) J(arguments[r]);
      var o;
      r = {};
      var l = null;
      if (t != null) for (o in ve || !("__self" in t) || "key" in t || (ve = true, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), Z(t) && (b(t.key), l = "" + t.key), t) A.call(t, o) && o !== "key" && o !== "__self" && o !== "__source" && (r[o] = t[o]);
      var u = arguments.length - 2;
      if (u === 1) r.children = n;
      else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
        Object.freeze && Object.freeze(s), r.children = s;
      }
      if (e && e.defaultProps) for (o in u = e.defaultProps, u) r[o] === void 0 && (r[o] = u[o]);
      return l && Oe(r, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), (o = 1e4 > i.recentlyCreatedOwnerStacks++) ? (s = Error.stackTraceLimit, Error.stackTraceLimit = 10, u = Error("react-stack-top-frame"), Error.stackTraceLimit = s) : u = Me, L(e, l, r, X(), u, o ? me(F(e)) : Le);
    }, a.createRef = function() {
      var e = { current: null };
      return Object.seal(e), e;
    }, a.forwardRef = function(e) {
      e != null && e.$$typeof === q ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? console.error("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && e.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
      var t = { $$typeof: ae, render: e }, n;
      return Object.defineProperty(t, "displayName", { enumerable: false, configurable: true, get: function() {
        return n;
      }, set: function(r) {
        n = r, e.name || e.displayName || (Object.defineProperty(e, "name", { value: r }), e.displayName = r);
      } }), t;
    }, a.isValidElement = y, a.lazy = function(e) {
      e = { _status: -1, _result: e };
      var t = { $$typeof: E, _payload: e, _init: Pe }, n = { name: "lazy", start: -1, end: -1, value: null, owner: null, debugStack: Error("react-stack-top-frame"), debugTask: console.createTask ? console.createTask("lazy()") : null };
      return e._ioInfo = n, t._debugInfo = [{ awaited: n }], t;
    }, a.memo = function(e, t) {
      e == null && console.error("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e), t = { $$typeof: q, type: e, compare: t === void 0 ? null : t };
      var n;
      return Object.defineProperty(t, "displayName", { enumerable: false, configurable: true, get: function() {
        return n;
      }, set: function(r) {
        n = r, e.name || e.displayName || (Object.defineProperty(e, "name", { value: r }), e.displayName = r);
      } }), t;
    }, a.startTransition = ee, a.unstable_useCacheRefresh = function() {
      return f().useCacheRefresh();
    }, a.use = function(e) {
      return f().use(e);
    }, a.useActionState = function(e, t, n) {
      return f().useActionState(e, t, n);
    }, a.useCallback = function(e, t) {
      return f().useCallback(e, t);
    }, a.useContext = function(e) {
      var t = f();
      return e.$$typeof === I && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"), t.useContext(e);
    }, a.useDebugValue = function(e, t) {
      return f().useDebugValue(e, t);
    }, a.useDeferredValue = function(e, t) {
      return f().useDeferredValue(e, t);
    }, a.useEffect = function(e, t) {
      return e == null && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"), f().useEffect(e, t);
    }, a.useEffectEvent = function(e) {
      return f().useEffectEvent(e);
    }, a.useId = function() {
      return f().useId();
    }, a.useImperativeHandle = function(e, t, n) {
      return f().useImperativeHandle(e, t, n);
    }, a.useInsertionEffect = function(e, t) {
      return e == null && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"), f().useInsertionEffect(e, t);
    }, a.useLayoutEffect = function(e, t) {
      return e == null && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"), f().useLayoutEffect(e, t);
    }, a.useMemo = function(e, t) {
      return f().useMemo(e, t);
    }, a.useOptimistic = function(e, t) {
      return f().useOptimistic(e, t);
    }, a.useReducer = function(e, t, n) {
      return f().useReducer(e, t, n);
    }, a.useRef = function(e) {
      return f().useRef(e);
    }, a.useState = function(e) {
      return f().useState(e);
    }, a.useSyncExternalStore = function(e, t, n) {
      return f().useSyncExternalStore(e, t, n);
    }, a.useTransition = function() {
      return f().useTransition();
    }, a.version = "19.3.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
} }), We = G({ "index.js"(a, p) {
  p.exports = Ue();
} });
export { G as __commonJS, We as require_react };
