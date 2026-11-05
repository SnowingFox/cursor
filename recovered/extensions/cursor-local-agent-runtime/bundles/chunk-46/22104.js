// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/46.js sha256:d16c5e127f5dfd2c26327f95acab37bce39fb1530578971aa8efc4cb16600efe
// module: 22104 range:70538..71039
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22104: (t, e) => {
  class i {
    constructor(t2, e2, i2) {
      this.width = i2.width, this.height = i2.height, this.loops = i2.loops, this.usesTransparency = i2.usesTransparency, this.colorScope = i2.colorScope, this.frames = e2, this.buffer = t2;
    }
  }
  i.GlobalColorsPreferred = 0, i.GlobalColorsOnly = 1, i.LocalColorsOnly = 2;
  class r extends Error {
    constructor(t2) {
      super(t2), t2 instanceof Error && (this.stack = "Gif" + t2.stack);
    }
  }
  e.Gif = i, e.GifError = r;
}