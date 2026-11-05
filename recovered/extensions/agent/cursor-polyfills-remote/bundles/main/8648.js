// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 8648 range:153453..153864
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8648: (t2) => {
    var r2 = function() {
      this.head = null, this.tail = null;
    };
    r2.prototype = { add: function(t3) {
      var r3 = { item: t3, next: null }, e2 = this.tail;
      e2 ? e2.next = r3 : this.head = r3, this.tail = r3;
    }, get: function() {
      var t3 = this.head;
      if (t3) return null === (this.head = t3.next) && (this.tail = null), t3.item;
    } }, t2.exports = r2;
  }