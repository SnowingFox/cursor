// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 20060 range:47568..47968
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
20060: (A) => {
  "use strict";
  const e = { pronoun: "it", is: "is", was: "was", this: "this" }, t = { pronoun: "they", is: "are", was: "were", this: "these" };
  A.exports = class {
    constructor(A2, e2) {
      this.singular = A2, this.plural = e2;
    }
    pluralize(A2) {
      const r = 1 === A2;
      return { ...r ? e : t, count: A2, noun: r ? this.singular : this.plural };
    }
  };
}