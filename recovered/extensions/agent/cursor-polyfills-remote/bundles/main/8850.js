// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 8850 range:155835..156385
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8850: (t2, r2, e2) => {
    var n2, o2, i2, a2, u2 = e2(9117), s2 = e2(9822), c = e2(9059), f = u2.structuredClone, h = u2.ArrayBuffer, l = u2.MessageChannel, p = false;
    if (c) p = function(t3) {
      f(t3, { transfer: [t3] });
    };
    else if (h) try {
      l || (n2 = s2("worker_threads")) && (l = n2.MessageChannel), l && (o2 = new l(), i2 = new h(2), a2 = function(t3) {
        o2.port1.postMessage(null, [t3]);
      }, 2 === i2.byteLength && (a2(i2), 0 === i2.byteLength && (p = a2)));
    } catch (t3) {
    }
    t2.exports = p;
  }