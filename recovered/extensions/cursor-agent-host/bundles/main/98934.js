// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 98934 range:15129602..15130189
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98934: (e, t, r) => {
    "use strict";
    r.d(t, { E: () => o, V: () => s });
    var n = r(17392);
    function s(e2) {
      if (!(e2 instanceof n.Yv)) return;
      const t2 = e2.displayInfo;
      return { kind: e2.kind, title: t2?.title, detail: t2?.detail, isRetryable: t2?.isRetryable, connectCode: t2?.connectCode, inferenceRequestErrorType: t2?.inferenceRequestErrorType, requestId: e2.requestId, errorDetails: t2?.errorDetails, action: e2 instanceof n.ao ? e2.action : void 0 };
    }
    function o(e2) {
      return e2 instanceof Error ? e2.message : String(e2);
    }
  }