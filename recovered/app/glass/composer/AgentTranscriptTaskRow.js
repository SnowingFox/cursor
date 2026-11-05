// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptTaskRow.js range:15592541..15608361
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, AO, bVh, qVh, VVh, D5r
// wrapper-init: HYh
// hoisted-owner: AgentTranscriptToolCallView.js (app-out-vs-workbench-workbench-glass-main-js:2448); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

HYh = L({ "AgentTranscriptTaskRow.js"() {
  "use strict";
  E(), Va(), AO(), bVh(), qVh(), VVh(), D5r(), C1n = { dot: { k1xSpc: "ui-1rg5ohu", kzqmXN: "ui-19j8p08", kZKoxP: "ui-1feg4er", kaIpWk: "ui-16rqkct", kmuXW: "ui-2lah0s", $$css: true }, needsAttention: { kWkggS: "ui-1lrqy4w", $$css: true }, error: { kWkggS: "ui-1szgyur", $$css: true }, doneUnread: { kWkggS: "ui-1nawb4t", $$css: true }, done: { kWkggS: "ui-h2p6ru", $$css: true } };
} });
import { jsx as gL, jsxs as JOS, Fragment as e5S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Yjt } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Gya(t) {
  const e = Yjt(75), { entry: n, onNestedToolExpand: i, defaultExpanded: r } = t, { onFileClick: s, onFileReferenceContextMenu: o, onUrlClick: a, resolveMcpToolDisplay: l, renderToolCallCard: c, renderToolCallExtras: u } = uR();
  let d;
  e[0] !== o ? (d = o ? (f, _) => o(f.nativeEvent, _) : void 0, e[0] = o, e[1] = d) : d = e[1];
  const h = d, p = n.step.type !== "tool-call";
  let g;
  if (e[2] !== r || e[3] !== n || e[4] !== s || e[5] !== h || e[6] !== i || e[7] !== a || e[8] !== c || e[9] !== u || e[10] !== l || e[11] !== p) {
    g = /* @__PURE__ */ Symbol.for("react.early_return_sentinel");
    e: {
      if (p) {
        g = null;
        break e;
      }
      const { step: f } = n, _ = f.toolCallVm, b = f.status === "generating";
      if (e[13] !== r || e[14] !== n || e[15] !== b || e[16] !== s || e[17] !== h || e[18] !== i || e[19] !== a || e[20] !== c || e[21] !== u || e[22] !== l || e[23] !== f.approval || e[24] !== f.approvalReason || e[25] !== f.callId || e[26] !== f.error || e[27] !== f.mcpToolDisplay || e[28] !== f.startedAtMs || e[29] !== _) {
        const y = !b && (f.error === true || crt(_)), S = c ? c({ sourceIds: n.sourceIds, vm: _, callId: f.callId, loading: b, hasError: y }) : void 0;
        switch (_.case) {
          case "awaitToolCall": {
            g = gL(l5S, { loading: b, startedAtMs: f.startedAtMs, vm: _ });
            break e;
          }
          case "readTodosToolCall":
          case "setupVmEnvironmentToolCall":
          case "replaceEnvToolCall": {
            let k;
            t: switch (_.case) {
              case "readTodosToolCall": {
                k = gL(_OS, { hasError: y, loading: b, vm: _ });
                break t;
              }
              case "setupVmEnvironmentToolCall": {
                k = gL(iOS, { hasError: y, loading: b, vm: _ });
                break t;
              }
              case "replaceEnvToolCall":
                k = gL(sOS, { hasError: y, loading: b, vm: _ });
            }
            const C = f.approval;
            if (C?.status === "pending") {
              g = gL(oya, { approval: C, approvalReason: f.approvalReason, callId: f.callId, hideReasonWhenAllowlistMode: true, children: k });
              break e;
            }
            if (S !== void 0) {
              g = S;
              break e;
            }
            g = k;
            break e;
          }
          case "readToolCall": {
            if (f.approval?.status === "pending") {
              g = gL(K6r, { defaultExpanded: r, entry: n, hasError: y, loading: b, onFileClick: s, onNestedToolExpand: i, onUrlClick: a });
              break e;
            }
            g = gL(c5S, { hasError: y, loading: b, onFileClick: s, onFileContextMenu: h, startedAtMs: f.startedAtMs, vm: _ });
            break e;
          }
          case "readMcpResourceToolCall": {
            g = gL(wKh, { hasError: y, loading: b, onFileClick: s, startedAtMs: f.startedAtMs, vm: _ });
            break e;
          }
          case "createPlanToolCall": {
            const k = _;
            if (b || y) {
              g = gL(t5S, { hasError: y, loading: b, vm: k });
              break e;
            }
            if (S !== void 0) {
              g = S;
              break e;
            }
            let C;
            e[30] !== k.overview ? (C = k.overview?.trim(), e[30] = k.overview, e[31] = C) : C = e[31];
            let T;
            e[32] !== k.name ? (T = k.name?.trim() || "Plan", e[32] = k.name, e[33] = T) : T = e[33], g = gL($ya, { overview: C, title: T });
            break e;
          }
          case "askQuestionToolCall": {
            if (S !== void 0) {
              g = S;
              break e;
            }
            g = gL(n5S, { hasError: y, loading: b, vm: _ });
            break e;
          }
          case "computerUseToolCall": {
            if (S !== void 0) {
              g = S;
              break e;
            }
            g = gL(K6r, { defaultExpanded: r, entry: n, hasError: y, loading: b, onFileClick: s, onNestedToolExpand: i, onUrlClick: a });
            break e;
          }
          case "connectScmToolCall": {
            if (S !== void 0) {
              g = S;
              break e;
            }
            g = gL(a5S, { vm: _ });
            break e;
          }
          case "switchModeToolCall": {
            if (S !== void 0) {
              g = S;
              break e;
            }
            const k = _.resultOutcome === "success" ? "switched" : _.resultOutcome === void 0 ? "pending" : "skipped";
            g = gL(Hya, { explanation: _.explanation, skipReason: _.skipReason, state: k, toModeId: _.targetModeId });
            break e;
          }
          case "mcpAuthToolCall": {
            if (S !== void 0) {
              g = S;
              break e;
            }
            const k = d0e({ vm: _, loading: b, hasError: y });
            g = gL(LC, { action: k.action, details: k.details, loading: b });
            break e;
          }
          case "generateImageToolCall": {
            g = gL(zKh, { defaultExpanded: r, hasError: y, loading: b, vm: _ });
            break e;
          }
          case "taskToolCall": {
            if (S !== void 0) {
              g = S;
              break e;
            }
            g = gL($Yh, { hasError: y, loading: b, sourceIds: n.sourceIds, vm: _ });
            break e;
          }
          case "mcpToolCall": {
            const k = _;
            let C, T;
            if (e[34] !== k || e[35] !== f.approval?.status) {
              const Y = kjt(k);
              C = f.approval?.status === "pending", T = wjt(Y), e[34] = k, e[35] = f.approval?.status, e[36] = C, e[37] = T;
            } else C = e[36], T = e[37];
            const I = T, A = k.providerIdentifier, P = k.toolName || k.rawName;
            let M;
            e[38] !== P || e[39] !== k.transcriptDisplay || e[40] !== A || e[41] !== l || e[42] !== f.mcpToolDisplay ? (M = f.mcpToolDisplay ?? k.transcriptDisplay ?? (A && P ? l?.(A, P) : void 0), e[38] = P, e[39] = k.transcriptDisplay, e[40] = A, e[41] = l, e[42] = f.mcpToolDisplay, e[43] = M) : M = e[43];
            const O = !!M, N = f.approval?.status;
            let U;
            e[44] !== N ? (U = C_a(N), e[44] = N, e[45] = U) : U = e[45];
            const j = U, $ = u ? u({ sourceIds: n.sourceIds, vm: _, callId: f.callId, loading: b, hasError: y, allowScriptedContent: !b && !y && !j && !C && !I && !O }) : void 0;
            let H;
            e[46] !== $ ? (H = (Y) => $ ? JOS(e5S, { children: [Y, $] }) : Y, e[46] = $, e[47] = H) : H = e[47];
            const G = H;
            if (C || I || O) {
              let Y;
              e[48] !== r || e[49] !== n || e[50] !== y || e[51] !== b || e[52] !== s || e[53] !== i || e[54] !== a ? (Y = gL(K6r, { defaultExpanded: r, entry: n, hasError: y, loading: b, onFileClick: s, onNestedToolExpand: i, onUrlClick: a }), e[48] = r, e[49] = n, e[50] = y, e[51] = b, e[52] = s, e[53] = i, e[54] = a, e[55] = Y) : Y = e[55];
              let J;
              e[56] !== Y || e[57] !== G ? (J = G(Y), e[56] = Y, e[57] = G, e[58] = J) : J = e[58], g = J;
              break e;
            }
            let q;
            e[59] !== r || e[60] !== y || e[61] !== b || e[62] !== k ? (q = gL(UOS, { defaultExpanded: r, hasError: y, loading: b, vm: k }), e[59] = r, e[60] = y, e[61] = b, e[62] = k, e[63] = q) : q = e[63];
            const K = q;
            let V;
            e[64] !== K || e[65] !== G ? (V = G(K), e[64] = K, e[65] = G, e[66] = V) : V = e[66], g = V;
            break e;
          }
          default: {
            if (S !== void 0) {
              g = S;
              break e;
            }
            let k;
            e[67] !== r || e[68] !== n || e[69] !== y || e[70] !== b || e[71] !== s || e[72] !== i || e[73] !== a ? (k = gL(K6r, { defaultExpanded: r, entry: n, hasError: y, loading: b, onFileClick: s, onNestedToolExpand: i, onUrlClick: a }), e[67] = r, e[68] = n, e[69] = y, e[70] = b, e[71] = s, e[72] = i, e[73] = a, e[74] = k) : k = e[74], g = k;
            break e;
          }
        }
        e[13] = r, e[14] = n, e[15] = b, e[16] = s, e[17] = h, e[18] = i, e[19] = a, e[20] = c, e[21] = u, e[22] = l, e[23] = f.approval, e[24] = f.approvalReason, e[25] = f.callId, e[26] = f.error, e[27] = f.mcpToolDisplay, e[28] = f.startedAtMs, e[29] = _;
      }
    }
    e[2] = r, e[3] = n, e[4] = s, e[5] = h, e[6] = i, e[7] = a, e[8] = c, e[9] = u, e[10] = l, e[11] = p, e[12] = g;
  } else g = e[12];
  if (g !== /* @__PURE__ */ Symbol.for("react.early_return_sentinel")) return g;
}
function t5S(t) {
  const e = Yjt(8), { hasError: n, loading: i, vm: r } = t;
  let s;
  e[0] !== n || e[1] !== i || e[2] !== r ? (s = d0e({ vm: r, loading: i, hasError: n }), e[0] = n, e[1] = i, e[2] = r, e[3] = s) : s = e[3];
  const o = s;
  let a;
  return e[4] !== o.action || e[5] !== o.details || e[6] !== i ? (a = gL(LC, { action: o.action, details: o.details, loading: i }), e[4] = o.action, e[5] = o.details, e[6] = i, e[7] = a) : a = e[7], a;
}
function n5S(t) {
  const e = Yjt(27), { hasError: n, loading: i, vm: r } = t;
  if (!r.isSettled || n) {
    let u;
    e[0] !== n || e[1] !== i || e[2] !== r ? (u = d0e({ vm: r, loading: i, hasError: n }), e[0] = n, e[1] = i, e[2] = r, e[3] = u) : u = e[3];
    const d = u, h = d.loading ?? i;
    let p;
    return e[4] !== d.action || e[5] !== d.details || e[6] !== h ? (p = gL(LC, { action: d.action, details: d.details, loading: h }), e[4] = d.action, e[5] = d.details, e[6] = h, e[7] = p) : p = e[7], p;
  }
  let s;
  e[8] !== r ? (s = () => {
    const u = d0e({ vm: r, loading: false, hasError: false });
    return gL(LC, { action: u.action, details: u.details, loading: false });
  }, e[8] = r, e[9] = s) : s = e[9];
  const o = s;
  if (r.isSkipped) {
    let u;
    e[10] !== r.questions ? (u = r.questions.map(o5S), e[10] = r.questions, e[11] = u) : u = e[11];
    const d = u;
    if (d.length === 0) {
      let y;
      return e[12] !== o ? (y = o(), e[12] = o, e[13] = y) : y = e[13], y;
    }
    let h;
    e[14] !== r ? (h = DFr(r) ?? 0, e[14] = r, e[15] = h) : h = e[15];
    const p = h, g = p === 1 ? "question" : "questions";
    let f;
    e[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (f = [], e[16] = f) : f = e[16];
    const _ = `The agent tried to ask ${p} ${g}, but they were skipped by the user`;
    let b;
    return e[17] !== d || e[18] !== _ ? (b = gL(Nya, { items: f, skipTooltip: _, skippedQuestionPrompts: d, variant: "skipped" }), e[17] = d, e[18] = _, e[19] = b) : b = e[19], b;
  }
  let a;
  e[20] !== r.answers || e[21] !== r.questions ? (a = Y$h(r.questions.map(r5S), r.answers?.map(i5S)), e[20] = r.answers, e[21] = r.questions, e[22] = a) : a = e[22];
  const l = a;
  if (l.length === 0) {
    let u;
    return e[23] !== o ? (u = o(), e[23] = o, e[24] = u) : u = e[24], u;
  }
  let c;
  return e[25] !== l ? (c = gL(Nya, { items: l, variant: "answered" }), e[25] = l, e[26] = c) : c = e[26], c;
}
function i5S(t) {
  return { questionId: t.questionId, selectedOptionIds: t.selectedOptionIds, freeformText: t.freeformText };
}
function r5S(t) {
  return { id: t.id, prompt: t.prompt, options: (t.options ?? []).map(s5S) };
}
function s5S(t) {
  return { id: t.id, label: t.label };
}
function o5S(t) {
  return t.prompt;
}
function a5S(t) {
  const e = Yjt(5), { vm: n } = t;
  let i;
  return e[0] !== n.failureReason || e[1] !== n.gheApplication || e[2] !== n.githubRepo || e[3] !== n.state ? (i = gL(Bya, { failureReason: n.failureReason, gheApplication: n.gheApplication, githubRepo: n.githubRepo, state: n.state }), e[0] = n.failureReason, e[1] = n.gheApplication, e[2] = n.githubRepo, e[3] = n.state, e[4] = i) : i = e[4], i;
}
function l5S(t) {
  const e = Yjt(9), { loading: n, startedAtMs: i, vm: r } = t, s = r.blockUntilMs, o = n && s !== void 0 && s > 0, a = kya(o), l = wya(o, i);
  let c;
  e[0] !== l || e[1] !== n || e[2] !== a || e[3] !== r ? (c = d0e({ vm: r, loading: n, nowMs: a, startedAtMs: l }), e[0] = l, e[1] = n, e[2] = a, e[3] = r, e[4] = c) : c = e[4];
  const u = c;
  let d;
  return e[5] !== u.action || e[6] !== u.details || e[7] !== n ? (d = gL(LC, { action: u.action, details: u.details, loading: n }), e[5] = u.action, e[6] = u.details, e[7] = n, e[8] = d) : d = e[8], d;
}
function c5S(t) {
  const e = Yjt(19), { hasError: n, loading: i, onFileClick: r, onFileContextMenu: s, startedAtMs: o, vm: a } = t;
  let l;
  e[0] !== n || e[1] !== i || e[2] !== o || e[3] !== a ? (l = d0e({ vm: a, loading: i, hasError: n, startedAtMs: o }), e[0] = n, e[1] = i, e[2] = o, e[3] = a, e[4] = l) : l = e[4];
  const c = l, u = a.path, d = a.displayRange;
  let h;
  e[5] !== d || e[6] !== i || e[7] !== r || e[8] !== u ? (h = !i && u !== void 0 && r ? () => r(u, d ? { startLine: d.startLine, endLine: d.endLine + 1 } : void 0) : void 0, e[5] = d, e[6] = i, e[7] = r, e[8] = u, e[9] = h) : h = e[9];
  const p = h;
  let g;
  e[10] !== s || e[11] !== u ? (g = u !== void 0 && s ? (_) => s(_, u) : void 0, e[10] = s, e[11] = u, e[12] = g) : g = e[12];
  let f;
  return e[13] !== c.action || e[14] !== c.details || e[15] !== p || e[16] !== i || e[17] !== g ? (f = gL(LC, { action: c.action, details: c.details, loading: i, onClick: p, onContextMenu: g }), e[13] = c.action, e[14] = c.details, e[15] = p, e[16] = i, e[17] = g, e[18] = f) : f = e[18], f;
}
function K6r(t) {
  const e = Yjt(21), { defaultExpanded: n, entry: i, hasError: r, loading: s, onFileClick: o, onNestedToolExpand: a, onUrlClick: l } = t;
  if (i.step.type !== "tool-call") return null;
  const { step: c } = i;
  let u;
  e[0] !== a || e[1] !== c.callId ? (u = a ? () => a(c.callId) : void 0, e[0] = a, e[1] = c.callId, e[2] = u) : u = e[2];
  let d;
  return e[3] !== n || e[4] !== r || e[5] !== s || e[6] !== o || e[7] !== l || e[8] !== c.approval || e[9] !== c.approvalReason || e[10] !== c.backgroundNudgeDelayMs || e[11] !== c.callId || e[12] !== c.editToolCallDisplay || e[13] !== c.mcpToolDisplay || e[14] !== c.onSendToBackground || e[15] !== c.showBackgroundNudge || e[16] !== c.startedAtMs || e[17] !== c.subagentConversation || e[18] !== c.toolCallVm || e[19] !== u ? (d = gL(Tya, { approval: c.approval, approvalReason: c.approvalReason, backgroundNudgeDelayMs: c.backgroundNudgeDelayMs, callId: c.callId, defaultExpanded: n, editToolCallDisplay: c.editToolCallDisplay, mcpToolDisplay: c.mcpToolDisplay, hasError: r, loading: s, onFileClick: o, onNestedToolExpand: u, onSendToBackground: c.onSendToBackground, onUrlClick: l, showBackgroundNudge: c.showBackgroundNudge, showMcpToolDescription: true, startedAtMs: c.startedAtMs, subagentConversation: c.subagentConversation, toolCallVm: c.toolCallVm }), e[3] = n, e[4] = r, e[5] = s, e[6] = o, e[7] = l, e[8] = c.approval, e[9] = c.approvalReason, e[10] = c.backgroundNudgeDelayMs, e[11] = c.callId, e[12] = c.editToolCallDisplay, e[13] = c.mcpToolDisplay, e[14] = c.onSendToBackground, e[15] = c.showBackgroundNudge, e[16] = c.startedAtMs, e[17] = c.subagentConversation, e[18] = c.toolCallVm, e[19] = u, e[20] = d) : d = e[20], d;
}
