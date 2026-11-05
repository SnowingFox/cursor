// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 803 range:184108..185355
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
803: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.clearField = t2.isFieldSet = void 0;
    const r2 = n2(455);
    t2.isFieldSet = function(e3, t3) {
      const n3 = e3.localName;
      if (e3.repeated) return t3[n3].length > 0;
      if (e3.oneof) return t3[e3.oneof.localName].case === n3;
      switch (e3.kind) {
        case "enum":
        case "scalar":
          return e3.opt || e3.req ? void 0 !== t3[n3] : "enum" == e3.kind ? t3[n3] !== e3.T.values[0].no : !(0, r2.isScalarZeroValue)(e3.T, t3[n3]);
        case "message":
          return void 0 !== t3[n3];
        case "map":
          return Object.keys(t3[n3]).length > 0;
      }
    }, t2.clearField = function(e3, t3) {
      const n3 = e3.localName, o2 = !e3.opt && !e3.req;
      if (e3.repeated) t3[n3] = [];
      else if (e3.oneof) t3[e3.oneof.localName] = { case: void 0 };
      else switch (e3.kind) {
        case "map":
          t3[n3] = {};
          break;
        case "enum":
          t3[n3] = o2 ? e3.T.values[0].no : void 0;
          break;
        case "scalar":
          t3[n3] = o2 ? (0, r2.scalarZeroValue)(e3.T, e3.L) : void 0;
          break;
        case "message":
          t3[n3] = void 0;
      }
    };
  }