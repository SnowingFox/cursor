// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4466 range:93509..94417
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4466: (t2, r2, e2) => {
    var n2 = e2(6893), o2 = e2(9622), i2 = e2(3315), a2 = e2(3770), u2 = e2(2344), s2 = TypeError, c = Object.defineProperty, f = Object.getOwnPropertyDescriptor, h = "enumerable", l = "configurable", p = "writable";
    r2.f = n2 ? i2 ? function(t3, r3, e3) {
      if (a2(t3), r3 = u2(r3), a2(e3), "function" == typeof t3 && "prototype" === r3 && "value" in e3 && p in e3 && !e3[p]) {
        var n3 = f(t3, r3);
        n3 && n3[p] && (t3[r3] = e3.value, e3 = { configurable: l in e3 ? e3[l] : n3[l], enumerable: h in e3 ? e3[h] : n3[h], writable: false });
      }
      return c(t3, r3, e3);
    } : c : function(t3, r3, e3) {
      if (a2(t3), r3 = u2(r3), a2(e3), o2) try {
        return c(t3, r3, e3);
      } catch (t4) {
      }
      if ("get" in e3 || "set" in e3) throw new s2("Accessors not supported");
      return "value" in e3 && (t3[r3] = e3.value), t3;
    };
  }