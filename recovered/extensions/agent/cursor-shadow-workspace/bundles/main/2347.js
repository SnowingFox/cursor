// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 2347 range:206508..207278
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2347: (e2, A2, t2) => {
    "use strict";
    const { Transform: n2 } = t2(2203), { Console: r2 } = t2(4236);
    e2.exports = class {
      constructor({ disableColors: e3 } = {}) {
        this.transform = new n2({ transform(e4, A3, t3) {
          t3(null, e4);
        } }), this.logger = new r2({ stdout: this.transform, inspectOptions: { colors: !e3 && !process.env.CI } });
      }
      format(e3) {
        const A3 = e3.map(({ method: e4, path: A4, data: { statusCode: t3 }, persist: n3, times: r3, timesInvoked: o2, origin: s }) => ({ Method: e4, Origin: s, Path: A4, "Status code": t3, Persistent: n3 ? "✅" : "❌", Invocations: o2, Remaining: n3 ? 1 / 0 : r3 - o2 }));
        return this.logger.table(A3), this.transform.read().toString();
      }
    };
  }