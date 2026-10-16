!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "71478349-48b0-5bc7-aa02-d2c128e89ccb");
  } catch (e2) {
  }
})();
import { __commonJS as v, require_react as S } from "./chunk-ORS33AAG.js";
var E = v({ "react-dom.production.js"(i) {
  "use strict";
  var d = S();
  function a(r) {
    var e = "https://react.dev/errors/" + r;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + r + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f() {
  }
  var n = { d: { f, r: function() {
    throw Error(a(522));
  }, D: f, C: f, L: f, m: f, X: f, S: f, M: f }, p: 0, findDOMNode: null }, o = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.recoverable"), g = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function s(r, e, t) {
    var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: o, key: c == null ? null : c === g ? g : "" + c, children: r, containerInfo: e, implementation: t };
  }
  var u = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(r, e) {
    if (r === "font") return "";
    if (typeof e == "string") return e === "use-credentials" ? e : "";
  }
  i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, i.browser = function(r) {
    return { $$typeof: m, _reason: r };
  }, i.createPortal = function(r, e) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) throw Error(a(299));
    return s(r, e, null, t);
  }, i.flushSync = function(r) {
    var e = u.T, t = n.p;
    try {
      if (u.T = null, n.p = 2, r) return r();
    } finally {
      u.T = e, n.p = t, n.d.f();
    }
  }, i.preconnect = function(r, e) {
    typeof r == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, n.d.C(r, e));
  }, i.prefetchDNS = function(r) {
    typeof r == "string" && n.d.D(r);
  }, i.preinit = function(r, e) {
    if (typeof r == "string" && e && typeof e.as == "string") {
      var t = e.as, c = y(t, e.crossOrigin), l = typeof e.integrity == "string" ? e.integrity : void 0, _ = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
      t === "style" ? n.d.S(r, typeof e.precedence == "string" ? e.precedence : void 0, { crossOrigin: c, integrity: l, fetchPriority: _ }) : t === "script" && n.d.X(r, { crossOrigin: c, integrity: l, fetchPriority: _, nonce: typeof e.nonce == "string" ? e.nonce : void 0 });
    }
  }, i.preinitModule = function(r, e) {
    if (typeof r == "string") if (typeof e == "object" && e !== null) {
      if (e.as == null || e.as === "script") {
        var t = y(e.as, e.crossOrigin);
        n.d.M(r, { crossOrigin: t, integrity: typeof e.integrity == "string" ? e.integrity : void 0, nonce: typeof e.nonce == "string" ? e.nonce : void 0, fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0 });
      }
    } else e == null && n.d.M(r);
  }, i.preload = function(r, e) {
    if (typeof r == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
      var t = e.as, c = y(t, e.crossOrigin);
      n.d.L(r, t, { crossOrigin: c, integrity: typeof e.integrity == "string" ? e.integrity : void 0, nonce: typeof e.nonce == "string" ? e.nonce : void 0, type: typeof e.type == "string" ? e.type : void 0, fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0, referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0, imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0, imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0, media: typeof e.media == "string" ? e.media : void 0 });
    }
  }, i.preloadModule = function(r, e) {
    if (typeof r == "string") if (e) {
      var t = y(e.as, e.crossOrigin);
      n.d.m(r, { as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0, crossOrigin: t, integrity: typeof e.integrity == "string" ? e.integrity : void 0, nonce: typeof e.nonce == "string" ? e.nonce : void 0, fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0 });
    } else n.d.m(r);
  }, i.requestFormReset = function(r) {
    n.d.r(r);
  }, i.unstable_batchedUpdates = function(r, e) {
    return r(e);
  }, i.useFormState = function(r, e, t) {
    return u.H.useFormState(r, e, t);
  }, i.useFormStatus = function() {
    return u.H.useHostTransitionStatus();
  }, i.version = "19.3.0";
} }), O = v({ "index.js"(i, d) {
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
    } catch (f) {
      console.error(f);
    }
  }
  a(), d.exports = E();
} });
export { O as require_react_dom };
