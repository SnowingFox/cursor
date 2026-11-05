// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 2074 range:193224..196918
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2074: (e2, n2, t2) => {
    "use strict";
    const { kState: a2, kError: s2, kResult: o2, kAborted: r, kLastProgressEventFired: i } = t2(3153), { ProgressEvent: A } = t2(7997), { getEncoding: c } = t2(159), { DOMException: l } = t2(6687), { serializeAMimeType: d, parseMIMEType: m } = t2(3631), { types: u } = t2(9023), { StringDecoder: g } = t2(3193), { btoa: p } = t2(181);
    function E(e3, n3) {
      const t3 = new A(e3, { bubbles: false, cancelable: false });
      n3.dispatchEvent(t3);
    }
    function h(e3, n3, t3, a3) {
      switch (n3) {
        case "DataURL": {
          let n4 = "data:";
          const a4 = m(t3 || "application/octet-stream");
          "failure" !== a4 && (n4 += d(a4)), n4 += ";base64,";
          const s3 = new g("latin1");
          for (const t4 of e3) n4 += p(s3.write(t4));
          return n4 += p(s3.end()), n4;
        }
        case "Text": {
          let n4 = "failure";
          if (a3 && (n4 = c(a3)), "failure" === n4 && t3) {
            const e4 = m(t3);
            "failure" !== e4 && (n4 = c(e4.parameters.get("charset")));
          }
          return "failure" === n4 && (n4 = "UTF-8"), (function(e4, n5) {
            const t4 = T(e4), a4 = (function(e5) {
              const [n6, t5, a5] = e5;
              if (239 === n6 && 187 === t5 && 191 === a5) return "UTF-8";
              if (254 === n6 && 255 === t5) return "UTF-16BE";
              if (255 === n6 && 254 === t5) return "UTF-16LE";
              return null;
            })(t4);
            let s3 = 0;
            null !== a4 && (n5 = a4, s3 = "UTF-8" === a4 ? 3 : 2);
            const o3 = t4.slice(s3);
            return new TextDecoder(n5).decode(o3);
          })(e3, n4);
        }
        case "ArrayBuffer":
          return T(e3).buffer;
        case "BinaryString": {
          let n4 = "";
          const t4 = new g("latin1");
          for (const a4 of e3) n4 += t4.write(a4);
          return n4 += t4.end(), n4;
        }
      }
    }
    function T(e3) {
      const n3 = e3.reduce((e4, n4) => e4 + n4.byteLength, 0);
      let t3 = 0;
      return e3.reduce((e4, n4) => (e4.set(n4, t3), t3 += n4.byteLength, e4), new Uint8Array(n3));
    }
    e2.exports = { staticPropertyDescriptors: { enumerable: true, writable: false, configurable: false }, readOperation: function(e3, n3, t3, A2) {
      if ("loading" === e3[a2]) throw new l("Invalid state", "InvalidStateError");
      e3[a2] = "loading", e3[o2] = null, e3[s2] = null;
      const c2 = n3.stream().getReader(), d2 = [];
      let m2 = c2.read(), g2 = true;
      (async () => {
        for (; !e3[r]; ) try {
          const { done: l2, value: p2 } = await m2;
          if (g2 && !e3[r] && queueMicrotask(() => {
            E("loadstart", e3);
          }), g2 = false, !l2 && u.isUint8Array(p2)) d2.push(p2), (void 0 === e3[i] || Date.now() - e3[i] >= 50) && !e3[r] && (e3[i] = Date.now(), queueMicrotask(() => {
            E("progress", e3);
          })), m2 = c2.read();
          else if (l2) {
            queueMicrotask(() => {
              e3[a2] = "done";
              try {
                const a3 = h(d2, t3, n3.type, A2);
                if (e3[r]) return;
                e3[o2] = a3, E("load", e3);
              } catch (n4) {
                e3[s2] = n4, E("error", e3);
              }
              "loading" !== e3[a2] && E("loadend", e3);
            });
            break;
          }
        } catch (n4) {
          if (e3[r]) return;
          queueMicrotask(() => {
            e3[a2] = "done", e3[s2] = n4, E("error", e3), "loading" !== e3[a2] && E("loadend", e3);
          });
          break;
        }
      })();
    }, fireAProgressEvent: E };
  }