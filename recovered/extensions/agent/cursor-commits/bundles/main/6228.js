// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 6228 range:484770..486065
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6228: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.normalizeFieldInfos = void 0;
    const t2 = a2(3186), s2 = a2(5822), o2 = a2(3408);
    n2.normalizeFieldInfos = function(e3, n3) {
      var a3, r2, i2, A, l, c;
      const m = [];
      let d;
      for (const g of "function" == typeof e3 ? e3() : e3) {
        const e4 = g;
        if (e4.localName = (0, s2.localFieldName)(g.name, void 0 !== g.oneof), e4.jsonName = null !== (a3 = g.jsonName) && void 0 !== a3 ? a3 : (0, s2.fieldJsonName)(g.name), e4.repeated = null !== (r2 = g.repeated) && void 0 !== r2 && r2, "scalar" == g.kind && (e4.L = null !== (i2 = g.L) && void 0 !== i2 ? i2 : o2.LongType.BIGINT), e4.delimited = null !== (A = g.delimited) && void 0 !== A && A, e4.req = null !== (l = g.req) && void 0 !== l && l, e4.opt = null !== (c = g.opt) && void 0 !== c && c, void 0 === g.packed && (e4.packed = !!n3 && ("enum" == g.kind || "scalar" == g.kind && g.T != o2.ScalarType.BYTES && g.T != o2.ScalarType.STRING)), void 0 !== g.oneof) {
          const n4 = "string" == typeof g.oneof ? g.oneof : g.oneof.name;
          d && d.name == n4 || (d = new t2.InternalOneofInfo(n4)), e4.oneof = d, d.addField(e4);
        }
        m.push(e4);
      }
      return m;
    };
  }