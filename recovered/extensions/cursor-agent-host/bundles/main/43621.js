// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 43621 range:7760190..7760637
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
43621: (e, t, r) => {
    "use strict";
    function n() {
      return { get(e2) {
        return e2.id in this ? this[e2.id] : e2.defaultValue;
      }, set(e2, t2) {
        return this[e2.id] = t2, this;
      }, delete(e2) {
        return delete this[e2.id], this;
      } };
    }
    function s(e2, t2) {
      return { id: Symbol(null == t2 ? void 0 : t2.description), defaultValue: e2 };
    }
    r.d(t, { k: () => n, n: () => s });
  }