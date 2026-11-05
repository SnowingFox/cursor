// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6228 range:2839764..2841055
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6228: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.normalizeFieldInfos = void 0;
    const n2 = r2(3186), s2 = r2(5822), i2 = r2(3408);
    e2.normalizeFieldInfos = function(t3, e3) {
      var r3, o2, a, u, c, l;
      const m = [];
      let d;
      for (const f of "function" == typeof t3 ? t3() : t3) {
        const t4 = f;
        if (t4.localName = (0, s2.localFieldName)(f.name, void 0 !== f.oneof), t4.jsonName = null !== (r3 = f.jsonName) && void 0 !== r3 ? r3 : (0, s2.fieldJsonName)(f.name), t4.repeated = null !== (o2 = f.repeated) && void 0 !== o2 && o2, "scalar" == f.kind && (t4.L = null !== (a = f.L) && void 0 !== a ? a : i2.LongType.BIGINT), t4.delimited = null !== (u = f.delimited) && void 0 !== u && u, t4.req = null !== (c = f.req) && void 0 !== c && c, t4.opt = null !== (l = f.opt) && void 0 !== l && l, void 0 === f.packed && (t4.packed = !!e3 && ("enum" == f.kind || "scalar" == f.kind && f.T != i2.ScalarType.BYTES && f.T != i2.ScalarType.STRING)), void 0 !== f.oneof) {
          const e4 = "string" == typeof f.oneof ? f.oneof : f.oneof.name;
          d && d.name == e4 || (d = new n2.InternalOneofInfo(e4)), t4.oneof = d, d.addField(t4);
        }
        m.push(t4);
      }
      return m;
    };
  }