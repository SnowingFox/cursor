// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 7052 range:515483..523925
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7052: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(6333), s2 = a2(9361), { ReadableStreamFrom: o2, isBlobLike: r2, isReadableStreamLike: i2, readableStreamClose: A, createDeferredPromise: l, fullyReadBody: c } = a2(5728), { FormData: m } = a2(1606), { kState: d } = a2(5899), { webidl: g } = a2(8005), { DOMException: u, structuredClone: E } = a2(6687), { Blob: p, File: T } = a2(181), { kBodyUsed: k } = a2(8832), I = a2(2613), { isErrored: h } = a2(9361), { isUint8Array: _, isArrayBuffer: C } = a2(8253), { File: f } = a2(3322), { parseMIMEType: B, serializeAMimeType: Q } = a2(3631);
    let y;
    try {
      const e3 = a2(7598);
      y = (n3) => e3.randomInt(0, n3);
    } catch {
      y = (e3) => Math.floor(Math.random(e3));
    }
    let R = globalThis.ReadableStream;
    const N = T ?? f, v = new TextEncoder(), S = new TextDecoder();
    function D(e3, n3 = false) {
      R || (R = a2(3774).ReadableStream);
      let t3 = null;
      t3 = e3 instanceof R ? e3 : r2(e3) ? e3.stream() : new R({ async pull(e4) {
        e4.enqueue("string" == typeof c2 ? v.encode(c2) : c2), queueMicrotask(() => A(e4));
      }, start() {
      }, type: void 0 }), I(i2(t3));
      let l2 = null, c2 = null, m2 = null, d2 = null;
      if ("string" == typeof e3) c2 = e3, d2 = "text/plain;charset=UTF-8";
      else if (e3 instanceof URLSearchParams) c2 = e3.toString(), d2 = "application/x-www-form-urlencoded;charset=UTF-8";
      else if (C(e3)) c2 = new Uint8Array(e3.slice());
      else if (ArrayBuffer.isView(e3)) c2 = new Uint8Array(e3.buffer.slice(e3.byteOffset, e3.byteOffset + e3.byteLength));
      else if (s2.isFormDataLike(e3)) {
        const n4 = `----formdata-undici-0${`${y(1e11)}`.padStart(11, "0")}`, a3 = `--${n4}\r
Content-Disposition: form-data`, t4 = (e4) => e4.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), s3 = (e4) => e4.replace(/\r?\n|\r/g, "\r\n"), o3 = [], r3 = new Uint8Array([13, 10]);
        m2 = 0;
        let i3 = false;
        for (const [n5, A3] of e3) if ("string" == typeof A3) {
          const e4 = v.encode(a3 + `; name="${t4(s3(n5))}"\r
\r
${s3(A3)}\r
`);
          o3.push(e4), m2 += e4.byteLength;
        } else {
          const e4 = v.encode(`${a3}; name="${t4(s3(n5))}"` + (A3.name ? `; filename="${t4(A3.name)}"` : "") + `\r
Content-Type: ${A3.type || "application/octet-stream"}\r
\r
`);
          o3.push(e4, A3, r3), "number" == typeof A3.size ? m2 += e4.byteLength + A3.size + r3.byteLength : i3 = true;
        }
        const A2 = v.encode(`--${n4}--`);
        o3.push(A2), m2 += A2.byteLength, i3 && (m2 = null), c2 = e3, l2 = async function* () {
          for (const e4 of o3) e4.stream ? yield* e4.stream() : yield e4;
        }, d2 = "multipart/form-data; boundary=" + n4;
      } else if (r2(e3)) c2 = e3, m2 = e3.size, e3.type && (d2 = e3.type);
      else if ("function" == typeof e3[Symbol.asyncIterator]) {
        if (n3) throw new TypeError("keepalive");
        if (s2.isDisturbed(e3) || e3.locked) throw new TypeError("Response body object should not be disturbed or locked");
        t3 = e3 instanceof R ? e3 : o2(e3);
      }
      if (("string" == typeof c2 || s2.isBuffer(c2)) && (m2 = Buffer.byteLength(c2)), null != l2) {
        let n4;
        t3 = new R({ async start() {
          n4 = l2(e3)[Symbol.asyncIterator]();
        }, async pull(e4) {
          const { value: a3, done: s3 } = await n4.next();
          return s3 ? queueMicrotask(() => {
            e4.close();
          }) : h(t3) || e4.enqueue(new Uint8Array(a3)), e4.desiredSize > 0;
        }, async cancel(e4) {
          await n4.return();
        }, type: void 0 });
      }
      return [{ stream: t3, source: c2, length: m2 }, d2];
    }
    async function* w(e3) {
      if (e3) if (_(e3)) yield e3;
      else {
        const n3 = e3.stream;
        if (s2.isDisturbed(n3)) throw new TypeError("The body has already been consumed.");
        if (n3.locked) throw new TypeError("The stream is locked.");
        n3[k] = true, yield* n3;
      }
    }
    function b(e3) {
      if (e3.aborted) throw new u("The operation was aborted.", "AbortError");
    }
    function M(e3) {
      return { blob() {
        return F(this, (e4) => {
          let n3 = (function(e5) {
            const { headersList: n4 } = e5[d], a3 = n4.get("content-type");
            if (null === a3) return "failure";
            return B(a3);
          })(this);
          return "failure" === n3 ? n3 = "" : n3 && (n3 = Q(n3)), new p([e4], { type: n3 });
        }, e3);
      }, arrayBuffer() {
        return F(this, (e4) => new Uint8Array(e4).buffer, e3);
      }, text() {
        return F(this, O, e3);
      }, json() {
        return F(this, U, e3);
      }, async formData() {
        g.brandCheck(this, e3), b(this[d]);
        const n3 = this.headers.get("Content-Type");
        if (/multipart\/form-data/.test(n3)) {
          const e4 = {};
          for (const [n5, a4] of this.headers) e4[n5.toLowerCase()] = a4;
          const n4 = new m();
          let a3;
          try {
            a3 = new t2({ headers: e4, preservePath: true });
          } catch (e5) {
            throw new u(`${e5}`, "AbortError");
          }
          a3.on("field", (e5, a4) => {
            n4.append(e5, a4);
          }), a3.on("file", (e5, a4, t3, s4, o3) => {
            const r3 = [];
            if ("base64" === s4 || "base64" === s4.toLowerCase()) {
              let s5 = "";
              a4.on("data", (e6) => {
                s5 += e6.toString().replace(/[\r\n]/gm, "");
                const n5 = s5.length - s5.length % 4;
                r3.push(Buffer.from(s5.slice(0, n5), "base64")), s5 = s5.slice(n5);
              }), a4.on("end", () => {
                r3.push(Buffer.from(s5, "base64")), n4.append(e5, new N(r3, t3, { type: o3 }));
              });
            } else a4.on("data", (e6) => {
              r3.push(e6);
            }), a4.on("end", () => {
              n4.append(e5, new N(r3, t3, { type: o3 }));
            });
          });
          const s3 = new Promise((e5, n5) => {
            a3.on("finish", e5), a3.on("error", (e6) => n5(new TypeError(e6)));
          });
          if (null !== this.body) for await (const e5 of w(this[d].body)) a3.write(e5);
          return a3.end(), await s3, n4;
        }
        if (/application\/x-www-form-urlencoded/.test(n3)) {
          let e4;
          try {
            let n5 = "";
            const a3 = new TextDecoder("utf-8", { ignoreBOM: true });
            for await (const e5 of w(this[d].body)) {
              if (!_(e5)) throw new TypeError("Expected Uint8Array chunk");
              n5 += a3.decode(e5, { stream: true });
            }
            n5 += a3.decode(), e4 = new URLSearchParams(n5);
          } catch (e5) {
            throw Object.assign(new TypeError(), { cause: e5 });
          }
          const n4 = new m();
          for (const [a3, t3] of e4) n4.append(a3, t3);
          return n4;
        }
        throw await Promise.resolve(), b(this[d]), g.errors.exception({ header: `${e3.name}.formData`, message: "Could not parse content as FormData." });
      } };
    }
    async function F(e3, n3, a3) {
      if (g.brandCheck(e3, a3), b(e3[d]), null != (t3 = e3[d].body) && (t3.stream.locked || s2.isDisturbed(t3.stream))) throw new TypeError("Body is unusable");
      var t3;
      const o3 = l(), r3 = (e4) => o3.reject(e4), i3 = (e4) => {
        try {
          o3.resolve(n3(e4));
        } catch (e5) {
          r3(e5);
        }
      };
      return null == e3[d].body ? (i3(new Uint8Array()), o3.promise) : (await c(e3[d].body, i3, r3), o3.promise);
    }
    function O(e3) {
      if (0 === e3.length) return "";
      239 === e3[0] && 187 === e3[1] && 191 === e3[2] && (e3 = e3.subarray(3));
      return S.decode(e3);
    }
    function U(e3) {
      return JSON.parse(O(e3));
    }
    e2.exports = { extractBody: D, safelyExtractBody: function(e3, n3 = false) {
      return R || (R = a2(3774).ReadableStream), e3 instanceof R && (I(!s2.isDisturbed(e3), "The body has already been consumed."), I(!e3.locked, "The stream is locked.")), D(e3, n3);
    }, cloneBody: function(e3) {
      const [n3, a3] = e3.stream.tee(), t3 = E(a3, { transfer: [a3] }), [, s3] = t3.tee();
      return e3.stream = n3, { stream: s3, length: e3.length, source: e3.source };
    }, mixinBody: function(e3) {
      Object.assign(e3.prototype, M(e3));
    } };
  }