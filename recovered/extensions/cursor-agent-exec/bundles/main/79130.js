// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 79130 range:10745104..10747064
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
79130: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.formatLimitDefinition = void 0;
    const n = r(97712), s = r(95183), o = s.operators, i = { formatMaximum: { okStr: "<=", ok: o.LTE, fail: o.GT }, formatMinimum: { okStr: ">=", ok: o.GTE, fail: o.LT }, formatExclusiveMaximum: { okStr: "<", ok: o.LT, fail: o.GTE }, formatExclusiveMinimum: { okStr: ">", ok: o.GT, fail: o.LTE } }, a = { message: ({ keyword: e2, schemaCode: t2 }) => s.str`should be ${i[e2].okStr} ${t2}`, params: ({ keyword: e2, schemaCode: t2 }) => s._`{comparison: ${i[e2].okStr}, limit: ${t2}}` };
    t.formatLimitDefinition = { keyword: Object.keys(i), type: "string", schemaType: "string", $data: true, error: a, code(e2) {
      const { gen: t2, data: r2, schemaCode: o2, keyword: a2, it: c } = e2, { opts: l, self: u } = c;
      if (!l.validateFormats) return;
      const d = new n.KeywordCxt(c, u.RULES.all.format.definition, "format");
      function p(e3) {
        return s._`${e3}.compare(${r2}, ${o2}) ${i[a2].fail} 0`;
      }
      d.$data ? (function() {
        const r3 = t2.scopeValue("formats", { ref: u.formats, code: l.code.formats }), n2 = t2.const("fmt", s._`${r3}[${d.schemaCode}]`);
        e2.fail$data((0, s.or)(s._`typeof ${n2} != "object"`, s._`${n2} instanceof RegExp`, s._`typeof ${n2}.compare != "function"`, p(n2)));
      })() : (function() {
        const r3 = d.schema, n2 = u.formats[r3];
        if (!n2 || true === n2) return;
        if ("object" != typeof n2 || n2 instanceof RegExp || "function" != typeof n2.compare) throw new Error(`"${a2}": format "${r3}" does not define "compare" function`);
        const o3 = t2.scopeValue("formats", { key: r3, ref: n2, code: l.code.formats ? s._`${l.code.formats}${(0, s.getProperty)(r3)}` : void 0 });
        e2.fail$data(p(o3));
      })();
    }, dependencies: ["format"] };
    t.default = (e2) => (e2.addKeyword(t.formatLimitDefinition), e2);
  }