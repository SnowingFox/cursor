// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 90545 range:11219204..11220239
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90545: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(63401), s = r(79130), o = r(95183), i = new o.Name("fullFormats"), a = new o.Name("fastFormats"), c = (e2, t2 = { keywords: true }) => {
      if (Array.isArray(t2)) return l(e2, t2, n.fullFormats, i), e2;
      const [r2, o2] = "fast" === t2.mode ? [n.fastFormats, a] : [n.fullFormats, i];
      return l(e2, t2.formats || n.formatNames, r2, o2), t2.keywords && (0, s.default)(e2), e2;
    };
    function l(e2, t2, r2, n2) {
      var s2, i2;
      null !== (s2 = (i2 = e2.opts.code).formats) && void 0 !== s2 || (i2.formats = o._`require("ajv-formats/dist/formats").${n2}`);
      for (const n3 of t2) e2.addFormat(n3, r2[n3]);
    }
    c.get = (e2, t2 = "full") => {
      const r2 = ("fast" === t2 ? n.fastFormats : n.fullFormats)[e2];
      if (!r2) throw new Error(`Unknown format "${e2}"`);
      return r2;
    }, e.exports = t = c, Object.defineProperty(t, "__esModule", { value: true }), t.default = c;
  }