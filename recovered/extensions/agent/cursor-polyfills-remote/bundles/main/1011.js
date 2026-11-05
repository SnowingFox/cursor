// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 1011 range:35948..36412
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1011: (t2, r2, e2) => {
    var n2 = e2(4212).charAt, o2 = e2(2618), i2 = e2(3086), a2 = e2(3217), u2 = e2(6224), s2 = "String Iterator", c = i2.set, f = i2.getterFor(s2);
    a2(String, "String", function(t3) {
      c(this, { type: s2, string: o2(t3), index: 0 });
    }, function() {
      var t3, r3 = f(this), e3 = r3.string, o3 = r3.index;
      return o3 >= e3.length ? u2(void 0, true) : (t3 = n2(e3, o3), r3.index += t3.length, u2(t3, false));
    });
  }