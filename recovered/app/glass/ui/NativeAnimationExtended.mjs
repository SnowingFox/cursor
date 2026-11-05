// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: NativeAnimationExtended.mjs range:35344275..35345078
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.826Z
ef0 = L({ "NativeAnimationExtended.mjs"() {
  E(), xR(), lOn(), fyv(), XYl(), Eyv(), iyv(), Jg0(), oRs = 10, Iyv = class extends oXl {
    constructor(t) {
      Qg0(t), tyv(t), super(t), t.startTime !== void 0 && t.autoplay !== false && (this.startTime = t.startTime), this.options = t;
    }
    updateMotionValue(t) {
      const { motionValue: e, onUpdate: n, onComplete: i, element: r, ...s } = this.options;
      if (!e) return;
      if (t !== void 0) {
        e.set(t);
        return;
      }
      const o = new dFi({ ...s, autoplay: false }), a = Math.max(oRs, Qye.now() - this.startTime), l = Lut(0, oRs, a - oRs), c = o.sample(a).value, { name: u } = this.options;
      r && u && gyv(r, u, c), e.setWithVelocity(o.sample(Math.max(0, a - l)).value, c, l), o.stop();
    }
  };
} }), lXl, 