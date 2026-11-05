// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 2347 range:210699..211469
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2347: (e2, n2, t2) => {
    "use strict";
    const { Transform: a2 } = t2(2203), { Console: s2 } = t2(4236);
    e2.exports = class {
      constructor({ disableColors: e3 } = {}) {
        this.transform = new a2({ transform(e4, n3, t3) {
          t3(null, e4);
        } }), this.logger = new s2({ stdout: this.transform, inspectOptions: { colors: !e3 && !process.env.CI } });
      }
      format(e3) {
        const n3 = e3.map(({ method: e4, path: n4, data: { statusCode: t3 }, persist: a3, times: s3, timesInvoked: o2, origin: r }) => ({ Method: e4, Origin: r, Path: n4, "Status code": t3, Persistent: a3 ? "✅" : "❌", Invocations: o2, Remaining: a3 ? 1 / 0 : s3 - o2 }));
        return this.logger.table(n3), this.transform.read().toString();
      }
    };
  }