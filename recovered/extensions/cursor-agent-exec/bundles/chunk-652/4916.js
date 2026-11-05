// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 4916 range:40668..41577
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4916: (t2, e2, i2) => {
    var s2 = i2(7751), n2 = function(t3) {
      return { size: t3, has: function() {
        return false;
      }, keys: function() {
        return { next: function() {
          return { done: true };
        } };
      } };
    }, r2 = function(t3) {
      return { size: t3, has: function() {
        return true;
      }, keys: function() {
        throw new Error("e");
      } };
    };
    t2.exports = function(t3, e3) {
      var i3 = s2("Set");
      try {
        new i3()[t3](n2(0));
        try {
          return new i3()[t3](n2(-1)), false;
        } catch (s3) {
          if (!e3) return true;
          try {
            return new i3()[t3](r2(-1 / 0)), false;
          } catch (s4) {
            var a2 = new i3();
            return a2.add(1), a2.add(2), e3(a2[t3](r2(1 / 0)));
          }
        }
      } catch (t4) {
        return false;
      }
    };
  }