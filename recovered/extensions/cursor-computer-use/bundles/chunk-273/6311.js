// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/273.js sha256:057ec17488f68f7434e12ce31e59180a7183ddc2aab226744d2893aed3fcf167
// module: 6311 range:47212..47725
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6311: (e, t, i) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.fromBuffer = t.fromStream = t.EndOfStreamError = void 0;
  const a = i(8563), n = i(2457);
  var r = i(690);
  Object.defineProperty(t, "EndOfStreamError", { enumerable: true, get: function() {
    return r.EndOfStreamError;
  } }), t.fromStream = function(e2, t2) {
    return t2 = t2 || {}, new a.ReadStreamTokenizer(e2, t2);
  }, t.fromBuffer = function(e2, t2) {
    return new n.BufferTokenizer(e2, t2);
  };
}