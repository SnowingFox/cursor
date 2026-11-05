// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 58661 range:9179025..9180871
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
58661: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.uploadToSignedUrl = async function(e2) {
      const t2 = await n.promises.stat(e2.filePath).catch(() => {
      });
      if (void 0 === t2) return { success: false, fallbackUsed: false, putFailure: {} };
      const r2 = (l = e2.mimeType, u = t2.size, { "Content-Type": l, "Content-Length": String(u) }), a = t2.size > 0 ? { start: 0, end: t2.size - 1 } : void 0, c = { method: "PUT", body: o.Readable.toWeb((0, n.createReadStream)(e2.filePath, a)), headers: r2, duplex: "half" };
      var l, u;
      let d;
      try {
        const t3 = await fetch(e2.putUrl, c);
        if (t3.ok) return { success: true, fallbackUsed: false };
        d = await i(t3);
      } catch {
        d = {};
      }
      if (!e2.postUrl || !e2.postFields) return { success: false, fallbackUsed: false, putFailure: d };
      try {
        const t3 = new FormData();
        for (const [r4, n2] of Object.entries(e2.postFields)) t3.append(r4, n2);
        t3.append("file", await (0, n.openAsBlob)(e2.filePath, { type: e2.mimeType }), (0, s.basename)(e2.filePath));
        const r3 = await fetch(e2.postUrl, { method: "POST", body: t3 });
        return r3.ok ? { success: true, fallbackUsed: true, putFailure: d } : { success: false, fallbackUsed: true, putFailure: d, postFailure: await i(r3) };
      } catch {
        return { success: false, fallbackUsed: true, putFailure: d, postFailure: {} };
      }
    };
    const n = r(73024), s = r(76760), o = r(57075);
    async function i(e2) {
      let t2;
      try {
        const r2 = (await e2.text()).slice(0, 500);
        t2 = r2.match(/<Code>([A-Za-z0-9]{1,64})<\/Code>/u)?.[1];
      } catch {
      }
      return { httpStatus: e2.status, ...void 0 === t2 ? {} : { s3ErrorCode: t2 } };
    }
  }