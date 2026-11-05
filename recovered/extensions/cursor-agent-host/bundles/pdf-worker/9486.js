// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 9486 range:82518..83602
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9486: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(9504), a2 = i2(3972), o2 = i2(4154), l2 = i2(5169), h2 = i2(2804), c2 = i2(944), d2 = h2.i2c, u2 = h2.i2cUrl, p2 = r2("".charAt), g2 = n2.Uint8Array, m2 = !g2 || !g2.prototype.toBase64 || !(function() {
      try {
        new g2().toBase64(null);
      } catch (t3) {
        return true;
      }
    })();
    g2 && s2({ target: "Uint8Array", proto: true, forced: m2 }, { toBase64: function() {
      var t3 = o2(this), e3 = arguments.length ? a2(arguments[0]) : void 0, i3 = "base64" === c2(e3) ? d2 : u2, s3 = !!e3 && !!e3.omitPadding;
      l2(this.buffer);
      for (var n3, r3 = "", h3 = 0, g3 = t3.length, m3 = function(t4) {
        return p2(i3, n3 >> 6 * t4 & 63);
      }; h3 + 2 < g3; h3 += 3) n3 = (t3[h3] << 16) + (t3[h3 + 1] << 8) + t3[h3 + 2], r3 += m3(3) + m3(2) + m3(1) + m3(0);
      return h3 + 2 === g3 ? (n3 = (t3[h3] << 16) + (t3[h3 + 1] << 8), r3 += m3(3) + m3(2) + m3(1) + (s3 ? "" : "=")) : h3 + 1 === g3 && (n3 = t3[h3] << 16, r3 += m3(3) + m3(2) + (s3 ? "" : "==")), r3;
    } });
  }