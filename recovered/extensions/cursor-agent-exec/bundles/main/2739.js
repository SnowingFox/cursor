// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 2739 range:25432..27916
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2739: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), s = { keyword: "format", type: ["number", "string"], schemaType: "string", $data: true, error: { message: ({ schemaCode: e2 }) => n.str`must match format "${e2}"`, params: ({ schemaCode: e2 }) => n._`{format: ${e2}}` }, code(e2, t2) {
      const { gen: r2, data: s2, $data: o, schema: i, schemaCode: a, it: c } = e2, { opts: l, errSchemaPath: u, schemaEnv: d, self: p } = c;
      l.validateFormats && (o ? (function() {
        const o2 = r2.scopeValue("formats", { ref: p.formats, code: l.code.formats }), i2 = r2.const("fDef", n._`${o2}[${a}]`), c2 = r2.let("fType"), u2 = r2.let("format");
        r2.if(n._`typeof ${i2} == "object" && !(${i2} instanceof RegExp)`, () => r2.assign(c2, n._`${i2}.type || "string"`).assign(u2, n._`${i2}.validate`), () => r2.assign(c2, n._`"string"`).assign(u2, i2)), e2.fail$data((0, n.or)(false === l.strictSchema ? n.nil : n._`${a} && !${u2}`, (function() {
          const e3 = d.$async ? n._`(${i2}.async ? await ${u2}(${s2}) : ${u2}(${s2}))` : n._`${u2}(${s2})`, r3 = n._`(typeof ${u2} == "function" ? ${e3} : ${u2}.test(${s2}))`;
          return n._`${u2} && ${u2} !== true && ${c2} === ${t2} && !${r3}`;
        })()));
      })() : (function() {
        const o2 = p.formats[i];
        if (!o2) return void (function() {
          if (false === l.strictSchema) return void p.logger.warn(e3());
          throw new Error(e3());
          function e3() {
            return `unknown format "${i}" ignored in schema at path "${u}"`;
          }
        })();
        if (true === o2) return;
        const [a2, c2, m] = (function(e3) {
          const t3 = e3 instanceof RegExp ? (0, n.regexpCode)(e3) : l.code.formats ? n._`${l.code.formats}${(0, n.getProperty)(i)}` : void 0, s3 = r2.scopeValue("formats", { key: i, ref: e3, code: t3 });
          if ("object" == typeof e3 && !(e3 instanceof RegExp)) return [e3.type || "string", e3.validate, n._`${s3}.validate`];
          return ["string", e3, s3];
        })(o2);
        a2 === t2 && e2.pass((function() {
          if ("object" == typeof o2 && !(o2 instanceof RegExp) && o2.async) {
            if (!d.$async) throw new Error("async format in sync schema");
            return n._`await ${m}(${s2})`;
          }
          return "function" == typeof c2 ? n._`${m}(${s2})` : n._`${m}.test(${s2})`;
        })());
      })());
    } };
    t.default = s;
  }