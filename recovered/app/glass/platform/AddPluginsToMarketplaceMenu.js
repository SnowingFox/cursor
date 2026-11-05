// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AddPluginsToMarketplaceMenu.js range:16970998..16974096
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.062Z
// wrapper: AddPluginsToMarketplaceMenuModule deps:6 [E, Hrt, avi, Php, P0, BW]
// declarations: AddPluginsToMarketplaceMenuModule, W$t, kt1
// anchors: esm-jsx-runtime-production, esm-compiler-runtime-production
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var AddPluginsToMarketplaceMenuModule = L({
  "AddPluginsToMarketplaceMenu.js"() {
    "use strict";

    E(), Hrt(), avi(), Php(), P0(), BW();
  }
});
import { jsx as lvi, jsxs as sEa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as St1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function W$t(t) {
  const e = St1(35),
    {
      directoryGroups: n,
      selectedGroupIds: i,
      onToggleGroupId: r,
      onSelectAll: s,
      teamName: o,
      disabled: a
    } = t,
    l = i.length === 0,
    c = n.reduce(kt1, 0);
  let u;
  e: {
    if (l) {
      u = `Everyone in ${o ?? "team"}`;
      break e;
    }
    if (i.length === 1) {
      let T;
      if (e[0] !== n || e[1] !== i[0]) {
        let A;
        e[3] !== i[0] ? (A = P => P.id === i[0], e[3] = i[0], e[4] = A) : A = e[4], T = n.find(A), e[0] = n, e[1] = i[0], e[2] = T;
      } else T = e[2];
      u = T?.name ?? "1 group";
      break e;
    }
    u = `${i.length} groups`;
  }
  const d = u;
  if (n.length === 0) {
    let T;
    return e[5] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (T = lvi("span", {
      className: "ui-4z9k3i ui-19aaqeu",
      children: "All Members"
    }), e[5] = T) : T = e[5], T;
  }
  let h;
  e[6] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (h = lvi(zt, {
    name: "chevron-down",
    size: "base",
    color: "secondary"
  }), e[6] = h) : h = e[6];
  let p;
  e[7] !== a || e[8] !== d ? (p = sEa(An, {
    variant: "outline",
    size: "lg",
    disabled: a,
    className: "ui-13e3tqs",
    children: [d, h]
  }), e[7] = a, e[8] = d, e[9] = p) : p = e[9];
  let g;
  e[10] !== a || e[11] !== p ? (g = lvi(hn.Trigger, {
    disabled: a,
    children: p
  }), e[10] = a, e[11] = p, e[12] = g) : g = e[12];
  const f = c > 0 ? `${c} members` : "No members";
  let _;
  e[13] !== s ? (_ = (T, I) => {
    if (!T) {
      I.cancel();
      return;
    }
    s();
  }, e[13] = s, e[14] = _) : _ = e[14];
  const b = `Everyone in ${o ?? "team"}`;
  let y;
  e[15] !== l || e[16] !== f || e[17] !== _ || e[18] !== b ? (y = lvi(hn.CheckboxItem, {
    checked: l,
    closeOnSelect: false,
    description: f,
    onChange: _,
    children: b
  }), e[15] = l, e[16] = f, e[17] = _, e[18] = b, e[19] = y) : y = e[19];
  let S;
  if (e[20] !== n || e[21] !== l || e[22] !== r || e[23] !== i) {
    let T;
    e[25] !== l || e[26] !== r || e[27] !== i ? (T = I => {
      const A = i.includes(I.id);
      return lvi(hn.CheckboxItem, {
        checked: A,
        closeOnSelect: false,
        description: I.memberCount > 0 ? `${I.memberCount} members` : "No members",
        priority: l ? "tertiary" : "primary",
        onChange: () => r(I.id),
        children: I.name
      }, String(I.id));
    }, e[25] = l, e[26] = r, e[27] = i, e[28] = T) : T = e[28], S = n.map(T), e[20] = n, e[21] = l, e[22] = r, e[23] = i, e[24] = S;
  } else S = e[24];
  let k;
  e[29] !== y || e[30] !== S ? (k = sEa(hn.Content, {
    "aria-label": "Select directory groups",
    minWidth: 288,
    maxHeight: 192,
    children: [y, S]
  }), e[29] = y, e[30] = S, e[31] = k) : k = e[31];
  let C;
  return e[32] !== k || e[33] !== g ? (C = sEa(hn, {
    children: [g, k]
  }), e[32] = k, e[33] = g, e[34] = C) : C = e[34], C;
}
function kt1(t, e) {
  return t + e.memberCount;
}
