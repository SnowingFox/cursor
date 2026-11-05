// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 3358 range:613774..614712
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3358: (e2, a2, n2) => {
    var t2 = n2(7086);
    function s2(e3) {
      var a3 = function() {
        return a3.called ? a3.value : (a3.called = true, a3.value = e3.apply(this, arguments));
      };
      return a3.called = false, a3;
    }
    function o2(e3) {
      var a3 = function() {
        if (a3.called) throw new Error(a3.onceError);
        return a3.called = true, a3.value = e3.apply(this, arguments);
      }, n3 = e3.name || "Function wrapped with `once`";
      return a3.onceError = n3 + " shouldn't be called more than once", a3.called = false, a3;
    }
    e2.exports = t2(s2), e2.exports.strict = t2(o2), s2.proto = s2(function() {
      Object.defineProperty(Function.prototype, "once", { value: function() {
        return s2(this);
      }, configurable: true }), Object.defineProperty(Function.prototype, "onceStrict", { value: function() {
        return o2(this);
      }, configurable: true });
    });
  }