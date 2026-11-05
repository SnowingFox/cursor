// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2158 range:667522..671512
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2158: (t2, e2, r2) => {
    "use strict";
    r2.r(e2), r2.d(e2, { assertByteStreamRequest: () => J.s4, compressedFlag: () => A.y, compressionNegotiate: () => A.B, contentTypeMatcher: () => y.Y, createAsyncIterable: () => _.T$, createClientMethodSerializers: () => p.Ef, createDeadlineSignal: () => S.p2, createEnvelopeReadableStream: () => g.V0, createFetchClient: () => i2, createFetchHandler: () => o2, createLinkedAbortController: () => S.Ch, createMethodSerializationLookup: () => p.Qg, createMethodUrl: () => n2.j, createUniversalHandlerClient: () => s2.N, createUniversalMethodHandler: () => B.JC, createUniversalServiceHandlers: () => B.SW, createWritableIterable: () => _.Jt, encodeEnvelope: () => g.zK, encodeEnvelopes: () => g.OO, envelopeCompress: () => g.$t, envelopeDecompress: () => g.qb, getAbortSignalReason: () => S.xz, getJsonOptions: () => p.B_, invokeUnaryImplementation: () => w.s, limitSerialization: () => p._I, makeIterableAbortable: () => _.lG, pipe: () => _.Fs, pipeTo: () => _.WK, readAllBytes: () => _.Xw, runStreamingCall: () => f.u, runUnaryCall: () => f.L, sinkAll: () => _.LX, sinkAllBytes: () => _.SM, transformAppend: () => _.PS, transformCatch: () => _.Qe, transformCatchFinally: () => _.du, transformCompressEnvelope: () => _.fM, transformDecompressEnvelope: () => _.ew, transformInvokeImplementation: () => w.H, transformJoinEnvelopes: () => _.yQ, transformParseEnvelope: () => _.uv, transformPrepend: () => _.p_, transformReadAllBytes: () => _.bp, transformSerializeEnvelope: () => _.XO, transformSplitEnvelope: () => _.pY, uResponseMethodNotAllowed: () => J.nZ, uResponseNotFound: () => J.of, uResponseOk: () => J.rJ, uResponseUnsupportedMediaType: () => J._L, uResponseVersionNotSupported: () => J.kF, universalClientRequestToFetch: () => a, universalClientResponseFromFetch: () => u, universalServerRequestFromFetch: () => c, universalServerResponseToFetch: () => l, untilFirst: () => _.zm, validateReadWriteMaxBytes: () => h.NL, validateUniversalHandlerOptions: () => B.sO });
    var n2 = r2(7572), s2 = r2(2172);
    function i2(t3) {
      return async function(e3) {
        return u(await t3(a(e3)));
      };
    }
    function o2(t3, e3) {
      return Object.assign(async function(r3) {
        const n3 = c(r3, null != e3 ? e3 : {});
        return l(await t3(n3));
      }, t3);
    }
    function a(t3) {
      const e3 = void 0 === t3.body ? null : m(t3.body);
      return new Request(t3.url, { method: t3.method, headers: t3.header, signal: t3.signal, body: e3 });
    }
    function u(t3) {
      return { status: t3.status, header: t3.headers, body: d(t3.body), trailer: new Headers() };
    }
    function c(t3, e3) {
      var r3;
      return { httpVersion: null !== (r3 = e3.httpVersion) && void 0 !== r3 ? r3 : "", method: t3.method, url: t3.url, header: t3.headers, body: d(t3.body), signal: t3.signal };
    }
    function l(t3) {
      let e3 = null;
      return void 0 !== t3.body && (e3 = m(t3.body)), new Response(e3, { status: t3.status, headers: t3.header });
    }
    function m(t3) {
      const e3 = t3[Symbol.asyncIterator]();
      return new ReadableStream({ async pull(t4) {
        const r3 = await e3.next();
        true !== r3.done ? t4.enqueue(r3.value) : t4.close();
      }, async cancel(t4) {
        if (e3.throw) try {
          await e3.throw(t4);
        } catch (t5) {
        }
      } });
    }
    function d(t3) {
      const e3 = null == t3 ? void 0 : t3.getReader();
      return { [Symbol.asyncIterator]: () => ({ async next() {
        if (void 0 !== e3) {
          const t4 = await e3.read();
          return t4.done ? { done: true, value: void 0 } : t4;
        }
        return { done: true, value: void 0 };
      }, throw: async (t4) => (void 0 !== e3 && await e3.cancel(t4), { done: true, value: void 0 }) }) };
    }
    var f = r2(1304), p = r2(878), h = r2(278), g = r2(7684), A = r2(3352), _ = r2(8205), y = r2(6367), w = r2(719), S = r2(9983), J = r2(2083), B = r2(8926);
  }