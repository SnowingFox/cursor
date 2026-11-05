// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerHumanRowSlackMention.react.js range:30990395..30997100
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E
// wrapper-init: klw
// hoisted-owner: ComposerHumanRowTodoSummary.react.js (app-out-vs-workbench-workbench-glass-main-js:5623); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var klw = L({ "ComposerHumanRowSlackMention.react.js"() {
  "use strict";
  E();
} }), wlw = L({ "TodoSummaryStickyComponent.css"() {
} });
import { useEffect as Zwf, useId as Qwf, useRef as XMl, useState as _ys } from "./react-runtime/react/esm-index-production.js";
import { jsx as pF, jsxs as DTe, Fragment as ZMl } from "./react-runtime/react/esm-jsx-runtime-production.js";
function Clw(t) {
  return t === "in_progress" ? "todo-summary-item-content todo-in-progress" : t === "completed" ? "todo-summary-item-content todo-completed" : "todo-summary-item-content";
}
function Tlw(t, e, n) {
  return { height: t ? e !== void 0 ? `${e}px` : void 0 : `${n}px`, maxHeight: t ? "500px" : `${n}px`, overflow: "hidden", transition: "height 0.25s ease-in-out, max-height 0.25s ease-in-out" };
}
function Elw({ status: t }) {
  const e = t === "in_progress" ? { color: "var(--cursor-text-primary)", display: "block", flexShrink: 0 } : { color: "var(--vscode-foreground)", display: "block", flexShrink: 0, opacity: 0.4 }, n = pF("circle", { cx: "6", cy: "6", fill: "none", r: "5.5", stroke: "currentColor", strokeWidth: "1" });
  return pF("svg", { height: "12", style: e, viewBox: "0 0 12 12", width: "12", children: t === "in_progress" ? DTe(ZMl, { children: [pF("circle", { cx: "6", cy: "6", fill: "currentColor", r: "6" }), DTe("g", { fill: "none", stroke: "var(--vscode-editor-background)", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1", children: [pF("path", { d: "M4 6H8" }), pF("path", { d: "M6.2 4.2L8 6L6.2 7.8" })] })] }) : t === "completed" ? DTe(ZMl, { children: [n, pF("path", { d: "M3.75 6.25L5.25 7.75L8.25 4.25", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1" })] }) : n });
}
function Ilw({ percentage: t, radius: e = 5.5 }) {
  const i = Qwf().replaceAll(":", ""), r = e * 2 + 2, s = r / 2, o = e - 1 / 2 + 0.04, a = "var(--cursor-text-secondary)", l = Math.min(1, Math.max(0, t)) * 100, u = (l / 100 * 360 - 90) * Math.PI / 180, d = s + e * Math.cos(u), h = s + e * Math.sin(u), p = l > 50 ? 1 : 0;
  let g = "";
  return l === 100 ? g = `M ${s} ${s} L ${s} ${s - e} A ${e} ${e} 0 1 1 ${s} ${s + e} A ${e} ${e} 0 1 1 ${s} ${s - e} Z` : l > 0 && (g = `M ${s} ${s} L ${s} ${s - e} A ${e} ${e} 0 ${p} 1 ${d} ${h} Z`), DTe("svg", { height: r, style: { display: "block", flexShrink: 0 }, viewBox: `0 0 ${r} ${r}`, width: r, children: [pF("defs", { children: pF("clipPath", { id: i, children: pF("circle", { cx: s, cy: s, r: o }) }) }), pF("circle", { cx: s, cy: s, fill: "transparent", r: e, stroke: a, strokeWidth: 1 }), l > 0 ? pF("path", { clipPath: `url(#${i})`, d: g, fill: a }) : null] });
}
function xlw({ expanded: t }) {
  return pF("svg", { className: "todo-summary-chevron", height: "16", style: { transform: t ? "rotate(90deg)" : "rotate(0deg)" }, viewBox: "0 0 16 16", width: "16", children: pF("path", { d: "M6 4.5L10 8L6 11.5", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.25" }) });
}
function Alw({ allCompleted: t, remainingCount: e, todos: n }) {
  return DTe("div", { className: "todo-summary-list", style: { padding: "0px 0px 8px 0px" }, children: [n.map((i) => DTe("div", { className: "todo-summary-item", children: [pF("div", { className: "todo-summary-indicator-container", children: pF(Elw, { status: i.status }) }), pF("span", { className: Clw(i.status), children: i.content })] }, i.id)), e > 0 && DTe("div", { className: "todo-summary-item", children: [pF("div", { className: "todo-summary-indicator-container", children: pF("span", { className: "todo-summary-more-indicator", children: "+" }) }), DTe("span", { className: `todo-summary-item-content${t ? " todo-completed" : ""}`, children: [e, " more"] })] })] });
}
function Rlw({ isGlass: t, model: e, summary: n, topMessageHeight: i }) {
  const { onBeforeTranscriptDisclosureChange: r } = uR(), [s, o] = _ys(false), [a, l] = _ys(false), [c, u] = _ys(false), [d, h] = _ys(), p = XMl(null), g = XMl(s), f = XMl(void 0), _ = `todo-summary-${Qwf().replaceAll(":", "")}`;
  Zwf(() => {
    g.current = s;
  }, [s]), Zwf(() => () => {
    f.current !== void 0 && clearTimeout(f.current);
  }, []);
  const b = () => {
    f.current !== void 0 && clearTimeout(f.current), r?.(), g.current && p.current !== null ? h(p.current.scrollHeight) : h(void 0), f.current = setTimeout(() => {
      o((A) => !A), f.current = void 0;
    }, 0);
  }, y = (A) => {
    A.stopPropagation(), b();
  }, S = (A) => {
    (A.key === "Enter" || A.key === " ") && (A.preventDefault(), A.stopPropagation(), b());
  }, k = e.location === "bar" || t ? "var(--vscode-sideBar-background)" : "color-mix(in srgb, var(--vscode-input-background) 60%, var(--vscode-sideBar-background))", C = `color-mix(in srgb, ${k} 96%, var(--vscode-editor-background))`, T = a || s, I = n.inProgressTodo !== void 0 ? n.inProgressTodo.content : n.completedCount > 0 ? `${n.completedCount} of ${n.totalCount} To-dos Completed` : `${n.totalCount} To-dos`;
  return DTe("div", { className: "todo-summary-sticky-container", "data-composer-human-todo-summary": true, onMouseEnter: () => u(true), onMouseLeave: () => u(false), ref: p, style: { "--todo-summary-surface-background": c ? C : k, backgroundColor: c ? C : k, boxSizing: "border-box", height: s ? d !== void 0 ? `${d}px` : void 0 : `${i + bys}px`, maxHeight: s ? "700px" : void 0, overflow: "hidden" }, children: [pF("div", { "aria-hidden": "true", className: "todo-summary-empty-line", style: { height: `${i}px`, opacity: 0 } }), DTe("div", { style: Tlw(s, d, bys), children: [DTe("div", { "aria-controls": _, "aria-expanded": s, "aria-label": `To-do summary: ${I}`, className: "todo-summary-content todo-summary-content-clickable", onClick: y, onKeyDown: S, onMouseEnter: () => l(true), onMouseLeave: () => l(false), role: "button", style: { height: `${bys}px` }, tabIndex: 0, children: [pF("div", { className: "todo-summary-icon-slot", children: T ? pF(xlw, { expanded: s }) : n.allCompleted ? pF("span", { "aria-hidden": true, className: "codicon codicon-check-circled", style: t0f }) : pF(Ilw, { percentage: n.progress, radius: 5.5 }) }), n.inProgressTodo === void 0 ? pF("span", { className: "todo-summary-text", children: I }) : DTe(ZMl, { children: [pF("span", { style: Jwf, children: n.inProgressTodo.content }), DTe("span", { style: e0f, children: [n.completedCount + 1, "/", n.totalCount] })] })] }), s && pF("div", { className: "todo-summary-expanded-content expanded", id: _, style: { backgroundColor: c ? C : k }, children: pF(Alw, { allCompleted: n.allCompleted, remainingCount: n.remainingCount, todos: n.displayTodos }) })] })] });
}
var bys, Jwf, e0f, t0f, 