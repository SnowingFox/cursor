// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 64627 range:1967103..1969006
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
64627: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(98018), o = r(95183), s = r(79657), i = r(79244), a = { keyword: "uniqueItems", type: "array", schemaType: "boolean", $data: true, error: { message: ({ params: { i: e2, j: t2 } }) => o.str`must NOT have duplicate items (items ## ${t2} and ${e2} are identical)`, params: ({ params: { i: e2, j: t2 } }) => o._`{i: ${e2}, j: ${t2}}` }, code(e2) {
      const { gen: t2, data: r2, $data: a2, schema: l, parentSchema: c, schemaCode: u, it: d } = e2;
      if (!a2 && !l) return;
      const p = t2.let("valid"), h = c.items ? (0, n.getSchemaTypes)(c.items) : [];
      function m(s2, i2) {
        const a3 = t2.name("item"), l2 = (0, n.checkDataTypes)(h, a3, d.opts.strictNumbers, n.DataType.Wrong), c2 = t2.const("indices", o._`{}`);
        t2.for(o._`;${s2}--;`, () => {
          t2.let(a3, o._`${r2}[${s2}]`), t2.if(l2, o._`continue`), h.length > 1 && t2.if(o._`typeof ${a3} == "string"`, o._`${a3} += "_"`), t2.if(o._`typeof ${c2}[${a3}] == "number"`, () => {
            t2.assign(i2, o._`${c2}[${a3}]`), e2.error(), t2.assign(p, false).break();
          }).code(o._`${c2}[${a3}] = ${s2}`);
        });
      }
      function f(n2, a3) {
        const l2 = (0, s.useFunc)(t2, i.default), c2 = t2.name("outer");
        t2.label(c2).for(o._`;${n2}--;`, () => t2.for(o._`${a3} = ${n2}; ${a3}--;`, () => t2.if(o._`${l2}(${r2}[${n2}], ${r2}[${a3}])`, () => {
          e2.error(), t2.assign(p, false).break(c2);
        })));
      }
      e2.block$data(p, function() {
        const n2 = t2.let("i", o._`${r2}.length`), s2 = t2.let("j");
        e2.setParams({ i: n2, j: s2 }), t2.assign(p, true), t2.if(o._`${n2} > 1`, () => (h.length > 0 && !h.some((e3) => "object" === e3 || "array" === e3) ? m : f)(n2, s2));
      }, o._`${u} === false`), e2.ok(p);
    } };
    t.default = a;
  }