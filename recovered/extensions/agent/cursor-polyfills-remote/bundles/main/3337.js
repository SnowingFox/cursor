// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 3337 range:73845..74453
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3337: (t2, r2, e2) => {
    var n2, o2, i2 = e2(9117), a2 = e2(2694), u2 = e2(4188), s2 = e2(7065), c = e2(1786), f = e2(7509), h = e2(4282), l = e2(1942), p = "USE_FUNCTION_CONSTRUCTOR", v = h("asyncIterator"), d = i2.AsyncIterator, g = a2.AsyncIteratorPrototype;
    if (g) n2 = g;
    else if (u2(d)) n2 = d.prototype;
    else if (a2[p] || i2[p]) try {
      o2 = c(c(c(Function("return async function*(){}()")()))), c(o2) === Object.prototype && (n2 = o2);
    } catch (t3) {
    }
    n2 ? l && (n2 = s2(n2)) : n2 = {}, u2(n2[v]) || f(n2, v, function() {
      return this;
    }), t2.exports = n2;
  }