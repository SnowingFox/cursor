// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 942 range:208808..210421
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
942: (e2, a2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.createRegistry = void 0, a2.createRegistry = function(...e3) {
      const a3 = {}, n2 = {}, o2 = {}, s2 = /* @__PURE__ */ new Map(), t2 = /* @__PURE__ */ new Map(), r2 = { findMessage: (e4) => a3[e4], findEnum: (e4) => n2[e4], findService: (e4) => o2[e4], findExtensionFor(e4, a4) {
        var n3, o3;
        return null !== (o3 = null === (n3 = t2.get(e4)) || void 0 === n3 ? void 0 : n3.get(a4)) && void 0 !== o3 ? o3 : void 0;
      }, findExtension(e4) {
        var a4;
        return null !== (a4 = s2.get(e4)) && void 0 !== a4 ? a4 : void 0;
      } };
      function i2(e4) {
        var l2;
        if ("fields" in e4) r2.findMessage(e4.typeName) || (a3[e4.typeName] = e4, e4.fields.list().forEach(m2));
        else if ("methods" in e4) {
          if (!r2.findService(e4.typeName)) {
            o2[e4.typeName] = e4;
            for (const a4 of Object.values(e4.methods)) i2(a4.I), i2(a4.O);
          }
        } else if ("extendee" in e4) {
          if (!s2.has(e4.typeName)) {
            s2.set(e4.typeName, e4);
            const a4 = e4.extendee.typeName;
            t2.has(a4) || t2.set(a4, /* @__PURE__ */ new Map()), null === (l2 = t2.get(a4)) || void 0 === l2 || l2.set(e4.field.no, e4), i2(e4.extendee), m2(e4.field);
          }
        } else n2[e4.typeName] = e4;
      }
      function m2(e4) {
        "message" == e4.kind ? i2(e4.T) : "map" == e4.kind && "message" == e4.V.kind ? i2(e4.V.T) : "enum" == e4.kind && i2(e4.T);
      }
      for (const a4 of e3) i2(a4);
      return r2;
    };
  }