// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 79657 range:7352598..7357352
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
79657: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.checkStrictMode = t.getErrorPath = t.Type = t.useFunc = t.setEvaluated = t.evaluatedPropsToName = t.mergeEvaluated = t.eachItem = t.unescapeJsonPointer = t.escapeJsonPointer = t.escapeFragment = t.unescapeFragment = t.schemaRefOrVal = t.schemaHasRulesButRef = t.schemaHasRules = t.checkUnknownRules = t.alwaysValidSchema = t.toHash = void 0;
    const n = r(95183), o = r(77442);
    function s(e2, t2 = e2.schema) {
      const { opts: r2, self: n2 } = e2;
      if (!r2.strictSchema) return;
      if ("boolean" == typeof t2) return;
      const o2 = n2.RULES.keywords;
      for (const r3 in t2) o2[r3] || m(e2, `unknown keyword: "${r3}"`);
    }
    function i(e2, t2) {
      if ("boolean" == typeof e2) return !e2;
      for (const r2 in e2) if (t2[r2]) return true;
      return false;
    }
    function a(e2) {
      return "number" == typeof e2 ? `${e2}` : e2.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    function l(e2) {
      return e2.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    function c({ mergeNames: e2, mergeToName: t2, mergeValues: r2, resultToName: o2 }) {
      return (s2, i2, a2, l2) => {
        const c2 = void 0 === a2 ? i2 : a2 instanceof n.Name ? (i2 instanceof n.Name ? e2(s2, i2, a2) : t2(s2, i2, a2), a2) : i2 instanceof n.Name ? (t2(s2, a2, i2), i2) : r2(i2, a2);
        return l2 !== n.Name || c2 instanceof n.Name ? c2 : o2(s2, c2);
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
      return "boolean" == typeof t2 ? t2 : 0 === Object.keys(t2).length || (s(e2, t2), !i(t2, e2.self.RULES.all));
    }, t.checkUnknownRules = s, t.schemaHasRules = i, t.schemaHasRulesButRef = function(e2, t2) {
      if ("boolean" == typeof e2) return !e2;
      for (const r2 in e2) if ("$ref" !== r2 && t2.all[r2]) return true;
      return false;
    }, t.schemaRefOrVal = function({ topSchemaRef: e2, schemaPath: t2 }, r2, o2, s2) {
      if (!s2) {
        if ("number" == typeof r2 || "boolean" == typeof r2) return r2;
        if ("string" == typeof r2) return n._`${r2}`;
      }
      return n._`${e2}${t2}${(0, n.getProperty)(o2)}`;
    }, t.unescapeFragment = function(e2) {
      return l(decodeURIComponent(e2));
    }, t.escapeFragment = function(e2) {
      return encodeURIComponent(a(e2));
    }, t.escapeJsonPointer = a, t.unescapeJsonPointer = l, t.eachItem = function(e2, t2) {
      if (Array.isArray(e2)) for (const r2 of e2) t2(r2);
      else t2(e2);
    }, t.mergeEvaluated = { props: c({ mergeNames: (e2, t2, r2) => e2.if(n._`${r2} !== true && ${t2} !== undefined`, () => {
      e2.if(n._`${t2} === true`, () => e2.assign(r2, true), () => e2.assign(r2, n._`${r2} || {}`).code(n._`Object.assign(${r2}, ${t2})`));
    }), mergeToName: (e2, t2, r2) => e2.if(n._`${r2} !== true`, () => {
      true === t2 ? e2.assign(r2, true) : (e2.assign(r2, n._`${r2} || {}`), d(e2, r2, t2));
    }), mergeValues: (e2, t2) => true === e2 || { ...e2, ...t2 }, resultToName: u }), items: c({ mergeNames: (e2, t2, r2) => e2.if(n._`${r2} !== true && ${t2} !== undefined`, () => e2.assign(r2, n._`${t2} === true ? true : ${r2} > ${t2} ? ${r2} : ${t2}`)), mergeToName: (e2, t2, r2) => e2.if(n._`${r2} !== true`, () => e2.assign(r2, true === t2 || n._`${r2} > ${t2} ? ${r2} : ${t2}`)), mergeValues: (e2, t2) => true === e2 || Math.max(e2, t2), resultToName: (e2, t2) => e2.var("items", t2) }) }, t.evaluatedPropsToName = u, t.setEvaluated = d;
    const p = {};
    var h;
    function m(e2, t2, r2 = e2.opts.strictSchema) {
      if (r2) {
        if (t2 = `strict mode: ${t2}`, true === r2) throw new Error(t2);
        e2.self.logger.warn(t2);
      }
    }
    t.useFunc = function(e2, t2) {
      return e2.scopeValue("func", { ref: t2, code: p[t2.code] || (p[t2.code] = new o._Code(t2.code)) });
    }, (function(e2) {
      e2[e2.Num = 0] = "Num", e2[e2.Str = 1] = "Str";
    })(h || (t.Type = h = {})), t.getErrorPath = function(e2, t2, r2) {
      if (e2 instanceof n.Name) {
        const o2 = t2 === h.Num;
        return r2 ? o2 ? n._`"[" + ${e2} + "]"` : n._`"['" + ${e2} + "']"` : o2 ? n._`"/" + ${e2}` : n._`"/" + ${e2}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return r2 ? (0, n.getProperty)(e2).toString() : "/" + a(e2);
    }, t.checkStrictMode = m;
  }