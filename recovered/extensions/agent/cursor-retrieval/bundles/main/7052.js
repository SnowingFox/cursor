// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 7052 range:835833..844275
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7052: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(6333), s2 = n2(9361), { ReadableStreamFrom: o2, isBlobLike: r2, isReadableStreamLike: i2, readableStreamClose: l, createDeferredPromise: d, fullyReadBody: m } = n2(5728), { FormData: c } = n2(1606), { kState: p } = n2(5899), { webidl: A } = n2(8005), { DOMException: u, structuredClone: g } = n2(6687), { Blob: T, File: h } = n2(181), { kBodyUsed: k } = n2(8832), _ = n2(2613), { isErrored: E } = n2(9361), { isUint8Array: f, isArrayBuffer: C } = n2(8253), { File: I } = n2(3322), { parseMIMEType: v, serializeAMimeType: y } = n2(3631);
    let S;
    try {
      const e3 = n2(7598);
      S = (a3) => e3.randomInt(0, a3);
    } catch {
      S = (e3) => Math.floor(Math.random(e3));
    }
    let R = globalThis.ReadableStream;
    const N = h ?? I, B = new TextEncoder(), w = new TextDecoder();
    function b(e3, a3 = false) {
      R || (R = n2(3774).ReadableStream);
      let t3 = null;
      t3 = e3 instanceof R ? e3 : r2(e3) ? e3.stream() : new R({ async pull(e4) {
        e4.enqueue("string" == typeof m2 ? B.encode(m2) : m2), queueMicrotask(() => l(e4));
      }, start() {
      }, type: void 0 }), _(i2(t3));
      let d2 = null, m2 = null, c2 = null, p2 = null;
      if ("string" == typeof e3) m2 = e3, p2 = "text/plain;charset=UTF-8";
      else if (e3 instanceof URLSearchParams) m2 = e3.toString(), p2 = "application/x-www-form-urlencoded;charset=UTF-8";
      else if (C(e3)) m2 = new Uint8Array(e3.slice());
      else if (ArrayBuffer.isView(e3)) m2 = new Uint8Array(e3.buffer.slice(e3.byteOffset, e3.byteOffset + e3.byteLength));
      else if (s2.isFormDataLike(e3)) {
        const a4 = `----formdata-undici-0${`${S(1e11)}`.padStart(11, "0")}`, n3 = `--${a4}\r
Content-Disposition: form-data`, t4 = (e4) => e4.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), s3 = (e4) => e4.replace(/\r?\n|\r/g, "\r\n"), o3 = [], r3 = new Uint8Array([13, 10]);
        c2 = 0;
        let i3 = false;
        for (const [a5, l3] of e3) if ("string" == typeof l3) {
          const e4 = B.encode(n3 + `; name="${t4(s3(a5))}"\r
\r
${s3(l3)}\r
`);
          o3.push(e4), c2 += e4.byteLength;
        } else {
          const e4 = B.encode(`${n3}; name="${t4(s3(a5))}"` + (l3.name ? `; filename="${t4(l3.name)}"` : "") + `\r
Content-Type: ${l3.type || "application/octet-stream"}\r
\r
`);
          o3.push(e4, l3, r3), "number" == typeof l3.size ? c2 += e4.byteLength + l3.size + r3.byteLength : i3 = true;
        }
        const l2 = B.encode(`--${a4}--`);
        o3.push(l2), c2 += l2.byteLength, i3 && (c2 = null), m2 = e3, d2 = async function* () {
          for (const e4 of o3) e4.stream ? yield* e4.stream() : yield e4;
        }, p2 = "multipart/form-data; boundary=" + a4;
      } else if (r2(e3)) m2 = e3, c2 = e3.size, e3.type && (p2 = e3.type);
      else if ("function" == typeof e3[Symbol.asyncIterator]) {
        if (a3) throw new TypeError("keepalive");
        if (s2.isDisturbed(e3) || e3.locked) throw new TypeError("Response body object should not be disturbed or locked");
        t3 = e3 instanceof R ? e3 : o2(e3);
      }
      if (("string" == typeof m2 || s2.isBuffer(m2)) && (c2 = Buffer.byteLength(m2)), null != d2) {
        let a4;
        t3 = new R({ async start() {
          a4 = d2(e3)[Symbol.asyncIterator]();
        }, async pull(e4) {
          const { value: n3, done: s3 } = await a4.next();
          return s3 ? queueMicrotask(() => {
            e4.close();
          }) : E(t3) || e4.enqueue(new Uint8Array(n3)), e4.desiredSize > 0;
        }, async cancel(e4) {
          await a4.return();
        }, type: void 0 });
      }
      return [{ stream: t3, source: m2, length: c2 }, p2];
    }
    async function* Q(e3) {
      if (e3) if (f(e3)) yield e3;
      else {
        const a3 = e3.stream;
        if (s2.isDisturbed(a3)) throw new TypeError("The body has already been consumed.");
        if (a3.locked) throw new TypeError("The stream is locked.");
        a3[k] = true, yield* a3;
      }
    }
    function D(e3) {
      if (e3.aborted) throw new u("The operation was aborted.", "AbortError");
    }
    function M(e3) {
      return { blob() {
        return O(this, (e4) => {
          let a3 = (function(e5) {
            const { headersList: a4 } = e5[p], n3 = a4.get("content-type");
            if (null === n3) return "failure";
            return v(n3);
          })(this);
          return "failure" === a3 ? a3 = "" : a3 && (a3 = y(a3)), new T([e4], { type: a3 });
        }, e3);
      }, arrayBuffer() {
        return O(this, (e4) => new Uint8Array(e4).buffer, e3);
      }, text() {
        return O(this, U, e3);
      }, json() {
        return O(this, F, e3);
      }, async formData() {
        A.brandCheck(this, e3), D(this[p]);
        const a3 = this.headers.get("Content-Type");
        if (/multipart\/form-data/.test(a3)) {
          const e4 = {};
          for (const [a5, n4] of this.headers) e4[a5.toLowerCase()] = n4;
          const a4 = new c();
          let n3;
          try {
            n3 = new t2({ headers: e4, preservePath: true });
          } catch (e5) {
            throw new u(`${e5}`, "AbortError");
          }
          n3.on("field", (e5, n4) => {
            a4.append(e5, n4);
          }), n3.on("file", (e5, n4, t3, s4, o3) => {
            const r3 = [];
            if ("base64" === s4 || "base64" === s4.toLowerCase()) {
              let s5 = "";
              n4.on("data", (e6) => {
                s5 += e6.toString().replace(/[\r\n]/gm, "");
                const a5 = s5.length - s5.length % 4;
                r3.push(Buffer.from(s5.slice(0, a5), "base64")), s5 = s5.slice(a5);
              }), n4.on("end", () => {
                r3.push(Buffer.from(s5, "base64")), a4.append(e5, new N(r3, t3, { type: o3 }));
              });
            } else n4.on("data", (e6) => {
              r3.push(e6);
            }), n4.on("end", () => {
              a4.append(e5, new N(r3, t3, { type: o3 }));
            });
          });
          const s3 = new Promise((e5, a5) => {
            n3.on("finish", e5), n3.on("error", (e6) => a5(new TypeError(e6)));
          });
          if (null !== this.body) for await (const e5 of Q(this[p].body)) n3.write(e5);
          return n3.end(), await s3, a4;
        }
        if (/application\/x-www-form-urlencoded/.test(a3)) {
          let e4;
          try {
            let a5 = "";
            const n3 = new TextDecoder("utf-8", { ignoreBOM: true });
            for await (const e5 of Q(this[p].body)) {
              if (!f(e5)) throw new TypeError("Expected Uint8Array chunk");
              a5 += n3.decode(e5, { stream: true });
            }
            a5 += n3.decode(), e4 = new URLSearchParams(a5);
          } catch (e5) {
            throw Object.assign(new TypeError(), { cause: e5 });
          }
          const a4 = new c();
          for (const [n3, t3] of e4) a4.append(n3, t3);
          return a4;
        }
        throw await Promise.resolve(), D(this[p]), A.errors.exception({ header: `${e3.name}.formData`, message: "Could not parse content as FormData." });
      } };
    }
    async function O(e3, a3, n3) {
      if (A.brandCheck(e3, n3), D(e3[p]), null != (t3 = e3[p].body) && (t3.stream.locked || s2.isDisturbed(t3.stream))) throw new TypeError("Body is unusable");
      var t3;
      const o3 = d(), r3 = (e4) => o3.reject(e4), i3 = (e4) => {
        try {
          o3.resolve(a3(e4));
        } catch (e5) {
          r3(e5);
        }
      };
      return null == e3[p].body ? (i3(new Uint8Array()), o3.promise) : (await m(e3[p].body, i3, r3), o3.promise);
    }
    function U(e3) {
      if (0 === e3.length) return "";
      239 === e3[0] && 187 === e3[1] && 191 === e3[2] && (e3 = e3.subarray(3));
      return w.decode(e3);
    }
    function F(e3) {
      return JSON.parse(U(e3));
    }
    e2.exports = { extractBody: b, safelyExtractBody: function(e3, a3 = false) {
      return R || (R = n2(3774).ReadableStream), e3 instanceof R && (_(!s2.isDisturbed(e3), "The body has already been consumed."), _(!e3.locked, "The stream is locked.")), b(e3, a3);
    }, cloneBody: function(e3) {
      const [a3, n3] = e3.stream.tee(), t3 = g(n3, { transfer: [n3] }), [, s3] = t3.tee();
      return e3.stream = a3, { stream: s3, length: e3.length, source: e3.source };
    }, mixinBody: function(e3) {
      Object.assign(e3.prototype, M(e3));
    } };
  }