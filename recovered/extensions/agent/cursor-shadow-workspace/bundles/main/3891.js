// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 3891 range:374328..375458
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3891: (e2) => {
    "use strict";
    let A2, t2 = Date.now();
    const n2 = [];
    function r2() {
      t2 = Date.now();
      let e3 = n2.length, A3 = 0;
      for (; A3 < e3; ) {
        const r3 = n2[A3];
        0 === r3.state ? r3.state = t2 + r3.delay : r3.state > 0 && t2 >= r3.state && (r3.state = -1, r3.callback(r3.opaque)), -1 === r3.state ? (r3.state = -2, A3 !== e3 - 1 ? n2[A3] = n2.pop() : n2.pop(), e3 -= 1) : A3 += 1;
      }
      n2.length > 0 && o2();
    }
    function o2() {
      A2 && A2.refresh ? A2.refresh() : (clearTimeout(A2), A2 = setTimeout(r2, 1e3), A2.unref && A2.unref());
    }
    class s {
      constructor(e3, A3, t3) {
        this.callback = e3, this.delay = A3, this.opaque = t3, this.state = -2, this.refresh();
      }
      refresh() {
        -2 === this.state && (n2.push(this), A2 && 1 !== n2.length || o2()), this.state = 0;
      }
      clear() {
        this.state = -1;
      }
    }
    e2.exports = { setTimeout: (e3, A3, t3) => A3 < 1e3 ? setTimeout(e3, A3, t3) : new s(e3, A3, t3), clearTimeout(e3) {
      e3 instanceof s ? e3.clear() : clearTimeout(e3);
    } };
  }