// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 33078 range:193872..194432
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33078: (A, e, t) => {
  "use strict";
  const { UndiciError: r } = t(38238), s = /* @__PURE__ */ Symbol.for("undici.error.UND_MOCK_ERR_MOCK_NOT_MATCHED");
  class o extends r {
    constructor(A2) {
      super(A2), Error.captureStackTrace(this, o), this.name = "MockNotMatchedError", this.message = A2 || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[s];
    }
    [s] = true;
  }
  A.exports = { MockNotMatchedError: o };
}