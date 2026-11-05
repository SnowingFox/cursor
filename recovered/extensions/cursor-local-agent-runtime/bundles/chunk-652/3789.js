// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 3789 range:26967..27644
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