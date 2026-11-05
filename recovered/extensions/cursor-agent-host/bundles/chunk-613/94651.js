// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 94651 range:501012..501818
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
94651: (A, e, t) => {
  "use strict";
  const { Transform: r } = t(57075), { Console: s } = t(37540), o = process.versions.icu ? "✅" : "Y ", n = process.versions.icu ? "❌" : "N ";
  A.exports = class {
    constructor({ disableColors: A2 } = {}) {
      this.transform = new r({ transform(A3, e2, t2) {
        t2(null, A3);
      } }), this.logger = new s({ stdout: this.transform, inspectOptions: { colors: !A2 && !process.env.CI } });
    }
    format(A2) {
      const e2 = A2.map(({ method: A3, path: e3, data: { statusCode: t2 }, persist: r2, times: s2, timesInvoked: i, origin: a }) => ({ Method: A3, Origin: a, Path: e3, "Status code": t2, Persistent: r2 ? o : n, Invocations: i, Remaining: r2 ? 1 / 0 : s2 - i }));
      return this.logger.table(e2), this.transform.read().toString();
    }
  };
}