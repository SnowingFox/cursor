// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 93780 range:11312631..11313420
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
93780: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.QueueAction = void 0;
    const n = r(69651);
    class s extends n.AsyncAction {
      scheduler;
      work;
      constructor(e2, t2) {
        super(e2, t2), this.scheduler = e2, this.work = t2;
      }
      schedule(e2, t2 = 0) {
        return t2 > 0 ? super.schedule(e2, t2) : (this.delay = t2, this.state = e2, this.scheduler.flush(this), this);
      }
      execute(e2, t2) {
        return t2 > 0 || this.closed ? super.execute(e2, t2) : this._execute(e2, t2);
      }
      requestAsyncId(e2, t2, r2 = 0) {
        return null != r2 && r2 > 0 || null == r2 && this.delay > 0 ? super.requestAsyncId(e2, t2, r2) : (e2.flush(this), 0);
      }
    }
    t.QueueAction = s;
  }