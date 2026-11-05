// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 5615 range:550141..550623
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5615: (e2) => {
    "function" == typeof Object.create ? e2.exports = function(e3, t2) {
      t2 && (e3.super_ = t2, e3.prototype = Object.create(t2.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }));
    } : e2.exports = function(e3, t2) {
      if (t2) {
        e3.super_ = t2;
        var A2 = function() {
        };
        A2.prototype = t2.prototype, e3.prototype = new A2(), e3.prototype.constructor = e3;
      }
    };
  }