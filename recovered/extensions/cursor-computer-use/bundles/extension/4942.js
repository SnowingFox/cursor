// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4942 range:470908..472521
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4942: (e2, n2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.createRegistry = void 0, n2.createRegistry = function(...e3) {
      const n3 = {}, t2 = {}, a2 = {}, s2 = /* @__PURE__ */ new Map(), o2 = /* @__PURE__ */ new Map(), r = { findMessage: (e4) => n3[e4], findEnum: (e4) => t2[e4], findService: (e4) => a2[e4], findExtensionFor(e4, n4) {
        var t3, a3;
        return null !== (a3 = null === (t3 = o2.get(e4)) || void 0 === t3 ? void 0 : t3.get(n4)) && void 0 !== a3 ? a3 : void 0;
      }, findExtension(e4) {
        var n4;
        return null !== (n4 = s2.get(e4)) && void 0 !== n4 ? n4 : void 0;
      } };
      function i(e4) {
        var c;
        if ("fields" in e4) r.findMessage(e4.typeName) || (n3[e4.typeName] = e4, e4.fields.list().forEach(A));
        else if ("methods" in e4) {
          if (!r.findService(e4.typeName)) {
            a2[e4.typeName] = e4;
            for (const n4 of Object.values(e4.methods)) i(n4.I), i(n4.O);
          }
        } else if ("extendee" in e4) {
          if (!s2.has(e4.typeName)) {
            s2.set(e4.typeName, e4);
            const n4 = e4.extendee.typeName;
            o2.has(n4) || o2.set(n4, /* @__PURE__ */ new Map()), null === (c = o2.get(n4)) || void 0 === c || c.set(e4.field.no, e4), i(e4.extendee), A(e4.field);
          }
        } else t2[e4.typeName] = e4;
      }
      function A(e4) {
        "message" == e4.kind ? i(e4.T) : "map" == e4.kind && "message" == e4.V.kind ? i(e4.V.T) : "enum" == e4.kind && i(e4.T);
      }
      for (const n4 of e3) i(n4);
      return r;
    };
  }