// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 91693 range:13746869..13749870
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
91693: (e, t, r) => {
    "use strict";
    r.d(t, { Kg: () => p, OC: () => h, Sd: () => c, Ym: () => a, fP: () => f, lw: () => m });
    var n = r(60525), s = r(90417), o = r(52883), i = r(19209);
    class a extends Error {
      constructor() {
        super("delivery and replaceQueuedTurnId are only valid on userMessageAction"), this.code = "SEND_NOW_REQUIRES_USER_MESSAGE", this.name = "AgentHostSendNowRequiresUserMessageError";
      }
    }
    function c(e2) {
      return e2.delivery === n.CD.NOW;
    }
    function l(e2) {
      return "steer" === e2?.() ? "steer" : "interrupt";
    }
    function u(e2) {
      return "userMessageAction" === e2?.action.case ? e2.action.value.userMessage : void 0;
    }
    function d(e2, t2, r2, n2) {
      if (c(t2) && "steer" === l(r2)) {
        const r3 = u(n2) ?? u(t2.action);
        return (0, s.Gj)(r3?.text ?? "", r3?.messageId, (0, i.kr)(e2) ?? "");
      }
      return n2 ?? t2.action;
    }
    function p(e2, t2, r2) {
      if ("steer" !== l(r2)) return;
      const s2 = (0, i.xL)(e2, d(e2, t2, r2), "host");
      if ("steer" === s2.kind) return { turnId: s2.turnId, deliveredAs: n.CD.STEERED };
      if ("reject" === s2.kind) throw new Error(`Agent host rejected context injection: ${s2.reason}`);
    }
    function m(e2) {
      return void 0 !== e2.delivery || void 0 !== e2.replaceQueuedTurnId && "" !== e2.replaceQueuedTurnId;
    }
    function h(e2) {
      const { session: t2, request: r2, turnId: s2, host: a2 } = e2, u2 = t2.turns.get(s2);
      if ("running" === u2?.state && !u2.cancelled) return { turnId: s2, deliveredAs: n.CD.QUEUE };
      if ("queued" !== u2?.state || u2.cancelled) return { turnId: "", deliveredAs: n.CD.UNSPECIFIED };
      if (!c(r2)) return { turnId: s2, deliveredAs: n.CD.QUEUE };
      if ("steer" === l(a2.getSendNowBehavior)) {
        const e3 = d(t2, r2, a2.getSendNowBehavior, u2.queuedAction), c2 = (0, i.xL)(t2, e3, "host");
        if ("steer" === c2.kind) return (0, o.VG)(t2, s2, "replaced by follow-up", { initiatedBy: n.TQ.FOLLOW_UP }), a2.emitSessionUpdated(t2), { turnId: c2.turnId, deliveredAs: n.CD.STEERED };
        if ("reject" === c2.kind) throw new Error(`Agent host rejected context injection: ${c2.reason}`);
      }
      const { runningTurnId: p2 } = (0, o.sN)(t2);
      return void 0 !== p2 && (0, o.ht)(t2, p2, "send now", { initiatedBy: n.TQ.FOLLOW_UP }), (0, o.AP)(t2, s2), a2.emitSessionUpdated(t2), { turnId: s2, deliveredAs: void 0 !== p2 ? n.CD.INTERRUPTED : n.CD.QUEUE };
    }
    async function f(e2) {
      const { ctx: t2, session: r2, request: s2, host: i2 } = e2, { runningTurnId: a2 } = (0, o.sN)(r2);
      void 0 !== a2 && ((0, o.ht)(r2, a2, "send now", { initiatedBy: n.TQ.FOLLOW_UP }), i2.emitSessionUpdated(r2));
      const c2 = await i2.enqueueOrStartAction(t2, { ...s2, action: d(r2, s2, i2.getSendNowBehavior) }, { insertAtHead: true });
      return void 0 === a2 ? c2 : { turnId: c2.turnId, deliveredAs: n.CD.INTERRUPTED };
    }
  }