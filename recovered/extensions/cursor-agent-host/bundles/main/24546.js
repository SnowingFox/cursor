// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 24546 range:4517748..4518153
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
24546: (e, t, r) => {
    "use strict";
    const { UndiciError: n } = r(48762);
    class s extends n {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, s), this.name = "MockNotMatchedError", this.message = e2 || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
      }
    }
    e.exports = { MockNotMatchedError: s };
  }