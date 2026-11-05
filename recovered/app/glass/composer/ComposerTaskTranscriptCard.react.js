// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerTaskTranscriptCard.react.js range:32153293..32156713
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, v4l, pi, pa, rp, Qe, Ei, ZB, nks, rs, wu, Zi, Cm, RB, C1, QXt, y2, yze, jO, oIi, wl, Hx, of, Ld, Wo, _s, zpe, Lh, Xle, FEn, vS, Pl, WB, Ux, _Fl, o0i, Rpe, DCt, zOf, X5f, S5f, I6, WJ, n5f, N5f, eks, r5f, TIw, mks
// wrapper-init: jIw -> composerTaskTranscriptCardModuleInit
// hoisted-owner: composerTranscriptToolCardRegistry.react.js (app-out-vs-workbench-workbench-glass-main-js:6049); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: jIw -> composerTaskTranscriptCardModuleInit (apply-map AST equivalent)

var composerTaskTranscriptCardModuleInit = L({
  "ComposerTaskTranscriptCard.react.js"() {
    "use strict";

    E(), Mt(), v4l(), pi(), pa(), rp(), Qe(), Ei(), ZB(), nks(), rs(), wu(), Zi(), Cm(), RB(), C1(), QXt(), y2(), yze(), jO(), oIi(), wl(), Hx(), of(), Ld(), Wo(), _s(), zpe(), Lh(), Xle(), FEn(), vS(), Pl(), WB(), Ux(), _Fl(), o0i(), Rpe(), DCt(), zOf(), X5f(), S5f(), I6(), WJ(), n5f(), N5f(), eks(), r5f(), TIw(), mks();
  }
});
import { createElement as WTe, Fragment as $Iw } from "./react-runtime/react/esm-index-production.js";
function HIw(t) {
  const {
    composerDataHandle: e,
    instantiationService: n,
    isGlass: i,
    getAgentReference: r,
    getSwitchModeAcceptKeybinding: s,
    latestTaskBySubagentStore: o,
    ensureLatestTaskBySubagentSeed: a
  } = t;
  return ({
    sourceIds: l,
    vm: c,
    loading: u,
    hasError: d
  }) => {
    const h = l[0];
    if (h) switch (c.case) {
      case "createPlanToolCall":
        return WTe(PEw, {
          bubbleId: h,
          composerDataHandle: e,
          detail: i ? "glass" : "ide",
          instantiationService: n,
          vm: c
        });
      case "computerUseToolCall":
        return WTe(xTw, {
          bubbleId: h,
          composerDataHandle: e,
          instantiationService: n,
          stepLoading: u
        });
      case "connectScmToolCall":
        return WTe(LTw, {
          bubbleId: h,
          composerDataHandle: e,
          instantiationService: n,
          vm: c
        });
      case "switchModeToolCall":
        return WTe(bIw, {
          acceptKeybinding: s(),
          bubbleId: h,
          composerDataHandle: e,
          instantiationService: n,
          vm: c
        });
      case "mcpAuthToolCall":
        return WTe(rIw, {
          bubbleId: h,
          composerDataHandle: e,
          instantiationService: n,
          vm: c
        });
      case "askQuestionToolCall":
        {
          const p = d ? void 0 : dks(c),
            g = p === void 0 ? void 0 : D6f({
              request: p,
              vm: c
            });
          return g === void 0 ? void 0 : WTe(AXh, g);
        }
      case "unrendered":
        return c.toolCase === "stopAgentToolCall" && Z5f(n) ? WTe(J5f, {
          toolCase: "stopAgentToolCall",
          bubbleId: h,
          composerDataHandle: e,
          instantiationService: n,
          isGlass: i,
          loading: u,
          hasError: d
        }) : void 0;
      case "taskToolCall":
        return c.agentTool !== void 0 ? WTe(J5f, {
          toolCase: c.agentTool,
          bubbleId: h,
          composerDataHandle: e,
          instantiationService: n,
          isGlass: i,
          loading: u,
          hasError: d
        }) : (a(), WTe(UIw, {
          bubbleId: h,
          composerDataHandle: e,
          instantiationService: n,
          isGlass: i,
          latestTaskBySubagentStore: o,
          sourceComposerId: i ? e.composerId : void 0,
          getAgentReference: r
        }));
      default:
        return;
    }
  };
}
function WIw(t) {
  const {
    composerDataHandle: e,
    instantiationService: n,
    isGlass: i
  } = t;
  return ({
    sourceIds: r
  }) => {
    const s = r[0];
    if (!s || !Z5f(n)) return;
    const o = n.invokeFunction(a => a.get(no).getComposerBubbleUntracked(e, s));
    return l6p(o) === void 0 ? void 0 : WTe(_Tw, {
      bubbleId: s,
      composerDataHandle: e,
      instantiationService: n,
      isGlass: i
    });
  };
}
function GIw(t) {
  const {
    analyticsService: e,
    composerDataHandle: n,
    instantiationService: i,
    mcpService: r
  } = t;
  return ({
    sourceIds: s,
    vm: o,
    callId: a,
    allowScriptedContent: l
  }) => {
    if (o.case !== "mcpToolCall") return;
    const c = s[0],
      u = o.providerIdentifier,
      d = o.toolName || o.rawName,
      h = l && c && u && d ? WTe(HEw, {
        bubbleId: c,
        composerId: n.composerId,
        instantiationService: i,
        providerIdentifier: u,
        toolName: d
      }) : void 0,
      p = a ? WTe(cIw, {
        analyticsService: e,
        mcpService: r,
        toolCallId: a
      }) : void 0;
    if (!(h === void 0 && p === void 0)) return WTe($Iw, null, h, p);
  };
}
