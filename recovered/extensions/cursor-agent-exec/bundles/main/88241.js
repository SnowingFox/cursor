// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 88241 range:11128780..11130793
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
88241: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(68255), s = r(95183), o = r(79657), i = { keyword: "required", type: "object", schemaType: "array", $data: true, error: { message: ({ params: { missingProperty: e2 } }) => s.str`must have required property '${e2}'`, params: ({ params: { missingProperty: e2 } }) => s._`{missingProperty: ${e2}}` }, code(e2) {
      const { gen: t2, schema: r2, schemaCode: i2, data: a, $data: c, it: l } = e2, { opts: u } = l;
      if (!c && 0 === r2.length) return;
      const d = r2.length >= u.loopRequired;
      if (l.allErrors ? (function() {
        if (d || c) e2.block$data(s.nil, p);
        else for (const t3 of r2) (0, n.checkReportMissingProp)(e2, t3);
      })() : (function() {
        const o2 = t2.let("missing");
        if (d || c) {
          const r3 = t2.let("valid", true);
          e2.block$data(r3, () => (function(r4, o3) {
            e2.setParams({ missingProperty: r4 }), t2.forOf(r4, i2, () => {
              t2.assign(o3, (0, n.propertyInData)(t2, a, r4, u.ownProperties)), t2.if((0, s.not)(o3), () => {
                e2.error(), t2.break();
              });
            }, s.nil);
          })(o2, r3)), e2.ok(r3);
        } else t2.if((0, n.checkMissingProp)(e2, r2, o2)), (0, n.reportMissingProp)(e2, o2), t2.else();
      })(), u.strictRequired) {
        const t3 = e2.parentSchema.properties, { definedProperties: n2 } = e2.it;
        for (const e3 of r2) if (void 0 === (null == t3 ? void 0 : t3[e3]) && !n2.has(e3)) {
          const t4 = `required property "${e3}" is not defined at "${l.schemaEnv.baseId + l.errSchemaPath}" (strictRequired)`;
          (0, o.checkStrictMode)(l, t4, l.opts.strictRequired);
        }
      }
      function p() {
        t2.forOf("prop", i2, (r3) => {
          e2.setParams({ missingProperty: r3 }), t2.if((0, n.noPropertyInData)(t2, a, r3, u.ownProperties), () => e2.error());
        });
      }
    } };
    t.default = i;
  }