// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1802 range:186397..188003
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1802: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.filterUnknownFields = n2.createExtensionContainer = n2.makeExtension = void 0;
    const a2 = t2(1455);
    n2.makeExtension = function(e3, n3, t3, a3) {
      let s2;
      return { typeName: n3, extendee: t3, get field() {
        if (!s2) {
          const t4 = "function" == typeof a3 ? a3() : a3;
          t4.name = n3.split(".").pop(), t4.jsonName = `[${n3}]`, s2 = e3.util.newFieldList([t4]).list()[0];
        }
        return s2;
      }, runtime: e3 };
    }, n2.createExtensionContainer = function(e3) {
      const n3 = e3.field.localName, t3 = /* @__PURE__ */ Object.create(null);
      return t3[n3] = (function(e4) {
        const n4 = e4.field;
        if (n4.repeated) return [];
        if (void 0 !== n4.default) return n4.default;
        switch (n4.kind) {
          case "enum":
            return n4.T.values[0].no;
          case "scalar":
            return (0, a2.scalarZeroValue)(n4.T, n4.L);
          case "message":
            const e5 = n4.T, t4 = new e5();
            return e5.fieldWrapper ? e5.fieldWrapper.unwrapField(t4) : t4;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(e3), [t3, () => t3[n3]];
    }, n2.filterUnknownFields = function(e3, n3) {
      if (!n3.repeated && ("enum" == n3.kind || "scalar" == n3.kind)) {
        for (let t3 = e3.length - 1; t3 >= 0; --t3) if (e3[t3].no == n3.no) return [e3[t3]];
        return [];
      }
      return e3.filter((e4) => e4.no === n3.no);
    };
  }