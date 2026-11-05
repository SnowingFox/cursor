// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 1802 range:182206..183812
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1802: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.filterUnknownFields = A2.createExtensionContainer = A2.makeExtension = void 0;
    const n2 = t2(1455);
    A2.makeExtension = function(e3, A3, t3, n3) {
      let r2;
      return { typeName: A3, extendee: t3, get field() {
        if (!r2) {
          const t4 = "function" == typeof n3 ? n3() : n3;
          t4.name = A3.split(".").pop(), t4.jsonName = `[${A3}]`, r2 = e3.util.newFieldList([t4]).list()[0];
        }
        return r2;
      }, runtime: e3 };
    }, A2.createExtensionContainer = function(e3) {
      const A3 = e3.field.localName, t3 = /* @__PURE__ */ Object.create(null);
      return t3[A3] = (function(e4) {
        const A4 = e4.field;
        if (A4.repeated) return [];
        if (void 0 !== A4.default) return A4.default;
        switch (A4.kind) {
          case "enum":
            return A4.T.values[0].no;
          case "scalar":
            return (0, n2.scalarZeroValue)(A4.T, A4.L);
          case "message":
            const e5 = A4.T, t4 = new e5();
            return e5.fieldWrapper ? e5.fieldWrapper.unwrapField(t4) : t4;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(e3), [t3, () => t3[A3]];
    }, A2.filterUnknownFields = function(e3, A3) {
      if (!A3.repeated && ("enum" == A3.kind || "scalar" == A3.kind)) {
        for (let t3 = e3.length - 1; t3 >= 0; --t3) if (e3[t3].no == A3.no) return [e3[t3]];
        return [];
      }
      return e3.filter((e4) => e4.no === A3.no);
    };
  }