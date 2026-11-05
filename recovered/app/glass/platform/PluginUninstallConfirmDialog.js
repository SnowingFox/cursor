// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PluginUninstallConfirmDialog.js range:22848465..22855756
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.160Z
// wrapper: RQ1 deps:2 [E, Mt]
// declarations: PQ1, MQ1, DQ1, NQ1, TWm, LQ1, OQ1, FQ1, Zes, $Za, EWm, IWm, Qes, BQ1, UQ1, jQ1 (segment truncated)
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var RQ1 = L({ "PluginUninstallConfirmDialog.js"() {
  "use strict";
  E(), Mt();
} });
function PQ1(t) {
  const e = [], n = [], i = [];
  for (const s of t) s.userId !== void 0 ? e.push(s) : s.teamId !== void 0 ? n.push(s) : i.push(s);
  const r = (s, o) => Qes(s).localeCompare(Qes(o));
  return e.sort(r), n.sort(r), i.sort(r), { userMarketplaces: e, teamMarketplaces: n, globalMarketplaces: i };
}
function MQ1(t, e) {
  if (t.kind === "marketplace") {
    const n = [...e.userMarketplaces, ...e.teamMarketplaces, ...e.globalMarketplaces].find((i) => i.id === t.marketplaceId);
    return n === void 0 ? { kind: "scope", scope: "all" } : { kind: "marketplace", marketplace: n };
  }
  switch (t.scope) {
    case "personal":
      return e.userMarketplaces.length > 0 ? { kind: "scope", scope: "personal" } : { kind: "scope", scope: "all" };
    case "team":
      return e.teamMarketplaces.length > 0 ? { kind: "scope", scope: "team" } : { kind: "scope", scope: "all" };
    default:
      return { kind: "scope", scope: t.scope };
  }
}
function DQ1(t, e, n) {
  if (t.kind === "marketplace") return [t.marketplace];
  switch (t.scope) {
    case "all":
      return e;
    case "personal":
      return n.userMarketplaces;
    case "team":
      return n.teamMarketplaces;
    case "cursor":
      return;
  }
}
function NQ1(t) {
  if (t.effective.kind === "marketplace") return IWm({ marketplaces: [t.effective.marketplace], allMarketplacePlugins: t.allMarketplacePlugins, pluginsByMarketplaceId: t.pluginsByMarketplaceId });
  switch (t.effective.scope) {
    case "all":
      return [...t.allMarketplacePlugins];
    case "cursor":
      return t.allMarketplacePlugins.filter($Za);
    case "personal":
    case "team":
      return IWm({ marketplaces: t.scopedMarketplaces ?? [], allMarketplacePlugins: t.allMarketplacePlugins, pluginsByMarketplaceId: t.pluginsByMarketplaceId });
  }
}
function TWm(t) {
  return t.kind === "scope" && t.scope === "all";
}
function LQ1(t) {
  return t.kind === "marketplace" ? t.marketplace.teamId !== void 0 : t.scope === "team";
}
function OQ1(t) {
  if (t !== void 0) return t.flatMap((e) => {
    const n = e.principalKind ?? e.principal_kind, i = e.principalId ?? e.principal_id ?? "";
    if (n === void 0 || i.length === 0) return [];
    const r = AWm.find((s) => xWm[s] === n);
    return r === void 0 ? [] : [{ principalKind: r, principalId: i }];
  });
}
function FQ1(t) {
  if (t.id === void 0 || t.id === null) return;
  const e = t.teamConfig?.directoryGroupIds ?? t.team_config?.directory_group_ids, n = t.teamConfig?.accessGrants ?? t.team_config?.access_grants, i = t.requiredPluginInstalls ?? t.required_plugin_installs;
  return { id: String(t.id), name: t.name ?? "", displayName: t.displayName ?? t.display_name ?? void 0, description: t.description ?? void 0, gitUrl: t.gitUrl ?? t.git_url ?? void 0, gitRef: t.gitRef ?? t.git_ref ?? void 0, userId: t.userId ?? t.user_id ?? void 0, teamId: t.teamId ?? t.team_id ?? void 0, directoryGroupIds: e ? Array.from(e, (r) => Number(r)) : void 0, accessGrants: OQ1(n), requiredPluginInstalls: i ? Array.from(i, (r) => ({ pluginId: String(r.pluginId ?? r.plugin_id ?? ""), directoryGroupIds: Array.from(r.directoryGroupIds ?? r.directory_group_ids ?? [], (s) => Number(s)) })) : void 0, autoReindex: t.autoReindex ?? t.auto_reindex ?? void 0, isDefault: t.isDefault ?? t.is_default ?? void 0, allowUserPublish: t.allowUserPublish ?? t.allow_user_publish ?? void 0, distributionGitUrl: t.distributionGitUrl ?? t.distribution_git_url ?? void 0 };
}
function Zes(t) {
  const e = t?.trim();
  return !e || e === Jes;
}
function $Za(t) {
  return Zes(t.marketplace?.name);
}
function EWm(t) {
  return t.publisher?.isUserOwned === true && !$Za(t);
}
function IWm(t) {
  const e = /* @__PURE__ */ new Set(), n = [];
  for (const i of t.marketplaces) {
    const s = t.pluginsByMarketplaceId?.get(i.id) ?? t.allMarketplacePlugins.filter((o) => o.marketplace?.name.trim() === i.name);
    for (const o of s) e.has(o.id) || (e.add(o.id), n.push(o));
  }
  return n;
}
function Qes(t) {
  const e = t.displayName?.trim();
  return e || BQ1(t.name);
}
function BQ1(t) {
  const e = t.trim(), n = e.split("-").filter(Boolean);
  return n.length === 0 ? e : n.map((i) => i.charAt(0).toUpperCase() + i.slice(1)).join(" ");
}
function UQ1(t) {
  const e = t.marketplace, n = e?.name.trim();
  if (!e || !n || n === Jes) return;
  const i = Qes({ name: n, displayName: e.displayName }), r = typeof e.teamId == "number";
  return { name: n, displayName: i, isTeamMarketplace: r, marketplace: r ? FQ1(e) : void 0 };
}
function jQ1(t) {
  const e = [];
  t.teamPinnedPlugins.length > 0 && e.push({ sectionKey: "pinned", title: "Pinned", scopeChipLabel: t.teamDisplayName, plugins: hSt(t.teamPinnedPlugins, t.teamInstallCountByPluginId) });
  const n = [], i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), s = (d) => {
    const h = d.publisher;
    if (h === void 0) return;
    const p = h.name.trim() || h.displayName.trim(), g = r.get(p);
    if (g === void 0) {
      r.set(p, { displayName: h.displayName.trim() || p, plugins: [d], pluginIds: /* @__PURE__ */ new Set([d.id]) });
      return;
    }
    g.pluginIds.has(d.id) || (g.pluginIds.add(d.id), g.plugins.push(d));
  };
  if (t.marketplaces !== void 0) for (const d of t.marketplaces) {
    const h = d.name.trim();
    if (h === "" || h === Jes) continue;
    const p = Qes(d), g = typeof d.teamId == "number";
    i.set(h, { displayName: p, isTeamMarketplace: g, marketplace: d, plugins: [] });
  }
  for (const d of t.allMarketplacePlugins) {
    if (EWm(d)) {
      s(d);
      continue;
    }
    const h = UQ1(d);
    if (!h) {
      n.push(d);
      continue;
    }
    const p = i.get(h.name);
    p ? p.plugins.push(d) : t.marketplaces === void 0 && i.set(h.name, { displayName: h.displayName, isTeamMarketplace: h.isTeamMarketplace, marketplace: h.marketplace, plugins: [d] });
  }
  if (t.pluginsByMarketplaceId !== void 0) for (const d of i.values()) {
    const h = d.marketplace?.id;
    if (h === void 0) continue;
    const p = t.pluginsByMarketplaceId.get(h);
    p !== void 0 && (d.plugins = p.filter((g) => EWm(g) ? (s(g), false) : true));
  }
  const o = t.includeCuratedCategorySections ? lQd(n) : [], a = o.find((d) => d.categoryKey === HZa), l = o.filter((d) => d.categoryKey !== HZa);
  a && e.push({ sectionKey: `category:${a.categoryKey}`, title: a.categoryDisplayName, plugins: hSt(a.plugins, t.teamInstallCountByPluginId) });
  const c = Array.from(i).sort(([, d], [, h]) => d.displayName.localeCompare(h.displayName));
  for (const [d, h] of c) e.push({ sectionKey: `marketplace:${d}`, title: h.displayName, scopeChipLabel: h.isTeamMarketplace ? t.teamDisplayName : void 0, marketplace: h.marketplace, plugins: hSt(h.plugins, t.teamInstallCountByPluginId) });
  const u = Array.from(r).sort(([, d], [, h]) => d.displayName.localeCompare(h.displayName));
  for (const [d, h] of u) e.push({ sectionKey: `publisher:${d}`, title: h.displayName, plugins: hSt(h.plugins, t.teamInstallCountByPluginId) });
  for (const d of l) e.push({ sectionKey: `category:${d.categoryKey}`, title: d.categoryDisplayName, plugins: hSt(d.plugins, t.teamInstallCountByPluginId) });
  return e;
}
var Jes, HZa, xWm, AWm,
