// @recovered-by cursor-re
// artifact: app/extensions/cursor-browser-automation/dist/928.js sha256:e04ed350b40bd579ab3a39967750106d673508f05e9f3a77bfeb2f4eca08d90f
// module: 9928 range:172035..172898
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9928: (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { default: () => i });
  var n = r(1182);
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