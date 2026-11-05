// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 38353 range:3091034..3091645
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
        let r2, s = true;
        "boolean" == typeof t2 ? (r2 = void 0, s = t2) : null != t2 && "object" == typeof t2 && (r2 = t2.logger, s = t2.tryNextLink ?? true), super(e2), this.tryNextLink = s, Object.setPrototypeOf(this, n.prototype), r2?.debug?.(`@smithy/property-provider ${s ? "->" : "(!)"} ${e2}`);
      }
      static from(e2, t2 = true) {
        return Object.assign(new this(e2.message, t2), e2);
      }
    }
  }