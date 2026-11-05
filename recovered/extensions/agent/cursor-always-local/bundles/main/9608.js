// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9608 range:6167906..6176346
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9608: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(3097), s2 = r2(3589), { ReadableStreamFrom: i2, isBlobLike: o2, isReadableStreamLike: a, readableStreamClose: u, createDeferredPromise: c, fullyReadBody: l } = r2(8116), { FormData: m } = r2(6522), { kState: d } = r2(7271), { webidl: f } = r2(8193), { DOMException: p, structuredClone: h } = r2(2955), { Blob: g, File: A } = r2(181), { kBodyUsed: _ } = r2(5532), y = r2(2613), { isErrored: w } = r2(3589), { isUint8Array: S, isArrayBuffer: J } = r2(8253), { File: B } = r2(8142), { parseMIMEType: E, serializeAMimeType: I } = r2(4387);
    let C;
    try {
      const t3 = r2(7598);
      C = (e3) => t3.randomInt(0, e3);
    } catch {
      C = (t3) => Math.floor(Math.random(t3));
    }
    let b = globalThis.ReadableStream;
    const k = A ?? B, v = new TextEncoder(), q = new TextDecoder();
    function R(t3, e3 = false) {
      b || (b = r2(3774).ReadableStream);
      let n3 = null;
      n3 = t3 instanceof b ? t3 : o2(t3) ? t3.stream() : new b({ async pull(t4) {
        t4.enqueue("string" == typeof l2 ? v.encode(l2) : l2), queueMicrotask(() => u(t4));
      }, start() {
      }, type: void 0 }), y(a(n3));
      let c2 = null, l2 = null, m2 = null, d2 = null;
      if ("string" == typeof t3) l2 = t3, d2 = "text/plain;charset=UTF-8";
      else if (t3 instanceof URLSearchParams) l2 = t3.toString(), d2 = "application/x-www-form-urlencoded;charset=UTF-8";
      else if (J(t3)) l2 = new Uint8Array(t3.slice());
      else if (ArrayBuffer.isView(t3)) l2 = new Uint8Array(t3.buffer.slice(t3.byteOffset, t3.byteOffset + t3.byteLength));
      else if (s2.isFormDataLike(t3)) {
        const e4 = `----formdata-undici-0${`${C(1e11)}`.padStart(11, "0")}`, r3 = `--${e4}\r
Content-Disposition: form-data`, n4 = (t4) => t4.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), s3 = (t4) => t4.replace(/\r?\n|\r/g, "\r\n"), i3 = [], o3 = new Uint8Array([13, 10]);
        m2 = 0;
        let a2 = false;
        for (const [e5, u3] of t3) if ("string" == typeof u3) {
          const t4 = v.encode(r3 + `; name="${n4(s3(e5))}"\r
\r
${s3(u3)}\r
`);
          i3.push(t4), m2 += t4.byteLength;
        } else {
          const t4 = v.encode(`${r3}; name="${n4(s3(e5))}"` + (u3.name ? `; filename="${n4(u3.name)}"` : "") + `\r
Content-Type: ${u3.type || "application/octet-stream"}\r
\r
`);
          i3.push(t4, u3, o3), "number" == typeof u3.size ? m2 += t4.byteLength + u3.size + o3.byteLength : a2 = true;
        }
        const u2 = v.encode(`--${e4}--`);
        i3.push(u2), m2 += u2.byteLength, a2 && (m2 = null), l2 = t3, c2 = async function* () {
          for (const t4 of i3) t4.stream ? yield* t4.stream() : yield t4;
        }, d2 = "multipart/form-data; boundary=" + e4;
      } else if (o2(t3)) l2 = t3, m2 = t3.size, t3.type && (d2 = t3.type);
      else if ("function" == typeof t3[Symbol.asyncIterator]) {
        if (e3) throw new TypeError("keepalive");
        if (s2.isDisturbed(t3) || t3.locked) throw new TypeError("Response body object should not be disturbed or locked");
        n3 = t3 instanceof b ? t3 : i2(t3);
      }
      if (("string" == typeof l2 || s2.isBuffer(l2)) && (m2 = Buffer.byteLength(l2)), null != c2) {
        let e4;
        n3 = new b({ async start() {
          e4 = c2(t3)[Symbol.asyncIterator]();
        }, async pull(t4) {
          const { value: r3, done: s3 } = await e4.next();
          return s3 ? queueMicrotask(() => {
            t4.close();
          }) : w(n3) || t4.enqueue(new Uint8Array(r3)), t4.desiredSize > 0;
        }, async cancel(t4) {
          await e4.return();
        }, type: void 0 });
      }
      return [{ stream: n3, source: l2, length: m2 }, d2];
    }
    async function* P(t3) {
      if (t3) if (S(t3)) yield t3;
      else {
        const e3 = t3.stream;
        if (s2.isDisturbed(e3)) throw new TypeError("The body has already been consumed.");
        if (e3.locked) throw new TypeError("The stream is locked.");
        e3[_] = true, yield* e3;
      }
    }
    function T(t3) {
      if (t3.aborted) throw new p("The operation was aborted.", "AbortError");
    }
    function x(t3) {
      return { blob() {
        return N(this, (t4) => {
          let e3 = (function(t5) {
            const { headersList: e4 } = t5[d], r3 = e4.get("content-type");
            if (null === r3) return "failure";
            return E(r3);
          })(this);
          return "failure" === e3 ? e3 = "" : e3 && (e3 = I(e3)), new g([t4], { type: e3 });
        }, t3);
      }, arrayBuffer() {
        return N(this, (t4) => new Uint8Array(t4).buffer, t3);
      }, text() {
        return N(this, D, t3);
      }, json() {
        return N(this, U, t3);
      }, async formData() {
        f.brandCheck(this, t3), T(this[d]);
        const e3 = this.headers.get("Content-Type");
        if (/multipart\/form-data/.test(e3)) {
          const t4 = {};
          for (const [e5, r4] of this.headers) t4[e5.toLowerCase()] = r4;
          const e4 = new m();
          let r3;
          try {
            r3 = new n2({ headers: t4, preservePath: true });
          } catch (t5) {
            throw new p(`${t5}`, "AbortError");
          }
          r3.on("field", (t5, r4) => {
            e4.append(t5, r4);
          }), r3.on("file", (t5, r4, n3, s4, i3) => {
            const o3 = [];
            if ("base64" === s4 || "base64" === s4.toLowerCase()) {
              let s5 = "";
              r4.on("data", (t6) => {
                s5 += t6.toString().replace(/[\r\n]/gm, "");
                const e5 = s5.length - s5.length % 4;
                o3.push(Buffer.from(s5.slice(0, e5), "base64")), s5 = s5.slice(e5);
              }), r4.on("end", () => {
                o3.push(Buffer.from(s5, "base64")), e4.append(t5, new k(o3, n3, { type: i3 }));
              });
            } else r4.on("data", (t6) => {
              o3.push(t6);
            }), r4.on("end", () => {
              e4.append(t5, new k(o3, n3, { type: i3 }));
            });
          });
          const s3 = new Promise((t5, e5) => {
            r3.on("finish", t5), r3.on("error", (t6) => e5(new TypeError(t6)));
          });
          if (null !== this.body) for await (const t5 of P(this[d].body)) r3.write(t5);
          return r3.end(), await s3, e4;
        }
        if (/application\/x-www-form-urlencoded/.test(e3)) {
          let t4;
          try {
            let e5 = "";
            const r3 = new TextDecoder("utf-8", { ignoreBOM: true });
            for await (const t5 of P(this[d].body)) {
              if (!S(t5)) throw new TypeError("Expected Uint8Array chunk");
              e5 += r3.decode(t5, { stream: true });
            }
            e5 += r3.decode(), t4 = new URLSearchParams(e5);
          } catch (t5) {
            throw Object.assign(new TypeError(), { cause: t5 });
          }
          const e4 = new m();
          for (const [r3, n3] of t4) e4.append(r3, n3);
          return e4;
        }
        throw await Promise.resolve(), T(this[d]), f.errors.exception({ header: `${t3.name}.formData`, message: "Could not parse content as FormData." });
      } };
    }
    async function N(t3, e3, r3) {
      if (f.brandCheck(t3, r3), T(t3[d]), null != (n3 = t3[d].body) && (n3.stream.locked || s2.isDisturbed(n3.stream))) throw new TypeError("Body is unusable");
      var n3;
      const i3 = c(), o3 = (t4) => i3.reject(t4), a2 = (t4) => {
        try {
          i3.resolve(e3(t4));
        } catch (t5) {
          o3(t5);
        }
      };
      return null == t3[d].body ? (a2(new Uint8Array()), i3.promise) : (await l(t3[d].body, a2, o3), i3.promise);
    }
    function D(t3) {
      if (0 === t3.length) return "";
      239 === t3[0] && 187 === t3[1] && 191 === t3[2] && (t3 = t3.subarray(3));
      return q.decode(t3);
    }
    function U(t3) {
      return JSON.parse(D(t3));
    }
    t2.exports = { extractBody: R, safelyExtractBody: function(t3, e3 = false) {
      return b || (b = r2(3774).ReadableStream), t3 instanceof b && (y(!s2.isDisturbed(t3), "The body has already been consumed."), y(!t3.locked, "The stream is locked.")), R(t3, e3);
    }, cloneBody: function(t3) {
      const [e3, r3] = t3.stream.tee(), n3 = h(r3, { transfer: [r3] }), [, s3] = n3.tee();
      return t3.stream = e3, { stream: s3, length: t3.length, source: t3.source };
    }, mixinBody: function(t3) {
      Object.assign(t3.prototype, x(t3));
    } };
  }