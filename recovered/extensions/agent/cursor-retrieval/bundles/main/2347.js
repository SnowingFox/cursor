// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 2347 range:481705..482477
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2347: (e2, a2, n2) => {
    "use strict";
    const { Transform: t2 } = n2(2203), { Console: s2 } = n2(4236);
    e2.exports = class {
      constructor({ disableColors: e3 } = {}) {
        this.transform = new t2({ transform(e4, a3, n3) {
          n3(null, e4);
        } }), this.logger = new s2({ stdout: this.transform, inspectOptions: { colors: !e3 && !process.env.CI } });
      }
      format(e3) {
        const a3 = e3.map(({ method: e4, path: a4, data: { statusCode: n3 }, persist: t3, times: s3, timesInvoked: o2, origin: r2 }) => ({ Method: e4, Origin: r2, Path: a4, "Status code": n3, Persistent: t3 ? "✅" : "❌", Invocations: o2, Remaining: t3 ? 1 / 0 : s3 - o2 }));
        return this.logger.table(a3), this.transform.read().toString();
      }
    };
  }