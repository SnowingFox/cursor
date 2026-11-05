// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3621 range:973192..973647
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3621: (t2, e2, r2) => {
    "use strict";
    function n2() {
      return { get(t3) {
        return t3.id in this ? this[t3.id] : t3.defaultValue;
      }, set(t3, e3) {
        return this[t3.id] = e3, this;
      }, delete(t3) {
        return delete this[t3.id], this;
      } };
    }
    function s2(t3, e3) {
      return { id: Symbol(null == e3 ? void 0 : e3.description), defaultValue: t3 };
    }
    r2.d(e2, { k: () => n2, n: () => s2 });
  }