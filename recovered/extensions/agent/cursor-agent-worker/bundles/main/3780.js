// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3780 range:132405..133226
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3780: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.QueueAction = void 0;
    const s10 = n10(9651);
    class o10 extends s10.AsyncAction {
      scheduler;
      work;
      constructor(e11, a11) {
        super(e11, a11), this.scheduler = e11, this.work = a11;
      }
      schedule(e11, a11 = 0) {
        return a11 > 0 ? super.schedule(e11, a11) : (this.delay = a11, this.state = e11, this.scheduler.flush(this), this);
      }
      execute(e11, a11) {
        return a11 > 0 || this.closed ? super.execute(e11, a11) : this._execute(e11, a11);
      }
      requestAsyncId(e11, a11, n11 = 0) {
        return null != n11 && n11 > 0 || null == n11 && this.delay > 0 ? super.requestAsyncId(e11, a11, n11) : (e11.flush(this), 0);
      }
    }
    a10.QueueAction = o10;
  }