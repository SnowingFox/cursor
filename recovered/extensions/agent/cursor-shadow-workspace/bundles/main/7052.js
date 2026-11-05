// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 7052 range:514815..523252
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7052: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(6333), r2 = t2(9361), { ReadableStreamFrom: o2, isBlobLike: s, isReadableStreamLike: a, readableStreamClose: i, createDeferredPromise: c, fullyReadBody: l } = t2(5728), { FormData: g } = t2(1606), { kState: E } = t2(5899), { webidl: u } = t2(8005), { DOMException: d, structuredClone: I } = t2(6687), { Blob: h, File: Q } = t2(181), { kBodyUsed: m } = t2(8832), C = t2(2613), { isErrored: B } = t2(9361), { isUint8Array: p, isArrayBuffer: f } = t2(8253), { File: y } = t2(3322), { parseMIMEType: T, serializeAMimeType: k } = t2(3631);
    let w;
    try {
      const e3 = t2(7598);
      w = (A3) => e3.randomInt(0, A3);
    } catch {
      w = (e3) => Math.floor(Math.random(e3));
    }
    let N = globalThis.ReadableStream;
    const D = Q ?? y, R = new TextEncoder(), S = new TextDecoder();
    function b(e3, A3 = false) {
      N || (N = t2(3774).ReadableStream);
      let n3 = null;
      n3 = e3 instanceof N ? e3 : s(e3) ? e3.stream() : new N({ async pull(e4) {
        e4.enqueue("string" == typeof l2 ? R.encode(l2) : l2), queueMicrotask(() => i(e4));
      }, start() {
      }, type: void 0 }), C(a(n3));
      let c2 = null, l2 = null, g2 = null, E2 = null;
      if ("string" == typeof e3) l2 = e3, E2 = "text/plain;charset=UTF-8";
      else if (e3 instanceof URLSearchParams) l2 = e3.toString(), E2 = "application/x-www-form-urlencoded;charset=UTF-8";
      else if (f(e3)) l2 = new Uint8Array(e3.slice());
      else if (ArrayBuffer.isView(e3)) l2 = new Uint8Array(e3.buffer.slice(e3.byteOffset, e3.byteOffset + e3.byteLength));
      else if (r2.isFormDataLike(e3)) {
        const A4 = `----formdata-undici-0${`${w(1e11)}`.padStart(11, "0")}`, t3 = `--${A4}\r
Content-Disposition: form-data`, n4 = (e4) => e4.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), r3 = (e4) => e4.replace(/\r?\n|\r/g, "\r\n"), o3 = [], s2 = new Uint8Array([13, 10]);
        g2 = 0;
        let a2 = false;
        for (const [A5, i3] of e3) if ("string" == typeof i3) {
          const e4 = R.encode(t3 + `; name="${n4(r3(A5))}"\r
\r
${r3(i3)}\r
`);
          o3.push(e4), g2 += e4.byteLength;
        } else {
          const e4 = R.encode(`${t3}; name="${n4(r3(A5))}"` + (i3.name ? `; filename="${n4(i3.name)}"` : "") + `\r
Content-Type: ${i3.type || "application/octet-stream"}\r
\r
`);
          o3.push(e4, i3, s2), "number" == typeof i3.size ? g2 += e4.byteLength + i3.size + s2.byteLength : a2 = true;
        }
        const i2 = R.encode(`--${A4}--`);
        o3.push(i2), g2 += i2.byteLength, a2 && (g2 = null), l2 = e3, c2 = async function* () {
          for (const e4 of o3) e4.stream ? yield* e4.stream() : yield e4;
        }, E2 = "multipart/form-data; boundary=" + A4;
      } else if (s(e3)) l2 = e3, g2 = e3.size, e3.type && (E2 = e3.type);
      else if ("function" == typeof e3[Symbol.asyncIterator]) {
        if (A3) throw new TypeError("keepalive");
        if (r2.isDisturbed(e3) || e3.locked) throw new TypeError("Response body object should not be disturbed or locked");
        n3 = e3 instanceof N ? e3 : o2(e3);
      }
      if (("string" == typeof l2 || r2.isBuffer(l2)) && (g2 = Buffer.byteLength(l2)), null != c2) {
        let A4;
        n3 = new N({ async start() {
          A4 = c2(e3)[Symbol.asyncIterator]();
        }, async pull(e4) {
          const { value: t3, done: r3 } = await A4.next();
          return r3 ? queueMicrotask(() => {
            e4.close();
          }) : B(n3) || e4.enqueue(new Uint8Array(t3)), e4.desiredSize > 0;
        }, async cancel(e4) {
          await A4.return();
        }, type: void 0 });
      }
      return [{ stream: n3, source: l2, length: g2 }, E2];
    }
    async function* F(e3) {
      if (e3) if (p(e3)) yield e3;
      else {
        const A3 = e3.stream;
        if (r2.isDisturbed(A3)) throw new TypeError("The body has already been consumed.");
        if (A3.locked) throw new TypeError("The stream is locked.");
        A3[m] = true, yield* A3;
      }
    }
    function _(e3) {
      if (e3.aborted) throw new d("The operation was aborted.", "AbortError");
    }
    function v(e3) {
      return { blob() {
        return L(this, (e4) => {
          let A3 = (function(e5) {
            const { headersList: A4 } = e5[E], t3 = A4.get("content-type");
            if (null === t3) return "failure";
            return T(t3);
          })(this);
          return "failure" === A3 ? A3 = "" : A3 && (A3 = k(A3)), new h([e4], { type: A3 });
        }, e3);
      }, arrayBuffer() {
        return L(this, (e4) => new Uint8Array(e4).buffer, e3);
      }, text() {
        return L(this, U, e3);
      }, json() {
        return L(this, M, e3);
      }, async formData() {
        u.brandCheck(this, e3), _(this[E]);
        const A3 = this.headers.get("Content-Type");
        if (/multipart\/form-data/.test(A3)) {
          const e4 = {};
          for (const [A5, t4] of this.headers) e4[A5.toLowerCase()] = t4;
          const A4 = new g();
          let t3;
          try {
            t3 = new n2({ headers: e4, preservePath: true });
          } catch (e5) {
            throw new d(`${e5}`, "AbortError");
          }
          t3.on("field", (e5, t4) => {
            A4.append(e5, t4);
          }), t3.on("file", (e5, t4, n3, r4, o3) => {
            const s2 = [];
            if ("base64" === r4 || "base64" === r4.toLowerCase()) {
              let r5 = "";
              t4.on("data", (e6) => {
                r5 += e6.toString().replace(/[\r\n]/gm, "");
                const A5 = r5.length - r5.length % 4;
                s2.push(Buffer.from(r5.slice(0, A5), "base64")), r5 = r5.slice(A5);
              }), t4.on("end", () => {
                s2.push(Buffer.from(r5, "base64")), A4.append(e5, new D(s2, n3, { type: o3 }));
              });
            } else t4.on("data", (e6) => {
              s2.push(e6);
            }), t4.on("end", () => {
              A4.append(e5, new D(s2, n3, { type: o3 }));
            });
          });
          const r3 = new Promise((e5, A5) => {
            t3.on("finish", e5), t3.on("error", (e6) => A5(new TypeError(e6)));
          });
          if (null !== this.body) for await (const e5 of F(this[E].body)) t3.write(e5);
          return t3.end(), await r3, A4;
        }
        if (/application\/x-www-form-urlencoded/.test(A3)) {
          let e4;
          try {
            let A5 = "";
            const t3 = new TextDecoder("utf-8", { ignoreBOM: true });
            for await (const e5 of F(this[E].body)) {
              if (!p(e5)) throw new TypeError("Expected Uint8Array chunk");
              A5 += t3.decode(e5, { stream: true });
            }
            A5 += t3.decode(), e4 = new URLSearchParams(A5);
          } catch (e5) {
            throw Object.assign(new TypeError(), { cause: e5 });
          }
          const A4 = new g();
          for (const [t3, n3] of e4) A4.append(t3, n3);
          return A4;
        }
        throw await Promise.resolve(), _(this[E]), u.errors.exception({ header: `${e3.name}.formData`, message: "Could not parse content as FormData." });
      } };
    }
    async function L(e3, A3, t3) {
      if (u.brandCheck(e3, t3), _(e3[E]), null != (n3 = e3[E].body) && (n3.stream.locked || r2.isDisturbed(n3.stream))) throw new TypeError("Body is unusable");
      var n3;
      const o3 = c(), s2 = (e4) => o3.reject(e4), a2 = (e4) => {
        try {
          o3.resolve(A3(e4));
        } catch (e5) {
          s2(e5);
        }
      };
      return null == e3[E].body ? (a2(new Uint8Array()), o3.promise) : (await l(e3[E].body, a2, s2), o3.promise);
    }
    function U(e3) {
      if (0 === e3.length) return "";
      239 === e3[0] && 187 === e3[1] && 191 === e3[2] && (e3 = e3.subarray(3));
      return S.decode(e3);
    }
    function M(e3) {
      return JSON.parse(U(e3));
    }
    e2.exports = { extractBody: b, safelyExtractBody: function(e3, A3 = false) {
      return N || (N = t2(3774).ReadableStream), e3 instanceof N && (C(!r2.isDisturbed(e3), "The body has already been consumed."), C(!e3.locked, "The stream is locked.")), b(e3, A3);
    }, cloneBody: function(e3) {
      const [A3, t3] = e3.stream.tee(), n3 = I(t3, { transfer: [t3] }), [, r3] = n3.tee();
      return e3.stream = A3, { stream: r3, length: e3.length, source: e3.source };
    }, mixinBody: function(e3) {
      Object.assign(e3.prototype, v(e3));
    } };
  }