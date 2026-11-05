// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5494 range:391494..393415
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5494: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.VirtualAction = t2.VirtualTimeScheduler = void 0;
    const n2 = r2(9651), o2 = r2(1078), s2 = r2(5488);
    class i2 extends s2.AsyncScheduler {
      maxFrames;
      static frameTimeFactor = 10;
      frame = 0;
      index = -1;
      constructor(e3 = a2, t3 = 1 / 0) {
        super(e3, () => this.frame), this.maxFrames = t3;
      }
      flush() {
        const { actions: e3, maxFrames: t3 } = this;
        let r3, n3;
        for (; (n3 = e3[0]) && n3.delay <= t3 && (e3.shift(), this.frame = n3.delay, !(r3 = n3.execute(n3.state, n3.delay))); ) ;
        if (r3) {
          for (; n3 = e3.shift(); ) n3.unsubscribe();
          throw r3;
        }
      }
    }
    t2.VirtualTimeScheduler = i2;
    class a2 extends n2.AsyncAction {
      scheduler;
      work;
      index;
      active = true;
      constructor(e3, t3, r3 = e3.index += 1) {
        super(e3, t3), this.scheduler = e3, this.work = t3, this.index = r3, this.index = e3.index = r3;
      }
      schedule(e3, t3 = 0) {
        if (Number.isFinite(t3)) {
          if (!this.id) return super.schedule(e3, t3);
          this.active = false;
          const r3 = new a2(this.scheduler, this.work);
          return this.add(r3), r3.schedule(e3, t3);
        }
        return o2.Subscription.EMPTY;
      }
      requestAsyncId(e3, t3, r3 = 0) {
        this.delay = e3.frame + r3;
        const { actions: n3 } = e3;
        return n3.push(this), n3.sort(a2.sortActions), 1;
      }
      recycleAsyncId(e3, t3, r3 = 0) {
      }
      _execute(e3, t3) {
        if (true === this.active) return super._execute(e3, t3);
      }
      static sortActions(e3, t3) {
        return e3.delay === t3.delay ? e3.index === t3.index ? 0 : e3.index > t3.index ? 1 : -1 : e3.delay > t3.delay ? 1 : -1;
      }
    }
    t2.VirtualAction = a2;
  }