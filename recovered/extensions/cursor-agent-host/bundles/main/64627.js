// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 64627 range:10319655..10321558
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
64627: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(98018), s = r(95183), o = r(79657), i = r(79244), a = { keyword: "uniqueItems", type: "array", schemaType: "boolean", $data: true, error: { message: ({ params: { i: e2, j: t2 } }) => s.str`must NOT have duplicate items (items ## ${t2} and ${e2} are identical)`, params: ({ params: { i: e2, j: t2 } }) => s._`{i: ${e2}, j: ${t2}}` }, code(e2) {
      const { gen: t2, data: r2, $data: a2, schema: c, parentSchema: l, schemaCode: u, it: d } = e2;
      if (!a2 && !c) return;
      const p = t2.let("valid"), m = l.items ? (0, n.getSchemaTypes)(l.items) : [];
      function h(o2, i2) {
        const a3 = t2.name("item"), c2 = (0, n.checkDataTypes)(m, a3, d.opts.strictNumbers, n.DataType.Wrong), l2 = t2.const("indices", s._`{}`);
        t2.for(s._`;${o2}--;`, () => {
          t2.let(a3, s._`${r2}[${o2}]`), t2.if(c2, s._`continue`), m.length > 1 && t2.if(s._`typeof ${a3} == "string"`, s._`${a3} += "_"`), t2.if(s._`typeof ${l2}[${a3}] == "number"`, () => {
            t2.assign(i2, s._`${l2}[${a3}]`), e2.error(), t2.assign(p, false).break();
          }).code(s._`${l2}[${a3}] = ${o2}`);
        });
      }
      function f(n2, a3) {
        const c2 = (0, o.useFunc)(t2, i.default), l2 = t2.name("outer");
        t2.label(l2).for(s._`;${n2}--;`, () => t2.for(s._`${a3} = ${n2}; ${a3}--;`, () => t2.if(s._`${c2}(${r2}[${n2}], ${r2}[${a3}])`, () => {
          e2.error(), t2.assign(p, false).break(l2);
        })));
      }
      e2.block$data(p, function() {
        const n2 = t2.let("i", s._`${r2}.length`), o2 = t2.let("j");
        e2.setParams({ i: n2, j: o2 }), t2.assign(p, true), t2.if(s._`${n2} > 1`, () => (m.length > 0 && !m.some((e3) => "object" === e3 || "array" === e3) ? h : f)(n2, o2));
      }, s._`${u} === false`), e2.ok(p);
    } };
    t.default = a;
  }