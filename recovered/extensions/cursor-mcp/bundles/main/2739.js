// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 2739 range:221277..223800
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2739: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = r2(5183), o2 = { keyword: "format", type: ["number", "string"], schemaType: "string", $data: true, error: { message: ({ schemaCode: e3 }) => n2.str`must match format "${e3}"`, params: ({ schemaCode: e3 }) => n2._`{format: ${e3}}` }, code(e3, t3) {
      const { gen: r3, data: o3, $data: s2, schema: i2, schemaCode: a2, it: c } = e3, { opts: u, errSchemaPath: l, schemaEnv: d, self: p } = c;
      u.validateFormats && (s2 ? (function() {
        const s3 = r3.scopeValue("formats", { ref: p.formats, code: u.code.formats }), i3 = r3.const("fDef", n2._`${s3}[${a2}]`), c2 = r3.let("fType"), l2 = r3.let("format");
        r3.if(n2._`typeof ${i3} == "object" && !(${i3} instanceof RegExp)`, () => r3.assign(c2, n2._`${i3}.type || "string"`).assign(l2, n2._`${i3}.validate`), () => r3.assign(c2, n2._`"string"`).assign(l2, i3)), e3.fail$data((0, n2.or)(false === u.strictSchema ? n2.nil : n2._`${a2} && !${l2}`, (function() {
          const e4 = d.$async ? n2._`(${i3}.async ? await ${l2}(${o3}) : ${l2}(${o3}))` : n2._`${l2}(${o3})`, r4 = n2._`(typeof ${l2} == "function" ? ${e4} : ${l2}.test(${o3}))`;
          return n2._`${l2} && ${l2} !== true && ${c2} === ${t3} && !${r4}`;
        })()));
      })() : (function() {
        const s3 = p.formats[i2];
        if (!s3) return void (function() {
          if (false === u.strictSchema) return void p.logger.warn(e4());
          throw new Error(e4());
          function e4() {
            return `unknown format "${i2}" ignored in schema at path "${l}"`;
          }
        })();
        if (true === s3) return;
        const [a3, c2, f] = (function(e4) {
          const t4 = e4 instanceof RegExp ? (0, n2.regexpCode)(e4) : u.code.formats ? n2._`${u.code.formats}${(0, n2.getProperty)(i2)}` : void 0, o4 = r3.scopeValue("formats", { key: i2, ref: e4, code: t4 });
          if ("object" == typeof e4 && !(e4 instanceof RegExp)) return [e4.type || "string", e4.validate, n2._`${o4}.validate`];
          return ["string", e4, o4];
        })(s3);
        a3 === t3 && e3.pass((function() {
          if ("object" == typeof s3 && !(s3 instanceof RegExp) && s3.async) {
            if (!d.$async) throw new Error("async format in sync schema");
            return n2._`await ${f}(${o3})`;
          }
          return "function" == typeof c2 ? n2._`${f}(${o3})` : n2._`${f}.test(${o3})`;
        })());
      })());
    } };
    t2.default = o2;
  }