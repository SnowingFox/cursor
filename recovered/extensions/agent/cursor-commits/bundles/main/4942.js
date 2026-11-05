// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 4942 range:439980..441605
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4942: (e2, n2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.createRegistry = void 0, n2.createRegistry = function(...e3) {
      const n3 = {}, a2 = {}, t2 = {}, s2 = /* @__PURE__ */ new Map(), o2 = /* @__PURE__ */ new Map(), r2 = { findMessage: (e4) => n3[e4], findEnum: (e4) => a2[e4], findService: (e4) => t2[e4], findExtensionFor(e4, n4) {
        var a3, t3;
        return null !== (t3 = null === (a3 = o2.get(e4)) || void 0 === a3 ? void 0 : a3.get(n4)) && void 0 !== t3 ? t3 : void 0;
      }, findExtension(e4) {
        var n4;
        return null !== (n4 = s2.get(e4)) && void 0 !== n4 ? n4 : void 0;
      } };
      function i2(e4) {
        var l;
        if ("fields" in e4) r2.findMessage(e4.typeName) || (n3[e4.typeName] = e4, e4.fields.list().forEach(A));
        else if ("methods" in e4) {
          if (!r2.findService(e4.typeName)) {
            t2[e4.typeName] = e4;
            for (const n4 of Object.values(e4.methods)) i2(n4.I), i2(n4.O);
          }
        } else if ("extendee" in e4) {
          if (!s2.has(e4.typeName)) {
            s2.set(e4.typeName, e4);
            const n4 = e4.extendee.typeName;
            o2.has(n4) || o2.set(n4, /* @__PURE__ */ new Map()), null === (l = o2.get(n4)) || void 0 === l || l.set(e4.field.no, e4), i2(e4.extendee), A(e4.field);
          }
        } else a2[e4.typeName] = e4;
      }
      function A(e4) {
        "message" == e4.kind ? i2(e4.T) : "map" == e4.kind && "message" == e4.V.kind ? i2(e4.V.T) : "enum" == e4.kind && i2(e4.T);
      }
      for (const n4 of e3) i2(n4);
      return r2;
    };
  }