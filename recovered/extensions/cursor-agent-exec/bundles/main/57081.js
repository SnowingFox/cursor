// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 57081 range:4615787..4616123
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
57081: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.scheduleReadableStreamLike = void 0;
    const n = r(51078), s = r(42534);
    t.scheduleReadableStreamLike = function(e2, t2) {
      return (0, s.scheduleAsyncIterable)((0, n.readableStreamLikeToAsyncGenerator)(e2), t2);
    };
  }