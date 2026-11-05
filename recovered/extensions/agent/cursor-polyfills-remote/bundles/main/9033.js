// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 9033 range:159164..159780
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9033: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(7059), i2 = e2(5234);
    n2({ target: "Set", proto: true, real: true, forced: !e2(4471)("difference", function(t3) {
      return 0 === t3.size;
    }) || i2(function() {
      var t3 = { size: 1, has: function() {
        return true;
      }, keys: function() {
        var t4 = 0;
        return { next: function() {
          var e3 = t4++ > 1;
          return r3.has(1) && r3.clear(), { done: e3, value: 2 };
        } };
      } }, r3 = /* @__PURE__ */ new Set([1, 2, 3, 4]);
      return 3 !== r3.difference(t3).size;
    }) }, { difference: o2 });
  }