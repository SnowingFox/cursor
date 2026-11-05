// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
// module: 8004 range:61925..62343
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