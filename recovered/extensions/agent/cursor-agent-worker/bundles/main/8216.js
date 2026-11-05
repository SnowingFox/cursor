// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8216 range:317242..317659
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8216: (e10, a10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.observeNotification = void 0, a10.observeNotification = function(e11, a11) {
      const { kind: n10, value: s10, error: o10 } = e11;
      if ("string" != typeof n10) throw new TypeError('Invalid notification, missing "kind"');
      "N" === n10 ? a11.next?.(s10) : "E" === n10 ? a11.error?.(o10) : a11.complete?.();
    };
  }