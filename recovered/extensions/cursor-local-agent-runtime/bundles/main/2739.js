// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 2739 range:27666..30150
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2739: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    const n = r(95183), o = { keyword: "format", type: ["number", "string"], schemaType: "string", $data: true, error: { message: ({ schemaCode: e2 }) => n.str`must match format "${e2}"`, params: ({ schemaCode: e2 }) => n._`{format: ${e2}}` }, code(e2, t2) {
      const { gen: r2, data: o2, $data: s, schema: i, schemaCode: a, it: l } = e2, { opts: c, errSchemaPath: u, schemaEnv: d, self: p } = l;
      c.validateFormats && (s ? (function() {
        const s2 = r2.scopeValue("formats", { ref: p.formats, code: c.code.formats }), i2 = r2.const("fDef", n._`${s2}[${a}]`), l2 = r2.let("fType"), u2 = r2.let("format");
        r2.if(n._`typeof ${i2} == "object" && !(${i2} instanceof RegExp)`, () => r2.assign(l2, n._`${i2}.type || "string"`).assign(u2, n._`${i2}.validate`), () => r2.assign(l2, n._`"string"`).assign(u2, i2)), e2.fail$data((0, n.or)(false === c.strictSchema ? n.nil : n._`${a} && !${u2}`, (function() {
          const e3 = d.$async ? n._`(${i2}.async ? await ${u2}(${o2}) : ${u2}(${o2}))` : n._`${u2}(${o2})`, r3 = n._`(typeof ${u2} == "function" ? ${e3} : ${u2}.test(${o2}))`;
          return n._`${u2} && ${u2} !== true && ${l2} === ${t2} && !${r3}`;
        })()));
      })() : (function() {
        const s2 = p.formats[i];
        if (!s2) return void (function() {
          if (false === c.strictSchema) return void p.logger.warn(e3());
          throw new Error(e3());
          function e3() {
            return `unknown format "${i}" ignored in schema at path "${u}"`;
          }
        })();
        if (true === s2) return;
        const [a2, l2, h] = (function(e3) {
          const t3 = e3 instanceof RegExp ? (0, n.regexpCode)(e3) : c.code.formats ? n._`${c.code.formats}${(0, n.getProperty)(i)}` : void 0, o3 = r2.scopeValue("formats", { key: i, ref: e3, code: t3 });
          if ("object" == typeof e3 && !(e3 instanceof RegExp)) return [e3.type || "string", e3.validate, n._`${o3}.validate`];
          return ["string", e3, o3];
        })(s2);
        a2 === t2 && e2.pass((function() {
          if ("object" == typeof s2 && !(s2 instanceof RegExp) && s2.async) {
            if (!d.$async) throw new Error("async format in sync schema");
            return n._`await ${h}(${o2})`;
          }
          return "function" == typeof l2 ? n._`${h}(${o2})` : n._`${h}.test(${o2})`;
        })());
      })());
    } };
    t.default = o;
  }