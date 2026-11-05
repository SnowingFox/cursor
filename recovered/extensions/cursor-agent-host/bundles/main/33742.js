// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 33742 range:6594396..6598075
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33742: (e, t, r) => {
    "use strict";
    const { kState: n, kError: s, kResult: o, kAborted: i, kLastProgressEventFired: a } = r(10749), { ProgressEvent: c } = r(74017), { getEncoding: l } = r(61035), { DOMException: u } = r(22955), { serializeAMimeType: d, parseMIMEType: p } = r(64387), { types: m } = r(39023), { StringDecoder: h } = r(13193), { btoa: f } = r(20181);
    function g(e2, t2) {
      const r2 = new c(e2, { bubbles: false, cancelable: false });
      t2.dispatchEvent(r2);
    }
    function y(e2, t2, r2, n2) {
      switch (t2) {
        case "DataURL": {
          let t3 = "data:";
          const n3 = p(r2 || "application/octet-stream");
          "failure" !== n3 && (t3 += d(n3)), t3 += ";base64,";
          const s2 = new h("latin1");
          for (const r3 of e2) t3 += f(s2.write(r3));
          return t3 += f(s2.end()), t3;
        }
        case "Text": {
          let t3 = "failure";
          if (n2 && (t3 = l(n2)), "failure" === t3 && r2) {
            const e3 = p(r2);
            "failure" !== e3 && (t3 = l(e3.parameters.get("charset")));
          }
          return "failure" === t3 && (t3 = "UTF-8"), (function(e3, t4) {
            const r3 = w(e3), n3 = (function(e4) {
              const [t5, r4, n4] = e4;
              if (239 === t5 && 187 === r4 && 191 === n4) return "UTF-8";
              if (254 === t5 && 255 === r4) return "UTF-16BE";
              if (255 === t5 && 254 === r4) return "UTF-16LE";
              return null;
            })(r3);
            let s2 = 0;
            null !== n3 && (t4 = n3, s2 = "UTF-8" === n3 ? 3 : 2);
            const o2 = r3.slice(s2);
            return new TextDecoder(t4).decode(o2);
          })(e2, t3);
        }
        case "ArrayBuffer":
          return w(e2).buffer;
        case "BinaryString": {
          let t3 = "";
          const r3 = new h("latin1");
          for (const n3 of e2) t3 += r3.write(n3);
          return t3 += r3.end(), t3;
        }
      }
    }
    function w(e2) {
      const t2 = e2.reduce((e3, t3) => e3 + t3.byteLength, 0);
      let r2 = 0;
      return e2.reduce((e3, t3) => (e3.set(t3, r2), r2 += t3.byteLength, e3), new Uint8Array(t2));
    }
    e.exports = { staticPropertyDescriptors: { enumerable: true, writable: false, configurable: false }, readOperation: function(e2, t2, r2, c2) {
      if ("loading" === e2[n]) throw new u("Invalid state", "InvalidStateError");
      e2[n] = "loading", e2[o] = null, e2[s] = null;
      const l2 = t2.stream().getReader(), d2 = [];
      let p2 = l2.read(), h2 = true;
      (async () => {
        for (; !e2[i]; ) try {
          const { done: u2, value: f2 } = await p2;
          if (h2 && !e2[i] && queueMicrotask(() => {
            g("loadstart", e2);
          }), h2 = false, !u2 && m.isUint8Array(f2)) d2.push(f2), (void 0 === e2[a] || Date.now() - e2[a] >= 50) && !e2[i] && (e2[a] = Date.now(), queueMicrotask(() => {
            g("progress", e2);
          })), p2 = l2.read();
          else if (u2) {
            queueMicrotask(() => {
              e2[n] = "done";
              try {
                const n2 = y(d2, r2, t2.type, c2);
                if (e2[i]) return;
                e2[o] = n2, g("load", e2);
              } catch (t3) {
                e2[s] = t3, g("error", e2);
              }
              "loading" !== e2[n] && g("loadend", e2);
            });
            break;
          }
        } catch (t3) {
          if (e2[i]) return;
          queueMicrotask(() => {
            e2[n] = "done", e2[s] = t3, g("error", e2), "loading" !== e2[n] && g("loadend", e2);
          });
          break;
        }
      })();
    }, fireAProgressEvent: g };
  }