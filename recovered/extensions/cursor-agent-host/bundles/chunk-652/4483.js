// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
// module: 4483 range:32460..33026
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4483: (t2, e2, i2) => {
    var s2, n2, r2, a2, o2 = i2(4576), l2 = i2(9429), h2 = i2(1548), c2 = o2.structuredClone, d2 = o2.ArrayBuffer, u2 = o2.MessageChannel, p2 = false;
    if (h2) p2 = function(t3) {
      c2(t3, { transfer: [t3] });
    };
    else if (d2) try {
      u2 || (s2 = l2("worker_threads")) && (u2 = s2.MessageChannel), u2 && (n2 = new u2(), r2 = new d2(2), a2 = function(t3) {
        n2.port1.postMessage(null, [t3]);
      }, 2 === r2.byteLength && (a2(r2), 0 === r2.byteLength && (p2 = a2)));
    } catch (t3) {
    }
    t2.exports = p2;
  }