// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 11733 range:3786328..3787856
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
    var s = r(77454);
    e.exports = new s("tag:yaml.org,2002:js/function", { kind: "scalar", resolve: function(e2) {
      if (null === e2) return false;
      try {
        var t2 = "(" + e2 + ")", r2 = n.parse(t2, { range: true });
        return "Program" === r2.type && 1 === r2.body.length && "ExpressionStatement" === r2.body[0].type && ("ArrowFunctionExpression" === r2.body[0].expression.type || "FunctionExpression" === r2.body[0].expression.type);
      } catch (e3) {
        return false;
      }
    }, construct: function(e2) {
      var t2, r2 = "(" + e2 + ")", s2 = n.parse(r2, { range: true }), o = [];
      if ("Program" !== s2.type || 1 !== s2.body.length || "ExpressionStatement" !== s2.body[0].type || "ArrowFunctionExpression" !== s2.body[0].expression.type && "FunctionExpression" !== s2.body[0].expression.type) throw new Error("Failed to resolve function");
      return s2.body[0].expression.params.forEach(function(e3) {
        o.push(e3.name);
      }), t2 = s2.body[0].expression.body.range, "BlockStatement" === s2.body[0].expression.body.type ? new Function(o, r2.slice(t2[0] + 1, t2[1] - 1)) : new Function(o, "return " + r2.slice(t2[0], t2[1]));
    }, predicate: function(e2) {
      return "[object Function]" === Object.prototype.toString.call(e2);
    }, represent: function(e2) {
      return e2.toString();
    } });
  }