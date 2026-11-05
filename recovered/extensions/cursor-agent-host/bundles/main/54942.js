// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 54942 range:8665779..8667373
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
54942: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.createRegistry = void 0, t.createRegistry = function(...e2) {
      const t2 = {}, r = {}, n = {}, s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = { findMessage: (e3) => t2[e3], findEnum: (e3) => r[e3], findService: (e3) => n[e3], findExtensionFor(e3, t3) {
        var r2, n2;
        return null !== (n2 = null === (r2 = o.get(e3)) || void 0 === r2 ? void 0 : r2.get(t3)) && void 0 !== n2 ? n2 : void 0;
      }, findExtension(e3) {
        var t3;
        return null !== (t3 = s.get(e3)) && void 0 !== t3 ? t3 : void 0;
      } };
      function a(e3) {
        var l;
        if ("fields" in e3) i.findMessage(e3.typeName) || (t2[e3.typeName] = e3, e3.fields.list().forEach(c));
        else if ("methods" in e3) {
          if (!i.findService(e3.typeName)) {
            n[e3.typeName] = e3;
            for (const t3 of Object.values(e3.methods)) a(t3.I), a(t3.O);
          }
        } else if ("extendee" in e3) {
          if (!s.has(e3.typeName)) {
            s.set(e3.typeName, e3);
            const t3 = e3.extendee.typeName;
            o.has(t3) || o.set(t3, /* @__PURE__ */ new Map()), null === (l = o.get(t3)) || void 0 === l || l.set(e3.field.no, e3), a(e3.extendee), c(e3.field);
          }
        } else r[e3.typeName] = e3;
      }
      function c(e3) {
        "message" == e3.kind ? a(e3.T) : "map" == e3.kind && "message" == e3.V.kind ? a(e3.V.T) : "enum" == e3.kind && a(e3.T);
      }
      for (const t3 of e2) a(t3);
      return i;
    };
  }