// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 95750 range:14557850..14558101
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
95750: (e, t, r) => {
    "use strict";
    function n(e2) {
      return { run: (t2, r2, n2) => (async function* () {
        const s = e2.run(t2, r2, n2);
        n2.onNetworkStarted?.(), yield* s;
      })() };
    }
    r.d(t, { u: () => n });
  }