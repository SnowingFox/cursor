// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 3873 range:78782..79666
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3873: (t2, r2, e2) => {
    var n2 = e2(380), o2 = e2(5458), i2 = e2(9164), a2 = e2(3086), u2 = e2(4466).f, s2 = e2(3217), c = e2(6224), f = e2(1942), h = e2(6893), l = "Array Iterator", p = a2.set, v = a2.getterFor(l);
    t2.exports = s2(Array, "Array", function(t3, r3) {
      p(this, { type: l, target: n2(t3), index: 0, kind: r3 });
    }, function() {
      var t3 = v(this), r3 = t3.target, e3 = t3.index++;
      if (!r3 || e3 >= r3.length) return t3.target = null, c(void 0, true);
      switch (t3.kind) {
        case "keys":
          return c(e3, false);
        case "values":
          return c(r3[e3], false);
      }
      return c([e3, r3[e3]], false);
    }, "values");
    var d = i2.Arguments = i2.Array;
    if (o2("keys"), o2("values"), o2("entries"), !f && h && "values" !== d.name) try {
      u2(d, "name", { value: "values" });
    } catch (t3) {
    }
  }