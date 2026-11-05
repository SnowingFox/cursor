// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8241 range:756167..758203
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8241: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(8255), o2 = r2(5183), s2 = r2(9657), i2 = { keyword: "required", type: "object", schemaType: "array", $data: true, error: { message: ({ params: { missingProperty: e3 } }) => o2.str`must have required property '${e3}'`, params: ({ params: { missingProperty: e3 } }) => o2._`{missingProperty: ${e3}}` }, code(e3) {
      const { gen: t3, schema: r3, schemaCode: i3, data: a2, $data: c, it: u } = e3, { opts: l } = u;
      if (!c && 0 === r3.length) return;
      const d = r3.length >= l.loopRequired;
      if (u.allErrors ? (function() {
        if (d || c) e3.block$data(o2.nil, p);
        else for (const t4 of r3) (0, n2.checkReportMissingProp)(e3, t4);
      })() : (function() {
        const s3 = t3.let("missing");
        if (d || c) {
          const r4 = t3.let("valid", true);
          e3.block$data(r4, () => (function(r5, s4) {
            e3.setParams({ missingProperty: r5 }), t3.forOf(r5, i3, () => {
              t3.assign(s4, (0, n2.propertyInData)(t3, a2, r5, l.ownProperties)), t3.if((0, o2.not)(s4), () => {
                e3.error(), t3.break();
              });
            }, o2.nil);
          })(s3, r4)), e3.ok(r4);
        } else t3.if((0, n2.checkMissingProp)(e3, r3, s3)), (0, n2.reportMissingProp)(e3, s3), t3.else();
      })(), l.strictRequired) {
        const t4 = e3.parentSchema.properties, { definedProperties: n3 } = e3.it;
        for (const e4 of r3) if (void 0 === (null == t4 ? void 0 : t4[e4]) && !n3.has(e4)) {
          const t5 = `required property "${e4}" is not defined at "${u.schemaEnv.baseId + u.errSchemaPath}" (strictRequired)`;
          (0, s2.checkStrictMode)(u, t5, u.opts.strictRequired);
        }
      }
      function p() {
        t3.forOf("prop", i3, (r4) => {
          e3.setParams({ missingProperty: r4 }), t3.if((0, n2.noPropertyInData)(t3, a2, r4, l.ownProperties), () => e3.error());
        });
      }
    } };
    t2.default = i2;
  }