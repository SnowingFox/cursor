// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1802 range:607758..609364
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1802: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.filterUnknownFields = e2.createExtensionContainer = e2.makeExtension = void 0;
    const n2 = r2(1455);
    e2.makeExtension = function(t3, e3, r3, n3) {
      let s2;
      return { typeName: e3, extendee: r3, get field() {
        if (!s2) {
          const r4 = "function" == typeof n3 ? n3() : n3;
          r4.name = e3.split(".").pop(), r4.jsonName = `[${e3}]`, s2 = t3.util.newFieldList([r4]).list()[0];
        }
        return s2;
      }, runtime: t3 };
    }, e2.createExtensionContainer = function(t3) {
      const e3 = t3.field.localName, r3 = /* @__PURE__ */ Object.create(null);
      return r3[e3] = (function(t4) {
        const e4 = t4.field;
        if (e4.repeated) return [];
        if (void 0 !== e4.default) return e4.default;
        switch (e4.kind) {
          case "enum":
            return e4.T.values[0].no;
          case "scalar":
            return (0, n2.scalarZeroValue)(e4.T, e4.L);
          case "message":
            const t5 = e4.T, r4 = new t5();
            return t5.fieldWrapper ? t5.fieldWrapper.unwrapField(r4) : r4;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(t3), [r3, () => r3[e3]];
    }, e2.filterUnknownFields = function(t3, e3) {
      if (!e3.repeated && ("enum" == e3.kind || "scalar" == e3.kind)) {
        for (let r3 = t3.length - 1; r3 >= 0; --r3) if (t3[r3].no == e3.no) return [t3[r3]];
        return [];
      }
      return t3.filter((t4) => t4.no === e3.no);
    };
  }