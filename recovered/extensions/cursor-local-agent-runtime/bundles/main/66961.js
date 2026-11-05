// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 66961 range:2025201..2027352
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66961: (e, t, r) => {
    "use strict";
    var n = r(36755), o = r(39425), s = r(77454);
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
        if (e3.loadKind && "scalar" !== e3.loadKind) throw new o("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
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
          throw new o("Wrong number of arguments for Schema.create function");
      }
      if (e2 = n.toArray(e2), t2 = n.toArray(t2), !e2.every(function(e3) {
        return e3 instanceof a;
      })) throw new o("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
      if (!t2.every(function(e3) {
        return e3 instanceof s;
      })) throw new o("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      return new a({ include: e2, explicit: t2 });
    }, e.exports = a;
  }