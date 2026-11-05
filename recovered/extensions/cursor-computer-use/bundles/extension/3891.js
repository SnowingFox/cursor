// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 3891 range:378519..379649
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3891: (e2) => {
    "use strict";
    let n2, t2 = Date.now();
    const a2 = [];
    function s2() {
      t2 = Date.now();
      let e3 = a2.length, n3 = 0;
      for (; n3 < e3; ) {
        const s3 = a2[n3];
        0 === s3.state ? s3.state = t2 + s3.delay : s3.state > 0 && t2 >= s3.state && (s3.state = -1, s3.callback(s3.opaque)), -1 === s3.state ? (s3.state = -2, n3 !== e3 - 1 ? a2[n3] = a2.pop() : a2.pop(), e3 -= 1) : n3 += 1;
      }
      a2.length > 0 && o2();
    }
    function o2() {
      n2 && n2.refresh ? n2.refresh() : (clearTimeout(n2), n2 = setTimeout(s2, 1e3), n2.unref && n2.unref());
    }
    class r {
      constructor(e3, n3, t3) {
        this.callback = e3, this.delay = n3, this.opaque = t3, this.state = -2, this.refresh();
      }
      refresh() {
        -2 === this.state && (a2.push(this), n2 && 1 !== a2.length || o2()), this.state = 0;
      }
      clear() {
        this.state = -1;
      }
    }
    e2.exports = { setTimeout: (e3, n3, t3) => n3 < 1e3 ? setTimeout(e3, n3, t3) : new r(e3, n3, t3), clearTimeout(e3) {
      e3 instanceof r ? e3.clear() : clearTimeout(e3);
    } };
  }