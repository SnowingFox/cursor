// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3742 range:994249..997949
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3742: (t2, e2, r2) => {
    "use strict";
    const { kState: n2, kError: s2, kResult: i2, kAborted: o2, kLastProgressEventFired: a } = r2(749), { ProgressEvent: u } = r2(4017), { getEncoding: c } = r2(1035), { DOMException: l } = r2(2955), { serializeAMimeType: m, parseMIMEType: d } = r2(4387), { types: f } = r2(9023), { StringDecoder: p } = r2(3193), { btoa: h } = r2(181);
    function g(t3, e3) {
      const r3 = new u(t3, { bubbles: false, cancelable: false });
      e3.dispatchEvent(r3);
    }
    function A(t3, e3, r3, n3) {
      switch (e3) {
        case "DataURL": {
          let e4 = "data:";
          const n4 = d(r3 || "application/octet-stream");
          "failure" !== n4 && (e4 += m(n4)), e4 += ";base64,";
          const s3 = new p("latin1");
          for (const r4 of t3) e4 += h(s3.write(r4));
          return e4 += h(s3.end()), e4;
        }
        case "Text": {
          let e4 = "failure";
          if (n3 && (e4 = c(n3)), "failure" === e4 && r3) {
            const t4 = d(r3);
            "failure" !== t4 && (e4 = c(t4.parameters.get("charset")));
          }
          return "failure" === e4 && (e4 = "UTF-8"), (function(t4, e5) {
            const r4 = _(t4), n4 = (function(t5) {
              const [e6, r5, n5] = t5;
              if (239 === e6 && 187 === r5 && 191 === n5) return "UTF-8";
              if (254 === e6 && 255 === r5) return "UTF-16BE";
              if (255 === e6 && 254 === r5) return "UTF-16LE";
              return null;
            })(r4);
            let s3 = 0;
            null !== n4 && (e5 = n4, s3 = "UTF-8" === n4 ? 3 : 2);
            const i3 = r4.slice(s3);
            return new TextDecoder(e5).decode(i3);
          })(t3, e4);
        }
        case "ArrayBuffer":
          return _(t3).buffer;
        case "BinaryString": {
          let e4 = "";
          const r4 = new p("latin1");
          for (const n4 of t3) e4 += r4.write(n4);
          return e4 += r4.end(), e4;
        }
      }
    }
    function _(t3) {
      const e3 = t3.reduce((t4, e4) => t4 + e4.byteLength, 0);
      let r3 = 0;
      return t3.reduce((t4, e4) => (t4.set(e4, r3), r3 += e4.byteLength, t4), new Uint8Array(e3));
    }
    t2.exports = { staticPropertyDescriptors: { enumerable: true, writable: false, configurable: false }, readOperation: function(t3, e3, r3, u2) {
      if ("loading" === t3[n2]) throw new l("Invalid state", "InvalidStateError");
      t3[n2] = "loading", t3[i2] = null, t3[s2] = null;
      const c2 = e3.stream().getReader(), m2 = [];
      let d2 = c2.read(), p2 = true;
      (async () => {
        for (; !t3[o2]; ) try {
          const { done: l2, value: h2 } = await d2;
          if (p2 && !t3[o2] && queueMicrotask(() => {
            g("loadstart", t3);
          }), p2 = false, !l2 && f.isUint8Array(h2)) m2.push(h2), (void 0 === t3[a] || Date.now() - t3[a] >= 50) && !t3[o2] && (t3[a] = Date.now(), queueMicrotask(() => {
            g("progress", t3);
          })), d2 = c2.read();
          else if (l2) {
            queueMicrotask(() => {
              t3[n2] = "done";
              try {
                const n3 = A(m2, r3, e3.type, u2);
                if (t3[o2]) return;
                t3[i2] = n3, g("load", t3);
              } catch (e4) {
                t3[s2] = e4, g("error", t3);
              }
              "loading" !== t3[n2] && g("loadend", t3);
            });
            break;
          }
        } catch (e4) {
          if (t3[o2]) return;
          queueMicrotask(() => {
            t3[n2] = "done", t3[s2] = e4, g("error", t3), "loading" !== t3[n2] && g("loadend", t3);
          });
          break;
        }
      })();
    }, fireAProgressEvent: g };
  }