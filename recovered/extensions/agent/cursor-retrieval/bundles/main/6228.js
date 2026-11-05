// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 6228 range:794936..796231
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6228: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.normalizeFieldInfos = void 0;
    const t2 = n2(3186), s2 = n2(5822), o2 = n2(3408);
    a2.normalizeFieldInfos = function(e3, a3) {
      var n3, r2, i2, l, d, m;
      const c = [];
      let p;
      for (const A of "function" == typeof e3 ? e3() : e3) {
        const e4 = A;
        if (e4.localName = (0, s2.localFieldName)(A.name, void 0 !== A.oneof), e4.jsonName = null !== (n3 = A.jsonName) && void 0 !== n3 ? n3 : (0, s2.fieldJsonName)(A.name), e4.repeated = null !== (r2 = A.repeated) && void 0 !== r2 && r2, "scalar" == A.kind && (e4.L = null !== (i2 = A.L) && void 0 !== i2 ? i2 : o2.LongType.BIGINT), e4.delimited = null !== (l = A.delimited) && void 0 !== l && l, e4.req = null !== (d = A.req) && void 0 !== d && d, e4.opt = null !== (m = A.opt) && void 0 !== m && m, void 0 === A.packed && (e4.packed = !!a3 && ("enum" == A.kind || "scalar" == A.kind && A.T != o2.ScalarType.BYTES && A.T != o2.ScalarType.STRING)), void 0 !== A.oneof) {
          const a4 = "string" == typeof A.oneof ? A.oneof : A.oneof.name;
          p && p.name == a4 || (p = new t2.InternalOneofInfo(a4)), e4.oneof = p, p.addField(e4);
        }
        c.push(e4);
      }
      return c;
    };
  }