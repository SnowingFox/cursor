// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 5488 range:155223..155996
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5488: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.AsyncScheduler = void 0;
    const s10 = n10(4458);
    class o10 extends s10.Scheduler {
      actions = [];
      _active = false;
      _scheduled;
      constructor(e11, a11 = s10.Scheduler.now) {
        super(e11, a11);
      }
      flush(e11) {
        const { actions: a11 } = this;
        if (this._active) return void a11.push(e11);
        let n11;
        this._active = true;
        do {
          if (n11 = e11.execute(e11.state, e11.delay)) break;
        } while (e11 = a11.shift());
        if (this._active = false, n11) {
          for (; e11 = a11.shift(); ) e11.unsubscribe();
          throw n11;
        }
      }
    }
    a10.AsyncScheduler = o10;
  }