// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TranscriptCardRows.js range:15091928..15093903
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, fkt
// wrapper-init: OAS
// hoisted-owner: TranscriptCardTimeout.js (app-out-vs-workbench-workbench-glass-main-js:2323); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: BAS -> TranscriptCardTimeout (apply-map AST equivalent)

OAS = L({
  "TranscriptCardRows.js"() {
    "use strict";

    E(), Va(), fkt(), CHh = {
      root: {
        kB7OPa: "ui-9f619",
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        kzqmXN: "ui-h8yej3",
        k7Eaqz: "ui-euugli",
        kLKAdn: "ui-f6zju3",
        kpe85a: "ui-17v7654",
        kGO01o: "ui-1rgtt3y",
        kE3dHu: "ui-1lfpczk",
        kGuDYH: "ui-11wthnw",
        kLWn49: "ui-1ja60sm",
        $$css: true
      }
    };
  }
});
import { jsx as THh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as FAS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function TranscriptCardTimeout(t) {
  const e = FAS(11),
    {
      startedAtMs: n,
      durationMs: i,
      fill: r,
      fillColor: s
    } = t,
    o = r === void 0 ? "visible" : r;
  vjt("TranscriptCard.Timeout");
  const a = n === void 0 ? 0 : Math.min(i, Math.max(0, Date.now() - n));
  let l;
  e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (l = {
    className: "ui-10l6tqk ui-1ey2m1c ui-u96u03 ui-3m8u43 ui-36qwtl ui-99zy06 ui-b3r6kr ui-47corl"
  }, e[0] = l) : l = e[0];
  const c = l,
    u = `${-a}ms`,
    d = `${i}ms`,
    h = s ?? "var(--cursor-bg-accent)";
  let p;
  e[1] !== u || e[2] !== d || e[3] !== h ? (p = {
    ...c.style,
    "--ui-transcript-timeout-delay": u,
    "--ui-transcript-timeout-duration": d,
    "--ui-transcript-timeout-fill": h
  }, e[1] = u, e[2] = d, e[3] = h, e[4] = p) : p = e[4];
  let g;
  e[5] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (g = {
    0: {
      className: "ui-5yr21d ui-h8yej3 ui-am0erz ui-19w6rv ui-j03kij ui-12n081g ui-1swf7pw ui-1esw782 ui-1u6ievf"
    },
    1: {
      className: "ui-5yr21d ui-h8yej3 ui-am0erz ui-19w6rv ui-12n081g ui-1swf7pw ui-1esw782 ui-1u6ievf ui-g01cxk ui-1a5igra"
    }
  }, e[5] = g) : g = e[5];
  const f = g[(o === "hidden") << 0];
  let _;
  e[6] !== f ? (_ = THh("div", {
    ...f
  }), e[6] = f, e[7] = _) : _ = e[7];
  let b;
  return e[8] !== p || e[9] !== _ ? (b = THh("div", {
    "aria-hidden": true,
    className: c.className,
    "data-component": "transcript-card-timeout",
    style: p,
    children: _
  }), e[8] = p, e[9] = _, e[10] = b) : b = e[10], b;
}
