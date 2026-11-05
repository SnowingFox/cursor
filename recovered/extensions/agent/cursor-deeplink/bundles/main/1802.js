// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1802 range:188561..190167
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1802: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.filterUnknownFields = t2.createExtensionContainer = t2.makeExtension = void 0;
    const n2 = A2(1455);
    t2.makeExtension = function(e3, t3, A3, n3) {
      let r2;
      return { typeName: t3, extendee: A3, get field() {
        if (!r2) {
          const A4 = "function" == typeof n3 ? n3() : n3;
          A4.name = t3.split(".").pop(), A4.jsonName = `[${t3}]`, r2 = e3.util.newFieldList([A4]).list()[0];
        }
        return r2;
      }, runtime: e3 };
    }, t2.createExtensionContainer = function(e3) {
      const t3 = e3.field.localName, A3 = /* @__PURE__ */ Object.create(null);
      return A3[t3] = (function(e4) {
        const t4 = e4.field;
        if (t4.repeated) return [];
        if (void 0 !== t4.default) return t4.default;
        switch (t4.kind) {
          case "enum":
            return t4.T.values[0].no;
          case "scalar":
            return (0, n2.scalarZeroValue)(t4.T, t4.L);
          case "message":
            const e5 = t4.T, A4 = new e5();
            return e5.fieldWrapper ? e5.fieldWrapper.unwrapField(A4) : A4;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(e3), [A3, () => A3[t3]];
    }, t2.filterUnknownFields = function(e3, t3) {
      if (!t3.repeated && ("enum" == t3.kind || "scalar" == t3.kind)) {
        for (let A3 = e3.length - 1; A3 >= 0; --A3) if (e3[A3].no == t3.no) return [e3[A3]];
        return [];
      }
      return e3.filter((e4) => e4.no === t3.no);
    };
  }