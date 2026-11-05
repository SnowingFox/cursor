// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: KeyframesResolver.mjs range:35336926..35338437
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.098Z
// wrapper: iXl deps:13 [E, Bg0, dyv, bRt, Set, scheduleResolve, readKeyframes, complete, get, setFinalKeyframe, measureInitialState, renderEndStyles]
// declarations: (none in segment) (segment truncated)
// anchors: (none)
// group: third-party-build-mjs
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
iXl = L({ "KeyframesResolver.mjs"() {
  E(), Bg0(), dyv(), bRt(), kRt = /* @__PURE__ */ new Set(), nRs = false, iRs = false, rRs = false, sRs = class {
    constructor(t, e, n, i, r, s = false) {
      this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = n, this.motionValue = i, this.element = r, this.isAsync = s;
    }
    scheduleResolve() {
      this.state = "scheduled", this.isAsync ? (kRt.add(this), nRs || (nRs = true, oEe.read(pyv), oEe.resolveKeyframes(hyv))) : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      const { unresolvedKeyframes: t, name: e, element: n, motionValue: i } = this;
      if (t[0] === null) {
        const r = i?.get(), s = t[t.length - 1];
        if (r !== void 0) t[0] = r;
        else if (n && e) {
          const o = n.readValue(e, s);
          o != null && (t[0] = o);
        }
        t[0] === void 0 && (t[0] = s), i && r === void 0 && i.set(t[0]);
      }
      Fg0(t);
    }
    setFinalKeyframe() {
    }
    measureInitialState() {
    }
    renderEndStyles() {
    }
    measureEndState() {
    }
    complete(t = false) {
      this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), kRt.delete(this);
    }
    cancel() {
      this.state === "scheduled" && (kRt.delete(this), this.state = "pending");
    }
    resume() {
      this.state === "pending" && this.scheduleResolve();
    }
  };
} }), myv,
