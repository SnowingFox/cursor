// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 7283 range:131986..132732
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7283: (t2, r2, e2) => {
    var n2 = e2(4282)("iterator"), o2 = false;
    try {
      var i2 = 0, a2 = { next: function() {
        return { done: !!i2++ };
      }, return: function() {
        o2 = true;
      } };
      a2[n2] = function() {
        return this;
      }, Array.from(a2, function() {
        throw 2;
      });
    } catch (t3) {
    }
    t2.exports = function(t3, r3) {
      try {
        if (!r3 && !o2) return false;
      } catch (t4) {
        return false;
      }
      var e3 = false;
      try {
        var i3 = {};
        i3[n2] = function() {
          return { next: function() {
            return { done: e3 = true };
          } };
        }, t3(i3);
      } catch (t4) {
      }
      return e3;
    };
  }