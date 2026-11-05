// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4546 range:1172523..1172936
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4546: (t2, e2, r2) => {
    "use strict";
    const { UndiciError: n2 } = r2(8762);
    class s2 extends n2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, s2), this.name = "MockNotMatchedError", this.message = t3 || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
      }
    }
    t2.exports = { MockNotMatchedError: s2 };
  }