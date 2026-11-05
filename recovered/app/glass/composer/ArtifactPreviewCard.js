// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ArtifactPreviewCard.js range:22440724..22444208
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt
// wrapper-init: xq1
// hoisted-owner: ArtifactsTable.js (app-out-vs-workbench-workbench-glass-main-js:7719); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

// deps: E, Mt
// wrapper-init: xq1
// hoisted-owner: stylex.js (app-out-vs-workbench-workbench-glass-main-js:3879); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

xq1 = L({ "ArtifactPreviewCard.js"() {
  "use strict";
  E(), Mt(), nes = { root: { kqGvvJ: "cursor-ui-1bxj7xt", k1C7PZ: "cursor-ui-4r3nzd", $$css: true }, media: { k1xSpc: "cursor-ui-78zum5", kGNEyG: "cursor-ui-6s0dn4", kSGwAc: "cursor-ui-amitd3", kjj79g: "cursor-ui-l56j7k", kzqmXN: "cursor-ui-29ncy0", kZKoxP: "cursor-ui-dd8jsf", kVQacm: "cursor-ui-b3r6kr", kIxVMA: "cursor-ui-1njmyyh", ksF3WI: "cursor-ui-y7i79c", kqGeR4: "cursor-ui-famn59", kYm2EN: "cursor-ui-1talola", kWkggS: "cursor-ui-flfp0o", kMwMTN: "cursor-ui-1mh7f6w", keoZOQ: "cursor-ui-1e66mq1", k1K539: "cursor-ui-1vnbkiq", koQZXg: "cursor-ui-v5sl7z", $$css: true }, headerInRow: { kzQI83: "cursor-ui-1iyjqo2", kmuXW: "cursor-ui-s83m0k", kCS8Yb: "cursor-ui-1t1x2f9", k7Eaqz: "cursor-ui-euugli", kzqmXN: "cursor-ui-14atkfc", kGNEyG: "cursor-ui-6s0dn4", kSGwAc: "cursor-ui-kh2ocl", kE3dHu: "cursor-ui-1uhho1l", $$css: true } }, d7m = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1", "[::1]"]);
} });
function Aq1() {
  if (h7m) return sIn;
  h7m = 1, Object.defineProperty(sIn, "__esModule", { value: true }), sIn.styleq = void 0;
  var t = /* @__PURE__ */ new WeakMap(), e = "$$css";
  function n(r) {
    var s, o, a;
    return r != null && (s = r.disableCache === true, o = r.disableMix === true, a = r.transform), function() {
      for (var c = [], u = "", d = null, h = "", p = s ? null : t, g = new Array(arguments.length), f = 0; f < arguments.length; f++) g[f] = arguments[f];
      for (; g.length > 0; ) {
        var _ = g.pop();
        if (!(_ == null || _ === false)) {
          if (Array.isArray(_)) {
            for (var b = 0; b < _.length; b++) g.push(_[b]);
            continue;
          }
          var y = a != null ? a(_) : _;
          if (y.$$css != null) {
            var S = "";
            if (p != null && p.has(y)) {
              var k = p.get(y);
              k != null && (S = k[0], h = k[2], c.push.apply(c, k[1]), p = k[3]);
            } else {
              var C = [];
              for (var T in y) {
                var I = y[T];
                if (T === e) {
                  var A = y[T];
                  A !== true && (h = h ? A + "; " + h : A);
                  continue;
                }
                typeof I == "string" || I === null ? c.includes(T) || (c.push(T), p != null && C.push(T), typeof I == "string" && (S += S ? " " + I : I)) : console.error("styleq: ".concat(T, " typeof ").concat(String(I), ' is not "string" or "null".'));
              }
              if (p != null) {
                var P = /* @__PURE__ */ new WeakMap();
                p.set(y, [S, C, h, P]), p = P;
              }
            }
            S && (u = u ? S + " " + u : S);
          } else if (o) d == null && (d = {}), d = Object.assign({}, y, d);
          else {
            var M = null;
            for (var O in y) {
              var N = y[O];
              N !== void 0 && (c.includes(O) || (N != null && (d == null && (d = {}), M == null && (M = {}), M[O] = N), c.push(O), p = null));
            }
            M != null && (d = Object.assign(M, d));
          }
        }
      }
      var U = [u, d, h];
      return U;
    };
  }
  var i = sIn.styleq = n();
  return i.factory = n, sIn;
}
function Sc(...t) {
  const [e, n, i] = p7m.styleq(t), r = {};
  return e != null && e !== "" && (r.className = e), n != null && Object.keys(n).length > 0 && (r.style = n), i != null && i !== "" && (r["data-style-src"] = i), r;
}
var sIn, h7m, p7m, 