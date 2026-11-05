// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 22189 range:4444819..4445572
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22189: (e, t, r) => {
    "use strict";
    r.d(t, { G: () => o, V: () => s });
    var n = r(70569);
    function s(e2) {
      return 401 === e2 || 403 === e2;
    }
    function o(e2, t2) {
      return async (r2, o2) => {
        const i = await t2.getApiKey(), a = await e2(r2, (0, n.ld)(o2, i));
        if (!s(a.status) || !(function(e3) {
          if (null == e3 || "string" == typeof e3) return true;
          if ("undefined" != typeof ReadableStream && e3 instanceof ReadableStream) return false;
          return true;
        })(o2?.body)) return a;
        const c = await t2.refreshAfterRejection(i);
        return void 0 === c || c === i ? a : (a.body?.cancel().catch((e3) => {
        }), e2(r2, (0, n.ld)(o2, c)));
      };
    }
  }