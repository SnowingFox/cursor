// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 78780 range:6759535..6765444
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
78780: (e, t, r) => {
    "use strict";
    r.d(t, { oM: () => d, O5: () => y });
    var n = r(5393);
    const s = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), o = Buffer.from([0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130]), i = (e2) => 1 === e2 || e2 >= 208 && e2 <= 216, a = (e2) => 192 === e2 || 193 === e2 || 194 === e2, c = (e2) => e2 >= 195 && e2 <= 207 && 196 !== e2 && 200 !== e2 && 204 !== e2, l = (e2) => ((e3) => {
      if (e3.length < s.length + 25 + o.length || !e3.subarray(0, s.length).equals(s) || 13 !== e3.readUInt32BE(8) || "IHDR" !== e3.toString("ascii", 12, 16) || !e3.subarray(e3.length - o.length).equals(o)) return;
      const t2 = e3.readUInt32BE(16), r2 = e3.readUInt32BE(20);
      return t2 < 1 || r2 < 1 ? void 0 : { mimeType: "image/png", width: t2, height: r2 };
    })(e2) ?? ((e3) => {
      if (e3.length < 4 || 255 !== e3[0] || 216 !== e3[1] || 255 !== e3[e3.length - 2] || 217 !== e3[e3.length - 1]) return;
      let t2 = 2;
      for (; t2 + 4 <= e3.length; ) {
        if (255 !== e3[t2]) return;
        const r2 = e3[t2 + 1];
        if (255 === r2) {
          t2 += 1;
          continue;
        }
        if (i(r2)) {
          t2 += 2;
          continue;
        }
        if (218 === r2 || 217 === r2 || c(r2)) return;
        const n2 = e3.readUInt16BE(t2 + 2);
        if (n2 < 2) return;
        if (a(r2)) {
          if (n2 < 8 || t2 + 9 > e3.length) return;
          const r3 = e3.readUInt16BE(t2 + 5), s2 = e3.readUInt16BE(t2 + 7);
          if (s2 < 1 || r3 < 1) return;
          return { mimeType: "image/jpeg", width: s2, height: r3 };
        }
        t2 += 2 + n2;
      }
    })(e2);
    var u = r(61522);
    const d = [{ width: 1280, height: 800 }, { width: 1456, height: 840 }], p = 1048576, m = (e2) => new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength);
    const h = (e2, t2, r2 = 1024) => (function(e3, t3, r3 = 1024) {
      if (e3 < 1 || t3 < 1) return { width: e3, height: t3, needsResize: false };
      const n2 = Math.max(e3, t3);
      if (n2 <= r3) return { width: e3, height: t3, needsResize: false };
      const s2 = Math.min(e3, t3);
      if (s2 < 8) return { width: e3, height: t3, needsResize: false };
      let o2 = r3 / n2, i2 = Math.max(1, Math.round(e3 * o2)), a2 = Math.max(1, Math.round(t3 * o2));
      return (i2 < 8 || a2 < 8) && (o2 = 8 / s2, i2 = Math.max(8, Math.round(e3 * o2)), a2 = Math.max(8, Math.round(t3 * o2))), { width: i2, height: a2, needsResize: i2 !== e3 || a2 !== t3 };
    })(e2, t2, r2), f = (e2, t2, r2) => {
      e2.resize({ w: t2, h: r2 });
    };
    let g;
    const y = async (e2, t2) => {
      if ((0, u.vE)(e2)) return (async (e3, t3) => {
        const r3 = (0, u.gy)(e3);
        if (true === t3?.preserveWebpDimensions && void 0 !== r3) return { data: m(e3), mimeType: "image/webp" };
        const s3 = void 0 !== r3 && d.some((e4) => e4.width === r3.width && e4.height === r3.height);
        if (void 0 !== r3 && (s3 || !h(r3.width, r3.height, 1280).needsResize) && e3.length <= p) return { data: m(e3), mimeType: "image/webp" };
        if ("passthrough" === t3?.webpWithoutCodec && !(0, u.Tr)()) return { data: m(e3), mimeType: "image/webp" };
        const o3 = await (0, u.jn)(e3), i3 = (await (0, n.I)()).fromBitmap({ data: Buffer.from(o3.data), width: o3.width, height: o3.height });
        let { width: a3, height: c3, needsResize: l2 } = s3 ? { width: i3.bitmap.width, height: i3.bitmap.height, needsResize: false } : h(i3.bitmap.width, i3.bitmap.height, 1280);
        l2 && f(i3, a3, c3);
        let g2 = await (0, u.Vq)({ data: i3.bitmap.data, width: i3.bitmap.width, height: i3.bitmap.height });
        for (; g2.length > p && a3 > 8 && c3 > 8; ) a3 = Math.max(8, Math.round(0.8 * a3)), c3 = Math.max(8, Math.round(0.8 * c3)), f(i3, a3, c3), g2 = await (0, u.Vq)({ data: i3.bitmap.data, width: i3.bitmap.width, height: i3.bitmap.height });
        return { data: m(g2), mimeType: "image/webp" };
      })(e2, t2);
      const r2 = l(e2);
      if (void 0 !== r2 && e2.length <= p && !h(r2.width, r2.height).needsResize) return { data: m(e2), mimeType: r2.mimeType };
      if (void 0 !== r2 && void 0 !== g) return (async ({ codec: e3, imageData: t3, mimeType: r3 }) => {
        const n2 = await e3.readOrientedDimensions(t3);
        if (void 0 === n2) throw new Error(`Could not read ${r3} dimensions`);
        let { width: s3, height: o3 } = h(n2.width, n2.height), i3 = await e3.resize({ data: t3, mimeType: r3, width: s3, height: o3 });
        for (; i3.length > p && s3 > 8 && o3 > 8; ) s3 = Math.max(8, Math.round(0.8 * s3)), o3 = Math.max(8, Math.round(0.8 * o3)), i3 = await e3.resize({ data: t3, mimeType: r3, width: s3, height: o3 });
        return { data: m(i3), mimeType: r3 };
      })({ codec: g, imageData: e2, mimeType: r2.mimeType });
      const s2 = await (0, n.I)(), o2 = await s2.read(e2), i2 = ((e3) => {
        switch (e3.mime) {
          case "image/png":
          default:
            return "image/png";
          case "image/bmp":
            return "image/bmp";
          case "image/tiff":
            return "image/tiff";
          case "image/x-ms-bmp":
            return "image/x-ms-bmp";
          case "image/gif":
            return "image/gif";
          case "image/jpeg":
            return "image/jpeg";
        }
      })(o2), a2 = true === t2?.convertUnsupportedModelFormatsToPng && "image/png" !== i2 && "image/jpeg" !== i2 ? "image/png" : i2, { width: c2, height: y2, needsResize: w } = h(o2.width, o2.height);
      if (!w && e2.length <= p && a2 === i2) return { data: m(e2), mimeType: i2 };
      let v = c2, _ = y2;
      w && f(o2, v, _);
      let b = await o2.getBuffer(a2);
      for (; b.length > p && v > 8 && _ > 8; ) v = Math.max(8, Math.round(0.8 * v)), _ = Math.max(8, Math.round(0.8 * _)), f(o2, v, _), b = await o2.getBuffer(a2);
      return { data: m(b), mimeType: a2 };
    };
  }