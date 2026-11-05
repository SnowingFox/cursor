// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 11733 range:453407..454935
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
11733: (e, t, r) => {
    "use strict";
    var n;
    try {
      n = r(7898);
    } catch (e2) {
      "undefined" != typeof window && (n = window.esprima);
    }
    var o = r(77454);
    e.exports = new o("tag:yaml.org,2002:js/function", { kind: "scalar", resolve: function(e2) {
      if (null === e2) return false;
      try {
        var t2 = "(" + e2 + ")", r2 = n.parse(t2, { range: true });
        return "Program" === r2.type && 1 === r2.body.length && "ExpressionStatement" === r2.body[0].type && ("ArrowFunctionExpression" === r2.body[0].expression.type || "FunctionExpression" === r2.body[0].expression.type);
      } catch (e3) {
        return false;
      }
    }, construct: function(e2) {
      var t2, r2 = "(" + e2 + ")", o2 = n.parse(r2, { range: true }), s = [];
      if ("Program" !== o2.type || 1 !== o2.body.length || "ExpressionStatement" !== o2.body[0].type || "ArrowFunctionExpression" !== o2.body[0].expression.type && "FunctionExpression" !== o2.body[0].expression.type) throw new Error("Failed to resolve function");
      return o2.body[0].expression.params.forEach(function(e3) {
        s.push(e3.name);
      }), t2 = o2.body[0].expression.body.range, "BlockStatement" === o2.body[0].expression.body.type ? new Function(s, r2.slice(t2[0] + 1, t2[1] - 1)) : new Function(s, "return " + r2.slice(t2[0], t2[1]));
    }, predicate: function(e2) {
      return "[object Function]" === Object.prototype.toString.call(e2);
    }, represent: function(e2) {
      return e2.toString();
    } });
  }