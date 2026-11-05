// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 2074 range:189152..192856
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2074: (e2, n2, a2) => {
    "use strict";
    const { kState: t2, kError: s2, kResult: o2, kAborted: r2, kLastProgressEventFired: i2 } = a2(3153), { ProgressEvent: A } = a2(7997), { getEncoding: l } = a2(159), { DOMException: c } = a2(6687), { serializeAMimeType: m, parseMIMEType: d } = a2(3631), { types: g } = a2(9023), { StringDecoder: u } = a2(3193), { btoa: E } = a2(181);
    function p(e3, n3) {
      const a3 = new A(e3, { bubbles: false, cancelable: false });
      n3.dispatchEvent(a3);
    }
    function T(e3, n3, a3, t3) {
      switch (n3) {
        case "DataURL": {
          let n4 = "data:";
          const t4 = d(a3 || "application/octet-stream");
          "failure" !== t4 && (n4 += m(t4)), n4 += ";base64,";
          const s3 = new u("latin1");
          for (const a4 of e3) n4 += E(s3.write(a4));
          return n4 += E(s3.end()), n4;
        }
        case "Text": {
          let n4 = "failure";
          if (t3 && (n4 = l(t3)), "failure" === n4 && a3) {
            const e4 = d(a3);
            "failure" !== e4 && (n4 = l(e4.parameters.get("charset")));
          }
          return "failure" === n4 && (n4 = "UTF-8"), (function(e4, n5) {
            const a4 = k(e4), t4 = (function(e5) {
              const [n6, a5, t5] = e5;
              if (239 === n6 && 187 === a5 && 191 === t5) return "UTF-8";
              if (254 === n6 && 255 === a5) return "UTF-16BE";
              if (255 === n6 && 254 === a5) return "UTF-16LE";
              return null;
            })(a4);
            let s3 = 0;
            null !== t4 && (n5 = t4, s3 = "UTF-8" === t4 ? 3 : 2);
            const o3 = a4.slice(s3);
            return new TextDecoder(n5).decode(o3);
          })(e3, n4);
        }
        case "ArrayBuffer":
          return k(e3).buffer;
        case "BinaryString": {
          let n4 = "";
          const a4 = new u("latin1");
          for (const t4 of e3) n4 += a4.write(t4);
          return n4 += a4.end(), n4;
        }
      }
    }
    function k(e3) {
      const n3 = e3.reduce((e4, n4) => e4 + n4.byteLength, 0);
      let a3 = 0;
      return e3.reduce((e4, n4) => (e4.set(n4, a3), a3 += n4.byteLength, e4), new Uint8Array(n3));
    }
    e2.exports = { staticPropertyDescriptors: { enumerable: true, writable: false, configurable: false }, readOperation: function(e3, n3, a3, A2) {
      if ("loading" === e3[t2]) throw new c("Invalid state", "InvalidStateError");
      e3[t2] = "loading", e3[o2] = null, e3[s2] = null;
      const l2 = n3.stream().getReader(), m2 = [];
      let d2 = l2.read(), u2 = true;
      (async () => {
        for (; !e3[r2]; ) try {
          const { done: c2, value: E2 } = await d2;
          if (u2 && !e3[r2] && queueMicrotask(() => {
            p("loadstart", e3);
          }), u2 = false, !c2 && g.isUint8Array(E2)) m2.push(E2), (void 0 === e3[i2] || Date.now() - e3[i2] >= 50) && !e3[r2] && (e3[i2] = Date.now(), queueMicrotask(() => {
            p("progress", e3);
          })), d2 = l2.read();
          else if (c2) {
            queueMicrotask(() => {
              e3[t2] = "done";
              try {
                const t3 = T(m2, a3, n3.type, A2);
                if (e3[r2]) return;
                e3[o2] = t3, p("load", e3);
              } catch (n4) {
                e3[s2] = n4, p("error", e3);
              }
              "loading" !== e3[t2] && p("loadend", e3);
            });
            break;
          }
        } catch (n4) {
          if (e3[r2]) return;
          queueMicrotask(() => {
            e3[t2] = "done", e3[s2] = n4, p("error", e3), "loading" !== e3[t2] && p("loadend", e3);
          });
          break;
        }
      })();
    }, fireAProgressEvent: p };
  }