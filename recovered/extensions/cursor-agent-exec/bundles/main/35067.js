// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 35067 range:2932225..2932943
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
35067: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.AsapScheduler = void 0;
    const n = r(75488);
    class s extends n.AsyncScheduler {
      flush(e2) {
        this._active = true;
        const t2 = this._scheduled;
        this._scheduled = void 0;
        const { actions: r2 } = this;
        let n2;
        e2 = e2 || r2.shift();
        do {
          if (n2 = e2.execute(e2.state, e2.delay)) break;
        } while ((e2 = r2[0]) && e2.id === t2 && r2.shift());
        if (this._active = false, n2) {
          for (; (e2 = r2[0]) && e2.id === t2 && r2.shift(); ) e2.unsubscribe();
          throw n2;
        }
      }
    }
    t.AsapScheduler = s;
  }