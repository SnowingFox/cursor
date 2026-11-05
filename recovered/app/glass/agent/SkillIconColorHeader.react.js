// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SkillIconColorHeader.react.js range:33692529..33706080
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.263Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, SkillIconColorHeader.css
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, SkillIconColorHeader.css
// path-candidate: none (no nls basename match; path inferred, confidence C)
i9w = L({ "SkillIconColorHeader.react.js"() {
  "use strict";
  E(), Mt(), X4w(), pKf = "lightning", mKf = "default", gKf = ["default", "green", "cyan", "blue", "purple", "magenta", "orange", "yellow", "red", "brand"], fKf = new Set(gKf), vKf = new Set(LHe);
} }), r9w = L({ "MarkdownFrontmatterPanel.css"() {
} });
import s9w, { useCallback as e5, useEffect as MCs, useMemo as PZt, useRef as FLi, useState as NKe } from "./react-runtime/react/esm-index-production.js";
import { jsx as pv, jsxs as FG, Fragment as o9w } from "./react-runtime/react/esm-jsx-runtime-production.js";
function a9w(t) {
  return t < 1024 ? `${t}B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(1)}KB` : `${(t / (1024 * 1024)).toFixed(1)}MB`;
}
function l9w({ onCommit: t, onDelete: e, existingKeys: n }) {
  const [i, r] = NKe(""), s = FLi(null), o = FLi(false), a = i.trim().length > 0 && n.has(i.trim());
  MCs(() => {
    s.current?.focus();
  }, []);
  const l = e5(() => {
    if (o.current) return;
    const c = i.trim();
    c.length > 0 && n.has(c) || (o.current = true, c.length === 0 ? e() : t(c));
  }, [i, n, t, e]);
  return FG("div", { className: "fm-new-key", children: [pv("input", { "aria-invalid": a || void 0, className: "fm-key fm-key--editing", onBlur: l, onChange: (c) => r(c.target.value), onKeyDown: (c) => {
    c.key === "Enter" && (c.preventDefault(), l()), c.key === "Escape" && (c.preventDefault(), o.current = true, e());
  }, placeholder: "", ref: s, type: "text", value: i }), a && pv("span", { className: "fm-new-key__error", children: "Property already exists" })] });
}
function c9w({ value: t, onChange: e, onEndEdit: n, placeholder: i }) {
  const r = FLi(null), s = e5(() => {
    const u = r.current;
    u && (u.style.height = "0", u.style.height = `${u.scrollHeight}px`);
  }, []);
  MCs(() => {
    s();
  }, [s, t]);
  const o = e5((u) => {
    u !== t && e(u);
  }, [e, t]), a = e5((u) => {
    o(u.target.value);
  }, [o]), l = e5(() => {
    o(t), n();
  }, [o, n, t]), c = e5((u) => {
    u.key === "Enter" && !u.shiftKey && (u.preventDefault(), o(t), n(), r.current?.blur());
  }, [o, n, t]);
  return pv("textarea", { className: "fm-value-input", onBlur: l, onChange: a, onInput: s, onKeyDown: c, placeholder: i, ref: r, rows: 1, value: t });
}
function u9w({ value: t, onCommit: e, placeholder: n }) {
  const i = t === "" ? "" : String(typeof t == "number" ? t : ""), [r, s] = NKe(i);
  MCs(() => {
    s(i);
  }, [i]);
  const o = e5(() => {
    if (r === "") {
      t !== "" && e("");
      return;
    }
    const a = Number(r);
    Number.isFinite(a) && a !== t ? e(a) : s(i);
  }, [r, i, t, e]);
  return pv("input", { className: "fm-value-input fm-native-undo-input", onBlur: o, onChange: (a) => s(a.target.value), onKeyDown: (a) => {
    a.key === "Enter" && (a.preventDefault(), o());
  }, placeholder: n, type: "number", value: r });
}
function d9w({ value: t, onChange: e, existingKeys: n, description: i }) {
  const [r, s] = NKe(false), [o, a] = NKe(t), l = FLi(null), c = o.trim(), u = r && c.length > 0 && c !== t && n.has(c), d = e5(() => {
    a(t), s(true), requestAnimationFrame(() => {
      l.current?.focus();
    });
  }, [t]), h = e5(() => {
    const p = o.trim();
    p.length > 0 && p !== t && n.has(p) || (s(false), p.length > 0 && p !== t ? e(p) : a(t));
  }, [o, n, e, t]);
  if (!r) {
    const p = pv("span", { className: "fm-key", onClick: d, children: t });
    return i ? pv(xs, { content: i, placement: "top", children: p }) : p;
  }
  return FG("div", { className: "fm-new-key", children: [pv("input", { "aria-invalid": u || void 0, className: "fm-key fm-key--editing", onBlur: h, onChange: (p) => a(p.target.value), onKeyDown: (p) => {
    p.key === "Enter" && (p.preventDefault(), h()), p.key === "Escape" && (a(t), s(false));
  }, ref: l, type: "text", value: o }), u && pv("span", { className: "fm-new-key__error", children: "Property already exists" })] });
}
function h9w({ values: t, onChange: e }) {
  const [n, i] = NKe(""), r = e5(() => {
    const o = n.trim();
    o.length !== 0 && (e([...t, o]), i(""));
  }, [n, e, t]), s = e5((o) => {
    e(t.filter((a, l) => l !== o));
  }, [e, t]);
  return FG("div", { className: "fm-tags", children: [t.map((o, a) => {
    const l = t.slice(0, a).filter((c) => c === o).length;
    return pv(dR, { color: "secondary", onClose: () => s(a), size: "md", variant: "filled", children: o }, `${o}-${l}`);
  }), pv("input", { className: "fm-tags__input", onBlur: r, onChange: (o) => i(o.target.value), onKeyDown: (o) => {
    o.key === "Enter" && (o.preventDefault(), r()), o.key === "Backspace" && n === "" && t.length > 0 && s(t.length - 1);
  }, placeholder: t.length === 0 ? "Empty" : "", value: n })] });
}
function p9w({ value: t, onChange: e }) {
  const n = t instanceof Date ? t : /* @__PURE__ */ new Date(), i = fjl(n);
  return pv("span", { className: "fm-date-wrap", children: pv("input", { className: "fm-value-input fm-value-input--date", onChange: (r) => {
    const [s, o, a] = r.target.value.split("-").map((c) => Number(c)), l = new Date(Date.UTC(s, o - 1, a));
    Number.isNaN(l.getTime()) || e(l);
  }, type: "date", value: i }) });
}
function m9w({ value: t, onChange: e }) {
  const n = t instanceof Date ? t : /* @__PURE__ */ new Date(), i = ZVf(n);
  return pv("span", { className: "fm-date-wrap", children: pv("input", { className: "fm-value-input fm-value-input--date", onChange: (r) => {
    const s = new Date(r.target.value);
    Number.isNaN(s.getTime()) || e(s);
  }, type: "datetime-local", value: i }) });
}
function g9w({ propertyKey: t, kind: e, onChangeType: n, onRemove: i, onCut: r, onCopy: s, onPaste: o, isDragging: a, dragListeners: l, dragAttributes: c }) {
  const [u, d] = NKe(false), h = e === "unsupported" ? "question-circle" : OLi(e).icon, p = e5((_) => {
    d(false), _();
  }, []), g = e === "unsupported" ? void 0 : e, f = e5((_) => {
    p(() => n(_));
  }, [n, p]);
  return FG("span", { className: "fm-row__handle fm-row__handle-group", children: [FG(hn, { onOpenChange: d, open: u, children: [pv(hn.Trigger, { children: pv(ho, { "aria-label": `${t} options`, className: "fm-row__handle-button", "data-menu-open": u || void 0, icon: h, size: "sm" }) }), FG(hn.Content, { "aria-label": "Property options", children: [pv(hn.Section, { children: FG(hn.SubMenu, { children: [pv(hn.SubMenuTrigger, { children: "Change type" }), pv(hn.SubMenuContent, { "aria-label": "Change type", children: pv(hn.RadioGroup, { "aria-label": "Change type", onValueChange: f, value: g, children: vjl.map((_) => pv(hn.RadioItem, { closeOnSelect: true, leading: pv(zt, { "aria-hidden": true, name: _.icon }), value: _.kind, children: _.label }, _.kind)) }) })] }) }), FG(hn.Section, { children: [pv(hn.Item, { onSelect: () => p(r), children: "Cut" }), pv(hn.Item, { onSelect: () => p(s), children: "Copy" }), pv(hn.Item, { onSelect: () => p(o), children: "Paste" })] }), pv(hn.Section, { children: pv(hn.Item, { onSelect: () => p(i), children: "Remove" }) })] })] }), pv("span", { className: "fm-row__drag-handle", children: pv(ho, { "aria-label": `Drag ${t}`, className: "fm-row__handle-button", "data-dragging": a || void 0, icon: "gripper", size: "sm", ...l, ...c }) })] });
}
function f9w({ kind: t, propertyKey: e, value: n, onSetValue: i, onSetTextValue: r, onEndTextEdit: s }) {
  switch (t) {
    case "string":
      return pv(c9w, { onChange: r, onEndEdit: s, placeholder: "Empty", value: typeof n == "string" ? n : "" });
    case "number":
      return pv(u9w, { onCommit: i, placeholder: "Empty", value: n });
    case "boolean":
      return pv("label", { className: "fm-checkbox", children: pv(G5, { "aria-label": e, checked: typeof n == "boolean" ? n : false, onCheckedChange: (o) => i(o), size: "sm" }) });
    case "stringArray":
      return pv(h9w, { onChange: (o) => i(o), values: Array.isArray(n) ? n.filter((o) => typeof o == "string") : [] });
    case "date":
      return pv(p9w, { onChange: i, value: n });
    case "datetime":
      return pv(m9w, { onChange: i, value: n });
    case "unsupported": {
      const a = n instanceof Uint8Array || typeof Buffer < "u" && Buffer.isBuffer(n) ? `Binary data ${a9w(n.byteLength)}` : JSON.stringify(n);
      return pv(xs, { content: pv("span", { style: { whiteSpace: "nowrap" }, children: "Unsupported type. Exit preview to edit." }), placement: "top", children: pv("span", { className: "fm-unsupported", children: a }) });
    }
    default:
      return t;
  }
}
function v9w(t) {
  return t === "unsupported" ? "question-circle" : OLi(t).icon;
}
function _9w({ entryKey: t, kind: e, value: n, width: i }) {
  const r = PZt(() => QVf(n, e), [e, n]);
  return FG("div", { className: "fm-row fm-row--drag-preview", style: i ? { width: i } : void 0, children: [FG("div", { className: "fm-row__label", children: [pv(zt, { "aria-hidden": true, className: "fm-row__drag-preview-icon", name: "gripper", size: "sm" }), pv("span", { className: "fm-key", children: t })] }), pv("div", { className: "fm-row__value", children: pv("span", { className: "fm-drag-preview-value", children: r || "Empty" }) })] });
}
function b9w() {
  return bKf;
}
function y9w({ frontmatter: t, duplicateKeys: e = yKf, onChange: n, clipboardService: i, hiddenKeys: r, onUndoableAction: s, undoHandleRef: o, showSkillHeader: a = false, knownKeys: l }) {
  const [c, u] = NKe(false), [d, h] = NKe(null), [p, g] = NKe(null), [f, _] = NKe(void 0), b = FLi(null), { entries: y, keys: S, keyIndexMap: k, labelColumnWidth: C, dispatch: T, changeType: I, cutProperty: A, copyProperty: P, pasteProperty: M, setTextProperty: O, endTextEdit: N, undo: U, redo: j } = K4w(t, n, i, s);
  MCs(() => (o && (o.current = { undo: U, redo: j }), () => {
    o && (o.current = null);
  }), [o, U, j]);
  const $ = e5((ae) => {
    O("name", ae);
  }, [O]), H = e5(() => {
    N("name");
  }, [N]), G = e5((ae) => {
    const de = t9w(t, ae);
    de && T({ type: "set", key: de.key, value: de.value });
  }, [T, t]), q = PZt(() => new Set(S), [S]), K = PZt(() => new Set(e), [e]), V = PZt(() => new Map((l ?? []).map((ae) => [ae.key, ae.description])), [l]), Y = PZt(() => (l ?? []).filter((ae) => !q.has(ae.key)), [l, q]), J = e5((ae) => {
    T({ type: "add", key: ae.key, value: YVf(ae.kind) });
  }, [T]), Q = e5((ae) => {
    u(false), T({ type: "add", key: ae, value: "" });
  }, [T]), te = e5(() => {
    u(false);
  }, []), ee = e5(() => {
    u(true);
  }, []), re = IRl(ERl(uDn, { activationConstraint: { distance: 5 } })), ie = e5((ae) => {
    h(String(ae.active.id)), g(null), _(b.current?.offsetWidth);
  }, []), oe = e5((ae) => {
    g(ae.over?.id ? String(ae.over.id) : null);
  }, []), se = e5((ae) => {
    h(null), g(null), _(void 0);
    const { active: de, over: he } = ae;
    if (!he || de.id === he.id) return;
    const ge = k.get(String(de.id)) ?? -1, pe = k.get(String(he.id)) ?? -1;
    ge === -1 || pe === -1 || T({ type: "reorder", reorderedKeys: ECs([...S], ge, pe) });
  }, [S, k, T]), le = e5(() => {
    h(null), g(null), _(void 0);
  }, []), ce = PZt(() => ({ "--fm-label-width": C }), [C]);
  return FG(o9w, { children: [a && pv(n9w, { frontmatter: t, onIconColorChange: G, onNameChange: $, onNameCommit: H }), pv(zY, { action: "Properties", className: "fm-panel", contentClassName: "fm-panel__body", defaultOpen: true, children: FG("div", { ref: b, style: ce, children: [FG(Z_s, { collisionDetection: pxt, onDragCancel: le, onDragEnd: se, onDragOver: oe, onDragStart: ie, sensors: re, children: [pv(xCs, { items: S, strategy: b9w, children: y.map(([ae, de]) => {
    if (r?.has(ae)) return null;
    const he = gjl(de);
    let ge;
    if (d && p && p === ae && d !== ae) {
      const pe = k.get(d) ?? -1, ve = k.get(ae) ?? -1;
      ge = pe < ve ? "after" : "before";
    }
    return pv(_Kf, { dispatch: T, dropIndicator: ge, endTextEdit: N, entryKey: ae, existingKeys: q, isDuplicateKey: K.has(ae), keyDescription: V.get(ae), kind: he, onChangeType: I, onCopy: P, onCut: A, onPaste: M, setTextProperty: O, value: de }, ae);
  }) }), pv(MMi, { dropAnimation: null, children: d != null && t[d] !== void 0 ? pv(_9w, { entryKey: d, kind: gjl(t[d]), value: t[d], width: f }) : null })] }), c && FG("div", { className: "fm-row", children: [FG("div", { className: "fm-row__label", children: [FG("span", { className: "fm-row__handle fm-row__handle-group", children: [pv(ho, { "aria-label": "Text property", className: "fm-row__handle-button", disabled: true, icon: "paragraph", size: "sm" }), pv("span", { "aria-hidden": true, className: "fm-row__drag-handle-placeholder" })] }), pv(l9w, { existingKeys: q, onCommit: Q, onDelete: te })] }), pv("div", { className: "fm-row__value", children: pv("input", { className: "fm-value-input", disabled: true, placeholder: "Empty", value: "" }) })] }), Y.length > 0 ? FG(hn, { children: [pv(hn.Trigger, { children: pv(An, { className: "fm-add-button", size: "sm", variant: "text", leadingIcon: "plus", children: "Add property" }) }), FG(hn.Content, { "aria-label": "Add property", children: [pv(hn.Section, { children: Y.map((ae) => pv(hn.Item, { description: ae.description, leading: pv(zt, { "aria-hidden": true, name: OLi(ae.kind).icon }), onSelect: () => J(ae), children: ae.key }, ae.key)) }), pv(hn.Section, { children: pv(hn.Item, { leading: pv(zt, { "aria-hidden": true, name: "pencil" }), onSelect: ee, children: "Custom property" }) })] })] }) : pv(An, { className: "fm-add-button", onClick: ee, size: "sm", variant: "text", leadingIcon: "plus", children: "Add property" })] }) })] });
}
var _Kf, bKf, yKf, 