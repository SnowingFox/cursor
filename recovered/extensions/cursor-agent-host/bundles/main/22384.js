// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 22384 range:4446706..4447861
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22384: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.AUTH_INIT_POLL_MS = t.AUTH_INIT_TIMEOUT_MS = void 0, t.pollForAuthValues = async function(e2, r, n) {
      const s = Date.now();
      let o, i, a, c, l = 0;
      for (; void 0 === a || void 0 === c; ) {
        try {
          a = e2.getCreds(), c = e2.getToken();
        } catch (e3) {
          n?.error("Failed to get auth values", e3);
        }
        l++, void 0 === o && void 0 !== a && (o = l), void 0 === i && void 0 !== c && (i = l);
        const u2 = Date.now() - s;
        if (u2 > t.AUTH_INIT_TIMEOUT_MS) {
          r.onTimeout({ hasCreds: void 0 !== a, hasToken: void 0 !== c, pollCount: l, elapsedMs: u2 });
          break;
        }
        void 0 !== a && void 0 !== c || await new Promise((e3) => setTimeout(e3, t.AUTH_INIT_POLL_MS));
      }
      const u = Date.now() - s;
      void 0 !== o && void 0 !== i && o < i && r.onRaceConditionPrevented({ credsReadyAtPoll: o, tokenReadyAtPoll: i, pollCount: l, elapsedMs: u });
      return { creds: a, token: c };
    }, t.AUTH_INIT_TIMEOUT_MS = 2e3, t.AUTH_INIT_POLL_MS = 200;
  }