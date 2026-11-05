// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 86876 range:12194907..12195589
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86876: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), s = r(79657), o = r(68255), i = r(98063), a = { keyword: "items", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", error: { message: ({ params: { len: e2 } }) => n.str`must NOT have more than ${e2} items`, params: ({ params: { len: e2 } }) => n._`{limit: ${e2}}` }, code(e2) {
      const { schema: t2, parentSchema: r2, it: n2 } = e2, { prefixItems: a2 } = r2;
      n2.items = true, (0, s.alwaysValidSchema)(n2, t2) || (a2 ? (0, i.validateAdditionalItems)(e2, a2) : e2.ok((0, o.validateArray)(e2)));
    } };
    t.default = a;
  }