// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 1862 range:184787..185200
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1862: (e2, A2, t2) => {
    "use strict";
    const { UndiciError: n2 } = t2(7902);
    class r2 extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, r2), this.name = "MockNotMatchedError", this.message = e3 || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
      }
    }
    e2.exports = { MockNotMatchedError: r2 };
  }