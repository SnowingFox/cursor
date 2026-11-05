// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4106 range:81969..82926
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4106: (t2, r2, e2) => {
    var n2 = e2(3770), o2 = e2(9944), i2 = e2(2331), a2 = e2(6224), u2 = e2(6002), s2 = e2(8500), c = e2(2175), f = e2(6881), h = TypeError, l = f([].push), p = f([].slice), v = "allow-partial", d = i2(function() {
      for (var t3, r3, e3 = this.iterator, i3 = this.next, u3 = this.buffer, s3 = this.windowSize, c2 = this.allowPartial; ; ) {
        if (t3 = n2(o2(i3, e3)), r3 = this.done = !!t3.done, c2 && r3 && u3.length && u3.length < s3) return a2(p(u3, 0), false);
        if (r3) return a2(void 0, true);
        if (u3.length === s3 && (this.buffer = u3 = p(u3, 1)), l(u3, t3.value), u3.length === s3) return a2(p(u3, 0), false);
      }
    }, false, true);
    t2.exports = function(t3, r3, e3) {
      return n2(t3), c(r3, t3), void 0 !== e3 && "only-full" !== e3 && e3 !== v ? s2(t3, "throw", new h("Incorrect `undersized` argument")) : new d(u2(t3), { windowSize: r3, buffer: [], allowPartial: e3 === v });
    };
  }