// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 802 range:182520..184106
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
802: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.filterUnknownFields = t2.createExtensionContainer = t2.makeExtension = void 0;
    const r2 = n2(455);
    t2.makeExtension = function(e3, t3, n3, r3) {
      let o2;
      return { typeName: t3, extendee: n3, get field() {
        if (!o2) {
          const n4 = "function" == typeof r3 ? r3() : r3;
          n4.name = t3.split(".").pop(), n4.jsonName = `[${t3}]`, o2 = e3.util.newFieldList([n4]).list()[0];
        }
        return o2;
      }, runtime: e3 };
    }, t2.createExtensionContainer = function(e3) {
      const t3 = e3.field.localName, n3 = /* @__PURE__ */ Object.create(null);
      return n3[t3] = (function(e4) {
        const t4 = e4.field;
        if (t4.repeated) return [];
        if (void 0 !== t4.default) return t4.default;
        switch (t4.kind) {
          case "enum":
            return t4.T.values[0].no;
          case "scalar":
            return (0, r2.scalarZeroValue)(t4.T, t4.L);
          case "message":
            const e5 = t4.T, n4 = new e5();
            return e5.fieldWrapper ? e5.fieldWrapper.unwrapField(n4) : n4;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(e3), [n3, () => n3[t3]];
    }, t2.filterUnknownFields = function(e3, t3) {
      if (!t3.repeated && ("enum" == t3.kind || "scalar" == t3.kind)) {
        for (let n3 = e3.length - 1; n3 >= 0; --n3) if (e3[n3].no == t3.no) return [e3[n3]];
        return [];
      }
      return e3.filter((e4) => e4.no === t3.no);
    };
  }