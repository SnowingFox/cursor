// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MarkdownFrontmatterPanel.react.js range:33706080..33708208
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, lee, AZt, nKf, Y4w, i9w, r9w
// wrapper-init: S9w
// hoisted-owner: knownFrontmatterKeys.js (app-out-vs-workbench-workbench-glass-main-js:6284); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

S9w = L({ "MarkdownFrontmatterPanel.react.js"() {
  "use strict";
  E(), Mt(), lee(), AZt(), nKf(), Y4w(), i9w(), r9w(), _Kf = s9w.memo(function({ entryKey: e, value: n, kind: i, dropIndicator: r, dispatch: s, existingKeys: o, onChangeType: a, onCut: l, onCopy: c, onPaste: u, isDuplicateKey: d, setTextProperty: h, endTextEdit: p, keyDescription: g }) {
    const { attributes: f, listeners: _, setNodeRef: b, isDragging: y } = ACs({ id: e, disabled: d }), { role: S, ...k } = f, C = "Duplicate key in markdown source. Edit the raw frontmatter to resolve this before using preview controls.", T = PZt(() => QVf(n, i), [i, n]), I = e5((N) => {
      s({ type: "rename", currentKey: e, nextKey: N });
    }, [s, e]), A = e5((N) => {
      s({ type: "set", key: e, value: N });
    }, [s, e]), P = e5((N) => {
      h(e, N);
    }, [e, h]), M = e5(() => {
      p(e);
    }, [p, e]), O = FG("div", { className: "fm-row", "data-dragging": y || void 0, "data-drop-indicator": r || void 0, "data-readonly": d || void 0, ref: b, children: [FG("div", { className: "fm-row__label", children: [d ? FG("span", { className: "fm-row__handle fm-row__handle-group", children: [pv(ho, { "aria-label": `${e} has duplicate frontmatter keys`, className: "fm-row__handle-button", disabled: true, icon: v9w(i), size: "sm" }), pv("span", { "aria-hidden": true, className: "fm-row__drag-handle-placeholder" })] }) : pv(g9w, { dragAttributes: k, dragListeners: _, isDragging: y, kind: i, onChangeType: (N) => a(e, N), onCopy: () => c(e), onCut: () => l(e), onPaste: () => u(e), onRemove: () => s({ type: "remove", key: e }), propertyKey: e }), d ? pv("span", { className: "fm-key", children: e }) : pv(d9w, { description: g, existingKeys: o, onChange: I, value: e })] }), pv("div", { className: "fm-row__value", children: d ? pv("span", { className: "fm-readonly-value", children: T || "Empty" }) : pv(f9w, { kind: i, onEndTextEdit: M, onSetTextValue: P, onSetValue: A, propertyKey: e, value: n }) })] });
    return d ? pv(xs, { content: C, placement: "top", children: O }) : O;
  }), bKf = { x: 0, y: 0, scaleX: 1, scaleY: 1 }, yKf = [];
} }), SKf, 