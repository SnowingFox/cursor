// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 90545 range:7715075..7716110
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90545: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(63401), o = r(79130), s = r(95183), i = new s.Name("fullFormats"), a = new s.Name("fastFormats"), l = (e2, t2 = { keywords: true }) => {
      if (Array.isArray(t2)) return c(e2, t2, n.fullFormats, i), e2;
      const [r2, s2] = "fast" === t2.mode ? [n.fastFormats, a] : [n.fullFormats, i];
      return c(e2, t2.formats || n.formatNames, r2, s2), t2.keywords && (0, o.default)(e2), e2;
    };
    function c(e2, t2, r2, n2) {
      var o2, i2;
      null !== (o2 = (i2 = e2.opts.code).formats) && void 0 !== o2 || (i2.formats = s._`require("ajv-formats/dist/formats").${n2}`);
      for (const n3 of t2) e2.addFormat(n3, r2[n3]);
    }
    l.get = (e2, t2 = "full") => {
      const r2 = ("fast" === t2 ? n.fastFormats : n.fullFormats)[e2];
      if (!r2) throw new Error(`Unknown format "${e2}"`);
      return r2;
    }, e.exports = t = l, Object.defineProperty(t, "__esModule", { value: true }), t.default = l;
  }