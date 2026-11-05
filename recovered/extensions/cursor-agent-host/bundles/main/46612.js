// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 46612 range:7913659..7924412
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
46612: (e, t, r) => {
    "use strict";
    r.d(t, { R2: () => B, hj: () => N, bL: () => O });
    var n = r(17392), s = r(37949), o = r(33002), i = r(98875), a = r(60431), c = r(46144), l = r(17714), u = r(4410), d = r(67918), p = r(8032), m = r(40328), h = r(41303), f = r(86928), g = r(56151), y = r(33624), w = r(56215), v = r(70656), _ = r(48826), A = r(1368);
    function S({ wrapper: e2, inner: t2, mapThrown: r2 = (e3) => e3 }) {
      const n2 = t2.return?.bind(t2);
      void 0 !== n2 && (e2.return = n2);
      const s2 = t2.throw?.bind(t2);
      return void 0 !== s2 && (e2.throw = (e3) => s2(r2(e3))), e2;
    }
    var b, E, I, C, k = function(e2, t2, r2, n2) {
      if ("a" === r2 && !n2) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof t2 ? e2 !== t2 || !n2 : !t2.has(e2)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === r2 ? n2 : "a" === r2 ? n2.call(e2) : n2 ? n2.value : t2.get(e2);
    };
    class x {
      constructor() {
        b.add(this), E.set(this, /* @__PURE__ */ new Map());
      }
      recordSent(e2) {
        const t2 = (function(e3) {
          if ("conversationAction" !== e3.message.case) return;
          const t3 = e3.message.value.action;
          return "injectContextAction" === t3.case && "" !== t3.value.injectionId ? t3.value.injectionId : void 0;
        })(e2);
        void 0 !== t2 && k(this, E, "f").set(t2, { frame: e2, state: "settled" });
      }
      beginCall() {
        const e2 = [];
        for (const [t3, r2] of k(this, E, "f")) "settled" !== r2.state && (k(this, E, "f").set(t3, { frame: r2.frame, state: "handedOver", ack: r2.ack }), e2.push(r2.frame));
        const t2 = { handedOver: e2, admit: (e3) => k(this, b, "m", I).call(this, t2, e3), end: () => k(this, b, "m", C).call(this, t2) };
        return t2;
      }
      unclaimedAcks() {
        return [...k(this, E, "f").values()].flatMap((e2) => "settled" === e2.state ? [] : [e2.ack.update]);
      }
    }
    E = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakSet(), I = function(e2, t2) {
      const r2 = (function(e3) {
        if ("interactionUpdate" !== e3.message.case) return;
        const t3 = e3.message.value;
        return "contextInjectionState" === t3.message.case ? { injectionId: t3.message.value.injectionId, state: t3.message.value.state?.state.case, message: e3, update: t3 } : void 0;
      })(t2), n2 = void 0 === r2 ? void 0 : k(this, E, "f").get(r2.injectionId);
      return void 0 === r2 || void 0 === n2 ? (function(e3) {
        return "interactionUpdate" === e3.message.case && "contextInjectionState" !== e3.message.value.message.case;
      })(t2) ? [...k(this, b, "m", C).call(this, e2), t2] : [t2] : "handedOver" === n2.state && "queued" === r2.state ? [] : "queuedForNextTurn" === r2.state ? (k(this, E, "f").set(r2.injectionId, { frame: n2.frame, state: "held", ack: r2, by: e2 }), []) : (k(this, E, "f").set(r2.injectionId, { frame: n2.frame, state: "settled" }), [t2]);
    }, C = function(e2) {
      const t2 = [];
      for (const [r2, n2] of k(this, E, "f")) "held" === n2.state && n2.by === e2 && (k(this, E, "f").set(r2, { frame: n2.frame, state: "settled" }), t2.push(n2.ack.message));
      return t2;
    };
    const T = (0, s.h)("HarnessAgentClient"), R = 4294967295;
    class B extends n.SK {
      constructor(e2, t2) {
        const r2 = `Module ${e2.label} (${(0, A.rw)(e2.generation)}) failed`;
        super(`${r2}: ${t2.reason}`, { cause: t2.cause instanceof Error ? t2.cause : void 0, displayInfo: { title: r2, detail: t2.reason, isRetryable: false } }), this.reason = t2.reason, this.errorClass = t2.errorClass, this.early = t2.early, this.module = e2;
      }
    }
    const P = /* @__PURE__ */ new Set([p.C.Unknown, p.C.Internal, p.C.InvalidArgument, p.C.Unimplemented, p.C.DataLoss]);
    function J(e2) {
      if (!(e2 instanceof m.T)) return e2;
      const t2 = (0, v._)(e2.rawMessage, e2.code);
      if (t2 === e2.rawMessage) return e2;
      const r2 = new m.T(t2, e2.code, e2.metadata, void 0, e2.cause);
      return r2.details = e2.details, r2;
    }
    function M(e2, t2, r2 = { crossed: false, faults: [] }, n2 = () => performance.now()) {
      let s2 = false;
      const o2 = () => true !== t2?.aborted, i2 = (t3, r3) => {
        const n3 = o2() ? (function(e3) {
          if (e3 instanceof m.T && P.has(e3.code) && !(e3.findDetails(d.ErrorDetails).length > 0)) return { reason: e3.rawMessage, errorClass: (0, f.s)(e3.code) };
        })(t3) ?? ((function(e3) {
          return e3 instanceof m.T && e3.metadata.get(w.mj) === w.xP;
        })(t3) ? { reason: t3.rawMessage, errorClass: w.xP } : void 0) : void 0;
        return void 0 === n3 ? t3 : new B(e2, { ...n3, early: r3, cause: t3 });
      };
      return { requests: (e3) => ({ [Symbol.asyncIterator]() {
        const t3 = e3[Symbol.asyncIterator]();
        let n3 = false;
        return S({ wrapper: { next: async () => {
          const e4 = await t3.next();
          return n3 ||= true !== e4.done, e4;
        } }, inner: t3, mapThrown: (e4) => i2(J(e4), !n3 && !r2.crossed) });
      } }), responses: (t3) => ({ [Symbol.asyncIterator]() {
        const a2 = t3[Symbol.asyncIterator]();
        return S({ wrapper: { async next() {
          let t4;
          try {
            t4 = await a2.next();
          } catch (e3) {
            const t5 = i2(J(e3), !r2.crossed);
            throw t5 instanceof B && r2.faults.push(t5), t5;
          }
          if (true === t4.done) {
            if (!s2 && o2()) {
              const t5 = new B(e2, { reason: "stream ended without turnEnded", errorClass: "no_turn_ended", early: !r2.crossed });
              throw r2.faults.push(t5), t5;
            }
            return t4;
          }
          const c2 = t4.value.message, l2 = "interactionUpdate" === c2.case ? c2.value.message.case : void 0;
          return "heartbeat" !== l2 && (r2.crossed = true, r2.lastProgressAt = n2()), "turnEnded" === l2 && (s2 = true), t4;
        } }, inner: a2 });
      } }) };
    }
    const q = (0, o.cF)(/* @__PURE__ */ Symbol("moduleTurn"), void 0), D = 12e4;
    function O(e2, t2) {
      return { unary: (t3, r2, n2, s2, o2, i2, a2) => e2.unary(t3, r2, n2, s2, o2, i2, a2), stream: async (r2, n2, s2, o2, i2, a2, c2) => {
        const l2 = await e2.stream(r2, n2, s2, o2, i2, a2, c2);
        return r2.typeName === u.InferenceService.typeName && n2.name === u.InferenceService.methods.runInference.name && t2.get(new Headers(i2).get("x-original-request-id") ?? "")?.(l2.header), l2;
      } };
    }
    function N(e2, t2, r2, o2, u2, { onQuietStop: d2, now: p2 = () => performance.now() } = {}) {
      const m2 = (0, a.Zj)(l.AgentService, (function(e3) {
        return (0, h.o)({ httpClient: e3.call, baseUrl: "https://agent-harness.local", useBinaryFormat: true, interceptors: [], acceptCompression: [], sendCompression: null, compressMinBytes: R, readMaxBytes: R, writeMaxBytes: R });
      })(e2), { injectTraceHeaders: false, extractHeaders: (e3) => e3.get(q)?.callerTraceHeaders ?? {} }), f2 = new n.PW({ run: (e3, r3, n2) => {
        const s2 = e3.get(q);
        if (void 0 === s2) throw new Error("The harness client's transport serves only its own client's turns");
        s2.watchStop();
        const o3 = M(t2, n2?.signal, s2.guard, p2), i2 = (function(e4) {
          const t3 = e4.beginCall();
          return { requests: (r4) => ({ [Symbol.asyncIterator]() {
            const n3 = r4[Symbol.asyncIterator](), s3 = [];
            let o4 = false;
            return S({ wrapper: { next: async () => {
              const r5 = s3.shift();
              if (void 0 !== r5) return { done: false, value: r5 };
              const i3 = await n3.next();
              return true !== i3.done && (e4.recordSent(i3.value), o4 || (o4 = true, s3.push(...t3.handedOver))), i3;
            } }, inner: n3 });
          } }), responses: (e5) => ({ [Symbol.asyncIterator]() {
            const r4 = e5[Symbol.asyncIterator](), n3 = [];
            let s3 = false;
            return S({ wrapper: { async next() {
              for (; ; ) {
                const e6 = n3.shift();
                if (void 0 !== e6) return { done: false, value: e6 };
                if (s3) return { done: true, value: void 0 };
                const o4 = await r4.next();
                true === o4.done ? (s3 = true, n3.push(...t3.end())) : n3.push(...t3.admit(o4.value));
              }
            } }, inner: r4 });
          } }) };
        })(s2.steers);
        return o3.responses(i2.responses(m2.run(e3, o3.requests(i2.requests(r3)), n2)));
      } }, y.q.reconnectEndpoint, { loop: "module", retryLogging: { tag: y.q.logTag, includeErrorObjects: false }, decorateAttempt: _.zy, prepareAttemptContext: (e3, { attemptRequestId: t3, runOptions: r3 }) => (0, g.qo)((0, g.Am)(e3, { attemptRequestId: t3, composerId: r3.conversationGroupId ?? r3.conversationId })) });
      return { run: async (e3, t3, n2, a2, l2, m3, h2, y2, w2, v2, { onHeader: _2, ...A2 }) => {
        const S2 = (function(e4, t4) {
          const r3 = (0, s.o1)(e4, t4).with(i.b6, { ...e4.get(i.b6), ...t4 });
          return r3.with(c.Fm, (0, c.ts)({ backend: r3.get(c.Fm), labels: { ...t4 } }));
        })(e3, u2);
        let b2;
        const E2 = () => {
          b2 ??= p2() - (k2.guard.lastProgressAt ?? p2());
        }, I2 = /* @__PURE__ */ new Set(), C2 = (e4) => {
          I2.has(e4) || (I2.add(e4), e4.aborted ? E2() : e4.addEventListener("abort", E2, { once: true }));
        }, k2 = { guard: { crossed: false, faults: [], lastProgressAt: p2() }, steers: new x(), callerTraceHeaders: (0, g.qk)(S2), watchStop: () => C2(y2.signal) };
        C2(e3.signal);
        const R2 = A2.generationUUID ?? crypto.randomUUID();
        void 0 !== _2 && o2.set(R2, (e4) => {
          try {
            _2(e4);
          } catch (e5) {
            T.warn(S2, "RunInference onHeader callback threw", { error: String(e5) });
          }
        });
        try {
          await f2.run(S2.with(q, k2), t3, n2, a2, l2, m3, h2, y2, w2, v2, { ...A2, generationUUID: R2 });
        } finally {
          o2.delete(R2);
          for (const e4 of k2.steers.unclaimedAcks()) await l2.sendUpdate(S2, e4).catch((e5) => {
            T.warn(S2, "Unclaimed steer's ack not delivered", { error: String(e5) });
          });
          for (const e4 of I2) e4.removeEventListener("abort", E2);
          if (void 0 !== b2 && b2 >= D) try {
            d2?.(b2);
          } catch (e4) {
            T.warn(S2, "Quiet stop not reported", { error: String(e4) });
          }
        }
        r2(k2.guard.faults);
      } };
    }
  }