// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9651 range:904399..906408
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9651: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.AsyncAction = void 0;
    const n2 = r2(2591), o2 = r2(3553), s2 = r2(5143);
    class i2 extends n2.Action {
      scheduler;
      work;
      id;
      state;
      delay;
      pending = false;
      constructor(e3, t3) {
        super(e3, t3), this.scheduler = e3, this.work = t3;
      }
      schedule(e3, t3 = 0) {
        if (this.closed) return this;
        this.state = e3;
        const r3 = this.id, n3 = this.scheduler;
        return null != r3 && (this.id = this.recycleAsyncId(n3, r3, t3)), this.pending = true, this.delay = t3, this.id = this.id ?? this.requestAsyncId(n3, this.id, t3), this;
      }
      requestAsyncId(e3, t3, r3 = 0) {
        return o2.intervalProvider.setInterval(e3.flush.bind(e3, this), r3);
      }
      recycleAsyncId(e3, t3, r3 = 0) {
        if (null != r3 && this.delay === r3 && false === this.pending) return t3;
        null != t3 && o2.intervalProvider.clearInterval(t3);
      }
      execute(e3, t3) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = false;
        const r3 = this._execute(e3, t3);
        if (r3) return r3;
        false === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }
      _execute(e3, t3) {
        let r3, n3 = false;
        try {
          this.work(e3);
        } catch (e4) {
          n3 = true, r3 = e4 || new Error("Scheduled action threw falsy error");
        }
        if (n3) return this.unsubscribe(), r3;
      }
      unsubscribe() {
        if (!this.closed) {
          const { id: e3, scheduler: t3 } = this, { actions: r3 } = t3;
          this.work = this.state = this.scheduler = null, this.pending = false, (0, s2.arrRemove)(r3, this), null != e3 && (this.id = this.recycleAsyncId(t3, e3, null)), this.delay = null, super.unsubscribe();
        }
      }
    }
    t2.AsyncAction = i2;
  }