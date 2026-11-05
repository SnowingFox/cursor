// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5488 range:390733..391492
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5488: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.AsyncScheduler = void 0;
    const n2 = r2(4458);
    class o2 extends n2.Scheduler {
      actions = [];
      _active = false;
      _scheduled;
      constructor(e3, t3 = n2.Scheduler.now) {
        super(e3, t3);
      }
      flush(e3) {
        const { actions: t3 } = this;
        if (this._active) return void t3.push(e3);
        let r3;
        this._active = true;
        do {
          if (r3 = e3.execute(e3.state, e3.delay)) break;
        } while (e3 = t3.shift());
        if (this._active = false, r3) {
          for (; e3 = t3.shift(); ) e3.unsubscribe();
          throw r3;
        }
      }
    }
    t2.AsyncScheduler = o2;
  }