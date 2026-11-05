// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3237 range:255781..258959
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3237: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.getSchemaRefs = t2.resolveUrl = t2.normalizeId = t2._getFullPath = t2.getFullPath = t2.inlineRef = void 0;
    const n2 = r2(9657), o2 = r2(6042), s2 = r2(5700), i2 = /* @__PURE__ */ new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
    t2.inlineRef = function(e3, t3 = true) {
      return "boolean" == typeof e3 || (true === t3 ? !c(e3) : !!t3 && u(e3) <= t3);
    };
    const a2 = /* @__PURE__ */ new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
    function c(e3) {
      for (const t3 in e3) {
        if (a2.has(t3)) return true;
        const r3 = e3[t3];
        if (Array.isArray(r3) && r3.some(c)) return true;
        if ("object" == typeof r3 && c(r3)) return true;
      }
      return false;
    }
    function u(e3) {
      let t3 = 0;
      for (const r3 in e3) {
        if ("$ref" === r3) return 1 / 0;
        if (t3++, !i2.has(r3) && ("object" == typeof e3[r3] && (0, n2.eachItem)(e3[r3], (e4) => t3 += u(e4)), t3 === 1 / 0)) return 1 / 0;
      }
      return t3;
    }
    function l(e3, t3 = "", r3) {
      false !== r3 && (t3 = f(t3));
      const n3 = e3.parse(t3);
      return d(e3, n3);
    }
    function d(e3, t3) {
      return e3.serialize(t3).split("#")[0] + "#";
    }
    t2.getFullPath = l, t2._getFullPath = d;
    const p = /#\/?$/;
    function f(e3) {
      return e3 ? e3.replace(p, "") : "";
    }
    t2.normalizeId = f, t2.resolveUrl = function(e3, t3, r3) {
      return r3 = f(r3), e3.resolve(t3, r3);
    };
    const h = /^[a-z_][-a-z0-9._]*$/i;
    t2.getSchemaRefs = function(e3, t3) {
      if ("boolean" == typeof e3) return {};
      const { schemaId: r3, uriResolver: n3 } = this.opts, i3 = f(e3[r3] || t3), a3 = { "": i3 }, c2 = l(n3, i3, false), u2 = {}, d2 = /* @__PURE__ */ new Set();
      return s2(e3, { allKeys: true }, (e4, t4, n4, o3) => {
        if (void 0 === o3) return;
        const s3 = c2 + t4;
        let i4 = a3[o3];
        function l2(t5) {
          const r4 = this.opts.uriResolver.resolve;
          if (t5 = f(i4 ? r4(i4, t5) : t5), d2.has(t5)) throw m(t5);
          d2.add(t5);
          let n5 = this.refs[t5];
          return "string" == typeof n5 && (n5 = this.refs[n5]), "object" == typeof n5 ? p2(e4, n5.schema, t5) : t5 !== f(s3) && ("#" === t5[0] ? (p2(e4, u2[t5], t5), u2[t5] = e4) : this.refs[t5] = s3), t5;
        }
        function g(e5) {
          if ("string" == typeof e5) {
            if (!h.test(e5)) throw new Error(`invalid anchor "${e5}"`);
            l2.call(this, `#${e5}`);
          }
        }
        "string" == typeof e4[r3] && (i4 = l2.call(this, e4[r3])), g.call(this, e4.$anchor), g.call(this, e4.$dynamicAnchor), a3[t4] = i4;
      }), u2;
      function p2(e4, t4, r4) {
        if (void 0 !== t4 && !o2(e4, t4)) throw m(r4);
      }
      function m(e4) {
        return new Error(`reference "${e4}" resolves to more than one schema`);
      }
    };
  }