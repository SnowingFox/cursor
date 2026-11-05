// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7712 range:700031..702233
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7712: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.MissingRefError = t2.ValidationError = t2.CodeGen = t2.Name = t2.nil = t2.stringify = t2.str = t2._ = t2.KeywordCxt = t2.Ajv = void 0;
    const n2 = r2(4968), o2 = r2(414), s2 = r2(3819), i2 = r2(8345), a2 = ["/properties"], c = "http://json-schema.org/draft-07/schema";
    class u extends n2.default {
      _addVocabularies() {
        super._addVocabularies(), o2.default.forEach((e3) => this.addVocabulary(e3)), this.opts.discriminator && this.addKeyword(s2.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta) return;
        const e3 = this.opts.$data ? this.$dataMetaSchema(i2, a2) : i2;
        this.addMetaSchema(e3, c, false), this.refs["http://json-schema.org/schema"] = c;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(c) ? c : void 0);
      }
    }
    t2.Ajv = u, e2.exports = t2 = u, e2.exports.Ajv = u, Object.defineProperty(t2, "__esModule", { value: true }), t2.default = u;
    var l = r2(1188);
    Object.defineProperty(t2, "KeywordCxt", { enumerable: true, get: function() {
      return l.KeywordCxt;
    } });
    var d = r2(5183);
    Object.defineProperty(t2, "_", { enumerable: true, get: function() {
      return d._;
    } }), Object.defineProperty(t2, "str", { enumerable: true, get: function() {
      return d.str;
    } }), Object.defineProperty(t2, "stringify", { enumerable: true, get: function() {
      return d.stringify;
    } }), Object.defineProperty(t2, "nil", { enumerable: true, get: function() {
      return d.nil;
    } }), Object.defineProperty(t2, "Name", { enumerable: true, get: function() {
      return d.Name;
    } }), Object.defineProperty(t2, "CodeGen", { enumerable: true, get: function() {
      return d.CodeGen;
    } });
    var p = r2(8532);
    Object.defineProperty(t2, "ValidationError", { enumerable: true, get: function() {
      return p.default;
    } });
    var f = r2(4989);
    Object.defineProperty(t2, "MissingRefError", { enumerable: true, get: function() {
      return f.default;
    } });
  }