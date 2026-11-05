// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 95494 range:14550079..14551980
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
95494: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.VirtualAction = t.VirtualTimeScheduler = void 0;
    const n = r(69651), s = r(51078), o = r(75488);
    class i extends o.AsyncScheduler {
      maxFrames;
      static frameTimeFactor = 10;
      frame = 0;
      index = -1;
      constructor(e2 = a, t2 = 1 / 0) {
        super(e2, () => this.frame), this.maxFrames = t2;
      }
      flush() {
        const { actions: e2, maxFrames: t2 } = this;
        let r2, n2;
        for (; (n2 = e2[0]) && n2.delay <= t2 && (e2.shift(), this.frame = n2.delay, !(r2 = n2.execute(n2.state, n2.delay))); ) ;
        if (r2) {
          for (; n2 = e2.shift(); ) n2.unsubscribe();
          throw r2;
        }
      }
    }
    t.VirtualTimeScheduler = i;
    class a extends n.AsyncAction {
      scheduler;
      work;
      index;
      active = true;
      constructor(e2, t2, r2 = e2.index += 1) {
        super(e2, t2), this.scheduler = e2, this.work = t2, this.index = r2, this.index = e2.index = r2;
      }
      schedule(e2, t2 = 0) {
        if (Number.isFinite(t2)) {
          if (!this.id) return super.schedule(e2, t2);
          this.active = false;
          const r2 = new a(this.scheduler, this.work);
          return this.add(r2), r2.schedule(e2, t2);
        }
        return s.Subscription.EMPTY;
      }
      requestAsyncId(e2, t2, r2 = 0) {
        this.delay = e2.frame + r2;
        const { actions: n2 } = e2;
        return n2.push(this), n2.sort(a.sortActions), 1;
      }
      recycleAsyncId(e2, t2, r2 = 0) {
      }
      _execute(e2, t2) {
        if (true === this.active) return super._execute(e2, t2);
      }
      static sortActions(e2, t2) {
        return e2.delay === t2.delay ? e2.index === t2.index ? 0 : e2.index > t2.index ? 1 : -1 : e2.delay > t2.delay ? 1 : -1;
      }
    }
    t.VirtualAction = a;
  }