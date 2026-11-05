// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/928.js sha256:1e34f3da2dac0c414cd02b42da502ab9dbc42f1b80782b7c58dc88e4d9ebf8e0
// module: 69928 range:46347..47212
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69928: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { default: () => i });
  var n = r(91182);
  function a(e2) {
    return "number" == typeof e2 ? e2 : e2 instanceof Uint8Array ? e2[0] : "string" == typeof e2[0] ? parseInt(e2[0]) : e2[0];
  }
  function i() {
    return { mime: "image/tiff", encode: (e2) => {
      const t2 = n.encodeImage(e2.data, e2.width, e2.height);
      return Buffer.from(t2);
    }, decode: (e2) => {
      const t2 = n.decode(e2), r2 = t2[0];
      if (!r2) throw new Error("No page found in TIFF");
      if (!r2.t256) throw new Error("No image width found in TIFF");
      if (!r2.t257) throw new Error("No image height found in TIFF");
      t2.forEach((t3) => {
        n.decodeImage(e2, t3);
      });
      const i2 = n.toRGBA8(r2);
      return { data: Buffer.from(i2), width: a(r2.t256), height: a(r2.t257) };
    } };
  }
}