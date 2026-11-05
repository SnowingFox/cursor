// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
// module: 9462 range:80475..82149
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9462: (t2, e2, i2) => {
    var s2 = i2(9565), n2 = i2(2360), r2 = i2(6699), a2 = i2(6279), o2 = i2(8227), l2 = i2(1181), h2 = i2(5966), c2 = i2(7657).IteratorPrototype, d2 = i2(2529), u2 = i2(9539), p2 = i2(1385), g2 = o2("toStringTag"), m2 = "IteratorHelper", f2 = "WrapForValidIterator", b2 = "normal", v2 = "throw", y2 = l2.set, w2 = function(t3) {
      var e3 = l2.getterFor(t3 ? f2 : m2);
      return a2(n2(c2), { next: function() {
        var i3 = e3(this);
        if (t3) return i3.nextHandler();
        if (i3.done) return d2(void 0, true);
        try {
          var s3 = i3.nextHandler();
          return i3.returnHandlerResult ? s3 : d2(s3, i3.done);
        } catch (t4) {
          throw i3.done = true, t4;
        }
      }, return: function() {
        var i3 = e3(this), n3 = i3.iterator;
        if (i3.done = true, t3) {
          var r3 = h2(n3, "return");
          return r3 ? s2(r3, n3) : d2(void 0, true);
        }
        if (i3.inner) try {
          u2(i3.inner.iterator, b2);
        } catch (t4) {
          return u2(n3, v2, t4);
        }
        if (i3.openIters) try {
          p2(i3.openIters, b2);
        } catch (t4) {
          return u2(n3, v2, t4);
        }
        return n3 && u2(n3, b2), d2(void 0, true);
      } });
    }, x2 = w2(true), A2 = w2(false);
    r2(A2, g2, "Iterator Helper"), t2.exports = function(t3, e3, i3) {
      var s3 = function(s4, n3) {
        n3 ? (n3.iterator = s4.iterator, n3.next = s4.next) : n3 = s4, n3.type = e3 ? f2 : m2, n3.returnHandlerResult = !!i3, n3.nextHandler = t3, n3.counter = 0, n3.done = false, y2(this, n3);
      };
      return s3.prototype = e3 ? x2 : A2, s3;
    };
  }