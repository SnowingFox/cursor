// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 228 range:60787..62102
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
228: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.normalizeFieldInfos = void 0;
    const o2 = n2(186), s2 = n2(822), t2 = n2(408);
    a2.normalizeFieldInfos = function(e3, a3) {
      var n3, r2, i2, m2, l2, d2;
      const c2 = [];
      let T2;
      for (const _2 of "function" == typeof e3 ? e3() : e3) {
        const e4 = _2;
        if (e4.localName = (0, s2.localFieldName)(_2.name, void 0 !== _2.oneof), e4.jsonName = null !== (n3 = _2.jsonName) && void 0 !== n3 ? n3 : (0, s2.fieldJsonName)(_2.name), e4.repeated = null !== (r2 = _2.repeated) && void 0 !== r2 && r2, "scalar" == _2.kind && (e4.L = null !== (i2 = _2.L) && void 0 !== i2 ? i2 : t2.LongType.BIGINT), e4.delimited = null !== (m2 = _2.delimited) && void 0 !== m2 && m2, e4.req = null !== (l2 = _2.req) && void 0 !== l2 && l2, e4.opt = null !== (d2 = _2.opt) && void 0 !== d2 && d2, void 0 === _2.packed && (e4.packed = !!a3 && ("enum" == _2.kind || "scalar" == _2.kind && _2.T != t2.ScalarType.BYTES && _2.T != t2.ScalarType.STRING)), void 0 !== _2.oneof) {
          const a4 = "string" == typeof _2.oneof ? _2.oneof : _2.oneof.name;
          T2 && T2.name == a4 || (T2 = new o2.InternalOneofInfo(a4)), e4.oneof = T2, T2.addField(e4);
        }
        c2.push(e4);
      }
      return c2;
    };
  }