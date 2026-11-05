// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 69925 range:2255650..2256928
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69925: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), o = r(79657), s = r(79244), i = { keyword: "enum", schemaType: "array", $data: true, error: { message: "must be equal to one of the allowed values", params: ({ schemaCode: e2 }) => n._`{allowedValues: ${e2}}` }, code(e2) {
      const { gen: t2, data: r2, $data: i2, schema: a, schemaCode: l, it: c } = e2;
      if (!i2 && 0 === a.length) throw new Error("enum must have non-empty array");
      const u = a.length >= c.opts.loopEnum;
      let d;
      const p = () => null != d ? d : d = (0, o.useFunc)(t2, s.default);
      let h;
      if (u || i2) h = t2.let("valid"), e2.block$data(h, function() {
        t2.assign(h, false), t2.forOf("v", l, (e3) => t2.if(n._`${p()}(${r2}, ${e3})`, () => t2.assign(h, true).break()));
      });
      else {
        if (!Array.isArray(a)) throw new Error("ajv implementation error");
        const e3 = t2.const("vSchema", l);
        h = (0, n.or)(...a.map((t3, o2) => (function(e4, t4) {
          const o3 = a[t4];
          return "object" == typeof o3 && null !== o3 ? n._`${p()}(${r2}, ${e4}[${t4}])` : n._`${r2} === ${o3}`;
        })(e3, o2)));
      }
      e2.pass(h);
    } };
    t.default = i;
  }