// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9130 range:877059..879056
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9130: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.formatLimitDefinition = void 0;
    const n2 = r2(7712), o2 = r2(5183), s2 = o2.operators, i2 = { formatMaximum: { okStr: "<=", ok: s2.LTE, fail: s2.GT }, formatMinimum: { okStr: ">=", ok: s2.GTE, fail: s2.LT }, formatExclusiveMaximum: { okStr: "<", ok: s2.LT, fail: s2.GTE }, formatExclusiveMinimum: { okStr: ">", ok: s2.GT, fail: s2.LTE } }, a2 = { message: ({ keyword: e3, schemaCode: t3 }) => o2.str`should be ${i2[e3].okStr} ${t3}`, params: ({ keyword: e3, schemaCode: t3 }) => o2._`{comparison: ${i2[e3].okStr}, limit: ${t3}}` };
    t2.formatLimitDefinition = { keyword: Object.keys(i2), type: "string", schemaType: "string", $data: true, error: a2, code(e3) {
      const { gen: t3, data: r3, schemaCode: s3, keyword: a3, it: c } = e3, { opts: u, self: l } = c;
      if (!u.validateFormats) return;
      const d = new n2.KeywordCxt(c, l.RULES.all.format.definition, "format");
      function p(e4) {
        return o2._`${e4}.compare(${r3}, ${s3}) ${i2[a3].fail} 0`;
      }
      d.$data ? (function() {
        const r4 = t3.scopeValue("formats", { ref: l.formats, code: u.code.formats }), n3 = t3.const("fmt", o2._`${r4}[${d.schemaCode}]`);
        e3.fail$data((0, o2.or)(o2._`typeof ${n3} != "object"`, o2._`${n3} instanceof RegExp`, o2._`typeof ${n3}.compare != "function"`, p(n3)));
      })() : (function() {
        const r4 = d.schema, n3 = l.formats[r4];
        if (!n3 || true === n3) return;
        if ("object" != typeof n3 || n3 instanceof RegExp || "function" != typeof n3.compare) throw new Error(`"${a3}": format "${r4}" does not define "compare" function`);
        const s4 = t3.scopeValue("formats", { key: r4, ref: n3, code: u.code.formats ? o2._`${u.code.formats}${(0, o2.getProperty)(r4)}` : void 0 });
        e3.fail$data(p(s4));
      })();
    }, dependencies: ["format"] };
    t2.default = (e3) => (e3.addKeyword(t2.formatLimitDefinition), e3);
  }