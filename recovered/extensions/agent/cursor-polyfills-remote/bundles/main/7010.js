// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 7010 range:126511..127127
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7010: (t2, r2, e2) => {
    var n2 = e2(9117), o2 = e2(9429), i2 = e2(7463), a2 = e2(3873), u2 = e2(8088), s2 = e2(3754), c = e2(4282)("iterator"), f = a2.values, h = function(t3, r3) {
      if (t3) {
        if (t3[c] !== f) try {
          u2(t3, c, f);
        } catch (r4) {
          t3[c] = f;
        }
        if (s2(t3, r3, true), o2[r3]) {
          for (var e3 in a2) if (t3[e3] !== a2[e3]) try {
            u2(t3, e3, a2[e3]);
          } catch (r4) {
            t3[e3] = a2[e3];
          }
        }
      }
    };
    for (var l in o2) h(n2[l] && n2[l].prototype, l);
    h(i2, "DOMTokenList");
  }