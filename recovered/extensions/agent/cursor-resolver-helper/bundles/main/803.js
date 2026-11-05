// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 803 range:184108..185355
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
803: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.clearField = a2.isFieldSet = void 0;
    const o2 = n2(455);
    a2.isFieldSet = function(e3, a3) {
      const n3 = e3.localName;
      if (e3.repeated) return a3[n3].length > 0;
      if (e3.oneof) return a3[e3.oneof.localName].case === n3;
      switch (e3.kind) {
        case "enum":
        case "scalar":
          return e3.opt || e3.req ? void 0 !== a3[n3] : "enum" == e3.kind ? a3[n3] !== e3.T.values[0].no : !(0, o2.isScalarZeroValue)(e3.T, a3[n3]);
        case "message":
          return void 0 !== a3[n3];
        case "map":
          return Object.keys(a3[n3]).length > 0;
      }
    }, a2.clearField = function(e3, a3) {
      const n3 = e3.localName, s2 = !e3.opt && !e3.req;
      if (e3.repeated) a3[n3] = [];
      else if (e3.oneof) a3[e3.oneof.localName] = { case: void 0 };
      else switch (e3.kind) {
        case "map":
          a3[n3] = {};
          break;
        case "enum":
          a3[n3] = s2 ? e3.T.values[0].no : void 0;
          break;
        case "scalar":
          a3[n3] = s2 ? (0, o2.scalarZeroValue)(e3.T, e3.L) : void 0;
          break;
        case "message":
          a3[n3] = void 0;
      }
    };
  }