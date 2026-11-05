// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DOMVisualElement.mjs range:35384529..35385320
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.650Z
GSv = L({ "DOMVisualElement.mjs"() {
  E(), wRt(), Uf0(), WSv(), jXl = class extends HSv {
    constructor() {
      super(...arguments), this.KeyframeResolver = _Sv;
    }
    sortInstanceNodePosition(t, e) {
      return t.compareDocumentPosition(e) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, e) {
      const n = t.style;
      return n ? n[e] : void 0;
    }
    removeValueFromRenderState(t, { vars: e, style: n }) {
      delete e[t], delete n[t];
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      const { children: t } = this.props;
      ore(t) && (this.childSubscription = t.on("change", (e) => {
        this.current && (this.current.textContent = `${e}`);
      }));
    }
  };
} }), HQt, 