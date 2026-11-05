// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 4270 range:31202..31658
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4270: (t2, e2, i2) => {
    var s2 = i2(9565), n2 = i2(4901), r2 = i2(34), a2 = TypeError;
    t2.exports = function(t3, e3) {
      var i3, o2;
      if ("string" === e3 && n2(i3 = t3.toString) && !r2(o2 = s2(i3, t3))) return o2;
      if (n2(i3 = t3.valueOf) && !r2(o2 = s2(i3, t3))) return o2;
      if ("string" !== e3 && n2(i3 = t3.toString) && !r2(o2 = s2(i3, t3))) return o2;
      throw new a2("Can't convert object to primitive value");
    };
  }