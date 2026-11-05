// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1862 range:191142..191555
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1862: (e2, t2, A2) => {
    "use strict";
    const { UndiciError: n2 } = A2(7902);
    class r2 extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, r2), this.name = "MockNotMatchedError", this.message = e3 || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
      }
    }
    e2.exports = { MockNotMatchedError: r2 };
  }