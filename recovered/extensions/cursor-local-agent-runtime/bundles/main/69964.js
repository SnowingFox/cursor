// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 69964 range:2256930..2258177
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
    const n = r(68255), o = r(79657), s = r(95183), i = { keyword: "pattern", type: "string", schemaType: "string", $data: true, error: { message: ({ schemaCode: e2 }) => s.str`must match pattern "${e2}"`, params: ({ schemaCode: e2 }) => s._`{pattern: ${e2}}` }, code(e2) {
      const { gen: t2, data: r2, $data: i2, schema: a, schemaCode: l, it: c } = e2, u = c.opts.unicodeRegExp ? "u" : "";
      if (i2) {
        const { regExp: n2 } = c.opts.code, i3 = "new RegExp" === n2.code ? s._`new RegExp` : (0, o.useFunc)(t2, n2), a2 = t2.let("valid");
        t2.try(() => t2.assign(a2, s._`${i3}(${l}, ${u}).test(${r2})`), () => t2.assign(a2, false)), e2.fail$data(s._`!${a2}`);
      } else {
        const t3 = (0, n.usePattern)(e2, a);
        e2.fail$data(s._`!${t3}.test(${r2})`);
      }
    } };
    t.default = i;
  }