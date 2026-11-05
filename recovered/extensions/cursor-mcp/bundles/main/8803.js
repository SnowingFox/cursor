// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8803 range:813792..815059
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8803: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.clearField = t2.isFieldSet = void 0;
    const n2 = r2(3836);
    t2.isFieldSet = function(e3, t3) {
      const r3 = e3.localName;
      if (e3.repeated) return t3[r3].length > 0;
      if (e3.oneof) return t3[e3.oneof.localName].case === r3;
      switch (e3.kind) {
        case "enum":
        case "scalar":
          return e3.opt || e3.req ? void 0 !== t3[r3] : "enum" == e3.kind ? t3[r3] !== e3.T.values[0].no : !(0, n2.isScalarZeroValue)(e3.T, t3[r3]);
        case "message":
          return void 0 !== t3[r3];
        case "map":
          return Object.keys(t3[r3]).length > 0;
      }
    }, t2.clearField = function(e3, t3) {
      const r3 = e3.localName, o2 = !e3.opt && !e3.req;
      if (e3.repeated) t3[r3] = [];
      else if (e3.oneof) t3[e3.oneof.localName] = { case: void 0 };
      else switch (e3.kind) {
        case "map":
          t3[r3] = {};
          break;
        case "enum":
          t3[r3] = o2 ? e3.T.values[0].no : void 0;
          break;
        case "scalar":
          t3[r3] = o2 ? (0, n2.scalarZeroValue)(e3.T, e3.L) : void 0;
          break;
        case "message":
          t3[r3] = void 0;
      }
    };
  }