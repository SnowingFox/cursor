// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 98483 range:11687696..11715062
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98483: (e, t, r) => {
    "use strict";
    r.d(t, { Ay: () => L, Ik: () => U });
    const n = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use"), s = { name: void 0, $refStrategy: "root", basePath: ["#"], effectStrategy: "input", pipeStrategy: "all", dateStrategy: "format:date-time", mapStrategy: "entries", removeAdditionalStrategy: "passthrough", allowedAdditionalProperties: true, rejectedAdditionalProperties: false, definitionPath: "definitions", target: "jsonSchema7", strictUnions: false, definitions: {}, errorMessages: false, markdownDescription: false, patternStrategy: "escape", applyRegexFlags: false, emailStrategy: "format:email", base64Strategy: "contentEncoding:base64", nameStrategy: "ref" }, o = (e2) => {
      const t2 = ((e3) => "string" == typeof e3 ? { ...s, name: e3 } : { ...s, ...e3 })(e2), r2 = void 0 !== t2.name ? [...t2.basePath, t2.definitionPath, t2.name] : t2.basePath;
      return { ...t2, currentPath: r2, propertyPath: void 0, seen: new Map(Object.entries(t2.definitions).map(([e3, r3]) => [r3._def, { def: r3._def, path: [...t2.basePath, t2.definitionPath, e3], jsonSchema: void 0 }])) };
    };
    var i = r(81958);
    function a(e2, t2, r2, n2) {
      n2?.errorMessages && r2 && (e2.errorMessage = { ...e2.errorMessage, [t2]: r2 });
    }
    function c(e2, t2, r2, n2, s2) {
      e2[t2] = r2, a(e2, t2, n2, s2);
    }
    function l(e2, t2) {
      return D(e2.type._def, t2);
    }
    function u(e2, t2, r2) {
      const n2 = r2 ?? t2.dateStrategy;
      if (Array.isArray(n2)) return { anyOf: n2.map((r3, n3) => u(e2, t2, r3)) };
      switch (n2) {
        case "string":
        case "format:date-time":
          return { type: "string", format: "date-time" };
        case "format:date":
          return { type: "string", format: "date" };
        case "integer":
          return d(e2, t2);
      }
    }
    const d = (e2, t2) => {
      const r2 = { type: "integer", format: "unix-time" };
      if ("openApi3" === t2.target) return r2;
      for (const n2 of e2.checks) switch (n2.kind) {
        case "min":
          c(r2, "minimum", n2.value, n2.message, t2);
          break;
        case "max":
          c(r2, "maximum", n2.value, n2.message, t2);
      }
      return r2;
    };
    let p;
    const m = /^[cC][^\s-]{8,}$/, h = /^[0-9a-z]+$/, f = /^[0-9A-HJKMNP-TV-Z]{26}$/, g = /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/, y = () => (void 0 === p && (p = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), p), w = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, v = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, _ = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, b = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, S = /^[a-zA-Z0-9_-]{21}$/, k = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    function x(e2, t2) {
      const r2 = { type: "string" };
      if (e2.checks) for (const n2 of e2.checks) switch (n2.kind) {
        case "min":
          c(r2, "minLength", "number" == typeof r2.minLength ? Math.max(r2.minLength, n2.value) : n2.value, n2.message, t2);
          break;
        case "max":
          c(r2, "maxLength", "number" == typeof r2.maxLength ? Math.min(r2.maxLength, n2.value) : n2.value, n2.message, t2);
          break;
        case "email":
          switch (t2.emailStrategy) {
            case "format:email":
              T(r2, "email", n2.message, t2);
              break;
            case "format:idn-email":
              T(r2, "idn-email", n2.message, t2);
              break;
            case "pattern:zod":
              C(r2, g, n2.message, t2);
          }
          break;
        case "url":
          T(r2, "uri", n2.message, t2);
          break;
        case "uuid":
          T(r2, "uuid", n2.message, t2);
          break;
        case "regex":
          C(r2, n2.regex, n2.message, t2);
          break;
        case "cuid":
          C(r2, m, n2.message, t2);
          break;
        case "cuid2":
          C(r2, h, n2.message, t2);
          break;
        case "startsWith":
          C(r2, RegExp(`^${E(n2.value, t2)}`), n2.message, t2);
          break;
        case "endsWith":
          C(r2, RegExp(`${E(n2.value, t2)}$`), n2.message, t2);
          break;
        case "datetime":
          T(r2, "date-time", n2.message, t2);
          break;
        case "date":
          T(r2, "date", n2.message, t2);
          break;
        case "time":
          T(r2, "time", n2.message, t2);
          break;
        case "duration":
          T(r2, "duration", n2.message, t2);
          break;
        case "length":
          c(r2, "minLength", "number" == typeof r2.minLength ? Math.max(r2.minLength, n2.value) : n2.value, n2.message, t2), c(r2, "maxLength", "number" == typeof r2.maxLength ? Math.min(r2.maxLength, n2.value) : n2.value, n2.message, t2);
          break;
        case "includes":
          C(r2, RegExp(E(n2.value, t2)), n2.message, t2);
          break;
        case "ip":
          "v6" !== n2.version && T(r2, "ipv4", n2.message, t2), "v4" !== n2.version && T(r2, "ipv6", n2.message, t2);
          break;
        case "base64url":
          C(r2, b, n2.message, t2);
          break;
        case "jwt":
          C(r2, k, n2.message, t2);
          break;
        case "cidr":
          "v6" !== n2.version && C(r2, w, n2.message, t2), "v4" !== n2.version && C(r2, v, n2.message, t2);
          break;
        case "emoji":
          C(r2, y(), n2.message, t2);
          break;
        case "ulid":
          C(r2, f, n2.message, t2);
          break;
        case "base64":
          switch (t2.base64Strategy) {
            case "format:binary":
              T(r2, "binary", n2.message, t2);
              break;
            case "contentEncoding:base64":
              c(r2, "contentEncoding", "base64", n2.message, t2);
              break;
            case "pattern:zod":
              C(r2, _, n2.message, t2);
          }
          break;
        case "nanoid":
          C(r2, S, n2.message, t2);
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
          /* @__PURE__ */ (() => {
          })();
      }
      return r2;
    }
    function E(e2, t2) {
      return "escape" === t2.patternStrategy ? (function(e3) {
        let t3 = "";
        for (let r2 = 0; r2 < e3.length; r2++) I.has(e3[r2]) || (t3 += "\\"), t3 += e3[r2];
        return t3;
      })(e2) : e2;
    }
    const I = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
    function T(e2, t2, r2, n2) {
      e2.format || e2.anyOf?.some((e3) => e3.format) ? (e2.anyOf || (e2.anyOf = []), e2.format && (e2.anyOf.push({ format: e2.format, ...e2.errorMessage && n2.errorMessages && { errorMessage: { format: e2.errorMessage.format } } }), delete e2.format, e2.errorMessage && (delete e2.errorMessage.format, 0 === Object.keys(e2.errorMessage).length && delete e2.errorMessage)), e2.anyOf.push({ format: t2, ...r2 && n2.errorMessages && { errorMessage: { format: r2 } } })) : c(e2, "format", t2, r2, n2);
    }
    function C(e2, t2, r2, n2) {
      e2.pattern || e2.allOf?.some((e3) => e3.pattern) ? (e2.allOf || (e2.allOf = []), e2.pattern && (e2.allOf.push({ pattern: e2.pattern, ...e2.errorMessage && n2.errorMessages && { errorMessage: { pattern: e2.errorMessage.pattern } } }), delete e2.pattern, e2.errorMessage && (delete e2.errorMessage.pattern, 0 === Object.keys(e2.errorMessage).length && delete e2.errorMessage)), e2.allOf.push({ pattern: P(t2, n2), ...r2 && n2.errorMessages && { errorMessage: { pattern: r2 } } })) : c(e2, "pattern", P(t2, n2), r2, n2);
    }
    function P(e2, t2) {
      if (!t2.applyRegexFlags || !e2.flags) return e2.source;
      const r2 = e2.flags.includes("i"), n2 = e2.flags.includes("m"), s2 = e2.flags.includes("s"), o2 = r2 ? e2.source.toLowerCase() : e2.source;
      let i2 = "", a2 = false, c2 = false, l2 = false;
      for (let e3 = 0; e3 < o2.length; e3++) if (a2) i2 += o2[e3], a2 = false;
      else {
        if (r2) {
          if (c2) {
            if (o2[e3].match(/[a-z]/)) {
              l2 ? (i2 += o2[e3], i2 += `${o2[e3 - 2]}-${o2[e3]}`.toUpperCase(), l2 = false) : "-" === o2[e3 + 1] && o2[e3 + 2]?.match(/[a-z]/) ? (i2 += o2[e3], l2 = true) : i2 += `${o2[e3]}${o2[e3].toUpperCase()}`;
              continue;
            }
          } else if (o2[e3].match(/[a-z]/)) {
            i2 += `[${o2[e3]}${o2[e3].toUpperCase()}]`;
            continue;
          }
        }
        if (n2) {
          if ("^" === o2[e3]) {
            i2 += "(^|(?<=[\r\n]))";
            continue;
          }
          if ("$" === o2[e3]) {
            i2 += "($|(?=[\r\n]))";
            continue;
          }
        }
        s2 && "." === o2[e3] ? i2 += c2 ? `${o2[e3]}\r
` : `[${o2[e3]}\r
]` : (i2 += o2[e3], "\\" === o2[e3] ? a2 = true : c2 && "]" === o2[e3] ? c2 = false : c2 || "[" !== o2[e3] || (c2 = true));
      }
      try {
        new RegExp(i2);
      } catch {
        return console.warn(`Could not convert regex pattern at ${t2.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), e2.source;
      }
      return i2;
    }
    function A(e2, t2) {
      if ("openAi" === t2.target && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), "openApi3" === t2.target && e2.keyType?._def.typeName === i.kY.ZodEnum) return { type: "object", required: e2.keyType._def.values, properties: e2.keyType._def.values.reduce((r3, n2) => ({ ...r3, [n2]: D(e2.valueType._def, { ...t2, currentPath: [...t2.currentPath, "properties", n2] }) ?? {} }), {}), additionalProperties: t2.rejectedAdditionalProperties };
      const r2 = { type: "object", additionalProperties: D(e2.valueType._def, { ...t2, currentPath: [...t2.currentPath, "additionalProperties"] }) ?? t2.allowedAdditionalProperties };
      if ("openApi3" === t2.target) return r2;
      if (e2.keyType?._def.typeName === i.kY.ZodString && e2.keyType._def.checks?.length) {
        const { type: n2, ...s2 } = x(e2.keyType._def, t2);
        return { ...r2, propertyNames: s2 };
      }
      if (e2.keyType?._def.typeName === i.kY.ZodEnum) return { ...r2, propertyNames: { enum: e2.keyType._def.values } };
      if (e2.keyType?._def.typeName === i.kY.ZodBranded && e2.keyType._def.type._def.typeName === i.kY.ZodString && e2.keyType._def.type._def.checks?.length) {
        const { type: n2, ...s2 } = l(e2.keyType._def, t2);
        return { ...r2, propertyNames: s2 };
      }
      return r2;
    }
    const R = { ZodString: "string", ZodNumber: "number", ZodBigInt: "integer", ZodBoolean: "boolean", ZodNull: "null" };
    const M = (e2, t2) => {
      const r2 = (e2.options instanceof Map ? Array.from(e2.options.values()) : e2.options).map((e3, r3) => D(e3._def, { ...t2, currentPath: [...t2.currentPath, "anyOf", `${r3}`] })).filter((e3) => !!e3 && (!t2.strictUnions || "object" == typeof e3 && Object.keys(e3).length > 0));
      return r2.length ? { anyOf: r2 } : void 0;
    };
    function J(e2, t2) {
      const r2 = "openAi" === t2.target, n2 = { type: "object", properties: {} }, s2 = [], o2 = e2.shape();
      for (const e3 in o2) {
        let a3 = o2[e3];
        if (void 0 === a3 || void 0 === a3._def) continue;
        let c2 = O(a3);
        c2 && r2 && (a3 instanceof i.Ii && (a3 = a3._def.innerType), a3.isNullable() || (a3 = a3.nullable()), c2 = false);
        const l2 = D(a3._def, { ...t2, currentPath: [...t2.currentPath, "properties", e3], propertyPath: [...t2.currentPath, "properties", e3] });
        void 0 !== l2 && (n2.properties[e3] = l2, c2 || s2.push(e3));
      }
      s2.length && (n2.required = s2);
      const a2 = (function(e3, t3) {
        if ("ZodNever" !== e3.catchall._def.typeName) return D(e3.catchall._def, { ...t3, currentPath: [...t3.currentPath, "additionalProperties"] });
        switch (e3.unknownKeys) {
          case "passthrough":
            return t3.allowedAdditionalProperties;
          case "strict":
            return t3.rejectedAdditionalProperties;
          case "strip":
            return "strict" === t3.removeAdditionalStrategy ? t3.allowedAdditionalProperties : t3.rejectedAdditionalProperties;
        }
      })(e2, t2);
      return void 0 !== a2 && (n2.additionalProperties = a2), n2;
    }
    function O(e2) {
      try {
        return e2.isOptional();
      } catch {
        return true;
      }
    }
    const B = (e2, t2, r2) => {
      switch (t2) {
        case i.kY.ZodString:
          return x(e2, r2);
        case i.kY.ZodNumber:
          return (function(e3, t3) {
            const r3 = { type: "number" };
            if (!e3.checks) return r3;
            for (const n2 of e3.checks) switch (n2.kind) {
              case "int":
                r3.type = "integer", a(r3, "type", n2.message, t3);
                break;
              case "min":
                "jsonSchema7" === t3.target ? n2.inclusive ? c(r3, "minimum", n2.value, n2.message, t3) : c(r3, "exclusiveMinimum", n2.value, n2.message, t3) : (n2.inclusive || (r3.exclusiveMinimum = true), c(r3, "minimum", n2.value, n2.message, t3));
                break;
              case "max":
                "jsonSchema7" === t3.target ? n2.inclusive ? c(r3, "maximum", n2.value, n2.message, t3) : c(r3, "exclusiveMaximum", n2.value, n2.message, t3) : (n2.inclusive || (r3.exclusiveMaximum = true), c(r3, "maximum", n2.value, n2.message, t3));
                break;
              case "multipleOf":
                c(r3, "multipleOf", n2.value, n2.message, t3);
            }
            return r3;
          })(e2, r2);
        case i.kY.ZodObject:
          return J(e2, r2);
        case i.kY.ZodBigInt:
          return (function(e3, t3) {
            const r3 = { type: "integer", format: "int64" };
            if (!e3.checks) return r3;
            for (const n2 of e3.checks) switch (n2.kind) {
              case "min":
                "jsonSchema7" === t3.target ? n2.inclusive ? c(r3, "minimum", n2.value, n2.message, t3) : c(r3, "exclusiveMinimum", n2.value, n2.message, t3) : (n2.inclusive || (r3.exclusiveMinimum = true), c(r3, "minimum", n2.value, n2.message, t3));
                break;
              case "max":
                "jsonSchema7" === t3.target ? n2.inclusive ? c(r3, "maximum", n2.value, n2.message, t3) : c(r3, "exclusiveMaximum", n2.value, n2.message, t3) : (n2.inclusive || (r3.exclusiveMaximum = true), c(r3, "maximum", n2.value, n2.message, t3));
                break;
              case "multipleOf":
                c(r3, "multipleOf", n2.value, n2.message, t3);
            }
            return r3;
          })(e2, r2);
        case i.kY.ZodBoolean:
          return { type: "boolean" };
        case i.kY.ZodDate:
          return u(e2, r2);
        case i.kY.ZodUndefined:
          return { not: {} };
        case i.kY.ZodNull:
          return (function(e3) {
            return "openApi3" === e3.target ? { enum: ["null"], nullable: true } : { type: "null" };
          })(r2);
        case i.kY.ZodArray:
          return (function(e3, t3) {
            const r3 = { type: "array" };
            return e3.type?._def && e3.type?._def?.typeName !== i.kY.ZodAny && (r3.items = D(e3.type._def, { ...t3, currentPath: [...t3.currentPath, "items"] })), e3.minLength && c(r3, "minItems", e3.minLength.value, e3.minLength.message, t3), e3.maxLength && c(r3, "maxItems", e3.maxLength.value, e3.maxLength.message, t3), e3.exactLength && (c(r3, "minItems", e3.exactLength.value, e3.exactLength.message, t3), c(r3, "maxItems", e3.exactLength.value, e3.exactLength.message, t3)), r3;
          })(e2, r2);
        case i.kY.ZodUnion:
        case i.kY.ZodDiscriminatedUnion:
          return (function(e3, t3) {
            if ("openApi3" === t3.target) return M(e3, t3);
            const r3 = e3.options instanceof Map ? Array.from(e3.options.values()) : e3.options;
            if (r3.every((e4) => e4._def.typeName in R && (!e4._def.checks || !e4._def.checks.length))) {
              const e4 = r3.reduce((e5, t4) => {
                const r4 = R[t4._def.typeName];
                return r4 && !e5.includes(r4) ? [...e5, r4] : e5;
              }, []);
              return { type: e4.length > 1 ? e4 : e4[0] };
            }
            if (r3.every((e4) => "ZodLiteral" === e4._def.typeName && !e4.description)) {
              const e4 = r3.reduce((e5, t4) => {
                const r4 = typeof t4._def.value;
                switch (r4) {
                  case "string":
                  case "number":
                  case "boolean":
                    return [...e5, r4];
                  case "bigint":
                    return [...e5, "integer"];
                  case "object":
                    if (null === t4._def.value) return [...e5, "null"];
                  default:
                    return e5;
                }
              }, []);
              if (e4.length === r3.length) {
                const t4 = e4.filter((e5, t5, r4) => r4.indexOf(e5) === t5);
                return { type: t4.length > 1 ? t4 : t4[0], enum: r3.reduce((e5, t5) => e5.includes(t5._def.value) ? e5 : [...e5, t5._def.value], []) };
              }
            } else if (r3.every((e4) => "ZodEnum" === e4._def.typeName)) return { type: "string", enum: r3.reduce((e4, t4) => [...e4, ...t4._def.values.filter((t5) => !e4.includes(t5))], []) };
            return M(e3, t3);
          })(e2, r2);
        case i.kY.ZodIntersection:
          return (function(e3, t3) {
            const r3 = [D(e3.left._def, { ...t3, currentPath: [...t3.currentPath, "allOf", "0"] }), D(e3.right._def, { ...t3, currentPath: [...t3.currentPath, "allOf", "1"] })].filter((e4) => !!e4);
            let n2 = "jsonSchema2019-09" === t3.target ? { unevaluatedProperties: false } : void 0;
            const s2 = [];
            return r3.forEach((e4) => {
              if ("type" in (t4 = e4) && "string" === t4.type || !("allOf" in t4)) {
                let t5 = e4;
                if ("additionalProperties" in e4 && false === e4.additionalProperties) {
                  const { additionalProperties: r4, ...n3 } = e4;
                  t5 = n3;
                } else n2 = void 0;
                s2.push(t5);
              } else s2.push(...e4.allOf), void 0 === e4.unevaluatedProperties && (n2 = void 0);
              var t4;
            }), s2.length ? { allOf: s2, ...n2 } : void 0;
          })(e2, r2);
        case i.kY.ZodTuple:
          return (function(e3, t3) {
            return e3.rest ? { type: "array", minItems: e3.items.length, items: e3.items.map((e4, r3) => D(e4._def, { ...t3, currentPath: [...t3.currentPath, "items", `${r3}`] })).reduce((e4, t4) => void 0 === t4 ? e4 : [...e4, t4], []), additionalItems: D(e3.rest._def, { ...t3, currentPath: [...t3.currentPath, "additionalItems"] }) } : { type: "array", minItems: e3.items.length, maxItems: e3.items.length, items: e3.items.map((e4, r3) => D(e4._def, { ...t3, currentPath: [...t3.currentPath, "items", `${r3}`] })).reduce((e4, t4) => void 0 === t4 ? e4 : [...e4, t4], []) };
          })(e2, r2);
        case i.kY.ZodRecord:
          return A(e2, r2);
        case i.kY.ZodLiteral:
          return (function(e3, t3) {
            const r3 = typeof e3.value;
            return "bigint" !== r3 && "number" !== r3 && "boolean" !== r3 && "string" !== r3 ? { type: Array.isArray(e3.value) ? "array" : "object" } : "openApi3" === t3.target ? { type: "bigint" === r3 ? "integer" : r3, enum: [e3.value] } : { type: "bigint" === r3 ? "integer" : r3, const: e3.value };
          })(e2, r2);
        case i.kY.ZodEnum:
          return (function(e3) {
            return { type: "string", enum: Array.from(e3.values) };
          })(e2);
        case i.kY.ZodNativeEnum:
          return (function(e3) {
            const t3 = e3.values, r3 = Object.keys(e3.values).filter((e4) => "number" != typeof t3[t3[e4]]).map((e4) => t3[e4]), n2 = Array.from(new Set(r3.map((e4) => typeof e4)));
            return { type: 1 === n2.length ? "string" === n2[0] ? "string" : "number" : ["string", "number"], enum: r3 };
          })(e2);
        case i.kY.ZodNullable:
          return (function(e3, t3) {
            if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e3.innerType._def.typeName) && (!e3.innerType._def.checks || !e3.innerType._def.checks.length)) return "openApi3" === t3.target ? { type: R[e3.innerType._def.typeName], nullable: true } : { type: [R[e3.innerType._def.typeName], "null"] };
            if ("openApi3" === t3.target) {
              const r4 = D(e3.innerType._def, { ...t3, currentPath: [...t3.currentPath] });
              return r4 && "$ref" in r4 ? { allOf: [r4], nullable: true } : r4 && { ...r4, nullable: true };
            }
            const r3 = D(e3.innerType._def, { ...t3, currentPath: [...t3.currentPath, "anyOf", "0"] });
            return r3 && { anyOf: [r3, { type: "null" }] };
          })(e2, r2);
        case i.kY.ZodOptional:
          return ((e3, t3) => {
            if (t3.currentPath.toString() === t3.propertyPath?.toString()) return D(e3.innerType._def, t3);
            const r3 = D(e3.innerType._def, { ...t3, currentPath: [...t3.currentPath, "anyOf", "1"] });
            return r3 ? { anyOf: [{ not: {} }, r3] } : {};
          })(e2, r2);
        case i.kY.ZodMap:
          return (function(e3, t3) {
            return "record" === t3.mapStrategy ? A(e3, t3) : { type: "array", maxItems: 125, items: { type: "array", items: [D(e3.keyType._def, { ...t3, currentPath: [...t3.currentPath, "items", "items", "0"] }) || {}, D(e3.valueType._def, { ...t3, currentPath: [...t3.currentPath, "items", "items", "1"] }) || {}], minItems: 2, maxItems: 2 } };
          })(e2, r2);
        case i.kY.ZodSet:
          return (function(e3, t3) {
            const r3 = { type: "array", uniqueItems: true, items: D(e3.valueType._def, { ...t3, currentPath: [...t3.currentPath, "items"] }) };
            return e3.minSize && c(r3, "minItems", e3.minSize.value, e3.minSize.message, t3), e3.maxSize && c(r3, "maxItems", e3.maxSize.value, e3.maxSize.message, t3), r3;
          })(e2, r2);
        case i.kY.ZodLazy:
          return () => e2.getter()._def;
        case i.kY.ZodPromise:
          return (function(e3, t3) {
            return D(e3.type._def, t3);
          })(e2, r2);
        case i.kY.ZodNaN:
        case i.kY.ZodNever:
          return { not: {} };
        case i.kY.ZodEffects:
          return (function(e3, t3) {
            return "input" === t3.effectStrategy ? D(e3.schema._def, t3) : {};
          })(e2, r2);
        case i.kY.ZodAny:
        case i.kY.ZodUnknown:
          return {};
        case i.kY.ZodDefault:
          return (function(e3, t3) {
            return { ...D(e3.innerType._def, t3), default: e3.defaultValue() };
          })(e2, r2);
        case i.kY.ZodBranded:
          return l(e2, r2);
        case i.kY.ZodReadonly:
        case i.kY.ZodCatch:
          return ((e3, t3) => D(e3.innerType._def, t3))(e2, r2);
        case i.kY.ZodPipeline:
          return ((e3, t3) => {
            if ("input" === t3.pipeStrategy) return D(e3.in._def, t3);
            if ("output" === t3.pipeStrategy) return D(e3.out._def, t3);
            const r3 = D(e3.in._def, { ...t3, currentPath: [...t3.currentPath, "allOf", "0"] });
            return { allOf: [r3, D(e3.out._def, { ...t3, currentPath: [...t3.currentPath, "allOf", r3 ? "1" : "0"] })].filter((e4) => void 0 !== e4) };
          })(e2, r2);
        case i.kY.ZodFunction:
        case i.kY.ZodVoid:
        case i.kY.ZodSymbol:
        default:
          return;
      }
    };
    function D(e2, t2, r2 = false) {
      const s2 = t2.seen.get(e2);
      if (t2.override) {
        const o3 = t2.override?.(e2, t2, s2, r2);
        if (o3 !== n) return o3;
      }
      if (s2 && !r2) {
        const e3 = q(s2, t2);
        if (void 0 !== e3) return e3;
      }
      const o2 = { def: e2, path: t2.currentPath, jsonSchema: void 0 };
      t2.seen.set(e2, o2);
      const i2 = B(e2, e2.typeName, t2), a2 = "function" == typeof i2 ? D(i2(), t2) : i2;
      if (a2 && F(e2, t2, a2), t2.postProcess) {
        const r3 = t2.postProcess(a2, e2, t2);
        return o2.jsonSchema = a2, r3;
      }
      return o2.jsonSchema = a2, a2;
    }
    const q = (e2, t2) => {
      switch (t2.$refStrategy) {
        case "root":
          return { $ref: e2.path.join("/") };
        case "relative":
          return { $ref: N(t2.currentPath, e2.path) };
        case "none":
        case "seen":
          return e2.path.length < t2.currentPath.length && e2.path.every((e3, r2) => t2.currentPath[r2] === e3) ? (console.warn(`Recursive reference detected at ${t2.currentPath.join("/")}! Defaulting to any`), {}) : "seen" === t2.$refStrategy ? {} : void 0;
      }
    }, N = (e2, t2) => {
      let r2 = 0;
      for (; r2 < e2.length && r2 < t2.length && e2[r2] === t2[r2]; r2++) ;
      return [(e2.length - r2).toString(), ...t2.slice(r2)].join("/");
    }, F = (e2, t2, r2) => (e2.description && (r2.description = e2.description, t2.markdownDescription && (r2.markdownDescription = e2.description)), r2), U = (e2, t2) => {
      const r2 = o(t2), n2 = "object" == typeof t2 && t2.definitions ? Object.entries(t2.definitions).reduce((e3, [t3, n3]) => ({ ...e3, [t3]: D(n3._def, { ...r2, currentPath: [...r2.basePath, r2.definitionPath, t3] }, true) ?? {} }), {}) : void 0, s2 = "string" == typeof t2 ? t2 : "title" === t2?.nameStrategy ? void 0 : t2?.name, i2 = D(e2._def, void 0 === s2 ? r2 : { ...r2, currentPath: [...r2.basePath, r2.definitionPath, s2] }, false) ?? {}, a2 = "object" == typeof t2 && void 0 !== t2.name && "title" === t2.nameStrategy ? t2.name : void 0;
      void 0 !== a2 && (i2.title = a2);
      const c2 = void 0 === s2 ? n2 ? { ...i2, [r2.definitionPath]: n2 } : i2 : { $ref: [..."relative" === r2.$refStrategy ? [] : r2.basePath, r2.definitionPath, s2].join("/"), [r2.definitionPath]: { ...n2, [s2]: i2 } };
      return "jsonSchema7" === r2.target ? c2.$schema = "http://json-schema.org/draft-07/schema#" : "jsonSchema2019-09" !== r2.target && "openAi" !== r2.target || (c2.$schema = "https://json-schema.org/draft/2019-09/schema#"), "openAi" === r2.target && ("anyOf" in c2 || "oneOf" in c2 || "allOf" in c2 || "type" in c2 && Array.isArray(c2.type)) && console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property."), c2;
    }, L = U;
  }