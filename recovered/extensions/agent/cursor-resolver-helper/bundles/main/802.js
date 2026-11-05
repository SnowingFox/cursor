// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 802 range:182520..184106
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
802: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.filterUnknownFields = a2.createExtensionContainer = a2.makeExtension = void 0;
    const o2 = n2(455);
    a2.makeExtension = function(e3, a3, n3, o3) {
      let s2;
      return { typeName: a3, extendee: n3, get field() {
        if (!s2) {
          const n4 = "function" == typeof o3 ? o3() : o3;
          n4.name = a3.split(".").pop(), n4.jsonName = `[${a3}]`, s2 = e3.util.newFieldList([n4]).list()[0];
        }
        return s2;
      }, runtime: e3 };
    }, a2.createExtensionContainer = function(e3) {
      const a3 = e3.field.localName, n3 = /* @__PURE__ */ Object.create(null);
      return n3[a3] = (function(e4) {
        const a4 = e4.field;
        if (a4.repeated) return [];
        if (void 0 !== a4.default) return a4.default;
        switch (a4.kind) {
          case "enum":
            return a4.T.values[0].no;
          case "scalar":
            return (0, o2.scalarZeroValue)(a4.T, a4.L);
          case "message":
            const e5 = a4.T, n4 = new e5();
            return e5.fieldWrapper ? e5.fieldWrapper.unwrapField(n4) : n4;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(e3), [n3, () => n3[a3]];
    }, a2.filterUnknownFields = function(e3, a3) {
      if (!a3.repeated && ("enum" == a3.kind || "scalar" == a3.kind)) {
        for (let n3 = e3.length - 1; n3 >= 0; --n3) if (e3[n3].no == a3.no) return [e3[n3]];
        return [];
      }
      return e3.filter((e4) => e4.no === a3.no);
    };
  }