// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 5636 range:550625..551696
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5636: (e2, t2, A2) => {
    var n2 = A2(181), r2 = n2.Buffer;
    function o2(e3, t3) {
      for (var A3 in e3) t3[A3] = e3[A3];
    }
    function s(e3, t3, A3) {
      return r2(e3, t3, A3);
    }
    r2.from && r2.alloc && r2.allocUnsafe && r2.allocUnsafeSlow ? e2.exports = n2 : (o2(n2, t2), t2.Buffer = s), s.prototype = Object.create(r2.prototype), o2(r2, s), s.from = function(e3, t3, A3) {
      if ("number" == typeof e3) throw new TypeError("Argument must not be a number");
      return r2(e3, t3, A3);
    }, s.alloc = function(e3, t3, A3) {
      if ("number" != typeof e3) throw new TypeError("Argument must be a number");
      var n3 = r2(e3);
      return void 0 !== t3 ? "string" == typeof A3 ? n3.fill(t3, A3) : n3.fill(t3) : n3.fill(0), n3;
    }, s.allocUnsafe = function(e3) {
      if ("number" != typeof e3) throw new TypeError("Argument must be a number");
      return r2(e3);
    }, s.allocUnsafeSlow = function(e3) {
      if ("number" != typeof e3) throw new TypeError("Argument must be a number");
      return n2.SlowBuffer(e3);
    };
  }