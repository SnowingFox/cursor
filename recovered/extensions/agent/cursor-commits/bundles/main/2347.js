// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 2347 range:206642..207414
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2347: (e2, n2, a2) => {
    "use strict";
    const { Transform: t2 } = a2(2203), { Console: s2 } = a2(4236);
    e2.exports = class {
      constructor({ disableColors: e3 } = {}) {
        this.transform = new t2({ transform(e4, n3, a3) {
          a3(null, e4);
        } }), this.logger = new s2({ stdout: this.transform, inspectOptions: { colors: !e3 && !process.env.CI } });
      }
      format(e3) {
        const n3 = e3.map(({ method: e4, path: n4, data: { statusCode: a3 }, persist: t3, times: s3, timesInvoked: o2, origin: r2 }) => ({ Method: e4, Origin: r2, Path: n4, "Status code": a3, Persistent: t3 ? "✅" : "❌", Invocations: o2, Remaining: t3 ? 1 / 0 : s3 - o2 }));
        return this.logger.table(n3), this.transform.read().toString();
      }
    };
  }