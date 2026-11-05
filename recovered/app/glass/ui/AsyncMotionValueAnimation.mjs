// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AsyncMotionValueAnimation.mjs range:35347178..35350464
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.488Z
cf0 = L({ "AsyncMotionValueAnimation.mjs"() {
  E(), xR(), lOn(), XYl(), QAs(), iXl(), ef0(), rf0(), xyv(), YYl(), lf0(), Dyv = 40, Nyv = class extends JAs {
    constructor({ autoplay: t = true, delay: e = 0, type: n = "keyframes", repeat: i = 0, repeatDelay: r = 0, repeatType: s = "loop", keyframes: o, name: a, motionValue: l, element: c, ...u }) {
      super(), this.stop = () => {
        this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
      }, this.createdAt = Qye.now();
      const d = { autoplay: t, delay: e, type: n, repeat: i, repeatDelay: r, repeatType: s, name: a, motionValue: l, element: c, ...u }, h = c?.KeyframeResolver || sRs;
      this.keyframeResolver = new h(o, (p, g, f) => this.onKeyframesResolved(p, g, d, !f), a, l, c), this.keyframeResolver?.scheduleResolve();
    }
    onKeyframesResolved(t, e, n, i) {
      this.keyframeResolver = void 0;
      const { name: r, type: s, velocity: o, delay: a, isHandoff: l, onUpdate: c } = n;
      this.resolvedAt = Qye.now();
      let u = true;
      if0(t, r, s, o) || (u = false, (Fut.instantAnimations || !a) && c?.(ZAs(t, n, e)), t[0] = t[t.length - 1], cXl(n), n.repeat = 0);
      const h = { startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Dyv ? this.resolvedAt : this.createdAt : this.createdAt : void 0, finalKeyframe: e, ...n, keyframes: t }, p = u && !l && af0(h), g = h.motionValue?.owner?.current;
      let f;
      if (p) try {
        f = new Iyv({ ...h, element: g });
      } catch {
        f = new dFi(h);
      }
      else f = new dFi(h);
      f.finished.then(() => {
        this.notifyFinished();
      }).catch(NQt), this.pendingTimeline && (this.stopTimeline = f.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = f;
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(t, e) {
      return this.finished.finally(t).then(() => {
      });
    }
    get animation() {
      return this._animation || (this.keyframeResolver?.resume(), $g0()), this._animation;
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(t) {
      this.animation.time = t;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(t) {
      this.animation.speed = t;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(t) {
      return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
    }
  };
} });
function Lyv(t, e, n, i = 0, r = 1) {
  const s = Array.from(t).sort((c, u) => c.sortNodePosition(u)).indexOf(e), o = t.size, a = (o - 1) * i;
  return typeof n == "function" ? n(s, o) : r === 1 ? s * i : a - s * i;
}
