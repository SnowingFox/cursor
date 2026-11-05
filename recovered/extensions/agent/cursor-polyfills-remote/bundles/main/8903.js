// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 8903 range:158430..158848
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8903: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(5234), i2 = e2(3721);
    n2({ target: "Set", proto: true, real: true, forced: !e2(4471)("intersection", function(t3) {
      return 2 === t3.size && t3.has(1) && t3.has(2);
    }) || o2(function() {
      return "3,2" !== String(Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2]))));
    }) }, { intersection: i2 });
  }