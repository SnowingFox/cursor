// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InternalBackdrop.js range:6128405..6129124
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.758Z
cci = L({ "InternalBackdrop.js"() {
  E(), l7t = Hjy.forwardRef(function(e, n) {
    const { cutout: i, ...r } = e;
    let s;
    if (i) {
      const o = i.getBoundingClientRect();
      s = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${o.left}px ${o.top}px,${o.left}px ${o.bottom}px,${o.right}px ${o.bottom}px,${o.right}px ${o.top}px,${o.left}px ${o.top}px)`;
    }
    return Wjy("div", { ref: n, role: "presentation", "data-base-ui-inert": "", ...r, style: { position: "fixed", inset: 0, userSelect: "none", WebkitUserSelect: "none", clipPath: s } });
  }), process.env.NODE_ENV !== "production" && (l7t.displayName = "InternalBackdrop");
} });
function C2r(t, e) {
  t && Object.assign(t.style, e);
}
var $Jo, 