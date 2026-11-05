// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 61140 range:1890328..1891260
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61140: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.AnimationFrameAction = void 0;
    const n = r(69651), o = r(98019);
    class s extends n.AsyncAction {
      scheduler;
      work;
      constructor(e2, t2) {
        super(e2, t2), this.scheduler = e2, this.work = t2;
      }
      requestAsyncId(e2, t2, r2 = 0) {
        return null !== r2 && r2 > 0 ? super.requestAsyncId(e2, t2, r2) : (e2.actions.push(this), e2._scheduled || (e2._scheduled = o.animationFrameProvider.requestAnimationFrame(() => e2.flush(void 0))));
      }
      recycleAsyncId(e2, t2, r2 = 0) {
        if (null != r2 ? r2 > 0 : this.delay > 0) return super.recycleAsyncId(e2, t2, r2);
        const { actions: n2 } = e2;
        null != t2 && n2[n2.length - 1]?.id !== t2 && (o.animationFrameProvider.cancelAnimationFrame(t2), e2._scheduled = void 0);
      }
    }
    t.AnimationFrameAction = s;
  }