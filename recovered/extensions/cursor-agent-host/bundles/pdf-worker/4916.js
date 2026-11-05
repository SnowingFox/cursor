// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 4916 range:41034..41943
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