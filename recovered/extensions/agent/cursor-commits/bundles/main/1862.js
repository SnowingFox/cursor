// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 1862 range:184902..185315
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1862: (e2, n2, a2) => {
    "use strict";
    const { UndiciError: t2 } = a2(7902);
    class s2 extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, s2), this.name = "MockNotMatchedError", this.message = e3 || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
      }
    }
    e2.exports = { MockNotMatchedError: s2 };
  }