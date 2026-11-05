// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 1802 range:88475..90065
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1802: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.filterUnknownFields = t.createExtensionContainer = t.makeExtension = void 0;
    const n = r(31455);
    t.makeExtension = function(e2, t2, r2, n2) {
      let s;
      return { typeName: t2, extendee: r2, get field() {
        if (!s) {
          const r3 = "function" == typeof n2 ? n2() : n2;
          r3.name = t2.split(".").pop(), r3.jsonName = `[${t2}]`, s = e2.util.newFieldList([r3]).list()[0];
        }
        return s;
      }, runtime: e2 };
    }, t.createExtensionContainer = function(e2) {
      const t2 = e2.field.localName, r2 = /* @__PURE__ */ Object.create(null);
      return r2[t2] = (function(e3) {
        const t3 = e3.field;
        if (t3.repeated) return [];
        if (void 0 !== t3.default) return t3.default;
        switch (t3.kind) {
          case "enum":
            return t3.T.values[0].no;
          case "scalar":
            return (0, n.scalarZeroValue)(t3.T, t3.L);
          case "message":
            const e4 = t3.T, r3 = new e4();
            return e4.fieldWrapper ? e4.fieldWrapper.unwrapField(r3) : r3;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(e2), [r2, () => r2[t2]];
    }, t.filterUnknownFields = function(e2, t2) {
      if (!t2.repeated && ("enum" == t2.kind || "scalar" == t2.kind)) {
        for (let r2 = e2.length - 1; r2 >= 0; --r2) if (e2[r2].no == t2.no) return [e2[r2]];
        return [];
      }
      return e2.filter((e3) => e3.no === t2.no);
    };
  }