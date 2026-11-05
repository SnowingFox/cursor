// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8661 range:5319535..5321396
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8661: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.uploadToSignedUrl = async function(t3) {
      const e3 = await n2.promises.stat(t3.filePath).catch(() => {
      });
      if (void 0 === e3) return { success: false, fallbackUsed: false, putFailure: {} };
      const r3 = (c = t3.mimeType, l = e3.size, { "Content-Type": c, "Content-Length": String(l) }), a = e3.size > 0 ? { start: 0, end: e3.size - 1 } : void 0, u = { method: "PUT", body: i2.Readable.toWeb((0, n2.createReadStream)(t3.filePath, a)), headers: r3, duplex: "half" };
      var c, l;
      let m;
      try {
        const e4 = await fetch(t3.putUrl, u);
        if (e4.ok) return { success: true, fallbackUsed: false };
        m = await o2(e4);
      } catch {
        m = {};
      }
      if (!t3.postUrl || !t3.postFields) return { success: false, fallbackUsed: false, putFailure: m };
      try {
        const e4 = new FormData();
        for (const [r5, n3] of Object.entries(t3.postFields)) e4.append(r5, n3);
        e4.append("file", await (0, n2.openAsBlob)(t3.filePath, { type: t3.mimeType }), (0, s2.basename)(t3.filePath));
        const r4 = await fetch(t3.postUrl, { method: "POST", body: e4 });
        return r4.ok ? { success: true, fallbackUsed: true, putFailure: m } : { success: false, fallbackUsed: true, putFailure: m, postFailure: await o2(r4) };
      } catch {
        return { success: false, fallbackUsed: true, putFailure: m, postFailure: {} };
      }
    };
    const n2 = r2(3024), s2 = r2(6760), i2 = r2(7075);
    async function o2(t3) {
      let e3;
      try {
        const r3 = (await t3.text()).slice(0, 500);
        e3 = r3.match(/<Code>([A-Za-z0-9]{1,64})<\/Code>/u)?.[1];
      } catch {
      }
      return { httpStatus: t3.status, ...void 0 === e3 ? {} : { s3ErrorCode: e3 } };
    }
  }