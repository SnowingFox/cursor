// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 5096 range:403813..404241
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