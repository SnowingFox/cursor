// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: JSAnimation.mjs range:35326587..35332962
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.761Z
XYl = L({ "JSAnimation.mjs"() {
  E(), xR(), lOn(), vbv(), $bv(), Sg0(), Qbv(), Jbv(), zYl(), Zbv(), QAs(), iyv(), YYl(), ryv = (t) => t / 100, dFi = class extends JAs {
    constructor(t) {
      super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = { done: false, value: void 0 }, this.stop = () => {
        const { motionValue: e } = this.options;
        e && e.updatedAt !== Qye.now() && this.tick(Qye.now()), this.isStopped = true, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
      }, oFi.mainThread++, this.options = t, this.initAnimation(), this.play(), t.autoplay === false && this.pause();
    }
    initAnimation() {
      const { options: t } = this;
      tyv(t);
      const { type: e = gOn, repeat: n = 0, repeatDelay: i = 0, repeatType: r, velocity: s = 0 } = t;
      let { keyframes: o } = t;
      const a = e || gOn;
      process.env.NODE_ENV !== "production" && a !== gOn && Out(o.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${o}`, "spring-two-frames"), a !== gOn && typeof o[0] != "number" && (this.mixKeyframes = tFi(ryv, jbv(o[0], o[1])), o = [0, 100]);
      const l = a({ ...t, keyframes: o });
      r === "mirror" && (this.mirroredGenerator = a({ ...t, keyframes: [...o].reverse(), velocity: -s })), l.calculatedDuration === null && (l.calculatedDuration = qYl(l));
      const { calculatedDuration: c } = l;
      this.calculatedDuration = c, this.resolvedDuration = c + i, this.totalDuration = this.resolvedDuration * (n + 1) - i, this.generator = l;
    }
    updateTime(t) {
      const e = Math.round(t - this.startTime) * this.playbackSpeed;
      this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = e;
    }
    tick(t, e = false) {
      const { generator: n, totalDuration: i, mixKeyframes: r, mirroredGenerator: s, resolvedDuration: o, calculatedDuration: a } = this;
      if (this.startTime === null) return n.next(0);
      const { delay: l = 0, keyframes: c, repeat: u, repeatType: d, repeatDelay: h, type: p, onUpdate: g, finalKeyframe: f } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
      const _ = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1), b = this.playbackSpeed >= 0 ? _ < 0 : _ > i;
      this.currentTime = Math.max(_, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
      let y = this.currentTime, S = n;
      if (u) {
        const I = Math.min(this.currentTime, i) / o;
        let A = Math.floor(I), P = I % 1;
        !P && I >= 1 && (P = 1), P === 1 && A--, A = Math.min(A, u + 1), !!(A % 2) && (d === "reverse" ? (P = 1 - P, h && (P -= h / o)) : d === "mirror" && (S = s)), y = Lut(0, 1, P) * o;
      }
      let k;
      b ? (this.delayState.value = c[0], k = this.delayState) : k = S.next(y), r && !b && (k.value = r(k.value));
      let { done: C } = k;
      !b && a !== null && (C = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
      const T = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
      return T && p !== KYl && (k.value = ZAs(c, this.options, f, this.speed)), g && g(k.value), T && this.finish(), k;
    }
    then(t, e) {
      return this.finished.then(t, e);
    }
    get duration() {
      return jDe(this.calculatedDuration);
    }
    get iterationDuration() {
      const { delay: t = 0 } = this.options || {};
      return this.duration + jDe(t);
    }
    get time() {
      return jDe(this.currentTime);
    }
    set time(t) {
      t = sEe(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(false) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t));
    }
    getGeneratorVelocity() {
      const t = this.currentTime;
      if (t <= 0) return this.options.velocity || 0;
      if (this.generator.velocity) return this.generator.velocity(t);
      const e = this.generator.next(t).value;
      return Ybv((n) => this.generator.next(n).value, t, e);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(t) {
      const e = this.playbackSpeed !== t;
      e && this.driver && this.updateTime(Qye.now()), this.playbackSpeed = t, e && this.driver && (this.time = jDe(this.currentTime));
    }
    play() {
      if (this.isStopped) return;
      const { driver: t = Hbv, startTime: e } = this.options;
      this.driver || (this.driver = t((i) => this.tick(i))), this.options.onPlay?.();
      const n = this.driver.now();
      this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime !== null ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = e ?? n), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
    }
    pause() {
      this.state = "paused", this.updateTime(Qye.now()), this.holdTime = this.currentTime;
    }
    complete() {
      this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
    }
    finish() {
      this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
    }
    cancel() {
      this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
    }
    teardown() {
      this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, oFi.mainThread--;
    }
    stopDriver() {
      this.driver && (this.driver.stop(), this.driver = void 0);
    }
    sample(t) {
      return this.startTime = 0, this.tick(t, true);
    }
    attachTimeline(t) {
      return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this);
    }
  };
} });
function Fg0(t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
}
