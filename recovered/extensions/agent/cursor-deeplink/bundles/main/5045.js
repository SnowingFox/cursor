// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 5045 range:547436..548360
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5045: (e2) => {
    function t2(e3) {
      if ("function" != typeof e3) throw new Error("obliterator/iterator: expecting a function!");
      this.next = e3;
    }
    "undefined" != typeof Symbol && (t2.prototype[Symbol.iterator] = function() {
      return this;
    }), t2.of = function() {
      var e3 = arguments, A2 = e3.length, n2 = 0;
      return new t2(function() {
        return n2 >= A2 ? { done: true } : { done: false, value: e3[n2++] };
      });
    }, t2.empty = function() {
      return new t2(function() {
        return { done: true };
      });
    }, t2.fromSequence = function(e3) {
      var A2 = 0, n2 = e3.length;
      return new t2(function() {
        return A2 >= n2 ? { done: true } : { done: false, value: e3[A2++] };
      });
    }, t2.is = function(e3) {
      return e3 instanceof t2 || "object" == typeof e3 && null !== e3 && "function" == typeof e3.next;
    }, e2.exports = t2;
  }