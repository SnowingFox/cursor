// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 82989 range:11878363..11879295
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
82989: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.boolOrEmptySchema = t.topBoolOrEmptySchema = void 0;
    const n = r(34006), s = r(95183), o = r(44489), i = { message: "boolean schema is false" };
    function a(e2, t2) {
      const { gen: r2, data: s2 } = e2, o2 = { gen: r2, keyword: "false schema", data: s2, schema: false, schemaCode: false, schemaValue: false, params: {}, it: e2 };
      (0, n.reportError)(o2, i, void 0, t2);
    }
    t.topBoolOrEmptySchema = function(e2) {
      const { gen: t2, schema: r2, validateName: n2 } = e2;
      false === r2 ? a(e2, false) : "object" == typeof r2 && true === r2.$async ? t2.return(o.default.data) : (t2.assign(s._`${n2}.errors`, null), t2.return(true));
    }, t.boolOrEmptySchema = function(e2, t2) {
      const { gen: r2, schema: n2 } = e2;
      false === n2 ? (r2.var(t2, false), a(e2)) : r2.var(t2, true);
    };
  }