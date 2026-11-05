// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 88803 range:7640943..7642197
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
      const r2 = e2.localName, o = !e2.opt && !e2.req;
      if (e2.repeated) t2[r2] = [];
      else if (e2.oneof) t2[e2.oneof.localName] = { case: void 0 };
      else switch (e2.kind) {
        case "map":
          t2[r2] = {};
          break;
        case "enum":
          t2[r2] = o ? e2.T.values[0].no : void 0;
          break;
        case "scalar":
          t2[r2] = o ? (0, n.scalarZeroValue)(e2.T, e2.L) : void 0;
          break;
        case "message":
          t2[r2] = void 0;
      }
    };
  }