// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SelectionTooltip.js range:18206243..18207963
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.260Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, use-latest-ref.js, codicon.js, RichTextEditorContext.js, selection-utils.js, tooltip.js, PriorityToggleIconButton.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, use-latest-ref.js, codicon.js, RichTextEditorContext.js, selection-utils.js, tooltip.js, PriorityToggleIconButton.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
BPa = L({ "SelectionTooltip.js"() {
  "use strict";
  E(), Fy(), dnh(), gE(), v_e(), fvp(), joe(), H1t(), ebi(), kIp(), Aw(), wAr(), hL(), I9r(), FPa = 100, RIp = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), AIp.createKeybindingsExtension = _01;
} });
import { jsx as k01 } from "./react-runtime/react/esm-jsx-runtime-production.js";
function UPa(t) {
  const e = t.schema.marks.link;
  if (!e) return null;
  const { selection: n } = t.state;
  if (!(n instanceof Q_)) return null;
  let i = null;
  return t.state.doc.nodesBetween(n.from, n.to, (r, s) => {
    if (i !== null) return false;
    const o = r.marks.find((c) => c.type === e);
    if (!o) return true;
    const a = sli(t.state.doc.resolve(s), e), l = o.attrs.href;
    return i = { from: a?.from ?? s, to: a?.to ?? s + r.nodeSize, href: typeof l == "string" ? l : "" }, false;
  }), i;
}
function PIp(t, e, n) {
  const i = () => {
    e?.();
  };
  t.on("beforeTransaction", i);
  try {
    return n();
  } finally {
    t.off("beforeTransaction", i);
  }
}
function w01(t, e, n) {
  return e.isEditable ? PIp(e, n, () => t(e)) : false;
}
function C01({ actions: t, onUserFormattingAction: e, openLinkEditor: n }) {
  const i = t ?? jPa.map((r) => r.mark);
  return jPa.filter((r) => i.includes(r.mark) && (r.mark !== "link" || n !== null)).map((r) => {
    const s = r.toggle;
    return wIp({ key: `format-${r.mark}`, label: r.label, icon: r.icon, shortcut: r.shortcut, keybinding: r.keybinding, group: r.group, presentation: "icon-only", isActive: r.isActive ?? ((o) => o.isActive(r.mark)), execute: (o) => s ? w01(s, o, e) : o.isEditable && (n?.(o) ?? false), selectionBehavior: "preserve" });
  });
}
var C6e, v0n, jPa, 