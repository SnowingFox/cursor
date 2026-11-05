// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7052 range:626337..634774
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7052: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(6333), r2 = A2(9361), { ReadableStreamFrom: o2, isBlobLike: s, isReadableStreamLike: i, readableStreamClose: a, createDeferredPromise: c, fullyReadBody: l } = A2(5728), { FormData: u } = A2(1606), { kState: g } = A2(5899), { webidl: E } = A2(8005), { DOMException: h, structuredClone: d } = A2(6687), { Blob: I, File: B } = A2(181), { kBodyUsed: Q } = A2(8832), f = A2(2613), { isErrored: C } = A2(9361), { isUint8Array: p, isArrayBuffer: m } = A2(8253), { File: y } = A2(3322), { parseMIMEType: w, serializeAMimeType: k } = A2(3631);
    let b;
    try {
      const e3 = A2(7598);
      b = (t3) => e3.randomInt(0, t3);
    } catch {
      b = (e3) => Math.floor(Math.random(e3));
    }
    let N = globalThis.ReadableStream;
    const T = B ?? y, D = new TextEncoder(), S = new TextDecoder();
    function R(e3, t3 = false) {
      N || (N = A2(3774).ReadableStream);
      let n3 = null;
      n3 = e3 instanceof N ? e3 : s(e3) ? e3.stream() : new N({ async pull(e4) {
        e4.enqueue("string" == typeof l2 ? D.encode(l2) : l2), queueMicrotask(() => a(e4));
      }, start() {
      }, type: void 0 }), f(i(n3));
      let c2 = null, l2 = null, u2 = null, g2 = null;
      if ("string" == typeof e3) l2 = e3, g2 = "text/plain;charset=UTF-8";
      else if (e3 instanceof URLSearchParams) l2 = e3.toString(), g2 = "application/x-www-form-urlencoded;charset=UTF-8";
      else if (m(e3)) l2 = new Uint8Array(e3.slice());
      else if (ArrayBuffer.isView(e3)) l2 = new Uint8Array(e3.buffer.slice(e3.byteOffset, e3.byteOffset + e3.byteLength));
      else if (r2.isFormDataLike(e3)) {
        const t4 = `----formdata-undici-0${`${b(1e11)}`.padStart(11, "0")}`, A3 = `--${t4}\r
Content-Disposition: form-data`, n4 = (e4) => e4.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), r3 = (e4) => e4.replace(/\r?\n|\r/g, "\r\n"), o3 = [], s2 = new Uint8Array([13, 10]);
        u2 = 0;
        let i2 = false;
        for (const [t5, a3] of e3) if ("string" == typeof a3) {
          const e4 = D.encode(A3 + `; name="${n4(r3(t5))}"\r
\r
${r3(a3)}\r
`);
          o3.push(e4), u2 += e4.byteLength;
        } else {
          const e4 = D.encode(`${A3}; name="${n4(r3(t5))}"` + (a3.name ? `; filename="${n4(a3.name)}"` : "") + `\r
Content-Type: ${a3.type || "application/octet-stream"}\r
\r
`);
          o3.push(e4, a3, s2), "number" == typeof a3.size ? u2 += e4.byteLength + a3.size + s2.byteLength : i2 = true;
        }
        const a2 = D.encode(`--${t4}--`);
        o3.push(a2), u2 += a2.byteLength, i2 && (u2 = null), l2 = e3, c2 = async function* () {
          for (const e4 of o3) e4.stream ? yield* e4.stream() : yield e4;
        }, g2 = "multipart/form-data; boundary=" + t4;
      } else if (s(e3)) l2 = e3, u2 = e3.size, e3.type && (g2 = e3.type);
      else if ("function" == typeof e3[Symbol.asyncIterator]) {
        if (t3) throw new TypeError("keepalive");
        if (r2.isDisturbed(e3) || e3.locked) throw new TypeError("Response body object should not be disturbed or locked");
        n3 = e3 instanceof N ? e3 : o2(e3);
      }
      if (("string" == typeof l2 || r2.isBuffer(l2)) && (u2 = Buffer.byteLength(l2)), null != c2) {
        let t4;
        n3 = new N({ async start() {
          t4 = c2(e3)[Symbol.asyncIterator]();
        }, async pull(e4) {
          const { value: A3, done: r3 } = await t4.next();
          return r3 ? queueMicrotask(() => {
            e4.close();
          }) : C(n3) || e4.enqueue(new Uint8Array(A3)), e4.desiredSize > 0;
        }, async cancel(e4) {
          await t4.return();
        }, type: void 0 });
      }
      return [{ stream: n3, source: l2, length: u2 }, g2];
    }
    async function* F(e3) {
      if (e3) if (p(e3)) yield e3;
      else {
        const t3 = e3.stream;
        if (r2.isDisturbed(t3)) throw new TypeError("The body has already been consumed.");
        if (t3.locked) throw new TypeError("The stream is locked.");
        t3[Q] = true, yield* t3;
      }
    }
    function v(e3) {
      if (e3.aborted) throw new h("The operation was aborted.", "AbortError");
    }
    function M(e3) {
      return { blob() {
        return U(this, (e4) => {
          let t3 = (function(e5) {
            const { headersList: t4 } = e5[g], A3 = t4.get("content-type");
            if (null === A3) return "failure";
            return w(A3);
          })(this);
          return "failure" === t3 ? t3 = "" : t3 && (t3 = k(t3)), new I([e4], { type: t3 });
        }, e3);
      }, arrayBuffer() {
        return U(this, (e4) => new Uint8Array(e4).buffer, e3);
      }, text() {
        return U(this, L, e3);
      }, json() {
        return U(this, _, e3);
      }, async formData() {
        E.brandCheck(this, e3), v(this[g]);
        const t3 = this.headers.get("Content-Type");
        if (/multipart\/form-data/.test(t3)) {
          const e4 = {};
          for (const [t5, A4] of this.headers) e4[t5.toLowerCase()] = A4;
          const t4 = new u();
          let A3;
          try {
            A3 = new n2({ headers: e4, preservePath: true });
          } catch (e5) {
            throw new h(`${e5}`, "AbortError");
          }
          A3.on("field", (e5, A4) => {
            t4.append(e5, A4);
          }), A3.on("file", (e5, A4, n3, r4, o3) => {
            const s2 = [];
            if ("base64" === r4 || "base64" === r4.toLowerCase()) {
              let r5 = "";
              A4.on("data", (e6) => {
                r5 += e6.toString().replace(/[\r\n]/gm, "");
                const t5 = r5.length - r5.length % 4;
                s2.push(Buffer.from(r5.slice(0, t5), "base64")), r5 = r5.slice(t5);
              }), A4.on("end", () => {
                s2.push(Buffer.from(r5, "base64")), t4.append(e5, new T(s2, n3, { type: o3 }));
              });
            } else A4.on("data", (e6) => {
              s2.push(e6);
            }), A4.on("end", () => {
              t4.append(e5, new T(s2, n3, { type: o3 }));
            });
          });
          const r3 = new Promise((e5, t5) => {
            A3.on("finish", e5), A3.on("error", (e6) => t5(new TypeError(e6)));
          });
          if (null !== this.body) for await (const e5 of F(this[g].body)) A3.write(e5);
          return A3.end(), await r3, t4;
        }
        if (/application\/x-www-form-urlencoded/.test(t3)) {
          let e4;
          try {
            let t5 = "";
            const A3 = new TextDecoder("utf-8", { ignoreBOM: true });
            for await (const e5 of F(this[g].body)) {
              if (!p(e5)) throw new TypeError("Expected Uint8Array chunk");
              t5 += A3.decode(e5, { stream: true });
            }
            t5 += A3.decode(), e4 = new URLSearchParams(t5);
          } catch (e5) {
            throw Object.assign(new TypeError(), { cause: e5 });
          }
          const t4 = new u();
          for (const [A3, n3] of e4) t4.append(A3, n3);
          return t4;
        }
        throw await Promise.resolve(), v(this[g]), E.errors.exception({ header: `${e3.name}.formData`, message: "Could not parse content as FormData." });
      } };
    }
    async function U(e3, t3, A3) {
      if (E.brandCheck(e3, A3), v(e3[g]), null != (n3 = e3[g].body) && (n3.stream.locked || r2.isDisturbed(n3.stream))) throw new TypeError("Body is unusable");
      var n3;
      const o3 = c(), s2 = (e4) => o3.reject(e4), i2 = (e4) => {
        try {
          o3.resolve(t3(e4));
        } catch (e5) {
          s2(e5);
        }
      };
      return null == e3[g].body ? (i2(new Uint8Array()), o3.promise) : (await l(e3[g].body, i2, s2), o3.promise);
    }
    function L(e3) {
      if (0 === e3.length) return "";
      239 === e3[0] && 187 === e3[1] && 191 === e3[2] && (e3 = e3.subarray(3));
      return S.decode(e3);
    }
    function _(e3) {
      return JSON.parse(L(e3));
    }
    e2.exports = { extractBody: R, safelyExtractBody: function(e3, t3 = false) {
      return N || (N = A2(3774).ReadableStream), e3 instanceof N && (f(!r2.isDisturbed(e3), "The body has already been consumed."), f(!e3.locked, "The stream is locked.")), R(e3, t3);
    }, cloneBody: function(e3) {
      const [t3, A3] = e3.stream.tee(), n3 = d(A3, { transfer: [A3] }), [, r3] = n3.tee();
      return e3.stream = t3, { stream: r3, length: e3.length, source: e3.source };
    }, mixinBody: function(e3) {
      Object.assign(e3.prototype, M(e3));
    } };
  }