// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
// module: 7566 range:57759..58346
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7566: (t2, e2, i2) => {
    var s2 = i2(6840), n2 = i2(9504), r2 = i2(655), a2 = i2(2812), o2 = URLSearchParams, l2 = o2.prototype, h2 = n2(l2.getAll), c2 = n2(l2.has), d2 = new o2("a=1");
    !d2.has("a", 2) && d2.has("a", void 0) || s2(l2, "has", function(t3) {
      var e3 = arguments.length, i3 = e3 < 2 ? void 0 : arguments[1];
      if (e3 && void 0 === i3) return c2(this, t3);
      var s3 = h2(this, t3);
      a2(e3, 1);
      for (var n3 = r2(i3), o3 = 0; o3 < s3.length; ) if (s3[o3++] === n3) return true;
      return false;
    }, { enumerable: true, unsafe: true });
  }