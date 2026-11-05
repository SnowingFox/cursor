// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 49309 range:1472539..1473277
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49309: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.AnimationFrameScheduler = void 0;
    const n = r(75488);
    class o extends n.AsyncScheduler {
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
    t.AnimationFrameScheduler = o;
  }