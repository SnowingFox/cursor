// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4471 range:94419..95287
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4471: (t2, r2, e2) => {
    var n2 = e2(5604), o2 = function(t3) {
      return { size: t3, has: function() {
        return false;
      }, keys: function() {
        return { next: function() {
          return { done: true };
        } };
      } };
    }, i2 = function(t3) {
      return { size: t3, has: function() {
        return true;
      }, keys: function() {
        throw new Error("e");
      } };
    };
    t2.exports = function(t3, r3) {
      var e3 = n2("Set");
      try {
        new e3()[t3](o2(0));
        try {
          return new e3()[t3](o2(-1)), false;
        } catch (n3) {
          if (!r3) return true;
          try {
            return new e3()[t3](i2(-1 / 0)), false;
          } catch (n4) {
            return r3(new e3([1, 2])[t3](i2(1 / 0)));
          }
        }
      } catch (t4) {
        return false;
      }
    };
  }