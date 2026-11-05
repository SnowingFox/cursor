// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProgressIndicator.js range:14708385..14709084
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.911Z
WkS = L({ "ProgressIndicator.js"() {
  E(), Om(), _9h(), m9h(), g9h(), vga = HkS.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { max: a, min: l, value: c, state: u } = BkS(), d = Number.isFinite(c) && c !== null ? v9h(c, l, a) : null, h = d == null ? {} : { insetInlineStart: 0, height: "inherit", width: `${d}%` };
    return Lm("div", e, { state: u, ref: n, props: [{ style: h }, o], stateAttributesMapping: gga });
  }), process.env.NODE_ENV !== "production" && (vga.displayName = "ProgressIndicator");
} });
function b9h(t) {
  let e = 5381;
  for (let n = 0; n < t.length; n++) e = Math.imul(e, 33) ^ t.charCodeAt(n);
  return (e >>> 0).toString(36);
}
