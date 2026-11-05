// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 1335 range:26462..27563
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1335: (e) => {
    "use strict";
    let t, r = Date.now();
    const n = [];
    function s() {
      r = Date.now();
      let e2 = n.length, t2 = 0;
      for (; t2 < e2; ) {
        const s2 = n[t2];
        0 === s2.state ? s2.state = r + s2.delay : s2.state > 0 && r >= s2.state && (s2.state = -1, s2.callback(s2.opaque)), -1 === s2.state ? (s2.state = -2, t2 !== e2 - 1 ? n[t2] = n.pop() : n.pop(), e2 -= 1) : t2 += 1;
      }
      n.length > 0 && o();
    }
    function o() {
      t && t.refresh ? t.refresh() : (clearTimeout(t), t = setTimeout(s, 1e3), t.unref && t.unref());
    }
    class i {
      constructor(e2, t2, r2) {
        this.callback = e2, this.delay = t2, this.opaque = r2, this.state = -2, this.refresh();
      }
      refresh() {
        -2 === this.state && (n.push(this), t && 1 !== n.length || o()), this.state = 0;
      }
      clear() {
        this.state = -1;
      }
    }
    e.exports = { setTimeout: (e2, t2, r2) => t2 < 1e3 ? setTimeout(e2, t2, r2) : new i(e2, t2, r2), clearTimeout(e2) {
      e2 instanceof i ? e2.clear() : clearTimeout(e2);
    } };
  }