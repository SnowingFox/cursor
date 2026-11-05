// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1140 range:111220..112164
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1140: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.AnimationFrameAction = void 0;
    const n2 = r2(9651), o2 = r2(8019);
    class s2 extends n2.AsyncAction {
      scheduler;
      work;
      constructor(e3, t3) {
        super(e3, t3), this.scheduler = e3, this.work = t3;
      }
      requestAsyncId(e3, t3, r3 = 0) {
        return null !== r3 && r3 > 0 ? super.requestAsyncId(e3, t3, r3) : (e3.actions.push(this), e3._scheduled || (e3._scheduled = o2.animationFrameProvider.requestAnimationFrame(() => e3.flush(void 0))));
      }
      recycleAsyncId(e3, t3, r3 = 0) {
        if (null != r3 ? r3 > 0 : this.delay > 0) return super.recycleAsyncId(e3, t3, r3);
        const { actions: n3 } = e3;
        null != t3 && n3[n3.length - 1]?.id !== t3 && (o2.animationFrameProvider.cancelAnimationFrame(t3), e3._scheduled = void 0);
      }
    }
    t2.AnimationFrameAction = s2;
  }