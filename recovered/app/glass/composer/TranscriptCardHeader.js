// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TranscriptCardHeader.js range:15066151..15067783
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, fkt, vkt
// wrapper-init: zxS
// hoisted-owner: TranscriptCardHeaderContent.js (app-out-vs-workbench-workbench-glass-main-js:2311); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: YxS -> TranscriptCardHeaderContent (apply-map AST equivalent)

zxS = L({
  "TranscriptCardHeader.js"() {
    "use strict";

    E(), Va(), fkt(), vkt(), vHh = {
      "ui--default-marker": "ui--default-marker",
      $$css: true
    }, bjt = {
      header: {
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-1cy8zhl",
        kLKAdn: "ui-13ly8rp",
        kpe85a: "ui-1yxiud8",
        kGO01o: "ui-1xlntvz",
        kE3dHu: "ui-yab65l",
        kWkggS: "ui-jbqb8w",
        k7Eaqz: "ui-euugli",
        kOIVth: "ui-pkkfsy",
        kB7OPa: "ui-9f619",
        kzqmXN: "ui-h8yej3",
        kMwMTN: "ui-1heor9g",
        kMv6JI: "ui-jb2p0i",
        k63SB2: "ui-1pd3egz",
        k9WMMc: "ui-dpxx8g",
        $$css: true
      },
      noPaddingBottom: {
        kGO01o: "ui-18d9i69",
        $$css: true
      },
      headerHoverable: {
        kWkggS: "ui-jbqb8w ui-1iuyybk",
        k1ekBW: "ui-15406qy",
        kIyJzY: "ui-g3p6pi",
        kAMwcw: "ui-6ekqhr",
        $$css: true
      },
      headerWithDivider: {
        kt9PQ7: "ui-so031l",
        kfdmCh: "ui-1q0q8m5",
        kL6WhQ: "ui-8daab9",
        $$css: true
      },
      headerClickable: {
        kkrTdU: "ui-1ypdohk",
        $$css: true
      },
      inset12: {
        kpe85a: "ui-1jkygx",
        kE3dHu: "ui-1o7kk3e",
        $$css: true
      }
    };
  }
});
import { jsx as VxS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as KxS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function TranscriptCardHeaderContent(t) {
  const e = KxS(3),
    {
      children: n
    } = t;
  _jt("TranscriptCard.HeaderContent");
  let i;
  e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (i = {
    className: "ui-78zum5 ui-dt5ytf ui-1cy8zhl ui-1iyjqo2 ui-s83m0k ui-dl72j9 ui-euugli ui-4jlmx6 ui-l56j7k ui-137clkk ui-dpxx8g"
  }, e[0] = i) : i = e[0];
  const r = i;
  let s;
  return e[1] !== n ? (s = VxS("div", {
    className: r.className,
    "data-component": "transcript-card-header-content",
    style: r.style,
    children: n
  }), e[1] = n, e[2] = s) : s = e[2], s;
}
