// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 4942 range:746375..748000
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4942: (e2, a2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.createRegistry = void 0, a2.createRegistry = function(...e3) {
      const a3 = {}, n2 = {}, t2 = {}, s2 = /* @__PURE__ */ new Map(), o2 = /* @__PURE__ */ new Map(), r2 = { findMessage: (e4) => a3[e4], findEnum: (e4) => n2[e4], findService: (e4) => t2[e4], findExtensionFor(e4, a4) {
        var n3, t3;
        return null !== (t3 = null === (n3 = o2.get(e4)) || void 0 === n3 ? void 0 : n3.get(a4)) && void 0 !== t3 ? t3 : void 0;
      }, findExtension(e4) {
        var a4;
        return null !== (a4 = s2.get(e4)) && void 0 !== a4 ? a4 : void 0;
      } };
      function i2(e4) {
        var d;
        if ("fields" in e4) r2.findMessage(e4.typeName) || (a3[e4.typeName] = e4, e4.fields.list().forEach(l));
        else if ("methods" in e4) {
          if (!r2.findService(e4.typeName)) {
            t2[e4.typeName] = e4;
            for (const a4 of Object.values(e4.methods)) i2(a4.I), i2(a4.O);
          }
        } else if ("extendee" in e4) {
          if (!s2.has(e4.typeName)) {
            s2.set(e4.typeName, e4);
            const a4 = e4.extendee.typeName;
            o2.has(a4) || o2.set(a4, /* @__PURE__ */ new Map()), null === (d = o2.get(a4)) || void 0 === d || d.set(e4.field.no, e4), i2(e4.extendee), l(e4.field);
          }
        } else n2[e4.typeName] = e4;
      }
      function l(e4) {
        "message" == e4.kind ? i2(e4.T) : "map" == e4.kind && "message" == e4.V.kind ? i2(e4.V.T) : "enum" == e4.kind && i2(e4.T);
      }
      for (const a4 of e3) i2(a4);
      return r2;
    };
  }