// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 2419 range:58957..59577
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2419: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(3770), i2 = e2(9944), a2 = e2(2331), u2 = e2(6002), s2 = e2(2175), c = e2(6881), f = e2(1942), h = c([].push), l = a2(function() {
      for (var t3, r3 = this.iterator, e3 = this.next, n3 = this.chunkSize, a3 = []; ; ) {
        if (!!(t3 = o2(i2(e3, r3))).done) return a3.length ? a3 : void (this.done = true);
        if (h(a3, t3.value), a3.length === n3) return a3;
      }
    });
    n2({ target: "Iterator", proto: true, real: true, forced: f }, { chunks: function(t3) {
      return o2(this), s2(t3, this), new l(u2(this), { chunkSize: t3 });
    } });
  }