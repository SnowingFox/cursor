// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 3891 range:680071..681204
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3891: (e2) => {
    "use strict";
    let a2, n2 = Date.now();
    const t2 = [];
    function s2() {
      n2 = Date.now();
      let e3 = t2.length, a3 = 0;
      for (; a3 < e3; ) {
        const s3 = t2[a3];
        0 === s3.state ? s3.state = n2 + s3.delay : s3.state > 0 && n2 >= s3.state && (s3.state = -1, s3.callback(s3.opaque)), -1 === s3.state ? (s3.state = -2, a3 !== e3 - 1 ? t2[a3] = t2.pop() : t2.pop(), e3 -= 1) : a3 += 1;
      }
      t2.length > 0 && o2();
    }
    function o2() {
      a2 && a2.refresh ? a2.refresh() : (clearTimeout(a2), a2 = setTimeout(s2, 1e3), a2.unref && a2.unref());
    }
    class r2 {
      constructor(e3, a3, n3) {
        this.callback = e3, this.delay = a3, this.opaque = n3, this.state = -2, this.refresh();
      }
      refresh() {
        -2 === this.state && (t2.push(this), a2 && 1 !== t2.length || o2()), this.state = 0;
      }
      clear() {
        this.state = -1;
      }
    }
    e2.exports = { setTimeout: (e3, a3, n3) => a3 < 1e3 ? setTimeout(e3, a3, n3) : new r2(e3, a3, n3), clearTimeout(e3) {
      e3 instanceof r2 ? e3.clear() : clearTimeout(e3);
    } };
  }