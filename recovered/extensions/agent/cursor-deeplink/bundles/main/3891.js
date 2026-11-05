// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 3891 range:471732..472862
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3891: (e2) => {
    "use strict";
    let t2, A2 = Date.now();
    const n2 = [];
    function r2() {
      A2 = Date.now();
      let e3 = n2.length, t3 = 0;
      for (; t3 < e3; ) {
        const r3 = n2[t3];
        0 === r3.state ? r3.state = A2 + r3.delay : r3.state > 0 && A2 >= r3.state && (r3.state = -1, r3.callback(r3.opaque)), -1 === r3.state ? (r3.state = -2, t3 !== e3 - 1 ? n2[t3] = n2.pop() : n2.pop(), e3 -= 1) : t3 += 1;
      }
      n2.length > 0 && o2();
    }
    function o2() {
      t2 && t2.refresh ? t2.refresh() : (clearTimeout(t2), t2 = setTimeout(r2, 1e3), t2.unref && t2.unref());
    }
    class s {
      constructor(e3, t3, A3) {
        this.callback = e3, this.delay = t3, this.opaque = A3, this.state = -2, this.refresh();
      }
      refresh() {
        -2 === this.state && (n2.push(this), t2 && 1 !== n2.length || o2()), this.state = 0;
      }
      clear() {
        this.state = -1;
      }
    }
    e2.exports = { setTimeout: (e3, t3, A3) => t3 < 1e3 ? setTimeout(e3, t3, A3) : new s(e3, t3, A3), clearTimeout(e3) {
      e3 instanceof s ? e3.clear() : clearTimeout(e3);
    } };
  }