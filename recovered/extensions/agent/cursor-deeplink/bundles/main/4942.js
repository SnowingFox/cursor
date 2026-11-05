// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 4942 range:542928..544541
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4942: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createRegistry = void 0, t2.createRegistry = function(...e3) {
      const t3 = {}, A2 = {}, n2 = {}, r2 = /* @__PURE__ */ new Map(), o2 = /* @__PURE__ */ new Map(), s = { findMessage: (e4) => t3[e4], findEnum: (e4) => A2[e4], findService: (e4) => n2[e4], findExtensionFor(e4, t4) {
        var A3, n3;
        return null !== (n3 = null === (A3 = o2.get(e4)) || void 0 === A3 ? void 0 : A3.get(t4)) && void 0 !== n3 ? n3 : void 0;
      }, findExtension(e4) {
        var t4;
        return null !== (t4 = r2.get(e4)) && void 0 !== t4 ? t4 : void 0;
      } };
      function i(e4) {
        var c;
        if ("fields" in e4) s.findMessage(e4.typeName) || (t3[e4.typeName] = e4, e4.fields.list().forEach(a));
        else if ("methods" in e4) {
          if (!s.findService(e4.typeName)) {
            n2[e4.typeName] = e4;
            for (const t4 of Object.values(e4.methods)) i(t4.I), i(t4.O);
          }
        } else if ("extendee" in e4) {
          if (!r2.has(e4.typeName)) {
            r2.set(e4.typeName, e4);
            const t4 = e4.extendee.typeName;
            o2.has(t4) || o2.set(t4, /* @__PURE__ */ new Map()), null === (c = o2.get(t4)) || void 0 === c || c.set(e4.field.no, e4), i(e4.extendee), a(e4.field);
          }
        } else A2[e4.typeName] = e4;
      }
      function a(e4) {
        "message" == e4.kind ? i(e4.T) : "map" == e4.kind && "message" == e4.V.kind ? i(e4.V.T) : "enum" == e4.kind && i(e4.T);
      }
      for (const t4 of e3) i(t4);
      return s;
    };
  }