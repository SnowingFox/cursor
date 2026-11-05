// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 5558 range:110242..110910
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5558: (t2, r2, e2) => {
    var n2 = e2(4977), o2 = e2(3770), i2 = e2(9944), a2 = e2(6744), u2 = e2(6002), s2 = "Invalid size", c = RangeError, f = TypeError, h = Math.max, l = function(t3, r3) {
      this.set = t3, this.size = h(r3, 0), this.has = n2(t3.has), this.keys = n2(t3.keys);
    };
    l.prototype = { getIterator: function() {
      return u2(o2(i2(this.keys, this.set)));
    }, includes: function(t3) {
      return i2(this.has, this.set, t3);
    } }, t2.exports = function(t3) {
      o2(t3);
      var r3 = +t3.size;
      if (r3 != r3) throw new f(s2);
      var e3 = a2(r3);
      if (e3 < 0) throw new c(s2);
      return new l(t3, e3);
    };
  }