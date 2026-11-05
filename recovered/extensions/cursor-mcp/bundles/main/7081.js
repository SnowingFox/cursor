// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7081 range:589549..589894
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7081: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.scheduleReadableStreamLike = void 0;
    const n2 = r2(1078), o2 = r2(2534);
    t2.scheduleReadableStreamLike = function(e3, t3) {
      return (0, o2.scheduleAsyncIterable)((0, n2.readableStreamLikeToAsyncGenerator)(e3), t3);
    };
  }