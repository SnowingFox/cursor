// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 30338 range:2882087..2882859
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30338: (e, t, r) => {
    "use strict";
    var n;
    r.d(t, { M2: () => s, MS: () => o, dB: () => n }), (function(e2) {
      e2.MD5 = "md5", e2.CRC32 = "crc32", e2.CRC32C = "crc32c", e2.SHA1 = "sha1", e2.SHA256 = "sha256";
    })(n || (n = {}));
    const s = (e2) => {
      const t2 = [];
      return void 0 !== e2.sha256 && t2.push({ algorithmId: () => n.SHA256, checksumConstructor: () => e2.sha256 }), null != e2.md5 && t2.push({ algorithmId: () => n.MD5, checksumConstructor: () => e2.md5 }), { addChecksumAlgorithm(e3) {
        t2.push(e3);
      }, checksumAlgorithms: () => t2 };
    }, o = (e2) => {
      const t2 = {};
      return e2.checksumAlgorithms().forEach((e3) => {
        t2[e3.algorithmId()] = e3.checksumConstructor();
      }), t2;
    };
  }