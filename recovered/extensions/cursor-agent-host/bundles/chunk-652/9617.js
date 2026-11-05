// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
// module: 9617 range:85402..85948
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9617: (t2, e2, i2) => {
    var s2 = i2(5397), n2 = i2(5610), r2 = i2(6198), a2 = function(t3) {
      return function(e3, i3, a3) {
        var o2 = s2(e3), l2 = r2(o2);
        if (0 === l2) return !t3 && -1;
        var h2, c2 = n2(a3, l2);
        if (t3 && i3 != i3) {
          for (; l2 > c2; ) if ((h2 = o2[c2++]) != h2) return true;
        } else for (; l2 > c2; c2++) if ((t3 || c2 in o2) && o2[c2] === i3) return t3 || c2 || 0;
        return !t3 && -1;
      };
    };
    t2.exports = { includes: a2(true), indexOf: a2(false) };
  }