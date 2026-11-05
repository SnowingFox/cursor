// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2989 range:229330..230280
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2989: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.boolOrEmptySchema = t2.topBoolOrEmptySchema = void 0;
    const n2 = r2(4006), o2 = r2(5183), s2 = r2(4489), i2 = { message: "boolean schema is false" };
    function a2(e3, t3) {
      const { gen: r3, data: o3 } = e3, s3 = { gen: r3, keyword: "false schema", data: o3, schema: false, schemaCode: false, schemaValue: false, params: {}, it: e3 };
      (0, n2.reportError)(s3, i2, void 0, t3);
    }
    t2.topBoolOrEmptySchema = function(e3) {
      const { gen: t3, schema: r3, validateName: n3 } = e3;
      false === r3 ? a2(e3, false) : "object" == typeof r3 && true === r3.$async ? t3.return(s2.default.data) : (t3.assign(o2._`${n3}.errors`, null), t3.return(true));
    }, t2.boolOrEmptySchema = function(e3, t3) {
      const { gen: r3, schema: n3 } = e3;
      false === n3 ? (r3.var(t3, false), a2(e3)) : r3.var(t3, true);
    };
  }