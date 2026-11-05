// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: UsageTable.js range:22886856..22954771
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.197Z
// wrapper: rJ1 deps:5 [E, Mt, wZa, J7, $Q1]
// declarations: BWm, aJ1, UWm, lJ1, cJ1, jWm, GZa, $Wm, qZa, uJ1, zZa, dJ1, hJ1, HWm, pJ1, mJ1 (segment truncated)
// anchors: (none)
// group: usage-billing
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
rJ1 = L({ "UsageTable.js"() {
  "use strict";
  E(), Mt(), wZa(), J7(), $Q1(), k4e = { row: { kMwMTN: "cursor-ui-1wd3ewq", $$css: true }, rowClickable: { kkrTdU: "cursor-ui-1ypdohk", kMeerF: "cursor-ui-1k57tk5 cursor-ui-4xl6zf", k3XXqK: "cursor-ui-1t137rt cursor-ui-9v5kkp", kjBf7l: "cursor-ui-1uczgqu cursor-ui-8w47nc", kInvED: "cursor-ui-1wfwxd8 cursor-ui-y9f4xx", kIxVMA: "cursor-ui-10kfwgp", ksF3WI: "cursor-ui-1qwi9e9", kYm2EN: "cursor-ui-7ne0kr", kqGeR4: "cursor-ui-bqnjih", $$css: true }, skeleton: { k1xSpc: "cursor-ui-1rg5ohu", kZKoxP: "cursor-ui-170jfvy", kaIpWk: "cursor-ui-1e1y6u3", kWkggS: "cursor-ui-qcqck4", kKVMdj: "cursor-ui-b6nxcn", k44tkh: "cursor-ui-1sbju2s", kyAemX: "cursor-ui-4hg4is", ko0y90: "cursor-ui-a4qsjk", kXLuUW: "cursor-ui-xymvpz", $$css: true }, skeletonName: { kzqmXN: "cursor-ui-inu3np", k7Eaqz: "cursor-ui-450l9j", ks0D6T: "cursor-ui-1racy4e", $$css: true }, skeletonDescription: { kzqmXN: "cursor-ui-ycev2y", k7Eaqz: "cursor-ui-6c5l4p", ks0D6T: "cursor-ui-14lruf5", $$css: true }, skeletonCreator: { kzqmXN: "cursor-ui-15yg21f", $$css: true }, skeletonUsage: { kzqmXN: "cursor-ui-1td3qas", $$css: true }, skeletonBar: { kzqmXN: "cursor-ui-1g6vzv9", $$css: true }, skeletonAction: { kzqmXN: "cursor-ui-187nhsf", kZKoxP: "cursor-ui-lup9mm", kaIpWk: "cursor-ui-1i4c3av", $$css: true }, skeletonActionChevron: { kzqmXN: "cursor-ui-smyaan", $$css: true } }, MWm = new Intl.NumberFormat(void 0, { notation: "compact", maximumFractionDigits: 1 }), DWm = new Intl.NumberFormat(void 0, { style: "percent", maximumFractionDigits: 0 }), NWm = "Indicates how often the skill was invoked by the agent vs. by a human. Higher % means more agent-invocations.", LWm = [{ value: "last_7d", label: "7d" }, { value: "last_30d", label: "30d" }, { value: "last_90d", label: "3mo" }], OWm = [{ value: 5, label: "5" }, { value: 10, label: "10" }, { value: 25, label: "25" }, { value: 50, label: "50" }];
} });
import { jsx as V1, jsxs as bie, Fragment as FWm } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ets } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as aze, useState as m$, useEffect as Wot, useImperativeHandle as sJ1 } from "./react-runtime/react/esm-index-production.js";
import { createPortal as oJ1 } from "./react-runtime/react-dom/esm-index-production.js";
function BWm(t) {
  const e = ets(2);
  let n;
  return e[0] !== t ? (n = V1(An, { ...t, variant: "text", size: "md", frame: "content", rootStyle: tts.inlineSelector }), e[0] = t, e[1] = n) : n = e[1], n;
}
function aJ1() {
  return tts.root;
}
function UWm(t, e) {
  const n = t.pluginName?.trim().toLowerCase();
  return t.pluginId !== void 0 && t.pluginId === e.id || n !== void 0 && (n === e.name.trim().toLowerCase() || n === e.displayName.trim().toLowerCase());
}
function lJ1(t) {
  return V1(DXa, { ...t });
}
function cJ1(t, e) {
  return t.trim().toLowerCase() === e.trim().toLowerCase();
}
function jWm(t, e) {
  return t.scope === "plugin" && UWm(t, e) ? true : t.configureModel?.sources.some((n) => n.kind === "plugin" && UWm(n, e)) ?? false;
}
function GZa(t, e, n) {
  const i = t.filter((r) => jWm(r, e));
  return i.find((r) => r.name === n) ?? i.find((r) => cJ1(r.name, n));
}
function $Wm(t, e) {
  const n = /* @__PURE__ */ new Map();
  for (const i of t) n.set(i.id, YTa(i, (r) => GZa(e, i, r)?.iconUrl));
  return n;
}
function qZa(t) {
  return t ?? "marketplace";
}
function uJ1(t, e) {
  if (t.kind !== e.kind) return false;
  switch (t.kind) {
    case "browse":
      return true;
    case "manage":
      return e.kind === "manage" && t.tab === e.tab && t.scope === e.scope;
    case "detail":
      return e.kind === "detail" && t.pluginId === e.pluginId && qZa(t.returnTo) === qZa(e.returnTo);
  }
}
function zZa(t) {
  if (t.kind === "user" || t.kind === "team" || t.kind === "workspace") return t;
  if (oze(t)) return { kind: "user" };
  if (Mqt(t)) return { kind: "team" };
  const e = $be(t)[0];
  return e === void 0 ? { kind: "user" } : { kind: "workspace", id: e };
}
function dJ1(t) {
  if (t.leaderboardCategory === "plugins") return t.teamDisplayName?.trim() || void 0;
  if (t.workspaceScopeEnabled) return t.selectedWorkspaceDisplayName?.trim() || void 0;
}
function hJ1(t) {
  return `${t.kind}:${t.dateRange}`;
}
function HWm(t) {
  return t.trim().toLowerCase();
}
function pJ1(t, e) {
  return `${t}:${HWm(e)}`;
}
function mJ1(t) {
  const e = t.publisher?.logoUrl?.trim();
  return e !== void 0 && e.length !== 0;
}
function gJ1(t) {
  const e = /* @__PURE__ */ new Map();
  for (const n of t) {
    const i = [n.name, ...n.aliases ?? []];
    for (const r of i) {
      const s = HWm(r);
      if (s.length === 0) continue;
      const o = `${n.kind}:${s}`, a = e.get(o);
      a ? a.push(n) : e.set(o, [n]);
    }
  }
  return e;
}
function WWm(t) {
  return t === void 0 ? [] : [...t.skills, ...t.mcps, ...t.subagents, ...t.commands];
}
function GWm(t, e) {
  return `${t}:${e}`;
}
function fJ1(t) {
  const e = t.sourceLookup.get(pJ1(t.kind, t.row.primitiveName))?.filter((i) => i.isWorkspaceViewable === true) ?? [];
  if (e.length === 0) return;
  const n = t.plugin;
  if (n !== void 0) {
    const i = (u) => {
      if (u.length === 1) return u[0];
      const d = u.filter((h) => h.ownerWorkspaceId === void 0);
      return d.length === 1 ? d[0] : void 0;
    }, r = e.filter((u) => u.pluginId !== void 0 && u.pluginId === n.id), s = i(r);
    if (s !== void 0) return s;
    const o = n.marketplace?.id, a = o === void 0 ? void 0 : o.toString(), l = e.filter((u) => u.pluginId === void 0 && u.marketplaceId !== void 0 && u.marketplaceId === a), c = i(l);
    if (c !== void 0) return c;
  }
  return e.length === 1 ? e[0] : void 0;
}
function vJ1(t, e, n, i, r) {
  const s = [];
  for (const o of t) {
    const a = n.get(o.pluginId), l = e === "skill" ? { humanCount: o.humanCount, agentCount: o.agentCount } : {}, c = fJ1({ row: o, kind: e, plugin: a, sourceLookup: i });
    if (c === void 0) continue;
    const u = r !== void 0 ? { sourceId: c.id, onRowClick: () => r(c.id, e) } : { sourceId: c.id }, d = a?.publisher?.displayName, h = c?.authorship ?? d ?? c?.sourceLabel, p = c?.authorship === void 0 && d !== void 0 && d.trim().length !== 0, g = a !== void 0 && p && mJ1(a) ? W7(a, 20) : void 0;
    if (!a) {
      if (o.pluginId !== "0") continue;
      s.push({ id: `${o.pluginId}:${o.primitiveName}`, name: o.primitiveName, creator: h, creatorVisual: g, usageCount: o.usageCount, ...l, ...u });
      continue;
    }
    s.push({ id: `${o.pluginId}:${o.primitiveName}`, name: o.primitiveName, creator: h, creatorVisual: g, usageCount: o.usageCount, ...l, ...u });
  }
  return s;
}
function _J1(t) {
  const e = (t.pageNumber - 1) * t.pageSize, n = e + t.pageSize, i = t.rows.length >= n, r = t.candidateHasMore && !t.streamComplete;
  return { rows: t.rows.slice(e, n), hasMore: t.rows.length > n || r, needsMoreCandidates: !i && r, rankOffset: e };
}
function bJ1(t) {
  const e = ets(3), n = t.primitiveUsageCacheKey ?? "default";
  let i;
  return e[0] !== t || e[1] !== n ? (i = V1(yJ1, { ...t }, n), e[0] = t, e[1] = n, e[2] = i) : i = e[2], i;
}
function yJ1(t) {
  const e = ets(568), n = aze(null), i = aze(null), r = t.manageScopeMultiselectEnabled !== false, [s, o] = m$(null), a = aze(null), [l, c] = m$(Number.POSITIVE_INFINITY), [u, d] = m$(""), [h, p] = m$(zWm), [g, f] = m$("manage"), [_, b] = m$("plugins");
  let y;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (y = { kind: "user" }, e[0] = y) : y = e[0];
  const [S, k] = m$(y), C = aze(false), [T] = m$("last_30d"), [I, A] = m$(1), [P, M] = m$(10), [O, N] = m$(RJ1), U = ro(O), j = aze(null), [$, H] = m$(null), [G, q] = m$(null), [K, V] = m$(null), [Y, J] = m$(null), [Q, te] = m$(false), [ee, re] = m$("manual"), [ie, oe] = m$(null);
  let se;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (se = { kind: "scope", scope: "all" }, e[1] = se) : se = e[1];
  const [le, ce] = m$(se), [ae, de] = m$(void 0), [he, ge] = m$("marketplace"), pe = t.onCustomizeViewChange, ve = aze(false), fe = aze(void 0);
  let Te;
  e[2] !== S ? (Te = PCe(S), e[2] = S, e[3] = Te) : Te = e[3];
  const _e = Te;
  let Ce, Se;
  e[4] !== _e || e[5] !== _ || e[6] !== g || e[7] !== pe || e[8] !== ae || e[9] !== he ? (Ce = () => {
    if (pe === void 0) return;
    const vr = ae !== void 0 ? { kind: "detail", pluginId: ae, returnTo: he } : g === "manage" ? { kind: "manage", tab: _, scope: _e } : { kind: "browse" };
    if (!ve.current) {
      ve.current = true, fe.current = void 0;
      return;
    }
    if (fe.current !== void 0 && uJ1(fe.current, vr)) {
      fe.current = void 0;
      return;
    }
    fe.current = void 0, pe(vr);
  }, Se = [pe, ae, he, g, _, _e], e[4] = _e, e[5] = _, e[6] = g, e[7] = pe, e[8] = ae, e[9] = he, e[10] = Ce, e[11] = Se) : (Ce = e[10], Se = e[11]), Wot(Ce, Se);
  const Pe = aze(t.onSelectedManageWorkspaceChange);
  let we;
  e[12] !== t.onSelectedManageWorkspaceChange ? (we = () => {
    Pe.current = t.onSelectedManageWorkspaceChange;
  }, e[12] = t.onSelectedManageWorkspaceChange, e[13] = we) : we = e[13], Wot(we);
  const Ie = t.usageWorkspaceOptions ?? [], Me = t.selectedUsageWorkspaceId !== void 0 && Ie.some((vr) => vr.id === t.selectedUsageWorkspaceId) ? t.selectedUsageWorkspaceId : void 0;
  let De;
  e[14] !== t.hasTeam || e[15] !== t.teamDisplayName ? (De = t.hasTeam === true || (t.teamDisplayName ?? "").trim() !== "", e[14] = t.hasTeam, e[15] = t.teamDisplayName, e[16] = De) : De = e[16];
  const be = r && De;
  let je;
  e[17] !== Me || e[18] !== r || e[19] !== be ? (je = Bes({ includeUser: true, includeTeam: be, workspaceIds: !r || Me === void 0 ? [] : [Me] }), e[17] = Me, e[18] = r, e[19] = be, e[20] = je) : je = e[20];
  const $e = je;
  let Je;
  e[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Je = (vr) => {
    const gc = $be(vr);
    Pe.current?.(gc.length > 0 ? gc : void 0);
  }, e[21] = Je) : Je = e[21];
  const Ge = Je;
  let xe;
  e[22] !== $e ? (xe = (vr) => {
    C.current = false, k($e), fe.current = { ...vr, scope: PCe($e) }, Ge($e);
  }, e[22] = $e, e[23] = xe) : xe = e[23];
  const Oe = xe, ct = t.setNavigateToView;
  let Ye, Ve;
  e[24] !== Oe || e[25] !== r || e[26] !== ct ? (Ye = () => {
    if (ct !== void 0) return ct((vr) => {
      switch (fe.current = vr, vr.kind) {
        case "browse": {
          de(void 0), f("browse");
          return;
        }
        case "manage": {
          if (de(void 0), f("manage"), b(vr.tab), vr.scope === VZa) {
            Oe(vr);
            return;
          }
          const gc = yHm(vr.scope), Fd = r ? gc : zZa(gc);
          C.current = true, k(Fd), fe.current = { ...vr, scope: PCe(Fd) }, Ge(Fd);
          return;
        }
        case "detail": {
          ge(qZa(vr.returnTo)), de(vr.pluginId);
          return;
        }
      }
    }), () => ct(void 0);
  }, Ve = [Oe, Ge, r, ct], e[24] = Oe, e[25] = r, e[26] = ct, e[27] = Ye, e[28] = Ve) : (Ye = e[27], Ve = e[28]), Wot(Ye, Ve);
  let Xe, lt;
  e[29] !== S || e[30] !== r || e[31] !== _ || e[32] !== g || e[33] !== ae || e[34] !== he ? (Xe = () => {
    if (r) return;
    const vr = zZa(S), gc = PCe(vr);
    if (gc === PCe(S)) return;
    fe.current = ae !== void 0 ? { kind: "detail", pluginId: ae, returnTo: he } : g === "manage" ? { kind: "manage", tab: _, scope: gc } : { kind: "browse" }, k(vr);
    const Fd = $be(vr);
    Pe.current?.(Fd.length > 0 ? Fd : void 0);
  }, lt = [S, r, _, g, ae, he], e[29] = S, e[30] = r, e[31] = _, e[32] = g, e[33] = ae, e[34] = he, e[35] = Xe, e[36] = lt) : (Xe = e[35], lt = e[36]), Wot(Xe, lt);
  let He, gt;
  e[37] !== $e || e[38] !== S || e[39] !== _ || e[40] !== g || e[41] !== ae || e[42] !== he ? (He = () => {
    if (C.current) return;
    const vr = $e, gc = PCe(vr);
    if (gc === PCe(S)) return;
    fe.current = ae !== void 0 ? { kind: "detail", pluginId: ae, returnTo: he } : g === "manage" ? { kind: "manage", tab: _, scope: gc } : { kind: "browse" }, k(vr);
    const Fd = $be(vr), Hp = $be(S);
    (Fd.length !== Hp.length || Fd.some((jg, v_) => jg !== Hp[v_])) && Pe.current?.(Fd.length > 0 ? Fd : void 0);
  }, gt = [$e, S, ae, he, g, _], e[37] = $e, e[38] = S, e[39] = _, e[40] = g, e[41] = ae, e[42] = he, e[43] = He, e[44] = gt) : (He = e[43], gt = e[44]), Wot(He, gt);
  let ht;
  e: {
    switch (h) {
      case "skills": {
        ht = "skill";
        break e;
      }
      case "tools": {
        ht = "mcp";
        break e;
      }
      case "subagents": {
        ht = "subagent";
        break e;
      }
      case "commands": {
        ht = "command";
        break e;
      }
      case "plugins": {
        ht = null;
        break e;
      }
    }
    ht = void 0;
  }
  const Ae = ht;
  let ot;
  e: {
    if (Ae === null) {
      ot = null;
      break e;
    }
    let vr;
    e[45] !== T || e[46] !== Ae ? (vr = hJ1({ kind: Ae, dateRange: T }), e[45] = T, e[46] = Ae, e[47] = vr) : vr = e[47], ot = vr;
  }
  const Be = ot;
  let Ue;
  e[48] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ue = () => {
    A(1);
  }, e[48] = Ue) : Ue = e[48];
  const it = Ue, qe = t.onAfterDeleteTeamMarketplace;
  let pt;
  e[49] !== G || e[50] !== qe || e[51] !== t.manageTeamMarketplaceClient ? (pt = async (vr) => {
    const gc = t.manageTeamMarketplaceClient;
    gc !== void 0 && (V(vr.id), await Promise.resolve().then(() => gc.removeMarketplace({ marketplaceId: vr.id, teamId: vr.teamId })).then(() => {
      G === vr.id && q(null), qe?.(vr.id);
    }).finally(() => {
      V((Fd) => Fd === vr.id ? null : Fd);
    }));
  }, e[49] = G, e[50] = qe, e[51] = t.manageTeamMarketplaceClient, e[52] = pt) : pt = e[52];
  const dt = pt, ft = t.fetchTeamPrimitiveUsage;
  let bt;
  e[53] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (bt = (vr) => {
    if (a.current?.disconnect(), a.current = null, n.current = vr, vr === null) return;
    const gc = () => {
      c(vr.getBoundingClientRect().width);
    };
    if (gc(), typeof ResizeObserver > "u") return;
    const Fd = new ResizeObserver((Hp) => {
      const jg = Hp[0]?.contentRect.width;
      if (jg !== void 0) {
        c(jg);
        return;
      }
      gc();
    });
    Fd.observe(vr), a.current = Fd;
  }, e[53] = bt) : bt = e[53];
  const St = bt, { ref: Et } = t;
  let kt, xt;
  e[54] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (kt = () => ({ focusSearch: () => {
    const vr = i.current;
    vr !== null && (vr.focus({ preventScroll: true }), vr.select());
  } }), xt = [], e[54] = kt, e[55] = xt) : (kt = e[54], xt = e[55]), sJ1(Et, kt, xt);
  let Pt;
  e[56] !== t.allMarketplacePlugins || e[57] !== t.manage.mcpServers ? (Pt = $Wm(t.allMarketplacePlugins, t.manage.mcpServers), e[56] = t.allMarketplacePlugins, e[57] = t.manage.mcpServers, e[58] = Pt) : Pt = e[58];
  const Dt = Pt;
  let Vt;
  e[59] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Vt = (vr, gc) => {
    ge(gc), de(vr.id);
  }, e[59] = Vt) : Vt = e[59];
  const tn = Vt;
  let un;
  e[60] !== t.installedPlugins ? (un = t.installedPlugins ?? [], e[60] = t.installedPlugins, e[61] = un) : un = e[61];
  let kn;
  e[62] !== t.manage.mcpServers || e[63] !== un ? (kn = $Wm(un, t.manage.mcpServers), e[62] = t.manage.mcpServers, e[63] = un, e[64] = kn) : kn = e[64];
  const oi = kn;
  let Fn;
  if (e[65] !== oi || e[66] !== Dt || e[67] !== t.installedPluginIdSet) {
    Fn = [];
    for (const vr of t.installedPluginIdSet) {
      const gc = oi.get(vr) ?? Dt.get(vr);
      gc !== void 0 && Fn.push(gc);
    }
    e[65] = oi, e[66] = Dt, e[67] = t.installedPluginIdSet, e[68] = Fn;
  } else Fn = e[68];
  const Qt = Fn;
  let Sn;
  if (e[69] !== Qt || e[70] !== S || e[71] !== t.enabledInstallScopesByPluginId || e[72] !== t.installModeByPluginId || e[73] !== t.installedProjectIdsByPluginId) {
    e: {
      const vr = $be(S), gc = (jg) => {
        const v_ = t.installedProjectIdsByPluginId.get(jg);
        return v_ === void 0 ? false : vr.some((jw) => v_.has(jw));
      };
      if (S.kind === "workspace" || S.kind === "workspaces") {
        Sn = Qt.filter((jg) => gc(jg.id));
        break e;
      }
      if (S.kind === "sources") {
        Sn = Qt.filter((jg) => {
          const v_ = t.installModeByPluginId?.get(jg.id), jw = t.enabledInstallScopesByPluginId.get(jg.id), jS = gc(jg.id), tM = v_ !== void 0 ? v_ === "user" : jw === void 0 || jw.user, Qx = v_ !== void 0 ? v_ !== "user" : jw?.team === true;
          return S.includeUser && tM || S.includeTeam && Qx || jS;
        });
        break e;
      }
      const Fd = S.kind === "team";
      let Hp;
      e[75] !== Qt || e[76] !== t.enabledInstallScopesByPluginId || e[77] !== t.installModeByPluginId || e[78] !== Fd ? (Hp = Qt.filter((jg) => {
        const v_ = t.installModeByPluginId?.get(jg.id);
        if (v_ !== void 0) return Fd ? v_ !== "user" : v_ === "user";
        const jw = t.enabledInstallScopesByPluginId.get(jg.id);
        return jw === void 0 ? !Fd : Fd ? jw.team : jw.user;
      }), e[75] = Qt, e[76] = t.enabledInstallScopesByPluginId, e[77] = t.installModeByPluginId, e[78] = Fd, e[79] = Hp) : Hp = e[79], Sn = Hp;
    }
    e[69] = Qt, e[70] = S, e[71] = t.enabledInstallScopesByPluginId, e[72] = t.installModeByPluginId, e[73] = t.installedProjectIdsByPluginId, e[74] = Sn;
  } else Sn = e[74];
  const $n = Sn, Mn = t.extensionPluginIds;
  let Un;
  e[80] !== Mn || e[81] !== Qt ? (Un = (vr) => Qt.find((gc) => Mn?.has(gc.id) !== true && jWm(vr, gc)), e[80] = Mn, e[81] = Qt, e[82] = Un) : Un = e[82];
  const Xn = Un, [Ti, bi] = m$(null), Qn = t.importedPluginIds, ni = t.userLocalPluginIds, pn = t.enabledInstallScopesByPluginId, yn = t.primaryInstallScopeByPluginId, Ln = t.installModeByPluginId;
  let xi;
  e[83] !== pn || e[84] !== Mn || e[85] !== Qn || e[86] !== Ln || e[87] !== yn || e[88] !== ni ? (xi = (vr) => {
    const gc = vr.id.startsWith("user-local:") || ni?.has(vr.id) === true || Mn?.has(vr.id) === true || Qn?.has(vr.id) === true, Fd = pn.get(vr.id)?.user === true || yn.get(vr.id) === "user" || Ln?.get(vr.id) === "team-default";
    return gc || !Fd ? Promise.resolve(true) : new Promise((Hp) => {
      bi((jg) => (jg?.resolve(false), { plugin: vr, resolve: Hp }));
    });
  }, e[83] = pn, e[84] = Mn, e[85] = Qn, e[86] = Ln, e[87] = yn, e[88] = ni, e[89] = xi) : xi = e[89];
  const Ci = xi;
  let En;
  e[90] !== Ti ? (En = (vr) => {
    Ti?.resolve(vr), bi(null);
  }, e[90] = Ti, e[91] = En) : En = e[91];
  const Dn = En, Si = t.onUninstall;
  let Ui;
  e[92] !== Ci || e[93] !== Si ? (Ui = (vr) => {
    Ci(vr).then((gc) => {
      gc && Si(vr);
    });
  }, e[92] = Ci, e[93] = Si, e[94] = Ui) : Ui = e[94];
  const Nn = Ui;
  let ci;
  e[95] !== Si ? (ci = (vr) => {
    Si(vr);
  }, e[95] = Si, e[96] = ci) : ci = e[96];
  const Pi = ci, vi = t.onSelectedManageWorkspaceChange;
  let Yi;
  e[97] !== r || e[98] !== vi ? (Yi = (vr) => {
    const gc = r ? vr : zZa(vr);
    C.current = true, k(gc);
    const Fd = $be(gc);
    vi?.(Fd.length > 0 ? Fd : void 0);
  }, e[97] = r, e[98] = vi, e[99] = Yi) : Yi = e[99];
  const Bn = Yi;
  let Tn;
  e[100] !== t.usageWorkspaceOptions ? (Tn = new Set((t.usageWorkspaceOptions ?? []).map(AJ1)), e[100] = t.usageWorkspaceOptions, e[101] = Tn) : Tn = e[101];
  const Zn = Tn;
  let tr;
  e[102] !== Zn || e[103] !== S || e[104] !== _ || e[105] !== g || e[106] !== t || e[107] !== ae || e[108] !== he ? (tr = () => {
    if (t.usageWorkspaceOptions === void 0 || t.usageWorkspaceOptions.length === 0) return;
    const vr = $be(S);
    if (vr.length === 0) return;
    const gc = vr.filter((jg) => Zn.has(jg));
    if (gc.length === vr.length) return;
    const Fd = Bes({ includeUser: oze(S), includeTeam: Mqt(S), workspaceIds: gc }), Hp = PCe(Fd);
    fe.current = ae !== void 0 ? { kind: "detail", pluginId: ae, returnTo: he } : g === "manage" ? { kind: "manage", tab: _, scope: Hp } : { kind: "browse" }, k(Fd), t.onSelectedManageWorkspaceChange?.(gc.length > 0 ? gc : void 0);
  }, e[102] = Zn, e[103] = S, e[104] = _, e[105] = g, e[106] = t, e[107] = ae, e[108] = he, e[109] = tr) : tr = e[109];
  let hi;
  e[110] !== Zn || e[111] !== S || e[112] !== _ || e[113] !== g || e[114] !== t.onSelectedManageWorkspaceChange || e[115] !== t.usageWorkspaceOptions || e[116] !== ae || e[117] !== he ? (hi = [Zn, S, _, g, t.onSelectedManageWorkspaceChange, t.usageWorkspaceOptions, ae, he], e[110] = Zn, e[111] = S, e[112] = _, e[113] = g, e[114] = t.onSelectedManageWorkspaceChange, e[115] = t.usageWorkspaceOptions, e[116] = ae, e[117] = he, e[118] = hi) : hi = e[118], Wot(tr, hi);
  let ui;
  e[119] !== t.marketplaces ? (ui = t.marketplaces ?? [], e[119] = t.marketplaces, e[120] = ui) : ui = e[120];
  let Ni;
  e[121] !== ui ? (Ni = PQ1(ui), e[121] = ui, e[122] = Ni) : Ni = e[122];
  const cr = Ni;
  let fs;
  e[123] !== cr || e[124] !== le ? (fs = MQ1(le, cr), e[123] = cr, e[124] = le, e[125] = fs) : fs = e[125];
  const mi = fs;
  let di;
  e[126] !== mi || e[127] !== cr || e[128] !== t.marketplaces ? (di = DQ1(mi, t.marketplaces, cr), e[126] = mi, e[127] = cr, e[128] = t.marketplaces, e[129] = di) : di = e[129];
  const Mr = di;
  let jr;
  e[130] !== mi || e[131] !== t.allMarketplacePlugins || e[132] !== t.pluginsByMarketplaceId || e[133] !== Mr ? (jr = NQ1({ effective: mi, allMarketplacePlugins: t.allMarketplacePlugins, pluginsByMarketplaceId: t.pluginsByMarketplaceId, scopedMarketplaces: Mr }), e[130] = mi, e[131] = t.allMarketplacePlugins, e[132] = t.pluginsByMarketplaceId, e[133] = Mr, e[134] = jr) : jr = e[134];
  const Ur = jr;
  let Ws;
  e: {
    if (TWm(mi)) {
      Ws = t.teamPinnedPlugins;
      break e;
    }
    let vr;
    e[135] !== Ur ? (vr = new Set(Ur.map(xJ1)), e[135] = Ur, e[136] = vr) : vr = e[136];
    const gc = vr;
    let Fd;
    if (e[137] !== t.teamPinnedPlugins || e[138] !== gc) {
      let Hp;
      e[140] !== gc ? (Hp = (jg) => gc.has(jg.id), e[140] = gc, e[141] = Hp) : Hp = e[141], Fd = t.teamPinnedPlugins.filter(Hp), e[137] = t.teamPinnedPlugins, e[138] = gc, e[139] = Fd;
    } else Fd = e[139];
    Ws = Fd;
  }
  const jo = Ws;
  let Ia;
  e[142] !== u || e[143] !== Ur ? (Ia = l6e(Ur, u), e[142] = u, e[143] = Ur, e[144] = Ia) : Ia = e[144];
  const ga = Ia;
  let zs;
  e[145] !== u || e[146] !== jo ? (zs = l6e(jo, u), e[145] = u, e[146] = jo, e[147] = zs) : zs = e[147];
  const Vs = zs;
  let Ra;
  e: {
    if (t.pluginsByMarketplaceId === void 0) {
      Ra = void 0;
      break e;
    }
    let vr;
    if (e[148] !== t.pluginsByMarketplaceId || e[149] !== u) {
      vr = /* @__PURE__ */ new Map();
      for (const [gc, Fd] of t.pluginsByMarketplaceId) vr.set(gc, l6e(Fd, u));
      e[148] = t.pluginsByMarketplaceId, e[149] = u, e[150] = vr;
    } else vr = e[150];
    Ra = vr;
  }
  const ur = Ra;
  let wr;
  e: {
    if (t.enableGlobalSearch !== true || u.trim() === "") {
      let gc;
      e[151] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (gc = [], e[151] = gc) : gc = e[151], wr = gc;
      break e;
    }
    let vr;
    if (e[152] !== g || e[153] !== t.allMarketplacePlugins || e[154] !== t.installedPluginIdSet || e[155] !== t.teamInstallCountByPluginId || e[156] !== t.teamPinnedPlugins || e[157] !== ga || e[158] !== Vs || e[159] !== u) {
      const gc = g === "browse" ? [...ga, ...Vs] : [...l6e(t.allMarketplacePlugins, u), ...l6e(t.teamPinnedPlugins, u)], Fd = /* @__PURE__ */ new Set(), Hp = [];
      for (const jS of gc) Fd.has(jS.id) || t.installedPluginIdSet.has(jS.id) || (Fd.add(jS.id), Hp.push(jS));
      const jg = t.teamInstallCountByPluginId;
      let v_;
      e[161] !== jg ? (v_ = (jS, tM) => {
        const Qx = (jg.get(tM.id) ?? 0) - (jg.get(jS.id) ?? 0);
        return Qx !== 0 ? Qx : jS.displayName.localeCompare(tM.displayName);
      }, e[161] = jg, e[162] = v_) : v_ = e[162], vr = vst(Hp, u, IJ1, v_), e[152] = g, e[153] = t.allMarketplacePlugins, e[154] = t.installedPluginIdSet, e[155] = t.teamInstallCountByPluginId, e[156] = t.teamPinnedPlugins, e[157] = ga, e[158] = Vs, e[159] = u, e[160] = vr;
    } else vr = e[160];
    wr = vr;
  }
  const Es = wr;
  let eo;
  if (e[163] !== ga) {
    eo = /* @__PURE__ */ new Map();
    for (const vr of ga) eo.set(vr.id, vr);
    e[163] = ga, e[164] = eo;
  } else eo = e[164];
  const ts = eo, rr = t.usagePrimitiveDescriptors ?? t.primitiveDescriptors, Gs = t.onOpenUsagePrimitiveSource ?? t.onOpenPrimitiveSource;
  let Vr;
  e[165] !== rr ? (Vr = gJ1(WWm(rr)), e[165] = rr, e[166] = Vr) : Vr = e[166];
  const So = Vr;
  let na;
  if (e[167] !== rr) {
    na = /* @__PURE__ */ new Map();
    for (const vr of WWm(rr)) na.set(GWm(vr.kind, vr.id), vr);
    e[167] = rr, e[168] = na;
  } else na = e[168];
  const ll = na, Ol = g === "browse" && u.trim() === "";
  let ia;
  e: {
    if (!Ol) {
      let gc;
      e[169] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (gc = [], e[169] = gc) : gc = e[169], ia = gc;
      break e;
    }
    let vr;
    e[170] !== t.installedPluginIdSet || e[171] !== t.teamInstallCountByPluginId || e[172] !== ga ? (vr = aQd(ga, t.teamInstallCountByPluginId, t.installedPluginIdSet), e[170] = t.installedPluginIdSet, e[171] = t.teamInstallCountByPluginId, e[172] = ga, e[173] = vr) : vr = e[173], ia = vr;
  }
  const co = ia;
  let Mi;
  e: {
    if (!Ol) {
      let Fd;
      e[174] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Fd = [], e[174] = Fd) : Fd = e[174], Mi = Fd;
      break e;
    }
    const vr = t.teamInstallCountByPluginId;
    let gc;
    e[175] !== vr || e[176] !== ga ? (gc = [...ga].map((Fd) => ({ plugin: Fd, count: vr.get(Fd.id) ?? 0 })).sort(EJ1), e[175] = vr, e[176] = ga, e[177] = gc) : gc = e[177], Mi = gc;
  }
  const vn = Mi;
  let zn;
  e[178] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (zn = (vr) => {
    const { plugin: gc, count: Fd } = vr;
    return { id: gc.id, name: gc.displayName, description: gc.description, creator: gc.publisher?.displayName, leading: W7(gc, 18), usageCount: Fd, onRowClick: () => tn(gc, "marketplace") };
  }, e[178] = zn) : zn = e[178];
  const _i = zn;
  let sr;
  e[179] !== Be || e[180] !== O ? (sr = Be !== null ? O.get(Be) : void 0, e[179] = Be, e[180] = O, e[181] = sr) : sr = e[181];
  const Gi = sr, ko = Gi !== void 0;
  let As;
  e: {
    if (Ae === null) {
      As = void 0;
      break e;
    }
    let vr;
    e[182] !== Gi?.rows ? (vr = Gi?.rows ?? [], e[182] = Gi?.rows, e[183] = vr) : vr = e[183];
    let gc;
    e[184] !== Ae || e[185] !== Gs || e[186] !== So || e[187] !== vr || e[188] !== ts ? (gc = vJ1(vr, Ae, ts, So, Gs), e[184] = Ae, e[185] = Gs, e[186] = So, e[187] = vr, e[188] = ts, e[189] = gc) : gc = e[189], As = gc;
  }
  const Fs = As, Qo = ro(Fs?.length ?? 0), hl = Ae !== null, lr = t.usageWorkspaceOptions ?? [], mr = t.leaderboardWorkspaceScope && Ae !== null && lr.length === 0, Bi = t.usagePrimitiveDescriptorLoadState ?? t.primitiveDescriptorLoadState, Hr = t.usagePrimitiveDescriptorLoadFailures ?? t.primitiveDescriptorLoadFailures, Ns = Ae === null ? true : Bi?.[Ae] ?? true, Io = Ae !== null && (Hr?.[Ae] ?? false);
  let fa;
  e: {
    if (!hl) {
      fa = void 0;
      break e;
    }
    let vr;
    e[190] !== I || e[191] !== P || e[192] !== Gi?.hasMore || e[193] !== ko || e[194] !== Fs ? (vr = _J1({ rows: Fs ?? [], pageNumber: I, pageSize: P, candidateHasMore: Gi?.hasMore ?? false, streamComplete: ko }), e[190] = I, e[191] = P, e[192] = Gi?.hasMore, e[193] = ko, e[194] = Fs, e[195] = vr) : vr = e[195], fa = vr;
  }
  const Ls = fa, po = (I - 1) * P, ka = po + P;
  let Ms;
  e[196] !== ka || e[197] !== vn || e[198] !== po || e[199] !== hl || e[200] !== Ls?.rows ? (Ms = hl ? Ls?.rows ?? [] : vn.slice(po, ka).map(_i), e[196] = ka, e[197] = vn, e[198] = po, e[199] = hl, e[200] = Ls?.rows, e[201] = Ms) : Ms = e[201];
  const Go = Ms;
  let Fl;
  e[202] !== ft || e[203] !== mr || e[204] !== T || e[205] !== I || e[206] !== P || e[207] !== Ae || e[208] !== Be || e[209] !== U || e[210] !== t.leaderboardEnabled || e[211] !== Qo || e[212] !== Io || e[213] !== Ns ? (Fl = () => {
    if (ft === void 0 || t.leaderboardEnabled !== true || Ae === null || Be === null || Io || mr) return;
    const vr = I * P;
    if (Qo.current >= vr) return;
    const Fd = U.current.get(Be), Hp = Fd?.nextPageNumber ?? 1;
    if (Fd !== void 0 || !Ns) return;
    const jg = j.current;
    if (jg?.key === Be && jg.pageNumber === Hp) return;
    jg !== null && jg.controller.abort();
    const v_ = new AbortController(), jw = { key: Be, pageNumber: Hp, controller: v_ };
    return j.current = jw, H(Be), ft({ primitiveType: Ae, dateRange: T, pageNumber: Hp, pageSize: YWm, signal: v_.signal }).then((jS) => {
      v_.signal.aborted || N((tM) => {
        const Qx = new Map(tM), AN = Qx.get(Be), DF = AN !== void 0 && Hp !== 1 ? AN.rows : [];
        return Qx.set(Be, { rows: [...DF, ...jS.rows], nextPageNumber: Hp + 1, hasMore: jS.hasMore }), Qx;
      });
    }).catch((jS) => {
      jS instanceof DOMException && jS.name === "AbortError" || console.error(`[CustomizeView] fetchTeamPrimitiveUsage failed for cacheKey="${Be}" page=${Hp}:`, jS);
    }).finally(() => {
      j.current === jw && (j.current = null, H(null));
    }), () => {
      v_.abort(), j.current === jw && (j.current = null, H((jS) => jS === jw.key ? null : jS));
    };
  }, e[202] = ft, e[203] = mr, e[204] = T, e[205] = I, e[206] = P, e[207] = Ae, e[208] = Be, e[209] = U, e[210] = t.leaderboardEnabled, e[211] = Qo, e[212] = Io, e[213] = Ns, e[214] = Fl) : Fl = e[214];
  let Gc;
  e[215] !== ft || e[216] !== mr || e[217] !== T || e[218] !== I || e[219] !== P || e[220] !== Ae || e[221] !== Be || e[222] !== t.leaderboardEnabled || e[223] !== Io || e[224] !== Ns ? (Gc = [ft, t.leaderboardEnabled, T, I, P, Ae, Be, mr, Io, Ns], e[215] = ft, e[216] = mr, e[217] = T, e[218] = I, e[219] = P, e[220] = Ae, e[221] = Be, e[222] = t.leaderboardEnabled, e[223] = Io, e[224] = Ns, e[225] = Gc) : Gc = e[225], Wot(Fl, Gc);
  const cu = aze(null);
  let La;
  e[226] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (La = /* @__PURE__ */ new Set(), e[226] = La) : La = e[226];
  const yl = aze(La);
  let rh, Bl;
  e[227] !== Ae || e[228] !== Be || e[229] !== ll || e[230] !== t.resolvePrimitiveDescriptorAuthorship || e[231] !== t.selectedUsageWorkspaceId || e[232] !== hl || e[233] !== Go ? (rh = () => {
    const vr = t.resolvePrimitiveDescriptorAuthorship;
    if (!hl || vr === void 0 || Ae === null || Be === null) return;
    const gc = `${Be}\0${t.selectedUsageWorkspaceId ?? ""}`;
    cu.current !== gc && (cu.current = gc, yl.current = /* @__PURE__ */ new Set());
    const Fd = [];
    for (const Hp of Go) {
      if (Hp.sourceId === void 0) continue;
      const jg = GWm(Ae, Hp.sourceId);
      yl.current.has(jg) || ll.get(jg)?.authorship !== void 0 || (yl.current.add(jg), Fd.push({ primitiveId: Hp.sourceId, primitiveKind: Ae }));
    }
    Fd.length !== 0 && vr(Fd);
  }, Bl = [Ae, Be, ll, t.resolvePrimitiveDescriptorAuthorship, t.selectedUsageWorkspaceId, hl, Go], e[227] = Ae, e[228] = Be, e[229] = ll, e[230] = t.resolvePrimitiveDescriptorAuthorship, e[231] = t.selectedUsageWorkspaceId, e[232] = hl, e[233] = Go, e[234] = rh, e[235] = Bl) : (rh = e[234], Bl = e[235]), Wot(rh, Bl);
  let ai;
  e: {
    if (hl) {
      ai = Ls?.rankOffset ?? 0;
      break e;
    }
    ai = (I - 1) * P;
  }
  const Jr = ai;
  let Br;
  e: {
    if (hl) {
      if (Io) {
        Br = false;
        break e;
      }
      Br = Ls?.hasMore ?? false;
      break e;
    }
    Br = vn.length > I * P;
  }
  const oa = Br, pl = hl ? void 0 : vn.length, Tl = hl && (Gi === void 0 || (Ls?.needsMoreCandidates ?? false)), Gl = hl ? ft !== void 0 && !Io && !mr && (!Ns || $ === Be || Tl) : !t.hasLoadedMarketplacePlugins || t.isLoadingInstalls;
  let dc;
  e[236] !== t.selectedUsageWorkspaceId ? (dc = (vr) => vr.id === t.selectedUsageWorkspaceId, e[236] = t.selectedUsageWorkspaceId, e[237] = dc) : dc = e[237];
  const Qd = lr.find(dc), Sp = dJ1({ leaderboardCategory: h, teamDisplayName: t.teamDisplayName, workspaceScopeEnabled: t.leaderboardWorkspaceScope, selectedWorkspaceDisplayName: Qd?.displayName }), Rg = Sp !== void 0, bf = h !== "plugins" && Rg && lr.length > 1 && t.onSelectedUsageWorkspaceChange !== void 0, Qp = Io ? "Could not load source metadata for this leaderboard." : mr ? VWm : void 0;
  let um, Hh, Bg;
  e[238] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (um = (vr) => {
    vr !== null && (p(vr), it());
  }, Hh = qWm.map(TJ1), Bg = V1(BWm, {}), e[238] = um, e[239] = Hh, e[240] = Bg) : (um = e[238], Hh = e[239], Bg = e[240]);
  let Qf;
  e[241] !== h ? (Qf = V1(b1, { "aria-label": "Leaderboard category", value: h, onValueChange: um, options: Hh, renderTrigger: Bg, menuSize: "md", contentWidth: 200 }), e[241] = h, e[242] = Qf) : Qf = e[242];
  const af = Qf;
  let lf;
  e[243] !== bf || e[244] !== Sp || e[245] !== lr || e[246] !== t ? (lf = Sp === void 0 ? null : bf ? V1(b1, { "aria-label": "Workspace usage source", value: t.selectedUsageWorkspaceId, onValueChange: (vr) => {
    vr !== null && (t.onSelectedUsageWorkspaceChange?.(vr), it());
  }, options: lr.map(CJ1), renderTrigger: V1(BWm, {}), menuSize: "md", contentWidth: 240 }) : V1("span", { className: "cursor-ui-uxw1ft cursor-ui-43mhey cursor-ui-g31tg3", children: Sp }), e[243] = bf, e[244] = Sp, e[245] = lr, e[246] = t, e[247] = lf) : lf = e[247];
  const $p = lf;
  let hb;
  e: {
    if (!Ol && g !== "browse" && G === null) {
      let v_;
      e[248] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (v_ = [], e[248] = v_) : v_ = e[248], hb = v_;
      break e;
    }
    const vr = t.teamDisplayName, gc = t.teamInstallCountByPluginId;
    let Fd;
    e[249] !== mi ? (Fd = LQ1(mi), e[249] = mi, e[250] = Fd) : Fd = e[250];
    const Hp = !Fd;
    let jg;
    e[251] !== t.teamDisplayName || e[252] !== t.teamInstallCountByPluginId || e[253] !== Mr || e[254] !== ga || e[255] !== ur || e[256] !== Vs || e[257] !== Hp ? (jg = jQ1({ allMarketplacePlugins: ga, pluginsByMarketplaceId: ur, marketplaces: Mr, teamPinnedPlugins: Vs, teamDisplayName: vr, teamInstallCountByPluginId: gc, includeCuratedCategorySections: Hp }), e[251] = t.teamDisplayName, e[252] = t.teamInstallCountByPluginId, e[253] = Mr, e[254] = ga, e[255] = ur, e[256] = Vs, e[257] = Hp, e[258] = jg) : jg = e[258], hb = jg;
  }
  const kg = hb;
  let vv;
  e: {
    if (t.enableGlobalSearch === true || g !== "browse" || u.trim() === "") {
      let gc;
      e[259] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (gc = [], e[259] = gc) : gc = e[259], vv = gc;
      break e;
    }
    let vr;
    if (e[260] !== kg || e[261] !== t.teamInstallCountByPluginId || e[262] !== u) {
      const gc = /* @__PURE__ */ new Set(), Fd = [];
      for (const jw of kg) for (const jS of jw.plugins) gc.has(jS.id) || (gc.add(jS.id), Fd.push(jS));
      const Hp = t.teamInstallCountByPluginId;
      let jg;
      e[264] !== Hp ? (jg = (jw, jS) => {
        const tM = (Hp.get(jS.id) ?? 0) - (Hp.get(jw.id) ?? 0);
        return tM !== 0 ? tM : jw.displayName.localeCompare(jS.displayName);
      }, e[264] = Hp, e[265] = jg) : jg = e[265], vr = vst(Fd, u, wJ1, jg), e[260] = kg, e[261] = t.teamInstallCountByPluginId, e[262] = u, e[263] = vr;
    } else vr = e[263];
    vv = vr;
  }
  const C_ = vv;
  let Eb;
  e[266] !== t.onAddMarketplace ? (Eb = async (vr) => {
    const gc = t.onAddMarketplace;
    gc !== void 0 && (await gc(vr), te(false), f("browse"), it());
  }, e[266] = t.onAddMarketplace, e[267] = Eb) : Eb = e[267];
  const Ib = Eb;
  let iy;
  e[268] !== Ib || e[269] !== t.onPickLocalFolder ? (iy = async () => {
    const vr = t.onPickLocalFolder;
    if (vr === void 0) return;
    const gc = await vr();
    if (typeof gc == "string" && gc.length > 0) try {
      await Ib({ scope: "user", mode: "import", localPath: gc });
    } catch {
    }
  }, e[268] = Ib, e[269] = t.onPickLocalFolder, e[270] = iy) : iy = e[270];
  const Kc = iy;
  let Fh;
  e: {
    if (G === null) {
      Fh = null;
      break e;
    }
    let vr;
    if (e[271] !== G || e[272] !== kg) {
      let Fd;
      e[274] !== G ? (Fd = (Hp) => Hp.marketplace?.id === G, e[274] = G, e[275] = Fd) : Fd = e[275], vr = kg.find(Fd), e[271] = G, e[272] = kg, e[273] = vr;
    } else vr = e[273];
    Fh = vr?.marketplace ?? null;
  }
  const Cd = Fh;
  let Ug;
  e: {
    if (G === null) {
      Ug = void 0;
      break e;
    }
    if (t.pluginsByMarketplaceId !== void 0) {
      let Hp;
      e[276] !== G || e[277] !== t.pluginsByMarketplaceId ? (Hp = t.pluginsByMarketplaceId.get(G) ?? [], e[276] = G, e[277] = t.pluginsByMarketplaceId, e[278] = Hp) : Hp = e[278], Ug = Hp;
      break e;
    }
    let vr;
    if (e[279] !== G || e[280] !== kg) {
      let Hp;
      e[282] !== G ? (Hp = (jg) => jg.marketplace?.id === G, e[282] = G, e[283] = Hp) : Hp = e[283], vr = kg.find(Hp), e[279] = G, e[280] = kg, e[281] = vr;
    } else vr = e[281];
    const gc = vr;
    let Fd;
    e[284] !== gc?.plugins ? (Fd = gc?.plugins ?? [], e[284] = gc?.plugins, e[285] = Fd) : Fd = e[285], Ug = Fd;
  }
  const ep = Ug;
  let dg;
  e[286] !== t.allMarketplacePlugins ? (dg = t.allMarketplacePlugins.filter($Za), e[286] = t.allMarketplacePlugins, e[287] = dg) : dg = e[287];
  const cf = dg;
  let wg;
  e: {
    if (ae === void 0) {
      wg = void 0;
      break e;
    }
    let vr;
    e[288] !== Dt || e[289] !== ae ? (vr = Dt.get(ae), e[288] = Dt, e[289] = ae, e[290] = vr) : vr = e[290];
    const gc = vr;
    let Fd;
    e[291] !== oi || e[292] !== ae ? (Fd = oi.get(ae), e[291] = oi, e[292] = ae, e[293] = Fd) : Fd = e[293];
    const Hp = Fd;
    if (gc === void 0) {
      wg = Hp;
      break e;
    }
    if (Hp?.loadError !== void 0 && Hp.loadError.length > 0 && gc.loadError !== Hp.loadError) {
      let jg;
      e[294] !== gc || e[295] !== Hp.loadError ? (jg = { ...gc, loadError: Hp.loadError }, e[294] = gc, e[295] = Hp.loadError, e[296] = jg) : jg = e[296], wg = jg;
      break e;
    }
    wg = gc;
  }
  const Wh = wg, Cg = l <= KWm;
  let kp, Gh;
  e[297] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (kp = Sc(aJ1()), Gh = ri("ui-customize-view", kp.className), e[297] = kp, e[298] = Gh) : (kp = e[297], Gh = e[298]);
  let ng;
  e[299] !== t.contentMaxWidth ? (ng = t.contentMaxWidth !== void 0 ? { ...kp.style, "--customize-content-max-width": t.contentMaxWidth } : kp.style, e[299] = t.contentMaxWidth, e[300] = ng) : ng = e[300];
  let bm;
  e[301] !== ng ? (bm = { className: Gh, style: ng }, e[301] = ng, e[302] = bm) : bm = e[302];
  const Jf = bm, ql = t.pluginDetail.onSelectedPluginChange;
  let Eh, U_;
  if (e[303] !== ql || e[304] !== Wh ? (Eh = () => (ql(Wh), () => {
    ql(void 0);
  }), U_ = [Wh, ql], e[303] = ql, e[304] = Wh, e[305] = Eh, e[306] = U_) : (Eh = e[305], U_ = e[306]), Wot(Eh, U_), Wh) {
    const vr = t.pluginDetail, gc = vr.workspaceName !== void 0 || t.localProjects.length > 0;
    let Fd;
    e[307] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Fd = () => {
      de(void 0), f("browse");
    }, e[307] = Fd) : Fd = e[307];
    const Hp = Fd;
    let jg;
    e[308] !== he ? (jg = () => {
      if (de(void 0), he === "customize") {
        f("manage");
        return;
      }
      it(), f("browse");
    }, e[308] = he, e[309] = jg) : jg = e[309];
    const v_ = jg;
    let jw;
    e[310] !== t.userLocalPluginIds || e[311] !== Wh.id ? (jw = t.userLocalPluginIds?.has(Wh.id), e[310] = t.userLocalPluginIds, e[311] = Wh.id, e[312] = jw) : jw = e[312];
    const jS = jw === true;
    let tM;
    e[313] !== t.extensionPluginIds || e[314] !== Wh.id ? (tM = t.extensionPluginIds?.has(Wh.id), e[313] = t.extensionPluginIds, e[314] = Wh.id, e[315] = tM) : tM = e[315];
    const Qx = tM === true;
    let AN;
    e[316] !== t.importedPluginIds || e[317] !== Wh.id ? (AN = t.importedPluginIds?.has(Wh.id), e[316] = t.importedPluginIds, e[317] = Wh.id, e[318] = AN) : AN = e[318];
    const DF = AN === true;
    let RN, V2, Jx, K2, nM, PN, k9, yI, WL, GL, sx;
    if (e[319] !== ie || e[320] !== Ci || e[321] !== v_ || e[322] !== gc || e[323] !== Qx || e[324] !== DF || e[325] !== jS || e[326] !== Ti?.plugin || e[327] !== vr || e[328] !== t.breadcrumbSlot || e[329] !== t.canManageTeamMarketplaces || e[330] !== t.configuredVariablesByPluginId || e[331] !== t.detailGlassChrome || e[332] !== t.enabledInstallScopesByPluginId || e[333] !== t.hasTeamConfiguredVariablesByPluginId || e[334] !== t.installedPluginIdSet || e[335] !== t.installedProjectIdsByPluginId || e[336] !== t.localProjects || e[337] !== t.manage || e[338] !== t.onInstall || e[339] !== t.onInstallToProject || e[340] !== t.onUninstall || e[341] !== t.onUninstallFromProject || e[342] !== t.onUninstallScope || e[343] !== t.primaryInstallScopeByPluginId || e[344] !== t.teamDisplayName || e[345] !== t.teamInstallCountByPluginId || e[346] !== Xn || e[347] !== Jf.className || e[348] !== Jf.style || e[349] !== Wh || e[350] !== he || e[351] !== Dn || e[352] !== Pi || e[353] !== Cg) {
      const R8 = t.primaryInstallScopeByPluginId.get(Wh.id), NF = t.enabledInstallScopesByPluginId.get(Wh.id), iM = t.canManageTeamMarketplaces !== true && (NF?.team ?? R8 === "team"), fH = Qx || iM;
      let X2;
      e[365] !== vr || e[366] !== t.manage.mcpServers ? (X2 = vr.onConfigurePluginMcpServer === void 0 ? void 0 : (eA, Q2) => {
        const P8 = GZa(t.manage.mcpServers, eA, Q2);
        if (P8 !== void 0) {
          oe(P8.id);
          return;
        }
        vr.onConfigurePluginMcpServer?.(eA, Q2);
      }, e[365] = vr, e[366] = t.manage.mcpServers, e[367] = X2) : X2 = e[367];
      let zA;
      e[368] !== t.manage.mcpServers || e[369] !== Wh ? (zA = (eA) => GZa(t.manage.mcpServers, Wh, eA), e[368] = t.manage.mcpServers, e[369] = Wh, e[370] = zA) : zA = e[370];
      let rM;
      e[371] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (rM = (eA) => oe(eA), e[371] = rM) : rM = e[371];
      const MN = { plugin: Wh, isInstalled: t.installedPluginIdSet.has(Wh.id), primaryInstallScope: R8, enabledInstallScopes: NF, configuredVariables: t.configuredVariablesByPluginId.get(Wh.id), hasTeamConfiguredVariables: t.hasTeamConfiguredVariablesByPluginId.get(Wh.id), teamTeammateInstallCount: t.teamInstallCountByPluginId.get(Wh.id), teamName: t.teamDisplayName, userEmail: vr.userEmail, workspaceName: vr.workspaceName, scopeOptions: gc ? ["user", "project"] : ["user"], localProjects: t.localProjects.length > 0 ? t.localProjects : void 0, installedLocalProjectIds: t.installedProjectIdsByPluginId.get(Wh.id), mcpChatState: vr.mcpChatState, glass: t.detailGlassChrome, analyticsLocation: "marketplace", tags: { imported: DF, local: jS, extension: Qx }, disableUninstall: fH, installBlockedReason: vr.getInstallBlockedReason?.(Wh), showMarketplaceBreadcrumb: false, inlineHeaderActions: !Cg, compactLayout: Cg, onSelectMarketplace: Hp, onInstall: t.onInstall, onUninstall: t.onUninstall, onUninstallScope: t.onUninstallScope, confirmUninstall: Ci, onSaveInstallVariables: vr.onSaveInstallVariables, onAuthenticateAfterSave: vr.onAuthenticateAfterSave, onInstallToProject: t.onInstallToProject, onUninstallFromProject: t.onUninstallFromProject, onOpenComponentSource: vr.onOpenComponentSource, onAuthenticateMcpServer: vr.onAuthenticateMcpServer, onTryInChat: vr.onTryInChat, onOpenInChat: vr.onOpenInChat, onAnalyticsEvent: vr.onAnalyticsEvent, onNotifyError: vr.onNotifyError, onConfigurePluginMcpServer: X2, resolveMcpManageServer: zA, mcpManageActions: { onAuthenticateMcp: t.manage.onAuthenticateMcp, onCancelMcpAuth: t.manage.onCancelMcpAuth, onConfigureServer: rM } }, Z2 = he === "customize" ? "Customize" : "Marketplace";
      let DN;
      e[372] !== v_ ? (DN = (eA) => {
        eA.preventDefault(), v_();
      }, e[372] = v_, e[373] = DN) : DN = e[373];
      let qL;
      e[374] !== Wh.displayName || e[375] !== Z2 || e[376] !== DN ? (qL = V1(Cqt, { rootLabel: Z2, rootHref: "#", currentLabel: Wh.displayName, onRootClick: DN }), e[374] = Wh.displayName, e[375] = Z2, e[376] = DN, e[377] = qL) : qL = e[377];
      const e4 = qL;
      PN = Jf.className, k9 = Jf.style, yI = St, e[378] !== ie || e[379] !== Ci || e[380] !== t.manage || e[381] !== Xn || e[382] !== Pi ? (WL = V1(kWm, { servers: t.manage.mcpServers, configureServerId: ie, onConfigureServerIdChange: oe, mcp: t.manage, resolveUninstallPlugin: Xn, confirmUninstall: Ci, onUninstallPlugin: Pi }), e[378] = ie, e[379] = Ci, e[380] = t.manage, e[381] = Xn, e[382] = Pi, e[383] = WL) : WL = e[383];
      const k3 = Ti?.plugin ?? null;
      let NN, YU;
      e[384] !== Dn ? (NN = () => Dn(true), YU = () => Dn(false), e[384] = Dn, e[385] = NN, e[386] = YU) : (NN = e[385], YU = e[386]), e[387] !== k3 || e[388] !== NN || e[389] !== YU ? (GL = V1(CWm, { plugin: k3, onConfirm: NN, onCancel: YU }), e[387] = k3, e[388] = NN, e[389] = YU, e[390] = GL) : GL = e[390], e[391] !== e4 || e[392] !== t.breadcrumbSlot ? (sx = t.breadcrumbSlot != null ? oJ1(e4, t.breadcrumbSlot) : null, e[391] = e4, e[392] = t.breadcrumbSlot, e[393] = sx) : sx = e[393], K2 = "cursor-ui-nbssts cursor-ui-5xjfoy cursor-ui-slcx10 cursor-ui-122zoth cursor-ui-1fx9dl4 cursor-ui-4o0cs4 cursor-ui-1597r2g cursor-ui-liy32w cursor-ui-6ikm8r cursor-ui-1odjw0f cursor-ui-h8yej3 cursor-ui-2lwn1j cursor-ui-1r8uery cursor-ui-s83m0k cursor-ui-1iyjqo2", e[394] !== e4 || e[395] !== t.breadcrumbSlot ? (nM = t.breadcrumbSlot == null ? V1("div", { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1vqgdyp cursor-ui-2lah0s cursor-ui-exx8yu cursor-ui-1jkygx cursor-ui-18d9i69 cursor-ui-1o7kk3e", children: e4 }) : null, e[394] = e4, e[395] = t.breadcrumbSlot, e[396] = nM) : nM = e[396], Jx = "cursor-ui-v0g687 cursor-ui-1qg3m7i cursor-ui-8x9d4c cursor-ui-at24cr cursor-ui-ack27t cursor-ui-dj266r cursor-ui-1w4qmfv cursor-ui-h8yej3 cursor-ui-9f619 cursor-ui-tgesqp cursor-ui-ab0n8b cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-t4v3it", RN = "cursor-ui-78zum5 cursor-ui-dt5ytf", V2 = vr.renderPluginDetail(MN), e[319] = ie, e[320] = Ci, e[321] = v_, e[322] = gc, e[323] = Qx, e[324] = DF, e[325] = jS, e[326] = Ti?.plugin, e[327] = vr, e[328] = t.breadcrumbSlot, e[329] = t.canManageTeamMarketplaces, e[330] = t.configuredVariablesByPluginId, e[331] = t.detailGlassChrome, e[332] = t.enabledInstallScopesByPluginId, e[333] = t.hasTeamConfiguredVariablesByPluginId, e[334] = t.installedPluginIdSet, e[335] = t.installedProjectIdsByPluginId, e[336] = t.localProjects, e[337] = t.manage, e[338] = t.onInstall, e[339] = t.onInstallToProject, e[340] = t.onUninstall, e[341] = t.onUninstallFromProject, e[342] = t.onUninstallScope, e[343] = t.primaryInstallScopeByPluginId, e[344] = t.teamDisplayName, e[345] = t.teamInstallCountByPluginId, e[346] = Xn, e[347] = Jf.className, e[348] = Jf.style, e[349] = Wh, e[350] = he, e[351] = Dn, e[352] = Pi, e[353] = Cg, e[354] = RN, e[355] = V2, e[356] = Jx, e[357] = K2, e[358] = nM, e[359] = PN, e[360] = k9, e[361] = yI, e[362] = WL, e[363] = GL, e[364] = sx;
    } else RN = e[354], V2 = e[355], Jx = e[356], K2 = e[357], nM = e[358], PN = e[359], k9 = e[360], yI = e[361], WL = e[362], GL = e[363], sx = e[364];
    let $S;
    e[397] !== RN || e[398] !== V2 ? ($S = V1("div", { className: RN, children: V2 }), e[397] = RN, e[398] = V2, e[399] = $S) : $S = e[399];
    let m5;
    e[400] !== Jx || e[401] !== $S ? (m5 = V1("div", { className: Jx, children: $S }), e[400] = Jx, e[401] = $S, e[402] = m5) : m5 = e[402];
    let Y2;
    e[403] !== K2 || e[404] !== nM || e[405] !== m5 ? (Y2 = bie("div", { className: K2, children: [nM, m5] }), e[403] = K2, e[404] = nM, e[405] = m5, e[406] = Y2) : Y2 = e[406];
    let vq;
    return e[407] !== Y2 || e[408] !== PN || e[409] !== k9 || e[410] !== yI || e[411] !== WL || e[412] !== GL || e[413] !== sx ? (vq = bie("div", { className: PN, style: k9, ref: yI, children: [WL, GL, sx, Y2] }), e[407] = Y2, e[408] = PN, e[409] = k9, e[410] = yI, e[411] = WL, e[412] = GL, e[413] = sx, e[414] = vq) : vq = e[414], vq;
  }
  const zy = t.onAddPluginFromLocalRepo;
  let Bw;
  e[415] !== zy ? (Bw = zy === void 0 ? void 0 : () => {
    zy().then((vr) => {
      vr && f("browse");
    });
  }, e[415] = zy, e[416] = Bw) : Bw = e[416];
  const Uw = Bw;
  let b0;
  e[417] !== t.onAddMarketplace ? (b0 = t.onAddMarketplace === void 0 ? void 0 : () => {
    re("import"), te(true);
  }, e[417] = t.onAddMarketplace, e[418] = b0) : b0 = e[418];
  const y0 = b0;
  let GE;
  e[419] !== u ? (GE = u.trim(), e[419] = u, e[420] = GE) : GE = e[420];
  const _u = GE !== "", Rm = t.enableGlobalSearch === true, ym = Rm && _u, j_ = t.teamDisplayName ?? "";
  let Nv;
  e[421] !== j_ ? (Nv = j_.trim(), e[421] = j_, e[422] = Nv) : Nv = e[422];
  const _v = Nv !== "";
  let Or;
  e[423] !== mi || e[424] !== _u ? (Or = TWm(mi) && !_u, e[423] = mi, e[424] = _u, e[425] = Or) : Or = e[425];
  const qo = Or, Xi = t.leaderboardEnabled === true && _v && qo;
  let ua;
  e[426] !== S.id || e[427] !== S.ids || e[428] !== S.kind || e[429] !== t.teamDisplayName || e[430] !== t.usageWorkspaceOptions || e[431] !== t.userDisplayName ? (ua = () => {
    switch (S.kind) {
      case "user":
        return t.userDisplayName?.trim() || "User";
      case "team":
        return t.teamDisplayName?.trim() || "Team";
      case "workspace":
        return (t.usageWorkspaceOptions ?? []).find((vr) => vr.id === S.id)?.displayName?.trim() || "Workspace";
      case "workspaces":
        return `${S.ids.length} Workspaces`;
      case "sources":
        return "Selected Sources";
    }
  }, e[426] = S.id, e[427] = S.ids, e[428] = S.kind, e[429] = t.teamDisplayName, e[430] = t.usageWorkspaceOptions, e[431] = t.userDisplayName, e[432] = ua) : ua = e[432];
  const Td = ua;
  let uu;
  e[433] !== Rm || e[434] !== Td || e[435] !== _ || e[436] !== g ? (uu = Rm || g === "browse" ? "Search Plugins, Skills, MCPs..." : `Search ${_In.find((vr) => vr.id === _)?.label ?? "items"} for ${Td()}...`, e[433] = Rm, e[434] = Td, e[435] = _, e[436] = g, e[437] = uu) : uu = e[437];
  const im = uu;
  let gi;
  e[438] !== ie || e[439] !== Ci || e[440] !== t.manage || e[441] !== Xn || e[442] !== Pi ? (gi = V1(kWm, { servers: t.manage.mcpServers, configureServerId: ie, onConfigureServerIdChange: oe, mcp: t.manage, resolveUninstallPlugin: Xn, confirmUninstall: Ci, onUninstallPlugin: Pi }), e[438] = ie, e[439] = Ci, e[440] = t.manage, e[441] = Xn, e[442] = Pi, e[443] = gi) : gi = e[443];
  const Zr = Ti?.plugin ?? null;
  let vs, Jo;
  e[444] !== Dn ? (vs = () => Dn(true), Jo = () => Dn(false), e[444] = Dn, e[445] = vs, e[446] = Jo) : (vs = e[445], Jo = e[446]);
  let ac;
  e[447] !== Zr || e[448] !== vs || e[449] !== Jo ? (ac = V1(CWm, { plugin: Zr, onConfirm: vs, onCancel: Jo }), e[447] = Zr, e[448] = vs, e[449] = Jo, e[450] = ac) : ac = e[450];
  let Pc;
  e[451] !== t.headerBanner ? (Pc = V1("div", { className: "cursor-ui-v0g687 cursor-ui-1qg3m7i cursor-ui-8x9d4c cursor-ui-at24cr cursor-ui-ack27t cursor-ui-dj266r cursor-ui-1w4qmfv cursor-ui-h8yej3 cursor-ui-9f619 cursor-ui-2lah0s cursor-ui-1avjwpx cursor-ui-jl7jj cursor-ui-l6bsgv", children: t.headerBanner }), e[451] = t.headerBanner, e[452] = Pc) : Pc = e[452];
  let Ed;
  e[453] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ed = { className: "cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-1t1x2f9 cursor-ui-euugli" }, e[453] = Ed) : Ed = e[453];
  let wp;
  e[454] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (wp = V1(_d.Icon, { name: "search" }), e[454] = wp) : wp = e[454];
  let zm;
  e[455] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (zm = { className: "cursor-ui-lyipyv" }, e[455] = zm) : zm = e[455];
  let wa;
  e[456] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (wa = (vr) => {
    d(vr.target.value), it();
  }, e[456] = wa) : wa = e[456];
  let cd;
  e[457] !== im || e[458] !== u ? (cd = bie(_d, { shape: "pill", className: Ed.className, children: [wp, V1(_d.Input, { ref: i, className: zm.className, placeholder: im, value: u, onChange: wa })] }), e[457] = im, e[458] = u, e[459] = cd) : cd = e[459];
  let Og;
  e[460] !== g ? (Og = g === "browse" ? V1(An, { variant: "primary", tone: "monochrome", size: "lg", rounded: true, className: "cursor-ui-2lah0s", "aria-label": "Manage installed plugins", onClick: () => {
    f("manage");
  }, children: "Manage" }) : bie(An, { variant: "primary", tone: "monochrome", size: "lg", rounded: true, className: "cursor-ui-2lah0s", "aria-label": "Browse Marketplace", onClick: () => {
    it(), f("browse");
  }, children: ["Browse", V1("span", { className: "cursor-ui-1s85apg cursor-ui-lrknoy", children: " Marketplace" })] }), e[460] = g, e[461] = Og) : Og = e[461];
  let Of;
  e[462] !== cd || e[463] !== Og ? (Of = bie("div", { className: "cursor-ui-v0g687 cursor-ui-1qg3m7i cursor-ui-8x9d4c cursor-ui-at24cr cursor-ui-ack27t cursor-ui-dj266r cursor-ui-1w4qmfv cursor-ui-h8yej3 cursor-ui-9f619 cursor-ui-2lah0s cursor-ui-78zum5 cursor-ui-1q0g3np cursor-ui-6s0dn4 cursor-ui-ehausa cursor-ui-1avjwpx cursor-ui-12h1iku", children: [cd, Og] }), e[462] = cd, e[463] = Og, e[464] = Of) : Of = e[464];
  let Ev;
  e[465] !== mi || e[466] !== cr || e[467] !== Kc || e[468] !== ym || e[469] !== g || e[470] !== y0 || e[471] !== t.onAddMarketplace || e[472] !== t.onPickLocalFolder || e[473] !== t.teamDisplayName ? (Ev = g === "browse" && !ym && V1("div", { "data-customize-browse-filter": true, className: "cursor-ui-v0g687 cursor-ui-1qg3m7i cursor-ui-8x9d4c cursor-ui-at24cr cursor-ui-ack27t cursor-ui-dj266r cursor-ui-1w4qmfv cursor-ui-h8yej3 cursor-ui-9f619 cursor-ui-2lah0s cursor-ui-t9g0qb", children: V1(MJ1, { effectiveFilter: mi, groupedMarketplaces: cr, teamDisplayName: t.teamDisplayName, onCreateMarketplace: t.onAddMarketplace !== void 0 ? () => {
    re("manual"), te(true);
  } : void 0, onImportMarketplaceFromGithub: y0, onImportMarketplaceFromDisk: t.onPickLocalFolder !== void 0 ? () => {
    Kc();
  } : void 0, onSelectFilter: (vr) => {
    ce(vr), it();
  } }) }), e[465] = mi, e[466] = cr, e[467] = Kc, e[468] = ym, e[469] = g, e[470] = y0, e[471] = t.onAddMarketplace, e[472] = t.onPickLocalFolder, e[473] = t.teamDisplayName, e[474] = Ev) : Ev = e[474];
  let Q1;
  e[475] !== ym || e[476] !== g ? (Q1 = (g === "manage" || ym) && V1("div", { ref: o, className: "cursor-ui-v0g687 cursor-ui-1qg3m7i cursor-ui-8x9d4c cursor-ui-at24cr cursor-ui-ack27t cursor-ui-dj266r cursor-ui-1w4qmfv cursor-ui-h8yej3 cursor-ui-9f619 cursor-ui-2lah0s cursor-ui-t9g0qb" }), e[475] = ym, e[476] = g, e[477] = Q1) : Q1 = e[477];
  let $_;
  e[478] !== co || e[479] !== ym || e[480] !== _u || e[481] !== Qp || e[482] !== oa || e[483] !== Gl || e[484] !== I || e[485] !== P || e[486] !== af || e[487] !== Jr || e[488] !== $p || e[489] !== pl || e[490] !== g || e[491] !== kg || e[492] !== t || e[493] !== K || e[494] !== C_ || e[495] !== qo || e[496] !== Xi || e[497] !== Rg || e[498] !== hl || e[499] !== Go ? ($_ = g === "browse" && !ym && bie(FWm, { children: [qo && bie("section", { className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-1oot3zn", children: [V1(nn, { size: "lg", weight: "medium", className: "cursor-ui-22095l", children: "Discover" }), V1(dQ1, { plugins: co, installedPluginIdSet: t.installedPluginIdSet, installCountByPluginId: t.teamInstallCountByPluginId, onPluginClick: (vr) => tn(vr, "marketplace") })] }), Xi && bie("section", { className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-1oot3zn", children: [V1("div", { className: "cursor-ui-78zum5 cursor-ui-d1x6vq cursor-ui-6s0dn4 cursor-ui-1qughib cursor-ui-4r3nzd cursor-ui-3r2rup cursor-ui-yab65l cursor-ui-1yxiud8", children: bie("h2", { className: "cursor-ui-1lliihq cursor-ui-dj266r cursor-ui-1yf7rl7 cursor-ui-at24cr cursor-ui-j3b58b cursor-ui-euugli cursor-ui-fc7y3v cursor-ui-1yxxptd cursor-ui-1yl5bsf cursor-ui-1wd3ewq cursor-ui-bo9e4s", children: [V1("span", { className: "cursor-ui-uxw1ft cursor-ui-4b2ntj", children: "Popular" }), af, Rg && bie(FWm, { children: [V1("span", { className: "cursor-ui-uxw1ft cursor-ui-4b2ntj", children: "in" }), $p] })] }) }), V1(GQ1, { rows: Go, showCreatorColumn: hl, showUsageIcon: true, usageTooltip: hl ? "Number of times used by your team in the last 30 days." : "Number of teammates using this plugin.", rankOffset: Jr, pageNumber: I, hasMore: oa, totalRows: pl, isLoading: Gl, emptyMessage: Qp, onPagePrev: () => A(kJ1), onPageNext: () => A(SJ1), pageSize: P, onPageSizeChange: (vr) => {
    M(vr), it();
  } })] }), V1("section", { className: "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-135vroj", children: _u ? V1(fWm, { title: "All Plugins", plugins: C_, installedPluginIdSet: t.installedPluginIdSet, onAdd: (vr) => {
    t.onInstall(vr, "user");
  }, onPluginClick: (vr) => tn(vr, "marketplace") }) : kg.map((vr) => {
    const gc = vr.marketplace, Fd = gc?.teamId !== void 0, Hp = gc !== void 0 && Fd && t.canManageTeamMarketplaces === true && t.manageTeamMarketplaceClient !== void 0, jg = gc !== void 0 && t.manageTeamMarketplaceClient !== void 0 && (gc.userId !== void 0 || Hp);
    return V1(fWm, { ...vr, installedPluginIdSet: t.installedPluginIdSet, onAdd: (v_) => {
      t.onInstall(v_, "user");
    }, onPluginClick: (v_) => tn(v_, "marketplace"), emptyState: gc && Hp && vr.plugins.length === 0 ? V1($es, { title: "No plugins yet", description: "Add plugins to this marketplace so your team can install them.", docsUrl: S4e.plugins.docsUrl, onOpenDocsUrl: t.onOpenDocsUrl, primaryAction: V1(An, { variant: "secondary", size: "md", onClick: () => q(gc.id), leadingIcon: "add", children: "Add plugins" }) }) : void 0, endCol: gc && (Hp || jg) ? V1(kQ1, { title: vr.title, onManage: Hp ? () => q(gc.id) : void 0, onRemove: jg ? () => {
      J(gc);
    } : void 0, isRemoving: K === gc.id }) : void 0 }, vr.sectionKey);
  }) })] }), e[478] = co, e[479] = ym, e[480] = _u, e[481] = Qp, e[482] = oa, e[483] = Gl, e[484] = I, e[485] = P, e[486] = af, e[487] = Jr, e[488] = $p, e[489] = pl, e[490] = g, e[491] = kg, e[492] = t, e[493] = K, e[494] = C_, e[495] = qo, e[496] = Xi, e[497] = Rg, e[498] = hl, e[499] = Go, e[500] = $_) : $_ = e[500];
  let nb;
  e[501] !== Rm || e[502] !== Uw || e[503] !== Bn || e[504] !== Nn || e[505] !== $n || e[506] !== ym || e[507] !== s || e[508] !== S || e[509] !== r || e[510] !== _ || e[511] !== g || e[512] !== Es || e[513] !== y0 || e[514] !== t || e[515] !== u ? (nb = (g === "manage" || ym) && V1(zZ1, { controlsSlot: s, pinControls: true, manage: t.manage, workspaceOptions: t.usageWorkspaceOptions, selectedScope: S, onSelectedScopeChange: Bn, manageScopeMultiselectEnabled: r, hookExecutionLogDetailsEnabled: t.hookExecutionLogDetailsEnabled, userDisplayName: t.userDisplayName, searchQuery: u, enableGlobalSearch: Rm, searchContext: g, marketplaceSearchPlugins: Es, onInstallPlugin: (vr) => t.onInstall(vr, "user"), primitiveDescriptors: t.primitiveDescriptors, primitiveDescriptorLoadState: t.primitiveDescriptorLoadState, installedPlugins: $n, installModeByPluginId: t.installModeByPluginId, isPluginsLoading: t.isLoadingInstalls, hasTeam: t.hasTeam, teamDisplayName: t.teamDisplayName, workspaceName: t.workspaceName, selectedTab: _, onSelectedTabChange: b, onPluginClick: (vr) => tn(vr, "customize"), onOpenPrimitiveSource: t.onOpenPrimitiveSource, onPublishSkill: t.onPublishSkill, onCopySkillLink: t.onCopySkillLink, onSyncSkill: t.onSyncSkill, onUnpublishSkill: t.onUnpublishSkill, skillsBanner: t.manageSkillsBanner, onUninstallPlugin: Nn, copyToClipboard: t.copyToClipboard, onBrowse: () => {
    f("browse");
  }, onAddPluginFromGitHubRepo: y0, onAddPluginFromLocalRepo: Uw, onOpenDocsUrl: t.onOpenDocsUrl, onConfigureMcpServer: (vr) => oe(vr) }), e[501] = Rm, e[502] = Uw, e[503] = Bn, e[504] = Nn, e[505] = $n, e[506] = ym, e[507] = s, e[508] = S, e[509] = r, e[510] = _, e[511] = g, e[512] = Es, e[513] = y0, e[514] = t, e[515] = u, e[516] = nb) : nb = e[516];
  let Gk;
  e[517] !== $_ || e[518] !== nb ? (Gk = V1("div", { className: "cursor-ui-nbssts cursor-ui-5xjfoy cursor-ui-slcx10 cursor-ui-122zoth cursor-ui-1fx9dl4 cursor-ui-4o0cs4 cursor-ui-1597r2g cursor-ui-liy32w cursor-ui-6ikm8r cursor-ui-1odjw0f cursor-ui-h8yej3 cursor-ui-2lwn1j cursor-ui-1r8uery cursor-ui-s83m0k cursor-ui-1iyjqo2 cursor-ui-1v70q60 cursor-ui-kufosk", children: bie("div", { className: "cursor-ui-v0g687 cursor-ui-1qg3m7i cursor-ui-8x9d4c cursor-ui-at24cr cursor-ui-ack27t cursor-ui-dj266r cursor-ui-1w4qmfv cursor-ui-h8yej3 cursor-ui-9f619 cursor-ui-tgesqp cursor-ui-ab0n8b cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-t4v3it", children: [$_, nb] }) }), e[517] = $_, e[518] = nb, e[519] = Gk) : Gk = e[519];
  let J1;
  e[520] !== t.manageTeamMarketplaceDirectoryGroups ? (J1 = t.manageTeamMarketplaceDirectoryGroups ?? [], e[520] = t.manageTeamMarketplaceDirectoryGroups, e[521] = J1) : J1 = e[521];
  let qk;
  e[522] !== t.manageTeamMarketplaceOrganizationGroups ? (qk = t.manageTeamMarketplaceOrganizationGroups ?? [], e[522] = t.manageTeamMarketplaceOrganizationGroups, e[523] = qk) : qk = e[523];
  let ry;
  e[524] !== ee || e[525] !== Q || e[526] !== Ib || e[527] !== t.enableAccessGrants || e[528] !== t.teamDisplayName || e[529] !== J1 || e[530] !== qk ? (ry = V1(Whp, { open: Q, onOpenChange: te, mode: ee, teamName: t.teamDisplayName, directoryGroups: J1, organizationGroups: qk, enableAccessGrants: t.enableAccessGrants, onSubmit: Ib }), e[524] = ee, e[525] = Q, e[526] = Ib, e[527] = t.enableAccessGrants, e[528] = t.teamDisplayName, e[529] = J1, e[530] = qk, e[531] = ry) : ry = e[531];
  let zk;
  e[532] !== Cd || e[533] !== ep || e[534] !== cf || e[535] !== t ? (zk = Cd && t.manageTeamMarketplaceClient && V1(Dmp, { open: true, onOpenChange: (vr) => {
    vr || q(null);
  }, marketplace: Cd, teamName: t.teamDisplayName, client: t.manageTeamMarketplaceClient, plugins: ep, isLoadingPlugins: !t.hasLoadedMarketplacePlugins, availableGlobalPlugins: cf, isLoadingGlobalPlugins: !t.hasLoadedMarketplacePlugins, directoryGroups: t.manageTeamMarketplaceDirectoryGroups ?? [], organizationGroups: t.manageTeamMarketplaceOrganizationGroups ?? [], enableTeamMarketplaceMcps: t.enableTeamMarketplaceMcps, renderMcpServerForm: lJ1, enableAccessGrants: t.enableAccessGrants, enableOriginDistribution: t.enableOriginDistribution, enablePublishUserSkills: t.enablePublishUserSkills, onAfterDelete: () => t.onAfterDeleteTeamMarketplace?.(Cd.id) }), e[532] = Cd, e[533] = ep, e[534] = cf, e[535] = t, e[536] = zk) : zk = e[536];
  const Vk = Y !== null;
  let bI;
  e[537] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (bI = (vr) => {
    vr || J(null);
  }, e[537] = bI) : bI = e[537];
  let ST;
  e[538] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ST = V1(Xr.Header, { title: "Remove marketplace?", description: "This marketplace will be removed from your account. The source repository won't be affected." }), e[538] = ST) : ST = e[538];
  let Pm;
  e[539] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Pm = () => J(null), e[539] = Pm) : Pm = e[539];
  const uS = K !== null;
  let kT;
  e[540] !== uS ? (kT = V1(An, { variant: "text", size: "lg", onClick: Pm, disabled: uS, children: "Cancel" }), e[540] = uS, e[541] = kT) : kT = e[541];
  let UR;
  e[542] !== dt || e[543] !== Y ? (UR = () => {
    Y && dt(Y).then(() => J(null));
  }, e[542] = dt, e[543] = Y, e[544] = UR) : UR = e[544];
  const GC = K !== null, z2 = K !== null ? "Removing..." : "Remove";
  let eM;
  e[545] !== UR || e[546] !== GC || e[547] !== z2 ? (eM = V1(An, { variant: "outline", size: "lg", onClick: UR, disabled: GC, children: z2 }), e[545] = UR, e[546] = GC, e[547] = z2, e[548] = eM) : eM = e[548];
  let Zx;
  e[549] !== kT || e[550] !== eM ? (Zx = bie(Xr.Footer, { children: [kT, eM] }), e[549] = kT, e[550] = eM, e[551] = Zx) : Zx = e[551];
  let JT;
  e[552] !== Vk || e[553] !== Zx ? (JT = bie(Xr, { open: Vk, onOpenChange: bI, size: "md", "aria-label": "Remove marketplace confirmation", children: [ST, Zx] }), e[552] = Vk, e[553] = Zx, e[554] = JT) : JT = e[554];
  let jR;
  return e[555] !== Jf.className || e[556] !== Jf.style || e[557] !== Of || e[558] !== Ev || e[559] !== Q1 || e[560] !== Gk || e[561] !== ry || e[562] !== zk || e[563] !== JT || e[564] !== gi || e[565] !== ac || e[566] !== Pc ? (jR = bie("div", { className: Jf.className, style: Jf.style, ref: St, children: [gi, ac, Pc, Of, Ev, Q1, Gk, ry, zk, JT] }), e[555] = Jf.className, e[556] = Jf.style, e[557] = Of, e[558] = Ev, e[559] = Q1, e[560] = Gk, e[561] = ry, e[562] = zk, e[563] = JT, e[564] = gi, e[565] = ac, e[566] = Pc, e[567] = jR) : jR = e[567], jR;
}
function SJ1(t) {
  return t + 1;
}
function kJ1(t) {
  return Math.max(1, t - 1);
}
function wJ1(t) {
  return { value: t.displayName };
}
function CJ1(t) {
  return { value: t.id, label: t.displayName, leading: V1(zt, { name: "briefcase", size: "sm", rootStyle: tts.leaderboardWorkspaceOptionIcon, "aria-hidden": true }) };
}
function TJ1(t) {
  return { value: t.id, label: t.label };
}
function EJ1(t, e) {
  return e.count - t.count || t.plugin.displayName.localeCompare(e.plugin.displayName);
}
function IJ1(t) {
  return { value: t.displayName };
}
function xJ1(t) {
  return t.id;
}
function AJ1(t) {
  return t.id;
}
function RJ1() {
  return /* @__PURE__ */ new Map();
}
function PJ1(t, e) {
  return t.kind === "scope" && t.scope === e;
}
function MJ1(t) {
  const e = ets(24), { effectiveFilter: n, groupedMarketplaces: i, teamDisplayName: r, onSelectFilter: s, onCreateMarketplace: o, onImportMarketplaceFromGithub: a, onImportMarketplaceFromDisk: l } = t, c = DJ1, u = i.userMarketplaces.length > 0, d = i.teamMarketplaces.length > 0;
  let h;
  e[0] !== n || e[1] !== s ? (h = (C, T) => {
    const I = PJ1(n, C);
    return V1(dR, { variant: "ghost", size: "md", onClick: () => s({ kind: "scope", scope: C }), "aria-selected": I || void 0, className: Sc(Zh.tab).className, style: I ? Les : CZa, children: T }, C);
  }, e[0] = n, e[1] = s, e[2] = h) : h = e[2];
  const p = h, g = `${u}:${d}`;
  let f, _;
  e[3] !== p ? (f = p("all", "All"), _ = p("cursor", "Cursor Marketplace"), e[3] = p, e[4] = f, e[5] = _) : (f = e[4], _ = e[5]);
  let b;
  e[6] !== d || e[7] !== p || e[8] !== r ? (b = d ? p("team", r?.trim() || "Team") : null, e[6] = d, e[7] = p, e[8] = r, e[9] = b) : b = e[9];
  let y;
  e[10] !== u || e[11] !== p ? (y = u ? p("personal", "Personal") : null, e[10] = u, e[11] = p, e[12] = y) : y = e[12];
  let S;
  e[13] !== o || e[14] !== l || e[15] !== a ? (S = o !== void 0 ? bie(hn, { returnFocusOnSelect: false, children: [V1(hn.Trigger, { children: V1(dR, { variant: "ghost", size: "md", icon: "plus", "aria-label": "Add Marketplace", className: Sc(Zh.tab).className, style: CZa, children: "Add Marketplace" }) }), bie(hn.Content, { "aria-label": "Add Marketplace", width: 272, children: [V1(hn.Item, { leading: c("plus"), description: "Set up a team marketplace", onSelect: o, children: "Create New" }), a !== void 0 ? V1(hn.Item, { leading: c("github"), description: "Add a marketplace from a repository", onSelect: a, children: "Import from GitHub" }) : null, l !== void 0 ? V1(hn.Item, { leading: c("folder"), description: "Add a marketplace from your local computer", onSelect: l, children: "Import from Disk" }) : null] })] }) : null, e[13] = o, e[14] = l, e[15] = a, e[16] = S) : S = e[16];
  let k;
  return e[17] !== g || e[18] !== f || e[19] !== _ || e[20] !== b || e[21] !== y || e[22] !== S ? (k = bie(DHm, { depKey: g, children: [f, _, b, y, S] }), e[17] = g, e[18] = f, e[19] = _, e[20] = b, e[21] = y, e[22] = S, e[23] = k) : k = e[23], k;
}
function DJ1(t) {
  return V1(zt, { name: t, size: "sm", style: XWm, "aria-hidden": true });
}
var tts, VZa, qWm, zWm, VWm, KWm, YWm, XWm,
