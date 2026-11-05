// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 1862 range:459885..460298
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1862: (e2, a2, n2) => {
    "use strict";
    const { UndiciError: t2 } = n2(7902);
    class s2 extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, s2), this.name = "MockNotMatchedError", this.message = e3 || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
      }
    }
    e2.exports = { MockNotMatchedError: s2 };
  }