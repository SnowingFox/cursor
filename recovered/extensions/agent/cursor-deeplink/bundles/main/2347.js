// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2347 range:226952..227722
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2347: (e2, t2, A2) => {
    "use strict";
    const { Transform: n2 } = A2(2203), { Console: r2 } = A2(4236);
    e2.exports = class {
      constructor({ disableColors: e3 } = {}) {
        this.transform = new n2({ transform(e4, t3, A3) {
          A3(null, e4);
        } }), this.logger = new r2({ stdout: this.transform, inspectOptions: { colors: !e3 && !process.env.CI } });
      }
      format(e3) {
        const t3 = e3.map(({ method: e4, path: t4, data: { statusCode: A3 }, persist: n3, times: r3, timesInvoked: o2, origin: s }) => ({ Method: e4, Origin: s, Path: t4, "Status code": A3, Persistent: n3 ? "✅" : "❌", Invocations: o2, Remaining: n3 ? 1 / 0 : r3 - o2 }));
        return this.logger.table(t3), this.transform.read().toString();
      }
    };
  }