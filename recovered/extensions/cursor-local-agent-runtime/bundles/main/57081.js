// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 57081 range:1774439..1774775
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
57081: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scheduleReadableStreamLike = void 0;
    const n = r(51078), o = r(42534);
    t.scheduleReadableStreamLike = function(e2, t2) {
      return (0, o.scheduleAsyncIterable)((0, n.readableStreamLikeToAsyncGenerator)(e2), t2);
    };
  }