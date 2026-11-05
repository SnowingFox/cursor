// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 93279 range:14447666..14448425
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
93279: (e, t, r) => {
    "use strict";
    const { Transform: n } = r(2203), { Console: s } = r(64236);
    e.exports = class {
      constructor({ disableColors: e2 } = {}) {
        this.transform = new n({ transform(e3, t2, r2) {
          r2(null, e3);
        } }), this.logger = new s({ stdout: this.transform, inspectOptions: { colors: !e2 && !process.env.CI } });
      }
      format(e2) {
        const t2 = e2.map(({ method: e3, path: t3, data: { statusCode: r2 }, persist: n2, times: s2, timesInvoked: o, origin: i }) => ({ Method: e3, Origin: i, Path: t3, "Status code": r2, Persistent: n2 ? "✅" : "❌", Invocations: o, Remaining: n2 ? 1 / 0 : s2 - o }));
        return this.logger.table(t2), this.transform.read().toString();
      }
    };
  }