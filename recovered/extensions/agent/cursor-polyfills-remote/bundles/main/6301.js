// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 6301 range:120693..121661
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6301: (t2, r2, e2) => {
    var n2 = e2(5234), o2 = e2(4282), i2 = e2(6893), a2 = e2(1942), u2 = o2("iterator");
    t2.exports = !n2(function() {
      var t3 = new URL("b?a=1&b=2&c=3", "https://a"), r3 = t3.searchParams, e3 = new URLSearchParams("a=1&a=2&b=3"), n3 = "";
      return t3.pathname = "c%20d", r3.forEach(function(t4, e4) {
        r3.delete("b"), n3 += e4 + t4;
      }), e3.delete("a", 2), e3.delete("b", void 0), a2 && (!t3.toJSON || !e3.has("a", 1) || e3.has("a", 2) || !e3.has("a", void 0) || e3.has("b")) || !r3.size && (a2 || !i2) || !r3.sort || "https://a/c%20d?a=1&c=3" !== t3.href || "3" !== r3.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !r3[u2] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== n3 || "x" !== new URL("https://x", void 0).host;
    });
  }