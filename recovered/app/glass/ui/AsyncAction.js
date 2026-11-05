// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AsyncAction.js range:19705611..19707278
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.487Z
NM1 = L({ "AsyncAction.js"() {
  E(), RM1(), PM1(), DM1(), Y5p = class extends K5p {
    scheduler;
    work;
    id;
    state;
    delay;
    pending = false;
    constructor(t, e) {
      super(t, e), this.scheduler = t, this.work = e;
    }
    schedule(t, e = 0) {
      if (this.closed) return this;
      this.state = t;
      const n = this.id, i = this.scheduler;
      return n != null && (this.id = this.recycleAsyncId(i, n, e)), this.pending = true, this.delay = e, this.id = this.id ?? this.requestAsyncId(i, this.id, e), this;
    }
    requestAsyncId(t, e, n = 0) {
      return pSi.setInterval(t.flush.bind(t, this), n);
    }
    recycleAsyncId(t, e, n = 0) {
      if (n != null && this.delay === n && this.pending === false) return e;
      e != null && pSi.clearInterval(e);
    }
    execute(t, e) {
      if (this.closed) return new Error("executing a cancelled action");
      this.pending = false;
      const n = this._execute(t, e);
      if (n) return n;
      this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
    }
    _execute(t, e) {
      let n = false, i;
      try {
        this.work(t);
      } catch (r) {
        n = true, i = r || new Error("Scheduled action threw falsy error");
      }
      if (n) return this.unsubscribe(), i;
    }
    unsubscribe() {
      if (!this.closed) {
        const { id: t, scheduler: e } = this, { actions: n } = e;
        this.work = this.state = this.scheduler = null, this.pending = false, MM1(n, this), t != null && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null, super.unsubscribe();
      }
    }
  };
} }), COa, 