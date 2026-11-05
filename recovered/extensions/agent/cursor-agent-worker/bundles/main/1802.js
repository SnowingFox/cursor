// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 1802 range:89786..91454
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1802: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.filterUnknownFields = a10.createExtensionContainer = a10.makeExtension = void 0;
    const s10 = n10(1455);
    a10.makeExtension = function(e11, a11, n11, s11) {
      let o10;
      return { typeName: a11, extendee: n11, get field() {
        if (!o10) {
          const n12 = "function" == typeof s11 ? s11() : s11;
          n12.name = a11.split(".").pop(), n12.jsonName = `[${a11}]`, o10 = e11.util.newFieldList([n12]).list()[0];
        }
        return o10;
      }, runtime: e11 };
    }, a10.createExtensionContainer = function(e11) {
      const a11 = e11.field.localName, n11 = /* @__PURE__ */ Object.create(null);
      return n11[a11] = (function(e12) {
        const a12 = e12.field;
        if (a12.repeated) return [];
        if (void 0 !== a12.default) return a12.default;
        switch (a12.kind) {
          case "enum":
            return a12.T.values[0].no;
          case "scalar":
            return (0, s10.scalarZeroValue)(a12.T, a12.L);
          case "message":
            const e13 = a12.T, n12 = new e13();
            return e13.fieldWrapper ? e13.fieldWrapper.unwrapField(n12) : n12;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(e11), [n11, () => n11[a11]];
    }, a10.filterUnknownFields = function(e11, a11) {
      if (!a11.repeated && ("enum" == a11.kind || "scalar" == a11.kind)) {
        for (let n11 = e11.length - 1; n11 >= 0; --n11) if (e11[n11].no == a11.no) return [e11[n11]];
        return [];
      }
      return e11.filter((e12) => e12.no === a11.no);
    };
  }