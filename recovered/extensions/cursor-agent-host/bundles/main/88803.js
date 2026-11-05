// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 88803 range:12357449..12358703
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
88803: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.clearField = t.isFieldSet = void 0;
    const n = r(31455);
    t.isFieldSet = function(e2, t2) {
      const r2 = e2.localName;
      if (e2.repeated) return t2[r2].length > 0;
      if (e2.oneof) return t2[e2.oneof.localName].case === r2;
      switch (e2.kind) {
        case "enum":
        case "scalar":
          return e2.opt || e2.req ? void 0 !== t2[r2] : "enum" == e2.kind ? t2[r2] !== e2.T.values[0].no : !(0, n.isScalarZeroValue)(e2.T, t2[r2]);
        case "message":
          return void 0 !== t2[r2];
        case "map":
          return Object.keys(t2[r2]).length > 0;
      }
    }, t.clearField = function(e2, t2) {
      const r2 = e2.localName, s = !e2.opt && !e2.req;
      if (e2.repeated) t2[r2] = [];
      else if (e2.oneof) t2[e2.oneof.localName] = { case: void 0 };
      else switch (e2.kind) {
        case "map":
          t2[r2] = {};
          break;
        case "enum":
          t2[r2] = s ? e2.T.values[0].no : void 0;
          break;
        case "scalar":
          t2[r2] = s ? (0, n.scalarZeroValue)(e2.T, e2.L) : void 0;
          break;
        case "message":
          t2[r2] = void 0;
      }
    };
  }