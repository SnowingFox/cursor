// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1862 range:188978..189391
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1862: (e2, n2, t2) => {
    "use strict";
    const { UndiciError: a2 } = t2(7902);
    class s2 extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, s2), this.name = "MockNotMatchedError", this.message = e3 || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
      }
    }
    e2.exports = { MockNotMatchedError: s2 };
  }