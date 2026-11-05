// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 4913 range:40106..41032
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4913: (t2, e2, i2) => {
    var s2 = i2(3724), n2 = i2(5917), r2 = i2(8686), a2 = i2(8551), o2 = i2(6969), l2 = TypeError, h2 = Object.defineProperty, c2 = Object.getOwnPropertyDescriptor, d2 = "enumerable", u2 = "configurable", p2 = "writable";
    e2.f = s2 ? r2 ? function(t3, e3, i3) {
      if (a2(t3), e3 = o2(e3), a2(i3), "function" == typeof t3 && "prototype" === e3 && "value" in i3 && p2 in i3 && !i3[p2]) {
        var s3 = c2(t3, e3);
        s3 && s3[p2] && (t3[e3] = i3.value, i3 = { configurable: u2 in i3 ? i3[u2] : s3[u2], enumerable: d2 in i3 ? i3[d2] : s3[d2], writable: false });
      }
      return h2(t3, e3, i3);
    } : h2 : function(t3, e3, i3) {
      if (a2(t3), e3 = o2(e3), a2(i3), n2) try {
        return h2(t3, e3, i3);
      } catch (t4) {
      }
      if ("get" in i3 || "set" in i3) throw new l2("Accessors not supported");
      return "value" in i3 && (t3[e3] = i3.value), t3;
    };
  }