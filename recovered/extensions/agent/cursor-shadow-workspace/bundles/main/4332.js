// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 4332 range:396667..397099
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4332: (e2) => {
    "use strict";
    const A2 = { pronoun: "it", is: "is", was: "was", this: "this" }, t2 = { pronoun: "they", is: "are", was: "were", this: "these" };
    e2.exports = class {
      constructor(e3, A3) {
        this.singular = e3, this.plural = A3;
      }
      pluralize(e3) {
        const n2 = 1 === e3;
        return { ...n2 ? A2 : t2, count: e3, noun: n2 ? this.singular : this.plural };
      }
    };
  }