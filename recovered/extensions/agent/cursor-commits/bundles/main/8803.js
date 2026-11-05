// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 8803 range:660259..661526
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8803: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.clearField = n2.isFieldSet = void 0;
    const t2 = a2(1455);
    n2.isFieldSet = function(e3, n3) {
      const a3 = e3.localName;
      if (e3.repeated) return n3[a3].length > 0;
      if (e3.oneof) return n3[e3.oneof.localName].case === a3;
      switch (e3.kind) {
        case "enum":
        case "scalar":
          return e3.opt || e3.req ? void 0 !== n3[a3] : "enum" == e3.kind ? n3[a3] !== e3.T.values[0].no : !(0, t2.isScalarZeroValue)(e3.T, n3[a3]);
        case "message":
          return void 0 !== n3[a3];
        case "map":
          return Object.keys(n3[a3]).length > 0;
      }
    }, n2.clearField = function(e3, n3) {
      const a3 = e3.localName, s2 = !e3.opt && !e3.req;
      if (e3.repeated) n3[a3] = [];
      else if (e3.oneof) n3[e3.oneof.localName] = { case: void 0 };
      else switch (e3.kind) {
        case "map":
          n3[a3] = {};
          break;
        case "enum":
          n3[a3] = s2 ? e3.T.values[0].no : void 0;
          break;
        case "scalar":
          n3[a3] = s2 ? (0, t2.scalarZeroValue)(e3.T, e3.L) : void 0;
          break;
        case "message":
          n3[a3] = void 0;
      }
    };
  }