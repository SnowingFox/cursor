// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 3406 range:336455..359010
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3406: (e2, n2, t2) => {
    "use strict";
    const { Response: a2, makeNetworkError: s2, makeAppropriateNetworkError: o2, filterResponse: r, makeResponse: i } = t2(1099), { Headers: A } = t2(2932), { Request: c, makeRequest: l } = t2(2239), d = t2(3106), { bytesMatch: m, makePolicyContainer: u, clonePolicyContainer: g, requestBadPort: p, TAOCheck: E, appendRequestOriginHeader: h, responseLocationURL: T, requestCurrentURL: k, setRequestReferrerPolicyOnRedirect: f, tryUpgradeRequestToAPotentiallyTrustworthyURL: _, createOpaqueTimingInfo: I, appendFetchMetadata: C, corsCheck: y, crossOriginResourcePolicyCheck: B, determineRequestsReferrer: Q, coarsenedSharedCurrentTime: v, createDeferredPromise: R, isBlobLike: N, sameOrigin: S, isCancelled: w, isAborted: b, isErrorLike: D, fullyReadBody: M, readableStreamClose: F, isomorphicEncode: O, urlIsLocal: U, urlIsHttpHttpsScheme: L, urlHasHttpsScheme: P } = t2(5728), { kState: x, kHeaders: G, kGuard: Y, kRealm: J } = t2(5899), V = t2(2613), { safelyExtractBody: q } = t2(7052), { redirectStatusSet: H, nullBodyStatus: W, safeMethodsSet: j, requestBodyHeader: K, subresourceSet: $, DOMException: X } = t2(6687), { kHeadersList: Z } = t2(8832), z = t2(4434), { Readable: ee, pipeline: ne } = t2(2203), { addAbortListener: te, isErrored: ae, isReadable: se, nodeMajor: oe, nodeMinor: re } = t2(9361), { dataURLProcessor: ie, serializeAMimeType: Ae } = t2(3631), { TransformStream: ce } = t2(3774), { getGlobalDispatcher: le } = t2(7362), { webidl: de } = t2(8005), { STATUS_CODES: me } = t2(8611), ue = ["GET", "HEAD"];
    let ge, pe = globalThis.ReadableStream;
    class Ee extends z {
      constructor(e3) {
        super(), this.dispatcher = e3, this.connection = null, this.dump = false, this.state = "ongoing", this.setMaxListeners(21);
      }
      terminate(e3) {
        "ongoing" === this.state && (this.state = "terminated", this.connection?.destroy(e3), this.emit("terminated", e3));
      }
      abort(e3) {
        "ongoing" === this.state && (this.state = "aborted", e3 || (e3 = new X("The operation was aborted.", "AbortError")), this.serializedAbortReason = e3, this.connection?.destroy(e3), this.emit("terminated", e3));
      }
    }
    function he(e3, n3 = "other") {
      if ("error" === e3.type && e3.aborted) return;
      if (!e3.urlList?.length) return;
      const t3 = e3.urlList[0];
      let a3 = e3.timingInfo, s3 = e3.cacheState;
      L(t3) && null !== a3 && (e3.timingAllowPassed || (a3 = I({ startTime: a3.startTime }), s3 = ""), a3.endTime = v(), e3.timingInfo = a3, (function(e4, n4, t4, a4, s4) {
        (oe > 18 || 18 === oe && re >= 2) && performance.markResourceTiming(e4, n4.href, t4, a4, s4);
      })(a3, t3, n3, globalThis, s3));
    }
    function Te(e3, n3, t3, a3) {
      if (a3 || (a3 = new X("The operation was aborted.", "AbortError")), e3.reject(a3), null != n3.body && se(n3.body?.stream) && n3.body.stream.cancel(a3).catch((e4) => {
        if ("ERR_INVALID_STATE" !== e4.code) throw e4;
      }), null == t3) return;
      const s3 = t3[x];
      null != s3.body && se(s3.body?.stream) && s3.body.stream.cancel(a3).catch((e4) => {
        if ("ERR_INVALID_STATE" !== e4.code) throw e4;
      });
    }
    function ke({ request: e3, processRequestBodyChunkLength: n3, processRequestEndOfBody: t3, processResponse: a3, processResponseEndOfBody: s3, processResponseConsumeBody: o3, useParallelQueue: r2 = false, dispatcher: i2 }) {
      let A2 = null, c2 = false;
      null != e3.client && (A2 = e3.client.globalObject, c2 = e3.client.crossOriginIsolatedCapability);
      const l2 = v(c2), d2 = I({ startTime: l2 }), m2 = { controller: new Ee(i2), request: e3, timingInfo: d2, processRequestBodyChunkLength: n3, processRequestEndOfBody: t3, processResponse: a3, processResponseConsumeBody: o3, processResponseEndOfBody: s3, taskDestination: A2, crossOriginIsolatedCapability: c2 };
      if (V(!e3.body || e3.body.stream), "client" === e3.window && (e3.window = "Window" === e3.client?.globalObject?.constructor?.name ? e3.client : "no-window"), "client" === e3.origin && (e3.origin = e3.client?.origin), "client" === e3.policyContainer && (null != e3.client ? e3.policyContainer = g(e3.client.policyContainer) : e3.policyContainer = u()), !e3.headersList.contains("accept")) {
        const n4 = "*/*";
        e3.headersList.append("accept", n4);
      }
      return e3.headersList.contains("accept-language") || e3.headersList.append("accept-language", "*"), e3.priority, $.has(e3.destination), fe(m2).catch((e4) => {
        m2.controller.terminate(e4);
      }), m2.controller;
    }
    async function fe(e3, n3 = false) {
      const t3 = e3.request;
      let a3 = null;
      if (t3.localURLsOnly && !U(k(t3)) && (a3 = s2("local URLs only")), _(t3), "blocked" === p(t3) && (a3 = s2("bad port")), "" === t3.referrerPolicy && (t3.referrerPolicy = t3.policyContainer.referrerPolicy), "no-referrer" !== t3.referrer && (t3.referrer = Q(t3)), null === a3 && (a3 = await (async () => {
        const n4 = k(t3);
        return S(n4, t3.url) && "basic" === t3.responseTainting || "data:" === n4.protocol || "navigate" === t3.mode || "websocket" === t3.mode ? (t3.responseTainting = "basic", await _e(e3)) : "same-origin" === t3.mode ? s2('request mode cannot be "same-origin"') : "no-cors" === t3.mode ? "follow" !== t3.redirect ? s2('redirect mode cannot be "follow" for "no-cors" request') : (t3.responseTainting = "opaque", await _e(e3)) : L(k(t3)) ? (t3.responseTainting = "cors", await ye(e3)) : s2("URL scheme must be a HTTP(S) scheme");
      })()), n3) return a3;
      0 === a3.status || a3.internalResponse || (t3.responseTainting, "basic" === t3.responseTainting ? a3 = r(a3, "basic") : "cors" === t3.responseTainting ? a3 = r(a3, "cors") : "opaque" === t3.responseTainting ? a3 = r(a3, "opaque") : V(false));
      let o3 = 0 === a3.status ? a3 : a3.internalResponse;
      if (0 === o3.urlList.length && o3.urlList.push(...t3.urlList), t3.timingAllowFailed || (a3.timingAllowPassed = true), "opaque" === a3.type && 206 === o3.status && o3.rangeRequested && !t3.headers.contains("range") && (a3 = o3 = s2()), 0 === a3.status || "HEAD" !== t3.method && "CONNECT" !== t3.method && !W.includes(o3.status) || (o3.body = null, e3.controller.dump = true), t3.integrity) {
        const n4 = (n5) => Ce(e3, s2(n5));
        if ("opaque" === t3.responseTainting || null == a3.body) return void n4(a3.error);
        const o4 = (s3) => {
          m(s3, t3.integrity) ? (a3.body = q(s3)[0], Ce(e3, a3)) : n4("integrity mismatch");
        };
        await M(a3.body, o4, n4);
      } else Ce(e3, a3);
    }
    function _e(e3) {
      if (w(e3) && 0 === e3.request.redirectCount) return Promise.resolve(o2(e3));
      const { request: n3 } = e3, { protocol: a3 } = k(n3);
      switch (a3) {
        case "about:":
          return Promise.resolve(s2("about scheme is not supported"));
        case "blob:": {
          ge || (ge = t2(181).resolveObjectURL);
          const e4 = k(n3);
          if (0 !== e4.search.length) return Promise.resolve(s2("NetworkError when attempting to fetch resource."));
          const a4 = ge(e4.toString());
          if ("GET" !== n3.method || !N(a4)) return Promise.resolve(s2("invalid method"));
          const o3 = q(a4), r2 = o3[0], A2 = O(`${r2.length}`), c2 = o3[1] ?? "", l2 = i({ statusText: "OK", headersList: [["content-length", { name: "Content-Length", value: A2 }], ["content-type", { name: "Content-Type", value: c2 }]] });
          return l2.body = r2, Promise.resolve(l2);
        }
        case "data:": {
          const e4 = k(n3), t3 = ie(e4);
          if ("failure" === t3) return Promise.resolve(s2("failed to fetch the data URL"));
          const a4 = Ae(t3.mimeType);
          return Promise.resolve(i({ statusText: "OK", headersList: [["content-type", { name: "Content-Type", value: a4 }]], body: q(t3.body)[0] }));
        }
        case "file:":
          return Promise.resolve(s2("not implemented... yet..."));
        case "http:":
        case "https:":
          return ye(e3).catch((e4) => s2(e4));
        default:
          return Promise.resolve(s2("unknown scheme"));
      }
    }
    function Ie(e3, n3) {
      e3.request.done = true, null != e3.processResponseDone && queueMicrotask(() => e3.processResponseDone(n3));
    }
    function Ce(e3, n3) {
      "error" === n3.type && (n3.urlList = [e3.request.urlList[0]], n3.timingInfo = I({ startTime: e3.timingInfo.startTime }));
      const t3 = () => {
        e3.request.done = true, null != e3.processResponseEndOfBody && queueMicrotask(() => e3.processResponseEndOfBody(n3));
      };
      if (null != e3.processResponse && queueMicrotask(() => e3.processResponse(n3)), null == n3.body) t3();
      else {
        const e4 = (e5, n4) => {
          n4.enqueue(e5);
        }, a3 = new ce({ start() {
        }, transform: e4, flush: t3 }, { size: () => 1 }, { size: () => 1 });
        n3.body = { stream: n3.body.stream.pipeThrough(a3) };
      }
      if (null != e3.processResponseConsumeBody) {
        const t4 = (t5) => e3.processResponseConsumeBody(n3, t5), a3 = (t5) => e3.processResponseConsumeBody(n3, t5);
        return null != n3.body ? M(n3.body, t4, a3) : (queueMicrotask(() => t4(null)), Promise.resolve());
      }
    }
    async function ye(e3) {
      const n3 = e3.request;
      let t3 = null, a3 = null;
      const o3 = e3.timingInfo;
      if (n3.serviceWorkers, null === t3) {
        if ("follow" === n3.redirect && (n3.serviceWorkers = "none"), a3 = t3 = await Be(e3), "cors" === n3.responseTainting && "failure" === y(n3, t3)) return s2("cors failure");
        "failure" === E(n3, t3) && (n3.timingAllowFailed = true);
      }
      return "opaque" !== n3.responseTainting && "opaque" !== t3.type || "blocked" !== B(n3.origin, n3.client, n3.destination, a3) ? (H.has(a3.status) && ("manual" !== n3.redirect && e3.controller.connection.destroy(), "error" === n3.redirect ? t3 = s2("unexpected redirect") : "manual" === n3.redirect ? t3 = a3 : "follow" === n3.redirect ? t3 = await (function(e4, n4) {
        const t4 = e4.request, a4 = n4.internalResponse ? n4.internalResponse : n4;
        let o4;
        try {
          if (o4 = T(a4, k(t4).hash), null == o4) return n4;
        } catch (e5) {
          return Promise.resolve(s2(e5));
        }
        if (!L(o4)) return Promise.resolve(s2("URL scheme must be a HTTP(S) scheme"));
        if (20 === t4.redirectCount) return Promise.resolve(s2("redirect count exceeded"));
        if (t4.redirectCount += 1, "cors" === t4.mode && (o4.username || o4.password) && !S(t4, o4)) return Promise.resolve(s2('cross origin not allowed for request mode "cors"'));
        if ("cors" === t4.responseTainting && (o4.username || o4.password)) return Promise.resolve(s2('URL cannot contain credentials for request mode "cors"'));
        if (303 !== a4.status && null != t4.body && null == t4.body.source) return Promise.resolve(s2());
        if ([301, 302].includes(a4.status) && "POST" === t4.method || 303 === a4.status && !ue.includes(t4.method)) {
          t4.method = "GET", t4.body = null;
          for (const e5 of K) t4.headersList.delete(e5);
        }
        S(k(t4), o4) || (t4.headersList.delete("authorization"), t4.headersList.delete("proxy-authorization", true), t4.headersList.delete("cookie"), t4.headersList.delete("host"));
        null != t4.body && (V(null != t4.body.source), t4.body = q(t4.body.source)[0]);
        const r2 = e4.timingInfo;
        r2.redirectEndTime = r2.postRedirectStartTime = v(e4.crossOriginIsolatedCapability), 0 === r2.redirectStartTime && (r2.redirectStartTime = r2.startTime);
        return t4.urlList.push(o4), f(t4, a4), fe(e4, true);
      })(e3, t3) : V(false)), t3.timingInfo = o3, t3) : s2("blocked");
    }
    async function Be(e3, n3 = false, a3 = false) {
      const r2 = e3.request;
      let c2 = null, m2 = null, u2 = null;
      "no-window" === r2.window && "error" === r2.redirect ? (c2 = e3, m2 = r2) : (m2 = l(r2), c2 = { ...e3 }, c2.request = m2);
      const g2 = "include" === r2.credentials || "same-origin" === r2.credentials && "basic" === r2.responseTainting, p2 = m2.body ? m2.body.length : null;
      let E2 = null;
      if (null == m2.body && ["POST", "PUT"].includes(m2.method) && (E2 = "0"), null != p2 && (E2 = O(`${p2}`)), null != E2 && m2.headersList.append("content-length", E2), null != p2 && m2.keepalive, m2.referrer instanceof URL && m2.headersList.append("referer", O(m2.referrer.href)), h(m2), C(m2), m2.headersList.contains("user-agent") || m2.headersList.append("user-agent", "undefined" == typeof esbuildDetection ? "undici" : "node"), "default" === m2.cache && (m2.headersList.contains("if-modified-since") || m2.headersList.contains("if-none-match") || m2.headersList.contains("if-unmodified-since") || m2.headersList.contains("if-match") || m2.headersList.contains("if-range")) && (m2.cache = "no-store"), "no-cache" !== m2.cache || m2.preventNoCacheCacheControlHeaderModification || m2.headersList.contains("cache-control") || m2.headersList.append("cache-control", "max-age=0"), "no-store" !== m2.cache && "reload" !== m2.cache || (m2.headersList.contains("pragma") || m2.headersList.append("pragma", "no-cache"), m2.headersList.contains("cache-control") || m2.headersList.append("cache-control", "no-cache")), m2.headersList.contains("range") && m2.headersList.append("accept-encoding", "identity"), m2.headersList.contains("accept-encoding") || (P(k(m2)) ? m2.headersList.append("accept-encoding", "br, gzip, deflate") : m2.headersList.append("accept-encoding", "gzip, deflate")), m2.headersList.delete("host"), m2.cache = "no-store", "no-store" !== m2.mode && m2.mode, null == u2) {
        if ("only-if-cached" === m2.mode) return s2("only if cached");
        const e4 = await (async function(e5) {
          V(!e5.controller.connection || e5.controller.connection.destroyed), e5.controller.connection = { abort: null, destroyed: false, destroy(e6) {
            this.destroyed || (this.destroyed = true, this.abort?.(e6 ?? new X("The operation was aborted.", "AbortError")));
          } };
          const n4 = e5.request;
          let a4 = null;
          const r3 = e5.timingInfo, c3 = null;
          null == c3 && (n4.cache = "no-store");
          n4.mode;
          let l2 = null;
          if (null == n4.body && e5.processRequestEndOfBody) queueMicrotask(() => e5.processRequestEndOfBody());
          else if (null != n4.body) {
            const t3 = async function* (n5) {
              w(e5) || (yield n5, e5.processRequestBodyChunkLength?.(n5.byteLength));
            }, a5 = () => {
              w(e5) || e5.processRequestEndOfBody && e5.processRequestEndOfBody();
            }, s3 = (n5) => {
              w(e5) || ("AbortError" === n5.name ? e5.controller.abort() : e5.controller.terminate(n5));
            };
            l2 = (async function* () {
              try {
                for await (const e6 of n4.body.stream) yield* t3(e6);
                a5();
              } catch (e6) {
                s3(e6);
              }
            })();
          }
          try {
            const { body: n5, status: t3, statusText: s3, headersList: o3, socket: r4 } = await E3({ body: l2 });
            if (r4) a4 = i({ status: t3, statusText: s3, headersList: o3, socket: r4 });
            else {
              const r5 = n5[Symbol.asyncIterator]();
              e5.controller.next = () => r5.next(), a4 = i({ status: t3, statusText: s3, headersList: o3 });
            }
          } catch (n5) {
            return "AbortError" === n5.name ? (e5.controller.connection.destroy(), o2(e5, n5)) : s2(n5);
          }
          const m3 = () => {
            e5.controller.resume();
          }, u3 = (n5) => {
            e5.controller.abort(n5);
          };
          pe || (pe = t2(3774).ReadableStream);
          const g3 = new pe({ async start(n5) {
            e5.controller.controller = n5;
          }, async pull(e6) {
            await m3(e6);
          }, async cancel(e6) {
            await u3(e6);
          } }, { highWaterMark: 0, size: () => 1 });
          function p3(n5) {
            b(e5) ? (a4.aborted = true, se(g3) && e5.controller.controller.error(e5.controller.serializedAbortReason)) : se(g3) && e5.controller.controller.error(new TypeError("terminated", { cause: D(n5) ? n5 : void 0 })), e5.controller.connection.destroy();
          }
          return a4.body = { stream: g3 }, e5.controller.on("terminated", p3), e5.controller.resume = async () => {
            for (; ; ) {
              let n5, t3;
              try {
                const { done: t4, value: a5 } = await e5.controller.next();
                if (b(e5)) break;
                n5 = t4 ? void 0 : a5;
              } catch (a5) {
                e5.controller.ended && !r3.encodedBodySize ? n5 = void 0 : (n5 = a5, t3 = true);
              }
              if (void 0 === n5) return F(e5.controller.controller), void Ie(e5, a4);
              if (r3.decodedBodySize += n5?.byteLength ?? 0, t3) return void e5.controller.terminate(n5);
              if (e5.controller.controller.enqueue(new Uint8Array(n5)), ae(g3)) return void e5.controller.terminate();
              if (!e5.controller.controller.desiredSize) return;
            }
          }, a4;
          async function E3({ body: t3 }) {
            const a5 = k(n4), s3 = e5.controller.dispatcher;
            return new Promise((o3, i2) => s3.dispatch({ path: a5.pathname + a5.search, origin: a5.origin, method: n4.method, body: e5.controller.dispatcher.isMockActive ? n4.body && (n4.body.source || n4.body.stream) : t3, headers: n4.headersList.entries, maxRedirections: 0, upgrade: "websocket" === n4.mode ? "websocket" : void 0 }, { body: null, abort: null, onConnect(n5) {
              const { connection: t4 } = e5.controller;
              t4.destroyed ? n5(new X("The operation was aborted.", "AbortError")) : (e5.controller.on("terminated", n5), this.abort = t4.abort = n5);
            }, onHeaders(e6, t4, a6, s4) {
              if (e6 < 200) return;
              let r4 = [], i3 = "";
              const c4 = new A();
              if (Array.isArray(t4)) for (let e7 = 0; e7 < t4.length; e7 += 2) {
                const n5 = t4[e7 + 0].toString("latin1"), a7 = t4[e7 + 1].toString("latin1");
                "content-encoding" === n5.toLowerCase() ? r4 = a7.toLowerCase().split(",").map((e8) => e8.trim()) : "location" === n5.toLowerCase() && (i3 = a7), c4[Z].append(n5, a7);
              }
              else {
                const e7 = Object.keys(t4);
                for (const n5 of e7) {
                  const e8 = t4[n5];
                  "content-encoding" === n5.toLowerCase() ? r4 = e8.toLowerCase().split(",").map((e9) => e9.trim()).reverse() : "location" === n5.toLowerCase() && (i3 = e8), c4[Z].append(n5, e8);
                }
              }
              this.body = new ee({ read: a6 });
              const l3 = [], m4 = "follow" === n4.redirect && i3 && H.has(e6);
              if ("HEAD" !== n4.method && "CONNECT" !== n4.method && !W.includes(e6) && !m4) for (const e7 of r4) if ("x-gzip" === e7 || "gzip" === e7) l3.push(d.createGunzip({ flush: d.constants.Z_SYNC_FLUSH, finishFlush: d.constants.Z_SYNC_FLUSH }));
              else if ("deflate" === e7) l3.push(d.createInflate());
              else {
                if ("br" !== e7) {
                  l3.length = 0;
                  break;
                }
                l3.push(d.createBrotliDecompress());
              }
              return o3({ status: e6, statusText: s4, headersList: c4[Z], body: l3.length ? ne(this.body, ...l3, () => {
              }) : this.body.on("error", () => {
              }) }), true;
            }, onData(n5) {
              if (e5.controller.dump) return;
              const t4 = n5;
              return r3.encodedBodySize += t4.byteLength, this.body.push(t4);
            }, onComplete() {
              this.abort && e5.controller.off("terminated", this.abort), e5.controller.ended = true, this.body.push(null);
            }, onError(n5) {
              this.abort && e5.controller.off("terminated", this.abort), this.body?.destroy(n5), e5.controller.terminate(n5), i2(n5);
            }, onUpgrade(e6, n5, t4) {
              if (101 !== e6) return;
              const a6 = new A();
              for (let e7 = 0; e7 < n5.length; e7 += 2) {
                const t5 = n5[e7 + 0].toString("latin1"), s4 = n5[e7 + 1].toString("latin1");
                a6[Z].append(t5, s4);
              }
              return o3({ status: e6, statusText: me[e6], headersList: a6[Z], socket: t4 }), true;
            } }));
          }
        })(c2, g2, a3);
        !j.has(m2.method) && e4.status >= 200 && e4.status, null == u2 && (u2 = e4);
      }
      if (u2.urlList = [...m2.urlList], m2.headersList.contains("range") && (u2.rangeRequested = true), u2.requestIncludesCredentials = g2, 407 === u2.status) return "no-window" === r2.window ? s2() : w(e3) ? o2(e3) : s2("proxy authentication required");
      if (421 === u2.status && !a3 && (null == r2.body || null != r2.body.source)) {
        if (w(e3)) return o2(e3);
        e3.controller.connection.destroy(), u2 = await Be(e3, n3, true);
      }
      return u2;
    }
    e2.exports = { fetch: function(e3, n3 = {}) {
      de.argumentLengthCheck(arguments, 1, { header: "globalThis.fetch" });
      const t3 = R();
      let s3;
      try {
        s3 = new c(e3, n3);
      } catch (e4) {
        return t3.reject(e4), t3.promise;
      }
      const o3 = s3[x];
      if (s3.signal.aborted) return Te(t3, o3, null, s3.signal.reason), t3.promise;
      const r2 = o3.client.globalObject;
      "ServiceWorkerGlobalScope" === r2?.constructor?.name && (o3.serviceWorkers = "none");
      let i2 = null, A2 = false, l2 = null;
      return te(s3.signal, () => {
        A2 = true, V(null != l2), l2.abort(s3.signal.reason), Te(t3, o3, i2, s3.signal.reason);
      }), l2 = ke({ request: o3, processResponseEndOfBody: (e4) => he(e4, "fetch"), processResponse: (e4) => A2 ? Promise.resolve() : e4.aborted ? (Te(t3, o3, i2, l2.serializedAbortReason), Promise.resolve()) : "error" === e4.type ? (t3.reject(Object.assign(new TypeError("fetch failed"), { cause: e4.error })), Promise.resolve()) : (i2 = new a2(), i2[x] = e4, i2[J] = null, i2[G][Z] = e4.headersList, i2[G][Y] = "immutable", i2[G][J] = null, void t3.resolve(i2)), dispatcher: n3.dispatcher ?? le() }), t3.promise;
    }, Fetch: Ee, fetching: ke, finalizeAndReportTiming: he };
  }