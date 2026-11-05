// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 4114 range:28724..29383
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4114: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(8981), r2 = i2(6198), a2 = i2(4527), o2 = i2(6837);
    s2({ target: "Array", proto: true, arity: 1, forced: i2(9039)(function() {
      return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
    }) || !(function() {
      try {
        Object.defineProperty([], "length", { writable: false }).push();
      } catch (t3) {
        return t3 instanceof TypeError;
      }
    })() }, { push: function(t3) {
      var e3 = n2(this), i3 = r2(e3), s3 = arguments.length;
      o2(i3 + s3);
      for (var l2 = 0; l2 < s3; l2++) e3[i3] = arguments[l2], i3++;
      return a2(e3, i3), i3;
    } });
  }