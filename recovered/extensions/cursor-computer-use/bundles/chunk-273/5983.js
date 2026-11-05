// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/273.js sha256:057ec17488f68f7434e12ce31e59180a7183ddc2aab226744d2893aed3fcf167
// module: 5983 range:46894..47210
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5983: (e, t, i) => {
  var a = i(512);
  e.exports = { create: function(e2, t2) {
    if (e2 instanceof (t2 = t2 || (0, eval)("this")).ArrayBuffer) {
      var n = i(2774);
      return new a(new n(e2, 0, e2.byteLength, true, t2));
    }
    var r = i(6702);
    return new a(new r(e2, 0, e2.length, true));
  } };
}