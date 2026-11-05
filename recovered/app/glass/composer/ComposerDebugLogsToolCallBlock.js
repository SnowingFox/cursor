// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerDebugLogsToolCallBlock.js range:29039736..29047632
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, Am, pi, Ga, gs, ta, vo, FS, F6, e_, $Rn, oye, Cze, Tms, bOk, TOk
// wrapper-init: AOk
// hoisted-owner: ComposerDebugReproductionToolbar.js (app-out-vs-workbench-workbench-glass-main-js:5031); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

AOk = L({ "ComposerDebugLogsToolCallBlock.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), Am(), pi(), Ga(), gs(), ta(), vo(), FS(), F6(), e_(), $Rn(), oye(), Cze(), Tms(), bOk(), TOk(), CXg = wt("<span class=debug-logs-count>+"), TXg = wt("<div class=debug-logs-header-content><span class=debug-logs-title>Debug Logs"), EXg = wt("<div class=debug-logs-header-actions>"), IXg = wt("<div class=debug-logs-body>"), xXg = wt("<div class=debug-logs-content>"), AXg = wt("<div class=debug-logs-empty>Waiting for log entries..."), RXg = wt("<div class=debug-log-line><span class=debug-log-time></span><span class=debug-log-message>"), Fwl = 100, PXg = 500, MXg = 80, DXg = 250, Bwl = cs(false), Ems = cs(void 0), Uwl = cs(0), Ims = cs(0), xms = cs(0), Ams = cs(void 0), VKt = cs(0), NXg = cs(null, (t, e) => {
    e(xms, 0), e(Ims, 0), e(VKt, t(VKt) + 1);
  });
} });
function ROk(t) {
  return t.key === "Enter" && !t.shiftKey && (_r && t.metaKey && !t.ctrlKey || !_r && t.ctrlKey && !t.metaKey);
}
function LXg(t) {
  const { composerDataHandle: e, message: n, services: i, sourceBubbleId: r } = t, s = e.data, o = r ? dXg(s, r, n) : void 0;
  i.analyticsService.trackEvent("debug_mode.proceed"), i.composerViewsService.triggerScrollToBottom(e), i.composerChatService.submitChatMaybeAbortCurrent(s.composerId, n, o ? { bubbleId: o } : void 0);
}
function OXg(t) {
  const { composerDataHandle: e, e: n, plainText: i, services: r } = t;
  if (n.repeat) return false;
  const s = e.data, o = E2i(s), a = !!o, l = (s.generatingBubbleIds?.length ?? 0) > 0, c = ROk(n), u = i.trim() === "";
  if (!(a && !l && c && u)) return false;
  const h = r.experimentService.getDynamicConfigParam("debug_mode_ui_instructions_config", "proceed_instructions", { disableExposureLog: false }) ?? "Issue reproduced, please proceed";
  return LXg({ composerDataHandle: e, message: h, services: r, sourceBubbleId: o?.bubbleId }), true;
}
function POk(t) {
  const e = Gr(), n = e.workbenchEnvironmentService.isGlass === true, i = Vus(), r = vt(() => {
    const S = t.lastAiMessage;
    return S ? e.composerDataService.getComposerBubble(t.composerDataHandle, S.bubbleId) : null;
  }), s = vt(() => {
    const S = r();
    return S ? kms(S.text || "") : { found: false, isOpen: false, content: "" };
  }), o = vt(() => !!e.composerDataService.getLastAiBubble(t.composerDataHandle)?.errorDetails), a = vt(() => !(!s().found || o())), l = $se(() => [...e.composerDataService.getComposerDataIfLoaded(t.composerDataHandle.data.composerId)?.generatingBubbleIds ?? []], (S, k) => k.includes(S)), c = vt(() => {
    const S = t.lastAiMessage;
    return S ? l(S.bubbleId) : false;
  }), u = Cbe("⏎"), d = vt(() => (t.composerDataHandle.data.text?.trim() ?? "").length > 0), h = () => {
    jwl()?.composerId === t.composerDataHandle.data.composerId && $wl(null);
  };
  Cn(() => {
    d() && h();
  });
  const p = vt(() => ({ proceed: e.experimentService.getDynamicConfigParam("debug_mode_ui_instructions_config", "proceed_instructions", { disableExposureLog: false }) ?? "Issue reproduced, please proceed", markFixed: e.experimentService.getDynamicConfigParam("debug_mode_ui_instructions_config", "mark_fixed_instructions", { disableExposureLog: false }) ?? "The issue has been fixed. Please clean up the instrumentation." }));
  Cn(() => {
    if (n || !(a() && !s().isOpen && !c())) return;
    const k = (C) => {
      if (!i.hasFocusWithin()) return;
      OXg({ e: C, composerDataHandle: t.composerDataHandle, plainText: t.composerDataHandle.data.text || "", services: e }) && (C.preventDefault(), C.stopPropagation());
    };
    e.window.addEventListener("keydown", k), On(() => {
      e.window.removeEventListener("keydown", k);
    });
  });
  const g = () => {
    const k = t.composerDataHandle.data?.text?.trim(), C = p().proceed, T = k || C;
    LXg({ composerDataHandle: t.composerDataHandle, message: T, services: e, sourceBubbleId: t.lastAiMessage?.bubbleId });
  }, f = async () => {
    e.analyticsService.trackEvent("debug_mode.mark_fixed");
    const S = t.composerDataHandle.data, k = S?.text?.trim(), C = p().markFixed, T = k ? C + " " + k : C;
    e.composerViewsService.triggerScrollToBottom(t.composerDataHandle), await e.composerChatService.submitChatMaybeAbortCurrent(S.composerId, T, { onDidSendRequest: () => {
      e.composerModesService.setComposerUnifiedMode(t.composerDataHandle, "agent");
    } });
  }, _ = (S) => {
    S === null ? h() : $wl({ composerId: t.composerDataHandle.data.composerId, button: S });
  };
  Cn(() => {
    (s().isOpen || c()) && h();
  }), On(() => {
    h();
  });
  const [b, y] = Wt();
  return Cn(() => {
    const S = b();
    if (!S) return;
    const k = new ResizeObserver(() => {
      e.composerViewsService.triggerScrollToBottom(t.composerDataHandle);
    });
    k.observe(S), On(() => k.disconnect());
  }), Ee(Ut, { get when() {
    return a();
  }, get children() {
    var S = UXg(), k = S.firstChild, C = k.firstChild, T = C.firstChild, I = C.nextSibling;
    return zu(y, S), Le(I, Ee(lXg, { maxHeight: 240, enableMasking: true, bottomFadeSize: 15, topFadeSize: 0, maskColor: "var(--composer-pane-background, var(--vscode-sideBar-background))", scrollingDirection: "vertical", nonReactiveElementOptions: { alwaysConsumeMouseWheel: true }, children: (A) => (() => {
      var P = jXg(), M = A;
      return typeof M == "function" ? zu(M, P) : A = P, Le(P, Ee(HXg, { get rawText() {
        return s().content;
      }, get finished() {
        return !s().isOpen;
      } })), P;
    })() })), Le(S, Ee(Ut, { get when() {
      return zr(() => !s().isOpen)() && !c();
    }, get children() {
      var A = BXg(), P = A.firstChild, M = P.nextSibling;
      return P.addEventListener("mouseleave", () => {
        _(null);
      }), P.addEventListener("mouseenter", () => {
        _("markFixed");
      }), Le(P, Ee(ol, { variant: "outline", style: { "min-height": "20px", "justify-content": "center", "border-radius": "0.25rem" }, onClick: f, children: "Mark as fixed" })), M.addEventListener("mouseleave", () => {
        _(null);
      }), M.addEventListener("mouseenter", () => {
        _("proceed");
      }), Le(M, Ee(ol, { variant: "secondary", style: { "min-height": "20px", "justify-content": "center", "border-radius": "0.25rem" }, onClick: g, get children() {
        return ["Proceed", (() => {
          var O = FXg();
          return Le(O, " " + u), O;
        })()];
      } })), xn((O) => {
        var N = d() ? 0 : 1, U = d() ? "none" : "auto";
        return N !== O.e && ((O.e = N) != null ? A.style.setProperty("opacity", N) : A.style.removeProperty("opacity")), U !== O.t && ((O.t = U) != null ? A.style.setProperty("pointer-events", U) : A.style.removeProperty("pointer-events")), O;
      }, { e: void 0, t: void 0 }), A;
    } }), null), xn(() => Er(T, `${Gn.asClassName(yt.inspect)} composer-debug-reproduction-toolbar-icon`)), S;
  } });
}
function MOk(t) {
  const e = Gr(), n = vt(() => {
    const s = t.composerDataHandle.data;
    if (s.unifiedMode !== "debug") return false;
    const o = s.fullConversationHeadersOnly;
    return o[o.length - 1]?.type === bs.HUMAN || e.composerDataService.getLastAiBubble(t.composerDataHandle)?.errorDetails ? false : (e.composerDataService.getLastAiBubble(t.composerDataHandle, { skipSummarization: true })?.text, s.status, ks(() => E2i(s) !== null));
  }), [i, r] = Wt();
  return Cn(() => {
    const s = i();
    if (!s) return;
    const o = new ResizeObserver(() => {
      e.composerViewsService.triggerScrollToBottom(t.composerDataHandle);
    });
    o.observe(s), On(() => o.disconnect());
  }), Ee(Ut, { get when() {
    return n();
  }, get children() {
    var s = $Xg();
    return zu(r, s), Le(s, Ee(xOk, { get composerId() {
      return t.composerDataHandle.data.composerId;
    } })), s;
  } });
}
var FXg, BXg, UXg, jXg, $Xg, HXg, jwl, $wl, 