// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8018 range:732067..737885
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8018: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.reportTypeError = t2.checkDataTypes = t2.checkDataType = t2.coerceAndCheckDataType = t2.getJSONTypes = t2.getSchemaTypes = t2.DataType = void 0;
    const n2 = r2(8758), o2 = r2(2173), s2 = r2(4006), i2 = r2(5183), a2 = r2(9657);
    var c;
    function u(e3) {
      const t3 = Array.isArray(e3) ? e3 : e3 ? [e3] : [];
      if (t3.every(n2.isJSONType)) return t3;
      throw new Error("type must be JSONType or JSONType[]: " + t3.join(","));
    }
    !(function(e3) {
      e3[e3.Correct = 0] = "Correct", e3[e3.Wrong = 1] = "Wrong";
    })(c || (t2.DataType = c = {})), t2.getSchemaTypes = function(e3) {
      const t3 = u(e3.type);
      if (t3.includes("null")) {
        if (false === e3.nullable) throw new Error("type: null contradicts nullable: false");
      } else {
        if (!t3.length && void 0 !== e3.nullable) throw new Error('"nullable" cannot be used without "type"');
        true === e3.nullable && t3.push("null");
      }
      return t3;
    }, t2.getJSONTypes = u, t2.coerceAndCheckDataType = function(e3, t3) {
      const { gen: r3, data: n3, opts: s3 } = e3, a3 = (function(e4, t4) {
        return t4 ? e4.filter((e5) => l.has(e5) || "array" === t4 && "array" === e5) : [];
      })(t3, s3.coerceTypes), u2 = t3.length > 0 && !(0 === a3.length && 1 === t3.length && (0, o2.schemaHasRulesForType)(e3, t3[0]));
      if (u2) {
        const o3 = p(t3, n3, s3.strictNumbers, c.Wrong);
        r3.if(o3, () => {
          a3.length ? (function(e4, t4, r4) {
            const { gen: n4, data: o4, opts: s4 } = e4, a4 = n4.let("dataType", i2._`typeof ${o4}`), c2 = n4.let("coerced", i2._`undefined`);
            "array" === s4.coerceTypes && n4.if(i2._`${a4} == 'object' && Array.isArray(${o4}) && ${o4}.length == 1`, () => n4.assign(o4, i2._`${o4}[0]`).assign(a4, i2._`typeof ${o4}`).if(p(t4, o4, s4.strictNumbers), () => n4.assign(c2, o4)));
            n4.if(i2._`${c2} !== undefined`);
            for (const e5 of r4) (l.has(e5) || "array" === e5 && "array" === s4.coerceTypes) && u3(e5);
            function u3(e5) {
              switch (e5) {
                case "string":
                  return void n4.elseIf(i2._`${a4} == "number" || ${a4} == "boolean"`).assign(c2, i2._`"" + ${o4}`).elseIf(i2._`${o4} === null`).assign(c2, i2._`""`);
                case "number":
                  return void n4.elseIf(i2._`${a4} == "boolean" || ${o4} === null
              || (${a4} == "string" && ${o4} && ${o4} == +${o4})`).assign(c2, i2._`+${o4}`);
                case "integer":
                  return void n4.elseIf(i2._`${a4} === "boolean" || ${o4} === null
              || (${a4} === "string" && ${o4} && ${o4} == +${o4} && !(${o4} % 1))`).assign(c2, i2._`+${o4}`);
                case "boolean":
                  return void n4.elseIf(i2._`${o4} === "false" || ${o4} === 0 || ${o4} === null`).assign(c2, false).elseIf(i2._`${o4} === "true" || ${o4} === 1`).assign(c2, true);
                case "null":
                  return n4.elseIf(i2._`${o4} === "" || ${o4} === 0 || ${o4} === false`), void n4.assign(c2, null);
                case "array":
                  n4.elseIf(i2._`${a4} === "string" || ${a4} === "number"
              || ${a4} === "boolean" || ${o4} === null`).assign(c2, i2._`[${o4}]`);
              }
            }
            n4.else(), h(e4), n4.endIf(), n4.if(i2._`${c2} !== undefined`, () => {
              n4.assign(o4, c2), (function({ gen: e5, parentData: t5, parentDataProperty: r5 }, n5) {
                e5.if(i2._`${t5} !== undefined`, () => e5.assign(i2._`${t5}[${r5}]`, n5));
              })(e4, c2);
            });
          })(e3, t3, a3) : h(e3);
        });
      }
      return u2;
    };
    const l = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
    function d(e3, t3, r3, n3 = c.Correct) {
      const o3 = n3 === c.Correct ? i2.operators.EQ : i2.operators.NEQ;
      let s3;
      switch (e3) {
        case "null":
          return i2._`${t3} ${o3} null`;
        case "array":
          s3 = i2._`Array.isArray(${t3})`;
          break;
        case "object":
          s3 = i2._`${t3} && typeof ${t3} == "object" && !Array.isArray(${t3})`;
          break;
        case "integer":
          s3 = a3(i2._`!(${t3} % 1) && !isNaN(${t3})`);
          break;
        case "number":
          s3 = a3();
          break;
        default:
          return i2._`typeof ${t3} ${o3} ${e3}`;
      }
      return n3 === c.Correct ? s3 : (0, i2.not)(s3);
      function a3(e4 = i2.nil) {
        return (0, i2.and)(i2._`typeof ${t3} == "number"`, e4, r3 ? i2._`isFinite(${t3})` : i2.nil);
      }
    }
    function p(e3, t3, r3, n3) {
      if (1 === e3.length) return d(e3[0], t3, r3, n3);
      let o3;
      const s3 = (0, a2.toHash)(e3);
      if (s3.array && s3.object) {
        const e4 = i2._`typeof ${t3} != "object"`;
        o3 = s3.null ? e4 : i2._`!${t3} || ${e4}`, delete s3.null, delete s3.array, delete s3.object;
      } else o3 = i2.nil;
      s3.number && delete s3.integer;
      for (const e4 in s3) o3 = (0, i2.and)(o3, d(e4, t3, r3, n3));
      return o3;
    }
    t2.checkDataType = d, t2.checkDataTypes = p;
    const f = { message: ({ schema: e3 }) => `must be ${e3}`, params: ({ schema: e3, schemaValue: t3 }) => "string" == typeof e3 ? i2._`{type: ${e3}}` : i2._`{type: ${t3}}` };
    function h(e3) {
      const t3 = (function(e4) {
        const { gen: t4, data: r3, schema: n3 } = e4, o3 = (0, a2.schemaRefOrVal)(e4, n3, "type");
        return { gen: t4, keyword: "type", data: r3, schema: n3.type, schemaCode: o3, schemaValue: o3, parentSchema: n3, params: {}, it: e4 };
      })(e3);
      (0, s2.reportError)(t3, f);
    }
    t2.reportTypeError = h;
  }