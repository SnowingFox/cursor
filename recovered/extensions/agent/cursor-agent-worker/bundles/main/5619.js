// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 5619 range:157997..158593
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5619: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.popNumber = a10.popScheduler = a10.popResultSelector = void 0;
    const s10 = n10(1078), o10 = n10(2901);
    function r10(e11) {
      return e11[e11.length - 1];
    }
    a10.popResultSelector = function(e11) {
      return (0, s10.isFunction)(r10(e11)) ? e11.pop() : void 0;
    }, a10.popScheduler = function(e11) {
      return (0, o10.isScheduler)(r10(e11)) ? e11.pop() : void 0;
    }, a10.popNumber = function(e11, a11) {
      return "number" == typeof r10(e11) ? e11.pop() : a11;
    };
  }