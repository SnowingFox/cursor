// @recovered-by cursor-re
// artifact: app/extensions/cursor-browser-automation/dist/273.js sha256:ab64b3e34dc97e1e5c85ecdaec9168b4137705ddedfa3c341bca35d6a42d36bc
// module: 6311 range:49592..50105
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
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