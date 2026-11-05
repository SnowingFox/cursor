// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TextEditable.js range:18350936..18353200
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.066Z
gT1 = L({ "TextEditable.js"() {
  "use strict";
  E(), Va(), mf(), Ena(), vbi = { reset: { kysU6D: "ui-jyslct", kB7OPa: "ui-9f619", ksu8eU: "ui-ng3xce", kMzoRj: "ui-c342km", kWkggS: "ui-jbqb8w", kMwMTN: "ui-1heor9g", k3XXqK: "ui-1t137rt", kMeerF: "ui-1k57tk5", kInvED: "ui-1wfwxd8", kg5iWk: "ui-lyipyv", khDVqt: "ui-uxw1ft", $$css: true }, sizingContent: { kOwNse: "ui-5f5z56", kzqmXN: "ui-14atkfc", k7Eaqz: "ui-4dcj2i", ks0D6T: "ui-193iq5w", kmuXW: "ui-s83m0k", kVQacm: "ui-b3r6kr", $$css: true }, sizingFill: { kzqmXN: "ui-h8yej3", k7Eaqz: "ui-euugli", kVQacm: "ui-b3r6kr", $$css: true }, placeholderHiddenOnFocus: { kgRanC: "ui-dvjuxi", $$css: true } };
} });
import Fg from "./react-runtime/react/esm-index-production.js";
import fT1 from "./react-runtime/react-dom/esm-index-production.js";
function vT1(t) {
  if (!t || typeof document > "u") return;
  let e = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", e.appendChild(n), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t));
}
function mHr(t) {
  return t.label !== void 0;
}
function $Ge(...t) {
  return t.filter(Boolean).join(" ");
}
function _T1(t) {
  const [e, n] = t.split("-"), i = [];
  return e && i.push(e), n && i.push(n), i;
}
function MAp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const t = document.documentElement.getAttribute("dir");
  return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
}
function bT1(t, e) {
  const n = {};
  return [t, e].forEach((i, r) => {
    const s = r === 1, o = s ? "--mobile-offset" : "--offset", a = s ? XAp : YAp;
    function l(c) {
      ["top", "right", "bottom", "left"].forEach((u) => {
        n[`${o}-${u}`] = typeof c == "number" ? `${c}px` : c;
      });
    }
    typeof i == "number" || typeof i == "string" ? l(i) : typeof i == "object" ? ["top", "right", "bottom", "left"].forEach((c) => {
      i[c] === void 0 ? n[`${o}-${c}`] = a : n[`${o}-${c}`] = typeof i[c] == "number" ? `${i[c]}px` : i[c];
    }) : l(a);
  }), n;
}
var DAp, NAp, LAp, OAp, FAp, BAp, UAp, jAp, $Ap, gHr, HAp, Jhe, WAp, GAp, qAp, zAp, VAp, _bi, KAp, YAp, XAp, PMa, ZAp, QAp, JAp, eRp, tRp, nRp, 