// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 91691 range:13732388..13746867
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
91691: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.BidiTransportFactory = t.BIDI_APPEND_MAX_CONSECUTIVE_FAILURES = void 0;
    const n = r(77598), s = r(96980), o = r(14281), i = r(82537), a = r(67918), c = r(22712), l = r(32158), u = r(5684), d = r(30668);
    class p {
      constructor(e2, t2) {
        this.transport = e2, this.mode = t2;
      }
      unary(e2, t2, r2, n2, s2, o2, i2) {
        return this.transport.unary(e2, t2, r2, n2, s2, o2, i2);
      }
      async stream(e2, t2, r2, n2, o2, i2, a2) {
        const c2 = await this.transport.stream(e2, t2, r2, n2, o2, i2, a2);
        return c2.header.set(s.AGENT_TRANSPORT_MODE_RESPONSE_HEADER, this.mode), c2;
      }
    }
    const m = "bidi_append_fix";
    function h(e2) {
      return e2 instanceof Error ? e2 : new Error(String(e2));
    }
    function f(e2) {
      return e2 instanceof c.ConnectError ? c.Code[e2.code] : "non_connect";
    }
    function g(e2) {
      return e2 instanceof c.ConnectError ? { connectCode: c.Code[e2.code] } : {};
    }
    t.BIDI_APPEND_MAX_CONSECUTIVE_FAILURES = 5;
    function y(e2) {
      try {
        Object.defineProperty(e2, "cursorBidiAppendFatal", { value: true, enumerable: false, configurable: true });
      } catch {
      }
      return e2;
    }
    function w(e2) {
      return !(e2 instanceof c.ConnectError) || (e2.code === c.Code.Unavailable || e2.code === c.Code.Internal || e2.code === c.Code.DeadlineExceeded || e2.code === c.Code.Aborted);
    }
    function v(e2, t2) {
      const r2 = t2.filter((e3) => void 0 !== e3);
      return e2 <= 0 ? Promise.resolve(!r2.some((e3) => e3.aborted)) : new Promise((t3) => {
        let n2;
        function s2() {
          void 0 !== n2 && clearTimeout(n2);
          for (const e3 of r2) e3.removeEventListener("abort", o2);
        }
        function o2() {
          s2(), t3(false);
        }
        n2 = setTimeout(() => {
          s2(), t3(true);
        }, e2);
        for (const e3 of r2) e3.addEventListener("abort", o2, { once: true });
        r2.some((e3) => e3.aborted) && (s2(), t3(false));
      });
    }
    class _ {
      constructor(e2) {
        this.waiting = [], this.permits = e2;
      }
      async acquire() {
        if (!(this.permits > 0)) return new Promise((e2) => {
          this.waiting.push(e2);
        });
        this.permits--;
      }
      release() {
        if (this.waiting.length > 0) {
          this.waiting.shift()();
        } else this.permits++;
      }
    }
    class A {
      constructor(e2, t2, r2, n2, s2, o2) {
        this.host = e2, this.bidiEndpointMap = t2, this.bidiClient = r2, this.transport = n2, this.mode = s2, this.binaryEncoding = o2, this.debugLog = e2.debugLog;
      }
      telemetryTags(e2) {
        return { transport_mode: e2.transportMode, loop: e2.loop, target_method: e2.targetMethod };
      }
      recordAppend(e2, t2, r2) {
        (0, d.incrementTransportMetric)(this.host, "agent_client.bidi_append", { ...this.telemetryTags(e2), outcome: t2, ...void 0 === r2 ? {} : { connect_code: f(r2) } });
      }
      recordPoll(e2, t2, r2) {
        (0, d.incrementTransportMetric)(this.host, "agent_client.bidi_poll", { ...this.telemetryTags(e2), outcome: t2, ...void 0 === r2 ? {} : { connect_code: f(r2) } });
      }
      emitStreamLog(e2, t2, r2, n2, s2) {
        (0, d.emitTransportStructuredLog)(this.host, { level: t2, message: n2, metadata: { service: "bidi_transport", subkey: r2, requestId: e2.requestId, transportMode: e2.transportMode, loop: e2.loop, targetMethod: e2.targetMethod, ...s2 } });
      }
      async unary(e2, t2, r2, n2, s2, o2, i2) {
        return this.transport.unary(e2, t2, r2, n2, s2, o2, i2);
      }
      async stream(e2, t2, r2, s2, o2, i2, a2) {
        const c2 = (function(e3) {
          const t3 = e3 instanceof Headers ? e3.get("x-request-id") : Array.isArray(e3) ? e3.find(([e4]) => "x-request-id" === e4)?.[1] : e3?.["x-request-id"];
          if ("string" == typeof t3) return t3;
          const r3 = (0, n.randomUUID)();
          return e3 instanceof Headers ? e3.set("x-request-id", r3) : Array.isArray(e3) ? e3.push(["x-request-id", r3]) : "object" == typeof e3 && null !== e3 && (e3["x-request-id"] = r3), r3;
        })(o2), l2 = (0, d.classifyBidiStreamLoop)(e2.typeName, t2.name), u2 = this.bidiEndpointMap[t2.name];
        u2 && (t2 = { ...u2, O: t2.O });
        const p2 = { requestId: c2, transportMode: this.mode, loop: l2, targetMethod: t2.name };
        let m2;
        const h2 = new Promise((e3, t3) => {
          m2 = t3;
        });
        h2.catch(() => {
        });
        const f2 = this.connectForStartOfStream(p2, e2, t2, r2, s2, o2, a2);
        this.startYieldingInputsToTheServer(p2, i2, s2, r2, o2, m2);
        const g2 = await f2, y2 = g2.message, w2 = { [Symbol.asyncIterator]() {
          const e3 = y2[Symbol.asyncIterator]();
          return { next: () => Promise.race([e3.next(), h2]), return: (t3) => e3.return?.(t3) ?? Promise.resolve({ done: true, value: void 0 }), throw: (t3) => e3.throw?.(t3) ?? Promise.resolve({ done: true, value: void 0 }) };
        } };
        return { ...g2, message: w2 };
      }
      startYieldingInputsToTheServer(e2, r2, n2 = 6e5, o2, a2, c2) {
        const { requestId: l2 } = e2;
        this.debugLog.info(`[BidiTransport:${l2}] starting to yield inputs to the server, with timeout ${n2}ms`), o2?.aborted ? this.debugLog.info(`[BidiTransport:${l2}] already aborted, not starting`) : Promise.resolve().then(async () => {
          let u2 = false;
          try {
            u2 = await this.host.checkFeatureGate(m);
          } catch (e3) {
            this.debugLog.warn(`[BidiTransport:${l2}] failed to check ${m} feature gate, keeping existing behavior`, e3);
          }
          let d2 = 0, p2 = false;
          const f2 = new AbortController(), A2 = r2[Symbol.asyncIterator](), S2 = new _(32), b2 = [], E = (t2, r3, n3) => {
            p2 || (p2 = true, f2.abort(), this.debugLog.error(`[BidiTransport:${l2}] ${r3}`), this.recordAppend(e2, n3.outcome, t2), this.emitStreamLog(e2, "warn", "bidi_append_fatal", "BidiAppend failed fatally", { outcome: n3.outcome, seqno: n3.seqno, failures: n3.failures, ...g(t2) }), c2(y(h(t2))));
          }, I = o2 ? new Promise((e3, t2) => {
            o2.addEventListener("abort", () => t2(new Error("Aborted")), { once: true });
          }) : void 0;
          for (I?.catch(() => {
          }); !p2; ) try {
            let r3;
            const m2 = new Promise((e3, t2) => {
              r3 = setTimeout(() => t2(new Error("Timeout waiting for next input")), n2);
            }), _2 = [A2.next(), m2];
            let C;
            I && _2.push(I);
            try {
              C = await Promise.race(_2);
            } finally {
              void 0 !== r3 && clearTimeout(r3);
            }
            if (C.done) {
              this.debugLog.info(`[BidiTransport:${l2}] iterator done, breaking loop`);
              break;
            }
            if (await S2.acquire(), p2) {
              S2.release();
              break;
            }
            const k = d2++, x = new i.BidiRequestId({ requestId: l2 }), T = C.value.toBinary(), R = this.binaryEncoding ? { requestId: x, appendSeqno: BigInt(k), dataBinary: T } : { requestId: x, appendSeqno: BigInt(k), data: Buffer.from(T).toString("hex") }, B = async () => {
              await this.bidiClient.bidiAppend(R, { headers: a2 });
            }, P = (u2 ? (async () => {
              let r4 = 0;
              for (; !o2?.aborted && !p2; ) try {
                return await B(), void this.recordAppend(e2, "ok");
              } catch (n3) {
                if (o2?.aborted || p2) return;
                if (this.debugLog.error(`[BidiTransport:${l2}] bidiAppend failed for seqno ${k}:`, n3), !w(n3)) return void E(n3, `bidiAppend failed with non-retryable error for seqno ${k}, surfacing fatal append error`, { outcome: "fatal_non_retryable", seqno: k, failures: r4 + 1 });
                if (r4++, r4 >= t.BIDI_APPEND_MAX_CONSECUTIVE_FAILURES) return void E(n3, `bidiAppend failed ${r4} times for seqno ${k}, surfacing fatal append error`, { outcome: "fatal_budget", seqno: k, failures: r4 });
                this.recordAppend(e2, "retried", n3);
                const i2 = (0, s.calculateBackoffDelay)(r4 - 1, 1e3, 3e4);
                this.debugLog.info(`[BidiTransport:${l2}] bidiAppend failure #${r4}, backing off ${i2}ms before retrying seqno ${k}`);
                if (!await v(i2, [o2, f2.signal])) return;
              }
            })() : B().then(() => {
              this.recordAppend(e2, "ok");
            }, (t2) => {
              this.debugLog.error(`[BidiTransport:${l2}] bidiAppend failed for seqno ${k}:`, t2), this.recordAppend(e2, "fatal_unretried", t2), this.emitStreamLog(e2, "warn", "bidi_append_fatal", "BidiAppend failed fatally", { outcome: "fatal_unretried", seqno: k, failures: 1, ...g(t2) }), c2(y(h(t2)));
            })).finally(() => {
              S2.release();
            });
            b2.push(P);
          } catch (t2) {
            if ("Timeout waiting for next input" === t2.message) {
              this.debugLog.info(`[BidiTransport:${l2}] timeout waiting for next input, breaking loop`), this.recordAppend(e2, "input_idle_timeout"), this.emitStreamLog(e2, "info", "bidi_append_input_idle", "BidiAppend pump closed on input idle", { timeoutMs: n2, appendsSent: d2 });
              break;
            }
            if ("Aborted" === t2.message) {
              this.debugLog.info(`[BidiTransport:${l2}] aborted, breaking loop`);
              break;
            }
            throw this.debugLog.error(`[BidiTransport:${l2}] error processing input:`, t2), t2;
          }
          await Promise.allSettled(b2), this.debugLog.info(`[BidiTransport:${l2}] finished yielding inputs to the server`);
        }).catch((e3) => {
          this.debugLog.error(`[BidiTransport:${l2}] error in yield promise:`, e3);
        });
      }
    }
    class S extends A {
      async connectForStartOfStream(e2, t2, r2, n2, s2, o2, a2) {
        const c2 = new i.BidiRequestId({ requestId: e2.requestId }), u2 = (0, l.createAsyncIterable)([c2]);
        return this.transport.stream(t2, r2, n2, s2, o2, u2, a2);
      }
    }
    class b extends A {
      async connectForStartOfStream(e2, t2, r2, n2, o2, d2, p2) {
        const { requestId: h2 } = e2, f2 = new i.BidiRequestId({ requestId: h2 }), g2 = new i.BidiPollRequest({ requestId: f2, startRequest: true }), y2 = (0, l.createAsyncIterable)([g2]), w2 = { ...r2, O: i.BidiPollResponse };
        let _2 = await this.transport.stream(t2, w2, n2, o2, d2, y2, p2);
        const A2 = new u.AsyncIterPushable(o2 ?? 6e5);
        return async function() {
          let u2 = false;
          try {
            u2 = await this.host.checkFeatureGate(m);
          } catch (e3) {
            this.debugLog.warn(`[BidiTransport:${h2}] failed to check ${m} feature gate, keeping existing behavior`, e3);
          }
          let g3, y3 = false, S2 = 0;
          const b2 = new i.BidiPollRequest({ requestId: f2 });
          try {
            let i2 = BigInt(0);
            for (; !n2?.aborted; ) {
              let m2 = false;
              for await (const t3 of _2.message) {
                if (m2 = true, t3.eof || true === n2?.aborted) {
                  y3 = true;
                  break;
                }
                if (t3.seqno !== i2) {
                  g3 = t3.seqno > i2 ? "seqno_gap" : "seqno_duplicate", this.emitStreamLog(e2, "warn", "bidi_poll_seqno", "BidiPoll refused an out-of-order seqno", { outcome: g3, expectedSeqno: i2.toString(), receivedSeqno: t3.seqno.toString() });
                  const r3 = `Unexpected seqno: ${t3.seqno} != ${i2}. Please try again, or contact support if the issue persists.`, n3 = new a.ErrorDetails({ error: a.ErrorDetails_Error.NETWORK_ERROR, details: { title: "Network Error", detail: r3, isRetryable: true }, isExpected: false });
                  throw new c.ConnectError(r3, c.Code.Unavailable, void 0, [n3]);
                }
                i2 += BigInt(1);
                const s2 = r2.O.fromBinary(Buffer.from(t3.data, "hex"));
                A2.push(s2);
              }
              if (y3) {
                this.recordPoll(e2, "eof");
                break;
              }
              if (this.recordPoll(e2, m2 ? "slice" : "empty"), u2 && m2) S2 = 0;
              else if (u2) {
                S2++;
                const e3 = (0, s.calculateBackoffDelay)(S2 - 1, 1e3, 3e4);
                this.debugLog.info(`[BidiTransport:${h2}] empty poll response #${S2}, backing off ${e3}ms`);
                if (!await v(e3, [n2])) break;
              }
              if (n2?.aborted) break;
              const f3 = (0, l.createAsyncIterable)([b2]);
              _2 = await this.transport.stream(t2, w2, n2, o2, d2, f3, p2);
            }
          } catch (t3) {
            this.recordPoll(e2, g3 ?? (n2?.aborted ? "cancelled" : "error"), t3), A2.error(t3);
          } finally {
            A2.end();
          }
        }.bind(this)(), { ..._2, method: r2, message: A2 };
      }
    }
    t.BidiTransportFactory = class {
      constructor(e2, t2, r2, n2) {
        this.host = e2, this.transportFactory = t2, this.bidiSSEEndpointMap = r2, this.bidiPollEndpointMap = n2;
      }
      createTransport(e2) {
        if (e2.useHttp2) {
          const t3 = this.transportFactory.createTransport({ ...e2, pingConfig: e2.pingConfig, usePooledConnections: e2.usePooledConnections, connectionPoolSize: e2.connectionPoolSize });
          return t3.transport = new p(t3.transport, "http2"), t3;
        }
        const t2 = this.transportFactory.createTransport({ ...e2, useHttp2: false, getHttp1KeepaliveDisabled: e2.getHttp1KeepaliveDisabled, http1KeepaliveInitialDelayMs: e2.http1KeepaliveInitialDelayMs });
        let r2 = e2.bidiTransport?.transport;
        r2 || (r2 = t2.transport);
        const n2 = (0, c.createClient)(o.BidiService, r2), s2 = true === e2.binaryEncoding;
        return !this.host.isHttp1SseDisabled() ? (t2.transport = new S(this.host, this.bidiSSEEndpointMap, n2, t2.transport, "http1_sse", s2), t2.transport = new p(t2.transport, "http1_sse")) : (t2.transport = new b(this.host, this.bidiPollEndpointMap, n2, t2.transport, "http1_poll", s2), t2.transport = new p(t2.transport, "http1_poll")), t2;
      }
    };
  }