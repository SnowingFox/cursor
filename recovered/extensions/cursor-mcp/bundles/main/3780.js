// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3780 range:285999..286797
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3780: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.QueueAction = void 0;
    const n2 = r2(9651);
    class o2 extends n2.AsyncAction {
      scheduler;
      work;
      constructor(e3, t3) {
        super(e3, t3), this.scheduler = e3, this.work = t3;
      }
      schedule(e3, t3 = 0) {
        return t3 > 0 ? super.schedule(e3, t3) : (this.delay = t3, this.state = e3, this.scheduler.flush(this), this);
      }
      execute(e3, t3) {
        return t3 > 0 || this.closed ? super.execute(e3, t3) : this._execute(e3, t3);
      }
      requestAsyncId(e3, t3, r3 = 0) {
        return null != r3 && r3 > 0 || null == r3 && this.delay > 0 ? super.requestAsyncId(e3, t3, r3) : (e3.flush(this), 0);
      }
    }
    t2.QueueAction = o2;
  }