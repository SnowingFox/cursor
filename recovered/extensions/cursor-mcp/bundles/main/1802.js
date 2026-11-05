// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1802 range:188503..190109
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1802: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.filterUnknownFields = t2.createExtensionContainer = t2.makeExtension = void 0;
    const n2 = r2(3836);
    t2.makeExtension = function(e3, t3, r3, n3) {
      let o2;
      return { typeName: t3, extendee: r3, get field() {
        if (!o2) {
          const r4 = "function" == typeof n3 ? n3() : n3;
          r4.name = t3.split(".").pop(), r4.jsonName = `[${t3}]`, o2 = e3.util.newFieldList([r4]).list()[0];
        }
        return o2;
      }, runtime: e3 };
    }, t2.createExtensionContainer = function(e3) {
      const t3 = e3.field.localName, r3 = /* @__PURE__ */ Object.create(null);
      return r3[t3] = (function(e4) {
        const t4 = e4.field;
        if (t4.repeated) return [];
        if (void 0 !== t4.default) return t4.default;
        switch (t4.kind) {
          case "enum":
            return t4.T.values[0].no;
          case "scalar":
            return (0, n2.scalarZeroValue)(t4.T, t4.L);
          case "message":
            const e5 = t4.T, r4 = new e5();
            return e5.fieldWrapper ? e5.fieldWrapper.unwrapField(r4) : r4;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(e3), [r3, () => r3[t3]];
    }, t2.filterUnknownFields = function(e3, t3) {
      if (!t3.repeated && ("enum" == t3.kind || "scalar" == t3.kind)) {
        for (let r3 = e3.length - 1; r3 >= 0; --r3) if (e3[r3].no == t3.no) return [e3[r3]];
        return [];
      }
      return e3.filter((e4) => e4.no === t3.no);
    };
  }