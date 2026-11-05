// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 21289 range:47970..51450
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
21289: (A, e, t) => {
  "use strict";
  const { kState: r, kError: s, kResult: o, kAborted: n, kLastProgressEventFired: i } = t(47192), { ProgressEvent: a } = t(2524), { getEncoding: Q } = t(79624), { serializeAMimeType: g, parseMIMEType: E } = t(52603), { types: B } = t(57975), { StringDecoder: c } = t(13193), { btoa: I } = t(4573);
  function C(A2, e2) {
    const t2 = new a(A2, { bubbles: false, cancelable: false });
    e2.dispatchEvent(t2);
  }
  function h(A2, e2, t2, r2) {
    switch (e2) {
      case "DataURL": {
        let e3 = "data:";
        const r3 = E(t2 || "application/octet-stream");
        "failure" !== r3 && (e3 += g(r3)), e3 += ";base64,";
        const s2 = new c("latin1");
        for (const t3 of A2) e3 += I(s2.write(t3));
        return e3 += I(s2.end()), e3;
      }
      case "Text": {
        let e3 = "failure";
        if (r2 && (e3 = Q(r2)), "failure" === e3 && t2) {
          const A3 = E(t2);
          "failure" !== A3 && (e3 = Q(A3.parameters.get("charset")));
        }
        return "failure" === e3 && (e3 = "UTF-8"), (function(A3, e4) {
          const t3 = l(A3), r3 = (function(A4) {
            const [e5, t4, r4] = A4;
            if (239 === e5 && 187 === t4 && 191 === r4) return "UTF-8";
            if (254 === e5 && 255 === t4) return "UTF-16BE";
            if (255 === e5 && 254 === t4) return "UTF-16LE";
            return null;
          })(t3);
          let s2 = 0;
          null !== r3 && (e4 = r3, s2 = "UTF-8" === r3 ? 3 : 2);
          const o2 = t3.slice(s2);
          return new TextDecoder(e4).decode(o2);
        })(A2, e3);
      }
      case "ArrayBuffer":
        return l(A2).buffer;
      case "BinaryString": {
        let e3 = "";
        const t3 = new c("latin1");
        for (const r3 of A2) e3 += t3.write(r3);
        return e3 += t3.end(), e3;
      }
    }
  }
  function l(A2) {
    const e2 = A2.reduce((A3, e3) => A3 + e3.byteLength, 0);
    let t2 = 0;
    return A2.reduce((A3, e3) => (A3.set(e3, t2), t2 += e3.byteLength, A3), new Uint8Array(e2));
  }
  A.exports = { staticPropertyDescriptors: { enumerable: true, writable: false, configurable: false }, readOperation: function(A2, e2, t2, a2) {
    if ("loading" === A2[r]) throw new DOMException("Invalid state", "InvalidStateError");
    A2[r] = "loading", A2[o] = null, A2[s] = null;
    const Q2 = e2.stream().getReader(), g2 = [];
    let E2 = Q2.read(), c2 = true;
    (async () => {
      for (; !A2[n]; ) try {
        const { done: I2, value: l2 } = await E2;
        if (c2 && !A2[n] && queueMicrotask(() => {
          C("loadstart", A2);
        }), c2 = false, !I2 && B.isUint8Array(l2)) g2.push(l2), (void 0 === A2[i] || Date.now() - A2[i] >= 50) && !A2[n] && (A2[i] = Date.now(), queueMicrotask(() => {
          C("progress", A2);
        })), E2 = Q2.read();
        else if (I2) {
          queueMicrotask(() => {
            A2[r] = "done";
            try {
              const r2 = h(g2, t2, e2.type, a2);
              if (A2[n]) return;
              A2[o] = r2, C("load", A2);
            } catch (e3) {
              A2[s] = e3, C("error", A2);
            }
            "loading" !== A2[r] && C("loadend", A2);
          });
          break;
        }
      } catch (e3) {
        if (A2[n]) return;
        queueMicrotask(() => {
          A2[r] = "done", A2[s] = e3, C("error", A2), "loading" !== A2[r] && C("loadend", A2);
        });
        break;
      }
    })();
  }, fireAProgressEvent: C };
}