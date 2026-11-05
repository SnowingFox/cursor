// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LegacyModelItem.js range:16669951..16673314
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.101Z
// wrapper: LegacyModelItemModule deps:12 [E, ijt, JY, B0a, ICa, Ukn, $he, aJ, P0, Wj, s2e, Elp]
// declarations: LegacyModelItemModule, OCa, L8r, NXS, LXS, OXS
// anchors: esm-jsx-runtime-production, esm-compiler-runtime-production, model-selection-restriction-notice, routed-model-to-named-view-button
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var LegacyModelItemModule = L({
  "LegacyModelItem.js"() {
    "use strict";

    E(), ijt(), JY(), B0a(), ICa(), Ukn(), $he(), aJ(), P0(), Wj(), s2e(), Elp();
  }
});
import { jsx as o6e } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as N8r } from "./react-runtime/react/esm-compiler-runtime-production.js";
function OCa() {
  const t = N8r(4),
    {
      displayConfiguration: e
    } = nw();
  let n;
  t[0] !== e ? (n = d8r(e), t[0] = e, t[1] = n) : n = t[1];
  const i = n;
  if (i === void 0) return null;
  let r;
  return t[2] !== i ? (r = o6e(cl.Section, {
    children: o6e("div", {
      role: "note",
      className: "ui-f6zju3 ui-yupq46 ui-cnij5n ui-1xc7y5k ui-4b2ntj ui-fifm61 ui-1d3mw78 ui-20ajya ui-eaf4i8",
      "data-testid": "model-selection-restriction-notice",
      children: i
    })
  }), t[2] = i, t[3] = r) : r = t[3], r;
}
function L8r(t) {
  const e = N8r(6),
    {
      onAddModels: n
    } = t,
    {
      showAllModels: i,
      defaultVisibleModelIds: r,
      onInteraction: s,
      displayConfiguration: o
    } = nw();
  if (!(!!n && !O0a(o) && !(r !== void 0 && !i))) return null;
  let l;
  e[0] !== n || e[1] !== s ? (l = () => {
    n?.(), s?.({
      kind: "addModelsRequested"
    });
  }, e[0] = n, e[1] = s, e[2] = l) : l = e[2];
  let c;
  e[3] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (c = o6e("span", {
    className: "ui-19aaqeu",
    children: "Add Models"
  }), e[3] = c) : c = e[3];
  let u;
  return e[4] !== l ? (u = o6e(cl.Section, {
    children: o6e(cl.Item, {
      onSelect: l,
      children: c
    })
  }), e[4] = l, e[5] = u) : u = e[5], u;
}
function NXS() {
  const t = N8r(12),
    {
      enterNamedModelsView: e,
      displayConfiguration: n,
      onInteraction: i
    } = nw();
  let r, s;
  t[0] !== n ? (r = gVS(n), s = fae(r), t[0] = n, t[1] = r, t[2] = s) : (r = t[1], s = t[2]);
  const o = s;
  if (r == null) return null;
  let a;
  t[3] !== e || t[4] !== i ? (a = () => {
    e(), i?.({
      kind: "viewChanged",
      from: "routed",
      to: "named"
    });
  }, t[3] = e, t[4] = i, t[5] = a) : a = t[5];
  let l;
  t[6] !== r ? (l = o6e(N4, {
    children: r
  }), t[6] = r, t[7] = l) : l = t[7];
  let c;
  return t[8] !== o || t[9] !== a || t[10] !== l ? (c = o6e(cl.Section, {
    children: o6e(cl.Item, {
      label: o,
      onSelect: a,
      closeOnSelect: false,
      "data-testid": "routed-model-to-named-view-button",
      children: l
    })
  }), t[8] = o, t[9] = a, t[10] = l, t[11] = c) : c = t[11], c;
}
function LXS() {
  const t = N8r(8),
    {
      enterRoutedModelView: e,
      displayConfiguration: n,
      onInteraction: i
    } = nw(),
    {
      listRef: r
    } = r6e(),
    s = _VS(n);
  let o;
  t[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (o = fae("Auto"), t[0] = o) : o = t[0];
  const a = o;
  if (s == null) return null;
  let l;
  t[1] !== e || t[2] !== r || t[3] !== i ? (l = () => {
    e(), requestAnimationFrame(() => {
      r.current.find(OXS)?.focus({
        preventScroll: true
      });
    }), i?.({
      kind: "viewChanged",
      from: "named",
      to: "routed"
    });
  }, t[1] = e, t[2] = r, t[3] = i, t[4] = l) : l = t[4];
  let c;
  t[5] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (c = o6e(zt, {
    name: "chevron-right",
    color: "tertiary"
  }), t[5] = c) : c = t[5];
  let u;
  return t[6] !== l ? (u = o6e(cl.Section, {
    children: o6e(cl.Item, {
      label: a,
      onSelect: l,
      closeOnSelect: false,
      trailing: c,
      "data-testid": "named-view-to-routed-model-view",
      children: "Auto"
    })
  }), t[6] = l, t[7] = u) : u = t[7], u;
}
function OXS(t) {
  return t instanceof HTMLElement;
}
