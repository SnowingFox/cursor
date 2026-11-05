// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4332 range:404088..404520
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4332: (e2) => {
    "use strict";
    const n2 = { pronoun: "it", is: "is", was: "was", this: "this" }, t2 = { pronoun: "they", is: "are", was: "were", this: "these" };
    e2.exports = class {
      constructor(e3, n3) {
        this.singular = e3, this.plural = n3;
      }
      pluralize(e3) {
        const a2 = 1 === e3;
        return { ...a2 ? n2 : t2, count: e3, noun: a2 ? this.singular : this.plural };
      }
    };
  }