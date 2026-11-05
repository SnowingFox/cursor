// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4530 range:95289..96574
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4530: (t2, r2, e2) => {
    var n2 = e2(6881), o2 = e2(5234), i2 = e2(4188), a2 = e2(4418), u2 = e2(6893), s2 = e2(2735).CONFIGURABLE, c = e2(3029), f = e2(3086), h = f.enforce, l = f.get, p = String, v = Object.defineProperty, d = n2("".slice), g = n2("".replace), y = n2([].join), w = u2 && !o2(function() {
      return 8 !== v(function() {
      }, "length", { value: 8 }).length;
    }), x = String(String).split("String"), m = t2.exports = function(t3, r3, e3) {
      "Symbol(" === d(p(r3), 0, 7) && (r3 = "[" + g(p(r3), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e3 && e3.getter && (r3 = "get " + r3), e3 && e3.setter && (r3 = "set " + r3), (!a2(t3, "name") || s2 && t3.name !== r3) && (u2 ? v(t3, "name", { value: r3, configurable: true }) : t3.name = r3), w && e3 && a2(e3, "arity") && t3.length !== e3.arity && v(t3, "length", { value: e3.arity });
      try {
        e3 && a2(e3, "constructor") && e3.constructor ? u2 && v(t3, "prototype", { writable: false }) : t3.prototype && (t3.prototype = void 0);
      } catch (t4) {
      }
      var n3 = h(t3);
      return a2(n3, "source") || (n3.source = y(x, "string" == typeof r3 ? r3 : "")), t3;
    };
    Function.prototype.toString = m(function() {
      return i2(this) && l(this).source || c(this);
    }, "toString");
  }