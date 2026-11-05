// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 708 range:38807..39825
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
708: (e2, t2, A2) => {
    "use strict";
    const { createHash: n2 } = A2(7598), r2 = /"alg"\s*:\s*"[HERP]S(256|384)"/m, o2 = /"alg"\s*:\s*"EdDSA"/m, s = /"crv"\s*:\s*"Ed448"/m;
    e2.exports = { getAsyncKey: function(e3, t3, A3) {
      const n3 = e3(t3, A3);
      n3 && "function" == typeof n3.then && n3.then((e4) => {
        process.nextTick(() => A3(null, e4));
      }).catch(A3);
    }, ensurePromiseCallback: function(e3) {
      if ("function" == typeof e3) return [e3];
      let t3, A3;
      return [function(e4, n3) {
        return e4 ? A3(e4) : t3(n3);
      }, new Promise((e4, n3) => {
        t3 = e4, A3 = n3;
      })];
    }, hashToken: function(e3) {
      const t3 = e3.split(".", 1)[0], A3 = Buffer.from(t3, "base64").toString("utf-8");
      let i = null;
      if (A3.match(o2) && A3.match(s)) i = n2("shake256", { outputLength: 114 });
      else {
        const e4 = A3.match(r2);
        i = n2(`sha${e4 ? e4[1] : "512"}`);
      }
      return i.update(e3).digest("hex");
    } };
  }