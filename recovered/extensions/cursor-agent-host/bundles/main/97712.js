// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 97712 range:15044567..15046730
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
97712: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const n = r(44968), s = r(90414), o = r(93819), i = r(88345), a = ["/properties"], c = "http://json-schema.org/draft-07/schema";
    class l extends n.default {
      _addVocabularies() {
        super._addVocabularies(), s.default.forEach((e2) => this.addVocabulary(e2)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta) return;
        const e2 = this.opts.$data ? this.$dataMetaSchema(i, a) : i;
        this.addMetaSchema(e2, c, false), this.refs["http://json-schema.org/schema"] = c;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(c) ? c : void 0);
      }
    }
    t.Ajv = l, e.exports = t = l, e.exports.Ajv = l, Object.defineProperty(t, "__esModule", { value: true }), t.default = l;
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
    var m = r(4989);
    Object.defineProperty(t, "MissingRefError", { enumerable: true, get: function() {
      return m.default;
    } });
  }