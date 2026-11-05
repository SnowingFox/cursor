// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 66228 range:6044050..6045321
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66228: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.normalizeFieldInfos = void 0;
    const n = r(3186), s = r(75822), o = r(3408);
    t.normalizeFieldInfos = function(e2, t2) {
      var r2, i, a, c, l, u;
      const d = [];
      let p;
      for (const m of "function" == typeof e2 ? e2() : e2) {
        const e3 = m;
        if (e3.localName = (0, s.localFieldName)(m.name, void 0 !== m.oneof), e3.jsonName = null !== (r2 = m.jsonName) && void 0 !== r2 ? r2 : (0, s.fieldJsonName)(m.name), e3.repeated = null !== (i = m.repeated) && void 0 !== i && i, "scalar" == m.kind && (e3.L = null !== (a = m.L) && void 0 !== a ? a : o.LongType.BIGINT), e3.delimited = null !== (c = m.delimited) && void 0 !== c && c, e3.req = null !== (l = m.req) && void 0 !== l && l, e3.opt = null !== (u = m.opt) && void 0 !== u && u, void 0 === m.packed && (e3.packed = !!t2 && ("enum" == m.kind || "scalar" == m.kind && m.T != o.ScalarType.BYTES && m.T != o.ScalarType.STRING)), void 0 !== m.oneof) {
          const t3 = "string" == typeof m.oneof ? m.oneof : m.oneof.name;
          p && p.name == t3 || (p = new n.InternalOneofInfo(t3)), e3.oneof = p, p.addField(e3);
        }
        d.push(e3);
      }
      return d;
    };
  }