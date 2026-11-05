// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
// module: 9835 range:86036..86576
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