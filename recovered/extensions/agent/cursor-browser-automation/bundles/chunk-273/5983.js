// @recovered-by cursor-re
// artifact: app/extensions/cursor-browser-automation/dist/273.js sha256:ab64b3e34dc97e1e5c85ecdaec9168b4137705ddedfa3c341bca35d6a42d36bc
// module: 5983 range:49274..49590
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5983: (e, t, i) => {
  var a = i(512);
  e.exports = { create: function(e2, t2) {
    if (e2 instanceof (t2 = t2 || (0, eval)("this")).ArrayBuffer) {
      var n = i(2774);
      return new a(new n(e2, 0, e2.byteLength, true, t2));
    }
    var r = i(4321);
    return new a(new r(e2, 0, e2.length, true));
  } };
}