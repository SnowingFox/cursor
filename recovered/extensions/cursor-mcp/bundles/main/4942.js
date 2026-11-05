// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4942 range:323139..324764
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4942: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createRegistry = void 0, t2.createRegistry = function(...e3) {
      const t3 = {}, r2 = {}, n2 = {}, o2 = /* @__PURE__ */ new Map(), s2 = /* @__PURE__ */ new Map(), i2 = { findMessage: (e4) => t3[e4], findEnum: (e4) => r2[e4], findService: (e4) => n2[e4], findExtensionFor(e4, t4) {
        var r3, n3;
        return null !== (n3 = null === (r3 = s2.get(e4)) || void 0 === r3 ? void 0 : r3.get(t4)) && void 0 !== n3 ? n3 : void 0;
      }, findExtension(e4) {
        var t4;
        return null !== (t4 = o2.get(e4)) && void 0 !== t4 ? t4 : void 0;
      } };
      function a2(e4) {
        var u;
        if ("fields" in e4) i2.findMessage(e4.typeName) || (t3[e4.typeName] = e4, e4.fields.list().forEach(c));
        else if ("methods" in e4) {
          if (!i2.findService(e4.typeName)) {
            n2[e4.typeName] = e4;
            for (const t4 of Object.values(e4.methods)) a2(t4.I), a2(t4.O);
          }
        } else if ("extendee" in e4) {
          if (!o2.has(e4.typeName)) {
            o2.set(e4.typeName, e4);
            const t4 = e4.extendee.typeName;
            s2.has(t4) || s2.set(t4, /* @__PURE__ */ new Map()), null === (u = s2.get(t4)) || void 0 === u || u.set(e4.field.no, e4), a2(e4.extendee), c(e4.field);
          }
        } else r2[e4.typeName] = e4;
      }
      function c(e4) {
        "message" == e4.kind ? a2(e4.T) : "map" == e4.kind && "message" == e4.V.kind ? a2(e4.V.T) : "enum" == e4.kind && a2(e4.T);
      }
      for (const t4 of e3) a2(t4);
      return i2;
    };
  }