// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 17392 range:4193688..4299565
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
17392: (e, t, r) => {
    "use strict";
    r.d(t, { ao: () => L, PW: () => Xt, Yv: () => F, cc: () => G, i6: () => Q, SK: () => $, DN: () => U, r0: () => xt, rS: () => Qt, IQ: () => er, gZ: () => pt, T8: () => tr, EF: () => Zt, tK: () => Ge, wq: () => Ar, qi: () => Dt, Xs: () => c, yM: () => we, W7: () => ht, RN: () => Fr, vX: () => Nr, dI: () => Or, uu: () => ut, By: () => At, fZ: () => Ut, Wt: () => _t, P_: () => Ft, oo: () => yr, yp: () => O });
    var n = r(98875), s = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, o = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class i {
      constructor(e2, t2, r2) {
        this.checkpointStream = e2, this.checkpointHandler = t2, this.ctx = r2;
      }
      async run() {
        const e2 = { stack: [], error: void 0, hasError: false };
        try {
          const t2 = s(e2, (0, n.VI)(this.ctx.withName("CheckpointController.run")), false).ctx, r2 = [];
          for await (const e3 of this.checkpointStream) r2.push(this.checkpointHandler.handleCheckpoint(t2, e3.checkpoint, e3.metadata));
          await Promise.all(r2);
        } catch (t2) {
          e2.error = t2, e2.hasError = true;
        } finally {
          o(e2);
        }
      }
    }
    var a = r(9639);
    function c(e2) {
      return void 0 !== e2.subagentTypeName && "" !== e2.subagentTypeName;
    }
    const l = (e2) => String(e2).replace(/[\r\n]/g, "");
    function u(e2) {
      return { ...void 0 !== e2.parentRequestId ? { "x-parent-request-id": l(e2.parentRequestId) } : {}, ...void 0 !== e2.rootParentRequestId ? { "x-root-parent-request-id": l(e2.rootParentRequestId) } : {}, ...void 0 !== e2.parentAgentToolCallId ? { "x-parent-agent-tool-call-id": l(e2.parentAgentToolCallId) } : {}, ...true === e2.directMetaParentChildSubagent ? { "x-direct-meta-parent-child-subagent": "true" } : {} };
    }
    const d = "x-inference-authentication-jwt";
    function p() {
      const e2 = globalThis.process?.env, t2 = e2?.INFERENCE_PROXY_JWT?.trim();
      return void 0 === t2 || "" === t2 || t2.startsWith("$") ? {} : { [d]: t2 };
    }
    var m = r(57124), h = r(14101), f = r(27322), g = r(33002), y = r(37949), w = r(70144), v = r(69584), _ = r(68100), A = r(55094), S = r(62671), b = r(77598), E = r(73024);
    const I = "/dev/urandom";
    let C, k = false;
    function x() {
      const e2 = (function(e3) {
        if (!k) try {
          void 0 === C && (C = (0, E.openSync)(I, "r"));
          const t2 = Buffer.alloc(e3);
          let r2 = 0;
          for (; r2 < e3; ) {
            const n2 = (0, E.readSync)(C, t2, r2, e3 - r2, null);
            if (n2 <= 0) return;
            r2 += n2;
          }
          return t2;
        } catch {
          if (k = true, void 0 !== C) {
            try {
              (0, E.closeSync)(C);
            } catch {
            }
            C = void 0;
          }
          return;
        }
      })(16);
      return void 0 === e2 ? (0, b.randomUUID)({ disableEntropyCache: true }) : (function(e3) {
        const t2 = e3[6] ?? 0, r2 = e3[8] ?? 0;
        e3[6] = 15 & t2 | 64, e3[8] = 63 & r2 | 128;
        const n2 = e3.toString("hex");
        return `${n2.slice(0, 8)}-${n2.slice(8, 12)}-${n2.slice(12, 16)}-${n2.slice(16, 20)}-${n2.slice(20)}`;
      })(e2);
    }
    var T = r(91434), R = r(36038), B = r(8032), P = r(78205), J = r(67918), M = r(81958);
    const q = "relayedAttemptFailure", D = M.Ik({ transport: M.zM(), stallAborted: M.zM(), errorName: M.Yj(), connectCode: M.ai().optional(), connectCodeName: M.Yj().optional(), connectCause: M.Ik({ code: M.KC([M.Yj(), M.ai()]).optional(), name: M.Yj().optional() }).optional(), transportFailureKind: M.Yj().optional(), loop: M.Yj().optional(), transportMode: M.Yj().optional() });
    function O(e2, t2) {
      const r2 = e2.clone();
      return r2.details ??= new J.CustomErrorDetails(), r2.details.additionalInfo[q] = JSON.stringify(t2), r2;
    }
    function N(e2) {
      const t2 = e2?.details?.additionalInfo[q];
      if (void 0 !== t2) try {
        const e3 = D.safeParse(JSON.parse(t2));
        return e3.success ? e3.data : void 0;
      } catch {
        return;
      }
    }
    class F extends Error {
      constructor(e2, t2 = {}) {
        super(e2), Object.setPrototypeOf(this, new.target.prototype), this.cause = t2.cause, this.requestId = t2.requestId, this.displayInfo = t2.displayInfo, this.isTransport = t2.isTransport;
      }
      get name() {
        return this.kind;
      }
    }
    class U extends F {
      get kind() {
        return "RetriableError";
      }
    }
    class L extends F {
      constructor(e2, t2, r2 = {}) {
        super(e2, r2), this.action = t2;
      }
      get kind() {
        return "ActionRequiredError";
      }
    }
    class $ extends F {
      get kind() {
        return "NonRetriableError";
      }
    }
    class Q extends $ {
      constructor(e2, t2 = {}) {
        const r2 = `Stopped at this turn's step limit (${e2}).`;
        super(r2, { ...t2, displayInfo: { ...t2.displayInfo, title: "Maximum steps reached", detail: r2, isRetryable: false } }), this.maxSteps = e2;
      }
      get kind() {
        return "MaxStepsReachedError";
      }
    }
    class j extends $ {
      constructor(e2) {
        const t2 = `This turn's step limit (${e2}) needs an in-process agent loop; the network client cannot send it.`;
        super(t2, { displayInfo: { title: "Step limit not supported", detail: t2, isRetryable: false } }), this.maxSteps = e2;
      }
    }
    class G extends F {
      get kind() {
        return "CancelledError";
      }
    }
    const H = /* @__PURE__ */ new Set([J.ErrorDetails_Error.NOT_LOGGED_IN, J.ErrorDetails_Error.AGENT_REQUIRES_LOGIN, J.ErrorDetails_Error.AUTH_TOKEN_NOT_FOUND, J.ErrorDetails_Error.AUTH_TOKEN_EXPIRED, J.ErrorDetails_Error.INVALID_AUTH_ID, J.ErrorDetails_Error.UNAUTHORIZED, J.ErrorDetails_Error.GITHUB_NO_USER_CREDENTIALS, J.ErrorDetails_Error.GITHUB_USER_NO_ACCESS]), z = /* @__PURE__ */ new Set([J.ErrorDetails_Error.FREE_USER_USAGE_LIMIT, J.ErrorDetails_Error.FREE_USER_RATE_LIMIT_EXCEEDED, J.ErrorDetails_Error.PRO_USER_ONLY, J.ErrorDetails_Error.PRO_USER_USAGE_LIMIT, J.ErrorDetails_Error.PRO_USER_RATE_LIMIT_EXCEEDED, J.ErrorDetails_Error.RATE_LIMITED, J.ErrorDetails_Error.RATE_LIMITED_CHANGEABLE, J.ErrorDetails_Error.GENERIC_RATE_LIMIT_EXCEEDED]), W = /* @__PURE__ */ new Set([J.ErrorDetails_Error.USAGE_PRICING_REQUIRED, J.ErrorDetails_Error.USAGE_PRICING_REQUIRED_CHANGEABLE]), V = /* @__PURE__ */ new Set([J.ErrorDetails_Error.BAD_API_KEY, J.ErrorDetails_Error.BAD_USER_API_KEY, J.ErrorDetails_Error.OUTDATED_CLIENT]), K = /* @__PURE__ */ new Set([J.ErrorDetails_Error.USER_ABORTED_REQUEST, J.ErrorDetails_Error.DEBOUNCED]), Y = /* @__PURE__ */ new Set([J.ErrorDetails_Error.CUSTOM_MESSAGE]), Z = /* @__PURE__ */ new Map([[B.C.PermissionDenied, "Permission Denied"]]), X = ["NGHTTP2", "ECONNRESET", "ECONNREFUSED", "ETIMEDOUT", "EPIPE", "socket hang up", "Premature close", "UND_ERR_SOCKET", "ERR_STREAM", "protocol error", "http/2 stream", "ERR_HTTP2_SESSION_ERROR", "Session closed with error code", "connection aborted"], ee = /* @__PURE__ */ new Set(["ENOTFOUND", "EAI_AGAIN", "EAI_FAIL", "ENODATA", "ESERVFAIL", "EHOSTUNREACH", "ENETDOWN", "ENETUNREACH", "ECONNABORTED"]), te = new RegExp(`\\b(${[...ee].join("|")})\\b`), re = ["IMAGE_TOO_LARGE", "MAX_TOKENS", "CONVERSATION_TOO_LONG", "CONTENT_POLICY", "DEPRECATED", "MAX_MODE_REQUIRED", "MODEL_NO_LONGER_SUPPORTED", "UNSUPPORTED_REGION", "OUTDATED_CLIENT"], ne = "x-cursor-inference-request-error-type", se = "AgentWebSocketDeliveryAmbiguousError";
    function oe(e2, t2 = {}) {
      const { requestId: r2 } = t2;
      if (e2 instanceof F) return e2;
      if (ie(e2)) return (function(e3, t3) {
        const r3 = ce(e3), n3 = r3.code, s3 = le(e3), o3 = void 0 === s3 ? void 0 : (function(e4) {
          if (void 0 === e4.details?.additionalInfo[q]) return e4;
          const t4 = e4.clone();
          return void 0 !== t4.details && (delete t4.details.additionalInfo[q], t4.details.equals(new J.CustomErrorDetails()) && (t4.details = void 0)), t4;
        })(s3), i2 = { title: o3?.details?.title, detail: o3?.details?.detail, isRetryable: o3?.details?.isRetryable, connectCode: n3, errorCode: o3?.error, inferenceRequestErrorType: ue(r3, ne) ?? ue(e3, ne), errorDetails: o3 }, a2 = { cause: e3, requestId: t3, displayInfo: i2, ...true === N(s3)?.transport ? { isTransport: true } : {} };
        if (n3 === B.C.Canceled || n3 === B.C.Aborted) return ge(e3) ? new U(e3.message, a2) : new G(e3.message, a2);
        if (void 0 !== o3?.error) {
          const t4 = o3.error;
          if (K.has(t4)) return new G(he(e3, o3), a2);
          const r4 = o3.details?.analyticsMetadata?.actionRequired;
          if (void 0 !== r4 && "" !== r4) return new L(he(e3, o3), r4, a2);
          if (H.has(t4)) return new L(he(e3, o3), "login", a2);
          if (z.has(t4)) return new L(he(e3, o3), "upgrade", a2);
          if (W.has(t4)) return new L(he(e3, o3), "payment", a2);
          if (V.has(t4)) return new L(he(e3, o3), "config", a2);
          if (Y.has(t4) && true !== o3.details?.isRetryable) return new $(he(e3, o3), a2);
          if (false === o3.details?.isRetryable) return new $(he(e3, o3), a2);
        }
        if (n3 === B.C.Unauthenticated) return new L(e3.message, "login", { ...a2, displayInfo: ae(i2, "Sign in required", r3) });
        const c2 = Z.get(n3);
        if (void 0 !== c2 && true !== o3?.details?.isRetryable && !ge(e3)) return new $(he(e3, o3), { ...a2, displayInfo: ae(i2, c2, r3) });
        return new U(e3.message, a2);
      })(e2, r2);
      const n2 = (0, f.y_)(e2);
      if (void 0 !== n2) return new $(n2.message, { cause: e2 instanceof Error ? e2 : void 0, requestId: r2, displayInfo: { title: "Conversation data missing", detail: n2.message, isRetryable: false } });
      const s2 = (function(e3) {
        const t3 = /* @__PURE__ */ new Set();
        let r3 = e3;
        for (; r3 instanceof Error && !t3.has(r3); ) {
          if (r3.name === fe) return r3;
          t3.add(r3), r3 = r3.cause;
        }
        return;
      })(e2);
      if (void 0 !== s2) return new $(s2.message, { cause: e2 instanceof Error ? e2 : void 0, requestId: r2, displayInfo: { title: "Context summarization failed", detail: s2.message, isRetryable: false } });
      if (e2 instanceof Error) {
        if ("AbortError" === e2.name) return new G(e2.message, { cause: e2, requestId: r2 });
        if (e2.name === se) return new U(e2.message, { cause: e2, requestId: r2, isTransport: true });
        if (ge(e2)) return new U(e2.message, { cause: e2, requestId: r2 });
      }
      const o2 = e2 instanceof Error ? e2.message : String(e2);
      return new U(o2, { cause: e2 instanceof Error ? e2 : void 0, requestId: r2 });
    }
    function ie(e2) {
      if (null === e2 || "object" != typeof e2 || !("code" in e2) || !("name" in e2)) return false;
      if ("ConnectError" === e2.name) return true;
      const t2 = e2;
      return "string" == typeof t2.rawMessage && Array.isArray(t2.details) && "function" == typeof t2.findDetails;
    }
    function ae(e2, t2, r2) {
      return { ...e2, title: e2.title || t2, detail: e2.detail || me(r2), isRetryable: e2.isRetryable ?? false };
    }
    function ce(e2) {
      let t2 = e2;
      for (let e3 = 0; e3 < 10 && t2.code === B.C.Unknown; e3++) {
        const e4 = t2.cause;
        if (!ie(e4)) break;
        t2 = e4;
      }
      return t2;
    }
    function le(e2) {
      let t2 = e2;
      for (let e3 = 0; e3 < 10 && ie(t2); e3++) {
        try {
          const e4 = t2.findDetails?.(J.ErrorDetails);
          if (void 0 !== e4 && e4.length > 0) return e4[0];
        } catch {
        }
        t2 = t2.cause;
      }
    }
    function ue(e2, t2) {
      const r2 = e2.metadata;
      if (null !== r2 && "object" == typeof r2 && "function" == typeof r2.get) return r2.get(t2) ?? void 0;
    }
    function de(e2) {
      let t2 = e2;
      for (let e3 = 0; e3 < 10 && "object" == typeof t2 && null !== t2; e3++) {
        if (ie(t2)) return t2;
        t2 = "cause" in t2 ? t2.cause : void 0;
      }
    }
    function pe(e2) {
      const t2 = de(e2);
      return void 0 === t2 ? void 0 : ce(t2);
    }
    function me(e2) {
      const t2 = e2.rawMessage;
      return "string" == typeof t2 ? t2 : e2.message.replace(/^\[[a-z_]+\] /, "");
    }
    function he(e2, t2) {
      if (t2?.details) {
        const { title: r2, detail: n2 } = t2.details;
        return r2 && n2 ? `${r2} ${n2}` : r2 || n2 || e2.message;
      }
      return e2.message;
    }
    const fe = "SummaryPlaceholderRejectedError";
    function ge(e2) {
      const t2 = /* @__PURE__ */ new Set();
      let r2 = e2;
      for (; r2 instanceof Error && !t2.has(r2); ) {
        t2.add(r2);
        const e3 = `${r2.name}: ${r2.message}`;
        if (X.some((t3) => e3.includes(t3)) || te.test(e3)) return true;
        const n2 = r2.code;
        if ("string" == typeof n2 && (X.some((e4) => n2.includes(e4)) || ee.has(n2))) return true;
        r2 = r2.cause;
      }
      return false;
    }
    function ye(e2) {
      return X.some((t2) => e2.includes(t2)) || te.test(e2);
    }
    function we(e2) {
      return true === e2.isTransport || (e2.cause instanceof Error ? ge(e2.cause) : ye(e2.message));
    }
    function ve(e2) {
      return e2 instanceof F && e2.cause instanceof Error ? ge(e2.cause) : e2 instanceof Error ? ge(e2) : "string" == typeof e2 && ye(e2);
    }
    function _e(e2) {
      return void 0 !== e2 && e2 > 0;
    }
    function Ae(e2) {
      return e2 + 1;
    }
    function Se(e2) {
      return Object.defineProperty(e2, "code", { value: "connection_stalled", enumerable: true, configurable: true }), e2;
    }
    function be(e2) {
      const { cause: t2, requestId: r2, transportErrorRetries: n2, connectCode: s2 } = e2;
      return _e(n2) ? Se(new U("Connection stalled repeatedly", { cause: t2, requestId: r2, displayInfo: { title: "Connection stalled", detail: `The connection stalled ${Ae(n2)} times. Please check your network connection and try again.`, isRetryable: true, connectCode: s2 } })) : Se(new U("Connection stalled", { cause: t2, requestId: r2, displayInfo: { title: "Connection stalled", detail: "The connection stalled. Please try again.", isRetryable: true, connectCode: s2 } }));
    }
    function Ee(e2) {
      let t2 = e2.cause;
      for (let e3 = 0; e3 < 10 && void 0 !== t2; e3++) {
        if (t2 instanceof Error && "AbortError" === t2.name) return true;
        if (ie(t2) && (t2.code === B.C.Canceled || t2.code === B.C.Aborted)) return true;
        t2 = null !== t2 && "object" == typeof t2 && "cause" in t2 ? t2.cause : void 0;
      }
      return false;
    }
    var Ie = r(40328), Ce = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, ke = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class xe extends Error {
      constructor(e2) {
        super(e2), this.name = "LostConnection";
      }
    }
    class Te {
      constructor(e2, t2, r2) {
        this.serverStream = e2, this.clientStream = t2, this.controlledExecManager = r2;
      }
      async run(e2) {
        const t2 = { stack: [], error: void 0, hasError: false };
        try {
          Ce(t2, (0, n.VI)(e2.withName("ClientExecController.run")), false);
          const r2 = [];
          try {
            for await (const t3 of this.serverStream) {
              if ((0, R.isMessage)(t3, A.Nv)) {
                this.controlledExecManager.handleControlMessage(t3);
                continue;
              }
              const s2 = (async () => {
                const r3 = { stack: [], error: void 0, hasError: false };
                try {
                  let s3, o2;
                  if (t3.spanContext) {
                    const r4 = t3.spanContext;
                    s3 = (0, n.V5)({ traceId: r4.traceId, spanId: r4.spanId, traceFlags: r4.traceFlags ?? 1 }, "exec.handle", e2), o2 = (0, n.fU)(s3);
                  } else s3 = e2;
                  Ce(r3, o2 ? new n.r2(s3, o2) : void 0, false);
                  const i2 = this.controlledExecManager.handle(s3, t3);
                  for await (const e3 of i2) await this.clientStream.write(e3);
                } catch (e3) {
                  r3.error = e3, r3.hasError = true;
                } finally {
                  ke(r3);
                }
              })();
              r2.push(s2);
            }
            await Promise.all(r2);
          } catch (e3) {
            if (e3 instanceof Ie.T && "protocol error: missing EndStreamResponse" === e3.rawMessage) throw new xe(e3.message);
            if (e3 instanceof Ie.T && e3.code === B.C.Aborted) {
              const t3 = e3.cause;
              if (t3 instanceof Error && "code" in t3 && "string" == typeof t3.code && t3.code.includes("ERR_STREAM_WRITE_AFTER_END")) throw new xe(e3.message);
            } else {
              if (e3 instanceof T.W2) throw new xe(e3.message);
              if (e3 instanceof Ie.T && e3.code === B.C.Internal) {
                const t3 = e3.cause;
                if (t3 instanceof Error && t3.message.includes("NGHTTP2_PROTOCOL_ERROR")) throw new xe(e3.message);
              }
            }
            throw e3;
          }
        } catch (e3) {
          t2.error = e3, t2.hasError = true;
        } finally {
          ke(t2);
        }
      }
    }
    var Re = r(38812), Be = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, Pe = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const Je = (0, y.h)("ClientInteractionController"), Me = /* @__PURE__ */ new Set(["askQuestionInteractionQuery", "switchModeRequestQuery", "mcpAuthRequestQuery", "connectScmRequestQuery"]);
    class qe {
      constructor(e2, t2, r2, n2) {
        this.interactionStream = e2, this.interactionListener = t2, this.queryResponseStream = r2, this.stallSuspender = n2, this.pendingHumanQueries = 0;
      }
      async run(e2) {
        const t2 = { stack: [], error: void 0, hasError: false };
        try {
          const r2 = Be(t2, (0, n.VI)(e2.withName("ClientInteractionController.run")), false);
          e2 = r2.ctx;
          let s2, o2 = Promise.resolve();
          for await (const t3 of this.interactionStream) {
            const r3 = () => "interactionQuery" === t3.case ? this.handleInteractionQuery(e2, t3.value) : this.handleInteractionUpdate(e2, t3.value);
            o2 = o2.then(r3).catch((r4) => {
              Je.error(e2, "Error handling interaction message", r4, { messageCase: t3.case }), s2 ??= r4;
            });
          }
          if (await o2, void 0 !== s2) throw s2;
        } catch (e3) {
          t2.error = e3, t2.hasError = true;
        } finally {
          Pe(t2);
        }
      }
      async handleInteractionUpdate(e2, t2) {
        await this.interactionListener.sendUpdate(e2, t2);
      }
      handleInteractionQuery(e2, t2) {
        const r2 = void 0 !== t2.query.case && Me.has(t2.query.case);
        let n2 = false;
        const s2 = () => {
          r2 && !n2 && (n2 = true, this.pendingHumanQueries--, 0 === this.pendingHumanQueries && this.stallSuspender?.setPaused(false));
        };
        r2 && (this.pendingHumanQueries++, 1 === this.pendingHumanQueries && this.stallSuspender?.setPaused(true)), (async () => this.interactionListener.query(e2, t2))().catch((r3) => {
          const n3 = (0, Re.oF)(t2, "The client could not show this request to the user");
          if (!(n3 instanceof v.Y5)) throw r3;
          return Je.error(e2, "Error handling interaction query; answering with a fail-closed response", { queryCase: t2.query.case, error: r3 }), n3;
        }).then((e3) => (s2(), this.queryResponseStream.write(e3))).catch((t3) => {
          Je.error(e2, "Error handling interaction query", t3);
        }).finally(s2);
      }
    }
    async function De(e2, t2) {
      let r2;
      try {
        r2 = await e2(t2.signal);
      } catch (e3) {
        if (t2.isCanceled()) throw new G("User aborted request");
        throw new $("Failed to mint LLM Gateway credential", { cause: e3 instanceof Error ? e3 : void 0, requestId: t2.requestId });
      }
      if (void 0 === r2) throw new $("LLM Gateway credential minter returned no credential", { requestId: t2.requestId });
      if ("" === r2.bearerToken.trim()) throw new $("LLM Gateway credential minter returned an empty bearer token", { requestId: t2.requestId });
      return new v.Ibo({ bearerToken: r2.bearerToken });
    }
    var Oe = r(46144), Ne = r(89396), Fe = r(65716);
    const Ue = 15728640, Le = 1048576, $e = (0, Oe.Pu)("agent_client.request_context_blob.prepared", { description: "Prepared RequestContext blob references" }), Qe = (0, Oe.v5)("agent_client.request_context_blob.bytes", { description: "Serialized RequestContext bytes staged by the client" }), je = (0, Oe.v5)("agent_client.request_context_blob.preparation_ms", { description: "Time to hydrate, serialize, and hash RequestContext" });
    function Ge(e2) {
      switch (e2.action.case) {
        case "userMessageAction":
        case "subscriptionNotificationAction":
        case "resumeAction":
        case "executePlanAction":
          return e2.action.value;
        default:
          return;
      }
    }
    class He {
      constructor(e2, t2 = 62914560) {
        this.parent = e2, this.maxTransientBytes = t2, this.transientBlobs = /* @__PURE__ */ new Map(), this.persistedBlobIds = /* @__PURE__ */ new Set(), this.transientBytes = 0;
      }
      seed(e2, t2) {
        return this.seedAll([{ blobId: e2, blobData: t2 }]);
      }
      seedAll(e2) {
        const t2 = /* @__PURE__ */ new Map();
        for (const { blobId: r3, blobData: n2 } of e2) t2.set((0, f.nj)(r3), n2.byteLength);
        let r2 = this.transientBytes;
        for (const [e3, n2] of t2) r2 -= this.transientBlobs.get(e3)?.byteLength ?? 0, r2 += n2;
        if (r2 > this.maxTransientBytes) return false;
        for (const { blobId: t3, blobData: r3 } of e2) this.transientBlobs.set((0, f.nj)(t3), r3);
        return this.transientBytes = r2, true;
      }
      has(e2) {
        return this.transientBlobs.has((0, f.nj)(e2));
      }
      hasAll(e2) {
        return e2.every((e3) => this.has(e3));
      }
      async getBlob(e2, t2) {
        const r2 = (0, f.nj)(t2), n2 = this.transientBlobs.get(r2);
        return void 0 === n2 ? await this.parent.getBlob(e2, t2) : n2;
      }
      async persistForRemoteRead(e2, t2) {
        const r2 = (0, f.nj)(t2), n2 = this.transientBlobs.get(r2);
        void 0 === n2 || this.persistedBlobIds.has(r2) || (await (0, Fe.O$)(() => this.parent.setBlob(e2, t2, n2), 2), this.persistedBlobIds.add(r2));
      }
      async setBlob(e2, t2, r2) {
        await this.parent.setBlob(e2, t2, r2);
      }
      async setBlobLocallyOnly(e2, t2, r2) {
        await this.parent.setBlobLocallyOnly(e2, t2, r2);
      }
      async flush(e2) {
        await this.parent.flush(e2);
      }
    }
    async function ze({ ctx: e2, action: t2, resources: r2, blobStore: n2, mode: s2, maxBlobBytes: o2, maxInlineDynamicBytes: i2 = 1048576, notesSessionId: c2 }) {
      const l2 = performance.now(), u2 = Ge(t2);
      if (void 0 === u2) return { kind: "not_applicable" };
      if ("legacy" === s2) return t2.requestContextParts = void 0, { kind: "legacy" };
      if (void 0 !== t2.requestContextParts) {
        const e3 = void 0 === (d2 = t2.requestContextParts) ? [] : [d2.rulesBlobId, d2.skillsBlobId, d2.subagentsBlobId, d2.mcpsBlobId], r3 = void 0 !== u2.requestContext, o3 = e3.length > 0 && n2.hasAll(e3);
        if (r3 || o3) {
          const e4 = t2.requestContextParts;
          return "ref_only" === s2 && r3 && o3 && void 0 !== e4?.dynamicContext && (u2.requestContext = void 0), { kind: "already_prepared" };
        }
      }
      var d2;
      t2.requestContextParts = void 0;
      const p2 = void 0 === u2.requestContext, m2 = u2.requestContext ?? await (async function({ ctx: e3, resources: t3, notesSessionId: r3 }) {
        const n3 = t3.get(a.MZM), s3 = await n3.execute(e3, new Ne._K({ notesSessionId: r3 })), o3 = "success" === s3.result.case ? s3.result.value.requestContext : void 0;
        if (void 0 === o3) throw new Error(`Failed to compute request context: ${s3.result.case}`);
        return o3;
      })({ ctx: e2, resources: r2, notesSessionId: c2 }), h2 = Math.min(Math.max(0, o2), Ue), g2 = await (async function({ requestContext: e3, mode: t3, maxBlobBytes: r3, maxInlineDynamicBytes: n3 }) {
        const s3 = (0, a.Nw4)(e3);
        let o3;
        if ("ref_only" === t3 && (o3 = s3.dynamicContext.toBinary().byteLength, o3 > n3)) return;
        const i3 = s3.rules.toBinary(), c3 = s3.skills.toBinary(), l3 = s3.subagents.toBinary(), u3 = s3.mcps.toBinary(), d3 = i3.byteLength + c3.byteLength + l3.byteLength + u3.byteLength;
        if (d3 > r3) return;
        const [p3, m3, h3, g3] = await Promise.all([(0, f.Bk)(i3), (0, f.Bk)(c3), (0, f.Bk)(l3), (0, f.Bk)(u3)]), y3 = [{ blobId: p3, blobData: i3 }, { blobId: m3, blobData: c3 }, { blobId: h3, blobData: l3 }, { blobId: g3, blobData: u3 }], w2 = new Ne.sG({ rulesBlobId: p3, rulesByteLength: i3.byteLength, skillsBlobId: m3, skillsByteLength: c3.byteLength, subagentsBlobId: h3, subagentsByteLength: l3.byteLength, mcpsBlobId: g3, mcpsByteLength: u3.byteLength, dynamicContext: "ref_only" === t3 ? s3.dynamicContext : void 0 });
        return "dual" === t3 ? { kind: "dual", inlineContext: e3, byteLength: d3, parts: w2 } : { kind: "ref_only", stagedBlobs: y3, byteLength: d3, parts: w2, dynamicByteLength: o3 };
      })({ requestContext: m2, mode: s2, maxBlobBytes: h2, maxInlineDynamicBytes: Math.min(Math.max(0, i2), h2) });
      if (void 0 === g2) return u2.requestContext = m2, t2.requestContextParts = void 0, $e.increment(e2, 1, { mode: s2, outcome: "oversized" }), { kind: "oversized" };
      if ("ref_only" === g2.kind && !n2.seedAll(g2.stagedBlobs)) return u2.requestContext = m2, t2.requestContextParts = void 0, $e.increment(e2, 1, { mode: s2, outcome: "transient_budget_exceeded" }), { kind: "transient_budget_exceeded" };
      u2.requestContext = "dual" === g2.kind ? g2.inlineContext : void 0, t2.requestContextParts = g2.parts;
      const y2 = g2.byteLength;
      return $e.increment(e2, 1, { mode: s2, outcome: p2 ? "hydrated" : "inline" }), Qe.histogram(e2, y2, { mode: s2 }), je.histogram(e2, performance.now() - l2, { mode: s2 }), { kind: "prepared", byteLength: y2, hydrated: p2, rulesByteLength: g2.parts.rulesByteLength, skillsByteLength: g2.parts.skillsByteLength, subagentsByteLength: g2.parts.subagentsByteLength, mcpsByteLength: g2.parts.mcpsByteLength, dynamicByteLength: "ref_only" === g2.kind ? g2.dynamicByteLength : void 0 };
    }
    function We(e2) {
      return void 0 !== e2 && Number.isFinite(e2) && Number.isInteger(e2);
    }
    function Ve(e2, t2) {
      const { rulesByteLength: r2, skillsByteLength: n2 } = e2, { subagentsByteLength: s2, mcpsByteLength: o2 } = e2;
      if (!(We(r2) && We(n2) && We(s2) && We(o2))) return;
      const i2 = t2?.dynamicByteLength;
      return { bytes: r2 + n2 + s2 + o2 + (i2 ?? 0), bytesSource: "blob_parts", rulesBytes: r2, skillsBytes: n2, mcpBytes: o2, subagentsBytes: s2, ...We(i2) ? { dynamicBytes: i2 } : {} };
    }
    const Ke = ["alpn_failure", "poll_seqno_gap", "append_fatal", "http_464", "http_404_unimplemented", "socket_reset", "stream_closed_early", "idle_deadline", "stall", "other"];
    const Ye = "cursorBidiAppendFatal", Ze = "ALPN protocol failed to negotiate", Xe = "Unexpected seqno", et = "http1_poll", tt = /\bHTTP (\d{3})\b/, rt = "unsupported content type null";
    function nt(e2) {
      const t2 = e2.message;
      return "string" == typeof t2 ? t2 : "";
    }
    function st(e2) {
      return e2 instanceof Error && ("AbortError" === e2.name || e2.name === se);
    }
    function ot(e2, t2 = {}) {
      const r2 = (function(e3) {
        const t3 = [], r3 = /* @__PURE__ */ new Set();
        let n3 = e3;
        for (; "object" == typeof n3 && null !== n3 && !r3.has(n3); ) r3.add(n3), t3.push(n3), n3 = "cause" in n3 ? n3.cause : void 0;
        return t3;
      })(e2);
      if (r2.some((e3) => Ye in e3)) return "append_fatal";
      const n2 = r2.map(nt), s2 = (e3) => n2.some((t3) => t3.includes(e3)), o2 = (function(e3) {
        return pe(e3)?.code;
      })(e2), i2 = void 0 === t2.transportMode;
      if (i2 && o2 === B.C.Unavailable && s2(Ze)) return "alpn_failure";
      if ((i2 || t2.transportMode === et) && o2 === B.C.Unavailable && s2(Xe)) return "poll_seqno_gap";
      const a2 = n2.map((e3) => tt.exec(e3)?.[1]).find((e3) => void 0 !== e3);
      return i2 && o2 === B.C.Unknown && "464" === a2 ? "http_464" : i2 && o2 === B.C.Unimplemented && "404" === a2 ? "http_404_unimplemented" : o2 === B.C.DeadlineExceeded && (function(e3) {
        const t3 = de(e3);
        return void 0 === t3 ? void 0 : le(t3)?.error;
      })(e2) === J.ErrorDetails_Error.TIMEOUT ? "idle_deadline" : i2 && o2 === B.C.Unknown && s2(rt) ? "stream_closed_early" : ve(e2) || (function(e3) {
        return e3 instanceof Error && true === e3.isTransport;
      })(e2) || r2.some(st) ? "socket_reset" : "other";
    }
    const it = { serverCap: 3, transportCap: 10 }, at = 2, ct = 18e4, lt = { alpn_failure: "server", poll_seqno_gap: "server", append_fatal: "by_signature", http_464: "server", http_404_unimplemented: "server", socket_reset: "transport", stream_closed_early: "server", idle_deadline: "server", stall: "transport", other: "server" };
    function ut(e2, t2, r2 = it) {
      return { serverCap: r2.serverCap, transportCap: true === e2.isRunningInTest ? Math.min(r2.transportCap, at) : r2.transportCap, endless: t2.endlessRetries, retryAllInference: true === e2.retryAllInferenceErrors };
    }
    function dt(e2) {
      return { action: "retry", countAsServerError: true, countAsTransportError: false, transportFailureKind: e2 };
    }
    function pt(e2, t2, r2) {
      const n2 = r2.attemptRequestId, s2 = true === t2.endless, o2 = r2.retriesEnabled || s2;
      let i2 = e2 instanceof F ? e2 : oe(e2, { requestId: n2 });
      const a2 = i2 instanceof G && ("owner" === r2.abortOrigin || (function(e3) {
        const t3 = e3.displayInfo?.errorCode;
        return void 0 !== t3 && K.has(t3);
      })(i2)), c2 = "stall_detector" === r2.abortOrigin && !a2 && (i2 instanceof G || i2 instanceof U), l2 = "owner" === r2.abortOrigin && i2 instanceof U && Ee(i2), u2 = (function(e3, t3, r3) {
        return t3.stalled ? "stall" : t3.userStop ? "other" : ot(e3, r3);
      })(e2, { stalled: c2, userStop: a2 || l2 }, { transportMode: r2.attemptTransportMode }), d2 = (e3, t3 = {}) => ({ action: "throw", error: e3, ...t3, transportFailureKind: u2 }), p2 = (e3, n3) => o2 ? !s2 && r2.transportErrorRetries >= t2.transportCap ? d2(e3(), { countAsTransportError: true }) : /* @__PURE__ */ (function(e4) {
        return { action: "retry", countAsServerError: false, countAsTransportError: true, transportFailureKind: e4 };
      })(u2) : d2(n3(), { countAsTransportError: true }), m2 = () => ({ cause: i2.cause, requestId: n2, transportErrorRetries: r2.transportErrorRetries, connectCode: i2.displayInfo?.connectCode });
      if (c2) {
        if (o2 && void 0 !== r2.stallRetryElapsedMs && r2.stallRetryElapsedMs >= ct) return d2(be(m2()), { countAsTransportError: true });
        const e3 = p2(() => be(m2()), () => be({ ...m2(), transportErrorRetries: void 0 }));
        return "retry" === e3.action ? { ...e3, stall: true } : e3;
      }
      return i2 instanceof G && !a2 && Ee(i2) && (i2 = new U(i2.message, { cause: i2.cause, requestId: n2, displayInfo: i2.displayInfo, isTransport: true })), l2 ? d2(new G(i2.message, { cause: i2.cause, requestId: n2, displayInfo: i2.displayInfo })) : true === t2.retryAllInference && (i2 instanceof L || i2 instanceof $) && (function(e3) {
        const t3 = e3.displayInfo?.inferenceRequestErrorType;
        return void 0 !== t3 && !re.some((e4) => e4 === t3);
      })(i2) ? !s2 && r2.serverErrorRetries >= t2.serverCap ? d2(i2) : dt(u2) : i2 instanceof G || i2 instanceof L || i2 instanceof $ ? d2(i2) : i2 instanceof U && (true === i2.isTransport || (function(e3, t3) {
        const r3 = lt[e3];
        return "by_signature" === r3 ? ve(t3) : "transport" === r3;
      })(u2, i2) || "owner" !== r2.abortOrigin && Ee(i2)) ? p2(() => (function(e3) {
        const { cause: t3, requestId: r3, transportErrorRetries: n3, connectCode: s3 } = e3;
        return _e(n3) ? new U("Connection failed repeatedly", { cause: t3, requestId: r3, displayInfo: { title: "Connection failed", detail: `The connection failed ${Ae(n3)} times. Please check your network connection and try again.`, isRetryable: true, connectCode: s3 } }) : new U("Connection failed", { cause: t3, requestId: r3, displayInfo: { title: "Connection failed", detail: "The connection was interrupted. Please check your network connection and try again.", isRetryable: true, connectCode: s3 } });
      })(m2()), () => i2) : o2 ? !s2 && r2.serverErrorRetries >= t2.serverCap ? d2((function(e3) {
        const { classified: t3, requestId: r3, serverErrorRetries: n3 } = e3, s3 = t3.displayInfo;
        return new U(t3.message, { cause: t3.cause, requestId: r3, displayInfo: { ...s3, title: s3?.title || "Server error", detail: s3?.detail || `The server failed ${Ae(n3)} times. Please try again, or contact support if the issue persists.`, isRetryable: true } });
      })({ classified: i2, requestId: n2, serverErrorRetries: r2.serverErrorRetries })) : dt(u2) : d2(i2);
    }
    var mt = r(34175);
    function ht(e2) {
      return new mt.Or({ mcpTools: e2.map((e3) => ({ name: e3.name, providerIdentifier: e3.providerIdentifier, toolName: e3.toolName, description: e3.description, inputSchema: e3.inputSchema ? R.Value.fromJson(e3.inputSchema) : void 0, outputSchemaJson: void 0 !== e3.outputSchema ? JSON.stringify(e3.outputSchema) : void 0 })) });
    }
    const ft = (0, y.h)("@anysphere/agent-client:stall-detector"), gt = 3e4, yt = 2e4, wt = 4294967295, vt = (e2) => "number" == typeof e2 && Number.isFinite(e2) ? e2 : void 0;
    function _t(e2) {
      const t2 = vt(e2);
      if (void 0 !== t2) return Math.min(Math.max(Math.round(t2), 0), wt);
    }
    function At(e2, t2) {
      const r2 = vt(e2?.failTimeoutMs) ?? gt, n2 = r2 > 0 && true !== t2?.isRunningInTest ? Math.max(r2, yt) : r2, s2 = vt(e2?.advisoryTimeoutMs);
      return { failThresholdMs: n2, advisoryThresholdMs: void 0 !== s2 && s2 > 0 && (n2 <= 0 || s2 < n2) ? s2 : void 0 };
    }
    const St = { nal: "[NAL client stall detector]", local_loop: "[local-loop client stall detector]", module: "[module client stall detector]" }, bt = (0, Oe.Pu)("agent_client.stream.stall.count", { description: "Number of bidirectional stream stalls detected", labelNames: ["activity_type", "message_type", "loop"] }), Et = (0, Oe.v5)("agent_client.stream.stall.duration_ms", { description: "Duration of stream stalls in milliseconds", labelNames: ["activity_type", "loop"] }), It = (0, Oe.Pu)("agent_client.stream.did_stall", { description: "Number of streams that experienced at least one stall", labelNames: ["loop"] }), Ct = (0, Oe.Pu)("agent_client.stream.total", { description: "Total number of streams monitored", labelNames: ["loop"] });
    class kt {
      constructor() {
        this.handlers = /* @__PURE__ */ new Map();
      }
      track(e2, t2) {
        return this.handlers.set(e2, { name: e2, state: "started", startedAt: Date.now() }), t2.then((t3) => {
          const r2 = this.handlers.get(e2);
          return r2 && (r2.state = "completed", r2.endedAt = Date.now()), t3;
        }).catch((t3) => {
          const r2 = this.handlers.get(e2);
          throw r2 && (r2.state = "errored", r2.endedAt = Date.now(), r2.error = t3 instanceof Error ? t3.message : String(t3)), t3;
        });
      }
      getHandlerStates() {
        const e2 = Date.now(), t2 = {};
        for (const [r2, n2] of this.handlers) t2[r2] = { state: n2.state, durationMs: (n2.endedAt ?? e2) - n2.startedAt, error: n2.error };
        return t2;
      }
    }
    class xt {
      constructor(e2, t2, r2) {
        this.lastActivityTime = Date.now(), this.lastMeaningfulActivityTime = Date.now(), this.hasLogged = false, this.hasLoggedAdvisory = false, this.hasLoggedHeartbeatOnly = false, this.hasEverStalled = false, this.paused = false, this.disposed = false, this.activityHistory = [], this.ctx = e2, "number" == typeof t2 ? (this.thresholdMs = t2, this.advisoryThresholdMs = void 0, this.heartbeatOnlyThresholdMs = 3 * t2, this.onStall = r2, this.onStallCallback = void 0, this.handlerTracker = void 0, this.loop = "nal") : (this.thresholdMs = t2.thresholdMs, this.advisoryThresholdMs = t2.advisoryThresholdMs, this.heartbeatOnlyThresholdMs = t2.heartbeatOnlyThresholdMs ?? 3 * t2.thresholdMs, this.onStall = t2.onStall, this.onStallCallback = t2.onStallCallback, this.handlerTracker = t2.handlerTracker, this.loop = t2.loop ?? "nal"), this.logPrefix = St[this.loop], this.startTimer(), this.startAdvisoryTimer(), this.startHeartbeatOnlyTimer(), Ct.increment(this.ctx, 1, { loop: this.loop }), this.onCtxSignalAbort = () => {
          this.trackActivity("ctx.signal", "abort"), this.abortedAt = Date.now(), this.emitLifecycleLog(`${this.logPrefix} Stream aborted while stall detector active`, "aborted");
        }, e2.signal.addEventListener("abort", this.onCtxSignalAbort);
      }
      trackActivity(e2, t2) {
        const r2 = { type: e2, messageType: t2 };
        this.lastActivity = r2, "inbound_message" === e2 ? this.lastInboundMessage = r2 : "outbound_write" === e2 && (this.lastOutboundMessage = r2);
        const n2 = this.activityHistory.at(-1);
        n2?.type === e2 && n2.messageType === t2 ? n2.repeat = (n2.repeat ?? 1) + 1 : (this.activityHistory.push(r2), this.activityHistory.length > 10 && this.activityHistory.shift());
      }
      reset(e2 = "inbound_message", t2, r2 = true) {
        if (this.trackActivity(e2, t2), "inbound_message" === e2) {
          const e3 = this.hasLogged, t3 = this.hasLoggedAdvisory, n2 = this.hasLoggedHeartbeatOnly;
          e3 && (this.hasLogged = false, this.emitLogAndMetric()), n2 && r2 && (this.hasLoggedHeartbeatOnly = false), t3 && (this.hasLoggedAdvisory = false), this.lastActivityTime = Date.now(), r2 && (this.lastMeaningfulActivityTime = Date.now()), void 0 === this.timer && this.startTimer(), void 0 === this.advisoryTimer && this.startAdvisoryTimer(), r2 && void 0 === this.heartbeatOnlyTimer && this.startHeartbeatOnlyTimer();
        }
      }
      onStreamEnded() {
        this.trackActivity("stream", "ended"), this.streamEndedAt = Date.now();
      }
      onClientSentHeartbeat() {
        this.lastClientSentHeartbeatAt = Date.now();
      }
      onServerSentHeartbeat() {
        this.lastServerSentHeartbeatAt = Date.now();
      }
      setPaused(e2) {
        if (!this.disposed && e2 !== this.paused && (this.paused = e2, !e2)) {
          const e3 = Date.now();
          this.lastActivityTime = e3, this.lastMeaningfulActivityTime = e3, void 0 === this.timer && this.startTimer(), void 0 === this.advisoryTimer && this.startAdvisoryTimer(), void 0 === this.heartbeatOnlyTimer && this.startHeartbeatOnlyTimer();
        }
      }
      startTimer() {
        if (this.disposed || this.thresholdMs <= 0 || void 0 !== this.timer) return;
        const e2 = () => {
          if (this.paused) return void (this.timer = setTimeout(e2, this.thresholdMs));
          const t2 = this.thresholdMs - (Date.now() - this.lastActivityTime);
          if (t2 <= 0) return this.timer = void 0, void this.onStallDetected("no_activity");
          this.timer = setTimeout(e2, t2);
        };
        this.timer = setTimeout(e2, this.thresholdMs);
      }
      startAdvisoryTimer() {
        if (this.disposed || void 0 === this.advisoryThresholdMs || this.advisoryThresholdMs <= 0 || void 0 !== this.advisoryTimer) return;
        const e2 = this.advisoryThresholdMs, t2 = () => {
          if (this.paused) return void (this.advisoryTimer = setTimeout(t2, e2));
          const r2 = e2 - (Date.now() - this.lastActivityTime);
          if (r2 <= 0) return this.advisoryTimer = void 0, void this.onAdvisoryDetected();
          this.advisoryTimer = setTimeout(t2, r2);
        };
        this.advisoryTimer = setTimeout(t2, e2);
      }
      startHeartbeatOnlyTimer() {
        if (this.disposed || this.thresholdMs <= 0 || this.heartbeatOnlyThresholdMs <= 0 || void 0 !== this.heartbeatOnlyTimer) return;
        const e2 = () => {
          if (this.paused) return void (this.heartbeatOnlyTimer = setTimeout(e2, this.heartbeatOnlyThresholdMs));
          const t2 = this.heartbeatOnlyThresholdMs - (Date.now() - this.lastMeaningfulActivityTime);
          if (t2 <= 0) return this.heartbeatOnlyTimer = void 0, void this.onStallDetected("heartbeat_only");
          this.heartbeatOnlyTimer = setTimeout(e2, t2);
        };
        this.heartbeatOnlyTimer = setTimeout(e2, this.heartbeatOnlyThresholdMs);
      }
      buildLogMetadata(e2) {
        const t2 = this.ctx.get(Qt), r2 = { ...e2 };
        t2?.modelDetails?.displayName && (r2.model_name = t2.modelDetails.displayName), this.abortedAt && (r2.aborted_ago_ms = Date.now() - this.abortedAt), this.disposedAt && (r2.disposed_ago_ms = Date.now() - this.disposedAt), this.lastClientSentHeartbeatAt && (r2.last_client_sent_heartbeat_ago_ms = Date.now() - this.lastClientSentHeartbeatAt), this.lastServerSentHeartbeatAt && (r2.last_server_sent_heartbeat_ago_ms = Date.now() - this.lastServerSentHeartbeatAt), this.streamEndedAt && (r2.stream_ended_ago_ms = Date.now() - this.streamEndedAt), this.lastInboundMessage && (r2.last_inbound_message_type = this.lastInboundMessage.messageType), this.lastOutboundMessage && (r2.last_outbound_message_type = this.lastOutboundMessage.messageType);
        const n2 = [];
        let s2;
        for (let e3 = this.activityHistory.length - 1; e3 >= 0; e3--) {
          const { type: t3, messageType: r3, repeat: o2 } = this.activityHistory[e3];
          s2 !== t3 && (s2 ? n2.push(`[${t3}]`) : n2.push(`[${t3}] (MOST RECENT)`), s2 = t3), n2.push(`${r3}${o2 ? ` (x${o2})` : ""}`);
        }
        return r2.activities = n2.join("\n"), { reqId: t2?.requestId, loop: this.loop, stall: r2 };
      }
      onAdvisoryDetected() {
        if (this.hasLogged || this.hasLoggedAdvisory) return;
        if (void 0 === this.advisoryThresholdMs || this.advisoryThresholdMs <= 0) return;
        const e2 = Date.now() - this.lastActivityTime;
        e2 < this.advisoryThresholdMs || (this.hasLoggedAdvisory = true, this.reportAdvisory(e2, this.advisoryThresholdMs));
      }
      reportAdvisory(e2, t2) {
        try {
          const r2 = this.buildLogMetadata({ duration_ms: e2, threshold_ms: t2, stall_type: "advisory_no_activity" });
          ft.warn(this.ctx, `${this.logPrefix} Advisory stall detected - no activity for advisory threshold period`, r2);
        } catch (e3) {
          console.error("Error logging advisory stall:", e3);
        }
      }
      onStallDetected(e2) {
        if ("heartbeat_only" === e2) {
          const t3 = Date.now(), r2 = t3 - this.lastActivityTime, n2 = t3 - this.lastMeaningfulActivityTime;
          if (r2 < this.thresholdMs && n2 >= this.heartbeatOnlyThresholdMs) {
            if (this.hasLoggedHeartbeatOnly) return;
            this.hasLoggedHeartbeatOnly = true, this.reportStall(e2, n2);
          }
          return;
        }
        if (this.hasLogged) return;
        this.hasLogged = true, this.hasLoggedAdvisory = true;
        const t2 = Date.now() - this.lastActivityTime;
        this.reportStall(e2, t2);
      }
      reportStall(e2, t2) {
        const r2 = this.lastActivity, n2 = this.lastInboundMessage, s2 = this.lastOutboundMessage, o2 = this.ctx.get(Qt);
        try {
          const i2 = this.buildLogMetadata({ duration_ms: t2, threshold_ms: "heartbeat_only" === e2 ? this.heartbeatOnlyThresholdMs : this.thresholdMs, stall_type: e2 }), a2 = "heartbeat_only" === e2 ? `${this.logPrefix} Stream receiving heartbeats only - no meaningful data for threshold period` : `${this.logPrefix} Bidirectional stream stall detected - no activity for threshold period`;
          if (ft.warn(this.ctx, a2, i2), bt.increment(this.ctx, 1, { activity_type: r2?.type ?? "unknown", message_type: r2?.messageType ?? "unknown", loop: this.loop }), this.hasEverStalled || (this.hasEverStalled = true, It.increment(this.ctx, 1, { loop: this.loop })), this.onStallCallback) {
            const t3 = Date.now(), i3 = { type: e2, lastActivityAgoMs: t3 - this.lastActivityTime, lastMeaningfulActivityAgoMs: t3 - this.lastMeaningfulActivityTime, lastActivityType: r2?.messageType, lastInboundMessageType: n2?.messageType, lastOutboundMessageType: s2?.messageType, requestId: o2?.requestId, modelName: o2?.modelDetails?.displayName, streamEnded: void 0 !== this.streamEndedAt, aborted: void 0 !== this.abortedAt, lastServerHeartbeatAgoMs: this.lastServerSentHeartbeatAt ? t3 - this.lastServerSentHeartbeatAt : void 0, lastClientHeartbeatAgoMs: this.lastClientSentHeartbeatAt ? t3 - this.lastClientSentHeartbeatAt : void 0, thresholdMs: "heartbeat_only" === e2 ? this.heartbeatOnlyThresholdMs : this.thresholdMs, handlers: this.handlerTracker?.getHandlerStates(), loop: this.loop };
            try {
              this.onStallCallback(i3);
            } catch (e3) {
              console.error("Error in stall callback:", e3);
            }
          }
        } catch (e3) {
          console.error("Error in stall detection:", e3);
        }
        try {
          this.onStall?.();
        } catch (e3) {
          console.error("Error in onStall callback:", e3);
        }
      }
      emitLifecycleLog(e2, t2) {
        const r2 = Date.now() - this.lastActivityTime;
        try {
          const n2 = this.buildLogMetadata({ duration_ms: r2, event_type: t2 });
          ft.info(this.ctx, e2, n2);
        } catch (e3) {
          console.error("Error logging stream lifecycle:", e3);
        }
      }
      emitLogAndMetric() {
        const e2 = Date.now() - this.lastActivityTime;
        this.emitLifecycleLog(`${this.logPrefix} Stream activity resumed after stall`, "recovered"), Et.histogram(this.ctx, e2, { activity_type: this.lastActivity?.type ?? "unknown", loop: this.loop });
      }
      [Symbol.dispose]() {
        this.disposed = true, this.paused = false, void 0 !== this.timer && (clearTimeout(this.timer), this.timer = void 0), void 0 !== this.advisoryTimer && (clearTimeout(this.advisoryTimer), this.advisoryTimer = void 0), void 0 !== this.heartbeatOnlyTimer && (clearTimeout(this.heartbeatOnlyTimer), this.heartbeatOnlyTimer = void 0), this.ctx.signal.removeEventListener("abort", this.onCtxSignalAbort), this.trackActivity("disposed", "disposed"), this.disposedAt = Date.now(), this.emitLifecycleLog(`${this.logPrefix} Stream stall detector disposed`, "disposed");
      }
    }
    const Tt = (0, y.h)("@anysphere/agent-client:turn-runner"), Rt = 1e3, Bt = 100, Pt = 6e4, Jt = 3e5, Mt = 2, qt = /* @__PURE__ */ new Set(["textDelta", "thinkingDelta", "thinkingCompleted", "partialToolCall", "toolCallDelta", "toolCallStarted", "toolCallCompleted", "tokenDelta"]);
    function Dt(e2) {
      return qt.has(e2.message.case ?? "");
    }
    async function Ot(e2, t2) {
      await new Promise((r2, n2) => {
        if (t2?.aborted) return void n2(new G("Cancelled during backoff"));
        const s2 = setTimeout(() => {
          t2?.removeEventListener("abort", o2), r2();
        }, e2);
        function o2() {
          clearTimeout(s2), n2(new G("Cancelled during backoff"));
        }
        t2?.addEventListener("abort", o2, { once: true });
      });
    }
    function Nt(e2, t2, r2) {
      const n2 = t2 ? Bt : Rt, s2 = r2 ?? Math.min(n2 * 2 ** e2, Pt);
      return s2 + (void 0 === r2 ? 0.2 * s2 * Math.random() : 0);
    }
    function Ft(e2) {
      const { connectCode: t2, connectCodeName: r2, ...n2 } = e2;
      return void 0 === r2 ? n2 : { ...n2, connectCode: r2 };
    }
    async function Ut(e2) {
      const { ctx: t2, checkpointHandler: r2, runOptions: n2, requestId: s2, hooks: o2, cancellation: i2 } = e2, a2 = e2.originalRequestId ?? s2;
      let c2 = Rt;
      const l2 = async (r3, s3, o3, i3) => {
        if (o3 || (c2 = Rt), void 0 !== e2.backoff) return void await e2.backoff(r3, s3);
        const a3 = o3 ? (function(e3, t3) {
          const r4 = Math.min(Jt, 3 * e3);
          return t3 ?? Rt + (r4 - Rt) * Math.random();
        })(c2, n2.fixedRetryDelayMs) : Nt(r3, n2.isRunningInTest, n2.fixedRetryDelayMs);
        o3 && (c2 = a3, e2.logging && Tt.info(t2, `[${e2.logging.tag}] Endless retry delay selected`, { selectedDelayMs: a3, attempt: r3, retryCategory: i3.countAsServerError ? "server" : "transport", endlessRetries: o3 })), await Ot(a3, s3);
      };
      let u2, d2, p2, m2 = e2.state, h2 = e2.action, f2 = 0, g2 = s2, y2 = 0, w2 = 0, _2 = false, A2 = 0, S2 = false;
      const b2 = () => {
        _2 && (n2.onConnectionStateChange?.({ state: "connected" }), _2 = false);
      }, E2 = () => {
        S2 = true, b2();
      }, I2 = (e3) => ({ handleCheckpoint: async (t3, n3, s3) => {
        e3 === f2 && (S2 = true), await r2.handleCheckpoint(t3, n3, s3), e3 === f2 && (u2 = n3, d2 = s3?.resumeEligibility ?? "eligible", b2());
      }, getLatestCheckpoint: () => r2.getLatestCheckpoint() });
      for (; ; ) {
        if (t2.canceled) throw i2.toCancelledError(void 0, g2);
        if (u2 = void 0, d2 = void 0, S2 = false, o2.beginAttempt?.({ attempt: f2, originalRequestId: a2 }), f2 > 0 ? (g2 = x(), await n2.onRetryStarting?.(f2, { actionCase: h2.action.case, conversationState: m2, isResume: "resumeAction" === h2.action.case, attemptRequestId: g2 }), e2.logging && Tt.info(t2, `[${e2.logging.tag}] Retrying attempt ${f2}`, { attempt: f2, actionCase: h2.action.case, requestId: g2, originalRequestId: a2 }), "resumeAction" === h2.action.case && (await n2.onRetryResuming?.({ checkpointState: m2, nextAttempt: f2, reason: "resume_action" }), e2.logging && Tt.info(t2, `[${e2.logging.tag}] Resuming from checkpoint`, { nextAttempt: f2, reason: "resume_action" }))) : (e2.logging && Tt.info(t2, `[${e2.logging.tag}] Initial request`, { attempt: f2, actionCase: h2.action.case, requestId: g2 }), true === e2.notifyInitialResume && "resumeAction" === h2.action.case && (await n2.onRetryResuming?.({ checkpointState: m2, nextAttempt: f2, reason: "resume_action" }), e2.logging && Tt.info(t2, `[${e2.logging.tag}] Resuming from checkpoint`, { nextAttempt: f2, reason: "resume_action" }))), t2.canceled) throw i2.toCancelledError(void 0, g2);
        try {
          return await o2.runAttempt({ state: m2, action: h2, checkpointHandler: I2(f2), attempt: f2, attemptRequestId: g2, notifyConnected: b2, notifyApplicationProgress: E2 }), b2(), void (e2.logging && Tt.info(t2, `[${e2.logging.tag}] Request successful`, { attempt: f2, actionCase: h2.action.case, requestId: g2, originalRequestId: a2 }));
        } catch (r3) {
          if (true === i2.shortCircuit?.(r3)) throw i2.toCancelledError(r3, g2);
          const s3 = true === n2.endlessRetries?.(), c3 = e2.nowMs?.() ?? Date.now(), b3 = void 0 === p2 ? void 0 : c3 - p2;
          let E3 = o2.classify(r3, { attempt: f2, attemptRequestId: g2, originalRequestId: a2, serverErrorRetries: y2, transportErrorRetries: w2, stallRetryElapsedMs: b3, endlessRetries: s3 });
          "retry" === E3.action && (void 0 !== u2 ? A2 = 0 : "resumeAction" === h2.action.case && S2 && (A2++, A2 >= Mt && (e2.logging && Tt.warn(t2, `[${e2.logging.tag}] Resume attempts are streaming but not producing checkpoints; stopping automatic resume`, { noProgressResumeFailures: A2, attempt: f2, requestId: g2, originalRequestId: a2, errorName: r3 instanceof Error ? r3.name : typeof r3 }), E3 = { action: "throw", error: new U("Agent turn stopped after repeated resume attempts made no progress", { cause: r3 instanceof Error ? r3 : void 0, requestId: g2, displayInfo: { title: "Agent stopped retrying", detail: "The connection was interrupted repeatedly without saving progress, so the agent stopped to avoid repeating the same work. Retry to continue from the last saved state.", isRetryable: true } }), transportFailureKind: E3.transportFailureKind })));
          const I3 = { ...void 0 === E3.transportFailureKind ? {} : { transportFailureKind: E3.transportFailureKind }, ...void 0 === e2.loop ? {} : { loop: e2.loop } }, C2 = e2.logging?.diagnostics?.(r3);
          if (e2.logging) {
            const e3 = "retry" === E3.action ? `RETRY (countAsServerError=${E3.countAsServerError}, countAsTransportError=${E3.countAsTransportError})` : `THROW ${E3.error.kind}`;
            Tt.warn(t2, `[AGENT_ERROR_DIAGNOSTICS] requestId=${g2} originalRequestId=${a2} decision=${e3}`, { decision: e3, willRetry: "retry" === E3.action, enableAgentRetries: n2.enableAgentRetries ?? false, endlessRetries: s3, isRunningInTest: n2.isRunningInTest ?? false, serverErrorRetries: y2, transportErrorRetries: w2, attempt: f2, requestId: g2, originalRequestId: a2, ...I3, ...C2 });
          }
          if ("throw" === E3.action) {
            if (0 === f2) {
              const r4 = { attempt: 0, actionCase: h2.action.case, error: E3.error, requestId: g2, originalRequestId: a2, enableAgentRetries: true === n2.enableAgentRetries, endlessRetries: s3, stallAborted: false, abortSources: [] };
              try {
                await n2.onErrorNotRetried?.(o2.buildNonRetriedErrorInfo?.(r4) ?? r4);
              } catch (r5) {
                e2.logging && Tt.warn(t2, `[${e2.logging.tag}] onErrorNotRetried callback failed`, { error: String(r5), requestId: g2, originalRequestId: a2 });
              }
            }
            throw e2.logging && Tt.warn(t2, `[${e2.logging.tag}] Error not retryable`, { ...I3, ...C2, attempt: f2, actionCase: h2.action.case, requestId: g2, originalRequestId: a2, errorName: E3.error.name, ...true === e2.logging.includeErrorObjects ? { error: E3.error } : {}, serverErrorRetries: y2, transportErrorRetries: w2 }), E3.error;
          }
          const k2 = f2 + 1;
          if ("ineligible_terminal_turn" === d2) return void (e2.logging && Tt.warn(t2, `[${e2.logging.tag}] Terminal checkpoint received before retryable error; completing without automatic resume`, { errorName: r3 instanceof Error ? r3.name : typeof r3, errorMessage: r3 instanceof Error ? r3.message : String(r3) }));
          n2.onConnectionStateChange?.({ state: "reconnecting", attempt: k2, trigger: { ...I3, ...o2.reconnectTrigger?.(r3, E3, { originalRequestId: a2, failedAttemptRequestId: g2, nextAttempt: k2 }) ?? { originatingRequestId: a2, attemptRequestId: g2 } } }), _2 = true, E3.countAsServerError && y2++, E3.countAsTransportError && w2++, true === E3.stall ? p2 ??= c3 : p2 = void 0, f2 = k2, void 0 !== u2 && (m2 = u2, h2 = new v.QFf({ action: { case: "resumeAction", value: new v.qKo() } })), o2.onRetryCommitted?.(), await l2(f2, t2.signal, s3, E3);
        }
      }
    }
    var Lt = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, $t = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    const Qt = (0, g.cF)(/* @__PURE__ */ Symbol("agentStreamMetadata"), void 0), jt = (0, y.h)("@anysphere/agent-client:abort"), Gt = (0, y.h)("@anysphere/agent-client:retry"), Ht = (0, y.h)("@anysphere/agent-client:request-context-blob");
    async function zt({ ctx: e2, action: t2, resources: r2, blobStore: n2, options: s2, source: o2, transportMode: i2, notifyBytes: a2 }) {
      try {
        const o3 = await ze({ ctx: e2, action: t2, resources: r2, blobStore: n2, mode: i2 ?? s2.requestContextBlobTransportMode ?? "legacy", maxBlobBytes: s2.requestContextBlobMaxBytes ?? Ue, maxInlineDynamicBytes: s2.requestContextDynamicInlineMaxBytes ?? Le, notesSessionId: s2.conversationId });
        if (true === a2) {
          const e3 = (function({ prepared: e4, parts: t3 }) {
            return "prepared" === e4.kind ? Ve(e4, { dynamicByteLength: e4.dynamicByteLength }) : "already_prepared" === e4.kind && void 0 !== t3 ? Ve(t3) : void 0;
          })({ prepared: o3, parts: t2.requestContextParts });
          void 0 !== e3 && s2.onRequestContextBytes?.(e3);
        }
      } catch (r3) {
        t2.requestContextParts = void 0, Ht.warn(e2, "Failed to prepare request context blob; using legacy fallback", { actionCase: t2.action.case, errorName: r3 instanceof Error ? r3.name : typeof r3, source: o2 });
      }
    }
    const Wt = (e2) => {
      const t2 = [];
      switch (t2.push(e2.message.case), e2.message.case) {
        case "conversationAction":
          t2.push(e2.message.value.action.case);
          break;
        case "execClientMessage":
        case "execClientControlMessage":
        case "kvClientMessage":
        case "execServerMessage":
        case "execServerControlMessage":
          t2.push(e2.message.value.message.case);
          break;
        case "interactionResponse":
          t2.push(e2.message.value.result.case);
          break;
        case "interactionUpdate":
          switch (t2.push(e2.message.value.message.case), e2.message.value.message.case) {
            case "partialToolCall":
            case "toolCallCompleted":
            case "toolCallStarted":
              t2.push(e2.message.value.message.value.toolCall?.tool.case);
              break;
            case "toolCallDelta":
              t2.push(e2.message.value.message.value.toolCallDelta?.delta.case);
          }
          break;
        case "interactionQuery":
          t2.push(e2.message.value.query.case);
      }
      return t2.filter((e3) => void 0 !== e3).join(":");
    };
    function Vt(e2, t2, r2, n2, s2, o2, i2, a2) {
      const c2 = (0, P.Jt)(), l2 = (0, P.Jt)(), u2 = (0, P.Jt)(), d2 = (0, P.Jt)();
      let p2 = false, m2 = false;
      return { interactionStream: c2, execStream: l2, checkpointStream: u2, kvStream: d2, done: (async function() {
        let h2, f2, g2 = false, y2 = false;
        try {
          for await (const s3 of t2) {
            if (void 0 !== s3.ttftBreakdown) {
              const t4 = s3.ttftBreakdown;
              try {
                a2?.({ serverFirstTokenMs: t4.serverFirstTokenMs, preStreamSetupMs: t4.preStreamSetupMs, waitForFirstEventMs: t4.waitForFirstEventMs, providerTtftMs: t4.providerTtftMs, slowPoolWaitMs: t4.slowPoolWaitMs, ...void 0 === t4.clientPrepMs ? {} : { clientPrepMs: t4.clientPrepMs }, clock: t4.clientClock ? "client" : "server" });
              } catch (t5) {
                Gt.warn(e2, "onTtftBreakdown callback failed", { error: String(t5) });
              }
            }
            const t3 = "interactionUpdate" === s3.message.case && "heartbeat" === s3.message.value.message.case;
            if (p2 || (p2 = true, n2(t3)), t3) r2.onServerSentHeartbeat(), r2.reset("inbound_message", "heartbeat");
            else {
              if (!m2) {
                m2 = true;
                try {
                  i2?.();
                } catch (t4) {
                  Gt.warn(e2, "onFirstNonHeartbeatMessage callback failed", { error: String(t4) });
                }
              }
              r2.reset("inbound_message", Wt(s3));
            }
            if ("interactionUpdate" === s3.message.case && "turnEnded" === s3.message.value.message.case && (g2 = true), "interactionUpdate" !== s3.message.case && "interactionQuery" !== s3.message.case || await c2.write(s3.message).catch(() => {
            }), "execServerMessage" !== s3.message.case && "execServerControlMessage" !== s3.message.case || await l2.write(s3.message.value), "conversationCheckpointUpdate" === s3.message.case) {
              const e3 = g2 ? "ineligible_terminal_turn" : "eligible";
              "ineligible_terminal_turn" === e3 && (y2 = true), await u2.write({ checkpoint: s3.message.value, metadata: { resumeEligibility: e3 } });
            }
            "kvServerMessage" === s3.message.case && await d2.write(s3.message.value);
          }
          r2.onStreamEnded();
        } catch (e3) {
          h2 = e3;
        } finally {
          f2 = h2;
          g2 && y2 && void 0 !== h2 && !s2?.aborted && !o2?.aborted && (function(e3) {
            const t3 = e3 instanceof F ? e3 : oe(e3);
            return t3 instanceof U && we(t3);
          })(h2) && (Gt.debug(e2, "Ignoring transport close after terminal agent stream", { caughtError: h2 instanceof Error ? `${h2.name}: ${h2.message}` : String(h2) }), r2.onStreamEnded(), f2 = void 0);
          if (!g2 && !s2?.aborted && !o2?.aborted) {
            const t3 = "Stream ended without turnEnded — connection likely dropped mid-stream";
            void 0 === h2 ? (Gt.warn(e2, t3), f2 = new U(t3, { isTransport: true })) : h2 instanceof Error && "[aborted] aborted" === h2.message ? (Gt.warn(e2, `${t3}; retrying caught [aborted] aborted error`), f2 = new U(t3, { cause: h2, isTransport: true })) : Gt.warn(e2, `${t3}; caught non-retriable stream error, rethrowing as-is`, { caughtError: h2 instanceof Error ? `${h2.name}: ${h2.message}` : String(h2) });
          } else if (!g2 && !s2?.aborted) {
            const t3 = `Stream ended without turnEnded, abort signals: signal.aborted=${s2?.aborted}, parentSignal.aborted=${o2?.aborted}; firstMessageFired=${p2}`;
            Gt.warn(e2, t3);
          }
          c2.close(), l2.close(), u2.close(), d2.close();
        }
        if (void 0 !== f2) throw f2;
      })() };
    }
    async function Kt(e2, t2, r2) {
      for await (const n2 of t2) switch (n2.event.case) {
        case "stdout":
          await r2.sendUpdate(e2, m.L.shellOutputDelta({ case: "stdout", value: new S.o0({ data: n2.event.value.data }) }));
          break;
        case "stderr":
          await r2.sendUpdate(e2, m.L.shellOutputDelta({ case: "stderr", value: new S.Db({ data: n2.event.value.data }) }));
          break;
        case "exit":
          await r2.sendUpdate(e2, m.L.shellOutputDelta({ case: "exit", value: new S.vb({ code: n2.event.value.code, aborted: n2.event.value.aborted }) }));
      }
    }
    function Yt(e2) {
      return e2 instanceof Error ? e2.name : void 0;
    }
    function Zt(e2) {
      const t2 = { errorName: Yt(e2) }, r2 = pe(e2);
      if (void 0 === r2) return t2;
      const n2 = (function(e3) {
        if (null !== e3 && "object" == typeof e3 && "cause" in e3) return e3.cause;
      })(r2), s2 = (function(e3) {
        if (null === e3 || "object" != typeof e3 || !("code" in e3)) return;
        const t3 = e3.code;
        return "string" == typeof t3 || "number" == typeof t3 ? t3 : void 0;
      })(n2), o2 = Yt(n2);
      return { ...t2, underlyingConnectError: { code: r2.code, codeName: B.C[r2.code], cause: void 0 !== s2 || void 0 !== o2 ? { code: s2, name: o2 } : void 0 } };
    }
    class Xt {
      constructor(e2, t2, r2 = {}) {
        this.client = e2, this.endpointUrl = t2, this.options = r2, this.hasStartedStream = false;
      }
      async run(e2, t2, r2, s2, o2, i2, a2, c2, l2, u2, d2) {
        const p2 = { stack: [], error: void 0, hasError: false };
        try {
          if (void 0 !== d2.maxSteps) throw new j(d2.maxSteps);
          const m2 = new He(a2), f2 = d2.generationUUID ?? x(), g2 = new h.xc(), y2 = (0, h.XI)(o2, g2), w2 = { sources: [], abortReasonName: void 0, abortReasonMessage: void 0 }, v2 = (e3) => {
            const t3 = (function(e4) {
              const t4 = de(e4);
              return void 0 === t4 ? void 0 : N(le(t4));
            })(e3), r3 = w2.sources.includes("stall_detector") || true === t3?.stallAborted, n2 = (s3 = w2.sources).some((e4) => "stall_detector" !== e4) ? "owner" : s3.includes("stall_detector") ? "stall_detector" : "none";
            var s3;
            const o3 = Zt(e3), i3 = o3.underlyingConnectError;
            return { relayed: t3, stallAborted: r3, abortOrigin: "none" === n2 && r3 ? "stall_detector" : n2, reading: void 0 === t3 ? { errorName: o3.errorName, connectCode: i3?.code, connectCodeName: i3?.codeName, connectCause: i3?.cause, abortSources: [...w2.sources], abortReasonName: w2.abortReasonName, ...void 0 === i3 ? {} : { underlyingConnectError: i3 } } : { errorName: t3.errorName, connectCode: t3.connectCode, connectCodeName: t3.connectCodeName, connectCause: t3.connectCause, ...(a3 = t3.loop, "nal" === a3 || "local_loop" === a3 || "module" === a3 ? { loop: t3.loop } : {}), ...void 0 === t3.transportMode ? {} : { transportMode: t3.transportMode } } };
            var a3;
          };
          let _2 = 0, A2 = 0;
          try {
            d2.onNetworkPhaseStart?.();
          } catch (t3) {
            Gt.warn(e2, "onNetworkPhaseStart callback failed", { error: String(t3) });
          }
          const S2 = Lt(p2, (0, n.VI)(e2.withName("networkPhase")), false);
          e2 = S2.ctx, await (0, n.MG)(S2.span, () => Ut({ ctx: e2, state: t2, action: r2, checkpointHandler: l2, runOptions: d2, requestId: f2, loop: this.options.loop ?? "nal", notifyInitialResume: true, logging: { ...this.options.retryLogging ?? { tag: "nal_agent_retries", includeErrorObjects: true }, diagnostics: (e3) => {
            const { stallAborted: t3, abortOrigin: r3, reading: n2 } = v2(e3);
            return { stallAborted: t3, abortOrigin: r3, ...Ft(n2) };
          } }, cancellation: { toCancelledError: () => new G("Request cancelled") }, hooks: { beginAttempt: () => {
            w2.sources = [], w2.abortReasonName = void 0, w2.abortReasonMessage = void 0, A2 = ++_2;
          }, runAttempt: async ({ state: t3, action: r3, checkpointHandler: n2, attempt: o3, attemptRequestId: a3, notifyConnected: l3, notifyApplicationProgress: p3 }) => {
            const h2 = (function(e3, t4, r4) {
              return { sendUpdate: async (n3, s3) => {
                if (t4 === r4()) return e3.sendUpdate(n3, s3);
                "toolCallCompleted" === s3.message?.case && Gt.warn(n3, "nal.await_stall.stale_completion_dropped", { attemptGen: t4, currentGen: r4() });
              }, query: async (n3, s3) => {
                if (t4 !== r4()) throw new G("Stale query from previous attempt");
                return e3.query(n3, s3);
              }, enqueuePostTurnEndedWork: e3.enqueuePostTurnEndedWork ? (t5) => e3.enqueuePostTurnEndedWork(t5) : void 0, flushPostTurnEndedWork: e3.flushPostTurnEndedWork ? (t5) => e3.flushPostTurnEndedWork(t5) : void 0 };
            })(y2, A2, () => _2);
            await this.runInternal(e2, t3, r3, s2, h2, i2, m2, c2, n2, u2, d2, a3, f2, g2, w2, l3, p3, o3);
          }, classify: (e3, t3) => {
            const { abortOrigin: r3, relayed: n2 } = v2(e3), s3 = pt(e3, ut(d2, t3), { ...t3, retriesEnabled: d2.enableAgentRetries ?? false, abortOrigin: r3 }), o3 = n2?.transportFailureKind;
            return "string" == typeof (i3 = o3) && Ke.includes(i3) ? { ...s3, transportFailureKind: o3 } : s3;
            var i3;
          }, buildNonRetriedErrorInfo: (e3) => ({ ...e3, enableAgentRetries: d2.enableAgentRetries ?? false, stallAborted: v2(e3.error).stallAborted, abortSources: [...w2.sources], abortReasonName: w2.abortReasonName, abortReasonMessage: w2.abortReasonMessage }), reconnectTrigger: (e3, t3, r3) => {
            const { relayed: n2, stallAborted: s3, reading: o3 } = v2(e3), i3 = e3 instanceof F ? e3 : oe(e3, { requestId: r3.failedAttemptRequestId });
            return { errorClass: n2?.errorName ?? i3.name, connectCode: o3.connectCode, connectCodeName: o3.connectCodeName, errorCode: i3.displayInfo?.errorCode, countAsServerError: t3.countAsServerError, countAsTransportError: t3.countAsTransportError, stallAborted: s3, originatingRequestId: r3.originalRequestId, attemptRequestId: r3.failedAttemptRequestId, ...void 0 === o3.transportMode ? {} : { transportMode: o3.transportMode }, endpointUrl: this.endpointUrl };
          }, onRetryCommitted: () => c2.reopen() } }));
        } catch (e3) {
          p2.error = e3, p2.hasError = true;
        } finally {
          $t(p2);
        }
      }
      async runInternal(e2, t2, r2, s2, o2, c2, l2, d2, m2, h2, g2, y2, b2, E2, I2, C2, k2, x2, B2 = "agent.request.attempt") {
        const J2 = { stack: [], error: void 0, hasError: false };
        try {
          const M2 = e2;
          e2 = this.options.prepareAttemptContext?.(e2, { attempt: x2, attemptRequestId: y2, originalRequestId: b2, runOptions: g2 }) ?? e2;
          const q2 = Lt(J2, (0, n.VI)(e2.withName(B2)), false);
          q2.span.setAttribute("agent.attempt", x2), q2.span.setAttribute("agent.request_id", y2), q2.span.setAttribute("agent.original_request_id", b2), e2 = q2.ctx, e2 = (0, n.Mf)(e2, "agent.request_id", y2), e2 = (e2 = (0, n.Mf)(e2, "agent.original_request_id", b2)).with(Qt, { requestId: y2, rootParentRequestId: g2.rootParentRequestId, modelDetails: s2 });
          const D2 = new Set(I2.sources);
          let O2 = void 0 !== I2.abortReasonName || void 0 !== I2.abortReasonMessage;
          const N2 = (t3, r3) => {
            if (D2.has(t3)) return;
            D2.add(t3), I2.sources = [...D2];
            const n2 = ((e3) => {
              const t4 = "string" == typeof e3?.abortReasonName ? e3.abortReasonName : void 0, r4 = "string" == typeof e3?.abortReasonMessage ? e3.abortReasonMessage : void 0;
              if (void 0 !== t4 || void 0 !== r4) return { abortReasonName: t4, abortReasonMessage: r4 };
            })(r3);
            O2 || void 0 === n2 || (O2 = true, I2.abortReasonName = n2.abortReasonName, I2.abortReasonMessage = n2.abortReasonMessage), jt.error(e2, "Agent client stream abort", new Error(t3), { abortSource: t3, requestId: y2, conversationId: g2.conversationId, ...r3 ?? {} });
          };
          if (e2.signal.aborted) {
            const t3 = e2.signal.reason;
            N2("ctx_signal_abort", (0, w.R)(t3));
          } else e2.signal.addEventListener("abort", () => {
            const t3 = e2.signal.reason;
            N2("ctx_signal_abort", (0, w.R)(t3));
          }, { once: true });
          const [F2, U2] = e2.withCancel();
          if (d2.signal?.aborted) {
            const e3 = d2.signal?.reason;
            N2("conversation_action_abort", (0, w.R)(e3)), U2();
          } else d2.signal?.addEventListener("abort", () => {
            const e3 = d2.signal?.reason;
            N2("conversation_action_abort", (0, w.R)(e3)), U2();
          }, { once: true });
          if (e2.canceled || F2.canceled) {
            const t3 = { ctxCanceled: e2.canceled, softCancel: F2.canceled };
            throw N2("pre_run_cancel", t3), new G("User aborted request");
          }
          const L2 = (0, n.VI)(e2.withName("createControlledExecManager")), Q2 = a.n6O.fromResources(c2);
          L2[Symbol.dispose]();
          const [j2, H2] = e2.withCancel(), z2 = new kt(), { failThresholdMs: W2, advisoryThresholdMs: V2 } = At(g2.stallDetectorConfig, { isRunningInTest: g2.isRunningInTest }), K2 = Lt(J2, new xt(j2, { thresholdMs: W2, advisoryThresholdMs: V2, loop: this.options.loop, onStall: () => {
            N2("stall_detector", { thresholdMs: W2, advisoryThresholdMs: V2 }), H2();
          }, onStallCallback: g2.onStall, handlerTracker: z2 }), false);
          let Y2, Z2;
          const X2 = (0, P.Jt)(), ee2 = new T.F8(X2, (e3) => (K2.reset("outbound_write", Wt(e3)), e3)), te2 = Lt(J2, (0, n.VI)(e2.withName("writeInitialRequest")), false);
          let re2;
          const ne2 = ht(h2), se2 = g2.requestContextBlobTransportMode ?? "legacy", oe2 = 0 === x2 && "userMessageAction" === r2.action.case && 0 === t2.turns.length, ie2 = "ref_only" === se2 && oe2 ? "dual" : se2, [, ae2] = await Promise.all([zt({ ctx: e2, action: r2, resources: c2, blobStore: l2, options: g2, source: "run_request", transportMode: ie2, notifyBytes: 0 === x2 }), void 0 === g2.mintLlmGatewayCredential ? Promise.resolve(void 0) : De(g2.mintLlmGatewayCredential, { signal: F2.signal, isCanceled: () => F2.canceled, requestId: y2 })]), ce2 = { action: r2, headers: g2.headers ?? {} }, le2 = this.options.decorateAttempt?.(ce2, g2) ?? ce2, ue2 = new v.Mpn({ conversationState: t2, action: le2.action, modelDetails: s2, requestedModel: g2.requestedModel, clientLlmGatewayCredential: ae2, mcpTools: ne2, conversationGroupId: g2.conversationGroupId, conversationId: g2.conversationId, agentSessionId: g2.agentSessionId, mcpFileSystemOptions: g2.mcpFileSystemOptions, customSystemPrompt: g2.customSystemPrompt, systemPromptSpec: g2.systemPromptSpec, harness: g2.harness, computerUseCoordinateMode: g2.computerUseCoordinateMode, suggestNextPrompt: g2.suggestNextPrompt, subagentTypeName: g2.subagentTypeName, excludeWorkspaceContext: g2.excludeWorkspaceContext, devRawModelSlug: g2.devRawModelSlug, selectedSubagentModels: g2.selectedSubagentModels, subagentModelOverrides: g2.subagentModelOverrides ?? [], selectedSubagentModelDetails: g2.selectedSubagentModelsLegacy, clientSupportsInlineImages: g2.clientSupportsInlineImages, clientSupportsPreviewCard: g2.clientSupportsPreviewCard, startedAsNewProject: g2.startedAsNewProject, firstProjectOnboarding: g2.firstProjectOnboarding, clientSupportsSendToUser: g2.clientSupportsSendToUser, clientSupportsRoutedModelUpdate: g2.clientSupportsRoutedModelUpdate, canCreateCloudSubagents: g2.canCreateCloudSubagents, suppressSubagentProgressUpdateTool: g2.suppressSubagentProgressUpdateTool, runId: b2, nextInteractionQueryId: E2.peekNext() });
          if (re2 = ee2.write(new _.KS({ message: { case: "runRequest", value: ue2 } })), F2.canceled) {
            const t3 = { ctxCanceled: e2.canceled, softCancel: F2.canceled };
            throw N2("post_write_cancel", t3), te2[Symbol.dispose](), new G("User aborted request");
          }
          const de2 = { ...le2.headers, "x-request-id": y2, "x-original-request-id": b2, ...u(g2), ...p() };
          Y2 = (0, n.VI)(e2.withName("handshakeEstablishment")), Y2.span.setAttribute("handshake.firstStreamOnClient", !this.hasStartedStream), this.hasStartedStream = true;
          const pe2 = this.client.run(Y2.ctx, X2, { signal: j2.signal, headers: de2, onHeader: g2.onHeader, onNetworkStarted: () => {
            void 0 === Z2 && (Z2 = performance.now());
          } }), me2 = performance.now(), he2 = (e3) => {
            Y2 && (Y2.span.setAttribute("handshake.firstMessageHeartbeat", e3), void 0 !== Z2 && Y2.span.setAttribute("handshake.preNetworkMs", Z2 - me2), Y2[Symbol.dispose](), Y2 = void 0), C2();
            const t3 = performance.now();
            g2.onFirstMessage?.(t3 - me2), void 0 !== Z2 && g2.onFirstMessageNetwork?.(t3 - Z2);
          }, fe2 = () => {
            k2(), g2.onFirstNonHeartbeatResponse?.(performance.now() - me2, x2);
          }, ge2 = g2.onTtftBreakdown ? (e3) => {
            g2.onTtftBreakdown(e3, x2);
          } : void 0, { interactionStream: ye2, execStream: we2, checkpointStream: ve2, kvStream: _e2, done: Ae2 } = Vt(e2, pe2, K2, he2, F2.signal, e2.signal, fe2, ge2);
          let Se2;
          const be2 = { handleCheckpoint: async (e3, t3, r3) => {
            await m2.handleCheckpoint(e3, t3, r3), Se2 = r3?.resumeEligibility ?? "eligible";
          }, getLatestCheckpoint: () => m2.getLatestCheckpoint() };
          te2[Symbol.dispose]();
          const Ee2 = 5e3;
          let Ie2;
          const Ce2 = () => {
            Ie2 = setTimeout(() => {
              ee2.write(new _.KS({ message: { case: "clientHeartbeat", value: new _.kA() } })).then(() => K2.onClientSentHeartbeat(), () => {
              }), Ce2();
            }, Ee2);
          }, ke2 = () => {
            void 0 !== Ie2 && (clearTimeout(Ie2), Ie2 = void 0);
          };
          Ce2();
          try {
            let t3;
            if ("shellCommandAction" === r2.action.case && r2.action.value.execId) {
              const n3 = r2.action.value, s3 = new S.a({ command: n3.shellCommand?.command || "", parsingResult: new S.HO(), skipApproval: true }), i2 = c2.get(a.wve).execute(e2, s3, { execId: n3.execId }), l3 = new qe(ye2, o2, new T.F8(ee2, (e3) => new _.KS({ message: { case: "interactionResponse", value: e3 } })), K2);
              t3 = { run: async (e3) => {
                await Promise.all([z2.track("handleShellStream", Kt(e3, i2, o2)), z2.track("interactionController", l3.run(e3))]);
              } };
            } else {
              const e3 = new qe(ye2, o2, new T.F8(ee2, (e4) => new _.KS({ message: { case: "interactionResponse", value: e4 } })), K2);
              t3 = { run: async (t4) => {
                await z2.track("interactionController", e3.run(t4));
              } };
            }
            void 0 !== re2 && await Promise.race([re2, Ae2.catch(() => {
            })]);
            const n2 = new T.F8(ee2, (e3) => {
              if ((0, R.isMessage)(e3, A.yT)) return new _.KS({ message: { case: "execClientMessage", value: e3 } });
              if ((0, R.isMessage)(e3, A.$Y)) return new _.KS({ message: { case: "execClientControlMessage", value: e3 } });
              throw new Error(`Unknown exec message (type: ${(0, R.isMessage)(e3) ? e3.getType().typeName : typeof e3})`);
            }), u2 = new Te(we2, n2, Q2), p2 = new f.hC(_e2, new T.F8(ee2, (e3) => new _.KS({ message: { case: "kvClientMessage", value: e3 } })), l2, { beforeGetBlob: async (e3, t4) => l2.persistForRemoteRead(e3, t4) }), m3 = new i(ve2, be2, e2);
            let w2, v2;
            const x3 = { promise: new Promise((e3, t4) => {
              w2 = e3, v2 = t4;
            }), resolve: w2, reject: v2 };
            F2.canceled ? (x3.resolve(), ye2.close()) : F2.signal.addEventListener("abort", () => {
              x3.resolve(), ye2.close();
            }, { once: true }), u2.run(F2).then(x3.resolve).catch(x3.reject);
            const B3 = Promise.allSettled([z2.track("streamSplitter", Ae2.finally(() => {
              ke2(), d2.close(), n2.close();
            })), z2.track("execHandler", x3.promise), t3.run(e2), z2.track("checkpointController", m3.run()), z2.track("kvHandler", p2.run(e2)), z2.track("conversationActionManager", d2.run(e2, { write: async (t4) => {
              await zt({ ctx: e2, action: t4, resources: c2, blobStore: l2, options: g2, source: "queued_action" }), await ee2.write(new _.KS({ message: { case: "conversationAction", value: t4 } }));
            } }))]);
            let P2, J3;
            const q3 = { promise: new Promise((e3, t4) => {
              P2 = e3, J3 = t4;
            }), resolve: P2, reject: J3 };
            B3.then(q3.resolve).catch(q3.reject), e2.canceled ? q3.reject(new G("User aborted request")) : e2.signal.addEventListener("abort", () => q3.reject(new G("User aborted request")), { once: true });
            const D3 = () => {
              e2.signal.aborted ? H2() : (function(e3) {
                const t4 = e3.lingerMs ?? 6e3;
                return new Promise((r3) => {
                  let n3 = false;
                  const s3 = (e4) => {
                    n3 || (n3 = true, clearTimeout(o3), r3(e4));
                  }, o3 = setTimeout(() => s3("linger_timed_out"), t4);
                  e3.done.then(() => s3("stream_ended"), () => s3("stream_ended"));
                });
              })({ done: Ae2, lingerMs: g2.softCancelLingerMs }).then((t4) => {
                Gt.info(e2, "Soft-cancel transport linger finished", { outcome: t4, requestId: y2 }), H2();
              });
            };
            F2.canceled ? (D3(), q3.reject(new G("User aborted request"))) : F2.signal.addEventListener("abort", () => {
              D3(), q3.reject(new G("User aborted request"));
            }, { once: true });
            const O3 = await q3.promise, N3 = O3[0], U3 = O3[1], L3 = O3[3], j3 = (e3) => e3.reason instanceof Error ? `${e3.reason.name}: ${e3.reason.message}` : String(e3.reason);
            if ("rejected" === L3.status) throw new $("Checkpoint persistence failed", { cause: L3.reason instanceof Error ? L3.reason : void 0, requestId: y2, displayInfo: { title: "Checkpoint persistence failed", detail: j3(L3), isRetryable: false } });
            const W3 = "ineligible_terminal_turn" === Se2;
            if (W3) {
              const t4 = { ..."rejected" === N3.status ? { streamSplitter: j3(N3) } : {}, ..."rejected" === U3.status ? { execHandler: j3(U3) } : {} };
              Object.keys(t4).length > 0 && Gt.debug(e2, "Ignoring handler errors after terminal checkpoint", t4);
            }
            if ("rejected" === N3.status && !W3) throw N3.reason;
            if ("rejected" === U3.status && !W3) throw U3.reason;
            F2.canceled || await this.processUnprocessedMessages(M2, d2, be2, s2, o2, c2, l2, h2, g2, y2, b2, E2, I2, K2, C2, k2);
          } finally {
            ke2(), Y2 && (Y2[Symbol.dispose](), Y2 = void 0);
          }
        } catch (e3) {
          J2.error = e3, J2.hasError = true;
        } finally {
          $t(J2);
        }
      }
      async processUnprocessedMessages(e2, t2, r2, n2, s2, o2, i2, a2, c2, l2, u2, d2, p2, m2, h2, f2) {
        if (!t2.hasUnprocessedMessages()) return;
        const g2 = t2.getUnprocessedUserMessages(), y2 = r2.getLatestCheckpoint();
        if (!y2 || 0 === g2.length) return;
        const w2 = g2[0];
        t2.markMessageAsProcessed(w2), t2.resetStream(), m2[Symbol.dispose]();
        const _2 = r2.getLatestCheckpoint();
        try {
          await this.runInternal(e2, y2, new v.QFf({ action: { case: "userMessageAction", value: new v.Vtf({ userMessage: w2 }) } }), n2, s2, o2, i2, t2, r2, a2, c2, l2, u2, d2, p2, h2, f2, 0, "agent.request.queuedMessage");
        } catch (e3) {
          throw _2 === r2.getLatestCheckpoint() && t2.requeueMessage(w2), e3;
        }
      }
    }
    function er(e2) {
      return hr(e2.host.toBinary(), e2.renderer.toBinary()) ? { kind: "identical", fields: [] } : (function(e3) {
        const { host: t2, renderer: r2 } = e3;
        let n2;
        if (rr({ host: t2, renderer: r2 })) n2 = "encoding-only";
        else {
          const e4 = t2.clone(), s2 = r2.clone();
          nr(e4, "without-compacted"), nr(s2, "without-compacted"), rr({ host: e4, renderer: s2 }) ? n2 = "compacted-token-metadata" : (nr(e4, "durable"), nr(s2, "durable"), n2 = rr({ host: e4, renderer: s2 }) ? "observational" : "durable");
        }
        return { kind: n2, fields: or({ host: t2, renderer: r2, includeUnknownFields: "durable" === n2, countUnknownFieldsDeep: true, policy: "full" }) };
      })({ host: e2.host, renderer: e2.renderer });
    }
    function tr(e2) {
      return or({ host: e2.before, renderer: e2.after, includeUnknownFields: true, countUnknownFieldsDeep: false, policy: "durable" });
    }
    function rr(e2) {
      const { host: t2, renderer: r2 } = e2;
      return pr(t2) > 0 || pr(r2) > 0 ? hr(t2.toBinary(), r2.toBinary()) : t2.equals(r2);
    }
    function nr(e2, t2) {
      sr(e2, t2), void 0 !== e2.tokenDetails && sr(e2.tokenDetails, t2);
      for (const r2 of Object.values(e2.subagentStates)) void 0 !== r2.conversationState && nr(r2.conversationState, t2);
    }
    function sr(e2, t2) {
      const r2 = e2;
      for (const [n2, s2] of Object.entries(r2)) cr({ messageTypeName: e2.getType().typeName, fieldName: n2, policy: t2 }) && (r2[n2] = Array.isArray(s2) ? [] : void 0);
    }
    function or(e2) {
      const { host: t2, renderer: r2, includeUnknownFields: n2, countUnknownFieldsDeep: s2, policy: o2 } = e2, i2 = [], a2 = t2, c2 = r2, l2 = { hostCount: 0, rendererCount: 0, equal: true };
      for (const e3 of v.Y9z.fields.list()) {
        if (cr({ messageTypeName: v.Y9z.typeName, fieldName: e3.localName, policy: o2 })) continue;
        const t3 = a2[e3.localName], r3 = c2[e3.localName], n3 = ir({ host: t3, renderer: r3, policy: o2 });
        n3.knownFieldsEqual || i2.push({ field: e3.localName, shape: ur(e3), hostCount: dr(t3, e3), rendererCount: dr(r3, e3) }), l2.hostCount += n3.changedHostUnknownCount, l2.rendererCount += n3.changedRendererUnknownCount, l2.equal &&= n3.unknownFieldsEqual;
      }
      const u2 = mr(t2), d2 = mr(r2);
      ir({ host: u2, renderer: d2, policy: "full" }).knownFieldsEqual || (l2.hostCount += u2.length, l2.rendererCount += d2.length, l2.equal = false);
      const p2 = s2 ? pr(t2) : l2.hostCount, m2 = s2 ? pr(r2) : l2.rendererCount, h2 = s2 ? p2 > 0 || m2 > 0 : !l2.equal;
      return n2 && h2 && i2.push({ field: "unknownFields", shape: "unknown", hostCount: p2, rendererCount: m2 }), i2;
    }
    function ir(e2) {
      const { host: t2, renderer: r2, policy: n2 } = e2;
      if (Object.is(t2, r2)) return { knownFieldsEqual: true, changedHostUnknownCount: 0, changedRendererUnknownCount: 0, unknownFieldsEqual: true };
      if (t2 instanceof Uint8Array || r2 instanceof Uint8Array) return { knownFieldsEqual: t2 instanceof Uint8Array && r2 instanceof Uint8Array && hr(t2, r2), changedHostUnknownCount: 0, changedRendererUnknownCount: 0, unknownFieldsEqual: true };
      if (Array.isArray(t2) || Array.isArray(r2)) {
        const e3 = Array.isArray(t2) ? t2 : [], s3 = Array.isArray(r2) ? r2 : [], o3 = { knownFieldsEqual: Array.isArray(t2) && Array.isArray(r2) && e3.length === s3.length, changedHostUnknownCount: 0, changedRendererUnknownCount: 0, unknownFieldsEqual: true }, i3 = Math.max(e3.length, s3.length);
        for (let t3 = 0; t3 < i3; t3++) ar({ target: o3, nested: ir({ host: e3[t3], renderer: s3[t3], policy: n2 }) });
        return o3;
      }
      if ((0, R.isMessage)(t2) || (0, R.isMessage)(r2)) {
        if (!(0, R.isMessage)(t2) || !(0, R.isMessage)(r2) || t2.getType().typeName !== r2.getType().typeName) {
          const e4 = lr(t2, n2), s4 = lr(r2, n2);
          return { knownFieldsEqual: false, changedHostUnknownCount: e4, changedRendererUnknownCount: s4, unknownFieldsEqual: 0 === e4 && 0 === s4 };
        }
        const e3 = Object.entries(t2).filter(([e4, r3]) => void 0 !== r3 && !cr({ messageTypeName: t2.getType().typeName, fieldName: e4, policy: n2 })), s3 = Object.entries(r2).filter(([e4, t3]) => void 0 !== t3 && !cr({ messageTypeName: r2.getType().typeName, fieldName: e4, policy: n2 })), o3 = { knownFieldsEqual: e3.length === s3.length, changedHostUnknownCount: 0, changedRendererUnknownCount: 0, unknownFieldsEqual: true }, i3 = mr(t2), a3 = mr(r2);
        ir({ host: i3, renderer: a3, policy: "full" }).knownFieldsEqual || (o3.changedHostUnknownCount += i3.length, o3.changedRendererUnknownCount += a3.length, o3.unknownFieldsEqual = false);
        const c3 = r2, l3 = /* @__PURE__ */ new Set([...e3.map(([e4]) => e4), ...s3.map(([e4]) => e4)]), u2 = t2;
        for (const e4 of l3) ar({ target: o3, nested: ir({ host: u2[e4], renderer: c3[e4], policy: n2 }) });
        return o3;
      }
      if ("object" != typeof t2 || null === t2 || "object" != typeof r2 || null === r2) return { knownFieldsEqual: false, changedHostUnknownCount: 0, changedRendererUnknownCount: 0, unknownFieldsEqual: true };
      const s2 = t2, o2 = r2, i2 = Object.keys(s2), a2 = Object.keys(o2), c2 = { knownFieldsEqual: i2.length === a2.length, changedHostUnknownCount: 0, changedRendererUnknownCount: 0, unknownFieldsEqual: true }, l2 = /* @__PURE__ */ new Set([...i2, ...a2]);
      for (const e3 of l2) ar({ target: c2, nested: ir({ host: s2[e3], renderer: o2[e3], policy: n2 }) });
      return c2;
    }
    function ar(e2) {
      const { target: t2, nested: r2 } = e2;
      t2.knownFieldsEqual &&= r2.knownFieldsEqual, t2.changedHostUnknownCount += r2.changedHostUnknownCount, t2.changedRendererUnknownCount += r2.changedRendererUnknownCount, t2.unknownFieldsEqual &&= r2.unknownFieldsEqual;
    }
    function cr(e2) {
      const { messageTypeName: t2, fieldName: r2, policy: n2 } = e2;
      return "full" !== n2 && ("agent.v1.ConversationTokenDetails" === t2 ? "breakdown" === r2 || "promptContextUsageTree" === r2 : "durable" === n2 && t2 === v.Y9z.typeName && "turnTimings" === r2);
    }
    function lr(e2, t2) {
      if ((0, R.isMessage)(e2)) {
        let r2 = mr(e2).length;
        for (const [n2, s2] of Object.entries(e2)) cr({ messageTypeName: e2.getType().typeName, fieldName: n2, policy: t2 }) || (r2 += lr(s2, t2));
        return r2;
      }
      return e2 instanceof Uint8Array ? 0 : Array.isArray(e2) ? e2.reduce((e3, r2) => e3 + lr(r2, t2), 0) : "object" == typeof e2 && null !== e2 ? Object.values(e2).reduce((e3, r2) => e3 + lr(r2, t2), 0) : 0;
    }
    function ur(e2) {
      return "map" === e2.kind ? "map" : e2.repeated ? "repeated" : e2.kind;
    }
    function dr(e2, t2) {
      return void 0 === e2 ? 0 : t2.repeated ? Array.isArray(e2) ? e2.length : 0 : "map" === t2.kind ? "object" == typeof e2 && null !== e2 ? Object.keys(e2).length : 0 : 1;
    }
    function pr(e2) {
      return e2 instanceof Uint8Array || null === e2 ? 0 : (0, R.isMessage)(e2) ? e2.getType().runtime.bin.listUnknownFields(e2).length + Object.values(e2).reduce((e3, t2) => e3 + pr(t2), 0) : Array.isArray(e2) || "object" == typeof e2 ? Object.values(e2).reduce((e3, t2) => e3 + pr(t2), 0) : 0;
    }
    function mr(e2) {
      return e2.getType().runtime.bin.listUnknownFields(e2);
    }
    function hr(e2, t2) {
      if (e2.byteLength !== t2.byteLength) return false;
      for (let r2 = 0; r2 < e2.byteLength; r2++) if (e2[r2] !== t2[r2]) return false;
      return true;
    }
    const fr = "X-Request-Id", gr = "X-Agent-Id";
    function yr(e2, t2) {
      return (function(e3, t3) {
        const r2 = new Set(Object.keys(e3 ?? {}).map((e4) => e4.toLowerCase())), n2 = Object.entries({ [fr]: t3.requestId, [gr]: t3.agentId }).flatMap(([e4, t4]) => void 0 === t4 || r2.has(e4.toLowerCase()) ? [] : [[e4, l(t4)]]);
        return { ...e3, ...Object.fromEntries(n2) };
      })(e2, { requestId: t2, agentId: void 0 });
    }
    const wr = /^[0-9A-Za-z_-]{1,128}$/;
    function vr(e2) {
      return wr.test(e2);
    }
    const _r = ["x-request-id", "request-id", "apim-request-id"];
    function Ar(e2, t2) {
      const r2 = t2.now ?? (() => performance.now()), n2 = t2.epochNow ?? (() => Date.now());
      let s2 = 0;
      return async (o2, i2) => {
        const a2 = { requestId: t2.requestId, attempt: t2.attempt ?? 0, requestIndex: s2++, sentAtEpochMs: n2() }, c2 = r2(), l2 = i2?.signal ?? (o2 instanceof Request ? o2.signal : void 0), u2 = (e3) => {
          try {
            t2.onTiming((r3 = { ...a2, modelId: t2.modelId, ...e3 }, Object.fromEntries(Object.entries(r3).filter(([, e4]) => void 0 !== e4))));
          } catch {
          }
          var r3;
        };
        let d2;
        try {
          d2 = await e2(o2, i2);
        } catch (e3) {
          throw u2({ totalMs: r2() - c2, ...kr(e3, l2) }), e3;
        }
        const p2 = r2() - c2, m2 = { ttfbMs: p2, httpStatus: d2.status, gatewayRequestId: Cr(d2.headers) }, h2 = d2.status >= 400 ? "http_error" : "ok", f2 = true === d2.headers.get("content-type")?.includes("text/event-stream");
        if (null === d2.body || !f2) return u2({ ...m2, totalMs: p2, outcome: h2 }), d2;
        const [g2, y2] = d2.body.tee(), w2 = (async function(e3, t3) {
          const r3 = {}, n3 = (e4) => {
            const n4 = (function(e5) {
              const t4 = [];
              let r4 = false;
              for (const n5 of e5.split("\n")) {
                const e6 = n5.endsWith("\r") ? n5.slice(0, -1) : n5;
                0 === e6.length || e6.startsWith(":") || (r4 = true, e6.startsWith("data:") && t4.push(e6.slice(5).trimStart()));
              }
              return r4 ? t4.join("\n") : void 0;
            })(e4);
            if (void 0 !== n4 && (r3.firstEventMs ??= t3(), void 0 === r3.firstContentMs && (function(e5) {
              return Sr.test(e5);
            })(n4) && (r3.firstContentMs = t3()), r3.modelId ??= br.exec(n4)?.[1], n4.includes('"usage"'))) {
              const e5 = Er.exec(n4)?.[1];
              void 0 !== e5 && (r3.outputTokens = Number(e5));
            }
          }, s3 = e3.getReader(), o3 = new TextDecoder();
          let i3 = "";
          try {
            for (; ; ) {
              const { done: e4, value: t4 } = await s3.read();
              if (e4) break;
              const r4 = Math.max(0, i3.length - 3);
              i3 += o3.decode(t4, { stream: true });
              let a3 = Ir(i3, r4);
              for (; void 0 !== a3; ) n3(i3.slice(0, a3.index)), i3 = i3.slice(a3.index + a3.length), a3 = Ir(i3, 0);
            }
            i3 += o3.decode(), i3.trim().length > 0 && n3(i3);
          } catch (e4) {
            r3.failure = e4;
          } finally {
            s3.releaseLock();
          }
          return r3;
        })(y2, () => r2() - c2).then((e3) => {
          const t3 = r2() - c2, n3 = void 0 === e3.firstContentMs ? void 0 : Math.max(0, t3 - e3.firstContentMs);
          u2({ ...m2, firstEventMs: e3.firstEventMs, firstContentMs: e3.firstContentMs, streamMs: n3, totalMs: t3, outputTokens: e3.outputTokens, outputTokensPerSecond: void 0 !== e3.outputTokens && void 0 !== n3 && n3 > 0 ? e3.outputTokens / n3 * 1e3 : void 0, ...void 0 === e3.modelId ? {} : { modelId: e3.modelId }, ...void 0 === e3.failure ? { outcome: h2 } : kr(e3.failure, l2) });
        });
        return new Response((function(e3, t3) {
          const r3 = e3.getReader();
          return new ReadableStream({ async pull(e4) {
            let n3;
            try {
              n3 = await r3.read();
            } catch (r4) {
              return await t3, void e4.error(r4);
            }
            if (n3.done) return await t3, void e4.close();
            e4.enqueue(n3.value);
          }, cancel: (e4) => r3.cancel(e4) });
        })(g2, w2), { status: d2.status, statusText: d2.statusText, headers: d2.headers });
      };
    }
    const Sr = new RegExp([String.raw`"type"\s*:\s*"response\.(?:output_text|reasoning_summary_text|reasoning_text|function_call_arguments|refusal)\.(?:delta|done)"`, String.raw`"(?:content|reasoning_content|reasoning|refusal)"\s*:\s*"(?!")`, String.raw`"tool_calls"\s*:\s*\[\s*\{`, String.raw`"type"\s*:\s*"content_block_delta"`].join("|")), br = /"model"\s*:\s*"([^"\\\s]{1,256})"/, Er = /"(?:output_tokens|completion_tokens)"\s*:\s*(\d+)/;
    function Ir(e2, t2) {
      const r2 = e2.indexOf("\n\n", t2), n2 = e2.indexOf("\r\n\r\n", t2);
      return -1 !== n2 && (-1 === r2 || n2 < r2) ? { index: n2, length: 4 } : -1 === r2 ? void 0 : { index: r2, length: 2 };
    }
    function Cr(e2) {
      for (const t2 of _r) {
        const r2 = e2.get(t2)?.trim();
        if (void 0 !== r2 && vr(r2)) return r2;
      }
    }
    function kr(e2, t2) {
      const r2 = "object" == typeof e2 && null !== e2 && "name" in e2 && "string" == typeof e2.name ? e2.name : void 0;
      return { outcome: true === t2?.aborted || "AbortError" === r2 || "CancelledError" === r2 ? "aborted" : "error", errorName: void 0 !== r2 && "" !== r2 ? r2 : e2 instanceof Error ? "Error" : typeof e2 };
    }
    const xr = "composerRootWriterDiagnostic:", Tr = 4096, Rr = 4, Br = 8, Pr = 6048e5, Jr = ["agent_checkpoint", "git_auto_accept", "transcript_recovery", "restore_or_rewind", "host_hydrate", "goal_mutation", "migration_or_import", "other"], Mr = ["true", "false", "unknown"], qr = ["turns", "todos", "plan", "summary", "file_states", "subagent_state", "tool_state", "goal_state", "configuration", "other"], Dr = ["added", "removed", "changed"];
    function Or(e2) {
      return `${xr}${e2}`;
    }
    function Nr(e2) {
      switch (e2) {
        case "turns":
          return "turns";
        case "todos":
          return "todos";
        case "plan":
        case "plans":
          return "plan";
        case "summary":
        case "summaryArchive":
        case "summaryArchives":
        case "selfSummaryCount":
          return "summary";
        case "fileStates":
        case "fileStatesV2":
        case "readPaths":
          return "file_states";
        case "subagentStates":
        case "subagentStateRefs":
        case "subagentThreads":
        case "subagentRunsByParentToolCallId":
        case "communicateUpdateHistory":
        case "communicateUpdateFinalSummary":
        case "communicateUpdateCompletedSubtitle":
        case "communicateUpdateStatesByParentToolCallId":
          return "subagent_state";
        case "pendingToolCalls":
        case "completedAskQuestionToolCallIds":
          return "tool_state";
        case "goalState":
          return "goal_state";
        case "mode":
        case "agentType":
        case "isRootProjectConversation":
        case "durableSkillBlocks":
        case "durableCustomModeId":
          return "configuration";
        default:
          return "other";
      }
    }
    function Fr(e2, t2) {
      if (void 0 === e2) return { kind: "missing" };
      if ("string" != typeof e2 || new TextEncoder().encode(e2).byteLength > Tr) return { kind: "unavailable" };
      let r2;
      try {
        r2 = JSON.parse(e2);
      } catch {
        return { kind: "unavailable" };
      }
      return Ur(r2) ? r2.writtenAtMs > t2 || t2 - r2.writtenAtMs > Pr ? { kind: "unavailable" } : { kind: "record", record: r2 } : { kind: "unavailable" };
    }
    function Ur(e2) {
      return !(!Qr(e2) || 1 !== e2.version) && (!(!jr(e2.rendererRootBlobIdHex) || void 0 !== e2.previousRendererRootBlobIdHex && !jr(e2.previousRendererRootBlobIdHex) || "boolean" != typeof e2.predecessorVerified || !Gr(e2.throughWriterSequence) || !Gr(e2.writersOmitted) || "string" != typeof e2.writerInstanceId || 0 === e2.writerInstanceId.length || e2.writerInstanceId.length > 128 || !Gr(e2.writtenAtMs) || !Array.isArray(e2.writers) || e2.writers.length > Rr) && e2.writers.every(Lr));
    }
    function Lr(e2) {
      return !(!(Qr(e2) && $r(Jr, e2.reason) && $r(Mr, e2.hostOwnedAtWrite) && Gr(e2.fieldsOmitted) && Array.isArray(e2.fields)) || e2.fields.length > Br) && e2.fields.every((e3) => Qr(e3) && $r(qr, e3.field) && $r(Dr, e3.direction) && Gr(e3.beforeCount) && Gr(e3.afterCount));
    }
    function $r(e2, t2) {
      return "string" == typeof t2 && e2.includes(t2);
    }
    function Qr(e2) {
      return "object" == typeof e2 && null !== e2;
    }
    function jr(e2) {
      return "string" == typeof e2 && /^[0-9a-f]{64}$/.test(e2);
    }
    function Gr(e2) {
      return "number" == typeof e2 && Number.isSafeInteger(e2) && e2 >= 0;
    }
  }