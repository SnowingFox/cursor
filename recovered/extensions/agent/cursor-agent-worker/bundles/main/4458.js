// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 4458 range:143746..144248
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4458: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.Scheduler = void 0;
    const s10 = n10(6256);
    class o10 {
      schedulerActionCtor;
      static now = s10.dateTimestampProvider.now;
      constructor(e11, a11 = o10.now) {
        this.schedulerActionCtor = e11, this.now = a11;
      }
      now;
      schedule(e11, a11 = 0, n11) {
        return new this.schedulerActionCtor(this, e11).schedule(n11, a11);
      }
    }
    a10.Scheduler = o10;
  }