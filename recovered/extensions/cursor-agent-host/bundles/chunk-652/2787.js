// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
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