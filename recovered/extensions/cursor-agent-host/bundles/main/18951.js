// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 18951 range:4356057..4357524
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
18951: (e, t, r) => {
    "use strict";
    r.d(t, { DC: () => s.D, DS: () => l, P7: () => o.P7, ko: () => a, tY: () => i, yj: () => o.yj });
    var n = r(9639), s = r(28780), o = r(66608);
    function i(e2) {
      switch (e2.action.case) {
        case "userMessageAction":
        case "subscriptionNotificationAction":
        case "resumeAction":
        case "executePlanAction":
        case "backgroundTaskCompletionAction":
        case "asyncAskQuestionCompletionAction":
          return void (e2.action.value.requestContext = void 0);
        default:
          return;
      }
    }
    function a(e2, t2) {
      if (!(0, o.PJ)(t2)) return;
      const r2 = (0, s.D)(e2);
      void 0 !== r2 && (0, o.P7)(r2, t2);
    }
    function c(e2, t2, r2) {
      return { async execute(n2, s2, i2) {
        const a2 = await e2.execute(n2, s2, i2);
        return "success" === a2.result.case && void 0 !== a2.result.value.requestContext && ((0, o.P7)(a2.result.value.requestContext, t2), r2?.(a2.result.value.requestContext)), a2;
      } };
    }
    function l(e2, t2, r2) {
      if (!(0, o.PJ)(t2) && void 0 === r2) return e2;
      const s2 = (function(e3) {
        for (const [t3] of e3.entries()) if (t3.symbol === n.MZM.symbol) {
          const t4 = e3.get(n.MZM);
          return "function" == typeof t4?.execute ? t4 : void 0;
        }
      })(e2);
      return void 0 === s2 ? e2 : new n.dwX(e2, [(0, n.VNS)(n.MZM, c(s2, t2, r2))]);
    }
  }