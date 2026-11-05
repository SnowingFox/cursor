// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 86507 range:7543131..7543582
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86507: (e, t, r) => {
    "use strict";
    r.d(t, { P: () => o });
    var n = r(90443);
    const o = (e2) => {
      if ("string" == typeof e2) return e2;
      if ("object" != typeof e2 || "number" != typeof e2.byteOffset || "number" != typeof e2.byteLength) throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      return (0, n.Q)(e2.buffer, e2.byteOffset, e2.byteLength).toString("utf8");
    };
  }