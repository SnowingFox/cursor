// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 1802 range:182321..183927
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1802: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.filterUnknownFields = n2.createExtensionContainer = n2.makeExtension = void 0;
    const t2 = a2(1455);
    n2.makeExtension = function(e3, n3, a3, t3) {
      let s2;
      return { typeName: n3, extendee: a3, get field() {
        if (!s2) {
          const a4 = "function" == typeof t3 ? t3() : t3;
          a4.name = n3.split(".").pop(), a4.jsonName = `[${n3}]`, s2 = e3.util.newFieldList([a4]).list()[0];
        }
        return s2;
      }, runtime: e3 };
    }, n2.createExtensionContainer = function(e3) {
      const n3 = e3.field.localName, a3 = /* @__PURE__ */ Object.create(null);
      return a3[n3] = (function(e4) {
        const n4 = e4.field;
        if (n4.repeated) return [];
        if (void 0 !== n4.default) return n4.default;
        switch (n4.kind) {
          case "enum":
            return n4.T.values[0].no;
          case "scalar":
            return (0, t2.scalarZeroValue)(n4.T, n4.L);
          case "message":
            const e5 = n4.T, a4 = new e5();
            return e5.fieldWrapper ? e5.fieldWrapper.unwrapField(a4) : a4;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(e3), [a3, () => a3[n3]];
    }, n2.filterUnknownFields = function(e3, n3) {
      if (!n3.repeated && ("enum" == n3.kind || "scalar" == n3.kind)) {
        for (let a3 = e3.length - 1; a3 >= 0; --a3) if (e3[a3].no == n3.no) return [e3[a3]];
        return [];
      }
      return e3.filter((e4) => e4.no === n3.no);
    };
  }