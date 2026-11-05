// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 7420 range:134236..134776
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7420: (t2) => {
    t2.exports = function(t3) {
      try {
        var r2 = /* @__PURE__ */ new Set(), e2 = { size: 0, has: function() {
          return true;
        }, keys: function() {
          return Object.defineProperty({}, "next", { get: function() {
            return r2.clear(), r2.add(4), function() {
              return { done: true };
            };
          } });
        } }, n2 = r2[t3](e2);
        return 1 === n2.size && 4 === n2.values().next().value;
      } catch (t4) {
        return false;
      }
    };
  }