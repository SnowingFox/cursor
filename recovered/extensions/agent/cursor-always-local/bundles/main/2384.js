// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2384 range:704229..705413
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2384: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.AUTH_INIT_POLL_MS = e2.AUTH_INIT_TIMEOUT_MS = void 0, e2.pollForAuthValues = async function(t3, r2, n2) {
      const s2 = Date.now();
      let i2, o2, a, u, c = 0;
      for (; void 0 === a || void 0 === u; ) {
        try {
          a = t3.getCreds(), u = t3.getToken();
        } catch (t4) {
          n2?.error("Failed to get auth values", t4);
        }
        c++, void 0 === i2 && void 0 !== a && (i2 = c), void 0 === o2 && void 0 !== u && (o2 = c);
        const l2 = Date.now() - s2;
        if (l2 > e2.AUTH_INIT_TIMEOUT_MS) {
          r2.onTimeout({ hasCreds: void 0 !== a, hasToken: void 0 !== u, pollCount: c, elapsedMs: l2 });
          break;
        }
        void 0 !== a && void 0 !== u || await new Promise((t4) => setTimeout(t4, e2.AUTH_INIT_POLL_MS));
      }
      const l = Date.now() - s2;
      void 0 !== i2 && void 0 !== o2 && i2 < o2 && r2.onRaceConditionPrevented({ credsReadyAtPoll: i2, tokenReadyAtPoll: o2, pollCount: c, elapsedMs: l });
      return { creds: a, token: u };
    }, e2.AUTH_INIT_TIMEOUT_MS = 2e3, e2.AUTH_INIT_POLL_MS = 200;
  }