// @recovered-by cursor-re
// artifact: app/extensions/cursor-browser-automation/dist/273.js sha256:ab64b3e34dc97e1e5c85ecdaec9168b4137705ddedfa3c341bca35d6a42d36bc
// module: 8565 range:86581..87131
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8565: (e, t) => {
  "use strict";
  t.stringToBytes = (e2) => [...e2].map((e3) => e3.charCodeAt(0)), t.tarHeaderChecksumMatches = (e2, t2 = 0) => {
    const i = parseInt(e2.toString("utf8", 148, 154).replace(/\0.*$/, "").trim(), 8);
    if (isNaN(i)) return false;
    let a = 256;
    for (let i2 = t2; i2 < t2 + 148; i2++) a += e2[i2];
    for (let i2 = t2 + 156; i2 < t2 + 512; i2++) a += e2[i2];
    return i === a;
  }, t.uint32SyncSafeToken = { get: (e2, t2) => 127 & e2[t2 + 3] | e2[t2 + 2] << 7 | e2[t2 + 1] << 14 | e2[t2] << 21, len: 4 };
}