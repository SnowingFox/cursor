// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 66228 range:1997883..1999154
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66228: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.normalizeFieldInfos = void 0;
    const n = r(3186), o = r(75822), s = r(3408);
    t.normalizeFieldInfos = function(e2, t2) {
      var r2, i, a, l, c, u;
      const d = [];
      let p;
      for (const h of "function" == typeof e2 ? e2() : e2) {
        const e3 = h;
        if (e3.localName = (0, o.localFieldName)(h.name, void 0 !== h.oneof), e3.jsonName = null !== (r2 = h.jsonName) && void 0 !== r2 ? r2 : (0, o.fieldJsonName)(h.name), e3.repeated = null !== (i = h.repeated) && void 0 !== i && i, "scalar" == h.kind && (e3.L = null !== (a = h.L) && void 0 !== a ? a : s.LongType.BIGINT), e3.delimited = null !== (l = h.delimited) && void 0 !== l && l, e3.req = null !== (c = h.req) && void 0 !== c && c, e3.opt = null !== (u = h.opt) && void 0 !== u && u, void 0 === h.packed && (e3.packed = !!t2 && ("enum" == h.kind || "scalar" == h.kind && h.T != s.ScalarType.BYTES && h.T != s.ScalarType.STRING)), void 0 !== h.oneof) {
          const t3 = "string" == typeof h.oneof ? h.oneof : h.oneof.name;
          p && p.name == t3 || (p = new n.InternalOneofInfo(t3)), e3.oneof = p, p.addField(e3);
        }
        d.push(e3);
      }
      return d;
    };
  }