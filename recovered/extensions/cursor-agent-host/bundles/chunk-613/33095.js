// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 33095 range:194434..200900
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33095: (A, e, t) => {
  "use strict";
  const r = t(55201), { ReadableStreamFrom: s, isBlobLike: o, isReadableStreamLike: n, readableStreamClose: i, createDeferredPromise: a, fullyReadBody: Q, extractMimeType: g, utf8DecodeBytes: E } = t(48215), { FormData: B } = t(41445), { kState: c } = t(15978), { webidl: I } = t(43290), { Blob: C } = t(4573), h = t(56970), { isErrored: l, isDisturbed: u } = t(57075), { isArrayBuffer: d } = t(73429), { serializeAMimeType: f } = t(52603), { multipartFormDataParser: w } = t(72893);
  let y;
  try {
    const A2 = t(77598);
    y = (e2) => A2.randomInt(0, e2);
  } catch {
    y = (A2) => Math.floor(Math.random(A2));
  }
  const D = new TextEncoder();
  function p() {
  }
  const k = globalThis.FinalizationRegistry && 0 !== process.version.indexOf("v18");
  let R;
  function F(A2, e2 = false) {
    let t2 = null;
    t2 = A2 instanceof ReadableStream ? A2 : o(A2) ? A2.stream() : new ReadableStream({ async pull(A3) {
      const e3 = "string" == typeof Q2 ? D.encode(Q2) : Q2;
      e3.byteLength && A3.enqueue(e3), queueMicrotask(() => i(A3));
    }, start() {
    }, type: "bytes" }), h(n(t2));
    let a2 = null, Q2 = null, g2 = null, E2 = null;
    if ("string" == typeof A2) Q2 = A2, E2 = "text/plain;charset=UTF-8";
    else if (A2 instanceof URLSearchParams) Q2 = A2.toString(), E2 = "application/x-www-form-urlencoded;charset=UTF-8";
    else if (d(A2)) Q2 = new Uint8Array(A2.slice());
    else if (ArrayBuffer.isView(A2)) Q2 = new Uint8Array(A2.buffer.slice(A2.byteOffset, A2.byteOffset + A2.byteLength));
    else if (r.isFormDataLike(A2)) {
      const e3 = `----formdata-undici-0${`${y(1e11)}`.padStart(11, "0")}`, t3 = `--${e3}\r
Content-Disposition: form-data`, r2 = (A3) => A3.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), s2 = (A3) => A3.replace(/\r?\n|\r/g, "\r\n"), o2 = [], n2 = new Uint8Array([13, 10]);
      g2 = 0;
      let i2 = false;
      for (const [e4, a3] of A2) if ("string" == typeof a3) {
        const A3 = D.encode(t3 + `; name="${r2(s2(e4))}"\r
\r
${s2(a3)}\r
`);
        o2.push(A3), g2 += A3.byteLength;
      } else {
        const A3 = D.encode(`${t3}; name="${r2(s2(e4))}"` + (a3.name ? `; filename="${r2(a3.name)}"` : "") + `\r
Content-Type: ${a3.type || "application/octet-stream"}\r
\r
`);
        o2.push(A3, a3, n2), "number" == typeof a3.size ? g2 += A3.byteLength + a3.size + n2.byteLength : i2 = true;
      }
      const B2 = D.encode(`--${e3}--\r
`);
      o2.push(B2), g2 += B2.byteLength, i2 && (g2 = null), Q2 = A2, a2 = async function* () {
        for (const A3 of o2) A3.stream ? yield* A3.stream() : yield A3;
      }, E2 = `multipart/form-data; boundary=${e3}`;
    } else if (o(A2)) Q2 = A2, g2 = A2.size, A2.type && (E2 = A2.type);
    else if ("function" == typeof A2[Symbol.asyncIterator]) {
      if (e2) throw new TypeError("keepalive");
      if (r.isDisturbed(A2) || A2.locked) throw new TypeError("Response body object should not be disturbed or locked");
      t2 = A2 instanceof ReadableStream ? A2 : s(A2);
    }
    if (("string" == typeof Q2 || r.isBuffer(Q2)) && (g2 = Buffer.byteLength(Q2)), null != a2) {
      let e3;
      t2 = new ReadableStream({ async start() {
        e3 = a2(A2)[Symbol.asyncIterator]();
      }, async pull(A3) {
        const { value: r2, done: s2 } = await e3.next();
        if (s2) queueMicrotask(() => {
          A3.close(), A3.byobRequest?.respond(0);
        });
        else if (!l(t2)) {
          const e4 = new Uint8Array(r2);
          e4.byteLength && A3.enqueue(e4);
        }
        return A3.desiredSize > 0;
      }, async cancel(A3) {
        await e3.return();
      }, type: "bytes" });
    }
    return [{ stream: t2, source: Q2, length: g2 }, E2];
  }
  async function m(A2, e2, t2) {
    if (I.brandCheck(A2, t2), b(A2)) throw new TypeError("Body is unusable: Body has already been read");
    !(function(A3) {
      if (A3.aborted) throw new DOMException("The operation was aborted.", "AbortError");
    })(A2[c]);
    const r2 = a(), s2 = (A3) => r2.reject(A3), o2 = (A3) => {
      try {
        r2.resolve(e2(A3));
      } catch (A4) {
        s2(A4);
      }
    };
    return null == A2[c].body ? (o2(Buffer.allocUnsafe(0)), r2.promise) : (await Q(A2[c].body, o2, s2), r2.promise);
  }
  function b(A2) {
    const e2 = A2[c].body;
    return null != e2 && (e2.stream.locked || r.isDisturbed(e2.stream));
  }
  function N(A2) {
    return JSON.parse(E(A2));
  }
  function S(A2) {
    const e2 = A2[c].headersList, t2 = g(e2);
    return "failure" === t2 ? null : t2;
  }
  k && (R = new FinalizationRegistry((A2) => {
    const e2 = A2.deref();
    !e2 || e2.locked || u(e2) || l(e2) || e2.cancel("Response object has been garbage collected").catch(p);
  })), A.exports = { extractBody: F, safelyExtractBody: function(A2, e2 = false) {
    return A2 instanceof ReadableStream && (h(!r.isDisturbed(A2), "The body has already been consumed."), h(!A2.locked, "The stream is locked.")), F(A2, e2);
  }, cloneBody: function(A2, e2) {
    const [t2, r2] = e2.stream.tee();
    return e2.stream = t2, { stream: r2, length: e2.length, source: e2.source };
  }, mixinBody: function(A2) {
    var e2;
    Object.assign(A2.prototype, (e2 = A2, { blob() {
      return m(this, (A3) => {
        let e3 = S(this);
        return null === e3 ? e3 = "" : e3 && (e3 = f(e3)), new C([A3], { type: e3 });
      }, e2);
    }, arrayBuffer() {
      return m(this, (A3) => new Uint8Array(A3).buffer, e2);
    }, text() {
      return m(this, E, e2);
    }, json() {
      return m(this, N, e2);
    }, formData() {
      return m(this, (A3) => {
        const e3 = S(this);
        if (null !== e3) switch (e3.essence) {
          case "multipart/form-data": {
            const t2 = w(A3, e3);
            if ("failure" === t2) throw new TypeError("Failed to parse body as FormData.");
            const r2 = new B();
            return r2[c] = t2, r2;
          }
          case "application/x-www-form-urlencoded": {
            const e4 = new URLSearchParams(A3.toString()), t2 = new B();
            for (const [A4, r2] of e4) t2.append(A4, r2);
            return t2;
          }
        }
        throw new TypeError('Content-Type was not one of "multipart/form-data" or "application/x-www-form-urlencoded".');
      }, e2);
    }, bytes() {
      return m(this, (A3) => new Uint8Array(A3), e2);
    } }));
  }, streamRegistry: R, hasFinalizationRegistry: k, bodyUnusable: b };
}