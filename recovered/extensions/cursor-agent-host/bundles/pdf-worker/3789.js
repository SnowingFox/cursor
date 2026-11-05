// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 3789 range:27333..28010
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3789: (t2, e2, i2) => {
    var s2 = i2(9306), n2 = i2(8551), r2 = i2(9565), a2 = i2(1291), o2 = i2(1767), l2 = "Invalid size", h2 = RangeError, c2 = TypeError, d2 = Math.max, u2 = function(t3, e3) {
      this.set = t3, this.size = d2(e3, 0), this.has = s2(t3.has), this.keys = s2(t3.keys);
    };
    u2.prototype = { getIterator: function() {
      return o2(n2(r2(this.keys, this.set)));
    }, includes: function(t3) {
      return r2(this.has, this.set, t3);
    } }, t2.exports = function(t3) {
      n2(t3);
      var e3 = +t3.size;
      if (e3 != e3) throw new c2(l2);
      var i3 = a2(e3);
      if (i3 < 0) throw new h2(l2);
      return new u2(t3, i3);
    };
  }