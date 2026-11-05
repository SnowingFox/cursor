// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: HTMLVisualElement.mjs range:35389481..35390377
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.718Z
vv0 = L({ "HTMLVisualElement.mjs"() {
  E(), aFi(), iYe(), lyv(), uv0(), GSv(), HXl(), KSv(), GXl(), e1v = class extends jXl {
    constructor() {
      super(...arguments), this.type = "html", this.renderInstance = VSv;
    }
    readValueFromInstance(t, e) {
      if (jQt.has(e)) return this.projection?.isProjecting ? ZYl(e) : ayv(t, e);
      {
        const n = fv0(t), i = (PYl(e) ? n.getPropertyValue(e) : n[e]) || 0;
        return typeof i == "string" ? i.trim() : i;
      }
    }
    measureInstanceViewportBox(t, { transformPagePoint: e }) {
      return cv0(t, e);
    }
    build(t, e, n) {
      $Xl(t, e, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, e, n) {
      return WXl(t, e, n);
    }
  };
} });
function _v0(t, e, n = 1, i = 0, r = true) {
  t.pathLength = 1;
  const s = r ? t1v : n1v;
  t[s.offset] = `${-i}`, t[s.array] = `${e} ${n}`;
}
var t1v, n1v, 