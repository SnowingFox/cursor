// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9651 range:359673..361740
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9651: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.AsyncAction = void 0;
    const s10 = n10(2591), o10 = n10(3553), r10 = n10(5143);
    class t10 extends s10.Action {
      scheduler;
      work;
      id;
      state;
      delay;
      pending = false;
      constructor(e11, a11) {
        super(e11, a11), this.scheduler = e11, this.work = a11;
      }
      schedule(e11, a11 = 0) {
        if (this.closed) return this;
        this.state = e11;
        const n11 = this.id, s11 = this.scheduler;
        return null != n11 && (this.id = this.recycleAsyncId(s11, n11, a11)), this.pending = true, this.delay = a11, this.id = this.id ?? this.requestAsyncId(s11, this.id, a11), this;
      }
      requestAsyncId(e11, a11, n11 = 0) {
        return o10.intervalProvider.setInterval(e11.flush.bind(e11, this), n11);
      }
      recycleAsyncId(e11, a11, n11 = 0) {
        if (null != n11 && this.delay === n11 && false === this.pending) return a11;
        null != a11 && o10.intervalProvider.clearInterval(a11);
      }
      execute(e11, a11) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = false;
        const n11 = this._execute(e11, a11);
        if (n11) return n11;
        false === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }
      _execute(e11, a11) {
        let n11, s11 = false;
        try {
          this.work(e11);
        } catch (e12) {
          s11 = true, n11 = e12 || new Error("Scheduled action threw falsy error");
        }
        if (s11) return this.unsubscribe(), n11;
      }
      unsubscribe() {
        if (!this.closed) {
          const { id: e11, scheduler: a11 } = this, { actions: n11 } = a11;
          this.work = this.state = this.scheduler = null, this.pending = false, (0, r10.arrRemove)(n11, this), null != e11 && (this.id = this.recycleAsyncId(a11, e11, null)), this.delay = null, super.unsubscribe();
        }
      }
    }
    a10.AsyncAction = t10;
  }