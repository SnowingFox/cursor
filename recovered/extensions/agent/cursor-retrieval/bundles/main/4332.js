// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 4332 range:702734..703166
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4332: (e2) => {
    "use strict";
    const a2 = { pronoun: "it", is: "is", was: "was", this: "this" }, n2 = { pronoun: "they", is: "are", was: "were", this: "these" };
    e2.exports = class {
      constructor(e3, a3) {
        this.singular = e3, this.plural = a3;
      }
      pluralize(e3) {
        const t2 = 1 === e3;
        return { ...t2 ? a2 : n2, count: e3, noun: t2 ? this.singular : this.plural };
      }
    };
  }