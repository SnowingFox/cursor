// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 29608 range:4880362..4888786
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29608: (e, t, r) => {
    "use strict";
    const n = r(53097), s = r(83589), { ReadableStreamFrom: o, isBlobLike: i, isReadableStreamLike: a, readableStreamClose: c, createDeferredPromise: l, fullyReadBody: u } = r(98116), { FormData: d } = r(66522), { kState: p } = r(77271), { webidl: m } = r(18193), { DOMException: h, structuredClone: f } = r(22955), { Blob: g, File: y } = r(20181), { kBodyUsed: w } = r(15532), v = r(42613), { isErrored: _ } = r(83589), { isUint8Array: A, isArrayBuffer: S } = r(98253), { File: b } = r(18142), { parseMIMEType: E, serializeAMimeType: I } = r(64387);
    let C;
    try {
      const e2 = r(77598);
      C = (t2) => e2.randomInt(0, t2);
    } catch {
      C = (e2) => Math.floor(Math.random(e2));
    }
    let k = globalThis.ReadableStream;
    const x = y ?? b, T = new TextEncoder(), R = new TextDecoder();
    function B(e2, t2 = false) {
      k || (k = r(63774).ReadableStream);
      let n2 = null;
      n2 = e2 instanceof k ? e2 : i(e2) ? e2.stream() : new k({ async pull(e3) {
        e3.enqueue("string" == typeof u2 ? T.encode(u2) : u2), queueMicrotask(() => c(e3));
      }, start() {
      }, type: void 0 }), v(a(n2));
      let l2 = null, u2 = null, d2 = null, p2 = null;
      if ("string" == typeof e2) u2 = e2, p2 = "text/plain;charset=UTF-8";
      else if (e2 instanceof URLSearchParams) u2 = e2.toString(), p2 = "application/x-www-form-urlencoded;charset=UTF-8";
      else if (S(e2)) u2 = new Uint8Array(e2.slice());
      else if (ArrayBuffer.isView(e2)) u2 = new Uint8Array(e2.buffer.slice(e2.byteOffset, e2.byteOffset + e2.byteLength));
      else if (s.isFormDataLike(e2)) {
        const t3 = `----formdata-undici-0${`${C(1e11)}`.padStart(11, "0")}`, r2 = `--${t3}\r
Content-Disposition: form-data`, n3 = (e3) => e3.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), s2 = (e3) => e3.replace(/\r?\n|\r/g, "\r\n"), o2 = [], i2 = new Uint8Array([13, 10]);
        d2 = 0;
        let a2 = false;
        for (const [t4, c3] of e2) if ("string" == typeof c3) {
          const e3 = T.encode(r2 + `; name="${n3(s2(t4))}"\r
\r
${s2(c3)}\r
`);
          o2.push(e3), d2 += e3.byteLength;
        } else {
          const e3 = T.encode(`${r2}; name="${n3(s2(t4))}"` + (c3.name ? `; filename="${n3(c3.name)}"` : "") + `\r
Content-Type: ${c3.type || "application/octet-stream"}\r
\r
`);
          o2.push(e3, c3, i2), "number" == typeof c3.size ? d2 += e3.byteLength + c3.size + i2.byteLength : a2 = true;
        }
        const c2 = T.encode(`--${t3}--`);
        o2.push(c2), d2 += c2.byteLength, a2 && (d2 = null), u2 = e2, l2 = async function* () {
          for (const e3 of o2) e3.stream ? yield* e3.stream() : yield e3;
        }, p2 = "multipart/form-data; boundary=" + t3;
      } else if (i(e2)) u2 = e2, d2 = e2.size, e2.type && (p2 = e2.type);
      else if ("function" == typeof e2[Symbol.asyncIterator]) {
        if (t2) throw new TypeError("keepalive");
        if (s.isDisturbed(e2) || e2.locked) throw new TypeError("Response body object should not be disturbed or locked");
        n2 = e2 instanceof k ? e2 : o(e2);
      }
      if (("string" == typeof u2 || s.isBuffer(u2)) && (d2 = Buffer.byteLength(u2)), null != l2) {
        let t3;
        n2 = new k({ async start() {
          t3 = l2(e2)[Symbol.asyncIterator]();
        }, async pull(e3) {
          const { value: r2, done: s2 } = await t3.next();
          return s2 ? queueMicrotask(() => {
            e3.close();
          }) : _(n2) || e3.enqueue(new Uint8Array(r2)), e3.desiredSize > 0;
        }, async cancel(e3) {
          await t3.return();
        }, type: void 0 });
      }
      return [{ stream: n2, source: u2, length: d2 }, p2];
    }
    async function* P(e2) {
      if (e2) if (A(e2)) yield e2;
      else {
        const t2 = e2.stream;
        if (s.isDisturbed(t2)) throw new TypeError("The body has already been consumed.");
        if (t2.locked) throw new TypeError("The stream is locked.");
        t2[w] = true, yield* t2;
      }
    }
    function J(e2) {
      if (e2.aborted) throw new h("The operation was aborted.", "AbortError");
    }
    function M(e2) {
      return { blob() {
        return q(this, (e3) => {
          let t2 = (function(e4) {
            const { headersList: t3 } = e4[p], r2 = t3.get("content-type");
            if (null === r2) return "failure";
            return E(r2);
          })(this);
          return "failure" === t2 ? t2 = "" : t2 && (t2 = I(t2)), new g([e3], { type: t2 });
        }, e2);
      }, arrayBuffer() {
        return q(this, (e3) => new Uint8Array(e3).buffer, e2);
      }, text() {
        return q(this, D, e2);
      }, json() {
        return q(this, O, e2);
      }, async formData() {
        m.brandCheck(this, e2), J(this[p]);
        const t2 = this.headers.get("Content-Type");
        if (/multipart\/form-data/.test(t2)) {
          const e3 = {};
          for (const [t4, r3] of this.headers) e3[t4.toLowerCase()] = r3;
          const t3 = new d();
          let r2;
          try {
            r2 = new n({ headers: e3, preservePath: true });
          } catch (e4) {
            throw new h(`${e4}`, "AbortError");
          }
          r2.on("field", (e4, r3) => {
            t3.append(e4, r3);
          }), r2.on("file", (e4, r3, n2, s3, o2) => {
            const i2 = [];
            if ("base64" === s3 || "base64" === s3.toLowerCase()) {
              let s4 = "";
              r3.on("data", (e5) => {
                s4 += e5.toString().replace(/[\r\n]/gm, "");
                const t4 = s4.length - s4.length % 4;
                i2.push(Buffer.from(s4.slice(0, t4), "base64")), s4 = s4.slice(t4);
              }), r3.on("end", () => {
                i2.push(Buffer.from(s4, "base64")), t3.append(e4, new x(i2, n2, { type: o2 }));
              });
            } else r3.on("data", (e5) => {
              i2.push(e5);
            }), r3.on("end", () => {
              t3.append(e4, new x(i2, n2, { type: o2 }));
            });
          });
          const s2 = new Promise((e4, t4) => {
            r2.on("finish", e4), r2.on("error", (e5) => t4(new TypeError(e5)));
          });
          if (null !== this.body) for await (const e4 of P(this[p].body)) r2.write(e4);
          return r2.end(), await s2, t3;
        }
        if (/application\/x-www-form-urlencoded/.test(t2)) {
          let e3;
          try {
            let t4 = "";
            const r2 = new TextDecoder("utf-8", { ignoreBOM: true });
            for await (const e4 of P(this[p].body)) {
              if (!A(e4)) throw new TypeError("Expected Uint8Array chunk");
              t4 += r2.decode(e4, { stream: true });
            }
            t4 += r2.decode(), e3 = new URLSearchParams(t4);
          } catch (e4) {
            throw Object.assign(new TypeError(), { cause: e4 });
          }
          const t3 = new d();
          for (const [r2, n2] of e3) t3.append(r2, n2);
          return t3;
        }
        throw await Promise.resolve(), J(this[p]), m.errors.exception({ header: `${e2.name}.formData`, message: "Could not parse content as FormData." });
      } };
    }
    async function q(e2, t2, r2) {
      if (m.brandCheck(e2, r2), J(e2[p]), null != (n2 = e2[p].body) && (n2.stream.locked || s.isDisturbed(n2.stream))) throw new TypeError("Body is unusable");
      var n2;
      const o2 = l(), i2 = (e3) => o2.reject(e3), a2 = (e3) => {
        try {
          o2.resolve(t2(e3));
        } catch (e4) {
          i2(e4);
        }
      };
      return null == e2[p].body ? (a2(new Uint8Array()), o2.promise) : (await u(e2[p].body, a2, i2), o2.promise);
    }
    function D(e2) {
      if (0 === e2.length) return "";
      239 === e2[0] && 187 === e2[1] && 191 === e2[2] && (e2 = e2.subarray(3));
      return R.decode(e2);
    }
    function O(e2) {
      return JSON.parse(D(e2));
    }
    e.exports = { extractBody: B, safelyExtractBody: function(e2, t2 = false) {
      return k || (k = r(63774).ReadableStream), e2 instanceof k && (v(!s.isDisturbed(e2), "The body has already been consumed."), v(!e2.locked, "The stream is locked.")), B(e2, t2);
    }, cloneBody: function(e2) {
      const [t2, r2] = e2.stream.tee(), n2 = f(r2, { transfer: [r2] }), [, s2] = n2.tee();
      return e2.stream = t2, { stream: s2, length: e2.length, source: e2.source };
    }, mixinBody: function(e2) {
      Object.assign(e2.prototype, M(e2));
    } };
  }