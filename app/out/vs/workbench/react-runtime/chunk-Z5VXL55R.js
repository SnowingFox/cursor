!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bb17aaf0-f1bb-529e-b743-070ddc4db375");
  } catch (e2) {
  }
})();
import { __commonJS as m, require_react as b } from "./chunk-MBS4DSQP.js";
var S = m({ "react-dom.development.js"(n) {
  "use strict";
  (function() {
    function c() {
    }
    function y(t) {
      return "" + t;
    }
    function h(t, e, r) {
      var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      if (a == null) a = null;
      else if (a === p) a = p;
      else {
        try {
          y(a);
          var u = false;
        } catch {
          u = true;
        }
        u && (console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object"), y(a)), a = "" + a;
      }
      return { $$typeof: O, key: a, children: t, containerInfo: e, implementation: r };
    }
    function l(t, e) {
      if (t === "font") return "";
      if (typeof e == "string") return e === "use-credentials" ? e : "";
    }
    function o(t) {
      return t === null ? "`null`" : t === void 0 ? "`undefined`" : t === "" ? "an empty string" : 'something with type "' + typeof t + '"';
    }
    function s(t) {
      return t === null ? "`null`" : t === void 0 ? "`undefined`" : t === "" ? "an empty string" : typeof t == "string" ? JSON.stringify(t) : typeof t == "number" ? "`" + t + "`" : 'something with type "' + typeof t + '"';
    }
    function g() {
      var t = d.H;
      return t === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`), t;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var _ = b(), i = { d: { f: c, r: function() {
      throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
    }, D: c, C: c, L: c, m: c, X: c, S: c, M: c }, p: 0, findDOMNode: null }, O = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.recoverable"), p = /* @__PURE__ */ Symbol.for("react.optimistic_key"), d = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, n.browser = function(t) {
      return { $$typeof: v, _reason: t };
    }, n.createPortal = function(t, e) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) throw Error("Target container is not a DOM element.");
      return h(t, e, null, r);
    }, n.flushSync = function(t) {
      var e = d.T, r = i.p;
      try {
        if (d.T = null, i.p = 2, t) return t();
      } finally {
        d.T = e, i.p = r, i.d.f() && console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
      }
    }, n.preconnect = function(t, e) {
      typeof t == "string" && t ? e != null && typeof e != "object" ? console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.", s(e)) : e != null && typeof e.crossOrigin != "string" && console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.", o(e.crossOrigin)) : console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", o(t)), typeof t == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, i.d.C(t, e));
    }, n.prefetchDNS = function(t) {
      if (typeof t != "string" || !t) console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", o(t));
      else if (1 < arguments.length) {
        var e = arguments[1];
        typeof e == "object" && e.hasOwnProperty("crossOrigin") ? console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", s(e)) : console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", s(e));
      }
      typeof t == "string" && i.d.D(t);
    }, n.preinit = function(t, e) {
      if (typeof t == "string" && t ? e == null || typeof e != "object" ? console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.", s(e)) : e.as !== "style" && e.as !== "script" && console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".', s(e.as)) : console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", o(t)), typeof t == "string" && e && typeof e.as == "string") {
        var r = e.as, a = l(r, e.crossOrigin), u = typeof e.integrity == "string" ? e.integrity : void 0, f = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
        r === "style" ? i.d.S(t, typeof e.precedence == "string" ? e.precedence : void 0, { crossOrigin: a, integrity: u, fetchPriority: f }) : r === "script" && i.d.X(t, { crossOrigin: a, integrity: u, fetchPriority: f, nonce: typeof e.nonce == "string" ? e.nonce : void 0 });
      }
    }, n.preinitModule = function(t, e) {
      var r = "";
      if (typeof t == "string" && t || (r += " The `href` argument encountered was " + o(t) + "."), e !== void 0 && typeof e != "object" ? r += " The `options` argument encountered was " + o(e) + "." : e && "as" in e && e.as !== "script" && (r += " The `as` option encountered was " + s(e.as) + "."), r) console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s", r);
      else switch (r = e && typeof e.as == "string" ? e.as : "script", r) {
        case "script":
          break;
        default:
          r = s(r), console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)', r, t);
      }
      typeof t == "string" && (typeof e == "object" && e !== null ? (e.as == null || e.as === "script") && (r = l(e.as, e.crossOrigin), i.d.M(t, { crossOrigin: r, integrity: typeof e.integrity == "string" ? e.integrity : void 0, nonce: typeof e.nonce == "string" ? e.nonce : void 0, fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0 })) : e == null && i.d.M(t));
    }, n.preload = function(t, e) {
      var r = "";
      if (typeof t == "string" && t || (r += " The `href` argument encountered was " + o(t) + "."), e == null || typeof e != "object" ? r += " The `options` argument encountered was " + o(e) + "." : typeof e.as == "string" && e.as || (r += " The `as` option encountered was " + o(e.as) + "."), r && console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s', r), typeof t == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
        r = e.as;
        var a = l(r, e.crossOrigin);
        i.d.L(t, r, { crossOrigin: a, integrity: typeof e.integrity == "string" ? e.integrity : void 0, nonce: typeof e.nonce == "string" ? e.nonce : void 0, type: typeof e.type == "string" ? e.type : void 0, fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0, referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0, imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0, imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0, media: typeof e.media == "string" ? e.media : void 0 });
      }
    }, n.preloadModule = function(t, e) {
      var r = "";
      typeof t == "string" && t || (r += " The `href` argument encountered was " + o(t) + "."), e !== void 0 && typeof e != "object" ? r += " The `options` argument encountered was " + o(e) + "." : e && "as" in e && typeof e.as != "string" && (r += " The `as` option encountered was " + o(e.as) + "."), r && console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s', r), typeof t == "string" && (e ? (r = l(e.as, e.crossOrigin), i.d.m(t, { as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0, crossOrigin: r, integrity: typeof e.integrity == "string" ? e.integrity : void 0, nonce: typeof e.nonce == "string" ? e.nonce : void 0, fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0 })) : i.d.m(t));
    }, n.requestFormReset = function(t) {
      i.d.r(t);
    }, n.unstable_batchedUpdates = function(t, e) {
      return t(e);
    }, n.useFormState = function(t, e, r) {
      return g().useFormState(t, e, r);
    }, n.useFormStatus = function() {
      return g().useHostTransitionStatus();
    }, n.version = "19.3.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
} }), T = m({ "index.js"(n, c) {
  c.exports = S();
} });
export { T as require_react_dom };
