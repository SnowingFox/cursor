// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 545 range:44138..45197
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
545: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(3401), o2 = r2(9130), s2 = r2(5183), i2 = new s2.Name("fullFormats"), a2 = new s2.Name("fastFormats"), c = (e3, t3 = { keywords: true }) => {
      if (Array.isArray(t3)) return u(e3, t3, n2.fullFormats, i2), e3;
      const [r3, s3] = "fast" === t3.mode ? [n2.fastFormats, a2] : [n2.fullFormats, i2];
      return u(e3, t3.formats || n2.formatNames, r3, s3), t3.keywords && (0, o2.default)(e3), e3;
    };
    function u(e3, t3, r3, n3) {
      var o3, i3;
      null !== (o3 = (i3 = e3.opts.code).formats) && void 0 !== o3 || (i3.formats = s2._`require("ajv-formats/dist/formats").${n3}`);
      for (const n4 of t3) e3.addFormat(n4, r3[n4]);
    }
    c.get = (e3, t3 = "full") => {
      const r3 = ("fast" === t3 ? n2.fastFormats : n2.fullFormats)[e3];
      if (!r3) throw new Error(`Unknown format "${e3}"`);
      return r3;
    }, e2.exports = t2 = c, Object.defineProperty(t2, "__esModule", { value: true }), t2.default = c;
  }