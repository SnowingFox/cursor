// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 65288 range:10328209..10328633
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
65288: (e) => {
    "use strict";
    const t = { pronoun: "it", is: "is", was: "was", this: "this" }, r = { pronoun: "they", is: "are", was: "were", this: "these" };
    e.exports = class {
      constructor(e2, t2) {
        this.singular = e2, this.plural = t2;
      }
      pluralize(e2) {
        const n = 1 === e2;
        return { ...n ? t : r, count: e2, noun: n ? this.singular : this.plural };
      }
    };
  }