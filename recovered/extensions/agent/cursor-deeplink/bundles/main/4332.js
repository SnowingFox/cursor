// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 4332 range:500013..500445
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4332: (e2) => {
    "use strict";
    const t2 = { pronoun: "it", is: "is", was: "was", this: "this" }, A2 = { pronoun: "they", is: "are", was: "were", this: "these" };
    e2.exports = class {
      constructor(e3, t3) {
        this.singular = e3, this.plural = t3;
      }
      pluralize(e3) {
        const n2 = 1 === e3;
        return { ...n2 ? t2 : A2, count: e3, noun: n2 ? this.singular : this.plural };
      }
    };
  }