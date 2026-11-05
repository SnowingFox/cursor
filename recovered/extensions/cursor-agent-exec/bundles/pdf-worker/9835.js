// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 9835 range:86403..86943
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9835: (t2) => {
    t2.exports = function(t3) {
      try {
        var e2 = /* @__PURE__ */ new Set(), i2 = { size: 0, has: function() {
          return true;
        }, keys: function() {
          return Object.defineProperty({}, "next", { get: function() {
            return e2.clear(), e2.add(4), function() {
              return { done: true };
            };
          } });
        } }, s2 = e2[t3](i2);
        return 1 === s2.size && 4 === s2.values().next().value;
      } catch (t4) {
        return false;
      }
    };
  }