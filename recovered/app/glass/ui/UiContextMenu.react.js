// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: UiContextMenu.react.js range:33779433..33788747
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.133Z
e8w = L({ "UiContextMenu.react.js"() {
  "use strict";
  E(), Mt(), DYf = 180, NYf = 280, LYf = 320;
} });
function Gme(t, e = [], n = "error", i = "schema") {
  return { code: i, message: t, path: e, severity: n };
}
function xAt(t, e, n = []) {
  return Gme(`${t.path}: ${e}`, [t.path, ...n], "warning");
}
function Fjl(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
function t8w(t) {
  const e = t.split("/");
  return t.length > 0 && !t.startsWith("/") && !t.startsWith("\\") && !/^[A-Za-z]:/.test(t) && !t.includes("\\") && !t.includes("\0") && e.every((n) => n.length > 0 && n !== "." && n !== "..");
}
function OYf(t) {
  const e = /^version:[ \t]*2[ \t]*(?:#.*)?$/m.test(t);
  if (new TextEncoder().encode(t).byteLength > YEa) return e ? { kind: "invalid", diagnostics: [Gme("Project database source exceeds the 256 KiB limit", [], "error", "source-too-large")] } : { kind: "unhandled" };
  const n = Ajl(t);
  if (n.kind === "invalid") return e ? n : { kind: "unhandled" };
  if (!Fjl(n.value) || n.value.version !== 2) return { kind: "unhandled" };
  const i = GYf.safeParse(n.value);
  return i.success ? t8w(i.data.source.directory) ? { kind: "valid", document: i.data } : { kind: "invalid", diagnostics: [Gme("source.directory must be a workspace-relative path without empty, dot, or traversal segments", ["source", "directory"])] } : { kind: "invalid", diagnostics: i.error.issues.map((r) => Gme(r.message, r.path.map((s) => typeof s == "symbol" ? String(s) : s))) };
}
function n8w(t) {
  if (new TextEncoder().encode(t.source).byteLength > Bjl) return { kind: "invalid", diagnostic: xAt(t, "file exceeds the 64 KiB limit") };
  const e = t.source.replace(/^\uFEFF/, "").split(/\r?\n/), n = e.findIndex((d, h) => h > 0 && d.trim() === "---");
  if (e[0]?.trim() !== "---" || n < 0) {
    const d = e[0]?.trim() === "---" ? "frontmatter is missing its closing --- delimiter" : "file must start with --- frontmatter";
    return { kind: "invalid", diagnostic: xAt(t, d) };
  }
  const i = e.slice(n + 1).join(`
`).trim();
  if (i.length > G7.taskBodyCharacters) return { kind: "invalid", diagnostic: xAt(t, `body exceeds ${G7.taskBodyCharacters} characters`) };
  const r = Ajl(e.slice(1, n).join(`
`));
  if (r.kind === "invalid") return { kind: "invalid", diagnostic: xAt(t, r.diagnostics[0]?.message ?? "frontmatter could not be parsed") };
  if (!Fjl(r.value)) return { kind: "invalid", diagnostic: xAt(t, "frontmatter must be a mapping") };
  const s = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const [d, h] of Object.entries(r.value)) {
    const p = HYf.get(d.toLowerCase());
    if (p !== void 0 && !KCs.has(d)) return { kind: "invalid", diagnostic: xAt(t, `frontmatter key "${d}" must be spelled "${p}"`) };
    (KCs.has(d) ? s : o)[d] = h;
  }
  const a = jYf.safeParse(s), l = $Yf.safeParse(o), c = [...a.success ? [] : a.error.issues, ...l.success ? [] : l.error.issues];
  if (!a.success || !l.success) {
    const d = c.slice(0, 3).map((h) => `${h.path.join(".") || "frontmatter"}: ${h.message}`).join("; ");
    return { kind: "invalid", diagnostic: xAt(t, d) };
  }
  const u = a.data;
  return { kind: "valid", task: { file: t, order: u.order, card: { id: u.id, title: u.title, ...u.subtitle === void 0 ? {} : { subtitle: u.subtitle }, ...i.length === 0 ? {} : { body: i }, properties: { status: u.status, ...l.data } } } };
}
function zLi(t) {
  const e = t.replace(/[._-]+/g, " ");
  return `${e.slice(0, 1).toUpperCase()}${e.slice(1)}`;
}
function FYf(t) {
  let e = 5381;
  for (let n = 0; n < t.length; n += 1) e = Math.imul(e, 33) ^ t.charCodeAt(n);
  return (e >>> 0).toString(36);
}
function i8w(t, e) {
  const n = `${FYf(e)}${FYf(`directory:${e}`)}`;
  return `${`directory-${t.replace(/[^A-Za-z0-9._-]+/g, "-")}`.slice(0, 127 - n.length)}-${n}`;
}
function r8w(t) {
  switch (typeof t) {
    case "string":
      return "text";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "object":
      return "multiSelect";
    default:
      return t;
  }
}
function BYf(t) {
  return [...new Set(t)];
}
function s8w(t) {
  return t === "done" ? "green" : t === "active" || t === "doing" ? "blue" : t === "blocked" ? "red" : "default";
}
function o8w(t, e, n) {
  const i = { id: t, label: zLi(t), tone: s8w(t) };
  if (e === void 0) return i;
  if (!Fjl(e)) return n.push(Gme(`Status "${t}" must be a mapping; inferred defaults were used`, ["statuses", t], "warning")), i;
  const r = Object.keys(e).filter((l) => l !== "label" && l !== "tone" && l !== "icon");
  r.length > 0 && n.push(Gme(`Status "${t}" has unsupported fields: ${r.join(", ")}`, ["statuses", t], "warning"));
  const s = typeof e.label == "string" && e.label.trim().length > 0 && e.label.length <= G7.optionLabelCharacters ? e.label : void 0;
  e.label !== void 0 && s === void 0 && n.push(Gme(`Status "${t}" label must be a non-empty string of at most ${G7.optionLabelCharacters} characters; the inferred label was used`, ["statuses", t, "label"], "warning"));
  const o = typeof e.tone == "string" && qYf.has(e.tone) ? e.tone : void 0;
  e.tone !== void 0 && o === void 0 && n.push(Gme(`Status "${t}" tone is invalid; the inferred tone was used`, ["statuses", t, "tone"], "warning"));
  const a = typeof e.icon == "string" && g_e(e.icon) ? e.icon : void 0;
  return e.icon !== void 0 && a === void 0 && n.push(Gme(`Status "${t}" icon is invalid; no icon was used`, ["statuses", t, "icon"], "warning")), { id: t, label: s ?? i.label, tone: o ?? i.tone, ...a === void 0 ? {} : { icon: a } };
}
function a8w(t, e) {
  return BYf([...t.view.statusStages ?? [], ...t.view.groupBy === "status" ? t.view.groupOrder ?? [] : [], ...e.map((n) => String(n.card.properties.status))]);
}
function l8w(t, e, n) {
  for (const i of Object.keys(t.statuses ?? {})) TDe.safeParse(i).success ? e.has(i) || n.push(Gme(`Status declaration "${i}" was ignored because no task or view stage uses that status`, ["statuses", i], "warning")) : n.push(Gme(`Status declaration "${i}" was ignored because it is not a stable ID`, ["statuses", i], "warning"));
}
function c8w(t, e, n) {
  const i = a8w(t, e);
  l8w(t, new Set(i), n);
  const r = [{ id: "status", name: "Status", type: "select", options: i.slice(0, G7.optionsPerProperty).map((a) => o8w(a, t.statuses?.[a], n)) }];
  i.length > G7.optionsPerProperty && n.push(Gme(`Only the first ${G7.optionsPerProperty} status values were declared`, ["statuses"], "warning"));
  const s = /* @__PURE__ */ new Map();
  for (const a of e) for (const [l, c] of Object.entries(a.card.properties)) {
    if (l === "status") continue;
    const u = s.get(l) ?? /* @__PURE__ */ new Set();
    u.add(r8w(c)), s.set(l, u);
  }
  const o = /* @__PURE__ */ new Set(["status"]);
  for (const a of [...s.keys()].sort()) {
    if (r.length >= G7.properties) {
      n.push(Gme("Additional task properties were omitted", [], "warning"));
      break;
    }
    const l = s.get(a);
    if (l?.size !== 1) {
      n.push(Gme(`Property "${a}" has inconsistent value types and was omitted`, ["properties", a], "warning"));
      continue;
    }
    const c = l.values().next().value;
    if (c !== void 0) if (o.add(a), c === "multiSelect") {
      const u = BYf(e.flatMap((d) => {
        const h = d.card.properties[a];
        return Array.isArray(h) ? [...h] : [];
      })).slice(0, G7.optionsPerProperty);
      r.push({ id: a, name: zLi(a), type: c, options: u.map((d) => ({ id: d, label: zLi(d) })) });
    } else r.push({ id: a, name: zLi(a), type: c });
  }
  return { definitions: r, retainedIds: o };
}
function u8w(t) {
  return typeof t == "object" ? [...t] : t;
}
function d8w(t, e, n) {
  const i = OYf(t);
  if (i.kind !== "valid") return i.kind === "invalid" ? i : { kind: "invalid", diagnostics: [Gme("Expected a cursor-project version 2 source", ["version"])] };
  const r = [], s = [], o = /* @__PURE__ */ new Set();
  for (const p of e) {
    const g = n8w(p);
    g.kind === "invalid" ? r.push(g.diagnostic) : o.has(g.task.card.id) ? r.push(xAt(p, `duplicate task ID "${g.task.card.id}" was ignored`)) : (o.add(g.task.card.id), s.push(g.task));
  }
  s.sort((p, g) => (p.order ?? Number.POSITIVE_INFINITY) - (g.order ?? Number.POSITIVE_INFINITY) || p.file.path.localeCompare(g.file.path));
  const { definitions: a, retainedIds: l } = c8w(i.document, s, r), c = i.document.view, u = i.document.source.directory, d = { version: 1, id: i8w(u, n), title: zLi(u.split("/").at(-1) ?? "Tasks"), properties: a, view: { default: c.default, groupBy: c.groupBy, ...c.groupOrder === void 0 ? {} : { groupOrder: c.groupOrder }, ...c.order === void 0 ? {} : { order: c.order }, ...c.filter === void 0 ? {} : { filter: c.filter } }, dependency: { completionProperty: "status", completionValues: [], missing: "ignored" }, tasks: s.map((p) => ({ id: p.card.id, title: p.card.title, ...p.card.subtitle === void 0 ? {} : { subtitle: p.card.subtitle }, ...p.card.body === void 0 ? {} : { body: p.card.body }, properties: Object.fromEntries(Object.entries(p.card.properties).filter(([g]) => l.has(g)).map(([g, f]) => [g, u8w(f)])) })) }, h = W9w(d);
  return { kind: "loaded", board: h.board, diagnostics: [...r, ...h.diagnostics] };
}
var Bjl, TDe, UYf, jYf, $Yf, KCs, HYf, WYf, GYf, qYf, 