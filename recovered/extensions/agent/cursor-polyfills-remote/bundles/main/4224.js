// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4224 range:84927..85507
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4224: (t2, r2, e2) => {
    var n2 = e2(6893), o2 = e2(6719), i2 = TypeError, a2 = Object.getOwnPropertyDescriptor, u2 = n2 && !(function() {
      if (void 0 !== this) return true;
      try {
        Object.defineProperty([], "length", { writable: false }).length = 1;
      } catch (t3) {
        return t3 instanceof TypeError;
      }
    })();
    t2.exports = u2 ? function(t3, r3) {
      if (o2(t3) && !a2(t3, "length").writable) throw new i2("Cannot set read only .length");
      return t3.length = r3;
    } : function(t3, r3) {
      return t3.length = r3;
    };
  }