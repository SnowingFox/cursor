// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 7642 range:59308..59924
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7642: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(3440), r2 = i2(9039);
    s2({ target: "Set", proto: true, real: true, forced: !i2(4916)("difference", function(t3) {
      return 0 === t3.size;
    }) || r2(function() {
      var t3 = { size: 1, has: function() {
        return true;
      }, keys: function() {
        var t4 = 0;
        return { next: function() {
          var i3 = t4++ > 1;
          return e3.has(1) && e3.clear(), { done: i3, value: 2 };
        } };
      } }, e3 = /* @__PURE__ */ new Set([1, 2, 3, 4]);
      return 3 !== e3.difference(t3).size;
    }) }, { difference: n2 });
  }