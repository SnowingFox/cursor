// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerPluginActionCard.js range:29999440..30016013
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, Mt, aS, wTe
// wrapper-init: pcf
// hoisted-owner: ComposerQuestionnaireToolbar.js (app-out-vs-workbench-workbench-glass-main-js:5331); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var pcf = L({ "ComposerPluginActionCard.js"() {
  "use strict";
  E(), at(), Mt(), aS(), wTe();
} }), u$k = L({ "ComposerQuestionnaireToolbar.css"() {
} });
function d$k(t) {
  const e = Gr(), n = Czt({ handle: t.composerDataHandle, composerChatService: e.composerChatService }), i = vt(() => t.pendingDecision.clientSideTool === Ct.ASK_QUESTION), r = vt(() => {
    if (!i()) return null;
    const ge = e.composerDataService.getComposerCapability(t.composerDataHandle, mo.TOOL_FORMER), pe = ge ? $Ti(ge, t.pendingDecision.toolCallId) : void 0;
    return pe ? { bubbleId: pe.bubbleId, data: pe.bubbleData } : null;
  }), s = vt(() => r()?.data.params), o = vt(() => s()?.questions ?? []), a = vt(() => {
    if (!i()) return false;
    const ge = r();
    return ge ? ge.data.status === "loading" : true;
  }), l = vt(() => t.pendingDecision.toolCallId), c = vt(() => r()?.bubbleId), [u, d] = Wt({}), [h, p] = Wt({});
  let g = false;
  const f = /* @__PURE__ */ new Set(), _ = {}, [b, y] = Wt(0), [S, k] = Wt(-1), [C, T] = Wt(false), [I, A] = Wt(false);
  let P;
  Cn(() => {
    const ge = l();
    P !== void 0 && P !== ge && (T(false), ks(() => V())?.setScrollPositionNow({ scrollTop: 0 })), P = ge;
  });
  const [M, O] = Wt(false), N = e.instantiationService.invokeFunction((ge) => ge.get(Cl)), U = A0(e.uiOverlayService.dialogData), j = vt(() => !!U()), $ = vt(() => {
    const ge = o();
    return ge.length > 0 && b() === ge.length - 1;
  });
  let H;
  const G = [];
  let q, K;
  const [V, Y] = Wt(void 0), J = (ge) => {
    const pe = V();
    if (!pe || !H) return;
    const ve = G[ge];
    if (!ve) return;
    const fe = ve.offsetTop, Te = pe.getScrollDimensions(), _e = Math.max(0, Te.scrollHeight - Te.height), Ce = Math.max(0, Math.min(fe, _e));
    pe.setScrollPositionSmooth({ scrollTop: Ce });
  };
  let Q;
  Cn(() => {
    const ge = b(), pe = o();
    if (C() || ge < 0 || ge >= pe.length || !H || Q === ge) {
      ge >= 0 && ge < pe.length && (Q = ge);
      return;
    }
    if (Q !== void 0) {
      const ve = setTimeout(() => J(ge), 0);
      On(() => {
        clearTimeout(ve);
      });
    }
    Q = ge;
  }), Cn(() => {
    o().length === 0 && (f.clear(), G.length = 0, Q = void 0);
  }), Cn(() => {
    const ge = r(), pe = o();
    if (!ge || pe.length === 0) {
      d({}), p({}), g = false;
      return;
    }
    const ve = ge.data.additionalData, fe = ve?.currentSelections, Te = ve?.freeformTexts, _e = {}, Ce = {};
    pe.forEach((Se) => {
      _e[Se.id] = fe?.[Se.id] ?? [], Ce[Se.id] = Te?.[Se.id] ?? "";
    }), d(_e), p(Ce), g || (g = true, y(bng(pe, _e)), k(-1));
  }), Xc(() => {
    const ge = N.onShow(() => {
      O(true);
    }), pe = N.onHide(() => {
      O(false);
    });
    On(() => {
      ge.dispose(), pe.dispose();
    });
  });
  const te = () => {
    if (!r() || M() || j() || !q) return false;
    const ge = e.window.document.activeElement;
    if (!ge) return false;
    if (ge instanceof HTMLElement) {
      if (ge.tagName === "INPUT" || ge.tagName === "TEXTAREA" || ge.isContentEditable) return false;
      const pe = e.window.document.querySelector(".ai-input-full-input-box.full-input-box");
      if (pe && (ge === pe || pe.contains(ge))) return false;
    }
    return !!(ge instanceof HTMLElement && (K === void 0 && (K = e.window.document.querySelector(".composer-messages-container")), K && (ge === K || K.contains(ge))) || q.contains(ge));
  }, ee = (ge, pe) => {
    const ve = e.composerDataService.getComposerCapability(t.composerDataHandle, mo.TOOL_FORMER), fe = c(), Te = l();
    ve && fe && Te && kng({ capability: ve, bubbleId: fe, toolCallId: Te, draft: { selections: ge, freeformTexts: pe, freeformRichTexts: {} } });
  }, re = (ge, pe) => {
    if (I()) return;
    const ve = o(), Te = ve.find((_e) => _e.id === ge)?.allowMultiple ?? false;
    d((_e) => {
      const Ce = _e[ge] ?? [], Se = vng(Ce, pe, Te), Pe = { ..._e, [ge]: Se };
      if (ee(Pe, h()), !Te && Se.length > 0 && pe !== CX && !qil(ve, Pe)) {
        const we = Vil(ve, ge, Pe);
        we >= 0 && (y(we), k(-1));
      }
      return Pe;
    });
  }, ie = (ge, pe) => {
    I() || p((ve) => {
      const fe = { ...ve, [ge]: pe };
      return ee(u(), fe), fe;
    });
  }, oe = (ge) => {
    ge && (ge.style.height = "auto", ge.style.height = `${ge.scrollHeight}px`);
  }, se = vt(() => qil(o(), u())), le = vt(() => chk(o(), u())), ce = () => {
    T(!C()), q?.focus();
  }, ae = async () => {
    if (I() || !se() || !l() || !c()) return;
    const ge = e.composerDataService.getComposerCapability(t.composerDataHandle, mo.TOOL_FORMER);
    if (!ge) return;
    const pe = ge.getBubbleData(c());
    if (!pe || pe.tool !== Ct.ASK_QUESTION) return;
    const ve = pe.params;
    if (ve) {
      A(true);
      try {
        const fe = await WTi({ capability: ge, toolCallId: l(), bubbleId: c(), decision: { kind: "answer", params: ve, draft: { selections: u(), freeformTexts: h(), freeformRichTexts: {} } }, commit: n.commit(() => e.composerDataService.manuallyPersistComposerOrThrow(t.composerDataHandle.composerId)) });
        fe.kind !== "settled" && fe.kind !== "busy" && e.notificationService.error("Could not submit the questionnaire. Please try again.");
      } catch {
        e.notificationService.error("Could not submit the questionnaire. Please try again.");
      } finally {
        A(false);
      }
    }
  }, de = async () => {
    if (I() || !l() || !c()) return;
    const ge = l(), pe = c(), ve = e.composerDataService.getComposerCapability(t.composerDataHandle, mo.TOOL_FORMER);
    if (!ve) return;
    const fe = s();
    if (fe) {
      A(true);
      try {
        const Te = await WTi({ capability: ve, toolCallId: ge, bubbleId: pe, decision: { kind: "skip", params: fe, reason: "user" }, commit: n.commit(() => e.composerDataService.manuallyPersistComposerOrThrow(t.composerDataHandle.composerId)) });
        Te.kind !== "settled" && Te.kind !== "busy" && e.notificationService.error("Could not skip the questionnaire. Please try again.");
      } catch {
        e.notificationService.error("Could not skip the questionnaire. Please try again.");
      } finally {
        A(false);
      }
    }
  }, he = (ge) => {
    const pe = o();
    if (pe.length === 0) return;
    const fe = (b() + ge + pe.length) % pe.length;
    y(fe), k(-1);
  };
  return Xc(() => {
    const ge = (pe) => {
      if (pe.target instanceof HTMLInputElement || pe.target instanceof HTMLTextAreaElement || pe.metaKey || pe.ctrlKey || pe.altKey || !te()) return;
      if (C()) {
        const Me = e.window.document.activeElement;
        !!q && q.contains(Me) && (pe.key === "Enter" || pe.key === " ") && (pe.preventDefault(), pe.stopPropagation(), pe.stopImmediatePropagation(), ce());
        return;
      }
      const ve = o();
      if (ve.length === 0) return;
      const fe = b(), Te = S(), _e = ve[fe];
      if (!_e) return;
      const Ce = $is(_e.options), Se = Ce.length + 1, Pe = Te >= 0, we = (Me) => {
        if (!Pe) k(0);
        else {
          const De = (Te + Me + Se) % Se;
          k(De);
        }
      }, Ie = () => {
        const Me = Pe ? Te : 0;
        Pe || k(0), Me >= 0 && Me < Se && (Me < Ce.length ? re(_e.id, Ce[Me].id) : re(_e.id, CX));
      };
      switch (pe.key) {
        case "Tab": {
          pe.preventDefault(), pe.stopPropagation(), pe.stopImmediatePropagation();
          const Me = pe.shiftKey ? -1 : 1, De = (fe + Me + ve.length) % ve.length;
          y(De), k(-1);
          return;
        }
        case "ArrowDown":
        case "ArrowRight":
          pe.preventDefault(), we(1);
          break;
        case "ArrowUp":
        case "ArrowLeft":
          pe.preventDefault(), we(-1);
          break;
        case " ":
          pe.preventDefault(), Ie(), (Pe ? Te : 0) >= Ce.length && setTimeout(() => _[_e.id]?.focus(), 0);
          break;
        case "Enter":
          pe.preventDefault(), !pe.ctrlKey && !pe.metaKey && se() && ae();
          break;
        case "Escape":
          pe.preventDefault(), de();
          break;
        default:
          if (pe.key.length === 1) {
            const Me = pe.key.toUpperCase().charCodeAt(0) - 65;
            Me >= 0 && Me < Se && (pe.preventDefault(), Me < Ce.length ? re(_e.id, Ce[Me].id) : (re(_e.id, CX), setTimeout(() => _[_e.id]?.focus(), 0)), k(-1));
          }
          break;
      }
    };
    window.addEventListener("keydown", ge, { capture: true }), On(() => {
      window.removeEventListener("keydown", ge, { capture: true });
    });
  }), Ee(Ut, { get when() {
    return zr(() => !!i())() && o().length > 0;
  }, get children() {
    var ge = _cf(), pe = ge.firstChild, ve = pe.firstChild, fe = ve.nextSibling, Te = pe.nextSibling, _e = Te.firstChild, Ce = _e.firstChild;
    return zu((Se) => {
      q = Se, requestAnimationFrame(() => {
        Se?.focus();
      });
    }, ge), pe.addEventListener("click", () => {
      C() && ce();
    }), Le(pe, Ee(Ut, { get when() {
      return zr(() => !!C())() && o().length > 0;
    }, get children() {
      var Se = mcf(), Pe = Se.firstChild, we = Pe.nextSibling, Ie = we.nextSibling;
      return Le(Se, le, Pe), Le(Se, () => o().length, we), Se;
    } }), null), Le(pe, Ee(Ut, { get when() {
      return zr(() => !C())() && o().length > 0;
    }, get children() {
      var Se = gcf(), Pe = Se.firstChild, we = Pe.firstChild;
      return Le(Se, Ee(eb, { get codicon() {
        return yt.chevronUp;
      }, size: 16, iconClass: "composer-questionnaire-toolbar-stepper-icon", onClick: (Ie) => {
        Ie.stopPropagation(), he(-1);
      }, hintText: "Previous question" }), Pe), Le(Pe, () => b() + 1, we), Le(Pe, () => o().length, null), Le(Se, Ee(eb, { get codicon() {
        return yt.chevronDown;
      }, size: 16, iconClass: "composer-questionnaire-toolbar-stepper-icon", onClick: (Ie) => {
        Ie.stopPropagation(), he(1);
      }, hintText: "Next question" }), null), Se;
    } }), null), Le(pe, Ee(eb, { get codicon() {
      return C() ? yt.chevronUp : yt.chevronDown;
    }, size: 16, class: "composer-questionnaire-toolbar-collapse-button", iconClass: "!text-[11px]", onClick: (Se) => {
      Se.stopPropagation(), ce();
    }, get hintText() {
      return C() ? "Expand questions" : "Minimize questions";
    } }), null), Le(Ce, Ee(ilt, { useResizeObserver: true, maxHeight: 200, contentStyle: { display: "flex", "flex-direction": "column", gap: "12px" }, innerContainerStyle: { "min-height": "unset" }, scrollingDirection: "vertical", nonReactiveElementOptions: { alwaysConsumeMouseWheel: true }, setScrollableRef: Y, children: (Se) => (() => {
      var Pe = bcf();
      return zu((we) => {
        Se(we), H = we;
      }, Pe), Le(Pe, Ee(Su, { get each() {
        return o();
      }, children: (we, Ie) => {
        const Me = () => b() === Ie(), De = () => u()[we.id] ?? [], Ne = () => De().length > 0, be = (() => {
          const je = !f.has(we.id);
          return je && f.add(we.id), je;
        })();
        return (() => {
          var je = ycf(), $e = je.firstChild, Je = $e.firstChild, Ge = Je.firstChild, xe = $e.nextSibling;
          return zu((Oe) => {
            G[Ie()] = Oe;
          }, je), je.classList.toggle("composer-questionnaire-toolbar-question-animate-in", !!be), Le(Je, () => Ie() + 1, Ge), Le($e, Ee(wcf, { normalized: true, size: "sm", get children() {
            return we.prompt;
          } }), null), Le(xe, Ee(Su, { get each() {
            return $is(we.options);
          }, children: (Oe, ct) => {
            const Ye = (gt) => (u()[we.id] ?? []).includes(gt), Ve = () => Ye(Oe.id), Xe = () => String.fromCharCode(65 + ct()), lt = () => b() === Ie() && S() === ct(), He = () => !Ve() && Ne();
            return (() => {
              var gt = Scf(), ht = gt.firstChild, Ae = ht.nextSibling;
              return gt.addEventListener("click", () => re(we.id, Oe.id)), ht.addEventListener("click", (ot) => {
                ot.stopPropagation(), re(we.id, Oe.id);
              }), ht.addEventListener("keydown", (ot) => {
                _ng(ot.key) && ot.preventDefault();
              }), Le(ht, Xe), Le(Ae, () => Oe.label), xn((ot) => {
                var Be = !!lt(), Ue = !!He(), it = !!Ve(), qe = !!Ve();
                return Be !== ot.e && gt.classList.toggle("composer-questionnaire-toolbar-option-focused", ot.e = Be), Ue !== ot.t && gt.classList.toggle("composer-questionnaire-toolbar-option-unselected-with-selections", ot.t = Ue), it !== ot.a && ht.classList.toggle("composer-questionnaire-toolbar-option-letter-selected", ot.a = it), qe !== ot.o && Ae.classList.toggle("composer-questionnaire-toolbar-option-label-selected", ot.o = qe), ot;
              }, { e: void 0, t: void 0, a: void 0, o: void 0 }), gt;
            })();
          } }), null), Le(xe, () => {
            const ct = $is(we.options).length, Ye = vt(() => (u()[we.id] ?? []).includes(CX)), Ve = vt(() => String.fromCharCode(65 + ct)), Xe = vt(() => b() === Ie() && S() === ct), lt = vt(() => !Ye() && Ne()), He = vt(() => h()[we.id] ?? "");
            let gt;
            return Cn(() => {
              He(), oe(gt);
            }), (() => {
              var ht = kcf(), Ae = ht.firstChild, ot = Ae.nextSibling;
              return ht.addEventListener("click", () => {
                Ye() || re(we.id, CX), setTimeout(() => gt?.focus(), 0);
              }), Ae.addEventListener("click", (Be) => {
                Be.stopPropagation();
                const Ue = Ye();
                re(we.id, CX), Ue || setTimeout(() => gt?.focus(), 0);
              }), Ae.addEventListener("keydown", (Be) => {
                _ng(Be.key) && Be.preventDefault();
              }), Le(Ae, Ve), ot.addEventListener("keydown", (Be) => {
                if (Be.stopPropagation(), Be.key === "Enter" && !Be.shiftKey) if (Be.preventDefault(), gt?.blur(), q?.focus(), se()) ae();
                else {
                  const Ue = Vil(o(), we.id, u());
                  Ue >= 0 && (y(Ue), k(-1));
                }
              }), ot.addEventListener("input", (Be) => {
                ie(we.id, Be.currentTarget.value), oe(Be.currentTarget);
              }), ot.addEventListener("focus", () => {
                Ye() || re(we.id, CX);
              }), zu((Be) => {
                gt = Be, _[we.id] = Be, requestAnimationFrame(() => oe(Be));
              }, ot), xn((Be) => {
                var Ue = !!Xe(), it = !!lt(), qe = !!Ye();
                return Ue !== Be.e && ht.classList.toggle("composer-questionnaire-toolbar-option-focused", Be.e = Ue), it !== Be.t && ht.classList.toggle("composer-questionnaire-toolbar-option-unselected-with-selections", Be.t = it), qe !== Be.a && Ae.classList.toggle("composer-questionnaire-toolbar-option-letter-selected", Be.a = qe), Be;
              }, { e: void 0, t: void 0, a: void 0 }), xn(() => ot.value = He()), ht;
            })();
          }, null), xn(() => je.classList.toggle("composer-questionnaire-toolbar-question-active", !!Me())), je;
        })();
      } })), Pe;
    })() })), Le(ge, Ee(Ut, { get when() {
      return !C();
    }, get children() {
      var Se = vcf();
      return Le(Se, Ee(ol, { variant: "text", get disabled() {
        return I();
      }, onClick: de, class: "composer-skip-button", keybinding: "Esc", style: { "padding-right": 0 }, children: "Skip" }), null), Le(Se, Ee(ol, { variant: "primary", get disabled() {
        return !se() || I();
      }, onClick: ae, class: "composer-run-button", keybinding: "⏎", get children() {
        return fcf();
      } }), null), Se;
    } }), null), xn((Se) => {
      var Pe = !!C(), we = !!C(), Ie = `${Gn.asClassName(yt.chatQuestion)} composer-questionnaire-toolbar-icon`, Me = !!a(), De = !!C(), Ne = C(), be = C() ? true : void 0, je = !!$();
      return Pe !== Se.e && ge.classList.toggle("composer-questionnaire-toolbar-collapsed", Se.e = Pe), we !== Se.t && pe.classList.toggle("composer-questionnaire-toolbar-header-collapsed", Se.t = we), Ie !== Se.a && Er(ve, Se.a = Ie), Me !== Se.o && fe.classList.toggle("make-shine", Se.o = Me), De !== Se.i && Te.classList.toggle("composer-questionnaire-toolbar-collapsible-collapsed", Se.i = De), Ne !== Se.n && (Te.inert = Se.n = Ne), be !== Se.s && lo(Te, "aria-hidden", Se.s = be), je !== Se.h && Ce.classList.toggle("composer-questionnaire-toolbar-scroll-container-at-bottom", Se.h = je), Se;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0 }), ge;
  } });
}
var mcf, gcf, fcf, vcf, _cf, bcf, ycf, Scf, kcf, wcf, 