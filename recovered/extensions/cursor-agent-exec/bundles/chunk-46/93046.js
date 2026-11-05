// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/46.js sha256:d16c5e127f5dfd2c26327f95acab37bce39fb1530578971aa8efc4cb16600efe
// module: 93046 range:94780..95361
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
93046: (t, e, i) => {
  i.r(e), i.d(e, { default: () => n });
  var r = i(33058), s = i(36274);
  function n() {
    return { mime: "image/gif", encode: async (t2) => {
      const e2 = new s.BitmapImage(t2);
      s.GifUtil.quantizeDekker(e2, 256);
      const i2 = new s.GifFrame(t2), r2 = new s.GifCodec();
      return (await r2.encodeGif([i2], {})).buffer;
    }, decode: (t2) => {
      const e2 = new r.GifReader(t2), i2 = Buffer.alloc(e2.width * e2.height * 4);
      return e2.decodeAndBlitFrameRGBA(0, i2), { data: i2, width: e2.width, height: e2.height };
    } };
  }
}