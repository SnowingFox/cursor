// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 1802 range:25771..27361
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1802: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.filterUnknownFields = t.createExtensionContainer = t.makeExtension = void 0;
    const n = r(31455);
    t.makeExtension = function(e2, t2, r2, n2) {
      let o;
      return { typeName: t2, extendee: r2, get field() {
        if (!o) {
          const r3 = "function" == typeof n2 ? n2() : n2;
          r3.name = t2.split(".").pop(), r3.jsonName = `[${t2}]`, o = e2.util.newFieldList([r3]).list()[0];
        }
        return o;
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