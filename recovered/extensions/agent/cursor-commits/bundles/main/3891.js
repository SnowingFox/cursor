// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 3891 range:374592..375725
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3891: (e2) => {
    "use strict";
    let n2, a2 = Date.now();
    const t2 = [];
    function s2() {
      a2 = Date.now();
      let e3 = t2.length, n3 = 0;
      for (; n3 < e3; ) {
        const s3 = t2[n3];
        0 === s3.state ? s3.state = a2 + s3.delay : s3.state > 0 && a2 >= s3.state && (s3.state = -1, s3.callback(s3.opaque)), -1 === s3.state ? (s3.state = -2, n3 !== e3 - 1 ? t2[n3] = t2.pop() : t2.pop(), e3 -= 1) : n3 += 1;
      }
      t2.length > 0 && o2();
    }
    function o2() {
      n2 && n2.refresh ? n2.refresh() : (clearTimeout(n2), n2 = setTimeout(s2, 1e3), n2.unref && n2.unref());
    }
    class r2 {
      constructor(e3, n3, a3) {
        this.callback = e3, this.delay = n3, this.opaque = a3, this.state = -2, this.refresh();
      }
      refresh() {
        -2 === this.state && (t2.push(this), n2 && 1 !== t2.length || o2()), this.state = 0;
      }
      clear() {
        this.state = -1;
      }
    }
    e2.exports = { setTimeout: (e3, n3, a3) => n3 < 1e3 ? setTimeout(e3, n3, a3) : new r2(e3, n3, a3), clearTimeout(e3) {
      e3 instanceof r2 ? e3.clear() : clearTimeout(e3);
    } };
  }