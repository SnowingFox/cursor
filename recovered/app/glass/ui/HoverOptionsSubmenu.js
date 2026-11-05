// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: HoverOptionsSubmenu.js range:16654998..16659569
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.716Z
kXS = L({ "HoverOptionsSubmenu.js"() {
  "use strict";
  E(), Va(), Clp(), Ukn(), $he(), a8r(), JY(), VFe(), hXS(), aJ(), fd(), qu(), Ene(), E$t(), cwt = { details: { k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", kOIVth: "ui-137clkk", kMwMTN: "ui-1wd3ewq", kLKAdn: "ui-uve7l6", kwRFfy: "ui-196pc8s", kGO01o: "ui-1rgtt3y", kZCmMZ: "ui-22095l", $$css: true }, readOnlyRow: { kkrTdU: "ui-t0e3qv", $$css: true }, alert: { kB7OPa: "ui-9f619", k1xSpc: "ui-78zum5", kGNEyG: "ui-1cy8zhl", kLKAdn: "ui-1to6kjf", kwRFfy: "ui-1msowdo", kGO01o: "ui-5wifs", kZCmMZ: "ui-ms6hlh", kaIpWk: "ui-1e1y6u3", keoZOQ: "ui-1om1abp", k1K539: "ui-1qaq26d", $$css: true }, alertDefault: { kWkggS: "ui-162gavy", kMwMTN: "ui-9mox06", "--markdown-foreground": "ui-1hortij", $$css: true }, alertWarning: { kWkggS: "ui-1xvwvse", kMwMTN: "ui-1izesbo", "--markdown-foreground": "ui-18g1onh", $$css: true }, alertSerious: { kWkggS: "ui-1xnwcy6", kMwMTN: "ui-1jh5svw", "--markdown-foreground": "ui-riqozk", $$css: true } }, jlp = { alert: gXS };
} });
import { jsx as I0e, jsxs as wXS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as NCa } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as CXS } from "./react-runtime/react/esm-index-production.js";
function TXS(t) {
  const e = NCa(29), { model: n, variant: i, isSelected: r, multiModelMode: s, count: o, itemRef: a, anchorRef: l, isDisabled: c, disabled: u, onSelect: d, searchQuery: h, tooltipMarkdown: p } = t, { closeMenuOnModelSelect: g } = nw();
  let f;
  e[0] !== a ? (f = (A) => {
    a(A instanceof HTMLLIElement ? A : null);
  }, e[0] = a, e[1] = f) : f = e[1];
  const _ = f, b = !s && g, y = `model-item-${n.name}`;
  let S;
  e[2] !== r || e[3] !== s ? (S = s ? I0e(r2e, { checked: r, variant: "neutral" }) : void 0, e[2] = r, e[3] = s, e[4] = S) : S = e[4];
  let k;
  e[5] !== l || e[6] !== o || e[7] !== r || e[8] !== n.name || e[9] !== s ? (k = r ? I0e(Ilp, { modelId: n.name, anchorRef: l, isSelected: r, multiModelMode: s, count: o }) : void 0, e[5] = l, e[6] = o, e[7] = r, e[8] = n.name, e[9] = s, e[10] = k) : k = e[10];
  let C;
  e[11] !== p ? (C = p ? () => I0e(N4, { children: p }) : void 0, e[11] = p, e[12] = C) : C = e[12];
  let T;
  e[13] !== c || e[14] !== n || e[15] !== s || e[16] !== h || e[17] !== i ? (T = I0e(D8r, { model: n, variant: i, multiModelMode: s, isDisabled: c, searchQuery: h }), e[13] = c, e[14] = n, e[15] = s, e[16] = h, e[17] = i, e[18] = T) : T = e[18];
  let I;
  return e[19] !== u || e[20] !== d || e[21] !== _ || e[22] !== b || e[23] !== y || e[24] !== S || e[25] !== k || e[26] !== C || e[27] !== T ? (I = I0e(cl.Item, { ref: _, onSelect: d, disabled: u, closeOnSelect: b, "data-testid": y, leading: S, trailing: k, tooltip: C, children: T }), e[19] = u, e[20] = d, e[21] = _, e[22] = b, e[23] = y, e[24] = S, e[25] = k, e[26] = C, e[27] = T, e[28] = I) : I = e[28], I;
}
function EXS(t) {
  const e = NCa(28), { model: n, variant: i, isSelected: r, multiModelMode: s, count: o, itemRef: a, isDisabled: l, disabled: c, onSelect: u, onOpenOptions: d, searchQuery: h } = t, { closeMenuOnModelSelect: p } = nw(), g = K3();
  let f;
  e[0] !== a ? (f = (A) => {
    a(A instanceof HTMLLIElement ? A : null);
  }, e[0] = a, e[1] = f) : f = e[1];
  const _ = f;
  let b;
  e[2] !== g || e[3] !== d ? (b = (A) => {
    okt(A.key, g) === "end" && d() === false && (A.preventDefault(), A.stopPropagation());
  }, e[2] = g, e[3] = d, e[4] = b) : b = e[4];
  const y = !s && p, S = `model-item-${n.name}`;
  let k;
  e[5] !== r || e[6] !== s ? (k = s ? I0e(r2e, { checked: r, variant: "neutral" }) : void 0, e[5] = r, e[6] = s, e[7] = k) : k = e[7];
  let C;
  e[8] !== o || e[9] !== r || e[10] !== s ? (C = r ? I0e(xlp, { isSelected: r, multiModelMode: s, count: o }) : void 0, e[8] = o, e[9] = r, e[10] = s, e[11] = C) : C = e[11];
  let T;
  e[12] !== l || e[13] !== n || e[14] !== s || e[15] !== h || e[16] !== i ? (T = I0e(D8r, { model: n, variant: i, multiModelMode: s, isDisabled: l, searchQuery: h }), e[12] = l, e[13] = n, e[14] = s, e[15] = h, e[16] = i, e[17] = T) : T = e[17];
  let I;
  return e[18] !== c || e[19] !== u || e[20] !== _ || e[21] !== b || e[22] !== y || e[23] !== S || e[24] !== k || e[25] !== C || e[26] !== T ? (I = I0e(cl.SubMenuItem, { ref: _, onSelect: u, onKeyDown: b, disabled: c, closeOnSelect: y, "data-testid": S, leading: k, trailing: C, showChevron: false, children: T }), e[18] = c, e[19] = u, e[20] = _, e[21] = b, e[22] = y, e[23] = S, e[24] = k, e[25] = C, e[26] = T, e[27] = I) : I = e[27], I;
}
var $lp, 