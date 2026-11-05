// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/273.js sha256:918321c092763b0f5509b45d1560ac236164a596e0ab5a603460d95abe18903b
// module: 15983 range:27256..27577
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
15983: (e, t, i) => {
  var a = i(90512);
  e.exports = { create: function(e2, t2) {
    if (e2 instanceof (t2 = t2 || (0, eval)("this")).ArrayBuffer) {
      var n = i(92774);
      return new a(new n(e2, 0, e2.byteLength, true, t2));
    }
    var r = i(14321);
    return new a(new r(e2, 0, e2.length, true));
  } };
}