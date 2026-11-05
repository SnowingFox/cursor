// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ManageTeamMarketplaceMcpFormMenu.js range:17021691..17026942
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.214Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, manage-marketplace-modal.stylex.js, mcpInputToPluginConfig.js, SpinningLoader.js, InputGroup.js, Button.js, Popover.js, +2 more
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, manage-marketplace-modal.stylex.js, mcpInputToPluginConfig.js, SpinningLoader.js, InputGroup.js, Button.js, Popover.js, +2 more
// path-candidate: none (no nls basename match; path inferred, confidence C)
Jpp = L({ "ManageTeamMarketplaceMcpFormMenu.js"() {
  "use strict";
  E(), Va(), R7r(), TEa(), avi(), Nhe(), P0(), N1n(), pB(), QQ(), Qpp = { popover: { kzqmXN: "ui-7ta2uq", ks0D6T: "ui-1lm3k0r", kskxy: "ui-13yopfd", kORKVm: "ui-1odjw0f", kmVPX3: "ui-1717udv", $$css: true } };
} });
import { jsx as gwt, jsxs as U7r, Fragment as IEa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as yn1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as emp, useRef as tmp, useEffect as Sn1 } from "./react-runtime/react/esm-index-production.js";
function kn1(t) {
  const e = yn1(78), { addPluginOpen: n, onAddPluginOpenChange: i, enableTeamMarketplaceMcps: r, isEditMode: s, availableGlobalPlugins: o, isLoadingGlobalPlugins: a, existingPluginIds: l, existingMcpServerNames: c, onParseGitHubUrl: u, onConfirmGlobal: d, onConfirmParsed: h, onAddMcp: p, renderMcpServerForm: g } = t;
  let f;
  e[0] !== r ? (f = () => r ? "type" : "plugins", e[0] = r, e[1] = f) : f = e[1];
  const [_, b] = emp(f), [y, S] = emp(0), k = tmp(null), C = tmp(true);
  let T, I;
  e[2] !== n || e[3] !== r ? (T = () => {
    n || b(r ? "type" : "plugins");
  }, I = [n, r], e[2] = n, e[3] = r, e[4] = T, e[5] = I) : (T = e[4], I = e[5]), Sn1(T, I);
  let A;
  e[6] !== i ? (A = () => {
    i(false);
  }, e[6] = i, e[7] = A) : A = e[7];
  const P = A;
  let M;
  e[8] !== P || e[9] !== d ? (M = (ve) => {
    d(ve), P();
  }, e[8] = P, e[9] = d, e[10] = M) : M = e[10];
  let O;
  e[11] !== P || e[12] !== h ? (O = (ve, fe) => {
    h(ve, fe), P();
  }, e[11] = P, e[12] = h, e[13] = O) : O = e[13];
  let N;
  e[14] !== n || e[15] !== o || e[16] !== P || e[17] !== l || e[18] !== a || e[19] !== u || e[20] !== M || e[21] !== O ? (N = { availableGlobalPlugins: o, isLoadingGlobalPlugins: a, existingPluginIds: l, open: n, onParseGitHubUrl: u, onConfirmGlobal: M, onConfirmParsed: O, onCancel: P }, e[14] = n, e[15] = o, e[16] = P, e[17] = l, e[18] = a, e[19] = u, e[20] = M, e[21] = O, e[22] = N) : N = e[22];
  const U = Lhp(N), j = r ? _ : "plugins", $ = j === "plugins", H = j === "mcpForm";
  let G, q, K, V, Y, J, Q, te, ee;
  if (e[23] !== n || e[24] !== r || e[25] !== s || e[26] !== H || e[27] !== y || e[28] !== i) {
    const ve = () => gwt(An, { ref: k, variant: "primary", tone: "monochrome", size: "lg", disabled: s, children: r ? "Add to Marketplace" : U7r(IEa, { children: [gwt(zt, { name: "plus", size: "base" }), "Add Plugin"] }) });
    q = hn, K = y, V = n && !H, Y = false, e[38] !== H || e[39] !== i ? (J = (fe) => {
      H || i(fe);
    }, e[38] = H, e[39] = i, e[40] = J) : J = e[40], e[41] !== n || e[42] !== H ? (Q = (fe) => {
      !fe && n && !H && S(wn1);
    }, e[41] = n, e[42] = H, e[43] = Q) : Q = e[43], G = hn.Trigger, te = s, ee = ve(), e[23] = n, e[24] = r, e[25] = s, e[26] = H, e[27] = y, e[28] = i, e[29] = G, e[30] = q, e[31] = K, e[32] = V, e[33] = Y, e[34] = J, e[35] = Q, e[36] = te, e[37] = ee;
  } else G = e[29], q = e[30], K = e[31], V = e[32], Y = e[33], J = e[34], Q = e[35], te = e[36], ee = e[37];
  let re;
  e[44] !== G || e[45] !== te || e[46] !== ee ? (re = gwt(G, { disabled: te, children: ee }), e[44] = G, e[45] = te, e[46] = ee, e[47] = re) : re = e[47];
  const ie = $ ? "Add plugins to marketplace" : "Add to marketplace", oe = $ ? 340 : 220, se = $ ? 420 : void 0, le = $ ? U.header : void 0, ce = $ ? U.footer : void 0;
  let ae;
  e[48] !== $ || e[49] !== U ? (ae = $ ? U.body : U7r(IEa, { children: [gwt(hn.Item, { onSelect: (ve) => {
    ve.preventDefault(), b("plugins");
  }, children: "Plugin" }), gwt(hn.Item, { onSelect: (ve) => {
    ve.preventDefault(), C.current = true, b("mcpForm");
  }, children: "MCP Server" })] }), e[48] = $, e[49] = U, e[50] = ae) : ae = e[50];
  let de;
  e[51] !== ie || e[52] !== oe || e[53] !== se || e[54] !== le || e[55] !== ce || e[56] !== ae ? (de = gwt(hn.Content, { "aria-label": ie, placement: "bottom-end", offset: 8, width: oe, maxHeight: se, header: le, footer: ce, children: ae }), e[51] = ie, e[52] = oe, e[53] = se, e[54] = le, e[55] = ce, e[56] = ae, e[57] = de) : de = e[57];
  let he;
  e[58] !== q || e[59] !== K || e[60] !== V || e[61] !== Y || e[62] !== J || e[63] !== Q || e[64] !== re || e[65] !== de ? (he = U7r(q, { open: V, returnFocusOnSelect: Y, onOpenChange: J, onOpenChangeComplete: Q, children: [re, de] }, K), e[58] = q, e[59] = K, e[60] = V, e[61] = Y, e[62] = J, e[63] = Q, e[64] = re, e[65] = de, e[66] = he) : he = e[66];
  let ge;
  e[67] !== n || e[68] !== P || e[69] !== c || e[70] !== H || e[71] !== p || e[72] !== i || e[73] !== g ? (ge = H ? gwt(yA.Root, { modal: true, open: n, onOpenChange: (ve, fe) => {
    C.current = ve ? true : fe.reason !== "outside-press" && fe.reason !== "focus-out", i(ve);
  }, children: gwt(_n1, { existingNames: c, anchor: k, finalFocus: () => C.current ? k.current : false, onSave: (ve) => {
    p(ve), P();
  }, onCancel: P, renderMcpServerForm: g }) }) : null, e[67] = n, e[68] = P, e[69] = c, e[70] = H, e[71] = p, e[72] = i, e[73] = g, e[74] = ge) : ge = e[74];
  let pe;
  return e[75] !== he || e[76] !== ge ? (pe = U7r(IEa, { children: [he, ge] }), e[75] = he, e[76] = ge, e[77] = pe) : pe = e[77], pe;
}
function wn1(t) {
  return t + 1;
}
