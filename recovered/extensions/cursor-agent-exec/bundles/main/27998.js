// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 27998 range:1333368..1395419
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
27998: (e, t, r) => {
    "use strict";
    function n(e2) {
      const t2 = e2.replace(/\\/g, "/").split("/"), r2 = t2[t2.length - 1] ?? "";
      return "SKILL.md" === r2 && t2.length >= 2 ? t2[t2.length - 2] ?? "" : r2;
    }
    r.d(t, { rFE: () => bt, jnL: () => _t, riQ: () => ft, acw: () => gt, iKs: () => yt, dSv: () => Ae, yJV: () => Qt, R10: () => Qe, sn5: () => Ve, dwX: () => Re, gl4: () => pt, FHy: () => Ut, J6s: () => Lt, cME: () => Nt.c, YH2: () => Ze, y7k: () => an, f9i: () => ln, ha6: () => Pe, Eyz: () => er, CWo: () => Yr.C, n6O: () => C, Thz: () => nn.Th, mHV: () => nn.mH, RZw: () => nn.RZ, Pwd: () => on.Pw, HwP: () => vr, KHj: () => mn.K, iul: () => De, YhQ: () => Ne, OkD: () => Ge, kUN: () => kt, sOX: () => Xe, IGV: () => or, iZk: () => tt, uwM: () => Le, d_R: () => je, qwl: () => Ue, eG3: () => $e, e7l: () => Fe, ryB: () => rt, $bB: () => tn, uaw: () => Hr, mA: () => Wr, Zg0: () => Ie, RpG: () => nt, vr_: () => hr, w4j: () => st, zyy: () => We, Qw5: () => St, IjH: () => mt, IGA: () => it, PEk: () => Xr, I2x: () => pn, oGr: () => en, jH1: () => at, u8v: () => ct, bob: () => dt, zNu: () => rn, _1u: () => Ct, boZ: () => At, Yg2: () => It, anv: () => Rt, rn8: () => Bt, bL4: () => ht, ODj: () => Ft, Lxn: () => Jt, Yib: () => Ot, Hvh: () => Et, ggl: () => Mt, pY2: () => qt, sfj: () => Pt, JP: () => _r, TGP: () => $t, TIN: () => cn, TZ: () => br, PiX: () => Sr, ghi: () => kr, Rdb: () => xr, qNu: () => Er, T0F: () => Ir, ohZ: () => Tr, _As: () => Xt, mlu: () => Dt, pq5: () => Kr, Mfc: () => Zt, MZM: () => Vr, VNS: () => Ce, oAs: () => Zr, GuN: () => Qr, qkk: () => Mr, wve: () => Jr, ujx: () => u, kQm: () => l, ci8: () => n, OOW: () => c, XPF: () => sn, rz0: () => dn, ZnQ: () => un, vx3: () => et, N1y: () => vt, sC3: () => hn, TQC: () => ze, Lnu: () => Or });
    const s = "Description is required", o = "Failed to read skill file: ", i = "Invalid skill frontmatter: ";
    function a(e2) {
      return e2 instanceof Error ? e2.message : String(e2);
    }
    function c(e2) {
      return o + a(e2);
    }
    function l(e2) {
      return i + a(e2);
    }
    function u(e2, t2) {
      return e2 || t2 ? void 0 : s;
    }
    /* @__PURE__ */ new Set(["EACCES", "EPERM", "ENOENT", "ENOTDIR", "EISDIR", "ELOOP", "ENAMETOOLONG"]);
    var d = r(37949), p = r(13807), m = r(55094), h = r(91434), f = r(95339);
    const g = / \[git: ([^\]]*)\]/, y = 2048;
    function w(e2, t2, r2) {
      if ("object" != typeof t2 || null === t2) return e2;
      if (g.test(e2)) return e2;
      const n2 = t2, s2 = [];
      if ("string" == typeof n2.gitErrorCode && n2.gitErrorCode.length > 0 && s2.push(`gitErrorCode=${n2.gitErrorCode}`), "number" == typeof n2.exitCode && Number.isFinite(n2.exitCode) && s2.push(`exitCode=${n2.exitCode}`), 0 === s2.length) return e2;
      let o2 = `${e2} [git: ${s2.join(" ")}]`;
      var i2;
      return true === r2?.includeStderr && "string" == typeof n2.stderr && n2.stderr.length > 0 && (o2 += `
--- git stderr ---
${i2 = (0, f.ix)(n2.stderr), i2.length <= y ? i2 : `${i2.slice(0, y)}… [truncated to 2048 chars]`}`), o2;
    }
    const v = (0, d.h)("SimpleControlledExecManager"), _ = (0, p.v5)("agent_exec.controlled.exec.duration_ms", { description: "Duration of controlled exec operations in milliseconds", labelNames: ["exec_case"] }), b = (0, p.Pu)("agent_exec.controlled.exec.success", { description: "Count of successful controlled exec operations", labelNames: ["exec_case"] }), S = (0, p.Pu)("agent_exec.controlled.exec.error", { description: "Count of failed controlled exec operations", labelNames: ["exec_case"] }), k = { computerUseArgs: "Computer use is not enabled for this environment, so the Computer tool and the computerUse subagent cannot run here. Do not retry computer actions; verify with non-GUI methods (automated tests, shell commands) instead. (No computer-use handler is registered on this exec daemon.)", recordScreenArgs: "Screen recording is not enabled for this environment, so recordings cannot be captured here. Do not retry; skip the recording and present other evidence instead. (No record-screen handler is registered on this exec daemon.)" };
    class x extends Error {
      constructor(e2) {
        super(e2), this.name = "ControlledExecDisposedError";
      }
    }
    function E(e2) {
      return e2 instanceof x ? "EXEC_BACKEND_UNAVAILABLE" : e2 instanceof Error && "AgentExecStreamStartTimeoutError" === e2.name ? "AGENT_EXEC_STREAM_START_TIMEOUT" : void 0;
    }
    class I {
      constructor(e2, t2, r2) {
        this.exec = e2, this.deserializeArgs = t2, this.serializeResult = r2;
      }
      handle(e2, t2) {
        const r2 = this.deserializeArgs(t2);
        if (void 0 === r2) return;
        const { id: n2, args: s2 } = r2;
        return (async function* (r3) {
          const o2 = performance.now(), i2 = [], a2 = await r3.exec.execute(e2, s2, { execId: t2.execId, hookContextCollector: i2, deliverAgentStoreConflictNotices: true === t2.acceptHookAdditionalContexts }), c2 = r3.serializeResult(n2, a2);
          c2.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - o2)), i2.length > 0 && (c2.hookAdditionalContexts = i2), yield c2;
        })(this);
      }
    }
    class T {
      constructor(e2, t2, r2) {
        this.exec = e2, this.deserializeArgs = t2, this.serializeStream = r2;
      }
      handle(e2, t2) {
        const r2 = this.deserializeArgs(t2);
        if (void 0 === r2) return;
        const { id: n2, args: s2 } = r2;
        return (async function* (r3) {
          const o2 = performance.now(), i2 = [], a2 = r3.exec.execute(e2, s2, { execId: t2.execId, hookContextCollector: i2, deliverAgentStoreConflictNotices: true === t2.acceptHookAdditionalContexts });
          try {
            for await (const e3 of a2) {
              const t3 = r3.serializeStream(n2, e3);
              t3.localExecutionTimeMs = Math.round(Math.max(0, performance.now() - o2)), yield t3;
            }
          } finally {
            const e3 = i2.filter((e4) => "agentStoreConflict" === e4.hookEventName);
            e3.length > 0 && (yield new m.yT({ id: n2, hookAdditionalContexts: e3 }));
          }
        })(this);
      }
    }
    class C {
      constructor(e2) {
        this.handlers = [], this.runningExecs = /* @__PURE__ */ new Map();
        const t2 = e2?.includeGitStderrInThrows ?? false;
        this.includeGitStderrInThrows = "function" == typeof t2 ? t2 : () => t2;
      }
      register(e2) {
        this.handlers.push(e2);
      }
      handleControlMessage(e2) {
        if ("abort" === e2.message.case) {
          const t2 = e2.message.value.id, r2 = this.runningExecs.get(t2);
          r2 && r2();
        }
      }
      handle(e2, t2) {
        const [r2, n2] = e2.withCancel();
        this.runningExecs.set(t2.id, n2);
        const s2 = t2.message.case ?? "unknown";
        for (const e3 of this.handlers) {
          const o3 = e3.handle(r2, t2);
          if (void 0 === o3) continue;
          const i3 = o3, a2 = (0, h.Jt)();
          let c2;
          const l2 = () => {
            c2 = setTimeout(() => {
              a2.write(new m.$Y({ message: { case: "heartbeat", value: new m.VA({ id: t2.id }) } })).then(l2).catch(() => {
              });
            }, 3e3);
          };
          l2();
          const u2 = performance.now();
          return (async () => {
            try {
              for await (const e4 of i3) await a2.write(e4);
              await a2.write(new m.$Y({ message: { case: "streamClose", value: new m.D9({ id: t2.id }) } })), b.increment(r2, 1, { exec_case: s2 });
            } catch (e4) {
              if (e4 instanceof h.W2) return;
              S.increment(r2, 1, { exec_case: s2 }), await a2.write(new m.$Y({ message: { case: "throw", value: new m.Fu({ id: t2.id, error: e4 instanceof Error ? w(e4.message, e4, { includeStderr: this.includeGitStderrInThrows() }) : "Unknown error", stackTrace: e4 instanceof Error ? e4.stack : void 0, errorCode: E(e4) }) } }));
            } finally {
              const e4 = performance.now() - u2;
              _.histogram(r2, e4, { exec_case: s2 }), clearTimeout(c2), a2.close(), this.runningExecs.delete(t2.id), n2();
            }
          })(), a2;
        }
        this.runningExecs.delete(t2.id), n2();
        const o2 = t2.message.case, i2 = (void 0 === o2 ? void 0 : k[o2]) ?? `No handler found for server message of type ${o2}`;
        return v.error(e2, i2, { messageCase: o2 }), S.increment(e2, 1, { exec_case: s2 }), (async function* () {
          yield new m.$Y({ message: { case: "throw", value: new m.Fu({ id: t2.id, error: i2 }) } }), yield new m.$Y({ message: { case: "streamClose", value: new m.D9({ id: t2.id }) } });
        })();
      }
      static fromResources(e2, t2) {
        const r2 = new C(t2);
        for (const [t3, n2] of e2.entries()) t3.registerControlledImplementation(n2, r2);
        return r2;
      }
    }
    var P = r(98875);
    async function A(e2) {
      const t2 = e2[Symbol.asyncIterator](), r2 = await t2.next();
      if (r2.done) return;
      const n2 = { async *[Symbol.asyncIterator]() {
        for (; ; ) {
          const e3 = await t2.next();
          if (e3.done) return;
          yield e3.value;
        }
      } };
      return { firstItem: r2.value, rest: n2 };
    }
    var R = function(e2, t2, r2) {
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
    }, M = /* @__PURE__ */ (function(e2) {
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
    const J = (0, d.h)("ExecutorResource"), O = (0, p.Pu)("agent_exec.hook_additional_context.delivered", { description: "Hook additional_context carriers drained into the caller collector", labelNames: ["hook_event_name"] });
    class B {
      constructor(e2, t2, r2) {
        this.execManager = e2, this.serializeArgs = t2, this.deserializeResult = r2;
      }
      async execute(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const s2 = R(n2, (0, P.VI)(e2.withName("ExecutorResource.execute")), false), o2 = s2.ctx;
          void 0 !== r2?.execId && s2.span.setAttribute("exec.id", r2.execId);
          const i2 = (0, P.mJ)(o2), a2 = i2 ? new m.Kg(i2) : void 0, c2 = this.execManager.createExecInstance(o2, (e3) => {
            const n3 = this.serializeArgs(e3, t2);
            return new m.Ye({ id: n3.id, message: n3.message, execId: r2?.execId, machineId: r2?.machineId, spanContext: a2, acceptHookAdditionalContexts: void 0 !== r2?.hookContextCollector });
          }), l2 = await A(c2);
          if (void 0 === l2) throw new Error("No exec result");
          let { firstItem: u2, rest: d2 } = l2;
          const p2 = (e3) => {
            if (void 0 !== r2?.hookContextCollector && e3.hookAdditionalContexts.length > 0) {
              r2.hookContextCollector.push(...e3.hookAdditionalContexts);
              for (const t3 of e3.hookAdditionalContexts) O.increment(o2, 1, { hook_event_name: t3.hookEventName });
            }
          };
          p2(u2);
          let h2 = this.deserializeResult(u2);
          for (; void 0 === h2; ) {
            const e3 = await A(d2);
            if (void 0 === e3) throw new Error("No result value");
            u2 = e3.firstItem, d2 = e3.rest, p2(u2), h2 = this.deserializeResult(u2);
          }
          return (async () => {
            try {
              for await (const e3 of d2) p2(e3);
            } catch (e3) {
              J.info(o2, "Ignoring exec stream shutdown during detached drain", { error: e3 });
            }
          })().catch(() => {
          }), h2;
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          M(n2);
        }
      }
    }
    class D {
      constructor(e2, t2, r2) {
        this.execManager = e2, this.serializeArgs = t2, this.deserializeStream = r2;
      }
      async *execute(e2, t2, r2) {
        const n2 = { stack: [], error: void 0, hasError: false };
        try {
          const s2 = R(n2, (0, P.VI)(e2.withName("StreamExecutorResource.execute")), false).ctx, o2 = (0, P.mJ)(s2), i2 = o2 ? new m.Kg(o2) : void 0, a2 = this.execManager.createExecInstance(s2, (e3) => {
            const n3 = this.serializeArgs(e3, t2);
            return new m.Ye({ id: n3.id, message: n3.message, execId: r2?.execId, machineId: r2?.machineId, spanContext: i2, acceptHookAdditionalContexts: void 0 !== r2?.hookContextCollector || true === r2?.deliverAgentStoreConflictNotices });
          });
          for await (const e3 of a2) {
            void 0 !== r2?.hookContextCollector && e3.hookAdditionalContexts.length > 0 && r2.hookContextCollector.push(...e3.hookAdditionalContexts);
            const t3 = this.deserializeStream(e3);
            void 0 !== t3 && (yield t3);
          }
        } catch (e3) {
          n2.error = e3, n2.hasError = true;
        } finally {
          M(n2);
        }
      }
    }
    const q = "agent-store-conflict-executor", N = "agent-store-conflict-notice-executor", F = "background-shell-executor", U = "canvas-diagnostics-executor", L = "computer-use-executor", $ = "conversation-search-executor", j = "delete-executor", G = "diagnostics-executor", z = "fetch-executor", W = "force-background-shell-executor", H = "force-background-subagent-executor", K = "git-diff-executor", V = "grep-executor", Y = "hook-executor", Q = "list-mcp-resources-executor", X = "ls-executor", Z = "mcp-allowlist-precheck-executor", ee = "mcp-executor", te = "mcp-state-executor", re = "mini-swe-agent-bash-executor", ne = "pi-bash-executor", se = "pi-edit-executor", oe = "pi-find-executor", ie = "pi-grep-executor", ae = "pi-ls-executor", ce = "pi-read-executor", le = "pi-write-executor", ue = "read-executor", de = "read-mcp-resource-executor", pe = "record-screen-executor", me = "redacted-read-executor", he = "request-context-executor", fe = "shell-allowlist-precheck-executor", ge = "shell-executor", ye = "shell-stream-executor", we = "smart-mode-classifier-executor", ve = "subagent-await-executor", _e = "subagent-executor", be = "web-fetch-allowlist-precheck-executor", Se = "write-background-shell-input-executor", ke = "write-executor", xe = "@anysphere/agent-exec/resource/";
    function Ee(e2) {
      return /* @__PURE__ */ Symbol.for(`${xe}${e2}`);
    }
    function Ie(e2, t2, r2) {
      return { name: e2, symbol: Ee(e2), remoteImplementation: t2, registerControlledImplementation: r2 };
    }
    class Te {
      constructor(e2, t2) {
        this.resource = e2, this.value = t2;
      }
    }
    function Ce(e2, t2) {
      return [e2, t2];
    }
    class Pe {
      constructor() {
        this.resources = /* @__PURE__ */ new Map();
      }
      register(e2, t2) {
        this.resources.set(e2.symbol, new Te(e2, t2));
      }
      get(e2) {
        return this.resources.get(e2.symbol)?.value;
      }
      entries() {
        return Array.from(this.resources.values()).map((e2) => [e2.resource, e2.value]);
      }
    }
    class Ae {
      constructor(e2, t2) {
        this.baseAccessor = e2, this.localResources = /* @__PURE__ */ new Map();
        for (const [e3, r2] of t2) this.localResources.set(e3.symbol, { resource: e3, implementation: r2 });
      }
      get(e2) {
        const t2 = this.localResources.get(e2.symbol);
        return t2 ? t2.implementation : this.baseAccessor.get(e2);
      }
    }
    class Re {
      constructor(e2, t2) {
        this.remoteAccessor = e2, this.localResources = /* @__PURE__ */ new Map();
        for (const [e3, r2] of t2) this.localResources.set(e3.symbol, { resource: e3, implementation: r2 });
      }
      get(e2) {
        const t2 = this.localResources.get(e2.symbol);
        return t2 ? t2.implementation : this.remoteAccessor.get(e2);
      }
      *entries() {
        for (const { resource: e2, implementation: t2 } of this.localResources.values()) yield [e2, t2];
        for (const e2 of this.remoteAccessor.entries()) this.localResources.has(e2[0].symbol) || (yield e2);
      }
    }
    function Me(e2) {
      return function(t2, r2) {
        return new m.Ye({ id: t2, message: { case: e2, value: r2 } });
      };
    }
    function Je(e2) {
      return (t2) => {
        if (t2.message.case === e2) return t2.message.value;
      };
    }
    function Oe(e2) {
      return function(t2, r2) {
        const n2 = { case: e2, value: r2 };
        return new m.yT({ id: t2, message: n2 });
      };
    }
    function Be(e2) {
      return function(t2) {
        if (t2.message.case === e2) return { id: t2.id, args: t2.message.value };
      };
    }
    const De = Ie(q, (e2) => new B(e2, Me("agentStoreConflictArgs"), Je("agentStoreConflictResult")), (e2, t2) => {
      t2.register(new I(e2, Be("agentStoreConflictArgs"), Oe("agentStoreConflictResult")));
    });
    /* @__PURE__ */ new Set(["write_conflict", "create_conflict", "truncate_conflict_failed", "conflict_fallback_failed", "quota_exceeded", "gap"]);
    class qe {
      async execute(e2, t2) {
        return "ack" === t2.op ? { kind: "acked", count: 0 } : "release" === t2.op ? { kind: "released", count: 0 } : "noteDeferredEagerWrittenPaths" === t2.op ? { kind: "noted", count: 0 } : { kind: "not-applicable" };
      }
    }
    const Ne = Ie(N, (e2) => new qe(), (e2, t2) => {
    });
    async function Fe(e2, t2, r2, n2) {
      return await e2.execute(t2, { op: "syncAndPeek", ...void 0 !== r2?.conversationId ? { conversationId: r2.conversationId } : {}, ...void 0 !== r2?.writtenPaths ? { writtenPaths: r2.writtenPaths } : {}, ...void 0 !== r2?.timeoutMs ? { timeoutMs: r2.timeoutMs } : {}, ...true === r2?.eager ? { eager: true } : {} }, n2);
    }
    async function Ue(e2, t2, r2, n2) {
      return await e2.execute(t2, { op: "peek", ...void 0 !== r2?.conversationId ? { conversationId: r2.conversationId } : {} }, n2);
    }
    async function Le(e2, t2, r2, n2, s2) {
      0 !== r2.length && await e2.execute(t2, { op: "ack", eventIds: r2, ...void 0 !== n2?.conversationId ? { conversationId: n2.conversationId } : {} }, s2);
    }
    async function $e(e2, t2, r2, n2, s2) {
      0 !== r2.length && await e2.execute(t2, { op: "release", eventIds: r2, ...void 0 !== n2?.conversationId ? { conversationId: n2.conversationId } : {} }, s2);
    }
    async function je(e2, t2, r2, n2, s2) {
      0 !== r2.length && await e2.execute(t2, { op: "noteDeferredEagerWrittenPaths", writtenPaths: r2, ...void 0 !== n2?.conversationId ? { conversationId: n2.conversationId } : {} }, s2);
    }
    const Ge = Ie(F, (e2) => new B(e2, Me("backgroundShellSpawnArgs"), Je("backgroundShellSpawnResult")), (e2, t2) => {
      t2.register(new I(e2, Be("backgroundShellSpawnArgs"), Oe("backgroundShellSpawnResult")));
    }), ze = Ie(Se, (e2) => new B(e2, Me("writeShellStdinArgs"), Je("writeShellStdinResult")), (e2, t2) => {
      t2.register(new I(e2, Be("writeShellStdinArgs"), Oe("writeShellStdinResult")));
    });
    function We(e2) {
      const t2 = {};
      return "string" == typeof e2.title && e2.title.trim().length > 0 && (t2.title = e2.title), "string" == typeof e2.cwd && e2.cwd.trim().length > 0 && (t2.cwd = e2.cwd), "number" == typeof e2.startTimeMs && Number.isFinite(e2.startTimeMs) && e2.startTimeMs > 0 && (t2.startTimeMs = String(Math.floor(e2.startTimeMs))), Object.keys(t2).length > 0 ? t2 : void 0;
    }
    function He(e2, t2) {
      if (e2.some((e3) => e3.conversationId === t2.conversationId && e3.id === t2.id)) return { queue: [...e2] };
      const r2 = { ...t2 };
      if (void 0 === t2.groupKey) return { queue: [...e2, r2] };
      const n2 = e2.findIndex((e3) => e3.conversationId === t2.conversationId && e3.groupKey === t2.groupKey);
      if (-1 === n2) return { queue: [...e2, r2] };
      const s2 = [...e2], o2 = s2[n2];
      return s2[n2] = r2, { queue: s2, replaced: o2 };
    }
    class Ke {
      constructor() {
        this.pending = [], this.inFlightById = /* @__PURE__ */ new Map(), this.acceptedKeys = /* @__PURE__ */ new Set(), this.suppressedIdsByConversation = /* @__PURE__ */ new Map(), this.revision = 0;
      }
      acceptedKey(e2, t2) {
        return `${e2}\0${t2}`;
      }
      enqueue(e2) {
        const t2 = e2.id.trim(), r2 = this.acceptedKey(e2.conversationId, t2);
        if (0 === t2.length || this.acceptedKeys.has(r2)) return;
        if (this.suppressedIdsByConversation.get(e2.conversationId)?.has(t2)) return;
        this.acceptedKeys.add(r2);
        const { queue: n2, replaced: s2 } = He(this.pending, { ...e2, id: t2 });
        this.pending = n2, s2 && this.acceptedKeys.delete(this.acceptedKey(s2.conversationId, s2.id)), this.revision++;
      }
      pull(e2) {
        const t2 = this.suppressedIdsByConversation.get(e2), r2 = [], n2 = [];
        let s2 = 0;
        for (const o2 of this.pending) o2.conversationId === e2 ? t2?.has(o2.id) ? (this.acceptedKeys.delete(this.acceptedKey(e2, o2.id)), s2++) : (r2.push(o2), this.inFlightById.set(o2.id, o2)) : n2.push(o2);
        return (r2.length > 0 || s2 > 0) && (this.pending = n2, this.revision++), r2.map((e3) => ({ ...e3 }));
      }
      pullAll() {
        return [...new Set(this.pending.map((e2) => e2.conversationId))].flatMap((e2) => this.pull(e2));
      }
      ack(e2) {
        const t2 = [];
        for (const r2 of e2) {
          const e3 = r2.trim(), n2 = this.inFlightById.get(e3);
          n2 && (this.acceptedKeys.delete(this.acceptedKey(n2.conversationId, e3)), t2.push(n2)), this.inFlightById.delete(e3);
        }
        return t2;
      }
      nack(e2, t2) {
        const r2 = new Set(e2.map((e3) => e3.trim())), n2 = [];
        for (const [e3, t3] of this.inFlightById) r2.has(e3) && (n2.push(t3), this.inFlightById.delete(e3));
        if (!t2.requeue) {
          for (const e3 of n2) this.acceptedKeys.delete(this.acceptedKey(e3.conversationId, e3.id));
          return;
        }
        if (0 === n2.length) return;
        let s2 = n2;
        for (const e3 of this.pending) {
          const { queue: t3, replaced: r3 } = He(s2, e3);
          s2 = t3, r3 && this.acceptedKeys.delete(this.acceptedKey(r3.conversationId, r3.id));
        }
        this.pending = s2, this.revision++;
      }
      suppress(e2, t2) {
        const r2 = t2.trim();
        if (0 === r2.length) return;
        const n2 = this.suppressedIdsByConversation.get(e2) ?? /* @__PURE__ */ new Set();
        n2.add(r2), this.suppressedIdsByConversation.set(e2, n2);
        let s2 = false;
        const o2 = this.pending.length;
        this.pending = this.pending.filter((t3) => t3.conversationId !== e2 || t3.id !== r2), this.pending.length !== o2 && (this.acceptedKeys.delete(this.acceptedKey(e2, r2)), s2 = true);
        const i2 = this.inFlightById.get(r2);
        i2 && i2.conversationId === e2 && (this.inFlightById.delete(r2), this.acceptedKeys.delete(this.acceptedKey(e2, r2)), s2 = true), s2 && this.revision++;
      }
      unsuppress(e2, t2) {
        const r2 = this.suppressedIdsByConversation.get(e2);
        r2?.delete(t2.trim()) && 0 === r2.size && this.suppressedIdsByConversation.delete(e2);
      }
      unsuppressId(e2) {
        const t2 = e2.trim();
        for (const e3 of this.suppressedIdsByConversation.keys()) this.unsuppress(e3, t2);
      }
      clear(e2) {
        let t2 = false;
        const r2 = this.pending.length;
        this.pending = this.pending.filter((t3) => t3.conversationId !== e2), this.pending.length !== r2 && (t2 = true);
        for (const [r3, n3] of this.inFlightById) n3.conversationId === e2 && (this.inFlightById.delete(r3), t2 = true);
        const n2 = this.acceptedKey(e2, "");
        for (const e3 of this.acceptedKeys) e3.startsWith(n2) && (this.acceptedKeys.delete(e3), t2 = true);
        const s2 = this.suppressedIdsByConversation.delete(e2);
        (t2 || s2) && this.revision++;
      }
      hasPending(e2) {
        return void 0 === e2 ? this.pending.length > 0 : this.pending.some((t2) => t2.conversationId === e2);
      }
      hasPendingMatching(e2, t2) {
        return this.pending.some((r2) => r2.conversationId === e2 && t2(r2.payload));
      }
      getPendingCount() {
        return this.pending.length;
      }
      getUnsettledCount() {
        return this.acceptedKeys.size;
      }
      getRevision() {
        return this.revision;
      }
    }
    const Ve = "local";
    function Ye(e2, t2) {
      return !t2 || (!t2.kind || e2.kind === t2.kind) && ((!t2.state || e2.state === t2.state) && (!t2.ownerId || e2.ownerId === t2.ownerId));
    }
    class Qe {
      constructor() {
        this.records = /* @__PURE__ */ new Map(), this.wakeups = new Ke();
      }
      upsertWork(e2) {
        this.records.set(e2.id, e2);
      }
      clearWork(e2) {
        const t2 = this.records.delete(e2);
        return this.wakeups.unsuppressId(e2), t2;
      }
      abortWork(e2) {
        const t2 = this.records.get(e2);
        return !!t2 && (t2.abort && t2.abort(), this.records.delete(e2), this.wakeups.unsuppressId(e2), true);
      }
      hasRunningWork(e2) {
        for (const t2 of this.records.values()) if ("running" === t2.state && Ye(t2, e2)) return true;
        return false;
      }
      abortAllWork(e2) {
        let t2 = 0;
        for (const r2 of [...this.records.values()]) Ye(r2, e2) && (r2.abort && r2.abort(), t2++, this.records.delete(r2.id), this.wakeups.unsuppressId(r2.id));
        return t2;
      }
      listWork(e2) {
        const t2 = [];
        for (const r2 of this.records.values()) Ye(r2, e2) && t2.push({ id: r2.id, kind: r2.kind, state: r2.state, ownerId: r2.ownerId, hasAbort: Boolean(r2.abort), metadata: r2.metadata });
        return t2;
      }
      enqueue(e2) {
        this.wakeups.enqueue(e2);
      }
      pull(e2) {
        return this.wakeups.pull(e2);
      }
      ack(e2) {
        return this.wakeups.ack(e2);
      }
      nack(e2, t2) {
        this.wakeups.nack(e2, t2);
      }
      suppress(e2, t2) {
        this.wakeups.suppress(e2, t2);
      }
      enqueueCompletion(e2) {
        this.enqueue({ conversationId: Ve, id: e2.taskId, payload: e2, source: e2.kind });
      }
      drainCompletions() {
        const e2 = this.wakeups.pullAll();
        return this.ack(e2.map((e3) => e3.id)), e2.map((e3) => e3.payload);
      }
      hasPendingCompletions(e2) {
        return this.wakeups.hasPending(e2);
      }
      markAwaitedCompletion(e2) {
        this.suppress(Ve, e2);
      }
      getWakeupRevision() {
        return this.wakeups.getRevision();
      }
    }
    const Xe = Ie(U, (e2) => new B(e2, Me("canvasDiagnosticsArgs"), Je("canvasDiagnosticsResult")), (e2, t2) => {
      t2.register(new I(e2, Be("canvasDiagnosticsArgs"), Oe("canvasDiagnosticsResult")));
    });
    class Ze extends Error {
      constructor(e2) {
        super(e2), this.code = "NO_GIT_API", this.name = "NoGitAPIError", Error.captureStackTrace && Error.captureStackTrace(this, Ze);
      }
    }
    function et(e2) {
      const t2 = { mouse_move: 0, click: 0, mouse_down: 0, mouse_up: 0, drag: 0, scroll: 0, type: 0, key: 0, wait: 0, screenshot: 0, cursor_position: 0 };
      for (const r2 of e2) switch (r2.action.case) {
        case "mouseMove":
          t2.mouse_move += 1;
          break;
        case "click":
          t2.click += 1;
          break;
        case "mouseDown":
          t2.mouse_down += 1;
          break;
        case "mouseUp":
          t2.mouse_up += 1;
          break;
        case "drag":
          t2.drag += 1;
          break;
        case "scroll":
          t2.scroll += 1;
          break;
        case "type":
          t2.type += 1;
          break;
        case "key":
          t2.key += 1;
          break;
        case "wait":
          t2.wait += 1;
          break;
        case "screenshot":
          t2.screenshot += 1;
          break;
        case "cursorPosition":
          t2.cursor_position += 1;
      }
      return { actionCount: e2.length, actionCounts: t2 };
    }
    const tt = Ie(L, (e2) => new B(e2, Me("computerUseArgs"), Je("computerUseResult")), (e2, t2) => {
      t2.register(new I(e2, Be("computerUseArgs"), Oe("computerUseResult")));
    }), rt = Ie($, (e2) => new B(e2, Me("conversationSearchArgs"), Je("conversationSearchResult")), (e2, t2) => {
      t2.register(new I(e2, Be("conversationSearchArgs"), Oe("conversationSearchResult")));
    }), nt = Ie(j, (e2) => new B(e2, Me("deleteArgs"), Je("deleteResult")), (e2, t2) => {
      t2.register(new I(e2, Be("deleteArgs"), Oe("deleteResult")));
    }), st = Ie(G, (e2) => new B(e2, Me("diagnosticsArgs"), Je("diagnosticsResult")), (e2, t2) => {
      t2.register(new I(e2, Be("diagnosticsArgs"), Oe("diagnosticsResult")));
    });
    var ot = r(33002);
    (0, ot.cF)(/* @__PURE__ */ Symbol("execConversationId"), void 0), (0, ot.cF)(/* @__PURE__ */ Symbol("execRequestId"), void 0), (0, ot.cF)(/* @__PURE__ */ Symbol("execBrowserOperationSource"), void 0);
    const it = Ie(z, (e2) => new B(e2, Me("fetchArgs"), Je("fetchResult")), (e2, t2) => {
      t2.register(new I(e2, Be("fetchArgs"), Oe("fetchResult")));
    }), at = Ie(K, (e2) => new B(e2, Me("gitDiffRequest"), Je("gitDiffResponse")), (e2, t2) => {
      t2.register(new I(e2, Be("gitDiffRequest"), Oe("gitDiffResponse")));
    }), ct = Ie(V, (e2) => new B(e2, Me("grepArgs"), Je("grepResult")), (e2, t2) => {
      t2.register(new I(e2, Be("grepArgs"), Oe("grepResult")));
    });
    var lt = r(91022), ut = r(70355);
    const dt = Ie(Y, (e2) => new B(e2, Me("executeHookArgs"), Je("executeHookResult")), (e2, t2) => {
      t2.register(new I(e2, Be("executeHookArgs"), Oe("executeHookResult")));
    });
    class pt {
      constructor(e2) {
        this.hookExecutor = e2;
      }
      hasFailClosedHooksForStep(e2, t2) {
        return this.hookExecutor.hasFailClosedHooksForStep?.(e2, t2) ?? false;
      }
      async execute(e2, t2) {
        const r2 = t2.request;
        if (!r2) return new m.S1({ response: void 0 });
        switch (r2.request.case) {
          case "preCompact": {
            const e3 = r2.request.value, t3 = { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, lt.U4)(e3), trigger: "manual" === e3.trigger ? "manual" : "auto", context_usage_percent: e3.contextUsagePercent, context_tokens: Number(e3.contextTokens), context_window_size: Number(e3.contextWindowSize), message_count: e3.messageCount, messages_to_compact: e3.messagesToCompact, is_first_compaction: e3.isFirstCompaction }, n3 = await this.hookExecutor.executeHookForStep(lt._E.preCompact, t3);
            return new m.S1({ response: new m.w5({ response: { case: "preCompact", value: new ut.$_({ userMessage: n3?.user_message }) } }) });
          }
          case "subagentStart": {
            const e3 = r2.request.value, t3 = { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, lt.U4)(e3), subagent_id: e3.subagentId, subagent_type: e3.subagentType, task: e3.task, parent_conversation_id: e3.parentConversationId, tool_call_id: e3.toolCallId, subagent_model: e3.subagentModel, is_parallel_worker: e3.isParallelWorker, git_branch: e3.gitBranch }, n3 = await this.hookExecutor.executeHookForStep(lt._E.subagentStart, t3);
            return new m.S1({ response: new m.w5({ response: { case: "subagentStart", value: new ut.W0({ permission: n3?.permission, userMessage: n3?.user_message, additionalContext: n3?.additional_context }) } }) });
          }
          case "subagentStop": {
            const e3 = r2.request.value, t3 = { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, lt.U4)(e3), subagent_id: e3.subagentId, subagent_type: e3.subagentType, status: e3.status, duration_ms: Number(e3.durationMs), summary: e3.summary, parent_conversation_id: e3.parentConversationId, message_count: e3.messageCount, tool_call_count: e3.toolCallCount, error_message: e3.errorMessage, modified_files: e3.modifiedFiles, git_branch: e3.gitBranch, loop_count: e3.loopCount ?? 0, task: e3.task, description: e3.description, ...e3.childConversationId ? { child_conversation_id: e3.childConversationId } : {} }, n3 = await this.hookExecutor.executeHookForStep(lt._E.subagentStop, t3);
            return new m.S1({ response: new m.w5({ response: { case: "subagentStop", value: new ut.AH({ followupMessage: n3?.followup_message, additionalContext: n3?.additional_context }) } }) });
          }
          case "beforeSubmitPrompt": {
            const e3 = r2.request.value, t3 = await this.hookExecutor.executeHookForStep(lt._E.beforeSubmitPrompt, { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, lt.U4)(e3), prompt: e3.prompt, attachments: (n2 = e3.attachments, n2.flatMap((e4) => "file" === e4.type || "rule" === e4.type ? [{ type: e4.type, file_path: e4.filePath }] : [])), composer_mode: e3.composerMode });
            return new m.S1({ response: new m.w5({ response: { case: "beforeSubmitPrompt", value: new ut.u1({ continue: t3?.continue, userMessage: t3?.user_message, additionalContext: t3?.additional_context }) } }) });
          }
          case "afterAgentResponse": {
            const e3 = r2.request.value;
            return await this.hookExecutor.executeHookForStep(lt._E.afterAgentResponse, { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, lt.U4)(e3), text: e3.text, input_tokens: void 0 !== e3.inputTokens ? Number(e3.inputTokens) : void 0, output_tokens: void 0 !== e3.outputTokens ? Number(e3.outputTokens) : void 0, cache_read_tokens: void 0 !== e3.cacheReadTokens ? Number(e3.cacheReadTokens) : void 0, cache_write_tokens: void 0 !== e3.cacheWriteTokens ? Number(e3.cacheWriteTokens) : void 0 }), new m.S1({ response: new m.w5({ response: { case: "afterAgentResponse", value: new ut.FW() } }) });
          }
          case "afterAgentThought": {
            const e3 = r2.request.value;
            return await this.hookExecutor.executeHookForStep(lt._E.afterAgentThought, { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, lt.U4)(e3), text: e3.text, duration_ms: void 0 !== e3.durationMs ? Number(e3.durationMs) : void 0 }), new m.S1({ response: new m.w5({ response: { case: "afterAgentThought", value: new ut.H() } }) });
          }
          case "stop": {
            const e3 = r2.request.value, t3 = await this.hookExecutor.executeHookForStep(lt._E.stop, { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, lt.U4)(e3), status: e3.status, loop_count: e3.loopCount, input_tokens: void 0 !== e3.inputTokens ? Number(e3.inputTokens) : void 0, output_tokens: void 0 !== e3.outputTokens ? Number(e3.outputTokens) : void 0, cache_read_tokens: void 0 !== e3.cacheReadTokens ? Number(e3.cacheReadTokens) : void 0, cache_write_tokens: void 0 !== e3.cacheWriteTokens ? Number(e3.cacheWriteTokens) : void 0 });
            return new m.S1({ response: new m.w5({ response: { case: "stop", value: new ut.rT({ followupMessage: t3?.followup_message }) } }) });
          }
          case "preToolUse": {
            const e3 = r2.request.value, t3 = e3.toolInput ? e3.toolInput.toJson() : {}, n3 = { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, lt.U4)(e3), ...e3.parentToolCallId ? { parent_tool_call_id: e3.parentToolCallId } : {}, tool_name: e3.toolName, tool_input: t3, tool_use_id: e3.toolUseId, cwd: e3.cwd }, s2 = await this.hookExecutor.executeHookForStep(lt._E.preToolUse, n3);
            return new m.S1({ response: new m.w5({ response: { case: "preToolUse", value: new ut.Wn({ permission: s2?.permission, userMessage: s2?.user_message, agentMessage: s2?.agent_message, updatedInput: s2?.updated_input ? JSON.stringify(s2.updated_input) : void 0, additionalContext: s2?.additional_context }) } }) });
          }
          case "postToolUse": {
            const e3 = r2.request.value, t3 = e3.toolInput ? e3.toolInput.toJson() : {}, n3 = { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, lt.U4)(e3), ...e3.parentToolCallId ? { parent_tool_call_id: e3.parentToolCallId } : {}, tool_name: e3.toolName, tool_input: t3, tool_output: e3.toolOutput, duration: Number(e3.durationMs), tool_use_id: e3.toolUseId, cwd: e3.cwd }, s2 = await this.hookExecutor.executeHookForStep(lt._E.postToolUse, n3);
            return new m.S1({ response: new m.w5({ response: { case: "postToolUse", value: new ut.uB({ additionalContext: s2?.additional_context }) } }) });
          }
          case "postToolUseFailure": {
            const e3 = r2.request.value, t3 = e3.toolInput ? e3.toolInput.toJson() : {}, n3 = { conversation_id: e3.conversationId ?? "", generation_id: e3.generationId ?? "", model: e3.model ?? "", ...(0, lt.U4)(e3), ...e3.parentToolCallId ? { parent_tool_call_id: e3.parentToolCallId } : {}, tool_name: e3.toolName, tool_input: t3, error_message: e3.errorMessage, failure_type: e3.failureType, duration: Number(e3.durationMs), tool_use_id: e3.toolUseId, is_interrupt: e3.isInterrupt }, s2 = await this.hookExecutor.executeHookForStep(lt._E.postToolUseFailure, n3);
            return new m.S1({ response: new m.w5({ response: { case: "postToolUseFailure", value: new ut.U1({ additionalContext: s2?.additional_context }) } }) });
          }
          default:
            return new m.S1({ response: void 0 });
        }
        var n2;
      }
    }
    (0, ot.cF)(/* @__PURE__ */ Symbol("execHookConversationId"), void 0), (0, ot.cF)(/* @__PURE__ */ Symbol("execHookGenerationId"), void 0), (0, ot.cF)(/* @__PURE__ */ Symbol("execHookModel"), void 0);
    const mt = (0, ot.cF)(/* @__PURE__ */ Symbol("execHookWorkspaceRoots"), void 0), ht = Ie(X, (e2) => new B(e2, Me("lsArgs"), Je("lsResult")), (e2, t2) => {
      t2.register(new I(e2, Be("lsArgs"), Oe("lsResult")));
    }), ft = "cursor-ide-browser", gt = "cursor-dev-control", yt = "custom-user-tools", wt = /* @__PURE__ */ new Set(["cursor-app-control", "cursor-backend-control", "cursor-browser-extension", ft, gt, yt, "fsd", "cursor-subscriptions", "cursor-cloud", "suggestions", "Cursor Slack Tools", "Cursor Automation Tools"]);
    function vt(e2) {
      return !wt.has(e2);
    }
    const _t = "cursor", bt = /* @__PURE__ */ new Set([gt, ft]);
    function St(e2) {
      if (void 0 !== e2 && 0 !== Object.keys(e2).length) try {
        return JSON.stringify(e2);
      } catch {
        return;
      }
    }
    function kt(e2) {
      return { name: e2.toolName, description: e2.description, arguments: e2.inputSchema, outputSchema: e2.outputSchema, plugin: e2.plugin, marketplace: e2.marketplace, pluginId: e2.pluginId, marketplaceId: e2.marketplaceId };
    }
    function xt(e2) {
      if (void 0 !== e2) try {
        return JSON.parse(e2);
      } catch {
        return;
      }
    }
    function Et(e2) {
      return xt(e2.inputSchemaJson) ?? e2.inputSchema?.toJson();
    }
    function It(e2) {
      if ("object" != typeof e2 || null === e2) return false;
      const t2 = e2;
      return "function" == typeof t2.getSnapshot && "function" == typeof t2.getAllSnapshots && "function" == typeof t2.onDidChange;
    }
    var Tt;
    function Ct(e2) {
      return void 0 === e2 || void 0 === e2.serverIdentifiers;
    }
    function Pt(...e2) {
      const [t2, r2] = e2;
      return e2.length < 2 ? t2 : Ct(r2) ? { serverIdentifiers: void 0, reason: t2?.reason ?? r2?.reason } : void 0 === t2 ? r2 : Ct(t2) ? { serverIdentifiers: void 0, reason: t2.reason ?? r2?.reason } : { serverIdentifiers: [.../* @__PURE__ */ new Set([...t2.serverIdentifiers ?? [], ...r2?.serverIdentifiers ?? []])], reason: t2.reason ?? r2?.reason };
    }
    function At(e2) {
      if ("object" != typeof e2 || null === e2) return false;
      const t2 = e2;
      return ["getTools", "getToolSet", "getClients", "getClient", "getInstructions", "getToolsForServers"].every((e3) => "function" == typeof t2[e3]);
    }
    function Rt(e2) {
      return At(e2) && "function" == typeof e2.onDidChange;
    }
    function Mt(e2) {
      switch (e2) {
        case "needsAuth":
          return "This MCP server requires authentication before its tools can be used.";
        case "error":
          return "This MCP server failed during live tool discovery. Its tools are unavailable until the connection is fixed.";
        case "loading":
          return "This MCP server is still loading; tools may not be available yet.";
        default:
          return;
      }
    }
    function Jt(e2) {
      switch (e2.kind) {
        case "ready":
          return "connected";
        case "requires_authentication":
          return "needsAuth";
        case "error":
          return "error";
        default:
          return "loading";
      }
    }
    !(function(e2) {
      e2.Snapshots = "cursor_mcp_lease_snapshot_store", e2.Status = "cursor_mcp_lease_server_status", e2.Settings = "cursor_mcp_lease_settings", e2.Providers = "cursor_mcp_lease_providers", e2.Unknown = "cursor_mcp_lease_unknown";
    })(Tt || (Tt = {}));
    const Ot = Ie(ee, (e2) => new B(e2, Me("mcpArgs"), Je("mcpResult")), (e2, t2) => {
      t2.register(new I(e2, Be("mcpArgs"), Oe("mcpResult")));
    }), Bt = Ie(Q, (e2) => new B(e2, Me("listMcpResourcesExecArgs"), Je("listMcpResourcesExecResult")), (e2, t2) => {
      t2.register(new I(e2, Be("listMcpResourcesExecArgs"), Oe("listMcpResourcesExecResult")));
    }), Dt = Ie(de, (e2) => new B(e2, Me("readMcpResourceExecArgs"), Je("readMcpResourceExecResult")), (e2, t2) => {
      t2.register(new I(e2, Be("readMcpResourceExecArgs"), Oe("readMcpResourceExecResult")));
    }), qt = Ie(te, (e2) => new B(e2, Me("mcpStateExecArgs"), Je("mcpStateExecResult")), (e2, t2) => {
      t2.register(new I(e2, Be("mcpStateExecArgs"), Oe("mcpStateExecResult")));
    });
    var Nt = r(88107);
    const Ft = Ie(Z, (e2) => new B(e2, Me("mcpAllowlistPrecheckArgs"), Je("mcpAllowlistPrecheckResult")), (e2, t2) => {
      t2.register(new I(e2, Be("mcpAllowlistPrecheckArgs"), Oe("mcpAllowlistPrecheckResult")));
    }), Ut = "mcps", Lt = "tools";
    function $t(e2) {
      try {
        const t2 = JSON.parse(e2);
        return "string" == typeof t2.name && t2.name.length > 0 ? t2.name : "string" == typeof t2.toolName && t2.toolName.length > 0 ? t2.toolName : void 0;
      } catch {
        return;
      }
    }
    var jt = r(20941), Gt = r(11197), zt = r(88623), Wt = r(90066), Ht = r(65716), Kt = r(36038);
    const Vt = new TextEncoder();
    async function Yt(e2) {
      const t2 = Vt.encode(e2), r2 = await crypto.subtle.digest("SHA-256", t2);
      return { sha256: [...new Uint8Array(r2)].map((e3) => e3.toString(16).padStart(2, "0")).join(""), bytes: t2.byteLength };
    }
    class Qt {
      constructor(e2) {
        this.inner = e2;
      }
      async execute(e2, t2, r2) {
        if (true !== t2.digestOnly) return this.inner.execute(e2, t2, r2);
        const n2 = new zt.a2({ ...t2, digestOnly: void 0 });
        return (async function(e3) {
          if ("success" !== e3.result.case) return e3;
          const t3 = e3.result.value;
          if ("content" !== t3.output.case) return e3;
          const { sha256: r3, bytes: n3 } = await Yt(t3.output.value);
          return new zt.sV({ result: { case: "success", value: new zt.mE({ ...t3, output: { case: void 0 }, outputBlobId: void 0, sha256: r3, sizeBytes: BigInt(n3) }) } });
        })(await this.inner.execute(e2, n2, r2));
      }
    }
    const Xt = Ie(ue, (e2) => new B(e2, Me("readArgs"), Je("readResult")), (e2, t2) => {
      t2.register(new I(e2, Be("readArgs"), Oe("readResult")));
    }), Zt = Ie(me, (e2) => new B(e2, Me("redactedReadArgs"), Je("redactedReadResult")), (e2, t2) => {
      t2.register(new I(e2, Be("redactedReadArgs"), Oe("redactedReadResult")));
    }), er = "$file:", tr = jt.p, rr = 16777216, nr = 4;
    function sr(e2) {
      if ("string" != typeof e2 || !e2.startsWith(er)) return;
      const t2 = e2.slice(er.length);
      return (0, Wt.Z1)(t2) ? t2 : void 0;
    }
    function or(e2) {
      const t2 = /* @__PURE__ */ new Set(), r2 = (e3) => {
        const n2 = sr(e3);
        void 0 !== n2 ? t2.add(n2) : Array.isArray(e3) ? e3.forEach(r2) : null !== e3 && "object" == typeof e3 && Object.values(e3).forEach(r2);
      };
      return r2(e2), [...t2];
    }
    const ir = (0, p.Pu)("mcp.symbolic_args.expansion", { description: "Outcome of late-binding $file:/abs/path MCP argument expansion at the executor boundary", labelNames: ["route", "outcome"] }), ar = (0, p.v5)("mcp.symbolic_args.bytes", { description: "Total bytes substituted into one MCP tool call by $file:/abs/path arguments", labelNames: ["route"] }), cr = (0, p.Pu)("mcp.symbolic_args.describe", { description: "Per-file $file:/abs/path describe reads: `vm_digest` when the read executor hashed the file where it lives, `outdated_executor` when it returned the text instead (it predates $file: expansion, so the call is refused)", labelNames: ["source"] }), lr = (0, p.v5)("mcp.symbolic_args.paths", { description: "Number of distinct $file:/abs/path arguments expanded in one MCP tool call", labelNames: ["route"] });
    function ur(e2, t2, r2) {
      return { kind: e2, message: `Could not resolve the symbolic argument "${er}${t2}": ${r2} A string argument of the form "${er}/absolute/path" is replaced with that file's contents before the tool runs; pass the literal text instead if you did not intend that.` };
    }
    class dr extends Error {
      constructor(e2) {
        super(e2.message), this.failure = e2;
      }
    }
    async function pr(e2, t2, r2, n2, s2, { maxFileBytes: o2 = tr, maxTotalBytes: i2 = rr }) {
      if (t2.length > nr) throw new dr(ur("too_many", t2[nr] ?? "", `at most ${nr} symbolic arguments may be used in one call (${t2.length} given). Split the call or pass paths to tools that accept them.`));
      const a2 = r2();
      if (void 0 === a2) throw new dr(ur("no_read_executor", t2[0] ?? "", "this environment cannot read files on behalf of a tool call."));
      const c2 = await (0, Ht.xb)(t2, (t3) => (async function(e3, t4, r3, n3, s3, o3) {
        const i3 = await t4.execute(e3, new zt.a2({ path: r3, toolCallId: n3, ...o3 ? { digestOnly: true } : {} }));
        switch (i3.result.case) {
          case "success": {
            const t5 = i3.result.value, n4 = o3 && void 0 !== t5.sha256 && void 0 !== t5.sizeBytes ? { sha256: t5.sha256, bytes: Number(t5.sizeBytes) } : void 0;
            if (void 0 === n4 && "content" !== t5.output.case) throw new dr(ur("not_text", r3, "the file is not a text file."));
            if (o3 && (cr.increment(e3, 1, { source: void 0 !== n4 ? "vm_digest" : "outdated_executor" }), void 0 === n4)) throw new dr(ur("outdated_executor", r3, "the computer that would run this tool has an older tool runner that cannot substitute files. Read the file and pass its contents instead."));
            const a3 = "content" === t5.output.case ? t5.output.value : void 0, { sha256: c3, bytes: l3 } = n4 ?? await Yt(a3 ?? "");
            if (t5.truncated || l3 > s3) throw new dr(ur("too_large", r3, `the file is too large to inline (${Number(t5.fileSize) || l3} bytes; at most ${s3} bytes per file may be substituted). Pass the path to a tool that accepts one, or read a range of it.`));
            return { content: a3, bytes: l3, sha256: c3 };
          }
          case "fileNotFound":
            throw new dr(ur("not_found", r3, "the file does not exist."));
          case "permissionDenied":
            throw new dr(ur("permission_denied", r3, "reading it was not permitted."));
          case "rejected":
            throw new dr(ur("rejected", r3, `${i3.result.value.reason || "the read was rejected"}. Only files the Read tool can read without approval can be substituted; read it with Read instead.`));
          case "invalidFile":
            throw new dr(ur("not_text", r3, "the file cannot be read as text."));
          case "error":
            throw new dr(ur("read_error", r3, i3.result.value.error));
          default:
            throw new dr(ur("read_error", r3, "the read returned no result."));
        }
      })(e2, a2, t3, n2, o2, s2), { max: nr });
      let l2 = 0;
      for (const [e3, r3] of c2) if (l2 += r3.bytes, l2 > i2) throw new dr(ur("over_budget", e3, `together the ${t2.length} symbolic arguments exceed the ${i2} bytes that may be substituted per call. Pass paths to tools that accept them instead.`));
      return c2;
    }
    function mr(e2, t2) {
      return e2 instanceof dr ? e2.failure : ur("read_error", t2, e2 instanceof Error ? e2.message : String(e2));
    }
    async function hr(e2, { paths: t2, getReadExecutor: r2, toolCallId: n2, ...s2 }) {
      const o2 = [...new Set(t2)];
      try {
        const t3 = await pr(e2, o2, r2, n2, true, s2);
        return ir.increment(e2, 1, { route: "review", outcome: "described" }), { kind: "described", descriptors: o2.map((e3) => {
          const r3 = t3.get(e3);
          return new Gt.n({ path: e3, sha256: r3?.sha256 ?? "", sizeBytes: BigInt(r3?.bytes ?? 0) });
        }) };
      } catch (t3) {
        const r3 = mr(t3, o2[0] ?? "");
        return ir.increment(e2, 1, { route: "review", outcome: r3.kind }), { kind: "failed", failure: r3 };
      }
    }
    async function fr(e2, t2, { route: r2, getReadExecutor: n2, ...s2 }) {
      if (0 === t2.symbolicPathArguments.length) return { kind: "none" };
      const o2 = new Map(t2.symbolicPathArguments.map((e3) => [e3.path, e3])), i2 = [...o2.keys()], a2 = (t3) => (ir.increment(e2, 1, { route: r2, outcome: t3.kind }), { kind: "failed", failure: t3, result: new Gt.iz({ result: { case: "error", value: new Gt.Nh({ error: t3.message }) } }) });
      let c2;
      try {
        c2 = await pr(e2, i2, n2, t2.toolCallId, false, s2);
      } catch (e3) {
        return a2(mr(e3, i2[0] ?? ""));
      }
      let l2 = 0;
      for (const [e3, t3] of c2) {
        l2 += t3.bytes;
        const r3 = o2.get(e3);
        if (r3?.sha256 !== t3.sha256) return a2(ur("content_changed", e3, `the file changed after the call was reviewed (${r3?.sizeBytes ?? 0} bytes then, ${t3.bytes} bytes now), so its new contents were not sent. Re-run the call to review the current contents.`));
      }
      const u2 = new Map([...c2].map(([e3, t3]) => [e3, t3.content ?? ""])), d2 = (function(e3, t3) {
        const r3 = (e4) => {
          const n3 = sr(e4);
          return void 0 !== n3 ? t3.get(n3) ?? e4 : Array.isArray(e4) ? e4.map(r3) : null !== e4 && "object" == typeof e4 ? Object.fromEntries(Object.entries(e4).map(([e5, t4]) => [e5, r3(t4)])) : e4;
        };
        return Object.fromEntries(Object.entries(e3).map(([e4, t4]) => [e4, r3(t4)]));
      })(Object.fromEntries(Object.entries(t2.args).map(([e3, t3]) => [e3, t3.toJson()])), u2), p2 = t2.clone();
      return p2.args = Object.fromEntries(Object.entries(d2).map(([e3, t3]) => [e3, Kt.Value.fromJson(t3)])), p2.symbolicPathArguments = [], ir.increment(e2, 1, { route: r2, outcome: "expanded" }), ar.record(e2, l2, { route: r2 }), lr.record(e2, i2.length, { route: r2 }), { kind: "expanded", expansion: { args: p2, files: [...c2].map(([e3, t3]) => ({ path: e3, bytes: t3.bytes })), paths: i2.length, bytes: l2 } };
    }
    const gr = /\b413\b|payload too large|request entity too large|body.*too large|too large.*body|ECONNRESET|EPIPE|socket hang up|max(?:imum)? (?:body|payload|request|content) (?:size|length)/i;
    function yr(e2, t2, r2, n2) {
      return gr.test(t2) ? (ir.increment(e2, 1, { route: n2, outcome: "server_rejected_body" }), `${t2}

The request carried ${r2.bytes} bytes of file contents substituted from ${r2.paths} "${er}/abs/path" argument(s), and the server appears to have rejected the request body as too large. Do not retry the same call: pass a smaller file or a range of it, or use a tool that accepts a path or upload instead.`) : t2;
    }
    function wr(e2) {
      return e2.files.map((e3) => `"${er}${e3.path}" was replaced with the contents of ${e3.path} (${e3.bytes} bytes) before the call.`).join("\n");
    }
    class vr {
      constructor(e2, t2) {
        this.inner = e2, this.getReadExecutor = t2;
      }
      isBackendRouted(e2) {
        return this.inner.isBackendRouted?.(e2) ?? false;
      }
      async execute(e2, t2, r2) {
        if (0 === t2.symbolicPathArguments.length) return this.inner.execute(e2, t2, r2);
        const n2 = await fr(e2, t2, { route: "local", getReadExecutor: this.getReadExecutor });
        if ("none" === n2.kind) return this.inner.execute(e2, t2, r2);
        if ("failed" === n2.kind) return n2.result;
        let s2;
        try {
          s2 = await this.inner.execute(e2, n2.expansion.args, r2);
        } catch (t3) {
          throw t3 instanceof Error && (t3.message = yr(e2, t3.message, n2.expansion, "local")), t3;
        }
        return (function(e3, t3, r3, n3) {
          const s3 = t3.clone();
          return "success" === s3.result.case ? s3.result.value.content.push(new Gt._Z({ content: { case: "text", value: new Gt.zN({ text: wr(r3) }) } })) : "error" === s3.result.case && (s3.result.value.error = yr(e3, s3.result.value.error, r3, n3)), s3;
        })(e2, s2, n2.expansion, "local");
      }
    }
    const _r = Ie(re, (e2) => new B(e2, Me("miniSweAgentBashArgs"), Je("miniSweAgentBashResult")), (e2, t2) => {
      t2.register(new I(e2, Be("miniSweAgentBashArgs"), Oe("miniSweAgentBashResult")));
    }), br = Ie(ne, (e2) => new B(e2, Me("piBashArgs"), Je("piBashResult")), (e2, t2) => {
      t2.register(new I(e2, Be("piBashArgs"), Oe("piBashResult")));
    }), Sr = Ie(se, (e2) => new B(e2, Me("piEditArgs"), Je("piEditResult")), (e2, t2) => {
      t2.register(new I(e2, Be("piEditArgs"), Oe("piEditResult")));
    }), kr = Ie(oe, (e2) => new B(e2, Me("piFindArgs"), Je("piFindResult")), (e2, t2) => {
      t2.register(new I(e2, Be("piFindArgs"), Oe("piFindResult")));
    }), xr = Ie(ie, (e2) => new B(e2, Me("piGrepArgs"), Je("piGrepResult")), (e2, t2) => {
      t2.register(new I(e2, Be("piGrepArgs"), Oe("piGrepResult")));
    }), Er = Ie(ae, (e2) => new B(e2, Me("piLsArgs"), Je("piLsResult")), (e2, t2) => {
      t2.register(new I(e2, Be("piLsArgs"), Oe("piLsResult")));
    }), Ir = Ie(ce, (e2) => new B(e2, Me("piReadArgs"), Je("piReadResult")), (e2, t2) => {
      t2.register(new I(e2, Be("piReadArgs"), Oe("piReadResult")));
    }), Tr = Ie(le, (e2) => new B(e2, Me("piWriteArgs"), Je("piWriteResult")), (e2, t2) => {
      t2.register(new I(e2, Be("piWriteArgs"), Oe("piWriteResult")));
    });
    var Cr = r(44498), Pr = r(19260), Ar = r(62671), Rr = r(19950);
    const Mr = Ie(ge, (e2) => new B(e2, Me("shellArgs"), Je("shellResult")), (e2, t2) => {
      t2.register(new I(e2, Be("shellArgs"), Oe("shellResult")));
    }), Jr = Ie(ye, (e2) => new D(e2, Me("shellStreamArgs"), Je("shellStream")), (e2, t2) => {
      t2.register(new T(e2, Be("shellStreamArgs"), Oe("shellStream")));
    }), Or = Ie(ke, (e2) => new B(e2, Me("writeArgs"), Je("writeResult")), (e2, t2) => {
      t2.register(new I(e2, Be("writeArgs"), Oe("writeResult")));
    }), Br = "This operation is not allowed in readonly mode. The subagent was launched with readonly: true, which restricts write operations.", Dr = "This operation is not allowed in readonly mode. The subagent was launched with readonly: true, which restricts shell, write, delete, and MCP operations.";
    function qr(e2, t2) {
      return new Ar.jn({ command: t2.command ?? "", workingDirectory: t2.workingDirectory ?? "", error: e2, isReadonly: true });
    }
    function Nr(e2) {
      return { execute: async (t2, r2) => new Ar.W4({ result: { case: "permissionDenied", value: qr(e2, r2) } }) };
    }
    function Fr(e2) {
      return { async *execute(t2, r2) {
        yield new Ar.FI({ event: { case: "permissionDenied", value: qr(e2, r2) } });
      } };
    }
    function Ur(e2) {
      return { execute: async (t2, r2) => new Cr.Lt({ result: { case: "permissionDenied", value: qr(e2, r2) } }) };
    }
    function Lr(e2) {
      return { execute: async (t2, r2) => new Rr.v3({ result: { case: "permissionDenied", value: new Rr.U7({ path: r2.path, error: e2, isReadonly: true }) } }) };
    }
    function $r(e2) {
      return { execute: async (t2, r2) => new Pr.Pi({ result: { case: "permissionDenied", value: new Pr.QG({ path: r2.path, clientVisibleError: e2, isReadonly: true }) } }) };
    }
    function jr(e2) {
      return { execute: async (t2, r2) => new Gt.iz({ result: { case: "permissionDenied", value: new Gt.HQ({ error: `${e2} Tool: ${r2.name}`, isReadonly: true }) } }) };
    }
    function Gr(e2) {
      return { execute: async (t2, r2) => new Cr.nt({ result: { case: "error", value: new Cr.Gv({ error: e2 }) } }) };
    }
    function zr(e2) {
      const t2 = [[Or, Lr(e2.errorMessage)], [nt, $r(e2.errorMessage)], [Ot, jr(e2.errorMessage)]];
      return e2.wrapShell && t2.push([Mr, Nr(e2.errorMessage)], [Jr, Fr(e2.errorMessage)], [Ge, Ur(e2.errorMessage)]), e2.includeWriteBackgroundShellStdin && t2.push([ze, Gr(e2.errorMessage)]), t2;
    }
    function Wr(e2, t2) {
      return new Ae(e2, zr({ errorMessage: Br, wrapShell: t2, includeWriteBackgroundShellStdin: false }));
    }
    function Hr(e2) {
      return new Re(e2, zr({ errorMessage: Dr, wrapShell: true, includeWriteBackgroundShellStdin: true }));
    }
    const Kr = Ie(pe, (e2) => new B(e2, Me("recordScreenArgs"), Je("recordScreenResult")), (e2, t2) => {
      t2.register(new I(e2, Be("recordScreenArgs"), Oe("recordScreenResult")));
    }), Vr = Ie(he, (e2) => new B(e2, Me("requestContextArgs"), Je("requestContextResult")), (e2, t2) => {
      t2.register(new I(e2, Be("requestContextArgs"), Oe("requestContextResult")));
    });
    var Yr = r(82589);
    const Qr = Ie(fe, (e2) => new B(e2, Me("shellAllowlistPrecheckArgs"), Je("shellAllowlistPrecheckResult")), (e2, t2) => {
      t2.register(new I(e2, Be("shellAllowlistPrecheckArgs"), Oe("shellAllowlistPrecheckResult")));
    }), Xr = Ie(W, (e2) => new B(e2, Me("forceBackgroundShellArgs"), Je("forceBackgroundShellResult")), (e2, t2) => {
      t2.register(new I(e2, Be("forceBackgroundShellArgs"), Oe("forceBackgroundShellResult")));
    });
    function Zr(e2, t2) {
      e2.hookApprovalRequirement = void 0 !== t2 ? new Ar.In(t2) : void 0;
    }
    function en(e2) {
      return e2.hookApprovalRequirement;
    }
    function tn(e2) {
      return new Ar.In({ kind: Ar.b.FORCE_PROMPT, reason: e2 });
    }
    function rn(e2) {
      return e2?.kind === Ar.b.FORCE_PROMPT;
    }
    var nn = r(18846);
    const sn = Ie(we, (e2) => new B(e2, Me("smartModeClassifierArgs"), Je("smartModeClassifierResult")), (e2, t2) => {
      t2.register(new I(e2, Be("smartModeClassifierArgs"), Oe("smartModeClassifierResult")));
    });
    var on = r(12544);
    const an = "Sub-agent is currently running. You may send the follow-up message when it has completed.", cn = (0, ot.cF)(/* @__PURE__ */ Symbol("pendingSubagentReplay"), void 0);
    const ln = "If you intended to interrupt this agent, you may retry with `interrupt` set to true";
    Error;
    const un = Ie(_e, (e2) => new B(e2, Me("subagentArgs"), Je("subagentResult")), (e2, t2) => {
      t2.register(new I(e2, Be("subagentArgs"), Oe("subagentResult")));
    }), dn = Ie(ve, (e2) => new B(e2, Me("subagentAwaitArgs"), Je("subagentAwaitResult")), (e2, t2) => {
      t2.register(new I(e2, Be("subagentAwaitArgs"), Oe("subagentAwaitResult")));
    }), pn = Ie(H, (e2) => new B(e2, Me("forceBackgroundSubagentArgs"), Je("forceBackgroundSubagentResult")), (e2, t2) => {
      t2.register(new I(e2, Be("forceBackgroundSubagentArgs"), Oe("forceBackgroundSubagentResult")));
    });
    var mn = r(83508);
    const hn = Ie(be, (e2) => new B(e2, Me("webFetchAllowlistPrecheckArgs"), Je("webFetchAllowlistPrecheckResult")), (e2, t2) => {
      t2.register(new I(e2, Be("webFetchAllowlistPrecheckArgs"), Oe("webFetchAllowlistPrecheckResult")));
    });
  }