// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 5096 range:412368..412796
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5096: (e, t, r) => {
    "use strict";
    const n = r(48498), s = /* @__PURE__ */ new Set(["jpg", "png", "gif", "webp", "flif", "cr2", "tif", "bmp", "jxr", "psd", "ico", "bpg", "jp2", "jpm", "jpx", "heic", "cur", "dcm"]), o = (e2) => {
      const t2 = n(e2);
      return s.has(t2 && t2.ext) ? t2 : null;
    };
    e.exports = o, e.exports.default = o, Object.defineProperty(o, "minimumBytes", { value: n.minimumBytes });
  }