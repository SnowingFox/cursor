// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8803 range:5335137..5336404
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8803: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.clearField = e2.isFieldSet = void 0;
    const n2 = r2(1455);
    e2.isFieldSet = function(t3, e3) {
      const r3 = t3.localName;
      if (t3.repeated) return e3[r3].length > 0;
      if (t3.oneof) return e3[t3.oneof.localName].case === r3;
      switch (t3.kind) {
        case "enum":
        case "scalar":
          return t3.opt || t3.req ? void 0 !== e3[r3] : "enum" == t3.kind ? e3[r3] !== t3.T.values[0].no : !(0, n2.isScalarZeroValue)(t3.T, e3[r3]);
        case "message":
          return void 0 !== e3[r3];
        case "map":
          return Object.keys(e3[r3]).length > 0;
      }
    }, e2.clearField = function(t3, e3) {
      const r3 = t3.localName, s2 = !t3.opt && !t3.req;
      if (t3.repeated) e3[r3] = [];
      else if (t3.oneof) e3[t3.oneof.localName] = { case: void 0 };
      else switch (t3.kind) {
        case "map":
          e3[r3] = {};
          break;
        case "enum":
          e3[r3] = s2 ? t3.T.values[0].no : void 0;
          break;
        case "scalar":
          e3[r3] = s2 ? (0, n2.scalarZeroValue)(t3.T, t3.L) : void 0;
          break;
        case "message":
          e3[r3] = void 0;
      }
    };
  }