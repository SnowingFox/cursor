// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 89633 range:7699795..7700351
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
89633: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), o = r(79657), s = r(79244), i = { keyword: "const", $data: true, error: { message: "must be equal to constant", params: ({ schemaCode: e2 }) => n._`{allowedValue: ${e2}}` }, code(e2) {
      const { gen: t2, data: r2, $data: i2, schemaCode: a, schema: l } = e2;
      i2 || l && "object" == typeof l ? e2.fail$data(n._`!${(0, o.useFunc)(t2, s.default)}(${r2}, ${a})`) : e2.fail(n._`${l} !== ${r2}`);
    } };
    t.default = i;
  }