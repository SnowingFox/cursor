// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptInputAnchoredTray.react.js range:31365029..31375629
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, Mt, Mt, vxf, pMf, QNl, gMf, e3i, pSs, xfw, bMf, pSs, bMf
// wrapper-init: CMf
// hoisted-owner: PlusMenuAnchoredTray.react.js (app-out-vs-workbench-workbench-glass-main-js:5834); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var CMf = L({ "PromptInputAnchoredTray.react.js"() {
  "use strict";
  E(), Mt(), Mt(), Mt(), vxf(), pMf(), QNl(), gMf(), e3i(), pSs(), xfw(), bMf(), pSs(), bMf();
} });
import { useCallback as k3n, useMemo as jTe, useRef as Gfw, useState as TMf } from "./react-runtime/react/esm-index-production.js";
import { jsx as zie } from "./react-runtime/react/esm-jsx-runtime-production.js";
function EMf(t, e) {
  const n = e.length === 0 ? [...t] : t.filter((i) => Jrk(i, e));
  return n.sort((i, r) => e5l.indexOf(i.source ?? "user") - e5l.indexOf(r.source ?? "user")), n;
}
function qfw(t, e) {
  if (!(e.kind === "progress" || t.isEnabled === false)) switch (t.status) {
    case "degraded":
      return { label: "Degraded", tone: "warning" };
    case "needsAuth":
      return t.attentionAction === "connect" || t.attentionAction === "connectUnavailable" ? { label: "Needs authentication", tone: "default" } : void 0;
    case "error":
      return t.attentionAction === "showOutput" || t.attentionAction === "retry" ? { label: "Error", tone: "error" } : void 0;
    case "connected":
    case "disconnected":
    case "initializing":
    case void 0:
      return;
    default:
      return t.status;
  }
}
function zfw(t) {
  switch (t) {
    case "connect":
    case "connectUnavailable":
      return "Connect";
    case "showOutput":
      return "Show Output";
    case "retry":
      return "Retry";
    default:
      return t;
  }
}
function Vfw(t, { mcpConnectProgressByServerId: e, onMCPServerToggle: n, onMCPServerAction: i, onDismiss: r }) {
  const s = e?.[t.id];
  if (s !== void 0) return { kind: "progress", label: ael(s, "compact") };
  if (t.attentionAction !== void 0) {
    const a = zfw(t.attentionAction);
    if (t.attentionAction === "connectUnavailable" || i === void 0) return { kind: "button", label: a, disabled: true };
    const l = { kind: t.attentionAction, serverId: t.id, authorizationUrl: t.authorizationUrl };
    return { kind: "button", label: a, disabled: false, onActivate: () => {
      i(l), l.kind === "showOutput" && r();
    } };
  }
  const o = t.isEnabled ?? false;
  return { kind: "toggle", checked: o, onActivate: () => n?.(t.id, !o) };
}
function IMf(t, e, n) {
  const i = Vfw(t, e), r = qfw(t, i), s = ECi(t);
  return { id: `plus-mcp-${t.id}`, name: wKm(t, n), description: oel(t.description, s), trayDescription: r !== void 0 ? zie("span", { "data-mcp-status-tone": r.tone, ...Ac(xMf[r.tone]), children: r.label }) : null, tooltipPath: Xts(t.source), type: "command", icon: zie(zmi, { fallback: zie(zt, { name: "logo-mcp", size: "sm" }), src: t.iconSrc }), trayRowElement: "div", trayAriaChecked: i.kind === "toggle" ? i.checked : void 0, trayAriaDisabled: i.kind === "progress" || i.kind === "button" && i.disabled ? true : void 0, trayRowActions: t.trayRowActions, trayTrailing: i.kind === "toggle" ? zie(vSn, { checked: i.checked, size: "sm" }) : zie(An, { disabled: i.kind === "progress" || i.kind === "button" && i.disabled, onClick: (o) => {
    o.preventDefault(), o.stopPropagation(), i.kind === "button" && !i.disabled && i.onActivate();
  }, rootStyle: QDi.root, size: "sm", tone: "accent", variant: "text", children: i.label }), closeOnSelect: false, onSelect: () => {
    (i.kind === "toggle" || i.kind === "button" && !i.disabled) && i.onActivate();
  } };
}
function Kfw({ shell: t, listboxId: e, onDismiss: n, onOpenPluginDetails: i, triggerRef: r, modeItems: s, onModeSelect: o, onOpenModelPicker: a, modelRowDescription: l, filePickerMode: c, onFilePick: u, buildSlashSections: d, mcpServers: h, mcpConnectProgressByServerId: p, onMCPServerToggle: g, onMCPServerAction: f, onOpenMCPSettings: _ }) {
  const [b, y] = TMf(""), [S, k] = TMf("root"), C = Gfw(null), T = b.trim().length > 0, I = k3n(() => {
    k("mcps"), y("");
  }, []), A = k3n(() => {
    k("customModes"), y("");
  }, []), P = k3n(() => {
    k("root"), y("");
  }, []), M = jTe(() => {
    const he = WIf[c];
    return { id: "plus-file-or-folder", name: he, searchAliases: he === "Files" ? ["File"] : void 0, type: "command", suppressTooltip: true, icon: zie(zt, { color: "tertiary", name: "paperclip", size: "sm" }), onSelect: () => {
      u();
    } };
  }, [c, u]), O = jTe(() => (s ?? []).filter((he) => he.source !== "custom"), [s]), N = jTe(() => (s ?? []).filter((he) => he.source === "custom"), [s]), U = N.length > 0, j = h !== void 0, $ = jTe(() => {
    const he = O.map((ge) => ({ id: `plus-mode-${ge.id}`, name: ge.label, description: ge.description, type: "mode", icon: ge.icon ? zie(zt, { color: ge.color ?? "primary", name: ge.icon, size: "sm" }) : zie(zt, { color: "tertiary", name: "cube", size: "sm" }), trayTrailing: t5l, onSelect: () => {
      o?.(ge.id);
    } }));
    return U && he.push({ id: AMf, name: "More", type: "action", icon: zie(zt, { color: "tertiary", name: "plus-circle", size: "sm" }), trayTrailing: zie(zt, { color: "tertiary", name: "chevron-right", size: "sm" }), isNavigationRow: true, closeOnSelect: false, onSelect: A }), he;
  }, [O, U, o, A]), H = jTe(() => {
    const he = [M];
    return a !== void 0 && he.push({ id: "plus-model", name: "Model", description: l, type: "command", suppressTooltip: true, icon: zie(zt, { color: "tertiary", name: "cube-transparent", size: "sm" }), onSelect: () => {
      a();
    } }), j && he.push({ id: "plus-mcps", name: "MCP", type: "action", icon: zie(zt, { color: "tertiary", name: "logo-mcp", size: "sm" }), trayTrailing: zie(zt, { color: "tertiary", name: "chevron-right", size: "sm" }), isNavigationRow: true, closeOnSelect: false, onSelect: I }), he;
  }, [M, j, l, a, I]), G = jTe(() => [...$, ...H], [$, H]), q = Yfw(S, h, b), K = Xfw(h), V = Zfw({ view: S, hasMcpServers: j, matchedMcpServers: q, mcpConnectProgressByServerId: p, onMCPServerToggle: g, onMCPServerAction: f, onDismiss: n, mcpCollisionSets: K }), Y = Qfw(S, N, b, o), J = Jfw({ view: S, isSearching: T, query: b, buildSlashSections: d, mcpServers: h, builtInModes: O, filePickerRow: M, mcpConnectProgressByServerId: p, onMCPServerToggle: g, onMCPServerAction: f, onDismiss: n, mcpCollisionSets: K }), Q = S === "mcps" ? V : S === "customModes" ? Y : T ? J : G, te = jTe(() => `${S}\0${T ? "search" : "root"}\0${b}\0${Q.map((he) => he.id).join("\0")}`, [T, b, Q, S]), ee = jTe(() => s3n(S === "root" && !T ? [$, H] : [Q]), [T, $, H, Q, S]), re = S === "mcps" && q.length === 0 ? "No MCPs Found" : S === "customModes" && Y.length === 0 ? "No Modes Found" : S === "root" && T && J.length === 0 ? "No Matches Found" : void 0, ie = k3n((he) => {
    he.onSelect(), he.closeOnSelect !== false && n();
  }, [n]), oe = k3n((he) => {
    const ge = Q[he];
    ge !== void 0 && ie(ge);
  }, [ie, Q]), { selectedIndex: se, isKeyboardNav: le, activeDescendantId: ce, setSelectedFromPointer: ae } = Vuw({ handleRef: C, itemCount: Q.length, resetKey: te, initialSelectedIndex: null, listboxId: e, onActivateIndex: oe }), de = k3n((he) => {
    if (he.key === "Escape") {
      he.preventDefault(), S === "root" ? n() : (he.stopPropagation(), P());
      return;
    }
    const ge = YQ() ? he.metaKey : he.ctrlKey;
    if (he.key === "Enter" && ge) {
      if (he.preventDefault(), se !== null) {
        const pe = Q[se];
        pe !== void 0 && KNl(pe)?.onSelect();
      }
      return;
    }
    C.current?.onKeyDown(he.nativeEvent) && he.preventDefault();
  }, [n, P, Q, se, S]);
  return zie(wMf, { ariaLabel: "Add agents, context, tools", closeOnOutsideClick: true, header: zie($uw, { activeDescendantId: ce, "aria-label": S === "mcps" ? "Search MCPs" : S === "customModes" ? "Search custom modes" : "Search skills, context, chats", autoFocus: true, expanded: ee.itemCount > 0 || re !== void 0, listboxId: e, onBack: S === "root" ? void 0 : P, onKeyDown: de, onValueChange: y, placeholder: S === "mcps" ? "Search MCPs..." : S === "customModes" ? "Search custom modes..." : "Search skills, context, chats...", trailing: S === "mcps" && _ ? zie(An, { frame: "content", onClick: () => {
    _(), n();
  }, size: "sm", tabIndex: -1, tone: "secondary", variant: "text", trailingIcon: "arrow-right-up", children: "Manage" }) : void 0, value: b }, S), isKeyboardNav: le, isProtectedDismissTarget: (he) => r.current?.contains(he) === true, listboxId: e, model: ee, onDismiss: n, onItemSelect: ie, onOpenPluginDetails: i, onSelectedIndexChange: ae, resetScrollKey: te, selectedIndex: se, shell: t, statusFlush: S === "root", statusText: re });
}
function Yfw(t, e, n) {
  return jTe(() => t === "mcps" && e !== void 0 ? EMf(e, n.trim().toLowerCase()) : [], [e, n, t]);
}
function Xfw(t) {
  return jTe(() => ({ duplicateVisibleNames: rel(t ?? []), ambiguousVisibleSourceKeys: sel(t ?? []) }), [t]);
}
function Zfw({ view: t, hasMcpServers: e, matchedMcpServers: n, mcpConnectProgressByServerId: i, onMCPServerToggle: r, onMCPServerAction: s, onDismiss: o, mcpCollisionSets: a }) {
  return jTe(() => t !== "mcps" || !e ? [] : n.map((l) => IMf(l, { mcpConnectProgressByServerId: i, onMCPServerToggle: r, onMCPServerAction: s, onDismiss: o }, a)), [e, n, a, i, o, s, r, t]);
}
function Qfw(t, e, n, i) {
  return jTe(() => {
    if (t !== "customModes") return [];
    const r = n.trim().toLowerCase(), s = r.length === 0 ? e : e.filter((a) => a.label.toLowerCase().includes(r)), o = [];
    for (const a of s) o.push({ id: `plus-mode-${a.id}`, name: a.label, description: a.description, type: "mode", icon: zie(hae, { size: "sm", value: a.badgeAppearance }), trayRowActions: a.trayRowActions, trayTrailing: t5l, onSelect: () => {
      i?.(a.id);
    } });
    return o;
  }, [e, i, n, t]);
}
function Jfw({ view: t, isSearching: e, query: n, buildSlashSections: i, mcpServers: r, builtInModes: s, filePickerRow: o, mcpConnectProgressByServerId: a, onMCPServerToggle: l, onMCPServerAction: c, onDismiss: u, mcpCollisionSets: d }) {
  return jTe(() => {
    if (t !== "root" || !e) return [];
    const h = i(n, { anchoredTrayMode: true, origin: "plus" });
    let p = s3n(h.map((f) => f.items)).rows.map((f) => f.item);
    const g = sze(n);
    if (r !== void 0) {
      const f = EMf(r, g).map((k) => IMf(k, { mcpConnectProgressByServerId: a, onMCPServerToggle: l, onMCPServerAction: c, onDismiss: u }, d)), _ = new Set(s.map((k) => k.label.toLowerCase())), b = (k) => _.has(k.name.toLowerCase()) && (k.type === "mode" || k.sectionTitle === "Modes"), y = p.filter(b), S = p.filter((k) => !b(k));
      p = [...y, ...f, ...S];
    }
    return [o.name, ...o.searchAliases ?? []].some((f) => f.toLowerCase().includes(g)) && p.push(o), p;
  }, [s, i, o, e, d, a, r, u, c, l, n, t]);
}
var JOl, xMf, AMf, e5l, t5l, 