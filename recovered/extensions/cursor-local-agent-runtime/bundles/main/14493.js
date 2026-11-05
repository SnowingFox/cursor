// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 14493 range:497219..497875
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
14493: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), o = { keyword: "multipleOf", type: "number", schemaType: "number", $data: true, error: { message: ({ schemaCode: e2 }) => n.str`must be multiple of ${e2}`, params: ({ schemaCode: e2 }) => n._`{multipleOf: ${e2}}` }, code(e2) {
      const { gen: t2, data: r2, schemaCode: o2, it: s } = e2, i = s.opts.multipleOfPrecision, a = t2.let("res"), l = i ? n._`Math.abs(Math.round(${a}) - ${a}) > 1e-${i}` : n._`${a} !== parseInt(${a})`;
      e2.fail$data(n._`(${o2} === 0 || (${a} = ${r2}/${o2}, ${l}))`);
    } };
    t.default = o;
  }