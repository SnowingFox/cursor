// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 49273 range:8170950..8171667
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49273: (e, t, r) => {
    "use strict";
    r.d(t, { H: () => o, l: () => s });
    var n = r(33002);
    const s = { schedule(e2, t2) {
      const [r2, s2] = (0, n.q6)().withTimeoutAndCancel(e2);
      let o2 = false;
      return r2.signal.addEventListener("abort", () => {
        o2 || t2();
      }, { once: true }), { dispose() {
        o2 = true, s2();
      } };
    } };
    function o(e2, t2, r2) {
      let n2, s2 = false;
      const o2 = () => {
        n2 = e2.schedule(t2, () => {
          r2().then(() => {
            s2 || o2();
          }, () => {
            s2 = true;
          });
        });
      };
      return o2(), { dispose() {
        s2 = true, n2?.dispose();
      } };
    }
  }