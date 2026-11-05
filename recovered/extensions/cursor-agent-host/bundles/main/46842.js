// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 46842 range:7926434..7938269
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
46842: (e, t, r) => {
    "use strict";
    r.d(t, { Yd: () => E, lt: () => M, Bh: () => P, zV: () => J, d8: () => x, yR: () => R, x3: () => B });
    var n = r(4573), s = r(51455), o = r(76760), i = r(57975), a = r(59158), c = r(99653);
    const l = "utf8", u = "utf8bom", d = "latin1", p = { "windows-1250": "cp1250", "windows-1251": "cp1251", "windows-1252": "cp1252", "windows-1253": "cp1253", "windows-1254": "cp1254", "windows-1255": "cp1255", "windows-1256": "cp1256", "windows-1257": "cp1257", "windows-1258": "cp1258", "iso-8859-1": "iso88591", "iso-8859-2": "iso88592", "iso-8859-5": "iso88595", "iso-8859-6": "iso88596", "iso-8859-7": "iso88597", "iso-8859-8": "iso88598", "iso-8859-9": "iso88599", "iso-8859-15": "iso885915", "iso-8859-16": "iso885916", shift_jis: "shiftjis", "euc-jp": "eucjp", "euc-kr": "euckr", "iso-2022-jp": "iso2022jp", "iso-2022-kr": "iso2022kr", gb2312: "gb2312", gbk: "gbk", gb18030: "gb18030", big5: "big5", "big5-hkscs": "big5hkscs", "koi8-r": "koi8r", "koi8-u": "koi8u", ibm855: "cp855", ibm866: "cp866", maccyrillic: "maccyrillic", "utf-16le": "utf16le", "utf-16be": "utf16be", "utf-32le": "utf32le", "utf-32be": "utf32be", johab: "johab", cp949: "cp949", cp932: "cp932" };
    function m(e2) {
      return e2.startsWith("\uFEFF") ? e2.slice(1) : e2;
    }
    function h(e2) {
      const t2 = e2.toLowerCase();
      return "latin-1" === t2 ? d : "utf-8" === t2 ? l : "utf-8-bom" === t2 || "utf-8 bom" === t2 ? u : t2;
    }
    var f;
    !(function(e2) {
      e2.CRLF = "CRLF", e2.LF = "LF";
    })(f || (f = {}));
    const g = [".mp4", ".webm", ".mov", ".avi", ".mkv", ".wmv", ".flv", ".m4v"], y = new Set(g), w = new i.TextDecoder("utf-8", { fatal: true }), v = new i.TextDecoder("latin1"), _ = 100, A = Buffer.from([239, 187, 191]), S = 27, b = "UTF-8", E = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".ico", ".bmp", ".svg", ".pdf", ".zip", ".tar", ".gz", ".exe", ".dll", ".so", ".dylib", ".bin", ...g]), C = /\.(png|jpg|jpeg|gif|webp|ico|bmp|svg)$/i;
    function k(e2) {
      const t2 = e2.toLowerCase(), r2 = t2.lastIndexOf(".");
      return -1 === r2 ? "" : t2.substring(r2);
    }
    function x(e2) {
      const t2 = k(e2);
      return y.has(t2);
    }
    function T(e2) {
      const t2 = k(e2);
      return { encoding: "binary", lineEnding: f.LF, isBinaryFile: true, isImageFile: C.test(t2), isVideoFile: y.has(t2) };
    }
    async function R(e2, t2) {
      const r2 = await (0, s.readFile)(e2), n2 = q(r2);
      if (n2.isBinaryFile) throw new Error("Binary file cannot be decoded as text");
      const o2 = E.get(e2);
      let i2;
      i2 = t2 || (o2 || n2.encoding);
      const { text: c2, encoding: g2 } = (function(e3, t3) {
        const r3 = h(t3);
        if (r3 === l || r3 === u || "ascii" === r3) {
          const t4 = $(e3);
          return r3 === u && t4.encoding === l ? { text: t4.text, encoding: u } : t4;
        }
        if (r3 === d) return { text: v.decode(e3), encoding: d };
        try {
          const t4 = (function(e4) {
            return p[e4] || e4;
          })(r3);
          if (a.encodingExists(t4)) {
            return { text: a.decode(e3, t4), encoding: r3 };
          }
        } catch {
        }
        return $(e3);
      })(r2, i2), y2 = m(c2);
      return L(e2, g2 === l && Q(r2) ? u : g2), n2.lineEnding === f.CRLF ? y2.replaceAll("\r\n", "\n") : y2;
    }
    async function B(e2, t2, r2, n2) {
      const { buffer: o2 } = await P(e2, t2, r2, n2);
      await (0, s.writeFile)(e2, o2);
    }
    async function P(e2, t2, r2, n2) {
      let s2;
      try {
        s2 = r2 ? await (async function(e3, t3) {
          try {
            return await J(e3);
          } catch {
          }
          const r3 = k(e3);
          if (I.has(r3)) return T(e3);
          try {
            return await (async function(e4) {
              const t4 = /* @__PURE__ */ new Map();
              let r4 = 0;
              const n3 = 100;
              for await (const s4 of F(e4)) {
                if (r4 >= n3) break;
                try {
                  const e5 = await J(s4);
                  if (!e5.isBinaryFile) {
                    const r5 = `${e5.encoding}:${e5.lineEnding}`, n4 = t4.get(r5);
                    if (n4) {
                      if (n4.count++, n4.count >= 3) return n4.format;
                    } else t4.set(r5, { format: e5, count: 1 });
                  }
                  r4++;
                } catch (e5) {
                }
              }
              let s3;
              for (const e5 of t4.values()) (!s3 || e5.count > s3.count) && (s3 = e5);
              if (s3) return s3.format;
              return U();
            })(t3);
          } catch {
            return U();
          }
        })(e2, r2) : await J(e2);
      } catch {
        const t3 = k(e2);
        s2 = I.has(t3) ? T(e2) : U();
      }
      const o2 = E.get(e2);
      if (!s2.isBinaryFile) {
        let t3;
        t3 = h(n2 || (o2 || s2.encoding));
        const r3 = t3 === u || t3 === l && !n2 && await (async function(e3) {
          try {
            return Q(await N(e3));
          } catch {
            return false;
          }
        })(e2);
        s2 = { ...s2, encoding: r3 ? u : t3 }, L(e2, s2.encoding);
      }
      const i2 = M(t2);
      if (s2.lineEnding === f.CRLF && (t2 = t2.replace(/(?<!\r)\n/g, "\r\n")), "binary" === s2.encoding) {
        const e3 = (function(e4) {
          const t3 = e4.trim().replace(/\s/g, ""), r3 = /^[A-Za-z0-9+/]*={0,2}$/, n3 = 50, s3 = 0.5;
          if (t3.length > n3 && r3.test(t3)) try {
            const e5 = Buffer.from(t3, "base64");
            if (e5.length > 0) {
              const r4 = Math.floor(t3.length * s3);
              if (e5.length >= r4) return e5;
            }
          } catch {
          }
          return Buffer.from(e4, "latin1");
        })(t2);
        return { lines: i2, buffer: e3, format: s2 };
      }
      return { lines: i2, buffer: s2.encoding === u ? Buffer.concat([A, a.encode(m(t2), l, { defaultEncoding: l })]) : a.encode(t2, s2.encoding, { defaultEncoding: l }), format: s2 };
    }
    async function J(e2) {
      const t2 = q(await N(e2));
      return t2.isBinaryFile ? { ...t2, isVideoFile: x(e2) } : { ...t2, isVideoFile: false };
    }
    function M(e2) {
      if ("" === e2) return 1;
      let t2 = 1;
      for (let r2 = 0; r2 < e2.length; r2++) "\n" === e2[r2] && t2++;
      return t2;
    }
    function q(e2) {
      if (0 === e2.length) return U();
      const t2 = (function(e3) {
        if (e3.length < 4) return null;
        if (255 === e3[0] && 254 === e3[1] && (0 !== e3[2] || 0 !== e3[3])) return "UTF-16LE";
        if (254 === e3[0] && 255 === e3[1]) return "UTF-16BE";
        let t3 = 0, r3 = 0;
        const n2 = Math.min(50, Math.floor(e3.length / 2));
        for (let s3 = 0; s3 < 2 * n2 && !(s3 + 1 >= e3.length); s3 += 2) {
          if (0 === e3[s3 + 1]) {
            const r4 = e3[s3];
            (r4 >= 32 && r4 <= 126 || 9 === r4 || 10 === r4 || 13 === r4) && t3++;
          }
          if (0 === e3[s3]) {
            const t4 = e3[s3 + 1];
            (t4 >= 32 && t4 <= 126 || 9 === t4 || 10 === t4 || 13 === t4) && r3++;
          }
        }
        if (t3 > 0.8 * n2) return "UTF-16LE";
        if (r3 > 0.8 * n2) return "UTF-16BE";
        return null;
      })(e2);
      if (t2) return { encoding: t2, lineEnding: D(e2), isBinaryFile: false, isImageFile: false, isVideoFile: false };
      const r2 = (function(e3) {
        if (e3.length < 8) return null;
        if (0 === e3[0] && 0 === e3[1] && 254 === e3[2] && 255 === e3[3]) return "UTF-32BE";
        if (255 === e3[0] && 254 === e3[1] && 0 === e3[2] && 0 === e3[3]) return "UTF-32LE";
        let t3 = 0, r3 = 0;
        const n2 = Math.min(50, Math.floor(e3.length / 4));
        for (let s3 = 0; s3 < 4 * n2 && !(s3 + 3 >= e3.length); s3 += 4) {
          if (0 === e3[s3] && 0 === e3[s3 + 1] && 0 === e3[s3 + 2]) {
            const r4 = e3[s3 + 3];
            (r4 >= 32 && r4 <= 126 || 9 === r4 || 10 === r4 || 13 === r4) && t3++;
          }
          if (0 === e3[s3 + 1] && 0 === e3[s3 + 2] && 0 === e3[s3 + 3]) {
            const t4 = e3[s3];
            (t4 >= 32 && t4 <= 126 || 9 === t4 || 10 === t4 || 13 === t4) && r3++;
          }
        }
        if (t3 > 0.8 * n2) return "UTF-32BE";
        if (r3 > 0.8 * n2) return "UTF-32LE";
        return null;
      })(e2);
      if (r2) return { encoding: r2, lineEnding: D(e2), isBinaryFile: false, isImageFile: false, isVideoFile: false };
      if (!(function(e3) {
        const t3 = Math.min(4096, e3.length);
        if (0 === t3) return true;
        for (let r4 = 0; r4 < t3; r4++) if (0 === e3[r4]) return false;
        let r3 = 0;
        for (let n2 = 0; n2 < t3; n2++) {
          const t4 = e3[n2];
          t4 < 32 && 9 !== t4 && 10 !== t4 && 13 !== t4 && r3++;
        }
        return r3 / t3 * 100 < 5;
      })(e2)) return { encoding: "binary", lineEnding: f.LF, isBinaryFile: true, isImageFile: O(e2), isVideoFile: false };
      if ((0, n.isUtf8)(e2) && !e2.includes(S)) return { encoding: b, lineEnding: D(e2), isBinaryFile: false, isImageFile: false, isVideoFile: false };
      const s2 = c.detect(e2);
      let o2 = s2.confidence > 0.7 ? s2.encoding : "utf-8";
      return "ascii" === o2 && (o2 = "utf-8"), { encoding: o2 ?? "utf-8", lineEnding: D(e2), isBinaryFile: false, isImageFile: false, isVideoFile: false };
    }
    function D(e2) {
      let t2 = 0, r2 = 0;
      for (let n2 = 0; n2 < e2.length; n2++) 10 === e2[n2] && (n2 > 0 && 13 === e2[n2 - 1] ? t2++ : r2++);
      if (0 === t2 && 0 === r2) return f.LF;
      return t2 / (t2 + r2) * 100 >= 5 ? f.CRLF : f.LF;
    }
    function O(e2) {
      return !(e2.length < 4) && (e2.length >= 8 && 137 === e2[0] && 80 === e2[1] && 78 === e2[2] && 71 === e2[3] && 13 === e2[4] && 10 === e2[5] && 26 === e2[6] && 10 === e2[7] || (255 === e2[0] && 216 === e2[1] && 255 === e2[2] || (e2.length >= 12 && 82 === e2[0] && 73 === e2[1] && 70 === e2[2] && 70 === e2[3] && 87 === e2[8] && 69 === e2[9] && 66 === e2[10] && 80 === e2[11] || e2.length >= 6 && 71 === e2[0] && 73 === e2[1] && 70 === e2[2] && 56 === e2[3] && (55 === e2[4] || 57 === e2[4]) && 97 === e2[5])));
    }
    async function N(e2) {
      const t2 = await (0, s.open)(e2, "r");
      try {
        const e3 = Buffer.allocUnsafe(8192), { bytesRead: r2 } = await t2.read(e3, 0, 8192, 0);
        return e3.subarray(0, r2);
      } finally {
        await t2.close();
      }
    }
    async function* F(e2) {
      const t2 = /* @__PURE__ */ new Set(["node_modules", ".git", ".svn", ".hg", "dist", "build", "out", ".next", ".cache", "coverage", "__pycache__", ".venv", "venv", ".turbo"]);
      try {
        const r2 = await (0, s.readdir)(e2, { withFileTypes: true });
        for (const n2 of r2) {
          if (n2.name.startsWith(".") && ".gitignore" !== n2.name) continue;
          const r3 = (0, o.join)(e2, n2.name);
          n2.isDirectory() ? t2.has(n2.name) || (yield* F(r3)) : n2.isFile() && (yield r3);
        }
      } catch (e3) {
        return;
      }
    }
    function U() {
      return { encoding: l, lineEnding: "win32" === process.platform ? f.CRLF : f.LF, isBinaryFile: false, isImageFile: false, isVideoFile: false };
    }
    function L(e2, t2) {
      if (E.has(e2) && E.delete(e2), E.set(e2, t2), E.size <= _) return;
      const r2 = E.keys().next().value;
      void 0 !== r2 && E.delete(r2);
    }
    function $(e2) {
      try {
        return { text: w.decode(e2), encoding: l };
      } catch {
        return { text: v.decode(e2), encoding: d };
      }
    }
    function Q(e2) {
      return e2.length >= A.length && e2[0] === A[0] && e2[1] === A[1] && e2[2] === A[2];
    }
  }