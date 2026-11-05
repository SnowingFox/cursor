// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1831 range:609366..610666
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1831: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.createAbortErrorAndTimeoutInterceptor = function(t3, e3, s2) {
      return (i2) => async (o2) => {
        const a = (function(t4, e4) {
          const n3 = t4.method.name, s3 = t4.url;
          if ("PrepareLocalFullSelfDrivingRun" === n3 || s3.includes("PrepareLocalFullSelfDrivingRun")) return Math.max(e4, r2);
          return e4;
        })(o2, s2);
        let u, c = false;
        const l = new Promise((r3, s3) => {
          const i3 = t3();
          u = setTimeout(() => {
            c || n2(() => e3(i3).then((t4) => {
              t4 && s3(new Error("Network disconnected"));
            }));
          }, a), o2.signal && o2.signal.addEventListener("abort", () => {
            clearTimeout(u), c || n2(e3);
          });
        });
        try {
          const t4 = await Promise.race([i2(o2), l]);
          if (void 0 === t4) throw new Error("Network timeout");
          return c = true, clearTimeout(u), t4;
        } catch (t4) {
          throw clearTimeout(u), n2(e3), t4;
        }
      };
    }, e2.wrapCallbackInTryCatch = n2;
    const r2 = 12e4;
    function n2(t3) {
      try {
        return t3();
      } catch (t4) {
        return false;
      }
    }
  }