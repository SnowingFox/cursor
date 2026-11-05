// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InternalBackdrop.mjs range:31326552..31327264
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.759Z
vgw = L({ "InternalBackdrop.mjs"() {
  E(), POl = ggw.forwardRef(function(e, n) {
    const { cutout: i, ...r } = e;
    let s;
    if (i) {
      const o = i.getBoundingClientRect();
      s = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${o.left}px ${o.top}px,${o.left}px ${o.bottom}px,${o.right}px ${o.bottom}px,${o.right}px ${o.top}px,${o.left}px ${o.top}px)`;
    }
    return fgw("div", { ref: n, role: "presentation", "data-base-ui-inert": "", ...r, style: { position: "fixed", inset: 0, userSelect: "none", WebkitUserSelect: "none", clipPath: s } });
  }), process.env.NODE_ENV !== "production" && (POl.displayName = "InternalBackdrop");
} });
function BPf(t) {
  return t === "starting" ? gRf : JX;
}
