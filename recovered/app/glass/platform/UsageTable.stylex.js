// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: UsageTable.stylex.js range:22856014..22886856
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.199Z
// wrapper: $Q1 deps:1 [E]
// declarations: HQ1, WQ1, GQ1, qQ1, zQ1, VQ1, KQ1, YQ1, XQ1, ZQ1, QQ1, JQ1, eJ1, tJ1, nJ1, iJ1 (segment truncated)
// anchors: (none)
// group: usage-billing
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
$Q1 = L({ "UsageTable.stylex.js"() {
  "use strict";
  E(), PWm = { "cursor-ui-rnv2eo": "cursor-ui-rnv2eo", $$css: true };
} });
import { jsxs as aG, jsx as rS, Fragment as WZa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as CIn } from "./react-runtime/react/esm-compiler-runtime-production.js";
function HQ1(t, e) {
  if (t === void 0 && e === void 0) return;
  const n = t ?? 0, i = e ?? 0, r = n + i;
  if (!(r <= 0)) return i / r;
}
function WQ1(t) {
  const e = CIn(4), { dateRange: n, onDateRangeChange: i } = t;
  let r;
  if (e[0] !== n || e[1] !== i) {
    const s = { className: "cursor-ui-78zum5 cursor-ui-1q0g3np cursor-ui-1a02dak cursor-ui-6s0dn4 cursor-ui-13a6bvl cursor-ui-1jlwbde cursor-ui-exx8yu cursor-ui-1xpa7k cursor-ui-18d9i69 cursor-ui-1uhho1l cursor-ui-dj266r cursor-ui-1yf7rl7 cursor-ui-at24cr cursor-ui-j3b58b cursor-ui-972fbf cursor-ui-gfja2r cursor-ui-1qhh985 cursor-ui-yj58a3 cursor-ui-1ejq31n cursor-ui-11pwa6s cursor-ui-1sy0etr cursor-ui-1b16gh4" }, o = { className: "cursor-ui-10l6tqk cursor-ui-1i1rx1s cursor-ui-jm9jq1 cursor-ui-exx8yu cursor-ui-1xpa7k cursor-ui-18d9i69 cursor-ui-1uhho1l cursor-ui-1y332i5 cursor-ui-1y7amh cursor-ui-1jyxor1 cursor-ui-h9i6ac cursor-ui-6ikm8r cursor-ui-10wlt62 cursor-ui-zpqnlu cursor-ui-uxw1ft cursor-ui-972fbf cursor-ui-gfja2r cursor-ui-1qhh985 cursor-ui-yj58a3 cursor-ui-1ejq31n cursor-ui-11pwa6s cursor-ui-1sy0etr cursor-ui-1b16gh4" }, a = { className: "cursor-ui-15bjb6t cursor-ui-1t35e8 cursor-ui-jb2p0i cursor-ui-j3b58b cursor-ui-at24cr cursor-ui-1yf7rl7 cursor-ui-dj266r cursor-ui-1uhho1l cursor-ui-1xpa7k cursor-ui-1b16gh4 cursor-ui-1sy0etr cursor-ui-11pwa6s cursor-ui-1ejq31n cursor-ui-yj58a3 cursor-ui-1qhh985 cursor-ui-gfja2r cursor-ui-972fbf cursor-ui-jbqb8w cursor-ui-1lugfcp cursor-ui-jyslct cursor-ui-493x5y cursor-ui-b6dno7 cursor-ui-1dordt6 cursor-ui-1meac5u cursor-ui-f8eauk cursor-ui-1wm8ruf cursor-ui-1pd3egz cursor-ui-hzi931 cursor-ui-1ypdohk cursor-ui-t3l3uh cursor-ui-7pq1vu cursor-ui-6ekqhr cursor-ui-1k57tk5 cursor-ui-4xl6zf cursor-ui-1t137rt cursor-ui-9v5kkp cursor-ui-1uczgqu cursor-ui-8w47nc cursor-ui-1wfwxd8 cursor-ui-y9f4xx" };
    let l;
    e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = rS("legend", { className: ri("ui-usage-table__tabs-label", o.className), style: o.style, children: "Date range" }), e[3] = l) : l = e[3], r = aG("fieldset", { className: ri("ui-usage-table__tabs", s.className), style: s.style, children: [l, LWm.map((c) => rS("button", { type: "button", className: ri("ui-usage-table__tab", a.className), style: a.style, "data-selected": n === c.value ? "" : void 0, onClick: () => i(c.value), children: c.label }, c.value))] }), e[0] = n, e[1] = i, e[2] = r;
  } else r = e[2];
  return r;
}
function GQ1(t) {
  const e = CIn(124), { title: n, titleAccessory: i, rows: r, showRank: s, showCreatorColumn: o, showUsageIcon: a, usageTooltip: l, rankOffset: c, dateRange: u, onDateRangeChange: d, isLoading: h, emptyMessage: p, pageNumber: g, hasMore: f, totalRows: _, onPagePrev: b, onPageNext: y, pageSize: S, onPageSizeChange: k } = t, C = s === void 0 ? true : s, T = o === void 0 ? false : o, I = a === void 0 ? false : a, A = c === void 0 ? 0 : c, P = h === void 0 ? false : h, M = p === void 0 ? "No usage data" : p, O = g === void 0 ? 1 : g, N = f === void 0 ? false : f, U = S === void 0 ? 5 : S, j = u !== void 0 && d !== void 0, $ = b !== void 0 && y !== void 0, H = k !== void 0, G = $ || H, q = r.length === 0 ? 0 : A + 1, K = r.length === 0 ? 0 : A + r.length;
  let V;
  e[0] !== N || e[1] !== _ || e[2] !== K ? (V = _ !== void 0 ? _.toString() : N ? `${K + 1}+` : K.toString(), e[0] = N, e[1] = _, e[2] = K, e[3] = V) : V = e[3];
  const Y = V;
  let J;
  e[4] !== r ? (J = r.some(KQ1), e[4] = r, e[5] = J) : J = e[5];
  const Q = J;
  let te;
  e[6] !== Q || e[7] !== r ? (te = Q || r.some(VQ1), e[6] = Q, e[7] = r, e[8] = te) : te = e[8];
  const ee = te;
  let re;
  e[9] !== r ? (re = r.some(zQ1), e[9] = r, e[10] = re) : re = e[10];
  const ie = re;
  let oe;
  e[11] !== r ? (oe = r.some(qQ1), e[11] = r, e[12] = oe) : oe = e[12];
  const se = oe, le = !P && r.length === 0, ce = (C ? 1 : 0) + 1 + (T ? 1 : 0) + 1 + (ie ? 1 : 0) + (ee ? 1 : 0), ae = le ? 0 : Math.max(0, U - r.length);
  let de;
  if (e[13] !== P || e[14] !== ae || e[15] !== A || e[16] !== r.length) {
    let xe;
    e[18] !== P || e[19] !== A || e[20] !== r.length ? (xe = (Oe, ct) => {
      const Ye = A + r.length + ct + 1;
      return { key: `${P ? "loading" : "empty"}-${Ye}`, label: P ? "Loading..." : "—", rank: P ? Ye : void 0 };
    }, e[18] = P, e[19] = A, e[20] = r.length, e[21] = xe) : xe = e[21], de = Array.from({ length: ae }, xe), e[13] = P, e[14] = ae, e[15] = A, e[16] = r.length, e[17] = de;
  } else de = e[17];
  const he = de, ge = n != null || i != null, pe = ge || j;
  let ve, fe, Te, _e, Ce, Se, Pe, we, Ie, Me, De, Ne;
  if (e[22] !== ce || e[23] !== u || e[24] !== M || e[25] !== se || e[26] !== Q || e[27] !== P || e[28] !== d || e[29] !== he || e[30] !== A || e[31] !== r || e[32] !== ee || e[33] !== T || e[34] !== j || e[35] !== le || e[36] !== pe || e[37] !== ie || e[38] !== C || e[39] !== ge || e[40] !== I || e[41] !== n || e[42] !== i || e[43] !== l) {
    const xe = { className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-11twubx cursor-ui-h8yej3 cursor-ui-euugli" }, Oe = { className: "cursor-ui-78zum5 cursor-ui-1q0g3np cursor-ui-6s0dn4 cursor-ui-1qughib cursor-ui-1jlwbde cursor-ui-exx8yu cursor-ui-1yxiud8 cursor-ui-18d9i69 cursor-ui-yab65l cursor-ui-8kmwxx" }, ct = { className: "cursor-ui-3nfvp2 cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-dl72j9 cursor-ui-1q0g3np cursor-ui-1a02dak cursor-ui-6s0dn4 cursor-ui-ehausa cursor-ui-euugli" }, Ye = { className: "cursor-ui-dj266r cursor-ui-1yf7rl7 cursor-ui-at24cr cursor-ui-j3b58b" }, Ve = { className: "cursor-ui-h8yej3 cursor-ui-euugli cursor-ui-193iq5w cursor-ui-w2csxc cursor-ui-10wlt62 cursor-ui-12h1iku cursor-ui-1597r2g cursor-ui-4o0cs4 cursor-ui-45edv5 cursor-ui-122zoth cursor-ui-5xjfoy cursor-ui-slcx10 cursor-ui-nbssts" }, Xe = { className: "cursor-ui-h8yej3 cursor-ui-gqtt45 cursor-ui-193iq5w cursor-ui-1vathgz cursor-ui-17efq8h cursor-ui-140o2bo" }, lt = { className: "cursor-ui-s5h3dt" }, He = { className: "cursor-ui-14atkfc" }, gt = { className: "cursor-ui-16s0kzc cursor-ui-1fohrsg" }, ht = { className: "cursor-ui-1fu8urw" }, Ae = { className: "cursor-ui-1oysuqx cursor-ui-1e3eesr cursor-ui-17h7dkw" }, ot = { 0: { className: "cursor-ui-1td3qas" }, 1: { className: "cursor-ui-1dmp6jm" } }[!!Q << 0], Be = { className: "cursor-ui-13ly8rp cursor-ui-1qg3m7i cursor-ui-1xlntvz cursor-ui-v0g687 cursor-ui-xymvpz cursor-ui-1dordt6 cursor-ui-1wm8ruf cursor-ui-2b8uid" };
    Me = ri("ui-usage-table", xe.className), De = xe.style, Ne = pe ? aG("div", { className: ri("ui-usage-table__header", Oe.className), style: Oe.style, children: [ge ? aG("div", { className: ri("ui-usage-table__title-group", ct.className), style: ct.style, children: [n != null ? rS(nn, { size: "md", weight: "medium", className: ri("ui-usage-table__title", Ye.className), style: Ye.style, as: "h3", children: n }) : null, i] }) : null, j ? rS(WQ1, { dateRange: u, onDateRangeChange: d }) : null] }) : null, we = ri("ui-usage-table__table-shell", Ve.className), Ie = Ve.style, _e = ri("ui-usage-table__table", Xe.className), Ce = Xe.style, Se = T ? "" : void 0;
    const Ue = C ? rS("col", { className: ri("ui-usage-table__rank-col", lt.className), style: lt.style }) : null;
    let it;
    e[56] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (it = rS("col", { className: ri("ui-usage-table__name-col", He.className), style: He.style }), e[56] = it) : it = e[56];
    const qe = T ? rS("col", { className: ri("ui-usage-table__creator-col", gt.className), style: gt.style }) : null;
    let pt;
    e[57] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (pt = rS("col", { className: ri("ui-usage-table__usage-col", ht.className), style: ht.style }), e[57] = pt) : pt = e[57];
    const dt = ie ? rS("col", { className: ri("ui-usage-table__agent-share-col", Ae.className), style: Ae.style }) : null, ft = ee ? rS("col", { className: ri("ui-usage-table__action-col", ot.className), style: ot.style }) : null;
    if (e[58] !== Ue || e[59] !== qe || e[60] !== dt || e[61] !== ft ? (Pe = aG("colgroup", { children: [Ue, it, qe, pt, dt, ft] }), e[58] = Ue, e[59] = qe, e[60] = dt, e[61] = ft, e[62] = Pe) : Pe = e[62], e[63] !== se || e[64] !== A || e[65] !== r || e[66] !== ee || e[67] !== T || e[68] !== ie || e[69] !== C || e[70] !== I || e[71] !== l) {
      let bt;
      e[73] !== se || e[74] !== A || e[75] !== ee || e[76] !== T || e[77] !== ie || e[78] !== C || e[79] !== I || e[80] !== l ? (bt = (St, Et) => rS(JQ1, { row: St, rank: C ? A + Et + 1 : void 0, showRank: C, creatorCell: T ? rS(nJ1, { creator: St.creator, visual: St.creatorVisual }) : void 0, showInvocationColumns: ie, showActionColumn: ee, showUsageIcon: I, usageTooltip: l, hasDescription: se }, St.id), e[73] = se, e[74] = A, e[75] = ee, e[76] = T, e[77] = ie, e[78] = C, e[79] = I, e[80] = l, e[81] = bt) : bt = e[81], ve = r.map(bt), e[63] = se, e[64] = A, e[65] = r, e[66] = ee, e[67] = T, e[68] = ie, e[69] = C, e[70] = I, e[71] = l, e[72] = ve;
    } else ve = e[72];
    e[82] !== se || e[83] !== Q || e[84] !== P || e[85] !== he || e[86] !== ee || e[87] !== T || e[88] !== ie || e[89] !== C ? (fe = he.map((bt) => rS(ZQ1, { label: bt.label, rank: bt.rank, loading: P, showRank: C, hasDescription: se, showCreatorColumn: T, showInvocationColumns: ie, showActionColumn: ee, compactActionColumn: !Q }, bt.key)), e[82] = se, e[83] = Q, e[84] = P, e[85] = he, e[86] = ee, e[87] = T, e[88] = ie, e[89] = C, e[90] = fe) : fe = e[90], Te = le ? rS("tr", { children: rS("td", { className: ri("ui-usage-table__empty", Be.className), style: Be.style, colSpan: ce, children: M }) }) : null, e[22] = ce, e[23] = u, e[24] = M, e[25] = se, e[26] = Q, e[27] = P, e[28] = d, e[29] = he, e[30] = A, e[31] = r, e[32] = ee, e[33] = T, e[34] = j, e[35] = le, e[36] = pe, e[37] = ie, e[38] = C, e[39] = ge, e[40] = I, e[41] = n, e[42] = i, e[43] = l, e[44] = ve, e[45] = fe, e[46] = Te, e[47] = _e, e[48] = Ce, e[49] = Se, e[50] = Pe, e[51] = we, e[52] = Ie, e[53] = Me, e[54] = De, e[55] = Ne;
  } else ve = e[44], fe = e[45], Te = e[46], _e = e[47], Ce = e[48], Se = e[49], Pe = e[50], we = e[51], Ie = e[52], Me = e[53], De = e[54], Ne = e[55];
  let be;
  e[91] !== ve || e[92] !== fe || e[93] !== Te ? (be = aG("tbody", { children: [ve, fe, Te] }), e[91] = ve, e[92] = fe, e[93] = Te, e[94] = be) : be = e[94];
  let je;
  e[95] !== _e || e[96] !== Ce || e[97] !== Se || e[98] !== Pe || e[99] !== be ? (je = aG("table", { className: _e, style: Ce, "data-creator-column": Se, children: [Pe, be] }), e[95] = _e, e[96] = Ce, e[97] = Se, e[98] = Pe, e[99] = be, e[100] = je) : je = e[100];
  let $e;
  e[101] !== we || e[102] !== Ie || e[103] !== je ? ($e = rS("div", { className: we, style: Ie, children: je }), e[101] = we, e[102] = Ie, e[103] = je, e[104] = $e) : $e = e[104];
  let Je;
  e[105] !== N || e[106] !== y || e[107] !== b || e[108] !== k || e[109] !== O || e[110] !== U || e[111] !== G || e[112] !== H || e[113] !== $ || e[114] !== Y || e[115] !== K || e[116] !== q ? (Je = G ? rS(YQ1, { showPageSize: H, showPagination: $, pageSize: U, onPageSizeChange: k, visibleStart: q, visibleEnd: K, totalLabel: Y, pageNumber: O, hasMore: N, onPagePrev: b, onPageNext: y }) : null, e[105] = N, e[106] = y, e[107] = b, e[108] = k, e[109] = O, e[110] = U, e[111] = G, e[112] = H, e[113] = $, e[114] = Y, e[115] = K, e[116] = q, e[117] = Je) : Je = e[117];
  let Ge;
  return e[118] !== Me || e[119] !== De || e[120] !== Ne || e[121] !== $e || e[122] !== Je ? (Ge = aG("div", { className: Me, style: De, children: [Ne, $e, Je] }), e[118] = Me, e[119] = De, e[120] = Ne, e[121] = $e, e[122] = Je, e[123] = Ge) : Ge = e[123], Ge;
}
function qQ1(t) {
  return t.description != null;
}
function zQ1(t) {
  return t.humanCount !== void 0;
}
function VQ1(t) {
  return t.onRowClick !== void 0;
}
function KQ1(t) {
  return t.action !== void 0;
}
function YQ1(t) {
  const e = CIn(20), { showPageSize: n, showPagination: i, pageSize: r, onPageSizeChange: s, visibleStart: o, visibleEnd: a, totalLabel: l, pageNumber: c, hasMore: u, onPagePrev: d, onPageNext: h } = t;
  let p, g, f, _;
  if (e[0] !== u || e[1] !== h || e[2] !== d || e[3] !== s || e[4] !== c || e[5] !== r || e[6] !== n || e[7] !== i || e[8] !== l || e[9] !== a || e[10] !== o) {
    const y = { className: "cursor-ui-78zum5 cursor-ui-1q0g3np cursor-ui-6s0dn4 cursor-ui-13a6bvl cursor-ui-pkkfsy cursor-ui-13ly8rp cursor-ui-17v7654 cursor-ui-18d9i69 cursor-ui-yab65l" }, S = { className: "cursor-ui-3nfvp2 cursor-ui-1q0g3np cursor-ui-6s0dn4 cursor-ui-ehausa" }, k = { className: "cursor-ui-78zum5 cursor-ui-1q0g3np cursor-ui-6s0dn4 cursor-ui-ehausa" }, C = { className: "cursor-ui-1wm8ruf cursor-ui-1e4uaio cursor-ui-ss6m8b" };
    p = ri("ui-usage-table__footer", y.className), g = y.style, f = n ? aG("div", { className: ri("ui-usage-table__page-size", S.className), style: S.style, children: [rS(nn, { size: "sm", color: "quaternary", children: "Rows per page" }), rS(b1, { value: r, onValueChange: (T) => {
      T !== null && s?.(T);
    }, options: OWm.map(XQ1), size: "md", menuSize: "sm", hug: true, "aria-label": "Rows per page" })] }) : null, _ = i ? aG("div", { className: ri("ui-usage-table__pagination", k.className), style: k.style, children: [aG("span", { className: ri("ui-usage-table__page-indicator", C.className), style: C.style, "aria-current": "page", children: [o, "-", a, " of ", l] }), rS(ho, { icon: "chevron-left", size: "sm", variant: "ghost", tone: "tertiary", disabled: c <= 1, onClick: d, "aria-label": "Previous page" }), rS(ho, { icon: "chevron-right", size: "sm", variant: "ghost", tone: "tertiary", disabled: !u, onClick: h, "aria-label": "Next page" })] }) : null, e[0] = u, e[1] = h, e[2] = d, e[3] = s, e[4] = c, e[5] = r, e[6] = n, e[7] = i, e[8] = l, e[9] = a, e[10] = o, e[11] = p, e[12] = g, e[13] = f, e[14] = _;
  } else p = e[11], g = e[12], f = e[13], _ = e[14];
  let b;
  return e[15] !== p || e[16] !== g || e[17] !== f || e[18] !== _ ? (b = aG("div", { className: p, style: g, children: [f, _] }), e[15] = p, e[16] = g, e[17] = f, e[18] = _, e[19] = b) : b = e[19], b;
}
function XQ1(t) {
  return { value: t.value, label: t.label };
}
function ZQ1(t) {
  const e = CIn(20), { label: n, rank: i, loading: r, showRank: s, hasDescription: o, showCreatorColumn: a, showInvocationColumns: l, showActionColumn: c, compactActionColumn: u } = t, d = QQ1;
  let h;
  if (e[0] !== u || e[1] !== o || e[2] !== n || e[3] !== r || e[4] !== i || e[5] !== c || e[6] !== a || e[7] !== l || e[8] !== s) {
    const p = { className: "cursor-ui-13ly8rp cursor-ui-1xlntvz cursor-ui-dpxx8g cursor-ui-xymvpz cursor-ui-yab65l cursor-ui-1xpa7k cursor-ui-4b2ntj cursor-ui-11wthnw cursor-ui-ss6m8b cursor-ui-uxw1ft" }, g = { className: "cursor-ui-13ly8rp cursor-ui-1qg3m7i cursor-ui-1xlntvz cursor-ui-dpxx8g cursor-ui-xymvpz cursor-ui-14atkfc cursor-ui-yab65l" }, f = { className: "cursor-ui-78zum5 cursor-ui-1q0g3np cursor-ui-6s0dn4 cursor-ui-ehausa cursor-ui-euugli cursor-ui-h8yej3" }, _ = { className: "cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-1r8uery cursor-ui-euugli" }, b = { className: "cursor-ui-13ly8rp cursor-ui-1xlntvz cursor-ui-dpxx8g cursor-ui-xymvpz cursor-ui-v0g687 cursor-ui-phdvex cursor-ui-17v7654 cursor-ui-cnomtp cursor-ui-19aaqeu cursor-ui-1wm8ruf cursor-ui-uxw1ft cursor-ui-6ikm8r cursor-ui-10wlt62" }, y = { className: "cursor-ui-13ly8rp cursor-ui-1xlntvz cursor-ui-xymvpz cursor-ui-1lfpczk cursor-ui-1yxiud8 cursor-ui-19aaqeu cursor-ui-1wm8ruf cursor-ui-ss6m8b cursor-ui-1hr2gdg cursor-ui-uxw1ft" }, S = { className: "cursor-ui-13ly8rp cursor-ui-1xlntvz cursor-ui-dpxx8g cursor-ui-xymvpz cursor-ui-1wm8ruf cursor-ui-ss6m8b cursor-ui-uxw1ft cursor-ui-6ikm8r cursor-ui-10wlt62 cursor-ui-v0g687 cursor-ui-5yr4ai cursor-ui-1qg3m7i cursor-ui-11mpw84" }, k = { className: "cursor-ui-xymvpz cursor-ui-1uhho1l cursor-ui-1yxiud8 cursor-ui-oyc9vk cursor-ui-2lprc cursor-ui-1hr2gdg cursor-ui-uxw1ft" };
    let C;
    e[10] !== n || e[11] !== r ? (C = r ? d(k4e.skeletonName) : rS(nn, { size: "md", color: "secondary", as: "span", children: n }), e[10] = n, e[11] = r, e[12] = C) : C = e[12];
    const T = r && o ? rS("span", { className: ri("ui-usage-table__description", _.className), style: _.style, children: d(k4e.skeletonDescription) }) : null;
    let I;
    e[13] !== C || e[14] !== T ? (I = rS("td", { className: ri("ui-usage-table__name-cell", g.className), style: g.style, children: aG("div", { className: ri("ui-usage-table__name-content", f.className), style: f.style, children: [C, T] }) }), e[13] = C, e[14] = T, e[15] = I) : I = e[15];
    let A;
    e[16] !== r ? (A = r ? d(k4e.skeletonUsage) : "—", e[16] = r, e[17] = A) : A = e[17];
    let P;
    e[18] !== A ? (P = rS("td", { className: ri("ui-usage-table__usage", y.className), style: y.style, children: A }), e[18] = A, e[19] = P) : P = e[19], h = aG("tr", { className: "ui-usage-table__row ui-usage-table__row--placeholder", children: [s ? rS("td", { className: ri("ui-usage-table__rank", p.className), style: p.style, children: i ?? "—" }) : null, I, a ? rS("td", { className: ri("ui-usage-table__creator-cell", b.className), style: b.style, children: r ? d(k4e.skeletonCreator) : "—" }) : null, P, l ? rS("td", { className: ri("ui-usage-table__agent-share", S.className), style: S.style, children: r ? d(k4e.skeletonBar) : "—" }) : null, c ? rS("td", { className: ri("ui-usage-table__action", k.className), style: k.style, children: r ? d(u ? k4e.skeletonActionChevron : k4e.skeletonAction) : "—" }) : null] }), e[0] = u, e[1] = o, e[2] = n, e[3] = r, e[4] = i, e[5] = c, e[6] = a, e[7] = l, e[8] = s, e[9] = h;
  } else h = e[9];
  return h;
}
function QQ1(t) {
  const e = Sc(k4e.skeleton, t);
  return rS("span", { className: e.className, style: e.style, "aria-hidden": true });
}
function JQ1(t) {
  const e = CIn(53), { row: n, rank: i, showRank: r, creatorCell: s, showInvocationColumns: o, showActionColumn: a, showUsageIcon: l, usageTooltip: c, hasDescription: u } = t;
  let d;
  e[0] !== n.usageCount ? (d = n.usageCount !== void 0 ? MWm.format(n.usageCount) : "—", e[0] = n.usageCount, e[1] = d) : d = e[1];
  const h = d;
  let p, g;
  e[2] !== n.agentCount || e[3] !== n.humanCount ? (p = HQ1(n.humanCount, n.agentCount), g = p !== void 0 ? DWm.format(p) : "—", e[2] = n.agentCount, e[3] = n.humanCount, e[4] = p, e[5] = g) : (p = e[4], g = e[5]);
  const f = g;
  let _;
  e[6] !== n.name || e[7] !== n.titleAnnotation ? (_ = n.titleAnnotation ? aG(WZa, { children: [n.name, " ", aG(nn, { size: "sm", color: "secondary", as: "span", children: ["(", n.titleAnnotation, ")"] })] }) : n.name, e[6] = n.name, e[7] = n.titleAnnotation, e[8] = _) : _ = e[8];
  const b = _;
  let y;
  if (e[9] !== p || e[10] !== f || e[11] !== s || e[12] !== u || e[13] !== i || e[14] !== n.action || e[15] !== n.description || e[16] !== n.leading || e[17] !== n.name || e[18] !== n.onRowClick || e[19] !== a || e[20] !== o || e[21] !== r || e[22] !== l || e[23] !== b || e[24] !== h || e[25] !== c) {
    const S = { className: "cursor-ui-78zum5 cursor-ui-2lah0s cursor-ui-6s0dn4 cursor-ui-l56j7k cursor-ui-1xp8n7a cursor-ui-mix8c7 cursor-ui-1e1y6u3 cursor-ui-6ikm8r cursor-ui-10wlt62" }, k = { className: "cursor-ui-78zum5 cursor-ui-1q0g3np cursor-ui-6s0dn4 cursor-ui-ehausa cursor-ui-euugli cursor-ui-h8yej3" }, C = { 0: { className: "cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-dl72j9 cursor-ui-euugli" }, 1: { className: "cursor-ui-1c4vz4f cursor-ui-2lah0s cursor-ui-xm9e6e cursor-ui-euugli" } }[!!u << 0], T = { className: "cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-1r8uery cursor-ui-euugli" }, I = n.leading ? rS("div", { className: ri("ui-usage-table__leading", S.className), style: S.style, children: n.leading }) : null, A = ri("ui-usage-table__name", C.className);
    let P;
    e[27] !== C || e[28] !== A || e[29] !== b ? (P = rS(nn, { size: "md", color: "primary", className: A, style: C.style, as: "span", truncate: true, children: b }), e[27] = C, e[28] = A, e[29] = b, e[30] = P) : P = e[30];
    const M = n.description != null ? rS(nn, { size: "sm", color: "tertiary", className: ri("ui-usage-table__description", T.className), style: T.style, as: "span", truncate: true, children: n.description }) : null;
    let O;
    e[31] !== I || e[32] !== P || e[33] !== M ? (O = aG(WZa, { children: [I, P, M] }), e[31] = I, e[32] = P, e[33] = M, e[34] = O) : O = e[34];
    const N = O, U = n.onRowClick;
    let j;
    e[35] !== U || e[36] !== n.name ? (j = U ? { "data-clickable": "", role: "button", tabIndex: 0, "aria-label": `Open ${n.name}`, onClick: U, onKeyDown: (Ie) => {
      (Ie.key === "Enter" || Ie.key === " ") && (Ie.preventDefault(), U());
    } } : void 0, e[35] = U, e[36] = n.name, e[37] = j) : j = e[37];
    const $ = j, H = a, G = !a && o, q = !a && !o, K = Sc(PWm, k4e.row, U ? k4e.rowClickable : null), V = { 0: { className: "cursor-ui-13ly8rp cursor-ui-1xlntvz cursor-ui-dpxx8g cursor-ui-xymvpz cursor-ui-yab65l cursor-ui-1xpa7k cursor-ui-4b2ntj cursor-ui-11wthnw cursor-ui-ss6m8b cursor-ui-uxw1ft cursor-ui-1wryemj" }, 1: { className: "cursor-ui-13ly8rp cursor-ui-1xlntvz cursor-ui-dpxx8g cursor-ui-xymvpz cursor-ui-yab65l cursor-ui-1xpa7k cursor-ui-4b2ntj cursor-ui-11wthnw cursor-ui-ss6m8b cursor-ui-uxw1ft cursor-ui-1wryemj cursor-ui-1go36yk cursor-ui-b9ed0" } }[!!r << 0], Y = { 0: { className: "cursor-ui-13ly8rp cursor-ui-1qg3m7i cursor-ui-1xlntvz cursor-ui-dpxx8g cursor-ui-xymvpz cursor-ui-14atkfc cursor-ui-yab65l cursor-ui-1wryemj cursor-ui-1go36yk cursor-ui-b9ed0" }, 1: { className: "cursor-ui-13ly8rp cursor-ui-1qg3m7i cursor-ui-1xlntvz cursor-ui-dpxx8g cursor-ui-xymvpz cursor-ui-14atkfc cursor-ui-yab65l cursor-ui-1wryemj" } }[!!r << 0], J = { 0: { className: "cursor-ui-13ly8rp cursor-ui-1xlntvz cursor-ui-xymvpz cursor-ui-1lfpczk cursor-ui-1yxiud8 cursor-ui-19aaqeu cursor-ui-1wm8ruf cursor-ui-ss6m8b cursor-ui-1hr2gdg cursor-ui-uxw1ft cursor-ui-1wryemj" }, 1: { className: "cursor-ui-13ly8rp cursor-ui-1xlntvz cursor-ui-xymvpz cursor-ui-1lfpczk cursor-ui-1yxiud8 cursor-ui-19aaqeu cursor-ui-1wm8ruf cursor-ui-ss6m8b cursor-ui-1hr2gdg cursor-ui-uxw1ft cursor-ui-1wryemj cursor-ui-1ybcgki cursor-ui-1d571mg" } }[!!q << 0], Q = { 0: { className: "cursor-ui-13ly8rp cursor-ui-1xlntvz cursor-ui-dpxx8g cursor-ui-xymvpz cursor-ui-1wm8ruf cursor-ui-ss6m8b cursor-ui-uxw1ft cursor-ui-6ikm8r cursor-ui-10wlt62 cursor-ui-v0g687 cursor-ui-5yr4ai cursor-ui-1qg3m7i cursor-ui-11mpw84 cursor-ui-1wryemj" }, 1: { className: "cursor-ui-13ly8rp cursor-ui-1xlntvz cursor-ui-dpxx8g cursor-ui-xymvpz cursor-ui-1wm8ruf cursor-ui-ss6m8b cursor-ui-uxw1ft cursor-ui-6ikm8r cursor-ui-10wlt62 cursor-ui-v0g687 cursor-ui-5yr4ai cursor-ui-1qg3m7i cursor-ui-11mpw84 cursor-ui-1wryemj cursor-ui-1ybcgki cursor-ui-1d571mg" } }[!!G << 0], te = { className: "cursor-ui-78zum5 cursor-ui-1q0g3np cursor-ui-6s0dn4 cursor-ui-pkkfsy cursor-ui-euugli" }, ee = { className: "cursor-ui-2lah0s" }, re = { className: "cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-dl72j9 cursor-ui-euugli" }, ie = { className: "cursor-ui-3nfvp2 cursor-ui-6s0dn4 cursor-ui-2lah0s cursor-ui-11twubx" }, oe = { className: "cursor-ui-2lah0s cursor-ui-15hfatp cursor-ui-4b2ntj cursor-ui-ss6m8b cursor-ui-1hr2gdg" }, se = { className: "cursor-ui-3nfvp2 cursor-ui-dt55o3" }, le = { className: "cursor-ui-3nfvp2 cursor-ui-6s0dn4 cursor-ui-t0e3qv cursor-ui-19aaqeu cursor-ui-7gh5u8 cursor-ui-t3l3uh cursor-ui-g3p6pi cursor-ui-6ekqhr" }, ce = l ? rS(zt, { name: "chart-bars", size: "sm", className: ri("ui-usage-table__usage-icon", se.className), style: { ...se.style, verticalAlign: "-2px" }, "aria-hidden": true }) : null;
    let ae;
    e[38] !== h ? (ae = rS("span", { className: "ui-usage-table__usage-text", children: h }), e[38] = h, e[39] = ae) : ae = e[39];
    let de;
    e[40] !== ce || e[41] !== ae ? (de = aG(WZa, { children: [ce, ae] }), e[40] = ce, e[41] = ae, e[42] = de) : de = e[42];
    const he = de, ge = { 0: { className: "cursor-ui-xymvpz cursor-ui-1uhho1l cursor-ui-1yxiud8 cursor-ui-oyc9vk cursor-ui-2lprc cursor-ui-1hr2gdg cursor-ui-uxw1ft cursor-ui-1wryemj" }, 1: { className: "cursor-ui-xymvpz cursor-ui-1uhho1l cursor-ui-1yxiud8 cursor-ui-oyc9vk cursor-ui-2lprc cursor-ui-1hr2gdg cursor-ui-uxw1ft cursor-ui-1wryemj cursor-ui-1ybcgki cursor-ui-1d571mg" } }[!!H << 0], pe = { className: "cursor-ui-3nfvp2 cursor-ui-6s0dn4 cursor-ui-l56j7k cursor-ui-1qh17o cursor-ui-52jm1j cursor-ui-t3l3uh cursor-ui-7pq1vu cursor-ui-6ekqhr" }, ve = ri("ui-usage-table__row", K.className), fe = K.style, Te = ri("ui-usage-table__name-cell", Y.className);
    let _e;
    e[43] !== N ? (_e = rS("div", { className: ri("ui-usage-table__name-content", k.className), style: k.style, children: N }), e[43] = N, e[44] = _e) : _e = e[44];
    let Ce;
    e[45] !== Y || e[46] !== Te || e[47] !== _e ? (Ce = rS("td", { className: Te, style: Y.style, children: _e }), e[45] = Y, e[46] = Te, e[47] = _e, e[48] = Ce) : Ce = e[48];
    const Se = ri("ui-usage-table__usage", J.className), Pe = c != null ? rS(xs, { content: c, openDelay: 20, children: rS("span", { className: ri("ui-usage-table__usage-content", le.className), style: le.style, children: he }) }) : he;
    let we;
    e[49] !== Se || e[50] !== Pe || e[51] !== J ? (we = rS("td", { className: Se, style: J.style, children: Pe }), e[49] = Se, e[50] = Pe, e[51] = J, e[52] = we) : we = e[52], y = aG("tr", { className: ve, style: fe, ...$, children: [i !== void 0 ? rS("td", { className: ri("ui-usage-table__rank", V.className), style: V.style, children: i }) : null, Ce, s, we, o ? rS("td", { className: ri("ui-usage-table__agent-share", Q.className), style: Q.style, children: p !== void 0 ? rS(xs, { content: NWm, openDelay: 20, children: aG("div", { className: ri("ui-usage-table__agent-share-content", te.className), style: te.style, children: [rS(zt, { name: "person", size: "sm", className: ri("ui-usage-table__agent-share-icon", ee.className), style: { ...ee.style, color: jpe["--cursor-text-tertiary"] }, "aria-hidden": true }), rS(Yg, { variant: "bar", value: p, color: "secondary", className: ri("ui-usage-table__agent-share-bar", re.className), style: re.style, "aria-label": `Agent share ${f}` }), aG("span", { className: ri("ui-usage-table__agent-share-trailing", ie.className), style: ie.style, children: [rS(zt, { name: "robot", size: "sm", className: ri("ui-usage-table__agent-share-icon", ee.className), style: { ...ee.style, color: jpe["--cursor-text-tertiary"] }, "aria-hidden": true }), rS("span", { className: ri("ui-usage-table__agent-share-text", oe.className), style: oe.style, children: f })] })] }) }) : f }) : null, a ? n.action !== void 0 ? rS("td", { className: ri("ui-usage-table__action", ge.className), style: ge.style, onClick: tJ1, onKeyDown: eJ1, children: n.action }) : rS("td", { className: ri("ui-usage-table__action", ge.className), style: ge.style, children: U ? rS("span", { className: ri("ui-usage-table__open-chevron", pe.className), style: pe.style, "aria-hidden": true, children: rS(zt, { name: "chevron-right", size: "sm" }) }) : null }) : null] }), e[9] = p, e[10] = f, e[11] = s, e[12] = u, e[13] = i, e[14] = n.action, e[15] = n.description, e[16] = n.leading, e[17] = n.name, e[18] = n.onRowClick, e[19] = a, e[20] = o, e[21] = r, e[22] = l, e[23] = b, e[24] = h, e[25] = c, e[26] = y;
  } else y = e[26];
  return y;
}
function eJ1(t) {
  return t.stopPropagation();
}
function tJ1(t) {
  return t.stopPropagation();
}
function nJ1(t) {
  const e = CIn(30), { creator: n, visual: i } = t;
  let r, s, o, a, l, c, u, d, h, p, g, f;
  if (e[0] !== n || e[1] !== i) {
    f = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
    e: {
      const S = { className: "cursor-ui-13ly8rp cursor-ui-1xlntvz cursor-ui-dpxx8g cursor-ui-xymvpz cursor-ui-v0g687 cursor-ui-phdvex cursor-ui-17v7654 cursor-ui-cnomtp cursor-ui-19aaqeu cursor-ui-1wm8ruf cursor-ui-uxw1ft cursor-ui-6ikm8r cursor-ui-10wlt62 cursor-ui-1wryemj" }, k = { className: "cursor-ui-78zum5 cursor-ui-1q0g3np cursor-ui-6s0dn4 cursor-ui-pkkfsy cursor-ui-euugli" }, C = { className: "cursor-ui-3nfvp2 cursor-ui-6s0dn4 cursor-ui-l56j7k cursor-ui-2lah0s cursor-ui-1pwdyn5 cursor-ui-1vatr1o cursor-ui-178xt8z cursor-ui-s1s249 cursor-ui-so031l cursor-ui-e0pwq cursor-ui-13fuv20 cursor-ui-32b0ac cursor-ui-1q0q8m5 cursor-ui-19ypqd9 cursor-ui-1aeic0j cursor-ui-141kqco cursor-ui-17fyfba cursor-ui-1arpupx cursor-ui-1i4c3av cursor-ui-i07v4r cursor-ui-19aaqeu cursor-ui-1k6wstc cursor-ui-1yl5bsf cursor-ui-o5v014" }, T = { className: "cursor-ui-3nfvp2 cursor-ui-6s0dn4 cursor-ui-l56j7k cursor-ui-2lah0s cursor-ui-6jxa94 cursor-ui-1v9usgg cursor-ui-6ikm8r cursor-ui-10wlt62 cursor-ui-1043rbw" };
      if (o = { className: "cursor-ui-euugli" }, s = n?.trim(), s === void 0 || s.length === 0) {
        f = rS("td", { className: ri("ui-usage-table__creator-cell", S.className), style: S.style, children: "—" });
        break e;
      }
      p = ri("ui-usage-table__creator-cell", S.className), g = S.style, u = ri("ui-usage-table__creator-content", k.className), d = k.style, h = i ? rS("span", { className: ri("ui-usage-table__creator-logo", T.className), style: T.style, "aria-hidden": true, children: i }) : rS("span", { className: ri("ui-usage-table__creator-avatar", C.className), style: C.style, "aria-hidden": true, children: iJ1(s) }), r = nn, a = "sm", l = "secondary", c = ri("ui-usage-table__creator", o.className);
    }
    e[0] = n, e[1] = i, e[2] = r, e[3] = s, e[4] = o, e[5] = a, e[6] = l, e[7] = c, e[8] = u, e[9] = d, e[10] = h, e[11] = p, e[12] = g, e[13] = f;
  } else r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], u = e[8], d = e[9], h = e[10], p = e[11], g = e[12], f = e[13];
  if (f !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) return f;
  let _;
  e[14] !== r || e[15] !== s || e[16] !== o.style || e[17] !== a || e[18] !== l || e[19] !== c ? (_ = rS(r, { size: a, color: l, className: c, style: o.style, as: "span", truncate: true, children: s }), e[14] = r, e[15] = s, e[16] = o.style, e[17] = a, e[18] = l, e[19] = c, e[20] = _) : _ = e[20];
  let b;
  e[21] !== _ || e[22] !== u || e[23] !== d || e[24] !== h ? (b = aG("div", { className: u, style: d, children: [h, _] }), e[21] = _, e[22] = u, e[23] = d, e[24] = h, e[25] = b) : b = e[25];
  let y;
  return e[26] !== b || e[27] !== p || e[28] !== g ? (y = rS("td", { className: p, style: g, children: b }), e[26] = b, e[27] = p, e[28] = g, e[29] = y) : y = e[29], y;
}
function iJ1(t) {
  return (t.trim()[0] ?? "").toUpperCase();
}
var k4e, MWm, DWm, NWm, LWm, OWm,
