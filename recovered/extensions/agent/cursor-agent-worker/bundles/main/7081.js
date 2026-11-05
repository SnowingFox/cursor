// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 7081 range:200845..201188
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7081: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.scheduleReadableStreamLike = void 0;
    const s10 = n10(1078), o10 = n10(2534);
    a10.scheduleReadableStreamLike = function(e11, a11) {
      return (0, o10.scheduleAsyncIterable)((0, s10.readableStreamLikeToAsyncGenerator)(e11), a11);
    };
  }