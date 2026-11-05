// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 3929 range:79959..81765
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3929: (t2, r2, e2) => {
    var n2 = e2(9944), o2 = e2(3770), i2 = e2(7065), a2 = e2(2913), u2 = e2(4320), s2 = e2(3086), c = e2(8500), f = e2(5604), h = e2(3337), l = e2(6224), p = f("Promise"), v = "AsyncFromSyncIterator", d = s2.set, g = s2.getterFor(v), y = function(t3, r3, e3, n3, o3) {
      var i3 = t3.done;
      p.resolve(t3.value).then(function(t4) {
        r3(l(t4, i3));
      }, function(t4) {
        if (!i3 && o3) try {
          c(n3, "throw", t4);
        } catch (r4) {
          t4 = r4;
        }
        e3(t4);
      });
    }, w = function(t3) {
      t3.type = v, d(this, t3);
    };
    w.prototype = u2(i2(h), { next: function() {
      var t3 = g(this), r3 = arguments.length > 0, e3 = r3 ? arguments[0] : void 0;
      return new p(function(i3, a3) {
        var u3 = o2(r3 ? n2(t3.next, t3.iterator, e3) : n2(t3.next, t3.iterator));
        y(u3, i3, a3, t3.iterator, true);
      });
    }, return: function() {
      var t3 = g(this).iterator, r3 = arguments.length > 0, e3 = r3 ? arguments[0] : void 0;
      return new p(function(i3, u3) {
        var s3 = a2(t3, "return");
        if (void 0 === s3) return i3(l(e3, true));
        var c2 = o2(r3 ? n2(s3, t3, e3) : n2(s3, t3));
        y(c2, i3, u3, t3);
      });
    }, throw: function() {
      var t3 = g(this).iterator, r3 = arguments.length > 0, e3 = r3 ? arguments[0] : void 0;
      return new p(function(i3, u3) {
        var s3 = a2(t3, "throw");
        if (void 0 === s3) {
          try {
            c(t3, "normal");
          } catch (t4) {
            return u3(t4);
          }
          return u3(new TypeError("The iterator does not provide a throw method"));
        }
        var f2 = o2(r3 ? n2(s3, t3, e3) : n2(s3, t3));
        y(f2, i3, u3, t3, true);
      });
    } }), t2.exports = w;
  }