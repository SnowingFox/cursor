// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5288 range:1231105..1231537
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5288: (t2) => {
    "use strict";
    const e2 = { pronoun: "it", is: "is", was: "was", this: "this" }, r2 = { pronoun: "they", is: "are", was: "were", this: "these" };
    t2.exports = class {
      constructor(t3, e3) {
        this.singular = t3, this.plural = e3;
      }
      pluralize(t3) {
        const n2 = 1 === t3;
        return { ...n2 ? e2 : r2, count: t3, noun: n2 ? this.singular : this.plural };
      }
    };
  }