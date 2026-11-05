// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/273.js sha256:918321c092763b0f5509b45d1560ac236164a596e0ab5a603460d95abe18903b
// module: 76311 range:52260..52776
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
76311: (e, t, i) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.fromBuffer = t.fromStream = t.EndOfStreamError = void 0;
  const a = i(58563), n = i(22457);
  var r = i(690);
  Object.defineProperty(t, "EndOfStreamError", { enumerable: true, get: function() {
    return r.EndOfStreamError;
  } }), t.fromStream = function(e2, t2) {
    return t2 = t2 || {}, new a.ReadStreamTokenizer(e2, t2);
  }, t.fromBuffer = function(e2, t2) {
    return new n.BufferTokenizer(e2, t2);
  };
}