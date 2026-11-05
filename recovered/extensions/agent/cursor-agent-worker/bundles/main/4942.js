// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 4942 range:149122..150843
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4942: (e10, a10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.createRegistry = void 0, a10.createRegistry = function(...e11) {
      const a11 = {}, n10 = {}, s10 = {}, o10 = /* @__PURE__ */ new Map(), r10 = /* @__PURE__ */ new Map(), t10 = { findMessage: (e12) => a11[e12], findEnum: (e12) => n10[e12], findService: (e12) => s10[e12], findExtensionFor(e12, a12) {
        var n11, s11;
        return null !== (s11 = null === (n11 = r10.get(e12)) || void 0 === n11 ? void 0 : n11.get(a12)) && void 0 !== s11 ? s11 : void 0;
      }, findExtension(e12) {
        var a12;
        return null !== (a12 = o10.get(e12)) && void 0 !== a12 ? a12 : void 0;
      } };
      function i10(e12) {
        var l10;
        if ("fields" in e12) t10.findMessage(e12.typeName) || (a11[e12.typeName] = e12, e12.fields.list().forEach(m10));
        else if ("methods" in e12) {
          if (!t10.findService(e12.typeName)) {
            s10[e12.typeName] = e12;
            for (const a12 of Object.values(e12.methods)) i10(a12.I), i10(a12.O);
          }
        } else if ("extendee" in e12) {
          if (!o10.has(e12.typeName)) {
            o10.set(e12.typeName, e12);
            const a12 = e12.extendee.typeName;
            r10.has(a12) || r10.set(a12, /* @__PURE__ */ new Map()), null === (l10 = r10.get(a12)) || void 0 === l10 || l10.set(e12.field.no, e12), i10(e12.extendee), m10(e12.field);
          }
        } else n10[e12.typeName] = e12;
      }
      function m10(e12) {
        "message" == e12.kind ? i10(e12.T) : "map" == e12.kind && "message" == e12.V.kind ? i10(e12.V.T) : "enum" == e12.kind && i10(e12.T);
      }
      for (const a12 of e11) i10(a12);
      return t10;
    };
  }