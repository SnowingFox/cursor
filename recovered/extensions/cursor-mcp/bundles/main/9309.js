// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9309 range:886252..886999
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9309: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.AnimationFrameScheduler = void 0;
    const n2 = r2(5488);
    class o2 extends n2.AsyncScheduler {
      flush(e3) {
        this._active = true;
        const t3 = this._scheduled;
        this._scheduled = void 0;
        const { actions: r3 } = this;
        let n3;
        e3 = e3 || r3.shift();
        do {
          if (n3 = e3.execute(e3.state, e3.delay)) break;
        } while ((e3 = r3[0]) && e3.id === t3 && r3.shift());
        if (this._active = false, n3) {
          for (; (e3 = r3[0]) && e3.id === t3 && r3.shift(); ) e3.unsubscribe();
          throw n3;
        }
      }
    }
    t2.AnimationFrameScheduler = o2;
  }