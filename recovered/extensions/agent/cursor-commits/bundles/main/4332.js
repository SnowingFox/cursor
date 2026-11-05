// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 4332 range:396979..397411
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4332: (e2) => {
    "use strict";
    const n2 = { pronoun: "it", is: "is", was: "was", this: "this" }, a2 = { pronoun: "they", is: "are", was: "were", this: "these" };
    e2.exports = class {
      constructor(e3, n3) {
        this.singular = e3, this.plural = n3;
      }
      pluralize(e3) {
        const t2 = 1 === e3;
        return { ...t2 ? n2 : a2, count: e3, noun: t2 ? this.singular : this.plural };
      }
    };
  }