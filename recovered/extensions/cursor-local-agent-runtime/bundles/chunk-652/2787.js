// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 2787 range:19631..20036
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2787: (t2, e2, i2) => {
    var s2 = i2(9297), n2 = i2(4901), r2 = i2(8981), a2 = i2(6119), o2 = i2(2211), l2 = a2("IE_PROTO"), h2 = Object, c2 = h2.prototype;
    t2.exports = o2 ? h2.getPrototypeOf : function(t3) {
      var e3 = r2(t3);
      if (s2(e3, l2)) return e3[l2];
      var i3 = e3.constructor;
      return n2(i3) && e3 instanceof i3 ? i3.prototype : e3 instanceof h2 ? c2 : null;
    };
  }