// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ParameterValueNewStatus.js range:16634915..16641888
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.853Z
var aXS = L({ "ParameterValueNewStatus.js"() {
  "use strict";
  E(), Dfi(), ACa(), $he(), O9r();
} });
import { jsx as qhe, jsxs as lXS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as zfi } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Vfi(t) {
  const e = [];
  for (const n of t) {
    const i = n.parameterType?.booleanParameter;
    if (i !== void 0) {
      const s = i.values !== void 0 && i.values.length > 0 ? i.values : [{ value: "true" }, { value: "false" }];
      e.push({ kind: "boolean", id: n.id, name: n.name, markdownTooltip: n.markdownTooltip, values: s.map((o) => ({ value: o.value, displayName: o.displayName ?? (o.value === "true" ? "On" : "Off"), blockedByAdminAllowlist: o.blockedByAdminAllowlist })) });
      continue;
    }
    const r = n.parameterType?.enumParameter;
    r !== void 0 && e.push({ kind: "enum", id: n.id, name: n.name, markdownTooltip: n.markdownTooltip, values: r.values.map((s) => ({ value: s.value, displayName: s.displayName ?? s.value, markdownTooltip: s.markdownTooltip, modelPickerBadges: s.modelPickerBadges, blockedByAdminAllowlist: s.blockedByAdminAllowlist })) });
  }
  return e;
}
function Flp(t, e) {
  const n = e === "true", i = n ? "false" : "true", r = ykn(t.values.find((l) => l.value === i) ?? {}), s = ykn(t.values.find((l) => l.value === e) ?? {}), o = r || s, a = o ? A0a : t.markdownTooltip;
  return { isEnabled: n, nextValue: i, isBlocked: o, paramTooltip: a };
}
function RCa(t) {
  const e = zfi(18), { parameter: n, currentValue: i, onValueChange: r } = t;
  let s;
  e[0] !== i || e[1] !== n ? (s = Flp(n, i), e[0] = i, e[1] = n, e[2] = s) : s = e[2];
  const { isEnabled: o, nextValue: a, isBlocked: l, paramTooltip: c } = s;
  let u;
  e[3] !== l || e[4] !== a || e[5] !== r ? (u = () => {
    l || r(a);
  }, e[3] = l, e[4] = a, e[5] = r, e[6] = u) : u = e[6];
  let d;
  e[7] !== c ? (d = c ? () => qhe(N4, { children: c }) : void 0, e[7] = c, e[8] = d) : d = e[8];
  let h;
  e[9] !== l ? (h = l ? qhe("span", { className: "ui-4so5ww", children: qhe(zt, { name: "lock", size: "sm", className: "ui-model-picker__param-lock" }) }) : void 0, e[9] = l, e[10] = h) : h = e[10];
  let p;
  return e[11] !== l || e[12] !== o || e[13] !== n.name || e[14] !== u || e[15] !== d || e[16] !== h ? (p = qhe(cl.SwitchItem, { checked: o, disabled: l, onChange: u, label: n.name, tooltip: d, trailing: h, children: n.name }), e[11] = l, e[12] = o, e[13] = n.name, e[14] = u, e[15] = d, e[16] = h, e[17] = p) : p = e[17], p;
}
function Blp(t) {
  const e = zfi(13), { modelId: n, parameterId: i, values: r, onValueChange: s } = t, { hasSeenDismissibleParameterBadge: o, markDismissibleParameterBadgesSeen: a } = nw();
  let l;
  if (e[0] !== o || e[1] !== a || e[2] !== n || e[3] !== s || e[4] !== i || e[5] !== r) {
    let c;
    e[7] !== o || e[8] !== a || e[9] !== n || e[10] !== s || e[11] !== i ? (c = (u) => {
      const d = ykn(u), h = d ? A0a : u.markdownTooltip, p = d ? [] : Mfi(u.modelPickerBadges).filter((S) => !iwt(S) || !o(n, i, u.value, S)), g = p.some(iwt), f = h !== void 0 || p.length > 0;
      return { value: u, isBlocked: d, showDismissibleBadgeDot: g && !d, tooltip: f ? () => qhe(sXS, { badges: p, markdown: h }) : void 0, select: () => {
        d || (g && a(n, i, u.value, u.modelPickerBadges), s(u.value));
      } };
    }, e[7] = o, e[8] = a, e[9] = n, e[10] = s, e[11] = i, e[12] = c) : c = e[12], l = r.map(c), e[0] = o, e[1] = a, e[2] = n, e[3] = s, e[4] = i, e[5] = r, e[6] = l;
  } else l = e[6];
  return l;
}
function PCa(t) {
  const e = zfi(14), { modelId: n, parameterId: i, values: r, currentValue: s, onValueChange: o, closeOnSelect: a, selectionAppearance: l } = t, c = l === void 0 ? "indicator" : l;
  let u;
  e[0] !== n || e[1] !== o || e[2] !== i || e[3] !== r ? (u = { modelId: n, parameterId: i, values: r, onValueChange: o }, e[0] = n, e[1] = o, e[2] = i, e[3] = r, e[4] = u) : u = e[4];
  const d = Blp(u);
  let h;
  if (e[5] !== a || e[6] !== s || e[7] !== d || e[8] !== c) {
    let p;
    e[10] !== a || e[11] !== s || e[12] !== c ? (p = (g) => {
      const { value: f, isBlocked: _, showDismissibleBadgeDot: b, tooltip: y, select: S } = g;
      return qhe(cl.Item, { disabled: _, closeOnSelect: a, selected: c === "indicator-and-background" && s === f.value ? true : void 0, onSelect: S, tooltip: y, trailing: b || _ || s === f.value ? qhe(rXS, { showDismissibleBadgeDot: b, children: _ ? qhe(zt, { name: "lock", size: "sm", className: "ui-model-picker__param-lock" }) : s === f.value ? qhe(zt, { name: "check", size: "sm", className: "ui-model-picker__param-check" }) : null }) : void 0, children: f.displayName }, f.value);
    }, e[10] = a, e[11] = s, e[12] = c, e[13] = p) : p = e[13], h = d.map(p), e[5] = a, e[6] = s, e[7] = d, e[8] = c, e[9] = h;
  } else h = e[9];
  return h;
}
function cXS(t) {
  const e = zfi(26), { modelId: n, parameter: i, currentValue: r, onValueChange: s, open: o, onOpenChange: a } = t;
  let l;
  e[0] !== n || e[1] !== s || e[2] !== i.id || e[3] !== i.values ? (l = { modelId: n, parameterId: i.id, values: i.values, onValueChange: s }, e[0] = n, e[1] = s, e[2] = i.id, e[3] = i.values, e[4] = l) : l = e[4];
  const c = Blp(l);
  let u;
  e[5] !== r || e[6] !== c ? (u = c.find((k) => k.value.value === r)?.value.displayName, e[5] = r, e[6] = c, e[7] = u) : u = e[7];
  const d = u;
  let h;
  e[8] !== d || e[9] !== i.name ? (h = qhe(hn.SubMenuTrigger, { children: qhe(Plp, { label: i.name, caption: d, captionTitle: d }) }), e[8] = d, e[9] = i.name, e[10] = h) : h = e[10];
  const p = `${i.name} options`, g = r ?? "";
  let f, _;
  e[11] !== c ? (f = (k) => c.find((C) => C.value.value === k)?.select(), _ = c.map(uXS), e[11] = c, e[12] = f, e[13] = _) : (f = e[12], _ = e[13]);
  let b;
  e[14] !== g || e[15] !== f || e[16] !== _ ? (b = qhe(hn.RadioGroup, { value: g, onValueChange: f, children: _ }), e[14] = g, e[15] = f, e[16] = _, e[17] = b) : b = e[17];
  let y;
  e[18] !== p || e[19] !== b ? (y = qhe(hn.SubMenuContent, { "aria-label": p, children: b }), e[18] = p, e[19] = b, e[20] = y) : y = e[20];
  let S;
  return e[21] !== a || e[22] !== o || e[23] !== h || e[24] !== y ? (S = lXS(hn.SubMenu, { open: o, onOpenChange: a, children: [h, y] }), e[21] = a, e[22] = o, e[23] = h, e[24] = y, e[25] = S) : S = e[25], S;
}
function uXS(t) {
  return qhe(hn.RadioItem, { value: t.value.value, disabled: t.isBlocked, tooltip: t.tooltip, leading: t.showDismissibleBadgeDot ? qhe(xCa, { testId: "parameter-value-dismissible-dot" }) : void 0, children: t.value.displayName }, t.value.value);
}
function MCa(t) {
  const e = zfi(4), { setModelParameter: n, onInteraction: i } = nw();
  let r;
  return e[0] !== t || e[1] !== i || e[2] !== n ? (r = (s) => {
    const { parameterId: o, value: a } = s;
    n(t, o, a), i?.({ kind: "variantSelected", modelId: t, parameterId: o, value: a });
  }, e[0] = t, e[1] = i, e[2] = n, e[3] = r) : r = e[3], r;
}
