// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 98018 range:7911396..7917146
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98018: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.reportTypeError = t.checkDataTypes = t.checkDataType = t.coerceAndCheckDataType = t.getJSONTypes = t.getSchemaTypes = t.DataType = void 0;
    const n = r(28758), o = r(12173), s = r(34006), i = r(95183), a = r(79657);
    var l;
    function c(e2) {
      const t2 = Array.isArray(e2) ? e2 : e2 ? [e2] : [];
      if (t2.every(n.isJSONType)) return t2;
      throw new Error("type must be JSONType or JSONType[]: " + t2.join(","));
    }
    !(function(e2) {
      e2[e2.Correct = 0] = "Correct", e2[e2.Wrong = 1] = "Wrong";
    })(l || (t.DataType = l = {})), t.getSchemaTypes = function(e2) {
      const t2 = c(e2.type);
      if (t2.includes("null")) {
        if (false === e2.nullable) throw new Error("type: null contradicts nullable: false");
      } else {
        if (!t2.length && void 0 !== e2.nullable) throw new Error('"nullable" cannot be used without "type"');
        true === e2.nullable && t2.push("null");
      }
      return t2;
    }, t.getJSONTypes = c, t.coerceAndCheckDataType = function(e2, t2) {
      const { gen: r2, data: n2, opts: s2 } = e2, a2 = (function(e3, t3) {
        return t3 ? e3.filter((e4) => u.has(e4) || "array" === t3 && "array" === e4) : [];
      })(t2, s2.coerceTypes), c2 = t2.length > 0 && !(0 === a2.length && 1 === t2.length && (0, o.schemaHasRulesForType)(e2, t2[0]));
      if (c2) {
        const o2 = p(t2, n2, s2.strictNumbers, l.Wrong);
        r2.if(o2, () => {
          a2.length ? (function(e3, t3, r3) {
            const { gen: n3, data: o3, opts: s3 } = e3, a3 = n3.let("dataType", i._`typeof ${o3}`), l2 = n3.let("coerced", i._`undefined`);
            "array" === s3.coerceTypes && n3.if(i._`${a3} == 'object' && Array.isArray(${o3}) && ${o3}.length == 1`, () => n3.assign(o3, i._`${o3}[0]`).assign(a3, i._`typeof ${o3}`).if(p(t3, o3, s3.strictNumbers), () => n3.assign(l2, o3)));
            n3.if(i._`${l2} !== undefined`);
            for (const e4 of r3) (u.has(e4) || "array" === e4 && "array" === s3.coerceTypes) && c3(e4);
            function c3(e4) {
              switch (e4) {
                case "string":
                  return void n3.elseIf(i._`${a3} == "number" || ${a3} == "boolean"`).assign(l2, i._`"" + ${o3}`).elseIf(i._`${o3} === null`).assign(l2, i._`""`);
                case "number":
                  return void n3.elseIf(i._`${a3} == "boolean" || ${o3} === null
              || (${a3} == "string" && ${o3} && ${o3} == +${o3})`).assign(l2, i._`+${o3}`);
                case "integer":
                  return void n3.elseIf(i._`${a3} === "boolean" || ${o3} === null
              || (${a3} === "string" && ${o3} && ${o3} == +${o3} && !(${o3} % 1))`).assign(l2, i._`+${o3}`);
                case "boolean":
                  return void n3.elseIf(i._`${o3} === "false" || ${o3} === 0 || ${o3} === null`).assign(l2, false).elseIf(i._`${o3} === "true" || ${o3} === 1`).assign(l2, true);
                case "null":
                  return n3.elseIf(i._`${o3} === "" || ${o3} === 0 || ${o3} === false`), void n3.assign(l2, null);
                case "array":
                  n3.elseIf(i._`${a3} === "string" || ${a3} === "number"
              || ${a3} === "boolean" || ${o3} === null`).assign(l2, i._`[${o3}]`);
              }
            }
            n3.else(), m(e3), n3.endIf(), n3.if(i._`${l2} !== undefined`, () => {
              n3.assign(o3, l2), (function({ gen: e4, parentData: t4, parentDataProperty: r4 }, n4) {
                e4.if(i._`${t4} !== undefined`, () => e4.assign(i._`${t4}[${r4}]`, n4));
              })(e3, l2);
            });
          })(e2, t2, a2) : m(e2);
        });
      }
      return c2;
    };
    const u = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
    function d(e2, t2, r2, n2 = l.Correct) {
      const o2 = n2 === l.Correct ? i.operators.EQ : i.operators.NEQ;
      let s2;
      switch (e2) {
        case "null":
          return i._`${t2} ${o2} null`;
        case "array":
          s2 = i._`Array.isArray(${t2})`;
          break;
        case "object":
          s2 = i._`${t2} && typeof ${t2} == "object" && !Array.isArray(${t2})`;
          break;
        case "integer":
          s2 = a2(i._`!(${t2} % 1) && !isNaN(${t2})`);
          break;
        case "number":
          s2 = a2();
          break;
        default:
          return i._`typeof ${t2} ${o2} ${e2}`;
      }
      return n2 === l.Correct ? s2 : (0, i.not)(s2);
      function a2(e3 = i.nil) {
        return (0, i.and)(i._`typeof ${t2} == "number"`, e3, r2 ? i._`isFinite(${t2})` : i.nil);
      }
    }
    function p(e2, t2, r2, n2) {
      if (1 === e2.length) return d(e2[0], t2, r2, n2);
      let o2;
      const s2 = (0, a.toHash)(e2);
      if (s2.array && s2.object) {
        const e3 = i._`typeof ${t2} != "object"`;
        o2 = s2.null ? e3 : i._`!${t2} || ${e3}`, delete s2.null, delete s2.array, delete s2.object;
      } else o2 = i.nil;
      s2.number && delete s2.integer;
      for (const e3 in s2) o2 = (0, i.and)(o2, d(e3, t2, r2, n2));
      return o2;
    }
    t.checkDataType = d, t.checkDataTypes = p;
    const h = { message: ({ schema: e2 }) => `must be ${e2}`, params: ({ schema: e2, schemaValue: t2 }) => "string" == typeof e2 ? i._`{type: ${e2}}` : i._`{type: ${t2}}` };
    function m(e2) {
      const t2 = (function(e3) {
        const { gen: t3, data: r2, schema: n2 } = e3, o2 = (0, a.schemaRefOrVal)(e3, n2, "type");
        return { gen: t3, keyword: "type", data: r2, schema: n2.type, schemaCode: o2, schemaValue: o2, parentSchema: n2, params: {}, it: e3 };
      })(e2);
      (0, s.reportError)(t2, h);
    }
    t.reportTypeError = m;
  }