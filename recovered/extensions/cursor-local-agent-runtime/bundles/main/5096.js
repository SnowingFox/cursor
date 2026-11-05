// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 5096 range:45811..46239
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5096: (e, t, r) => {
    "use strict";
    const n = r(48498), o = /* @__PURE__ */ new Set(["jpg", "png", "gif", "webp", "flif", "cr2", "tif", "bmp", "jxr", "psd", "ico", "bpg", "jp2", "jpm", "jpx", "heic", "cur", "dcm"]), s = (e2) => {
      const t2 = n(e2);
      return o.has(t2 && t2.ext) ? t2 : null;
    };
    e.exports = s, e.exports.default = s, Object.defineProperty(s, "minimumBytes", { value: n.minimumBytes });
  }