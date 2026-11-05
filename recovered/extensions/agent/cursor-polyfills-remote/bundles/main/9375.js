// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 9375 range:163487..164146
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9375: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(3628), i2 = e2(9389), a2 = e2(4224), u2 = e2(2197);
    n2({ target: "Array", proto: true, arity: 1, forced: e2(5234)(function() {
      return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
    }) || !(function() {
      try {
        Object.defineProperty([], "length", { writable: false }).push();
      } catch (t3) {
        return t3 instanceof TypeError;
      }
    })() }, { push: function(t3) {
      var r3 = o2(this), e3 = i2(r3), n3 = arguments.length;
      u2(e3 + n3);
      for (var s2 = 0; s2 < n3; s2++) r3[e3] = arguments[s2], e3++;
      return a2(r3, e3), e3;
    } });
  }