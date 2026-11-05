// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 6228 range:515501..516788
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6228: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.normalizeFieldInfos = void 0;
    const a2 = t2(3186), s2 = t2(5822), o2 = t2(3408);
    n2.normalizeFieldInfos = function(e3, n3) {
      var t3, r, i, A, c, l;
      const d = [];
      let m;
      for (const u of "function" == typeof e3 ? e3() : e3) {
        const e4 = u;
        if (e4.localName = (0, s2.localFieldName)(u.name, void 0 !== u.oneof), e4.jsonName = null !== (t3 = u.jsonName) && void 0 !== t3 ? t3 : (0, s2.fieldJsonName)(u.name), e4.repeated = null !== (r = u.repeated) && void 0 !== r && r, "scalar" == u.kind && (e4.L = null !== (i = u.L) && void 0 !== i ? i : o2.LongType.BIGINT), e4.delimited = null !== (A = u.delimited) && void 0 !== A && A, e4.req = null !== (c = u.req) && void 0 !== c && c, e4.opt = null !== (l = u.opt) && void 0 !== l && l, void 0 === u.packed && (e4.packed = !!n3 && ("enum" == u.kind || "scalar" == u.kind && u.T != o2.ScalarType.BYTES && u.T != o2.ScalarType.STRING)), void 0 !== u.oneof) {
          const n4 = "string" == typeof u.oneof ? u.oneof : u.oneof.name;
          m && m.name == n4 || (m = new a2.InternalOneofInfo(n4)), e4.oneof = m, m.addField(e4);
        }
        d.push(e4);
      }
      return d;
    };
  }