// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 69964 range:6306498..6307745
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69964: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.distinctUntilKeyChanged = void 0;
    const n = r(47529);
    t.distinctUntilKeyChanged = function(e2, t2) {
      return (0, n.distinctUntilChanged)((r2, n2) => t2 ? t2(r2[e2], n2[e2]) : r2[e2] === n2[e2]);
    };
  }, 7e4: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(68255), s = r(79657), o = r(95183), i = { keyword: "pattern", type: "string", schemaType: "string", $data: true, error: { message: ({ schemaCode: e2 }) => o.str`must match pattern "${e2}"`, params: ({ schemaCode: e2 }) => o._`{pattern: ${e2}}` }, code(e2) {
      const { gen: t2, data: r2, $data: i2, schema: a, schemaCode: c, it: l } = e2, u = l.opts.unicodeRegExp ? "u" : "";
      if (i2) {
        const { regExp: n2 } = l.opts.code, i3 = "new RegExp" === n2.code ? o._`new RegExp` : (0, s.useFunc)(t2, n2), a2 = t2.let("valid");
        t2.try(() => t2.assign(a2, o._`${i3}(${c}, ${u}).test(${r2})`), () => t2.assign(a2, false)), e2.fail$data(o._`!${a2}`);
      } else {
        const t3 = (0, n.usePattern)(e2, a);
        e2.fail$data(o._`!${t3}.test(${r2})`);
      }
    } };
    t.default = i;
  }