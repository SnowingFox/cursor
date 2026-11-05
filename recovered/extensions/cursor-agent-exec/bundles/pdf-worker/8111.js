// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 8111 range:63118..64171
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8111: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(679), a2 = i2(8551), o2 = i2(4901), l2 = i2(2787), h2 = i2(2106), c2 = i2(4659), d2 = i2(9039), u2 = i2(9297), p2 = i2(8227), g2 = i2(7657).IteratorPrototype, m2 = i2(3724), f2 = i2(6395), b2 = "constructor", v2 = "Iterator", y2 = p2("toStringTag"), w2 = TypeError, x2 = n2[v2], A2 = f2 || !o2(x2) || x2.prototype !== g2 || !d2(function() {
      x2({});
    }), _2 = function() {
      if (r2(this, g2), l2(this) === g2) throw new w2("Abstract class Iterator not directly constructable");
    }, S2 = function(t3, e3) {
      m2 ? h2(g2, t3, { configurable: true, get: function() {
        return e3;
      }, set: function(e4) {
        if (a2(this), this === g2) throw new w2("You can't redefine this property");
        u2(this, t3) ? this[t3] = e4 : c2(this, t3, e4);
      } }) : g2[t3] = e3;
    };
    u2(g2, y2) || S2(y2, v2), !A2 && u2(g2, b2) && g2[b2] !== Object || S2(b2, _2), _2.prototype = g2, s2({ global: true, constructor: true, forced: A2 }, { Iterator: _2 });
  }