// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ScaledPreview.js range:17178533..17180103
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.963Z
XEa = L({ "ScaledPreview.js"() {
  "use strict";
  E(), Va(), lgp = { kzqmXN: "ui-1m258z3", k3aq6I: "ui-sqj5wx", k3nNDw: "ui-1al4vs7", kfzvcC: "ui-47corl", kMwMTN: "ui-1wd3ewq", k9WMMc: "ui-dpxx8g", $$css: true }, cgp = 320, ugp = { block: 12, inline: 24 }, dgp = { page: (t, e) => [lgp, { kLKAdn: e.block != null ? "ui-1jm3axb" : e.block, kpe85a: e.inline != null ? "ui-wsd3xy" : e.inline, kGO01o: e.block != null ? "ui-jqpyvm" : e.block, kE3dHu: e.inline != null ? "ui-13e46o5" : e.inline, $$css: true }, { "--x-transform": `scale(${t})` != null ? `scale(${t})` : void 0, "--x-paddingTop": ((n) => typeof n == "number" ? n + "px" : n ?? void 0)(e.block), "--x-paddingRight": ((n) => typeof n == "number" ? n + "px" : n ?? void 0)(e.inline), "--x-paddingBottom": ((n) => typeof n == "number" ? n + "px" : n ?? void 0)(e.block), "--x-paddingLeft": ((n) => typeof n == "number" ? n + "px" : n ?? void 0)(e.inline) }] };
} });
import { jsx as hgp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Br1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Ur1(t) {
  const e = Br1(5), { mermaid: n } = t;
  let i;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = { block: 16, inline: 18 }, e[0] = i) : i = e[0];
  let r;
  e[1] !== n ? (r = ["```mermaid", n, "```"], e[1] = n, e[2] = r) : r = e[2];
  const s = r.join(`
`);
  let o;
  return e[3] !== s ? (o = hgp(wvi, { inset: i, children: hgp(dT, { size: "sm", gfm: true, allowMermaid: true, children: s }) }), e[3] = s, e[4] = o) : o = e[4], o;
}
