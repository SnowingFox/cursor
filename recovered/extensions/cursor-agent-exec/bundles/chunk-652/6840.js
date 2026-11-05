// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 6840 range:53872..54471
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6840: (t2, e2, i2) => {
    var s2 = i2(4901), n2 = i2(4913), r2 = i2(283), a2 = i2(9433);
    t2.exports = function(t3, e3, i3, o2) {
      o2 || (o2 = {});
      var l2 = o2.enumerable, h2 = void 0 !== o2.name ? o2.name : e3;
      if (s2(i3) && r2(i3, h2, o2), o2.global) l2 ? t3[e3] = i3 : a2(e3, i3);
      else {
        try {
          o2.unsafe ? t3[e3] && (l2 = true) : delete t3[e3];
        } catch (t4) {
        }
        l2 ? t3[e3] = i3 : n2.f(t3, e3, { value: i3, enumerable: false, configurable: !o2.nonConfigurable, writable: !o2.nonWritable });
      }
      return t3;
    };
  }