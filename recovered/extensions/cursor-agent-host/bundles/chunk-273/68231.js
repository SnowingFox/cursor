// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/273.js sha256:918321c092763b0f5509b45d1560ac236164a596e0ab5a603460d95abe18903b
// module: 68231 range:49507..50415
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
68231: (e) => {
  function t(e2) {
    return parseInt(e2, 10);
  }
  function i(e2, i2) {
    e2 = e2.map(t), i2 = i2.map(t);
    var a2 = e2[0], n2 = e2[1] - 1, r = e2[2], o = i2[0], s = i2[1], f = i2[2];
    return Date.UTC(a2, n2, r, o, s, f, 0) / 1e3;
  }
  function a(e2) {
    var a2 = e2.substr(0, 10).split("-"), n2 = e2.substr(11, 8).split(":"), r = e2.substr(19, 6).split(":").map(t), o = 3600 * r[0] + 60 * r[1], s = i(a2, n2);
    if ("number" == typeof (s -= o) && !isNaN(s)) return s;
  }
  function n(e2) {
    var t2 = e2.split(" "), a2 = i(t2[0].split(":"), t2[1].split(":"));
    if ("number" == typeof a2 && !isNaN(a2)) return a2;
  }
  e.exports = { parseDateWithSpecFormat: n, parseDateWithTimezoneFormat: a, parseExifDate: function(e2) {
    var t2 = 19 === e2.length && ":" === e2.charAt(4);
    return 25 === e2.length && "T" === e2.charAt(10) ? a(e2) : t2 ? n(e2) : void 0;
  } };
}