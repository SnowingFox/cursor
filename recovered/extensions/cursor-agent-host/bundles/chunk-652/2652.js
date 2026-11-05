// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
// module: 2652 range:17731..19105
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2652: (t2, e2, i2) => {
    var s2 = i2(6080), n2 = i2(9565), r2 = i2(8551), a2 = i2(6823), o2 = i2(4209), l2 = i2(6198), h2 = i2(1625), c2 = i2(81), d2 = i2(851), u2 = i2(9539), p2 = TypeError, g2 = function(t3, e3) {
      this.stopped = t3, this.result = e3;
    }, m2 = g2.prototype;
    t2.exports = function(t3, e3, i3) {
      var f2, b2, v2, y2, w2, x2, A2, _2 = i3 && i3.that, S2 = !(!i3 || !i3.AS_ENTRIES), E2 = !(!i3 || !i3.IS_RECORD), C2 = !(!i3 || !i3.IS_ITERATOR), T2 = !(!i3 || !i3.INTERRUPTED), M2 = s2(e3, _2), k2 = function(t4) {
        return f2 && u2(f2, "normal"), new g2(true, t4);
      }, D2 = function(t4) {
        return S2 ? (r2(t4), T2 ? M2(t4[0], t4[1], k2) : M2(t4[0], t4[1])) : T2 ? M2(t4, k2) : M2(t4);
      };
      if (E2) f2 = t3.iterator;
      else if (C2) f2 = t3;
      else {
        if (!(b2 = d2(t3))) throw new p2(a2(t3) + " is not iterable");
        if (o2(b2)) {
          for (v2 = 0, y2 = l2(t3); y2 > v2; v2++) if ((w2 = D2(t3[v2])) && h2(m2, w2)) return w2;
          return new g2(false);
        }
        f2 = c2(t3, b2);
      }
      for (x2 = E2 ? t3.next : f2.next; !(A2 = n2(x2, f2)).done; ) {
        try {
          w2 = D2(A2.value);
        } catch (t4) {
          u2(f2, "throw", t4);
        }
        if ("object" == typeof w2 && w2 && h2(m2, w2)) return w2;
      }
      return new g2(false);
    };
  }