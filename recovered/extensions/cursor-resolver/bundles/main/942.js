// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 942 range:208808..210421
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
942: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createRegistry = void 0, t2.createRegistry = function(...e3) {
      const t3 = {}, n2 = {}, r2 = {}, o2 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Map(), s2 = { findMessage: (e4) => t3[e4], findEnum: (e4) => n2[e4], findService: (e4) => r2[e4], findExtensionFor(e4, t4) {
        var n3, r3;
        return null !== (r3 = null === (n3 = a2.get(e4)) || void 0 === n3 ? void 0 : n3.get(t4)) && void 0 !== r3 ? r3 : void 0;
      }, findExtension(e4) {
        var t4;
        return null !== (t4 = o2.get(e4)) && void 0 !== t4 ? t4 : void 0;
      } };
      function i2(e4) {
        var u2;
        if ("fields" in e4) s2.findMessage(e4.typeName) || (t3[e4.typeName] = e4, e4.fields.list().forEach(l2));
        else if ("methods" in e4) {
          if (!s2.findService(e4.typeName)) {
            r2[e4.typeName] = e4;
            for (const t4 of Object.values(e4.methods)) i2(t4.I), i2(t4.O);
          }
        } else if ("extendee" in e4) {
          if (!o2.has(e4.typeName)) {
            o2.set(e4.typeName, e4);
            const t4 = e4.extendee.typeName;
            a2.has(t4) || a2.set(t4, /* @__PURE__ */ new Map()), null === (u2 = a2.get(t4)) || void 0 === u2 || u2.set(e4.field.no, e4), i2(e4.extendee), l2(e4.field);
          }
        } else n2[e4.typeName] = e4;
      }
      function l2(e4) {
        "message" == e4.kind ? i2(e4.T) : "map" == e4.kind && "message" == e4.V.kind ? i2(e4.V.T) : "enum" == e4.kind && i2(e4.T);
      }
      for (const t4 of e3) i2(t4);
      return s2;
    };
  }