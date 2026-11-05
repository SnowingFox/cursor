// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2827 range:393935..394751
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2827: (e2, t2, A2) => {
    var n2 = A2(7417), r2 = A2(6187);
    function o2(e3) {
      return "number" == typeof e3.length ? e3.length : "number" == typeof e3.size ? e3.size : void 0;
    }
    t2.isArrayLike = function(e3) {
      return Array.isArray(e3) || r2.isTypedArray(e3);
    }, t2.guessLength = o2, t2.toArray = function(e3) {
      var t3 = o2(e3), A3 = "number" == typeof t3 ? new Array(t3) : [], r3 = 0;
      return n2(e3, function(e4) {
        A3[r3++] = e4;
      }), A3;
    }, t2.toArrayWithIndices = function(e3) {
      var t3 = o2(e3), A3 = "number" == typeof t3 ? r2.getPointerArray(t3) : Array, s = "number" == typeof t3 ? new Array(t3) : [], i = "number" == typeof t3 ? new A3(t3) : [], a = 0;
      return n2(e3, function(e4) {
        s[a] = e4, i[a] = a++;
      }), [s, i];
    };
  }