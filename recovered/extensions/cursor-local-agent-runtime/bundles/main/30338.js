// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 30338 range:1004600..1005372
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30338: (e, t, r) => {
    "use strict";
    var n;
    r.d(t, { M2: () => o, MS: () => s, dB: () => n }), (function(e2) {
      e2.MD5 = "md5", e2.CRC32 = "crc32", e2.CRC32C = "crc32c", e2.SHA1 = "sha1", e2.SHA256 = "sha256";
    })(n || (n = {}));
    const o = (e2) => {
      const t2 = [];
      return void 0 !== e2.sha256 && t2.push({ algorithmId: () => n.SHA256, checksumConstructor: () => e2.sha256 }), null != e2.md5 && t2.push({ algorithmId: () => n.MD5, checksumConstructor: () => e2.md5 }), { addChecksumAlgorithm(e3) {
        t2.push(e3);
      }, checksumAlgorithms: () => t2 };
    }, s = (e2) => {
      const t2 = {};
      return e2.checksumAlgorithms().forEach((e3) => {
        t2[e3.algorithmId()] = e3.checksumConstructor();
      }), t2;
    };
  }