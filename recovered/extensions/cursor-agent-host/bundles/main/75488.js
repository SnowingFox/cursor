// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 75488 range:11204167..11204916
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
75488: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.AsyncScheduler = void 0;
    const n = r(34458);
    class s extends n.Scheduler {
      actions = [];
      _active = false;
      _scheduled;
      constructor(e2, t2 = n.Scheduler.now) {
        super(e2, t2);
      }
      flush(e2) {
        const { actions: t2 } = this;
        if (this._active) return void t2.push(e2);
        let r2;
        this._active = true;
        do {
          if (r2 = e2.execute(e2.state, e2.delay)) break;
        } while (e2 = t2.shift());
        if (this._active = false, r2) {
          for (; e2 = t2.shift(); ) e2.unsubscribe();
          throw r2;
        }
      }
    }
    t.AsyncScheduler = s;
  }