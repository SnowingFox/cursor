// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 82989 range:7450807..7451739
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
82989: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.boolOrEmptySchema = t.topBoolOrEmptySchema = void 0;
    const n = r(34006), o = r(95183), s = r(44489), i = { message: "boolean schema is false" };
    function a(e2, t2) {
      const { gen: r2, data: o2 } = e2, s2 = { gen: r2, keyword: "false schema", data: o2, schema: false, schemaCode: false, schemaValue: false, params: {}, it: e2 };
      (0, n.reportError)(s2, i, void 0, t2);
    }
    t.topBoolOrEmptySchema = function(e2) {
      const { gen: t2, schema: r2, validateName: n2 } = e2;
      false === r2 ? a(e2, false) : "object" == typeof r2 && true === r2.$async ? t2.return(s.default.data) : (t2.assign(o._`${n2}.errors`, null), t2.return(true));
    }, t.boolOrEmptySchema = function(e2, t2) {
      const { gen: r2, schema: n2 } = e2;
      false === n2 ? (r2.var(t2, false), a(e2)) : r2.var(t2, true);
    };
  }