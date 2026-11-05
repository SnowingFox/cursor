// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 31774 range:5094277..5095108
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31774: (e, t, r) => {
    "use strict";
    r.d(t, { g: () => i });
    var n = r(56151), s = r(6688), o = r(83360);
    function i(e2, t2) {
      return (r2, i2) => {
        const a = (function(e3) {
          const t3 = e3.runOptions.conversationId;
          return { conversationId: t3, composerId: e3.runOptions.conversationGroupId ?? t3, attemptRequestId: e3.attemptRequestId, originalRequestId: e3.originalRequestId, modelId: e3.requestedModel.modelId, requestedModel: e3.requestedModel };
        })(i2), c = (0, n.Am)((function(e3, t3, r3, n2) {
          return e3.with(o.ku, r3).with(o.A6, t3).with(o.Fn, n2).with(s.an, () => (0, s.qUv)(r3));
        })(r2, i2.runOptions.conversationId, i2.attemptRequestId, i2.requestedModel), a), l = void 0 === e2 ? c : e2(c, a);
        return (0, n.qo)(l, t2);
      };
    }
  }