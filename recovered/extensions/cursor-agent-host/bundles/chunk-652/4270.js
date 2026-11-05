// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
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