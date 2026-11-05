// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4348 range:91251..91694
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4348: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(1942), i2 = e2(7301).CONSTRUCTOR, a2 = e2(6453), u2 = e2(5604), s2 = e2(4188), c = e2(7509), f = a2 && a2.prototype;
    if (n2({ target: "Promise", proto: true, forced: i2, real: true }, { catch: function(t3) {
      return this.then(void 0, t3);
    } }), !o2 && s2(a2)) {
      var h = u2("Promise").prototype.catch;
      f.catch !== h && c(f, "catch", h, { unsafe: true });
    }
  }