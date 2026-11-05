// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ThinkingLine.js range:15185318..15190157
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.069Z
jFr = L({ "ThinkingLine.js"() {
  "use strict";
  E(), Va(), AO(), HFe(), qu(), Lz(), c0e(), sGh = { base: { kSiTet: "ui-byyjgo", kdPGCM: "ui-13epnph", $$css: true } }, oGh = /^\*\*(.+?)\*\*$/, aGh = /^#{1,6}\s+(.+)$/;
} });
function lGh(t) {
  return t.case === "unrendered" ? t.toolCase : t.case;
}
function cGh(t, e) {
  const n = SFr(t);
  return n ? e.loading ? n.loading : e.hasError ? n.error : n.completed : "Tool";
}
function crt(t) {
  switch (t.case) {
    case "awaitToolCall": {
      const e = t.awaitOutcome.awaitCase;
      return e !== "complete" && e !== "stillRunning";
    }
    case "mcpToolCall": {
      const e = t.result;
      return e === void 0 ? false : e.resultCase === "success" ? e.isError === true : true;
    }
    case "askQuestionToolCall":
      return t.outcome.resultCase === "error";
    default: {
      const e = t.outcome.resultCase;
      return e !== void 0 && e !== "success";
    }
  }
}
function cmi(t) {
  if (!(t.case !== "editToolCall" && t.case !== "deleteToolCall") && dwh(t.path)) return t.case === "editToolCall" ? "update" : "delete";
}
function $Fr(t) {
  return znS(t, { wholeSeconds: true }) ?? "0s";
}
function uGh(t, e) {
  return t ? e && e.length > 0 ? `for ${e} in ${t}` : `for ${t}` : "";
}
function u2S(t) {
  if (t.awaitOutcome.awaitCase !== "stillRunning") return false;
  const e = t.blockUntilMs ?? 3e4, n = !!t.awaitOutcome.regexMatch;
  return e > 0 && !n;
}
function d2S({ vm: t, loading: e, nowMs: n, startMs: i }) {
  const r = u_a(t.taskId), s = t.blockUntilMs, o = t.regex?.trim() ?? "", a = !e && u2S(t), l = !e && crt(t);
  if (e) {
    const d = uGh(r, void 0);
    if (s !== void 0 && s > 0) {
      const h = Math.max(0, n - i), p = Math.max(0, s - h);
      return { action: "Waiting", details: d.length > 0 ? p > 0 ? `up to ${$Fr(p)} ${d}` : d : p > 0 ? $Fr(p) : "" };
    }
    return { action: "Waiting", details: d };
  }
  if (l) return { action: "Wait skipped", details: "" };
  if (a || t.awaitOutcome.awaitCase === "stillRunning" && s === 0) return { action: "Waited", details: s === 0 ? "briefly" : s !== void 0 && s > 0 ? $Fr(s) : "" };
  const c = t.awaitOutcome.awaitCase === "complete" || t.awaitOutcome.awaitCase === "stillRunning" ? !!t.awaitOutcome.regexMatch : false, u = uGh(r, c ? o : void 0);
  return { action: "Waited", details: u.length > 0 ? u : s !== void 0 && s > 0 ? $Fr(s) : "" };
}
function d0e({ vm: t, loading: e, hasError: n, nowMs: i = Date.now(), startedAtMs: r }) {
  const s = lGh(t), { details: o } = LFr(t), a = n ?? (!e && crt(t)), l = cGh(s, { loading: e, hasError: a }), c = a ? "attempted" : o, u = cmi(t);
  if (u !== void 0) return t_a({ kind: u, loading: e, hasError: a });
  switch (t.case) {
    case "awaitToolCall": {
      const d = d2S({ vm: t, loading: e, nowMs: i, startMs: r ?? i });
      return { action: d.action, details: d.details };
    }
    case "readToolCall": {
      const d = UWh(t.path);
      return { action: d && !a ? e ? d.loadingAction : d.completedAction : l, details: d && !a ? d.details : c };
    }
    case "editToolCall": {
      const d = imi({ toolCase: "editToolCall", isNewFile: t.isNewFile });
      return { action: e ? d.loading : a ? d.error : d.completed, details: c };
    }
    case "getMcpToolsToolCall":
      return { action: e ? "Exploring" : "Explored", details: "available tools" };
    case "updateTodosToolCall":
      return NFr(t, e);
    case "askQuestionToolCall": {
      const d = $Wh(DFr(t));
      return t.isSettled ? a || crt(t) ? { action: cGh(s, { loading: false, hasError: true }), details: "attempted", loading: false } : t.isSkipped ? { action: "Skipped", details: d, loading: false } : { action: "Asked", details: d, loading: false } : { action: "Asking questions", details: "", loading: true };
    }
    case "mcpToolCall": {
      const d = kjt(t), h = !!(t.providerIdentifier ?? t.toolName ?? t.rawName);
      if (h && wjt(d)) {
        const g = LFr(t);
        return { action: g.action, details: g.details };
      }
      if (h && s_a(t.providerIdentifier)) {
        const g = d.toolName || d.name, f = g.trim().startsWith("fsd-") ? g.trim() : `fsd-${g.trim()}`, _ = URS({ toolName: f, loading: e, hasError: a });
        if (_) return _;
      }
      const p = a ? void 0 : VRS(h ? d : void 0);
      return { action: l, details: c, mcp: p };
    }
    case "unrendered":
      return t.displayOverride ? { action: t.displayOverride.action, details: t.displayOverride.details } : { action: l, details: c };
    default:
      return { action: l, details: c };
  }
}
function h2S(t) {
  return t.details ? `${t.action} ${t.details}` : t.action;
}
function p2S(t) {
  return t.details ? false : t.action === "Locked browser" || t.action === "Unlocked browser";
}
function umi(t) {
  const e = d0e(t);
  if (!p2S(e)) return h2S(e);
}
