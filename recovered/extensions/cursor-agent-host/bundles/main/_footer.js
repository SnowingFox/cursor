// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: (footer) range:15144756..15758311
// basis: webpack-container confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
}, __webpack_module_cache__ = {}, leafPrototypes, getProto;
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var r = __webpack_module_cache__[e] = { exports: {} };
    return __webpack_modules__[e].call(r.exports, r, r.exports, __webpack_require__), r.exports;
  }
  __webpack_require__.m = __webpack_modules__, __webpack_require__.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return __webpack_require__.d(t, { a: t }), t;
  }, getProto = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__, __webpack_require__.t = function(e, t) {
    if (1 & t && (e = this(e)), 8 & t) return e;
    if ("object" == typeof e && e) {
      if (4 & t && e.__esModule) return e;
      if (16 & t && "function" == typeof e.then) return e;
    }
    var r = /* @__PURE__ */ Object.create(null);
    __webpack_require__.r(r);
    var n = {};
    leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
    for (var s = 2 & t && e; "object" == typeof s && !~leafPrototypes.indexOf(s); s = getProto(s)) Object.getOwnPropertyNames(s).forEach((t2) => n[t2] = () => e[t2]);
    return n.default = () => e, __webpack_require__.d(r, n), r;
  }, __webpack_require__.d = (e, t) => {
    for (var r in t) __webpack_require__.o(t, r) && !__webpack_require__.o(e, r) && Object.defineProperty(e, r, { enumerable: true, get: t[r] });
  }, __webpack_require__.f = {}, __webpack_require__.e = (e) => Promise.all(Object.keys(__webpack_require__.f).reduce((t, r) => (__webpack_require__.f[r](e, t), t), [])), __webpack_require__.u = (e) => e + ".js", __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), __webpack_require__.r = (e) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: true });
  }, __webpack_require__.p = "", (() => {
    __webpack_require__.b = require("url").pathToFileURL(__filename);
    var e = { 792: 1 };
    __webpack_require__.f.require = (t, r) => {
      e[t] || ((t2) => {
        var r2 = t2.modules, n = t2.ids, s = t2.runtime;
        for (var o in r2) __webpack_require__.o(r2, o) && (__webpack_require__.m[o] = r2[o]);
        s && s(__webpack_require__);
        for (var i = 0; i < n.length; i++) e[n[i]] = 1;
      })(require("./" + __webpack_require__.u(t)));
    };
  })();
  var __webpack_exports__ = {};
  (() => {
    "use strict";
    __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { activate: () => sw, deactivate: () => ow });
    var e = {};
    __webpack_require__.r(e), __webpack_require__.d(e, { CAPABILITIES: () => We, HARNESS_INTERFACE_REVISION: () => N.nl, activate: () => tt, createManagedToolClient: () => et, deactivate: () => oe.qTE, generationContext: () => Ye, hostLoggerBackend: () => Ve, hostMetricsBackend: () => Ke });
    var t = {};
    __webpack_require__.r(t), __webpack_require__.d(t, { base64: () => Yi, base64url: () => Zi, bigint: () => ca, boolean: () => da, browserEmail: () => Qi, cidrv4: () => Vi, cidrv6: () => Ki, cuid: () => Ii, cuid2: () => Ci, date: () => na, datetime: () => ia, domain: () => ea, duration: () => Bi, e164: () => ta, email: () => Ni, emoji: () => Gi, extendedDuration: () => Pi, guid: () => Ji, hex: () => ga, hostname: () => Xi, html5Email: () => Fi, idnEmail: () => $i, integer: () => la, ipv4: () => Hi, ipv6: () => zi, ksuid: () => Ti, lowercase: () => ha, mac: () => Wi, md5_base64: () => _a, md5_base64url: () => Aa, md5_hex: () => va, nanoid: () => Ri, null: () => pa, number: () => ua, rfc5322Email: () => Ui, sha1_base64: () => ba, sha1_base64url: () => Ea, sha1_hex: () => Sa, sha256_base64: () => Ca, sha256_base64url: () => ka, sha256_hex: () => Ia, sha384_base64: () => Ta, sha384_base64url: () => Ra, sha384_hex: () => xa, sha512_base64: () => Pa, sha512_base64url: () => Ja, sha512_hex: () => Ba, string: () => aa, time: () => oa, ulid: () => ki, undefined: () => ma, unicodeEmail: () => Li, uppercase: () => fa, uuid: () => Mi, uuid4: () => qi, uuid6: () => Di, uuid7: () => Oi, xid: () => xi });
    var r = {};
    __webpack_require__.r(r), __webpack_require__.d(r, { endsWith: () => Ou, gt: () => vu, gte: () => _u, includes: () => qu, length: () => Bu, lowercase: () => Ju, lt: () => yu, lte: () => wu, maxLength: () => Tu, maxSize: () => Cu, mime: () => Fu, minLength: () => Ru, minSize: () => ku, multipleOf: () => Iu, negative: () => Su, nonnegative: () => Eu, nonpositive: () => bu, normalize: () => Lu, overwrite: () => Uu, positive: () => Au, property: () => Nu, regex: () => Pu, size: () => xu, slugify: () => Gu, startsWith: () => Du, toLowerCase: () => Qu, toUpperCase: () => ju, trim: () => $u, uppercase: () => Mu });
    var n = {};
    __webpack_require__.r(n), __webpack_require__.d(n, { ZodISODate: () => Ud, ZodISODateTime: () => Nd, ZodISODuration: () => jd, ZodISOTime: () => $d, date: () => Ld, datetime: () => Fd, duration: () => Gd, time: () => Qd });
    var s = {};
    __webpack_require__.r(s), __webpack_require__.d(s, { ZodAny: () => km, ZodArray: () => Om, ZodBase64: () => zp, ZodBase64URL: () => Vp, ZodBigInt: () => gm, ZodBigIntFormat: () => wm, ZodBoolean: () => hm, ZodCIDRv4: () => Qp, ZodCIDRv6: () => Gp, ZodCUID: () => kp, ZodCUID2: () => Tp, ZodCatch: () => Ph, ZodCodec: () => Nh, ZodCustom: () => Kh, ZodCustomStringFormat: () => tm, ZodDate: () => qm, ZodDefault: () => Eh, ZodDiscriminatedUnion: () => Wm, ZodE164: () => Yp, ZodEmail: () => dp, ZodEmoji: () => bp, ZodEnum: () => ch, ZodExactOptional: () => vh, ZodFile: () => mh, ZodFunction: () => Wh, ZodGUID: () => mp, ZodIPv4: () => Op, ZodIPv6: () => Lp, ZodIntersection: () => Km, ZodJWT: () => Xp, ZodKSUID: () => qp, ZodLazy: () => jh, ZodLiteral: () => dh, ZodMAC: () => Fp, ZodMap: () => sh, ZodNaN: () => Mh, ZodNanoID: () => Ip, ZodNever: () => Bm, ZodNonOptional: () => xh, ZodNull: () => Im, ZodNullable: () => Ah, ZodNumber: () => im, ZodNumberFormat: () => cm, ZodObject: () => Um, ZodOptional: () => yh, ZodPipe: () => Dh, ZodPrefault: () => Ch, ZodPromise: () => Hh, ZodReadonly: () => Uh, ZodRecord: () => eh, ZodSet: () => ih, ZodString: () => cp, ZodStringFormat: () => up, ZodSuccess: () => Rh, ZodSymbol: () => Am, ZodTemplateLiteral: () => $h, ZodTransform: () => fh, ZodTuple: () => Zm, ZodType: () => ip, ZodULID: () => Bp, ZodURL: () => _p, ZodUUID: () => fp, ZodUndefined: () => bm, ZodUnion: () => jm, ZodUnknown: () => Tm, ZodVoid: () => Jm, ZodXID: () => Jp, ZodXor: () => Hm, _ZodString: () => ap, _default: () => Ih, _function: () => Vh, any: () => xm, array: () => Nm, base64: () => Wp, base64url: () => Kp, bigint: () => ym, boolean: () => fm, catch: () => Jh, check: () => Yh, cidrv4: () => jp, cidrv6: () => Hp, codec: () => Fh, cuid: () => xp, cuid2: () => Rp, custom: () => Zh, date: () => Dm, describe: () => tf, discriminatedUnion: () => Vm, e164: () => Zp, email: () => pp, emoji: () => Ep, enum: () => lh, exactOptional: () => _h, file: () => hh, float32: () => um, float64: () => dm, function: () => Vh, guid: () => hp, hash: () => om, hex: () => sm, hostname: () => nm, httpUrl: () => Sp, instanceof: () => nf, int: () => lm, int32: () => pm, int64: () => vm, intersection: () => Ym, ipv4: () => Np, ipv6: () => $p, json: () => of, jwt: () => em, keyof: () => Fm, ksuid: () => Dp, lazy: () => Gh, literal: () => ph, looseObject: () => Qm, looseRecord: () => nh, mac: () => Up, map: () => oh, meta: () => rf, nan: () => qh, nanoid: () => Cp, nativeEnum: () => uh, never: () => Pm, nonoptional: () => Th, null: () => Cm, nullable: () => Sh, nullish: () => bh, number: () => am, object: () => Lm, optional: () => wh, partialRecord: () => rh, pipe: () => Oh, prefault: () => kh, preprocess: () => af, promise: () => zh, readonly: () => Lh, record: () => th, refine: () => Xh, set: () => ah, strictObject: () => $m, string: () => lp, stringFormat: () => rm, stringbool: () => sf, success: () => Bh, superRefine: () => ef, symbol: () => Sm, templateLiteral: () => Qh, transform: () => gh, tuple: () => Xm, uint32: () => mm, uint64: () => _m, ulid: () => Pp, undefined: () => Em, union: () => Gm, unknown: () => Rm, url: () => Ap, uuid: () => gp, uuidv4: () => yp, uuidv6: () => wp, uuidv7: () => vp, void: () => Mm, xid: () => Mp, xor: () => zm });
    var o = __webpack_require__(76982), i = __webpack_require__(70857), a = __webpack_require__(16928), c = __webpack_require__(91398), l = __webpack_require__(9639), u = __webpack_require__(61771), d = __webpack_require__(33002), p = __webpack_require__(37949), m = __webpack_require__(98875), h = __webpack_require__(76849), f = __webpack_require__(60525), g = __webpack_require__(43081), y = __webpack_require__(36038), w = __webpack_require__(72187), v = __webpack_require__(95212), _ = __webpack_require__(55625), A = __webpack_require__(80732), S = __webpack_require__(24804), b = __webpack_require__(83360), E = __webpack_require__(8844), I = __webpack_require__(28963);
    const C = "managed-local-agent", k = (0, p.h)("@anysphere/agent-host:managed-local-labeling");
    function x(e2) {
      const t2 = e2.providerOptions?.cursor?.requestId;
      return "user" === e2.role && "string" == typeof t2 ? t2 : "";
    }
    function T(e2) {
      return (t2) => {
        const { ctx: r2, requestId: n2, conversationId: s2 } = t2;
        let o2, i2, a2 = false;
        const c2 = (o3) => {
          a2 || (a2 = true, (async (o4, i3) => {
            if ("" === s2) return;
            const a3 = o4.getMessages();
            if (0 === a3.length) return;
            const c3 = await (0, S.nb)(r2, t2.blobStore, t2.conversationState.turns);
            await e2.recordAgentFollowupClassification(new E.yJ({ requestId: n2, replyingToRequestId: c3 ?? "", messages: a3.map((e3) => (0, b.Ac)(e3)), messageRequestIds: a3.map(x), conversationId: s2, agentMode: C, turnAgentMode: (0, I.p)(t2.conversationState), modelName: i3 }));
          })(o3, i2).catch((e3) => {
            k.warn(r2, "Managed local follow-up classification failed", { requestId: n2, error: e3 });
          }));
        }, l2 = (e3) => {
          o2 = e3;
          const t3 = e3.runWithToolCallEventRecorder;
          return { appendMessages(t4) {
            return e3.appendMessages(t4), this;
          }, getState: () => e3.getState(), getMessages: () => e3.getMessages(), clearMessages: () => e3.clearMessages(), executeToolStream: (...t4) => (c2(e3), e3.executeToolStream(...t4)), executeModelStreamOnly: (...t4) => (c2(e3), e3.executeModelStreamOnly(...t4)), stream: (...t4) => (c2(e3), e3.stream(...t4)), ...void 0 === t3 ? {} : { runWithToolCallEventRecorder: t3.bind(e3) } };
        };
        return { wrapPromptToolSession: (e3, t3) => (i2 = t3.resolvedModelId, { getExecutor: (t4) => l2(e3.getExecutor(t4)) }), onRunFinished: (a3, c3) => {
          "success" === a3 && void 0 !== o2 && "" !== s2 && (async (t3, r3) => {
            const o3 = t3.getMessages();
            0 !== o3.length && await e2.recordAgentPostTurnLabeling(new E.kG({ requestId: n2, messages: o3.map((e3) => (0, b.Ac)(e3)), conversationId: s2, agentMode: C, turnAgentMode: (0, I.p)(r3), modelName: i2 }));
          })(o2, c3 ?? t2.conversationState).catch((e3) => {
            k.warn(r2, "Managed local post-turn labeling failed", { requestId: n2, error: e3 });
          });
        } };
      };
    }
    var R = __webpack_require__(27322), B = __webpack_require__(68100);
    var P = __webpack_require__(31774), J = __webpack_require__(33624), M = __webpack_require__(80901);
    function q(e2) {
      return new v.o({ createAgentConfig: (t3) => {
        const r2 = (0, A.A)(t3, e2.agentToolsClient);
        return { ...r2, config: { ...r2.config, bindConversationMessageInputs: true } };
      }, createPromptSession: (0, _.bJ)(e2.inferenceClient, e2.agentModule), getPrivacyMode: () => (0, M.a)(e2.getPrivacyModeEnum()), agentEvents: { source: "attempt" }, retryLogging: e2.retryLogging ?? { tag: J.q.logTag }, reconnectEndpoint: J.q.reconnectEndpoint, prepareAttemptContext: (0, P.g)(e2.attachAttemptContext, e2.metricTags), createTurnLabeling: T(e2.inferenceClient), ...void 0 === e2.conversationBlobClient ? {} : { conversationBlobUploader: (t2 = e2.conversationBlobClient, { upload: async (e3, r2) => {
        await t2.uploadConversationBlobs(new B.yD({ conversationId: r2.conversationId, blobs: r2.blobs.map((e4) => new B.QI({ id: (0, R.Fo)(e4.id), value: (0, R.Fo)(e4.value) })), chunkIndex: r2.sequenceNumber }), { headers: { "x-request-id": r2.attemptRequestId } });
      } }) } });
      var t2;
    }
    var D = __webpack_require__(98691), O = __webpack_require__(94698), N = __webpack_require__(56215), F = __webpack_require__(26814);
    const U = { installed: E.FN.INSTALLED, floor: E.FN.FLOOR, static: E.FN.STATIC }, L = ["dogfood", "candidate", "stable", "local", "unknown"];
    function $(e2) {
      return void 0 === e2 ? "unknown" : L.includes(e2) ? e2 : "other";
    }
    function Q(e2, t2) {
      return new E.ST({ generation: e2.generation, source: U[e2.source], channel: $(t2), ...void 0 !== e2.commit && /^[0-9a-f]{40}$/.test(e2.commit) ? { commit: e2.commit } : {}, interfaceRevision: N.nl, promptVersions: [...F.FG] });
    }
    const j = { generation: "static", commit: void 0, source: "static" };
    var G = __webpack_require__(4113), H = __webpack_require__(46144), z = __webpack_require__(17714), W = __webpack_require__(77213), V = __webpack_require__(4410), K = __webpack_require__(5289), Y = __webpack_require__(76263), Z = __webpack_require__(34038), X = __webpack_require__(40328), ee = __webpack_require__(81992), te = __webpack_require__(2172);
    const re = { service: "aiserver.v1.InferenceService", method: "RunInference" };
    function ne(e2, t2, r2) {
      const n2 = (e3) => {
        const t3 = (function(e4, t4) {
          if (e4 instanceof t4 || !(e4 instanceof Error) || "ConnectError" !== e4.name) return;
          const r3 = "code" in e4 ? e4.code : void 0;
          if ("number" != typeof r3) return;
          const n4 = "rawMessage" in e4 ? e4.rawMessage : void 0, s3 = "metadata" in e4 ? e4.metadata : void 0, o2 = "details" in e4 ? e4.details : void 0;
          return { message: e4.message, rawMessage: "string" == typeof n4 ? n4 : void 0, code: r3, metadata: s3 instanceof Headers ? s3 : void 0, details: Array.isArray(o2) ? o2.filter(se) : [], cause: e4.cause };
        })(e3, r2);
        if (void 0 === t3) return e3;
        const n3 = new r2(t3.rawMessage ?? t3.message, t3.code, t3.metadata, void 0, t3.cause ?? e3);
        return n3.details = t3.details, n3;
      }, s2 = { async unary(...t3) {
        try {
          return await e2.unary(...t3);
        } catch (e3) {
          throw n2(e3);
        }
      }, async stream(...r3) {
        const [s3, o2] = r3;
        s3.typeName === re.service && o2.name === re.method && (r3[5] = /* @__PURE__ */ (function(e3, t3) {
          return { async *[Symbol.asyncIterator]() {
            for await (const r4 of e3) r4 instanceof E.jR && "invokeModel" === r4.message.case && t3(`RunInference invocation=${r4.message.value.invocationId}`), yield r4;
          } };
        })(r3[5], t2));
        try {
          const t3 = await e2.stream(...r3);
          return { ...t3, message: (i2 = t3.message, { async *[Symbol.asyncIterator]() {
            try {
              yield* i2;
            } catch (e3) {
              throw n2(e3);
            }
          } }) };
        } catch (e3) {
          throw n2(e3);
        }
        var i2;
      } };
      return s2;
    }
    function se(e2) {
      return "object" == typeof e2 && null !== e2 && "type" in e2 && "string" == typeof e2.type && "value" in e2 && e2.value instanceof Uint8Array;
    }
    var oe = __webpack_require__(6688), ie = __webpack_require__(17392), ae = __webpack_require__(3411), ce = __webpack_require__(90991), le = __webpack_require__(15718), ue = __webpack_require__(55094), de = __webpack_require__(91434);
    const pe = (0, p.h)("SimpleExecManager");
    Error;
    class me {
      constructor(e2, t2, r2, n2 = 0, s2 = /* @__PURE__ */ new Map()) {
        this.ctx = e2, this.client = t2, this.server = r2, this.nextId = n2, this.streamMap = s2, this.heartbeatTimers = /* @__PURE__ */ new Map(), this.run(), this.ctx.signal.addEventListener("abort", () => {
          const e3 = Array.from(this.streamMap.keys());
          for (const t3 of e3) this.clearHeartbeatTimer(t3), this.writeAbort(t3);
        }, { once: true });
      }
      async writeAbort(e2) {
        try {
          await this.client.write((0, ce.eJ8)(new ue.Nv({ message: { case: "abort", value: new ue.dX({ id: e2 }) } }), K.PrivacyMode.UNSPECIFIED));
        } catch (t2) {
          pe.debug(this.ctx, "exec abort not delivered; client stream closed", { id: e2, error: t2 });
        }
      }
      startHeartbeatTimer(e2) {
        this.clearHeartbeatTimer(e2), this.heartbeatTimers.set(e2, setTimeout(() => {
          this.heartbeatTimers.delete(e2);
          this.streamMap.get(e2);
        }, 1e4));
      }
      clearHeartbeatTimer(e2) {
        const t2 = this.heartbeatTimers.get(e2);
        t2 && (clearTimeout(t2), this.heartbeatTimers.delete(e2));
      }
      async run() {
        for await (const e2 of this.server) if ((0, ce.EYX)(e2)) {
          this.startHeartbeatTimer(e2.id);
          const t2 = this.streamMap.get(e2.id);
          if (t2) try {
            await t2.write(e2);
          } catch (e3) {
            if (!(e3 instanceof de.W2)) throw e3;
          }
          else pe.error(this.ctx, "no resolver found for message", { message: (0, ce.qhh)(e2, le.P$.STORAGE_FOR_LOGGING, { enforcing: true, redactUnallowedFieldsInsteadOfThrowing: true }) });
        } else if ("heartbeat" === e2.message.case) this.startHeartbeatTimer(e2.message.value.id);
        else if ("streamClose" === e2.message.case) {
          this.clearHeartbeatTimer(e2.message.value.id);
          const t2 = e2.message.value.id, r2 = this.streamMap.get(t2);
          r2 && (r2.close(), this.streamMap.delete(t2));
        } else if ("throw" === e2.message.case) {
          this.clearHeartbeatTimer(e2.message.value.id);
          const t2 = e2.message.value.id, r2 = this.streamMap.get(t2);
          if (r2) {
            const n2 = new Error(e2.message.value.error.unwrap(le.P$.UNSAFE_ALWAYS_ALLOWED));
            e2.message.value.stackTrace && (n2.stack = e2.message.value.stackTrace.unwrap(le.P$.UNSAFE_ALWAYS_ALLOWED)), "EXEC_BACKEND_UNAVAILABLE" === e2.message.value.errorCode ? n2.name = "ExecBackendUnavailableError" : "AGENT_EXEC_STREAM_START_TIMEOUT" === e2.message.value.errorCode && (n2.name = "AgentExecStreamStartTimeoutError"), r2.throw(n2), this.streamMap.delete(t2);
          }
        }
      }
      async *createExecInstance(e2, t2) {
        const r2 = this.nextId++, n2 = t2(r2), s2 = (0, de.Jt)();
        this.streamMap.set(r2, s2), e2.signal && (e2.signal.aborted ? (s2.close(), this.streamMap.delete(r2)) : e2.signal.addEventListener("abort", () => {
          this.clearHeartbeatTimer(r2), this.writeAbort(r2);
        }, { once: true })), await this.client.write(n2), this.startHeartbeatTimer(r2);
        try {
          for await (const e3 of s2) yield e3;
        } finally {
          this.clearHeartbeatTimer(r2), this.streamMap.delete(r2);
        }
      }
    }
    class he {
      constructor(e2, t2 = K.PrivacyMode.UNSPECIFIED) {
        this.redacted = e2, this.privacyMode = t2;
      }
      async *createExecInstance(e2, t2) {
        const r2 = (e3) => (0, ce.nJ0)(t2(e3), this.privacyMode);
        for await (const t3 of this.redacted.createExecInstance(e2, r2)) yield (0, ce.qhh)(t3, le.P$.UNSAFE_ALWAYS_ALLOWED);
      }
    }
    var fe = __webpack_require__(54386), ge = __webpack_require__(47030);
    class ye {
      constructor() {
        this.sealedEligibleRemoteGetCount = 0, this.sealedBatchWidthMax = 0, this.sealedProjectedPostCount = 0, this.openBatchWidth = 0, this.sealScheduled = false;
      }
      observe() {
        this.openBatchWidth++, this.sealScheduled || (this.sealScheduled = true, queueMicrotask(() => {
          this.sealOpenBatch();
        }));
      }
      getSnapshot() {
        const e2 = this.sealedEligibleRemoteGetCount + this.openBatchWidth, t2 = this.sealedProjectedPostCount + (this.openBatchWidth > 0 ? Math.ceil(this.openBatchWidth / 32) : 0);
        return { eligibleRemoteGetCount: e2, batchWidthMax: Math.max(this.sealedBatchWidthMax, this.openBatchWidth), projectedPostCount: t2 };
      }
      sealOpenBatch() {
        const e2 = this.openBatchWidth;
        this.openBatchWidth = 0, this.sealScheduled = false, 0 !== e2 && (this.sealedEligibleRemoteGetCount += e2, this.sealedBatchWidthMax = Math.max(this.sealedBatchWidthMax, e2), this.sealedProjectedPostCount += Math.ceil(e2 / 32));
      }
    }
    var we = function(e2, t2, r2) {
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
    }, ve = /* @__PURE__ */ (function(e2) {
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
    const _e = (0, p.h)("RemoteKvManager"), Ae = (0, H.v5)("agent_kv.remote.get_blob.duration_ms", { description: "Duration of getBlob operations in milliseconds" }), Se = (0, H.v5)("agent_kv.remote.set_blob.duration_ms", { description: "Duration of setBlob operations in milliseconds" });
    class be {
      constructor(e2, t2, r2, n2 = {}) {
        this.serverStream = t2, this.clientStream = r2, this.pendingRequests = /* @__PURE__ */ new Map(), this.nextId = 0, this.getBlobShadowCoalescer = true === n2.observeGetBlobShadowBatches ? new ye() : void 0, this.startListening(e2);
      }
      getBlobShadowSnapshot() {
        return this.getBlobShadowCoalescer?.getSnapshot();
      }
      rejectPendingRequests(e2) {
        for (const [t2, { reject: r2 }] of this.pendingRequests) r2(e2);
        this.pendingRequests.clear();
      }
      async startListening(e2) {
        try {
          for await (const t2 of this.clientStream) this.handleClientMessage(e2, t2);
          this.rejectPendingRequests(new Error("KV stream closed"));
        } catch (t2) {
          _e.error(e2, "Error in KV manager listener:", t2), this.rejectPendingRequests(new Error("KV stream closed"));
        }
      }
      handleClientMessage(e2, t2) {
        const r2 = t2.id, n2 = this.pendingRequests.get(r2);
        n2 ? (this.pendingRequests.delete(r2), n2.resolve(t2)) : _e.warn(e2, "Received KV response for unknown request ID", { id: r2 });
      }
      async getBlob(e2, t2) {
        const r2 = { stack: [], error: void 0, hasError: false };
        try {
          const n2 = we(r2, (0, m.VI)(e2.withName("RemoteKvManager.getBlob")), false), s2 = performance.now();
          try {
            const e3 = this.nextId++;
            let r3, s3;
            const o2 = new Promise((e4, t3) => {
              r3 = e4, s3 = t3;
            });
            this.pendingRequests.set(e3, { resolve: r3, reject: s3 }), this.getBlobShadowCoalescer?.observe();
            const i2 = (0, m.mJ)(n2.ctx);
            await this.serverStream.write((0, ce.xch)(new fe.km({ id: e3, message: { case: "getBlobArgs", value: { blobId: (0, ge.Fo)(t2) } }, spanContext: i2 ? new ue.Kg(i2) : void 0 }), K.PrivacyMode.UNSPECIFIED));
            const a2 = await o2;
            if ("getBlobResult" !== a2.message.case) throw new Error(`Unexpected response type: ${a2.message.case}`);
            if (a2.message.value.error) throw new Error(a2.message.value.error.message.unwrap(le.P$.UNSAFE_ALWAYS_ALLOWED));
            return n2.span.setAttribute("blobLength", a2.message.value.blobData?.length ?? 0), a2.message.value.blobData?.unwrap(le.P$.UNSAFE_ALWAYS_ALLOWED);
          } finally {
            const t3 = performance.now() - s2;
            Ae.histogram(e2, t3);
          }
        } catch (e3) {
          r2.error = e3, r2.hasError = true;
        } finally {
          ve(r2);
        }
      }
      async setBlob(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const s2 = we(n2, (0, m.VI)(e2.withName("RemoteKvManager.setBlob")), false);
          s2.span.setAttribute("blobLength", r2.length);
          const o2 = performance.now();
          try {
            const e3 = this.nextId++;
            let n3, o3;
            const i2 = new Promise((e4, t3) => {
              n3 = e4, o3 = t3;
            });
            this.pendingRequests.set(e3, { resolve: n3, reject: o3 });
            const a2 = (0, m.mJ)(s2.ctx);
            await this.serverStream.write((0, ce.xch)(new fe.km({ id: e3, message: { case: "setBlobArgs", value: { blobId: (0, ge.Fo)(t2), blobData: (0, ge.Fo)(r2) } }, spanContext: a2 ? new ue.Kg(a2) : void 0 }), K.PrivacyMode.UNSPECIFIED));
            const c2 = await i2;
            if ("setBlobResult" !== c2.message.case) throw new Error(`Unexpected response type: ${c2.message.case}`);
            if (c2.message.value.error) throw new Error(c2.message.value.error.message.unwrap(le.P$.UNSAFE_ALWAYS_ALLOWED));
          } finally {
            const t3 = performance.now() - o2;
            Se.histogram(e2, t3);
          }
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          ve(n2);
        }
      }
      async setBlobLocallyOnly(e2, t2, r2) {
        return Promise.resolve();
      }
      flush(e2) {
        return Promise.resolve();
      }
    }
    var Ee = __webpack_require__(60431), Ie = __webpack_require__(69584), Ce = __webpack_require__(67918), ke = __webpack_require__(69745), xe = __webpack_require__(8032), Te = __webpack_require__(49273), Re = __webpack_require__(70656), Be = __webpack_require__(36781), Pe = __webpack_require__(48826);
    var Je = __webpack_require__(38812);
    class Me {
      constructor(e2, t2) {
        this.out = e2, this.log = t2, this.pending = /* @__PURE__ */ new Map(), this.postTurnEndedWork = [], this.closed = false;
      }
      handleResponse(e2) {
        const t2 = this.pending.get(e2.id);
        void 0 !== t2 ? (this.pending.delete(e2.id), t2.resolve(e2)) : this.log(`interaction response for unknown query id ${e2.id} dropped`);
      }
      close() {
        if (!this.closed) {
          this.closed = true;
          for (const [e2, t2] of this.pending) t2.held && (this.pending.delete(e2), t2.reject(qe()));
        }
      }
      async sendUpdate(e2, t2) {
        try {
          await this.out.write(t2);
        } catch (e3) {
          throw new Je.Lm(e3 instanceof Error ? e3.message : "response stream write failed", { cause: e3 });
        }
      }
      async query(e2, t2) {
        if (this.closed) throw new Je.Lm("agent harness: client stream already closed");
        const { promise: r2, resolve: n2, reject: s2 } = Promise.withResolvers(), o2 = { resolve: n2, reject: s2, held: false };
        this.pending.set(t2.id, o2);
        try {
          await this.out.write(t2);
        } catch (e3) {
          throw this.pending.delete(t2.id), new Je.Lm(e3 instanceof Error ? e3.message : "response stream write failed", { cause: e3 });
        }
        if (this.closed && this.pending.delete(t2.id)) throw qe();
        return o2.held = true, r2;
      }
      enqueuePostTurnEndedWork(e2) {
        this.postTurnEndedWork.push(e2);
      }
      async flushPostTurnEndedWork(e2) {
        const t2 = this.postTurnEndedWork;
        this.postTurnEndedWork = [], await Promise.all(t2.map(async (e3) => {
          try {
            await e3();
          } catch (e4) {
            this.log(`post-turn-ended work failed: ${e4 instanceof Error ? e4.message : String(e4)}`);
          }
        }));
      }
    }
    function qe() {
      return new Je.Lm("agent harness: client stream closed before the query was answered");
    }
    const De = 5e3, Oe = 5e3, Ne = 50;
    function Fe() {
      return new B.Oy({ message: { case: "interactionUpdate", value: { message: { case: "heartbeat", value: new Ie.ih1() } } } });
    }
    function Ue(e2, t2) {
      const r2 = e2.get(t2);
      return null === r2 || "" === r2 ? void 0 : r2;
    }
    function Le(e2) {
      return (e2.mcpTools?.mcpTools ?? []).map((e3) => {
        const t2 = (0, l.mku)(e3.outputSchemaJson), r2 = (function(e4) {
          return void 0 === e4 || "" === e4 ? void 0 : (0, Be.d)(e4);
        })(e3.annotationsJson);
        return { clientKey: e3.providerIdentifier, name: e3.name, providerIdentifier: e3.providerIdentifier, toolName: e3.toolName, description: e3.description, inputSchema: (0, l.Hvh)(e3) ?? {}, ...void 0 === t2 ? {} : { outputSchema: t2 }, ...void 0 === r2 ? {} : { annotations: r2 } };
      });
    }
    function $e(e2) {
      if (e2 instanceof X.T) return e2;
      const t2 = e2 instanceof Error ? e2.message : String(e2);
      if (e2 instanceof ie.cc) {
        const r2 = e2.displayInfo?.errorDetails, n2 = e2.displayInfo?.connectCode ?? xe.C.Canceled;
        return new X.T((0, Re._)(t2, n2), n2, void 0, void 0 === r2 ? void 0 : [(0, ie.yp)(r2, (0, v.C)(e2))]);
      }
      if (e2 instanceof ie.Yv) {
        const r2 = e2, n2 = r2.displayInfo, s2 = Qe(r2), o2 = n2?.connectCode ?? (s2 ? xe.C.Unavailable : xe.C.FailedPrecondition), i2 = Boolean(n2?.title) || Boolean(n2?.detail), a2 = n2?.errorDetails ?? (i2 ? new Ce.ErrorDetails({ error: n2?.errorCode ?? Ce.ErrorDetails_Error.CUSTOM_MESSAGE, details: new Ce.CustomErrorDetails({ title: n2?.title, detail: n2?.detail, isRetryable: s2 }) }) : new Ce.ErrorDetails({ error: s2 ? Ce.ErrorDetails_Error.UNSPECIFIED : Ce.ErrorDetails_Error.CUSTOM_MESSAGE }));
        return new X.T((0, Re._)(t2, o2), o2, void 0, [(0, ie.yp)(a2, (0, v.C)(r2))], r2);
      }
      return e2 instanceof Error && "AbortError" === e2.name ? new X.T(t2, xe.C.Canceled, void 0, void 0, e2) : new X.T(t2, xe.C.Internal, void 0, void 0, e2);
    }
    function Qe(e2) {
      return e2.displayInfo?.isRetryable ?? "RetriableError" === e2.kind;
    }
    function je(e2) {
      const t2 = $e(e2);
      return e2 instanceof X.T || !(function(e3) {
        const t3 = [];
        for (let r3 = e3; r3 instanceof Error && !t3.includes(r3); r3 = r3.cause) t3.push(r3);
        const r2 = t3.some((e4) => e4 instanceof ie.cc || e4 instanceof X.T || "AbortError" === e4.name || e4 instanceof ie.Yv && ("RetriableError" !== e4.kind || void 0 !== e4.displayInfo || (0, ie.yM)(e4))), n2 = t3.find((e4) => !(e4 instanceof ie.Yv));
        return !r2 && void 0 !== n2 && "loop" === (0, oe.sYl)(n2);
      })(e2) || t2.metadata.set(N.mj, N.xP), t2;
    }
    async function* Ge(e2, t2, r2) {
      const n2 = t2[Symbol.asyncIterator](), s2 = await n2.next();
      if (s2.done || "runRequest" !== s2.value.message.case) throw new X.T("agent harness: the first message must be a runRequest", xe.C.InvalidArgument);
      const o2 = s2.value.message.value;
      if (void 0 === o2.conversationState) throw new X.T("agent harness: runRequest carries no conversation state", xe.C.InvalidArgument);
      if (void 0 === o2.action) throw new X.T("agent harness: runRequest carries no action", xe.C.InvalidArgument);
      const i2 = o2.conversationState, a2 = (0, Pe.ZQ)(o2, r2.requestHeader), c2 = o2.action, u2 = e2.getPrivacyMode(), d2 = e2.log, p2 = (function(e3, t3, r3) {
        return { conversationId: e3.conversationId ?? Ue(t3, "x-conversation-id") ?? "", ...void 0 === e3.conversationGroupId ? {} : { conversationGroupId: e3.conversationGroupId }, ...void 0 === e3.agentSessionId ? {} : { agentSessionId: e3.agentSessionId }, ...void 0 === e3.nextInteractionQueryId ? {} : { nextInteractionQueryId: e3.nextInteractionQueryId }, generationUUID: e3.runId ?? Ue(t3, "x-original-request-id") ?? Ue(t3, "x-request-id"), ...void 0 === Ue(t3, "x-request-id") ? {} : { firstAttemptRequestId: Ue(t3, "x-request-id") }, ...void 0 === Ue(t3, "x-parent-request-id") ? {} : { parentRequestId: Ue(t3, "x-parent-request-id") }, ...void 0 === Ue(t3, "x-root-parent-request-id") ? {} : { rootParentRequestId: Ue(t3, "x-root-parent-request-id") }, ...void 0 === Ue(t3, "x-parent-agent-tool-call-id") ? {} : { parentAgentToolCallId: Ue(t3, "x-parent-agent-tool-call-id") }, ..."true" === Ue(t3, "x-direct-meta-parent-child-subagent") ? { directMetaParentChildSubagent: true } : {}, ...void 0 === e3.suppressSubagentProgressUpdateTool ? {} : { suppressSubagentProgressUpdateTool: e3.suppressSubagentProgressUpdateTool }, ...void 0 === e3.mcpFileSystemOptions ? {} : { mcpFileSystemOptions: e3.mcpFileSystemOptions }, ...void 0 === e3.customSystemPrompt ? {} : { customSystemPrompt: e3.customSystemPrompt }, ...void 0 === e3.harness ? {} : { harness: e3.harness }, ..."pixels" === e3.computerUseCoordinateMode || "percent" === e3.computerUseCoordinateMode ? { computerUseCoordinateMode: e3.computerUseCoordinateMode } : {}, ...void 0 === e3.excludeWorkspaceContext ? {} : { excludeWorkspaceContext: e3.excludeWorkspaceContext }, ...void 0 === e3.requestedModel ? {} : { requestedModel: e3.requestedModel }, ...void 0 === e3.devRawModelSlug ? {} : { devRawModelSlug: e3.devRawModelSlug }, ...0 === e3.selectedSubagentModels.length ? {} : { selectedSubagentModels: e3.selectedSubagentModels }, ...0 === e3.subagentModelOverrides.length ? {} : { subagentModelOverrides: e3.subagentModelOverrides }, ...0 === e3.selectedSubagentModelDetails.length ? {} : { selectedSubagentModelsLegacy: e3.selectedSubagentModelDetails }, ...void 0 === e3.suggestNextPrompt ? {} : { suggestNextPrompt: e3.suggestNextPrompt }, ...void 0 === e3.subagentTypeName ? {} : { subagentTypeName: e3.subagentTypeName }, ...void 0 === e3.clientSupportsInlineImages ? {} : { clientSupportsInlineImages: e3.clientSupportsInlineImages }, ...void 0 === e3.clientSupportsPreviewCard ? {} : { clientSupportsPreviewCard: e3.clientSupportsPreviewCard }, ...void 0 === e3.startedAsNewProject ? {} : { startedAsNewProject: e3.startedAsNewProject }, ...void 0 === e3.firstProjectOnboarding ? {} : { firstProjectOnboarding: e3.firstProjectOnboarding }, ...void 0 === e3.clientSupportsSendToUser ? {} : { clientSupportsSendToUser: e3.clientSupportsSendToUser }, ...void 0 === e3.clientSupportsRoutedModelUpdate ? {} : { clientSupportsRoutedModelUpdate: e3.clientSupportsRoutedModelUpdate }, ...void 0 === e3.canCreateCloudSubagents ? {} : { canCreateCloudSubagents: e3.canCreateCloudSubagents }, ...r3, enableAgentRetries: false };
      })(o2, r2.requestHeader, a2);
      let m2;
      const h2 = { ...p2, onTtftBreakdown: (e3, t3) => {
        m2 ??= e3, p2.onTtftBreakdown?.(e3, t3);
      } }, f2 = h2.generationUUID ?? "?", g2 = (function() {
        const e3 = (0, de.Jt)(), t3 = /* @__PURE__ */ new Set();
        let r3 = false;
        return { write: (n3) => {
          if (r3) return Promise.resolve();
          const s3 = e3.write(n3).catch((e4) => {
            if (!r3) throw e4;
          });
          t3.add(s3);
          const o3 = () => {
            t3.delete(s3);
          };
          return s3.then(o3, o3), s3;
        }, closeWhenRead: () => {
          r3 = true, Promise.allSettled(t3).then(() => e3.close());
        }, close: () => {
          r3 = true, e3.close();
        }, [Symbol.asyncIterator]: () => e3[Symbol.asyncIterator]() };
      })(), y2 = (0, de.Jt)(), w2 = (0, de.Jt)(), [v2, _2] = (0, Ee.iU)(e2.context, r2.requestHeader).withCancel(), A2 = new Me(new de.F8(g2, (e3) => {
        const t3 = e3 instanceof Ie.Pd7 || void 0 === m2 ? void 0 : (r3 = m2, new B.gq({ serverFirstTokenMs: r3.serverFirstTokenMs, preStreamSetupMs: r3.preStreamSetupMs, waitForFirstEventMs: r3.waitForFirstEventMs, ...void 0 === r3.providerTtftMs ? {} : { providerTtftMs: r3.providerTtftMs }, slowPoolWaitMs: r3.slowPoolWaitMs, ...void 0 === r3.clientPrepMs ? {} : { clientPrepMs: r3.clientPrepMs }, clientClock: "client" === r3.clock }));
        var r3;
        return void 0 !== t3 && (m2 = void 0), new B.Oy({ message: e3 instanceof Ie.Pd7 ? { case: "interactionQuery", value: e3 } : { case: "interactionUpdate", value: e3 }, ...void 0 === t3 ? {} : { ttftBreakdown: t3 } });
      }), d2), S2 = new me(v2, new de.F8(g2, (e3) => new B.Oy({ message: (0, ke.C3)(e3) ? { case: "execServerMessage", value: (0, ce.AA_)(e3, le.P$.UNSAFE_ALWAYS_ALLOWED) } : { case: "execServerControlMessage", value: (0, ce.DwO)(e3, le.P$.UNSAFE_ALWAYS_ALLOWED) } })), y2), b2 = (E2 = new l.orm(new he(S2, u2)), { get: (e3) => E2.get(e3), entries: () => [] });
      var E2;
      const I2 = new be(v2, new de.F8(g2, (e3) => new B.Oy({ message: { case: "kvServerMessage", value: (0, ce.Wbm)(e3, le.P$.UNSAFE_ALWAYS_ALLOWED) } })), w2), C2 = new ae.h();
      let k2, x2;
      const T2 = { handleCheckpoint: async (e3, t3) => {
        void 0 === x2 && (k2 = t3, await g2.write(new B.Oy({ message: { case: "conversationCheckpointUpdate", value: t3 } })));
      }, getLatestCheckpoint: () => k2 }, R2 = Promise.withResolvers();
      let P2 = false;
      const J2 = e2.cancelDrainMs ?? Oe, M2 = e2.clock ?? Te.l;
      let q2;
      const D2 = () => {
        x2?.resolve(), C2.abort("agent harness: host aborted the call"), _2(), g2.close(), P2 || (q2 = M2.schedule(J2, () => {
          P2 || (d2(`run ${f2}: host cancelled the call and the loop is still running after ${J2}ms; dropping the invocation (the loop's own state stays resident until it settles)`), A2.close(), R2.resolve({ ok: false, error: new X.T(`agent harness: host cancelled the call; the loop did not stop within ${J2}ms and the invocation was dropped`, xe.C.Canceled) }));
        }));
      };
      r2.signal.aborted ? D2() : r2.signal.addEventListener("abort", D2, { once: true });
      (async () => {
        try {
          for (; ; ) {
            const e3 = await n2.next();
            if (e3.done) break;
            const t3 = e3.value.message;
            switch (t3.case) {
              case "execClientMessage":
                await y2.write((0, ce.f1_)(t3.value, u2));
                break;
              case "execClientControlMessage":
                await y2.write((0, ce.KHu)(t3.value, u2));
                break;
              case "kvClientMessage":
                await w2.write((0, ce.NuS)(t3.value, u2));
                break;
              case "interactionResponse":
                A2.handleResponse(t3.value);
                break;
              case "conversationAction":
                await C2.submitConversationAction(t3.value);
                break;
              case "runRequest":
                d2("second runRequest on one stream ignored");
            }
          }
        } catch (e3) {
          e3 instanceof de.W2 || d2(`request stream failed: ${He(e3)}`);
        } finally {
          y2.close(), w2.close(), A2.close();
        }
      })();
      const O2 = (0, Te.H)(M2, De, () => g2.write(Fe())), N2 = e2.agentClient.run(v2, i2, c2, o2.modelDetails, A2, b2, I2, C2, T2, Le(o2), h2).then(async () => {
        await A2.flushPostTurnEndedWork(v2);
      }).then(() => ({ ok: true }), async (e3) => {
        if (e3 instanceof ie.Yv && Qe(e3) && !r2.signal.aborted) {
          const e4 = Promise.withResolvers();
          x2 = e4;
          const t3 = M2.schedule(Ne, e4.resolve);
          await e4.promise, t3.dispose();
        }
        return { ok: false, error: e3 };
      }).finally(() => {
        P2 = true, q2?.dispose(), O2.dispose(), g2.closeWhenRead();
      });
      try {
        yield Fe();
        for await (const e4 of g2) yield e4;
        const e3 = await Promise.race([R2.promise, N2]);
        if (!e3.ok) throw e3.error;
      } catch (e3) {
        throw r2.signal.aborted ? $e(e3) : je(e3);
      } finally {
        g2.close(), O2.dispose(), q2?.dispose(), r2.signal.removeEventListener("abort", D2), _2(), C2.dispose(), n2.return?.().catch((e3) => {
          d2(`request stream release failed: ${He(e3)}`);
        }), y2.close(), w2.close();
      }
    }
    function He(e2) {
      return e2 instanceof Error ? e2.message : String(e2);
    }
    const ze = 4294967295, We = [N.eN.managedLocalRun, N.eN.seamRunOptions];
    function Ve(e2) {
      return { log: (t2, r2) => {
        const n2 = (function(e3) {
          if (void 0 === e3 || 0 === Object.keys(e3).length) return;
          try {
            return JSON.stringify(e3, (e4, t3) => "bigint" == typeof t3 ? t3.toString() : t3);
          } catch (e4) {
            return `<unrenderable metadata: ${Xe(e4)}>`;
          }
        })(r2.metadata);
        e2({ level: r2.level, message: r2.message, ...void 0 === r2.logger ? {} : { logger: r2.logger }, ...void 0 === n2 ? {} : { metadata: n2 }, ...Ze(r2.error) });
      } };
    }
    function Ke(e2) {
      const t2 = (e3, t3, r2) => ({ stat: e3.name, value: t3, ...void 0 === r2 ? {} : { tags: r2 } });
      return { increment: (r2, n2, s2, o2) => e2.increment(t2(n2, s2 ?? 1, o2)), histogram: (r2, n2, s2, o2) => e2.distribution(t2(n2, s2, o2)), gauge: (r2, n2, s2, o2) => e2.gauge(t2(n2, s2, o2)), record: (r2, n2, s2, o2) => e2.gauge(t2(n2, s2, o2)) };
    }
    function Ye(e2, t2) {
      const { metrics: r2, spanAttributes: n2 } = t2;
      let s2 = (0, d.q6)().with(p._O, e2);
      return void 0 !== r2 && (s2 = s2.with(H.Fm, Ke(r2))), void 0 !== n2 && (s2 = s2.with(m.b6, { ...n2 })), s2;
    }
    function Ze(e2) {
      return void 0 === e2 ? {} : e2 instanceof Error ? { error: Xe(e2), errorName: e2.name, errorMessage: e2.message } : { error: Xe(e2) };
    }
    function Xe(e2) {
      return e2 instanceof Error ? e2.stack ?? e2.message : String(e2);
    }
    function et(e2) {
      const t2 = (0, Z.UU)(W.AiService, e2);
      return { runWebSearch: t2.runWebSearch, runWebFetch: t2.runWebFetch, runGenerateImage: t2.runGenerateImage, runGenerateVideo: t2.runGenerateVideo, runXSearch: t2.runXSearch, codebaseSearch: (0, Z.UU)(Y.RepositoryService, e2), smartModeClassifier: t2 };
    }
    function tt(e2) {
      const { module: t2, telemetry: r2 } = e2, n2 = (e3) => r2.log({ level: "info", message: `gen ${t2.generation.slice(0, 12)} (${t2.label}): ${e3}` }), s2 = Ve(r2.log);
      "static" !== t2.source && (0, p.i4)(s2);
      const o2 = ne(e2.backendTransport, n2, X.T);
      var i2;
      const a2 = { agentClient: q({ inferenceClient: (0, Z.UU)(V.InferenceService, o2), agentToolsClient: et(o2), conversationBlobClient: (0, Z.UU)(z.AgentService, o2), getPrivacyModeEnum: () => e2.privacyMode, retryLogging: "delegated", metricTags: {}, agentModule: Q(t2, (i2 = { spanAttributes: r2.tags }, i2.spanAttributes?.module_channel)) }), getPrivacyMode: () => (0, M.a)(e2.privacyMode) ?? K.PrivacyMode.NO_STORAGE, log: n2, context: Ye(s2, { metrics: r2, spanAttributes: r2.tags }) }, c2 = (0, ee.k)({ connect: true, grpc: false, grpcWeb: false, readMaxBytes: ze, writeMaxBytes: ze });
      c2.service(z.AgentService, { run: (e3, t3) => Ge(a2, e3, t3) });
      const l2 = (0, te.N)(c2.handlers);
      let u2 = false;
      return n2(`transport created (${We.join(", ")})`), { transport: { call: (e3) => u2 ? Promise.reject(new Error("agent harness: transport is disposed")) : l2(e3), dispose() {
        u2 = true;
      } } };
    }
    var rt = __webpack_require__(1368), nt = __webpack_require__(78877), st = __webpack_require__(43195), ot = __webpack_require__(3702);
    const it = 3e5, at = { min: 6e4, max: 864e5 }, ct = 3e4;
    const lt = { unary: () => Promise.reject(new Error("validate-only agent harness: no turn runs here")), stream: () => Promise.reject(new Error("validate-only agent harness: no turn runs here")) };
    function ut(e2) {
      const { loader: t2, log: r2 } = e2, n2 = e2.clock ?? Te.l, s2 = () => performance.now(), o2 = (function(e3) {
        if ("number" != typeof e3 || !Number.isFinite(e3) || e3 <= 0) return it;
        const { min: t3, max: r3 } = at;
        return Math.min(r3, Math.max(t3, Math.floor(e3)));
      })(e2.pollIntervalMs), i2 = (t3, n3) => {
        try {
          e2.metrics?.increment?.({ stat: t3, value: 1, tags: n3 });
        } catch (e3) {
          r2(`${t3} counter not emitted: ${e3 instanceof Error ? e3.message : String(e3)}`);
        }
      }, a2 = (t3, n3, s3) => {
        try {
          e2.metrics?.distribution({ stat: t3, value: n3, tags: s3 });
        } catch (e3) {
          r2(`${t3} distribution not emitted: ${e3 instanceof Error ? e3.message : String(e3)}`);
        }
      }, c2 = (e3) => "turn" === e3 ? "poll" : e3, l2 = [t2.onDidLoad(({ module: e3, channel: t3, sequence: r3, verdict: n3, reason: s3, when: o3 }) => i2(ot.zk, { verdict: n3, reason: s3, when: c2(o3), ...(0, ot.y)(e3, t3, r3, "validate_only") })), t2.onDidServe(({ module: e3, channel: t3, sequence: r3, cause: n3, when: s3, refused: o3 }) => i2(ot.ad, { cause: n3, when: c2(s3), ...void 0 === o3 ? {} : { verdict: o3.verdict, reason: o3.reason }, ...(0, ot.y)(e3, t3, r3, "validate_only") })), t2.onDidLoseHost(({ generation: e3, phase: t3, channel: r3, sequence: n3 }) => i2(ot.k5, { phase: t3, ...(0, ot.y)({ generation: e3, source: "installed" }, r3, n3) })), t2.onDidRevert(({ module: e3, channel: t3, sequence: n3, trigger: s3, fallback: o3 }) => {
        r2(`${e3.label} (${e3.generation.slice(0, 12)}) ${"crash_loop" === s3 ? "kept killing extension hosts" : "was reverted by another window"}; the loader holds ${(0, rt.KC)(o3)}`), i2(ot.rd, { error_class: "crash_loop" === s3 ? "host_lost" : "none", trigger: s3, late_faults: "0", ...(0, ot.y)(e3, t3, n3) });
      }), t2.onDidFailToWrite(({ file: e3, code: t3, channel: r3 }) => i2(ot.eE, { file: e3, code: t3, module_channel: r3 ?? "unknown", module_mode: "validate_only" }))];
      let u2, d2, p2 = false;
      const m2 = (e3) => {
        try {
          e3.transport?.dispose();
        } catch (e4) {
          r2(`transport dispose failed: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
        t2.current().harness !== e3.active.harness && t2.release(e3.active);
      }, h2 = () => {
        d2 = void 0;
        try {
          (() => {
            const n3 = s2(), o3 = t2.poll(), { active: c3 } = o3;
            if (void 0 !== o3.rejected && r2(`pinned generation ${o3.rejected.generation.slice(0, 12)} rejected (${o3.rejected.reason}); the loader holds ${(0, rt.KC)(c3.info)}`), u2?.active.harness === c3.harness) return;
            const l3 = u2;
            void 0 !== l3 && m2(l3);
            const d3 = (0, ot.y)(c3.info, c3.channel, c3.sequence, "validate_only");
            let p3, h3 = "ok";
            if ("installed" === c3.info.source) {
              t2.turnStarted(c3.info);
              try {
                p3 = c3.harness.createTransport((0, st.k)(c3, { backendTransport: lt, getPrivacyModeEnum: () => {
                }, log: r2, metrics: e2.metrics, loopLogContext: e2.loopLogContext })), r2(`validated ${(0, rt.KC)(c3.info)}: loaded and activated, no turn runs here`);
              } catch (e3) {
                h3 = "compose_failed";
                const t3 = e3 instanceof Error ? e3.message : String(e3);
                r2(`activate failed on ${(0, rt.KC)(c3.info)}: ${t3}`), i2(ot.Rf, { timing: "early", error_class: "compose", ...d3 });
              } finally {
                t2.turnSettled(c3.info);
              }
            } else r2(`the loader holds ${(0, rt.KC)(c3.info)}; nothing installed to validate`);
            u2 = { active: c3, transport: p3 };
            const f2 = void 0 === l3 ? "start" : "poll";
            let g2 = "none";
            void 0 !== l3 && (g2 = "installed" === l3.active.info.source ? "module" : "static"), a2(ot.kW, Math.round(s2() - n3), { when: f2, result: h3, from: g2, ...d3 });
            const y2 = t2.serving().length;
            a2(ot.hi, Math.round((0, nt.getHeapStatistics)().used_heap_size / 1024 / 1024), { live: y2 >= 3 ? "3+" : String(y2), when: f2, module_channel: d3.module_channel ?? "unknown", serving: d3.serving ?? "static", module_mode: "validate_only" });
          })();
        } catch (e3) {
          r2(`poll failed: ${e3 instanceof Error ? e3.message : String(e3)}`);
        }
        p2 || (d2 = n2.schedule(o2, h2));
      };
      return t2.announce(), d2 = n2.schedule(ct, h2), { poll: () => {
        p2 || (d2?.dispose(), h2());
      }, dispose: () => {
        if (p2) return;
        p2 = true, d2?.dispose(), d2 = void 0;
        for (const e4 of l2) e4();
        const e3 = u2;
        u2 = void 0, void 0 !== e3 && m2(e3), t2.retire("this host is going away");
      } };
    }
    __webpack_require__(13874);
    var dt = __webpack_require__(95831);
    const pt = (t2) => {
      const r2 = (function(t3) {
        if (void 0 === t3) return;
        const r3 = (e2) => t3.log(`[agent-harness] ${e2}`);
        return { log: r3, loopLogContext: t3.loopLogContext, ...void 0 === t3.onModuleReverted ? {} : { onModuleReverted: t3.onModuleReverted }, loader: () => rt.uU.shared({ ...t3, staticFloor: e, log: r3 }) };
      })(t2.agentHarness);
      return (0, G.mJ)(t2, (n2 = t2.attachLocalLoopAttemptContext, (e2, t3, r3) => {
        const s2 = e2.managedInferenceClient, o2 = e2.managedAgentToolsClient;
        if (void 0 !== s2 && void 0 !== o2) return q({ inferenceClient: s2, getPrivacyModeEnum: () => e2.runtimeCapabilities?.getPrivacyModeEnum?.(), agentToolsClient: o2, ...void 0 === e2.managedAgentServiceClient ? {} : { conversationBlobClient: e2.managedAgentServiceClient }, attachAttemptContext: n2, metricTags: r3, agentModule: Q(j, r3.module_channel) });
      }), void 0, { kind: "local-loop", ...void 0 === r2 ? {} : { agentHarness: r2 } });
      var n2;
    };
    function mt(e2) {
      return (t2) => (0, G.mJ)(t2, (r2, n2) => (0, D.x)({ sessionProvider: e2.sessionProvider, catalog: e2.catalog, ...void 0 === e2.configErrorDetail ? {} : { configErrorDetail: e2.configErrorDetail }, ...void 0 === e2.gatewayRetry ? {} : { gatewayRetry: e2.gatewayRetry }, ...void 0 === e2.promptQualityCaptures ? {} : { promptQualityCaptures: e2.promptQualityCaptures }, getPrivacyModeEnum: () => r2.runtimeCapabilities?.getPrivacyModeEnum?.(), attachAttemptContext: t2.attachLocalLoopAttemptContext, ...void 0 === r2.privateInferenceBackend || void 0 === n2.privateInferenceUsage ? {} : { usageAdmission: (0, O.$)(r2.privateInferenceBackend, n2.privateInferenceUsage) } }), void 0, { kind: "private-inference", privateInference: e2.routing });
    }
    function ht() {
      return { async stat(e2) {
        const t2 = c.workspace.textDocuments.find((t3) => t3.uri.fsPath === e2);
        if (void 0 !== t2) return { size: Buffer.byteLength(t2.getText()) };
        return { size: (await c.workspace.fs.stat(c.Uri.file(e2))).size };
      }, async read(e2) {
        const t2 = c.workspace.textDocuments.find((t3) => t3.uri.fsPath === e2);
        if (void 0 !== t2) {
          const e3 = t2.getText();
          return { contents: e3, byteLength: Buffer.byteLength(e3) };
        }
        const r2 = await c.workspace.fs.readFile(c.Uri.file(e2));
        return { contents: Buffer.from(r2).toString(), byteLength: r2.byteLength };
      } };
    }
    var ft = __webpack_require__(8898), gt = __webpack_require__(42956), yt = __webpack_require__(47825), wt = __webpack_require__(77598), vt = __webpack_require__(73024), _t = __webpack_require__.n(vt), At = __webpack_require__(76760), St = __webpack_require__.n(At), bt = __webpack_require__(81958);
    const Et = "agentKv:blob:";
    function It(e2) {
      return `${Et}${e2}`;
    }
    class Ct {
      constructor(e2) {
        this.db = e2, (0, gt.V)(this, "host_sqlite");
      }
      async getBlob(e2, t2) {
        try {
          const r2 = this.db.blobs.get(It((0, R.nj)(t2)));
          return (0, yt.g)(e2, "host_sqlite", void 0 === r2 ? "miss" : "hit"), r2;
        } catch (t3) {
          throw (0, yt.g)(e2, "host_sqlite", "error"), t3;
        }
      }
      async setBlob(e2, t2, r2) {
        this.db.blobs.set(It((0, R.nj)(t2)), r2);
      }
      async setBlobLocallyOnly(e2, t2, r2) {
        await this.setBlob(e2, t2, r2);
      }
      async flush(e2) {
      }
    }
    class kt {
      constructor(e2, t2, r2 = () => {
      }) {
        this.mirror = t2, this.reportMirrorWriteFailure = r2, this.pendingMirrorWrites = /* @__PURE__ */ new Set(), this.local = new Ct(e2), (0, gt.V)(this, "host_sqlite");
      }
      async getBlob(e2, t2) {
        return this.local.getBlob(e2, t2);
      }
      async setBlob(e2, t2, r2) {
        await this.writeLocallyThenMirror(e2, t2, r2, false);
      }
      async setBlobLocallyOnly(e2, t2, r2) {
        await this.writeLocallyThenMirror(e2, t2, r2, true);
      }
      async flush(e2) {
        for (await this.local.flush(e2); this.pendingMirrorWrites.size > 0; ) await Promise.all([...this.pendingMirrorWrites]);
        this.throwIfMirrorFailed();
      }
      async writeLocallyThenMirror(e2, t2, r2, n2) {
        this.throwIfMirrorFailed(), n2 ? await this.local.setBlobLocallyOnly(e2, t2, r2) : await this.local.setBlob(e2, t2, r2), await this.trackMirrorWrite({ blobId: t2, blobData: r2, locallyOnly: n2 }), this.throwIfMirrorFailed();
      }
      trackMirrorWrite(e2) {
        const t2 = (async () => this.mirror(e2))().then(() => {
        }, (e3) => {
          void 0 === this.latchedMirrorFailure && (this.latchedMirrorFailure = new Error(`Mirror write failed; the host-owned session store is now failed: ${e3 instanceof Error ? e3.message : String(e3)}`, { cause: e3 }), this.reportMirrorWriteFailure());
        });
        return this.pendingMirrorWrites.add(t2), t2.then(() => this.pendingMirrorWrites.delete(t2)), t2;
      }
      throwIfMirrorFailed() {
        if (void 0 !== this.latchedMirrorFailure) throw this.latchedMirrorFailure;
      }
    }
    const xt = "agentHost:listingProjection", Tt = bt.ai().finite().positive().optional().catch(void 0), Rt = bt.Yj().min(1).optional().catch(void 0), Bt = bt.zM().optional().catch(void 0), Pt = bt.Ik({ title: Rt, isArchived: Bt, updatedAtMs: Tt }).transform((e2) => ({ ...void 0 === e2.title ? {} : { title: e2.title }, ...void 0 === e2.isArchived ? {} : { isArchived: e2.isArchived }, ...void 0 === e2.updatedAtMs ? {} : { updatedAtMs: e2.updatedAtMs } }));
    function Jt(e2) {
      const t2 = e2.items.get(xt);
      if (void 0 !== t2) return (function(e3) {
        const t3 = Pt.safeParse(e3);
        return t3.success ? t3.data : void 0;
      })(t2);
    }
    function Mt(e2, t2) {
      const r2 = Jt(e2), n2 = Object.hasOwn(t2, "title") ? t2.title : r2?.title, s2 = void 0 === t2.isArchived ? r2?.isArchived : t2.isArchived, o2 = Math.max(r2?.updatedAtMs ?? 0, t2.updatedAtMs ?? 0), i2 = { ...void 0 === n2 ? {} : { title: n2 }, ...void 0 === s2 ? {} : { isArchived: s2 }, ...0 === o2 ? {} : { updatedAtMs: o2 } };
      return (function(e3, t3) {
        e3.items.set(xt, (function(e4) {
          return { ...void 0 === e4.title ? {} : { title: e4.title }, ...void 0 === e4.isArchived ? {} : { isArchived: e4.isArchived }, ...void 0 === e4.updatedAtMs ? {} : { updatedAtMs: e4.updatedAtMs } };
        })(t3));
      })(e2, i2), i2;
    }
    const qt = "agentHost:sessionManifest", Dt = ["migrated-from-renderer-cas", "host-native"], Ot = /^[0-9a-f]{64}$/, Nt = bt.Ik({ manifestVersion: bt.eu(1), sessionId: bt.Yj().min(1), latestRootBlobIdHex: bt.Yj().regex(Ot), origin: bt.k5(Dt), createdAtMs: bt.ai().int().nonnegative(), migratedBlobCount: bt.ai().int().nonnegative() }).strict();
    function Ft(e2) {
      const t2 = Nt.safeParse(e2);
      if (!t2.success) throw new Error(`Host session manifest is invalid: ${t2.error.issues.map((e3) => `${e3.path.join(".") || "<root>"}: ${e3.message}`).join("; ")}`);
      return t2.data;
    }
    function Ut(e2) {
      const t2 = e2.items.get(qt);
      if (void 0 !== t2) return Ft(t2);
    }
    function Lt(e2, t2) {
      return e2.transaction(() => {
        const r2 = Ut(e2);
        if (r2?.latestRootBlobIdHex !== t2.expectRoot) return { committed: false, onDisk: r2 };
        for (const [r3, n2] of t2.pieces) e2.blobs.set(It(r3), n2);
        return (function(e3, t3) {
          e3.items.set(qt, t3);
        })(e2, t2.manifest), void 0 !== t2.listingUpdatedAtMs && Mt(e2, { updatedAtMs: t2.listingUpdatedAtMs }), { committed: true };
      });
    }
    var $t = __webpack_require__(22544);
    const Qt = "meta.json", jt = 262144;
    function Gt(e2, t2) {
      return "host-native" === e2 ? t2 : void 0;
    }
    function Ht(e2, t2, r2) {
      return { schemaVersion: 1, sessionId: e2.sessionId, origin: e2.origin, createdAtMs: e2.createdAtMs, ...void 0 === t2?.updatedAtMs ? {} : { updatedAtMs: t2.updatedAtMs }, ...void 0 === t2?.title ? {} : { title: t2.title }, isArchived: t2?.isArchived ?? false, ...void 0 === r2 || 0 === r2.length ? {} : { workspacePaths: r2 }, latestRootBlobIdHex: e2.latestRootBlobIdHex };
    }
    function zt(e2) {
      return At.join(e2, Qt);
    }
    const Wt = bt.ai().finite().positive().optional().catch(void 0), Vt = bt.Yj().min(1).optional().catch(void 0), Kt = bt.YO(bt.L5()).transform((e2) => {
      const t2 = e2.flatMap((e3) => "string" == typeof e3 ? [e3] : []);
      return 0 === t2.length ? void 0 : t2;
    }).optional().catch(void 0), Yt = bt.Ik({ schemaVersion: bt.eu(1), sessionId: bt.Yj().min(1), origin: bt.k5(Dt), createdAtMs: bt.ai().finite(), updatedAtMs: Wt, title: Vt, isArchived: bt.zM(), workspacePaths: Kt, latestRootBlobIdHex: bt.Yj().regex(Ot) }).transform((e2) => ({ schemaVersion: e2.schemaVersion, sessionId: e2.sessionId, origin: e2.origin, createdAtMs: e2.createdAtMs, ...void 0 === e2.updatedAtMs ? {} : { updatedAtMs: e2.updatedAtMs }, ...void 0 === e2.title ? {} : { title: e2.title }, isArchived: e2.isArchived, ...void 0 === e2.workspacePaths ? {} : { workspacePaths: e2.workspacePaths }, latestRootBlobIdHex: e2.latestRootBlobIdHex }));
    function Zt(e2) {
      const t2 = { schemaVersion: 1, sessionId: e2.sessionId, origin: e2.origin, createdAtMs: e2.createdAtMs, ...void 0 === e2.updatedAtMs ? {} : { updatedAtMs: e2.updatedAtMs }, ...void 0 === e2.title ? {} : { title: e2.title }, isArchived: e2.isArchived, ...void 0 === e2.workspacePaths || 0 === e2.workspacePaths.length ? {} : { workspacePaths: [...e2.workspacePaths] }, latestRootBlobIdHex: e2.latestRootBlobIdHex };
      return JSON.stringify(t2);
    }
    function Xt(e2) {
      let t2;
      try {
        t2 = JSON.parse(e2);
      } catch (e3) {
        return { kind: "invalid", reason: `not valid JSON: ${String(e3)}` };
      }
      const r2 = Yt.safeParse(t2);
      return r2.success ? { kind: "ok", meta: r2.data } : { kind: "invalid", reason: r2.error.issues.map((e3) => `${e3.path.join(".") || "<root>"}: ${e3.message}`).join("; ") };
    }
    function er(e2) {
      return { ino: e2.ino, mtimeMs: e2.mtimeMs, size: e2.size };
    }
    function tr(e2, t2) {
      return e2.ino === t2.ino && e2.mtimeMs === t2.mtimeMs && e2.size === t2.size;
    }
    function rr(e2) {
      let t2, r2, n2;
      try {
        t2 = vt.openSync(zt(e2), "r");
      } catch (e3) {
        const { code: t3 } = (0, $t.CA)(e3);
        return "ENOENT" === t3 ? { kind: "absent" } : { kind: "unusable", reason: t3 ?? String(e3), fingerprint: void 0 };
      }
      try {
        const e3 = vt.fstatSync(t2);
        if (n2 = er(e3), e3.size > jt) return { kind: "unusable", reason: `too-large (${e3.size} bytes)`, fingerprint: n2 };
        r2 = vt.readFileSync(t2, "utf8");
      } catch (e3) {
        return { kind: "unusable", reason: (0, $t.CA)(e3).code ?? String(e3), fingerprint: void 0 };
      } finally {
        vt.closeSync(t2);
      }
      const s2 = Xt(r2);
      return "ok" === s2.kind ? { kind: "ok", meta: s2.meta, fingerprint: n2 } : { kind: "unusable", reason: s2.reason, fingerprint: n2 };
    }
    const nr = ".retire", sr = ".retired";
    function or(e2) {
      const t2 = (function({ source: e3, target: t3 }) {
        try {
          return vt.linkSync(e3, t3), true;
        } catch (e4) {
          if ("EEXIST" === (0, $t.CA)(e4).code) return false;
        }
        try {
          return vt.copyFileSync(e3, t3, vt.constants.COPYFILE_EXCL), true;
        } catch (e4) {
          if ("EEXIST" === (0, $t.CA)(e4).code) return false;
          throw e4;
        }
      })({ source: e2.heldPath, target: zt(e2.sessionDir) });
      return t2 ? (vt.rmSync(e2.heldPath, { force: true }), "restored") : (ir(e2), "superseded");
    }
    function ir(e2) {
      const t2 = `${e2.heldPath.slice(0, -7)}${sr}`;
      try {
        vt.renameSync(e2.heldPath, t2);
      } catch (e3) {
        const { code: t3 } = (0, $t.CA)(e3);
        if ("ENOENT" !== t3 && "ENOTDIR" !== t3) throw e3;
      }
    }
    function ar(e2) {
      return e2.startsWith(`${Qt}.`) && e2.endsWith(sr);
    }
    function cr(e2) {
      return { sessionId: e2.sessionId, createdAt: e2.createdAtMs, origin: e2.origin, hostOwnedStorage: true, ...void 0 === e2.title ? {} : { title: e2.title }, ...void 0 === e2.updatedAtMs ? {} : { updatedAt: e2.updatedAtMs }, ...void 0 === e2.workspacePaths ? {} : { workspace: { workspacePaths: e2.workspacePaths } } };
    }
    function lr(e2, t2) {
      const r2 = e2.updatedAt ?? t2?.updatedAt ?? Gt(e2.origin, e2.createdAt);
      return { ...t2, ...ur(e2), ...void 0 === r2 ? {} : { updatedAt: r2 }, ...void 0 === t2 ? {} : dr(e2, t2) };
    }
    function ur(e2) {
      const { createdAt: t2, origin: r2, ...n2 } = e2;
      return n2;
    }
    function dr(e2, t2) {
      const r2 = e2.title ?? t2.title, n2 = e2.modelId ?? t2.modelId, s2 = (function(e3, t3) {
        if (void 0 === e3) return t3;
        if (void 0 !== e3.displayPath || void 0 === t3?.displayPath || (r3 = e3.workspacePaths, n3 = t3.workspacePaths, r3.length !== n3.length || !r3.every((e4, t4) => e4 === n3[t4]))) return e3;
        var r3, n3;
        return { ...e3, displayPath: t3.displayPath };
      })(e2.workspace, t2.workspace);
      return { ...void 0 === r2 ? {} : { title: r2 }, ...void 0 === n2 ? {} : { modelId: n2 }, ...void 0 === s2 ? {} : { workspace: s2 } };
    }
    function pr(e2) {
      if (_r(e2.host, e2.renderer)) return "equal";
      const t2 = hr(e2.host), r2 = hr(e2.renderer);
      return void 0 === t2 || void 0 === r2 ? "diverged" : (function(e3, t3) {
        if (r3 = e3, n2 = t3, gr(r3.turns, n2.turns) && wr(r3.summary, n2.summary) && wr(r3.summaryArchive, n2.summaryArchive) && gr(r3.summaryArchives, n2.summaryArchives)) return "equal";
        var r3, n2;
        if (fr(e3, t3)) return "renderer-ahead";
        if (fr(t3, e3)) return "host-ahead";
        return "diverged";
      })(t2, r2);
    }
    function mr(e2) {
      const t2 = hr(e2.host), r2 = hr(e2.renderer);
      return { hostTurns: t2?.turns.length, rendererTurns: r2?.turns.length, commonPrefixTurns: void 0 === t2 || void 0 === r2 ? void 0 : yr(t2.turns, r2.turns) };
    }
    function hr(e2) {
      try {
        return Ie.Y9z.fromBinary(e2);
      } catch {
        return;
      }
    }
    function fr(e2, t2) {
      return r2 = e2.turns, n2 = t2.turns, r2.length < n2.length && yr(r2, n2) === r2.length && vr(e2.summary, t2.summary) && vr(e2.summaryArchive, t2.summaryArchive) && (0 === e2.summaryArchives.length || gr(e2.summaryArchives, t2.summaryArchives));
      var r2, n2;
    }
    function gr(e2, t2) {
      return e2.length === t2.length && yr(e2, t2) === e2.length;
    }
    function yr(e2, t2) {
      const r2 = Math.min(e2.length, t2.length);
      let n2 = 0;
      for (; n2 < r2 && _r(e2[n2], t2[n2]); ) n2++;
      return n2;
    }
    function wr(e2, t2) {
      return void 0 === e2 || void 0 === t2 ? e2 === t2 : _r(e2, t2);
    }
    function vr(e2, t2) {
      return void 0 === e2 || void 0 !== t2 && _r(e2, t2);
    }
    function _r(e2, t2) {
      return 0 === Buffer.compare(e2, t2);
    }
    var Ar = __webpack_require__(67640);
    const Sr = new R.cm(Ie.Y9z), br = (0, p.h)("agent-host:storage");
    class Er extends Error {
      constructor(e2) {
        super(`Session ${e2.sessionId} advanced under this host: root ${e2.expectedRootBlobIdHex.slice(0, 12)}… is now ${e2.actualRootBlobIdHex?.slice(0, 12) ?? "gone"}…; reopen the session to continue`), this.name = "HostSessionAdvancedError", this.expectedRootBlobIdHex = e2.expectedRootBlobIdHex, this.actualRootBlobIdHex = e2.actualRootBlobIdHex;
      }
    }
    class Ir {
      constructor(e2, t2, r2, n2, s2, o2, i2, a2) {
        this.db = e2, this.blobStore = t2, this.forkStore = r2, this.onRootAdvanced = o2, this.instruments = i2, this.now = a2, this.persisting = Promise.resolve(), this.manifest = n2, this.latestState = s2, this.committedState = s2;
      }
      static hydrate(e2) {
        const { manifest: t2 } = e2;
        if (t2.sessionId !== e2.expectedSessionId) throw new Error(`Host session DB for session ${e2.expectedSessionId} belongs to session ${t2.sessionId}`);
        const r2 = e2.db.blobs.get(It(t2.latestRootBlobIdHex));
        if (void 0 === r2) throw new Error(`Host session root blob ${t2.latestRootBlobIdHex} is missing from the local DB for session ${t2.sessionId}`);
        return new Ir(e2.db, e2.blobStore, e2.forkStore, t2, Sr.deserialize(r2), e2.onRootAdvanced, e2.instruments ?? Ar.Pz.none, e2.now ?? Date.now);
      }
      readListingProjection() {
        return Jt(this.db);
      }
      writeListingProjection(e2) {
        this.db.transaction(() => {
          Mt(this.db, e2);
        });
      }
      getConversationState() {
        return this.latestState;
      }
      getBlobStore() {
        return this.blobStore;
      }
      getManifest() {
        return this.manifest;
      }
      readCommittedRoot() {
        return Ut(this.db)?.latestRootBlobIdHex;
      }
      async handleCheckpoint(e2, t2) {
        this.latestState = t2;
        const r2 = this.persisting.then(() => this.persistCheckpoint(e2, t2), () => this.persistCheckpoint(e2, t2));
        this.persisting = r2;
        try {
          await r2;
        } catch (e3) {
          throw this.latestState === t2 && (this.latestState = this.committedState), e3;
        }
      }
      async persistCheckpoint(e2, t2) {
        const r2 = this.manifest.latestRootBlobIdHex, { manifest: n2 } = await this.instruments.timeAsync("checkpoint", e2, (e3) => this.writeCheckpoint(e3, t2, r2), ({ bytes: e3 }) => ({ bytes: e3 }));
        this.manifest = n2, this.committedState = t2;
        try {
          this.onRootAdvanced?.(n2.latestRootBlobIdHex);
        } catch (t3) {
          br.error(e2, "Agent host session root-advanced listener failed", void 0, { component: "storage", errorName: t3 instanceof Error ? t3.name : typeof t3 });
        }
      }
      async writeCheckpoint(e2, t2, r2) {
        const n2 = Sr.serialize(t2), s2 = await (0, R.Bk)(n2);
        await this.blobStore.setBlob(e2, s2, n2), await this.blobStore.flush(e2);
        const o2 = { ...this.manifest, latestRootBlobIdHex: (0, R.nj)(s2) }, i2 = Lt(this.db, { expectRoot: r2, pieces: /* @__PURE__ */ new Map(), manifest: o2, listingUpdatedAtMs: this.now() });
        if (!i2.committed) throw this.instruments.runtimeFault("root_commit_conflict"), new Er({ sessionId: this.manifest.sessionId, expectedRootBlobIdHex: r2, actualRootBlobIdHex: i2.onDisk?.latestRootBlobIdHex });
        return { manifest: o2, bytes: n2.byteLength };
      }
      async createFork(e2, t2) {
        return this.forkStore({ sessionId: t2.sessionId, history: Sr.serialize(t2.initialHistory ?? this.latestState), readParentBlob: (t3) => this.blobStore.getBlob(e2, t3) });
      }
      dispose() {
        this.db.close();
      }
    }
    class Cr {
      constructor(e2, t2, r2) {
        this.database = e2, this.wal = t2, this.metadata = r2;
      }
      static capture(e2, t2) {
        const r2 = e2.sessionDbPath(t2);
        return new Cr(Rr(r2), Rr(`${r2}-wal`), Rr(zt(e2.sessionDir(t2))));
      }
      matches(e2, t2) {
        const r2 = Cr.capture(e2, t2);
        return Tr(this.database, r2.database) && Tr(this.wal, r2.wal) && Tr(this.metadata, r2.metadata);
      }
      sameStoreEnvelope(e2) {
        return Tr(this.database, e2.database) && Tr(this.metadata, e2.metadata);
      }
      equals(e2) {
        return Tr(this.database, e2.database) && Tr(this.wal, e2.wal) && Tr(this.metadata, e2.metadata);
      }
    }
    function kr(e2, t2) {
      const r2 = e2.sessionDbPath(t2), n2 = xr(r2), s2 = e2.readSessionStore(t2), o2 = Cr.capture(e2, t2);
      try {
        return (function(e3, t3, r3, n3, s3, o3, i2) {
          const a2 = rr(e3.sessionDir(t3)), c2 = "ok" === a2.kind ? a2.meta : void 0;
          let l2, u2;
          try {
            l2 = Ut(r3);
          } catch (e4) {
            u2 = e4 instanceof Error ? e4.message : String(e4);
          }
          const d2 = Jt(r3), p2 = [];
          let m2;
          if (void 0 === l2) p2.push(void 0 === u2 ? "host DB has no manifest (never committed)" : `host manifest unreadable: ${u2}`);
          else if (l2.sessionId !== t3) p2.push(`host manifest sessionId ${l2.sessionId} != directory ${t3}`);
          else {
            const e4 = r3.blobs.get(It(l2.latestRootBlobIdHex));
            if (void 0 === e4) p2.push(`host root ${l2.latestRootBlobIdHex.slice(0, 12)}… is missing from the host DB`);
            else try {
              m2 = Ie.Y9z.fromBinary(e4);
            } catch (e5) {
              p2.push(`host root is not a decodable ConversationStateStructure: ${e5 instanceof Error ? e5.message : String(e5)}`);
            }
          }
          return { manifest: l2, manifestError: u2, listingProjection: d2, meta: c2, metaState: a2.kind, rootState: m2, rootReasons: p2, currentnessToken: i2, getBlob: (e4) => r3.blobs.get(It(e4)), listBlobIds: () => r3.blobs.keys(Et).map((e4) => e4.slice(Et.length)), isCurrent: () => {
            return a3 = s3, c3 = xr(n3), void 0 !== a3 && void 0 !== c3 && a3.dev === c3.dev && a3.ino === c3.ino && r3.dataVersion() === o3 && i2.matches(e3, t3);
            var a3, c3;
          }, close: () => r3.close() };
        })(e2, t2, s2, r2, n2, s2.dataVersion(), o2);
      } catch (e3) {
        throw s2.close(), e3;
      }
    }
    function xr(e2) {
      try {
        const t2 = vt.statSync(e2, { throwIfNoEntry: false });
        return void 0 === t2 ? void 0 : { dev: t2.dev, ino: t2.ino };
      } catch (e3) {
        return void (e3 instanceof Error && e3.name);
      }
    }
    function Tr(e2, t2) {
      return e2 === t2 || void 0 !== e2 && void 0 !== t2 && e2.dev === t2.dev && e2.ino === t2.ino && e2.size === t2.size && e2.mtimeNs === t2.mtimeNs && e2.ctimeNs === t2.ctimeNs;
    }
    function Rr(e2) {
      try {
        const t2 = vt.statSync(e2, { bigint: true, throwIfNoEntry: false });
        return void 0 === t2 ? void 0 : { dev: t2.dev, ino: t2.ino, size: t2.size, mtimeNs: t2.mtimeNs, ctimeNs: t2.ctimeNs };
      } catch (e3) {
        return void (e3 instanceof Error && e3.name);
      }
    }
    var Br = __webpack_require__(89396), Pr = __webpack_require__(89582), Jr = __webpack_require__(76222);
    const Mr = { "agent.v1.AgentConversationTurnStructure": { messageType: "agent.v1.AgentConversationTurnStructure", fields: [{ protoFieldName: "user_message", localFieldName: "userMessage", fieldNumber: 1, blobReferenceType: "agent.v1.UserMessage" }, { protoFieldName: "steps", localFieldName: "steps", fieldNumber: 2, blobReferenceType: "agent.v1.ConversationStep" }] }, "agent.v1.ConversationStateStructure": { messageType: "agent.v1.ConversationStateStructure", fields: [{ protoFieldName: "root_prompt_messages_json", localFieldName: "rootPromptMessagesJson", fieldNumber: 1, blobReferenceType: "json" }, { protoFieldName: "todos", localFieldName: "todos", fieldNumber: 3, blobReferenceType: "agent.v1.TodoItem" }, { protoFieldName: "summary", localFieldName: "summary", fieldNumber: 6, blobReferenceType: "agent.v1.ConversationSummary" }, { protoFieldName: "plan", localFieldName: "plan", fieldNumber: 7, blobReferenceType: "agent.v1.ConversationPlan" }, { protoFieldName: "turns", localFieldName: "turns", fieldNumber: 8, blobReferenceType: "agent.v1.ConversationTurnStructure" }, { protoFieldName: "summary_archive", localFieldName: "summaryArchive", fieldNumber: 11, blobReferenceType: "agent.v1.ConversationSummaryArchive" }, { protoFieldName: "file_states", localFieldName: "fileStates", fieldNumber: 12, blobReferenceType: "agent.v1.FileState" }, { protoFieldName: "summary_archives", localFieldName: "summaryArchives", fieldNumber: 13, blobReferenceType: "agent.v1.ConversationSummaryArchive" }, { protoFieldName: "subagent_state_refs", localFieldName: "subagentStateRefs", fieldNumber: 31, blobReferenceType: "agent.v1.SubagentPersistedState" }] }, "agent.v1.ConversationSummaryArchive": { messageType: "agent.v1.ConversationSummaryArchive", fields: [{ protoFieldName: "summarized_messages", localFieldName: "summarizedMessages", fieldNumber: 1, blobReferenceType: "json" }, { protoFieldName: "summary_message", localFieldName: "summaryMessage", fieldNumber: 4, blobReferenceType: "json" }] }, "agent.v1.ExtraContextEntry": { messageType: "agent.v1.ExtraContextEntry", fields: [{ protoFieldName: "blob_id", localFieldName: "blobId", fieldNumber: 2, blobReferenceType: "string" }] }, "agent.v1.FileStateStructure": { messageType: "agent.v1.FileStateStructure", fields: [{ protoFieldName: "content", localFieldName: "content", fieldNumber: 1, blobReferenceType: "string" }, { protoFieldName: "initial_content", localFieldName: "initialContent", fieldNumber: 2, blobReferenceType: "string" }] }, "agent.v1.GetBlobArgs": { messageType: "agent.v1.GetBlobArgs", fields: [{ protoFieldName: "blob_id", localFieldName: "blobId", fieldNumber: 1, blobReferenceType: "bytes" }] }, "agent.v1.InvocationContext": { messageType: "agent.v1.InvocationContext", fields: [{ protoFieldName: "blob_id", localFieldName: "blobId", fieldNumber: 10, blobReferenceType: "agent.v1.InvocationContext" }] }, "agent.v1.PreFetchedBlob": { messageType: "agent.v1.PreFetchedBlob", fields: [{ protoFieldName: "id", localFieldName: "id", fieldNumber: 1, blobReferenceType: "bytes" }] }, "agent.v1.ReadSuccess": { messageType: "agent.v1.ReadSuccess", fields: [{ protoFieldName: "output_blob_id", localFieldName: "outputBlobId", fieldNumber: 7, blobReferenceType: "bytes" }] }, "agent.v1.ReadToolSuccess": { messageType: "agent.v1.ReadToolSuccess", fields: [{ protoFieldName: "data_blob_id", localFieldName: "dataBlobId", fieldNumber: 9, blobReferenceType: "bytes" }, { protoFieldName: "content_blob_id", localFieldName: "contentBlobId", fieldNumber: 10, blobReferenceType: "string" }] }, "agent.v1.RequestContextPartReferences": { messageType: "agent.v1.RequestContextPartReferences", fields: [{ protoFieldName: "rules_blob_id", localFieldName: "rulesBlobId", fieldNumber: 1, blobReferenceType: "agent.v1.RequestContextRulesPart" }, { protoFieldName: "skills_blob_id", localFieldName: "skillsBlobId", fieldNumber: 3, blobReferenceType: "agent.v1.RequestContextSkillsPart" }, { protoFieldName: "subagents_blob_id", localFieldName: "subagentsBlobId", fieldNumber: 5, blobReferenceType: "agent.v1.RequestContextSubagentsPart" }, { protoFieldName: "mcps_blob_id", localFieldName: "mcpsBlobId", fieldNumber: 7, blobReferenceType: "agent.v1.RequestContextMcpsPart" }] }, "agent.v1.SelectedDocument": { messageType: "agent.v1.SelectedDocument", fields: [{ protoFieldName: "blob_id", localFieldName: "blobId", fieldNumber: 1, blobReferenceType: "bytes" }] }, "agent.v1.SelectedDocument.BlobIdWithData": { messageType: "agent.v1.SelectedDocument.BlobIdWithData", fields: [{ protoFieldName: "blob_id", localFieldName: "blobId", fieldNumber: 1, blobReferenceType: "bytes" }] }, "agent.v1.SelectedExternalLink": { messageType: "agent.v1.SelectedExternalLink", fields: [{ protoFieldName: "blob_id", localFieldName: "blobId", fieldNumber: 6, blobReferenceType: "string" }] }, "agent.v1.SelectedGitPRDiffSelection": { messageType: "agent.v1.SelectedGitPRDiffSelection", fields: [{ protoFieldName: "blob_id", localFieldName: "blobId", fieldNumber: 6, blobReferenceType: "agent.v1.SelectedGitPRDiffSelection" }] }, "agent.v1.SelectedImage": { messageType: "agent.v1.SelectedImage", fields: [{ protoFieldName: "blob_id", localFieldName: "blobId", fieldNumber: 1, blobReferenceType: "bytes" }] }, "agent.v1.SelectedImage.BlobIdWithData": { messageType: "agent.v1.SelectedImage.BlobIdWithData", fields: [{ protoFieldName: "blob_id", localFieldName: "blobId", fieldNumber: 1, blobReferenceType: "bytes" }] }, "agent.v1.SelectedPullRequest": { messageType: "agent.v1.SelectedPullRequest", fields: [{ protoFieldName: "blob_id", localFieldName: "blobId", fieldNumber: 7, blobReferenceType: "agent.v1.SelectedPullRequest" }] }, "agent.v1.SelectedVideo": { messageType: "agent.v1.SelectedVideo", fields: [{ protoFieldName: "blob_id", localFieldName: "blobId", fieldNumber: 1, blobReferenceType: "bytes" }] }, "agent.v1.SelectedVideo.BlobIdWithData": { messageType: "agent.v1.SelectedVideo.BlobIdWithData", fields: [{ protoFieldName: "blob_id", localFieldName: "blobId", fieldNumber: 1, blobReferenceType: "bytes" }] }, "agent.v1.SetBlobArgs": { messageType: "agent.v1.SetBlobArgs", fields: [{ protoFieldName: "blob_id", localFieldName: "blobId", fieldNumber: 1, blobReferenceType: "bytes" }] }, "agent.v1.ShellConversationTurnStructure": { messageType: "agent.v1.ShellConversationTurnStructure", fields: [{ protoFieldName: "shell_command", localFieldName: "shellCommand", fieldNumber: 1, blobReferenceType: "agent.v1.ShellCommand" }, { protoFieldName: "shell_output", localFieldName: "shellOutput", fieldNumber: 2, blobReferenceType: "agent.v1.ShellOutput" }] }, "agent.v1.TruncatedToolCall": { messageType: "agent.v1.TruncatedToolCall", fields: [{ protoFieldName: "original_step_blob_id", localFieldName: "originalStepBlobId", fieldNumber: 1, blobReferenceType: "agent.v1.ConversationStep" }] }, "agent.v1.UserMessage": { messageType: "agent.v1.UserMessage", fields: [{ protoFieldName: "conversation_state_blob_id", localFieldName: "conversationStateBlobId", fieldNumber: 10, blobReferenceType: "agent.v1.ConversationStateStructure" }, { protoFieldName: "text_blob_id", localFieldName: "textBlobId", fieldNumber: 18, blobReferenceType: "string" }, { protoFieldName: "rich_text_blob_id", localFieldName: "richTextBlobId", fieldNumber: 19, blobReferenceType: "string" }] } };
    function qr(e2) {
      if (Object.prototype.hasOwnProperty.call(Mr, e2)) return Mr[e2];
    }
    const Dr = { "agent.v1.ConversationPlan": Ie.ThX, "agent.v1.ConversationStateStructure": Ie.Y9z, "agent.v1.ConversationStep": Ie.kJk, "agent.v1.ConversationSummary": Ie.KRq, "agent.v1.ConversationSummaryArchive": Ie.Anz, "agent.v1.ConversationTurnStructure": Ie.cmU, "agent.v1.FileState": Ie.Mzv, "agent.v1.InvocationContext": Pr.yz, "agent.v1.RequestContextMcpsPart": Br.vB, "agent.v1.RequestContextRulesPart": Br.T3, "agent.v1.RequestContextSkillsPart": Br.CB, "agent.v1.RequestContextSubagentsPart": Br.yb, "agent.v1.SelectedGitPRDiffSelection": Pr.vf, "agent.v1.SelectedPullRequest": Pr.UL, "agent.v1.ShellCommand": Ie.oIR, "agent.v1.ShellOutput": Ie.qKL, "agent.v1.SubagentPersistedState": Ie.aK_, "agent.v1.TodoItem": Jr.kW, "agent.v1.UserMessage": Ie.RGk };
    async function Or(e2, t2, r2 = {}) {
      const n2 = /* @__PURE__ */ new Map(), s2 = [], o2 = /* @__PURE__ */ new Set(), i2 = /* @__PURE__ */ new Set();
      function a2(e3, t3, r3) {
        o2.has(e3) || (o2.add(e3), s2.push({ blobIdHex: e3, kind: t3, ...void 0 === r3 ? {} : { detail: r3 } }));
      }
      async function c2(e3, s3) {
        if (0 === e3.length) return;
        const c3 = await (async function(e4) {
          const s4 = (0, R.nj)(e4), i3 = n2.get(s4);
          if (void 0 !== i3) return i3;
          if (o2.has(s4)) return;
          let c4;
          try {
            c4 = await t2(e4);
          } catch (e5) {
            return void a2(s4, "read-error", e5 instanceof Error ? e5.message : String(e5));
          }
          if (void 0 === c4) return void a2(s4, "missing");
          const l3 = r2.yieldIfNeeded?.();
          void 0 !== l3 && await l3;
          const u3 = (0, R.nj)(await (0, R.Bk)(c4));
          if (u3 === s4) return n2.set(s4, c4), c4;
          a2(s4, "hash-mismatch", `bytes hash to ${u3}`);
        })(e3);
        if (void 0 === c3 || (u2 = s3, !Object.prototype.hasOwnProperty.call(Dr, u2))) return;
        var u2;
        const d2 = Dr[s3];
        if (!jr(d2)) return;
        const p2 = (0, R.nj)(e3);
        if (i2.has(p2)) return;
        i2.add(p2);
        const m2 = r2.yieldIfNeeded?.();
        let h2;
        void 0 !== m2 && await m2;
        try {
          h2 = d2.fromBinary(c3);
        } catch (e4) {
          return void a2(p2, "undecodable", `${s3}: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
        await l2(h2);
      }
      async function l2(e3) {
        const t3 = e3.getType(), r3 = new Map(qr(t3.typeName)?.fields.map((e4) => [e4.localFieldName, e4.blobReferenceType])), n3 = new Map(Object.entries(e3));
        for (const e4 of t3.fields.list()) {
          const t4 = Nr(n3, e4);
          if (void 0 === t4) continue;
          const s3 = r3.get(e4.localName);
          if (void 0 !== s3) for (const e5 of Fr(t4, Lr)) await c2(e5, s3);
          else if (void 0 !== Ur(e4)) for (const e5 of Fr(t4, $r)) await l2(e5);
        }
      }
      return await l2(e2), { blobs: n2, failures: s2 };
    }
    function Nr(e2, t2) {
      if (void 0 === t2.oneof) return e2.get(t2.localName);
      const r2 = e2.get(t2.oneof.localName);
      return "object" == typeof (n2 = r2) && null !== n2 && "case" in n2 && r2.case === t2.localName ? r2.value : void 0;
      var n2;
    }
    function Fr(e2, t2) {
      return t2(e2) ? [e2] : Array.isArray(e2) ? e2.filter(t2) : "object" == typeof e2 && null !== e2 ? Object.values(e2).filter(t2) : [];
    }
    function Ur(e2) {
      return "message" === e2.kind ? e2.T : "map" === e2.kind && "message" === e2.V.kind ? e2.V.T : void 0;
    }
    function Lr(e2) {
      return e2 instanceof Uint8Array;
    }
    function $r(e2) {
      return e2 instanceof y.Message;
    }
    const Qr = /* @__PURE__ */ new Map();
    function jr(e2, t2 = /* @__PURE__ */ new Set()) {
      const r2 = Qr.get(e2.typeName);
      if (void 0 !== r2) return r2;
      if (t2.has(e2.typeName)) return false;
      t2.add(e2.typeName);
      const n2 = void 0 !== qr(e2.typeName) || e2.fields.list().some((e3) => {
        const r3 = Ur(e3);
        return void 0 !== r3 && jr(r3, t2);
      });
      return t2.delete(e2.typeName), (n2 || 0 === t2.size) && Qr.set(e2.typeName, n2), n2;
    }
    var Gr = __webpack_require__(77314);
    async function Hr(e2) {
      const t2 = performance.now();
      if (!(0, Gr._)(e2.sessionId)) return { kind: "unavailable", cause: "unsafe-session-id" };
      if (e2.storage.hasSessionStore(e2.sessionId)) {
        const r3 = await (async function(e3, t3) {
          let r4, n2;
          try {
            r4 = e3.storage.openSessionStore(e3.sessionId);
          } catch (e4) {
            if (e4 instanceof $t.df) return { kind: "failed", cause: "not-a-file", error: e4 };
            throw e4;
          }
          try {
            n2 = Ut(r4);
          } catch (n3) {
            throw r4.close(), nn(e3, n3, t3), n3;
          }
          if (void 0 === n2) return void r4.close();
          return en(r4, n2, e3, t3);
        })(e2, t2);
        if (void 0 !== r3) return r3;
      }
      let r2 = e2.initialHistory ?? (true === e2.allowCreate ? new Ie.Y9z().toBinary() : void 0);
      if (void 0 === r2) return { kind: "unavailable", cause: "no-history" };
      for (let n2 = 1; ; n2++) {
        const s2 = await Wr(r2, e2);
        if ("walked" !== s2.kind) return s2;
        if (void 0 !== e2.readCurrentHistory) {
          const t3 = await Vr(r2, e2.readCurrentHistory);
          if ("failed" === t3.kind) return t3;
          if ("moved" === t3.kind) {
            if (void 0 === t3.fresh || n2 >= zr || false === e2.admitSeedHistory?.(t3.fresh)) return { kind: "unavailable", cause: "history-moved" };
            r2 = t3.fresh;
            continue;
          }
        }
        return Kr(r2, s2.closure, e2, t2);
      }
    }
    const zr = 2;
    async function Wr(e2, t2) {
      let r2;
      try {
        r2 = Ie.Y9z.fromBinary(e2);
      } catch (e3) {
        return { kind: "failed", cause: "undecodable-history", error: e3 };
      }
      const n2 = await Or(r2, t2.legacyGetBlob ?? Yr);
      return n2.failures.length > 0 ? void 0 === t2.legacyGetBlob ? { kind: "unavailable", cause: "no-legacy-reader" } : { kind: "failed", cause: "closure", failures: n2.failures } : { kind: "walked", closure: n2 };
    }
    async function Vr(e2, t2) {
      let r2;
      try {
        r2 = await t2();
      } catch (e3) {
        return { kind: "failed", cause: "history-read", error: e3 };
      }
      return void 0 !== r2 && _r(r2, e2) ? { kind: "current" } : { kind: "moved", fresh: r2 };
    }
    async function Kr(e2, t2, r2, n2) {
      const s2 = { manifestVersion: 1, sessionId: r2.sessionId, latestRootBlobIdHex: (0, R.nj)(await (0, R.Bk)(e2)), origin: 0 === t2.blobs.size ? "host-native" : "migrated-from-renderer-cas", createdAtMs: Date.now(), migratedBlobCount: t2.blobs.size }, o2 = (function(e3, t3, r3, n3) {
        let s3;
        try {
          const n4 = e3.openSessionStore(t3.sessionId);
          s3 = n4;
          const o3 = Lt(n4, { expectRoot: void 0, pieces: r3, manifest: t3 });
          if (o3.committed) return { kind: "seeded", store: n4 };
          if (void 0 === o3.onDisk) throw new Error(`Session ${t3.sessionId} has no manifest yet its seed was refused`);
          return { kind: "peer-committed", store: n4, manifest: o3.onDisk };
        } catch (r4) {
          if (void 0 === s3 || "keep" === n3) return s3?.close(), { kind: "failed", cause: "seed", error: r4 };
          try {
            !(function(e4, t4, r5) {
              let n4;
              try {
                n4 = r5.created && r5.transaction(() => void 0 === Ut(r5));
              } catch {
                n4 = false;
              }
              r5.close(), n4 && e4.deleteSessionDir(t4);
            })(e3, t3.sessionId, s3);
          } catch (e4) {
            return { kind: "failed", cause: "seed", error: new AggregateError([r4, e4], `Seeding host session ${t3.sessionId} failed and the directory the seed created could not be removed`) };
          }
          return { kind: "failed", cause: "seed", error: r4 };
        }
      })(r2.storage, s2, Zr(t2.blobs, s2, e2), r2.onSeedFailure ?? "keep");
      switch (o2.kind) {
        case "failed":
          return o2;
        case "peer-committed":
          return en(o2.store, o2.manifest, void 0 === r2.initialHistory || e2 === r2.initialHistory ? r2 : { ...r2, initialHistory: e2 }, n2);
        case "seeded":
          return { kind: "seeded", store: rn(o2.store, s2, r2, n2), migratedBlobCount: t2.blobs.size };
      }
    }
    const Yr = async (e2) => {
      throw new Error(`no legacy blob reader to read ${(0, R.nj)(e2).slice(0, 12)}… from`);
    };
    function Zr(e2, t2, r2) {
      return new Map([...e2, [t2.latestRootBlobIdHex, r2]]);
    }
    const Xr = 2;
    async function en(e2, t2, r2, n2) {
      let s2;
      try {
        s2 = await (async function(e3, t3, r3) {
          const n3 = r3.initialHistory ?? r3.surfaceHistory, s3 = (e4, t4) => ({ kind: "hydrate", manifest: e4, reconciliation: t4 });
          if (void 0 === n3) return s3(t3, "not-compared");
          let o2 = t3;
          for (let t4 = 1; t4 <= Xr + 1; t4++) {
            const i2 = e3.blobs.get(It(o2.latestRootBlobIdHex));
            if (void 0 === i2) return s3(o2, "not-compared");
            const a2 = { host: i2, renderer: n3 }, c2 = pr(a2);
            if ("diverged" === c2) return { kind: "diverged", cause: "roots", divergence: { hostRootBlobIdHex: o2.latestRootBlobIdHex, rendererRootBlobIdHex: (0, R.nj)(await (0, R.Bk)(n3)), ...mr(a2) } };
            if ("equal" !== c2 && "require-equal" === r3.onCommittedStore) return { kind: "diverged", cause: "not-equal" };
            if ("renderer-ahead" !== c2) return s3(o2, c2);
            if (t4 > Xr) break;
            const l2 = await tn(e3, o2, n3, r3);
            if ("root-moved" !== l2.kind) return "caught-up" === l2.kind ? s3(l2.manifest, { kind: "caught-up", copiedBlobCount: l2.copiedBlobCount }) : l2;
            o2 = l2.manifest;
          }
          return { kind: "diverged", cause: "catch-up", error: new Error(`Session ${r3.sessionId}: the committed root moved under each of ${Xr} catch-up passes and is still behind the handed history`) };
        })(e2, t2, r2);
      } catch (t3) {
        throw e2.close(), nn(r2, t3, n2), t3;
      }
      return "diverged" === s2.kind ? (e2.close(), s2) : { kind: "opened", store: rn(e2, s2.manifest, r2, n2), reconciliation: s2.reconciliation };
    }
    async function tn(e2, t2, r2, n2) {
      let s2;
      try {
        s2 = await (async function(e3, t3, r3, n3) {
          const s3 = /* @__PURE__ */ new Set(), o2 = await Or(Ie.Y9z.fromBinary(r3), async (t4) => {
            const r4 = (0, R.nj)(t4), o3 = e3.blobs.get(It(r4));
            return void 0 !== o3 ? o3 : (s3.add(r4), (n3.legacyGetBlob ?? Yr)(t4));
          });
          if (o2.failures.length > 0) return { kind: "diverged", cause: "closure", failures: o2.failures };
          const i2 = { ...t3, latestRootBlobIdHex: (0, R.nj)(await (0, R.Bk)(r3)) }, a2 = new Map([...o2.blobs].filter(([e4]) => s3.has(e4))), c2 = Lt(e3, { expectRoot: t3.latestRootBlobIdHex, pieces: Zr(a2, i2, r3), manifest: i2 });
          if (!c2.committed) return { kind: "refused", onDisk: c2.onDisk };
          return { kind: "caught-up", manifest: i2, copiedBlobCount: a2.size };
        })(e2, t2, r2, n2);
      } catch (e3) {
        return { kind: "diverged", cause: "catch-up", error: e3 };
      }
      if ("refused" !== s2.kind) return s2;
      if (void 0 === s2.onDisk) throw new Error(`Session ${t2.sessionId} lost its manifest while catching up`);
      return { kind: "root-moved", manifest: s2.onDisk };
    }
    function rn(e2, t2, r2, n2) {
      try {
        return Ir.hydrate({ db: e2, blobStore: void 0 === r2.mirror ? new Ct(e2) : new kt(e2, r2.mirror, () => r2.instruments?.runtimeFault("mirror_write_failed")), forkStore: (e3) => sn(r2, e3), manifest: t2, expectedSessionId: r2.sessionId, ...void 0 === r2.onRootAdvanced ? {} : { onRootAdvanced: r2.onRootAdvanced }, ...void 0 === r2.instruments ? {} : { instruments: r2.instruments }, ...void 0 === r2.now ? {} : { now: r2.now } });
      } catch (t3) {
        throw e2.close(), nn(r2, t3, n2), t3;
      }
    }
    function nn(e2, t2, r2) {
      const { code: n2, sqliteErrcode: s2 } = (0, $t.CA)(t2);
      e2.instruments?.fault({ kind: "hydrate_failed", store: "session", sessionId: e2.sessionId, relPath: e2.storage.sessionDbRelPath(e2.sessionId), durationMs: Math.max(0, performance.now() - r2), ...void 0 === n2 ? {} : { code: n2 }, ...void 0 === s2 ? {} : { sqliteErrcode: s2 }, error: (0, Ar.zj)(t2, e2.storage.storageDir) ?? new Error("Host session hydrate failed") });
    }
    async function sn(e2, t2) {
      const r2 = await Hr({ storage: e2.storage, sessionId: t2.sessionId, initialHistory: t2.history, onCommittedStore: "require-equal", onSeedFailure: "reclaim-created", legacyGetBlob: t2.readParentBlob, ...void 0 === e2.mirror ? {} : { mirror: e2.mirror }, ...void 0 === e2.instruments ? {} : { instruments: e2.instruments } });
      if ("seeded" === r2.kind) return r2.store;
      if ("opened" === r2.kind) {
        if ("equal" === r2.reconciliation) return r2.store;
        throw r2.store.dispose(), new Error(`Host session fork ${t2.sessionId} names a committed store that does not hold its history`);
      }
      throw new Error(`Host session fork ${t2.sessionId} could not be seeded from its parent: ${r2.kind} (${r2.cause})`);
    }
    const on = (e2, t2) => vt.watch(e2, { recursive: true }, t2);
    function an(e2) {
      try {
        return vt.statSync(e2), false;
      } catch (e3) {
        return "ENOENT" === (0, $t.CA)(e3).code;
      }
    }
    const cn = { ino: 0, mtimeMs: 0, size: 0 }, ln = { ino: -1, mtimeMs: -1, size: -1 };
    class un {
      constructor(e2) {
        this.bySessionId = /* @__PURE__ */ new Map(), this.sessionIdByDirName = /* @__PURE__ */ new Map(), this.fingerprintByDirName = /* @__PURE__ */ new Map(), this.pendingDirs = /* @__PURE__ */ new Map(), this.scanned = false, this.disposed = false, this.storage = e2.storage, this.log = e2.log, this.clock = e2.clock, this.watch = e2.watch ?? on, this.onSessionChanged = e2.onSessionChanged, this.revalidateIntervalMs = e2.revalidateIntervalMs ?? 2e3;
      }
      list(e2, t2) {
        this.ensureFresh();
        const r2 = [], n2 = (e3) => e3.updatedAtMs ?? Gt(e3.origin, e3.createdAtMs);
        for (const e3 of this.bySessionId.values()) {
          if (e3.isArchived) continue;
          const s2 = void 0 === t2 ? { recency: n2(e3) } : t2(e3);
          void 0 !== s2 && r2.push({ meta: e3, recency: s2.recency });
        }
        return r2.sort((e3, t3) => {
          const r3 = (t3.recency ?? 0) - (e3.recency ?? 0);
          return 0 !== r3 ? r3 : e3.meta.sessionId.localeCompare(t3.meta.sessionId);
        }), r2.slice(0, Math.max(0, e2)).map((e3) => e3.meta);
      }
      hasCatalogEntries(e2) {
        if (!vt.existsSync(this.storage.sessionsDir)) return this.scanned && (this.scanAll(false), this.scanned = false), false;
        e2.refresh && this.ensureFresh();
        for (const e3 of this.bySessionId.values()) if (!e3.isArchived) return true;
        return false;
      }
      get(e2) {
        return this.ensureFresh(), this.bySessionId.get(e2);
      }
      upsert(e2, t2, r2) {
        this.startWatching(), this.sessionIdByDirName.set(e2, t2.sessionId), this.bySessionId.set(t2.sessionId, t2), this.fingerprintByDirName.set(e2, r2 ?? cn);
      }
      remove(e2) {
        const t2 = this.bySessionId.delete(e2);
        for (const [t3, r2] of this.sessionIdByDirName) r2 === e2 && (this.sessionIdByDirName.delete(t3), this.fingerprintByDirName.delete(t3));
        return t2;
      }
      dispose() {
        this.disposed = true, this.stopWatching(), this.rearmTimer?.dispose(), this.rearmTimer = void 0;
        for (const e2 of this.pendingDirs.values()) e2.dispose();
        this.pendingDirs.clear();
      }
      ensureFresh() {
        if (!this.disposed) {
          if (!this.scanned) return this.startWatching(), this.scanAll(false), void (this.scanned = true);
          void 0 === this.watcher && this.startWatching(), (void 0 === this.lastDiskCheckAtMs || this.clock.now() - this.lastDiskCheckAtMs >= this.revalidateIntervalMs) && this.scanAll(false);
        }
      }
      scanAll(e2) {
        let t2;
        this.lastDiskCheckAtMs = this.clock.now();
        try {
          t2 = vt.readdirSync(this.storage.sessionsDir, { withFileTypes: true });
        } catch (e3) {
          const { code: t3 } = (0, $t.CA)(e3);
          if ("ENOENT" !== t3) return void this.log.warn(`[hostStorage] could not read the session directory (${t3 ?? String(e3)})`);
          this.stopWatching();
          for (const e4 of [...this.sessionIdByDirName.keys()]) this.forgetDir(e4);
          return;
        }
        const r2 = /* @__PURE__ */ new Set();
        for (const n2 of t2) n2.isDirectory() && (r2.add(n2.name), this.refreshDir(n2.name, e2));
        for (const e3 of [...this.sessionIdByDirName.keys()]) r2.has(e3) || this.forgetDir(e3);
      }
      statFingerprint(e2) {
        const t2 = zt(At.join(this.storage.sessionsDir, e2));
        try {
          const e3 = vt.statSync(t2, { throwIfNoEntry: false });
          return void 0 === e3 ? "absent" : er(e3);
        } catch (t3) {
          return void this.log.warn(`[hostStorage] could not stat the listing sidecar in ${e2} (${(0, $t.CA)(t3).code ?? String(t3)}); re-reading it`);
        }
      }
      refreshDir(e2, t2) {
        if (!(0, Gr._)(e2) || an(this.storage.sessionDbPath(e2))) return void this.forgetDir(e2);
        const r2 = this.statFingerprint(e2), n2 = this.fingerprintByDirName.get(e2);
        if ("absent" === r2) {
          if (n2 === ln) return;
        } else if (void 0 !== r2 && void 0 !== n2 && tr(r2, n2)) return;
        this.applyDiskState(e2, this.readDiskState(e2), t2);
      }
      readDiskState(e2) {
        const t2 = rr(this.storage.sessionDir(e2));
        return "ok" === t2.kind && t2.meta.sessionId !== e2 ? { kind: "unusable", reason: `it claims session ${t2.meta.sessionId}`, fingerprint: t2.fingerprint } : "ok" === t2.kind ? { kind: "present", meta: t2.meta, fingerprint: t2.fingerprint } : an(this.storage.sessionDbPath(e2)) ? { kind: "gone" } : t2;
      }
      applyDiskState(e2, t2, r2) {
        switch (t2.kind) {
          case "gone":
            return void this.forgetDir(e2);
          case "present":
            return void this.applyRow(e2, t2.meta, t2.fingerprint, r2);
          case "absent": {
            const t3 = this.rebuildFromStore(e2);
            return "rebuilt" !== t3.kind ? void this.dropRow(e2, t3.kind) : void this.applyRow(e2, t3.meta, ln, r2);
          }
          case "unusable": {
            this.log.warn(`[hostStorage] the listing sidecar in ${e2} is unusable (${t2.reason}); leaving it untouched and listing from the store`);
            const n2 = this.rebuildFromStore(e2);
            return "rebuilt" !== n2.kind ? void this.dropRow(e2, n2.kind) : void this.applyRow(e2, n2.meta, t2.fingerprint, r2);
          }
        }
      }
      dropRow(e2, t2) {
        "gone" === t2 ? this.forgetDir(e2) : this.unlist(e2);
      }
      applyRow(e2, t2, r2, n2) {
        const s2 = !this.bySessionId.has(t2.sessionId);
        this.upsert(e2, t2, r2), s2 && n2 && this.onSessionChanged?.(t2.sessionId, true);
      }
      unlist(e2) {
        const t2 = this.sessionIdByDirName.get(e2);
        this.sessionIdByDirName.delete(e2), this.fingerprintByDirName.delete(e2), void 0 !== t2 && this.bySessionId.delete(t2);
      }
      rebuildFromStore(e2) {
        try {
          const t2 = (function(e3, t3) {
            const r2 = e3.readSessionStore(t3);
            try {
              const e4 = Ut(r2);
              if (void 0 === e4) return;
              return Ht(e4, Jt(r2));
            } finally {
              r2.close();
            }
          })(this.storage, e2);
          return void 0 === t2 ? { kind: "manifest-less" } : (this.log.info(`[hostStorage] rebuilt the listing row for session ${e2} from its store; it has no usable sidecar`), { kind: "rebuilt", meta: t2 });
        } catch (t2) {
          return an(this.storage.sessionDbPath(e2)) ? { kind: "gone" } : (t2 instanceof $t.C8 || this.log.warn(`[hostStorage] could not rebuild the listing row for ${e2} from its store: ${t2 instanceof Error ? t2.message : String(t2)}`), { kind: "manifest-less" });
        }
      }
      forgetDir(e2) {
        const t2 = this.sessionIdByDirName.get(e2);
        this.sessionIdByDirName.delete(e2), this.fingerprintByDirName.delete(e2), void 0 !== t2 && (this.bySessionId.delete(t2), this.onSessionChanged?.(t2, false));
      }
      startWatching() {
        this.armWatcher(5e3);
      }
      armWatcher(e2) {
        if (void 0 === this.watcher && void 0 === this.rearmTimer && !this.disposed) try {
          vt.mkdirSync(this.storage.sessionsDir, { recursive: true, mode: 448 });
          const t2 = this.watch(this.storage.sessionsDir, (e3, t3) => this.onWatchEvent(t3));
          this.watcher = t2, t2.on("error", (r2) => {
            if (this.watcher === t2) {
              if (this.stopWatching(), "ENOENT" === (0, $t.CA)(r2).code) return this.log.info("[hostStorage] the session directory watcher died on a vanished directory; re-armed"), this.startWatching(), void this.scheduleRefresh("");
              this.rearmAfter(e2, r2);
            }
          });
        } catch (t2) {
          this.rearmAfter(e2, t2);
        }
      }
      rearmAfter(e2, t2) {
        this.log.warn(`[hostStorage] the session directory watcher failed (${(0, $t.CA)(t2).code ?? String(t2)}); re-arming in ${e2 / 1e3}s, listing relies on revalidation meanwhile`), this.rearmTimer = this.clock.schedule(e2, () => {
          this.rearmTimer = void 0, this.armWatcher(Math.min(2 * e2, 6e4)), void 0 !== this.watcher && this.scheduleRefresh("");
        });
      }
      onWatchEvent(e2) {
        const t2 = null === e2 ? "" : e2.toString();
        if (0 === t2.length) return void this.scheduleRefresh("");
        const [r2, ...n2] = t2.split(At.sep);
        if (void 0 === r2 || 0 === r2.length) return void this.scheduleRefresh("");
        const s2 = n2[n2.length - 1];
        (void 0 === s2 || s2 === Qt || s2.startsWith(`${Qt}.`)) && this.scheduleRefresh(r2);
      }
      stopWatching() {
        this.watcher?.close(), this.watcher = void 0;
      }
      scheduleRefresh(e2) {
        this.pendingDirs.get(e2)?.dispose(), this.pendingDirs.set(e2, this.clock.schedule(50, () => {
          this.pendingDirs.delete(e2), this.disposed || (0 !== e2.length ? this.refreshDir(e2, true) : this.scanAll(true));
        }));
      }
    }
    class dn {
      constructor(e2) {
        this.preparedSessions = /* @__PURE__ */ new Map(), this.inFlightPrepares = /* @__PURE__ */ new Map(), this.latestTitles = /* @__PURE__ */ new Map(), this.latestArchived = /* @__PURE__ */ new Map(), this.disposed = false, this.hostOwnedStorageListeners = /* @__PURE__ */ new Set(), this.rootAdvancedListeners = /* @__PURE__ */ new Set(), this.storage = e2.storage, this.log = e2.log, this.clock = e2.clock, this.instruments = e2.instruments ?? Ar.Pz.none, this.hasLiveSession = e2.hasLiveSession ?? (() => false), this.catalog = new un({ storage: e2.storage, log: e2.log, clock: e2.clock, ...void 0 === e2.watch ? {} : { watch: e2.watch }, onSessionChanged: (e3, t2) => {
          t2 ? this.notifyHostOwnedStorageChanged(e3, true) : this.forgetDeletedSession(e3);
        }, ...void 0 === e2.revalidateIntervalMs ? {} : { revalidateIntervalMs: e2.revalidateIntervalMs } });
      }
      onHostOwnedStorageChanged(e2) {
        return this.hostOwnedStorageListeners.add(e2), () => {
          this.hostOwnedStorageListeners.delete(e2);
        };
      }
      onRootAdvanced(e2) {
        return this.rootAdvancedListeners.add(e2), () => {
          this.rootAdvancedListeners.delete(e2);
        };
      }
      ownedSessionIds() {
        return [...this.preparedSessions.keys()].sort();
      }
      notifyHostOwnedStorageChanged(e2, t2) {
        for (const r2 of this.hostOwnedStorageListeners) try {
          r2(e2, t2);
        } catch (t3) {
          this.log.error(`[hostStorage] a host-owned storage listener failed for session ${e2}`, t3);
        }
      }
      async prepareSession(e2) {
        return this.instruments.timeAsync("hydrate", e2.ctx ?? (0, d.q6)(), () => this.prepareSessionJoined(e2), (e3) => ({ hostOwned: void 0 !== e3, ...void 0 === e3 ? {} : { kind: e3.kind } }));
      }
      async prepareSessionJoined(e2) {
        for (; ; ) {
          const t3 = this.preparedSessions.get(e2.sessionId);
          if (void 0 !== t3) return t3;
          const r2 = this.inFlightPrepares.get(e2.sessionId);
          if (void 0 === r2) break;
          if (await Promise.allSettled([r2.settled]), r2.deleted) return void this.log.info(`[hostStorage] session ${e2.sessionId} was deleted while an earlier open or seed of it was in flight; nothing opened, it stays where it was`);
        }
        const t2 = this.prepareSessionUncontended(e2).finally(() => {
          this.inFlightPrepares.delete(e2.sessionId);
        });
        return this.inFlightPrepares.set(e2.sessionId, { settled: t2, deleted: false }), t2;
      }
      async prepareSessionUncontended(e2) {
        const t2 = (0, Gr._)(e2.sessionId) ? rr(this.storage.sessionDir(e2.sessionId)) : { kind: "absent" };
        let r2;
        try {
          r2 = await Hr({ storage: this.storage, sessionId: e2.sessionId, ...void 0 === e2.initialHistory ? {} : { initialHistory: e2.initialHistory }, ...void 0 === e2.surfaceHistory ? {} : { surfaceHistory: e2.surfaceHistory }, ...void 0 === e2.allowCreate ? {} : { allowCreate: e2.allowCreate }, ...void 0 === e2.legacyGetBlob ? {} : { legacyGetBlob: e2.legacyGetBlob }, ...void 0 === e2.readCurrentHistory ? {} : { readCurrentHistory: e2.readCurrentHistory }, ...void 0 === e2.admitSeedHistory ? {} : { admitSeedHistory: e2.admitSeedHistory }, ...void 0 === e2.mirror ? {} : { mirror: e2.mirror }, onRootAdvanced: () => {
            this.noteRootAdvanced(e2.sessionId);
          }, now: () => this.clock.now(), instruments: this.instruments });
        } catch (t3) {
          throw this.log.error(`[hostStorage] session ${e2.sessionId} has a committed host store that cannot be opened or hydrated; the session cannot start from it`, t3), t3;
        }
        switch (r2.kind) {
          case "unavailable":
            return "unsafe-session-id" !== r2.cause && this.retireStaleSidecar(e2.sessionId, { sidecar: t2, store: "manifest-less" }), void ("no-history" === r2.cause ? this.log.info(`[hostStorage] session ${e2.sessionId} has no host store and nothing to seed one from; it stays where it was`) : "history-moved" === r2.cause ? this.log.info(`[hostStorage] session ${e2.sessionId} advanced on the surface while its history was being copied; nothing committed, it stays where it was`) : this.log.warn(`[hostStorage] session ${e2.sessionId} stays on the surface's path (pre-commit): ${r2.cause}`));
          case "failed":
            return this.retireStaleSidecar(e2.sessionId, { sidecar: t2, store: "not-a-file" === r2.cause ? "refused" : "manifest-less" }), "not-a-file" === r2.cause ? void this.log.error(`[hostStorage] session ${e2.sessionId} has something other than a regular file at its store path; refused unopened, it stays where it was`, r2.error) : void this.log.error(`[hostStorage] seeding session ${e2.sessionId} failed before anything committed (${r2.cause}); it stays where it was${(function(e3) {
              if ("closure" !== e3.cause) return "";
              return pn(e3.failures);
            })(r2)}`, "closure" === r2.cause ? void 0 : r2.error);
          case "diverged":
            switch (r2.cause) {
              case "roots":
                this.instruments.fault({ kind: "roots_diverged", store: "session", sessionId: e2.sessionId, relPath: this.storage.sessionDbRelPath(e2.sessionId), ...r2.divergence }), this.instruments.distribution("roots_diverged", 1, { store: "session" }), this.log.error(`[hostStorage] session ${e2.sessionId} diverged from its committed host store (neither root continues the other); neither side adopted, the session stays where it was`, void 0, r2.divergence);
                break;
              case "not-equal":
                this.log.warn(`[hostStorage] session ${e2.sessionId} has a committed host store this open may only use as it is, and its transcript is not the handed history's; the session stays where it was`);
                break;
              case "closure":
                this.log.error(`[hostStorage] session ${e2.sessionId} has a newer history than its committed host store, but it reaches pieces that failed validation; neither side adopted, the session stays where it was${pn(r2.failures)}`);
                break;
              case "catch-up":
                this.log.warn(`[hostStorage] session ${e2.sessionId} has a newer history than its committed host store, but the catch-up onto the committed root did not commit${mn(r2.error)}; the session stays where it was until the next open`);
            }
            return;
          case "opened":
          case "seeded": {
            const t3 = { sessionId: e2.sessionId, kind: r2.kind, store: r2.store, consumed: false };
            if (this.disposed) return void r2.store.dispose();
            if (this.preparedSessions.set(e2.sessionId, t3), !this.writeSessionSidecar(t3, e2.workspacePaths)) return;
            this.notifyHostOwnedStorageChanged(e2.sessionId, true);
            const n2 = r2.store.getManifest();
            return this.log.info("seeded" === r2.kind ? `[hostStorage] seeded ${n2.origin} storage for session ${e2.sessionId} (${r2.migratedBlobCount} piece(s) copied)` : `[hostStorage] opened committed host-owned storage for session ${e2.sessionId} (root ${n2.latestRootBlobIdHex.slice(0, 12)}…${(function(e3) {
              switch (e3) {
                case "not-compared":
                  return "";
                case "equal":
                  return ", same as the surface's history";
                case "host-ahead":
                  return ", ahead of the surface's history";
                default:
                  return `, caught up to the surface's newer history, ${e3.copiedBlobCount} piece(s) copied`;
              }
            })(r2.reconciliation)})`), t3;
          }
        }
      }
      async forkSession(e2) {
        const t2 = this.preparedSessions.get(e2.parentSessionId);
        if (void 0 === t2) return this.log.info(`[hostStorage] fork ${e2.sessionId} of session ${e2.parentSessionId}: the parent has no host store held here; the fork stays where it was`), false;
        if (this.preparedSessions.has(e2.sessionId)) return this.log.warn(`[hostStorage] fork ${e2.sessionId} of session ${e2.parentSessionId} already names a held store; nothing seeded`), false;
        if (this.inFlightPrepares.has(e2.sessionId)) return this.log.warn(`[hostStorage] fork ${e2.sessionId} of session ${e2.parentSessionId}: the surface is already opening the fork id, and that open decides where the fork lives; nothing seeded`), false;
        if (this.hasLiveSession(e2.sessionId)) return this.log.warn(`[hostStorage] fork ${e2.sessionId} of session ${e2.parentSessionId}: the fork already has a live session here, so it stays where it was; nothing seeded under it`), false;
        const r2 = this.seedForkUncontended(e2, t2).finally(() => {
          this.inFlightPrepares.delete(e2.sessionId);
        });
        return this.inFlightPrepares.set(e2.sessionId, { settled: r2, deleted: false }), r2;
      }
      async seedForkUncontended(e2, t2) {
        const r2 = e2.ctx ?? (0, d.q6)(), n2 = t2.store.getBlobStore();
        let s2;
        try {
          s2 = await sn({ storage: this.storage, instruments: this.instruments }, { sessionId: e2.sessionId, history: e2.history, readParentBlob: (e3) => n2.getBlob(r2, e3) });
        } catch (t3) {
          return this.log.error(`[hostStorage] fork ${e2.sessionId} of session ${e2.parentSessionId} could not be seeded; the fork stays where it was`, t3), false;
        }
        if (true === this.inFlightPrepares.get(e2.sessionId)?.deleted) {
          s2.dispose();
          try {
            this.storage.deleteSessionDir(e2.sessionId);
          } catch (t3) {
            return this.log.error(`[hostStorage] failed to remove the seed of fork ${e2.sessionId}, deleted while it was being seeded`, t3), false;
          }
          return this.log.info(`[hostStorage] fork ${e2.sessionId} of session ${e2.parentSessionId} was deleted while its store was being seeded; the seed is removed and nothing announced`), false;
        }
        if (this.disposed) return s2.dispose(), false;
        const o2 = s2.getManifest();
        let i2;
        try {
          i2 = this.writeSessionSidecar({ sessionId: e2.sessionId, kind: "seeded", store: s2 }, e2.workspacePaths ?? this.catalog.get(e2.parentSessionId)?.workspacePaths);
        } finally {
          s2.dispose();
        }
        if (!i2) {
          const t3 = this.inFlightPrepares.get(e2.sessionId);
          return void 0 !== t3 && (t3.deleted = true), this.log.warn(`[hostStorage] fork ${e2.sessionId} of session ${e2.parentSessionId}: its store is gone (deleted by another host while it was being seeded); nothing announced`), false;
        }
        return this.notifyHostOwnedStorageChanged(e2.sessionId, true), this.log.info(`[hostStorage] seeded fork ${e2.sessionId} of session ${e2.parentSessionId} (root ${o2.latestRootBlobIdHex.slice(0, 12)}…, ${o2.migratedBlobCount} piece(s) copied from the parent)`), true;
      }
      writeSessionSidecar(e2, t2) {
        return this.reconcileListingProjection(e2), this.updateSidecar(e2.sessionId, (r2) => this.sidecarFromManifest(e2, r2, t2));
      }
      reconcileListingProjection(e2) {
        const t2 = e2.sessionId, r2 = this.latestTitles.has(t2) ? this.resolveTitle(t2, void 0) : void 0, n2 = this.latestArchived.get(t2);
        (this.latestTitles.has(t2) || void 0 !== n2) && this.writeHeldListingProjection(e2, { ...this.latestTitles.has(t2) ? { title: r2 } : {}, ...void 0 === n2 ? {} : { isArchived: n2 } });
      }
      writeHeldListingProjection(e2, t2) {
        try {
          e2.store.writeListingProjection(t2);
        } catch (t3) {
          this.log.error(`[hostStorage] failed to write the listing projection for session ${e2.sessionId}`, t3);
        }
      }
      retireStaleSidecar(e2, t2) {
        let r2;
        const n2 = () => {
          void 0 !== r2 && (or(r2), r2 = void 0);
        }, s2 = () => void 0 !== r2 && (ir(r2), r2 = void 0, true);
        try {
          let o2 = this.lookAtStoreAgain(e2, t2.store);
          if (("holds" === o2.kind || "gone" === o2.kind) && "ok" === t2.sidecar.kind) {
            const n3 = (function(e3, t3) {
              const r3 = zt(e3), n4 = `${r3}.${process.pid}.${(0, wt.randomUUID)()}${nr}`;
              try {
                vt.renameSync(r3, n4);
              } catch (e4) {
                const { code: t4 } = (0, $t.CA)(e4);
                if ("ENOENT" === t4 || "ENOTDIR" === t4) return { kind: "absent" };
                if ("EPERM" === t4 || "EBUSY" === t4) return { kind: "changed" };
                throw e4;
              }
              const s3 = { sessionDir: e3, heldPath: n4 };
              let o3;
              try {
                o3 = vt.statSync(n4);
              } catch (e4) {
                throw or(s3), e4;
              }
              return tr(er(o3), t3) ? { kind: "held", held: s3 } : (or(s3), { kind: "changed" });
            })(this.storage.sessionDir(e2), t2.sidecar.fingerprint);
            if ("changed" === n3.kind) return void this.log.info(`[hostStorage] session ${e2} had its listing sidecar rewritten while this open was judging the store; the newer listing stands`);
            "held" === n3.kind && (r2 = n3.held), o2 = this.lookAtStoreAgain(e2, t2.store);
          }
          switch (o2.kind) {
            case "committed":
              return n2(), void this.log.info(`[hostStorage] session ${e2} was committed by a peer while this open was judging it; its listing stands`);
            case "unknown":
              return n2(), void this.log.warn(`[hostStorage] could not look at the store of session ${e2} again before retiring its listing${mn(o2.error)}; it stays listed until the next open`);
            case "gone":
              return s2(), void (this.catalog.remove(e2) && (this.log.info(`[hostStorage] unlisted session ${e2}: its store is gone`), this.notifyHostOwnedStorageChanged(e2, false)));
            case "holds":
              return this.log.info(s2() ? `[hostStorage] unlisted session ${e2}: its listing sidecar had no committed store behind it` : `[hostStorage] unlisted session ${e2}: there is a store at its path with no committed manifest to list it from`), this.catalog.remove(e2), void this.notifyHostOwnedStorageChanged(e2, false);
          }
        } catch (t3) {
          try {
            n2();
          } catch (t4) {
            this.log.error(`[hostStorage] the listing sidecar of session ${e2} is held under a private name in its directory and could not be put back`, t4);
          }
          this.log.error(`[hostStorage] failed to retire the stale listing of session ${e2}; it may stay listed until its store is committed or removed`, t3);
        }
      }
      lookAtStoreAgain(e2, t2) {
        if (!this.storage.hasSessionStore(e2)) return { kind: "gone" };
        if ("refused" === t2) return { kind: "holds" };
        let r2;
        try {
          r2 = this.storage.readSessionStore(e2);
        } catch (t3) {
          return this.storage.hasSessionStore(e2) ? t3 instanceof $t.C8 || t3 instanceof $t.df ? { kind: "holds" } : { kind: "unknown", error: t3 } : { kind: "gone" };
        }
        try {
          return void 0 === Ut(r2) ? { kind: "holds" } : { kind: "committed" };
        } catch (e3) {
          return { kind: "unknown", error: e3 };
        } finally {
          r2.close();
        }
      }
      sidecarFromManifest(e2, t2, r2) {
        const n2 = e2.store.getManifest(), s2 = e2.store.readListingProjection(), o2 = this.latestTitles.has(e2.sessionId) ? this.resolveTitle(e2.sessionId, t2) : t2?.title ?? s2?.title, i2 = void 0 !== r2 && r2.length > 0 ? r2 : t2?.workspacePaths;
        return Ht(n2, { ...void 0 === o2 ? {} : { title: o2 }, isArchived: this.latestArchived.get(e2.sessionId) ?? t2?.isArchived ?? s2?.isArchived ?? false, ...void 0 === s2?.updatedAtMs ? {} : { updatedAtMs: s2.updatedAtMs } }, i2);
      }
      resolveTitle(e2, t2) {
        if (this.latestTitles.has(e2)) {
          const t3 = this.latestTitles.get(e2)?.trim();
          return void 0 === t3 || 0 === t3.length ? void 0 : t3;
        }
        return t2?.title;
      }
      updateSidecar(e2, t2, r2) {
        try {
          const n2 = this.storage.sessionDir(e2), s2 = rr(n2);
          if ("unusable" === s2.kind) return this.log.warn(`[hostStorage] not writing the listing sidecar for session ${e2}: the existing sidecar is unusable (${s2.reason})`), true;
          const o2 = "ok" === s2.kind ? s2.meta : void 0, i2 = this.preparedSessions.get(e2);
          if (void 0 === o2 && an(this.storage.sessionDbPath(e2))) return void 0 !== i2 && this.forgetDeletedSession(e2), false;
          const a2 = void 0 === i2 ? void 0 : (function(e3) {
            let t3;
            try {
              t3 = vt.readdirSync(e3);
            } catch (e4) {
              const { code: t4 } = (0, $t.CA)(e4);
              if ("ENOENT" === t4 || "ENOTDIR" === t4) return { meta: void 0, usablePaths: [], unusableReasons: [] };
              throw e4;
            }
            const r3 = [];
            for (const n4 of t3) {
              if (!ar(n4)) continue;
              const t4 = At.join(e3, n4), s4 = vt.statSync(t4, { throwIfNoEntry: false });
              s4?.isFile() && r3.push({ path: t4, stat: s4 });
            }
            let n3;
            r3.sort((e4, t4) => t4.stat.mtimeMs - e4.stat.mtimeMs || (e4.path < t4.path ? 1 : -1));
            const s3 = [], o3 = [];
            for (const e4 of r3) {
              if (e4.stat.size > jt) {
                o3.push(`too-large (${e4.stat.size} bytes)`);
                continue;
              }
              let t4;
              try {
                t4 = vt.readFileSync(e4.path, "utf8");
              } catch (e5) {
                const { code: t5 } = (0, $t.CA)(e5);
                "ENOENT" !== t5 && o3.push(t5 ?? String(e5));
                continue;
              }
              const r4 = Xt(t4);
              "ok" === r4.kind ? (n3 ??= r4.meta, s3.push(e4.path)) : o3.push(r4.reason);
            }
            return { meta: n3, usablePaths: s3, unusableReasons: o3 };
          })(n2), c2 = (function(e3) {
            const { onDisk: t3, retired: r3 } = e3;
            if (void 0 === t3 || void 0 === r3) return t3 ?? r3;
            const n3 = t3.title ?? r3.title, s3 = t3.workspacePaths ?? r3.workspacePaths, o3 = Math.max(t3.updatedAtMs ?? 0, r3.updatedAtMs ?? 0), { title: i3, workspacePaths: a3, updatedAtMs: c3, ...l3 } = t3;
            return { ...l3, ...0 === o3 ? {} : { updatedAtMs: o3 }, ...void 0 === n3 ? {} : { title: n3 }, ...void 0 === s3 ? {} : { workspacePaths: s3 } };
          })({ onDisk: o2, retired: a2?.meta }), l2 = t2(c2) ?? c2;
          if (void 0 === l2) return true;
          const u2 = (function(e3, t3) {
            const r3 = Math.max(t3.existingUpdatedAtMs ?? e3.updatedAtMs ?? 0, t3.proposedUpdatedAtMs ?? 0), { updatedAtMs: n3, ...s3 } = e3;
            return { ...s3, ...0 === r3 ? {} : { updatedAtMs: r3 }, latestRootBlobIdHex: t3.committedRoot ?? e3.latestRootBlobIdHex };
          })(l2, { committedRoot: i2?.store.readCommittedRoot(), existingUpdatedAtMs: c2?.updatedAtMs, proposedUpdatedAtMs: r2 }), d2 = "ok" === s2.kind && Zt(u2) === Zt(s2.meta) ? s2.fingerprint : (function(e3, t3) {
            const r3 = zt(e3), n3 = `${r3}.${process.pid}.${(0, wt.randomUUID)()}.tmp`;
            try {
              vt.writeFileSync(n3, Zt(t3), { encoding: "utf8", mode: 384 });
              const e4 = er(vt.statSync(n3));
              return vt.renameSync(n3, r3), e4;
            } catch (e4) {
              throw vt.rmSync(n3, { force: true }), e4;
            }
          })(n2, u2);
          void 0 !== a2 && (!(function(e3) {
            for (const t3 of e3.usablePaths) vt.rmSync(t3, { force: true });
          })(a2), a2.unusableReasons.length > 0 && this.log.warn(`[hostStorage] leaving ${a2.unusableReasons.length} retired listing sidecar(s) of session ${e2} in place: not readable by this build (${a2.unusableReasons.join("; ")})`)), this.catalog.upsert(e2, u2, d2);
        } catch (t3) {
          this.log.error(`[hostStorage] failed to write the listing sidecar for session ${e2}`, t3);
        }
        return true;
      }
      noteRootAdvanced(e2) {
        const t2 = this.preparedSessions.get(e2);
        this.updateSidecar(e2, (e3) => e3 ?? (void 0 === t2 ? void 0 : this.sidecarFromManifest(t2, void 0, void 0)), this.clock.now());
        for (const t3 of this.rootAdvancedListeners) try {
          t3(e2);
        } catch (t4) {
          this.log.error(`[hostStorage] a root-advanced listener failed for session ${e2}`, t4);
        }
      }
      noteTitleChanged(e2, t2) {
        this.latestTitles.set(e2, t2);
        const r2 = this.preparedSessions.get(e2);
        void 0 !== r2 && this.writeHeldListingProjection(r2, { title: this.resolveTitle(e2, void 0) }), this.updateSidecar(e2, (t3) => {
          if (void 0 === t3) return;
          const r3 = this.resolveTitle(e2, t3), { title: n2, ...s2 } = t3;
          return void 0 === r3 ? s2 : { ...s2, title: r3 };
        });
      }
      noteArchivedChanged(e2, t2) {
        this.latestArchived.set(e2, t2);
        const r2 = this.preparedSessions.get(e2);
        void 0 !== r2 && this.writeHeldListingProjection(r2, { isArchived: t2 }), this.updateSidecar(e2, (e3) => void 0 === e3 ? void 0 : { ...e3, isArchived: t2 });
      }
      listNativeCatalogEntries(e2, t2, r2) {
        try {
          const n2 = this.instruments.time("list", t2 ?? (0, d.q6)(), () => this.catalog.list(e2, void 0 === r2 ? void 0 : (e3) => {
            const t3 = r2(cr(e3));
            return void 0 === t3 ? void 0 : { recency: t3.updatedAt ?? e3.updatedAtMs ?? Gt(e3.origin, e3.createdAtMs) };
          }).map(cr), (e3) => ({ resultCount: e3.length }));
          return this.instruments.distribution("list_result_count", n2.length), n2;
        } catch (e3) {
          return this.log.error("[hostStorage] failed to list host-owned sessions", e3), [];
        }
      }
      hasNativeCatalogEntries(e2) {
        try {
          return this.catalog.hasCatalogEntries(e2);
        } catch (e3) {
          return this.log.error("[hostStorage] failed to inspect host-owned session coverage", e3), false;
        }
      }
      getPreparedSessionStore(e2) {
        return this.preparedSessions.get(e2)?.store;
      }
      consumePreparedSessionStore(e2) {
        const t2 = this.preparedSessions.get(e2);
        if (void 0 !== t2) return t2.consumed = true, t2.store;
      }
      rollbackDanglingPreparedSession(e2) {
        const t2 = this.preparedSessions.get(e2);
        if (void 0 === t2 || t2.consumed) return false;
        const r2 = "seeded" === t2.kind && this.isStillOwnSeed(t2);
        return this.log.warn(`[hostStorage] rolling back the unconsumed ${t2.kind} store for session ${e2} (${r2 ? "removing it" : "closing it, the store is not this prepare's to remove"}); the session stays where it was`), r2 ? this.deleteSessionStorage(e2) : this.releaseSession(e2), true;
      }
      cleanupFailedSessionCreate(e2) {
        const t2 = this.preparedSessions.get(e2);
        if (void 0 === t2) return true;
        if (!t2.consumed) return this.rollbackDanglingPreparedSession(e2), true;
        const r2 = "seeded" === t2.kind && this.isStillOwnSeed(t2);
        return this.log.warn(`[hostStorage] cleaning up the consumed ${t2.kind} store after session create failed (${r2 ? "removing its unchanged seed" : "closing it, the store is not this create's to remove"})`), r2 ? this.deleteSessionStorage(e2) : (this.releaseSession(e2), true);
      }
      isStillOwnSeed(e2) {
        try {
          return e2.store.readCommittedRoot() === e2.store.getManifest().latestRootBlobIdHex;
        } catch {
          return false;
        }
      }
      getPreparedBlobStore(e2) {
        const t2 = this.preparedSessions.get(e2.sessionId) ?? this.preparedSessions.get(e2.rootSessionId) ?? (void 0 === e2.parentSessionId ? void 0 : this.preparedSessions.get(e2.parentSessionId));
        return t2?.store.getBlobStore();
      }
      hasPreparedSession(e2) {
        return this.preparedSessions.has(e2);
      }
      hasNativeSession(e2) {
        return this.preparedSessions.has(e2) || void 0 !== this.catalog.get(e2);
      }
      getNativeCatalogEntry(e2) {
        const t2 = this.catalog.get(e2);
        return void 0 === t2 ? void 0 : cr(t2);
      }
      releaseSession(e2) {
        const t2 = this.preparedSessions.get(e2);
        if (void 0 !== t2) {
          this.preparedSessions.delete(e2);
          try {
            t2.store.dispose();
          } catch (t3) {
            this.log.error(`[hostStorage] failed to dispose the store for session ${e2}`, t3);
          }
        }
      }
      deleteSessionStorage(e2) {
        const t2 = this.inFlightPrepares.get(e2);
        void 0 !== t2 && (t2.deleted = true), this.releaseSession(e2);
        try {
          this.storage.deleteSessionDir(e2);
        } catch (t3) {
          return this.log.error(`[hostStorage] failed to delete the storage for session ${e2}; it stays listed`, t3), false;
        }
        return this.log.info(`[hostStorage] deleted the host-owned storage for session ${e2}`), this.forgetSession(e2), true;
      }
      forgetDeletedSession(e2) {
        this.preparedSessions.has(e2) && this.log.warn(`[hostStorage] the host-owned storage for session ${e2} was deleted by another host; closing the store, no further host writes`), this.forgetSession(e2);
      }
      forgetSession(e2) {
        this.catalog.remove(e2), this.releaseSession(e2), this.latestTitles.delete(e2), this.latestArchived.delete(e2), this.notifyHostOwnedStorageChanged(e2, false);
      }
      dispose() {
        this.disposed = true;
        for (const e2 of [...this.preparedSessions.keys()]) this.releaseSession(e2);
        this.hostOwnedStorageListeners.clear(), this.rootAdvancedListeners.clear(), this.catalog.dispose();
      }
    }
    function pn(e2) {
      const t2 = e2.slice(0, 5).map((e3) => `${e3.blobIdHex.slice(0, 12)}…:${e3.kind}`).join(", ");
      return 0 === t2.length ? "" : `; first failures: ${t2}`;
    }
    function mn(e2) {
      const { code: t2, sqliteErrcode: r2 } = (0, $t.CA)(e2), n2 = [t2, r2].filter((e3) => void 0 !== e3);
      return 0 === n2.length ? "" : ` (${n2.join("/")})`;
    }
    function hn(e2) {
      if (void 0 === e2) return true;
      try {
        return 0 === Ie.Y9z.fromBinary(e2).turns.length;
      } catch {
        return false;
      }
    }
    function fn(e2) {
      return hn(e2.initialHistory) ? !e2.catalogHydrate || void 0 !== e2.initialHistory : true === e2.migrateSettledHistory && e2.catalogHydrate && (function(e3) {
        if (void 0 === e3) return false;
        try {
          return 0 === Ie.Y9z.fromBinary(e3).pendingToolCalls.length;
        } catch {
          return false;
        }
      })(e2.initialHistory);
    }
    var gn = __webpack_require__(65588), yn = __webpack_require__(11574), wn = __webpack_require__(86209), vn = __webpack_require__(77095);
    function _n(e2) {
      return async (t2, r2) => {
        const n2 = t2.message.trim();
        if (0 === n2.length) return;
        const s2 = await e2.routing.readTeamEnablement();
        if ("enabled" !== s2) throw new Error(`Private inference is ${s2} for this team`);
        const { catalog: o2, sessionProvider: i2 } = await e2.hydration(), a2 = new wn.G4({ modelId: t2.modelId, parameters: t2.modelParameters.map((e3) => new wn.SR({ id: e3.id, value: e3.value })) }), c2 = (0, vn.gV)(o2, a2), l2 = crypto.randomUUID(), u2 = (await i2({ model: c2, modelParameters: (0, vn.ir)(c2, a2), attemptRequestId: l2, originalRequestId: l2, signal: r2 })).promptSession.getExecutor();
        u2.appendMessages((0, yn.Y$)({ userRequest: n2, isSideChat: t2.isSideChat, maxChars: yn.oB }));
        const [p2, m2] = (0, d.q6)().withName("private_inference.chat_title").withCancel(), h2 = () => m2(r2.reason);
        r2.aborted ? h2() : r2.addEventListener("abort", h2, { once: true });
        try {
          const e3 = u2.stream(p2, void 0, void 0, {}), t3 = e3.response.then(() => {
          }, (e4) => e4 ?? new Error("Chat title request failed"));
          let r3 = "";
          for await (const t4 of e3.fullStream) "text-delta" === t4.type && (r3 += t4.textDelta);
          const n3 = await t3;
          if (void 0 !== n3) throw n3;
          const s3 = (0, yn.We)(r3);
          return s3.length > 0 ? s3 : void 0;
        } finally {
          r2.removeEventListener("abort", h2);
        }
      };
    }
    function An(e2) {
      return async () => {
        const t2 = await e2.retryNow();
        switch (t2.kind) {
          case "active":
            return t2;
          case "waiting":
            throw new Error(`Could not reach your private inference gateway at ${t2.baseUrl}.`);
          case "gave-up":
          case "failed":
            throw new Error(t2.detail);
        }
      };
    }
    var Sn = __webpack_require__(36672), bn = __webpack_require__(82714), En = __webpack_require__(88031);
    const In = "private-inference.toml";
    function Cn(e2) {
      return At.join((function(e3) {
        switch (e3) {
          case "darwin":
            return At.join("/Library", "Application Support", "Cursor");
          case "win32":
            return At.join("C:\\", "ProgramData", "Cursor");
          default:
            return At.join("/etc", "cursor");
        }
      })(e2), In);
    }
    function kn(e2) {
      try {
        return (0, vt.lstatSync)(e2), true;
      } catch (e3) {
        return !(e3 instanceof Error && "code" in e3 && "ENOENT" === e3.code);
      }
    }
    function xn(e2) {
      const t2 = (0, dt.hq)(e2.policyPath);
      if (void 0 !== t2) return (function(e3, t3) {
        return "win32" === t3 ? /^(?:[a-zA-Z]:[\\/]|\\\\)/.test(e3) : At.posix.isAbsolute(e3);
      })(t2, e2.platform) || (0, dt.zF)(`the managed policy path must be absolute (got ${JSON.stringify(t2)})`), { path: t2, source: "policy" };
      const r2 = Cn(e2.platform);
      if ((e2.fileExists ?? kn)(r2)) return { path: r2, source: "well-known" };
      const n2 = (0, dt.hq)(e2.env.CURSOR_PRIVATE_INFERENCE_CONFIG);
      return void 0 !== n2 ? { path: At.resolve(n2), source: "env" } : void 0;
    }
    var Tn = __webpack_require__(58072), Rn = __webpack_require__(63070);
    const Bn = "Private inference model", Pn = "Served by your private inference gateway.", Jn = "reasoning";
    function Mn(e2) {
      return void 0 === e2 ? { pickerModels: [], defaultModelId: "" } : { pickerModels: e2.models.map((e3) => (function(e4) {
        const t2 = (function(e5) {
          return void 0 !== e5 && e5.tiers.length > 0 ? e5 : void 0;
        })(e4.effort), r2 = (0, Rn.Rz)(e4), n2 = [...void 0 !== t2 ? [qn(t2)] : [], Dn(r2)];
        return new Tn.MSu({ name: e4.id, serverModelName: e4.providerModelId, defaultOn: true, clientDisplayName: e4.displayName, inputboxShortModelName: e4.displayName, supportsAgent: true, supportsPlanMode: true, supportsSandboxing: true, supportsMaxMode: false, supportsNonMaxMode: true, supportsCmdK: false, supportsSmartModeClassifier: true, supportsThinking: void 0 !== t2, supportsImages: e4.vision, tagline: Bn, namedModelSectionIndex: 0, legacySlugs: [], idAliases: [], cloudAgentEffortModes: [], parameterDefinitions: n2, variants: On(t2, r2, e4.displayName), tooltipData: { markdownContent: Un(e4, t2) } });
      })(e3).toJson()), defaultModelId: e2.defaultModelId };
    }
    function qn(e2) {
      return new Tn.UNk({ id: Jn, name: "Reasoning", markdownTooltip: "Controls how much reasoning effort the model uses.", parameterType: { enumParameter: { values: e2.tiers.map((e3) => ({ value: e3.id, displayName: Fn(e3) })) } }, isCycleableByHotkey: true });
    }
    function Dn(e2) {
      return new Tn.UNk({ id: Rn.Qt, name: "Context", markdownTooltip: void 0 === e2.longTokens ? "Context size the model has available." : "Context size the model has available. The larger window is billed at the provider's long-context rate.", parameterType: { enumParameter: { values: [{ value: String(e2.defaultTokens), displayName: (0, Rn.xF)(e2.defaultTokens) }, ...void 0 === e2.longTokens ? [] : [{ value: String(e2.longTokens), displayName: (0, Rn.xF)(e2.longTokens), increasesModelCost: true }]] } } });
    }
    function On(e2, t2, r2) {
      const n2 = e2?.tiers ?? [void 0], s2 = void 0 === t2.longTokens ? [t2.defaultTokens] : [t2.defaultTokens, t2.longTokens];
      return n2.flatMap((n3) => s2.map((s3) => {
        const o2 = [r2, ...void 0 !== n3 ? [Fn(n3)] : [], ...void 0 !== t2.longTokens && s3 === t2.longTokens ? [(0, Rn.xF)(s3)] : []].join(" "), i2 = (void 0 === n3 || n3.id === e2?.default) && s3 === t2.defaultTokens;
        return { parameterValues: [...void 0 !== n3 ? [{ id: Jn, value: n3.id }] : [], { id: Rn.Qt, value: String(s3) }], displayName: o2, displayNameOutsidePicker: o2, isMaxMode: false, isDefaultNonMaxConfig: i2, isDefaultMaxConfig: i2 };
      }));
    }
    const Nn = { none: "None", minimal: "Minimal", low: "Low", medium: "Medium", high: "High", xhigh: "Extra High", max: "Max" };
    function Fn(e2) {
      return e2.label ?? Nn[e2.id] ?? e2.id.charAt(0).toUpperCase() + e2.id.slice(1);
    }
    function Un(e2, t2) {
      return [Pn, `Context: ${e2.contextWindowTokens.toLocaleString()} tokens.`, void 0 !== e2.maxOutputTokens ? `Max output: ${e2.maxOutputTokens.toLocaleString()} tokens.` : void 0, void 0 !== t2 ? "Reasoning: supported." : void 0, e2.vision ? "Vision: supported." : void 0].filter((e3) => void 0 !== e3).join("\n\n");
    }
    function Ln(e2, t2) {
      return { ok: false, configErrorDetail: e2, createAgentHost: mt({ sessionProvider: void 0, catalog: void 0, configErrorDetail: e2, routing: t2 }) };
    }
    function $n(e2) {
      return (t2) => e2.attachToTurnContext(t2);
    }
    var Qn = __webpack_require__(91943);
    const jn = "agent_host_updater", Gn = "agent_host_updater_timing", Hn = "cursor.agentHost.updateMode", zn = "update.mode", Wn = "CURSOR_AGENT_HARNESS", Vn = "CURSOR_AGENT_HARNESS_ROOT", Kn = "agent-harness", Yn = "dogfood";
    async function Zn(e2) {
      if ("background-composer" === e2.remoteName) return { off: "background-composer remote", level: "trace" };
      const t2 = (function({ updateMode: e3, clientUpdateMode: t3 }) {
        if ("none" === e3) return `${Hn}=none`;
        if ("on" !== e3 && "none" === t3) return `${Hn}=default follows ${zn}=none`;
        return;
      })(e2);
      if (void 0 !== t2) return { off: t2, level: "info" };
      const r2 = e2.env[Wn];
      if ("0" === r2) return { off: `${Wn}=0`, level: "info" };
      if ("1" === r2) return { on: "env" };
      try {
        return await e2.isGateOn() ? { on: "gate" } : { off: `${jn} gate off`, level: "trace" };
      } catch (e3) {
        return { unknown: `failed to evaluate ${jn}: ${e3 instanceof Error ? e3.message : String(e3)}` };
      }
    }
    async function Xn(e2) {
      const { log: t2, env: r2 } = e2, n2 = await Zn(e2);
      if ("unknown" in n2) return void t2.error(`[agent-harness] off (${n2.unknown})`);
      if ("off" in n2) return void t2[n2.level](`[agent-harness] off (${n2.off})`);
      const { on: s2 } = n2, o2 = r2[Vn], i2 = void 0 !== o2 && "" !== o2.trim(), c2 = (0, w.XJ)({ developmentBuild: e2.isDevelopment, devKeySwitch: e2.devKeySwitch, clientVersion: e2.clientVersion });
      let l2;
      t2.info(`[agent-harness] on (${"env" === s2 ? `${Wn}=1` : `${jn} gate`}); module signatures ${c2.enforce ? "enforced" : "reported, not enforced"}${(function({ isDevelopment: e3, devKeySwitch: t3, clientVersion: r3 }) {
        return e3 ? " (release and dev keys)" : t3 ? (0, w.JM)(r3) ? ` (release and dev keys, ${w.zC})` : ` (release keys only; ${w.zC} ignored: version ${r3} is not a pre-release)` : "";
      })(e2)}; root ${i2 ? `from ${Vn}` : `<userData>/${Kn}`}`);
      try {
        l2 = await e2.readTiming();
      } catch (e3) {
        t2.error(`[agent-harness] ${Gn} not read; the agent host updater keeps its default timings`, e3);
      }
      const u2 = await (async function(e3) {
        try {
          const t3 = JSON.parse(await (0, Qn.readFile)((0, a.join)(e3, "product.json"), "utf8"));
          return "object" == typeof t3 && null !== t3 && "date" in t3 && "string" == typeof t3.date ? t3.date : void 0;
        } catch {
          return;
        }
      })(e2.appRoot);
      return { rootDir: i2 ? (0, a.resolve)(o2) : (0, a.resolve)(e2.globalStoragePath, "..", "..", "..", Kn), enabledBy: s2, clientVersion: e2.clientVersion, ...void 0 === l2 ? {} : { timing: l2 }, signatures: c2, ...void 0 === u2 ? {} : { staticFloorBuiltAt: u2 }, log: (e3) => t2.info(e3), loopLogContext: e2.loopLogContext, ...void 0 === e2.onModuleReverted ? {} : { onModuleReverted: e2.onModuleReverted }, ...void 0 === e2.enabled ? {} : { enabled: e2.enabled } };
    }
    function es(e2, t2, r2) {
      const n2 = t2();
      try {
        n2?.dispose();
      } catch (t3) {
        r2?.(e2, t3);
      }
    }
    const ts = (0, p.h)("renderer-request-context");
    function rs(e2, t2, r2) {
      if (void 0 === t2) return;
      if (true === r2?.ownRequestContext) return /* @__PURE__ */ (function(e3) {
        return async ({ ctx: t3, args: r3 }) => {
          const n3 = new c.CancellationTokenSource(), s2 = () => n3.cancel();
          t3.signal.aborted ? s2() : t3.signal.addEventListener("abort", s2, { once: true });
          try {
            const s3 = await e3(r3.toBinary(), n3.token);
            if (void 0 === s3) return;
            return ts.debug(t3, "Request context overlay pulled from the renderer"), (0, w.Z9)(s3);
          } catch (e4) {
            return void ts.warn(t3, "Renderer request context overlay unavailable; using the host base", { error: e4 instanceof Error ? e4.message : String(e4) });
          } finally {
            t3.signal.removeEventListener("abort", s2), n3.dispose();
          }
        };
      })(t2);
      const n2 = e2.get(l.MZM);
      e2.register(l.MZM, { execute: async (e3, r3, s2) => {
        const o2 = new c.CancellationTokenSource(), i2 = () => o2.cancel();
        e3.signal.aborted ? i2() : e3.signal.addEventListener("abort", i2, { once: true });
        try {
          const n3 = await t2(r3.toBinary(), o2.token);
          if (void 0 !== n3) return ts.debug(e3, "Request context served by the renderer"), new Br._G({ result: { case: "success", value: new Br.yW({ requestContext: Br.bb.fromBinary(n3) }) } });
        } catch (t3) {
          ts.warn(e3, "Renderer request context unavailable; using the host executor", { error: t3 instanceof Error ? t3.message : String(t3) });
        } finally {
          e3.signal.removeEventListener("abort", i2), o2.dispose();
        }
        return n2.execute(e3, r3, s2);
      } });
    }
    var ns = __webpack_require__(42358), ss = __webpack_require__(46862), os = __webpack_require__(31421), is = __webpack_require__(10493), as = __webpack_require__(95339);
    const cs = { BadConfigFile: "BadConfigFile", AuthenticationFailed: "AuthenticationFailed", NoUserNameConfigured: "NoUserNameConfigured", NoUserEmailConfigured: "NoUserEmailConfigured", NoRemoteRepositorySpecified: "NoRemoteRepositorySpecified", NotAGitRepository: "NotAGitRepository", NotAtRepositoryRoot: "NotAtRepositoryRoot", Conflict: "Conflict", StashConflict: "StashConflict", UnmergedChanges: "UnmergedChanges", PushRejected: "PushRejected", ForcePushWithLeaseRejected: "ForcePushWithLeaseRejected", ForcePushWithLeaseIfIncludesRejected: "ForcePushWithLeaseIfIncludesRejected", RemoteConnectionError: "RemoteConnectionError", DirtyWorkTree: "DirtyWorkTree", CantOpenResource: "CantOpenResource", GitNotFound: "GitNotFound", CantCreatePipe: "CantCreatePipe", PermissionDenied: "PermissionDenied", CantAccessRemote: "CantAccessRemote", RepositoryNotFound: "RepositoryNotFound", RepositoryIsLocked: "RepositoryIsLocked", BranchNotFullyMerged: "BranchNotFullyMerged", NoRemoteReference: "NoRemoteReference", InvalidBranchName: "InvalidBranchName", BranchAlreadyExists: "BranchAlreadyExists", NoLocalChanges: "NoLocalChanges", NoStashFound: "NoStashFound", LocalChangesOverwritten: "LocalChangesOverwritten", NoUpstreamBranch: "NoUpstreamBranch", IsInSubmodule: "IsInSubmodule", WrongCase: "WrongCase", CantLockRef: "CantLockRef", CantRebaseMultipleBranches: "CantRebaseMultipleBranches", PatchDoesNotApply: "PatchDoesNotApply", NoPathFound: "NoPathFound", UnknownPath: "UnknownPath", EmptyCommitMessage: "EmptyCommitMessage", BranchFastForwardRejected: "BranchFastForwardRejected", BranchNotYetBorn: "BranchNotYetBorn", TagConflict: "TagConflict", CherryPickEmpty: "CherryPickEmpty", CherryPickConflict: "CherryPickConflict", WorktreeContainsChanges: "WorktreeContainsChanges", WorktreeAlreadyExists: "WorktreeAlreadyExists", WorktreeBranchAlreadyUsed: "WorktreeBranchAlreadyUsed" };
    class ls extends Error {
      constructor(e2) {
        super(e2.error?.message || e2.message || "Git error"), this.error = e2.error, this.stdout = e2.stdout, this.stderr = e2.stderr, this.exitCode = e2.exitCode, this.gitErrorCode = e2.gitErrorCode, this.gitCommand = e2.gitCommand, this.gitArgs = e2.gitArgs;
      }
      toString() {
        let e2 = this.message + " " + JSON.stringify({ exitCode: this.exitCode, gitErrorCode: this.gitErrorCode, gitCommand: this.gitCommand, stdout: this.stdout, stderr: this.stderr }, null, 2);
        return this.error && (e2 += this.error.stack), (0, as.ix)(e2);
      }
    }
    function us(e2) {
      return (t2) => {
        /ENOENT/.test(t2.message) && (t2 = new ls({ error: t2, message: "Failed to execute git (ENOENT)", gitErrorCode: cs.NotAGitRepository })), e2(t2);
      };
    }
    var ds = __webpack_require__(44016);
    const ps = -86, ms = ["/usr/bin/git", "/opt/homebrew/bin/git"];
    function hs(e2) {
      return new Promise((t2, r2) => {
        let n2;
        try {
          n2 = os.spawn(e2, ["--version"]);
        } catch (t3) {
          return void r2(new Error((function(e3, t4) {
            const r3 = t4?.errno;
            return "darwin" === process.platform && r3 === ps ? `"${e3}" cannot run on this CPU architecture (EBADARCH). It is likely an Intel-only binary and Rosetta is not installed.` : `Executing "${e3} --version" failed: ${t4 instanceof Error ? t4.message : String(t4)}`;
          })(e2, t3)));
        }
        const s2 = [];
        n2.stdout.on("data", (e3) => s2.push(e3)), n2.on("error", us(r2)), n2.on("close", (n3, o2) => 0 !== n3 ? r2(new Error(`Executing "${e2} --version" failed with code ${n3}, signal ${o2}`)) : t2({ path: e2, version: (0, ds.ot)(Buffer.concat(s2).toString("utf8").trim()) }));
      });
    }
    function fs(e2, t2) {
      return t2(e2) ? hs(e2) : Promise.reject(new Error(`Path "${e2}" is invalid.`));
    }
    async function gs(e2, t2) {
      if ("/usr/bin/git" === e2) {
        const { error: e3 } = await new Promise((e4) => {
          os.exec("xcode-select -p", (t3, r2) => e4({ error: t3, stdout: r2.toString() }));
        });
        if (e3 && 2 === e3.code) throw new Error('Executing "xcode-select -p" failed with error code 2.');
      }
      return fs(e2, t2);
    }
    async function ys(e2, t2) {
      const { error: r2, stdout: n2 } = await new Promise((e3) => {
        os.exec("which git", (t3, r3) => e3({ error: t3, stdout: r3.toString() }));
      });
      if (r2) throw new Error(`Executing "which git" failed: ${r2.message}`);
      const s2 = n2.trim();
      try {
        return await gs(s2, e2);
      } catch (r3) {
        t2?.warn(`Unable to use git from the PATH: "${s2}". Error: ${r3.message}. Trying well-known native git installs.`);
        for (const r4 of ms) if (r4 !== s2) try {
          const n3 = await gs(r4, e2);
          return t2?.info(`Using git from "${n3.path}" instead of "${s2}".`), n3;
        } catch (e3) {
          t2?.info(`Unable to use git from "${r4}". Error: ${e3.message}`);
        }
        throw r3;
      }
    }
    function ws(e2, t2) {
      return e2 ? fs(At.join(e2, "Git", "cmd", "git.exe"), t2) : Promise.reject("Not found");
    }
    async function vs(e2) {
      return ws(process.env.ProgramW6432, e2).then(void 0, () => ws(process.env["ProgramFiles(x86)"], e2)).then(void 0, () => ws(process.env.ProgramFiles, e2)).then(void 0, () => ws(At.join(process.env.LocalAppData, "Programs"), e2)).then(void 0, () => (async function(e3) {
        return fs(await is("git.exe"), e3);
      })(e2));
    }
    async function _s(e2) {
      return (async function(e3, t2, r2) {
        for (const n3 of e3) try {
          return await fs(n3, t2);
        } catch (e4) {
          r2?.info(`Unable to find git on the PATH: "${n3}". Error: ${e4.message}`);
        }
        let n2;
        try {
          switch (process.platform) {
            case "darwin":
              return await ys(t2, r2);
            case "win32":
              return await vs(t2);
            default:
              return await fs(await is("git"), t2);
          }
        } catch (e4) {
          n2 = e4?.message ?? String(e4), r2?.warn(`Unable to find git. Error: ${n2}`);
        }
        throw new Error(n2 ? `Git installation not found. ${n2}` : "Git installation not found.");
      })([], () => true, e2);
    }
    var As = __webpack_require__(78474), Ss = __webpack_require__(73136), bs = __webpack_require__(66058), Es = __webpack_require__(30913);
    class Is extends Error {
      constructor() {
        super("Operation cancelled"), this.name = "CancelledError";
      }
    }
    class Cs {
      get onOutput() {
        return this._onOutput;
      }
      constructor(e2) {
        this._onOutput = new As.EventEmitter(), this.path = e2.gitPath, this.env = e2.env || {}, this.repoConfigExecution = e2.repoConfigExecution ?? "block", e2.onLog && this._onOutput.on("log", e2.onLog);
      }
      async exec(e2, t2, r2 = {}) {
        const n2 = { cwd: e2, ...r2 };
        return await this._exec(t2, n2);
      }
      async exec2(e2, t2 = {}) {
        return await this._exec(e2, t2);
      }
      stream(e2, t2, r2 = {}) {
        const n2 = { cwd: e2, ...r2 }, s2 = this.spawn(t2, n2);
        if (false !== r2.log) {
          const e3 = Date.now();
          s2.on("exit", () => {
            this.log(`> ${(0, as.Fh)(t2)} [${Date.now() - e3}ms]${s2.killed ? " (cancelled)" : ""}${this.policyLogSuffix()}
`);
          });
        }
        return s2;
      }
      policyLogSuffix() {
        return "allow-hooks" === this.repoConfigExecution ? " (hooks)" : "";
      }
      async _exec(e2, t2 = {}) {
        const r2 = this.spawn(e2, t2);
        t2.onSpawn?.(r2), t2.input && r2.stdin.end(t2.input, "utf8");
        const n2 = Date.now();
        let s2;
        try {
          s2 = await (async function(e3, t3) {
            if (!e3.stdout || !e3.stderr) throw new ls({ message: "Failed to get stdout or stderr from git process." });
            if (t3?.aborted) throw new Is();
            const r3 = [], n3 = (e4, t4, n4) => {
              e4.once(t4, n4), r3.push((0, ds.s)(() => e4.removeListener(t4, n4)));
            }, s3 = (e4, t4, n4) => {
              e4.on(t4, n4), r3.push((0, ds.s)(() => e4.removeListener(t4, n4)));
            };
            let o3 = Promise.all([new Promise((t4, r4) => {
              n3(e3, "error", us(r4)), n3(e3, "exit", t4);
            }), new Promise((t4) => {
              const r4 = [];
              s3(e3.stdout, "data", (e4) => r4.push(e4)), n3(e3.stdout, "close", () => t4(Buffer.concat(r4)));
            }), new Promise((t4) => {
              const r4 = [];
              s3(e3.stderr, "data", (e4) => r4.push(e4)), n3(e3.stderr, "close", () => t4(Buffer.concat(r4).toString("utf8")));
            })]);
            if (t3) {
              const n4 = new Promise((n5, s4) => {
                const o4 = () => {
                  try {
                    e3.kill();
                  } catch {
                  }
                  s4(new Is());
                };
                t3.aborted ? o4() : (t3.addEventListener("abort", o4, { once: true }), r3.push((0, ds.s)(() => t3.removeEventListener("abort", o4))));
              });
              o3 = Promise.race([o3, n4]);
            }
            try {
              const [e4, t4, r4] = await o3;
              return { exitCode: e4, stdout: t4, stderr: r4 };
            } finally {
              (0, ds.AS)(r3);
            }
          })(r2, t2.signal);
        } catch (t3) {
          throw t3 instanceof Is && this.log(`> ${(0, as.Fh)(e2)} [${Date.now() - n2}ms] (cancelled)
`), t3;
        }
        false !== t2.log && (this.log(`> ${(0, as.Fh)(e2)} [${Date.now() - n2}ms] ${t2.caller ? `(${t2.caller})` : ""}${this.policyLogSuffix()}
`), s2.stderr.length > 0 && this.log(`${(0, as.ix)(s2.stderr)}
`));
        const o2 = { exitCode: s2.exitCode, stdout: s2.stdout.toString("utf8"), stderr: s2.stderr };
        return s2.exitCode ? Promise.reject(new ls({ message: "Failed to execute git", stdout: o2.stdout, stderr: o2.stderr, exitCode: o2.exitCode, gitErrorCode: (i2 = o2.stderr, /Another git process seems to be running in this repository|If no other git process is currently running/.test(i2) ? cs.RepositoryIsLocked : /Authentication failed/i.test(i2) ? cs.AuthenticationFailed : /Not a git repository/i.test(i2) ? cs.NotAGitRepository : /bad config file/.test(i2) ? cs.BadConfigFile : /cannot make pipe for command substitution|cannot create standard input pipe/.test(i2) ? cs.CantCreatePipe : /Repository not found/.test(i2) ? cs.RepositoryNotFound : /unable to access/.test(i2) ? cs.CantAccessRemote : /branch '.+' is not fully merged/.test(i2) ? cs.BranchNotFullyMerged : /Couldn't find remote ref/.test(i2) ? cs.NoRemoteReference : /A branch named '.+' already exists/.test(i2) ? cs.BranchAlreadyExists : /'.+' is not a valid branch name/.test(i2) ? cs.InvalidBranchName : /Please,? commit your changes or stash them/.test(i2) ? cs.DirtyWorkTree : /contains modified or untracked files|use --force to delete it/.test(i2) ? cs.WorktreeContainsChanges : /fatal: '[^']+' already exists/.test(i2) ? cs.WorktreeAlreadyExists : /is already used by worktree at/.test(i2) ? cs.WorktreeBranchAlreadyUsed : void 0), gitCommand: (0, bs.s7)(e2) ?? e2[0], gitArgs: e2 })) : o2;
        var i2;
      }
      spawn(e2, t2 = {}) {
        if (!this.path) throw new Error("git could not be found in the system.");
        const r2 = { ...t2 };
        r2.stdio || t2.input || (r2.stdio = ["ignore", null, null]), r2.env = (0, Es.J)({ command: (0, bs.s7)(e2), spawnerEnv: this.env, optionsEnv: t2.env, repoConfigExecution: this.repoConfigExecution });
        const n2 = this.getCwd(t2);
        return n2 && (r2.cwd = (0, ds.vn)(n2)), os.spawn(this.path, e2, r2);
      }
      getCwd(e2) {
        const t2 = e2.cwd;
        return void 0 === t2 || "string" == typeof t2 ? t2 : t2 instanceof URL && "file:" === t2.protocol ? (0, Ss.fileURLToPath)(t2) : void 0;
      }
      log(e2) {
        this._onOutput.emit("log", e2);
      }
    }
    var ks = __webpack_require__(30306), xs = (e2, t2) => (t2 = Symbol[e2]) ? t2 : /* @__PURE__ */ Symbol.for("Symbol." + e2), Ts = (e2) => {
      throw TypeError(e2);
    }, Rs = (e2, t2, r2) => {
      var n2, s2;
      null != t2 ? ("object" != typeof t2 && "function" != typeof t2 && Ts("Object expected"), r2 && (n2 = t2[xs("asyncDispose")]), void 0 === n2 && (n2 = t2[xs("dispose")], r2 && (s2 = n2)), "function" != typeof n2 && Ts("Object not disposable"), s2 && (n2 = function() {
        try {
          s2.call(this);
        } catch (e3) {
          return Promise.reject(e3);
        }
      }), e2.push([r2, n2, t2])) : r2 && e2.push([r2]);
      return t2;
    }, Bs = (e2, t2, r2) => {
      var n2 = "function" == typeof SuppressedError ? SuppressedError : function(e3, t3, r3, n3) {
        return (n3 = Error(r3)).name = "SuppressedError", n3.error = e3, n3.suppressed = t3, n3;
      }, s2 = (e3) => t2 = r2 ? new n2(e3, t2, "An error was suppressed during disposal") : (r2 = true, e3), o2 = (n3) => {
        for (; n3 = e2.pop(); ) try {
          var i2 = n3[1] && n3[1].call(n3[2]);
          if (n3[0]) return Promise.resolve(i2).then(o2, (e3) => (s2(e3), o2()));
        } catch (e3) {
          s2(e3);
        }
        if (r2) throw t2;
      };
      return o2();
    };
    async function Ps() {
      const e2 = c.extensions.getExtension("vscode.git");
      if (!e2) return;
      const t2 = e2.isActive ? e2.exports : await e2.activate();
      return t2 && t2.enabled ? t2.getAPI(1) : void 0;
    }
    class Js {
      constructor(e2) {
        this.vscodeGitExtension = e2;
      }
      async exec(e2, t2, r2, n2) {
        var s2 = [];
        try {
          if (!this.vscodeGitExtension) throw new l.YH2("Failed to execute git command because there is no available Git API. Ensure there is a reachable git installation on the workspace system.");
          Rs(s2, (0, m.VI)(e2.withName("VscodeGitExecutor.exec"), { attributes: { "git.cwd": t2, "git.args": r2, "git.caller": n2?.caller } }));
          return await this.vscodeGitExtension.rawGit.exec(t2, r2, n2);
        } catch (e3) {
          var o2 = e3, i2 = true;
        } finally {
          Bs(s2, o2, i2);
        }
      }
    }
    class Ms {
      constructor(e2) {
        this.spawnerPromise = e2;
      }
      async exec(e2, t2, r2, n2) {
        var s2 = [];
        try {
          let c3;
          var o2 = [];
          try {
            Rs(o2, (0, m.VI)(e2.withName("GitCoreVscodeGitExecutor await git spawner")));
            c3 = await this.spawnerPromise;
          } catch (e3) {
            var i2 = e3, a2 = true;
          } finally {
            Bs(o2, i2, a2);
          }
          if (void 0 === c3) throw new l.YH2("Failed to execute git command because there is no available GitSpawner. Ensure there is a reachable git installation on the workspace system.");
          Rs(s2, (0, m.VI)(e2.withName("VscodeGitExecutor.exec"), { attributes: { "git.cwd": t2, "git.args": r2, "git.caller": n2?.caller } }));
          return await c3.exec(t2, r2, n2);
        } catch (e3) {
          var c2 = e3, u2 = true;
        } finally {
          Bs(s2, c2, u2);
        }
      }
    }
    var qs = __webpack_require__(38669);
    var Ds = __webpack_require__(64472);
    const Os = c.env.remoteName ? `lease_connection:${c.env.remoteName}` : "lease_connection:local";
    let Ns = "unknown";
    function Fs(e2) {
      Ns = e2;
    }
    function Us(e2, t2, r2 = "distribution", n2) {
      try {
        const s2 = n2?.some((e3) => e3.startsWith("mcp_version:")), o2 = [Os, ...s2 ? [] : ["mcp_version:snapshots"], ...n2 ?? []];
        "distribution" === r2 ? c.cursor.metricsDistribution({ stat: e2, value: t2, tags: o2 }) : c.cursor.metricsIncrement({ stat: e2, value: t2, tags: o2 });
      } catch {
      }
    }
    function Ls(e2, t2, r2, n2) {
      return (0, m.uj)((r2 ?? (0, d.q6)()).withName(e2), async (r3, s2) => {
        const o2 = Date.now();
        s2.setAttribute("mcp.op.name", e2), s2.setAttribute("mcp.lease.type", Ns), s2.setAttribute("mcp.lease.connection", Os);
        try {
          const r4 = await Promise.resolve(t2()), i2 = Date.now() - o2;
          return s2.setAttribute("mcp.op.duration_ms", String(i2)), s2.setAttribute("mcp.op.outcome", "success"), ks.gW.trace(`[mcp] ${e2} completed outcome=success duration_ms=${i2} lease_type=${Ns} ${Os}`), Us("mcp.ipc.duration_ms", i2, "distribution", [`name:${e2}`, "outcome:success", ...n2 ?? []]), Us("mcp.ipc.count", 1, "increment", [`name:${e2}`, "outcome:success", ...n2 ?? []]), r4;
        } catch (t3) {
          const r4 = Date.now() - o2;
          throw s2.setAttribute("mcp.op.duration_ms", String(r4)), s2.setAttribute("mcp.op.outcome", "error"), ks.gW.error(`[mcp] ${e2} completed outcome=error duration_ms=${r4} lease_type=${Ns} ${Os}`, t3), Us("mcp.ipc.duration_ms", r4, "distribution", [`name:${e2}`, "outcome:error", ...n2 ?? []]), Us("mcp.ipc.count", 1, "increment", [`name:${e2}`, "outcome:error", ...n2 ?? []]), t3;
        }
      });
    }
    function $s(e2, t2, r2) {
      ks.gW.info(`[mcp] lease selected lease_type=${e2} reason=${t2} ${Os}`), (0, Ds.b)({ subkey: "agent_exec", message: "MCP agent-exec lease selected", metadata: { event: "mcp_agent_exec_lease_selected", lease_type: e2, lease_reason: t2, lease_connection: Os, ...r2 } });
    }
    var Qs = __webpack_require__(34175);
    function js(e2, t2) {
      const r2 = [], n2 = /* @__PURE__ */ new Set();
      for (const s2 of t2) {
        n2.add(s2.serverIdentifier);
        const t3 = e2.get(s2.serverIdentifier);
        void 0 !== t3 && t3 === s2.snapshotGeneration || r2.push(s2), e2.set(s2.serverIdentifier, s2.snapshotGeneration);
      }
      for (const t3 of Array.from(e2.keys())) n2.has(t3) || e2.delete(t3);
      return r2;
    }
    var Gs = __webpack_require__(15599);
    var Hs = __webpack_require__(77099);
    class zs {
      constructor(e2, t2, r2 = []) {
        this.tools = e2, this.ctx = t2, this.extraMetricTags = r2;
      }
      async execute(e2, t2, r2, n2) {
        const s2 = this.tools.find((t3) => t3.name === e2);
        if (!s2) throw new Hs.U$(e2, this.tools.map((e3) => e3.name));
        return Ls("workbench_toolset.execute", async () => {
          const e3 = n2?.createProvider(s2.providerIdentifier, s2.toolName, r2), o2 = e3 ? async (t3) => e3.elicit({ message: t3.message, requestedSchema: t3.requestedSchema }) : void 0, { serializableContext: i2, cancellationTokenSource: a2, dispose: l2 } = (0, Gs.A)(this.ctx);
          try {
            const e4 = await c.cursor.callMcpLeaseTool(s2.clientKey, s2.toolName, t2, r2, i2, a2.token, o2, i2.composerId);
            return { content: e4.content, isError: e4.isError, structuredContent: e4.structuredContent };
          } finally {
            l2();
          }
        }, this.ctx, this.extraMetricTags);
      }
      getTools() {
        return this.tools;
      }
    }
    const Ws = ["mcp_version:snapshots"];
    class Vs {
      constructor(e2, t2) {
        this.snapshot = e2, this.serverIdentifier = e2.serverIdentifier, this.serverName = e2.serverName, this.config = (function(e3) {
          if (e3) return e3.command ? { command: e3.command, args: e3.args } : e3.url ? { url: e3.url } : void 0;
        })(t2);
      }
      async getTools(e2) {
        return this.snapshot.tools.map((e3) => ({ name: e3.name, description: e3.description, inputSchema: e3.inputSchema, outputSchema: e3.outputSchema, annotations: e3.annotations }));
      }
      async callTool(e2, t2, r2, n2, s2) {
        return Ls("snapshot_client.call_tool", async () => {
          const { serializableContext: o2, cancellationTokenSource: i2, dispose: a2 } = (0, Gs.A)(e2);
          try {
            const e3 = s2 ? async (e4) => s2.elicit({ message: e4.message, requestedSchema: e4.requestedSchema }) : void 0, a3 = await c.cursor.callMcpLeaseTool(this.serverIdentifier, t2, r2, n2, o2, i2.token, e3, o2.composerId);
            return { content: a3.content, isError: a3.isError, structuredContent: a3.structuredContent };
          } finally {
            a2();
          }
        }, e2, Ws);
      }
      async getInstructions(e2) {
        return this.snapshot.instructions ?? void 0;
      }
      async getState(e2) {
        switch (this.snapshot.status) {
          case "connected":
          case "degraded":
            return { kind: "ready" };
          case "needsAuth":
            return { kind: "requires_authentication", url: this.snapshot.statusDetail ?? "", callback: async () => {
            } };
          case "error":
            return { kind: "error", message: this.snapshot.statusDetail };
          default:
            return { kind: "loading" };
        }
      }
      async listResources(e2) {
        return { resources: this.snapshot.resources };
      }
      async readResource(e2, t2) {
        return Ls("snapshot_client.read_resource", async () => {
          const { serializableContext: r2, cancellationTokenSource: n2, dispose: s2 } = (0, Gs.A)(e2);
          try {
            return c.cursor.readMcpLeaseResource(this.serverIdentifier, t2.uri, r2, n2.token);
          } finally {
            s2();
          }
        }, e2, Ws);
      }
      async listPrompts(e2) {
        return this.snapshot.prompts;
      }
      async getPrompt(e2, t2, r2) {
        return Ls("snapshot_client.get_prompt", async () => {
          const { serializableContext: n2, cancellationTokenSource: s2, dispose: o2 } = (0, Gs.A)(e2);
          try {
            return c.cursor.getMcpLeasePrompt(this.serverIdentifier, t2, r2, n2, s2.token);
          } finally {
            o2();
          }
        }, e2, Ws);
      }
    }
    class Ks {
      constructor() {
        this.changeListeners = /* @__PURE__ */ new Set(), this.snapshotLeaseProvider = new Ys(), this.mergedNotifyFlush = false, this.disposed = false, this.leaseChangeDisposable = c.cursor.registerMcpLeaseChangeListener();
        const e2 = c.cursor.onDidChangeMcpLease((e3) => {
          this.serverConfigsPromise = void 0, this.scheduleMergedNotify((function(e4) {
            return void 0 === e4 ? { serverIdentifiers: void 0, reason: c.cursor.McpLeaseChangeReason.Unknown } : { serverIdentifiers: e4.serverIdentifiers ? [...e4.serverIdentifiers] : void 0, reason: e4.reason };
          })(e3));
        }), t2 = c.cursor.onDidChangeMcpSnapshots((e3) => {
          this.serverConfigsPromise = void 0, this.scheduleMergedNotify({ serverIdentifiers: e3 ? [...e3] : void 0, reason: c.cursor.McpLeaseChangeReason.Snapshots });
        }), r2 = this.leaseChangeDisposable.dispose.bind(this.leaseChangeDisposable);
        this.leaseChangeDisposable = { dispose: () => {
          r2(), e2.dispose(), t2.dispose();
        } };
      }
      get snapshotProvider() {
        return this.snapshotLeaseProvider;
      }
      scheduleMergedNotify(e2) {
        this.disposed || (this.mergedNotifyPending = (0, l.sfj)(this.mergedNotifyPending, e2), this.mergedNotifyFlush || (this.mergedNotifyFlush = true, queueMicrotask(() => {
          if (this.mergedNotifyFlush = false, this.disposed) return;
          const e3 = this.mergedNotifyPending;
          this.mergedNotifyPending = void 0, void 0 !== e3 && this.fireDidChange(e3);
        })));
      }
      onDidChange(e2) {
        return this.changeListeners.add(e2), { dispose: () => {
          this.changeListeners.delete(e2);
        } };
      }
      fireDidChange(e2) {
        for (const t2 of this.changeListeners) try {
          t2(e2);
        } catch (e3) {
          ks.gW.error("Error in MCP snapshot change listener", e3);
        }
      }
      getServerConfigs(e2) {
        if (!this.serverConfigsPromise) {
          let t2;
          t2 = (async () => {
            const r2 = /* @__PURE__ */ new Map();
            try {
              const t3 = await c.cursor.getMcpLeaseServers(e2);
              for (const e3 of t3) e3.config && r2.set(e3.identifier, e3.config);
            } catch (e3) {
              Us("mcp.snapshot.server_config_resolve_error", 1, "increment"), ks.gW.error("Failed to resolve MCP server configs for hook payloads", e3), this.serverConfigsPromise === t2 && (this.serverConfigsPromise = void 0);
            }
            return r2;
          })(), this.serverConfigsPromise = t2;
        }
        return this.serverConfigsPromise;
      }
      async getClients(e2) {
        return Ls("snapshot_lease.get_clients", async () => {
          const t2 = (0, Gs.A)(e2);
          try {
            const [e3, r2] = await Promise.all([c.cursor.getMcpSnapshots(t2.serializableContext), this.getServerConfigs(t2.serializableContext)]), n2 = {};
            for (const t3 of e3) n2[t3.serverIdentifier] = new Vs(t3, r2.get(t3.serverIdentifier));
            return n2;
          } finally {
            t2.dispose();
          }
        }, e2, Ws);
      }
      async getClient(e2, t2) {
        return Ls("snapshot_lease.get_client", async () => {
          const r2 = (0, Gs.A)(e2);
          try {
            const [e3, n2] = await Promise.all([c.cursor.getMcpSnapshot(t2, r2.serializableContext), this.getServerConfigs(r2.serializableContext)]);
            let s2 = e3;
            if (!s2) {
              s2 = (await c.cursor.getMcpSnapshots(r2.serializableContext)).find((e4) => e4.serverName === t2);
            }
            return s2 ? new Vs(s2, n2.get(s2.serverIdentifier)) : void 0;
          } finally {
            r2.dispose();
          }
        }, e2, Ws);
      }
      async getInstructions(e2) {
        return Ls("snapshot_lease.get_instructions", async () => {
          const { serializableContext: t2, dispose: r2 } = (0, Gs.A)(e2);
          try {
            return (await c.cursor.getMcpSnapshots(t2)).filter((e3) => void 0 !== e3.instructions && e3.instructions.trim().length > 0).map((e3) => new Qs.I0({ serverName: e3.serverName, instructions: e3.instructions.trim(), serverIdentifier: e3.serverIdentifier }));
          } finally {
            r2();
          }
        }, e2, Ws);
      }
      async getTools(e2) {
        return Ls("snapshot_lease.get_tools", async () => {
          const { serializableContext: t2, dispose: r2 } = (0, Gs.A)(e2);
          try {
            const e3 = await c.cursor.getMcpSnapshotTools(t2), r3 = [];
            for (const t3 of e3) for (const e4 of t3.tools) r3.push({ name: `${t3.serverIdentifier}-${e4.name}`, description: e4.description, inputSchema: e4.inputSchema, outputSchema: e4.outputSchema, clientKey: t3.serverIdentifier, providerIdentifier: t3.serverName, plugin: t3.plugin, marketplace: t3.marketplace, pluginId: t3.pluginId, marketplaceId: t3.marketplaceId, toolName: e4.name, ..."internal" === t3.source ? { source: "internal" } : {} });
            return r3;
          } finally {
            r2();
          }
        }, e2, Ws);
      }
      async getToolsForServers(e2, t2) {
        const r2 = new Set(t2);
        return (await this.getTools(e2)).filter((e3) => r2.has(e3.clientKey));
      }
      async getToolSet(e2) {
        const t2 = await this.getTools(e2);
        return new zs(t2, e2, Ws);
      }
      dispose() {
        this.disposed || (this.disposed = true, this.serverConfigsPromise = void 0, this.leaseChangeDisposable && (this.leaseChangeDisposable.dispose(), this.leaseChangeDisposable = void 0), this.changeListeners.clear());
      }
    }
    class Ys {
      constructor() {
        this.knownGenerations = /* @__PURE__ */ new Map();
      }
      async getSnapshot(e2, t2) {
        return Ls("snapshot_provider.get_snapshot", async () => {
          const r2 = (0, Gs.A)(e2);
          try {
            const e3 = await c.cursor.getMcpSnapshot(t2, r2.serializableContext);
            return e3 ? this.knownGenerations.set(e3.serverIdentifier, e3.snapshotGeneration) : this.knownGenerations.delete(t2), e3 ? Zs(e3) : void 0;
          } finally {
            r2.dispose();
          }
        }, e2, Ws);
      }
      async getAllSnapshots(e2) {
        return Ls("snapshot_provider.get_all_snapshots", async () => {
          const t2 = (0, Gs.A)(e2);
          try {
            const e3 = await c.cursor.getMcpSnapshots(t2.serializableContext);
            return js(this.knownGenerations, e3), e3.map(Zs);
          } finally {
            t2.dispose();
          }
        }, e2, Ws);
      }
      onDidChange(e2) {
        return c.cursor.onDidChangeMcpSnapshots(async () => {
          const t2 = Date.now(), r2 = await c.cursor.getMcpSnapshots(), n2 = Date.now() - t2, s2 = js(this.knownGenerations, r2);
          Us("mcp.ipc.duration_ms", n2, "distribution", ["name:snapshot_provider.notify_pull", "outcome:success", "mcp_version:snapshots"]), Us("mcp.ipc.count", 1, "increment", ["name:snapshot_provider.notify_pull", "outcome:success", "mcp_version:snapshots"]), Us("mcp.snapshot.notify_pull_changed_count", s2.length, "distribution", Ws);
          for (const t3 of s2) e2(Zs(t3));
        });
      }
    }
    function Zs(e2) {
      return { serverIdentifier: e2.serverIdentifier, serverName: e2.serverName, plugin: e2.plugin, marketplace: e2.marketplace, pluginId: e2.pluginId, marketplaceId: e2.marketplaceId, status: e2.status, statusDetail: e2.statusDetail, tools: e2.tools.map((e3) => ({ name: e3.name, description: e3.description, inputSchema: e3.inputSchema, outputSchema: e3.outputSchema, annotations: e3.annotations })), resources: e2.resources, prompts: e2.prompts, instructions: e2.instructions, snapshotGeneration: e2.snapshotGeneration };
    }
    const Xs = ["mcp_version:vscode_lease"];
    class eo {
      constructor() {
        this.changeListeners = /* @__PURE__ */ new Set(), this.mainThreadLeaseRegistration = c.cursor.registerMcpLeaseChangeListener(), this.mcpLeasePromise = (async () => {
          const e2 = c.extensions.getExtension("anysphere.cursor-mcp");
          if (!e2) throw new Error("cursor-mcp extension is not installed or not available");
          e2.isActive || await e2.activate();
          const t2 = e2.exports;
          if (!t2) throw new Error("cursor-mcp extension API is not available");
          const r2 = t2.getMcpLease();
          return this.leaseChangeDisposable = r2.onDidChange((e3) => {
            this.fireDidChange(e3);
          }), r2;
        })();
      }
      onDidChange(e2) {
        return this.changeListeners.add(e2), { dispose: () => {
          this.changeListeners.delete(e2);
        } };
      }
      fireDidChange(e2) {
        for (const t2 of this.changeListeners) try {
          t2(e2);
        } catch (e3) {
          ks.gW.error("Error in MCP change listener", e3);
        }
      }
      async getMcpLease() {
        return this.mcpLeasePromise;
      }
      async getClients(e2) {
        return Ls("vscode_lease.get_clients", async () => (await this.getMcpLease()).getClients(e2), e2, Xs);
      }
      async getClient(e2, t2) {
        return Ls("vscode_lease.get_client", async () => (await this.getMcpLease()).getClient(e2, t2), e2, Xs);
      }
      async getInstructions(e2) {
        return Ls("vscode_lease.get_instructions", async () => (await this.getMcpLease()).getInstructions(e2), e2, Xs);
      }
      async getTools(e2) {
        return Ls("vscode_lease.get_tools", async () => (await this.getMcpLease()).getTools(e2), e2, Xs);
      }
      async getToolsForServers(e2, t2) {
        return Ls("vscode_lease.get_tools_for_servers", async () => {
          const r2 = await this.getMcpLease();
          if ("getToolsForServers" in r2 && "function" == typeof r2.getToolsForServers) return r2.getToolsForServers(e2, t2);
          const n2 = new Set(t2);
          return (await r2.getTools(e2)).filter((e3) => n2.has(e3.clientKey));
        }, e2, Xs);
      }
      async getToolSet(e2) {
        return Ls("vscode_lease.get_tool_set", async () => (await this.getMcpLease()).getToolSet(e2), e2, Xs);
      }
      dispose() {
        this.leaseChangeDisposable && (this.leaseChangeDisposable.dispose(), this.leaseChangeDisposable = void 0), this.mainThreadLeaseRegistration.dispose(), this.changeListeners.clear();
      }
    }
    function to(e2) {
      if (!(0, l.anv)(e2)) return false;
      const t2 = e2;
      return "function" == typeof t2.dispose && (void 0 === t2.snapshotProvider || (0, l.Yg2)(t2.snapshotProvider));
    }
    var ro = (e2, t2) => (t2 = Symbol[e2]) ? t2 : /* @__PURE__ */ Symbol.for("Symbol." + e2), no = (e2) => {
      throw TypeError(e2);
    }, so = (e2, t2, r2) => {
      var n2, s2;
      null != t2 ? ("object" != typeof t2 && "function" != typeof t2 && no("Object expected"), r2 && (n2 = t2[ro("asyncDispose")]), void 0 === n2 && (n2 = t2[ro("dispose")], r2 && (s2 = n2)), "function" != typeof n2 && no("Object not disposable"), s2 && (n2 = function() {
        try {
          s2.call(this);
        } catch (e3) {
          return Promise.reject(e3);
        }
      }), e2.push([r2, n2, t2])) : r2 && e2.push([r2]);
      return t2;
    }, oo = (e2, t2, r2) => {
      var n2 = "function" == typeof SuppressedError ? SuppressedError : function(e3, t3, r3, n3) {
        return (n3 = Error(r3)).name = "SuppressedError", n3.error = e3, n3.suppressed = t3, n3;
      }, s2 = (e3) => t2 = r2 ? new n2(e3, t2, "An error was suppressed during disposal") : (r2 = true, e3), o2 = (n3) => {
        for (; n3 = e2.pop(); ) try {
          var i2 = n3[1] && n3[1].call(n3[2]);
          if (n3[0]) return Promise.resolve(i2).then(o2, (e3) => (s2(e3), o2()));
        } catch (e3) {
          s2(e3);
        }
        if (r2) throw t2;
      };
      return o2();
    };
    function io(e2) {
      return Fs("snapshot"), Us("mcp.agent_exec.lease_selected", 1, "increment", ["lease_type:snapshot", `reason:${e2}`]), $s("snapshot", e2), new Ks();
    }
    async function ao(e2) {
      var t2 = [];
      try {
        const r3 = so(t2, (0, m.VI)(e2.withName("getVscodeMcpLease"))).span;
        if (void 0 === c.env.remoteName) return r3.setAttribute("mcp.lease.type", "snapshot"), r3.setAttribute("mcp.lease.reason", "local"), io("local");
        try {
          const e3 = await (async function() {
            const e4 = c.extensions.getExtension("anysphere.cursor-mcp");
            if (e4 && (e4.isActive || await e4.activate(), e4.exports)) return new eo();
          })();
          if (e3) return Fs("vscode"), r3.setAttribute("mcp.lease.type", "vscode"), Us("mcp.agent_exec.lease_selected", 1, "increment", ["lease_type:vscode"]), $s("vscode", "vscode_lease_available", { shared_process_gate_enabled: false }), e3;
        } catch {
        }
        return r3.setAttribute("mcp.lease.type", "snapshot"), r3.setAttribute("mcp.lease.reason", "vscode_lease_unavailable"), io("vscode_lease_unavailable");
      } catch (e3) {
        var r2 = e3, n2 = true;
      } finally {
        oo(t2, r2, n2);
      }
    }
    var co = __webpack_require__(71385);
    const lo = "cursorAgentHost.durableTaskInvocation.v1.";
    function uo(e2, t2) {
      const r2 = /* @__PURE__ */ new Map(), n2 = async (e3, t3) => {
        const n3 = r2.get(e3) ?? Promise.resolve();
        let s3;
        const o2 = new Promise((e4) => {
          s3 = e4;
        });
        r2.set(e3, o2), await n3;
        try {
          return await t3();
        } finally {
          s3(), r2.get(e3) === o2 && r2.delete(e3);
        }
      }, s2 = (t3) => (function(e3) {
        if ("object" != typeof e3 || null === e3 || !("kind" in e3) || !("childSessionId" in e3) || "string" != typeof e3.childSessionId) return;
        if ("started" === e3.kind || "checkpointed" === e3.kind) return { kind: e3.kind, childSessionId: e3.childSessionId };
        if ("completed" === e3.kind && "outcome" in e3 && "object" == typeof e3.outcome && null !== e3.outcome && "status" in e3.outcome && ("completed" === e3.outcome.status || "background" === e3.outcome.status)) return { kind: "completed", childSessionId: e3.childSessionId, outcome: e3.outcome };
        return;
      })(e2.get(t3));
      return { async claim(r3) {
        const o2 = po(r3);
        return n2(o2, async () => {
          const n3 = s2(o2);
          if (void 0 !== n3) {
            if (false !== ("started" === n3.kind || void 0 === t2 || await t2({ parentSessionId: r3.parentSessionId, rootSessionId: r3.rootSessionId, parentToolCallId: r3.parentToolCallId, childSessionId: n3.childSessionId }))) return { kind: "existing", invocation: n3 };
          }
          const i2 = { kind: "started", childSessionId: r3.proposedChildSessionId };
          return await e2.update(o2, i2), { kind: "claimed", invocation: i2 };
        });
      }, async markCheckpointed(t3) {
        const r3 = po(t3);
        await n2(r3, async () => {
          const n3 = s2(r3);
          "started" === n3?.kind && n3.childSessionId === t3.childSessionId && await e2.update(r3, { kind: "checkpointed", childSessionId: n3.childSessionId });
        });
      }, async markCompleted(t3) {
        const r3 = po(t3);
        await n2(r3, async () => {
          const n3 = s2(r3);
          void 0 !== n3 && "completed" !== n3.kind && n3.childSessionId === t3.childSessionId && await e2.update(r3, { kind: "completed", childSessionId: n3.childSessionId, outcome: t3.outcome });
        });
      } };
    }
    function po(e2) {
      const t2 = (0, o.createHash)("sha256").update(e2.parentSessionId).update("\0").update(e2.parentToolCallId).digest("hex");
      return `${lo}${t2}`;
    }
    function mo(e2) {
      return { remoteName: e2.remoteName };
    }
    function ho(e2) {
      return "string" == typeof e2 && e2.length > 0;
    }
    function fo(e2) {
      return { kind: "external", agentTransport: e2.createExternal(e2.connectTransport), ...void 0 === e2.agentBackendUrl ? {} : { agentBackendUrl: e2.agentBackendUrl } };
    }
    const go = "remoteInferenceRoute", yo = "cursorAgentHost.remoteInferenceRoute", wo = "auto";
    var vo = __webpack_require__(1444);
    var _o = __webpack_require__(28634), Ao = __webpack_require__(61933), So = __webpack_require__(90212), bo = __webpack_require__(95595);
    Object.freeze({ status: "aborted" });
    function Eo(e2, t2, r2) {
      function n2(r3, n3) {
        if (r3._zod || Object.defineProperty(r3, "_zod", { value: { def: n3, constr: i2, traits: /* @__PURE__ */ new Set() }, enumerable: false }), r3._zod.traits.has(e2)) return;
        r3._zod.traits.add(e2), t2(r3, n3);
        const s3 = i2.prototype, o3 = Object.keys(s3);
        for (let e3 = 0; e3 < o3.length; e3++) {
          const t3 = o3[e3];
          t3 in r3 || (r3[t3] = s3[t3].bind(r3));
        }
      }
      const s2 = r2?.Parent ?? Object;
      class o2 extends s2 {
      }
      function i2(e3) {
        var t3;
        const s3 = r2?.Parent ? new o2() : this;
        n2(s3, e3), (t3 = s3._zod).deferred ?? (t3.deferred = []);
        for (const e4 of s3._zod.deferred) e4();
        return s3;
      }
      return Object.defineProperty(o2, "name", { value: e2 }), Object.defineProperty(i2, "init", { value: n2 }), Object.defineProperty(i2, Symbol.hasInstance, { value: (t3) => !!(r2?.Parent && t3 instanceof r2.Parent) || t3?._zod?.traits?.has(e2) }), Object.defineProperty(i2, "name", { value: e2 }), i2;
    }
    /* @__PURE__ */ Symbol("zod_brand");
    class Io extends Error {
      constructor() {
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
      }
    }
    class Co extends Error {
      constructor(e2) {
        super(`Encountered unidirectional transform during encode: ${e2}`), this.name = "ZodEncodeError";
      }
    }
    const ko = {};
    function xo(e2) {
      return e2 && Object.assign(ko, e2), ko;
    }
    function To(e2) {
      const t2 = Object.values(e2).filter((e3) => "number" == typeof e3);
      return Object.entries(e2).filter(([e3, r2]) => -1 === t2.indexOf(+e3)).map(([e3, t3]) => t3);
    }
    function Ro(e2, t2 = "|") {
      return e2.map((e3) => Ko(e3)).join(t2);
    }
    function Bo(e2, t2) {
      return "bigint" == typeof t2 ? t2.toString() : t2;
    }
    function Po(e2) {
      return { get value() {
        {
          const t2 = e2();
          return Object.defineProperty(this, "value", { value: t2 }), t2;
        }
      } };
    }
    function Jo(e2) {
      return null == e2;
    }
    function Mo(e2) {
      const t2 = e2.startsWith("^") ? 1 : 0, r2 = e2.endsWith("$") ? e2.length - 1 : e2.length;
      return e2.slice(t2, r2);
    }
    const qo = /* @__PURE__ */ Symbol("evaluating");
    function Do(e2, t2, r2) {
      let n2;
      Object.defineProperty(e2, t2, { get() {
        if (n2 !== qo) return void 0 === n2 && (n2 = qo, n2 = r2()), n2;
      }, set(r3) {
        Object.defineProperty(e2, t2, { value: r3 });
      }, configurable: true });
    }
    function Oo(e2, t2, r2) {
      Object.defineProperty(e2, t2, { value: r2, writable: true, enumerable: true, configurable: true });
    }
    function No(...e2) {
      const t2 = {};
      for (const r2 of e2) {
        const e3 = Object.getOwnPropertyDescriptors(r2);
        Object.assign(t2, e3);
      }
      return Object.defineProperties({}, t2);
    }
    function Fo(e2) {
      return JSON.stringify(e2);
    }
    const Uo = "captureStackTrace" in Error ? Error.captureStackTrace : (...e2) => {
    };
    function Lo(e2) {
      return "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
    }
    const $o = Po(() => {
      if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return false;
      try {
        return new Function(""), true;
      } catch (e2) {
        return false;
      }
    });
    function Qo(e2) {
      if (false === Lo(e2)) return false;
      const t2 = e2.constructor;
      if (void 0 === t2) return true;
      if ("function" != typeof t2) return true;
      const r2 = t2.prototype;
      return false !== Lo(r2) && false !== Object.prototype.hasOwnProperty.call(r2, "isPrototypeOf");
    }
    function jo(e2) {
      return Qo(e2) ? { ...e2 } : Array.isArray(e2) ? [...e2] : e2;
    }
    const Go = /* @__PURE__ */ new Set(["string", "number", "symbol"]), Ho = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
    function zo(e2) {
      return e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function Wo(e2, t2, r2) {
      const n2 = new e2._zod.constr(t2 ?? e2._zod.def);
      return t2 && !r2?.parent || (n2._zod.parent = e2), n2;
    }
    function Vo(e2) {
      const t2 = e2;
      if (!t2) return {};
      if ("string" == typeof t2) return { error: () => t2 };
      if (void 0 !== t2?.message) {
        if (void 0 !== t2?.error) throw new Error("Cannot specify both `message` and `error` params");
        t2.error = t2.message;
      }
      return delete t2.message, "string" == typeof t2.error ? { ...t2, error: () => t2.error } : t2;
    }
    function Ko(e2) {
      return "bigint" == typeof e2 ? e2.toString() + "n" : "string" == typeof e2 ? `"${e2}"` : `${e2}`;
    }
    const Yo = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] }, Zo = { int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")], uint64: [BigInt(0), BigInt("18446744073709551615")] };
    function Xo(e2, t2 = 0) {
      if (true === e2.aborted) return true;
      for (let r2 = t2; r2 < e2.issues.length; r2++) if (true !== e2.issues[r2]?.continue) return true;
      return false;
    }
    function ei(e2, t2) {
      return t2.map((t3) => {
        var r2;
        return (r2 = t3).path ?? (r2.path = []), t3.path.unshift(e2), t3;
      });
    }
    function ti(e2) {
      return "string" == typeof e2 ? e2 : e2?.message;
    }
    function ri(e2, t2, r2) {
      const n2 = { ...e2, path: e2.path ?? [] };
      if (!e2.message) {
        const s2 = ti(e2.inst?._zod.def?.error?.(e2)) ?? ti(t2?.error?.(e2)) ?? ti(r2.customError?.(e2)) ?? ti(r2.localeError?.(e2)) ?? "Invalid input";
        n2.message = s2;
      }
      return delete n2.inst, delete n2.continue, t2?.reportInput || delete n2.input, n2;
    }
    function ni(e2) {
      return e2 instanceof Set ? "set" : e2 instanceof Map ? "map" : e2 instanceof File ? "file" : "unknown";
    }
    function si(e2) {
      return Array.isArray(e2) ? "array" : "string" == typeof e2 ? "string" : "unknown";
    }
    function oi(...e2) {
      const [t2, r2, n2] = e2;
      return "string" == typeof t2 ? { message: t2, code: "custom", input: r2, inst: n2 } : { ...t2 };
    }
    const ii = (e2, t2) => {
      e2.name = "$ZodError", Object.defineProperty(e2, "_zod", { value: e2._zod, enumerable: false }), Object.defineProperty(e2, "issues", { value: t2, enumerable: false }), e2.message = JSON.stringify(t2, Bo, 2), Object.defineProperty(e2, "toString", { value: () => e2.message, enumerable: false });
    }, ai = Eo("$ZodError", ii), ci = Eo("$ZodError", ii, { Parent: Error });
    const li = (e2) => (t2, r2, n2, s2) => {
      const o2 = n2 ? Object.assign(n2, { async: false }) : { async: false }, i2 = t2._zod.run({ value: r2, issues: [] }, o2);
      if (i2 instanceof Promise) throw new Io();
      if (i2.issues.length) {
        const t3 = new (s2?.Err ?? e2)(i2.issues.map((e3) => ri(e3, o2, xo())));
        throw Uo(t3, s2?.callee), t3;
      }
      return i2.value;
    }, ui = li(ci), di = (e2) => async (t2, r2, n2, s2) => {
      const o2 = n2 ? Object.assign(n2, { async: true }) : { async: true };
      let i2 = t2._zod.run({ value: r2, issues: [] }, o2);
      if (i2 instanceof Promise && (i2 = await i2), i2.issues.length) {
        const t3 = new (s2?.Err ?? e2)(i2.issues.map((e3) => ri(e3, o2, xo())));
        throw Uo(t3, s2?.callee), t3;
      }
      return i2.value;
    }, pi = di(ci), mi = (e2) => (t2, r2, n2) => {
      const s2 = n2 ? { ...n2, async: false } : { async: false }, o2 = t2._zod.run({ value: r2, issues: [] }, s2);
      if (o2 instanceof Promise) throw new Io();
      return o2.issues.length ? { success: false, error: new (e2 ?? ai)(o2.issues.map((e3) => ri(e3, s2, xo()))) } : { success: true, data: o2.value };
    }, hi = mi(ci), fi = (e2) => async (t2, r2, n2) => {
      const s2 = n2 ? Object.assign(n2, { async: true }) : { async: true };
      let o2 = t2._zod.run({ value: r2, issues: [] }, s2);
      return o2 instanceof Promise && (o2 = await o2), o2.issues.length ? { success: false, error: new e2(o2.issues.map((e3) => ri(e3, s2, xo()))) } : { success: true, data: o2.value };
    }, gi = fi(ci), yi = (e2) => (t2, r2, n2) => {
      const s2 = n2 ? Object.assign(n2, { direction: "backward" }) : { direction: "backward" };
      return li(e2)(t2, r2, s2);
    }, wi = (e2) => (t2, r2, n2) => li(e2)(t2, r2, n2), vi = (e2) => async (t2, r2, n2) => {
      const s2 = n2 ? Object.assign(n2, { direction: "backward" }) : { direction: "backward" };
      return di(e2)(t2, r2, s2);
    }, _i = (e2) => async (t2, r2, n2) => di(e2)(t2, r2, n2), Ai = (e2) => (t2, r2, n2) => {
      const s2 = n2 ? Object.assign(n2, { direction: "backward" }) : { direction: "backward" };
      return mi(e2)(t2, r2, s2);
    }, Si = (e2) => (t2, r2, n2) => mi(e2)(t2, r2, n2), bi = (e2) => async (t2, r2, n2) => {
      const s2 = n2 ? Object.assign(n2, { direction: "backward" }) : { direction: "backward" };
      return fi(e2)(t2, r2, s2);
    }, Ei = (e2) => async (t2, r2, n2) => fi(e2)(t2, r2, n2), Ii = /^[cC][^\s-]{8,}$/, Ci = /^[0-9a-z]+$/, ki = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, xi = /^[0-9a-vA-V]{20}$/, Ti = /^[A-Za-z0-9]{27}$/, Ri = /^[a-zA-Z0-9_-]{21}$/, Bi = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Pi = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Ji = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Mi = (e2) => e2 ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e2}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, qi = Mi(4), Di = Mi(6), Oi = Mi(7), Ni = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Fi = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Ui = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Li = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, $i = Li, Qi = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, ji = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
    function Gi() {
      return new RegExp(ji, "u");
    }
    const Hi = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, zi = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Wi = (e2) => {
      const t2 = zo(e2 ?? ":");
      return new RegExp(`^(?:[0-9A-F]{2}${t2}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t2}){5}[0-9a-f]{2}$`);
    }, Vi = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Ki = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Yi = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Zi = /^[A-Za-z0-9_-]*$/, Xi = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, ea = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, ta = /^\+[1-9]\d{6,14}$/, ra = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", na = new RegExp(`^${ra}$`);
    function sa(e2) {
      const t2 = "(?:[01]\\d|2[0-3]):[0-5]\\d";
      return "number" == typeof e2.precision ? -1 === e2.precision ? `${t2}` : 0 === e2.precision ? `${t2}:[0-5]\\d` : `${t2}:[0-5]\\d\\.\\d{${e2.precision}}` : `${t2}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    }
    function oa(e2) {
      return new RegExp(`^${sa(e2)}$`);
    }
    function ia(e2) {
      const t2 = sa({ precision: e2.precision }), r2 = ["Z"];
      e2.local && r2.push(""), e2.offset && r2.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
      const n2 = `${t2}(?:${r2.join("|")})`;
      return new RegExp(`^${ra}T(?:${n2})$`);
    }
    const aa = (e2) => new RegExp(`^${e2 ? `[\\s\\S]{${e2?.minimum ?? 0},${e2?.maximum ?? ""}}` : "[\\s\\S]*"}$`), ca = /^-?\d+n?$/, la = /^-?\d+$/, ua = /^-?\d+(?:\.\d+)?$/, da = /^(?:true|false)$/i, pa = /^null$/i, ma = /^undefined$/i, ha = /^[^A-Z]*$/, fa = /^[^a-z]*$/, ga = /^[0-9a-fA-F]*$/;
    function ya(e2, t2) {
      return new RegExp(`^[A-Za-z0-9+/]{${e2}}${t2}$`);
    }
    function wa(e2) {
      return new RegExp(`^[A-Za-z0-9_-]{${e2}}$`);
    }
    const va = /^[0-9a-fA-F]{32}$/, _a = ya(22, "=="), Aa = wa(22), Sa = /^[0-9a-fA-F]{40}$/, ba = ya(27, "="), Ea = wa(27), Ia = /^[0-9a-fA-F]{64}$/, Ca = ya(43, "="), ka = wa(43), xa = /^[0-9a-fA-F]{96}$/, Ta = ya(64, ""), Ra = wa(64), Ba = /^[0-9a-fA-F]{128}$/, Pa = ya(86, "=="), Ja = wa(86), Ma = Eo("$ZodCheck", (e2, t2) => {
      var r2;
      e2._zod ?? (e2._zod = {}), e2._zod.def = t2, (r2 = e2._zod).onattach ?? (r2.onattach = []);
    }), qa = { number: "number", bigint: "bigint", object: "date" }, Da = Eo("$ZodCheckLessThan", (e2, t2) => {
      Ma.init(e2, t2);
      const r2 = qa[typeof t2.value];
      e2._zod.onattach.push((e3) => {
        const r3 = e3._zod.bag, n2 = (t2.inclusive ? r3.maximum : r3.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        t2.value < n2 && (t2.inclusive ? r3.maximum = t2.value : r3.exclusiveMaximum = t2.value);
      }), e2._zod.check = (n2) => {
        (t2.inclusive ? n2.value <= t2.value : n2.value < t2.value) || n2.issues.push({ origin: r2, code: "too_big", maximum: "object" == typeof t2.value ? t2.value.getTime() : t2.value, input: n2.value, inclusive: t2.inclusive, inst: e2, continue: !t2.abort });
      };
    }), Oa = Eo("$ZodCheckGreaterThan", (e2, t2) => {
      Ma.init(e2, t2);
      const r2 = qa[typeof t2.value];
      e2._zod.onattach.push((e3) => {
        const r3 = e3._zod.bag, n2 = (t2.inclusive ? r3.minimum : r3.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        t2.value > n2 && (t2.inclusive ? r3.minimum = t2.value : r3.exclusiveMinimum = t2.value);
      }), e2._zod.check = (n2) => {
        (t2.inclusive ? n2.value >= t2.value : n2.value > t2.value) || n2.issues.push({ origin: r2, code: "too_small", minimum: "object" == typeof t2.value ? t2.value.getTime() : t2.value, input: n2.value, inclusive: t2.inclusive, inst: e2, continue: !t2.abort });
      };
    }), Na = Eo("$ZodCheckMultipleOf", (e2, t2) => {
      Ma.init(e2, t2), e2._zod.onattach.push((e3) => {
        var r2;
        (r2 = e3._zod.bag).multipleOf ?? (r2.multipleOf = t2.value);
      }), e2._zod.check = (r2) => {
        if (typeof r2.value != typeof t2.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
        ("bigint" == typeof r2.value ? r2.value % t2.value === BigInt(0) : 0 === (function(e3, t3) {
          const r3 = (e3.toString().split(".")[1] || "").length, n2 = t3.toString();
          let s2 = (n2.split(".")[1] || "").length;
          if (0 === s2 && /\d?e-\d?/.test(n2)) {
            const e4 = n2.match(/\d?e-(\d?)/);
            e4?.[1] && (s2 = Number.parseInt(e4[1]));
          }
          const o2 = r3 > s2 ? r3 : s2;
          return Number.parseInt(e3.toFixed(o2).replace(".", "")) % Number.parseInt(t3.toFixed(o2).replace(".", "")) / 10 ** o2;
        })(r2.value, t2.value)) || r2.issues.push({ origin: typeof r2.value, code: "not_multiple_of", divisor: t2.value, input: r2.value, inst: e2, continue: !t2.abort });
      };
    }), Fa = Eo("$ZodCheckNumberFormat", (e2, t2) => {
      Ma.init(e2, t2), t2.format = t2.format || "float64";
      const r2 = t2.format?.includes("int"), n2 = r2 ? "int" : "number", [s2, o2] = Yo[t2.format];
      e2._zod.onattach.push((e3) => {
        const n3 = e3._zod.bag;
        n3.format = t2.format, n3.minimum = s2, n3.maximum = o2, r2 && (n3.pattern = la);
      }), e2._zod.check = (i2) => {
        const a2 = i2.value;
        if (r2) {
          if (!Number.isInteger(a2)) return void i2.issues.push({ expected: n2, format: t2.format, code: "invalid_type", continue: false, input: a2, inst: e2 });
          if (!Number.isSafeInteger(a2)) return void (a2 > 0 ? i2.issues.push({ input: a2, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e2, origin: n2, inclusive: true, continue: !t2.abort }) : i2.issues.push({ input: a2, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e2, origin: n2, inclusive: true, continue: !t2.abort }));
        }
        a2 < s2 && i2.issues.push({ origin: "number", input: a2, code: "too_small", minimum: s2, inclusive: true, inst: e2, continue: !t2.abort }), a2 > o2 && i2.issues.push({ origin: "number", input: a2, code: "too_big", maximum: o2, inclusive: true, inst: e2, continue: !t2.abort });
      };
    }), Ua = Eo("$ZodCheckBigIntFormat", (e2, t2) => {
      Ma.init(e2, t2);
      const [r2, n2] = Zo[t2.format];
      e2._zod.onattach.push((e3) => {
        const s2 = e3._zod.bag;
        s2.format = t2.format, s2.minimum = r2, s2.maximum = n2;
      }), e2._zod.check = (s2) => {
        const o2 = s2.value;
        o2 < r2 && s2.issues.push({ origin: "bigint", input: o2, code: "too_small", minimum: r2, inclusive: true, inst: e2, continue: !t2.abort }), o2 > n2 && s2.issues.push({ origin: "bigint", input: o2, code: "too_big", maximum: n2, inclusive: true, inst: e2, continue: !t2.abort });
      };
    }), La = Eo("$ZodCheckMaxSize", (e2, t2) => {
      var r2;
      Ma.init(e2, t2), (r2 = e2._zod.def).when ?? (r2.when = (e3) => {
        const t3 = e3.value;
        return !Jo(t3) && void 0 !== t3.size;
      }), e2._zod.onattach.push((e3) => {
        const r3 = e3._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t2.maximum < r3 && (e3._zod.bag.maximum = t2.maximum);
      }), e2._zod.check = (r3) => {
        const n2 = r3.value;
        n2.size <= t2.maximum || r3.issues.push({ origin: ni(n2), code: "too_big", maximum: t2.maximum, inclusive: true, input: n2, inst: e2, continue: !t2.abort });
      };
    }), $a = Eo("$ZodCheckMinSize", (e2, t2) => {
      var r2;
      Ma.init(e2, t2), (r2 = e2._zod.def).when ?? (r2.when = (e3) => {
        const t3 = e3.value;
        return !Jo(t3) && void 0 !== t3.size;
      }), e2._zod.onattach.push((e3) => {
        const r3 = e3._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t2.minimum > r3 && (e3._zod.bag.minimum = t2.minimum);
      }), e2._zod.check = (r3) => {
        const n2 = r3.value;
        n2.size >= t2.minimum || r3.issues.push({ origin: ni(n2), code: "too_small", minimum: t2.minimum, inclusive: true, input: n2, inst: e2, continue: !t2.abort });
      };
    }), Qa = Eo("$ZodCheckSizeEquals", (e2, t2) => {
      var r2;
      Ma.init(e2, t2), (r2 = e2._zod.def).when ?? (r2.when = (e3) => {
        const t3 = e3.value;
        return !Jo(t3) && void 0 !== t3.size;
      }), e2._zod.onattach.push((e3) => {
        const r3 = e3._zod.bag;
        r3.minimum = t2.size, r3.maximum = t2.size, r3.size = t2.size;
      }), e2._zod.check = (r3) => {
        const n2 = r3.value, s2 = n2.size;
        if (s2 === t2.size) return;
        const o2 = s2 > t2.size;
        r3.issues.push({ origin: ni(n2), ...o2 ? { code: "too_big", maximum: t2.size } : { code: "too_small", minimum: t2.size }, inclusive: true, exact: true, input: r3.value, inst: e2, continue: !t2.abort });
      };
    }), ja = Eo("$ZodCheckMaxLength", (e2, t2) => {
      var r2;
      Ma.init(e2, t2), (r2 = e2._zod.def).when ?? (r2.when = (e3) => {
        const t3 = e3.value;
        return !Jo(t3) && void 0 !== t3.length;
      }), e2._zod.onattach.push((e3) => {
        const r3 = e3._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t2.maximum < r3 && (e3._zod.bag.maximum = t2.maximum);
      }), e2._zod.check = (r3) => {
        const n2 = r3.value;
        if (n2.length <= t2.maximum) return;
        const s2 = si(n2);
        r3.issues.push({ origin: s2, code: "too_big", maximum: t2.maximum, inclusive: true, input: n2, inst: e2, continue: !t2.abort });
      };
    }), Ga = Eo("$ZodCheckMinLength", (e2, t2) => {
      var r2;
      Ma.init(e2, t2), (r2 = e2._zod.def).when ?? (r2.when = (e3) => {
        const t3 = e3.value;
        return !Jo(t3) && void 0 !== t3.length;
      }), e2._zod.onattach.push((e3) => {
        const r3 = e3._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t2.minimum > r3 && (e3._zod.bag.minimum = t2.minimum);
      }), e2._zod.check = (r3) => {
        const n2 = r3.value;
        if (n2.length >= t2.minimum) return;
        const s2 = si(n2);
        r3.issues.push({ origin: s2, code: "too_small", minimum: t2.minimum, inclusive: true, input: n2, inst: e2, continue: !t2.abort });
      };
    }), Ha = Eo("$ZodCheckLengthEquals", (e2, t2) => {
      var r2;
      Ma.init(e2, t2), (r2 = e2._zod.def).when ?? (r2.when = (e3) => {
        const t3 = e3.value;
        return !Jo(t3) && void 0 !== t3.length;
      }), e2._zod.onattach.push((e3) => {
        const r3 = e3._zod.bag;
        r3.minimum = t2.length, r3.maximum = t2.length, r3.length = t2.length;
      }), e2._zod.check = (r3) => {
        const n2 = r3.value, s2 = n2.length;
        if (s2 === t2.length) return;
        const o2 = si(n2), i2 = s2 > t2.length;
        r3.issues.push({ origin: o2, ...i2 ? { code: "too_big", maximum: t2.length } : { code: "too_small", minimum: t2.length }, inclusive: true, exact: true, input: r3.value, inst: e2, continue: !t2.abort });
      };
    }), za = Eo("$ZodCheckStringFormat", (e2, t2) => {
      var r2, n2;
      Ma.init(e2, t2), e2._zod.onattach.push((e3) => {
        const r3 = e3._zod.bag;
        r3.format = t2.format, t2.pattern && (r3.patterns ?? (r3.patterns = /* @__PURE__ */ new Set()), r3.patterns.add(t2.pattern));
      }), t2.pattern ? (r2 = e2._zod).check ?? (r2.check = (r3) => {
        t2.pattern.lastIndex = 0, t2.pattern.test(r3.value) || r3.issues.push({ origin: "string", code: "invalid_format", format: t2.format, input: r3.value, ...t2.pattern ? { pattern: t2.pattern.toString() } : {}, inst: e2, continue: !t2.abort });
      }) : (n2 = e2._zod).check ?? (n2.check = () => {
      });
    }), Wa = Eo("$ZodCheckRegex", (e2, t2) => {
      za.init(e2, t2), e2._zod.check = (r2) => {
        t2.pattern.lastIndex = 0, t2.pattern.test(r2.value) || r2.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: r2.value, pattern: t2.pattern.toString(), inst: e2, continue: !t2.abort });
      };
    }), Va = Eo("$ZodCheckLowerCase", (e2, t2) => {
      t2.pattern ?? (t2.pattern = ha), za.init(e2, t2);
    }), Ka = Eo("$ZodCheckUpperCase", (e2, t2) => {
      t2.pattern ?? (t2.pattern = fa), za.init(e2, t2);
    }), Ya = Eo("$ZodCheckIncludes", (e2, t2) => {
      Ma.init(e2, t2);
      const r2 = zo(t2.includes), n2 = new RegExp("number" == typeof t2.position ? `^.{${t2.position}}${r2}` : r2);
      t2.pattern = n2, e2._zod.onattach.push((e3) => {
        const t3 = e3._zod.bag;
        t3.patterns ?? (t3.patterns = /* @__PURE__ */ new Set()), t3.patterns.add(n2);
      }), e2._zod.check = (r3) => {
        r3.value.includes(t2.includes, t2.position) || r3.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: t2.includes, input: r3.value, inst: e2, continue: !t2.abort });
      };
    }), Za = Eo("$ZodCheckStartsWith", (e2, t2) => {
      Ma.init(e2, t2);
      const r2 = new RegExp(`^${zo(t2.prefix)}.*`);
      t2.pattern ?? (t2.pattern = r2), e2._zod.onattach.push((e3) => {
        const t3 = e3._zod.bag;
        t3.patterns ?? (t3.patterns = /* @__PURE__ */ new Set()), t3.patterns.add(r2);
      }), e2._zod.check = (r3) => {
        r3.value.startsWith(t2.prefix) || r3.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: t2.prefix, input: r3.value, inst: e2, continue: !t2.abort });
      };
    }), Xa = Eo("$ZodCheckEndsWith", (e2, t2) => {
      Ma.init(e2, t2);
      const r2 = new RegExp(`.*${zo(t2.suffix)}$`);
      t2.pattern ?? (t2.pattern = r2), e2._zod.onattach.push((e3) => {
        const t3 = e3._zod.bag;
        t3.patterns ?? (t3.patterns = /* @__PURE__ */ new Set()), t3.patterns.add(r2);
      }), e2._zod.check = (r3) => {
        r3.value.endsWith(t2.suffix) || r3.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: t2.suffix, input: r3.value, inst: e2, continue: !t2.abort });
      };
    });
    function ec(e2, t2, r2) {
      e2.issues.length && t2.issues.push(...ei(r2, e2.issues));
    }
    const tc = Eo("$ZodCheckProperty", (e2, t2) => {
      Ma.init(e2, t2), e2._zod.check = (e3) => {
        const r2 = t2.schema._zod.run({ value: e3.value[t2.property], issues: [] }, {});
        if (r2 instanceof Promise) return r2.then((r3) => ec(r3, e3, t2.property));
        ec(r2, e3, t2.property);
      };
    }), rc = Eo("$ZodCheckMimeType", (e2, t2) => {
      Ma.init(e2, t2);
      const r2 = new Set(t2.mime);
      e2._zod.onattach.push((e3) => {
        e3._zod.bag.mime = t2.mime;
      }), e2._zod.check = (n2) => {
        r2.has(n2.value.type) || n2.issues.push({ code: "invalid_value", values: t2.mime, input: n2.value.type, inst: e2, continue: !t2.abort });
      };
    }), nc = Eo("$ZodCheckOverwrite", (e2, t2) => {
      Ma.init(e2, t2), e2._zod.check = (e3) => {
        e3.value = t2.tx(e3.value);
      };
    });
    class sc {
      constructor(e2 = []) {
        this.content = [], this.indent = 0, this && (this.args = e2);
      }
      indented(e2) {
        this.indent += 1, e2(this), this.indent -= 1;
      }
      write(e2) {
        if ("function" == typeof e2) return e2(this, { execution: "sync" }), void e2(this, { execution: "async" });
        const t2 = e2.split("\n").filter((e3) => e3), r2 = Math.min(...t2.map((e3) => e3.length - e3.trimStart().length)), n2 = t2.map((e3) => e3.slice(r2)).map((e3) => " ".repeat(2 * this.indent) + e3);
        for (const e3 of n2) this.content.push(e3);
      }
      compile() {
        const e2 = Function, t2 = this?.args;
        return new e2(...t2, [...(this?.content ?? [""]).map((e3) => `  ${e3}`)].join("\n"));
      }
    }
    const oc = { major: 4, minor: 3, patch: 6 }, ic = Eo("$ZodType", (e2, t2) => {
      var r2;
      e2 ?? (e2 = {}), e2._zod.def = t2, e2._zod.bag = e2._zod.bag || {}, e2._zod.version = oc;
      const n2 = [...e2._zod.def.checks ?? []];
      e2._zod.traits.has("$ZodCheck") && n2.unshift(e2);
      for (const t3 of n2) for (const r3 of t3._zod.onattach) r3(e2);
      if (0 === n2.length) (r2 = e2._zod).deferred ?? (r2.deferred = []), e2._zod.deferred?.push(() => {
        e2._zod.run = e2._zod.parse;
      });
      else {
        const t3 = (e3, t4, r4) => {
          let n3, s2 = Xo(e3);
          for (const o2 of t4) {
            if (o2._zod.def.when) {
              if (!o2._zod.def.when(e3)) continue;
            } else if (s2) continue;
            const t5 = e3.issues.length, i2 = o2._zod.check(e3);
            if (i2 instanceof Promise && false === r4?.async) throw new Io();
            if (n3 || i2 instanceof Promise) n3 = (n3 ?? Promise.resolve()).then(async () => {
              await i2;
              e3.issues.length !== t5 && (s2 || (s2 = Xo(e3, t5)));
            });
            else {
              if (e3.issues.length === t5) continue;
              s2 || (s2 = Xo(e3, t5));
            }
          }
          return n3 ? n3.then(() => e3) : e3;
        }, r3 = (r4, s2, o2) => {
          if (Xo(r4)) return r4.aborted = true, r4;
          const i2 = t3(s2, n2, o2);
          if (i2 instanceof Promise) {
            if (false === o2.async) throw new Io();
            return i2.then((t4) => e2._zod.parse(t4, o2));
          }
          return e2._zod.parse(i2, o2);
        };
        e2._zod.run = (s2, o2) => {
          if (o2.skipChecks) return e2._zod.parse(s2, o2);
          if ("backward" === o2.direction) {
            const t4 = e2._zod.parse({ value: s2.value, issues: [] }, { ...o2, skipChecks: true });
            return t4 instanceof Promise ? t4.then((e3) => r3(e3, s2, o2)) : r3(t4, s2, o2);
          }
          const i2 = e2._zod.parse(s2, o2);
          if (i2 instanceof Promise) {
            if (false === o2.async) throw new Io();
            return i2.then((e3) => t3(e3, n2, o2));
          }
          return t3(i2, n2, o2);
        };
      }
      Do(e2, "~standard", () => ({ validate: (t3) => {
        try {
          const r3 = hi(e2, t3);
          return r3.success ? { value: r3.data } : { issues: r3.error?.issues };
        } catch (r3) {
          return gi(e2, t3).then((e3) => e3.success ? { value: e3.data } : { issues: e3.error?.issues });
        }
      }, vendor: "zod", version: 1 }));
    }), ac = Eo("$ZodString", (e2, t2) => {
      ic.init(e2, t2), e2._zod.pattern = [...e2?._zod.bag?.patterns ?? []].pop() ?? aa(e2._zod.bag), e2._zod.parse = (r2, n2) => {
        if (t2.coerce) try {
          r2.value = String(r2.value);
        } catch (n3) {
        }
        return "string" == typeof r2.value || r2.issues.push({ expected: "string", code: "invalid_type", input: r2.value, inst: e2 }), r2;
      };
    }), cc = Eo("$ZodStringFormat", (e2, t2) => {
      za.init(e2, t2), ac.init(e2, t2);
    }), lc = Eo("$ZodGUID", (e2, t2) => {
      t2.pattern ?? (t2.pattern = Ji), cc.init(e2, t2);
    }), uc = Eo("$ZodUUID", (e2, t2) => {
      if (t2.version) {
        const e3 = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t2.version];
        if (void 0 === e3) throw new Error(`Invalid UUID version: "${t2.version}"`);
        t2.pattern ?? (t2.pattern = Mi(e3));
      } else t2.pattern ?? (t2.pattern = Mi());
      cc.init(e2, t2);
    }), dc = Eo("$ZodEmail", (e2, t2) => {
      t2.pattern ?? (t2.pattern = Ni), cc.init(e2, t2);
    }), pc = Eo("$ZodURL", (e2, t2) => {
      cc.init(e2, t2), e2._zod.check = (r2) => {
        try {
          const n2 = r2.value.trim(), s2 = new URL(n2);
          return t2.hostname && (t2.hostname.lastIndex = 0, t2.hostname.test(s2.hostname) || r2.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: t2.hostname.source, input: r2.value, inst: e2, continue: !t2.abort })), t2.protocol && (t2.protocol.lastIndex = 0, t2.protocol.test(s2.protocol.endsWith(":") ? s2.protocol.slice(0, -1) : s2.protocol) || r2.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: t2.protocol.source, input: r2.value, inst: e2, continue: !t2.abort })), void (t2.normalize ? r2.value = s2.href : r2.value = n2);
        } catch (n2) {
          r2.issues.push({ code: "invalid_format", format: "url", input: r2.value, inst: e2, continue: !t2.abort });
        }
      };
    }), mc = Eo("$ZodEmoji", (e2, t2) => {
      t2.pattern ?? (t2.pattern = Gi()), cc.init(e2, t2);
    }), hc = Eo("$ZodNanoID", (e2, t2) => {
      t2.pattern ?? (t2.pattern = Ri), cc.init(e2, t2);
    }), fc = Eo("$ZodCUID", (e2, t2) => {
      t2.pattern ?? (t2.pattern = Ii), cc.init(e2, t2);
    }), gc = Eo("$ZodCUID2", (e2, t2) => {
      t2.pattern ?? (t2.pattern = Ci), cc.init(e2, t2);
    }), yc = Eo("$ZodULID", (e2, t2) => {
      t2.pattern ?? (t2.pattern = ki), cc.init(e2, t2);
    }), wc = Eo("$ZodXID", (e2, t2) => {
      t2.pattern ?? (t2.pattern = xi), cc.init(e2, t2);
    }), vc = Eo("$ZodKSUID", (e2, t2) => {
      t2.pattern ?? (t2.pattern = Ti), cc.init(e2, t2);
    }), _c = Eo("$ZodISODateTime", (e2, t2) => {
      t2.pattern ?? (t2.pattern = ia(t2)), cc.init(e2, t2);
    }), Ac = Eo("$ZodISODate", (e2, t2) => {
      t2.pattern ?? (t2.pattern = na), cc.init(e2, t2);
    }), Sc = Eo("$ZodISOTime", (e2, t2) => {
      t2.pattern ?? (t2.pattern = oa(t2)), cc.init(e2, t2);
    }), bc = Eo("$ZodISODuration", (e2, t2) => {
      t2.pattern ?? (t2.pattern = Bi), cc.init(e2, t2);
    }), Ec = Eo("$ZodIPv4", (e2, t2) => {
      t2.pattern ?? (t2.pattern = Hi), cc.init(e2, t2), e2._zod.bag.format = "ipv4";
    }), Ic = Eo("$ZodIPv6", (e2, t2) => {
      t2.pattern ?? (t2.pattern = zi), cc.init(e2, t2), e2._zod.bag.format = "ipv6", e2._zod.check = (r2) => {
        try {
          new URL(`http://[${r2.value}]`);
        } catch {
          r2.issues.push({ code: "invalid_format", format: "ipv6", input: r2.value, inst: e2, continue: !t2.abort });
        }
      };
    }), Cc = Eo("$ZodMAC", (e2, t2) => {
      t2.pattern ?? (t2.pattern = Wi(t2.delimiter)), cc.init(e2, t2), e2._zod.bag.format = "mac";
    }), kc = Eo("$ZodCIDRv4", (e2, t2) => {
      t2.pattern ?? (t2.pattern = Vi), cc.init(e2, t2);
    }), xc = Eo("$ZodCIDRv6", (e2, t2) => {
      t2.pattern ?? (t2.pattern = Ki), cc.init(e2, t2), e2._zod.check = (r2) => {
        const n2 = r2.value.split("/");
        try {
          if (2 !== n2.length) throw new Error();
          const [e3, t3] = n2;
          if (!t3) throw new Error();
          const r3 = Number(t3);
          if (`${r3}` !== t3) throw new Error();
          if (r3 < 0 || r3 > 128) throw new Error();
          new URL(`http://[${e3}]`);
        } catch {
          r2.issues.push({ code: "invalid_format", format: "cidrv6", input: r2.value, inst: e2, continue: !t2.abort });
        }
      };
    });
    function Tc(e2) {
      if ("" === e2) return true;
      if (e2.length % 4 != 0) return false;
      try {
        return atob(e2), true;
      } catch {
        return false;
      }
    }
    const Rc = Eo("$ZodBase64", (e2, t2) => {
      t2.pattern ?? (t2.pattern = Yi), cc.init(e2, t2), e2._zod.bag.contentEncoding = "base64", e2._zod.check = (r2) => {
        Tc(r2.value) || r2.issues.push({ code: "invalid_format", format: "base64", input: r2.value, inst: e2, continue: !t2.abort });
      };
    });
    const Bc = Eo("$ZodBase64URL", (e2, t2) => {
      t2.pattern ?? (t2.pattern = Zi), cc.init(e2, t2), e2._zod.bag.contentEncoding = "base64url", e2._zod.check = (r2) => {
        (function(e3) {
          if (!Zi.test(e3)) return false;
          const t3 = e3.replace(/[-_]/g, (e4) => "-" === e4 ? "+" : "/");
          return Tc(t3.padEnd(4 * Math.ceil(t3.length / 4), "="));
        })(r2.value) || r2.issues.push({ code: "invalid_format", format: "base64url", input: r2.value, inst: e2, continue: !t2.abort });
      };
    }), Pc = Eo("$ZodE164", (e2, t2) => {
      t2.pattern ?? (t2.pattern = ta), cc.init(e2, t2);
    });
    const Jc = Eo("$ZodJWT", (e2, t2) => {
      cc.init(e2, t2), e2._zod.check = (r2) => {
        (function(e3, t3 = null) {
          try {
            const r3 = e3.split(".");
            if (3 !== r3.length) return false;
            const [n2] = r3;
            if (!n2) return false;
            const s2 = JSON.parse(atob(n2));
            return !("typ" in s2 && "JWT" !== s2?.typ || !s2.alg || t3 && (!("alg" in s2) || s2.alg !== t3));
          } catch {
            return false;
          }
        })(r2.value, t2.alg) || r2.issues.push({ code: "invalid_format", format: "jwt", input: r2.value, inst: e2, continue: !t2.abort });
      };
    }), Mc = Eo("$ZodCustomStringFormat", (e2, t2) => {
      cc.init(e2, t2), e2._zod.check = (r2) => {
        t2.fn(r2.value) || r2.issues.push({ code: "invalid_format", format: t2.format, input: r2.value, inst: e2, continue: !t2.abort });
      };
    }), qc = Eo("$ZodNumber", (e2, t2) => {
      ic.init(e2, t2), e2._zod.pattern = e2._zod.bag.pattern ?? ua, e2._zod.parse = (r2, n2) => {
        if (t2.coerce) try {
          r2.value = Number(r2.value);
        } catch (e3) {
        }
        const s2 = r2.value;
        if ("number" == typeof s2 && !Number.isNaN(s2) && Number.isFinite(s2)) return r2;
        const o2 = "number" == typeof s2 ? Number.isNaN(s2) ? "NaN" : Number.isFinite(s2) ? void 0 : "Infinity" : void 0;
        return r2.issues.push({ expected: "number", code: "invalid_type", input: s2, inst: e2, ...o2 ? { received: o2 } : {} }), r2;
      };
    }), Dc = Eo("$ZodNumberFormat", (e2, t2) => {
      Fa.init(e2, t2), qc.init(e2, t2);
    }), Oc = Eo("$ZodBoolean", (e2, t2) => {
      ic.init(e2, t2), e2._zod.pattern = da, e2._zod.parse = (r2, n2) => {
        if (t2.coerce) try {
          r2.value = Boolean(r2.value);
        } catch (e3) {
        }
        const s2 = r2.value;
        return "boolean" == typeof s2 || r2.issues.push({ expected: "boolean", code: "invalid_type", input: s2, inst: e2 }), r2;
      };
    }), Nc = Eo("$ZodBigInt", (e2, t2) => {
      ic.init(e2, t2), e2._zod.pattern = ca, e2._zod.parse = (r2, n2) => {
        if (t2.coerce) try {
          r2.value = BigInt(r2.value);
        } catch (e3) {
        }
        return "bigint" == typeof r2.value || r2.issues.push({ expected: "bigint", code: "invalid_type", input: r2.value, inst: e2 }), r2;
      };
    }), Fc = Eo("$ZodBigIntFormat", (e2, t2) => {
      Ua.init(e2, t2), Nc.init(e2, t2);
    }), Uc = Eo("$ZodSymbol", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (t3, r2) => {
        const n2 = t3.value;
        return "symbol" == typeof n2 || t3.issues.push({ expected: "symbol", code: "invalid_type", input: n2, inst: e2 }), t3;
      };
    }), Lc = Eo("$ZodUndefined", (e2, t2) => {
      ic.init(e2, t2), e2._zod.pattern = ma, e2._zod.values = /* @__PURE__ */ new Set([void 0]), e2._zod.optin = "optional", e2._zod.optout = "optional", e2._zod.parse = (t3, r2) => {
        const n2 = t3.value;
        return void 0 === n2 || t3.issues.push({ expected: "undefined", code: "invalid_type", input: n2, inst: e2 }), t3;
      };
    }), $c = Eo("$ZodNull", (e2, t2) => {
      ic.init(e2, t2), e2._zod.pattern = pa, e2._zod.values = /* @__PURE__ */ new Set([null]), e2._zod.parse = (t3, r2) => {
        const n2 = t3.value;
        return null === n2 || t3.issues.push({ expected: "null", code: "invalid_type", input: n2, inst: e2 }), t3;
      };
    }), Qc = Eo("$ZodAny", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (e3) => e3;
    }), jc = Eo("$ZodUnknown", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (e3) => e3;
    }), Gc = Eo("$ZodNever", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (t3, r2) => (t3.issues.push({ expected: "never", code: "invalid_type", input: t3.value, inst: e2 }), t3);
    }), Hc = Eo("$ZodVoid", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (t3, r2) => {
        const n2 = t3.value;
        return void 0 === n2 || t3.issues.push({ expected: "void", code: "invalid_type", input: n2, inst: e2 }), t3;
      };
    }), zc = Eo("$ZodDate", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (r2, n2) => {
        if (t2.coerce) try {
          r2.value = new Date(r2.value);
        } catch (e3) {
        }
        const s2 = r2.value, o2 = s2 instanceof Date;
        return o2 && !Number.isNaN(s2.getTime()) || r2.issues.push({ expected: "date", code: "invalid_type", input: s2, ...o2 ? { received: "Invalid Date" } : {}, inst: e2 }), r2;
      };
    });
    function Wc(e2, t2, r2) {
      e2.issues.length && t2.issues.push(...ei(r2, e2.issues)), t2.value[r2] = e2.value;
    }
    const Vc = Eo("$ZodArray", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (r2, n2) => {
        const s2 = r2.value;
        if (!Array.isArray(s2)) return r2.issues.push({ expected: "array", code: "invalid_type", input: s2, inst: e2 }), r2;
        r2.value = Array(s2.length);
        const o2 = [];
        for (let e3 = 0; e3 < s2.length; e3++) {
          const i2 = s2[e3], a2 = t2.element._zod.run({ value: i2, issues: [] }, n2);
          a2 instanceof Promise ? o2.push(a2.then((t3) => Wc(t3, r2, e3))) : Wc(a2, r2, e3);
        }
        return o2.length ? Promise.all(o2).then(() => r2) : r2;
      };
    });
    function Kc(e2, t2, r2, n2, s2) {
      if (e2.issues.length) {
        if (s2 && !(r2 in n2)) return;
        t2.issues.push(...ei(r2, e2.issues));
      }
      void 0 === e2.value ? r2 in n2 && (t2.value[r2] = void 0) : t2.value[r2] = e2.value;
    }
    function Yc(e2) {
      const t2 = Object.keys(e2.shape);
      for (const r3 of t2) if (!e2.shape?.[r3]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${r3}": expected a Zod schema`);
      const r2 = (n2 = e2.shape, Object.keys(n2).filter((e3) => "optional" === n2[e3]._zod.optin && "optional" === n2[e3]._zod.optout));
      var n2;
      return { ...e2, keys: t2, keySet: new Set(t2), numKeys: t2.length, optionalKeys: new Set(r2) };
    }
    function Zc(e2, t2, r2, n2, s2, o2) {
      const i2 = [], a2 = s2.keySet, c2 = s2.catchall._zod, l2 = c2.def.type, u2 = "optional" === c2.optout;
      for (const s3 in t2) {
        if (a2.has(s3)) continue;
        if ("never" === l2) {
          i2.push(s3);
          continue;
        }
        const o3 = c2.run({ value: t2[s3], issues: [] }, n2);
        o3 instanceof Promise ? e2.push(o3.then((e3) => Kc(e3, r2, s3, t2, u2))) : Kc(o3, r2, s3, t2, u2);
      }
      return i2.length && r2.issues.push({ code: "unrecognized_keys", keys: i2, input: t2, inst: o2 }), e2.length ? Promise.all(e2).then(() => r2) : r2;
    }
    const Xc = Eo("$ZodObject", (e2, t2) => {
      ic.init(e2, t2);
      const r2 = Object.getOwnPropertyDescriptor(t2, "shape");
      if (!r2?.get) {
        const e3 = t2.shape;
        Object.defineProperty(t2, "shape", { get: () => {
          const r3 = { ...e3 };
          return Object.defineProperty(t2, "shape", { value: r3 }), r3;
        } });
      }
      const n2 = Po(() => Yc(t2));
      Do(e2._zod, "propValues", () => {
        const e3 = t2.shape, r3 = {};
        for (const t3 in e3) {
          const n3 = e3[t3]._zod;
          if (n3.values) {
            r3[t3] ?? (r3[t3] = /* @__PURE__ */ new Set());
            for (const e4 of n3.values) r3[t3].add(e4);
          }
        }
        return r3;
      });
      const s2 = Lo, o2 = t2.catchall;
      let i2;
      e2._zod.parse = (t3, r3) => {
        i2 ?? (i2 = n2.value);
        const a2 = t3.value;
        if (!s2(a2)) return t3.issues.push({ expected: "object", code: "invalid_type", input: a2, inst: e2 }), t3;
        t3.value = {};
        const c2 = [], l2 = i2.shape;
        for (const e3 of i2.keys) {
          const n3 = l2[e3], s3 = "optional" === n3._zod.optout, o3 = n3._zod.run({ value: a2[e3], issues: [] }, r3);
          o3 instanceof Promise ? c2.push(o3.then((r4) => Kc(r4, t3, e3, a2, s3))) : Kc(o3, t3, e3, a2, s3);
        }
        return o2 ? Zc(c2, a2, t3, r3, n2.value, e2) : c2.length ? Promise.all(c2).then(() => t3) : t3;
      };
    }), el = Eo("$ZodObjectJIT", (e2, t2) => {
      Xc.init(e2, t2);
      const r2 = e2._zod.parse, n2 = Po(() => Yc(t2));
      let s2;
      const o2 = Lo, i2 = !ko.jitless, a2 = i2 && $o.value, c2 = t2.catchall;
      let l2;
      e2._zod.parse = (u2, d2) => {
        l2 ?? (l2 = n2.value);
        const p2 = u2.value;
        return o2(p2) ? i2 && a2 && false === d2?.async && true !== d2.jitless ? (s2 || (s2 = ((e3) => {
          const t3 = new sc(["shape", "payload", "ctx"]), r3 = n2.value, s3 = (e4) => {
            const t4 = Fo(e4);
            return `shape[${t4}]._zod.run({ value: input[${t4}], issues: [] }, ctx)`;
          };
          t3.write("const input = payload.value;");
          const o3 = /* @__PURE__ */ Object.create(null);
          let i3 = 0;
          for (const e4 of r3.keys) o3[e4] = "key_" + i3++;
          t3.write("const newResult = {};");
          for (const n3 of r3.keys) {
            const r4 = o3[n3], i4 = Fo(n3), a4 = e3[n3], c3 = "optional" === a4?._zod?.optout;
            t3.write(`const ${r4} = ${s3(n3)};`), c3 ? t3.write(`
        if (${r4}.issues.length) {
          if (${i4} in input) {
            payload.issues = payload.issues.concat(${r4}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${i4}, ...iss.path] : [${i4}]
            })));
          }
        }
        
        if (${r4}.value === undefined) {
          if (${i4} in input) {
            newResult[${i4}] = undefined;
          }
        } else {
          newResult[${i4}] = ${r4}.value;
        }
        
      `) : t3.write(`
        if (${r4}.issues.length) {
          payload.issues = payload.issues.concat(${r4}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${i4}, ...iss.path] : [${i4}]
          })));
        }
        
        if (${r4}.value === undefined) {
          if (${i4} in input) {
            newResult[${i4}] = undefined;
          }
        } else {
          newResult[${i4}] = ${r4}.value;
        }
        
      `);
          }
          t3.write("payload.value = newResult;"), t3.write("return payload;");
          const a3 = t3.compile();
          return (t4, r4) => a3(e3, t4, r4);
        })(t2.shape)), u2 = s2(u2, d2), c2 ? Zc([], p2, u2, d2, l2, e2) : u2) : r2(u2, d2) : (u2.issues.push({ expected: "object", code: "invalid_type", input: p2, inst: e2 }), u2);
      };
    });
    function tl(e2, t2, r2, n2) {
      for (const r3 of e2) if (0 === r3.issues.length) return t2.value = r3.value, t2;
      const s2 = e2.filter((e3) => !Xo(e3));
      return 1 === s2.length ? (t2.value = s2[0].value, s2[0]) : (t2.issues.push({ code: "invalid_union", input: t2.value, inst: r2, errors: e2.map((e3) => e3.issues.map((e4) => ri(e4, n2, xo()))) }), t2);
    }
    const rl = Eo("$ZodUnion", (e2, t2) => {
      ic.init(e2, t2), Do(e2._zod, "optin", () => t2.options.some((e3) => "optional" === e3._zod.optin) ? "optional" : void 0), Do(e2._zod, "optout", () => t2.options.some((e3) => "optional" === e3._zod.optout) ? "optional" : void 0), Do(e2._zod, "values", () => {
        if (t2.options.every((e3) => e3._zod.values)) return new Set(t2.options.flatMap((e3) => Array.from(e3._zod.values)));
      }), Do(e2._zod, "pattern", () => {
        if (t2.options.every((e3) => e3._zod.pattern)) {
          const e3 = t2.options.map((e4) => e4._zod.pattern);
          return new RegExp(`^(${e3.map((e4) => Mo(e4.source)).join("|")})$`);
        }
      });
      const r2 = 1 === t2.options.length, n2 = t2.options[0]._zod.run;
      e2._zod.parse = (s2, o2) => {
        if (r2) return n2(s2, o2);
        let i2 = false;
        const a2 = [];
        for (const e3 of t2.options) {
          const t3 = e3._zod.run({ value: s2.value, issues: [] }, o2);
          if (t3 instanceof Promise) a2.push(t3), i2 = true;
          else {
            if (0 === t3.issues.length) return t3;
            a2.push(t3);
          }
        }
        return i2 ? Promise.all(a2).then((t3) => tl(t3, s2, e2, o2)) : tl(a2, s2, e2, o2);
      };
    });
    function nl(e2, t2, r2, n2) {
      const s2 = e2.filter((e3) => 0 === e3.issues.length);
      return 1 === s2.length ? (t2.value = s2[0].value, t2) : (0 === s2.length ? t2.issues.push({ code: "invalid_union", input: t2.value, inst: r2, errors: e2.map((e3) => e3.issues.map((e4) => ri(e4, n2, xo()))) }) : t2.issues.push({ code: "invalid_union", input: t2.value, inst: r2, errors: [], inclusive: false }), t2);
    }
    const sl = Eo("$ZodXor", (e2, t2) => {
      rl.init(e2, t2), t2.inclusive = false;
      const r2 = 1 === t2.options.length, n2 = t2.options[0]._zod.run;
      e2._zod.parse = (s2, o2) => {
        if (r2) return n2(s2, o2);
        let i2 = false;
        const a2 = [];
        for (const e3 of t2.options) {
          const t3 = e3._zod.run({ value: s2.value, issues: [] }, o2);
          t3 instanceof Promise ? (a2.push(t3), i2 = true) : a2.push(t3);
        }
        return i2 ? Promise.all(a2).then((t3) => nl(t3, s2, e2, o2)) : nl(a2, s2, e2, o2);
      };
    }), ol = Eo("$ZodDiscriminatedUnion", (e2, t2) => {
      t2.inclusive = false, rl.init(e2, t2);
      const r2 = e2._zod.parse;
      Do(e2._zod, "propValues", () => {
        const e3 = {};
        for (const r3 of t2.options) {
          const n3 = r3._zod.propValues;
          if (!n3 || 0 === Object.keys(n3).length) throw new Error(`Invalid discriminated union option at index "${t2.options.indexOf(r3)}"`);
          for (const [t3, r4] of Object.entries(n3)) {
            e3[t3] || (e3[t3] = /* @__PURE__ */ new Set());
            for (const n4 of r4) e3[t3].add(n4);
          }
        }
        return e3;
      });
      const n2 = Po(() => {
        const e3 = t2.options, r3 = /* @__PURE__ */ new Map();
        for (const n3 of e3) {
          const e4 = n3._zod.propValues?.[t2.discriminator];
          if (!e4 || 0 === e4.size) throw new Error(`Invalid discriminated union option at index "${t2.options.indexOf(n3)}"`);
          for (const t3 of e4) {
            if (r3.has(t3)) throw new Error(`Duplicate discriminator value "${String(t3)}"`);
            r3.set(t3, n3);
          }
        }
        return r3;
      });
      e2._zod.parse = (s2, o2) => {
        const i2 = s2.value;
        if (!Lo(i2)) return s2.issues.push({ code: "invalid_type", expected: "object", input: i2, inst: e2 }), s2;
        const a2 = n2.value.get(i2?.[t2.discriminator]);
        return a2 ? a2._zod.run(s2, o2) : t2.unionFallback ? r2(s2, o2) : (s2.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: t2.discriminator, input: i2, path: [t2.discriminator], inst: e2 }), s2);
      };
    }), il = Eo("$ZodIntersection", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (e3, r2) => {
        const n2 = e3.value, s2 = t2.left._zod.run({ value: n2, issues: [] }, r2), o2 = t2.right._zod.run({ value: n2, issues: [] }, r2);
        return s2 instanceof Promise || o2 instanceof Promise ? Promise.all([s2, o2]).then(([t3, r3]) => cl(e3, t3, r3)) : cl(e3, s2, o2);
      };
    });
    function al(e2, t2) {
      if (e2 === t2) return { valid: true, data: e2 };
      if (e2 instanceof Date && t2 instanceof Date && +e2 === +t2) return { valid: true, data: e2 };
      if (Qo(e2) && Qo(t2)) {
        const r2 = Object.keys(t2), n2 = Object.keys(e2).filter((e3) => -1 !== r2.indexOf(e3)), s2 = { ...e2, ...t2 };
        for (const r3 of n2) {
          const n3 = al(e2[r3], t2[r3]);
          if (!n3.valid) return { valid: false, mergeErrorPath: [r3, ...n3.mergeErrorPath] };
          s2[r3] = n3.data;
        }
        return { valid: true, data: s2 };
      }
      if (Array.isArray(e2) && Array.isArray(t2)) {
        if (e2.length !== t2.length) return { valid: false, mergeErrorPath: [] };
        const r2 = [];
        for (let n2 = 0; n2 < e2.length; n2++) {
          const s2 = al(e2[n2], t2[n2]);
          if (!s2.valid) return { valid: false, mergeErrorPath: [n2, ...s2.mergeErrorPath] };
          r2.push(s2.data);
        }
        return { valid: true, data: r2 };
      }
      return { valid: false, mergeErrorPath: [] };
    }
    function cl(e2, t2, r2) {
      const n2 = /* @__PURE__ */ new Map();
      let s2;
      for (const r3 of t2.issues) if ("unrecognized_keys" === r3.code) {
        s2 ?? (s2 = r3);
        for (const e3 of r3.keys) n2.has(e3) || n2.set(e3, {}), n2.get(e3).l = true;
      } else e2.issues.push(r3);
      for (const t3 of r2.issues) if ("unrecognized_keys" === t3.code) for (const e3 of t3.keys) n2.has(e3) || n2.set(e3, {}), n2.get(e3).r = true;
      else e2.issues.push(t3);
      const o2 = [...n2].filter(([, e3]) => e3.l && e3.r).map(([e3]) => e3);
      if (o2.length && s2 && e2.issues.push({ ...s2, keys: o2 }), Xo(e2)) return e2;
      const i2 = al(t2.value, r2.value);
      if (!i2.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i2.mergeErrorPath)}`);
      return e2.value = i2.data, e2;
    }
    const ll = Eo("$ZodTuple", (e2, t2) => {
      ic.init(e2, t2);
      const r2 = t2.items;
      e2._zod.parse = (n2, s2) => {
        const o2 = n2.value;
        if (!Array.isArray(o2)) return n2.issues.push({ input: o2, inst: e2, expected: "tuple", code: "invalid_type" }), n2;
        n2.value = [];
        const i2 = [], a2 = [...r2].reverse().findIndex((e3) => "optional" !== e3._zod.optin), c2 = -1 === a2 ? 0 : r2.length - a2;
        if (!t2.rest) {
          const t3 = o2.length > r2.length, s3 = o2.length < c2 - 1;
          if (t3 || s3) return n2.issues.push({ ...t3 ? { code: "too_big", maximum: r2.length, inclusive: true } : { code: "too_small", minimum: r2.length }, input: o2, inst: e2, origin: "array" }), n2;
        }
        let l2 = -1;
        for (const e3 of r2) {
          if (l2++, l2 >= o2.length && l2 >= c2) continue;
          const t3 = e3._zod.run({ value: o2[l2], issues: [] }, s2);
          t3 instanceof Promise ? i2.push(t3.then((e4) => ul(e4, n2, l2))) : ul(t3, n2, l2);
        }
        if (t2.rest) {
          const e3 = o2.slice(r2.length);
          for (const r3 of e3) {
            l2++;
            const e4 = t2.rest._zod.run({ value: r3, issues: [] }, s2);
            e4 instanceof Promise ? i2.push(e4.then((e5) => ul(e5, n2, l2))) : ul(e4, n2, l2);
          }
        }
        return i2.length ? Promise.all(i2).then(() => n2) : n2;
      };
    });
    function ul(e2, t2, r2) {
      e2.issues.length && t2.issues.push(...ei(r2, e2.issues)), t2.value[r2] = e2.value;
    }
    const dl = Eo("$ZodRecord", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (r2, n2) => {
        const s2 = r2.value;
        if (!Qo(s2)) return r2.issues.push({ expected: "record", code: "invalid_type", input: s2, inst: e2 }), r2;
        const o2 = [], i2 = t2.keyType._zod.values;
        if (i2) {
          r2.value = {};
          const a2 = /* @__PURE__ */ new Set();
          for (const e3 of i2) if ("string" == typeof e3 || "number" == typeof e3 || "symbol" == typeof e3) {
            a2.add("number" == typeof e3 ? e3.toString() : e3);
            const i3 = t2.valueType._zod.run({ value: s2[e3], issues: [] }, n2);
            i3 instanceof Promise ? o2.push(i3.then((t3) => {
              t3.issues.length && r2.issues.push(...ei(e3, t3.issues)), r2.value[e3] = t3.value;
            })) : (i3.issues.length && r2.issues.push(...ei(e3, i3.issues)), r2.value[e3] = i3.value);
          }
          let c2;
          for (const e3 in s2) a2.has(e3) || (c2 = c2 ?? [], c2.push(e3));
          c2 && c2.length > 0 && r2.issues.push({ code: "unrecognized_keys", input: s2, inst: e2, keys: c2 });
        } else {
          r2.value = {};
          for (const i3 of Reflect.ownKeys(s2)) {
            if ("__proto__" === i3) continue;
            let a2 = t2.keyType._zod.run({ value: i3, issues: [] }, n2);
            if (a2 instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
            if ("string" == typeof i3 && ua.test(i3) && a2.issues.length) {
              const e3 = t2.keyType._zod.run({ value: Number(i3), issues: [] }, n2);
              if (e3 instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
              0 === e3.issues.length && (a2 = e3);
            }
            if (a2.issues.length) {
              "loose" === t2.mode ? r2.value[i3] = s2[i3] : r2.issues.push({ code: "invalid_key", origin: "record", issues: a2.issues.map((e3) => ri(e3, n2, xo())), input: i3, path: [i3], inst: e2 });
              continue;
            }
            const c2 = t2.valueType._zod.run({ value: s2[i3], issues: [] }, n2);
            c2 instanceof Promise ? o2.push(c2.then((e3) => {
              e3.issues.length && r2.issues.push(...ei(i3, e3.issues)), r2.value[a2.value] = e3.value;
            })) : (c2.issues.length && r2.issues.push(...ei(i3, c2.issues)), r2.value[a2.value] = c2.value);
          }
        }
        return o2.length ? Promise.all(o2).then(() => r2) : r2;
      };
    }), pl = Eo("$ZodMap", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (r2, n2) => {
        const s2 = r2.value;
        if (!(s2 instanceof Map)) return r2.issues.push({ expected: "map", code: "invalid_type", input: s2, inst: e2 }), r2;
        const o2 = [];
        r2.value = /* @__PURE__ */ new Map();
        for (const [i2, a2] of s2) {
          const c2 = t2.keyType._zod.run({ value: i2, issues: [] }, n2), l2 = t2.valueType._zod.run({ value: a2, issues: [] }, n2);
          c2 instanceof Promise || l2 instanceof Promise ? o2.push(Promise.all([c2, l2]).then(([t3, o3]) => {
            ml(t3, o3, r2, i2, s2, e2, n2);
          })) : ml(c2, l2, r2, i2, s2, e2, n2);
        }
        return o2.length ? Promise.all(o2).then(() => r2) : r2;
      };
    });
    function ml(e2, t2, r2, n2, s2, o2, i2) {
      e2.issues.length && (Go.has(typeof n2) ? r2.issues.push(...ei(n2, e2.issues)) : r2.issues.push({ code: "invalid_key", origin: "map", input: s2, inst: o2, issues: e2.issues.map((e3) => ri(e3, i2, xo())) })), t2.issues.length && (Go.has(typeof n2) ? r2.issues.push(...ei(n2, t2.issues)) : r2.issues.push({ origin: "map", code: "invalid_element", input: s2, inst: o2, key: n2, issues: t2.issues.map((e3) => ri(e3, i2, xo())) })), r2.value.set(e2.value, t2.value);
    }
    const hl = Eo("$ZodSet", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (r2, n2) => {
        const s2 = r2.value;
        if (!(s2 instanceof Set)) return r2.issues.push({ input: s2, inst: e2, expected: "set", code: "invalid_type" }), r2;
        const o2 = [];
        r2.value = /* @__PURE__ */ new Set();
        for (const e3 of s2) {
          const s3 = t2.valueType._zod.run({ value: e3, issues: [] }, n2);
          s3 instanceof Promise ? o2.push(s3.then((e4) => fl(e4, r2))) : fl(s3, r2);
        }
        return o2.length ? Promise.all(o2).then(() => r2) : r2;
      };
    });
    function fl(e2, t2) {
      e2.issues.length && t2.issues.push(...e2.issues), t2.value.add(e2.value);
    }
    const gl = Eo("$ZodEnum", (e2, t2) => {
      ic.init(e2, t2);
      const r2 = To(t2.entries), n2 = new Set(r2);
      e2._zod.values = n2, e2._zod.pattern = new RegExp(`^(${r2.filter((e3) => Go.has(typeof e3)).map((e3) => "string" == typeof e3 ? zo(e3) : e3.toString()).join("|")})$`), e2._zod.parse = (t3, s2) => {
        const o2 = t3.value;
        return n2.has(o2) || t3.issues.push({ code: "invalid_value", values: r2, input: o2, inst: e2 }), t3;
      };
    }), yl = Eo("$ZodLiteral", (e2, t2) => {
      if (ic.init(e2, t2), 0 === t2.values.length) throw new Error("Cannot create literal schema with no valid values");
      const r2 = new Set(t2.values);
      e2._zod.values = r2, e2._zod.pattern = new RegExp(`^(${t2.values.map((e3) => "string" == typeof e3 ? zo(e3) : e3 ? zo(e3.toString()) : String(e3)).join("|")})$`), e2._zod.parse = (n2, s2) => {
        const o2 = n2.value;
        return r2.has(o2) || n2.issues.push({ code: "invalid_value", values: t2.values, input: o2, inst: e2 }), n2;
      };
    }), wl = Eo("$ZodFile", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (t3, r2) => {
        const n2 = t3.value;
        return n2 instanceof File || t3.issues.push({ expected: "file", code: "invalid_type", input: n2, inst: e2 }), t3;
      };
    }), vl = Eo("$ZodTransform", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (r2, n2) => {
        if ("backward" === n2.direction) throw new Co(e2.constructor.name);
        const s2 = t2.transform(r2.value, r2);
        if (n2.async) {
          return (s2 instanceof Promise ? s2 : Promise.resolve(s2)).then((e3) => (r2.value = e3, r2));
        }
        if (s2 instanceof Promise) throw new Io();
        return r2.value = s2, r2;
      };
    });
    function _l(e2, t2) {
      return e2.issues.length && void 0 === t2 ? { issues: [], value: void 0 } : e2;
    }
    const Al = Eo("$ZodOptional", (e2, t2) => {
      ic.init(e2, t2), e2._zod.optin = "optional", e2._zod.optout = "optional", Do(e2._zod, "values", () => t2.innerType._zod.values ? /* @__PURE__ */ new Set([...t2.innerType._zod.values, void 0]) : void 0), Do(e2._zod, "pattern", () => {
        const e3 = t2.innerType._zod.pattern;
        return e3 ? new RegExp(`^(${Mo(e3.source)})?$`) : void 0;
      }), e2._zod.parse = (e3, r2) => {
        if ("optional" === t2.innerType._zod.optin) {
          const n2 = t2.innerType._zod.run(e3, r2);
          return n2 instanceof Promise ? n2.then((t3) => _l(t3, e3.value)) : _l(n2, e3.value);
        }
        return void 0 === e3.value ? e3 : t2.innerType._zod.run(e3, r2);
      };
    }), Sl = Eo("$ZodExactOptional", (e2, t2) => {
      Al.init(e2, t2), Do(e2._zod, "values", () => t2.innerType._zod.values), Do(e2._zod, "pattern", () => t2.innerType._zod.pattern), e2._zod.parse = (e3, r2) => t2.innerType._zod.run(e3, r2);
    }), bl = Eo("$ZodNullable", (e2, t2) => {
      ic.init(e2, t2), Do(e2._zod, "optin", () => t2.innerType._zod.optin), Do(e2._zod, "optout", () => t2.innerType._zod.optout), Do(e2._zod, "pattern", () => {
        const e3 = t2.innerType._zod.pattern;
        return e3 ? new RegExp(`^(${Mo(e3.source)}|null)$`) : void 0;
      }), Do(e2._zod, "values", () => t2.innerType._zod.values ? /* @__PURE__ */ new Set([...t2.innerType._zod.values, null]) : void 0), e2._zod.parse = (e3, r2) => null === e3.value ? e3 : t2.innerType._zod.run(e3, r2);
    }), El = Eo("$ZodDefault", (e2, t2) => {
      ic.init(e2, t2), e2._zod.optin = "optional", Do(e2._zod, "values", () => t2.innerType._zod.values), e2._zod.parse = (e3, r2) => {
        if ("backward" === r2.direction) return t2.innerType._zod.run(e3, r2);
        if (void 0 === e3.value) return e3.value = t2.defaultValue, e3;
        const n2 = t2.innerType._zod.run(e3, r2);
        return n2 instanceof Promise ? n2.then((e4) => Il(e4, t2)) : Il(n2, t2);
      };
    });
    function Il(e2, t2) {
      return void 0 === e2.value && (e2.value = t2.defaultValue), e2;
    }
    const Cl = Eo("$ZodPrefault", (e2, t2) => {
      ic.init(e2, t2), e2._zod.optin = "optional", Do(e2._zod, "values", () => t2.innerType._zod.values), e2._zod.parse = (e3, r2) => ("backward" === r2.direction || void 0 === e3.value && (e3.value = t2.defaultValue), t2.innerType._zod.run(e3, r2));
    }), kl = Eo("$ZodNonOptional", (e2, t2) => {
      ic.init(e2, t2), Do(e2._zod, "values", () => {
        const e3 = t2.innerType._zod.values;
        return e3 ? new Set([...e3].filter((e4) => void 0 !== e4)) : void 0;
      }), e2._zod.parse = (r2, n2) => {
        const s2 = t2.innerType._zod.run(r2, n2);
        return s2 instanceof Promise ? s2.then((t3) => xl(t3, e2)) : xl(s2, e2);
      };
    });
    function xl(e2, t2) {
      return e2.issues.length || void 0 !== e2.value || e2.issues.push({ code: "invalid_type", expected: "nonoptional", input: e2.value, inst: t2 }), e2;
    }
    const Tl = Eo("$ZodSuccess", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (e3, r2) => {
        if ("backward" === r2.direction) throw new Co("ZodSuccess");
        const n2 = t2.innerType._zod.run(e3, r2);
        return n2 instanceof Promise ? n2.then((t3) => (e3.value = 0 === t3.issues.length, e3)) : (e3.value = 0 === n2.issues.length, e3);
      };
    }), Rl = Eo("$ZodCatch", (e2, t2) => {
      ic.init(e2, t2), Do(e2._zod, "optin", () => t2.innerType._zod.optin), Do(e2._zod, "optout", () => t2.innerType._zod.optout), Do(e2._zod, "values", () => t2.innerType._zod.values), e2._zod.parse = (e3, r2) => {
        if ("backward" === r2.direction) return t2.innerType._zod.run(e3, r2);
        const n2 = t2.innerType._zod.run(e3, r2);
        return n2 instanceof Promise ? n2.then((n3) => (e3.value = n3.value, n3.issues.length && (e3.value = t2.catchValue({ ...e3, error: { issues: n3.issues.map((e4) => ri(e4, r2, xo())) }, input: e3.value }), e3.issues = []), e3)) : (e3.value = n2.value, n2.issues.length && (e3.value = t2.catchValue({ ...e3, error: { issues: n2.issues.map((e4) => ri(e4, r2, xo())) }, input: e3.value }), e3.issues = []), e3);
      };
    }), Bl = Eo("$ZodNaN", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (t3, r2) => ("number" == typeof t3.value && Number.isNaN(t3.value) || t3.issues.push({ input: t3.value, inst: e2, expected: "nan", code: "invalid_type" }), t3);
    }), Pl = Eo("$ZodPipe", (e2, t2) => {
      ic.init(e2, t2), Do(e2._zod, "values", () => t2.in._zod.values), Do(e2._zod, "optin", () => t2.in._zod.optin), Do(e2._zod, "optout", () => t2.out._zod.optout), Do(e2._zod, "propValues", () => t2.in._zod.propValues), e2._zod.parse = (e3, r2) => {
        if ("backward" === r2.direction) {
          const n3 = t2.out._zod.run(e3, r2);
          return n3 instanceof Promise ? n3.then((e4) => Jl(e4, t2.in, r2)) : Jl(n3, t2.in, r2);
        }
        const n2 = t2.in._zod.run(e3, r2);
        return n2 instanceof Promise ? n2.then((e4) => Jl(e4, t2.out, r2)) : Jl(n2, t2.out, r2);
      };
    });
    function Jl(e2, t2, r2) {
      return e2.issues.length ? (e2.aborted = true, e2) : t2._zod.run({ value: e2.value, issues: e2.issues }, r2);
    }
    const Ml = Eo("$ZodCodec", (e2, t2) => {
      ic.init(e2, t2), Do(e2._zod, "values", () => t2.in._zod.values), Do(e2._zod, "optin", () => t2.in._zod.optin), Do(e2._zod, "optout", () => t2.out._zod.optout), Do(e2._zod, "propValues", () => t2.in._zod.propValues), e2._zod.parse = (e3, r2) => {
        if ("forward" === (r2.direction || "forward")) {
          const n2 = t2.in._zod.run(e3, r2);
          return n2 instanceof Promise ? n2.then((e4) => ql(e4, t2, r2)) : ql(n2, t2, r2);
        }
        {
          const n2 = t2.out._zod.run(e3, r2);
          return n2 instanceof Promise ? n2.then((e4) => ql(e4, t2, r2)) : ql(n2, t2, r2);
        }
      };
    });
    function ql(e2, t2, r2) {
      if (e2.issues.length) return e2.aborted = true, e2;
      if ("forward" === (r2.direction || "forward")) {
        const n2 = t2.transform(e2.value, e2);
        return n2 instanceof Promise ? n2.then((n3) => Dl(e2, n3, t2.out, r2)) : Dl(e2, n2, t2.out, r2);
      }
      {
        const n2 = t2.reverseTransform(e2.value, e2);
        return n2 instanceof Promise ? n2.then((n3) => Dl(e2, n3, t2.in, r2)) : Dl(e2, n2, t2.in, r2);
      }
    }
    function Dl(e2, t2, r2, n2) {
      return e2.issues.length ? (e2.aborted = true, e2) : r2._zod.run({ value: t2, issues: e2.issues }, n2);
    }
    const Ol = Eo("$ZodReadonly", (e2, t2) => {
      ic.init(e2, t2), Do(e2._zod, "propValues", () => t2.innerType._zod.propValues), Do(e2._zod, "values", () => t2.innerType._zod.values), Do(e2._zod, "optin", () => t2.innerType?._zod?.optin), Do(e2._zod, "optout", () => t2.innerType?._zod?.optout), e2._zod.parse = (e3, r2) => {
        if ("backward" === r2.direction) return t2.innerType._zod.run(e3, r2);
        const n2 = t2.innerType._zod.run(e3, r2);
        return n2 instanceof Promise ? n2.then(Nl) : Nl(n2);
      };
    });
    function Nl(e2) {
      return e2.value = Object.freeze(e2.value), e2;
    }
    const Fl = Eo("$ZodTemplateLiteral", (e2, t2) => {
      ic.init(e2, t2);
      const r2 = [];
      for (const e3 of t2.parts) if ("object" == typeof e3 && null !== e3) {
        if (!e3._zod.pattern) throw new Error(`Invalid template literal part, no pattern found: ${[...e3._zod.traits].shift()}`);
        const t3 = e3._zod.pattern instanceof RegExp ? e3._zod.pattern.source : e3._zod.pattern;
        if (!t3) throw new Error(`Invalid template literal part: ${e3._zod.traits}`);
        const n2 = t3.startsWith("^") ? 1 : 0, s2 = t3.endsWith("$") ? t3.length - 1 : t3.length;
        r2.push(t3.slice(n2, s2));
      } else {
        if (null !== e3 && !Ho.has(typeof e3)) throw new Error(`Invalid template literal part: ${e3}`);
        r2.push(zo(`${e3}`));
      }
      e2._zod.pattern = new RegExp(`^${r2.join("")}$`), e2._zod.parse = (r3, n2) => "string" != typeof r3.value ? (r3.issues.push({ input: r3.value, inst: e2, expected: "string", code: "invalid_type" }), r3) : (e2._zod.pattern.lastIndex = 0, e2._zod.pattern.test(r3.value) || r3.issues.push({ input: r3.value, inst: e2, code: "invalid_format", format: t2.format ?? "template_literal", pattern: e2._zod.pattern.source }), r3);
    }), Ul = Eo("$ZodFunction", (e2, t2) => (ic.init(e2, t2), e2._def = t2, e2._zod.def = t2, e2.implement = (t3) => {
      if ("function" != typeof t3) throw new Error("implement() must be called with a function");
      return function(...r2) {
        const n2 = e2._def.input ? ui(e2._def.input, r2) : r2, s2 = Reflect.apply(t3, this, n2);
        return e2._def.output ? ui(e2._def.output, s2) : s2;
      };
    }, e2.implementAsync = (t3) => {
      if ("function" != typeof t3) throw new Error("implementAsync() must be called with a function");
      return async function(...r2) {
        const n2 = e2._def.input ? await pi(e2._def.input, r2) : r2, s2 = await Reflect.apply(t3, this, n2);
        return e2._def.output ? await pi(e2._def.output, s2) : s2;
      };
    }, e2._zod.parse = (t3, r2) => {
      if ("function" != typeof t3.value) return t3.issues.push({ code: "invalid_type", expected: "function", input: t3.value, inst: e2 }), t3;
      const n2 = e2._def.output && "promise" === e2._def.output._zod.def.type;
      return t3.value = n2 ? e2.implementAsync(t3.value) : e2.implement(t3.value), t3;
    }, e2.input = (...t3) => {
      const r2 = e2.constructor;
      return Array.isArray(t3[0]) ? new r2({ type: "function", input: new ll({ type: "tuple", items: t3[0], rest: t3[1] }), output: e2._def.output }) : new r2({ type: "function", input: t3[0], output: e2._def.output });
    }, e2.output = (t3) => new (0, e2.constructor)({ type: "function", input: e2._def.input, output: t3 }), e2)), Ll = Eo("$ZodPromise", (e2, t2) => {
      ic.init(e2, t2), e2._zod.parse = (e3, r2) => Promise.resolve(e3.value).then((e4) => t2.innerType._zod.run({ value: e4, issues: [] }, r2));
    }), $l = Eo("$ZodLazy", (e2, t2) => {
      ic.init(e2, t2), Do(e2._zod, "innerType", () => t2.getter()), Do(e2._zod, "pattern", () => e2._zod.innerType?._zod?.pattern), Do(e2._zod, "propValues", () => e2._zod.innerType?._zod?.propValues), Do(e2._zod, "optin", () => e2._zod.innerType?._zod?.optin ?? void 0), Do(e2._zod, "optout", () => e2._zod.innerType?._zod?.optout ?? void 0), e2._zod.parse = (t3, r2) => e2._zod.innerType._zod.run(t3, r2);
    }), Ql = Eo("$ZodCustom", (e2, t2) => {
      Ma.init(e2, t2), ic.init(e2, t2), e2._zod.parse = (e3, t3) => e3, e2._zod.check = (r2) => {
        const n2 = r2.value, s2 = t2.fn(n2);
        if (s2 instanceof Promise) return s2.then((t3) => jl(t3, r2, n2, e2));
        jl(s2, r2, n2, e2);
      };
    });
    function jl(e2, t2, r2, n2) {
      if (!e2) {
        const e3 = { code: "custom", input: r2, inst: n2, path: [...n2._zod.def.path ?? []], continue: !n2._zod.def.abort };
        n2._zod.def.params && (e3.params = n2._zod.def.params), t2.issues.push(oi(e3));
      }
    }
    const Gl = () => {
      const e2 = { string: { unit: "characters", verb: "to have" }, file: { unit: "bytes", verb: "to have" }, array: { unit: "items", verb: "to have" }, set: { unit: "items", verb: "to have" }, map: { unit: "entries", verb: "to have" } };
      function t2(t3) {
        return e2[t3] ?? null;
      }
      const r2 = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", mac: "MAC address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", jwt: "JWT", template_literal: "input" }, n2 = { nan: "NaN" };
      return (e3) => {
        switch (e3.code) {
          case "invalid_type": {
            const t3 = n2[e3.expected] ?? e3.expected, r3 = (function(e4) {
              const t4 = typeof e4;
              switch (t4) {
                case "number":
                  return Number.isNaN(e4) ? "nan" : "number";
                case "object": {
                  if (null === e4) return "null";
                  if (Array.isArray(e4)) return "array";
                  const t5 = e4;
                  if (t5 && Object.getPrototypeOf(t5) !== Object.prototype && "constructor" in t5 && t5.constructor) return t5.constructor.name;
                }
              }
              return t4;
            })(e3.input);
            return `Invalid input: expected ${t3}, received ${n2[r3] ?? r3}`;
          }
          case "invalid_value":
            return 1 === e3.values.length ? `Invalid input: expected ${Ko(e3.values[0])}` : `Invalid option: expected one of ${Ro(e3.values, "|")}`;
          case "too_big": {
            const r3 = e3.inclusive ? "<=" : "<", n3 = t2(e3.origin);
            return n3 ? `Too big: expected ${e3.origin ?? "value"} to have ${r3}${e3.maximum.toString()} ${n3.unit ?? "elements"}` : `Too big: expected ${e3.origin ?? "value"} to be ${r3}${e3.maximum.toString()}`;
          }
          case "too_small": {
            const r3 = e3.inclusive ? ">=" : ">", n3 = t2(e3.origin);
            return n3 ? `Too small: expected ${e3.origin} to have ${r3}${e3.minimum.toString()} ${n3.unit}` : `Too small: expected ${e3.origin} to be ${r3}${e3.minimum.toString()}`;
          }
          case "invalid_format": {
            const t3 = e3;
            return "starts_with" === t3.format ? `Invalid string: must start with "${t3.prefix}"` : "ends_with" === t3.format ? `Invalid string: must end with "${t3.suffix}"` : "includes" === t3.format ? `Invalid string: must include "${t3.includes}"` : "regex" === t3.format ? `Invalid string: must match pattern ${t3.pattern}` : `Invalid ${r2[t3.format] ?? e3.format}`;
          }
          case "not_multiple_of":
            return `Invalid number: must be a multiple of ${e3.divisor}`;
          case "unrecognized_keys":
            return `Unrecognized key${e3.keys.length > 1 ? "s" : ""}: ${Ro(e3.keys, ", ")}`;
          case "invalid_key":
            return `Invalid key in ${e3.origin}`;
          case "invalid_union":
          default:
            return "Invalid input";
          case "invalid_element":
            return `Invalid value in ${e3.origin}`;
        }
      };
    };
    var Hl;
    /* @__PURE__ */ Symbol("ZodOutput"), /* @__PURE__ */ Symbol("ZodInput");
    class zl {
      constructor() {
        this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
      }
      add(e2, ...t2) {
        const r2 = t2[0];
        return this._map.set(e2, r2), r2 && "object" == typeof r2 && "id" in r2 && this._idmap.set(r2.id, e2), this;
      }
      clear() {
        return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
      }
      remove(e2) {
        const t2 = this._map.get(e2);
        return t2 && "object" == typeof t2 && "id" in t2 && this._idmap.delete(t2.id), this._map.delete(e2), this;
      }
      get(e2) {
        const t2 = e2._zod.parent;
        if (t2) {
          const r2 = { ...this.get(t2) ?? {} };
          delete r2.id;
          const n2 = { ...r2, ...this._map.get(e2) };
          return Object.keys(n2).length ? n2 : void 0;
        }
        return this._map.get(e2);
      }
      has(e2) {
        return this._map.has(e2);
      }
    }
    (Hl = globalThis).__zod_globalRegistry ?? (Hl.__zod_globalRegistry = new zl());
    const Wl = globalThis.__zod_globalRegistry;
    function Vl(e2, t2) {
      return new e2({ type: "string", format: "email", check: "string_format", abort: false, ...Vo(t2) });
    }
    function Kl(e2, t2) {
      return new e2({ type: "string", format: "guid", check: "string_format", abort: false, ...Vo(t2) });
    }
    function Yl(e2, t2) {
      return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, ...Vo(t2) });
    }
    function Zl(e2, t2) {
      return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...Vo(t2) });
    }
    function Xl(e2, t2) {
      return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...Vo(t2) });
    }
    function eu(e2, t2) {
      return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...Vo(t2) });
    }
    function tu(e2, t2) {
      return new e2({ type: "string", format: "url", check: "string_format", abort: false, ...Vo(t2) });
    }
    function ru(e2, t2) {
      return new e2({ type: "string", format: "emoji", check: "string_format", abort: false, ...Vo(t2) });
    }
    function nu(e2, t2) {
      return new e2({ type: "string", format: "nanoid", check: "string_format", abort: false, ...Vo(t2) });
    }
    function su(e2, t2) {
      return new e2({ type: "string", format: "cuid", check: "string_format", abort: false, ...Vo(t2) });
    }
    function ou(e2, t2) {
      return new e2({ type: "string", format: "cuid2", check: "string_format", abort: false, ...Vo(t2) });
    }
    function iu(e2, t2) {
      return new e2({ type: "string", format: "ulid", check: "string_format", abort: false, ...Vo(t2) });
    }
    function au(e2, t2) {
      return new e2({ type: "string", format: "xid", check: "string_format", abort: false, ...Vo(t2) });
    }
    function cu(e2, t2) {
      return new e2({ type: "string", format: "ksuid", check: "string_format", abort: false, ...Vo(t2) });
    }
    function lu(e2, t2) {
      return new e2({ type: "string", format: "ipv4", check: "string_format", abort: false, ...Vo(t2) });
    }
    function uu(e2, t2) {
      return new e2({ type: "string", format: "ipv6", check: "string_format", abort: false, ...Vo(t2) });
    }
    function du(e2, t2) {
      return new e2({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...Vo(t2) });
    }
    function pu(e2, t2) {
      return new e2({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...Vo(t2) });
    }
    function mu(e2, t2) {
      return new e2({ type: "string", format: "base64", check: "string_format", abort: false, ...Vo(t2) });
    }
    function hu(e2, t2) {
      return new e2({ type: "string", format: "base64url", check: "string_format", abort: false, ...Vo(t2) });
    }
    function fu(e2, t2) {
      return new e2({ type: "string", format: "e164", check: "string_format", abort: false, ...Vo(t2) });
    }
    function gu(e2, t2) {
      return new e2({ type: "string", format: "jwt", check: "string_format", abort: false, ...Vo(t2) });
    }
    function yu(e2, t2) {
      return new Da({ check: "less_than", ...Vo(t2), value: e2, inclusive: false });
    }
    function wu(e2, t2) {
      return new Da({ check: "less_than", ...Vo(t2), value: e2, inclusive: true });
    }
    function vu(e2, t2) {
      return new Oa({ check: "greater_than", ...Vo(t2), value: e2, inclusive: false });
    }
    function _u(e2, t2) {
      return new Oa({ check: "greater_than", ...Vo(t2), value: e2, inclusive: true });
    }
    function Au(e2) {
      return vu(0, e2);
    }
    function Su(e2) {
      return yu(0, e2);
    }
    function bu(e2) {
      return wu(0, e2);
    }
    function Eu(e2) {
      return _u(0, e2);
    }
    function Iu(e2, t2) {
      return new Na({ check: "multiple_of", ...Vo(t2), value: e2 });
    }
    function Cu(e2, t2) {
      return new La({ check: "max_size", ...Vo(t2), maximum: e2 });
    }
    function ku(e2, t2) {
      return new $a({ check: "min_size", ...Vo(t2), minimum: e2 });
    }
    function xu(e2, t2) {
      return new Qa({ check: "size_equals", ...Vo(t2), size: e2 });
    }
    function Tu(e2, t2) {
      return new ja({ check: "max_length", ...Vo(t2), maximum: e2 });
    }
    function Ru(e2, t2) {
      return new Ga({ check: "min_length", ...Vo(t2), minimum: e2 });
    }
    function Bu(e2, t2) {
      return new Ha({ check: "length_equals", ...Vo(t2), length: e2 });
    }
    function Pu(e2, t2) {
      return new Wa({ check: "string_format", format: "regex", ...Vo(t2), pattern: e2 });
    }
    function Ju(e2) {
      return new Va({ check: "string_format", format: "lowercase", ...Vo(e2) });
    }
    function Mu(e2) {
      return new Ka({ check: "string_format", format: "uppercase", ...Vo(e2) });
    }
    function qu(e2, t2) {
      return new Ya({ check: "string_format", format: "includes", ...Vo(t2), includes: e2 });
    }
    function Du(e2, t2) {
      return new Za({ check: "string_format", format: "starts_with", ...Vo(t2), prefix: e2 });
    }
    function Ou(e2, t2) {
      return new Xa({ check: "string_format", format: "ends_with", ...Vo(t2), suffix: e2 });
    }
    function Nu(e2, t2, r2) {
      return new tc({ check: "property", property: e2, schema: t2, ...Vo(r2) });
    }
    function Fu(e2, t2) {
      return new rc({ check: "mime_type", mime: e2, ...Vo(t2) });
    }
    function Uu(e2) {
      return new nc({ check: "overwrite", tx: e2 });
    }
    function Lu(e2) {
      return Uu((t2) => t2.normalize(e2));
    }
    function $u() {
      return Uu((e2) => e2.trim());
    }
    function Qu() {
      return Uu((e2) => e2.toLowerCase());
    }
    function ju() {
      return Uu((e2) => e2.toUpperCase());
    }
    function Gu() {
      return Uu((e2) => (function(e3) {
        return e3.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
      })(e2));
    }
    function Hu(e2) {
      const t2 = (function(e3, t3) {
        const r2 = new Ma({ check: "custom", ...Vo(t3) });
        return r2._zod.check = e3, r2;
      })((r2) => (r2.addIssue = (e3) => {
        if ("string" == typeof e3) r2.issues.push(oi(e3, r2.value, t2._zod.def));
        else {
          const n2 = e3;
          n2.fatal && (n2.continue = false), n2.code ?? (n2.code = "custom"), n2.input ?? (n2.input = r2.value), n2.inst ?? (n2.inst = t2), n2.continue ?? (n2.continue = !t2._zod.def.abort), r2.issues.push(oi(n2));
        }
      }, e2(r2.value, r2)));
      return t2;
    }
    function zu(e2, t2, r2, n2 = {}) {
      const s2 = Vo(n2), o2 = { ...Vo(n2), check: "string_format", type: "string", format: t2, fn: "function" == typeof r2 ? r2 : (e3) => r2.test(e3), ...s2 };
      r2 instanceof RegExp && (o2.pattern = r2);
      return new e2(o2);
    }
    function Wu(e2) {
      let t2 = e2?.target ?? "draft-2020-12";
      return "draft-4" === t2 && (t2 = "draft-04"), "draft-7" === t2 && (t2 = "draft-07"), { processors: e2.processors ?? {}, metadataRegistry: e2?.metadata ?? Wl, target: t2, unrepresentable: e2?.unrepresentable ?? "throw", override: e2?.override ?? (() => {
      }), io: e2?.io ?? "output", counter: 0, seen: /* @__PURE__ */ new Map(), cycles: e2?.cycles ?? "ref", reused: e2?.reused ?? "inline", external: e2?.external ?? void 0 };
    }
    function Vu(e2, t2, r2 = { path: [], schemaPath: [] }) {
      var n2;
      const s2 = e2._zod.def, o2 = t2.seen.get(e2);
      if (o2) {
        o2.count++;
        return r2.schemaPath.includes(e2) && (o2.cycle = r2.path), o2.schema;
      }
      const i2 = { schema: {}, count: 1, cycle: void 0, path: r2.path };
      t2.seen.set(e2, i2);
      const a2 = e2._zod.toJSONSchema?.();
      if (a2) i2.schema = a2;
      else {
        const n3 = { ...r2, schemaPath: [...r2.schemaPath, e2], path: r2.path };
        if (e2._zod.processJSONSchema) e2._zod.processJSONSchema(t2, i2.schema, n3);
        else {
          const r3 = i2.schema, o4 = t2.processors[s2.type];
          if (!o4) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s2.type}`);
          o4(e2, t2, r3, n3);
        }
        const o3 = e2._zod.parent;
        o3 && (i2.ref || (i2.ref = o3), Vu(o3, t2, n3), t2.seen.get(o3).isParent = true);
      }
      const c2 = t2.metadataRegistry.get(e2);
      c2 && Object.assign(i2.schema, c2), "input" === t2.io && Zu(e2) && (delete i2.schema.examples, delete i2.schema.default), "input" === t2.io && i2.schema._prefault && ((n2 = i2.schema).default ?? (n2.default = i2.schema._prefault)), delete i2.schema._prefault;
      return t2.seen.get(e2).schema;
    }
    function Ku(e2, t2) {
      const r2 = e2.seen.get(t2);
      if (!r2) throw new Error("Unprocessed schema. This is a bug in Zod.");
      const n2 = /* @__PURE__ */ new Map();
      for (const t3 of e2.seen.entries()) {
        const r3 = e2.metadataRegistry.get(t3[0])?.id;
        if (r3) {
          const e3 = n2.get(r3);
          if (e3 && e3 !== t3[0]) throw new Error(`Duplicate schema id "${r3}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
          n2.set(r3, t3[0]);
        }
      }
      const s2 = (t3) => {
        if (t3[1].schema.$ref) return;
        const n3 = t3[1], { ref: s3, defId: o2 } = ((t4) => {
          const n4 = "draft-2020-12" === e2.target ? "$defs" : "definitions";
          if (e2.external) {
            const r3 = e2.external.registry.get(t4[0])?.id, s5 = e2.external.uri ?? ((e3) => e3);
            if (r3) return { ref: s5(r3) };
            const o4 = t4[1].defId ?? t4[1].schema.id ?? "schema" + e2.counter++;
            return t4[1].defId = o4, { defId: o4, ref: `${s5("__shared")}#/${n4}/${o4}` };
          }
          if (t4[1] === r2) return { ref: "#" };
          const s4 = `#/${n4}/`, o3 = t4[1].schema.id ?? "__schema" + e2.counter++;
          return { defId: o3, ref: s4 + o3 };
        })(t3);
        n3.def = { ...n3.schema }, o2 && (n3.defId = o2);
        const i2 = n3.schema;
        for (const e3 in i2) delete i2[e3];
        i2.$ref = s3;
      };
      if ("throw" === e2.cycles) for (const t3 of e2.seen.entries()) {
        const e3 = t3[1];
        if (e3.cycle) throw new Error(`Cycle detected: #/${e3.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
      for (const r3 of e2.seen.entries()) {
        const n3 = r3[1];
        if (t2 === r3[0]) {
          s2(r3);
          continue;
        }
        if (e2.external) {
          const n4 = e2.external.registry.get(r3[0])?.id;
          if (t2 !== r3[0] && n4) {
            s2(r3);
            continue;
          }
        }
        const o2 = e2.metadataRegistry.get(r3[0])?.id;
        o2 ? s2(r3) : (n3.cycle || n3.count > 1 && "ref" === e2.reused) && s2(r3);
      }
    }
    function Yu(e2, t2) {
      const r2 = e2.seen.get(t2);
      if (!r2) throw new Error("Unprocessed schema. This is a bug in Zod.");
      const n2 = (t3) => {
        const r3 = e2.seen.get(t3);
        if (null === r3.ref) return;
        const s3 = r3.def ?? r3.schema, o3 = { ...s3 }, i2 = r3.ref;
        if (r3.ref = null, i2) {
          n2(i2);
          const r4 = e2.seen.get(i2), a3 = r4.schema;
          !a3.$ref || "draft-07" !== e2.target && "draft-04" !== e2.target && "openapi-3.0" !== e2.target ? Object.assign(s3, a3) : (s3.allOf = s3.allOf ?? [], s3.allOf.push(a3)), Object.assign(s3, o3);
          if (t3._zod.parent === i2) for (const e3 in s3) "$ref" !== e3 && "allOf" !== e3 && (e3 in o3 || delete s3[e3]);
          if (a3.$ref && r4.def) for (const e3 in s3) "$ref" !== e3 && "allOf" !== e3 && e3 in r4.def && JSON.stringify(s3[e3]) === JSON.stringify(r4.def[e3]) && delete s3[e3];
        }
        const a2 = t3._zod.parent;
        if (a2 && a2 !== i2) {
          n2(a2);
          const t4 = e2.seen.get(a2);
          if (t4?.schema.$ref && (s3.$ref = t4.schema.$ref, t4.def)) for (const e3 in s3) "$ref" !== e3 && "allOf" !== e3 && e3 in t4.def && JSON.stringify(s3[e3]) === JSON.stringify(t4.def[e3]) && delete s3[e3];
        }
        e2.override({ zodSchema: t3, jsonSchema: s3, path: r3.path ?? [] });
      };
      for (const t3 of [...e2.seen.entries()].reverse()) n2(t3[0]);
      const s2 = {};
      if ("draft-2020-12" === e2.target ? s2.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-07" === e2.target ? s2.$schema = "http://json-schema.org/draft-07/schema#" : "draft-04" === e2.target ? s2.$schema = "http://json-schema.org/draft-04/schema#" : e2.target, e2.external?.uri) {
        const r3 = e2.external.registry.get(t2)?.id;
        if (!r3) throw new Error("Schema is missing an `id` property");
        s2.$id = e2.external.uri(r3);
      }
      Object.assign(s2, r2.def ?? r2.schema);
      const o2 = e2.external?.defs ?? {};
      for (const t3 of e2.seen.entries()) {
        const e3 = t3[1];
        e3.def && e3.defId && (o2[e3.defId] = e3.def);
      }
      e2.external || Object.keys(o2).length > 0 && ("draft-2020-12" === e2.target ? s2.$defs = o2 : s2.definitions = o2);
      try {
        const r3 = JSON.parse(JSON.stringify(s2));
        return Object.defineProperty(r3, "~standard", { value: { ...t2["~standard"], jsonSchema: { input: Xu(t2, "input", e2.processors), output: Xu(t2, "output", e2.processors) } }, enumerable: false, writable: false }), r3;
      } catch (e3) {
        throw new Error("Error converting schema to JSON.");
      }
    }
    function Zu(e2, t2) {
      const r2 = t2 ?? { seen: /* @__PURE__ */ new Set() };
      if (r2.seen.has(e2)) return false;
      r2.seen.add(e2);
      const n2 = e2._zod.def;
      if ("transform" === n2.type) return true;
      if ("array" === n2.type) return Zu(n2.element, r2);
      if ("set" === n2.type) return Zu(n2.valueType, r2);
      if ("lazy" === n2.type) return Zu(n2.getter(), r2);
      if ("promise" === n2.type || "optional" === n2.type || "nonoptional" === n2.type || "nullable" === n2.type || "readonly" === n2.type || "default" === n2.type || "prefault" === n2.type) return Zu(n2.innerType, r2);
      if ("intersection" === n2.type) return Zu(n2.left, r2) || Zu(n2.right, r2);
      if ("record" === n2.type || "map" === n2.type) return Zu(n2.keyType, r2) || Zu(n2.valueType, r2);
      if ("pipe" === n2.type) return Zu(n2.in, r2) || Zu(n2.out, r2);
      if ("object" === n2.type) {
        for (const e3 in n2.shape) if (Zu(n2.shape[e3], r2)) return true;
        return false;
      }
      if ("union" === n2.type) {
        for (const e3 of n2.options) if (Zu(e3, r2)) return true;
        return false;
      }
      if ("tuple" === n2.type) {
        for (const e3 of n2.items) if (Zu(e3, r2)) return true;
        return !(!n2.rest || !Zu(n2.rest, r2));
      }
      return false;
    }
    const Xu = (e2, t2, r2 = {}) => (n2) => {
      const { libraryOptions: s2, target: o2 } = n2 ?? {}, i2 = Wu({ ...s2 ?? {}, target: o2, io: t2, processors: r2 });
      return Vu(e2, i2), Ku(i2, e2), Yu(i2, e2);
    }, ed = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" }, td = (e2, t2, r2, n2) => {
      const s2 = r2;
      s2.type = "string";
      const { minimum: o2, maximum: i2, format: a2, patterns: c2, contentEncoding: l2 } = e2._zod.bag;
      if ("number" == typeof o2 && (s2.minLength = o2), "number" == typeof i2 && (s2.maxLength = i2), a2 && (s2.format = ed[a2] ?? a2, "" === s2.format && delete s2.format, "time" === a2 && delete s2.format), l2 && (s2.contentEncoding = l2), c2 && c2.size > 0) {
        const e3 = [...c2];
        1 === e3.length ? s2.pattern = e3[0].source : e3.length > 1 && (s2.allOf = [...e3.map((e4) => ({ ..."draft-07" === t2.target || "draft-04" === t2.target || "openapi-3.0" === t2.target ? { type: "string" } : {}, pattern: e4.source }))]);
      }
    }, rd = (e2, t2, r2, n2) => {
      const s2 = r2, { minimum: o2, maximum: i2, format: a2, multipleOf: c2, exclusiveMaximum: l2, exclusiveMinimum: u2 } = e2._zod.bag;
      "string" == typeof a2 && a2.includes("int") ? s2.type = "integer" : s2.type = "number", "number" == typeof u2 && ("draft-04" === t2.target || "openapi-3.0" === t2.target ? (s2.minimum = u2, s2.exclusiveMinimum = true) : s2.exclusiveMinimum = u2), "number" == typeof o2 && (s2.minimum = o2, "number" == typeof u2 && "draft-04" !== t2.target && (u2 >= o2 ? delete s2.minimum : delete s2.exclusiveMinimum)), "number" == typeof l2 && ("draft-04" === t2.target || "openapi-3.0" === t2.target ? (s2.maximum = l2, s2.exclusiveMaximum = true) : s2.exclusiveMaximum = l2), "number" == typeof i2 && (s2.maximum = i2, "number" == typeof l2 && "draft-04" !== t2.target && (l2 <= i2 ? delete s2.maximum : delete s2.exclusiveMaximum)), "number" == typeof c2 && (s2.multipleOf = c2);
    }, nd = (e2, t2, r2, n2) => {
      r2.type = "boolean";
    }, sd = (e2, t2, r2, n2) => {
      if ("throw" === t2.unrepresentable) throw new Error("BigInt cannot be represented in JSON Schema");
    }, od = (e2, t2, r2, n2) => {
      if ("throw" === t2.unrepresentable) throw new Error("Symbols cannot be represented in JSON Schema");
    }, id = (e2, t2, r2, n2) => {
      "openapi-3.0" === t2.target ? (r2.type = "string", r2.nullable = true, r2.enum = [null]) : r2.type = "null";
    }, ad = (e2, t2, r2, n2) => {
      if ("throw" === t2.unrepresentable) throw new Error("Undefined cannot be represented in JSON Schema");
    }, cd = (e2, t2, r2, n2) => {
      if ("throw" === t2.unrepresentable) throw new Error("Void cannot be represented in JSON Schema");
    }, ld = (e2, t2, r2, n2) => {
      r2.not = {};
    }, ud = (e2, t2, r2, n2) => {
      if ("throw" === t2.unrepresentable) throw new Error("Date cannot be represented in JSON Schema");
    }, dd = (e2, t2, r2, n2) => {
      const s2 = To(e2._zod.def.entries);
      s2.every((e3) => "number" == typeof e3) && (r2.type = "number"), s2.every((e3) => "string" == typeof e3) && (r2.type = "string"), r2.enum = s2;
    }, pd = (e2, t2, r2, n2) => {
      const s2 = e2._zod.def, o2 = [];
      for (const e3 of s2.values) if (void 0 === e3) {
        if ("throw" === t2.unrepresentable) throw new Error("Literal `undefined` cannot be represented in JSON Schema");
      } else if ("bigint" == typeof e3) {
        if ("throw" === t2.unrepresentable) throw new Error("BigInt literals cannot be represented in JSON Schema");
        o2.push(Number(e3));
      } else o2.push(e3);
      if (0 === o2.length) ;
      else if (1 === o2.length) {
        const e3 = o2[0];
        r2.type = null === e3 ? "null" : typeof e3, "draft-04" === t2.target || "openapi-3.0" === t2.target ? r2.enum = [e3] : r2.const = e3;
      } else o2.every((e3) => "number" == typeof e3) && (r2.type = "number"), o2.every((e3) => "string" == typeof e3) && (r2.type = "string"), o2.every((e3) => "boolean" == typeof e3) && (r2.type = "boolean"), o2.every((e3) => null === e3) && (r2.type = "null"), r2.enum = o2;
    }, md = (e2, t2, r2, n2) => {
      if ("throw" === t2.unrepresentable) throw new Error("NaN cannot be represented in JSON Schema");
    }, hd = (e2, t2, r2, n2) => {
      const s2 = r2, o2 = e2._zod.pattern;
      if (!o2) throw new Error("Pattern not found in template literal");
      s2.type = "string", s2.pattern = o2.source;
    }, fd = (e2, t2, r2, n2) => {
      const s2 = r2, o2 = { type: "string", format: "binary", contentEncoding: "binary" }, { minimum: i2, maximum: a2, mime: c2 } = e2._zod.bag;
      void 0 !== i2 && (o2.minLength = i2), void 0 !== a2 && (o2.maxLength = a2), c2 ? 1 === c2.length ? (o2.contentMediaType = c2[0], Object.assign(s2, o2)) : (Object.assign(s2, o2), s2.anyOf = c2.map((e3) => ({ contentMediaType: e3 }))) : Object.assign(s2, o2);
    }, gd = (e2, t2, r2, n2) => {
      r2.type = "boolean";
    }, yd = (e2, t2, r2, n2) => {
      if ("throw" === t2.unrepresentable) throw new Error("Custom types cannot be represented in JSON Schema");
    }, wd = (e2, t2, r2, n2) => {
      if ("throw" === t2.unrepresentable) throw new Error("Function types cannot be represented in JSON Schema");
    }, vd = (e2, t2, r2, n2) => {
      if ("throw" === t2.unrepresentable) throw new Error("Transforms cannot be represented in JSON Schema");
    }, _d = (e2, t2, r2, n2) => {
      if ("throw" === t2.unrepresentable) throw new Error("Map cannot be represented in JSON Schema");
    }, Ad = (e2, t2, r2, n2) => {
      if ("throw" === t2.unrepresentable) throw new Error("Set cannot be represented in JSON Schema");
    }, Sd = (e2, t2, r2, n2) => {
      const s2 = r2, o2 = e2._zod.def, { minimum: i2, maximum: a2 } = e2._zod.bag;
      "number" == typeof i2 && (s2.minItems = i2), "number" == typeof a2 && (s2.maxItems = a2), s2.type = "array", s2.items = Vu(o2.element, t2, { ...n2, path: [...n2.path, "items"] });
    }, bd = (e2, t2, r2, n2) => {
      const s2 = r2, o2 = e2._zod.def;
      s2.type = "object", s2.properties = {};
      const i2 = o2.shape;
      for (const e3 in i2) s2.properties[e3] = Vu(i2[e3], t2, { ...n2, path: [...n2.path, "properties", e3] });
      const a2 = new Set(Object.keys(i2)), c2 = new Set([...a2].filter((e3) => {
        const r3 = o2.shape[e3]._zod;
        return "input" === t2.io ? void 0 === r3.optin : void 0 === r3.optout;
      }));
      c2.size > 0 && (s2.required = Array.from(c2)), "never" === o2.catchall?._zod.def.type ? s2.additionalProperties = false : o2.catchall ? o2.catchall && (s2.additionalProperties = Vu(o2.catchall, t2, { ...n2, path: [...n2.path, "additionalProperties"] })) : "output" === t2.io && (s2.additionalProperties = false);
    }, Ed = (e2, t2, r2, n2) => {
      const s2 = e2._zod.def, o2 = false === s2.inclusive, i2 = s2.options.map((e3, r3) => Vu(e3, t2, { ...n2, path: [...n2.path, o2 ? "oneOf" : "anyOf", r3] }));
      o2 ? r2.oneOf = i2 : r2.anyOf = i2;
    }, Id = (e2, t2, r2, n2) => {
      const s2 = e2._zod.def, o2 = Vu(s2.left, t2, { ...n2, path: [...n2.path, "allOf", 0] }), i2 = Vu(s2.right, t2, { ...n2, path: [...n2.path, "allOf", 1] }), a2 = (e3) => "allOf" in e3 && 1 === Object.keys(e3).length, c2 = [...a2(o2) ? o2.allOf : [o2], ...a2(i2) ? i2.allOf : [i2]];
      r2.allOf = c2;
    }, Cd = (e2, t2, r2, n2) => {
      const s2 = r2, o2 = e2._zod.def;
      s2.type = "array";
      const i2 = "draft-2020-12" === t2.target ? "prefixItems" : "items", a2 = "draft-2020-12" === t2.target || "openapi-3.0" === t2.target ? "items" : "additionalItems", c2 = o2.items.map((e3, r3) => Vu(e3, t2, { ...n2, path: [...n2.path, i2, r3] })), l2 = o2.rest ? Vu(o2.rest, t2, { ...n2, path: [...n2.path, a2, ..."openapi-3.0" === t2.target ? [o2.items.length] : []] }) : null;
      "draft-2020-12" === t2.target ? (s2.prefixItems = c2, l2 && (s2.items = l2)) : "openapi-3.0" === t2.target ? (s2.items = { anyOf: c2 }, l2 && s2.items.anyOf.push(l2), s2.minItems = c2.length, l2 || (s2.maxItems = c2.length)) : (s2.items = c2, l2 && (s2.additionalItems = l2));
      const { minimum: u2, maximum: d2 } = e2._zod.bag;
      "number" == typeof u2 && (s2.minItems = u2), "number" == typeof d2 && (s2.maxItems = d2);
    }, kd = (e2, t2, r2, n2) => {
      const s2 = r2, o2 = e2._zod.def;
      s2.type = "object";
      const i2 = o2.keyType, a2 = i2._zod.bag, c2 = a2?.patterns;
      if ("loose" === o2.mode && c2 && c2.size > 0) {
        const e3 = Vu(o2.valueType, t2, { ...n2, path: [...n2.path, "patternProperties", "*"] });
        s2.patternProperties = {};
        for (const t3 of c2) s2.patternProperties[t3.source] = e3;
      } else "draft-07" !== t2.target && "draft-2020-12" !== t2.target || (s2.propertyNames = Vu(o2.keyType, t2, { ...n2, path: [...n2.path, "propertyNames"] })), s2.additionalProperties = Vu(o2.valueType, t2, { ...n2, path: [...n2.path, "additionalProperties"] });
      const l2 = i2._zod.values;
      if (l2) {
        const e3 = [...l2].filter((e4) => "string" == typeof e4 || "number" == typeof e4);
        e3.length > 0 && (s2.required = e3);
      }
    }, xd = (e2, t2, r2, n2) => {
      const s2 = e2._zod.def, o2 = Vu(s2.innerType, t2, n2), i2 = t2.seen.get(e2);
      "openapi-3.0" === t2.target ? (i2.ref = s2.innerType, r2.nullable = true) : r2.anyOf = [o2, { type: "null" }];
    }, Td = (e2, t2, r2, n2) => {
      const s2 = e2._zod.def;
      Vu(s2.innerType, t2, n2);
      t2.seen.get(e2).ref = s2.innerType;
    }, Rd = (e2, t2, r2, n2) => {
      const s2 = e2._zod.def;
      Vu(s2.innerType, t2, n2);
      t2.seen.get(e2).ref = s2.innerType, r2.default = JSON.parse(JSON.stringify(s2.defaultValue));
    }, Bd = (e2, t2, r2, n2) => {
      const s2 = e2._zod.def;
      Vu(s2.innerType, t2, n2);
      t2.seen.get(e2).ref = s2.innerType, "input" === t2.io && (r2._prefault = JSON.parse(JSON.stringify(s2.defaultValue)));
    }, Pd = (e2, t2, r2, n2) => {
      const s2 = e2._zod.def;
      Vu(s2.innerType, t2, n2);
      let o2;
      t2.seen.get(e2).ref = s2.innerType;
      try {
        o2 = s2.catchValue(void 0);
      } catch {
        throw new Error("Dynamic catch values are not supported in JSON Schema");
      }
      r2.default = o2;
    }, Jd = (e2, t2, r2, n2) => {
      const s2 = e2._zod.def, o2 = "input" === t2.io ? "transform" === s2.in._zod.def.type ? s2.out : s2.in : s2.out;
      Vu(o2, t2, n2);
      t2.seen.get(e2).ref = o2;
    }, Md = (e2, t2, r2, n2) => {
      const s2 = e2._zod.def;
      Vu(s2.innerType, t2, n2);
      t2.seen.get(e2).ref = s2.innerType, r2.readOnly = true;
    }, qd = (e2, t2, r2, n2) => {
      const s2 = e2._zod.def;
      Vu(s2.innerType, t2, n2);
      t2.seen.get(e2).ref = s2.innerType;
    }, Dd = (e2, t2, r2, n2) => {
      const s2 = e2._zod.def;
      Vu(s2.innerType, t2, n2);
      t2.seen.get(e2).ref = s2.innerType;
    }, Od = (e2, t2, r2, n2) => {
      const s2 = e2._zod.innerType;
      Vu(s2, t2, n2);
      t2.seen.get(e2).ref = s2;
    };
    const Nd = Eo("ZodISODateTime", (e2, t2) => {
      _c.init(e2, t2), up.init(e2, t2);
    });
    function Fd(e2) {
      return (function(e3, t2) {
        return new e3({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...Vo(t2) });
      })(Nd, e2);
    }
    const Ud = Eo("ZodISODate", (e2, t2) => {
      Ac.init(e2, t2), up.init(e2, t2);
    });
    function Ld(e2) {
      return (function(e3, t2) {
        return new e3({ type: "string", format: "date", check: "string_format", ...Vo(t2) });
      })(Ud, e2);
    }
    const $d = Eo("ZodISOTime", (e2, t2) => {
      Sc.init(e2, t2), up.init(e2, t2);
    });
    function Qd(e2) {
      return (function(e3, t2) {
        return new e3({ type: "string", format: "time", check: "string_format", precision: null, ...Vo(t2) });
      })($d, e2);
    }
    const jd = Eo("ZodISODuration", (e2, t2) => {
      bc.init(e2, t2), up.init(e2, t2);
    });
    function Gd(e2) {
      return (function(e3, t2) {
        return new e3({ type: "string", format: "duration", check: "string_format", ...Vo(t2) });
      })(jd, e2);
    }
    const Hd = (e2, t2) => {
      ai.init(e2, t2), e2.name = "ZodError", Object.defineProperties(e2, { format: { value: (t3) => (function(e3, t4 = (e4) => e4.message) {
        const r2 = { _errors: [] }, n2 = (e4) => {
          for (const s2 of e4.issues) if ("invalid_union" === s2.code && s2.errors.length) s2.errors.map((e5) => n2({ issues: e5 }));
          else if ("invalid_key" === s2.code) n2({ issues: s2.issues });
          else if ("invalid_element" === s2.code) n2({ issues: s2.issues });
          else if (0 === s2.path.length) r2._errors.push(t4(s2));
          else {
            let e5 = r2, n3 = 0;
            for (; n3 < s2.path.length; ) {
              const r3 = s2.path[n3];
              n3 === s2.path.length - 1 ? (e5[r3] = e5[r3] || { _errors: [] }, e5[r3]._errors.push(t4(s2))) : e5[r3] = e5[r3] || { _errors: [] }, e5 = e5[r3], n3++;
            }
          }
        };
        return n2(e3), r2;
      })(e2, t3) }, flatten: { value: (t3) => (function(e3, t4 = (e4) => e4.message) {
        const r2 = {}, n2 = [];
        for (const s2 of e3.issues) s2.path.length > 0 ? (r2[s2.path[0]] = r2[s2.path[0]] || [], r2[s2.path[0]].push(t4(s2))) : n2.push(t4(s2));
        return { formErrors: n2, fieldErrors: r2 };
      })(e2, t3) }, addIssue: { value: (t3) => {
        e2.issues.push(t3), e2.message = JSON.stringify(e2.issues, Bo, 2);
      } }, addIssues: { value: (t3) => {
        e2.issues.push(...t3), e2.message = JSON.stringify(e2.issues, Bo, 2);
      } }, isEmpty: { get: () => 0 === e2.issues.length } });
    }, zd = (Eo("ZodError", Hd), Eo("ZodError", Hd, { Parent: Error })), Wd = li(zd), Vd = di(zd), Kd = mi(zd), Yd = fi(zd), Zd = yi(zd), Xd = wi(zd), ep = vi(zd), tp = _i(zd), rp = Ai(zd), np = Si(zd), sp = bi(zd), op = Ei(zd), ip = Eo("ZodType", (e2, t2) => (ic.init(e2, t2), Object.assign(e2["~standard"], { jsonSchema: { input: Xu(e2, "input"), output: Xu(e2, "output") } }), e2.toJSONSchema = /* @__PURE__ */ ((e3, t3 = {}) => (r2) => {
      const n2 = Wu({ ...r2, processors: t3 });
      return Vu(e3, n2), Ku(n2, e3), Yu(n2, e3);
    })(e2, {}), e2.def = t2, e2.type = t2.type, Object.defineProperty(e2, "_def", { value: t2 }), e2.check = (...r2) => e2.clone(No(t2, { checks: [...t2.checks ?? [], ...r2.map((e3) => "function" == typeof e3 ? { _zod: { check: e3, def: { check: "custom" }, onattach: [] } } : e3)] }), { parent: true }), e2.with = e2.check, e2.clone = (t3, r2) => Wo(e2, t3, r2), e2.brand = () => e2, e2.register = (t3, r2) => (t3.add(e2, r2), e2), e2.parse = (t3, r2) => Wd(e2, t3, r2, { callee: e2.parse }), e2.safeParse = (t3, r2) => Kd(e2, t3, r2), e2.parseAsync = async (t3, r2) => Vd(e2, t3, r2, { callee: e2.parseAsync }), e2.safeParseAsync = async (t3, r2) => Yd(e2, t3, r2), e2.spa = e2.safeParseAsync, e2.encode = (t3, r2) => Zd(e2, t3, r2), e2.decode = (t3, r2) => Xd(e2, t3, r2), e2.encodeAsync = async (t3, r2) => ep(e2, t3, r2), e2.decodeAsync = async (t3, r2) => tp(e2, t3, r2), e2.safeEncode = (t3, r2) => rp(e2, t3, r2), e2.safeDecode = (t3, r2) => np(e2, t3, r2), e2.safeEncodeAsync = async (t3, r2) => sp(e2, t3, r2), e2.safeDecodeAsync = async (t3, r2) => op(e2, t3, r2), e2.refine = (t3, r2) => e2.check(Xh(t3, r2)), e2.superRefine = (t3) => e2.check(ef(t3)), e2.overwrite = (t3) => e2.check(Uu(t3)), e2.optional = () => wh(e2), e2.exactOptional = () => _h(e2), e2.nullable = () => Sh(e2), e2.nullish = () => wh(Sh(e2)), e2.nonoptional = (t3) => Th(e2, t3), e2.array = () => Nm(e2), e2.or = (t3) => Gm([e2, t3]), e2.and = (t3) => Ym(e2, t3), e2.transform = (t3) => Oh(e2, gh(t3)), e2.default = (t3) => Ih(e2, t3), e2.prefault = (t3) => kh(e2, t3), e2.catch = (t3) => Jh(e2, t3), e2.pipe = (t3) => Oh(e2, t3), e2.readonly = () => Lh(e2), e2.describe = (t3) => {
      const r2 = e2.clone();
      return Wl.add(r2, { description: t3 }), r2;
    }, Object.defineProperty(e2, "description", { get: () => Wl.get(e2)?.description, configurable: true }), e2.meta = (...t3) => {
      if (0 === t3.length) return Wl.get(e2);
      const r2 = e2.clone();
      return Wl.add(r2, t3[0]), r2;
    }, e2.isOptional = () => e2.safeParse(void 0).success, e2.isNullable = () => e2.safeParse(null).success, e2.apply = (t3) => t3(e2), e2)), ap = Eo("_ZodString", (e2, t2) => {
      ac.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r3, n2) => td(e2, t3, r3);
      const r2 = e2._zod.bag;
      e2.format = r2.format ?? null, e2.minLength = r2.minimum ?? null, e2.maxLength = r2.maximum ?? null, e2.regex = (...t3) => e2.check(Pu(...t3)), e2.includes = (...t3) => e2.check(qu(...t3)), e2.startsWith = (...t3) => e2.check(Du(...t3)), e2.endsWith = (...t3) => e2.check(Ou(...t3)), e2.min = (...t3) => e2.check(Ru(...t3)), e2.max = (...t3) => e2.check(Tu(...t3)), e2.length = (...t3) => e2.check(Bu(...t3)), e2.nonempty = (...t3) => e2.check(Ru(1, ...t3)), e2.lowercase = (t3) => e2.check(Ju(t3)), e2.uppercase = (t3) => e2.check(Mu(t3)), e2.trim = () => e2.check($u()), e2.normalize = (...t3) => e2.check(Lu(...t3)), e2.toLowerCase = () => e2.check(Qu()), e2.toUpperCase = () => e2.check(ju()), e2.slugify = () => e2.check(Gu());
    }), cp = Eo("ZodString", (e2, t2) => {
      ac.init(e2, t2), ap.init(e2, t2), e2.email = (t3) => e2.check(Vl(dp, t3)), e2.url = (t3) => e2.check(tu(_p, t3)), e2.jwt = (t3) => e2.check(gu(Xp, t3)), e2.emoji = (t3) => e2.check(ru(bp, t3)), e2.guid = (t3) => e2.check(Kl(mp, t3)), e2.uuid = (t3) => e2.check(Yl(fp, t3)), e2.uuidv4 = (t3) => e2.check(Zl(fp, t3)), e2.uuidv6 = (t3) => e2.check(Xl(fp, t3)), e2.uuidv7 = (t3) => e2.check(eu(fp, t3)), e2.nanoid = (t3) => e2.check(nu(Ip, t3)), e2.guid = (t3) => e2.check(Kl(mp, t3)), e2.cuid = (t3) => e2.check(su(kp, t3)), e2.cuid2 = (t3) => e2.check(ou(Tp, t3)), e2.ulid = (t3) => e2.check(iu(Bp, t3)), e2.base64 = (t3) => e2.check(mu(zp, t3)), e2.base64url = (t3) => e2.check(hu(Vp, t3)), e2.xid = (t3) => e2.check(au(Jp, t3)), e2.ksuid = (t3) => e2.check(cu(qp, t3)), e2.ipv4 = (t3) => e2.check(lu(Op, t3)), e2.ipv6 = (t3) => e2.check(uu(Lp, t3)), e2.cidrv4 = (t3) => e2.check(du(Qp, t3)), e2.cidrv6 = (t3) => e2.check(pu(Gp, t3)), e2.e164 = (t3) => e2.check(fu(Yp, t3)), e2.datetime = (t3) => e2.check(Fd(t3)), e2.date = (t3) => e2.check(Ld(t3)), e2.time = (t3) => e2.check(Qd(t3)), e2.duration = (t3) => e2.check(Gd(t3));
    });
    function lp(e2) {
      return (function(e3, t2) {
        return new e3({ type: "string", ...Vo(t2) });
      })(cp, e2);
    }
    const up = Eo("ZodStringFormat", (e2, t2) => {
      cc.init(e2, t2), ap.init(e2, t2);
    }), dp = Eo("ZodEmail", (e2, t2) => {
      dc.init(e2, t2), up.init(e2, t2);
    });
    function pp(e2) {
      return Vl(dp, e2);
    }
    const mp = Eo("ZodGUID", (e2, t2) => {
      lc.init(e2, t2), up.init(e2, t2);
    });
    function hp(e2) {
      return Kl(mp, e2);
    }
    const fp = Eo("ZodUUID", (e2, t2) => {
      uc.init(e2, t2), up.init(e2, t2);
    });
    function gp(e2) {
      return Yl(fp, e2);
    }
    function yp(e2) {
      return Zl(fp, e2);
    }
    function wp(e2) {
      return Xl(fp, e2);
    }
    function vp(e2) {
      return eu(fp, e2);
    }
    const _p = Eo("ZodURL", (e2, t2) => {
      pc.init(e2, t2), up.init(e2, t2);
    });
    function Ap(e2) {
      return tu(_p, e2);
    }
    function Sp(e2) {
      return tu(_p, { protocol: /^https?$/, hostname: ea, ...Vo(e2) });
    }
    const bp = Eo("ZodEmoji", (e2, t2) => {
      mc.init(e2, t2), up.init(e2, t2);
    });
    function Ep(e2) {
      return ru(bp, e2);
    }
    const Ip = Eo("ZodNanoID", (e2, t2) => {
      hc.init(e2, t2), up.init(e2, t2);
    });
    function Cp(e2) {
      return nu(Ip, e2);
    }
    const kp = Eo("ZodCUID", (e2, t2) => {
      fc.init(e2, t2), up.init(e2, t2);
    });
    function xp(e2) {
      return su(kp, e2);
    }
    const Tp = Eo("ZodCUID2", (e2, t2) => {
      gc.init(e2, t2), up.init(e2, t2);
    });
    function Rp(e2) {
      return ou(Tp, e2);
    }
    const Bp = Eo("ZodULID", (e2, t2) => {
      yc.init(e2, t2), up.init(e2, t2);
    });
    function Pp(e2) {
      return iu(Bp, e2);
    }
    const Jp = Eo("ZodXID", (e2, t2) => {
      wc.init(e2, t2), up.init(e2, t2);
    });
    function Mp(e2) {
      return au(Jp, e2);
    }
    const qp = Eo("ZodKSUID", (e2, t2) => {
      vc.init(e2, t2), up.init(e2, t2);
    });
    function Dp(e2) {
      return cu(qp, e2);
    }
    const Op = Eo("ZodIPv4", (e2, t2) => {
      Ec.init(e2, t2), up.init(e2, t2);
    });
    function Np(e2) {
      return lu(Op, e2);
    }
    const Fp = Eo("ZodMAC", (e2, t2) => {
      Cc.init(e2, t2), up.init(e2, t2);
    });
    function Up(e2) {
      return (function(e3, t2) {
        return new e3({ type: "string", format: "mac", check: "string_format", abort: false, ...Vo(t2) });
      })(Fp, e2);
    }
    const Lp = Eo("ZodIPv6", (e2, t2) => {
      Ic.init(e2, t2), up.init(e2, t2);
    });
    function $p(e2) {
      return uu(Lp, e2);
    }
    const Qp = Eo("ZodCIDRv4", (e2, t2) => {
      kc.init(e2, t2), up.init(e2, t2);
    });
    function jp(e2) {
      return du(Qp, e2);
    }
    const Gp = Eo("ZodCIDRv6", (e2, t2) => {
      xc.init(e2, t2), up.init(e2, t2);
    });
    function Hp(e2) {
      return pu(Gp, e2);
    }
    const zp = Eo("ZodBase64", (e2, t2) => {
      Rc.init(e2, t2), up.init(e2, t2);
    });
    function Wp(e2) {
      return mu(zp, e2);
    }
    const Vp = Eo("ZodBase64URL", (e2, t2) => {
      Bc.init(e2, t2), up.init(e2, t2);
    });
    function Kp(e2) {
      return hu(Vp, e2);
    }
    const Yp = Eo("ZodE164", (e2, t2) => {
      Pc.init(e2, t2), up.init(e2, t2);
    });
    function Zp(e2) {
      return fu(Yp, e2);
    }
    const Xp = Eo("ZodJWT", (e2, t2) => {
      Jc.init(e2, t2), up.init(e2, t2);
    });
    function em(e2) {
      return gu(Xp, e2);
    }
    const tm = Eo("ZodCustomStringFormat", (e2, t2) => {
      Mc.init(e2, t2), up.init(e2, t2);
    });
    function rm(e2, t2, r2 = {}) {
      return zu(tm, e2, t2, r2);
    }
    function nm(e2) {
      return zu(tm, "hostname", Xi, e2);
    }
    function sm(e2) {
      return zu(tm, "hex", ga, e2);
    }
    function om(e2, r2) {
      const n2 = `${e2}_${r2?.enc ?? "hex"}`, s2 = t[n2];
      if (!s2) throw new Error(`Unrecognized hash format: ${n2}`);
      return zu(tm, n2, s2, r2);
    }
    const im = Eo("ZodNumber", (e2, t2) => {
      qc.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r3, n2) => rd(e2, t3, r3), e2.gt = (t3, r3) => e2.check(vu(t3, r3)), e2.gte = (t3, r3) => e2.check(_u(t3, r3)), e2.min = (t3, r3) => e2.check(_u(t3, r3)), e2.lt = (t3, r3) => e2.check(yu(t3, r3)), e2.lte = (t3, r3) => e2.check(wu(t3, r3)), e2.max = (t3, r3) => e2.check(wu(t3, r3)), e2.int = (t3) => e2.check(lm(t3)), e2.safe = (t3) => e2.check(lm(t3)), e2.positive = (t3) => e2.check(vu(0, t3)), e2.nonnegative = (t3) => e2.check(_u(0, t3)), e2.negative = (t3) => e2.check(yu(0, t3)), e2.nonpositive = (t3) => e2.check(wu(0, t3)), e2.multipleOf = (t3, r3) => e2.check(Iu(t3, r3)), e2.step = (t3, r3) => e2.check(Iu(t3, r3)), e2.finite = () => e2;
      const r2 = e2._zod.bag;
      e2.minValue = Math.max(r2.minimum ?? Number.NEGATIVE_INFINITY, r2.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e2.maxValue = Math.min(r2.maximum ?? Number.POSITIVE_INFINITY, r2.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e2.isInt = (r2.format ?? "").includes("int") || Number.isSafeInteger(r2.multipleOf ?? 0.5), e2.isFinite = true, e2.format = r2.format ?? null;
    });
    function am(e2) {
      return (function(e3, t2) {
        return new e3({ type: "number", checks: [], ...Vo(t2) });
      })(im, e2);
    }
    const cm = Eo("ZodNumberFormat", (e2, t2) => {
      Dc.init(e2, t2), im.init(e2, t2);
    });
    function lm(e2) {
      return (function(e3, t2) {
        return new e3({ type: "number", check: "number_format", abort: false, format: "safeint", ...Vo(t2) });
      })(cm, e2);
    }
    function um(e2) {
      return (function(e3, t2) {
        return new e3({ type: "number", check: "number_format", abort: false, format: "float32", ...Vo(t2) });
      })(cm, e2);
    }
    function dm(e2) {
      return (function(e3, t2) {
        return new e3({ type: "number", check: "number_format", abort: false, format: "float64", ...Vo(t2) });
      })(cm, e2);
    }
    function pm(e2) {
      return (function(e3, t2) {
        return new e3({ type: "number", check: "number_format", abort: false, format: "int32", ...Vo(t2) });
      })(cm, e2);
    }
    function mm(e2) {
      return (function(e3, t2) {
        return new e3({ type: "number", check: "number_format", abort: false, format: "uint32", ...Vo(t2) });
      })(cm, e2);
    }
    const hm = Eo("ZodBoolean", (e2, t2) => {
      Oc.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r2) => nd(0, 0, t3);
    });
    function fm(e2) {
      return (function(e3, t2) {
        return new e3({ type: "boolean", ...Vo(t2) });
      })(hm, e2);
    }
    const gm = Eo("ZodBigInt", (e2, t2) => {
      Nc.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r3) => sd(0, e3), e2.gte = (t3, r3) => e2.check(_u(t3, r3)), e2.min = (t3, r3) => e2.check(_u(t3, r3)), e2.gt = (t3, r3) => e2.check(vu(t3, r3)), e2.gte = (t3, r3) => e2.check(_u(t3, r3)), e2.min = (t3, r3) => e2.check(_u(t3, r3)), e2.lt = (t3, r3) => e2.check(yu(t3, r3)), e2.lte = (t3, r3) => e2.check(wu(t3, r3)), e2.max = (t3, r3) => e2.check(wu(t3, r3)), e2.positive = (t3) => e2.check(vu(BigInt(0), t3)), e2.negative = (t3) => e2.check(yu(BigInt(0), t3)), e2.nonpositive = (t3) => e2.check(wu(BigInt(0), t3)), e2.nonnegative = (t3) => e2.check(_u(BigInt(0), t3)), e2.multipleOf = (t3, r3) => e2.check(Iu(t3, r3));
      const r2 = e2._zod.bag;
      e2.minValue = r2.minimum ?? null, e2.maxValue = r2.maximum ?? null, e2.format = r2.format ?? null;
    });
    function ym(e2) {
      return (function(e3, t2) {
        return new e3({ type: "bigint", ...Vo(t2) });
      })(gm, e2);
    }
    const wm = Eo("ZodBigIntFormat", (e2, t2) => {
      Fc.init(e2, t2), gm.init(e2, t2);
    });
    function vm(e2) {
      return (function(e3, t2) {
        return new e3({ type: "bigint", check: "bigint_format", abort: false, format: "int64", ...Vo(t2) });
      })(wm, e2);
    }
    function _m(e2) {
      return (function(e3, t2) {
        return new e3({ type: "bigint", check: "bigint_format", abort: false, format: "uint64", ...Vo(t2) });
      })(wm, e2);
    }
    const Am = Eo("ZodSymbol", (e2, t2) => {
      Uc.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r2) => od(0, e3);
    });
    function Sm(e2) {
      return (function(e3, t2) {
        return new e3({ type: "symbol", ...Vo(t2) });
      })(Am, e2);
    }
    const bm = Eo("ZodUndefined", (e2, t2) => {
      Lc.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r2) => ad(0, e3);
    });
    function Em(e2) {
      return (function(e3, t2) {
        return new e3({ type: "undefined", ...Vo(t2) });
      })(bm, e2);
    }
    const Im = Eo("ZodNull", (e2, t2) => {
      $c.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r2) => id(0, e3, t3);
    });
    function Cm(e2) {
      return (function(e3, t2) {
        return new e3({ type: "null", ...Vo(t2) });
      })(Im, e2);
    }
    const km = Eo("ZodAny", (e2, t2) => {
      Qc.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r2) => {
      };
    });
    function xm() {
      return (function(e2) {
        return new e2({ type: "any" });
      })(km);
    }
    const Tm = Eo("ZodUnknown", (e2, t2) => {
      jc.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r2) => {
      };
    });
    function Rm() {
      return (function(e2) {
        return new e2({ type: "unknown" });
      })(Tm);
    }
    const Bm = Eo("ZodNever", (e2, t2) => {
      Gc.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r2) => ld(0, 0, t3);
    });
    function Pm(e2) {
      return (function(e3, t2) {
        return new e3({ type: "never", ...Vo(t2) });
      })(Bm, e2);
    }
    const Jm = Eo("ZodVoid", (e2, t2) => {
      Hc.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r2) => cd(0, e3);
    });
    function Mm(e2) {
      return (function(e3, t2) {
        return new e3({ type: "void", ...Vo(t2) });
      })(Jm, e2);
    }
    const qm = Eo("ZodDate", (e2, t2) => {
      zc.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r3) => ud(0, e3), e2.min = (t3, r3) => e2.check(_u(t3, r3)), e2.max = (t3, r3) => e2.check(wu(t3, r3));
      const r2 = e2._zod.bag;
      e2.minDate = r2.minimum ? new Date(r2.minimum) : null, e2.maxDate = r2.maximum ? new Date(r2.maximum) : null;
    });
    function Dm(e2) {
      return (function(e3, t2) {
        return new e3({ type: "date", ...Vo(t2) });
      })(qm, e2);
    }
    const Om = Eo("ZodArray", (e2, t2) => {
      Vc.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => Sd(e2, t3, r2, n2), e2.element = t2.element, e2.min = (t3, r2) => e2.check(Ru(t3, r2)), e2.nonempty = (t3) => e2.check(Ru(1, t3)), e2.max = (t3, r2) => e2.check(Tu(t3, r2)), e2.length = (t3, r2) => e2.check(Bu(t3, r2)), e2.unwrap = () => e2.element;
    });
    function Nm(e2, t2) {
      return (function(e3, t3, r2) {
        return new e3({ type: "array", element: t3, ...Vo(r2) });
      })(Om, e2, t2);
    }
    function Fm(e2) {
      const t2 = e2._zod.def.shape;
      return lh(Object.keys(t2));
    }
    const Um = Eo("ZodObject", (e2, t2) => {
      el.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => bd(e2, t3, r2, n2), Do(e2, "shape", () => t2.shape), e2.keyof = () => lh(Object.keys(e2._zod.def.shape)), e2.catchall = (t3) => e2.clone({ ...e2._zod.def, catchall: t3 }), e2.passthrough = () => e2.clone({ ...e2._zod.def, catchall: Rm() }), e2.loose = () => e2.clone({ ...e2._zod.def, catchall: Rm() }), e2.strict = () => e2.clone({ ...e2._zod.def, catchall: Pm() }), e2.strip = () => e2.clone({ ...e2._zod.def, catchall: void 0 }), e2.extend = (t3) => (function(e3, t4) {
        if (!Qo(t4)) throw new Error("Invalid input to extend: expected a plain object");
        const r2 = e3._zod.def.checks;
        if (r2 && r2.length > 0) {
          const r3 = e3._zod.def.shape;
          for (const e4 in t4) if (void 0 !== Object.getOwnPropertyDescriptor(r3, e4)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
        }
        const n2 = No(e3._zod.def, { get shape() {
          const r3 = { ...e3._zod.def.shape, ...t4 };
          return Oo(this, "shape", r3), r3;
        } });
        return Wo(e3, n2);
      })(e2, t3), e2.safeExtend = (t3) => (function(e3, t4) {
        if (!Qo(t4)) throw new Error("Invalid input to safeExtend: expected a plain object");
        const r2 = No(e3._zod.def, { get shape() {
          const r3 = { ...e3._zod.def.shape, ...t4 };
          return Oo(this, "shape", r3), r3;
        } });
        return Wo(e3, r2);
      })(e2, t3), e2.merge = (t3) => (function(e3, t4) {
        const r2 = No(e3._zod.def, { get shape() {
          const r3 = { ...e3._zod.def.shape, ...t4._zod.def.shape };
          return Oo(this, "shape", r3), r3;
        }, get catchall() {
          return t4._zod.def.catchall;
        }, checks: [] });
        return Wo(e3, r2);
      })(e2, t3), e2.pick = (t3) => (function(e3, t4) {
        const r2 = e3._zod.def, n2 = r2.checks;
        if (n2 && n2.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
        return Wo(e3, No(e3._zod.def, { get shape() {
          const e4 = {};
          for (const n3 in t4) {
            if (!(n3 in r2.shape)) throw new Error(`Unrecognized key: "${n3}"`);
            t4[n3] && (e4[n3] = r2.shape[n3]);
          }
          return Oo(this, "shape", e4), e4;
        }, checks: [] }));
      })(e2, t3), e2.omit = (t3) => (function(e3, t4) {
        const r2 = e3._zod.def, n2 = r2.checks;
        if (n2 && n2.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
        const s2 = No(e3._zod.def, { get shape() {
          const n3 = { ...e3._zod.def.shape };
          for (const e4 in t4) {
            if (!(e4 in r2.shape)) throw new Error(`Unrecognized key: "${e4}"`);
            t4[e4] && delete n3[e4];
          }
          return Oo(this, "shape", n3), n3;
        }, checks: [] });
        return Wo(e3, s2);
      })(e2, t3), e2.partial = (...t3) => (function(e3, t4, r2) {
        const n2 = t4._zod.def.checks;
        if (n2 && n2.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
        const s2 = No(t4._zod.def, { get shape() {
          const n3 = t4._zod.def.shape, s3 = { ...n3 };
          if (r2) for (const t5 in r2) {
            if (!(t5 in n3)) throw new Error(`Unrecognized key: "${t5}"`);
            r2[t5] && (s3[t5] = e3 ? new e3({ type: "optional", innerType: n3[t5] }) : n3[t5]);
          }
          else for (const t5 in n3) s3[t5] = e3 ? new e3({ type: "optional", innerType: n3[t5] }) : n3[t5];
          return Oo(this, "shape", s3), s3;
        }, checks: [] });
        return Wo(t4, s2);
      })(yh, e2, t3[0]), e2.required = (...t3) => (function(e3, t4, r2) {
        const n2 = No(t4._zod.def, { get shape() {
          const n3 = t4._zod.def.shape, s2 = { ...n3 };
          if (r2) for (const t5 in r2) {
            if (!(t5 in s2)) throw new Error(`Unrecognized key: "${t5}"`);
            r2[t5] && (s2[t5] = new e3({ type: "nonoptional", innerType: n3[t5] }));
          }
          else for (const t5 in n3) s2[t5] = new e3({ type: "nonoptional", innerType: n3[t5] });
          return Oo(this, "shape", s2), s2;
        } });
        return Wo(t4, n2);
      })(xh, e2, t3[0]);
    });
    function Lm(e2, t2) {
      const r2 = { type: "object", shape: e2 ?? {}, ...Vo(t2) };
      return new Um(r2);
    }
    function $m(e2, t2) {
      return new Um({ type: "object", shape: e2, catchall: Pm(), ...Vo(t2) });
    }
    function Qm(e2, t2) {
      return new Um({ type: "object", shape: e2, catchall: Rm(), ...Vo(t2) });
    }
    const jm = Eo("ZodUnion", (e2, t2) => {
      rl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => Ed(e2, t3, r2, n2), e2.options = t2.options;
    });
    function Gm(e2, t2) {
      return new jm({ type: "union", options: e2, ...Vo(t2) });
    }
    const Hm = Eo("ZodXor", (e2, t2) => {
      jm.init(e2, t2), sl.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => Ed(e2, t3, r2, n2), e2.options = t2.options;
    });
    function zm(e2, t2) {
      return new Hm({ type: "union", options: e2, inclusive: false, ...Vo(t2) });
    }
    const Wm = Eo("ZodDiscriminatedUnion", (e2, t2) => {
      jm.init(e2, t2), ol.init(e2, t2);
    });
    function Vm(e2, t2, r2) {
      return new Wm({ type: "union", options: t2, discriminator: e2, ...Vo(r2) });
    }
    const Km = Eo("ZodIntersection", (e2, t2) => {
      il.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => Id(e2, t3, r2, n2);
    });
    function Ym(e2, t2) {
      return new Km({ type: "intersection", left: e2, right: t2 });
    }
    const Zm = Eo("ZodTuple", (e2, t2) => {
      ll.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => Cd(e2, t3, r2, n2), e2.rest = (t3) => e2.clone({ ...e2._zod.def, rest: t3 });
    });
    function Xm(e2, t2, r2) {
      const n2 = t2 instanceof ic;
      return new Zm({ type: "tuple", items: e2, rest: n2 ? t2 : null, ...Vo(n2 ? r2 : t2) });
    }
    const eh = Eo("ZodRecord", (e2, t2) => {
      dl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => kd(e2, t3, r2, n2), e2.keyType = t2.keyType, e2.valueType = t2.valueType;
    });
    function th(e2, t2, r2) {
      return new eh({ type: "record", keyType: e2, valueType: t2, ...Vo(r2) });
    }
    function rh(e2, t2, r2) {
      const n2 = Wo(e2);
      return n2._zod.values = void 0, new eh({ type: "record", keyType: n2, valueType: t2, ...Vo(r2) });
    }
    function nh(e2, t2, r2) {
      return new eh({ type: "record", keyType: e2, valueType: t2, mode: "loose", ...Vo(r2) });
    }
    const sh = Eo("ZodMap", (e2, t2) => {
      pl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r2) => _d(0, e3), e2.keyType = t2.keyType, e2.valueType = t2.valueType, e2.min = (...t3) => e2.check(ku(...t3)), e2.nonempty = (t3) => e2.check(ku(1, t3)), e2.max = (...t3) => e2.check(Cu(...t3)), e2.size = (...t3) => e2.check(xu(...t3));
    });
    function oh(e2, t2, r2) {
      return new sh({ type: "map", keyType: e2, valueType: t2, ...Vo(r2) });
    }
    const ih = Eo("ZodSet", (e2, t2) => {
      hl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r2) => Ad(0, e3), e2.min = (...t3) => e2.check(ku(...t3)), e2.nonempty = (t3) => e2.check(ku(1, t3)), e2.max = (...t3) => e2.check(Cu(...t3)), e2.size = (...t3) => e2.check(xu(...t3));
    });
    function ah(e2, t2) {
      return new ih({ type: "set", valueType: e2, ...Vo(t2) });
    }
    const ch = Eo("ZodEnum", (e2, t2) => {
      gl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r3, n2) => dd(e2, 0, r3), e2.enum = t2.entries, e2.options = Object.values(t2.entries);
      const r2 = new Set(Object.keys(t2.entries));
      e2.extract = (e3, n2) => {
        const s2 = {};
        for (const n3 of e3) {
          if (!r2.has(n3)) throw new Error(`Key ${n3} not found in enum`);
          s2[n3] = t2.entries[n3];
        }
        return new ch({ ...t2, checks: [], ...Vo(n2), entries: s2 });
      }, e2.exclude = (e3, n2) => {
        const s2 = { ...t2.entries };
        for (const t3 of e3) {
          if (!r2.has(t3)) throw new Error(`Key ${t3} not found in enum`);
          delete s2[t3];
        }
        return new ch({ ...t2, checks: [], ...Vo(n2), entries: s2 });
      };
    });
    function lh(e2, t2) {
      const r2 = Array.isArray(e2) ? Object.fromEntries(e2.map((e3) => [e3, e3])) : e2;
      return new ch({ type: "enum", entries: r2, ...Vo(t2) });
    }
    function uh(e2, t2) {
      return new ch({ type: "enum", entries: e2, ...Vo(t2) });
    }
    const dh = Eo("ZodLiteral", (e2, t2) => {
      yl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => pd(e2, t3, r2), e2.values = new Set(t2.values), Object.defineProperty(e2, "value", { get() {
        if (t2.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
        return t2.values[0];
      } });
    });
    function ph(e2, t2) {
      return new dh({ type: "literal", values: Array.isArray(e2) ? e2 : [e2], ...Vo(t2) });
    }
    const mh = Eo("ZodFile", (e2, t2) => {
      wl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => fd(e2, 0, r2), e2.min = (t3, r2) => e2.check(ku(t3, r2)), e2.max = (t3, r2) => e2.check(Cu(t3, r2)), e2.mime = (t3, r2) => e2.check(Fu(Array.isArray(t3) ? t3 : [t3], r2));
    });
    function hh(e2) {
      return (function(e3, t2) {
        return new e3({ type: "file", ...Vo(t2) });
      })(mh, e2);
    }
    const fh = Eo("ZodTransform", (e2, t2) => {
      vl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r2) => vd(0, e3), e2._zod.parse = (r2, n2) => {
        if ("backward" === n2.direction) throw new Co(e2.constructor.name);
        r2.addIssue = (n3) => {
          if ("string" == typeof n3) r2.issues.push(oi(n3, r2.value, t2));
          else {
            const t3 = n3;
            t3.fatal && (t3.continue = false), t3.code ?? (t3.code = "custom"), t3.input ?? (t3.input = r2.value), t3.inst ?? (t3.inst = e2), r2.issues.push(oi(t3));
          }
        };
        const s2 = t2.transform(r2.value, r2);
        return s2 instanceof Promise ? s2.then((e3) => (r2.value = e3, r2)) : (r2.value = s2, r2);
      };
    });
    function gh(e2) {
      return new fh({ type: "transform", transform: e2 });
    }
    const yh = Eo("ZodOptional", (e2, t2) => {
      Al.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => Dd(e2, t3, 0, n2), e2.unwrap = () => e2._zod.def.innerType;
    });
    function wh(e2) {
      return new yh({ type: "optional", innerType: e2 });
    }
    const vh = Eo("ZodExactOptional", (e2, t2) => {
      Sl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => Dd(e2, t3, 0, n2), e2.unwrap = () => e2._zod.def.innerType;
    });
    function _h(e2) {
      return new vh({ type: "optional", innerType: e2 });
    }
    const Ah = Eo("ZodNullable", (e2, t2) => {
      bl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => xd(e2, t3, r2, n2), e2.unwrap = () => e2._zod.def.innerType;
    });
    function Sh(e2) {
      return new Ah({ type: "nullable", innerType: e2 });
    }
    function bh(e2) {
      return wh(Sh(e2));
    }
    const Eh = Eo("ZodDefault", (e2, t2) => {
      El.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => Rd(e2, t3, r2, n2), e2.unwrap = () => e2._zod.def.innerType, e2.removeDefault = e2.unwrap;
    });
    function Ih(e2, t2) {
      return new Eh({ type: "default", innerType: e2, get defaultValue() {
        return "function" == typeof t2 ? t2() : jo(t2);
      } });
    }
    const Ch = Eo("ZodPrefault", (e2, t2) => {
      Cl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => Bd(e2, t3, r2, n2), e2.unwrap = () => e2._zod.def.innerType;
    });
    function kh(e2, t2) {
      return new Ch({ type: "prefault", innerType: e2, get defaultValue() {
        return "function" == typeof t2 ? t2() : jo(t2);
      } });
    }
    const xh = Eo("ZodNonOptional", (e2, t2) => {
      kl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => Td(e2, t3, 0, n2), e2.unwrap = () => e2._zod.def.innerType;
    });
    function Th(e2, t2) {
      return new xh({ type: "nonoptional", innerType: e2, ...Vo(t2) });
    }
    const Rh = Eo("ZodSuccess", (e2, t2) => {
      Tl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r2) => gd(0, 0, t3), e2.unwrap = () => e2._zod.def.innerType;
    });
    function Bh(e2) {
      return new Rh({ type: "success", innerType: e2 });
    }
    const Ph = Eo("ZodCatch", (e2, t2) => {
      Rl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => Pd(e2, t3, r2, n2), e2.unwrap = () => e2._zod.def.innerType, e2.removeCatch = e2.unwrap;
    });
    function Jh(e2, t2) {
      return new Ph({ type: "catch", innerType: e2, catchValue: "function" == typeof t2 ? t2 : () => t2 });
    }
    const Mh = Eo("ZodNaN", (e2, t2) => {
      Bl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r2) => md(0, e3);
    });
    function qh(e2) {
      return (function(e3, t2) {
        return new e3({ type: "nan", ...Vo(t2) });
      })(Mh, e2);
    }
    const Dh = Eo("ZodPipe", (e2, t2) => {
      Pl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => Jd(e2, t3, 0, n2), e2.in = t2.in, e2.out = t2.out;
    });
    function Oh(e2, t2) {
      return new Dh({ type: "pipe", in: e2, out: t2 });
    }
    const Nh = Eo("ZodCodec", (e2, t2) => {
      Dh.init(e2, t2), Ml.init(e2, t2);
    });
    function Fh(e2, t2, r2) {
      return new Nh({ type: "pipe", in: e2, out: t2, transform: r2.decode, reverseTransform: r2.encode });
    }
    const Uh = Eo("ZodReadonly", (e2, t2) => {
      Ol.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => Md(e2, t3, r2, n2), e2.unwrap = () => e2._zod.def.innerType;
    });
    function Lh(e2) {
      return new Uh({ type: "readonly", innerType: e2 });
    }
    const $h = Eo("ZodTemplateLiteral", (e2, t2) => {
      Fl.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => hd(e2, 0, r2);
    });
    function Qh(e2, t2) {
      return new $h({ type: "template_literal", parts: e2, ...Vo(t2) });
    }
    const jh = Eo("ZodLazy", (e2, t2) => {
      $l.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => Od(e2, t3, 0, n2), e2.unwrap = () => e2._zod.def.getter();
    });
    function Gh(e2) {
      return new jh({ type: "lazy", getter: e2 });
    }
    const Hh = Eo("ZodPromise", (e2, t2) => {
      Ll.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (t3, r2, n2) => qd(e2, t3, 0, n2), e2.unwrap = () => e2._zod.def.innerType;
    });
    function zh(e2) {
      return new Hh({ type: "promise", innerType: e2 });
    }
    const Wh = Eo("ZodFunction", (e2, t2) => {
      Ul.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r2) => wd(0, e3);
    });
    function Vh(e2) {
      return new Wh({ type: "function", input: Array.isArray(e2?.input) ? Xm(e2?.input) : e2?.input ?? Nm(Rm()), output: e2?.output ?? Rm() });
    }
    const Kh = Eo("ZodCustom", (e2, t2) => {
      Ql.init(e2, t2), ip.init(e2, t2), e2._zod.processJSONSchema = (e3, t3, r2) => yd(0, e3);
    });
    function Yh(e2) {
      const t2 = new Ma({ check: "custom" });
      return t2._zod.check = e2, t2;
    }
    function Zh(e2, t2) {
      return (function(e3, t3, r2) {
        const n2 = Vo(r2);
        return n2.abort ?? (n2.abort = true), new e3({ type: "custom", check: "custom", fn: t3, ...n2 });
      })(Kh, e2 ?? (() => true), t2);
    }
    function Xh(e2, t2 = {}) {
      return (function(e3, t3, r2) {
        return new e3({ type: "custom", check: "custom", fn: t3, ...Vo(r2) });
      })(Kh, e2, t2);
    }
    function ef(e2) {
      return Hu(e2);
    }
    const tf = function(e2) {
      const t2 = new Ma({ check: "describe" });
      return t2._zod.onattach = [(t3) => {
        const r2 = Wl.get(t3) ?? {};
        Wl.add(t3, { ...r2, description: e2 });
      }], t2._zod.check = () => {
      }, t2;
    }, rf = function(e2) {
      const t2 = new Ma({ check: "meta" });
      return t2._zod.onattach = [(t3) => {
        const r2 = Wl.get(t3) ?? {};
        Wl.add(t3, { ...r2, ...e2 });
      }], t2._zod.check = () => {
      }, t2;
    };
    function nf(e2, t2 = {}) {
      const r2 = new Kh({ type: "custom", check: "custom", fn: (t3) => t3 instanceof e2, abort: true, ...Vo(t2) });
      return r2._zod.bag.Class = e2, r2._zod.check = (t3) => {
        t3.value instanceof e2 || t3.issues.push({ code: "invalid_type", expected: e2.name, input: t3.value, inst: r2, path: [...r2._zod.def.path ?? []] });
      }, r2;
    }
    const sf = (...e2) => (function(e3, t2) {
      const r2 = Vo(t2);
      let n2 = r2.truthy ?? ["true", "1", "yes", "on", "y", "enabled"], s2 = r2.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
      "sensitive" !== r2.case && (n2 = n2.map((e4) => "string" == typeof e4 ? e4.toLowerCase() : e4), s2 = s2.map((e4) => "string" == typeof e4 ? e4.toLowerCase() : e4));
      const o2 = new Set(n2), i2 = new Set(s2), a2 = e3.Codec ?? Ml, c2 = e3.Boolean ?? Oc, l2 = new a2({ type: "pipe", in: new (e3.String ?? ac)({ type: "string", error: r2.error }), out: new c2({ type: "boolean", error: r2.error }), transform: (e4, t3) => {
        let n3 = e4;
        return "sensitive" !== r2.case && (n3 = n3.toLowerCase()), !!o2.has(n3) || !i2.has(n3) && (t3.issues.push({ code: "invalid_value", expected: "stringbool", values: [...o2, ...i2], input: t3.value, inst: l2, continue: false }), {});
      }, reverseTransform: (e4, t3) => true === e4 ? n2[0] || "true" : s2[0] || "false", error: r2.error });
      return l2;
    })({ Codec: Nh, Boolean: hm, String: cp }, ...e2);
    function of(e2) {
      const t2 = Gh(() => Gm([lp(e2), am(), fm(), Cm(), Nm(t2), th(lp(), t2)]));
      return t2;
    }
    function af(e2, t2) {
      return Oh(gh(e2), t2);
    }
    const cf = "custom";
    var lf;
    lf || (lf = {});
    /* @__PURE__ */ new Set(["$schema", "$ref", "$defs", "definitions", "$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor", "type", "enum", "const", "anyOf", "oneOf", "allOf", "not", "properties", "required", "additionalProperties", "patternProperties", "propertyNames", "minProperties", "maxProperties", "items", "prefixItems", "additionalItems", "minItems", "maxItems", "uniqueItems", "contains", "minContains", "maxContains", "minLength", "maxLength", "pattern", "format", "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf", "description", "default", "contentEncoding", "contentMediaType", "contentSchema", "unevaluatedItems", "unevaluatedProperties", "if", "then", "else", "dependentSchemas", "dependentRequired", "nullable", "readOnly"]);
    xo({ localeError: Gl() });
    Lm({ lifecycle: lh(["off", "default-on", "default-off", "hidden", "end-of-life", "internal"]), pickerDisplayName: lp().min(1).nullish(), upgradeModelId: lp().min(1).nullish() }), Object.keys({ agent_goal_continuation: { client: true, default: true }, nal_websocket_client: { client: true, default: false }, agent_queued_prompt_new_request_id: { client: true, default: false }, org_billing_admin_role: { client: true, default: false }, team_members_show_org_admins: { client: true, default: true }, org_team_settings_copy_on_create: { client: true, default: true }, org_team_settings_copy_to_existing_team: { client: true, default: false }, org_credit_request_button_hide: { client: true, default: false }, sso_jit_auto_enrollment_settings: { client: true, default: false }, sand_mobile_session_upgrade: { client: true, default: true }, remote_agent_host_mobile: { client: true, default: false }, response_comparison_comment_prompt: { client: true, default: false }, cursor_new_colors: { client: true, default: false }, grok_bot_setup_checklist: { client: true, default: true }, grok_bot_hibernated_owner_vm_termination: { client: true, default: true }, grok_bot_team_bot_group_restrictions: { client: true, default: false }, glass_grok_bot_topbar_cta_show: { client: true, default: false, requiresAuthenticatedBootstrap: true }, grok_bot_admin_enterprise_controls_frontend_enabled: { client: true, default: false }, grok_bot_merged_bots_view_enabled: { client: true, default: false }, dashboard_grok_bot_onboarding_checklist: { client: true, default: false }, dashboard_team_checklist_origin_setup: { client: true, default: false }, dashboard_grok_bot_terms: { client: true, default: false }, gb_block_papered_org_signups: { client: true, default: false }, sand_mobile_notification_sounds: { client: true, default: false }, sand_mobile_agent_computer_console: { client: true, default: true }, sand_mobile_i18n: { client: true, default: true }, sand_mobile_home_unread_jump_pills: { client: true, default: false }, sand_mobile_failures_screen: { client: true, default: false }, sand_mobile_unified_marketplace: { client: true, default: false }, sand_mobile_feedback_kill_switch: { client: true, default: false }, sand_mobile_app_store_update_indicator: { client: true, default: true }, sand_mobile_profile_multimedia_tabs: { client: true, default: true }, sand_mobile_slash_skill_trigger: { client: true, default: true }, sand_mobile_dictation_diagnostics: { client: true, default: true }, sand_mobile_manage_subscription_kill_switch: { client: true, default: false }, sand_mobile_change_limit_kill_switch: { client: true, default: false }, sand_enable_home_pull_to_refresh: { client: true, default: false }, sand_special_settings: { client: true, default: false }, sand_messages_tools: { client: true, default: false }, sand_mobile_local_tools: { client: true, default: false }, sand_connected_activity_tool: { client: true, default: false }, grok_bot_hide_internal_details: { client: true, default: true }, grok_bot_active_reactions: { client: true, default: true }, grok_bot_link_items: { client: true, default: false }, grok_bot_renamed_prompt_markers: { client: true, default: false }, sand_automation_agent_gone_terminal: { client: true, default: false }, grok_bot_builtin_admin_tool_policy: { client: true, default: false }, mcp_grant_migration_enabled: { client: true, default: false }, hosted_mcp_routing_enabled: { client: true, default: false }, grok_bot_durable_identity: { client: true, default: true }, grok_bot_durable_identity_writes: { client: true, default: true }, grok_bot_identity_backfill: { client: true, default: true }, grok_bot_temporal_harness: { client: true, default: false }, grok_bot_stripe_link: { client: true, default: true }, grok_bot_spend_approval_passkey: { client: true, default: false }, sand_memory_dreaming: { client: true, default: false }, sand_1pass_manual_service_acct: { client: true, default: true }, sand_new_1pass: { client: true, default: false }, sand_cloud_agent_artifacts: { client: true, default: true }, sand_cloud_agent_status_stream: { client: true, default: false }, grok_bot_cloud_agent_durable_watch: { client: true, default: false }, grok_bot_cloud_agent_secret_forwarding: { client: true, default: false }, grok_bot_mcp_catalog_status_killswitch: { client: true, default: false }, sand_desktop_scm_connect: { client: true, default: false }, sand_computer_use_unicode_typing: { client: true, default: false }, sand_on_demand_settings: { client: true, default: false }, store_billed_web_on_demand: { client: true, default: true }, sand_notification_sounds: { client: true, default: false }, sand_scheduled_computer_updates: { client: true, default: false, requiresAuthenticatedBootstrap: true }, grok_bot_network_debugger: { client: true, default: false }, grok_bot_form_vault: { client: true, default: false }, sand_agent_network: { client: true, default: false }, sand_draft_external_message: { client: true, default: true }, sand_draft_external_message_by_default: { client: true, default: false }, sand_auto_review_selector: { client: true, default: false }, sand_enable_pressure_cpu_profiler: { client: true, default: true }, sand_enable_accent_theming: { client: true, default: false }, grok_bot_all_bots_color_theming: { client: true, default: false }, sand_xvf_typeface: { client: true, default: false }, sand_anonymized_egress_telemetry: { client: true, default: true }, service_account_spend_limit_enforcement: { client: true, default: false }, sand_action_audit_logs: { client: true, default: false }, grok_bot_conversation_gc: { client: true, default: true }, sand_enable_bot2bot_cloud_agent_ui: { client: true, default: false, requiresAuthenticatedBootstrap: true }, sand_hide_at_mentions: { client: true, default: false }, sand_agent_titles: { client: true, default: true }, sand_stream_idle_deadline: { client: true, default: true }, sand_enable_spoof_gpu: { client: true, default: false }, sand_browser_hardware_profile: { client: true, default: false }, sand_box_store_skip_inaccessible: { client: true, default: false }, sand_working_state_warming: { client: true, default: true, requiresAuthenticatedBootstrap: true }, grok_bot_box_harness_turns_blocked: { client: true, default: false }, sand_web_bot_auth_signing: { client: true, default: true }, sand_web_bot_auth_sign_xhr_fetch: { client: true, default: true }, sand_web_bot_auth_sign_iframes: { client: true, default: false }, sand_transcript_store_read: { client: true, default: false }, sand_transcript_store_first: { client: true, default: false }, sand_transcript_server_tail: { client: true, default: false }, sand_attachments_via_server: { client: true, default: false }, sand_better_link_unfurling: { client: true, default: true }, grok_bot_link_chip_preload: { client: true, default: false }, sand_create_temporal_agents: { client: true, default: false }, sand_client_pause: { client: true, default: false }, sand_desktop_away_park: { client: true, default: false }, sand_desktop_present_park: { client: true, default: false }, sand_roster_waking_hold: { client: true, default: false }, sand_sidebar_activity_recency: { client: true, default: false }, sand_get_grok_bot_ios: { client: true, default: true }, sand_grok_main_agent: { client: true, default: false }, sand_widget_v0: { client: true, default: false }, sand_tasks: { client: true, default: false }, sand_chat_prose_15px: { client: true, default: false }, sand_new_connect_button: { client: true, default: false }, sand_rich_text: { client: true, default: false }, grok_bot_draft_revision_highlight: { client: true, default: false }, sand_profile_photo_edit: { client: true, default: false, requiresAuthenticatedBootstrap: true }, sand_hide_working_dot: { client: true, default: false }, sand_invite_teammates: { client: true, default: false, requiresAuthenticatedBootstrap: true }, sand_grok_force_main_agent_selection: { client: true, default: false }, sand_desktop_mount: { client: true, default: false }, sand_marketplace_for_you_auth_aware: { client: true, default: false }, sand_header_template_share_menu: { client: true, default: true }, grok_bot_multiplayer: { client: true, default: false }, grok_bot_group_chats: { client: true, default: false }, grok_bot_team_bot_managers: { client: true, default: false }, grok_bot_team_bot_access_list: { client: true, default: false }, grok_bot_team_exclude_gsuite_plugins: { client: true, default: false }, grok_bot_agent_mail: { client: true, default: false }, grok_bot_agent_mail_multiple_inboxes: { client: true, default: false }, grok_bot_scm_connect_card: { client: true, default: false }, grok_bot_check_subscription_usage: { client: true, default: false }, grok_bot_search_bot_templates: { client: true, default: false }, grok_bot_template_onboarding: { client: true, default: true }, grok_bot_documents: { client: true, default: false }, grok_bot_documents_ui: { client: true, default: false }, grok_bot_library_pages: { client: true, default: false }, grok_bot_page_stage_chat: { client: true, default: false }, grok_bot_files_stage: { client: true, default: false }, grok_bot_library_v2: { client: true, default: false }, grok_bot_documents_web: { client: true, default: false }, grok_bot_library_external_docs: { client: true, default: false }, grok_bot_pages_search: { client: true, default: false }, sand_simplified_right_pane: { client: true, default: false }, sand_cloud_agent_tasks_card: { client: true, default: false }, sand_import_chrome_cookies: { client: true, default: false }, agent_prompted_cookie_sync: { client: true, default: false }, sand_voice_call: { client: true, default: false }, sand_pitman: { client: true, default: false }, sand_voice_outbound_call: { client: true, default: false }, sand_voice_call_overheard: { client: true, default: false }, sand_voice_stay_silent: { client: true, default: false }, sand_voice_async_update: { client: true, default: true }, sand_voice_reconnect: { client: true, default: true }, sand_voice_resumption: { client: true, default: false }, sand_voice_steer: { client: true, default: true }, sand_voice_final_word: { client: true, default: false }, sand_voice_memos: { client: true, default: true }, sand_voice_memo_speed: { client: true, default: true }, sand_voice_server_harness: { client: true, default: true }, sand_mcp_apps: { client: true, default: false }, sand_team_bot_voice_available: { client: true, default: false }, sand_voice_call_settings_for_teammates: { client: true, default: false }, sand_focus_staleness_catch_up: { client: true, default: false }, disable_smart_auto_show_routed_model: { client: true, default: false }, migrate_default_model_config_to_auto_smart_cost: { client: true, default: false }, app_open_model_nudge_pre_render_only: { client: true, default: false }, new_automation_templates_slack_github_triggers: { client: true, default: true }, customer_evals_ui: { client: true, default: false }, git_diff_collect_stderr: { client: true, default: false }, glass_chat_switch_tracing: { client: true, default: false }, glass_webview_guest_render_throttle_killswitch: { client: true, default: false }, glass_chat_switch_post_paint_commit: { client: true, default: false }, glass_dispose_workspace_on_release: { client: true, default: false }, glass_git_diff_meter: { client: true, default: false }, glass_agent_worktree_reroot_prompt: { client: true, default: true }, glass_cloud_meta_agents: { client: true, default: false }, named_agent_single_session: { client: true, default: false }, glass_empty_state_recommended_actions: { client: true, default: false }, glass_branch_picker_redesign: { client: true, default: false }, glass_triggers_naming: { client: true, default: false }, unified_composer_tray_debug: { client: true, default: false }, glass_remember_new_agent_environment_selection: { client: true, default: true }, glass_editor_shadow_isolation: { client: true, default: true }, glass_defer_shadow_style_rebuild: { client: true, default: false }, sand_audit_logs: { client: true, default: true }, origin_commit_email_verification_enabled: { client: true, default: false }, limit_hit_ui_kill_switch: { client: true, default: false }, rate_limited_reconnect_message_kill_switch: { client: true, default: false }, glass_no_x_on_chips: { client: true, default: false }, glass_preview_linear_tickets: { client: true, default: false }, origin_repos: { client: true, default: false }, origin_app_user_confirmation: { client: true, default: false }, origin_app_deletion: { client: true, default: false }, codebase_branches_redesign_in_progress: { client: true, default: false }, automations_origin_request_reviewers: { client: true, default: false }, origin_raw_file_links: { client: true, default: true }, origin_inbox_osp_watch: { client: true, default: false }, sand_auto_review: { client: true, default: true }, sand_auto_review_admin_enforce: { client: true, default: true }, sand_auto_review_admin_rules: { client: true, default: true }, sand_local_egress_admin_control: { client: true, default: true }, allow_disable_sudo_grok_bot: { client: true, default: false }, smart_mode_classifier_shadow_mode: { client: true, default: false }, ext_host_document_memory_estimates: { client: true, default: false }, agent_exec_text_document_api_access_tracking: { client: true, default: false }, cursor_agent_host: { client: true, default: false }, cursor_agent_host_move_exec: { client: true, default: false }, agent_host_own_request_context: { client: true, default: false }, cursor_agent_host_owned_session_storage: { client: true, default: false }, cursor_agent_host_session_storage_migrate_on_open: { client: true, default: false }, cursor_agent_host_native_cloud_subagent: { client: true, default: false }, cursor_agent_host_subagent_interactions: { client: true, default: false }, agent_host_local_loop: { client: true, default: false }, composer_send_prewarm: { client: true, default: false }, glass_local_ollama: { client: true, default: false }, agent_host_updater: { client: true, default: false }, agent_host_private_inference: { client: true, default: false }, defer_cursor_agent_exec_activation: { client: true, default: false }, shell_exec_output_backpressure: { client: true, default: true }, shell_exec_powershell_utf8_console: { client: true, default: false }, file_watcher_metrics: { client: true, default: false }, glass_shared_application_storage: { client: true, default: true }, glass_startup_connect_transport: { client: true, default: false }, reactivestorage_single_pass_stringify: { client: true, default: true }, reactive_storage_size_report_enabled: { client: true, default: false }, model_catalog_own_key: { client: true, default: false }, slow_ipc_deserialize_sentry: { client: true, default: false }, chunked_document_open_sync: { client: true, default: true }, ripgrep_invocation_monitor: { client: true, default: false }, rules_discovery_respect_cursorignore: { client: true, default: false }, subagents_discovery_allow_external_symlinks: { client: true, default: false }, grep_fallback_monitor: { client: true, default: false }, crepe_lazy_external_git_index: { client: true, default: false }, exthost_rpc_channel_history: { client: true, default: false }, exthost_rpc_metrics: { client: true, default: false }, remote_exthost_watchdog: { client: true, default: false }, glass_remote_connection_dormancy: { client: true, default: false }, disable_remote_workspace_reh_healthcheck: { client: true, default: false }, service_account_repo_scope_use_installation_fanout: { client: true, default: false }, cloud_agent_default_environment: { client: true, default: false }, grok_bot_gkw_connectors: { client: true, default: false }, ide_make_github_request_enabled: { client: true, default: false }, customize_hooks_execution_log_detail: { client: true, default: true }, skip_hooks_ready_wait_without_hooks: { client: true, default: false }, dashboard_agent_requests_heatmap: { client: true, default: false }, bugbot_enable_bulk_rules_upload_in_portal: { client: true, default: false }, team_rule_agent_type_ui: { client: true, default: false }, advanced_setup_for_self_hosted_gitlab_available: { client: true, default: false }, gitlab_com_service_account_token_available: { client: true, default: false }, enable_bitbucket_data_center_onboarding: { client: true, default: true }, enable_bitbucket: { client: true, default: true }, internal_team_user_profiles: { client: true, default: true }, user_profile_glass: { client: true, default: true }, automations_chain_prompts: { client: true, default: false }, website_use_new_model_picker_for_automations: { client: true, default: true }, green_dot_automation_status: { client: true, default: true }, automations_validate_on_enable: { client: true, default: true }, automations_retry_button: { client: true, default: false }, managed_automations_team_revamp: { client: true, default: true }, automations_gitlab_extended_triggers: { client: true, default: true }, automations_bitbucket_extended_triggers: { client: true, default: false }, automations_forge_agnostic_mirrors: { client: true, default: false }, managed_agents_enabled: { client: true, default: false }, custom_agents_enabled: { client: true, default: true }, debug_bot_customer_facing_ui: { client: true, default: false }, agents_bugbot_bottom_upsell: { client: true, default: false }, review_agents_shared_growth: { client: true, default: false }, automations_org_scoped_triggers_ui: { client: true, default: false }, cloud_agents_no_repo_enabled: { client: true, default: true }, cloud_agent_resubmit_from_message: { client: true, default: true }, glass_cloud_agent_sidebar_ci_status: { client: true, default: false }, cloud_agent_migration_resume_kickoff: { client: true, default: true }, glass_cloud_agent_fork_from_turn: { client: true, default: true }, cloud_agent_stop_permanent_stream_reconnect: { client: true, default: true }, cloud_agent_repair_stalled_pane: { client: true, default: true }, cloud_agent_plugins: { client: true, default: true }, cloud_agent_origin_env_migration_rpc: { client: true, default: false }, cloud_agent_environment_duplicate: { client: true, default: false }, local_agent_subagent_state_blob_refs: { client: true, default: false }, cloud_agent_env_setup_with_dockerfiles: { client: true, default: false }, generalized_env_setup: { client: true, default: true }, cloud_agent_ask_question_auto_answer: { client: true, default: false }, cloud_agent_ask_question_auto_answer_timeout_setting: { client: true, default: false }, cloud_agent_publish_ui: { client: true, default: false }, grok_bot_publish_confirm_card: { client: true, default: false }, cloud_agent_env_builds_default_enabled: { client: true, default: true }, cloud_agent_migrate_to_builds_setup_agent_cta: { client: true, default: true }, cloud_agent_transcript_reliability_controls: { client: true, default: true }, local_agent_transcript_search_in_glass: { client: true, default: true }, agent_conversation_search_tool: { client: true, default: true }, disable_cloud_agent_transcript_indexing_in_glass: { client: true, default: false }, nal_agent_retries: { client: true, default: true }, cli_harness_telemetry: { client: true, default: false }, cli_image_arg: { client: true, default: false }, "x-chat-context": { client: true, default: false }, referral_codes_v2: { client: true, default: true }, p2p_referrals_v1: { client: true, default: true }, oom_crash_watcher: { client: true, default: false }, local_request_tracing: { client: true, default: false }, local_request_trace_dd_slogs: { client: true, default: false }, memory_pressure_profiling: { client: true, default: true }, cpu_monitor_process_snapshot: { client: true, default: false }, issue_traces_enabled: { client: true, default: true }, glass_automations_ui: { client: true, default: true }, glass_stable_diff_group_keys: { client: true, default: false }, local_automations: { client: true, default: false }, local_automations_nav: { client: true, default: false }, glass_agent_confetti_cannon: { client: true, default: true }, glass_install_plugin_tool_enabled: { client: true, default: true }, cursor_backend_control_automation_mcp: { client: true, default: true }, glass_multi_root_workspace_editing: { client: true, default: false }, glass_search_first_repo_picker: { client: true, default: false }, glass_remote_ssh_workspace_repair: { client: true, default: true }, glass_remote_ssh_management_connection_token_loss_repair: { client: true, default: true }, glass_custom_theme_support: { client: true, default: false }, glass_send_feedback: { client: true, default: false }, glass_project_filled_user_bubble: { client: true, default: false }, environment_param_for_subagent: { client: true, default: false }, glass_assistant_message_selection_feedback: { client: true, default: false }, glass_turn_feedback_menu: { client: true, default: false }, glass_turn_actions_reply: { client: true, default: false }, glass_editor_panel_tab_copy_link: { client: true, default: false }, glass_peaky_file_trees: { client: true, default: false }, glass_markdown_table_expand: { client: true, default: false }, glass_status_bar_environment_picker: { client: true, default: false }, glass_project_agent_tool_rows: { client: true, default: false }, glass_cloud_awaiting_turn_start: { client: true, default: false }, glass_all_changes_diff_scope: { client: true, default: false }, glass_scm_dynamic_base_branch: { client: true, default: false }, glass_direct_github_connect: { client: true, default: false }, scm_connect_in_app_ad: { client: true, default: true }, scm_connect_in_app_ad_gitlab: { client: true, default: true }, scm_connect_ad_cheap_probe: { client: true, default: true }, import_cc_conversation: { client: true, default: true }, import_cc_conversation_default: { client: true, default: false }, glass_drafts_quick_action_pill: { client: true, default: false }, glass_sidebar_source_metadata: { client: true, default: false }, glass_sidebar_scroll_active_row_if_needed: { client: true, default: true }, glass_sidebar_archive_toggle: { client: true, default: false }, glass_sidebar_unified_group_headers: { client: true, default: false }, glass_sidebar_env_icons: { client: true, default: false }, glass_btw_side_question: { client: true, default: false }, glass_side_chats: { client: true, default: true }, cloud_agent_side_chats: { client: true, default: true }, cloud_agent_desktop_lease: { client: true, default: true }, cloud_agent_machine_resources: { client: true, default: false }, cloud_project_coordinator_v2: { client: true, default: true }, glass_project_worker_membership_rpc: { client: true, default: true }, glass_composer_markdown_support: { client: true, default: false }, glass_cloud_child_question_answered_in_child: { client: true, default: false }, glass_cloud_pending_interactions: { client: true, default: false }, prompt_input_image_annotation: { client: true, default: true }, glass_lazy_file_tabs: { client: true, default: true }, glass_temporary_pr_tabs: { client: true, default: false }, glass_projects_enabled: { client: true, default: false }, glass_project_pinning: { client: true, default: false }, glass_enable_main_bot: { client: true, default: false }, glass_main_bot_tasks: { client: true, default: false }, internal_cloud_project_remote_control: { client: true, default: false }, enable_add_local_agent_to_cloud_project: { client: true, default: false }, remote_agent_host_glass: { client: true, default: false }, glass_first_project_onboarding: { client: true, default: true }, dev_only_force_first_project_experience: { client: true, default: false }, staged_project_listing: { client: true, default: false }, staged_project_instant_create: { client: true, default: false }, staged_project_seeding: { client: true, default: false }, glass_project_notes_tldr_card: { client: true, default: true }, glass_project_notes_only_title_context: { client: true, default: false }, glass_project_notes_notion_links: { client: true, default: false }, glass_project_notes_document: { client: true, default: false }, glass_project_notes_manual_status: { client: true, default: false }, glass_project_notes_brief_view: { client: true, default: false }, glass_project_notes_pr_stack_pill: { client: true, default: false }, glass_project_tasks_pill: { client: true, default: false }, glass_project_pinned_tab: { client: true, default: false }, glass_projects_empty_state: { client: true, default: false }, glass_projects_unread_divider: { client: true, default: true }, glass_cloud_agents_unread_divider: { client: true, default: true }, glass_local_agents_unread_divider: { client: true, default: true }, glass_project_style_user_messages: { client: true, default: false }, glass_vercel_connect_pill_cloud: { client: true, default: false }, glass_vercel_connect_pill_local: { client: true, default: false }, web_vercel_publish_pill: { client: true, default: false }, local_interactive_child_inbox: { client: true, default: false }, glass_diff_ci_tab: { client: true, default: true }, managed_review_agent_skills_enabled: { client: true, default: false }, glass_diff_commits_tab: { client: true, default: true }, glass_diff_reviews_tab: { client: true, default: true }, glass_agentic_migration_reconcile: { client: true, default: false }, glass_cloud_to_worktree: { client: true, default: true }, glass_pr_viewed: { client: true, default: true }, glass_pr_realtime_updates: { client: true, default: false }, glass_avoid_secondary_scanline: { client: true, default: false }, skills_cli_install: { client: true, default: false }, glass_design_mode_annotations: { client: true, default: false }, glass_agent_pr_followup_pill: { client: true, default: false }, glass_open_resource_tool_enabled: { client: true, default: true }, glass_pr_tray_stack_groups: { client: true, default: false }, open_github_pr_links_in_review_cursor: { client: true, default: false }, cursor_com_review_pages: { client: true, default: false }, show_cursor_review_early_access_ad: { client: true, default: false }, smart_allowlist_required: { client: true, default: false }, bugbot_low_mode: { client: true, default: true }, bugbot_connect_repo_implicit_enable: { client: true, default: true }, bugbot_onboarding_high_effort_learning_defaults_team_v2: { client: true, default: true }, bugbot_suggested_repos_banner: { client: true, default: true }, bugbot_non_admin_enablement: { client: true, default: true }, use_model_parameters: { client: true, default: true }, use_react_model_picker: { client: true, default: true }, model_picker_max_badge: { client: true, default: false }, model_picker_hover_options: { client: true, default: false }, glass_model_picker_new_menu: { client: true, default: false }, bugbot_auto_spawn_cloud_agent: { client: true, default: true }, bugbot_fail_check_on_findings: { client: true, default: false }, composer_auto_routing_result_display: { client: true, default: true }, seat_upgrade_economics_recommendations: { client: true, default: true }, self_serve_team_tiered_pricing_conversion: { client: true, default: true }, self_serve_team_tiered_pricing_manual_conversion: { client: true, default: true }, self_serve_team_tiered_pricing_new_team_creator: { client: true, default: true }, self_serve_team_tiered_pricing_legacy_conversion: { client: true, default: false }, cursor_models_additional_budget: { client: true, default: false }, composer_enable_bga_hydration_from_snapshot: { client: true, default: true }, fix_remote_ssh_checkpoints: { client: true, default: false }, glass_composer_header_pagination: { client: true, default: false }, glass_realtime_voice: { client: true, default: false }, web_realtime_voice: { client: true, default: false }, mobile_realtime_voice: { client: true, default: false }, glass_realtime_voice_new_agent: { client: true, default: false }, web_realtime_voice_new_agent: { client: true, default: false }, mobile_realtime_voice_new_agent: { client: true, default: false }, cursor_blame: { client: true, default: false }, cursor_skill_enabled: { client: true, default: false }, onboard_skill_enabled: { client: true, default: false }, ai_attribution_tool: { client: true, default: false }, pr_metrics_admin_view_override: { client: true, default: false }, portal_files_engine_ssr_body_prefetch: { client: true, default: false }, portal_files_engine_ssr_tour_prefetch: { client: true, default: false }, portal_files_engine_ssr_browser_still: { client: true, default: false }, portal_files_engine_tour_stored_prefetch: { client: true, default: false }, portal_files_engine_card_virtualization: { client: true, default: false }, portal_files_engine_ssr_stored_tour: { client: true, default: false }, enable_code_tours_custom_prompt: { client: true, default: false }, enable_code_tour_path_scope: { client: true, default: false }, portal_pr_code_tour_stack_generate: { client: true, default: false }, enable_code_tour_section_reviewed: { client: true, default: false }, portal_pr_activity: { client: true, default: false }, agents_origin_pr_tab: { client: true, default: false }, agents_github_pr_tab: { client: true, default: false }, portal_glass_transcript: { client: true, default: false }, portal_hide_projects_sidebar: { client: true, default: true }, enable_ex_hs: { client: true, default: true }, stars_popup_ignore_dont_ask_again: { client: true, default: false }, terminal_execution_service_2: { client: true, default: true }, long_running_jobs: { client: true, default: true }, background_nudge_2: { client: true, default: true }, auto_background_foreground_tools_on_followup: { client: true, default: false }, user_message_timestamps: { client: true, default: true }, cloud_agent_preview_port_forward: { client: true, default: false }, terminal_ui_2: { client: true, default: true }, composer_protected_tooltip: { client: true, default: true }, auto_open_review_during_plan_build: { client: true, default: false }, analyze_query_intent: { client: true, default: false }, allowlist_in_ask_every_time_mode: { client: true, default: false }, analytics_output_channel: { client: true, default: false }, analytics_batch_coalesce_watermark: { client: true, default: true }, browser_features_access_control: { client: true, default: false }, cli_sandbox_default_enable: { client: true, default: false }, cli_auto_run_hint: { client: true, default: true }, "cli.hints": { client: true, default: true }, "cli.rewind": { client: true, default: true }, cli_debug_mode: { client: true, default: true }, cli_btw_side_question: { client: true, default: true }, cli_model_picker: { client: true, default: true }, cli_zen_mode_available: { client: true, default: false }, cli_show_images: { client: true, default: true }, pr_analytics: { client: true, default: false }, xai_team_link: { client: true, default: true }, xai_commerce_webview: { client: true, default: false }, xai_commerce_webview_web_billed_management: { client: true, default: false }, sand_mobile_xai_commerce_webview: { client: true, default: false }, unified_sku_billing_ui: { client: true, default: false }, block_legacy_sku_changes: { client: true, default: false }, auth_unification_ctas_930: { client: true, default: false }, use_unified_service_tokens: { client: true, default: false }, enable_cc_plugin_import: { client: true, default: true }, model_picker_nudge: { client: true, default: false }, cloud_agent_origin_repos: { client: true, default: false }, cloud_agent_new_project_entrypoint: { client: true, default: false }, cloud_agent_new_project_empty_root_commit: { client: true, default: false }, cloud_agent_new_project_jit_no_namespace: { client: true, default: false }, agent_create_repo_tray: { client: true, default: false }, agent_create_repo_tray_cloud_publish: { client: true, default: false }, codebase_browse_ask_cursor: { client: true, default: false }, enable_origin_agentic_repo_board: { client: true, default: false }, enable_origin_repo_insights: { client: true, default: false }, codebase_browse_symbol_nav: { client: true, default: true }, enable_automations_show_all_mirrored_repos: { client: true, default: false }, enable_forge_source_pr_creation_setting: { client: true, default: false }, origin_dogfooding_cursor_creation_provider_override: { client: true, default: false }, bitbucket_protected_git_scopes: { client: true, default: false }, cloud_agent_bitbucket_server_repos: { client: true, default: false }, origin_request_access_disabled: { client: true, default: false }, origin_non_admin_namespace_creation_allowed: { client: true, default: true }, origin_enable_org_member_direct_grants: { client: true, default: true }, enable_origin_external_collaborators: { client: true, default: true }, origin_repo_collaborators_tab: { client: true, default: true }, enable_origin_external_sharing: { client: true, default: true }, enable_clonekit_in_app: { client: true, default: false }, origin_mcp: { client: true, default: false, requiresAuthenticatedBootstrap: true }, enable_origin_research_preview_for_enterprises: { client: true, default: true }, marketplace_origin_distribution: { client: true, default: true }, atlas_enabled: { client: true, default: false }, mcp_oauth_hosted_loopback_callback: { client: true, default: false }, mcp_multi_account: { client: true, default: true }, sharepoint_team_connector: { client: true, default: false }, cloud_agent_interactive_mcp_auth: { client: true, default: true }, mcp_profile_scoped_global_disabled_state: { client: true, default: true }, team_mcps_in_cli: { client: true, default: false }, remote_permissions_file_path_admin: { client: true, default: false }, admin_command_denylist: { client: true, default: false }, admin_reset_agent_run_mode_to_auto_review: { client: true, default: false }, admin_command_denylist_enforcement_killswitch: { client: true, default: false }, restrict_team_member_invite_button: { client: true, default: false }, bugbot_autorun_killswitch: { client: true, default: false }, keybinding_migration_killswitch: { client: true, default: false }, agent_review_fake_dev: { client: true, default: false }, enable_moved_lines_treatment: { client: true, default: false }, ide_cmd_enter_submit: { client: true, default: true }, ide_nal_migration: { client: true, default: false }, ide_new_sidebar: { client: true, default: false }, playwright_mcp_provider: { client: true, default: true }, web_audit_events: { client: true, default: false }, web_cloud_agent_followup_model_picker: { client: true, default: true }, web_cloud_agent_new_model_picker: { client: true, default: false }, web_cloud_agent_kickoff_lands_in_run_view: { client: true, default: true }, web_cloud_agent_external_source_attachment: { client: true, default: true }, enable_new_cloud_onboarding_ui_changes: { client: true, default: false }, cloud_agent_portal_ask_question: { client: true, default: false }, cloud_agent_portal_pending_interactions: { client: true, default: false }, "web.show_local_source_filter": { client: true, default: false }, open_agent_window_bottom_convo: { client: true, default: false }, open_agent_window_top: { client: true, default: true }, "glass.enable_open_agent_in_window": { client: true, default: false }, cloud_agent_best_of_n_disabled: { client: true, default: false }, cloud_agent_prompt_upload_presign: { client: true, default: true }, search_telemetry: { client: true, default: false }, scim_require_user_directory_ui: { client: true, default: false }, allow_legacy_billing_group_creation: { client: true, default: false }, new_file_ux: { client: true, default: true }, internal_browser_evaluate: { client: true, default: false }, browser_canvas: { client: true, default: true }, cloud_canvas_skill: { client: true, default: false }, cloud_canvas_tools: { client: true, default: false }, composer_separate_shell_activity_groups: { client: true, default: false }, show_grouped_edit_diff_stats: { client: true, default: false }, composer_end_of_turn_summary: { client: true, default: false }, allowlist_toggle_menu: { client: true, default: true }, slim_codeblock_render: { client: true, default: true }, compact_terminal: { client: true, default: true }, "cursor-ios-disable-legacy-plans-iap": { client: true, default: false }, sand_legacy_iap_sales_cutoff: { client: true, default: false }, sand_android_iap_enabled: { client: true, default: true }, sand_android_purchase_token_backfill: { client: true, default: false }, composer_sandbox_settings_visible: { client: true, default: true }, sandbox_force_disable_win32: { client: true, default: true }, admin_network_controls: { client: true, default: true }, mcp_access_network_allowlist: { client: true, default: false }, mcp_admin_only_servers: { client: true, default: false }, mcp_admin_only_tools: { client: true, default: false }, sandbox_mcp_servers: { client: true, default: false }, sandbox_read_control_portal: { client: true, default: false }, sandbox_read_control_portal_ui: { client: true, default: false }, mcp_network_allowlist: { client: true, default: false }, mcp_settings_overhaul: { client: true, default: true }, mcp_settings_overhaul_portal: { client: true, default: true }, mcp_allowlist_import_export: { client: true, default: false }, mcp_user_extension_stdio_unsandboxed_win32: { client: true, default: false }, mcp_tool_allowlist_modes: { client: true, default: true }, cloud_agent_environment_mcp_allowlist_ui: { client: true, default: false }, cloud_agent_keyring_ui: { client: true, default: false }, cursor_rules_batch_update: { client: true, default: true }, agent_skills_batch_update: { client: true, default: true }, mcp_structured_logging: { client: true, default: false }, mcp_runtime_dedupe: { client: true, default: false }, dedupe_mcp_servers: { client: true, default: true }, mcp_oauth_unsafe_redirect_logging: { client: true, default: false }, proper_well_known_for_mcp_scopes: { client: true, default: true }, context_usage_canvas: { client: true, default: false }, local_computer_use: { client: true, default: false }, mac_computer_use: { client: true, default: false }, windows_computer_use_batch: { client: true, default: false }, computer_use_next_action: { client: true, default: false }, playwright_autorun: { client: true, default: true }, allow_download_prompts: { client: true, default: false }, agent_context_injection: { client: true, default: true }, project_agent_team_store: { client: true, default: false }, project_followups_use_steering: { client: true, default: false }, clone_blob_upload: { client: true, default: true }, internal_session_recording_status_bar: { client: true, default: false }, agent_video_signed_url_uploads: { client: true, default: false }, nal_task_tool: { client: true, default: true }, explore_subagent: { client: true, default: true }, enable_watch_video_in_ide: { client: true, default: true }, shell_subagent: { client: true, default: true }, enable_build_with_swarm: { client: true, default: false }, explicit_subagent_models: { client: true, default: false }, nal_trace: { client: true, default: false }, ask_question_all_modes: { client: true, default: true }, disable_terminal_output_ui_streaming: { client: true, default: false }, generate_user_instructions: { client: true, default: false }, ide_nal_rdv: { client: true, default: false }, use_nlb_for_nal: { client: true, default: true }, "use-usw1-agent-for-nal": { client: true, default: false }, retry_interceptor_disabled: { client: true, default: false }, retry_interceptor_enabled_for_streaming: { client: true, default: true }, bidi_append_fix: { client: true, default: true }, http1_keepalive_disabled: { client: true, default: false }, ws_reachability_probe: { client: true, default: true }, ws_dark_durability_probe: { client: true, default: false }, large_proto_logging_enabled: { client: true, default: false }, submitlogs_flush_throttle: { client: true, default: true }, background_composer_list_focus_aware_poll: { client: true, default: true }, agent_slack_bot_member_install: { client: true, default: false }, enterprise_early_access: { client: true, default: false }, use_byok_allowlist: { client: true, default: true }, show_dogfood_release_track: { client: true, default: false }, client_numeric_metrics: { client: true, default: true }, client_outage_banners: { client: true, default: false }, solidjs_total_observers_metric: { client: true, default: false }, renderer_heap_metrics: { client: true, default: false }, glass_react_commit_churn: { client: true, default: false }, sand_renderer_heap_metrics: { client: true, default: false }, sand_desktop_notification_permission: { client: true, default: false }, sand_desktop_notification_permission_persist: { client: true, default: false }, sand_mobile_notification_permission_persist: { client: true, default: false }, collect_sample_for_unresponsive_ext_host: { client: true, default: false }, unresponsive_ext_host_enhanced_attachments: { client: true, default: false }, worktree_nal_only: { client: true, default: true }, glass_precompute_diff_tokenization: { client: true, default: false }, review_changes_fast_multi_diff: { client: true, default: false }, cpp_perf_instrumentation: { client: true, default: true }, migrate_editor_mode: { client: true, default: true }, show_dev_only_ttft_warning: { client: true, default: false }, glass_local_review_first_bugbot_cta: { client: true, default: true }, editor_review_cta_uses_review_bugbot: { client: true, default: false }, local_commit_reflog_signal_killswitch: { client: true, default: false }, gitlab_progressive_repo_load_v1: { client: true, default: false }, repo_picker_server_side_search_v1: { client: true, default: false }, azure_devops_progressive_repo_load_v1: { client: true, default: true }, bugbot_azure_devops_settings: { client: true, default: true }, meta_mcp_tool: { client: true, default: false }, mcp_input_schema_json: { client: true, default: true }, ai_connect_stream_encode_yield: { client: true, default: false }, ai_connect_stream_decode_yield: { client: true, default: false }, mcp_meta_tool_slim_descriptors: { client: true, default: true }, local_agent_event_subscriptions: { client: true, default: true }, web_cloud_agent_conversation_quick_access_rail: { client: true, default: false }, mcp_always_expose_auth_tool: { client: true, default: false }, glass_mcp_app_focus_on_type_guard: { client: true, default: true }, shared_chats: { client: true, default: false }, shared_canvases: { client: true, default: true }, share_transcripts_include_plan: { client: true, default: false }, shared_transcripts_bulk_download: { client: true, default: false }, use_ide_browser_script: { client: true, default: false }, expose_babysit_pr_cloud_entrypoint: { client: true, default: false }, expose_branch_mismatch_continue_in_cloud_entrypoint: { client: true, default: false }, expose_plan_build_in_cloud_entrypoint: { client: true, default: false }, new_plan_editor: { client: true, default: true }, ai_code_tracking_format_detection: { client: true, default: true }, ai_code_tracking_assume_all_commits_ai: { client: true, default: false }, ai_code_tracking_use_commit_timestamp_for_tracking_start: { client: true, default: false }, ai_code_tracking_git_operations_binding_fix: { client: true, default: false }, cloud_agent_slack_default_worker: { client: true, default: false }, grok_bot_contextual_banner_killswitch: { client: true, default: false }, enable_cloud_agent_timings: { client: true, default: false }, subagent_support_interrupt: { client: true, default: true }, web_cloud_agent_no_repo_entrypoint: { client: true, default: false }, agent_store_dashboard: { client: true, default: false }, agent_store_undelete: { client: true, default: false }, cloud_agent_bc_id_attachment: { client: true, default: false }, cloud_persistent_terminals: { client: true, default: true }, cloud_glass_shared_sessions: { client: true, default: false }, shared_terminal_env_setup: { client: true, default: false }, instant_grep_indexing: { client: true, default: false }, cli_instant_grep_indexing: { client: true, default: false }, cli_grove_grep: { client: true, default: false }, push_git_tracked_state_exp: { client: true, default: true }, instant_grep_user_search: { client: true, default: false }, parallel_agent_workflow: { client: true, default: false }, enable_multitask_mode: { client: true, default: true }, glass_subagent_followups: { client: true, default: false }, glass_custom_modes: { client: true, default: false }, cloud_custom_modes: { client: true, default: false }, hide_async_subagent_task_notifications: { client: true, default: true }, cloud_agent_message_sender_attribution: { client: true, default: true }, enable_await_for_subagents: { client: true, default: false }, fix_claude_subagent_await: { client: true, default: true }, fix_grok_subagent_await: { client: true, default: true }, public_leaderboard_web: { client: true, default: false }, enable_cloud_agent_repo_selector: { client: true, default: false }, route_ent_trial_to_model: { client: true, default: false }, debug_mode_autorun_support_enabled: { client: true, default: false }, analytics_conversation_classification: { client: true, default: false }, use_cursor_github_app_id: { client: true, default: true }, push_local_agent_to_cloud: { client: true, default: false }, send_to_cloud_on_followup: { client: true, default: false }, midturn_move_to_cloud_ads: { client: true, default: false }, cloud_agent_checkout_convert_to_local: { client: true, default: false }, show_browser_popup: { client: true, default: false }, agent_layout_show_diffs_quick_settings: { client: true, default: false }, skip_git_telemetry_computations: { client: true, default: false }, composer_background_throttling_remote_only: { client: true, default: false }, composer_gc_handles: { client: true, default: true }, composer_header_log_storage: { client: true, default: false }, composer_retention_structural_byte_metrics: { client: true, default: false }, tokenize_stream_code_blocks: { client: true, default: true }, glass_transcript_code_token_cache: { client: true, default: false }, composer_react_transcript_working_indicator: { client: true, default: false }, composer_transcript_steer_float_up: { client: true, default: false }, inline_visualizations: { client: true, default: false }, inline_visualization_png_export: { client: true, default: false }, diff_tab_viewport_virtualization: { client: true, default: false }, allow_shared_private_worker_assignment: { client: true, default: true }, private_workers_label_filtering: { client: true, default: false }, skip_github_app_for_private_worker: { client: true, default: false }, update_use_localhost: { client: true, default: false }, hide_inline_changed_files: { client: true, default: false }, wysiwyg_markdown_default: { client: true, default: false }, markdown_embedded_project_databases: { client: true, default: false }, skill_icon_color: { client: true, default: false }, skill_catalog_ide_cache: { client: true, default: false }, opt_devs_into_experimental_model_toggle: { client: true, default: false }, default_on_chat_editors: { client: true, default: false }, default_tsgo_internal: { client: true, default: false }, desktop_bridge: { client: true, default: false }, disable_no_title_bar: { client: true, default: false }, show_debug_aux_pane_border: { client: true, default: false }, glass_typography_refresh: { client: true, default: true }, browser_subagent: { client: true, default: true }, browser_subagent_gating: { client: true, default: false }, browser_cpp_telemetry: { client: true, default: true }, network_access_control: { client: true, default: true }, git_snapshot_indexing: { client: true, default: true }, cpp_telem_chunking: { client: true, default: true }, marketplaces_enabled: { client: true, default: true }, customize_page: { client: true, default: false }, customize_page_leaderboard_enabled: { client: true, default: false }, customize_manage_scope_multiselect: { client: true, default: true }, customize_global_search: { client: true, default: true }, customize_plugin_detail_mcp_management: { client: true, default: false }, web_agent_pilled_page: { client: true, default: false }, team_marketplace_mcps: { client: true, default: true }, publish_user_skills: { client: true, default: true }, private_skills_user_store: { client: true, default: false }, plugin_aware_mcp_edit_modal: { client: true, default: true }, dashboard_plugin_add_modal: { client: true, default: false }, dashboard_unified_plugin_mcp_allowlist: { client: true, default: false }, plugin_marketplace_allowlisted_publisher: { client: true, default: false }, prompt_suggestion: { client: true, default: false }, extension_signature_verification: { client: true, default: false }, extension_gallery_query_chunking: { client: true, default: false }, subagents_client_side_vscode: { client: true, default: true }, glass_projects_allowed_machines_footer: { client: true, default: false }, glass_projects_restart_offline_workers: { client: true, default: false }, mcp_coalesce_metrics_sampling: { client: true, default: false }, mcp_shared_process_transports: { client: true, default: false }, sand_box_egress_tunnel: { client: true, default: true }, task_card_tips_enabled: { client: true, default: false }, codebase_telemetry_v2: { client: true, default: true }, codebase_telemetry_v2_git_history: { client: true, default: true }, codebase_telemetry_v2_agent_dot_dirs: { client: true, default: true }, codebase_protection_client_enforcement: { client: true, default: false }, codebase_protection_reporting: { client: true, default: false }, codebase_telemetry_v1_deprecation: { client: true, default: true }, sand_codebase_telemetry: { client: true, default: true }, sand_orbit: { client: true, default: false, requiresAuthenticatedBootstrap: true }, disable_codebase_indexing: { client: true, default: true }, disable_docs_client_usage: { client: true, default: true }, import_3p_plugins: { client: true, default: true }, enable_local_3p_plugin_imports: { client: true, default: true }, enable_new_team_member_usage_boost: { client: true, default: true }, disable_push_request_context: { client: true, default: false }, composer_parallel_stream_setup: { client: true, default: false }, composer_defer_submit_transcript_render: { client: true, default: false }, bugbot_merged_pr_scan: { client: true, default: true }, windows_linux_update_auth_headers: { client: true, default: false }, updater_recovery_windows: { client: true, default: true }, glass_focus_outline: { client: true, default: false }, glass_inline_assistant_turn_actions_bar: { client: true, default: true }, inline_diff_defer_hidden_diff_state: { client: true, default: false }, park_inline_diffs: { client: true, default: false }, enable_marketplace_plugin_logging: { client: true, default: true }, enable_sparse_plugin_clones: { client: true, default: true }, glass_always_local_agent_workspace: { client: true, default: true }, glass_disable_eager_indexing_for_local_sessions: { client: true, default: true }, glass_rainbow_csv_extension: { client: true, default: false }, retry_hydration_optimization: { client: true, default: false }, full_self_driving: { client: true, default: false }, full_self_driving_github_origin_review: { client: true, default: false }, fsd_suggestions_platform_local_mcp: { client: true, default: false }, full_self_driving_glass: { client: true, default: false }, full_self_driving_glass_pr_tab: { client: true, default: false }, shutdown_hang_watchdog_darwin_sigkill: { client: true, default: true }, cursor_shared_session_file_watcher: { client: true, default: false }, cursor_update_supervisor: { client: true, default: false }, cursor_update_shipit_cache_reset_kill_switch: { client: true, default: false }, cursor_private_inference_download_prompt: { client: true, default: false }, cursor_cli_private_inference_download_prompt: { client: true, default: false }, disable_sqlite_storage_backup: { client: true, default: true }, sqlite_incremental_auto_vacuum_on_close: { client: true, default: false }, agent_store_sync_client: { client: true, default: false }, agent_store_use_dedicated_service: { client: true, default: false }, agent_store_citation_index_tier: { client: true, default: false }, agent_store_principal_local_mounts: { client: true, default: false }, agent_store_local_user_mount: { client: true, default: true }, proxy_agent_secure_context_cache: { client: true, default: false }, auto_disable_unused_models: { client: true, default: false }, drop_custom_prompt_context: { client: true, default: false }, composer_reuse_editor_input: { client: true, default: true }, disposable_leak_reporting: { client: true, default: false } });
    const uf = { composer_gc_safety_net_1s: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, tsgo_disable_auto_imports_internal: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, grok_bot_send_to_user_reminder_delegation: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, grok_bot_task_subagent_roster: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, grok_bot_update_state_split_v2: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, sand_hide_at_mentions_ab: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, sand_onboarding_job_role: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, sand_local_egress_default_on_ab: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, sand_mobile_onboarding_job_role_optional: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, sand_mobile_notifications_ask_redesign: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, sand_onboarding_role_use_case_bots: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, limit_hit_ui_2026_06: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "treatment"]) } }, limit_hit_ui_2027_07: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "treatment"]) } }, third_party_usage_nudge_2026_07: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "treatment"]) } }, third_party_usage_nudge_policy_2026_07: { client: true, fallbackValues: { policy: "none" }, parseValue: { policy: vf(["none", "90", "75_90"]) } }, sand_usage_warning_policy_2026_08: { client: true, fallbackValues: { policy: "none", firstThresholdPercent: 75, secondThresholdPercent: 90 }, parseValue: { policy: vf(["none", "single", "double"]), firstThresholdPercent: Sf, secondThresholdPercent: Sf } }, sand_group_chat_discouragement_2026_09: { client: true, fallbackValues: { policy: "control" }, parseValue: { policy: vf(["control", "notice", "notice_and_hide_create"]) } }, sand_invite_teammates_placement_2026_09: { client: true, fallbackValues: { placement: "control" }, parseValue: { placement: vf(["control", "profile_menu", "settings"]) } }, third_party_on_demand_nudge_2026_08: { client: true, fallbackValues: { group: "control", copy: "cursor_models" }, parseValue: { group: vf(["control", "treatment"]), copy: vf(["cursor_models", "grok_45"]) } }, new_chat_first_party_switch_2026_08: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "treatment"]) } }, grok_45_app_open_recent_composers_2026_08: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, automations_button_in_ide: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, grok_bot_contextual_banner: { client: true, fallbackValues: { enabled: false, cooldown_days: 1, max_shows: 5 }, parseValue: { enabled: _f, cooldown_days: Sf, max_shows: Sf } }, grok_bot_contextual_banner_v2: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, parallel_agents_try_cloud_nudge_glass: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: vf(["control", "try_cloud", "educational"]) } }, dashboard_user_checklist_enterprise: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, dashboard_admin_setup_enterprise: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, dashboard_team_admin_onboarding_checklist: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, new_team_add_teammates_callout: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "callout"]) } }, new_team_name_prefill: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "domain_brand"]) } }, dashboard_member_remove_modal: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "treatment_info", "treatment_warning"]) } }, push_mcps: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "enabled"]) } }, glass_setup_cloud_pill: { client: true, fallbackValues: { enabled: false, variant: "ghost" }, parseValue: { enabled: _f, variant: vf(["ghost", "primary"]) } }, send_to_cloud_composer_glass: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, connect_repo_env_setup_pill_glass: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: vf(["control", "primary", "secondary", "tertiary"]) } }, ide_connect_git_repos_start: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: vf(["control", "primary", "secondary", "tertiary"]) } }, ide_steer_from_cloud_start: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, glass_account_menu_ios_download: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, glass_account_menu_grok_bot: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, glass_account_menu_usage_remaining: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, glass_agent_demos_setup_pill: { client: true, fallbackValues: { enabled: false, variant: "ghost", cloud_target_only: false }, parseValue: { enabled: _f, variant: vf(["ghost", "primary"]), cloud_target_only: _f } }, cloud_setup_cta_glass_running_agent_session: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: vf(["control", "chat_title", "composer_pill"]) } }, set_up_env_pill_glass: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: vf(["control", "primary", "secondary", "tertiary"]) } }, agent_desktop_glass_env_setup: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, glass_automations_sidebar_new_tag: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, glass_grok_bot_topbar_cta: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, glass_grok_bot_topbar_cta_new_chat_only: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, glass_grok_bot_topbar_cta_hide_when_installed: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, new_tag_cloud_runtime_glass: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, runtime_picker_discovery_nudge_glass: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, remote_control_runtime_picker_glass: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, default_web_users_cloud_in_glass: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, cloud_setup_cta_web_running_agent_session: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: vf(["control", "primary", "secondary", "tertiary"]) } }, suggested_prompts: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, suggested_mode_switch: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "nudge"]) } }, marketplace_tab_customize_label: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "treatment"]) } }, customize_default_manage_tab: { client: true, fallbackValues: { tab: "plugins" }, parseValue: { tab: vf(["plugins", "mcps"]) } }, customize_grok_bot_callout: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, marketplace_card_install_cta_ab: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "card_cta"]) } }, marketplace_detail_authenticate_cta_ab: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "detail_auth_cta"]) } }, marketplace_try_in_chat_prompt_ab: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "concrete_use_case_prompt"]) } }, composer_run_button_style: { client: true, fallbackValues: { buttonStyle: "primary" }, parseValue: { buttonStyle: vf(["primary", "secondary"]) } }, new_placeholder: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, cursor_launch_at_login: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, subscription_only_degraded_extended_usage: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, onboarding_default_layout_agent: { client: true, fallbackValues: { enabled: "false" }, parseValue: { enabled: Af } }, onboarding_left_right_chat: { client: true, fallbackValues: { enabled: "left" }, parseValue: { enabled: vf(["left", "right"]) } }, separate_auto_and_api_usage_bars_for_individuals: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "test"]) } }, onboarding_skip_post_login: { client: true, fallbackValues: { enabled: "control" }, parseValue: { enabled: vf(["control", "remove_features"]) } }, free_user_locked_model_2026_05: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: vf(["control", "composer_2_5_fast", "composer_2_5", "grok_4_6"]) } }, free_user_composer_grok_picker_2026_07: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "treatment"]) } }, model_picker_promote_first_party_v3: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: vf(["control", "grouped_auto_expand"]) } }, model_picker_usage_display_2026_08: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "show_labels"]) } }, free_user_usage_summary_display_mode: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "always_show_percentage"]) } }, pro_auto_mode_new_users: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "pro_and_auto_default_auto", "pro_and_auto_default_pro"]) } }, pro_auto_mode_existing_users: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "pro_and_auto_default_auto_with_nudge"]) } }, premium_auto_mode: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "premium_auto_option"]) } }, terminal_tip: { client: true, fallbackValues: { enabled: false, message: "Install Cursor CLI?", action: "curl https://cursor.com/install -fsS | bash", show_every_hours: 0, show_count: 0 }, parseValue: { enabled: _f, message: Af, action: Af, show_every_hours: Sf, show_count: Sf } }, cli_install_ad: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, new_chat_auto_switch: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "popup", "inline_banner"]) } }, team_pending_cancellation_cancel_now: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, yearly_upgrade_inplace: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, portal_od_enable_limit_hit_2026_08: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "treatment"]) } }, dashboard_user_menu_view_plans: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, dashboard_create_team_sidebar_cta: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, sidebar_bottom_section_cta: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "create_team", "upgrade_to_pro"]) } }, sidebar_grok_bot_cta: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, agents_grok_bot_cta: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, spending_grok_bot_cta: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, free_user_create_team_cta: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, dashboard_free_overview_cleanup: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "used_percentage", "remaining_percentage"]) } }, download_bottom_dashboard: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, web_grok_bot_launch_ad: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, web_cloud_agents_agent_window_ad: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, router_settings_disabled_info: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, onboarding_redirect_git_to_login_deep_control: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, dashboard_invite_modal_version: { client: true, fallbackValues: { variant: "v2" }, parseValue: { variant: vf(["v2", "v3", "v3-contacts"]) } }, set_up_env_pill_web: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: vf(["control", "primary", "secondary", "tertiary"]) } }, completely_free_env_setup_glass_and_web: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: vf(["control", "primary", "secondary", "tertiary"]) } }, env_setup_free_callout_web: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, completely_free_env_setup_glass: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: vf(["control", "treatment"]) } }, dynamic_automation_templates: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "treatment"]) } }, team_pinned_marketplace_plugins: { client: true, fallbackValues: { group: "control" }, parseValue: { group: vf(["control", "treatment"]) } }, glass_new_chat_header: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, glass_ftux_wizard: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, glass_ftux_app_scan: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, terminal_agent_integration: { client: true, fallbackValues: { enabled: false }, parseValue: { enabled: _f } }, ide_update_ux_exp: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: vf(["control", "sidebar", "non_sidebar"]) } }, effort_first_model_picker: { client: true, fallbackValues: { variant: "control" }, parseValue: { variant: vf(["control", "treatment"]) } }, effort_first_show_grok_name: { client: true, fallbackValues: {}, parseValue: {} } };
    Object.keys(uf);
    const df = { fastRetryBaseDelayMs: am().min(1e3).max(36e5), fastRetryMaxDelayMs: am().min(1e3).max(36e5), fastRetryMaxAttempts: am().min(1).max(20).optional(), periodicRetryBaseDelayMs: am().min(3e4).max(36e5), periodicRetryMaxDelayMs: am().min(3e4).max(36e5), maxPeriodicCycles: am().min(0).max(1e4).nullish(), focusRetryCooldownMs: am().min(3e5).max(36e5), inlineReconnectCooldownMs: am().min(1e3).max(36e5).optional(), oauthBackendRefreshHydrationPollIntervalMs: am().min(200).max(5e3).optional(), streamableHttpSession404TombstoneThreshold: am().min(1).max(50).optional(), healthProbeTimeoutMs: am().min(1e3).max(12e4).optional(), toolCallBoundedTimeoutEnabled: fm().optional(), toolCallIdleTimeoutMs: am().min(5e3).max(18e5).optional(), toolCallMaxTotalTimeoutMs: am().min(5e3).max(36e5).optional(), degradedProbeDelayMs: am().min(1e3).max(36e5).optional(), maxDegradedProbeFailures: am().min(1).max(20).optional(), keepaliveProbeDelayMs: am().min(1e4).max(36e5).optional(), keepaliveJitterMs: am().min(0).max(36e5).optional(), stabilityThresholdMs: am().min(5e3).max(6e5).optional(), stdioConnectFailuresAreNonRetryable: fm().optional(), retryNonRetryableOnWake: fm().optional(), nonRetryableWakeRetryCooldownMs: am().min(1e3).max(36e5).optional(), retryNonRetryableAutomatically: fm().optional(), networkResumeReconnectEnabled: fm().optional(), networkResumeReconnectDebounceMs: am().min(0).max(18e5).optional() }, pf = Lm(df).partial().extend({ identifier: lp().optional(), hostname: lp().optional() }).refine((e2) => void 0 !== e2.identifier || void 0 !== e2.hostname, { message: "Each mcp_reconnect_config override requires identifier and/or hostname." }), mf = (Lm({ ...df, overrides: Nm(pf).nullish() }), ["figma", "slack", "linear", "notion-workspace"]), hf = Nm(Vm("type", [Lm({ type: ph("app"), app: lh(mf), title: lp().min(1), description: lp().min(1), prompt: lp().min(1) }).strict(), Lm({ type: ph("icon"), icon: lp().min(1), title: lp().min(1), description: lp().min(1), prompt: lp().min(1) }).strict()])).length(mf.length + 3).superRefine((e2, t2) => {
      const r2 = e2.flatMap((e3) => "app" === e3.type ? [e3.app] : []), n2 = e2.length - r2.length;
      3 !== n2 && t2.addIssue({ code: cf, message: `Expected exactly 3 icon actions, got ${n2}` });
      for (const e3 of mf) {
        const n3 = r2.filter((t3) => t3 === e3).length;
        1 !== n3 && t2.addIssue({ code: cf, message: `Expected exactly one "${e3}" action, got ${n3}` });
      }
    }), ff = Lm({ coding: hf, tasks: hf }).strict(), gf = ["software-engineer", "designer", "product-manager", "researcher", "data-scientist", "student", "marketer", "operations", "something-else"], yf = th(lp().max(100), ff).superRefine((e2, t2) => {
      const r2 = new Set(gf);
      for (const n2 of Object.keys(e2)) r2.has(n2) || t2.addIssue({ code: cf, message: `Unknown FTUX first-action job role key: ${n2}`, path: [n2] });
    }), wf = (am().int().positive(), am().int().positive(), am().int().positive(), am().int().positive(), am().int().positive(), am().int().positive(), am().int().positive(), am().int().positive(), am().int().positive(), am().int().positive(), Lm({ enabled: fm(), instructionsUrl: lp().nullish() }), Lm({ products: th(lp(), lh(["pro", "pro_plus", "ultra"])) }), Lm({ report_interval_ms: am().int().positive(), jitter_fraction: am().min(0).max(1) }), Lm({ initial_timeout_ms: am(), retry_timeout_ms: am(), max_attempts: am() }), Lm({ pollIntervalMs: am().nullable(), requestIdleTimeoutMs: am().nullable() }), Lm({ deadline_ms: am(), max_stale_age_ms: am() }), Lm({ maxClosureBytes: am().int().positive(), maxClosureBlobs: am().int().positive(), putConcurrency: am().int().min(1).max(32), parallelListing: fm(), migrationAgentConcurrency: am().int().min(1).max(32), migrationReadBatchBlobs: am().int().min(1).max(64), migrationPutConcurrency: am().int().min(1).max(32), migrationCopyConcurrency: am().int().min(1).max(64), migrationExportCommandTimeoutMs: am().int().min(6e4).max(6e5), migrationHostWindowMs: am().int().min(6e4).max(27e5), migrationExportActivityTimeoutMs: am().int().min(6e4).max(18e5) }), Lm({ control: lh(["legacy_gates", "config"]), mode: lh(["off", "shadow", "live"]), autoReviewEnforce: fm() }), Lm({ mode: lh(["off", "shadow", "on"]) }), Lm({ sampleRate: am().min(0).max(1), connectors: Nm(Lm({ name: lp().min(1), hosts: Nm(lp().min(1)), sendTools: Nm(lp().min(1)), participants: Lm({ args: Nm(lp().min(1)).min(1), ownerArgs: Nm(lp().min(1)).optional() }).optional() })), firstPartySendTools: Nm(Lm({ name: lp().min(1), toolName: lp().min(1) })).optional() }), Lm({ basePrompt: lp() }), Lm({ healthcheck_timeout_ms: am().int().positive(), remote_extension_host_startup_grace_ms: am().int().nonnegative() }), Lm({ interval_ms: am().int().positive() }), Lm({ stackTraceLimitFloor: am().int().nonnegative() }), Lm({ windowIdleMinutesToSuspend: am().int().nonnegative(), hiddenAgentMinutesToSuspend: am().int().nonnegative(), suspendWhileWindowFocused: fm(), maxDormantQueuedMessages: am().int().positive(), maxDormantQueuedBytes: am().int().positive(), hardMaxDormantQueuedMessages: am().int().positive(), hardMaxDormantQueuedBytes: am().int().positive() }), Lm({ idleMinutesToKillExtensionHost: am().int().nonnegative(), freeMemoryPercentageToKillExtensionHost: am().min(0).max(100), killUserExtensionHost: fm() }), Lm({ rpcTimeoutMs: am().int().positive() }), Lm({ outputSuppressionWindowMs: am().int().positive(), outputSuppressionThresholdCharsPerSecond: am().int().positive(), outputSuppressionMinChars: am().int().positive(), outputLimiterFlushIntervalMs: am().int().positive(), outputLimiterMaxBufferedBytes: am().int().positive(), extHostMinBatchIntervalMs: am().int().positive(), extHostMaxBatchIntervalMs: am().int().positive(), extHostBytesPerIntervalStep: am().int().positive() }), Lm({ model: lp(), iterations: am(), agentic_iterations: am(), agentic_model: lp(), deep_review_model: lp(), context_lines: am() }), Lm({ tokenUsageThresholdPercentage: am(), tolerancePercentage: am(), inflightMaxAgeMinutes: am(), speculativeStreamTimeoutMinutes: am() }), Lm({ message: lp() }), Lm({ enable: fm(), enabled_models: Nm(lp()), force_enable_on_all_models: fm(), group_text: fm(), group_thinking: fm(), group_todos: fm(), group_edits: fm(), smooth_stream_enable: fm(), grouped_text_max_length: am(), grouped_text_max_length_composer_family: am(), tool_summary_mode: lp(), nest_tool_blocks: fm() }), Lm({ meta_parent_model: lp(), allow_subagent_followups: fm(), enable_notes: fm() }), Lm({ startup_tips: Nm(Lm({ id: lp(), text: lp(), enabled: fm().optional() })) }), Lm({ tips: Nm(Lm({ id: lp(), text: lp(), targetSurfaces: Nm(lh(["editor", "glass"])).min(1) }).strict()), config: Lm({ intervalMs: am().positive(), devIntervalMs: am().positive().optional(), minClientVersion: lp() }).strict() }).strict(), Lm({ showSettings: fm(), keepIsland: fm(), sidebarLocation: lh(["left", "right", "user", "noop"]) }), Lm({ default_diff_mode: lh(["unified", "diffs"]) }), Lm({ enabledForNal: fm(), enabledForOal: fm(), fromModes: Nm(lp()), targetModes: Nm(lp()) }), Lm({ authToolDescription: lp(), errorStatusMessage: lp(), needsAuthStatusMessageWithAuthTool: lp() }), Lm({ oauthAttemptTtlMs: am().min(6e4).max(6048e5), refreshLockTtlMs: am().min(2e3).max(12e4).nullish(), refreshLockMaxHoldMs: am().min(3e4).max(36e5).optional(), registrationLockTtlMs: am().min(2e3).max(12e4).nullish() }), Lm({ classifyBeforeWipe: fm() }), Lm({ enabled: fm(), denylist: Nm(lp()), ipv4Hosts: Nm(lp()).optional() }), Lm({ operations: Nm(lh(["refresh", "registration"])), executorKinds: Nm(lh(["backendHttpMcp", "cloudAgent", "agentHost", "localIde", "remoteExtensionHost"])), providerAllowlist: Nm(lp()), fallbackMode: lh(["fail_open", "fail_closed"]), refreshLockTtlMs: am().min(2e3).max(12e4), registrationLockTtlMs: am().min(2e3).max(12e4), waitPollIntervalMs: am().min(25).max(5e3), waitJitterMs: am().min(0).max(5e3), maxWaitMs: am().min(0).max(12e4) }), Lm({ sustainedPressureWindowMs: am(), profileDurationMs: am(), minIntervalMs: am(), maxRetainedProfiles: am() }), Lm({ firstTokenDeadlineMs: am(), idleDeadlineMs: am() }), Lm({ maxDecorations: am() }), Lm({ enableMainProcessCloudRefresh: fm().default(false), activeIntervalMs: am().int().min(5e3).max(36e5), idleIntervalMs: am().int().min(5e3).max(36e5), emptyIntervalMs: am().int().min(5e3).max(36e5), engagementThrottleMs: am().int().min(1e3).max(6e4), menuCap: am().int().min(1).max(100), enablePoll: fm(), enableEngagement: fm(), enablePower: fm() }), Lm({ enabled: fm(), flushIntervalMs: am(), sampleRate: am(), maxScriptsPerLoaf: am(), maxBatchBytes: am(), loafThresholdMs: am(), maxEventsPerFlush: am() }), Lm({ version: am() }), Lm({ allowlist: Nm(lp()) }), Lm({ logSizeThreshold: am(), logPreviewLines: am(), logPreviewChars: am() }), Lm({ mode: lh(["off", "on_logged_in", "on"]) }), Lm({ tools: th(lp(), Lm({ ttl: am().optional(), maxConcurrent: am().optional() })), defaultTtl: am(), defaultMaxConcurrent: am() }), Lm({ num_threads: am(), fallback_num_threads: am(), use_batch_executor: fm(), batch_executor_wait_ms: am() }), Lm({ enabled: Nm(lp()), pingIdleConnection: fm().nullable(), pingIntervalMs: am().nullable(), pingTimeoutMs: am().nullable(), idleConnectionTimeoutMs: am().nullable() }), Lm({ poolSize: am() }), Lm({ keepAliveInitialDelayMs: am().nullable() }), Lm({ maxConnections: am() }), Lm({ idleHoldMs: am(), echoTimeoutMs: am(), concurrency: am() }), Lm({ sampling_rate: am() }), Lm({ hooks_ready_timeout_ms: am() }), Lm({ thresholds_ms: Nm(am()) }), Lm({ error_type_denylist: Nm(lp()) }), Lm({ advisoryTimeoutMs: am(), failTimeoutMs: am() }), Lm({ mode: lh(["legacy", "dual", "ref_only"]), max_blob_bytes: am().int().positive(), max_inline_dynamic_bytes: am().int().positive() }), Lm({ timeout_ms: am() }), Lm({ enabled: fm(), min_display_threshold_ms: am() }), Lm({ ad_id_to_show: lp() }), Lm({ quiet_period_ms: am(), first_launch_quiet_period_ms: am() }), Lm({ max_resume_age_ms: am().int().min(_o.Zw).max(_o.fg) }), Lm({ enabled: fm(), subsample_polling_rate_sec: am(), sample_polling_rate_min: am() }), Lm({ user_routing_enabled: fm(), inactive_days: am(), ch_timeout_ms: am(), ch_cache_ttl_seconds: am(), local_routing_enabled: fm() }), Lm({ retriableErrors: Nm(Lm({ code: lp(), errorMessage: lp().optional(), method: lp().optional() })) }), Lm({ maxRetries: am().nullish(), baseDelayMs: am().nullish(), maxDelayMs: am().nullish() }), Lm({ targetCharsPerFrame: am(), maxLagFrames: am(), barrierMaxWaitMs: am() }), Lm({ local_enabled: fm(), backend_reporting_enabled: fm(), network_diagnostics_reporting_enabled: fm().optional(), subsample_polling_rate_sec: am(), sample_polling_rate_min: am() }), Lm({ monitor_enabled: fm(), low_memory_sustained_sec: am(), min_agent_process_age_sec: am(), low_memory_available_pct: am(), low_memory_available_abs_gb: am(), cpu_high_pct: am(), cpu_high_sustained_sec: am(), min_reported_cpu_pct: am() }), Lm({ local_enabled: fm(), backend_reporting_enabled: fm(), subsample_polling_rate_sec: am(), sample_polling_rate_min: am() }), Lm({ enabled: fm(), sample_ratio: am() }), Lm({ enabled: fm(), drain_interval_sec: am() }), Lm({ enabled: fm() }), Lm({ max_bytes: am() }), Lm({ maxRunning: am().int().positive() }), Lm({ min_version: lp(), backend_min_version: lp(), novnc_port_token_min_version: lp(), hosted_mcp_oauth_callback_min_version: lp(), max_age_days: am().int().min(0).catch(0) }), Lm({ min_recommended_build: am(), min_allowed_build: am(), update_url: lp() }), Lm({ modelId: lp().min(1), maxMode: fm(), parameters: Nm(Lm({ id: lp().min(1), value: lp() })) }), Lm({ soft_limit_mb: am(), hard_limit_mb: am() }), Lm({ modelId: lp(), maxMode: fm(), parameters: Nm(Lm({ id: lp().min(1), value: lp() })) }), Lm({ modelId: lp(), maxMode: fm(), parameters: Nm(Lm({ id: lp().min(1), value: lp() })) }), Lm({ enabled: fm(), sample_rate_denominator: am(), cooldown_seconds: am(), signup_grace_seconds: am() }), Lm({ sync_debounce_ms: am().int().min(250).max(36e5), idle_backoff_factor: am().min(1).max(4).optional(), sync_idle_max_ms: am().int().min(250).max(36e5).optional(), idle_quiesce_ms: am().int().min(0).max(36e5).optional(), large_target_ttl_ms: am().int().min(6e4).max(864e5).optional(), sync_backoff_base_ms: am().int().min(100).max(36e5), sync_backoff_max_ms: am().int().min(100).max(36e5), project_sync_debounce_ms: am().int().min(250).max(36e5), project_sync_idle_max_ms: am().int().min(250).max(36e5).optional(), project_sync_backoff_base_ms: am().int().min(100).max(36e5), project_sync_backoff_max_ms: am().int().min(100).max(36e5), passive_retry_interval_ms: am().int().min(0).max(36e5), passive_index_poll_interval_ms: am().int().min(0).max(36e5), project_store_poll_interval_ms: am().int().min(250).max(36e5), path_refresh_min_interval_ms: am().int().min(0).max(36e5).optional(), project_notes_poll_interval_ms: am().int().min(1e3).max(36e5).optional(), max_file_size_bytes: am().int().min(1024).max(1073741824), token_refresh_buffer_ms: am().int().min(0).max(6e5), mint_terminal_denial_cache_ms: Gm([ph(0), am().int().min(6e4).max(864e5)]).optional(), skip_denied_mount_sync: Gm([ph(0), ph(1)]).optional(), rpc_retry_max_attempts: am().int().min(1).max(10), rpc_retry_base_delay_ms: am().int().min(1).max(6e4), rpc_retry_max_delay_ms: am().int().min(1).max(3e5), rpc_retry_multiplier: am().min(1).max(10), token_refresh_jitter_ratio: Gm([ph(0), am().min(0.05).max(0.9)]).optional(), min_token_slack_ms: am().int().min(0).max(6e4).optional(), mint_retry_policy_version: Gm([ph(0), ph(1)]).optional(), mint_retry_max_attempts: am().int().min(1).max(5).optional(), mint_retry_base_delay_ms: am().int().min(1).max(1e4).optional(), mint_retry_max_delay_ms: am().int().min(1).max(6e4).optional(), mint_retry_budget_ratio: am().min(0).max(1).optional(), mint_retry_budget_floor: am().int().min(0).max(100).optional(), mint_transient_negative_cache_base_ms: am().int().min(100).max(6e5).optional(), mint_transient_negative_cache_max_ms: am().int().min(100).max(36e5).optional(), mint_gate_open_threshold: am().int().min(1).max(1e3).optional(), mint_gate_window_ms: am().int().min(1e3).max(6e5).optional(), mint_gate_open_base_ms: am().int().min(100).max(6e5).optional(), mint_gate_open_max_ms: am().int().min(100).max(36e5).optional(), rpc_timeout_ms: am().int().min(1e3).max(6e5), blob_idle_timeout_ms: Gm([ph(0), am().int().min(1e3).max(6e5)]), blob_connect_timeout_ms: Gm([ph(0), am().int().min(1e3).max(3e5)]).optional(), sync_round_timeout_ms: Gm([ph(0), am().int().min(3e4).max(36e5)]), sync_round_progress_timeout_ms: Gm([ph(0), am().int().min(3e4).max(36e5)]).optional(), sync_round_hard_cap_ms: Gm([ph(0), am().int().min(6e4).max(72e5)]).optional(), sync_round_unwind_timeout_ms: am().int().min(1e3).max(6e5), lock_release_failure_threshold: am().int().min(1).max(20), lock_release_failure_streak_threshold: am().int().min(0).max(100).optional(), lock_release_failure_streak_passive_ms: am().int().min(5e3).max(36e5).optional(), resume_gap_threshold_ms: Gm([ph(0), am().int().min(3e4).max(36e5)]), resume_detection_mode: lh(["mono_gap", "timer_lateness"]).optional(), dirty_passive_stalled_threshold_ms: Gm([ph(0), am().int().min(3e4).max(36e5)]), s3_concurrency: am().int().min(1).max(64), list_concurrency: am().int().min(1).max(64), list_walk_concurrency: am().int().min(1).max(64).optional(), hash_concurrency: am().int().min(1).max(64), presign_concurrency: am().int().min(1).max(64), multipart_upload_threshold_bytes: am().int().min(5242880).max(1073741824), multipart_part_size_bytes: am().int().min(5242880).max(536870912), multipart_presign_window_size: am().int().min(1).max(32), pull_presign_window_size: am().int().min(1).max(1e3), multipart_complete_max_attempts: am().int().min(1).max(5), multipart_max_restarts: am().int().min(0).max(2), multipart_max_conflict_renames: am().int().min(0).max(2), multipart_max_expiry_refreshes: am().int().min(0).max(3), write_barrier_timeout_ms: am().int().min(0).max(6e4), scoped_reserved_slots: am().int().min(0).max(8), path_sync_request_poll_ms: am().int().min(0).max(6e4), path_sync_request_wait_poll_ms: am().int().min(1).max(6e4), exclusive_mutation_claim_poll_ms: am().int().min(50).max(6e4), shared_scheduler: fm().optional(), periodic_coalesce_ms: am().int().min(250).max(3e4).optional(), remote_version_enabled: fm().optional(), version_full_list_interval_ms: am().int().min(36e5).max(6048e5).optional(), version_audit_sample_rate: am().min(0).max(1).optional(), version_probe_enabled: fm().optional(), version_probe_max_entries: am().int().min(1).max(100).optional(), stale_store_root_max_idle_ms: am().int().min(0), store_root_id_fence: fm().optional(), index_closed_invalidates_session: fm().optional(), store_eviction_mode: lh(["legacy_sweep", "off", "dry_run", "quarantine", "on"]).optional(), store_eviction_quarantine_ms: am().int().min(0).optional(), store_eviction_max_roots_per_run: am().int().min(1).optional(), store_eviction_max_hash_bytes_per_run: am().int().min(1).optional(), store_eviction_mark_ttl_ms: am().int().min(1e3).max(6e5).optional(), store_eviction_min_interval_ms: am().int().min(0).optional(), tombstone_full_refresh_rounds: am().int().min(1), tombstone_full_refresh_interval_ms: am().int().min(0), tombstone_prune_slack_ms: am().int().min(0), local_stat_fast_path: lh(["off", "posix", "all"]).optional(), push_order: lh(["scan", "size_asc"]).optional(), local_stat_fast_path_audit_rate: am().min(0).max(1).optional(), local_stat_racy_margin_ms: am().int().min(0).max(6e4).optional(), harness_recovery_policy: lh(["latch", "recover"]).optional(), harness_recovery_start_jitter_ms: am().int().min(0).max(3e5).optional(), harness_recovery_probe_base_ms: am().int().min(1e3).max(36e5).optional(), harness_recovery_probe_max_ms: am().int().min(1e3).max(36e5).optional(), harness_remembered_mounts_max: am().int().min(0).max(64).optional(), mount_policy: lh(["eager", "lazy"]).nullable().optional(), surfaces: th(lp(), Lm({ sync_debounce_ms: am().int().min(250).max(36e5).optional(), idle_backoff_factor: am().min(1).max(4).optional(), sync_idle_max_ms: am().int().min(250).max(36e5).optional(), idle_quiesce_ms: am().int().min(0).max(36e5).optional(), large_target_ttl_ms: am().int().min(6e4).max(864e5).optional(), sync_backoff_base_ms: am().int().min(100).max(36e5).optional(), sync_backoff_max_ms: am().int().min(100).max(36e5).optional(), project_sync_debounce_ms: am().int().min(250).max(36e5).optional(), project_sync_idle_max_ms: am().int().min(250).max(36e5).optional(), project_sync_backoff_base_ms: am().int().min(100).max(36e5).optional(), project_sync_backoff_max_ms: am().int().min(100).max(36e5).optional(), passive_retry_interval_ms: am().int().min(0).max(36e5).optional(), passive_index_poll_interval_ms: am().int().min(0).max(36e5).optional(), project_store_poll_interval_ms: am().int().min(250).max(36e5).optional(), path_refresh_min_interval_ms: am().int().min(0).max(36e5).optional(), project_notes_poll_interval_ms: am().int().min(1e3).max(36e5).optional(), max_file_size_bytes: am().int().min(1024).max(1073741824).optional(), token_refresh_buffer_ms: am().int().min(0).max(6e5).optional(), mint_terminal_denial_cache_ms: Gm([ph(0), am().int().min(6e4).max(864e5)]).optional(), skip_denied_mount_sync: Gm([ph(0), ph(1)]).optional(), rpc_retry_max_attempts: am().int().min(1).max(10).optional(), rpc_retry_base_delay_ms: am().int().min(1).max(6e4).optional(), rpc_retry_max_delay_ms: am().int().min(1).max(3e5).optional(), rpc_retry_multiplier: am().min(1).max(10).optional(), token_refresh_jitter_ratio: Gm([ph(0), am().min(0.05).max(0.9)]).optional(), min_token_slack_ms: am().int().min(0).max(6e4).optional(), mint_retry_policy_version: Gm([ph(0), ph(1)]).optional(), mint_retry_max_attempts: am().int().min(1).max(5).optional(), mint_retry_base_delay_ms: am().int().min(1).max(1e4).optional(), mint_retry_max_delay_ms: am().int().min(1).max(6e4).optional(), mint_retry_budget_ratio: am().min(0).max(1).optional(), mint_retry_budget_floor: am().int().min(0).max(100).optional(), mint_transient_negative_cache_base_ms: am().int().min(100).max(6e5).optional(), mint_transient_negative_cache_max_ms: am().int().min(100).max(36e5).optional(), mint_gate_open_threshold: am().int().min(1).max(1e3).optional(), mint_gate_window_ms: am().int().min(1e3).max(6e5).optional(), mint_gate_open_base_ms: am().int().min(100).max(6e5).optional(), mint_gate_open_max_ms: am().int().min(100).max(36e5).optional(), rpc_timeout_ms: am().int().min(1e3).max(6e5).optional(), blob_idle_timeout_ms: Gm([ph(0), am().int().min(1e3).max(6e5)]).optional(), blob_connect_timeout_ms: Gm([ph(0), am().int().min(1e3).max(3e5)]).optional(), sync_round_timeout_ms: Gm([ph(0), am().int().min(3e4).max(36e5)]).optional(), sync_round_progress_timeout_ms: Gm([ph(0), am().int().min(3e4).max(36e5)]).optional(), sync_round_hard_cap_ms: Gm([ph(0), am().int().min(6e4).max(72e5)]).optional(), sync_round_unwind_timeout_ms: am().int().min(1e3).max(6e5).optional(), lock_release_failure_threshold: am().int().min(1).max(20).optional(), lock_release_failure_streak_threshold: am().int().min(0).max(100).optional(), lock_release_failure_streak_passive_ms: am().int().min(5e3).max(36e5).optional(), resume_gap_threshold_ms: Gm([ph(0), am().int().min(3e4).max(36e5)]).optional(), resume_detection_mode: lh(["mono_gap", "timer_lateness"]).optional(), dirty_passive_stalled_threshold_ms: Gm([ph(0), am().int().min(3e4).max(36e5)]).optional(), s3_concurrency: am().int().min(1).max(64).optional(), list_concurrency: am().int().min(1).max(64).optional(), list_walk_concurrency: am().int().min(1).max(64).optional(), hash_concurrency: am().int().min(1).max(64).optional(), presign_concurrency: am().int().min(1).max(64).optional(), multipart_upload_threshold_bytes: am().int().min(5242880).max(1073741824).optional(), multipart_part_size_bytes: am().int().min(5242880).max(536870912).optional(), multipart_presign_window_size: am().int().min(1).max(32).optional(), pull_presign_window_size: am().int().min(1).max(1e3).optional(), multipart_complete_max_attempts: am().int().min(1).max(5).optional(), multipart_max_restarts: am().int().min(0).max(2).optional(), multipart_max_conflict_renames: am().int().min(0).max(2).optional(), multipart_max_expiry_refreshes: am().int().min(0).max(3).optional(), write_barrier_timeout_ms: am().int().min(0).max(6e4).optional(), scoped_reserved_slots: am().int().min(0).max(8).optional(), path_sync_request_poll_ms: am().int().min(0).max(6e4).optional(), path_sync_request_wait_poll_ms: am().int().min(1).max(6e4).optional(), exclusive_mutation_claim_poll_ms: am().int().min(50).max(6e4).optional(), shared_scheduler: fm().optional(), periodic_coalesce_ms: am().int().min(250).max(3e4).optional(), remote_version_enabled: fm().optional(), version_full_list_interval_ms: am().int().min(36e5).max(6048e5).optional(), version_audit_sample_rate: am().min(0).max(1).optional(), version_probe_enabled: fm().optional(), version_probe_max_entries: am().int().min(1).max(100).optional(), stale_store_root_max_idle_ms: am().int().min(0).optional(), store_root_id_fence: fm().optional(), index_closed_invalidates_session: fm().optional(), store_eviction_mode: lh(["legacy_sweep", "off", "dry_run", "quarantine", "on"]).optional(), store_eviction_quarantine_ms: am().int().min(0).optional(), store_eviction_max_roots_per_run: am().int().min(1).optional(), store_eviction_max_hash_bytes_per_run: am().int().min(1).optional(), store_eviction_mark_ttl_ms: am().int().min(1e3).max(6e5).optional(), store_eviction_min_interval_ms: am().int().min(0).optional(), tombstone_full_refresh_rounds: am().int().min(1).optional(), tombstone_full_refresh_interval_ms: am().int().min(0).optional(), tombstone_prune_slack_ms: am().int().min(0).optional(), local_stat_fast_path: lh(["off", "posix", "all"]).optional(), push_order: lh(["scan", "size_asc"]).optional(), local_stat_fast_path_audit_rate: am().min(0).max(1).optional(), local_stat_racy_margin_ms: am().int().min(0).max(6e4).optional(), harness_recovery_policy: lh(["latch", "recover"]).optional(), harness_recovery_start_jitter_ms: am().int().min(0).max(3e5).optional(), harness_recovery_probe_base_ms: am().int().min(1e3).max(36e5).optional(), harness_recovery_probe_max_ms: am().int().min(1e3).max(36e5).optional(), harness_remembered_mounts_max: am().int().min(0).max(64).optional(), mount_policy: lh(["eager", "lazy"]).nullable().optional() }).strict()).default({}) }).strict(), Lm({ mint_refresh_slack_ms: am().int().min(0).max(6e5), mint_failure_base_ms: am().int().min(100).max(6e4), mint_failure_max_ms: am().int().min(1e3).max(6e5), mint_failure_jitter: am().min(0).max(0.5), mint_cache_max_conversations: am().int().min(16).max(4096) }), Lm({ maxBytes: am().int().positive(), inlineMaxBytes: am().int().positive(), signedUrlMaxBytes: am().int().positive(), cloudMaxVideoAttachmentsPerRequest: am().int().nonnegative(), cloudMaxDocumentAttachmentsPerRequest: am().int().nonnegative(), localMaxVideoAttachmentsPerRequest: am().int().positive(), localMaxTotalInlineVideoBytesPerRequest: am().int().positive() }), Lm({ limit: am() }), Lm({ modelSlug: lp(), modelIdWithParams: Lm({ modelId: lp(), params: Nm(Lm({ id: lp(), value: lp() })) }) }), Lm({ proceed_instructions: lp(), mark_fixed_instructions: lp() }), Lm({ maxChatsToRead: am(), maxProjectsToGroup: am(), model: lp(), promptTemplate: lp(), secondStepPromptTemplate: lp() }), Lm({ defaultUrl: lp() }), Lm({ agentTabSelectionTTL: am() }), Lm({ showDraftsInSidebar: fm() }), Lm({ pillLabel: lp().min(1).max(80), tooltip: lp().min(1).max(240), dropdownAriaLabel: lp().min(1).max(120), cloudOptionLabel: lp().min(1).max(80), localOptionLabel: lp().min(1).max(80), fixCiPillSingleLabel: lp().min(1).max(80), fixCiPillPluralLabelTemplate: lp().min(1).max(120), fixCiPillLoadingLabel: lp().min(1).max(80), fixCiPillLoadingProgressLabel: lp().min(1).max(80), fsdFixCiPillSingleLabel: lp().min(1).max(80), fsdFixCiPillPluralLabelTemplate: lp().min(1).max(120), fsdFixCiPillLoadingLabel: lp().min(1).max(80), fsdFixCiPillLoadingProgressLabel: lp().min(1).max(80) }), Lm({ title: lp().min(1).max(120), description: lp().min(1).max(240), downloadCtaLabel: lp().min(1).max(40), downloadUrl: lp().url(), openCtaLabel: lp().min(1).max(40), openUrl: lp().min(1).max(2048) }), Lm({ promptTemplate: lp() }), Lm({ max_loaded_agents: am().int().min(2).max(10) }), Lm({ enabled: fm(), keep_recent_hidden: am().int().min(0) }), Lm({ code_gate_bytes: am().int().min(153600).max(52428800) }), Lm({ enabled: fm(), sweep_interval_ms: am().int().positive(), retained_after_close_threshold_ms: am().int().positive() }), Lm({ prChecksPollIntervalMs: am().int().positive(), prChecksPollMaxBackoffMs: am().int().positive(), prChecksErrorBackoffMultiplier: am().min(1).max(4), prChecksCacheTtlSeconds: am().int().positive(), scmPrMetadataCacheTtlSeconds: am().int().positive(), scmPrDetailedStatusCacheTtlSeconds: am().int().positive(), scmPrForBranchCacheTtlWhenPrsSeconds: am().int().positive(), scmPrForBranchCacheTtlWhenEmptySeconds: am().int().positive(), scmPrCodeownersCacheTtlSeconds: am().int().positive(), scmPrCommitsCacheTtlSeconds: am().int().positive(), scmPrTimelineEventsCacheTtlSeconds: am().int().positive(), scmPrDiscussionsCacheTtlSeconds: am().int().positive(), scmPrCheckLogExcerptOkTtlSeconds: am().int().positive(), scmPrCheckLogExcerptNegativeTtlSeconds: am().int().positive(), detailedPrStatusChecksScopedAuthBreakerTtlSeconds: am().int().positive(), scmGitlabEmojiReactionCacheTtlSeconds: am().int().positive(), localAgentPrHeaderBatchPollIntervalMs: am().int().positive(), localAgentPrStatePollIntervalMs: am().int().positive(), localAgentPrBurstBumpOffsetsMs: Nm(am().int().nonnegative()), cloudAgentPrStatePollIntervalMs: am().int().positive(), cloudAgentPrBurstBumpOffsetsMs: Nm(am().int().nonnegative()), cloudAgentPrStatePollMaxBackoffMs: am().int().positive(), cloudAgentPrErrorBackoffMultiplier: am().min(1).max(4) }), Lm({ enabled: fm(), rehydrateAfterMs: am().int().nonnegative() }), Lm({ maxTurns: am().int().positive().nullish() }), Lm({ readFilesToolMaxFileSizeInBytes: am(), editFileToolMaxFileSizeInChars: am(), fileSearchToolMaxResults: am(), listDirV2ClientSideCharacterBudget: am(), readFileV2ToolMaxFileSizeInBytes: am(), composerDiffMaxComputationTimeMs: am() }), Lm({ min_hours_between_prompts: am(), max_prompts_per_version: am(), max_prompts_per_day: am(), snooze_duration_hours: am() }), Lm({ releaseTrack: lp(), statsigUrl: lp(), unlockInternalTracks: fm() }), Lm({ releaseTrack: lp(), unlockInternalTracks: fm() }), Lm({ policy: lh(["all", "team_only", "none"]) }), Lm({ enabled: fm(), include_credits: fm() }), Lm({ channel: lp(), watchIntervalMs: am().min(6e5).max(6048e5).nullable() }), Lm({ sentry_threshold_bytes: am(), attach_content: fm() }), Lm({ allocation_threshold_bytes: am(), blob_url_threshold_bytes: am(), retention_age_ms: am(), sweep_interval_ms: am() }), Lm({ sentry_threshold_bytes: am() }), Lm({ sentry_threshold_bytes: am() }), Lm({ metadata_timeout_ms: am(), lifecycle_timeout_ms: am(), dashboard_timeout_ms: am(), recovery_per_retry_timeout_ms: am() }), Lm({ replays_session_sample_rate: am().min(0).max(1) }), Lm({ extensionIds: Nm(lp()), remoteVerificationMinVersion: lp() }), Lm({ autoTitle: lp(), autoDescription: lp(), apiTitle: lp(), apiDescription: lp(), autoBeyondLimitDescription: lp(), autoUsageBarLabel: lp(), apiUsageBarLabel: lp() }), Lm({ enabled: fm(), tagLabel: lp(), yellowTooltip: lp(), redTooltip: lp(), yellowTitle: lp(), redTitle: lp(), noteSubtitle: lp(), notePlaceholder: lp() }), Lm({ enabled: fm(), title: lp(), description: lp() }), Lm({ flush_delay_ms: am().int().positive() }), Lm({ window_ms: am().int().positive(), min_events: am().int().positive(), report_throttle_ms: am().int().positive(), top_buckets: am().int().positive() }), Lm({ enabled_platforms: Nm(lp()), safety_poll_interval_ms: am().int().positive(), inactivity_timeout_ms: am().int().positive(), max_consecutive_failures: am().int().positive(), reconnect_base_delay_ms: am().int().positive(), reconnect_max_delay_ms: am().int().positive(), reconcile_delay_ms: am().int().positive(), use_list_page_tokens: fm(), split_project_list: fm(), exclude_archived_default: fm(), projects_only_owner_lookup: fm(), projects_only_owner_lookup_max_projects: am().int().nonnegative(), membership_poll_interval_ms: am().int().nonnegative(), membership_safety_poll_interval_ms: am().int().nonnegative() }), Lm({ dummy: am() }), Lm({ heap_percent: am() }), Lm({ total_cpu_percent: am(), process_cpu_percent: am(), sustained_seconds: am(), check_interval_seconds: am(), cooldown_seconds: am(), include_system_processes: fm() }), Lm({ trigger_heap_percent: am(), duration_seconds: am(), sampling_interval_bytes: am(), cooldown_seconds: am() }), Lm({ enabled: fm(), metrics_interval_seconds: am().positive(), sample_interval_minutes: am().positive() }), Lm({ base_threshold_mb: am().positive(), critical_offset_mb: am().positive(), show_status_entry: fm(), show_internal_warning_popup: fm(), show_user_toast: fm(), user_toast_heap_percent: am().min(1).max(100), emit_heap_usage_metric: fm(), emergency_profiling_enabled: fm(), emergency_profiling_trigger_heap_percent: am().min(1).max(100), emergency_profiling_duration_seconds: am().positive(), emergency_profiling_sampling_interval_bytes: am().positive(), emergency_profiling_cooldown_seconds: am().positive() }), Lm({ clientId: lp() }), Lm({ clientId: lp() }), Lm({ byJobRole: th(lp().max(100), Nm(Lm({ pluginName: lp().min(1).max(100), title: lp().min(1), description: lp().min(1), prompt: lp().min(1).max(9979) }))), recommendedPluginNamesByJobRole: th(lp().max(100), Nm(lp().min(1).max(100)).max(4)) }), Lm({ enabled: fm(), reportIntervalMs: am() }), Lm({ enabled: fm(), sessionSampleRate: am().min(0).max(1) }), Lm({ enabled: fm(), sampleRate: am(), maxEventsPerFlush: am(), reportIntervalMs: am(), deepProbe: fm(), deepProbeSampleRate: am(), deepProbeMaxBytes: am(), stackAttribution: fm(), stackCreationSampleRate: am(), stackRedundantThreshold: am(), maxTrackedCreationStacks: am(), maxStackReportsPerSession: am(), maxStackBytes: am() }), Lm({ enabled: fm(), sampleRate: am(), observerThreshold: am(), maxTrackedSources: am(), maxReportsPerSession: am(), maxStackBytes: am(), totalObserverThreshold: am(), totalTriggeredSourceFloor: am(), totalTriggeredMaxReports: am() }), Lm({ skillDescription: lp(), errorFixPromptTemplate: lp(), welcomePageEnabled: fm(), marketplaceCategoryKey: lp(), marketplaceMaxCards: am().int().positive() }), Lm({ byJobRole: yf }).strict(), Lm({ per_joiner_warn_ms: am().int().nonnegative(), fire_on_will_shutdown_total_ms: am().int().nonnegative(), process_exit_total_ms: am().int().nonnegative() }), Lm({ enabled: fm(), restart_time_threshold_seconds: am().nonnegative(), attach_ship_it_log: fm(), max_attachment_bytes: am().int().nonnegative() }), Lm({ enabled: fm(), timer_name: lh(["ellapsedLoadMainBundle", "ellapsedRunMainBundle", "ellapsedAppReady", "ellapsedExtensions", "ellapsedExtensionsReady", "ellapsedWindowLoad", "ellapsedRequire", "ellapsedEditorRestore", "ellapsedWorkbench", "ellapsedPreWorkbenchServices"]), threshold_ms: am().nonnegative() }), Lm({ enabled: fm(), ping_interval_ms: am().int().positive(), block_threshold_ms: am().int().positive(), collect_stack_traces: fm(), report_rpc_drain: fm().optional() }), Lm({ enabled: fm(), flush_threshold_ms: am().int().positive(), anchor_interval_ms: am().int().positive(), anchor_lag_ms: am().int().positive(), cooldown_ms: am().int().positive(), session_cap: am().int().positive() }), Lm({ enabled: fm(), sample_rate: am().min(0).max(1), window_duration_ms: am().int().positive() }), Lm({ enabled: fm(), sample_rate: am().min(0).max(1), time_limit_ms: am().int().positive().optional() }), Lm({ window_ms: am().int().positive(), threshold: am().int().positive(), max_records: am().int().positive(), cooldown_ms: am().int().nonnegative(), report_to_sentry: fm(), report_initialize_caches: fm() }), Lm({ window_ms: am().int().positive(), min_samples: am().int().positive(), fallback_ratio_threshold: am().min(0).max(1), cooldown_ms: am().int().nonnegative(), report_to_sentry: fm() }), Lm({ max_in_memory_documents: am().int().positive().nullish() }), Lm({ enabled: fm(), max_reply_bytes: am().int().positive() }), Lm({ enabled: fm(), threshold_ms: am().int().positive(), commit_attribution: fm().nullish() }), Lm({ enabled: fm(), min_fps: am().int().positive(), max_drops_per_interval: am().int().nonnegative(), interval_sec: am().int().positive(), baseline_interval_sec: am().int().positive().nullish(), baseline_sample_rate: am().min(0).max(1).nullish() }), Lm({ mode: lh(["off", "signup_link", "create_and_link"]) }), $m({ sidecarManifestUrl: Gm([ph(""), lp().regex(/^https:\/\/downloads\.cursor\.com\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}\.json$/)]) }), $m({ x64: Gm([ph(""), lp().regex(/^https:\/\/downloads\.cursor\.com\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}-win32-x64\.json$/)]), arm64: Gm([ph(""), lp().regex(/^https:\/\/downloads\.cursor\.com\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}-win32-arm64\.json$/)]) }), $m({ darwin: Gm([lp(), $m({ companion: lp(), remote: lp() })]), win32: lp() }), Lm({ enrolled: fm(), enableUI: fm(), orgs: Nm(lp()).min(1) }), { cursor_private_inference_hard_stop: { client: true, fallbackValues: { enabled: false, instructionsUrl: null } }, mobile_iap_products: { client: true, fallbackValues: { products: { "co.anysphere.cursor.pro.monthly": "pro", "co.anysphere.cursor.proplus.monthly": "pro_plus", "co.anysphere.cursor.ultra.monthly": "ultra", "co.anysphere.sand.pro.monthly": "pro", "co.anysphere.sand.proplus.monthly": "pro_plus", "co.anysphere.sand.ultra.monthly": "ultra" } } }, codebase_protection_reporting_config: { client: true, fallbackValues: { report_interval_ms: 18e5, jitter_fraction: 0.2 } }, agent_host_bridge_wait: { client: true, fallbackValues: { initial_timeout_ms: 3e4, retry_timeout_ms: 5e3, max_attempts: 9 } }, agent_host_updater_timing: { client: true, fallbackValues: { pollIntervalMs: null, requestIdleTimeoutMs: null } }, composer_request_context_deadline: { client: true, fallbackValues: { deadline_ms: 1500, max_stale_age_ms: 6e5 } }, sand_working_state_warming_config: { client: true, fallbackValues: { maxClosureBytes: 1073741824, maxClosureBlobs: 5e4, putConcurrency: 16, parallelListing: false, migrationAgentConcurrency: 8, migrationReadBatchBlobs: 32, migrationPutConcurrency: 8, migrationCopyConcurrency: 8, migrationExportCommandTimeoutMs: 15e4, migrationHostWindowMs: 6e5, migrationExportActivityTimeoutMs: 9e5 } }, grok_bot_temporal_harness_rollout: { client: true, fallbackValues: { control: "legacy_gates", mode: "shadow", autoReviewEnforce: false } }, grok_bot_loop_detection: { client: true, fallbackValues: { mode: "off" } }, grok_bot_external_send_labeling_config: { client: true, fallbackValues: { sampleRate: 0, connectors: [{ name: "slack", hosts: ["mcp.slack.com"], sendTools: ["slack_send_message", "slack_schedule_message"] }, { name: "gmail", hosts: ["gmailmcp.googleapis.com", "api.cursor.com"], sendTools: ["send_message", "reply", "forward", "send_email", "send_draft"] }, { name: "outlook", hosts: ["api.cursor.com/rest-mcp/outlook"], sendTools: ["send_mail", "reply_to_mail_message", "forward_mail_message", "send_draft"] }, { name: "google_calendar", hosts: ["calendarmcp.googleapis.com", "api.cursor.com"], sendTools: ["create_event", "update_event"], participants: { args: ["attendees", "attendeeEmails", "addedAttendees", "addedAttendeeEmails", "addAttendees"], ownerArgs: ["calendarId"] } }, { name: "outlook_calendar", hosts: ["api.cursor.com"], sendTools: ["create_calendar_event", "update_calendar_event"], participants: { args: ["attendees"] } }, { name: "google_drive_share", hosts: ["drivemcp.googleapis.com", "api.cursor.com"], sendTools: ["share_file", "google_drive_share_file"] }, { name: "teams", hosts: ["api.cursor.com"], sendTools: ["send_chat_message", "send_channel_message", "reply_to_channel_message"] }], firstPartySendTools: [{ name: "phone_call", toolName: "place_phone_call" }, { name: "imessage", toolName: "SendIMessage" }] } }, grok_bot_system_prompt_override: { client: true, fallbackValues: { basePrompt: "" } }, remote_workspace_readiness_config: { client: true, fallbackValues: { healthcheck_timeout_ms: 3e3, remote_extension_host_startup_grace_ms: 3e3 } }, ai_code_tracking_poll: { client: true, fallbackValues: { interval_ms: 6e5 } }, solidjs_stack_trace_limit: { client: true, fallbackValues: { stackTraceLimitFloor: 0 } }, glass_remote_connection_dormancy_config: { client: true, fallbackValues: { windowIdleMinutesToSuspend: 20, hiddenAgentMinutesToSuspend: 0, suspendWhileWindowFocused: false, maxDormantQueuedMessages: 1e3, maxDormantQueuedBytes: 4194304, hardMaxDormantQueuedMessages: 2e4, hardMaxDormantQueuedBytes: 67108864 } }, idle_extension_host_killer_config: { client: true, fallbackValues: { idleMinutesToKillExtensionHost: 0, freeMemoryPercentageToKillExtensionHost: 0, killUserExtensionHost: false } }, marketplace_listing_config: { client: true, fallbackValues: { rpcTimeoutMs: 15e3 } }, editor_bugbot_config: { client: true, fallbackValues: { model: "claude-4-5-sonnet-20250929", iterations: 0, agentic_iterations: 1, agentic_model: "claude-4.5-haiku", deep_review_model: "", context_lines: 10 } }, client_speculative_summarization_config: { client: true, fallbackValues: { tokenUsageThresholdPercentage: 70, tolerancePercentage: 5, inflightMaxAgeMinutes: 5, speculativeStreamTimeoutMinutes: 5 } }, rate_limited_reconnect_message_config: { client: true, fallbackValues: { message: "Rate limited by model provider, retrying…" } }, new_conversation_ux_config: { client: true, fallbackValues: { enable: true, enabled_models: [], force_enable_on_all_models: true, group_text: true, group_thinking: true, group_todos: true, group_edits: false, smooth_stream_enable: false, grouped_text_max_length: 100, grouped_text_max_length_composer_family: 88, tool_summary_mode: "single_word", nest_tool_blocks: false } }, meta_agent_config: { client: true, fallbackValues: { meta_parent_model: "claude-4.6-opus-high-fast", allow_subagent_followups: true, enable_notes: false } }, task_card_tips: { client: true, fallbackValues: { startup_tips: [{ id: "cloud-subagents", text: "Use /in-cloud for cloud subagents" }] } }, product_tips_config: { client: true, fallbackValues: { tips: [], config: { intervalMs: 8e3, minClientVersion: "" } } }, composer_sandboxing_promo: { client: true, fallbackValues: { version: 0 } }, playwright_log_configs: { client: true, fallbackValues: { logSizeThreshold: 25e3, logPreviewLines: 25, logPreviewChars: 25e3 } }, privacy_mode_acknowledgement_onboarding: { client: true, fallbackValues: { mode: "on" } }, tools_concurrency_config: { client: true, fallbackValues: { tools: { RIPGREP_RAW_SEARCH: { ttl: 1e4, maxConcurrent: 5 }, RIPGREP_SEARCH: { ttl: 1e4, maxConcurrent: 5 } }, defaultTtl: 1e4, defaultMaxConcurrent: 999999 } }, client_rg: { client: true, fallbackValues: { num_threads: 4, fallback_num_threads: 4, use_batch_executor: false, batch_executor_wait_ms: 50 } }, http2_ping_config: { client: true, fallbackValues: { enabled: [], pingIdleConnection: null, pingIntervalMs: null, pingTimeoutMs: null, idleConnectionTimeoutMs: null } }, http2_agent_connection_pool_config: { client: true, fallbackValues: { poolSize: 4 } }, http1_keepalive_config: { client: true, fallbackValues: { keepAliveInitialDelayMs: null } }, nal_websocket_client_pool: { client: true, fallbackValues: { maxConnections: 1 } }, ws_dark_durability_probe_config: { client: true, fallbackValues: { idleHoldMs: 3e4, echoTimeoutMs: 5e3, concurrency: 4 } }, abort_controller_logging_config: { client: true, fallbackValues: { sampling_rate: 1 } }, hooks_client_config: { client: true, fallbackValues: { hooks_ready_timeout_ms: 2e3 } }, composer_hang_detection_config: { client: true, fallbackValues: { thresholds_ms: [2e3, 4e3, 6e3, 8e3, 1e4, 12e3, 14e3, 16e3, 32e3] } }, composer_errors_without_button_support: { client: true, fallbackValues: { error_type_denylist: [] } }, nal_stall_detector_timeout_config: { client: true, fallbackValues: { advisoryTimeoutMs: 2e4, failTimeoutMs: 3e4 } }, nal_request_context_blob_transport_config: { client: true, fallbackValues: { mode: "legacy", max_blob_bytes: 15728640, max_inline_dynamic_bytes: 1048576 } }, simulated_thinking_error_timeout: { client: true, fallbackValues: { timeout_ms: 15e3 } }, agent_loop_phase_display: { client: true, fallbackValues: { enabled: false, min_display_threshold_ms: 0 } }, in_app_ads_dev_override_config: { client: true, fallbackValues: { ad_id_to_show: "" } }, in_app_ads_quiet_period_config: { client: true, fallbackValues: { quiet_period_ms: 6e5, first_launch_quiet_period_ms: 864e5 } }, environment_setup_resume_config: { client: true, fallbackValues: { max_resume_age_ms: _o.Er } }, perf_monitor_control: { client: true, fallbackValues: { enabled: false, subsample_polling_rate_sec: 0, sample_polling_rate_min: 0 } }, glass_reactivated_user_routing_config: { client: true, fallbackValues: { user_routing_enabled: false, inactive_days: 7, ch_timeout_ms: 500, ch_cache_ttl_seconds: 86400, local_routing_enabled: true } }, retry_interceptor_config: { client: true, fallbackValues: { retriableErrors: [{ code: "Unavailable" }, { code: "Internal" }, { code: "DeadlineExceeded" }] } }, retry_interceptor_params_config: { client: true, fallbackValues: { maxRetries: null, baseDelayMs: null, maxDelayMs: null } }, text_delta_pacing_config: { client: true, fallbackValues: { targetCharsPerFrame: 0, maxLagFrames: 8, barrierMaxWaitMs: 0 } }, extension_monitor_control: { client: true, fallbackValues: { local_enabled: false, backend_reporting_enabled: false, network_diagnostics_reporting_enabled: false, subsample_polling_rate_sec: 0, sample_polling_rate_min: 0 } }, agent_memory_pressure_monitor: { client: true, fallbackValues: { monitor_enabled: false, low_memory_sustained_sec: 30, min_agent_process_age_sec: 0, low_memory_available_pct: 10, low_memory_available_abs_gb: 3, cpu_high_pct: 90, cpu_high_sustained_sec: 30, min_reported_cpu_pct: 5 } }, sand_process_metrics: { client: true, fallbackValues: { local_enabled: false, backend_reporting_enabled: false, subsample_polling_rate_sec: 0, sample_polling_rate_min: 0 } }, sand_rpc_tracing: { client: true, fallbackValues: { enabled: false, sample_ratio: 0.01 } }, gc_trace_control: { client: true, fallbackValues: { enabled: false, drain_interval_sec: 120 } }, disable_infinite_cloud_agent_stream_retries: { client: true, fallbackValues: { enabled: false } }, cloud_agent_shared_blob_cache: { client: true, fallbackValues: { max_bytes: 134217728 } }, local_subagent_limits: { client: true, fallbackValues: { maxRunning: 32 } }, sand_min_client_version: { client: true, fallbackValues: { min_version: "", backend_min_version: "", novnc_port_token_min_version: "", hosted_mcp_oauth_callback_min_version: "", max_age_days: 14 } }, sand_mobile_version_support: { client: true, fallbackValues: { min_recommended_build: 0, min_allowed_build: 0, update_url: "" } }, sand_computer_use_playwright_config: { client: true, fallbackValues: { modelId: "sand-cua", maxMode: false, parameters: [] } }, grok_bot_conversation_size_limits: { client: true, fallbackValues: { soft_limit_mb: 256, hard_limit_mb: 1024 } }, sand_share_bot_export_policy: { client: true, fallbackValues: { policy: "team_only" } }, sand_usage_breakdown: { client: true, fallbackValues: { enabled: false, include_credits: false } }, sand_default_model: { client: true, fallbackValues: { modelId: "default", maxMode: false, parameters: [] } }, sand_automations_model: { client: true, fallbackValues: { modelId: "default", maxMode: false, parameters: [] } }, sand_feedback_prompt_config: { client: true, fallbackValues: { enabled: false, sample_rate_denominator: 100, cooldown_seconds: 172800, signup_grace_seconds: 7200 } }, agent_store_sync_client_config: { client: true, fallbackValues: { sync_debounce_ms: 5e3, idle_backoff_factor: 1, sync_idle_max_ms: 5e3, idle_quiesce_ms: 0, large_target_ttl_ms: 18e5, sync_backoff_base_ms: 5e3, sync_backoff_max_ms: 6e4, project_sync_debounce_ms: 5e3, project_sync_idle_max_ms: 5e3, project_sync_backoff_base_ms: 5e3, project_sync_backoff_max_ms: 6e4, passive_retry_interval_ms: 5e3, passive_index_poll_interval_ms: 2e3, project_store_poll_interval_ms: 4e3, path_refresh_min_interval_ms: 1e3, project_notes_poll_interval_ms: 5e3, max_file_size_bytes: Ao.EO, token_refresh_buffer_ms: 6e4, mint_terminal_denial_cache_ms: 18e5, skip_denied_mount_sync: 0, rpc_retry_max_attempts: 3, rpc_retry_base_delay_ms: 250, rpc_retry_max_delay_ms: 5e3, rpc_retry_multiplier: 2, token_refresh_jitter_ratio: 0.5, min_token_slack_ms: 5e3, mint_retry_policy_version: 1, mint_retry_max_attempts: 2, mint_retry_base_delay_ms: 250, mint_retry_max_delay_ms: 2e3, mint_retry_budget_ratio: 0.1, mint_retry_budget_floor: 3, mint_transient_negative_cache_base_ms: 5e3, mint_transient_negative_cache_max_ms: 12e4, mint_gate_open_threshold: 5, mint_gate_window_ms: 3e4, mint_gate_open_base_ms: 5e3, mint_gate_open_max_ms: 12e4, rpc_timeout_ms: 6e4, blob_idle_timeout_ms: 6e4, blob_connect_timeout_ms: 0, sync_round_timeout_ms: 3e5, sync_round_progress_timeout_ms: 0, sync_round_hard_cap_ms: 0, sync_round_unwind_timeout_ms: 3e4, lock_release_failure_threshold: 3, lock_release_failure_streak_threshold: 0, lock_release_failure_streak_passive_ms: 3e5, resume_gap_threshold_ms: 12e4, resume_detection_mode: "mono_gap", dirty_passive_stalled_threshold_ms: 12e4, s3_concurrency: 8, list_concurrency: 4, list_walk_concurrency: 4, hash_concurrency: 4, presign_concurrency: 4, multipart_upload_threshold_bytes: 67108864, multipart_part_size_bytes: 16777216, multipart_presign_window_size: 8, pull_presign_window_size: 500, multipart_complete_max_attempts: 3, multipart_max_restarts: 1, multipart_max_conflict_renames: 1, multipart_max_expiry_refreshes: 1, write_barrier_timeout_ms: 2e3, scoped_reserved_slots: 1, path_sync_request_poll_ms: 250, path_sync_request_wait_poll_ms: 50, exclusive_mutation_claim_poll_ms: 250, shared_scheduler: false, periodic_coalesce_ms: 2e3, remote_version_enabled: false, version_full_list_interval_ms: 864e5, version_audit_sample_rate: 0, version_probe_enabled: false, version_probe_max_entries: 50, stale_store_root_max_idle_ms: 6048e5, store_root_id_fence: false, index_closed_invalidates_session: false, store_eviction_mode: "legacy_sweep", store_eviction_quarantine_ms: 864e5, store_eviction_max_roots_per_run: 4, store_eviction_max_hash_bytes_per_run: 268435456, store_eviction_mark_ttl_ms: 6e5, store_eviction_min_interval_ms: 216e5, tombstone_full_refresh_rounds: 2880, tombstone_full_refresh_interval_ms: 864e5, tombstone_prune_slack_ms: 2592e5, local_stat_fast_path: "off", push_order: "scan", local_stat_fast_path_audit_rate: 1, local_stat_racy_margin_ms: 2e3, harness_recovery_policy: "recover", harness_recovery_start_jitter_ms: 3e4, harness_recovery_probe_base_ms: 3e5, harness_recovery_probe_max_ms: 36e5, harness_remembered_mounts_max: 16, mount_policy: null, surfaces: {} } }, local_subscription_mint_cache_config: { client: true, fallbackValues: { mint_refresh_slack_ms: 6e4, mint_failure_base_ms: 5e3, mint_failure_max_ms: 12e4, mint_failure_jitter: 0.2, mint_cache_max_conversations: 256 } }, gemini_video_attachment_config: { client: true, fallbackValues: { maxBytes: 31457280, inlineMaxBytes: 15728640, signedUrlMaxBytes: 15728640, cloudMaxVideoAttachmentsPerRequest: 5, cloudMaxDocumentAttachmentsPerRequest: 5, localMaxVideoAttachmentsPerRequest: 5, localMaxTotalInlineVideoBytesPerRequest: 36700160 } }, agent_layout_migration: { client: true, fallbackValues: { showSettings: false, keepIsland: false, sidebarLocation: "noop" } }, default_diff_mode: { client: true, fallbackValues: { default_diff_mode: "diffs" } }, switch_mode_tool_config: { client: true, fallbackValues: { enabledForNal: false, enabledForOal: false, fromModes: [], targetModes: [] } }, mcp_auth_status_copy_config: { client: true, fallbackValues: { authToolDescription: "Authenticate this MCP server so its tools can be used. Call this tool through your MCP tool-calling interface when STATUS.md indicates this server needs authentication.", errorStatusMessage: "The MCP server errored. If this server is important for completing the task, concisely inform the user and ask them to check the MCP status in Cursor's Customize page > MCPs; otherwise continue with a different approach.", needsAuthStatusMessageWithAuthTool: 'The MCP server needs authentication. Authenticate it by calling the `{authToolName}` tool for server "{serverIdentifier}" through your MCP tool-calling interface using an empty arguments object. If this server is important for completing the task, authenticate it first; otherwise continue with a different approach.' } }, mcp_reconnect_config: { client: true, fallbackValues: { fastRetryBaseDelayMs: 5e3, fastRetryMaxDelayMs: 6e4, fastRetryMaxAttempts: 5, periodicRetryBaseDelayMs: 3e5, periodicRetryMaxDelayMs: 18e5, maxPeriodicCycles: null, focusRetryCooldownMs: 3e5, inlineReconnectCooldownMs: 3e5, oauthBackendRefreshHydrationPollIntervalMs: 500, streamableHttpSession404TombstoneThreshold: 5, healthProbeTimeoutMs: 1e4, toolCallBoundedTimeoutEnabled: true, toolCallIdleTimeoutMs: 12e4, toolCallMaxTotalTimeoutMs: 36e5, degradedProbeDelayMs: 3e4, maxDegradedProbeFailures: 3, keepaliveProbeDelayMs: 3e5, keepaliveJitterMs: 3e4, stabilityThresholdMs: 3e4, stdioConnectFailuresAreNonRetryable: true, retryNonRetryableOnWake: false, nonRetryableWakeRetryCooldownMs: 3e5, retryNonRetryableAutomatically: false, networkResumeReconnectEnabled: false, networkResumeReconnectDebounceMs: 5e3, overrides: null } }, mcp_oauth_sweep_config: { client: true, fallbackValues: { oauthAttemptTtlMs: 36e5, refreshLockTtlMs: null, refreshLockMaxHoldMs: 12e4, registrationLockTtlMs: null } }, mcp_oauth_refresh_policy: { client: true, fallbackValues: { classifyBeforeWipe: false } }, mcp_oauth_loopback_redirect: { client: true, fallbackValues: { enabled: true, denylist: [], ipv4Hosts: [] } }, mcp_oauth_backend_redis_lock_config: { client: true, fallbackValues: { operations: ["refresh"], executorKinds: ["backendHttpMcp", "cloudAgent", "agentHost"], providerAllowlist: [], fallbackMode: "fail_open", refreshLockTtlMs: 3e4, registrationLockTtlMs: 3e4, waitPollIntervalMs: 250, waitJitterMs: 100, maxWaitMs: 3e4 } }, sand_pressure_cpu_profiler_config: { client: true, fallbackValues: { sustainedPressureWindowMs: 15e4, profileDurationMs: 15e3, minIntervalMs: 216e5, maxRetainedProfiles: 3 } }, sand_stream_deadline_config: { client: true, fallbackValues: { firstTokenDeadlineMs: 15e4, idleDeadlineMs: 9e4 } }, inline_diff_performance_config: { client: true, fallbackValues: { maxDecorations: 100 } }, tray_refresh_config: { client: true, fallbackValues: { enableMainProcessCloudRefresh: false, activeIntervalMs: 15e3, idleIntervalMs: 6e4, emptyIntervalMs: 3e5, engagementThrottleMs: 5e3, menuCap: 25, enablePoll: true, enableEngagement: true, enablePower: true } }, performance_events_config: { client: true, fallbackValues: { enabled: false, flushIntervalMs: 3e4, sampleRate: 0, maxScriptsPerLoaf: 10, maxBatchBytes: 32768, loafThresholdMs: 1e3, maxEventsPerFlush: 20 } }, background_composer_list_limit: { client: true, fallbackValues: { limit: 32 } }, switch_to_model_slug_config: { client: true, fallbackValues: { modelSlug: "", modelIdWithParams: { modelId: "", params: [] } } }, debug_mode_ui_instructions_config: { client: true, fallbackValues: { proceed_instructions: "Issue reproduced, please proceed", mark_fixed_instructions: "The issue has been fixed. Please clean up the instrumentation." } }, user_intent_config: { client: true, fallbackValues: { maxChatsToRead: 100, maxProjectsToGroup: 5, model: "claude-4.5-opus-high-thinking", promptTemplate: `You are analyzing conversation transcripts to identify repeated user behaviors.

## Transcript Location
Transcripts are stored at: {{agentTranscriptsPath}}

## Transcript Format
Each '.txt' file is a human-readable conversation transcript with this structure:
- 'user:' sections contain user messages (often wrapped in '<user_query>' tags)
- 'assistant:' sections contain assistant responses
- '[Tool call]' blocks show which tools were invoked
- '[Tool result]' blocks show tool outputs

Files can be large. Focus on extracting the '<user_query>' sections which contain the actual user requests. Do NOT try to read the entire file contents because it will pollute your context.

## How to Read Transcripts
1. Use Glob to list files: "{{agentTranscriptsPath}}/*.txt"
2. For each file, extract just the '<user_query>' blocks - these show what users asked for
3. You can use Grep to search for '<user_query>' patterns across files

## Task
Analyze the {{maxChatsToRead}} most recent conversations (by file modification time). Be thorough and do not bias towards recency when analyzing conversations. Ignore trivial conversations and conversations where nothing concrete happened.

Your goal is to understand how the user interacts with the agent. Focus especially on the corrections that the user makes repeatedly. Focus on common terminal commands/workflows the user instructs the agent to do, changes, and other very stable patterns.

## Evidence Standards
When making claims about what the agent SHOULD or SHOULD NOT do, only cite conversations where:
- The user explicitly corrected the agent for doing something wrong
- The user undid or rejected an agent action
- The user gave an explicit instruction ('don\\'t do X', 'always do Y')

Do NOT infer 'don\\'t do X' from:
- The user asking a question about X (e.g., 'should we add tests?' does not mean 'don\\'t add tests proactively')
- The user doing X themselves (doesn't mean the agent shouldn't)
- Absence of the agent doing X

For each claim, ask: 'Is there a conversation where the user pushed back on the agent for doing this?' If not, don't include it as a guideline. For each piece of information you discern, you must cite 4 conversations. For each citation, verify that the conversation actually backs up your claim. Never include direct quotes from user messages; summarize at a high level.

These are the sections to cover. Do not overlap these with existing user and project rules; if there is overlap or conflict always go with the existing rules.

- Developer profile: How does the user interact with the agent. Focus on how much autonomy they like to give the agent vs. how much they would like to oversee the changes the agent is making. What is their workflow for getting tasks done. What kind of tasks do they often work on. Verify across many conversations, and do not extrapolate too hard.
- Frequented areas of the codebase: Parts of the codebase the user primarily works in, and what kinds of tasks correspond to each part of the codebase.
- Important terminal commands: Terminal commands/workflows the user runs repeatedly that are unique to the project/user workflow, and when they should be used. Focus on test, lint, and build commands. Do not include git commands.

Do not write any files in this step. You will be asked in a follow-up message to write the final user profile to disk.`, secondStepPromptTemplate: "Turn your analysis into a concise 'index.md' markdown file that will be shown to all agents in the future.\n\nWrite the file contents to: {{userIntentDirPath}}\n(This is a temporary file path and will be atomically moved to {{finalUserIntentDirPath}}.)\n\nRequirements:\n- Do not cite user messages or transcripts directly (no quotes)\n- Avoid overly specific task details; focus on stable patterns and preferences\n- Keep it reasonably short\n- For each guideline/claim, include 4 conversation citations and verify that each citation supports the claim" } }, browser_default_url_config: { client: true, fallbackValues: { defaultUrl: "https://cursor.com" } }, glass_per_app_tabs_config: { client: true, fallbackValues: { agentTabSelectionTTL: 3e4 } }, glass_tiling_config: { client: true, fallbackValues: { showDraftsInSidebar: false } }, glass_fsd_launch_pill_config: { client: true, fallbackValues: { pillLabel: "Autopilot PR", tooltip: "Fix CI, conflicts, and comments with full self driving", dropdownAriaLabel: "Autopilot PR runtime", cloudOptionLabel: "Run in Cloud", localOptionLabel: "Run locally in a Worktree", fixCiPillSingleLabel: "Debug CI Failure", fixCiPillPluralLabelTemplate: "Debug {count} CI Failures", fixCiPillLoadingLabel: "Debugging CI", fixCiPillLoadingProgressLabel: "Debugging CI", fsdFixCiPillSingleLabel: "Fix CI with FSD", fsdFixCiPillPluralLabelTemplate: "Fix {count} CI Failures with FSD", fsdFixCiPillLoadingLabel: "Fixing CI with FSD", fsdFixCiPillLoadingProgressLabel: "Fixing CI with FSD" } }, grok_bot_contextual_banner_copy: { client: true, fallbackValues: { title: "Grok Bot can do this for you", description: "An AI teammate that works in your tools and comes back with finished work.", downloadCtaLabel: "Download", downloadUrl: "https://cursor.com/download/bot", openCtaLabel: "Open Grok Bot", openUrl: "grokbot://" } }, glass_btw_side_question_prompt_config: { client: true, fallbackValues: { promptTemplate: ["You are answering a single ephemeral question about the user's current work. Use the provided conversation as context and respond directly in one answer. Do not ask follow-up questions, do not request mode switches, and do not mention tool limitations unless absolutely necessary.", "If the conversation does not contain enough to answer, say so briefly.", "", "{{question}}"].join("\n") } }, glass_loaded_agent_lru_cap: { client: true, fallbackValues: { max_loaded_agents: 5 } }, composer_hidden_bubble_eviction: { client: true, fallbackValues: { enabled: false, keep_recent_hidden: 1 } }, glass_large_file_gate_config: { client: true, fallbackValues: { code_gate_bytes: 10485760 } }, glass_workspace_lifecycle_metrics: { client: true, fallbackValues: { enabled: false, sweep_interval_ms: 6e4, retained_after_close_threshold_ms: 45e3 } }, glass_pr_operations_polling_config: { client: true, fallbackValues: { prChecksPollIntervalMs: 3e4, prChecksPollMaxBackoffMs: 18e4, prChecksErrorBackoffMultiplier: 1.5, prChecksCacheTtlSeconds: 900, scmPrMetadataCacheTtlSeconds: 3600, scmPrDetailedStatusCacheTtlSeconds: 60, scmPrForBranchCacheTtlWhenPrsSeconds: 60, scmPrForBranchCacheTtlWhenEmptySeconds: 10, scmPrCodeownersCacheTtlSeconds: 300, scmPrCommitsCacheTtlSeconds: 300, scmPrTimelineEventsCacheTtlSeconds: 300, scmPrDiscussionsCacheTtlSeconds: 300, scmPrCheckLogExcerptOkTtlSeconds: 120, scmPrCheckLogExcerptNegativeTtlSeconds: 30, detailedPrStatusChecksScopedAuthBreakerTtlSeconds: 900, scmGitlabEmojiReactionCacheTtlSeconds: 1800, localAgentPrHeaderBatchPollIntervalMs: 3e4, localAgentPrStatePollIntervalMs: 6e5, localAgentPrBurstBumpOffsetsMs: [3e3, 6e3, 9e3, 15e3, 2e4, 25e3, 3e4], cloudAgentPrStatePollIntervalMs: 6e4, cloudAgentPrBurstBumpOffsetsMs: [3e3, 6e3, 9e3, 15e3, 2e4, 25e3, 3e4], cloudAgentPrStatePollMaxBackoffMs: 3e5, cloudAgentPrErrorBackoffMultiplier: 1.5 } }, cloud_agent_stream_reattach: { client: true, fallbackValues: { enabled: true, rehydrateAfterMs: 12e4 } }, cloud_agent_stream_conversation_turn_window: { client: true, fallbackValues: { maxTurns: null } }, tool_limits_config: { client: true, fallbackValues: { readFilesToolMaxFileSizeInBytes: 2e6, editFileToolMaxFileSizeInChars: 15e4, fileSearchToolMaxResults: 10, listDirV2ClientSideCharacterBudget: 1e3, readFileV2ToolMaxFileSizeInBytes: 2e8, composerDiffMaxComputationTimeMs: 2e3 } }, update_prompt_config: { client: true, fallbackValues: { min_hours_between_prompts: 48, max_prompts_per_version: 3, max_prompts_per_day: 1, snooze_duration_hours: 72 } }, internal_release_track_override: { client: true, fallbackValues: { releaseTrack: "", statsigUrl: "", unlockInternalTracks: false } }, sand_internal_release_track_override: { client: true, fallbackValues: { releaseTrack: "", unlockInternalTracks: false } }, sand_host_bundle_channel: { client: true, fallbackValues: { channel: "", watchIntervalMs: null } }, giant_json_stringify_config: { client: true, fallbackValues: { sentry_threshold_bytes: 1e7, attach_content: false } }, giant_buffer_retention_config: { client: true, fallbackValues: { allocation_threshold_bytes: 33554432, blob_url_threshold_bytes: 33554432, retention_age_ms: 3e5, sweep_interval_ms: 6e4 } }, giant_json_parse_config: { client: true, fallbackValues: { sentry_threshold_bytes: 1e9 } }, giant_vsbuffer_decode_config: { client: true, fallbackValues: { sentry_threshold_bytes: 2e7 } }, mcp_ipc_timeouts: { client: true, fallbackValues: { metadata_timeout_ms: 1e4, lifecycle_timeout_ms: 1e4, dashboard_timeout_ms: 1e4, recovery_per_retry_timeout_ms: 1e4 } }, sentry_session_recording_config: { client: true, fallbackValues: { replays_session_sample_rate: 0 } }, extension_signature_verification_bypass_list: { client: true, fallbackValues: { extensionIds: ["nromanov.dotrush", "ms-python.python", "typescriptteam.native-preview", "typespec.typespec-vscode", "ms-toolsai.jupyter", "k3ndr1ckfu.tcl-language-support-for-vscode", "amiq.dvt"], remoteVerificationMinVersion: "2.25.0" } }, sandbox_default_network_allowlist: { client: true, fallbackValues: { allowlist: [] } }, auto_spillover_ui_config: { client: true, fallbackValues: So.rO }, glass_perf_vote_config: { client: true, fallbackValues: bo.Q }, portal_outage_alert: { client: true, fallbackValues: { enabled: false, title: "", description: "" } }, slack_mcp_client_id: { client: true, fallbackValues: { clientId: "3660753192626.8903469228982" } }, shopify_mcp_client_id: { client: true, fallbackValues: { clientId: "2a457b21c946d5bc8d1675d1b3b8c2d6" } }, file_watcher_metrics_config: { client: true, fallbackValues: { flush_delay_ms: 3e4 } }, file_watcher_forwarded_storm_config: { client: true, fallbackValues: { window_ms: 1e4, min_events: 2500, report_throttle_ms: 3e5, top_buckets: 8 } }, cloud_agent_list_stream_config: { client: true, fallbackValues: { enabled_platforms: [], safety_poll_interval_ms: 6e4, inactivity_timeout_ms: 45e3, max_consecutive_failures: 5, reconnect_base_delay_ms: 1e3, reconnect_max_delay_ms: 6e4, reconcile_delay_ms: 1e3, use_list_page_tokens: true, split_project_list: false, exclude_archived_default: false, projects_only_owner_lookup: false, projects_only_owner_lookup_max_projects: 5e3, membership_poll_interval_ms: 0, membership_safety_poll_interval_ms: 0 } }, statsig_dummy_gauge_config: { client: true, fallbackValues: { dummy: 0 } }, memory_monitor_user_toast_config: { client: true, fallbackValues: { heap_percent: 80 } }, cpu_monitor_config: { client: true, fallbackValues: { total_cpu_percent: 250, process_cpu_percent: 95, sustained_seconds: 60, check_interval_seconds: 15, cooldown_seconds: 1800, include_system_processes: true } }, memory_pressure_profiling_config: { client: true, fallbackValues: { trigger_heap_percent: 70, duration_seconds: 30, sampling_interval_bytes: 4096, cooldown_seconds: 300 } }, webview_inventory_config: { client: true, fallbackValues: { enabled: false, metrics_interval_seconds: 30, sample_interval_minutes: 5 } }, memory_monitor_config: { client: true, fallbackValues: { base_threshold_mb: 1536, critical_offset_mb: 512, show_status_entry: false, show_internal_warning_popup: false, show_user_toast: true, user_toast_heap_percent: 80, emit_heap_usage_metric: false, emergency_profiling_enabled: true, emergency_profiling_trigger_heap_percent: 70, emergency_profiling_duration_seconds: 30, emergency_profiling_sampling_interval_bytes: 4096, emergency_profiling_cooldown_seconds: 300 } }, plugin_onboarding_by_job_role: { client: true, fallbackValues: { byJobRole: {}, recommendedPluginNamesByJobRole: {} } }, leaked_disposables_tracker: { client: true, fallbackValues: { enabled: false, reportIntervalMs: 6e4 } }, gc_disposable_leak_reporting: { client: true, fallbackValues: { enabled: false, sessionSampleRate: 0 } }, solidjs_memo_audit_config: { client: true, fallbackValues: { enabled: false, sampleRate: 1, maxEventsPerFlush: 5e4, reportIntervalMs: 6e4, deepProbe: false, deepProbeSampleRate: 0.01, deepProbeMaxBytes: 16384, stackAttribution: false, stackCreationSampleRate: 0.02, stackRedundantThreshold: 2, maxTrackedCreationStacks: 500, maxStackReportsPerSession: 10, maxStackBytes: 4e3 } }, solidjs_listener_stacks_config: { client: true, fallbackValues: { enabled: false, sampleRate: 1, observerThreshold: 2e3, maxTrackedSources: 500, maxReportsPerSession: 10, maxStackBytes: 4e3, totalObserverThreshold: 0, totalTriggeredSourceFloor: 200, totalTriggeredMaxReports: 20 } }, shell_exec_output_backpressure_config: { client: true, fallbackValues: { outputSuppressionWindowMs: 6e4, outputSuppressionThresholdCharsPerSecond: 65536, outputSuppressionMinChars: 262144, outputLimiterFlushIntervalMs: 50, outputLimiterMaxBufferedBytes: 262144, extHostMinBatchIntervalMs: 50, extHostMaxBatchIntervalMs: 500, extHostBytesPerIntervalStep: 1e4 } }, canvas_prompt_text_config: { client: true, fallbackValues: { skillDescription: "A Cursor Canvas is a live React app that the user can open beside the chat. You MUST use a canvas when the agent produces a standalone analytical artifact — quantitative analyses, billing investigations, security audits, architecture reviews, data-heavy content, timelines, charts, tables, interactive explorations, repeatable tools, or any response that benefits from visual layout. Especially prefer a canvas when presenting results from MCP tools (Datadog, Databricks, Linear, Sentry, Slack, etc.) where the data is the deliverable — render it in a rich canvas rather than dumping it into a markdown table or code block. If you catch yourself about to write a markdown table, stop and use a canvas instead. You MUST also read this skill whenever you create, edit, or debug any .canvas.tsx file.", errorFixPromptTemplate: ["The canvas at `{canvasPath}` has the following error:", "", '"""', "{errorMessage}", '"""', "", "Check if the canvas SDK has changed since this canvas was created.", "Update the canvas to use the latest SDK components according to the supplied documentation in the canvas skill."].join("\n"), welcomePageEnabled: true, marketplaceCategoryKey: "canvas-featured", marketplaceMaxCards: 4 } }, glass_ftux_first_action_config: { client: true, fallbackValues: { byJobRole: {} } }, shutdown_hang_watchdog_config: { client: true, fallbackValues: { per_joiner_warn_ms: 2e3, fire_on_will_shutdown_total_ms: 3e3, process_exit_total_ms: 5e3 } }, update_diagnostics: { client: true, fallbackValues: { enabled: false, restart_time_threshold_seconds: 30, attach_ship_it_log: true, max_attachment_bytes: 5e6 } }, startup_diagnostics: { client: true, fallbackValues: { enabled: false, timer_name: "ellapsedLoadMainBundle", threshold_ms: 3e4 } }, renderer_ping_config: { client: true, fallbackValues: { enabled: false, ping_interval_ms: 5e3, block_threshold_ms: 15e3, collect_stack_traces: true, report_rpc_drain: false } }, main_watcher_stall_probe_config: { client: true, fallbackValues: { enabled: false, flush_threshold_ms: 250, anchor_interval_ms: 1e3, anchor_lag_ms: 500, cooldown_ms: 6e4, session_cap: 10 } }, editor_input_latency_metrics_config: { client: true, fallbackValues: { enabled: false, sample_rate: 0.01, window_duration_ms: 6e4 } }, editor_tokenization_metrics_config: { client: true, fallbackValues: { enabled: false, sample_rate: 0.01, time_limit_ms: 500 } }, ripgrep_invocation_monitor_config: { client: true, fallbackValues: { window_ms: 1e4, threshold: 50, max_records: 100, cooldown_ms: 3e5, report_to_sentry: true, report_initialize_caches: false } }, grep_fallback_monitor_config: { client: true, fallbackValues: { window_ms: 6e4, min_samples: 20, fallback_ratio_threshold: 0.5, cooldown_ms: 3e5, report_to_sentry: true } }, instant_grep_indexing_config: { client: true, fallbackValues: { max_in_memory_documents: null } }, git_diff_reply_limit_config: { client: true, fallbackValues: { enabled: true, max_reply_bytes: 31457280 } }, renderer_slow_interaction_sentry_config: { client: true, fallbackValues: { enabled: false, threshold_ms: 1e3, commit_attribution: false } }, glass_fps_monitor_config: { client: true, fallbackValues: { enabled: false, min_fps: 30, max_drops_per_interval: 3, interval_sec: 60, baseline_interval_sec: null, baseline_sample_rate: null } }, xai_team_link_create_mode: { client: true, fallbackValues: { mode: "off" } }, mac_computer_use_sidecar_manifest: { client: true, fallbackValues: { sidecarManifestUrl: "" } }, windows_computer_use_sidecar_manifest: { client: true, fallbackValues: { x64: "", arm64: "" } }, computer_use_mcp_instructions: { client: true, fallbackValues: { darwin: { companion: "", remote: "" }, win32: "" } }, change_monitor_enrollment: { client: true, fallbackValues: { enrolled: false, enableUI: false, orgs: ["*"] } } });
    Object.keys(wf), vf(["control", "grok_primary", "pinned_selection", "grouped_auto_expand"]), vf(["control", "treatment"]);
    function vf(e2) {
      return Object.assign((t2) => {
        if (-1 === e2.findIndex((e3) => e3 === t2)) throw new Error(`Invalid value for enum: ${t2}, expected one of: ${e2.join(", ")}`);
        return t2;
      }, { enumValues: e2 });
    }
    function _f(e2) {
      if ("boolean" != typeof e2) throw new Error(`Invalid value for boolean: ${e2}`);
      return e2;
    }
    function Af(e2) {
      if ("string" != typeof e2) throw new Error(`Invalid value for string: ${e2}`);
      return e2;
    }
    function Sf(e2) {
      if ("number" != typeof e2) throw new Error(`Invalid value for number: ${e2}`);
      return e2;
    }
    var bf = __webpack_require__(13920);
    function Ef(e2) {
      if (void 0 === e2) return "the CURSOR_PRIVATE_INFERENCE_* shorthand";
      switch (e2.source) {
        case "policy":
          return `the managed policy config file ${e2.path}`;
        case "well-known":
          return `the enterprise config file ${e2.path}`;
        case "env":
          return `CURSOR_PRIVATE_INFERENCE_CONFIG=${e2.path}`;
      }
    }
    function If(e2) {
      return `Private inference config: private inference is enabled for your team but no configuration is present — put ${In} at ${Cn(e2)} (or set CURSOR_PRIVATE_INFERENCE_CONFIG for development), then restart`;
    }
    async function Cf(e2) {
      const t2 = c.cursor.getPrivateInferenceEnablement();
      if ("enabled" === t2 || void 0 === e2 || "env" === e2.source) return t2;
      return void 0 === await c.cursor.getActiveTeamId() ? "unavailable" : "disabled";
    }
    async function kf() {
      return c.cursor.getPrivateInferenceEnablement();
    }
    function xf() {
      return c.cursor.getPrivateInferenceEnablement();
    }
    async function Tf() {
      const e2 = xn({ env: process.env, platform: process.platform }), t2 = (function(e3) {
        if (void 0 === e3.configFile && !(0, dt.QO)(e3.env)) switch (e3.team) {
          case "disabled":
          case "unavailable":
            return { kind: "not-configured" };
          case "enabled":
            return { kind: "fail-closed", configErrorDetail: If(e3.platform) };
          case "pending":
            return { kind: "enrollment-pending", configErrorDetail: If(e3.platform) };
        }
        switch (e3.team) {
          case "enabled":
          case "unavailable":
          case "pending":
            return { kind: "hydrate", configFile: e3.configFile };
          case "disabled":
            return { kind: "backend-loop", warning: `Private inference is configured (${Ef(e3.configFile)}) but is not enabled for your team; ignoring it and running turns on the backend loop (Cursor-managed models)` };
        }
      })({ configFile: e2, env: process.env, platform: process.platform, team: await Cf(e2) });
      if ("not-configured" !== t2.kind) {
        if ("backend-loop" !== t2.kind) return "hydrate" === t2.kind && void 0 !== t2.configFile && ks.gW.info(`Private inference config: ${t2.configFile.path} (${t2.configFile.source})`), { decision: t2, routing: { readTeamEnablement: kf, enrollmentUndecided: "enrollment-pending" === t2.kind } };
        ks.gW.warn(t2.warning);
      }
    }
    let Rf;
    function Bf() {
      return void 0 === Rf && (Rf = (0, gn.createPrivateInferenceEnablementSource)({ getEnablement: () => c.cursor.getPrivateInferenceEnablement() })), Rf;
    }
    class Pf {
      constructor(e2) {
        let t2 = e2.globalState.get("unique_cpp_user_id");
        void 0 === t2 && (t2 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), e2.globalState.update("unique_cpp_user_id", t2)), this._uniqueCppUserId = t2;
      }
      static initialize(e2) {
        void 0 === Pf._instance && (Pf._instance = new Pf(e2));
      }
      static getInstance() {
        if (void 0 === Pf._instance) throw new Error("SpoofedIdProvider not initialized");
        return Pf._instance;
      }
      maybeGetSpoofedCppAccessToken(e2, t2) {
        const r2 = c.cursor.getCursorCreds()?.backendUrl, n2 = "redacted" + this._uniqueCppUserId;
        return (r2?.includes("lclhst.build") || r2?.includes("localhost")) && t2?.includes("cursor.sh") ? (ks.gW.info("Using spoofed CPP token"), (function(e3, t3) {
          const r3 = e3.split("").map((e4) => e4.charCodeAt(0));
          for (let e4 = 0; e4 < r3.length; e4++) r3[e4] = (r3[e4] + 128 - t3 % 128) % 128;
          return String.fromCharCode(...r3);
        })(n2, 1)) : e2;
      }
    }
    const Jf = (() => {
      try {
        const e2 = i.totalmem();
        return Number.isFinite(e2) && e2 > 0 ? String(Math.round(e2)) : void 0;
      } catch {
        return;
      }
    })();
    class Mf {
      async getAccessToken() {
        return c.cursor.getCursorAuthToken();
      }
      async getApiKey() {
      }
      async setAuthentication(e2, t2, r2) {
        await c.commands.executeCommand("cursorAuth.triggerTokenRefresh", true);
      }
    }
    class qf {
      constructor(e2) {
        this.disposables = [], this.context = e2;
        const t2 = /* @__PURE__ */ (function(e3) {
          let t3;
          const r2 = () => (void 0 === t3 && (t3 = c.window.createOutputChannel(e3, { log: true })), t3);
          return { logger: { debug: (e4, ...t4) => r2().debug(e4, ...t4), info: (e4, ...t4) => r2().info(e4, ...t4), warn: (e4, ...t4) => r2().warn(e4, ...t4), error: (e4, ...t4) => r2().error(e4, ...t4), trace: (e4, ...t4) => r2().trace(e4, ...t4) }, dispose: () => t3?.dispose() };
        })("Cursor Agent Host Network (debug)");
        this.log = ks.Wo, this.logDispose = () => ks.Wo.dispose(), this.debugLog = t2.logger, this.debugLogDispose = t2.dispose, void 0 !== e2 && Pf.initialize(e2);
      }
      track(e2) {
        return this.disposables.push(e2), e2;
      }
      async initialize() {
        this.log.info("[agent-host] Builtin IDE network platform initialized");
      }
      dispose() {
        for (const e2 of this.disposables) e2.dispose();
        this.disposables.length = 0, this.logDispose(), this.debugLogDispose();
      }
      getCreds() {
        return c.cursor.getCursorCreds();
      }
      onDidChangeCreds(e2) {
        return this.track(c.cursor.onDidChangeCursorCreds(e2));
      }
      getAuthToken() {
        return c.cursor.getCursorAuthToken();
      }
      onDidChangeAuthToken(e2) {
        return this.track(c.cursor.onDidChangeCursorAuthToken(e2));
      }
      triggerTokenRefresh() {
        c.commands.executeCommand("cursorAuth.triggerTokenRefresh", true);
      }
      maybeGetSpoofedCppAccessToken(e2, t2) {
        return void 0 === this.context ? e2 : Pf.getInstance().maybeGetSpoofedCppAccessToken(e2, t2);
      }
      getTeamId() {
        return c.cursor.getTeamId();
      }
      getPrivacyModeEnum() {
        return c.cursor.getPrivacyModeEnum();
      }
      getPrivateInferenceEnablement() {
        return Bf();
      }
      applyRequestHeaders(e2, t2, r2) {
        c.cursor.getAllRequestHeadersExceptAccessToken({ req: e2, backupRequestId: t2, ...void 0 !== r2 ? { clientKey: r2 } : {} });
        const n2 = e2.header;
        void 0 === Jf || void 0 === n2 || n2.has("x-cursor-client-device-memory") || n2.set("x-cursor-client-device-memory", Jf);
      }
      checkFeatureGate(e2) {
        return Promise.resolve(c.cursor.checkFeatureGate(e2));
      }
      onDidChangeGates(e2) {
        return this.track(c.cursor.onDidChangeGates(e2));
      }
      getDynamicConfigValue(e2) {
        return Promise.resolve(c.cursor.getDynamicConfigValue(e2));
      }
      getDynamicConfigFallbackValues(e2) {
        return wf[e2]?.fallbackValues;
      }
      async getCachedServerConfigJson() {
        return c.commands.executeCommand(bf.X7.GetCachedServerConfig);
      }
      isHttp2Disabled() {
        try {
          return c.workspace.getConfiguration().get(bf.db, false);
        } catch {
          return false;
        }
      }
      async setHttp2Disabled() {
        await c.workspace.getConfiguration().update(bf.db, true, true);
      }
      isHttp1SseDisabled() {
        try {
          return c.workspace.getConfiguration().get(bf.ak, false);
        } catch {
          return false;
        }
      }
      async setHttp1SseDisabled() {
        await c.workspace.getConfiguration().update(bf.ak, true, true);
      }
      onDidChangeHttpProtocolSettings(e2) {
        return this.track(c.workspace.onDidChangeConfiguration((t2) => {
          (t2.affectsConfiguration(bf.db) || t2.affectsConfiguration(bf.ak)) && e2();
        }));
      }
      getDebugTimeoutPreventionMode() {
        try {
          return c.workspace.getConfiguration().get("cursor.debug.timeoutPrevention", "local_only");
        } catch {
          return "local_only";
        }
      }
      async loadSystemCertificates() {
        const { loadSystemCertificates: e2 } = __webpack_require__(89018), t2 = await e2({ log: { error: (e3, ...t3) => this.debugLog.error(e3, ...t3), warn: (e3, ...t3) => this.debugLog.warn(e3, ...t3), info: (e3, ...t3) => this.debugLog.info(e3, ...t3), debug: (e3, ...t3) => this.debugLog.debug(e3, ...t3), trace: (e3, ...t3) => this.debugLog.trace(e3, ...t3) }, loadSystemCertificatesFromNode: () => false });
        return t2 ? [...t2] : void 0;
      }
      isLocalMode() {
        return c.cursor.isLocalMode;
      }
      isDevelopment() {
        return this.context?.isDevelopment ?? false;
      }
      metricsIncrement(e2) {
        c.cursor.metricsIncrement(e2);
      }
      logStructured(e2) {
        (0, ks.M$)(e2.key, e2.level, e2.message, e2.metadata, e2.error);
      }
      writePrivacyLog(e2, t2) {
        switch (void 0 === this.privacyLogChannel && (this.privacyLogChannel = c.window.createOutputChannel("Cursor Agent Host Structured Logs", { log: true }), this.disposables.push(this.privacyLogChannel)), e2) {
          case "error":
            this.privacyLogChannel.error(t2);
            break;
          case "warn":
            this.privacyLogChannel.warn(t2);
            break;
          default:
            this.privacyLogChannel.info(t2);
        }
      }
    }
    var Df = __webpack_require__(14521), Of = __webpack_require__(79896);
    function Nf(e2, t2) {
      return Ff(e2) || true === t2;
    }
    function Ff(e2) {
      return "1" === e2 || "true" === e2?.toLowerCase();
    }
    function Uf(e2) {
      if (void 0 !== e2.storageSource) return e2.gate ? "gate" : Ff(e2.envValue) ? "env" : void 0;
    }
    const Lf = 6e4;
    function $f(e2) {
      const t2 = /* @__PURE__ */ new Map();
      return (r2) => {
        const n2 = `${r2.kind}:${r2.store}`, s2 = Date.now(), o2 = t2.get(n2);
        if (void 0 !== o2 && s2 - o2 < Lf) return;
        t2.set(n2, s2);
        const i2 = (function(e3) {
          switch (e3.kind) {
            case "host_blob_missing":
              return new Error("Host-owned session is missing a required local blob");
            case "host_owned_legacy_blob_read":
              return new Error("Host-owned session attempted a legacy blob read");
            case "mirror_write_failed":
              return new Error("Host-owned session mirror write failed");
            case "root_commit_conflict":
              return new Error("Host-owned session root commit conflicted");
            case "roots_diverged":
              return new Error(`Agent host storage ${e3.kind}: ${e3.relPath}`);
            default:
              return e3.error instanceof Error ? e3.error : new Error(`Agent host storage ${e3.kind}: ${e3.relPath}`);
          }
        })(r2), a2 = (function(e3) {
          if ("sqliteErrcode" in e3 && void 0 !== e3.sqliteErrcode) return e3.sqliteErrcode;
          return "code" in e3 ? e3.code : void 0;
        })(r2);
        e2(i2, { client_error_type: "agent_host_storage_failure", cursor_storage_event: r2.kind, storage_kind: r2.store, force_upload: "forced" }, { level: "busy_exhausted" === r2.kind || "root_commit_conflict" === r2.kind ? "warning" : "error", fingerprint: ["agent_host_storage", r2.kind, String(a2 ?? "unknown")], extra: Qf(r2) });
      };
    }
    function Qf(e2) {
      switch (e2.kind) {
        case "host_blob_missing":
          return { operation: "get_blob", authority: "host" };
        case "host_owned_legacy_blob_read":
          return { operation: "get_blob", authority: "host", attempted_source: "renderer_callback" };
        case "mirror_write_failed":
          return { operation: "set_blob", authority: "host", attempted_source: "renderer_callback" };
        case "root_commit_conflict":
          return { operation: "commit_root", authority: "host" };
        case "roots_diverged":
          return { sessionId: e2.sessionId, relPath: e2.relPath, hostRootBlobIdHex: e2.hostRootBlobIdHex, rendererRootBlobIdHex: e2.rendererRootBlobIdHex, ...void 0 === e2.hostTurns ? {} : { hostTurns: e2.hostTurns }, ...void 0 === e2.rendererTurns ? {} : { rendererTurns: e2.rendererTurns }, ...void 0 === e2.commonPrefixTurns ? {} : { commonPrefixTurns: e2.commonPrefixTurns } };
        case "hydrate_failed":
          return { sessionId: e2.sessionId, relPath: e2.relPath, durationMs: Math.round(e2.durationMs) };
        default:
          return { relPath: e2.relPath, durationMs: Math.round(e2.durationMs) };
      }
    }
    const jf = 5e3;
    function Gf(e2) {
      const t2 = process.getBuiltinModule("node:sqlite"), r2 = Kf(e2), n2 = new t2.DatabaseSync(e2, { readOnly: true });
      let s2;
      try {
        return s2 = new t2.DatabaseSync(e2, { readOnly: true }), s2.exec(`PRAGMA busy_timeout = ${jf}`), (function(e3, t3, r3, n3) {
          e3.exec(`PRAGMA busy_timeout = ${jf}`), e3.exec("BEGIN");
          const s3 = e3.prepare("SELECT value FROM cursorDiskKV WHERE key = ?"), o2 = e3.prepare(Hf), i2 = void 0 !== e3.prepare("SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'composerHeaders'").get(), a2 = "composerId, workspaceId, createdAt, lastUpdatedAt, isArchived, isSubagent, value", c2 = i2 ? e3.prepare(`SELECT ${a2} FROM composerHeaders WHERE composerId = ?`) : void 0, l2 = i2 ? e3.prepare(`SELECT ${a2} FROM composerHeaders`) : void 0, u2 = t3.prepare(Hf), d2 = i2 ? t3.prepare(`SELECT ${a2} FROM composerHeaders WHERE composerId = ?`) : void 0, p2 = (e4) => {
            let t4;
            const r4 = Wf(e4.value);
            if (void 0 !== r4) try {
              const e5 = JSON.parse(r4);
              t4 = "string" == typeof e5.name ? e5.name : void 0;
            } catch {
            }
            return { composerId: String(e4.composerId), workspaceId: "string" == typeof e4.workspaceId ? e4.workspaceId : void 0, createdAt: Vf(e4.createdAt), lastUpdatedAt: Vf(e4.lastUpdatedAt), isArchived: 1 === Number(e4.isArchived ?? 0), isSubagent: 1 === Number(e4.isSubagent ?? 0), name: t4 };
          };
          return { getBlob: (e4) => {
            const t4 = s3.get(`${Et}${e4}`);
            if (void 0 !== t4) {
              if (t4.value instanceof Uint8Array) return 1 === t4.value.length && 0 === t4.value[0] ? new Uint8Array(0) : t4.value;
              if ("string" == typeof t4.value) try {
                const e5 = (0, R.aD)(t4.value);
                return 1 === e5.length && 0 === e5[0] ? new Uint8Array(0) : e5;
              } catch {
                return;
              }
            }
          }, getComposerData: (e4) => {
            const t4 = s3.get(`composerData:${e4}`), r4 = void 0 === t4 ? void 0 : Wf(t4.value);
            if (void 0 !== r4) try {
              const e5 = JSON.parse(r4);
              return "object" == typeof e5 && null !== e5 ? e5 : void 0;
            } catch {
              return;
            }
          }, getRootWriterDiagnostic: (e4, t4) => {
            const r4 = s3.get((0, ie.dI)(e4));
            return (0, ie.RN)(void 0 === r4 ? void 0 : Wf(r4.value), t4);
          }, getHeader: (e4) => {
            const t4 = c2?.get(e4);
            return void 0 === t4 ? void 0 : p2(t4);
          }, listHeaders: () => (l2?.all() ?? []).map(p2), getSessionVersion: (e4) => zf(o2, c2, e4), isSessionCurrent: (e4, t4) => {
            try {
              return s4 = n3, o3 = Kf(r3), void 0 !== s4 && void 0 !== o3 && s4.dev === o3.dev && s4.ino === o3.ino && (function(e5, t5) {
                return (function(e6, t6) {
                  if (void 0 === e6 || void 0 === t6) return e6 === t6;
                  return e6.valid === t6.valid && e6.conversationState === t6.conversationState && e6.lastUpdatedAt === t6.lastUpdatedAt && e6.unfinishedRunAt === t6.unfinishedRunAt && e6.status === t6.status && e6.generatingBubbleIds === t6.generatingBubbleIds;
                })(e5.composerData, t5.composerData) && (function(e6, t6) {
                  if (void 0 === e6 || void 0 === t6) return e6 === t6;
                  return e6.workspaceId === t6.workspaceId && e6.createdAt === t6.createdAt && e6.lastUpdatedAt === t6.lastUpdatedAt && e6.isArchived === t6.isArchived && e6.isSubagent === t6.isSubagent && e6.value === t6.value;
                })(e5.header, t5.header);
              })(t4, zf(u2, d2, e4));
            } catch {
              return false;
            }
            var s4, o3;
          }, close: () => {
            try {
              e3.exec("ROLLBACK");
            } finally {
              try {
                e3.close();
              } finally {
                t3.close();
              }
            }
          } };
        })(n2, s2, e2, r2);
      } catch (e3) {
        try {
          n2.close();
        } finally {
          s2?.close();
        }
        throw e3;
      }
    }
    const Hf = "\n	SELECT\n		json_valid(CAST(value AS TEXT)) AS valid,\n		CASE WHEN json_valid(CAST(value AS TEXT))\n			THEN json_extract(CAST(value AS TEXT), '$.conversationState') END AS conversationState,\n		CASE WHEN json_valid(CAST(value AS TEXT))\n			THEN json_extract(CAST(value AS TEXT), '$.lastUpdatedAt') END AS lastUpdatedAt,\n		CASE WHEN json_valid(CAST(value AS TEXT))\n			THEN json_extract(CAST(value AS TEXT), '$.unfinishedRunAt') END AS unfinishedRunAt,\n		CASE WHEN json_valid(CAST(value AS TEXT))\n			THEN json_extract(CAST(value AS TEXT), '$.status') END AS status,\n		CASE WHEN json_valid(CAST(value AS TEXT))\n			THEN json_extract(CAST(value AS TEXT), '$.generatingBubbleIds') END AS generatingBubbleIds\n	FROM cursorDiskKV WHERE key = ?\n";
    function zf(e2, t2, r2) {
      const n2 = e2.get(`composerData:${r2}`), s2 = t2?.get(r2);
      return { composerData: void 0 === n2 ? void 0 : { valid: 1 === Number(n2.valid ?? 0), conversationState: "string" == typeof n2.conversationState ? n2.conversationState : void 0, lastUpdatedAt: Vf(n2.lastUpdatedAt), unfinishedRunAt: Vf(n2.unfinishedRunAt), status: "string" == typeof n2.status ? n2.status : void 0, generatingBubbleIds: "string" == typeof n2.generatingBubbleIds ? n2.generatingBubbleIds : void 0 }, header: void 0 === s2 ? void 0 : { workspaceId: "string" == typeof s2.workspaceId ? s2.workspaceId : void 0, createdAt: Vf(s2.createdAt), lastUpdatedAt: Vf(s2.lastUpdatedAt), isArchived: 1 === Number(s2.isArchived ?? 0), isSubagent: 1 === Number(s2.isSubagent ?? 0), value: Wf(s2.value) } };
    }
    function Wf(e2) {
      return "string" == typeof e2 ? e2 : e2 instanceof Uint8Array ? new TextDecoder().decode(e2) : void 0;
    }
    function Vf(e2) {
      return "number" == typeof e2 ? e2 : "bigint" == typeof e2 ? Number(e2) : void 0;
    }
    function Kf(e2) {
      try {
        const t2 = _t().statSync(e2, { throwIfNoEntry: false });
        return void 0 === t2 ? void 0 : { dev: t2.dev, ino: t2.ino };
      } catch {
        return;
      }
    }
    const Yf = 4;
    function Zf(e2) {
      let t2 = e2.now();
      const r2 = async () => {
        await e2.yieldControl(), t2 = e2.now();
      };
      return { yieldIfNeeded: () => e2.now() - t2 < e2.maxSliceMs ? void 0 : r2(), yieldNow: r2 };
    }
    const Xf = 16384;
    async function eg(e2, t2, r2) {
      if (e2.byteLength !== t2.byteLength) {
        const e3 = r2?.yieldIfNeeded();
        return void 0 !== e3 && await e3, false;
      }
      for (let n2 = 0; n2 < e2.byteLength; n2 += Xf) {
        const s2 = Math.min(n2 + Xf, e2.byteLength);
        for (let o3 = n2; o3 < s2; o3++) if (e2[o3] !== t2[o3]) {
          const e3 = r2?.yieldIfNeeded();
          return void 0 !== e3 && await e3, false;
        }
        const o2 = r2?.yieldIfNeeded();
        void 0 !== o2 && await o2;
      }
      return true;
    }
    function tg(e2) {
      let t2 = false;
      try {
        t2 = e2.host.isCurrent();
      } catch {
      }
      if (!t2) try {
        return e2.storage.hasSessionStore(e2.sessionId) ? { kind: "changed", store: "host" } : { kind: "deleted" };
      } catch {
        return { kind: "changed", store: "host" };
      }
      return ng(e2);
    }
    function rg(e2, t2) {
      try {
        return e2.hasSessionStore(t2);
      } catch {
        return true;
      }
    }
    function ng(e2) {
      return e2.renderer.isSessionCurrent(e2.sessionId, e2.snapshot.rendererVersion) ? { kind: "current" } : { kind: "changed", store: "renderer" };
    }
    function sg(e2) {
      const t2 = [];
      for (const r3 of e2.sessions) {
        const e3 = r3.host.meta?.title ?? r3.renderer.name ?? "";
        t2.push(`${r3.verdict.toUpperCase().padEnd(4)} ${r3.sessionId}  turns host=${r3.host.turns ?? "-"} renderer=${r3.renderer.turns ?? "-"}  pieces host=${r3.hostReachable} renderer=${r3.rendererReachable} mismatch=${r3.byteMismatches.length} hostOnly=${r3.hostReachableMissingInRenderer.length} rendererOnly=${r3.rendererReachableMissingInHost.length} priorRoots=${r3.hostPriorRoots} unreached=${r3.hostDanglingBlobs}  origin=${r3.host.manifest?.origin ?? "?"}${e3 ? `  "${e3}"` : ""}`);
        for (const e4 of r3.reasons) t2.push(`      - ${e4}`);
        for (const e4 of r3.notes) t2.push(`      · ${e4}`);
      }
      const r2 = e2.sessions.length, n2 = e2.scoped ? `${r2} host session(s) compared (scoped run)` : `${r2} host session(s)`, s2 = e2.cachedPassSessions > 0 ? `, ${e2.cachedPassSessions} cached pass${1 === e2.cachedPassSessions ? "" : "es"}` : "";
      return t2.push(""), t2.push(`${e2.overall}: ${n2}: ${e2.counts.pass} pass, ${e2.counts.lag} lag, ${e2.counts.warn} warn, ${e2.counts.fail} fail, ${e2.counts.busy} skipped (busy); ${e2.rendererOnlySessions.length} renderer-only chat(s) (legacy, expected); ${e2.hostOnlySessions.length} host-only store(s)${e2.hostOnlySessions.length > 0 ? ` (${e2.hostOnlySessions.join(", ")})` : ""}${s2}`), t2.join("\n");
    }
    function og(e2, t2, r2) {
      if (void 0 === e2) return false;
      if (0 === e2.length) return t2.turns.length > 0;
      let n2;
      try {
        n2 = Ie.Y9z.fromBinary(e2);
      } catch {
        return false;
      }
      return !(0 === n2.turns.length || n2.turns.length > t2.turns.length) && n2.turns.every((e3, s2) => 32 === e3.length && r2((0, R.nj)(e3)) && (s2 === n2.turns.length - 1 || ag(e3, t2.turns[s2])));
    }
    function ig(e2, t2) {
      return e2.every((e3, r2) => ag(e3, t2[r2]));
    }
    function ag(e2, t2) {
      if (e2.byteLength !== t2.byteLength) return false;
      for (let r2 = 0; r2 < e2.byteLength; r2++) if (e2[r2] !== t2[r2]) return false;
      return true;
    }
    function cg(e2) {
      const t2 = (0, wt.createHash)("sha256");
      return dg(t2, e2.owned ? "owned" : "released"), dg(t2, JSON.stringify(e2.entry)), t2.digest("hex");
    }
    class lg {
      constructor(e2) {
        this.entries = /* @__PURE__ */ new Map(), this.pendingPrunes = 0, this.intervalMs = e2.intervalMs, this.rotationWindowMs = e2.rotationWindowMs ?? 36e5, this.rotationSlots = Math.max(1, Math.min(6, Math.floor(this.rotationWindowMs / this.intervalMs)));
      }
      lookup(e2) {
        const t2 = this.entries.get(e2.sessionId);
        if (void 0 === t2) return { kind: "miss", reason: "empty" };
        if (t2.identity.digest !== e2.identity.digest || !t2.identity.hostCurrentness.equals(e2.identity.hostCurrentness)) return this.entries.delete(e2.sessionId), this.pendingPrunes++, { kind: "miss", reason: "identity" };
        return e2.nowMs - t2.fullyWalkedAtMs >= this.rotationWindowMs || e2.nowMs >= t2.rotateAtMs ? { kind: "miss", reason: "rotation" } : { kind: "hit", comparison: t2.comparison, fullyWalkedAtMs: t2.fullyWalkedAtMs };
      }
      remember(e2) {
        const t2 = this.entries.get(e2.sessionId);
        var r2, n2;
        this.entries.set(e2.sessionId, { identity: e2.identity, comparison: e2.comparison, fullyWalkedAtMs: e2.nowMs, rotateAtMs: e2.nowMs + (t2?.identity.digest === e2.identity.digest && t2.identity.hostCurrentness.equals(e2.identity.hostCurrentness) ? this.rotationWindowMs : (r2 = e2.sessionId, n2 = this.rotationSlots, ((0, wt.createHash)("sha256").update(r2).digest()[0] % n2 + 1) * this.intervalMs)) });
      }
      forget(e2) {
        const t2 = this.entries.delete(e2);
        return t2 && this.pendingPrunes++, t2;
      }
      retainScope(e2) {
        let t2 = 0;
        for (const r2 of this.entries.keys()) e2.has(r2) || (this.entries.delete(r2), t2++);
        return this.pendingPrunes += t2, t2;
      }
      clear() {
        const e2 = this.entries.size;
        return this.entries.clear(), this.pendingPrunes += e2, e2;
      }
      takePrunes() {
        const e2 = this.pendingPrunes;
        return this.pendingPrunes = 0, e2;
      }
      get size() {
        return this.entries.size;
      }
    }
    function ug(e2) {
      if (void 0 === e2.host.manifest || void 0 !== e2.host.manifestError) return;
      const t2 = (0, wt.createHash)("sha256");
      dg(t2, JSON.stringify(e2.host.manifest)), dg(t2, JSON.stringify(e2.host.listingProjection)), dg(t2, JSON.stringify(e2.host.meta)), dg(t2, e2.host.metaState), dg(t2, (function(e3) {
        return (0, wt.createHash)("sha256").update(JSON.stringify(e3)).digest("hex");
      })(e2.rendererVersion)), dg(t2, e2.catalogIdentity);
      for (const r2 of e2.host.listBlobIds().sort()) dg(t2, r2);
      return { hostCurrentness: e2.host.currentnessToken, digest: t2.digest("hex") };
    }
    function dg(e2, t2) {
      const r2 = t2 ?? "<absent>";
      e2.update(String(Buffer.byteLength(r2))), e2.update(":"), e2.update(r2);
    }
    const pg = 3e4, mg = 6e4, hg = 72e5;
    function fg(e2) {
      const t2 = (0, ie.T8)({ before: e2.host, after: e2.renderer });
      return 1 === t2.length && "fileStatesV2" === t2[0]?.field && (function(e3) {
        const t3 = Object.entries(e3.host.fileStatesV2), r2 = Object.entries(e3.renderer.fileStatesV2);
        return r2.length < t3.length && r2.every(([t4, r3]) => {
          const n2 = e3.host.fileStatesV2[t4];
          return void 0 !== n2 && 0 === Buffer.compare(n2.toBinary(), r3.toBinary());
        });
      })(e2) ? "warn" : "fail";
    }
    function gg(e2, t2, r2, n2) {
      const s2 = r2.getHeader(e2), o2 = r2.getComposerData(e2), i2 = r2.getRootWriterDiagnostic(e2, n2), a2 = (function(e3) {
        if ("string" == typeof e3 && 0 !== e3.length) try {
          const t3 = e3.startsWith("~") ? new Uint8Array(Buffer.from(e3.slice(1), "base64")) : (0, R.aD)(e3);
          return 0 === t3.length ? void 0 : Ie.Y9z.fromBinary(t3);
        } catch {
          return;
        }
      })(o2?.conversationState), c2 = (function(e3) {
        const t3 = e3?.fullConversationHeadersOnly;
        if (!Array.isArray(t3)) return;
        let r3 = 0, n3 = 0;
        for (const e4 of t3) {
          const t4 = e4.type;
          1 === t4 ? r3++ : 2 === t4 && n3++;
        }
        return { user: r3, ai: n3 };
      })(o2);
      return { host: { manifest: t2.manifest, manifestError: t2.manifestError, listingProjection: t2.listingProjection, meta: t2.meta, metaState: t2.metaState, turns: t2.rootState?.turns.length }, renderer: { hasHeader: void 0 !== s2, hasComposerData: void 0 !== o2, name: s2?.name ?? ("string" == typeof o2?.name ? o2.name : void 0), isArchived: s2?.isArchived, isSubagent: s2?.isSubagent, lastUpdatedAtMs: s2?.lastUpdatedAt ?? ("number" == typeof o2?.lastUpdatedAt ? o2.lastUpdatedAt : void 0), createdAtMs: s2?.createdAt ?? ("number" == typeof o2?.createdAt ? o2.createdAt : void 0), workspaceId: s2?.workspaceId, activeGenerationAtMs: "number" == typeof o2?.unfinishedRunAt ? o2.unfinishedRunAt : "generating" === o2?.status || Array.isArray(o2?.generatingBubbleIds) && o2.generatingBubbleIds.length > 0 ? s2?.lastUpdatedAt ?? ("number" == typeof o2?.lastUpdatedAt ? o2.lastUpdatedAt : void 0) : void 0, turns: a2?.turns.length, userBubbles: c2?.user, aiBubbles: c2?.ai }, hostState: t2.rootState, rendererState: a2, header: s2, composerData: o2, rootWriterDiagnostic: i2, metaState: t2.metaState, hostRootReasons: t2.rootReasons };
    }
    function yg(e2, t2, r2) {
      return { hostReachable: 0, rendererReachable: 0, hostReachableMissingInRenderer: [], byteMismatches: [], rendererReachableMissingInHost: [], rendererReachableUnreachableFromHostRoot: 0, hostPriorRoots: 0, hostDanglingBlobs: 0, hostClosureFailures: [], rendererClosureFailures: [], hostStoreUnreadable: false, hostRootBlobIdHex: void 0, rendererRootBlobIdHex: void 0, rootDifference: void 0, rendererRootWriterDiagnostic: { kind: "unavailable" }, sessionId: e2, verdict: "busy", reasons: [], notes: [vg(r2)], host: t2.host, renderer: t2.renderer, rendererRootWriterDiagnostic: t2.rootWriterDiagnostic };
    }
    function wg(e2, t2) {
      return { ...e2, hostReachable: 0, rendererReachable: 0, hostReachableMissingInRenderer: [], byteMismatches: [], rendererReachableMissingInHost: [], rendererReachableUnreachableFromHostRoot: 0, hostPriorRoots: 0, hostDanglingBlobs: 0, hostClosureFailures: [], rendererClosureFailures: [], hostStoreUnreadable: false, hostRootBlobIdHex: void 0, rendererRootBlobIdHex: void 0, rootDifference: void 0, rendererRootWriterDiagnostic: { kind: "unavailable" }, verdict: "busy", reasons: [], notes: [vg(`${t2} store changed during compare`)] };
    }
    function vg(e2) {
      return `skipped (busy): ${e2}; judged once quiet for ${mg / 1e3} s`;
    }
    async function _g(e2, t2, r2, n2, s2, o2, i2, a2) {
      const c2 = kr(t2, e2);
      let l2 = false;
      try {
        const o3 = r2.getSessionVersion(e2), a3 = { hostCurrentness: c2.currentnessToken, rendererVersion: o3 };
        let p2;
        const m2 = i2?.catalogIdentities.get(e2);
        if (void 0 !== i2 && void 0 !== m2 && (p2 = ug({ storage: t2, sessionId: e2, host: c2, rendererVersion: o3, catalogIdentity: m2 }), void 0 !== p2)) {
          const o4 = i2.cache.lookup({ sessionId: e2, identity: p2, nowMs: n2 });
          if ("hit" === o4.kind) {
            const n3 = s2?.yieldIfNeeded();
            void 0 !== n3 && await n3;
            const l3 = tg({ sessionId: e2, storage: t2, host: c2, renderer: r2, snapshot: a3 });
            return "deleted" === l3.kind ? void i2.cache.forget(e2) : ("changed" === l3.kind && i2.cache.forget(e2), { comparison: "current" === l3.kind ? (u2 = o4.comparison, d2 = o4.fullyWalkedAtMs, { ...u2, notes: [...u2.notes, `cached pass: identities unchanged; last full comparison ${new Date(d2).toISOString()}`] }) : wg(o4.comparison, l3.store), snapshot: a3, cacheIdentity: p2, mode: "cached", rotationCheck: false });
          }
          "rotation" === o4.reason && (l2 = true);
        }
        const h2 = gg(e2, c2, r2, n2), f2 = s2?.yieldIfNeeded();
        if (void 0 !== f2 && await f2, void 0 === h2.host.manifest && void 0 === h2.host.manifestError) return void i2?.cache.forget(e2);
        const g2 = (function(e3) {
          const t3 = void 0 === e3.hostUpdatedAtMs ? void 0 : e3.nowMs - e3.hostUpdatedAtMs;
          if (void 0 !== t3 && t3 < mg) return `host checkpoint ${Math.round(t3 / 1e3)} s ago`;
          const r3 = void 0 === e3.rendererUpdatedAtMs ? void 0 : e3.nowMs - e3.rendererUpdatedAtMs;
          if (void 0 !== r3 && r3 < mg) return `renderer header write ${Math.round(r3 / 1e3)} s ago`;
          if (void 0 !== e3.rendererActiveGenerationAtMs && e3.nowMs - e3.rendererActiveGenerationAtMs <= hg) return "renderer reports an active generation";
          return void 0 !== e3.hostTurns && void 0 !== e3.rendererTurns && e3.hostTurns === e3.rendererTurns + 1 ? "host root one turn ahead of the renderer transcript" : void 0;
        })({ hostUpdatedAtMs: h2.host.meta?.updatedAtMs, rendererUpdatedAtMs: h2.renderer.lastUpdatedAtMs, rendererActiveGenerationAtMs: h2.renderer.activeGenerationAtMs, hostTurns: h2.host.turns, rendererTurns: h2.renderer.turns, nowMs: n2 });
        let y2;
        try {
          y2 = { kind: "comparison", comparison: void 0 === g2 ? await Ag(e2, c2, r2, h2, s2) : yg(e2, h2, g2) };
        } catch (e3) {
          y2 = { kind: "error", error: e3 };
        }
        const w2 = tg({ sessionId: e2, storage: t2, host: c2, renderer: r2, snapshot: a3 });
        switch (w2.kind) {
          case "current":
            return { comparison: "comparison" === y2.kind ? y2.comparison : bg(e2, y2.error), snapshot: a3, cacheIdentity: p2, mode: "full", rotationCheck: l2 };
          case "deleted":
            return void i2?.cache.forget(e2);
          case "changed":
            return { comparison: "comparison" === y2.kind ? wg(y2.comparison, w2.store) : yg(e2, h2, `${w2.store} store changed during compare`), snapshot: a3, cacheIdentity: p2, mode: "full", rotationCheck: l2 };
        }
      } finally {
        try {
          c2.close();
        } catch (t3) {
          o2(`host snapshot close failed for ${e2}: ${t3 instanceof Error ? t3.message : String(t3)}`);
        }
      }
      var u2, d2;
    }
    async function Ag(e2, t2, r2, n2, s2) {
      const { hostState: o2, rendererState: i2, header: a2, composerData: c2, metaState: l2 } = n2, u2 = n2.host.manifest, d2 = n2.host.meta, p2 = [...n2.hostRootReasons], m2 = (e3) => t2.getBlob(e3);
      let h2 = /* @__PURE__ */ new Map(), f2 = [];
      const g2 = void 0 === s2 ? void 0 : { yieldIfNeeded: () => s2.yieldIfNeeded() };
      if (void 0 !== o2) {
        const e3 = await Or(o2, async (e4) => m2((0, R.nj)(e4)), g2);
        h2 = e3.blobs, f2 = e3.failures, e3.failures.length > 0 && p2.push(`host DB is internally inconsistent: ${e3.failures.length} reachable piece(s) missing/invalid`);
      }
      let y2 = /* @__PURE__ */ new Map(), w2 = [];
      if (void 0 !== i2) {
        const e3 = await Or(i2, async (e4) => r2.getBlob((0, R.nj)(e4)), g2);
        y2 = e3.blobs, w2 = e3.failures;
      }
      const v2 = [], _2 = [];
      for (const [e3, t3] of h2) {
        const n3 = r2.getBlob(e3);
        if (void 0 === n3) {
          v2.push(e3);
          const t4 = s2?.yieldIfNeeded();
          void 0 !== t4 && await t4;
        } else await eg(t3, n3, s2) || _2.push(e3);
      }
      const A2 = [];
      let S2 = 0;
      for (const [e3, t3] of y2) {
        if (h2.has(e3)) {
          const e4 = s2?.yieldIfNeeded();
          void 0 !== e4 && await e4;
          continue;
        }
        const r3 = m2(e3);
        if (void 0 === r3) {
          A2.push(e3);
          const t4 = s2?.yieldIfNeeded();
          void 0 !== t4 && await t4;
        } else S2++, await eg(r3, t3, s2) || _2.push(e3);
      }
      const b2 = s2?.yieldIfNeeded();
      void 0 !== b2 && await b2;
      const E2 = t2.listBlobIds(), I2 = new Set(E2), C2 = s2?.yieldIfNeeded();
      void 0 !== C2 && await C2;
      let k2 = 0, x2 = 0;
      for (const e3 of E2) {
        if (h2.has(e3) || e3 === u2?.latestRootBlobIdHex) continue;
        void 0 !== o2 && og(m2(e3), o2, (e4) => I2.has(e4)) ? k2++ : x2++;
        const t3 = s2?.yieldIfNeeded();
        void 0 !== t3 && await t3;
      }
      const T2 = o2?.turns.length, B2 = i2?.turns.length, P2 = u2?.latestRootBlobIdHex;
      let J2, M2;
      const q2 = [];
      let D2 = "pass";
      const O2 = (e3) => {
        D2 = "fail", p2.push(e3);
      }, N2 = (e3) => {
        "pass" === D2 && (D2 = "warn"), p2.push(e3);
      };
      if ((n2.hostRootReasons.length > 0 || f2.length > 0) && (D2 = "fail"), _2.length > 0 && O2(`${_2.length} piece(s) have different bytes in the two stores`), v2.length > 0 && O2(`${v2.length} host-reachable piece(s) missing from the renderer store (mirror drift)`), A2.length > 0 && O2(`${A2.length} renderer-reachable piece(s) missing from the host DB (host write drift)`), w2.length > 0 && N2(`renderer store is missing ${w2.length} of its own reachable piece(s); renderer-side comparison incomplete`), void 0 === c2 ? N2("no composerData in the renderer store for this session") : void 0 === i2 && (void 0 === o2 || 0 === T2 ? q2.push("no completed turn in either store") : N2("renderer composerData carries no decodable conversationState")), void 0 === a2 && q2.push("no renderer header row for this session"), void 0 !== u2 && void 0 !== o2 && void 0 !== i2 && T2 === B2 && (J2 = (0, R.nj)(await (0, R.Bk)(i2.toBinary())), u2.latestRootBlobIdHex !== J2)) {
        const e3 = (function(e4, t3, r3, n3) {
          if (e4.turns.length !== t3.turns.length) return "different";
          if (e4.turns.every((e5, r4) => ag(e5, t3.turns[r4]))) return "same";
          const s3 = e4.turns.length - 1;
          if (s3 < 0 || !e4.turns.slice(0, s3).every((e5, r4) => ag(e5, t3.turns[r4]))) return "different";
          const o3 = r3.getBlob((0, R.nj)(e4.turns[s3])), i3 = n3.getBlob((0, R.nj)(t3.turns[s3]));
          if (void 0 === o3 || void 0 === i3) return "different";
          try {
            const e5 = Ie.cmU.fromBinary(o3), t4 = Ie.cmU.fromBinary(i3);
            if ("agentConversationTurn" !== e5.turn.case || "agentConversationTurn" !== t4.turn.case || !ag(e5.turn.value.userMessage, t4.turn.value.userMessage)) return "different";
            const r4 = e5.turn.value.steps, n4 = t4.turn.value.steps;
            return r4.length < n4.length && ig(r4, n4) ? "renderer-ahead" : n4.length < r4.length && ig(n4, r4) ? "host-ahead" : "different";
          } catch {
            return "different";
          }
        })(o2, i2, t2, r2);
        if ("renderer-ahead" === e3) "fail" !== D2 && (D2 = "lag"), p2.push("host bookmark lags within the renderer's current turn");
        else if ("host-ahead" === e3) N2("host bookmark is ahead within the renderer's current turn");
        else if ("same" === e3) {
          M2 = (0, ie.IQ)({ host: o2, renderer: i2 });
          const e4 = s2?.yieldIfNeeded();
          void 0 !== e4 && await e4;
          const t3 = 0 === (F2 = M2).fields.length ? "no decoded field-value changes" : F2.fields.map((e5) => `${e5.field}:${e5.shape} host=${e5.hostCount} renderer=${e5.rendererCount}`).join(", ");
          switch (M2.kind) {
            case "identical":
            case "encoding-only":
              q2.push(`root encoding differs while decoded state matches (${t3})`);
              break;
            case "compacted-token-metadata":
              q2.push(`root compacted token metadata differs while durable state matches (${t3})`);
              break;
            case "observational":
              N2(`host and renderer observational root state differ at the same turn count (${t3})`);
              break;
            case "durable":
              "warn" === fg({ host: o2, renderer: i2 }) ? N2(`host and renderer known low-harm projection root state differ at the same turn count (${t3})`) : O2(`host and renderer durable root state differ at the same turn count (${t3})`);
              break;
            default:
              M2.kind;
          }
        } else O2("host and renderer durable root state differ at the same turn count");
      }
      var F2;
      if (void 0 !== T2 && void 0 !== B2 && (T2 > B2 + 1 ? O2(`host root has ${T2} turn(s) but the renderer has ${B2}: host is ahead of the transcript`) : T2 < B2 && ("fail" !== D2 && (D2 = "lag"), p2.push(`host bookmark lags: ${T2} turn(s) on the host root vs ${B2} in the renderer`))), x2 > 0 && 0 === S2) {
        const e3 = `${x2} host piece(s) no bookmark ever reached`;
        void 0 !== T2 && T2 === B2 ? q2.push(`${e3} (aborted turn)`) : N2(`${e3} (aborted turn, or a turn lost before its checkpoint)`);
      }
      if (void 0 !== d2 && void 0 !== u2 && d2.latestRootBlobIdHex !== u2.latestRootBlobIdHex && q2.push("meta.json root pointer differs from the manifest root (sidecar not caught up)"), void 0 !== d2 && void 0 !== n2.host.listingProjection) {
        const e3 = n2.host.listingProjection;
        d2.title === e3.title && d2.isArchived === (e3.isArchived ?? false) && d2.updatedAtMs === e3.updatedAtMs || q2.push("meta.json title/isArchived/updatedAtMs differs from session.sqlite projection");
      }
      return "unusable" === l2 && q2.push("meta.json unusable"), void 0 !== d2 && void 0 !== a2 && (void 0 !== d2.title && void 0 !== a2.name && d2.title !== a2.name && q2.push(`title differs: host "${d2.title}" vs renderer "${a2.name}"`), d2.isArchived !== a2.isArchived && q2.push(`isArchived differs: host ${d2.isArchived} vs renderer ${a2.isArchived}`), void 0 !== d2.updatedAtMs && void 0 !== a2.lastUpdatedAt && Math.abs(d2.updatedAtMs - a2.lastUpdatedAt) > pg && q2.push(`recency differs: host updatedAtMs ${new Date(d2.updatedAtMs).toISOString()} vs renderer lastUpdatedAt ${new Date(a2.lastUpdatedAt).toISOString()} (${d2.updatedAtMs > a2.lastUpdatedAt ? "host" : "renderer"} ahead by ${Math.round(Math.abs(d2.updatedAtMs - a2.lastUpdatedAt) / 1e3)} s)`)), "fail" === D2 && void 0 === J2 && void 0 !== i2 && (J2 = (0, R.nj)(await (0, R.Bk)(i2.toBinary()))), { sessionId: e2, verdict: D2, reasons: p2, notes: q2, host: n2.host, renderer: n2.renderer, hostReachable: h2.size, rendererReachable: y2.size, hostReachableMissingInRenderer: v2, byteMismatches: _2, rendererReachableMissingInHost: A2, rendererReachableUnreachableFromHostRoot: S2, hostPriorRoots: k2, hostDanglingBlobs: x2, hostClosureFailures: f2, rendererClosureFailures: w2, hostRootBlobIdHex: P2, rendererRootBlobIdHex: J2, rootDifference: M2, rendererRootWriterDiagnostic: n2.rootWriterDiagnostic };
    }
    async function Sg(e2) {
      const t2 = new ft.DH(e2.storageRoot), r2 = e2.log ?? (() => {
      }), n2 = e2.nowMs ?? Date.now(), s2 = Gf(e2.stateDbPath), o2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map(), a2 = { cachedPasses: 0, cachePrunes: e2.passCache?.cache.takePrunes() ?? 0 };
      try {
        const c2 = t2.listSessionIds(), l2 = void 0 === e2.sessionIds ? void 0 : new Set(e2.sessionIds), u2 = [];
        let d2 = false;
        for (const a3 of c2) {
          if (void 0 !== l2 && !l2.has(a3)) continue;
          d2 && void 0 !== e2.scheduler && await e2.scheduler.yieldNow(), d2 = true, r2(`comparing ${a3}`);
          const c3 = Cr.capture(t2, a3);
          try {
            const o3 = await _g(a3, t2, s2, n2, e2.scheduler, r2, e2.passCache);
            void 0 !== o3 && (u2.push(o3.comparison), i2.set(a3, o3));
          } catch (r3) {
            if (e2.passCache?.cache.forget(a3), !t2.hasSessionStore(a3) || r3 instanceof $t.C8) continue;
            const n3 = bg(a3, r3), s3 = Cr.capture(t2, a3);
            c3.sameStoreEnvelope(s3) ? (u2.push(n3), o2.set(a3, s3)) : u2.push(wg(n3, "host"));
          }
        }
        const p2 = e2.scheduler?.yieldIfNeeded();
        void 0 !== p2 && await p2;
        const m2 = s2.listHeaders(), h2 = u2.flatMap((r3) => {
          const c3 = i2.get(r3.sessionId);
          if (void 0 === c3) try {
            if (!t2.hasSessionStore(r3.sessionId)) return [];
            const e3 = o2.get(r3.sessionId);
            return false === e3?.matches(t2, r3.sessionId) ? [wg(r3, "host")] : [r3];
          } catch {
            return [r3];
          }
          const l3 = (function(e3) {
            if (!rg(e3.storage, e3.sessionId)) return { kind: "deleted" };
            try {
              if (!e3.snapshot.hostCurrentness.matches(e3.storage, e3.sessionId)) return { kind: "changed", store: "host" };
            } catch {
              return rg(e3.storage, e3.sessionId) ? { kind: "changed", store: "host" } : { kind: "deleted" };
            }
            return ng(e3);
          })({ sessionId: r3.sessionId, storage: t2, renderer: s2, snapshot: c3.snapshot });
          switch (l3.kind) {
            case "current":
              return "cached" === c3.mode && "pass" === r3.verdict ? a2.cachedPasses++ : "pass" === r3.verdict && void 0 !== c3.cacheIdentity && void 0 !== e2.passCache ? e2.passCache.cache.remember({ sessionId: r3.sessionId, identity: c3.cacheIdentity, comparison: r3, nowMs: n2 }) : e2.passCache?.cache.forget(r3.sessionId), [r3];
            case "deleted":
              return e2.passCache?.cache.forget(r3.sessionId), [];
            case "changed":
              return e2.passCache?.cache.forget(r3.sessionId), [wg(r3, l3.store)];
          }
        });
        a2.cachePrunes += e2.passCache?.cache.takePrunes() ?? 0;
        const f2 = h2.map((e3) => e3.sessionId), g2 = new Set(f2), y2 = m2.filter((e3) => !e3.isSubagent && (void 0 === l2 || l2.has(e3.composerId)) && !g2.has(e3.composerId)).map((e3) => e3.composerId).sort(), w2 = new Set(m2.map((e3) => e3.composerId)), v2 = f2.filter((e3) => !w2.has(e3)), _2 = { pass: 0, lag: 0, warn: 0, fail: 0, busy: 0 };
        for (const e3 of h2) _2[e3.verdict]++;
        const A2 = h2.filter((e3) => "cached" !== i2.get(e3.sessionId)?.mode).length, S2 = h2.filter((e3) => true === i2.get(e3.sessionId)?.rotationCheck).length;
        return { stateDbPath: e2.stateDbPath, sessionsRoot: t2.sessionsDir, generatedAtMs: n2, sessions: h2, scoped: void 0 !== e2.sessionIds, hostSessionCount: f2.length, rendererOnlySessions: y2, hostOnlySessions: v2, counts: _2, overall: 0 === _2.fail && 0 === _2.lag ? "PASS" : "FAIL", fullCheckSessions: A2, cachedPassSessions: a2.cachedPasses, rotationCheckSessions: S2, cacheEntries: e2.passCache?.cache.size ?? 0, cachePrunes: a2.cachePrunes };
      } finally {
        s2.close();
      }
    }
    function bg(e2, t2) {
      return { hostReachable: 0, rendererReachable: 0, hostReachableMissingInRenderer: [], byteMismatches: [], rendererReachableMissingInHost: [], rendererReachableUnreachableFromHostRoot: 0, hostPriorRoots: 0, hostDanglingBlobs: 0, hostClosureFailures: [], rendererClosureFailures: [], hostStoreUnreadable: false, hostRootBlobIdHex: void 0, rendererRootBlobIdHex: void 0, rootDifference: void 0, rendererRootWriterDiagnostic: { kind: "unavailable" }, hostStoreUnreadable: true, sessionId: e2, verdict: "fail", reasons: [`host DB could not be read: ${t2 instanceof Error ? t2.message : String(t2)}`], notes: [], host: { metaState: "unusable" }, renderer: { hasHeader: false, hasComposerData: false } };
    }
    const Eg = /* @__PURE__ */ new Set(["git_auto_accept", "transcript_recovery", "restore_or_rewind", "goal_mutation", "migration_or_import"]);
    function Ig(e2) {
      const t2 = ("durable" === e2.rootDifference?.kind ? e2.rootDifference.fields : []).slice(0, 6).map((e3) => {
        return { field: (0, ie.vX)(e3.field), shape: e3.shape, direction: (t3 = e3.hostCount, r3 = e3.rendererCount, r3 > t3 ? "added" : r3 < t3 ? "removed" : "changed"), hostCountBucket: Tg(e3.hostCount), rendererCountBucket: Tg(e3.rendererCount) };
        var t3, r3;
      }), r2 = (function(e3) {
        const t3 = [...new Set(e3.map((e4) => e4.field))];
        return 0 === t3.length ? "none" : 1 === t3.length ? t3[0] : "mixed";
      })(t2), n2 = (function(e3) {
        const t3 = [];
        e3.byteMismatches.length > 0 && t3.push("piece_bytes");
        e3.hostReachableMissingInRenderer.length > 0 && t3.push("renderer_missing_piece");
        e3.rendererReachableMissingInHost.length > 0 && t3.push("host_missing_piece");
        e3.hostClosureFailures.length > 0 && t3.push("host_closure");
        true === e3.hostStoreUnreadable && t3.push("host_unreadable");
        "durable" === e3.rootDifference?.kind && t3.push("root_durable");
        void 0 !== e3.host.turns && void 0 !== e3.renderer.turns && e3.host.turns > e3.renderer.turns + 1 && t3.push("host_transcript_ahead");
        0 === t3.length && t3.push("unknown");
        return t3.slice(0, 6);
      })(e2), s2 = n2[0] ?? "unknown", o2 = { primaryFailureKind: s2, failureKinds: n2, rootKind: e2.rootDifference?.kind ?? "none", changedFields: t2, changedField: r2, turnDelta: Rg(e2), pieceBucket: Tg(e2.byteMismatches.length + e2.hostReachableMissingInRenderer.length + e2.rendererReachableMissingInHost.length), closureBucket: Tg(e2.hostClosureFailures.length + e2.rendererClosureFailures.length), hostOrigin: (i2 = e2.host.manifest?.origin, "host-native" === i2 || "migrated-from-renderer-cas" === i2 ? i2 : "unknown") };
      var i2;
      switch (s2) {
        case "piece_bytes":
          return kg(o2, "piece_bytes", "both");
        case "renderer_missing_piece":
          return kg(o2, "renderer_missing_piece", "renderer");
        case "host_missing_piece":
          return kg(o2, "host_missing_piece", "host");
        case "host_closure":
          return kg(o2, "host_closure", "host");
        case "host_unreadable":
          return kg(o2, "host_unreadable", "host");
        case "host_transcript_ahead":
          return kg(o2, "host_transcript_ahead", "host");
        case "root_durable":
          return (function(e3, t3) {
            const r3 = e3.rendererRootWriterDiagnostic;
            if (void 0 === r3 || "missing" === r3.kind) return kg(t3, "unknown", "unknown", "missing");
            if ("unavailable" === r3.kind) return kg(t3, "unknown", "unknown", "unavailable");
            const n3 = r3.record;
            if (void 0 === e3.rendererRootBlobIdHex || n3.rendererRootBlobIdHex !== e3.rendererRootBlobIdHex) return kg(t3, "unknown", "unknown", "stale_root");
            const s3 = t3.changedFields, o3 = n3.writers.filter((e4) => e4.fields.some((e5) => s3.some((t4) => t4.field === e5.field && t4.direction === e5.direction)));
            if (0 === o3.length) {
              const e4 = [...n3.writers].reverse().find(Cg);
              return void 0 !== e4 ? { ...t3, primaryCause: "unknown", divergentSide: "unknown", writerReason: e4.reason, writerOwnership: e4.hostOwnedAtWrite, writerMatch: "candidate_exact_root", writerFields: xg(e4), writersOmitted: n3.writersOmitted } : kg(t3, "unknown", "unknown", "exact_root_no_field_overlap", n3.writersOmitted);
            }
            const i3 = o3[o3.length - 1], a2 = (e3.rootDifference?.fields.length ?? 0) === s3.length && n3.writers.every((e4) => 0 === e4.fieldsOmitted), c2 = n3.predecessorVerified && void 0 !== n3.previousRendererRootBlobIdHex && n3.previousRendererRootBlobIdHex === e3.hostRootBlobIdHex && 1 === o3.length && 0 === n3.writersOmitted && a2, l2 = c2 ? "proven_transition" : "candidate_exact_root", u2 = c2 ? Eg.has(i3.reason) ? "renderer_root_write" : "host_hydrate" === i3.reason || "agent_checkpoint" === i3.reason ? "projection_or_persist" : "unknown" : "unknown";
            return { ...t3, primaryCause: u2, divergentSide: c2 && Eg.has(i3.reason) ? "renderer" : "unknown", writerReason: i3.reason, writerOwnership: i3.hostOwnedAtWrite, writerMatch: l2, writerFields: xg(i3), writersOmitted: n3.writersOmitted };
          })(e2, o2);
        case "unknown":
          return kg(o2, "unknown", "unknown");
      }
    }
    function Cg(e2) {
      return "other" === e2.reason && 0 === e2.fieldsOmitted && 1 === e2.fields.length && "other" === e2.fields[0]?.field && "changed" === e2.fields[0]?.direction;
    }
    function kg(e2, t2, r2, n2 = "missing", s2 = 0) {
      return { ...e2, primaryCause: t2, divergentSide: r2, writerReason: "none", writerOwnership: "none", writerMatch: n2, writerFields: [], writersOmitted: s2 };
    }
    function xg(e2) {
      return e2.fields.slice(0, 4).map((e3) => `${e3.field}:${e3.direction}`);
    }
    function Tg(e2) {
      return e2 <= 0 ? "0" : 1 === e2 ? "1" : e2 <= 4 ? "2_4" : e2 <= 16 ? "5_16" : e2 <= 64 ? "17_64" : "65_plus";
    }
    function Rg(e2) {
      const t2 = e2.host.turns, r2 = e2.renderer.turns;
      return void 0 === t2 || void 0 === r2 ? "unknown" : t2 === r2 ? "same" : t2 === r2 + 1 ? "host_1" : t2 > r2 ? "host_2plus" : "renderer_ahead";
    }
    const Bg = "compare.lock", Pg = 6e5;
    class Jg {
      constructor(e2, t2, r2, n2 = 18e4) {
        this.filePath = e2, this.pid = t2, this.now = r2, this.staleMs = n2, this.token = `${t2}:${(0, wt.randomUUID)()}`;
      }
      acquire() {
        const e2 = this.connection();
        e2.exec("BEGIN IMMEDIATE");
        try {
          const t2 = e2.prepare("SELECT token, pid, heartbeatMs FROM lease WHERE id = 1").get(), r2 = this.now(), n2 = void 0 !== t2 && t2.token !== this.token && r2 - Number(t2.heartbeatMs) <= this.staleMs;
          return n2 || e2.prepare("\n					INSERT INTO lease (id, token, pid, heartbeatMs) VALUES (1, ?, ?, ?)\n					ON CONFLICT(id) DO UPDATE SET token = excluded.token, pid = excluded.pid, heartbeatMs = excluded.heartbeatMs\n				").run(this.token, this.pid, r2), e2.exec("COMMIT"), !n2;
        } catch (t2) {
          try {
            e2.exec("ROLLBACK");
          } catch (e3) {
            throw new AggregateError([t2, e3], "Catalog compare lease transaction and rollback failed");
          }
          throw t2;
        }
      }
      holderPid() {
        const e2 = this.connection().prepare("SELECT pid FROM lease WHERE id = 1").get();
        return void 0 === e2 ? void 0 : Number(e2.pid);
      }
      heartbeatIntervalMs() {
        return Math.max(1, Math.floor(this.staleMs / 3));
      }
      release() {
        const e2 = this.db;
        if (void 0 !== e2) try {
          e2.prepare("DELETE FROM lease WHERE id = 1 AND token = ?").run(this.token);
        } finally {
          e2.close(), this.db = void 0;
        }
      }
      connection() {
        if (void 0 === this.db) {
          const e2 = new (process.getBuiltinModule("node:sqlite")).DatabaseSync(this.filePath);
          try {
            e2.exec("\n					PRAGMA busy_timeout = 5000;\n					CREATE TABLE IF NOT EXISTS lease (\n						id INTEGER PRIMARY KEY CHECK (id = 1),\n						token TEXT NOT NULL,\n						pid INTEGER NOT NULL,\n						heartbeatMs INTEGER NOT NULL\n					);\n				"), this.db = e2;
          } catch (t2) {
            throw e2.close(), t2;
          }
        }
        return this.db;
      }
    }
    const Mg = "agent_host.storage.compare", qg = ["pass", "lag", "warn", "fail", "busy"];
    class Dg {
      constructor(e2) {
        this.options = e2, this.leaseSkipLogged = false, this.pendingCheckpointSessions = /* @__PURE__ */ new Set(), this.queuedResolvers = [], this.failureStateBySession = /* @__PURE__ */ new Map(), this.disposed = false, this.now = e2.now ?? Date.now, this.setTimer = e2.setTimeout ?? ((e3, t2) => setTimeout(e3, t2)), this.clearTimer = e2.clearTimeout ?? ((e3) => clearTimeout(e3)), this.activationDelayMs = e2.activationDelayMs ?? 15e3, this.intervalMs = e2.intervalMs ?? Pg, this.checkpointDebounceMs = e2.checkpointDebounceMs ?? mg;
      }
      start() {
        this.disposed || void 0 !== this.periodicTimer || (this.periodicTimer = this.setTimer(() => {
          this.runGated("activation", this.options.periodicSessionIds), this.schedulePeriodic();
        }, this.activationDelayMs));
      }
      noteCheckpoint(e2) {
        this.disposed || (this.pendingCheckpointSessions.add(e2), void 0 !== this.checkpointTimer && this.clearTimer(this.checkpointTimer), this.checkpointTimer = this.setTimer(() => {
          this.checkpointTimer = void 0;
          const e3 = [...this.pendingCheckpointSessions].sort();
          this.pendingCheckpointSessions.clear(), this.run({ trigger: "checkpoint", sessionIds: e3 });
        }, this.checkpointDebounceMs));
      }
      run(e2) {
        return this.runGated(e2.trigger, () => e2.sessionIds);
      }
      runGated(e2, t2) {
        return this.disposed ? Promise.resolve() : "checkpoint" === e2 || this.canCompare(true) ? this.runCovered({ trigger: e2, sessionIds: t2() }) : (this.dropCatalogLease(), Promise.resolve());
      }
      runCovered(e2) {
        return "checkpoint" === e2.trigger || this.holdsCatalogLease() ? void 0 !== this.running ? (this.queued = void 0 === this.queued ? e2 : (function(e3, t2) {
          if ("checkpoint" === e3.trigger && "checkpoint" !== t2.trigger) return e3;
          if ("checkpoint" === t2.trigger && "checkpoint" !== e3.trigger) return t2;
          const r2 = void 0 === e3.sessionIds || void 0 === t2.sessionIds ? void 0 : [.../* @__PURE__ */ new Set([...e3.sessionIds, ...t2.sessionIds])].sort();
          return { trigger: e3.trigger, sessionIds: r2 };
        })(this.queued, e2), new Promise((e3) => {
          this.queuedResolvers.push(e3);
        })) : (this.runningTrigger = e2.trigger, this.running = this.runOne(e2).finally(() => {
          this.running = void 0, this.runningTrigger = void 0;
          const e3 = this.queued, t2 = this.queuedResolvers;
          if (this.queued = void 0, this.queuedResolvers = [], void 0 !== e3) this.run(e3).finally(() => {
            for (const e4 of t2) e4();
          });
          else for (const e4 of t2) e4();
        }), this.running) : Promise.resolve();
      }
      dispose() {
        this.disposed = true, void 0 !== this.periodicTimer && this.clearTimer(this.periodicTimer), void 0 !== this.checkpointTimer && this.clearTimer(this.checkpointTimer), this.dropCatalogLease(), this.pendingCheckpointSessions.clear(), this.failureStateBySession.clear(), this.queued = void 0;
        for (const e2 of this.queuedResolvers) e2();
        this.queuedResolvers = [];
      }
      holdsCatalogLease() {
        const e2 = this.options.catalogLease;
        if (void 0 === e2) return true;
        let t2;
        try {
          t2 = e2.acquire();
        } catch (e3) {
          return this.bestEffortSink(() => this.options.sinks.log.warn(`[hostStorage] catalog compare lease unavailable; skipping this catalog run: ${e3 instanceof Error ? e3.message : String(e3)}`), "interval"), false;
        }
        if (!t2) {
          let t3;
          try {
            t3 = e2.holderPid();
          } catch (e3) {
            this.bestEffortSink(() => this.options.sinks.log.error("[hostStorage] catalog compare lease holder could not be read", e3), "interval");
          }
          return void 0 !== this.heartbeatTimer && (this.clearTimer(this.heartbeatTimer), this.heartbeatTimer = void 0), this.releaseCatalogLease(e2), this.leaseSkipLogged || (this.leaseSkipLogged = true, this.bestEffortSink(() => this.options.sinks.log.info(`[hostStorage] catalog compares run in another window (pid ${t3 ?? "?"}); this host compares only the sessions it checkpoints`), "interval")), false;
        }
        if (this.leaseSkipLogged = false, void 0 === this.heartbeatTimer) {
          const t3 = () => {
            this.heartbeatTimer = this.setTimer(() => {
              if (this.heartbeatTimer = void 0, !this.canCompare(false)) {
                const e3 = void 0 !== this.running && "checkpoint" !== this.runningTrigger;
                if (this.dropCatalogLease(), !e3) return;
              }
              let r2;
              try {
                r2 = e2.acquire();
              } catch (e3) {
                this.bestEffortSink(() => this.options.sinks.log.warn(`[hostStorage] catalog compare lease heartbeat failed; retaining ownership until stale: ${e3 instanceof Error ? e3.message : String(e3)}`), "interval");
              }
              false === r2 && this.releaseCatalogLease(e2), false === r2 || this.disposed && (void 0 === this.running || "checkpoint" === this.runningTrigger) || t3();
            }, e2.heartbeatIntervalMs());
          };
          t3();
        }
        return true;
      }
      releaseCatalogLease(e2) {
        this.options.onCatalogLeaseLost?.();
        try {
          e2.release();
        } catch (e3) {
          this.bestEffortSink(() => this.options.sinks.log.error("[hostStorage] catalog compare lease could not be released", e3), "interval");
        }
      }
      schedulePeriodic() {
        this.disposed || (this.periodicTimer = this.setTimer(() => {
          this.runGated("interval", this.options.periodicSessionIds), this.schedulePeriodic();
        }, this.intervalMs));
      }
      canCompare(e2) {
        return !this.disposed && this.options.shouldCompare(e2);
      }
      dropCatalogLease() {
        if (void 0 !== this.running && "checkpoint" !== this.runningTrigger) return void this.running.finally(() => {
          this.canCompare(false) || this.dropCatalogLease();
        });
        void 0 !== this.heartbeatTimer && (this.clearTimer(this.heartbeatTimer), this.heartbeatTimer = void 0);
        const e2 = this.options.catalogLease;
        void 0 !== e2 && this.releaseCatalogLease(e2);
      }
      async runOne(e2) {
        const { sinks: t2 } = this.options, r2 = this.now();
        let n2;
        try {
          n2 = await this.options.runCompare(e2);
        } catch (r3) {
          return void this.bestEffortSink(() => t2.log.error(`[hostStorage] compare (${e2.trigger}) could not run`, r3), e2.trigger);
        }
        if (this.disposed) return;
        const s2 = Math.max(0, this.now() - r2);
        this.bestEffortSink(() => {
          t2.log.info(`[hostStorage] compare (${e2.trigger}, ${n2.sessions.length} session(s), ${s2} ms)
${this.options.formatSummary(n2)}`);
        }, e2.trigger);
        const o2 = this.options.currentEnablementSource ?? "sticky", i2 = { trigger: e2.trigger, current_enablement_source: o2 };
        for (const r3 of qg) this.bestEffortSink(() => {
          t2.metric(`${Mg}.${r3}`, n2.counts[r3], i2);
        }, e2.trigger);
        this.bestEffortSink(() => {
          t2.metric(`${Mg}.full_checks`, n2.fullCheckSessions, i2);
        }, e2.trigger);
        const a2 = "interval" === e2.trigger ? [["unchanged_skips", n2.cachedPassSessions], ["rotation_checks", n2.rotationCheckSessions], ["cache_entries", n2.cacheEntries], ["cache_prunes", n2.cachePrunes]] : [];
        for (const [r3, n3] of a2) this.bestEffortSink(() => {
          t2.metric(`${Mg}.${r3}`, n3, i2);
        }, e2.trigger);
        if (this.bestEffortSink(() => {
          t2.metric(`${Mg}.duration_ms`, s2, i2);
        }, e2.trigger), "checkpoint" !== e2.trigger) {
          const r3 = n2.counts.pass + n2.counts.lag + n2.counts.warn + n2.counts.fail;
          for (const [s3, o3] of [["eligible_hosts", 1], ["eligible_stores", n2.hostSessionCount], ["terminally_compared_stores", r3]]) this.bestEffortSink(() => t2.metric(`${Mg}.coverage.${s3}`, o3, i2), e2.trigger);
        }
        const c2 = this.diagnosticsAllowed(), l2 = this.evictFailureState();
        c2 && l2 > 0 && this.emitOmitted("dedupe_evicted", l2, e2.trigger);
        const u2 = this.newOrChangedFailures(n2, c2, e2.trigger), d2 = this.evictFailureState();
        c2 && d2 > 0 && this.emitOmitted("dedupe_evicted", d2, e2.trigger), c2 && this.emitFailureMetrics(n2, e2.trigger);
        const p2 = u2.slice(0, 10);
        if (0 === p2.length) return;
        if (!c2) {
          let r3 = false;
          return this.bestEffortSink(() => {
            t2.fault({ trigger: e2.trigger, currentEnablementSource: o2, counts: n2.counts }), r3 = true;
          }, e2.trigger), void (r3 && this.markFailuresEmitted(p2, false));
        }
        const m2 = (function(e3) {
          const t3 = /* @__PURE__ */ new Map();
          for (const r3 of e3) {
            const e4 = Og(r3.attribution), n3 = t3.get(e4);
            void 0 === n3 ? t3.set(e4, [r3]) : n3.push(r3);
          }
          return [...t3.entries()].map(([e4, t4]) => ({ shapeFingerprintV2: e4, failures: t4 }));
        })(p2), h2 = m2.slice(0, 4), f2 = m2.slice(4).reduce((e3, t3) => e3 + t3.failures.length, 0);
        f2 > 0 && this.emitOmitted("event_cap", f2, e2.trigger);
        for (const r3 of h2) {
          const s3 = r3.failures.slice(0, 3).map(Ng), i3 = r3.failures.length - s3.length;
          i3 > 0 && this.emitOmitted("sample_cap", i3, e2.trigger);
          const a3 = r3.failures[0].attribution;
          let c3 = false;
          this.bestEffortSink(() => {
            t2.fault({ trigger: e2.trigger, currentEnablementSource: o2, counts: n2.counts, diagnostic: { version: "v2", shapeFingerprintV2: r3.shapeFingerprintV2, primaryCause: a3.primaryCause, writerReason: a3.writerReason, writerOwnership: Fg(r3.failures.map((e3) => e3.attribution.writerOwnership)), writerMatch: a3.writerMatch, divergentSide: a3.divergentSide, changedField: a3.changedField, hostOrigin: Fg(r3.failures.map((e3) => e3.attribution.hostOrigin)), affectedCount: r3.failures.length, selectedCount: p2.length, pendingCount: u2.length, clusterCap: 4, sampleCap: 3, samples: s3 } }), c3 = true;
          }, e2.trigger), c3 && this.markFailuresEmitted(r3.failures, true);
        }
      }
      newOrChangedFailures(e2, t2, r2) {
        const n2 = /* @__PURE__ */ new Map();
        for (const s3 of e2.sessions) {
          if ("fail" !== s3.verdict) {
            if ("busy" !== s3.verdict) {
              const e4 = this.failureStateBySession.get(s3.sessionId);
              t2 && void 0 !== e4?.emittedSignature && this.bestEffortSink(() => this.options.sinks.metric(`${Mg}.recovered`, 1, { trigger: r2, previous_primary_cause: e4.primaryCause, current_enablement_source: this.options.currentEnablementSource ?? "sticky" }), r2), this.failureStateBySession.delete(s3.sessionId);
            }
            continue;
          }
          const e3 = Ig(s3), o2 = $g(s3, Lg(s3));
          let i2 = this.failureStateBySession.get(s3.sessionId);
          void 0 === i2 && (i2 = { emittedSignature: void 0, diagnosticsEmitted: false, primaryCause: e3.primaryCause, lastSeenAtMs: this.now() }, this.failureStateBySession.set(s3.sessionId, i2)), i2.primaryCause = e3.primaryCause, i2.lastSeenAtMs = this.now(), (i2.emittedSignature !== o2 || t2 && !i2.diagnosticsEmitted) && n2.set(s3.sessionId, { sessionId: s3.sessionId, signature: o2, attribution: e3 });
        }
        const s2 = [];
        for (const e3 of this.failureStateBySession.keys()) {
          const t3 = n2.get(e3);
          void 0 !== t3 && s2.push(t3);
        }
        return s2;
      }
      diagnosticsAllowed() {
        try {
          return this.options.allowDiagnosticExport?.() ?? true;
        } catch {
          return false;
        }
      }
      evictFailureState() {
        const e2 = this.now() - 864e5;
        let t2 = 0;
        for (const [r2, n2] of this.failureStateBySession) n2.lastSeenAtMs < e2 && (this.failureStateBySession.delete(r2), t2++);
        for (; this.failureStateBySession.size > 512; ) {
          const e3 = this.failureStateBySession.keys().next().value;
          if (void 0 === e3) break;
          this.failureStateBySession.delete(e3), t2++;
        }
        return t2;
      }
      markFailuresEmitted(e2, t2) {
        for (const r2 of e2) {
          const e3 = this.failureStateBySession.get(r2.sessionId);
          if (void 0 === e3) continue;
          const n2 = e3.emittedSignature !== r2.signature;
          e3.emittedSignature = r2.signature, e3.diagnosticsEmitted = n2 ? t2 : e3.diagnosticsEmitted || t2, this.failureStateBySession.delete(r2.sessionId), this.failureStateBySession.set(r2.sessionId, e3);
        }
      }
      emitFailureMetrics(e2, t2) {
        const r2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map();
        let s2 = 0, o2 = 0;
        for (const i2 of e2.sessions) {
          if ("fail" !== i2.verdict) continue;
          const e3 = Ig(i2);
          Ug(r2, { trigger: t2, primary_cause: e3.primaryCause, writer_reason: e3.writerReason, writer_match: e3.writerMatch, writer_ownership: e3.writerOwnership, current_enablement_source: this.options.currentEnablementSource ?? "sticky" }), Ug(n2, { primary_failure_kind: e3.primaryFailureKind, changed_field: e3.changedField, divergent_side: e3.divergentSide, host_origin: e3.hostOrigin }), "unavailable" === e3.writerMatch && s2++, o2 += e3.writersOmitted;
        }
        for (const e3 of r2.values()) this.bestEffortSink(() => this.options.sinks.metric(`${Mg}.failure_cause`, e3.count, e3.tags), t2);
        for (const e3 of n2.values()) this.bestEffortSink(() => this.options.sinks.metric(`${Mg}.failure_shape`, e3.count, e3.tags), t2);
        s2 > 0 && this.emitOmitted("journal_unavailable", s2, t2), o2 > 0 && this.emitOmitted("writer_overflow", o2, t2);
      }
      emitOmitted(e2, t2, r2) {
        this.bestEffortSink(() => this.options.sinks.metric(`${Mg}.diagnostic_omitted`, t2, { stage: e2, current_enablement_source: this.options.currentEnablementSource ?? "sticky" }), r2);
      }
      bestEffortSink(e2, t2) {
        try {
          e2();
        } catch (e3) {
          try {
            this.options.sinks.log.error(`[hostStorage] compare (${t2}) sink failed`, e3);
          } catch (t3) {
            e3 instanceof Error && e3.name, t3 instanceof Error && t3.name;
          }
        }
      }
    }
    function Og(e2) {
      const t2 = JSON.stringify({ primaryFailureKind: e2.primaryFailureKind, primaryCause: e2.primaryCause, writerReason: e2.writerReason, writerMatch: e2.writerMatch, divergentSide: e2.divergentSide, changedField: e2.changedField });
      return (0, wt.createHash)("sha256").update(t2).digest("hex");
    }
    function Ng(e2) {
      const t2 = e2.attribution, r2 = t2.changedFields[0];
      return { primaryKind: t2.primaryFailureKind, rootKind: t2.rootKind, changedField: t2.changedField, direction: r2?.direction ?? "none", hostCountBucket: r2?.hostCountBucket ?? "0", rendererCountBucket: r2?.rendererCountBucket ?? "0", turnDelta: t2.turnDelta, pieceBucket: t2.pieceBucket, closureBucket: t2.closureBucket, writerField: t2.writerFields[0] ?? "none" };
    }
    function Fg(e2) {
      return 1 === new Set(e2).size ? e2[0] : "mixed";
    }
    function Ug(e2, t2) {
      const r2 = JSON.stringify(Object.entries(t2).sort(([e3], [t3]) => e3.localeCompare(t3))), n2 = e2.get(r2);
      void 0 === n2 ? e2.set(r2, { tags: t2, count: 1 }) : n2.count++;
    }
    function Lg(e2) {
      const t2 = [];
      if (e2.byteMismatches.length > 0 && t2.push("piece-bytes"), e2.hostReachableMissingInRenderer.length > 0 && t2.push("renderer-missing-piece"), e2.rendererReachableMissingInHost.length > 0 && t2.push("host-missing-piece"), e2.hostClosureFailures.length > 0 && t2.push("host-closure"), "durable" === e2.rootDifference?.kind) {
        const r2 = e2.rootDifference.fields.map((e3) => e3.field).sort().join(",");
        t2.push(`root-${e2.rootDifference.kind}:${r2}`);
      }
      return 0 === t2.length && t2.push("host-root-or-transcript"), t2.sort().join("+");
    }
    function $g(e2, t2) {
      const r2 = JSON.stringify({ taxonomy: t2, hostRootBlobIdHex: e2.hostRootBlobIdHex, rendererRootBlobIdHex: e2.rendererRootBlobIdHex, byteMismatches: [...e2.byteMismatches].sort(), hostReachableMissingInRenderer: [...e2.hostReachableMissingInRenderer].sort(), rendererReachableMissingInHost: [...e2.rendererReachableMissingInHost].sort(), hostClosureFailures: e2.hostClosureFailures.map((e3) => `${e3.kind}:${e3.blobIdHex}`).sort(), rendererClosureFailures: e2.rendererClosureFailures.map((e3) => `${e3.kind}:${e3.blobIdHex}`).sort(), reasonHash: Qg(e2.reasons), hostClosureDetailHash: Qg(e2.hostClosureFailures.map((e3) => e3.detail ?? "")), rendererClosureDetailHash: Qg(e2.rendererClosureFailures.map((e3) => e3.detail ?? "")), hostTurns: e2.host.turns, rendererTurns: e2.renderer.turns });
      return (0, wt.createHash)("sha256").update(r2).digest("hex");
    }
    function Qg(e2) {
      const t2 = (0, wt.createHash)("sha256");
      for (const r2 of e2) t2.update(String(Buffer.byteLength(r2))), t2.update(":"), t2.update(r2);
      return t2.digest("hex");
    }
    function jg(e2, t2) {
      if (void 0 === t2) return {};
      const r2 = `sample${e2}`;
      return { [`${r2}PrimaryKind`]: t2.primaryKind, [`${r2}RootKind`]: t2.rootKind, [`${r2}ChangedField`]: t2.changedField, [`${r2}Direction`]: t2.direction, [`${r2}HostCountBucket`]: t2.hostCountBucket, [`${r2}RendererCountBucket`]: t2.rendererCountBucket, [`${r2}TurnDelta`]: t2.turnDelta, [`${r2}PieceBucket`]: t2.pieceBucket, [`${r2}ClosureBucket`]: t2.closureBucket, [`${r2}WriterField`]: t2.writerField };
    }
    const Gg = 25;
    function Hg(e2) {
      const { registry: t2, storageRoot: r2 } = e2, n2 = (function(e3) {
        return St().join(St().dirname(e3), "state.vscdb");
      })(r2), s2 = new lg({ intervalMs: Pg });
      let o2 = /* @__PURE__ */ new Map();
      const i2 = new Dg({ shouldCompare: e2.shouldCompare, runCompare: (e3) => {
        const t3 = (function(e4) {
          if ("interval" === e4.trigger && void 0 !== e4.sessionIds) return e4.cache.retainScope(new Set(e4.sessionIds)), { cache: e4.cache, catalogIdentities: e4.catalogIdentities };
        })({ trigger: e3.trigger, sessionIds: e3.sessionIds, cache: s2, catalogIdentities: o2 });
        return Sg({ stateDbPath: n2, storageRoot: r2, sessionIds: e3.sessionIds, scheduler: Zf({ maxSliceMs: Yf, now: () => performance.now(), yieldControl: () => new Promise((e4) => setImmediate(e4)) }), ...void 0 === t3 ? {} : { passCache: t3 } });
      }, catalogLease: new Jg((0, At.join)(r2, Bg), process.pid, Date.now), onCatalogLeaseLost: () => {
        s2.clear();
      }, formatSummary: sg, periodicSessionIds: () => {
        const e3 = (function(e4) {
          const t3 = new Set(e4.ownedSessionIds()), r3 = new Map(e4.listNativeCatalogEntries(Gg).map((e5) => [e5.sessionId, e5])), n3 = [.../* @__PURE__ */ new Set([...t3, ...r3.keys()])].sort();
          return { sessionIds: n3, identities: new Map(n3.map((e5) => {
            const n4 = r3.get(e5);
            return [e5, cg({ owned: t3.has(e5), entry: n4 })];
          })) };
        })(t2);
        return o2 = e3.identities, e3.sessionIds;
      }, currentEnablementSource: e2.currentEnablementSource, allowDiagnosticExport: () => c.cursor.getPrivacyModeEnum() === K.PrivacyMode.USAGE_CODEBASE_TRAINING_ALLOWED, sinks: { log: ks.nx, metric: (e3, t3, r3) => {
        c.cursor.metricsDistribution({ stat: e3, value: t3, tags: { ...r3 } });
      }, fault: zg } });
      "agentWorkspace" !== e2.glassWorkspaceRole && i2.start();
      const a2 = t2.onRootAdvanced((e3) => {
        s2.forget(e3), i2.noteCheckpoint(e3);
      }), l2 = t2.onHostOwnedStorageChanged((e3) => {
        s2.forget(e3);
      });
      return { dispose: () => {
        a2(), l2(), i2.dispose();
      } };
    }
    function zg(e2) {
      const t2 = (function(e3, t3) {
        const r2 = e3.diagnostic, n2 = { trigger: e3.trigger, runPass: e3.counts.pass, runLag: e3.counts.lag, runWarn: e3.counts.warn, runFail: e3.counts.fail, runBusy: e3.counts.busy };
        return void 0 !== r2 && Object.assign(n2, { shapeFingerprintV2: r2.shapeFingerprintV2, affectedCount: r2.affectedCount, selectedCount: r2.selectedCount, pendingCount: r2.pendingCount, clusterCap: r2.clusterCap, sampleCap: r2.sampleCap, ...jg(0, r2.samples[0]), ...jg(1, r2.samples[1]), ...jg(2, r2.samples[2]) }), { message: `Agent host storage compare failed (${t3})`, tags: { client_error_type: "agent_host_storage_failure", cursor_storage_event: "compare_failed", storage_kind: "session", force_upload: "forced", current_enablement_source: e3.currentEnablementSource, ...void 0 === r2 ? {} : { compare_diag_version: r2.version, primary_cause: r2.primaryCause, writer_reason: r2.writerReason, writer_ownership: r2.writerOwnership, writer_match: r2.writerMatch, divergent_side: r2.divergentSide, changed_field: r2.changedField, host_origin: r2.hostOrigin } }, context: { level: "error", fingerprint: void 0 === r2 ? ["agent_host_storage", "compare_failed", "privacy_redacted"] : ["agent_host_storage", "compare_failed", "v2", r2.shapeFingerprintV2], extra: n2 } };
      })(e2, (0, wt.randomUUID)());
      c.cursor.captureException(new Error(t2.message), t2.tags, t2.context);
    }
    function Wg(e2) {
      const t2 = $f((e3, t3, r3) => c.cursor.captureException(e3, t3, r3)), r2 = { distribution: (e3) => {
        c.cursor.metricsDistribution({ stat: e3.stat, value: e3.value, ...void 0 === e3.tags ? {} : { tags: { ...e3.tags } } });
      }, increment: (e3) => {
        c.cursor.metricsIncrement({ stat: e3.stat, value: e3.value ?? 1, ...void 0 === e3.tags ? {} : { tags: { ...e3.tags } } });
      }, gauge: (e3) => {
        c.cursor.metricsGauge({ stat: e3.stat, value: e3.value, ...void 0 === e3.tags ? {} : { tags: { ...e3.tags } } });
      } }, n2 = new Ar.Pz({ ctx: e2.hostContext, metrics: r2, onStorageFault: t2 }), s2 = (0, w.qU)({ storageDir: e2.storageDir, storageObserver: n2.storageObserver });
      if (void 0 === s2) throw new Error("Host session storage requires a storage directory");
      const o2 = new dn({ storage: s2, log: (0, Ar.Qf)({ ctx: e2.hostContext, storageDir: e2.storageDir }), clock: e2.clock, instruments: n2, hasLiveSession: e2.hasLiveSession }), i2 = () => {
        return t3 = e2.creationSource, r3 = Of.existsSync(s2.sessionsDir), void 0 !== t3 || r3;
        var t3, r3;
      }, a2 = Hg({ shouldCompare: (t3) => void 0 !== e2.creationSource || o2.ownedSessionIds().length > 0 || o2.hasNativeCatalogEntries({ refresh: t3 }), registry: o2, storageRoot: e2.storageDir, currentEnablementSource: e2.creationSource ?? "sticky", glassWorkspaceRole: e2.glassWorkspaceRole }), l2 = (t3) => void 0 !== e2.creationSource || i2() && o2.hasNativeSession(t3);
      return { hostOptions: { storageDir: e2.storageDir, hostContext: e2.hostContext, onStorageFault: t2, metrics: r2, storage: s2 }, rejectHostOwnedLegacyBlobRead: () => n2.rejectHostOwnedLegacyBlobRead(), mergeSessionCatalog: (e3, t3, r3, n3) => {
        if (!i2()) return [...e3];
        const s3 = new Map(e3.map((e4) => [e4.sessionId, e4])), a3 = /* @__PURE__ */ new Set(), c2 = o2.listNativeCatalogEntries(t3, r3, (e4) => {
          a3.add(e4.sessionId);
          const t4 = lr(e4, s3.get(e4.sessionId));
          return false === n3?.(t4) ? void 0 : t4;
        }), l3 = new Set(c2.map((e4) => e4.sessionId)), u2 = e3.filter((e4) => l3.has(e4.sessionId) || !a3.has(e4.sessionId) && false !== n3?.(e4)), d2 = /* @__PURE__ */ new Map();
        for (const e4 of u2) void 0 !== e4.title && d2.set(e4.sessionId, e4.title);
        for (const e4 of c2) {
          const t4 = d2.get(e4.sessionId);
          void 0 === e4.title && void 0 !== t4 && o2.noteTitleChanged(e4.sessionId, t4);
        }
        return (function(e4, t4, r4) {
          const n4 = new Map(t4.map((e5) => [e5.sessionId, e5])), s4 = [], o3 = /* @__PURE__ */ new Set();
          for (const t5 of e4) {
            const e5 = n4.get(t5.sessionId);
            o3.add(t5.sessionId), s4.push(lr(t5, e5));
          }
          for (const e5 of t4) o3.has(e5.sessionId) || s4.push(e5);
          return s4.sort((e5, t5) => (t5.updatedAt ?? 0) - (e5.updatedAt ?? 0)), s4.slice(0, Math.max(0, r4));
        })(c2, u2, t3);
      }, noteTitleChanged: (e3, t3) => {
        l2(e3) && o2.noteTitleChanged(e3, t3);
      }, noteArchivedChanged: (e3, t3) => {
        l2(e3) && o2.noteArchivedChanged(e3, t3);
      }, onHostOwnedStorageChanged: (e3) => o2.onHostOwnedStorageChanged(e3), resolveBlobStore: (e3, t3) => o2.getPreparedBlobStore(e3) ?? t3(), consumePreparedSessionStore: o2.consumePreparedSessionStore.bind(o2), createSession: async (t3) => {
        const r3 = t3.options.sessionId;
        if (e2.hasLiveSession(r3) && !o2.hasPreparedSession(r3)) return t3.bindOptions(void 0), { prepared: void 0, alreadyExisted: true };
        const n3 = (r4) => (function(e3) {
          return void 0 !== e3.source && void 0 !== e3.initialHistory && fn({ catalogHydrate: e3.catalogHydrate, initialHistory: e3.initialHistory, migrateSettledHistory: true === e3.migrateOnOpen });
        })({ source: e2.creationSource, catalogHydrate: t3.catalogHydrate, initialHistory: r4, migrateOnOpen: e2.migrateOnOpen }), s3 = t3.options.initialHistory, i3 = n3(s3), a3 = t3.options.readCurrentHistory, c2 = i3 && void 0 !== s3 && !hn(s3) && void 0 !== a3 ? { readCurrentHistory: async () => await a3(), admitSeedHistory: n3 } : {}, l3 = await o2.prepareSession({ sessionId: r3, ...i3 && void 0 !== s3 ? { initialHistory: s3 } : {}, ...c2, ...void 0 === s3 ? {} : { surfaceHistory: s3 }, allowCreate: i3, workspacePaths: t3.options.workspacePaths, legacyGetBlob: async (e3) => await t3.options.getBlob(e3), mirror: async (e3) => {
          await t3.options.setBlob(e3);
        }, ctx: t3.ctx });
        t3.bindOptions(l3);
        try {
          await t3.createLiveSession(void 0 !== l3 || void 0 === t3.options.initialHistory || 0 === t3.options.initialHistory.byteLength ? void 0 : Ie.Y9z.fromBinary(t3.options.initialHistory), t3.catalogHydrate ? "seed" : "persist");
        } catch (e3) {
          if (e3 instanceof Error && /agent host session already exists/i.test(e3.message)) return o2.rollbackDanglingPreparedSession(r3) && t3.restoreRendererOptions(), { prepared: l3, alreadyExisted: true };
          throw t3.clearOptions(), o2.cleanupFailedSessionCreate(r3), e3;
        }
        return { prepared: l3, alreadyExisted: false };
      }, deleteSession: async (e3) => {
        try {
          await e3.deleteLiveSession();
        } catch (e4) {
          if (!(e4 instanceof Error && /agent host session not found/i.test(e4.message))) throw e4;
        }
        if (!o2.deleteSessionStorage(e3.sessionId)) throw new Error(`Failed to delete host-owned storage for session ${e3.sessionId}`);
      }, forkSession: async (t3) => void 0 !== e2.creationSource && o2.forkSession({ parentSessionId: t3.parentSessionId, sessionId: t3.sessionId, history: t3.history, ...void 0 === t3.workspacePaths ? {} : { workspacePaths: t3.workspacePaths }, ctx: t3.ctx }), dispose: () => {
        a2.dispose(), o2.dispose();
      } };
    }
    const Vg = 2048, Kg = /* @__PURE__ */ new Set(["blobEncryptionKey"]);
    function Yg(e2) {
      return JSON.stringify(e2, (e3, t2) => Kg.has(e3) && null != t2 ? "[redacted]" : "bigint" == typeof t2 ? t2.toString() : "string" == typeof t2 && t2.length > Vg ? `[truncated ${t2.length} bytes]` : t2) ?? "undefined";
    }
    function Zg(e2, t2) {
      let r2;
      try {
        r2 = Yg(t2());
      } catch (e3) {
        r2 = `[unserializable payload: ${e3 instanceof Error ? e3.message : String(e3)}]`;
      }
      ks.gW.trace(`${e2} ${r2}`);
    }
    function Xg(e2, t2) {
      Zg(e2, () => {
        return "object" == typeof (e3 = t2) && null !== e3 && "function" == typeof e3.toJson ? t2.toJson() : t2;
        var e3;
      });
    }
    function ey(e2, t2) {
      Zg(e2, () => (function(e3) {
        const t3 = { case: e3.event.case, value: e3.event.value?.toJson() };
        return void 0 !== e3.eventId && (t3.eventId = e3.eventId.toString()), t3;
      })(t2));
    }
    function ty(e2) {
      Zg("createSession", () => ({ sessionId: e2.sessionId, workspacePaths: e2.workspacePaths, worktreeMainPath: e2.worktreeMainPath, isGlassRoot: e2.isGlassRoot, initialHistoryBytes: e2.initialHistory?.byteLength }));
    }
    const ry = { get rpc() {
      return ks.gW.isTraceEnabled() ? Xg : void 0;
    }, get streamEvent() {
      return ks.gW.isTraceEnabled() ? ey : void 0;
    }, get createSession() {
      return ks.gW.isTraceEnabled() ? ty : void 0;
    } };
    var ny = __webpack_require__(47777), sy = __webpack_require__(42761);
    const oy = [{ name: "AgentHostFileNotFoundError", code: "FILE_NOT_FOUND", connectCode: ny.C.NotFound }, { name: "AgentHostFileChangedError", code: "FILE_CHANGED", connectCode: ny.C.DataLoss }, { name: "AgentHostFileOutOfRangeError", code: "FILE_OUT_OF_RANGE", connectCode: ny.C.OutOfRange }];
    function iy(e2) {
      if (null == e2) return String(e2);
      if ("object" == typeof e2) {
        const t2 = (function(e3) {
          if (!("getType" in e3)) return;
          const t3 = Reflect.get(e3, "getType");
          if ("function" != typeof t3) return;
          const r3 = t3.call(e3);
          if ("object" != typeof r3 || null === r3) return;
          if (!("typeName" in r3)) return;
          const n2 = Reflect.get(r3, "typeName");
          return "string" == typeof n2 && n2.length > 0 ? n2 : void 0;
        })(e2);
        if (void 0 !== t2) return t2;
        const r2 = e2.constructor.name;
        if (r2.length > 0 && "Object" !== r2) return r2;
      }
      return typeof e2;
    }
    function ay(e2) {
      if ("object" != typeof e2 || null === e2 || !("toJson" in e2)) return e2;
      const t2 = Reflect.get(e2, "toJson");
      if ("function" != typeof t2) return e2;
      try {
        return t2.call(e2);
      } catch {
        return e2;
      }
    }
    class cy {
      constructor(e2, t2) {
        this.inner = e2, this.log = t2;
      }
      get(e2) {
        const t2 = this.inner.get(e2);
        return "object" == typeof (r2 = t2) && null !== r2 && "execute" in r2 && "function" == typeof Reflect.get(r2, "execute") ? this.wrapExecutor(t2) : t2;
        var r2;
      }
      *entries() {
        for (const [e2] of this.inner.entries()) yield [e2, this.get(e2)];
      }
      wrapExecutor(e2) {
        const t2 = e2.execute.bind(e2), r2 = this.log, n2 = (e3, n3, s2) => {
          const o2 = iy(n3), i2 = ay(n3), a2 = performance.now();
          let c2;
          r2({ phase: "start", argsType: o2, args: i2 });
          try {
            c2 = t2(e3, n3, s2);
          } catch (e4) {
            throw r2({ phase: "error", argsType: o2, args: i2, error: e4, durationMs: performance.now() - a2 }), e4;
          }
          return "object" == typeof (l2 = c2) && null !== l2 && Symbol.asyncIterator in l2 && "function" == typeof Reflect.get(l2, Symbol.asyncIterator) ? /* @__PURE__ */ (function(e4, t3, r3, n4, s3) {
            return { async *[Symbol.asyncIterator]() {
              let o3 = 0;
              try {
                for await (const t4 of e4) o3 += 1, yield t4;
                t3({ phase: "ok", argsType: r3, args: n4, eventCount: o3, durationMs: performance.now() - s3 });
              } catch (e5) {
                throw t3({ phase: "error", argsType: r3, args: n4, error: e5, eventCount: o3, durationMs: performance.now() - s3 }), e5;
              }
            } };
          })(c2, r2, o2, i2, a2) : c2.then((e4) => (r2({ phase: "ok", argsType: o2, args: i2, result: ay(e4), durationMs: performance.now() - a2 }), e4), (e4) => {
            throw r2({ phase: "error", argsType: o2, args: i2, error: e4, durationMs: performance.now() - a2 }), e4;
          });
          var l2;
        };
        return new Proxy(e2, { get: (e3, t3, r3) => "execute" === t3 ? n2 : Reflect.get(e3, t3, r3) });
      }
    }
    function ly(e2) {
      let t2 = false, r2 = Promise.resolve();
      const n2 = (n3) => {
        const s3 = r2.then(async () => {
          t2 || await (async function(e3) {
            const t3 = void 0 !== e3.accessToken && e3.accessToken.length > 0, r3 = await e3.client.updateDaemonAuth(new f.IO({ accessToken: t3 ? e3.accessToken : "", issuedAtMs: e3.issuedAtMs, clientInstanceId: e3.clientInstanceId, signedOut: !t3 }));
            return { accepted: r3.accepted, hasToken: t3, ...void 0 === r3.rejectionReason || 0 === r3.rejectionReason.length ? {} : { rejectionReason: r3.rejectionReason } };
          })({ client: e2.client, clientInstanceId: e2.clientInstanceId, accessToken: n3, issuedAtMs: BigInt(Date.now()) });
        });
        return r2 = s3.catch((t3) => {
          e2.onError?.(t3);
        }), s3;
      }, s2 = n2(c.cursor.getCursorAuthToken()), o2 = c.cursor.onDidChangeCursorAuthToken((e3) => {
        n2(e3);
      });
      return { ready: s2, dispose() {
        t2 = true, o2.dispose();
      } };
    }
    const uy = "agent_host_local_loop", dy = "cursor_agent_host_move_exec", py = "cursor_agent_host_native_cloud_subagent", my = "cursor_agent_host_subagent_interactions", hy = "cursor_agent_host_owned_session_storage", fy = "cursor_agent_host_session_storage_migrate_on_open", gy = "agent_host_own_request_context";
    let yy, wy, vy, _y, Ay, Sy, by, Ey, Iy, Cy, ky = false;
    const xy = /* @__PURE__ */ new Map(), Ty = new l.R10();
    let Ry, By, Py, Jy, My, qy;
    function Dy(e2) {
      return xy.get(e2.sessionId) ?? xy.get(e2.rootSessionId) ?? (void 0 !== e2.parentSessionId ? xy.get(e2.parentSessionId) : void 0);
    }
    function Oy(e2) {
      return async () => e2();
    }
    const Ny = { now: () => Date.now(), schedule: (e2, t2) => {
      const r2 = setTimeout(t2, e2);
      return { dispose: () => clearTimeout(r2) };
    } };
    function Fy(e2) {
      const t2 = e2.parentConversationId?.trim(), r2 = e2.rootParentConversationId?.trim() || t2;
      if (void 0 === r2 || 0 === r2.length) throw new Error("Cloud subagent placement requires a parent agent-host session.");
      const n2 = Dy({ sessionId: t2 ?? r2, rootSessionId: r2, ...void 0 === t2 ? {} : { parentSessionId: t2 } });
      if (void 0 === n2) throw new Error(`No agent-host session options for cloud subagent parent ${r2}`);
      return n2.cloudSubagentBridge;
    }
    async function Uy(e2) {
      const t2 = Ly(e2);
      if (void 0 !== t2) return await t2({ toolCallId: e2.parentToolCallId, parentSessionId: e2.parentSessionId }) ?? void 0;
    }
    function Ly(e2) {
      const t2 = Dy({ sessionId: e2.parentSessionId, rootSessionId: e2.rootSessionId, parentSessionId: e2.parentSessionId });
      return t2?.findSubagentForToolCall;
    }
    async function $y(e2) {
      const t2 = Ly(e2);
      if (void 0 !== t2) return await t2({ toolCallId: e2.parentToolCallId, parentSessionId: e2.parentSessionId }) === e2.childSessionId;
    }
    function Qy(e2, t2) {
      void 0 !== wy && (function(e3, t3) {
        e3.register(l.ryB, { execute: async (e4, r3) => g.pT.fromBinary(await t3(r3.toBinary())) });
      })(t2, e2.conversationSearchHandler);
      const r2 = rs(t2, e2.requestContextHandler, ky ? { ownRequestContext: true } : void 0), n2 = (s2 = t2, void 0 === (o2 = (function() {
        if (ks.gW.isTraceEnabled()) return (e3) => {
          ks.gW.trace(`[exec] ${e3.phase} ${e3.argsType} ${Yg({ args: e3.args, result: e3.result, error: e3.error instanceof Error ? e3.error.message : e3.error, durationMs: e3.durationMs, eventCount: e3.eventCount })}`);
        };
      })()) ? s2 : new cy(s2, o2));
      var s2, o2;
      const i2 = { register: (e3, r3) => t2.register(e3, r3), get: (e3) => n2.get(e3), entries: () => n2.entries(), dispose: async () => {
        xy.delete(e2.sessionId), await t2.dispose?.();
      } };
      return void 0 !== r2 && (0, w.AO)(i2, r2), i2;
    }
    function jy(e2, t2, r2, n2) {
      if (void 0 === yy) throw new Error("Cursor agent runtime is not active");
      const s2 = yy.createAgentHostResourceProvider({ sessionId: e2.sessionId, approvalHandler: async (t3) => await e2.approvalHandler(t3), elicitationHandler: async (t3, r3, n3, s3) => await e2.mcpElicitationHandler(t3, r3, n3, s3), notifyFileChange: async (t3) => await e2.fileChangeHandler(t3), sessionWorkspacePaths: e2.workspacePaths, worktreeMainPath: e2.worktreeMainPath, getPermissions: async () => await e2.getPermissions(), onDidChangePermissions: e2.onDidChangePermissions, isGlassRoot: e2.isGlassRoot, backgroundWorkRegistry: t2, gitExecutor: r2, mcpLease: n2, conversationSearchHandler: async (t3) => await e2.conversationSearchHandler(t3) });
      return Qy(e2, s2);
    }
    function Gy(e2, t2) {
      if (void 0 === wy) throw new Error("agent-host-exec factory is not active");
      const r2 = (n2 = wy, (e3) => {
        return t3 = n2.createResources({ sessionId: e3.sessionId, rootSessionId: e3.rootSessionId, parentSessionId: e3.parentSessionId, backgroundWorkRegistry: e3.backgroundWorkRegistry, gitExecutor: e3.gitExecutor, mcpLease: e3.mcpLease, askHostQuestion: e3.askHostQuestion }), { register(e4, r3) {
          t3.register(e4, r3);
        }, get: (e4) => t3.get(e4), entries: () => t3.entries(), dispose: () => t3.dispose() };
        var t3;
      });
      var n2;
      return Qy(t2, r2(e2));
    }
    function Hy(e2) {
      const t2 = (0, w.CG)(e2);
      return { approvalHandler: (e3) => t2({ toolCallId: e3.toolCallId, ...e3.operation }), mcpElicitationHandler: (0, w.JY)(e2) };
    }
    function zy(e2) {
      return async (t2, r2) => {
        if ("execApproval" === r2.case) {
          const t3 = r2.value.operation?.details, n3 = await e2.approvalHandler({ toolCallId: r2.value.toolCallId, operation: { type: t3?.case, details: t3?.value?.toJson() } });
          return { case: "execApproval", value: new f.k2(n3.approved ? { approved: true } : { approved: false, reason: n3.reason }) };
        }
        const n2 = r2.value, s2 = await e2.mcpElicitationHandler(n2.serverName, n2.toolName, n2.toolCallId, { message: n2.elicitation?.message ?? "", requestedSchema: JSON.parse(n2.elicitation?.requestedSchemaJson || '{"type":"object"}') }), o2 = { accept: f.M.ACCEPT, decline: f.M.DECLINE, cancel: f.M.CANCEL }[s2.action];
        return { case: "mcpElicitation", value: new f.vG({ action: o2, ...void 0 === s2.content ? {} : { content: y.Struct.fromJson(s2.content) } }) };
      };
    }
    function Wy(e2) {
      return (0, ss.BS)(e2, c.workspace.workspaceFolders);
    }
    function Vy(e2) {
      return e2.toBinary();
    }
    const Ky = (0, Df.y2)({ channel: ks.gW, storageChannel: ks.nx, structuredWarn: (e2, t2) => c.cursor.logStructuredWarn(ks.XX, e2, (0, ks.QE)(t2), ks.bn), structuredError: (e2, t2, r2) => c.cursor.logStructuredError(ks.XX, e2, t2, (0, ks.QE)(r2), ks.bn), structuredTransport: ks.so });
    let Yy;
    const Zy = (0, d.q6)().with(p._O, Ky);
    function Xy() {
      const e2 = Yy?.((0, d.q6)());
      return (e2 ?? (0, d.q6)()).with(p._O, (0, Df.yT)(e2?.get(p._O), Ky));
    }
    function ew(e2) {
      if (e2.ok || !("gatewayRetry" in e2)) {
        const t3 = e2.ok ? Mn(e2.catalog) : { ...Mn(void 0), configError: e2.configErrorDetail };
        return { current: () => t3, onDidChange: void 0, dispose: () => {
        } };
      }
      const { gatewayRetry: t2 } = e2, r2 = new c.EventEmitter(), n2 = t2.onDidSettle(() => {
        const e3 = t2.state();
        "active" === e3.kind ? ks.gW.info(`Private inference gateway answered; construction active (${(0, En.Je)(e3.catalog)})`) : "waiting" !== e3.kind && ks.gW.error(`Private inference unusable — turns will fail: ${e3.detail}`), r2.fire();
      });
      return { current: () => {
        const e3 = t2.state();
        switch (e3.kind) {
          case "waiting":
            return { ...Mn(void 0), waitingForGateway: true };
          case "active":
            return Mn(e3.catalog);
          case "gave-up":
          case "failed":
            return { ...Mn(void 0), configError: e3.detail };
        }
      }, onDidChange: r2.event, dispose: () => {
        n2.dispose(), r2.dispose(), t2.dispose();
      } };
    }
    async function tw(t2, r2) {
      const n2 = await Tf();
      if (void 0 !== n2) {
        const e2 = await (async function(e3) {
          if ("fail-closed" === e3.decision.kind || "enrollment-pending" === e3.decision.kind) return Ln(e3.decision.configErrorDetail, e3.routing);
          const { configFile: t3 } = e3.decision, r3 = async (r4) => {
            const n4 = await (0, En._x)({ configFile: t3, env: e3.env, ...void 0 !== e3.onCatalogParsed ? { onCatalogParsed: e3.onCatalogParsed } : {}, ...void 0 !== r4 ? { probeTimeoutMs: r4 } : {} });
            return { catalog: n4, sessionProvider: (0, En.uK)(n4, { onGatewayRequest: e3.onGatewayRequest }) };
          }, n3 = new bn.Zy((0, bn.Po)({ isDevelopmentBuild: true === e3.isDevelopmentBuild, env: e3.env }) ? { writeSnapshot: oe.ynu } : {}), s3 = (e4) => n3.report(e4);
          try {
            const t4 = await r3(), { catalog: o3, sessionProvider: i3 } = t4;
            return { ok: true, catalog: o3, createAgentHost: mt({ sessionProvider: i3, catalog: o3, routing: e3.routing, promptQualityCaptures: n3 }), promptQualityReport: s3, generateChatTitle: _n({ hydration: async () => t4, routing: e3.routing }) };
          } catch (t4) {
            if (t4 instanceof En.ng) {
              const o3 = (0, Sn.x$)({ baseUrl: t4.baseUrl, hydrate: r3 });
              return { ok: false, configErrorDetail: t4.message, gatewayRetry: o3, createAgentHost: mt({ sessionProvider: void 0, catalog: void 0, gatewayRetry: o3, routing: e3.routing, promptQualityCaptures: n3 }), promptQualityReport: s3, generateChatTitle: _n({ hydration: An(o3), routing: e3.routing }) };
            }
            return Ln(t4 instanceof Error ? t4.message : String(t4), e3.routing);
          }
        })({ decision: n2.decision, env: process.env, routing: n2.routing, onCatalogParsed: rw, isDevelopmentBuild: t2, onGatewayRequest: (e3) => ks.Wo.info((function(e4) {
          const t3 = (e5) => void 0 === e5 ? "-" : `${Math.round(e5)}ms`;
          return ["[private-inference] gateway request", `req=${e4.requestId}`, `attempt=${e4.attempt}#${e4.requestIndex}`, `gateway_req=${e4.gatewayRequestId ?? "-"}`, `model=${e4.modelId ?? "-"}`, `status=${e4.httpStatus ?? "-"}`, `outcome=${e4.outcome}${void 0 === e4.errorName ? "" : ` (${e4.errorName})`}`, `ttfb=${t3(e4.ttfbMs)}`, `first_event=${t3(e4.firstEventMs)}`, `first_content=${t3(e4.firstContentMs)}`, `stream=${t3(e4.streamMs)}`, `total=${t3(e4.totalMs)}`, `output_tokens=${e4.outputTokens ?? "-"}`, `tokens_per_s=${void 0 === e4.outputTokensPerSecond ? "-" : (Math.round(10 * e4.outputTokensPerSecond) / 10).toString()}`].join(" ");
        })(e3)) });
        if (e2.ok) {
          const r3 = (0, bn.Po)({ isDevelopmentBuild: t2, env: process.env });
          ks.gW.info(`Private inference construction active (${(0, En.Je)(e2.catalog)}; model requests retained in memory for Export Transcript${r3 ? `, and written as local snapshots (dev build, ${bn.DA}=1)` : ""})`);
        } else "gatewayRetry" in e2 ? ks.gW.warn(`${e2.configErrorDetail} Retrying for up to ${Sn._9 / 6e4} minutes; turns fail until it answers.`) : "enrollment-pending" === n2.decision.kind ? ks.gW.info("Private inference enrollment not yet known; turns route once membership lands") : ks.gW.error(`Private inference unusable — turns will fail: ${e2.configErrorDetail}`);
        return { createAgentHost: e2.createAgentHost, loop: "private-inference", privateInferenceCatalog: "enrollment-pending" === n2.decision.kind ? void 0 : ew(e2), ..."promptQualityReport" in e2 ? { promptQualityReport: e2.promptQualityReport } : {}, ..."generateChatTitle" in e2 ? { privateInferenceChatTitle: e2.generateChatTitle } : {} };
      }
      let s2 = false;
      try {
        s2 = await c.cursor.checkFeatureGate(uy);
      } catch (e2) {
        ks.gW.error("Failed to evaluate agent_host_local_loop; using backend NAL", e2);
      }
      const o2 = () => ({ remoteName: c.env.remoteName, updateMode: c.workspace.getConfiguration().get(Hn), clientUpdateMode: c.workspace.getConfiguration().get(zn), env: process.env, isGateOn: () => c.cursor.checkFeatureGate(jn) });
      let i2 = true;
      const a2 = await Xn({ ...o2(), isDevelopment: t2, devKeySwitch: process.argv.includes(w.zC), clientVersion: c.cursorVersion, enabled: () => i2, readTiming: () => c.cursor.getDynamicConfigValue(Gn), globalStoragePath: r2, appRoot: c.env.appRoot, log: ks.gW, loopLogContext: Xy, onModuleReverted: (e2) => {
        const t3 = (function(e3) {
          if (e3.channel !== Yn) return;
          const t4 = e3.fallback.builtIn ? "the built-in agent module" : `agent module ${e3.fallback.label} (${e3.fallback.version})`;
          return `Agent module ${e3.label} (${e3.version}) kept failing, so this window switched to ${t4}. Report it in #agent-host-releases.`;
        })(e2);
        void 0 !== t3 && c.window.showWarningMessage(t3);
      } }), l2 = void 0 === a2 ? void 0 : () => (function(e2, t3, r3) {
        let n3 = true, s3 = 0;
        const o3 = async () => {
          const o4 = ++s3, i3 = await Zn(e2());
          if (o4 !== s3) return;
          if ("unknown" in i3) return void ks.gW.warn(`[agent-harness] ${i3.unknown}; staying ${n3 ? "on" : "off"}`);
          if ("on" in i3 === n3) return;
          n3 = !n3, t3(n3);
          const a3 = "on" in i3 ? `on again (${"env" === i3.on ? `${Wn}=1` : `${jn} gate`})` : `off (${i3.off})`, c2 = "turns" === r3 ? "on" in i3 ? "what current names serves from the next turn" : "the built-in module serves from the next turn" : "on" in i3 ? "the sidecar announces this host and loads what current names" : "the sidecar returns to the built-in module and takes the host descriptor back; no turn was ever served from it";
          ks.gW.info(`[agent-harness] ${a3}; ${c2}`);
        };
        return o3(), c.Disposable.from(c.workspace.onDidChangeConfiguration((e3) => {
          (e3.affectsConfiguration(Hn) || e3.affectsConfiguration(zn)) && o3();
        }), c.cursor.onDidChangeGates((e3) => {
          (void 0 === e3.changedGates || e3.changedGates.includes(jn)) && o3();
        }));
      })(o2, (e2) => {
        i2 = e2, Ey?.poll();
      }, s2 ? "turns" : "validate-only");
      return s2 ? (ks.gW.info("Using managed local-loop runtime"), void 0 === a2 ? { createAgentHost: pt, loop: "local-loop", privateInferenceCatalog: void 0 } : { createAgentHost: (e2) => pt({ ...e2, agentHarness: a2 }), loop: "local-loop", privateInferenceCatalog: void 0, agentHarnessSwitch: l2 }) : void 0 === a2 ? { createAgentHost: w.wB, loop: "backend", privateInferenceCatalog: void 0 } : { createAgentHost: w.wB, loop: "backend", privateInferenceCatalog: void 0, agentHarnessSwitch: l2, validateAgentHarness: (t3) => (ks.gW.info("[agent-harness] validate-only: the backend host serves every turn; the agent harness runs beside it"), (function(t4) {
        const r3 = (e2) => t4.log(`[agent-harness] ${e2}`), n3 = t4.timing?.pollIntervalMs;
        return ut({ loader: rt.uU.shared({ ...t4, staticFloor: e, log: r3 }), log: r3, ...void 0 === t4.metrics ? {} : { metrics: t4.metrics }, loopLogContext: t4.loopLogContext, ..."number" == typeof n3 ? { pollIntervalMs: n3 } : {} });
      })({ ...a2, ...void 0 === t3 ? {} : { metrics: t3 } })) };
    }
    function rw(e2) {
      const t2 = (0, gn.getPrivateInferenceHttpGuard)();
      if (void 0 !== t2) for (const r2 of (0, dt.$B)(e2)) t2.allowBaseUrl(r2);
    }
    async function nw(e2, t2) {
      const [r2, n2] = (function(e3) {
        const t3 = Xy();
        return void 0 === e3 ? t3 : (0, m.F)(e3, void 0, t3);
      })(t2).withCancel();
      try {
        return await e2(r2, n2);
      } finally {
        n2();
      }
    }
    async function sw(e2) {
      if (e2.subscriptions.push({ dispose: () => ks.gW.dispose() }), e2.subscriptions.push({ dispose: () => ks.nx.dispose() }), c.cursor.cursorAgentHostEnabled) return (0, gn.installPrivateInferenceHttpGuard)({ enablement: Bf(), cursorBackendUrls: () => [c.cursor.getCursorCreds()?.backendUrl], log: ks.gW }), (async function(e3) {
        try {
          return await e3.work();
        } catch (t2) {
          try {
            await e3.onRollback?.();
          } catch {
          }
          throw es("overlay", e3.takeOverlay, e3.onDisposeError), es("lease", e3.takeLease, e3.onDisposeError), t2;
        }
      })({ takeOverlay: () => {
        const e3 = vy;
        return vy = void 0, e3;
      }, takeLease: () => {
        const e3 = _y;
        return _y = void 0, e3;
      }, onDisposeError: (e3, t2) => {
        ks.gW.error(`Error while disposing MCP ${e3} during activation rollback`, t2);
      }, onRollback: async () => {
        const e3 = yy;
        yy = void 0;
        try {
          await e3?.deactivate();
        } catch (e4) {
          ks.gW.error("Error while deactivating cursor-agent-exec runtime during activation rollback", e4);
        }
        const t2 = Ay;
        Ay = void 0;
        try {
          t2?.dispose();
        } catch (e4) {
          ks.gW.error("Error while disposing hosted MCP routing adapter during activation rollback", e4);
        }
        const r2 = Iy;
        Iy = void 0;
        try {
          r2?.dispose();
        } catch (e4) {
          ks.gW.error("Error while disposing host session storage during activation rollback", e4);
        }
        const n2 = qy;
        qy = void 0, n2?.();
        const s2 = My;
        My = void 0, s2?.dispose();
        const o2 = Jy;
        Jy = void 0;
        try {
          o2?.close();
        } catch (e4) {
          ks.gW.error("Error while closing move_exec connect-only client during activation rollback", e4);
        }
      }, work: () => (async function(e3) {
        ks.gW.info("Activating agent host extension");
        const t2 = Date.now();
        let r2;
        const n2 = new Promise((e4) => {
          r2 = e4;
        }), s2 = tw(e3.isDevelopment, e3.globalStorageUri.fsPath);
        s2.catch(() => {
        });
        const [l2, p2, g2, y2, v2, _2, A2, S2, b2, E2] = await Promise.all([Promise.resolve(c.cursor.checkFeatureGate(dy)).catch(() => false), Promise.resolve(c.cursor.checkFeatureGate(uy)).catch(() => false), Promise.resolve(c.cursor.checkFeatureGate(jn)).catch(() => false), Promise.resolve(c.cursor.checkFeatureGate(py)).catch(() => false), Promise.resolve(c.cursor.checkFeatureGate(my)).catch(() => false), Promise.resolve(c.cursor.checkFeatureGate(hy)).catch(() => false), Promise.resolve(c.cursor.checkFeatureGate(fy)).catch(() => false), (0, qs.r)(c.cursor), Promise.resolve(c.cursor.checkFeatureGate(gy)).catch(() => false), Promise.resolve(c.cursor.getDynamicConfigValue("local_subagent_limits")).catch(() => {
        })]);
        ky = true === b2;
        const I2 = l2 || p2, C2 = (x2 = { gate: _2, envValue: process.env.CURSOR_AGENT_HOST_OWNED_SESSION_STORAGE, configValue: c.workspace.getConfiguration("cursorAgentHost").get("experimentalHostOwnedSessionStorage") }, x2.gate ? "gate" : Nf(x2.envValue, void 0) ? "env" : Nf(void 0, x2.configValue) ? "setting" : void 0), k2 = Uf({ gate: A2, envValue: process.env.CURSOR_AGENT_HOST_MIGRATE_ON_OPEN, storageSource: C2 });
        var x2;
        if (l2 && e3.extensionMode !== c.ExtensionMode.Test) try {
          const { connectProductDaemon: t3 } = await Promise.all([__webpack_require__.e(21), __webpack_require__.e(865), __webpack_require__.e(113), __webpack_require__.e(607)]).then(__webpack_require__.bind(__webpack_require__, 13607)), { resolveSandboxHelperPath: r3 } = await __webpack_require__.e(746).then(__webpack_require__.bind(__webpack_require__, 12746));
          Jy = await t3({ extensionPath: e3.extensionPath, localLoopEnabled: p2, updaterEnabled: g2, nativeCloudSubagentsEnabled: y2, globalState: e3.globalState, apiEndpoint: c.cursor.getCursorCreds()?.backendUrl, ripgrepPath: c.cursor.rgPath, sandboxHelperPath: r3(e3.extensionPath) }), ks.gW.info(`move_exec product handshake ok (pid ${String(Jy.info.processPid)}, local_loop ${p2 ? "ON" : "OFF"}, updater ${g2 ? "ON" : "OFF"})`);
        } catch (e4) {
          ks.gW.error("move_exec product handshake failed; staying on in-process provider", e4);
        }
        ks.gW.info("Native cloud subagent ownership " + (y2 ? "enabled" : "disabled")), ks.gW.info("Hosted MCP routing " + (S2 ? "ON" : "OFF")), ks.gW.info("Subagent interaction policy: " + (v2 ? "surface-to-user (question/plan/MCP auth/SCM connect on child; web search/fetch on parent; compatibility stubs rejected)" : "auto-reject (default)"));
        const T2 = new qf(e3), R2 = Wy(void 0), B2 = (function(e4) {
          const t3 = e4[0], r3 = "rootWorkspace" === c.cursor.glassWorkspaceRole ? c.cursor.workspaceId() : (0, a.join)(i.tmpdir(), o.randomUUID());
          return (0, h.Xq)(t3 ?? r3);
        })(R2);
        let P2, J2, M2, q2;
        const D2 = async (e4, t3 = "live") => {
          const { createIdeHostedMcpRoutingProvider: r3 } = await Promise.all([__webpack_require__.e(88), __webpack_require__.e(947)]).then(__webpack_require__.bind(__webpack_require__, 69947));
          return q2 = r3({ lease: e4, gates: c.cursor, initialGateValue: S2, flipOnPolicy: t3, onDidChangeRoutingActive: (e5) => {
            const t4 = { live: e5 };
            c.commands.executeCommand(u.T8, t4);
          }, remoteName: mo(c.env).remoteName, deviceTag: `ide:${c.env.machineId}`, metrics: { distribution: (e5) => c.cursor.metricsDistribution({ stat: e5.stat, value: e5.value, ...void 0 === e5.tags ? {} : { tags: { ...e5.tags } } }) }, log: (e5) => ks.gW.info(e5) }), Ay = q2, q2;
        };
        let O2, N2, F2, U2, L2, $2, Q2, j2;
        if (I2) {
          let t3, r3, s3;
          const o2 = Date.now(), { createIdeObservabilityActivate: a2 } = await Promise.all([__webpack_require__.e(88), __webpack_require__.e(106)]).then(__webpack_require__.bind(__webpack_require__, 9106));
          t3 = a2({ workspacePaths: R2, activationStartMs: o2 }), j2 = t3, Yy = (e4) => t3.attachToTurnContext(e4), Py = () => {
            Yy = void 0, t3.dispose();
          };
          try {
            P2 = await (0, ks.H1)("Failed to create IDE git executor", () => (async function(e4 = {}) {
              if (e4.extensionIsolationEnabled ?? await Promise.resolve(c.cursor.getCursorExtensionsIsolationEnabled()).catch(() => false)) {
                const s5 = e4.createGitSpawner ?? (async () => {
                  try {
                    const e5 = await _s(ks.gW);
                    return new Cs({ gitPath: e5.path, onLog: (e6) => ks.gW.trace(`[git] ${e6.trimEnd()}`) });
                  } catch (e5) {
                    return void ks.gW.error("Failed to create GitSpawner for isolated git executor", e5);
                  }
                }), o5 = e4.parentCtx;
                if (void 0 !== o5) {
                  var t4 = [];
                  try {
                    return Rs(t4, (0, m.VI)(o5.withName("fetch git (isolation)"))), new Ms(s5());
                  } catch (e5) {
                    var r4 = e5, n3 = true;
                  } finally {
                    Bs(t4, r4, n3);
                  }
                }
                return new Ms(s5());
              }
              const s4 = e4.getGitAPI ?? Ps, o4 = e4.parentCtx;
              let i2;
              if (void 0 !== o4) {
                var a4 = [];
                try {
                  Rs(a4, (0, m.VI)(o4.withName("fetch git (no isolation)"))), i2 = await s4();
                } catch (e5) {
                  var l3 = e5, u3 = true;
                } finally {
                  Bs(a4, l3, u3);
                }
              } else i2 = await s4();
              return void 0 === i2 && ks.gW.error("Failed to find a Git API."), new Js(i2);
            })());
            const o3 = await (0, ks.H1)("Failed to create IDE MCP provider", () => ao(t3.activationCtx));
            _y = o3, J2 = await D2(o3);
            const { pushExecActivationRequestContext: a3 } = await __webpack_require__.e(324).then(__webpack_require__.bind(__webpack_require__, 51324));
            a3({ projectDir: B2, workspacePath: R2[0] });
            const { createIdeSessionResourceOverlay: u2, createIdeTeamSettingsService: h2, getOrCreateIdeIgnoreService: f2 } = await __webpack_require__.e(807).then(__webpack_require__.bind(__webpack_require__, 36807)), { registerCursorIgnoreFileWatcher: g3 } = await __webpack_require__.e(933).then(__webpack_require__.bind(__webpack_require__, 54933)), { VscodeFileChangeTracker: y3 } = await __webpack_require__.e(165).then(__webpack_require__.bind(__webpack_require__, 95165)), { createIdeDiskExtensibility: w2 } = await Promise.all([__webpack_require__.e(21), __webpack_require__.e(88), __webpack_require__.e(334), __webpack_require__.e(102), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 60077)), { configureRipgrepWithStartupDiagnostics: v3 } = await __webpack_require__.e(349).then(__webpack_require__.bind(__webpack_require__, 9349)), { registerWebpCodecWithStartupDiagnostics: _3 } = await __webpack_require__.e(524).then(__webpack_require__.bind(__webpack_require__, 29524)), { createIdePluginsActivate: A3 } = await Promise.all([__webpack_require__.e(21), __webpack_require__.e(334), __webpack_require__.e(102), __webpack_require__.e(817)]).then(__webpack_require__.bind(__webpack_require__, 52817)), { createIdeAgentStoreActivate: S3 } = await Promise.all([__webpack_require__.e(21), __webpack_require__.e(334), __webpack_require__.e(488)]).then(__webpack_require__.bind(__webpack_require__, 98488)), { glassRootAdditionalRules: b3 } = await __webpack_require__.e(859).then(__webpack_require__.bind(__webpack_require__, 89859)), { createIdeHooksWrap: E3 } = await Promise.all([__webpack_require__.e(88), __webpack_require__.e(265)]).then(__webpack_require__.bind(__webpack_require__, 96265)), { createIdeShellActivate: I3 } = await __webpack_require__.e(821).then(__webpack_require__.bind(__webpack_require__, 92821)), { createIdeMcpActivate: C3 } = await __webpack_require__.e(721).then(__webpack_require__.bind(__webpack_require__, 65721)), { createIdeGrepSessionOverrides: k3 } = await __webpack_require__.e(620).then(__webpack_require__.bind(__webpack_require__, 80620)), x3 = h2(), T3 = /* @__PURE__ */ new Map(), q3 = /* @__PURE__ */ new Map();
            e3.subscriptions.push(g3(() => T3.values()));
            const L3 = c.cursor.rgPath;
            L3 || ks.gW.warn("vscode.cursor.rgPath is unset; agent-host-exec will fall back to colocated/system/PATH ripgrep"), v3((0, d.q6)(), e3), _3((0, d.q6)());
            const j3 = f2({ gitExecutor: P2, workspacePaths: R2, teamSettingsService: x3, ignoreServiceCache: T3 }), G3 = await A3({ context: e3, workspacePaths: R2, gitExecutor: P2, appendLine: (e4) => ks.gW.info(e4) });
            e3.subscriptions.push({ dispose: () => G3.dispose() });
            const H3 = await S3({ context: e3, projectDir: B2, appendLine: (e4) => ks.gW.info(e4), whenProviderRegistered: n2 }), { setHostCanvasAgentStoreFilesDirsHook: z3 } = await __webpack_require__.e(130).then(__webpack_require__.bind(__webpack_require__, 49130)), { getPeerAgentStoreFilesDirs: W3, getUserAgentStoreFilesDirsReady: V3 } = await Promise.all([__webpack_require__.e(21), __webpack_require__.e(334)]).then(__webpack_require__.bind(__webpack_require__, 7334));
            z3({ getPeerAgentStoreFilesDirs: W3, getReplicaAgentStoreFilesDirs: V3 }), qy = () => {
              z3(void 0);
            }, Ry = () => (qy = void 0, z3(void 0), H3.dispose());
            const K3 = await w2({ workspacePaths: R2, gitExecutor: P2, ignoreService: j3, appendLine: (e4) => ks.gW.info(e4), ripgrepPath: L3 || void 0, extensionPath: e3.extensionPath, globalStoragePath: e3.globalStorageUri.fsPath, pluginsService: G3.pluginsService, getAgentStoreSkillsContext: () => H3.getAgentStoreSkillsContext(), whenProviderRegistered: n2, onDidChangeAgentStoreSkillRoots: (e4) => H3.onDidChangeSkillRoots(e4) });
            if (e3.subscriptions.push({ dispose: () => K3.dispose() }), l2) {
              const { createIdeCanvasActivate: t4 } = await Promise.all([__webpack_require__.e(21), __webpack_require__.e(334), __webpack_require__.e(570), __webpack_require__.e(850)]).then(__webpack_require__.bind(__webpack_require__, 65850));
              r3 = t4({ context: e3, projectDir: B2, logContext: Xy() }), Q2 = r3;
            } else if (p2) {
              const { createIdeCanvasDiagnostics: t4 } = await Promise.all([__webpack_require__.e(570), __webpack_require__.e(921)]).then(__webpack_require__.bind(__webpack_require__, 77921)), r4 = c.extensions.getExtension("anysphere.cursor-agent-exec")?.extensionPath;
              s3 = t4({ projectDir: B2, execExtensionPath: r4 ?? e3.extensionPath, logContext: Xy() });
            }
            const { createAgentHostExec: Y3 } = await __webpack_require__.e(88).then(__webpack_require__.bind(__webpack_require__, 75088)), Z3 = await E3({ parentCtx: Xy(), sessionOverlayDisposables: q3 });
            e3.subscriptions.push({ dispose: () => Z3.dispose() });
            const X3 = await I3({ extensionPath: e3.extensionPath, projectDir: B2, workspacePaths: R2, teamSettingsService: x3 });
            e3.subscriptions.push({ dispose: () => X3.dispose() });
            const ee3 = await C3({ mcpLease: J2, projectDir: B2 });
            vy = ee3, wy = Y3({ workspacePaths: R2, projectDir: B2, ripgrepPath: L3 || void 0, network: "inherit", resourceDefaults: { cursorRulesService: K3.cursorRulesService, subagentsService: K3.subagentsService, repositoryProvider: K3.codebaseReferenceProvider, getAgentSkills: (e4) => K3.getAgentSkills(e4), ...ee3.resourceDefaults, ...r3?.resourceDefaults ?? {}, ...s3?.resourceDefaults ?? {} }, configureSession: (e4) => {
              const t4 = Dy(e4);
              if (void 0 === t4) throw new Error(`No exec configuration for session ${e4.sessionId}`);
              const r4 = { ...t4, ...Hy(e4.askHostQuestion) }, n3 = Wy(r4.workspacePaths), s4 = (0, ss.x3)(n3, i.homedir()), o4 = u2({ session: r4, gitExecutor: e4.gitExecutor, workspacePaths: s4, teamSettingsService: x3, ignoreServiceCache: T3, mcpAllowlistLog: (e5) => c.cursor.logMcpAllowlist(e5) });
              let a4;
              try {
                a4 = X3.createSessionOverrides({ sessionId: e4.sessionId, rootSessionId: e4.rootSessionId, workspacePaths: s4, backgroundWorkRegistry: e4.backgroundWorkRegistry });
              } catch (e5) {
                throw o4.dispose(), e5;
              }
              const l3 = ee3.createSessionOverrides({ session: r4 }), d2 = k3({ ignoreService: o4.ignoreService, workspacePaths: s4, worktreeMainPath: r4.worktreeMainPath }), p3 = H3.createSessionOverrides({ sessionId: e4.sessionId, workspacePaths: s4 });
              (0, ns.Dp)(q3, e4.sessionId, () => {
                a4.dispose(), o4.dispose();
              });
              const m2 = new y3(async (e5) => {
                e5.metadata?.toolCallId && await r4.fileChangeHandler({ path: e5.path, before: e5.before, after: e5.after, metadata: { toolCallId: e5.metadata.toolCallId } });
              }), h3 = b3(r4.isGlassRoot);
              return { workspacePaths: o4.executionWorkspacePaths, overrides: { ignoreService: o4.ignoreService, pendingDecisionStore: o4.pendingDecisionStore, permissionsService: o4.permissionsService, getSandboxEnabled: o4.getSandboxEnabled, fileChangeTracker: m2, worktreeMainPath: r4.worktreeMainPath, useStreamingRead: () => true, additionalRules: 0 === h3.length ? void 0 : h3, ...a4.overrides, ...l3.overrides, ...d2.overrides, ...p3.overrides } };
            }, wrapResources: (e4) => {
              const t4 = Z3.wrapResources(e4), r4 = H3.wrapResources({ args: e4.args, accessor: t4.accessor });
              return { accessor: r4.accessor, dispose: () => {
                r4.dispose?.(), t4.dispose?.();
              } };
            } }), X3.configureSandboxHelper(), O2 = { defaultPolicyType: X3.defaultPolicyType, helperConfigured: X3.helperConfigured, networkWatcherRegistered: X3.networkWatcherRegistered, backgroundShellProviderRegistered: X3.backgroundShellProviderRegistered, shellOutputBackpressureEnabled: X3.shellOutputBackpressureEnabled }, N2 = ee3.snapshot, F2 = { ...G3.snapshot, skillsIpcRegistered: true }, U2 = H3.snapshot, $2 = t3.snapshot, ks.gW.info(`using @anysphere/agent-host-exec for session resources (move_exec ${l2 ? "ON" : "OFF"}, local_loop ${p2 ? "ON" : "OFF"}; no cursor-agent-exec runtime)`), M2 = { moveExecEnabled: l2, gitExecutorOwner: "host", mcpProviderOwner: "host", resourceConstruction: "agent-host-exec", runtimeExtensionPath: e3.extensionPath, subagentTranscriptsProjectDir: B2 };
          } catch (e4) {
            throw Yy = void 0, Py = void 0, t3.dispose(), j2 = void 0, r3?.dispose(), Q2 = void 0, e4;
          }
        } else {
          try {
            const { createLiveExecRuntime: e4 } = await Promise.resolve().then(__webpack_require__.bind(__webpack_require__, 71385));
            yy = await e4();
          } catch (e4) {
            e4 instanceof Error && e4.message === co.oD && (0, ks.EW)(co.oD), (0, ks.EW)("Failed to acquire shared agent runtime from cursor-agent-exec", e4);
          }
          const t3 = yy, r3 = await (async function(e4) {
            if (e4.routingGateAtActivation) {
              const t5 = await e4.createIdeMcpLease();
              e4.onHostLeaseBuilt(t5);
              const r4 = await e4.attachRouting(t5, "live");
              await e4.activateExec({ mcpProvider: r4 });
              const n4 = e4.getExecMcpProvider();
              return to(n4) && n4 === r4 || e4.fail("cursor-agent-exec activate did not adopt the host-injected MCP provider"), { wiring: "host_injected", mcpProvider: r4 };
            }
            await e4.activateExec({});
            const t4 = e4.getExecMcpProvider();
            return to(t4) || e4.fail("cursor-agent-exec activate did not expose a valid MCP provider"), { wiring: "exec_owned", mcpProvider: await e4.attachRouting(t4, "next_launch") };
          })({ routingGateAtActivation: S2, createIdeMcpLease: () => (0, ks.H1)("Failed to create IDE MCP provider", () => ao(Zy)), onHostLeaseBuilt: (e4) => {
            _y = e4;
          }, activateExec: (r4) => t3.activate(e3, { registerAgentExecProvider: false, runtimeExtensionPath: t3.extensionPath, ...r4 }), getExecMcpProvider: () => t3.getMcpProvider(), attachRouting: D2, fail: (e4) => (0, ks.EW)(e4) }), n3 = t3.getGitExecutor();
          void 0 === n3 && (0, ks.EW)("cursor-agent-exec activate did not expose a git executor"), P2 = n3, J2 = r3.mcpProvider, ks.gW.info("host_injected" === r3.wiring ? "Acquired shared agent runtime from cursor-agent-exec (move_exec OFF; reusing exec IDE git, host-built IDE MCP lease injected)" : "Acquired shared agent runtime from cursor-agent-exec (move_exec OFF; reusing exec IDE git and MCP; routing gate off at activation)"), M2 = { moveExecEnabled: false, gitExecutorOwner: "exec", mcpProviderOwner: "exec", resourceConstruction: "cursor-agent-exec", runtimeExtensionPath: yy.extensionPath, subagentTranscriptsProjectDir: B2 };
        }
        const G2 = { createOrResumeCloudSubagent: async (e4, t3) => Fy(t3).createOrResumeCloudSubagent(t3.toBinary(), e4.signal), runCloudSubagent: async (e4, t3, r3) => {
          const n3 = await Fy(r3).runCloudSubagent(t3, r3.toBinary(), e4.signal);
          return JSON.parse(new TextDecoder().decode(n3));
        } }, { createAgentHost: H2, loop: z2, privateInferenceCatalog: W2, promptQualityReport: V2, privateInferenceChatTitle: K2, agentHarnessSwitch: Y2, validateAgentHarness: Z2 } = await s2;
        void 0 !== W2 && e3.subscriptions.push(W2);
        void 0 !== Y2 && e3.subscriptions.push(Y2());
        "backend" === z2 && e3.subscriptions.push((function() {
          let e4 = false;
          return c.cursor.onDidChangeGates((t3) => {
            (void 0 === t3.changedGates || t3.changedGates.includes(uy)) && Promise.resolve(c.cursor.checkFeatureGate(uy)).then((t4) => {
              const r3 = t4 && !e4;
              e4 = t4, r3 && ks.gW.warn(`${uy} turned on after activation; this host was built without the local loop, so turns stay on the backend loop until the window reloads`);
            }, (e5) => {
              ks.gW.warn(`Failed to re-read ${uy} after a gate change: ${e5 instanceof Error ? e5.message : String(e5)}`);
            });
          });
        })());
        if ((function(e4) {
          return true === e4.moveExecEnabled && !e4.extensionModeIsTest && true === e4.connectSucceeded && !e4.privateInference && "win32" !== (e4.platform ?? process.platform);
        })({ moveExecEnabled: l2, extensionModeIsTest: e3.extensionMode === c.ExtensionMode.Test, connectSucceeded: void 0 !== Jy, privateInference: void 0 !== W2 })) {
          const e4 = Jy, n3 = ly({ client: e4.client, clientInstanceId: e4.clientInstanceId, onError: (e5) => {
            ks.gW.error("Failed to push IDE auth to agent-host-daemon", e5);
          } });
          My = n3, await n3.ready;
          const { createDaemonAgentHostProvider: s3 } = await Promise.all([__webpack_require__.e(113), __webpack_require__.e(914)]).then(__webpack_require__.bind(__webpack_require__, 41914)), o2 = s3({ client: e4.client, clientInstanceId: e4.clientInstanceId, loop: z2, hostedMcpRoutingEnabled: () => q2.sessionRoutingEnabled(), workspacePaths: () => R2 });
          if (void 0 !== Q2) {
            const e5 = Q2;
            try {
              e5.register(), Cy = c.cursor.registerAgentHostProvider(o2), By = () => {
                e5.dispose();
              }, L2 = e5.snapshot;
            } catch (t3) {
              throw e5.dispose(), Q2 = void 0, By = void 0, Yy = void 0, Py = void 0, j2?.dispose(), j2 = void 0, Cy?.dispose(), Cy = void 0, t3;
            }
          } else try {
            Cy = c.cursor.registerAgentHostProvider(o2);
          } catch (e5) {
            throw Yy = void 0, Py = void 0, j2?.dispose(), j2 = void 0, e5;
          }
          return r2(), j2?.markActivationComplete(), c.cursor.metricsDistribution({ stat: "agent_host.startup.timeToBridgeRegisterMs", value: Date.now() - t2 }), void ks.gW.info(`move_exec ON: registered DaemonAgentHostProvider (pid ${String(e4.info.processPid)})`);
        }
        const X2 = Date.now(), { remoteName: ee2 } = mo(c.env), te2 = (function(e4, t3) {
          return t3 && !ho(e4);
        })(ee2, y2), re2 = (oe2 = c.workspace.getConfiguration("cursorAgentHost").get(go), "always" === oe2 || "never" === oe2 || "auto" === oe2 ? oe2 : wo), ne2 = (function(e4) {
          return "string" == typeof (t3 = e4.remoteName) && t3.length > 0 ? void 0 !== e4.privateInferenceCatalog ? { route: e4.route, probe: false, initialKind: "builtin", ignoreOnLocal: false, failClosedPrivateInference: "always" === e4.route } : "always" === e4.route ? { route: "always", probe: false, initialKind: "external", ignoreOnLocal: false, failClosedPrivateInference: false } : "never" === e4.route ? { route: "never", probe: false, initialKind: "builtin", ignoreOnLocal: false, failClosedPrivateInference: false } : { route: "auto", probe: true, initialKind: void 0, ignoreOnLocal: false, failClosedPrivateInference: false } : { route: e4.route, probe: false, initialKind: "builtin", ignoreOnLocal: "auto" !== e4.route, failClosedPrivateInference: false };
          var t3;
        })({ remoteName: ee2, route: re2, privateInferenceCatalog: W2 }), se2 = (function(e4, t3, r3 = "auto") {
          return ho(e4) && void 0 === t3 && "auto" === r3;
        })(ee2, W2, ne2.route);
        var oe2;
        ks.gW.info(`AgentService remote egress route=${ne2.route} probe=${se2} remoteName=${void 0 === ee2 ? "<unset>" : JSON.stringify(ee2)}`);
        const ie2 = { credentialManager: new Mf(), clientIdentity: { clientType: "ide" }, createNetworkHost: (e4) => (0, w.Z5)(T2, { clientIdentity: e4.clientIdentity }) };
        void 0 !== W2 && q2.disableRouting("private_inference");
        let ae2 = q2.wrapNetwork({ kind: "builtin", ...ie2 });
        ne2.ignoreOnLocal && ks.gW.info(`${yo}=${ne2.route} is ignored on local windows`);
        ho(ee2) && void 0 !== W2 && ks.gW.info("Private inference is active on this remote; AgentService stays on the remote builtin path");
        ne2.failClosedPrivateInference && ks.gW.info(`${yo}=always is ignored on this private-inference remote; AgentService stays on the remote builtin path (external skips CPI)`);
        const ce2 = ho(ee2) ? (0, vo.UD)({ metricsIncrement: (e4, t3) => c.cursor.metricsIncrement({ stat: e4, value: 1, tags: t3 }), info: (e4) => ks.gW.info(e4), structuredInfo: (e4, t3) => c.cursor.logStructuredInfo(ks.XX, e4, (0, ks.QE)(t3), ks.bn) }) : void 0;
        if ("external" === ne2.initialKind) {
          (await __webpack_require__.e(173).then(__webpack_require__.bind(__webpack_require__, 93173))).createRemoteEgressFailoverReporter({ info: (e4) => ks.gW.info(e4), structuredWarn: (e4, t3) => c.cursor.logStructuredWarn(ks.XX, e4, (0, ks.QE)(t3), ks.bn), metricsIncrement: (e4, t3) => c.cursor.metricsIncrement({ stat: e4, value: 1, tags: t3 }), captureException: (e4) => c.cursor.captureException(new Error("agent_host_remote_egress_failover"), { feature: "agent_host", reason: e4 }, { extra: { reason: e4 }, level: "warning", fingerprint: ["agent_host_remote_egress_failover", e4] }) }).announce("setting_always"), ce2?.emit({ kind: "external", source: "setting", reason: vo.YR }), ae2 = fo({ connectTransport: c.cursor.connectTransport, createExternal: w._9 });
        } else if (se2) {
          const e4 = await __webpack_require__.e(173).then(__webpack_require__.bind(__webpack_require__, 93173)), t3 = await __webpack_require__.e(580).then(__webpack_require__.bind(__webpack_require__, 29580)), r3 = await __webpack_require__.e(432).then(__webpack_require__.bind(__webpack_require__, 93432)), n3 = e4.createRemoteEgressFailoverReporter({ info: (e5) => ks.gW.info(e5), structuredWarn: (e5, t4) => c.cursor.logStructuredWarn(ks.XX, e5, (0, ks.QE)(t4), ks.bn), metricsIncrement: (e5, t4) => c.cursor.metricsIncrement({ stat: e5, value: 1, tags: t4 }), captureException: (e5) => c.cursor.captureException(new Error("agent_host_remote_egress_failover"), { feature: "agent_host", reason: e5 }, { extra: { reason: e5 }, level: "warning", fingerprint: ["agent_host_remote_egress_failover", e5] }) }), s3 = t3.createRemoteEgressKindLatch({ onExternal: (e5) => n3.announce(e5), onDecision: (e5) => ce2?.emit(e5) });
          (async () => {
            const t4 = await e4.loadServerAgentnUrlOverlay(() => T2.getCachedServerConfigJson());
            try {
              const r4 = await e4.probeRemoteAgentBackendEgress({ remoteName: ee2, creds: c.cursor.getCursorCreds(), http2Disabled: T2.isHttp2Disabled(), ...void 0 === t4 ? {} : { serverAgentnUrl: t4 }, loadSystemCertificates: () => T2.loadSystemCertificates() });
              s3.applyProbeResult(r4);
            } catch (e5) {
              const t5 = e5 instanceof Error ? e5.message : String(e5);
              ks.gW.info(`agent host: remote egress probe did not finish (${t5})`);
            }
          })(), ae2 = { kind: "builtin", ...ie2, wrapAgentTransport: (e5) => t3.createRemoteEgressLatchedTransport({ builtin: e5, latch: s3, createExternal: () => (0, w._9)(c.cursor.connectTransport) }), wrapInferenceTransport: (e5) => r3.createRemoteEgressLatchedInferenceTransport({ builtin: e5, latch: s3, createExternal: () => c.cursor.connectTransport, onInferenceHop: (e6) => {
            ks.gW.info(`agent host: local-loop inference hops to the local client (${e6}); AgentService stays on the remote`), n3.announce(e6);
          } }) };
        } else void 0 !== ce2 && ce2.emit({ kind: "builtin", source: "setting", reason: vo.YR });
        ho(ee2) && !te2 && y2 && ks.gW.info("Native cloud subagents stay on the renderer runner for this remote host (no construct throw, no window reload)");
        const le2 = e3.globalStorageUri.fsPath, ue2 = Wg({ storageDir: le2, hostContext: () => Zy, creationSource: C2, migrateOnOpen: void 0 !== k2, clock: Ny, glassWorkspaceRole: c.cursor.glassWorkspaceRole, hasLiveSession: (e4) => Sy?.hasHostedSession(e4) ?? false });
        Iy = ue2, void 0 !== C2 ? (ks.gW.info(`Host-owned session storage enabled by the ${C2}: new chats get per-session stores under the extension's global storage, mirrored to the renderer`), void 0 !== k2 ? ks.gW.info(`Host-owned session storage migrate-on-open enabled by the ${k2}: a settled renderer-owned chat gets a host-owned store when it opens`) : ks.gW.info("Host-owned session storage migrate-on-open disabled: renderer-owned chats with turns stay renderer-owned")) : ks.gW.info("Host-owned session storage creation disabled: committed host-owned chats still reopen and mirror to the renderer");
        try {
          Sy = await (0, ks.H1)("Failed to create agent host", () => H2({ surfaceOwnsBackgroundWakeups: true, ...ky ? { ownRequestContext: true, prefetchFileAccess: ht() } : {}, getSendNowBehavior: () => "steer" === c.workspace.getConfiguration().get("cursor.composer.queueManualSendBehavior2") ? "steer" : "interrupt", ...void 0 === j2 ? {} : { attachLocalLoopAttemptContext: $n(j2) }, ...ue2.hostOptions, readPrivateInferenceEnrollment: xf, network: ae2, gitExecutor: P2, mcpProvider: J2, sessionCatalog: { listSessions: async (e4, t3, r3) => {
            const n3 = (0, w.Tz)(t3?.limit), s3 = (await c.cursor.listAgentHostSessionCatalog(n3)).map((e5) => ({ sessionId: e5.sessionId, ...void 0 === e5.title ? {} : { title: e5.title }, ...void 0 === e5.updatedAt ? {} : { updatedAt: e5.updatedAt }, ...void 0 === e5.modelId ? {} : { modelId: e5.modelId }, ...void 0 === e5.workspace ? {} : { workspace: e5.workspace } }));
            return ue2.mergeSessionCatalog(s3, n3, e4, r3);
          }, ensureLoaded: async (e4, t3) => c.cursor.ensureAgentHostSessionLoaded(t3), setTitle: async (e4, t3, r3) => {
            ue2.noteTitleChanged(t3, r3), await c.cursor.projectAgentHostSessionTitle(t3, r3);
          }, onTitleChanged: (e4) => {
            const t3 = c.cursor.onDidChangeAgentHostSessionCatalogTitle((t4) => {
              ue2.noteTitleChanged(t4.sessionId, t4.title), e4(t4.sessionId, t4.title);
            });
            return () => {
              t3.dispose();
            };
          }, onArchivedChanged: (e4) => {
            const t3 = c.cursor.onDidChangeAgentHostSessionCatalogArchived((t4) => {
              ue2.noteArchivedChanged(t4.sessionId, t4.isArchived), e4(t4.sessionId, t4.isArchived);
            });
            return () => {
              t3.dispose();
            };
          }, onHostOwnedStorageChanged: (e4) => ue2.onHostOwnedStorageChanged(e4), onModelChanged: (e4) => {
            const t3 = c.cursor.onDidChangeAgentHostSessionCatalogModel((t4) => {
              e4(t4.sessionId, t4.modelId);
            });
            return () => {
              t3.dispose();
            };
          } }, workspaceCatalog: { listWorkspaces: async () => c.cursor.listAgentHostWorkspaceCatalog() }, userHomeDirectory: i.homedir(), ...te2 ? { nativeCloudSubagents: { logWarning: (e4) => ks.gW.warn(e4), logTrace: (e4) => ks.gW.trace(e4) } } : { cloudSubagentRunner: G2 }, cloudSubagentsUnavailableReason: () => "disabled" !== Bf().state ? "Cloud subagents are turned off under private inference. Contact your administrator for more." : void 0, resolveSavedModelParameters: (e4) => (async function(e5, t3) {
            const r3 = e5.parentSessionId.trim(), n3 = e5.rootSessionId.trim() || r3;
            if (0 === n3.length) return;
            const s3 = t3.resolveCreateOptions({ sessionId: r3 || n3, rootSessionId: n3, ...0 === r3.length ? {} : { parentSessionId: r3 } });
            return void 0 !== s3?.getSavedModelParameters ? await s3.getSavedModelParameters(e5.modelId, e5.maxMode) : void 0;
          })(e4, { resolveCreateOptions: Dy }), resolveRequiredGlobalCommands: (e4) => (async function(e5, t3) {
            const r3 = e5.parentSessionId.trim(), n3 = e5.rootSessionId.trim() || r3;
            if (0 === n3.length) return;
            const s3 = t3.resolveCreateOptions({ sessionId: r3 || n3, rootSessionId: n3, ...0 === r3.length ? {} : { parentSessionId: r3 } });
            return void 0 !== s3?.getRequiredGlobalCommands ? await s3.getRequiredGlobalCommands(e5.subagentType) : void 0;
          })(e4, { resolveCreateOptions: Dy }), findExistingSubagentSessionId: Uy, durableSubagentInvocations: uo(e3.workspaceState, $y), ...void 0 === E2 ? {} : { localSubagentLimits: { maxRunning: E2.maxRunning } }, subagentsAsSessions: true, subagentTranscripts: { projectDir: B2 }, ...v2 ? { subagentInteractionPolicy: f.w3.SURFACE_TO_USER } : {}, createBlobStore: (e4) => ue2.resolveBlobStore(e4, () => {
            const t3 = Dy(e4);
            if (void 0 === t3) throw new Error(`No agent-host session options for ${e4.sessionId}`);
            return (0, gt.V)({ getBlob: async (e5, r3) => {
              try {
                const n3 = await t3.getBlob(r3);
                return (0, yt.g)(e5, "renderer_callback", void 0 === n3 ? "miss" : "hit"), n3;
              } catch (t4) {
                throw (0, yt.g)(e5, "renderer_callback", "error"), t4;
              }
            }, setBlob: async (e5, r3, n3) => {
              await t3.setBlob({ blobId: r3, blobData: n3, locallyOnly: false });
            }, setBlobLocallyOnly: async (e5, r3, n3) => {
              await t3.setBlob({ blobId: r3, blobData: n3, locallyOnly: true });
            }, flush: (e5) => Promise.resolve() }, "renderer_callback");
          }), createSessionStore: (e4) => ue2.consumePreparedSessionStore(e4.sessionId), createResources: (e4) => {
            const t3 = Dy(e4);
            if (void 0 === t3) throw new Error(`No agent-host session options for ${e4.sessionId}`);
            const r3 = { ...t3, sessionId: e4.sessionId, ...e4.sessionId === e4.rootSessionId ? {} : { requestContextHandler: void 0 } };
            return void 0 !== wy ? Gy(e4, r3) : jy({ ...r3, ...Hy(e4.askHostQuestion) }, e4.backgroundWorkRegistry, e4.gitExecutor, e4.mcpLease);
          } }));
        } catch (e4) {
          throw Yy = void 0, Py = void 0, j2?.dispose(), j2 = void 0, Q2?.dispose(), e4;
        }
        ks.gW.info(`Agent host storage ready ${e3.globalStorageUri.fsPath}`);
        const de2 = { loop: z2, createSession: async (e4) => nw(async (t3) => {
          const r3 = true === e4.catalogHydrate;
          let n3;
          r3 || ry.createSession?.(e4);
          try {
            n3 = await ue2.createSession({ ctx: t3, options: e4, catalogHydrate: r3, bindOptions: (t4) => {
              xy.set(e4.sessionId, void 0 === t4 ? e4 : { ...e4, getBlob: Oy(ue2.rejectHostOwnedLegacyBlobRead) });
            }, restoreRendererOptions: () => {
              xy.set(e4.sessionId, e4);
            }, clearOptions: () => {
              xy.delete(e4.sessionId);
            }, createLiveSession: async (r4, n4) => {
              await Sy.createSession(t3, { sessionId: e4.sessionId, initialHistory: r4, sessionOptions: { workspacePaths: e4.workspacePaths, hostedMcpRoutingEnabled: q2.sessionRoutingEnabled(), ...void 0 === e4.worktreeMainPath ? {} : { worktreeMainPath: e4.worktreeMainPath }, ...void 0 === e4.isGlassRoot ? {} : { isGlassRoot: e4.isGlassRoot }, ...void 0 === e4.owningProject ? {} : { owningProject: e4.owningProject } } }, { initialHistoryMode: n4 });
            } });
          } catch (t4) {
            (0, ks.EW)(`Failed to create agent host session ${e4.sessionId}`, t4);
          }
          return n3.alreadyExisted || r3 && void 0 === n3.prepared || ks.gW.info(`Created agent host session ${e4.sessionId}${void 0 === n3.prepared ? "" : ` (host-owned storage: ${n3.prepared.kind})`}${r3 ? " (catalog hydrate)" : ""}`), Vy(new f.R1());
        }), listSessions: async (e4) => nw(async (t3) => {
          const r3 = f.cK.fromBinary(e4);
          ry.rpc?.("listSessions", r3);
          const n3 = await Sy.listSessions(t3, r3);
          return Vy(new f.Qk({ sessions: n3.sessions }));
        }), listWorkspaces: async (e4) => nw(async (t3) => {
          const r3 = f.XO.fromBinary(e4);
          ry.rpc?.("listWorkspaces", r3);
          const n3 = await Sy.listWorkspaces(t3, r3);
          return Vy(new f.LX({ workspaces: n3.workspaces }));
        }), async *watchSessions(e4, t3) {
          const [r3, n3] = Xy().withCancel(), s3 = f.N9.fromBinary(e4);
          ry.rpc?.("watchSessions", s3), t3.isCancellationRequested && n3();
          const o2 = t3.onCancellationRequested(() => n3());
          try {
            for await (const e5 of Sy.watchSessions(r3, s3)) {
              const t4 = new f.cy(e5);
              ry.streamEvent?.("watchSessions.event", t4), yield Vy(t4);
            }
          } finally {
            o2.dispose(), n3();
          }
        }, sendMessage: async (e4, t3) => nw(async (t4) => {
          const r3 = f.AY.fromBinary(e4);
          return ry.rpc?.("sendMessage", r3), (0, m.uj)(t4.withName("agent_host.send_message"), async (e5) => {
            const t5 = await (0, ks.H1)(`Failed to send message to agent host session ${r3.sessionId}`, () => Sy.sendMessage(e5, r3));
            return Vy(new f.Ot({ turnId: t5.turnId, deliveredAs: t5.deliveredAs }));
          });
        }, t3), async offerRequestContextOverlay(e4, t3) {
          ky && 0 !== e4.length && Sy.offerRequestContextOverlay?.(e4, f.hV.fromBinary(t3));
        }, sendAction: async (e4, t3) => nw(async (t4) => {
          const r3 = f.J6.fromBinary(e4);
          ry.rpc?.("sendAction", r3);
          const n3 = r3.turnOptions?.generationUuid;
          return ky && void 0 !== n3 && n3.length > 0 && "userMessageAction" === r3.action?.action.case && Sy.expectRequestContextOverlay?.(n3), (0, m.uj)(t4.withName("agent_host.send_action"), async (e5) => {
            const t5 = await (0, ks.H1)(`Failed to send action to agent host session ${r3.sessionId}`, () => Sy.sendAction(e5, (0, w.Gh)(r3)));
            return Vy(new f.Jn({ turnId: t5.turnId, deliveredAs: t5.deliveredAs }));
          });
        }, t3), deleteSession: async (e4) => nw(async (t3) => {
          const r3 = f.mq.fromBinary(e4);
          ry.rpc?.("deleteSession", r3);
          try {
            await ue2.deleteSession({ sessionId: r3.sessionId, deleteLiveSession: async () => {
              await Sy.deleteSession(t3, r3);
            } });
          } catch (e5) {
            (0, ks.EW)(`Failed to delete agent host session ${r3.sessionId}`, e5);
          }
          return ks.gW.info(`Deleted agent host session ${r3.sessionId}`), Vy(new f.mY());
        }), interruptTurn: async (e4) => nw(async (t3) => {
          const r3 = f.ty.fromBinary(e4);
          ry.rpc?.("interruptTurn", r3);
          const n3 = await Sy.interruptTurn(t3, r3);
          return Vy(new f.n4({ interrupted: n3.interrupted }));
        }), cancelQueuedTurn: async (e4) => nw(async (t3) => {
          const r3 = f.To.fromBinary(e4);
          ry.rpc?.("cancelQueuedTurn", r3);
          const n3 = await Sy.cancelQueuedTurn(t3, r3);
          return Vy(new f.ZS({ cancelled: n3.cancelled }));
        }), setSessionTitle: async (e4) => nw(async (t3) => {
          ry.rpc?.("setSessionTitle", e4), await Sy.setSessionTitle(t3, e4);
        }), fetchPrivateInferenceCatalog: async () => W2?.current(), onDidChangePrivateInferenceCatalog: W2?.onDidChange, fetchPromptQualityReport: async (e4) => V2?.(e4.conversationId), async generatePrivateInferenceChatTitle(e4, t3) {
          if (void 0 !== K2) return (async function(e5, t4, r3) {
            const n3 = Date.now(), s3 = (e6) => `[private-inference] chat title conversation=${t4.conversationId} model=${t4.modelId} outcome=${e6} total=${Date.now() - n3}ms`, o2 = new AbortController(), i2 = r3.onCancellationRequested(() => o2.abort());
            r3.isCancellationRequested && o2.abort();
            try {
              const r4 = await e5(t4, o2.signal);
              return ks.gW.info(s3(void 0 === r4 ? "no-name" : "named")), r4;
            } catch (e6) {
              return void ks.gW.warn(s3(o2.signal.aborted ? "cancelled" : `failed (${e6 instanceof Error ? `${e6.name}: ${e6.message}` : String(e6)})`));
            } finally {
              i2.dispose();
            }
          })(K2, e4, t3);
        }, forkSession: async (e4) => nw(async (t3) => {
          const r3 = await ue2.forkSession({ ctx: t3, ...e4 });
          return r3 && ks.gW.info(`Forked agent host session ${e4.parentSessionId} into ${e4.sessionId} (host-owned storage seeded from the cut)`), r3;
        }), respondToInteraction: async (e4) => nw(async (t3) => {
          const r3 = f.nK.fromBinary(e4);
          ry.rpc?.("respondToInteraction", r3);
          const { sessionId: n3, interactionId: s3, answer: o2 } = r3;
          if (void 0 === o2.case) throw new Error("Agent-host interaction response request must carry an answer");
          const i2 = await Sy.respondToInteraction(t3, { sessionId: n3, interactionId: s3, answer: o2 });
          return Vy(new f.Th({ status: i2.status }));
        }), async *watchSessionInteractions(e4, t3) {
          const [r3, n3] = Xy().withCancel(), s3 = f.X7.fromBinary(e4);
          ry.rpc?.("watchSessionInteractions", s3), t3.isCancellationRequested && n3();
          const o2 = t3.onCancellationRequested(() => n3());
          try {
            for await (const e5 of Sy.watchSessionInteractions(r3, s3)) {
              const t4 = new f.Mt(e5);
              ry.streamEvent?.("watchSessionInteractions.event", t4), yield Vy(t4);
            }
          } finally {
            o2.dispose(), n3();
          }
        }, async *watchSessionBackgroundWork(e4, t3) {
          const [r3, n3] = Xy().withCancel(), s3 = f.j$.fromBinary(e4);
          ry.rpc?.("watchSessionBackgroundWork", s3), t3.isCancellationRequested && n3();
          const o2 = t3.onCancellationRequested(() => n3());
          try {
            for await (const e5 of Sy.watchSessionBackgroundWork(r3, { sessionId: s3.sessionId, kind: s3.kind, state: s3.state, ownerId: s3.ownerId })) {
              const t4 = new f.Ml(e5);
              ry.streamEvent?.("watchSessionBackgroundWork.event", t4), yield Vy(t4);
            }
          } finally {
            o2.dispose(), n3();
          }
        }, async *watchSessionTurnLifecycle(e4, t3) {
          const [r3, n3] = Xy().withCancel(), s3 = f.X.fromBinary(e4);
          ry.rpc?.("watchSessionTurnLifecycle", s3), t3.isCancellationRequested && n3();
          const o2 = t3.onCancellationRequested(() => n3());
          try {
            for await (const e5 of Sy.watchSessionTurnLifecycle(r3, s3)) {
              const t4 = new f.m$(e5);
              ry.streamEvent?.("watchSessionTurnLifecycle.event", t4), yield Vy(t4);
            }
          } finally {
            o2.dispose(), n3();
          }
        }, abortBackgroundWork: async (e4) => nw(async (t3) => {
          const r3 = f.c_.fromBinary(e4);
          ry.rpc?.("abortBackgroundWork", r3);
          const n3 = await Sy.abortBackgroundWork(t3, r3);
          return Vy(new f.k4({ aborted: n3.aborted }));
        }), abortAllBackgroundWork: async (e4) => nw(async (t3) => {
          const r3 = f.vC.fromBinary(e4);
          ry.rpc?.("abortAllBackgroundWork", r3);
          const n3 = await Sy.abortAllBackgroundWork(t3, { sessionId: r3.sessionId, kind: r3.kind, state: r3.state, ownerId: r3.ownerId });
          return Vy(new f.fF({ abortedCount: n3.abortedCount }));
        }), async *attachSession(e4, t3) {
          const [r3, n3] = Xy().withCancel(), s3 = f.EM.fromBinary(e4);
          ry.rpc?.("attachSession", s3), t3.isCancellationRequested && n3();
          const o2 = t3.onCancellationRequested(() => n3());
          try {
            for await (const e5 of Sy.attachSession(r3, s3)) {
              const t4 = new f.cp(e5);
              ry.streamEvent?.("attachSession.event", t4), yield Vy(t4);
            }
          } finally {
            o2.dispose(), n3();
          }
        }, getSessionBlobs: async (e4) => nw(async (t3) => {
          const r3 = f.z4.fromBinary(e4);
          ry.rpc?.("getSessionBlobs", { sessionId: r3.sessionId, blobIdCount: r3.blobIds.length, maxResponseBytes: r3.maxResponseBytes?.toString() });
          const n3 = await Sy.getSessionBlobs(t3, r3);
          return Vy(new f.NY(n3));
        }), async *readFile(e4, t3) {
          const [r3, n3] = Xy().withCancel(), s3 = f.Xi.fromBinary(e4);
          ry.rpc?.("readFile", { readOffset: s3.readOffset.toString(), readLimit: s3.readLimit.toString(), revalidating: void 0 !== s3.cachedMtimeMs }), t3.isCancellationRequested && n3();
          const o2 = t3.onCancellationRequested(() => n3());
          try {
            for await (const e5 of Sy.readFile(r3, s3)) yield Vy(new f.JK(e5));
          } catch (e5) {
            throw (function(e6) {
              if (!(e6 instanceof Error)) return e6;
              const t4 = e6.code, r4 = oy.find((r5) => r5.name === e6.name || r5.code === t4);
              return void 0 !== r4 ? new sy.T(e6.message, r4.connectCode, void 0, void 0, e6) : "AbortError" === e6.name ? new sy.T(e6.message, ny.C.Canceled, void 0, void 0, e6) : e6;
            })(e5);
          } finally {
            o2.dispose(), n3();
          }
        } };
        if (void 0 !== Q2) {
          const e4 = Q2;
          try {
            e4.register(), Cy = c.cursor.registerAgentHostProvider(de2), By = () => {
              e4.dispose();
            }, L2 = e4.snapshot;
          } catch (t3) {
            throw e4.dispose(), Q2 = void 0, By = void 0, Yy = void 0, Py = void 0, j2?.dispose(), j2 = void 0, Cy?.dispose(), Cy = void 0, t3;
          }
        } else try {
          Cy = c.cursor.registerAgentHostProvider(de2);
        } catch (e4) {
          throw Yy = void 0, Py = void 0, j2?.dispose(), j2 = void 0, e4;
        }
        pe2 = Sy, c.cursor.setAgentHostServingModule(pe2.servingModule?.()), void (by = pe2.onDidChangeServingModule?.((e4) => {
          c.cursor.setAgentHostServingModule(e4);
        })), void 0 !== Z2 && (Ey = Z2(ue2.hostOptions.metrics));
        var pe2;
        if (r2(), j2?.markActivationComplete(), c.cursor.metricsDistribution({ stat: "agent_host.startup.timeToBridgeRegisterMs", value: Date.now() - t2 }), c.cursor.metricsDistribution({ stat: "agent_host.startup.createHostToRegisterMs", value: Date.now() - X2 }), ks.gW.info(`Created agent host and registered provider (network kind: ${ae2.kind}, timeToBridgeRegisterMs: ${Date.now() - t2})`), e3.extensionMode !== c.ExtensionMode.Test) return;
        return { execWiring: M2, execRuntime: yy, provider: de2, ...void 0 === O2 ? {} : { moveExecShell: O2 }, ...void 0 === N2 ? {} : { moveExecMcp: N2 }, ...void 0 === F2 ? {} : { moveExecPlugins: F2 }, ...void 0 === U2 ? {} : { moveExecAgentStore: U2 }, ...void 0 === L2 ? {} : { moveExecCanvas: L2 }, ...void 0 === $2 ? {} : { moveExecObservability: $2 }, createSessionResources: (e4) => (xy.set(e4.sessionId, e4), void 0 !== wy ? Gy({ sessionId: e4.sessionId, rootSessionId: e4.sessionId, backgroundWorkRegistry: Ty, gitExecutor: P2, mcpLease: J2, askHostQuestion: zy(e4) }, e4) : jy(e4, void 0, P2, J2)) };
      })(e2) });
      ks.gW.info("Agent host is disabled (cursorAgentHostEnabled gate off); skipping activation");
    }
    async function ow() {
      ks.gW.info("Deactivating agent host extension");
      const e2 = My;
      My = void 0, e2?.dispose();
      const t2 = Jy;
      Jy = void 0;
      try {
        t2?.close();
      } catch (e3) {
        ks.gW.error("Error while closing move_exec connect-only client during deactivation", e3);
      }
      Cy?.dispose(), Cy = void 0;
      const r2 = Ey;
      Ey = void 0;
      try {
        r2?.dispose();
      } catch (e3) {
        ks.gW.error("Error while stopping the validate-only agent harness during deactivation", e3);
      }
      const n2 = Sy;
      Sy = void 0;
      try {
        await n2?.dispose(), xy.clear();
      } catch (e3) {
        (0, ks.EW)("Error while disposing agent host during deactivation", e3);
      } finally {
        by?.(), by = void 0;
        const e3 = Iy;
        Iy = void 0;
        try {
          e3?.dispose();
        } catch (e4) {
          ks.gW.error("Error while disposing host session storage during deactivation", e4);
        }
        const t3 = vy;
        vy = void 0;
        try {
          t3?.dispose();
        } catch (e4) {
          ks.gW.error("Error while disposing MCP overlay during deactivation", e4);
        }
        const r3 = Ry;
        if (Ry = void 0, void 0 !== r3) try {
          await r3();
        } catch (e4) {
          ks.gW.error("Error while disposing move_exec agent-store harness during deactivation", e4);
        }
        const n3 = wy;
        wy = void 0;
        try {
          await n3?.dispose();
        } catch (e4) {
          ks.gW.error("Error while disposing agent-host-exec during deactivation", e4);
        }
        const s2 = By;
        By = void 0;
        try {
          s2?.();
        } catch (e4) {
          ks.gW.error("Error while disposing canvas overlay during deactivation", e4);
        }
        const o2 = Py;
        Py = void 0;
        try {
          o2?.();
        } catch (e4) {
          ks.gW.error("Error while disposing observability overlay during deactivation", e4);
        }
        const i2 = yy;
        yy = void 0;
        try {
          await i2?.deactivate();
        } catch (e4) {
          ks.gW.error("Error while deactivating cursor-agent-exec runtime during deactivation", e4);
        }
        const a2 = Ay;
        Ay = void 0;
        try {
          a2?.dispose();
        } catch (e4) {
          ks.gW.error("Error while disposing hosted MCP routing adapter during deactivation", e4);
        }
        const c2 = _y;
        _y = void 0;
        try {
          c2?.dispose();
        } catch (e4) {
          ks.gW.error("Error while disposing MCP lease during deactivation", e4);
        }
        Rf?.dispose(), Rf = void 0;
      }
    }
  })();
  var __webpack_export_target__ = exports;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  __webpack_exports__.__esModule && Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
})();
