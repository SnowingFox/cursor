// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1335 range:483285..484418
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1335: (t2) => {
    "use strict";
    let e2, r2 = Date.now();
    const n2 = [];
    function s2() {
      r2 = Date.now();
      let t3 = n2.length, e3 = 0;
      for (; e3 < t3; ) {
        const s3 = n2[e3];
        0 === s3.state ? s3.state = r2 + s3.delay : s3.state > 0 && r2 >= s3.state && (s3.state = -1, s3.callback(s3.opaque)), -1 === s3.state ? (s3.state = -2, e3 !== t3 - 1 ? n2[e3] = n2.pop() : n2.pop(), t3 -= 1) : e3 += 1;
      }
      n2.length > 0 && i2();
    }
    function i2() {
      e2 && e2.refresh ? e2.refresh() : (clearTimeout(e2), e2 = setTimeout(s2, 1e3), e2.unref && e2.unref());
    }
    class o2 {
      constructor(t3, e3, r3) {
        this.callback = t3, this.delay = e3, this.opaque = r3, this.state = -2, this.refresh();
      }
      refresh() {
        -2 === this.state && (n2.push(this), e2 && 1 !== n2.length || i2()), this.state = 0;
      }
      clear() {
        this.state = -1;
      }
    }
    t2.exports = { setTimeout: (t3, e3, r3) => e3 < 1e3 ? setTimeout(t3, e3, r3) : new o2(t3, e3, r3), clearTimeout(t3) {
      t3 instanceof o2 ? t3.clear() : clearTimeout(t3);
    } };
  }