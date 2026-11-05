// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 69651 range:10905920..10907915
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69651: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.AsyncAction = void 0;
    const n = r(62591), s = r(13553), o = r(75143);
    class i extends n.Action {
      scheduler;
      work;
      id;
      state;
      delay;
      pending = false;
      constructor(e2, t2) {
        super(e2, t2), this.scheduler = e2, this.work = t2;
      }
      schedule(e2, t2 = 0) {
        if (this.closed) return this;
        this.state = e2;
        const r2 = this.id, n2 = this.scheduler;
        return null != r2 && (this.id = this.recycleAsyncId(n2, r2, t2)), this.pending = true, this.delay = t2, this.id = this.id ?? this.requestAsyncId(n2, this.id, t2), this;
      }
      requestAsyncId(e2, t2, r2 = 0) {
        return s.intervalProvider.setInterval(e2.flush.bind(e2, this), r2);
      }
      recycleAsyncId(e2, t2, r2 = 0) {
        if (null != r2 && this.delay === r2 && false === this.pending) return t2;
        null != t2 && s.intervalProvider.clearInterval(t2);
      }
      execute(e2, t2) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = false;
        const r2 = this._execute(e2, t2);
        if (r2) return r2;
        false === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }
      _execute(e2, t2) {
        let r2, n2 = false;
        try {
          this.work(e2);
        } catch (e3) {
          n2 = true, r2 = e3 || new Error("Scheduled action threw falsy error");
        }
        if (n2) return this.unsubscribe(), r2;
      }
      unsubscribe() {
        if (!this.closed) {
          const { id: e2, scheduler: t2 } = this, { actions: r2 } = t2;
          this.work = this.state = this.scheduler = null, this.pending = false, (0, o.arrRemove)(r2, this), null != e2 && (this.id = this.recycleAsyncId(t2, e2, null)), this.delay = null, super.unsubscribe();
        }
      }
    }
    t.AsyncAction = i;
  }