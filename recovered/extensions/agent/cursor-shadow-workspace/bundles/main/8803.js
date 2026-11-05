// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 8803 range:659340..660607
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8803: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.clearField = A2.isFieldSet = void 0;
    const n2 = t2(1455);
    A2.isFieldSet = function(e3, A3) {
      const t3 = e3.localName;
      if (e3.repeated) return A3[t3].length > 0;
      if (e3.oneof) return A3[e3.oneof.localName].case === t3;
      switch (e3.kind) {
        case "enum":
        case "scalar":
          return e3.opt || e3.req ? void 0 !== A3[t3] : "enum" == e3.kind ? A3[t3] !== e3.T.values[0].no : !(0, n2.isScalarZeroValue)(e3.T, A3[t3]);
        case "message":
          return void 0 !== A3[t3];
        case "map":
          return Object.keys(A3[t3]).length > 0;
      }
    }, A2.clearField = function(e3, A3) {
      const t3 = e3.localName, r2 = !e3.opt && !e3.req;
      if (e3.repeated) A3[t3] = [];
      else if (e3.oneof) A3[e3.oneof.localName] = { case: void 0 };
      else switch (e3.kind) {
        case "map":
          A3[t3] = {};
          break;
        case "enum":
          A3[t3] = r2 ? e3.T.values[0].no : void 0;
          break;
        case "scalar":
          A3[t3] = r2 ? (0, n2.scalarZeroValue)(e3.T, e3.L) : void 0;
          break;
        case "message":
          A3[t3] = void 0;
      }
    };
  }