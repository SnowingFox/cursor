// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 31831 range:5126387..5127667
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31831: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.createAbortErrorAndTimeoutInterceptor = function(e2, t2, s) {
      return (o) => async (i) => {
        const a = (function(e3, t3) {
          const n2 = e3.method.name, s2 = e3.url;
          if ("PrepareLocalFullSelfDrivingRun" === n2 || s2.includes("PrepareLocalFullSelfDrivingRun")) return Math.max(t3, r);
          return t3;
        })(i, s);
        let c, l = false;
        const u = new Promise((r2, s2) => {
          const o2 = e2();
          c = setTimeout(() => {
            l || n(() => t2(o2).then((e3) => {
              e3 && s2(new Error("Network disconnected"));
            }));
          }, a), i.signal && i.signal.addEventListener("abort", () => {
            clearTimeout(c), l || n(t2);
          });
        });
        try {
          const e3 = await Promise.race([o(i), u]);
          if (void 0 === e3) throw new Error("Network timeout");
          return l = true, clearTimeout(c), e3;
        } catch (e3) {
          throw clearTimeout(c), n(t2), e3;
        }
      };
    }, t.wrapCallbackInTryCatch = n;
    const r = 12e4;
    function n(e2) {
      try {
        return e2();
      } catch (e3) {
        return false;
      }
    }
  }