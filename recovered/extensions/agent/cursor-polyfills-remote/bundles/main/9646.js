// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 9646 range:167994..168891
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9646: (t2, r2, e2) => {
    var n2 = e2(5821), o2 = e2(6881), i2 = e2(866), a2 = e2(9329), u2 = e2(9042), s2 = e2(6002), c = e2(4366), f = e2(2913), h = e2(5604), l = e2(2509), p = e2(4282), v = e2(3929), d = e2(1636).toArray, g = p("asyncIterator"), y = o2(l("Array", "values")), w = o2(y([]).next), x = function() {
      return new m(this);
    }, m = function(t3) {
      this.iterator = y(t3);
    };
    m.prototype.next = function() {
      return w(this.iterator);
    }, t2.exports = function(t3) {
      var r3 = this, e3 = arguments.length, o3 = e3 > 1 ? arguments[1] : void 0, l2 = e3 > 2 ? arguments[2] : void 0;
      return new (h("Promise"))(function(e4) {
        void 0 !== o3 && (o3 = n2(o3, l2));
        var h2 = f(t3, g), p2 = h2 ? void 0 : c(t3) || x, y2 = i2(r3) ? new r3() : [], w2 = h2 ? a2(t3, h2) : new v(s2(u2(t3, p2)));
        e4(d(w2, o3, y2));
      });
    };
  }