// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 79657 range:10747586..10752340
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
79657: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.checkStrictMode = t.getErrorPath = t.Type = t.useFunc = t.setEvaluated = t.evaluatedPropsToName = t.mergeEvaluated = t.eachItem = t.unescapeJsonPointer = t.escapeJsonPointer = t.escapeFragment = t.unescapeFragment = t.schemaRefOrVal = t.schemaHasRulesButRef = t.schemaHasRules = t.checkUnknownRules = t.alwaysValidSchema = t.toHash = void 0;
    const n = r(95183), s = r(77442);
    function o(e2, t2 = e2.schema) {
      const { opts: r2, self: n2 } = e2;
      if (!r2.strictSchema) return;
      if ("boolean" == typeof t2) return;
      const s2 = n2.RULES.keywords;
      for (const r3 in t2) s2[r3] || h(e2, `unknown keyword: "${r3}"`);
    }
    function i(e2, t2) {
      if ("boolean" == typeof e2) return !e2;
      for (const r2 in e2) if (t2[r2]) return true;
      return false;
    }
    function a(e2) {
      return "number" == typeof e2 ? `${e2}` : e2.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    function c(e2) {
      return e2.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    function l({ mergeNames: e2, mergeToName: t2, mergeValues: r2, resultToName: s2 }) {
      return (o2, i2, a2, c2) => {
        const l2 = void 0 === a2 ? i2 : a2 instanceof n.Name ? (i2 instanceof n.Name ? e2(o2, i2, a2) : t2(o2, i2, a2), a2) : i2 instanceof n.Name ? (t2(o2, a2, i2), i2) : r2(i2, a2);
        return c2 !== n.Name || l2 instanceof n.Name ? l2 : s2(o2, l2);
      };
    }
    function u(e2, t2) {
      if (true === t2) return e2.var("props", true);
      const r2 = e2.var("props", n._`{}`);
      return void 0 !== t2 && d(e2, r2, t2), r2;
    }
    function d(e2, t2, r2) {
      Object.keys(r2).forEach((r3) => e2.assign(n._`${t2}${(0, n.getProperty)(r3)}`, true));
    }
    t.toHash = function(e2) {
      const t2 = {};
      for (const r2 of e2) t2[r2] = true;
      return t2;
    }, t.alwaysValidSchema = function(e2, t2) {
      return "boolean" == typeof t2 ? t2 : 0 === Object.keys(t2).length || (o(e2, t2), !i(t2, e2.self.RULES.all));
    }, t.checkUnknownRules = o, t.schemaHasRules = i, t.schemaHasRulesButRef = function(e2, t2) {
      if ("boolean" == typeof e2) return !e2;
      for (const r2 in e2) if ("$ref" !== r2 && t2.all[r2]) return true;
      return false;
    }, t.schemaRefOrVal = function({ topSchemaRef: e2, schemaPath: t2 }, r2, s2, o2) {
      if (!o2) {
        if ("number" == typeof r2 || "boolean" == typeof r2) return r2;
        if ("string" == typeof r2) return n._`${r2}`;
      }
      return n._`${e2}${t2}${(0, n.getProperty)(s2)}`;
    }, t.unescapeFragment = function(e2) {
      return c(decodeURIComponent(e2));
    }, t.escapeFragment = function(e2) {
      return encodeURIComponent(a(e2));
    }, t.escapeJsonPointer = a, t.unescapeJsonPointer = c, t.eachItem = function(e2, t2) {
      if (Array.isArray(e2)) for (const r2 of e2) t2(r2);
      else t2(e2);
    }, t.mergeEvaluated = { props: l({ mergeNames: (e2, t2, r2) => e2.if(n._`${r2} !== true && ${t2} !== undefined`, () => {
      e2.if(n._`${t2} === true`, () => e2.assign(r2, true), () => e2.assign(r2, n._`${r2} || {}`).code(n._`Object.assign(${r2}, ${t2})`));
    }), mergeToName: (e2, t2, r2) => e2.if(n._`${r2} !== true`, () => {
      true === t2 ? e2.assign(r2, true) : (e2.assign(r2, n._`${r2} || {}`), d(e2, r2, t2));
    }), mergeValues: (e2, t2) => true === e2 || { ...e2, ...t2 }, resultToName: u }), items: l({ mergeNames: (e2, t2, r2) => e2.if(n._`${r2} !== true && ${t2} !== undefined`, () => e2.assign(r2, n._`${t2} === true ? true : ${r2} > ${t2} ? ${r2} : ${t2}`)), mergeToName: (e2, t2, r2) => e2.if(n._`${r2} !== true`, () => e2.assign(r2, true === t2 || n._`${r2} > ${t2} ? ${r2} : ${t2}`)), mergeValues: (e2, t2) => true === e2 || Math.max(e2, t2), resultToName: (e2, t2) => e2.var("items", t2) }) }, t.evaluatedPropsToName = u, t.setEvaluated = d;
    const p = {};
    var m;
    function h(e2, t2, r2 = e2.opts.strictSchema) {
      if (r2) {
        if (t2 = `strict mode: ${t2}`, true === r2) throw new Error(t2);
        e2.self.logger.warn(t2);
      }
    }
    t.useFunc = function(e2, t2) {
      return e2.scopeValue("func", { ref: t2, code: p[t2.code] || (p[t2.code] = new s._Code(t2.code)) });
    }, (function(e2) {
      e2[e2.Num = 0] = "Num", e2[e2.Str = 1] = "Str";
    })(m || (t.Type = m = {})), t.getErrorPath = function(e2, t2, r2) {
      if (e2 instanceof n.Name) {
        const s2 = t2 === m.Num;
        return r2 ? s2 ? n._`"[" + ${e2} + "]"` : n._`"['" + ${e2} + "']"` : s2 ? n._`"/" + ${e2}` : n._`"/" + ${e2}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return r2 ? (0, n.getProperty)(e2).toString() : "/" + a(e2);
    }, t.checkStrictMode = h;
  }