// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 6228 range:484175..485462
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6228: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.normalizeFieldInfos = void 0;
    const n2 = t2(3186), r2 = t2(5822), o2 = t2(3408);
    A2.normalizeFieldInfos = function(e3, A3) {
      var t3, s, a, i, c, l;
      const g = [];
      let E;
      for (const u of "function" == typeof e3 ? e3() : e3) {
        const e4 = u;
        if (e4.localName = (0, r2.localFieldName)(u.name, void 0 !== u.oneof), e4.jsonName = null !== (t3 = u.jsonName) && void 0 !== t3 ? t3 : (0, r2.fieldJsonName)(u.name), e4.repeated = null !== (s = u.repeated) && void 0 !== s && s, "scalar" == u.kind && (e4.L = null !== (a = u.L) && void 0 !== a ? a : o2.LongType.BIGINT), e4.delimited = null !== (i = u.delimited) && void 0 !== i && i, e4.req = null !== (c = u.req) && void 0 !== c && c, e4.opt = null !== (l = u.opt) && void 0 !== l && l, void 0 === u.packed && (e4.packed = !!A3 && ("enum" == u.kind || "scalar" == u.kind && u.T != o2.ScalarType.BYTES && u.T != o2.ScalarType.STRING)), void 0 !== u.oneof) {
          const A4 = "string" == typeof u.oneof ? u.oneof : u.oneof.name;
          E && E.name == A4 || (E = new n2.InternalOneofInfo(A4)), e4.oneof = E, E.addField(e4);
        }
        g.push(e4);
      }
      return g;
    };
  }