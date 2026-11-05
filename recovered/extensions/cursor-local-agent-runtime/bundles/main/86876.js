// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 86876 range:7603360..7604042
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86876: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), o = r(79657), s = r(68255), i = r(98063), a = { keyword: "items", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", error: { message: ({ params: { len: e2 } }) => n.str`must NOT have more than ${e2} items`, params: ({ params: { len: e2 } }) => n._`{limit: ${e2}}` }, code(e2) {
      const { schema: t2, parentSchema: r2, it: n2 } = e2, { prefixItems: a2 } = r2;
      n2.items = true, (0, o.alwaysValidSchema)(n2, t2) || (a2 ? (0, i.validateAdditionalItems)(e2, a2) : e2.ok((0, s.validateArray)(e2)));
    } };
    t.default = a;
  }