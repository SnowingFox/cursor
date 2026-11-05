// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 5494 range:155998..157995
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5494: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.VirtualAction = a10.VirtualTimeScheduler = void 0;
    const s10 = n10(9651), o10 = n10(1078), r10 = n10(5488);
    class t10 extends r10.AsyncScheduler {
      maxFrames;
      static frameTimeFactor = 10;
      frame = 0;
      index = -1;
      constructor(e11 = i10, a11 = 1 / 0) {
        super(e11, () => this.frame), this.maxFrames = a11;
      }
      flush() {
        const { actions: e11, maxFrames: a11 } = this;
        let n11, s11;
        for (; (s11 = e11[0]) && s11.delay <= a11 && (e11.shift(), this.frame = s11.delay, !(n11 = s11.execute(s11.state, s11.delay))); ) ;
        if (n11) {
          for (; s11 = e11.shift(); ) s11.unsubscribe();
          throw n11;
        }
      }
    }
    a10.VirtualTimeScheduler = t10;
    class i10 extends s10.AsyncAction {
      scheduler;
      work;
      index;
      active = true;
      constructor(e11, a11, n11 = e11.index += 1) {
        super(e11, a11), this.scheduler = e11, this.work = a11, this.index = n11, this.index = e11.index = n11;
      }
      schedule(e11, a11 = 0) {
        if (Number.isFinite(a11)) {
          if (!this.id) return super.schedule(e11, a11);
          this.active = false;
          const n11 = new i10(this.scheduler, this.work);
          return this.add(n11), n11.schedule(e11, a11);
        }
        return o10.Subscription.EMPTY;
      }
      requestAsyncId(e11, a11, n11 = 0) {
        this.delay = e11.frame + n11;
        const { actions: s11 } = e11;
        return s11.push(this), s11.sort(i10.sortActions), 1;
      }
      recycleAsyncId(e11, a11, n11 = 0) {
      }
      _execute(e11, a11) {
        if (true === this.active) return super._execute(e11, a11);
      }
      static sortActions(e11, a11) {
        return e11.delay === a11.delay ? e11.index === a11.index ? 0 : e11.index > a11.index ? 1 : -1 : e11.delay > a11.delay ? 1 : -1;
      }
    }
    a10.VirtualAction = i10;
  }