// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 793 range:25364..25671
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
793: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.timestamp = void 0;
    const s10 = n10(6256), o10 = n10(8143);
    a10.timestamp = function(e11 = s10.dateTimestampProvider) {
      return (0, o10.map)((a11) => ({ value: a11, timestamp: e11.now() }));
    };
  }