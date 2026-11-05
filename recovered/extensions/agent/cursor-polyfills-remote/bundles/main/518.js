// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 518 range:28888..31637
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
518: (t2, r2, e2) => {
    var n2 = e2(9944), o2 = e2(6042), i2 = e2(3770), a2 = e2(7065), u2 = e2(8088), s2 = e2(4320), c = e2(4282), f = e2(3086), h = e2(5604), l = e2(2913), p = e2(3337), v = e2(6224), d = e2(808), g = h("Promise"), y = c("toStringTag"), w = "AsyncIteratorHelper", x = "WrapForValidAsyncIterator", m = f.set, b = function(t3) {
      var r3 = !t3, e3 = f.getterFor(t3 ? x : w), u3 = function(t4) {
        var n3 = o2(function() {
          return e3(t4);
        }), i3 = n3.error, a3 = n3.value;
        return i3 || r3 && a3.done ? { exit: true, value: i3 ? g.reject(a3) : g.resolve(v(void 0, true)) } : { exit: false, value: a3 };
      };
      return s2(a2(p), { next: function() {
        var t4 = u3(this), e4 = t4.value;
        if (t4.exit) return e4;
        var n3 = o2(function() {
          return i2(e4.nextHandler(g));
        }), a3 = n3.error, s3 = n3.value;
        return a3 ? (e4.done = true, r3 && d(e4), g.reject(s3)) : r3 ? g.resolve(s3).then(function(t5) {
          return e4.done && d(e4), t5;
        }, function(t5) {
          throw d(e4), t5;
        }) : g.resolve(s3);
      }, return: function() {
        var e4 = u3(this), a3 = e4.value;
        if (e4.exit) return a3;
        a3.done = true;
        var s3, c2, f2 = a3.iterator, h2 = a3.inner;
        r3 && d(a3);
        var p2 = function() {
          var r4 = o2(function() {
            return l(f2, "return");
          });
          return s3 = c2 = r4.value, r4.error ? g.reject(c2) : void 0 === s3 ? g.resolve(v(void 0, true)) : (r4 = o2(function() {
            return n2(s3, f2);
          }), c2 = r4.value, r4.error ? g.reject(c2) : t3 ? g.resolve(c2) : g.resolve(c2).then(function(t4) {
            return i2(t4), v(void 0, true);
          }));
        }, y2 = function(t4) {
          return p2().then(function() {
            throw t4;
          }, function() {
            throw t4;
          });
        };
        if (h2) {
          var w2, x2 = h2.iterator, m2 = o2(function() {
            if (w2 = l(x2, "return")) return n2(w2, x2);
          });
          if (m2.error) return y2(m2.value);
          if (w2) return g.resolve(m2.value).then(function(t4) {
            try {
              i2(t4);
            } catch (t5) {
              return y2(t5);
            }
            return p2();
          }, y2);
        }
        return p2();
      } });
    }, S = b(true), O = b(false);
    u2(O, y, "Async Iterator Helper"), t2.exports = function(t3, r3) {
      var e3 = function(e4, n3) {
        n3 ? (n3.iterator = e4.iterator, n3.next = e4.next) : n3 = e4, n3.type = r3 ? x : w, n3.nextHandler = t3, n3.counter = 0, n3.done = false, m(this, n3);
      };
      return e3.prototype = r3 ? S : O, e3;
    };
  }