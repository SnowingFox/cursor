// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 8803 range:792248..793515
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8803: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.clearField = t2.isFieldSet = void 0;
    const n2 = A2(1455);
    t2.isFieldSet = function(e3, t3) {
      const A3 = e3.localName;
      if (e3.repeated) return t3[A3].length > 0;
      if (e3.oneof) return t3[e3.oneof.localName].case === A3;
      switch (e3.kind) {
        case "enum":
        case "scalar":
          return e3.opt || e3.req ? void 0 !== t3[A3] : "enum" == e3.kind ? t3[A3] !== e3.T.values[0].no : !(0, n2.isScalarZeroValue)(e3.T, t3[A3]);
        case "message":
          return void 0 !== t3[A3];
        case "map":
          return Object.keys(t3[A3]).length > 0;
      }
    }, t2.clearField = function(e3, t3) {
      const A3 = e3.localName, r2 = !e3.opt && !e3.req;
      if (e3.repeated) t3[A3] = [];
      else if (e3.oneof) t3[e3.oneof.localName] = { case: void 0 };
      else switch (e3.kind) {
        case "map":
          t3[A3] = {};
          break;
        case "enum":
          t3[A3] = r2 ? e3.T.values[0].no : void 0;
          break;
        case "scalar":
          t3[A3] = r2 ? (0, n2.scalarZeroValue)(e3.T, e3.L) : void 0;
          break;
        case "message":
          t3[A3] = void 0;
      }
    };
  }