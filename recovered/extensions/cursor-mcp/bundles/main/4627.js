// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4627 range:318282..320217
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4627: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(8018), o2 = r2(5183), s2 = r2(9657), i2 = r2(9244), a2 = { keyword: "uniqueItems", type: "array", schemaType: "boolean", $data: true, error: { message: ({ params: { i: e3, j: t3 } }) => o2.str`must NOT have duplicate items (items ## ${t3} and ${e3} are identical)`, params: ({ params: { i: e3, j: t3 } }) => o2._`{i: ${e3}, j: ${t3}}` }, code(e3) {
      const { gen: t3, data: r3, $data: a3, schema: c, parentSchema: u, schemaCode: l, it: d } = e3;
      if (!a3 && !c) return;
      const p = t3.let("valid"), f = u.items ? (0, n2.getSchemaTypes)(u.items) : [];
      function h(s3, i3) {
        const a4 = t3.name("item"), c2 = (0, n2.checkDataTypes)(f, a4, d.opts.strictNumbers, n2.DataType.Wrong), u2 = t3.const("indices", o2._`{}`);
        t3.for(o2._`;${s3}--;`, () => {
          t3.let(a4, o2._`${r3}[${s3}]`), t3.if(c2, o2._`continue`), f.length > 1 && t3.if(o2._`typeof ${a4} == "string"`, o2._`${a4} += "_"`), t3.if(o2._`typeof ${u2}[${a4}] == "number"`, () => {
            t3.assign(i3, o2._`${u2}[${a4}]`), e3.error(), t3.assign(p, false).break();
          }).code(o2._`${u2}[${a4}] = ${s3}`);
        });
      }
      function m(n3, a4) {
        const c2 = (0, s2.useFunc)(t3, i2.default), u2 = t3.name("outer");
        t3.label(u2).for(o2._`;${n3}--;`, () => t3.for(o2._`${a4} = ${n3}; ${a4}--;`, () => t3.if(o2._`${c2}(${r3}[${n3}], ${r3}[${a4}])`, () => {
          e3.error(), t3.assign(p, false).break(u2);
        })));
      }
      e3.block$data(p, function() {
        const n3 = t3.let("i", o2._`${r3}.length`), s3 = t3.let("j");
        e3.setParams({ i: n3, j: s3 }), t3.assign(p, true), t3.if(o2._`${n3} > 1`, () => (f.length > 0 && !f.some((e4) => "object" === e4 || "array" === e4) ? h : m)(n3, s3));
      }, o2._`${l} === false`), e3.ok(p);
    } };
    t2.default = a2;
  }