// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 92376 range:13781609..14401330
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
92376: (e, t, r) => {
    "use strict";
    r.d(t, { PMe: () => z, CoO: () => j, Uwx: () => bx, y2v: () => Cx, zcK: () => qx, k78: () => JA, Xc5: () => _A, UHN: () => hx, z9K: () => WA, HUJ: () => YA, HPD: () => GA, os_: () => $A, N7j: () => YI, zcw: () => sk, pHZ: () => H, Jtz: () => Y, gDy: () => AC, WHw: () => PC, xUl: () => gx, eqd: () => Vx, A5s: () => hC, MM7: () => Sx, gnL: () => Ix, DO4: () => Mx, qhh: () => uq, DwO: () => eq, AA_: () => iq, XU9: () => _x, RA0: () => lR, ig9: () => mR, Au: () => XT, sTQ: () => xC, Wbm: () => Jq, zqs: () => Uc, qQx: () => nl, hB4: () => wx, $uu: () => xx, ROD: () => Hy, z8A: () => Av, wfQ: () => PA, On2: () => dx, c3T: () => mx, iQl: () => Gx, EvW: () => bC, oaR: () => Xn, tTx: () => VI, Pj2: () => tx, p46: () => gC, qek: () => fx, bvF: () => Wx, F0p: () => pC, LHk: () => Ax, DjL: () => Ex, KHu: () => VM, f1_: () => cq, eJ8: () => ZM, nJ0: () => sq, uS3: () => aR, jE$: () => dR, btc: () => YT, NuS: () => qq, xch: () => Bq, g95: () => Bx, O5R: () => kx, fYR: () => ux, x36: () => px, KJ$: () => sS, TnL: () => jx, dFU: () => Zn, sO1: () => zI, S$T: () => ex });
    var n = r(15718), s = r(64500);
    function o(e2, t2) {
      return { _privacyMode: t2, start: void 0 !== e2.start ? a(e2.start, t2) : void 0, end: void 0 !== e2.end ? a(e2.end, t2) : void 0 };
    }
    function i(e2, t2, r2) {
      return new s.Q6({ start: void 0 !== e2.start ? c(e2.start, t2, r2) : void 0, end: void 0 !== e2.end ? c(e2.end, t2, r2) : void 0 });
    }
    function a(e2, t2) {
      return { _privacyMode: t2, line: e2.line, column: e2.column };
    }
    function c(e2, t2, r2) {
      return new s.yX({ line: e2.line, column: e2.column });
    }
    function l(e2, t2) {
      return { _privacyMode: t2, filePath: (0, n.cZ)(e2.filePath, n.po.PATH, "file_path", t2), sizeBytes: e2.sizeBytes, lineCount: e2.lineCount };
    }
    function u(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, o2 = r2?.enforcing;
      return new s.pV({ filePath: e2.filePath.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: o2 }), sizeBytes: e2.sizeBytes, lineCount: e2.lineCount });
    }
    function d(e2, t2) {
      return { _privacyMode: t2, requestId: e2.requestId, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function p(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, o2 = r2?.enforcing;
      return new s.UC({ requestId: e2.requestId, reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: o2 }) });
    }
    var m = r(75178);
    function h(e2, t2) {
      return { _privacyMode: t2, filePaths: e2.filePaths.map((e3) => (0, n.cZ)(e3, n.po.PATH, "file_paths", t2)), startLine: e2.startLine, endLine: e2.endLine, commitHashes: e2.commitHashes, outputMode: e2.outputMode, maxCommits: e2.maxCommits, includeLineRanges: e2.includeLineRanges };
    }
    function f(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new m.Fw({ filePaths: e2.filePaths.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), startLine: e2.startLine, endLine: e2.endLine, commitHashes: e2.commitHashes, outputMode: e2.outputMode, maxCommits: e2.maxCommits, includeLineRanges: e2.includeLineRanges });
    }
    function g(e2, t2) {
      return { _privacyMode: t2, result: y(e2.result, t2) };
    }
    function y(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: _(e2.value, t2) };
        case "error":
          return { case: "error", value: S(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function w(e2, t2, r2) {
      return new m.Zc({ result: v(e2.result, t2, r2) });
    }
    function v(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: A(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: b(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function _(e2, t2) {
      return { _privacyMode: t2, attributionText: (0, n.cZ)(e2.attributionText, n.po.CODE, "attribution_text", t2), outputLocation: void 0 !== e2.outputLocation ? l(e2.outputLocation, t2) : void 0 };
    }
    function A(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new m.v({ attributionText: e2.attributionText.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), outputLocation: void 0 !== e2.outputLocation ? u(e2.outputLocation, t2, r2) : void 0 });
    }
    function S(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function b(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new m.qL({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function E(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? h(e2.args, t2) : void 0, result: void 0 !== e2.result ? g(e2.result, t2) : void 0 };
    }
    function I(e2, t2, r2) {
      return new m.ex({ args: void 0 !== e2.args ? f(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? w(e2.result, t2, r2) : void 0 });
    }
    var C = r(85814);
    function k(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? T(e2.args, t2) : void 0, result: void 0 !== e2.result ? B(e2.result, t2) : void 0 };
    }
    function x(e2, t2, r2) {
      return new C.JU({ args: void 0 !== e2.args ? R(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? J(e2.result, t2, r2) : void 0 });
    }
    function T(e2, t2) {
      return { _privacyMode: t2, agentId: e2.agentId };
    }
    function R(e2, t2, r2) {
      return new C.W1({ agentId: e2.agentId });
    }
    function B(e2, t2) {
      return { _privacyMode: t2, result: P(e2.result, t2) };
    }
    function P(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: q(e2.value, t2) };
        case "error":
          return { case: "error", value: F(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function J(e2, t2, r2) {
      return new C.y$({ result: M(e2.result, t2, r2) });
    }
    function M(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: D(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: U(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function q(e2, t2) {
      return { _privacyMode: t2, appliedChanges: e2.appliedChanges.map((e3) => O(e3, t2)) };
    }
    function D(e2, t2, r2) {
      return new C.ud({ appliedChanges: e2.appliedChanges.map((e3) => N(e3, t2, r2)) });
    }
    function O(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), changeType: e2.changeType, beforeContent: void 0 !== e2.beforeContent ? (0, n.cZ)(e2.beforeContent, n.po.CODE, "before_content", t2) : void 0, afterContent: void 0 !== e2.afterContent ? (0, n.cZ)(e2.afterContent, n.po.CODE, "after_content", t2) : void 0, error: void 0 !== e2.error ? (0, n.cZ)(e2.error, n.po.CODE, "error", t2) : void 0, messageForModel: void 0 !== e2.messageForModel ? (0, n.cZ)(e2.messageForModel, n.po.CODE, "message_for_model", t2) : void 0 };
    }
    function N(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new C.H4({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), changeType: e2.changeType, beforeContent: e2.beforeContent?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), afterContent: e2.afterContent?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), error: e2.error?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), messageForModel: e2.messageForModel?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function F(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2), appliedChanges: e2.appliedChanges.map((e3) => O(e3, t2)) };
    }
    function U(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new C.rQ({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), appliedChanges: e2.appliedChanges.map((e3) => N(e3, t2, r2)) });
    }
    var L = r(68892);
    function $(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? G(e2.args, t2) : void 0, result: void 0 !== e2.result ? V(e2.result, t2) : void 0 };
    }
    function Q(e2, t2, r2) {
      return new L.OU({ args: void 0 !== e2.args ? H(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Y(e2.result, t2, r2) : void 0 });
    }
    function j(e2, t2) {
      return { args: void 0, result: void 0, ...t2, _privacyMode: e2 };
    }
    function G(e2, t2) {
      return { _privacyMode: t2, title: (0, n.cZ)(e2.title, n.po.CODE, "title", t2), questions: e2.questions.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, id: e4.id, prompt: (0, n.cZ)(e4.prompt, n.po.CODE, "prompt", t3), options: e4.options.map((e5) => (function(e6, t4) {
          return { _privacyMode: t4, id: e6.id, label: (0, n.cZ)(e6.label, n.po.CODE, "label", t4) };
        })(e5, t3)), allowMultiple: e4.allowMultiple };
      })(e3, t2)), runAsync: e2.runAsync, asyncOriginalToolCallId: e2.asyncOriginalToolCallId };
    }
    function H(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new L.ju({ title: e2.title.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), questions: e2.questions.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new L.WW({ id: e4.id, prompt: e4.prompt.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), options: e4.options.map((e5) => (function(e6, t4, r4) {
          const n4 = r4?.redactUnallowedFieldsInsteadOfThrowing ?? false, s4 = r4?.enforcing;
          return new L.pq({ id: e6.id, label: e6.label.unwrap(t4, { redactUnallowedFieldsInsteadOfThrowing: n4, enforcing: s4 }) });
        })(e5, t3, r3)), allowMultiple: e4.allowMultiple });
      })(e3, t2, r2)), runAsync: e2.runAsync, asyncOriginalToolCallId: e2.asyncOriginalToolCallId });
    }
    function z(e2, t2) {
      return { title: (0, n.cZ)("", n.po.CODE, "title", e2), questions: [], runAsync: false, asyncOriginalToolCallId: "", ...t2, _privacyMode: e2 };
    }
    function W(e2, t2) {
      return { _privacyMode: t2, interactionId: e2.interactionId };
    }
    function V(e2, t2) {
      return { _privacyMode: t2, result: K(e2.result, t2) };
    }
    function K(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: X(e2.value, t2) };
        case "error":
          return { case: "error", value: te(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: ne(e2.value, t2) };
        case "async":
          return { case: "async", value: W(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Y(e2, t2, r2) {
      return new L.tz({ result: Z(e2.result, t2, r2) });
    }
    function Z(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: ee(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: re(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: se(e2.value, t2, r2) };
        case "async":
          return { case: "async", value: (n2 = e2.value, new L.yt({ interactionId: n2.interactionId })) };
        default:
          return { case: void 0, value: void 0 };
      }
      var n2;
    }
    function X(e2, t2) {
      return { _privacyMode: t2, answers: e2.answers.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, questionId: e4.questionId, selectedOptionIds: e4.selectedOptionIds, freeformText: (0, n.cZ)(e4.freeformText, n.po.CODE, "freeform_text", t3) };
      })(e3, t2)) };
    }
    function ee(e2, t2, r2) {
      return new L.dE({ answers: e2.answers.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new L.wh({ questionId: e4.questionId, selectedOptionIds: e4.selectedOptionIds, freeformText: e4.freeformText.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
      })(e3, t2, r2)) });
    }
    function te(e2, t2) {
      return { _privacyMode: t2, errorMessage: (0, n.cZ)(e2.errorMessage, n.po.CODE, "error_message", t2) };
    }
    function re(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new L.Ww({ errorMessage: e2.errorMessage.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function ne(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function se(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new L.ox({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var oe = r(46326);
    function ie(e2, t2) {
      return { _privacyMode: t2, taskId: e2.taskId, blockUntilMs: e2.blockUntilMs, regex: void 0 !== e2.regex ? (0, n.cZ)(e2.regex, n.po.CODE, "regex", t2) : void 0 };
    }
    function ae(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new oe.wj({ taskId: e2.taskId, blockUntilMs: e2.blockUntilMs, regex: e2.regex?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function ce(e2, t2) {
      return { _privacyMode: t2, taskId: e2.taskId, runtimeMs: e2.runtimeMs, outputFilePath: (0, n.cZ)(e2.outputFilePath, n.po.PATH, "output_file_path", t2), outputLength: e2.outputLength, regexRequested: e2.regexRequested, regexMatch: void 0 !== e2.regexMatch ? (0, n.cZ)(e2.regexMatch, n.po.CODE, "regex_match", t2) : void 0, exitCode: e2.exitCode, wakeReason: e2.wakeReason };
    }
    function le(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new oe.nU({ taskId: e2.taskId, runtimeMs: e2.runtimeMs, outputFilePath: e2.outputFilePath.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), outputLength: e2.outputLength, regexRequested: e2.regexRequested, regexMatch: e2.regexMatch?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), exitCode: e2.exitCode, wakeReason: e2.wakeReason });
    }
    function ue(e2, t2) {
      return { _privacyMode: t2, taskId: e2.taskId, runtimeMs: e2.runtimeMs, outputFilePath: (0, n.cZ)(e2.outputFilePath, n.po.PATH, "output_file_path", t2), outputLength: e2.outputLength, regexRequested: e2.regexRequested, regexMatch: void 0 !== e2.regexMatch ? (0, n.cZ)(e2.regexMatch, n.po.CODE, "regex_match", t2) : void 0, wakeReason: e2.wakeReason };
    }
    function de(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new oe.Hr({ taskId: e2.taskId, runtimeMs: e2.runtimeMs, outputFilePath: e2.outputFilePath.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), outputLength: e2.outputLength, regexRequested: e2.regexRequested, regexMatch: e2.regexMatch?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), wakeReason: e2.wakeReason });
    }
    function pe(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function me(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new oe.vH({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function he(e2, t2) {
      return { _privacyMode: t2, awaitResult: fe(e2.awaitResult, t2) };
    }
    function fe(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "complete":
          return { case: "complete", value: ce(e2.value, t2) };
        case "stillRunning":
          return { case: "stillRunning", value: ue(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function ge(e2, t2, r2) {
      return new oe.uo({ awaitResult: ye(e2.awaitResult, t2, r2) });
    }
    function ye(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "complete":
          return { case: "complete", value: le(e2.value, t2, r2) };
        case "stillRunning":
          return { case: "stillRunning", value: de(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function we(e2, t2) {
      return { _privacyMode: t2, result: ve(e2.result, t2) };
    }
    function ve(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "complete":
          return { case: "complete", value: ce(e2.value, t2) };
        case "stillRunning":
          return { case: "stillRunning", value: ue(e2.value, t2) };
        case "error":
          return { case: "error", value: pe(e2.value, t2) };
        case "success":
          return { case: "success", value: he(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function _e(e2, t2, r2) {
      return new oe.mK({ result: Ae(e2.result, t2, r2) });
    }
    function Ae(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "complete":
          return { case: "complete", value: le(e2.value, t2, r2) };
        case "stillRunning":
          return { case: "stillRunning", value: de(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: me(e2.value, t2, r2) };
        case "success":
          return { case: "success", value: ge(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Se(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? ie(e2.args, t2) : void 0, result: void 0 !== e2.result ? we(e2.result, t2) : void 0 };
    }
    function be(e2, t2, r2) {
      return new oe.$0({ args: void 0 !== e2.args ? ae(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? _e(e2.result, t2, r2) : void 0 });
    }
    var Ee = r(99348);
    function Ie(e2, t2) {
      return { _privacyMode: t2, filePath: (0, n.cZ)(e2.filePath, n.po.PATH, "file_path", t2), startLine: e2.startLine, endLine: e2.endLine };
    }
    function Ce(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ee.zT({ filePath: e2.filePath.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), startLine: e2.startLine, endLine: e2.endLine });
    }
    function ke(e2, t2) {
      return { _privacyMode: t2, content: (0, n.cZ)(e2.content, n.po.CODE, "content", t2) };
    }
    function xe(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ee.Pq({ content: e2.content.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Te(e2, t2) {
      return { _privacyMode: t2, errorMessage: (0, n.cZ)(e2.errorMessage, n.po.CODE, "error_message", t2) };
    }
    function Re(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ee.yF({ errorMessage: e2.errorMessage.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Be(e2, t2) {
      return { _privacyMode: t2, result: Pe(e2.result, t2) };
    }
    function Pe(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: ke(e2.value, t2) };
        case "error":
          return { case: "error", value: Te(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Je(e2, t2, r2) {
      return new Ee.L5({ result: Me(e2.result, t2, r2) });
    }
    function Me(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: xe(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Re(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function qe(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Ie(e2.args, t2) : void 0, result: void 0 !== e2.result ? Be(e2.result, t2) : void 0 };
    }
    function De(e2, t2, r2) {
      return new Ee.EI({ args: void 0 !== e2.args ? Ce(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Je(e2.result, t2, r2) : void 0 });
    }
    var Oe = r(828);
    function Ne(e2, t2) {
      return { _privacyMode: t2, line: e2.line, character: e2.character };
    }
    function Fe(e2, t2, r2) {
      return new Oe.Yn({ line: e2.line, character: e2.character });
    }
    function Ue(e2, t2) {
      return { _privacyMode: t2, start: void 0 !== e2.start ? Ne(e2.start, t2) : void 0, end: void 0 !== e2.end ? Ne(e2.end, t2) : void 0 };
    }
    function Le(e2, t2, r2) {
      return new Oe.YH({ start: void 0 !== e2.start ? Fe(e2.start) : void 0, end: void 0 !== e2.end ? Fe(e2.end) : void 0 });
    }
    function $e(e2, t2) {
      return { _privacyMode: t2, contents: (0, n.cZ)(e2.contents, n.po.CODE, "contents", t2), canvasId: e2.canvasId, title: void 0 !== e2.title ? (0, n.cZ)(e2.title, n.po.CODE, "title", t2) : void 0 };
    }
    function Qe(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Oe.$F({ contents: e2.contents.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), canvasId: e2.canvasId, title: e2.title?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function je(e2, t2) {
      return { _privacyMode: t2, canvasId: e2.canvasId, title: void 0 !== e2.title ? (0, n.cZ)(e2.title, n.po.CODE, "title", t2) : void 0, url: (0, n.cZ)(e2.url, n.po.PATH, "url", t2) };
    }
    function Ge(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Oe.p7({ canvasId: e2.canvasId, title: e2.title?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), url: e2.url.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function He(e2, t2) {
      return { _privacyMode: t2, reason: e2.reason, diagnostics: e2.diagnostics.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, message: (0, n.cZ)(e4.message, n.po.CODE, "message", t3), code: e4.code, severity: e4.severity, range: void 0 !== e4.range ? Ue(e4.range, t3) : void 0 };
      })(e3, t2)), detail: void 0 !== e2.detail ? (0, n.cZ)(e2.detail, n.po.CODE, "detail", t2) : void 0 };
    }
    function ze(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Oe.M0({ reason: e2.reason, diagnostics: e2.diagnostics.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new Oe.hR({ message: e4.message.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), code: e4.code, severity: e4.severity, range: void 0 !== e4.range ? Le(e4.range) : void 0 });
      })(e3, t2, r2)), detail: e2.detail?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function We(e2, t2) {
      return { _privacyMode: t2, result: Ve(e2.result, t2) };
    }
    function Ve(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: je(e2.value, t2) };
        case "failure":
          return { case: "failure", value: He(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ke(e2, t2, r2) {
      return new Oe.d({ result: Ye(e2.result, t2, r2) });
    }
    function Ye(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Ge(e2.value, t2, r2) };
        case "failure":
          return { case: "failure", value: ze(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ze(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? $e(e2.args, t2) : void 0, result: void 0 !== e2.result ? We(e2.result, t2) : void 0 };
    }
    function Xe(e2, t2, r2) {
      return new Oe.Kn({ args: void 0 !== e2.args ? Qe(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Ke(e2.result, t2, r2) : void 0 });
    }
    function et(e2, t2) {
      return { _privacyMode: t2, canvasId: e2.canvasId, url: void 0 !== e2.url ? (0, n.cZ)(e2.url, n.po.PATH, "url", t2) : void 0 };
    }
    function tt(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Oe.Kc({ canvasId: e2.canvasId, url: e2.url?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function rt(e2, t2) {
      return { _privacyMode: t2, canvasId: e2.canvasId, title: void 0 !== e2.title ? (0, n.cZ)(e2.title, n.po.CODE, "title", t2) : void 0, url: (0, n.cZ)(e2.url, n.po.PATH, "url", t2), source: (0, n.cZ)(e2.source, n.po.CODE, "source", t2) };
    }
    function nt(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Oe.y_({ canvasId: e2.canvasId, title: e2.title?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), url: e2.url.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), source: e2.source.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function st(e2, t2) {
      return { _privacyMode: t2, reason: e2.reason, detail: void 0 !== e2.detail ? (0, n.cZ)(e2.detail, n.po.CODE, "detail", t2) : void 0 };
    }
    function ot(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Oe.tk({ reason: e2.reason, detail: e2.detail?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function it(e2, t2) {
      return { _privacyMode: t2, result: at(e2.result, t2) };
    }
    function at(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: rt(e2.value, t2) };
        case "failure":
          return { case: "failure", value: st(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function ct(e2, t2, r2) {
      return new Oe.a4({ result: lt(e2.result, t2, r2) });
    }
    function lt(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: nt(e2.value, t2, r2) };
        case "failure":
          return { case: "failure", value: ot(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function ut(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? et(e2.args, t2) : void 0, result: void 0 !== e2.result ? it(e2.result, t2) : void 0 };
    }
    function dt(e2, t2, r2) {
      return new Oe.LM({ args: void 0 !== e2.args ? tt(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? ct(e2.result, t2, r2) : void 0 });
    }
    var pt = r(39129);
    function mt(e2, t2) {
      return { _privacyMode: t2, currentStep: void 0 !== e2.currentStep ? (0, n.cZ)(e2.currentStep, n.po.CODE, "current_step", t2) : void 0, finalSummary: void 0 !== e2.finalSummary ? (0, n.cZ)(e2.finalSummary, n.po.CODE, "final_summary", t2) : void 0, completedSubtitle: void 0 !== e2.completedSubtitle ? (0, n.cZ)(e2.completedSubtitle, n.po.CODE, "completed_subtitle", t2) : void 0 };
    }
    function ht(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new pt.kM({ currentStep: e2.currentStep?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), finalSummary: e2.finalSummary?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), completedSubtitle: e2.completedSubtitle?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function ft(e2, t2) {
      return { _privacyMode: t2, currentStep: (0, n.cZ)(e2.currentStep, n.po.CODE, "current_step", t2), messageIndex: e2.messageIndex };
    }
    function gt(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new pt.Y_({ currentStep: e2.currentStep.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), messageIndex: e2.messageIndex });
    }
    function yt(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function wt(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new pt.H6({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function vt(e2, t2) {
      return { _privacyMode: t2, result: _t(e2.result, t2) };
    }
    function _t(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: ft(e2.value, t2) };
        case "error":
          return { case: "error", value: yt(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function At(e2, t2, r2) {
      return new pt.CH({ result: St(e2.result, t2, r2) });
    }
    function St(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: gt(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: wt(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function bt(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? mt(e2.args, t2) : void 0, result: void 0 !== e2.result ? vt(e2.result, t2) : void 0 };
    }
    function Et(e2, t2, r2) {
      return new pt.fd({ args: void 0 !== e2.args ? ht(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? At(e2.result, t2, r2) : void 0 });
    }
    var It = r(43643);
    function Ct(e2, t2) {
      return { _privacyMode: t2, x: e2.x, y: e2.y };
    }
    function kt(e2, t2, r2) {
      return new It.xp({ x: e2.x, y: e2.y });
    }
    function xt(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId, actions: e2.actions.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, action: Rt(e4.action, t3) };
      })(e3, t2)), description: void 0 !== e2.description ? (0, n.cZ)(e2.description, n.po.CODE, "description", t2) : void 0, bindUnmappedCharacters: e2.bindUnmappedCharacters, desktopLeaseActorId: e2.desktopLeaseActorId, screenshotSettleMs: e2.screenshotSettleMs, settleUntilStable: e2.settleUntilStable };
    }
    function Tt(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new It.K5({ toolCallId: e2.toolCallId, actions: e2.actions.map((e3) => (function(e4, t3, r3) {
        return new It.ho({ action: Bt(e4.action, t3, r3) });
      })(e3, t2, r2)), description: e2.description?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), bindUnmappedCharacters: e2.bindUnmappedCharacters, desktopLeaseActorId: e2.desktopLeaseActorId, screenshotSettleMs: e2.screenshotSettleMs, settleUntilStable: e2.settleUntilStable });
    }
    function Rt(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "mouseMove":
          return { case: "mouseMove", value: Pt(e2.value, t2) };
        case "click":
          return { case: "click", value: Mt(e2.value, t2) };
        case "mouseDown":
          return { case: "mouseDown", value: Dt(e2.value, t2) };
        case "mouseUp":
          return { case: "mouseUp", value: Nt(e2.value, t2) };
        case "drag":
          return { case: "drag", value: Ut(e2.value, t2) };
        case "scroll":
          return { case: "scroll", value: $t(e2.value, t2) };
        case "type":
          return { case: "type", value: jt(e2.value, t2) };
        case "key":
          return { case: "key", value: Ht(e2.value, t2) };
        case "wait":
          return { case: "wait", value: Wt(e2.value, t2) };
        case "screenshot":
          return { case: "screenshot", value: Kt(e2.value, t2) };
        case "cursorPosition":
          return { case: "cursorPosition", value: Zt(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Bt(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "mouseMove":
          return { case: "mouseMove", value: Jt(e2.value, t2, r2) };
        case "click":
          return { case: "click", value: qt(e2.value, t2, r2) };
        case "mouseDown":
          return { case: "mouseDown", value: Ot(e2.value, t2, r2) };
        case "mouseUp":
          return { case: "mouseUp", value: Ft(e2.value, t2, r2) };
        case "drag":
          return { case: "drag", value: Lt(e2.value, t2, r2) };
        case "scroll":
          return { case: "scroll", value: Qt(e2.value, t2, r2) };
        case "type":
          return { case: "type", value: Gt(e2.value, t2, r2) };
        case "key":
          return { case: "key", value: zt(e2.value, t2, r2) };
        case "wait":
          return { case: "wait", value: Vt(e2.value, t2, r2) };
        case "screenshot":
          return { case: "screenshot", value: Yt(e2.value, t2, r2) };
        case "cursorPosition":
          return { case: "cursorPosition", value: Xt(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Pt(e2, t2) {
      return { _privacyMode: t2, coordinate: void 0 !== e2.coordinate ? Ct(e2.coordinate, t2) : void 0 };
    }
    function Jt(e2, t2, r2) {
      return new It.Dc({ coordinate: void 0 !== e2.coordinate ? kt(e2.coordinate) : void 0 });
    }
    function Mt(e2, t2) {
      return { _privacyMode: t2, coordinate: void 0 !== e2.coordinate ? Ct(e2.coordinate, t2) : void 0, button: e2.button, count: e2.count, modifierKeys: e2.modifierKeys };
    }
    function qt(e2, t2, r2) {
      return new It.vV({ coordinate: void 0 !== e2.coordinate ? kt(e2.coordinate) : void 0, button: e2.button, count: e2.count, modifierKeys: e2.modifierKeys });
    }
    function Dt(e2, t2) {
      return { _privacyMode: t2, button: e2.button };
    }
    function Ot(e2, t2, r2) {
      return new It._3({ button: e2.button });
    }
    function Nt(e2, t2) {
      return { _privacyMode: t2, button: e2.button };
    }
    function Ft(e2, t2, r2) {
      return new It.bG({ button: e2.button });
    }
    function Ut(e2, t2) {
      return { _privacyMode: t2, path: e2.path.map((e3) => Ct(e3, t2)), button: e2.button, modifierKeys: e2.modifierKeys };
    }
    function Lt(e2, t2, r2) {
      return new It.RC({ path: e2.path.map((e3) => kt(e3)), button: e2.button, modifierKeys: e2.modifierKeys });
    }
    function $t(e2, t2) {
      return { _privacyMode: t2, coordinate: void 0 !== e2.coordinate ? Ct(e2.coordinate, t2) : void 0, direction: e2.direction, amount: e2.amount, modifierKeys: e2.modifierKeys };
    }
    function Qt(e2, t2, r2) {
      return new It.IC({ coordinate: void 0 !== e2.coordinate ? kt(e2.coordinate) : void 0, direction: e2.direction, amount: e2.amount, modifierKeys: e2.modifierKeys });
    }
    function jt(e2, t2) {
      return { _privacyMode: t2, text: (0, n.cZ)(e2.text, n.po.CODE, "text", t2) };
    }
    function Gt(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new It.hn({ text: e2.text.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Ht(e2, t2) {
      return { _privacyMode: t2, key: e2.key, holdDurationMs: e2.holdDurationMs, stroke: e2.stroke };
    }
    function zt(e2, t2, r2) {
      return new It.I8({ key: e2.key, holdDurationMs: e2.holdDurationMs, stroke: e2.stroke });
    }
    function Wt(e2, t2) {
      return { _privacyMode: t2, durationMs: e2.durationMs };
    }
    function Vt(e2, t2, r2) {
      return new It.wm({ durationMs: e2.durationMs });
    }
    function Kt(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Yt(e2, t2, r2) {
      return new It.HC({});
    }
    function Zt(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Xt(e2, t2, r2) {
      return new It.oQ({});
    }
    function er(e2, t2) {
      return { _privacyMode: t2, result: tr(e2.result, t2) };
    }
    function tr(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: sr(e2.value, t2) };
        case "error":
          return { case: "error", value: ir(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function rr(e2, t2, r2) {
      return new It.ks({ result: nr(e2.result, t2, r2) });
    }
    function nr(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: or(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: ar(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function sr(e2, t2) {
      return { _privacyMode: t2, actionCount: e2.actionCount, durationMs: e2.durationMs, screenshot: void 0 !== e2.screenshot ? (0, n.cZ)(e2.screenshot, n.po.CODE, "screenshot", t2) : void 0, log: void 0 !== e2.log ? (0, n.cZ)(e2.log, n.po.CODE, "log", t2) : void 0, screenshotPath: void 0 !== e2.screenshotPath ? (0, n.cZ)(e2.screenshotPath, n.po.PATH, "screenshot_path", t2) : void 0, cursorPosition: void 0 !== e2.cursorPosition ? Ct(e2.cursorPosition, t2) : void 0, settleMs: e2.settleMs, settleOutcome: e2.settleOutcome };
    }
    function or(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new It.Wd({ actionCount: e2.actionCount, durationMs: e2.durationMs, screenshot: e2.screenshot?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), log: e2.log?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), screenshotPath: e2.screenshotPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), cursorPosition: void 0 !== e2.cursorPosition ? kt(e2.cursorPosition) : void 0, settleMs: e2.settleMs, settleOutcome: e2.settleOutcome });
    }
    function ir(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2), actionCount: e2.actionCount, durationMs: e2.durationMs, log: void 0 !== e2.log ? (0, n.cZ)(e2.log, n.po.CODE, "log", t2) : void 0, screenshot: void 0 !== e2.screenshot ? (0, n.cZ)(e2.screenshot, n.po.CODE, "screenshot", t2) : void 0, screenshotPath: void 0 !== e2.screenshotPath ? (0, n.cZ)(e2.screenshotPath, n.po.PATH, "screenshot_path", t2) : void 0 };
    }
    function ar(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new It.Jb({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), actionCount: e2.actionCount, durationMs: e2.durationMs, log: e2.log?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), screenshot: e2.screenshot?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), screenshotPath: e2.screenshotPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function cr(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? xt(e2.args, t2) : void 0, result: void 0 !== e2.result ? er(e2.result, t2) : void 0 };
    }
    function lr(e2, t2, r2) {
      return new It.t8({ args: void 0 !== e2.args ? Tt(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? rr(e2.result, t2, r2) : void 0 });
    }
    var ur = r(90028);
    function dr(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId, target: pr(e2.target, t2) };
    }
    function pr(e2, t2) {
      return e2 && void 0 !== e2.case && "github" === e2.case ? { case: "github", value: fr(e2.value, t2) } : { case: void 0, value: void 0 };
    }
    function mr(e2, t2, r2) {
      return new ur.fW({ toolCallId: e2.toolCallId, target: hr(e2.target, t2, r2) });
    }
    function hr(e2, t2, r2) {
      return e2 && void 0 !== e2.case && "github" === e2.case ? { case: "github", value: gr(e2.value, t2, r2) } : { case: void 0, value: void 0 };
    }
    function fr(e2, t2) {
      return { _privacyMode: t2, repository: void 0 !== e2.repository ? yr(e2.repository, t2) : void 0, gheApplication: e2.gheApplication };
    }
    function gr(e2, t2, r2) {
      return new ur.D3({ repository: void 0 !== e2.repository ? wr(e2.repository, t2, r2) : void 0, gheApplication: e2.gheApplication });
    }
    function yr(e2, t2) {
      return { _privacyMode: t2, owner: e2.owner, repo: e2.repo };
    }
    function wr(e2, t2, r2) {
      return new ur.xy({ owner: e2.owner, repo: e2.repo });
    }
    function vr(e2, t2) {
      return { _privacyMode: t2, result: _r(e2.result, t2) };
    }
    function _r(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: br(e2.value, t2) };
        case "error":
          return { case: "error", value: Ir(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: kr(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ar(e2, t2, r2) {
      return new ur.TK({ result: Sr(e2.result, t2, r2) });
    }
    function Sr(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Er(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Cr(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: xr(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function br(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Er(e2, t2, r2) {
      return new ur.Lz({});
    }
    function Ir(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function Cr(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ur.sr({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function kr(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function xr(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ur.Uf({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Tr(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? dr(e2.args, t2) : void 0, result: void 0 !== e2.result ? vr(e2.result, t2) : void 0 };
    }
    function Rr(e2, t2, r2) {
      return new ur.iO({ args: void 0 !== e2.args ? mr(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Ar(e2.result, t2, r2) : void 0 });
    }
    function Br(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? dr(e2.args, t2) : void 0 };
    }
    function Pr(e2, t2, r2) {
      return new ur.$1({ args: void 0 !== e2.args ? mr(e2.args, t2, r2) : void 0 });
    }
    function Jr(e2, t2) {
      return { _privacyMode: t2, result: Mr(e2.result, t2) };
    }
    function Mr(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "approved":
          return { case: "approved", value: Or(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: Fr(e2.value, t2) };
        case "failed":
          return { case: "failed", value: Lr(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function qr(e2, t2, r2) {
      return new ur.qG({ result: Dr(e2.result, t2, r2) });
    }
    function Dr(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "approved":
          return { case: "approved", value: Nr(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: Ur(e2.value, t2, r2) };
        case "failed":
          return { case: "failed", value: $r(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Or(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Nr(e2, t2, r2) {
      return new ur.O9({});
    }
    function Fr(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function Ur(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ur.lB({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Lr(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function $r(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ur.ik({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var Qr = r(47385);
    function jr(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId, agentIds: e2.agentIds };
    }
    function Gr(e2, t2, r2) {
      return new Qr.D({ toolCallId: e2.toolCallId, agentIds: e2.agentIds });
    }
    function Hr(e2, t2) {
      return { _privacyMode: t2, workers: e2.workers.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, bcId: e4.bcId, name: (0, n.cZ)(e4.name, n.po.CODE, "name", t3), lifecycle: e4.lifecycle, turnInFlight: e4.turnInFlight, lastTerminalTurnStatus: e4.lastTerminalTurnStatus, prUrl: e4.prUrl, lastActivityAtMs: e4.lastActivityAtMs };
      })(e3, t2)), message: (0, n.cZ)(e2.message, n.po.CODE, "message", t2) };
    }
    function zr(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qr.lC({ workers: e2.workers.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new Qr.K2({ bcId: e4.bcId, name: e4.name.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), lifecycle: e4.lifecycle, turnInFlight: e4.turnInFlight, lastTerminalTurnStatus: e4.lastTerminalTurnStatus, prUrl: e4.prUrl, lastActivityAtMs: e4.lastActivityAtMs });
      })(e3, t2, r2)), message: e2.message.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Wr(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function Vr(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qr.Wy({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Kr(e2, t2) {
      return { _privacyMode: t2, result: Yr(e2.result, t2) };
    }
    function Yr(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Hr(e2.value, t2) };
        case "error":
          return { case: "error", value: Wr(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Zr(e2, t2, r2) {
      return new Qr.xX({ result: Xr(e2.result, t2, r2) });
    }
    function Xr(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: zr(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Vr(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function en(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? jr(e2.args, t2) : void 0, result: void 0 !== e2.result ? Kr(e2.result, t2) : void 0 };
    }
    function tn(e2, t2, r2) {
      return new Qr.kX({ args: void 0 !== e2.args ? Gr(e2.args) : void 0, result: void 0 !== e2.result ? Zr(e2.result, t2, r2) : void 0 });
    }
    function rn(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId, agentId: e2.agentId, message: (0, n.cZ)(e2.message, n.po.CODE, "message", t2), delivery: e2.delivery, title: (0, n.cZ)(e2.title, n.po.CODE, "title", t2), model: e2.model };
    }
    function nn(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qr.c6({ toolCallId: e2.toolCallId, agentId: e2.agentId, message: e2.message.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), delivery: e2.delivery, title: e2.title.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), model: e2.model });
    }
    function sn(e2, t2) {
      return { _privacyMode: t2, workerBcId: e2.workerBcId, deliveredAs: e2.deliveredAs, message: (0, n.cZ)(e2.message, n.po.CODE, "message", t2) };
    }
    function on(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qr.sM({ workerBcId: e2.workerBcId, deliveredAs: e2.deliveredAs, message: e2.message.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function an(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function cn(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qr.Pw({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function ln(e2, t2) {
      return { _privacyMode: t2, result: un(e2.result, t2) };
    }
    function un(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: sn(e2.value, t2) };
        case "error":
          return { case: "error", value: an(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function dn(e2, t2, r2) {
      return new Qr.iN({ result: pn(e2.result, t2, r2) });
    }
    function pn(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: on(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: cn(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function mn(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? rn(e2.args, t2) : void 0, result: void 0 !== e2.result ? ln(e2.result, t2) : void 0 };
    }
    function hn(e2, t2, r2) {
      return new Qr.PL({ args: void 0 !== e2.args ? nn(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? dn(e2.result, t2, r2) : void 0 });
    }
    function fn(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId, agentId: e2.agentId, mode: e2.mode, maxTurns: e2.maxTurns };
    }
    function gn(e2, t2, r2) {
      return new Qr.hA({ toolCallId: e2.toolCallId, agentId: e2.agentId, mode: e2.mode, maxTurns: e2.maxTurns });
    }
    function yn(e2, t2) {
      return { _privacyMode: t2, transcript: (0, n.cZ)(e2.transcript, n.po.CODE, "transcript", t2), truncated: e2.truncated };
    }
    function wn(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qr.Zd({ transcript: e2.transcript.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), truncated: e2.truncated });
    }
    function vn(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function _n(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qr.Yc({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function An(e2, t2) {
      return { _privacyMode: t2, result: Sn(e2.result, t2) };
    }
    function Sn(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: yn(e2.value, t2) };
        case "error":
          return { case: "error", value: vn(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function bn(e2, t2, r2) {
      return new Qr.rL({ result: En(e2.result, t2, r2) });
    }
    function En(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: wn(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: _n(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function In(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? fn(e2.args, t2) : void 0, result: void 0 !== e2.result ? An(e2.result, t2) : void 0 };
    }
    function Cn(e2, t2, r2) {
      return new Qr.wm({ args: void 0 !== e2.args ? gn(e2.args) : void 0, result: void 0 !== e2.result ? bn(e2.result, t2, r2) : void 0 });
    }
    function kn(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId, prompt: (0, n.cZ)(e2.prompt, n.po.CODE, "prompt", t2), name: void 0 !== e2.name ? (0, n.cZ)(e2.name, n.po.CODE, "name", t2) : void 0, model: e2.model, baseBranch: void 0 !== e2.baseBranch ? (0, n.cZ)(e2.baseBranch, n.po.CODE, "base_branch", t2) : void 0, machineType: e2.machineType, workerId: e2.workerId, pool: void 0 !== e2.pool ? (0, n.cZ)(e2.pool, n.po.CODE, "pool", t2) : void 0, labels: new Map(Object.entries(e2.labels).map(([e3, r2]) => [(0, n.cZ)(e3, n.po.CODE, "labels", t2), (0, n.cZ)(r2, n.po.CODE, "labels", t2)])), environmentBuildId: e2.environmentBuildId, environmentId: e2.environmentId };
    }
    function xn(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qr.NT({ toolCallId: e2.toolCallId, prompt: e2.prompt.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), name: e2.name?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), model: e2.model, baseBranch: e2.baseBranch?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), machineType: e2.machineType, workerId: e2.workerId, pool: e2.pool?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), labels: Object.fromEntries(Array.from(e2.labels.entries()).map(([e3, r3]) => [e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), r3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })])), environmentBuildId: e2.environmentBuildId, environmentId: e2.environmentId });
    }
    function Tn(e2, t2) {
      return { _privacyMode: t2, agentId: e2.agentId, message: (0, n.cZ)(e2.message, n.po.CODE, "message", t2) };
    }
    function Rn(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qr.h2({ agentId: e2.agentId, message: e2.message.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Bn(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2), placementApprovalState: e2.placementApprovalState };
    }
    function Pn(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qr.o3({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), placementApprovalState: e2.placementApprovalState });
    }
    function Jn(e2, t2) {
      return { _privacyMode: t2, result: Mn(e2.result, t2) };
    }
    function Mn(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Tn(e2.value, t2) };
        case "error":
          return { case: "error", value: Bn(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function qn(e2, t2, r2) {
      return new Qr.$y({ result: Dn(e2.result, t2, r2) });
    }
    function Dn(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Rn(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Pn(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function On(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? kn(e2.args, t2) : void 0, result: void 0 !== e2.result ? Jn(e2.result, t2) : void 0 };
    }
    function Nn(e2, t2, r2) {
      return new Qr.oV({ args: void 0 !== e2.args ? xn(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? qn(e2.result, t2, r2) : void 0 });
    }
    function Fn(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId, agentId: e2.agentId };
    }
    function Un(e2, t2, r2) {
      return new Qr.b6({ toolCallId: e2.toolCallId, agentId: e2.agentId });
    }
    function Ln(e2, t2) {
      return { _privacyMode: t2, workerBcId: e2.workerBcId, message: (0, n.cZ)(e2.message, n.po.CODE, "message", t2) };
    }
    function $n(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qr.lm({ workerBcId: e2.workerBcId, message: e2.message.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Qn(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function jn(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qr.mE({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Gn(e2, t2) {
      return { _privacyMode: t2, result: Hn(e2.result, t2) };
    }
    function Hn(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Ln(e2.value, t2) };
        case "error":
          return { case: "error", value: Qn(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function zn(e2, t2, r2) {
      return new Qr.bY({ result: Wn(e2.result, t2, r2) });
    }
    function Wn(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: $n(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: jn(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Vn(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Fn(e2.args, t2) : void 0, result: void 0 !== e2.result ? Gn(e2.result, t2) : void 0 };
    }
    function Kn(e2, t2, r2) {
      return new Qr.UR({ args: void 0 !== e2.args ? Un(e2.args) : void 0, result: void 0 !== e2.result ? zn(e2.result, t2, r2) : void 0 });
    }
    var Yn = r(76222);
    function Zn(e2, t2) {
      return { _privacyMode: t2, id: e2.id, content: (0, n.cZ)(e2.content, n.po.CODE, "content", t2), status: e2.status, createdAt: e2.createdAt, updatedAt: e2.updatedAt, dependencies: e2.dependencies };
    }
    function Xn(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Yn.kW({ id: e2.id, content: e2.content.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), status: e2.status, createdAt: e2.createdAt, updatedAt: e2.updatedAt, dependencies: e2.dependencies });
    }
    function es(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? rs(e2.args, t2) : void 0, result: void 0 !== e2.result ? ss(e2.result, t2) : void 0 };
    }
    function ts(e2, t2, r2) {
      return new Yn.bk({ args: void 0 !== e2.args ? ns(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? is(e2.result, t2, r2) : void 0 });
    }
    function rs(e2, t2) {
      return { _privacyMode: t2, todos: e2.todos.map((e3) => Zn(e3, t2)), merge: e2.merge };
    }
    function ns(e2, t2, r2) {
      return new Yn.wb({ todos: e2.todos.map((e3) => Xn(e3, t2, r2)), merge: e2.merge });
    }
    function ss(e2, t2) {
      return { _privacyMode: t2, result: os(e2.result, t2) };
    }
    function os(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: cs(e2.value, t2) };
        case "error":
          return { case: "error", value: us(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function is(e2, t2, r2) {
      return new Yn.w9({ result: as(e2.result, t2, r2) });
    }
    function as(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: ls(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: ds(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function cs(e2, t2) {
      return { _privacyMode: t2, todos: e2.todos.map((e3) => Zn(e3, t2)), totalCount: e2.totalCount, wasMerge: e2.wasMerge };
    }
    function ls(e2, t2, r2) {
      return new Yn.q8({ todos: e2.todos.map((e3) => Xn(e3, t2, r2)), totalCount: e2.totalCount, wasMerge: e2.wasMerge });
    }
    function us(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function ds(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Yn.fr({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function ps(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? hs(e2.args, t2) : void 0, result: void 0 !== e2.result ? gs(e2.result, t2) : void 0 };
    }
    function ms(e2, t2, r2) {
      return new Yn.AJ({ args: void 0 !== e2.args ? fs(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? ws(e2.result, t2, r2) : void 0 });
    }
    function hs(e2, t2) {
      return { _privacyMode: t2, statusFilter: e2.statusFilter, idFilter: e2.idFilter };
    }
    function fs(e2, t2, r2) {
      return new Yn.n_({ statusFilter: e2.statusFilter, idFilter: e2.idFilter });
    }
    function gs(e2, t2) {
      return { _privacyMode: t2, result: ys(e2.result, t2) };
    }
    function ys(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: _s(e2.value, t2) };
        case "error":
          return { case: "error", value: Ss(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function ws(e2, t2, r2) {
      return new Yn.Py({ result: vs(e2.result, t2, r2) });
    }
    function vs(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: As(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: bs(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function _s(e2, t2) {
      return { _privacyMode: t2, todos: e2.todos.map((e3) => Zn(e3, t2)), totalCount: e2.totalCount };
    }
    function As(e2, t2, r2) {
      return new Yn.Pf({ todos: e2.todos.map((e3) => Xn(e3, t2, r2)), totalCount: e2.totalCount });
    }
    function Ss(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function bs(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Yn.U5({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var Es = r(48170);
    function Is(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? ks(e2.args, t2) : void 0, result: void 0 !== e2.result ? Ts(e2.result, t2) : void 0 };
    }
    function Cs(e2, t2, r2) {
      return new Es.Ih({ args: void 0 !== e2.args ? xs(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Bs(e2.result, t2, r2) : void 0 });
    }
    function ks(e2, t2) {
      return { _privacyMode: t2, plan: (0, n.cZ)(e2.plan, n.po.CODE, "plan", t2), todos: e2.todos.map((e3) => Zn(e3, t2)), overview: (0, n.cZ)(e2.overview, n.po.CODE, "overview", t2), name: (0, n.cZ)(e2.name, n.po.CODE, "name", t2), isProject: e2.isProject, phases: e2.phases.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, name: (0, n.cZ)(e4.name, n.po.CODE, "name", t3), todos: e4.todos.map((e5) => Zn(e5, t3)) };
      })(e3, t2)) };
    }
    function xs(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Es.zC({ plan: e2.plan.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), todos: e2.todos.map((e3) => Xn(e3, t2, r2)), overview: e2.overview.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), name: e2.name.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), isProject: e2.isProject, phases: e2.phases.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new Es.a0({ name: e4.name.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), todos: e4.todos.map((e5) => Xn(e5, t3, r3)) });
      })(e3, t2, r2)) });
    }
    function Ts(e2, t2) {
      return { _privacyMode: t2, planUri: (0, n.cZ)(e2.planUri, n.po.PATH, "plan_uri", t2), result: Rs(e2.result, t2) };
    }
    function Rs(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Js(e2.value, t2) };
        case "error":
          return { case: "error", value: qs(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Bs(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Es.bK({ planUri: e2.planUri.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), result: Ps(e2.result, t2, r2) });
    }
    function Ps(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Ms(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Ds(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Js(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Ms(e2, t2, r2) {
      return new Es.Jo({});
    }
    function qs(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function Ds(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Es.iY({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Os(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? ks(e2.args, t2) : void 0, toolCallId: e2.toolCallId };
    }
    function Ns(e2, t2, r2) {
      return new Es.vR({ args: void 0 !== e2.args ? xs(e2.args, t2, r2) : void 0, toolCallId: e2.toolCallId });
    }
    function Fs(e2, t2) {
      return { _privacyMode: t2, result: void 0 !== e2.result ? Ts(e2.result, t2) : void 0 };
    }
    function Us(e2, t2, r2) {
      return new Es.gz({ result: void 0 !== e2.result ? Bs(e2.result, t2, r2) : void 0 });
    }
    var Ls = r(19260);
    function $s(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), toolCallId: e2.toolCallId };
    }
    function Qs(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ls.dn({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallId: e2.toolCallId });
    }
    function js(e2, t2) {
      return { _privacyMode: t2, result: Gs(e2.result, t2) };
    }
    function Gs(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Ws(e2.value, t2) };
        case "fileNotFound":
          return { case: "fileNotFound", value: Ks(e2.value, t2) };
        case "notFile":
          return { case: "notFile", value: Zs(e2.value, t2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: eo(e2.value, t2) };
        case "fileBusy":
          return { case: "fileBusy", value: ro(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: so(e2.value, t2) };
        case "error":
          return { case: "error", value: io(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Hs(e2, t2, r2) {
      return new Ls.Pi({ result: zs(e2.result, t2, r2) });
    }
    function zs(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Vs(e2.value, t2, r2) };
        case "fileNotFound":
          return { case: "fileNotFound", value: Ys(e2.value, t2, r2) };
        case "notFile":
          return { case: "notFile", value: Xs(e2.value, t2, r2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: to(e2.value, t2, r2) };
        case "fileBusy":
          return { case: "fileBusy", value: no(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: oo(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: ao(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ws(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), deletedFile: (0, n.cZ)(e2.deletedFile, n.po.PATH, "deleted_file", t2), fileSize: e2.fileSize, prevContent: (0, n.cZ)(e2.prevContent, n.po.CODE, "prev_content", t2) };
    }
    function Vs(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ls.fl({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), deletedFile: e2.deletedFile.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), fileSize: e2.fileSize, prevContent: e2.prevContent.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Ks(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2) };
    }
    function Ys(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ls.n0({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Zs(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), actualType: e2.actualType };
    }
    function Xs(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ls.LX({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), actualType: e2.actualType });
    }
    function eo(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), clientVisibleError: (0, n.cZ)(e2.clientVisibleError, n.po.CODE, "client_visible_error", t2), isReadonly: e2.isReadonly };
    }
    function to(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ls.QG({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), clientVisibleError: e2.clientVisibleError.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), isReadonly: e2.isReadonly });
    }
    function ro(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2) };
    }
    function no(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ls.vX({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function so(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function oo(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ls.iq({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function io(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function ao(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ls.GU({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var co = r(50565);
    function lo(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? $s(e2.args, t2) : void 0, result: void 0 !== e2.result ? js(e2.result, t2) : void 0 };
    }
    function uo(e2, t2, r2) {
      return new co.Y({ args: void 0 !== e2.args ? Qs(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Hs(e2.result, t2, r2) : void 0 });
    }
    var po = r(55525);
    function mo(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId, prUrl: e2.prUrl, addLabels: e2.addLabels.map((e3) => (0, n.cZ)(e3, n.po.PATH, "add_labels", t2)), removeLabels: e2.removeLabels.map((e3) => (0, n.cZ)(e3, n.po.PATH, "remove_labels", t2)) };
    }
    function ho(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new po.TR({ toolCallId: e2.toolCallId, prUrl: e2.prUrl, addLabels: e2.addLabels.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), removeLabels: e2.removeLabels.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })) });
    }
    function fo(e2, t2) {
      return { _privacyMode: t2, result: go(e2.result, t2) };
    }
    function go(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: vo(e2.value, t2) };
        case "error":
          return { case: "error", value: Ao(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function yo(e2, t2, r2) {
      return new po.xc({ result: wo(e2.result, t2, r2) });
    }
    function wo(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: _o(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: So(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function vo(e2, t2) {
      return { _privacyMode: t2, prUrl: e2.prUrl, prNumber: e2.prNumber, message: (0, n.cZ)(e2.message, n.po.CODE, "message", t2) };
    }
    function _o(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new po.dT({ prUrl: e2.prUrl, prNumber: e2.prNumber, message: e2.message.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Ao(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function So(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new po.M2({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function bo(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? mo(e2.args, t2) : void 0, result: void 0 !== e2.result ? fo(e2.result, t2) : void 0 };
    }
    function Eo(e2, t2, r2) {
      return new po.Kn({ args: void 0 !== e2.args ? ho(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? yo(e2.result, t2, r2) : void 0 });
    }
    var Io = r(6450);
    function Co(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), streamContent: void 0 !== e2.streamContent ? (0, n.cZ)(e2.streamContent, n.po.CODE, "stream_content", t2) : void 0 };
    }
    function ko(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Io.g$({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), streamContent: e2.streamContent?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function xo(e2, t2) {
      return { _privacyMode: t2, result: To(e2.result, t2) };
    }
    function To(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Po(e2.value, t2) };
        case "fileNotFound":
          return { case: "fileNotFound", value: Mo(e2.value, t2) };
        case "readPermissionDenied":
          return { case: "readPermissionDenied", value: Do(e2.value, t2) };
        case "writePermissionDenied":
          return { case: "writePermissionDenied", value: No(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: Uo(e2.value, t2) };
        case "error":
          return { case: "error", value: $o(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ro(e2, t2, r2) {
      return new Io.Kc({ result: Bo(e2.result, t2, r2) });
    }
    function Bo(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Jo(e2.value, t2, r2) };
        case "fileNotFound":
          return { case: "fileNotFound", value: qo(e2.value, t2, r2) };
        case "readPermissionDenied":
          return { case: "readPermissionDenied", value: Oo(e2.value, t2, r2) };
        case "writePermissionDenied":
          return { case: "writePermissionDenied", value: Fo(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: Lo(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Qo(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Po(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), linesAdded: e2.linesAdded, linesRemoved: e2.linesRemoved, diffString: void 0 !== e2.diffString ? (0, n.cZ)(e2.diffString, n.po.CODE, "diff_string", t2) : void 0, beforeFullFileContent: void 0 !== e2.beforeFullFileContent ? (0, n.cZ)(e2.beforeFullFileContent, n.po.CODE, "before_full_file_content", t2) : void 0, afterFullFileContent: (0, n.cZ)(e2.afterFullFileContent, n.po.CODE, "after_full_file_content", t2), message: void 0 !== e2.message ? (0, n.cZ)(e2.message, n.po.CODE, "message", t2) : void 0 };
    }
    function Jo(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Io.SG({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), linesAdded: e2.linesAdded, linesRemoved: e2.linesRemoved, diffString: e2.diffString?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), beforeFullFileContent: e2.beforeFullFileContent?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), afterFullFileContent: e2.afterFullFileContent.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), message: e2.message?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Mo(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2) };
    }
    function qo(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Io.kF({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Do(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2) };
    }
    function Oo(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Io.nF({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function No(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2), isReadonly: e2.isReadonly };
    }
    function Fo(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Io.uK({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), isReadonly: e2.isReadonly });
    }
    function Uo(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function Lo(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Io.pl({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function $o(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2), modelVisibleError: void 0 !== e2.modelVisibleError ? (0, n.cZ)(e2.modelVisibleError, n.po.CODE, "model_visible_error", t2) : void 0 };
    }
    function Qo(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Io.F({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), modelVisibleError: e2.modelVisibleError?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function jo(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Co(e2.args, t2) : void 0, result: void 0 !== e2.result ? xo(e2.result, t2) : void 0 };
    }
    function Go(e2, t2, r2) {
      return new Io.T6({ args: void 0 !== e2.args ? ko(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Ro(e2.result, t2, r2) : void 0 });
    }
    function Ho(e2, t2) {
      return { _privacyMode: t2, streamContentDelta: (0, n.cZ)(e2.streamContentDelta, n.po.CODE, "stream_content_delta", t2) };
    }
    function zo(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Io.fw({ streamContentDelta: e2.streamContentDelta.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var Wo = r(21819);
    function Vo(e2, t2) {
      return { _privacyMode: t2, bcIds: e2.bcIds, sources: e2.sources, statuses: e2.statuses, includeTeamWide: e2.includeTeamWide, includeArchived: e2.includeArchived, limit: e2.limit, includeTranscript: e2.includeTranscript, activeSince: e2.activeSince };
    }
    function Ko(e2, t2, r2) {
      return new Wo.wd({ bcIds: e2.bcIds, sources: e2.sources, statuses: e2.statuses, includeTeamWide: e2.includeTeamWide, includeArchived: e2.includeArchived, limit: e2.limit, includeTranscript: e2.includeTranscript, activeSince: e2.activeSince });
    }
    function Yo(e2, t2) {
      return { _privacyMode: t2, result: Zo(e2.result, t2) };
    }
    function Zo(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: ti(e2.value, t2) };
        case "error":
          return { case: "error", value: ni(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Xo(e2, t2, r2) {
      return new Wo.K2({ result: ei(e2.result, t2, r2) });
    }
    function ei(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: ri(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: si(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function ti(e2, t2) {
      return { _privacyMode: t2, summary: (0, n.cZ)(e2.summary, n.po.CODE, "summary", t2), agentCount: e2.agentCount, writtenPaths: e2.writtenPaths.map((e3) => (0, n.cZ)(e3, n.po.PATH, "written_paths", t2)), unavailableBcIds: e2.unavailableBcIds };
    }
    function ri(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Wo.gD({ summary: e2.summary.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), agentCount: e2.agentCount, writtenPaths: e2.writtenPaths.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), unavailableBcIds: e2.unavailableBcIds });
    }
    function ni(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function si(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Wo.XH({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function oi(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Vo(e2.args, t2) : void 0, result: void 0 !== e2.result ? Yo(e2.result, t2) : void 0 };
    }
    function ii(e2, t2, r2) {
      return new Wo.H({ args: void 0 !== e2.args ? Ko(e2.args) : void 0, result: void 0 !== e2.result ? Xo(e2.result, t2, r2) : void 0 });
    }
    var ai = r(31489);
    function ci(e2, t2) {
      return { _privacyMode: t2, url: e2.url, toolCallId: e2.toolCallId };
    }
    function li(e2, t2, r2) {
      return new ai.UM({ url: e2.url, toolCallId: e2.toolCallId });
    }
    function ui(e2, t2) {
      return { _privacyMode: t2, result: di(e2.result, t2) };
    }
    function di(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: hi(e2.value, t2) };
        case "error":
          return { case: "error", value: gi(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function pi(e2, t2, r2) {
      return new ai.uN({ result: mi(e2.result, t2, r2) });
    }
    function mi(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: fi(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: yi(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function hi(e2, t2) {
      return { _privacyMode: t2, url: e2.url, content: (0, n.cZ)(e2.content, n.po.CODE, "content", t2), statusCode: e2.statusCode, contentType: e2.contentType };
    }
    function fi(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ai.Uk({ url: e2.url, content: e2.content.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), statusCode: e2.statusCode, contentType: e2.contentType });
    }
    function gi(e2, t2) {
      return { _privacyMode: t2, url: e2.url, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function yi(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ai.fk({ url: e2.url, error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var wi = r(98320);
    function vi(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? ci(e2.args, t2) : void 0, result: void 0 !== e2.result ? ui(e2.result, t2) : void 0 };
    }
    function _i(e2, t2, r2) {
      return new wi.b({ args: void 0 !== e2.args ? li(e2.args) : void 0, result: void 0 !== e2.result ? pi(e2.result, t2, r2) : void 0 });
    }
    var Ai = r(97747);
    function Si(e2, t2) {
      return { _privacyMode: t2, description: (0, n.cZ)(e2.description, n.po.CODE, "description", t2), filePath: void 0 !== e2.filePath ? (0, n.cZ)(e2.filePath, n.po.PATH, "file_path", t2) : void 0, referenceImagePaths: e2.referenceImagePaths.map((e3) => (0, n.cZ)(e3, n.po.PATH, "reference_image_paths", t2)), aspectRatio: e2.aspectRatio };
    }
    function bi(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ai.u7({ description: e2.description.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), filePath: e2.filePath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), referenceImagePaths: e2.referenceImagePaths.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), aspectRatio: e2.aspectRatio });
    }
    function Ei(e2, t2) {
      return { _privacyMode: t2, result: Ii(e2.result, t2) };
    }
    function Ii(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: xi(e2.value, t2) };
        case "error":
          return { case: "error", value: Ri(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ci(e2, t2, r2) {
      return new Ai.k4({ result: ki(e2.result, t2, r2) });
    }
    function ki(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Ti(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Bi(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function xi(e2, t2) {
      return { _privacyMode: t2, filePath: (0, n.cZ)(e2.filePath, n.po.PATH, "file_path", t2), imageData: (0, n.cZ)(e2.imageData, n.po.CODE, "image_data", t2) };
    }
    function Ti(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ai.gS({ filePath: e2.filePath.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), imageData: e2.imageData.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Ri(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function Bi(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ai.Ly({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Pi(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Si(e2.args, t2) : void 0, result: void 0 !== e2.result ? Ei(e2.result, t2) : void 0 };
    }
    function Ji(e2, t2, r2) {
      return new Ai.r9({ args: void 0 !== e2.args ? bi(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Ci(e2.result, t2, r2) : void 0 });
    }
    function Mi(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Si(e2.args, t2) : void 0, toolCallId: e2.toolCallId };
    }
    function qi(e2, t2, r2) {
      return new Ai.Uj({ args: void 0 !== e2.args ? bi(e2.args, t2, r2) : void 0, toolCallId: e2.toolCallId });
    }
    function Di(e2, t2) {
      return { _privacyMode: t2, result: Oi(e2.result, t2) };
    }
    function Oi(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "approved":
          return { case: "approved", value: Ui(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: $i(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ni(e2, t2, r2) {
      return new Ai.vW({ result: Fi(e2.result, t2, r2) });
    }
    function Fi(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "approved":
          return { case: "approved", value: Li(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: Qi(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ui(e2, t2) {
      return { _privacyMode: t2, description: (0, n.cZ)(e2.description, n.po.CODE, "description", t2) };
    }
    function Li(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ai.l3({ description: e2.description.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function $i(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function Qi(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ai.Uq({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var ji = r(92093);
    function Gi(e2, t2) {
      return { _privacyMode: t2, prompt: (0, n.cZ)(e2.prompt, n.po.CODE, "prompt", t2), filePath: void 0 !== e2.filePath ? (0, n.cZ)(e2.filePath, n.po.PATH, "file_path", t2) : void 0, imagePath: void 0 !== e2.imagePath ? (0, n.cZ)(e2.imagePath, n.po.PATH, "image_path", t2) : void 0, referenceImagePaths: e2.referenceImagePaths.map((e3) => (0, n.cZ)(e3, n.po.PATH, "reference_image_paths", t2)), durationSeconds: e2.durationSeconds, aspectRatio: e2.aspectRatio, resolution: e2.resolution };
    }
    function Hi(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ji.sb({ prompt: e2.prompt.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), filePath: e2.filePath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), imagePath: e2.imagePath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), referenceImagePaths: e2.referenceImagePaths.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), durationSeconds: e2.durationSeconds, aspectRatio: e2.aspectRatio, resolution: e2.resolution });
    }
    function zi(e2, t2) {
      return { _privacyMode: t2, result: Wi(e2.result, t2) };
    }
    function Wi(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Yi(e2.value, t2) };
        case "error":
          return { case: "error", value: Xi(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Vi(e2, t2, r2) {
      return new ji.gl({ result: Ki(e2.result, t2, r2) });
    }
    function Ki(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Zi(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: ea(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Yi(e2, t2) {
      return { _privacyMode: t2, filePath: (0, n.cZ)(e2.filePath, n.po.PATH, "file_path", t2), durationSeconds: e2.durationSeconds };
    }
    function Zi(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ji.e4({ filePath: e2.filePath.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), durationSeconds: e2.durationSeconds });
    }
    function Xi(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function ea(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ji.do({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function ta(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Gi(e2.args, t2) : void 0, result: void 0 !== e2.result ? zi(e2.result, t2) : void 0 };
    }
    function ra(e2, t2, r2) {
      return new ji.jm({ args: void 0 !== e2.args ? Hi(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Vi(e2.result, t2, r2) : void 0 });
    }
    var na = r(62379);
    function sa(e2, t2) {
      return { _privacyMode: t2, server: e2.server, toolName: e2.toolName, pattern: e2.pattern, toolCallId: e2.toolCallId };
    }
    function oa(e2, t2, r2) {
      return new na.VM({ server: e2.server, toolName: e2.toolName, pattern: e2.pattern, toolCallId: e2.toolCallId });
    }
    function ia(e2, t2) {
      return { _privacyMode: t2, result: aa(e2.result, t2) };
    }
    function aa(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: ua(e2.value, t2) };
        case "error":
          return { case: "error", value: pa(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function ca(e2, t2, r2) {
      return new na.Al({ result: la(e2.result, t2, r2) });
    }
    function la(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: da(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: ma(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function ua(e2, t2) {
      return { _privacyMode: t2, content: (0, n.cZ)(e2.content, n.po.CODE, "content", t2), outputFilePath: void 0 !== e2.outputFilePath ? (0, n.cZ)(e2.outputFilePath, n.po.PATH, "output_file_path", t2) : void 0 };
    }
    function da(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new na.RN({ content: e2.content.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), outputFilePath: e2.outputFilePath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function pa(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function ma(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new na.iz({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function ha(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? sa(e2.args, t2) : void 0, result: void 0 !== e2.result ? ia(e2.result, t2) : void 0 };
    }
    function fa(e2, t2, r2) {
      return new na.mJ({ args: void 0 !== e2.args ? oa(e2.args) : void 0, result: void 0 !== e2.result ? ca(e2.result, t2, r2) : void 0 });
    }
    var ga = r(58544);
    function ya(e2, t2) {
      return { _privacyMode: t2, targetDirectory: void 0 !== e2.targetDirectory ? (0, n.cZ)(e2.targetDirectory, n.po.PATH, "target_directory", t2) : void 0, globPattern: (0, n.cZ)(e2.globPattern, n.po.PATH, "glob_pattern", t2) };
    }
    function wa(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ga.kt({ targetDirectory: e2.targetDirectory?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), globPattern: e2.globPattern.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function va(e2, t2) {
      return { _privacyMode: t2, result: _a(e2.result, t2) };
    }
    function _a(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Ia(e2.value, t2) };
        case "error":
          return { case: "error", value: ba(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Aa(e2, t2, r2) {
      return new ga.g1({ result: Sa(e2.result, t2, r2) });
    }
    function Sa(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Ca(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Ea(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function ba(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function Ea(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ga.NU({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Ia(e2, t2) {
      return { _privacyMode: t2, pattern: (0, n.cZ)(e2.pattern, n.po.PATH, "pattern", t2), path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), files: e2.files.map((e3) => (0, n.cZ)(e3, n.po.PATH, "files", t2)), totalFiles: e2.totalFiles, clientTruncated: e2.clientTruncated, ripgrepTruncated: e2.ripgrepTruncated };
    }
    function Ca(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ga.wJ({ pattern: e2.pattern.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), files: e2.files.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), totalFiles: e2.totalFiles, clientTruncated: e2.clientTruncated, ripgrepTruncated: e2.ripgrepTruncated });
    }
    function ka(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? ya(e2.args, t2) : void 0, result: void 0 !== e2.result ? va(e2.result, t2) : void 0 };
    }
    function xa(e2, t2, r2) {
      return new ga.FM({ args: void 0 !== e2.args ? wa(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Aa(e2.result, t2, r2) : void 0 });
    }
    var Ta = r(53145);
    function Ra(e2, t2) {
      return { _privacyMode: t2, objective: (0, n.cZ)(e2.objective, n.po.CODE, "objective", t2) };
    }
    function Ba(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ta.L4({ objective: e2.objective.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Pa(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Ja(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function Ma(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ta.uQ({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function qa(e2, t2) {
      return { _privacyMode: t2, result: Da(e2.result, t2) };
    }
    function Da(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Pa(e2.value, t2) };
        case "error":
          return { case: "error", value: Ja(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Oa(e2, t2, r2) {
      return new Ta.dl({ result: Na(e2.result, t2, r2) });
    }
    function Na(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: (e2.value, new Ta.XV({})) };
        case "error":
          return { case: "error", value: Ma(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Fa(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Ra(e2.args, t2) : void 0, result: void 0 !== e2.result ? qa(e2.result, t2) : void 0 };
    }
    function Ua(e2, t2, r2) {
      return new Ta.GS({ args: void 0 !== e2.args ? Ba(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Oa(e2.result, t2, r2) : void 0 });
    }
    function La(e2, t2) {
      return { _privacyMode: t2, status: e2.status };
    }
    function $a(e2, t2, r2) {
      return new Ta._F({ status: e2.status });
    }
    function Qa(e2, t2) {
      return { _privacyMode: t2, status: e2.status };
    }
    function ja(e2, t2) {
      return { _privacyMode: t2, result: Ga(e2.result, t2) };
    }
    function Ga(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Qa(e2.value, t2) };
        case "error":
          return { case: "error", value: Ja(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ha(e2, t2, r2) {
      return new Ta.KD({ result: za(e2.result, t2, r2) });
    }
    function za(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: (n2 = e2.value, new Ta.ar({ status: n2.status })) };
        case "error":
          return { case: "error", value: Ma(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
      var n2;
    }
    function Wa(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? La(e2.args, t2) : void 0, result: void 0 !== e2.result ? ja(e2.result, t2) : void 0 };
    }
    function Va(e2, t2, r2) {
      return new Ta.Ll({ args: void 0 !== e2.args ? $a(e2.args) : void 0, result: void 0 !== e2.result ? Ha(e2.result, t2, r2) : void 0 });
    }
    var Ka = r(13574);
    function Ya(e2, t2) {
      return { _privacyMode: t2, decisionLogPath: void 0 !== e2.decisionLogPath ? (0, n.cZ)(e2.decisionLogPath, n.po.PATH, "decision_log_path", t2) : void 0, logFormat: e2.logFormat };
    }
    function Za(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ka.Qq({ decisionLogPath: e2.decisionLogPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), logFormat: e2.logFormat });
    }
    function Xa(e2, t2) {
      return { _privacyMode: t2, version: e2.version, defaultAction: e2.defaultAction, deny: e2.deny, allow: e2.allow, logging: void 0 !== e2.logging ? Ya(e2.logging, t2) : void 0 };
    }
    function ec(e2, t2, r2) {
      return new Ka.RB({ version: e2.version, defaultAction: e2.defaultAction, deny: e2.deny, allow: e2.allow, logging: void 0 !== e2.logging ? Za(e2.logging, t2, r2) : void 0 });
    }
    function tc(e2, t2) {
      return { _privacyMode: t2, type: e2.type, networkAccess: e2.networkAccess, additionalReadwritePaths: e2.additionalReadwritePaths.map((e3) => (0, n.cZ)(e3, n.po.PATH, "additional_readwrite_paths", t2)), additionalReadonlyPaths: e2.additionalReadonlyPaths.map((e3) => (0, n.cZ)(e3, n.po.PATH, "additional_readonly_paths", t2)), debugOutputDir: void 0 !== e2.debugOutputDir ? (0, n.cZ)(e2.debugOutputDir, n.po.PATH, "debug_output_dir", t2) : void 0, disableTmpWrite: e2.disableTmpWrite, allowlistEscalated: e2.allowlistEscalated, enableSharedBuildCache: e2.enableSharedBuildCache, networkPolicy: void 0 !== e2.networkPolicy ? Xa(e2.networkPolicy, t2) : void 0, networkPolicyStrict: e2.networkPolicyStrict, captureDenies: e2.captureDenies, skipStatsigDefaults: e2.skipStatsigDefaults, readBoundary: e2.readBoundary, additionalReadPaths: e2.additionalReadPaths.map((e3) => (0, n.cZ)(e3, n.po.PATH, "additional_read_paths", t2)) };
    }
    function rc(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ka.Mw({ type: e2.type, networkAccess: e2.networkAccess, additionalReadwritePaths: e2.additionalReadwritePaths.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), additionalReadonlyPaths: e2.additionalReadonlyPaths.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), debugOutputDir: e2.debugOutputDir?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), disableTmpWrite: e2.disableTmpWrite, allowlistEscalated: e2.allowlistEscalated, enableSharedBuildCache: e2.enableSharedBuildCache, networkPolicy: void 0 !== e2.networkPolicy ? ec(e2.networkPolicy, t2, r2) : void 0, networkPolicyStrict: e2.networkPolicyStrict, captureDenies: e2.captureDenies, skipStatsigDefaults: e2.skipStatsigDefaults, readBoundary: e2.readBoundary, additionalReadPaths: e2.additionalReadPaths.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })) });
    }
    var nc = r(59903);
    function sc(e2, t2) {
      return { _privacyMode: t2, pattern: (0, n.cZ)(e2.pattern, n.po.CODE, "pattern", t2), path: void 0 !== e2.path ? (0, n.cZ)(e2.path, n.po.PATH, "path", t2) : void 0, glob: void 0 !== e2.glob ? (0, n.cZ)(e2.glob, n.po.PATH, "glob", t2) : void 0, outputMode: e2.outputMode, contextBefore: e2.contextBefore, contextAfter: e2.contextAfter, context: e2.context, caseInsensitive: e2.caseInsensitive, type: e2.type, headLimit: e2.headLimit, multiline: e2.multiline, sort: e2.sort, sortAscending: e2.sortAscending, toolCallId: e2.toolCallId, sandboxPolicy: void 0 !== e2.sandboxPolicy ? tc(e2.sandboxPolicy, t2) : void 0, offset: e2.offset };
    }
    function oc(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new nc.Qj({ pattern: e2.pattern.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), path: e2.path?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), glob: e2.glob?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), outputMode: e2.outputMode, contextBefore: e2.contextBefore, contextAfter: e2.contextAfter, context: e2.context, caseInsensitive: e2.caseInsensitive, type: e2.type, headLimit: e2.headLimit, multiline: e2.multiline, sort: e2.sort, sortAscending: e2.sortAscending, toolCallId: e2.toolCallId, sandboxPolicy: void 0 !== e2.sandboxPolicy ? rc(e2.sandboxPolicy, t2, r2) : void 0, offset: e2.offset });
    }
    function ic(e2, t2) {
      return { _privacyMode: t2, result: ac(e2.result, t2) };
    }
    function ac(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: pc(e2.value, t2) };
        case "error":
          return { case: "error", value: uc(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function cc(e2, t2, r2) {
      return new nc.Ud({ result: lc(e2.result, t2, r2) });
    }
    function lc(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: mc(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: dc(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function uc(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function dc(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new nc.ts({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function pc(e2, t2) {
      return { _privacyMode: t2, pattern: (0, n.cZ)(e2.pattern, n.po.CODE, "pattern", t2), path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), outputMode: e2.outputMode, workspaceResults: new Map(Object.entries(e2.workspaceResults).map(([e3, r2]) => [(0, n.cZ)(e3, n.po.PATH, "workspace_results", t2), hc(r2, t2)])), activeEditorResult: void 0 !== e2.activeEditorResult ? hc(e2.activeEditorResult, t2) : void 0 };
    }
    function mc(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new nc._0({ pattern: e2.pattern.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), outputMode: e2.outputMode, workspaceResults: Object.fromEntries(Array.from(e2.workspaceResults.entries()).map(([e3, o2]) => [e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), gc(o2, t2, r2)])), activeEditorResult: void 0 !== e2.activeEditorResult ? gc(e2.activeEditorResult, t2, r2) : void 0 });
    }
    function hc(e2, t2) {
      return { _privacyMode: t2, result: fc(e2.result, t2) };
    }
    function fc(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "count":
          return { case: "count", value: wc(e2.value, t2) };
        case "files":
          return { case: "files", value: _c(e2.value, t2) };
        case "content":
          return { case: "content", value: Sc(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function gc(e2, t2, r2) {
      return new nc.vD({ result: yc(e2.result, t2, r2) });
    }
    function yc(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "count":
          return { case: "count", value: vc(e2.value, t2, r2) };
        case "files":
          return { case: "files", value: Ac(e2.value, t2, r2) };
        case "content":
          return { case: "content", value: bc(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function wc(e2, t2) {
      return { _privacyMode: t2, counts: e2.counts.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, file: (0, n.cZ)(e4.file, n.po.PATH, "file", t3), count: e4.count };
      })(e3, t2)), totalFiles: e2.totalFiles, totalMatches: e2.totalMatches, clientTruncated: e2.clientTruncated, ripgrepTruncated: e2.ripgrepTruncated, headLimitApplied: e2.headLimitApplied, offsetApplied: e2.offsetApplied };
    }
    function vc(e2, t2, r2) {
      return new nc.xA({ counts: e2.counts.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new nc.sS({ file: e4.file.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), count: e4.count });
      })(e3, t2, r2)), totalFiles: e2.totalFiles, totalMatches: e2.totalMatches, clientTruncated: e2.clientTruncated, ripgrepTruncated: e2.ripgrepTruncated, headLimitApplied: e2.headLimitApplied, offsetApplied: e2.offsetApplied });
    }
    function _c(e2, t2) {
      return { _privacyMode: t2, files: e2.files.map((e3) => (0, n.cZ)(e3, n.po.PATH, "files", t2)), totalFiles: e2.totalFiles, clientTruncated: e2.clientTruncated, ripgrepTruncated: e2.ripgrepTruncated, headLimitApplied: e2.headLimitApplied, offsetApplied: e2.offsetApplied };
    }
    function Ac(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new nc.T7({ files: e2.files.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), totalFiles: e2.totalFiles, clientTruncated: e2.clientTruncated, ripgrepTruncated: e2.ripgrepTruncated, headLimitApplied: e2.headLimitApplied, offsetApplied: e2.offsetApplied });
    }
    function Sc(e2, t2) {
      return { _privacyMode: t2, matches: e2.matches.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, file: (0, n.cZ)(e4.file, n.po.PATH, "file", t3), matches: e4.matches.map((e5) => (function(e6, t4) {
          return { _privacyMode: t4, lineNumber: e6.lineNumber, content: (0, n.cZ)(e6.content, n.po.CODE, "content", t4), contentTruncated: e6.contentTruncated, isContextLine: e6.isContextLine };
        })(e5, t3)) };
      })(e3, t2)), totalLines: e2.totalLines, totalMatchedLines: e2.totalMatchedLines, clientTruncated: e2.clientTruncated, ripgrepTruncated: e2.ripgrepTruncated, headLimitApplied: e2.headLimitApplied, offsetApplied: e2.offsetApplied };
    }
    function bc(e2, t2, r2) {
      return new nc.Zp({ matches: e2.matches.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new nc.uI({ file: e4.file.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), matches: e4.matches.map((e5) => (function(e6, t4, r4) {
          const n3 = r4?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r4?.enforcing;
          return new nc.dx({ lineNumber: e6.lineNumber, content: e6.content.unwrap(t4, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), contentTruncated: e6.contentTruncated, isContextLine: e6.isContextLine });
        })(e5, t3, r3)) });
      })(e3, t2, r2)), totalLines: e2.totalLines, totalMatchedLines: e2.totalMatchedLines, clientTruncated: e2.clientTruncated, ripgrepTruncated: e2.ripgrepTruncated, headLimitApplied: e2.headLimitApplied, offsetApplied: e2.offsetApplied });
    }
    var Ec = r(15354);
    function Ic(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? sc(e2.args, t2) : void 0, result: void 0 !== e2.result ? ic(e2.result, t2) : void 0 };
    }
    function Cc(e2, t2, r2) {
      return new Ec.j({ args: void 0 !== e2.args ? oc(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? cc(e2.result, t2, r2) : void 0 });
    }
    var kc = r(21180);
    function xc(e2, t2) {
      return { _privacyMode: t2, hookEventName: e2.hookEventName, content: (0, n.cZ)(e2.content, n.po.CODE, "content", t2) };
    }
    function Tc(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new kc.C({ hookEventName: e2.hookEventName, content: e2.content.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var Rc = r(72730);
    function Bc(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), ignore: e2.ignore.map((e3) => (0, n.cZ)(e3, n.po.PATH, "ignore", t2)), toolCallId: e2.toolCallId, sandboxPolicy: void 0 !== e2.sandboxPolicy ? tc(e2.sandboxPolicy, t2) : void 0, timeoutMs: e2.timeoutMs };
    }
    function Pc(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Rc.xe({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), ignore: e2.ignore.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), toolCallId: e2.toolCallId, sandboxPolicy: void 0 !== e2.sandboxPolicy ? rc(e2.sandboxPolicy, t2, r2) : void 0, timeoutMs: e2.timeoutMs });
    }
    function Jc(e2, t2) {
      return { _privacyMode: t2, result: Mc(e2.result, t2) };
    }
    function Mc(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Oc(e2.value, t2) };
        case "error":
          return { case: "error", value: Lc(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: Qc(e2.value, t2) };
        case "timeout":
          return { case: "timeout", value: Gc(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function qc(e2, t2, r2) {
      return new Rc.fv({ result: Dc(e2.result, t2, r2) });
    }
    function Dc(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Nc(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: $c(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: jc(e2.value, t2, r2) };
        case "timeout":
          return { case: "timeout", value: Hc(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Oc(e2, t2) {
      return { _privacyMode: t2, directoryTreeRoot: void 0 !== e2.directoryTreeRoot ? Fc(e2.directoryTreeRoot, t2) : void 0 };
    }
    function Nc(e2, t2, r2) {
      return new Rc.PC({ directoryTreeRoot: void 0 !== e2.directoryTreeRoot ? Uc(e2.directoryTreeRoot, t2, r2) : void 0 });
    }
    function Fc(e2, t2) {
      return { _privacyMode: t2, absPath: (0, n.cZ)(e2.absPath, n.po.PATH, "abs_path", t2), childrenDirs: e2.childrenDirs.map((e3) => Fc(e3, t2)), childrenFiles: e2.childrenFiles.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, name: (0, n.cZ)(e4.name, n.po.PATH, "name", t3), terminalMetadata: void 0 !== e4.terminalMetadata ? zc(e4.terminalMetadata, t3) : void 0 };
      })(e3, t2)), childrenWereProcessed: e2.childrenWereProcessed, fullSubtreeExtensionCounts: new Map(Object.entries(e2.fullSubtreeExtensionCounts)), numFiles: e2.numFiles };
    }
    function Uc(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Rc.vq({ absPath: e2.absPath.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), childrenDirs: e2.childrenDirs.map((e3) => Uc(e3, t2, r2)), childrenFiles: e2.childrenFiles.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new Rc.ur({ name: e4.name.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), terminalMetadata: void 0 !== e4.terminalMetadata ? Wc(e4.terminalMetadata, t3, r3) : void 0 });
      })(e3, t2, r2)), childrenWereProcessed: e2.childrenWereProcessed, fullSubtreeExtensionCounts: Object.fromEntries(e2.fullSubtreeExtensionCounts.entries()), numFiles: e2.numFiles });
    }
    function Lc(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function $c(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Rc.uj({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Qc(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function jc(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Rc.k2({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Gc(e2, t2) {
      return { _privacyMode: t2, directoryTreeRoot: void 0 !== e2.directoryTreeRoot ? Fc(e2.directoryTreeRoot, t2) : void 0 };
    }
    function Hc(e2, t2, r2) {
      return new Rc.ze({ directoryTreeRoot: void 0 !== e2.directoryTreeRoot ? Uc(e2.directoryTreeRoot, t2, r2) : void 0 });
    }
    function zc(e2, t2) {
      return { _privacyMode: t2, cwd: void 0 !== e2.cwd ? (0, n.cZ)(e2.cwd, n.po.PATH, "cwd", t2) : void 0, lastCommands: e2.lastCommands.map((e3) => Vc(e3, t2)), lastModifiedMs: e2.lastModifiedMs, currentCommand: void 0 !== e2.currentCommand ? Vc(e2.currentCommand, t2) : void 0 };
    }
    function Wc(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Rc.Y$({ cwd: e2.cwd?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), lastCommands: e2.lastCommands.map((e3) => Kc(e3, t2, r2)), lastModifiedMs: e2.lastModifiedMs, currentCommand: void 0 !== e2.currentCommand ? Kc(e2.currentCommand, t2, r2) : void 0 });
    }
    function Vc(e2, t2) {
      return { _privacyMode: t2, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), exitCode: e2.exitCode, timestampMs: e2.timestampMs, durationMs: e2.durationMs };
    }
    function Kc(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Rc.Sf({ command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), exitCode: e2.exitCode, timestampMs: e2.timestampMs, durationMs: e2.durationMs });
    }
    var Yc = r(14151);
    function Zc(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Bc(e2.args, t2) : void 0, result: void 0 !== e2.result ? Jc(e2.result, t2) : void 0 };
    }
    function Xc(e2, t2, r2) {
      return new Yc.q({ args: void 0 !== e2.args ? Pc(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? qc(e2.result, t2, r2) : void 0 });
    }
    var el = r(36038), tl = r(34175);
    function rl(e2, t2) {
      return { _privacyMode: t2, name: e2.name, providerIdentifier: e2.providerIdentifier, toolName: e2.toolName, description: (0, n.cZ)(e2.description, n.po.CODE, "description", t2), inputSchema: e2.inputSchema?.toJson(), inputSchemaJson: e2.inputSchemaJson, outputSchemaJson: e2.outputSchemaJson, annotationsJson: e2.annotationsJson, metaJson: void 0 !== e2.metaJson ? (0, n.cZ)(e2.metaJson, n.po.CODE, "meta_json", t2) : void 0 };
    }
    function nl(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new tl.gd({ name: e2.name, providerIdentifier: e2.providerIdentifier, toolName: e2.toolName, description: e2.description.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), inputSchema: void 0 !== e2.inputSchema ? el.Value.fromJson(e2.inputSchema) : void 0, inputSchemaJson: e2.inputSchemaJson, outputSchemaJson: e2.outputSchemaJson, annotationsJson: e2.annotationsJson, metaJson: e2.metaJson?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function sl(e2, t2) {
      return { _privacyMode: t2, serverName: e2.serverName, instructions: (0, n.cZ)(e2.instructions, n.po.CODE, "instructions", t2), serverIdentifier: e2.serverIdentifier };
    }
    function ol(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new tl.I0({ serverName: e2.serverName, instructions: e2.instructions.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), serverIdentifier: e2.serverIdentifier });
    }
    function il(e2, t2) {
      return { _privacyMode: t2, serverName: e2.serverName, serverIdentifier: e2.serverIdentifier, folderPath: void 0 !== e2.folderPath ? (0, n.cZ)(e2.folderPath, n.po.PATH, "folder_path", t2) : void 0, serverUseInstructions: void 0 !== e2.serverUseInstructions ? (0, n.cZ)(e2.serverUseInstructions, n.po.CODE, "server_use_instructions", t2) : void 0, tools: e2.tools.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, toolName: e4.toolName, definitionPath: void 0 !== e4.definitionPath ? (0, n.cZ)(e4.definitionPath, n.po.PATH, "definition_path", t3) : void 0, description: e4.description, inputSchema: e4.inputSchema?.toJson(), inputSchemaJson: e4.inputSchemaJson, annotationsJson: e4.annotationsJson };
      })(e3, t2)), plugin: e2.plugin, marketplace: e2.marketplace, pluginDbId: e2.pluginDbId, marketplaceId: e2.marketplaceId };
    }
    function al(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new tl.UC({ serverName: e2.serverName, serverIdentifier: e2.serverIdentifier, folderPath: e2.folderPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), serverUseInstructions: e2.serverUseInstructions?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), tools: e2.tools.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new tl.E$({ toolName: e4.toolName, definitionPath: e4.definitionPath?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), description: e4.description, inputSchema: void 0 !== e4.inputSchema ? el.Value.fromJson(e4.inputSchema) : void 0, inputSchemaJson: e4.inputSchemaJson, annotationsJson: e4.annotationsJson });
      })(e3, t2, r2)), plugin: e2.plugin, marketplace: e2.marketplace, pluginDbId: e2.pluginDbId, marketplaceId: e2.marketplaceId });
    }
    function cl(e2, t2) {
      return { _privacyMode: t2, enabled: e2.enabled, workspaceProjectDir: (0, n.cZ)(e2.workspaceProjectDir, n.po.PATH, "workspace_project_dir", t2), mcpDescriptors: e2.mcpDescriptors.map((e3) => il(e3, t2)) };
    }
    function ll(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new tl.Is({ enabled: e2.enabled, workspaceProjectDir: e2.workspaceProjectDir.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), mcpDescriptors: e2.mcpDescriptors.map((e3) => al(e3, t2, r2)) });
    }
    function ul(e2, t2) {
      return { _privacyMode: t2, enabled: e2.enabled, mcpDescriptors: e2.mcpDescriptors.map((e3) => il(e3, t2)) };
    }
    function dl(e2, t2, r2) {
      return new tl.U_({ enabled: e2.enabled, mcpDescriptors: e2.mcpDescriptors.map((e3) => al(e3, t2, r2)) });
    }
    var pl = r(16821);
    function ml(e2, t2) {
      return { _privacyMode: t2, serverIdentifier: e2.serverIdentifier, toolCallId: e2.toolCallId };
    }
    function hl(e2, t2, r2) {
      return new pl.QZ({ serverIdentifier: e2.serverIdentifier, toolCallId: e2.toolCallId });
    }
    function fl(e2, t2) {
      return { _privacyMode: t2, result: gl(e2.result, t2) };
    }
    function gl(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: vl(e2.value, t2) };
        case "error":
          return { case: "error", value: Al(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: bl(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function yl(e2, t2, r2) {
      return new pl.wT({ result: wl(e2.result, t2, r2) });
    }
    function wl(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: _l(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Sl(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: El(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function vl(e2, t2) {
      return { _privacyMode: t2, serverIdentifier: e2.serverIdentifier };
    }
    function _l(e2, t2, r2) {
      return new pl.Ib({ serverIdentifier: e2.serverIdentifier });
    }
    function Al(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function Sl(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new pl.vP({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function bl(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function El(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new pl.P2({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Il(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? ml(e2.args, t2) : void 0, result: void 0 !== e2.result ? fl(e2.result, t2) : void 0 };
    }
    function Cl(e2, t2, r2) {
      return new pl.NX({ args: void 0 !== e2.args ? hl(e2.args) : void 0, result: void 0 !== e2.result ? yl(e2.result, t2, r2) : void 0 });
    }
    function kl(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? ml(e2.args, t2) : void 0 };
    }
    function xl(e2, t2) {
      return { _privacyMode: t2, result: Tl(e2.result, t2) };
    }
    function Tl(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "approved":
          return { case: "approved", value: Pl(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: Ml(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Rl(e2, t2, r2) {
      return new pl.h({ result: Bl(e2.result, t2, r2) });
    }
    function Bl(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "approved":
          return { case: "approved", value: Jl(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: ql(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Pl(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Jl(e2, t2, r2) {
      return new pl.D5({});
    }
    function Ml(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function ql(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new pl.OI({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var Dl = r(11197);
    function Ol(e2, t2) {
      return { _privacyMode: t2, name: e2.name, args: new Map(Object.entries(e2.args).map(([e3, t3]) => [e3, t3.toJson()])), toolCallId: e2.toolCallId, providerIdentifier: e2.providerIdentifier, toolName: e2.toolName, smartModeApproval: void 0 !== e2.smartModeApproval ? d(e2.smartModeApproval, t2) : void 0, smartModeApprovalOnly: e2.smartModeApprovalOnly, skipApproval: e2.skipApproval, serverIdentifier: e2.serverIdentifier, symbolicPathArguments: e2.symbolicPathArguments.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, path: (0, n.cZ)(e4.path, n.po.PATH, "path", t3), sha256: e4.sha256, sizeBytes: e4.sizeBytes };
      })(e3, t2)) };
    }
    function Nl(e2, t2, r2) {
      return new Dl.E_({ name: e2.name, args: Object.fromEntries(Array.from(e2.args.entries()).map(([e3, t3]) => [e3, el.Value.fromJson(t3)])), toolCallId: e2.toolCallId, providerIdentifier: e2.providerIdentifier, toolName: e2.toolName, smartModeApproval: void 0 !== e2.smartModeApproval ? p(e2.smartModeApproval, t2, r2) : void 0, smartModeApprovalOnly: e2.smartModeApprovalOnly, skipApproval: e2.skipApproval, serverIdentifier: e2.serverIdentifier, symbolicPathArguments: e2.symbolicPathArguments.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new Dl.n({ path: e4.path.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), sha256: e4.sha256, sizeBytes: e4.sizeBytes });
      })(e3, t2, r2)) });
    }
    function Fl(e2, t2) {
      return { _privacyMode: t2, result: Ul(e2.result, t2) };
    }
    function Ul(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: nu(e2.value, t2) };
        case "error":
          return { case: "error", value: ou(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: lu(e2.value, t2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: du(e2.value, t2) };
        case "toolNotFound":
          return { case: "toolNotFound", value: Gl(e2.value, t2) };
        case "serverNotFound":
          return { case: "serverNotFound", value: zl(e2.value, t2) };
        case "approved":
          return { case: "approved", value: Ql(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ll(e2, t2, r2) {
      return new Dl.iz({ result: $l(e2.result, t2, r2) });
    }
    function $l(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: su(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: iu(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: uu(e2.value, t2, r2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: pu(e2.value, t2, r2) };
        case "toolNotFound":
          return { case: "toolNotFound", value: Hl(e2.value, t2, r2) };
        case "serverNotFound":
          return { case: "serverNotFound", value: Wl(e2.value, t2, r2) };
        case "approved":
          return { case: "approved", value: jl(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ql(e2, t2) {
      return { _privacyMode: t2 };
    }
    function jl(e2, t2, r2) {
      return new Dl.Ke({});
    }
    function Gl(e2, t2) {
      return { _privacyMode: t2, name: e2.name, availableTools: e2.availableTools, recovery: void 0 !== e2.recovery ? au(e2.recovery, t2) : void 0 };
    }
    function Hl(e2, t2, r2) {
      return new Dl.WV({ name: e2.name, availableTools: e2.availableTools, recovery: void 0 !== e2.recovery ? cu(e2.recovery, t2, r2) : void 0 });
    }
    function zl(e2, t2) {
      return { _privacyMode: t2, name: e2.name, availableServers: e2.availableServers };
    }
    function Wl(e2, t2, r2) {
      return new Dl.JL({ name: e2.name, availableServers: e2.availableServers });
    }
    function Vl(e2, t2) {
      return { _privacyMode: t2, text: (0, n.cZ)(e2.text, n.po.CODE, "text", t2), outputLocation: void 0 !== e2.outputLocation ? l(e2.outputLocation, t2) : void 0 };
    }
    function Kl(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.zN({ text: e2.text.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), outputLocation: void 0 !== e2.outputLocation ? u(e2.outputLocation, t2, r2) : void 0 });
    }
    function Yl(e2, t2) {
      return { _privacyMode: t2, data: (0, n.Yz)(e2.data, n.po.CODE, "data", t2), mimeType: e2.mimeType };
    }
    function Zl(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.do({ data: e2.data.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), mimeType: e2.mimeType });
    }
    function Xl(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "text":
          return { case: "text", value: Vl(e2.value, t2) };
        case "image":
          return { case: "image", value: Yl(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function eu(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "text":
          return { case: "text", value: Kl(e2.value, t2, r2) };
        case "image":
          return { case: "image", value: Zl(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function tu(e2, t2) {
      return { _privacyMode: t2, body: (0, n.cZ)(e2.body, n.po.CODE, "body", t2) };
    }
    function ru(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.Kp({ body: e2.body.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function nu(e2, t2) {
      return { _privacyMode: t2, content: e2.content.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, content: Xl(e4.content, t3) };
      })(e3, t2)), isError: e2.isError, structuredContent: e2.structuredContent?.toJson(), systemReminders: e2.systemReminders.map((e3) => tu(e3, t2)) };
    }
    function su(e2, t2, r2) {
      return new Dl.QW({ content: e2.content.map((e3) => (function(e4, t3, r3) {
        return new Dl._Z({ content: eu(e4.content, t3, r3) });
      })(e3, t2, r2)), isError: e2.isError, structuredContent: void 0 !== e2.structuredContent ? el.Struct.fromJson(e2.structuredContent) : void 0, systemReminders: e2.systemReminders.map((e3) => ru(e3, t2, r2)) });
    }
    function ou(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2), needsAuth: e2.needsAuth, recovery: void 0 !== e2.recovery ? au(e2.recovery, t2) : void 0, httpStatus: e2.httpStatus };
    }
    function iu(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.Nh({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), needsAuth: e2.needsAuth, recovery: void 0 !== e2.recovery ? cu(e2.recovery, t2, r2) : void 0, httpStatus: e2.httpStatus });
    }
    function au(e2, t2) {
      return { _privacyMode: t2, outcome: e2.outcome, freshInputSchemaJson: void 0 !== e2.freshInputSchemaJson ? (0, n.cZ)(e2.freshInputSchemaJson, n.po.CODE, "fresh_input_schema_json", t2) : void 0, availableTools: e2.availableTools };
    }
    function cu(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.qe({ outcome: e2.outcome, freshInputSchemaJson: e2.freshInputSchemaJson?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), availableTools: e2.availableTools });
    }
    function lu(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2), isReadonly: e2.isReadonly };
    }
    function uu(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.xo({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), isReadonly: e2.isReadonly });
    }
    function du(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2), isReadonly: e2.isReadonly };
    }
    function pu(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.HQ({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), isReadonly: e2.isReadonly });
    }
    function mu(e2, t2) {
      return { _privacyMode: t2, serverIdentifiers: e2.serverIdentifiers, kickOnly: e2.kickOnly, refreshPolicy: e2.refreshPolicy };
    }
    function hu(e2, t2) {
      return { _privacyMode: t2, result: fu(e2.result, t2) };
    }
    function fu(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: wu(e2.value, t2) };
        case "error":
          return { case: "error", value: _u(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: Su(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function gu(e2, t2, r2) {
      return new Dl._W({ result: yu(e2.result, t2, r2) });
    }
    function yu(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: vu(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Au(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: bu(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function wu(e2, t2) {
      return { _privacyMode: t2, servers: e2.servers.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, serverName: e4.serverName, serverIdentifier: e4.serverIdentifier, plugin: e4.plugin, marketplace: e4.marketplace, tools: e4.tools.map((e5) => rl(e5, t3)), instructions: e4.instructions.map((e5) => sl(e5, t3)), status: e4.status, errorMessage: void 0 !== e4.errorMessage ? (0, n.cZ)(e4.errorMessage, n.po.CODE, "error_message", t3) : void 0 };
      })(e3, t2)) };
    }
    function vu(e2, t2, r2) {
      return new Dl.pv({ servers: e2.servers.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new Dl.XE({ serverName: e4.serverName, serverIdentifier: e4.serverIdentifier, plugin: e4.plugin, marketplace: e4.marketplace, tools: e4.tools.map((e5) => nl(e5, t3, r3)), instructions: e4.instructions.map((e5) => ol(e5, t3, r3)), status: e4.status, errorMessage: e4.errorMessage?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
      })(e3, t2, r2)) });
    }
    function _u(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function Au(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.Io({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Su(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function bu(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.GN({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Eu(e2, t2) {
      return { _privacyMode: t2, server: e2.server };
    }
    function Iu(e2, t2, r2) {
      return new Dl.kj({ server: e2.server });
    }
    function Cu(e2, t2) {
      return { _privacyMode: t2, result: ku(e2.result, t2) };
    }
    function ku(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Ru(e2.value, t2) };
        case "error":
          return { case: "error", value: Pu(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: Mu(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function xu(e2, t2, r2) {
      return new Dl.kP({ result: Tu(e2.result, t2, r2) });
    }
    function Tu(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Bu(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Ju(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: qu(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ru(e2, t2) {
      return { _privacyMode: t2, resources: e2.resources.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, uri: (0, n.cZ)(e4.uri, n.po.PATH, "uri", t3), name: e4.name, description: void 0 !== e4.description ? (0, n.cZ)(e4.description, n.po.CODE, "description", t3) : void 0, mimeType: e4.mimeType, server: e4.server, annotations: new Map(Object.entries(e4.annotations).map(([e5, r2]) => [e5, (0, n.cZ)(r2, n.po.CODE, "annotations", t3)])) };
      })(e3, t2)) };
    }
    function Bu(e2, t2, r2) {
      return new Dl.T2({ resources: e2.resources.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new Dl.X2({ uri: e4.uri.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), name: e4.name, description: e4.description?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), mimeType: e4.mimeType, server: e4.server, annotations: Object.fromEntries(Array.from(e4.annotations.entries()).map(([e5, r4]) => [e5, r4.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })])) });
      })(e3, t2, r2)) });
    }
    function Pu(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function Ju(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.w2({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Mu(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function qu(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.Is({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Du(e2, t2) {
      return { _privacyMode: t2, server: e2.server, uri: (0, n.cZ)(e2.uri, n.po.PATH, "uri", t2), downloadPath: void 0 !== e2.downloadPath ? (0, n.cZ)(e2.downloadPath, n.po.PATH, "download_path", t2) : void 0, toolCallId: e2.toolCallId, smartModeApproval: void 0 !== e2.smartModeApproval ? d(e2.smartModeApproval, t2) : void 0 };
    }
    function Ou(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.DI({ server: e2.server, uri: e2.uri.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), downloadPath: e2.downloadPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallId: e2.toolCallId, smartModeApproval: void 0 !== e2.smartModeApproval ? p(e2.smartModeApproval, t2, r2) : void 0 });
    }
    function Nu(e2, t2) {
      return { _privacyMode: t2, result: Fu(e2.result, t2) };
    }
    function Fu(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: $u(e2.value, t2) };
        case "error":
          return { case: "error", value: Hu(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: Wu(e2.value, t2) };
        case "notFound":
          return { case: "notFound", value: Ku(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Uu(e2, t2, r2) {
      return new Dl.ZD({ result: Lu(e2.result, t2, r2) });
    }
    function Lu(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: ju(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: zu(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: Vu(e2.value, t2, r2) };
        case "notFound":
          return { case: "notFound", value: Yu(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function $u(e2, t2) {
      return { _privacyMode: t2, uri: (0, n.cZ)(e2.uri, n.po.PATH, "uri", t2), name: e2.name, description: void 0 !== e2.description ? (0, n.cZ)(e2.description, n.po.CODE, "description", t2) : void 0, mimeType: e2.mimeType, annotations: new Map(Object.entries(e2.annotations).map(([e3, r2]) => [e3, (0, n.cZ)(r2, n.po.CODE, "annotations", t2)])), downloadPath: void 0 !== e2.downloadPath ? (0, n.cZ)(e2.downloadPath, n.po.PATH, "download_path", t2) : void 0, outputLocation: void 0 !== e2.outputLocation ? l(e2.outputLocation, t2) : void 0, metaJson: void 0 !== e2.metaJson ? (0, n.cZ)(e2.metaJson, n.po.CODE, "meta_json", t2) : void 0, content: Qu(e2.content, t2) };
    }
    function Qu(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "text":
          return { case: "text", value: (0, n.cZ)(e2.value, n.po.CODE, "text", t2) };
        case "blob":
          return { case: "blob", value: (0, n.Yz)(e2.value, n.po.CODE, "blob", t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function ju(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.KZ({ uri: e2.uri.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), name: e2.name, description: e2.description?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), mimeType: e2.mimeType, annotations: Object.fromEntries(Array.from(e2.annotations.entries()).map(([e3, r3]) => [e3, r3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })])), downloadPath: e2.downloadPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), outputLocation: void 0 !== e2.outputLocation ? u(e2.outputLocation, t2, r2) : void 0, metaJson: e2.metaJson?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), content: Gu(e2.content, t2, r2) });
    }
    function Gu(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "text":
          return { case: "text", value: e2.value.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) };
        case "blob":
          return { case: "blob", value: e2.value.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Hu(e2, t2) {
      return { _privacyMode: t2, uri: (0, n.cZ)(e2.uri, n.po.PATH, "uri", t2), error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function zu(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.Jx({ uri: e2.uri.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Wu(e2, t2) {
      return { _privacyMode: t2, uri: (0, n.cZ)(e2.uri, n.po.PATH, "uri", t2), reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function Vu(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.Dh({ uri: e2.uri.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Ku(e2, t2) {
      return { _privacyMode: t2, uri: (0, n.cZ)(e2.uri, n.po.PATH, "uri", t2) };
    }
    function Yu(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Dl.ov({ uri: e2.uri.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var Zu = r(47103);
    function Xu(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Eu(e2.args, t2) : void 0, result: void 0 !== e2.result ? Cu(e2.result, t2) : void 0 };
    }
    function ed(e2, t2, r2) {
      return new Zu.c({ args: void 0 !== e2.args ? Iu(e2.args) : void 0, result: void 0 !== e2.result ? xu(e2.result, t2, r2) : void 0 });
    }
    function td(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Du(e2.args, t2) : void 0, result: void 0 !== e2.result ? Nu(e2.result, t2) : void 0 };
    }
    function rd(e2, t2, r2) {
      return new Zu.$({ args: void 0 !== e2.args ? Ou(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Uu(e2.result, t2, r2) : void 0 });
    }
    var nd = r(6060);
    function sd(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2), readToolDefReminder: (0, n.cZ)(e2.readToolDefReminder, n.po.CODE, "read_tool_def_reminder", t2), systemReminders: e2.systemReminders.map((e3) => tu(e3, t2)) };
    }
    function od(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new nd.jZ({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), readToolDefReminder: e2.readToolDefReminder.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), systemReminders: e2.systemReminders.map((e3) => ru(e3, t2, r2)) });
    }
    function id(e2, t2) {
      return { _privacyMode: t2, result: ad(e2.result, t2) };
    }
    function ad(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: nu(e2.value, t2) };
        case "error":
          return { case: "error", value: sd(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: lu(e2.value, t2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: du(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function cd(e2, t2, r2) {
      return new nd.QN({ result: ld(e2.result, t2, r2) });
    }
    function ld(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: su(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: od(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: uu(e2.value, t2, r2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: pu(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function ud(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Ol(e2.args, t2) : void 0, result: void 0 !== e2.result ? id(e2.result, t2) : void 0, description: e2.description };
    }
    function dd(e2, t2, r2) {
      return new nd.nz({ args: void 0 !== e2.args ? Nl(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? cd(e2.result, t2, r2) : void 0, description: e2.description });
    }
    var pd = r(41834), md = r(38036);
    function hd(e2, t2) {
      return { _privacyMode: t2, truncated: e2.truncated, truncatedBy: e2.truncatedBy, totalLines: e2.totalLines, outputLines: e2.outputLines, outputBytes: e2.outputBytes, maxLines: e2.maxLines, maxBytes: e2.maxBytes, firstLineExceedsLimit: e2.firstLineExceedsLimit, lastLinePartial: e2.lastLinePartial };
    }
    function fd(e2, t2, r2) {
      return new md.d({ truncated: e2.truncated, truncatedBy: e2.truncatedBy, totalLines: e2.totalLines, outputLines: e2.outputLines, outputBytes: e2.outputBytes, maxLines: e2.maxLines, maxBytes: e2.maxBytes, firstLineExceedsLimit: e2.firstLineExceedsLimit, lastLinePartial: e2.lastLinePartial });
    }
    function gd(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? wd(e2.args, t2) : void 0, result: void 0 !== e2.result ? _d(e2.result, t2) : void 0 };
    }
    function yd(e2, t2, r2) {
      return new pd.WJ({ args: void 0 !== e2.args ? vd(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Sd(e2.result, t2, r2) : void 0 });
    }
    function wd(e2, t2) {
      return { _privacyMode: t2, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), timeout: e2.timeout };
    }
    function vd(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new pd.TI({ command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), timeout: e2.timeout });
    }
    function _d(e2, t2) {
      return { _privacyMode: t2, result: Ad(e2.result, t2) };
    }
    function Ad(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Ed(e2.value, t2) };
        case "error":
          return { case: "error", value: Cd(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Sd(e2, t2, r2) {
      return new pd.To({ result: bd(e2.result, t2, r2) });
    }
    function bd(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Id(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: kd(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ed(e2, t2) {
      return { _privacyMode: t2, output: (0, n.cZ)(e2.output, n.po.CODE, "output", t2), truncation: void 0 !== e2.truncation ? hd(e2.truncation, t2) : void 0, fullOutputPath: void 0 !== e2.fullOutputPath ? (0, n.cZ)(e2.fullOutputPath, n.po.PATH, "full_output_path", t2) : void 0 };
    }
    function Id(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new pd.XL({ output: e2.output.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), truncation: void 0 !== e2.truncation ? fd(e2.truncation) : void 0, fullOutputPath: e2.fullOutputPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Cd(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2), truncation: void 0 !== e2.truncation ? hd(e2.truncation, t2) : void 0, fullOutputPath: void 0 !== e2.fullOutputPath ? (0, n.cZ)(e2.fullOutputPath, n.po.PATH, "full_output_path", t2) : void 0 };
    }
    function kd(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new pd.eC({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), truncation: void 0 !== e2.truncation ? fd(e2.truncation) : void 0, fullOutputPath: e2.fullOutputPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var xd = r(82628);
    function Td(e2, t2) {
      return { _privacyMode: t2, oldText: (0, n.cZ)(e2.oldText, n.po.CODE, "old_text", t2), newText: (0, n.cZ)(e2.newText, n.po.CODE, "new_text", t2) };
    }
    function Rd(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new xd.mR({ oldText: e2.oldText.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), newText: e2.newText.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Bd(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Jd(e2.args, t2) : void 0, result: void 0 !== e2.result ? qd(e2.result, t2) : void 0 };
    }
    function Pd(e2, t2, r2) {
      return new xd.EN({ args: void 0 !== e2.args ? Md(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Od(e2.result, t2, r2) : void 0 });
    }
    function Jd(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), edits: e2.edits.map((e3) => Td(e3, t2)) };
    }
    function Md(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new xd.$V({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), edits: e2.edits.map((e3) => Rd(e3, t2, r2)) });
    }
    function qd(e2, t2) {
      return { _privacyMode: t2, result: Dd(e2.result, t2) };
    }
    function Dd(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Fd(e2.value, t2) };
        case "error":
          return { case: "error", value: Ld(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: Qd(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Od(e2, t2, r2) {
      return new xd.nX({ result: Nd(e2.result, t2, r2) });
    }
    function Nd(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Ud(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: $d(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: jd(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Fd(e2, t2) {
      return { _privacyMode: t2, output: (0, n.cZ)(e2.output, n.po.CODE, "output", t2), diff: (0, n.cZ)(e2.diff, n.po.CODE, "diff", t2), patch: (0, n.cZ)(e2.patch, n.po.CODE, "patch", t2), firstChangedLine: e2.firstChangedLine };
    }
    function Ud(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new xd.Bz({ output: e2.output.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), diff: e2.diff.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), patch: e2.patch.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), firstChangedLine: e2.firstChangedLine });
    }
    function Ld(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function $d(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new xd.uX({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Qd(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function jd(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new xd.AM({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var Gd = r(78639);
    function Hd(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Wd(e2.args, t2) : void 0, result: void 0 !== e2.result ? Kd(e2.result, t2) : void 0 };
    }
    function zd(e2, t2, r2) {
      return new Gd.h1({ args: void 0 !== e2.args ? Vd(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Zd(e2.result, t2, r2) : void 0 });
    }
    function Wd(e2, t2) {
      return { _privacyMode: t2, pattern: (0, n.cZ)(e2.pattern, n.po.PATH, "pattern", t2), path: void 0 !== e2.path ? (0, n.cZ)(e2.path, n.po.PATH, "path", t2) : void 0, limit: e2.limit };
    }
    function Vd(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Gd.YE({ pattern: e2.pattern.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), path: e2.path?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), limit: e2.limit });
    }
    function Kd(e2, t2) {
      return { _privacyMode: t2, result: Yd(e2.result, t2) };
    }
    function Yd(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: ep(e2.value, t2) };
        case "error":
          return { case: "error", value: rp(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Zd(e2, t2, r2) {
      return new Gd.k4({ result: Xd(e2.result, t2, r2) });
    }
    function Xd(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: tp(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: np(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function ep(e2, t2) {
      return { _privacyMode: t2, output: (0, n.cZ)(e2.output, n.po.PATH, "output", t2), truncation: void 0 !== e2.truncation ? hd(e2.truncation, t2) : void 0, resultLimitReached: e2.resultLimitReached };
    }
    function tp(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Gd.mZ({ output: e2.output.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), truncation: void 0 !== e2.truncation ? fd(e2.truncation) : void 0, resultLimitReached: e2.resultLimitReached });
    }
    function rp(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function np(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Gd.xD({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var sp = r(64772);
    function op(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? ap(e2.args, t2) : void 0, result: void 0 !== e2.result ? lp(e2.result, t2) : void 0 };
    }
    function ip(e2, t2, r2) {
      return new sp.Os({ args: void 0 !== e2.args ? cp(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? dp(e2.result, t2, r2) : void 0 });
    }
    function ap(e2, t2) {
      return { _privacyMode: t2, pattern: (0, n.cZ)(e2.pattern, n.po.CODE, "pattern", t2), path: void 0 !== e2.path ? (0, n.cZ)(e2.path, n.po.PATH, "path", t2) : void 0, glob: void 0 !== e2.glob ? (0, n.cZ)(e2.glob, n.po.PATH, "glob", t2) : void 0, ignoreCase: e2.ignoreCase, literal: e2.literal, context: e2.context, limit: e2.limit };
    }
    function cp(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new sp.NQ({ pattern: e2.pattern.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), path: e2.path?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), glob: e2.glob?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), ignoreCase: e2.ignoreCase, literal: e2.literal, context: e2.context, limit: e2.limit });
    }
    function lp(e2, t2) {
      return { _privacyMode: t2, result: up(e2.result, t2) };
    }
    function up(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: mp(e2.value, t2) };
        case "error":
          return { case: "error", value: fp(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function dp(e2, t2, r2) {
      return new sp.xS({ result: pp(e2.result, t2, r2) });
    }
    function pp(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: hp(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: gp(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function mp(e2, t2) {
      return { _privacyMode: t2, output: (0, n.cZ)(e2.output, n.po.CODE, "output", t2), truncation: void 0 !== e2.truncation ? hd(e2.truncation, t2) : void 0, matchLimitReached: e2.matchLimitReached, linesTruncated: e2.linesTruncated };
    }
    function hp(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new sp.N1({ output: e2.output.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), truncation: void 0 !== e2.truncation ? fd(e2.truncation) : void 0, matchLimitReached: e2.matchLimitReached, linesTruncated: e2.linesTruncated });
    }
    function fp(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function gp(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new sp.AM({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var yp = r(35733);
    function wp(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? _p(e2.args, t2) : void 0, result: void 0 !== e2.result ? Sp(e2.result, t2) : void 0 };
    }
    function vp(e2, t2, r2) {
      return new yp.Tf({ args: void 0 !== e2.args ? Ap(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Ep(e2.result, t2, r2) : void 0 });
    }
    function _p(e2, t2) {
      return { _privacyMode: t2, path: void 0 !== e2.path ? (0, n.cZ)(e2.path, n.po.PATH, "path", t2) : void 0, limit: e2.limit };
    }
    function Ap(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yp.ag({ path: e2.path?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), limit: e2.limit });
    }
    function Sp(e2, t2) {
      return { _privacyMode: t2, result: bp(e2.result, t2) };
    }
    function bp(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Cp(e2.value, t2) };
        case "error":
          return { case: "error", value: xp(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ep(e2, t2, r2) {
      return new yp.G6({ result: Ip(e2.result, t2, r2) });
    }
    function Ip(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: kp(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Tp(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Cp(e2, t2) {
      return { _privacyMode: t2, output: (0, n.cZ)(e2.output, n.po.PATH, "output", t2), truncation: void 0 !== e2.truncation ? hd(e2.truncation, t2) : void 0, entryLimitReached: e2.entryLimitReached };
    }
    function kp(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yp.e6({ output: e2.output.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), truncation: void 0 !== e2.truncation ? fd(e2.truncation) : void 0, entryLimitReached: e2.entryLimitReached });
    }
    function xp(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function Tp(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yp.XJ({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var Rp = r(26880);
    function Bp(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Jp(e2.args, t2) : void 0, result: void 0 !== e2.result ? qp(e2.result, t2) : void 0 };
    }
    function Pp(e2, t2, r2) {
      return new Rp.oT({ args: void 0 !== e2.args ? Mp(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Op(e2.result, t2, r2) : void 0 });
    }
    function Jp(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), offset: e2.offset, limit: e2.limit };
    }
    function Mp(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Rp.tC({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), offset: e2.offset, limit: e2.limit });
    }
    function qp(e2, t2) {
      return { _privacyMode: t2, result: Dp(e2.result, t2) };
    }
    function Dp(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Fp(e2.value, t2) };
        case "error":
          return { case: "error", value: Lp(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Op(e2, t2, r2) {
      return new Rp.z1({ result: Np(e2.result, t2, r2) });
    }
    function Np(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Up(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: $p(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Fp(e2, t2) {
      return { _privacyMode: t2, output: (0, n.cZ)(e2.output, n.po.CODE, "output", t2), truncation: void 0 !== e2.truncation ? hd(e2.truncation, t2) : void 0 };
    }
    function Up(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Rp.ni({ output: e2.output.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), truncation: void 0 !== e2.truncation ? fd(e2.truncation) : void 0 });
    }
    function Lp(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function $p(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Rp.oS({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var Qp = r(75377);
    function jp(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Hp(e2.args, t2) : void 0, result: void 0 !== e2.result ? Wp(e2.result, t2) : void 0 };
    }
    function Gp(e2, t2, r2) {
      return new Qp.xP({ args: void 0 !== e2.args ? zp(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Kp(e2.result, t2, r2) : void 0 });
    }
    function Hp(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), content: (0, n.cZ)(e2.content, n.po.CODE, "content", t2) };
    }
    function zp(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qp.w0({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), content: e2.content.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Wp(e2, t2) {
      return { _privacyMode: t2, result: Vp(e2.result, t2) };
    }
    function Vp(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Zp(e2.value, t2) };
        case "error":
          return { case: "error", value: em(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: rm(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Kp(e2, t2, r2) {
      return new Qp.gY({ result: Yp(e2.result, t2, r2) });
    }
    function Yp(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Xp(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: tm(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: nm(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Zp(e2, t2) {
      return { _privacyMode: t2, output: (0, n.cZ)(e2.output, n.po.CODE, "output", t2) };
    }
    function Xp(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qp.qb({ output: e2.output.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function em(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function tm(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qp.jE({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function rm(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function nm(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Qp.Fe({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var sm = r(76476);
    function om(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId, action: im(e2.action, t2) };
    }
    function im(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "createPr":
          return { case: "createPr", value: lm(e2.value, t2) };
        case "updatePr":
          return { case: "updatePr", value: dm(e2.value, t2) };
        case "postComment":
          return { case: "postComment", value: mm(e2.value, t2) };
        case "resolveComment":
          return { case: "resolveComment", value: fm(e2.value, t2) };
        case "getCiStatus":
          return { case: "getCiStatus", value: ym(e2.value, t2) };
        case "setPrStatus":
          return { case: "setPrStatus", value: vm(e2.value, t2) };
        case "mergePr":
          return { case: "mergePr", value: Am(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function am(e2, t2, r2) {
      return new sm.Xd({ toolCallId: e2.toolCallId, action: cm(e2.action, t2, r2) });
    }
    function cm(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "createPr":
          return { case: "createPr", value: um(e2.value, t2, r2) };
        case "updatePr":
          return { case: "updatePr", value: pm(e2.value, t2, r2) };
        case "postComment":
          return { case: "postComment", value: hm(e2.value, t2, r2) };
        case "resolveComment":
          return { case: "resolveComment", value: gm(e2.value, t2, r2) };
        case "getCiStatus":
          return { case: "getCiStatus", value: wm(e2.value, t2, r2) };
        case "setPrStatus":
          return { case: "setPrStatus", value: _m(e2.value, t2, r2) };
        case "mergePr":
          return { case: "mergePr", value: Sm(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function lm(e2, t2) {
      return { _privacyMode: t2, title: (0, n.cZ)(e2.title, n.po.CODE, "title", t2), body: (0, n.cZ)(e2.body, n.po.CODE, "body", t2), baseBranch: void 0 !== e2.baseBranch ? (0, n.cZ)(e2.baseBranch, n.po.PATH, "base_branch", t2) : void 0, draft: e2.draft, branchName: (0, n.cZ)(e2.branchName, n.po.PATH, "branch_name", t2), addLabels: e2.addLabels.map((e3) => (0, n.cZ)(e3, n.po.PATH, "add_labels", t2)), repoUrl: void 0 !== e2.repoUrl ? (0, n.cZ)(e2.repoUrl, n.po.PATH, "repo_url", t2) : void 0, skipBranchPrefixCheck: e2.skipBranchPrefixCheck, stackOnPrNumber: e2.stackOnPrNumber };
    }
    function um(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new sm.$3({ title: e2.title.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), body: e2.body.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), baseBranch: e2.baseBranch?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), draft: e2.draft, branchName: e2.branchName.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), addLabels: e2.addLabels.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), repoUrl: e2.repoUrl?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), skipBranchPrefixCheck: e2.skipBranchPrefixCheck, stackOnPrNumber: e2.stackOnPrNumber });
    }
    function dm(e2, t2) {
      return { _privacyMode: t2, prUrl: e2.prUrl, title: void 0 !== e2.title ? (0, n.cZ)(e2.title, n.po.CODE, "title", t2) : void 0, body: void 0 !== e2.body ? (0, n.cZ)(e2.body, n.po.CODE, "body", t2) : void 0, baseBranch: void 0 !== e2.baseBranch ? (0, n.cZ)(e2.baseBranch, n.po.PATH, "base_branch", t2) : void 0, branchName: void 0 !== e2.branchName ? (0, n.cZ)(e2.branchName, n.po.PATH, "branch_name", t2) : void 0, addLabels: e2.addLabels.map((e3) => (0, n.cZ)(e3, n.po.PATH, "add_labels", t2)), removeLabels: e2.removeLabels.map((e3) => (0, n.cZ)(e3, n.po.PATH, "remove_labels", t2)), repoUrl: void 0 !== e2.repoUrl ? (0, n.cZ)(e2.repoUrl, n.po.PATH, "repo_url", t2) : void 0, stackOnPrNumber: e2.stackOnPrNumber, clearStack: e2.clearStack, draft: e2.draft };
    }
    function pm(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new sm.YP({ prUrl: e2.prUrl, title: e2.title?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), body: e2.body?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), baseBranch: e2.baseBranch?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), branchName: e2.branchName?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), addLabels: e2.addLabels.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), removeLabels: e2.removeLabels.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), repoUrl: e2.repoUrl?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), stackOnPrNumber: e2.stackOnPrNumber, clearStack: e2.clearStack, draft: e2.draft });
    }
    function mm(e2, t2) {
      return { _privacyMode: t2, prUrl: e2.prUrl, branchName: void 0 !== e2.branchName ? (0, n.cZ)(e2.branchName, n.po.PATH, "branch_name", t2) : void 0, body: (0, n.cZ)(e2.body, n.po.CODE, "body", t2), repoUrl: void 0 !== e2.repoUrl ? (0, n.cZ)(e2.repoUrl, n.po.PATH, "repo_url", t2) : void 0, inReplyTo: e2.inReplyTo, path: void 0 !== e2.path ? (0, n.cZ)(e2.path, n.po.PATH, "path", t2) : void 0, line: e2.line, startLine: e2.startLine, side: e2.side, replyToReference: e2.replyToReference };
    }
    function hm(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new sm.ex({ prUrl: e2.prUrl, branchName: e2.branchName?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), body: e2.body.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), repoUrl: e2.repoUrl?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), inReplyTo: e2.inReplyTo, path: e2.path?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), line: e2.line, startLine: e2.startLine, side: e2.side, replyToReference: e2.replyToReference });
    }
    function fm(e2, t2) {
      return { _privacyMode: t2, prUrl: e2.prUrl, branchName: void 0 !== e2.branchName ? (0, n.cZ)(e2.branchName, n.po.PATH, "branch_name", t2) : void 0, commentId: e2.commentId, repoUrl: void 0 !== e2.repoUrl ? (0, n.cZ)(e2.repoUrl, n.po.PATH, "repo_url", t2) : void 0, commentReference: e2.commentReference };
    }
    function gm(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new sm.ix({ prUrl: e2.prUrl, branchName: e2.branchName?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), commentId: e2.commentId, repoUrl: e2.repoUrl?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), commentReference: e2.commentReference });
    }
    function ym(e2, t2) {
      return { _privacyMode: t2, prUrl: e2.prUrl, branchName: void 0 !== e2.branchName ? (0, n.cZ)(e2.branchName, n.po.PATH, "branch_name", t2) : void 0, repoUrl: void 0 !== e2.repoUrl ? (0, n.cZ)(e2.repoUrl, n.po.PATH, "repo_url", t2) : void 0 };
    }
    function wm(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new sm.DU({ prUrl: e2.prUrl, branchName: e2.branchName?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), repoUrl: e2.repoUrl?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function vm(e2, t2) {
      return { _privacyMode: t2, prUrl: e2.prUrl, branchName: void 0 !== e2.branchName ? (0, n.cZ)(e2.branchName, n.po.PATH, "branch_name", t2) : void 0, repoUrl: void 0 !== e2.repoUrl ? (0, n.cZ)(e2.repoUrl, n.po.PATH, "repo_url", t2) : void 0, status: e2.status };
    }
    function _m(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new sm.Xt({ prUrl: e2.prUrl, branchName: e2.branchName?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), repoUrl: e2.repoUrl?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), status: e2.status });
    }
    function Am(e2, t2) {
      return { _privacyMode: t2, prUrl: e2.prUrl, branchName: void 0 !== e2.branchName ? (0, n.cZ)(e2.branchName, n.po.PATH, "branch_name", t2) : void 0, repoUrl: void 0 !== e2.repoUrl ? (0, n.cZ)(e2.repoUrl, n.po.PATH, "repo_url", t2) : void 0, mode: e2.mode, method: e2.method, expectedHeadSha: e2.expectedHeadSha, expectedMemberHeadShas: new Map(Object.entries(e2.expectedMemberHeadShas)), downstack: e2.downstack };
    }
    function Sm(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new sm.PE({ prUrl: e2.prUrl, branchName: e2.branchName?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), repoUrl: e2.repoUrl?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), mode: e2.mode, method: e2.method, expectedHeadSha: e2.expectedHeadSha, expectedMemberHeadShas: Object.fromEntries(e2.expectedMemberHeadShas.entries()), downstack: e2.downstack });
    }
    function bm(e2, t2) {
      return { _privacyMode: t2, result: Em(e2.result, t2) };
    }
    function Em(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: km(e2.value, t2) };
        case "error":
          return { case: "error", value: Tm(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: Bm(e2.value, t2) };
        case "registered":
          return { case: "registered", value: Jm(e2.value, t2) };
        case "needsConfirmation":
          return { case: "needsConfirmation", value: qm(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Im(e2, t2, r2) {
      return new sm.HL({ result: Cm(e2.result, t2, r2) });
    }
    function Cm(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: xm(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Rm(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: Pm(e2.value, t2, r2) };
        case "registered":
          return { case: "registered", value: Mm(e2.value, t2, r2) };
        case "needsConfirmation":
          return { case: "needsConfirmation", value: Dm(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function km(e2, t2) {
      return { _privacyMode: t2, prUrl: e2.prUrl, prNumber: e2.prNumber, message: (0, n.cZ)(e2.message, n.po.CODE, "message", t2) };
    }
    function xm(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new sm.N9({ prUrl: e2.prUrl, prNumber: e2.prNumber, message: e2.message.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Tm(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function Rm(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new sm.K$({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Bm(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function Pm(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new sm.sO({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Jm(e2, t2) {
      return { _privacyMode: t2, message: (0, n.cZ)(e2.message, n.po.CODE, "message", t2), title: (0, n.cZ)(e2.title, n.po.CODE, "title", t2), body: (0, n.cZ)(e2.body, n.po.CODE, "body", t2), baseBranch: void 0 !== e2.baseBranch ? (0, n.cZ)(e2.baseBranch, n.po.PATH, "base_branch", t2) : void 0, draft: e2.draft, branchName: (0, n.cZ)(e2.branchName, n.po.PATH, "branch_name", t2) };
    }
    function Mm(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new sm.Ur({ message: e2.message.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), title: e2.title.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), body: e2.body.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), baseBranch: e2.baseBranch?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), draft: e2.draft, branchName: e2.branchName.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function qm(e2, t2) {
      return { _privacyMode: t2, message: (0, n.cZ)(e2.message, n.po.CODE, "message", t2), discoveredPrUrl: e2.discoveredPrUrl, discoveredPrNumber: e2.discoveredPrNumber, discoveredPrTitle: (0, n.cZ)(e2.discoveredPrTitle, n.po.CODE, "discovered_pr_title", t2), branchName: (0, n.cZ)(e2.branchName, n.po.PATH, "branch_name", t2) };
    }
    function Dm(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new sm.Kc({ message: e2.message.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), discoveredPrUrl: e2.discoveredPrUrl, discoveredPrNumber: e2.discoveredPrNumber, discoveredPrTitle: e2.discoveredPrTitle.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), branchName: e2.branchName.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Om(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? om(e2.args, t2) : void 0, result: void 0 !== e2.result ? bm(e2.result, t2) : void 0 };
    }
    function Nm(e2, t2, r2) {
      return new sm.AU({ args: void 0 !== e2.args ? am(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Im(e2.result, t2, r2) : void 0 });
    }
    function Fm(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? om(e2.args, t2) : void 0 };
    }
    function Um(e2, t2, r2) {
      return new sm.DY({ args: void 0 !== e2.args ? am(e2.args, t2, r2) : void 0 });
    }
    var Lm = r(26885);
    function $m(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), toolCallId: e2.toolCallId };
    }
    function Qm(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Lm._B({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallId: e2.toolCallId });
    }
    function jm(e2, t2) {
      return { _privacyMode: t2, result: Gm(e2.result, t2) };
    }
    function Gm(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Wm(e2.value, t2) };
        case "error":
          return { case: "error", value: Zm(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: eh(e2.value, t2) };
        case "fileNotFound":
          return { case: "fileNotFound", value: rh(e2.value, t2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: sh(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Hm(e2, t2, r2) {
      return new Lm.Ek({ result: zm(e2.result, t2, r2) });
    }
    function zm(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Vm(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Xm(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: th(e2.value, t2, r2) };
        case "fileNotFound":
          return { case: "fileNotFound", value: nh(e2.value, t2, r2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: oh(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Wm(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), diagnostics: e2.diagnostics.map((e3) => Km(e3, t2)), totalDiagnostics: e2.totalDiagnostics };
    }
    function Vm(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Lm.a1({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), diagnostics: e2.diagnostics.map((e3) => Ym(e3, t2, r2)), totalDiagnostics: e2.totalDiagnostics });
    }
    function Km(e2, t2) {
      return { _privacyMode: t2, severity: e2.severity, range: void 0 !== e2.range ? o(e2.range, t2) : void 0, message: (0, n.cZ)(e2.message, n.po.CODE, "message", t2), source: e2.source, code: e2.code, isStale: e2.isStale };
    }
    function Ym(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Lm.oQ({ severity: e2.severity, range: void 0 !== e2.range ? i(e2.range, t2, r2) : void 0, message: e2.message.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), source: e2.source, code: e2.code, isStale: e2.isStale });
    }
    function Zm(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function Xm(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Lm.Ho({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function eh(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function th(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Lm.J6({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function rh(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2) };
    }
    function nh(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Lm.Mu({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function sh(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2) };
    }
    function oh(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Lm.RP({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var ih = r(43135);
    function ah(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? lh(e2.args, t2) : void 0, result: void 0 !== e2.result ? dh(e2.result, t2) : void 0 };
    }
    function ch(e2, t2, r2) {
      return new ih.pP({ args: void 0 !== e2.args ? uh(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? mh(e2.result, t2, r2) : void 0 });
    }
    function lh(e2, t2) {
      return { _privacyMode: t2, paths: e2.paths.map((e3) => (0, n.cZ)(e3, n.po.PATH, "paths", t2)) };
    }
    function uh(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ih.u7({ paths: e2.paths.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })) });
    }
    function dh(e2, t2) {
      return { _privacyMode: t2, result: ph(e2.result, t2) };
    }
    function ph(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: fh(e2.value, t2) };
        case "error":
          return { case: "error", value: vh(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function mh(e2, t2, r2) {
      return new ih.Qi({ result: hh(e2.result, t2, r2) });
    }
    function hh(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: gh(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: _h(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function fh(e2, t2) {
      return { _privacyMode: t2, fileDiagnostics: e2.fileDiagnostics.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, path: (0, n.cZ)(e4.path, n.po.PATH, "path", t3), diagnostics: e4.diagnostics.map((e5) => (function(e6, t4) {
          return { _privacyMode: t4, severity: e6.severity, range: void 0 !== e6.range ? yh(e6.range, t4) : void 0, message: (0, n.cZ)(e6.message, n.po.CODE, "message", t4), source: e6.source, code: e6.code, isStale: e6.isStale };
        })(e5, t3)), diagnosticsCount: e4.diagnosticsCount };
      })(e3, t2)), totalFiles: e2.totalFiles, totalDiagnostics: e2.totalDiagnostics };
    }
    function gh(e2, t2, r2) {
      return new ih.Yk({ fileDiagnostics: e2.fileDiagnostics.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new ih.PR({ path: e4.path.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), diagnostics: e4.diagnostics.map((e5) => (function(e6, t4, r4) {
          const n3 = r4?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r4?.enforcing;
          return new ih.RY({ severity: e6.severity, range: void 0 !== e6.range ? wh(e6.range, t4, r4) : void 0, message: e6.message.unwrap(t4, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), source: e6.source, code: e6.code, isStale: e6.isStale });
        })(e5, t3, r3)), diagnosticsCount: e4.diagnosticsCount });
      })(e3, t2, r2)), totalFiles: e2.totalFiles, totalDiagnostics: e2.totalDiagnostics });
    }
    function yh(e2, t2) {
      return { _privacyMode: t2, start: void 0 !== e2.start ? a(e2.start, t2) : void 0, end: void 0 !== e2.end ? a(e2.end, t2) : void 0 };
    }
    function wh(e2, t2, r2) {
      return new ih.L6({ start: void 0 !== e2.start ? c(e2.start) : void 0, end: void 0 !== e2.end ? c(e2.end) : void 0 });
    }
    function vh(e2, t2) {
      return { _privacyMode: t2, errorMessage: (0, n.cZ)(e2.errorMessage, n.po.CODE, "error_message", t2) };
    }
    function _h(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ih.Tm({ errorMessage: e2.errorMessage.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var Ah = r(43955);
    function Sh(e2, t2) {
      return { _privacyMode: t2 };
    }
    function bh(e2, t2) {
      return { _privacyMode: t2, globs: e2.globs.map((e3) => (0, n.cZ)(e3, n.po.PATH, "globs", t2)) };
    }
    function Eh(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ah.uT({ globs: e2.globs.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })) });
    }
    function Ih(e2, t2) {
      return { _privacyMode: t2, description: (0, n.cZ)(e2.description, n.po.CODE, "description", t2) };
    }
    function Ch(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ah.Xo({ description: e2.description.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function kh(e2, t2) {
      return { _privacyMode: t2 };
    }
    function xh(e2, t2) {
      return { _privacyMode: t2, type: Th(e2.type, t2) };
    }
    function Th(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "global":
          return { case: "global", value: Sh(e2.value, t2) };
        case "fileGlobbed":
          return { case: "fileGlobbed", value: bh(e2.value, t2) };
        case "agentFetched":
          return { case: "agentFetched", value: Ih(e2.value, t2) };
        case "manuallyAttached":
          return { case: "manuallyAttached", value: kh(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Rh(e2, t2, r2) {
      return new Ah.f5({ type: Bh(e2.type, t2, r2) });
    }
    function Bh(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "global":
          return { case: "global", value: (e2.value, new Ah.i9({})) };
        case "fileGlobbed":
          return { case: "fileGlobbed", value: Eh(e2.value, t2, r2) };
        case "agentFetched":
          return { case: "agentFetched", value: Ch(e2.value, t2, r2) };
        case "manuallyAttached":
          return { case: "manuallyAttached", value: (e2.value, new Ah._u({})) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ph(e2, t2) {
      return { _privacyMode: t2, fullPath: (0, n.cZ)(e2.fullPath, n.po.PATH, "full_path", t2), content: (0, n.cZ)(e2.content, n.po.CODE, "content", t2), type: void 0 !== e2.type ? xh(e2.type, t2) : void 0, source: e2.source, gitRemoteOrigin: void 0 !== e2.gitRemoteOrigin ? (0, n.cZ)(e2.gitRemoteOrigin, n.po.PATH, "git_remote_origin", t2) : void 0, parseError: void 0 !== e2.parseError ? (0, n.cZ)(e2.parseError, n.po.CODE, "parse_error", t2) : void 0, environments: e2.environments, disabledEnvironments: e2.disabledEnvironments, plugin: e2.plugin, marketplace: e2.marketplace, pluginId: e2.pluginId, marketplaceId: e2.marketplaceId, scopedTo: e2.scopedTo, frontmatter: (0, n.cZ)(e2.frontmatter, n.po.CODE, "frontmatter", t2), isRequired: e2.isRequired };
    }
    function Jh(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Ah.DX({ fullPath: e2.fullPath.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), content: e2.content.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), type: void 0 !== e2.type ? Rh(e2.type, t2, r2) : void 0, source: e2.source, gitRemoteOrigin: e2.gitRemoteOrigin?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), parseError: e2.parseError?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), environments: e2.environments, disabledEnvironments: e2.disabledEnvironments, plugin: e2.plugin, marketplace: e2.marketplace, pluginId: e2.pluginId, marketplaceId: e2.marketplaceId, scopedTo: e2.scopedTo, frontmatter: e2.frontmatter.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), isRequired: e2.isRequired });
    }
    var Mh = r(42506);
    function qh(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Oh(e2.args, t2) : void 0, result: void 0 !== e2.result ? Fh(e2.result, t2) : void 0 };
    }
    function Dh(e2, t2, r2) {
      return new Mh.D8({ args: void 0 !== e2.args ? Nh(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Lh(e2.result, t2, r2) : void 0 });
    }
    function Oh(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), offset: e2.offset, limit: e2.limit, includeLineNumbers: e2.includeLineNumbers };
    }
    function Nh(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Mh.Qc({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), offset: e2.offset, limit: e2.limit, includeLineNumbers: e2.includeLineNumbers });
    }
    function Fh(e2, t2) {
      return { _privacyMode: t2, result: Uh(e2.result, t2) };
    }
    function Uh(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Gh(e2.value, t2) };
        case "error":
          return { case: "error", value: Vh(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Lh(e2, t2, r2) {
      return new Mh.uX({ result: $h(e2.result, t2, r2) });
    }
    function $h(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: zh(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Kh(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Qh(e2, t2) {
      return { _privacyMode: t2, startLine: e2.startLine, endLine: e2.endLine };
    }
    function jh(e2, t2, r2) {
      return new Mh.E8({ startLine: e2.startLine, endLine: e2.endLine });
    }
    function Gh(e2, t2) {
      return { _privacyMode: t2, isEmpty: e2.isEmpty, exceededLimit: e2.exceededLimit, totalLines: e2.totalLines, fileSize: e2.fileSize, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), readRange: void 0 !== e2.readRange ? Qh(e2.readRange, t2) : void 0, includeLineNumbers: e2.includeLineNumbers, relatedCursorRulePaths: e2.relatedCursorRulePaths.map((e3) => (0, n.cZ)(e3, n.po.PATH, "related_cursor_rule_paths", t2)), relatedCursorRules: e2.relatedCursorRules.map((e3) => Ph(e3, t2)), output: Hh(e2.output, t2) };
    }
    function Hh(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "content":
          return { case: "content", value: (0, n.cZ)(e2.value, n.po.CODE, "content", t2) };
        case "data":
          return { case: "data", value: (0, n.Yz)(e2.value, n.po.CODE, "data", t2) };
        case "dataBlobId":
          return { case: "dataBlobId", value: e2.value };
        case "contentBlobId":
          return { case: "contentBlobId", value: e2.value };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function zh(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Mh.A2({ isEmpty: e2.isEmpty, exceededLimit: e2.exceededLimit, totalLines: e2.totalLines, fileSize: e2.fileSize, path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), readRange: void 0 !== e2.readRange ? jh(e2.readRange) : void 0, includeLineNumbers: e2.includeLineNumbers, relatedCursorRulePaths: e2.relatedCursorRulePaths.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), relatedCursorRules: e2.relatedCursorRules.map((e3) => Jh(e3, t2, r2)), output: Wh(e2.output, t2, r2) });
    }
    function Wh(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "content":
          return { case: "content", value: e2.value.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) };
        case "data":
          return { case: "data", value: e2.value.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) };
        case "dataBlobId":
          return { case: "dataBlobId", value: e2.value };
        case "contentBlobId":
          return { case: "contentBlobId", value: e2.value };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Vh(e2, t2) {
      return { _privacyMode: t2, errorMessage: (0, n.cZ)(e2.errorMessage, n.po.CODE, "error_message", t2) };
    }
    function Kh(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Mh.vO({ errorMessage: e2.errorMessage.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var Yh = r(36584);
    function Zh(e2, t2) {
      return { _privacyMode: t2, summary: (0, n.cZ)(e2.summary, n.po.CODE, "summary", t2), themes: e2.themes.map((e3) => (0, n.cZ)(e3, n.po.CODE, "themes", t2)), recommendedAction: e2.recommendedAction, recommendedActionEvidence: void 0 !== e2.recommendedActionEvidence ? (0, n.cZ)(e2.recommendedActionEvidence, n.po.CODE, "recommended_action_evidence", t2) : void 0, checkKeys: e2.checkKeys };
    }
    function Xh(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Yh.dF({ summary: e2.summary.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), themes: e2.themes.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), recommendedAction: e2.recommendedAction, recommendedActionEvidence: e2.recommendedActionEvidence?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), checkKeys: e2.checkKeys });
    }
    function ef(e2, t2) {
      return { _privacyMode: t2, findings: e2.findings.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, checkName: e4.checkName, detailsUrl: void 0 !== e4.detailsUrl ? (0, n.cZ)(e4.detailsUrl, n.po.PATH, "details_url", t3) : void 0, tldr: (0, n.cZ)(e4.tldr, n.po.CODE, "tldr", t3), rootCause: void 0 !== e4.rootCause ? (0, n.cZ)(e4.rootCause, n.po.CODE, "root_cause", t3) : void 0, failingSignal: void 0 !== e4.failingSignal ? (0, n.cZ)(e4.failingSignal, n.po.CODE, "failing_signal", t3) : void 0, suggestedNextStep: void 0 !== e4.suggestedNextStep ? (0, n.cZ)(e4.suggestedNextStep, n.po.CODE, "suggested_next_step", t3) : void 0, diffRelation: e4.diffRelation, diffRelationEvidence: void 0 !== e4.diffRelationEvidence ? (0, n.cZ)(e4.diffRelationEvidence, n.po.CODE, "diff_relation_evidence", t3) : void 0, flakeAssessment: e4.flakeAssessment, flakeEvidence: void 0 !== e4.flakeEvidence ? (0, n.cZ)(e4.flakeEvidence, n.po.CODE, "flake_evidence", t3) : void 0, rerunAvailable: e4.rerunAvailable, rerunEvidence: void 0 !== e4.rerunEvidence ? (0, n.cZ)(e4.rerunEvidence, n.po.CODE, "rerun_evidence", t3) : void 0, recommendedAction: e4.recommendedAction, recommendedActionEvidence: void 0 !== e4.recommendedActionEvidence ? (0, n.cZ)(e4.recommendedActionEvidence, n.po.CODE, "recommended_action_evidence", t3) : void 0, confidence: e4.confidence };
      })(e3, t2)), overall: void 0 !== e2.overall ? Zh(e2.overall, t2) : void 0, toolCallId: e2.toolCallId };
    }
    function tf(e2, t2, r2) {
      return new Yh.XR({ findings: e2.findings.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new Yh.v4({ checkName: e4.checkName, detailsUrl: e4.detailsUrl?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), tldr: e4.tldr.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), rootCause: e4.rootCause?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), failingSignal: e4.failingSignal?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), suggestedNextStep: e4.suggestedNextStep?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), diffRelation: e4.diffRelation, diffRelationEvidence: e4.diffRelationEvidence?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), flakeAssessment: e4.flakeAssessment, flakeEvidence: e4.flakeEvidence?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), rerunAvailable: e4.rerunAvailable, rerunEvidence: e4.rerunEvidence?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), recommendedAction: e4.recommendedAction, recommendedActionEvidence: e4.recommendedActionEvidence?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), confidence: e4.confidence });
      })(e3, t2, r2)), overall: void 0 !== e2.overall ? Xh(e2.overall, t2, r2) : void 0, toolCallId: e2.toolCallId });
    }
    function rf(e2, t2) {
      return { _privacyMode: t2, message: (0, n.cZ)(e2.message, n.po.CODE, "message", t2) };
    }
    function nf(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Yh.LO({ message: e2.message.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function sf(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function of(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Yh.Ag({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function af(e2, t2) {
      return { _privacyMode: t2, result: cf(e2.result, t2) };
    }
    function cf(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: rf(e2.value, t2) };
        case "error":
          return { case: "error", value: sf(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function lf(e2, t2, r2) {
      return new Yh.Ro({ result: uf(e2.result, t2, r2) });
    }
    function uf(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: nf(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: of(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function df(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? ef(e2.args, t2) : void 0, result: void 0 !== e2.result ? af(e2.result, t2) : void 0 };
    }
    function pf(e2, t2, r2) {
      return new Yh.ge({ args: void 0 !== e2.args ? tf(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? lf(e2.result, t2, r2) : void 0 });
    }
    var mf = r(11531);
    function hf(e2, t2) {
      return { _privacyMode: t2, mode: e2.mode, toolCallId: e2.toolCallId, saveAsFilename: void 0 !== e2.saveAsFilename ? (0, n.cZ)(e2.saveAsFilename, n.po.PATH, "save_as_filename", t2) : void 0 };
    }
    function ff(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new mf.zH({ mode: e2.mode, toolCallId: e2.toolCallId, saveAsFilename: e2.saveAsFilename?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function gf(e2, t2) {
      return { _privacyMode: t2, result: yf(e2.result, t2) };
    }
    function yf(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "startSuccess":
          return { case: "startSuccess", value: _f(e2.value, t2) };
        case "saveSuccess":
          return { case: "saveSuccess", value: Sf(e2.value, t2) };
        case "discardSuccess":
          return { case: "discardSuccess", value: Ef(e2.value, t2) };
        case "failure":
          return { case: "failure", value: Cf(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function wf(e2, t2, r2) {
      return new mf.Tj({ result: vf(e2.result, t2, r2) });
    }
    function vf(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "startSuccess":
          return { case: "startSuccess", value: Af(e2.value, t2, r2) };
        case "saveSuccess":
          return { case: "saveSuccess", value: bf(e2.value, t2, r2) };
        case "discardSuccess":
          return { case: "discardSuccess", value: If(e2.value, t2, r2) };
        case "failure":
          return { case: "failure", value: kf(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function _f(e2, t2) {
      return { _privacyMode: t2, wasPriorRecordingCancelled: e2.wasPriorRecordingCancelled, wasSaveAsFilenameIgnored: e2.wasSaveAsFilenameIgnored };
    }
    function Af(e2, t2, r2) {
      return new mf.T4({ wasPriorRecordingCancelled: e2.wasPriorRecordingCancelled, wasSaveAsFilenameIgnored: e2.wasSaveAsFilenameIgnored });
    }
    function Sf(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), recordingDurationMs: e2.recordingDurationMs, requestedFilePathRejectedReason: e2.requestedFilePathRejectedReason };
    }
    function bf(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new mf.ol({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), recordingDurationMs: e2.recordingDurationMs, requestedFilePathRejectedReason: e2.requestedFilePathRejectedReason });
    }
    function Ef(e2, t2) {
      return { _privacyMode: t2 };
    }
    function If(e2, t2, r2) {
      return new mf.N8({});
    }
    function Cf(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function kf(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new mf.yH({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var xf = r(35110);
    function Tf(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? hf(e2.args, t2) : void 0, result: void 0 !== e2.result ? gf(e2.result, t2) : void 0 };
    }
    function Rf(e2, t2, r2) {
      return new xf.q({ args: void 0 !== e2.args ? ff(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? wf(e2.result, t2, r2) : void 0 });
    }
    var Bf = r(95621);
    function Pf(e2, t2) {
      return { _privacyMode: t2, unexpectedActionOutcomes: (0, n.cZ)(e2.unexpectedActionOutcomes, n.po.CODE, "unexpected_action_outcomes", t2), relevantInstructions: (0, n.cZ)(e2.relevantInstructions, n.po.CODE, "relevant_instructions", t2), scenarioAnalysis: (0, n.cZ)(e2.scenarioAnalysis, n.po.CODE, "scenario_analysis", t2), criticalSynthesis: (0, n.cZ)(e2.criticalSynthesis, n.po.CODE, "critical_synthesis", t2), nextSteps: (0, n.cZ)(e2.nextSteps, n.po.CODE, "next_steps", t2), toolCallId: e2.toolCallId };
    }
    function Jf(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Bf.fQ({ unexpectedActionOutcomes: e2.unexpectedActionOutcomes.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), relevantInstructions: e2.relevantInstructions.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), scenarioAnalysis: e2.scenarioAnalysis.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), criticalSynthesis: e2.criticalSynthesis.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), nextSteps: e2.nextSteps.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallId: e2.toolCallId });
    }
    function Mf(e2, t2) {
      return { _privacyMode: t2, result: qf(e2.result, t2) };
    }
    function qf(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Nf(e2.value, t2) };
        case "error":
          return { case: "error", value: Uf(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Df(e2, t2, r2) {
      return new Bf.V$({ result: Of(e2.result, t2, r2) });
    }
    function Of(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Ff(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Lf(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Nf(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Ff(e2, t2, r2) {
      return new Bf.xq({});
    }
    function Uf(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function Lf(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Bf.ML({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function $f(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Pf(e2.args, t2) : void 0, result: void 0 !== e2.result ? Mf(e2.result, t2) : void 0 };
    }
    function Qf(e2, t2, r2) {
      return new Bf.YF({ args: void 0 !== e2.args ? Jf(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Df(e2.result, t2, r2) : void 0 });
    }
    var jf = r(23476);
    function Gf(e2, t2) {
      return { _privacyMode: t2, installScript: (0, n.cZ)(e2.installScript, n.po.CODE, "install_script", t2), dockerfileContents: (0, n.cZ)(e2.dockerfileContents, n.po.CODE, "dockerfile_contents", t2) };
    }
    function Hf(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new jf.ec({ installScript: e2.installScript.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), dockerfileContents: e2.dockerfileContents.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function zf(e2, t2) {
      return { _privacyMode: t2, config: void 0 !== e2.config ? Gf(e2.config, t2) : void 0, mode: e2.mode, checkoutRefOverrides: e2.checkoutRefOverrides.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, repoUrl: (0, n.cZ)(e4.repoUrl, n.po.PATH, "repo_url", t3), ref: (0, n.cZ)(e4.ref, n.po.PATH, "ref", t3) };
      })(e3, t2)) };
    }
    function Wf(e2, t2, r2) {
      return new jf.TO({ config: void 0 !== e2.config ? Hf(e2.config, t2, r2) : void 0, mode: e2.mode, checkoutRefOverrides: e2.checkoutRefOverrides.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new jf.u1({ repoUrl: e4.repoUrl.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), ref: e4.ref.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
      })(e3, t2, r2)) });
    }
    function Vf(e2, t2) {
      return { _privacyMode: t2, setupLogs: (0, n.cZ)(e2.setupLogs, n.po.CODE, "setup_logs", t2) };
    }
    function Kf(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new jf.fv({ setupLogs: e2.setupLogs.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Yf(e2, t2) {
      return { _privacyMode: t2, errorMessage: (0, n.cZ)(e2.errorMessage, n.po.CODE, "error_message", t2), setupLogs: (0, n.cZ)(e2.setupLogs, n.po.CODE, "setup_logs", t2) };
    }
    function Zf(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new jf.uq({ errorMessage: e2.errorMessage.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), setupLogs: e2.setupLogs.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Xf(e2, t2) {
      return { _privacyMode: t2, result: eg(e2.result, t2) };
    }
    function eg(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Vf(e2.value, t2) };
        case "failure":
          return { case: "failure", value: Yf(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function tg(e2, t2, r2) {
      return new jf.dV({ result: rg(e2.result, t2, r2) });
    }
    function rg(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Kf(e2.value, t2, r2) };
        case "failure":
          return { case: "failure", value: Zf(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function ng(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? zf(e2.args, t2) : void 0, result: void 0 !== e2.result ? Xf(e2.result, t2) : void 0, associatedPodKey: e2.associatedPodKey };
    }
    function sg(e2, t2, r2) {
      return new jf.us({ args: void 0 !== e2.args ? Wf(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? tg(e2.result, t2, r2) : void 0, associatedPodKey: e2.associatedPodKey });
    }
    function og(e2, t2) {
      return { _privacyMode: t2, associatedPodKey: e2.associatedPodKey };
    }
    var ig = r(28689);
    function ag(e2, t2) {
      return { _privacyMode: t2, title: (0, n.cZ)(e2.title, n.po.CODE, "title", t2), file: (0, n.cZ)(e2.file, n.po.PATH, "file", t2), startLine: e2.startLine, endLine: e2.endLine, description: (0, n.cZ)(e2.description, n.po.CODE, "description", t2), severity: e2.severity, category: e2.category, rationale: (0, n.cZ)(e2.rationale, n.po.CODE, "rationale", t2) };
    }
    function cg(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ig.iv({ title: e2.title.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), file: e2.file.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), startLine: e2.startLine, endLine: e2.endLine, description: e2.description.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), severity: e2.severity, category: e2.category, rationale: e2.rationale.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function lg(e2, t2) {
      return { _privacyMode: t2, output: (0, n.cZ)(e2.output, n.po.CODE, "output", t2) };
    }
    function ug(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ig.I6({ output: e2.output.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function dg(e2, t2) {
      return { _privacyMode: t2, errorMessage: (0, n.cZ)(e2.errorMessage, n.po.CODE, "error_message", t2) };
    }
    function pg(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ig.Tu({ errorMessage: e2.errorMessage.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function mg(e2, t2) {
      return { _privacyMode: t2, result: hg(e2.result, t2) };
    }
    function hg(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: lg(e2.value, t2) };
        case "error":
          return { case: "error", value: dg(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function fg(e2, t2, r2) {
      return new ig.Uk({ result: gg(e2.result, t2, r2) });
    }
    function gg(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: ug(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: pg(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function yg(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? ag(e2.args, t2) : void 0, result: void 0 !== e2.result ? mg(e2.result, t2) : void 0 };
    }
    function wg(e2, t2, r2) {
      return new ig.FW({ args: void 0 !== e2.args ? cg(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? fg(e2.result, t2, r2) : void 0 });
    }
    var vg = r(60867);
    function _g(e2, t2) {
      return { _privacyMode: t2, bugId: e2.bugId, bugTitle: (0, n.cZ)(e2.bugTitle, n.po.CODE, "bug_title", t2), verdict: e2.verdict, explanation: (0, n.cZ)(e2.explanation, n.po.CODE, "explanation", t2), severity: e2.severity };
    }
    function Ag(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new vg.Y6({ bugId: e2.bugId, bugTitle: e2.bugTitle.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), verdict: e2.verdict, explanation: e2.explanation.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), severity: e2.severity });
    }
    function Sg(e2, t2) {
      return { _privacyMode: t2, summary: (0, n.cZ)(e2.summary, n.po.CODE, "summary", t2), results: e2.results.map((e3) => _g(e3, t2)) };
    }
    function bg(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new vg.p4({ summary: e2.summary.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), results: e2.results.map((e3) => Ag(e3, t2, r2)) });
    }
    function Eg(e2, t2) {
      return { _privacyMode: t2, results: e2.results.map((e3) => _g(e3, t2)) };
    }
    function Ig(e2, t2, r2) {
      return new vg.RH({ results: e2.results.map((e3) => Ag(e3, t2, r2)) });
    }
    function Cg(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function kg(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new vg.q3({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function xg(e2, t2) {
      return { _privacyMode: t2, result: Tg(e2.result, t2) };
    }
    function Tg(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Eg(e2.value, t2) };
        case "error":
          return { case: "error", value: Cg(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Rg(e2, t2, r2) {
      return new vg.Ht({ result: Bg(e2.result, t2, r2) });
    }
    function Bg(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Ig(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: kg(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Pg(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Sg(e2.args, t2) : void 0, result: void 0 !== e2.result ? xg(e2.result, t2) : void 0 };
    }
    function Jg(e2, t2, r2) {
      return new vg.U_({ args: void 0 !== e2.args ? bg(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? Rg(e2.result, t2, r2) : void 0 });
    }
    var Mg = r(83133);
    function qg(e2, t2) {
      return { _privacyMode: t2, fullPath: (0, n.cZ)(e2.fullPath, n.po.PATH, "full_path", t2), content: (0, n.cZ)(e2.content, n.po.CODE, "content", t2), description: (0, n.cZ)(e2.description, n.po.CODE, "description", t2), parseError: void 0 !== e2.parseError ? (0, n.cZ)(e2.parseError, n.po.CODE, "parse_error", t2) : void 0, environments: e2.environments, disabledEnvironments: e2.disabledEnvironments, gitRemoteOrigin: void 0 !== e2.gitRemoteOrigin ? (0, n.cZ)(e2.gitRemoteOrigin, n.po.PATH, "git_remote_origin", t2) : void 0, disableModelInvocation: e2.disableModelInvocation, plugin: e2.plugin, marketplace: e2.marketplace, pluginId: e2.pluginId, marketplaceId: e2.marketplaceId, globs: e2.globs.map((e3) => (0, n.cZ)(e3, n.po.PATH, "globs", t2)), scopedTo: e2.scopedTo, argumentHint: (0, n.cZ)(e2.argumentHint, n.po.CODE, "argument_hint", t2), disableUserInvocation: e2.disableUserInvocation };
    }
    function Dg(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Mg.N({ fullPath: e2.fullPath.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), content: e2.content.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), description: e2.description.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), parseError: e2.parseError?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), environments: e2.environments, disabledEnvironments: e2.disabledEnvironments, gitRemoteOrigin: e2.gitRemoteOrigin?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), disableModelInvocation: e2.disableModelInvocation, plugin: e2.plugin, marketplace: e2.marketplace, pluginId: e2.pluginId, marketplaceId: e2.marketplaceId, globs: e2.globs.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), scopedTo: e2.scopedTo, argumentHint: e2.argumentHint.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), disableUserInvocation: e2.disableUserInvocation });
    }
    var Og = r(91881);
    var Ng = r(11491);
    function Fg(e2, t2) {
      return { _privacyMode: t2, type: Ug(e2.type, t2) };
    }
    function Ug(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "unspecified":
          return { case: "unspecified", value: Qg(e2.value, t2) };
        case "computerUse":
          return { case: "computerUse", value: Gg(e2.value, t2) };
        case "custom":
          return { case: "custom", value: dy(e2.value, t2) };
        case "explore":
          return { case: "explore", value: zg(e2.value, t2) };
        case "mediaReview":
          return { case: "mediaReview", value: Vg(e2.value, t2) };
        case "bash":
          return { case: "bash", value: Yg(e2.value, t2) };
        case "browserUse":
          return { case: "browserUse", value: ty(e2.value, t2) };
        case "shell":
          return { case: "shell", value: Xg(e2.value, t2) };
        case "vmSetupHelper":
          return { case: "vmSetupHelper", value: ny(e2.value, t2) };
        case "debug":
          return { case: "debug", value: oy(e2.value, t2) };
        case "cursorGuide":
          return { case: "cursorGuide", value: ay(e2.value, t2) };
        case "watchVideo":
          return { case: "watchVideo", value: ly(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Lg(e2, t2, r2) {
      return new Ng._L({ type: $g(e2.type, t2, r2) });
    }
    function $g(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "unspecified":
          return { case: "unspecified", value: jg(e2.value, t2, r2) };
        case "computerUse":
          return { case: "computerUse", value: Hg(e2.value, t2, r2) };
        case "custom":
          return { case: "custom", value: py(e2.value, t2, r2) };
        case "explore":
          return { case: "explore", value: Wg(e2.value, t2, r2) };
        case "mediaReview":
          return { case: "mediaReview", value: Kg(e2.value, t2, r2) };
        case "bash":
          return { case: "bash", value: Zg(e2.value, t2, r2) };
        case "browserUse":
          return { case: "browserUse", value: ry(e2.value, t2, r2) };
        case "shell":
          return { case: "shell", value: ey(e2.value, t2, r2) };
        case "vmSetupHelper":
          return { case: "vmSetupHelper", value: sy(e2.value, t2, r2) };
        case "debug":
          return { case: "debug", value: iy(e2.value, t2, r2) };
        case "cursorGuide":
          return { case: "cursorGuide", value: cy(e2.value, t2, r2) };
        case "watchVideo":
          return { case: "watchVideo", value: uy(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Qg(e2, t2) {
      return { _privacyMode: t2 };
    }
    function jg(e2, t2, r2) {
      return new Ng.p_({});
    }
    function Gg(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Hg(e2, t2, r2) {
      return new Ng._x({});
    }
    function zg(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Wg(e2, t2, r2) {
      return new Ng.$j({});
    }
    function Vg(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Kg(e2, t2, r2) {
      return new Ng.aF({});
    }
    function Yg(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Zg(e2, t2, r2) {
      return new Ng.IR({});
    }
    function Xg(e2, t2) {
      return { _privacyMode: t2 };
    }
    function ey(e2, t2, r2) {
      return new Ng.cr({});
    }
    function ty(e2, t2) {
      return { _privacyMode: t2 };
    }
    function ry(e2, t2, r2) {
      return new Ng.zn({});
    }
    function ny(e2, t2) {
      return { _privacyMode: t2 };
    }
    function sy(e2, t2, r2) {
      return new Ng.iq({});
    }
    function oy(e2, t2) {
      return { _privacyMode: t2 };
    }
    function iy(e2, t2, r2) {
      return new Ng.l0({});
    }
    function ay(e2, t2) {
      return { _privacyMode: t2 };
    }
    function cy(e2, t2, r2) {
      return new Ng.sx({});
    }
    function ly(e2, t2) {
      return { _privacyMode: t2 };
    }
    function uy(e2, t2, r2) {
      return new Ng.cl({});
    }
    function dy(e2, t2) {
      return { _privacyMode: t2, name: e2.name };
    }
    function py(e2, t2, r2) {
      return new Ng.Bk({ name: e2.name });
    }
    var my = r(38427);
    function hy(e2, t2) {
      return { _privacyMode: t2, spec: fy(e2.spec, t2) };
    }
    function fy(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "replace":
          return { case: "replace", value: (0, n.cZ)(e2.value, n.po.CODE, "replace", t2) };
        case "append":
          return { case: "append", value: (0, n.cZ)(e2.value, n.po.CODE, "append", t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function gy(e2, t2, r2) {
      return new my.$({ spec: yy(e2.spec, t2, r2) });
    }
    function yy(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "replace":
          return { case: "replace", value: e2.value.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) };
        case "append":
          return { case: "append", value: e2.value.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    var wy = r(89396);
    function vy(e2, t2) {
      return { _privacyMode: t2, notesSessionId: e2.notesSessionId, workspaceId: e2.workspaceId, readOnlyPinnedTreeSha: e2.readOnlyPinnedTreeSha, readOnlyPluginCacheRoot: void 0 !== e2.readOnlyPluginCacheRoot ? (0, n.cZ)(e2.readOnlyPluginCacheRoot, n.po.PATH, "read_only_plugin_cache_root", t2) : void 0, useCached: e2.useCached, waitForWorkspaceCache: e2.waitForWorkspaceCache };
    }
    function _y(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new wy._K({ notesSessionId: e2.notesSessionId, workspaceId: e2.workspaceId, readOnlyPinnedTreeSha: e2.readOnlyPinnedTreeSha, readOnlyPluginCacheRoot: e2.readOnlyPluginCacheRoot?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), useCached: e2.useCached, waitForWorkspaceCache: e2.waitForWorkspaceCache });
    }
    function Ay(e2, t2) {
      return { _privacyMode: t2, result: Sy(e2.result, t2) };
    }
    function Sy(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Iy(e2.value, t2) };
        case "error":
          return { case: "error", value: ky(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: Ty(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function by(e2, t2, r2) {
      return new wy._G({ result: Ey(e2.result, t2, r2) });
    }
    function Ey(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Cy(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: xy(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: Ry(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Iy(e2, t2) {
      return { _privacyMode: t2, requestContext: void 0 !== e2.requestContext ? Gy(e2.requestContext, t2) : void 0, servedFromDiskCache: e2.servedFromDiskCache };
    }
    function Cy(e2, t2, r2) {
      return new wy.yW({ requestContext: void 0 !== e2.requestContext ? Hy(e2.requestContext, t2, r2) : void 0, servedFromDiskCache: e2.servedFromDiskCache });
    }
    function ky(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function xy(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new wy.nf({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Ty(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function Ry(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new wy.nq({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function By(e2, t2) {
      return { _privacyMode: t2, osVersion: e2.osVersion, workspacePaths: e2.workspacePaths.map((e3) => (0, n.cZ)(e3, n.po.PATH, "workspace_paths", t2)), shell: e2.shell, sandboxEnabled: e2.sandboxEnabled, terminalsFolder: (0, n.cZ)(e2.terminalsFolder, n.po.PATH, "terminals_folder", t2), agentSharedNotesFolder: (0, n.cZ)(e2.agentSharedNotesFolder, n.po.PATH, "agent_shared_notes_folder", t2), agentConversationNotesFolder: (0, n.cZ)(e2.agentConversationNotesFolder, n.po.PATH, "agent_conversation_notes_folder", t2), timeZone: e2.timeZone, projectFolder: (0, n.cZ)(e2.projectFolder, n.po.PATH, "project_folder", t2), agentTranscriptsFolder: (0, n.cZ)(e2.agentTranscriptsFolder, n.po.PATH, "agent_transcripts_folder", t2), artifactsFolder: void 0 !== e2.artifactsFolder ? (0, n.cZ)(e2.artifactsFolder, n.po.PATH, "artifacts_folder", t2) : void 0, sandboxSupported: e2.sandboxSupported, sandboxNetworkHasDefaults: e2.sandboxNetworkHasDefaults, sandboxNetworkExplicitAllowlist: e2.sandboxNetworkExplicitAllowlist, secretRedactionEnabled: e2.secretRedactionEnabled, computerUseSupported: e2.computerUseSupported, isWorkingDirHomeDir: e2.isWorkingDirHomeDir, processWorkingDirectory: void 0 !== e2.processWorkingDirectory ? (0, n.cZ)(e2.processWorkingDirectory, n.po.PATH, "process_working_directory", t2) : void 0, smartModeClassifierAutoModeEnabled: e2.smartModeClassifierAutoModeEnabled, devForceNextSmartModeClassifierBlockToken: void 0 !== e2.devForceNextSmartModeClassifierBlockToken ? (0, n.cZ)(e2.devForceNextSmartModeClassifierBlockToken, n.po.CREDENTIALS, "dev_force_next_smart_mode_classifier_block_token", t2) : void 0, devDelayNextSmartModeClassifierToken: void 0 !== e2.devDelayNextSmartModeClassifierToken ? (0, n.cZ)(e2.devDelayNextSmartModeClassifierToken, n.po.CREDENTIALS, "dev_delay_next_smart_mode_classifier_token", t2) : void 0, mountedAgentStores: e2.mountedAgentStores.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, path: (0, n.cZ)(e4.path, n.po.PATH, "path", t3), kind: e4.kind, alias: void 0 !== e4.alias ? (0, n.cZ)(e4.alias, n.po.PATH, "alias", t3) : void 0, readOnly: e4.readOnly, inheritedFromPath: void 0 !== e4.inheritedFromPath ? (0, n.cZ)(e4.inheritedFromPath, n.po.PATH, "inherited_from_path", t3) : void 0 };
      })(e3, t2)), userAgentStoreWebContext: void 0 !== e2.userAgentStoreWebContext ? Jy(e2.userAgentStoreWebContext, t2) : void 0, devMockPromptTime: void 0 !== e2.devMockPromptTime ? e2.devMockPromptTime.toDate() : void 0, agentStoreDynamicMountEnabled: e2.agentStoreDynamicMountEnabled };
    }
    function Py(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new wy.GE({ osVersion: e2.osVersion, workspacePaths: e2.workspacePaths.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), shell: e2.shell, sandboxEnabled: e2.sandboxEnabled, terminalsFolder: e2.terminalsFolder.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), agentSharedNotesFolder: e2.agentSharedNotesFolder.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), agentConversationNotesFolder: e2.agentConversationNotesFolder.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), timeZone: e2.timeZone, projectFolder: e2.projectFolder.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), agentTranscriptsFolder: e2.agentTranscriptsFolder.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), artifactsFolder: e2.artifactsFolder?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), sandboxSupported: e2.sandboxSupported, sandboxNetworkHasDefaults: e2.sandboxNetworkHasDefaults, sandboxNetworkExplicitAllowlist: e2.sandboxNetworkExplicitAllowlist, secretRedactionEnabled: e2.secretRedactionEnabled, computerUseSupported: e2.computerUseSupported, isWorkingDirHomeDir: e2.isWorkingDirHomeDir, processWorkingDirectory: e2.processWorkingDirectory?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), smartModeClassifierAutoModeEnabled: e2.smartModeClassifierAutoModeEnabled, devForceNextSmartModeClassifierBlockToken: e2.devForceNextSmartModeClassifierBlockToken?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), devDelayNextSmartModeClassifierToken: e2.devDelayNextSmartModeClassifierToken?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), mountedAgentStores: e2.mountedAgentStores.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new wy.Lz({ path: e4.path.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), kind: e4.kind, alias: e4.alias?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), readOnly: e4.readOnly, inheritedFromPath: e4.inheritedFromPath?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }) });
      })(e3, t2, r2)), userAgentStoreWebContext: void 0 !== e2.userAgentStoreWebContext ? My(e2.userAgentStoreWebContext, t2, r2) : void 0, devMockPromptTime: void 0 !== e2.devMockPromptTime ? el.Timestamp.fromDate(e2.devMockPromptTime) : void 0, agentStoreDynamicMountEnabled: e2.agentStoreDynamicMountEnabled });
    }
    function Jy(e2, t2) {
      return { _privacyMode: t2, storeId: e2.storeId, portalBaseUrl: e2.portalBaseUrl };
    }
    function My(e2, t2, r2) {
      return new wy.X7({ storeId: e2.storeId, portalBaseUrl: e2.portalBaseUrl });
    }
    function qy(e2, t2) {
      return { _privacyMode: t2, logPath: (0, n.cZ)(e2.logPath, n.po.PATH, "log_path", t2), serverEndpoint: e2.serverEndpoint, sessionId: e2.sessionId };
    }
    function Dy(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new wy.TT({ logPath: e2.logPath.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), serverEndpoint: e2.serverEndpoint, sessionId: e2.sessionId });
    }
    function Oy(e2, t2) {
      return { _privacyMode: t2, skillDescriptors: e2.skillDescriptors.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, name: e4.name, description: (0, n.cZ)(e4.description, n.po.CODE, "description", t3), folderPath: (0, n.cZ)(e4.folderPath, n.po.PATH, "folder_path", t3), enabled: e4.enabled, parseError: void 0 !== e4.parseError ? (0, n.cZ)(e4.parseError, n.po.CODE, "parse_error", t3) : void 0, readmeFilePath: (0, n.cZ)(e4.readmeFilePath, n.po.PATH, "readme_file_path", t3), packageType: e4.packageType };
      })(e3, t2)) };
    }
    function Ny(e2, t2, r2) {
      return new wy.uw({ skillDescriptors: e2.skillDescriptors.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new wy.ng({ name: e4.name, description: e4.description.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), folderPath: e4.folderPath.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), enabled: e4.enabled, parseError: e4.parseError?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), readmeFilePath: e4.readmeFilePath.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), packageType: e4.packageType });
      })(e3, t2, r2)) });
    }
    function Fy(e2, t2) {
      return { _privacyMode: t2, configuredSteps: e2.configuredSteps };
    }
    function Uy(e2, t2, r2) {
      return new wy.Jy({ configuredSteps: e2.configuredSteps });
    }
    function Ly(e2, t2) {
      return { _privacyMode: t2, allowInstructions: e2.allowInstructions.map((e3) => (0, n.cZ)(e3, n.po.CODE, "allow_instructions", t2)), blockInstructions: e2.blockInstructions.map((e3) => (0, n.cZ)(e3, n.po.CODE, "block_instructions", t2)) };
    }
    function $y(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new wy.ag({ allowInstructions: e2.allowInstructions.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), blockInstructions: e2.blockInstructions.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })) });
    }
    function Qy(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), renderedDiffs: e2.renderedDiffs.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, startLineNumber: e4.startLineNumber, endLineNumberExclusive: e4.endLineNumberExclusive, beforeContextLines: e4.beforeContextLines.map((e5) => (0, n.cZ)(e5, n.po.CODE, "before_context_lines", t3)), removedLines: e4.removedLines.map((e5) => (0, n.cZ)(e5, n.po.CODE, "removed_lines", t3)), addedLines: e4.addedLines.map((e5) => (0, n.cZ)(e5, n.po.CODE, "added_lines", t3)), afterContextLines: e4.afterContextLines.map((e5) => (0, n.cZ)(e5, n.po.CODE, "after_context_lines", t3)) };
      })(e3, t2)), isNewFile: e2.isNewFile, isDeletedFile: e2.isDeletedFile };
    }
    function jy(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new wy.ip({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), renderedDiffs: e2.renderedDiffs.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new wy.q8({ startLineNumber: e4.startLineNumber, endLineNumberExclusive: e4.endLineNumberExclusive, beforeContextLines: e4.beforeContextLines.map((e5) => e5.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 })), removedLines: e4.removedLines.map((e5) => e5.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 })), addedLines: e4.addedLines.map((e5) => e5.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 })), afterContextLines: e4.afterContextLines.map((e5) => e5.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 })) });
      })(e3, t2, r2)), isNewFile: e2.isNewFile, isDeletedFile: e2.isDeletedFile });
    }
    function Gy(e2, t2) {
      return { _privacyMode: t2, rules: e2.rules.map((e3) => Ph(e3, t2)), env: void 0 !== e2.env ? By(e2.env, t2) : void 0, repositoryInfo: e2.repositoryInfo.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, relativeWorkspacePath: (0, n.cZ)(e4.relativeWorkspacePath, n.po.PATH, "relative_workspace_path", t3), remoteUrls: e4.remoteUrls.map((e5) => (0, n.cZ)(e5, n.po.PATH, "remote_urls", t3)), remoteNames: e4.remoteNames.map((e5) => (0, n.cZ)(e5, n.po.PATH, "remote_names", t3)), repoName: (0, n.cZ)(e4.repoName, n.po.PATH, "repo_name", t3), repoOwner: (0, n.cZ)(e4.repoOwner, n.po.PATH, "repo_owner", t3), isTracked: e4.isTracked, isLocal: e4.isLocal, orthogonalTransformSeed: e4.orthogonalTransformSeed, workspaceUri: (0, n.cZ)(e4.workspaceUri, n.po.PATH, "workspace_uri", t3), pathEncryptionKey: (0, n.cZ)(e4.pathEncryptionKey, n.po.CREDENTIALS, "path_encryption_key", t3) };
      })(e3, t2)), tools: e2.tools.map((e3) => rl(e3, t2)), conversationNotesListing: void 0 !== e2.conversationNotesListing ? (0, n.cZ)(e2.conversationNotesListing, n.po.CODE, "conversation_notes_listing", t2) : void 0, sharedNotesListing: void 0 !== e2.sharedNotesListing ? (0, n.cZ)(e2.sharedNotesListing, n.po.CODE, "shared_notes_listing", t2) : void 0, gitRepos: e2.gitRepos.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, path: (0, n.cZ)(e4.path, n.po.PATH, "path", t3), status: (0, n.cZ)(e4.status, n.po.CODE, "status", t3), branchName: (0, n.cZ)(e4.branchName, n.po.PATH, "branch_name", t3), remoteUrl: void 0 !== e4.remoteUrl ? (0, n.cZ)(e4.remoteUrl, n.po.PATH, "remote_url", t3) : void 0, previousBranchIsAncestor: e4.previousBranchIsAncestor, isOriginBacked: e4.isOriginBacked };
      })(e3, t2)), projectLayouts: e2.projectLayouts.map((e3) => Fc(e3, t2)), mcpInstructions: e2.mcpInstructions.map((e3) => sl(e3, t2)), debugModeConfig: void 0 !== e2.debugModeConfig ? qy(e2.debugModeConfig, t2) : void 0, cloudRule: void 0 !== e2.cloudRule ? (0, n.cZ)(e2.cloudRule, n.po.CODE, "cloud_rule", t2) : void 0, webSearchEnabled: e2.webSearchEnabled, skillOptions: void 0 !== e2.skillOptions ? Oy(e2.skillOptions, t2) : void 0, repositoryInfoShouldQueryProd: e2.repositoryInfoShouldQueryProd, fileContents: new Map(Object.entries(e2.fileContents).map(([e3, r2]) => [(0, n.cZ)(e3, n.po.PATH, "file_contents", t2), (0, n.cZ)(r2, n.po.CODE, "file_contents", t2)])), userIntentSummary: void 0 !== e2.userIntentSummary ? (0, n.cZ)(e2.userIntentSummary, n.po.CODE, "user_intent_summary", t2) : void 0, customSubagents: e2.customSubagents.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, fullPath: (0, n.cZ)(e4.fullPath, n.po.PATH, "full_path", t3), name: e4.name, description: (0, n.cZ)(e4.description, n.po.CODE, "description", t3), tools: e4.tools, model: e4.model, prompt: (0, n.cZ)(e4.prompt, n.po.CODE, "prompt", t3), permissionMode: e4.permissionMode, isBackground: e4.isBackground, plugin: e4.plugin, marketplace: e4.marketplace, pluginId: e4.pluginId, marketplaceId: e4.marketplaceId, forceDefaultModel: e4.forceDefaultModel, source: e4.source };
      })(e3, t2)), mcpFileSystemOptions: void 0 !== e2.mcpFileSystemOptions ? cl(e2.mcpFileSystemOptions, t2) : void 0, webFetchEnabled: e2.webFetchEnabled, hooksAdditionalContext: void 0 !== e2.hooksAdditionalContext ? (0, n.cZ)(e2.hooksAdditionalContext, n.po.CODE, "hooks_additional_context", t2) : void 0, commitAttributionMessage: void 0 !== e2.commitAttributionMessage ? (0, n.cZ)(e2.commitAttributionMessage, n.po.CODE, "commit_attribution_message", t2) : void 0, prAttributionMessage: void 0 !== e2.prAttributionMessage ? (0, n.cZ)(e2.prAttributionMessage, n.po.CODE, "pr_attribution_message", t2) : void 0, hooksConfig: void 0 !== e2.hooksConfig ? Fy(e2.hooksConfig, t2) : void 0, agentSkills: e2.agentSkills.map((e3) => qg(e3, t2)), precomputedHumanChanges: e2.precomputedHumanChanges.map((e3) => Qy(e3, t2)), recentlyAddedPlugin: void 0 !== e2.recentlyAddedPlugin ? Wy(e2.recentlyAddedPlugin, t2) : void 0, supportsMcpAuth: e2.supportsMcpAuth, gitRepoInfoComplete: e2.gitRepoInfoComplete, mcpMetaToolOptions: void 0 !== e2.mcpMetaToolOptions ? ul(e2.mcpMetaToolOptions, t2) : void 0, readLintsEnabled: e2.readLintsEnabled, mcpInfoComplete: e2.mcpInfoComplete, nonFileRules: e2.nonFileRules.map((e3) => Ph(e3, t2)), matchedInstalledPlugin: void 0 !== e2.matchedInstalledPlugin ? Zy(e2.matchedInstalledPlugin, t2) : void 0, rulesInfoComplete: e2.rulesInfoComplete, envInfoComplete: e2.envInfoComplete, repositoryInfoComplete: e2.repositoryInfoComplete, customSubagentsInfoComplete: e2.customSubagentsInfoComplete, agentSkillsInfoComplete: e2.agentSkillsInfoComplete, mcpFileSystemInfoComplete: e2.mcpFileSystemInfoComplete, gitStatusInfoComplete: e2.gitStatusInfoComplete, userPermissionsAutoRun: void 0 !== e2.userPermissionsAutoRun ? Ly(e2.userPermissionsAutoRun, t2) : void 0, projectPermissionsAutoRun: void 0 !== e2.projectPermissionsAutoRun ? Ly(e2.projectPermissionsAutoRun, t2) : void 0, adminPermissionsAutoRun: void 0 !== e2.adminPermissionsAutoRun ? Ly(e2.adminPermissionsAutoRun, t2) : void 0, disabledTeamRules: e2.disabledTeamRules.map((e3) => (0, n.cZ)(e3, n.po.PATH, "disabled_team_rules", t2)), searchConversationsEnabled: e2.searchConversationsEnabled, sendMessageEnabled: e2.sendMessageEnabled, adminCommandDenylist: e2.adminCommandDenylist.map((e3) => (0, n.cZ)(e3, n.po.CODE, "admin_command_denylist", t2)), systemPromptOverride: void 0 !== e2.systemPromptOverride ? hy(e2.systemPromptOverride, t2) : void 0 };
    }
    function Hy(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new wy.bb({ rules: e2.rules.map((e3) => Jh(e3, t2, r2)), env: void 0 !== e2.env ? Py(e2.env, t2, r2) : void 0, repositoryInfo: e2.repositoryInfo.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new Og.D({ relativeWorkspacePath: e4.relativeWorkspacePath.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), remoteUrls: e4.remoteUrls.map((e5) => e5.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 })), remoteNames: e4.remoteNames.map((e5) => e5.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 })), repoName: e4.repoName.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), repoOwner: e4.repoOwner.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), isTracked: e4.isTracked, isLocal: e4.isLocal, orthogonalTransformSeed: e4.orthogonalTransformSeed, workspaceUri: e4.workspaceUri.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), pathEncryptionKey: e4.pathEncryptionKey.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }) });
      })(e3, t2, r2)), tools: e2.tools.map((e3) => nl(e3, t2, r2)), conversationNotesListing: e2.conversationNotesListing?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), sharedNotesListing: e2.sharedNotesListing?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), gitRepos: e2.gitRepos.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new wy.DS({ path: e4.path.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), status: e4.status.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), branchName: e4.branchName.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), remoteUrl: e4.remoteUrl?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), previousBranchIsAncestor: e4.previousBranchIsAncestor, isOriginBacked: e4.isOriginBacked });
      })(e3, t2, r2)), projectLayouts: e2.projectLayouts.map((e3) => Uc(e3, t2, r2)), mcpInstructions: e2.mcpInstructions.map((e3) => ol(e3, t2, r2)), debugModeConfig: void 0 !== e2.debugModeConfig ? Dy(e2.debugModeConfig, t2, r2) : void 0, cloudRule: e2.cloudRule?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), webSearchEnabled: e2.webSearchEnabled, skillOptions: void 0 !== e2.skillOptions ? Ny(e2.skillOptions, t2, r2) : void 0, repositoryInfoShouldQueryProd: e2.repositoryInfoShouldQueryProd, fileContents: Object.fromEntries(Array.from(e2.fileContents.entries()).map(([e3, r3]) => [e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), r3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })])), userIntentSummary: e2.userIntentSummary?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), customSubagents: e2.customSubagents.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new Ng.zz({ fullPath: e4.fullPath.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), name: e4.name, description: e4.description.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), tools: e4.tools, model: e4.model, prompt: e4.prompt.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), permissionMode: e4.permissionMode, isBackground: e4.isBackground, plugin: e4.plugin, marketplace: e4.marketplace, pluginId: e4.pluginId, marketplaceId: e4.marketplaceId, forceDefaultModel: e4.forceDefaultModel, source: e4.source });
      })(e3, t2, r2)), mcpFileSystemOptions: void 0 !== e2.mcpFileSystemOptions ? ll(e2.mcpFileSystemOptions, t2, r2) : void 0, webFetchEnabled: e2.webFetchEnabled, hooksAdditionalContext: e2.hooksAdditionalContext?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), commitAttributionMessage: e2.commitAttributionMessage?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), prAttributionMessage: e2.prAttributionMessage?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), hooksConfig: void 0 !== e2.hooksConfig ? Uy(e2.hooksConfig) : void 0, agentSkills: e2.agentSkills.map((e3) => Dg(e3, t2, r2)), precomputedHumanChanges: e2.precomputedHumanChanges.map((e3) => jy(e3, t2, r2)), recentlyAddedPlugin: void 0 !== e2.recentlyAddedPlugin ? Vy(e2.recentlyAddedPlugin, t2, r2) : void 0, supportsMcpAuth: e2.supportsMcpAuth, gitRepoInfoComplete: e2.gitRepoInfoComplete, mcpMetaToolOptions: void 0 !== e2.mcpMetaToolOptions ? dl(e2.mcpMetaToolOptions, t2, r2) : void 0, readLintsEnabled: e2.readLintsEnabled, mcpInfoComplete: e2.mcpInfoComplete, nonFileRules: e2.nonFileRules.map((e3) => Jh(e3, t2, r2)), matchedInstalledPlugin: void 0 !== e2.matchedInstalledPlugin ? Xy(e2.matchedInstalledPlugin, t2, r2) : void 0, rulesInfoComplete: e2.rulesInfoComplete, envInfoComplete: e2.envInfoComplete, repositoryInfoComplete: e2.repositoryInfoComplete, customSubagentsInfoComplete: e2.customSubagentsInfoComplete, agentSkillsInfoComplete: e2.agentSkillsInfoComplete, mcpFileSystemInfoComplete: e2.mcpFileSystemInfoComplete, gitStatusInfoComplete: e2.gitStatusInfoComplete, userPermissionsAutoRun: void 0 !== e2.userPermissionsAutoRun ? $y(e2.userPermissionsAutoRun, t2, r2) : void 0, projectPermissionsAutoRun: void 0 !== e2.projectPermissionsAutoRun ? $y(e2.projectPermissionsAutoRun, t2, r2) : void 0, adminPermissionsAutoRun: void 0 !== e2.adminPermissionsAutoRun ? $y(e2.adminPermissionsAutoRun, t2, r2) : void 0, disabledTeamRules: e2.disabledTeamRules.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), searchConversationsEnabled: e2.searchConversationsEnabled, sendMessageEnabled: e2.sendMessageEnabled, adminCommandDenylist: e2.adminCommandDenylist.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), systemPromptOverride: void 0 !== e2.systemPromptOverride ? gy(e2.systemPromptOverride, t2, r2) : void 0 });
    }
    function zy(e2, t2) {
      return { _privacyMode: t2, rulesBlobId: e2.rulesBlobId, rulesByteLength: e2.rulesByteLength, skillsBlobId: e2.skillsBlobId, skillsByteLength: e2.skillsByteLength, subagentsBlobId: e2.subagentsBlobId, subagentsByteLength: e2.subagentsByteLength, mcpsBlobId: e2.mcpsBlobId, mcpsByteLength: e2.mcpsByteLength, dynamicContext: void 0 !== e2.dynamicContext ? Gy(e2.dynamicContext, t2) : void 0 };
    }
    function Wy(e2, t2) {
      return { _privacyMode: t2, displayName: e2.displayName, description: (0, n.cZ)(e2.description, n.po.CODE, "description", t2), skills: e2.skills.map((e3) => Ky(e3, t2)), subagents: e2.subagents.map((e3) => Ky(e3, t2)), hooks: e2.hooks.map((e3) => Ky(e3, t2)), rules: e2.rules.map((e3) => Ky(e3, t2)), commands: e2.commands.map((e3) => Ky(e3, t2)), mcpServers: e2.mcpServers };
    }
    function Vy(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new wy.iT({ displayName: e2.displayName, description: e2.description.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), skills: e2.skills.map((e3) => Yy(e3, t2, r2)), subagents: e2.subagents.map((e3) => Yy(e3, t2, r2)), hooks: e2.hooks.map((e3) => Yy(e3, t2, r2)), rules: e2.rules.map((e3) => Yy(e3, t2, r2)), commands: e2.commands.map((e3) => Yy(e3, t2, r2)), mcpServers: e2.mcpServers });
    }
    function Ky(e2, t2) {
      return { _privacyMode: t2, name: e2.name, description: (0, n.cZ)(e2.description, n.po.CODE, "description", t2) };
    }
    function Yy(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new wy.Ww({ name: e2.name, description: e2.description.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Zy(e2, t2) {
      return { _privacyMode: t2, displayName: e2.displayName, description: (0, n.cZ)(e2.description, n.po.CODE, "description", t2), matchedKeyword: e2.matchedKeyword, skills: e2.skills.map((e3) => Ky(e3, t2)), subagents: e2.subagents.map((e3) => Ky(e3, t2)), hooks: e2.hooks.map((e3) => Ky(e3, t2)), rules: e2.rules.map((e3) => Ky(e3, t2)), commands: e2.commands.map((e3) => Ky(e3, t2)), mcpServers: e2.mcpServers };
    }
    function Xy(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new wy.SW({ displayName: e2.displayName, description: e2.description.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), matchedKeyword: e2.matchedKeyword, skills: e2.skills.map((e3) => Yy(e3, t2, r2)), subagents: e2.subagents.map((e3) => Yy(e3, t2, r2)), hooks: e2.hooks.map((e3) => Yy(e3, t2, r2)), rules: e2.rules.map((e3) => Yy(e3, t2, r2)), commands: e2.commands.map((e3) => Yy(e3, t2, r2)), mcpServers: e2.mcpServers });
    }
    var ew = r(86209);
    function tw(e2, t2) {
      return { _privacyMode: t2, apiKey: (0, n.cZ)(e2.apiKey, n.po.CREDENTIALS, "api_key", t2), baseUrl: e2.baseUrl };
    }
    function rw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ew.G0({ apiKey: e2.apiKey.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), baseUrl: e2.baseUrl });
    }
    function nw(e2, t2) {
      return { _privacyMode: t2, apiKey: (0, n.cZ)(e2.apiKey, n.po.CREDENTIALS, "api_key", t2), baseUrl: e2.baseUrl, deployment: e2.deployment };
    }
    function sw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ew.ih({ apiKey: e2.apiKey.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), baseUrl: e2.baseUrl, deployment: e2.deployment });
    }
    function ow(e2, t2) {
      return { _privacyMode: t2, accessKey: (0, n.cZ)(e2.accessKey, n.po.CREDENTIALS, "access_key", t2), secretKey: (0, n.cZ)(e2.secretKey, n.po.CREDENTIALS, "secret_key", t2), region: e2.region, sessionToken: void 0 !== e2.sessionToken ? (0, n.cZ)(e2.sessionToken, n.po.CREDENTIALS, "session_token", t2) : void 0 };
    }
    function iw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ew.R4({ accessKey: e2.accessKey.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), secretKey: e2.secretKey.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), region: e2.region, sessionToken: e2.sessionToken?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function aw(e2, t2) {
      return { _privacyMode: t2, id: e2.id, value: (0, n.cZ)(e2.value, n.po.CODE, "value", t2) };
    }
    function cw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ew.SR({ id: e2.id, value: e2.value.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var lw = r(43081);
    function uw(e2, t2) {
      return { _privacyMode: t2, query: (0, n.cZ)(e2.query, n.po.CODE, "query", t2), toolCallId: e2.toolCallId, limit: e2.limit };
    }
    function dw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lw.$m({ query: e2.query.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallId: e2.toolCallId, limit: e2.limit });
    }
    function pw(e2, t2) {
      return { _privacyMode: t2, result: mw(e2.result, t2) };
    }
    function mw(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: gw(e2.value, t2) };
        case "error":
          return { case: "error", value: ww(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function hw(e2, t2, r2) {
      return new lw.pT({ result: fw(e2.result, t2, r2) });
    }
    function fw(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: yw(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: vw(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function gw(e2, t2) {
      return { _privacyMode: t2, hits: e2.hits.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, conversationId: e4.conversationId, title: (0, n.cZ)(e4.title, n.po.CODE, "title", t3), source: e4.source, updatedAtMs: e4.updatedAtMs, snippet: void 0 !== e4.snippet ? (0, n.cZ)(e4.snippet, n.po.CODE, "snippet", t3) : void 0 };
      })(e3, t2)), truncated: e2.truncated, partial: e2.partial, rebuilding: e2.rebuilding };
    }
    function yw(e2, t2, r2) {
      return new lw.H7({ hits: e2.hits.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new lw.B$({ conversationId: e4.conversationId, title: e4.title.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), source: e4.source, updatedAtMs: e4.updatedAtMs, snippet: e4.snippet?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
      })(e3, t2, r2)), truncated: e2.truncated, partial: e2.partial, rebuilding: e2.rebuilding });
    }
    function ww(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function vw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lw.w$({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var _w = r(35133);
    function Aw(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? uw(e2.args, t2) : void 0, result: void 0 !== e2.result ? pw(e2.result, t2) : void 0 };
    }
    function Sw(e2, t2, r2) {
      return new _w.b({ args: void 0 !== e2.args ? dw(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? hw(e2.result, t2, r2) : void 0 });
    }
    var bw = r(89582);
    function Ew(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "blobId":
          return { case: "blobId", value: e2.value };
        case "data":
          return { case: "data", value: (0, n.Yz)(e2.value, n.po.CODE, "data", t2) };
        case "blobIdWithData":
          return { case: "blobIdWithData", value: Cw(e2.value, t2) };
        case "promptUploadRef":
          return { case: "promptUploadRef", value: Rw(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Iw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "blobId":
          return { case: "blobId", value: e2.value };
        case "data":
          return { case: "data", value: e2.value.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) };
        case "blobIdWithData":
          return { case: "blobIdWithData", value: kw(e2.value, t2, r2) };
        case "promptUploadRef":
          return { case: "promptUploadRef", value: Bw(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Cw(e2, t2) {
      return { _privacyMode: t2, blobId: e2.blobId, data: (0, n.Yz)(e2.data, n.po.CODE, "data", t2) };
    }
    function kw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.q6({ blobId: e2.blobId, data: e2.data.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function xw(e2, t2) {
      return { _privacyMode: t2, width: e2.width, height: e2.height };
    }
    function Tw(e2, t2, r2) {
      return new bw.AI({ width: e2.width, height: e2.height });
    }
    function Rw(e2, t2) {
      return { _privacyMode: t2, uploadId: e2.uploadId };
    }
    function Bw(e2, t2, r2) {
      return new bw.tp({ uploadId: e2.uploadId });
    }
    function Pw(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "blobId":
          return { case: "blobId", value: e2.value };
        case "data":
          return { case: "data", value: (0, n.Yz)(e2.value, n.po.CODE, "data", t2) };
        case "blobIdWithData":
          return { case: "blobIdWithData", value: Mw(e2.value, t2) };
        case "promptUploadRef":
          return { case: "promptUploadRef", value: Rw(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Jw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "blobId":
          return { case: "blobId", value: e2.value };
        case "data":
          return { case: "data", value: e2.value.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) };
        case "blobIdWithData":
          return { case: "blobIdWithData", value: qw(e2.value, t2, r2) };
        case "promptUploadRef":
          return { case: "promptUploadRef", value: Bw(e2.value) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Mw(e2, t2) {
      return { _privacyMode: t2, blobId: e2.blobId, data: (0, n.Yz)(e2.data, n.po.CODE, "data", t2) };
    }
    function qw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.wN({ blobId: e2.blobId, data: e2.data.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Dw(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "blobId":
          return { case: "blobId", value: e2.value };
        case "data":
          return { case: "data", value: (0, n.Yz)(e2.value, n.po.CODE, "data", t2) };
        case "blobIdWithData":
          return { case: "blobIdWithData", value: Nw(e2.value, t2) };
        case "signedUrl":
          return { case: "signedUrl", value: Uw(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ow(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "blobId":
          return { case: "blobId", value: e2.value };
        case "data":
          return { case: "data", value: e2.value.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) };
        case "blobIdWithData":
          return { case: "blobIdWithData", value: Fw(e2.value, t2, r2) };
        case "signedUrl":
          return { case: "signedUrl", value: Lw(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Nw(e2, t2) {
      return { _privacyMode: t2, blobId: e2.blobId, data: (0, n.Yz)(e2.data, n.po.CODE, "data", t2) };
    }
    function Fw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.qf({ blobId: e2.blobId, data: e2.data.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Uw(e2, t2) {
      return { _privacyMode: t2, url: (0, n.cZ)(e2.url, n.po.CREDENTIALS, "url", t2), key: e2.key, expiresAtUnixMs: e2.expiresAtUnixMs, refreshAfterUnixMs: e2.refreshAfterUnixMs, conversationId: e2.conversationId };
    }
    function Lw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.tS({ url: e2.url.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), key: e2.key, expiresAtUnixMs: e2.expiresAtUnixMs, refreshAfterUnixMs: e2.refreshAfterUnixMs, conversationId: e2.conversationId });
    }
    function $w(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "data":
          return { case: "data", value: (0, n.cZ)(e2.value, n.po.CODE, "data", t2) };
        case "blobId":
          return { case: "blobId", value: e2.value };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Qw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "data":
          return { case: "data", value: e2.value.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) };
        case "blobId":
          return { case: "blobId", value: e2.value };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function jw(e2, t2) {
      return { _privacyMode: t2, content: (0, n.cZ)(e2.content, n.po.CODE, "content", t2), fullContentLengthCharCount: e2.fullContentLengthCharCount };
    }
    function Gw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.zm({ content: e2.content.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), fullContentLengthCharCount: e2.fullContentLengthCharCount });
    }
    function Hw(e2, t2) {
      return { _privacyMode: t2, content: (0, n.cZ)(e2.content, n.po.CODE, "content", t2), fullContentLengthCharCount: e2.fullContentLengthCharCount };
    }
    function zw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.Dw({ content: e2.content.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), fullContentLengthCharCount: e2.fullContentLengthCharCount });
    }
    function Ww(e2, t2) {
      return { _privacyMode: t2, pluginId: e2.pluginId, capabilityType: e2.capabilityType, sourcePath: (0, n.cZ)(e2.sourcePath, n.po.PATH, "source_path", t2), snapshotToken: (0, n.cZ)(e2.snapshotToken, n.po.CREDENTIALS, "snapshot_token", t2), resolvedCommitSha: e2.resolvedCommitSha };
    }
    function Vw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.iN({ pluginId: e2.pluginId, capabilityType: e2.capabilityType, sourcePath: e2.sourcePath.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), snapshotToken: e2.snapshotToken.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), resolvedCommitSha: e2.resolvedCommitSha });
    }
    function Kw(e2, t2) {
      return { _privacyMode: t2, recentAgents: e2.recentAgents.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, name: e4.name, path: (0, n.cZ)(e4.path, n.po.PATH, "path", t3), overview: void 0 !== e4.overview ? (0, n.cZ)(e4.overview, n.po.CODE, "overview", t3) : void 0 };
      })(e3, t2)) };
    }
    function Yw(e2, t2, r2) {
      return new bw.$k({ recentAgents: e2.recentAgents.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new bw.nU({ name: e4.name, path: e4.path.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), overview: e4.overview?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
      })(e3, t2, r2)) });
    }
    function Zw(e2, t2) {
      return { _privacyMode: t2, callFrames: e2.callFrames.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, functionName: void 0 !== e4.functionName ? (0, n.cZ)(e4.functionName, n.po.CODE, "function_name", t3) : void 0, url: e4.url, lineNumber: e4.lineNumber, columnNumber: e4.columnNumber };
      })(e3, t2)), rawStackTrace: void 0 !== e2.rawStackTrace ? (0, n.cZ)(e2.rawStackTrace, n.po.CODE, "raw_stack_trace", t2) : void 0 };
    }
    function Xw(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.C8({ callFrames: e2.callFrames.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.A2({ functionName: e4.functionName?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), url: e4.url, lineNumber: e4.lineNumber, columnNumber: e4.columnNumber });
      })(e3, t2, r2)), rawStackTrace: e2.rawStackTrace?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function ev(e2, t2) {
      return { _privacyMode: t2, filesToCommit: e2.filesToCommit.map((e3) => (0, n.cZ)(e3, n.po.PATH, "files_to_commit", t2)), filesToExcludeFromCommit: e2.filesToExcludeFromCommit.map((e3) => (0, n.cZ)(e3, n.po.PATH, "files_to_exclude_from_commit", t2)), shouldStageAllChanges: e2.shouldStageAllChanges, createPrDraft: e2.createPrDraft, filesToCommitWithStatus: e2.filesToCommitWithStatus.map((e3) => nv(e3, t2)), filesToExcludeFromCommitWithStatus: e2.filesToExcludeFromCommitWithStatus.map((e3) => nv(e3, t2)) };
    }
    function tv(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.SL({ filesToCommit: e2.filesToCommit.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), filesToExcludeFromCommit: e2.filesToExcludeFromCommit.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), shouldStageAllChanges: e2.shouldStageAllChanges, createPrDraft: e2.createPrDraft, filesToCommitWithStatus: e2.filesToCommitWithStatus.map((e3) => sv(e3, t2, r2)), filesToExcludeFromCommitWithStatus: e2.filesToExcludeFromCommitWithStatus.map((e3) => sv(e3, t2, r2)) });
    }
    function rv(e2, t2) {
      return { _privacyMode: t2 };
    }
    function nv(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), status: e2.status };
    }
    function sv(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.f2({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), status: e2.status });
    }
    function ov(e2, t2) {
      return { _privacyMode: t2, filesToPush: e2.filesToPush.map((e3) => (0, n.cZ)(e3, n.po.PATH, "files_to_push", t2)), createPrDraft: e2.createPrDraft };
    }
    function iv(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.$y({ filesToPush: e2.filesToPush.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), createPrDraft: e2.createPrDraft });
    }
    function av(e2, t2) {
      return { _privacyMode: t2, baseBranch: e2.baseBranch, prUrl: e2.prUrl };
    }
    function cv(e2, t2) {
      return { _privacyMode: t2, baseBranch: e2.baseBranch };
    }
    function lv(e2, t2, r2) {
      return new bw.nD({ baseBranch: e2.baseBranch });
    }
    function uv(e2, t2) {
      return { _privacyMode: t2, baseBranch: e2.baseBranch };
    }
    function dv(e2, t2, r2) {
      return new bw.Kn({ baseBranch: e2.baseBranch });
    }
    function pv(e2, t2) {
      return { _privacyMode: t2, remoteBranch: e2.remoteBranch };
    }
    function mv(e2, t2, r2) {
      return new bw._A({ remoteBranch: e2.remoteBranch });
    }
    function hv(e2, t2) {
      return { _privacyMode: t2, branchContext: void 0 !== e2.branchContext ? wv(e2.branchContext, t2) : void 0, pathToTemplateFile: void 0 !== e2.pathToTemplateFile ? (0, n.cZ)(e2.pathToTemplateFile, n.po.PATH, "path_to_template_file", t2) : void 0, pathToTemplateDir: void 0 !== e2.pathToTemplateDir ? (0, n.cZ)(e2.pathToTemplateDir, n.po.PATH, "path_to_template_dir", t2) : void 0, params: fv(e2.params, t2) };
    }
    function fv(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "commitParams":
          return { case: "commitParams", value: ev(e2.value, t2) };
        case "commitAndPushParams":
          return { case: "commitAndPushParams", value: ev(e2.value, t2) };
        case "pushParams":
          return { case: "pushParams", value: ov(e2.value, t2) };
        case "createPrParams":
          return { case: "createPrParams", value: ov(e2.value, t2) };
        case "createPrWithChangesParams":
          return { case: "createPrWithChangesParams", value: ev(e2.value, t2) };
        case "fixMergeConflictsParams":
          return { case: "fixMergeConflictsParams", value: av(e2.value, t2) };
        case "babysitPrInCloudParams":
          return { case: "babysitPrInCloudParams", value: cv(e2.value, t2) };
        case "applyLocallyParams":
          return { case: "applyLocallyParams", value: pv(e2.value, t2) };
        case "checkoutBranchParams":
          return { case: "checkoutBranchParams", value: pv(e2.value, t2) };
        case "createBranchAndCommitParams":
          return { case: "createBranchAndCommitParams", value: ev(e2.value, t2) };
        case "createBranchCommitAndPushParams":
          return { case: "createBranchCommitAndPushParams", value: ev(e2.value, t2) };
        case "updateBranchParams":
          return { case: "updateBranchParams", value: uv(e2.value, t2) };
        case "createBranchParams":
          return { case: "createBranchParams", value: rv(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function gv(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.Lv({ branchContext: void 0 !== e2.branchContext ? vv(e2.branchContext, t2, r2) : void 0, pathToTemplateFile: e2.pathToTemplateFile?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), pathToTemplateDir: e2.pathToTemplateDir?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), params: yv(e2.params, t2, r2) });
    }
    function yv(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "commitParams":
          return { case: "commitParams", value: tv(e2.value, t2, r2) };
        case "commitAndPushParams":
          return { case: "commitAndPushParams", value: tv(e2.value, t2, r2) };
        case "pushParams":
          return { case: "pushParams", value: iv(e2.value, t2, r2) };
        case "createPrParams":
          return { case: "createPrParams", value: iv(e2.value, t2, r2) };
        case "createPrWithChangesParams":
          return { case: "createPrWithChangesParams", value: tv(e2.value, t2, r2) };
        case "fixMergeConflictsParams":
          return { case: "fixMergeConflictsParams", value: (n2 = e2.value, new bw.F_({ baseBranch: n2.baseBranch, prUrl: n2.prUrl })) };
        case "babysitPrInCloudParams":
          return { case: "babysitPrInCloudParams", value: lv(e2.value) };
        case "applyLocallyParams":
          return { case: "applyLocallyParams", value: mv(e2.value) };
        case "checkoutBranchParams":
          return { case: "checkoutBranchParams", value: mv(e2.value) };
        case "createBranchAndCommitParams":
          return { case: "createBranchAndCommitParams", value: tv(e2.value, t2, r2) };
        case "createBranchCommitAndPushParams":
          return { case: "createBranchCommitAndPushParams", value: tv(e2.value, t2, r2) };
        case "updateBranchParams":
          return { case: "updateBranchParams", value: dv(e2.value) };
        case "createBranchParams":
          return { case: "createBranchParams", value: (e2.value, new bw.$K({})) };
        default:
          return { case: void 0, value: void 0 };
      }
      var n2;
    }
    function wv(e2, t2) {
      return { _privacyMode: t2, currentBranch: e2.currentBranch, baseBranch: e2.baseBranch, agentBranchPrefix: e2.agentBranchPrefix };
    }
    function vv(e2, t2, r2) {
      return new bw.HE({ currentBranch: e2.currentBranch, baseBranch: e2.baseBranch, agentBranchPrefix: e2.agentBranchPrefix });
    }
    function _v(e2, t2) {
      return { _privacyMode: t2, selectedImages: e2.selectedImages.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, uuid: e4.uuid, path: (0, n.cZ)(e4.path, n.po.PATH, "path", t3), dimension: void 0 !== e4.dimension ? xw(e4.dimension, t3) : void 0, mimeType: e4.mimeType, dataOrBlobId: Ew(e4.dataOrBlobId, t3) };
      })(e3, t2)), invocationContext: void 0 !== e2.invocationContext ? Sv(e2.invocationContext, t2) : void 0, extraContext: e2.extraContext.map((e3) => (0, n.cZ)(e3, n.po.CODE, "extra_context", t2)), extraContextEntries: e2.extraContextEntries.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, dataOrBlobId: $w(e4.dataOrBlobId, t3) };
      })(e3, t2)), files: e2.files.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, content: (0, n.cZ)(e4.content, n.po.CODE, "content", t3), path: (0, n.cZ)(e4.path, n.po.PATH, "path", t3), relativePath: void 0 !== e4.relativePath ? (0, n.cZ)(e4.relativePath, n.po.PATH, "relative_path", t3) : void 0 };
      })(e3, t2)), codeSelections: e2.codeSelections.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, content: (0, n.cZ)(e4.content, n.po.CODE, "content", t3), path: (0, n.cZ)(e4.path, n.po.PATH, "path", t3), relativePath: void 0 !== e4.relativePath ? (0, n.cZ)(e4.relativePath, n.po.PATH, "relative_path", t3) : void 0, range: void 0 !== e4.range ? o(e4.range, t3) : void 0 };
      })(e3, t2)), terminals: e2.terminals.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, content: (0, n.cZ)(e4.content, n.po.CODE, "content", t3), title: void 0 !== e4.title ? (0, n.cZ)(e4.title, n.po.CODE, "title", t3) : void 0, path: void 0 !== e4.path ? (0, n.cZ)(e4.path, n.po.PATH, "path", t3) : void 0 };
      })(e3, t2)), terminalSelections: e2.terminalSelections.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, content: (0, n.cZ)(e4.content, n.po.CODE, "content", t3), title: void 0 !== e4.title ? (0, n.cZ)(e4.title, n.po.CODE, "title", t3) : void 0, path: void 0 !== e4.path ? (0, n.cZ)(e4.path, n.po.PATH, "path", t3) : void 0, range: void 0 !== e4.range ? o(e4.range, t3) : void 0 };
      })(e3, t2)), folders: e2.folders.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, path: (0, n.cZ)(e4.path, n.po.PATH, "path", t3), relativePath: void 0 !== e4.relativePath ? (0, n.cZ)(e4.relativePath, n.po.PATH, "relative_path", t3) : void 0, directoryTree: void 0 !== e4.directoryTree ? Fc(e4.directoryTree, t3) : void 0 };
      })(e3, t2)), externalLinks: e2.externalLinks.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, url: e4.url, uuid: e4.uuid, pdfContent: void 0 !== e4.pdfContent ? (0, n.cZ)(e4.pdfContent, n.po.CODE, "pdf_content", t3) : void 0, isPdf: e4.isPdf, filename: void 0 !== e4.filename ? (0, n.cZ)(e4.filename, n.po.PATH, "filename", t3) : void 0, blobId: e4.blobId };
      })(e3, t2)), cursorRules: e2.cursorRules.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, rule: void 0 !== e4.rule ? Ph(e4.rule, t3) : void 0 };
      })(e3, t2)), gitDiff: void 0 !== e2.gitDiff ? jw(e2.gitDiff, t2) : void 0, gitDiffFromBranchToMain: void 0 !== e2.gitDiffFromBranchToMain ? Hw(e2.gitDiffFromBranchToMain, t2) : void 0, cursorCommands: e2.cursorCommands.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, name: e4.name, content: (0, n.cZ)(e4.content, n.po.CODE, "content", t3), pluginCapability: void 0 !== e4.pluginCapability ? Ww(e4.pluginCapability, t3) : void 0, fullPath: void 0 !== e4.fullPath ? (0, n.cZ)(e4.fullPath, n.po.PATH, "full_path", t3) : void 0, displayName: e4.displayName };
      })(e3, t2)), documentations: e2.documentations.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, docId: e4.docId, name: e4.name };
      })(e3, t2)), uiElements: e2.uiElements.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, element: (0, n.cZ)(e4.element, n.po.CODE, "element", t3), xpath: (0, n.cZ)(e4.xpath, n.po.CODE, "xpath", t3), textContent: (0, n.cZ)(e4.textContent, n.po.CODE, "text_content", t3), extra: (0, n.cZ)(e4.extra, n.po.CODE, "extra", t3), component: void 0 !== e4.component ? (0, n.cZ)(e4.component, n.po.CODE, "component", t3) : void 0, componentPropsJson: void 0 !== e4.componentPropsJson ? (0, n.cZ)(e4.componentPropsJson, n.po.CODE, "component_props_json", t3) : void 0 };
      })(e3, t2)), consoleLogs: e2.consoleLogs.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, message: (0, n.cZ)(e4.message, n.po.CODE, "message", t3), timestamp: e4.timestamp, level: e4.level, clientName: e4.clientName, sessionId: e4.sessionId, stackTrace: void 0 !== e4.stackTrace ? Zw(e4.stackTrace, t3) : void 0, objectDataJson: void 0 !== e4.objectDataJson ? (0, n.cZ)(e4.objectDataJson, n.po.CODE, "object_data_json", t3) : void 0 };
      })(e3, t2)), gitCommits: e2.gitCommits.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, sha: e4.sha, message: (0, n.cZ)(e4.message, n.po.CODE, "message", t3), description: void 0 !== e4.description ? (0, n.cZ)(e4.description, n.po.CODE, "description", t3) : void 0, diff: (0, n.cZ)(e4.diff, n.po.CODE, "diff", t3) };
      })(e3, t2)), pastChats: e2.pastChats.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, agentId: e4.agentId, name: e4.name };
      })(e3, t2)), gitPrDiffSelections: e2.gitPrDiffSelections.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, prUrl: e4.prUrl, filePath: (0, n.cZ)(e4.filePath, n.po.PATH, "file_path", t3), startLine: e4.startLine, endLine: e4.endLine, diffContent: void 0 !== e4.diffContent ? (0, n.cZ)(e4.diffContent, n.po.CODE, "diff_content", t3) : void 0, blobId: e4.blobId };
      })(e3, t2)), selectedPullRequests: e2.selectedPullRequests.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, number: e4.number, url: e4.url, title: void 0 !== e4.title ? (0, n.cZ)(e4.title, n.po.CODE, "title", t3) : void 0, folderPath: (0, n.cZ)(e4.folderPath, n.po.PATH, "folder_path", t3), summaryJson: void 0 !== e4.summaryJson ? (0, n.cZ)(e4.summaryJson, n.po.CODE, "summary_json", t3) : void 0, description: void 0 !== e4.description ? (0, n.cZ)(e4.description, n.po.CODE, "description", t3) : void 0, blobId: e4.blobId };
      })(e3, t2)), selectedSubagents: e2.selectedSubagents.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, name: e4.name };
      })(e3, t2)), selectedVideos: e2.selectedVideos.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, uuid: e4.uuid, path: (0, n.cZ)(e4.path, n.po.PATH, "path", t3), fps: e4.fps, mimeType: e4.mimeType, filename: (0, n.cZ)(e4.filename, n.po.PATH, "filename", t3), materializeToFilesystem: e4.materializeToFilesystem, dataOrBlobId: Dw(e4.dataOrBlobId, t3) };
      })(e3, t2)), selectedBrowsers: e2.selectedBrowsers.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, browserId: e4.browserId, url: e4.url, pageTitle: void 0 !== e4.pageTitle ? (0, n.cZ)(e4.pageTitle, n.po.CODE, "page_title", t3) : void 0 };
      })(e3, t2)), selectedDocuments: e2.selectedDocuments.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, uuid: e4.uuid, filename: (0, n.cZ)(e4.filename, n.po.PATH, "filename", t3), mimeType: e4.mimeType, path: (0, n.cZ)(e4.path, n.po.PATH, "path", t3), dataOrBlobId: Pw(e4.dataOrBlobId, t3) };
      })(e3, t2)), selectedSkills: e2.selectedSkills.map((e3) => qg(e3, t2)), recentAgentsContext: void 0 !== e2.recentAgentsContext ? Kw(e2.recentAgentsContext, t2) : void 0, selectedAgenticGitAction: void 0 !== e2.selectedAgenticGitAction ? hv(e2.selectedAgenticGitAction, t2) : void 0 };
    }
    function Av(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.xv({ selectedImages: e2.selectedImages.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.d({ uuid: e4.uuid, path: e4.path.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), dimension: void 0 !== e4.dimension ? Tw(e4.dimension) : void 0, mimeType: e4.mimeType, dataOrBlobId: Iw(e4.dataOrBlobId, t3, r3) });
      })(e3, t2, r2)), invocationContext: void 0 !== e2.invocationContext ? Ev(e2.invocationContext, t2, r2) : void 0, extraContext: e2.extraContext.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), extraContextEntries: e2.extraContextEntries.map((e3) => (function(e4, t3, r3) {
        return new bw.o1({ dataOrBlobId: Qw(e4.dataOrBlobId, t3, r3) });
      })(e3, t2, r2)), files: e2.files.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.OL({ content: e4.content.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), path: e4.path.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), relativePath: e4.relativePath?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }) });
      })(e3, t2, r2)), codeSelections: e2.codeSelections.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.Pd({ content: e4.content.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), path: e4.path.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), relativePath: e4.relativePath?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), range: void 0 !== e4.range ? i(e4.range, t3, r3) : void 0 });
      })(e3, t2, r2)), terminals: e2.terminals.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.iw({ content: e4.content.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), title: e4.title?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), path: e4.path?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }) });
      })(e3, t2, r2)), terminalSelections: e2.terminalSelections.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.Yc({ content: e4.content.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), title: e4.title?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), path: e4.path?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), range: void 0 !== e4.range ? i(e4.range, t3, r3) : void 0 });
      })(e3, t2, r2)), folders: e2.folders.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.Gy({ path: e4.path.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), relativePath: e4.relativePath?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), directoryTree: void 0 !== e4.directoryTree ? Uc(e4.directoryTree, t3, r3) : void 0 });
      })(e3, t2, r2)), externalLinks: e2.externalLinks.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.Hw({ url: e4.url, uuid: e4.uuid, pdfContent: e4.pdfContent?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), isPdf: e4.isPdf, filename: e4.filename?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), blobId: void 0 !== e4.blobId ? e4.blobId : void 0 });
      })(e3, t2, r2)), cursorRules: e2.cursorRules.map((e3) => (function(e4, t3, r3) {
        return new bw.G4({ rule: void 0 !== e4.rule ? Jh(e4.rule, t3, r3) : void 0 });
      })(e3, t2, r2)), gitDiff: void 0 !== e2.gitDiff ? Gw(e2.gitDiff, t2, r2) : void 0, gitDiffFromBranchToMain: void 0 !== e2.gitDiffFromBranchToMain ? zw(e2.gitDiffFromBranchToMain, t2, r2) : void 0, cursorCommands: e2.cursorCommands.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.Ps({ name: e4.name, content: e4.content.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), pluginCapability: void 0 !== e4.pluginCapability ? Vw(e4.pluginCapability, t3, r3) : void 0, fullPath: e4.fullPath?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), displayName: e4.displayName });
      })(e3, t2, r2)), documentations: e2.documentations.map((e3) => (function(e4) {
        return new bw.uH({ docId: e4.docId, name: e4.name });
      })(e3)), uiElements: e2.uiElements.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.wY({ element: e4.element.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), xpath: e4.xpath.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), textContent: e4.textContent.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), extra: e4.extra.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), component: e4.component?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), componentPropsJson: e4.componentPropsJson?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }) });
      })(e3, t2, r2)), consoleLogs: e2.consoleLogs.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.x2({ message: e4.message.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), timestamp: e4.timestamp, level: e4.level, clientName: e4.clientName, sessionId: e4.sessionId, stackTrace: void 0 !== e4.stackTrace ? Xw(e4.stackTrace, t3, r3) : void 0, objectDataJson: e4.objectDataJson?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }) });
      })(e3, t2, r2)), gitCommits: e2.gitCommits.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.rV({ sha: e4.sha, message: e4.message.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), description: e4.description?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), diff: e4.diff.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }) });
      })(e3, t2, r2)), pastChats: e2.pastChats.map((e3) => (function(e4) {
        return new bw.AW({ agentId: e4.agentId, name: e4.name });
      })(e3)), gitPrDiffSelections: e2.gitPrDiffSelections.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.vf({ prUrl: e4.prUrl, filePath: e4.filePath.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), startLine: e4.startLine, endLine: e4.endLine, diffContent: e4.diffContent?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), blobId: void 0 !== e4.blobId ? e4.blobId : void 0 });
      })(e3, t2, r2)), selectedPullRequests: e2.selectedPullRequests.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.UL({ number: e4.number, url: e4.url, title: e4.title?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), folderPath: e4.folderPath.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), summaryJson: e4.summaryJson?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), description: e4.description?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), blobId: void 0 !== e4.blobId ? e4.blobId : void 0 });
      })(e3, t2, r2)), selectedSubagents: e2.selectedSubagents.map((e3) => (function(e4) {
        return new bw.vU({ name: e4.name });
      })(e3)), selectedVideos: e2.selectedVideos.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.zE({ uuid: e4.uuid, path: e4.path.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), fps: e4.fps, mimeType: e4.mimeType, filename: e4.filename.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), materializeToFilesystem: e4.materializeToFilesystem, dataOrBlobId: Ow(e4.dataOrBlobId, t3, r3) });
      })(e3, t2, r2)), selectedBrowsers: e2.selectedBrowsers.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.i6({ browserId: e4.browserId, url: e4.url, pageTitle: e4.pageTitle?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }) });
      })(e3, t2, r2)), selectedDocuments: e2.selectedDocuments.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new bw.vF({ uuid: e4.uuid, filename: e4.filename.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), mimeType: e4.mimeType, path: e4.path.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), dataOrBlobId: Jw(e4.dataOrBlobId, t3, r3) });
      })(e3, t2, r2)), selectedSkills: e2.selectedSkills.map((e3) => Dg(e3, t2, r2)), recentAgentsContext: void 0 !== e2.recentAgentsContext ? Yw(e2.recentAgentsContext, t2, r2) : void 0, selectedAgenticGitAction: void 0 !== e2.selectedAgenticGitAction ? gv(e2.selectedAgenticGitAction, t2, r2) : void 0 });
    }
    function Sv(e2, t2) {
      return { _privacyMode: t2, data: bv(e2.data, t2) };
    }
    function bv(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "slackThread":
          return { case: "slackThread", value: Cv(e2.value, t2) };
        case "githubPr":
          return { case: "githubPr", value: Rv(e2.value, t2) };
        case "ideState":
          return { case: "ideState", value: Pv(e2.value, t2) };
        case "microsoftTeamsThread":
          return { case: "microsoftTeamsThread", value: xv(e2.value, t2) };
        case "blobId":
          return { case: "blobId", value: e2.value };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Ev(e2, t2, r2) {
      return new bw.yz({ data: Iv(e2.data, t2, r2) });
    }
    function Iv(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "slackThread":
          return { case: "slackThread", value: kv(e2.value, t2, r2) };
        case "githubPr":
          return { case: "githubPr", value: Bv(e2.value, t2, r2) };
        case "ideState":
          return { case: "ideState", value: Jv(e2.value, t2, r2) };
        case "microsoftTeamsThread":
          return { case: "microsoftTeamsThread", value: Tv(e2.value, t2, r2) };
        case "blobId":
          return { case: "blobId", value: e2.value };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Cv(e2, t2) {
      return { _privacyMode: t2, thread: (0, n.cZ)(e2.thread, n.po.CODE, "thread", t2), channelName: e2.channelName, channelPurpose: void 0 !== e2.channelPurpose ? (0, n.cZ)(e2.channelPurpose, n.po.CODE, "channel_purpose", t2) : void 0, channelTopic: void 0 !== e2.channelTopic ? (0, n.cZ)(e2.channelTopic, n.po.CODE, "channel_topic", t2) : void 0, senderName: void 0 !== e2.senderName ? (0, n.cZ)(e2.senderName, n.po.CODE, "sender_name", t2) : void 0, senderId: e2.senderId, senderType: e2.senderType, isDirectlyAddressed: e2.isDirectlyAddressed };
    }
    function kv(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.Rk({ thread: e2.thread.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), channelName: e2.channelName, channelPurpose: e2.channelPurpose?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), channelTopic: e2.channelTopic?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), senderName: e2.senderName?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), senderId: e2.senderId, senderType: e2.senderType, isDirectlyAddressed: e2.isDirectlyAddressed });
    }
    function xv(e2, t2) {
      return { _privacyMode: t2, thread: (0, n.cZ)(e2.thread, n.po.CODE, "thread", t2), channelName: e2.channelName, teamName: e2.teamName, channelDescription: void 0 !== e2.channelDescription ? (0, n.cZ)(e2.channelDescription, n.po.CODE, "channel_description", t2) : void 0, teamDescription: void 0 !== e2.teamDescription ? (0, n.cZ)(e2.teamDescription, n.po.CODE, "team_description", t2) : void 0 };
    }
    function Tv(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.lG({ thread: e2.thread.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), channelName: e2.channelName, teamName: e2.teamName, channelDescription: e2.channelDescription?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), teamDescription: e2.teamDescription?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Rv(e2, t2) {
      return { _privacyMode: t2, title: (0, n.cZ)(e2.title, n.po.CODE, "title", t2), description: (0, n.cZ)(e2.description, n.po.CODE, "description", t2), comments: (0, n.cZ)(e2.comments, n.po.CODE, "comments", t2), ciFailures: void 0 !== e2.ciFailures ? (0, n.cZ)(e2.ciFailures, n.po.CODE, "ci_failures", t2) : void 0 };
    }
    function Bv(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.KJ({ title: e2.title.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), description: e2.description.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), comments: e2.comments.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), ciFailures: e2.ciFailures?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Pv(e2, t2) {
      return { _privacyMode: t2, visibleFiles: e2.visibleFiles.map((e3) => Mv(e3, t2)), recentlyViewedFiles: e2.recentlyViewedFiles.map((e3) => Mv(e3, t2)), currentlyViewedPrs: e2.currentlyViewedPrs.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, number: e4.number, url: e4.url, title: void 0 !== e4.title ? (0, n.cZ)(e4.title, n.po.CODE, "title", t3) : void 0, folderPath: void 0 !== e4.folderPath ? (0, n.cZ)(e4.folderPath, n.po.PATH, "folder_path", t3) : void 0, summaryJson: void 0 !== e4.summaryJson ? (0, n.cZ)(e4.summaryJson, n.po.CODE, "summary_json", t3) : void 0, description: void 0 !== e4.description ? (0, n.cZ)(e4.description, n.po.CODE, "description", t3) : void 0 };
      })(e3, t2)) };
    }
    function Jv(e2, t2, r2) {
      return new bw.CP({ visibleFiles: e2.visibleFiles.map((e3) => qv(e3, t2, r2)), recentlyViewedFiles: e2.recentlyViewedFiles.map((e3) => qv(e3, t2, r2)), currentlyViewedPrs: e2.currentlyViewedPrs.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new bw.le({ number: e4.number, url: e4.url, title: e4.title?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), folderPath: e4.folderPath?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), summaryJson: e4.summaryJson?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), description: e4.description?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
      })(e3, t2, r2)) });
    }
    function Mv(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), relativePath: void 0 !== e2.relativePath ? (0, n.cZ)(e2.relativePath, n.po.PATH, "relative_path", t2) : void 0, cursorPosition: void 0 !== e2.cursorPosition ? Dv(e2.cursorPosition, t2) : void 0, totalLines: e2.totalLines, activeCommand: void 0 !== e2.activeCommand ? (0, n.cZ)(e2.activeCommand, n.po.CODE, "active_command", t2) : void 0 };
    }
    function qv(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.vp({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), relativePath: e2.relativePath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), cursorPosition: void 0 !== e2.cursorPosition ? Ov(e2.cursorPosition, t2, r2) : void 0, totalLines: e2.totalLines, activeCommand: e2.activeCommand?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Dv(e2, t2) {
      return { _privacyMode: t2, line: e2.line, text: (0, n.cZ)(e2.text, n.po.CODE, "text", t2) };
    }
    function Ov(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bw.rY({ line: e2.line, text: e2.text.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var Nv = r(48331), Fv = r(81563), Uv = r(67918);
    function Lv(e2, t2) {
      return { _privacyMode: t2, line: e2.line, column: e2.column };
    }
    function $v(e2, t2, r2) {
      return new Uv.CursorPosition({ line: e2.line, column: e2.column });
    }
    function Qv(e2, t2) {
      return { _privacyMode: t2, cwd: (0, n.cZ)(e2.cwd, n.po.PATH, "cwd", t2), ref: e2.ref, baseRef: e2.baseRef, mergeBase: e2.mergeBase, targetPaths: e2.targetPaths.map((e3) => (0, n.cZ)(e3, n.po.PATH, "target_paths", t2)), unifiedContextLines: e2.unifiedContextLines, maxUntrackedFiles: e2.maxUntrackedFiles, submoduleRecurseDepth: e2.submoduleRecurseDepth, includeSpaceChanges: e2.includeSpaceChanges, committedOnly: e2.committedOnly, computePatchId: e2.computePatchId, returnHeadSha: e2.returnHeadSha, maxResponseBytes: e2.maxResponseBytes, maxFilesWithContents: e2.maxFilesWithContents, maxContentBytes: e2.maxContentBytes, outputFormat: e2.outputFormat };
    }
    function jv(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Uv.GetDiffRequest({ cwd: e2.cwd.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), ref: e2.ref, baseRef: e2.baseRef, mergeBase: e2.mergeBase, targetPaths: e2.targetPaths.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), unifiedContextLines: e2.unifiedContextLines, maxUntrackedFiles: e2.maxUntrackedFiles, submoduleRecurseDepth: e2.submoduleRecurseDepth, includeSpaceChanges: e2.includeSpaceChanges, committedOnly: e2.committedOnly, computePatchId: e2.computePatchId, returnHeadSha: e2.returnHeadSha, maxResponseBytes: e2.maxResponseBytes, maxFilesWithContents: e2.maxFilesWithContents, maxContentBytes: e2.maxContentBytes, outputFormat: e2.outputFormat });
    }
    function Gv(e2, t2) {
      return { _privacyMode: t2, diff: void 0 !== e2.diff ? zv(e2.diff, t2) : void 0, submoduleDiffs: e2.submoduleDiffs.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, relativePath: (0, n.cZ)(e4.relativePath, n.po.PATH, "relative_path", t3), diff: void 0 !== e4.diff ? zv(e4.diff, t3) : void 0, errored: e4.errored };
      })(e3, t2)), patchId: e2.patchId, headSha: e2.headSha, hasUncommittedChanges: e2.hasUncommittedChanges };
    }
    function Hv(e2, t2, r2) {
      return new Uv.GetDiffResponse({ diff: void 0 !== e2.diff ? Wv(e2.diff, t2, r2) : void 0, submoduleDiffs: e2.submoduleDiffs.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new Uv.GetDiffResponse_SubmoduleDiff({ relativePath: e4.relativePath.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), diff: void 0 !== e4.diff ? Wv(e4.diff, t3, r3) : void 0, errored: e4.errored });
      })(e3, t2, r2)), patchId: e2.patchId, headSha: e2.headSha, hasUncommittedChanges: e2.hasUncommittedChanges });
    }
    function zv(e2, t2) {
      return { _privacyMode: t2, diffs: e2.diffs.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, added: e4.added, removed: e4.removed, from: e4.from, to: e4.to, chunks: e4.chunks.map((e5) => (function(e6, t4) {
          return { _privacyMode: t4, content: (0, n.cZ)(e6.content, n.po.CODE, "content", t4), lines: e6.lines.map((e7) => (0, n.cZ)(e7, n.po.CODE, "lines", t4)), oldStart: e6.oldStart, oldLines: e6.oldLines, newStart: e6.newStart, newLines: e6.newLines };
        })(e5, t3)), beforeFileContents: void 0 !== e4.beforeFileContents ? (0, n.cZ)(e4.beforeFileContents, n.po.CODE, "before_file_contents", t3) : void 0, afterFileContents: void 0 !== e4.afterFileContents ? (0, n.cZ)(e4.afterFileContents, n.po.CODE, "after_file_contents", t3) : void 0, isGenerated: e4.isGenerated, oldMode: e4.oldMode, newMode: e4.newMode };
      })(e3, t2)), diffType: e2.diffType, fileContentsOmitted: e2.fileContentsOmitted };
    }
    function Wv(e2, t2, r2) {
      return new Uv.GitDiff({ diffs: e2.diffs.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new Uv.FileDiff({ added: e4.added, removed: e4.removed, from: e4.from, to: e4.to, chunks: e4.chunks.map((e5) => (function(e6, t4, r4) {
          const n3 = r4?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r4?.enforcing;
          return new Uv.FileDiff_Chunk({ content: e6.content.unwrap(t4, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), lines: e6.lines.map((e7) => e7.unwrap(t4, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 })), oldStart: e6.oldStart, oldLines: e6.oldLines, newStart: e6.newStart, newLines: e6.newLines });
        })(e5, t3, r3)), beforeFileContents: e4.beforeFileContents?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), afterFileContents: e4.afterFileContents?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), isGenerated: e4.isGenerated, oldMode: e4.oldMode, newMode: e4.newMode });
      })(e3, t2, r2)), diffType: e2.diffType, fileContentsOmitted: e2.fileContentsOmitted });
    }
    function Vv(e2, t2) {
      return { _privacyMode: t2, startPosition: void 0 !== e2.startPosition ? Lv(e2.startPosition, t2) : void 0, endPosition: void 0 !== e2.endPosition ? Lv(e2.endPosition, t2) : void 0 };
    }
    function Kv(e2, t2, r2) {
      return new Uv.CursorRange({ startPosition: void 0 !== e2.startPosition ? $v(e2.startPosition) : void 0, endPosition: void 0 !== e2.endPosition ? $v(e2.endPosition) : void 0 });
    }
    function Yv(e2, t2) {
      return { _privacyMode: t2, relativeWorkspacePath: (0, n.cZ)(e2.relativeWorkspacePath, n.po.PATH, "relative_workspace_path", t2), fileContents: void 0 !== e2.fileContents ? (0, n.cZ)(e2.fileContents, n.po.CODE, "file_contents", t2) : void 0, fileContentsLength: e2.fileContentsLength, range: void 0 !== e2.range ? Vv(e2.range, t2) : void 0, contents: (0, n.cZ)(e2.contents, n.po.CODE, "contents", t2), signatures: void 0 !== e2.signatures ? Xv(e2.signatures, t2) : void 0, overrideContents: void 0 !== e2.overrideContents ? (0, n.cZ)(e2.overrideContents, n.po.CODE, "override_contents", t2) : void 0, originalContents: void 0 !== e2.originalContents ? (0, n.cZ)(e2.originalContents, n.po.CODE, "original_contents", t2) : void 0, detailedLines: e2.detailedLines.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, text: (0, n.cZ)(e4.text, n.po.CODE, "text", t3), lineNumber: e4.lineNumber, isSignature: e4.isSignature };
      })(e3, t2)), fileGitContext: void 0 !== e2.fileGitContext ? t_(e2.fileGitContext, t2) : void 0 };
    }
    function Zv(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Uv.CodeBlock({ relativeWorkspacePath: e2.relativeWorkspacePath.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), fileContents: e2.fileContents?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), fileContentsLength: e2.fileContentsLength, range: void 0 !== e2.range ? Kv(e2.range) : void 0, contents: e2.contents.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), signatures: void 0 !== e2.signatures ? e_(e2.signatures, t2, r2) : void 0, overrideContents: e2.overrideContents?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), originalContents: e2.originalContents?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), detailedLines: e2.detailedLines.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new Uv.DetailedLine({ text: e4.text.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), lineNumber: e4.lineNumber, isSignature: e4.isSignature });
      })(e3, t2, r2)), fileGitContext: void 0 !== e2.fileGitContext ? r_(e2.fileGitContext, t2, r2) : void 0 });
    }
    function Xv(e2, t2) {
      return { _privacyMode: t2, ranges: e2.ranges.map((e3) => Vv(e3, t2)) };
    }
    function e_(e2, t2, r2) {
      return new Uv.CodeBlock_Signatures({ ranges: e2.ranges.map((e3) => Kv(e3)) });
    }
    function t_(e2, t2) {
      return { _privacyMode: t2, commits: e2.commits.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, commit: e4.commit, author: e4.author, date: e4.date, message: (0, n.cZ)(e4.message, n.po.CODE, "message", t3) };
      })(e3, t2)) };
    }
    function r_(e2, t2, r2) {
      return new Uv.FileGit({ commits: e2.commits.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new Uv.GitCommit({ commit: e4.commit, author: e4.author, date: e4.date, message: e4.message.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
      })(e3, t2, r2)) });
    }
    function n_(e2, t2) {
      return { _privacyMode: t2, codeBlock: void 0 !== e2.codeBlock ? Yv(e2.codeBlock, t2) : void 0, score: e2.score };
    }
    function s_(e2, t2, r2) {
      return new Fv.PT({ codeBlock: void 0 !== e2.codeBlock ? Zv(e2.codeBlock, t2, r2) : void 0, score: e2.score });
    }
    function o_(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? a_(e2.args, t2) : void 0, result: void 0 !== e2.result ? l_(e2.result, t2) : void 0 };
    }
    function i_(e2, t2, r2) {
      return new Nv.ks({ args: void 0 !== e2.args ? c_(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? d_(e2.result, t2, r2) : void 0 });
    }
    function a_(e2, t2) {
      return { _privacyMode: t2, query: (0, n.cZ)(e2.query, n.po.CODE, "query", t2), targetDirectories: e2.targetDirectories.map((e3) => (0, n.cZ)(e3, n.po.PATH, "target_directories", t2)), explanation: (0, n.cZ)(e2.explanation, n.po.CODE, "explanation", t2) };
    }
    function c_(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Nv.X_({ query: e2.query.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), targetDirectories: e2.targetDirectories.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), explanation: e2.explanation.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function l_(e2, t2) {
      return { _privacyMode: t2, result: u_(e2.result, t2) };
    }
    function u_(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: m_(e2.value, t2) };
        case "error":
          return { case: "error", value: f_(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function d_(e2, t2, r2) {
      return new Nv.h9({ result: p_(e2.result, t2, r2) });
    }
    function p_(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: h_(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: g_(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function m_(e2, t2) {
      return { _privacyMode: t2, results: (0, n.cZ)(e2.results, n.po.CODE, "results", t2), codeResults: e2.codeResults.map((e3) => n_(e3, t2)) };
    }
    function h_(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Nv.nT({ results: e2.results.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), codeResults: e2.codeResults.map((e3) => s_(e3, t2, r2)) });
    }
    function f_(e2, t2) {
      return { _privacyMode: t2, errorMessage: (0, n.cZ)(e2.errorMessage, n.po.CODE, "error_message", t2) };
    }
    function g_(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Nv.Kw({ errorMessage: e2.errorMessage.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var y_ = r(7972);
    function w_(e2, t2) {
      return { _privacyMode: t2, finalSummary: void 0 !== e2.finalSummary ? (0, n.cZ)(e2.finalSummary, n.po.CODE, "final_summary", t2) : void 0 };
    }
    function v_(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new y_.ev({ finalSummary: e2.finalSummary?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function __(e2, t2) {
      return { _privacyMode: t2, finalSummary: (0, n.cZ)(e2.finalSummary, n.po.CODE, "final_summary", t2) };
    }
    function A_(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new y_.s0({ finalSummary: e2.finalSummary.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function S_(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function b_(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new y_.lX({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function E_(e2, t2) {
      return { _privacyMode: t2, result: I_(e2.result, t2) };
    }
    function I_(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: __(e2.value, t2) };
        case "error":
          return { case: "error", value: S_(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function C_(e2, t2, r2) {
      return new y_.sA({ result: k_(e2.result, t2, r2) });
    }
    function k_(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: A_(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: b_(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function x_(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? w_(e2.args, t2) : void 0, result: void 0 !== e2.result ? E_(e2.result, t2) : void 0 };
    }
    function T_(e2, t2, r2) {
      return new y_.V2({ args: void 0 !== e2.args ? v_(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? C_(e2.result, t2, r2) : void 0 });
    }
    var R_ = r(93520);
    function B_(e2, t2) {
      return { _privacyMode: t2, content: (0, n.cZ)(e2.content, n.po.CODE, "content", t2) };
    }
    function P_(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new R_.bj({ content: e2.content.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function J_(e2, t2) {
      return { _privacyMode: t2, url: (0, n.cZ)(e2.url, n.po.PATH, "url", t2), alt: void 0 !== e2.alt ? (0, n.cZ)(e2.alt, n.po.CODE, "alt", t2) : void 0 };
    }
    function M_(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new R_.Z9({ url: e2.url.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), alt: e2.alt?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function q_(e2, t2) {
      return { _privacyMode: t2, message: D_(e2.message, t2) };
    }
    function D_(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "text":
          return { case: "text", value: B_(e2.value, t2) };
        case "attachment":
          return { case: "attachment", value: J_(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function O_(e2, t2, r2) {
      return new R_.Xg({ message: N_(e2.message, t2, r2) });
    }
    function N_(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "text":
          return { case: "text", value: P_(e2.value, t2, r2) };
        case "attachment":
          return { case: "attachment", value: M_(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function F_(e2, t2) {
      return { _privacyMode: t2, timestamp: e2.timestamp, messageId: e2.messageId };
    }
    function U_(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function L_(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new R_._M({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function $_(e2, t2) {
      return { _privacyMode: t2, result: Q_(e2.result, t2) };
    }
    function Q_(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: F_(e2.value, t2) };
        case "error":
          return { case: "error", value: U_(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function j_(e2, t2, r2) {
      return new R_.HU({ result: G_(e2.result, t2, r2) });
    }
    function G_(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: (n2 = e2.value, new R_.P7({ timestamp: n2.timestamp, messageId: n2.messageId })) };
        case "error":
          return { case: "error", value: L_(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
      var n2;
    }
    function H_(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? q_(e2.args, t2) : void 0, result: void 0 !== e2.result ? $_(e2.result, t2) : void 0 };
    }
    function z_(e2, t2, r2) {
      return new R_.wl({ args: void 0 !== e2.args ? O_(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? j_(e2.result, t2, r2) : void 0 });
    }
    var W_ = r(12522);
    function V_(e2, t2) {
      return { _privacyMode: t2, message: (0, n.cZ)(e2.message, n.po.CODE, "message", t2) };
    }
    function K_(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new W_.qI({ message: e2.message.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Y_(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Z_(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function X_(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new W_.zB({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function eA(e2, t2) {
      return { _privacyMode: t2, result: tA(e2.result, t2) };
    }
    function tA(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Y_(e2.value, t2) };
        case "error":
          return { case: "error", value: Z_(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function rA(e2, t2, r2) {
      return new W_.Gg({ result: nA(e2.result, t2, r2) });
    }
    function nA(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: (e2.value, new W_.__({})) };
        case "error":
          return { case: "error", value: X_(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function sA(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? V_(e2.args, t2) : void 0, result: void 0 !== e2.result ? eA(e2.result, t2) : void 0 };
    }
    function oA(e2, t2, r2) {
      return new W_.fC({ args: void 0 !== e2.args ? K_(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? rA(e2.result, t2, r2) : void 0 });
    }
    var iA = r(37735);
    function aA(e2, t2) {
      return { _privacyMode: t2, installCommand: (0, n.cZ)(e2.installCommand, n.po.CODE, "install_command", t2), startCommand: (0, n.cZ)(e2.startCommand, n.po.CODE, "start_command", t2), dockerfileContents: (0, n.cZ)(e2.dockerfileContents, n.po.CODE, "dockerfile_contents", t2) };
    }
    function cA(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new iA.BI({ installCommand: e2.installCommand.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), startCommand: e2.startCommand.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), dockerfileContents: e2.dockerfileContents.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function lA(e2, t2) {
      return { _privacyMode: t2, result: uA(e2.result, t2) };
    }
    function uA(e2, t2) {
      return e2 && void 0 !== e2.case && "success" === e2.case ? { case: "success", value: mA(e2.value, t2) } : { case: void 0, value: void 0 };
    }
    function dA(e2, t2, r2) {
      return new iA.r$({ result: pA(e2.result, t2, r2) });
    }
    function pA(e2, t2, r2) {
      return e2 && void 0 !== e2.case && "success" === e2.case ? { case: "success", value: hA(e2.value, t2, r2) } : { case: void 0, value: void 0 };
    }
    function mA(e2, t2) {
      return { _privacyMode: t2 };
    }
    function hA(e2, t2, r2) {
      return new iA.JH({});
    }
    function fA(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? aA(e2.args, t2) : void 0, result: void 0 !== e2.result ? lA(e2.result, t2) : void 0 };
    }
    function gA(e2, t2, r2) {
      return new iA.MU({ args: void 0 !== e2.args ? cA(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? dA(e2.result, t2, r2) : void 0 });
    }
    var yA = r(62671);
    function wA(e2, t2) {
      return { _privacyMode: t2, parsingFailed: e2.parsingFailed, executableCommands: e2.executableCommands.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, name: (0, n.cZ)(e4.name, n.po.CODE, "name", t3), args: e4.args.map((e5) => (function(e6, t4) {
          return { _privacyMode: t4, type: e6.type, value: (0, n.cZ)(e6.value, n.po.CODE, "value", t4) };
        })(e5, t3)), fullText: (0, n.cZ)(e4.fullText, n.po.CODE, "full_text", t3) };
      })(e3, t2)), hasRedirects: e2.hasRedirects, hasCommandSubstitution: e2.hasCommandSubstitution, allRedirectsAreDevNull: e2.allRedirectsAreDevNull, redirects: e2.redirects.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, operator: e4.operator, destinationFds: e4.destinationFds, targetNodeType: e4.targetNodeType, targetText: void 0 !== e4.targetText ? (0, n.cZ)(e4.targetText, n.po.PATH, "target_text", t3) : void 0 };
      })(e3, t2)) };
    }
    function vA(e2, t2, r2) {
      return new yA.HO({ parsingFailed: e2.parsingFailed, executableCommands: e2.executableCommands.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new yA.Pv({ name: e4.name.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), args: e4.args.map((e5) => (function(e6, t4, r4) {
          const n3 = r4?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r4?.enforcing;
          return new yA.r6({ type: e6.type, value: e6.value.unwrap(t4, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }) });
        })(e5, t3, r3)), fullText: e4.fullText.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
      })(e3, t2, r2)), hasRedirects: e2.hasRedirects, hasCommandSubstitution: e2.hasCommandSubstitution, allRedirectsAreDevNull: e2.allRedirectsAreDevNull, redirects: e2.redirects.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new yA.mW({ operator: e4.operator, destinationFds: e4.destinationFds, targetNodeType: e4.targetNodeType, targetText: e4.targetText?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
      })(e3, t2, r2)) });
    }
    function _A(e2, t2) {
      return { parsingFailed: false, executableCommands: [], hasRedirects: false, hasCommandSubstitution: false, allRedirectsAreDevNull: void 0, redirects: [], ...t2, _privacyMode: e2 };
    }
    function AA(e2, t2) {
      return { _privacyMode: t2, commands: e2.commands.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, name: (0, n.cZ)(e4.name, n.po.CODE, "name", t3), arguments: e4.arguments.map((e5) => (0, n.cZ)(e5, n.po.CODE, "arguments", t3)), suggestedAllowlistEntry: void 0 !== e4.suggestedAllowlistEntry ? (0, n.cZ)(e4.suggestedAllowlistEntry, n.po.CODE, "suggested_allowlist_entry", t3) : void 0, subcommandTokens: e4.subcommandTokens.map((e5) => (0, n.cZ)(e5, n.po.CODE, "subcommand_tokens", t3)) };
      })(e3, t2)), suggestedSandboxMode: e2.suggestedSandboxMode, classificationFailed: e2.classificationFailed };
    }
    function SA(e2, t2, r2) {
      return new yA.E4({ commands: e2.commands.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new yA.nD({ name: e4.name.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), arguments: e4.arguments.map((e5) => e5.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), suggestedAllowlistEntry: e4.suggestedAllowlistEntry?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), subcommandTokens: e4.subcommandTokens.map((e5) => e5.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })) });
      })(e3, t2, r2)), suggestedSandboxMode: e2.suggestedSandboxMode, classificationFailed: e2.classificationFailed });
    }
    function bA(e2, t2) {
      return { _privacyMode: t2, pattern: (0, n.cZ)(e2.pattern, n.po.CODE, "pattern", t2), reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2), debounce: e2.debounce, notificationLimit: e2.notificationLimit };
    }
    function EA(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yA.$F({ pattern: e2.pattern.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), debounce: e2.debounce, notificationLimit: e2.notificationLimit });
    }
    function IA(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId };
    }
    function CA(e2, t2, r2) {
      return new yA.Hu({ toolCallId: e2.toolCallId });
    }
    function kA(e2, t2) {
      return { _privacyMode: t2, status: e2.status, shellResult: void 0 !== e2.shellResult ? MA(e2.shellResult, t2) : void 0 };
    }
    function xA(e2, t2, r2) {
      return new yA.jK({ status: e2.status, shellResult: void 0 !== e2.shellResult ? DA(e2.shellResult, t2, r2) : void 0 });
    }
    function TA(e2, t2) {
      return { _privacyMode: t2, kind: e2.kind, reason: void 0 !== e2.reason ? (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) : void 0 };
    }
    function RA(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yA.In({ kind: e2.kind, reason: e2.reason?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function BA(e2, t2) {
      return { _privacyMode: t2, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), workingDirectory: (0, n.cZ)(e2.workingDirectory, n.po.PATH, "working_directory", t2), timeout: e2.timeout, toolCallId: e2.toolCallId, simpleCommands: e2.simpleCommands.map((e3) => (0, n.cZ)(e3, n.po.CODE, "simple_commands", t2)), hasInputRedirect: e2.hasInputRedirect, hasOutputRedirect: e2.hasOutputRedirect, parsingResult: void 0 !== e2.parsingResult ? wA(e2.parsingResult, t2) : void 0, requestedSandboxPolicy: void 0 !== e2.requestedSandboxPolicy ? tc(e2.requestedSandboxPolicy, t2) : void 0, fileOutputThresholdBytes: e2.fileOutputThresholdBytes, isBackground: e2.isBackground, skipApproval: e2.skipApproval, timeoutBehavior: e2.timeoutBehavior, hardTimeout: e2.hardTimeout, description: e2.description, classifierResult: void 0 !== e2.classifierResult ? AA(e2.classifierResult, t2) : void 0, closeStdin: e2.closeStdin, outputNotification: void 0 !== e2.outputNotification ? bA(e2.outputNotification, t2) : void 0, smartModeApproval: void 0 !== e2.smartModeApproval ? d(e2.smartModeApproval, t2) : void 0, hookApprovalRequirement: void 0 !== e2.hookApprovalRequirement ? TA(e2.hookApprovalRequirement, t2) : void 0, conversationId: e2.conversationId, adminCommandDenylist: e2.adminCommandDenylist.map((e3) => (0, n.cZ)(e3, n.po.CODE, "admin_command_denylist", t2)), requestId: e2.requestId, secretScopeId: e2.secretScopeId };
    }
    function PA(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yA.a({ command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), workingDirectory: e2.workingDirectory.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), timeout: e2.timeout, toolCallId: e2.toolCallId, simpleCommands: e2.simpleCommands.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), hasInputRedirect: e2.hasInputRedirect, hasOutputRedirect: e2.hasOutputRedirect, parsingResult: void 0 !== e2.parsingResult ? vA(e2.parsingResult, t2, r2) : void 0, requestedSandboxPolicy: void 0 !== e2.requestedSandboxPolicy ? rc(e2.requestedSandboxPolicy, t2, r2) : void 0, fileOutputThresholdBytes: e2.fileOutputThresholdBytes, isBackground: e2.isBackground, skipApproval: e2.skipApproval, timeoutBehavior: e2.timeoutBehavior, hardTimeout: e2.hardTimeout, description: e2.description, classifierResult: void 0 !== e2.classifierResult ? SA(e2.classifierResult, t2, r2) : void 0, closeStdin: e2.closeStdin, outputNotification: void 0 !== e2.outputNotification ? EA(e2.outputNotification, t2, r2) : void 0, smartModeApproval: void 0 !== e2.smartModeApproval ? p(e2.smartModeApproval, t2, r2) : void 0, hookApprovalRequirement: void 0 !== e2.hookApprovalRequirement ? RA(e2.hookApprovalRequirement, t2, r2) : void 0, conversationId: e2.conversationId, adminCommandDenylist: e2.adminCommandDenylist.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), requestId: e2.requestId, secretScopeId: e2.secretScopeId });
    }
    function JA(e2, t2) {
      return { command: (0, n.cZ)("", n.po.CODE, "command", e2), workingDirectory: (0, n.cZ)("", n.po.PATH, "working_directory", e2), timeout: 0, toolCallId: "", simpleCommands: [], hasInputRedirect: false, hasOutputRedirect: false, parsingResult: void 0, requestedSandboxPolicy: void 0, fileOutputThresholdBytes: void 0, isBackground: false, skipApproval: false, timeoutBehavior: 0, hardTimeout: void 0, description: void 0, classifierResult: void 0, closeStdin: false, outputNotification: void 0, smartModeApproval: void 0, hookApprovalRequirement: void 0, conversationId: void 0, adminCommandDenylist: [], requestId: void 0, secretScopeId: void 0, ...t2, _privacyMode: e2 };
    }
    function MA(e2, t2) {
      return { _privacyMode: t2, sandboxPolicy: void 0 !== e2.sandboxPolicy ? tc(e2.sandboxPolicy, t2) : void 0, isBackground: e2.isBackground, terminalsFolder: void 0 !== e2.terminalsFolder ? (0, n.cZ)(e2.terminalsFolder, n.po.PATH, "terminals_folder", t2) : void 0, pid: e2.pid, result: qA(e2.result, t2) };
    }
    function qA(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: cS(e2.value, t2) };
        case "failure":
          return { case: "failure", value: uS(e2.value, t2) };
        case "timeout":
          return { case: "timeout", value: pS(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: hS(e2.value, t2) };
        case "spawnError":
          return { case: "spawnError", value: wS(e2.value, t2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: gS(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function DA(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yA.W4({ sandboxPolicy: void 0 !== e2.sandboxPolicy ? rc(e2.sandboxPolicy, t2, r2) : void 0, isBackground: e2.isBackground, terminalsFolder: e2.terminalsFolder?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), pid: e2.pid, result: OA(e2.result, t2, r2) });
    }
    function OA(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: lS(e2.value, t2, r2) };
        case "failure":
          return { case: "failure", value: dS(e2.value, t2, r2) };
        case "timeout":
          return { case: "timeout", value: mS(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: fS(e2.value, t2, r2) };
        case "spawnError":
          return { case: "spawnError", value: vS(e2.value, t2, r2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: yS(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function NA(e2, t2) {
      return { _privacyMode: t2, kind: e2.kind, memoryLimitBytes: e2.memoryLimitBytes };
    }
    function FA(e2, t2, r2) {
      return new yA.iH({ kind: e2.kind, memoryLimitBytes: e2.memoryLimitBytes });
    }
    function UA(e2, t2) {
      return { _privacyMode: t2, data: (0, n.cZ)(e2.data, n.po.CODE, "data", t2) };
    }
    function LA(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yA.o0({ data: e2.data.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function $A(e2, t2) {
      return { data: (0, n.cZ)("", n.po.CODE, "data", e2), ...t2, _privacyMode: e2 };
    }
    function QA(e2, t2) {
      return { _privacyMode: t2, data: (0, n.cZ)(e2.data, n.po.CODE, "data", t2) };
    }
    function jA(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yA.Db({ data: e2.data.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function GA(e2, t2) {
      return { data: (0, n.cZ)("", n.po.CODE, "data", e2), ...t2, _privacyMode: e2 };
    }
    function HA(e2, t2) {
      return { _privacyMode: t2, code: e2.code, cwd: (0, n.cZ)(e2.cwd, n.po.PATH, "cwd", t2), outputLocation: void 0 !== e2.outputLocation ? l(e2.outputLocation, t2) : void 0, aborted: e2.aborted, abortReason: e2.abortReason, localExecutionTimeMs: e2.localExecutionTimeMs, oomKill: void 0 !== e2.oomKill ? NA(e2.oomKill, t2) : void 0 };
    }
    function zA(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yA.vb({ code: e2.code, cwd: e2.cwd.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), outputLocation: void 0 !== e2.outputLocation ? u(e2.outputLocation, t2, r2) : void 0, aborted: e2.aborted, abortReason: e2.abortReason, localExecutionTimeMs: e2.localExecutionTimeMs, oomKill: void 0 !== e2.oomKill ? FA(e2.oomKill) : void 0 });
    }
    function WA(e2, t2) {
      return { code: 0, cwd: (0, n.cZ)("", n.po.PATH, "cwd", e2), outputLocation: void 0, aborted: false, abortReason: void 0, localExecutionTimeMs: void 0, oomKill: void 0, ...t2, _privacyMode: e2 };
    }
    function VA(e2, t2) {
      return { _privacyMode: t2, sandboxPolicy: void 0 !== e2.sandboxPolicy ? tc(e2.sandboxPolicy, t2) : void 0 };
    }
    function KA(e2, t2, r2) {
      return new yA.tD({ sandboxPolicy: void 0 !== e2.sandboxPolicy ? rc(e2.sandboxPolicy, t2, r2) : void 0 });
    }
    function YA(e2, t2) {
      return { sandboxPolicy: void 0, ...t2, _privacyMode: e2 };
    }
    function ZA(e2, t2) {
      return { _privacyMode: t2, shellId: e2.shellId, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), workingDirectory: (0, n.cZ)(e2.workingDirectory, n.po.PATH, "working_directory", t2), pid: e2.pid, msToWait: e2.msToWait, reason: e2.reason };
    }
    function XA(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yA.Y9({ shellId: e2.shellId, command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), workingDirectory: e2.workingDirectory.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), pid: e2.pid, msToWait: e2.msToWait, reason: e2.reason });
    }
    function eS(e2, t2) {
      return { _privacyMode: t2, hookAdditionalContexts: e2.hookAdditionalContexts.map((e3) => xc(e3, t2)) };
    }
    function tS(e2, t2, r2) {
      return new yA.Ng({ hookAdditionalContexts: e2.hookAdditionalContexts.map((e3) => Tc(e3, t2, r2)) });
    }
    function rS(e2, t2) {
      return { _privacyMode: t2, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), workingDirectory: (0, n.cZ)(e2.workingDirectory, n.po.PATH, "working_directory", t2), sandboxPolicyType: e2.sandboxPolicyType, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2), isReadonly: e2.isReadonly };
    }
    function nS(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yA.rI({ command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), workingDirectory: e2.workingDirectory.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), sandboxPolicyType: e2.sandboxPolicyType, reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), isReadonly: e2.isReadonly });
    }
    function sS(e2, t2) {
      return { _privacyMode: t2, event: oS(e2.event, t2) };
    }
    function oS(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "stdout":
          return { case: "stdout", value: UA(e2.value, t2) };
        case "stderr":
          return { case: "stderr", value: QA(e2.value, t2) };
        case "exit":
          return { case: "exit", value: HA(e2.value, t2) };
        case "start":
          return { case: "start", value: VA(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: hS(e2.value, t2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: gS(e2.value, t2) };
        case "backgrounded":
          return { case: "backgrounded", value: ZA(e2.value, t2) };
        case "hookContext":
          return { case: "hookContext", value: eS(e2.value, t2) };
        case "sandboxUnsupported":
          return { case: "sandboxUnsupported", value: rS(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function iS(e2, t2, r2) {
      return new yA.FI({ event: aS(e2.event, t2, r2) });
    }
    function aS(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "stdout":
          return { case: "stdout", value: LA(e2.value, t2, r2) };
        case "stderr":
          return { case: "stderr", value: jA(e2.value, t2, r2) };
        case "exit":
          return { case: "exit", value: zA(e2.value, t2, r2) };
        case "start":
          return { case: "start", value: KA(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: fS(e2.value, t2, r2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: yS(e2.value, t2, r2) };
        case "backgrounded":
          return { case: "backgrounded", value: XA(e2.value, t2, r2) };
        case "hookContext":
          return { case: "hookContext", value: tS(e2.value, t2, r2) };
        case "sandboxUnsupported":
          return { case: "sandboxUnsupported", value: nS(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function cS(e2, t2) {
      return { _privacyMode: t2, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), workingDirectory: (0, n.cZ)(e2.workingDirectory, n.po.PATH, "working_directory", t2), exitCode: e2.exitCode, signal: e2.signal, stdout: (0, n.cZ)(e2.stdout, n.po.CODE, "stdout", t2), stderr: (0, n.cZ)(e2.stderr, n.po.CODE, "stderr", t2), executionTime: e2.executionTime, outputLocation: void 0 !== e2.outputLocation ? l(e2.outputLocation, t2) : void 0, shellId: e2.shellId, interleavedOutput: void 0 !== e2.interleavedOutput ? (0, n.cZ)(e2.interleavedOutput, n.po.CODE, "interleaved_output", t2) : void 0, pid: e2.pid, msToWait: e2.msToWait, localExecutionTimeMs: e2.localExecutionTimeMs, backgroundReason: e2.backgroundReason, outputHead: void 0 !== e2.outputHead ? (0, n.cZ)(e2.outputHead, n.po.CODE, "output_head", t2) : void 0, outputTail: void 0 !== e2.outputTail ? (0, n.cZ)(e2.outputTail, n.po.CODE, "output_tail", t2) : void 0, elidedChars: e2.elidedChars };
    }
    function lS(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yA.QR({ command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), workingDirectory: e2.workingDirectory.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), exitCode: e2.exitCode, signal: e2.signal, stdout: e2.stdout.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), stderr: e2.stderr.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), executionTime: e2.executionTime, outputLocation: void 0 !== e2.outputLocation ? u(e2.outputLocation, t2, r2) : void 0, shellId: e2.shellId, interleavedOutput: e2.interleavedOutput?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), pid: e2.pid, msToWait: e2.msToWait, localExecutionTimeMs: e2.localExecutionTimeMs, backgroundReason: e2.backgroundReason, outputHead: e2.outputHead?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), outputTail: e2.outputTail?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), elidedChars: e2.elidedChars });
    }
    function uS(e2, t2) {
      return { _privacyMode: t2, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), workingDirectory: (0, n.cZ)(e2.workingDirectory, n.po.PATH, "working_directory", t2), exitCode: e2.exitCode, signal: e2.signal, stdout: (0, n.cZ)(e2.stdout, n.po.CODE, "stdout", t2), stderr: (0, n.cZ)(e2.stderr, n.po.CODE, "stderr", t2), executionTime: e2.executionTime, outputLocation: void 0 !== e2.outputLocation ? l(e2.outputLocation, t2) : void 0, interleavedOutput: void 0 !== e2.interleavedOutput ? (0, n.cZ)(e2.interleavedOutput, n.po.CODE, "interleaved_output", t2) : void 0, abortReason: e2.abortReason, aborted: e2.aborted, localExecutionTimeMs: e2.localExecutionTimeMs, outputHead: void 0 !== e2.outputHead ? (0, n.cZ)(e2.outputHead, n.po.CODE, "output_head", t2) : void 0, outputTail: void 0 !== e2.outputTail ? (0, n.cZ)(e2.outputTail, n.po.CODE, "output_tail", t2) : void 0, elidedChars: e2.elidedChars, oomKill: void 0 !== e2.oomKill ? NA(e2.oomKill, t2) : void 0 };
    }
    function dS(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yA.xC({ command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), workingDirectory: e2.workingDirectory.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), exitCode: e2.exitCode, signal: e2.signal, stdout: e2.stdout.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), stderr: e2.stderr.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), executionTime: e2.executionTime, outputLocation: void 0 !== e2.outputLocation ? u(e2.outputLocation, t2, r2) : void 0, interleavedOutput: e2.interleavedOutput?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), abortReason: e2.abortReason, aborted: e2.aborted, localExecutionTimeMs: e2.localExecutionTimeMs, outputHead: e2.outputHead?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), outputTail: e2.outputTail?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), elidedChars: e2.elidedChars, oomKill: void 0 !== e2.oomKill ? FA(e2.oomKill) : void 0 });
    }
    function pS(e2, t2) {
      return { _privacyMode: t2, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), workingDirectory: (0, n.cZ)(e2.workingDirectory, n.po.PATH, "working_directory", t2), timeoutMs: e2.timeoutMs };
    }
    function mS(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yA.eG({ command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), workingDirectory: e2.workingDirectory.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), timeoutMs: e2.timeoutMs });
    }
    function hS(e2, t2) {
      return { _privacyMode: t2, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), workingDirectory: (0, n.cZ)(e2.workingDirectory, n.po.PATH, "working_directory", t2), reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2), isReadonly: e2.isReadonly };
    }
    function fS(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yA.pZ({ command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), workingDirectory: e2.workingDirectory.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), isReadonly: e2.isReadonly });
    }
    function gS(e2, t2) {
      return { _privacyMode: t2, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), workingDirectory: (0, n.cZ)(e2.workingDirectory, n.po.PATH, "working_directory", t2), error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2), isReadonly: e2.isReadonly };
    }
    function yS(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yA.jn({ command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), workingDirectory: e2.workingDirectory.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), isReadonly: e2.isReadonly });
    }
    function wS(e2, t2) {
      return { _privacyMode: t2, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), workingDirectory: (0, n.cZ)(e2.workingDirectory, n.po.PATH, "working_directory", t2), error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function vS(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new yA.mJ({ command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), workingDirectory: e2.workingDirectory.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var _S = r(202);
    function AS(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? BA(e2.args, t2) : void 0, result: void 0 !== e2.result ? MA(e2.result, t2) : void 0, description: e2.description };
    }
    function SS(e2, t2, r2) {
      return new _S.$M({ args: void 0 !== e2.args ? PA(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? DA(e2.result, t2, r2) : void 0, description: e2.description });
    }
    function bS(e2, t2) {
      return { _privacyMode: t2, content: (0, n.cZ)(e2.content, n.po.CODE, "content", t2) };
    }
    function ES(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new _S.Ag({ content: e2.content.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function IS(e2, t2) {
      return { _privacyMode: t2, content: (0, n.cZ)(e2.content, n.po.CODE, "content", t2) };
    }
    function CS(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new _S.zw({ content: e2.content.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function kS(e2, t2) {
      return { _privacyMode: t2, delta: xS(e2.delta, t2) };
    }
    function xS(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "stdout":
          return { case: "stdout", value: bS(e2.value, t2) };
        case "stderr":
          return { case: "stderr", value: IS(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function TS(e2, t2, r2) {
      return new _S.Nl({ delta: RS(e2.delta, t2, r2) });
    }
    function RS(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "stdout":
          return { case: "stdout", value: ES(e2.value, t2, r2) };
        case "stderr":
          return { case: "stderr", value: CS(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    var BS = r(86592);
    function PS(e2, t2) {
      return { _privacyMode: t2, explanation: void 0 !== e2.explanation ? (0, n.cZ)(e2.explanation, n.po.CODE, "explanation", t2) : void 0, toolCallId: e2.toolCallId };
    }
    function JS(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new BS.uJ({ explanation: e2.explanation?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallId: e2.toolCallId });
    }
    function MS(e2, t2) {
      return { _privacyMode: t2, result: qS(e2.result, t2) };
    }
    function qS(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: NS(e2.value, t2) };
        case "error":
          return { case: "error", value: US(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function DS(e2, t2, r2) {
      return new BS._r({ result: OS(e2.result, t2, r2) });
    }
    function OS(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: FS(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: LS(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function NS(e2, t2) {
      return { _privacyMode: t2 };
    }
    function FS(e2, t2, r2) {
      return new BS.Ag({});
    }
    function US(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function LS(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new BS.Fz({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function $S(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? PS(e2.args, t2) : void 0, result: void 0 !== e2.result ? MS(e2.result, t2) : void 0 };
    }
    function QS(e2, t2, r2) {
      return new BS.Jk({ args: void 0 !== e2.args ? JS(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? DS(e2.result, t2, r2) : void 0 });
    }
    var jS = r(7577);
    function GS(e2, t2) {
      return { _privacyMode: t2, explanation: void 0 !== e2.explanation ? (0, n.cZ)(e2.explanation, n.po.CODE, "explanation", t2) : void 0, toolCallId: e2.toolCallId };
    }
    function HS(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new jS.Du({ explanation: e2.explanation?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallId: e2.toolCallId });
    }
    function zS(e2, t2) {
      return { _privacyMode: t2, result: WS(e2.result, t2) };
    }
    function WS(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: YS(e2.value, t2) };
        case "error":
          return { case: "error", value: XS(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function VS(e2, t2, r2) {
      return new jS.RF({ result: KS(e2.result, t2, r2) });
    }
    function KS(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: ZS(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: eb(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function YS(e2, t2) {
      return { _privacyMode: t2 };
    }
    function ZS(e2, t2, r2) {
      return new jS.d0({});
    }
    function XS(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function eb(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new jS.CA({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function tb(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? GS(e2.args, t2) : void 0, result: void 0 !== e2.result ? zS(e2.result, t2) : void 0 };
    }
    function rb(e2, t2, r2) {
      return new jS.uo({ args: void 0 !== e2.args ? HS(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? VS(e2.result, t2, r2) : void 0 });
    }
    var nb = r(70682);
    function sb(e2, t2) {
      return { _privacyMode: t2, targetModeId: e2.targetModeId, explanation: void 0 !== e2.explanation ? (0, n.cZ)(e2.explanation, n.po.CODE, "explanation", t2) : void 0, toolCallId: e2.toolCallId };
    }
    function ob(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new nb.Bx({ targetModeId: e2.targetModeId, explanation: e2.explanation?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallId: e2.toolCallId });
    }
    function ib(e2, t2) {
      return { _privacyMode: t2, result: ab(e2.result, t2) };
    }
    function ab(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: ub(e2.value, t2) };
        case "error":
          return { case: "error", value: pb(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: hb(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function cb(e2, t2, r2) {
      return new nb.l$({ result: lb(e2.result, t2, r2) });
    }
    function lb(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: db(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: mb(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: fb(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function ub(e2, t2) {
      return { _privacyMode: t2, fromModeId: e2.fromModeId, toModeId: e2.toModeId };
    }
    function db(e2, t2, r2) {
      return new nb.RO({ fromModeId: e2.fromModeId, toModeId: e2.toModeId });
    }
    function pb(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function mb(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new nb.eU({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function hb(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function fb(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new nb.Ci({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function gb(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? sb(e2.args, t2) : void 0, result: void 0 !== e2.result ? ib(e2.result, t2) : void 0 };
    }
    function yb(e2, t2, r2) {
      return new nb.Cs({ args: void 0 !== e2.args ? ob(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? cb(e2.result, t2, r2) : void 0 });
    }
    function wb(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? sb(e2.args, t2) : void 0 };
    }
    function vb(e2, t2, r2) {
      return new nb.Nc({ args: void 0 !== e2.args ? ob(e2.args, t2, r2) : void 0 });
    }
    function _b(e2, t2) {
      return { _privacyMode: t2, result: Ab(e2.result, t2) };
    }
    function Ab(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "approved":
          return { case: "approved", value: Eb(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: Cb(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Sb(e2, t2, r2) {
      return new nb.w$({ result: bb(e2.result, t2, r2) });
    }
    function bb(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "approved":
          return { case: "approved", value: Ib(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: kb(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Eb(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Ib(e2, t2, r2) {
      return new nb.q5({});
    }
    function Cb(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function kb(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new nb.rA({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var xb = r(337);
    function Tb(e2, t2) {
      return { _privacyMode: t2, url: e2.url, toolCallId: e2.toolCallId };
    }
    function Rb(e2, t2, r2) {
      return new xb.sA({ url: e2.url, toolCallId: e2.toolCallId });
    }
    function Bb(e2, t2) {
      return { _privacyMode: t2, result: Pb(e2.result, t2) };
    }
    function Pb(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: qb(e2.value, t2) };
        case "error":
          return { case: "error", value: Ob(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: Fb(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Jb(e2, t2, r2) {
      return new xb.wA({ result: Mb(e2.result, t2, r2) });
    }
    function Mb(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: Db(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: Nb(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: Ub(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function qb(e2, t2) {
      return { _privacyMode: t2, url: e2.url, markdown: (0, n.cZ)(e2.markdown, n.po.CODE, "markdown", t2), outputLocation: void 0 !== e2.outputLocation ? l(e2.outputLocation, t2) : void 0 };
    }
    function Db(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new xb.Cp({ url: e2.url, markdown: e2.markdown.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), outputLocation: void 0 !== e2.outputLocation ? u(e2.outputLocation, t2, r2) : void 0 });
    }
    function Ob(e2, t2) {
      return { _privacyMode: t2, url: e2.url, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function Nb(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new xb.vS({ url: e2.url, error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Fb(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function Ub(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new xb.hO({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Lb(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Tb(e2.args, t2) : void 0, result: void 0 !== e2.result ? Bb(e2.result, t2) : void 0 };
    }
    function $b(e2, t2, r2) {
      return new xb.fd({ args: void 0 !== e2.args ? Rb(e2.args) : void 0, result: void 0 !== e2.result ? Jb(e2.result, t2, r2) : void 0 });
    }
    function Qb(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? Tb(e2.args, t2) : void 0, skipApproval: e2.skipApproval, smartModeApproval: void 0 !== e2.smartModeApproval ? d(e2.smartModeApproval, t2) : void 0 };
    }
    function jb(e2, t2, r2) {
      return new xb.Un({ args: void 0 !== e2.args ? Rb(e2.args) : void 0, skipApproval: e2.skipApproval, smartModeApproval: void 0 !== e2.smartModeApproval ? p(e2.smartModeApproval, t2, r2) : void 0 });
    }
    function Gb(e2, t2) {
      return { _privacyMode: t2, result: Hb(e2.result, t2) };
    }
    function Hb(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "approved":
          return { case: "approved", value: Vb(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: Yb(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function zb(e2, t2, r2) {
      return new xb.fS({ result: Wb(e2.result, t2, r2) });
    }
    function Wb(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "approved":
          return { case: "approved", value: Kb(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: Zb(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Vb(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Kb(e2, t2, r2) {
      return new xb.Hs({});
    }
    function Yb(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function Zb(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new xb.m$({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var Xb = r(32325);
    function eE(e2, t2) {
      return { _privacyMode: t2, searchTerm: (0, n.cZ)(e2.searchTerm, n.po.CODE, "search_term", t2), toolCallId: e2.toolCallId };
    }
    function tE(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Xb.G6({ searchTerm: e2.searchTerm.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallId: e2.toolCallId });
    }
    function rE(e2, t2) {
      return { _privacyMode: t2, result: nE(e2.result, t2) };
    }
    function nE(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: iE(e2.value, t2) };
        case "error":
          return { case: "error", value: cE(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: uE(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function sE(e2, t2, r2) {
      return new Xb.gT({ result: oE(e2.result, t2, r2) });
    }
    function oE(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: aE(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: lE(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: dE(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function iE(e2, t2) {
      return { _privacyMode: t2, references: e2.references.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, title: (0, n.cZ)(e4.title, n.po.CODE, "title", t3), url: e4.url, chunk: (0, n.cZ)(e4.chunk, n.po.CODE, "chunk", t3) };
      })(e3, t2)) };
    }
    function aE(e2, t2, r2) {
      return new Xb.Yb({ references: e2.references.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new Xb.U8({ title: e4.title.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), url: e4.url, chunk: e4.chunk.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
      })(e3, t2, r2)) });
    }
    function cE(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function lE(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Xb.xE({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function uE(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function dE(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Xb.P_({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function pE(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? eE(e2.args, t2) : void 0, result: void 0 !== e2.result ? rE(e2.result, t2) : void 0 };
    }
    function mE(e2, t2, r2) {
      return new Xb.pn({ args: void 0 !== e2.args ? tE(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? sE(e2.result, t2, r2) : void 0 });
    }
    function hE(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? eE(e2.args, t2) : void 0 };
    }
    function fE(e2, t2, r2) {
      return new Xb.KL({ args: void 0 !== e2.args ? tE(e2.args, t2, r2) : void 0 });
    }
    function gE(e2, t2) {
      return { _privacyMode: t2, result: yE(e2.result, t2) };
    }
    function yE(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "approved":
          return { case: "approved", value: _E(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: SE(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function wE(e2, t2, r2) {
      return new Xb.lI({ result: vE(e2.result, t2, r2) });
    }
    function vE(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "approved":
          return { case: "approved", value: AE(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: bE(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function _E(e2, t2) {
      return { _privacyMode: t2 };
    }
    function AE(e2, t2, r2) {
      return new Xb.XJ({});
    }
    function SE(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function bE(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Xb.yc({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var EE = r(44498);
    function IE(e2, t2) {
      return { _privacyMode: t2, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), workingDirectory: (0, n.cZ)(e2.workingDirectory, n.po.PATH, "working_directory", t2), toolCallId: e2.toolCallId, parsingResult: void 0 !== e2.parsingResult ? wA(e2.parsingResult, t2) : void 0, sandboxPolicy: void 0 !== e2.sandboxPolicy ? tc(e2.sandboxPolicy, t2) : void 0, enableWriteShellStdinTool: e2.enableWriteShellStdinTool, description: void 0 !== e2.description ? (0, n.cZ)(e2.description, n.po.CODE, "description", t2) : void 0, classifierResult: void 0 !== e2.classifierResult ? AA(e2.classifierResult, t2) : void 0, outputNotification: void 0 !== e2.outputNotification ? bA(e2.outputNotification, t2) : void 0, smartModeApproval: void 0 !== e2.smartModeApproval ? d(e2.smartModeApproval, t2) : void 0, hookApprovalRequirement: void 0 !== e2.hookApprovalRequirement ? TA(e2.hookApprovalRequirement, t2) : void 0, skipApproval: e2.skipApproval, conversationId: e2.conversationId, adminCommandDenylist: e2.adminCommandDenylist.map((e3) => (0, n.cZ)(e3, n.po.CODE, "admin_command_denylist", t2)), requestId: e2.requestId, suppressStdinLogging: e2.suppressStdinLogging, secretScopeId: e2.secretScopeId };
    }
    function CE(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new EE.$P({ command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), workingDirectory: e2.workingDirectory.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallId: e2.toolCallId, parsingResult: void 0 !== e2.parsingResult ? vA(e2.parsingResult, t2, r2) : void 0, sandboxPolicy: void 0 !== e2.sandboxPolicy ? rc(e2.sandboxPolicy, t2, r2) : void 0, enableWriteShellStdinTool: e2.enableWriteShellStdinTool, description: e2.description?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), classifierResult: void 0 !== e2.classifierResult ? SA(e2.classifierResult, t2, r2) : void 0, outputNotification: void 0 !== e2.outputNotification ? EA(e2.outputNotification, t2, r2) : void 0, smartModeApproval: void 0 !== e2.smartModeApproval ? p(e2.smartModeApproval, t2, r2) : void 0, hookApprovalRequirement: void 0 !== e2.hookApprovalRequirement ? RA(e2.hookApprovalRequirement, t2, r2) : void 0, skipApproval: e2.skipApproval, conversationId: e2.conversationId, adminCommandDenylist: e2.adminCommandDenylist.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), requestId: e2.requestId, suppressStdinLogging: e2.suppressStdinLogging, secretScopeId: e2.secretScopeId });
    }
    function kE(e2, t2) {
      return { _privacyMode: t2, result: xE(e2.result, t2) };
    }
    function xE(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: BE(e2.value, t2) };
        case "error":
          return { case: "error", value: JE(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: hS(e2.value, t2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: gS(e2.value, t2) };
        case "sandboxUnsupported":
          return { case: "sandboxUnsupported", value: rS(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function TE(e2, t2, r2) {
      return new EE.Lt({ result: RE(e2.result, t2, r2) });
    }
    function RE(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: PE(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: ME(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: fS(e2.value, t2, r2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: yS(e2.value, t2, r2) };
        case "sandboxUnsupported":
          return { case: "sandboxUnsupported", value: nS(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function BE(e2, t2) {
      return { _privacyMode: t2, shellId: e2.shellId, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), workingDirectory: (0, n.cZ)(e2.workingDirectory, n.po.PATH, "working_directory", t2), pid: e2.pid };
    }
    function PE(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new EE.Po({ shellId: e2.shellId, command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), workingDirectory: e2.workingDirectory.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), pid: e2.pid });
    }
    function JE(e2, t2) {
      return { _privacyMode: t2, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), workingDirectory: (0, n.cZ)(e2.workingDirectory, n.po.PATH, "working_directory", t2), error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function ME(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new EE.Of({ command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), workingDirectory: e2.workingDirectory.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function qE(e2, t2) {
      return { _privacyMode: t2, shellId: e2.shellId, chars: (0, n.cZ)(e2.chars, n.po.CODE, "chars", t2) };
    }
    function DE(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new EE.LL({ shellId: e2.shellId, chars: e2.chars.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function OE(e2, t2) {
      return { _privacyMode: t2, result: NE(e2.result, t2) };
    }
    function NE(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: LE(e2.value, t2) };
        case "error":
          return { case: "error", value: QE(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function FE(e2, t2, r2) {
      return new EE.nt({ result: UE(e2.result, t2, r2) });
    }
    function UE(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: $E(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: jE(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function LE(e2, t2) {
      return { _privacyMode: t2, shellId: e2.shellId, terminalFileLengthBeforeInputWritten: e2.terminalFileLengthBeforeInputWritten };
    }
    function $E(e2, t2, r2) {
      return new EE.tR({ shellId: e2.shellId, terminalFileLengthBeforeInputWritten: e2.terminalFileLengthBeforeInputWritten });
    }
    function QE(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function jE(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new EE.Gv({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var GE = r(69495);
    function HE(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? qE(e2.args, t2) : void 0, result: void 0 !== e2.result ? OE(e2.result, t2) : void 0 };
    }
    function zE(e2, t2, r2) {
      return new GE.k({ args: void 0 !== e2.args ? DE(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? FE(e2.result, t2, r2) : void 0 });
    }
    var WE = r(63583);
    function VE(e2, t2) {
      return { _privacyMode: t2, query: (0, n.cZ)(e2.query, n.po.CODE, "query", t2), fromDate: e2.fromDate, toDate: e2.toDate, allowedXHandles: e2.allowedXHandles.map((e3) => (0, n.cZ)(e3, n.po.CODE, "allowed_x_handles", t2)), excludedXHandles: e2.excludedXHandles.map((e3) => (0, n.cZ)(e3, n.po.CODE, "excluded_x_handles", t2)) };
    }
    function KE(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new WE._d({ query: e2.query.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), fromDate: e2.fromDate, toDate: e2.toDate, allowedXHandles: e2.allowedXHandles.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), excludedXHandles: e2.excludedXHandles.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })) });
    }
    function YE(e2, t2) {
      return { _privacyMode: t2, result: ZE(e2.result, t2) };
    }
    function ZE(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: tI(e2.value, t2) };
        case "error":
          return { case: "error", value: nI(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: oI(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function XE(e2, t2, r2) {
      return new WE.q3({ result: eI(e2.result, t2, r2) });
    }
    function eI(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: rI(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: sI(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: iI(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function tI(e2, t2) {
      return { _privacyMode: t2, answer: (0, n.cZ)(e2.answer, n.po.CODE, "answer", t2), citations: e2.citations.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, url: e4.url, title: (0, n.cZ)(e4.title, n.po.CODE, "title", t3) };
      })(e3, t2)) };
    }
    function rI(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new WE.gu({ answer: e2.answer.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), citations: e2.citations.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new WE.W1({ url: e4.url, title: e4.title.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }) });
      })(e3, t2, r2)) });
    }
    function nI(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function sI(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new WE.zI({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function oI(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function iI(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new WE.JI({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function aI(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? VE(e2.args, t2) : void 0, result: void 0 !== e2.result ? YE(e2.result, t2) : void 0 };
    }
    function cI(e2, t2, r2) {
      return new WE.Vi({ args: void 0 !== e2.args ? KE(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? XE(e2.result, t2, r2) : void 0 });
    }
    var lI = r(69584);
    function uI(e2, t2) {
      return { _privacyMode: t2, description: (0, n.cZ)(e2.description, n.po.CODE, "description", t2), prompt: (0, n.cZ)(e2.prompt, n.po.CODE, "prompt", t2), subagentType: void 0 !== e2.subagentType ? Fg(e2.subagentType, t2) : void 0, model: e2.model, resume: e2.resume, agentId: e2.agentId, attachments: e2.attachments.map((e3) => (0, n.cZ)(e3, n.po.PATH, "attachments", t2)), mode: e2.mode, respondingToMessageIds: e2.respondingToMessageIds, environment: e2.environment, machine: void 0 !== e2.machine ? pI(e2.machine, t2) : void 0 };
    }
    function dI(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.dWK({ description: e2.description.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), prompt: e2.prompt.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), subagentType: void 0 !== e2.subagentType ? Lg(e2.subagentType, t2, r2) : void 0, model: e2.model, resume: e2.resume, agentId: e2.agentId, attachments: e2.attachments.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), mode: e2.mode, respondingToMessageIds: e2.respondingToMessageIds, environment: e2.environment, machine: void 0 !== e2.machine ? hI(e2.machine, t2, r2) : void 0 });
    }
    function pI(e2, t2) {
      return { _privacyMode: t2, machine: mI(e2.machine, t2) };
    }
    function mI(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "sameMachine":
          return { case: "sameMachine", value: gI(e2.value, t2) };
        case "newCloudVm":
          return { case: "newCloudVm", value: wI(e2.value, t2) };
        case "selfHostedWorker":
          return { case: "selfHostedWorker", value: _I(e2.value, t2) };
        case "selfHostedPool":
          return { case: "selfHostedPool", value: SI(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function hI(e2, t2, r2) {
      return new lI.$Zl({ machine: fI(e2.machine, t2, r2) });
    }
    function fI(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "sameMachine":
          return { case: "sameMachine", value: yI(e2.value, t2, r2) };
        case "newCloudVm":
          return { case: "newCloudVm", value: vI(e2.value, t2, r2) };
        case "selfHostedWorker":
          return { case: "selfHostedWorker", value: AI(e2.value, t2, r2) };
        case "selfHostedPool":
          return { case: "selfHostedPool", value: bI(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function gI(e2, t2) {
      return { _privacyMode: t2 };
    }
    function yI(e2, t2, r2) {
      return new lI.xQ8({});
    }
    function wI(e2, t2) {
      return { _privacyMode: t2, environmentBuildId: e2.environmentBuildId, baseBranch: e2.baseBranch };
    }
    function vI(e2, t2, r2) {
      return new lI.UU9({ environmentBuildId: e2.environmentBuildId, baseBranch: e2.baseBranch });
    }
    function _I(e2, t2) {
      return { _privacyMode: t2, workerId: e2.workerId };
    }
    function AI(e2, t2, r2) {
      return new lI.dl_({ workerId: e2.workerId });
    }
    function SI(e2, t2) {
      return { _privacyMode: t2, pool: e2.pool, labels: e2.labels.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, key: e4.key, value: e4.value };
      })(e3, t2)) };
    }
    function bI(e2, t2, r2) {
      return new lI.DC({ pool: e2.pool, labels: e2.labels.map((e3) => (function(e4) {
        return new lI.IZk({ key: e4.key, value: e4.value });
      })(e3)) });
    }
    function EI(e2, t2) {
      return { _privacyMode: t2, conversationSteps: e2.conversationSteps.map((e3) => pC(e3, t2)), agentId: e2.agentId, isBackground: e2.isBackground, durationMs: e2.durationMs, resultSuffix: void 0 !== e2.resultSuffix ? (0, n.cZ)(e2.resultSuffix, n.po.CODE, "result_suffix", t2) : void 0, backgroundReason: e2.backgroundReason, transcriptPath: void 0 !== e2.transcriptPath ? (0, n.cZ)(e2.transcriptPath, n.po.PATH, "transcript_path", t2) : void 0 };
    }
    function II(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.Xg3({ conversationSteps: e2.conversationSteps.map((e3) => hC(e3, t2, r2)), agentId: e2.agentId, isBackground: e2.isBackground, durationMs: e2.durationMs, resultSuffix: e2.resultSuffix?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), backgroundReason: e2.backgroundReason, transcriptPath: e2.transcriptPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function CI(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function kI(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.IkE({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function xI(e2, t2) {
      return { _privacyMode: t2, result: TI(e2.result, t2) };
    }
    function TI(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: EI(e2.value, t2) };
        case "error":
          return { case: "error", value: CI(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function RI(e2, t2, r2) {
      return new lI.$$B({ result: BI(e2.result, t2, r2) });
    }
    function BI(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: II(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: kI(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function PI(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? uI(e2.args, t2) : void 0, result: void 0 !== e2.result ? xI(e2.result, t2) : void 0, cloudAgentBcId: e2.cloudAgentBcId };
    }
    function JI(e2, t2, r2) {
      return new lI.U4S({ args: void 0 !== e2.args ? dI(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? RI(e2.result, t2, r2) : void 0, cloudAgentBcId: e2.cloudAgentBcId });
    }
    function MI(e2, t2) {
      return { _privacyMode: t2, interactionUpdate: void 0 !== e2.interactionUpdate ? YT(e2.interactionUpdate, t2) : void 0 };
    }
    function qI(e2, t2, r2) {
      return new lI.aon({ interactionUpdate: void 0 !== e2.interactionUpdate ? XT(e2.interactionUpdate, t2, r2) : void 0 });
    }
    function DI(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), branchName: e2.branchName };
    }
    function OI(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.eus({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), branchName: e2.branchName });
    }
    function NI(e2, t2) {
      return { _privacyMode: t2 };
    }
    function FI(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function UI(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.ZKF({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function LI(e2, t2) {
      return { _privacyMode: t2, result: $I(e2.result, t2) };
    }
    function $I(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: NI(e2.value, t2) };
        case "error":
          return { case: "error", value: FI(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function QI(e2, t2, r2) {
      return new lI.kxJ({ result: jI(e2.result, t2, r2) });
    }
    function jI(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: (e2.value, new lI.wBg({})) };
        case "error":
          return { case: "error", value: UI(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function GI(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? DI(e2.args, t2) : void 0, result: void 0 !== e2.result ? LI(e2.result, t2) : void 0 };
    }
    function HI(e2, t2, r2) {
      return new lI.bct({ args: void 0 !== e2.args ? OI(e2.args, t2, r2) : void 0, result: void 0 !== e2.result ? QI(e2.result, t2, r2) : void 0 });
    }
    function zI(e2, t2) {
      return { _privacyMode: t2, hookAdditionalContexts: e2.hookAdditionalContexts.map((e3) => xc(e3, t2)), toolCallId: e2.toolCallId, startedAtMs: e2.startedAtMs, completedAtMs: e2.completedAtMs, tool: WI(e2.tool, t2) };
    }
    function WI(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "shellToolCall":
          return { case: "shellToolCall", value: AS(e2.value, t2) };
        case "deleteToolCall":
          return { case: "deleteToolCall", value: lo(e2.value, t2) };
        case "globToolCall":
          return { case: "globToolCall", value: ka(e2.value, t2) };
        case "grepToolCall":
          return { case: "grepToolCall", value: Ic(e2.value, t2) };
        case "readToolCall":
          return { case: "readToolCall", value: qh(e2.value, t2) };
        case "updateTodosToolCall":
          return { case: "updateTodosToolCall", value: es(e2.value, t2) };
        case "readTodosToolCall":
          return { case: "readTodosToolCall", value: ps(e2.value, t2) };
        case "editToolCall":
          return { case: "editToolCall", value: jo(e2.value, t2) };
        case "lsToolCall":
          return { case: "lsToolCall", value: Zc(e2.value, t2) };
        case "readLintsToolCall":
          return { case: "readLintsToolCall", value: ah(e2.value, t2) };
        case "mcpToolCall":
          return { case: "mcpToolCall", value: ud(e2.value, t2) };
        case "semSearchToolCall":
          return { case: "semSearchToolCall", value: o_(e2.value, t2) };
        case "createPlanToolCall":
          return { case: "createPlanToolCall", value: Is(e2.value, t2) };
        case "webSearchToolCall":
          return { case: "webSearchToolCall", value: pE(e2.value, t2) };
        case "taskToolCall":
          return { case: "taskToolCall", value: PI(e2.value, t2) };
        case "listMcpResourcesToolCall":
          return { case: "listMcpResourcesToolCall", value: Xu(e2.value, t2) };
        case "readMcpResourceToolCall":
          return { case: "readMcpResourceToolCall", value: td(e2.value, t2) };
        case "applyAgentDiffToolCall":
          return { case: "applyAgentDiffToolCall", value: k(e2.value, t2) };
        case "askQuestionToolCall":
          return { case: "askQuestionToolCall", value: $(e2.value, t2) };
        case "fetchToolCall":
          return { case: "fetchToolCall", value: vi(e2.value, t2) };
        case "switchModeToolCall":
          return { case: "switchModeToolCall", value: gb(e2.value, t2) };
        case "generateImageToolCall":
          return { case: "generateImageToolCall", value: Pi(e2.value, t2) };
        case "recordScreenToolCall":
          return { case: "recordScreenToolCall", value: Tf(e2.value, t2) };
        case "computerUseToolCall":
          return { case: "computerUseToolCall", value: cr(e2.value, t2) };
        case "writeShellStdinToolCall":
          return { case: "writeShellStdinToolCall", value: HE(e2.value, t2) };
        case "reflectToolCall":
          return { case: "reflectToolCall", value: $f(e2.value, t2) };
        case "setupVmEnvironmentToolCall":
          return { case: "setupVmEnvironmentToolCall", value: fA(e2.value, t2) };
        case "truncatedToolCall":
          return { case: "truncatedToolCall", value: iC(e2.value, t2) };
        case "startGrindExecutionToolCall":
          return { case: "startGrindExecutionToolCall", value: $S(e2.value, t2) };
        case "startGrindPlanningToolCall":
          return { case: "startGrindPlanningToolCall", value: tb(e2.value, t2) };
        case "webFetchToolCall":
          return { case: "webFetchToolCall", value: Lb(e2.value, t2) };
        case "reportBugfixResultsToolCall":
          return { case: "reportBugfixResultsToolCall", value: Pg(e2.value, t2) };
        case "aiAttributionToolCall":
          return { case: "aiAttributionToolCall", value: E(e2.value, t2) };
        case "prManagementToolCall":
          return { case: "prManagementToolCall", value: Om(e2.value, t2) };
        case "mcpAuthToolCall":
          return { case: "mcpAuthToolCall", value: Il(e2.value, t2) };
        case "awaitToolCall":
          return { case: "awaitToolCall", value: Se(e2.value, t2) };
        case "blameByFilePathToolCall":
          return { case: "blameByFilePathToolCall", value: qe(e2.value, t2) };
        case "getMcpToolsToolCall":
          return { case: "getMcpToolsToolCall", value: ha(e2.value, t2) };
        case "reportBugToolCall":
          return { case: "reportBugToolCall", value: yg(e2.value, t2) };
        case "setActiveBranchToolCall":
          return { case: "setActiveBranchToolCall", value: GI(e2.value, t2) };
        case "communicateUpdateToolCall":
          return { case: "communicateUpdateToolCall", value: bt(e2.value, t2) };
        case "sendFinalSummaryToolCall":
          return { case: "sendFinalSummaryToolCall", value: x_(e2.value, t2) };
        case "replaceEnvToolCall":
          return { case: "replaceEnvToolCall", value: ng(e2.value, t2) };
        case "editPrLabelsToolCall":
          return { case: "editPrLabelsToolCall", value: bo(e2.value, t2) };
        case "recordCiInvestigationFindingsToolCall":
          return { case: "recordCiInvestigationFindingsToolCall", value: df(e2.value, t2) };
        case "sendMessageToolCall":
          return { case: "sendMessageToolCall", value: H_(e2.value, t2) };
        case "fetchCloudAgentDataToolCall":
          return { case: "fetchCloudAgentDataToolCall", value: oi(e2.value, t2) };
        case "sendToUserToolCall":
          return { case: "sendToUserToolCall", value: sA(e2.value, t2) };
        case "piReadToolCall":
          return { case: "piReadToolCall", value: Bp(e2.value, t2) };
        case "piBashToolCall":
          return { case: "piBashToolCall", value: gd(e2.value, t2) };
        case "piEditToolCall":
          return { case: "piEditToolCall", value: Bd(e2.value, t2) };
        case "piWriteToolCall":
          return { case: "piWriteToolCall", value: jp(e2.value, t2) };
        case "piGrepToolCall":
          return { case: "piGrepToolCall", value: op(e2.value, t2) };
        case "piFindToolCall":
          return { case: "piFindToolCall", value: Hd(e2.value, t2) };
        case "piLsToolCall":
          return { case: "piLsToolCall", value: wp(e2.value, t2) };
        case "connectScmToolCall":
          return { case: "connectScmToolCall", value: Tr(e2.value, t2) };
        case "searchConversationsToolCall":
          return { case: "searchConversationsToolCall", value: Aw(e2.value, t2) };
        case "createGoalToolCall":
          return { case: "createGoalToolCall", value: Fa(e2.value, t2) };
        case "updateGoalToolCall":
          return { case: "updateGoalToolCall", value: Wa(e2.value, t2) };
        case "getAgentStatusToolCall":
          return { case: "getAgentStatusToolCall", value: en(e2.value, t2) };
        case "sendToAgentToolCall":
          return { case: "sendToAgentToolCall", value: mn(e2.value, t2) };
        case "readAgentTranscriptToolCall":
          return { case: "readAgentTranscriptToolCall", value: In(e2.value, t2) };
        case "createAgentToolCall":
          return { case: "createAgentToolCall", value: On(e2.value, t2) };
        case "stopAgentToolCall":
          return { case: "stopAgentToolCall", value: Vn(e2.value, t2) };
        case "writeCanvasToolCall":
          return { case: "writeCanvasToolCall", value: Ze(e2.value, t2) };
        case "readCanvasToolCall":
          return { case: "readCanvasToolCall", value: ut(e2.value, t2) };
        case "generateVideoToolCall":
          return { case: "generateVideoToolCall", value: ta(e2.value, t2) };
        case "xSearchToolCall":
          return { case: "xSearchToolCall", value: aI(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function VI(e2, t2, r2) {
      return new lI.Dm_({ hookAdditionalContexts: e2.hookAdditionalContexts.map((e3) => Tc(e3, t2, r2)), toolCallId: e2.toolCallId, startedAtMs: e2.startedAtMs, completedAtMs: e2.completedAtMs, tool: KI(e2.tool, t2, r2) });
    }
    function KI(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "shellToolCall":
          return { case: "shellToolCall", value: SS(e2.value, t2, r2) };
        case "deleteToolCall":
          return { case: "deleteToolCall", value: uo(e2.value, t2, r2) };
        case "globToolCall":
          return { case: "globToolCall", value: xa(e2.value, t2, r2) };
        case "grepToolCall":
          return { case: "grepToolCall", value: Cc(e2.value, t2, r2) };
        case "readToolCall":
          return { case: "readToolCall", value: Dh(e2.value, t2, r2) };
        case "updateTodosToolCall":
          return { case: "updateTodosToolCall", value: ts(e2.value, t2, r2) };
        case "readTodosToolCall":
          return { case: "readTodosToolCall", value: ms(e2.value, t2, r2) };
        case "editToolCall":
          return { case: "editToolCall", value: Go(e2.value, t2, r2) };
        case "lsToolCall":
          return { case: "lsToolCall", value: Xc(e2.value, t2, r2) };
        case "readLintsToolCall":
          return { case: "readLintsToolCall", value: ch(e2.value, t2, r2) };
        case "mcpToolCall":
          return { case: "mcpToolCall", value: dd(e2.value, t2, r2) };
        case "semSearchToolCall":
          return { case: "semSearchToolCall", value: i_(e2.value, t2, r2) };
        case "createPlanToolCall":
          return { case: "createPlanToolCall", value: Cs(e2.value, t2, r2) };
        case "webSearchToolCall":
          return { case: "webSearchToolCall", value: mE(e2.value, t2, r2) };
        case "taskToolCall":
          return { case: "taskToolCall", value: JI(e2.value, t2, r2) };
        case "listMcpResourcesToolCall":
          return { case: "listMcpResourcesToolCall", value: ed(e2.value, t2, r2) };
        case "readMcpResourceToolCall":
          return { case: "readMcpResourceToolCall", value: rd(e2.value, t2, r2) };
        case "applyAgentDiffToolCall":
          return { case: "applyAgentDiffToolCall", value: x(e2.value, t2, r2) };
        case "askQuestionToolCall":
          return { case: "askQuestionToolCall", value: Q(e2.value, t2, r2) };
        case "fetchToolCall":
          return { case: "fetchToolCall", value: _i(e2.value, t2, r2) };
        case "switchModeToolCall":
          return { case: "switchModeToolCall", value: yb(e2.value, t2, r2) };
        case "generateImageToolCall":
          return { case: "generateImageToolCall", value: Ji(e2.value, t2, r2) };
        case "recordScreenToolCall":
          return { case: "recordScreenToolCall", value: Rf(e2.value, t2, r2) };
        case "computerUseToolCall":
          return { case: "computerUseToolCall", value: lr(e2.value, t2, r2) };
        case "writeShellStdinToolCall":
          return { case: "writeShellStdinToolCall", value: zE(e2.value, t2, r2) };
        case "reflectToolCall":
          return { case: "reflectToolCall", value: Qf(e2.value, t2, r2) };
        case "setupVmEnvironmentToolCall":
          return { case: "setupVmEnvironmentToolCall", value: gA(e2.value, t2, r2) };
        case "truncatedToolCall":
          return { case: "truncatedToolCall", value: aC(e2.value, t2, r2) };
        case "startGrindExecutionToolCall":
          return { case: "startGrindExecutionToolCall", value: QS(e2.value, t2, r2) };
        case "startGrindPlanningToolCall":
          return { case: "startGrindPlanningToolCall", value: rb(e2.value, t2, r2) };
        case "webFetchToolCall":
          return { case: "webFetchToolCall", value: $b(e2.value, t2, r2) };
        case "reportBugfixResultsToolCall":
          return { case: "reportBugfixResultsToolCall", value: Jg(e2.value, t2, r2) };
        case "aiAttributionToolCall":
          return { case: "aiAttributionToolCall", value: I(e2.value, t2, r2) };
        case "prManagementToolCall":
          return { case: "prManagementToolCall", value: Nm(e2.value, t2, r2) };
        case "mcpAuthToolCall":
          return { case: "mcpAuthToolCall", value: Cl(e2.value, t2, r2) };
        case "awaitToolCall":
          return { case: "awaitToolCall", value: be(e2.value, t2, r2) };
        case "blameByFilePathToolCall":
          return { case: "blameByFilePathToolCall", value: De(e2.value, t2, r2) };
        case "getMcpToolsToolCall":
          return { case: "getMcpToolsToolCall", value: fa(e2.value, t2, r2) };
        case "reportBugToolCall":
          return { case: "reportBugToolCall", value: wg(e2.value, t2, r2) };
        case "setActiveBranchToolCall":
          return { case: "setActiveBranchToolCall", value: HI(e2.value, t2, r2) };
        case "communicateUpdateToolCall":
          return { case: "communicateUpdateToolCall", value: Et(e2.value, t2, r2) };
        case "sendFinalSummaryToolCall":
          return { case: "sendFinalSummaryToolCall", value: T_(e2.value, t2, r2) };
        case "replaceEnvToolCall":
          return { case: "replaceEnvToolCall", value: sg(e2.value, t2, r2) };
        case "editPrLabelsToolCall":
          return { case: "editPrLabelsToolCall", value: Eo(e2.value, t2, r2) };
        case "recordCiInvestigationFindingsToolCall":
          return { case: "recordCiInvestigationFindingsToolCall", value: pf(e2.value, t2, r2) };
        case "sendMessageToolCall":
          return { case: "sendMessageToolCall", value: z_(e2.value, t2, r2) };
        case "fetchCloudAgentDataToolCall":
          return { case: "fetchCloudAgentDataToolCall", value: ii(e2.value, t2, r2) };
        case "sendToUserToolCall":
          return { case: "sendToUserToolCall", value: oA(e2.value, t2, r2) };
        case "piReadToolCall":
          return { case: "piReadToolCall", value: Pp(e2.value, t2, r2) };
        case "piBashToolCall":
          return { case: "piBashToolCall", value: yd(e2.value, t2, r2) };
        case "piEditToolCall":
          return { case: "piEditToolCall", value: Pd(e2.value, t2, r2) };
        case "piWriteToolCall":
          return { case: "piWriteToolCall", value: Gp(e2.value, t2, r2) };
        case "piGrepToolCall":
          return { case: "piGrepToolCall", value: ip(e2.value, t2, r2) };
        case "piFindToolCall":
          return { case: "piFindToolCall", value: zd(e2.value, t2, r2) };
        case "piLsToolCall":
          return { case: "piLsToolCall", value: vp(e2.value, t2, r2) };
        case "connectScmToolCall":
          return { case: "connectScmToolCall", value: Rr(e2.value, t2, r2) };
        case "searchConversationsToolCall":
          return { case: "searchConversationsToolCall", value: Sw(e2.value, t2, r2) };
        case "createGoalToolCall":
          return { case: "createGoalToolCall", value: Ua(e2.value, t2, r2) };
        case "updateGoalToolCall":
          return { case: "updateGoalToolCall", value: Va(e2.value, t2, r2) };
        case "getAgentStatusToolCall":
          return { case: "getAgentStatusToolCall", value: tn(e2.value, t2, r2) };
        case "sendToAgentToolCall":
          return { case: "sendToAgentToolCall", value: hn(e2.value, t2, r2) };
        case "readAgentTranscriptToolCall":
          return { case: "readAgentTranscriptToolCall", value: Cn(e2.value, t2, r2) };
        case "createAgentToolCall":
          return { case: "createAgentToolCall", value: Nn(e2.value, t2, r2) };
        case "stopAgentToolCall":
          return { case: "stopAgentToolCall", value: Kn(e2.value, t2, r2) };
        case "writeCanvasToolCall":
          return { case: "writeCanvasToolCall", value: Xe(e2.value, t2, r2) };
        case "readCanvasToolCall":
          return { case: "readCanvasToolCall", value: dt(e2.value, t2, r2) };
        case "generateVideoToolCall":
          return { case: "generateVideoToolCall", value: ra(e2.value, t2, r2) };
        case "xSearchToolCall":
          return { case: "xSearchToolCall", value: cI(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function YI(e2, t2) {
      return { hookAdditionalContexts: [], toolCallId: void 0, startedAtMs: void 0, completedAtMs: void 0, tool: { case: void 0, value: void 0 }, ...t2, _privacyMode: e2 };
    }
    function ZI(e2, t2) {
      return { _privacyMode: t2 };
    }
    function XI(e2, t2) {
      return { _privacyMode: t2 };
    }
    function eC(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function tC(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.PyH({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function rC(e2, t2) {
      return { _privacyMode: t2, result: nC(e2.result, t2) };
    }
    function nC(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: XI(e2.value, t2) };
        case "error":
          return { case: "error", value: eC(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function sC(e2, t2, r2) {
      return new lI.EKX({ result: oC(e2.result, t2, r2) });
    }
    function oC(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: (e2.value, new lI.y35({})) };
        case "error":
          return { case: "error", value: tC(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function iC(e2, t2) {
      return { _privacyMode: t2, originalStepBlobId: e2.originalStepBlobId, args: void 0 !== e2.args ? ZI(e2.args, t2) : void 0, result: void 0 !== e2.result ? rC(e2.result, t2) : void 0, originalStepSizeBytes: e2.originalStepSizeBytes, preview: void 0 !== e2.preview ? zI(e2.preview, t2) : void 0 };
    }
    function aC(e2, t2, r2) {
      return new lI.xF4({ originalStepBlobId: e2.originalStepBlobId, args: void 0 !== e2.args ? (e2.args, new lI.aFC({})) : void 0, result: void 0 !== e2.result ? sC(e2.result, t2, r2) : void 0, originalStepSizeBytes: e2.originalStepSizeBytes, preview: void 0 !== e2.preview ? VI(e2.preview, t2, r2) : void 0 });
    }
    function cC(e2, t2) {
      return { _privacyMode: t2, delta: lC(e2.delta, t2) };
    }
    function lC(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "shellToolCallDelta":
          return { case: "shellToolCallDelta", value: kS(e2.value, t2) };
        case "taskToolCallDelta":
          return { case: "taskToolCallDelta", value: MI(e2.value, t2) };
        case "editToolCallDelta":
          return { case: "editToolCallDelta", value: Ho(e2.value, t2) };
        case "replaceEnvToolCallDelta":
          return { case: "replaceEnvToolCallDelta", value: og(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function uC(e2, t2, r2) {
      return new lI.V1v({ delta: dC(e2.delta, t2, r2) });
    }
    function dC(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "shellToolCallDelta":
          return { case: "shellToolCallDelta", value: TS(e2.value, t2, r2) };
        case "taskToolCallDelta":
          return { case: "taskToolCallDelta", value: qI(e2.value, t2, r2) };
        case "editToolCallDelta":
          return { case: "editToolCallDelta", value: zo(e2.value, t2, r2) };
        case "replaceEnvToolCallDelta":
          return { case: "replaceEnvToolCallDelta", value: (n2 = e2.value, new jf.km({ associatedPodKey: n2.associatedPodKey })) };
        default:
          return { case: void 0, value: void 0 };
      }
      var n2;
    }
    function pC(e2, t2) {
      return { _privacyMode: t2, message: mC(e2.message, t2) };
    }
    function mC(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "assistantMessage":
          return { case: "assistantMessage", value: ix(e2.value, t2) };
        case "toolCall":
          return { case: "toolCall", value: zI(e2.value, t2) };
        case "thinkingMessage":
          return { case: "thinkingMessage", value: cx(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function hC(e2, t2, r2) {
      return new lI.kJk({ message: fC(e2.message, t2, r2) });
    }
    function fC(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "assistantMessage":
          return { case: "assistantMessage", value: ax(e2.value, t2, r2) };
        case "toolCall":
          return { case: "toolCall", value: VI(e2.value, t2, r2) };
        case "thinkingMessage":
          return { case: "thinkingMessage", value: lx(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function gC(e2, t2) {
      return { _privacyMode: t2, triggeringAuthId: e2.triggeringAuthId, triggeringUserInfo: void 0 !== e2.triggeringUserInfo ? wC(e2.triggeringUserInfo, t2) : void 0, requestContextParts: void 0 !== e2.requestContextParts ? zy(e2.requestContextParts, t2) : void 0, action: yC(e2.action, t2) };
    }
    function yC(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "userMessageAction":
          return { case: "userMessageAction", value: nk(e2.value, t2) };
        case "resumeAction":
          return { case: "resumeAction", value: Dk(e2.value, t2) };
        case "cancelAction":
          return { case: "cancelAction", value: qk(e2.value, t2) };
        case "summarizeAction":
          return { case: "summarizeAction", value: Nk(e2.value, t2) };
        case "shellCommandAction":
          return { case: "shellCommandAction", value: Fk(e2.value, t2) };
        case "startPlanAction":
          return { case: "startPlanAction", value: Uk(e2.value, t2) };
        case "executePlanAction":
          return { case: "executePlanAction", value: Lk(e2.value, t2) };
        case "asyncAskQuestionCompletionAction":
          return { case: "asyncAskQuestionCompletionAction", value: Ok(e2.value, t2) };
        case "cancelSubagentAction":
          return { case: "cancelSubagentAction", value: EC(e2.value, t2) };
        case "backgroundTaskCompletionAction":
          return { case: "backgroundTaskCompletionAction", value: _C(e2.value, t2) };
        case "backgroundShellAction":
          return { case: "backgroundShellAction", value: IC(e2.value, t2) };
        case "backgroundSubagentAction":
          return { case: "backgroundSubagentAction", value: CC(e2.value, t2) };
        case "subscriptionNotificationAction":
          return { case: "subscriptionNotificationAction", value: ok(e2.value, t2) };
        case "goalContinuationAction":
          return { case: "goalContinuationAction", value: ik(e2.value, t2) };
        case "injectContextAction":
          return { case: "injectContextAction", value: ak(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function wC(e2, t2) {
      return { _privacyMode: t2, authId: e2.authId, userId: e2.userId };
    }
    function vC(e2, t2, r2) {
      return new lI.iHX({ authId: e2.authId, userId: e2.userId });
    }
    function _C(e2, t2) {
      return { _privacyMode: t2, completions: e2.completions.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, taskId: e4.taskId, kind: e4.kind, status: e4.status, title: (0, n.cZ)(e4.title, n.po.CODE, "title", t3), detail: void 0 !== e4.detail ? (0, n.cZ)(e4.detail, n.po.CODE, "detail", t3) : void 0, outputPath: void 0 !== e4.outputPath ? (0, n.cZ)(e4.outputPath, n.po.PATH, "output_path", t3) : void 0, threadId: e4.threadId, reason: e4.reason, subagentId: e4.subagentId, toolCallId: e4.toolCallId, notificationContext: e4.notificationContext, completedAtMs: e4.completedAtMs, recordOnly: e4.recordOnly };
      })(e3, t2)), systemReminder: void 0 !== e2.systemReminder ? (0, n.cZ)(e2.systemReminder, n.po.CODE, "system_reminder", t2) : void 0, requestContext: void 0 !== e2.requestContext ? Gy(e2.requestContext, t2) : void 0 };
    }
    function AC(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.Kwc({ completions: e2.completions.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new lI.KFq({ taskId: e4.taskId, kind: e4.kind, status: e4.status, title: e4.title.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), detail: e4.detail?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), outputPath: e4.outputPath?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), threadId: e4.threadId, reason: e4.reason, subagentId: e4.subagentId, toolCallId: e4.toolCallId, notificationContext: e4.notificationContext, completedAtMs: e4.completedAtMs, recordOnly: e4.recordOnly });
      })(e3, t2, r2)), systemReminder: e2.systemReminder?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), requestContext: void 0 !== e2.requestContext ? Hy(e2.requestContext, t2, r2) : void 0 });
    }
    function SC(e2, t2) {
      return { _privacyMode: t2, parentToolCallId: e2.parentToolCallId, subagentId: e2.subagentId, environment: e2.environment, status: e2.status, title: void 0 !== e2.title ? (0, n.cZ)(e2.title, n.po.CODE, "title", t2) : void 0, detail: void 0 !== e2.detail ? (0, n.cZ)(e2.detail, n.po.CODE, "detail", t2) : void 0, transcriptPath: void 0 !== e2.transcriptPath ? (0, n.cZ)(e2.transcriptPath, n.po.PATH, "transcript_path", t2) : void 0, outputPath: void 0 !== e2.outputPath ? (0, n.cZ)(e2.outputPath, n.po.PATH, "output_path", t2) : void 0, completedTimestampMs: e2.completedTimestampMs, completionReason: e2.completionReason };
    }
    function bC(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.ayE({ parentToolCallId: e2.parentToolCallId, subagentId: e2.subagentId, environment: e2.environment, status: e2.status, title: e2.title?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), detail: e2.detail?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), transcriptPath: e2.transcriptPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), outputPath: e2.outputPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), completedTimestampMs: e2.completedTimestampMs, completionReason: e2.completionReason });
    }
    function EC(e2, t2) {
      return { _privacyMode: t2, subagentId: e2.subagentId };
    }
    function IC(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId };
    }
    function CC(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId };
    }
    function kC(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "shellResult":
          return { case: "shellResult", value: MA(e2.value, t2) };
        case "taskResult":
          return { case: "taskResult", value: xI(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function xC(e2, t2, r2) {
      return new lI.i_E({ toolCallId: e2.toolCallId, resolution: TC(e2.resolution, t2, r2) });
    }
    function TC(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "shellResult":
          return { case: "shellResult", value: DA(e2.value, t2, r2) };
        case "taskResult":
          return { case: "taskResult", value: RI(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function RC(e2, t2) {
      return { _privacyMode: t2, resolutions: e2.resolutions.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, toolCallId: e4.toolCallId, resolution: kC(e4.resolution, t3) };
      })(e3, t2)) };
    }
    function BC(e2, t2) {
      return { _privacyMode: t2, messages: e2.messages.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, message: JC(e4.message, t3) };
      })(e3, t2)), replaceUserInfo: e2.replaceUserInfo };
    }
    function PC(e2, t2, r2) {
      return new lI.iBA({ messages: e2.messages.map((e3) => (function(e4, t3, r3) {
        return new lI.lkY({ message: MC(e4.message, t3, r3) });
      })(e3, t2, r2)), replaceUserInfo: e2.replaceUserInfo });
    }
    function JC(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "user":
          return { case: "user", value: qC(e2.value, t2) };
        case "assistant":
          return { case: "assistant", value: QC(e2.value, t2) };
        case "tool":
          return { case: "tool", value: XC(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function MC(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "user":
          return { case: "user", value: DC(e2.value, t2, r2) };
        case "assistant":
          return { case: "assistant", value: jC(e2.value, t2, r2) };
        case "tool":
          return { case: "tool", value: ek(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function qC(e2, t2) {
      return { _privacyMode: t2, content: e2.content.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, content: OC(e4.content, t3) };
      })(e3, t2)) };
    }
    function DC(e2, t2, r2) {
      return new lI.cX_({ content: e2.content.map((e3) => (function(e4, t3, r3) {
        return new lI.mXO({ content: NC(e4.content, t3, r3) });
      })(e3, t2, r2)) });
    }
    function OC(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "text":
          return { case: "text", value: FC(e2.value, t2) };
        case "image":
          return { case: "image", value: LC(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function NC(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "text":
          return { case: "text", value: UC(e2.value, t2, r2) };
        case "image":
          return { case: "image", value: $C(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function FC(e2, t2) {
      return { _privacyMode: t2, text: (0, n.cZ)(e2.text, n.po.CODE, "text", t2) };
    }
    function UC(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.cIe({ text: e2.text.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function LC(e2, t2) {
      return { _privacyMode: t2, data: (0, n.cZ)(e2.data, n.po.CODE, "data", t2), mimeType: e2.mimeType };
    }
    function $C(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.KKi({ data: e2.data.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), mimeType: e2.mimeType });
    }
    function QC(e2, t2) {
      return { _privacyMode: t2, content: e2.content.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, content: GC(e4.content, t3) };
      })(e3, t2)) };
    }
    function jC(e2, t2, r2) {
      return new lI.Nsi({ content: e2.content.map((e3) => (function(e4, t3, r3) {
        return new lI.B1y({ content: HC(e4.content, t3, r3) });
      })(e3, t2, r2)) });
    }
    function GC(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "text":
          return { case: "text", value: FC(e2.value, t2) };
        case "reasoning":
          return { case: "reasoning", value: zC(e2.value, t2) };
        case "redactedReasoning":
          return { case: "redactedReasoning", value: VC(e2.value, t2) };
        case "toolCall":
          return { case: "toolCall", value: YC(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function HC(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "text":
          return { case: "text", value: UC(e2.value, t2, r2) };
        case "reasoning":
          return { case: "reasoning", value: WC(e2.value, t2, r2) };
        case "redactedReasoning":
          return { case: "redactedReasoning", value: KC(e2.value, t2, r2) };
        case "toolCall":
          return { case: "toolCall", value: ZC(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function zC(e2, t2) {
      return { _privacyMode: t2, text: (0, n.cZ)(e2.text, n.po.CODE, "text", t2), signature: void 0 !== e2.signature ? (0, n.cZ)(e2.signature, n.po.CODE, "signature", t2) : void 0 };
    }
    function WC(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.FPh({ text: e2.text.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), signature: e2.signature?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function VC(e2, t2) {
      return { _privacyMode: t2, data: (0, n.cZ)(e2.data, n.po.CODE, "data", t2) };
    }
    function KC(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.JDM({ data: e2.data.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function YC(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId, toolName: e2.toolName, argsJson: (0, n.cZ)(e2.argsJson, n.po.CODE, "args_json", t2) };
    }
    function ZC(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.czD({ toolCallId: e2.toolCallId, toolName: e2.toolName, argsJson: e2.argsJson.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function XC(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId, toolName: e2.toolName, content: e2.content.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, content: tk(e4.content, t3) };
      })(e3, t2)), isError: e2.isError, hookAdditionalContexts: e2.hookAdditionalContexts.map((e3) => xc(e3, t2)) };
    }
    function ek(e2, t2, r2) {
      return new lI.zg9({ toolCallId: e2.toolCallId, toolName: e2.toolName, content: e2.content.map((e3) => (function(e4, t3, r3) {
        return new lI.iF_({ content: rk(e4.content, t3, r3) });
      })(e3, t2, r2)), isError: e2.isError, hookAdditionalContexts: e2.hookAdditionalContexts.map((e3) => Tc(e3, t2, r2)) });
    }
    function tk(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "text":
          return { case: "text", value: FC(e2.value, t2) };
        case "image":
          return { case: "image", value: LC(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function rk(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "text":
          return { case: "text", value: UC(e2.value, t2, r2) };
        case "image":
          return { case: "image", value: $C(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function nk(e2, t2) {
      return { _privacyMode: t2, userMessage: void 0 !== e2.userMessage ? ex(e2.userMessage, t2) : void 0, requestContext: void 0 !== e2.requestContext ? Gy(e2.requestContext, t2) : void 0, sendToInteractionListener: e2.sendToInteractionListener, prependUserMessages: e2.prependUserMessages.map((e3) => ex(e3, t2)), interruptedPendingToolCallResolutions: void 0 !== e2.interruptedPendingToolCallResolutions ? RC(e2.interruptedPendingToolCallResolutions, t2) : void 0, conversationHistory: void 0 !== e2.conversationHistory ? BC(e2.conversationHistory, t2) : void 0, trailingConversationHistory: void 0 !== e2.trailingConversationHistory ? BC(e2.trailingConversationHistory, t2) : void 0 };
    }
    function sk(e2, t2) {
      return { userMessage: void 0, requestContext: void 0, sendToInteractionListener: void 0, prependUserMessages: [], interruptedPendingToolCallResolutions: void 0, conversationHistory: void 0, trailingConversationHistory: void 0, ...t2, _privacyMode: e2 };
    }
    function ok(e2, t2) {
      return { _privacyMode: t2, notifications: e2.notifications.map((e3) => ex(e3, t2)), requestContext: void 0 !== e2.requestContext ? Gy(e2.requestContext, t2) : void 0, sendToInteractionListener: e2.sendToInteractionListener };
    }
    function ik(e2, t2) {
      return { _privacyMode: t2 };
    }
    function ak(e2, t2) {
      return { _privacyMode: t2, injectionId: e2.injectionId, expectedRunId: e2.expectedRunId, payload: ck(e2.payload, t2) };
    }
    function ck(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "userContext":
          return { case: "userContext", value: lk(e2.value, t2) };
        case "systemContext":
          return { case: "systemContext", value: uk(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function lk(e2, t2) {
      return { _privacyMode: t2, userMessage: void 0 !== e2.userMessage ? ex(e2.userMessage, t2) : void 0, requestContext: void 0 !== e2.requestContext ? Gy(e2.requestContext, t2) : void 0 };
    }
    function uk(e2, t2) {
      return { _privacyMode: t2, producer: e2.producer, content: (0, n.cZ)(e2.content, n.po.CODE, "content", t2) };
    }
    function dk(e2, t2) {
      return { _privacyMode: t2, state: pk(e2.state, t2) };
    }
    function pk(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "queued":
          return { case: "queued", value: fk(e2.value, t2) };
        case "delivered":
          return { case: "delivered", value: yk(e2.value, t2) };
        case "queuedForNextTurn":
          return { case: "queuedForNextTurn", value: vk(e2.value, t2) };
        case "cancelled":
          return { case: "cancelled", value: Ak(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: bk(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function mk(e2, t2, r2) {
      return new lI.O$x({ state: hk(e2.state, t2, r2) });
    }
    function hk(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "queued":
          return { case: "queued", value: gk(e2.value, t2, r2) };
        case "delivered":
          return { case: "delivered", value: wk(e2.value, t2, r2) };
        case "queuedForNextTurn":
          return { case: "queuedForNextTurn", value: _k(e2.value, t2, r2) };
        case "cancelled":
          return { case: "cancelled", value: Sk(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: Ek(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function fk(e2, t2) {
      return { _privacyMode: t2 };
    }
    function gk(e2, t2, r2) {
      return new lI.WAK({});
    }
    function yk(e2, t2) {
      return { _privacyMode: t2, step: e2.step, deliveryBatchId: e2.deliveryBatchId, deliveredAtMs: e2.deliveredAtMs };
    }
    function wk(e2, t2, r2) {
      return new lI.HsH({ step: e2.step, deliveryBatchId: e2.deliveryBatchId, deliveredAtMs: e2.deliveredAtMs });
    }
    function vk(e2, t2) {
      return { _privacyMode: t2 };
    }
    function _k(e2, t2, r2) {
      return new lI.f1A({});
    }
    function Ak(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Sk(e2, t2, r2) {
      return new lI._4P({});
    }
    function bk(e2, t2) {
      return { _privacyMode: t2, reason: e2.reason };
    }
    function Ek(e2, t2, r2) {
      return new lI.ttX({ reason: e2.reason });
    }
    function Ik(e2, t2) {
      return { _privacyMode: t2, id: (0, n.cZ)(e2.id, n.po.PATH, "id", t2), label: e2.label, source: e2.source, sourcePath: void 0 !== e2.sourcePath ? (0, n.cZ)(e2.sourcePath, n.po.PATH, "source_path", t2) : void 0, sourceHash: e2.sourceHash, managedSkillId: e2.managedSkillId, pluginId: e2.pluginId, pluginSnapshotToken: void 0 !== e2.pluginSnapshotToken ? (0, n.cZ)(e2.pluginSnapshotToken, n.po.CREDENTIALS, "plugin_snapshot_token", t2) : void 0 };
    }
    function Ck(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.e9f({ id: e2.id.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), label: e2.label, source: e2.source, sourcePath: e2.sourcePath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), sourceHash: e2.sourceHash, managedSkillId: e2.managedSkillId, pluginId: e2.pluginId, pluginSnapshotToken: e2.pluginSnapshotToken?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function kk(e2, t2) {
      return { _privacyMode: t2, id: (0, n.cZ)(e2.id, n.po.PATH, "id", t2), label: e2.label };
    }
    function xk(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.hNe({ id: e2.id.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), label: e2.label });
    }
    function Tk(e2, t2) {
      return { _privacyMode: t2, nextMode: e2.nextMode, exitedMode: void 0 !== e2.exitedMode ? kk(e2.exitedMode, t2) : void 0 };
    }
    function Rk(e2, t2, r2) {
      return new lI.RP3({ nextMode: e2.nextMode, exitedMode: void 0 !== e2.exitedMode ? xk(e2.exitedMode, t2, r2) : void 0 });
    }
    function Bk(e2, t2) {
      return { _privacyMode: t2, intent: Pk(e2.intent, t2) };
    }
    function Pk(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "enter":
          return { case: "enter", value: Ik(e2.value, t2) };
        case "exit":
          return { case: "exit", value: Tk(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Jk(e2, t2, r2) {
      return new lI.Pmj({ intent: Mk(e2.intent, t2, r2) });
    }
    function Mk(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "enter":
          return { case: "enter", value: Ck(e2.value, t2, r2) };
        case "exit":
          return { case: "exit", value: Rk(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function qk(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2), interruptedPendingToolCallResolutions: void 0 !== e2.interruptedPendingToolCallResolutions ? RC(e2.interruptedPendingToolCallResolutions, t2) : void 0 };
    }
    function Dk(e2, t2) {
      return { _privacyMode: t2, requestContext: void 0 !== e2.requestContext ? Gy(e2.requestContext, t2) : void 0 };
    }
    function Ok(e2, t2) {
      return { _privacyMode: t2, originalToolCallId: e2.originalToolCallId, originalArgs: void 0 !== e2.originalArgs ? G(e2.originalArgs, t2) : void 0, result: void 0 !== e2.result ? V(e2.result, t2) : void 0, requestContext: void 0 !== e2.requestContext ? Gy(e2.requestContext, t2) : void 0 };
    }
    function Nk(e2, t2) {
      return { _privacyMode: t2 };
    }
    function Fk(e2, t2) {
      return { _privacyMode: t2, shellCommand: void 0 !== e2.shellCommand ? ux(e2.shellCommand, t2) : void 0, execId: e2.execId };
    }
    function Uk(e2, t2) {
      return { _privacyMode: t2, userMessage: void 0 !== e2.userMessage ? ex(e2.userMessage, t2) : void 0, requestContext: void 0 !== e2.requestContext ? Gy(e2.requestContext, t2) : void 0, isSpec: e2.isSpec };
    }
    function Lk(e2, t2) {
      return { _privacyMode: t2, requestContext: void 0 !== e2.requestContext ? Gy(e2.requestContext, t2) : void 0, plan: void 0 !== e2.plan ? fx(e2.plan, t2) : void 0, planFileUri: void 0 !== e2.planFileUri ? (0, n.cZ)(e2.planFileUri, n.po.PATH, "plan_file_uri", t2) : void 0, planFileContent: void 0 !== e2.planFileContent ? (0, n.cZ)(e2.planFileContent, n.po.CODE, "plan_file_content", t2) : void 0, executionMode: e2.executionMode, kickoffMessageId: e2.kickoffMessageId, planId: e2.planId, planFilePath: void 0 !== e2.planFilePath ? (0, n.cZ)(e2.planFilePath, n.po.PATH, "plan_file_path", t2) : void 0 };
    }
    function $k(e2, t2) {
      return { _privacyMode: t2, interactionId: e2.interactionId, response: void 0 !== e2.response ? dR(e2.response, t2) : void 0, skippedQuestionIds: e2.skippedQuestionIds };
    }
    function Qk(e2, t2, r2) {
      return new lI.nh0({ interactionId: e2.interactionId, response: void 0 !== e2.response ? mR(e2.response, t2, r2) : void 0, skippedQuestionIds: e2.skippedQuestionIds });
    }
    function jk(e2, t2) {
      return { _privacyMode: t2, displayLabel: void 0 !== e2.displayLabel ? (0, n.cZ)(e2.displayLabel, n.po.CODE, "display_label", t2) : void 0, resourceUrl: void 0 !== e2.resourceUrl ? (0, n.cZ)(e2.resourceUrl, n.po.CODE, "resource_url", t2) : void 0, subscriptionId: e2.subscriptionId };
    }
    function Gk(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.gan({ displayLabel: e2.displayLabel?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), resourceUrl: e2.resourceUrl?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), subscriptionId: e2.subscriptionId });
    }
    function Hk(e2, t2) {
      return { _privacyMode: t2, planId: e2.planId, planTitle: e2.planTitle };
    }
    function zk(e2, t2, r2) {
      return new lI.TGR({ planId: e2.planId, planTitle: e2.planTitle });
    }
    function Wk(e2, t2) {
      return { _privacyMode: t2, name: void 0 !== e2.name ? (0, n.cZ)(e2.name, n.po.CODE, "name", t2) : void 0, subagent: void 0 !== e2.subagent ? Kk(e2.subagent, t2) : void 0, sideChat: void 0 !== e2.sideChat ? Zk(e2.sideChat, t2) : void 0, initDescription: void 0 !== e2.initDescription ? (0, n.cZ)(e2.initDescription, n.po.CODE, "init_description", t2) : void 0 };
    }
    function Vk(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.umU({ name: e2.name?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), subagent: void 0 !== e2.subagent ? Yk(e2.subagent, t2, r2) : void 0, sideChat: void 0 !== e2.sideChat ? Xk(e2.sideChat, t2, r2) : void 0, initDescription: e2.initDescription?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Kk(e2, t2) {
      return { _privacyMode: t2, storeDir: void 0 !== e2.storeDir ? (0, n.cZ)(e2.storeDir, n.po.CODE, "store_dir", t2) : void 0 };
    }
    function Yk(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.H1o({ storeDir: e2.storeDir?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Zk(e2, t2) {
      return { _privacyMode: t2, storeDir: (0, n.cZ)(e2.storeDir, n.po.CODE, "store_dir", t2) };
    }
    function Xk(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.Dk0({ storeDir: e2.storeDir.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function ex(e2, t2) {
      return { _privacyMode: t2, text: (0, n.cZ)(e2.text, n.po.CODE, "text", t2), messageId: e2.messageId, selectedContext: void 0 !== e2.selectedContext ? _v(e2.selectedContext, t2) : void 0, mode: e2.mode, isSimulatedMsg: e2.isSimulatedMsg, bestOfNGroupId: e2.bestOfNGroupId, tryUseBestOfNPromotion: e2.tryUseBestOfNPromotion, richText: void 0 !== e2.richText ? (0, n.cZ)(e2.richText, n.po.CODE, "rich_text", t2) : void 0, simulatedMsgReason: e2.simulatedMsgReason, conversationStateBlobId: e2.conversationStateBlobId, subagentSystemReminder: void 0 !== e2.subagentSystemReminder ? (0, n.cZ)(e2.subagentSystemReminder, n.po.CODE, "subagent_system_reminder", t2) : void 0, triggeringUserInfo: void 0 !== e2.triggeringUserInfo ? wC(e2.triggeringUserInfo, t2) : void 0, executePlanInfo: void 0 !== e2.executePlanInfo ? Hk(e2.executePlanInfo, t2) : void 0, simulatedMessageMetadata: void 0 !== e2.simulatedMessageMetadata ? rx(e2.simulatedMessageMetadata, t2) : void 0, promptReferenceId: e2.promptReferenceId, threadId: e2.threadId, textBlobId: e2.textBlobId, richTextBlobId: e2.richTextBlobId, hookAdditionalContexts: e2.hookAdditionalContexts.map((e3) => xc(e3, t2)), customModeIntent: void 0 !== e2.customModeIntent ? Bk(e2.customModeIntent, t2) : void 0, projectDetails: void 0 !== e2.projectDetails ? Wk(e2.projectDetails, t2) : void 0, turnSteer: e2.turnSteer, startedAtMs: e2.startedAtMs, completedAtMs: e2.completedAtMs, sentByAgentId: e2.sentByAgentId, sentByVoiceCall: e2.sentByVoiceCall, sender: void 0 !== e2.sender ? sx(e2.sender, t2) : void 0, forkedContext: void 0 !== e2.forkedContext ? (0, n.cZ)(e2.forkedContext, n.po.CODE, "forked_context", t2) : void 0 };
    }
    function tx(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.RGk({ text: e2.text.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), messageId: e2.messageId, selectedContext: void 0 !== e2.selectedContext ? Av(e2.selectedContext, t2, r2) : void 0, mode: e2.mode, isSimulatedMsg: e2.isSimulatedMsg, bestOfNGroupId: e2.bestOfNGroupId, tryUseBestOfNPromotion: e2.tryUseBestOfNPromotion, richText: e2.richText?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), simulatedMsgReason: e2.simulatedMsgReason, conversationStateBlobId: e2.conversationStateBlobId, subagentSystemReminder: e2.subagentSystemReminder?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), triggeringUserInfo: void 0 !== e2.triggeringUserInfo ? vC(e2.triggeringUserInfo) : void 0, executePlanInfo: void 0 !== e2.executePlanInfo ? zk(e2.executePlanInfo) : void 0, simulatedMessageMetadata: void 0 !== e2.simulatedMessageMetadata ? nx(e2.simulatedMessageMetadata, t2, r2) : void 0, promptReferenceId: e2.promptReferenceId, threadId: e2.threadId, textBlobId: void 0 !== e2.textBlobId ? e2.textBlobId : void 0, richTextBlobId: void 0 !== e2.richTextBlobId ? e2.richTextBlobId : void 0, hookAdditionalContexts: e2.hookAdditionalContexts.map((e3) => Tc(e3, t2, r2)), customModeIntent: void 0 !== e2.customModeIntent ? Jk(e2.customModeIntent, t2, r2) : void 0, projectDetails: void 0 !== e2.projectDetails ? Vk(e2.projectDetails, t2, r2) : void 0, turnSteer: e2.turnSteer, startedAtMs: e2.startedAtMs, completedAtMs: e2.completedAtMs, sentByAgentId: e2.sentByAgentId, sentByVoiceCall: e2.sentByVoiceCall, sender: void 0 !== e2.sender ? ox(e2.sender, t2, r2) : void 0, forkedContext: e2.forkedContext?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function rx(e2, t2) {
      return { _privacyMode: t2, title: void 0 !== e2.title ? (0, n.cZ)(e2.title, n.po.CODE, "title", t2) : void 0, taskId: e2.taskId, fsdFindingAction: e2.fsdFindingAction, url: void 0 !== e2.url ? (0, n.cZ)(e2.url, n.po.CODE, "url", t2) : void 0, subscriptionSource: e2.subscriptionSource, subscriptionEventDisplay: void 0 !== e2.subscriptionEventDisplay ? jk(e2.subscriptionEventDisplay, t2) : void 0, interactionResponse: void 0 !== e2.interactionResponse ? $k(e2.interactionResponse, t2) : void 0 };
    }
    function nx(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.Aiv({ title: e2.title?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), taskId: e2.taskId, fsdFindingAction: e2.fsdFindingAction, url: e2.url?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), subscriptionSource: e2.subscriptionSource, subscriptionEventDisplay: void 0 !== e2.subscriptionEventDisplay ? Gk(e2.subscriptionEventDisplay, t2, r2) : void 0, interactionResponse: void 0 !== e2.interactionResponse ? Qk(e2.interactionResponse, t2, r2) : void 0 });
    }
    function sx(e2, t2) {
      return { _privacyMode: t2, kind: e2.kind, id: e2.id, displayName: (0, n.cZ)(e2.displayName, n.po.CODE, "display_name", t2) };
    }
    function ox(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.D$r({ kind: e2.kind, id: e2.id, displayName: e2.displayName.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function ix(e2, t2) {
      return { _privacyMode: t2, text: (0, n.cZ)(e2.text, n.po.CODE, "text", t2), startedAtMs: e2.startedAtMs, completedAtMs: e2.completedAtMs };
    }
    function ax(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.Gd6({ text: e2.text.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), startedAtMs: e2.startedAtMs, completedAtMs: e2.completedAtMs });
    }
    function cx(e2, t2) {
      return { _privacyMode: t2, text: (0, n.cZ)(e2.text, n.po.CODE, "text", t2), durationMs: e2.durationMs, startedAtMs: e2.startedAtMs, completedAtMs: e2.completedAtMs };
    }
    function lx(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.qon({ text: e2.text.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), durationMs: e2.durationMs, startedAtMs: e2.startedAtMs, completedAtMs: e2.completedAtMs });
    }
    function ux(e2, t2) {
      return { _privacyMode: t2, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2) };
    }
    function dx(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.oIR({ command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function px(e2, t2) {
      return { _privacyMode: t2, stdout: (0, n.cZ)(e2.stdout, n.po.CODE, "stdout", t2), stderr: (0, n.cZ)(e2.stderr, n.po.CODE, "stderr", t2), exitCode: e2.exitCode };
    }
    function mx(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.qKL({ stdout: e2.stdout.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), stderr: e2.stderr.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), exitCode: e2.exitCode });
    }
    function hx(e2, t2) {
      return { stdout: (0, n.cZ)("", n.po.CODE, "stdout", e2), stderr: (0, n.cZ)("", n.po.CODE, "stderr", e2), exitCode: 0, ...t2, _privacyMode: e2 };
    }
    function fx(e2, t2) {
      return { _privacyMode: t2, plan: (0, n.cZ)(e2.plan, n.po.CODE, "plan", t2) };
    }
    function gx(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.ThX({ plan: e2.plan.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function yx(e2, t2) {
      return { _privacyMode: t2, id: e2.id, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2) };
    }
    function wx(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.Tm3({ id: e2.id, path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function vx(e2, t2) {
      return { _privacyMode: t2, conversationId: e2.conversationId, goalId: e2.goalId, objective: (0, n.cZ)(e2.objective, n.po.CODE, "objective", t2), status: e2.status, idleContinuationsWithoutToolCalls: e2.idleContinuationsWithoutToolCalls, activeDurationMs: e2.activeDurationMs, lastAccruedAtMs: e2.lastAccruedAtMs, continuationCount: e2.continuationCount, agentSessionId: e2.agentSessionId };
    }
    function _x(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.dDN({ conversationId: e2.conversationId, goalId: e2.goalId, objective: e2.objective.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), status: e2.status, idleContinuationsWithoutToolCalls: e2.idleContinuationsWithoutToolCalls, activeDurationMs: e2.activeDurationMs, lastAccruedAtMs: e2.lastAccruedAtMs, continuationCount: e2.continuationCount, agentSessionId: e2.agentSessionId });
    }
    function Ax(e2, t2) {
      return { _privacyMode: t2, summary: (0, n.cZ)(e2.summary, n.po.CODE, "summary", t2) };
    }
    function Sx(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.KRq({ summary: e2.summary.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function bx(e2, t2) {
      return { summary: (0, n.cZ)("", n.po.CODE, "summary", e2), ...t2, _privacyMode: e2 };
    }
    function Ex(e2, t2) {
      return { _privacyMode: t2, summarizedMessages: e2.summarizedMessages, summary: (0, n.cZ)(e2.summary, n.po.CODE, "summary", t2), windowTail: e2.windowTail, summaryMessage: e2.summaryMessage };
    }
    function Ix(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.Anz({ summarizedMessages: e2.summarizedMessages.map((e3) => e3), summary: e2.summary.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), windowTail: e2.windowTail, summaryMessage: e2.summaryMessage });
    }
    function Cx(e2, t2) {
      return { summarizedMessages: [], summary: (0, n.cZ)("", n.po.CODE, "summary", e2), windowTail: 0, summaryMessage: new Uint8Array(), ...t2, _privacyMode: e2 };
    }
    function kx(e2, t2) {
      return { _privacyMode: t2, totalUsedTokens: e2.totalUsedTokens, maxTokens: e2.maxTokens, categories: e2.categories.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, id: e4.id, label: e4.label, estimatedTokens: e4.estimatedTokens, characterCount: e4.characterCount };
      })(e3, t2)) };
    }
    function xx(e2, t2, r2) {
      return new lI.Dsb({ totalUsedTokens: e2.totalUsedTokens, maxTokens: e2.maxTokens, categories: e2.categories.map((e3) => (function(e4) {
        return new lI.FrG({ id: e4.id, label: e4.label, estimatedTokens: e4.estimatedTokens, characterCount: e4.characterCount });
      })(e3)) });
    }
    function Tx(e2, t2) {
      return { _privacyMode: t2, sourceType: e2.sourceType, messageIndex: e2.messageIndex, contentPath: e2.contentPath, startOffset: e2.startOffset, endOffset: e2.endOffset };
    }
    function Rx(e2, t2, r2) {
      return new lI.Ulp({ sourceType: e2.sourceType, messageIndex: e2.messageIndex, contentPath: e2.contentPath, startOffset: e2.startOffset, endOffset: e2.endOffset });
    }
    function Bx(e2, t2) {
      return { _privacyMode: t2, schemaVersion: e2.schemaVersion, nodes: e2.nodes.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, id: e4.id, parentId: e4.parentId, kind: e4.kind, label: (0, n.cZ)(e4.label, n.po.CODE, "label", t3), categoryId: e4.categoryId, estimatedTokens: e4.estimatedTokens, characterCount: e4.characterCount, contentAvailable: e4.contentAvailable, source: void 0 !== e4.source ? Tx(e4.source, t3) : void 0, inlineContent: void 0 !== e4.inlineContent ? (0, n.cZ)(e4.inlineContent, n.po.CODE, "inline_content", t3) : void 0 };
      })(e3, t2)) };
    }
    function Px(e2, t2, r2) {
      return new lI.d2k({ schemaVersion: e2.schemaVersion, nodes: e2.nodes.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new lI.mDu({ id: e4.id, parentId: e4.parentId, kind: e4.kind, label: e4.label.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), categoryId: e4.categoryId, estimatedTokens: e4.estimatedTokens, characterCount: e4.characterCount, contentAvailable: e4.contentAvailable, source: void 0 !== e4.source ? Rx(e4.source) : void 0, inlineContent: e4.inlineContent?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
      })(e3, t2, r2)) });
    }
    function Jx(e2, t2) {
      return { _privacyMode: t2, usedTokens: e2.usedTokens, maxTokens: e2.maxTokens, breakdown: void 0 !== e2.breakdown ? kx(e2.breakdown, t2) : void 0, promptContextUsageTree: void 0 !== e2.promptContextUsageTree ? Bx(e2.promptContextUsageTree, t2) : void 0 };
    }
    function Mx(e2, t2, r2) {
      return new lI.VNy({ usedTokens: e2.usedTokens, maxTokens: e2.maxTokens, breakdown: void 0 !== e2.breakdown ? xx(e2.breakdown) : void 0, promptContextUsageTree: void 0 !== e2.promptContextUsageTree ? Px(e2.promptContextUsageTree, t2, r2) : void 0 });
    }
    function qx(e2, t2) {
      return { usedTokens: 0, maxTokens: 0, breakdown: void 0, promptContextUsageTree: void 0, ...t2, _privacyMode: e2 };
    }
    function Dx(e2, t2) {
      return { _privacyMode: t2, content: void 0 !== e2.content ? (0, n.Yz)(e2.content, n.po.CODE, "content", t2) : void 0, initialContent: void 0 !== e2.initialContent ? (0, n.Yz)(e2.initialContent, n.po.CODE, "initial_content", t2) : void 0 };
    }
    function Ox(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.rhc({ content: e2.content?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), initialContent: e2.initialContent?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Nx(e2, t2) {
      return { _privacyMode: t2, completedTurnCountCapped: e2.completedTurnCountCapped, lastCompletedTurnTimestampMs: e2.lastCompletedTurnTimestampMs };
    }
    function Fx(e2, t2, r2) {
      return new lI.iDt({ completedTurnCountCapped: e2.completedTurnCountCapped, lastCompletedTurnTimestampMs: e2.lastCompletedTurnTimestampMs });
    }
    function Ux(e2, t2) {
      return { _privacyMode: t2, step: (0, n.cZ)(e2.step, n.po.CODE, "step", t2), messageIndex: e2.messageIndex };
    }
    function Lx(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.NH9({ step: e2.step.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), messageIndex: e2.messageIndex });
    }
    function $x(e2, t2) {
      return { _privacyMode: t2, history: e2.history.map((e3) => Ux(e3, t2)), finalSummary: void 0 !== e2.finalSummary ? (0, n.cZ)(e2.finalSummary, n.po.CODE, "final_summary", t2) : void 0, completedSubtitle: void 0 !== e2.completedSubtitle ? (0, n.cZ)(e2.completedSubtitle, n.po.CODE, "completed_subtitle", t2) : void 0 };
    }
    function Qx(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.RCW({ history: e2.history.map((e3) => Lx(e3, t2, r2)), finalSummary: e2.finalSummary?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), completedSubtitle: e2.completedSubtitle?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function jx(e2, t2) {
      return { _privacyMode: t2, conversationState: void 0 !== e2.conversationState ? Wx(e2.conversationState, t2) : void 0, createdTimestampMs: e2.createdTimestampMs, lastUsedTimestampMs: e2.lastUsedTimestampMs, subagentType: void 0 !== e2.subagentType ? Fg(e2.subagentType, t2) : void 0, modelId: e2.modelId, environment: e2.environment, cloudSubagent: void 0 !== e2.cloudSubagent ? Hx(e2.cloudSubagent, t2) : void 0, firstClassBcId: e2.firstClassBcId, cloudRequestedEnvironmentBuildId: e2.cloudRequestedEnvironmentBuildId, machine: void 0 !== e2.machine ? pI(e2.machine, t2) : void 0 };
    }
    function Gx(e2, t2, r2) {
      return new lI.aK_({ conversationState: void 0 !== e2.conversationState ? Vx(e2.conversationState, t2, r2) : void 0, createdTimestampMs: e2.createdTimestampMs, lastUsedTimestampMs: e2.lastUsedTimestampMs, subagentType: void 0 !== e2.subagentType ? Lg(e2.subagentType, t2, r2) : void 0, modelId: e2.modelId, environment: e2.environment, cloudSubagent: void 0 !== e2.cloudSubagent ? zx(e2.cloudSubagent, t2, r2) : void 0, firstClassBcId: e2.firstClassBcId, cloudRequestedEnvironmentBuildId: e2.cloudRequestedEnvironmentBuildId, machine: void 0 !== e2.machine ? hI(e2.machine, t2, r2) : void 0 });
    }
    function Hx(e2, t2) {
      return { _privacyMode: t2, bcId: e2.bcId, transcriptPath: void 0 !== e2.transcriptPath ? (0, n.cZ)(e2.transcriptPath, n.po.PATH, "transcript_path", t2) : void 0 };
    }
    function zx(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.AMN({ bcId: e2.bcId, transcriptPath: e2.transcriptPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Wx(e2, t2) {
      return { _privacyMode: t2, rootPromptMessagesJson: e2.rootPromptMessagesJson, turns: e2.turns, todos: e2.todos, pendingToolCalls: e2.pendingToolCalls.map((e3) => (0, n.cZ)(e3, n.po.CODE, "pending_tool_calls", t2)), tokenDetails: void 0 !== e2.tokenDetails ? Jx(e2.tokenDetails, t2) : void 0, summary: e2.summary, plan: e2.plan, previousWorkspaceUris: e2.previousWorkspaceUris.map((e3) => (0, n.cZ)(e3, n.po.PATH, "previous_workspace_uris", t2)), mode: e2.mode, summaryArchive: e2.summaryArchive, fileStates: new Map(Object.entries(e2.fileStates).map(([e3, r2]) => [(0, n.cZ)(e3, n.po.PATH, "file_states", t2), r2])), fileStatesV2: new Map(Object.entries(e2.fileStatesV2).map(([e3, r2]) => [(0, n.cZ)(e3, n.po.PATH, "file_states_v2", t2), Dx(r2, t2)])), summaryArchives: e2.summaryArchives, turnTimings: e2.turnTimings.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, durationMs: e4.durationMs, timestampMs: e4.timestampMs };
      })(e3, t2)), subagentStates: new Map(Object.entries(e2.subagentStates).map(([e3, r2]) => [e3, jx(r2, t2)])), selfSummaryCount: e2.selfSummaryCount, readPaths: e2.readPaths.map((e3) => (0, n.cZ)(e3, n.po.PATH, "read_paths", t2)), activeBranchName: e2.activeBranchName, plans: new Map(Object.entries(e2.plans).map(([e3, r2]) => [e3, yx(r2, t2)])), trackedGitRepoBranches: e2.trackedGitRepoBranches.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, repoPath: (0, n.cZ)(e4.repoPath, n.po.PATH, "repo_path", t3), branchName: e4.branchName };
      })(e3, t2)), agentType: e2.agentType, communicateUpdateHistory: e2.communicateUpdateHistory.map((e3) => Ux(e3, t2)), subagentThreads: new Map(Object.entries(e2.subagentThreads)), communicateUpdateFinalSummary: void 0 !== e2.communicateUpdateFinalSummary ? (0, n.cZ)(e2.communicateUpdateFinalSummary, n.po.CODE, "communicate_update_final_summary", t2) : void 0, communicateUpdateCompletedSubtitle: void 0 !== e2.communicateUpdateCompletedSubtitle ? (0, n.cZ)(e2.communicateUpdateCompletedSubtitle, n.po.CODE, "communicate_update_completed_subtitle", t2) : void 0, communicateUpdateStatesByParentToolCallId: new Map(Object.entries(e2.communicateUpdateStatesByParentToolCallId).map(([e3, r2]) => [e3, $x(r2, t2)])), subagentRunsByParentToolCallId: new Map(Object.entries(e2.subagentRunsByParentToolCallId).map(([e3, r2]) => [e3, SC(r2, t2)])), conversationStartedTimestampMs: e2.conversationStartedTimestampMs, conversationStartedTimeZone: e2.conversationStartedTimeZone, subagentStateRefs: new Map(Object.entries(e2.subagentStateRefs)), goalState: void 0 !== e2.goalState ? vx(e2.goalState, t2) : void 0, isRootProjectConversation: e2.isRootProjectConversation, completedAskQuestionToolCallIds: e2.completedAskQuestionToolCallIds, durableSkillBlocks: e2.durableSkillBlocks.map((e3) => (0, n.cZ)(e3, n.po.CODE, "durable_skill_blocks", t2)), durableCustomModeId: void 0 !== e2.durableCustomModeId ? (0, n.cZ)(e2.durableCustomModeId, n.po.PATH, "durable_custom_mode_id", t2) : void 0, messageCountAtLastCompaction: e2.messageCountAtLastCompaction, recentUserMessageIds: e2.recentUserMessageIds, recentUserMessageIdsOlderTurnCount: e2.recentUserMessageIdsOlderTurnCount, turnTelemetry: void 0 !== e2.turnTelemetry ? Nx(e2.turnTelemetry, t2) : void 0, mentionedAgentIds: e2.mentionedAgentIds };
    }
    function Vx(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.Y9z({ rootPromptMessagesJson: e2.rootPromptMessagesJson.map((e3) => e3), turns: e2.turns.map((e3) => e3), todos: e2.todos.map((e3) => e3), pendingToolCalls: e2.pendingToolCalls.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), tokenDetails: void 0 !== e2.tokenDetails ? Mx(e2.tokenDetails, t2, r2) : void 0, summary: void 0 !== e2.summary ? e2.summary : void 0, plan: void 0 !== e2.plan ? e2.plan : void 0, previousWorkspaceUris: e2.previousWorkspaceUris.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), mode: e2.mode, summaryArchive: void 0 !== e2.summaryArchive ? e2.summaryArchive : void 0, fileStates: Object.fromEntries(Array.from(e2.fileStates.entries()).map(([e3, r3]) => [e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), r3])), fileStatesV2: Object.fromEntries(Array.from(e2.fileStatesV2.entries()).map(([e3, o2]) => [e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), Ox(o2, t2, r2)])), summaryArchives: e2.summaryArchives.map((e3) => e3), turnTimings: e2.turnTimings.map((e3) => (function(e4) {
        return new lI.H3V({ durationMs: e4.durationMs, timestampMs: e4.timestampMs });
      })(e3)), subagentStates: Object.fromEntries(Array.from(e2.subagentStates.entries()).map(([e3, n3]) => [e3, Gx(n3, t2, r2)])), selfSummaryCount: e2.selfSummaryCount, readPaths: e2.readPaths.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), activeBranchName: e2.activeBranchName, plans: Object.fromEntries(Array.from(e2.plans.entries()).map(([e3, n3]) => [e3, wx(n3, t2, r2)])), trackedGitRepoBranches: e2.trackedGitRepoBranches.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new lI.FRJ({ repoPath: e4.repoPath.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), branchName: e4.branchName });
      })(e3, t2, r2)), agentType: e2.agentType, communicateUpdateHistory: e2.communicateUpdateHistory.map((e3) => Lx(e3, t2, r2)), subagentThreads: Object.fromEntries(e2.subagentThreads.entries()), communicateUpdateFinalSummary: e2.communicateUpdateFinalSummary?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), communicateUpdateCompletedSubtitle: e2.communicateUpdateCompletedSubtitle?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), communicateUpdateStatesByParentToolCallId: Object.fromEntries(Array.from(e2.communicateUpdateStatesByParentToolCallId.entries()).map(([e3, n3]) => [e3, Qx(n3, t2, r2)])), subagentRunsByParentToolCallId: Object.fromEntries(Array.from(e2.subagentRunsByParentToolCallId.entries()).map(([e3, n3]) => [e3, bC(n3, t2, r2)])), conversationStartedTimestampMs: e2.conversationStartedTimestampMs, conversationStartedTimeZone: e2.conversationStartedTimeZone, subagentStateRefs: Object.fromEntries(Array.from(e2.subagentStateRefs.entries()).map(([e3, t3]) => [e3, t3])), goalState: void 0 !== e2.goalState ? _x(e2.goalState, t2, r2) : void 0, isRootProjectConversation: e2.isRootProjectConversation, completedAskQuestionToolCallIds: e2.completedAskQuestionToolCallIds, durableSkillBlocks: e2.durableSkillBlocks.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), durableCustomModeId: e2.durableCustomModeId?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), messageCountAtLastCompaction: e2.messageCountAtLastCompaction, recentUserMessageIds: e2.recentUserMessageIds, recentUserMessageIdsOlderTurnCount: e2.recentUserMessageIdsOlderTurnCount, turnTelemetry: void 0 !== e2.turnTelemetry ? Fx(e2.turnTelemetry) : void 0, mentionedAgentIds: e2.mentionedAgentIds });
    }
    function Kx(e2, t2) {
      return { _privacyMode: t2, text: (0, n.cZ)(e2.text, n.po.CODE, "text", t2), isServerNotice: e2.isServerNotice };
    }
    function Yx(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.PtE({ text: e2.text.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), isServerNotice: e2.isServerNotice });
    }
    function Zx(e2, t2) {
      return { _privacyMode: t2, displayName: e2.displayName };
    }
    function Xx(e2, t2, r2) {
      return new lI.IQS({ displayName: e2.displayName });
    }
    function eT(e2, t2) {
      return { _privacyMode: t2, callId: e2.callId, toolCall: void 0 !== e2.toolCall ? zI(e2.toolCall, t2) : void 0, modelCallId: e2.modelCallId };
    }
    function tT(e2, t2, r2) {
      return new lI.xuG({ callId: e2.callId, toolCall: void 0 !== e2.toolCall ? VI(e2.toolCall, t2, r2) : void 0, modelCallId: e2.modelCallId });
    }
    function rT(e2, t2) {
      return { _privacyMode: t2, callId: e2.callId, toolCall: void 0 !== e2.toolCall ? zI(e2.toolCall, t2) : void 0, modelCallId: e2.modelCallId };
    }
    function nT(e2, t2, r2) {
      return new lI.LLS({ callId: e2.callId, toolCall: void 0 !== e2.toolCall ? VI(e2.toolCall, t2, r2) : void 0, modelCallId: e2.modelCallId });
    }
    function sT(e2, t2) {
      return { _privacyMode: t2, callId: e2.callId, toolCallDelta: void 0 !== e2.toolCallDelta ? cC(e2.toolCallDelta, t2) : void 0, modelCallId: e2.modelCallId };
    }
    function oT(e2, t2, r2) {
      return new lI.I0n({ callId: e2.callId, toolCallDelta: void 0 !== e2.toolCallDelta ? uC(e2.toolCallDelta, t2, r2) : void 0, modelCallId: e2.modelCallId });
    }
    function iT(e2, t2) {
      return { _privacyMode: t2, callId: e2.callId, toolCall: void 0 !== e2.toolCall ? zI(e2.toolCall, t2) : void 0, argsTextDelta: (0, n.cZ)(e2.argsTextDelta, n.po.CODE, "args_text_delta", t2), modelCallId: e2.modelCallId };
    }
    function aT(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.fxF({ callId: e2.callId, toolCall: void 0 !== e2.toolCall ? VI(e2.toolCall, t2, r2) : void 0, argsTextDelta: e2.argsTextDelta.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), modelCallId: e2.modelCallId });
    }
    function cT(e2, t2) {
      return { _privacyMode: t2, text: (0, n.cZ)(e2.text, n.po.CODE, "text", t2), thinkingStyle: e2.thinkingStyle };
    }
    function lT(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.cHB({ text: e2.text.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), thinkingStyle: e2.thinkingStyle });
    }
    function uT(e2, t2) {
      return { _privacyMode: t2, thinkingDurationMs: e2.thinkingDurationMs };
    }
    function dT(e2, t2) {
      return { _privacyMode: t2, tokens: e2.tokens };
    }
    function pT(e2, t2, r2) {
      return new lI.Fyz({ tokens: e2.tokens });
    }
    function mT(e2, t2) {
      return { _privacyMode: t2, summary: (0, n.cZ)(e2.summary, n.po.CODE, "summary", t2) };
    }
    function hT(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.ECk({ summary: e2.summary.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function fT(e2, t2) {
      return { _privacyMode: t2 };
    }
    function gT(e2, t2) {
      return { _privacyMode: t2 };
    }
    function yT(e2, t2) {
      return { _privacyMode: t2, hookMessage: void 0 !== e2.hookMessage ? (0, n.cZ)(e2.hookMessage, n.po.CODE, "hook_message", t2) : void 0, failed: e2.failed };
    }
    function wT(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.ZM9({ hookMessage: e2.hookMessage?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), failed: e2.failed });
    }
    function vT(e2, t2) {
      return { _privacyMode: t2, event: _T(e2.event, t2) };
    }
    function _T(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "stdout":
          return { case: "stdout", value: UA(e2.value, t2) };
        case "stderr":
          return { case: "stderr", value: QA(e2.value, t2) };
        case "exit":
          return { case: "exit", value: HA(e2.value, t2) };
        case "start":
          return { case: "start", value: VA(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function AT(e2, t2, r2) {
      return new lI.Nn_({ event: ST(e2.event, t2, r2) });
    }
    function ST(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "stdout":
          return { case: "stdout", value: LA(e2.value, t2, r2) };
        case "stderr":
          return { case: "stderr", value: jA(e2.value, t2, r2) };
        case "exit":
          return { case: "exit", value: zA(e2.value, t2, r2) };
        case "start":
          return { case: "start", value: KA(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function bT(e2, t2) {
      return { _privacyMode: t2, inputTokens: e2.inputTokens, outputTokens: e2.outputTokens, cacheReadTokens: e2.cacheReadTokens, cacheWriteTokens: e2.cacheWriteTokens, reasoningTokens: e2.reasoningTokens, endedAtMs: e2.endedAtMs };
    }
    function ET(e2, t2, r2) {
      return new lI.lJj({ inputTokens: e2.inputTokens, outputTokens: e2.outputTokens, cacheReadTokens: e2.cacheReadTokens, cacheWriteTokens: e2.cacheWriteTokens, reasoningTokens: e2.reasoningTokens, endedAtMs: e2.endedAtMs });
    }
    function IT(e2, t2) {
      return { _privacyMode: t2, userMessage: void 0 !== e2.userMessage ? ex(e2.userMessage, t2) : void 0 };
    }
    function CT(e2, t2, r2) {
      return new lI.v$T({ userMessage: void 0 !== e2.userMessage ? tx(e2.userMessage, t2, r2) : void 0 });
    }
    function kT(e2, t2) {
      return { _privacyMode: t2, stepId: e2.stepId };
    }
    function xT(e2, t2, r2) {
      return new lI.dwJ({ stepId: e2.stepId });
    }
    function TT(e2, t2) {
      return { _privacyMode: t2, callCount: e2.callCount };
    }
    function RT(e2, t2, r2) {
      return new lI.BU$({ callCount: e2.callCount });
    }
    function BT(e2, t2) {
      return { _privacyMode: t2, stepId: e2.stepId, stepDurationMs: e2.stepDurationMs };
    }
    function PT(e2, t2, r2) {
      return new lI.Lrv({ stepId: e2.stepId, stepDurationMs: e2.stepDurationMs });
    }
    function JT(e2, t2) {
      return { _privacyMode: t2, suggestion: (0, n.cZ)(e2.suggestion, n.po.CODE, "suggestion", t2) };
    }
    function MT(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.yfd({ suggestion: e2.suggestion.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function qT(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), branchName: e2.branchName };
    }
    function DT(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.PSN({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), branchName: e2.branchName });
    }
    function OT(e2, t2) {
      return { _privacyMode: t2, id: e2.id, label: e2.label };
    }
    function NT(e2, t2, r2) {
      return new lI.xBB({ id: e2.id, label: e2.label });
    }
    function FT(e2, t2) {
      return { _privacyMode: t2, requestId: e2.requestId, canonicalModelName: e2.canonicalModelName, categories: e2.categories.map((e3) => OT(e3, t2)), categoryGroups: e2.categoryGroups.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, id: e4.id, prompt: e4.prompt, categories: e4.categories.map((e5) => OT(e5, t3)) };
      })(e3, t2)), showFormImmediately: e2.showFormImmediately, title: e2.title, negativeTitle: e2.negativeTitle, commentPlaceholder: e2.commentPlaceholder };
    }
    function UT(e2, t2, r2) {
      return new lI.apn({ requestId: e2.requestId, canonicalModelName: e2.canonicalModelName, categories: e2.categories.map((e3) => NT(e3)), categoryGroups: e2.categoryGroups.map((e3) => (function(e4) {
        return new lI.upy({ id: e4.id, prompt: e4.prompt, categories: e4.categories.map((e5) => NT(e5)) });
      })(e3)), showFormImmediately: e2.showFormImmediately, title: e2.title, negativeTitle: e2.negativeTitle, commentPlaceholder: e2.commentPlaceholder });
    }
    function LT(e2, t2) {
      return { _privacyMode: t2, displayOrder: e2.displayOrder, parentInvocationId: e2.parentInvocationId, alternateInvocationId: e2.alternateInvocationId, parentResponse: (0, n.cZ)(e2.parentResponse, n.po.CODE, "parent_response", t2), comparisonConfigId: e2.comparisonConfigId, alternateModelId: e2.alternateModelId };
    }
    function $T(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.mue({ displayOrder: e2.displayOrder, parentInvocationId: e2.parentInvocationId, alternateInvocationId: e2.alternateInvocationId, parentResponse: e2.parentResponse.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), comparisonConfigId: e2.comparisonConfigId, alternateModelId: e2.alternateModelId });
    }
    function QT(e2, t2) {
      return { _privacyMode: t2, text: (0, n.cZ)(e2.text, n.po.CODE, "text", t2) };
    }
    function jT(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lI.c0E({ text: e2.text.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function GT(e2, t2) {
      return { _privacyMode: t2 };
    }
    function HT(e2, t2) {
      return { _privacyMode: t2, reason: e2.reason };
    }
    function zT(e2, t2) {
      return { _privacyMode: t2, comparisonId: e2.comparisonId, event: WT(e2.event, t2) };
    }
    function WT(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "started":
          return { case: "started", value: LT(e2.value, t2) };
        case "textDelta":
          return { case: "textDelta", value: QT(e2.value, t2) };
        case "completed":
          return { case: "completed", value: GT(e2.value, t2) };
        case "skipped":
          return { case: "skipped", value: HT(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function VT(e2, t2, r2) {
      return new lI.Cnm({ comparisonId: e2.comparisonId, event: KT(e2.event, t2, r2) });
    }
    function KT(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "started":
          return { case: "started", value: $T(e2.value, t2, r2) };
        case "textDelta":
          return { case: "textDelta", value: jT(e2.value, t2, r2) };
        case "completed":
          return { case: "completed", value: (e2.value, new lI.q8c({})) };
        case "skipped":
          return { case: "skipped", value: (n2 = e2.value, new lI.TNM({ reason: n2.reason })) };
        default:
          return { case: void 0, value: void 0 };
      }
      var n2;
    }
    function YT(e2, t2) {
      return { _privacyMode: t2, messageStartedAtMs: e2.messageStartedAtMs, message: ZT(e2.message, t2) };
    }
    function ZT(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "textDelta":
          return { case: "textDelta", value: Kx(e2.value, t2) };
        case "partialToolCall":
          return { case: "partialToolCall", value: iT(e2.value, t2) };
        case "toolCallDelta":
          return { case: "toolCallDelta", value: sT(e2.value, t2) };
        case "toolCallStarted":
          return { case: "toolCallStarted", value: eT(e2.value, t2) };
        case "toolCallCompleted":
          return { case: "toolCallCompleted", value: rT(e2.value, t2) };
        case "thinkingDelta":
          return { case: "thinkingDelta", value: cT(e2.value, t2) };
        case "thinkingCompleted":
          return { case: "thinkingCompleted", value: uT(e2.value, t2) };
        case "userMessageAppended":
          return { case: "userMessageAppended", value: IT(e2.value, t2) };
        case "tokenDelta":
          return { case: "tokenDelta", value: dT(e2.value, t2) };
        case "summary":
          return { case: "summary", value: mT(e2.value, t2) };
        case "summaryStarted":
          return { case: "summaryStarted", value: fT(e2.value, t2) };
        case "summaryCompleted":
          return { case: "summaryCompleted", value: yT(e2.value, t2) };
        case "shellOutputDelta":
          return { case: "shellOutputDelta", value: vT(e2.value, t2) };
        case "heartbeat":
          return { case: "heartbeat", value: gT(e2.value, t2) };
        case "turnEnded":
          return { case: "turnEnded", value: bT(e2.value, t2) };
        case "stepStarted":
          return { case: "stepStarted", value: kT(e2.value, t2) };
        case "stepCompleted":
          return { case: "stepCompleted", value: BT(e2.value, t2) };
        case "toolRequestsListed":
          return { case: "toolRequestsListed", value: TT(e2.value, t2) };
        case "promptSuggestion":
          return { case: "promptSuggestion", value: JT(e2.value, t2) };
        case "postRequestPrompt":
          return { case: "postRequestPrompt", value: nR(e2.value, t2) };
        case "activeBranchChange":
          return { case: "activeBranchChange", value: qT(e2.value, t2) };
        case "feedbackRequest":
          return { case: "feedbackRequest", value: FT(e2.value, t2) };
        case "responseComparison":
          return { case: "responseComparison", value: zT(e2.value, t2) };
        case "contextInjectionState":
          return { case: "contextInjectionState", value: tR(e2.value, t2) };
        case "routedModel":
          return { case: "routedModel", value: Zx(e2.value, t2) };
        case "grokBotNudge":
          return { case: "grokBotNudge", value: oR(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function XT(e2, t2, r2) {
      return new lI.Uq({ messageStartedAtMs: e2.messageStartedAtMs, message: eR(e2.message, t2, r2) });
    }
    function eR(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "textDelta":
          return { case: "textDelta", value: Yx(e2.value, t2, r2) };
        case "partialToolCall":
          return { case: "partialToolCall", value: aT(e2.value, t2, r2) };
        case "toolCallDelta":
          return { case: "toolCallDelta", value: oT(e2.value, t2, r2) };
        case "toolCallStarted":
          return { case: "toolCallStarted", value: tT(e2.value, t2, r2) };
        case "toolCallCompleted":
          return { case: "toolCallCompleted", value: nT(e2.value, t2, r2) };
        case "thinkingDelta":
          return { case: "thinkingDelta", value: lT(e2.value, t2, r2) };
        case "thinkingCompleted":
          return { case: "thinkingCompleted", value: (n2 = e2.value, new lI.tr3({ thinkingDurationMs: n2.thinkingDurationMs })) };
        case "userMessageAppended":
          return { case: "userMessageAppended", value: CT(e2.value, t2, r2) };
        case "tokenDelta":
          return { case: "tokenDelta", value: pT(e2.value) };
        case "summary":
          return { case: "summary", value: hT(e2.value, t2, r2) };
        case "summaryStarted":
          return { case: "summaryStarted", value: (e2.value, new lI.lWT({})) };
        case "summaryCompleted":
          return { case: "summaryCompleted", value: wT(e2.value, t2, r2) };
        case "shellOutputDelta":
          return { case: "shellOutputDelta", value: AT(e2.value, t2, r2) };
        case "heartbeat":
          return { case: "heartbeat", value: (e2.value, new lI.ih1({})) };
        case "turnEnded":
          return { case: "turnEnded", value: ET(e2.value) };
        case "stepStarted":
          return { case: "stepStarted", value: xT(e2.value) };
        case "stepCompleted":
          return { case: "stepCompleted", value: PT(e2.value) };
        case "toolRequestsListed":
          return { case: "toolRequestsListed", value: RT(e2.value) };
        case "promptSuggestion":
          return { case: "promptSuggestion", value: MT(e2.value, t2, r2) };
        case "postRequestPrompt":
          return { case: "postRequestPrompt", value: sR(e2.value, t2, r2) };
        case "activeBranchChange":
          return { case: "activeBranchChange", value: DT(e2.value, t2, r2) };
        case "feedbackRequest":
          return { case: "feedbackRequest", value: UT(e2.value) };
        case "responseComparison":
          return { case: "responseComparison", value: VT(e2.value, t2, r2) };
        case "contextInjectionState":
          return { case: "contextInjectionState", value: rR(e2.value, t2, r2) };
        case "routedModel":
          return { case: "routedModel", value: Xx(e2.value) };
        case "grokBotNudge":
          return { case: "grokBotNudge", value: iR(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
      var n2;
    }
    function tR(e2, t2) {
      return { _privacyMode: t2, injectionId: e2.injectionId, state: void 0 !== e2.state ? dk(e2.state, t2) : void 0 };
    }
    function rR(e2, t2, r2) {
      return new lI.b63({ injectionId: e2.injectionId, state: void 0 !== e2.state ? mk(e2.state, t2, r2) : void 0 });
    }
    function nR(e2, t2) {
      return { _privacyMode: t2, title: e2.title, message: e2.message, buttonLabel: e2.buttonLabel, buttonUrl: e2.buttonUrl };
    }
    function sR(e2, t2, r2) {
      return new lI.HMi({ title: e2.title, message: e2.message, buttonLabel: e2.buttonLabel, buttonUrl: e2.buttonUrl });
    }
    function oR(e2, t2) {
      return { _privacyMode: t2, job: e2.job, description: e2.description, showNumber: e2.showNumber };
    }
    function iR(e2, t2, r2) {
      return new lI.ZVT({ job: e2.job, description: e2.description, showNumber: e2.showNumber });
    }
    function aR(e2, t2) {
      return { _privacyMode: t2, id: e2.id, query: cR(e2.query, t2) };
    }
    function cR(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "webSearchRequestQuery":
          return { case: "webSearchRequestQuery", value: hE(e2.value, t2) };
        case "askQuestionInteractionQuery":
          return { case: "askQuestionInteractionQuery", value: fR(e2.value, t2) };
        case "switchModeRequestQuery":
          return { case: "switchModeRequestQuery", value: wb(e2.value, t2) };
        case "createPlanRequestQuery":
          return { case: "createPlanRequestQuery", value: Os(e2.value, t2) };
        case "setupVmEnvironmentArgs":
          return { case: "setupVmEnvironmentArgs", value: aA(e2.value, t2) };
        case "webFetchRequestQuery":
          return { case: "webFetchRequestQuery", value: Qb(e2.value, t2) };
        case "prManagementRequestQuery":
          return { case: "prManagementRequestQuery", value: Fm(e2.value, t2) };
        case "mcpAuthRequestQuery":
          return { case: "mcpAuthRequestQuery", value: kl(e2.value, t2) };
        case "generateImageRequestQuery":
          return { case: "generateImageRequestQuery", value: Mi(e2.value, t2) };
        case "replaceEnvArgs":
          return { case: "replaceEnvArgs", value: zf(e2.value, t2) };
        case "connectScmRequestQuery":
          return { case: "connectScmRequestQuery", value: Br(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function lR(e2, t2, r2) {
      return new lI.Pd7({ id: e2.id, query: uR(e2.query, t2, r2) });
    }
    function uR(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "webSearchRequestQuery":
          return { case: "webSearchRequestQuery", value: fE(e2.value, t2, r2) };
        case "askQuestionInteractionQuery":
          return { case: "askQuestionInteractionQuery", value: gR(e2.value, t2, r2) };
        case "switchModeRequestQuery":
          return { case: "switchModeRequestQuery", value: vb(e2.value, t2, r2) };
        case "createPlanRequestQuery":
          return { case: "createPlanRequestQuery", value: Ns(e2.value, t2, r2) };
        case "setupVmEnvironmentArgs":
          return { case: "setupVmEnvironmentArgs", value: cA(e2.value, t2, r2) };
        case "webFetchRequestQuery":
          return { case: "webFetchRequestQuery", value: jb(e2.value, t2, r2) };
        case "prManagementRequestQuery":
          return { case: "prManagementRequestQuery", value: Um(e2.value, t2, r2) };
        case "mcpAuthRequestQuery":
          return { case: "mcpAuthRequestQuery", value: (n2 = e2.value, new pl.uL({ args: void 0 !== n2.args ? hl(n2.args) : void 0 })) };
        case "generateImageRequestQuery":
          return { case: "generateImageRequestQuery", value: qi(e2.value, t2, r2) };
        case "replaceEnvArgs":
          return { case: "replaceEnvArgs", value: Wf(e2.value, t2, r2) };
        case "connectScmRequestQuery":
          return { case: "connectScmRequestQuery", value: Pr(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
      var n2;
    }
    function dR(e2, t2) {
      return { _privacyMode: t2, id: e2.id, result: pR(e2.result, t2) };
    }
    function pR(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "webSearchRequestResponse":
          return { case: "webSearchRequestResponse", value: gE(e2.value, t2) };
        case "askQuestionInteractionResponse":
          return { case: "askQuestionInteractionResponse", value: yR(e2.value, t2) };
        case "switchModeRequestResponse":
          return { case: "switchModeRequestResponse", value: _b(e2.value, t2) };
        case "createPlanRequestResponse":
          return { case: "createPlanRequestResponse", value: Fs(e2.value, t2) };
        case "setupVmEnvironmentResult":
          return { case: "setupVmEnvironmentResult", value: lA(e2.value, t2) };
        case "webFetchRequestResponse":
          return { case: "webFetchRequestResponse", value: Gb(e2.value, t2) };
        case "prManagementResult":
          return { case: "prManagementResult", value: bm(e2.value, t2) };
        case "mcpAuthRequestResponse":
          return { case: "mcpAuthRequestResponse", value: xl(e2.value, t2) };
        case "generateImageRequestResponse":
          return { case: "generateImageRequestResponse", value: Di(e2.value, t2) };
        case "replaceEnvResult":
          return { case: "replaceEnvResult", value: Xf(e2.value, t2) };
        case "connectScmRequestResponse":
          return { case: "connectScmRequestResponse", value: Jr(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function mR(e2, t2, r2) {
      return new lI.Y5({ id: e2.id, result: hR(e2.result, t2, r2) });
    }
    function hR(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "webSearchRequestResponse":
          return { case: "webSearchRequestResponse", value: wE(e2.value, t2, r2) };
        case "askQuestionInteractionResponse":
          return { case: "askQuestionInteractionResponse", value: wR(e2.value, t2, r2) };
        case "switchModeRequestResponse":
          return { case: "switchModeRequestResponse", value: Sb(e2.value, t2, r2) };
        case "createPlanRequestResponse":
          return { case: "createPlanRequestResponse", value: Us(e2.value, t2, r2) };
        case "setupVmEnvironmentResult":
          return { case: "setupVmEnvironmentResult", value: dA(e2.value, t2, r2) };
        case "webFetchRequestResponse":
          return { case: "webFetchRequestResponse", value: zb(e2.value, t2, r2) };
        case "prManagementResult":
          return { case: "prManagementResult", value: Im(e2.value, t2, r2) };
        case "mcpAuthRequestResponse":
          return { case: "mcpAuthRequestResponse", value: Rl(e2.value, t2, r2) };
        case "generateImageRequestResponse":
          return { case: "generateImageRequestResponse", value: Ni(e2.value, t2, r2) };
        case "replaceEnvResult":
          return { case: "replaceEnvResult", value: tg(e2.value, t2, r2) };
        case "connectScmRequestResponse":
          return { case: "connectScmRequestResponse", value: qr(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function fR(e2, t2) {
      return { _privacyMode: t2, args: void 0 !== e2.args ? G(e2.args, t2) : void 0, toolCallId: e2.toolCallId };
    }
    function gR(e2, t2, r2) {
      return new lI.qZY({ args: void 0 !== e2.args ? H(e2.args, t2, r2) : void 0, toolCallId: e2.toolCallId });
    }
    function yR(e2, t2) {
      return { _privacyMode: t2, result: void 0 !== e2.result ? V(e2.result, t2) : void 0 };
    }
    function wR(e2, t2, r2) {
      return new lI.zT({ result: void 0 !== e2.result ? Y(e2.result, t2, r2) : void 0 });
    }
    var vR = r(91448);
    function _R(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), toolCallId: e2.toolCallId };
    }
    function AR(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new vR.yN({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallId: e2.toolCallId });
    }
    function SR(e2, t2) {
      return { _privacyMode: t2, canvasId: e2.canvasId, title: void 0 !== e2.title ? (0, n.cZ)(e2.title, n.po.CODE, "title", t2) : void 0, saveState: e2.saveState, saveDetail: void 0 !== e2.saveDetail ? (0, n.cZ)(e2.saveDetail, n.po.CODE, "save_detail", t2) : void 0, result: bR(e2.result, t2) };
    }
    function bR(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: CR(e2.value, t2) };
        case "error":
          return { case: "error", value: xR(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function ER(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new vR.GL({ canvasId: e2.canvasId, title: e2.title?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), saveState: e2.saveState, saveDetail: e2.saveDetail?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), result: IR(e2.result, t2, r2) });
    }
    function IR(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: kR(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: TR(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function CR(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), diagnostics: e2.diagnostics.map((e3) => Km(e3, t2)) };
    }
    function kR(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new vR.uX({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), diagnostics: e2.diagnostics.map((e3) => Ym(e3, t2, r2)) });
    }
    function xR(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function TR(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new vR.HW({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var RR = r(88701);
    function BR(e2, t2) {
      return { _privacyMode: t2, journalEpoch: e2.journalEpoch, seq: e2.seq, lastEventId: e2.lastEventId };
    }
    function PR(e2, t2, r2) {
      return new RR.LK({ journalEpoch: e2.journalEpoch, seq: e2.seq, lastEventId: e2.lastEventId });
    }
    function JR(e2, t2) {
      return { _privacyMode: t2, cursor: void 0 !== e2.cursor ? BR(e2.cursor, t2) : void 0, advance: e2.advance, includeQuotaNotices: e2.includeQuotaNotices };
    }
    function MR(e2, t2, r2) {
      return new RR.Uz({ cursor: void 0 !== e2.cursor ? PR(e2.cursor) : void 0, advance: e2.advance, includeQuotaNotices: e2.includeQuotaNotices });
    }
    function qR(e2, t2) {
      return { _privacyMode: t2, result: DR(e2.result, t2) };
    }
    function DR(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: FR(e2.value, t2) };
        case "error":
          return { case: "error", value: LR(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function OR(e2, t2, r2) {
      return new RR.Ev({ result: NR(e2.result, t2, r2) });
    }
    function NR(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: UR(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: $R(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function FR(e2, t2) {
      return { _privacyMode: t2, events: e2.events.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, v: e4.v, eventId: e4.eventId, journalEpoch: e4.journalEpoch, seq: e4.seq, tsMs: e4.tsMs, kind: e4.kind, storeId: e4.storeId, originalRelPath: void 0 !== e4.originalRelPath ? (0, n.cZ)(e4.originalRelPath, n.po.PATH, "original_rel_path", t3) : void 0, conflictRelPath: void 0 !== e4.conflictRelPath ? (0, n.cZ)(e4.conflictRelPath, n.po.PATH, "conflict_rel_path", t3) : void 0, originalAbsPath: void 0 !== e4.originalAbsPath ? (0, n.cZ)(e4.originalAbsPath, n.po.PATH, "original_abs_path", t3) : void 0, conflictAbsPath: void 0 !== e4.conflictAbsPath ? (0, n.cZ)(e4.conflictAbsPath, n.po.PATH, "conflict_abs_path", t3) : void 0, preservedBytes: e4.preservedBytes, scopeKind: e4.scopeKind, limitBytes: e4.limitBytes, usageBytes: e4.usageBytes };
      })(e3, t2)), nextCursor: void 0 !== e2.nextCursor ? BR(e2.nextCursor, t2) : void 0, gap: e2.gap };
    }
    function UR(e2, t2, r2) {
      return new RR.iS({ events: e2.events.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new RR.RZ({ v: e4.v, eventId: e4.eventId, journalEpoch: e4.journalEpoch, seq: e4.seq, tsMs: e4.tsMs, kind: e4.kind, storeId: e4.storeId, originalRelPath: e4.originalRelPath?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), conflictRelPath: e4.conflictRelPath?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), originalAbsPath: e4.originalAbsPath?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), conflictAbsPath: e4.conflictAbsPath?.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), preservedBytes: e4.preservedBytes, scopeKind: e4.scopeKind, limitBytes: e4.limitBytes, usageBytes: e4.usageBytes });
      })(e3, t2, r2)), nextCursor: void 0 !== e2.nextCursor ? PR(e2.nextCursor) : void 0, gap: e2.gap });
    }
    function LR(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function $R(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new RR.h6({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var QR = r(70355);
    function jR(e2, t2) {
      return { _privacyMode: t2, trigger: e2.trigger, contextUsagePercent: e2.contextUsagePercent, contextTokens: e2.contextTokens, contextWindowSize: e2.contextWindowSize, messageCount: e2.messageCount, messagesToCompact: e2.messagesToCompact, isFirstCompaction: e2.isFirstCompaction, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => aw(e3, t2)) };
    }
    function GR(e2, t2, r2) {
      return new QR.Ks({ trigger: e2.trigger, contextUsagePercent: e2.contextUsagePercent, contextTokens: e2.contextTokens, contextWindowSize: e2.contextWindowSize, messageCount: e2.messageCount, messagesToCompact: e2.messagesToCompact, isFirstCompaction: e2.isFirstCompaction, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => cw(e3, t2, r2)) });
    }
    function HR(e2, t2) {
      return { _privacyMode: t2, userMessage: void 0 !== e2.userMessage ? (0, n.cZ)(e2.userMessage, n.po.CODE, "user_message", t2) : void 0 };
    }
    function zR(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.$_({ userMessage: e2.userMessage?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function WR(e2, t2) {
      return { _privacyMode: t2, subagentId: e2.subagentId, subagentType: e2.subagentType, task: (0, n.cZ)(e2.task, n.po.CODE, "task", t2), parentConversationId: e2.parentConversationId, toolCallId: e2.toolCallId, subagentModel: e2.subagentModel, isParallelWorker: e2.isParallelWorker, gitBranch: e2.gitBranch, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => aw(e3, t2)) };
    }
    function VR(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.b3({ subagentId: e2.subagentId, subagentType: e2.subagentType, task: e2.task.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), parentConversationId: e2.parentConversationId, toolCallId: e2.toolCallId, subagentModel: e2.subagentModel, isParallelWorker: e2.isParallelWorker, gitBranch: e2.gitBranch, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => cw(e3, t2, r2)) });
    }
    function KR(e2, t2) {
      return { _privacyMode: t2, permission: e2.permission, userMessage: void 0 !== e2.userMessage ? (0, n.cZ)(e2.userMessage, n.po.CODE, "user_message", t2) : void 0, additionalContext: void 0 !== e2.additionalContext ? (0, n.cZ)(e2.additionalContext, n.po.CODE, "additional_context", t2) : void 0 };
    }
    function YR(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.W0({ permission: e2.permission, userMessage: e2.userMessage?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), additionalContext: e2.additionalContext?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function ZR(e2, t2) {
      return { _privacyMode: t2, subagentId: e2.subagentId, subagentType: e2.subagentType, status: e2.status, durationMs: e2.durationMs, summary: void 0 !== e2.summary ? (0, n.cZ)(e2.summary, n.po.CODE, "summary", t2) : void 0, parentConversationId: e2.parentConversationId, messageCount: e2.messageCount, toolCallCount: e2.toolCallCount, errorMessage: void 0 !== e2.errorMessage ? (0, n.cZ)(e2.errorMessage, n.po.CODE, "error_message", t2) : void 0, modifiedFiles: e2.modifiedFiles.map((e3) => (0, n.cZ)(e3, n.po.PATH, "modified_files", t2)), gitBranch: e2.gitBranch, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, loopCount: e2.loopCount, task: void 0 !== e2.task ? (0, n.cZ)(e2.task, n.po.CODE, "task", t2) : void 0, description: void 0 !== e2.description ? (0, n.cZ)(e2.description, n.po.CODE, "description", t2) : void 0, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => aw(e3, t2)), childConversationId: e2.childConversationId };
    }
    function XR(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.ty({ subagentId: e2.subagentId, subagentType: e2.subagentType, status: e2.status, durationMs: e2.durationMs, summary: e2.summary?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), parentConversationId: e2.parentConversationId, messageCount: e2.messageCount, toolCallCount: e2.toolCallCount, errorMessage: e2.errorMessage?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), modifiedFiles: e2.modifiedFiles.map((e3) => e3.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 })), gitBranch: e2.gitBranch, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, loopCount: e2.loopCount, task: e2.task?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), description: e2.description?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => cw(e3, t2, r2)), childConversationId: e2.childConversationId });
    }
    function eB(e2, t2) {
      return { _privacyMode: t2, followupMessage: void 0 !== e2.followupMessage ? (0, n.cZ)(e2.followupMessage, n.po.CODE, "followup_message", t2) : void 0, additionalContext: void 0 !== e2.additionalContext ? (0, n.cZ)(e2.additionalContext, n.po.CODE, "additional_context", t2) : void 0 };
    }
    function tB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.AH({ followupMessage: e2.followupMessage?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), additionalContext: e2.additionalContext?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function rB(e2, t2) {
      return { _privacyMode: t2, prompt: (0, n.cZ)(e2.prompt, n.po.CODE, "prompt", t2), attachments: e2.attachments.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, type: e4.type, filePath: (0, n.cZ)(e4.filePath, n.po.PATH, "file_path", t3) };
      })(e3, t2)), composerMode: e2.composerMode, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => aw(e3, t2)) };
    }
    function nB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.D2({ prompt: e2.prompt.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), attachments: e2.attachments.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new QR.Ru({ type: e4.type, filePath: e4.filePath.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }) });
      })(e3, t2, r2)), composerMode: e2.composerMode, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => cw(e3, t2, r2)) });
    }
    function sB(e2, t2) {
      return { _privacyMode: t2, continue: e2.continue, userMessage: void 0 !== e2.userMessage ? (0, n.cZ)(e2.userMessage, n.po.CODE, "user_message", t2) : void 0, additionalContext: void 0 !== e2.additionalContext ? (0, n.cZ)(e2.additionalContext, n.po.CODE, "additional_context", t2) : void 0 };
    }
    function oB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.u1({ continue: e2.continue, userMessage: e2.userMessage?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), additionalContext: e2.additionalContext?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function iB(e2, t2) {
      return { _privacyMode: t2, text: (0, n.cZ)(e2.text, n.po.CODE, "text", t2), conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => aw(e3, t2)), inputTokens: e2.inputTokens, outputTokens: e2.outputTokens, cacheReadTokens: e2.cacheReadTokens, cacheWriteTokens: e2.cacheWriteTokens };
    }
    function aB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.mL({ text: e2.text.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => cw(e3, t2, r2)), inputTokens: e2.inputTokens, outputTokens: e2.outputTokens, cacheReadTokens: e2.cacheReadTokens, cacheWriteTokens: e2.cacheWriteTokens });
    }
    function cB(e2, t2) {
      return { _privacyMode: t2 };
    }
    function lB(e2, t2) {
      return { _privacyMode: t2, text: (0, n.cZ)(e2.text, n.po.CODE, "text", t2), durationMs: e2.durationMs, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => aw(e3, t2)) };
    }
    function uB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.AL({ text: e2.text.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), durationMs: e2.durationMs, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => cw(e3, t2, r2)) });
    }
    function dB(e2, t2) {
      return { _privacyMode: t2 };
    }
    function pB(e2, t2) {
      return { _privacyMode: t2, status: e2.status, loopCount: e2.loopCount, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => aw(e3, t2)), inputTokens: e2.inputTokens, outputTokens: e2.outputTokens, cacheReadTokens: e2.cacheReadTokens, cacheWriteTokens: e2.cacheWriteTokens };
    }
    function mB(e2, t2, r2) {
      return new QR.Od({ status: e2.status, loopCount: e2.loopCount, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => cw(e3, t2, r2)), inputTokens: e2.inputTokens, outputTokens: e2.outputTokens, cacheReadTokens: e2.cacheReadTokens, cacheWriteTokens: e2.cacheWriteTokens });
    }
    function hB(e2, t2) {
      return { _privacyMode: t2, followupMessage: void 0 !== e2.followupMessage ? (0, n.cZ)(e2.followupMessage, n.po.CODE, "followup_message", t2) : void 0 };
    }
    function fB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.rT({ followupMessage: e2.followupMessage?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function gB(e2, t2) {
      return { _privacyMode: t2, toolName: e2.toolName, toolInput: e2.toolInput?.toJson(), toolUseId: e2.toolUseId, cwd: void 0 !== e2.cwd ? (0, n.cZ)(e2.cwd, n.po.PATH, "cwd", t2) : void 0, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => aw(e3, t2)), parentToolCallId: e2.parentToolCallId };
    }
    function yB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.CI({ toolName: e2.toolName, toolInput: void 0 !== e2.toolInput ? el.Struct.fromJson(e2.toolInput) : void 0, toolUseId: e2.toolUseId, cwd: e2.cwd?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => cw(e3, t2, r2)), parentToolCallId: e2.parentToolCallId });
    }
    function wB(e2, t2) {
      return { _privacyMode: t2, permission: e2.permission, userMessage: void 0 !== e2.userMessage ? (0, n.cZ)(e2.userMessage, n.po.CODE, "user_message", t2) : void 0, agentMessage: void 0 !== e2.agentMessage ? (0, n.cZ)(e2.agentMessage, n.po.CODE, "agent_message", t2) : void 0, updatedInput: void 0 !== e2.updatedInput ? (0, n.cZ)(e2.updatedInput, n.po.CODE, "updated_input", t2) : void 0, additionalContext: void 0 !== e2.additionalContext ? (0, n.cZ)(e2.additionalContext, n.po.CODE, "additional_context", t2) : void 0 };
    }
    function vB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.Wn({ permission: e2.permission, userMessage: e2.userMessage?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), agentMessage: e2.agentMessage?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), updatedInput: e2.updatedInput?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), additionalContext: e2.additionalContext?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function _B(e2, t2) {
      return { _privacyMode: t2, toolName: e2.toolName, toolInput: e2.toolInput?.toJson(), toolOutput: (0, n.cZ)(e2.toolOutput, n.po.CODE, "tool_output", t2), durationMs: e2.durationMs, toolUseId: e2.toolUseId, cwd: void 0 !== e2.cwd ? (0, n.cZ)(e2.cwd, n.po.PATH, "cwd", t2) : void 0, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => aw(e3, t2)), parentToolCallId: e2.parentToolCallId };
    }
    function AB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.rY({ toolName: e2.toolName, toolInput: void 0 !== e2.toolInput ? el.Struct.fromJson(e2.toolInput) : void 0, toolOutput: e2.toolOutput.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), durationMs: e2.durationMs, toolUseId: e2.toolUseId, cwd: e2.cwd?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => cw(e3, t2, r2)), parentToolCallId: e2.parentToolCallId });
    }
    function SB(e2, t2) {
      return { _privacyMode: t2, additionalContext: void 0 !== e2.additionalContext ? (0, n.cZ)(e2.additionalContext, n.po.CODE, "additional_context", t2) : void 0 };
    }
    function bB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.uB({ additionalContext: e2.additionalContext?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function EB(e2, t2) {
      return { _privacyMode: t2, toolName: e2.toolName, toolInput: e2.toolInput?.toJson(), errorMessage: (0, n.cZ)(e2.errorMessage, n.po.CODE, "error_message", t2), failureType: e2.failureType, durationMs: e2.durationMs, toolUseId: e2.toolUseId, isInterrupt: e2.isInterrupt, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => aw(e3, t2)), parentToolCallId: e2.parentToolCallId };
    }
    function IB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.hy({ toolName: e2.toolName, toolInput: void 0 !== e2.toolInput ? el.Struct.fromJson(e2.toolInput) : void 0, errorMessage: e2.errorMessage.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), failureType: e2.failureType, durationMs: e2.durationMs, toolUseId: e2.toolUseId, isInterrupt: e2.isInterrupt, conversationId: e2.conversationId, generationId: e2.generationId, model: e2.model, modelId: e2.modelId, modelParams: e2.modelParams.map((e3) => cw(e3, t2, r2)), parentToolCallId: e2.parentToolCallId });
    }
    function CB(e2, t2) {
      return { _privacyMode: t2, additionalContext: void 0 !== e2.additionalContext ? (0, n.cZ)(e2.additionalContext, n.po.CODE, "additional_context", t2) : void 0 };
    }
    function kB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new QR.U1({ additionalContext: e2.additionalContext?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var xB = r(83407);
    function TB(e2, t2) {
      return { _privacyMode: t2, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), timeout: e2.timeout };
    }
    function RB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new xB.CU({ command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), timeout: e2.timeout });
    }
    function BB(e2, t2) {
      return { _privacyMode: t2, result: PB(e2.result, t2) };
    }
    function PB(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: qB(e2.value, t2) };
        case "error":
          return { case: "error", value: OB(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function JB(e2, t2, r2) {
      return new xB.AH({ result: MB(e2.result, t2, r2) });
    }
    function MB(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: DB(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: NB(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function qB(e2, t2) {
      return { _privacyMode: t2, output: (0, n.cZ)(e2.output, n.po.CODE, "output", t2), truncation: void 0 !== e2.truncation ? hd(e2.truncation, t2) : void 0, fullOutputPath: void 0 !== e2.fullOutputPath ? (0, n.cZ)(e2.fullOutputPath, n.po.PATH, "full_output_path", t2) : void 0 };
    }
    function DB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new xB.cV({ output: e2.output.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), truncation: void 0 !== e2.truncation ? fd(e2.truncation) : void 0, fullOutputPath: e2.fullOutputPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function OB(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2), truncation: void 0 !== e2.truncation ? hd(e2.truncation, t2) : void 0, fullOutputPath: void 0 !== e2.fullOutputPath ? (0, n.cZ)(e2.fullOutputPath, n.po.PATH, "full_output_path", t2) : void 0 };
    }
    function NB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new xB.bD({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), truncation: void 0 !== e2.truncation ? fd(e2.truncation) : void 0, fullOutputPath: e2.fullOutputPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var FB = r(98837);
    function UB(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), edits: e2.edits.map((e3) => Td(e3, t2)) };
    }
    function LB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new FB.yZ({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), edits: e2.edits.map((e3) => Rd(e3, t2, r2)) });
    }
    function $B(e2, t2) {
      return { _privacyMode: t2, result: QB(e2.result, t2) };
    }
    function QB(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: HB(e2.value, t2) };
        case "error":
          return { case: "error", value: WB(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: KB(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function jB(e2, t2, r2) {
      return new FB.u7({ result: GB(e2.result, t2, r2) });
    }
    function GB(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: zB(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: VB(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: YB(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function HB(e2, t2) {
      return { _privacyMode: t2, output: (0, n.cZ)(e2.output, n.po.CODE, "output", t2), diff: (0, n.cZ)(e2.diff, n.po.CODE, "diff", t2), patch: (0, n.cZ)(e2.patch, n.po.CODE, "patch", t2), firstChangedLine: e2.firstChangedLine };
    }
    function zB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new FB.uL({ output: e2.output.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), diff: e2.diff.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), patch: e2.patch.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), firstChangedLine: e2.firstChangedLine });
    }
    function WB(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function VB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new FB.Nd({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function KB(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function YB(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new FB.pE({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var ZB = r(83426);
    function XB(e2, t2) {
      return { _privacyMode: t2, pattern: (0, n.cZ)(e2.pattern, n.po.PATH, "pattern", t2), path: void 0 !== e2.path ? (0, n.cZ)(e2.path, n.po.PATH, "path", t2) : void 0, limit: e2.limit };
    }
    function eP(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ZB.Vo({ pattern: e2.pattern.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), path: e2.path?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), limit: e2.limit });
    }
    function tP(e2, t2) {
      return { _privacyMode: t2, result: rP(e2.result, t2) };
    }
    function rP(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: oP(e2.value, t2) };
        case "error":
          return { case: "error", value: aP(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function nP(e2, t2, r2) {
      return new ZB.bT({ result: sP(e2.result, t2, r2) });
    }
    function sP(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: iP(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: cP(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function oP(e2, t2) {
      return { _privacyMode: t2, output: (0, n.cZ)(e2.output, n.po.PATH, "output", t2), truncation: void 0 !== e2.truncation ? hd(e2.truncation, t2) : void 0, resultLimitReached: e2.resultLimitReached };
    }
    function iP(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ZB.x9({ output: e2.output.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), truncation: void 0 !== e2.truncation ? fd(e2.truncation) : void 0, resultLimitReached: e2.resultLimitReached });
    }
    function aP(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function cP(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new ZB.Uy({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var lP = r(71125);
    function uP(e2, t2) {
      return { _privacyMode: t2, pattern: (0, n.cZ)(e2.pattern, n.po.CODE, "pattern", t2), path: void 0 !== e2.path ? (0, n.cZ)(e2.path, n.po.PATH, "path", t2) : void 0, glob: void 0 !== e2.glob ? (0, n.cZ)(e2.glob, n.po.PATH, "glob", t2) : void 0, ignoreCase: e2.ignoreCase, literal: e2.literal, context: e2.context, limit: e2.limit };
    }
    function dP(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lP.gK({ pattern: e2.pattern.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), path: e2.path?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), glob: e2.glob?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), ignoreCase: e2.ignoreCase, literal: e2.literal, context: e2.context, limit: e2.limit });
    }
    function pP(e2, t2) {
      return { _privacyMode: t2, result: mP(e2.result, t2) };
    }
    function mP(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: gP(e2.value, t2) };
        case "error":
          return { case: "error", value: wP(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function hP(e2, t2, r2) {
      return new lP.mr({ result: fP(e2.result, t2, r2) });
    }
    function fP(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: yP(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: vP(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function gP(e2, t2) {
      return { _privacyMode: t2, output: (0, n.cZ)(e2.output, n.po.CODE, "output", t2), truncation: void 0 !== e2.truncation ? hd(e2.truncation, t2) : void 0, matchLimitReached: e2.matchLimitReached, linesTruncated: e2.linesTruncated };
    }
    function yP(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lP.oC({ output: e2.output.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), truncation: void 0 !== e2.truncation ? fd(e2.truncation) : void 0, matchLimitReached: e2.matchLimitReached, linesTruncated: e2.linesTruncated });
    }
    function wP(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function vP(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new lP.hP({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var _P = r(53996);
    function AP(e2, t2) {
      return { _privacyMode: t2, path: void 0 !== e2.path ? (0, n.cZ)(e2.path, n.po.PATH, "path", t2) : void 0, limit: e2.limit };
    }
    function SP(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new _P.D8({ path: e2.path?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), limit: e2.limit });
    }
    function bP(e2, t2) {
      return { _privacyMode: t2, result: EP(e2.result, t2) };
    }
    function EP(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: kP(e2.value, t2) };
        case "error":
          return { case: "error", value: TP(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function IP(e2, t2, r2) {
      return new _P.pX({ result: CP(e2.result, t2, r2) });
    }
    function CP(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: xP(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: RP(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function kP(e2, t2) {
      return { _privacyMode: t2, output: (0, n.cZ)(e2.output, n.po.PATH, "output", t2), truncation: void 0 !== e2.truncation ? hd(e2.truncation, t2) : void 0, entryLimitReached: e2.entryLimitReached };
    }
    function xP(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new _P.f5({ output: e2.output.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), truncation: void 0 !== e2.truncation ? fd(e2.truncation) : void 0, entryLimitReached: e2.entryLimitReached });
    }
    function TP(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function RP(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new _P.iG({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var BP = r(39857);
    function PP(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), offset: e2.offset, limit: e2.limit };
    }
    function JP(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new BP.cE({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), offset: e2.offset, limit: e2.limit });
    }
    function MP(e2, t2) {
      return { _privacyMode: t2, result: qP(e2.result, t2) };
    }
    function qP(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: NP(e2.value, t2) };
        case "error":
          return { case: "error", value: UP(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function DP(e2, t2, r2) {
      return new BP.Q({ result: OP(e2.result, t2, r2) });
    }
    function OP(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: FP(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: LP(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function NP(e2, t2) {
      return { _privacyMode: t2, output: (0, n.cZ)(e2.output, n.po.CODE, "output", t2), truncation: void 0 !== e2.truncation ? hd(e2.truncation, t2) : void 0 };
    }
    function FP(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new BP.yP({ output: e2.output.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), truncation: void 0 !== e2.truncation ? fd(e2.truncation) : void 0 });
    }
    function UP(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function LP(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new BP.tB({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var $P = r(43464);
    function QP(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), content: (0, n.cZ)(e2.content, n.po.CODE, "content", t2) };
    }
    function jP(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new $P.VA({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), content: e2.content.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function GP(e2, t2) {
      return { _privacyMode: t2, result: HP(e2.result, t2) };
    }
    function HP(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: VP(e2.value, t2) };
        case "error":
          return { case: "error", value: YP(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: XP(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function zP(e2, t2, r2) {
      return new $P.hO({ result: WP(e2.result, t2, r2) });
    }
    function WP(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: KP(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: ZP(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: eJ(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function VP(e2, t2) {
      return { _privacyMode: t2, output: (0, n.cZ)(e2.output, n.po.CODE, "output", t2) };
    }
    function KP(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new $P.vu({ output: e2.output.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function YP(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function ZP(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new $P.OD({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function XP(e2, t2) {
      return { _privacyMode: t2, reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function eJ(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new $P.Ye({ reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var tJ = r(88623);
    function rJ(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), toolCallId: e2.toolCallId, offset: e2.offset, limit: e2.limit, encodingHint: e2.encodingHint, digestOnly: e2.digestOnly };
    }
    function nJ(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new tJ.a2({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallId: e2.toolCallId, offset: e2.offset, limit: e2.limit, encodingHint: e2.encodingHint, digestOnly: e2.digestOnly });
    }
    function sJ(e2, t2) {
      return { _privacyMode: t2, result: oJ(e2.result, t2) };
    }
    function oJ(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: cJ(e2.value, t2) };
        case "error":
          return { case: "error", value: pJ(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: hJ(e2.value, t2) };
        case "fileNotFound":
          return { case: "fileNotFound", value: gJ(e2.value, t2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: wJ(e2.value, t2) };
        case "invalidFile":
          return { case: "invalidFile", value: _J(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function iJ(e2, t2, r2) {
      return new tJ.sV({ result: aJ(e2.result, t2, r2) });
    }
    function aJ(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: uJ(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: mJ(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: fJ(e2.value, t2, r2) };
        case "fileNotFound":
          return { case: "fileNotFound", value: yJ(e2.value, t2, r2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: vJ(e2.value, t2, r2) };
        case "invalidFile":
          return { case: "invalidFile", value: AJ(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function cJ(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), totalLines: e2.totalLines, fileSize: e2.fileSize, truncated: e2.truncated, outputBlobId: e2.outputBlobId, rangeApplied: e2.rangeApplied, sha256: e2.sha256, sizeBytes: e2.sizeBytes, output: lJ(e2.output, t2) };
    }
    function lJ(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "content":
          return { case: "content", value: (0, n.cZ)(e2.value, n.po.CODE, "content", t2) };
        case "data":
          return { case: "data", value: (0, n.Yz)(e2.value, n.po.CODE, "data", t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function uJ(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new tJ.mE({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), totalLines: e2.totalLines, fileSize: e2.fileSize, truncated: e2.truncated, outputBlobId: void 0 !== e2.outputBlobId ? e2.outputBlobId : void 0, rangeApplied: e2.rangeApplied, sha256: e2.sha256, sizeBytes: e2.sizeBytes, output: dJ(e2.output, t2, r2) });
    }
    function dJ(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "content":
          return { case: "content", value: e2.value.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) };
        case "data":
          return { case: "data", value: e2.value.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function pJ(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function mJ(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new tJ.F_({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function hJ(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function fJ(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new tJ.f4({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function gJ(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2) };
    }
    function yJ(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new tJ.Ko({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function wJ(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2) };
    }
    function vJ(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new tJ.lW({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function _J(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function AJ(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new tJ.cW({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var SJ = r(82589);
    function bJ(e2, t2) {
      return { _privacyMode: t2, command: (0, n.cZ)(e2.command, n.po.CODE, "command", t2), workingDirectory: (0, n.cZ)(e2.workingDirectory, n.po.PATH, "working_directory", t2), parsingResult: void 0 !== e2.parsingResult ? wA(e2.parsingResult, t2) : void 0, classifierResult: void 0 !== e2.classifierResult ? AA(e2.classifierResult, t2) : void 0, toolCallId: e2.toolCallId };
    }
    function EJ(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new SJ.C({ command: e2.command.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), workingDirectory: e2.workingDirectory.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), parsingResult: void 0 !== e2.parsingResult ? vA(e2.parsingResult, t2, r2) : void 0, classifierResult: void 0 !== e2.classifierResult ? SA(e2.classifierResult, t2, r2) : void 0, toolCallId: e2.toolCallId });
    }
    function IJ(e2, t2) {
      return { _privacyMode: t2, allowlisted: e2.allowlisted };
    }
    function CJ(e2, t2, r2) {
      return new SJ.e({ allowlisted: e2.allowlisted });
    }
    var kJ = r(18846);
    function xJ(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId, parentConversationId: e2.parentConversationId, target: void 0 !== e2.target ? RJ(e2.target, t2) : void 0, conversationContext: e2.conversationContext.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, role: e4.role, content: (0, n.cZ)(e4.content, n.po.CODE, "content", t3) };
      })(e3, t2)) };
    }
    function TJ(e2, t2, r2) {
      return new kJ.Th({ toolCallId: e2.toolCallId, parentConversationId: e2.parentConversationId, target: void 0 !== e2.target ? BJ(e2.target, t2, r2) : void 0, conversationContext: e2.conversationContext.map((e3) => (function(e4, t3, r3) {
        const n2 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r3?.enforcing;
        return new kJ.GR({ role: e4.role, content: e4.content.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
      })(e3, t2, r2)) });
    }
    function RJ(e2, t2) {
      return { _privacyMode: t2, action: e2.action, arguments: e2.arguments?.toJson() };
    }
    function BJ(e2, t2, r2) {
      return new kJ.RZ({ action: e2.action, arguments: void 0 !== e2.arguments ? el.Struct.fromJson(e2.arguments) : void 0 });
    }
    function PJ(e2, t2) {
      return { _privacyMode: t2, result: JJ(e2.result, t2) };
    }
    function JJ(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: DJ(e2.value, t2) };
        case "error":
          return { case: "error", value: NJ(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function MJ(e2, t2, r2) {
      return new kJ.bN({ result: qJ(e2.result, t2, r2) });
    }
    function qJ(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: OJ(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: FJ(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function DJ(e2, t2) {
      return { _privacyMode: t2, decision: e2.decision, blockReason: void 0 !== e2.blockReason ? (0, n.cZ)(e2.blockReason, n.po.CODE, "block_reason", t2) : void 0, proposedAllowRule: void 0 !== e2.proposedAllowRule ? (0, n.cZ)(e2.proposedAllowRule, n.po.CODE, "proposed_allow_rule", t2) : void 0, appliedRules: e2.appliedRules.map((e3) => (function(e4, t3) {
        return { _privacyMode: t3, effect: e4.effect, text: (0, n.cZ)(e4.text, n.po.CODE, "text", t3), source: e4.source };
      })(e3, t2)) };
    }
    function OJ(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new kJ.B9({ decision: e2.decision, blockReason: e2.blockReason?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), proposedAllowRule: e2.proposedAllowRule?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), appliedRules: e2.appliedRules.map((e3) => (function(e4, t3, r3) {
        const n3 = r3?.redactUnallowedFieldsInsteadOfThrowing ?? false, s3 = r3?.enforcing;
        return new kJ.$g({ effect: e4.effect, text: e4.text.unwrap(t3, { redactUnallowedFieldsInsteadOfThrowing: n3, enforcing: s3 }), source: e4.source });
      })(e3, t2, r2)) });
    }
    function NJ(e2, t2) {
      return { _privacyMode: t2, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function FJ(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new kJ.WZ({ error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var UJ = r(12544);
    function LJ(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId, subagentType: e2.subagentType, modelId: e2.modelId, prompt: (0, n.cZ)(e2.prompt, n.po.CODE, "prompt", t2), readonly: e2.readonly, resumeAgentId: e2.resumeAgentId, runInBackground: e2.runInBackground, continuationConfig: void 0 !== e2.continuationConfig ? GJ(e2.continuationConfig, t2) : void 0, parentConversationId: e2.parentConversationId, interrupt: e2.interrupt, mode: e2.mode, forkAgentId: e2.forkAgentId, rootParentConversationId: e2.rootParentConversationId, selectedContext: void 0 !== e2.selectedContext ? _v(e2.selectedContext, t2) : void 0, directMetaParentChildSubagent: e2.directMetaParentChildSubagent, environment: e2.environment, cloudBaseBranch: e2.cloudBaseBranch, modelParameters: e2.modelParameters.map((e3) => aw(e3, t2)), credentials: $J(e2.credentials, t2) };
    }
    function $J(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "apiKeyCredentials":
          return { case: "apiKeyCredentials", value: tw(e2.value, t2) };
        case "azureCredentials":
          return { case: "azureCredentials", value: nw(e2.value, t2) };
        case "bedrockCredentials":
          return { case: "bedrockCredentials", value: ow(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function QJ(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new UJ.Pw({ toolCallId: e2.toolCallId, subagentType: e2.subagentType, modelId: e2.modelId, prompt: e2.prompt.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), readonly: e2.readonly, resumeAgentId: e2.resumeAgentId, runInBackground: e2.runInBackground, continuationConfig: void 0 !== e2.continuationConfig ? HJ(e2.continuationConfig, t2, r2) : void 0, parentConversationId: e2.parentConversationId, interrupt: e2.interrupt, mode: e2.mode, forkAgentId: e2.forkAgentId, rootParentConversationId: e2.rootParentConversationId, selectedContext: void 0 !== e2.selectedContext ? Av(e2.selectedContext, t2, r2) : void 0, directMetaParentChildSubagent: e2.directMetaParentChildSubagent, environment: e2.environment, cloudBaseBranch: e2.cloudBaseBranch, modelParameters: e2.modelParameters.map((e3) => cw(e3, t2, r2)), credentials: jJ(e2.credentials, t2, r2) });
    }
    function jJ(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "apiKeyCredentials":
          return { case: "apiKeyCredentials", value: rw(e2.value, t2, r2) };
        case "azureCredentials":
          return { case: "azureCredentials", value: sw(e2.value, t2, r2) };
        case "bedrockCredentials":
          return { case: "bedrockCredentials", value: iw(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function GJ(e2, t2) {
      return { _privacyMode: t2, idleThreshold: e2.idleThreshold, maxLoops: e2.maxLoops, nudgeMessage: e2.nudgeMessage, escapeMessageTemplate: e2.escapeMessageTemplate, collectBackgroundChildren: e2.collectBackgroundChildren, childrenCompletedMessageTemplate: e2.childrenCompletedMessageTemplate, continuationRoundDelayMs: e2.continuationRoundDelayMs };
    }
    function HJ(e2, t2, r2) {
      return new UJ.N9({ idleThreshold: e2.idleThreshold, maxLoops: e2.maxLoops, nudgeMessage: e2.nudgeMessage, escapeMessageTemplate: e2.escapeMessageTemplate, collectBackgroundChildren: e2.collectBackgroundChildren, childrenCompletedMessageTemplate: e2.childrenCompletedMessageTemplate, continuationRoundDelayMs: e2.continuationRoundDelayMs });
    }
    function zJ(e2, t2) {
      return { _privacyMode: t2, result: WJ(e2.result, t2) };
    }
    function WJ(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: dM(e2.value, t2) };
        case "error":
          return { case: "error", value: mM(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function VJ(e2, t2, r2) {
      return new UJ.vS({ result: KJ(e2.result, t2, r2) });
    }
    function KJ(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: pM(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: hM(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function YJ(e2, t2) {
      return { _privacyMode: t2, agentId: e2.agentId, timeoutMs: e2.timeoutMs };
    }
    function ZJ(e2, t2, r2) {
      return new UJ.TN({ agentId: e2.agentId, timeoutMs: e2.timeoutMs });
    }
    function XJ(e2, t2) {
      return { _privacyMode: t2, result: eM(e2.result, t2) };
    }
    function eM(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "complete":
          return { case: "complete", value: nM(e2.value, t2) };
        case "stillRunning":
          return { case: "stillRunning", value: oM(e2.value, t2) };
        case "notFound":
          return { case: "notFound", value: aM(e2.value, t2) };
        case "error":
          return { case: "error", value: lM(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function tM(e2, t2, r2) {
      return new UJ.zJ({ result: rM(e2.result, t2, r2) });
    }
    function rM(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "complete":
          return { case: "complete", value: sM(e2.value, t2, r2) };
        case "stillRunning":
          return { case: "stillRunning", value: iM(e2.value, t2, r2) };
        case "notFound":
          return { case: "notFound", value: cM(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: uM(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function nM(e2, t2) {
      return { _privacyMode: t2, agentId: e2.agentId, transcriptPath: void 0 !== e2.transcriptPath ? (0, n.cZ)(e2.transcriptPath, n.po.PATH, "transcript_path", t2) : void 0, toolCallCount: e2.toolCallCount, finalMessage: void 0 !== e2.finalMessage ? (0, n.cZ)(e2.finalMessage, n.po.CODE, "final_message", t2) : void 0 };
    }
    function sM(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new UJ.bE({ agentId: e2.agentId, transcriptPath: e2.transcriptPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallCount: e2.toolCallCount, finalMessage: e2.finalMessage?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function oM(e2, t2) {
      return { _privacyMode: t2, agentId: e2.agentId, transcriptPath: void 0 !== e2.transcriptPath ? (0, n.cZ)(e2.transcriptPath, n.po.PATH, "transcript_path", t2) : void 0 };
    }
    function iM(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new UJ.L5({ agentId: e2.agentId, transcriptPath: e2.transcriptPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function aM(e2, t2) {
      return { _privacyMode: t2, agentId: e2.agentId };
    }
    function cM(e2, t2, r2) {
      return new UJ.Hq({ agentId: e2.agentId });
    }
    function lM(e2, t2) {
      return { _privacyMode: t2, agentId: e2.agentId, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function uM(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new UJ.Y({ agentId: e2.agentId, error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function dM(e2, t2) {
      return { _privacyMode: t2, agentId: e2.agentId, finalMessage: void 0 !== e2.finalMessage ? (0, n.cZ)(e2.finalMessage, n.po.CODE, "final_message", t2) : void 0, toolCallCount: e2.toolCallCount, backgroundReason: e2.backgroundReason, transcriptPath: void 0 !== e2.transcriptPath ? (0, n.cZ)(e2.transcriptPath, n.po.PATH, "transcript_path", t2) : void 0 };
    }
    function pM(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new UJ.HJ({ agentId: e2.agentId, finalMessage: e2.finalMessage?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallCount: e2.toolCallCount, backgroundReason: e2.backgroundReason, transcriptPath: e2.transcriptPath?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function mM(e2, t2) {
      return { _privacyMode: t2, agentId: e2.agentId, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function hM(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new UJ.od({ agentId: e2.agentId, error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function fM(e2, t2) {
      return { _privacyMode: t2, toolCallId: e2.toolCallId };
    }
    function gM(e2, t2, r2) {
      return new UJ.S3({ toolCallId: e2.toolCallId });
    }
    function yM(e2, t2) {
      return { _privacyMode: t2, status: e2.status };
    }
    var wM = r(83508);
    function vM(e2, t2) {
      return { _privacyMode: t2, url: (0, n.cZ)(e2.url, n.po.PATH, "url", t2), toolCallId: e2.toolCallId };
    }
    function _M(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new wM.K({ url: e2.url.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallId: e2.toolCallId });
    }
    function AM(e2, t2) {
      return { _privacyMode: t2, allowlisted: e2.allowlisted };
    }
    function SM(e2, t2, r2) {
      return new wM.M({ allowlisted: e2.allowlisted });
    }
    var bM = r(19950);
    function EM(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), fileText: (0, n.cZ)(e2.fileText, n.po.CODE, "file_text", t2), toolCallId: e2.toolCallId, returnFileContentAfterWrite: e2.returnFileContentAfterWrite, fileBytes: (0, n.Yz)(e2.fileBytes, n.po.CODE, "file_bytes", t2), encodingHint: e2.encodingHint };
    }
    function IM(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bM.hY({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), fileText: e2.fileText.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), toolCallId: e2.toolCallId, returnFileContentAfterWrite: e2.returnFileContentAfterWrite, fileBytes: e2.fileBytes.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), encodingHint: e2.encodingHint });
    }
    function CM(e2, t2) {
      return { _privacyMode: t2, result: kM(e2.result, t2) };
    }
    function kM(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: RM(e2.value, t2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: PM(e2.value, t2) };
        case "noSpace":
          return { case: "noSpace", value: MM(e2.value, t2) };
        case "error":
          return { case: "error", value: DM(e2.value, t2) };
        case "rejected":
          return { case: "rejected", value: NM(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function xM(e2, t2, r2) {
      return new bM.v3({ result: TM(e2.result, t2, r2) });
    }
    function TM(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "success":
          return { case: "success", value: BM(e2.value, t2, r2) };
        case "permissionDenied":
          return { case: "permissionDenied", value: JM(e2.value, t2, r2) };
        case "noSpace":
          return { case: "noSpace", value: qM(e2.value, t2, r2) };
        case "error":
          return { case: "error", value: OM(e2.value, t2, r2) };
        case "rejected":
          return { case: "rejected", value: FM(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function RM(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), linesCreated: e2.linesCreated, fileSize: e2.fileSize, fileContentAfterWrite: void 0 !== e2.fileContentAfterWrite ? (0, n.cZ)(e2.fileContentAfterWrite, n.po.CODE, "file_content_after_write", t2) : void 0 };
    }
    function BM(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bM.j6({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), linesCreated: e2.linesCreated, fileSize: e2.fileSize, fileContentAfterWrite: e2.fileContentAfterWrite?.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function PM(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), directory: (0, n.cZ)(e2.directory, n.po.PATH, "directory", t2), operation: e2.operation, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2), isReadonly: e2.isReadonly };
    }
    function JM(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bM.U7({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), directory: e2.directory.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), operation: e2.operation, error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), isReadonly: e2.isReadonly });
    }
    function MM(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2) };
    }
    function qM(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bM.bM({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function DM(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2) };
    }
    function OM(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bM.QM({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), error: e2.error.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function NM(e2, t2) {
      return { _privacyMode: t2, path: (0, n.cZ)(e2.path, n.po.PATH, "path", t2), reason: (0, n.cZ)(e2.reason, n.po.CODE, "reason", t2) };
    }
    function FM(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new bM.en({ path: e2.path.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }), reason: e2.reason.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    var UM = r(55094), LM = r(88107);
    function $M(e2, t2) {
      return { _privacyMode: t2, providerIdentifier: e2.providerIdentifier, toolName: e2.toolName, toolCallId: e2.toolCallId, annotationsJson: e2.annotationsJson };
    }
    function QM(e2, t2, r2) {
      return new LM.c({ providerIdentifier: e2.providerIdentifier, toolName: e2.toolName, toolCallId: e2.toolCallId, annotationsJson: e2.annotationsJson });
    }
    function jM(e2, t2) {
      return { _privacyMode: t2, allowlisted: e2.allowlisted };
    }
    function GM(e2, t2, r2) {
      return new LM.M({ allowlisted: e2.allowlisted });
    }
    function HM(e2, t2) {
      return { _privacyMode: t2, id: e2.id };
    }
    function zM(e2, t2) {
      return { _privacyMode: t2, id: e2.id, error: (0, n.cZ)(e2.error, n.po.CODE, "error", t2), stackTrace: void 0 !== e2.stackTrace ? (0, n.cZ)(e2.stackTrace, n.po.CODE, "stack_trace", t2) : void 0, errorCode: e2.errorCode };
    }
    function WM(e2, t2) {
      return { _privacyMode: t2, id: e2.id };
    }
    function VM(e2, t2) {
      return { _privacyMode: t2, message: KM(e2.message, t2) };
    }
    function KM(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "streamClose":
          return { case: "streamClose", value: HM(e2.value, t2) };
        case "throw":
          return { case: "throw", value: zM(e2.value, t2) };
        case "heartbeat":
          return { case: "heartbeat", value: WM(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function YM(e2, t2) {
      return { _privacyMode: t2, id: e2.id };
    }
    function ZM(e2, t2) {
      return { _privacyMode: t2, message: XM(e2.message, t2) };
    }
    function XM(e2, t2) {
      return e2 && void 0 !== e2.case && "abort" === e2.case ? { case: "abort", value: YM(e2.value, t2) } : { case: void 0, value: void 0 };
    }
    function eq(e2, t2, r2) {
      return new UM.Nv({ message: tq(e2.message, t2, r2) });
    }
    function tq(e2, t2, r2) {
      return e2 && void 0 !== e2.case && "abort" === e2.case ? { case: "abort", value: (n2 = e2.value, new UM.dX({ id: n2.id })) } : { case: void 0, value: void 0 };
      var n2;
    }
    function rq(e2, t2) {
      return { _privacyMode: t2, traceId: e2.traceId, spanId: e2.spanId, traceFlags: e2.traceFlags, traceState: e2.traceState };
    }
    function nq(e2, t2, r2) {
      return new UM.Kg({ traceId: e2.traceId, spanId: e2.spanId, traceFlags: e2.traceFlags, traceState: e2.traceState });
    }
    function sq(e2, t2) {
      return { _privacyMode: t2, id: e2.id, execId: e2.execId, machineId: e2.machineId, spanContext: void 0 !== e2.spanContext ? rq(e2.spanContext, t2) : void 0, acceptHookAdditionalContexts: e2.acceptHookAdditionalContexts, message: oq(e2.message, t2) };
    }
    function oq(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "shellArgs":
          return { case: "shellArgs", value: BA(e2.value, t2) };
        case "writeArgs":
          return { case: "writeArgs", value: EM(e2.value, t2) };
        case "deleteArgs":
          return { case: "deleteArgs", value: $s(e2.value, t2) };
        case "grepArgs":
          return { case: "grepArgs", value: sc(e2.value, t2) };
        case "readArgs":
          return { case: "readArgs", value: rJ(e2.value, t2) };
        case "redactedReadArgs":
          return { case: "redactedReadArgs", value: rJ(e2.value, t2) };
        case "lsArgs":
          return { case: "lsArgs", value: Bc(e2.value, t2) };
        case "diagnosticsArgs":
          return { case: "diagnosticsArgs", value: $m(e2.value, t2) };
        case "requestContextArgs":
          return { case: "requestContextArgs", value: vy(e2.value, t2) };
        case "mcpArgs":
          return { case: "mcpArgs", value: Ol(e2.value, t2) };
        case "shellStreamArgs":
          return { case: "shellStreamArgs", value: BA(e2.value, t2) };
        case "backgroundShellSpawnArgs":
          return { case: "backgroundShellSpawnArgs", value: IE(e2.value, t2) };
        case "listMcpResourcesExecArgs":
          return { case: "listMcpResourcesExecArgs", value: Eu(e2.value, t2) };
        case "readMcpResourceExecArgs":
          return { case: "readMcpResourceExecArgs", value: Du(e2.value, t2) };
        case "mcpStateExecArgs":
          return { case: "mcpStateExecArgs", value: mu(e2.value, t2) };
        case "fetchArgs":
          return { case: "fetchArgs", value: ci(e2.value, t2) };
        case "recordScreenArgs":
          return { case: "recordScreenArgs", value: hf(e2.value, t2) };
        case "computerUseArgs":
          return { case: "computerUseArgs", value: xt(e2.value, t2) };
        case "writeShellStdinArgs":
          return { case: "writeShellStdinArgs", value: qE(e2.value, t2) };
        case "executeHookArgs":
          return { case: "executeHookArgs", value: pq(e2.value, t2) };
        case "subagentArgs":
          return { case: "subagentArgs", value: LJ(e2.value, t2) };
        case "forceBackgroundShellArgs":
          return { case: "forceBackgroundShellArgs", value: IA(e2.value, t2) };
        case "forceBackgroundSubagentArgs":
          return { case: "forceBackgroundSubagentArgs", value: fM(e2.value, t2) };
        case "subagentAwaitArgs":
          return { case: "subagentAwaitArgs", value: YJ(e2.value, t2) };
        case "smartModeClassifierArgs":
          return { case: "smartModeClassifierArgs", value: xJ(e2.value, t2) };
        case "canvasDiagnosticsArgs":
          return { case: "canvasDiagnosticsArgs", value: _R(e2.value, t2) };
        case "shellAllowlistPrecheckArgs":
          return { case: "shellAllowlistPrecheckArgs", value: bJ(e2.value, t2) };
        case "mcpAllowlistPrecheckArgs":
          return { case: "mcpAllowlistPrecheckArgs", value: $M(e2.value, t2) };
        case "webFetchAllowlistPrecheckArgs":
          return { case: "webFetchAllowlistPrecheckArgs", value: vM(e2.value, t2) };
        case "gitDiffRequest":
          return { case: "gitDiffRequest", value: Qv(e2.value, t2) };
        case "piReadArgs":
          return { case: "piReadArgs", value: PP(e2.value, t2) };
        case "piBashArgs":
          return { case: "piBashArgs", value: TB(e2.value, t2) };
        case "piEditArgs":
          return { case: "piEditArgs", value: UB(e2.value, t2) };
        case "piWriteArgs":
          return { case: "piWriteArgs", value: QP(e2.value, t2) };
        case "piGrepArgs":
          return { case: "piGrepArgs", value: uP(e2.value, t2) };
        case "piFindArgs":
          return { case: "piFindArgs", value: XB(e2.value, t2) };
        case "piLsArgs":
          return { case: "piLsArgs", value: AP(e2.value, t2) };
        case "miniSweAgentBashArgs":
          return { case: "miniSweAgentBashArgs", value: BA(e2.value, t2) };
        case "conversationSearchArgs":
          return { case: "conversationSearchArgs", value: uw(e2.value, t2) };
        case "agentStoreConflictArgs":
          return { case: "agentStoreConflictArgs", value: JR(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function iq(e2, t2, r2) {
      return new UM.Ye({ id: e2.id, execId: e2.execId, machineId: e2.machineId, spanContext: void 0 !== e2.spanContext ? nq(e2.spanContext) : void 0, acceptHookAdditionalContexts: e2.acceptHookAdditionalContexts, message: aq(e2.message, t2, r2) });
    }
    function aq(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "shellArgs":
          return { case: "shellArgs", value: PA(e2.value, t2, r2) };
        case "writeArgs":
          return { case: "writeArgs", value: IM(e2.value, t2, r2) };
        case "deleteArgs":
          return { case: "deleteArgs", value: Qs(e2.value, t2, r2) };
        case "grepArgs":
          return { case: "grepArgs", value: oc(e2.value, t2, r2) };
        case "readArgs":
          return { case: "readArgs", value: nJ(e2.value, t2, r2) };
        case "redactedReadArgs":
          return { case: "redactedReadArgs", value: nJ(e2.value, t2, r2) };
        case "lsArgs":
          return { case: "lsArgs", value: Pc(e2.value, t2, r2) };
        case "diagnosticsArgs":
          return { case: "diagnosticsArgs", value: Qm(e2.value, t2, r2) };
        case "requestContextArgs":
          return { case: "requestContextArgs", value: _y(e2.value, t2, r2) };
        case "mcpArgs":
          return { case: "mcpArgs", value: Nl(e2.value, t2, r2) };
        case "shellStreamArgs":
          return { case: "shellStreamArgs", value: PA(e2.value, t2, r2) };
        case "backgroundShellSpawnArgs":
          return { case: "backgroundShellSpawnArgs", value: CE(e2.value, t2, r2) };
        case "listMcpResourcesExecArgs":
          return { case: "listMcpResourcesExecArgs", value: Iu(e2.value) };
        case "readMcpResourceExecArgs":
          return { case: "readMcpResourceExecArgs", value: Ou(e2.value, t2, r2) };
        case "mcpStateExecArgs":
          return { case: "mcpStateExecArgs", value: (n2 = e2.value, new Dl.Km({ serverIdentifiers: n2.serverIdentifiers, kickOnly: n2.kickOnly, refreshPolicy: n2.refreshPolicy })) };
        case "fetchArgs":
          return { case: "fetchArgs", value: li(e2.value) };
        case "recordScreenArgs":
          return { case: "recordScreenArgs", value: ff(e2.value, t2, r2) };
        case "computerUseArgs":
          return { case: "computerUseArgs", value: Tt(e2.value, t2, r2) };
        case "writeShellStdinArgs":
          return { case: "writeShellStdinArgs", value: DE(e2.value, t2, r2) };
        case "executeHookArgs":
          return { case: "executeHookArgs", value: mq(e2.value, t2, r2) };
        case "subagentArgs":
          return { case: "subagentArgs", value: QJ(e2.value, t2, r2) };
        case "forceBackgroundShellArgs":
          return { case: "forceBackgroundShellArgs", value: CA(e2.value) };
        case "forceBackgroundSubagentArgs":
          return { case: "forceBackgroundSubagentArgs", value: gM(e2.value) };
        case "subagentAwaitArgs":
          return { case: "subagentAwaitArgs", value: ZJ(e2.value) };
        case "smartModeClassifierArgs":
          return { case: "smartModeClassifierArgs", value: TJ(e2.value, t2, r2) };
        case "canvasDiagnosticsArgs":
          return { case: "canvasDiagnosticsArgs", value: AR(e2.value, t2, r2) };
        case "shellAllowlistPrecheckArgs":
          return { case: "shellAllowlistPrecheckArgs", value: EJ(e2.value, t2, r2) };
        case "mcpAllowlistPrecheckArgs":
          return { case: "mcpAllowlistPrecheckArgs", value: QM(e2.value) };
        case "webFetchAllowlistPrecheckArgs":
          return { case: "webFetchAllowlistPrecheckArgs", value: _M(e2.value, t2, r2) };
        case "gitDiffRequest":
          return { case: "gitDiffRequest", value: jv(e2.value, t2, r2) };
        case "piReadArgs":
          return { case: "piReadArgs", value: JP(e2.value, t2, r2) };
        case "piBashArgs":
          return { case: "piBashArgs", value: RB(e2.value, t2, r2) };
        case "piEditArgs":
          return { case: "piEditArgs", value: LB(e2.value, t2, r2) };
        case "piWriteArgs":
          return { case: "piWriteArgs", value: jP(e2.value, t2, r2) };
        case "piGrepArgs":
          return { case: "piGrepArgs", value: dP(e2.value, t2, r2) };
        case "piFindArgs":
          return { case: "piFindArgs", value: eP(e2.value, t2, r2) };
        case "piLsArgs":
          return { case: "piLsArgs", value: SP(e2.value, t2, r2) };
        case "miniSweAgentBashArgs":
          return { case: "miniSweAgentBashArgs", value: PA(e2.value, t2, r2) };
        case "conversationSearchArgs":
          return { case: "conversationSearchArgs", value: dw(e2.value, t2, r2) };
        case "agentStoreConflictArgs":
          return { case: "agentStoreConflictArgs", value: MR(e2.value) };
        default:
          return { case: void 0, value: void 0 };
      }
      var n2;
    }
    function cq(e2, t2) {
      return { _privacyMode: t2, id: e2.id, execId: e2.execId, localExecutionTimeMs: e2.localExecutionTimeMs, hookAdditionalContexts: e2.hookAdditionalContexts.map((e3) => xc(e3, t2)), message: lq(e2.message, t2) };
    }
    function lq(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "shellResult":
          return { case: "shellResult", value: MA(e2.value, t2) };
        case "writeResult":
          return { case: "writeResult", value: CM(e2.value, t2) };
        case "deleteResult":
          return { case: "deleteResult", value: js(e2.value, t2) };
        case "grepResult":
          return { case: "grepResult", value: ic(e2.value, t2) };
        case "readResult":
          return { case: "readResult", value: sJ(e2.value, t2) };
        case "redactedReadResult":
          return { case: "redactedReadResult", value: sJ(e2.value, t2) };
        case "lsResult":
          return { case: "lsResult", value: Jc(e2.value, t2) };
        case "diagnosticsResult":
          return { case: "diagnosticsResult", value: jm(e2.value, t2) };
        case "requestContextResult":
          return { case: "requestContextResult", value: Ay(e2.value, t2) };
        case "mcpResult":
          return { case: "mcpResult", value: Fl(e2.value, t2) };
        case "shellStream":
          return { case: "shellStream", value: sS(e2.value, t2) };
        case "backgroundShellSpawnResult":
          return { case: "backgroundShellSpawnResult", value: kE(e2.value, t2) };
        case "listMcpResourcesExecResult":
          return { case: "listMcpResourcesExecResult", value: Cu(e2.value, t2) };
        case "readMcpResourceExecResult":
          return { case: "readMcpResourceExecResult", value: Nu(e2.value, t2) };
        case "mcpStateExecResult":
          return { case: "mcpStateExecResult", value: hu(e2.value, t2) };
        case "fetchResult":
          return { case: "fetchResult", value: ui(e2.value, t2) };
        case "recordScreenResult":
          return { case: "recordScreenResult", value: gf(e2.value, t2) };
        case "computerUseResult":
          return { case: "computerUseResult", value: er(e2.value, t2) };
        case "writeShellStdinResult":
          return { case: "writeShellStdinResult", value: OE(e2.value, t2) };
        case "executeHookResult":
          return { case: "executeHookResult", value: hq(e2.value, t2) };
        case "subagentResult":
          return { case: "subagentResult", value: zJ(e2.value, t2) };
        case "forceBackgroundShellResult":
          return { case: "forceBackgroundShellResult", value: kA(e2.value, t2) };
        case "forceBackgroundSubagentResult":
          return { case: "forceBackgroundSubagentResult", value: yM(e2.value, t2) };
        case "subagentAwaitResult":
          return { case: "subagentAwaitResult", value: XJ(e2.value, t2) };
        case "smartModeClassifierResult":
          return { case: "smartModeClassifierResult", value: PJ(e2.value, t2) };
        case "canvasDiagnosticsResult":
          return { case: "canvasDiagnosticsResult", value: SR(e2.value, t2) };
        case "shellAllowlistPrecheckResult":
          return { case: "shellAllowlistPrecheckResult", value: IJ(e2.value, t2) };
        case "mcpAllowlistPrecheckResult":
          return { case: "mcpAllowlistPrecheckResult", value: jM(e2.value, t2) };
        case "webFetchAllowlistPrecheckResult":
          return { case: "webFetchAllowlistPrecheckResult", value: AM(e2.value, t2) };
        case "gitDiffResponse":
          return { case: "gitDiffResponse", value: Gv(e2.value, t2) };
        case "piReadResult":
          return { case: "piReadResult", value: MP(e2.value, t2) };
        case "piBashResult":
          return { case: "piBashResult", value: BB(e2.value, t2) };
        case "piEditResult":
          return { case: "piEditResult", value: $B(e2.value, t2) };
        case "piWriteResult":
          return { case: "piWriteResult", value: GP(e2.value, t2) };
        case "piGrepResult":
          return { case: "piGrepResult", value: pP(e2.value, t2) };
        case "piFindResult":
          return { case: "piFindResult", value: tP(e2.value, t2) };
        case "piLsResult":
          return { case: "piLsResult", value: bP(e2.value, t2) };
        case "conversationSearchResult":
          return { case: "conversationSearchResult", value: pw(e2.value, t2) };
        case "agentStoreConflictResult":
          return { case: "agentStoreConflictResult", value: qR(e2.value, t2) };
        case "miniSweAgentBashResult":
          return { case: "miniSweAgentBashResult", value: MA(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function uq(e2, t2, r2) {
      return new UM.yT({ id: e2.id, execId: e2.execId, localExecutionTimeMs: e2.localExecutionTimeMs, hookAdditionalContexts: e2.hookAdditionalContexts.map((e3) => Tc(e3, t2, r2)), message: dq(e2.message, t2, r2) });
    }
    function dq(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "shellResult":
          return { case: "shellResult", value: DA(e2.value, t2, r2) };
        case "writeResult":
          return { case: "writeResult", value: xM(e2.value, t2, r2) };
        case "deleteResult":
          return { case: "deleteResult", value: Hs(e2.value, t2, r2) };
        case "grepResult":
          return { case: "grepResult", value: cc(e2.value, t2, r2) };
        case "readResult":
          return { case: "readResult", value: iJ(e2.value, t2, r2) };
        case "redactedReadResult":
          return { case: "redactedReadResult", value: iJ(e2.value, t2, r2) };
        case "lsResult":
          return { case: "lsResult", value: qc(e2.value, t2, r2) };
        case "diagnosticsResult":
          return { case: "diagnosticsResult", value: Hm(e2.value, t2, r2) };
        case "requestContextResult":
          return { case: "requestContextResult", value: by(e2.value, t2, r2) };
        case "mcpResult":
          return { case: "mcpResult", value: Ll(e2.value, t2, r2) };
        case "shellStream":
          return { case: "shellStream", value: iS(e2.value, t2, r2) };
        case "backgroundShellSpawnResult":
          return { case: "backgroundShellSpawnResult", value: TE(e2.value, t2, r2) };
        case "listMcpResourcesExecResult":
          return { case: "listMcpResourcesExecResult", value: xu(e2.value, t2, r2) };
        case "readMcpResourceExecResult":
          return { case: "readMcpResourceExecResult", value: Uu(e2.value, t2, r2) };
        case "mcpStateExecResult":
          return { case: "mcpStateExecResult", value: gu(e2.value, t2, r2) };
        case "fetchResult":
          return { case: "fetchResult", value: pi(e2.value, t2, r2) };
        case "recordScreenResult":
          return { case: "recordScreenResult", value: wf(e2.value, t2, r2) };
        case "computerUseResult":
          return { case: "computerUseResult", value: rr(e2.value, t2, r2) };
        case "writeShellStdinResult":
          return { case: "writeShellStdinResult", value: FE(e2.value, t2, r2) };
        case "executeHookResult":
          return { case: "executeHookResult", value: fq(e2.value, t2, r2) };
        case "subagentResult":
          return { case: "subagentResult", value: VJ(e2.value, t2, r2) };
        case "forceBackgroundShellResult":
          return { case: "forceBackgroundShellResult", value: xA(e2.value, t2, r2) };
        case "forceBackgroundSubagentResult":
          return { case: "forceBackgroundSubagentResult", value: (n2 = e2.value, new UJ.a3({ status: n2.status })) };
        case "subagentAwaitResult":
          return { case: "subagentAwaitResult", value: tM(e2.value, t2, r2) };
        case "smartModeClassifierResult":
          return { case: "smartModeClassifierResult", value: MJ(e2.value, t2, r2) };
        case "canvasDiagnosticsResult":
          return { case: "canvasDiagnosticsResult", value: ER(e2.value, t2, r2) };
        case "shellAllowlistPrecheckResult":
          return { case: "shellAllowlistPrecheckResult", value: CJ(e2.value) };
        case "mcpAllowlistPrecheckResult":
          return { case: "mcpAllowlistPrecheckResult", value: GM(e2.value) };
        case "webFetchAllowlistPrecheckResult":
          return { case: "webFetchAllowlistPrecheckResult", value: SM(e2.value) };
        case "gitDiffResponse":
          return { case: "gitDiffResponse", value: Hv(e2.value, t2, r2) };
        case "piReadResult":
          return { case: "piReadResult", value: DP(e2.value, t2, r2) };
        case "piBashResult":
          return { case: "piBashResult", value: JB(e2.value, t2, r2) };
        case "piEditResult":
          return { case: "piEditResult", value: jB(e2.value, t2, r2) };
        case "piWriteResult":
          return { case: "piWriteResult", value: zP(e2.value, t2, r2) };
        case "piGrepResult":
          return { case: "piGrepResult", value: hP(e2.value, t2, r2) };
        case "piFindResult":
          return { case: "piFindResult", value: nP(e2.value, t2, r2) };
        case "piLsResult":
          return { case: "piLsResult", value: IP(e2.value, t2, r2) };
        case "conversationSearchResult":
          return { case: "conversationSearchResult", value: hw(e2.value, t2, r2) };
        case "agentStoreConflictResult":
          return { case: "agentStoreConflictResult", value: OR(e2.value, t2, r2) };
        case "miniSweAgentBashResult":
          return { case: "miniSweAgentBashResult", value: DA(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
      var n2;
    }
    function pq(e2, t2) {
      return { _privacyMode: t2, request: void 0 !== e2.request ? gq(e2.request, t2) : void 0 };
    }
    function mq(e2, t2, r2) {
      return new UM.Mq({ request: void 0 !== e2.request ? wq(e2.request, t2, r2) : void 0 });
    }
    function hq(e2, t2) {
      return { _privacyMode: t2, response: void 0 !== e2.response ? _q(e2.response, t2) : void 0 };
    }
    function fq(e2, t2, r2) {
      return new UM.S1({ response: void 0 !== e2.response ? Sq(e2.response, t2, r2) : void 0 });
    }
    function gq(e2, t2) {
      return { _privacyMode: t2, request: yq(e2.request, t2) };
    }
    function yq(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "preCompact":
          return { case: "preCompact", value: jR(e2.value, t2) };
        case "subagentStart":
          return { case: "subagentStart", value: WR(e2.value, t2) };
        case "subagentStop":
          return { case: "subagentStop", value: ZR(e2.value, t2) };
        case "preToolUse":
          return { case: "preToolUse", value: gB(e2.value, t2) };
        case "postToolUse":
          return { case: "postToolUse", value: _B(e2.value, t2) };
        case "postToolUseFailure":
          return { case: "postToolUseFailure", value: EB(e2.value, t2) };
        case "beforeSubmitPrompt":
          return { case: "beforeSubmitPrompt", value: rB(e2.value, t2) };
        case "afterAgentResponse":
          return { case: "afterAgentResponse", value: iB(e2.value, t2) };
        case "afterAgentThought":
          return { case: "afterAgentThought", value: lB(e2.value, t2) };
        case "stop":
          return { case: "stop", value: pB(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function wq(e2, t2, r2) {
      return new UM.Kw({ request: vq(e2.request, t2, r2) });
    }
    function vq(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "preCompact":
          return { case: "preCompact", value: GR(e2.value, t2, r2) };
        case "subagentStart":
          return { case: "subagentStart", value: VR(e2.value, t2, r2) };
        case "subagentStop":
          return { case: "subagentStop", value: XR(e2.value, t2, r2) };
        case "preToolUse":
          return { case: "preToolUse", value: yB(e2.value, t2, r2) };
        case "postToolUse":
          return { case: "postToolUse", value: AB(e2.value, t2, r2) };
        case "postToolUseFailure":
          return { case: "postToolUseFailure", value: IB(e2.value, t2, r2) };
        case "beforeSubmitPrompt":
          return { case: "beforeSubmitPrompt", value: nB(e2.value, t2, r2) };
        case "afterAgentResponse":
          return { case: "afterAgentResponse", value: aB(e2.value, t2, r2) };
        case "afterAgentThought":
          return { case: "afterAgentThought", value: uB(e2.value, t2, r2) };
        case "stop":
          return { case: "stop", value: mB(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function _q(e2, t2) {
      return { _privacyMode: t2, response: Aq(e2.response, t2) };
    }
    function Aq(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "preCompact":
          return { case: "preCompact", value: HR(e2.value, t2) };
        case "subagentStart":
          return { case: "subagentStart", value: KR(e2.value, t2) };
        case "subagentStop":
          return { case: "subagentStop", value: eB(e2.value, t2) };
        case "preToolUse":
          return { case: "preToolUse", value: wB(e2.value, t2) };
        case "postToolUse":
          return { case: "postToolUse", value: SB(e2.value, t2) };
        case "postToolUseFailure":
          return { case: "postToolUseFailure", value: CB(e2.value, t2) };
        case "beforeSubmitPrompt":
          return { case: "beforeSubmitPrompt", value: sB(e2.value, t2) };
        case "afterAgentResponse":
          return { case: "afterAgentResponse", value: cB(e2.value, t2) };
        case "afterAgentThought":
          return { case: "afterAgentThought", value: dB(e2.value, t2) };
        case "stop":
          return { case: "stop", value: hB(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Sq(e2, t2, r2) {
      return new UM.w5({ response: bq(e2.response, t2, r2) });
    }
    function bq(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "preCompact":
          return { case: "preCompact", value: zR(e2.value, t2, r2) };
        case "subagentStart":
          return { case: "subagentStart", value: YR(e2.value, t2, r2) };
        case "subagentStop":
          return { case: "subagentStop", value: tB(e2.value, t2, r2) };
        case "preToolUse":
          return { case: "preToolUse", value: vB(e2.value, t2, r2) };
        case "postToolUse":
          return { case: "postToolUse", value: bB(e2.value, t2, r2) };
        case "postToolUseFailure":
          return { case: "postToolUseFailure", value: kB(e2.value, t2, r2) };
        case "beforeSubmitPrompt":
          return { case: "beforeSubmitPrompt", value: oB(e2.value, t2, r2) };
        case "afterAgentResponse":
          return { case: "afterAgentResponse", value: (e2.value, new QR.FW({})) };
        case "afterAgentThought":
          return { case: "afterAgentThought", value: (e2.value, new QR.H({})) };
        case "stop":
          return { case: "stop", value: fB(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    var Eq = r(54386);
    function Iq(e2, t2) {
      return { _privacyMode: t2, message: (0, n.cZ)(e2.message, n.po.CODE, "message", t2) };
    }
    function Cq(e2, t2) {
      return { _privacyMode: t2, blobId: e2.blobId };
    }
    function kq(e2, t2) {
      return { _privacyMode: t2, blobData: void 0 !== e2.blobData ? (0, n.Yz)(e2.blobData, n.po.CODE, "blob_data", t2) : void 0, error: void 0 !== e2.error ? Iq(e2.error, t2) : void 0 };
    }
    function xq(e2, t2) {
      return { _privacyMode: t2, blobId: e2.blobId, blobData: (0, n.Yz)(e2.blobData, n.po.CODE, "blob_data", t2) };
    }
    function Tq(e2, t2, r2) {
      const n2 = r2?.redactUnallowedFieldsInsteadOfThrowing ?? false, s2 = r2?.enforcing;
      return new Eq.Dj({ blobId: e2.blobId, blobData: e2.blobData.unwrap(t2, { redactUnallowedFieldsInsteadOfThrowing: n2, enforcing: s2 }) });
    }
    function Rq(e2, t2) {
      return { _privacyMode: t2, error: void 0 !== e2.error ? Iq(e2.error, t2) : void 0 };
    }
    function Bq(e2, t2) {
      return { _privacyMode: t2, id: e2.id, spanContext: void 0 !== e2.spanContext ? rq(e2.spanContext, t2) : void 0, message: Pq(e2.message, t2) };
    }
    function Pq(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "getBlobArgs":
          return { case: "getBlobArgs", value: Cq(e2.value, t2) };
        case "setBlobArgs":
          return { case: "setBlobArgs", value: xq(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
    function Jq(e2, t2, r2) {
      return new Eq.km({ id: e2.id, spanContext: void 0 !== e2.spanContext ? nq(e2.spanContext) : void 0, message: Mq(e2.message, t2, r2) });
    }
    function Mq(e2, t2, r2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "getBlobArgs":
          return { case: "getBlobArgs", value: (n2 = e2.value, new Eq.zn({ blobId: n2.blobId })) };
        case "setBlobArgs":
          return { case: "setBlobArgs", value: Tq(e2.value, t2, r2) };
        default:
          return { case: void 0, value: void 0 };
      }
      var n2;
    }
    function qq(e2, t2) {
      return { _privacyMode: t2, id: e2.id, message: Dq(e2.message, t2) };
    }
    function Dq(e2, t2) {
      if (!e2 || void 0 === e2.case) return { case: void 0, value: void 0 };
      switch (e2.case) {
        case "getBlobResult":
          return { case: "getBlobResult", value: kq(e2.value, t2) };
        case "setBlobResult":
          return { case: "setBlobResult", value: Rq(e2.value, t2) };
        default:
          return { case: void 0, value: void 0 };
      }
    }
  }