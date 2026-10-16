!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "12da335e-d9f6-5411-bc5a-facb78ab8b1e");
  } catch (e2) {
  }
})();
var a = Object.getOwnPropertyNames, j = (e, t) => function() {
  return t || (0, e[a(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, i = j({ "react-jsx-runtime.production.js"(e) {
  "use strict";
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.fragment");
  function _(l, r, s) {
    var n = null;
    if (s !== void 0 && (n = "" + s), r.key !== void 0 && (n = "" + r.key), "key" in r) {
      s = {};
      for (var x in r) x !== "key" && (s[x] = r[x]);
    } else s = r;
    return r = s.ref, { $$typeof: t, type: l, key: n, ref: r !== void 0 ? r : null, props: s };
  }
  e.Fragment = u, e.jsx = _, e.jsxs = _;
} }), p = j({ "jsx-runtime.js"(e, t) {
  t.exports = i();
} });
const o = p();
export const Fragment = o.Fragment, jsx = o.jsx, jsxs = o.jsxs, jsxDEV = o.jsxDEV;
export default o;
