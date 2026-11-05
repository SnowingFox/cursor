// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9657 range:906410..911243
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9657: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.checkStrictMode = t2.getErrorPath = t2.Type = t2.useFunc = t2.setEvaluated = t2.evaluatedPropsToName = t2.mergeEvaluated = t2.eachItem = t2.unescapeJsonPointer = t2.escapeJsonPointer = t2.escapeFragment = t2.unescapeFragment = t2.schemaRefOrVal = t2.schemaHasRulesButRef = t2.schemaHasRules = t2.checkUnknownRules = t2.alwaysValidSchema = t2.toHash = void 0;
    const n2 = r2(5183), o2 = r2(7442);
    function s2(e3, t3 = e3.schema) {
      const { opts: r3, self: n3 } = e3;
      if (!r3.strictSchema) return;
      if ("boolean" == typeof t3) return;
      const o3 = n3.RULES.keywords;
      for (const r4 in t3) o3[r4] || h(e3, `unknown keyword: "${r4}"`);
    }
    function i2(e3, t3) {
      if ("boolean" == typeof e3) return !e3;
      for (const r3 in e3) if (t3[r3]) return true;
      return false;
    }
    function a2(e3) {
      return "number" == typeof e3 ? `${e3}` : e3.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    function c(e3) {
      return e3.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    function u({ mergeNames: e3, mergeToName: t3, mergeValues: r3, resultToName: o3 }) {
      return (s3, i3, a3, c2) => {
        const u2 = void 0 === a3 ? i3 : a3 instanceof n2.Name ? (i3 instanceof n2.Name ? e3(s3, i3, a3) : t3(s3, i3, a3), a3) : i3 instanceof n2.Name ? (t3(s3, a3, i3), i3) : r3(i3, a3);
        return c2 !== n2.Name || u2 instanceof n2.Name ? u2 : o3(s3, u2);
      };
    }
    function l(e3, t3) {
      if (true === t3) return e3.var("props", true);
      const r3 = e3.var("props", n2._`{}`);
      return void 0 !== t3 && d(e3, r3, t3), r3;
    }
    function d(e3, t3, r3) {
      Object.keys(r3).forEach((r4) => e3.assign(n2._`${t3}${(0, n2.getProperty)(r4)}`, true));
    }
    t2.toHash = function(e3) {
      const t3 = {};
      for (const r3 of e3) t3[r3] = true;
      return t3;
    }, t2.alwaysValidSchema = function(e3, t3) {
      return "boolean" == typeof t3 ? t3 : 0 === Object.keys(t3).length || (s2(e3, t3), !i2(t3, e3.self.RULES.all));
    }, t2.checkUnknownRules = s2, t2.schemaHasRules = i2, t2.schemaHasRulesButRef = function(e3, t3) {
      if ("boolean" == typeof e3) return !e3;
      for (const r3 in e3) if ("$ref" !== r3 && t3.all[r3]) return true;
      return false;
    }, t2.schemaRefOrVal = function({ topSchemaRef: e3, schemaPath: t3 }, r3, o3, s3) {
      if (!s3) {
        if ("number" == typeof r3 || "boolean" == typeof r3) return r3;
        if ("string" == typeof r3) return n2._`${r3}`;
      }
      return n2._`${e3}${t3}${(0, n2.getProperty)(o3)}`;
    }, t2.unescapeFragment = function(e3) {
      return c(decodeURIComponent(e3));
    }, t2.escapeFragment = function(e3) {
      return encodeURIComponent(a2(e3));
    }, t2.escapeJsonPointer = a2, t2.unescapeJsonPointer = c, t2.eachItem = function(e3, t3) {
      if (Array.isArray(e3)) for (const r3 of e3) t3(r3);
      else t3(e3);
    }, t2.mergeEvaluated = { props: u({ mergeNames: (e3, t3, r3) => e3.if(n2._`${r3} !== true && ${t3} !== undefined`, () => {
      e3.if(n2._`${t3} === true`, () => e3.assign(r3, true), () => e3.assign(r3, n2._`${r3} || {}`).code(n2._`Object.assign(${r3}, ${t3})`));
    }), mergeToName: (e3, t3, r3) => e3.if(n2._`${r3} !== true`, () => {
      true === t3 ? e3.assign(r3, true) : (e3.assign(r3, n2._`${r3} || {}`), d(e3, r3, t3));
    }), mergeValues: (e3, t3) => true === e3 || { ...e3, ...t3 }, resultToName: l }), items: u({ mergeNames: (e3, t3, r3) => e3.if(n2._`${r3} !== true && ${t3} !== undefined`, () => e3.assign(r3, n2._`${t3} === true ? true : ${r3} > ${t3} ? ${r3} : ${t3}`)), mergeToName: (e3, t3, r3) => e3.if(n2._`${r3} !== true`, () => e3.assign(r3, true === t3 || n2._`${r3} > ${t3} ? ${r3} : ${t3}`)), mergeValues: (e3, t3) => true === e3 || Math.max(e3, t3), resultToName: (e3, t3) => e3.var("items", t3) }) }, t2.evaluatedPropsToName = l, t2.setEvaluated = d;
    const p = {};
    var f;
    function h(e3, t3, r3 = e3.opts.strictSchema) {
      if (r3) {
        if (t3 = `strict mode: ${t3}`, true === r3) throw new Error(t3);
        e3.self.logger.warn(t3);
      }
    }
    t2.useFunc = function(e3, t3) {
      return e3.scopeValue("func", { ref: t3, code: p[t3.code] || (p[t3.code] = new o2._Code(t3.code)) });
    }, (function(e3) {
      e3[e3.Num = 0] = "Num", e3[e3.Str = 1] = "Str";
    })(f || (t2.Type = f = {})), t2.getErrorPath = function(e3, t3, r3) {
      if (e3 instanceof n2.Name) {
        const o3 = t3 === f.Num;
        return r3 ? o3 ? n2._`"[" + ${e3} + "]"` : n2._`"['" + ${e3} + "']"` : o3 ? n2._`"/" + ${e3}` : n2._`"/" + ${e3}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return r3 ? (0, n2.getProperty)(e3).toString() : "/" + a2(e3);
    }, t2.checkStrictMode = h;
  }