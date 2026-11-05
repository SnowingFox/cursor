// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 81129 range:10762065..10762979
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
81129: (module, exports, __webpack_require__) => {
    "use strict";
    const yaml = __webpack_require__(45526), engines = exports = module.exports;
    engines.yaml = { parse: yaml.safeLoad.bind(yaml), stringify: yaml.safeDump.bind(yaml) }, engines.json = { parse: JSON.parse.bind(JSON), stringify: function(e, t) {
      const r = Object.assign({ replacer: null, space: 2 }, t);
      return JSON.stringify(e, r.replacer, r.space);
    } }, engines.javascript = { parse: function parse(str, options, wrap) {
      try {
        return false !== wrap && (str = "(function() {\nreturn " + str.trim() + ";\n}());"), eval(str) || {};
      } catch (e) {
        if (false !== wrap && /(unexpected|identifier)/i.test(e.message)) return parse(str, options, false);
        throw new SyntaxError(e);
      }
    }, stringify: function() {
      throw new Error("stringifying JavaScript is not supported");
    } };
  }