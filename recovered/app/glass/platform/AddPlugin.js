// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AddPlugin.js range:23070126..23072195
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.051Z
// wrapper: IQa deps:2 [E, Mt]
// declarations: Stk
// anchors: cursor-ui-ht4xr3, cursor-ui-w7nakj, cursor-ui-1n2onr6, cursor-ui-b3r6kr
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
IQa = L({ "AddPlugin.js"() {
  "use strict";
  E(), Mt(), tqm = 320, nqm = 8, dts = 80, iqm = 120, hts = { popup: { kzqmXN: "cursor-ui-ht4xr3", ks0D6T: "cursor-ui-w7nakj", $$css: true }, confirmButton: { kVAEAm: "cursor-ui-1n2onr6", kVQacm: "cursor-ui-b3r6kr", kHBbk8: "cursor-ui-c8icb0", kMwMTN: "cursor-ui-1nbh50h", kj5Ehs: "cursor-ui-1xv6bh5", kxqIGr: "cursor-ui-1speawj", kdSygX: "cursor-ui-s55268", kgeoSG: "cursor-ui-1cpjm7i", kEoFBp: "cursor-ui-1hmns74", kFcpXp: "cursor-ui-xx281p", kPB484: "cursor-ui-xyica1", kEdqc7: "cursor-ui-gu12d", kcTAPf: "cursor-ui-5porm6", kLkRvE: "cursor-ui-6hr8qo", k5QlbN: "cursor-ui-124lp2h", km8f2m: "cursor-ui-kk1bqk", kSdLuy: "cursor-ui-42zfpc", k7KCAZ: "cursor-ui-1j7sxfd", kKXxxB: "cursor-ui-1790gqu", kqUdNP: "cursor-ui-1jsbol1", kxmVGU: "cursor-ui-2hztxu", $$css: true }, confirmButtonLoading: { kLZC3w: "cursor-ui-1v8p93f", kBCPoo: "cursor-ui-1o3jo1z", kL6WhQ: "cursor-ui-16stqrj", kGJrpR: "cursor-ui-v5lvn5", k5QlbN: "cursor-ui-1obv6hi", $$css: true } }, EQa = dtk(null), rqm = { scope: "user", marketplaceIds: [], installMode: "available" }, Vot = { Root: ptk, Flow: htk, ScopeStep: vtk, ConfigureStep: btk };
} });
import { jsx as sqm } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ytk } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Stk(t) {
  const e = ytk(12), { plugin: n, open: i, defaultOpen: r, onOpenChange: s, portalContainer: o, saveAction: a, initialValues: l, saveContext: c, cancelLabel: u } = t;
  let d;
  e[0] !== u || e[1] !== l || e[2] !== a || e[3] !== c ? (d = sqm(Vot.ConfigureStep, { saveAction: a, initialValues: l, saveContext: c, cancelLabel: u }), e[0] = u, e[1] = l, e[2] = a, e[3] = c, e[4] = d) : d = e[4];
  let h;
  return e[5] !== r || e[6] !== s || e[7] !== i || e[8] !== n || e[9] !== o || e[10] !== d ? (h = sqm(Vot.Root, { plugin: n, open: i, defaultOpen: r, onOpenChange: s, portalContainer: o, defaultStep: "configure", children: d }), e[5] = r, e[6] = s, e[7] = i, e[8] = n, e[9] = o, e[10] = d, e[11] = h) : h = e[11], h;
}
