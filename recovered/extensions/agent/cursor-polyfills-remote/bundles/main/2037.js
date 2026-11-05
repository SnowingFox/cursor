// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 2037 range:52960..53508
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2037: (t2, r2, e2) => {
    var n2, o2, i2, a2 = e2(5234), u2 = e2(4188), s2 = e2(831), c = e2(7065), f = e2(1786), h = e2(7509), l = e2(4282), p = e2(1942), v = l("iterator"), d = false;
    [].keys && ("next" in (i2 = [].keys()) ? (o2 = f(f(i2))) !== Object.prototype && (n2 = o2) : d = true), !s2(n2) || a2(function() {
      var t3 = {};
      return n2[v].call(t3) !== t3;
    }) ? n2 = {} : p && (n2 = c(n2)), u2(n2[v]) || h(n2, v, function() {
      return this;
    }), t2.exports = { IteratorPrototype: n2, BUGGY_SAFARI_ITERATORS: d };
  }