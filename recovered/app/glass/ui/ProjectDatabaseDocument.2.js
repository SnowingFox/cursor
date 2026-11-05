// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProjectDatabaseDocument.js range:33738366..33746235
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.922Z
Njl = L({ "ProjectDatabaseDocument.js"() {
  "use strict";
  E(), iv(), Mt(), OCs(), $Cs(), DKf(), F9w(), HKf = 256 * 1024, WKf = 100, t5 = Object.freeze({ tasks: 256, properties: 32, optionsPerProperty: 64, blockedByReferencesPerTask: 32, propertyValuesPerTask: 32, multiSelectValuesPerProperty: 64, projectTitleCharacters: 512, projectDescriptionCharacters: 8 * 1024, propertyNameCharacters: 256, optionLabelCharacters: 256, taskSubtitleCharacters: 2 * 1024, taskBodyCharacters: 16 * 1024, textPropertyValueCharacters: 4 * 1024 }), FV = ze.string().regex(/^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/, "Expected a stable ID containing only letters, numbers, dots, underscores, or hyphens"), GKf = ze.enum(rUr), qKf = ze.string().transform((t, e) => g_e(t) ? t : (e.addIssue({ code: "custom", message: "Expected a valid Cursor icon name" }), ze.NEVER)), Rjl = ze.object({ id: FV, label: HCs("Option label", t5.optionLabelCharacters), tone: GKf.optional(), icon: qKf.optional() }).strict(), zKf = ze.object({ id: FV, name: HCs("Property name", t5.propertyNameCharacters), type: ze.enum(["text", "number", "boolean"]) }).strict(), VKf = ze.object({ id: FV, name: HCs("Property name", t5.propertyNameCharacters), type: ze.enum(["select", "multiSelect"]), options: ze.array(Rjl).max(t5.optionsPerProperty, `Property options must contain at most ${t5.optionsPerProperty} entries`) }).strict(), Pjl = ze.discriminatedUnion("type", [zKf, VKf]), KKf = ze.union([MNn("Text property value", t5.textPropertyValueCharacters), ze.number().finite(), ze.boolean(), ze.array(FV).max(t5.multiSelectValuesPerProperty, `Multi-select property values must contain at most ${t5.multiSelectValuesPerProperty} entries`)]), YKf = ze.record(FV, KKf).refine((t) => Object.keys(t).length <= t5.propertyValuesPerTask, { message: `Task properties must contain at most ${t5.propertyValuesPerTask} values` }), Mjl = ze.object({ id: FV, title: B9w("Task title"), subtitle: MNn("Task subtitle", t5.taskSubtitleCharacters).optional(), body: MNn("Task body", t5.taskBodyCharacters).optional(), blockedBy: ze.array(FV).max(t5.blockedByReferencesPerTask, `Task blockedBy must contain at most ${t5.blockedByReferencesPerTask} references`).optional(), properties: YKf }).strict(), XKf = { isOption: (t) => Rjl.safeParse(t).success, isProperty: (t) => Pjl.safeParse(t).success, isTask: (t) => Mjl.safeParse(t).success }, ZKf = ze.object({ property: FV, direction: FV }).strict(), Djl = ze.object({ property: FV, operator: FV, value: ze.union([MNn("Filter value", t5.textPropertyValueCharacters), ze.number().finite(), ze.boolean(), ze.null()]) }).strict(), QKf = ze.array(Djl).length(1), JKf = ze.object({ version: ze.literal(1), id: FV, title: HCs("Project title", t5.projectTitleCharacters), description: MNn("Project description", t5.projectDescriptionCharacters).optional(), properties: ze.array(Pjl).min(1).max(t5.properties, `Project database must contain at most ${t5.properties} property definitions`), view: ze.object({ default: ze.enum(["board", "list", "grid"]), groupBy: FV, groupOrder: ze.array(FV).max(t5.optionsPerProperty, `View groupOrder must contain at most ${t5.optionsPerProperty} references`).optional(), order: ZKf.optional(), filter: Djl.optional() }).strict(), dependency: ze.object({ completionProperty: FV, completionValues: ze.array(FV).min(1).max(t5.optionsPerProperty, `Dependency completionValues must contain at most ${t5.optionsPerProperty} references`), ignoredValues: ze.array(FV).max(t5.optionsPerProperty, `Dependency ignoredValues must contain at most ${t5.optionsPerProperty} references`).optional(), missing: ze.enum(["blocks", "ignored"]).optional() }).strict(), tasks: ze.array(Mjl).max(t5.tasks, `Project database must contain at most ${t5.tasks} tasks`) }).strict(), eYf = ze.object({ version: ze.unknown() }).passthrough();
} });
function K9w(t, e) {
  return t === void 0 || e === void 0 ? t === e : t.propertyId !== e.propertyId || t.operator !== e.operator || t.value.kind !== e.value.kind ? false : t.value.kind === "missing" || e.value.kind === "missing" ? t.value.kind === e.value.kind : t.value.value === e.value.value;
}
function tYf(t) {
  return t.kind === "missing" ? null : t.value;
}
function LZt(t, e, n, i) {
  const r = t.getIn(e, true);
  return NCs(r) ? (r.value !== n && (r.value = n, i.push(e)), false) : (t.setIn(e, n), true);
}
function Y9w(t, e, n, i) {
  const r = ["view", "order"], s = t.getIn(r, true);
  if (!DCs(s)) return t.setIn(r, { property: e, direction: n }), true;
  const o = LZt(t, [...r, "property"], e, i), a = LZt(t, [...r, "direction"], n, i);
  return o || a;
}
function nYf(t) {
  return Sjl(t) ? t.items.filter(NCs).map((e) => String(e.value)) : [];
}
function X9w(t, e) {
  const n = t.map((l) => l.id), i = new Set(n), r = nYf(e);
  if (!(r.length > 0 && r.every((l) => i.has(l)))) return n;
  const o = new Set(r), a = n.filter((l) => !o.has(l));
  return [...r, ...a];
}
function Z9w(t, e) {
  return t.length === e.length && t.every((n, i) => n === e[i]);
}
function Q9w(t, e, n) {
  const i = ["view", "filters"], r = t.hasIn(i);
  r && t.deleteIn(i);
  const s = ["view", "filter"], o = t.getIn(s, true);
  if (!DCs(o)) return t.setIn(s, { property: e.propertyId, operator: e.operator, value: tYf(e.value) }), true;
  const a = LZt(t, [...s, "property"], e.propertyId, n), l = LZt(t, [...s, "operator"], e.operator, n), c = LZt(t, [...s, "value"], tYf(e.value), n);
  return r || a || l || c;
}
function GCs(t, e, n) {
  const i = t.getIn(e, true);
  if (!DCs(i) && !NCs(i) && !Sjl(i)) return;
  const r = i.range;
  if (r != null) return [r[0], n ? r[2] : r[1]];
}
function iYf(t, e, n) {
  return t.slice(0, e[0]) + n + t.slice(e[1]);
}
function J9w({ document: t, originalDocument: e, patchPaths: n, source: i, structuralChange: r }) {
  const s = t.toString({ lineWidth: 0 }), o = LCs(s);
  if (r) {
    const c = GCs(e, ["view"], true), u = GCs(o, ["view"], true);
    return c === void 0 || u === void 0 ? i : iYf(i, c, s.slice(u[0], u[1]));
  }
  const a = new Map(n.map((c) => [c.join("\0"), c])), l = [...a.values()].map((c) => {
    const u = GCs(e, c, false), d = GCs(o, c, false);
    return u === void 0 || d === void 0 ? void 0 : { originalRange: u, value: s.slice(d[0], d[1]) };
  }).filter((c) => c !== void 0).sort((c, u) => u.originalRange[0] - c.originalRange[0]);
  return l.length !== a.size ? i : l.reduce((c, u) => iYf(c, u.originalRange, u.value), i);
}
function rYf(t, e, n) {
  const i = LCs(t);
  if (i.errors.length > 0) return t;
  const r = i.clone(), s = [];
  let o = false;
  if (n.kind === "mode") {
    if ((e.config.defaultViewMode === "kanban" ? "board" : e.config.defaultViewMode) === n.mode) return t;
    o = LZt(r, ["view", "default"], n.mode, s) || o;
  } else {
    const a = e.config.view, l = n.state;
    if (a.groupBy !== l.groupBy) {
      o = LZt(r, ["view", "groupBy"], l.groupBy, s) || o;
      const d = e.config.propertyDefinitions.find((h) => h.id === l.groupBy);
      if (d?.type === "select") {
        const h = r.getIn(["view", "groupOrder"], true), p = X9w(d.options, h), g = nYf(h);
        Z9w(g, p) || (r.setIn(["view", "groupOrder"], p), o = true);
      }
    }
    const c = a.sortBy === void 0 ? void 0 : { propertyId: a.sortBy, direction: a.sortDirection ?? "asc" };
    if ((c?.propertyId !== l.sort?.propertyId || c?.direction !== l.sort?.direction) && (l.sort === void 0 ? r.hasIn(["view", "order"]) && (r.deleteIn(["view", "order"]), o = true) : o = Y9w(r, l.sort.propertyId, l.sort.direction, s) || o), !K9w(a.filter, l.filter)) if (l.filter === void 0) for (const d of ["filter", "filters"]) {
      const h = ["view", d];
      r.hasIn(h) && (r.deleteIn(h), o = true);
    }
    else o = Q9w(r, l.filter, s) || o;
  }
  return !o && s.length === 0 ? t : J9w({ document: r, originalDocument: i, patchPaths: s, source: t, structuralChange: o });
}
