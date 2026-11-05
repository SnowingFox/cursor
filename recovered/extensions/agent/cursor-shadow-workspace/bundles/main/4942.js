// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 4942 range:439582..441195
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4942: (e2, A2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.createRegistry = void 0, A2.createRegistry = function(...e3) {
      const A3 = {}, t2 = {}, n2 = {}, r2 = /* @__PURE__ */ new Map(), o2 = /* @__PURE__ */ new Map(), s = { findMessage: (e4) => A3[e4], findEnum: (e4) => t2[e4], findService: (e4) => n2[e4], findExtensionFor(e4, A4) {
        var t3, n3;
        return null !== (n3 = null === (t3 = o2.get(e4)) || void 0 === t3 ? void 0 : t3.get(A4)) && void 0 !== n3 ? n3 : void 0;
      }, findExtension(e4) {
        var A4;
        return null !== (A4 = r2.get(e4)) && void 0 !== A4 ? A4 : void 0;
      } };
      function a(e4) {
        var c;
        if ("fields" in e4) s.findMessage(e4.typeName) || (A3[e4.typeName] = e4, e4.fields.list().forEach(i));
        else if ("methods" in e4) {
          if (!s.findService(e4.typeName)) {
            n2[e4.typeName] = e4;
            for (const A4 of Object.values(e4.methods)) a(A4.I), a(A4.O);
          }
        } else if ("extendee" in e4) {
          if (!r2.has(e4.typeName)) {
            r2.set(e4.typeName, e4);
            const A4 = e4.extendee.typeName;
            o2.has(A4) || o2.set(A4, /* @__PURE__ */ new Map()), null === (c = o2.get(A4)) || void 0 === c || c.set(e4.field.no, e4), a(e4.extendee), i(e4.field);
          }
        } else t2[e4.typeName] = e4;
      }
      function i(e4) {
        "message" == e4.kind ? a(e4.T) : "map" == e4.kind && "message" == e4.V.kind ? a(e4.V.T) : "enum" == e4.kind && a(e4.T);
      }
      for (const A4 of e3) a(A4);
      return s;
    };
  }