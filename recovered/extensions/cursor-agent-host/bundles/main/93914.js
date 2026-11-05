// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 93914 range:14459483..14482000
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
93914: (e, t, r) => {
    "use strict";
    const { Response: n, makeNetworkError: s, makeAppropriateNetworkError: o, filterResponse: i, makeResponse: a } = r(53511), { Headers: c } = r(72848), { Request: l, makeRequest: u } = r(30547), d = r(43106), { bytesMatch: p, makePolicyContainer: m, clonePolicyContainer: h, requestBadPort: f, TAOCheck: g, appendRequestOriginHeader: y, responseLocationURL: w, requestCurrentURL: v, setRequestReferrerPolicyOnRedirect: _, tryUpgradeRequestToAPotentiallyTrustworthyURL: A, createOpaqueTimingInfo: S, appendFetchMetadata: b, corsCheck: E, crossOriginResourcePolicyCheck: I, determineRequestsReferrer: C, coarsenedSharedCurrentTime: k, createDeferredPromise: x, isBlobLike: T, sameOrigin: R, isCancelled: B, isAborted: P, isErrorLike: J, fullyReadBody: M, readableStreamClose: q, isomorphicEncode: D, urlIsLocal: O, urlIsHttpHttpsScheme: N, urlHasHttpsScheme: F } = r(98116), { kState: U, kHeaders: L, kGuard: $, kRealm: Q } = r(77271), j = r(42613), { safelyExtractBody: G } = r(29608), { redirectStatusSet: H, nullBodyStatus: z, safeMethodsSet: W, requestBodyHeader: V, subresourceSet: K, DOMException: Y } = r(22955), { kHeadersList: Z } = r(15532), X = r(24434), { Readable: ee, pipeline: te } = r(2203), { addAbortListener: re, isErrored: ne, isReadable: se, nodeMajor: oe, nodeMinor: ie } = r(83589), { dataURLProcessor: ae, serializeAMimeType: ce } = r(64387), { TransformStream: le } = r(63774), { getGlobalDispatcher: ue } = r(17582), { webidl: de } = r(18193), { STATUS_CODES: pe } = r(58611), me = ["GET", "HEAD"];
    let he, fe = globalThis.ReadableStream;
    class ge extends X {
      constructor(e2) {
        super(), this.dispatcher = e2, this.connection = null, this.dump = false, this.state = "ongoing", this.setMaxListeners(21);
      }
      terminate(e2) {
        "ongoing" === this.state && (this.state = "terminated", this.connection?.destroy(e2), this.emit("terminated", e2));
      }
      abort(e2) {
        "ongoing" === this.state && (this.state = "aborted", e2 || (e2 = new Y("The operation was aborted.", "AbortError")), this.serializedAbortReason = e2, this.connection?.destroy(e2), this.emit("terminated", e2));
      }
    }
    function ye(e2, t2 = "other") {
      if ("error" === e2.type && e2.aborted) return;
      if (!e2.urlList?.length) return;
      const r2 = e2.urlList[0];
      let n2 = e2.timingInfo, s2 = e2.cacheState;
      N(r2) && null !== n2 && (e2.timingAllowPassed || (n2 = S({ startTime: n2.startTime }), s2 = ""), n2.endTime = k(), e2.timingInfo = n2, (function(e3, t3, r3, n3, s3) {
        (oe > 18 || 18 === oe && ie >= 2) && performance.markResourceTiming(e3, t3.href, r3, n3, s3);
      })(n2, r2, t2, globalThis, s2));
    }
    function we(e2, t2, r2, n2) {
      if (n2 || (n2 = new Y("The operation was aborted.", "AbortError")), e2.reject(n2), null != t2.body && se(t2.body?.stream) && t2.body.stream.cancel(n2).catch((e3) => {
        if ("ERR_INVALID_STATE" !== e3.code) throw e3;
      }), null == r2) return;
      const s2 = r2[U];
      null != s2.body && se(s2.body?.stream) && s2.body.stream.cancel(n2).catch((e3) => {
        if ("ERR_INVALID_STATE" !== e3.code) throw e3;
      });
    }
    function ve({ request: e2, processRequestBodyChunkLength: t2, processRequestEndOfBody: r2, processResponse: n2, processResponseEndOfBody: s2, processResponseConsumeBody: o2, useParallelQueue: i2 = false, dispatcher: a2 }) {
      let c2 = null, l2 = false;
      null != e2.client && (c2 = e2.client.globalObject, l2 = e2.client.crossOriginIsolatedCapability);
      const u2 = k(l2), d2 = S({ startTime: u2 }), p2 = { controller: new ge(a2), request: e2, timingInfo: d2, processRequestBodyChunkLength: t2, processRequestEndOfBody: r2, processResponse: n2, processResponseConsumeBody: o2, processResponseEndOfBody: s2, taskDestination: c2, crossOriginIsolatedCapability: l2 };
      if (j(!e2.body || e2.body.stream), "client" === e2.window && (e2.window = "Window" === e2.client?.globalObject?.constructor?.name ? e2.client : "no-window"), "client" === e2.origin && (e2.origin = e2.client?.origin), "client" === e2.policyContainer && (null != e2.client ? e2.policyContainer = h(e2.client.policyContainer) : e2.policyContainer = m()), !e2.headersList.contains("accept")) {
        const t3 = "*/*";
        e2.headersList.append("accept", t3);
      }
      return e2.headersList.contains("accept-language") || e2.headersList.append("accept-language", "*"), e2.priority, K.has(e2.destination), _e(p2).catch((e3) => {
        p2.controller.terminate(e3);
      }), p2.controller;
    }
    async function _e(e2, t2 = false) {
      const r2 = e2.request;
      let n2 = null;
      if (r2.localURLsOnly && !O(v(r2)) && (n2 = s("local URLs only")), A(r2), "blocked" === f(r2) && (n2 = s("bad port")), "" === r2.referrerPolicy && (r2.referrerPolicy = r2.policyContainer.referrerPolicy), "no-referrer" !== r2.referrer && (r2.referrer = C(r2)), null === n2 && (n2 = await (async () => {
        const t3 = v(r2);
        return R(t3, r2.url) && "basic" === r2.responseTainting || "data:" === t3.protocol || "navigate" === r2.mode || "websocket" === r2.mode ? (r2.responseTainting = "basic", await Ae(e2)) : "same-origin" === r2.mode ? s('request mode cannot be "same-origin"') : "no-cors" === r2.mode ? "follow" !== r2.redirect ? s('redirect mode cannot be "follow" for "no-cors" request') : (r2.responseTainting = "opaque", await Ae(e2)) : N(v(r2)) ? (r2.responseTainting = "cors", await Ee(e2)) : s("URL scheme must be a HTTP(S) scheme");
      })()), t2) return n2;
      0 === n2.status || n2.internalResponse || (r2.responseTainting, "basic" === r2.responseTainting ? n2 = i(n2, "basic") : "cors" === r2.responseTainting ? n2 = i(n2, "cors") : "opaque" === r2.responseTainting ? n2 = i(n2, "opaque") : j(false));
      let o2 = 0 === n2.status ? n2 : n2.internalResponse;
      if (0 === o2.urlList.length && o2.urlList.push(...r2.urlList), r2.timingAllowFailed || (n2.timingAllowPassed = true), "opaque" === n2.type && 206 === o2.status && o2.rangeRequested && !r2.headers.contains("range") && (n2 = o2 = s()), 0 === n2.status || "HEAD" !== r2.method && "CONNECT" !== r2.method && !z.includes(o2.status) || (o2.body = null, e2.controller.dump = true), r2.integrity) {
        const t3 = (t4) => be(e2, s(t4));
        if ("opaque" === r2.responseTainting || null == n2.body) return void t3(n2.error);
        const o3 = (s2) => {
          p(s2, r2.integrity) ? (n2.body = G(s2)[0], be(e2, n2)) : t3("integrity mismatch");
        };
        await M(n2.body, o3, t3);
      } else be(e2, n2);
    }
    function Ae(e2) {
      if (B(e2) && 0 === e2.request.redirectCount) return Promise.resolve(o(e2));
      const { request: t2 } = e2, { protocol: n2 } = v(t2);
      switch (n2) {
        case "about:":
          return Promise.resolve(s("about scheme is not supported"));
        case "blob:": {
          he || (he = r(20181).resolveObjectURL);
          const e3 = v(t2);
          if (0 !== e3.search.length) return Promise.resolve(s("NetworkError when attempting to fetch resource."));
          const n3 = he(e3.toString());
          if ("GET" !== t2.method || !T(n3)) return Promise.resolve(s("invalid method"));
          const o2 = G(n3), i2 = o2[0], c2 = D(`${i2.length}`), l2 = o2[1] ?? "", u2 = a({ statusText: "OK", headersList: [["content-length", { name: "Content-Length", value: c2 }], ["content-type", { name: "Content-Type", value: l2 }]] });
          return u2.body = i2, Promise.resolve(u2);
        }
        case "data:": {
          const e3 = v(t2), r2 = ae(e3);
          if ("failure" === r2) return Promise.resolve(s("failed to fetch the data URL"));
          const n3 = ce(r2.mimeType);
          return Promise.resolve(a({ statusText: "OK", headersList: [["content-type", { name: "Content-Type", value: n3 }]], body: G(r2.body)[0] }));
        }
        case "file:":
          return Promise.resolve(s("not implemented... yet..."));
        case "http:":
        case "https:":
          return Ee(e2).catch((e3) => s(e3));
        default:
          return Promise.resolve(s("unknown scheme"));
      }
    }
    function Se(e2, t2) {
      e2.request.done = true, null != e2.processResponseDone && queueMicrotask(() => e2.processResponseDone(t2));
    }
    function be(e2, t2) {
      "error" === t2.type && (t2.urlList = [e2.request.urlList[0]], t2.timingInfo = S({ startTime: e2.timingInfo.startTime }));
      const r2 = () => {
        e2.request.done = true, null != e2.processResponseEndOfBody && queueMicrotask(() => e2.processResponseEndOfBody(t2));
      };
      if (null != e2.processResponse && queueMicrotask(() => e2.processResponse(t2)), null == t2.body) r2();
      else {
        const e3 = (e4, t3) => {
          t3.enqueue(e4);
        }, n2 = new le({ start() {
        }, transform: e3, flush: r2 }, { size: () => 1 }, { size: () => 1 });
        t2.body = { stream: t2.body.stream.pipeThrough(n2) };
      }
      if (null != e2.processResponseConsumeBody) {
        const r3 = (r4) => e2.processResponseConsumeBody(t2, r4), n2 = (r4) => e2.processResponseConsumeBody(t2, r4);
        return null != t2.body ? M(t2.body, r3, n2) : (queueMicrotask(() => r3(null)), Promise.resolve());
      }
    }
    async function Ee(e2) {
      const t2 = e2.request;
      let r2 = null, n2 = null;
      const o2 = e2.timingInfo;
      if (t2.serviceWorkers, null === r2) {
        if ("follow" === t2.redirect && (t2.serviceWorkers = "none"), n2 = r2 = await Ie(e2), "cors" === t2.responseTainting && "failure" === E(t2, r2)) return s("cors failure");
        "failure" === g(t2, r2) && (t2.timingAllowFailed = true);
      }
      return "opaque" !== t2.responseTainting && "opaque" !== r2.type || "blocked" !== I(t2.origin, t2.client, t2.destination, n2) ? (H.has(n2.status) && ("manual" !== t2.redirect && e2.controller.connection.destroy(), "error" === t2.redirect ? r2 = s("unexpected redirect") : "manual" === t2.redirect ? r2 = n2 : "follow" === t2.redirect ? r2 = await (function(e3, t3) {
        const r3 = e3.request, n3 = t3.internalResponse ? t3.internalResponse : t3;
        let o3;
        try {
          if (o3 = w(n3, v(r3).hash), null == o3) return t3;
        } catch (e4) {
          return Promise.resolve(s(e4));
        }
        if (!N(o3)) return Promise.resolve(s("URL scheme must be a HTTP(S) scheme"));
        if (20 === r3.redirectCount) return Promise.resolve(s("redirect count exceeded"));
        if (r3.redirectCount += 1, "cors" === r3.mode && (o3.username || o3.password) && !R(r3, o3)) return Promise.resolve(s('cross origin not allowed for request mode "cors"'));
        if ("cors" === r3.responseTainting && (o3.username || o3.password)) return Promise.resolve(s('URL cannot contain credentials for request mode "cors"'));
        if (303 !== n3.status && null != r3.body && null == r3.body.source) return Promise.resolve(s());
        if ([301, 302].includes(n3.status) && "POST" === r3.method || 303 === n3.status && !me.includes(r3.method)) {
          r3.method = "GET", r3.body = null;
          for (const e4 of V) r3.headersList.delete(e4);
        }
        R(v(r3), o3) || (r3.headersList.delete("authorization"), r3.headersList.delete("proxy-authorization", true), r3.headersList.delete("cookie"), r3.headersList.delete("host"));
        null != r3.body && (j(null != r3.body.source), r3.body = G(r3.body.source)[0]);
        const i2 = e3.timingInfo;
        i2.redirectEndTime = i2.postRedirectStartTime = k(e3.crossOriginIsolatedCapability), 0 === i2.redirectStartTime && (i2.redirectStartTime = i2.startTime);
        return r3.urlList.push(o3), _(r3, n3), _e(e3, true);
      })(e2, r2) : j(false)), r2.timingInfo = o2, r2) : s("blocked");
    }
    async function Ie(e2, t2 = false, n2 = false) {
      const i2 = e2.request;
      let l2 = null, p2 = null, m2 = null;
      "no-window" === i2.window && "error" === i2.redirect ? (l2 = e2, p2 = i2) : (p2 = u(i2), l2 = { ...e2 }, l2.request = p2);
      const h2 = "include" === i2.credentials || "same-origin" === i2.credentials && "basic" === i2.responseTainting, f2 = p2.body ? p2.body.length : null;
      let g2 = null;
      if (null == p2.body && ["POST", "PUT"].includes(p2.method) && (g2 = "0"), null != f2 && (g2 = D(`${f2}`)), null != g2 && p2.headersList.append("content-length", g2), null != f2 && p2.keepalive, p2.referrer instanceof URL && p2.headersList.append("referer", D(p2.referrer.href)), y(p2), b(p2), p2.headersList.contains("user-agent") || p2.headersList.append("user-agent", "undefined" == typeof esbuildDetection ? "undici" : "node"), "default" === p2.cache && (p2.headersList.contains("if-modified-since") || p2.headersList.contains("if-none-match") || p2.headersList.contains("if-unmodified-since") || p2.headersList.contains("if-match") || p2.headersList.contains("if-range")) && (p2.cache = "no-store"), "no-cache" !== p2.cache || p2.preventNoCacheCacheControlHeaderModification || p2.headersList.contains("cache-control") || p2.headersList.append("cache-control", "max-age=0"), "no-store" !== p2.cache && "reload" !== p2.cache || (p2.headersList.contains("pragma") || p2.headersList.append("pragma", "no-cache"), p2.headersList.contains("cache-control") || p2.headersList.append("cache-control", "no-cache")), p2.headersList.contains("range") && p2.headersList.append("accept-encoding", "identity"), p2.headersList.contains("accept-encoding") || (F(v(p2)) ? p2.headersList.append("accept-encoding", "br, gzip, deflate") : p2.headersList.append("accept-encoding", "gzip, deflate")), p2.headersList.delete("host"), p2.cache = "no-store", "no-store" !== p2.mode && p2.mode, null == m2) {
        if ("only-if-cached" === p2.mode) return s("only if cached");
        const e3 = await (async function(e4) {
          j(!e4.controller.connection || e4.controller.connection.destroyed), e4.controller.connection = { abort: null, destroyed: false, destroy(e5) {
            this.destroyed || (this.destroyed = true, this.abort?.(e5 ?? new Y("The operation was aborted.", "AbortError")));
          } };
          const t3 = e4.request;
          let n3 = null;
          const i3 = e4.timingInfo, l3 = null;
          null == l3 && (t3.cache = "no-store");
          t3.mode;
          let u2 = null;
          if (null == t3.body && e4.processRequestEndOfBody) queueMicrotask(() => e4.processRequestEndOfBody());
          else if (null != t3.body) {
            const r2 = async function* (t4) {
              B(e4) || (yield t4, e4.processRequestBodyChunkLength?.(t4.byteLength));
            }, n4 = () => {
              B(e4) || e4.processRequestEndOfBody && e4.processRequestEndOfBody();
            }, s2 = (t4) => {
              B(e4) || ("AbortError" === t4.name ? e4.controller.abort() : e4.controller.terminate(t4));
            };
            u2 = (async function* () {
              try {
                for await (const e5 of t3.body.stream) yield* r2(e5);
                n4();
              } catch (e5) {
                s2(e5);
              }
            })();
          }
          try {
            const { body: t4, status: r2, statusText: s2, headersList: o2, socket: i4 } = await g3({ body: u2 });
            if (i4) n3 = a({ status: r2, statusText: s2, headersList: o2, socket: i4 });
            else {
              const i5 = t4[Symbol.asyncIterator]();
              e4.controller.next = () => i5.next(), n3 = a({ status: r2, statusText: s2, headersList: o2 });
            }
          } catch (t4) {
            return "AbortError" === t4.name ? (e4.controller.connection.destroy(), o(e4, t4)) : s(t4);
          }
          const p3 = () => {
            e4.controller.resume();
          }, m3 = (t4) => {
            e4.controller.abort(t4);
          };
          fe || (fe = r(63774).ReadableStream);
          const h3 = new fe({ async start(t4) {
            e4.controller.controller = t4;
          }, async pull(e5) {
            await p3(e5);
          }, async cancel(e5) {
            await m3(e5);
          } }, { highWaterMark: 0, size: () => 1 });
          function f3(t4) {
            P(e4) ? (n3.aborted = true, se(h3) && e4.controller.controller.error(e4.controller.serializedAbortReason)) : se(h3) && e4.controller.controller.error(new TypeError("terminated", { cause: J(t4) ? t4 : void 0 })), e4.controller.connection.destroy();
          }
          return n3.body = { stream: h3 }, e4.controller.on("terminated", f3), e4.controller.resume = async () => {
            for (; ; ) {
              let t4, r2;
              try {
                const { done: r3, value: n4 } = await e4.controller.next();
                if (P(e4)) break;
                t4 = r3 ? void 0 : n4;
              } catch (n4) {
                e4.controller.ended && !i3.encodedBodySize ? t4 = void 0 : (t4 = n4, r2 = true);
              }
              if (void 0 === t4) return q(e4.controller.controller), void Se(e4, n3);
              if (i3.decodedBodySize += t4?.byteLength ?? 0, r2) return void e4.controller.terminate(t4);
              if (e4.controller.controller.enqueue(new Uint8Array(t4)), ne(h3)) return void e4.controller.terminate();
              if (!e4.controller.controller.desiredSize) return;
            }
          }, n3;
          async function g3({ body: r2 }) {
            const n4 = v(t3), s2 = e4.controller.dispatcher;
            return new Promise((o2, a2) => s2.dispatch({ path: n4.pathname + n4.search, origin: n4.origin, method: t3.method, body: e4.controller.dispatcher.isMockActive ? t3.body && (t3.body.source || t3.body.stream) : r2, headers: t3.headersList.entries, maxRedirections: 0, upgrade: "websocket" === t3.mode ? "websocket" : void 0 }, { body: null, abort: null, onConnect(t4) {
              const { connection: r3 } = e4.controller;
              r3.destroyed ? t4(new Y("The operation was aborted.", "AbortError")) : (e4.controller.on("terminated", t4), this.abort = r3.abort = t4);
            }, onHeaders(e5, r3, n5, s3) {
              if (e5 < 200) return;
              let i4 = [], a3 = "";
              const l4 = new c();
              if (Array.isArray(r3)) for (let e6 = 0; e6 < r3.length; e6 += 2) {
                const t4 = r3[e6 + 0].toString("latin1"), n6 = r3[e6 + 1].toString("latin1");
                "content-encoding" === t4.toLowerCase() ? i4 = n6.toLowerCase().split(",").map((e7) => e7.trim()) : "location" === t4.toLowerCase() && (a3 = n6), l4[Z].append(t4, n6);
              }
              else {
                const e6 = Object.keys(r3);
                for (const t4 of e6) {
                  const e7 = r3[t4];
                  "content-encoding" === t4.toLowerCase() ? i4 = e7.toLowerCase().split(",").map((e8) => e8.trim()).reverse() : "location" === t4.toLowerCase() && (a3 = e7), l4[Z].append(t4, e7);
                }
              }
              this.body = new ee({ read: n5 });
              const u3 = [], p4 = "follow" === t3.redirect && a3 && H.has(e5);
              if ("HEAD" !== t3.method && "CONNECT" !== t3.method && !z.includes(e5) && !p4) for (const e6 of i4) if ("x-gzip" === e6 || "gzip" === e6) u3.push(d.createGunzip({ flush: d.constants.Z_SYNC_FLUSH, finishFlush: d.constants.Z_SYNC_FLUSH }));
              else if ("deflate" === e6) u3.push(d.createInflate());
              else {
                if ("br" !== e6) {
                  u3.length = 0;
                  break;
                }
                u3.push(d.createBrotliDecompress());
              }
              return o2({ status: e5, statusText: s3, headersList: l4[Z], body: u3.length ? te(this.body, ...u3, () => {
              }) : this.body.on("error", () => {
              }) }), true;
            }, onData(t4) {
              if (e4.controller.dump) return;
              const r3 = t4;
              return i3.encodedBodySize += r3.byteLength, this.body.push(r3);
            }, onComplete() {
              this.abort && e4.controller.off("terminated", this.abort), e4.controller.ended = true, this.body.push(null);
            }, onError(t4) {
              this.abort && e4.controller.off("terminated", this.abort), this.body?.destroy(t4), e4.controller.terminate(t4), a2(t4);
            }, onUpgrade(e5, t4, r3) {
              if (101 !== e5) return;
              const n5 = new c();
              for (let e6 = 0; e6 < t4.length; e6 += 2) {
                const r4 = t4[e6 + 0].toString("latin1"), s3 = t4[e6 + 1].toString("latin1");
                n5[Z].append(r4, s3);
              }
              return o2({ status: e5, statusText: pe[e5], headersList: n5[Z], socket: r3 }), true;
            } }));
          }
        })(l2, h2, n2);
        !W.has(p2.method) && e3.status >= 200 && e3.status, null == m2 && (m2 = e3);
      }
      if (m2.urlList = [...p2.urlList], p2.headersList.contains("range") && (m2.rangeRequested = true), m2.requestIncludesCredentials = h2, 407 === m2.status) return "no-window" === i2.window ? s() : B(e2) ? o(e2) : s("proxy authentication required");
      if (421 === m2.status && !n2 && (null == i2.body || null != i2.body.source)) {
        if (B(e2)) return o(e2);
        e2.controller.connection.destroy(), m2 = await Ie(e2, t2, true);
      }
      return m2;
    }
    e.exports = { fetch: function(e2, t2 = {}) {
      de.argumentLengthCheck(arguments, 1, { header: "globalThis.fetch" });
      const r2 = x();
      let s2;
      try {
        s2 = new l(e2, t2);
      } catch (e3) {
        return r2.reject(e3), r2.promise;
      }
      const o2 = s2[U];
      if (s2.signal.aborted) return we(r2, o2, null, s2.signal.reason), r2.promise;
      const i2 = o2.client.globalObject;
      "ServiceWorkerGlobalScope" === i2?.constructor?.name && (o2.serviceWorkers = "none");
      let a2 = null, c2 = false, u2 = null;
      return re(s2.signal, () => {
        c2 = true, j(null != u2), u2.abort(s2.signal.reason), we(r2, o2, a2, s2.signal.reason);
      }), u2 = ve({ request: o2, processResponseEndOfBody: (e3) => ye(e3, "fetch"), processResponse: (e3) => c2 ? Promise.resolve() : e3.aborted ? (we(r2, o2, a2, u2.serializedAbortReason), Promise.resolve()) : "error" === e3.type ? (r2.reject(Object.assign(new TypeError("fetch failed"), { cause: e3.error })), Promise.resolve()) : (a2 = new n(), a2[U] = e3, a2[Q] = null, a2[L][Z] = e3.headersList, a2[L][$] = "immutable", a2[L][Q] = null, void r2.resolve(a2)), dispatcher: t2.dispatcher ?? ue() }), r2.promise;
    }, Fetch: ge, fetching: ve, finalizeAndReportTiming: ye };
  }