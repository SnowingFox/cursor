// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 7416 range:57001..57969
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7416: (t2, e2, i2) => {
    var s2 = i2(9039), n2 = i2(8227), r2 = i2(3724), a2 = i2(6395), o2 = n2("iterator");
    t2.exports = !s2(function() {
      var t3 = new URL("b?a=1&b=2&c=3", "https://a"), e3 = t3.searchParams, i3 = new URLSearchParams("a=1&a=2&b=3"), s3 = "";
      return t3.pathname = "c%20d", e3.forEach(function(t4, i4) {
        e3.delete("b"), s3 += i4 + t4;
      }), i3.delete("a", 2), i3.delete("b", void 0), a2 && (!t3.toJSON || !i3.has("a", 1) || i3.has("a", 2) || !i3.has("a", void 0) || i3.has("b")) || !e3.size && (a2 || !r2) || !e3.sort || "https://a/c%20d?a=1&c=3" !== t3.href || "3" !== e3.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e3[o2] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== s3 || "x" !== new URL("https://x", void 0).host;
    });
  }