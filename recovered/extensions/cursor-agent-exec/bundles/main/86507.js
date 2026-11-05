// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 86507 range:11032105..11032556
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86507: (e, t, r) => {
    "use strict";
    r.d(t, { P: () => s });
    var n = r(90443);
    const s = (e2) => {
      if ("string" == typeof e2) return e2;
      if ("object" != typeof e2 || "number" != typeof e2.byteOffset || "number" != typeof e2.byteLength) throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      return (0, n.Q)(e2.buffer, e2.byteOffset, e2.byteLength).toString("utf8");
    };
  }