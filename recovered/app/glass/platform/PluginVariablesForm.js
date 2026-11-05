// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PluginVariablesForm.js range:17043588..17058333
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.162Z
// wrapper: FEa deps:10 [E, Pn1, mf, Lz, H1t, YSt, s2e, Obn, twt, P0]
// declarations: jn1, $n1, Hn1, Wn1, Gn1, qn1, zn1, amp (segment truncated)
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
FEa = L({ "PluginVariablesForm.js"() {
  "use strict";
  E(), Pn1(), mf(), Lz(), H1t(), YSt(), s2e(), Obn(), twt(), P0(), OEa = { descriptionPopover: { kfSwDN: "ui-1hx0egp", $$css: true }, descriptionPopoverPadding: { kLKAdn: "ui-t9g0qb", kwRFfy: "ui-16mtmbo", kGO01o: "ui-20eq2h", kZCmMZ: "ui-7ru5ko", $$css: true } };
} });
import { jsx as SA, jsxs as h6e } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as j7r } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as Bn1, Fragment as Un1 } from "./react-runtime/react/esm-index-production.js";
function jn1(t) {
  return t.gitUrl.trim() === "" && t.mcpServers.length > 0;
}
function $n1(t) {
  const e = j7r(125), { plugins: n, isLoadingPlugins: i, isEditMode: r, stagedRemovals: s, stagedGlobalAdditions: o, stagedParsedAdditions: a, stagedMcpAdditions: l, hasStagedAdditions: c, getPluginStatus: u, onStatusChange: d, onToggleRemoval: h, onRemoveStagedGlobal: p, onRemoveStagedParsed: g, onRemoveStagedMcp: f, configuringPluginId: _, variableSchema: b, variableValues: y, onVariableValuesChange: S, configureError: k, isSavingVariables: C, onStartConfigure: T, onCancelConfigure: I, onSaveConfigure: A, editingMcpConfigPluginId: P, mcpConfigStructuredValue: M, isMcpConfigStructured: O, mcpConfigJson: N, onMcpConfigJsonChange: U, isLoadingMcpConfig: j, mcpConfigError: $, isSavingMcpConfig: H, mcpConfigExistingNames: G, onStartEditMcpConfig: q, onCancelEditMcpConfig: K, onSaveMcpConfigStructured: V, onSaveMcpConfigJson: Y, renderMcpServerForm: J } = t, Q = P === void 0 ? null : P, te = M === void 0 ? null : M, ee = O === void 0 ? false : O, re = N === void 0 ? "" : N, ie = j === void 0 ? false : j, oe = $ === void 0 ? null : $, se = H === void 0 ? false : H;
  let le;
  e[0] !== G ? (le = G === void 0 ? [] : G, e[0] = G, e[1] = le) : le = e[1];
  const ce = le, [ae, de] = Bn1("");
  let he;
  e[2] !== ae ? (he = ae.trim(), e[2] = ae, e[3] = he) : he = e[3];
  const ge = he;
  let pe;
  if (e[4] !== _ || e[5] !== n || e[6] !== ge) {
    e: {
      const ht = l6e(n ?? [], ge);
      if (_ === null || ht.some((Ue) => Ue.id === _)) {
        pe = ht;
        break e;
      }
      let Ae;
      e[8] !== n ? (Ae = n ?? [], e[8] = n, e[9] = Ae) : Ae = e[9];
      let ot;
      if (e[10] !== _ || e[11] !== Ae) {
        let Ue;
        e[13] !== _ ? (Ue = (it) => it.id === _, e[13] = _, e[14] = Ue) : Ue = e[14], ot = Ae.find(Ue), e[10] = _, e[11] = Ae, e[12] = ot;
      } else ot = e[12];
      const Be = ot;
      pe = Be === void 0 ? ht : [Be, ...ht];
    }
    e[4] = _, e[5] = n, e[6] = ge, e[7] = pe;
  } else pe = e[7];
  const ve = pe;
  let fe;
  e[15] !== ge || e[16] !== o ? (fe = l6e(o, ge), e[15] = ge, e[16] = o, e[17] = fe) : fe = e[17];
  const Te = fe;
  let _e;
  if (e[18] !== ge || e[19] !== a) {
    let ht;
    e[21] !== ge ? (ht = (Ae) => ({ ...Ae, entries: Ae.entries.filter((ot) => fhp([ot.displayName, ot.name], ge)) }), e[21] = ge, e[22] = ht) : ht = e[22], _e = a.map(ht), e[18] = ge, e[19] = a, e[20] = _e;
  } else _e = e[20];
  const Ce = _e;
  let Se;
  if (e[23] !== ge || e[24] !== l) {
    let ht;
    e[26] !== ge ? (ht = (Ae) => fhp([Ae.input.name], ge), e[26] = ge, e[27] = ht) : ht = e[27], Se = l.filter(ht), e[23] = ge, e[24] = l, e[25] = Se;
  } else Se = e[25];
  const Pe = Se;
  if (i) {
    let ht;
    return e[28] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ht = SA("div", { className: "ui-78zum5 ui-6s0dn4 ui-l56j7k ui-1miatn0 ui-1xpa7k ui-1gan7if ui-1uhho1l ui-19aaqeu", children: SA(pwt, { size: 20 }) }), e[28] = ht) : ht = e[28], ht;
  }
  if (!(n && n.length > 0 || c)) {
    let ht;
    return e[29] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ht = h6e("div", { className: "ui-78zum5 ui-dt5ytf ui-6s0dn4 ui-l56j7k ui-1p5oq8j ui-8e5d8q ui-wxc41k ui-d3ty66 ui-2b8uid ui-4pepcl ui-cxb6k5 ui-h8yej3 ui-1jnr06f", children: [SA("span", { className: "ui-fc7y3v ui-1wd3ewq", children: "No plugins found" }), SA("span", { className: "ui-fc7y3v ui-19aaqeu", children: "Add plugins or import from GitHub to make them available for your team." })] }), e[29] = ht) : ht = e[29], ht;
  }
  let we;
  e[30] !== Q || e[31] !== n ? (we = (n ?? []).find((ht) => ht.id === Q) ?? null, e[30] = Q, e[31] = n, e[32] = we) : we = e[32];
  const Ie = we;
  let Me;
  e[33] !== ve.length || e[34] !== Te.length || e[35] !== Pe.length || e[36] !== Ce ? (Me = ve.length > 0 || Te.length > 0 || Ce.some(Hn1) || Pe.length > 0, e[33] = ve.length, e[34] = Te.length, e[35] = Pe.length, e[36] = Ce, e[37] = Me) : Me = e[37];
  const De = Me;
  let Ne;
  e[38] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ne = gn(uEa), e[38] = Ne) : Ne = e[38];
  let be;
  e[39] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (be = SA(_d.Icon, { name: "search", color: "secondary" }), e[39] = be) : be = e[39];
  let je;
  e[40] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (je = (ht) => de(ht.target.value), e[40] = je) : je = e[40];
  let $e;
  e[41] !== ae ? ($e = (ht) => {
    ht.key === "Escape" && ae !== "" && (ht.stopPropagation(), de(""));
  }, e[41] = ae, e[42] = $e) : $e = e[42];
  let Je;
  e[43] !== ae || e[44] !== $e ? (Je = SA(_d.Input, { type: "text", "aria-label": "Search plugins", placeholder: "Search plugins", autoComplete: "off", spellCheck: false, value: ae, onChange: je, onKeyDown: $e }), e[43] = ae, e[44] = $e, e[45] = Je) : Je = e[45];
  let Ge;
  e[46] !== ae ? (Ge = ae !== "" && SA(_d.IconButton, { icon: "x", "aria-label": "Clear search", onClick: () => de("") }), e[46] = ae, e[47] = Ge) : Ge = e[47];
  let xe;
  e[48] !== Je || e[49] !== Ge ? (xe = SA("div", { className: "ui-78zum5 ui-6s0dn4 ui-1yrsyyn ui-cicffo ui-10b6aqq ui-1lqa7cf ui-so031l ui-1q0q8m5 ui-17fyfba", children: h6e(_d, { size: "md", variant: "unfilled", children: [be, Je, Ge] }) }), e[48] = Je, e[49] = Ge, e[50] = xe) : xe = e[50];
  let Oe;
  e[51] !== De ? (Oe = !De && h6e("div", { className: "ui-78zum5 ui-dt5ytf ui-6s0dn4 ui-l56j7k ui-1jnr06f ui-1p5oq8j ui-8e5d8q ui-wxc41k ui-d3ty66 ui-2b8uid", children: [SA("span", { className: "ui-11wthnw ui-1wd3ewq", children: "No matching plugins" }), SA("span", { className: "ui-11wthnw ui-19aaqeu", children: "Try a different search." })] }), e[51] = De, e[52] = Oe) : Oe = e[52];
  let ct;
  if (e[53] !== k || e[54] !== _ || e[55] !== u || e[56] !== r || e[57] !== C || e[58] !== I || e[59] !== A || e[60] !== T || e[61] !== q || e[62] !== d || e[63] !== h || e[64] !== S || e[65] !== s || e[66] !== b || e[67] !== y || e[68] !== ve) {
    let ht;
    e[70] !== k || e[71] !== _ || e[72] !== u || e[73] !== r || e[74] !== C || e[75] !== I || e[76] !== A || e[77] !== T || e[78] !== q || e[79] !== d || e[80] !== h || e[81] !== S || e[82] !== s || e[83] !== b || e[84] !== y ? (ht = (Ae) => {
      const ot = s.has(Ae.id), Ue = _ === Ae.id && b !== null ? SA(zn1, { schema: b, values: y, onChange: S, error: k, isSaving: C, onCancel: I, onSave: A }) : void 0;
      return SA(Un1, { children: SA(d6e, { className: ot ? "ui-ti2d7y" : void 0, leadingIcon: W7($$t(Ae)), capabilities: Ae.capabilities ?? [], label: Ae.displayName || Ae.name, description: vvi[u(Ae.id)], trailingItems: r || ot ? SA(qn1, { marked: ot, onToggle: () => h(Ae.id) }) : SA(Wn1, { plugin: Ae, currentStatus: u(Ae.id), onStatusChange: (it) => d(Ae.id, it), onConfigure: () => T(Ae), onEditMcpConfig: q !== void 0 && jn1(Ae) ? () => q(Ae) : void 0, onToggleRemoval: () => h(Ae.id) }), fullWidthFooter: Ue }) }, Ae.id);
    }, e[70] = k, e[71] = _, e[72] = u, e[73] = r, e[74] = C, e[75] = I, e[76] = A, e[77] = T, e[78] = q, e[79] = d, e[80] = h, e[81] = S, e[82] = s, e[83] = b, e[84] = y, e[85] = ht) : ht = e[85], ct = ve.map(ht), e[53] = k, e[54] = _, e[55] = u, e[56] = r, e[57] = C, e[58] = I, e[59] = A, e[60] = T, e[61] = q, e[62] = d, e[63] = h, e[64] = S, e[65] = s, e[66] = b, e[67] = y, e[68] = ve, e[69] = ct;
  } else ct = e[69];
  let Ye;
  if (e[86] !== p || e[87] !== Te) {
    let ht;
    e[89] !== p ? (ht = (Ae) => SA(d6e, { leadingIcon: W7($$t(Ae)), capabilities: Ae.capabilities ?? [], label: Ae.displayName || Ae.name, description: vvi.available, trailingItems: SA(ho, { icon: "trash", size: "md", iconSize: "base", variant: "ghost", tone: "danger", "aria-label": "Remove staged plugin", onClick: () => p(Ae.id) }) }, `staged-global-${Ae.id}`), e[89] = p, e[90] = ht) : ht = e[90], Ye = Te.map(ht), e[86] = p, e[87] = Te, e[88] = Ye;
  } else Ye = e[88];
  let Ve;
  if (e[91] !== g || e[92] !== Ce) {
    let ht;
    e[94] !== g ? (ht = (Ae, ot) => Ae.entries.map((Be) => SA(d6e, { leadingIcon: W7($$t(Be)), label: Be.displayName || Be.name, description: vvi.available, trailingItems: SA(ho, { icon: "trash", size: "md", iconSize: "base", variant: "ghost", tone: "danger", "aria-label": "Remove staged plugin", onClick: () => g(ot, Be.name) }) }, `staged-parsed-${Ae.result.marketplaceName}-${Be.name}`)), e[94] = g, e[95] = ht) : ht = e[95], Ve = Ce.flatMap(ht), e[91] = g, e[92] = Ce, e[93] = Ve;
  } else Ve = e[93];
  let Xe;
  if (e[96] !== f || e[97] !== Pe) {
    let ht;
    e[99] !== f ? (ht = (Ae) => SA(d6e, { leadingIcon: W7($$t({ name: Ae.input.name })), label: Ae.input.name, description: Ae.input.type === "STDIO" ? `MCP · ${Ae.input.command}` : `MCP · ${Ae.input.url}`, trailingItems: SA(ho, { icon: "trash", size: "md", iconSize: "base", variant: "ghost", tone: "danger", "aria-label": "Remove staged MCP server", onClick: () => f(Ae.id) }) }, `staged-mcp-${Ae.id}`), e[99] = f, e[100] = ht) : ht = e[100], Xe = Pe.map(ht), e[96] = f, e[97] = Pe, e[98] = Xe;
  } else Xe = e[98];
  let lt;
  e[101] !== ct || e[102] !== Ye || e[103] !== Ve || e[104] !== Xe ? (lt = h6e(xg, { maxHeight: "25vh", viewportClassName: "hide-scrollbar", children: [ct, Ye, Ve, Xe] }), e[101] = ct, e[102] = Ye, e[103] = Ve, e[104] = Xe, e[105] = lt) : lt = e[105];
  let He;
  e[106] !== Ie || e[107] !== ie || e[108] !== ee || e[109] !== se || e[110] !== oe || e[111] !== ce || e[112] !== re || e[113] !== te || e[114] !== K || e[115] !== U || e[116] !== Y || e[117] !== V || e[118] !== J ? (He = Ie !== null && K !== void 0 && SA(bn1, { title: `Edit MCP Server · ${Ie.displayName || Ie.name}`, initialValue: te, existingNames: ce, isLoading: ie, isSaving: se, errorMessage: oe, jsonValue: !ee && re !== "" ? re : null, onJsonChange: U, onSaveJson: Y, onSave: (ht) => V?.(ht), onCancel: K, renderMcpServerForm: J }), e[106] = Ie, e[107] = ie, e[108] = ee, e[109] = se, e[110] = oe, e[111] = ce, e[112] = re, e[113] = te, e[114] = K, e[115] = U, e[116] = Y, e[117] = V, e[118] = J, e[119] = He) : He = e[119];
  let gt;
  return e[120] !== xe || e[121] !== Oe || e[122] !== lt || e[123] !== He ? (gt = h6e("div", { ...Ne, children: [xe, Oe, lt, He] }), e[120] = xe, e[121] = Oe, e[122] = lt, e[123] = He, e[124] = gt) : gt = e[124], gt;
}
function Hn1(t) {
  return t.entries.length > 0;
}
function Wn1(t) {
  const e = j7r(24), { plugin: n, currentStatus: i, onStatusChange: r, onConfigure: s, onEditMcpConfig: o, onToggleRemoval: a } = t;
  let l;
  e[0] !== n ? (l = Svi(n), e[0] = n, e[1] = l) : l = e[1];
  const c = l !== void 0;
  let u;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = SA(hn.Trigger, { children: SA(ho, { icon: "kebab-horizontal", size: "md", iconSize: "base", variant: "ghost", "aria-label": "Plugin options" }) }), e[2] = u) : u = e[2];
  const d = `${n.displayName || n.name} options`;
  let h;
  e[3] !== r ? (h = (k) => r(k), e[3] = r, e[4] = h) : h = e[4];
  let p;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (p = amp.map(Gn1), e[5] = p) : p = e[5];
  let g;
  e[6] !== i || e[7] !== h ? (g = SA(hn.Section, { title: "Team Access", children: SA(hn.RadioGroup, { "aria-label": "Team Access", value: i, onValueChange: h, children: p }) }), e[6] = i, e[7] = h, e[8] = g) : g = e[8];
  let f;
  e[9] !== c || e[10] !== s ? (f = c && SA(hn.Item, { onSelect: s, children: "Configure" }), e[9] = c, e[10] = s, e[11] = f) : f = e[11];
  let _;
  e[12] !== o ? (_ = o !== void 0 && SA(hn.Item, { onSelect: o, children: "Edit MCP config" }), e[12] = o, e[13] = _) : _ = e[13];
  let b;
  e[14] !== a ? (b = SA(hn.Item, { onSelect: a, children: "Remove" }), e[14] = a, e[15] = b) : b = e[15];
  let y;
  e[16] !== f || e[17] !== _ || e[18] !== b ? (y = h6e(hn.Section, { title: "Plugin Settings", children: [f, _, b] }), e[16] = f, e[17] = _, e[18] = b, e[19] = y) : y = e[19];
  let S;
  return e[20] !== y || e[21] !== d || e[22] !== g ? (S = h6e(hn, { children: [u, h6e(hn.Content, { "aria-label": d, children: [g, y] })] }), e[20] = y, e[21] = d, e[22] = g, e[23] = S) : S = e[23], S;
}
function Gn1(t) {
  return SA(hn.RadioItem, { value: t, closeOnSelect: true, children: vvi[t] }, t);
}
function qn1(t) {
  const e = j7r(7), { marked: n, onToggle: i } = t, r = n ? "arrow-u-up-left" : "trash", s = n ? "secondary" : "danger", o = n ? "Undo remove" : "Remove plugin";
  let a;
  e[0] !== i ? (a = (c) => {
    c.stopPropagation(), i();
  }, e[0] = i, e[1] = a) : a = e[1];
  let l;
  return e[2] !== r || e[3] !== s || e[4] !== o || e[5] !== a ? (l = SA(ho, { icon: r, size: "md", iconSize: "base", variant: "ghost", tone: s, "aria-label": o, onClick: a }), e[2] = r, e[3] = s, e[4] = o, e[5] = a, e[6] = l) : l = e[6], l;
}
function zn1(t) {
  const e = j7r(22), { schema: n, values: i, onChange: r, error: s, isSaving: o, onCancel: a, onSave: l } = t;
  let c;
  e[0] !== r || e[1] !== n || e[2] !== i ? (c = SA(LEa, { schema: n, values: i, onChange: r }), e[0] = r, e[1] = n, e[2] = i, e[3] = c) : c = e[3];
  let u;
  e[4] !== s ? (u = s !== null && SA("p", { ...gn(own), children: s }), e[4] = s, e[5] = u) : u = e[5];
  let d;
  e[6] !== o || e[7] !== a ? (d = SA(An, { variant: "text", size: "md", onClick: a, disabled: o, children: "Cancel" }), e[6] = o, e[7] = a, e[8] = d) : d = e[8];
  let h;
  e[9] !== o ? (h = o ? h6e("span", { ...gn(uvi), children: [SA(pwt, { size: 12 }), "Saving..."] }) : "Save", e[9] = o, e[10] = h) : h = e[10];
  let p;
  e[11] !== o || e[12] !== l || e[13] !== h ? (p = SA(An, { variant: "primary", tone: "monochrome", size: "md", onClick: l, disabled: o, children: h }), e[11] = o, e[12] = l, e[13] = h, e[14] = p) : p = e[14];
  let g;
  e[15] !== d || e[16] !== p ? (g = h6e("div", { className: "ui-78zum5 ui-13a6bvl ui-167g77z", children: [d, p] }), e[15] = d, e[16] = p, e[17] = g) : g = e[17];
  let f;
  return e[18] !== c || e[19] !== u || e[20] !== g ? (f = h6e("div", { className: "ui-78zum5 ui-dt5ytf ui-1v2ro7d ui-1iorvi4 ui-1xpa7k ui-jkvuk6 ui-1uhho1l", children: [c, u, g] }), e[18] = c, e[19] = u, e[20] = g, e[21] = f) : f = e[21], f;
}
var amp,
