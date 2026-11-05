// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 98018 range:15052670..15058420
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98018: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.reportTypeError = t.checkDataTypes = t.checkDataType = t.coerceAndCheckDataType = t.getJSONTypes = t.getSchemaTypes = t.DataType = void 0;
    const n = r(28758), s = r(12173), o = r(34006), i = r(95183), a = r(79657);
    var c;
    function l(e2) {
      const t2 = Array.isArray(e2) ? e2 : e2 ? [e2] : [];
      if (t2.every(n.isJSONType)) return t2;
      throw new Error("type must be JSONType or JSONType[]: " + t2.join(","));
    }
    !(function(e2) {
      e2[e2.Correct = 0] = "Correct", e2[e2.Wrong = 1] = "Wrong";
    })(c || (t.DataType = c = {})), t.getSchemaTypes = function(e2) {
      const t2 = l(e2.type);
      if (t2.includes("null")) {
        if (false === e2.nullable) throw new Error("type: null contradicts nullable: false");
      } else {
        if (!t2.length && void 0 !== e2.nullable) throw new Error('"nullable" cannot be used without "type"');
        true === e2.nullable && t2.push("null");
      }
      return t2;
    }, t.getJSONTypes = l, t.coerceAndCheckDataType = function(e2, t2) {
      const { gen: r2, data: n2, opts: o2 } = e2, a2 = (function(e3, t3) {
        return t3 ? e3.filter((e4) => u.has(e4) || "array" === t3 && "array" === e4) : [];
      })(t2, o2.coerceTypes), l2 = t2.length > 0 && !(0 === a2.length && 1 === t2.length && (0, s.schemaHasRulesForType)(e2, t2[0]));
      if (l2) {
        const s2 = p(t2, n2, o2.strictNumbers, c.Wrong);
        r2.if(s2, () => {
          a2.length ? (function(e3, t3, r3) {
            const { gen: n3, data: s3, opts: o3 } = e3, a3 = n3.let("dataType", i._`typeof ${s3}`), c2 = n3.let("coerced", i._`undefined`);
            "array" === o3.coerceTypes && n3.if(i._`${a3} == 'object' && Array.isArray(${s3}) && ${s3}.length == 1`, () => n3.assign(s3, i._`${s3}[0]`).assign(a3, i._`typeof ${s3}`).if(p(t3, s3, o3.strictNumbers), () => n3.assign(c2, s3)));
            n3.if(i._`${c2} !== undefined`);
            for (const e4 of r3) (u.has(e4) || "array" === e4 && "array" === o3.coerceTypes) && l3(e4);
            function l3(e4) {
              switch (e4) {
                case "string":
                  return void n3.elseIf(i._`${a3} == "number" || ${a3} == "boolean"`).assign(c2, i._`"" + ${s3}`).elseIf(i._`${s3} === null`).assign(c2, i._`""`);
                case "number":
                  return void n3.elseIf(i._`${a3} == "boolean" || ${s3} === null
              || (${a3} == "string" && ${s3} && ${s3} == +${s3})`).assign(c2, i._`+${s3}`);
                case "integer":
                  return void n3.elseIf(i._`${a3} === "boolean" || ${s3} === null
              || (${a3} === "string" && ${s3} && ${s3} == +${s3} && !(${s3} % 1))`).assign(c2, i._`+${s3}`);
                case "boolean":
                  return void n3.elseIf(i._`${s3} === "false" || ${s3} === 0 || ${s3} === null`).assign(c2, false).elseIf(i._`${s3} === "true" || ${s3} === 1`).assign(c2, true);
                case "null":
                  return n3.elseIf(i._`${s3} === "" || ${s3} === 0 || ${s3} === false`), void n3.assign(c2, null);
                case "array":
                  n3.elseIf(i._`${a3} === "string" || ${a3} === "number"
              || ${a3} === "boolean" || ${s3} === null`).assign(c2, i._`[${s3}]`);
              }
            }
            n3.else(), h(e3), n3.endIf(), n3.if(i._`${c2} !== undefined`, () => {
              n3.assign(s3, c2), (function({ gen: e4, parentData: t4, parentDataProperty: r4 }, n4) {
                e4.if(i._`${t4} !== undefined`, () => e4.assign(i._`${t4}[${r4}]`, n4));
              })(e3, c2);
            });
          })(e2, t2, a2) : h(e2);
        });
      }
      return l2;
    };
    const u = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
    function d(e2, t2, r2, n2 = c.Correct) {
      const s2 = n2 === c.Correct ? i.operators.EQ : i.operators.NEQ;
      let o2;
      switch (e2) {
        case "null":
          return i._`${t2} ${s2} null`;
        case "array":
          o2 = i._`Array.isArray(${t2})`;
          break;
        case "object":
          o2 = i._`${t2} && typeof ${t2} == "object" && !Array.isArray(${t2})`;
          break;
        case "integer":
          o2 = a2(i._`!(${t2} % 1) && !isNaN(${t2})`);
          break;
        case "number":
          o2 = a2();
          break;
        default:
          return i._`typeof ${t2} ${s2} ${e2}`;
      }
      return n2 === c.Correct ? o2 : (0, i.not)(o2);
      function a2(e3 = i.nil) {
        return (0, i.and)(i._`typeof ${t2} == "number"`, e3, r2 ? i._`isFinite(${t2})` : i.nil);
      }
    }
    function p(e2, t2, r2, n2) {
      if (1 === e2.length) return d(e2[0], t2, r2, n2);
      let s2;
      const o2 = (0, a.toHash)(e2);
      if (o2.array && o2.object) {
        const e3 = i._`typeof ${t2} != "object"`;
        s2 = o2.null ? e3 : i._`!${t2} || ${e3}`, delete o2.null, delete o2.array, delete o2.object;
      } else s2 = i.nil;
      o2.number && delete o2.integer;
      for (const e3 in o2) s2 = (0, i.and)(s2, d(e3, t2, r2, n2));
      return s2;
    }
    t.checkDataType = d, t.checkDataTypes = p;
    const m = { message: ({ schema: e2 }) => `must be ${e2}`, params: ({ schema: e2, schemaValue: t2 }) => "string" == typeof e2 ? i._`{type: ${e2}}` : i._`{type: ${t2}}` };
    function h(e2) {
      const t2 = (function(e3) {
        const { gen: t3, data: r2, schema: n2 } = e3, s2 = (0, a.schemaRefOrVal)(e3, n2, "type");
        return { gen: t3, keyword: "type", data: r2, schema: n2.type, schemaCode: s2, schemaValue: s2, parentSchema: n2, params: {}, it: e3 };
      })(e2);
      (0, o.reportError)(t2, m);
    }
    t.reportTypeError = h;
  }