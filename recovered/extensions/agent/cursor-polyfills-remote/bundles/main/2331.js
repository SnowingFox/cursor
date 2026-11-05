// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 2331 range:57019..58781
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2331: (t2, r2, e2) => {
    var n2 = e2(9944), o2 = e2(7065), i2 = e2(8088), a2 = e2(4320), u2 = e2(4282), s2 = e2(3086), c = e2(2913), f = e2(2037).IteratorPrototype, h = e2(6224), l = e2(8500), p = e2(5366), v = e2(808), d = u2("toStringTag"), g = "IteratorHelper", y = "WrapForValidIterator", w = "normal", x = "throw", m = s2.set, b = function(t3) {
      var r3 = s2.getterFor(t3 ? y : g);
      return a2(o2(f), { next: function() {
        var e3 = r3(this);
        if (t3) return e3.nextHandler();
        if (e3.done) return h(void 0, true);
        try {
          var n3 = e3.nextHandler();
          return e3.done && v(e3), e3.returnHandlerResult ? n3 : h(n3, e3.done);
        } catch (t4) {
          throw e3.done = true, v(e3), t4;
        }
      }, return: function() {
        var e3 = r3(this), o3 = e3.iterator, i3 = e3.inner, a3 = e3.openIters, u3 = e3.done;
        if (e3.done = true, t3) {
          var s3 = c(o3, "return");
          return s3 ? n2(s3, o3) : h(void 0, true);
        }
        if (v(e3), u3) return h(void 0, true);
        if (i3) try {
          l(i3.iterator, w);
        } catch (t4) {
          return l(o3, x, t4);
        }
        if (a3) try {
          p(a3, w);
        } catch (t4) {
          if (o3) return l(o3, x, t4);
          throw t4;
        }
        return o3 && l(o3, w), h(void 0, true);
      } });
    }, S = b(true), O = b(false);
    i2(O, d, "Iterator Helper"), t2.exports = function(t3, r3, e3) {
      var n3 = function(n4, o3) {
        o3 ? (o3.iterator = n4.iterator, o3.next = n4.next) : o3 = n4, o3.type = r3 ? y : g, o3.returnHandlerResult = !!e3, o3.nextHandler = t3, o3.counter = 0, o3.done = false, m(this, o3);
      };
      return n3.prototype = r3 ? S : O, n3;
    };
  }