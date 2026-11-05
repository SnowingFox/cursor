// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 2074 range:464215..467919
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2074: (e2, a2, n2) => {
    "use strict";
    const { kState: t2, kError: s2, kResult: o2, kAborted: r2, kLastProgressEventFired: i2 } = n2(3153), { ProgressEvent: l } = n2(7997), { getEncoding: d } = n2(159), { DOMException: m } = n2(6687), { serializeAMimeType: c, parseMIMEType: p } = n2(3631), { types: A } = n2(9023), { StringDecoder: u } = n2(3193), { btoa: g } = n2(181);
    function T(e3, a3) {
      const n3 = new l(e3, { bubbles: false, cancelable: false });
      a3.dispatchEvent(n3);
    }
    function h(e3, a3, n3, t3) {
      switch (a3) {
        case "DataURL": {
          let a4 = "data:";
          const t4 = p(n3 || "application/octet-stream");
          "failure" !== t4 && (a4 += c(t4)), a4 += ";base64,";
          const s3 = new u("latin1");
          for (const n4 of e3) a4 += g(s3.write(n4));
          return a4 += g(s3.end()), a4;
        }
        case "Text": {
          let a4 = "failure";
          if (t3 && (a4 = d(t3)), "failure" === a4 && n3) {
            const e4 = p(n3);
            "failure" !== e4 && (a4 = d(e4.parameters.get("charset")));
          }
          return "failure" === a4 && (a4 = "UTF-8"), (function(e4, a5) {
            const n4 = k(e4), t4 = (function(e5) {
              const [a6, n5, t5] = e5;
              if (239 === a6 && 187 === n5 && 191 === t5) return "UTF-8";
              if (254 === a6 && 255 === n5) return "UTF-16BE";
              if (255 === a6 && 254 === n5) return "UTF-16LE";
              return null;
            })(n4);
            let s3 = 0;
            null !== t4 && (a5 = t4, s3 = "UTF-8" === t4 ? 3 : 2);
            const o3 = n4.slice(s3);
            return new TextDecoder(a5).decode(o3);
          })(e3, a4);
        }
        case "ArrayBuffer":
          return k(e3).buffer;
        case "BinaryString": {
          let a4 = "";
          const n4 = new u("latin1");
          for (const t4 of e3) a4 += n4.write(t4);
          return a4 += n4.end(), a4;
        }
      }
    }
    function k(e3) {
      const a3 = e3.reduce((e4, a4) => e4 + a4.byteLength, 0);
      let n3 = 0;
      return e3.reduce((e4, a4) => (e4.set(a4, n3), n3 += a4.byteLength, e4), new Uint8Array(a3));
    }
    e2.exports = { staticPropertyDescriptors: { enumerable: true, writable: false, configurable: false }, readOperation: function(e3, a3, n3, l2) {
      if ("loading" === e3[t2]) throw new m("Invalid state", "InvalidStateError");
      e3[t2] = "loading", e3[o2] = null, e3[s2] = null;
      const d2 = a3.stream().getReader(), c2 = [];
      let p2 = d2.read(), u2 = true;
      (async () => {
        for (; !e3[r2]; ) try {
          const { done: m2, value: g2 } = await p2;
          if (u2 && !e3[r2] && queueMicrotask(() => {
            T("loadstart", e3);
          }), u2 = false, !m2 && A.isUint8Array(g2)) c2.push(g2), (void 0 === e3[i2] || Date.now() - e3[i2] >= 50) && !e3[r2] && (e3[i2] = Date.now(), queueMicrotask(() => {
            T("progress", e3);
          })), p2 = d2.read();
          else if (m2) {
            queueMicrotask(() => {
              e3[t2] = "done";
              try {
                const t3 = h(c2, n3, a3.type, l2);
                if (e3[r2]) return;
                e3[o2] = t3, T("load", e3);
              } catch (a4) {
                e3[s2] = a4, T("error", e3);
              }
              "loading" !== e3[t2] && T("loadend", e3);
            });
            break;
          }
        } catch (a4) {
          if (e3[r2]) return;
          queueMicrotask(() => {
            e3[t2] = "done", e3[s2] = a4, T("error", e3), "loading" !== e3[t2] && T("loadend", e3);
          });
          break;
        }
      })();
    }, fireAProgressEvent: T };
  }