// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 38353 range:1189478..1190089
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
38353: (e, t, r) => {
    "use strict";
    r.d(t, { m: () => n });
    class n extends Error {
      name = "ProviderError";
      tryNextLink;
      constructor(e2, t2 = true) {
        let r2, o = true;
        "boolean" == typeof t2 ? (r2 = void 0, o = t2) : null != t2 && "object" == typeof t2 && (r2 = t2.logger, o = t2.tryNextLink ?? true), super(e2), this.tryNextLink = o, Object.setPrototypeOf(this, n.prototype), r2?.debug?.(`@smithy/property-provider ${o ? "->" : "(!)"} ${e2}`);
      }
      static from(e2, t2 = true) {
        return Object.assign(new this(e2.message, t2), e2);
      }
    }
  }