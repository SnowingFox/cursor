// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9309 range:354664..355428
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9309: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.AnimationFrameScheduler = void 0;
    const s10 = n10(5488);
    class o10 extends s10.AsyncScheduler {
      flush(e11) {
        this._active = true;
        const a11 = this._scheduled;
        this._scheduled = void 0;
        const { actions: n11 } = this;
        let s11;
        e11 = e11 || n11.shift();
        do {
          if (s11 = e11.execute(e11.state, e11.delay)) break;
        } while ((e11 = n11[0]) && e11.id === a11 && n11.shift());
        if (this._active = false, s11) {
          for (; (e11 = n11[0]) && e11.id === a11 && n11.shift(); ) e11.unsubscribe();
          throw s11;
        }
      }
    }
    a10.AnimationFrameScheduler = o10;
  }