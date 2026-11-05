// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 4979 range:42712..43860
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4979: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(7751), a2 = i2(6980), o2 = i2(4913).f, l2 = i2(9297), h2 = i2(679), c2 = i2(3167), d2 = i2(2603), u2 = i2(5002), p2 = i2(8574), g2 = i2(3724), m2 = i2(6395), f2 = "DOMException", b2 = r2("Error"), v2 = r2(f2), y2 = function() {
      h2(this, w2);
      var t3 = arguments.length, e3 = d2(t3 < 1 ? void 0 : arguments[0]), i3 = d2(t3 < 2 ? void 0 : arguments[1], "Error"), s3 = new v2(e3, i3), n3 = new b2(e3);
      return n3.name = f2, o2(s3, "stack", a2(1, p2(n3.stack, 1))), c2(s3, this, y2), s3;
    }, w2 = y2.prototype = v2.prototype, x2 = "stack" in new b2(f2), A2 = "stack" in new v2(1, 2), _2 = v2 && g2 && Object.getOwnPropertyDescriptor(n2, f2), S2 = !(!_2 || _2.writable && _2.configurable), E2 = x2 && !S2 && !A2;
    s2({ global: true, constructor: true, forced: m2 || E2 }, { DOMException: E2 ? y2 : v2 });
    var C2 = r2(f2), T2 = C2.prototype;
    if (T2.constructor !== C2) {
      for (var M2 in m2 || o2(T2, "constructor", a2(1, C2)), u2) if (l2(u2, M2)) {
        var k2 = u2[M2], D2 = k2.s;
        l2(C2, D2) || o2(C2, D2, a2(6, k2.c));
      }
    }
  }