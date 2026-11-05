// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 228 range:60787..62102
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
228: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.normalizeFieldInfos = void 0;
    const r2 = n2(186), o2 = n2(822), a2 = n2(408);
    t2.normalizeFieldInfos = function(e3, t3) {
      var n3, s2, i2, l2, u2, c2;
      const m2 = [];
      let p2;
      for (const d2 of "function" == typeof e3 ? e3() : e3) {
        const e4 = d2;
        if (e4.localName = (0, o2.localFieldName)(d2.name, void 0 !== d2.oneof), e4.jsonName = null !== (n3 = d2.jsonName) && void 0 !== n3 ? n3 : (0, o2.fieldJsonName)(d2.name), e4.repeated = null !== (s2 = d2.repeated) && void 0 !== s2 && s2, "scalar" == d2.kind && (e4.L = null !== (i2 = d2.L) && void 0 !== i2 ? i2 : a2.LongType.BIGINT), e4.delimited = null !== (l2 = d2.delimited) && void 0 !== l2 && l2, e4.req = null !== (u2 = d2.req) && void 0 !== u2 && u2, e4.opt = null !== (c2 = d2.opt) && void 0 !== c2 && c2, void 0 === d2.packed && (e4.packed = !!t3 && ("enum" == d2.kind || "scalar" == d2.kind && d2.T != a2.ScalarType.BYTES && d2.T != a2.ScalarType.STRING)), void 0 !== d2.oneof) {
          const t4 = "string" == typeof d2.oneof ? d2.oneof : d2.oneof.name;
          p2 && p2.name == t4 || (p2 = new r2.InternalOneofInfo(t4)), e4.oneof = p2, p2.addField(e4);
        }
        m2.push(e4);
      }
      return m2;
    };
  }