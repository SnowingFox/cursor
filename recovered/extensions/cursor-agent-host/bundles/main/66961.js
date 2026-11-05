// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 66961 range:10482606..10484757
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66961: (e, t, r) => {
    "use strict";
    var n = r(36755), s = r(39425), o = r(77454);
    function i(e2, t2, r2) {
      var n2 = [];
      return e2.include.forEach(function(e3) {
        r2 = i(e3, t2, r2);
      }), e2[t2].forEach(function(e3) {
        r2.forEach(function(t3, r3) {
          t3.tag === e3.tag && t3.kind === e3.kind && n2.push(r3);
        }), r2.push(e3);
      }), r2.filter(function(e3, t3) {
        return -1 === n2.indexOf(t3);
      });
    }
    function a(e2) {
      this.include = e2.include || [], this.implicit = e2.implicit || [], this.explicit = e2.explicit || [], this.implicit.forEach(function(e3) {
        if (e3.loadKind && "scalar" !== e3.loadKind) throw new s("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
      }), this.compiledImplicit = i(this, "implicit", []), this.compiledExplicit = i(this, "explicit", []), this.compiledTypeMap = (function() {
        var e3, t2, r2 = { scalar: {}, sequence: {}, mapping: {}, fallback: {} };
        function n2(e4) {
          r2[e4.kind][e4.tag] = r2.fallback[e4.tag] = e4;
        }
        for (e3 = 0, t2 = arguments.length; e3 < t2; e3 += 1) arguments[e3].forEach(n2);
        return r2;
      })(this.compiledImplicit, this.compiledExplicit);
    }
    a.DEFAULT = null, a.create = function() {
      var e2, t2;
      switch (arguments.length) {
        case 1:
          e2 = a.DEFAULT, t2 = arguments[0];
          break;
        case 2:
          e2 = arguments[0], t2 = arguments[1];
          break;
        default:
          throw new s("Wrong number of arguments for Schema.create function");
      }
      if (e2 = n.toArray(e2), t2 = n.toArray(t2), !e2.every(function(e3) {
        return e3 instanceof a;
      })) throw new s("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
      if (!t2.every(function(e3) {
        return e3 instanceof o;
      })) throw new s("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      return new a({ include: e2, explicit: t2 });
    }, e.exports = a;
  }