// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 8004 range:62291..62709
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8004: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9039), r2 = i2(8750);
    s2({ target: "Set", proto: true, real: true, forced: !i2(4916)("intersection", function(t3) {
      return 2 === t3.size && t3.has(1) && t3.has(2);
    }) || n2(function() {
      return "3,2" !== String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2]))));
    }) }, { intersection: r2 });
  }