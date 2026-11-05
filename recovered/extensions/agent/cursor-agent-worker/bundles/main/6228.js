// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6228 range:183061..184473
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6228: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.normalizeFieldInfos = void 0;
    const s10 = n10(3186), o10 = n10(5822), r10 = n10(3408);
    a10.normalizeFieldInfos = function(e11, a11) {
      var n11, t10, i10, m10, l10, d10;
      const c10 = [];
      let T10;
      for (const p10 of "function" == typeof e11 ? e11() : e11) {
        const e12 = p10;
        if (e12.localName = (0, o10.localFieldName)(p10.name, void 0 !== p10.oneof), e12.jsonName = null !== (n11 = p10.jsonName) && void 0 !== n11 ? n11 : (0, o10.fieldJsonName)(p10.name), e12.repeated = null !== (t10 = p10.repeated) && void 0 !== t10 && t10, "scalar" == p10.kind && (e12.L = null !== (i10 = p10.L) && void 0 !== i10 ? i10 : r10.LongType.BIGINT), e12.delimited = null !== (m10 = p10.delimited) && void 0 !== m10 && m10, e12.req = null !== (l10 = p10.req) && void 0 !== l10 && l10, e12.opt = null !== (d10 = p10.opt) && void 0 !== d10 && d10, void 0 === p10.packed && (e12.packed = !!a11 && ("enum" == p10.kind || "scalar" == p10.kind && p10.T != r10.ScalarType.BYTES && p10.T != r10.ScalarType.STRING)), void 0 !== p10.oneof) {
          const a12 = "string" == typeof p10.oneof ? p10.oneof : p10.oneof.name;
          T10 && T10.name == a12 || (T10 = new s10.InternalOneofInfo(a12)), e12.oneof = T10, T10.addField(e12);
        }
        c10.push(e12);
      }
      return c10;
    };
  }