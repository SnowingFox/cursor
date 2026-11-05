// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 8094 range:138479..138963
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8094: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(5234), i2 = e2(3628), a2 = e2(290);
    n2({ target: "Date", proto: true, forced: o2(function() {
      return null !== (/* @__PURE__ */ new Date(NaN)).toJSON() || 1 !== Date.prototype.toJSON.call({ toISOString: function() {
        return 1;
      } });
    }) }, { toJSON: function(t3) {
      var r3 = i2(this), e3 = a2(r3, "number");
      return "number" != typeof e3 || isFinite(e3) ? r3.toISOString() : null;
    } });
  }