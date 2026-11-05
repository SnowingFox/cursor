// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1691 range:589105..603607
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1691: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.BidiTransportFactory = e2.BIDI_APPEND_MAX_CONSECUTIVE_FAILURES = void 0;
    const n2 = r2(7598), s2 = r2(6402), i2 = r2(4281), o2 = r2(2537), a = r2(7918), u = r2(8394), c = r2(2158), l = r2(5684), m = r2(668);
    class d {
      constructor(t3, e3) {
        this.transport = t3, this.mode = e3;
      }
      unary(t3, e3, r3, n3, s3, i3, o3) {
        return this.transport.unary(t3, e3, r3, n3, s3, i3, o3);
      }
      async stream(t3, e3, r3, n3, i3, o3, a2) {
        const u2 = await this.transport.stream(t3, e3, r3, n3, i3, o3, a2);
        return u2.header.set(s2.AGENT_TRANSPORT_MODE_RESPONSE_HEADER, this.mode), u2;
      }
    }
    const f = "bidi_append_fix";
    function p(t3) {
      return t3 instanceof Error ? t3 : new Error(String(t3));
    }
    function h(t3) {
      return t3 instanceof u.ConnectError ? u.Code[t3.code] : "non_connect";
    }
    function g(t3) {
      return t3 instanceof u.ConnectError ? { connectCode: u.Code[t3.code] } : {};
    }
    e2.BIDI_APPEND_MAX_CONSECUTIVE_FAILURES = 5;
    function A(t3) {
      try {
        Object.defineProperty(t3, "cursorBidiAppendFatal", { value: true, enumerable: false, configurable: true });
      } catch {
      }
      return t3;
    }
    function _(t3) {
      return !(t3 instanceof u.ConnectError) || (t3.code === u.Code.Unavailable || t3.code === u.Code.Internal || t3.code === u.Code.DeadlineExceeded || t3.code === u.Code.Aborted);
    }
    function y(t3, e3) {
      const r3 = e3.filter((t4) => void 0 !== t4);
      return t3 <= 0 ? Promise.resolve(!r3.some((t4) => t4.aborted)) : new Promise((e4) => {
        let n3;
        function s3() {
          void 0 !== n3 && clearTimeout(n3);
          for (const t4 of r3) t4.removeEventListener("abort", i3);
        }
        function i3() {
          s3(), e4(false);
        }
        n3 = setTimeout(() => {
          s3(), e4(true);
        }, t3);
        for (const t4 of r3) t4.addEventListener("abort", i3, { once: true });
        r3.some((t4) => t4.aborted) && (s3(), e4(false));
      });
    }
    class w {
      constructor(t3) {
        this.waiting = [], this.permits = t3;
      }
      async acquire() {
        if (!(this.permits > 0)) return new Promise((t3) => {
          this.waiting.push(t3);
        });
        this.permits--;
      }
      release() {
        if (this.waiting.length > 0) {
          this.waiting.shift()();
        } else this.permits++;
      }
    }
    class S {
      constructor(t3, e3, r3, n3, s3, i3) {
        this.host = t3, this.bidiEndpointMap = e3, this.bidiClient = r3, this.transport = n3, this.mode = s3, this.binaryEncoding = i3, this.debugLog = t3.debugLog;
      }
      telemetryTags(t3) {
        return { transport_mode: t3.transportMode, loop: t3.loop, target_method: t3.targetMethod };
      }
      recordAppend(t3, e3, r3) {
        (0, m.incrementTransportMetric)(this.host, "agent_client.bidi_append", { ...this.telemetryTags(t3), outcome: e3, ...void 0 === r3 ? {} : { connect_code: h(r3) } });
      }
      recordPoll(t3, e3, r3) {
        (0, m.incrementTransportMetric)(this.host, "agent_client.bidi_poll", { ...this.telemetryTags(t3), outcome: e3, ...void 0 === r3 ? {} : { connect_code: h(r3) } });
      }
      emitStreamLog(t3, e3, r3, n3, s3) {
        (0, m.emitTransportStructuredLog)(this.host, { level: e3, message: n3, metadata: { service: "bidi_transport", subkey: r3, requestId: t3.requestId, transportMode: t3.transportMode, loop: t3.loop, targetMethod: t3.targetMethod, ...s3 } });
      }
      async unary(t3, e3, r3, n3, s3, i3, o3) {
        return this.transport.unary(t3, e3, r3, n3, s3, i3, o3);
      }
      async stream(t3, e3, r3, s3, i3, o3, a2) {
        const u2 = (function(t4) {
          const e4 = t4 instanceof Headers ? t4.get("x-request-id") : Array.isArray(t4) ? t4.find(([t5]) => "x-request-id" === t5)?.[1] : t4?.["x-request-id"];
          if ("string" == typeof e4) return e4;
          const r4 = (0, n2.randomUUID)();
          return t4 instanceof Headers ? t4.set("x-request-id", r4) : Array.isArray(t4) ? t4.push(["x-request-id", r4]) : "object" == typeof t4 && null !== t4 && (t4["x-request-id"] = r4), r4;
        })(i3), c2 = (0, m.classifyBidiStreamLoop)(t3.typeName, e3.name), l2 = this.bidiEndpointMap[e3.name];
        l2 && (e3 = { ...l2, O: e3.O });
        const d2 = { requestId: u2, transportMode: this.mode, loop: c2, targetMethod: e3.name };
        let f2;
        const p2 = new Promise((t4, e4) => {
          f2 = e4;
        });
        p2.catch(() => {
        });
        const h2 = this.connectForStartOfStream(d2, t3, e3, r3, s3, i3, a2);
        this.startYieldingInputsToTheServer(d2, o3, s3, r3, i3, f2);
        const g2 = await h2, A2 = g2.message, _2 = { [Symbol.asyncIterator]() {
          const t4 = A2[Symbol.asyncIterator]();
          return { next: () => Promise.race([t4.next(), p2]), return: (e4) => t4.return?.(e4) ?? Promise.resolve({ done: true, value: void 0 }), throw: (e4) => t4.throw?.(e4) ?? Promise.resolve({ done: true, value: void 0 }) };
        } };
        return { ...g2, message: _2 };
      }
      startYieldingInputsToTheServer(t3, r3, n3 = 6e5, i3, a2, u2) {
        const { requestId: c2 } = t3;
        this.debugLog.info(`[BidiTransport:${c2}] starting to yield inputs to the server, with timeout ${n3}ms`), i3?.aborted ? this.debugLog.info(`[BidiTransport:${c2}] already aborted, not starting`) : Promise.resolve().then(async () => {
          let l2 = false;
          try {
            l2 = await this.host.checkFeatureGate(f);
          } catch (t4) {
            this.debugLog.warn(`[BidiTransport:${c2}] failed to check ${f} feature gate, keeping existing behavior`, t4);
          }
          let m2 = 0, d2 = false;
          const h2 = new AbortController(), S2 = r3[Symbol.asyncIterator](), J2 = new w(32), B2 = [], E = (e3, r4, n4) => {
            d2 || (d2 = true, h2.abort(), this.debugLog.error(`[BidiTransport:${c2}] ${r4}`), this.recordAppend(t3, n4.outcome, e3), this.emitStreamLog(t3, "warn", "bidi_append_fatal", "BidiAppend failed fatally", { outcome: n4.outcome, seqno: n4.seqno, failures: n4.failures, ...g(e3) }), u2(A(p(e3))));
          }, I = i3 ? new Promise((t4, e3) => {
            i3.addEventListener("abort", () => e3(new Error("Aborted")), { once: true });
          }) : void 0;
          for (I?.catch(() => {
          }); !d2; ) try {
            let r4;
            const f2 = new Promise((t4, e3) => {
              r4 = setTimeout(() => e3(new Error("Timeout waiting for next input")), n3);
            }), w2 = [S2.next(), f2];
            let C;
            I && w2.push(I);
            try {
              C = await Promise.race(w2);
            } finally {
              void 0 !== r4 && clearTimeout(r4);
            }
            if (C.done) {
              this.debugLog.info(`[BidiTransport:${c2}] iterator done, breaking loop`);
              break;
            }
            if (await J2.acquire(), d2) {
              J2.release();
              break;
            }
            const b = m2++, k = new o2.BidiRequestId({ requestId: c2 }), v = C.value.toBinary(), q = this.binaryEncoding ? { requestId: k, appendSeqno: BigInt(b), dataBinary: v } : { requestId: k, appendSeqno: BigInt(b), data: Buffer.from(v).toString("hex") }, R = async () => {
              await this.bidiClient.bidiAppend(q, { headers: a2 });
            }, P = (l2 ? (async () => {
              let r5 = 0;
              for (; !i3?.aborted && !d2; ) try {
                return await R(), void this.recordAppend(t3, "ok");
              } catch (n4) {
                if (i3?.aborted || d2) return;
                if (this.debugLog.error(`[BidiTransport:${c2}] bidiAppend failed for seqno ${b}:`, n4), !_(n4)) return void E(n4, `bidiAppend failed with non-retryable error for seqno ${b}, surfacing fatal append error`, { outcome: "fatal_non_retryable", seqno: b, failures: r5 + 1 });
                if (r5++, r5 >= e2.BIDI_APPEND_MAX_CONSECUTIVE_FAILURES) return void E(n4, `bidiAppend failed ${r5} times for seqno ${b}, surfacing fatal append error`, { outcome: "fatal_budget", seqno: b, failures: r5 });
                this.recordAppend(t3, "retried", n4);
                const o3 = (0, s2.calculateBackoffDelay)(r5 - 1, 1e3, 3e4);
                this.debugLog.info(`[BidiTransport:${c2}] bidiAppend failure #${r5}, backing off ${o3}ms before retrying seqno ${b}`);
                if (!await y(o3, [i3, h2.signal])) return;
              }
            })() : R().then(() => {
              this.recordAppend(t3, "ok");
            }, (e3) => {
              this.debugLog.error(`[BidiTransport:${c2}] bidiAppend failed for seqno ${b}:`, e3), this.recordAppend(t3, "fatal_unretried", e3), this.emitStreamLog(t3, "warn", "bidi_append_fatal", "BidiAppend failed fatally", { outcome: "fatal_unretried", seqno: b, failures: 1, ...g(e3) }), u2(A(p(e3)));
            })).finally(() => {
              J2.release();
            });
            B2.push(P);
          } catch (e3) {
            if ("Timeout waiting for next input" === e3.message) {
              this.debugLog.info(`[BidiTransport:${c2}] timeout waiting for next input, breaking loop`), this.recordAppend(t3, "input_idle_timeout"), this.emitStreamLog(t3, "info", "bidi_append_input_idle", "BidiAppend pump closed on input idle", { timeoutMs: n3, appendsSent: m2 });
              break;
            }
            if ("Aborted" === e3.message) {
              this.debugLog.info(`[BidiTransport:${c2}] aborted, breaking loop`);
              break;
            }
            throw this.debugLog.error(`[BidiTransport:${c2}] error processing input:`, e3), e3;
          }
          await Promise.allSettled(B2), this.debugLog.info(`[BidiTransport:${c2}] finished yielding inputs to the server`);
        }).catch((t4) => {
          this.debugLog.error(`[BidiTransport:${c2}] error in yield promise:`, t4);
        });
      }
    }
    class J extends S {
      async connectForStartOfStream(t3, e3, r3, n3, s3, i3, a2) {
        const u2 = new o2.BidiRequestId({ requestId: t3.requestId }), l2 = (0, c.createAsyncIterable)([u2]);
        return this.transport.stream(e3, r3, n3, s3, i3, l2, a2);
      }
    }
    class B extends S {
      async connectForStartOfStream(t3, e3, r3, n3, i3, m2, d2) {
        const { requestId: p2 } = t3, h2 = new o2.BidiRequestId({ requestId: p2 }), g2 = new o2.BidiPollRequest({ requestId: h2, startRequest: true }), A2 = (0, c.createAsyncIterable)([g2]), _2 = { ...r3, O: o2.BidiPollResponse };
        let w2 = await this.transport.stream(e3, _2, n3, i3, m2, A2, d2);
        const S2 = new l.AsyncIterPushable(i3 ?? 6e5);
        return async function() {
          let l2 = false;
          try {
            l2 = await this.host.checkFeatureGate(f);
          } catch (t4) {
            this.debugLog.warn(`[BidiTransport:${p2}] failed to check ${f} feature gate, keeping existing behavior`, t4);
          }
          let g3, A3 = false, J2 = 0;
          const B2 = new o2.BidiPollRequest({ requestId: h2 });
          try {
            let o3 = BigInt(0);
            for (; !n3?.aborted; ) {
              let f2 = false;
              for await (const e4 of w2.message) {
                if (f2 = true, e4.eof || true === n3?.aborted) {
                  A3 = true;
                  break;
                }
                if (e4.seqno !== o3) {
                  g3 = e4.seqno > o3 ? "seqno_gap" : "seqno_duplicate", this.emitStreamLog(t3, "warn", "bidi_poll_seqno", "BidiPoll refused an out-of-order seqno", { outcome: g3, expectedSeqno: o3.toString(), receivedSeqno: e4.seqno.toString() });
                  const r4 = `Unexpected seqno: ${e4.seqno} != ${o3}. Please try again, or contact support if the issue persists.`, n4 = new a.ErrorDetails({ error: a.ErrorDetails_Error.NETWORK_ERROR, details: { title: "Network Error", detail: r4, isRetryable: true }, isExpected: false });
                  throw new u.ConnectError(r4, u.Code.Unavailable, void 0, [n4]);
                }
                o3 += BigInt(1);
                const s3 = r3.O.fromBinary(Buffer.from(e4.data, "hex"));
                S2.push(s3);
              }
              if (A3) {
                this.recordPoll(t3, "eof");
                break;
              }
              if (this.recordPoll(t3, f2 ? "slice" : "empty"), l2 && f2) J2 = 0;
              else if (l2) {
                J2++;
                const t4 = (0, s2.calculateBackoffDelay)(J2 - 1, 1e3, 3e4);
                this.debugLog.info(`[BidiTransport:${p2}] empty poll response #${J2}, backing off ${t4}ms`);
                if (!await y(t4, [n3])) break;
              }
              if (n3?.aborted) break;
              const h3 = (0, c.createAsyncIterable)([B2]);
              w2 = await this.transport.stream(e3, _2, n3, i3, m2, h3, d2);
            }
          } catch (e4) {
            this.recordPoll(t3, g3 ?? (n3?.aborted ? "cancelled" : "error"), e4), S2.error(e4);
          } finally {
            S2.end();
          }
        }.bind(this)(), { ...w2, method: r3, message: S2 };
      }
    }
    e2.BidiTransportFactory = class {
      constructor(t3, e3, r3, n3) {
        this.host = t3, this.transportFactory = e3, this.bidiSSEEndpointMap = r3, this.bidiPollEndpointMap = n3;
      }
      createTransport(t3) {
        if (t3.useHttp2) {
          const e4 = this.transportFactory.createTransport({ ...t3, pingConfig: t3.pingConfig, usePooledConnections: t3.usePooledConnections, connectionPoolSize: t3.connectionPoolSize });
          return e4.transport = new d(e4.transport, "http2"), e4;
        }
        const e3 = this.transportFactory.createTransport({ ...t3, useHttp2: false, getHttp1KeepaliveDisabled: t3.getHttp1KeepaliveDisabled, http1KeepaliveInitialDelayMs: t3.http1KeepaliveInitialDelayMs });
        let r3 = t3.bidiTransport?.transport;
        r3 || (r3 = e3.transport);
        const n3 = (0, u.createClient)(i2.BidiService, r3), s3 = true === t3.binaryEncoding;
        return !this.host.isHttp1SseDisabled() ? (e3.transport = new J(this.host, this.bidiSSEEndpointMap, n3, e3.transport, "http1_sse", s3), e3.transport = new d(e3.transport, "http1_sse")) : (e3.transport = new B(this.host, this.bidiPollEndpointMap, n3, e3.transport, "http1_poll", s3), e3.transport = new d(e3.transport, "http1_poll")), e3;
      }
    };
  }