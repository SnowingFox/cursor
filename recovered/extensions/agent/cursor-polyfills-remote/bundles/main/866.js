// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 866 range:34440..35332
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
866: (t2, r2, e2) => {
    var n2 = e2(6881), o2 = e2(5234), i2 = e2(4188), a2 = e2(5438), u2 = e2(5604), s2 = e2(3029), c = function() {
    }, f = u2("Reflect", "construct"), h = /^\s*(?:class|function)\b/, l = n2(h.exec), p = !h.test(c), v = function(t3) {
      if (!i2(t3)) return false;
      try {
        return f(c, [], t3), true;
      } catch (t4) {
        return false;
      }
    }, d = function(t3) {
      if (!i2(t3)) return false;
      switch (a2(t3)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return false;
      }
      try {
        return p || !!l(h, s2(t3));
      } catch (t4) {
        return true;
      }
    };
    d.sham = true, t2.exports = !f || o2(function() {
      var t3;
      return v(v.call) || !v(Object) || !v(function() {
        t3 = true;
      }) || t3;
    }) ? d : v;
  }