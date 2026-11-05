// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CustomizeManageScopeMenu.js range:22793362..22797463
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.593Z
AZ1 = L({ "CustomizeManageScopeMenu.js"() {
  "use strict";
  E(), Mt(), $ot(), Hot(), JHm = 4, eWm = { color: "var(--vscode-descriptionForeground)" };
} });
import { jsx as kIn, Fragment as RZ1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as PZ1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function MZ1(t, e) {
  return t.name.toLowerCase().includes(e) || t.description?.toLowerCase().includes(e) === true ? true : t.aliases?.some((n) => n.toLowerCase().includes(e)) === true;
}
function DZ1(t, e) {
  return vst(t, e, (n) => ({ value: n.name, keywords: n.description !== void 0 ? [n.description] : void 0 }));
}
function NZ1(t) {
  if (!t.startsWith("workspace:")) return t;
  const e = t.indexOf(":", 10);
  return e === -1 ? t : t.slice(e + 1);
}
function LZ1(t) {
  return t.pluginId ?? NZ1(t.id);
}
function OZ1(t) {
  const e = [];
  for (const n of _In) e.push(n.id), n.id === "plugins" && e.push("marketplace");
  return [t, ...e.filter((n) => n !== t)];
}
function FZ1({ query: t, searchContext: e, selectedTab: n, selectedScope: i, sourceMatchesSelectedScope: r, installedPlugins: s, marketplacePlugins: o, primitiveDescriptors: a, mcpServers: l, hooks: c }) {
  const u = t.trim().toLowerCase();
  if (u === "") return [];
  const d = e === "browse" ? "marketplace" : n, h = [];
  for (const p of OZ1(d)) {
    if (p === "marketplace") {
      o.length > 0 && h.push({ kind: "rows", key: "marketplace", title: "Marketplace", items: o.map((y) => ({ kind: "marketplacePlugin", id: y.id, plugin: y })) });
      continue;
    }
    if (!Ues(p, i.kind)) continue;
    if (p === "plugins") {
      const y = vst(l6e([...s], t), t, (S) => ({ value: S.displayName }));
      y.length > 0 && h.push({ kind: "rows", key: "plugins", title: "Plugins", items: y.map((S) => ({ kind: "plugin", id: S.id, plugin: S })) });
      continue;
    }
    if (p === "mcps") {
      l.length > 0 && h.push({ kind: "mcps", key: "mcps", title: "MCPs", servers: [...l] });
      continue;
    }
    if (p === "hooks") {
      c.length > 0 && h.push({ kind: "hooks", key: "hooks", title: "Hooks", hooks: [...c] });
      continue;
    }
    const g = tCi[p];
    if (g === void 0 || a === void 0) continue;
    const f = { skill: a.skills, rule: a.rules, subagent: a.subagents, mcp: a.mcps, command: a.commands }, _ = new Set(f[g].filter((y) => y.scope === "plugin" && y.ownerWorkspaceId === void 0 && r(y)).map(LZ1)), b = DZ1(f[g].filter((y) => r(y, { globalPluginSourceKeys: _ }) && MZ1(y, u)), t);
    b.length > 0 && h.push({ kind: "rows", key: p, title: _In.find((y) => y.id === p)?.label ?? p, items: b.map((y) => ({ kind: "primitive", id: y.id, primitive: y })) });
  }
  return h;
}
function BZ1(t) {
  const e = PZ1(19), { query: n, sections: i, rowActions: r, mcpActions: s, hookActions: o, onCreatePrimitive: a } = t;
  if (i.length === 0) {
    const h = `No results match "${n}".`;
    let p;
    return e[0] !== h ? (p = kIn(nCi, { message: h }), e[0] = h, e[1] = p) : p = e[1], p;
  }
  let l;
  e[2] !== i.length ? (l = Oes(i.length), e[2] = i.length, e[3] = l) : l = e[3];
  const c = l;
  let u;
  if (e[4] !== o || e[5] !== s || e[6] !== a || e[7] !== r || e[8] !== i || e[9] !== c) {
    let h;
    e[11] !== o || e[12] !== s || e[13] !== a || e[14] !== r || e[15] !== c ? (h = (p) => p.kind === "mcps" ? kIn(XHm, { group: { key: p.key, title: p.title, servers: p.servers }, actions: s, visibleLimit: c, showSourceLabel: true }, p.key) : p.kind === "hooks" ? kIn(sCi, { title: p.title, items: p.hooks, visibleLimit: c, renderRow: (g, f) => kIn($Hm, { hook: g, showDivider: f > 0, actions: o }, g.id) }, p.key) : kIn(BHm, { group: { key: p.key, title: p.title, items: p.items, removable: false }, actions: r, onCreatePrimitive: a, visibleLimit: c }, p.key), e[11] = o, e[12] = s, e[13] = a, e[14] = r, e[15] = c, e[16] = h) : h = e[16], u = i.map(h), e[4] = o, e[5] = s, e[6] = a, e[7] = r, e[8] = i, e[9] = c, e[10] = u;
  } else u = e[10];
  let d;
  return e[17] !== u ? (d = kIn(RZ1, { children: u }), e[17] = u, e[18] = d) : d = e[18], d;
}
