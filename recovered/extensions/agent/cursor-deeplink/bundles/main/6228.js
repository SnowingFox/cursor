// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 6228 range:594897..596184
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6228: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.normalizeFieldInfos = void 0;
    const n2 = A2(3186), r2 = A2(5822), o2 = A2(3408);
    t2.normalizeFieldInfos = function(e3, t3) {
      var A3, s, i, a, c, l;
      const u = [];
      let g;
      for (const E of "function" == typeof e3 ? e3() : e3) {
        const e4 = E;
        if (e4.localName = (0, r2.localFieldName)(E.name, void 0 !== E.oneof), e4.jsonName = null !== (A3 = E.jsonName) && void 0 !== A3 ? A3 : (0, r2.fieldJsonName)(E.name), e4.repeated = null !== (s = E.repeated) && void 0 !== s && s, "scalar" == E.kind && (e4.L = null !== (i = E.L) && void 0 !== i ? i : o2.LongType.BIGINT), e4.delimited = null !== (a = E.delimited) && void 0 !== a && a, e4.req = null !== (c = E.req) && void 0 !== c && c, e4.opt = null !== (l = E.opt) && void 0 !== l && l, void 0 === E.packed && (e4.packed = !!t3 && ("enum" == E.kind || "scalar" == E.kind && E.T != o2.ScalarType.BYTES && E.T != o2.ScalarType.STRING)), void 0 !== E.oneof) {
          const t4 = "string" == typeof E.oneof ? E.oneof : E.oneof.name;
          g && g.name == t4 || (g = new n2.InternalOneofInfo(t4)), e4.oneof = g, g.addField(e4);
        }
        u.push(e4);
      }
      return u;
    };
  }