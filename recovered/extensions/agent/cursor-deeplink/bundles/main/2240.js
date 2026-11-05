// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2240 range:212629..217340
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2240: (e2, t2, A2) => {
    var n2 = A2(5045), r2 = A2(7417), o2 = A2(6187), s = A2(2827);
    function i(e3, t3, A3) {
      if (arguments.length < 2 && (A3 = e3, e3 = null, t3 = null), this.capacity = A3, "number" != typeof this.capacity || this.capacity <= 0) throw new Error("mnemonist/lru-cache: capacity should be positive number.");
      if (!isFinite(this.capacity) || Math.floor(this.capacity) !== this.capacity) throw new Error("mnemonist/lru-cache: capacity should be a finite positive integer.");
      var n3 = o2.getPointerArray(A3);
      this.forward = new n3(A3), this.backward = new n3(A3), this.K = "function" == typeof e3 ? new e3(A3) : new Array(A3), this.V = "function" == typeof t3 ? new t3(A3) : new Array(A3), this.size = 0, this.head = 0, this.tail = 0, this.items = {};
    }
    i.prototype.clear = function() {
      this.size = 0, this.head = 0, this.tail = 0, this.items = {};
    }, i.prototype.splayOnTop = function(e3) {
      var t3 = this.head;
      if (this.head === e3) return this;
      var A3 = this.backward[e3], n3 = this.forward[e3];
      return this.tail === e3 ? this.tail = A3 : this.backward[n3] = A3, this.forward[A3] = n3, this.backward[t3] = e3, this.head = e3, this.forward[e3] = t3, this;
    }, i.prototype.set = function(e3, t3) {
      var A3 = this.items[e3];
      if (void 0 !== A3) return this.splayOnTop(A3), void (this.V[A3] = t3);
      this.size < this.capacity ? A3 = this.size++ : (A3 = this.tail, this.tail = this.backward[A3], delete this.items[this.K[A3]]), this.items[e3] = A3, this.K[A3] = e3, this.V[A3] = t3, this.forward[A3] = this.head, this.backward[this.head] = A3, this.head = A3;
    }, i.prototype.setpop = function(e3, t3) {
      var A3 = null, n3 = null, r3 = this.items[e3];
      return void 0 !== r3 ? (this.splayOnTop(r3), A3 = this.V[r3], this.V[r3] = t3, { evicted: false, key: e3, value: A3 }) : (this.size < this.capacity ? r3 = this.size++ : (r3 = this.tail, this.tail = this.backward[r3], A3 = this.V[r3], n3 = this.K[r3], delete this.items[n3]), this.items[e3] = r3, this.K[r3] = e3, this.V[r3] = t3, this.forward[r3] = this.head, this.backward[this.head] = r3, this.head = r3, n3 ? { evicted: true, key: n3, value: A3 } : null);
    }, i.prototype.has = function(e3) {
      return e3 in this.items;
    }, i.prototype.get = function(e3) {
      var t3 = this.items[e3];
      if (void 0 !== t3) return this.splayOnTop(t3), this.V[t3];
    }, i.prototype.peek = function(e3) {
      var t3 = this.items[e3];
      if (void 0 !== t3) return this.V[t3];
    }, i.prototype.forEach = function(e3, t3) {
      t3 = arguments.length > 1 ? t3 : this;
      for (var A3 = 0, n3 = this.size, r3 = this.head, o3 = this.K, s2 = this.V, i2 = this.forward; A3 < n3; ) e3.call(t3, s2[r3], o3[r3], this), r3 = i2[r3], A3++;
    }, i.prototype.keys = function() {
      var e3 = 0, t3 = this.size, A3 = this.head, r3 = this.K, o3 = this.forward;
      return new n2(function() {
        if (e3 >= t3) return { done: true };
        var n3 = r3[A3];
        return ++e3 < t3 && (A3 = o3[A3]), { done: false, value: n3 };
      });
    }, i.prototype.values = function() {
      var e3 = 0, t3 = this.size, A3 = this.head, r3 = this.V, o3 = this.forward;
      return new n2(function() {
        if (e3 >= t3) return { done: true };
        var n3 = r3[A3];
        return ++e3 < t3 && (A3 = o3[A3]), { done: false, value: n3 };
      });
    }, i.prototype.entries = function() {
      var e3 = 0, t3 = this.size, A3 = this.head, r3 = this.K, o3 = this.V, s2 = this.forward;
      return new n2(function() {
        if (e3 >= t3) return { done: true };
        var n3 = r3[A3], i2 = o3[A3];
        return ++e3 < t3 && (A3 = s2[A3]), { done: false, value: [n3, i2] };
      });
    }, "undefined" != typeof Symbol && (i.prototype[Symbol.iterator] = i.prototype.entries), i.prototype.inspect = function() {
      for (var e3, t3 = /* @__PURE__ */ new Map(), A3 = this.entries(); !(e3 = A3.next()).done; ) t3.set(e3.value[0], e3.value[1]);
      return Object.defineProperty(t3, "constructor", { value: i, enumerable: false }), t3;
    }, "undefined" != typeof Symbol && (i.prototype[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = i.prototype.inspect), i.from = function(e3, t3, A3, n3) {
      if (arguments.length < 2) {
        if ("number" != typeof (n3 = s.guessLength(e3))) throw new Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.");
      } else 2 === arguments.length && (n3 = t3, t3 = null, A3 = null);
      var o3 = new i(t3, A3, n3);
      return r2(e3, function(e4, t4) {
        o3.set(t4, e4);
      }), o3;
    }, e2.exports = i;
  }