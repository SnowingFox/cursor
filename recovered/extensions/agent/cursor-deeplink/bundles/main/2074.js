// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2074 range:195388..199082
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2074: (e2, t2, A2) => {
    "use strict";
    const { kState: n2, kError: r2, kResult: o2, kAborted: s, kLastProgressEventFired: i } = A2(3153), { ProgressEvent: a } = A2(7997), { getEncoding: c } = A2(159), { DOMException: l } = A2(6687), { serializeAMimeType: u, parseMIMEType: g } = A2(3631), { types: E } = A2(9023), { StringDecoder: h } = A2(3193), { btoa: d } = A2(181);
    function I(e3, t3) {
      const A3 = new a(e3, { bubbles: false, cancelable: false });
      t3.dispatchEvent(A3);
    }
    function B(e3, t3, A3, n3) {
      switch (t3) {
        case "DataURL": {
          let t4 = "data:";
          const n4 = g(A3 || "application/octet-stream");
          "failure" !== n4 && (t4 += u(n4)), t4 += ";base64,";
          const r3 = new h("latin1");
          for (const A4 of e3) t4 += d(r3.write(A4));
          return t4 += d(r3.end()), t4;
        }
        case "Text": {
          let t4 = "failure";
          if (n3 && (t4 = c(n3)), "failure" === t4 && A3) {
            const e4 = g(A3);
            "failure" !== e4 && (t4 = c(e4.parameters.get("charset")));
          }
          return "failure" === t4 && (t4 = "UTF-8"), (function(e4, t5) {
            const A4 = Q(e4), n4 = (function(e5) {
              const [t6, A5, n5] = e5;
              if (239 === t6 && 187 === A5 && 191 === n5) return "UTF-8";
              if (254 === t6 && 255 === A5) return "UTF-16BE";
              if (255 === t6 && 254 === A5) return "UTF-16LE";
              return null;
            })(A4);
            let r3 = 0;
            null !== n4 && (t5 = n4, r3 = "UTF-8" === n4 ? 3 : 2);
            const o3 = A4.slice(r3);
            return new TextDecoder(t5).decode(o3);
          })(e3, t4);
        }
        case "ArrayBuffer":
          return Q(e3).buffer;
        case "BinaryString": {
          let t4 = "";
          const A4 = new h("latin1");
          for (const n4 of e3) t4 += A4.write(n4);
          return t4 += A4.end(), t4;
        }
      }
    }
    function Q(e3) {
      const t3 = e3.reduce((e4, t4) => e4 + t4.byteLength, 0);
      let A3 = 0;
      return e3.reduce((e4, t4) => (e4.set(t4, A3), A3 += t4.byteLength, e4), new Uint8Array(t3));
    }
    e2.exports = { staticPropertyDescriptors: { enumerable: true, writable: false, configurable: false }, readOperation: function(e3, t3, A3, a2) {
      if ("loading" === e3[n2]) throw new l("Invalid state", "InvalidStateError");
      e3[n2] = "loading", e3[o2] = null, e3[r2] = null;
      const c2 = t3.stream().getReader(), u2 = [];
      let g2 = c2.read(), h2 = true;
      (async () => {
        for (; !e3[s]; ) try {
          const { done: l2, value: d2 } = await g2;
          if (h2 && !e3[s] && queueMicrotask(() => {
            I("loadstart", e3);
          }), h2 = false, !l2 && E.isUint8Array(d2)) u2.push(d2), (void 0 === e3[i] || Date.now() - e3[i] >= 50) && !e3[s] && (e3[i] = Date.now(), queueMicrotask(() => {
            I("progress", e3);
          })), g2 = c2.read();
          else if (l2) {
            queueMicrotask(() => {
              e3[n2] = "done";
              try {
                const n3 = B(u2, A3, t3.type, a2);
                if (e3[s]) return;
                e3[o2] = n3, I("load", e3);
              } catch (t4) {
                e3[r2] = t4, I("error", e3);
              }
              "loading" !== e3[n2] && I("loadend", e3);
            });
            break;
          }
        } catch (t4) {
          if (e3[s]) return;
          queueMicrotask(() => {
            e3[n2] = "done", e3[r2] = t4, I("error", e3), "loading" !== e3[n2] && I("loadend", e3);
          });
          break;
        }
      })();
    }, fireAProgressEvent: I };
  }