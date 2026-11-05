// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4416 range:92687..92928
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4416: (t2, r2) => {
    var e2 = {}.propertyIsEnumerable, n2 = Object.getOwnPropertyDescriptor, o2 = n2 && !e2.call({ 1: 2 }, 1);
    r2.f = o2 ? function(t3) {
      var r3 = n2(this, t3);
      return !!r3 && r3.enumerable;
    } : e2;
  }