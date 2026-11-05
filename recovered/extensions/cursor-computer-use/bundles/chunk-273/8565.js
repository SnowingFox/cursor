// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/273.js sha256:057ec17488f68f7434e12ce31e59180a7183ddc2aab226744d2893aed3fcf167
// module: 8565 range:86581..87131
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
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