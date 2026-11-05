// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VisualElement.mjs range:35375166..35384529
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.144Z
WSv = L({ "VisualElement.mjs"() {
  E(), xR(), iXl(), Eyv(), Ayv(), Wf0(), lOn(), NSv(), _Xl(), Uut(), fSv(), ev0(), wRt(), tv0(), FSv(), iYe(), iv0(), jSv(), mXl(), BXl(), bRt(), UXl = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"], fFi = {}, HSv = class {
    scrapeMotionValuesFromProps(t, e, n) {
      return {};
    }
    constructor({ parent: t, props: e, presenceContext: n, reducedMotionConfig: i, skipAnimations: r, blockInitialAnimation: s, visualState: o }, a = {}) {
      this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.shouldSkipAnimations = false, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = sRs, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = false, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.renderScheduledAt = 0, this.scheduleRender = () => {
        const h = Qye.now();
        this.renderScheduledAt < h && (this.renderScheduledAt = h, oEe.render(this.render, false, true));
      };
      const { latestValues: l, renderState: c } = o;
      this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = e.initial ? { ...l } : {}, this.renderState = c, this.parent = t, this.props = e, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.skipAnimationsConfig = r, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = vRs(e), this.isVariantNode = OSv(e), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
      const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(e, {}, this);
      for (const h in d) {
        const p = d[h];
        l[h] !== void 0 && ore(p) && p.set(l[h]);
      }
    }
    mount(t) {
      if (this.hasBeenMounted) for (const e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
      this.current = t, LSv.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, n) => this.bindToMotionValue(n, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = false : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = true : (_Rs.current || BSv(), this.shouldReduceMotion = gFi.current), process.env.NODE_ENV !== "production" && LAs(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? false, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = true;
    }
    unmount() {
      this.projection && this.projection.unmount(), BAs(this.notifyUpdate), BAs(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
      for (const t in this.events) this.events[t].clear();
      for (const t in this.features) {
        const e = this.features[t];
        e && (e.unmount(), e.isMounted = false);
      }
      this.current = null;
    }
    addChild(t) {
      this.children.add(t), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
    }
    removeChild(t) {
      this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
    }
    bindToMotionValue(t, e) {
      if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), e.accelerate && uXl.has(t) && this.current instanceof HTMLElement) {
        const { factory: s, keyframes: o, times: a, ease: l, duration: c } = e.accelerate, u = new oXl({ element: this.current, name: t, keyframes: o, times: a, ease: l, duration: sEe(c) }), d = s(u);
        this.valueSubscriptions.set(t, () => {
          d(), u.cancel();
        });
        return;
      }
      const n = jQt.has(t);
      n && this.onBindTransform && this.onBindTransform();
      const i = e.on("change", (s) => {
        this.latestValues[t] = s, this.props.onUpdate && oEe.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = true), this.scheduleRender();
      });
      let r;
      typeof window < "u" && window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
        i(), r && r(), e.owner && e.stop();
      });
    }
    sortNodePosition(t) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
    }
    updateFeatures() {
      let t = "animation";
      for (t in fFi) {
        const e = fFi[t];
        if (!e) continue;
        const { isEnabled: n, Feature: i } = e;
        if (!this.features[t] && i && n(this.props) && (this.features[t] = new i(this)), this.features[t]) {
          const r = this.features[t];
          r.isMounted ? r.update() : (r.mount(), r.isMounted = true);
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : LXl();
    }
    getStaticValue(t) {
      return this.latestValues[t];
    }
    setStaticValue(t, e) {
      this.latestValues[t] = e;
    }
    update(t, e) {
      (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
      for (let n = 0; n < UXl.length; n++) {
        const i = UXl[n];
        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
        const r = "on" + i, s = t[r];
        s && (this.propEventSubscriptions[i] = this.on(i, s));
      }
      this.prevMotionValues = nv0(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(t) {
      return this.props.variants ? this.props.variants[t] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    addVariantChild(t) {
      const e = this.getClosestVariantNode();
      if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t);
    }
    addValue(t, e) {
      const n = this.values.get(t);
      e !== n && (n && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get());
    }
    removeValue(t) {
      this.values.delete(t);
      const e = this.valueSubscriptions.get(t);
      e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
    }
    hasValue(t) {
      return this.values.has(t);
    }
    getValue(t, e) {
      if (this.props.values && this.props.values[t]) return this.props.values[t];
      let n = this.values.get(t);
      return n === void 0 && e !== void 0 && (n = aRs(e === null ? void 0 : e, { owner: this }), this.addValue(t, n)), n;
    }
    readValue(t, e) {
      let n = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
      return n != null && (typeof n == "string" && (dYl(n) || hYl(n)) ? n = parseFloat(n) : !DSv(n) && $De.test(e) && (n = mSv(t, e)), this.setBaseTarget(t, ore(n) ? n.get() : n)), ore(n) ? n.get() : n;
    }
    setBaseTarget(t, e) {
      this.baseTarget[t] = e;
    }
    getBaseTarget(t) {
      const { initial: e } = this.props;
      let n;
      if (typeof e == "string" || typeof e == "object") {
        const r = pXl(this.props, e, this.presenceContext?.custom);
        r && (n = r[t]);
      }
      if (e && n !== void 0) return n;
      const i = this.getBaseTargetFromProps(this.props, t);
      return i !== void 0 && !ore(i) ? i : this.initialValues[t] !== void 0 && n === void 0 ? void 0 : this.baseTarget[t];
    }
    on(t, e) {
      return this.events[t] || (this.events[t] = new gYl()), this.events[t].add(e);
    }
    notify(t, ...e) {
      this.events[t] && this.events[t].notify(...e);
    }
    scheduleRenderMicrotask() {
      SSv.render(this.render);
    }
  };
} }), jXl, 