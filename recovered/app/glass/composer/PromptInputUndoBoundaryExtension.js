// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptInputUndoBoundaryExtension.js range:17370527..17393289
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Fy, $kt, gE, Aw, jkt
// wrapper-init: hc1
// hoisted-owner: PromptInputEditor.js (app-out-vs-workbench-workbench-glass-main-js:2945); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var hc1 = L({ "PromptInputUndoBoundaryExtension.js"() {
  "use strict";
  E(), Fy(), $kt(), gE(), Aw(), jkt();
} });
import { jsx as Krt, jsxs as wwn, Fragment as l_p } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as pc1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useMemo as wae, useState as ixa, useCallback as nbe, useRef as Cwn, useEffect as Bvi, useLayoutEffect as Twn } from "./react-runtime/react/esm-index-production.js";
import { createPortal as c_p } from "./react-runtime/react-dom/esm-index-production.js";
function mc1(t, e, n) {
  const { state: i } = t;
  if (!i.selection.empty || i.doc !== n.doc) return false;
  const r = t.posAtCoords({ left: e.clientX, top: e.clientY });
  if (!r) return false;
  const s = Q_.between(i.doc.resolve(n.anchor), i.doc.resolve(r.pos));
  return s.empty ? false : (e.preventDefault(), t.focus(), t.dispatch(i.tr.setSelection(s).setMeta("pointer", true)), true);
}
function gc1({ variant: t, presentation: e, isExpanded: n, isDynamicIslandActive: i, isDynamicIslandCollapsing: r }) {
  const s = t !== "expanded", o = t === "dynamic-island";
  return [f6e.root, _Sa.editorLinks, c4r.listNesting, f6e.overlayOwnedSelection, s && f6e.compact, s && n && f6e.compactExpanded, o && !i && f6e.dynamicIslandInactive, o && !i && !r && f6e.dynamicIslandHidden, o && (i || r) && f6e.dynamicIslandVisible, o && r && f6e.dynamicIslandCollapsing, o && i && f6e.dynamicIslandActive, o && f6e.reducedMotion, e === "embedded" && h_p.embedded];
}
function fc1() {
  return { root: [ich, sxa.root], action: sxa.action };
}
function vc1(t, e, n, i, r) {
  const s = { class: e, "data-editor-owns-history": "true" };
  r && (s["data-editor-releases-escape"] = "true");
  const o = n !== void 0 && n.trim() !== "" ? n : void 0, a = t === null && o !== void 0;
  return o !== void 0 && (s["aria-label"] = o), i !== null && (s[a ? "aria-placeholder" : "aria-description"] = i), a && (s.role = "textbox", s["aria-multiline"] = "true"), t === null || (s.role = "combobox", s["aria-haspopup"] = "listbox", s["aria-autocomplete"] = "list", s["aria-expanded"] = t.expanded ? "true" : "false", !t.expanded) || (s["aria-controls"] = t.listboxId, t.activeDescendantId !== void 0 && (s["aria-activedescendant"] = t.activeDescendantId)), s;
}
function _c1(t, e, n, i) {
  if (n === "" || ywt.getState(t)) return null;
  const r = t.doc.firstChild;
  return r?.type.name === "paragraph" && cli(t.doc) && t.selection.anchor <= r.nodeSize ? e !== null && Tvp(e, t) !== null ? null : n : i && _vp(t.doc) !== null ? n : null;
}
function bc1(t) {
  return t ? t.scrollWidth > t.clientWidth || t.scrollHeight > g_p : false;
}
function yc1(t, e, n) {
  if (!t || t.isEmpty || t.view.dom.querySelector(".is-editor-empty")) return false;
  const { hasText: i, hasLineBreak: r } = n;
  return i || r ? true : e.hardBreakCount > 0 || e.hasCommands || e.hasMentions;
}
function Sc1(t) {
  const e = pc1(11), { active: n, root: i, onHostElement: r } = t, { zIndex: s, portalLayerStyles: o } = Yj("popover", n);
  let a;
  e[0] !== s ? (a = s !== null ? { zIndex: s } : {}, e[0] = s, e[1] = a) : a = e[1];
  let l;
  e[2] !== o || e[3] !== a ? (l = { position: "absolute", ...o, ...a }, e[2] = o, e[3] = a, e[4] = l) : l = e[4];
  let c;
  e[5] !== r || e[6] !== l ? (c = Krt("div", { ref: r, "data-ui-prompt-input-link-menu-layer": "", style: l }), e[5] = r, e[6] = l, e[7] = c) : c = e[7];
  let u;
  return e[8] !== i || e[9] !== c ? (u = c_p(c, i), e[8] = i, e[9] = c, e[10] = u) : u = e[10], u;
}
function u_p({ ariaLabel: t, placeholder: e = "Type a message...", rootStyle: n, focusedPlaceholder: i, showPlaceholderWhenOnlyMentions: r = false, managedMentionUuidPrefix: s, leadingContent: o, plainText: a = false, enableListEditing: l = false, autoFocus: c = false, disabled: u = false, onFocus: d, onBlur: h, onContextMenu: p, onChange: g, onMentionsChange: f, onEscape: _, releaseUnusedEscape: b = false, onFurtherArrowUp: y, onFurtherArrowDown: S, onCtrlAltArrowUp: k, onCtrlAltArrowDown: C, onOpenLink: T, onMentionChipAction: I, mentionChipPresentation: A, hideMentionChipRemoveButton: P, onCommandChipClick: M, isCommandChipClickable: O, promptSuggestion: N, onAcceptPromptSuggestion: U, onDismissPromptSuggestion: j, onEditorReady: $, onReady: H, className: G, minHeight: q, maxHeight: K, onBackspaceAtStart: V, onModBackspaceAtStart: Y, shouldConsumeTabForIndent: J = false }) {
  const { variant: Q, presentation: te, stylexStyles: ee, isDynamicIslandActive: re, setEditor: ie, setHasContent: oe, onSubmit: se, submitOnCmdEnter: le, onEscape: ce, isFocused: ae, setIsFocused: de, setNeedsExpansion: he, isExpanded: ge, slashMenu: pe, mentionMenu: ve, hashMenu: fe, mentionEditorIntegration: Te, isMenuOpen: _e, onImageDrop: Ce, editorComboboxA11y: Se, suggestionSlotEditorWiring: Pe } = TGe("PromptInput.Editor"), we = wO(), Ie = we?.ownerDocument, Me = wae(() => {
    if (!Ie) return;
    const rr = Ie.defaultView?.Document.prototype.createElement ?? Document.prototype.createElement, Gs = rr.call(Ie, "div"), Vr = rr.call(Ie, "div");
    return Gs.appendChild(Vr), { mount: Vr };
  }, [Ie]), [De, Ne] = ixa(false), [be, je] = ixa(null), $e = nbe(() => {
    Ne(true);
  }, []), Je = nbe(() => {
    Ne(false);
  }, []), Ge = o != null, xe = ae && i ? i : e, Oe = ro(se), ct = ro(_), Ye = ro(ce), Ve = ro(b), Xe = ro(y), lt = ro(S), He = ro(k), gt = ro(C), ht = ro(g), Ae = ro(f), ot = ro(H), Be = ro(p), Ue = ro(V), it = ro(Y), qe = ro(Ce), pt = ro(U), dt = ro(j), ft = ro(Te.enabled), bt = ro(Te.pluginBindings), St = ro(Q), Et = ro(he), kt = ro(a), xt = ro(J), Pt = Cwn(null), Dt = Cwn(null), Vt = ro(Pe), tn = nbe(() => Vt.current?.isTrayInteractionActive() ?? false, [Vt]), un = ro(xe), kn = ro(r), oi = ro(s), Fn = ri("ui-prompt-input-editor__input", { 0: { className: "ui-1n2onr6 ui-13ly8rp ui-1jkygx ui-1xlntvz ui-1o7kk3e ui-8jbk1e ui-193iq5w ui-1k57tk5 ui-1t137rt ui-1uczgqu ui-fc7y3v ui-1yxxptd ui-1wd3ewq ui-1hx0egp ui-17etxam ui-1i64en ui-em7eiu ui-13faqbe ui-1mzt3pk" }, 1: { className: "ui-1n2onr6 ui-193iq5w ui-1k57tk5 ui-1t137rt ui-1wd3ewq ui-1hx0egp ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-10fesj9 ui-1acoasx ui-11wthnw ui-1ja60sm ui-14ytart ui-tdohr6 ui-a4yma5 ui-126k92a ui-f12y4z ui-virisu ui-13faqbe ui-j0a0fe ui-pt22lz ui-13vxgm3" } }[(te === "embedded") << 0].className), Qt = nbe((rr) => vc1(Se, Fn, t, _c1(rr, Pt.current, un.current, kn.current), b), [t, Se, Fn, un, b, kn]), Sn = ro(A), $n = ro(le), Mn = Cwn(false), Un = nbe((rr, Gs, Vr) => {
    if (St.current === "expanded") return;
    const So = yc1(Pt.current, Gs, Vr) && bc1(rr), na = Mn.current || So;
    Et.current(na);
  }, [Et, St]), Xn = nbe(() => {
    ve.setIsOpen(false);
  }, [ve.setIsOpen]), Ti = XIa("@"), bi = Cwn(""), Qn = XIa("/"), ni = XIa("#"), pn = wae(() => [S9r.configure({ heading: false, link: false, ...a ? { bold: false, italic: false, strike: false, code: false } : {}, blockquote: false, codeBlock: false, horizontalRule: false, bulletList: false, orderedList: false, listItem: false, trailingNode: false, paragraph: { HTMLAttributes: { class: p_p } } }), ...Cep({ enableListEditing: l })], [a, l]), yn = wae(() => Gl1(), []), Ln = nbe(() => {
    pe.setIsOpen(false), pe.setQuery(""), pe.setPosition(null);
  }, [pe.setIsOpen, pe.setPosition, pe.setQuery]), xi = nbe(() => {
    fe.setIsOpen(false), fe.setQuery(""), fe.setPosition(null);
  }, [fe.setIsOpen, fe.setPosition, fe.setQuery]), Ci = wae(() => jl1(() => {
    const rr = Vt.current;
    if (rr !== void 0) return { canOpen: rr.slash.isEnabled, allowAt: Qn.allowAt, onStart: (Gs, Vr) => {
      Qn.onRange(Vr), rr.slash.onStart(Gs, Vr);
    }, onUpdate: (Gs, Vr, So) => {
      Qn.onRange(Vr), rr.slash.onUpdate(Gs, Vr, So);
    }, onExit: () => {
      Qn.onExit(), rr.slash.onExit();
    }, onKeyDown: rr.slash.onKeyDown, markDismissedByEscape: Qn.markDismissedByEscape };
  }), [Qn.allowAt, Qn.markDismissedByEscape, Qn.onExit, Qn.onRange, Vt]), En = wae(() => $l1(() => {
    const rr = Vt.current;
    if (rr !== void 0) return { canOpen: rr.hash.isEnabled, allowAt: ni.allowAt, onStart: (Gs, Vr) => {
      ni.onRange(Vr), rr.hash.onStart(Gs, Vr);
    }, onUpdate: (Gs, Vr, So) => {
      ni.onRange(Vr), rr.hash.onUpdate(Gs, Vr, So);
    }, onExit: () => {
      ni.onExit(), rr.hash.onExit();
    }, onKeyDown: rr.hash.onKeyDown, markDismissedByEscape: ni.markDismissedByEscape };
  }), [ni.allowAt, ni.markDismissedByEscape, ni.onExit, ni.onRange, Vt]), Dn = wae(() => new j1("promptInputMentionSuggestion"), []), Si = wae(() => Evp({ onAccept: (rr) => {
    pt.current?.(rr);
  }, onDismiss: (rr) => {
    dt.current?.(rr);
  }, isMenuOpen: tn }), [tn, pt, dt]), Ui = wae(() => lc1(), []), Nn = wae(() => bl1(), []), ci = wae(() => TBS({ getManagedUuidPrefix: () => oi.current }), [oi]), Pi = wae(() => Cl1({ getPlaceholder: () => kn.current ? un.current : null, getMentionChipPresentation: () => Sn.current }), [un, Sn, kn]), vi = Cwn(null), Yi = Cwn(null), Bn = wae(() => ({ pluginKey: Dn, char: m_p, allowSpaces: true, allowedPrefixes: null, items: () => [], allow: ({ range: rr }) => ft.current && Ti.allowAt(rr.from), findSuggestionMatch: Xl1, render: () => ({ onStart: (rr) => {
    const Gs = bt.current;
    vi.current = Pt.current?.state.doc ?? null, Yi.current = rr.range.from, Ti.onRange(rr.range.from), bi.current = rr.query, ve.setIsOpen(true), Gs.onSuggestionStart(rr.query, rr.range.from), xi(), Ln();
  }, onUpdate: (rr) => {
    const Gs = bt.current, Vr = Pt.current?.state.doc ?? null;
    if (Vr !== null && vi.current === Vr && Yi.current === rr.range.from) return;
    vi.current = Vr, Yi.current = rr.range.from, Ti.onRange(rr.range.from);
    const So = bi.current;
    bi.current = rr.query, ve.setIsOpen(true), Gs.onSuggestionUpdate(rr.query, rr.range.from, So !== rr.query), xi(), Ln();
  }, onExit: () => {
    const rr = bt.current;
    vi.current = null, Yi.current = null, Ti.onExit(), bi.current = "", ve.setIsOpen(false), rr.onSuggestionExit();
  }, onKeyDown: ({ event: rr }) => {
    const Gs = bt.current;
    return rr.key === "Escape" ? Gs.handleSuggestionKeyDown(rr, Pt.current, { shouldConsumeTabForIndent: xt.current, onEscapeBeforeDismiss: () => Gs.returnToRoot() }) ? true : (Ti.markDismissedByEscape(), false) : Gs.handleSuggestionKeyDown(rr, Pt.current, { shouldConsumeTabForIndent: xt.current, onEscapeBeforeDismiss: () => false });
  } }) }), [xi, Ln, ft, Ti.allowAt, Ti.markDismissedByEscape, Ti.onExit, Ti.onRange, bt, Dn, ve.setIsOpen, xt]), Tn = wae(() => xl1({ plainTextRef: kt, isMenuOpen: tn, shouldConsumeTabForIndent: () => xt.current, canSubmit: () => Oe.current !== void 0, shouldSubmitOnModEnter: () => $n.current, submitFromDoc: (rr, Gs) => {
    const Vr = Sfp(rr);
    Vr.submitEntry = "keyboard", Gs?.forceSubmit && (Vr.forceSubmit = true), Oe.current?.(Vr);
  }, onFurtherArrowUp: (rr) => {
    const Gs = Xe.current;
    return !Gs || !rr.view.state.selection.empty || !Zvp(rr, "up") ? false : Gs();
  }, onFurtherArrowDown: (rr) => {
    const Gs = lt.current;
    return !Gs || !rr.view.state.selection.empty || !Zvp(rr, "down") ? false : Gs();
  }, onCtrlAltArrowUp: () => He.current?.() ?? false, onCtrlAltArrowDown: () => gt.current?.() ?? false, onEscape: () => {
    const rr = ct.current;
    return rr === void 0 ? Ye.current?.() ?? false : (rr(), true);
  }, releaseUnusedEscape: () => Ve.current, canBackspaceAtStart: () => Ue.current !== void 0, onBackspaceAtStart: () => {
    Ue.current?.();
  }, canModBackspaceAtStart: () => it.current !== void 0 || Ue.current !== void 0, onModBackspaceAtStart: () => {
    const rr = it.current;
    if (rr) {
      rr();
      return;
    }
    Ue.current?.();
  } }), [tn, gt, He, Ue, it, ct, Ye, Ve, lt, Xe, Oe, kt, $n, xt]), Zn = GZo({ immediatelyRender: false, ...Me ? { element: Me } : {}, editable: !u, onBeforeCreate: ({ editor: rr }) => {
    rr.on("destroy", () => {
      ie(null, rr), Pt.current === rr && (Pt.current = null);
    });
  }, extensions: [...pn, dc1(), Oo1(), yn, Ci, En, Si, Ui, Nn, Tn, Ggi.configure({ HTMLAttributes: { class: "ui-prompt-input-command-chip" } }), Wgi.configure({ HTMLAttributes: { class: "ui-pill ui-prompt-input-mention-chip" }, suggestion: Bn }), Ffp.configure({ placeholder: ({ editor: rr }) => ywt.getState(rr.state) ? "" : un.current, emptyEditorClass: "is-editor-empty", showOnlyWhenEditable: false }), Pi, ci], autofocus: c ? "end" : false, editorProps: { attributes: Qt, handleClick: (rr, Gs, Vr) => {
    if (Vr.detail !== 1 || Vr.shiftKey) return false;
    const { state: So } = rr, { selection: na } = So;
    return !na.empty && Gs >= na.from && Gs <= na.to ? (rr.dispatch(So.tr.setSelection(Q_.create(So.doc, Gs))), true) : false;
  }, clipboardTextSerializer: (rr, Gs) => Qvp(Gs.state.doc, Gs.state.selection.from, Gs.state.selection.to), transformPastedText: (rr) => rr.replace(/\n+$/, ""), transformPastedHTML: (rr) => {
    const Gs = rc1(rr), Vr = Gs.match(/^(?:<meta[^>]*>)?\s*<p[^>]*>([\s\S]*)<\/p>\s*$/i);
    return Vr ? Vr[1] : Gs;
  }, transformPasted: (rr, Gs) => sc1(rr, Gs), handlePaste: (rr, Gs) => {
    const Vr = Gs.clipboardData?.files;
    if (Vr && Vr.length > 0) {
      const na = Array.from(Vr).filter((ll) => ll.type.startsWith("image/"));
      if (na.length > 0 && qe.current) return Gs.preventDefault(), qe.current(na), true;
    }
    let So = Gs.clipboardData?.getData("text/plain") || Gs.clipboardData?.getData("text") || "";
    return Pt.current && nxa(Pt.current, So) ? (Gs.preventDefault(), true) : kt.current && (So = So.replace(/\r\n/g, `
`).replace(/\n+$/, ""), So) ? (St.current !== "expanded" && So.includes(`
`) && Et.current(true), Gs.preventDefault(), Gs.stopPropagation(), So.includes(`
`) && U1a(rr, So) || (rr.pasteText(So), rr.dispatch(oGe(rr.state.tr))), true) : false;
  }, handleDOMEvents: { mousedown: (rr, Gs) => {
    Dt.current = null;
    const { selection: Vr } = rr.state;
    return Gs.shiftKey && Gs.button === 0 && Gs.detail === 1 && Vr instanceof Q_ && (Dt.current = { doc: rr.state.doc, anchor: Vr.anchor }), false;
  }, click: (rr, Gs) => {
    const Vr = Dt.current;
    return Dt.current = null, Vr ? mc1(rr, Gs, Vr) : false;
  }, contextmenu: (rr, Gs) => Be.current?.(Gs) === true } }, onUpdate: ({ editor: rr }) => {
    const Gs = rr.state.doc;
    Ti.clearIfTriggerRemoved(Gs), Qn.clearIfTriggerRemoved(Gs), ni.clearIfTriggerRemoved(Gs);
    const Vr = wIa(Gs), { text: So, hasText: na, hasLineBreak: ll } = Vr, Ol = d_p(Gs), { hasCommands: ia, hasMentions: co, paragraphCount: Mi, hardBreakCount: vn } = Ol;
    oe(na || ia || co);
    const zn = kc1(Gs, Ol), _i = vn > 0;
    if (St.current !== "expanded") {
      const sr = Mi > 1 || _i || ll;
      Mn.current = sr;
      const Gi = rr.view?.dom;
      Gi ? Un(Gi, Ol, Vr) : Et.current(sr);
    }
    !na && !ia && !co && !_i && !ll && (Mn.current = false, Et.current(false)), ht.current?.(So, zn), Ae.current?.(Ol.mentions);
  }, onFocus: () => {
    de(true), d?.();
  }, onBlur: () => {
    de(false), h?.();
  } }), tr = Zn && !Zn.isDestroyed ? Zn.view.dom : void 0, hi = tr && we?.ownerDocument === tr.ownerDocument ? we : tr?.ownerDocument.body, ui = tr?.parentElement ?? void 0;
  Bvi(() => {
    Zn?.setEditable(!u);
  }, [u, Zn]), Twn(() => {
    !Zn || Zn.isDestroyed || Zn.view.updateRoot();
  }, [Zn]), Twn(() => {
    Zn && Zn.view.setProps({ attributes: Qt });
  }, [Zn, Qt]), Twn(() => {
    if (!Zn) return;
    const rr = (Vr) => {
      Vr.key !== "Backspace" || !Vr.repeat || Ue.current === void 0 && it.current === void 0 || !wvp(Zn.state) || (Vr.preventDefault(), Vr.stopImmediatePropagation());
    }, Gs = Zn.view.dom;
    return Gs.addEventListener("keydown", rr, true), () => {
      Gs.removeEventListener("keydown", rr, true);
    };
  }, [Zn, Ue, it]), Twn(() => {
    if (!Zn) return;
    const rr = (Vr) => {
      const So = Reflect.get(Vr, "detail");
      if (typeof So != "object" || So === null) return;
      const na = Reflect.get(So, "command");
      na !== "undo" && na !== "redo" || (Vr.preventDefault(), na === "undo" ? Zn.commands.undo() : Zn.commands.redo());
    }, Gs = Zn.view.dom;
    return Gs.addEventListener(rxa, rr), () => Gs.removeEventListener(rxa, rr);
  }, [Zn]), Bvi(() => {
    if (!Zn) {
      Pt.current = null;
      return;
    }
    return ie(Zn), Pt.current = Zn, $?.(Zn), ot.current?.(), () => {
      ie(null, Zn), Pt.current === Zn && (Pt.current = null);
    };
  }, [Zn, ie]), Bvi(() => {
    if (!Zn) return;
    const rr = Zn.storage.promptSuggestion, Gs = N?.text, Vr = N?.reqId;
    if (!(rr.text === Gs && rr.reqId === Vr)) {
      if (Gs) {
        Zn.commands.setPromptSuggestion({ text: Gs, reqId: Vr });
        return;
      }
      Zn.commands.clearPromptSuggestion();
    }
  }, [Zn, N?.reqId, N?.text]), Twn(() => {
    if (!Zn || Q === "expanded") return;
    const rr = Zn.view?.dom;
    if (!rr) return;
    const Gs = () => {
      const So = d_p(Zn.state.doc), na = wIa(Zn.state.doc);
      Un(rr, So, na);
    };
    Gs();
    const Vr = new ResizeObserver(Gs);
    return Vr.observe(rr), () => {
      Vr.disconnect();
    };
  }, [Zn, ge, Un, Q]);
  const [Ni, cr] = ixa(null);
  Twn(() => {
    if (!Zn || !Ge) return;
    const rr = Zn.view.dom.ownerDocument.createElement("span");
    return rr.contentEditable = "false", rr.className = "ui-prompt-input-leading-content", cr(rr), vvp(Zn, rr), () => {
      vvp(Zn, null), cr(null);
    };
  }, [Zn, Ge]), fep(Zn, { mentionChipResolve: Te.mentionChipResolve, onMentionChipAction: I, hideRemoveButton: P, mentionChipPresentation: A }), z1a(Zn, { onCommandChipClick: M, isCommandChipClickable: O }), Bvi(() => {
    if (Zn) return ic1(Zn);
  }, [Zn]), Bvi(() => {
    Zn && Zn.view.dispatch(Zn.state.tr);
  }, [Zn, e, i, ae, A]);
  const fs = nbe(() => {
    if (!Zn || !T) return;
    const rr = Zn.getAttributes("link").href;
    typeof rr != "string" || rr.length === 0 || (T(rr), Zn.commands.setTextSelection(Zn.state.selection.to));
  }, [Zn, T]), mi = nbe(() => {
    Zn && Zn.chain().focus().extendMarkRange("link").unsetLink().run();
  }, [Zn]), di = nbe(({ editor: rr }) => {
    const Gs = rr.isActive("link"), Vr = rr.getAttributes("link").href;
    return Gs && typeof Vr == "string" && Vr.length > 0;
  }, []), Mr = wae(() => {
    if (q === void 0 && K === void 0) return;
    const rr = {};
    return q !== void 0 && (rr["--prompt-input-editor-min-height"] = typeof q == "number" ? `${q}px` : q), K !== void 0 && (rr["--prompt-input-editor-max-height"] = typeof K == "number" ? `${K}px` : K), rr;
  }, [q, K]), jr = Q !== "expanded", Ur = jr && ge, Ws = jr && !ge, jo = nbe((rr) => Ws && di(rr), [Ws, di]), Ia = nbe((rr) => !Ws && di(rr), [Ws, di]), ga = nbe(() => {
    if (!Zn) return null;
    const { from: rr, to: Gs } = Zn.state.selection;
    if (rr !== Gs) {
      const co = A8t(Zn.view, rr, Gs);
      return { getBoundingClientRect: () => co, contextElement: Zn.view.dom };
    }
    const Vr = Zn.schema.marks.link, So = Vr ? sli(Zn.state.selection.$from, Vr) : null;
    if (So) {
      const co = A8t(Zn.view, So.from, So.to);
      return { getBoundingClientRect: () => co, contextElement: Zn.view.dom };
    }
    const na = Zn.view.domAtPos(rr), Ol = (na.node.nodeType === Node.TEXT_NODE ? na.node.parentElement : na.node)?.closest?.(".ui-prompt-input-link") ?? null;
    if (!Ol) return null;
    const ia = Ol.getBoundingClientRect();
    return { getBoundingClientRect: () => ia, contextElement: Zn.view.dom };
  }, [Zn]), zs = wae(() => ({ placement: "top-start", strategy: "fixed", offset: 8, flip: { padding: 8 }, shift: { crossAxis: true, padding: 8 }, scrollTarget: ui, onShow: $e, onHide: Je }), [Je, $e, ui]), Vs = wae(() => ({ placement: "bottom-start", strategy: "fixed", offset: 8, flip: { padding: 8 }, shift: { crossAxis: true, padding: 8 }, scrollTarget: ui, onShow: $e, onHide: Je }), [Je, $e, ui]), Ra = fc1(), ur = gn(Ra.root), wr = gn(Ra.action), Es = ar({ rootClass: "ui-prompt-input-editor", stylexStyles: [gc1({ variant: Q, presentation: te, isExpanded: Ur, isDynamicIslandActive: re, isDynamicIslandCollapsing: false }), ee?.editor, n], className: G, style: Mr }), eo = { 0: { className: "ui-1n2onr6 ui-c8icb0 ui-9f619 ui-8jbk1e ui-agg58q ui-193iq5w ui-6ikm8r ui-1odjw0f" }, 1: { className: "ui-1n2onr6 ui-c8icb0 ui-9f619 ui-193iq5w ui-6ikm8r ui-1odjw0f ui-10fesj9 ui-1tfawu9" } }[(te === "embedded") << 0], ts = wwn("div", { className: ur.className, style: ur.style, children: [wwn("button", { type: "button", className: wr.className, style: wr.style, onMouseDown: (rr) => rr.preventDefault(), onClick: fs, children: [Krt(zt, { name: "link-external" }), Krt("span", { children: "Open" })] }), wwn("button", { type: "button", className: wr.className, style: wr.style, onMouseDown: (rr) => rr.preventDefault(), onClick: mi, children: [Krt(zt, { name: "link" }), Krt("span", { children: "Unlink" })] })] });
  return wwn("div", { className: Es.className, "data-variant": Q, "data-expanded": Ur || void 0, style: Es.style, children: [Krt(qAr, { editor: Zn, className: ri(mUr, eo.className) }), Ni && Ge ? c_p(wwn(l_p, { children: [o, " "] }), Ni) : null, Zn && hi ? Krt(Sc1, { active: De, root: hi, onHostElement: je }) : null, Zn && be ? wwn(l_p, { children: [Krt(Lvi, { pluginKey: "promptInputLinkMenuAbove", editor: Zn, shouldShow: jo, updateDelay: 0, getReferencedVirtualElement: ga, appendTo: be, options: zs, children: ts }), Krt(Lvi, { pluginKey: "promptInputLinkMenuBelow", editor: Zn, shouldShow: Ia, updateDelay: 0, getReferencedVirtualElement: ga, appendTo: be, options: Vs, children: ts })] }) : null] });
}
function d_p(t) {
  let e = 0, n = 0, i = false, r = false, s = false, o = false;
  const a = [];
  let l = 0;
  t.descendants((u) => {
    switch (u.marks.length > 0 && (s = true), u.type.name) {
      case "commandNode":
        i = true;
        break;
      case "mentionNode": {
        r = true;
        const d = CSa(u.attrs);
        d && a.push({ ...d, position: l });
        break;
      }
      case "paragraph":
        e++;
        break;
      case "hardBreak":
        n++;
        break;
      default:
        u.isText || (o = true);
        break;
    }
    l += uep(u);
  });
  const c = e > 1 && (t.firstChild?.type.name === "paragraph" && t.firstChild.content.size === 0 || t.lastChild?.type.name === "paragraph" && t.lastChild.content.size === 0);
  return { paragraphCount: e, hardBreakCount: n, hasCommands: i, hasMentions: r, mentions: a, requiresRichTextSerialization: i || r || n > 0 || s || o || c };
}
function kc1(t, e) {
  if (!e.requiresRichTextSerialization) return;
  let n;
  return () => n ?? (n = kfp(t));
}
var rxa, h_p, f6e, p_p, sxa, m_p, g_p, 