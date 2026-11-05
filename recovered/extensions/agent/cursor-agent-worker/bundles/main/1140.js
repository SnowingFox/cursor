// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 1140 range:68201..69176
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1140: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.AnimationFrameAction = void 0;
    const s10 = n10(9651), o10 = n10(8019);
    class r10 extends s10.AsyncAction {
      scheduler;
      work;
      constructor(e11, a11) {
        super(e11, a11), this.scheduler = e11, this.work = a11;
      }
      requestAsyncId(e11, a11, n11 = 0) {
        return null !== n11 && n11 > 0 ? super.requestAsyncId(e11, a11, n11) : (e11.actions.push(this), e11._scheduled || (e11._scheduled = o10.animationFrameProvider.requestAnimationFrame(() => e11.flush(void 0))));
      }
      recycleAsyncId(e11, a11, n11 = 0) {
        if (null != n11 ? n11 > 0 : this.delay > 0) return super.recycleAsyncId(e11, a11, n11);
        const { actions: s11 } = e11;
        null != a11 && s11[s11.length - 1]?.id !== a11 && (o10.animationFrameProvider.cancelAnimationFrame(a11), e11._scheduled = void 0);
      }
    }
    a10.AnimationFrameAction = r10;
  }