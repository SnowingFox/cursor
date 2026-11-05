// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 97712 range:7903293..7905456
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
97712: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const n = r(44968), o = r(90414), s = r(93819), i = r(88345), a = ["/properties"], l = "http://json-schema.org/draft-07/schema";
    class c extends n.default {
      _addVocabularies() {
        super._addVocabularies(), o.default.forEach((e2) => this.addVocabulary(e2)), this.opts.discriminator && this.addKeyword(s.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta) return;
        const e2 = this.opts.$data ? this.$dataMetaSchema(i, a) : i;
        this.addMetaSchema(e2, l, false), this.refs["http://json-schema.org/schema"] = l;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(l) ? l : void 0);
      }
    }
    t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", { value: true }), t.default = c;
    var u = r(21188);
    Object.defineProperty(t, "KeywordCxt", { enumerable: true, get: function() {
      return u.KeywordCxt;
    } });
    var d = r(95183);
    Object.defineProperty(t, "_", { enumerable: true, get: function() {
      return d._;
    } }), Object.defineProperty(t, "str", { enumerable: true, get: function() {
      return d.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: true, get: function() {
      return d.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: true, get: function() {
      return d.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: true, get: function() {
      return d.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: true, get: function() {
      return d.CodeGen;
    } });
    var p = r(98532);
    Object.defineProperty(t, "ValidationError", { enumerable: true, get: function() {
      return p.default;
    } });
    var h = r(4989);
    Object.defineProperty(t, "MissingRefError", { enumerable: true, get: function() {
      return h.default;
    } });
  }