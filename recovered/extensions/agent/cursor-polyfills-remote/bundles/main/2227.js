// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 2227 range:54776..55557
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2227: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(9391), i2 = e2(5062), a2 = e2(5604), u2 = e2(6881), s2 = e2(2618), c = e2(4417), f = e2(3086).set, h = SyntaxError, l = a2("JSON", "parse"), p = a2("Object", "create"), v = a2("Object", "freeze"), d = u2("".charAt), g = "Unacceptable as raw JSON", y = function(t3) {
      return " " === t3 || "	" === t3 || "\n" === t3 || "\r" === t3;
    };
    n2({ target: "JSON", stat: true, forced: !i2 }, { rawJSON: function(t3) {
      var r3 = s2(t3);
      if ("" === r3 || y(d(r3, 0)) || y(d(r3, r3.length - 1))) throw new h(g);
      var e3 = l(r3);
      if ("object" == typeof e3 && null !== e3) throw new h(g);
      var n3 = p(null);
      return f(n3, { type: "RawJSON" }), c(n3, "rawJSON", r3), o2 ? v(n3) : n3;
    } });
  }