// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 5438 range:108379..108957
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5438: (t2, r2, e2) => {
    var n2 = e2(9345), o2 = e2(4188), i2 = e2(8689), a2 = e2(4282)("toStringTag"), u2 = Object, s2 = "Arguments" === i2(/* @__PURE__ */ (function() {
      return arguments;
    })());
    t2.exports = n2 ? i2 : function(t3) {
      var r3, e3, n3;
      return void 0 === t3 ? "Undefined" : null === t3 ? "Null" : "string" == typeof (e3 = (function(t4, r4) {
        try {
          return t4[r4];
        } catch (t5) {
        }
      })(r3 = u2(t3), a2)) ? e3 : s2 ? i2(r3) : "Object" === (n3 = i2(r3)) && o2(r3.callee) ? "Arguments" : n3;
    };
  }