// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 4603 range:35151..36048
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4603: (t2, e2, i2) => {
    var s2 = i2(6840), n2 = i2(9504), r2 = i2(655), a2 = i2(2812), o2 = URLSearchParams, l2 = o2.prototype, h2 = n2(l2.append), c2 = n2(l2.delete), d2 = n2(l2.forEach), u2 = n2([].push), p2 = new o2("a=1&a=2&b=3");
    p2.delete("a", 1), p2.delete("b", void 0), p2 + "" != "a=2" && s2(l2, "delete", function(t3) {
      var e3 = arguments.length, i3 = e3 < 2 ? void 0 : arguments[1];
      if (e3 && void 0 === i3) return c2(this, t3);
      var s3 = [];
      d2(this, function(t4, e4) {
        u2(s3, { key: e4, value: t4 });
      }), a2(e3, 1);
      for (var n3, o3 = r2(t3), l3 = r2(i3), p3 = 0, g2 = 0, m2 = false, f2 = s3.length; p3 < f2; ) n3 = s3[p3++], m2 || n3.key === o3 ? (m2 = true, c2(this, n3.key)) : g2++;
      for (; g2 < f2; ) (n3 = s3[g2++]).key === o3 && n3.value === l3 || h2(this, n3.key, n3.value);
    }, { enumerable: true, unsafe: true });
  }