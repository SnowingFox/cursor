// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4942 range:1183793..1185410
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4942: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.createRegistry = void 0, e2.createRegistry = function(...t3) {
      const e3 = {}, r2 = {}, n2 = {}, s2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map(), o2 = { findMessage: (t4) => e3[t4], findEnum: (t4) => r2[t4], findService: (t4) => n2[t4], findExtensionFor(t4, e4) {
        var r3, n3;
        return null !== (n3 = null === (r3 = i2.get(t4)) || void 0 === r3 ? void 0 : r3.get(e4)) && void 0 !== n3 ? n3 : void 0;
      }, findExtension(t4) {
        var e4;
        return null !== (e4 = s2.get(t4)) && void 0 !== e4 ? e4 : void 0;
      } };
      function a(t4) {
        var c;
        if ("fields" in t4) o2.findMessage(t4.typeName) || (e3[t4.typeName] = t4, t4.fields.list().forEach(u));
        else if ("methods" in t4) {
          if (!o2.findService(t4.typeName)) {
            n2[t4.typeName] = t4;
            for (const e4 of Object.values(t4.methods)) a(e4.I), a(e4.O);
          }
        } else if ("extendee" in t4) {
          if (!s2.has(t4.typeName)) {
            s2.set(t4.typeName, t4);
            const e4 = t4.extendee.typeName;
            i2.has(e4) || i2.set(e4, /* @__PURE__ */ new Map()), null === (c = i2.get(e4)) || void 0 === c || c.set(t4.field.no, t4), a(t4.extendee), u(t4.field);
          }
        } else r2[t4.typeName] = t4;
      }
      function u(t4) {
        "message" == t4.kind ? a(t4.T) : "map" == t4.kind && "message" == t4.V.kind ? a(t4.V.T) : "enum" == t4.kind && a(t4.T);
      }
      for (const e4 of t3) a(e4);
      return o2;
    };
  }