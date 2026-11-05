// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 23237 range:645324..648477
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
23237: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.getSchemaRefs = t.resolveUrl = t.normalizeId = t._getFullPath = t.getFullPath = t.inlineRef = void 0;
    const n = r(79657), o = r(66042), s = r(25700), i = /* @__PURE__ */ new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
    t.inlineRef = function(e2, t2 = true) {
      return "boolean" == typeof e2 || (true === t2 ? !l(e2) : !!t2 && c(e2) <= t2);
    };
    const a = /* @__PURE__ */ new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
    function l(e2) {
      for (const t2 in e2) {
        if (a.has(t2)) return true;
        const r2 = e2[t2];
        if (Array.isArray(r2) && r2.some(l)) return true;
        if ("object" == typeof r2 && l(r2)) return true;
      }
      return false;
    }
    function c(e2) {
      let t2 = 0;
      for (const r2 in e2) {
        if ("$ref" === r2) return 1 / 0;
        if (t2++, !i.has(r2) && ("object" == typeof e2[r2] && (0, n.eachItem)(e2[r2], (e3) => t2 += c(e3)), t2 === 1 / 0)) return 1 / 0;
      }
      return t2;
    }
    function u(e2, t2 = "", r2) {
      false !== r2 && (t2 = h(t2));
      const n2 = e2.parse(t2);
      return d(e2, n2);
    }
    function d(e2, t2) {
      return e2.serialize(t2).split("#")[0] + "#";
    }
    t.getFullPath = u, t._getFullPath = d;
    const p = /#\/?$/;
    function h(e2) {
      return e2 ? e2.replace(p, "") : "";
    }
    t.normalizeId = h, t.resolveUrl = function(e2, t2, r2) {
      return r2 = h(r2), e2.resolve(t2, r2);
    };
    const m = /^[a-z_][-a-z0-9._]*$/i;
    t.getSchemaRefs = function(e2, t2) {
      if ("boolean" == typeof e2) return {};
      const { schemaId: r2, uriResolver: n2 } = this.opts, i2 = h(e2[r2] || t2), a2 = { "": i2 }, l2 = u(n2, i2, false), c2 = {}, d2 = /* @__PURE__ */ new Set();
      return s(e2, { allKeys: true }, (e3, t3, n3, o2) => {
        if (void 0 === o2) return;
        const s2 = l2 + t3;
        let i3 = a2[o2];
        function u2(t4) {
          const r3 = this.opts.uriResolver.resolve;
          if (t4 = h(i3 ? r3(i3, t4) : t4), d2.has(t4)) throw f(t4);
          d2.add(t4);
          let n4 = this.refs[t4];
          return "string" == typeof n4 && (n4 = this.refs[n4]), "object" == typeof n4 ? p2(e3, n4.schema, t4) : t4 !== h(s2) && ("#" === t4[0] ? (p2(e3, c2[t4], t4), c2[t4] = e3) : this.refs[t4] = s2), t4;
        }
        function g(e4) {
          if ("string" == typeof e4) {
            if (!m.test(e4)) throw new Error(`invalid anchor "${e4}"`);
            u2.call(this, `#${e4}`);
          }
        }
        "string" == typeof e3[r2] && (i3 = u2.call(this, e3[r2])), g.call(this, e3.$anchor), g.call(this, e3.$dynamicAnchor), a2[t3] = i3;
      }), c2;
      function p2(e3, t3, r3) {
        if (void 0 !== t3 && !o(e3, t3)) throw f(r3);
      }
      function f(e3) {
        return new Error(`reference "${e3}" resolves to more than one schema`);
      }
    };
  }