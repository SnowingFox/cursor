// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerSimulatedHumanAction.react.js range:31529393..31548515
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, d_, Iyw
// wrapper-init: Ryw
// hoisted-owner: ComposerHumanRowDisplay.react.js (app-out-vs-workbench-workbench-glass-main-js:5904); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var Ryw = L({ "ComposerSimulatedHumanAction.react.js"() {
  "use strict";
  E(), d_(), Iyw();
} });
import { useCallback as q3i, useEffect as Pyw, useLayoutEffect as z3i, useMemo as V3f, useRef as P3n, useState as Qxt } from "./react-runtime/react/esm-index-production.js";
import { jsx as Z1, jsxs as V3i } from "./react-runtime/react/esm-jsx-runtime-production.js";
function Myw(t, e, n, i) {
  const r = cbp(t);
  if (r !== void 0) return { lineCountAt: (o) => qvi(r, o).lineCount, tightWidthAt: (o) => ubp(r, o) };
  const s = zqh(e, n);
  return { lineCountAt: (o) => Yqh({ prepared: s, maxWidth: o, lineHeightPx: i }).lineCount, tightWidthAt: (o) => Kqh(s, o, i) };
}
function Dyw(t) {
  if (K3i === void 0) {
    const e = /* @__PURE__ */ new Set();
    K3i = e, queueMicrotask(() => {
      K3i = void 0;
      for (const i of e) i.clear();
      const n = [...e].map((i) => i.measure());
      for (const i of n) i?.();
    });
  }
  K3i.add(t);
}
function Nyw({ bubbleRef: t, bodyRef: e, enabled: n, remeasureKey: i }) {
  z3i(() => {
    const r = t.current, s = e.current;
    if (r === null || s === null) return;
    if (!n) {
      r.style.removeProperty("max-width");
      return;
    }
    const o = ws(r), a = r.parentElement;
    let l, c = false;
    const d = { clear: () => r.style.removeProperty("max-width"), measure: () => {
      if (r.getClientRects().length === 0) return;
      c = true;
      const f = r.getBoundingClientRect().width, _ = s.getBoundingClientRect().width;
      if (_ <= 0) return;
      const y = (() => {
        const N = s.innerText;
        if (N.trim() !== "") return N;
        const U = s.style.getPropertyValue("visibility");
        s.style.setProperty("visibility", "visible");
        const j = s.innerText;
        return U === "" ? s.style.removeProperty("visibility") : s.style.setProperty("visibility", U), j;
      })();
      if (y.trim() === "") {
        if (l === void 0) {
          const N = new o.MutationObserver(() => {
            s.textContent?.trim() !== "" && (N.disconnect(), l === N && (l = void 0), h());
          });
          N.observe(s, { childList: true, characterData: true, subtree: true }), l = N;
        }
        return;
      }
      l?.disconnect(), l = void 0;
      const S = s.querySelector(".aislash-editor-input-readonly") ?? s, k = o.getComputedStyle(S), C = qqh(k), T = Math.max(1, Math.round(S.getBoundingClientRect().height / C));
      if (T === 1) return;
      const I = i1n(k), A = Myw(s, y, I, C);
      if (A.lineCountAt(_) > T) return;
      const P = A.tightWidthAt(_);
      if (P <= 0) return;
      const M = f - _, O = `min(100%, ${Math.ceil(P + Vqh(I) + M)}px)`;
      return () => {
        r.style.maxWidth = O;
      };
    } }, h = () => Dyw(d);
    h();
    let p;
    const g = new o.ResizeObserver((f) => {
      const _ = f[f.length - 1]?.contentRect.width;
      if (_ === void 0 || _ === p) return;
      const b = p === void 0;
      p = _, (!b || !c) && h();
    });
    return a !== null && g.observe(a), () => {
      K3i?.delete(d), g.disconnect(), l?.disconnect();
    };
  }, [t, e, n, i]);
}
function Lyw(t, e, n, i) {
  const r = P3n(void 0);
  z3i(() => {
    const s = t.current;
    if (!e || s === null) return;
    const o = (l) => {
      if (!Number.isFinite(l)) return;
      const c = r.current;
      c !== void 0 && Math.abs(l - c) <= 1 || (r.current = l, i?.invalidateRowsForBubble(n, "hydration"));
    };
    o(s.getBoundingClientRect().height);
    const a = new (ws(s)).ResizeObserver((l) => {
      const c = l[l.length - 1];
      c !== void 0 && o(c.borderBoxSize[0]?.blockSize ?? c.target.getBoundingClientRect().height);
    });
    return a.observe(s), () => a.disconnect();
  }, [n, t, e, i]);
}
function K3f({ children: t }) {
  return Z1("div", { style: { paddingInline: "var(--conversation-text-inset, 0px)" }, children: t });
}
function Oyw({ children: t, expanded: e = false }) {
  const n = P3n(null), [i, r] = Qxt(false);
  z3i(() => {
    if (e) return;
    const a = n.current;
    if (a === null) return;
    const l = ws(a), c = new Vn(), u = () => {
      r(a.scrollHeight > a.clientHeight);
    }, d = () => {
      c.value = e1(() => {
        u();
      }, void 0, l);
    }, h = new l.ResizeObserver(d);
    return h.observe(a), d(), () => {
      c.dispose(), h.disconnect();
    };
  }, [e]);
  const s = !e && i, o = s ? `linear-gradient(to bottom, black calc(100% - ${mPp}), transparent 100%)` : "none";
  return Z1("div", { ref: n, style: e ? { overflow: "visible" } : { maxHeight: s ? `calc(${BDa} + ${F1s} + ${qbi})` : BDa, boxSizing: "border-box", overflow: "hidden", WebkitMaskImage: o, maskImage: o, paddingTop: s ? F1s : void 0, marginTop: s ? `calc(-1 * ${F1s})` : void 0, paddingBottom: s ? qbi : void 0, marginBottom: s ? `calc(-1 * ${qbi})` : void 0 }, children: t });
}
function Fyw({ parts: t, openSlackUserMention: e }) {
  return Z1("div", { className: "aislash-editor-input-readonly", style: { resize: "none", gridArea: "1 / 1 / 1 / 1", overflow: "hidden", lineHeight: UHt, fontFamily: "inherit", color: "var(--vscode-input-foreground)", backgroundColor: "transparent", display: "block", outline: "none", scrollbarWidth: "none", boxSizing: "border-box", border: "none", wordWrap: "break-word", userSelect: "text", whiteSpace: "pre-wrap", wordBreak: "break-word", padding: "0px" }, children: Z1("p", { dir: "auto", style: { margin: 0, lineHeight: "inherit" }, children: Z1("span", { "data-lexical-text": "true", children: t.map((n, i) => n.kind === "text" ? n.text : Z1(Slw, { label: n.label, link: n.link, openSlackUserMention: e }, i)) }) }) });
}
function Byw({ model: t, runtime: e }) {
  const { actions: n } = e, i = q3i((l, c) => {
    l.preventDefault(), l.stopPropagation(), n.openHumanMessageLink({ metaKey: l.metaKey, ctrlKey: l.ctrlKey }, c);
  }, [n]), r = q3i((l) => n.onCommandChipClick(l), [n]), s = q3i((l, c) => n.onMentionChipAction(l, c), [n]), o = q3i((l, c) => n.onMentionChipContextMenu(l, c), [n]);
  if (t.simulatedAction !== void 0) {
    const l = n.openHumanMessageLink;
    return Z1(Ayw, { action: t.simulatedAction, onOpenHref: l });
  }
  if (t.body.kind === "placeholder") return Z1("div", { className: "aislash-editor-placeholder", style: { pointerEvents: "none", userSelect: "none", color: "var(--cursor-text-quaternary)", fontSize: "var(--conversation-text-font-size)", lineHeight: UHt }, children: t.body.text });
  const a = t.body.kind === "tiptap" ? Z1("div", { className: "aislash-editor-input-readonly", style: { resize: "none", lineHeight: UHt, fontFamily: "inherit", color: "var(--vscode-input-foreground)", backgroundColor: "transparent", display: "block", outline: "none", border: "none", wordWrap: "break-word", wordBreak: "break-word", padding: "0px" }, children: Z1(qgi, { content: t.body.content, editorClassName: "composer-human-tiptap-readonly-editor", isCommandChipClickable: n.isCommandChipClickable, mentionChipResolve: n.mentionChipResolve, onCommandChipClick: r, onLinkClick: i, onMentionChipAction: s, onMentionChipContextMenu: o }) }) : Z1(Fyw, { parts: t.body.parts, openSlackUserMention: n.openSlackUserMention });
  return Z1(Oyw, { expanded: t.bodyExpanded, children: a });
}
function Uyw({ model: t, onRestoreHoverChange: e, runtime: n }) {
  const [i, r] = Qxt(false), s = n.inputs.isGlass, o = t.showStopButton, a = o && s, l = o ? `Stop ${t.stopKeybinding ?? ""}`.trimEnd() : "Restore Checkpoint", c = q3i((d) => {
    if (d.stopPropagation(), d.nativeEvent.stopImmediatePropagation(), o) {
      n.actions.stopGenerating();
      return;
    }
    r(true), n.actions.revertToCheckpoint(t.bubbleId).finally(() => r(false));
  }, [t.bubbleId, n.actions, o]);
  return Z1("div", { className: a ? "human-message-action-slot flex h-6 w-6 shrink-0 items-end justify-end self-end relative" : "human-message-action-slot flex flex-col justify-end self-end w-5 shrink-0 items-end relative", "data-reverting": i ? "" : void 0, children: i ? Z1(Yg, { indeterminate: true, size: "sm", variant: "ring" }) : a ? Z1($3f, { onClick: () => n.actions.stopGenerating(), shortcut: t.stopKeybinding }) : Z1(xs, { content: l, children: Z1("div", { className: `anysphere-icon-button bg-[transparent] border-none text-[var(--cursor-text-primary)] flex w-4 items-center justify-center ${o ? "leading-[17px] px-1.5 h-[26px] box-border shrink-0 stop-button" : "box-border shrink-0 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded-[5px] !w-[20px] !h-[20px] restore-button"}`, "data-variant": o ? "background" : void 0, onClick: c, onMouseEnter: () => e(true), onMouseLeave: () => e(false), style: { width: "20px", height: "20px" }, children: Z1("span", { className: `codicon ${o ? "codicon-debug-stop" : "codicon-restore"} !text-[16px]` }) }) }) });
}
function Y3f({ placement: t, runtime: e }) {
  const [n, i] = Qxt(false);
  return Z1(xs, { content: "Restore edits to the latest checkpoint", children: Z1("div", { className: "opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-100", onClick: () => {
    n || (i(true), e.actions.checkoutToLatest().finally(() => i(false)));
  }, style: { alignSelf: t === "above" ? "flex-end" : void 0, marginBottom: t === "above" ? "6px" : void 0, marginTop: t === "below" ? "6px" : void 0, padding: "0px 8px" }, children: Z1(LC, { action: "Redo checkpoint", loading: n }) }) });
}
function jyw({ model: t, runtime: e, connections: n, invalidation: i }) {
  const [r, s] = Qxt(false), [o, a] = Qxt(false), [l, c] = Qxt(null), [u, d] = Qxt(false), [h, p] = Qxt(1), g = t.state === "placeholder", { actions: f } = e, _ = eow(), b = t.body.kind === "plain" ? t.body.text : void 0;
  z3i(() => {
    b !== void 0 && _();
  }, [b, t.bubbleId, t.showRestoreButton, t.showStopButton, _]), Pyw(() => {
    g && f.onPlaceholderDisplayed(t.bubbleId);
  }, [f, g, t.bubbleId]);
  const y = t.bodyExpanded || t.isSubagent && o, S = P3n(null), k = P3n(null), C = P3n(null), T = t.body.kind === "tiptap" ? t.body.content : t.body.text;
  Nyw({ bubbleRef: S, bodyRef: k, enabled: t.inProjectBubbleLane && !t.isBeingEdited && t.images.length === 0 && t.videos.length === 0 && t.slackThreads.length === 0, remeasureKey: `${y}|${t.showStopButton}|${t.showRestoreButton}|${t.isStandalone}|${t.body.kind}|${T}|${t.isBeingEdited}` });
  const I = t.todoSummary !== void 0, A = t.todoAdjacentLayout;
  z3i(() => {
    const Q = C.current;
    if (!I || Q === null) return;
    const te = () => {
      p(Q.offsetHeight);
    };
    te();
    const ee = new (ws(Q)).ResizeObserver(te);
    return ee.observe(Q), () => ee.disconnect();
  }, [I]);
  const P = P3n(null), M = t.slackDisplay !== void 0 && !t.hiddenSimulated && !t.hideHumanMessages;
  if (Lyw(P, M, t.bubbleId, i), t.state === "placeholder") return Z1(K3f, { children: Z1("div", { "aria-hidden": "true", style: { height: "20px" } }) });
  if (t.state === "failed") return Z1(K3f, { children: Z1("div", { className: "opacity-50 text-xs py-1", children: "Unable to load this step." }) });
  const O = t.hiddenSimulated || t.hideHumanMessages, N = kBp({ composerId: e.inputs.composerDataHandle().composerId, bubbleId: t.bubbleId });
  if (t.slackDisplay?.kind === "subscription-event") {
    const Q = t.slackDisplay.event, te = f.openSubscriptionEventUrl, ee = (re) => {
      const ie = Q.url;
      re.key !== "Enter" || ie === void 0 || (re.stopPropagation(), re.target === re.currentTarget && (re.preventDefault(), te(ie)));
    };
    return Z1("div", { className: "relative composer-rendered-message hide-if-empty composer-message-blur", "data-message-id": t.bubbleId, "data-message-index": t.messageIndex, "data-message-kind": "human", "data-message-role": "human", "data-server-bubble-id": t.serverBubbleId ?? void 0, id: N, onKeyDown: ee, ref: P, style: { display: O ? "none" : void 0 }, tabIndex: 0, children: Z1(Raw, { events: [Q], onOpenUrl: te }) });
  }
  const U = t.state === "suppressed", j = t.planExecution, $ = (Q) => {
    const te = ws(Q.currentTarget).getSelection();
    if (!_lw(Q, te)) switch (t.clickAction) {
      case "select": {
        f.selectBubble(t.bubbleId), a(false);
        return;
      }
      case "expand": {
        a((ee) => !ee);
        return;
      }
      case "revert-after-checkout": {
        Q.stopPropagation(), f.revertToCheckpoint(t.bubbleId);
        return;
      }
      case "edit": {
        f.startEditing(t.bubbleId, t.isPlanMode);
        return;
      }
      case "none":
        return;
      default: {
        const ee = t.clickAction;
        throw new Error(`Unhandled click action: ${ee}`);
      }
    }
  }, H = (Q) => {
    if (!t.showGlassPromptContextMenu) return;
    Q.preventDefault(), Q.stopPropagation();
    const te = Q.currentTarget, re = ws(te).getSelection();
    let ie = "";
    if (re && re.rangeCount > 0) {
      const oe = re.getRangeAt(0);
      te.contains(oe.commonAncestorContainer) && (ie = re.toString().trim());
    }
    d(true), c({ point: { x: Q.clientX, y: Q.clientY }, ariaLabel: "Prompt actions", sections: f.buildGlassPromptMenuSections(t.bubbleId, ie) });
  }, G = {};
  for (const [Q, te] of Object.entries(t.humanMessageStyle ?? {})) {
    const ee = Q.replace(/-([a-z])/g, (re, ie) => ie.toUpperCase());
    G[ee] = te;
  }
  const q = { display: O ? "none" : "block", outline: "none", paddingTop: !t.hiddenSimulated && t.simulatedAction === void 0 && t.location === "editor" ? "var(--conversation-editor-message-top-inset, 10px)" : "0px", paddingBottom: "0px", backgroundColor: "var(--composer-pane-background)", opacity: 1, pointerEvents: t.pointerEventsNone ? "none" : void 0, ...G, ...t.stickyEnabled ? { zIndex: t.stickyExempt ? void 0 : Wnl } : { position: "relative" } }, K = t.isStandalone ? SHh({ interactive: t.simulatedAction === void 0 && !r, connectedAbove: t.inProjectBubbleLane && n?.above === true, connectedBelow: t.inProjectBubbleLane && n?.below === true, filled: t.filledBubble }).className : "", V = f.redoPlanExecution, Y = () => j ? f.revertPlanExecution(t.bubbleId, j.planUri) : Promise.resolve(), J = f.stopGenerating;
  return Z1("div", { className: `relative composer-rendered-message hide-if-empty composer-message-blur${t.dimmed ? " human-dimmed" : ""}`, "data-message-id": t.bubbleId, "data-message-index": t.messageIndex, "data-message-kind": "human", "data-message-role": "human", "data-server-bubble-id": t.serverBubbleId ?? void 0, id: N, style: q, tabIndex: -1, children: !U && j ? Z1(G3f, { isGlass: e.inputs.isGlass, isSticky: t.isSticky, isSubagent: t.isSubagent, loadTitle: e.actions.loadPlanExecutionTitle, onRedo: V, onRestore: Y, onStop: J, plan: j, showRestoreButton: t.showRestoreButton, showStopButton: t.showStopButton, stopKeybinding: t.stopKeybinding }) : U ? null : Z1("div", { style: { backgroundColor: "transparent" }, children: V3i("div", { className: "human-message-with-todos-wrapper", children: [t.showCheckedOutChip && A && Z1(Y3f, { placement: "above", runtime: e }), Z1("div", { className: "composer-human-message-container human-execution-message-top", onClick: (Q) => {
    Q.stopPropagation(), Q.nativeEvent.stopImmediatePropagation();
  }, ref: C, style: { display: "flex", alignItems: "flex-start", gap: "8px", backgroundColor: "color-mix(in srgb, var(--vscode-sideBar-background) 60%, transparent)", outline: "none", borderRadius: "var(--conversation-surface-border-radius)", position: t.isBeingEdited ? "relative" : void 0, zIndex: t.isBeingEdited ? Wnl : void 0 }, children: V3i("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end", width: "100%" }, children: [t.isBeingEdited ? Z1(wyw, { model: t, runtime: e }) : Z1("div", { className: `composer-human-message${t.isStandalone ? " standalone-glass" : ""}${t.cloudReadonlyStandalone ? " cloud-readonly" : ""}${t.simulatedAction !== void 0 ? " unclickable" : ""}${r ? " restore-hovering" : ""}${K ? ` ${K}` : ""}`, "data-connected-above": n?.above ? "" : void 0, "data-connected-below": n?.below ? "" : void 0, onClick: $, onContextMenu: H, ref: S, style: { backgroundColor: t.isStandalone ? void 0 : t.location === "bar" ? "var(--vscode-sideBar-background)" : "color-mix(in srgb, var(--vscode-input-background) 90%, var(--vscode-sideBar-background))", border: t.isSelected && !t.isStandalone ? "1px solid var(--vscode-editorLightBulb-foreground)" : void 0, cursor: t.simulatedAction !== void 0 ? "default" : t.cloudReadonlyStandalone ? "text" : t.disableResubmits ? "default" : "pointer" }, children: V3i("div", { className: "composer-human-message-content", "data-standalone": t.isStandalone ? "true" : void 0, style: { fontSize: "var(--conversation-text-font-size, 14px)", lineHeight: UHt }, children: [t.senderAttribution !== void 0 && Z1(rSa, { sender: t.senderAttribution }), Z1(Hyw, { actions: f, images: t.images, videos: t.videos }), t.slackThreads.length > 0 && Z1("div", { children: t.slackThreads.map((Q) => Z1("div", { children: Z1("div", { className: "composer-slack-thread", children: Q.lines.map((te) => Z1("div", { children: te.text }, te.key)) }) }, Q.key)) }), V3i("div", { className: "composer-human-message-body flex w-full justify-between box-border gap-2.5 items-center", children: [Z1("div", { className: "human-message-inline-body min-w-0 h-min", ref: k, children: Z1(Byw, { model: { ...t, bodyExpanded: y }, runtime: e }) }), (t.showStopButton || t.showRestoreButton) && Z1(Uyw, { model: t, onRestoreHoverChange: s, runtime: e })] })] }) }), t.showCheckedOutChip && !A && Z1(Y3f, { placement: "below", runtime: e }), t.showGlassPromptContextMenu && u && Z1(jms, { onOpenChange: (Q) => {
    Q || c(null);
  }, open: l })] }) }), V3i("div", { className: "human-execution-message-bottom", style: { marginTop: I ? `-${h}px` : "-1px" }, children: [t.todoSummary === void 0 ? Z1("div", { className: "todo-summary-sticky-container", style: { height: "1px", opacity: 0, overflow: "hidden", boxSizing: "border-box" }, children: Z1("div", { className: "todo-summary-empty-line" }) }) : Z1(Rlw, { isGlass: e.inputs.isGlass, model: t, summary: t.todoSummary, topMessageHeight: h }), Z1("div", { className: "composer-fade-overlay", style: { opacity: t.isSticky ? 1 : 0 } })] })] }) }) });
}
function $yw({ descriptor: t, invalidation: e, row: n, runtime: i }) {
  const r = n.sourceIds[0] ?? "", s = V3f(() => ({ runtime: i.inputs, bubbleId: r }), [r, i.inputs]), o = o3(s, vlw);
  return Z1(jyw, { connections: t.humanBubbleConnections, invalidation: e, model: o, runtime: i });
}
function Hyw({ actions: t, images: e, videos: n }) {
  const i = V3f(() => [...e.map((r, s) => ({ kind: "image", id: r.uuid || `${r.path}:${s}`, ...r.path ? { src: AAn(r.path, r.loadedAt) } : {}, ...r.dimension ? { width: r.dimension.width, height: r.dimension.height } : {} })), ...n.map((r) => ({ kind: "video", id: r.id, ...r.path ? { src: AAn(r.path, r.loadedAt) } : {} }))], [e, n]);
  return i.length === 0 ? null : Z1(iSa, { attachments: i, onOpen: (r) => {
    if (r < e.length) {
      t.openImageViewer(e, r);
      return;
    }
    const s = n[r - e.length];
    s !== void 0 && t.openVideo(s);
  } });
}
var F1s, K3i, 