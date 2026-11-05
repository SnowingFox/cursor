// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 283 range:3080..4392
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
283: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = i2(9039), r2 = i2(4901), a2 = i2(9297), o2 = i2(3724), l2 = i2(350).CONFIGURABLE, h2 = i2(3706), c2 = i2(1181), d2 = c2.enforce, u2 = c2.get, p2 = String, g2 = Object.defineProperty, m2 = s2("".slice), f2 = s2("".replace), b2 = s2([].join), v2 = o2 && !n2(function() {
      return 8 !== g2(function() {
      }, "length", { value: 8 }).length;
    }), y2 = String(String).split("String"), w2 = t2.exports = function(t3, e3, i3) {
      "Symbol(" === m2(p2(e3), 0, 7) && (e3 = "[" + f2(p2(e3), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), i3 && i3.getter && (e3 = "get " + e3), i3 && i3.setter && (e3 = "set " + e3), (!a2(t3, "name") || l2 && t3.name !== e3) && (o2 ? g2(t3, "name", { value: e3, configurable: true }) : t3.name = e3), v2 && i3 && a2(i3, "arity") && t3.length !== i3.arity && g2(t3, "length", { value: i3.arity });
      try {
        i3 && a2(i3, "constructor") && i3.constructor ? o2 && g2(t3, "prototype", { writable: false }) : t3.prototype && (t3.prototype = void 0);
      } catch (t4) {
      }
      var s3 = d2(t3);
      return a2(s3, "source") || (s3.source = b2(y2, "string" == typeof e3 ? e3 : "")), t3;
    };
    Function.prototype.toString = w2(function() {
      return r2(this) && u2(this).source || h2(this);
    }, "toString");
  }