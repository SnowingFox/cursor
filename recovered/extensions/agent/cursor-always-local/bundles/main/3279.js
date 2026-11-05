// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3279 range:922323..923095
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3279: (t2, e2, r2) => {
    "use strict";
    const { Transform: n2 } = r2(2203), { Console: s2 } = r2(4236);
    t2.exports = class {
      constructor({ disableColors: t3 } = {}) {
        this.transform = new n2({ transform(t4, e3, r3) {
          r3(null, t4);
        } }), this.logger = new s2({ stdout: this.transform, inspectOptions: { colors: !t3 && !process.env.CI } });
      }
      format(t3) {
        const e3 = t3.map(({ method: t4, path: e4, data: { statusCode: r3 }, persist: n3, times: s3, timesInvoked: i2, origin: o2 }) => ({ Method: t4, Origin: o2, Path: e4, "Status code": r3, Persistent: n3 ? "✅" : "❌", Invocations: i2, Remaining: n3 ? 1 / 0 : s3 - i2 }));
        return this.logger.table(e3), this.transform.read().toString();
      }
    };
  }