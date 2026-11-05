// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ManageTeamMarketplacePluginList.js range:17058333..17077030
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.111Z
// wrapper: Vn1 deps:15 [E, Va, R7r, Tn1, Jpp, REa, E7r, Hrt, FEa, avi, Nhe, Q3]
// declarations: cmp, ump, $7r, dmp, hmp, H7r, W7r, Xn1, BEa, pmp, Zn1, mmp, UEa, Qn1, G7r, Jn1 (segment truncated)
// anchors: (none)
// group: team-marketplace
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
Vn1 = L({ "ManageTeamMarketplacePluginList.js"() {
  "use strict";
  E(), Va(), R7r(), Tn1(), Jpp(), REa(), E7r(), Hrt(), FEa(), avi(), Nhe(), Q3(), f2(), BW(), P0(), amp = ["available", "default", "required"];
} });
import { jsx as v2, jsxs as wGe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as lmp } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as K$t, useRef as Kn1, useEffect as Yn1 } from "./react-runtime/react/esm-index-production.js";
function cmp(t) {
  const e = (t.directoryGroupIds ?? []).map((i) => Number(i)), n = t.accessGrants ?? [];
  return { mode: e.length === 0 ? "all" : "selected", selectedIds: e, autoReindex: t.autoReindex ?? false, allowUserPublish: t.allowUserPublish ?? true, originDistributionEnabled: G7r(t.distributionGitUrl), organizationGroupIds: n.filter((i) => i.principalKind === "GROUP").map((i) => i.principalId), preservedGrants: n.filter((i) => i.principalKind !== "GROUP") };
}
function ump(t) {
  return [...t.preservedGrants, ...t.organizationGroupIds.map((e) => ({ principalKind: "GROUP", principalId: e }))];
}
function $7r(t, e, n) {
  const i = n?.enableAccessGrants ?? false, r = {}, s = ump(e), o = t.mode === "all" ? [] : [...t.selectedIds].sort((h, p) => h - p), a = e.mode === "all" ? [] : [...e.selectedIds].sort((h, p) => h - p);
  (o.length !== a.length || o.some((h, p) => h !== a[p])) && (r.directoryGroupIds = o, i && s.length > 0 && (r.accessGrants = t.preservedGrants, e.organizationGroupIds.length > 0 && (r.syncAccessGrants = true))), t.autoReindex !== e.autoReindex && (r.autoReindex = t.autoReindex), t.allowUserPublish !== e.allowUserPublish && (r.allowUserPublish = t.allowUserPublish), t.originDistributionEnabled !== e.originDistributionEnabled && (r.originDistributionEnabled = t.originDistributionEnabled);
  const c = [...t.organizationGroupIds].sort(), u = [...e.organizationGroupIds].sort(), d = c.length !== u.length || c.some((h, p) => h !== u[p]);
  if (i && d) {
    r.directoryGroupIds = [];
    const h = ump(t);
    r.accessGrants = h, r.syncAccessGrants = true;
  }
  return r;
}
function dmp(t) {
  const e = t.mode === "all" ? [] : [...t.selectedIds].sort((n, i) => n - i);
  return `${t.mode}:${e.join(",")}`;
}
function hmp(t, e) {
  return dmp(t) !== dmp(e);
}
function H7r(t, e) {
  return hmp(t, e);
}
function W7r(t, e) {
  const n = [...t.organizationGroupIds].sort(), i = [...e.organizationGroupIds].sort();
  return n.length !== i.length || n.some((r, s) => r !== i[s]);
}
function Xn1(t, e, n) {
  return W7r(t, e) ? n?.enableAccessGrants === true ? true : !H7r(t, e) : false;
}
function BEa(t, e, n) {
  return Xn1(t, e, n) || H7r(t, e) || t.autoReindex !== e.autoReindex || t.allowUserPublish !== e.allowUserPublish || t.originDistributionEnabled !== e.originDistributionEnabled ? true : !pmp($7r(t, e, n));
}
function pmp(t) {
  return t.directoryGroupIds === void 0 && t.autoReindex === void 0 && t.allowUserPublish === void 0 && t.originDistributionEnabled === void 0 && t.accessGrants === void 0 && t.syncAccessGrants === void 0;
}
function Zn1(t) {
  return t.autoReindex !== void 0 && t.directoryGroupIds === void 0 && t.allowUserPublish === void 0 && t.originDistributionEnabled === void 0 && t.accessGrants === void 0 && t.syncAccessGrants === void 0;
}
function mmp(t) {
  return t.directoryGroupIds === void 0 && t.accessGrants === void 0 && t.syncAccessGrants === void 0 && (t.autoReindex !== void 0 || t.allowUserPublish !== void 0 || t.originDistributionEnabled !== void 0);
}
function UEa(t) {
  if (t === void 0 || t.trim() === "") return false;
  let e = t.trim();
  gaa(e) && (e = faa(e));
  try {
    const n = new URL(e.includes("://") ? e : `https://${e}`), i = n.hostname, r = i.toLowerCase();
    return Cwh(i) || $Dr(i) || r.includes("bitbucket") || _aa(i) || r.includes("azure") && r.includes("dev") || r.includes("gitea") || r.includes("codeberg") ? false : n.pathname.split("/").filter(Boolean).length >= 2;
  } catch {
    return false;
  }
}
function Qn1(t, e, n = [], i = { mode: "all", selectedIds: [] }, r = false) {
  if (!r || e.mode === "selected" && e.selectedIds.length > 0 || hmp(e, i)) return false;
  const o = e.organizationGroupIds.length > 0, a = n.length > 0;
  return (t?.length ?? 0) > 0 || o || a;
}
function G7r(t) {
  return t !== void 0 && t !== "";
}
function Jn1(t, e) {
  const n = new Map((t ?? []).map((i) => [i.id, i]));
  for (const i of e) n.has(i) || n.set(i, { id: i, name: `Group ${i}`, memberCount: 0 });
  return [...n.values()];
}
function gmp(t) {
  const e = lmp(149), { teamName: n, directoryGroups: i, organizationGroups: r, enableAccessGrants: s, value: o, savedOrganizationGroupIds: a, savedScimSelection: l, onChange: c, onReindex: u, repositoryUrl: d, onDeleteMarketplace: h, onPreviewMcpImpact: p, disabled: g, cellClassName: f, hasGitUrl: _, showAllowUserPublish: b, allowUserPublishCallout: y, supportsOriginDistribution: S, originDistribution: k } = t, C = s === void 0 ? false : s;
  let T;
  e[0] !== a ? (T = a === void 0 ? [] : a, e[0] = a, e[1] = T) : T = e[1];
  const I = T;
  let A;
  e[2] !== l ? (A = l === void 0 ? { mode: "all", selectedIds: [] } : l, e[2] = l, e[3] = A) : A = e[3];
  const P = A, M = _ === void 0 ? true : _, O = b === void 0 ? false : b, N = S === void 0 ? true : S, [U, j] = K$t(false), [$, H] = K$t(false), [G, q] = K$t(false);
  let K;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (K = [], e[4] = K) : K = e[4];
  const [V, Y] = K$t(K), Q = wO()?.parentElement ?? null, [te, ee] = K$t(false), [re, ie] = K$t(false), [oe, se] = K$t(null);
  let le;
  if (e[5] !== d) {
    const bi = d?.trim(), Qn = bi !== void 0 && gaa(bi) ? faa(bi) : bi;
    le = Qn !== void 0 && ivi(Qn) ? Qn : void 0, e[5] = d, e[6] = le;
  } else le = e[6];
  const ce = le, ae = Kn1(null);
  let de, he;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (de = () => () => {
    ae.current !== null && window.clearTimeout(ae.current);
  }, he = [], e[7] = de, e[8] = he) : (de = e[7], he = e[8]), Yn1(de, he);
  let ge;
  e[9] !== C || e[10] !== c || e[11] !== o ? (ge = (bi) => {
    const Qn = o.selectedIds.includes(bi) ? o.selectedIds.filter((ni) => ni !== bi) : [...o.selectedIds, bi];
    c({ ...o, selectedIds: Qn, mode: Qn.length === 0 ? "all" : "selected", ...C && Qn.length === 0 ? { organizationGroupIds: [] } : {} });
  }, e[9] = C, e[10] = c, e[11] = o, e[12] = ge) : ge = e[12];
  const pe = ge;
  let ve;
  e[13] !== C || e[14] !== c || e[15] !== o ? (ve = () => {
    c({ ...o, selectedIds: [], mode: "all", ...C ? { organizationGroupIds: [] } : {} });
  }, e[13] = C, e[14] = c, e[15] = o, e[16] = ve) : ve = e[16];
  const fe = ve;
  let Te;
  e[17] !== c || e[18] !== o ? (Te = (bi) => {
    const Qn = o.organizationGroupIds.includes(bi) ? o.organizationGroupIds.filter((ni) => ni !== bi) : [...o.organizationGroupIds, bi];
    c({ ...o, organizationGroupIds: Qn });
  }, e[17] = c, e[18] = o, e[19] = Te) : Te = e[19];
  const _e = Te;
  let Ce;
  e[20] !== c || e[21] !== o ? (Ce = () => {
    c({ ...o, organizationGroupIds: [] });
  }, e[20] = c, e[21] = o, e[22] = Ce) : Ce = e[22];
  const Se = Ce;
  let Pe;
  e[23] !== c || e[24] !== o ? (Pe = (bi) => {
    c({ ...o, autoReindex: bi });
  }, e[23] = c, e[24] = o, e[25] = Pe) : Pe = e[25];
  const we = Pe;
  let Ie;
  e[26] !== c || e[27] !== o ? (Ie = (bi) => {
    c({ ...o, allowUserPublish: bi });
  }, e[26] = c, e[27] = o, e[28] = Ie) : Ie = e[28];
  const Me = Ie, De = o.allowUserPublish ? void 0 : y;
  let Ne;
  e[29] !== c || e[30] !== o ? (Ne = (bi) => {
    c({ ...o, originDistributionEnabled: bi });
  }, e[29] = c, e[30] = o, e[31] = Ne) : Ne = e[31];
  const be = Ne;
  let je;
  e[32] !== p ? (je = async () => {
    if (p !== void 0) {
      q(true);
      try {
        Y(await p());
      } catch {
        Y([]);
      }
      q(false);
    } else Y([]);
    j(true);
  }, e[32] = p, e[33] = je) : je = e[33];
  const $e = je;
  let Je;
  e[34] !== h ? (Je = async () => {
    H(true);
    try {
      await h(), j(false);
    } catch (bi) {
      const Qn = bi;
      throw H(false), Qn;
    }
    H(false);
  }, e[34] = h, e[35] = Je) : Je = e[35];
  const Ge = Je;
  let xe;
  e[36] !== u ? (xe = async () => {
    ie(false), se(null), ae.current !== null && (window.clearTimeout(ae.current), ae.current = null), ee(true);
    try {
      await u(), ie(true), ae.current = window.setTimeout(() => {
        ie(false), ae.current = null;
      }, 2500);
    } catch (bi) {
      const Qn = bi;
      se(Qn instanceof Error ? Qn.message : "Failed to refresh marketplace.");
    }
    ee(false);
  }, e[36] = u, e[37] = xe) : xe = e[37];
  const Oe = xe, ct = g || $;
  let Ye;
  e[38] !== C || e[39] !== r || e[40] !== I || e[41] !== P || e[42] !== o ? (Ye = Qn1(r, o, I, P, C), e[38] = C, e[39] = r, e[40] = I, e[41] = P, e[42] = o, e[43] = Ye) : Ye = e[43];
  const Ve = Ye;
  let Xe;
  e[44] !== r || e[45] !== I || e[46] !== o.organizationGroupIds ? (Xe = Jn1(r, [...I, ...o.organizationGroupIds]), e[44] = r, e[45] = I, e[46] = o.organizationGroupIds, e[47] = Xe) : Xe = e[47];
  const lt = Xe;
  let He;
  e[48] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (He = v2("h3", { className: "ui-1wm8ruf ui-20ajya ui-spwq11 ui-19aaqeu ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-exx8yu ui-y13l1i ui-18d9i69 ui-163pfp", children: "Marketplace Settings" }), e[48] = He) : He = e[48];
  let gt;
  e[49] !== oe ? (gt = oe && v2("p", { ...gn(own), children: oe }), e[49] = oe, e[50] = gt) : gt = e[50];
  let ht;
  e[51] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ht = gn(uEa), e[51] = ht) : ht = e[51];
  let Ae;
  e[52] !== i || e[53] !== fe || e[54] !== Se || e[55] !== pe || e[56] !== _e || e[57] !== ct || e[58] !== Ve || e[59] !== lt || e[60] !== n || e[61] !== o.organizationGroupIds || e[62] !== o.selectedIds ? (Ae = Ve ? v2(W$t, { directoryGroups: lt.map(ei1), selectedGroupIds: o.organizationGroupIds, onToggleGroupId: _e, onSelectAll: Se, teamName: n, disabled: ct }) : v2(W$t, { directoryGroups: i, selectedGroupIds: o.selectedIds, onToggleGroupId: pe, onSelectAll: fe, teamName: n, disabled: ct }), e[52] = i, e[53] = fe, e[54] = Se, e[55] = pe, e[56] = _e, e[57] = ct, e[58] = Ve, e[59] = lt, e[60] = n, e[61] = o.organizationGroupIds, e[62] = o.selectedIds, e[63] = Ae) : Ae = e[63];
  let ot;
  e[64] !== f || e[65] !== Ae ? (ot = v2(d6e, { className: f, label: "Marketplace Access", description: "Select who can see and use plugins from this team marketplace", trailingItems: Ae }), e[64] = f, e[65] = Ae, e[66] = ot) : ot = e[66];
  let Be;
  e[67] !== f || e[68] !== we || e[69] !== M || e[70] !== ct || e[71] !== o.autoReindex ? (Be = M && v2(d6e, { className: f, label: "Enable Auto Refresh", description: "Automatically update plugins when changes are pushed to the repository", trailingItems: v2(cv, { size: "md", "aria-label": "Enable Auto Refresh", checked: o.autoReindex, disabled: ct, onCheckedChange: we }) }), e[67] = f, e[68] = we, e[69] = M, e[70] = ct, e[71] = o.autoReindex, e[72] = Be) : Be = e[72];
  let Ue;
  e[73] !== De || e[74] !== f || e[75] !== Me || e[76] !== ct || e[77] !== O || e[78] !== o.allowUserPublish ? (Ue = O && wGe("div", { className: "ui-1n2onr6 ui-78zum5 ui-dt5ytf ui-1cpjm7i ui-1hmns74 ui-1y3wzot ui-1elnft9 ui-w8i89x ui-y80zi5 ui-1850n35", children: [De !== void 0 && v2(ti1, { description: De.description, onDismiss: De.onDismiss }), v2(d6e, { className: f, label: "Allow Members to Publish", description: "Let any team member publish plugins to this marketplace. When off, only team admins can publish.", hideTopDivider: true, trailingItems: v2(cv, { size: "md", "aria-label": "Allow Members to Publish", checked: o.allowUserPublish, disabled: ct, onCheckedChange: Me }) })] }), e[73] = De, e[74] = f, e[75] = Me, e[76] = ct, e[77] = O, e[78] = o.allowUserPublish, e[79] = Ue) : Ue = e[79];
  let it;
  e[80] !== f || e[81] !== be || e[82] !== M || e[83] !== ct || e[84] !== k || e[85] !== N || e[86] !== o.originDistributionEnabled ? (it = M && N && k !== void 0 && v2(d6e, { className: f, label: "Serve Marketplace From Cursor", description: "Cursor keeps a synced copy of this repository and serves plugins from it, so team members can use the marketplace without GitHub access to the source repo. Access is controlled by Marketplace Access.", trailingItems: wGe("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-167g77z", children: [k.syncWarning === true ? v2(xs, { content: q7r, placement: "top", children: v2("span", { className: "ui-3nfvp2 ui-19aaqeu", role: "img", "aria-label": q7r, children: v2(zt, { name: "warning", size: "sm", "aria-hidden": true }) }) }) : v2("span", { ...{ 0: { className: "ui-3nfvp2 ui-npuxes" }, 1: { className: "ui-3nfvp2 ui-lshs6z" } }[(k.loading !== true && k.busy !== true) << 0], "aria-hidden": k.loading !== true && k.busy !== true, children: v2(pwt, { size: 16 }) }), v2(cv, { size: "md", "aria-label": "Serve Marketplace From Cursor", checked: k.loading === true ? true : o.originDistributionEnabled, disabled: ct || k.busy === true || k.loading === true, onCheckedChange: be })] }) }), e[80] = f, e[81] = be, e[82] = M, e[83] = ct, e[84] = k, e[85] = N, e[86] = o.originDistributionEnabled, e[87] = it) : it = e[87];
  let qe;
  e[88] !== Oe ? (qe = () => {
    Oe();
  }, e[88] = Oe, e[89] = qe) : qe = e[89];
  let pt;
  e[90] !== te || e[91] !== re ? (pt = te ? wGe("span", { ...gn(uvi), children: [v2(pwt, { size: 12 }), "Refreshing..."] }) : re ? wGe("span", { ...gn(uvi), children: [v2(zt, { name: "check", size: "base" }), "Refreshed"] }) : "Refresh", e[90] = te, e[91] = re, e[92] = pt) : pt = e[92];
  let dt;
  e[93] !== te || e[94] !== qe || e[95] !== pt ? (dt = v2(An, { variant: "outline", size: "lg", onClick: qe, disabled: te, children: pt }), e[93] = te, e[94] = qe, e[95] = pt, e[96] = dt) : dt = e[96];
  let ft;
  e[97] !== ce ? (ft = ce ? v2(ho, { render: v2("a", { href: ce, target: "_blank", rel: "noopener noreferrer" }), nativeButton: false, icon: "link-external", iconSize: "base", size: "md", "aria-label": "Open marketplace repository", title: "Open marketplace repository" }) : null, e[97] = ce, e[98] = ft) : ft = e[98];
  let bt;
  e[99] !== dt || e[100] !== ft ? (bt = wGe("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-167g77z", children: [dt, ft] }), e[99] = dt, e[100] = ft, e[101] = bt) : bt = e[101];
  let St;
  e[102] !== f || e[103] !== bt ? (St = v2(d6e, { className: f, label: "Plugin Repository", description: "Fetch marketplace plugins from the GitHub repository", trailingItems: bt }), e[102] = f, e[103] = bt, e[104] = St) : St = e[104];
  let Et;
  e[105] !== $e ? (Et = () => void $e(), e[105] = $e, e[106] = Et) : Et = e[106];
  const kt = ct || G, xt = G ? "Checking..." : "Delete Marketplace";
  let Pt;
  e[107] !== Et || e[108] !== kt || e[109] !== xt ? (Pt = v2(An, { variant: "secondary", tone: "danger", size: "lg", onClick: Et, disabled: kt, children: xt }), e[107] = Et, e[108] = kt, e[109] = xt, e[110] = Pt) : Pt = e[110];
  let Dt;
  e[111] !== f || e[112] !== Pt ? (Dt = v2(d6e, { className: f, label: "Remove Marketplace", description: "This marketplace and its access settings will be removed. The source repository won't be affected.", trailingItems: Pt }), e[111] = f, e[112] = Pt, e[113] = Dt) : Dt = e[113];
  let Vt;
  e[114] !== ot || e[115] !== Be || e[116] !== Ue || e[117] !== it || e[118] !== St || e[119] !== Dt ? (Vt = wGe("div", { ...ht, children: [ot, Be, Ue, it, St, Dt] }), e[114] = ot, e[115] = Be, e[116] = Ue, e[117] = it, e[118] = St, e[119] = Dt, e[120] = Vt) : Vt = e[120];
  let tn;
  e[121] !== $ ? (tn = (bi) => {
    $ || j(bi);
  }, e[121] = $, e[122] = tn) : tn = e[122];
  const un = V.length > 0 ? "All associated plugins will be removed for users and Cloud Agents." : "This removes the marketplace and its access settings; the repository isn't affected.";
  let kn;
  e[123] !== un ? (kn = v2(Xr.Header, { title: "Confirm Marketplace Deletion", description: un }), e[123] = un, e[124] = kn) : kn = e[124];
  let oi;
  e[125] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (oi = () => j(false), e[125] = oi) : oi = e[125];
  let Fn;
  e[126] !== $ ? (Fn = v2(An, { variant: "text", size: "lg", onClick: oi, disabled: $, children: "Cancel" }), e[126] = $, e[127] = Fn) : Fn = e[127];
  let Qt;
  e[128] !== Ge ? (Qt = () => void Ge(), e[128] = Ge, e[129] = Qt) : Qt = e[129];
  const Sn = $ ? "Deleting..." : "Delete";
  let $n;
  e[130] !== $ || e[131] !== Qt || e[132] !== Sn ? ($n = v2(An, { variant: "secondary", tone: "danger", size: "lg", onClick: Qt, disabled: $, children: Sn }), e[130] = $, e[131] = Qt, e[132] = Sn, e[133] = $n) : $n = e[133];
  let Mn;
  e[134] !== Fn || e[135] !== $n ? (Mn = wGe(Xr.Footer, { children: [Fn, $n] }), e[134] = Fn, e[135] = $n, e[136] = Mn) : Mn = e[136];
  let Un;
  e[137] !== U || e[138] !== tn || e[139] !== kn || e[140] !== Mn ? (Un = wGe(Xr, { open: U, onOpenChange: tn, size: "md", "aria-label": "Delete marketplace confirmation", modal: true, children: [kn, Mn] }), e[137] = U, e[138] = tn, e[139] = kn, e[140] = Mn, e[141] = Un) : Un = e[141];
  let Xn;
  e[142] !== Q || e[143] !== Un ? (Xn = v2(Kj, { root: Q, children: Un }), e[142] = Q, e[143] = Un, e[144] = Xn) : Xn = e[144];
  let Ti;
  return e[145] !== gt || e[146] !== Vt || e[147] !== Xn ? (Ti = wGe("div", { className: "ui-78zum5 ui-dt5ytf ui-mmi0ta", children: [He, gt, Vt, Xn] }), e[145] = gt, e[146] = Vt, e[147] = Xn, e[148] = Ti) : Ti = e[148], Ti;
}
function ei1(t) {
  return { id: t.id, name: t.name, memberCount: t.memberCount ?? 0 };
}
function ti1(t) {
  const e = lmp(8), { description: n, onDismiss: i } = t;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = v2("span", { className: "ui-78zum5 ui-2lah0s ui-p6nzhx", children: v2(zt, { name: "check-circle", size: "sm", "aria-hidden": true }) }), e[0] = r) : r = e[0];
  let s;
  e[1] !== n ? (s = v2("span", { className: "ui-5mp9sv ui-euugli ui-11wthnw ui-1ja60sm ui-1wd3ewq ui-1mzt3pk", children: n }), e[1] = n, e[2] = s) : s = e[2];
  let o;
  e[3] !== i ? (o = v2("span", { className: "ui-78zum5 ui-2lah0s", children: v2(An, { variant: "outline", size: "sm", onClick: i, children: "Dismiss" }) }), e[3] = i, e[4] = o) : o = e[4];
  let a;
  return e[5] !== s || e[6] !== o ? (a = wGe("div", { className: "ui-78zum5 ui-6s0dn4 ui-883omv ui-9f619 ui-14vqqas ui-1wsuqlk ui-12nagc ui-1tpqehw ui-z9dl7a ui-nuq7ks ui-sag5q8 ui-f18ygs ui-ur7f20 ui-1buh4up ui-1lsdope", role: "status", children: [r, s, o] }), e[5] = s, e[6] = o, e[7] = a) : a = e[7], a;
}
var q7r,
