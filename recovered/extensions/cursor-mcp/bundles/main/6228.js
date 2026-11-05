// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6228 range:460603..461898
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6228: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.normalizeFieldInfos = void 0;
    const n2 = r2(3186), o2 = r2(5822), s2 = r2(3408);
    t2.normalizeFieldInfos = function(e3, t3) {
      var r3, i2, a2, c, u, l;
      const d = [];
      let p;
      for (const f of "function" == typeof e3 ? e3() : e3) {
        const e4 = f;
        if (e4.localName = (0, o2.localFieldName)(f.name, void 0 !== f.oneof), e4.jsonName = null !== (r3 = f.jsonName) && void 0 !== r3 ? r3 : (0, o2.fieldJsonName)(f.name), e4.repeated = null !== (i2 = f.repeated) && void 0 !== i2 && i2, "scalar" == f.kind && (e4.L = null !== (a2 = f.L) && void 0 !== a2 ? a2 : s2.LongType.BIGINT), e4.delimited = null !== (c = f.delimited) && void 0 !== c && c, e4.req = null !== (u = f.req) && void 0 !== u && u, e4.opt = null !== (l = f.opt) && void 0 !== l && l, void 0 === f.packed && (e4.packed = !!t3 && ("enum" == f.kind || "scalar" == f.kind && f.T != s2.ScalarType.BYTES && f.T != s2.ScalarType.STRING)), void 0 !== f.oneof) {
          const t4 = "string" == typeof f.oneof ? f.oneof : f.oneof.name;
          p && p.name == t4 || (p = new n2.InternalOneofInfo(t4)), e4.oneof = p, p.addField(e4);
        }
        d.push(e4);
      }
      return d;
    };
  }