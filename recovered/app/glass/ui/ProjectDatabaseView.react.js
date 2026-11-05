// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProjectDatabaseView.react.js range:33755945..33760925
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.924Z
var uYf = L({ "ProjectDatabaseView.react.js"() {
  "use strict";
  E(), Mt(), $Cs(), DKf(), kjl(), rBw(), cBw(), OCs();
} });
import { memo as fBw, useEffect as vBw, useMemo as Ljl, useState as _Bw } from "./react-runtime/react/esm-index-production.js";
import { jsx as FZt, jsxs as NNn } from "./react-runtime/react/esm-jsx-runtime-production.js";
function bBw(t) {
  return t.length === 0 ? null : t.reduce((e, n) => typeof n == "number" ? `${e}[${n}]` : e.length === 0 ? n : `${e}.${n}`, "");
}
function yBw(t) {
  const e = t.line === void 0 || t.column === void 0 ? null : `line ${t.line}, column ${t.column}`, n = bBw(t.path);
  return [e, n, t.message].filter(Boolean).join(": ");
}
function SBw({ diagnostics: t }) {
  const e = t.slice(0, pYf), n = t.length - e.length;
  return NNn("div", { "data-project-database-invalid": true, role: "alert", className: "glass-78zum5 glass-dt5ytf glass-11twubx glass-19snzy6 glass-14q74kp glass-1t8xvyj glass-1jkygx glass-usxwy5 glass-1o7kk3e glass-178xt8z glass-s1s249 glass-so031l glass-e0pwq glass-13fuv20 glass-32b0ac glass-1q0q8m5 glass-19ypqd9 glass-17ixhvu glass-139d7f glass-13p3lw4 glass-1oob0i6 glass-1m7fhj7 glass-1xnwcy6", children: [FZt(nn, { as: "h2", size: "md", weight: "medium", className: "glass-dj266r glass-14z9mp glass-at24cr glass-1lziwak", children: "Project Database Could Not Be Rendered" }), e.map((i) => FZt(nn, { as: "div", color: "secondary", "data-testid": "project-database-diagnostic", size: "sm", className: "glass-j0a0fe", children: yBw(i) }, `${i.code}:${i.path.join(".")}:${i.message}`)), n > 0 ? NNn(nn, { as: "div", color: "secondary", "data-testid": "project-database-diagnostic-overflow", size: "sm", children: [n, " more", " ", n === 1 ? "diagnostic" : "diagnostics"] }) : null] });
}
function kBw({ diagnostics: t }) {
  const e = t.slice(0, mYf), n = t.length - e.length, i = t.length === 1 ? "Warning" : `${t.length} warnings`, r = e.map((s) => s.message);
  return n > 0 && r.push(`${n} more ${n === 1 ? "warning" : "warnings"}`), NNn(nn, { as: "div", color: "yellow-secondary", "data-project-database-warnings": true, role: "status", size: "sm", className: "glass-1vnbkiq glass-f6zju3 glass-196pc8s glass-cnij5n glass-22095l glass-yumdvf glass-1t7ytsu glass-vthqh glass-1e1y6u3 glass-1xvwvse glass-j0a0fe", children: [i, ": ", r.join(" · ")] });
}
function dYf({ board: t, editor: e, getPos: n, node: i, update: r }) {
  e.commands.command(({ tr: s }) => {
    const o = n();
    if (typeof o != "number") return false;
    const a = s.doc.nodeAt(o);
    if (a === null || a.type !== i.type) return false;
    const l = a.textContent, c = rYf(l, t, r);
    return c === l ? false : (s.replaceWith(o + 1, o + a.nodeSize - 1, a.type.schema.text(c)), true);
  });
}
function wBw(t) {
  return t === "kanban" ? "board" : t;
}
function CBw(t) {
  const e = Tjl(t, AKf(t));
  return RKf(t, e).config.view.groupOrder.length;
}
function TBw(t) {
  return { severity: "error", code: "source-unavailable", message: t, path: [] };
}
function EBw({ loader: t, source: e }) {
  const n = Ljl(() => t?.prepare(e), [t, e]), i = Ljl(() => n === void 0 ? WCs(e) : void 0, [n, e]), [r, s] = _Bw({ request: void 0, result: void 0 });
  if (vBw(() => {
    if (n === void 0) return;
    let l = true;
    return (async () => {
      try {
        const c = await n();
        l && s({ request: n, result: c });
      } catch {
        l && s({ request: n, result: { kind: "invalid", diagnostics: [TBw("Project task directory could not be loaded")] } });
      }
    })(), () => {
      l = false;
    };
  }, [n]), n === void 0) return { board: i?.kind === "valid" ? i.board : void 0, diagnostics: i?.diagnostics ?? [], loading: false };
  const o = r.request === n, a = o || r.result?.kind === "loaded" ? r.result : void 0;
  return a?.kind === "loaded" ? { board: a.board, diagnostics: a.diagnostics, loading: !o } : { board: void 0, diagnostics: a?.diagnostics ?? [], loading: a === void 0 };
}
function IBw(t) {
  return t.content?.map((e) => e.type === "text" ? e.text ?? "" : "").join("") ?? "";
}
function xBw(t) {
  let e = 0;
  for (const r of t.matchAll(/`+/g)) e = Math.max(e, r[0].length);
  const n = "`".repeat(Math.max(3, e + 1)), i = t.endsWith(`
`) ? "" : `
`;
  return `${n}cursor-project
${t}${i}${n}

`;
}
function ABw(t) {
  const e = t.schema.nodes.codeBlock;
  if (e === void 0) return [];
  const n = [];
  return t.doc.descendants((i, r) => {
    i.type === e && i.attrs.language === "cursor-project" && n.push({ node: i, position: r });
  }), n;
}
function hYf(t, e) {
  const n = t.schema.nodes.projectDatabase;
  if (n === void 0) return false;
  const i = ABw(t);
  if (i.length === 0) return false;
  e.setMeta("addToHistory", false);
  for (let r = i.length - 1; r >= 0; r -= 1) {
    const s = i[r];
    e.replaceWith(s.position, s.position + s.node.nodeSize, n.create({}, s.node.content.size > 0 ? s.node.content : void 0));
  }
  return true;
}
var pYf, mYf, gYf, fYf, vYf, 