// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 5830 range:175786..176200
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5830: (e10, a10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.executeSchedule = void 0, a10.executeSchedule = function(e11, a11, n10, s10 = 0, o10 = false) {
      if (!e11.closed) {
        const r10 = a11.schedule(function() {
          n10(), o10 ? e11.add(this.schedule(null, s10)) : this.unsubscribe();
        }, s10);
        if (e11.add(r10), !o10) return r10;
      }
    };
  }