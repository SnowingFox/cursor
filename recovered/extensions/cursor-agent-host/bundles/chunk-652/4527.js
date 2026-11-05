// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
// module: 4527 range:33342..33922
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4527: (t2, e2, i2) => {
    var s2 = i2(3724), n2 = i2(4376), r2 = TypeError, a2 = Object.getOwnPropertyDescriptor, o2 = s2 && !(function() {
      if (void 0 !== this) return true;
      try {
        Object.defineProperty([], "length", { writable: false }).length = 1;
      } catch (t3) {
        return t3 instanceof TypeError;
      }
    })();
    t2.exports = o2 ? function(t3, e3) {
      if (n2(t3) && !a2(t3, "length").writable) throw new r2("Cannot set read only .length");
      return t3.length = e3;
    } : function(t3, e3) {
      return t3.length = e3;
    };
  }