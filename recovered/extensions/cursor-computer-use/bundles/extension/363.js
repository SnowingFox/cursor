// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 363 range:14760..15748
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
363: (e2) => {
    function n2() {
      this.pending = 0, this.max = 1 / 0, this.listeners = [], this.waiting = [], this.error = null;
    }
    function t2(e3) {
      e3.pending += 1;
      var n3 = false;
      return function(s2) {
        if (n3) throw new Error("callback called twice");
        if (n3 = true, e3.error = e3.error || s2, e3.pending -= 1, e3.waiting.length > 0 && e3.pending < e3.max) a2(e3, e3.waiting.shift());
        else if (0 === e3.pending) {
          var o2 = e3.listeners;
          e3.listeners = [], o2.forEach(t3);
        }
      };
      function t3(n4) {
        n4(e3.error);
      }
    }
    function a2(e3, n3) {
      n3(t2(e3));
    }
    e2.exports = n2, n2.prototype.go = function(e3) {
      this.pending < this.max ? a2(this, e3) : this.waiting.push(e3);
    }, n2.prototype.wait = function(e3) {
      0 === this.pending ? e3(this.error) : this.listeners.push(e3);
    }, n2.prototype.hold = function() {
      return t2(this);
    };
  }