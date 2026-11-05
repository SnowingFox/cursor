// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerMcpAuthTranscriptCard.react.js range:32130559..32132416
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, Pu, Ks, qc, el, ZB, x6f, y2, zO, wl, _s, A6f, tU, Pl, jcg, nIw
// wrapper-init: sIw -> composerMcpAuthTranscriptCardModuleInit
// hoisted-owner: ComposerMcpElicitationForm.react.js (app-out-vs-workbench-workbench-glass-main-js:6042); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: sIw -> composerMcpAuthTranscriptCardModuleInit (apply-map AST equivalent)

var composerMcpAuthTranscriptCardModuleInit = L({
  "ComposerMcpAuthTranscriptCard.react.js"() {
    "use strict";

    E(), Mt(), Pu(), Ks(), qc(), el(), ZB(), x6f(), y2(), zO(), wl(), _s(), A6f(), tU(), Pl(), jcg(), nIw();
  }
});
import { useCallback as m4l, useEffect as oIw, useMemo as aIw } from "./react-runtime/react/esm-index-production.js";
import { jsx as M6f } from "./react-runtime/react/esm-jsx-runtime-production.js";
function lIw(t) {
  const e = t.mcpService.getElicitationRequestForToolCall(t.toolCallId);
  if (e) return {
    id: e.id,
    message: e.message,
    requestedSchema: e.requestedSchema,
    toolCallId: e.toolCallId,
    serverIdentifier: e.serverIdentifier
  };
}
function cIw({
  toolCallId: t,
  mcpService: e,
  analyticsService: n
}) {
  const i = aIw(() => ({
      mcpService: e,
      toolCallId: t
    }), [e, t]),
    r = o3(i, lIw);
  return r ? M6f(uIw, {
    analyticsService: n,
    mcpService: e,
    request: r
  }, r.id) : null;
}
function uIw({
  request: t,
  mcpService: e,
  analyticsService: n
}) {
  const i = m4l(o => {
    try {
      const a = t.requestedSchema;
      n.trackEvent("mcp.elicitation.submit", {
        dataTypes: oSa(a),
        fieldCount: Object.keys(a?.properties ?? {}).length,
        action: o
      });
    } catch {
      return;
    }
  }, [n, t.requestedSchema]);
  oIw(() => {
    try {
      const o = t.requestedSchema;
      n.trackEvent("mcp.elicitation.render", {
        dataTypes: oSa(o),
        fieldCount: Object.keys(o?.properties ?? {}).length,
        hasRequired: (o?.required ?? []).length > 0
      });
    } catch {
      return;
    }
  }, [n, t.id, t.requestedSchema]);
  const r = m4l(o => {
      e.resolveElicitationRequest(t.id, {
        action: "accept",
        content: o
      });
    }, [e, t.id]),
    s = m4l(() => {
      e.resolveElicitationRequest(t.id, {
        action: "cancel"
      });
    }, [e, t.id]);
  return M6f(wXh, {
    message: t.message,
    onAccept: r,
    onCancel: s,
    onSubmitAttempt: i,
    requestId: t.id,
    requestedSchema: t.requestedSchema
  });
}
