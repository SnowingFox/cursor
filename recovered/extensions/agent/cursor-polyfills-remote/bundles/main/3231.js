// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 3231 range:70052..73096
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3231: (t2, r2, e2) => {
    var n2 = e2(7065), o2 = e2(997), i2 = e2(4320), a2 = e2(5821), u2 = e2(286), s2 = e2(4318), c = e2(8873), f = e2(3217), h = e2(6224), l = e2(3900), p = e2(6893), v = e2(8118).fastKey, d = e2(3086), g = d.set, y = d.getterFor;
    t2.exports = { getConstructor: function(t3, r3, e3, f2) {
      var h2 = t3(function(t4, o3) {
        u2(t4, l2), g(t4, { type: r3, index: n2(null), first: null, last: null, size: 0 }), p || (t4.size = 0), s2(o3) || c(o3, t4[f2], { that: t4, AS_ENTRIES: e3 });
      }), l2 = h2.prototype, d2 = y(r3), w = function(t4, r4, e4) {
        var n3, o3, i3 = d2(t4), a3 = x(t4, r4);
        return a3 ? a3.value = e4 : (i3.last = a3 = { index: o3 = v(r4, true), key: r4, value: e4, previous: n3 = i3.last, next: null, removed: false }, i3.first || (i3.first = a3), n3 && (n3.next = a3), p ? i3.size++ : t4.size++, "F" !== o3 && (i3.index[o3] = a3)), t4;
      }, x = function(t4, r4) {
        var e4, n3 = d2(t4), o3 = v(r4);
        if ("F" !== o3) return n3.index[o3];
        for (e4 = n3.first; e4; e4 = e4.next) if (e4.key === r4) return e4;
      };
      return i2(l2, { clear: function() {
        for (var t4 = d2(this), r4 = t4.first; r4; ) r4.removed = true, r4.previous && (r4.previous = r4.previous.next = null), r4 = r4.next;
        t4.first = t4.last = null, t4.index = n2(null), p ? t4.size = 0 : this.size = 0;
      }, delete: function(t4) {
        var r4 = this, e4 = d2(r4), n3 = x(r4, t4);
        if (n3) {
          var o3 = n3.next, i3 = n3.previous;
          delete e4.index[n3.index], n3.removed = true, i3 && (i3.next = o3), o3 && (o3.previous = i3), e4.first === n3 && (e4.first = o3), e4.last === n3 && (e4.last = i3), p ? e4.size-- : r4.size--;
        }
        return !!n3;
      }, forEach: function(t4) {
        for (var r4, e4 = d2(this), n3 = a2(t4, arguments.length > 1 ? arguments[1] : void 0); r4 = r4 ? r4.next : e4.first; ) for (n3(r4.value, r4.key, this); r4 && r4.removed; ) r4 = r4.previous;
      }, has: function(t4) {
        return !!x(this, t4);
      } }), i2(l2, e3 ? { get: function(t4) {
        var r4 = x(this, t4);
        return r4 && r4.value;
      }, set: function(t4, r4) {
        return w(this, 0 === t4 ? 0 : t4, r4);
      } } : { add: function(t4) {
        return w(this, t4 = 0 === t4 ? 0 : t4, t4);
      } }), p && o2(l2, "size", { configurable: true, get: function() {
        return d2(this).size;
      } }), h2;
    }, setStrong: function(t3, r3, e3) {
      var n3 = r3 + " Iterator", o3 = y(r3), i3 = y(n3);
      f(t3, r3, function(t4, r4) {
        g(this, { type: n3, target: t4, state: o3(t4), kind: r4, last: null });
      }, function() {
        for (var t4 = i3(this), r4 = t4.kind, e4 = t4.last; e4 && e4.removed; ) e4 = e4.previous;
        return t4.target && (t4.last = e4 = e4 ? e4.next : t4.state.first) ? h("keys" === r4 ? e4.key : "values" === r4 ? e4.value : [e4.key, e4.value], false) : (t4.target = null, h(void 0, true));
      }, e3 ? "entries" : "values", !e3, true), l(r3);
    } };
  }