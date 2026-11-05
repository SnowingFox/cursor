// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 9800 range:169911..170195
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9800: (t2, r2, e2) => {
    var n2 = e2(6881), o2 = e2(7032), i2 = e2(3243), a2 = i2.Set, u2 = i2.proto, s2 = n2(u2.forEach), c = n2(u2.keys), f = c(new a2()).next;
    t2.exports = function(t3, r3, e3) {
      return e3 ? o2({ iterator: c(t3), next: f }, r3) : s2(t3, r3);
    };
  }