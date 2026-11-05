// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 8803 range:690760..692027
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8803: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.clearField = n2.isFieldSet = void 0;
    const a2 = t2(1455);
    n2.isFieldSet = function(e3, n3) {
      const t3 = e3.localName;
      if (e3.repeated) return n3[t3].length > 0;
      if (e3.oneof) return n3[e3.oneof.localName].case === t3;
      switch (e3.kind) {
        case "enum":
        case "scalar":
          return e3.opt || e3.req ? void 0 !== n3[t3] : "enum" == e3.kind ? n3[t3] !== e3.T.values[0].no : !(0, a2.isScalarZeroValue)(e3.T, n3[t3]);
        case "message":
          return void 0 !== n3[t3];
        case "map":
          return Object.keys(n3[t3]).length > 0;
      }
    }, n2.clearField = function(e3, n3) {
      const t3 = e3.localName, s2 = !e3.opt && !e3.req;
      if (e3.repeated) n3[t3] = [];
      else if (e3.oneof) n3[e3.oneof.localName] = { case: void 0 };
      else switch (e3.kind) {
        case "map":
          n3[t3] = {};
          break;
        case "enum":
          n3[t3] = s2 ? e3.T.values[0].no : void 0;
          break;
        case "scalar":
          n3[t3] = s2 ? (0, a2.scalarZeroValue)(e3.T, e3.L) : void 0;
          break;
        case "message":
          n3[t3] = void 0;
      }
    };
  }