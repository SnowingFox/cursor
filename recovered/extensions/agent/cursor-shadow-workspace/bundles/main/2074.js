// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 2074 range:189033..192727
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2074: (e2, A2, t2) => {
    "use strict";
    const { kState: n2, kError: r2, kResult: o2, kAborted: s, kLastProgressEventFired: a } = t2(3153), { ProgressEvent: i } = t2(7997), { getEncoding: c } = t2(159), { DOMException: l } = t2(6687), { serializeAMimeType: g, parseMIMEType: E } = t2(3631), { types: u } = t2(9023), { StringDecoder: d } = t2(3193), { btoa: I } = t2(181);
    function h(e3, A3) {
      const t3 = new i(e3, { bubbles: false, cancelable: false });
      A3.dispatchEvent(t3);
    }
    function Q(e3, A3, t3, n3) {
      switch (A3) {
        case "DataURL": {
          let A4 = "data:";
          const n4 = E(t3 || "application/octet-stream");
          "failure" !== n4 && (A4 += g(n4)), A4 += ";base64,";
          const r3 = new d("latin1");
          for (const t4 of e3) A4 += I(r3.write(t4));
          return A4 += I(r3.end()), A4;
        }
        case "Text": {
          let A4 = "failure";
          if (n3 && (A4 = c(n3)), "failure" === A4 && t3) {
            const e4 = E(t3);
            "failure" !== e4 && (A4 = c(e4.parameters.get("charset")));
          }
          return "failure" === A4 && (A4 = "UTF-8"), (function(e4, A5) {
            const t4 = m(e4), n4 = (function(e5) {
              const [A6, t5, n5] = e5;
              if (239 === A6 && 187 === t5 && 191 === n5) return "UTF-8";
              if (254 === A6 && 255 === t5) return "UTF-16BE";
              if (255 === A6 && 254 === t5) return "UTF-16LE";
              return null;
            })(t4);
            let r3 = 0;
            null !== n4 && (A5 = n4, r3 = "UTF-8" === n4 ? 3 : 2);
            const o3 = t4.slice(r3);
            return new TextDecoder(A5).decode(o3);
          })(e3, A4);
        }
        case "ArrayBuffer":
          return m(e3).buffer;
        case "BinaryString": {
          let A4 = "";
          const t4 = new d("latin1");
          for (const n4 of e3) A4 += t4.write(n4);
          return A4 += t4.end(), A4;
        }
      }
    }
    function m(e3) {
      const A3 = e3.reduce((e4, A4) => e4 + A4.byteLength, 0);
      let t3 = 0;
      return e3.reduce((e4, A4) => (e4.set(A4, t3), t3 += A4.byteLength, e4), new Uint8Array(A3));
    }
    e2.exports = { staticPropertyDescriptors: { enumerable: true, writable: false, configurable: false }, readOperation: function(e3, A3, t3, i2) {
      if ("loading" === e3[n2]) throw new l("Invalid state", "InvalidStateError");
      e3[n2] = "loading", e3[o2] = null, e3[r2] = null;
      const c2 = A3.stream().getReader(), g2 = [];
      let E2 = c2.read(), d2 = true;
      (async () => {
        for (; !e3[s]; ) try {
          const { done: l2, value: I2 } = await E2;
          if (d2 && !e3[s] && queueMicrotask(() => {
            h("loadstart", e3);
          }), d2 = false, !l2 && u.isUint8Array(I2)) g2.push(I2), (void 0 === e3[a] || Date.now() - e3[a] >= 50) && !e3[s] && (e3[a] = Date.now(), queueMicrotask(() => {
            h("progress", e3);
          })), E2 = c2.read();
          else if (l2) {
            queueMicrotask(() => {
              e3[n2] = "done";
              try {
                const n3 = Q(g2, t3, A3.type, i2);
                if (e3[s]) return;
                e3[o2] = n3, h("load", e3);
              } catch (A4) {
                e3[r2] = A4, h("error", e3);
              }
              "loading" !== e3[n2] && h("loadend", e3);
            });
            break;
          }
        } catch (A4) {
          if (e3[s]) return;
          queueMicrotask(() => {
            e3[n2] = "done", e3[r2] = A4, h("error", e3), "loading" !== e3[n2] && h("loadend", e3);
          });
          break;
        }
      })();
    }, fireAProgressEvent: h };
  }