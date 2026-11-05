// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 8803 range:331804..333119
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8803: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.clearField = a10.isFieldSet = void 0;
    const s10 = n10(1455);
    a10.isFieldSet = function(e11, a11) {
      const n11 = e11.localName;
      if (e11.repeated) return a11[n11].length > 0;
      if (e11.oneof) return a11[e11.oneof.localName].case === n11;
      switch (e11.kind) {
        case "enum":
        case "scalar":
          return e11.opt || e11.req ? void 0 !== a11[n11] : "enum" == e11.kind ? a11[n11] !== e11.T.values[0].no : !(0, s10.isScalarZeroValue)(e11.T, a11[n11]);
        case "message":
          return void 0 !== a11[n11];
        case "map":
          return Object.keys(a11[n11]).length > 0;
      }
    }, a10.clearField = function(e11, a11) {
      const n11 = e11.localName, o10 = !e11.opt && !e11.req;
      if (e11.repeated) a11[n11] = [];
      else if (e11.oneof) a11[e11.oneof.localName] = { case: void 0 };
      else switch (e11.kind) {
        case "map":
          a11[n11] = {};
          break;
        case "enum":
          a11[n11] = o10 ? e11.T.values[0].no : void 0;
          break;
        case "scalar":
          a11[n11] = o10 ? (0, s10.scalarZeroValue)(e11.T, e11.L) : void 0;
          break;
        case "message":
          a11[n11] = void 0;
      }
    };
  }