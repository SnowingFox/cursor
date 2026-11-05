// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SVGVisualElement.mjs range:35392531..35393731
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.034Z
kv0 = L({ "SVGVisualElement.mjs"() {
  E(), iYe(), pSv(), NSv(), GSv(), yXl(), s1v(), o1v(), a1v(), Sv0(), c1v(), u1v = class extends jXl {
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = LXl;
    }
    getBaseTargetFromProps(t, e) {
      return t[e];
    }
    readValueFromInstance(t, e) {
      if (jQt.has(e)) {
        const n = xXl(e);
        return n && n.default || 0;
      }
      return e = qXl.has(e) ? e : bXl(e), t.getAttribute(e);
    }
    scrapeMotionValuesFromProps(t, e, n) {
      return l1v(t, e, n);
    }
    build(t, e, n) {
      i1v(t, e, this.isSVGTag, n.transformTemplate, n.style);
    }
    renderInstance(t, e, n, i) {
      yv0(t, e, n, i);
    }
    mount(t) {
      this.isSVGTag = zXl(t.tagName), super.mount(t);
    }
  };
} });
function d1v(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? d1v(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < h1v; n++) {
    const i = fRs[n], r = t.props[i];
    (mFi(r) || r === false) && (e[i] = r);
  }
  return e;
}
var h1v, 