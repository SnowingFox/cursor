// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 79130 range:7350116..7352076
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
79130: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.formatLimitDefinition = void 0;
    const n = r(97712), o = r(95183), s = o.operators, i = { formatMaximum: { okStr: "<=", ok: s.LTE, fail: s.GT }, formatMinimum: { okStr: ">=", ok: s.GTE, fail: s.LT }, formatExclusiveMaximum: { okStr: "<", ok: s.LT, fail: s.GTE }, formatExclusiveMinimum: { okStr: ">", ok: s.GT, fail: s.LTE } }, a = { message: ({ keyword: e2, schemaCode: t2 }) => o.str`should be ${i[e2].okStr} ${t2}`, params: ({ keyword: e2, schemaCode: t2 }) => o._`{comparison: ${i[e2].okStr}, limit: ${t2}}` };
    t.formatLimitDefinition = { keyword: Object.keys(i), type: "string", schemaType: "string", $data: true, error: a, code(e2) {
      const { gen: t2, data: r2, schemaCode: s2, keyword: a2, it: l } = e2, { opts: c, self: u } = l;
      if (!c.validateFormats) return;
      const d = new n.KeywordCxt(l, u.RULES.all.format.definition, "format");
      function p(e3) {
        return o._`${e3}.compare(${r2}, ${s2}) ${i[a2].fail} 0`;
      }
      d.$data ? (function() {
        const r3 = t2.scopeValue("formats", { ref: u.formats, code: c.code.formats }), n2 = t2.const("fmt", o._`${r3}[${d.schemaCode}]`);
        e2.fail$data((0, o.or)(o._`typeof ${n2} != "object"`, o._`${n2} instanceof RegExp`, o._`typeof ${n2}.compare != "function"`, p(n2)));
      })() : (function() {
        const r3 = d.schema, n2 = u.formats[r3];
        if (!n2 || true === n2) return;
        if ("object" != typeof n2 || n2 instanceof RegExp || "function" != typeof n2.compare) throw new Error(`"${a2}": format "${r3}" does not define "compare" function`);
        const s3 = t2.scopeValue("formats", { key: r3, ref: n2, code: c.code.formats ? o._`${c.code.formats}${(0, o.getProperty)(r3)}` : void 0 });
        e2.fail$data(p(s3));
      })();
    }, dependencies: ["format"] };
    t.default = (e2) => (e2.addKeyword(t.formatLimitDefinition), e2);
  }