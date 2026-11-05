// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 69925 range:10912976..10914254
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69925: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), s = r(79657), o = r(79244), i = { keyword: "enum", schemaType: "array", $data: true, error: { message: "must be equal to one of the allowed values", params: ({ schemaCode: e2 }) => n._`{allowedValues: ${e2}}` }, code(e2) {
      const { gen: t2, data: r2, $data: i2, schema: a, schemaCode: c, it: l } = e2;
      if (!i2 && 0 === a.length) throw new Error("enum must have non-empty array");
      const u = a.length >= l.opts.loopEnum;
      let d;
      const p = () => null != d ? d : d = (0, s.useFunc)(t2, o.default);
      let m;
      if (u || i2) m = t2.let("valid"), e2.block$data(m, function() {
        t2.assign(m, false), t2.forOf("v", c, (e3) => t2.if(n._`${p()}(${r2}, ${e3})`, () => t2.assign(m, true).break()));
      });
      else {
        if (!Array.isArray(a)) throw new Error("ajv implementation error");
        const e3 = t2.const("vSchema", c);
        m = (0, n.or)(...a.map((t3, s2) => (function(e4, t4) {
          const s3 = a[t4];
          return "object" == typeof s3 && null !== s3 ? n._`${p()}(${r2}, ${e4}[${t4}])` : n._`${r2} === ${s3}`;
        })(e3, s2)));
      }
      e2.pass(m);
    } };
    t.default = i;
  }