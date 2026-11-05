// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 70144 range:10923279..10923664
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
70144: (e, t, r) => {
    "use strict";
    function n(e2) {
      return e2 instanceof Error ? { abortReasonType: "error", abortReasonName: e2.name, abortReasonMessage: e2.message } : "string" == typeof e2 ? { abortReasonType: "string", abortReasonMessage: e2 } : void 0 === e2 ? { abortReasonType: "undefined" } : { abortReasonType: typeof e2 };
    }
    r.d(t, { R: () => n });
  }