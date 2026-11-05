// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 7052 range:546141..554578
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7052: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(6333), s2 = t2(9361), { ReadableStreamFrom: o2, isBlobLike: r, isReadableStreamLike: i, readableStreamClose: A, createDeferredPromise: c, fullyReadBody: l } = t2(5728), { FormData: d } = t2(1606), { kState: m } = t2(5899), { webidl: u } = t2(8005), { DOMException: g, structuredClone: p } = t2(6687), { Blob: E, File: h } = t2(181), { kBodyUsed: T } = t2(8832), k = t2(2613), { isErrored: f } = t2(9361), { isUint8Array: _, isArrayBuffer: I } = t2(8253), { File: C } = t2(3322), { parseMIMEType: y, serializeAMimeType: B } = t2(3631);
    let Q;
    try {
      const e3 = t2(7598);
      Q = (n3) => e3.randomInt(0, n3);
    } catch {
      Q = (e3) => Math.floor(Math.random(e3));
    }
    let v = globalThis.ReadableStream;
    const R = h ?? C, N = new TextEncoder(), S = new TextDecoder();
    function w(e3, n3 = false) {
      v || (v = t2(3774).ReadableStream);
      let a3 = null;
      a3 = e3 instanceof v ? e3 : r(e3) ? e3.stream() : new v({ async pull(e4) {
        e4.enqueue("string" == typeof l2 ? N.encode(l2) : l2), queueMicrotask(() => A(e4));
      }, start() {
      }, type: void 0 }), k(i(a3));
      let c2 = null, l2 = null, d2 = null, m2 = null;
      if ("string" == typeof e3) l2 = e3, m2 = "text/plain;charset=UTF-8";
      else if (e3 instanceof URLSearchParams) l2 = e3.toString(), m2 = "application/x-www-form-urlencoded;charset=UTF-8";
      else if (I(e3)) l2 = new Uint8Array(e3.slice());
      else if (ArrayBuffer.isView(e3)) l2 = new Uint8Array(e3.buffer.slice(e3.byteOffset, e3.byteOffset + e3.byteLength));
      else if (s2.isFormDataLike(e3)) {
        const n4 = `----formdata-undici-0${`${Q(1e11)}`.padStart(11, "0")}`, t3 = `--${n4}\r
Content-Disposition: form-data`, a4 = (e4) => e4.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), s3 = (e4) => e4.replace(/\r?\n|\r/g, "\r\n"), o3 = [], r2 = new Uint8Array([13, 10]);
        d2 = 0;
        let i2 = false;
        for (const [n5, A3] of e3) if ("string" == typeof A3) {
          const e4 = N.encode(t3 + `; name="${a4(s3(n5))}"\r
\r
${s3(A3)}\r
`);
          o3.push(e4), d2 += e4.byteLength;
        } else {
          const e4 = N.encode(`${t3}; name="${a4(s3(n5))}"` + (A3.name ? `; filename="${a4(A3.name)}"` : "") + `\r
Content-Type: ${A3.type || "application/octet-stream"}\r
\r
`);
          o3.push(e4, A3, r2), "number" == typeof A3.size ? d2 += e4.byteLength + A3.size + r2.byteLength : i2 = true;
        }
        const A2 = N.encode(`--${n4}--`);
        o3.push(A2), d2 += A2.byteLength, i2 && (d2 = null), l2 = e3, c2 = async function* () {
          for (const e4 of o3) e4.stream ? yield* e4.stream() : yield e4;
        }, m2 = "multipart/form-data; boundary=" + n4;
      } else if (r(e3)) l2 = e3, d2 = e3.size, e3.type && (m2 = e3.type);
      else if ("function" == typeof e3[Symbol.asyncIterator]) {
        if (n3) throw new TypeError("keepalive");
        if (s2.isDisturbed(e3) || e3.locked) throw new TypeError("Response body object should not be disturbed or locked");
        a3 = e3 instanceof v ? e3 : o2(e3);
      }
      if (("string" == typeof l2 || s2.isBuffer(l2)) && (d2 = Buffer.byteLength(l2)), null != c2) {
        let n4;
        a3 = new v({ async start() {
          n4 = c2(e3)[Symbol.asyncIterator]();
        }, async pull(e4) {
          const { value: t3, done: s3 } = await n4.next();
          return s3 ? queueMicrotask(() => {
            e4.close();
          }) : f(a3) || e4.enqueue(new Uint8Array(t3)), e4.desiredSize > 0;
        }, async cancel(e4) {
          await n4.return();
        }, type: void 0 });
      }
      return [{ stream: a3, source: l2, length: d2 }, m2];
    }
    async function* b(e3) {
      if (e3) if (_(e3)) yield e3;
      else {
        const n3 = e3.stream;
        if (s2.isDisturbed(n3)) throw new TypeError("The body has already been consumed.");
        if (n3.locked) throw new TypeError("The stream is locked.");
        n3[T] = true, yield* n3;
      }
    }
    function D(e3) {
      if (e3.aborted) throw new g("The operation was aborted.", "AbortError");
    }
    function M(e3) {
      return { blob() {
        return F(this, (e4) => {
          let n3 = (function(e5) {
            const { headersList: n4 } = e5[m], t3 = n4.get("content-type");
            if (null === t3) return "failure";
            return y(t3);
          })(this);
          return "failure" === n3 ? n3 = "" : n3 && (n3 = B(n3)), new E([e4], { type: n3 });
        }, e3);
      }, arrayBuffer() {
        return F(this, (e4) => new Uint8Array(e4).buffer, e3);
      }, text() {
        return F(this, O, e3);
      }, json() {
        return F(this, U, e3);
      }, async formData() {
        u.brandCheck(this, e3), D(this[m]);
        const n3 = this.headers.get("Content-Type");
        if (/multipart\/form-data/.test(n3)) {
          const e4 = {};
          for (const [n5, t4] of this.headers) e4[n5.toLowerCase()] = t4;
          const n4 = new d();
          let t3;
          try {
            t3 = new a2({ headers: e4, preservePath: true });
          } catch (e5) {
            throw new g(`${e5}`, "AbortError");
          }
          t3.on("field", (e5, t4) => {
            n4.append(e5, t4);
          }), t3.on("file", (e5, t4, a3, s4, o3) => {
            const r2 = [];
            if ("base64" === s4 || "base64" === s4.toLowerCase()) {
              let s5 = "";
              t4.on("data", (e6) => {
                s5 += e6.toString().replace(/[\r\n]/gm, "");
                const n5 = s5.length - s5.length % 4;
                r2.push(Buffer.from(s5.slice(0, n5), "base64")), s5 = s5.slice(n5);
              }), t4.on("end", () => {
                r2.push(Buffer.from(s5, "base64")), n4.append(e5, new R(r2, a3, { type: o3 }));
              });
            } else t4.on("data", (e6) => {
              r2.push(e6);
            }), t4.on("end", () => {
              n4.append(e5, new R(r2, a3, { type: o3 }));
            });
          });
          const s3 = new Promise((e5, n5) => {
            t3.on("finish", e5), t3.on("error", (e6) => n5(new TypeError(e6)));
          });
          if (null !== this.body) for await (const e5 of b(this[m].body)) t3.write(e5);
          return t3.end(), await s3, n4;
        }
        if (/application\/x-www-form-urlencoded/.test(n3)) {
          let e4;
          try {
            let n5 = "";
            const t3 = new TextDecoder("utf-8", { ignoreBOM: true });
            for await (const e5 of b(this[m].body)) {
              if (!_(e5)) throw new TypeError("Expected Uint8Array chunk");
              n5 += t3.decode(e5, { stream: true });
            }
            n5 += t3.decode(), e4 = new URLSearchParams(n5);
          } catch (e5) {
            throw Object.assign(new TypeError(), { cause: e5 });
          }
          const n4 = new d();
          for (const [t3, a3] of e4) n4.append(t3, a3);
          return n4;
        }
        throw await Promise.resolve(), D(this[m]), u.errors.exception({ header: `${e3.name}.formData`, message: "Could not parse content as FormData." });
      } };
    }
    async function F(e3, n3, t3) {
      if (u.brandCheck(e3, t3), D(e3[m]), null != (a3 = e3[m].body) && (a3.stream.locked || s2.isDisturbed(a3.stream))) throw new TypeError("Body is unusable");
      var a3;
      const o3 = c(), r2 = (e4) => o3.reject(e4), i2 = (e4) => {
        try {
          o3.resolve(n3(e4));
        } catch (e5) {
          r2(e5);
        }
      };
      return null == e3[m].body ? (i2(new Uint8Array()), o3.promise) : (await l(e3[m].body, i2, r2), o3.promise);
    }
    function O(e3) {
      if (0 === e3.length) return "";
      239 === e3[0] && 187 === e3[1] && 191 === e3[2] && (e3 = e3.subarray(3));
      return S.decode(e3);
    }
    function U(e3) {
      return JSON.parse(O(e3));
    }
    e2.exports = { extractBody: w, safelyExtractBody: function(e3, n3 = false) {
      return v || (v = t2(3774).ReadableStream), e3 instanceof v && (k(!s2.isDisturbed(e3), "The body has already been consumed."), k(!e3.locked, "The stream is locked.")), w(e3, n3);
    }, cloneBody: function(e3) {
      const [n3, t3] = e3.stream.tee(), a3 = p(t3, { transfer: [t3] }), [, s3] = a3.tee();
      return e3.stream = n3, { stream: s3, length: e3.length, source: e3.source };
    }, mixinBody: function(e3) {
      Object.assign(e3.prototype, M(e3));
    } };
  }