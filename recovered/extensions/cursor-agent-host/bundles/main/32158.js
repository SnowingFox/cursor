// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 32158 range:5129424..5133402
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
32158: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, { assertByteStreamRequest: () => S.s4, compressedFlag: () => y.y, compressionNegotiate: () => y.B, contentTypeMatcher: () => v.Y, createAsyncIterable: () => w.T$, createClientMethodSerializers: () => h.Ef, createDeadlineSignal: () => A.p2, createEnvelopeReadableStream: () => g.V0, createFetchClient: () => o, createFetchHandler: () => i, createLinkedAbortController: () => A.Ch, createMethodSerializationLookup: () => h.Qg, createMethodUrl: () => n.j, createUniversalHandlerClient: () => s.N, createUniversalMethodHandler: () => b.JC, createUniversalServiceHandlers: () => b.SW, createWritableIterable: () => w.Jt, encodeEnvelope: () => g.zK, encodeEnvelopes: () => g.OO, envelopeCompress: () => g.$t, envelopeDecompress: () => g.qb, getAbortSignalReason: () => A.xz, getJsonOptions: () => h.B_, invokeUnaryImplementation: () => _.s, limitSerialization: () => h._I, makeIterableAbortable: () => w.lG, pipe: () => w.Fs, pipeTo: () => w.WK, readAllBytes: () => w.Xw, runStreamingCall: () => m.u, runUnaryCall: () => m.L, sinkAll: () => w.LX, sinkAllBytes: () => w.SM, transformAppend: () => w.PS, transformCatch: () => w.Qe, transformCatchFinally: () => w.du, transformCompressEnvelope: () => w.fM, transformDecompressEnvelope: () => w.ew, transformInvokeImplementation: () => _.H, transformJoinEnvelopes: () => w.yQ, transformParseEnvelope: () => w.uv, transformPrepend: () => w.p_, transformReadAllBytes: () => w.bp, transformSerializeEnvelope: () => w.XO, transformSplitEnvelope: () => w.pY, uResponseMethodNotAllowed: () => S.nZ, uResponseNotFound: () => S.of, uResponseOk: () => S.rJ, uResponseUnsupportedMediaType: () => S._L, uResponseVersionNotSupported: () => S.kF, universalClientRequestToFetch: () => a, universalClientResponseFromFetch: () => c, universalServerRequestFromFetch: () => l, universalServerResponseToFetch: () => u, untilFirst: () => w.zm, validateReadWriteMaxBytes: () => f.NL, validateUniversalHandlerOptions: () => b.sO });
    var n = r(67572), s = r(2172);
    function o(e2) {
      return async function(t2) {
        return c(await e2(a(t2)));
      };
    }
    function i(e2, t2) {
      return Object.assign(async function(r2) {
        const n2 = l(r2, null != t2 ? t2 : {});
        return u(await e2(n2));
      }, e2);
    }
    function a(e2) {
      const t2 = void 0 === e2.body ? null : d(e2.body);
      return new Request(e2.url, { method: e2.method, headers: e2.header, signal: e2.signal, body: t2 });
    }
    function c(e2) {
      return { status: e2.status, header: e2.headers, body: p(e2.body), trailer: new Headers() };
    }
    function l(e2, t2) {
      var r2;
      return { httpVersion: null !== (r2 = t2.httpVersion) && void 0 !== r2 ? r2 : "", method: e2.method, url: e2.url, header: e2.headers, body: p(e2.body), signal: e2.signal };
    }
    function u(e2) {
      let t2 = null;
      return void 0 !== e2.body && (t2 = d(e2.body)), new Response(t2, { status: e2.status, headers: e2.header });
    }
    function d(e2) {
      const t2 = e2[Symbol.asyncIterator]();
      return new ReadableStream({ async pull(e3) {
        const r2 = await t2.next();
        true !== r2.done ? e3.enqueue(r2.value) : e3.close();
      }, async cancel(e3) {
        if (t2.throw) try {
          await t2.throw(e3);
        } catch (e4) {
        }
      } });
    }
    function p(e2) {
      const t2 = null == e2 ? void 0 : e2.getReader();
      return { [Symbol.asyncIterator]: () => ({ async next() {
        if (void 0 !== t2) {
          const e3 = await t2.read();
          return e3.done ? { done: true, value: void 0 } : e3;
        }
        return { done: true, value: void 0 };
      }, throw: async (e3) => (void 0 !== t2 && await t2.cancel(e3), { done: true, value: void 0 }) }) };
    }
    var m = r(41304), h = r(40878), f = r(10278), g = r(77684), y = r(13352), w = r(78205), v = r(96367), _ = r(50719), A = r(39983), S = r(22083), b = r(28926);
  }